declare function regexgen(inputs: string[], flags?: RegExp["flags"]): RegExp;

declare namespace regexgen {
    class Trie {
        add(input: string): void;
        addAll(inputs: string[]): void;
        minimize(): void;

        toString(flags?: RegExp["flags"]): string;
        toRegExp(flags?: RegExp["flags"]): RegExp;
    }
}

export = regexgen;
