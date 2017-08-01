// Type definitions for nodemailer-smtp-transport 2.7
// Project: https://github.com/andris9/nodemailer-smtp-transport
// Definitions by: Rogier Schouten <https://github.com/rogierschouten/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import tls = require("tls");
import nodemailer = require('nodemailer');

declare namespace smtpTransport {
    export interface AuthOptions {
        /** is the username */
        user?: string;

        /** is the password for the user if normal login is used */
        pass?: string;

        /** indicates the authetication type, defaults to ‘login’, other option is ‘oauth2’ */
        type?: any;

        /** is the registered client id of the application */
        clientId?: string;

        /** is the registered client secret of the application */
        clientSecret?: string;

        /** is an optional refresh token. If it is provided then Nodemailer tries to generate a new access token if existing one expires or fails */
        refreshToken?: string;

        /** is the access token for the user. Required only if refreshToken is not available and there is no token refresh callback specified */
        accessToken?: string;

        /** is an optional expiration time for the current accessToken */
        expires?: number;

        /** is an optional HTTP endpoint for requesting new access tokens. This value defaults to Gmail */
        accessUrl?: string;

        /** service client id, you can find it from the “client_id” field in the service key file */
        serviceClient?: string;

        /** is the private key contents, you can find it from the “private_key” field in the service key file */
        privateKey?: string;
    }

    export interface SmtpOptions {
        /**
         * Fills in certain SMTP configurations options (e.g. 'host', 'port', and 'secure') for
         * well-known services. Possible values:
         *   - '1und1'
         *   - 'AOL'
         *   - 'DebugMail.io'
         *   - 'DynectEmail'
         *   - 'FastMail'
         *   - 'GandiMail'
         *   - 'Gmail'
         *   - 'Godaddy'
         *   - 'GodaddyAsia'
         *   - 'GodaddyEurope'
         *   - 'hot.ee'
         *   - 'Hotmail'
         *   - 'iCloud'
         *   - 'mail.ee'
         *   - 'Mail.ru'
         *   - 'Mailgun'
         *   - 'Mailjet'
         *   - 'Mandrill'
         *   - 'Naver'
         *   - 'Postmark'
         *   - 'QQ'
         *   - 'QQex'
         *   - 'SendCloud'
         *   - 'SendGrid'
         *   - 'SES'
         *   - 'Sparkpost'
         *   - 'Yahoo'
         *   - 'Yandex'
         *   - 'Zoho'
         */
        service?: string;

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
         * defines authentication data (see authentication section below)
         */
        auth?: AuthOptions;

        /**
         * if this is true and secure is false then Nodemailer tries to use STARTTLS even if the server does not advertise support for it. If the connection can not be encrypted then message is not sent
         */
        requireTLS?: boolean;

        /**
         * if this is true and secure is false then TLS is not used even if the server supports STARTTLS extension
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
         * optional bunyan compatible logger instance. If set to true then logs to console. If value is not set or is false then nothing is logged
         */
        logger?: boolean;

        /**
         * defines preferred authentication method, eg. 'PLAIN'
         */
        authMethod?: string;

        /**
         * defines additional options to be passed to the socket constructor, eg. {rejectUnauthorized: true}
         */
        tls?: tls.ConnectionOptions;

        /**
         * see Pooled SMTP for details about connection pooling
         */
        pool?: {
            /**
             * set to true to use pooled connections (defaults to false) instead of creating a new connection for every email
             */
            pool?: boolean;

            /**
             * is the count of maximum simultaneous connections to make against the SMTP server (defaults to 5)
             */
            maxConnections?: boolean;

            /**
             * limits the message count to be sent using a single connection (defaults to 100). After maxMessages is reached the connection is dropped and a new one is created for the following messages
             */
            maxMessages?: boolean;

            /**
             * defines the time measuring period in milliseconds (defaults to 1000, ie. to 1 second) for rate limiting
             */
            rateDelta?: boolean;

            /**
             * limits the message count to be sent in rateDelta time. Once rateLimit is reached, sending is paused until the end of the measuring period.
             */
            rateLimit?: boolean;
        };

        /**
         * if true, then does not allow to use files as content. Use it when you want to use JSON data from untrusted source as the email. If an attachment or message node tries to fetch something from a file the sending returns an error
         */
        disableFileAccess?: boolean;

        /**
         *  if true, then does not allow to use Urls as content
         */
        disableUrlAccess?: boolean;

        /**
         *  a proxy URL
         */
        proxy?: string;
    }
}

declare function smtpTransport(options: smtpTransport.SmtpOptions): nodemailer.Transport;

export = smtpTransport;
