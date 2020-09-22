// Type definitions for parse-key 0.2
// Project: https://github.com/thlorenz/parse-key
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface KeyObject {
    name: string;
    ctrl: boolean;
    meta: boolean;
    shift: boolean;
    alt: boolean;
    sequence: string;
}

declare function parse(s: string): KeyObject;
export = parse;
