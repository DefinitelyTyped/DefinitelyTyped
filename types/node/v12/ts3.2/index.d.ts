// NOTE: These definitions support NodeJS and TypeScript 3.2.

// Base definitions for all NodeJS modules that are not specific to any version of TypeScript:
/// <reference path="base.d.ts" />

// This needs to be in ~/ts3.2/index.d.ts to avoid TS2403
declare var global: NodeJS.Global;
