/// <reference types="node"/>

/**
 * Interface for {@link MailDev} options.
 */
interface MailDevOptions {
    /**
     * IP Address to bind SMTP service to', '0.0.0.0'
     */
    ip?: string | undefined;

    /**
     * SMTP host for outgoing emails
     */
    outgoingHost?: string | undefined;

    /**
     * SMTP password for outgoing emails
     */
    outgoingPass?: string | undefined;

    /**
     * SMTP port for outgoing emails.
     */
    outgoingPort?: number | undefined;

    /**
     * SMTP user for outgoing emails
     */
    outgoingUser?: string | undefined;

    /**
     * Use SMTP SSL for outgoing emails
     */
    outgoingSecure?: boolean | undefined;

    /**
     * SMTP port to catch emails.
     */
    smtp?: number | undefined;

    /**
     * Port to use for web UI
     */
    web?: number | undefined;

    /**
     * IP Address to bind HTTP service to
     */
    webIp?: string | undefined;

    /**
     * Do not start web UI
     */
    disableWeb?: boolean | undefined;

    /**
     * Do not output console.log messages
     */
    silent?: boolean | undefined;

    /**
     * HTTP user for GUI
     */
    webUser?: string | undefined;

    /**
     * HTTP password for GUI
     */
    webPass?: string | undefined;

    /**
     * Open the Web GUI after startup
     */
    open?: boolean | undefined;
}

/**
 * Interface for mail.
 */
interface Mail {
    /**
     * Identifier.
     */
    id?: string | undefined;

    /**
     * Client.
     */
    envelope?: Object | undefined;
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
        close(callback?: (error: Error) => void): void;

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
