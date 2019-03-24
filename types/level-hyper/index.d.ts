// Type definitions for level-hyper 2.0
// Project: https://github.com/Level/level-hyper
// Definitions by: hmmhmmhm <https://github.com/hmmhmmhm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type BatchOpType = "put" | "del";

export interface BatchOp {
    type: BatchOpType;
    key: string;
    value?: string;
}

export interface BatchChainedForm {
    /**
     * Queue a del operation on the current batch,
     * not committed until a write() is called on the batch.
     *
     * This method may throw a WriteError if there is a problem with your delete.
     */
    del: (key: string) => BatchChainedForm;

    /**
     * Queue a put operation on the current batch,
     * not committed until a write() is called on the batch.
     *
     * This method may throw a WriteError if there is a problem
     * with your put (such as the value being null or undefined).
     */
    put: (key: string, value: string) => BatchChainedForm;

    /**
     * batch.write([options][, callback])
     *
     * Commit the queued operations for this batch.
     * All operations not cleared will be
     * written to the underlying store atomically,
     * that is, they will either all succeed or fail with no partial commits.
     *
     * `options` is passed on to the underlying store.
     *
     * `options.keyEncoding` and options.valueEncoding are not supported here.
     */
    write: (callback?: () => void) => Promise<void>;

    /**
     * Clear all queued operations on the current batch,
     * any previous operations will be discarded.
     */
    clear: () => void;

    /**
     * The number of queued operations on the current batch.
     */
    length?: number;
}

export interface ReadStreamData {
    key: string;
    value: string;
}

export interface CreateReadStreamOption {
    /**
     * keys (boolean, default: true):
     * whether the results should contain keys.
     *
     * If set to true and values set to false
     * then results will simply be keys,
     * rather than objects with a key property.
     *
     * Used internally by the createKeyStream() method.
     */
    keys?: boolean | true;

    /**
     * values (boolean, default: true):
     * whether the results should contain values.
     *
     * If set to true and keys set to false
     * then results will simply be values,
     * rather than objects with a value property. Used internally by the createValueStream() method.
     */
    value?: boolean | true;

    /**
     * gt (greater than), gte (greater than or equal)
     * define the lower bound of the range to be streamed.
     * Only entries where the key is greater than (or equal to)
     * this option will be included in the range.
     *
     * When reverse=true the order will be reversed,
     * but the entries streamed will be the same.
     */
    gt?: boolean;

    /**
     * lt (less than), lte (less than or equal)
     * define the higher bound of the range to be streamed.
     * Only entries where the key is less than (or equal to)
     * this option will be included in the range.
     *
     * When reverse=true the order will be reversed,
     * but the entries streamed will be the same.
     */
    lt?: boolean;

    /**
     * reverse (boolean, default: false):
     * stream entries in reverse order.
     * Beware that due to the way that stores like LevelDB work,
     * a reverse seek can be slower than a forward seek.
     */
    reverse?: boolean | false;

    /**
     * limit (number, default: -1): limit the
     * number of entries collected by this stream.
     * This number represents a maximum number of
     * entries and may not be reached if you
     * get to the end of the range first.
     *
     * A value of -1 means there is no limit.
     * When reverse=true the entries with the
     * highest keys will be returned instead of the lowest keys.
     */
    limit?: number | -1;
}
export interface CreateReadStreamChainedForm {
    on: {
        (type: "data", callback: (data: ReadStreamData) => void): void
        (type: "error", callback: (err: Error | undefined) => void): void
        (type: "close" | "end", callback: () => void): void,
    };
}

export type EventType = "put" | "del" | "batch" | "opening" | "open" | "ready" | "closing" | "closed";

// LevelDB Types
export interface LevelDB {
    open: (callback?: () => void) => void;
    close: (callback?: () => void) => void;

    /**
     * isOpen() will return true only when the state is "open".
     * A levelup instance can be in one of the following states:
     *
     * `new` - newly created, not opened or closed
     *
     * `opening` - waiting for the underlying store to be opened
     *
     * `open` - successfully opened the store, available for use
     *
     * `closing` - waiting for the store to be closed
     *
     * `closed` - store has been successfully closed, should not be used
     */
    isOpen: string;

    /**
     * isClosed() will return true only when the
     * state is "closing" or "closed",
     *
     * it can be useful for determining
     * if read and write operations are permissible.
     */
    isClosed: () => void;

    /**
     * put() is the primary method for inserting data into the store.
     * Both key and value can be of any type as far as levelup is concerned.
     */
    put: (key: string, value: string, callback?: () => void) => Promise<void>;

    /**
     * get() is the primary method for fetching data from the store.
     * The key can be of any type. If it doesn't exist in the store
     * then the callback or promise will receive an error.
     *
     * A not-found err object will be of type 'NotFoundError'
     * so you can err.type == 'NotFoundError' or you
     * can perform a truthy test on the property err.notFound.
     */
    get: (key: string, callback?: (error: Error | undefined, value: string) => void)  => Promise<string>;

    /**
     * del() is the primary method for removing data from the store.
     */
    del: (key: string, callback?: (error: Error | undefined) => void) => Promise<void>;

    batch: {
        /**
         * batch() can be used for very fast
         * bulk-write operations (both put and delete).
         *
         * The array argument should contain a list of
         * operations to be executed sequentially,
         * although as a whole they are performed as
         * an atomic operation inside the underlying store.
         *
         * Each operation is contained in an object having the
         * following properties: type, key, value, where the
         * type is either 'put' or 'del'.
         * In the case of 'del' the value property is ignored.
         *
         * Any entries with a key of null or undefined will
         * cause an error to be returned on the callback and any type:
         * 'put' entry with a value of null or undefined will return an error.
         */
        (ops: BatchOp[], callback?: (error: Error | undefined) => void): Promise<void>

        /**
         * batch(), when called with no arguments will
         * return a Batch object which can be used to build,
         * and eventually commit, an atomic batch operation.
         *
         * Depending on how it's used, it is possible to
         * obtain greater performance when using the
         * chained form of batch() over the array form.
         */
        (): BatchChainedForm,
    };

    /**
     * Returns a Readable Stream of key-value pairs.
     * A pair is an object with key and value properties.
     *
     * By default it will stream all entries in
     * the underlying store from start to end.
     *
     * Use the options described below to
     * control the range, direction and results.
     */
    createReadStream: (option: CreateReadStreamOption) => CreateReadStreamChainedForm;

    /**
     * Returns a Readable Stream of keys rather than key-value pairs.
     *
     * Use the same options as described
     * for createReadStream to control the range and direction.
     *
     * You can also obtain this stream by passing an options
     * object to createReadStream() with keys set to true and values set to false.
     *
     * The result is equivalent; both streams operate in object mode.
     */
    createKeyStream: () => CreateReadStreamChainedForm;

    /**
     * Returns a Readable Stream of values rather than key-value pairs.
     *
     * Use the same options as described
     * for createReadStream to control the range and direction.
     *
     * You can also obtain this stream by passing an options
     * object to createReadStream() with values set to true and keys set to false.
     *
     * The result is equivalent; both streams operate in object mode.
     */
    createValueStream: () => CreateReadStreamChainedForm;

    on: {
        (eventType: "put", callback?: (key: string, value: string) => void): void
        (eventType: "del", callback?: (key: string) => void): void
        (eventType: "batch", callback?: (ops: BatchOp[]) => void): void
        (eventType: "opening" | "open" | "ready" | "closing" | "closed", callback?: () => void): void,
    };
}

export type ConstructorType = (levelDBPath: string) => LevelDB;
declare const LevelHyper: ConstructorType;
export default LevelHyper