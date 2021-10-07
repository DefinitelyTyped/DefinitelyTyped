import { Disposable, Grammar, GrammarToken, TextBuffer } from '../index';

type SyntaxNode = any;
interface InjectionPoint {
    type: string;
    language: (node: SyntaxNode) => string;
    content: (node: SyntaxNode) => SyntaxNode | SyntaxNode[];
};

/** Registry containing one or more grammars. */
export interface GrammarRegistry {
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
     *  @param [params]
     *  @param [params.includeTreeSitter] Whether to include
     *  [Tree-sitter](https://github.blog/2018-10-31-atoms-new-parsing-system/)
     *  grammars
     *  @return A non-empty array of Grammar instances.
     */
    getGrammars(params?: { includeTreeSitter?: boolean }): Grammar[];

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
     *  @return A Grammar.
     */
    readGrammarSync(grammarPath: string): Grammar;

    /**
     *  Read a grammar asynchronously but don't add it to the registry.
     *  @param grammarPath The absolute file path to the grammar.
     *  @param callback The function to call when read with the following arguments:
     *      - error: An error or null
     *      - grammar: A grammar if an error has not occurred
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

    /**
     *  Set a TextBuffer's language mode based on its path and content, and continue
     *  to update its language mode as grammars are added or updated, or the buffer's
     *  file path changes.
     *  @param buffer The buffer whose language mode will be maintained.
     *  @return A Disposable that can be used to stop updating the buffer's
     *  language mode.
     */
    maintainLanguageMode(buffer: TextBuffer): Disposable;

    /**
     *  Force a TextBuffer to use a different grammar than the one that would otherwise
     *  be selected for it.
     *  @param buffer The buffer whose grammar will be set.
     *  @param languageId The identifier of the desired language.
     *  @return Returns a boolean that indicates whether the language was successfully
     * found.
     */
    assignLanguageMode(buffer: TextBuffer, languageId: string): boolean;

    /**
     *  Force a TextBuffer to use a different grammar than the one that would otherwise
     *  be selected for it.
     *  @param buffer The buffer whose grammar will be set.
     *  @param grammar The desired Grammar
     *  @return Returns a boolean that indicates whether the assignment was successful
     */
    assignGrammar(buffer: TextBuffer, grammar: Grammar): boolean;

    /**
     *  Get the `languageId` that has been explicity assigned to the given buffer, if
     *  any.
     *  @return Returns a string id of the language
     */
    getAssignedLanguageId(buffer: TextBuffer): string;

    /**
     *  Remove any language mode override that has been set for the given TextBuffer.
     *  This will assign to the buffer the best language mode available.
     */
    autoAssignLanguageMode(buffer: TextBuffer): void;

    /**
     *  Select a grammar for the given file path and file contents.
     *
     *  This picks the best match by checking the file path and contents against
     *  each grammar.
     *  @param filePath A string file path.
     *  @param fileContents A string of text for that file path.
     */
    selectGrammar(filePath: string, fileContents: string): Grammar;

    /**
     *  Returns a number representing how well the grammar matches the
     *  `filePath` and `contents`.
     *  @param grammar The grammar to score.
     *  @param filePath A string file path.
     *  @param contents A string of text for that file path.
     */
    getGrammarScore(grammar: Grammar, filePath: string, contents: string): number;

    /**
     *  Specify a type of syntax node that may embed other languages
     *  @param grammarId The string id of the parent language
     *  @param injectionPoint An object with the following keys:
     *  @param injectionPoint.type The string type of syntax node that may embed
     *  other languages
     *  @param injectionPoint.language A function that is called with syntax nodes
     *  of the specified type and returns a string that will be tested against
     *  other grammars' injectionRegex in order to determine what language should
     *  be embedded.
     *  @param injectionPoint.content A function that is called with syntax nodes
     *  of the specified type and returns another syntax node or array of syntax
     *  nodes that contain the embedded source code.
     */
    addInjectionPoint(grammarId: string, injectionPoint: InjectionPoint): Disposable;
}
