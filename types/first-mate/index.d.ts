// Type definitions for first-mate 7.x
// Project: https://github.com/atom/first-mate/
// Definitions by: GlenCFL <https://github.com/GlenCFL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="event-kit" />

declare global {
    /** TextMate helpers. */
    namespace FirstMate {
        /** The option objects that the user is expected to fill out and provide to
         *  specific API calls.
         */
        namespace Options {
            interface Grammar {
                name?: string;
                fileTypes?: ReadonlyArray<string>;
                scopeName?: string;
                foldingStopMarker?: string;
                maxTokensPerLine?: number;
                maxLineLength?: number;

                injections?: object;
                injectionSelector?: ScopeSelector;
                patterns?: ReadonlyArray<object>;
                repository?: object;
                firstLineMatch?: boolean;
            }
        }

        /** The structures that are passed to the user by Atom following specific API calls. */
        namespace Structures {
            interface GrammarToken {
                value: string;
                scopes: string[];
            }

            /** Result returned by `Grammar.tokenizeLine`. */
            interface TokenizeLineResult {
                /** The string of text that was tokenized. */
                line: string;

                /** An array of integer scope ids and strings. Positive ids indicate the
                 *  beginning of a scope, and negative tags indicate the end. To resolve ids
                 *  to scope names, call GrammarRegistry::scopeForId with the absolute
                 *  value of the id.
                 */
                tags: Array<number|string>;

                /** This is a dynamic property. Invoking it will incur additional overhead,
                 *  but will automatically translate the `tags` into token objects with `value`
                 *  and `scopes` properties.
                 */
                tokens: GrammarToken[];

                /** An array of rules representing the tokenized state at the end of the line.
                 *  These should be passed back into this method when tokenizing the next line
                 *  in the file.
                 */
                ruleStack: GrammarRule[];
            }

            interface GrammarRule {
                // https://github.com/atom/first-mate/blob/v7.0.7/src/rule.coffee
                // This is private. Don't go down the rabbit hole.
                rule: object;
                scopeName: string;
                contentScopeName: string;
            }
        }

        /** Grammar that tokenizes lines of text. */
        interface Grammar {
            name: string;
            fileTypes: string[];
            scopeName: string;
            maxTokensPerLine: number;
            maxLineLength: number;

            // Event Subscription
            onDidUpdate(callback: () => void): EventKit.Disposable;

            // Tokenizing
            /** Tokenize all lines in the given text.
             *  @param text A string containing one or more lines.
             *  @return An array of token arrays for each line tokenized.
             */
            tokenizeLines(text: string): Structures.GrammarToken[][];

            /** Tokenizes the line of text.
             *  @param line A string of text to tokenize.
             *  @param ruleStack An optional array of rules previously returned from this
             *  method. This should be null when tokenizing the first line in the file.
             *  @param firstLine A optional boolean denoting whether this is the first line
             *  in the file which defaults to `false`.
             *  @return An object representing the result of the tokenize.
             */
            tokenizeLine(line: string, ruleStack?: null, firstLine?: boolean):
                Structures.TokenizeLineResult;
            /** Tokenizes the line of text.
             *  @param line A string of text to tokenize.
             *  @param ruleStack An optional array of rules previously returned from this
             *  method. This should be null when tokenizing the first line in the file.
             *  @param firstLine A optional boolean denoting whether this is the first line
             *  in the file which defaults to `false`.
             *  @return An object representing the result of the tokenize.
             */
            tokenizeLine(line: string, ruleStack: Structures.GrammarRule[], firstLine?: false):
                Structures.TokenizeLineResult;
        }

        /** The static side to the Grammar class. */
        interface GrammarStatic {
            new (registry: GrammarRegistry, options?: Options.Grammar): Grammar;
        }

        /** Instance side of GrammarRegistry class. */
        interface GrammarRegistry {
            maxTokensPerLine: number;
            maxLineLength: number;

            // Event Subscription
            /** Invoke the given callback when a grammar is added to the registry.
             *  @param callback The callback to be invoked whenever a grammar is added.
             *  @return A Disposable on which `.dispose()` can be called to unsubscribe.
             */
            onDidAddGrammar(callback: (grammar: Grammar) => void): EventKit.Disposable;

            /** Invoke the given callback when a grammar is updated due to a grammar it
             *  depends on being added or removed from the registry.
             *  @param callback The callback to be invoked whenever a grammar is updated.
             *  @return A Disposable on which `.dispose()` can be called to unsubscribe.
             */
            onDidUpdateGrammar(callback: (grammar: Grammar) => void): EventKit.Disposable;

            // Managing Grammars
            /** Get all the grammars in this registry.
             *  @return A non-empty array of Grammar instances.
             */
            getGrammars(): Grammar[];

            /** Get a grammar with the given scope name.
             *  @param scopeName A string such as `source.js`.
             *  @return A Grammar or undefined.
             */
            grammarForScopeName(scopeName: string): Grammar|undefined;

            /** Add a grammar to this registry.
             *  A 'grammar-added' event is emitted after the grammar is added.
             *  @param grammar The Grammar to add. This should be a value previously returned
             *  from ::readGrammar or ::readGrammarSync.
             *  @return Returns a Disposable on which `.dispose()` can be called to remove
             *  the grammar.
             */
            addGrammar(grammar: Grammar): EventKit.Disposable;

            /** Remove the given grammar from this registry.
             *  @param grammar The grammar to remove. This should be a grammar previously
             *  added to the registry from ::addGrammar.
             */
            removeGrammar(grammar: Grammar): void;

            /** Remove the grammar with the given scope name.
             *  @param scopeName A string such as `source.js`.
             *  @return Returns the removed Grammar or undefined.
             */
            removeGrammarForScopeName(scopeName: string): Grammar|undefined;

            /** Read a grammar synchronously but don't add it to the registry.
             *  @param grammarPath The absolute file path to a grammar.
             *  @return The newly loaded Grammar.
             */
            readGrammarSync(grammarPath: string): Grammar;

            /** Read a grammar asynchronously but don't add it to the registry.
             *  @param grammarPath The absolute file path to the grammar.
             *  @param callback The function to be invoked once the Grammar has been read in.
             */
            readGrammar(grammarPath: string, callback: (error: Error|null, grammar?: Grammar) =>
                void): void;

            /** Read a grammar synchronously and add it to this registry.
             *  @param grammarPath The absolute file path to the grammar.
             *  @return The newly loaded Grammar.
             */
            loadGrammarSync(grammarPath: string): Grammar;

            /** Read a grammar asynchronously and add it to the registry.
             *  @param grammarPath The absolute file path to the grammar.
             *  @param callback The function to be invoked once the Grammar has been read in
             *  and added to the registry.
             */
            loadGrammar(grammarPath: string, callback: (error: Error|null, grammar?: Grammar) =>
                void): void;

            /** Convert compact tags representation into convenient, space-inefficient tokens.
             *  @param lineText The text of the tokenized line.
             *  @param tags The tags returned from a call to Grammar::tokenizeLine().
             *  @return An array of Token instances decoded from the given tags.
             */
            decodeTokens(lineText: string, tags: Array<number|string>): Structures.GrammarToken[];
        }

        /** The static side to the GrammarRegistry class. */
        interface GrammarRegistryStatic {
            new (options?: { maxTokensPerLine?: number, maxLineLength?: number }):
                GrammarRegistry;
        }

        interface ScopeSelector {
            /** Check if this scope selector matches the scopes.
             *  @param scopes A single scope or an array of them to be compared against.
             *  @return A boolean indicating whether or not this ScopeSelector matched.
             */
            matches(scopes: string|ReadonlyArray<string>): boolean;

            /** Gets the prefix of this scope selector.
             *  @param scopes The scopes to match a prefix against.
             *  @return The matching prefix, if there is one.
             */
            getPrefix(scopes: string|ReadonlyArray<string>): string|undefined;

            /** Convert this TextMate scope selector to a CSS selector.
             *  @return A string with the CSSSelector representation of this ScopeSelector.
             */
            toCssSelector(): string;

            /** Convert this TextMate scope selector to a CSS selector, prefixing scopes
             *  with `syntax--`.
             *  @return A string with the syntax-specific CSSSelector representation of this
             *  ScopeSelector.
             */
            toCssSyntaxSelector(): string;
        }

        /** The static side to the ScopeSelector class. */
        interface ScopeSelectorStatic {
            /** Create a new scope selector.
             *  @param source The string to parse as a scope selector.
             *  @return A newly constructed ScopeSelector.
             */
            new (source: string): ScopeSelector;
        }
    }
}

/** Registry containing one or more grammars. */
export const GrammarRegistry: FirstMate.GrammarRegistryStatic;

export const ScopeSelector: FirstMate.ScopeSelectorStatic;

/** Grammar that tokenizes lines of text. */
export const Grammar: FirstMate.GrammarStatic;
