// Type definitions for math-expression-evaluator 1.3
// Project: https://github.com/bugwheels94/math-expression-evaluator
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Adam Zerella <https://github.com/azerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Token {
    token: string;
    type: number;
    value?: string|((a: number, b?: number) => number) | undefined;
    show: string;
    preced?: number | undefined;
    numberOfArguments?: number;
}

type TokenName =
    | 'FUNCTION_WITH_ONE_ARG'
    | 'NUMBER'
    | 'BINARY_OPERATOR_HIGH_PRECENDENCE'
    | 'CONSTANT'
    | 'OPENING_PARENTHESIS'
    | 'CLOSING_PARENTHESIS'
    | 'DECIMAL'
    | 'POSTFIX_FUNCTION_WITH_ONE_ARG'
    | 'FUNCTION_WITH_N_ARGS'
    | 'BINARY_OPERATOR_LOW_PRECENDENCE'
    | 'BINARY_OPERATOR_PERMUTATION'
    | 'COMMA'
    | 'EVALUATED_FUNCTION'
    | 'EVALUATED_FUNCTION_PARAMETER'
    | 'SPACE';

type TokenTypes = {
    [K in TokenName]: number;
};

declare class Mexp {
    static lex(inp: string, tokens?: Token[]): Mexp;
    formulaEval(): Mexp;
    toPostfix(): Mexp;
    postfixEval(pair?: object): number|string;
    static tokenTypes: TokenTypes;
    static eval(exp: string, tokens?: Token[], pair?: object): string;
    static eval(exp: string, mexp?: object): string;
    static addToken(tokens: Token[]): void;
}

export = Mexp;
