/// <reference types="node" />

declare namespace JsBarcode {
    function getModule(name: string): () => void;
    interface JsBarcodeOptions {
        format: string;
        width?: number | undefined;
        height?: number | undefined;
        displayValue?: boolean | undefined;
        text?: string | undefined;
        fontOptions?: string | undefined;
        font?: string | undefined;
        textAlign?: string | undefined;
        textPosition?: string | undefined;
        textMargin?: number | undefined;
        fontSize?: number | undefined;
        background?: string | undefined;
        lineColor?: string | undefined;
        margin?: number | undefined;
        marginTop?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        marginRight?: number | undefined;
        flat?: boolean | undefined;
        valid?(valid: boolean): void;
    }
}

/**
 * The Browser version of the library's functionality, which makes use of an HTMLCanvasElement, HTMLImageElement or SVGElement
 * for rendering.
 * @param svg ID string or HTML element of the target to render within.
 * @param barcodeText Text to be rendered.
 * @param barcodeOptions Options used for rendering.
 */
declare function JsBarcode(
    svg: string | HTMLCanvasElement | HTMLImageElement | SVGElement,
    barcodeText: string,
    barcodeOptions?: JsBarcode.JsBarcodeOptions,
): void;

export = JsBarcode;
