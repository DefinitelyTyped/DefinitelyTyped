// NOTE: These definitions support NodeJS and TypeScript 3.2.
// This is requried to enable globalThis support for global in ts3.4 without causing errors
// This is requried to enable typing assert in ts3.7 without causing errors
// Typically type modifiations should be made in base.d.ts instead of here

/// <reference path="base.d.ts" />

// tslint:disable-next-line:no-bad-reference
/// <reference path="../assert.d.ts" />

// tslint:disable-next-line:no-bad-reference
/// <reference path="../globals.global.d.ts" />
