function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequireabb0;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequireabb0=r);var i=r("7Y9D8"),u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=s||d||Function("return this")(),y=Object.prototype.toString,m=Math.max,v=Math.min,b=function(){return p.Date.now()};function g(e,t,n){var o,r,i,u,a,f,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function y(e){return c=e,a=setTimeout(w,t),l?p(e):u}function g(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function w(){var e=b();if(g(e))return x(e);a=setTimeout(w,function(e){var n=t-(e-f);return s?v(n,i-(e-c)):n}(e))}function x(e){return a=void 0,d&&o?p(e):(o=r=void 0,u)}function O(){var e=b(),n=g(e);if(o=arguments,r=this,f=e,n){if(void 0===a)return y(f);if(s)return a=setTimeout(w,t),p(f)}return void 0===a&&(a=setTimeout(w,t)),u}return t=j(t)||0,h(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(j(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},O.flush=function(){return void 0===a?u:x(b())},O}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=f.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}function w(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(async function(t){t.preventDefault();const n=parseInt(document.querySelector('[name="delay"]').value,10),o=parseInt(document.querySelector('[name="step"]').value,10),r=parseInt(document.querySelector('[name="amount"]').value,10);for(let t=0;t<r;t++){const r=n+t*o,u=t+1;try{const t=await w(u,r);e(i).Notify.success(`Fulfilled promise ${t.position} in ${t.delay}ms`)}catch(t){e(i).Notify.failure(`Rejected promise ${t.position} in ${t.delay}ms`)}}}));
//# sourceMappingURL=03-promises.45e4fa6e.js.map
