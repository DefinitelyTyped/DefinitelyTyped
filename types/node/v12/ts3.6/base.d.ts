// NOTE: These definitions support NodeJS and TypeScript 3.4.

// NOTE: TypeScript version-specific augmentations can be found in the following paths:
//          - ~/base.d.ts         - Shared definitions common to all TypeScript versions
//          - ~/index.d.ts        - Definitions specific to TypeScript 2.1
//          - ~/ts3.4/base.d.ts   - Definitions specific to TypeScript 3.4
//          - ~/ts3.4/index.d.ts  - Definitions specific to TypeScript 3.4 with assert pulled in

// Reference required types from the default lib:
/// <reference lib="es2018" />
/// <reference lib="esnext.asynciterable" />
/// <reference lib="esnext.intl" />
/// <reference lib="esnext.bigint" />

// Base definitions for all NodeJS modules that are not specific to any version of TypeScript:
/// <reference path="../ts3.4/base.d.ts" />

// TypeScript 3.5-specific augmentations:
/// <reference path="../globals.global.d.ts" />
/// <reference path="../wasi.d.ts" />
