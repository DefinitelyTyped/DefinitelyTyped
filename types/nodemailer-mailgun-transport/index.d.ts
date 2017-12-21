// Type definitions for nodemailer-mailgun-transport 1.3
// Project: https://github.com/orliesaurus/nodemailer-mailgun-transport
// Definitions by: Oto Ciulis <https://github.com/otociulis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as nodemailer from 'nodemailer';
import Mail = require('nodemailer/lib/mailer');
import MailMessage = require('nodemailer/lib/mailer/mail-message');

declare namespace mailgunTransport {
    interface AuthOptions {
        api_key: string;
        domain?: string;
    }

    interface Options {
        auth: AuthOptions;
    }

    type MailOptions = Mail.Options;

    type Information = object;

    class MailgunTransport implements nodemailer.Transport {
        name: string;
        version: string;
        send(mail: MailMessage, callback: (err: Error | null, info?: Information) => void): void;
    }
}

declare function mailgunTransport(options: mailgunTransport.Options): mailgunTransport.MailgunTransport;

export = mailgunTransport;
