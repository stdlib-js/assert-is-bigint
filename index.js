// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isBigInt=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,r=Object.prototype,o=r.toString,i=r.__defineGetter__,l=r.__defineSetter__,u=r.__lookupGetter__,f=r.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,n){var c,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((a="value"in n)&&(u.call(t,e)||f.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=n.value,t.__proto__=c):t[e]=n.value),p="get"in n,y="set"in n,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,n.get),y&&l&&l.call(t,e,n.set),t};var c=e;function a(t,e,n){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var s=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var v=b()?function(t){var e,n,r,o,i;if(null==t)return d.call(t);n=t[g],i=g,e=null!=(o=t)&&s.call(o,i);try{t[g]=void 0}catch(e){return d.call(t)}return r=d.call(t),e?t[g]=n:delete t[g],r}:function(t){return d.call(t)},_=Boolean.prototype.toString;var j=b();function m(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===v(t)))}function w(t){return p(t)||m(t)}function h(){return new Function("return this;")()}a(w,"isPrimitive",p),a(w,"isObject",m);var S="object"==typeof self?self:null,O="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof B?B:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return h()}if(S)return S;if(O)return O;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}();function I(t){return"bigint"==typeof t}function E(t){return"object"==typeof t&&"[object BigInt]"===v(t)&&function(t){try{return"bigint"==typeof t.valueOf()}catch(t){return!1}}(t)}function x(t){return I(t)||E(t)}function V(t){return function(){return t}}a(x,"isPrimitive",I),a(x,"isObject",E);var k=V(!1),A=V(!1),F=V(!1);return a(k,"isPrimitive",A),a(k,"isObject",F),"function"==typeof T.BigInt&&"function"==typeof BigInt&&"bigint"==typeof T.BigInt("1")&&"bigint"==typeof BigInt("1")?x:k}));
//# sourceMappingURL=index.js.map
