
// Type definitions for blob-util 1.1.2
// Project:http://nolanlawson.github.io/blob-util/
// Definitions by: James Spencer <https://github.com/jfspencer/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />

declare var blobUtil: blobUtil.IBase;

declare module blobUtil {

    interface IBase {
        createBlob(parts:Array<ArrayBuffer> | Array<ArrayBufferView> | Array<Blob> | Array<string>, options:{type?:string,endings?:string}):Blob;
        createObjectURL(blob:Blob): string;
        revokeObjectURL(url: string): void;
        blobToBinaryString(blob: Blob): Promise<string>;
        base64StringToBlob(base64:string, type?:string) : Promise<Blob>;
        binaryStringToBlob(binary:string,type:string): Promise<Blob>;
        blobToBase64String(blob:Blob):Promise<string>;
        dataURLToBlob(dataURL: string): Promise<Blob>;
        imgSrcToDataURL(src: string, type?: string, crossOrigin?:string) : Promise<string>;
        canvasToBlob(canvas:string, type?:string) : Promise<Blob>;
        imgSrcToBlob(src:string, type?:string, crossOrigin?:string) : Promise<Blob>;
        arrayBufferToBlob(buffer: ArrayBuffer, type?:string) : Promise<Blob>;
        blobToArrayBuffer(blob:Blob) : Promise<ArrayBuffer>;
    }
}