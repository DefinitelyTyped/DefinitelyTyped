// Type definitions for rand-token 0.4
// Project: https://github.com/sehrope/node-rand-token
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

type SourceType = 'default' | 'math' | 'crypto' | Buffer;

interface GeneratorOptions {
    source: SourceType;
    chars: string|string[];
}

declare class RandToken {
    /**
     * Creates a custom token generator.
     */
    static generator(generator: GeneratorOptions): RandToken;

    generate(size: number, chars?: string[]): string;

    /**
     * Generate a 16 character alpha-numeric token.
     */
    static generate(size: number, chars?: string[]): string;

    /**
     * Uses the default generator to generate a token of size characters.
     */
    static uid(size: number): string;

    /**
     * Uses the default generator to generate mostly sequential ids
     * that can be compared with the usual string less-than/greater-than operators.
     */
    static suid(size: number, epoch?: number, prefixLength?: number): string;
}

export = RandToken;
