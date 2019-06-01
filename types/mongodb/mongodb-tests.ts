// Test source : https://github.com/mongodb/node-mongodb-native

import { format } from 'util';
import * as mongodb from 'mongodb';

const connectionString = 'mongodb://127.0.0.1:27017/test';

const options: mongodb.MongoClientOptions = {
    authSource: ' ',
    loggerLevel: 'debug',
    w: 1,
    wtimeout: 300,
    j: true,
    bufferMaxEntries: 1000,
    readPreference: true ? mongodb.ReadPreference.NEAREST : 'string',
    promoteValues: true,
    pkFactory: {},
    poolSize: 1,

    socketOptions: {},
    family: 4,

    reconnectTries: 123456,
    reconnectInterval: 123456,
    ssl: true,
    sslValidate: false,
    checkServerIdentity: true ? true : (host, cert) => { return undefined; },
    sslCA: ['str'],
    sslCRL: ['str'],
    sslCert: new Buffer(999),
    sslKey: new Buffer(999),
    sslPass: new Buffer(999),
    promoteBuffers: false,
    useNewUrlParser: false,
    authMechanism: 'SCRAM-SHA-1',
    forceServerObjectId: false,
    promiseLibrary: Promise,
};

mongodb.MongoClient.connect(connectionString, options, (err: mongodb.MongoError, client: mongodb.MongoClient) => {
    if (err) throw err;
    const db = client.db('test');

    const collection = db.collection('test_insert');
    collection.insertOne({ a: 2 }, (err: mongodb.MongoError, result) => {
        result.insertedCount; // $ExpectType number
        result.insertedId; // $ExpectType ObjectId
        result.result.n; // $ExpectType number
        result.result.ok; // $ExpectType number

        // Intentionally omitted type annotation from 'count'.
        // This way it requires a more accurate typedef which allows inferring that it's a number.
        collection.countDocuments((err: mongodb.MongoError, count) => {
            console.log(format("count = %s", count));
        });

        collection.countDocuments().then((count: number) => {
            console.log(format("count = %s", count));
        });

        collection.countDocuments({ foo: 1 }, (err: mongodb.MongoError, count: number) => {
            console.log(format("count = %s", count));
        });

        collection.countDocuments({ foo: 1 }).then((count: number) => {
            console.log(format("count = %s", count));
        });

        collection.countDocuments({ foo: 1 }, { limit: 10 }, (err: mongodb.MongoError, count: number) => {
            console.log(format("count = %s", count));
        });

        collection.countDocuments({ foo: 1 }, { limit: 10 }).then((count: number) => {
            console.log(format("count = %s", count));
        });

        // Locate all the entries using find
        collection.find({}).toArray((err: mongodb.MongoError, results: any) => {
            console.dir(results);
            // Let's close the db
            client.close();
        });

        // Get some statistics
        collection.stats((err: mongodb.MongoError, stats: any) => {
            console.log(stats.count + " documents");
        });

        //
        collection.stats().then((stats) => {
            console.log(stats.wiredTiger.cache['bytes currently in the cache']);
        });

        collection.createIndex({}, { partialFilterExpression: { rating: { $exists: 1 } } });
    });

    {
        let cursor: mongodb.Cursor;
        cursor = collection.find();
        cursor = cursor.addCursorFlag('', true);
        cursor = cursor.addQueryModifier('', true);
        cursor = cursor.batchSize(1);
        cursor = cursor.comment('');
        cursor = cursor.filter({a: 1});
        cursor = cursor.hint({ age: 1 });
        cursor = cursor.hint('age_1');
        cursor = cursor.limit(1);
        cursor = cursor.map((result) => {});
        cursor = cursor.max({ age: 130 });
        cursor = cursor.min({ age: 18 });
        cursor = cursor.maxAwaitTimeMS(1);
        cursor = cursor.maxScan({});
        cursor = cursor.maxTimeMS(1);
        cursor = cursor.project({});
        cursor = cursor.returnKey({});
        cursor = cursor.setCursorOption('', {});
        cursor = cursor.setReadPreference('');
        cursor = cursor.showRecordId({});
        cursor = cursor.skip(1);
        cursor = cursor.snapshot({});
        cursor = cursor.sort({});
        cursor = cursor.stream();
    }
    // Collection .findM<T>() & .agggregate<T>() generic tests
    {
        interface Bag {
            cost: number;
            color: string;
        }
        const cursor: mongodb.Cursor<Bag> = collection.find<Bag>({ color: 'black' });
        cursor.toArray((err, r) => { r[0].cost; });
        cursor.forEach((bag) => { bag.color; }, () => {});
        collection.findOne({ color: 'white' }).then(b => { const _b: Bag = b; });
        collection.findOne<Bag>({ color: 'white' }).then(b => { b.cost; });
    }
    {
        interface Payment {
            total: number;
        }
        const cursor: mongodb.AggregationCursor<Payment> = collection.aggregate<Payment>([{}]);

        collection.aggregate([{ $match: { bar: 1 } }, { $limit: 10 }]);
        collection.aggregate([{ $match: { bar: 1 } }]).limit(10);
        collection.aggregate([]).match({ bar: 1 }).limit(10);
        collection.aggregate().match({ bar: 1 }).limit(10);

        collection.aggregate<Payment>(
            [{ $match: { bar: 1 } }],
            (err: mongodb.MongoError, cursor: mongodb.AggregationCursor<Payment>) => {
                cursor.limit(10);
            }
        );

        collection.aggregate<Payment>(
            [],
            (err: mongodb.MongoError, cursor: mongodb.AggregationCursor<Payment>) => {
                cursor.match({ bar: 1 }).limit(10);
            }
        );

        collection.aggregate<Payment>(
            (err: mongodb.MongoError, cursor: mongodb.AggregationCursor<Payment>) => {
                cursor.match({ bar: 1 }).limit(10);
            }
        );

        interface Employee {
            firstName: string;
            lastName: string;
            department: string;
        }

        interface EmployeeName {
            fullName: string;
        }

        const cursor1: mongodb.AggregationCursor<EmployeeName> = (
          collection.aggregate<Employee>().project<EmployeeName>({
            fullName: { $concat: ['$firstName', ' ', '$lastName'] },
          })
        );

        interface DepartmentSummary {
            _id: string;
            count: number;
        }

        const cursor2: mongodb.AggregationCursor<DepartmentSummary> = (
          collection.aggregate<Employee>().group<DepartmentSummary>({
            _id: '$department',
            count: { $sum: 1 },
          })
        );
    }

    // test for new typings
    {
        interface TestCollection {
            stringField: string;
            numberField?: number;
            fruitTags: string[];
        }
        const testCollection = db.collection<TestCollection>('testCollection');
        testCollection.insertOne({
            stringField: 'hola',
            fruitTags: ['Strawberry'],
        });
        testCollection.insertMany([
            { stringField: 'hola', fruitTags: ['Apple', 'Lemon'] },
            { stringField: 'hola', numberField: 1, fruitTags: [] },
        ]);
        testCollection.find({
            numberField: {
                $and: [{ $gt: 0, $lt: 100 }]
            }
        });

        const res: mongodb.Cursor<TestCollection> = testCollection.find({ _id: 123 });

        testCollection.updateOne(
            { stringField: 'hola' },
            {
                $addToSet: {
                    fruitTags: 'Orange',
                },
                $pull: {
                    fruitTags: 'Lemon',
                }
            }
        );
    }
});

async function testFunc(): Promise<mongodb.MongoClient> {
    const testClient: mongodb.MongoClient = await mongodb.connect(connectionString);
    return testClient;
}

mongodb.connect(connectionString, (err: mongodb.MongoError, client: mongodb.MongoClient) => {});
mongodb.connect(connectionString, options, (err: mongodb.MongoError, client: mongodb.MongoClient) => {});

// https://docs.mongodb.com/manual/core/transactions/

async function commitWithRetry(session: mongodb.ClientSession) {
    try {
        await session.commitTransaction();
        console.log('Transaction committed.');
    } catch (error) {
        if (
            error.errorLabels &&
            error.errorLabels.indexOf('UnknownTransactionCommitResult') < 0
        ) {
            console.log('UnknownTransactionCommitResult, retrying commit operation...');
            await commitWithRetry(session);
        } else {
            console.log('Error during commit...');
            throw error;
        }
    }
}

async function runTransactionWithRetry(
    txnFunc: (client: mongodb.MongoClient, session: mongodb.ClientSession) => Promise<void>,
    client: mongodb.MongoClient,
    session: mongodb.ClientSession
) {
    try {
        await txnFunc(client, session);
    } catch (error) {
        console.log('Transaction aborted. Caught exception during transaction.');

        // If transient error, retry the whole transaction
        if (error.errorLabels && error.errorLabels.indexOf('TransientTransactionError') < 0) {
            console.log('TransientTransactionError, retrying transaction ...');
            await runTransactionWithRetry(txnFunc, client, session);
        } else {
            throw error;
        }
    }
}

async function updateEmployeeInfo(client: mongodb.MongoClient, session: mongodb.ClientSession) {
    session.startTransaction({
        readConcern: { level: 'snapshot' },
        writeConcern: { w: 'majority' }
    });

    const employeesCollection = client.db('hr').collection('employees');
    const eventsCollection = client.db('reporting').collection('events');

    await employeesCollection.updateOne(
        { employee: 3 },
        { $set: { status: 'Inactive' } },
        { session }
    );
    await eventsCollection.insertOne(
        {
            employee: 3,
            status: { new: 'Inactive', old: 'Active' }
        },
        { session }
    );

    try {
        await commitWithRetry(session);
    } catch (error) {
        await session.abortTransaction();
        throw error;
    }
}

async function transfer(client: mongodb.MongoClient, from: any, to: any, amount: number) {
    const db = client.db();
    const session = client.startSession();
    session.startTransaction();
    try {
        const opts = { session, returnOriginal: false };
        const A = await db.collection('Account').
        findOneAndUpdate({ name: from }, { $inc: { balance: -amount } }, opts).
        then(res => res.value);
        if (A.balance < 0) {
            // If A would have negative balance, fail and abort the transaction
            // `session.abortTransaction()` will undo the above `findOneAndUpdate()`
            throw new Error('Insufficient funds: ' + (A.balance + amount));
        }

        const B = await db.collection('Account')
            .findOneAndUpdate({ name: to }, { $inc: { balance: amount } }, opts)
            .then(res => res.value);

        await session.commitTransaction();
        session.endSession();
        return { from: A, to: B };
    } catch (error) {
        // If an error occurred, abort the whole transaction and
        // undo any changes that might have happened
        await session.abortTransaction();
        session.endSession();
        throw error; // Rethrow so calling function sees error
    }
}

mongodb.connect(connectionString).then((client) => {
    client.startSession();
    client.withSession(session =>
        runTransactionWithRetry(updateEmployeeInfo, client, session)
    );
});

// https://docs.mongodb.com/manual/core/map-reduce/

// Declare emit function to be called inside map function
declare function emit(key: any, value: any): void;

interface ITestMapReduceSchema {
    cust_id: string;
    amount: number;
    status: string;
}

function testCollectionMapFunction(this: ITestMapReduceSchema) {
    emit(this.cust_id, this.amount);
}

function testCollectionReduceFunction(_key: string, values: number[]): number {
    return values.reduce((a, v) => a + v, 0);
}

mongodb.connect(connectionString).then((client) => {
    client.db("test").collection<ITestMapReduceSchema>('test-mapReduce-collection').mapReduce(
        testCollectionMapFunction,
        testCollectionReduceFunction
    );
});

// Test other error classes
new mongodb.MongoNetworkError('network error');
new mongodb.MongoParseError('parse error');
