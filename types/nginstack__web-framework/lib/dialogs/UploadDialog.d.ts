export = UploadDialog;
declare function UploadDialog(opt_process?: any): void;
declare class UploadDialog {
    constructor(opt_process?: any);
    private fileLoader_;
    private uploadId_;
    private resolveFn_;
    private rejectFn_;
    private pairName_;
    open(opt_options?: UploadOptions | Record<any, any>): any;
    private act_close_;
    private act_finish_;
}
declare namespace UploadDialog {
    export { UploadedFile };
}
import UploadOptions = require('../file-loader/UploadOptions.js');
type UploadedFile = import('../file-loader/UploadedFile');
