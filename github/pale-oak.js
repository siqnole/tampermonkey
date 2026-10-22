// ==UserScript==
// @name         pale oak theme
// @author       siqnole
// @website      https://siqnole.dev/
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  purple-gray theme for github web
// @match        https://github.com/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  // ---- main colour: muted purple + charcoal ----
  const BG       = '#17151c';  // soft charcoal page background
  const BG_ALT   = '#211e29';  // panels, headers
  const BG_HOVER = '#2a2634';  // hover / selected rows
  const BORDER   = '#5b536d';  // subdued lavender-gray borders
  const FG       = '#d8d2df';  // warm gray-lavender main text
  const FG_DIM   = '#a9a0b5';  // secondary text
  const ACCENT   = '#c4b5e8';  // gentle lilac links / accent
  const DANGER   = '#e09aa8';  // muted rose
  const FONT     = `"IBM Plex Mono", "SFMono-Regular", "Cascadia Mono", "Roboto Mono", Consolas, "DejaVu Sans Mono", monospace`;
  const SCANLINES = false;     // keep the page clean rather than CRT-like
  const FALLING_LEAVES = true;  // seasonal animation; set false to disable

  GM_addStyle(`
    /* ---------- Primer variables (all color modes) ---------- */
    html[data-color-mode],
    html[data-color-mode][data-dark-theme],
    html[data-color-mode][data-light-theme],
    html[data-color-mode] ::backdrop {
      color-scheme: dark !important;

      --bgColor-default: ${BG} !important;
      --bgColor-muted: ${BG_ALT} !important;
      --bgColor-inset: ${BG} !important;
      --bgColor-emphasis: ${BORDER} !important;
      --bgColor-neutral-muted: ${BG_HOVER} !important;
      --bgColor-accent-muted: ${BG_HOVER} !important;
      --bgColor-success-muted: #24352d !important;
      --bgColor-danger-muted: #3a252e !important;
      --overlay-bgColor: ${BG_ALT} !important;
      --header-bgColor: ${BG_ALT} !important;

      --borderColor-default: ${BORDER} !important;
      --borderColor-muted: #40394d !important;
      --borderColor-emphasis: ${FG_DIM} !important;

      --fgColor-default: ${FG} !important;
      --fgColor-muted: ${FG_DIM} !important;
      --fgColor-accent: ${ACCENT} !important;
      --fgColor-success: ${FG} !important;
      --fgColor-danger: ${DANGER} !important;
      --fgColor-link: ${ACCENT} !important;

      --button-default-bgColor-rest: ${BG_ALT} !important;
      --button-default-bgColor-hover: ${BG_HOVER} !important;
      --button-primary-bgColor-rest: ${BORDER} !important;
      --button-primary-bgColor-hover: ${FG_DIM} !important;
      --button-primary-fgColor-rest: ${BG} !important;

      --borderRadius-small: 4px !important;
      --borderRadius-medium: 6px !important;
      --borderRadius-large: 8px !important;
      --borderRadius-full: 999px !important;
    }

    /* ---------- Base ---------- */
    html, body {
      background: ${BG} !important;
      color: ${FG} !important;
      font-family: ${FONT} !important;
    }

    body, button, input, select, textarea, a, h1, h2, h3, h4, h5, h6,
    .markdown-body, .Header, .AppHeader, .btn, .Box, .Label, .UnderlineNav {
      font-family: ${FONT} !important;
    }

    /* Keep GitHub's surfaces soft and understated */
    *, *::before, *::after {
      border-radius: 6px;
      box-shadow: none;
    }

    /* ---------- Links ---------- */
    a { color: ${ACCENT} !important; text-decoration: none; }
    a:hover { color: ${FG} !important; text-decoration: underline; }
    .Link--primary, .Link--secondary, .Link--muted { color: ${FG_DIM} !important; }
    .Link--primary:hover, .Link--secondary:hover, .Link--muted:hover { color: ${FG} !important; }

    /* ---------- Header / nav ---------- */
    .Header, .AppHeader, .AppHeader-globalBar, .js-header-wrapper header {
      background: ${BG_ALT} !important;
      border-bottom: 1px solid ${BORDER} !important;
    }
    .UnderlineNav, .UnderlineNav-body {
      border-bottom: 1px solid ${BORDER} !important;
    }
    .UnderlineNav-item.selected, .UnderlineNav-item[aria-current] {
      border-bottom: 2px solid ${FG} !important;
      color: ${FG} !important;
    }

    /* ---------- Boxes, tables, lists ---------- */
    .Box, .Box-header, .Box-row, .Box-footer,
    .react-directory-row, .react-code-line-contents,
    .file-navigation, .commit-tease, table {
      background: ${BG} !important;
      border-color: ${BORDER} !important;
    }
    .Box-header, .commit-tease { background: ${BG_ALT} !important; }
    .Box-row:hover, tr:hover, .react-directory-row:hover { background: ${BG_HOVER} !important; }

    /* ---------- Inputs & buttons ---------- */
    input, textarea, select, .form-control {
      background: ${BG} !important;
      color: ${FG} !important;
      border: 1px solid ${BORDER} !important;
      caret-color: ${FG} !important;
    }
    input:focus, textarea:focus, select:focus {
      border-color: ${FG} !important;
      outline: 1px solid ${FG} !important;
    }
    .btn, .Button, button[data-component="Button"] {
      background: ${BG_ALT} !important;
      color: ${FG} !important;
      border: 1px solid ${BORDER} !important;
    }
    .btn:hover, .Button:hover { background: ${BG_HOVER} !important; border-color: ${FG} !important; }
    .btn-primary, .Button--primary {
      background: ${BORDER} !important;
      color: ${FG} !important;
      border-color: ${FG_DIM} !important;
    }

    /* ---------- Code & markdown ---------- */
    pre, code, tt, kbd, samp, .blob-code, .blob-num, .highlight {
      font-family: ${FONT} !important;
    }
    pre, .highlight pre, .markdown-body pre {
      background: #111017 !important;
      border: 1px solid ${BORDER} !important;
    }
    .markdown-body code, .markdown-body tt {
      background: ${BG_HOVER} !important;
      color: ${ACCENT} !important;
    }
    .markdown-body h1, .markdown-body h2 {
      border-bottom: 1px dashed ${BORDER} !important;
    }
    .markdown-body h1::before { content: "# "; color: ${FG_DIM}; }
    .markdown-body h2::before { content: "## "; color: ${FG_DIM}; }
    .markdown-body h3::before { content: "### "; color: ${FG_DIM}; }
    .markdown-body blockquote {
      border-left: 2px solid ${FG_DIM} !important;
      color: ${FG_DIM} !important;
    }

    /* ---------- Labels / badges ---------- */
    .Label, .IssueLabel, .State, .Counter {
      background: transparent !important;
      color: ${FG} !important;
      border: 1px solid ${FG_DIM} !important;
    }

    /* ---------- Selection & scrollbars ---------- */
    ::selection { background: ${FG}; color: ${BG}; }
    * { scrollbar-color: ${BORDER} ${BG}; scrollbar-width: thin; }

    /* ---------- Blinking cursor on the page title ---------- */
    @keyframes term-blink { 50% { opacity: 0; } }
    strong[itemprop="name"]::after,
    [data-testid="repository-name"]::after {
      content: "\\2588";
      margin-left: 4px;
      color: ${FG};
      animation: term-blink 1s steps(1) infinite;
    }

    /* ---------- Falling autumn leaves ---------- */
    .github-seasonal-leaves {
      position: fixed;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      z-index: 2147483646;
    }
    .github-seasonal-leaves .falling-leaf {
      --leaf-color: #a9a0b5;
      position: absolute;
      top: -8vh;
      left: var(--leaf-left);
      width: var(--leaf-size);
      height: calc(var(--leaf-size) * 0.68);
      background: var(--leaf-color);
      border-radius: 100% 0 100% 0;
      opacity: 0;
      transform: rotate(var(--leaf-rotate));
      animation: github-leaf-fall var(--leaf-duration) linear var(--leaf-delay) infinite;
    }
    .github-seasonal-leaves .falling-leaf::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 8%;
      width: 1px;
      height: 84%;
      background: rgba(23, 21, 28, 0.45);
      transform: rotate(-35deg);
      transform-origin: center;
    }
    @keyframes github-leaf-fall {
      0% { opacity: 0; transform: translate3d(0, -8vh, 0) rotate(var(--leaf-rotate)); }
      12% { opacity: 0.72; }
      50% { transform: translate3d(var(--leaf-sway), 52vh, 0) rotate(calc(var(--leaf-rotate) + 170deg)); }
      88% { opacity: 0.52; }
      100% { opacity: 0; transform: translate3d(calc(var(--leaf-sway) * -0.65), 112vh, 0) rotate(calc(var(--leaf-rotate) + 330deg)); }
    }
    @media (prefers-reduced-motion: reduce) {
      .github-seasonal-leaves { display: none !important; }
    }

    /* ---------- CRT scanlines ---------- */
    ${SCANLINES ? `
    body::after {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 2147483647;
      background: repeating-linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0px,
        rgba(0, 0, 0, 0) 2px,
        rgba(0, 0, 0, 0.12) 3px
      );
    }` : ''}

  `);

  // the spice
  if (FALLING_LEAVES) {
    const mountLeaves = () => {
      if (!document.body || document.querySelector('.github-seasonal-leaves')) return;
      const layer = document.createElement('div');
      layer.className = 'github-seasonal-leaves';
      const leaves = [
        ['#9b90aa', '7%', '13px', '21s', '-3s', '-18deg', '42px'],
        ['#c4b5e8', '18%', '10px', '18s', '-11s', '27deg', '-55px'],
        ['#777084', '31%', '15px', '24s', '-16s', '66deg', '34px'],
        ['#b5abc2', '44%', '9px', '20s', '-6s', '-42deg', '58px'],
        ['#8d829d', '57%', '12px', '22s', '-14s', '12deg', '-38px'],
        ['#d0c4df', '69%', '8px', '17s', '-9s', '81deg', '46px'],
        ['#6f687b', '81%', '14px', '25s', '-19s', '-31deg', '63px'],
        ['#a69bb4', '93%', '11px', '19s', '-4s', '44deg', '-47px']
      ];
      leaves.forEach(([color, left, size, duration, delay, rotate, sway]) => {
        const leaf = document.createElement('span');
        leaf.className = 'falling-leaf';
        leaf.style.cssText = `--leaf-color:${color};--leaf-left:${left};--leaf-size:${size};--leaf-duration:${duration};--leaf-delay:${delay};--leaf-rotate:${rotate};--leaf-sway:${sway};`;
        layer.appendChild(leaf);
      });
      document.body.appendChild(layer);
    };
    if (document.body) mountLeaves();
    else document.addEventListener('DOMContentLoaded', mountLeaves, { once: true });
  }
})();
