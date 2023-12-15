export interface Options {
    indentation?: string | undefined;
}

export abstract class Generator {
    addRaw(input: string): void;

    addRule(selectors: string | string[], declarationList: Record<string, string>): void;

    openBlock(type: string, props?: string): void;

    closeBlock(): void;
    closeBlocks(): void;

    getOutput(): string;
}

export function create(options?: Options): Generator;
