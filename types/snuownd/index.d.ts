export as namespace SnuOwnd;

// These definitions use some utility classes which shouldn't be exported
export {};

// Constructs a type from `T` where all properties additionally accept `null`
type NullableValues<T> = { [K in keyof T]: T[K] | null };

/** A string buffer wrapper because JavaScript doesn't have mutable strings. */
export class Buffer {
    s: string;
    /** @param str Optional string to initialize the Buffer with. */
    constructor(str?: string);
    truncate(size: number): void;
}

// #region Flags

// #region HTML processing flags
export const HTML_SKIP_HTML = 1;
export const HTML_SKIP_STYLE = 2;
export const HTML_SKIP_IMAGES = 4;
export const HTML_SKIP_LINKS = 8;
export const HTML_EXPAND_TABS = 16;
export const HTML_SAFELINK = 32;
export const HTML_TOC = 64;
export const HTML_HARD_WRAP = 128;
export const HTML_USE_XHTML = 256;
export const HTML_ESCAPE = 512;
export const HTML_ALLOW_ELEMENT_WHITELIST = 1024;
// #endregion HTML processing flags

// #region Markdown processing flags
export const MKDEXT_NO_INTRA_EMPHASIS = 1;
export const MKDEXT_TABLES = 2;
export const MKDEXT_FENCED_CODE = 4;
export const MKDEXT_AUTOLINK = 8;
export const MKDEXT_STRIKETHROUGH = 16;
// export const MKDEXT_LAX_HTML_BLOCKS = 32; // removed
export const MKDEXT_SPACE_HEADERS = 64;
export const MKDEXT_SUPERSCRIPT = 128;
export const MKDEXT_LAX_SPACING = 256;
export const MKDEXT_NO_EMAIL_AUTOLINK = 512;
// #endregion Markdown processing flags

// Snudown processing flags
export const SD_AUTOLINK_SHORT_DOMAINS = 1;

// Default flag sets
export const DEFAULT_BODY_FLAGS = 805; // HTML_SKIP_HTML | HTML_SKIP_IMAGES | HTML_SAFELINK | HTML_ESCAPE | HTML_USE_XHTML;
export const DEFAULT_WIKI_FLAGS = 1825; // HTML_SKIP_HTML | HTML_SAFELINK | HTML_ALLOW_ELEMENT_WHITELIST | HTML_ESCAPE | HTML_USE_XHTML;

// #endregion Flags

// Default element and attribute allowlists
export const DEFAULT_HTML_ELEMENT_WHITELIST: string[];
export const DEFAULT_HTML_ATTR_WHITELIST: string[];

// #region Enums

// Constants used by the autolink callback for identifying the type of link
/** used internally when it is not an autolink */
export const MKDA_NOT_AUTOLINK = 0;
/** normal http/http/ftp/mailto/etc link */
export const MKDA_NORMAL = 1;
/** e-mail link without explit mailto: */
export const MKDA_EMAIL = 2;

/** The type of an autolink being processed by the renderer */
export type MKDAAutolinkType = 1 | 2;

// #endregion

// #region Render callbacks

// Non-exported interface listing all possible callback properties. In practice
// there is never any requirement that all these callbacks are present, so this
// is passed through `NullableValues<T>` and/or `Partial<T>` before being used.
interface AllCallbacks {
    /**
     * Renders a code block. Syntax highlighting specific to lanugage may be
     * performed here.
     * @param out The output string buffer to append to.
     * @param text The input text.
     * @param language The name of the code langage.
     * @param context A renderer specific context object.
     */
    blockcode(out: Buffer, text: Buffer, language: Buffer, context?: RenderState): void;
    /**
     * Renders a blockquote.
     * @param out The output string buffer to append to.
     * @param text The input text.
     * @param context A renderer specific context object.
     */
    blockquote(out: Buffer, text: Buffer, context?: RenderState): void;
    /**
     * Renders a block of HTML code.
     * @param out The output string buffer to append to.
     * @param text The input text.
     * @param context A renderer specific context object.
     */
    blockhtml(out: Buffer, text: Buffer, context?: RenderState): void;
    /**
     * Renders a header.
     * @param out The output string buffer to append to.
     * @param text The input text.
     * @param level The header level.
     * @param context A renderer specific context object.
     */
    header(out: Buffer, text: Buffer, level: number, context?: RenderState): void;
    /**
     * Renders a horizontal rule.
     * @param out The output string buffer to append to.
     * @param context A renderer specific context object.
     */
    hrule(out: Buffer, context?: RenderState): void;
    /**
     * Renders a list.
     *
     * This method handles the list wrapper, which in terms of HTML would be
     * <ol> or <ul>. This method is not responsible for handling list
     * elements, all such processing should already have occured on text
     * pased to the method. All that it is intended to do is to wrap the
     * text parameter in anything needed.
     *
     * @example
     * ```js
     * out.s += "<ul>" + text.s + "</ul>"
     * ```
     *
     * @param out The output string buffer to append to.
     * @param text The input that goes inside the list.
     * @param flags A bitfield holding a portion of the render state. The only
     * bit that this should be concerned with is MKD_LIST_ORDERED
     * @param context A renderer specific context object.
     */
    list(out: Buffer, text: Buffer, flags: number, context?: RenderState): void;
    /**
     * Renders a list.
     *
     * @example Wraps the text in a list element.
     * ```js
     * out.s += "<li>;" + text.s + "</li>"
     * ```
     *
     * @param out The output string buffer to append to.
     * @param text The contents of the list element.
     * @param flags A bitfield holding a portion of the render state. The only
     * bit that this should be concerned with is MKD_LI_BLOCK.
     * @param context A renderer specific context object.
     */
    listitem(out: Buffer, text: Buffer, flags: number, context?: RenderState): void;
    /**
     * Renders a paragraph.
     *
     * @example
     * ```js
     * out.s += "<p>" + text.s + "</p>";
     * ```
     *
     * @param out The output string buffer to append to.
     * @param text The input text.
     * @param context A renderer specific context object.
     */
    paragraph(out: Buffer, text: Buffer, context?: RenderState): void;
    /**
     * Renders a table.
     *
     * @example
     * ```js
     * out.s += "<table><thead>";
     * out.s += header.s;
     * out.s += "</thead><tbody>";
     * out.s += body.s;
     * out.s += "</tbody></table>";
     * ```
     *
     * @param out The output string buffer to append to.
     * @param head The table header.
     * @param body The table body.
     * @param context A renderer specific context object.
     */
    table(out: Buffer, head: Buffer, body: Buffer, context?: RenderState): void;
    /**
     * Renders a table row.
     *
     * @example
     * ```js
     * out.s += "<tr>" + text.s + "</tr>";
     * ```
     *
     * @param out The output string buffer to append to.
     * @param text The input text.
     * @param context A renderer specific context object.
     */
    table_row(out: Buffer, text: Buffer, context?: RenderState): void;
    /**
     * Renders a table cell.
     *
     * @example
     * ```js
     * out.s += "<td>" + text.s + "</td>";
     * ```
     *
     * @param out The output string buffer to append to.
     * @param text The input text.
     * @param flags A bit filed indicating a portion of the output state.
     * Relevant bits are: MKD_TABLE_HEADER, MKD_TABLE_ALIGN_CENTER.
     * MKD_TABLE_ALIGN_L, and MKD_TABLE_ALIGN_R.
     * @param context A renderer specific context object.
     */
    table_cell(out: Buffer, text: Buffer, flags: number, context?: RenderState): void;
    /**
     * Renders a link that was autodetected.
     *
     * @example
     * ```js
     * out.s += "<a href=\""+ text.s + "\">" + text.s + "</a>";
     * ```
     *
     * @param out The output string buffer to append to.
     * @param text The address being linked to.
     * @param type Equal to {@linkcode SnuOwnd.MKDA_NORMAL} or {@linkcode SnuOwnd.MKDA_EMAIL}
     * @param context A renderer specific context object.
     * @returns Whether or not the tag was rendered.
     */
    autolink(out: Buffer, text: Buffer, type: SnuOwnd.MKDAAutolinkType, context?: RenderState): boolean;
    /**
     * Renders inline code.
     *
     * @param out The output string buffer to append to.
     * @param text The text being wrapped.
     * @param context A renderer specific context object.
     * @returns Whether or not the tag was rendered.
     */
    codespan(out: Buffer, text: Buffer, context?: RenderState): boolean;
    /**
     * Renders text with double emphasis. Default is equivalent to the HTML
     * <strong> tag.
     *
     * @param out The output string buffer to append to.
     * @param text The text being wrapped.
     * @param context A renderer specific context object.
     * @returns Whether or not the tag was rendered.
     */
    double_emphasis(out: Buffer, text: Buffer, context?: RenderState): boolean;
    /**
     * Renders text with single emphasis. Default is equivalent to the HTML <em>
     * tag.
     *
     * @param out The output string buffer to append to.
     * @param text The text being wrapped.
     * @param context A renderer specific context object.
     * @returns Whether or not the tag was rendered.
     */
    emphasis(out: Buffer, text: Buffer, context?: RenderState): boolean;
    /**
     * Renders an image.
     *
     * @example
     * ```js
     * out.s = "<img src=\"" + link.s + "\" title=\"" + title.s + "\"  alt=\"" + alt.s + "\"/>";"
     * ```
     *
     * @param out The output string buffer to append to.
     * @param link The address of the image.
     * @param title Title text for the image
     * @param alt Alt text for the image
     * @param context A renderer specific context object.
     * @returns Whether or not the tag was rendered.
     */
    image(out: Buffer, link: Buffer, title: Buffer, alt: Buffer, context?: RenderState): boolean;
    /**
     * Renders line break.
     *
     * @example
     * ```js
     * out.s += "<br/>";
     * ```
     *
     * @param out The output string buffer to append to.
     * @param context A renderer specific context object.
     * @returns Whether or not the tag was rendered.
     */
    linebreak(out: Buffer, context?: RenderState): boolean;
    /**
     * Renders a link.
     *
     * @example
     * ```js
     * out.s = "<a href=\"" + link.s + "\" title=\"" + title.s + "\">" + content.s + "</a>";
     * ```
     *
     * @param out The output string buffer to append to.
     * @param link The link address.
     * @param title Title text for the link.
     * @param content Link text.
     * @param context A renderer specific context object.
     * @returns Whether or not the tag was rendered.
     */
    link(out: Buffer, link: Buffer, title: Buffer, content: Buffer, context?: RenderState): boolean;
    /**
     * Copies and potentially escapes some HTML.
     *
     * @param out The output string buffer to append to.
     * @param text The input text.
     * @param context A renderer specific context object.
     * @returns Whether or not the tag was rendered.
     */
    raw_html_tag(out: Buffer, text: Buffer, context?: RenderState): boolean;
    /**
     * Renders text with triple emphasis. Default is equivalent to both the <em> and <strong> HTML tags.
     *
     * @param out The output string buffer to append to.
     * @param text The text being wrapped.
     * @param context A renderer specific context object.
     * @returns Whether or not the tag was rendered.
     */
    triple_emphasis(out: Buffer, text: Buffer, context?: RenderState): boolean;
    /**
     * Renders text crossd out.
     *
     * @param out The output string buffer to append to.
     * @param text The text being wrapped.
     * @param context A renderer specific context object.
     * @returns Whether or not the tag was rendered.
     */
    strikethrough(out: Buffer, text: Buffer, context?: RenderState): boolean;
    /**
     * Renders text as superscript.
     *
     * @param out The output string buffer to append to.
     * @param text The text being wrapped.
     * @param context A renderer specific context object.
     * @returns Whether or not the tag was rendered.
     */
    superscript(out: Buffer, text: Buffer, context?: RenderState): boolean;
    /**
     * Escapes an HTML entity.
     *
     * @param out The output string buffer to append to.
     * @param text The text being wrapped.
     * @param context A renderer specific context object.
     */
    entity(out: Buffer, text: Buffer, context?: RenderState): void;
    /**
     * Renders plain text.
     *
     * @param out The output string buffer to append to.
     * @param text The text being rendered.
     * @param context A renderer specific context object.
     */
    normal_text(out: Buffer, text: Buffer, context?: RenderState): void;
    /**
     * Creates opening boilerplate for a table of contents.
     *
     * @param out The output string buffer to append to.
     * @param context A renderer specific context object.
     */
    doc_header(out: Buffer, context?: RenderState): void;
    /**
     * Creates closing boilerplate for a table of contents.
     *
     * @param out The output string buffer to append to.
     * @param context A renderer specific context object.
     */
    doc_footer(out: Buffer, context?: RenderState): void;
}

/**
 * A set of callbacks used by {@linkcode Renderer}s to render various
 * elements.
 */
export type Callbacks = NullableValues<AllCallbacks>;

/**
 * Create a Callbacks object with the given callback table.
 * @param callbacks A table of callbacks to place into a callbacks object.
 * @returns A callbacks object holding the provided callbacks.
 */
export function createCustomCallbacks(callbacks?: Partial<Callbacks>): Callbacks;

/**
 * Produce a callbacks object that matches Reddit's output.
 * @returns A callbacks object that matches Reddit's output.
 */
export function getRedditCallbacks(): Callbacks;

/**
 * Produce a callbacks object for rendering a table of contents.
 * @returns A callbacks object for rendering a table of contents.
 */
export function getTocCallbacks(): Callbacks;

// #endregion Render callbacks

// #region Render state

export interface RenderState {
    nofollow: number;
    target?: string | null;
    tocData: {
        headerCount: number;
        currentLevel: number;
        levelOffset: number;
    };
    toc_id_prefix: null | string;
    html_element_whitelist?: string[];
    html_attr_whitelist?: string[];
    flags: number;
    link_attributes(out: Buffer, url: Buffer, options: RenderState): void;
}

export function defaultRenderState(): Required<RenderState>;

// #endregion Render state

// #region Renderer

/** An object containing rendering configuration. */
export interface Renderer {
    callbacks: Callbacks;
    context: RenderState;
}

/**
 * Instantiates a custom Renderer object.
 *
 * @param callbacks The callbacks object to use for the renderer.
 * @param context Renderer specific context information.
 */
export function createCustomRenderer(callbacks: Partial<Callbacks>, context?: RenderState): Renderer;

/**
 * Produces a renderer object that will match Reddit's output.
 * @param flags A bitfield containing flags specific to the reddit HTML
 * renderer. Passing undefined, null, or null value will produce reddit exact
 * output.
 * @returns A renderer object that will match Reddit's output.
 */
export function getRedditRenderer(flags?: number): Renderer;

/**
 * Produces a renderer object that will match Reddit's for a table of
 * contents.
 * @returns A renderer object that will match Reddit's output.
 */
export function getTocRenderer(): Renderer;

// #endregion Renderer

// #region Parser

/** A Markdown parser object. */
export interface Markdown {
    spanStack: Buffer[];
    blockStack: Buffer[];
    extension: number;
    context: RenderState;
    callbacks: Callbacks;
    inLinkBody: number;
    activeChars: Partial<Record<string, number>>;
    refs: Partial<
        Record<string, {
            id: string;
            link: Buffer;
            title: Buffer;
        }>
    >;
    nestingLimit: number;
    maxTableCols: number;
    /**
     * Render markdown code to HTML.
     * @param source Markdown code.
     * @returns HTML code.
     */
    render(source: string): string;
}

/**
 * Create a parser object using the given configuration parameters.
 *
 * To get a Reddit equivelent configuration, pass no arguments.
 *
 * @param renderer A renderer object.
 * @param extensions A series of OR'd extension flags. (Extension flags start
 * with `MKDEXT_`)
 * @param nestingLimit The maximum depth to which inline elements can be nested.
 * @return A configured markdown object.
 */
export function getParser(
    renderer?: Renderer,
    extensions?: number,
    nestingLimit?: number,
    columnLimit?: number,
): Markdown;

// #endregion Markdown
