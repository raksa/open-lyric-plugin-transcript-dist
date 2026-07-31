declare const AUTO_TRANSCRIPT_LOCALE = "";
/**
 * What the transcript surface starts on, on every page.
 *
 * Fixed rather than derived: NOT the document's `lang` (a host page's `lang`
 * attribute would silently make that language the default), NOT the
 * browser's languages, and NOT whatever a registered plugin
 * contributes. A language plugin adds its tags to the picker
 * ({@link getTranscriptLocaleSuggestions}) and nothing more — choosing one is
 * the user's call, and {@link commitLocale} persists that choice, so the
 * default only ever applies until they pick.
 *
 * Auto (`''`) stays available as an explicit pick, and resolves through
 * document `lang` → `navigator.languages` → `en-US`.
 */
declare const DEFAULT_TRANSCRIPT_LOCALE = "en-US";
/**
 * The locales this plugin knows about on its own — every Windows LCID tag plus
 * {@link DEFAULT_TRANSCRIPT_LOCALE}, which the alphabetical block below
 * happens not to carry.
 *
 * Deliberately script-neutral: a language plugin adds its own tags through the
 * registry's `transcriptLocales` slot, so this plugin never names one itself.
 */
declare const BASE_TRANSCRIPT_LOCALE_SUGGESTIONS: string[];
/**
 * The locale picker's option list: plugin-contributed locales first (they are
 * why the user opened the menu), then this plugin's own alphabetical block.
 *
 * This — not the default — is the whole of a language plugin's influence on
 * the transcript surface. Read at call time, not module load: plugins register
 * during page boot, after this module is imported.
 */
declare function getTranscriptLocaleSuggestions(): any[];
declare function normalizeTranscriptLocale(locale: any): any;
declare function resolveTranscriptLocale(locale: any): any;
export { AUTO_TRANSCRIPT_LOCALE, BASE_TRANSCRIPT_LOCALE_SUGGESTIONS, DEFAULT_TRANSCRIPT_LOCALE, getTranscriptLocaleSuggestions, normalizeTranscriptLocale, resolveTranscriptLocale, };
