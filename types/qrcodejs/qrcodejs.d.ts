/**
 * QRCode.js is JavaScript library for making QRCode.
 * QRCode.js supports Cross-browser with HTML5 Canvas and table tag in DOM.
 * QRCode.js has no dependencies.
 *
 * @example
 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
 *
 * @example
 * var oQRCode = new QRCode("test", {
 *    text : "http://naver.com",
 *    width : 128,
 *    height : 128
 * });
 *
 * oQRCode.clear(); // Clear the QRCode.
 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
 */
declare class QRCode {
    /**
     * @param el target element or 'id' attribute of element.
     * @param vOption
     */
    constructor(el: HTMLElement | string, vOption: QRCode.vOption);

    /**
     * Make the QRCode
     * @param sText link data
     */
    makeCode(sText: string): void;
    /**
     * Clear the QRCode
     */
    clear(): void;
}

declare namespace QRCode {
    type vOption = string | Options;
    const CorrectLevel: { L: 1; M: 0; Q: 3; H: 2 };
    type CorrectLevelType = typeof CorrectLevel[keyof typeof CorrectLevel];
    interface Options {
        /** QRCode link data  */
        text?: string | undefined;
        /** @efault 256 */
        width?: number | undefined;
        /** @default 256 */
        height?: number | undefined;
        /** @default #000000 */
        colorDark?: string | undefined;
        /** @default #ffffff */
        colorLight?: string | undefined;
        /** @default CorrectLevel.H */
        correctLevel?: CorrectLevelType | undefined;
        useSVG?: boolean | undefined;
    }
}

export = QRCode;
