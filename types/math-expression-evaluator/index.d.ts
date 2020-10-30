// Type definitions for math-expression-evaluator 1.2
// Project: https://github.com/bugwheels94/math-expression-evaluator
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Token {
    token: string;
    type: number;
    value?: string|((a: number, b?: number) => number);
    show: string;
    preced?: number;
}

declare class Mexp {
    static lex(inp: string, tokens?: Token[]): Mexp;
    formulaEval(): Mexp;
    toPostfix(): Mexp;
    postfixEval(pair?: object): number|string;
    static eval(exp: string, tokens?: Token[], pair?: object): string;
    static eval(exp: string, mexp?: object): string;
    static addToken(tokens: Token[]): void;
}

export = Mexp;
