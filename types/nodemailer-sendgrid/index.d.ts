// Type definitions for nodemailer-sendgrid 1.0.3
// Project: https://github.com/nodemailer/nodemailer-sendgrid
// Definitions by: Luke Jones <https://github.com/luke-j>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface SendgridOptions {
  apiKey: string
}

export default function sendgrid(
  options: SendgridOptions
): import('nodemailer').Transport
