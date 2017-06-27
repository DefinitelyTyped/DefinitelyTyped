// Type definitions for qs 6.4.0
// Project: https://github.com/ljharb/qs
// Definitions by: Roman Korneev <https://github.com/RWander>
//                 Leon Yu <https://github.com/leonyu>
//                 Belinda Teh <https://github.com/tehbelinda>
//                 Melvin Lee <https://github.com/zyml>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = QueryString;
export as namespace qs;

declare namespace QueryString {
    interface IStringifyOptions {
        delimiter?: string;
        strictNullHandling?: boolean;
        skipNulls?: boolean;
        encode?: boolean;
        encoder?: (str: string) => any;
        filter?: Array<string | number> | ((prefix: string, value: any) => any);
        arrayFormat?: 'indices' | 'brackets' | 'repeat';
        indices?: boolean;
        sort?: (a: any, b: any) => number;
        serializeDate?: (d: Date) => any;
        format?: 'RFC1738' | 'RFC3986';
        encodeValuesOnly?: boolean;
    }

    interface IParseOptions {
        delimiter?: string | RegExp;
        depth?: number;
        decoder?: (str: string) => any;
        arrayLimit?: number;
        parseArrays?: boolean;
        allowDots?: boolean;
        plainObjects?: boolean;
        allowPrototypes?: boolean;
        parameterLimit?: number;
        strictNullHandling?: boolean;
    }

    function stringify(obj: any, options?: IStringifyOptions): string;
    function parse(str: string, options?: IParseOptions): any;
}
