// Type definitions for smtp-server 3.3
// Project: https://github.com/nodemailer/smtp-server
// Definitions by: markisme <https://github.com/markisme>
//                 taisiias <https://github.com/Taisiias>
//                 Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
/// <reference types="nodemailer" />

import { EventEmitter } from 'events';
import * as net from 'net';
import * as shared from 'nodemailer/lib/shared';
import { Readable } from 'stream';
import * as tls from 'tls';

export type ms = number;

export interface SMTPServerAddress {
    /**
     * the address provided with the MAIL FROM or RCPT TO command
     */
    address: string;
    /**
     * an object with additional arguments (all key names are uppercase)
     */
    args: object;
}

export interface SMTPServerAuthentication {
    /**
     * indicates the authentication method used, 'PLAIN', 'LOGIN' or 'XOAUTH2'
     */
    method: 'PLAIN' | 'LOGIN' | 'XOAUTH2';
    /**
     * the username of the user
     */
    username?: string;
    /**
     * the password if LOGIN or PLAIN was used
     */
    password?: string;
    /**
     *  the OAuth2 bearer access token if 'XOAUTH2' was used as the authentication method
     */
    accessToken?: string;
    /**
     * a function for validating CRAM-MD5 challenge responses.
     * Takes the password of the user as an argument and returns true if the response matches the password
     */
    validatePassword(password: string): boolean;
}

export interface SMTPServerAuthenticationResponse {
    /**
     * can be any value - if this is set then the user is considered logged in
     * and this value is used later with the session data to identify the user.
     * If this value is empty, then the authentication is considered failed
     */
    user: any;
    /**
     * an object to return if XOAUTH2 authentication failed (do not set the error object in this case).
     * This value is serialized to JSON and base64 encoded automatically, so you can just return the object
     */
    data?: object;
}

export interface SMTPServerSession {
    /**
     * random string identificator generated when the client connected
     */
    id: string;
    /**
     * the IP address for the connected client
     */
    remoteAddress: SMTPServerAddress;
    /**
     * reverse resolved hostname for remoteAddress
     */
    clientHostname: string;
    /**
     * the opening SMTP command (HELO/EHLO/LHLO)
     */
    openingCommand: string;
    /**
     * hostname the client provided with HELO/EHLO call
     */
    hostNameAppearsAs: string;
    /**
     * Envelope Object
     */
    envelope: SMTPServerEnvelope;
    transmissionType: string;

    tlsOptions: tls.TlsOptions;
}

export interface SMTPServerEnvelope {
    /**
     * includes an address object or is set to false
     */
    mailFrom: SMTPServerAddress;
    /**
     * includes an array of address objects
     */
    rcptTo: SMTPServerAddress[];
}

export interface SMTPServerOptions extends tls.TlsOptions {
    /**
     * if true, the connection will use TLS. The default is false.
     * If the server doesn't start in TLS mode,
     * it is still possible to upgrade clear text socket to
     * TLS socket with the STARTTLS command (unless you disable support for it).
     * If secure is true, additional tls options for tls.
     * createServer can be added directly onto this options object.
     */
    secure?: boolean;
    /** optional private keys in PEM format */
    key?: string | string[] | Buffer | Buffer[] | Array<{ pem: string | Buffer, passphrase: string }>;
    /** optional cert chains in PEM format */
    cert?: string | string[] | Buffer | Buffer[];
    /** optionally override the trusted CA certificates */
    ca?: string | string[] | Buffer | Buffer[];
    /**
     * optional hostname of the server,
     * used for identifying to the client (defaults to os.hostname())
     */
    name?: string;
    /**
     * optional greeting message.
     * This message is appended to the default ESMTP response.
     */
    banner?: string;
    /**
     * optional maximum allowed message size in bytes,
     * see details:https://github.com/andris9/smtp-server#using-size-extension
     */
    size?: number;
    /**
     * optional array of allowed authentication methods, defaults to ['PLAIN', 'LOGIN'].
     * Only the methods listed in this array are allowed,
     * so if you set it to ['XOAUTH2'] then PLAIN and LOGIN are not available.
     * Use ['PLAIN', 'LOGIN', 'XOAUTH2'] to allow all three.
     * Authentication is only allowed in secure mode
     * (either the server is started with secure: true option or STARTTLS command is used)
     */
    authMethods?: string[];
    /**
     * allow authentication, but do not require it
     */
    authOptional?: boolean;
    /**
     * optional array of disabled commands (see all supported commands here).
     * For example if you want to disable authentication,
     * use ['AUTH'] as this value.
     * If you want to allow authentication in clear text, set it to ['STARTTLS'].
     */
    disabledCommands?: string[]; // TODO ('AUTH' | 'STARTTLS' | 'XCLIENT' | 'XFORWARD')[];
    /**
     * optional boolean, if set to true then allow using STARTTLS
     * but do not advertise or require it. It only makes sense
     * when creating integration test servers for testing the scenario
     * where you want to try STARTTLS even when it is not advertised
     */
    hideSTARTTLS?: boolean;
    /**
     * optional boolean, if set to true then does not show PIPELINING in feature list
     */
    hidePIPELINING?: boolean;
    /**
     * optional boolean, if set to true then does not show 8BITMIME in features list
     */
    hide8BITMIME?: boolean;
    /**
     * optional boolean, if set to true then does not show SMTPUTF8 in features list
     */
    hideSMTPUTF8?: boolean;
    /**
     * optional boolean, if set to true allows authentication even if connection is not secured first
     */
    allowInsecureAuth?: boolean;
    /**
     * optional boolean, if set to true then does not try to reverse resolve client hostname
     */
    disableReverseLookup?: boolean;
    /**
     * optional Map or an object of TLS options for SNI where servername is the key. Overrided by SNICallback.
     */
    sniOptions?: { [servername: string]: tls.TlsOptions } | Map<string, tls.TlsOptions>;
    /**
     * optional boolean, if set to true then upgrade sockets to TLS immediately after connection is established. Works with secure: true
     */
    needsUpgrade?: boolean;
    /**
     * optional bunyan compatible logger instance.
     * If set to true then logs to console.
     * If value is not set or is false then nothing is logged
     */
    logger?: shared.Logger | boolean;
    /**
     * sets the maximum number of concurrently connected clients, defaults to Infinity
     */
    maxClients?: number;
    /**
     * boolean, if set to true expects to be behind a proxy that emits a
     * PROXY header{http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt} (version 1 only)
     */
    useProxy?: boolean;
    /**
     * boolean, if set to true, enables usage of
     * XCLIENT{http://www.postfix.org/XCLIENT_README.html} extension to override connection properties.
     * See session.xClient (Map object) for the details provided by the client
     */
    useXClient?: boolean;
    /**
     * boolean, if set to true, enables usage of XFORWARD{http://www.postfix.org/XFORWARD_README.html} extension.
     * See session.xForward (Map object) for the details provided by the client
     */
    useXForward?: boolean;
    /**
     * boolean, if set to true use LMTP protocol instead of SMTP
     */
    lmtp?: boolean;
    /**
     * How many milliseconds of inactivity to allow before disconnecting the client (defaults to 1 minute)
     */
    socketTimeout?: ms;
    /**
     * How many millisceonds to wait before disconnecting pending
     * connections once server.close() has been called (defaults to 30 seconds)
     */
    closeTimeout?: ms;
    /**
     * The callback to handle authentications (see details https://github.com/andris9/smtp-server#handling-authentication)
     */
    onAuth?(auth: SMTPServerAuthentication, session: SMTPServerSession, callback: (err: Error | null | undefined, response: SMTPServerAuthenticationResponse) => void): void;
    /**
     * The callback to handle the client connection. (see details https://github.com/andris9/smtp-server#validating-client-connection)
     */
    onConnect?(session: SMTPServerSession, callback: (err?: Error | null) => void): void;
    /**
     * the callback to validate MAIL FROM commands (see details https://github.com/andris9/smtp-server#validating-sender-addresses)
     */
    onMailFrom?(address: SMTPServerAddress, session: SMTPServerSession, callback: (err?: Error | null) => void): void;
    /**
     * The callback to validate RCPT TO commands (see details https://github.com/andris9/smtp-server#validating-recipient-addresses)
     */
    onRcptTo?(address: SMTPServerAddress, session: SMTPServerSession, callback: (err?: Error | null) => void): void;
    /**
     * the callback to handle incoming messages (see details https://github.com/andris9/smtp-server#processing-incoming-message)
     */
    onData?(stream: Readable, session: SMTPServerSession, callback: (err?: Error | null) => void): void;
    /**
     * the callback that informs about closed client connection
     */
    onClose?(session: SMTPServerSession, callback: (err?: Error | null) => void): void;
}

/** Creates a SMTP server instance */
export class SMTPServer extends EventEmitter {
    options: SMTPServerOptions;
    logger: shared.Logger;
    secureContext: Map<string, tls.SecureContext>;
    connections: Set<any>;
    server: net.Server;

    constructor(options?: SMTPServerOptions);

    /** Start listening on selected port and interface */
    listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void): net.Server;
    listen(port?: number, hostname?: string, listeningListener?: () => void): net.Server;
    listen(port?: number, backlog?: number, listeningListener?: () => void): net.Server; // tslint:disable-line unified-signatures
    listen(port?: number, listeningListener?: () => void): net.Server;
    listen(path: string, backlog?: number, listeningListener?: () => void): net.Server;
    listen(path: string, listeningListener?: () => void): void;
    listen(options: net.ListenOptions, listeningListener?: () => void): net.Server;
    listen(handle: any, backlog?: number, listeningListener?: () => void): net.Server; // tslint:disable-line unified-signatures
    listen(handle: any, listeningListener?: () => void): net.Server; // tslint:disable-line unified-signatures

    /** Closes the server */
    close(callback: (err?: Error | null) => void): void;

    updateSecureContext(options: tls.TlsOptions): void;

    /** Authentication handler. Override this */
    onAuth(auth: SMTPServerAuthentication, session: SMTPServerSession, callback: (err: Error | null | undefined, response: SMTPServerAuthenticationResponse) => void): void;
    onClose(session: SMTPServerSession, callback: (err?: Error | null) => void): void;
    onConnect(session: SMTPServerSession, callback: (err?: Error | null) => void): void;
    onData(stream: Readable, session: SMTPServerSession, callback: (err?: Error | null) => void): void;
    onMailFrom(address: SMTPServerAddress, session: SMTPServerSession, callback: (err?: Error | null) => void): void;
    onRcptTo(address: SMTPServerAddress, session: SMTPServerSession, callback: (err?: Error | null) => void): void;

    addListener(event: 'close', listener: () => void): this;
    addListener(event: 'error', listener: (err: Error) => void): this;

    emit(event: 'close'): boolean;
    emit(event: 'error', err: Error): boolean;

    on(event: 'close', listener: () => void): this;
    on(event: 'error', listener: (err: Error) => void): this;

    once(event: 'close', listener: () => void): this;
    once(event: 'error', listener: (err: Error) => void): this;

    prependListener(event: 'close', listener: () => void): this;
    prependListener(event: 'error', listener: (err: Error) => void): this;

    prependOnceListener(event: 'close', listener: () => void): this;
    prependOnceListener(event: 'error', listener: (err: Error) => void): this;

    listeners(event: 'close'): Array<() => void>;
    listeners(event: 'error'): Array<(err: Error) => void>;
}
