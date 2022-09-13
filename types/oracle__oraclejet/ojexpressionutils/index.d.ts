export function createGenericExpressionEvaluator(expressionText: string): (context: any) => any;
export function getExpressionInfo(expression: string): {
    expr: (null | string);
    downstreamOnly: boolean;
};
