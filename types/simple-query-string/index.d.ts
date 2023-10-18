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
            [key: string]: T extends Function ? never
                : T extends string | number | boolean | object | null | undefined ? T
                : never;
        },
        delimeter?: string,
        eq?: string,
    ) => string;
};

export = qs;
