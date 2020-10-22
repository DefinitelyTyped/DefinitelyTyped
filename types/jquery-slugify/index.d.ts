// Type definitions for jquery-slugify 1.2
// Project: https://github.com/madflow/jquery-slugify
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export type Options = Partial<{
    preSlug: ((source: string) => string);
    postSlug: ((source: string) => string);
    slugFunc: ((input: string, options: Options) => string);
    separator: string;
    lang: string | boolean;
    symbols: boolean;
    maintainCase: boolean;
    titleCase: string[] | boolean;
    truncate: number;
    uric: boolean;
    uricNoSlash: boolean;
    mark: boolean;
    custom: string[];
}>;

declare global {
    interface JQuery {
        slugify(source: string, options?: Options): JQuery;
    }

    interface JQueryStatic {
        slugify(source: string, options?: Options): string;
    }
}
