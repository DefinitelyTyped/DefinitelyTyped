// Type definitions for deep-equal 1.0
// Project: https://github.com/substack/node-deep-equal
// Definitions by: remojansen <https://github.com/remojansen>, Jay Anslow <https://github.com/janslow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface DeepEqualOptions {
    strict: boolean;
}

declare function deepEqual<T, K = T>(
    actual: T,
    expected: K,
    opts?: DeepEqualOptions): boolean;

export = deepEqual;
