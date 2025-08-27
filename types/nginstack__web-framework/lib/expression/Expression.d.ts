export = Expression;
declare function Expression(expression: string): Expression;
declare class Expression {
    constructor(expression: string);
    private expression_;
    private variables_;
    private variablesLength_;
    evaluate(parameters: Record<string, number>): number;
    private extractVariables_;
    variables(): string[];
}
