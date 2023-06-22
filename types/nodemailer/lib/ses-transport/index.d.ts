/// <reference types="node" />

import { EventEmitter } from 'events';

import { Transport, TransportOptions } from '../..';

import * as shared from '../shared';

import Mail = require('../mailer');
import MailMessage = require('../mailer/mail-message');
import MimeNode = require('../mime-node');

declare namespace SESTransport {
    interface MailOptions extends Mail.Options {
        /** list of keys that SendRawEmail method can take */
        ses?: MailSesOptions | undefined;
    }

    interface MailSesOptions {
        /**
         * The identity's email address. If you do not provide a value for this parameter, you must specify a "From" address in the raw text of the message. (You can also specify both.)  Amazon SES does not support the SMTPUTF8 extension, as described inRFC6531. For this reason, the local part of a source email address (the part of the email address that precedes the @ sign) may only contain 7-bit ASCII characters. If the domain part of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in RFC3492. The sender name (also known as the friendly name) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in RFC 2047. MIME encoded-word syntax uses the following form: =?charset?encoding?encoded-text?=.  If you specify the Source parameter and have feedback forwarding enabled, then bounces and complaints will be sent to this email address. This takes precedence over any Return-Path header that you might include in the raw text of the message.
         */
        Source?: string | undefined;
        /**
         * A list of destinations for the message, consisting of To:, CC:, and BCC: addresses.
         */
        Destinations?: string[] | undefined;
        /**
         * The raw email message itself. The message has to meet the following criteria:   The message has to contain a header and a body, separated by a blank line.   All of the required header fields must be present in the message.   Each part of a multipart MIME message must be formatted properly.   Attachments must be of a content type that Amazon SES supports. For a list on unsupported content types, see Unsupported Attachment Types in the Amazon SES Developer Guide.   The entire message must be base64-encoded.   If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, we highly recommend that you encode that content. For more information, see Sending Raw Email in the Amazon SES Developer Guide.   Per RFC 5321, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.
         */
        RawMessage?: {
            /**
             * The raw data of the message. This data needs to base64-encoded if you are accessing Amazon SES directly through the HTTPS interface. If you are accessing Amazon SES using an AWS SDK, the SDK takes care of the base 64-encoding for you. In all cases, the client must ensure that the message format complies with Internet email standards regarding email header fields, MIME types, and MIME encoding. The To:, CC:, and BCC: headers in the raw message can contain a group list. If you are using SendRawEmail with sending authorization, you can include X-headers in the raw message to specify the "Source," "From," and "Return-Path" addresses. For more information, see the documentation for SendRawEmail.   Do not include these X-headers in the DKIM signature, because they are removed by Amazon SES before sending the email.  For more information, go to the Amazon SES Developer Guide.
             */
            Data: Buffer|Uint8Array|{}|string;
        } | undefined;
        /**
         * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to specify a particular "From" address in the header of the raw email. Instead of using this parameter, you can use the X-header X-SES-FROM-ARN in the raw message of the email. If you use both the FromArn parameter and the corresponding X-header, Amazon SES uses the value of the FromArn parameter.  For information about when to use this parameter, see the description of SendRawEmail in this guide, or see the Amazon SES Developer Guide.
         */
        FromArn?: string | undefined;
        /**
         * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the Source parameter. For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to send from user@example.com, then you would specify the SourceArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the Source to be user@example.com. Instead of using this parameter, you can use the X-header X-SES-SOURCE-ARN in the raw message of the email. If you use both the SourceArn parameter and the corresponding X-header, Amazon SES uses the value of the SourceArn parameter.  For information about when to use this parameter, see the description of SendRawEmail in this guide, or see the Amazon SES Developer Guide.
         */
        SourceArn?: string | undefined;
        /**
         * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the ReturnPath parameter. For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the ReturnPathArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the ReturnPath to be feedback@example.com. Instead of using this parameter, you can use the X-header X-SES-RETURN-PATH-ARN in the raw message of the email. If you use both the ReturnPathArn parameter and the corresponding X-header, Amazon SES uses the value of the ReturnPathArn parameter.  For information about when to use this parameter, see the description of SendRawEmail in this guide, or see the Amazon SES Developer Guide.
         */
        ReturnPathArn?: string | undefined;
        /**
         * A list of tags, in the form of name/value pairs, to apply to an email that you send using SendRawEmail. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
         */
        Tags?: Array<{
            /**
             * The name of the tag. The name must:   This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).   Contain less than 256 characters.
             */
            Name: string;
            /**
             * The value of the tag. The value must:   This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).   Contain less than 256 characters.
             */
            Value: string;
        }> | undefined;
        /**
         * The name of the configuration set to use when you send an email using SendRawEmail.
         */
        ConfigurationSetName?: string | undefined;
    }

    interface Options extends MailOptions, TransportOptions {
        /** is an option that expects an instantiated aws.SES object */
        SES: any; // aws-sdk.SES object
        /** How many messages per second is allowed to be delivered to SES */
        maxConnections?: number | undefined;
        /** How many parallel connections to allow towards SES */
        sendingRate?: number | undefined;
    }

    interface SentMessageInfo {
        /** an envelope object {from:‘address’, to:[‘address’]} */
        envelope: MimeNode.Envelope;
        /** the Message-ID header value. This value is derived from the response of SES API, so it differs from the Message-ID values used in logging. */
        messageId: string;
        response: string;
        accepted: Array<string | Mail.Address>;
        rejected: Array<string | Mail.Address>;
        pending: Array<string | Mail.Address>;
    }
}

declare class SESTransport extends EventEmitter implements Transport<SESTransport.SentMessageInfo> {
    options: SESTransport.Options;

    logger: shared.Logger;
    mailer: Mail<SESTransport.SentMessageInfo>;

    name: string;
    version: string;

    ses: any;

    maxConnections: number;
    connections: number;
    sendingRate: number;
    sendingRateTTL: number | null;
    rateInterval: number;
    rateMessages: Array<{ ts: number, pending: boolean }>;
    pending: Array<{ mail: Mail<SESTransport.SentMessageInfo>; callback(err: Error | null, info: SESTransport.SentMessageInfo): void; }>;
    idling: boolean;

    constructor(options: SESTransport.Options);

    /** Schedules a sending of a message */
    send(mail: MailMessage<SESTransport.SentMessageInfo>, callback: (err: Error | null, info: SESTransport.SentMessageInfo) => void): void;

    /** Returns true if there are free slots in the queue */
    isIdle(): boolean;

    /** Verifies SES configuration */
    verify(callback: (err: Error | null, success: true) => void): void;
    verify(): Promise<true>;

    addListener(event: 'idle', listener: () => void): this;

    emit(event: 'idle'): boolean;

    on(event: 'idle', listener: () => void): this;

    once(event: 'idle', listener: () => void): this;

    prependListener(event: 'idle', listener: () => void): this;

    prependOnceListener(event: 'idle', listener: () => void): this;

    listeners(event: 'idle'): Array<() => void>;
}

export = SESTransport;
