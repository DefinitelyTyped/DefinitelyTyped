// Type definitions for mailgun-js 0.16
// Project: https://github.com/bojand/mailgun-js
// Definitions by: Sampson Oliver <https://github.com/sampsonjoliver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

declare const Mailgun: Mailgun.MailgunExport;
export = Mailgun;

declare namespace Mailgun {
    interface ConstructorParams {
        apiKey: string;
        publicApiKey?: string;
        domain: string;
        mute?: boolean;
        timeout?: number;
        host?: string;
        endpoint?: string;
        protocol?: string;
        port?: number;
        retry?:
            | number
            | {
                  times: number;
                  interval: number;
              };
        proxy?: string;
    }

    interface Error {
        statusCode: number;
        message: string;
    }

    interface AttachmentParams {
        data: string | Buffer | NodeJS.ReadWriteStream;
        filename?: string;
        knownLength?: number;
        contentType?: string;
    }

    interface Attachment {
        data: string | Buffer | NodeJS.ReadWriteStream;
        filename?: string;
        knownLength?: number;
        contentType?: string;
        getType(): string;
    }

    interface MailgunExport {
        new (options: ConstructorParams): Mailgun;
        (options: ConstructorParams): Mailgun;
    }

    namespace messages {
        interface SendData {
            from?: string;
            to: string | string[];
            cc?: string;
            bcc?: string;
            subject?: string;
            text?: string;
            html?: string;
            attachment?: string | Buffer | NodeJS.ReadWriteStream | Attachment;
        }

        interface BatchData extends SendData {
            "recipient-variables"?: BatchSendRecipientVars;
        }

        interface BatchSendRecipientVars {
            [email: string]: {
                first: string;
                id: number;
            };
        }

        interface SendResponse {
            message: string;
            id: string;
        }
    }

    namespace lists {
        interface MemberCreateData {
            subscribed: boolean;
            address: string;
            name: string;
            vars?: object;
        }

        interface MemberUpdateData {
            subscribed: boolean;
            name: string;
            vars?: object;
        }

        interface Members {
            create(
                data: MemberCreateData,
                callback?: (err: Error, data: any) => void
            ): Promise<any>;

            add(
                data: MemberCreateData[],
                callback?: (err: Error, data: any) => void
            ): Promise<any>;

            list(callback?: (err: Error, data: any) => void): Promise<any>;
        }

        interface Member {
            update(
                data: MemberUpdateData,
                callback?: (err: Error, data: any) => void
            ): Promise<any>;
        }
    }

    namespace validation {
        interface ParseResponse {
            parsed: string[];
            unparseable: string[];
        }

        interface ValidateResponse {
            is_valid: boolean;
        }
    }

    interface Mailgun {
        messages(): Messages;
        lists(list: string): Lists;
        Attachment: new (params: AttachmentParams) => Attachment;
        validateWebhook(
            bodyTimestamp: number,
            bodyToken: string,
            bodySignature: string
        ): boolean;

        parse(
            addressList: string[],
            callback?: (error: Error, body: validation.ValidateResponse) => void
        ): Promise<validation.ParseResponse>;

        validate(
            address: string,
            callback?: (error: Error, body: validation.ValidateResponse) => void
        ): Promise<validation.ValidateResponse>;
    }

    interface Lists {
        info(callback?: (error: Error, data: any) => void): Promise<any>;
        members(): lists.Members;
        members(member: string): lists.Member;
    }

    interface Messages {
        send(
            data: messages.SendData | messages.BatchData,
            callback?: (error: Error, body: messages.SendResponse) => void
        ): Promise<messages.SendResponse>;
    }
}
