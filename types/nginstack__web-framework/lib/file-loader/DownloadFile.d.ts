export = DownloadFile;
declare function DownloadFile(name: string, contentFileName: string, contentType: string): void;
declare class DownloadFile {
    constructor(name: string, contentFileName: string, contentType: string);
    openFile(): File;
}
import File = require("@nginstack/engine/lib/io/File.js");
