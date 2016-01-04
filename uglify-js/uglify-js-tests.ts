/// <reference path="uglify-js.d.ts" />

var testCode= ' var a=42; console.log(a);';
console.log( uglifyjs.minify(testCode));
var opt: uglifyjs.MinifyOptions =  {mangle:false, output: {beautify: false }};
console.log( uglifyjs.minify(testCode,opt));
