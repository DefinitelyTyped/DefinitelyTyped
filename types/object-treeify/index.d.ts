export type RenderFunction = (node: unknown) => unknown;

export type SortFunction = (firstKey: string, secondKey: string) => number;

export interface Options {
    joined?: boolean;
    spacerNoNeighbour?: string;
    spacerNeighbour?: string;
    keyNoNeighbour?: string;
    keyNeighbour?: string;
    separator?: string;
    renderFn?: RenderFunction;
    sortFn?: SortFunction | null;
    breakCircularWith?: string | null;
}

declare function treeify(tree: object, options: Options & { joined: false }): string[];

declare function treeify(tree: object, options?: Options & { joined?: true }): string;

declare function treeify(tree: object, options: Options): string | string[];

export default treeify;
