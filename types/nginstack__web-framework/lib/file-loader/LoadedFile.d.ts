export = LoadedFile;
declare function LoadedFile(name: any, contentFileName: any, contentType: any): void;
declare class LoadedFile {
    constructor(name: any, contentFileName: any, contentType: any);
    private name_;
    private contentFileName_;
    private contentType_;
    name: string;
    contentType: string;
    size: number;
    sha256: string;
}
