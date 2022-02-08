export default class Formula {
    constructor(fStr: string, options?: { memoization?: boolean; });

    setFormula(formulaString: string): this;

    enableMemoization(): void;

    disableMemoization(): void;

    splitFunctionParams(toSplit: string): string[];

    cleanupInputString(s: string): string;

    parse(str: string): any;

    _do_parse(str: string): any;

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

    static calc(formula: string, valueObj: object | object[], options?: { memoization?: boolean; }): any;
}
