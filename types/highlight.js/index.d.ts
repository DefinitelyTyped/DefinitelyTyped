// Type definitions for highlight.js v9.12
// Project: https://github.com/isagalaev/highlight.js
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee>
//                 Jeremy Hull <https://github.com/sourrust>
//                 Josh Goldberg <https://github.com/joshuakgoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace hljs
{
	interface Node { }

	export function highlight(
		name: string,
		value: string,
		ignore_illegals?: boolean,
		continuation?: ICompiledMode) : IHighlightResult;
	export function highlightAuto(
		value: string,
		languageSubset?: string[]) : IAutoHighlightResult;

	export function fixMarkup(value: string) : string;

	export function highlightBlock(block: Node) : void;

	export function configure(options: IOptions): void;

	export function initHighlighting(): void;
	export function initHighlightingOnLoad(): void;

	export function registerLanguage(
		name: string,
		language: (hljs?: HLJSStatic) => IModeBase): void;
	export function listLanguages(): string[];
	export function getLanguage(name: string): IMode;

	export function inherit(parent: Object, obj: Object): Object;

	export function COMMENT(
		begin: (string|RegExp),
		end: (string|RegExp),
		inherits: IModeBase): IMode;

	// Common regexps
	export var IDENT_RE: string;
	export var UNDERSCORE_IDENT_RE: string;
	export var NUMBER_RE: string;
	export var C_NUMBER_RE: string;
	export var BINARY_NUMBER_RE: string;
	export var RE_STARTERS_RE: string;

	// Common modes
	export var BACKSLASH_ESCAPE : IMode;
	export var APOS_STRING_MODE : IMode;
	export var QUOTE_STRING_MODE : IMode;
	export var PHRASAL_WORDS_MODE : IMode;
	export var C_LINE_COMMENT_MODE : IMode;
	export var C_BLOCK_COMMENT_MODE : IMode;
	export var HASH_COMMENT_MODE : IMode;
	export var NUMBER_MODE : IMode;
	export var C_NUMBER_MODE : IMode;
	export var BINARY_NUMBER_MODE : IMode;
	export var CSS_NUMBER_MODE : IMode;
	export var REGEX_MODE : IMode;
	export var TITLE_MODE : IMode;
	export var UNDERSCORE_TITLE_MODE : IMode;

	export interface IHighlightResultBase
	{
		relevance: number;
		language: string;
		value: string;
	}

	export interface IAutoHighlightResult extends IHighlightResultBase
	{
		second_best?: IAutoHighlightResult;
	}

	export interface IHighlightResult extends IHighlightResultBase
	{
		top: ICompiledMode;
	}

	export interface HLJSStatic
	{
		inherit(parent: Object, obj: Object): Object;

		// Common regexps
		IDENT_RE: string;
		UNDERSCORE_IDENT_RE: string;
		NUMBER_RE: string;
		C_NUMBER_RE: string;
		BINARY_NUMBER_RE: string;
		RE_STARTERS_RE: string;

		// Common modes
		BACKSLASH_ESCAPE : IMode;
		APOS_STRING_MODE : IMode;
		QUOTE_STRING_MODE : IMode;
		PHRASAL_WORDS_MODE : IMode;
		C_LINE_COMMENT_MODE : IMode;
		C_BLOCK_COMMENT_MODE : IMode;
		HASH_COMMENT_MODE : IMode;
		NUMBER_MODE : IMode;
		C_NUMBER_MODE : IMode;
		BINARY_NUMBER_MODE : IMode;
		CSS_NUMBER_MODE : IMode;
		REGEX_MODE : IMode;
		TITLE_MODE : IMode;
		UNDERSCORE_TITLE_MODE : IMode;
	}

	// Reference:
	// https://github.com/isagalaev/highlight.js/blob/master/docs/reference.rst
	export interface IModeBase
	{
		className?: string;
		aliases?: string[];
		begin?: (string|RegExp);
		end?: (string|RegExp);
		case_insensitive?: boolean;
		beginKeyword?: string;
		endsWithParent?: boolean;
		lexems?: string;
		illegal?: string;
		excludeBegin?: boolean;
		excludeEnd?: boolean;
		returnBegin?: boolean;
		returnEnd?: boolean;
		starts?: string;
		subLanguage?: string;
		subLanguageMode?: string;
		relevance?: number;
		variants?: IMode[];
	}

	export interface IMode extends IModeBase
	{
		keywords?: any;
		contains?: IMode[];
	}

	export interface ICompiledMode extends IModeBase
	{
		compiled: boolean;
		contains?: ICompiledMode[];
		keywords?: Object;
		terminators: RegExp;
		terminator_end?: string;
	}

	export interface IOptions
	{
		classPrefix?: string;
		tabReplace?: string;
		useBR?: boolean;
		languages?: string[];
	}
}


export = hljs;
export as namespace hljs;
