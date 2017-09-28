// Type definitions for globby 6.1
// Project: https://github.com/sindresorhus/globby#readme
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
//                 Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { IOptions } from 'glob';

/**
 * Returns a `Promise<Array>` of matching paths.
 */
declare function globby(patterns: string | string[], options?: IOptions): Promise<string[]>;

declare namespace globby {
    /**
     * Returns an `Array` of matching paths.
     */
    function sync(patterns: string | string[], options?: IOptions): string[];
    /**
     * Returns an `Array<Object>` in the format `{ pattern: string, opts: Object }`,
     * which can be passed as arguments to [node-glob](https://github.com/isaacs/node-glob).
     * This is useful for other globbing-related packages.
     *
     * Note that you should avoid running the same tasks multiple times as they contain a file system cache.
     * Instead, run this method each time to ensure file system changes are taken into consideration.
     */
    function generateGlobTasks(patterns: string | string[], options?: IOptions): Array<{pattern: string, options: IOptions}>;
    /**
     * Returns a `boolean` of whether there are any special glob characters in the patterns.
     *
     * Note that the options affect the results. If `noext: true` is set, then `+(a|b)` will not be considered a magic pattern.
     * If the pattern has a brace expansion, like `a/{b/c,x/y}`, then that is considered magical, unless `nobrace: true` is set.
     */
    function hasMagic(patterns: string | string[], options?: IOptions): boolean;
}

export = globby;
