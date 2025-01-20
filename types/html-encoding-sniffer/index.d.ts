/**
 * Determine the Encoding of a HTML Byte Stream.
 *
 * Implements the HTML Standard's
 * [encoding sniffing algorithm](https://html.spec.whatwg.org/multipage/syntax.html#encoding-sniffing-algorithm)
 * in all its glory. The most interesting part of this is how it pre-scans the first 1024 bytes in order to search
 * for certain `<meta charset>`-related patterns.
 *
 * @param htmlBytes The typed array containing the (X)HTML source text.
 *
 * @return The canonical [encoding name](https://encoding.spec.whatwg.org/#names-and-labels)
 *         for use with the [`whatwg-encoding`](https://github.com/jsdom/whatwg-encoding) or similar package.
 *
 * @example
 * import htmlEncodingSniffer = require("html-encoding-sniffer");
 * import * as fs from "fs";
 *
 * const htmlBytes = fs.readFileSync("./html-page.html");
 * const sniffedEncoding = htmlEncodingSniffer(htmlBytes);
 */
declare function sniffHTMLEncoding(htmlBytes: Uint8Array, options?: sniffHTMLEncoding.Options): string;

declare namespace sniffHTMLEncoding {
    interface Options {
        /**
         * An encoding label that is obtained from the "transport layer"
         * (probably an HTTP `Content-Type` header), which overrides
         * everything but a BOM.
         */
        transportLayerEncodingLabel?: string | undefined;

        /**
         * The ultimate fallback encoding used if no valid encoding is supplied
         * by the transport layer, and no encoding is sniffed from the bytes.
         *
         * @default
         * ```
         * 'windows-1252'
         * ```
         *
         * Which is recommended by the algorithm's table of suggested
         * defaults for "All other locales" (including the `en` locale).
         */
        defaultEncoding?: string | undefined;
    }
}

export = sniffHTMLEncoding;
