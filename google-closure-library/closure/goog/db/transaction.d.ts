declare module goog {
    function require(name: 'goog.db.Transaction'): typeof goog.db.Transaction;
    function require(name: 'goog.db.Transaction.TransactionMode'): typeof goog.db.Transaction.TransactionMode;
}

declare module goog.db {

    /**
     * Creates a new transaction. Transactions contain methods for accessing object
     * stores and are created from the database object. Should not be created
     * directly, open a database and call createTransaction on it.
     * @see goog.db.IndexedDb#createTransaction
     *
     * @param {!IDBTransaction} tx IndexedDB transaction to back this wrapper.
     * @param {!goog.db.IndexedDb} db The database that this transaction modifies.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class Transaction extends goog.events.EventTarget {
        constructor(tx: IDBTransaction, db: goog.db.IndexedDb);
        
        /**
         * @return {goog.db.Transaction.TransactionMode} The transaction's mode.
         */
        getMode(): goog.db.Transaction.TransactionMode;
        
        /**
         * @return {!goog.db.IndexedDb} The database that this transaction modifies.
         */
        getDatabase(): goog.db.IndexedDb;
        
        /**
         * Opens an object store to do operations on in this transaction. The requested
         * object store must be one that is in this transaction's scope.
         * @see goog.db.IndexedDb#createTransaction
         *
         * @param {string} name The name of the requested object store.
         * @return {!goog.db.ObjectStore} The wrapped object store.
         * @throws {goog.db.Error} In case of error getting the object store.
         */
        objectStore(name: string): goog.db.ObjectStore;
        
        /**
         * @return {!goog.async.Deferred} A deferred that will fire once the
         *     transaction is complete. It fires the errback chain if an error occurs
         *     in the transaction, or if it is aborted.
         */
        wait(): goog.async.Deferred<any>;
        
        /**
         * Aborts this transaction. No pending operations will be applied to the
         * database. Dispatches an ABORT event.
         */
        abort(): void;
    }
}

declare module goog.db.Transaction {

    /**
     * Event types the Transaction can dispatch. COMPLETE events are dispatched
     * when the transaction is committed. If a transaction is aborted it dispatches
     * both an ABORT event and an ERROR event with the ABORT_ERR code. Error events
     * are dispatched on any error.
     *
     * @enum {string}
     */
    type EventTypes = string;
    var EventTypes: {
        COMPLETE: EventTypes;
        ABORT: EventTypes;
        ERROR: EventTypes;
    };

    /**
     * The three possible transaction modes.
     * @see http://www.w3.org/TR/IndexedDB/#idl-def-IDBTransaction
     *
     * @enum {string}
     */
    type TransactionMode = string;
    var TransactionMode: {
        READ_ONLY: TransactionMode;
        READ_WRITE: TransactionMode;
        VERSION_CHANGE: TransactionMode;
    };
}
