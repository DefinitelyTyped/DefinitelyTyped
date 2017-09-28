import { Token } from './ast';
import { Source } from './source';
import { syntaxError } from '../error';

/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
export function createLexer<TOptions>(
    source: Source,
    options: TOptions
): Lexer<TOptions>;

/**
 * The return type of createLexer.
 */
export interface Lexer<TOptions> {
    source: Source;
    options: TOptions;

    /**
     * The previously focused non-ignored token.
     */
    lastToken: Token;

    /**
     * The currently focused non-ignored token.
     */
    token: Token;

    /**
     * The (1-indexed) line containing the current token.
     */
    line: number;

    /**
     * The character offset at which the current line begins.
     */
    lineStart: number;

    /**
     * Advances the token stream to the next non-ignored token.
     */
    advance(): Token;
}

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
export const TokenKind: {
    SOF: '<SOF>'
    EOF: '<EOF>'
    BANG: '!'
    DOLLAR: '$'
    PAREN_L: '('
    PAREN_R: ')'
    SPREAD: '...'
    COLON: ':'
    EQUALS: '='
    AT: '@'
    BRACKET_L: '['
    BRACKET_R: ']'
    BRACE_L: '{'
    PIPE: '|'
    BRACE_R: '}'
    NAME: 'Name'
    INT: 'Int'
    FLOAT: 'Float'
    STRING: 'String'
    COMMENT: 'Comment'
};

/**
 * A helper function to describe a token as a string for debugging
 */
export function getTokenDesc(token: Token): string;
