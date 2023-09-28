import { Handler } from "../handler";
import { CodePipelineCloudWatchActionEvent } from "./codepipeline-cloudwatch-action";
import { CodePipelineCloudWatchPipelineEvent } from "./codepipeline-cloudwatch-pipeline";
import { CodePipelineCloudWatchStageEvent } from "./codepipeline-cloudwatch-stage";

export type CodePipelineCloudWatchHandler = Handler<CodePipelineCloudWatchEvent, void>;

export type CodePipelineCloudWatchEvent =
    | CodePipelineCloudWatchPipelineEvent
    | CodePipelineCloudWatchStageEvent
    | CodePipelineCloudWatchActionEvent;
