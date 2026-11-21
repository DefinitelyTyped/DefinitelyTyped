import { AsyncHandler, Handler } from "../handler";

/**
 * {@link CodePipelineAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type CodePipelineHandler = Handler<CodePipelineEvent, void>;
export type CodePipelineAsyncHandler = AsyncHandler<CodePipelineEvent, void>;

/**
 * CodePipeline events
 * https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-invoke-lambda-function.html
 */
export interface S3ArtifactLocation {
    bucketName: string;
    objectKey: string;
}
export interface S3ArtifactStore {
    type: "S3";
    s3Location: S3ArtifactLocation;
}

export type ArtifactLocation = S3ArtifactStore;

export interface Artifact {
    name: string;
    revision: string | null;
    location: ArtifactLocation;
}

export interface Credentials {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string | undefined;
}

export interface EncryptionKey {
    type: string;
    id: string;
}

export interface CodePipelineEvent {
    "CodePipeline.job": {
        id: string;
        accountId: string;
        data: {
            actionConfiguration: {
                configuration: {
                    FunctionName: string;
                    UserParameters: string;
                };
            };
            inputArtifacts: Artifact[];
            outputArtifacts: Artifact[];
            artifactCredentials: Credentials;
            encryptionKey?: (EncryptionKey & { type: "KMS" }) | undefined;
            continuationToken?: string | undefined;
        };
    };
}
