import { Handler } from '../handler';

export type SESHandler = Handler<SESEvent, void>;

// SES event
export interface SESMailHeader {
    name: string;
    value: string;
}

export interface SESMailCommonHeaders {
    returnPath: string;
    from?: string[];
    date: string;
    to?: string[];
    cc?: string[];
    bcc?: string[];
    sender?: string[];
    'reply-to'?: string[];
    messageId: string;
    subject?: string;
}

export interface SESMail {
    timestamp: string;
    source: string;
    messageId: string;
    destination: string[];
    headersTruncated: boolean;
    headers: SESMailHeader[];
    commonHeaders: SESMailCommonHeaders;
}

export interface SESReceiptStatus {
    status: 'PASS' | 'FAIL' | 'GRAY' | 'PROCESSING_FAILED' | 'DISABLED';
}

export interface SESReceiptS3Action {
    type: 'S3';
    topicArn?: string;
    bucketName: string;
    objectKey: string;
}

export interface SESReceiptSnsAction {
    type: 'SNS';
    topicArn: string;
}

export interface SESReceiptBounceAction {
    type: 'Bounce';
    topicArn?: string;
    smtpReplyCode: string;
    statusCode: string;
    message: string;
    sender: string;
}

export interface SESReceiptLambdaAction {
    type: 'Lambda';
    topicArn?: string;
    functionArn: string;
    invocationType: string;
}

export interface SESReceiptStopAction {
    type: 'Stop';
    topicArn?: string;
}

export interface SESReceiptWorkMailAction {
    type: 'WorkMail';
    topicArn?: string;
    organizationArn: string;
}

export interface SESReceipt {
    timestamp: string;
    processingTimeMillis: number;
    recipients: string[];
    spamVerdict: SESReceiptStatus;
    virusVerdict: SESReceiptStatus;
    spfVerdict: SESReceiptStatus;
    dkimVerdict: SESReceiptStatus;
    dmarcVerdict: SESReceiptStatus;
    dmarcPolicy?: 'none' | 'quarantine' | 'reject';
    action: SESReceiptS3Action | SESReceiptSnsAction | SESReceiptBounceAction | SESReceiptLambdaAction | SESReceiptStopAction | SESReceiptWorkMailAction;
}

export interface SESMessage {
    mail: SESMail;
    receipt: SESReceipt;
}

export interface SESEventRecord {
    eventSource: string;
    eventVersion: string;
    ses: SESMessage;
}

export interface SESEvent {
    Records: SESEventRecord[];
}
