// NOTE: These definitions support NodeJS and TypeScript 3.1.

// NOTE: TypeScript version-specific augmentations can be found in the following paths:
//          - ~/base.d.ts         - Shared definitions common to all TypeScript versions
//          - ~/index.d.ts        - Definitions specific to TypeScript 2.1
//          - ~/ts3.1/index.d.ts  - Definitions specific to TypeScript 3.1

// Reference required types from the default lib:
/// <reference lib="es2018" />
/// <reference lib="esnext.asyncIterable" />
/// <reference lib="esnext.intl" />

// Base definitions for all NodeJS modules that are not specific to any version of TypeScript:
// tslint:disable-next-line:no-bad-reference
/// <reference path="../base.d.ts" />

// TypeScript 3.1-specific augmentations:
/// <reference path="util.d.ts" />
