// NOTE: These definitions support NodeJS and TypeScript 3.1.

// NOTE: TypeScript version-specific augmentations can be found in the following paths:
//          - ~/base.d.ts         - Shared definitions common to all TypeScript versions
//          - ~/index.d.ts        - Definitions specific to TypeScript 2.8
//          - ~/ts3.5/index.d.ts  - Definitions specific to TypeScript 3.5

// NOTE: Augmentations for TypeScript 3.5 and later should use individual files for overrides
//       within the respective ~/ts3.5 (or later) folder. However, this is disallowed for versions
//       prior to TypeScript 3.5, so the older definitions will be found here.

// Base definitions for all NodeJS modules that are not specific to any version of TypeScript:
/// <reference path="base.d.ts" />

// We can't include globals.global.d.ts in globals.d.ts, as it'll cause duplication errors in TypeScript 3.5+
/// <reference path="globals.global.d.ts" />

// We can't include assert.d.ts in base.d.ts, as it'll cause duplication errors in TypeScript 3.7+
/// <reference path="assert.d.ts" />

// Forward-declarations for needed types from es2015 and later (in case users are using `--lib es5`)
// Empty interfaces are used here which merge fine with the real declarations in the lib XXX files
// just to ensure the names are known and node typings can be used without importing these libs.
// if someone really needs these types the libs need to be added via --lib or in tsconfig.json
interface AsyncIterable<T> { }
interface IterableIterator<T> { }
interface AsyncIterableIterator<T> {}
interface SymbolConstructor {
    readonly asyncIterator: symbol;
}
declare var Symbol: SymbolConstructor;
// even this is just a forward declaration some properties are added otherwise
// it would be allowed to pass anything to e.g. Buffer.from()
interface SharedArrayBuffer {
    readonly byteLength: number;
    slice(begin?: number, end?: number): SharedArrayBuffer;
}

declare module "util" {
    namespace types {
        function isBigInt64Array(value: any): boolean;
        function isBigUint64Array(value: any): boolean;
    }
}
