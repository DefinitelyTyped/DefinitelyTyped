declare namespace hljs {
    // tslint:disable-next-line:no-empty-interface
    interface Node {}

    export function highlight(
        name: string,
        value: string,
        ignore_illegals?: boolean,
        continuation?: ICompiledMode,
    ): IHighlightResult;
    export function highlightAuto(
        value: string,
        languageSubset?: string[],
    ): IAutoHighlightResult;

    export function fixMarkup(value: string): string;

    export function highlightBlock(block: Node): void;

    export function configure(options: IOptions): void;

    export function initHighlighting(): void;
    export function initHighlightingOnLoad(): void;

    export function registerLanguage(
        name: string,
        language: (hljs?: HLJSStatic) => IModeBase,
    ): void;
    export function listLanguages(): string[];
    export function getLanguage(name: string): IMode;

    export function inherit(parent: object, obj: object): object;

    export function COMMENT(
        begin: string | RegExp,
        end: string | RegExp,
        inherits: IModeBase,
    ): IMode;

    // Common regexps
    export const IDENT_RE: string;
    export const UNDERSCORE_IDENT_RE: string;
    export const NUMBER_RE: string;
    export const C_NUMBER_RE: string;
    export const BINARY_NUMBER_RE: string;
    export const RE_STARTERS_RE: string;

    // Common modes
    export const BACKSLASH_ESCAPE: IMode;
    export const APOS_STRING_MODE: IMode;
    export const QUOTE_STRING_MODE: IMode;
    export const PHRASAL_WORDS_MODE: IMode;
    export const C_LINE_COMMENT_MODE: IMode;
    export const C_BLOCK_COMMENT_MODE: IMode;
    export const HASH_COMMENT_MODE: IMode;
    export const NUMBER_MODE: IMode;
    export const C_NUMBER_MODE: IMode;
    export const BINARY_NUMBER_MODE: IMode;
    export const CSS_NUMBER_MODE: IMode;
    export const REGEX_MODE: IMode;
    export const TITLE_MODE: IMode;
    export const UNDERSCORE_TITLE_MODE: IMode;

    export interface IHighlightResultBase {
        relevance: number;
        language: string;
        value: string;
    }

    export interface IAutoHighlightResult extends IHighlightResultBase {
        second_best?: IAutoHighlightResult | undefined;
    }

    export interface IHighlightResult extends IHighlightResultBase {
        top: ICompiledMode;
    }

    export interface HLJSStatic {
        inherit(parent: object, obj: object): object;

        // Common regexps
        IDENT_RE: string;
        UNDERSCORE_IDENT_RE: string;
        NUMBER_RE: string;
        C_NUMBER_RE: string;
        BINARY_NUMBER_RE: string;
        RE_STARTERS_RE: string;

        // Common modes
        BACKSLASH_ESCAPE: IMode;
        APOS_STRING_MODE: IMode;
        QUOTE_STRING_MODE: IMode;
        PHRASAL_WORDS_MODE: IMode;
        C_LINE_COMMENT_MODE: IMode;
        C_BLOCK_COMMENT_MODE: IMode;
        HASH_COMMENT_MODE: IMode;
        NUMBER_MODE: IMode;
        C_NUMBER_MODE: IMode;
        BINARY_NUMBER_MODE: IMode;
        CSS_NUMBER_MODE: IMode;
        REGEX_MODE: IMode;
        TITLE_MODE: IMode;
        UNDERSCORE_TITLE_MODE: IMode;
    }

    // Reference:
    // https://github.com/isagalaev/highlight.js/blob/master/docs/reference.rst
    export interface IModeBase {
        className?: string | undefined;
        aliases?: string[] | undefined;
        begin?: (string | RegExp) | undefined;
        end?: (string | RegExp) | undefined;
        case_insensitive?: boolean | undefined;
        beginKeyword?: string | undefined;
        endsWithParent?: boolean | undefined;
        lexems?: string | undefined;
        illegal?: string | undefined;
        excludeBegin?: boolean | undefined;
        excludeEnd?: boolean | undefined;
        returnBegin?: boolean | undefined;
        returnEnd?: boolean | undefined;
        starts?: string | undefined;
        subLanguage?: string | undefined;
        subLanguageMode?: string | undefined;
        relevance?: number | undefined;
        variants?: IMode[] | undefined;
    }

    export interface IMode extends IModeBase {
        keywords?: any;
        contains?: IMode[] | undefined;
    }

    export interface ICompiledMode extends IModeBase {
        compiled: boolean;
        contains?: ICompiledMode[] | undefined;
        keywords?: object | undefined;
        terminators: RegExp;
        terminator_end?: string | undefined;
    }

    export interface IOptions {
        classPrefix?: string | undefined;
        tabReplace?: string | undefined;
        useBR?: boolean | undefined;
        languages?: string[] | undefined;
    }
}

export = hljs;
export as namespace hljs;
