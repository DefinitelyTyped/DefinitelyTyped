// Type definitions for globby 8.0
// Project: https://github.com/sindresorhus/globby#readme
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
//                 Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { IOptions as NodeGlobOptions } from 'glob';
import { Options as FastGlobOptions } from 'fast-glob';

type ExpandDirectoriesOption = boolean | string[] | { files: string[]; extensions: string[] };

interface Options extends FastGlobOptions {
    /**
     * If set to `true`, `globby` will automatically glob directories for you.
     * If you define an `Array` it will only glob files that matches the patterns inside the Array.
     * You can also define an `Object` with `files` and `extensions` like below:
     *
     * ```js
     * (async () => {
     *   const paths = await globby('images', {
     *     expandDirectories: {
     *       files: ['cat', 'unicorn', '*.jpg'],
     *       extensions: ['png']
     *     }
     *   });
     *   console.log(paths);
     *   //=> ['cat.png', 'unicorn.png', 'cow.jpg', 'rainbow.jpg']
     * })();
     * ```
     *
     * Note that if you set this option to `false`, you won't get back matched directories unless
     * you set `onlyFiles: false`.
     */
    expandDirectories?: ExpandDirectoriesOption;
    /**
     * Respect ignore patterns in `.gitignore` files that apply to the globbed files.
     */
    gitignore?: boolean;
}

/**
 * Returns a `Promise<Array>` of matching paths.
 */
declare function globby(patterns: string | string[], options?: Options): Promise<string[]>;

declare namespace globby {
    /**
     * Returns an `Array` of matching paths.
     */
    function sync(patterns: string | string[], options?: Options): string[];
    /**
     * Returns an `Array<Object>` in the format `{ pattern: string, opts: Object }`,
     * which can be passed as arguments to [`fast-glob`](https://github.com/mrmlnc/fast-glob).
     * This is useful for other globbing-related packages.
     *
     * Note that you should avoid running the same tasks multiple times as they contain a file system cache.
     * Instead, run this method each time to ensure file system changes are taken into consideration.
     */
    function generateGlobTasks(patterns: string | string[], options?: Options): Array<{ pattern: string; options: Options }>;
    /**
     * Returns a boolean of whether there are any special glob characters in the `patterns`.
     *
     * Note that the options affect the results. If `noext: true` is set, then `+(a|b)` will not
     * be considered a magic pattern. If the pattern has a brace expansion, like `a/{b/c,x/y}`,
     * then that is considered magical, unless `nobrace: true` is set.
     *
     * This function is backed by [`node-glob`](https://github.com/isaacs/node-glob#globhasmagicpattern-options)
     */
    function hasMagic(patterns: string | string[], options?: NodeGlobOptions): boolean;
    /**
     * Returns a Promise<(path: string) => boolean> indicating whether a given path is ignored
     * via a `.gitignore` file.
     *
     * Takes `cwd?: string` and `ignore?: string[]` as options. `.gitignore` files matched by the
     * ignore config are not used for the resulting filter function.
     *
     * ```js
     * const {gitignore} = require('globby');
     *
     * (async () => {
     *   const isIgnored = await gitignore();
     *   console.log(isIgnored('some/file'));
     * })();
     * ```
     */
    function gitignore(options?: { cwd?: string; ignore?: string[]; }): Promise<(path: string) => boolean>;

    namespace gitignore {
        /**
         * Returns a `(path: string) => boolean` indicating whether a given path is ignored via a `.gitignore` file.
         *
         * Takes the same options as `globby.gitignore`.
         */
        function sync(options?: { cwd?: string; ignore?: string[]; }): (path: string) => boolean;
    }
}

export = globby;
