export = Mail;
declare function Mail(): void;
declare class Mail {
    toString(): string;
    addAttachment(name: string, content: string | ArrayBuffer): void;
    addRecipient(nameOrEmail: string, email?: string): void;
    addRecipientBcc(nameOrEmail: string, email?: string): void;
    addRelatedContent(name: string, content: string | ArrayBuffer): string;
    clear(): void;
    sendLocally(): void;
    write(content: any): void;
    senderName: string;
    senderMailAddress: string;
    userName: string;
    password: string;
    smtpServer: string;
    subject: string;
    content: string;
    htmlContent: string;
    log: string;
    fullSsl: boolean;
    autoTls: boolean;
    logEnabled: boolean;
}
declare namespace Mail {
    function hasDefaultSMTPSettings(): boolean;
}
