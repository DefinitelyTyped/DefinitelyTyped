// Type definitions for QRCode 
// Project: https://github.com/davidshimjs/qrcodejs#540308a766f09f40c2f7aa5a39a3e76892da3259
// Definitions by: Lionel Seguin <https://github.com/lseguin42>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module QRCodeJS {

    enum EnumQRCodeCorrectLevel {
        L = 1,
        M = 0,
        Q = 3,
        H = 2
    }

    interface QRCodeOpts {
        text?: string;
        width?: number;
        height?: number;
        typeNumber?: number;
        colorDark?: string;
        colorLight?: string;
        correctLevel?: EnumQRCodeCorrectLevel;
        useSVG?: boolean;
    }

    class QRCode {

        /**
         * @class QRCode
         * @constructor
         * 
         * @param {HTMLElement|String} el target element or 'id' attribute of element.
         * @param {QRCodeOpts|String} vOption
         */
        constructor(el: string, vOption: string);
        constructor(el: string, vOption: QRCodeOpts);
        constructor(el: string);
        constructor(el: HTMLElement, vOption: string);
        constructor(el: HTMLElement, vOption: QRCodeOpts);
        constructor(el: HTMLElement);

        /**
         * Make the QRCode
         * 
         * @param {String} sText link data
         */
        makeCode(sText: string): void;

        /**
	     * Clear the QRCode
	     */
        clear(): void;

        /**
         * CorrectLevel
         * 
         * QRCodeCorrectLevel
         */
        static CorrectLevel: {
            L: EnumQRCodeCorrectLevel;
            M: EnumQRCodeCorrectLevel;
            Q: EnumQRCodeCorrectLevel;
            H: EnumQRCodeCorrectLevel;
        };

    }

}

declare class QRCode extends QRCodeJS.QRCode { }
