import { Lexer, LexerState, Token } from "moo";

export interface IndentLexer {
    lexer: Lexer;
    indentationType?: string;
    newlineType?: string;
    commentType?: string;
    indentName?: string;
    dedentName?: string;
    enclosingPunctuations?: object;
    separators?: string[];
    state?: string;
    enclosures?: Array<{ opening: string; indentationLevel: string }>;
    indentations?: string[];
    queuedTokens?: Token[];
    queuedLines?: Token[][];
    lastToken?: Token;
}

export class IndentationLexer implements Lexer {
    constructor(lexer: IndentLexer);

    reset(chunk?: string, state?: LexerState): this;

    save(): LexerState;

    setState(state: string): void;

    popState(): void;

    pushState(state: string): void;

    next(): Token | undefined;

    [Symbol.iterator](): Iterator<Token>;

    formatError(token: Token, message?: string): string;

    clone(): IndentationLexer;

    has(tokenType: string): boolean;
}
