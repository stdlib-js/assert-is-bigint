"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(x){throw (e=0, x)}};};var t=i(function(H,v){
function B(r){return typeof r=="bigint"}v.exports=B
});var f=i(function(J,o){
function I(r){try{return typeof r.valueOf()=="bigint"}catch(e){return!1}}o.exports=I
});var s=i(function(K,q){
var P=require('@stdlib/utils-native-class/dist'),d=f();function h(r){return typeof r=="object"&&P(r)==="[object BigInt]"&&d(r)}q.exports=h
});var b=i(function(L,p){
var R=t(),C=s();function F(r){return R(r)||C(r)}p.exports=F
});var y=i(function(M,g){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=b(),S=t(),k=s();l(n,"isPrimitive",S);l(n,"isObject",k);g.exports=n
});var m=i(function(N,j){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=require('@stdlib/utils-constant-function/dist'),a=u(!1),w=u(!1),z=u(!1);O(a,"isPrimitive",w);O(a,"isObject",z);j.exports=a
});var A=require('@stdlib/assert-has-bigint-support/dist'),D=y(),E=m(),c;A()?c=D:c=E;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
