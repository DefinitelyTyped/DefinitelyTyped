// Type definitions for SmtpJs 3.0
// Project: https://smtpjs.com/
// Definitions by: Linda Paiste <https://github.com/lindapaiste>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Email {
    /**
     * One or more attachments can be added to the email in the following format.
     * An attachment should have a `name` and can specify it's content through
     * either a `path` property or a `data` property.
     */
    type Attachment = {
        /**
         * The file name of the attachment.
         */
        name: string;
    } & ({
        /**
         * The URL of the file to attach, ie. "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
         */
        path: string;
    } | {
        /**
         * A base-64 encoded representation of the file.
         */
        data: string;
    });

    /**
     * These properties are required on email object regardless of authentication.
     */
    interface EmailContents {
        /**
         * The email address of the recipient, or an array of recipient email addresses.
         */
        To: string | string[];
        /**
         * The email address of the sender.
         */
        From: string;
        /**
         * The subject line of the email.
         */
        Subject: string;
        /**
         * The contents of the email, encoded to text.
         */
        Body: string;
        /**
         * OPTIONAL. An array of attachments to attach to the email.
         */
        Attachments?: Attachment[];
    }

    /**
     * Emails can be authenticated using a username and password on a host domain.
     */
    interface UnsecureEmail extends EmailContents {
        /**
         * The host SMTP server, ie. "smtp.yourisp.com"
         */
        Host: string;
        /**
         * Login username.
         */
        Username: string;
        /**
         * Login password.
         */
        Password: string;
    }

    /**
     * SMTP login credentials can be encrypted using a secure token.
     */
    interface SecureEmail extends EmailContents {
        /**
         * An alpha-numeric string, ie. "C973D7AD-F097-4B95-91F4-40ABC5567812"
         */
        SecureToken: string;
    }

    /**
     * The only public method of the `window.Email` object is the `send` function, which is used to send an email.
     *
     * @param email - The email object to send.
     * @return - The send function returns a Promise which will resolve when the email has been sent
     * or an error has occurred.  The resolved value of the Promise is a message of "OK" for success or an error
     * message on failure.
     */
    function send(email: UnsecureEmail | SecureEmail): Promise<string>;
}

export default Email;

export as namespace SmtpJS;

/**
 * The SmtpJS script exposes a variable `Email` on the global `window` object.
 * Include the <script> tag in the HTML code of your website:
 * <script src="https://smtpjs.com/v3/smtp.js"></script>
 * Load this types package in order to access the `window.Email` variable with type safety.
 */
declare global {
    interface Window {
        Email: typeof Email;
    }
}
