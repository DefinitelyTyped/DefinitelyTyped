export = MailMessageHeader;
declare function MailMessageHeader(): void;
declare class MailMessageHeader {
    from: string;
    to: any[];
    cc: any[];
    subject: string;
    organization: string;
    customHeaders: any;
    date: Date;
    xMailer: string;
    replyTo: string;
    messageID: string;
    priority: string;
    charsetCode: string;
}
