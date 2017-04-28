// Type definitions for simplesmtp 0.3.35
// Project: https://github.com/andris9/simplesmtp
// Definitions by: Rogier Schouten <https://github.com/rogierschouten/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="node" />

import events = require("events");

export interface SmtpServerOptions {
	/**
	 * the hostname of the server, will be used for informational messages
	 */
	name?: string;
	/**
	 * if set to true, print out messages about the connection
	 */
	debug?: boolean;
	/**
	 * client timeout in milliseconds, defaults to 60 000
	 */
	timeout?: number;
	/**
	 * start a server on secure connection
	 */
	secureConnection?: boolean;
	/**
	 * greeting banner that is sent to the client on connection
	 */
	SMTPBanner?: string;
	/**
	 * if set to true, require that the client must authenticate itself
	 */
	requireAuthentication?: boolean;
	/**
	 * if set to true, client may authenticate itself but don't have to
	 */
	enableAuthentication?: boolean;
	/**
	 * maximum size of an e-mail in bytes
	 */
	maxSize?: number;
	/**
	 * TLS credentials
	 */
	credentials?: any;
	/**
	 * allowed authentication methods, defaults to <code>['PLAIN', 'LOGIN']</code>
	 */
	authMethods?: string[];
	/**
	 * if set, support HELO only
	 */
	disableEHLO?: boolean;
	/**
	 * if set, allow client do not use STARTTLS
	 */
	ignoreTLS?: boolean;
	/**
	 * if set, do not validate sender domains
	 */
	disableDNSValidation?: boolean;
	/**
	 * if set, limit the number of simultaneous connections to the server
	 */
	maxClients?: number;
}

/**
 * <p>Constructs a SMTP server</p>
 *
 * @constructor
 * @namespace SMTP Server module
 * @param {Object} [options] Options object
 */
export class SMTPServer extends events.EventEmitter {

	constructor(options?: SmtpServerOptions);

	/**
	 * Server starts listening on defined port and hostname
	 *
	 * @param {Number} port The port number to listen
	 * @param {String} [host] The hostname to listen
	 * @param {Function} callback The callback function to run when the server is listening
	 */
	public listen(port: number, host: string, callback?: (error: Error) => void): void;

	/**
	 * <p>Closes the server</p>
	 *
	 * @param {Function} callback The callback function to run when the server is closed
	 */
	public end(callback: () => void): void;


}

export class SimpleServer extends events.EventEmitter {

	constructor(callback?: (connection: SimpleServerConnection) => void);
	constructor(options?: SmtpServerOptions, callback?: (connection: SimpleServerConnection) => void);


	public server: SMTPServer;

	/**
	 * Server starts listening on defined port and hostname
	 *
	 * @param {Number} port The port number to listen
	 * @param {String} [host] The hostname to listen
	 * @param {Function} callback The callback function to run when the server is listening
	 */
	public listen(port: number, host: string, callback?: (error: Error) => void): void;

}

/**
 * Events:
 * 'data' (chunk) - A chunk (Buffer) of the message.
 * 'end' - The message has been transferred
 */
export interface SimpleServerConnection extends NodeJS.ReadableStream {
	/**
	 * From address
	 */
	from: string;
	/**
	 * an array of To addresses
	 */
	to: string[];
	/**
	 * hostname reported by the client
	 */
	host: string;
	/**
	 * client IP address
	 */
	remoteAddress: string;
	/**
	 * Accept the message with the selected ID
	 */
	accept(id?: string): void;
	/**
	 * Reject the message with the selected message
	 */
	reject(reason?: string): void;
}


export function createSimpleServer(callback?: (connection: SimpleServerConnection) => void): SimpleServer;
export function createSimpleServer(options?: SmtpServerOptions, callback?: (connection: SimpleServerConnection) => void): SimpleServer;
