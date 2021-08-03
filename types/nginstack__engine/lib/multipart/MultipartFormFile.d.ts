export = MultipartFormFile;
declare function MultipartFormFile(name: string, filePath: string, contentType?: string): void;
declare class MultipartFormFile {
    constructor(name: string, filePath: string, contentType?: string);
    name_: string;
    filePath_: string;
    contentType_: string | import('../dbkey/DBKey.js');
    name: string;
    contentType: string;
    size: number;
    moveTo(filePath: string): boolean;
}
