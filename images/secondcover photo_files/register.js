var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){function n(i){if(o[i])return o[i].exports;var t=o[i]={"i":i,"l":!1,"exports":{}};return e[i].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var o={};n.m=e,n.c=o,n.d=function(e,o,i){n.o(e,o)||Object.defineProperty(e,o,{"enumerable":!0,"get":i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{"value":"Module"}),Object.defineProperty(e,"__esModule",{"value":!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==(void 0===e?"undefined":_typeof(e))&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{"enumerable":!0,"value":e}),2&o&&"string"!=typeof e)for(var t in e)n.d(i,t,function(n){return e[n]}.bind(null,t));return i},n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1)}([,function(e,n){!function(){function e(){return location.search.indexOf("debug")>-1}function n(n){e()&&console.log(n)}function o(n){e()&&console.error(n)}function i(e){e=Object.assign([],e),window._blReport&&window._blReport("api",e)}function t(e,n){n.active?function(e,n,i){(i=i||navigator.serviceWorker.controller)?i.postMessage({"cmd":e,"message":n}):o("No ServiceWorker")}("config",e,n.active):r<4&&(console.log("send config to sw:",r),setTimeout(function(){t(e,n)},5e3),r+=1)}var r=0,a=window.requestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};"serviceWorker"in navigator?window.addEventListener("load",function(){a(function(){new Promise(function(e,o){if((new Date).getTime(),window.__pwa_config&&window.__pwa_config.mtop&&window.lib&&window.lib.mtop){var t=window.windwow.__pwa_config.mtop;window.lib.mtop.request({"api":t.api,"v":"1.0","data":{"appId":t.appId},"appKey":"24677475","ecode":0,"type":"GET","dataType":"jsonp","timeout":2e4},function(t){(new Date).getTime(),t&&t.data?(n("swconfig mtop: "),n(t),e(t.data),i("sw config")):(o(new Error("Get Config Error: "+JSON.stringify(t))),i("sw config",new Error("response:"+JSON.stringify(t))))},function(e){o(e),(new Date).getTime(),i("sw config")})}else{if(!window.__pwa_config||!window.__pwa_config.register)return o(new Error("pwa_config not illegal"));e(window.__pwa_config)}}).then(function(e){e.register&&e.register.enable?function(e){(new Date).getTime(),navigator.serviceWorker.register(e.register.swUrl,{"scope":e.register.scope||""}).then(function(o){t(e.serviceWorker,o),n("register service worker success"),new Date,i("register")})["catch"](function(e){new Date,i("register"),o(e)})}(e):navigator.serviceWorker.getRegistrations().then(function(e){if(e&&e.length)for(var n in e)e[n].unregister()})})["catch"](function(e){o(e)})})}):(window._blReport&&window._blReport("un-support service worker",1),n("Service workers are not supported."))}()}]);