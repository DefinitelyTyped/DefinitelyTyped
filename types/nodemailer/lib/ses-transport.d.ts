/// <reference types="node" />

import { EventEmitter } from 'events';

import { Transport, TransportOptions } from '..';

import * as shared from './shared';

import Mail = require('./mailer');
import MailMessage = require('./mailer/mail-message');
import MimeNode = require('./mime-node');

declare namespace SESTransport {
    interface MailOptions extends Mail.Options {
        /** All keys are added to the SendRawEmail method options */
        ses?: object;
    }

    interface Options extends MailOptions, TransportOptions {
        /** is an option that expects an instantiated aws.SES object */
        SES: any; // aws-sdk.SES object
        /** How many messages per second is allowed to be delivered to SES */
        maxConnections?: number;
        /** How many parallel connections to allow towards SES */
        sendingRate?: number;
    }

    interface SentMessageInfo {
        /** an envelope object {from:‘address’, to:[‘address’]} */
        envelope: MimeNode.Envelope;
        /** the Message-ID header value. This value is derived from the response of SES API, so it differs from the Message-ID values used in logging. */
        messageId: string;
        response: string;
    }
}

declare class SESTransport extends EventEmitter implements Transport {
    options: SESTransport.Options;

    logger: shared.Logger;
    mailer: Mail;

    name: string;
    version: string;

    ses: any;

    maxConnections: number;
    connections: number;
    sendingRate: number;
    sendingRateTTL: number | null;
    rateInterval: number;
    rateMessages: Array<{ ts: number, pending: boolean }>;
    pending: Array<{ mail: Mail; callback(err: Error | null, info: SESTransport.SentMessageInfo): void; }>;
    idling: boolean;

    constructor(options: SESTransport.Options);

    /** Schedules a sending of a message */
    send(mail: MailMessage, callback: (err: Error | null, info: SESTransport.SentMessageInfo) => void): void;

    /** Returns true if there are free slots in the queue */
    isIdle(): boolean;

    /** Verifies SES configuration */
    verify(callback: (err: Error | null, success: true) => void): void;
    verify(): Promise<true>;

    addListener(event: 'idle', listener: () => void): this;

    emit(event: 'idle'): boolean;

    on(event: 'idle', listener: () => void): this;

    once(event: 'idle', listener: () => void): this;

    prependListener(event: 'idle', listener: () => void): this;

    prependOnceListener(event: 'idle', listener: () => void): this;

    listeners(event: 'idle'): Array<() => void>;
}

export = SESTransport;
