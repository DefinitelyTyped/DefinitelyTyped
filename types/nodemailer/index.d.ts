// Type definitions for Nodemailer 6.4
// Project: https://github.com/nodemailer/nodemailer, https://nodemailer.com
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
//                 Piotr Roszatycki <https://github.com/dex4er>
//                 Daniel Chao <https://github.com/bioball>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

/// <reference types="node" />

import JSONTransport = require('./lib/json-transport');
import Mail = require('./lib/mailer');
import MailMessage = require('./lib/mailer/mail-message');
import SendmailTransport = require('./lib/sendmail-transport');
import SESTransport = require('./lib/ses-transport');
import SMTPPool = require('./lib/smtp-pool');
import SMTPTransport = require('./lib/smtp-transport');
import StreamTransport = require('./lib/stream-transport');

export type SendMailOptions = Mail.Options;

export type SentMessageInfo = any;

export type Transporter = Mail;

export interface Transport {
    mailer?: Transporter;

    name: string;
    version: string;

    send(mail: MailMessage, callback: (err: Error | null, info: SentMessageInfo) => void): void;

    verify?(callback: (err: Error | null, success: true) => void): void;
    verify?(): Promise<true>;

    close?(): void;
}

export interface TransportOptions {
    component?: string;
}

export interface TestAccount {
    user: string;
    pass: string;
    smtp: { host: string; port: number; secure: boolean };
    imap: { host: string; port: number; secure: boolean };
    pop3: { host: string; port: number; secure: boolean };
    web: string;
}

export function createTransport(
    transport?: SMTPTransport | SMTPTransport.Options | string,
    defaults?: SMTPTransport.Options,
): Transporter;
export function createTransport(transport: SMTPPool | SMTPPool.Options, defaults?: SMTPPool.Options): Transporter;
export function createTransport(
    transport: SendmailTransport | SendmailTransport.Options,
    defaults?: SendmailTransport.Options,
): Transporter;
export function createTransport(
    transport: StreamTransport | StreamTransport.Options,
    defaults?: StreamTransport.Options,
): Transporter;
export function createTransport(
    transport: JSONTransport | JSONTransport.Options,
    defaults?: JSONTransport.Options,
): Transporter;
export function createTransport(
    transport: SESTransport | SESTransport.Options,
    defaults?: SESTransport.Options,
): Transporter;
export function createTransport(transport: Transport | TransportOptions, defaults?: TransportOptions): Transporter;

export function createTestAccount(
    apiUrl: string,
    callback: (err: Error | null, testAccount: TestAccount) => void,
): void;
export function createTestAccount(callback: (err: Error | null, testAccount: TestAccount) => void): void;
export function createTestAccount(apiUrl?: string): Promise<TestAccount>;

export function getTestMessageUrl(info: SESTransport.SentMessageInfo | SMTPTransport.SentMessageInfo): string | false;
