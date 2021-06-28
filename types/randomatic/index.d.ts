// Type definitions for randomatic 3.1
// Project: https://github.com/jonschlinkert/randomatic
// Definitions by: Frelia <https://github.com/execfera>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Generate randomized strings of a specified length using simple character sequences. The original generate-password.
 */
declare function randomatic(pattern: string, length?: number, options?: randomatic.Options): string;
declare function randomatic(length: number): string;

declare namespace randomatic {
    const isCrypto: boolean;

    interface Options {
        chars?: string;
        exclude?: string | string[];
    }
}

export = randomatic;
