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
