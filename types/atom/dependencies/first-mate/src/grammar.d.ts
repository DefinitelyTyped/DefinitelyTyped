import { Disposable } from '../../../index';

/** Grammar that tokenizes lines of text. */
export interface Grammar {
    /** The name of the Grammar. */
    readonly name: string;

    /** Undocumented: scope name of the Grammar. */
    readonly scopeName: string;

    // Event Subscription
    onDidUpdate(callback: () => void): Disposable;

    // Tokenizing
    /**
     *  Tokenize all lines in the given text.
     *  @param text A string containing one or more lines.
     *  @return An array of token arrays for each line tokenized.
     */
    tokenizeLines(text: string): GrammarToken[][];

    /**
     *  Tokenizes the line of text.
     *  @param line A string of text to tokenize.
     *  @param ruleStack An optional array of rules previously returned from this
     *  method. This should be null when tokenizing the first line in the file.
     *  @param firstLine A optional boolean denoting whether this is the first line
     *  in the file which defaults to `false`.
     *  @return An object representing the result of the tokenize.
     */
    tokenizeLine(line: string, ruleStack?: null, firstLine?: boolean): TokenizeLineResult;
    /**
     *  Tokenizes the line of text.
     *  @param line A string of text to tokenize.
     *  @param ruleStack An optional array of rules previously returned from this
     *  method. This should be null when tokenizing the first line in the file.
     *  @param firstLine A optional boolean denoting whether this is the first line
     *  in the file which defaults to `false`.
     *  @return An object representing the result of the tokenize.
     */
    tokenizeLine(line: string, ruleStack: GrammarRule[], firstLine?: false): TokenizeLineResult;
}

export interface GrammarToken {
    value: string;
    scopes: string[];
}

export interface GrammarRule {
    // https://github.com/atom/first-mate/blob/v7.0.7/src/rule.coffee
    // This is private. Don't go down the rabbit hole.
    rule: object;
    scopeName: string;
    contentScopeName: string;
}

/** Result returned by `Grammar.tokenizeLine`. */
export interface TokenizeLineResult {
    /** The string of text that was tokenized. */
    line: string;

    /**
     *  An array of integer scope ids and strings. Positive ids indicate the
     *  beginning of a scope, and negative tags indicate the end. To resolve ids
     *  to scope names, call GrammarRegistry::scopeForId with the absolute
     *  value of the id.
     */
    tags: Array<number | string>;

    /**
     *  This is a dynamic property. Invoking it will incur additional overhead,
     *  but will automatically translate the `tags` into token objects with `value`
     *  and `scopes` properties.
     */
    tokens: GrammarToken[];

    /**
     *  An array of rules representing the tokenized state at the end of the line.
     *  These should be passed back into this method when tokenizing the next line
     *  in the file.
     */
    ruleStack: GrammarRule[];
}
