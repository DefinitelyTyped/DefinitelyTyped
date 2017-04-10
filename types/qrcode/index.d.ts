// Type definitions for qrcode
// Project: https://github.com/soldair/node-qrcode
// Definitions by: York Yao <https://github.com/plantain-00/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type QRCodeOptions = {
    errorCorrectLevel?: "minimum" | "medium" | "high" | "max";
}

declare module "qrcode" {
    var qrcode: {
        toDataURL(text: string, callback: (error: Error, dataURL: string) => void): void;
        toDataURL(text: string, options: QRCodeOptions, callback: (error: Error, dataURL: string) => void): void;
        draw(text: string, callback: (error: Error, canvas: HTMLCanvasElement) => void): void;
        draw(text: string, options: QRCodeOptions, callback: (error: Error, canvas: HTMLCanvasElement) => void): void;
        drawSvg(text: string, callback: (error: Error, svgString: string) => void): void;
        drawSvg(text: string, options: QRCodeOptions, callback: (error: Error, svgString: string) => void): void;
        save(path: string, text: string, callback: (error: Error, written: any) => void): void;
        save(path: string, text: string, options: QRCodeOptions, callback: (error: Error, written: any) => void): void;
        drawText(text: string, callback: (error: Error) => void): void;
        drawText(text: string, options: QRCodeOptions, callback: (error: Error) => void): void;
        drawBitArray(text: string, callback: (error: Error, bits: any, width: number) => void): void;
        drawBitArray(text: string, options: QRCodeOptions, callback: (error: Error, bits: any, width: number) => void): void;
    };
    export = qrcode;
}

declare var QRCodeLib: {
    QRCodeDraw: {
        new (): {
            draw(element: HTMLCanvasElement, text: string, callback: (error: Error, canvas: HTMLCanvasElement) => void): void;
            draw(element: HTMLCanvasElement, text: string, options: QRCodeOptions, callback: (error: Error, canvas: HTMLCanvasElement) => void): void;
        }
    };
};
