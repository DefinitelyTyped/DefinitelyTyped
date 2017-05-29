// Type definitions for browser-resolve
// Project: https://github.com/defunctzombie/node-browser-resolve
// Definitions by: Mario Nebl <https://github.com/marionebl/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="resolve" />

import * as resolve from 'resolve';

/**
 * Callback invoked when resolving asynchronously
 *
 * @param error
 * @param resolved Absolute path to resolved identifier
 */
type resolveCallback = (err?: Error, resolved?: string) => void;

/**
 * Resolve a module path and call cb(err, path [, pkg])
 *
 * @param id Identifier to resolve
 * @param callback
 */
declare function browserResolve(id: string, cb: resolveCallback): void;

/**
 * Resolve a module path and call cb(err, path [, pkg])
 *
 * @param id Identifier to resolve
 * @param options Options to use for resolving, optional.
 * @param callback
 */
declare function browserResolve(id: string, opts: browserResolve.AsyncOpts, cb: resolveCallback): void;

/**
 * Returns a module path
 *
 * @param id Identifier to resolve
 * @param options Options to use for resolving, optional.
 */
declare function browserResolveSync(id: string, opts?: browserResolve.SyncOpts): string;

declare namespace browserResolve {
  interface Opts {
    // the 'browser' property to use from package.json (defaults to 'browser')
    browser?: string;
    // the calling filename where the require() call originated (in the source)
    filename?: string;
    // modules object with id to path mappings to consult before doing manual resolution (use to provide core modules)
    modules?: any;
  }

  export interface AsyncOpts extends resolve.AsyncOpts, Opts { }
  export interface SyncOpts extends resolve.SyncOpts, Opts { }

  export var sync: typeof browserResolveSync;
}

export = browserResolve;
