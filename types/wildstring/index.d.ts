declare const wildstring: {
    wildcard: string;

    caseSensitive: boolean;

    match: (pattern: string, string: string) => boolean;

    replace: (pattern: string, strings: string | readonly string[]) => string;
};

export {};
export = wildstring;
