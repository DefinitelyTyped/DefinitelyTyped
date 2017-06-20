// Type definitions for nearley 2.9
// Project: https://github.com/Hardmath123/nearley#readme
// Definitions by: Nikita Litvin <https://github.com/deltaidea>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace nearley;

export class Parser {
    constructor(rules: Rule[], start: string, options?: ParserOptions);
    constructor(grammar: Grammar, options?: ParserOptions);
    /**
     * The Parser object can be fed data in parts with .feed(data).
     * You can then find an array of parsings with the .results property.
     * If results is empty, then there are no parsings.
     * If results contains multiple values, then that combination is ambiguous.
     *
     * @throws If there are no possible parsings, nearley will throw an error
     * whose offset property is the index of the offending token.
     */
    feed(chunk: string): void;
    finish(): any[];
    restore(column: {[x: string]: any, lexerState: LexerState}): void;
    save(): LexerState;

    grammar: Grammar;
    options: ParserOptions;
    lexer: Lexer;
    lexerState?: LexerState;
    current: number;
    /**
     * An array of possible parsings. Each element is the thing returned by your grammar.
     *
     * Note that this is undefined before the first feed() call.
     * It isn't typed as `any[] | undefined` to spare you the null checks when it's definitely an array.
     */
    results: any[];

    /**
     * Reserved token for indicating a parse fail.
     */
    static fail: {};
}

export interface ParserOptions {
    keepHistory?: boolean;
    lexer?: Lexer;
}

export class Rule {
    constructor(name: any, symbols: any, postprocess: any);
    toString(withCursorAt: any): any;
    static highestId: number;
}

export class Grammar {
    constructor(rules: Rule[], start: string);
    rules: Rule[];
    byName: {[x: string]: Rule};
}

export namespace Grammar {
    function fromCompiled(rules: Rule[], start: string): Grammar;
}

export interface Lexer {
    /**
     * Sets the internal buffer to chunk, and restore line/col/state info taken from save().
     */
    reset(chunk: string, state?: LexerState): void;
    /**
     * Returns e.g. {type, value, line, col, …}. Only the value attribute is required.
     */
    next(): Token | undefined;
    /**
     * Returns an object describing the current line/col etc. This allows us
     * to preserve this information between feed() calls, and also to support Parser#rewind().
     * The exact structure is lexer-specific; nearley doesn't care what's in it.
     */
    save(): LexerState;
    /**
     * Returns a string with an error message describing the line/col of the offending token.
     * You might like to include a preview of the line in question.
     */
    formatError(token: Token): string;
    /**
     * Returns true if the lexer can emit tokens with that name.
     * Used to resolve %-specifiers in compiled nearley grammars.
     */
    has(tokenType: string): boolean;
}

export interface Token {
    [x: string]: any;
    value: string;
}

export interface LexerState {
    [x: string]: any;
}
