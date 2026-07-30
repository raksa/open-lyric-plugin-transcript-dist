Object.defineProperty(exports,Symbol.toStringTag,{value:`Module`});let e=require(`open-lyric/internal`);var t=`<div
  data-ol-ref="editorTranscriptBrowserWarning"
  class="alert alert-warning editor-transcript__warning"
  role="alert"
  hidden
  data-show-download-link="true"
>
  <div class="editor-transcript__warning-marquee">
    <div class="editor-transcript__warning-track">
      <span class="editor-transcript__warning-segment">
        <span class="editor-transcript__warning-text">
          Only Google Chrome on desktop support transcript.
        </span>
        <a
          data-ol-ref="editorTranscriptDownloadChromeWarning"
          class="alert-link editor-transcript__warning-link"
          href="https://www.google.com/chrome/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="editor-transcript__warning-link-label"
            >Download Google Chrome</span
          >
          <i class="bi bi-browser-chrome"></i>
        </a>
      </span>
      <span
        class="editor-transcript__warning-segment editor-transcript__warning-segment--clone"
        aria-hidden="true"
      >
        <span class="editor-transcript__warning-text">
          Only Google Chrome on desktop support transcript.
        </span>
        <span
          class="alert-link editor-transcript__warning-link editor-transcript__warning-link--clone"
        >
          <span class="editor-transcript__warning-link-label"
            >Download Google Chrome</span
          >
          <i class="bi bi-browser-chrome"></i>
        </span>
      </span>
    </div>
  </div>
</div>
`,n=`<dialog
  data-ol-ref="editorTranscriptUploadDialog"
  class="share-link-dialog editor-transcript__upload-dialog"
  aria-labelledby="editorTranscriptUploadTitle"
>
  <form
    data-ol-ref="editorTranscriptUploadForm"
    class="share-link-dialog__form editor-transcript__upload-form"
  >
    <div class="share-link-dialog__header">
      <div>
        <h2
          data-ol-ref="editorTranscriptUploadTitle"
          class="share-link-dialog__title"
        >
          Upload Audio to Transcribe
        </h2>
        <p class="share-link-dialog__subtitle">
          Upload an audio file and insert the transcript into the editor.
        </p>
      </div>
      <button
        data-ol-ref="closeEditorTranscriptUploadBtn"
        class="btn btn-outline-secondary btn-sm"
        type="button"
      >
        Close
      </button>
    </div>

    <div class="share-link-dialog__options editor-transcript__upload-fields">
      <label
        class="share-link-dialog__field editor-transcript__upload-field"
        for="editorTranscriptUploadFileInput"
      >
        <span>Audio file</span>
        <input
          data-ol-ref="editorTranscriptUploadFileInput"
          type="file"
          accept="audio/*"
          class="share-link-dialog__password-input editor-transcript__file-input"
        />
      </label>

      <label
        class="share-link-dialog__field editor-transcript__upload-field"
        for="editorTranscriptUploadApiKeyInput"
      >
        <span class="editor-transcript__upload-field-label">
          <a
            href="https://elevenlabs.io/app/developers/api-keys"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>ElevenLabs API key ⎘</span>
          </a>
          <a
            class="editor-transcript__upload-help-link"
            href="https://www.youtube.com/results?search_query=elevenlabs+api+key"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i
              class="bi bi-youtube editor-transcript__upload-help-icon"
              aria-hidden="true"
            ></i>
            How to create one
          </a>
        </span>
        <input
          data-ol-ref="editorTranscriptUploadApiKeyInput"
          type="password"
          autocomplete="off"
          spellcheck="false"
          class="share-link-dialog__password-input editor-transcript__upload-api-key"
          placeholder="Paste your ElevenLabs API key"
        />
      </label>

      <label
        class="share-link-dialog__field editor-transcript__upload-field"
        for="editorTranscriptUploadLocaleSelect"
      >
        <span>Locale</span>
        <select
          data-ol-ref="editorTranscriptUploadLocaleSelect"
          class="topbar-settings__text-input editor-transcript__upload-locale-select"
          aria-label="Transcript upload locale"
        >
          <option value="km-KH">km-KH</option>
        </select>
      </label>

      <p
        data-ol-ref="editorTranscriptUploadMessage"
        class="share-link-dialog__message"
        role="status"
        aria-live="polite"
      >
        Choose an audio file, select the spoken locale, and enter your
        ElevenLabs API key.
      </p>
      <div
        data-ol-ref="editorTranscriptUploadPermissionTip"
        class="share-link-dialog__hint editor-transcript__upload-permission-tip"
        hidden
      >
        <span>Make sure your api key have enough permissions.</span>
        <button
          data-ol-ref="editorTranscriptUploadPermissionInstructionBtn"
          type="button"
          class="btn btn-outline-info btn-sm editor-transcript__upload-permission-link"
          aria-haspopup="dialog"
          aria-controls="editorTranscriptUploadPermissionDialog"
        >
          <span class="topbar-icon-btn__icon" aria-hidden="true">
            <i class="bi bi-image"></i>
          </span>
          <span>View permission instruction</span>
        </button>
      </div>
    </div>

    <div class="share-link-dialog__actions editor-transcript__upload-actions">
      <button
        data-ol-ref="submitEditorTranscriptUploadBtn"
        class="btn btn-primary btn-sm"
        type="submit"
      >
        Transcribe Audio
      </button>
    </div>
  </form>
</dialog>

<dialog
  data-ol-ref="editorTranscriptUploadPermissionDialog"
  class="share-link-dialog editor-transcript__permission-dialog"
  aria-labelledby="editorTranscriptUploadPermissionTitle"
>
  <div
    class="share-link-dialog__form editor-transcript__permission-dialog-shell"
  >
    <div class="share-link-dialog__header">
      <div>
        <h2
          data-ol-ref="editorTranscriptUploadPermissionTitle"
          class="share-link-dialog__title"
        >
          API Key Permissions
        </h2>
        <p class="share-link-dialog__subtitle">
          Enable Speech to Text access on your ElevenLabs API key.
        </p>
      </div>
      <button
        data-ol-ref="closeEditorTranscriptUploadPermissionDialogBtn"
        class="btn btn-outline-secondary btn-sm"
        type="button"
      >
        Close
      </button>
    </div>
    <div class="editor-transcript__permission-image-frame">
      <img
        data-ol-ref="editorTranscriptUploadPermissionImage"
        class="editor-transcript__permission-image"
        src="/editor/assets/images/elevenlab-apikey.png"
        alt="ElevenLabs API key permission settings showing Speech to Text access enabled"
      />
    </div>
  </div>
</dialog>
`,r=`app`,i=`ol-transcript-toast`;function a(){let e=document.body;if(!e)return null;let t=e.querySelector(`.${i}`);if(t)return t;let n=document.createElement(`div`);return n.className=i,n.dataset.olTranscriptToast=`true`,e.append(n),n}function o({container:n=null}={}){if((0,e.queryRef)(`editorTranscriptBrowserWarning`))return null;let r=n instanceof HTMLElement?n:a();if(!r)return null;let i=(0,e.createHtmlFragment)(t),o=i.firstElementChild;return o instanceof HTMLElement?(r.append(i),o):null}function s(e){if(!e)return;let t=e.closest(`.${i}`);e.remove(),t&&!t.firstElementChild&&t.remove()}function c({container:t=null}={}){if((0,e.queryRef)(`editorTranscriptUploadDialog`))return[];let i=t instanceof HTMLElement?t:(0,e.queryRef)(r);if(!i)return[];let a=(0,e.createHtmlFragment)(n),o=[...a.children].filter(e=>e instanceof HTMLElement);return o.length?((0,e.linkFragmentIds)(a),i.append(a),o):[]}function l(e){for(let t of e??[])t instanceof HTMLDialogElement&&t.open&&typeof t.close==`function`&&t.close(),t.remove()}var u=class{id=`transcript`;apiVersion=1;surfaces=[`editor`,`dashboard`];contributes;provider;container;warningElement=null;dialogElements=[];constructor(t={}){this.provider=t.provider??`elevenlabs`,this.container=t.container instanceof HTMLElement?t.container:null,this.contributes={transcript:{...e.olEditorTranscriptPluginData.transcript,provider:this.provider},style:{href:e.transcriptCssUrl}}}install(){this.warningElement=o({container:this.container}),this.dialogElements=c({container:this.container}),(this.warningElement||this.dialogElements.length)&&(0,e.refreshElementRefs)()}uninstall(){s(this.warningElement),this.warningElement=null,l(this.dialogElements),this.dialogElements=[]}createController(t){return e.olEditorTranscriptPluginData.transcript.create(t)}};exports.EditorPluginTranscript=u;
//# sourceMappingURL=index.cjs.map