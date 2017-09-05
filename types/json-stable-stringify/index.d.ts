// Type definitions for json-stable-stringify 1.0
// Project: https://github.com/substack/json-stable-stringify
// Definitions by: Matt Frantz <https://github.com/mhfrantz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function stringify(obj: any, opts?: stringify.Comparator | stringify.Options): string;

declare namespace stringify {
    interface Element {
        key: string;
        value: any;
    }

    type Comparator = (a: Element, b: Element) => number;

    type Replacer = (key: string, value: any) => any;

    interface Options {
        cmp?: Comparator;
        space?: number | string;
        replacer?: Replacer;
    }
}

export = stringify;
