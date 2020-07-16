import { Handler } from "../handler";

export type CodePipelineCloudWatchPipelineHandler = Handler<CodePipelineCloudWatchPipelineEvent, void>;

export type CodePipelineState = 'STARTED' | 'SUCCEEDED' | 'RESUMED' | 'FAILED' | 'CANCELED' | 'SUPERSEDED';

/**
 * CodePipeline CloudWatch Events
 * https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html
 *
 * The above CodePipelineEvent is when a lambda is invoked by a CodePipeline.
 * These events are when you subscribe to CodePipeline events in CloudWatch.
 *
 * Their documentation says that detail.version is a string, but it is actually an integer
 */

export interface CodePipelineCloudWatchPipelineEvent {
    version: string;
    id: string;
    'detail-type': 'CodePipeline Pipeline Execution State Change';
    source: 'aws.codepipeline';
    account: string;
    time: string;
    region: string;
    resources: string[];
    detail: {
        pipeline: string;
        version: number;
        state: CodePipelineState;
        'execution-id': string;
    };
}
