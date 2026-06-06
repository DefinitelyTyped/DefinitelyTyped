// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "SyntheticsUploader" {
    export = uploader;
    const uploader: SyntheticsUploader;
    /**
     * Class to help facilitate artifact uploads to S3.
     */
    class SyntheticsUploader {
        canaryName: any;
        s3BaseFilePath: any;
        dateTimeInUTC: any;
        s3UploadLocation: {
            s3Bucket: string;
            s3Key: string;
        };
        s3Client: any;
        setUpError: any;
        setUpDone: boolean;
        bucketLocationError: string;
        uploadedArtifacts: boolean;
        setCanaryDetails(canaryName: any, s3BaseFilePath: any, dateTimeInUTC: any): void;
        setUpUploader(): Promise<void>;
        reset(): void;
        getS3Client(): any;
        getS3Path(): string;
        hasUploadedArtifacts(): boolean;
        /**
         *  Uploads screenshots to S3 and returns an Array of error messages.
         *  @param artifacts - {Object.<SyntheticsResult> | Array.<SyntheticsResult>} - A single Object or an array of objects of ScreenshotResult.
         *  @returns Array of error messages
         */
        uploadScreenshots(screenshotResults: any): Promise<string[]>;
        /**
         *  Uploads artifacts to S3 and returns an Array of error messages.
         *  @param artifacts - {String | Array.<String> | Object.<SyntheticsResult> | Array.<SyntheticsResult>} - A single path or an array of paths to a directory or
         *  individual artifact,
         *  OR A single Object or an array of objects of ScreenshotResult.
         *  @returns Array of error messages
         */
        uploadArtifacts(artifacts: any): Promise<string[]>;
        uploadAndDeleteFiles(filePaths: any): Promise<any[]>;
        uploadFilesToS3(files: any): Promise<{
            numFilesUploaded: number;
            fileUploadErrors: string[];
        }>;
    }
}
