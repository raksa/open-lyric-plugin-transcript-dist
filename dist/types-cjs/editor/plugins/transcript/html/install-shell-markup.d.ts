/**
 * The transcript chrome that is not part of a panel: the "only desktop Chrome
 * supports transcript" banner and the two upload dialogs (the upload form and
 * the API-key permission screenshot it links to). All of it used to be shell
 * markup (`html/dashboard-shell.html`) even though nothing but the transcript
 * plugin ever touches it, so it moved here — the plugin now ships and mounts
 * its own markup, the same way the OpenLyric plugin ships
 * `plugins/OpenLyric/html/*.html`.
 *
 * What stays in the editor panel is the trigger chrome (`editor-panel.html`:
 * the record toggle, locale select, upload button, status meter), because that
 * is panel layout rather than plugin-owned overlay.
 */
/** The banner's `data-ol-ref` handle — what the controller drives it by. */
declare const TRANSCRIPT_WARNING_REF = "editorTranscriptBrowserWarning";
/**
 * The upload dialog's handle. Also the presence check for the dialog install:
 * the permission dialog ships in the same fragment and never appears without
 * it.
 */
declare const TRANSCRIPT_UPLOAD_DIALOG_REF = "editorTranscriptUploadDialog";
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
/**
 * Mount the upload dialog and the permission dialog it links to
 * (`upload-dialogs.html`). They ship as one fragment because they are one
 * feature: the permission screenshot is only ever reached from the upload
 * form's "View permission instruction" button.
 *
 * Two targets, in order:
 * 1. `container` — the host's slot for the plugin's own chrome;
 * 2. otherwise the dashboard shell root (`[data-ol-ref="app"]`) when a
 *    dashboard is on the page, which is where this markup used to be inlined.
 *
 * With neither, nothing is installed: a bare `Editor` has no shell to hang a
 * modal on and no `.share-link-dialog` styling for it, and the controller that
 * drives these dialogs only mounts on a host that supplies the panel chrome
 * anyway. Pass a `container` to opt such a host in.
 *
 * Skipped wholesale when the upload dialog already exists in the document, so
 * a host that renders its own copy keeps it and a double install is a no-op.
 *
 * The fragment's cross-references (`for`, `aria-controls`, `aria-labelledby`)
 * are resolved here, on the detached fragment, rather than left to the
 * dashboard's document-wide {@link linkFragmentIds} pass — both ends of every
 * pointer ship in this one fragment, so the dialogs stay correct wherever they
 * land, including outside a dashboard.
 *
 * @returns the mounted dialogs, or an empty array when nothing was installed.
 */
declare function installTranscriptDialogMarkup({ container, }?: {
    container?: HTMLElement | null;
}): HTMLElement[];
/**
 * Undo {@link installTranscriptDialogMarkup}. Each dialog is closed first —
 * removing an open modal leaves the document stuck in the top layer's inert
 * state in some engines — and only dialogs this plugin installed are passed
 * in, so a host that inlines its own copy keeps it.
 */
declare function removeTranscriptDialogMarkup(dialogs: readonly HTMLElement[] | null): void;
export { installTranscriptDialogMarkup, installTranscriptShellMarkup, removeTranscriptDialogMarkup, removeTranscriptShellMarkup, TRANSCRIPT_TOAST_CLASS, TRANSCRIPT_UPLOAD_DIALOG_REF, TRANSCRIPT_WARNING_REF, };
