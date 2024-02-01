// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===a.call(e.specifier)?a.call(i):o.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function l(e){return"string"==typeof e}var s=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,w,"e"),i=f.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var S=String.fromCharCode,x=isNaN,E=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,o,a,s,p,u,f;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))s+=i;else{if(r=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,x(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!x(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(a)?String(i.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=j(i.arg,i.width,i.padRight)),s+=i.arg||"",p+=1}return s}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,i,n;for(t=[],n=0,i=I.exec(e);i;)(r=e.slice(n,I.lastIndex-i[0].length)).length&&t.push(r),t.push(O(i)),n=I.lastIndex,i=I.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function $(e){var r,t,i;if(!F(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=V(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return T.apply(null,t)}var B,P=Object.prototype,A=P.toString,C=P.__defineGetter__,R=P.__defineSetter__,Z=P.__lookupGetter__,G=P.__lookupSetter__;B=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,o,a;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Z.call(e,r)||G.call(e,r)?(i=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),o="get"in t,a="set"in t,n&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var W=B;function L(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,z=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",H=N()?function(e){var r,t,i,n,o;if(null==e)return X.call(e);t=e[D],o=D,r=null!=(n=e)&&z.call(n,o);try{e[D]=void 0}catch(r){return X.call(e)}return i=X.call(e),r?e[D]=t:delete e[D],i}:function(e){return X.call(e)},J=Boolean,K=Boolean.prototype.toString,Q=N();function Y(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ee(e){return U(e)||Y(e)}function re(){return new Function("return this;")()}L(ee,"isPrimitive",U),L(ee,"isObject",Y);var te="object"==typeof self?self:null,ie="object"==typeof window?window:null,ne="object"==typeof globalThis?globalThis:null,oe=function(e){if(arguments.length){if(!U(e))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return re()}if(ne)return ne;if(te)return te;if(ie)return ie;throw new Error("unexpected error. Unable to resolve global object.")}();function ae(e){return"bigint"==typeof e}function ce(e){return"object"==typeof e&&"[object BigInt]"===H(e)&&function(e){try{return"bigint"==typeof e.valueOf()}catch(e){return!1}}(e)}function le(e){return ae(e)||ce(e)}function se(e){return function(){return e}}L(le,"isPrimitive",ae),L(le,"isObject",ce);var pe=se(!1),ue=se(!1),fe=se(!1);return L(pe,"isPrimitive",ue),L(pe,"isObject",fe),"function"==typeof oe.BigInt&&"function"==typeof BigInt&&"bigint"==typeof oe.BigInt("1")&&"bigint"==typeof BigInt("1")?le:pe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isBigInt=r();
//# sourceMappingURL=browser.js.map
