// Type definitions for nodemailer-sendgrid 1.0
// Project: https://github.com/nodemailer/nodemailer-sendgrid
// Definitions by: Luke Jones <https://github.com/luke-j>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { Transport } from 'nodemailer';

declare namespace nodemailerSendgrid {
    interface SendgridOptions {
        apiKey: string;
    }
}

declare function nodemailerSendgrid(options: nodemailerSendgrid.SendgridOptions): Transport;

export = nodemailerSendgrid;
