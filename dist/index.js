import{createHtmlFragment as e,olEditorTranscriptPluginData as t,queryRef as n,refreshElementRefs as r,transcriptCssUrl as i}from"open-lyric/internal";var a=`<div
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
`,o=`ol-transcript-toast`;function s(){let e=document.body;if(!e)return null;let t=e.querySelector(`.${o}`);if(t)return t;let n=document.createElement(`div`);return n.className=o,n.dataset.olTranscriptToast=`true`,e.append(n),n}function c({container:t=null}={}){if(n(`editorTranscriptBrowserWarning`))return null;let r=t instanceof HTMLElement?t:s();if(!r)return null;let i=e(a),o=i.firstElementChild;return o instanceof HTMLElement?(r.append(i),o):null}function l(e){if(!e)return;let t=e.closest(`.${o}`);e.remove(),t&&!t.firstElementChild&&t.remove()}var u=class{id=`transcript`;apiVersion=1;surfaces=[`editor`,`dashboard`];contributes;provider;container;warningElement=null;constructor(e={}){this.provider=e.provider??`elevenlabs`,this.container=e.container instanceof HTMLElement?e.container:null,this.contributes={transcript:{...t.transcript,provider:this.provider},style:{href:i}}}install(){this.warningElement=c({container:this.container}),this.warningElement&&r()}uninstall(){l(this.warningElement),this.warningElement=null}createController(e){return t.transcript.create(e)}};export{u as EditorPluginTranscript};
//# sourceMappingURL=index.js.map