/// <reference types="jquery" />

export type Options = Partial<{
    preSlug: (source: string) => string;
    postSlug: (source: string) => string;
    slugFunc: (input: string, options: Options) => string;
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
