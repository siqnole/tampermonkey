// ==UserScript==
// @name         purple gray
// @namespace    https://github.com/siqnole/tampermonkey
// @version      1.0.0
// @description  incredible first theme amirite
// @match        https://stoat.chat/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  const BG = '#17151c';
  const SURFACE = '#211e29';
  const SURFACE_ALT = '#2a2634';
  const BORDER = '#51495f';
  const TEXT = '#d8d2df';
  const TEXT_DIM = '#a9a0b5';
  const LILAC = '#c4b5e8';
  const FONT = '"IBM Plex Mono", "SFMono-Regular", "Cascadia Mono", "Roboto Mono", Consolas, monospace';

  GM_addStyle(`
    :root {
      color-scheme: dark !important;
      --md-sys-color-surface: ${BG} !important;
      --md-sys-color-surface-container: ${SURFACE} !important;
      --md-sys-color-surface-container-low: ${SURFACE} !important;
      --md-sys-color-surface-container-high: ${SURFACE_ALT} !important;
      --md-sys-color-surface-container-highest: #332d3d !important;
      --md-sys-color-surface-container-lowest: #111017 !important;
      --md-sys-color-background: ${BG} !important;
      --md-sys-color-on-surface: ${TEXT} !important;
      --md-sys-color-on-surface-variant: ${TEXT_DIM} !important;
      --md-sys-color-outline: ${BORDER} !important;
      --md-sys-color-outline-variant: #40394d !important;
      --md-sys-color-primary: ${LILAC} !important;
      --md-sys-color-on-primary: ${BG} !important;
      --md-sys-color-primary-container: #403653 !important;
      --md-sys-color-on-primary-container: #e3d9f4 !important;
      --md-sys-color-secondary: #b5abc2 !important;
      --md-sys-color-secondary-container: #3c3545 !important;
      --fonts-monospace: ${FONT} !important;
      --colours-link: ${LILAC} !important;
      --colours-background: ${BG} !important;
      --colours-foreground: ${TEXT} !important;
      --colours-component-btn-background-primary: #51436d !important;
      --colours-component-btn-foreground-primary: #f0eafa !important;
      --colours-component-btn-background-secondary: ${SURFACE_ALT} !important;
      --colours-component-btn-foreground-secondary: ${TEXT} !important;
    }
    html, body, button, input, textarea, select, [role="button"] { font-family: ${FONT} !important; }
    html, body { background: ${BG} !important; color: ${TEXT} !important; }
    a { color: ${LILAC} !important; }
    button, [role="button"] { border-radius: 7px !important; }
    input, textarea, select { background: ${SURFACE} !important; color: ${TEXT} !important; border-color: ${BORDER} !important; caret-color: ${LILAC} !important; }
    input:focus, textarea:focus, select:focus { border-color: ${LILAC} !important; outline: 1px solid #776b91 !important; }
    .ͼ1 .cm-content, .ͼ1 .cm-scroller, .ͼ4 .cm-scroller, .ͼ7 .cm-content { font-family: ${FONT} !important; }
    .ͼ3 .cm-gutters, .ͼ3 .cm-tooltip { background: ${SURFACE} !important; color: ${TEXT} !important; }
    .ͼ3 .cm-activeLine, .ͼ3 .cm-activeLineGutter { background: ${SURFACE_ALT} !important; }
    ::selection { background: #51436d !important; color: #f4effb !important; }
    * { scrollbar-color: ${BORDER} ${BG}; scrollbar-width: thin; }
  `);

})();
