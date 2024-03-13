// TypeScript Version: 2.2

type Generator = (min?: number | null, max?: number | null, integer?: boolean | null) => number;

interface UnparsedOptions {
    min?: number | undefined;
    max?: number | undefined;
    integer?: boolean | undefined;
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
