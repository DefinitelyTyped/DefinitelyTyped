import SQS = require('aws-sdk/clients/sqs');

// { ClientConfiguration, BucketName, ObjectKey, GetObjectOutput }

export interface SQSServiceParams {
    accessKeyId: SQS.ClientConfiguration['accessKeyId'];
    secretAccessKey: SQS.ClientConfiguration['secretAccessKey'];
    region: SQS.ClientConfiguration['region'];
}

export interface QueueConfig {
    url: string;
}

export default class SQSService<TQueues extends Record<string, QueueConfig> = Record<string, QueueConfig>> {
    sqsClient: SQS;

    queues: TQueues;

    constructor(opts?: SQSServiceParams, queues?: TQueues);

    dispatch(payload: any, queueName: keyof TQueues): Promise<SQS.SendMessageResult>;
}
