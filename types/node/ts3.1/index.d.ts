// NOTE: These definitions support NodeJS and TypeScript 3.1.

// NOTE: TypeScript version-specific augmentations can be found in the following paths:
//          - ~/common.d.ts       - Shared definitions common to all TypeScript versions
//          - ~/index.d.ts        - Definitions specific to TypeScript 2.1
//          - ~/ts3.1/index.d.ts  - Definitions specific to TypeScript 3.1

// Reference required types from the default lib:

/// <reference lib="es2018" />
/// <reference lib="esnext.asyncIterable" />
/// <reference lib="esnext.intl" />

// Shared definitions common to all TypeScript versions:
// tslint:disable-next-line:no-bad-reference
/// <reference path="../common.d.ts" />

// TypeScript 3.1-specific augmentations:

// tslint:disable-next-line:no-single-declare-module
declare module "util" {
    namespace inspect {
        const custom: unique symbol;
    }
    namespace promisify {
        const custom: unique symbol;
    }
}
