import * as nodemailer from "nodemailer";
import Mail = require("nodemailer/lib/mailer");
import MailMessage = require("nodemailer/lib/mailer/mail-message");

declare namespace mailgunTransport {
    interface AuthOptions {
        api_key: string;
        domain?: string | undefined;
    }

    interface AliasAuthOptions {
        apiKey: string;
        domain?: string | undefined;
    }

    interface Options {
        auth: AuthOptions | AliasAuthOptions;
        proxy?: string | boolean | undefined;
        host?: string | undefined;
        protocol?: string | undefined;
        port?: number | undefined;
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
