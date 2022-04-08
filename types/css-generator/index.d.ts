// Type definitions for css-generator 1.0
// Project: https://github.com/luizbills/css-generator.js
// Definitions by: Septs <https://github.com/septs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

export interface Options {
    indentation?: string;
}

export class Generator {
    private constructor(options?: Options);

    addRaw(input: string): void;

    addRule(selectors: string | string[], declarationList: Record<string, string>): void;

    openBlock(type: string, props?: string): void;

    closeBlock(): void;
    closeBlocks(): void;

    getOutput(): string;
}

export function create(options?: Options): Generator;
