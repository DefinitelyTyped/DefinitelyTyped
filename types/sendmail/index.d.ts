// Type definitions for sendmail 1.4
// Project: https://github.com/guileen/node-sendmail
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
declare namespace sendMailConstructor {
    export interface IOptions {
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

    export interface IMailInput {
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
        headers?: object;
        content?: string;
        html?: string;
        attachments?: {
            type: string;
            filename: string;
            content: any;
        }[];
    }
}

type CallbackFn = (err: Error, domain: string) => void;

type SendMailFn = (
    mail: sendMailConstructor.IMailInput,
    callback: CallbackFn
) => void;

declare function sendMailConstructor(
    options: sendMailConstructor.IOptions
): SendMailFn;

export = sendMailConstructor;
