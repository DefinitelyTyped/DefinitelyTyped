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
     *
     * @type {string}
     */
    ip?: string;

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
     * Use SMTP SSL for outgoing emails
     *
     * @type {boolean}
     */
    outgoingSecure?: boolean;

    /**
     * SMTP port to catch emails.
     *
     * @type {number}
     */
    smtp?: number;

    /**
     * Port to use for web UI
     *
     * @type {number}
     */
    web?: number;

    /**
     * IP Address to bind HTTP service to
     *
     * @type {string}
     */
    webIp?: string;

    /**
     * Do not start web UI
     *
     * @type {boolean}
     */
    disableWeb?: boolean;

    /**
     * Do not output console.log messages
     *
     * @type {boolean}
     */
    silent?: boolean;

    /**
     * HTTP user for GUI
     *
     * @type {string}
     */
    webUser?: string;

    /**
     * HTTP password for GUI
     *
     * @type {string}
     */
    webPass?: string;

    /**
     * Open the Web GUI after startup
     *
     * @type {boolean}
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
