// NOTE: Does require GM (https://github.com/aheckmann/gm) thus requires GraphicsMagick (http://www.graphicsmagick.org/) or ImageMagick (http://www.imagemagick.org/)

export = Upload;

declare namespace Upload {
    interface S3UploaderVersion {
        original?: boolean | undefined;
        suffix?: string | undefined;
        quality?: number | undefined;
        maxWidth?: number | undefined;
        maxHeight?: number | undefined;
    }

    interface S3UploaderOptions {
        awsAccessKeyId?: string | undefined;
        awsSecretAccessKey?: string | undefined;
        awsBucketRegion?: string | undefined;
        awsBucketPath?: string | undefined;
        awsBucketAcl?: string | undefined;
        awsMaxRetries?: number | undefined;
        awsHttpTimeout?: number | undefined;
        resizeQuality?: number | undefined;
        returnExif?: boolean | undefined;
        tmpDir?: string | undefined;
        workers?: number | undefined;
        url?: string | undefined;
        versions?: S3UploaderVersion[] | undefined;
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

    public upload(
        src: string,
        opts?: Upload.S3UploaderOptions,
        cb?: (err: string, images: Upload.image[], meta: Upload.Meta) => void,
    ): void;
}
