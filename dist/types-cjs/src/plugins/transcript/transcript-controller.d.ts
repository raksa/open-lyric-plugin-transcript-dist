declare class TranscriptController {
    constructor({ application, editor, monaco, onStateChange, ownerWindow, preferences, refs, state, }: {
        application: any;
        editor: any;
        monaco: any;
        onStateChange: any;
        ownerWindow: any;
        preferences: any;
        refs: any;
        state: any;
    });
    initialize(): void;
    attachUiListeners(): void;
    attachEditorListeners(): void;
    getState(): {
        audioLevel: any;
        isEnabled: any;
        locale: any;
        resolvedLocale: any;
        supported: any;
    };
    destroy(): void;
    syncHostUi(): void;
    disableHostUi(label: any): void;
    handleToggleMouseDown(event: any): void;
    handleToggleClick(): void;
    handleLocaleChange(event: any): void;
    handleUploadLocaleChange(event: any): void;
    handleHostModeChange(): void;
    handleUploadTriggerClick(): void;
    handleUploadDialogCancel(): void;
    handleUploadPermissionInstructionClick(): void;
    handleUploadPermissionDialogCloseClick(): void;
    handleUploadDialogClose(): void;
    handleUploadSubmit(event: any): Promise<void>;
    handleBrowserWarningPointerEnter(): void;
    handleBrowserWarningPointerLeave(): void;
    handleBrowserWarningResize(): void;
    commitLocale(nextLocale: any): void;
    openUploadDialog(): void;
    closeUploadDialog(returnValue?: string): void;
    openUploadPermissionDialog(): void;
    closeUploadPermissionDialog(): void;
    cancelUploadRequest(): void;
    setUploadBusyState(isBusy: any): void;
    syncUploadDialogUi(): void;
    setUploadDialogMessage(message: any, tone?: string): void;
    setUploadPermissionTipVisible(isVisible: any): void;
    readUploadResponsePayload(response: any): Promise<any>;
    getUploadResponseErrorMessage(response: any, payload: any): any;
    getUploadPayloadErrorMessage(payload: any): any;
    normalizeUploadErrorMessage(value: any): any;
    setEnabled(enabled: any): void;
    syncBrowserWarning(shouldShow: any, shouldShowDownloadChromeWarning: any): void;
    scheduleBrowserWarningMarqueeSync(): void;
    cancelBrowserWarningMarqueeSync(): void;
    syncBrowserWarningMarqueeOverflow(): void;
    clearBrowserWarningTimers(): void;
    scheduleBrowserWarningDismissal(): void;
    ensureRecognition(): any;
    startRecognition(): void;
    stopRecognition(shouldRestart: any): void;
    startAudioMeter(): Promise<void>;
    stopAudioMeter(): void;
    measureAudioLevel(): void;
    updateAudioLevel(audioLevel: any): void;
    updateMicButtonStyles(): void;
    updateInterimTranscript(transcript: any): void;
    queueFinalizeTranscript(transcript: any): any;
    getCommittedTranscript(transcript: any, command: any): Promise<any>;
    finalizeTranscript(transcript: any): Promise<void>;
    getVoiceCommand(transcript: any): "undo" | "redo" | "newline" | null;
    getModel(): any;
    getActiveEditRange(): any;
    replaceRange(range: any, text: any, source: any, { preserveSelectionAtStart }?: {
        preserveSelectionAtStart?: boolean | undefined;
    }): any;
    getTranscriptLocaleOptions(selectedLocale?: any): any[];
    populateLocaleOptions(): void;
    /**
     * The upload dialog always needs a concrete tag (the record surface can sit
     * on Auto; a one-shot upload cannot show a blank select), so an explicit
     * Auto pick falls back to what Auto RESOLVED to — document `lang`, then the
     * browser's languages, then `en-US`. Anything else is the selection itself,
     * which starts at {@link DEFAULT_TRANSCRIPT_LOCALE}.
     */
    getUploadLocaleValue(): any;
    getUploadApiKey(): any;
    /**
     * The ISO-639 code sent as ElevenLabs' `language_code`. Empty when the
     * locale resolves to nothing — the caller then omits the field so the
     * service auto-detects, rather than the transcript plugin guessing a
     * language on the user's behalf.
     */
    getUploadLanguageCode(localeValue: any): any;
    /**
     * Select `localeValue`, falling back to the list's FIRST option when the
     * tag is not among them (a stale persisted preference against a changed
     * plugin set). First-in-list, not a fixed tag: whatever a registered
     * language plugin contributed leads the list.
     */
    selectUploadLocaleOption(select: any, localeValue: any): void;
    populateUploadLocaleOptions(): void;
    announceStatus(message: any): void;
    clearStatusTimer(): void;
    isMonacoAvailable(): boolean;
}
declare function createTranscriptController(context: any): TranscriptController;
export { createTranscriptController };
