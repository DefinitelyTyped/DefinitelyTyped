/// <reference types="node" />

import tls = require("tls");
import nodemailer = require("nodemailer");

declare namespace smtpTransport {
    export interface AuthOptions {
        /** is the username */
        user?: string | undefined;

        /** is the password for the user if normal login is used */
        pass?: string | undefined;

        /** indicates the authetication type, defaults to ‘login’, other option is ‘oauth2’ */
        type?: any;

        /** is the registered client id of the application */
        clientId?: string | undefined;

        /** is the registered client secret of the application */
        clientSecret?: string | undefined;

        /** is an optional refresh token. If it is provided then Nodemailer tries to generate a new access token if existing one expires or fails */
        refreshToken?: string | undefined;

        /** is the access token for the user. Required only if refreshToken is not available and there is no token refresh callback specified */
        accessToken?: string | undefined;

        /** is an optional expiration time for the current accessToken */
        expires?: number | undefined;

        /** is an optional HTTP endpoint for requesting new access tokens. This value defaults to Gmail */
        accessUrl?: string | undefined;

        /** service client id, you can find it from the “client_id” field in the service key file */
        serviceClient?: string | undefined;

        /** is the private key contents, you can find it from the “private_key” field in the service key file */
        privateKey?: string | undefined;
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
        service?: string | undefined;

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
         * defines authentication data (see authentication section below)
         */
        auth?: AuthOptions | undefined;

        /**
         * if this is true and secure is false then Nodemailer tries to use STARTTLS even if the server does not advertise support for it. If the connection can not be encrypted then message is not sent
         */
        requireTLS?: boolean | undefined;

        /**
         * if this is true and secure is false then TLS is not used even if the server supports STARTTLS extension
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
         * optional bunyan compatible logger instance. If set to true then logs to console. If value is not set or is false then nothing is logged
         */
        logger?: boolean | undefined;

        /**
         * defines preferred authentication method, eg. 'PLAIN'
         */
        authMethod?: string | undefined;

        /**
         * defines additional options to be passed to the socket constructor, eg. {rejectUnauthorized: true}
         */
        tls?: tls.ConnectionOptions | undefined;

        /**
         * see Pooled SMTP for details about connection pooling
         */
        pool?: {
            /**
             * set to true to use pooled connections (defaults to false) instead of creating a new connection for every email
             */
            pool?: boolean | undefined;

            /**
             * is the count of maximum simultaneous connections to make against the SMTP server (defaults to 5)
             */
            maxConnections?: boolean | undefined;

            /**
             * limits the message count to be sent using a single connection (defaults to 100). After maxMessages is reached the connection is dropped and a new one is created for the following messages
             */
            maxMessages?: boolean | undefined;

            /**
             * defines the time measuring period in milliseconds (defaults to 1000, ie. to 1 second) for rate limiting
             */
            rateDelta?: boolean | undefined;

            /**
             * limits the message count to be sent in rateDelta time. Once rateLimit is reached, sending is paused until the end of the measuring period.
             */
            rateLimit?: boolean | undefined;
        } | undefined;

        /**
         * if true, then does not allow to use files as content. Use it when you want to use JSON data from untrusted source as the email. If an attachment or message node tries to fetch something from a file the sending returns an error
         */
        disableFileAccess?: boolean | undefined;

        /**
         *  if true, then does not allow to use Urls as content
         */
        disableUrlAccess?: boolean | undefined;

        /**
         *  a proxy URL
         */
        proxy?: string | undefined;
    }
}

declare function smtpTransport(options: smtpTransport.SmtpOptions): nodemailer.Transport;

export = smtpTransport;
