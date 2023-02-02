// Type definitions for @mozilla/readability 0.4
// Project: https://github.com/mozilla/readability
// Definitions by: Charles Vandevoorde <https://github.com/charlesvdv>, Alex Wendland <https://github.com/awendland>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A standalone version of the readability library used for Firefox Reader View.
 *
 * Note that isProbablyReaderable() was moved into a separate file in https://github.com/mozilla/readability/commit/2620542dd1e8380220d82afa97a2c283ae636e40
 * and therefore is no longer part of the Readability class.
 */
export class Readability {
    /**
     * ## Usage on the web
     *
     * To parse a document, you must create a new Readability object from a
     * DOM document object, and then call parse(). Here's an example:
     *
     * ```js
     * var article = new Readability(document).parse();
     * ```
     *
     * If you're using Readability on the web, you will likely be able to
     * use a document reference from elsewhere (e.g. fetched via XMLHttpRequest,
     * in a same-origin <iframe> you have access to, etc.).
     *
     * ## Usage from node.js
     *
     * In node.js, you won't generally have a DOM document object. To obtain one, you can use external
     * libraries like [jsdom](https://github.com/tmpvar/jsdom). While this repository contains a parser of
     * its own (`JSDOMParser`), that is restricted to reading XML-compatible markup and therefore we do
     * not recommend it for general use.
     *
     * If you're using `jsdom` to create a DOM object, you should ensure that the page doesn't run (page)
     * scripts (avoid fetching remote resources etc.) as well as passing it the page's URI as the `url`
     * property of the `options` object you pass the `JSDOM` constructor.
     *
     * ```js
     * var JSDOM = require('jsdom').JSDOM;
     * var doc = new JSDOM("<body>Here's a bunch of text</body>", {
     *   url: "https://www.example.com/the-page-i-got-the-source-from",
     * });
     * let reader = new Readability(doc.window.document);
     * let article = reader.parse();
     * ```
     */
    constructor(doc: Document, options?: Options);

    /**
     * Runs readability.
     *
     * ## Workflow:
     *
     *  1. Prep the document by removing script tags, css, etc.
     *  2. Build readability's DOM tree.
     *  3. Grab the article content from the current dom tree.
     *  4. Replace the current DOM tree with the new one.
     *  5. Read peacefully.
     *
     * ## Additional notes:
     *
     * Readability's parse() works by modifying the DOM. This removes some
     * elements in the web page. You could avoid this by passing the clone
     * of the document object while creating a Readability object.
     *
     * ```js
     * var documentClone = document.cloneNode(true);
     * var article = new Readability(documentClone).parse();
     * ```
     *
     * The response will be null if the processing failed (https://github.com/mozilla/readability/blob/52ab9b5c8916c306a47b2119270dcdabebf9d203/Readability.js#L2038)
     */
    parse(): ParseResult | null;
}

export interface Options {
    /**
     * Control whether log messages are sent to the console
     */
    debug?: boolean | undefined;

    /**
     * Set a maximum size on the documents that will be processed. This size is
     * checked before any parsing operations occur. If the number of elements in
     * the document exceeds this threshold then an Error will be thrown.
     *
     * See implementation details at https://github.com/mozilla/readability/blob/52ab9b5c8916c306a47b2119270dcdabebf9d203/Readability.js#L2019
     */
    maxElemsToParse?: number | undefined;

    nbTopCandidates?: number | undefined;

    /**
     * Minimum number of characters in the extracted textContent in order to
     * consider the article correctly identified. If the threshold is not met then
     * the extraction process will automatically run again with different flags.
     *
     * See implementation details at https://github.com/mozilla/readability/blob/52ab9b5c8916c306a47b2119270dcdabebf9d203/Readability.js#L1208
     *
     * Changed from wordThreshold in https://github.com/mozilla/readability/commit/3ff9a166fb27928f222c4c0722e730eda412658a
     */
    charThreshold?: number | undefined;

    /**
     * parse() removes the class="" attribute from every element in the given
     * subtree, except those that match CLASSES_TO_PRESERVE and
     * the classesToPreserve array from the options object.
     */
    classesToPreserve?: string[] | undefined;

    /**
     * By default Readability will strip all classes from the HTML elements in the
     * processed article. By setting this to `true` the classes will be retained.
     *
     * This is a blanket alternative to `classesToPreserve`.
     *
     * Added in https://github.com/mozilla/readability/commit/2982216913af2c66b0690e88606b03116553ad92
     */

    keepClasses?: boolean | undefined;
}

export interface ParseResult {
    /** Article title */
    title: string;
    /** Author metadata */
    byline: string;
    /** Content direction */
    dir: string;
    /** HTML string of processed article content */
    content: string;
    /** non-HTML version of `content`  */
    textContent: string;
    /** Length of an article, in characters */
    length: number;
    /** Article description, or short excerpt from the content */
    excerpt: string;
    /** Article site name */
    siteName: string;
}
