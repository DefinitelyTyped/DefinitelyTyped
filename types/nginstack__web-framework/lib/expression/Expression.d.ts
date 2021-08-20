export = Expression;
declare function Expression(expression: string): Expression;
declare class Expression {
    constructor(expression: string);
    expression_: string;
    variables_: string[];
    variablesLength_: number;
    evaluate(parameters: { [x: string]: number }): number;
    private extractVariables_;
    variables(): string[];
}
declare namespace Expression {
    const regexToExtractVariables_: string;
    const regex_: string;
}
