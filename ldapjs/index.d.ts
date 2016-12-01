// Type definitions for ldapjs v0.7.1
// Project: http://ldapjs.org
// Definitions by: Peter Kooijmans <https://github.com/peterkooijmans/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="node" />

export interface Error {
	code: number;
	name: string;
	message: string;
}

export interface CallBack {
	(error: Error, result?: any): void;
}

export interface ClientOptions {
	url: string;
	socketPath?: string;
	log?: any;
	timeout?: number;
	connectTimeout?: number;
	maxConnections?: number;
	bindDN?: string;
	bindCredentials?: string;
	checkInterval?: number;
	maxIdleTime?: number;
}

export interface SearchOptions {
	scope?: string;
	filter?: string;
	attributes?: string[];
	attrsOnly?: boolean;
	sizeLimit?: number;
	timeLimit?: number;
}

export interface SearchCallBack {
	(error: Error, result: NodeJS.EventEmitter): void;
}

export interface Client {
	/**
	 * Performs a simple authentication against the server.
	 *
	 * @param name the DN to bind as.
	 * @param credentials the userPassword associated with name.
	 * @param controls (optional) either a Control or [Control].
	 * @param callback callback of the form f(err, res).
	 * @throws {TypeError} on invalid input.
	 */
	bind(dn: string, password: string, callback: CallBack): void;

	/**
	 * Performs an LDAP search against the server.
	 *
	 * Note that the defaults for options are a 'base' search, if that's what
	 * you want you can just pass in a string for options and it will be treated
	 * as the search filter.  Also, you can either pass in programatic Filter
	 * objects or a filter string as the filter option.
	 *
	 * Note that this method is 'special' in that the callback 'res' param will
	 * have two important events on it, namely 'entry' and 'end' that you can hook
	 * to.  The former will emit a SearchEntry object for each record that comes
	 * back, and the latter will emit a normal LDAPResult object.
	 *
	 * @param {String} base the DN in the tree to start searching at.
	 * @param {Object} options parameters:
	 *                           - {String} scope default of 'base'.
	 *                           - {String} filter default of '(objectclass=*)'.
	 *                           - {Array} attributes [string] to return.
	 *                           - {Boolean} attrsOnly whether to return values.
	 * @param {Control} controls (optional) either a Control or [Control].
	 * @param {Function} callback of the form f(err, res).
	 * @throws {TypeError} on invalid input.
	 */
	search(base: string, options: SearchOptions, callback: SearchCallBack): void;

	/**
	 * Unbinds this client from the LDAP server.
	 *
	 * Note that unbind does not have a response, so this callback is actually
	 * optional; either way, the client is disconnected.
	 *
	 * @param {Function} callback of the form f(err).
	 * @throws {TypeError} if you pass in callback as not a function.
	 */
	unbind(callback: CallBack): void;
}

export function createClient(options? : ClientOptions): Client;
