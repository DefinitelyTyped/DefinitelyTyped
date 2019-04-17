declare module "querystring" {
    interface StringifyOptions {
        encodeURIComponent?: (str: string) => string;
    }

    interface ParseOptions {
        maxKeys?: number;
        decodeURIComponent?: (str: string) => string;
    }

    interface ParsedUrlQuery { [key: string]: string | string[]; }

    interface ParsedUrlQueryInput {
        [key: string]:
            // The value type here is a "poor man's `unknown`". When these types support TypeScript
            // 3.0+, we can replace this with `unknown`.
            {} | null | undefined;
    }

    function stringify(obj?: ParsedUrlQueryInput, sep?: string, eq?: string, options?: StringifyOptions): string;
    function parse(str: string, sep?: string, eq?: string, options?: ParseOptions): ParsedUrlQuery;
    function escape(str: string): string;
    function unescape(str: string): string;
}
