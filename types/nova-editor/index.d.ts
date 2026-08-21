// see README for explanation

/// <reference types="nova-editor-node" />

declare function require(module: string): any;
declare const exports: typeof module.exports;
declare const module: { exports: any };
declare const __filename: string;
declare const __dirname: string;

// WebWorker" library already declare's console, as `var` not `const`

// declare const console: Console;
declare var console: Console;
