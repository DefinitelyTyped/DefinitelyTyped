export = FileInfo;
declare function FileInfo(): void;
declare class FileInfo {
    path: string;
    displayFileName: string;
    requestTime: any;
    expired: boolean;
}
declare namespace FileInfo {
    let FILE: number;
    let SCRIPT: number;
}
