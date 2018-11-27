// NOTE: These definitions support NodeJS 10 and TypeScript 3.1 and later.

// Forward definitions for required types from the default lib:

/// <reference lib="es2018" />
/// <reference lib="esnext.asyncIterable" />
/// <reference lib="esnext.intl" />

// Type information for all node modules shared between definitions for TypeScript 2.0 (defined
// here) and TypeScript 3.1 and later (defined in ts3.1/index.d.ts):

// tslint:disable-next-line:no-bad-reference
/// <reference path="../common.d.ts" />

// TypeScript 3.1-specific module augmentations:

// tslint:disable-next-line:no-single-declare-module
declare module "util" {
    namespace inspect {
        const custom: unique symbol;
    }
    namespace promisify {
        const custom: unique symbol;
    }
}
