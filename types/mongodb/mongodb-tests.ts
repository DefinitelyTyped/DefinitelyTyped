// Test source : https://github.com/mongodb/node-mongodb-native
import mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

const connectionString = 'mongodb://127.0.0.1:27017/test';

var format = require('util').format;
let options: mongodb.MongoClientOptions = {
    authSource: ' ',
    w: 1,
    wtimeout: 300,
    j: true,
    bufferMaxEntries: 1000,
    readPreference: 'ReadPreference | string',
    promoteValues: {},
    pkFactory: {},
    poolSize: 1,

    socketOptions: {},
    family: 4,

    reconnectTries: 123456,
    reconnectInterval: 123456,

    ssl: true,
    sslValidate: false,
    checkServerIdentity: function () { },
    sslCA: ['str'],
    sslCRL: ['str'],
    sslCert: new Buffer(999),
    sslKey: new Buffer(999),
    sslPass: new Buffer(999),
    promoteBuffers: false,
    useNewUrlParser: false
}
MongoClient.connect(connectionString, options, function (err: mongodb.MongoError, client: mongodb.MongoClient) {
    if (err) throw err;
    const db = client.db('test');
	
    var collection = db.collection('test_insert');
    collection.insertOne({ a: 2 }, function (err: mongodb.MongoError, docs: any) {

        // Intentionally omitted type annotation from 'count'.
        // This way it requires a more accurate typedef which allows inferring that it's a number.
        collection.countDocuments(function (err: mongodb.MongoError, count) {
            console.log(format("count = %s", count));
        });

        collection.countDocuments().then(function (count: number) {
            console.log(format("count = %s", count));
        });

        collection.countDocuments({ foo: 1 }, function (err: mongodb.MongoError, count: number) {
            console.log(format("count = %s", count));
        });

        collection.countDocuments({ foo: 1 }).then(function (count: number) {
            console.log(format("count = %s", count));
        });

        collection.countDocuments({ foo: 1 }, { limit: 10 }, function (err: mongodb.MongoError, count: number) {
            console.log(format("count = %s", count));
        });

        collection.countDocuments({ foo: 1 }, { limit: 10 }).then(function (count: number) {
            console.log(format("count = %s", count));
        });

        // Locate all the entries using find
        collection.find({}).toArray(function (err: mongodb.MongoError, results: any) {
            console.dir(results);
            // Let's close the db
            client.close();
        });

        // Get some statistics
        collection.stats(function (err: mongodb.MongoError, stats: any) {
            console.log(stats.count + " documents");
        });

        //
        collection.stats().then(function (stats) {
            console.log(stats.wiredTiger.cache['bytes currently in the cache']);
        })

        collection.createIndex({}, { partialFilterExpression: { rating: { $exists: 1 } } })
    });

    {
        let cursor: mongodb.Cursor;
        cursor = collection.find();
        cursor = cursor.addCursorFlag('', true);
        cursor = cursor.addQueryModifier('', true);
        cursor = cursor.batchSize(1);
        cursor = cursor.comment('');
        cursor = cursor.filter(1);
        cursor = cursor.hint({});
        cursor = cursor.limit(1);
        cursor = cursor.map(function (result) { });
        cursor = cursor.max(1);
        cursor = cursor.min(1);
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
        let bag: { cost: number, color: string };
        type bag = typeof bag;
        let cursor: mongodb.Cursor<bag> = collection.find<bag>({ color: 'black' })
        cursor.toArray(function (err, r) { r[0].cost });
        cursor.forEach(function (bag) { bag.color }, () => { });
        collection.findOne({ color: 'white' }).then(b => { let _b: bag = b; })
        collection.findOne<bag>({ color: 'white' }).then(b => { b.cost; })
    }
    {
        let payment: { total: number };
        type payment = typeof payment;
        let cursor: mongodb.AggregationCursor<payment> = collection.aggregate<payment>([{}])

        collection.aggregate([{ $match: { bar: 1 } }, { $limit: 10 }])
        collection.aggregate([{ $match: { bar: 1 } }]).limit(10)
        collection.aggregate([]).match({ bar: 1 }).limit(10)
        collection.aggregate().match({ bar: 1 }).limit(10)

        collection.aggregate<payment>(
            [{ $match: { bar: 1 } }],
            function (err: mongodb.MongoError, cursor: mongodb.AggregationCursor<payment>) {
                cursor.limit(10)
            }
        )

        collection.aggregate<payment>(
            [],
            function (err: mongodb.MongoError, cursor: mongodb.AggregationCursor<payment>) {
                cursor.match({ bar: 1 }).limit(10)
            }
        )

        collection.aggregate<payment>(
            function (err: mongodb.MongoError, cursor: mongodb.AggregationCursor<payment>) {
                cursor.match({ bar: 1 }).limit(10)
            }
        )
    }

    // test for new typings
    {
        type TestCollection = {
            stringField: string;
            numberField?: number;
        };
        let testCollection = db.collection<TestCollection>('testCollection');
		testCollection.insertOne({stringField:'hola'})
		testCollection.insertMany([{stringField:'hola'},{stringField:'hola', numberField: 1}])
        testCollection.find({
            numberField: {
                $and: [{ $gt: 0, $lt: 100 }]
            }
        });

        const res: mongodb.Cursor<TestCollection> = testCollection.find({ _id: 123 });
    }
})

let testFunc = async () => {
    let testClient: mongodb.MongoClient;
    testClient = await mongodb.connect(connectionString);
};

mongodb.connect(connectionString, (err: mongodb.MongoError, client: mongodb.MongoClient) => { });
mongodb.connect(connectionString, options, (err: mongodb.MongoError, client: mongodb.MongoClient) => { });

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
            console.log('UnknownTransactionCommitResult, retrying commit operation ...');
            await commitWithRetry(session);
        } else {
            console.log('Error during commit ...');
            throw error;
        }
    }
}

async function runTransactionWithRetry(
    txnFunc: (client: mongodb.MongoClient, session: mongodb.ClientSession) => Promise<void>,
    client: mongodb.MongoClient,
    session: mongodb.ClientSession) {
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
  
      const B = await db.collection('Account').
        findOneAndUpdate({ name: to }, { $inc: { balance: amount } }, opts).
        then(res => res.value);
  
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

