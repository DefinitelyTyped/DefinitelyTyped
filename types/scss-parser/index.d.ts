// Type definitions for scss-parser 1.0
// Project: https://github.com/salesforce-ux/scss-parser
// Definitions by: Wessel van der Linden <https://github.com/wesselvanderlinden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface InputStreamPosition {
  cursor: number;
  line: number;
  column: number;
}

export interface Node {
  type: string;
  value: string | Node[];
  start?: InputStreamPosition;
  end?: InputStreamPosition;
}

export function parse(css: string): Node;

export function stringify(node: Node): string;
