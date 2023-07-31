// Type definitions for Autoprefixer Core 5.1.11
// Project: https://github.com/postcss/autoprefixer-core
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Config {
    browsers?: string[] | undefined;
    cascade?: boolean | undefined;
    remove?: boolean | undefined;
}

interface Options {
    from?: string | undefined;
    to?: string | undefined;
    safe?: boolean | undefined;
    map?: {
        inline?: boolean | undefined;
        prev?: string | Object | undefined;
    } | undefined;
}

interface Result {
    css: string;
    map: string;
    opts: Options;
}

interface Processor {
    postcss: any;
    info(): string;
    process(css: string, opts?: Options): Result;
}

interface Exports {
    (config: Config): Processor;
    postcss: any;
    info(): string;
    process(css: string, opts?: Options): Result;
}

declare var exports: Exports;
export = exports;
