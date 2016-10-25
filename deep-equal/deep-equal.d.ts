// Type definitions for deep-equal
// Project: https://github.com/substack/node-deep-equal
// Definitions by: remojansen <https://github.com/remojansen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "deep-equal" {

    interface DeepEqualOptions {
        strict: boolean;
    }

    let deepEqual: (
		actual: Object,
		expected: Object,
		opts?: DeepEqualOptions) => boolean;

    export = deepEqual;
}