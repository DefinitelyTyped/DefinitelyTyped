import makeGeneratorFunction = require("make-generator-function");

makeGeneratorFunction; // $ExpectType () => readonly GeneratorFunction<unknown, any, unknown>[]

makeGeneratorFunction(); // $ExpectType readonly GeneratorFunction<unknown, any, unknown>[]
