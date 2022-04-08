// Type definitions for random-ipv6 1.0
// Project: https://github.com/mock-end/random-ipv6#readme
// Definitions by: ocket8888 <https://github.com/ocket8888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options extends Record<string | symbol, boolean | undefined | {max?: number | string, min?: number | string}> {
    compressed?: boolean;
    padded?: boolean;
}

declare function randomIPv6(schema?: Options): string;
declare function randomIPv6(schema: string, options?: Options): string;
export = randomIPv6;
