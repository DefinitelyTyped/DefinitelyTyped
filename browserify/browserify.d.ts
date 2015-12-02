// Type definitions for browserify v12.0.1
// Project: https://github.com/substack/node-browserify
// Definitions by: Andrew Gaspar <https://github.com/AndrewGaspar/>, Jascha Ephraim <https://github.com/jaschaephraim/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

interface BrowserifyObject extends NodeJS.EventEmitter {
  // Set to any until substack/labeled-stream-splicer is defined
  pipeline: any;

  add(file: string | NodeJS.ReadableStream | (string | NodeJS.ReadableStream)[], opts?: any): BrowserifyObject;
  require(file: string | NodeJS.ReadableStream | (string | NodeJS.ReadableStream)[], opts?: any): BrowserifyObject;
  external(file: string | string[] | NodeJS.ReadableStream): BrowserifyObject;
  ignore(file: string): BrowserifyObject;
  exclude(file: string): BrowserifyObject;
  transform(tr: string | Function, opts?: { global?: boolean }): BrowserifyObject;
  plugin(tr: string | Function, opts?: { global?: boolean }): BrowserifyObject;

  bundle(cb?: (err: Error, buf: Buffer) => void): NodeJS.ReadableStream;
  reset(ops: any): void;
}

interface Browserify {
  (): BrowserifyObject;
  (files: string | NodeJS.ReadableStream | (string | NodeJS.ReadableStream)[]): BrowserifyObject;
  (opts: {
    entries?: string | NodeJS.ReadableStream | (string | NodeJS.ReadableStream)[];
    noParse?: string[];
    extensions?: string[];
    basedir?: string;
    paths?: string[];
    commondir?: boolean;
    fullPaths?: boolean;
    builtins?: any;
    bundleExternal?: boolean;
    insertGlobals?: boolean;
    detectGlobals?: boolean;
    debug?: boolean;
    standalone?: string;
    insertGlobalVars?: any;
    externalRequireName?: string;
  }): BrowserifyObject;
  (files: string | NodeJS.ReadableStream | (string | NodeJS.ReadableStream)[], opts: {
    entries?: string | NodeJS.ReadableStream | (string | NodeJS.ReadableStream)[];
    noParse?: string[];
    extensions?: string[];
    basedir?: string;
    paths?: string[];
    commondir?: boolean;
    fullPaths?: boolean;
    builtins?: any;
    bundleExternal?: boolean;
    insertGlobals?: boolean;
    detectGlobals?: boolean;
    debug?: boolean;
    standalone?: string;
    insertGlobalVars?: any;
    externalRequireName?: string;
  }): BrowserifyObject
}

declare module 'browserify' {
  var browserify: Browserify;
  export = browserify;
}
