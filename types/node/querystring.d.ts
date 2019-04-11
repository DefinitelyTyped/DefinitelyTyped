declare module "querystring" {
    interface StringifyOptions {
        encodeURIComponent?: (str: string) => string;
    }

    interface ParseOptions {
        maxKeys?: number;
        decodeURIComponent?: (str: string) => string;
    }

    interface ParsedUrlQuery { [key: string]: string | string[]; }

    function stringify(obj?: {}, sep?: string, eq?: string, options?: StringifyOptions): string;
    function parse(str: string, sep?: string, eq?: string, options?: ParseOptions): ParsedUrlQuery;
    function escape(str: string): string;
    function unescape(str: string): string;
}
