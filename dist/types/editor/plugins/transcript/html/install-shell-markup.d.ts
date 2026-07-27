/**
 * The one piece of transcript chrome that is not part of a panel: the
 * "only desktop Chrome supports transcript" banner. It used to be shell
 * markup (`html/dashboard-shell.html`, between the topbar and the panel
 * grid) even though nothing but the transcript plugin ever touches it, so it
 * moved here — the plugin now ships and mounts its own markup, the same way
 * the OpenLyric plugin ships `plugins/OpenLyric/html/*.html`.
 */
/** The banner's `data-ol-ref` handle — what the controller drives it by. */
declare const TRANSCRIPT_WARNING_REF = "editorTranscriptBrowserWarning";
/**
 * Root class of the fallback toast panel — a fixed-position stack at the
 * bottom of the viewport, created on demand when no host container is given.
 * Styled by the plugin's own `transcript.scss` (installed into
 * `document.head` by the plugin registry), because a toast lives outside
 * every component scope.
 */
declare const TRANSCRIPT_TOAST_CLASS = "ol-transcript-toast";
/**
 * Mount the browser-warning banner.
 *
 * Two targets, in order:
 * 1. `container` — a host-provided element the banner is appended to (the
 *    shell chrome slot on a page that wants it inline);
 * 2. otherwise the plugin's own toast panel, created on demand.
 *
 * Skipped wholesale when the banner already exists anywhere in the document,
 * so a host that renders its own copy keeps it and a double install is a
 * no-op. No app page inlines it any more — all three get it from here, in the
 * toast panel, because none of them passes a `container`.
 *
 * @returns the mounted banner, or null when nothing was installed.
 */
declare function installTranscriptShellMarkup({ container, }?: {
    container?: HTMLElement | null;
}): HTMLElement | null;
/**
 * Undo {@link installTranscriptShellMarkup} for one banner, taking the toast
 * panel with it once it holds nothing else. A banner the plugin never
 * installed (null) is left alone, so uninstalling on a page that inlines its
 * own markup does not strip the page's chrome.
 */
declare function removeTranscriptShellMarkup(warning: HTMLElement | null): void;
export { installTranscriptShellMarkup, removeTranscriptShellMarkup, TRANSCRIPT_TOAST_CLASS, TRANSCRIPT_WARNING_REF, };
