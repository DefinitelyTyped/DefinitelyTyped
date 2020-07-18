// Type definitions for Node.js 6.14
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 Thomas Bouldin <https://github.com/inlined>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Alorel <https://github.com/Alorel>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Sander Koenders <https://github.com/Archcry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/************************************************
*                                               *
*               Node.js v6.x API                *
*                                               *
************************************************/
// NOTE: These definitions support NodeJS and TypeScript 3.1.

// NOTE: TypeScript version-specific augmentations can be found in the following paths:
//          - ~/base.d.ts         - Shared definitions common to all TypeScript versions
//          - ~/index.d.ts        - Definitions specific to TypeScript 2.1
//          - ~/ts3.1/index.d.ts  - Definitions specific to TypeScript 3.1

// NOTE: Augmentations for TypeScript 3.1 and later should use individual files for overrides
//       within the respective ~/ts3.1 (or later) folder. However, this is disallowed for versions
//       prior to TypeScript 3.1, so the older definitions will be found here.

// Base definitions for all NodeJS modules that are not specific to any version of TypeScript:
/// <reference path="base.d.ts" />

// TypeScript 2.1-specific augmentations:

// Forward-declarations for needed types from es2015 and later (in case users are using `--lib es5`)
interface MapConstructor { }
interface WeakMapConstructor { }
interface SetConstructor { }
interface WeakSetConstructor { }
interface Iterable<T> { }
interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
}
interface IterableIterator<T> { }
interface IteratorResult<T> { }
interface AsyncIterableIterator<T> {}
interface SymbolConstructor {
    readonly iterator: symbol;
}
declare var Symbol: SymbolConstructor;
