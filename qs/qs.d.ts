// Type definitions for qs
// Project: https://github.com/hapijs/qs
// Definitions by: Roman Korneev <https://github.com/RWander>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module QueryString {
    interface IStringifyOptions {
        delimiter?: string;
        strictNullHandling?: boolean;
        skipNulls?: boolean;
        encode?: boolean;
        filter?: any;
        arrayFormat?: any;
        indices?: string;
    }

    interface IParseOptions {
        delimiter?: string;
        depth?: number;
        arrayLimit?: number;
        parseArrays?: boolean;
        allowDots?: boolean;
        plainObjects?: boolean;
        allowPrototypes?: boolean;
        parameterLimit?: number;
        strictNullHandling?: boolean;
    }

    export function stringify(obj: any, options?: IStringifyOptions): string;
    export function parse(str: string, options?: IParseOptions): any;
}

declare module "qs" {
	export = QueryString;
}
