!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequireabb0;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequireabb0=o),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}}));var i,u=o("bpxeT"),a=o("2TvXO"),c=o("6JpON"),f=o("l5bVx"),s="Expected a function",l=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,v=/^0o[0-7]+$/i,m=parseInt,b="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,x=b||y||Function("return this")(),h=Object.prototype.toString,O=Math.max,g=Math.min,j=function(){return x.Date.now()};function w(e,t,n){var r,o,i,u,a,c,f=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(s);function v(t){var n=r,i=o;return r=o=void 0,f=t,u=e.apply(i,n)}function m(e){return f=e,a=setTimeout(y,t),l?v(e):u}function b(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-f>=i}function y(){var e=j();if(b(e))return x(e);a=setTimeout(y,function(e){var n=t-(e-c);return d?g(n,i-(e-f)):n}(e))}function x(e){return a=void 0,p&&r?v(e):(r=o=void 0,u)}function h(){var e=j(),n=b(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return m(c);if(d)return a=setTimeout(y,t),v(c)}return void 0===a&&(a=setTimeout(y,t)),u}return t=N(t)||0,T(n)&&(l=!!n.leading,i=(d="maxWait"in n)?O(N(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==a&&clearTimeout(a),f=0,r=c=o=a=void 0},h.flush=function(){return void 0===a?u:x(j())},h}function T(t){var n=void 0===t?"undefined":e(f)(t);return!!t&&("object"==n||"function"==n)}function N(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(f)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==h.call(t)}(t))return NaN;if(T(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=T(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var r=p.test(t);return r||v.test(t)?m(t.slice(2),r?2:8):d.test(t)?NaN:+t}function S(e,t){return new Promise((function(n,r){var o=Math.random()>.3;setTimeout((function(){o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(i=e(u)(e(a).mark((function t(n){var r,o,i,u,f,s,l;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),r=parseInt(document.querySelector('[name="delay"]').value,10),o=parseInt(document.querySelector('[name="step"]').value,10),i=parseInt(document.querySelector('[name="amount"]').value,10),u=0;case 5:if(!(u<i)){t.next=21;break}return f=r+u*o,s=u+1,t.prev=8,t.next=11,S(s,f);case 11:l=t.sent,e(c).Notify.success("Fulfilled promise ".concat(l.position," in ").concat(l.delay,"ms")),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),e(c).Notify.failure("Rejected promise ".concat(t.t0.position," in ").concat(t.t0.delay,"ms"));case 18:u++,t.next=5;break;case 21:case"end":return t.stop()}}),t,null,[[8,15]])}))),function(e){return i.apply(this,arguments)}))}();
//# sourceMappingURL=03-promises.d5a363bd.js.map
