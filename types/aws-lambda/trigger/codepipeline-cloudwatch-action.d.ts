import { Handler } from '../handler';

export type CodePipelineCloudWatchActionHandler = Handler<CodePipelineCloudWatchActionEvent, void>;

export type CodePipelineActionCategory = 'Approval' | 'Build' | 'Deploy' | 'Invoke' | 'Source' | 'Test';
export type CodePipelineActionState = 'STARTED' | 'SUCCEEDED' | 'FAILED' | 'CANCELED';

export interface CodePipelineCloudWatchActionEvent {
    version: string;
    id: string;
    'detail-type': 'CodePipeline Action Execution State Change';
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
        action: string;
        state: CodePipelineActionState;
        type: {
            owner: 'AWS' | 'Custom' | 'ThirdParty';
            category: CodePipelineActionCategory;
            provider: string;
            version: number;
        };
    };
}
