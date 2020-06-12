import isGeneratorFunction = require("is-generator-function");

isGeneratorFunction(function*() { yield "a"; }); // $ExpectType boolean
