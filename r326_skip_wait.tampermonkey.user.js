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

setTimeout(() => {
    console.log('Skip waiting called');

    /** 予約完了画面の場合の処理 */
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

setTimeout(() => {
    console.log('Remove Ads called', location.pathname);

    /** TODO: 広告消去の処理実装予定 */
    if (location.pathname === "/b/main.aspx") {
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.remove();
            const modal = document.querySelector('div.modal-window');
            modal?.remove();
        }
    }
}, 500);
