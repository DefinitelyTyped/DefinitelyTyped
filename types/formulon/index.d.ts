export interface TypeInfoNumber {
    dataType: "number";
    options: {
        length: number;
        scale: number;
    };
}

export interface TypeInfoText {
    dataType: "text";
    options: {
        length: number;
    };
}

export interface TypeInfoOther {
    dataType: "checkbox" | "date" | "time" | "datetime" | "geolocation" | "null";
    options?: {};
}

export interface ParseError {
    type: "error";
    errorType: string;
    message: string;
}

export type Literal = {
    type: "literal";
    value: string | number | boolean;
} & (TypeInfoNumber | TypeInfoText | TypeInfoOther);

export interface Identifier {
    type: "identifier";
    name: string;
}

export interface CallExpression {
    type: "callExpression";
    id: string;
    arguments: Array<CallExpression | Identifier | Literal>;
}

export function parse(formulaText: string, substitutions?: Record<string, Literal>): Literal | ParseError;

export function extract(formulaText: string): string[];

export function ast(formulaText: string): CallExpression | Identifier | Literal;
