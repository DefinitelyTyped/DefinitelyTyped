// Type definitions for sendmail 1.4
// Project: https://github.com/guileen/node-sendmail
// Definitions by: Saeid Ostad <https://github.com/saostad>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace sendMailFactory {
    interface Options {
        logger?: {
            debug?: () => void;
            info?: () => void;
            warn?: () => void;
            error?: () => void;
        };
        silent?: boolean;
        /** Default: False */
        dkim?:
            | boolean
            | {
                  privateKey: string;
                  keySelector: string;
              };
        /** Default: False */
        devPort?: number | boolean;
        /** Default: localhost */
        devHost?: string;
        /** Default: 25 */
        smtpPort?: number;
        /** Default: -1 - extra smtp host after resolveMX */
        smtpHost?: string | number;
    }

    interface MailInput {
        from: string;
        sender?: string;
        to: string;
        cc?: string;
        bcc?: string;
        replyTo?: string;
        inReplyTo?: string;
        returnTo?: string;
        subject: string;
        type?: string;
        charset?: string;
        encoding?: string;
        id?: string;
        headers?: object;
        content?: string;
        text?: string;
        html?: string;
        attachments?: Array<{
            type?: string;
            filename?: string;
            content?: any;
            path?: string;
            contentType?: string;
            encoding?: string;
        }>;
    }
}

type CallbackFn = (err: Error, domain: string) => void;

type SendMailFn = (mail: sendMailFactory.MailInput, callback: CallbackFn) => void;

declare function sendMailFactory(options: sendMailFactory.Options): SendMailFn;

export = sendMailFactory;
