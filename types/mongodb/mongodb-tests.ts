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
            numberField: number;
        };
        let testCollection = db.collection<TestCollection>('testCollection');

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

mongodb.connect(connectionString, (err: mongodb.MongoError, client: mongodb.MongoClient) => {});
mongodb.connect(connectionString, options, (err: mongodb.MongoError, client: mongodb.MongoClient) => {});
