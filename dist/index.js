import{createHtmlFragment as e,linkFragmentIds as t,olEditorTranscriptPluginData as n,queryRef as r,refreshElementRefs as i,transcriptCssUrl as a}from"open-lyric/internal";var o=`<div
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
`,s=`<dialog
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
`,c=`app`,l=`ol-transcript-toast`;function u(){let e=document.body;if(!e)return null;let t=e.querySelector(`.${l}`);if(t)return t;let n=document.createElement(`div`);return n.className=l,n.dataset.olTranscriptToast=`true`,e.append(n),n}function d({container:t=null}={}){if(r(`editorTranscriptBrowserWarning`))return null;let n=t instanceof HTMLElement?t:u();if(!n)return null;let i=e(o),a=i.firstElementChild;return a instanceof HTMLElement?(n.append(i),a):null}function f(e){if(!e)return;let t=e.closest(`.${l}`);e.remove(),t&&!t.firstElementChild&&t.remove()}function p({container:n=null}={}){if(r(`editorTranscriptUploadDialog`))return[];let i=n instanceof HTMLElement?n:r(c);if(!i)return[];let a=e(s),o=[...a.children].filter(e=>e instanceof HTMLElement);return o.length?(t(a),i.append(a),o):[]}function m(e){for(let t of e??[])t instanceof HTMLDialogElement&&t.open&&typeof t.close==`function`&&t.close(),t.remove()}var h=class{id=`transcript`;apiVersion=1;surfaces=[`editor`,`dashboard`];contributes;provider;container;warningElement=null;dialogElements=[];constructor(e={}){this.provider=e.provider??`elevenlabs`,this.container=e.container instanceof HTMLElement?e.container:null,this.contributes={transcript:{...n.transcript,provider:this.provider},style:{href:a}}}install(){this.warningElement=d({container:this.container}),this.dialogElements=p({container:this.container}),(this.warningElement||this.dialogElements.length)&&i()}uninstall(){f(this.warningElement),this.warningElement=null,m(this.dialogElements),this.dialogElements=[]}createController(e){return n.transcript.create(e)}};export{h as EditorPluginTranscript};
//# sourceMappingURL=index.js.map