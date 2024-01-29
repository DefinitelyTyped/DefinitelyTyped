export = QueryString;
export as namespace qs;

declare namespace QueryString {
    type defaultEncoder = (str: any, defaultEncoder?: any, charset?: string) => string;
    type defaultDecoder = (str: string, decoder?: any, charset?: string) => string;

    interface IStringifyOptions {
        delimiter?: string | undefined;
        strictNullHandling?: boolean | undefined;
        skipNulls?: boolean | undefined;
        encode?: boolean | undefined;
        encoder?:
            | ((str: any, defaultEncoder: defaultEncoder, charset: string, type: "key" | "value") => string)
            | undefined;
        filter?: Array<string | number> | ((prefix: string, value: any) => any) | undefined;
        arrayFormat?: "indices" | "brackets" | "repeat" | "comma" | undefined;
        indices?: boolean | undefined;
        sort?: ((a: any, b: any) => number) | undefined;
        serializeDate?: ((d: Date) => string) | undefined;
        format?: "RFC1738" | "RFC3986" | undefined;
        encodeValuesOnly?: boolean | undefined;
        addQueryPrefix?: boolean | undefined;
        allowDots?: boolean | undefined;
        charset?: "utf-8" | "iso-8859-1" | undefined;
        charsetSentinel?: boolean | undefined;
    }

    interface IParseOptions {
        comma?: boolean | undefined;
        delimiter?: string | RegExp | undefined;
        depth?: number | false | undefined;
        decoder?:
            | ((str: string, defaultDecoder: defaultDecoder, charset: string, type: "key" | "value") => any)
            | undefined;
        arrayLimit?: number | undefined;
        parseArrays?: boolean | undefined;
        allowDots?: boolean | undefined;
        plainObjects?: boolean | undefined;
        allowPrototypes?: boolean | undefined;
        allowSparse?: boolean | undefined;
        parameterLimit?: number | undefined;
        strictNullHandling?: boolean | undefined;
        ignoreQueryPrefix?: boolean | undefined;
        charset?: "utf-8" | "iso-8859-1" | undefined;
        charsetSentinel?: boolean | undefined;
        interpretNumericEntities?: boolean | undefined;
    }

    interface ParsedQs {
        [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[];
    }

    function stringify(obj: any, options?: IStringifyOptions): string;
    function parse(str: string, options?: IParseOptions & { decoder?: never | undefined }): ParsedQs;
    function parse(str: string | Record<string, string>, options?: IParseOptions): { [key: string]: unknown };
}
