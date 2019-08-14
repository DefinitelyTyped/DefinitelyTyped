// Type definitions for slug 0.9
// Project: https://github.com/trott/node-slug
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = slug;

interface CharMap {
    [x: string]: string;
}

interface Mode {
    charmap?: CharMap| null;
    lower?: boolean| null;
    multicharmap?: CharMap| null;
    remove?: RegExp| null;
    replacement?: string | null;
    symbols?: boolean| null;
}

declare function slug(string: string, opts?: Mode | string): string;
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
}
