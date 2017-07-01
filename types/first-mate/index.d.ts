// Type definitions for first-mate v4.1.7
// Project: https://github.com/atom/first-mate/
// Definitions by: Vadim Macagon <https://github.com/enlight/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="event-kit" />

import * as AtomEventKit from "event-kit";
export = AtomFirstMate;

declare namespace AtomFirstMate {
	type Disposable = AtomEventKit.Disposable;

	interface IToken {
		value: string;
		scopes: string[];
	}

	/** Result returned by `Grammar.tokenizeLine`. */
	interface TokenizeLineResult {
		/** Text that was tokenized. */
		line: string;
		tags: any[];
		/**
		 * This is a dynamic property that will only be available if `Grammar.tokenizeLine` was called
		 * with `compatibilityMode` set to `true` (the default).
		 */
		tokens?: IToken[];
		/**
		 * The tokenized state at the end of the line. This should be passed back into `tokenizeLine`
		 * when tokenizing the next line in the file/buffer.
		 */
		ruleStack: Rule[]
	}

	/** Instance side of Rule class. */
	interface Rule {
	}

	/** Static side of Grammar class. */
	interface GrammarStatic {
		prototype: Grammar;
		new (registry: GrammarRegistry, options?: any): Grammar;
	}

	/** Instance side of Grammar class. */
	interface Grammar {
		constructor: GrammarStatic;
		onDidUpdate(callback: Function): Disposable;
		/**
		 * Tokenizes all lines in a string.
		 *
		 * @param text A string containing one or more lines.
		 * @return An array of token arrays, one token array per line.
		 */
		tokenizeLines(text: string): Array<Array<IToken>>;
		/**
		 * Tokenizes a line of text.
		 *
		 * @param line Text to be tokenized.
		 * @param firstLine Indicates whether `line` is the first line in the file/buffer,
		 *                  defaults to `false`.
		 * @param compatibilityMode `true` by default.
		 * @return An object containing tokens for the given line.
		 */
		tokenizeLine(
			line: string, ruleStack?: Rule[], firstLine?: boolean, compatibilityMode?: boolean
		): TokenizeLineResult;
	}

	/** Grammar that tokenizes lines of text. */
	var Grammar: GrammarStatic;

	/** Static side of GrammarRegistry class. */
	interface GrammarRegistryStatic {
		prototype: GrammarRegistry;
		new (options?: { maxTokensPerLine: number }): GrammarRegistry;
	}

	/** Instance side of GrammarRegistry class. */
	interface GrammarRegistry {
		constructor: GrammarRegistryStatic;

		// Event Subscription

		onDidAddGrammar(callback: (grammar: Grammar) => void): Disposable;
		onDidUpdateGrammar(callback: (grammar: Grammar) => void): Disposable;

		// Managing Grammars

		getGrammars(): Grammar[];
		grammarForScopeName(scopeName: string): Grammar;
		addGrammar(grammar: Grammar): Disposable;
		removeGrammarForScopeName(scopeName: string): Grammar;
		readGrammarSync(grammarPath: string): Grammar;
		readGrammar(grammarPath: string, callback: (error: Error, grammar: Grammar) => void): void;
		loadGrammarSync(grammarPath: string): Grammar;
		loadGrammar(grammarPath: string, callback: (error: Error, grammar: Grammar) => void): void;
		grammarOverrideForPath(filePath: string): Grammar;
		setGrammarOverrideForPath(filePath: string, scopeName: string): Grammar;
		clearGrammarOverrides(): void;
		selectGrammar(filePath: string, fileContents: string): Grammar;
	}

	/** Registry containing one or more grammars. */
	var GrammarRegistry: GrammarRegistryStatic;
}