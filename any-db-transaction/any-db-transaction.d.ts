// Type definitions for any-db-transaction 2.2.1
// Project: https://github.com/grncdr/node-any-db-transaction
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../any-db/any-db.d.ts" />

declare module "any-db-transaction" {
    import anyDB = require("any-db");

	module begin {
		/**
		 * Transaction objects are are simple wrappers around a Connection that also implement the Queryable API,
		 * but guarantee that all queries take place within a single database transaction or not at all. Note that
		 * begin also understands how to acquire (and release) a connection from a ConnectionPool as well, so you
		 * can simply pass a pool to it: var tx = begin(pool)
		 *
		 * By default, any queries that error during a transaction will cause an automatic rollback. If a query has
		 * no callback, the transaction will also handle (and re-emit) 'error' events for the Query instance.
		 * This enables handling errors for an entire transaction in a single place.
		 *
		 * Transactions may also be nested by passing a Transaction to begin and these nested transactions can
		 * safely error and rollback without rolling back their parent transaction
		 *
		 * Transaction events:
		 * 'query', query - emitted immediately after .query is called on a connection via tx.query. The argument is a query object.
		 * 'commit:start' - Emitted when .commit() is called.
		 * 'commit:complete' - Emitted after the transaction has committed.
		 * 'rollback:start' - Emitted when .rollback() is called.
		 * 'rollback:complete' - Emitted after the transaction has rolled back.
		 * 'close' - Emitted after rollback or commit completes.
		 * 'error', err - Emitted under three conditions:
		 * There was an error acquiring a connection.
		 * Any query performed in this transaction emits an error that would otherwise go unhandled.
		 * Any of query, begin, commit, or rollback are called after the connection has already been committed or rolled back.
		 * Note that the 'error' event may be emitted multiple times! depending on the callback you are registering, you way want to wrap it using [once][].
		 */
		interface Transaction extends anyDB.Queryable {

			/**
			 * Issue a COMMIT (or RELEASE ... in the case of nested transactions) statement to the database.
			 * If a continuation is provided it will be called (possibly with an error) after the COMMIT
			 * statement completes. The transaction object itself will be unusable after calling commit().
			 */
			commit(callback?: (error: Error) => void): void;

			/**
			 * The same as Transaction.commit but issues a ROLLBACK. Again, the transaction will be unusable after calling this method.
			 */
			rollback(callback?: (error: Error) => void): void;
		}

		interface TransactionOptions {
			/**
			 * Adapter name e.g. 'mysql'
			 */
			adapter?: anyDB.Adapter;
			/**
			 * SQL statement for beginning a transaction, default 'BEGIN'
			 */
			begin?: string;
			/**
			 * SQL statement for committing a transaction, default 'COMMIT'
			 */
			commit?: string;
			/**
			 * SQL statement for rolling back a transaction, default 'ROLLBACK'
			 */
			rollback?: string;
			/**
			 * Callback for transaction
			 */
			callback?: (error: Error, transaction: Transaction) => void;
			/**
			 * Rollback automatically on error, default true
			 */
			autoRollback?: boolean;
		}
	}

	/**
	 * Start a transaction
	 */
	function begin(q: anyDB.Queryable, options?: begin.TransactionOptions, callback?: (error: Error, transaction: begin.Transaction) => void): begin.Transaction;
	function begin(q: anyDB.Queryable, callback?: (error: Error, transaction: begin.Transaction) => void): begin.Transaction;
	function begin(q: anyDB.Queryable, beginStatement?: string, callback?: (error: Error, transaction: begin.Transaction) => void): begin.Transaction;
	function begin(q: anyDB.Queryable, options?: begin.TransactionOptions, beginStatement?: string, callback?: (error: Error, transaction: begin.Transaction) => void): begin.Transaction;

	export = begin;
}



