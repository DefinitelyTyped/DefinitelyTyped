/// <reference types="node" />

import tls = require("tls");
import nodemailer = require("nodemailer");

declare namespace smtpPool {
    export interface AuthOptions {
        user?: string | undefined;
        pass?: string | undefined;
        xoauth2?: any;
    }

    export interface SmtpPoolOptions {
        /**
         * is the port to connect to (defaults to 25 or 465)
         */
        port?: number | undefined;
        /**
         * is the hostname or IP address to connect to (defaults to 'localhost')
         */
        host?: string | undefined;
        /**
         * defines if the connection should use SSL (if true) or not (if false)
         */
        secure?: boolean | undefined;
        /**
         *  defines authentication data (see authentication section below)
         */
        auth?: AuthOptions | undefined;
        /**
         *  turns off STARTTLS support if true
         */
        ignoreTLS?: boolean | undefined;
        /**
         * optional hostname of the client, used for identifying to the server
         */
        name?: string | undefined;
        /**
         * is the local interface to bind to for network connections
         */
        localAddress?: string | undefined;
        /**
         * how many milliseconds to wait for the connection to establish
         */
        connectionTimeout?: number | undefined;
        /**
         * how many milliseconds to wait for the greeting after connection is established
         */
        greetingTimeout?: number | undefined;
        /**
         * how many milliseconds of inactivity to allow
         */
        socketTimeout?: number | undefined;
        /**
         * if true, the connection emits all traffic between client and server as 'log' events
         */
        debug?: boolean | undefined;
        /**
         * defines preferred authentication method, eg. 'PLAIN'
         */
        authMethod?: string | undefined;
        /**
         *  defines additional options to be passed to the socket constructor, eg. {rejectUnauthorized: true}
         */
        tls?: tls.ConnectionOptions | undefined;
        /**
         * (defaults to 5) is the count of maximum simultaneous connections to make against the SMTP server
         */
        maxConnections?: number | undefined;
        /**
         * (defaults to 100) limits the message count to be sent using a single connection. After maxMessages messages the connection is dropped and a new one is created for the following messages
         */
        maxMessages?: number | undefined;
    }
}

declare function smtpPool(options: smtpPool.SmtpPoolOptions): nodemailer.Transport;
export = smtpPool;
