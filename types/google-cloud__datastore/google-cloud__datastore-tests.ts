import Datastore = require('@google-cloud/datastore');
import {
    DatastoreDouble,
    DatastoreGeopoint,
    DatastoreInt,
    DatastoreKey,
    DatastoreKeyPath
} from '@google-cloud/datastore/entity';
import { Query, QueryCallback, QueryInfo, QueryOptions, QueryResult } from '@google-cloud/datastore/query';
import { AllocateIdsResult, CommitCallback, CommitResponse, CommitResult } from '@google-cloud/datastore/request';
import { DatastoreTransaction, TransactionResult } from '@google-cloud/datastore/transaction';

interface TestEntity {
    name?: string;
    location?: string;
    symbol?: string;
    [Datastore.KEY]?: any;
}

const kind = 'Company';
const entityToCreate: TestEntity = {
    name: 'Google',
    location: 'CA'
};

const ds: Datastore = new Datastore({
                                        apiEndpoint: 'http://localhost:8081',
                                        namespace: 'project-namespace',
                                        projectId: 'project-id',
                                        keyFilename: '../secret.json',
                                        credentials: {}
                                    });
ds.determineBaseUrl_('http://localhost:8081');

// Keys components creation:
const dsInt: DatastoreInt = ds.int(42);
const isInt = ds.isInt(dsInt);
const dsDouble: DatastoreDouble = ds.double('3.14');
const isDouble = ds.isDouble(dsDouble);

const dsGeopoint: DatastoreGeopoint = ds.geoPoint({latitude: 0, longitude: 0});
const isGeoPoint = ds.isGeoPoint(dsGeopoint);

// Keys creation:
const keyPath: DatastoreKeyPath = [kind, 'Google', 'Department', dsInt];
const key: DatastoreKey = ds.key(keyPath);
const isKey = ds.isKey(key);
const ancestorKey: DatastoreKey = ds.key(['ParentCompany', 'Alphabet']);
const keyWithOptions: DatastoreKey = ds.key({
                                                namespace: 'special-namespace',
                                                path: keyPath
                                            });
const incompleteKey = ds.key([kind]);

// ID allocation:
ds.allocateIds(incompleteKey, 1, (err: Error, keys: DatastoreKey[]) => {
});
const allocationPromise: Promise<AllocateIdsResult> = ds.allocateIds(incompleteKey, 1);

// Query creation:
const manuallyCreatedQuery = new Datastore.Query('scope', kind, 'namespace');
const options: QueryOptions = {consistency: 'strong'};
const query: Query = ds.createQuery(kind);
const complexQuery = ds.createQuery('special_namespace', kind)
                       .hasAncestor(ancestorKey)
                       .filter('aProp', '<', 0)
                       .filter('location', dsGeopoint)
                       .order('location', {descending: true})
                       .select(['1', '2'])
                       .groupBy(['group', 'props'])
                       .limit(1000)
                       .offset(10);

// Running queries:
const queryCallback: QueryCallback = (err: Error, entities: TestEntity[]) => entities[0][ds.KEY];

ds.runQuery(query, queryCallback);
ds.runQuery(query, options, queryCallback);
ds.runQuery(query, options);

const queryStream: NodeJS.ReadableStream = complexQuery.runStream();
const dsQueryStream: NodeJS.ReadableStream = ds.runQueryStream(complexQuery, options);
complexQuery.run()
            .then((data: QueryResult) => {
                const {moreResults, endCursor} = data[1];
                const frontEndResponse: any = {};
                switch (moreResults) {
                case Datastore.NO_MORE_RESULTS:
                    frontEndResponse.nextPageCursor = null;
                    break;
                case Datastore.MORE_RESULTS_AFTER_CURSOR:
                case Datastore.MORE_RESULTS_AFTER_LIMIT:
                    frontEndResponse.nextPageCursor = endCursor;
                }
            });

query.run((err: Error, entities: TestEntity[], info: QueryInfo) => {
    if (err) {
        return;
    }
    const {moreResults, endCursor} = info;

    const frontEndResponse: any = {entities};
    switch (moreResults) {
    case ds.NO_MORE_RESULTS:
        frontEndResponse.nextPageCursor = null;
        break;
    case ds.MORE_RESULTS_AFTER_CURSOR:
    case ds.MORE_RESULTS_AFTER_LIMIT:
        frontEndResponse.nextPageCursor = endCursor;
    }
});

// Saving an entity:
const saveCallback: CommitCallback = (err: Error, response: CommitResponse) => undefined;

ds.insert(entityToCreate, saveCallback);
ds.save(entityToCreate, saveCallback);
ds.update(entityToCreate, saveCallback);
ds.upsert(entityToCreate, saveCallback);

const insertPromise: Promise<CommitResult> = ds.insert(entityToCreate);
const savePromise: Promise<CommitResult> = ds.save(entityToCreate);
const updatePromise: Promise<CommitResult> = ds.update(entityToCreate);
const upsertPromise: Promise<CommitResult> = ds.upsert(entityToCreate);

// Getting entities:
ds.get(key, (err, entity) => {
});
ds.get(key).then((data: [TestEntity]) => data[0]);
ds.get(key, {maxApiCalls: 1})
  .then((data: [TestEntity]) => {
      const blah: TestEntity = data[0];
  });
ds.get([key, key], {maxApiCalls: 1})
  .then((data: [TestEntity[]]) => {
      const blah: TestEntity[] = data[0];
  });
ds.get(key, (err: Error, data: any[]) => data[0]);

// We can verify the data was saved by using {module:datastore#get}.
ds.get(
    key,
    (err, entity) => {
    }
);

// Deleting entities:
ds.delete(key, err => {
    if (!err) {
        // Record deleted successfully.
    }
});

// Running in transactions:
const transaction: DatastoreTransaction = ds.transaction();
const manuallyCreatedTx = new Datastore.Transaction(ds);

transaction.run((err, activeTx: DatastoreTransaction) => {
    transaction.get(key, (err: Error, entity: TestEntity) => {
        if (err) {
            transaction.rollback(err => {
            });
        }

        const queryInTx: Query = activeTx.createQuery(kind);
        const namespacedQueryInTx: Query = activeTx.createQuery('special-namespace', kind);

        transaction.save(entity);
        transaction.commit(err => {
        });
    });
});

const promisedTxStart: Promise<TransactionResult> = ds.transaction().run();

promisedTxStart.then((result: TransactionResult) => {
    const activeTx: DatastoreTransaction = result[0];
    const rollbackPromise: Promise<{}> = activeTx.rollback();
    return activeTx.commit();
});

class MyCustomDatastoreRequest extends Datastore.DatastoreRequest {
    constructor() {
        super();
    }
}
