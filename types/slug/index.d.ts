// Type definitions for slug 5.0
// Project: https://github.com/trott/node-slug
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = slug;

declare function slug(string: string, replacement: string): string;
declare function slug(string: string, opts?: slug.Options): string;

declare namespace slug {
    const charmap: CharMap;
    const defaults: {
        charmap: CharMap;
        mode: string;
        modes: {
            pretty: Mode;
            rfc3986: Mode;
        };
        multicharmap: CharMap;
    };
    const multicharmap: CharMap;

    function extend(entry: CharMap): void;
    function reset(): void;

    interface Mode {
        charmap?: CharMap | null;
        lower?: boolean | null;
        multicharmap?: CharMap | null;
        remove?: RegExp | null;
        replacement?: string | null;
        symbols?: boolean | null;
    }

    type Options = {
        locale?: string;
    } & Partial<Mode>;

    type CharMap = Record<string, string>;
}
