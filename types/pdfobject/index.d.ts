// Type definitions for PDFObject v2.0.201604172
// Project: https://github.com/pipwerks/PDFObject
// Definitions by: Niels Boogaard <https://github.com/nielsboogaard>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.8

declare module "pdfobject" {
    interface PDFObject {
        embed(url:string, target?:any, options?:any): HTMLElement;
        pdfobjectversion: string;
        supportsPDFs: boolean;
    }

    var pdfObject: PDFObject;
    export = pdfObject;

}
