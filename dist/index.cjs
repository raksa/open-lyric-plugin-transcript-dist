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
`,n=`ol-transcript-toast`;function r(){let e=document.body;if(!e)return null;let t=e.querySelector(`.${n}`);if(t)return t;let r=document.createElement(`div`);return r.className=n,r.dataset.olTranscriptToast=`true`,e.append(r),r}function i({container:n=null}={}){if((0,e.queryRef)(`editorTranscriptBrowserWarning`))return null;let i=n instanceof HTMLElement?n:r();if(!i)return null;let a=(0,e.createHtmlFragment)(t),o=a.firstElementChild;return o instanceof HTMLElement?(i.append(a),o):null}function a(e){if(!e)return;let t=e.closest(`.${n}`);e.remove(),t&&!t.firstElementChild&&t.remove()}var o=class{id=`transcript`;apiVersion=1;surfaces=[`editor`,`dashboard`];contributes;provider;container;warningElement=null;constructor(t={}){this.provider=t.provider??`elevenlabs`,this.container=t.container instanceof HTMLElement?t.container:null,this.contributes={transcript:{...e.olEditorTranscriptPluginData.transcript,provider:this.provider},style:{href:e.transcriptCssUrl}}}install(){this.warningElement=i({container:this.container}),this.warningElement&&(0,e.refreshElementRefs)()}uninstall(){a(this.warningElement),this.warningElement=null}createController(t){return e.olEditorTranscriptPluginData.transcript.create(t)}};exports.EditorPluginTranscript=o;
//# sourceMappingURL=index.cjs.map