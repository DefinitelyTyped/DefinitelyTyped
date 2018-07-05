// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  export module Mail {
    /**
     * Sends email.
     *
     * This service allows users to send emails with complete control over the
     *  content of the email. Unlike GmailApp, MailApp's sole purpose is sending email. MailApp cannot
     *  access a user's Gmail inbox.
     *
     * Changes to scripts written using GmailApp are more likely to trigger a re-authorization
     *  request from a user than MailApp scripts.
     */
    export interface MailApp {
      getRemainingDailyQuota(): Integer;
      sendEmail(message: Object): void;
      sendEmail(recipient: string, subject: string, body: string): void;
      sendEmail(recipient: string, subject: string, body: string, options: Object): void;
      sendEmail(to: string, replyTo: string, subject: string, body: string): void;
    }

  }
}

declare var MailApp: GoogleAppsScript.Mail.MailApp;
