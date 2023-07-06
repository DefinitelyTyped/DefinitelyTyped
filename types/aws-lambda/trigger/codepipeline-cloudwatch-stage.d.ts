import { Handler } from '../handler';

export type CodePipelineCloudWatchStageHandler = Handler<CodePipelineCloudWatchStageEvent, void>;

export type CodePipelineStageState = 'STARTED' | 'SUCCEEDED' | 'RESUMED' | 'FAILED' | 'CANCELED';

export interface CodePipelineCloudWatchStageEvent {
    version: string;
    id: string;
    'detail-type': 'CodePipeline Stage Execution State Change';
    source: 'aws.codepipeline';
    account: string;
    time: string;
    region: string;
    resources: string[];
    detail: {
        pipeline: string;
        version: number;
        'execution-id': string;
        stage: string;
        state: CodePipelineStageState;
    };
}
