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

    interface S3UploadOptions extends S3.PutObjectRequest {
        Bucket: string;
        Key?: never;
    }

    interface Options {
        exclude?: InclusionRule | InclusionRule[];
        include?: InclusionRule | InclusionRule[];
        s3Options: AwsConfigurationOptions;
        s3UploadOptions: S3UploadOptions;
        basePath?: string;
        progress?: boolean;
    }
}

declare class WebpackS3Uploader extends Plugin {
    constructor(options: WebpackS3Uploader.Options);
}

export = WebpackS3Uploader;
