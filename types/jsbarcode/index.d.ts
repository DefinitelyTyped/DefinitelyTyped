// Type definitions for jsbarcode 3.11
// Project: https://github.com/lindell/JsBarcode
// Definitions by: Domien Bakker <https://github.com/domienbakker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace JsBarcode {
    function getModule(name: string): () => void;
    interface JsBarcodeOptions {
        format: string;
        width?: number;
        height?: number;
        displayValue?: boolean;
        text?: string;
        fontOptions?: string;
        font?: string;
        textAlign?: string;
        textPosition?: string;
        textMargin?: number;
        fontSize?: number;
        background?: string;
        lineColor?: string;
        margin?: number;
        marginTop?: number;
        marginBottom?: number;
        marginLeft?: number;
        marginRight?: number;
        flat?: boolean;
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
    barcodeOptions?: JsBarcode.JsBarcodeOptions
): void;

export = JsBarcode;
