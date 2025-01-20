import type { FileUpload } from "./processRequest.mjs";

export default class Upload {
    promise: Promise<FileUpload>;
    resolve: (file: FileUpload) => void;
    file: FileUpload | undefined;
    reject: (reason?: any) => void;
}
