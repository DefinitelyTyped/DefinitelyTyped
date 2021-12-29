export = FileInfo;
declare function FileInfo(): void;
declare class FileInfo {
    path: string;
    displayFileName: string;
    requestTime: any;
    expired: boolean;
}
declare namespace FileInfo {
    const FILE: number;
    const SCRIPT: number;
}
