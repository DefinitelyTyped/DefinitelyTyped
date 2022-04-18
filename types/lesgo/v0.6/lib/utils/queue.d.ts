import SQS = require('aws-sdk/clients/sqs');
import SQSService from '../services/SQSService';

export function dispatch(payload: any, queueName: string): Promise<SQS.SendMessageResult>;

declare const queue: SQSService;

export default queue;
