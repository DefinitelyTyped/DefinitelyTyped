// Type definitions for Nodemailer 3.1.5
// Project: https://github.com/andris9/Nodemailer
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import directTransport = require("nodemailer-direct-transport");
import smtpTransport = require("nodemailer-smtp-transport");
import sesTransport = require("nodemailer-ses-transport")

/**
 * Transporter plugin
 */
export interface Plugin {
    (mail: SendMailOptions, callback?: (error: Error, info: SentMessageInfo) => void): void;
}

/**
 * This is what you use to send mail
 */
export interface Transporter {
    /**
     * Send a mail with callback
     */
    sendMail(mail: SendMailOptions, callback: (error: Error, info: SentMessageInfo) => void): void;

    /**
     * Send a mail
     * return Promise
     */
    sendMail(mail: SendMailOptions): Promise<SentMessageInfo>;

    /**
     * Attach a plugin. 'compile' and 'stream' plugins can be attached with use(plugin) method
     *
     * @param step is a string, either 'compile' or 'stream' thatd defines when the plugin should be hooked
     * @param pluginFunc is a function that takes two arguments: the mail object and a callback function
     */
    use(step: string, plugin: Plugin): void;

    /**
     * Verifies connection with server
     */
    verify(callback: (error: Error, success?: boolean) => void): void;

    /**
     * Verifies connection with server
     */
    verify(): Promise<void>;

    /**
     * Close all connections
     */
    close?(): void;
}

/**
 * Create a direct transporter
 */
export declare function createTransport(options?: directTransport.DirectOptions, defaults?: Object): Transporter;
/**
 * Create an SMTP transporter
 */
export declare function createTransport(options?: smtpTransport.SmtpOptions, defaults?: Object): Transporter;
/**
 * Create an SMTP transporter using a connection url
 */
export declare function createTransport(connectionUrl: string, defaults?: Object): Transporter;
/**
 * Create an AWS SES transporter
 */
export declare function createTransport(options?: sesTransport.SesOptions, defaults?: Object): Transporter;
/**
 * Create a transporter from a given implementation
 */
export declare function createTransport(transport: Transport, defaults?: Object): Transporter;
export interface AttachmentObject {
    /**
     * filename to be reported as the name of the attached file, use of unicode is allowed
     */
    filename?: string | undefined;
    /**
     * optional content id for using inline images in HTML message source
     */
    cid?: string | undefined;
    /**
     * Pathname or URL to use streaming
     */
    path?: string | undefined;
    /**
     * String, Buffer or a Stream contents for the attachment
     */
    content: string|Buffer|NodeJS.ReadableStream;
    /**
     * If set and content is string, then encodes the content to a Buffer using the specified encoding. Example values: base64, hex, 'binary' etc. Useful if you want to use binary attachments in a JSON formatted e-mail object.
     */
    encoding?: string | undefined;
    /**
     * optional content type for the attachment, if not set will be derived from the filename property
     */
    contentType?: string | undefined;
    /**
     * optional content disposition type for the attachment, defaults to 'attachment'
     */
    contentDisposition?: string | undefined;
}

export interface SendMailOptions {
    /**
     * The e-mail address of the sender. All e-mail addresses can be plain 'sender@server.com' or formatted 'Sender Name <sender@server.com>', see here for details
     */
    from?: string | undefined;
    /**
     * An e-mail address that will appear on the Sender: field
     */
    sender?: string | undefined;
    /**
     * Comma separated list or an array of recipients e-mail addresses that will appear on the To: field
     */
    to?: string | string[] | undefined;
    /**
     * Comma separated list or an array of recipients e-mail addresses that will appear on the Cc: field
     */
    cc?: string | string[] | undefined;
    /**
     * Comma separated list or an array of recipients e-mail addresses that will appear on the Bcc: field
     */
    bcc?: string | string[] | undefined;
    /**
     * Comma separated list or an array of e-mail addresses that will appear on the Reply-To: field
     */
    replyTo?: string | string[] | undefined;
    /**
     * The message-id this message is replying
     */
    inReplyTo?: string | undefined;
    /**
     * Message-id list (an array or space separated string)
     */
    references?: string | string[] | undefined;
    /**
     * The subject of the e-mail
     */
    subject?: string | undefined;
    /**
     * The plaintext version of the message as an Unicode string, Buffer, Stream or an object {path: '...'}
     */
    text?: string|Buffer|NodeJS.ReadableStream|AttachmentObject | undefined;
    /**
     * The HTML version of the message as an Unicode string, Buffer, Stream or an object {path: '...'}
     */
    html?: string|Buffer|NodeJS.ReadableStream|AttachmentObject | undefined;
    /**
     * An object or array of additional header fields (e.g. {"X-Key-Name": "key value"} or [{key: "X-Key-Name", value: "val1"}, {key: "X-Key-Name", value: "val2"}])
     */
    headers?: any;
    /**
     * An array of attachment objects (see below for details)
     */
    attachments?: AttachmentObject[] | undefined;
    /**
     * An array of alternative text contents (in addition to text and html parts) (see below for details)
     */
    alternatives?: AttachmentObject[] | undefined;
    /**
     * optional Message-Id value, random value will be generated if not set
     */
    messageId?: string | undefined;
    /**
     * optional Date value, current UTC string will be used if not set
     */
    date?: Date | undefined;
    /**
     * optional transfer encoding for the textual parts (defaults to 'quoted-printable')
     */
    encoding?: string | undefined;
}

export interface SentMessageInfo {
    /**
     * most transports should return the final Message-Id value used with this property
     */
    messageId: string;
    /**
     * includes the envelope object for the message
     */
    envelope: any;
    /**
     * is an array returned by SMTP transports (includes recipient addresses that were accepted by the server)
     */
    accepted: string[];
    /**
     * is an array returned by SMTP transports (includes recipient addresses that were rejected by the server)
     */
    rejected: string[];
    /**
     * is an array returned by Direct SMTP transport. Includes recipient addresses that were temporarily rejected together with the server response
     */
    pending?: string[] | undefined;
    /**
     * is a string returned by SMTP transports and includes the last SMTP response from the server
     */
    response: string;
}

/**
 * This is what you implement to create a new transporter yourself
 */
export interface Transport {
    name: string;
    version: string;
    send(mail: SendMailOptions, callback?: (error: Error, info: SentMessageInfo) => void): void;
    close(): void;
}
