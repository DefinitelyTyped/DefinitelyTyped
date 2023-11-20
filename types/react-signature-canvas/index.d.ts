import * as React from "react";
import SignaturePad = require("signature_pad");

export interface ReactSignatureCanvasProps extends SignaturePad.SignaturePadOptions {
    canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement> | undefined;
    clearOnResize?: boolean | undefined;
}

declare class ReactSignatureCanvas extends React.Component<ReactSignatureCanvasProps> {
    on: SignaturePad["on"];

    off: SignaturePad["off"];

    clear: SignaturePad["clear"];

    isEmpty: SignaturePad["isEmpty"];

    fromDataURL: SignaturePad["fromDataURL"];

    toDataURL: SignaturePad["toDataURL"];

    fromData: SignaturePad["fromData"];

    toData: SignaturePad["toData"];

    getCanvas(): HTMLCanvasElement;

    getTrimmedCanvas(): HTMLCanvasElement;

    getSignaturePad(): SignaturePad;
}

export default ReactSignatureCanvas;
