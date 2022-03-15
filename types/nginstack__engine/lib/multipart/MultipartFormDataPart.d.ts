export = MultipartFormDataPart;
declare function MultipartFormDataPart(
    reader: any,
    readFunc: (arg0: number) => string,
    headers: any
): void;
declare class MultipartFormDataPart {
    constructor(reader: any, readFunc: (arg0: number) => string, headers: any);
    private reader_;
    private readFunc_;
    private headers_;
    private options_;
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
type File = import('../io/File');
