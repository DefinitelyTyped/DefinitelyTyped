export = EmailMessageHeader;
declare function EmailMessageHeader(): void;
declare class EmailMessageHeader {
    from: string;
    to: string[];
    cc: string[];
    subject: string;
    organization: string;
    customHeaders: Record<string, string>;
    date: Date;
    xMailer: string;
    replyTo: string;
    messageID: string;
    priority: string;
    charsetCode: string;
}
