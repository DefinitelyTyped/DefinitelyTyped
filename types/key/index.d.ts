// Type definitions for key 0.1
// Project: https://github.com/adlawson/key
// Definitions by: hayke102 <https://github.com/hayke102>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Code {
    special: Special;
    arrow: Arrow;
    punctuation: Punctuation;
    alnum: Alnum;
}

declare const key: {
    code: Code,
    // brand: Brand;

    get(keyCode: number): Reference,

    is(ref: Reference, keyCode: number): boolean;
}
export = key;

interface Reference {
    name: string;
    code: number;

    // constructor(name: string, code: number | number[]);

}

interface Alnum {
    '0': Reference;
    '1': Reference;
    '2': Reference;
    '3': Reference;
    '4': Reference;
    '5': Reference;
    '6': Reference;
    '7': Reference;
    '8': Reference;
    '9': Reference;
    a: Reference;
    b: Reference;
    c: Reference;
    d: Reference;
    e: Reference;
    f: Reference;
    g: Reference;
    h: Reference;
    i: Reference;
    j: Reference;
    k: Reference;
    l: Reference;
    m: Reference;
    n: Reference;
    o: Reference;
    p: Reference;
    q: Reference;
    r: Reference;
    s: Reference;
    t: Reference;
    u: Reference;
    v: Reference;
    w: Reference;
    x: Reference;
    y: Reference;
    z: Reference;
}

interface Arrow {
    left: Reference;
    up: Reference;
    right: Reference;
    down: Reference;
}

interface Punctuation {
    colon: Reference;
    equal: Reference;
    comma: Reference;
    hyphen: Reference;
    period: Reference;
    tilde: Reference;
    apostrophe: Reference;

    slash: {
        forward: Reference,
        backward: Reference
    }

    brace: {
        square: {
            open: Reference,
            close: Reference
        }
    }

}

interface Special {
    backspace: Reference;
    tab: Reference;
    enter: Reference;
    shift: Reference;
    ctrl: Reference;
    alt: Reference;
    caps: Reference;
    esc: Reference;
    space: Reference;
    num: Reference;

}
