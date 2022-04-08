// Type definitions for maildev 1.0.0-rc3
// Project: https://github.com/djfarrelly/maildev
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Zak Barbuto <https://github.com/zbarbuto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

/**
 * Interface for {@link MailDev} options.
 */
interface MailDevOptions {
    /**
     * IP Address to bind SMTP service to', '0.0.0.0'
     */
    ip?: string;

    /**
     * SMTP host for outgoing emails
     */
    outgoingHost?: string;

    /**
     * SMTP password for outgoing emails
     */
    outgoingPass?: string;

    /**
     * SMTP port for outgoing emails.
     */
    outgoingPort?: number;

    /**
     * SMTP user for outgoing emails
     */
    outgoingUser?: string;

    /**
     * Use SMTP SSL for outgoing emails
     */
    outgoingSecure?: boolean;

    /**
     * SMTP port to catch emails.
     */
    smtp?: number;

    /**
     * Port to use for web UI
     */
    web?: number;

    /**
     * IP Address to bind HTTP service to
     */
    webIp?: string;

    /**
     * Do not start web UI
     */
    disableWeb?: boolean;

    /**
     * Do not output console.log messages
     */
    silent?: boolean;

    /**
     * HTTP user for GUI
     */
    webUser?: string;

    /**
     * HTTP password for GUI
     */
    webPass?: string;

    /**
     * Open the Web GUI after startup
     */
    open?: boolean;
}

/**
 * Interface for mail.
 */
interface Mail {
    /**
     * Identifier.
     */
    id?: string;

    /**
     * Client.
     */
    envelope?: Object;
}

declare module "maildev" {
    import fs = require("fs");

    /**
     * Interface for {@link MailDev}.
     */
    class MailDev {
        /**
         * Constructor.
         *
         * @param options The options.
         */
        constructor(options: MailDevOptions);

        /**
         * Deletes a given email by identifier.
         *
         * @param  id        The email identifier.
         * @param  callback  The error callback.
         */
        deleteEmail(id: string, callback?: (error: Error) => void): void;

        /**
         * Deletes all email and their attachments.
         *
         * @param callback The error callback.
         */
        deleteAllEmail(callback?: (error: Error) => void): void;

        /**
         * Stops the SMTP server.
         *
         * @param callback The error callback.
         */
        end(callback?: (error: Error) => void): void;

        /**
         * Accepts e-mail identifier, returns email object.
         *
         * @param  id        The e-mail identifier.
         * @param  callback  The error callback.
         */
        getEmail(id: string, callback?: (error: Error) => void): void;

        /**
         * Returns a readable stream of the raw e-mail.
         *
         * @param id The e-mail identifier.
         */
        getRawEmail(id: string, callback?: (error: Error, readStream: fs.ReadStream) => void): void;

        /**
         * Returns array of all e-mail.
         */
        getAllEmail(done: (error: Error, emails: Array<Object>) => void): void;

        /**
         * Starts the SMTP server.
         *
         * @param callback The error callback.
         */
        listen(callback?: (error: Error) => void): void;

        /**
         * Event called when a new e-mail is received. Callback receives single mail object.
         *
         * @param  eventName The event name.
         * @param  email     The email.
         */
        on(eventName: string, callback: (email: Object) => void): void;

        /**
         * Relay the e-mail.
         *
         * @param idOrMailObject The identifier or mail object.
         * @param done The callback.
         */
        relayMail(idOrMailObject: string, done: (error: Error) => void): void;
    }

    var out: typeof MailDev;
    export = out;
}
