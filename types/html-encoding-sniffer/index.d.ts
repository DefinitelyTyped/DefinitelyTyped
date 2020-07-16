// Type definitions for html-encoding-sniffer 2.0
// Project: https://github.com/jsdom/html-encoding-sniffer#readme
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

/**
 * @param buffer The NodeJS buffer containing the (X)HTML source text.
 *
 * @return The canonical [encoding name](https://encoding.spec.whatwg.org/#names-and-labels)
 *         for use with the `whatwg-encoding` or similar package.
 */
declare function sniffHTMLEncoding(buffer: Buffer, options?: sniffHTMLEncoding.Options): string;

declare namespace sniffHTMLEncoding {
    interface Options {
        /**
         * An encoding label that is obtained from the "transport layer"
         * (probably an HTTP `Content-Type` header), which overrides
         * everything but a BOM.
         */
        transportLayerEncodingLabel?: string;

        /**
         * The ultimate fallback encoding used if no valid encoding is supplied
         * by the transport layer, and no encoding is sniffed from the bytes.
         *
         * @default
         * ```js
         * 'windows-1252'
         * ```
         *
         * Which is recommended by the algorithm's table of suggested
         * defaults for "All other locales" (including the `en` locale).
         */
        defaultEncoding?: string;
    }
}

export = sniffHTMLEncoding;
