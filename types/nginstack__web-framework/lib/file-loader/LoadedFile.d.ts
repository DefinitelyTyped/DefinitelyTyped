export = LoadedFile;
declare function LoadedFile(name: any, contentFileName: any, contentType: any): void;
declare class LoadedFile {
    constructor(name: any, contentFileName: any, contentType: any);
    name_: any;
    contentFileName_: string;
    contentType_: any;
    name: string;
    contentType: string;
    size: number;
    sha256: string;
}
