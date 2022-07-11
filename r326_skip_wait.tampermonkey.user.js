// ==UserScript==
// @name         r326 skip waiting
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.r326.com/b/complete.aspx?id=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=r326.com
// @grant        none
// @copyright  2022+, Ryo Ikeda
// @run-at document-start
// ==/UserScript==

setTimeout(() => {
    console.log('Skip waiting called');
    var a = document.getElementById("form1");
    var hiddens = document.querySelectorAll('.aspNetHidden');
    hiddens.forEach((e) => {
       e.innerHTML = '';
    });
    a.setAttribute("method", "POST");
    a.setAttribute("action", "main.aspx?" + window.GetIdOrG());
    a.submit()
}, 500);