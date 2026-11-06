import { AsyncHandler, Handler } from "../handler";

/**
 * {@link CodePipelineCloudWatchActionAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type CodePipelineCloudWatchActionHandler = Handler<CodePipelineCloudWatchActionEvent, void>;
export type CodePipelineCloudWatchActionAsyncHandler = AsyncHandler<CodePipelineCloudWatchActionEvent, void>;

export type CodePipelineActionCategory = "Approval" | "Build" | "Deploy" | "Invoke" | "Source" | "Test";
export type CodePipelineActionState = "STARTED" | "SUCCEEDED" | "FAILED" | "CANCELED";

export interface CodePipelineCloudWatchActionEvent {
    version: string;
    id: string;
    "detail-type": "CodePipeline Action Execution State Change";
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
        action: string;
        state: CodePipelineActionState;
        type: {
            owner: "AWS" | "Custom" | "ThirdParty";
            category: CodePipelineActionCategory;
            provider: string;
            version: number;
        };
    };
}
