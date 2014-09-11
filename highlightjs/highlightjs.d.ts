// Type definitions for highlight.js v8.2.0
// Project: https://github.com/isagalaev/highlight.js
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee/>, Jeremy Hull <https://github.com/sourrust>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "highlight.js"
{
	module hljs
	{
		export function highlight(
			name: string,
			value: string,
			ignore_illegals?: boolean,
			continuation?: boolean) : IHighlightResult;
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
			language: IModeBase): void;
		export function listLanguages(): string[];
		export function getLanguage(name: string): IMode;

		export function inherit(parent: Object, obj: Object): Object;

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

		export interface IHighlightResult
		{
			relevance: number;
			language: string;
			top: ICompiledMode;
			value: string;
		}

		export interface IAutoHighlightResult extends IHighlightResult
		{
			second_best?: IAutoHighlightResult;
		}

		// Reference:
		// https://github.com/isagalaev/highlight.js/blob/master/docs/reference.rst
		export interface IModeBase
		{
			className?: string;
			aliases?: string[];
			begin: string;
			end?: string;
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
}
