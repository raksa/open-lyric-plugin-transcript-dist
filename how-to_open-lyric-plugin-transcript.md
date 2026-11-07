# open-lyric-plugin-transcript — how to use the library

Audio → text transcription for the Open Lyric editor. Browser-direct
ElevenLabs: the API key is entered by the user at runtime and kept in local
storage — **no server is involved**.

Scope: this document covers the `open-lyric-plugin-transcript` package only. For
the components themselves see the `open-lyric` package's `how-to_open-lryic.md`,
and for the song notation its `schema.md`.

---

## Install

```bash
npm i open-lyric open-lyric-plugin-transcript
```

`open-lyric` is a **peer dependency** — this package contains no copy of it.
Resolve both through the same module condition (`import` or `require`, not
both): this plugin's `install()` refreshes the core's element refs, and a second
copy would refresh a different object than the core reads.

---

## Use

```js
import { EditorPluginTranscript } from 'open-lyric-plugin-transcript';

const transcript = new EditorPluginTranscript({
  provider: 'elevenlabs',
  container: document.querySelector('#myTranscriptChrome'), // optional
});

editor.addPlugin('transcript', transcript);
```

Surfaces: `editor` and `dashboard`. `transcript` is a **singleton kind** — a
component rejects a second transcript plugin.

### Options

| Option      | Meaning                                                                            |
| ----------- | ---------------------------------------------------------------------------------- |
| `provider`  | The backend. `'elevenlabs'` today — browser-direct, key held in local storage.      |
| `container` | Where a **standalone** mount installs the browser-warning banner and the dialogs.   |

Omit `container` and each piece falls back on its own: the banner into a
fixed-position toast panel the plugin creates at the bottom of the viewport, so
a host with nowhere to put it still gets one; the dialogs into the dashboard
shell root (`[data-ol-ref="app"]`) when a dashboard is on the page, and nowhere
at all without one — a bare `Editor` has no shell to hang a modal on. Either
way the install is skipped when the document already renders markup of its own,
and `uninstall()` removes only what the plugin itself mounted.

---

## What works where

The DOM this plugin owns outright is the browser-warning banner and the upload +
permission dialogs. The chrome that *triggers* the flow — record toggle, locale
select, upload button, level meter — renders into the **editor shell's** panel
markup, which the controller reaches through the shell refs. So:

- On a host that installs that shell chrome (`OpenLyricDashboard` and the shell
  markup installers), the controller is mounted and the full flow works.
- On a bare standalone `Editor`, the plugin is largely **declarative** today:
  the host validates it and installs its scoped style, and can reach the real
  factory through `createController(context)` if it can supply the context.

Transcription needs desktop Chrome; the banner is what tells a user on anything
else.

---

## Version

```js
import { version as transcriptVersion } from 'open-lyric-plugin-transcript';
```

This package's own version, taken from its manifest at build time. It bumps
independently of the core's, so alias one of them when reporting both.

---

## Module formats

Ships **ESM and CommonJS**, with per-condition TypeScript declarations:

| Condition | Code             | Types              |
| --------- | ---------------- | ------------------ |
| `import`  | `dist/index.js`  | `dist/index.d.ts`  |
| `require` | `dist/index.cjs` | `dist/index.d.cts` |

---

## Caveats

- **The API key is the user's, and it lives in their browser.** Nothing is
  proxied; audio goes from the page straight to ElevenLabs.
- **Browser only**, like the core: the module graph touches `document` at
  evaluation time.
