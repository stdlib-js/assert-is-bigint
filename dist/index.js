"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(x){throw (e=0, x)}};};var t=i(function(J,v){
function y(r){return typeof r=="bigint"}v.exports=y
});var f=i(function(K,o){
function m(r){try{return typeof r.valueOf()=="bigint"}catch(e){return!1}}o.exports=m
});var s=i(function(L,q){
var P=require('@stdlib/utils-native-class/dist'),d=f();function h(r){return typeof r=="object"&&P(r)==="[object BigInt]"&&d(r)}q.exports=h
});var g=i(function(M,p){
var R=t(),C=s();function F(r){return R(r)||C(r)}p.exports=F
});var B=i(function(N,l){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=g(),k=t(),w=s();b(n,"isPrimitive",k);b(n,"isObject",w);l.exports=n
});var j=i(function(Q,O){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=require('@stdlib/utils-constant-function/dist'),a=u(!1),z=u(!1),A=u(!1);I(a,"isPrimitive",z);I(a,"isObject",A);O.exports=a
});var D=require('@stdlib/assert-has-bigint-support/dist'),E=B(),G=j(),c;D()?c=E:c=G;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
