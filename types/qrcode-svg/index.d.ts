// Type definitions for qrcode-svg 1.1
// Project: https://github.com/papnkukn/qrcode-svg
// Definitions by: Eric Ferreira <https://github.com/ericbf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Generate an svg QR code easily with this class. Just instatiate an instance
 * with one of the constructors, then either generate the QR code svg as a
 * string with `.svg(...)` or save it to a file with `.save(...)`.
 */
declare class QRCode {
    /**
     * Create a QRCode with the default options and the passed content.
     * @param content The content to encode in the QRCode.
     */
    constructor(content: string);
    /**
     * Create a QRCode by specifying its options. Any values not passed in the
     *   options object will be inferred as the defaults.
     * @param options The options with which to create the QRCode.
     */
    // tslint:disable-next-line:unified-signatures
    constructor(options: QRCode.Options);

    /** The raw model of this QRCode. */
    qrcode: QRCode.Model;

    /** The options that were used to create this QRCode. */
    options: QRCode.Options;

    /**
     * Generates an SVG image of this QRCode
     * @param  opt Set the container. Defaults to `{ container: "svg" }`.
     * @return The svg string.
     */
    svg(opt?: { container: 'svg' | 'g' | 'none' }): string;
    /**
     * Writes this QRCode to a file. Requires `fs`.
     * @param  file The filename to write to
     * @param  callback The callback that will be called, possibly with an error, when done.
     */
    save(file: string, callback: (error?: Error) => void): void;
}

declare namespace QRCode {
    interface Options {
        /** QR Code content, the only **required** parameter. */
        content: string;
        /** White space padding. `0` for no border. Default is `4`. */
        padding?: number;
        /** QR Code width in pixels. Default is `256`. */
        width?: number;
        /** QR Code height in pixels. Default is `256`. */
        height?: number;
        /** Color of modules (squares), color name or hex string. Default is `#000000`. */
        color?: string;
        /** Color of background, color name or hex string. Default is `#fffff`. */
        background?: string;
        /** Error correction level. Default is `"M"`. */
        ecl?: 'L' | 'M' | 'H' | 'Q';
        /** Join modules (squares) into one shape, into the SVG path element, **recommended** for web and responsive use. Default is `false`. */
        join?: boolean;
        /** To create a squares as pattern, then populate the canvas. Default is `false`. */
        predefined?: boolean;
        /** Apply indents and new lines. Default is `true`. */
        pretty?: boolean;
        /** Swap X and Y modules, only if you have issues with some QR readers. Default is `false`. */
        swap?: boolean;
        /** Prepend XML declaration to the SVG document, i.e. ```<?xml version="1.0" standalone="yes"?>```. Default is `true`. */
        xmlDeclaration?: boolean;
        /**
         * Wrapping element. Default is `svg`. \
         * `svg`: Populate squares in a SVG document with `width` and `height` attribute.
         * Recommended for converting to raster images or PDF where QR Code is being static (exact size). \
         * `svg-viewbox`: Populate squares in a SVG document with viewBox attriute.
         * **Recommended** for responsive web pages. \
         * `g`: Put squares in `g` element.
         * Useful when you need to put multiple QR Codes in a single SVG document \
         * `none`: No wrapper.
         */
        container?: 'svg' | 'svg-viewbox' | 'g' | 'none';
    }

    interface Model {
        /**
         * This QRCode's data matrix. A square, two-dimensional boolean array
         * of `moduleCount` x `moduleCount` size. True in a given slot means
         * that spot is filled in in the QRCode visualization.
         */
        modules: boolean[][];
        /** The calculated type number for this QRCode. */
        typeNumber: number;
        /** The numerical error correction level for this QRCode. */
        errorCorrectLevel: number;
        /** The width/length of this QRCode's modules matrix. */
        moduleCount: number;
        /** The cache used to store data during the creation of this QRCode. */
        dataCache: number[] | null;
        /** A list of the data added to this QRCode. */
        dataList: Array<{
            data: string;
            mode: number;
            parsedData: number[];
        }>;

        /**
         * Queue data up to be added to this QRCode. `make` needs to be called
         *   to actually generate the QRCode from the data.
         * @param data The data to queue up in this QRCode.
         */
        addData(data: string): void;
        /**
         * Whether a given coordinate is filled in in this QRCode's matrix.
         * @param  row The row to check.
         * @param  col The column to check.
         * @return True if the coordinate is filled in, false otherwise.
         */
        isDark(row: number, col: number): boolean;
        /** Returns the length/width of this QRCode's matrix. */
        getModuleCount(): number;
        /** Generate this QRCode's matrix from the queued data. */
        make(): void;
    }
}

export = QRCode;
