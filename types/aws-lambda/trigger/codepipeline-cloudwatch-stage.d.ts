import { AsyncHandler, Handler } from "../handler";

/**
 * {@link CodePipelineCloudWatchStageAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type CodePipelineCloudWatchStageHandler = Handler<CodePipelineCloudWatchStageEvent, void>;
export type CodePipelineCloudWatchStageAsyncHandler = AsyncHandler<CodePipelineCloudWatchStageEvent, void>;

export type CodePipelineStageState = "STARTED" | "SUCCEEDED" | "RESUMED" | "FAILED" | "CANCELED";

export interface CodePipelineCloudWatchStageEvent {
    version: string;
    id: string;
    "detail-type": "CodePipeline Stage Execution State Change";
    source: "aws.codepipeline";
    account: string;
    time: string;
    region: string;
    resources: string[];
    detail: {
        pipeline: string;
        version: number;
        "execution-id": string;
        stage: string;
        state: CodePipelineStageState;
    };
}
