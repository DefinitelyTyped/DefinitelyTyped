import makeAsyncGeneratorFunction = require("make-async-generator-function");

makeAsyncGeneratorFunction; // $ExpectType () => readonly AsyncGeneratorFunction<unknown, any, unknown>[]

makeAsyncGeneratorFunction(); // $ExpectType readonly AsyncGeneratorFunction<unknown, any, unknown>[]
