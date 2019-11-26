// Type definitions for proper-url-join 2.0
// Project: https://github.com/moxystudio/js-proper-url-join
// Definitions by: Jules Sam. Randolph <https://github.com/jsamr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { StringifyOptions } from 'query-string';

export interface Options {
    /**
     * Add a leading slash.
     *
     * **Default**: `true`
     */
    leadingSlash?: boolean;
    /**
     * Add a trailing slash.
     *
     * **Default**: `false`
     */
    trailingSlash?: boolean;
    /**
     * Protocol relative URLs.
     *
     * **Default**: `false`
     */
    protocolRelative?: boolean;
    /**
     * Query string object that will be properly stringified and appended to the url.
     * It will be merged with the query string in the url, if it exists.
     */
    query?: {
        [k: string]: string|number|ReadonlyArray<string|number>;
    };
    /**
     * [query-string](https://github.com/sindresorhus/query-string#stringifyobject-options) singify method options to be considered when stringifying the query.
     */
    queryOptions?: StringifyOptions;
}

export type PathArg = string|null|undefined|number;

interface urlJoin {
    (p1: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, p4: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, p4: PathArg, p5: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, p4: PathArg, p5: PathArg, p6: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, p4: PathArg, p5: PathArg, p6: PathArg, p7: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, p4: PathArg, p5: PathArg, p6: PathArg, p7: PathArg, p8: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, p4: PathArg, p5: PathArg, p6: PathArg, p7: PathArg, p8: PathArg, p9: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, p4: PathArg, p5: PathArg, p6: PathArg, p7: PathArg, p8: PathArg, p9: PathArg, p10: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, p4: PathArg, p5: PathArg, p6: PathArg, p7: PathArg, p8: PathArg, p9: PathArg, p10: PathArg, p11: PathArg, ...args: Array<PathArg|Options>): string;
}

declare const urlJoin: urlJoin;

export default urlJoin;
