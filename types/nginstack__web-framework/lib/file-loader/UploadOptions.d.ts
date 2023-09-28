export = UploadOptions;
declare function UploadOptions(opt_options?: any): void;
declare class UploadOptions {
    constructor(opt_options?: any);
    accept: string[];
    maxFiles: number;
    maxFileSize: number;
    maxTotalSize: number;
    timeout: number;
}
