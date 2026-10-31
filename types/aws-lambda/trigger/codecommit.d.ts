import { AsyncHandler, Handler } from "../handler";

/**
 * {@link CodeCommitAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type CodeCommitHandler = Handler<CodeCommitTrigger, void>;
export type CodeCommitAsyncHandler = AsyncHandler<CodeCommitTrigger, void>;

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
