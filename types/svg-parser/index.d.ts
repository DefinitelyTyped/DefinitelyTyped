// Type definitions for svg-parser 1.0
// Project: https://gitlab.com/Rich-Harris/svg-parser#README
// Definitions by: mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface Node {
    name: string;
    attributes: Record<string, string | number>;
    children: Node[];
    metadata?: string;
}

export function parse(content: string): Node;
