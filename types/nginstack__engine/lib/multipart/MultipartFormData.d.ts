export = MultipartFormData;
declare function MultipartFormData(
    reader: any,
    options?: MultipartFormDataOptions | Record<any, any>
): void;
declare class MultipartFormData {
    constructor(reader: any, options?: MultipartFormDataOptions | Record<any, any>);
    reader_: any;
    options_: MultipartFormDataOptions;
    values: any;
    files: any;
    filesDirName_: string;
    totalSize_: number;
    private logger_;
    private populateForm_;
    private addFile_;
    private addValue_;
    removeAll(): void;
}
import MultipartFormDataOptions = require('./MultipartFormDataOptions.js');
