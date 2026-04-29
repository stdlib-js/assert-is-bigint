"use strict";var e=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var t=e(function(G,v){
function x(r){return typeof r=="bigint"}v.exports=x
});var f=e(function(H,o){
function B(r){try{return typeof r.valueOf()=="bigint"}catch(i){return!1}}o.exports=B
});var s=e(function(J,q){
var I=require('@stdlib/utils-native-class/dist'),P=f();function d(r){return typeof r=="object"&&I(r)==="[object BigInt]"&&P(r)}q.exports=d
});var b=e(function(K,p){
var h=t(),R=s();function C(r){return h(r)||R(r)}p.exports=C
});var y=e(function(L,g){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=b(),F=t(),S=s();l(n,"isPrimitive",F);l(n,"isObject",S);g.exports=n
});var m=e(function(M,j){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=require('@stdlib/utils-constant-function/dist'),a=u(!1),k=u(!1),w=u(!1);O(a,"isPrimitive",k);O(a,"isObject",w);j.exports=a
});var z=require('@stdlib/assert-has-bigint-support/dist'),A=y(),D=m(),c;z()?c=A:c=D;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
