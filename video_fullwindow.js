// ==UserScript==
// @name              Video Fullwindow
// @name:zh-CN        视频网页全屏
// @namespace         https://secf4ult.github.io
// @match-exclude     *://*/*
// @exclude           /.*/
// @grant             none
// @version           1.0
// @author            secf4ult
// @description       Fullwindow internal web video player
// @description:zh-CN 将视频全屏至网页
// @icon
// @noframes
// @downloadURL       https://github.com/secf4ult/video_fullwindow/release
// @homepageURL       https://github.com/secf4ult/video_fullwindow
// @supportURL        https://github.com/secf4ult/video_fullwindow/issues
// ==/UserScript==

const v = document.body.querySelector("video");
const vCssText = v.style.cssText;

const btn = document.createElement("button");
btn.innerText = "F";
v.parentElement.append(btn);

// toggle fullwindow
btn.onclick = () => {
  if (v.style.cssText === vCssText) {
    v.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        min-width: 0 !important;
        min-height: 0 !important;
        width: 99.99% !important;
        height: 99.99% !important;
        max-width: 99.99% !important;
        max-height: 99.99% !important;
        margin: 0 !important;
        padding: 0 !important;
        visibility: visible !important;
        border-width: 0 !important;
        background: black !important;
        z-index: 2;
        `;
    // style fullwindow button
    btn.style.zIndex = 11;
    btn.style.position = "fixed";
    btn.style.right = "15em";
    btn.style.bottom = "2.5em";
    btn.style.visibility = "hidden";
    v.onmouseenter = () => {
      btn.style.visibility = "visible";
    };
    v.onmouseleave = () => {
      btn.style.visibility = "hidden";
    };
    btn.onmouseenter = () => {
      btn.style.visibility = "visible";
    };
  } else {
    v.style.cssText = vCssText;
    btn.style.position = "relative";
    btn.style.right = "";
    btn.style.bottom = "";
    v.onmouseenter;
  }
};
