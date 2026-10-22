// ==UserScript==
// @name         Autumn Leaves
// @namespace    https://github.com/siqnole/tampermonkey
// @version      1.0.0
// @description  falling leaves
// @match        https://stoat.chat/*
// @run-at       document-start
// @grant        GM_addStyle
// @grant        GM_getResourceURL
// @resource     leaf-shape https://raw.githubusercontent.com/siqnole/tampermonkey/main/stoat/autumn-leaves/assets/leaf.svg
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

  const LEAF_ASSET = GM_getResourceURL('leaf-shape');
  GM_addStyle(`
    .stoat-autumn-leaves {{ position: fixed; inset: 0; overflow: hidden; pointer-events: none; z-index: 1; opacity: .78; }}
    .stoat-autumn-leaves .leaf {{ position: absolute; top: -8vh; left: var(--left); width: var(--size); height: var(--size); background: var(--color) url("${{LEAF_ASSET}}") center / contain no-repeat; opacity: 0; transform: rotate(var(--rotate)); animation: stoat-autumn-fall var(--duration) linear var(--delay) infinite; }}
    @keyframes stoat-autumn-fall {{ 0% {{ opacity: 0; transform: translate3d(0,-8vh,0) rotate(var(--rotate)); }} 12% {{ opacity: .78; }} 50% {{ transform: translate3d(var(--sway),52vh,0) rotate(calc(var(--rotate) + 170deg)); }} 88% {{ opacity: .5; }} 100% {{ opacity: 0; transform: translate3d(calc(var(--sway) * -.65),112vh,0) rotate(calc(var(--rotate) + 330deg)); }} }}
    @media (prefers-reduced-motion: reduce) {{ .stoat-autumn-leaves {{ display: none !important; }} }}
  `);
  const layer = document.createElement('div');
  layer.className = 'stoat-autumn-leaves';
  [['#9b90aa','7%','14px','21s','-3s','-18deg','42px'],['#c4b5e8','18%','11px','18s','-11s','27deg','-55px'],['#777084','31%','16px','24s','-16s','66deg','34px'],['#b5abc2','44%','10px','20s','-6s','-42deg','58px'],['#8d829d','57%','13px','22s','-14s','12deg','-38px'],['#d0c4df','69%','9px','17s','-9s','81deg','46px'],['#6f687b','81%','15px','25s','-19s','-31deg','63px'],['#a69bb4','93%','12px','19s','-4s','44deg','-47px']].forEach(([color,left,size,duration,delay,rotate,sway]) => {{
    const leaf = document.createElement('span'); leaf.className = 'leaf'; leaf.style.cssText = `--color:${{color}};--left:${{left}};--size:${{size}};--duration:${{duration}};--delay:${{delay}};--rotate:${{rotate}};--sway:${{sway}};`; layer.appendChild(leaf);
  }});
  document.body.appendChild(layer);

})();
