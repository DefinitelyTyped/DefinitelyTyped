declare namespace Email {
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
  function sendAsync(options: EmailOptions): Promise<void>;
  function hookSend(fn: (options: EmailOptions) => boolean): void;
  function customTransport(fn: (options: CustomEmailOptions) => void): void;
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
