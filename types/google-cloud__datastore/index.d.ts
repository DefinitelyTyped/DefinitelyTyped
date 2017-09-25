// Type definitions for @google-cloud/datastore 1.1
// Project: https://github.com/GoogleCloudPlatform/google-cloud-node/tree/master/packages/datastore
// Definitions by: Antoine Beauvais-Lacasse <https://github.com/beaulac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

declare module '@google-cloud/datastore' {
    export = Datastore;

    import {
        DatastoreKey,
        KEY_SYMBOL,
        DatastoreInt,
        DatastoreDouble,
        DatastoreGeopoint,
        DatastoreKeyPath,
        DatastoreKeyOptions,
        DatastoreCoords,
        OneOrMany
    } from '@google-cloud/datastore/entity';
    import { DatastoreRequest as DatastoreRequest_, CommitCallback, CommitResult } from '@google-cloud/datastore/request';
    import {
        Query as DatastoreQuery,
        MoreResultsAfterCursor,
        MoreResultsAfterLimit,
        NoMoreResults
    } from '@google-cloud/datastore/query';
    import { DatastoreTransaction } from '@google-cloud/datastore/transaction';

    class Datastore extends DatastoreRequest_ {
        constructor(options: InitOptions);

        readonly KEY: KEY_SYMBOL;
        readonly MORE_RESULTS_AFTER_CURSOR: MoreResultsAfterCursor;
        readonly MORE_RESULTS_AFTER_LIMIT: MoreResultsAfterLimit;
        readonly NO_MORE_RESULTS: NoMoreResults;

        // tslint:disable-next-line unified-signatures (Arg is semantically different)
        createQuery(namespace: string, kind: string): DatastoreQuery;
        createQuery(kind: string): DatastoreQuery;

        save(entities: OneOrMany<object>, callback: CommitCallback): void;
        save(entities: OneOrMany<object>): Promise<CommitResult>;

        delete(keyOrKeys: DatastoreKey | ReadonlyArray<DatastoreKey>, callback: CommitCallback): void;
        delete(keyOrKeys: DatastoreKey | ReadonlyArray<DatastoreKey>): Promise<CommitResult>;

        transaction(): DatastoreTransaction;

        int(value: string | number): DatastoreInt;

        double(value: string | number): DatastoreDouble;

        geoPoint(coordinates: DatastoreCoords): DatastoreGeopoint;

        key(pathOrOptions: DatastoreKeyPath | DatastoreKeyOptions): DatastoreKey;

        determineBaseUrl_(customApiEndpoint?: string): void;
    }

    interface InitOptions {
        apiEndpoint?: string;
        namespace?: string;
        projectId?: string;
        keyFilename?: string;
        credentials?: object;
    }

    namespace Datastore {
        const KEY: KEY_SYMBOL;
        const MORE_RESULTS_AFTER_CURSOR: MoreResultsAfterCursor;
        const MORE_RESULTS_AFTER_LIMIT: MoreResultsAfterLimit;
        const NO_MORE_RESULTS: NoMoreResults;

        const Query: typeof DatastoreQuery;
        const DatastoreRequest: typeof DatastoreRequest_;
        const Transaction: typeof DatastoreTransaction;
    }
}

declare module '@google-cloud/datastore/entity' {
    interface DatastoreInt {
        value: string;
    }
    interface DatastoreDouble {
        value: string;
    }

    interface DatastoreCoords {
        latitude: number;
        longitude: number;
    }
    interface DatastoreGeopoint {
        value: DatastoreCoords;
    }

    type PathElement = string | number | DatastoreInt;

    /**
     * DatastoreKeyPath is structured as [kind, identifier, kind, identifier, ...]
     * `kind` must be a string, `identifier` is a PathElement
     */
    type DatastoreKeyPath = PathElement[];

    interface DatastoreKeyOptions {
        namespace?: string;
        path: DatastoreKeyPath;
    }

    interface DatastoreKey {
        kind: string;
        id?: string;
        name?: string;

        readonly path: DatastoreKeyPath;

        parent?: DatastoreKey;
    }

    type KEY_SYMBOL = symbol;

    interface DatastorePayload<T> {
        key: DatastoreKey;
        // TODO Include possibility of 'raw data' with indexing options, etc
        data: T | object;
        excludeFromIndexes?: string[];
    }

    /**
     * NB: TS does not support computed symbol keys (yet: https://github.com/Microsoft/TypeScript/pull/15473)
     * If using a raw T object, it MUST have a {@link Datastore_#KEY} symbol property of type {@link DatastoreKey}.
     */
    type ObjOrPayload<T> = T | DatastorePayload<T>;
    type OneOrMany<T> = ObjOrPayload<T> | Array<ObjOrPayload<T>>;
}

declare module '@google-cloud/datastore/query' {
    // tslint:disable-next-line no-duplicate-imports (This rule is broken for multiple modules per file)
    import { DatastoreKey } from '@google-cloud/datastore/entity';

    type MoreResultsAfterCursor = 'MORE_RESULTS_AFTER_CURSOR';
    type MoreResultsAfterLimit = 'MORE_RESULTS_AFTER_LIMIT';
    type NoMoreResults = 'NO_MORE_RESULTS';

    class Query {
        constructor(scope: string, kinds: string, namespace: string);

        filter(property: string, operator: QueryFilterOperator, value: any): this;
        filter(property: string, value: any): this;

        hasAncestor(key: DatastoreKey): this;

        order(property: string, options?: OrderOptions): this;

        groupBy(properties: string | ReadonlyArray<string>): this;

        select(properties: string | ReadonlyArray<string>): this;

        start(cursorToken: string): this;

        end(cursorToken: string): this;

        limit(n: number): this;

        offset(n: number): this;

        run(callback: QueryCallback): void;
        run(options: QueryOptions, callback: QueryCallback): void;
        run(options?: QueryOptions): Promise<QueryResult>;

        runStream(): NodeJS.ReadableStream;
    }

    type QueryFilterOperator = '<' | '<=' | '=' | '>=' | '>';

    interface OrderOptions {
        descending: boolean;
    }

    interface QueryOptions {
        consistency?: 'strong' | 'eventual';
        maxApiCalls?: number;
    }

    interface QueryInfo {
        endCursor?: string;
        readonly moreResults: MoreResultsAfterCursor | MoreResultsAfterLimit | NoMoreResults;
    }

    type QueryCallback = (err: Error, entities: object[], info: QueryInfo) => void;
    type QueryResult = [object[], QueryInfo];
}

declare module '@google-cloud/datastore/request' {
    // tslint:disable-next-line no-duplicate-imports (This rule is broken for multiple modules per file)
    import { DatastoreKey, OneOrMany } from '@google-cloud/datastore/entity';
    // tslint:disable-next-line no-duplicate-imports
    import { Query, QueryCallback, QueryOptions, QueryResult } from '@google-cloud/datastore/query';

    /**
     * Creates requests to the Datastore endpoint.
     * Designed to be inherited by {@link Datastore} & {@link DatastoreTransaction}
     */
    abstract class DatastoreRequest {
        allocateIds(incompleteKey: DatastoreKey, n: number, callback: AllocateIdsCallback): void;
        allocateIds(incompleteKey: DatastoreKey, n: number): Promise<AllocateIdsResult>;

        createReadStream(keys: DatastoreKey | ReadonlyArray<DatastoreKey>,
                         options: QueryOptions): NodeJS.ReadableStream;

        delete(keyOrKeys: DatastoreKey | ReadonlyArray<DatastoreKey>, callback: CommitCallback): void;
        delete(keyOrKeys: DatastoreKey | ReadonlyArray<DatastoreKey>): Promise<CommitResult> | void;

        get(key: DatastoreKey, options: QueryOptions, callback: GetCallback<object>): void;
        get(keys: ReadonlyArray<DatastoreKey>, options: QueryOptions, callback: GetCallback<object[]>): void;
        get(key: DatastoreKey, callback: GetCallback<object>): void;
        get(keys: ReadonlyArray<DatastoreKey>, callback: GetCallback<object[]>): void;

        get(key: DatastoreKey, options?: QueryOptions): Promise<[object | undefined]>;
        get(keys: ReadonlyArray<DatastoreKey>, options?: QueryOptions): Promise<[object[]]>;

        runQuery(query: Query, options: QueryOptions, callback: QueryCallback): void;
        runQuery(query: Query, callback: QueryCallback): void;
        runQuery(query: Query, options?: QueryOptions): QueryResult;

        runQueryStream(query: Query, options?: QueryOptions): NodeJS.ReadableStream;

        save(entities: OneOrMany<object>, callback: CommitCallback): void;
        save(entities: OneOrMany<object>): Promise<CommitResult> | void;

        insert(entities: OneOrMany<object>, callback: CommitCallback): void;
        insert(entities: OneOrMany<object>): Promise<CommitResult>;

        update(entities: OneOrMany<object>, callback: CommitCallback): void;
        update(entities: OneOrMany<object>): Promise<CommitResult>;

        upsert(entities: OneOrMany<object>, callback: CommitCallback): void;
        upsert(entities: OneOrMany<object>): Promise<CommitResult>;
    }

    interface MutationResult {
        key: DatastoreKey;
        conflictDetected: boolean;
        version: number;
    }

    interface CommitResponse {
        mutationResults: MutationResult[];
        indexUpdates: number;
    }

    type CommitCallback = (err: Error, result: CommitResponse) => void;
    type CommitResult = [CommitResponse];

    type GetCallback<T> = (err: Error, entity: T) => void;

    type AllocateIdsCallback = (err: Error, keys: DatastoreKey[]) => void;
    type AllocateIdsResult = [DatastoreKey[]];
}

declare module '@google-cloud/datastore/transaction' {
    import Datastore_ = require('@google-cloud/datastore');
    // tslint:disable-next-line no-duplicate-imports (This rule is broken for multiple modules per file)
    import { DatastoreKey, OneOrMany } from '@google-cloud/datastore/entity';
    // tslint:disable-next-line no-duplicate-imports
    import { Query } from '@google-cloud/datastore/query';
    // tslint:disable-next-line no-duplicate-imports
    import { DatastoreRequest, CommitCallback, CommitResult } from '@google-cloud/datastore/request';

    class DatastoreTransaction extends DatastoreRequest {
        constructor(datastore: Datastore_);

        // tslint:disable-next-line unified-signatures (Arg is semantically different)
        createQuery(namespace: string, kind: string): Query;
        createQuery(kind: string): Query;

        save(entities: OneOrMany<object>): void;

        delete(keyOrKeys: DatastoreKey | ReadonlyArray<DatastoreKey>): void;

        commit(): Promise<CommitResult>;
        commit(callback: CommitCallback): void;

        rollback(): Promise<RollbackResult>;
        rollback(callback: RollbackCallback): void;

        run(callback: TransactionCallback): void;
        run(): Promise<TransactionResult>;
    }

    interface BeginTransactionResponse {
        transaction: string;
    }

    type RollbackCallback = (err: Error, rollbackResponse: {}) => void;
    type RollbackResult = [{}];

    type TransactionCallback = (err: Error, tx: DatastoreTransaction, beginTxResponse: BeginTransactionResponse) => void;
    type TransactionResult = [DatastoreTransaction, BeginTransactionResponse];
}
