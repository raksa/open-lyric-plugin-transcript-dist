import type { OpenLyricContributions, OpenLyricPlugin, OpenLyricSurface } from '../../components/index.js';
/**
 * The transcript plugin expressed in the generic per-component contract from
 * `research/editor-structure-enhanced.md` (§"Example: the transcript
 * plugin"). All contribution data is the real registry data
 * (`transcript_ol_editor.ts`) — the same `createTranscriptController`
 * factory, action label, and CSS the application consumes.
 *
 * The DOM the plugin owns outright is its non-panel chrome: the
 * browser-warning banner (`html/browser-warning.html`) and the two upload
 * dialogs (`html/upload-dialogs.html` — the upload form and the API-key
 * permission screenshot it links to). `install()` mounts them into the host's
 * `container`, or into the fallbacks described on
 * {@link EditorPluginTranscriptOptions.container}.
 *
 * Scope, honestly: the rest of the record/upload flow renders into the
 * editor shell's transcript chrome (record toggle, locale select, upload
 * button, meter), which the controller receives via the shell `refs` — it
 * does not build that DOM. So on a host with that chrome (the app page), the wrapped
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
     * Where the plugin mounts the chrome it owns — pass the element that should
     * carry it. Omit it and each piece falls back on its own:
     *
     * - the browser-warning banner (`html/browser-warning.html`) goes into a
     *   fixed-position toast panel the plugin creates at the bottom of the
     *   viewport, so a host with nowhere to put it still gets one;
     * - the upload + permission dialogs (`html/upload-dialogs.html`) go into the
     *   dashboard shell root when a dashboard is on the page — where this markup
     *   used to be inlined, and where the `.ol-dashboard`-scoped
     *   `.share-link-dialog` styling reaches them. With no dashboard and no
     *   container they are not installed at all.
     *
     * Either way the install is skipped when the document already renders the
     * markup, so a host that inlines a copy of its own keeps it. No app page
     * inlines either piece — they take the toast panel and the shell root.
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
    /** Same contract for the upload + permission dialogs it mounted. */
    private dialogElements;
    constructor(options?: EditorPluginTranscriptOptions);
    /**
     * Mount the plugin's own chrome:
     *
     * - the browser-warning banner, into the configured `container` or the
     *   plugin's toast panel when the host gave it nowhere to go;
     * - the upload dialog and its permission screenshot, into `container` or
     *   the dashboard shell root when a dashboard is on the page (a bare
     *   `Editor` with no container gets neither dialog — see
     *   {@link installTranscriptDialogMarkup}).
     *
     * The app's captured element refs are refreshed afterwards so the controller
     * finds them through `refs.editorTranscriptBrowserWarning` /
     * `refs.editorTranscriptUploadDialog`, exactly as when a page inlines them.
     *
     * Runs synchronously from `addPlugin()`, i.e. before the dashboard boots —
     * which is also why the shell root is already there to receive the dialogs:
     * the page entries install the shell markup before composing the editor.
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
