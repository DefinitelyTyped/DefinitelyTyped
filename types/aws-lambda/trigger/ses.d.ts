import { Handler } from '../handler';

export type SESHandler = Handler<SESEvent, void>;

// SES event
export interface SESMailHeader {
    name: string;
    value: string;
}

export interface SESMailCommonHeaders {
    returnPath: string;
    from: string[];
    date: string;
    to: string[];
    messageId: string;
    subject: string;
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
    status: string;
}

export interface SESReceiptAction {
    type: string;
    functionArn: string;
    invocationType: string;
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
    action: SESReceiptAction;
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
