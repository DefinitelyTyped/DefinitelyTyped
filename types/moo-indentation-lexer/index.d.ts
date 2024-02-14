import { Token, Lexer, LexerState } from 'moo';

export class IndentationLexer implements Lexer {
		constructor({lexer, indentationType, newlineType, commentType, indentName, dedentName, enclosingPunctuations, separators, state, enclosures, indentations, queuedTokens, queuedLines, lastToken}:{lexer: Lexer, indentationType?:string, newlineType?:string, commentType?:string, indentName?:string, dedentName?:string, enclosingPunctuations?:object, separators?:string[], state?:string, enclosures?:Array<{opening:string, indentationLevel:string}>, indentations?:string[], queuedTokens?:Token[], queuedLines?:Token[][], lastToken?:Token}) ;

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


