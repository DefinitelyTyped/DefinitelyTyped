import { Disposable } from "event-kit";

/** Grammar that tokenizes lines of text. */
export class Grammar {
    name: string;
    fileTypes: string[];
    scopeName: string;
    maxTokensPerLine: number;
    maxLineLength: number;

    constructor(registry: GrammarRegistry, options?: GrammarOptions);

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

/** Instance side of GrammarRegistry class. */
export class GrammarRegistry {
    maxTokensPerLine: number;
    maxLineLength: number;

    constructor(options?: {
        maxTokensPerLine?: number | undefined;
        maxLineLength?: number | undefined;
    });

    // Event Subscription
    /**
     *  Invoke the given callback when a grammar is added to the registry.
     *  @param callback The callback to be invoked whenever a grammar is added.
     *  @return A Disposable on which `.dispose()` can be called to unsubscribe.
     */
    onDidAddGrammar(callback: (grammar: Grammar) => void): Disposable;

    /**
     *  Invoke the given callback when a grammar is updated due to a grammar it
     *  depends on being added or removed from the registry.
     *  @param callback The callback to be invoked whenever a grammar is updated.
     *  @return A Disposable on which `.dispose()` can be called to unsubscribe.
     */
    onDidUpdateGrammar(callback: (grammar: Grammar) => void): Disposable;

    // Managing Grammars
    /**
     *  Get all the grammars in this registry.
     *  @return A non-empty array of Grammar instances.
     */
    getGrammars(): Grammar[];

    /**
     *  Get a grammar with the given scope name.
     *  @param scopeName A string such as `source.js`.
     *  @return A Grammar or undefined.
     */
    grammarForScopeName(scopeName: string): Grammar | undefined;

    /**
     *  Add a grammar to this registry.
     *  A 'grammar-added' event is emitted after the grammar is added.
     *  @param grammar The Grammar to add. This should be a value previously returned
     *  from ::readGrammar or ::readGrammarSync.
     *  @return Returns a Disposable on which `.dispose()` can be called to remove
     *  the grammar.
     */
    addGrammar(grammar: Grammar): Disposable;

    /**
     *  Remove the given grammar from this registry.
     *  @param grammar The grammar to remove. This should be a grammar previously
     *  added to the registry from ::addGrammar.
     */
    removeGrammar(grammar: Grammar): void;

    /**
     *  Remove the grammar with the given scope name.
     *  @param scopeName A string such as `source.js`.
     *  @return Returns the removed Grammar or undefined.
     */
    removeGrammarForScopeName(scopeName: string): Grammar | undefined;

    /**
     *  Read a grammar synchronously but don't add it to the registry.
     *  @param grammarPath The absolute file path to a grammar.
     *  @return The newly loaded Grammar.
     */
    readGrammarSync(grammarPath: string): Grammar;

    /**
     *  Read a grammar asynchronously but don't add it to the registry.
     *  @param grammarPath The absolute file path to the grammar.
     *  @param callback The function to be invoked once the Grammar has been read in.
     */
    readGrammar(grammarPath: string, callback: (error: Error | null, grammar?: Grammar) => void): void;

    /**
     *  Read a grammar synchronously and add it to this registry.
     *  @param grammarPath The absolute file path to the grammar.
     *  @return The newly loaded Grammar.
     */
    loadGrammarSync(grammarPath: string): Grammar;

    /**
     *  Read a grammar asynchronously and add it to the registry.
     *  @param grammarPath The absolute file path to the grammar.
     *  @param callback The function to be invoked once the Grammar has been read in
     *  and added to the registry.
     */
    loadGrammar(grammarPath: string, callback: (error: Error | null, grammar?: Grammar) => void): void;

    /**
     *  Convert compact tags representation into convenient, space-inefficient tokens.
     *  @param lineText The text of the tokenized line.
     *  @param tags The tags returned from a call to Grammar::tokenizeLine().
     *  @return An array of Token instances decoded from the given tags.
     */
    decodeTokens(lineText: string, tags: Array<number | string>): GrammarToken[];
}

export class ScopeSelector {
    /**
     *  Create a new scope selector.
     *  @param source The string to parse as a scope selector.
     *  @return A newly constructed ScopeSelector.
     */
    constructor(source: string);

    /**
     *  Check if this scope selector matches the scopes.
     *  @param scopes A single scope or an array of them to be compared against.
     *  @return A boolean indicating whether or not this ScopeSelector matched.
     */
    matches(scopes: string | ReadonlyArray<string>): boolean;

    /**
     *  Gets the prefix of this scope selector.
     *  @param scopes The scopes to match a prefix against.
     *  @return The matching prefix, if there is one.
     */
    getPrefix(scopes: string | ReadonlyArray<string>): string | undefined;

    /**
     *  Convert this TextMate scope selector to a CSS selector.
     *  @return A string with the CSSSelector representation of this ScopeSelector.
     */
    toCssSelector(): string;

    /**
     *  Convert this TextMate scope selector to a CSS selector, prefixing scopes
     *  with `syntax--`.
     *  @return A string with the syntax-specific CSSSelector representation of this
     *  ScopeSelector.
     */
    toCssSyntaxSelector(): string;
}

// Options ====================================================================
// The option objects that the user is expected to fill out and provide to
// specific API calls.

export interface GrammarOptions {
    name?: string | undefined;
    fileTypes?: ReadonlyArray<string> | undefined;
    scopeName?: string | undefined;
    foldingStopMarker?: string | undefined;
    maxTokensPerLine?: number | undefined;
    maxLineLength?: number | undefined;

    injections?: object | undefined;
    injectionSelector?: ScopeSelector | undefined;
    patterns?: ReadonlyArray<object> | undefined;
    repository?: object | undefined;
    firstLineMatch?: boolean | undefined;
}

// Structures =================================================================
// The structures that are passed to the user by Atom following specific API calls.

export interface GrammarToken {
    value: string;
    scopes: string[];
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

export interface GrammarRule {
    // https://github.com/atom/first-mate/blob/v7.0.7/src/rule.coffee
    // This is private. Don't go down the rabbit hole.
    rule: object;
    scopeName: string;
    contentScopeName: string;
}
