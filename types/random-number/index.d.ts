// Type definitions for random-number 0.0
// Project: https://github.com/ashnur/random-number
// Definitions by: OpenByteDev <https://github.com/OpenByteDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.2

type Generator = (min?: number|null, max?: number|null, integer?: boolean|null) => number;

interface UnparsedOptions {
    min?: number;
    max?: number;
    integer?: boolean;
}
interface Options {
    min: number;
    max: number;
    integer: boolean;
}

interface RandomNumber {
    (options?: UnparsedOptions): number;
    generator(options?: UnparsedOptions): Generator;
    defaults(options?: UnparsedOptions): Options;
}

declare const randomNumber: RandomNumber;

export = randomNumber;
