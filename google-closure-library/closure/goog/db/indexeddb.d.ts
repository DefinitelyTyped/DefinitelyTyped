declare module goog {
    function require(name: 'goog.db.IndexedDb'): typeof goog.db.IndexedDb;
}

declare module goog.db {

    /**
     * Creates an IDBDatabase wrapper object. The database object has methods for
     * setting the version to change the structure of the database and for creating
     * transactions to get or modify the stored records. Should not be created
     * directly, call {@link goog.db.openDatabase} to set up the connection.
     *
     * @param {!IDBDatabase} db Underlying IndexedDB database object.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class IndexedDb extends goog.events.EventTarget {
        constructor(db: IDBDatabase);
        
        /**
         * Closes the database connection. Metadata queries can still be made after this
         * method is called, but otherwise this wrapper should not be used further.
         */
        close(): void;
        
        /**
         * @return {boolean} Whether a connection is open and the database can be used.
         */
        isOpen(): boolean;
        
        /**
         * @return {string} The name of this database.
         */
        getName(): string;
        
        /**
         * @return {string} The current database version.
         */
        getVersion(): string;
        
        /**
         * @return {DOMStringList} List of object stores in this database.
         */
        getObjectStoreNames(): DOMStringList;
        
        /**
         * Creates an object store in this database. Can only be called inside a
         * {@link goog.db.UpgradeNeededCallback} or the callback for the Deferred
         * returned from #setVersion.
         *
         * @param {string} name Name for the new object store.
         * @param {Object=} opt_params Options object. The available options are:
         *     keyPath, which is a string and determines what object attribute
         *     to use as the key when storing objects in this object store; and
         *     autoIncrement, which is a boolean, which defaults to false and determines
         *     whether the object store should automatically generate keys for stored
         *     objects. If keyPath is not provided and autoIncrement is false, then all
         *     insert operations must provide a key as a parameter.
         * @return {!goog.db.ObjectStore} The newly created object store.
         * @throws {goog.db.Error} If there's a problem creating the object store.
         */
        createObjectStore(name: string, opt_params?: Object): goog.db.ObjectStore;
        
        /**
         * Deletes an object store. Can only be called inside a
         * {@link goog.db.UpgradeNeededCallback} or the callback for the Deferred
         * returned from #setVersion.
         *
         * @param {string} name Name of the object store to delete.
         * @throws {goog.db.Error} If there's a problem deleting the object store.
         */
        deleteObjectStore(name: string): void;
        
        /**
         * Updates the version of the database and returns a Deferred transaction.
         * The database's structure can be changed inside this Deferred's callback, but
         * nowhere else. This means adding or deleting object stores, and adding or
         * deleting indexes. The version change will not succeed unless there are no
         * other connections active for this database anywhere. A new database
         * connection should be opened after the version change is finished to pick
         * up changes.
         *
         * This is deprecated, and only supported on Chrome prior to version 25. New
         * applications should use the version parameter to {@link goog.db.openDatabase}
         * instead.
         *
         * @param {string} version The new version of the database.
         * @return {!goog.async.Deferred} The deferred transaction for changing the
         *     version.
         */
        setVersion(version: string): goog.async.Deferred<any>;
        
        /**
         * Creates a new transaction.
         *
         * @param {!Array<string>} storeNames A list of strings that contains the
         *     transaction's scope, the object stores that this transaction can operate
         *     on.
         * @param {goog.db.Transaction.TransactionMode=} opt_mode The mode of the
         *     transaction. If not present, the default is READ_ONLY. For VERSION_CHANGE
         *     transactions call {@link goog.db.IndexedDB#setVersion} instead.
         * @return {!goog.db.Transaction} The wrapper for the newly created transaction.
         * @throws {goog.db.Error} If there's a problem creating the transaction.
         */
        createTransaction(storeNames: Array<string>, opt_mode?: goog.db.Transaction.TransactionMode): goog.db.Transaction;
    }
}

declare module goog.db.IndexedDb {

    /**
     * Event types fired by a database.
     *
     * @enum {string} The event types for the web socket.
     */
    type EventType = string;
    var EventType: {
        ABORT: EventType;
        CLOSE: EventType;
        ERROR: EventType;
        VERSION_CHANGE: EventType;
    };

    /**
     * Event representing a (possibly attempted) change in the database structure.
     *
     * At time of writing, no Chrome versions support oldVersion or newVersion. See
     * http://crbug.com/153122.
     *
     * @param {number} oldVersion The previous version of the database.
     * @param {number} newVersion The version the database is being or has been
     *     updated to.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class VersionChangeEvent extends goog.events.Event {
        constructor(oldVersion: number, newVersion: number);
    }
}
