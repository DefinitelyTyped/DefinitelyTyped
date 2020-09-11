// NOTE: These definitions support NodeJS and TypeScript 3.1.

// NOTE: TypeScript version-specific augmentations can be found in the following paths:
//          - ~/base.d.ts         - Shared definitions common to all TypeScript versions
//          - ~/index.d.ts        - Definitions specific to TypeScript 2.1
//          - ~/ts3.1/index.d.ts  - Definitions specific to TypeScript 3.1

// NOTE: Augmentations for TypeScript 3.1 and later should use individual files for overrides
//       within the respective ~/ts3.1 (or later) folder. However, this is disallowed for versions
//       prior to TypeScript 3.1, so the older definitions will be found here.

// Base definitions for all NodeJS modules that are not specific to any version of TypeScript:
// tslint:disable-next-line:no-bad-reference
/// <reference path="../base.d.ts" />

// TypeScript 2.1-specific augmentations:

// Forward-declarations for needed types from es2015 and later (in case users are using `--lib es5`)
interface MapConstructor { }
interface WeakMapConstructor { }
interface SetConstructor { }
interface WeakSetConstructor { }
interface IteratorResult<T> { }
interface Iterable<T> { }
interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
}
interface IterableIterator<T> { }
interface SymbolConstructor {
    readonly iterator: symbol;
}
declare var Symbol: SymbolConstructor;

declare module "util" {
    namespace inspect {
        const custom: symbol;
    }
    namespace promisify {
        const custom: symbol;
    }
}
