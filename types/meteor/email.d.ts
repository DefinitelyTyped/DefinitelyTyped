declare module "meteor/email" {
    module Email {
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

    interface MailComposerOptions {
        escapeSMTP: boolean;
        encoding: string;
        charset: string;
        keepBcc: boolean;
        forceEmbeddedImages: boolean;
    }

    var MailComposer: MailComposerStatic;
    interface MailComposerStatic {
        new (options: MailComposerOptions): MailComposer;
    }
    interface MailComposer {
        addHeader(name: string, value: string): void;
        setMessageOption(from: string, to: string, body: string, html: string): void;
        streamMessage(): void;
        pipe(stream: any /** fs.WriteStream **/): void;
    }
}
