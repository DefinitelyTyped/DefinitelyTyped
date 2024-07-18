/// <reference types="node"/>
import { EventEmitter } from "events";

export class SMTPServer extends EventEmitter {
    constructor(options: SMTPServerOptions);
    close(callback: (err?: Error) => any): any;
    listen(...args: any[]): void;
    onAuth(auth: Authentication, session: Session, callback: any): any;
    onClose(callback: (err?: Error) => any): any;
    onConnect(session: Session, callback: (err?: Error) => any): any;
    onData(stream: any, session: Session, callback: (err?: Error) => any): any;
    onMailFrom(address: Address, session: Session, callback: (err?: Error) => any): any;
    onRcptTo(address: Address, session: Session, callback: (err?: Error) => any): any;
}

export interface SMTPServerOptions {
    /**
     * if true, the connection will use TLS. The default is false.
     * If the server doesn't start in TLS mode,
     * it is still possible to upgrade clear text socket to
     * TLS socket with the STARTTLS command (unless you disable support for it).
     * If secure is true, additional tls options for tls.
     * createServer can be added directly onto this options object.
     */
    secure?: boolean | undefined;
    key?: any;
    cert?: any;
    ca?: any;
    /**
     * optional hostname of the server,
     *  used for identifying to the client (defaults to os.hostname())
     */
    name?: string | undefined;
    /**
     * optional greeting message.
     *  This message is appended to the default ESMTP response.
     */
    banner?: string | undefined;
    /**
     * optional maximum allowed message size in bytes,
     * see details:https://github.com/andris9/smtp-server#using-size-extension
     */
    size?: number | undefined;
    /**
     * optional array of allowed authentication methods, defaults to ['PLAIN', 'LOGIN'].
     * Only the methods listed in this array are allowed,
     * so if you set it to ['XOAUTH2'] then PLAIN and LOGIN are not available.
     * Use ['PLAIN', 'LOGIN', 'XOAUTH2'] to allow all three.
     * Authentication is only allowed in secure mode
     * (either the server is started with secure: true option or STARTTLS command is used)
     */
    authMethods?: string[] | undefined;
    /**
     * allow authentication, but do not require it
     */
    authOptional?: any;
    /**
     * optional array of disabled commands (see all supported commands here).
     * For example if you want to disable authentication,
     * use ['AUTH'] as this value.
     * If you want to allow authentication in clear text, set it to ['STARTTLS'].
     */
    disabledCommands?: string[] | undefined;
    /**
     * optional boolean, if set to true then allow using STARTTLS
     * but do not advertise or require it. It only makes sense
     * when creating integration test servers for testing the scenario
     * where you want to try STARTTLS even when it is not advertised
     */
    hideSTARTTLS?: boolean | undefined;
    /**
     * optional boolean, if set to true then does not show PIPELINING in feature list
     */
    hidePIPELINING?: boolean | undefined;
    /**
     * optional boolean, if set to true then does not show 8BITMIME in features list
     */
    hide8BITMIME?: boolean | undefined;
    /**
     * optional boolean, if set to true then does not show SMTPUTF8 in features list
     */
    hideSMTPUTF8?: boolean | undefined;
    /**
     * optional boolean, if set to true allows authentication even if connection is not secured first
     */
    allowInsecureAuth?: boolean | undefined;
    /**
     * optional boolean, if set to true then does not try to reverse resolve client hostname
     */
    disableReverseLookup?: boolean | undefined;
    /**
     * optional Map or an object of TLS options for SNI where servername is the key. Overrided by SNICallback.
     */
    sniOptions?: Object | undefined;
    /**
     * optional bunyan compatible logger instance.
     * If set to true then logs to console.
     * If value is not set or is false then nothing is logged
     */
    logger?: boolean | undefined;
    /**
     * sets the maximum number of concurrently connected clients, defaults to Infinity
     */
    maxClients?: number | undefined; // defaults to Infinity
    /**
     * boolean, if set to true expects to be behind a proxy that emits a
     * PROXY header{http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt} (version 1 only)
     */
    useProxy?: boolean | undefined;
    /**
     * boolean, if set to true, enables usage of
     * XCLIENT{http://www.postfix.org/XCLIENT_README.html} extension to override connection properties.
     * See session.xClient (Map object) for the details provided by the client
     */
    useXClient?: boolean | undefined;
    /**
     * boolean, if set to true, enables usage of XFORWARD{http://www.postfix.org/XFORWARD_README.html} extension.
     * See session.xForward (Map object) for the details provided by the client
     */
    useXForward?: boolean | undefined;
    /**
     * boolean, if set to true use LMTP protocol instead of SMTP
     */
    lmtp?: boolean | undefined;
    /**
     * How many milliseconds of inactivity to allow before disconnecting the client (defaults to 1 minute)
     */
    socketTimeout?: number | undefined; // millisceonds
    /**
     * How many millisceonds to wait before disconnecting pending
     * connections once server.close() has been called (defaults to 30 seconds)
     */
    closeTimeout?: number | undefined; // millisceonds
    /**
     * The callback to handle authentications (see details https://github.com/andris9/smtp-server#handling-authentication)
     */
    onAuth?:
        | ((
            auth: Authentication,
            session: Session,
            callback: (err?: Error, response?: AuthenticationResponse) => any,
        ) => any)
        | undefined;
    /**
     * The callback to handle the client connection. (see details https://github.com/andris9/smtp-server#validating-client-connection)
     */
    onConnect?: ((session: Session, callback: (err?: Error) => any) => any) | undefined;
    /**
     * the callback to validate MAIL FROM commands (see details https://github.com/andris9/smtp-server#validating-sender-addresses)
     */
    onMailFrom?: ((address: Address, session: Session, callback: (err?: Error) => any) => any) | undefined;
    /**
     * The callback to validate RCPT TO commands (see details https://github.com/andris9/smtp-server#validating-recipient-addresses)
     */
    onRcptTo?: ((address: Address, session: Session, callback: (err?: Error) => any) => any) | undefined;
    /**
     * the callback to handle incoming messages (see details https://github.com/andris9/smtp-server#processing-incoming-message)
     */
    onData?: ((stream: any, session: Session, callback: (err?: Error) => any) => any) | undefined;
    /**
     * the callback that informs about closed client connection
     */
    onClose?: ((session: Session) => any) | undefined;
}

export interface Authentication {
    /**
     * indicates the authentication method used, 'PLAIN', 'LOGIN' or 'XOAUTH2'
     */
    method: "PLAIN" | "LOGIN" | "XOAUTH2"; // 'PLAIN', 'LOGIN' or 'XOAUTH2'
    /**
     * the username of the user
     */
    username?: string | undefined;
    /**
     * the password if LOGIN or PLAIN was used
     */
    password?: string | undefined;
    /**
     *  the OAuth2 bearer access token if 'XOAUTH2' was used as the authentication method
     */
    accessToken?: string | undefined;
    /**
     * a function for validating CRAM-MD5 challenge responses.
     * Takes the password of the user as an argument and returns true if the response matches the password
     */
    validatePassword: (password: string) => boolean;
}

export interface AuthenticationResponse {
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
    data?: {} | undefined;
}

export interface Session {
    /**
     * random string identificator generated when the client connected
     */
    id: string;
    /**
     * the IP address for the connected client
     */
    remoteAddress: Address;
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
    hostNameApearsAs: string;
    /**
     * Envelope Object
     */
    envelope: Envelope;
}

export interface Envelope {
    /**
     * includes an address object or is set to false
     */
    mailFrom: Address;
    /**
     * includes an array of address objects
     */
    rcptTo: Address[];
}

export interface Address {
    /**
     * the address provided with the MAIL FROM or RCPT TO command
     */
    address: string;
    /**
     * an object with additional arguments (all key names are uppercase)
     */
    args: Object;
}
