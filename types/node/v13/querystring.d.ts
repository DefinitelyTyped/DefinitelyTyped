declare module "querystring" {
    interface StringifyOptions {
        encodeURIComponent?: (str: string) => string;
    }

    interface ParseOptions {
        maxKeys?: number;
        decodeURIComponent?: (str: string) => string;
    }

    interface ParsedUrlQuery extends NodeJS.Dict<string | string[]> { }

    interface ParsedUrlQueryInput extends NodeJS.Dict<string | number | boolean | string[] | number[] | boolean[] | null> {
    }

    function stringify(obj?: ParsedUrlQueryInput, sep?: string, eq?: string, options?: StringifyOptions): string;
    function parse(str: string, sep?: string, eq?: string, options?: ParseOptions): ParsedUrlQuery;
    /**
     * The querystring.encode() function is an alias for querystring.stringify().
     */
    const encode: typeof stringify;
    /**
     * The querystring.decode() function is an alias for querystring.parse().
     */
    const decode: typeof parse;
    function escape(str: string): string;
    function unescape(str: string): string;
}
