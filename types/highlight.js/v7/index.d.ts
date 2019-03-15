// Type definitions for highlight.js v7.5.0
// Project: https://github.com/isagalaev/highlight.js
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "highlight.js"
{
	namespace hljs
	{
		export var LANGUAGES: { [name: string] : any; };

		export function blockText(block: Node, ignoreNewLines: boolean) : string;
		export function blockLanguage(block: Node) : string;

		export function highlight(language_name: string, value: string) : IHighlightResult
		export function highlightAuto(text: string) : IHighlightResult

		export function fixMarkup(value: string, tabReplace: boolean, useBR: boolean) : string;

		export function highlightBlock(block: Node, tabReplace?: boolean, useBR?: boolean) : void;

		export function initHighlighting(): void;
		export function initHighlightingOnLoad(): void;

		export var tabReplace : string;

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
		export var C_LINE_COMMENT_MODE : IMode;
		export var C_BLOCK_COMMENT_MODE : IMode;
		export var HASH_COMMENT_MODE : IMode;
		export var NUMBER_MODE : IMode;
		export var C_NUMBER_MODE : IMode;
		export var BINARY_NUMBER_MODE : IMode;

		export interface IHighlightResult
		{
			relevance: number;
			keyword_count: number;
			value: string;
		}

		export interface IAutoHighlightResult extends IHighlightResult
		{
			language: string;
			second_best?: IAutoHighlightResult;
		}

		// Reference:
		// https://github.com/isagalaev/highlight.js/blob/master/docs/reference.rst
		export interface IMode
		{
			className?: string;
			begin: string;
			end?: string;
			beginWithKeyword?: boolean;
			endsWithParent?: boolean;
			lexems?: string;
			keywords?: Object;
			illegal?: string;
			excludeBegin?: boolean;
			excludeEnd?: boolean;
			returnBegin?: boolean;
			returnEnd?: boolean;
			contains?: IMode[];
			starts?: string;
			subLanguage?: string;
			relevance?: number;
		}
	}
	export = hljs;
}
