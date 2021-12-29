// Type definitions for fparser 2.0
// Project: https://github.com/bylexus/fparse
// Definitions by: bylexus <https://github.com/bylexus>,
//                 andrew0687 <https://github.com/andrew0687>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Formula {
    constructor(fStr: string, options?: object);
    setFormula(formulaString: string): this;
    enableMemoization(): void;
    disableMemoization(): void;
    splitFunctionParams(toSplit: string): string[];
    cleanupInputString(s: string): string;
    parse(str: string): any;
    private _do_parse(str: string): any;
    buildExpressionTree(expressions: any[]): any;
    isOperator(char: any): RegExpMatchArray | null;
    isOperatorExpr(expr: any): boolean;
    registerVariable(varName: string): void;
    getVariables(): string[];
    evaluate(valueObj: object | object[]): any;
    hashValues(valueObj: object): string;
    resultFromMemory(valueObj: object): any;
    storeInMemory(valueObj: object, value: any): void;
    getExpression(): any[];
    getExpressionString(): string;
    static calc(formula: string, valueObj: object | object[], options?: object): any;
}

