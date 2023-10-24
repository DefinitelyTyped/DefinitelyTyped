import { Token, TOKEN_TYPE } from "./Token";

export function createToken(type: TOKEN_TYPE, value: string, line?: number, row?: number): Token;

export class Lexer {
    tokenize(): ReadonlyArray<Token>;
    isTokenNested(token: Token): boolean;
}

export function createLexer(buffer: string, options?: {
    onToken?(token: Token): void;
    openTag?: string;
    closeTag?: string;
    enableEscapeTags?: boolean;
    contextFreeTags?: ReadonlyArray<string>;
}): Lexer;
