// Type definitions for is-generator-function 1.0
// Project: https://github.com/ljharb/is-generator-function#readme
// Definitions by: Richie Bendall <https://github.com/Richienb>
//                 Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare function isGenerator(fn: unknown): fn is GeneratorFunction;

export = isGenerator;
