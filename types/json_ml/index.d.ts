/// <reference types="cheerio" />

export type Node = string | [string, ...any[]];
export function parse(xml: string, trim?: boolean): Node[];
export function stringify(
    object: Node[],
    replacer?: ((node: cheerio.Cheerio) => any) | null,
    indent?: number,
): string;
