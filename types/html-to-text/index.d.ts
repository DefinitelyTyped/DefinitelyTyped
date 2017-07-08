// Type definitions for html-to-text v1.4.0
// Project: https://github.com/werk85/node-html-to-text
// Definitions by: Eryk Warren <https://github.com/erykwarren/>
// Definitions: https://github.com/DefinitelyTyped/html-to-text

interface HtmlToTextStatic {
    /**
     * Convert html content of file to text
     *
     * @param file String with the path of the html file to convert
     * @param options Hash of options
     * @param callback Function with signature function(err, result) called when the conversion is completed
     *
     */
    fromFile(file: string, options: HtmlToTextOptions, callback: Function): void;
    
    /**
     * Convert html content of file to text with the default options.
     *
     * @param file String with the path of the html file to convert
     * @param callback Function with signature function(err, result) called when the conversion is completed
     *
     */
    fromFile(file: string, callback: Function): void;
    
    /**
     * Convert html string to text
     *
     * @param file String with the path of the html file to convert
     * @param options Hash of options
     *
     * @return String with the converted text.
     */
    fromString(str: string, options?: HtmlToTextOptions): string;
}

interface HtmlToTextOptions {
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
     *   You can assign true to this attribute to select all tables. Default: []     
     */
    tables?: Array<string> | boolean;

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
}

declare module "html-to-text" {
    export = htmlToText;
}

declare var htmlToText: HtmlToTextStatic;
