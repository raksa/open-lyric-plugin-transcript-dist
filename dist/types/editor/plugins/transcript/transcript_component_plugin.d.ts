import type { OpenLyricContributions, OpenLyricPlugin, OpenLyricSurface } from '../../components/index.js';
/**
 * The transcript plugin expressed in the generic per-component contract from
 * `research/editor-structure-enhanced.md` (§"Example: the transcript
 * plugin"). All contribution data is the real registry data
 * (`transcript_ol_editor.ts`) — the same `createTranscriptController`
 * factory, action label, and CSS the application consumes.
 *
 * The one piece of DOM the plugin owns outright is the browser-warning
 * banner: `install()` mounts `html/browser-warning.html` into the host's
 * `container`, or into its own toast panel when no container is given (see
 * {@link EditorPluginTranscriptOptions.container}).
 *
 * Scope, honestly: the rest of the record/upload flow renders into the
 * editor shell's transcript chrome (upload dialog, locale select, meter),
 * which the controller receives via the shell `refs` — it does not build
 * that DOM. So on a host with that chrome (the app page), the wrapped
 * application mounts the controller; on a bare standalone `Editor` this
 * plugin is
 * declarative today: the host validates it (singleton `transcript` kind,
 * surfaces, apiVersion), installs its scoped style, and exposes the factory
 * through {@link createController} for shells that can supply the context.
 * Standalone UI mounting lands with the editor-features phase, alongside
 * spellcheck workers.
 */
export interface EditorPluginTranscriptOptions {
    /**
     * Transcription backend. Today's implementation is browser-direct
     * ElevenLabs — the API key is entered by the user at runtime and kept in
     * local storage; no server is involved.
     */
    provider?: 'elevenlabs';
    /**
     * Where the plugin mounts the browser-warning banner it owns
     * (`html/browser-warning.html`) — pass the shell element that should carry
     * it inline. Omit it and the plugin creates its own fixed-position toast
     * panel at the bottom of the viewport instead, so a host that has nowhere
     * to put the banner still gets one.
     *
     * Either way the install is skipped when the document already renders the
     * banner, so a host that inlines a copy of its own keeps it. No app page
     * does — they all take the toast panel.
     */
    container?: HTMLElement | null;
}
interface TranscriptControllerLike {
    destroy?: () => void;
    syncHostUi?: () => void;
}
declare class EditorPluginTranscript implements OpenLyricPlugin {
    readonly id = "transcript";
    readonly apiVersion: 1;
    readonly surfaces: readonly OpenLyricSurface[];
    readonly contributes: OpenLyricContributions;
    readonly provider: 'elevenlabs';
    /** Host element for the browser-warning banner; null means "toast panel". */
    private readonly container;
    /** The banner this plugin mounted, so `uninstall()` removes only its own. */
    private warningElement;
    constructor(options?: EditorPluginTranscriptOptions);
    /**
     * Mount the plugin's own chrome — the browser-warning banner — into the
     * configured `container`, or into the plugin's toast panel when the host
     * gave it nowhere to go. The app's captured element refs are refreshed
     * afterwards so the controller finds the banner through
     * `refs.editorTranscriptBrowserWarning`, exactly as when a page inlines it.
     *
     * Runs synchronously from `addPlugin()`, i.e. before the dashboard boots.
     */
    install(): void;
    uninstall(): void;
    /**
     * Build the real transcript controller from the same factory the
     * application uses. The context must supply the editor shell pieces the
     * controller renders into (`editor`, `monaco`, `refs`, `preferences`,
     * `state`, `ownerDocument`/`ownerWindow`, `onStateChange`).
     */
    createController(context: Record<string, unknown>): TranscriptControllerLike;
}
export { EditorPluginTranscript };
