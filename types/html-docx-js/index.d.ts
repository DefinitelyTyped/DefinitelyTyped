/// <reference types="node" />

/**
 * To generate DOCX, simply pass a HTML document (as string) to this method
 * to receive `Blob` (or `Buffer`) containing the output file.
 */
export function asBlob(
    /**
     * An HTML formatted string. It should be a complete, valid HTML
     * (including DOCTYPE, `html` and `body` tags).
     * This may be less convenient, but gives you possibility of including
     * CSS rules in `style` tags.
     */
    html: string,
    /** Additional options for controlling page setup for the document. */
    options?: {
        /**
         * Page orientation. Must be `landscape` or `portrait` (default).
         */
        orientation?: "landscape" | "portrait" | undefined;
        /**
         * A map of margin sizes (expressed in twentieths of point, see
         * [WordprocessingML documentation](http://officeopenxml.com/WPsectionPgMar.php)
         * for details).
         */
        margins?: {
            /** The top page margin (default: 1440, i.e. 2.54 cm). */
            top?: number | undefined;
            /** The right page margin (default: 1440). */
            right?: number | undefined;
            /** The bottom page margin (default: 1440). */
            bottom?: number | undefined;
            /** The left page margin (default: 1440). */
            left?: number | undefined;
            /** The margin for the header (default: 720). */
            header?: number | undefined;
            /** The margin for the footer (default: 720). */
            footer?: number | undefined;
            /** The margin for the gutter (default: 0). */
            gutter?: number | undefined;
        } | undefined;
    },
): Blob | Buffer;
