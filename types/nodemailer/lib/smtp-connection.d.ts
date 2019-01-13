/// <reference types="node" />

import { EventEmitter } from 'events';
import * as net from 'net';
import { Readable } from 'stream';
import * as tls from 'tls';

import * as shared from './shared';

import MimeNode = require('./mime-node');
import XOAuth2 = require('./xoauth2');

type ms = number;

declare namespace SMTPConnection {
    interface Credentials {
        /** the username */
        user: string;
        /** then password */
        pass: string;
    }

    type OAuth2 = XOAuth2.Options;

    interface AuthenticationTypeLogin extends Credentials {
        /** indicates the authetication type, defaults to ‘login’, other option is ‘oauth2’ */
        type?: 'login' | 'Login' | 'LOGIN';
    }

    interface AuthenticationTypeOAuth2 extends OAuth2 {
        /** indicates the authetication type, defaults to ‘login’, other option is ‘oauth2’ */
        type?: 'oauth2' | 'OAuth2' | 'OAUTH2';
    }

    type AuthenticationType = AuthenticationTypeLogin | AuthenticationTypeOAuth2;

    interface AuthenticationCredentials {
        /** normal authentication object */
        credentials: Credentials;
    }

    interface AuthenticationOAuth2 {
        /**  if set then forces smtp-connection to use XOAuth2 for authentication */
        oauth2: OAuth2;
    }

    type DSNOption = 'NEVER' | 'SUCCESS' | 'FAILURE' | 'DELAY';

    interface DSNOptions {
        /** return either the full message ‘FULL’ or only headers ‘HDRS’ */
        ret?: 'Full' | 'HDRS';
        /** sender’s ‘envelope identifier’ for tracking */
        envid?: string;
        /** when to send a DSN. Multiple options are OK - array or comma delimited. NEVER must appear by itself. */
        notify?: DSNOption | DSNOption[];
        /** original recipient */
        orcpt?: string;
    }

    interface Envelope {
        /** includes an address object or is set to false */
        from: string | false;
        /** the recipient address or an array of addresses */
        to: string | string[];
        /** an optional value of the predicted size of the message in bytes. This value is used if the server supports the SIZE extension (RFC1870) */
        size?: number;
        /** if true then inform the server that this message might contain bytes outside 7bit ascii range */
        use8BitMime?: boolean;
        /** the dsn options */
        dsn?: DSNOptions;
    }

    interface SMTPError extends NodeJS.ErrnoException {
        /** string code identifying the error, for example ‘EAUTH’ is returned when authentication */
        code?: string;
        /** the last response received from the server (if the error is caused by an error response from the server) */
        response?: string;
        /** the numeric response code of the response string (if available) */
        responseCode?: number;
        /** command which provoked an error */
        command?: string;
    }

    interface SentMessageInfo {
        /** an array of accepted recipient addresses. Normally this array should contain at least one address except when in LMTP mode. In this case the message itself might have succeeded but all recipients were rejected after sending the message. */
        accepted: string[];
        /** an array of rejected recipient addresses. This array includes both the addresses that were rejected before sending the message and addresses rejected after sending it if using LMTP */
        rejected: string[];
        /** if some recipients were rejected then this property holds an array of error objects for the rejected recipients */
        rejectedErrors?: SMTPError[];
        /** the last response received from the server */
        response: string;
        /** how long was envelope prepared */
        envelopeTime: number;
        /** how long was send stream prepared */
        messageTime: number;
        /** how many bytes were streamed */
        messageSize: number;
    }

    interface Options {
        /** the hostname or IP address to connect to (defaults to ‘localhost’) */
        host?: string;
        /** the port to connect to (defaults to 25 or 465) */
        port?: number;
        /** defines authentication data */
        auth?: AuthenticationType;
        /** defines if the connection should use SSL (if true) or not (if false) */
        secure?: boolean;
        /** turns off STARTTLS support if true */
        ignoreTLS?: boolean;
        /** forces the client to use STARTTLS. Returns an error if upgrading the connection is not possible or fails. */
        requireTLS?: boolean;
        /** tries to use STARTTLS and continues normally if it fails */
        opportunisticTLS?: boolean;
        /** optional hostname of the client, used for identifying to the server */
        name?: string;
        /** the local interface to bind to for network connections */
        localAddress?: string;
        /** how many milliseconds to wait for the connection to establish */
        connectionTimeout?: ms;
        /** how many milliseconds to wait for the greeting after connection is established */
        greetingTimeout?: ms;
        /** how many milliseconds of inactivity to allow */
        socketTimeout?: ms;
        /** optional bunyan compatible logger instance. If set to true then logs to console. If value is not set or is false then nothing is logged */
        logger?: shared.Logger | boolean;
        /** if set to true, then logs SMTP traffic without message content */
        transactionLog?: boolean;
        /** if set to true, then logs SMTP traffic and message content, otherwise logs only transaction events */
        debug?: boolean;
        /** defines preferred authentication method, e.g. ‘PLAIN’ */
        authMethod?: string;
        /** defines additional options to be passed to the socket constructor, e.g. {rejectUnauthorized: true} */
        tls?: tls.ConnectionOptions;
        /** initialized socket to use instead of creating a new one */
        socket?: net.Socket;
        /** connected socket to use instead of creating and connecting a new one. If secure option is true, then socket is upgraded from plaintext to ciphertext */
        connection?: net.Socket;
    }
}

declare class SMTPConnection extends EventEmitter {
    options: SMTPConnection.Options;

    logger: shared.Logger;

    id: string;
    stage: 'init' | 'connected';

    secureConnection: boolean;
    alreadySecured: boolean;

    port: number;
    host: string;

    name: string;
    /** Expose version nr, just for the reference */
    version: string;

    /** If true, then the user is authenticated */
    authenticated: boolean;
    /** If set to true, this instance is no longer active */
    destroyed: boolean;
    /** Defines if the current connection is secure or not. If not, STARTTLS can be used if available */
    secure: boolean;

    lastServerResponse: string | false;

    /** The socket connecting to the server */
    _socket: net.Socket;

    constructor(options?: SMTPConnection.Options);

    /** Creates a connection to a SMTP server and sets up connection listener */
    connect(callback: (err?: SMTPConnection.SMTPError) => void): void;
    /** Sends QUIT */
    quit(): void;
    /** Closes the connection to the server */
    close(): void;
    /** Authenticate user */
    login(auth: SMTPConnection.AuthenticationCredentials | SMTPConnection.AuthenticationOAuth2 | SMTPConnection.Credentials, callback: (err?: SMTPConnection.SMTPError) => void): void;
    /** Sends a message */
    send(envelope: SMTPConnection.Envelope, message: string | Buffer | Readable, callback: (err: SMTPConnection.SMTPError | null, info: SMTPConnection.SentMessageInfo) => void): void;
    /** Resets connection state */
    reset(callback: (err?: SMTPConnection.SMTPError) => void): void;

    addListener(event: 'connect' | 'end', listener: () => void): this;
    addListener(event: 'error', listener: (err: SMTPConnection.SMTPError) => void): this;

    emit(event: 'connect' | 'end'): boolean;
    emit(event: 'error', error: Error): boolean;

    listenerCount(event: 'connect' | 'end' | 'error'): number;

    listeners(event: 'connect' | 'end'): Array<() => void>;
    listeners(event: 'error'): Array<(err: SMTPConnection.SMTPError) => void>;

    off(event: 'connect' | 'end', listener: () => void): this;
    off(event: 'error', listener: (err: SMTPConnection.SMTPError) => void): this;

    on(event: 'connect' | 'end', listener: () => void): this;
    on(event: 'error', listener: (err: SMTPConnection.SMTPError) => void): this;

    once(event: 'connect' | 'end', listener: () => void): this;
    once(event: 'error', listener: (err: SMTPConnection.SMTPError) => void): this;

    prependListener(event: 'connect' | 'end', listener: () => void): this;
    prependListener(event: 'error', listener: (err: SMTPConnection.SMTPError) => void): this;

    prependOnceListener(event: 'connect' | 'end', listener: () => void): this;
    prependOnceListener(event: 'error', listener: (err: SMTPConnection.SMTPError) => void): this;

    rawListeners(event: 'connect' | 'end'): Array<() => void>;
    rawListeners(event: 'error'): Array<(err: SMTPConnection.SMTPError) => void>;

    removeAllListener(event: 'connect' | 'end' | 'error'): this;

    removeListener(event: 'connect' | 'end', listener: () => void): this;
    removeListener(event: 'error', listener: (err: SMTPConnection.SMTPError) => void): this;
}

export = SMTPConnection;
