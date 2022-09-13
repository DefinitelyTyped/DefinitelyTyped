declare namespace PhotosMimeType {
    function isImage(mimeString: string): boolean;
    function isJpeg(mimeString: string): boolean;
}

// tslint:disable-next-line export-just-namespace
export = PhotosMimeType;
