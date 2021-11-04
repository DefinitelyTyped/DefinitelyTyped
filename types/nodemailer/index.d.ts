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

export type Transporter<T = any> = Mail<T>;

export type SentMessageInfo = any;

export interface Transport<T = any> {
    mailer?: Transporter<T> | undefined;

    name: string;
    version: string;

    send(mail: MailMessage<T>, callback: (err: Error | null, info: T) => void): void;

    verify?(callback: (err: Error | null, success: true) => void): void;
    verify?(): Promise<true>;

    close?(): void;
}

export interface TransportOptions {
    component?: string | undefined;
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
): Transporter<SMTPTransport.SentMessageInfo>;
export function createTransport(transport: SMTPPool | SMTPPool.Options, defaults?: SMTPPool.Options): Transporter<SMTPPool.SentMessageInfo>;
export function createTransport(
    transport: SendmailTransport | SendmailTransport.Options,
    defaults?: SendmailTransport.Options,
): Transporter<SendmailTransport.SentMessageInfo>;
export function createTransport(
    transport: StreamTransport | StreamTransport.Options,
    defaults?: StreamTransport.Options,
): Transporter<StreamTransport.SentMessageInfo>;
export function createTransport(
    transport: JSONTransport | JSONTransport.Options,
    defaults?: JSONTransport.Options,
): Transporter<JSONTransport.SentMessageInfo>;
export function createTransport(
    transport: SESTransport | SESTransport.Options,
    defaults?: SESTransport.Options,
): Transporter<SESTransport.SentMessageInfo>;
export function createTransport<T>(transport: Transport<T> | TransportOptions, defaults?: TransportOptions): Transporter<T>;

export function createTestAccount(
    apiUrl: string,
    callback: (err: Error | null, testAccount: TestAccount) => void,
): void;
export function createTestAccount(callback: (err: Error | null, testAccount: TestAccount) => void): void;
export function createTestAccount(apiUrl?: string): Promise<TestAccount>;

export function getTestMessageUrl(info: SESTransport.SentMessageInfo | SMTPTransport.SentMessageInfo): string | false;
