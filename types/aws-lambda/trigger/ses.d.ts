import { Handler } from '../handler';

export type SESHandler = Handler<SESEvent, void>;

// SES event
export interface SESMailHeader {
    name: string;
    value: string;
}

export interface SESMailCommonHeaders {
    returnPath: string;
    from?: string[] | undefined;
    date: string;
    to?: string[] | undefined;
    cc?: string[] | undefined;
    bcc?: string[] | undefined;
    sender?: string[] | undefined;
    replyTo?: string[] | undefined;
    messageId: string;
    subject?: string | undefined;
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
    topicArn?: string | undefined;
    bucketName: string;
    objectKey: string;
}

export interface SESReceiptSnsAction {
    type: 'SNS';
    topicArn: string;
}

export interface SESReceiptBounceAction {
    type: 'Bounce';
    topicArn?: string | undefined;
    smtpReplyCode: string;
    statusCode: string;
    message: string;
    sender: string;
}

export interface SESReceiptLambdaAction {
    type: 'Lambda';
    topicArn?: string | undefined;
    functionArn: string;
    invocationType: string;
}

export interface SESReceiptStopAction {
    type: 'Stop';
    topicArn?: string | undefined;
}

export interface SESReceiptWorkMailAction {
    type: 'WorkMail';
    topicArn?: string | undefined;
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
    dmarcPolicy?: 'none' | 'quarantine' | 'reject' | undefined;
    action:
        | SESReceiptS3Action
        | SESReceiptSnsAction
        | SESReceiptBounceAction
        | SESReceiptLambdaAction
        | SESReceiptStopAction
        | SESReceiptWorkMailAction;
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
