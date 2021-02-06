// Type definitions for is-generator 1.0
// Project: https://github.com/blakeembrey/is-generator
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare function isGenerator(obj: unknown): obj is Generator;

declare namespace isGenerator {
    function fn(fn: unknown): fn is GeneratorFunction;
}

export = isGenerator;
