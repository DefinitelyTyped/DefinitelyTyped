// Type definitions for s3-uploader
// Project: https://www.npmjs.com/package/s3-uploader
// Definitions by: COLSA Corporation <http://www.colsa.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

//NOTE: Does require GM (https://github.com/aheckmann/gm) thus requires GraphicsMagick (http://www.graphicsmagick.org/) or ImageMagick (http://www.imagemagick.org/)

export = Upload;

declare namespace Upload {
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
        versions?: S3UploaderVersion[];
    }

    interface Meta {
        format: string;
        fileSize: string;
        imageSize: imageSize;
        orientation: string;
        colorSpace: string;
        compression: string;
        quallity: string;
    }

    interface imageSize {
        height: number;
        width: number;
    }

    interface image {
        etag: string;
        format: string;
        height: number;
        original: boolean;
        path: string;
        size: string;
        src: string;
        url: string;
        width: number;
    }
}

declare class Upload {
    public constructor(awsBucketName: string, opts: Upload.S3UploaderOptions);

    public upload(src: string, opts?: Upload.S3UploaderOptions, cb?: (err: string, images: Upload.image[], meta: Upload.Meta) => void): void;
}
