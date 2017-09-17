// Type definitions for first-mate 7.x
// Project: https://github.com/atom/first-mate/
// Definitions by: GlenCFL <https://github.com/GlenCFL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="event-kit" />

/** TextMate helpers. */
declare namespace FirstMate {
	/** Objects that appear as parameters to functions. */
	namespace Options {
		interface Grammar {
			name?: string;
			fileTypes?: ReadonlyArray<string>;
			scopeName?: string;
			foldingStopMarker?: string;
			maxTokensPerLine?: number;
			maxLineLength?: number;

			injections?: any;
			injectionSelector?: any;
			patterns?: ReadonlyArray<object>;
			repository?: object;
			firstLineMatch?: any;
		}
	}

	/** Data structures that are used within classes. */
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
			 *  to scope names, call {GrammarRegistry::scopeForId} with the absolute
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

		interface GrammarRule {}
	}

	/** The static side to the Grammar class. */
	interface GrammarStatic {
		new (registry: GrammarRegistry, options?: Options.Grammar): Grammar;
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
		tokenizeLines(text: string, compatibilityMode?: boolean): Structures.GrammarToken[][];

		/** Tokenizes the line of text.
		 *  @param line A string of text to tokenize.
		 *  @return An object representing the result of the tokenize.
		 */
		tokenizeLine(line: string): Structures.TokenizeLineResult;
		/** Tokenizes the line of text.
		 *  @param line A string of text to tokenize.
		 *  @param ruleStack An optional array of rules previously returned from this
		 *  method. This should be null when tokenizing the first line in the file.
		 *  @param firstLine A optional boolean denoting whether this is the first line
		 *  in the file which defaults to `false`. This should be `true`
		 *  @param compatibilityMode `true` by default.
		 *  @return An object representing the result of the tokenize.
		 */
		tokenizeLine(line: string, ruleStack: Structures.GrammarRule[], firstLine?:
			boolean, compatibilityMode?: boolean): Structures.TokenizeLineResult;
	}

	/** The static side to the GrammarRegistry class. */
	interface GrammarRegistryStatic {
		new (options?: { maxTokensPerLine?: number, maxLineLength?: number }): GrammarRegistry;
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
		readGrammar(grammarPath: string, callback: (error: Error, grammar: Grammar) => void): void;

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
		loadGrammar(grammarPath: string, callback: (error: Error, grammar: Grammar) => void): void;

		/** Convert compact tags representation into convenient, space-inefficient tokens.
		 *  @param lineText The text of the tokenized line.
		 *  @param tags The tags returned from a call to Grammar::tokenizeLine().
		 *  @return An array of Token instances decoded from the given tags.
		 */
		decodeTokens(lineText: string, tags: Array<number|string>): Structures.GrammarToken[];
	}

	/** The static side to the ScopeSelector class. */
	interface ScopeSelctorStatic {
		/** Create a new scope selector.
		 *  @param source The string to parse as a scope selector.
		 *  @return A newly constructed ScopeSelector.
		 */
		new (source: string): ScopeSelector;
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
}

declare module "first-mate" {
	/** Registry containing one or more grammars. */
	const GrammarRegistry: FirstMate.GrammarRegistryStatic;

	const ScopeSelector: FirstMate.ScopeSelctorStatic;

	/** Grammar that tokenizes lines of text. */
	const Grammar: FirstMate.GrammarStatic;
}
