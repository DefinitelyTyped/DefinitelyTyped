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
            /* eslint-disable-next-line @typescript-eslint/ban-types */
            [key: string]: T extends Function ? never
                : T extends string | number | boolean | object | null | undefined ? T
                : never;
        },
        delimeter?: string,
        eq?: string,
    ) => string;
};

export = qs;
