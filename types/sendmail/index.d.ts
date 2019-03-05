// Type definitions for sendmail 1.4
// Project: https://github.com/guileen/node-sendmail
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
declare namespace sendMailConstructor {
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
        to: string;
        cc?: string;
        bcc?: string;
        replyTo?: string;
        returnTo?: string;
        subject: string;
        type?: string;
        charset?: string;
        encoding?: string;
        id?: string;
        headers?: any;
        content?: string;
        html?: string;
        attachments?: Array<{
            type: string;
            filename: string;
            content: any;
        }>;
    }
}

type CallbackFn = (err: Error, domain: string) => void;

type SendMailFn = (
    mail: sendMailConstructor.MailInput,
    callback: CallbackFn
) => void;

declare function sendMailConstructor(
    options: sendMailConstructor.Options
): SendMailFn;

export = sendMailConstructor;
