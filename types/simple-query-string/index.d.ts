// Type definitions for simple-query-string 1.3
// Project: https://github.com/khalidsalomao/simple-query-string#readme
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

declare const qs: {
    version: string;

    parse: (
        str: string,
        delimeter?: string,
        eq?: string,
    ) => {
        [key: string]: string | string[] | null;
    };

    stringify: <T>(
        obj: {
            /* tslint:disable-next-line ban-types */
            [key: string]: T extends Function
                ? never
                : T extends string | number | boolean | object | null ? T : never;
        },
        delimeter?: string,
        eq?: string,
    ) => string;
};

export = qs;
