// Type definitions for langs 2.0
// Project: https://github.com/adlawson/langs.js#readme
// Definitions by: Orgad Shaneh <https://github.com/orgads>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace langs {
    type Type = 1 | 2 | 3 | '1' | '2' | '2T' | '2B' | '3';

    interface Language {
        name: string;
        local: string;
        '1': string;
        '2': string;
        '2T': string;
        '2B': string;
        '3': string;
    }

    interface Langs {
        all: () => Language[];
        has: (type: Type, val: string) => boolean;
        codes: (type: Type) => string[];
        names: (local?: boolean) => string[];
        where: (type: Type, val: string) => Language | undefined;
    }
}

declare const langs: langs.Langs;
export = langs;
