export = MultipartFormFile;
declare function MultipartFormFile(name: string, filePath: string, contentType?: string): void;
declare class MultipartFormFile {
    constructor(name: string, filePath: string, contentType?: string);
    private name_;
    private filePath_;
    private contentType_;
    name: string;
    contentType: string;
    size: number;
    moveTo(filePath: string): boolean;
}
