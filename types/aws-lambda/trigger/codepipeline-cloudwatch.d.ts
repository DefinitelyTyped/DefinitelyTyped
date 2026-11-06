import { AsyncHandler, Handler } from "../handler";
import { CodePipelineCloudWatchActionEvent } from "./codepipeline-cloudwatch-action";
import { CodePipelineCloudWatchPipelineEvent } from "./codepipeline-cloudwatch-pipeline";
import { CodePipelineCloudWatchStageEvent } from "./codepipeline-cloudwatch-stage";

/**
 * {@link CodePipelineCloudWatchAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type CodePipelineCloudWatchHandler = Handler<CodePipelineCloudWatchEvent, void>;
export type CodePipelineCloudWatchAsyncHandler = AsyncHandler<CodePipelineCloudWatchEvent, void>;

export type CodePipelineCloudWatchEvent =
    | CodePipelineCloudWatchPipelineEvent
    | CodePipelineCloudWatchStageEvent
    | CodePipelineCloudWatchActionEvent;
