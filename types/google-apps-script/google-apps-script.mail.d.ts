/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
    namespace Mail {
        interface MailAdvancedParameters {
            /** an array of files to send with the email */
            attachments?: Base.BlobSource[] | undefined;
            /** a comma-separated list of email addresses to BCC */
            bcc?: string | undefined;
            /** the body of the email */
            body?: string | undefined;
            /** a comma-separated list of email addresses to CC */
            cc?: string | undefined;
            /** if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email */
            htmlBody?: string | undefined;
            /** a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" /> */
            inlineImages?: { [imageKey: string]: Base.BlobSource } | undefined;
            /** the name of the sender of the email (default: the user's name) */
            name?: string | undefined;
            /** true if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for G Suite accounts, not Gmail users */
            noReply?: boolean | undefined;
            /** an email address to use as the default reply-to address (default: the user's email address) */
            replyTo?: string | undefined;
            /** the subject of the email */
            subject?: string | undefined;
            /** the address of the recipient */
            to?: string | undefined;
        }
        /**
         * Sends email.
         *
         * This service allows users to send emails with complete control over the content of the email.
         * Unlike GmailApp, MailApp's sole purpose is sending email. MailApp cannot access a user's Gmail
         * inbox.
         *
         * Changes to scripts written using GmailApp are more likely to trigger a re-authorization
         * request from a user than MailApp scripts.
         */
        interface MailApp {
            getRemainingDailyQuota(): Integer;
            sendEmail(message: MailAdvancedParameters): void;
            sendEmail(recipient: string, subject: string, body: string): void;
            sendEmail(recipient: string, subject: string, body: string, options: MailAdvancedParameters): void;
            sendEmail(to: string, replyTo: string, subject: string, body: string): void;
        }
    }
}

declare var MailApp: GoogleAppsScript.Mail.MailApp;
