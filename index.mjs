// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-bigint-support@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-native-class@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function s(t){return"bigint"==typeof t}function r(t){return"object"==typeof t&&"[object BigInt]"===e(t)&&function(t){try{return"bigint"==typeof t.valueOf()}catch(t){return!1}}(t)}function o(t){return s(t)||r(t)}i(o,"isPrimitive",s),i(o,"isObject",r);var d=n(!1),m=n(!1),c=n(!1);i(d,"isPrimitive",m),i(d,"isObject",c);var u=t()?o:d;export{u as default};
//# sourceMappingURL=index.mjs.map
