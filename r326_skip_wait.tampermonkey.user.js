// ==UserScript==
// @name         r326 skip waiting
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.r326.com/b/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=r326.com
// @grant        none
// @copyright  2022+, Ryo Ikeda
// @run-at document-start
// ==/UserScript==


/** 予約完了画面の場合の処理 */
setTimeout(() => {
    console.log('Skip waiting called');
    if (location.pathname === "/b/complete.aspx") {
        var a = document.getElementById("form1");
        var hiddens = document.querySelectorAll('.aspNetHidden');
        hiddens.forEach((e) => {
            e.innerHTML = '';
        });
        a.setAttribute("method", "POST");
        a.setAttribute("action", "main.aspx?" + window.GetIdOrG());
        a.submit()
    }
}, 500);

/** 広告消去の処理 */
const removeAdsModal = () => {
    console.log('Remove Ads called', location.pathname);

    if (location.pathname === "/b/main.aspx") {
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.remove();
            const modal = document.querySelector('div.modal-window');
            modal?.remove();
        }
    }
}

setTimeout(() => {
  removeAdsModal();
}, 500);
/** タイミングずれて消せない可能性あるので2回実行 */
setTimeout(() => {
  removeAdsModal();
}, 1500);
