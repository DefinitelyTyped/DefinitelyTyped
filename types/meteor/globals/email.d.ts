declare module Email {
    function send(options: {
        from?: string;
        to?: string | string[];
        cc?: string | string[];
        bcc?: string | string[];
        replyTo?: string | string[];
        subject?: string;
        text?: string;
        html?: string;
        headers?: Object;
        attachments?: Object[];
        mailComposer?: MailComposer;
    }): void;
}

declare interface MailComposerOptions {
    escapeSMTP: boolean;
    encoding: string;
    charset: string;
    keepBcc: boolean;
    forceEmbeddedImages: boolean;
}

declare var MailComposer: MailComposerStatic;
declare interface MailComposerStatic {
    new (options: MailComposerOptions): MailComposer;
}
declare interface MailComposer {
    addHeader(name: string, value: string): void;
    setMessageOption(from: string, to: string, body: string, html: string): void;
    streamMessage(): void;
    pipe(stream: any /** fs.WriteStream **/): void;
}
