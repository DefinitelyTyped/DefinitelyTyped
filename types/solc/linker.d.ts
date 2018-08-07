export function linkBytecode(
    bytecode: string,
    links: { [linkName: string]: string }
): string;

export interface LinkLocation {
    start: number;
    length: number;
}

export interface LinkReferences {
    [refName: string]: LinkLocation[];
}
export function findLinkReferences(bytecode: string): LinkReferences;
