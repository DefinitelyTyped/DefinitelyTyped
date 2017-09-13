// Type definitions for nodemailer-mailgun-transport 1.3
// Project: https://github.com/orliesaurus/nodemailer-mailgun-transport
// Definitions by: Oto Ciulis <https://github.com/otociulis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as nodemailer from 'nodemailer';

declare namespace mailgunTransport {
    interface AuthOptions {
        api_key: string;
        domain?: string;
    }
}

declare function mailgunTransport(options: mailgunTransport.AuthOptions): nodemailer.Transport;

export = mailgunTransport;
