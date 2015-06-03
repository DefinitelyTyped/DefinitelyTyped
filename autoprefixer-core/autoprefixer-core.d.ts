// Type definitions for Autoprefixer Core 5.1.11
// Project: https://github.com/postcss/autoprefixer-core
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "autoprefixer-core" {
    interface Config {
        browsers?: string[];
        cascade?: boolean;
        remove?: boolean;
    }

    interface Options {
        from?: string;
        to?: string;
        safe?: boolean;
        map?: {
            inline?: boolean;
            prev?: string | Object;
        }
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

    var exports: Exports;
    export = exports;
}
