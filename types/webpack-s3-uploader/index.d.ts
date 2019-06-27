// Type definitions for webpack-s3-uploader 1.3
// Project: https://github.com/matrus2/webpack-s3-uploader
// Definitions by: Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { S3 } from 'aws-sdk';
import { ConfigurationOptions as AwsConfigurationOptions } from 'aws-sdk/lib/config';
import { Plugin } from 'webpack';

declare namespace WebpackS3Uploader {
    type InclusionRule = RegExp | ((path: string) => boolean);

    interface S3UploadOptions extends Omit<S3.PutObjectRequest, "Key"> {
        Bucket: string;
    }

    interface Options {
        exclude?: InclusionRule | InclusionRule[];
        include?: InclusionRule | InclusionRule[];
        s3Options: AwsConfigurationOptions;
        s3UploadOptions: S3UploadOptions;
        basePath?: string;
        progress?: boolean;
    }

    // For compatibility with TypeScript < 3.5.
    type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
}

declare class WebpackS3Uploader extends Plugin {
    constructor(options: WebpackS3Uploader.Options);
}

export = WebpackS3Uploader;
