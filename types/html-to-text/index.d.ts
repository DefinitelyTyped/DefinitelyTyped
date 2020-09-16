// Type definitions for html-to-text 5.1
// Project: https://github.com/werk85/node-html-to-text
// Definitions by: Eryk Warren <https://github.com/erykwarren>
//                 Carson Full <https://github.com/CarsonF>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Convert html string to text
 *
 * @param str String of html content
 * @param options Hash of options
 *
 * @return String with the converted text.
 */
export function fromString(str: string, options?: HtmlToTextOptions): string;

export interface HtmlToTextOptions {
    /**
     * Defines after how many chars a line break should follow in p elements.
     * Set to null or false to disable word-wrapping. Default: 80
     */
    wordwrap?: number | false | null;

    /**
     *  Allows to select certain tables by the class or id attribute from the HTML
     *  document. This is necessary because the majority of HTML E-Mails uses a
     *  table based layout. Prefix your table selectors with an . for the class
     *  and with a # for the id attribute. All other tables are ignored.
     *  You can assign true to this attribute to select all tables. Default: []
     */
    tables?: string[] | boolean;

    /**
     *  By default links are translated the following
     *      <a href='link'>text</a> => becomes => text [link].
     *  If this option is set to true and link and text are the same,
     *  [link] will be hidden and only text visible.
     */
    hideLinkHrefIfSameAsText?: boolean;

    /**
     *  Allows you to specify the server host for href attributes, where the links start at the root (/).
     *  For example, linkHrefBaseUrl = 'http://asdf.com' and <a href='/dir/subdir'>...</a>
     *  the link in the text will be http://asdf.com/dir/subdir.
     *  Keep in mind that linkHrefBaseUrl shouldn't end with a /.
     */
    linkHrefBaseUrl?: string;

    /**
     *  Ignore all document links if true.
     */
    ignoreHref?: boolean;

    /**
     *  Ignore all document images if true.
     */
    ignoreImage?: boolean;

    /**
     *  Dont print brackets around the link if true
     */
    noLinkBrackets?: boolean;

    /**
     *  By default, any newlines \n in a block of text will be removed.
     *  If true, these newlines will not be removed.
     */
    preserveNewlines?: boolean;

    /**
     *  By default, headings (<h1>, <h2>, etc) are upper-cased.
     *  Set to false to leave headings as they are.
     */
    uppercaseHeadings?: boolean;

    /**
     *  By default, paragraphs are converted with two newlines (\n\n).
     *  Set to true to convert to a single newline.
     */
    singleNewLineParagraphs?: boolean;

    /**
     * defines the tags whose text content will be captured from the html.
     * All content will be captured below the baseElement tags and added to the
     * resulting text output. This option allows the user to specify an array
     * of elements as base elements using a single tag with css class and id
     * parameters e.g. `[p.class1.class2#id1#id2, p.class1.class2#id1#id2]`.
     * Default: `"body"`
     */
    baseElement?: string | string[];

    /**
     * convert the entire document if we don't find the tag we're looking for
     * if true
     */
    returnDomByDefault?: boolean;

    /**
     * defines the text decoding options given to `he.decode`
     * For more information see the [he](https://github.com/mathiasbynens/he) module
     */
    decodeOptions?: {
        isAttributeValue: boolean;
        strict: boolean;
    };

    /**
     * describes how to wrap long words
     */
    longWordSplit?: {
        /**
         * an array containing the characters that may be wrapped on.
         * These are used in order.
         */
        wrapCharacters: string[];
        /**
         * defines whether to break long words on the limit if true.
         */
        forceWrapOnLimit: boolean;
    };

    /**
     * Customize the formatting of individual element types.
     */
    format?: Formatters;

    /**
     * defines the string that is used as item prefix for unordered lists `<ol>`.
     * Default: ' * '
     */
    unorderedListItemPrefix?: string;
}

export interface Formatters {
    text?: LeafFormatter;
    image?: LeafFormatter;
    lineBreak?: Formatter;
    paragraph?: Formatter;
    anchor?: Formatter;
    blockquote?: Formatter;
    heading?: Formatter;
    table?: Formatter;
    orderedList?: Formatter;
    unorderedList?: Formatter;
    listItem?: Formatter;
    horizontalLine?: Formatter;
}

export type LeafFormatter<T = any> = (
    el: T,
    options: HtmlToTextOptions
) => string;

export type Formatter<T = any> = (
    el: T,
    walk: (dom: any[], options: HtmlToTextOptions) => string,
    options: HtmlToTextOptions
) => string;
