// Type definitions for browser-resolve 2.0
// Project: https://github.com/defunctzombie/node-browser-resolve
// Definitions by: Mario Nebl <https://github.com/marionebl>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as resv from 'resolve';

/**
 * Resolve a module path and call cb(err, path)
 *
 * @param id Identifier to resolve
 * @param callback
 */
declare function resolve(id: string, cb: resolve.Callback): void;

/**
 * Resolve a module path and call cb(err, path)
 *
 * @param id Identifier to resolve
 * @param options Options to use for resolving, optional.
 * @param callback
 */
declare function resolve(id: string, opts: resolve.AsyncOpts, cb: resolve.Callback): void;

declare namespace resolve {
    interface Opts {
        /**
         * directory to begin resolving from
         */
        basedir?: string;
        /**
         * the 'browser' property to use from package.json
         * @default 'browser'
         */
        browser?: string;
        /**
         * the calling filename where the require() call originated (in the source)
         */
        filename?: string;
        /**
         * modules object with id to path mappings to consult before doing manual resolution
         * (use to provide core modules)
         */
        modules?: { [id: string]: string };
        /**
         * transform the parsed package.json contents before looking at the main field
         */
        packageFilter?: (info: any, pkgdir: string) => any;
        /**
         * require.paths array to use if nothing is found on the normal node_modules recursive walk
         */
        paths?: string[];
    }

    type AsyncOpts = resv.AsyncOpts & Opts;
    type SyncOpts = resv.SyncOpts & Opts;

    /**
     * Callback invoked when resolving asynchronously
     * @param error
     * @param resolved Absolute path to resolved identifier
     */
    type Callback = (err: Error | null, resolved?: string) => void;

    /**
     * Returns a module path
     * @param id Identifier to resolve
     * @param options Options to use for resolving.
     */
    function sync(id: string, opts?: SyncOpts): string;
}

export = resolve;
