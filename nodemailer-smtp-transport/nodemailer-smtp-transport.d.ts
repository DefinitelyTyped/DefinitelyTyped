// Type definitions for nodemailer-smtp-transport 1.0.2
// Project: https://github.com/andris9/nodemailer-smtp-transport
// Definitions by: Rogier Schouten <https://github.com/rogierschouten/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../nodemailer/nodemailer-types.d.ts" />

declare module "nodemailer-smtp-transport" {

	import tls = require("tls");

	module smtpTransport {
		export interface AuthOptions {
			user?: string;
			pass?: string;
			xoauth2?: any;
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
		}
	}

	function smtpTransport(options: smtpTransport.SmtpOptions): nodemailer.Transport;

	export = smtpTransport;
}
