/// <reference types="node" />

interface BarcodeOptions {
    data: string | number;
    width: number;
    height: number;
}

interface BarcodeResult {
    getStream(callback: (err: NodeJS.ErrnoException, stream: NodeJS.ReadableStream) => void): void;
    saveImage(outputfilePath: string, callback: (err: NodeJS.ErrnoException) => void): void;
    getBase64(callback: (err: NodeJS.ErrnoException, base64String: string) => void): void;
}

declare function barcode(type: string, options: BarcodeOptions): BarcodeResult;

export = barcode;
