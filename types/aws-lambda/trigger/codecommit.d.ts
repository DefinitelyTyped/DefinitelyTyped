import { Handler } from '../handler';

export type CodeCommitHandler = Handler<CodeCommitTrigger, void>;

/**
 * CodeCommit events
 * https://docs.aws.amazon.com/lambda/latest/dg/services-codecommit.html
 */
export interface CodeCommitTrigger {
    awsRegion: string;
    codecommit: {
        references: Array<{
            commit: string;
            created?: boolean;
            deleted?: boolean;
            ref: string;
        }>;
    };
    customData?: string;
    eventId: string;
    eventName: string;
    eventPartNumber: number;
    eventSource: string;
    eventSourceARN: string;
    eventTime: string;
    eventTotalParts: number;
    eventTriggerConfigId: string;
    eventTriggerName: string;
    eventVersion: string;
    userIdentityARN: string;
}

export interface CodeCommitTriggerEvent {
    Records: CodeCommitTrigger[];
}
