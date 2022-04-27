declare module 'meteor/email' {
    namespace Email {
      interface EmailOptions {
        from?: string | undefined;
        to?: string | string[] | undefined;
        cc?: string | string[] | undefined;
        bcc?: string | string[] | undefined;
        replyTo?: string | string[] | undefined;
        subject?: string | undefined;
        text?: string | undefined;
        html?: string | undefined;
        headers?: Object | undefined;
        attachments?: Object[] | undefined;
        mailComposer?: MailComposer | undefined;
      }

      interface CustomEmailOptions extends  EmailOptions {
        packageSettings?: unknown;
      }

      function send(options: EmailOptions): void;
      function hookSend(fn: (options: EmailOptions) => boolean): void;
      function customTransport(fn: (options: CustomEmailOptions) => void): void;
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
