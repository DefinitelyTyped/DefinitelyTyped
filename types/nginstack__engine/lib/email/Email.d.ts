export = Email;
declare function Email(): void;
declare class Email {
    smtpServer: DBKey | number | string;
    securityMode: string;
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
    setHeader(name: string, value: string): void;
    getHeader(name: string): string;
    addAttachment(name: string, content: string | ArrayBuffer): void;
    addRecipient(nameOrEmail: string, email?: string): void;
    addRecipientBcc(nameOrEmail: string, email?: string): void;
    addRelatedContent(name: string, content: string | ArrayBuffer): string;
    clear(): void;
    send(): void;
    sendLocally(): void;
    write(content: any): void;
    saveToStream(stream: File | MemoryStream): void;
    loadFromStream(stream: File | MemoryStream): void;
}
declare namespace Email {
    export { hasDefaultSMTPSettings, encryptSmtpPassword, DBKey, MemoryStream, File };
}
declare function hasDefaultSMTPSettings(): boolean;
declare function encryptSmtpPassword(smtpServer: DBKey | number, password: string): string;
type DBKey = import('../dbkey/DBKey');
type MemoryStream = import('../io/MemoryStream');
type File = import('../io/File');
