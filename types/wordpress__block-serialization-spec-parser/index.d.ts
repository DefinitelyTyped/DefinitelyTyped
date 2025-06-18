export interface Block {
    blockName: string | null;
    attrs: Record<string, any>;
    innerBlocks: readonly Block[];
    innerHTML: string;
    innerContent: readonly string[];
}

export function parse(rawHtml: string): readonly Block[];
