// Type definitions for Unist 1.0
// Project: https://github.com/syntax-tree/unist
// Definitions by: bizen241 <https://github.com/bizen241>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export interface Node {
    type: string;
    data?: Data;
    position?: Position;
}

export interface Data {
    [key: string]: string | number | object | any[] | boolean | null;
}

export interface Position {
    start: Point;
    end: Point;
    /** >= 1 */
    indent?: number[];
}

export interface Point {
    /** >= 1 */
    line: number;
    /** >= 1 */
    column: number;
    /** >= 0 */
    offset?: number;
}

export interface Parent extends Node {
    children: Node[];
}

export interface Text extends Node {
    value: string;
}
