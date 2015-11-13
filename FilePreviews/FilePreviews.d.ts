// Type definitions for FilePreviews.io
// Project: https://github.com/GetBlimp/filepreviews.js
// Definitions by: Martin Duparc <https://github.com/martinduparc>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface FilePreviewsStatic {
    new(options: FilePreviewsOptions): FilePreviewsStatic;

    generate(url:string, callback: Function):void;
    generate(url:string, options:any, callback: Function):void;
}

interface FilePreviewsOptions {
    debug:boolean;
    apiKey:string;
}

declare var FilePreviews: FilePreviewsStatic;

declare module 'FilePreviews' {
    export = FilePreviews;
}
