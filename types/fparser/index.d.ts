// Type definitions for fparser
// Project: https://github.com/bylexus/fparse
// Definitions by: bylexus <https://github.com/bylexus>,
//                 andrew0687 <https://github.com/andrew0687>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Formula {
    constructor(fStr: string, options?: object);
    public setFormula(formulaString: string): this;
    public enableMemoization(): void;
    public disableMemoization(): void;
    public splitFunctionParams(toSplit: string): string[];
    public cleanupInputString(s: string): string;
    public parse(str: string): any;
    private _do_parse(str: string): any;
    public buildExpressionTree(expressions: any[]): any;
    public isOperator(char: any): RegExpMatchArray | null;
    public isOperatorExpr(expr: any): boolean;
    public registerVariable(varName: string): void;
    public getVariables(): string[];
    public evaluate(valueObj: object | object[]): any;
    public hashValues(valueObj: object): string;
    public resultFromMemory(valueObj: object): any | null;
    public storeInMemory(valueObj: object, value: any): void;
    public getExpression(): any[];
    public getExpressionString(): string;
    static calc(formula: string, valueObj: object | object[], options?: object): any;
}
