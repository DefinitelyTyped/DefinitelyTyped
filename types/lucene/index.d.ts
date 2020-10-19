// Type definitions for lucene 2.1
// Project: https://github.com/bripkens/lucene#readme
// Definitions by: Ben Grynhaus <https://github.com/bengry>
//                 Hugo Muller <https://github.com/HugoMuller>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface TermLocation {
    column: number;
    line: number;
    offset: number;
}

export interface NodeField {
    field: string | '<implicit>';
    fieldLocation: null | {
        end: TermLocation;
        start: TermLocation;
    };
}

export interface NodeTerm extends NodeField {
    boost: null | number;
    prefix: null | string;
    quoted: boolean;
    regex: boolean;
    similarity: null | number;
    term: string;
    termLocation: {
        start: TermLocation;
        end: TermLocation;
    };
}

export interface NodeRangedTerm extends NodeField {
    inclusive: "both" | "none" | "left" | "right";
    term_max: string;
    term_min: string;
}

export type Node =
    | NodeTerm
    | NodeRangedTerm
;

export type Operator = '<implicit>' | 'NOT' | 'OR' | 'AND' | 'AND NOT' | 'OR NOT';

export interface LeftOnlyAST {
    left: Node;
    start?: Operator;
}

export interface BinaryAST {
    left: AST | Node;
    operator: Operator;
    right: AST | Node;
}

export type AST = LeftOnlyAST | BinaryAST;

export function parse(query: string): AST;

export function toString(ast: AST): string;

export interface Parser {
    escape(str: string): string;
    unescape(str: string): string;
}

export const term: Parser;
export const phrase: Parser;
