export interface InputStreamPosition {
    cursor: number;
    line: number;
    column: number;
}

export interface Node {
    type: string;
    value: string | Node[];
    start?: InputStreamPosition | undefined;
    end?: InputStreamPosition | undefined;
}

export function parse(css: string): Node;

export function stringify(node: Node): string;
