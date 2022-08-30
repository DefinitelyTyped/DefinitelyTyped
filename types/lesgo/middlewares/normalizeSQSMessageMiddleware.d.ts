import middy from '@middy/core';
import { SQSEvent, SQSRecord } from 'aws-lambda';

export interface SQSEventWithCollection extends SQSEvent {
    collection?: Pick<SQSRecord, 'messageId' | 'receiptHandle'> & Record<string, any>;
}

export interface NormalizeSQSMiddleware {
    before: middy.MiddlewareFunction<SQSEventWithCollection, any>;
}

export function normalizeHandler(records: SQSRecord[]): Array<Record<string, any>>;

export default function normalizeSQSMessageMiddleware(): NormalizeSQSMiddleware;
