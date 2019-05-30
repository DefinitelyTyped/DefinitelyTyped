// Type definitions for expression-evaluator 0.2
// Project: https://github.com/GreetzNL/expression-evaluator#readme
// Definitions by: GreetzNL <https://github.com/GreetzNL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace expressionEvaluator;

export function evaluate(q: IComparisonOperator | ILogicalOperator, props?: any): boolean;
export function and(query: ILogicalOperator, props: any): boolean;
export function or(query: ILogicalOperator, props: any): boolean;
export function eq(field: IComparisonOperator, props: any): boolean;
export function neq(field: IComparisonOperator, props: any): boolean;

export interface IComparisonOperator {
    type: string;
    key: string;
    value: string | number | boolean;
}

export interface ILogicalOperator {
    type: string;
    fields: ILogicalOperator[] | IComparisonOperator[] | any[];
}
