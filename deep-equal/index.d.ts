// Type definitions for deep-equal
// Project: https://github.com/substack/node-deep-equal
// Definitions by: remojansen <https://github.com/remojansen>, Jay Anslow <http://github.com/janslow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface DeepEqualOptions {
    strict: boolean;
}

declare let deepEqual: (
    actual: any,
    expected: any,
    opts?: DeepEqualOptions) => boolean;

export = deepEqual;
