!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define("components",["React"],t):"object"==typeof exports?exports.components=t(require("React")):e.components=t(e.React)}(self,(function(e){return function(){"use strict";var t={24:function(t){t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){r.r(o),r.d(o,{HelloList:function(){return n},HelloMessage:function(){return u},HelloWorld:function(){return l}});var e=r(24),t=r.n(e),n=function(e){var n=e.map((function(e){return t().createElement("li",null,e)}));return t().createElement(t().Fragment,null,t().createElement("h2",null,"Here's some data!"),t().createElement("ul",null,n))},u=function(e){return t().createElement("h1",null,"Hey there ",e)},l=function(){return t().createElement("h1",null,"Hello World Component")}}(),o}()}));