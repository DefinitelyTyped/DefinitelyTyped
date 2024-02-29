export = MultipartFormData;
declare function MultipartFormData(
    reader: MultipartFormDataReader,
    options?: MultipartFormDataOptions | Record<any, any>
): void;
declare class MultipartFormData {
    constructor(
        reader: MultipartFormDataReader,
        options?: MultipartFormDataOptions | Record<any, any>
    );
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
declare namespace MultipartFormData {
    export { MultipartFormDataReader };
}
type MultipartFormDataReader = import('./MultipartFormDataReader');
import MultipartFormDataOptions = require('./MultipartFormDataOptions.js');
