// Type definitions for console-log-tree 1.2
// Project: https://github.com/QiShaoXuan/log-tree#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace library;

export interface Tree {
  name: string;
  children?: readonly Tree[];
}

export function parse(tree: Tree | readonly Tree[], parentPre?: string, treeStr?: string): string;
export function log(tree: Tree | readonly Tree[]): void;
