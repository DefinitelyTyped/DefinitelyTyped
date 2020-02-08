// Type definitions for ldapjs 1.0
// Project: http://ldapjs.org
// Definitions by: Charles Villemure <https://github.com/cvillemure>, Peter Kooijmans <https://github.com/peterkooijmans>, Pablo Moleri <https://github.com/pmoleri>, Michael Scott-Nelson <https://github.com/mscottnelson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from "events";

export interface Error {
	code: number;
	name: string;
	message: string;
}

export interface ErrorCallback {
	(error: Error): void;
}

export interface CompareCallback {
	(error: Error, matched?: boolean): void;
}

export interface ExopCallback {
	(error: Error, value: string, result?: any): void;
}

export interface CallBack {
	(error: Error, result?: any): void;
}

export interface ClientOptions {
	url: string;
	tlsOptions?: Object;
	socketPath?: string;
	log?: any;
	timeout?: number;
	connectTimeout?: number;
	idleTimeout?: number;
	reconnect?: boolean | {
		initialDelay?: number,
		maxDelay?: number,
		failAfter?: number
	};
	strictDN?: boolean;
	queueSize?: number;
	queueTimeout?: number;
	queueDisable?: boolean;
	bindDN?: string;
	bindCredentials?: string;
}

export interface SearchOptions {
	/** Defaults to base */
	scope?: "base" | "one" | "sub";
	/**  Defaults to (objectclass=*) */
	filter?: string | Filter;
	/** Defaults to the empty set, which means all attributes */
	attributes?: string | string[];
	/** Defaults to 0 (unlimited) */
	sizeLimit?: number;
	/** Timeout in seconds. Defaults to 10. Lots of servers will ignore this! */
	timeLimit?: number;
	derefAliases?: number;
	typesOnly?: boolean;
	paged?: boolean | {
		pageSize?: number;
		pagePause?: boolean;
	}
}

export interface Change {
	operation: string;
	modification: {
		[key: string]: any;
	};
}

export var Change: {
	new(change: Change): Change;
}

export type SearchReference = any;

export interface SearchCallbackResponse extends EventEmitter {
    on(event: "searchEntry", listener: (entry: SearchEntry) => void): this;
    on(event: "searchReference", listener: (referral: SearchReference) => void): this;
    on(event: "page", listener: (res: LDAPResult, cb: (...args: any[]) => void) => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "end", listener: (res: LDAPResult | null) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

export interface SearchCallBack {
    (error: Error | null, result: SearchCallbackResponse): void;
}

export type Control = any;

export interface Client extends EventEmitter {

	connected: boolean;

	/**
	 * Performs a simple authentication against the server.
	 *
	 * @param dn the DN to bind as.
	 * @param password the userPassword associated with name.
	 * @param controls (optional) either a Control or [Control].
	 * @param callback callback of the form f(err, res).
	 * @throws {TypeError} on invalid input.
	 */
	bind(dn: string, password: string, callback: CallBack): void;
	bind(dn: string, password: string, controls: Control | Array<Control>, callback: CallBack): void;

	/**
	 * Adds an entry to the LDAP server.
	 *
	 * Entry can be either [Attribute] or a plain JS object where the
	 * values are either a plain value or an array of values.  Any value (that's
	 * not an array) will get converted to a string, so keep that in mind.
	 *
	 * @param name the DN of the entry to add.
	 * @param entry an array of Attributes to be added or a JS object.
	 * @param controls (optional) either a Control or [Control].
	 * @param callback of the form f(err, res).
	 * @throws {TypeError} on invalid input.
	 */
	add(name: string, entry: Object, callback: ErrorCallback): void;
	add(name: string, entry: Object, controls: Control | Array<Control>, callback: ErrorCallback): void;

	/**
	 * Compares an attribute/value pair with an entry on the LDAP server.
	 *
	 * @param name the DN of the entry to compare attributes with.
	 * @param attr name of an attribute to check.
	 * @param value value of an attribute to check.
	 * @param controls (optional) either a Control or [Control].
	 * @param callback of the form f(err, boolean, res).
	 * @throws {TypeError} on invalid input.
	 */
	compare(name: string, attr: string, value: string, callback: CompareCallback): void;
	compare(name: string, attr: string, value: string, controls: Control | Array<Control>, callback: CompareCallback): void;

	/**
	 * Deletes an entry from the LDAP server.
	 *
	 * @param name the DN of the entry to delete.
	 * @param controls (optional) either a Control or [Control].
	 * @param callback of the form f(err, res).
	 * @throws {TypeError} on invalid input.
	 */
	del(name: string, callback: ErrorCallback): void;
	del(name: string, controls: Control | Array<Control>, callback: ErrorCallback): void;

	/**
	 * Performs an extended operation on the LDAP server.
	 *
	 * Pretty much none of the LDAP extended operations return an OID
	 * (responseName), so I just don't bother giving it back in the callback.
	 * It's on the third param in `res` if you need it.
	 *
	 * @param name the OID of the extended operation to perform.
	 * @param value value to pass in for this operation.
	 * @param controls (optional) either a Control or [Control].
	 * @param callback of the form f(err, value, res).
	 * @throws {TypeError} on invalid input.
	 */
	exop(name: string, value: string, callback: ExopCallback): void;
	exop(name: string, value: string, controls: Control | Array<Control>, callback: ExopCallback): void;

	/**
	 * Performs an LDAP modify against the server.
	 *
	 * @param name the DN of the entry to modify.
	 * @param change update to perform (can be [Change]).
	 * @param controls (optional) either a Control or [Control].
	 * @param callback of the form f(err, res).
	 * @throws {TypeError} on invalid input.
	 */
	modify(name: string, change: Change | Array<Change>, callback: ErrorCallback): void;
	modify(name: string, change: Change | Array<Change>, controls: Control | Array<Control>, callback: ErrorCallback): void;

	/**
	 * Performs an LDAP modifyDN against the server.
	 *
	 * This does not allow you to keep the old DN, as while the LDAP protocol
	 * has a facility for that, it's stupid. Just Search/Add.
	 *
	 * This will automatically deal with "new superior" logic.
	 *
	 * @param {String} name the DN of the entry to modify.
	 * @param {String} newName the new DN to move this entry to.
	 * @param {Control} controls (optional) either a Control or [Control].
	 * @param {Function} callback of the form f(err, res).
	 * @throws {TypeError} on invalid input.
	 */
	modifyDN(name: string, newName: string, callback: ErrorCallback): void;
	modifyDN(name: string, newName: string, controls: Control | Array<Control>, callback: ErrorCallback): void;

	/**
	 * Performs an LDAP search against the server.
	 *
	 * Note that the defaults for options are a 'base' search, if that's what
	 * you want you can just pass in a string for options and it will be treated
	 * as the search filter.  Also, you can either pass in programatic Filter
	 * objects or a filter string as the filter option.
	 *
	 * Note that this method is 'special' in that the callback 'res' param will
	 * have two important events on it, namely 'searchEntry' and 'end' that you can hook
	 * to.  The former will emit a SearchEntry object for each record that comes
	 * back, and the latter will emit a normal LDAPResult object.
	 *
	 * @param {String} base the DN in the tree to start searching at.
	 * @param {SearchOptions} options parameters
	 * @param {Control} controls (optional) either a Control or [Control].
	 * @param {Function} callback of the form f(err, res).
	 * @throws {TypeError} on invalid input.
	 */
	search(base: string, options: SearchOptions, callback: SearchCallBack): void;
	search(base: string, options: SearchOptions, callback: SearchCallBack, _bypass: boolean): void;
	search(base: string, options: SearchOptions, controls: Control | Array<Control>, callback: SearchCallBack): void;
	search(base: string, options: SearchOptions, controls: Control | Array<Control>, callback: SearchCallBack, _bypass: boolean): void;

	/**
	 * Attempt to secure connection with StartTLS.
	 */
	starttls(options: Object, controls: Control | Array<Control>, callback: CallBack): void;
	starttls(options: Object, controls: Control | Array<Control>, callback: CallBack, _bypass: boolean): void;

	/**
	 * Unbinds this client from the LDAP server.
	 *
	 * Note that unbind does not have a response, so this callback is actually
	 * optional; either way, the client is disconnected.
	 *
	 * @param {Function} callback of the form f(err).
	 * @throws {TypeError} if you pass in callback as not a function.
	 */
	unbind(callback?: ErrorCallback): void;

	/**
	 * Disconnect from the LDAP server and do not allow reconnection.
	 *
	 * If the client is instantiated with proper reconnection options, it's
	 * possible to initiate new requests after a call to unbind since the client
	 * will attempt to reconnect in order to fulfill the request.
	 *
	 * Calling destroy will prevent any further reconnection from occurring.
	 *
	 * @param {Object} err (Optional) error that was cause of client destruction
	 */
	destroy(err?: any): void;
}

export function createClient(options?: ClientOptions): Client;

export function createServer(options?: ServerOptions): Server;

/**
 * @param log	You can optionally pass in a bunyan instance the client will use to acquire a logger.
 * @param certificate	A PEM-encoded X.509 certificate; will cause this server to run in TLS mode.
 * @param key	A PEM-encoded private key that corresponds to certificate for SSL.
 */
export interface ServerOptions {
	log?: any;
	certificate?: any;
	key?: any;
}
export interface Server extends EventEmitter {

	/**
	 * Set this property to reject connections when the server's connection count gets high.
	 */
	maxConnections: number;

	/**
	 * The number of concurrent connections on the server. (getter only)
	 */
	connections(): number;

	/**
	 * Returns the fully qualified URL this server is listening on. For example: ldaps://10.1.2.3:1636. If you haven't yet called listen, it will always return ldap://localhost:389.
	 */
	url: string;

	/**
	 * Port and Host
	 * Begin accepting connections on the specified port and host. If the host is omitted, the server will accept connections directed to any IPv4 address (INADDR_ANY).
	 * This function is asynchronous. The last parameter callback will be called when the server has been bound.
	 */
	listen(port: number): void;
	listen(port: number, callback: any): void;
	listen(port: number, host: string): void;
	listen(port: number, host: string, callback: any): void;

	/**
	 * Unix Domain Socket
	 * Start a UNIX socket server listening for connections on the given path.
	 * This function is asynchronous. The last parameter callback will be called when the server has been bound.
	 */
	listen(path: string): void;
	listen(path: string, callback: any): void;

	/**
	 * File descriptor
	 * Start a server listening for connections on the given file descriptor.
	 * This file descriptor must have already had the bind(2) and listen(2) system calls invoked on it. Additionally, it must be set non-blocking; try fcntl(fd, F_SETFL, O_NONBLOCK).
	 */
	listenFD(fileDescriptor: any): void;

	bind(mount: string, ...cbHandlers: any[]): void;
	add(mount: string, ...cbHandlers: any[]): void;

	search(ditHook: string, ...cbHandlers: any[]): void;

	modify(ditHook: string, ...cbHandlers: any[]): void;

	del(ditHook: string, ...cbHandlers: any[]): void;

	compare(ditHook: string, ...cbHandlers: any[]): void;

	modifyDN(ditHook: string, ...cbHandlers: any[]): void;

	exop(arbitraryHook: string, ...cbHandlers: any[]): void;

	unbind(...cbHandlers: any[]): void;
}
export class SearchRequest {
	baseObject: string;
	scope: "base"|"one"|"sub";
	derefAliases: number;
	sizeLimit: number;
	timeLimit: number;
	typesOnly: boolean;
	filter: any;
	attributes?: any;
}
export class InsufficientAccessRightsError {
	constructor(error?: string);
}
export class InvalidCredentialsError {
	constructor(error?: string);
}
export class EntryAlreadyExistsError {
	constructor(error?: string);
}
export class NoSuchObjectError {
	constructor(error?: string);
}
export class NoSuchAttributeError {
	constructor(error?: string);
}
export class ProtocolError {
	constructor(error?: string);
}
export class OperationsError {
	constructor(error?: string);
}

declare class Filter {
	matches(obj: any): boolean;
	type: string;
}

export function parseFilter(filterString: string): Filter;

export class EqualityFilter extends Filter {
	constructor(options: { attribute: string, value: string })
}

export class PresenceFilter extends Filter {
	constructor(options: { attribute: string })
}

export class SubstringFilter extends Filter {
	constructor(options: { attribute: string, initial: string, any?: string[], final?: string })
}

export class GreaterThanEqualsFilter extends Filter {
	constructor(options: { attribute: string, value: string })
}

export class LessThanEqualsFilter extends Filter {
	constructor(options: { attribute: string, value: string })
}

export class AndFilter extends Filter {
	constructor(options: { filters: Filter[] })
}

export class OrFilter extends Filter {
	constructor(options: { filters: Filter[] })
}

export class NotFilter extends Filter {
	constructor(options: { filter: Filter })
}

export class ApproximateFilter extends Filter {
	constructor(options: { attribute: string, value: string })
}

export class ExtensibleFilter extends Filter {
    constructor(options: {
        rule?: string;
        matchType?: string;
        value: string;
        dnAttributes?: boolean;
    })
}

export interface AttributeJson {
    type: string;
    vals: string[];
}

export class Attribute {
    private type: string;
    readonly buffers: Buffer[];

    /**
     *  Array of string values, binaries are represented in base64.
     *  get: When reading it always returns an array of strings.
     *  set: When assigning it accepts either an array or a single value.
     *       `Buffer`s are assigned directly, any other value is converted to string and loaded into a `Buffer`.
     */
    vals: string | string[];

    readonly json: AttributeJson;

    /** Stringified json property */
    toString(): string;

    static isAttribute(object: any): object is Attribute;
    static compare(a: Attribute, b: Attribute): number;
}

interface LDAPMessageJsonObject {
    messageID: number;
    protocolOp: string | undefined;
    controls: Control[];
    [k: string]: any;
}

export abstract class LDAPMessage {
    messageID: number;
    protocolOp: string | undefined;
    controls: Control[];
    log: any;
    readonly id: number;
    readonly dn: string;
    readonly type: string;

    /** A plain object with main properties */
    readonly json: LDAPMessageJsonObject;

    /** Stringified json property */
    toString(): string;
    parse(ber: Buffer): boolean;
    toBer(): Buffer;
}

export class LDAPResult extends LDAPMessage {
    readonly type: "LDAPResult";
    /** Result status 0 = success */
    status: number;
    matchedDN: string;
    errorMessage: string;
    referrals: string[];
    connection: any;
}

export interface SearchEntryObject {
    dn: string;
    controls: Control[];
    [p: string]: string | string[];
}

export interface SearchEntryRaw {
    dn: string;
    controls: Control[];
    [p: string]: string | Buffer | Buffer[];
}

export class SearchEntry extends LDAPMessage {
    readonly type: "SearchEntry";
    objectName: string | null;
    attributes: Attribute[];

    readonly json: LDAPMessageJsonObject & { objectName: string, attributes: AttributeJson[]};

    /**
     * Retrieve an object with `dn`, `controls` and every `Atttribute` as a property with their value(s)
     */
    readonly object: SearchEntryObject;

    /**
     * Retrieve an object with `dn`, `controls` and every `Atttribute` as a property, using raw `Buffer`(s) as attribute values.
     */
    readonly raw: SearchEntryRaw;
}

export function parseDN(dn: string): any;
