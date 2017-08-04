// Type definitions for express-fileupload 0.1
// Project: https://github.com/richardgirges/express-fileupload#readme
// Definitions by: Gintautas Miselis <https://github.com/Naktibalda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="express" />

declare namespace Express {
    interface Request {
        files?: ExpressFileUpload.FileArray;
    }
}

declare namespace ExpressFileUpload {
    class FileArray {
        [index: string]: UploadedFile | UploadedFile[]
    }

    interface UploadedFile {
        name: string;
        encoding: string;
        mimetype: string;
        data: Buffer;
        mv(targetLocation: string, callback: (err: any) => {}): void;
    }
}
