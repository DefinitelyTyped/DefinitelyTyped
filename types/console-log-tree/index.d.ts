export as namespace library;

export interface Tree {
    name: string;
    children?: readonly Tree[];
}

export function parse(tree: Tree | readonly Tree[], parentPre?: string, treeStr?: string): string;
export function log(tree: Tree | readonly Tree[]): void;
