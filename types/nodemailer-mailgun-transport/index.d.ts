// Type definitions for nodemailer-mailgun-transport 1.4
// Project: https://github.com/orliesaurus/nodemailer-mailgun-transport, http://mailgun.com
// Definitions by: Oto Ciulis <https://github.com/otociulis>
//                 Joachim Wallsin <https://github.com/calvinmcgee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

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
        proxy?: string | boolean;
        host?: string;
        protocol?: string;
        port?: number;
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
