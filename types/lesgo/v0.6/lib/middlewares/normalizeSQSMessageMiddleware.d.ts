import { MiddlewareFunction } from 'middy';
import { SQSEvent, SQSRecord } from 'aws-lambda';

export interface SQSEventWithCollection extends SQSEvent {
    collection?: Pick<SQSRecord, 'messageId' | 'receiptHandle'> & Record<string, any>;
}

export interface NormalizeSQSMiddleware {
    before: MiddlewareFunction<SQSEventWithCollection, any>;
}

export default function normalizeSQSMessageMiddleware(): NormalizeSQSMiddleware;
