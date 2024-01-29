export = EmailMessageHeader;
declare function EmailMessageHeader(): void;
declare class EmailMessageHeader {
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
