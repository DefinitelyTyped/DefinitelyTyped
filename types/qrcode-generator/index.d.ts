// Type definitions for grcode-generator
// Project: https://github.com/kazuhikoarase/qrcode-generator
// Definitions by: Stefan Huber <https://github.com/stefanhuber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function qrcode(type: number, errorCorrectionLevel: string) : QRCode;
export = qrcode;
export as namespace qrcode;

interface QRCode {
    addData(data: string) : void;
    make() : void;
    
    createTableTag(cellSize: number, margin: number) : string;
    createSvgTag(cellSize: number, margin: number) : string;
    createImageTag(cellSize: number, margin: number) : string;    
}
