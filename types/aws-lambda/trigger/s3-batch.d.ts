import { Handler, Callback } from "../handler";

/**
 * S3 Batch Operations event
 * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-invoke-lambda.html
 */
export type S3BatchHandler = Handler<S3BatchEvent, S3BatchResult>;
export type S3BatchCallback = Callback<S3BatchResult>;

export interface S3BatchEvent {
    invocationSchemaVersion: string;
    invocationId: string;
    job: S3BatchEventJob;
    tasks: S3BatchEventTask[];
}

export interface S3BatchEventJob {
    id: string;
}

export interface S3BatchEventTask {
    taskId: string;
    s3Key: string;
    s3VersionId: string | null;
    s3BucketArn: string;
}

export interface S3BatchResult {
    invocationSchemaVersion: string;
    treatMissingKeysAs: S3BatchResultResultCode;
    invocationId: string;
    results: S3BatchResultResult[];
}

export type S3BatchResultResultCode = 'Succeeded' | 'TemporaryFailure' | 'PermanentFailure';

export interface S3BatchResultResult {
    taskId: string;
    resultCode: S3BatchResultResultCode;
    resultString: string;
}
