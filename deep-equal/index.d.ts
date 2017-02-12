// Type definitions for deep-equal
// Project: https://github.com/substack/node-deep-equal
// Definitions by: remojansen <https://github.com/remojansen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface DeepEqualOptions {
    strict: boolean;
}

declare let deepEqual: (
    actual: Object,
    expected: Object,
    opts?: DeepEqualOptions) => boolean;

export = deepEqual;
