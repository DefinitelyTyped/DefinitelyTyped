// Type definitions for nodemailer-smtp-pool 1.0.1
// Project: https://github.com/andris9/nodemailer-smtp-pool
// Definitions by: Rogier Schouten <https://github.com/rogierschouten/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import tls = require("tls");
import nodemailer = require("nodemailer");

declare namespace smtpPool {

    export interface AuthOptions {
        user?: string;
        pass?: string;
        xoauth2?: any;
    }

    export interface SmtpPoolOptions {
        /**
         * is the port to connect to (defaults to 25 or 465)
         */
        port?: number;
        /**
         * is the hostname or IP address to connect to (defaults to 'localhost')
         */
        host?: string;
        /**
         * defines if the connection should use SSL (if true) or not (if false)
         */
        secure?: boolean;
        /**
         *  defines authentication data (see authentication section below)
         */
        auth?: AuthOptions;
        /**
         *  turns off STARTTLS support if true
         */
        ignoreTLS?: boolean;
        /**
         * optional hostname of the client, used for identifying to the server
         */
        name?: string;
        /**
         * is the local interface to bind to for network connections
         */
        localAddress?: string;
        /**
         * how many milliseconds to wait for the connection to establish
         */
        connectionTimeout?: number;
        /**
         * how many milliseconds to wait for the greeting after connection is established
         */
        greetingTimeout?: number;
        /**
         * how many milliseconds of inactivity to allow
         */
        socketTimeout?: number;
        /**
         * if true, the connection emits all traffic between client and server as 'log' events
         */
        debug?: boolean;
        /**
         * defines preferred authentication method, eg. 'PLAIN'
         */
        authMethod?: string;
        /**
         *  defines additional options to be passed to the socket constructor, eg. {rejectUnauthorized: true}
         */
        tls?: tls.ConnectionOptions;
        /**
         * (defaults to 5) is the count of maximum simultaneous connections to make against the SMTP server
         */
        maxConnections?: number;
        /**
         * (defaults to 100) limits the message count to be sent using a single connection. After maxMessages messages the connection is dropped and a new one is created for the following messages
         */
        maxMessages?: number;
    }
}


declare function smtpPool(options: smtpPool.SmtpPoolOptions): nodemailer.Transport;
export = smtpPool;
