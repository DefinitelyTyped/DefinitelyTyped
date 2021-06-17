// Type definitions for html-to-text 8.0
// Project: https://github.com/html-to-text/node-html-to-text
// Definitions by: Eryk Warren <https://github.com/erykwarren>
//                 Carson Full <https://github.com/CarsonF>
//                 Chris. Webster <https://github.com/webstech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BlockTextBuilder } from './lib/block-text-builder';

export type compiledFunction = (str: string) => string;

/**
 * Preprocess options, compile selectors into a decision tree,
 * return a function intended for batch processing.
 */
 export function compile(options?: HtmlToTextOptions): compiledFunction;

/**
 * Convert given HTML content to plain text string.
 *
 * @example
 * const { htmlToText } = require('html-to-text');
 * const text = htmlToText('<h1>Hello World</h1>', {
 *   wordwrap: 130
 * });
 * console.log(text); // HELLO WORLD
 */
export function htmlToText(html: string, options?: HtmlToTextOptions): string;
export { htmlToText as convert };

/**
 * @deprecated Import/require `{ htmlToText }` function instead!
 * @see htmlToText
 */
export function fromString(html: string, options?: HtmlToTextOptions): string;

export interface HtmlToTextOptions {
    /**
     * Options for narrowing down to informative parts of HTML document.
     */
    baseElements?: BaseElementsOptions;
    /**
     * Text decoding options given to `he.decode`.
     *
     * For more informations see the [he](https://github.com/mathiasbynens/he) module.
     */
    decodeOptions?: DecodeOptions;
    /**
     * A dictionary with custom formatting functions for specific kinds of elements.
     *
     * Keys are custom string identifiers, values are callbacks.
     */
    formatters?: Record<string, FormatCallback>;
    /**
     * Options for handling complex documents and limiting the output size.
     */
    limits?: LimitsOptions;
    /**
     * Describes how to wrap long words.
     */
    longWordSplit?: LongWordSplitOptions;
    /**
     * By default, any newlines `\n` from the input HTML are dropped.
     *
     * If `true`, these newlines will be preserved in the output.
     */
    preserveNewlines?: boolean;
    /**
     * Instructions for how to render HTML elements based on matched selectors.
     *
     * Use this to (re)define options for new or already supported tags.
     */
    selectors?: SelectorDefinition[];
    /**
     * All characters that are considered whitespace.
     * Default is according to HTML specifications.
     */
    whitespaceCharacters?: string;
    /**
     * After how many chars a line break should follow in `p` elements.
     *
     * Set to `null` or `false` to disable word-wrapping.
     */
    wordwrap?: number | boolean | null;

    /**
     * The following are deprecated options.  See the documentation.
     */

    /**
     * @deprecated. Use baseElements.selectors instead.
     */
    baseElement?: string | string[];

    /**
     *  @deprecated See the documentation.
     */
    hideLinkHrefIfSameAsText?: boolean;
    /**
     *  @deprecated See the documentation.
     */
    linkHrefBaseUrl?: string;
    /**
     *  @deprecated See the documentation.
     */
    ignoreHref?: boolean;
    /**
     *  @deprecated See the documentation.
     */
    ignoreImage?: boolean;
    /**
     *  @deprecated See the documentation.
     */
    noLinkBrackets?: boolean;
    /**
     *  @deprecated See the documentation.
     */
    uppercaseHeadings?: boolean;
    /**
     *  @deprecated See the documentation.
     */
    singleNewLineParagraphs?: boolean;
    /**
     *  @deprecated See the documentation.
     */
    unorderedListItemPrefix?: string;
    /**
     * @deprecated. Use baseElements instead.
     */
    returnDomByDefault?: boolean;
    /**
     * @deprecated. Use selectors with `format: 'dataTable'` instead.
     */
    tables?: string[] | boolean;
    /**
     * @deprecated. Use selectors instead.
     */
    tags?: TagDefinitions;
 }

 /**
  * Options for narrowing down to informative parts of HTML document.
  */
 export interface BaseElementsOptions {
    /**
     * The resulting text output will be composed from the text content of elements
     * matched with these selectors.
     */
    selectors?: string[];
    /**
     * When multiple selectors are set, this option specifies
     * whether the selectors order has to be reflected in the output text.
     *
     * `'selectors'` (default) - matches for the first selector will appear first, etc;
     *
     * `'occurrence'` - all bases will appear in the same order as in input HTML.
     */
    orderBy?: 'selectors' | 'occurrence';
    /**
     * Use the entire document if none of provided selectors matched.
     */
    returnDomByDefault?: boolean;
}

/**
 * Text decoding options given to `he.decode`.
 *
 * For more informations see the [he](https://github.com/mathiasbynens/he) module.
 */
export interface DecodeOptions {
    /**
     * TLDR: If set to `true` - leave attribute values raw, don't parse them as text content.
     */
    isAttributeValue?: boolean;
    /**
     * TLDR: If set to `true` - throw an error on invalid HTML input.
     */
    strict?: boolean;
}

/**
 * Options for handling complex documents and limiting the output size.
 */
export interface LimitsOptions {
    /**
     * ...]
     * A string to put in place of skipped content.
     */
    ellipsis?: string;
    /**
     * Process only this many child nodes of any element.
     *
     * Remaining nodes, if any, will be replaced with ellipsis.
     *
     * Text nodes are counted along with tags.
     *
     * No limit if undefined.
     */
    maxChildNodes?: number;
    /**
     * Only go to a certain depth starting from `Options.baseElement`.
     *
     * Replace deeper nodes with ellipsis.
     *
     * No depth limit if undefined.
     */
    maxDepth?: number;
    /**
     * If the input string is longer than this value - it will be truncated
     * and a message will be sent to `stderr`.
     *
     * Ellipsis is not used in this case.
     */
    maxInputLength?: number;
}

/**
 * Describes how to wrap long words.
 */
export interface LongWordSplitOptions {
    /**
     * Break long words on the `Options.wordwrap` limit when there are no characters to wrap on.
     */
    forceWrapOnLimit?: boolean;
    /**
     * An array containing the characters that may be wrapped on.
     */
    wrapCharacters?: string[];
}

/**
 * Describes how to handle tags matched by a selector.
 */
 export interface SelectorDefinition {
    /**
     * CSS selector. Refer to README for notes on supported selectors etc.
     */
    selector: string;
    /**
     * Identifier of a {@link FormatCallback}, built-in or provided in `Options.formatters` dictionary.
     */
    format?: string;
    /**
     * Options to customize the formatter for this tag.
     */
    options?: FormatOptions;
}

/**
 * Describes how to handle a tag.
 */
export interface TagDefinition {
    /**
     * Identifier of a {@link FormatCallback}, built-in or provided in `Options.formatters` dictionary.
     */
    format?: string;
    /**
     * Options to customize the formatter for this tag.
     */
    options?: FormatOptions;
}

/**
 * Options specific to different formatters ({@link FormatCallback}).
 * This is an umbrella type definition. Each formatter supports it's own subset of options.
 */
export interface FormatOptions {
    /**
     * Number of line breaks to separate previous block from this one.
     *
     * Note that N+1 line breaks are needed to make N empty lines.
     */
    leadingLineBreaks?: number;
    /**
     * Number of line breaks to separate this block from the next one.
     *
     * Note that N+1 line breaks are needed to make N empty lines.
     */
    trailingLineBreaks?: number;
    /**
     * (Only for: `anchor` and `image` formatters.) Server host for link `href` attributes and image `src` attributes
     * relative to the root (the ones that start with `/`).
     *
     * For example, with `baseUrl = 'http://asdf.com'` and `<a href='/dir/subdir'>...</a>`
     * the link in the text will be `http://asdf.com/dir/subdir`.
     *
     * Keep in mind that `baseUrl` should not end with a `/`.
     */
    baseUrl?: string;
    /**
     * (Only for: `anchor` formatter.) By default links are translated in the following way:
     *
     * `<a href='link'>text</a>` => becomes => `text [link]`.
     *
     * If this option is set to `true` and `link` and `text` are the same,
     * `[link]` will be omitted and only `text` will be present.
     */
    hideLinkHrefIfSameAsText?: boolean;
    /**
     * (Only for: `anchor` formatter.) Ignore all links. Only process internal text of anchor tags.
     */
    ignoreHref?: boolean;
    /**
     * (Only for: `anchor` formatter.) Ignore anchor links (where `href='#...'`).
     */
    noAnchorUrl?: boolean;
    /**
     * (Only for: `anchor` formatter.) Don't print brackets around links.
     */
    noLinkBrackets?: boolean;
    /**
     * (Only for: `unorderedList` formatter.) String prefix for each list item.
     */
    itemPrefix?: string;
    /**
     * (Only for: `heading` formatter.) By default, headings (`<h1>`, `<h2>`, etc) are uppercased.
     *
     * Set this to `false` to leave headings as they are.
     */
    uppercase?: boolean;
    /**
     * (Only for: `horizontalLine` formatter.) Length of the `<hr/>` line.
     *
     * If numeric value is provided - it is used.
     * Otherwise, if global `wordwrap` number is provided - it is used.
     * If neither is true, then the fallback value of 40 is used.
     */
    length?: number;
    /**
     * (Only for: `blockquote` formatter.) Trim empty lines from blockquote.
     */
    trimEmptyLines?: boolean;
    /**
     * (Only for: `table`, `dataTable` formatter.) By default, heading cells (`<th>`) are uppercased.
     *
     * Set this to `false` to leave heading cells as they are.
     */
    uppercaseHeaderCells?: boolean;
    /**
     * (Only for: `table`, `dataTable` formatter.) Data table cell content will be wrapped to fit this width
     * instead of global `wordwrap` limit.
     *
     * Set to `undefined` in order to fall back to `wordwrap` limit.
     */
    maxColumnWidth?: number;
    /**
     * (Only for: `table`, `dataTable` formatter.) Number of spaces between data table columns.
     */
    colSpacing?: number;
    /**
     * (Only for: `table`, `dataTable` formatter.) Number of empty lines between data table rows.
     */
    rowSpacing?: number;
}

/**
 * Simplified definition of [htmlparser2](https://github.com/fb55/htmlparser2) Node type.
 *
 * Makes no distinction between elements (tags) and data nodes (good enough for now).
 */
export interface DomNode {
    /**
     * Type of node - "text", "tag", "comment", "script", etc.
     */
    type: string;
    /**
     * Content of a data node.
     */
    data?: string;
    /**
     * Tag name.
     */
    name?: string;
    /**
     * Tag attributes dictionary.
     */
    attribs?: any;
    /**
     * Child nodes.
     * Not optional for typescript use.
     */
    children: DomNode[];
    /**
     * Parent node.
     */
    parent?: DomNode;
}

/**
 * A function to stringify a DOM node.
 */
export type FormatCallback = (elem: DomNode, walk: RecursiveCallback,
    builder: BlockTextBuilder, formatOptions: FormatOptions) => void;

/**
 * A function to process child nodes.
 * Passed into a {@link FormatCallback} as an argument.
 */
export type RecursiveCallback = (nodes: DomNode[], builder: BlockTextBuilder) => void;

/**
 * Type of object passed to tags in the options.
 */
export interface TagDefinitions {
    ''?: TagDefinition;
    a?: TagDefinition;
    article?: TagDefinition;
    aside?: TagDefinition;
    blockquote?: TagDefinition;
    br?: TagDefinition;
    div?: TagDefinition;
    footer?: TagDefinition;
    form?: TagDefinition;
    h1?: TagDefinition;
    h2?: TagDefinition;
    h3?: TagDefinition;
    h4?: TagDefinition;
    h5?: TagDefinition;
    h6?: TagDefinition;
    header?: TagDefinition;
    hr?: TagDefinition;
    img?: TagDefinition;
    main?: TagDefinition;
    nav?: TagDefinition;
    ol?: TagDefinition;
    p?: TagDefinition;
    pre?: TagDefinition;
    table?: TagDefinition;
    ul?: TagDefinition;
    wbr?: TagDefinition;
}
