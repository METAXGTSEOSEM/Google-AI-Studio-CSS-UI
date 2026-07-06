// ==UserScript==
// @name         Google AI Studio - Deep Indigo & Plum Gradient Theme
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  为 Google AI Studio 注入全新调色的深色渐变主题（深靛蓝与幽梅紫交织），配备超高亮粉紫霓虹输入框。
// @author       AI Assistant
// @match        https://aistudio.google.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';

  const themeCss = `
    /* ============================================================
       AI STUDIO CUSTOM THEME — Tampermonkey Edition
       目标：aistudio.google.com
       风格：深邃星空（深海靛蓝至曜石幽梅的微光渐变）
       ============================================================ */

    /* ---------- 1. 页面背景 ---------- */
    body.dark-theme,
    html,
    body {
      background:
        radial-gradient(ellipse at 15% 30%, rgba(35, 45, 115, 0.16) 0%, transparent 60%),
        radial-gradient(ellipse at 85% 75%, rgba(105, 20, 85, 0.14) 0%, transparent 55%),
        radial-gradient(ellipse at 50% 10%, rgba(55, 15, 95, 0.12) 0%, transparent 50%),
        #040308 !important;
      background-attachment: fixed !important;
      animation: bgShiftStudioNew 20s ease-in-out infinite alternate !important;
    }

    @keyframes bgShiftStudioNew {
      0% {
        background:
          radial-gradient(ellipse at 15% 30%, rgba(35, 45, 115, 0.16) 0%, transparent 60%),
          radial-gradient(ellipse at 85% 75%, rgba(105, 20, 85, 0.14) 0%, transparent 55%),
          radial-gradient(ellipse at 50% 10%, rgba(55, 15, 95, 0.12) 0%, transparent 50%),
          #040308;
      }
      50% {
        background:
          radial-gradient(ellipse at 75% 25%, rgba(20, 55, 105, 0.14) 0%, transparent 55%),
          radial-gradient(ellipse at 25% 80%, rgba(95, 15, 105, 0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 50% 90%, rgba(70, 10, 65, 0.12) 0%, transparent 50%),
          #030207;
      }
      100% {
        background:
          radial-gradient(ellipse at 30% 70%, rgba(45, 25, 110, 0.15) 0%, transparent 58%),
          radial-gradient(ellipse at 70% 30%, rgba(110, 25, 75, 0.13) 0%, transparent 52%),
          radial-gradient(ellipse at 10% 10%, rgba(50, 12, 85, 0.12) 0%, transparent 50%),
          #050409;
      }
    }

    /* ---------- 2. 所有容器强制透明 ---------- */
    ms-app,
    app-root,
    .banner-and-app-container,
    .makersuite-layout,
    .layout-wrapper,
    .layout-main,
    .layout-main > *,
    ms-omnibar,
    ms-navbar,
    ms-banner,
    section.chunk-editor-main,
    .chunk-editor-main,
    .chat-container,
    .chat-view-container,
    .chat-view-container.zero-state,
    ms-playground-toolbar,
    ms-paid-api-key-callout,
    ms-zero-state,
    .v3-zero-state,
    .container-with-promo,
    .main-content-container,
    .input-placeholder,
    .sidebar-overlay,
    mat-sidenav-container,
    mat-sidenav-content,
    .mat-sidenav-container,
    .mat-sidenav-content,
    .mat-drawer-container,
    .mat-drawer-content,
    main,
    .main-content {
      background: transparent !important;
      background-color: transparent !important;
    }

    /* ---------- 3. 侧边栏 ---------- */
    mat-sidenav,
    .mat-sidenav,
    .mat-drawer,
    nav,
    .sidebar,
    .side-nav {
      background: transparent !important;
      background-color: transparent !important;
      backdrop-filter: blur(8px) !important;
      -webkit-backdrop-filter: blur(8px) !important;
    }

    /* ---------- 4. 顶部工具栏 ---------- */
    mat-toolbar,
    .mat-toolbar,
    ms-banner,
    header,
    .toolbar,
    ms-omnibar > * {
      background: transparent !important;
      background-color: transparent !important;
      backdrop-filter: blur(10px) !important;
      -webkit-backdrop-filter: blur(10px) !important;
      border-bottom: 1px solid rgba(50, 45, 100, 0.15) !important;
    }

    /* ---------- 5. 对话内容区 ---------- */
    .response-container,
    .model-response,
    .chat-turn,
    .turn-content,
    ms-chat-turn,
    .thoughts-container,
    .thought-content {
      background: transparent !important;
      background-color: transparent !important;
      border: none !important;
      box-shadow: none !important;
    }

    /* Thoughts 展开区 */
    .thoughts-container,
    [class*="thoughts"],
    [class*="thought"] {
      background: rgba(6, 4, 12, 0.55) !important;
      border: 1px solid rgba(80, 50, 140, 0.15) !important;
      border-radius: 12px !important;
    }

    /* ---------- 6. 右侧设置面板 ---------- */
    mat-card,
    .mat-mdc-card,
    .settings-panel,
    .run-settings-panel,
    .panel,
    .card,
    [class*="settings"] {
      background: transparent !important;
      background-color: transparent !important;
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border: 1px solid rgba(75, 45, 140, 0.12) !important;
    }

    /* ---------- 7. 【重构：超高亮粉紫渐变边框】输入框 ---------- */
    .prompt-box-container {
      border: 2px solid transparent !important;
      background:
        linear-gradient(rgba(6, 4, 11, 0.88), rgba(6, 4, 11, 0.88)) padding-box,
        linear-gradient(135deg, rgba(255, 0, 127, 0.75), rgba(157, 78, 221, 0.75)) border-box !important;
      border-radius: 18px !important;
      backdrop-filter: blur(20px) !important;
      -webkit-backdrop-filter: blur(20px) !important;
      box-shadow:
        0 0 20px rgba(255, 0, 127, 0.5),
        0 0 45px rgba(189, 0, 255, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
      animation: promptGlowNew 8s ease-in-out infinite alternate !important;
      transition: box-shadow 0.4s ease, border-color 0.4s ease !important;
    }

    .prompt-box-container:hover {
      background:
        linear-gradient(rgba(6, 4, 11, 0.88), rgba(6, 4, 11, 0.88)) padding-box,
        linear-gradient(135deg, rgba(255, 0, 153, 0.95), rgba(181, 23, 158, 0.95)) border-box !important;
      box-shadow:
        0 0 30px rgba(255, 0, 153, 0.7),
        0 0 60px rgba(189, 0, 255, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
      animation-play-state: paused !important;
    }

    .prompt-box-container:focus-within {
      background:
        linear-gradient(rgba(6, 4, 11, 0.88), rgba(6, 4, 11, 0.88)) padding-box,
        linear-gradient(135deg, #ff007f, #bd00ff, #7209b7) border-box !important;
      box-shadow:
        0 0 40px rgba(255, 0, 127, 0.85),
        0 0 80px rgba(189, 0, 255, 0.75),
        inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
      animation-play-state: paused !important;
    }

    @keyframes promptGlowNew {
      0% {
        background:
          linear-gradient(rgba(6, 4, 11, 0.88), rgba(6, 4, 11, 0.88)) padding-box,
          linear-gradient(135deg, rgba(255, 0, 127, 0.75), rgba(157, 78, 221, 0.75)) border-box !important;
        box-shadow: 0 0 20px rgba(255, 0, 127, 0.5), 0 0 45px rgba(189, 0, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
      }
      50% {
        background:
          linear-gradient(rgba(6, 4, 11, 0.88), rgba(6, 4, 11, 0.88)) padding-box,
          linear-gradient(135deg, rgba(255, 0, 153, 0.95), rgba(181, 23, 158, 0.95)) border-box !important;
        box-shadow: 0 0 30px rgba(255, 0, 153, 0.65), 0 0 60px rgba(189, 0, 255, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
      }
      100% {
        background:
          linear-gradient(rgba(6, 4, 11, 0.88), rgba(6, 4, 11, 0.88)) padding-box,
          linear-gradient(135deg, rgba(255, 0, 127, 0.75), rgba(157, 78, 221, 0.75)) border-box !important;
        box-shadow: 0 0 20px rgba(255, 0, 127, 0.5), 0 0 45px rgba(189, 0, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
      }
    }

    /* ---------- 8. Textarea ---------- */
    textarea.cdk-textarea-autosize,
    textarea.msfilecopypaste,
    .text-wrapper textarea {
      background: transparent !important;
      color: rgba(210, 205, 230, 0.9) !important;
      caret-color: #ff007f !important; /* 光标同步升级为极亮粉色 */
      border: none !important;
      box-shadow: none !important;
      outline: none !important;
    }

    /* ---------- 9. 按钮交互 ---------- */
    button.mat-mdc-button,
    button.mat-mdc-raised-button,
    button.mat-mdc-icon-button,
    .mdc-button,
    .mdc-icon-button {
      transition: background 0.18s ease, box-shadow 0.18s ease, transform 0.11s ease !important;
    }

    button.mat-mdc-button:hover,
    button.mat-mdc-raised-button:hover {
      background: rgba(75, 35, 150, 0.22) !important;
      box-shadow: 0 0 14px rgba(95, 45, 180, 0.25) !important;
    }

    button.mat-mdc-button:active,
    button.mat-mdc-raised-button:active,
    button.mat-mdc-icon-button:active,
    .mdc-icon-button:active {
      background: rgba(100, 45, 195, 0.45) !important;
      box-shadow: 0 0 20px rgba(115, 50, 215, 0.5), 0 0 45px rgba(85, 35, 170, 0.25) !important;
      transform: scale(0.94) !important;
      transition-duration: 0.06s !important;
    }

    /* ---------- 10. 下拉菜单 ---------- */
    .mat-mdc-select-panel,
    .mat-mdc-menu-panel {
      background: rgba(6, 4, 11, 0.96) !important;
      backdrop-filter: blur(16px) !important;
      -webkit-backdrop-filter: blur(16px) !important;
      border: 1px solid rgba(80, 45, 150, 0.18) !important;
    }

    mat-option:hover,
    .mat-mdc-option:hover {
      background: rgba(75, 35, 150, 0.2) !important;
    }

    /* ---------- 11. 滚动条 ---------- */
    ::-webkit-scrollbar { width: 5px !important; height: 5px !important; }
    ::-webkit-scrollbar-track { background: transparent !important; }
    ::-webkit-scrollbar-thumb { background: rgba(85, 45, 160, 0.25) !important; border-radius: 3px !important; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(115, 55, 195, 0.4) !important; }
  `;

  GM_addStyle(themeCss);
})();
