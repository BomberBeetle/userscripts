// ==UserScript==
// @name         Humax Reset
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reset a Humax router by pressing the = key.
// @author       https://github.com/BomberBeetle
// @match        http://192.168.0.1/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0.1
// @grant        none
// ==/UserScript==

(function() {
    window.onkeypress = (e) => {

    if(e.key === '='){
    var reboot = {
                   "method": "System.reboot",
                   "id": 24,
                   "jsonrpc": "2.0"
               };

   ViewBase.prototype.apply.call(this, event, "/api", JSON.stringify(reboot));
   ShowReset();
    }}

})();