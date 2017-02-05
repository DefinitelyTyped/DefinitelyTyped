// Type definitions for prism v1.4.4
// Project: http://prismjs.com/
// Definitions by: Erik Lieben <https://github.com/eriklieben>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PrismJS {

     /**
     * The Prism object
     */
    interface Prism {

		util: Util;
		languages: Languages;
		plugins: any;

        /**
         * This is the most high-level function in Prism’s API. It fetches all the elements that have a .language-xxxx class and then calls Prism.highlightElement() on each one of them.
         *
		 * @param  {boolean} async - Whether to use Web Workers to improve performance and avoid blocking the UI when highlighting very large chunks of code. False by default.
		 * @param  {(element:Element)=>void} callback? - An optional callback to be invoked after the highlighting is done. Mostly useful when async is true, since in that case, the highlighting is done asynchronously.
		 * @returns void
		 */
		highlightAll(async: boolean, callback?: (element: Element) => void): void;

		/**
         * Highlights the code inside a single element.
         *
		 * @param  {Element} element - The element containing the code. It must have a class of language-xxxx to be processed, where xxxx is a valid language identifier.
		 * @param  {boolean} async - Whether to use Web Workers to improve performance and avoid blocking the UI when highlighting very large chunks of code. False by default.
		 * @param  {(element:Element)=>void} callback? - An optional callback to be invoked after the highlighting is done. Mostly useful when async is true, since in that case, the highlighting is done asynchronously.
		 * @returns void
		 */
		highlightElement(element: Element, async: boolean, callback?: (element: Element) => void): void;


        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the language definitions to use, and returns a string with the HTML produced.
         *
         * @param  {string} text - A string with the code to be highlighted.
         * @param  {LanguageDefinition} grammer - An object containing the tokens to use. Usually a language definition like Prism.languages.markup
         * @param  {LanguageDefinition} language
         * @returns string - The highlighted HTML
         */
        highlight(text: string, grammer: LanguageDefinition, language?: LanguageDefinition): string;

        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input and the language definitions to use,
         * and returns an array with the tokenized code. When the language definition includes nested tokens, the function is called recursively on each of
         * these tokens. This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param  {string} text - A string with the code to be highlighted.
         * @param  {LanguageDefinition} grammar - An object containing the tokens to use. Usually a language definition like Prism.languages.markup
         * @param  {LanguageDefinition} language
         * @returns Array - An array of strings, tokens (class Prism.Token) and other arrays.
         */
        tokenize(text: string, grammar: LanguageDefinition, language?: LanguageDefinition): Array<string>;

        fileHighlight(): void;

		hooks: Hooks;
    }

	interface Environment {
		element?: Element;
		language?: LanguageDefinition;
		grammer?: any;
		code?: any;
		highlightedCode?: any;
		type?: string;
		content?:string;
		tag?: string;
		classes?: Array<string>;
		attributes?: Array<string> | Object;
		parent?: Element;
	}

	interface Identifier {
		value: number;
	}

	interface Util {
		encode(tokens:Token | Array<Token> | string): Token | Array<Token> | string;
		type(o: Object): string;
		objId(obj: Object): Identifier;
		clone(o: LanguageDefinition): LanguageDefinition;
	}

	interface LanguageDefinition {
		keyword?: RegExp | LanguageDefinition;
		number?: RegExp | LanguageDefinition;
		function?: RegExp | LanguageDefinition;
		string?: RegExp | LanguageDefinition;
		boolean?: RegExp | LanguageDefinition;
		operator?: RegExp | LanguageDefinition;
		punctuation?: RegExp | LanguageDefinition;
        atrule?: RegExp | LanguageDefinition;
        url?: RegExp | LanguageDefinition;
        selector?: RegExp | LanguageDefinition;
        property?: RegExp | LanguageDefinition;
        important?: RegExp | LanguageDefinition;
        style?: RegExp | LanguageDefinition;

        /**
         * This option can be used to define one or more aliases for the matched token. The result will be, that the styles
         * of the token and its aliases are combined. This can be useful, to combine the styling of a well known token,
         * which is already supported by most of the themes, with a semantically correct token name. The option can be
         * set to a string literal or an array of string literals. In the following example the token name latex-equation
         * is not supported by any theme, but it will be highlighted the same as a string.
         */
        alias?: string;

        pattern?: RegExp;

        /**
         * This option mitigates JavaScript’s lack of lookbehind. When set to true, the first capturing group in the regex 
         * pattern is discarded when matching this token, so it effectively behaves as if it was lookbehind
         */
        lookbehind?: boolean;
		
        /**
         * This property accepts another object literal, with tokens that are allowed to be nested in this token.
         * This makes it easier to define certain languages. However, keep in mind that they’re slower and if coded poorly, 
         * can even result in infinite recursion. For an example of nested tokens, check out the Markup language definition
         */
        inside?: LanguageDefinition;
        
        /**
         * Accepts an object literal with tokens and appends them to the end of the current object literal.
         */
        rest?: Array<Token>;
	}
	
	interface Languages extends Array<LanguageDefinition> {
        
		extend(id: string, redef: LanguageDefinition): LanguageDefinition;
		
		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */		
		insertBefore(inside: string, before: string, insert: LanguageDefinition, root: Object): any;
	}
	
	interface Hooks {
		all: Array<Array<(env: Environment) => void>>;
		add(name: string, callback: (env: Environment) => void):void;
		run(name: string, env: Environment): void;
	}
	
	interface Token {
		type: string;
		content: Token | Array<Token> | string;
		alias: string;
		stringify(o:string| Array<any>, language: LanguageDefinition, parent: HTMLPreElement): string; 
	}
}

declare var Prism : PrismJS.Prism;