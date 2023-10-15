import isGeneratorFunction = require("is-generator-function");

// $ExpectType boolean
isGeneratorFunction(function*() {
    yield "a";
});
