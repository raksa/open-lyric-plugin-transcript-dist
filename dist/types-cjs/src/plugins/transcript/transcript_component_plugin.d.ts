import type { OpenLyricComponentHost, OpenLyricContributions, OpenLyricPlugin, OpenLyricSurface } from '../../editor/components/index.js';
/**
 * The transcript plugin expressed in the generic per-component contract from
 * `research/editor-structure-implemented.md` (§"Example: the transcript
 * plugin"). All contribution data is the real registry data
 * (`transcript_ol_editor.ts`) — the same `createTranscriptController`
 * factory, action label, and CSS the application consumes.
 *
 * Page chrome and plugin composition are two independent axes, exactly as for
 * the surface classes: {@link EditorPluginTranscript.installShellMarkup} is
 * the ONLY thing that puts transcript markup on a page shell, and attaching
 * the plugin is what makes that markup do something. A page entry that
 * composes the plugin without calling the static gets the feature registered
 * and no UI — every ref the controller drives stays null, and the controller
 * guards each one, so it simply sits inert.
 *
 * `install()` (runs synchronously from `addPlugin()`, before any boot):
 * publishes the registry data through the GLOBAL plugin registry, so a
 * wrapped application (the app pages) creates its transcript controller
 * during boot. The dashboard no longer registers transcript as a built-in —
 * composing this plugin is the only thing that enables it (singleton-guarded:
 * with a spec already registered this instance owns nothing). It installs no
 * markup: a page that did not ask for the chrome does not get it.
 *
 * `onMount()` (standalone `Editor` only — wrap-phase facades keep plugins
 * dormant, so this never runs on the app pages): mounts the record/upload
 * flow for real. The trigger controls — built from the SAME
 * `trigger-controls.html` fragment, adapted for a bare host — go into the
 * standalone chrome's toolbar, the dialogs get a home on the chrome panel
 * when no page copy exists, and the real transcript controller runs against
 * the component's Monaco surface with a locally built context (refs bag,
 * live editor-mode view, `EditorPreferencesStore`). Monaco-only, like a
 * language plugin's keyboard: the textarea fallback and `chrome: false`
 * hosts keep the declarative contributions but mount no flow.
 */
export interface EditorPluginTranscriptOptions {
    /**
     * Transcription backend. Today's implementation is browser-direct
     * ElevenLabs — the API key is entered by the user at runtime and kept in
     * local storage; no server is involved.
     */
    provider?: 'elevenlabs';
    /**
     * Where the browser-warning banner goes when a STANDALONE mount has to
     * install it (`onMount()` — a bare `Editor` on a page that called no
     * `installShellMarkup()`). Omit it and the banner takes a fixed-position
     * toast panel the plugin creates at the bottom of the viewport, so a host
     * with nowhere to put it still gets one.
     *
     * This is the standalone counterpart of the same option on
     * {@link EditorPluginTranscript.installShellMarkup}, which is what a page
     * shell uses to place its own chrome. An instance never installs page
     * chrome, so on the app pages this option does nothing.
     */
    container?: HTMLElement | null;
}
interface TranscriptControllerLike {
    destroy?: () => void;
    syncHostUi?: () => void;
}
declare class EditorPluginTranscript implements OpenLyricPlugin {
    /**
     * Install the plugin's page-shell chrome — the trigger controls, the
     * browser-warning banner, and the upload + permission dialogs — from a page
     * entry, before any component is composed: the same per-page contract as
     * `Editor.installShellMarkup()`, for plugin-owned chrome instead of a panel.
     *
     * This is the ONLY thing that puts transcript markup on a page shell.
     * Composing the plugin does not imply it and never installs any of this —
     * shell markup and plugin composition are independent opt-ins, so a page
     * entry that wants the feature calls both, and one that wants neither the
     * chrome nor a stray dialog simply omits this call. Markup installed here is
     * page-owned: {@link uninstall} leaves it in place.
     *
     * Targets: the trigger controls take the editor panel's
     * `editorTranscriptControls` mount, the banner takes `container` or the
     * plugin's toast panel, the dialogs take `container` or the dashboard shell
     * root. So on a dashboard page call this after
     * `OpenLyricDashboard.installShellMarkup()` and `Editor.installShellMarkup()`
     * — before the shell root and editor panel exist, the dialogs and trigger
     * controls are skipped — and on a bare page with no `container` only the
     * banner is installed. Idempotent, and refs refresh only when something was
     * actually installed.
     */
    static installShellMarkup(options?: {
        container?: HTMLElement | null;
    }): void;
    readonly id = "transcript";
    readonly apiVersion: 1;
    readonly surfaces: readonly OpenLyricSurface[];
    readonly contributes: OpenLyricContributions;
    readonly provider: 'elevenlabs';
    /** Host element for the browser-warning banner; null means "toast panel". */
    private readonly container;
    /** Same store the application uses, so transcript prefs stay shared. */
    private readonly preferences;
    /**
     * The banner the standalone mount fell back to installing, so `uninstall()`
     * removes only its own — a page-installed banner is never this instance's.
     */
    private warningElement;
    /** The global-registry registration this instance owns, if any. */
    private registryRegistration;
    /** The live standalone record/upload flow, mounted in {@link onMount}. */
    private standaloneController;
    private standaloneControls;
    /** Dialogs the standalone mount created (a page copy is never removed). */
    private standaloneDialogs;
    constructor(options?: EditorPluginTranscriptOptions);
    /**
     * Publish the registry data — the transcript specification + styles go into
     * the GLOBAL plugin registry, which is what a wrapped application consumes
     * when it boots its transcript controller. The dashboard no longer
     * registers transcript as a built-in, so composing this plugin is what
     * enables the feature on the app pages.
     *
     * Deliberately installs no markup, and **demands** that the page already
     * did. The page shell's transcript chrome — the trigger controls, the
     * browser-warning banner, the upload + permission dialogs — belongs to
     * whoever renders the page shell, and the page asks for it by calling
     * {@link installShellMarkup}, the same contract as
     * `Editor.installShellMarkup()` for the editor panel.
     *
     * So the two opt-ins stay separate, but not independent: chrome without the
     * plugin is a page that renders dead controls, and the plugin without chrome
     * is a feature registered with no UI to drive it. The second one used to pass
     * silently — the controller would boot against null refs, guard every one of
     * them, and do nothing at all — so it throws instead. `addPlugin()` rolls the
     * record back on a throwing `install()`, leaving nothing half-attached.
     *
     * That is why every page entry calls the static BEFORE composing the plugin:
     * comment out `EditorPluginTranscript.installShellMarkup()` in
     * `editor/main-editor.ts` and the page fails loudly at
     * `addPlugin('transcript', …)` rather than booting a feature that cannot
     * work. Dropping transcript from a page means dropping both lines.
     *
     * A standalone `Editor` is the one host that still installs chrome from the
     * component itself, in {@link onMount} — a bare page has no shell root for
     * the dialogs, so the static lands only the banner there and the mount fills
     * in the rest. That banner is also what satisfies the demand above, so a
     * standalone page entry calls the static exactly like a dashboard page does.
     *
     * Runs synchronously from `addPlugin()`, i.e. before the dashboard boots.
     *
     * @throws when no transcript shell markup is on the page.
     */
    install(): void;
    uninstall(): void;
    /**
     * Standalone mounting: run the real record/upload flow on a bare `Editor`.
     *
     * Only ever called for a component that mounted its own surface — the
     * wrap-phase facade keeps plugins dormant, so the app pages never take this
     * path (their controller is the application's, built from the registry
     * data published in {@link install}). Monaco-only, like a language
     * plugin's keyboard: with the textarea fallback (or no standalone chrome
     * toolbar to put the trigger controls in) nothing mounts.
     */
    onMount(host: OpenLyricComponentHost): void;
    onUnmount(): void;
    /** True while the standalone record/upload flow is mounted. */
    get isStandaloneTranscriptMounted(): boolean;
    /**
     * Build the real transcript controller from the same factory the
     * application uses. The context must supply the editor shell pieces the
     * controller renders into (`editor`, `monaco`, `refs`, `preferences`,
     * `state`, `ownerDocument`/`ownerWindow`, `onStateChange`).
     */
    createController(context: Record<string, unknown>): TranscriptControllerLike;
    private teardownStandaloneTranscript;
}
export { EditorPluginTranscript };
