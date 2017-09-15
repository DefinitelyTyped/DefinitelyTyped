// Type definitions for nodemailer-mailgun-transport 1.3
// Project: https://github.com/orliesaurus/nodemailer-mailgun-transport
// Definitions by: Oto Ciulis <https://github.com/otociulis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as nodemailer from 'nodemailer';

export namespace mailgunTransport {
    export interface Options {
        auth: AuthOptions;
    }
    export interface AuthOptions {
        api_key: string;
        domain?: string;
    }
}

export function mailgunTransport(options: mailgunTransport.Options): nodemailer.Transport;

// export = mailgunTransport;
