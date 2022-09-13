// Type definitions for @wordpress/block-serialization-spec-parser 3.1
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/block-serialization-spec-parser/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export interface Block {
    blockName: string | null;
    attrs: Record<string, any>;
    innerBlocks: readonly Block[];
    innerHTML: string;
    innerContent: readonly string[];
}

export function parse(rawHtml: string): readonly Block[];
