// Type definitions for maildev 0.11.0
// Project: https://github.com/djfarrelly/maildev
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

/**
 * Interface for {@link MailDev} options.
 */
interface MailDevOptions {
    /**
     * SMTP host for outgoing emails
     *
     * @type {string}
     */
    outgoingHost?: string;

    /**
     * SMTP password for outgoing emails
     *
     * @type {string}
     */
    outgoingPass?: string;

    /**
     * SMTP port for outgoing emails.
     *
     * @type {number}
     */
    outgoingPort?: number;

    /**
     * SMTP user for outgoing emails
     *
     * @type {string}
     */
    outgoingUser?: string;

    /**
     * SMTP port to catch emails.
     *
     * @type {number}
     */
    smtp?: number;
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
         * @public
         * @param {MailDevOptions} options The options.
         */
        constructor(options: MailDevOptions);

        /**
         * Deletes a given email by identifier.
         *
         * @public
         * @param {string}    id        The email identifier.
         * @param {Function}  callback  The error callback.
         */
        deleteEmail(id: string, callback?: (error: Error) => void): void;

        /**
         * Deletes all email and their attachments.
         *
         * @public
         * @param {Function} callback The error callback.
         */
        deleteAllEmail(callback?: (error: Error) => void): void;

        /**
         * Stops the SMTP server.
         *
         * @public
         * @param {Function} callback The error callback.
         */
        end(callback?: (error: Error) => void): void;

        /**
         * Accepts e-mail identifier, returns email object.
         *
         * @public
         * @param {string}    id        The e-mail identifier.
         * @param {Function}  callback  The error callback.
         */
        getEmail(id: string, callback?: (error: Error) => void): void;

        /**
         * Returns a readable stream of the raw e-mail.
         *
         * @public
         * @param {string} id The e-mail identifier.
         */
        getRawEmail(id: string, callback?: (error: Error, readStream: fs.ReadStream) => void): void;

        /**
         * Returns array of all e-mail.

         * @public
         */
        getAllEmail(done: (error: Error, emails: Array<Object>) => void): void;

        /**
         * Starts the SMTP server.
         *
         * @public
         * @param {Function} callback The error callback.
         */
        listen(callback?: (error: Error) => void): void;

        /**
         * Event called when a new e-mail is received. Callback receives single mail object.
         *
         * @public
         * @param {string}    eventName The event name.
         * @param {Function}  email     The email.
         */
        on(eventName: string, callback: (email: Object) => void): void;

        /**
         * Relay the e-mail.
         *
         * @param {string} idOrMailObject The identifier or mail object.
         * @param {Function} done The callback.
         */
        relayMail(idOrMailObject: string, done: (error: Error) => void): void;
    }

    var out: typeof MailDev;
    export = out;
}
