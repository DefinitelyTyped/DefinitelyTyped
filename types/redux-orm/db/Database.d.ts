import { IndexedModelClasses, OrmState } from '../ORM';
import { CREATE, DELETE, EXCLUDE, FAILURE, FILTER, ORDER_BY, SUCCESS, UPDATE } from '../constants';
import { ModelTableOpts, Table } from './Table';
import { Serializable } from '../Model';
import { BatchToken } from '../Session';

/**
 * A type of {@link QueryClause}.
 */
export type QueryType = typeof FILTER | typeof EXCLUDE | typeof ORDER_BY;

/**
 * A single `QueryClause`.
 * Multiple `QueryClause`s can be combined into a {@link Query}.
 */
export interface QueryClause<Payload extends object = {}> {
    type: QueryType;
    payload: Payload;
}

/**
 * Query definition, contains target table and a collection of {@link QueryClause}.
 */
export interface Query {
    table: string;
    clauses: QueryClause[];
}

/**
 * Query wrapper definition, wraps {@link Query}.
 */
export interface QuerySpec {
    query: Query;
}

/**
 * Query result.
 */
export interface QueryResult<Row extends Record<string, Serializable> = {}> {
    rows: ReadonlyArray<Row>;
}

/**
 * A type of data update to perform.
 */
export type UpdateType = typeof CREATE | typeof UPDATE | typeof DELETE;

/**
 * A status of data update operation.
 */
export type UpdateStatus = typeof SUCCESS | typeof FAILURE;

/**
 * Data update definition
 */
export interface UpdateSpec<Payload = any> {
    action: UpdateType;
    payload?: Payload;
    query?: Query;
}

/**
 * Data update result.
 */
export interface UpdateResult<I extends IndexedModelClasses<any>, Payload extends object = {}> {
    status: UpdateStatus;
    state: OrmState<I>;
    payload: Payload;
}

/**
 * Transactions aggregate batches of operations.
 */
export interface Transaction {
    batchToken: BatchToken;
    withMutations: boolean;
}

/**
 * Schema specification, required for default database creator.
 *
 * @see {@link DatabaseCreator}
 * @see {@link ModelTableOpts}
 * @see {@link Table}
 */
export interface SchemaSpec<I extends IndexedModelClasses<any>> {
    tables: { [K in keyof I]: ModelTableOpts<I[K]> };
}

/**
 * A Database parametrized by schema made of {@link Model} classes.
 *
 * @see {@link SchemaSpec}
 * @see {@link TableSpec}
 * @see {@link Table}
 */
export interface Database<I extends IndexedModelClasses<any>, Tables = { [K in keyof I]: Table<I[K]> }> {
    /**
     * Returns the empty database state.
     *
     * @see {@link OrmState}
     *
     * @return empty state
     */
    getEmptyState(): OrmState<I>;

    /**
     * Execute a query against a given state.
     *
     * @param querySpec - a query definition.
     * @param state - the state to query against.
     *
     * @see {@link QuerySpec}
     * @see {@link OrmState}
     * @see {@link OrmState}
     *
     * @return a {@link QueryResult} containing 0 to many {@link QueryResult.rows}.
     */
    query(querySpec: QuerySpec, state: OrmState<I>): QueryResult;

    /**
     * Apply an update to a given state.
     *
     * @param updateSpec - a data update definition.
     * @param tx - a transaction for batches of operations.
     * @param state - the state to apply update to.
     *
     * @see {@link UpdateSpec}
     * @see {@link Transaction}
     * @see {@link OrmState}
     *
     * @return a {@link UpdateResult} containing 0 to many {@link QueryResult.rows}.
     */

    update(updateSpec: UpdateSpec, tx: Transaction, state: OrmState<I>): UpdateResult<I>;

    /**
     * Return a {@link Table} structure based on provided table name.
     * @param tableName - the name of the {@link Table} to describe
     *
     * @return a {@link Table} instance matching given `tableName` or `undefined` if no such table exists.
     */
    describe<K extends keyof Tables>(tableName: K): Tables[K];
}

/**
 * Database creation function type.
 */
export type DatabaseCreator = typeof createDatabase;

/**
 * Default database creation procedure handle.
 *
 * @param schemaSpec - a {@link SchemaSpec} to built the {@link Database} from.
 *
 *  @return a {@Link Database} instance, ready for query and data update operation.
 */
export function createDatabase<I extends IndexedModelClasses<any>>(schemaSpec: SchemaSpec<I>): Database<I>;

export default createDatabase;
