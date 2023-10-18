export as namespace nearley;

export class Parser {
    /**
     * Reserved token for indicating a parse fail.
     */
    static fail: {};

    grammar: Grammar;
    options: ParserOptions;
    lexer: Lexer;
    lexerState?: LexerState | undefined;
    current: number;
    /**
     * An array of possible parsings. Each element is the thing returned by your grammar.
     *
     * Note that this is undefined before the first feed() call.
     * It isn't typed as `any[] | undefined` to spare you the null checks when it's definitely an array.
     */
    results: any[];

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
    feed(chunk: string): this;
    finish(): any[];
    restore(column: { [key: string]: any; lexerState: LexerState }): void;
    save(): { [key: string]: any; lexerState: LexerState };
}

export interface ParserOptions {
    keepHistory?: boolean | undefined;
    lexer?: Lexer | undefined;
}

export class Rule {
    static highestId: number;

    id: number;
    name: string;
    symbols: any[];
    postprocess?: Postprocessor | undefined;

    constructor(name: string, symbols: any[], postprocess?: Postprocessor);

    toString(withCursorAt?: number): string;
}

export class Grammar {
    static fromCompiled(rules: CompiledRules): Grammar;

    rules: Rule[];
    start: string;
    byName: { [ruleName: string]: Rule[] };
    lexer?: Lexer | undefined;

    constructor(rules: Rule[]);
}

export interface CompiledRules {
    Lexer?: Lexer | undefined;
    ParserStart: string;
    ParserRules: ParserRule[];
}

export interface ParserRule {
    name: string;
    symbols: any[];
    postprocess?: Postprocessor | undefined;
}

export type Postprocessor = (data: any[], reference?: number, wantedBy?: {}) => void;

export interface Lexer {
    /**
     * Sets the internal buffer to data, and restores line/col/state info taken from save().
     */
    reset(data: string, state?: LexerState): void;
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
    formatError(token: Token, message: string): string;
}

export type Token = string | { value: string };

export interface LexerState {
    [x: string]: any;
}
