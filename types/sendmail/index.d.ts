// Type definitions for sendmail 1.4
// Project: https://github.com/guileen/node-sendmail
// Definitions by: Saeid Ostad <https://github.com/saostad>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace sendMailFactory {
    interface Options {
        logger?: {
            debug?: (() => void) | undefined;
            info?: (() => void) | undefined;
            warn?: (() => void) | undefined;
            error?: (() => void) | undefined;
        } | undefined;
        silent?: boolean | undefined;
        /** Default: False */
        dkim?:
            | boolean
            | {
                privateKey: string;
                keySelector: string;
            }
            | undefined;
        /** Default: False */
        devPort?: number | boolean | undefined;
        /** Default: localhost */
        devHost?: string | undefined;
        /** Default: 25 */
        smtpPort?: number | undefined;
        /** Default: -1 - extra smtp host after resolveMX */
        smtpHost?: string | number | undefined;
    }

    interface MailInput {
        from: string;
        sender?: string | undefined;
        to: string;
        cc?: string | undefined;
        bcc?: string | undefined;
        replyTo?: string | undefined;
        inReplyTo?: string | undefined;
        returnTo?: string | undefined;
        subject: string;
        type?: string | undefined;
        charset?: string | undefined;
        encoding?: string | undefined;
        id?: string | undefined;
        headers?: object | undefined;
        content?: string | undefined;
        text?: string | undefined;
        html?: string | undefined;
        attachments?:
            | Array<{
                type?: string | undefined;
                filename?: string | undefined;
                content?: any;
                path?: string | undefined;
                contentType?: string | undefined;
                encoding?: string | undefined;
            }>
            | undefined;
    }
}

type CallbackFn = (err: Error, domain: string) => void;

type SendMailFn = (mail: sendMailFactory.MailInput, callback: CallbackFn) => void;

declare function sendMailFactory(options: sendMailFactory.Options): SendMailFn;

export = sendMailFactory;
