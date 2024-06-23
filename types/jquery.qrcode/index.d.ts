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
        IMAGE_BOX,
    }

    interface Options {
        /**
         * Render method: 'canvas', 'image' or 'div'
         * @default 'canvas'
         */
        render?: string | undefined;

        /**
         * Start of version range, somewhere in 1 .. 40
         * @default 1
         */
        minVersion?: number | undefined;
        /**
         * End of version range, somewhere in 1 .. 40
         * @default 40
         */
        maxVersion?: number | undefined;

        /**
         * Error correction level: 'L', 'M', 'Q' or 'H'
         * @default 'L'
         */
        ecLevel?: string | undefined;

        /**
         * Left offset in pixels, if drawn onto existing canvas
         * @default 0
         */
        left?: number | undefined;
        /**
         * Top offset in pixels, if drawn onto existing canvas
         * @default 0
         */
        top?: number | undefined;

        /**
         * Size in pixel
         * @default 200
         */
        size?: number | undefined;

        /**
         * Code color or image element
         * @default '#000'
         */
        fill?: string | undefined;

        /**
         * Background color or image element, null for transparent background
         * @default null
         */
        background?: string | undefined;

        /**
         * The text content of the QR code.
         * @default 'no text'
         */
        text?: string | undefined;

        /**
         * Corner radius relative to module width: 0.0 .. 0.5
         * @default 0
         */
        radius?: number | undefined;

        /**
         * Quiet zone in modules
         * @default 0
         */
        quiet?: number | undefined;

        /**
         * Mode
         * @default Mode.NORMAL
         */
        mode?: Mode | undefined;

        /** @default 0.1 */
        mSize?: number | undefined;
        /** @default 0.5 */
        mPosX?: number | undefined;
        /** @default 0.5 */
        mPosY?: number | undefined;

        /** @default 'no label' */
        label?: string | undefined;
        /** @default 'sans' */
        fontname?: string | undefined;
        /** @default '#000' */
        fontcolor?: string | undefined;

        /** @default null */
        image?: string | undefined;
    }
}

interface JQuery {
    /**
     * Create a QR Code inside the selected container.
     * @param options
     */
    qrcode(options?: JQueryQRCode.Options): JQuery;
}
