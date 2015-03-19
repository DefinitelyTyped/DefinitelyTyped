// Type definitions for s3-uploader
// Project: https://www.npmjs.com/package/s3-uploader
// Definitions by: COLSA Corporation <http://www.colsa.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

//NOTE: Does require GM (https://github.com/aheckmann/gm) thus requires GraphicsMagick (http://www.graphicsmagick.org/) or ImageMagick (http://www.imagemagick.org/)

declare module "s3-uploader" {
    export = Upload;
}
interface S3UploaderVersion {
    original?: boolean;
    suffix?: string;
    quality?: number;
    maxWidth?: number;
    maxHeight?: number;
}

interface S3UploaderOptions {
    awsAccessKeyId?: string;
    awsSecretAccessKey?: string;
    awsBucketRegion?: string;
    awsBucketPath?: string;
    awsBucketAcl?: string;
    awsMaxRetries?: number;
    awsHttpTimeout?: number;
    resizeQuality?: number;
    returnExif?: boolean;
    tmpDir?: string;
    workers?: number;
    url?: string;
    versions?: S3UploaderVersion;
}

declare class Upload {
    public constructor(awsBucketName: string, opts: S3UploaderOptions);

    public upload(src: string, opts?: S3UploaderOptions, cb?: (err, images, meta) => void);
}
