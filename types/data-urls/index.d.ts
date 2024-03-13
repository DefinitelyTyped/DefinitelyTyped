import MIMEType = require("whatwg-mimetype");
import { URLRecord } from "whatwg-url";

/**
 * Parses `data:` URLs.
 *
 * @param stringInput The `data:` URL to parse.
 * @returns The parsed data URL, or `null` if the result cannot be parsed as a `data:` URL.
 *
 * @example
 * import parseDataURL = require("data-urls");
 *
 * const textExample = parseDataURL("data:,Hello%2C%20World!");
 * console.log(textExample.mimeType.toString()); // "text/plain;charset=US-ASCII"
 * console.log(textExample.body);                // Uint8Array(13) [ 72, 101, 108, 108, 111, 44, … ]
 *
 * const htmlExample = parseDataURL("data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E");
 * console.log(htmlExample.mimeType.toString()); // "text/html"
 * console.log(htmlExample.body);                // Uint8Array(22) [ 60, 104, 49, 62, 72, 101, … ]
 *
 * const pngExample = parseDataURL("data:image/png;base64,iVBORw0KGgoAAA" +
 *                                 "ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4" +
 *                                 "//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU" +
 *                                 "5ErkJggg==");
 * console.log(pngExample.mimeType.toString()); // "image/png"
 * console.log(pngExample.body);                // Uint8Array(85) [ 137, 80, 78, 71, 13, 10, … ]
 */
declare function parseDataURL(stringInput: string): parseDataURL.DataURL | null;

declare namespace parseDataURL {
    interface DataURL {
        mimeType: MIMEType;
        body: Uint8Array;
    }

    /**
     * If you are using the [whatwg-url](https://github.com/jsdom/whatwg-url) package, you may already have a
     * "URL record" object on hand, as produced by that package's `parseURL` export. In that case, you can use
     * this function to save a bit of work.
     *
     * @example
     * import { parseURL } from "whatwg-url";
     * const dataURLFromURLRecord = require("data-urls").fromURLRecord;
     *
     * const urlRecord = parseURL("data:,Hello%2C%20World!");
     * const dataURL = dataURLFromURLRecord(urlRecord);
     */
    function fromURLRecord(urlRecord: URLRecord): DataURL | null;
}

export = parseDataURL;
