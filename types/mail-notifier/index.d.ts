/// <reference types="node" />

import { EventEmitter } from "events";
import { Config as ImapConfig } from "imap";

export = mailNotifier;

/**
 * Send mail event for each new email in IMAP inbox.
 *
 * Creates a new Notifier.
 *
 * @param config Options needed to establish an IMAP connection.
 * @param customDbg If set, the function will be called with args that contain some mail-notifier debug info.
 *
 * @example
 * const notifier = require('mail-notifier');
 *
 * const config: notifier.Config = {
 *   user: "yourimapuser",
 *   password: "yourimappassword",
 *   host: "imap.host.com",
 *   port: 993, // imap port
 *   tls: true,// use secure connection
 *   tlsOptions: { rejectUnauthorized: false }
 * };
 *
 * notifier(config)
 *   .on('mail', mail => console.log(mail))
 *   .start();
 *
 * // Keep it running forever:
 * const n = notifier(config)
 *   .on('end', () => n.start()) // session closed
 *   .on('mail', mail => console.log(mail.from[0].address, mail.subject))
 *   .start();
 */
declare function mailNotifier(config: mailNotifier.Config, customDbg?: mailNotifier.DebugFn): mailNotifier.Notifier;

declare namespace mailNotifier {
    interface Notifier extends EventEmitter {
        /**
         * Start listening for incoming emails.
         */
        start: () => this;
        /**
         * Stop listening and close IMAP connection.
         */
        stop: () => this;
        scan: (callback: () => void) => this;

        addListener<U extends keyof NotifierEvents>(event: U, listener: NotifierEvents[U]): this;
        on<U extends keyof NotifierEvents>(event: U, listener: NotifierEvents[U]): this;
        once<U extends keyof NotifierEvents>(event: U, listener: NotifierEvents[U]): this;
        removeListener<U extends keyof NotifierEvents>(event: U, listener: NotifierEvents[U]): this;
        off<U extends keyof NotifierEvents>(event: U, listener: NotifierEvents[U]): this;
        prependListener<U extends keyof NotifierEvents>(event: U, listener: NotifierEvents[U]): this;
        prependOnceListener<U extends keyof NotifierEvents>(event: U, listener: NotifierEvents[U]): this;

        emit<U extends keyof NotifierEvents>(event: U, ...args: Parameters<NotifierEvents[U]>): boolean;
    }

    interface Config extends ImapConfig {
        /**
         * Mail box read from.
         * @default 'INBOX'
         */
        box?: string | undefined;
        /**
         * Search query.
         * @default ['UNSEEN']
         */
        search?: string[] | undefined;
        /**
         * Mark mail as read.
         * @default true
         */
        markSeen?: boolean | undefined;
        /**
         * Debugger for the internally used imap instance.
         */
        debug?: DebugFn | undefined;
    }

    interface NotifierEvents {
        connected: () => void;
        mail: (email: EmailContent) => void;
        end: () => void;
        error: (error: Error) => void;
    }

    interface EmailContent {
        /**
         * Text body.
         */
        text: string;
        /**
         * Html body.
         */
        html: string;
        headers: EmailHeaders;
        /**
         * The subject line.
         */
        subject: string;
        from: EmailAddress[];
        cc?: EmailAddress[] | undefined;
        bcc?: EmailAddress[] | undefined;
        /**
         * Reference message id values. Not set if no reference values present.
         */
        references?: string[] | undefined;
        messageId?: string | undefined;
        /**
         * `In-Reply-To` message id values. Not set if no `In-Reply-To values present.
         */
        inReplyTo?: string[] | undefined;
        /**
         * Priority of the e-mail.
         */
        priority?: "normal" | "high" | "low" | undefined;
        /**
         * If date could not be resolved or is not found this field is not set. Check the original date string from headers.date.
         */
        date?: Date | undefined;
        attachments?: EmailAttachment[] | undefined;
        uid: number;
        flags: string[];
    }

    interface EmailHeaders {
        "delivered-to"?: string | undefined;
        received?: string[] | undefined;
        "x-received"?: string[] | undefined;
        "arc-seal"?: string | undefined;
        "arc-message-signature"?: string | undefined;
        "arc-authentication-results"?: string | undefined;
        "return-path"?: string | undefined;
        "received-spf"?: string | undefined;
        "authentication-results"?: string | undefined;
        "dkim-signature"?: string | undefined;
        "x-google-dkim-signature"?: string | undefined;
        "x-gm-message-state"?: string | undefined;
        "x-google-smtp-source"?: string | undefined;
        "mime-version"?: string | undefined;
        from?: string | undefined;
        date?: string | undefined;
        "message-id"?: string | undefined;
        subject?: string | undefined;
        to?: string | undefined;
        "content-type"?: string | undefined;
        [key: string]: any;
    }

    interface EmailAddress {
        address: string;
        name: string;
    }

    interface EmailAttachment {
        contentType: string;
        fileName: string;
        contentDisposition: string;
        contentId: string;
        transferEncoding: string;
        length: number;
        generatedFileName: string;
        checksum: string;
        content: Buffer;
    }

    type DebugFn = (...args: any[]) => void;
}
