// Type definitions for Couchbase Couchnode
// Project: https://github.com/couchbase/couchnode
// Definitions by: Basarat Ali Syed <https://github.com/basarat>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module 'couchbase' {

    /**
     * Enumeration of all error codes.  See libcouchbase documentation
     * for more details on what these errors represent.
     *
     * @global
     * @readonly
     * @enum {number}
     */
    export var errors: {
        /** Operation was successful **/
        success: number;

        /** Authentication should continue. **/
        authContinue: number;

        /** Error authenticating. **/
        authError: number;

        /** The passed incr/decr delta was invalid. **/
        deltaBadVal: number;

        /** Object is too large to be stored on the cluster. **/
        objectTooBig: number;

        /** Server is too busy to handle your request right now. **/
        serverBusy: number;

        /** Internal libcouchbase error. **/
        cLibInternal: number;

        /** An invalid arguement was passed. **/
        cLibInvalidArgument: number;

        /** The server is out of memory. **/
        cLibOutOfMemory: number;

        /** An invalid range was specified. **/
        invalidRange: number;

        /** An unknown error occured within libcouchbase. **/
        cLibGenericError: number;

        /** A temporary error occured. Try again. **/
        temporaryError: number;

        /** The key already exists on the server. **/
        keyAlreadyExists: number;

        /** The key does not exist on the server. **/
        keyNotFound: number;

        /** Failed to open library. **/
        failedToOpenLibrary: number;

        /** Failed to find expected symbol in library. **/
        failedToFindSymbol: number;

        /** A network error occured. **/
        networkError: number;

        /** Operations were performed on the incorrect server. **/
        wrongServer: number;

        /** Operations were performed on the incorrect server. **/
        notMyVBucket: number;

        /** The document was not stored. */
        notStored: number;

        /** An unsupported operation was sent to the server. **/
        notSupported: number;

        /** An unknown command was sent to the server. **/
        unknownCommand: number;

        /** An unknown host was specified. **/
        unknownHost: number;

        /** A protocol error occured. **/
        protocolError: number;

        /** The operation timed out. **/
        timedOut: number;

        /** Error connecting to the server. **/
        connectError: number;

        /** The bucket you request was not found. **/
        bucketNotFound: number;

        /** libcouchbase is out of memory. **/
        clientOutOfMemory: number;

        /** A temporary error occured in libcouchbase. Try again. **/
        clientTemporaryError: number;

        /** A bad handle was passed. */
        badHandle: number;

        /** A server bug caused the operation to fail. **/
        serverBug: number;

        /** The host format specified is invalid. **/
        invalidHostFormat: number;

        /** Not enough nodes to meet the operations durability requirements. **/
        notEnoughNodes: number;

        /** Duplicate items. **/
        duplicateItems: number;

        /** Key mapping failed and could not match a server. **/
        noMatchingServerForKey: number;

        /** A bad environment variable was specified. **/
        badEnvironmentVariable: number;
        /** Couchnode is out of memory. **/
        outOfMemory: number;

        /** Invalid arguements were passed. **/
        invalidArguments: number;

        /** An error occured while trying to schedule the operation. **/
        schedulingError: number;

        /** Not all operations completed successfully. **/
        checkResults: number;

        /** A generic error occured in Couchnode. **/
        genericError: number;

        /** The specified durability requirements could not be satisfied. **/
        durabilityFailed: number;

        /** An error occured during a RESTful operation. **/
        restError: number;
    }

    /**
     * Enumeration of all value encoding formats.
     *
     * @global
     * @readonly
     * @enum {number}
     */
    export var format: {
        /** Store as raw bytes. **/
        raw: number;

        /** Store as JSON encoded string. **/
        json: number;

        /** Store as UTF-8 encoded string. **/
        utf8: number;

        /** Automatically determine best storage format. **/
        auto: number;
    };

    /**
     * The *CAS* value is a special object which indicates the current state
     * of the item on the server. Each time an object is mutated on the server, the
     * value is changed. <i>CAS</i> objects can be used in conjunction with
     * mutation operations to ensure that the value on the server matches the local
     * value retrieved by the client.  This is useful when doing document updates
     * on the server as you can ensure no changes were applied by other clients
     * while you were in the process of mutating the document locally.
     *
     * In Couchnode, this is an opaque value. As such, you cannot generate
     * <i>CAS</i> objects, but should rather use the values returned from a
     * {@link KeyCallback}.
     *
     * @typedef {object} CAS
     */
    export interface CAS extends Object {
    }

    /**
     * @class Result
     * @classdesc
     * The virtual class used for results of various operations.
     * @private
     */
    export class Result {
        /**
         * The CAS value for the document that was affected by the operation.
         * @var {CAS} Result#cas
         */
        cas: CAS;
        /**
         * The flags associate with the document.
         * @var {integer} Result#flags
         */
        flags: number;
        /**
         * The resulting document from the retrieval operation that was executed.
         * @var {Mixed} Result#value
         */
        value: any;
    }

    /**
     * @class CouchbaseError
     * @classdesc
     * The virtual class thrown for all Couchnode errors.
     * @private
     * @extends node#Error
     */
    export interface CouchbaseError extends Error {
        /**
         * The error code for this error.
         * @var {errors} Error#code
         */
        code: number;

        /**
         * The internal error that occured to cause this one.  This is used to wrap
         * low-level errors before throwing them from couchnode to simplify error
         * handling.
         * @var {(node#Error)} Error#innerError
         */
        innerError: Error;

        /**
         * A reason string describing the reason this error occured.  This value is
         * almost exclusively used for REST request errors.
         * @var {string} Error#reason
         */
        reason: string;
    }

    /**
     * Connect callback
     * This callback is invoked when a connection is successfully established.
     *
     * @typedef {function} ConnectCallback
     *
     * @param {undefined|Error} error
     *  The error that occurred while trying to connect to the cluster.
     */
    export interface ConnectCallback {
        (error: CouchbaseError): any;
    }

    /**
    * Design Document Management callbacks
    * This callback is invoked by the *DesignDoc operations.
    *
    * @typedef {function} DDocCallback
    *
    * @param {undefined|Error} error
    *  An error indicator. Note that this error value may be ignored, but its
    *  absence is indicative that the response in the *result* parameter is ok.
    *  If it is set, then the request likely failed.
    * @param {object} result
    *  The result returned from the server
    */
    export interface DDocCallback {
        (error: CouchbaseError, result: any): any;
    }

    /**
     * Single-Key callbacks.
     * This callback is passed to all of the single key functions.
     *
     * A typical use pattern is to pass the <i>result></i> parameter from the
     * callback as the <i>options</i> parameter to one of the next operations.
     *
     * @typedef {function} KeyCallback
     *
     * @param {undefined|Error} error
     *  The error for the operation. This can either be an Error object
     *  or a false value. The error contains the following fields:
     * @param {Result} result
     *  The result of the operation that was executed.
     */
    export interface KeyCallback {
        (error: CouchbaseError, result: Result): any;
    }

    /**
     * Multi-Key callbacks
     * This callback is invoked by the *Multi operations.
     * It differs from the in {@linkcode KeyCallback} that the
     * <i>response</i> object is an object of <code>{key: response}</code>
     * where each response object contains the response for that particular
     * key.
     *
     * @typedef {function} MultiCallback
     *
     * @param {undefined|Error} error
     *  An error indicator. Note that this error
     *  value may be ignored, but its absence is indicative that each
     *  response in the <code>results</code> parameter is ok. If it
     *  is set, then at least one of the result objects failed
     * @param {Object.<string,Result>} results
     *  The results of the operation as a dictionary of keys mapped to Result
     *  objects.
     */
    export interface MultiCallback {
        (error: CouchbaseError, result: { [key: string]: Result }): any;
    }

    /**
     * Query callback.
     * This callback is invoked by the query operations.
     *
     * @typedef {function} QueryCallback
     *
     * @param {undefined|Error} error
     *  An error indicator. Note that this error
     *  value may be ignored, but its absence is indicative that the
     *  response in the <code>results</code> parameter is ok. If it
     *  is set, then the request failed.
     * @param {object} results
     *  The results returned from the server
     */
    export interface QueryCallback {
        (error: CouchbaseError, result: any): any;
    }

    /**
     * @typedef {function} StatsCallback
     *
     * @param {Error} error
     * @param {Object.<string,Object>} results
     *  An object containing per-server, per key entries
     *
     * @see Connection#stats
     */
    export interface StatsCallback {
        (error: CouchbaseError, result: any): any;
    }


    /////////////////////////
    // Various options structures
    /////////////////////////

    export interface ConnectionOptions {
        host?: any; // string | string[]
        bucket?: string;
        password?: string;
    }

    // Not comming up with a base interface system as that is not how the original code is written.
    // Use a custom base interface system has the potential to become difficult to keep up to date.

    export interface AddOptions {
        expiry?: number;
        flags?: number;
        format?: number
        persist_to?: number;
        replicate_to?: number;
    }

    export interface AddMultiOptionsForValue {
        value: any;
        expiry?: number;
        flags?: number;
        format?: number;
    }

    export interface AddMultiOptions {
        expiry?: number;
        flags?: number;
        format?: number
        persist_to?: number;
        replicate_to?: number;

        spooled?: boolean;
    }

    export interface AppendOptions {
        expiry?: number;
        flags?: number;
        format?: number;
        persist_to?: number;
        replicate_to?: number;

        cas: CAS;
    }

    export interface AppendMultiOptionsForValue {
        value: any;
        cas?: CAS;
        expiry?: number;
    }

    export interface AppendMultiOptions {
        expiry?: number;
        persist_to?: number;
        replicate_to?: number;

        spooled?: boolean;
    }

    export interface DecrOptions {
        offset?: number;
        initial?: number;

        expiry?: number;
        persist_to?: number;
        replicate_to?: number;
    }

    export interface DecrMultiOptionsForValue {
        offset?: number;
        initial?: number;

        expiry?: number;
    }

    export interface DecrMultiOptions {
        spooled?: boolean;
    }

    export interface GetOptions {
        expiry?: number;
        format?: number;
    }

    export interface GetMultiOptions {
        spooled?: boolean;
        format?: number;
    }

    export interface GetReplicaOptions {
        index?: number;
        format?: number;
    }

    export interface GetReplicaMultiOptions {
        spooled?: boolean;
        format?: number;
    }

    export interface IncrOptions extends DecrOptions { }

    export interface IncrMultiOptionsForValue extends DecrMultiOptionsForValue { }

    export interface IncrMultiOptions extends DecrMultiOptions { }

    export interface LockOptions {
        lockTime?: number
    }

    export interface LockMultiOptions {
        spooled?: boolean;
        format?: number;
    }

    export interface ObserveOptions {
        cas: CAS; // verified not optional
    }

    export interface ObserveMultiOptionsForValue {
        cas: CAS; // verified not optional
    }

    export interface ObserveMultiOptions {
        spooled?: boolean;
    }

    export interface PrependOptions {
        expiry?: number;
        flags?: number;
        format?: number;
        persist_to?: number;
        replicate_to?: number;

        cas?: CAS;
    }

    export interface PrependMultiOptionsFoValue {
        value: any;
        cas: CAS;
        expiry?: number;
    }

    export interface PrependMultiOptions {
        spooled?: boolean;

        expiry?: number;
        persist_to?: number;
        replicate_to?: number;
    }

    export interface RemoveOptions {
        cas?: CAS;
        persist_to?: number;
        replicate_to?: number;
    }

    export interface RemoveMultiOptionsForValue {
        cas?: CAS;
    }

    export interface RemoveMultiOptions {
        spooled?: boolean;

        persist_to?: number;
        replicate_to?: number;
    }

    // Options for Replace functions follow Set Options and this is mentioned explicitly in the documentation

    export interface ReplaceOptions extends SetOptions { }

    export interface ReplaceMultiOptionsForValue extends SetMultiOptionsForValue { }

    export interface ReplaceMultiOptions extends SetMultiOptions { }

    export interface SetOptions {
        expiry?: number;
        flags?: number;
        format?: number;
        persist_to?: number;
        replicate_to?: number;

        cas?: CAS;
    }

    export interface SetMultiOptionsForValue {
        value: any;
        cas?: CAS;
        expiry?: number;
        flags?: number;
        format?: number;
    }

    export interface SetMultiOptions {
        expiry?: number;
        flags?: number;
        format?: number
        persist_to?: number;
        replicate_to?: number;

        spooled?: boolean;
    }

    export interface TouchOptions {
        expiry?: number;
        persist_to?: number;
        replicate_to?: number;

        cas?: CAS;
    }

    export interface UnlockOptions {
        cas: CAS; // verified not optional
    }

    export interface UnlockMultiOptionsForValue {
        cas: CAS; // verified not optional
    }

    export interface UnlockMultiOptions {
        spooled?: boolean;
    }

    /**
     * @class
     * A class representing a connection to a Couchbase cluster.
     * Normally, your application should only need to create one of these per
     * bucket and use it continuously.  Operations are executed asynchronously
     * and pipelined when possible.
     *
     * @desc
     * Instantiate a new Connection object.  Note that it is safe to perform
     * operations before the connect callback is invoked. In this case, the
     * operations are queued until the connection is ready (or an unrecoverable
     * error has taken place).
     *
     * @param {Object} [options]
     * A dictionary of options to use.  You may pass
     * other options than those defined below which correspond to the various
     * options available on the Connection object (see their documentation).
     * For example, it may be helpful to set timeout properties before connecting.
     *  @param {string|string[]} [options.host="localhost:8091"]
     *  A string or array of strings indicating the hosts to connect to. If the
     *  value is an array, all the hosts in the array will be tried until one of
     *  them succeeds.
     *  @param {string} [options.bucket="default"]
     *  The bucket to connect to. If not specified, the default is
     *  'default'.
     *  @param {string} [options.password=""]
     *  The password for a password protected bucket.
     * @param {ConnectCallback} callback
     * A callback that will be invoked when the instance has completed connecting
     * to the server. Note that this isn't required - however if the connection
     * fails, an exception will be thrown if the callback is not provided.
     *
     * @example
     * var couchbase = require('couchbase');
     * var db = new couchbase.Connection({}, function(err) {
     *   if (err) {
     *     console.log('Connection Error', err);
     *   } else {
     *     console.log('Connected!');
     *   }
     * });
     */
    export class Connection {
        constructor(callback: ConnectCallback);
        constructor(options: ConnectionOptions, callback: ConnectCallback);

        /////////////////////////
        // Members
        /////////////////////////

        /**
         * Get information about the Couchnode version (i.e. this library) as an array
         * of [versionNumber, versionString].
         *
         * @member {Mixed[]} Connection#clientVersion
         */
        clientVersion: any[];

        connectionTimeout: number;

        lcbVersion: any[];

        operationTimeout: number;

        serverNodes: string[];

        /////////////////////////
        // Methods
        /////////////////////////

        // TODO: not sure if these methods return void. Docmentation mentions nothing. 
        // TODO: For "multi" key methods the documentation says callback can be either KeyCallback | MultiCallback. Sticking with MultiCallback.
        // TODO: Verify that kv is not a key value and indeed is string[] e.g. getMulti , getReplicaMulti, lockMulti

        add(key: string, value: any, callback: KeyCallback): void;
        add(key: string, value: any, options: AddOptions, callback: KeyCallback): void;
        addMulti(kv: { [key: string]: AddMultiOptionsForValue }, options: AddMultiOptions, callback: MultiCallback): void;

        append(key: string, fragment: string, callback: KeyCallback): void;
        append(key: string, fragment: string, options: AppendOptions, callback: KeyCallback): void;
        append(key: string, fragment: NodeBuffer, callback: KeyCallback): void;
        append(key: string, fragment: NodeBuffer, options: AppendOptions, callback: KeyCallback): void;
        appendMulti(kv: { [key: string]: AppendMultiOptionsForValue }, options: AppendMultiOptions, callback: MultiCallback): void;

        decr(key: string, callback: KeyCallback): void;
        decr(key: string, options: DecrOptions, callback: KeyCallback): void;
        decrMulti(kv: { [key: string]: DecrMultiOptionsForValue }, options: DecrMultiOptions, callback: MultiCallback): void;

        get(key: string, callback: KeyCallback): void;
        get(key: string, options: GetOptions, callback: KeyCallback): void;
        getMulti(kv: string[], options: { [key: string]: GetMultiOptions }, callback:MultiCallback): void;

        getDesignDoc(name: string, callback: DDocCallback): void;

        getReplica(key: string, callback: KeyCallback): void;
        getReplica(key: string, options: GetReplicaOptions, callback: KeyCallback): void;
        getReplicaMulti(kv: string[], options: GetReplicaMultiOptions, callback: MultiCallback): void;

        incr(key: string, callback: KeyCallback): void;
        incr(key: string, options: IncrOptions, callback: KeyCallback): void;
        incrMulti(kv: { [key: string]: IncrMultiOptionsForValue }, options: IncrMultiOptions, callback: MultiCallback): void;

        lock(key: string, callback: KeyCallback): void;
        lock(key: string, options: LockOptions, callback: KeyCallback): void;
        lockMulti(kv: string[], options: { [key: string]: LockMultiOptions }, callback: MultiCallback): void;

        observe(key: string, options: ObserveOptions, callback: KeyCallback): void;
        observeMulti(kv: { [key: string]: ObserveMultiOptionsForValue }, options: { [key: string]: ObserveMultiOptions }, callback: MultiCallback): void;

        on(event: string, listener: Function): void;
        on(event: 'connect', listener: (err: Error) => any): void;
        on(event: 'error', listener: (err: Error) => any): void;

        prepend(key: string, fragment: string, callback: KeyCallback): void;
        prepend(key: string, fragment: string, options: PrependOptions, callback: KeyCallback): void;
        prepend(key: string, fragment: NodeBuffer, callback: KeyCallback): void;
        prepend(key: string, fragment: NodeBuffer, options: PrependOptions, callback: KeyCallback): void;
        prependMulti(kv: { [key: string]: PrependMultiOptionsFoValue }, options: { [key: string]: PrependMultiOptions }, callback: MultiCallback): void;

        remove(key: string, callback: KeyCallback): void;
        remove(key: string, options: RemoveOptions, callback: KeyCallback): void;
        removeMulti(kv: { [key: string]: RemoveMultiOptionsForValue }, options: RemoveMultiOptions, callback: MultiCallback): void;
        removeMulti(kv: string[], options: RemoveMultiOptions, callback: MultiCallback): void;

        removeDesignDoc(name: string, callback: DDocCallback): void;

        replace(key: string, value: any, callback: KeyCallback): void;
        replace(key: string, value: any, options: ReplaceOptions, callback: KeyCallback): void;
        replaceMulti(kv: { [key: string]: ReplaceMultiOptionsForValue }, options: ReplaceMultiOptions, callback: MultiCallback): void;

        set(key: string, value: any, callback: KeyCallback): void;
        set(key: string, value: any, options: SetOptions, callback: KeyCallback): void;
        setMulti(kv: { [key: string]: SetMultiOptionsForValue }, options: SetMultiOptions, callback: MultiCallback): void;

        setDesignDoc(name: string, data: any, callback: DDocCallback): void;

        shutdown(): void;

        stats(callback: StatsCallback): void;
        stats(key: string, callback: StatsCallback): void;

        strError(code: number): string;

        touch(key: string, callback: KeyCallback): void;
        touch(key: string, options: TouchOptions, callback: KeyCallback): void;

        unlock(key: string, options: UnlockOptions, callback: KeyCallback): void;
        unlockMulti(kv: { [key: string]: UnlockMultiOptionsForValue }, options: { [key: string]: UnlockMultiOptions }, callback: UnlockMultiOptions): void;

        view(ddoc: string, name: string): ViewQuery;
        view(ddoc: string, name: string, query: any): ViewQuery;
    }

    export class ViewQuery {
        firstPage(q: any, callback: Function): void;
        query(q: any, callback: Function): void;
    }

}
