// Type definitions for prettier 2.1
// Project: https://github.com/prettier/prettier, https://prettier.io
// Definitions by: Ika <https://github.com/ikatyang>,
//                 Ifiok Jr. <https://github.com/ifiokjr>,
//                 Florian Keller <https://github.com/ffflorian>,
//                 Sosuke Suzuki <https://github.com/sosukesuzuki>,
//                 Christopher Quadflieg <https://github.com/Shinigami92>
//                 Kevin Deisz <https://github.com/kddeisz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// This utility is here to handle the case where you have an explicit union
// between string literals and the generic string type. It would normally
// resolve out to just the string type, but this generic LiteralUnion maintains
// the intellisense of the original union.
//
// It comes from this issue: microsoft/TypeScript#29729:
//   https://github.com/microsoft/TypeScript/issues/29729#issuecomment-700527227
export type LiteralUnion<T extends U, U = string> = T | (Pick<U, never> & { _?: never });

export type AST = any;
export type Doc = doc.builders.Doc;

// https://github.com/prettier/prettier/blob/master/src/common/fast-path.js
export interface FastPath<T = any> {
    stack: T[];
    getName(): null | PropertyKey;
    getValue(): T;
    getNode(count?: number): null | T;
    getParentNode(count?: number): null | T;
    call<U>(callback: (path: this) => U, ...names: PropertyKey[]): U;
    each(callback: (path: this) => void, ...names: PropertyKey[]): void;
    map<U>(callback: (path: this, index: number) => U, ...names: PropertyKey[]): U[];
}

export type BuiltInParser = (text: string, options?: any) => AST;
export type BuiltInParserName =
    | 'babel'
    | 'babel-flow'
    | 'babel-ts'
    | 'flow'
    | 'typescript'
    | 'css'
    | 'less'
    | 'scss'
    | 'json'
    | 'json5'
    | 'json-stringify'
    | 'graphql'
    | 'markdown'
    | 'vue'
    | 'html'
    | 'angular'
    | 'mdx'
    | 'yaml'
    | 'lwc';
export type BuiltInParsers = Record<BuiltInParserName, BuiltInParser>;

export type CustomParser = (text: string, parsers: BuiltInParsers, options: Options) => AST;

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
     * Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
     * @default false
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
     * The plugin API is in a beta state.
     */
    plugins: Array<string | Plugin>;
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
}

export interface ParserOptions<T = any> extends RequiredOptions {
    locStart: (node: T) => number;
    locEnd: (node: T) => number;
    originalText: string;
}

export interface Plugin<T = any> {
    languages?: SupportLanguage[];
    parsers?: { [parserName: string]: Parser<T> };
    printers?: { [astFormat: string]: Printer<T> };
    options?: SupportOptions;
    defaultOptions?: Partial<RequiredOptions>;
}

export interface Parser<T = any> {
    parse: (text: string, parsers: { [parserName: string]: Parser }, options: ParserOptions<T>) => T;
    astFormat: string;
    hasPragma?: (text: string) => boolean;
    locStart: (node: T) => number;
    locEnd: (node: T) => number;
    preprocess?: (text: string, options: ParserOptions<T>) => string;
}

export interface Printer<T = any> {
    print(path: FastPath<T>, options: ParserOptions<T>, print: (path: FastPath<T>) => Doc): Doc;
    embed?: (
        path: FastPath<T>,
        print: (path: FastPath<T>) => Doc,
        textToDoc: (text: string, options: Options) => Doc,
        options: ParserOptions<T>,
    ) => Doc | null;
    insertPragma?: (text: string) => string;
    /**
     * @returns `null` if you want to remove this node
     * @returns `void` if you want to use modified newNode
     * @returns anything if you want to replace the node with it
     */
    massageAstNode?: (node: any, newNode: any, parent: any) => any;
    hasPrettierIgnore?: (path: FastPath<T>) => boolean;
    canAttachComment?: (node: T) => boolean;
    willPrintOwnComments?: (path: FastPath<T>) => boolean;
    printComments?: (path: FastPath<T>, print: (path: FastPath<T>) => Doc, options: ParserOptions<T>, needsSemi: boolean) => Doc;
    handleComments?: {
        ownLine?: (commentNode: any, text: string, options: ParserOptions<T>, ast: T, isLastComment: boolean) => boolean;
        endOfLine?: (
            commentNode: any,
            text: string,
            options: ParserOptions<T>,
            ast: T,
            isLastComment: boolean,
        ) => boolean;
        remaining?: (
            commentNode: any,
            text: string,
            options: ParserOptions<T>,
            ast: T,
            isLastComment: boolean,
        ) => boolean;
    };
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
 * `format` is used to format text using Prettier. [Options](https://github.com/prettier/prettier#options) may be provided to override the defaults.
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
    useCache?: boolean;
    /**
     * Pass directly the path of the config file if you don't wish to search for it.
     */
    config?: string;
    /**
     * If set to `true` and an `.editorconfig` file is in your project,
     * Prettier will parse it and convert its properties to the corresponding prettier configuration.
     * This configuration will be overridden by `.prettierrc`, etc. Currently,
     * the following EditorConfig properties are supported:
     * - indent_style
     * - indent_size/tab_width
     * - max_line_length
     */
    editorconfig?: boolean;
}

/**
 * `resolveConfig` can be used to resolve configuration for a given source file,
 * passing its path as the first argument. The config search will start at the
 * file path and continue to search up the directory.
 * (You can use `process.cwd()` to start searching from the current directory).
 *
 * A promise is returned which will resolve to:
 *
 *  - An options object, providing a [config file](https://github.com/prettier/prettier#configuration-file) was found.
 *  - `null`, if no file was found.
 *
 * The promise will be rejected if there was an error parsing the configuration file.
 */
export function resolveConfig(filePath: string, options?: ResolveConfigOptions): Promise<null | Options>;
export namespace resolveConfig {
    function sync(filePath: string, options?: ResolveConfigOptions): null | Options;
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
export function resolveConfigFile(filePath?: string): Promise<null | string>;
export namespace resolveConfigFile {
    function sync(filePath?: string): null | string;
}

/**
 * As you repeatedly call `resolveConfig`, the file system structure will be cached for performance. This function will clear the cache.
 * Generally this is only needed for editor integrations that know that the file system has changed since the last format took place.
 */
export function clearConfigCache(): void;

export interface SupportLanguage {
    name: string;
    since?: string;
    parsers: BuiltInParserName[] | string[];
    group?: string;
    tmScope?: string;
    aceMode?: string;
    codemirrorMode?: string;
    codemirrorMimeType?: string;
    aliases?: string[];
    extensions?: string[];
    filenames?: string[];
    linguistLanguageId?: number;
    vscodeLanguageIds?: string[];
}

export interface SupportOptionRange {
    start: number;
    end: number;
    step: number;
}

export type SupportOptionType = 'int' | 'boolean' | 'choice' | 'path';

export interface BaseSupportOption<Type extends SupportOptionType> {
    since: string;
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
    deprecated?: true | string;
    /**
     * Description to be displayed in --help. If omitted, the option won't be
     * shown at all in --help.
     */
    description?: string;
}

export interface IntSupportOption extends BaseSupportOption<'int'> {
    default: number;
    array?: false;
    range?: SupportOptionRange;
}

export interface IntArraySupportOption extends BaseSupportOption<'int'> {
    default: Array<{ value: number[] }>;
    array: true;
}

export interface BooleanSupportOption extends BaseSupportOption<'boolean'> {
    default: boolean;
    array?: false;
    description: string;
    oppositeDescription?: boolean;
}

export interface BooleanArraySupportOption extends BaseSupportOption<'boolean'> {
    default: Array<{ value: boolean[] }>;
    array: true;
}

export interface ChoiceSupportOption<Value = any> extends BaseSupportOption<'choice'> {
    default: Value | Array<{ since: string; value: Value }>;
    description: string;
    choices: Array<{
        since?: string;
        value: Value;
        description: string;
    }>;
}

export interface PathSupportOption extends BaseSupportOption<'path'> {
    default: string;
    array?: false;
}

export interface PathArraySupportOption extends BaseSupportOption<'path'> {
    default: Array<{ value: string[] }>;
    array: true;
}

export type SupportOption =
    | IntSupportOption
    | IntArraySupportOption
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
    ignorePath?: string;
    withNodeModules?: boolean;
    plugins?: string[];
    resolveConfig?: boolean;
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

// https://github.com/prettier/prettier/blob/master/src/common/util-shared.js
export namespace util {
    function isNextLineEmpty(text: string, node: any, locEnd: (node: any) => number): boolean;
    function isNextLineEmptyAfterIndex(text: string, index: number): boolean;
    function isPreviousLineEmpty(text: string, node: any, locStart: (node: any) => number): boolean;
    function getNextNonSpaceNonCommentCharacterIndex(text: string, node: any, options: ParserOptions): number;
    function makeString(rawContent: string, enclosingQuote: "'" | '"', unescapeUnnecessaryEscapes: boolean): string;
    function addLeadingComment(node: any, commentNode: any): void;
    function addDanglingComment(node: any, commentNode: any): void;
    function addTrailingComment(node: any, commentNode: any): void;
}

// https://github.com/prettier/prettier/blob/master/src/doc/index.js
export namespace doc {
    namespace builders {
        type Doc =
            | string
            | Align
            | BreakParent
            | Concat
            | Fill
            | Group
            | IfBreak
            | Indent
            | Line
            | LineSuffix
            | LineSuffixBoundary
            | Trim
            | Cursor;

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

        interface IfBreak {
            type: 'if-break';
            breakContents: Doc;
            flatContents: Doc;
        }

        interface Indent {
            type: 'indent';
            contents: Doc;
        }

        interface Line {
            type: 'line';
            soft?: boolean;
            hard?: boolean;
            literal?: boolean;
        }

        interface LineSuffix {
            type: 'line-suffix';
            contents: Doc;
        }

        interface LineSuffixBoundary {
            type: 'line-suffix-boundary';
        }

        interface Trim {
            type: 'trim';
        }

        interface Cursor {
            type: 'cursor';
            placeholder: symbol;
        }

        function addAlignmentToDoc(doc: Doc, size: number, tabWidth: number): Doc;
        function align(n: Align['n'], contents: Doc): Align;
        const breakParent: BreakParent;
        function concat(contents: Doc[]): Concat;
        function conditionalGroup(states: Doc[], opts?: { shouldBreak: boolean }): Group;
        function dedent(contents: Doc): Align;
        function dedentToRoot(contents: Doc): Align;
        function fill(parts: Doc[]): Fill;
        function group(contents: Doc, opts?: { shouldBreak: boolean }): Group;
        const hardline: Concat;
        function ifBreak(breakContents: Doc, flatContents: Doc): IfBreak;
        function indent(contents: Doc): Indent;
        function join(separator: Doc, parts: Doc[]): Concat;
        const line: Line;
        function lineSuffix(contents: Doc): LineSuffix;
        const lineSuffixBoundary: LineSuffixBoundary;
        const literalline: Concat;
        function markAsRoot(contents: Doc): Align;
        const softline: Line;
        const trim: Trim;
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
            cursorNodeStart?: number;
            cursorNodeText?: string;
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
            parentParser?: string;
            embeddedInHtml: boolean;
        }
    }
    namespace utils {
        function isEmpty(doc: Doc): boolean;
        function isLineNext(doc: Doc): boolean;
        function willBreak(doc: Doc): boolean;
        function traverseDoc(
            doc: Doc,
            onEnter?: (doc: Doc) => void | boolean,
            onExit?: (doc: Doc) => void,
            shouldTraverseConditionalGroups?: boolean,
        ): void;
        function mapDoc<T>(doc: Doc, callback: (doc: Doc) => T): T;
        function propagateBreaks(doc: Doc): void;
        function removeLines(doc: Doc): Doc;
        function stripTrailingHardline(doc: Doc): Doc;
    }
}
