// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;var f=function(t,e,r){var n,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(c.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,e,r.get),y&&a&&a.call(t,e,r.set),t},p=n,y=f,b=r()?p:y;var v=function(t,e,r){b(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},_=v;var s=function(t){return"boolean"==typeof t};var g=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return g&&"symbol"==typeof Symbol.toStringTag},d=Object.prototype.toString,m=d;var w=function(t){return m.call(t)},O=Object.prototype.hasOwnProperty;var h=function(t,e){return null!=t&&O.call(t,e)},P="function"==typeof Symbol?Symbol.toStringTag:"",S=h,B=P,E=d;var I=w,T=function(t){var e,r,n;if(null==t)return E.call(t);r=t[B],e=S(t,B);try{t[B]=void 0}catch(e){return E.call(t)}return n=E.call(t),e?t[B]=r:delete t[B],n},k=j()?T:I,x=Boolean.prototype.toString;var V=k,A=function(t){try{return x.call(t),!0}catch(t){return!1}},F=j();var G=function(t){return"object"==typeof t&&(t instanceof Boolean||(F?A(t):"[object Boolean]"===V(t)))},M=s,z=G;var C=_,D=function(t){return M(t)||z(t)},U=G;C(D,"isPrimitive",s),C(D,"isObject",U);var q="object"==typeof self?self:null,H="object"==typeof window?window:null,J=D.isPrimitive,K=function(){return new Function("return this;")()},L=q,N=H,Q=t(Object.freeze({__proto__:null}));var R=function(t){if(arguments.length){if(!J(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return K()}if(L)return L;if(N)return N;if(Q)return Q;throw new Error("unexpected error. Unable to resolve global object.")},W=R();var X=function(){return"function"==typeof W.BigInt&&"function"==typeof BigInt&&"bigint"==typeof W.BigInt("1")&&"bigint"==typeof BigInt("1")};var Y=function(t){return"bigint"==typeof t};var Z=k,$=function(t){try{return"bigint"==typeof t.valueOf()}catch(t){return!1}};var tt=function(t){return"object"==typeof t&&"[object BigInt]"===Z(t)&&$(t)},et=Y,rt=tt;var nt=_,ot=function(t){return et(t)||rt(t)},it=tt;nt(ot,"isPrimitive",Y),nt(ot,"isObject",it);var ut=ot;var at=_,ct=function(t){return function(){return t}},lt=ct(!1),ft=ct(!1),pt=ct(!1);at(lt,"isPrimitive",ft),at(lt,"isObject",pt);var yt=ut,bt=lt,vt=X()?yt:bt;export{vt as default};
//# sourceMappingURL=mod.js.map
