// Type definitions for doi-regex 0.1
// Project: https://github.com/regexhq/doi-regex
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    exact?: boolean;
}

interface PathOptions {
    protocol?: boolean;
}

declare function doi(options?: Options): RegExp;

declare namespace doi {
    function declared(options?: Options): RegExp;

    function groups(doi: string): ReturnType<RegExp['exec']>;

    function resolvePath(options?: PathOptions): RegExp;
}

export = doi;
