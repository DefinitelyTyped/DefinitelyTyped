// Type definitions for deep-equal 1.0
// Project: https://github.com/substack/node-deep-equal
// Definitions by: remojansen <https://github.com/remojansen>
//                 Jay Anslow <https://github.com/janslow>
//                 bouzuya <https://github.com/bouzuya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface DeepEqualOptions {
    strict: boolean;
}

type deepEqualFn = (
    actual: any,
    expected: any,
    opts?: DeepEqualOptions) => boolean;

declare const deepEqual: deepEqualFn;

export = deepEqual;
export as namespace deepEqual;
