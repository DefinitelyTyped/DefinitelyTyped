
export module Email {
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
        mailComposer?: IMailComposer;
    }): void;
}

export interface MailComposerOptions {
    escapeSMTP: boolean;
    encoding: string;
    charset: string;
    keepBcc: boolean;
    forceEmbeddedImages: boolean;
}

export let MailComposer: MailComposerStatic;
export interface MailComposerStatic {
    new (options: MailComposerOptions): IMailComposer;
}
export interface IMailComposer {
    addHeader(name: string, value: string): void;
    setMessageOption(from: string, to: string, body: string, html: string): void;
    streamMessage(): void;
    pipe(stream: any /** fs.WriteStream **/): void;
}
