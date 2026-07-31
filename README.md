# open-lyric-plugin-transcript

Audio → text transcription for the [`open-lyric`](../open-lyric) editor.
Browser-direct ElevenLabs: the API key is entered by the user at runtime and
kept in local storage — **no server is involved**.

## Install

```bash
npm i open-lyric open-lyric-plugin-transcript
```

`open-lyric` is a peer dependency — this package contains no copy of it.

## Use

```js
import { EditorPluginTranscript } from 'open-lyric-plugin-transcript';

const transcript = new EditorPluginTranscript({
  provider: 'elevenlabs',
  container: document.querySelector('#myTranscriptChrome'), // optional
});

editor.addPlugin('transcript', transcript);
```

Surfaces: `editor`, `dashboard`. `transcript` is a **singleton kind** — a
component rejects a second transcript plugin.

### `container`

Where the plugin mounts the chrome it owns: the browser-warning banner ("only
desktop Chrome supports transcript") and the upload dialog with the API-key
permission screenshot it links to. Omit it and each falls back on its own — the
banner into a fixed-position toast panel the plugin creates at the bottom of the
viewport, so a host with nowhere to put it still gets one; the dialogs into the
dashboard shell root (`[data-ol-ref="app"]`) when a dashboard is on the page, and
nowhere at all without one, since a bare `Editor` has no shell to hang a modal on
and no controller mounted to drive it. Either way the install is skipped when the
document already renders markup of its own, and `uninstall()` removes only what
the plugin itself mounted.

## Scope, honestly

The banner and the two dialogs are the DOM this plugin owns outright. The chrome
that *triggers* the flow — record toggle, locale select, upload button, level
meter — renders into the editor **shell's** panel markup, which the controller
reaches through the shell refs. So:

- On the app pages (and any host with that chrome), the wrapped application
  mounts the controller and the full flow works.
- On a bare standalone `Editor`, this plugin is largely **declarative** today:
  the host validates it, installs its scoped style, and can reach the real
  factory through `createController(context)` if it can supply the context.

Standalone UI mounting lands with the editor-features phase, alongside the
spellcheck workers. See `research/editor-structure-implemented.md`.

## Module formats

Ships **ESM and CommonJS**, with per-condition TypeScript declarations:

| Condition | Code             | Types              |
| --------- | ---------------- | ------------------ |
| `import`  | `dist/index.js`  | `dist/index.d.ts`  |
| `require` | `dist/index.cjs` | `dist/index.d.cts` |

Resolve this package through the same condition as `open-lyric` itself. The
core still keeps module-level state — this plugin's `install()` calls
`refreshElementRefs()` on it — so mixing `import` and `require` across the two
would refresh a different `refs` object than the core reads. See the
dual-package note in the
[`open-lyric` README](../open-lyric/README.md#requirements-and-caveats).

## What this package bundles

The ElevenLabs controller, the locale table, the stylesheet, the plugin class,
and the markup installer with its two HTML fragments all ship here — the core
`open-lyric` bundle carries none of them. `EditorPluginTranscript.install()`
publishes the registry data itself, so attaching the plugin is the only thing
that enables transcription on a host. Only the core's stateful shared modules
are redirected to `open-lyric/internal`.

That redirect is a correctness requirement, not an optimization:
`editor/scripts/shared.ts` (the app's captured element `refs`) and
`editor/html/markup-fragments.ts` (the id counter behind `linkFragmentIds`)
hold module-level mutable state. A duplicate copy would mean this plugin
calling `refreshElementRefs()` on a different `refs` object than the one the
core actually reads — so the controller would never find the banner.

## Build

From the repo root: `npm run pack -- open-lyric-plugin-transcript` (build
`open-lyric` first — this package resolves against its `./internal` subpath).
