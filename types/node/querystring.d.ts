declare module "querystring" {
    interface StringifyOptions {
        encodeURIComponent?: (str: string) => string;
    }

    interface ParseOptions {
        maxKeys?: number;
        decodeURIComponent?: (str: string) => string;
    }

    interface ParsedUrlQuery { [key: string]: string | string[]; }

    // When these types support TypeScript 3.0+, we can replace this with `unknown`.
    type PoorMansUnknown = {} | null | undefined;
    interface ParsedUrlQueryInput { [key: string]: PoorMansUnknown; }

    function stringify(obj?: ParsedUrlQueryInput, sep?: string, eq?: string, options?: StringifyOptions): string;
    function parse(str: string, sep?: string, eq?: string, options?: ParseOptions): ParsedUrlQuery;
    function escape(str: string): string;
    function unescape(str: string): string;
}
