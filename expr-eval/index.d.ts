// Type definitions for expr-eval 1.0
// Project: https://github.com/silentmatt/expr-eval#readme
// Definitions by: Connor Peet <https://github.com/connor4312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace exprEval {
    type Value = number
        | string
        | ((...args: Value[]) => Value)
        | { [propertyName: string]: Value };

    interface Values {
        [propertyName: string]: Value;
    }

    export class Parser {
        constructor(options?: { allowMemberAccess?: boolean });
        parse(expression: string): Expression;
        evaluate(expression: string, values?: Value): number;
        static parse(expression: string): Expression;
        static evaluate(expression: string, values?: Value): number;
    }

    export interface Expression {
        simplify(values?: Value): Expression;
        evaluate(values?: Value): number;
        substitute(values: Value): Expression;
        symbols(): string[];
        variables(): string[];
        toJSFunction(params: string, values?: Value): (...args: any[]) => number;
    }
}

export = exprEval;
