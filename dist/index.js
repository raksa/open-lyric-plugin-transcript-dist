import{EditorPreferencesStore as e,createHtmlFragment as t,getRegisteredTranscriptLocales as n,getRegisteredTranscriptSpecifications as r,linkFragmentIds as i,postProcessTranscriptText as a,queryRef as o,queryRef as s,refreshElementRefs as c,registerPlugin as l,setStatus as u,unregisterPlugin as d,updateStatus as f}from"open-lyric/internal";var p=`<div\r
  data-ol-ref="editorTranscriptBrowserWarning"\r
  class="alert alert-warning editor-transcript__warning"\r
  role="alert"\r
  hidden\r
  data-show-download-link="true"\r
>\r
  <div class="editor-transcript__warning-marquee">\r
    <div class="editor-transcript__warning-track">\r
      <span class="editor-transcript__warning-segment">\r
        <span class="editor-transcript__warning-text">\r
          Only Google Chrome on desktop support transcript.\r
        </span>\r
        <a\r
          data-ol-ref="editorTranscriptDownloadChromeWarning"\r
          class="alert-link editor-transcript__warning-link"\r
          href="https://www.google.com/chrome/"\r
          target="_blank"\r
          rel="noreferrer noopener"\r
        >\r
          <span class="editor-transcript__warning-link-label"\r
            >Download Google Chrome</span\r
          >\r
          <i class="bi bi-browser-chrome"></i>\r
        </a>\r
      </span>\r
      <span\r
        class="editor-transcript__warning-segment editor-transcript__warning-segment--clone"\r
        aria-hidden="true"\r
      >\r
        <span class="editor-transcript__warning-text">\r
          Only Google Chrome on desktop support transcript.\r
        </span>\r
        <span\r
          class="alert-link editor-transcript__warning-link editor-transcript__warning-link--clone"\r
        >\r
          <span class="editor-transcript__warning-link-label"\r
            >Download Google Chrome</span\r
          >\r
          <i class="bi bi-browser-chrome"></i>\r
        </span>\r
      </span>\r
    </div>\r
  </div>\r
</div>\r
`,m=`<div\r
  data-ol-ref="editorTranscriptControls"\r
  class="editor-panel__transcript-controls"\r
  aria-label="Speech to text controls"\r
>\r
  <select\r
    data-ol-ref="editorTranscriptLocaleSelect"\r
    class="editor-transcript__locale-select"\r
    aria-label="Speech recognition locale"\r
    title="Speech recognition locale unavailable"\r
    disabled\r
  >\r
    <option value="">Auto</option>\r
  </select>\r
  <button\r
    data-ol-ref="editorTranscriptUploadBtn"\r
    class="btn btn-sm topbar-icon-btn editor-panel__history-btn editor-transcript__upload-trigger"\r
    type="button"\r
    aria-label="Upload audio to transcribe"\r
    title="Upload audio to transcribe"\r
  >\r
    <span class="topbar-icon-btn__icon" aria-hidden="true">\r
      <i class="bi bi-upload"></i>\r
    </span>\r
    <span class="visually-hidden">Upload audio to transcribe</span>\r
  </button>\r
  <button\r
    data-ol-ref="editorTranscriptToggleBtn"\r
    class="btn btn-sm topbar-icon-btn editor-panel__history-btn editor-transcript__toggle"\r
    type="button"\r
    aria-pressed="false"\r
    aria-label="Speech to text unavailable"\r
    title="Speech to text unavailable"\r
    disabled\r
  >\r
    <span class="topbar-icon-btn__icon" aria-hidden="true">\r
      <i class="bi bi-mic-fill"></i>\r
    </span>\r
    <span class="visually-hidden">Speech to text unavailable</span>\r
  </button>\r
  <span\r
    data-ol-ref="editorTranscriptStatus"\r
    class="editor-transcript__status visually-hidden"\r
    role="status"\r
    aria-live="polite"\r
  ></span>\r
</div>\r
`,ee=`<dialog\r
  data-ol-ref="editorTranscriptUploadDialog"\r
  class="share-link-dialog editor-transcript__upload-dialog"\r
  aria-labelledby="editorTranscriptUploadTitle"\r
>\r
  <form\r
    data-ol-ref="editorTranscriptUploadForm"\r
    class="share-link-dialog__form editor-transcript__upload-form"\r
  >\r
    <div class="share-link-dialog__header">\r
      <div>\r
        <h2\r
          data-ol-ref="editorTranscriptUploadTitle"\r
          class="share-link-dialog__title"\r
        >\r
          Upload Audio to Transcribe\r
        </h2>\r
        <p class="share-link-dialog__subtitle">\r
          Upload an audio file and insert the transcript into the editor.\r
        </p>\r
      </div>\r
      <button\r
        data-ol-ref="closeEditorTranscriptUploadBtn"\r
        class="btn btn-outline-secondary btn-sm"\r
        type="button"\r
      >\r
        Close\r
      </button>\r
    </div>\r
\r
    <div class="share-link-dialog__options editor-transcript__upload-fields">\r
      <label\r
        class="share-link-dialog__field editor-transcript__upload-field"\r
        for="editorTranscriptUploadFileInput"\r
      >\r
        <span>Audio file</span>\r
        <input\r
          data-ol-ref="editorTranscriptUploadFileInput"\r
          type="file"\r
          accept="audio/*"\r
          class="share-link-dialog__password-input editor-transcript__file-input"\r
        />\r
      </label>\r
\r
      <label\r
        class="share-link-dialog__field editor-transcript__upload-field"\r
        for="editorTranscriptUploadApiKeyInput"\r
      >\r
        <span class="editor-transcript__upload-field-label">\r
          <a\r
            href="https://elevenlabs.io/app/developers/api-keys"\r
            target="_blank"\r
            rel="noreferrer noopener"\r
          >\r
            <span>ElevenLabs API key ⎘</span>\r
          </a>\r
          <a\r
            class="editor-transcript__upload-help-link"\r
            href="https://www.youtube.com/results?search_query=elevenlabs+api+key"\r
            target="_blank"\r
            rel="noreferrer noopener"\r
          >\r
            <i\r
              class="bi bi-youtube editor-transcript__upload-help-icon"\r
              aria-hidden="true"\r
            ></i>\r
            How to create one\r
          </a>\r
        </span>\r
        <input\r
          data-ol-ref="editorTranscriptUploadApiKeyInput"\r
          type="password"\r
          autocomplete="off"\r
          spellcheck="false"\r
          class="share-link-dialog__password-input editor-transcript__upload-api-key"\r
          placeholder="Paste your ElevenLabs API key"\r
        />\r
      </label>\r
\r
      <label\r
        class="share-link-dialog__field editor-transcript__upload-field"\r
        for="editorTranscriptUploadLocaleSelect"\r
      >\r
        <span>Locale</span>\r
        <!-- Placeholder only: the controller replaces these options with the\r
             registered locales (plugin-contributed tags first) when the\r
             dialog is populated. No language is named in the shell markup. -->\r
        <select\r
          data-ol-ref="editorTranscriptUploadLocaleSelect"\r
          class="topbar-settings__text-input editor-transcript__upload-locale-select"\r
          aria-label="Transcript upload locale"\r
        >\r
          <option value="">Auto</option>\r
        </select>\r
      </label>\r
\r
      <p\r
        data-ol-ref="editorTranscriptUploadMessage"\r
        class="share-link-dialog__message"\r
        role="status"\r
        aria-live="polite"\r
      >\r
        Choose an audio file, select the spoken locale, and enter your\r
        ElevenLabs API key.\r
      </p>\r
      <div\r
        data-ol-ref="editorTranscriptUploadPermissionTip"\r
        class="share-link-dialog__hint editor-transcript__upload-permission-tip"\r
        hidden\r
      >\r
        <span>Make sure your api key have enough permissions.</span>\r
        <button\r
          data-ol-ref="editorTranscriptUploadPermissionInstructionBtn"\r
          type="button"\r
          class="btn btn-outline-info btn-sm editor-transcript__upload-permission-link"\r
          aria-haspopup="dialog"\r
          aria-controls="editorTranscriptUploadPermissionDialog"\r
        >\r
          <span class="topbar-icon-btn__icon" aria-hidden="true">\r
            <i class="bi bi-image"></i>\r
          </span>\r
          <span>View permission instruction</span>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <div class="share-link-dialog__actions editor-transcript__upload-actions">\r
      <button\r
        data-ol-ref="submitEditorTranscriptUploadBtn"\r
        class="btn btn-primary btn-sm"\r
        type="submit"\r
      >\r
        Transcribe Audio\r
      </button>\r
    </div>\r
  </form>\r
</dialog>\r
\r
<dialog\r
  data-ol-ref="editorTranscriptUploadPermissionDialog"\r
  class="share-link-dialog editor-transcript__permission-dialog"\r
  aria-labelledby="editorTranscriptUploadPermissionTitle"\r
>\r
  <div\r
    class="share-link-dialog__form editor-transcript__permission-dialog-shell"\r
  >\r
    <div class="share-link-dialog__header">\r
      <div>\r
        <h2\r
          data-ol-ref="editorTranscriptUploadPermissionTitle"\r
          class="share-link-dialog__title"\r
        >\r
          API Key Permissions\r
        </h2>\r
        <p class="share-link-dialog__subtitle">\r
          Enable Speech to Text access on your ElevenLabs API key.\r
        </p>\r
      </div>\r
      <button\r
        data-ol-ref="closeEditorTranscriptUploadPermissionDialogBtn"\r
        class="btn btn-outline-secondary btn-sm"\r
        type="button"\r
      >\r
        Close\r
      </button>\r
    </div>\r
    <div class="editor-transcript__permission-image-frame">\r
      <!-- No \`src\` in the fragment: the screenshot is a plugin-bundled asset\r
           (\`assets/elevenlab-apikey.png\`), so the installer stamps the\r
           bundler-resolved URL on at install time — a fixed page path here\r
           would break for any host that isn't this repo's dev server. -->\r
      <img\r
        data-ol-ref="editorTranscriptUploadPermissionImage"\r
        class="editor-transcript__permission-image"\r
        alt="ElevenLabs API key permission settings showing Speech to Text access enabled"\r
      />\r
    </div>\r
  </div>\r
</dialog>\r
`,te=``+new URL(`assets/elevenlab-apikey-DFgN_aks.png`,import.meta.url).href,h=`editorTranscriptUploadPermissionImage`,g=`app`,_=`ol-transcript-toast`;function v(){let e=document.body;if(!e)return null;let t=e.querySelector(`.${_}`);if(t)return t;let n=document.createElement(`div`);return n.className=_,n.dataset.olTranscriptToast=`true`,e.append(n),n}function y({container:e=null}={}){if(s(`editorTranscriptBrowserWarning`))return null;let n=e instanceof HTMLElement?e:v();if(!n)return null;let r=t(p),i=r.firstElementChild;return i instanceof HTMLElement?(n.append(r),i):null}function b(e){if(!e)return;let t=e.closest(`.${_}`);e.remove(),t&&!t.firstElementChild&&t.remove()}function x({container:e=null}={}){if(s(`editorTranscriptUploadDialog`))return[];let n=e instanceof HTMLElement?e:s(g);if(!n)return[];let r=t(ee),a=[...r.children].filter(e=>e instanceof HTMLElement);if(!a.length)return[];let o=s(h,r);return o instanceof HTMLImageElement&&(o.src=te),i(r),n.append(r),a}function ne(e){for(let t of e??[])t instanceof HTMLDialogElement&&t.open&&typeof t.close==`function`&&t.close(),t.remove()}var re=`editorTranscriptControls`;function ie(){if(s(`editorTranscriptControls`))return null;let e=document.querySelector(`[data-ol-mount="${re}"]`);if(!e)return null;let n=t(m),r=n.firstElementChild;return r instanceof HTMLElement?(e.replaceWith(n),r):null}function ae(){return!!(s(`editorTranscriptBrowserWarning`)||s(`editorTranscriptUploadDialog`)||s(`editorTranscriptControls`))}var S=``+new URL(`assets/transcript-I0ba6STC.css`,import.meta.url).href,C=`en-US`,w=`en-US.arc.af-ZA.am-ET.ar-AE.ar-BH.ar-DZ.ar-EG.ar-IQ.ar-JO.ar-KW.ar-LB.ar-LY.ar-MA.arn-CL.ar-OM.ar-QA.ar-SA.ar-SD.ar-SY.ar-TN.ar-YE.as-IN.az-az.az-Cyrl-AZ.az-Latn-AZ.ba-RU.be-BY.bg-BG.bn-BD.bn-IN.bo-CN.br-FR.bs-Cyrl-BA.bs-Latn-BA.ca-ES.co-FR.cs-CZ.cy-GB.da-DK.de-AT.de-CH.de-DE.de-LI.de-LU.dsb-DE.dv-MV.el-CY.el-GR.en-029.en-AU.en-BZ.en-CA.en-cb.en-GB.en-IE.en-IN.en-JM.en-MT.en-MY.en-NZ.en-PH.en-SG.en-TT.en-ZA.en-ZW.es-AR.es-BO.es-CL.es-CO.es-CR.es-DO.es-EC.es-ES.es-GT.es-HN.es-MX.es-NI.es-PA.es-PE.es-PR.es-PY.es-SV.es-US.es-UY.es-VE.et-EE.eu-ES.fa-IR.fi-FI.fil-PH.fo-FO.fr-BE.fr-CA.fr-CH.fr-FR.fr-LU.fr-MC.fy-NL.ga-IE.gd-GB.gd-ie.gl-ES.gsw-FR.gu-IN.ha-Latn-NG.he-IL.hi-IN.hr-BA.hr-HR.hsb-DE.hu-HU.hy-AM.id-ID.ig-NG.ii-CN.in-ID.is-IS.it-CH.it-IT.iu-Cans-CA.iu-Latn-CA.iw-IL.ja-JP.ka-GE.kk-KZ.kl-GL.kn-IN.kok-IN.ko-KR.ky-KG.lb-LU.lo-LA.lt-LT.lv-LV.mi-NZ.mk-MK.ml-IN.mn-MN.mn-Mong-CN.moh-CA.mr-IN.ms-BN.ms-MY.mt-MT.nb-NO.ne-NP.nl-BE.nl-NL.nn-NO.no-no.nso-ZA.oc-FR.or-IN.pa-IN.pl-PL.prs-AF.ps-AF.pt-BR.pt-PT.qut-GT.quz-BO.quz-EC.quz-PE.rm-CH.ro-mo.ro-RO.ru-mo.ru-RU.rw-RW.sah-RU.sa-IN.se-FI.se-NO.se-SE.si-LK.sk-SK.sl-SI.sma-NO.sma-SE.smj-NO.smj-SE.smn-FI.sms-FI.sq-AL.sr-BA.sr-CS.sr-Cyrl-BA.sr-Cyrl-CS.sr-Cyrl-ME.sr-Cyrl-RS.sr-Latn-BA.sr-Latn-CS.sr-Latn-ME.sr-Latn-RS.sr-ME.sr-RS.sr-sp.sv-FI.sv-SE.sw-KE.syr-SY.ta-IN.te-IN.tg-Cyrl-TJ.th-TH.tk-TM.tlh-QS.tn-ZA.tr-TR.tt-RU.tzm-Latn-DZ.ug-CN.uk-UA.ur-PK.uz-Cyrl-UZ.uz-Latn-UZ.uz-uz.vi-VN.wo-SN.xh-ZA.yo-NG.zh-CN.zh-HK.zh-MO.zh-SG.zh-TW.zu-ZA`.split(`.`);function T(){return Array.from(new Set([...n(),...w]))}function E(e){let t=e?.trim().replace(/_/g,`-`)??``;if(t.length===0)return``;try{let[e]=Intl.getCanonicalLocales(t);return e??t}catch{return t}}function D(e){let t=E(e);if(t.length>0)return t;if(typeof document<`u`){let e=E(document.documentElement.lang);if(e.length>0)return e}if(typeof navigator<`u`){for(let e of navigator.languages??[]){let t=E(e);if(t.length>0)return t}let e=E(navigator.language);if(e.length>0)return e}return`en-US`}var O=.025,k=256,A=250,j=1e4,M=5e3,N=`https://api.elevenlabs.io/v1/speech-to-text`,P=`scribe_v1`,F=`Speech to text works with Google Chrome on desktop only.`,I=`Speech to text works with Google Chrome on desktop only. Download Google Chrome to test the mic transcript feature.`,L=`Speech to text is unavailable in this Google Chrome browser.`,R=`Choose an audio file, select the spoken locale, and enter your ElevenLabs API key.`,z=`Uploading audio to ElevenLabs for transcription...`,B=`Uploaded audio transcript inserted into the editor.`,V=`Enter your ElevenLabs API key before starting transcription.`,H=`Choose an audio file before starting transcription.`,U=`ElevenLabs rejected the API key. Check the key and try again.`,W=`The transcription service returned no text for this audio file.`,G=new Map([[`in`,`id`],[`iw`,`he`],[`ji`,`yi`],[`no`,`nb`]]),K=/android|iphone|ipad|ipod|windows phone|iemobile|opera mini|mobile|tablet/iu,q=/\bedg(?:e|ios|a)?\/|\bopr\/|\bopera\b|\bvivaldi\/|\bsamsungbrowser\/|\byabrowser\/|\bduckduckgo\/|\bwhale\/|\bqqbrowser\/|\bucbrowser\/|\bcrios\/|\bfxios\/|\bheadlesschrome\/|\bchromium\/|\belectron\//iu,J=typeof window<`u`&&(`SpeechRecognition`in window||`webkitSpeechRecognition`in window);function Y(e){let t=e?.navigator??globalThis.navigator;if(!t)return!1;if(t.userAgentData?.mobile===!0)return!0;let n=String(t.userAgent||``);if(K.test(n))return!0;let r=Number(t.maxTouchPoints||0);return/macintosh/iu.test(n)&&r>1}function oe(e){let t=e?.navigator??globalThis.navigator;if(!t||Y(e))return!1;let n=Array.isArray(t.userAgentData?.brands)?t.userAgentData.brands:[];if(n.length>0)return n.some(e=>{let t=String(e?.brand||``).trim();return/^google chrome$/iu.test(t)});if(t.brave)return!1;let r=String(t.userAgent||``);return/\bchrome\/\d+/iu.test(r)?!q.test(r):!1}function X(e){let t=Y(e),n=oe(e),r=J;return{isMobileBrowser:t,isDesktopGoogleChrome:n,isRecognitionAvailable:r,isSupported:n&&r,shouldShowBrowserWarning:t||!n,shouldShowDownloadChromeWarning:!t}}var se=class{constructor({application:e,editor:t,monaco:n,onStateChange:r,ownerWindow:i,preferences:a,refs:o,state:s}){this.application=e,this.editor=t,this.monaco=n,this.onStateChange=r,this.ownerWindow=i,this.preferences=a,this.refs=o,this.state=s,this.audioContext=null,this.audioLevel=0,this.audioSource=null,this.audioStream=null,this.analyser=null,this.browserWarningFadeTimer=0,this.browserWarningHideTimer=0,this.browserWarningMarqueeFrame=0,this.browserWarningResizeObserver=null,this.isBrowserWarningHovered=!1,this.disposables=[],this.destroyed=!1,this.finalizationPromise=Promise.resolve(),this.frequencyData=null,this.interimRange=null,this.isEnabled=!1,this.meterFrame=0,this.pendingRestart=!1,this.processedFinalResults=new Map,this.recognition=null,this.recognitionLifecycle=`inactive`,this.selection=null,this.selectedLocale=E(this.preferences.loadTranscriptLocalePreference(C)),this.resolvedLocale=D(this.selectedLocale),this.isUploadInFlight=!1,this.statusResetTimer=0,this.stopRequested=!1,this.uploadAbortController=null,this.lastLocaleOptionsKey=null,this.lastUploadLocaleOptionsKey=null,this.handleHostModeChange=this.handleHostModeChange.bind(this),this.handleBrowserWarningPointerEnter=this.handleBrowserWarningPointerEnter.bind(this),this.handleBrowserWarningPointerLeave=this.handleBrowserWarningPointerLeave.bind(this),this.handleBrowserWarningResize=this.handleBrowserWarningResize.bind(this),this.handleLocaleChange=this.handleLocaleChange.bind(this),this.handleUploadLocaleChange=this.handleUploadLocaleChange.bind(this),this.handleUploadTriggerClick=this.handleUploadTriggerClick.bind(this),this.handleUploadDialogClose=this.handleUploadDialogClose.bind(this),this.handleUploadSubmit=this.handleUploadSubmit.bind(this),this.handleUploadDialogCancel=this.handleUploadDialogCancel.bind(this),this.handleUploadPermissionInstructionClick=this.handleUploadPermissionInstructionClick.bind(this),this.handleUploadPermissionDialogCloseClick=this.handleUploadPermissionDialogCloseClick.bind(this),this.handleToggleClick=this.handleToggleClick.bind(this),this.handleToggleMouseDown=this.handleToggleMouseDown.bind(this),this.measureAudioLevel=this.measureAudioLevel.bind(this),this.initialize()}initialize(){this.attachUiListeners(),this.attachEditorListeners(),this.syncHostUi()}attachUiListeners(){if(this.refs.editorTranscriptLocaleSelect instanceof HTMLSelectElement&&(this.refs.editorTranscriptLocaleSelect.addEventListener(`change`,this.handleLocaleChange),this.disposables.push(()=>{this.refs.editorTranscriptLocaleSelect?.removeEventListener(`change`,this.handleLocaleChange)})),this.refs.editorTranscriptToggleBtn instanceof HTMLButtonElement&&(this.refs.editorTranscriptToggleBtn.addEventListener(`mousedown`,this.handleToggleMouseDown),this.refs.editorTranscriptToggleBtn.addEventListener(`click`,this.handleToggleClick),this.disposables.push(()=>{this.refs.editorTranscriptToggleBtn?.removeEventListener(`mousedown`,this.handleToggleMouseDown),this.refs.editorTranscriptToggleBtn?.removeEventListener(`click`,this.handleToggleClick)})),this.refs.editorTranscriptUploadBtn instanceof HTMLButtonElement&&(this.refs.editorTranscriptUploadBtn.addEventListener(`click`,this.handleUploadTriggerClick),this.disposables.push(()=>{this.refs.editorTranscriptUploadBtn?.removeEventListener(`click`,this.handleUploadTriggerClick)})),this.refs.editorTranscriptUploadLocaleSelect instanceof HTMLSelectElement&&(this.refs.editorTranscriptUploadLocaleSelect.addEventListener(`change`,this.handleUploadLocaleChange),this.disposables.push(()=>{this.refs.editorTranscriptUploadLocaleSelect?.removeEventListener(`change`,this.handleUploadLocaleChange)})),this.refs.editorTranscriptUploadForm instanceof HTMLFormElement&&(this.refs.editorTranscriptUploadForm.addEventListener(`submit`,this.handleUploadSubmit),this.disposables.push(()=>{this.refs.editorTranscriptUploadForm?.removeEventListener(`submit`,this.handleUploadSubmit)})),this.refs.closeEditorTranscriptUploadBtn instanceof HTMLButtonElement&&(this.refs.closeEditorTranscriptUploadBtn.addEventListener(`click`,this.handleUploadDialogCancel),this.disposables.push(()=>{this.refs.closeEditorTranscriptUploadBtn?.removeEventListener(`click`,this.handleUploadDialogCancel)})),this.refs.editorTranscriptUploadPermissionInstructionBtn instanceof HTMLButtonElement&&(this.refs.editorTranscriptUploadPermissionInstructionBtn.addEventListener(`click`,this.handleUploadPermissionInstructionClick),this.disposables.push(()=>{this.refs.editorTranscriptUploadPermissionInstructionBtn?.removeEventListener(`click`,this.handleUploadPermissionInstructionClick)})),this.refs.closeEditorTranscriptUploadPermissionDialogBtn instanceof HTMLButtonElement&&(this.refs.closeEditorTranscriptUploadPermissionDialogBtn.addEventListener(`click`,this.handleUploadPermissionDialogCloseClick),this.disposables.push(()=>{this.refs.closeEditorTranscriptUploadPermissionDialogBtn?.removeEventListener(`click`,this.handleUploadPermissionDialogCloseClick)})),this.refs.editorTranscriptUploadDialog instanceof HTMLDialogElement&&(this.refs.editorTranscriptUploadDialog.addEventListener(`close`,this.handleUploadDialogClose),this.disposables.push(()=>{this.refs.editorTranscriptUploadDialog?.removeEventListener(`close`,this.handleUploadDialogClose)})),this.refs.simpleEditorToggle?.addEventListener(`change`,this.handleHostModeChange),this.disposables.push(()=>{this.refs.simpleEditorToggle?.removeEventListener(`change`,this.handleHostModeChange)}),this.refs.editorTranscriptBrowserWarning instanceof HTMLElement){if(this.refs.editorTranscriptBrowserWarning.addEventListener(`pointerenter`,this.handleBrowserWarningPointerEnter),this.refs.editorTranscriptBrowserWarning.addEventListener(`pointerleave`,this.handleBrowserWarningPointerLeave),this.disposables.push(()=>{this.refs.editorTranscriptBrowserWarning?.removeEventListener(`pointerenter`,this.handleBrowserWarningPointerEnter),this.refs.editorTranscriptBrowserWarning?.removeEventListener(`pointerleave`,this.handleBrowserWarningPointerLeave)}),typeof this.ownerWindow?.ResizeObserver==`function`){this.browserWarningResizeObserver=new this.ownerWindow.ResizeObserver(this.handleBrowserWarningResize),this.browserWarningResizeObserver.observe(this.refs.editorTranscriptBrowserWarning);let e=this.refs.editorTranscriptBrowserWarning.querySelector(`.editor-transcript__warning-marquee`);e instanceof HTMLElement&&this.browserWarningResizeObserver.observe(e),this.disposables.push(()=>{this.browserWarningResizeObserver?.disconnect(),this.browserWarningResizeObserver=null})}this.ownerWindow?.addEventListener?.(`resize`,this.handleBrowserWarningResize),this.disposables.push(()=>{this.ownerWindow?.removeEventListener?.(`resize`,this.handleBrowserWarningResize)})}}attachEditorListeners(){let e=this.editor?.onDidChangeCursorSelection?.(e=>{this.isMonacoAvailable()&&(this.selection=e?.selection||this.editor?.getSelection?.()||null)});e?.dispose&&this.disposables.push(()=>{e.dispose()})}getState(){let e=X(this.ownerWindow);return{audioLevel:this.audioLevel,isEnabled:this.isEnabled,locale:this.selectedLocale,resolvedLocale:this.resolvedLocale,supported:e.isSupported}}destroy(){if(this.destroyed=!0,this.isEnabled=!1,this.cancelUploadRequest(),this.isBrowserWarningHovered=!1,this.stopRequested=!0,this.pendingRestart=!1,this.clearBrowserWarningTimers(),this.cancelBrowserWarningMarqueeSync(),this.clearStatusTimer(),this.stopRecognition(!1),this.stopAudioMeter(),this.recognition)try{this.recognition.stop()}catch{}this.disposables.forEach(e=>{try{e?.()}catch{}}),this.disposables=[],this.lastLocaleOptionsKey=null,this.lastUploadLocaleOptionsKey=null,this.refs.editorTranscriptStatus instanceof HTMLElement&&(this.refs.editorTranscriptStatus.textContent=``),this.closeUploadDialog(),this.setUploadDialogMessage(R),this.syncBrowserWarning(!1),this.disableHostUi(`Speech to text unavailable`),f()}syncHostUi(){let e=X(this.ownerWindow),t=this.selectedLocale?`Speech recognition locale: ${this.resolvedLocale}`:`Speech recognition locale: Auto (${this.resolvedLocale})`,n=`Speech to text is available only in Monaco editor`,r=this.isEnabled?`Disable speech to text`:`Enable speech to text`,i=this.isUploadInFlight?`Uploading audio for transcription`:this.isEnabled?`Disable speech to text before uploading audio`:this.isMonacoAvailable()?`Upload audio to transcribe`:n,a=e.isDesktopGoogleChrome?L:F,o=e.isSupported,s=o&&this.isMonacoAvailable(),c=this.isMonacoAvailable()&&!this.isEnabled;if(this.populateLocaleOptions(),this.populateUploadLocaleOptions(),this.syncBrowserWarning(e.shouldShowBrowserWarning,e.shouldShowDownloadChromeWarning),this.refs.editorTranscriptLocaleSelect instanceof HTMLSelectElement&&(this.refs.editorTranscriptLocaleSelect.hidden=!o,this.refs.editorTranscriptLocaleSelect.disabled=!s,this.refs.editorTranscriptLocaleSelect.title=e.isSupported?this.isMonacoAvailable()?t:n:a),this.refs.editorTranscriptToggleBtn instanceof HTMLButtonElement){let t=e.isSupported?this.isMonacoAvailable()?r:n:a;this.refs.editorTranscriptToggleBtn.hidden=!o,this.refs.editorTranscriptToggleBtn.disabled=!s,this.refs.editorTranscriptToggleBtn.classList.toggle(`active`,this.isEnabled),this.refs.editorTranscriptToggleBtn.setAttribute(`aria-pressed`,String(this.isEnabled)),this.refs.editorTranscriptToggleBtn.setAttribute(`aria-label`,t),this.refs.editorTranscriptToggleBtn.setAttribute(`title`,t);let i=this.refs.editorTranscriptToggleBtn.querySelector(`.visually-hidden`);i instanceof HTMLElement&&(i.textContent=t)}if(this.refs.editorTranscriptUploadBtn instanceof HTMLButtonElement){this.refs.editorTranscriptUploadBtn.disabled=!c,this.refs.editorTranscriptUploadBtn.setAttribute(`aria-label`,i),this.refs.editorTranscriptUploadBtn.setAttribute(`title`,i);let e=this.refs.editorTranscriptUploadBtn.querySelector(`.visually-hidden`);e instanceof HTMLElement&&(e.textContent=i)}this.syncUploadDialogUi(),this.updateMicButtonStyles()}disableHostUi(e){if(this.refs.editorTranscriptLocaleSelect instanceof HTMLSelectElement&&(this.refs.editorTranscriptLocaleSelect.disabled=!0,this.refs.editorTranscriptLocaleSelect.title=e),this.refs.editorTranscriptToggleBtn instanceof HTMLButtonElement){this.refs.editorTranscriptToggleBtn.disabled=!0,this.refs.editorTranscriptToggleBtn.classList.remove(`active`),this.refs.editorTranscriptToggleBtn.setAttribute(`aria-pressed`,`false`),this.refs.editorTranscriptToggleBtn.setAttribute(`aria-label`,e),this.refs.editorTranscriptToggleBtn.setAttribute(`title`,e);let t=this.refs.editorTranscriptToggleBtn.querySelector(`.visually-hidden`);t instanceof HTMLElement&&(t.textContent=e),this.updateMicButtonStyles()}if(this.refs.editorTranscriptUploadBtn instanceof HTMLButtonElement){this.refs.editorTranscriptUploadBtn.disabled=!0,this.refs.editorTranscriptUploadBtn.setAttribute(`aria-label`,e),this.refs.editorTranscriptUploadBtn.setAttribute(`title`,e);let t=this.refs.editorTranscriptUploadBtn.querySelector(`.visually-hidden`);t instanceof HTMLElement&&(t.textContent=e)}}handleToggleMouseDown(e){e.preventDefault()}handleToggleClick(){let e=X(this.ownerWindow);if(!e.isDesktopGoogleChrome){this.announceStatus(I);return}if(!e.isRecognitionAvailable){this.announceStatus(L);return}if(!this.isMonacoAvailable()){this.announceStatus(`Speech to text is available only in Monaco editor.`);return}let t=!this.isEnabled;t&&this.editor?.focus?.(),this.setEnabled(t)}handleLocaleChange(e){let t=e?.target?.value;this.commitLocale(t)}handleUploadLocaleChange(e){let t=e?.target?.value;this.commitLocale(t||this.getUploadLocaleValue())}handleHostModeChange(){!this.isMonacoAvailable()&&this.isEnabled&&this.setEnabled(!1),this.isMonacoAvailable()||this.closeUploadDialog(),this.syncHostUi()}handleUploadTriggerClick(){if(this.isEnabled){this.announceStatus(`Disable speech to text before uploading audio.`);return}if(!this.isMonacoAvailable()){this.announceStatus(`Speech to text is available only in Monaco editor.`);return}this.selection=this.editor?.getSelection?.()||this.selection,this.openUploadDialog()}handleUploadDialogCancel(){this.closeUploadDialog()}handleUploadPermissionInstructionClick(){this.openUploadPermissionDialog()}handleUploadPermissionDialogCloseClick(){this.closeUploadPermissionDialog()}handleUploadDialogClose(){this.isUploadInFlight||(this.setUploadDialogMessage(R),this.setUploadPermissionTipVisible(!1)),this.refs.editorTranscriptUploadFileInput instanceof HTMLInputElement&&!this.isUploadInFlight&&(this.refs.editorTranscriptUploadFileInput.value=``),this.editor?.focus?.()}async handleUploadSubmit(e){if(e.preventDefault(),this.setUploadPermissionTipVisible(!1),!this.isMonacoAvailable()){this.setUploadDialogMessage(`Speech to text is available only in Monaco editor.`,`error`);return}let t=this.refs.editorTranscriptUploadFileInput instanceof HTMLInputElement&&this.refs.editorTranscriptUploadFileInput.files?.[0]||null,n=this.getUploadApiKey();if(!t){this.setUploadDialogMessage(H,`error`);return}if(!n){this.setUploadDialogMessage(V,`error`),this.refs.editorTranscriptUploadApiKeyInput?.focus?.();return}let r=E(this.refs.editorTranscriptUploadLocaleSelect instanceof HTMLSelectElement?this.refs.editorTranscriptUploadLocaleSelect.value:this.selectedLocale)||this.getUploadLocaleValue();this.selection=this.editor?.getSelection?.()||this.selection,this.commitLocale(r),this.preferences.saveTranscriptUploadApiKeyPreference(n),this.setUploadBusyState(!0),this.setUploadDialogMessage(z),this.setUploadPermissionTipVisible(!1);let i=this.getUploadLanguageCode(r),a=new FormData;a.append(`model_id`,P),a.append(`file`,t),i&&a.append(`language_code`,i),this.uploadAbortController=new AbortController;try{let e=await fetch(N,{body:a,headers:{"xi-api-key":n},method:`POST`,signal:this.uploadAbortController.signal}),t=await this.readUploadResponsePayload(e);if(!e.ok){let n=Error(this.getUploadResponseErrorMessage(e,t));throw n.shouldShowPermissionTip=e.status===401,n}let r=String(t?.text??t?.transcript??t?.result??``).trim();if(!r)throw Error(W);let i=await this.getCommittedTranscript(r,null),o=this.getActiveEditRange();if(!o)throw Error(`Editor selection is unavailable for transcript insertion.`);this.replaceRange(o,i,`open-lyric-transcript-upload`),this.closeUploadDialog(`submit`),this.announceStatus(B)}catch(e){this.setUploadPermissionTipVisible(!!e?.shouldShowPermissionTip),e?.name===`AbortError`?this.setUploadDialogMessage(`Audio transcription cancelled.`):this.setUploadDialogMessage(e instanceof Error?e.message:`Failed to transcribe audio.`,`error`)}finally{this.uploadAbortController=null,this.setUploadBusyState(!1),this.syncHostUi()}}handleBrowserWarningPointerEnter(){this.isBrowserWarningHovered=!0,this.clearBrowserWarningTimers(),this.refs.editorTranscriptBrowserWarning instanceof HTMLElement&&this.refs.editorTranscriptBrowserWarning.classList.remove(`editor-transcript__warning--fading`)}handleBrowserWarningPointerLeave(){this.isBrowserWarningHovered=!1,this.refs.editorTranscriptBrowserWarning instanceof HTMLElement&&!this.refs.editorTranscriptBrowserWarning.hidden&&this.scheduleBrowserWarningDismissal()}handleBrowserWarningResize(){this.scheduleBrowserWarningMarqueeSync()}commitLocale(e){let t=E(e);this.selectedLocale=t,this.resolvedLocale=D(t),this.preferences.saveTranscriptLocalePreference(t),this.syncHostUi(),this.recognition&&(this.recognition.lang=this.resolvedLocale),this.isEnabled&&(this.recognitionLifecycle===`active`||this.recognitionLifecycle===`starting`?this.stopRecognition(!0):this.recognitionLifecycle===`inactive`&&this.startRecognition()),this.onStateChange?.(this.getState())}openUploadDialog(){this.refs.editorTranscriptUploadDialog instanceof HTMLDialogElement&&(this.populateUploadLocaleOptions(),this.refs.editorTranscriptUploadApiKeyInput instanceof HTMLInputElement&&(this.refs.editorTranscriptUploadApiKeyInput.value=this.preferences.loadTranscriptUploadApiKeyPreference(``)),this.setUploadDialogMessage(R),this.setUploadPermissionTipVisible(!1),this.refs.editorTranscriptUploadDialog.open||this.refs.editorTranscriptUploadDialog.showModal())}closeUploadDialog(e=`cancel`){!(this.refs.editorTranscriptUploadDialog instanceof HTMLDialogElement)||!this.refs.editorTranscriptUploadDialog.open||this.refs.editorTranscriptUploadDialog.close(e)}openUploadPermissionDialog(){this.refs.editorTranscriptUploadPermissionDialog instanceof HTMLDialogElement&&(this.refs.editorTranscriptUploadPermissionDialog.open||this.refs.editorTranscriptUploadPermissionDialog.showModal())}closeUploadPermissionDialog(){!(this.refs.editorTranscriptUploadPermissionDialog instanceof HTMLDialogElement)||!this.refs.editorTranscriptUploadPermissionDialog.open||this.refs.editorTranscriptUploadPermissionDialog.close()}cancelUploadRequest(){this.uploadAbortController?.abort?.(),this.uploadAbortController=null,this.isUploadInFlight=!1}setUploadBusyState(e){let t=!!e;this.isUploadInFlight=t,this.refs.editorTranscriptUploadFileInput instanceof HTMLInputElement&&(this.refs.editorTranscriptUploadFileInput.disabled=t),this.refs.editorTranscriptUploadApiKeyInput instanceof HTMLInputElement&&(this.refs.editorTranscriptUploadApiKeyInput.disabled=t),this.refs.editorTranscriptUploadLocaleSelect instanceof HTMLSelectElement&&(this.refs.editorTranscriptUploadLocaleSelect.disabled=t),this.refs.closeEditorTranscriptUploadBtn instanceof HTMLButtonElement&&(this.refs.closeEditorTranscriptUploadBtn.disabled=t),this.refs.submitEditorTranscriptUploadBtn instanceof HTMLButtonElement&&(this.refs.submitEditorTranscriptUploadBtn.disabled=t,this.refs.submitEditorTranscriptUploadBtn.textContent=t?`Transcribing...`:`Transcribe Audio`)}syncUploadDialogUi(){let e=this.getUploadLocaleValue(),t=this.isMonacoAvailable()&&!this.isEnabled;this.refs.editorTranscriptUploadLocaleSelect instanceof HTMLSelectElement&&!this.isUploadInFlight&&(this.refs.editorTranscriptUploadLocaleSelect.disabled=!t,this.refs.editorTranscriptUploadLocaleSelect.value=e),this.refs.editorTranscriptUploadFileInput instanceof HTMLInputElement&&!this.isUploadInFlight&&(this.refs.editorTranscriptUploadFileInput.disabled=!t),this.refs.editorTranscriptUploadApiKeyInput instanceof HTMLInputElement&&!this.isUploadInFlight&&(this.refs.editorTranscriptUploadApiKeyInput.disabled=!t),this.refs.submitEditorTranscriptUploadBtn instanceof HTMLButtonElement&&!this.isUploadInFlight&&(this.refs.submitEditorTranscriptUploadBtn.disabled=!t)}setUploadDialogMessage(e,t=`muted`){this.refs.editorTranscriptUploadMessage instanceof HTMLElement&&(this.refs.editorTranscriptUploadMessage.dataset.tone=t,this.refs.editorTranscriptUploadMessage.textContent=e)}setUploadPermissionTipVisible(e){this.refs.editorTranscriptUploadPermissionTip instanceof HTMLElement&&(this.refs.editorTranscriptUploadPermissionTip.hidden=!e)}async readUploadResponsePayload(e){if(String(e.headers.get(`content-type`)||``).includes(`application/json`))return e.json().catch(()=>null);let t=await e.text().catch(()=>``);return t?{error:t,text:t}:null}getUploadResponseErrorMessage(e,t){let n=this.getUploadPayloadErrorMessage(t);return e.status===401?n?`ElevenLabs rejected the API key: ${n}`:U:n||`Failed to transcribe audio.`}getUploadPayloadErrorMessage(e){return e?typeof e==`string`?e.trim():typeof e==`object`?this.normalizeUploadErrorMessage(e.error??e.message??e.detail):``:``}normalizeUploadErrorMessage(e){return e?typeof e==`string`?e.trim():Array.isArray(e)?e.map(e=>this.normalizeUploadErrorMessage(e)).filter(Boolean).join(`; `):typeof e==`object`?this.normalizeUploadErrorMessage(e.message??e.error??e.reason??e.status):String(e).trim():``}setEnabled(e){this.isEnabled=!!e,this.stopRequested=!this.isEnabled,this.isEnabled?(this.startRecognition(),this.startAudioMeter()):(this.interimRange=null,this.processedFinalResults.clear(),this.updateAudioLevel(0),this.stopAudioMeter(),this.stopRecognition(!1)),this.syncHostUi(),this.onStateChange?.(this.getState())}syncBrowserWarning(e,t){if(this.refs.editorTranscriptBrowserWarning instanceof HTMLElement)if(this.refs.editorTranscriptBrowserWarning.dataset.showDownloadLink=t?`true`:`false`,e){let e=this.refs.editorTranscriptBrowserWarning.hidden;this.refs.editorTranscriptBrowserWarning.hidden=!1,e&&(this.refs.editorTranscriptBrowserWarning.classList.remove(`editor-transcript__warning--fading`),this.scheduleBrowserWarningDismissal()),this.scheduleBrowserWarningMarqueeSync()}else this.isBrowserWarningHovered=!1,this.clearBrowserWarningTimers(),this.cancelBrowserWarningMarqueeSync(),this.refs.editorTranscriptBrowserWarning.hidden=!0,this.refs.editorTranscriptBrowserWarning.classList.remove(`editor-transcript__warning--fading`),this.refs.editorTranscriptBrowserWarning.classList.remove(`editor-transcript__warning--overflowing`);this.refs.editorTranscriptDownloadChromeWarning instanceof HTMLElement&&(this.refs.editorTranscriptDownloadChromeWarning.hidden=!t)}scheduleBrowserWarningMarqueeSync(){if(!this.browserWarningMarqueeFrame){if(typeof this.ownerWindow?.requestAnimationFrame!=`function`){this.syncBrowserWarningMarqueeOverflow();return}this.browserWarningMarqueeFrame=this.ownerWindow.requestAnimationFrame(()=>{this.browserWarningMarqueeFrame=0,this.syncBrowserWarningMarqueeOverflow()})}}cancelBrowserWarningMarqueeSync(){this.browserWarningMarqueeFrame&&=(typeof this.ownerWindow?.cancelAnimationFrame==`function`&&this.ownerWindow.cancelAnimationFrame(this.browserWarningMarqueeFrame),0)}syncBrowserWarningMarqueeOverflow(){let e=this.refs.editorTranscriptBrowserWarning;if(!(e instanceof HTMLElement))return;if(e.hidden){e.classList.remove(`editor-transcript__warning--overflowing`);return}let t=e.querySelector(`.editor-transcript__warning-marquee`),n=e.querySelector(`.editor-transcript__warning-segment:not(.editor-transcript__warning-segment--clone)`);if(!(t instanceof HTMLElement)||!(n instanceof HTMLElement)){e.classList.remove(`editor-transcript__warning--overflowing`);return}let r=t.clientWidth,i=n.getBoundingClientRect().width,a=r>0&&i>r+1;e.classList.toggle(`editor-transcript__warning--overflowing`,a)}clearBrowserWarningTimers(){this.browserWarningHideTimer&&=(this.ownerWindow.clearTimeout(this.browserWarningHideTimer),0),this.browserWarningFadeTimer&&=(this.ownerWindow.clearTimeout(this.browserWarningFadeTimer),0)}scheduleBrowserWarningDismissal(){!(this.refs.editorTranscriptBrowserWarning instanceof HTMLElement)||this.isBrowserWarningHovered||(this.clearBrowserWarningTimers(),this.browserWarningHideTimer=this.ownerWindow.setTimeout(()=>{this.browserWarningHideTimer=0,this.refs.editorTranscriptBrowserWarning instanceof HTMLElement&&(this.isBrowserWarningHovered||(this.refs.editorTranscriptBrowserWarning.classList.add(`editor-transcript__warning--fading`),this.browserWarningFadeTimer=this.ownerWindow.setTimeout(()=>{if(this.browserWarningFadeTimer=0,this.refs.editorTranscriptBrowserWarning instanceof HTMLElement){if(this.isBrowserWarningHovered){this.refs.editorTranscriptBrowserWarning.classList.remove(`editor-transcript__warning--fading`);return}this.refs.editorTranscriptBrowserWarning.hidden=!0,this.refs.editorTranscriptBrowserWarning.classList.remove(`editor-transcript__warning--fading`)}},A)))},j))}ensureRecognition(){if(!J||this.recognition)return this.recognition;let e=window.SpeechRecognition||window.webkitSpeechRecognition;return typeof e==`function`?(this.recognition=new e,this.recognition.continuous=!0,this.recognition.interimResults=!0,this.recognition.lang=this.resolvedLocale,this.recognition.addEventListener(`start`,()=>{this.recognitionLifecycle=`active`,this.processedFinalResults.clear(),this.stopRequested=!1}),this.recognition.addEventListener(`end`,()=>{let e=this.isEnabled&&(this.pendingRestart||!this.stopRequested);this.recognitionLifecycle=`inactive`,this.pendingRestart=!1,e&&this.startRecognition()}),this.recognition.addEventListener(`error`,e=>{let t=e?.error??`unknown`,n=t===`network`?`Speech recognition failed with a network error. Use Google Chrome on desktop with internet access and without privacy tools blocking speech requests.`:`Speech recognition failed: ${t}.`;this.stopRequested=!0,this.pendingRestart=!1,this.recognitionLifecycle=`inactive`,this.isEnabled=!1,this.interimRange=null,this.processedFinalResults.clear(),this.stopAudioMeter(),this.syncHostUi(),this.announceStatus(n),this.onStateChange?.(this.getState())}),this.recognition.addEventListener(`result`,e=>{let t=e.resultIndex,n=e.results.item(e.resultIndex),r=n?.item(0)?.transcript??``;if(n?.isFinal){if(this.processedFinalResults.get(t)===r)return;this.processedFinalResults.set(t,r)}else this.processedFinalResults.delete(t);n?.isFinal?this.queueFinalizeTranscript(r):this.updateInterimTranscript(r)}),this.recognition):null}startRecognition(){let e=this.ensureRecognition();if(e&&this.recognitionLifecycle!==`active`&&this.recognitionLifecycle!==`starting`){e.lang=this.resolvedLocale,this.recognitionLifecycle=`starting`;try{e.start()}catch{this.recognitionLifecycle=`inactive`}}}stopRecognition(e){if(this.recognition){if(this.pendingRestart=!!e,this.stopRequested=!e,this.recognitionLifecycle===`inactive`){e&&this.isEnabled&&this.startRecognition();return}if(this.recognitionLifecycle!==`stopping`){this.recognitionLifecycle=`stopping`;try{this.recognition.stop()}catch{this.recognitionLifecycle=`inactive`}}}}async startAudioMeter(){let e=window.AudioContext||window.webkitAudioContext;if(!(this.audioContext||typeof e!=`function`||navigator.mediaDevices?.getUserMedia==null))try{let t=await navigator.mediaDevices.getUserMedia({audio:{autoGainControl:!0,echoCancellation:!0,noiseSuppression:!0}});if(!this.isEnabled){t.getTracks().forEach(e=>e.stop());return}let n=new e,r=n.createMediaStreamSource(t),i=n.createAnalyser();i.fftSize=k,i.smoothingTimeConstant=.82,r.connect(i),this.audioContext=n,this.audioSource=r,this.analyser=i,this.audioStream=t,this.frequencyData=new Uint8Array(i.frequencyBinCount),this.updateAudioLevel(0),this.meterFrame=this.ownerWindow.requestAnimationFrame(this.measureAudioLevel)}catch{this.stopAudioMeter()}}stopAudioMeter(){this.meterFrame&&=(this.ownerWindow.cancelAnimationFrame(this.meterFrame),0),this.analyser?.disconnect?.(),this.analyser=null,this.audioSource?.disconnect?.(),this.audioSource=null,this.audioStream?.getTracks?.().forEach(e=>e.stop()),this.audioStream=null,this.frequencyData=null,this.audioContext&&=(this.audioContext.close().catch(()=>{}),null),this.updateAudioLevel(0)}measureAudioLevel(){if(!this.analyser||!this.frequencyData||!this.isEnabled){this.meterFrame=0;return}this.analyser.getByteFrequencyData(this.frequencyData);let e=0,t=0;for(let n of this.frequencyData)e+=n,t=Math.max(t,n);e/=this.frequencyData.length;let n=Math.max(0,(e-10)/72),r=Math.max(0,(t-24)/144),i=Math.min(1,n*.65+r*.55),a=i<.035?0:this.audioLevel*.45+i*.55;this.updateAudioLevel(Math.min(1,a)),this.meterFrame=this.ownerWindow.requestAnimationFrame(this.measureAudioLevel)}updateAudioLevel(e){let t=Number(e.toFixed(3));Math.abs(t-this.audioLevel)<O&&(t!==0||this.audioLevel===0)||(this.audioLevel=t,this.updateMicButtonStyles(),this.onStateChange?.(this.getState()))}updateMicButtonStyles(){if(this.refs.editorTranscriptToggleBtn instanceof HTMLButtonElement){if(!this.isEnabled){this.refs.editorTranscriptToggleBtn.style.removeProperty(`--mic-input-level`),this.refs.editorTranscriptToggleBtn.style.removeProperty(`--mic-ring-opacity`),this.refs.editorTranscriptToggleBtn.style.removeProperty(`--mic-ring-scale`);return}this.refs.editorTranscriptToggleBtn.style.setProperty(`--mic-input-level`,this.audioLevel.toFixed(3)),this.refs.editorTranscriptToggleBtn.style.setProperty(`--mic-ring-opacity`,`${Math.min(.9,this.audioLevel*1.15).toFixed(3)}`),this.refs.editorTranscriptToggleBtn.style.setProperty(`--mic-ring-scale`,`${(1+this.audioLevel*.85).toFixed(3)}`)}}updateInterimTranscript(e){if(!this.isMonacoAvailable()||e.trim().length===0)return;let t=this.getActiveEditRange();t&&(this.interimRange=this.replaceRange(t,e,`open-lyric-transcript-interim`))}queueFinalizeTranscript(e){let t=String(e||``);return this.finalizationPromise=this.finalizationPromise.catch(()=>{}).then(()=>this.finalizeTranscript(t)).catch(e=>{console.error(`Failed to finalize transcript.`,e)}),this.finalizationPromise}async getCommittedTranscript(e,t){return t||!e?e:a(this.resolvedLocale,e)}async finalizeTranscript(e){if(!this.isMonacoAvailable())return;let t=String(e||``),n=this.getVoiceCommand(t),r=/\s*\n\s*/.test(t),i=await this.getCommittedTranscript(t,n);if(this.destroyed||!this.isMonacoAvailable())return;if(this.interimRange){if(!n&&!r){this.interimRange=this.replaceRange(this.interimRange,i,`open-lyric-transcript-final`),this.interimRange=null;return}let e=this.interimRange.getStartPosition();this.replaceRange(this.interimRange,``,`open-lyric-transcript-clear-interim`,{preserveSelectionAtStart:!0}),this.interimRange=null,this.selection=new this.monaco.Selection(e.lineNumber,e.column,e.lineNumber,e.column),this.editor?.setSelection?.(this.selection)}if(n===`undo`||n===`redo`){this.application.runEditorHistoryCommand(n);return}if(n===`newline`||r){let e=this.getActiveEditRange();e&&this.replaceRange(e,`
`,`open-lyric-transcript-newline`);return}let a=this.getActiveEditRange();a&&this.replaceRange(a,i,`open-lyric-transcript`)}getVoiceCommand(e){let t=String(e||``).toLowerCase().trim();return t===`undo`?`undo`:t===`redo`?`redo`:t===`\\n`?`newline`:null}getModel(){return this.editor?.getModel?.()||null}getActiveEditRange(){if(!this.monaco?.Range)return null;if(this.interimRange)return this.interimRange;let e=this.editor?.getSelection?.()||this.selection;if(e)return new this.monaco.Range(e.startLineNumber,e.startColumn,e.endLineNumber,e.endColumn);let t=this.getModel();if(!t)return null;let n=t.getFullModelRange();return new this.monaco.Range(n.endLineNumber,n.endColumn,n.endLineNumber,n.endColumn)}replaceRange(e,t,n,{preserveSelectionAtStart:r=!1}={}){let i=this.getModel();if(!i||!this.monaco?.Range||!this.monaco?.Selection||!e)return null;let a=e.getStartPosition(),o=i.getOffsetAt(a);this.editor?.executeEdits?.(n,[{forceMoveMarkers:!0,range:e,text:t}]);let s=i.getPositionAt(o+t.length),c=new this.monaco.Range(a.lineNumber,a.column,s.lineNumber,s.column),l=r?new this.monaco.Selection(a.lineNumber,a.column,a.lineNumber,a.column):new this.monaco.Selection(s.lineNumber,s.column,s.lineNumber,s.column);return this.selection=l,this.editor?.setSelection?.(l),this.editor?.revealPositionInCenterIfOutsideViewport?.(r?a:s),c}getTranscriptLocaleOptions(e=this.selectedLocale){let t=T();return e.length>0&&!t.includes(e)?[e,...t]:t}populateLocaleOptions(){let e=this.refs.editorTranscriptLocaleSelect;if(!(e instanceof HTMLSelectElement))return;let t=`${this.selectedLocale} ${this.resolvedLocale}`;if(this.lastLocaleOptionsKey===t&&e.options.length>0){e.value=this.selectedLocale,e.value!==this.selectedLocale&&(e.value=``);return}let n=this.getTranscriptLocaleOptions();e.replaceChildren();let r=document.createElement(`option`);r.value=``,r.textContent=`Auto (${this.resolvedLocale})`,e.append(r),n.forEach(t=>{let n=document.createElement(`option`);n.value=t,n.textContent=t,e.append(n)}),e.value=this.selectedLocale,e.value!==this.selectedLocale&&(e.value=``),this.lastLocaleOptionsKey=t}getUploadLocaleValue(){return this.selectedLocale||this.resolvedLocale}getUploadApiKey(){return this.refs.editorTranscriptUploadApiKeyInput instanceof HTMLInputElement?this.refs.editorTranscriptUploadApiKeyInput.value.trim():this.preferences.loadTranscriptUploadApiKeyPreference(``)}getUploadLanguageCode(e){let t=E(e).split(/[-_]/u,1)[0]?.toLowerCase();return G.get(t)||t||``}selectUploadLocaleOption(e,t){e.value=t,e.value!==t&&e.options.length>0&&(e.selectedIndex=0)}populateUploadLocaleOptions(){let e=this.refs.editorTranscriptUploadLocaleSelect;if(!(e instanceof HTMLSelectElement))return;let t=this.getUploadLocaleValue();if(this.lastUploadLocaleOptionsKey===t&&e.options.length>0){this.selectUploadLocaleOption(e,t);return}let n=this.getTranscriptLocaleOptions(t);e.replaceChildren(),n.forEach(t=>{let n=document.createElement(`option`);n.value=t,n.textContent=t,e.append(n)}),this.selectUploadLocaleOption(e,t),this.lastUploadLocaleOptionsKey=t}announceStatus(e){this.refs.editorTranscriptStatus instanceof HTMLElement&&(this.refs.editorTranscriptStatus.textContent=e),u(e),this.clearStatusTimer(),this.statusResetTimer=this.ownerWindow.setTimeout(()=>{this.statusResetTimer=0,f()},M)}clearStatusTimer(){this.statusResetTimer&&=(this.ownerWindow.clearTimeout(this.statusResetTimer),0)}isMonacoAvailable(){return!!(this.state?.editorMode===`monaco`&&this.editor)}};function ce(e){return new se(e)}var Z={id:`transcript_ol_editor`,style:[S],transcript:{actionLabel:`Speech to Text`,create:ce,displayName:`Open Lyric Transcript`,id:`open-lyric-transcript`}},le=`editor-transcript--standalone`,Q={mic:`<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z"/><path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/></svg>`,upload:`<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/></svg>`};function $(e){let t=e.createElement(`template`);t.innerHTML=m.trim();let n=t.content.firstElementChild;if(!(n instanceof HTMLElement))return null;let r=n.querySelector(`[data-ol-ref="editorTranscriptLocaleSelect"]`),i=n.querySelector(`[data-ol-ref="editorTranscriptUploadBtn"]`),a=n.querySelector(`[data-ol-ref="editorTranscriptToggleBtn"]`),o=n.querySelector(`[data-ol-ref="editorTranscriptStatus"]`);if(!r||!i||!a||!o)return null;let s=i.querySelector(`.topbar-icon-btn__icon`);s&&(s.innerHTML=Q.upload);let c=a.querySelector(`.topbar-icon-btn__icon`);c&&(c.innerHTML=Q.mic),n.removeAttribute(`data-ol-ref`);for(let e of n.querySelectorAll(`[data-ol-ref]`))e.removeAttribute(`data-ol-ref`);return{root:n,localeSelect:r,uploadButton:i,toggleButton:a,status:o}}function ue(e,t,n){let r=[`editorTranscriptBrowserWarning`,`editorTranscriptDownloadChromeWarning`,`editorTranscriptUploadDialog`,`editorTranscriptUploadForm`,`editorTranscriptUploadFileInput`,`editorTranscriptUploadApiKeyInput`,`editorTranscriptUploadLocaleSelect`,`editorTranscriptUploadMessage`,`editorTranscriptUploadPermissionTip`,`editorTranscriptUploadPermissionInstructionBtn`,`editorTranscriptUploadPermissionDialog`,`closeEditorTranscriptUploadBtn`,`closeEditorTranscriptUploadPermissionDialogBtn`,`submitEditorTranscriptUploadBtn`],i={};for(let e of r)i[e]=o(e,n);return i.editorTranscriptLocaleSelect=e.localeSelect,i.editorTranscriptUploadBtn=e.uploadButton,i.editorTranscriptToggleBtn=e.toggleButton,i.editorTranscriptStatus=e.status,i.simpleEditorToggle=t,i}var de=class{static installShellMarkup(e={}){let t=e.container instanceof HTMLElement?e.container:null,n=ie(),r=y({container:t}),i=x({container:t});(n||r||i.length)&&c()}id=`transcript`;apiVersion=1;surfaces=[`editor`,`dashboard`];contributes;provider;container;preferences=new e;warningElement=null;registryRegistration=null;standaloneController=null;standaloneControls=null;standaloneDialogs=[];constructor(e={}){this.provider=e.provider??`elevenlabs`,this.container=e.container instanceof HTMLElement?e.container:null,this.contributes={transcript:{...Z.transcript,provider:this.provider},style:{href:S}}}install(){if(!ae())throw Error(`addPlugin("transcript", new EditorPluginTranscript()): no transcript shell markup on the page. Call EditorPluginTranscript.installShellMarkup() from the page entry first — after OpenLyricDashboard.installShellMarkup() and Editor.installShellMarkup(), so the dialogs and trigger controls find their hosts. To drop transcript from this page instead, remove the addPlugin() call too.`);r().length===0&&(this.registryRegistration=l(Z))}uninstall(){this.teardownStandaloneTranscript(),b(this.warningElement),this.warningElement=null,this.registryRegistration&&=(d(this.registryRegistration),null)}onMount(e){if(e.surface!==`editor`||this.standaloneController)return;let t=e,n=t.monacoEditor,r=t.monacoNamespace,i=e.container;if(!n||!r||!i)return;let a=i.querySelector(`.editor-panel__toolbar-actions`);if(!(a instanceof HTMLElement))return;let s=i.ownerDocument??document,c=s.defaultView??window,l=$(s);if(!l)return;let u=a.querySelector(`[data-role="options"]`);if(a.insertBefore(l.root,u instanceof HTMLElement?u:null),this.standaloneControls=l.root,!o(`editorTranscriptUploadDialog`,s)){let e=a.closest(`.ol-standalone-editor`)??i;this.standaloneDialogs=x({container:e});for(let e of this.standaloneDialogs)e.classList.add(le)}o(`editorTranscriptBrowserWarning`,s)||(this.warningElement=y({container:this.container}));let d=i.querySelector(`[data-role="mode-toggle"]`);try{this.standaloneController=this.createController({application:{runEditorHistoryCommand:e=>{e===`undo`?t.undo?.():e===`redo`&&t.redo?.()}},editor:n,monaco:r,onStateChange:()=>{},ownerDocument:s,ownerWindow:c,preferences:this.preferences,refs:ue(l,d,s),state:{get editorMode(){return t.surfaceKind===`monaco`?`monaco`:`simple`}}})}catch(e){console.error(`Transcript plugin failed to mount.`,e),this.teardownStandaloneTranscript()}}onUnmount(){this.teardownStandaloneTranscript()}get isStandaloneTranscriptMounted(){return this.standaloneController!==null}createController(e){return Z.transcript.create(e)}teardownStandaloneTranscript(){try{this.standaloneController?.destroy?.()}catch(e){console.error(`Transcript plugin failed to dispose.`,e)}this.standaloneController=null,this.standaloneControls?.remove(),this.standaloneControls=null,ne(this.standaloneDialogs),this.standaloneDialogs=[]}},fe=`0.1.5`;export{de as EditorPluginTranscript,fe as version};
//# sourceMappingURL=index.js.map