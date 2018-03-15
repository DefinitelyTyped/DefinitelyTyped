// Type definitions for prettier 1.10
// Project: https://github.com/prettier/prettier
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export type AST = any;
export type Doc = any; // https://github.com/prettier/prettier/blob/master/commands.md
export type FastPath = any; // https://github.com/prettier/prettier/blob/master/src/common/fast-path.js

export type BuiltInParser = (text: string, options?: any) => AST;
export type BuiltInParserName =
    | 'babylon'
    | 'flow'
    | 'typescript'
    | 'postcss' // deprecated
    | 'css'
    | 'less'
    | 'scss'
    | 'json'
    | 'graphql'
    | 'markdown'
    | 'vue';

export type CustomParser = (text: string, parsers: Record<BuiltInParserName, BuiltInParser>, options: Options) => AST;

export interface Options {
    /**
     * Specify the line length that the printer will wrap on.
     */
    printWidth?: number;
    /**
     * Specify the number of spaces per indentation-level.
     */
    tabWidth?: number;
    /**
     * Indent lines with tabs instead of spaces
     */
    useTabs?: boolean;
    /**
     * Print semicolons at the ends of statements.
     */
    semi?: boolean;
    /**
     * Use single quotes instead of double quotes.
     */
    singleQuote?: boolean;
    /**
     * Print trailing commas wherever possible.
     */
    trailingComma?: 'none' | 'es5' | 'all';
    /**
     * Print spaces between brackets in object literals.
     */
    bracketSpacing?: boolean;
    /**
     * Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
     */
    jsxBracketSameLine?: boolean;
    /**
     * Format only a segment of a file.
     */
    rangeStart?: number;
    /**
     * Format only a segment of a file.
     */
    rangeEnd?: number;
    /**
     * Specify which parser to use.
     */
    parser?: BuiltInParserName | CustomParser;
    /**
     * Specify the input filepath. This will be used to do parser inference.
     */
    filepath?: string;
    /**
     * Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file.
     * This is very useful when gradually transitioning large, unformatted codebases to prettier.
     */
    requirePragma?: boolean;
    /**
     * Prettier can insert a special @format marker at the top of files specifying that
     * the file has been formatted with prettier. This works well when used in tandem with
     * the --require-pragma option. If there is already a docblock at the top of
     * the file then this option will add a newline to it with the @format marker.
     */
    insertPragma?: boolean;
    /**
     * By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer.
     * In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out.
     */
    proseWrap?:
        | boolean // deprecated
        | 'always'
        | 'never'
        | 'preserve';
    /**
     * Include parentheses around a sole arrow function parameter.
     */
    arrowParens?: 'avoid' | 'always';
    /**
     * The plugin API is in a beta state.
     */
    plugins?: Array<string | Plugin>;
}

export interface Plugin {
    languages: SupportLanguage;
    parsers: { [parserName: string]: Parser };
    printers: { [astFormat: string]: Printer };
}

export interface Parser {
    parse: (text: string, parsers: { [parserName: string]: Parser }, options: object) => AST;
    astFormat: string;
}

export interface Printer {
    print(
        path: FastPath,
        options: object,
        print: (path: FastPath) => Doc,
    ): Doc;
    embed(
        path: FastPath,
        print: (path: FastPath) => Doc,
        textToDoc: (text: string, options: object) => Doc,
        options: object,
    ): Doc | null;
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
 * As you repeatedly call `resolveConfig`, the file system structure will be cached for performance. This function will clear the cache.
 * Generally this is only needed for editor integrations that know that the file system has changed since the last format took place.
 */
export function clearConfigCache(): void;

export interface SupportLanguage {
    name: string;
    since: string;
    parsers: string[];
    group?: string;
    tmScope: string;
    aceMode: string;
    codemirrorMode: string;
    codemirrorMimeType: string;
    aliases?: string[];
    extensions: string[];
    filenames?: string[];
    linguistLanguageId: number;
    vscodeLanguageIds: string[];
}

export interface SupportOption {
    since: string;
    type: 'int' | 'boolean' | 'choice' | 'path';
    deprecated?: string;
    redirect?: SupportOptionRedirect;
    description: string;
    oppositeDescription?: string;
    default: SupportOptionValue;
    range?: SupportOptionRange;
    choices?: SupportOptionChoice;
}

export interface SupportOptionRedirect {
    options: string;
    value: SupportOptionValue;
}

export interface SupportOptionRange {
    start: number;
    end: number;
    step: number;
}

export interface SupportOptionChoice {
    value: boolean | string;
    description?: string;
    since?: string;
    deprecated?: string;
    redirect?: SupportOptionValue;
}

export type SupportOptionValue = number | boolean | string;

export interface SupportInfo {
    languages: SupportLanguage[];
    options: SupportOption[];
}

/**
 * Returns an object representing the parsers, languages and file types Prettier supports.
 * If `version` is provided (e.g. `"1.5.0"`), information for that version will be returned,
 * otherwise information for the current version will be returned.
 */
export function getSupportInfo(version?: string): SupportInfo;

/**
 * `version` field in `package.json`
 */
export const version: string;
