export = Email;
declare function Email(): void;
declare class Email {
    smtpServer: DBKey | number | string;
    fullSsl: boolean;
    autoTls: boolean;
    senderName: string;
    senderEmailAddress: string;
    replyToAddress: string;
    userName: string;
    password: string;
    subject: string;
    content: string;
    htmlContent: string;
    logEnabled: boolean;
    log: string;
    addAttachment(name: string, content: string | ArrayBuffer): void;
    addRecipient(nameOrEmail: string, email?: string): void;
    addRecipientBcc(nameOrEmail: string, email?: string): void;
    addRelatedContent(name: string, content: string | ArrayBuffer): string;
    clear(): void;
    send(): void;
    sendLocally(): void;
    write(content: any): void;
}
declare namespace Email {
    export { hasDefaultSMTPSettings, encryptSmtpPassword, DBKey };
}
type DBKey = import('../dbkey/DBKey');
declare function hasDefaultSMTPSettings(): boolean;
declare function encryptSmtpPassword(smtpServer: DBKey | number, password: string): string;
