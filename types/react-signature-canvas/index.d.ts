import * as React from "react";
import SignaturePad = require("signature_pad");

declare namespace ReactSignatureCanvas {
    interface ReactSignatureCanvasProps extends SignaturePad.SignaturePadOptions {
        /** directly passed to the underlying <canvas /> element */
        canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement> | undefined;

        /**
         * whether or not the canvas should be cleared when the window resizes
         * @default true
         */
        clearOnResize?: boolean | undefined;
    }
}

declare class ReactSignatureCanvas extends React.Component<ReactSignatureCanvas.ReactSignatureCanvasProps> {
    /** rebinds all event handlers */
    on: SignaturePad["on"];

    /** unbinds all event handlers */
    off: SignaturePad["off"];

    /** clears the canvas using the {@link ReactSignatureCanvas.ReactSignatureCanvasProps.backgroundColor|backgroundColor} prop */
    clear: SignaturePad["clear"];

    isEmpty: SignaturePad["isEmpty"];

    /** writes a base64 image to canvas */
    fromDataURL: SignaturePad["fromDataURL"];

    /** returns the signature image as a data URL */
    toDataURL: SignaturePad["toDataURL"];

    /** draws signature image from an array of point groups */
    fromData: SignaturePad["fromData"];

    /** returns signature image as an array of point groups */
    toData: SignaturePad["toData"];

    /** returns the underlying canvas ref. Allows you to modify the canvas however you want or call methods such as {@link ReactSignatureCanvas.toDataURL|toDataURL()} */
    getCanvas(): HTMLCanvasElement;

    /** creates a copy of the canvas and returns a {@link https://github.com/agilgur5/trim-canvas|trimmed version} of it, with all whitespace removed. */
    getTrimmedCanvas(): HTMLCanvasElement;

    /** returns the underlying SignaturePad reference */
    getSignaturePad(): SignaturePad;
}

export = ReactSignatureCanvas;
