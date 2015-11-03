// Type definitions for barcode
// Project: https://github.com/samt/barcode
// Definitions by: Pascal Vomhoff <https://github.com/pvomhoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "barcode" {

    interface BarcodeOptions {
        data:string|number;
        width:number;
        height:number;
    }

    interface BarcodeResult {
        getStream(callback:(err:NodeJS.ErrnoException, stream:NodeJS.ReadableStream) => void):void;
        saveImage(outputfilePath:string, callback:(err:NodeJS.ErrnoException) => void):void;
        getBase64(callback:(err:NodeJS.ErrnoException, base64String:string) => void):void;
    }

    function barcode(type:string, options:BarcodeOptions):BarcodeResult;

    export = barcode;
}
