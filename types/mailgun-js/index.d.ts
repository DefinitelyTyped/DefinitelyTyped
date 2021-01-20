// Type definitions for mailgun-js 0.22
// Project: https://github.com/bojand/mailgun-js
// Definitions by: Sampson Oliver <https://github.com/sampsonjoliver>
//                 Andi Pätzold <https://github.com/andipaetzold>
//                 Jiri Balcar <https://github.com/JiriBalcar>
//                 Ryan Leonard <https://github.com/CodeLenny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import * as FormData from 'form-data';

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
        testMode?: boolean;
        testModeLogger?: (httpOptions: LoggerHttpOptions, payload: string, form: FormData) => void;
    }

    interface LoggerHttpOptions {
        hostname: string;
        port: number;
        protocol: string;
        path: string;
        method: string;
        headers: any;
        auth: string;
        agent: false;
        timeout: number;
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

    type AttachmentData = string | Buffer | NodeJS.ReadWriteStream | Attachment;

    interface MailgunExport {
        new (options: ConstructorParams): Mailgun;
        (options: ConstructorParams): Mailgun;
    }

    interface MailgunRequest {
        (resource: string, data: any, callback: (error: Error, response: any) => void): void;
        (resource: string, callback: (error: Error, response: any) => void): void;
        (resource: string, data?: any): Promise<any>;
    }

    namespace messages {
        interface SendData {
            from?: string;
            to: string | string[];
            cc?: string | string[];
            bcc?: string | string[];
            subject?: string;
            text?: string;
            html?: string;
            'amp-html'?: string;
            attachment?: AttachmentData | ReadonlyArray<AttachmentData>;
            inline?: AttachmentData | ReadonlyArray<AttachmentData>;

            // Mailgun options
            'o:testmode'?: 'yes' | 'no' | 'true' | 'false' | 'True' | 'False';
            'o:tag'?: string | string[];
            'o:deliverytime'?: string;
            'o:dkim'?: 'yes' | 'no' | boolean;
            'o:tracking'?: 'yes' | 'no' | boolean;
            'o:tracking-opens'?: 'yes' | 'no' | boolean;
            'o:tracking-clicks'?: 'yes' | 'no' | 'htmlonly' | boolean;
            'o:require-tls'?: 'yes' | 'no' | 'True' | 'False';
            'o:skip-verification'?: 'yes' | 'no' | 'True' | 'False';

            // Standard email headers
            'h:Reply-To'?: string;
            'h:In-Reply-To'?: string;
            'h:References'?: string;
            'h:Importance'?: string;
        }

        interface BatchData extends SendData {
            'recipient-variables'?: string | BatchSendRecipientVars;
        }

        type SendTemplateData = SendData & {
            template: string;
            [templateVariable: string]: any;
        };

        interface BatchSendRecipientVars {
            [email: string]: {[key: string]: any};
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

        interface MemberAddMultipleData {
            members: Array<{
                name?: string;
                address: string;
                subscribed?: boolean;
            }>;
            upsert?: boolean;
        }

        interface MemberUpdateData {
            subscribed: boolean;
            name: string;
            vars?: object;
        }

        interface Members {
            create(data: MemberCreateData, callback?: (err: Error, data: any) => void): Promise<any>;

            add(data: MemberAddMultipleData, callback?: (err: Error, data: any) => void): Promise<any>;

            list(callback?: (err: Error, data: any) => void): Promise<any>;
        }

        interface Member {
            update(data: MemberUpdateData, callback?: (err: Error, data: any) => void): Promise<any>;

            delete(callback?: (err: Error, data: any) => void): Promise<any>;
        }
    }

    namespace validation {
        interface ParseResponse {
            parsed: string[];
            unparseable: string[];
        }

        type ValidationCallback = (error: Error, body: ValidateResponse) => void;

        interface ValidationOptionsPublic {
            api_key?: string;
            mailbox_verification?: boolean | 'true' | 'false';
        }

        interface ValidationOptionsPrivate {
            mailbox_verification?: boolean | 'true' | 'false';
        }

        interface ValidateResponse {
            address: string;
            did_you_mean: string | null;
            is_disposable_address: boolean;
            is_role_address: boolean;
            is_valid: boolean;
            mailbox_verification: 'true' | 'false' | 'unknown' | null;
            parts: {
                display_name: string | null;
                domain: string;
                local_part: string;
            };
        }
    }

    interface Mailgun {
        messages(): Messages;
        lists(list: string): Lists;
        Attachment: new (params: AttachmentParams) => Attachment;
        validateWebhook(bodyTimestamp: number, bodyToken: string, bodySignature: string): boolean;

        parse(addressList: string[], callback?: validation.ValidationCallback): Promise<validation.ParseResponse>;

        validate(address: string, callback: validation.ValidationCallback): void;
        validate(
            address: string,
            opts: validation.ValidationOptionsPublic,
            callback: validation.ValidationCallback,
        ): void;
        // tslint:disable-next-line unified-signatures
        validate(address: string, isPrivate: boolean, callback: validation.ValidationCallback): void;
        validate(
            address: string,
            isPrivate: false,
            opts: validation.ValidationOptionsPublic,
            callback: validation.ValidationCallback,
        ): void;
        validate(
            address: string,
            isPrivate: true,
            opts: validation.ValidationOptionsPrivate,
            callback: validation.ValidationCallback,
        ): void;

        validate(address: string, opts?: validation.ValidationOptionsPublic): Promise<validation.ValidateResponse>;
        validate(
            address: string,
            isPrivate: false,
            opts?: validation.ValidationOptionsPublic,
        ): Promise<validation.ValidateResponse>;
        validate(
            address: string,
            isPrivate: true,
            opts?: validation.ValidationOptionsPrivate,
        ): Promise<validation.ValidateResponse>;

        // Generic requests
        get: MailgunRequest;
        post: MailgunRequest;
        put: MailgunRequest;
        delete: MailgunRequest;
    }

    interface DeleteResponse {
        address: string;
        message: string;
    }

    interface Lists {
        info(callback?: (error: Error, data: any) => void): Promise<any>;
        members(): lists.Members;
        members(member: string): lists.Member;
        delete(callback?: (error: Error, body: DeleteResponse) => void): Promise<DeleteResponse>;
    }

    interface Messages {
        send(
            data: messages.SendData | messages.BatchData | messages.SendTemplateData,
            callback?: (error: Error, body: messages.SendResponse) => void,
        ): Promise<messages.SendResponse>;
    }
}
