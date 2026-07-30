/**
 * `open-lyric-plugin-transcript` — audio → text for the Open Lyric editor,
 * expressed in the generic per-component plugin contract
 * (`research/editor-structure-implemented.md` §"Example: the transcript
 * plugin").
 *
 * Browser-direct ElevenLabs: the API key is entered by the user at runtime
 * and kept in local storage — no server is involved.
 *
 * Scope, honestly: the chrome that triggers the flow renders into the editor
 * shell's transcript panel markup, so on a bare standalone `Editor` this
 * plugin is largely declarative today. The DOM it owns outright is the
 * browser-warning banner and the upload + permission dialogs, which it mounts
 * into the `container` option or their own fallbacks (a fixed-position toast
 * panel; the dashboard shell root).
 */
export { EditorPluginTranscript } from '../../../editor/plugins/transcript/transcript_component_plugin.js';
export type { EditorPluginTranscriptOptions } from '../../../editor/plugins/transcript/transcript_component_plugin.js';
