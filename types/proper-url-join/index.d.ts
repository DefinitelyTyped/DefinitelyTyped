import { StringifyOptions } from "query-string";

export interface Options {
    /**
     * Add a leading slash.
     *
     * **Default**: `true`
     */
    leadingSlash?: boolean | "keep" | undefined;
    /**
     * Add a trailing slash.
     *
     * **Default**: `false`
     */
    trailingSlash?: boolean | "keep" | undefined;
    /**
     * Protocol relative URLs.
     *
     * **Default**: `false`
     */
    protocolRelative?: boolean | undefined;
    /**
     * Query string object that will be properly stringified and appended to the url.
     * It will be merged with the query string in the url, if it exists.
     */
    query?: {
        [k: string]: string | number | ReadonlyArray<string | number>;
    } | undefined;
    /**
     * [query-string](https://github.com/sindresorhus/query-string#stringifyobject-options) singify method options to be considered when stringifying the query.
     */
    queryOptions?: StringifyOptions | undefined;
}

export type PathArg = string | null | undefined | number;

interface urlJoin {
    (p1: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, p4: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, p4: PathArg, p5: PathArg, options?: Options): string;
    (p1: PathArg, p2: PathArg, p3: PathArg, p4: PathArg, p5: PathArg, p6: PathArg, options?: Options): string;
    (
        p1: PathArg,
        p2: PathArg,
        p3: PathArg,
        p4: PathArg,
        p5: PathArg,
        p6: PathArg,
        p7: PathArg,
        options?: Options,
    ): string;
    (
        p1: PathArg,
        p2: PathArg,
        p3: PathArg,
        p4: PathArg,
        p5: PathArg,
        p6: PathArg,
        p7: PathArg,
        p8: PathArg,
        options?: Options,
    ): string;
    (
        p1: PathArg,
        p2: PathArg,
        p3: PathArg,
        p4: PathArg,
        p5: PathArg,
        p6: PathArg,
        p7: PathArg,
        p8: PathArg,
        p9: PathArg,
        options?: Options,
    ): string;
    (
        p1: PathArg,
        p2: PathArg,
        p3: PathArg,
        p4: PathArg,
        p5: PathArg,
        p6: PathArg,
        p7: PathArg,
        p8: PathArg,
        p9: PathArg,
        p10: PathArg,
        options?: Options,
    ): string;
    (
        p1: PathArg,
        p2: PathArg,
        p3: PathArg,
        p4: PathArg,
        p5: PathArg,
        p6: PathArg,
        p7: PathArg,
        p8: PathArg,
        p9: PathArg,
        p10: PathArg,
        p11: PathArg,
        ...args: Array<PathArg | Options>
    ): string;
}

declare const urlJoin: urlJoin;

export default urlJoin;
