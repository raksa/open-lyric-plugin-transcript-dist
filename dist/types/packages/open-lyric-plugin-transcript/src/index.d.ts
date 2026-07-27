/**
 * `open-lyric-plugin-transcript` — audio → text for the Open Lyric editor,
 * expressed in the generic per-component plugin contract
 * (`research/editor-structure-implemented.md` §"Example: the transcript
 * plugin").
 *
 * Browser-direct ElevenLabs: the API key is entered by the user at runtime
 * and kept in local storage — no server is involved.
 *
 * Scope, honestly: the record/upload flow renders into the editor shell's
 * transcript chrome, so on a bare standalone `Editor` this plugin is largely
 * declarative today. The one piece of DOM it owns outright is the
 * browser-warning banner, which it mounts into the `container` option or its
 * own fixed-position toast panel.
 */
export { EditorPluginTranscript } from '../../../editor/plugins/transcript/transcript_component_plugin.js';
export type { EditorPluginTranscriptOptions } from '../../../editor/plugins/transcript/transcript_component_plugin.js';
