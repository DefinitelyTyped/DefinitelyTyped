// Type definitions for react-signature-canvas 1.0
// Project: https://github.com/agilgur5/react-signature-canvas
// Definitions by: Kamil Socha <https://github.com/ksocha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import SignaturePad from 'signature_pad';

export interface ReactSignatureCanvasProps extends SignaturePad.SignaturePadOptions {
    canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
    clearOnResize?: boolean;
}

declare class ReactSignatureCanvas extends React.Component<ReactSignatureCanvasProps> {
    on: SignaturePad['on'];

    off: SignaturePad['off'];

    clear: SignaturePad['clear'];

    isEmpty: SignaturePad['isEmpty'];

    fromDataURL: SignaturePad['fromDataURL'];

    toDataURL: SignaturePad['toDataURL'];

    fromData: SignaturePad['fromData'];

    toData: SignaturePad['toData'];

    getCanvas(): HTMLCanvasElement;

    getTrimmedCanvas(): HTMLCanvasElement;

    getSignaturePad(): SignaturePad;
}

export default ReactSignatureCanvas;
