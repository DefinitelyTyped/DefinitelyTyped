// Type definitions for regexgen 1.3
// Project: https://github.com/devongovett/regexgen
// Definitions by: Septs <https://github.com/septs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

declare function regexgen(inputs: string[], flags?: RegExp['flags']): RegExp;

declare namespace regexgen {
    class Trie {
        add(input: string): void;
        addAll(inputs: string[]): void;
        minimize(): void;

        toString(flags?: RegExp['flags']): string;
        toRegExp(flags?: RegExp['flags']): RegExp;
    }
}

export = regexgen;
