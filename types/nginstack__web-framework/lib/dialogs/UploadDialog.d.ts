export = UploadDialog;
declare function UploadDialog(opt_process?: Process): void;
declare class UploadDialog {
    constructor(opt_process?: Process);
    private fileLoader_;
    private uploadId_;
    private resolveFn_;
    private rejectFn_;
    private pairName_;
    open(opt_options?: UploadOptions | Record<any, any>): Promise;
    private act_close_;
    private act_finish_;
}
declare namespace UploadDialog {
    export { Process, UploadedFile };
}
import UploadOptions = require("../file-loader/UploadOptions.js");
import Promise = require("../promise/Promise.js");
type UploadedFile = import("../file-loader/UploadedFile");
type Process = import("../process/Process");
