// Type definitions for expr-eval 1.0
// Project: https://github.com/silentmatt/expr-eval#readme
// Definitions by: Connor Peet <https://github.com/connor4312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace exprEval {
    export class Parser {
        constructor(options?: { allowMemberAccess?: boolean });
        parse(expression: string): Expression;
        evaluate(expression: string, values?: any): number;
        static parse(expression: string): Expression;
        static evaluate(expression: string, values?: any): number;
    }

    export interface Expression {
        simplify(values?: any): Expression;
        evaluate(values?: any): number;
        substitute(values: any): Expression;
        symbols(): string[];
        variables(): string[];
        toJSFunction(params: string, values?: any): (...args: any[]) => number;
    }
}

export = exprEval;
