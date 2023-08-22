declare namespace PhotosMimeType {
    function isImage(mimeString: string): boolean;
    function isJpeg(mimeString: string): boolean;
}

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = PhotosMimeType;
