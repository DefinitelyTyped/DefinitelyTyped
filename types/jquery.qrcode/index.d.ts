// Type definitions for jQuery.qrcode v0.12.0
// Project: https://github.com/lrsjng/jquery-qrcode
// Definitions by: Dan Manastireanu <https://github.com/danmana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace JQueryQRCode {
    /**
     * One of the possible mode types.
     */
    export const enum Mode {
        NORMAL,
        LABEL_STRIP,
        LABEL_BOX,
        IMAGE_STRIP,
        IMAGE_BOX
    }

    interface Options {
        /**
         * Render method: 'canvas', 'image' or 'div'
         * @default 'canvas'
         */
        render?: string,

        /**
         * Start of version range, somewhere in 1 .. 40
         * @default 1
         */
        minVersion?: number,
        /**
         * End of version range, somewhere in 1 .. 40
         * @default 40
         */
        maxVersion?: number,

        /**
         * Error correction level: 'L', 'M', 'Q' or 'H'
         * @default 'L'
         */
        ecLevel?: string,

        /**
         * Left offset in pixels, if drawn onto existing canvas
         * @default 0
         */
        left?: number,
        /**
         * Top offset in pixels, if drawn onto existing canvas
         * @default 0
         */
        top?: number,

        /**
         * Size in pixel
         * @default 200
         */
        size?: number,

        /**
         * Code color or image element
         * @default '#000'
         */
        fill?: string,

        /**
         * Background color or image element, null for transparent background
         * @default null
         */
        background?: string,

        /**
         * The text content of the QR code.
         * @default 'no text'
         */
        text?: string,

        /**
         * Corner radius relative to module width: 0.0 .. 0.5
         * @default 0
         */
        radius?: number,

        /**
         * Quiet zone in modules
         * @default 0
         */
        quiet?: number,

        /**
         * Mode
         * @default Mode.NORMAL
         */
        mode?: Mode,


        /** @default 0.1 */
        mSize?: number,
        /** @default 0.5 */
        mPosX?: number,
        /** @default 0.5 */
        mPosY?: number,

        /** @default 'no label' */
        label?: string,
        /** @default 'sans' */
        fontname?: string,
        /** @default '#000' */
        fontcolor?: string,

        /** @default null */
        image?: string
    }


}



interface JQuery {
    /**
     * Create a QR Code inside the selected container.
     * @param options
     */
    qrcode(options?: JQueryQRCode.Options): JQuery;
}
