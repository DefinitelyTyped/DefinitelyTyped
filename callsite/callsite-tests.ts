

import callsite = require("callsite");

var stack = callsite();
var p = stack[0];

console.log(p.getThis());
console.log(p.getTypeName());
console.log(p.getFunctionName());
console.log(p.getMethodName());
console.log(p.getFileName());
console.log(p.getLineNumber());
console.log(p.getColumnNumber());
console.log(p.getFunction());
console.log(p.getEvalOrigin());
console.log(p.isNative());
console.log(p.isToplevel());
console.log(p.isEval());
console.log(p.isConstructor());
