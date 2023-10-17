/**
 * Generate randomized strings of a specified length using simple character sequences. The original generate-password.
 */
declare function randomatic(pattern: string, length?: number, options?: randomatic.Options): string;
declare function randomatic(pattern: string, options?: randomatic.Options): string;
declare function randomatic(length: number): string;

declare namespace randomatic {
    const isCrypto: boolean;

    interface Options {
        chars?: string | undefined;
        exclude?: string | string[] | undefined;
    }
}

export = randomatic;
