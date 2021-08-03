export = MultipartFormDataPart;
declare function MultipartFormDataPart(
    reader: any,
    readFunc: (arg0: number) => string,
    headers: any
): void;
declare class MultipartFormDataPart {
    constructor(reader: any, readFunc: (arg0: number) => string, headers: any);
    reader_: any;
    readFunc_: (arg0: number) => string;
    headers_: any;
    options_: MultipartFormDataOptions | Record<any, any>;
    private contentDisposition_;
    private name_;
    private fileName_;
    name: string;
    fileName: string;
    headers: any;
    private initializeContentDisposition_;
    private initializeParamsNameAndFileName_;
    read(size: number): string;
    readBytes(size: number): Uint8Array;
    saveToFile(file: File, opt_maxFileSize?: number): void;
}
declare namespace MultipartFormDataPart {
    export { File };
}
import MultipartFormDataOptions = require('./MultipartFormDataOptions.js');
type File = import('../io/File');
