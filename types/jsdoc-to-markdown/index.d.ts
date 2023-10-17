export type StyleListFormat = "none" | "grouped" | "table" | "dl";
export type RenderListFormat = "list" | "table";
export type MemberIndexFormat = "grouped" | "list";

export interface RenderOptions {
    /**
     * Raw template data to use. Useful when you already have template data, obtained from .getTemplateData.
     * Either files, source or data must be supplied.
     */
    data?: object[] | undefined;
    /**
     * The template the supplied documentation will be rendered into.
     * Use the default or supply your own template for full control over the output.
     */
    template?: string | undefined;
    /**
     * The initial heading depth.
     * For example, with a value of 2 the top-level markdown headings look like "## The heading".
     */
    "heading-depth"?: number | undefined;
    /**
     * Specifies the default language used in '@example' blocks (for syntax-highlighting purposes).
     * In gfm mode, each '@example' is wrapped in a fenced-code block. Example usage: --example-lang js.
     * Use the special value none for no specific language.
     * While using this option, you can override the supplied language
     * for any '@example' by specifying the @lang subtag,
     * e.g @example @lang hbs. Specifying @example @lang off will disable code blocks for that example.
     */
    "example-lang"?: string | undefined;
    /**
     * Use an installed package containing helper and/or partial overrides.
     */
    plugin?: string | string[] | undefined;
    /**
     * handlebars helper files to override or extend the default set.
     */
    helper?: string | string[] | undefined;
    /**
     * handlebars partial files to override or extend the default set.
     */
    partial?: string | string[] | undefined;
    /**
     * Format identifier names in the code style,
     * (i.e. format using backticks or <code></code>).
     */
    "name-format"?: string | undefined;
    /**
     * By default, dmd generates github-flavoured markdown.
     * Not all markdown parsers render gfm correctly.
     * If your generated docs look incorrect on sites other than Github
     * (e.g. npmjs.org) try enabling this option to disable Github-specific syntax.
     */
    "no-gfm"?: boolean | undefined;
    /**
     * Put <hr> breaks between identifiers. Improves readability on bulky docs.
     */
    separators?: boolean | undefined;
    "module-index-format"?: StyleListFormat | undefined;
    "global-index-format"?: StyleListFormat | undefined;
    /**
     * Two options to render parameter lists: 'list' or 'table' (default).
     * Table format works well in most cases but switch to list if things begin to look crowded / squashed.
     */
    "param-list-format"?: RenderListFormat | undefined;
    "property-list-format"?: RenderListFormat | undefined;
    "member-index-format"?: MemberIndexFormat | undefined;
}

export interface JsdocOptions {
    /**
     * By default results are cached to speed up repeat invocations.
     * Set to true to disable this.
     */
    "no-cache"?: boolean | undefined;
    /**
     * One or more filenames to process.
     * Accepts globs (e.g. *.js). Either files, source or data must be supplied.
     */
    files: string | string[];
    /**
     * A string containing source code to process.
     * Either files, source or data must be supplied.
     */
    source?: string | undefined;
    /**
     * The path to the jsdoc configuration file.
     *  Default: path/to/jsdoc/conf.json.
     */
    configure?: string | undefined;
}

/**
 * Returns markdown documentation from jsdoc-annotated source code.
 */
export function render(options: RenderOptions | JsdocOptions): Promise<string>;

/**
 * Sync version of render.
 */
export function renderSync(options: RenderOptions | JsdocOptions): string;

/**
 * Returns the template data (jsdoc-parse output) which is fed into the output template (dmd).
 */
export function getTemplateData(options: JsdocOptions): Promise<object[]>;

/**
 * Sync version of getTemplateData.
 */
export function getTemplateDataSync(options: JsdocOptions): object[];

/**
 * Returns raw data direct from the underlying jsdoc3.
 */
export function getJsdocData(options: JsdocOptions): Promise<object[]>;

/**
 * Sync version of getJsdocData.
 */
export function getJsdocDataSync(options: JsdocOptions): object[];

/**
 * By default, the output of each invocation of the main generation methods (render, getTemplateData etc)
 * is stored in the cache (your system's temporary directory).
 * Future jsdoc2md invocations with the same input options and source code will return the output immediately from cache,
 * making the tool much faster/cheaper. If the input options or source code changes,
 * fresh output will be generated. This method clears the cache,
 * which you should never need to do unless the cache is failing for some reason.
 * On Mac OSX, the system tmpdir clears itself every few days meaning your jsdoc2md cache will also be routinely cleared.
 */
export function clear(): Promise<void>;

/**
 * Returns all jsdoc namepaths found in the supplied source code.
 */
export function getNamepaths(options: JsdocOptions): Promise<object>;
