// Type definitions for expr-eval 1.0
// Project: https://github.com/silentmatt/expr-eval#readme
// Definitions by: Connor Peet <https://github.com/connor4312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Value = number
    | string
    | ((...args: Value[]) => Value)
    | { [propertyName: string]: Value };

export interface Values {
    [propertyName: string]: Value;
}

export class Parser {
    constructor(options?: { allowMemberAccess?: boolean });
    parse(expression: string): Expression;
    evaluate(expression: string, values?: Values): number;

    static parse(expression: string): Expression;
    static evaluate(expression: string, values?: Values): number;
}

export interface Expression {
    simplify(values?: Values): Expression;
    evaluate(values?: Values): number;
    substitute(values: Values): Expression;
    symbols(): string[];
    variables(): string[];
    toJSFunction(params: string, values?: Values): (...args: Value[]) => number;
}
