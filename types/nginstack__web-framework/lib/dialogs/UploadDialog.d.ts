export = UploadDialog;
declare function UploadDialog(opt_process?: any): void;
declare class UploadDialog {
    constructor(opt_process?: any);
    fileLoader_: FileLoader;
    uploadId_: string | null;
    resolveFn_: () => any;
    rejectFn_: () => any;
    pairName_: string;
    open(opt_options?: UploadOptions | Record<any, any>): any;
    private act_close_;
    private act_finish_;
}
declare namespace UploadDialog {
    export { UploadedFile };
}
import FileLoader = require('../file-loader/FileLoader.js');
import UploadOptions = require('../file-loader/UploadOptions.js');
type UploadedFile = import('../file-loader/UploadedFile');
