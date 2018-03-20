/// <reference types="node" />

import { EventEmitter } from 'events';

import { Transport, TransportOptions } from '..';

import * as shared from './shared';

import Mail = require('./mailer');
import MailMessage = require('./mailer/mail-message');
import MimeNode = require('./mime-node');

declare namespace SendmailTransport {
    type MailOptions = Mail.Options;

    interface Options extends MailOptions, TransportOptions {
        sendmail: true;
        /** path to the sendmail command (defaults to ‘sendmail’) */
        path?: string;
        /** either ‘windows’ or ‘unix’ (default). Forces all newlines in the output to either use Windows syntax <CR><LF> or Unix syntax <LF> */
        newline?: string;
        /** an optional array of command line options to pass to the sendmail command (ie. ["-f", "foo@blurdybloop.com"]). This overrides all default arguments except for ’-i’ and recipient list so you need to make sure you have all required arguments set (ie. the ‘-f’ flag). */
        args?: string[];
    }

    interface SentMessageInfo {
        envelope: MimeNode.Envelope;
        messageId: string;
        response: string;
    }
}

declare class SendmailTransport implements Transport {
    options: SendmailTransport.Options;
    logger: shared.Logger;
    mailer: Mail;
    name: string;
    version: string;
    path: string;
    args: string[] | false;
    winbreak: boolean;

    constructor(options: SendmailTransport.Options);

    /** Compiles a mailcomposer message and forwards it to handler that sends it */
    send(mail: MailMessage, callback: (err: Error | null, info: SendmailTransport.SentMessageInfo) => void): void;
}

export = SendmailTransport;
