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

        // todo(connor4312): tslint is disabled on the following two lines, as
        // thinks that the above instance methods are overloads for the static methods.
        static parse(expression: string): Expression; // tslint:disable-line
        static evaluate(expression: string, values?: Value): number; // tslint:disable-line
    }

    export interface Expression {
        simplify(values?: Values): Expression;
        evaluate(values?: Values): number;
        substitute(values: Values): Expression;
        symbols(): string[];
        variables(): string[];
        toJSFunction(params: string, values?: Values): (...args: Value[]) => number;
    }
}

export = exprEval;
