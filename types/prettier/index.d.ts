// Type definitions for prettier 2.7
// Project: https://prettier.io
//          https://github.com/prettier/prettier
// Definitions by: Ika <https://github.com/ikatyang>
//                 Ifiok Jr. <https://github.com/ifiokjr>
//                 Florian Imdahl <https://github.com/ffflorian>
//                 Sosuke Suzuki <https://github.com/sosukesuzuki>
//                 Christopher Quadflieg <https://github.com/Shinigami92>
//                 Georgii Dolzhykov <https://github.com/thorn0>
//                 JounQin <https://github.com/JounQin>
//                 Chuah Chee Shian <https://github.com/shian15810>
//                 Marc Gibbons <https://github.com/marcgibbons>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2

// Adding export {} here to shut off automatic exporting from index.d.ts. There
// are quite a few utility types here that don't need to be shipped with the
// exported module.
export {};

// This utility is here to handle the case where you have an explicit union
// between string literals and the generic string type. It would normally
// resolve out to just the string type, but this generic LiteralUnion maintains
// the intellisense of the original union.
//
// It comes from this issue: microsoft/TypeScript#29729:
//   https://github.com/microsoft/TypeScript/issues/29729#issuecomment-700527227
export type LiteralUnion<T extends U, U = string> = T | (Pick<U, never> & { _?: never | undefined });

export type AST = any;
export type Doc = doc.builders.Doc;

// The type of elements that make up the given array T.
type ArrayElement<T> = T extends Array<infer E> ? E : never;

// A union of the properties of the given object that are arrays.
type ArrayProperties<T> = { [K in keyof T]: NonNullable<T[K]> extends any[] ? K : never }[keyof T];

// A union of the properties of the given array T that can be used to index it.
// If the array is a tuple, then that's going to be the explicit indices of the
// array, otherwise it's going to just be number.
type IndexProperties<T extends { length: number }> = IsTuple<T> extends true
    ? Exclude<Partial<T>['length'], T['length']>
    : number;

// Effectively performing T[P], except that it's telling TypeScript that it's
// safe to do this for tuples, arrays, or objects.
type IndexValue<T, P> = T extends any[] ? (P extends number ? T[P] : never) : P extends keyof T ? T[P] : never;

// Determines if an object T is an array like string[] (in which case this
// evaluates to false) or a tuple like [string] (in which case this evaluates to
// true).
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type IsTuple<T> = T extends [] ? true : T extends [infer First, ...infer Remain] ? IsTuple<Remain> : false;

type CallProperties<T> = T extends any[] ? IndexProperties<T> : keyof T;
type IterProperties<T> = T extends any[] ? IndexProperties<T> : ArrayProperties<T>;

type CallCallback<T, U> = (path: AstPath<T>, index: number, value: any) => U;
type EachCallback<T> = (path: AstPath<ArrayElement<T>>, index: number, value: any) => void;
type MapCallback<T, U> = (path: AstPath<ArrayElement<T>>, index: number, value: any) => U;

// https://github.com/prettier/prettier/blob/main/src/common/ast-path.js
export class AstPath<T = any> {
    constructor(value: T);
    stack: T[];
    callParent<U>(callback: (path: this) => U, count?: number): U;
    getName(): PropertyKey | null;
    getValue(): T;
    getNode(count?: number): T | null;
    getParentNode(count?: number): T | null;
    match(...predicates: Array<(node: any, name: string | null, number: number | null) => boolean>): boolean;

    // For each of the tree walk functions (call, each, and map) this provides 5
    // strict type signatures, along with a fallback at the end if you end up
    // calling more than 5 properties deep. This helps a lot with typing because
    // for the majority of cases you're calling fewer than 5 properties, so the
    // tree walk functions have a clearer understanding of what you're doing.
    //
    // Note that resolving these types is somewhat complicated, and it wasn't
    // even supported until TypeScript 4.2 (before it would just say that the
    // type instantiation was excessively deep and possibly infinite).

    call<U>(callback: CallCallback<T, U>): U;
    call<U, P1 extends CallProperties<T>>(callback: CallCallback<IndexValue<T, P1>, U>, prop1: P1): U;
    call<U, P1 extends keyof T, P2 extends CallProperties<T[P1]>>(
        callback: CallCallback<IndexValue<IndexValue<T, P1>, P2>, U>,
        prop1: P1,
        prop2: P2,
    ): U;
    call<U, P1 extends keyof T, P2 extends CallProperties<T[P1]>, P3 extends CallProperties<IndexValue<T[P1], P2>>>(
        callback: CallCallback<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, U>,
        prop1: P1,
        prop2: P2,
        prop3: P3,
    ): U;
    call<
        U,
        P1 extends keyof T,
        P2 extends CallProperties<T[P1]>,
        P3 extends CallProperties<IndexValue<T[P1], P2>>,
        P4 extends CallProperties<IndexValue<IndexValue<T[P1], P2>, P3>>
    >(
        callback: CallCallback<IndexValue<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, P4>, U>,
        prop1: P1,
        prop2: P2,
        prop3: P3,
        prop4: P4,
    ): U;
    call<U, P extends PropertyKey>(
        callback: CallCallback<any, U>,
        prop1: P,
        prop2: P,
        prop3: P,
        prop4: P,
        ...props: P[]
    ): U;

    each(callback: EachCallback<T>): void;
    each<P1 extends IterProperties<T>>(callback: EachCallback<IndexValue<T, P1>>, prop1: P1): void;
    each<P1 extends keyof T, P2 extends IterProperties<T[P1]>>(
        callback: EachCallback<IndexValue<IndexValue<T, P1>, P2>>,
        prop1: P1,
        prop2: P2,
    ): void;
    each<P1 extends keyof T, P2 extends IterProperties<T[P1]>, P3 extends IterProperties<IndexValue<T[P1], P2>>>(
        callback: EachCallback<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>>,
        prop1: P1,
        prop2: P2,
        prop3: P3,
    ): void;
    each<
        P1 extends keyof T,
        P2 extends IterProperties<T[P1]>,
        P3 extends IterProperties<IndexValue<T[P1], P2>>,
        P4 extends IterProperties<IndexValue<IndexValue<T[P1], P2>, P3>>
    >(
        callback: EachCallback<IndexValue<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, P4>>,
        prop1: P1,
        prop2: P2,
        prop3: P3,
        prop4: P4,
    ): void;
    each(
        callback: EachCallback<any[]>,
        prop1: PropertyKey,
        prop2: PropertyKey,
        prop3: PropertyKey,
        prop4: PropertyKey,
        ...props: PropertyKey[]
    ): void;

    map<U>(callback: MapCallback<T, U>): U[];
    map<U, P1 extends IterProperties<T>>(callback: MapCallback<IndexValue<T, P1>, U>, prop1: P1): U[];
    map<U, P1 extends keyof T, P2 extends IterProperties<T[P1]>>(
        callback: MapCallback<IndexValue<IndexValue<T, P1>, P2>, U>,
        prop1: P1,
        prop2: P2,
    ): U[];
    map<U, P1 extends keyof T, P2 extends IterProperties<T[P1]>, P3 extends IterProperties<IndexValue<T[P1], P2>>>(
        callback: MapCallback<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, U>,
        prop1: P1,
        prop2: P2,
        prop3: P3,
    ): U[];
    map<
        U,
        P1 extends keyof T,
        P2 extends IterProperties<T[P1]>,
        P3 extends IterProperties<IndexValue<T[P1], P2>>,
        P4 extends IterProperties<IndexValue<IndexValue<T[P1], P2>, P3>>
    >(
        callback: MapCallback<IndexValue<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, P4>, U>,
        prop1: P1,
        prop2: P2,
        prop3: P3,
        prop4: P4,
    ): U[];
    map<U>(
        callback: MapCallback<any[], U>,
        prop1: PropertyKey,
        prop2: PropertyKey,
        prop3: PropertyKey,
        prop4: PropertyKey,
        ...props: PropertyKey[]
    ): U[];
}

/** @deprecated `FastPath` was renamed to `AstPath` */
export type FastPath<T = any> = AstPath<T>;

export type BuiltInParser = (text: string, options?: any) => AST;
export type BuiltInParserName =
    | 'angular'
    | 'babel-flow'
    | 'babel-ts'
    | 'babel'
    | 'css'
    | 'espree'
    | 'flow'
    | 'glimmer'
    | 'graphql'
    | 'html'
    | 'json-stringify'
    | 'json'
    | 'json5'
    | 'less'
    | 'lwc'
    | 'markdown'
    | 'mdx'
    | 'meriyah'
    | 'scss'
    | 'typescript'
    | 'vue'
    | 'yaml';
export type BuiltInParsers = Record<BuiltInParserName, BuiltInParser>;

export type CustomParser = (text: string, parsers: BuiltInParsers, options: Options) => AST;

/**
 * For use in `.prettierrc.js`, `.prettierrc.cjs`, `prettier.config.js` or `prettier.config.cjs`.
 */
export interface Config extends Options {
    overrides?: Array<{
        files: string | string[];
        excludeFiles?: string | string[];
        options?: Options;
    }>;
}

export interface Options extends Partial<RequiredOptions> {}

export interface RequiredOptions extends doc.printer.Options {
    /**
     * Print semicolons at the ends of statements.
     * @default true
     */
    semi: boolean;
    /**
     * Use single quotes instead of double quotes.
     * @default false
     */
    singleQuote: boolean;
    /**
     * Use single quotes in JSX.
     * @default false
     */
    jsxSingleQuote: boolean;
    /**
     * Print trailing commas wherever possible.
     * @default 'es5'
     */
    trailingComma: 'none' | 'es5' | 'all';
    /**
     * Print spaces between brackets in object literals.
     * @default true
     */
    bracketSpacing: boolean;
    /**
     * Put the `>` of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being
     * alone on the next line (does not apply to self closing elements).
     * @default false
     */
    bracketSameLine: boolean;
    /**
     * Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
     * @default false
     * @deprecated use bracketSameLine instead
     */
    jsxBracketSameLine: boolean;
    /**
     * Format only a segment of a file.
     * @default 0
     */
    rangeStart: number;
    /**
     * Format only a segment of a file.
     * @default Infinity
     */
    rangeEnd: number;
    /**
     * Specify which parser to use.
     */
    parser: LiteralUnion<BuiltInParserName> | CustomParser;
    /**
     * Specify the input filepath. This will be used to do parser inference.
     */
    filepath: string;
    /**
     * Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file.
     * This is very useful when gradually transitioning large, unformatted codebases to prettier.
     * @default false
     */
    requirePragma: boolean;
    /**
     * Prettier can insert a special @format marker at the top of files specifying that
     * the file has been formatted with prettier. This works well when used in tandem with
     * the --require-pragma option. If there is already a docblock at the top of
     * the file then this option will add a newline to it with the @format marker.
     * @default false
     */
    insertPragma: boolean;
    /**
     * By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer.
     * In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out.
     * @default 'preserve'
     */
    proseWrap: 'always' | 'never' | 'preserve';
    /**
     * Include parentheses around a sole arrow function parameter.
     * @default 'always'
     */
    arrowParens: 'avoid' | 'always';
    /**
     * Provide ability to support new languages to prettier.
     */
    plugins: Array<string | Plugin>;
    /**
     * Specify plugin directory paths to search for plugins if not installed in the same `node_modules` where prettier is located.
     */
    pluginSearchDirs: string[] | false;
    /**
     * How to handle whitespaces in HTML.
     * @default 'css'
     */
    htmlWhitespaceSensitivity: 'css' | 'strict' | 'ignore';
    /**
     * Which end of line characters to apply.
     * @default 'lf'
     */
    endOfLine: 'auto' | 'lf' | 'crlf' | 'cr';
    /**
     * Change when properties in objects are quoted.
     * @default 'as-needed'
     */
    quoteProps: 'as-needed' | 'consistent' | 'preserve';
    /**
     * Whether or not to indent the code inside <script> and <style> tags in Vue files.
     * @default false
     */
    vueIndentScriptAndStyle: boolean;
    /**
     * Control whether Prettier formats quoted code embedded in the file.
     * @default 'auto'
     */
    embeddedLanguageFormatting: 'auto' | 'off';
    /**
     * Enforce single attribute per line in HTML, Vue and JSX.
     * @default false
     */
    singleAttributePerLine: boolean;
}

export interface ParserOptions<T = any> extends RequiredOptions {
    locStart: (node: T) => number;
    locEnd: (node: T) => number;
    originalText: string;
}

export interface Plugin<T = any> {
    languages?: SupportLanguage[] | undefined;
    parsers?: { [parserName: string]: Parser<T> } | undefined;
    printers?: { [astFormat: string]: Printer<T> } | undefined;
    options?: SupportOptions | undefined;
    defaultOptions?: Partial<RequiredOptions> | undefined;
}

export interface Parser<T = any> {
    parse: (text: string, parsers: { [parserName: string]: Parser }, options: ParserOptions<T>) => T;
    astFormat: string;
    hasPragma?: ((text: string) => boolean) | undefined;
    locStart: (node: T) => number;
    locEnd: (node: T) => number;
    preprocess?: ((text: string, options: ParserOptions<T>) => string) | undefined;
}

export interface Printer<T = any> {
    print(path: AstPath<T>, options: ParserOptions<T>, print: (path: AstPath<T>) => Doc, args?: unknown): Doc;
    embed?:
        | ((
              path: AstPath<T>,
              print: (path: AstPath<T>) => Doc,
              textToDoc: (text: string, options: Options) => Doc,
              options: ParserOptions<T>,
          ) => Doc | null)
        | undefined;
    preprocess?: ((ast: AST, options: ParserOptions<T>) => AST) | undefined;
    insertPragma?: ((text: string) => string) | undefined;
    /**
     * @returns `null` if you want to remove this node
     * @returns `void` if you want to use modified newNode
     * @returns anything if you want to replace the node with it
     */
    massageAstNode?: ((node: any, newNode: any, parent: any) => any) | undefined;
    hasPrettierIgnore?: ((path: AstPath<T>) => boolean) | undefined;
    canAttachComment?: ((node: T) => boolean) | undefined;
    isBlockComment?: ((node: T) => boolean) | undefined;
    willPrintOwnComments?: ((path: AstPath<T>) => boolean) | undefined;
    printComment?: ((commentPath: AstPath<T>, options: ParserOptions<T>) => Doc) | undefined;
    handleComments?:
        | {
              ownLine?:
                  | ((
                        commentNode: any,
                        text: string,
                        options: ParserOptions<T>,
                        ast: T,
                        isLastComment: boolean,
                    ) => boolean)
                  | undefined;
              endOfLine?:
                  | ((
                        commentNode: any,
                        text: string,
                        options: ParserOptions<T>,
                        ast: T,
                        isLastComment: boolean,
                    ) => boolean)
                  | undefined;
              remaining?:
                  | ((
                        commentNode: any,
                        text: string,
                        options: ParserOptions<T>,
                        ast: T,
                        isLastComment: boolean,
                    ) => boolean)
                  | undefined;
          }
        | undefined;
}

export interface CursorOptions extends Options {
    /**
     * Specify where the cursor is.
     */
    cursorOffset: number;
    rangeStart?: never;
    rangeEnd?: never;
}

export interface CursorResult {
    formatted: string;
    cursorOffset: number;
}

/**
 * `format` is used to format text using Prettier. [Options](https://prettier.io/docs/en/options.html) may be provided to override the defaults.
 */
export function format(source: string, options?: Options): string;

/**
 * `check` checks to see if the file has been formatted with Prettier given those options and returns a `Boolean`.
 * This is similar to the `--list-different` parameter in the CLI and is useful for running Prettier in CI scenarios.
 */
export function check(source: string, options?: Options): boolean;

/**
 * `formatWithCursor` both formats the code, and translates a cursor position from unformatted code to formatted code.
 * This is useful for editor integrations, to prevent the cursor from moving when code is formatted.
 *
 * The `cursorOffset` option should be provided, to specify where the cursor is. This option cannot be used with `rangeStart` and `rangeEnd`.
 */
export function formatWithCursor(source: string, options: CursorOptions): CursorResult;

export interface ResolveConfigOptions {
    /**
     * If set to `false`, all caching will be bypassed.
     */
    useCache?: boolean | undefined;
    /**
     * Pass directly the path of the config file if you don't wish to search for it.
     */
    config?: string | undefined;
    /**
     * If set to `true` and an `.editorconfig` file is in your project,
     * Prettier will parse it and convert its properties to the corresponding prettier configuration.
     * This configuration will be overridden by `.prettierrc`, etc. Currently,
     * the following EditorConfig properties are supported:
     * - indent_style
     * - indent_size/tab_width
     * - max_line_length
     */
    editorconfig?: boolean | undefined;
}

/**
 * `resolveConfig` can be used to resolve configuration for a given source file,
 * passing its path as the first argument. The config search will start at the
 * file path and continue to search up the directory.
 * (You can use `process.cwd()` to start searching from the current directory).
 *
 * A promise is returned which will resolve to:
 *
 *  - An options object, providing a [config file](https://prettier.io/docs/en/configuration.html) was found.
 *  - `null`, if no file was found.
 *
 * The promise will be rejected if there was an error parsing the configuration file.
 */
export function resolveConfig(filePath: string, options?: ResolveConfigOptions): Promise<Options | null>;
export namespace resolveConfig {
    function sync(filePath: string, options?: ResolveConfigOptions): Options | null;
}

/**
 * `resolveConfigFile` can be used to find the path of the Prettier configuration file,
 * that will be used when resolving the config (i.e. when calling `resolveConfig`).
 *
 * A promise is returned which will resolve to:
 *
 * - The path of the configuration file.
 * - `null`, if no file was found.
 *
 * The promise will be rejected if there was an error parsing the configuration file.
 */
export function resolveConfigFile(filePath?: string): Promise<string | null>;
export namespace resolveConfigFile {
    function sync(filePath?: string): string | null;
}

/**
 * As you repeatedly call `resolveConfig`, the file system structure will be cached for performance. This function will clear the cache.
 * Generally this is only needed for editor integrations that know that the file system has changed since the last format took place.
 */
export function clearConfigCache(): void;

export interface SupportLanguage {
    name: string;
    since?: string | undefined;
    parsers: BuiltInParserName[] | string[];
    group?: string | undefined;
    tmScope?: string | undefined;
    aceMode?: string | undefined;
    codemirrorMode?: string | undefined;
    codemirrorMimeType?: string | undefined;
    aliases?: string[] | undefined;
    extensions?: string[] | undefined;
    filenames?: string[] | undefined;
    linguistLanguageId?: number | undefined;
    vscodeLanguageIds?: string[] | undefined;
    interpreters?: string[] | undefined;
}

export interface SupportOptionRange {
    start: number;
    end: number;
    step: number;
}

export type SupportOptionType = 'int' | 'string' | 'boolean' | 'choice' | 'path';

export type CoreCategoryType = 'Config' | 'Editor' | 'Format' | 'Other' | 'Output' | 'Global' | 'Special';

export interface BaseSupportOption<Type extends SupportOptionType> {
    readonly name?: string | undefined;
    since: string;
    /**
     * Usually you can use {@link CoreCategoryType}
     */
    category: string;
    /**
     * The type of the option.
     *
     * When passing a type other than the ones listed below, the option is
     * treated as taking any string as argument, and `--option <${type}>` will
     * be displayed in --help.
     */
    type: Type;
    /**
     * Indicate that the option is deprecated.
     *
     * Use a string to add an extra message to --help for the option,
     * for example to suggest a replacement option.
     */
    deprecated?: true | string | undefined;
    /**
     * Description to be displayed in --help. If omitted, the option won't be
     * shown at all in --help.
     */
    description?: string | undefined;
}

export interface IntSupportOption extends BaseSupportOption<'int'> {
    default?: number | undefined;
    array?: false | undefined;
    range?: SupportOptionRange | undefined;
}

export interface IntArraySupportOption extends BaseSupportOption<'int'> {
    default?: Array<{ value: number[] }> | undefined;
    array: true;
}

export interface StringSupportOption extends BaseSupportOption<'string'> {
    default?: string | undefined;
    array?: false | undefined;
}

export interface StringArraySupportOption extends BaseSupportOption<'string'> {
    default?: Array<{ value: string[] }> | undefined;
    array: true;
}

export interface BooleanSupportOption extends BaseSupportOption<'boolean'> {
    default?: boolean | undefined;
    array?: false | undefined;
    description: string;
    oppositeDescription?: string | undefined;
}

export interface BooleanArraySupportOption extends BaseSupportOption<'boolean'> {
    default?: Array<{ value: boolean[] }> | undefined;
    array: true;
}

export interface ChoiceSupportOption<Value = any> extends BaseSupportOption<'choice'> {
    default?: Value | Array<{ since: string; value: Value }> | undefined;
    description: string;
    choices: Array<{
        since?: string | undefined;
        value: Value;
        description: string;
    }>;
}

export interface PathSupportOption extends BaseSupportOption<'path'> {
    default?: string | undefined;
    array?: false | undefined;
}

export interface PathArraySupportOption extends BaseSupportOption<'path'> {
    default?: Array<{ value: string[] }> | undefined;
    array: true;
}

export type SupportOption =
    | IntSupportOption
    | IntArraySupportOption
    | StringSupportOption
    | StringArraySupportOption
    | BooleanSupportOption
    | BooleanArraySupportOption
    | ChoiceSupportOption
    | PathSupportOption
    | PathArraySupportOption;

export interface SupportOptions extends Record<string, SupportOption> {}

export interface SupportInfo {
    languages: SupportLanguage[];
    options: SupportOption[];
}

export interface FileInfoOptions {
    ignorePath?: string | undefined;
    withNodeModules?: boolean | undefined;
    plugins?: string[] | undefined;
    resolveConfig?: boolean | undefined;
}

export interface FileInfoResult {
    ignored: boolean;
    inferredParser: string | null;
}

export function getFileInfo(filePath: string, options?: FileInfoOptions): Promise<FileInfoResult>;

export namespace getFileInfo {
    function sync(filePath: string, options?: FileInfoOptions): FileInfoResult;
}

/**
 * Returns an object representing the parsers, languages and file types Prettier supports for the current version.
 */
export function getSupportInfo(): SupportInfo;

/**
 * `version` field in `package.json`
 */
export const version: string;

// https://github.com/prettier/prettier/blob/main/src/common/util-shared.js
export namespace util {
    interface SkipOptions {
        backwards?: boolean | undefined;
    }

    type Quote = "'" | '"';

    function addDanglingComment(node: any, comment: any, marker: any): void;
    function addLeadingComment(node: any, comment: any): void;
    function addTrailingComment(node: any, comment: any): void;
    function getAlignmentSize(value: string, tabWidth: number, startIndex?: number): number;
    function getIndentSize(value: string, tabWidth: number): number;
    function getMaxContinuousCount(str: string, target: string): number;
    function getNextNonSpaceNonCommentCharacterIndex<N>(
        text: string,
        node: N,
        locEnd: (node: N) => number,
    ): number | false;
    function getStringWidth(text: string): number;
    function hasNewline(text: string, index: number, opts?: SkipOptions): boolean;
    function hasNewlineInRange(text: string, start: number, end: number): boolean;
    function hasSpaces(text: string, index: number, opts?: SkipOptions): boolean;
    function isNextLineEmpty<N>(text: string, node: N, locEnd: (node: N) => number): boolean;
    function isNextLineEmptyAfterIndex(text: string, index: number): boolean;
    function isPreviousLineEmpty<N>(text: string, node: N, locStart: (node: N) => number): boolean;
    function makeString(rawContent: string, enclosingQuote: Quote, unescapeUnnecessaryEscapes?: boolean): string;
    function skip(chars: string | RegExp): (text: string, index: number | false, opts?: SkipOptions) => number | false;
    function skipEverythingButNewLine(text: string, index: number | false, opts?: SkipOptions): number | false;
    function skipInlineComment(text: string, index: number | false): number | false;
    function skipNewline(text: string, index: number | false, opts?: SkipOptions): number | false;
    function skipSpaces(text: string, index: number | false, opts?: SkipOptions): number | false;
    function skipToLineEnd(text: string, index: number | false, opts?: SkipOptions): number | false;
    function skipTrailingComment(text: string, index: number | false): number | false;
    function skipWhitespace(text: string, index: number | false, opts?: SkipOptions): number | false;
}

// https://github.com/prettier/prettier/blob/main/src/document/index.js
export namespace doc {
    namespace builders {
        type DocCommand =
            | Align
            | BreakParent
            | Concat
            | Cursor
            | Fill
            | Group
            | IfBreak
            | Indent
            | IndentIfBreak
            | Label
            | Line
            | LineSuffix
            | LineSuffixBoundary
            | Trim;
        type Doc = string | Doc[] | DocCommand;

        interface Align {
            type: 'align';
            contents: Doc;
            n: number | string | { type: 'root' };
        }

        interface BreakParent {
            type: 'break-parent';
        }

        interface Concat {
            type: 'concat';
            parts: Doc[];
        }

        interface Cursor {
            type: 'cursor';
            placeholder: symbol;
        }

        interface Fill {
            type: 'fill';
            parts: Doc[];
        }

        interface Group {
            type: 'group';
            contents: Doc;
            break: boolean;
            expandedStates: Doc[];
        }

        interface HardlineWithoutBreakParent extends Line {
            hard: true;
        }

        interface IfBreak {
            type: 'if-break';
            breakContents: Doc;
            flatContents: Doc;
        }

        interface Indent {
            type: 'indent';
            contents: Doc;
        }

        interface IndentIfBreak {
            type: 'indent-if-break';
        }

        interface Label {
            type: 'label';
        }

        interface Line {
            type: 'line';
            soft?: boolean | undefined;
            hard?: boolean | undefined;
            literal?: boolean | undefined;
        }

        interface LineSuffix {
            type: 'line-suffix';
            contents: Doc;
        }

        interface LineSuffixBoundary {
            type: 'line-suffix-boundary';
        }

        interface LiterallineWithoutBreakParent extends Line {
            hard: true;
            literal: true;
        }

        interface Softline extends Line {
            soft: true;
        }

        interface Trim {
            type: 'trim';
        }

        interface GroupOptions {
            shouldBreak?: boolean | undefined;
            id?: symbol | undefined;
        }

        function addAlignmentToDoc(doc: Doc, size: number, tabWidth: number): Doc;
        /** @see [align](https://github.com/prettier/prettier/blob/main/commands.md#align) */
        function align(widthOrString: Align['n'], doc: Doc): Align;
        /** @see [breakParent](https://github.com/prettier/prettier/blob/main/commands.md#breakparent) */
        const breakParent: BreakParent;
        /**
         * @see [concat](https://github.com/prettier/prettier/blob/main/commands.md#deprecated-concat)
         * @deprecated use `Doc[]` instead
         */
        function concat(docs: Doc[]): Concat;
        /** @see [conditionalGroup](https://github.com/prettier/prettier/blob/main/commands.md#conditionalgroup) */
        function conditionalGroup(alternatives: Doc[], options?: GroupOptions): Group;
        /** @see [dedent](https://github.com/prettier/prettier/blob/main/commands.md#dedent) */
        function dedent(doc: Doc): Align;
        /** @see [dedentToRoot](https://github.com/prettier/prettier/blob/main/commands.md#dedenttoroot) */
        function dedentToRoot(doc: Doc): Align;
        /** @see [fill](https://github.com/prettier/prettier/blob/main/commands.md#fill) */
        function fill(docs: Doc[]): Fill;
        /** @see [group](https://github.com/prettier/prettier/blob/main/commands.md#group) */
        function group(doc: Doc, opts?: GroupOptions): Group;
        /** @see [hardline](https://github.com/prettier/prettier/blob/main/commands.md#hardline) */
        const hardline: Concat;
        /** @see [hardlineWithoutBreakParent](https://github.com/prettier/prettier/blob/main/commands.md#hardlinewithoutbreakparent-and-literallinewithoutbreakparent) */
        const hardlineWithoutBreakParent: HardlineWithoutBreakParent;
        /** @see [ifBreak](https://github.com/prettier/prettier/blob/main/commands.md#ifbreak) */
        function ifBreak(ifBreak: Doc, noBreak?: Doc, options?: { groupId?: symbol | undefined }): IfBreak;
        /** @see [indent](https://github.com/prettier/prettier/blob/main/commands.md#indent) */
        function indent(doc: Doc): Indent;
        /** @see [indentIfBreak](https://github.com/prettier/prettier/blob/main/commands.md#indentifbreak) */
        function indentIfBreak(doc: Doc, opts: { groupId: symbol; negate?: boolean | undefined }): IndentIfBreak;
        /** @see [join](https://github.com/prettier/prettier/blob/main/commands.md#join) */
        function join(sep: Doc, docs: Doc[]): Concat;
        /** @see [label](https://github.com/prettier/prettier/blob/main/commands.md#label) */
        function label(label: string, doc: Doc): Label;
        /** @see [line](https://github.com/prettier/prettier/blob/main/commands.md#line) */
        const line: Line;
        /** @see [lineSuffix](https://github.com/prettier/prettier/blob/main/commands.md#linesuffix) */
        function lineSuffix(suffix: Doc): LineSuffix;
        /** @see [lineSuffixBoundary](https://github.com/prettier/prettier/blob/main/commands.md#linesuffixboundary) */
        const lineSuffixBoundary: LineSuffixBoundary;
        /** @see [literalline](https://github.com/prettier/prettier/blob/main/commands.md#literalline) */
        const literalline: Concat;
        /** @see [literallineWithoutBreakParent](https://github.com/prettier/prettier/blob/main/commands.md#hardlinewithoutbreakparent-and-literallinewithoutbreakparent) */
        const literallineWithoutBreakParent: LiterallineWithoutBreakParent;
        /** @see [markAsRoot](https://github.com/prettier/prettier/blob/main/commands.md#markasroot) */
        function markAsRoot(doc: Doc): Align;
        /** @see [softline](https://github.com/prettier/prettier/blob/main/commands.md#softline) */
        const softline: Softline;
        /** @see [trim](https://github.com/prettier/prettier/blob/main/commands.md#trim) */
        const trim: Trim;
        /** @see [cursor](https://github.com/prettier/prettier/blob/main/commands.md#cursor) */
        const cursor: Cursor;
    }
    namespace debug {
        function printDocToDebug(doc: Doc): string;
    }
    namespace printer {
        function printDocToString(
            doc: Doc,
            options: Options,
        ): {
            formatted: string;
            cursorNodeStart?: number | undefined;
            cursorNodeText?: string | undefined;
        };
        interface Options {
            /**
             * Specify the line length that the printer will wrap on.
             * @default 80
             */
            printWidth: number;
            /**
             * Specify the number of spaces per indentation-level.
             * @default 2
             */
            tabWidth: number;
            /**
             * Indent lines with tabs instead of spaces
             * @default false
             */
            useTabs: boolean;
            parentParser?: string | undefined;
            __embeddedInHtml?: boolean | undefined;
        }
    }
    namespace utils {
        function cleanDoc(doc: Doc): Doc;
        function findInDoc<T = Doc>(doc: Doc, callback: (doc: Doc) => T, defaultValue: T): T;
        function getDocParts(doc: Doc): Doc;
        function isConcat(doc: Doc): boolean;
        function isEmpty(doc: Doc): boolean;
        function isLineNext(doc: Doc): boolean;
        function mapDoc<T = Doc>(doc: Doc, callback: (doc: Doc) => T): T;
        function normalizeDoc(doc: Doc): Doc;
        function normalizeParts(parts: Doc[]): Doc[];
        function propagateBreaks(doc: Doc): void;
        function removeLines(doc: Doc): Doc;
        function replaceNewlinesWithLiterallines(doc: Doc): Doc;
        function stripTrailingHardline(doc: Doc): Doc;
        function traverseDoc(
            doc: Doc,
            onEnter?: (doc: Doc) => void | boolean,
            onExit?: (doc: Doc) => void,
            shouldTraverseConditionalGroups?: boolean,
        ): void;
        function willBreak(doc: Doc): boolean;
    }
}
