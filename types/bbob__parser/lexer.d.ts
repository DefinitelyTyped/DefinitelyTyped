import { TOKEN_TYPE, Token } from "./Token";

export function createToken(type: TOKEN_TYPE, value: string, line?: number, row?: number): Token

export class Lexer {
    tokenize(): Token[]
    isTokenNested(token: Token): boolean
}

export function createLexer(buffer: string, options?: {
    onToken?(token: Token): void,
    openTag?: string,
    closeTag?: string,
    enableEscapeTag?: boolean
}): Lexer