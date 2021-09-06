export = MultipartFormData;
declare function MultipartFormData(
    reader: any,
    options?: MultipartFormDataOptions | Record<any, any>
): void;
declare class MultipartFormData {
    constructor(reader: any, options?: MultipartFormDataOptions | Record<any, any>);
    private reader_;
    private options_;
    values: any;
    files: any;
    private filesDirName_;
    private totalSize_;
    private logger_;
    private populateForm_;
    private addFile_;
    private addValue_;
    removeAll(): void;
}
import MultipartFormDataOptions = require('./MultipartFormDataOptions.js');
