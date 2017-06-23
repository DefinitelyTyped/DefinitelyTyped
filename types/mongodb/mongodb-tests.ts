// Test source : https://github.com/mongodb/node-mongodb-native
import mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var format  = require('util').format;
let options = {
    authSource           : ' ',
    w                    : 1,
    wtimeout             : 300,
    j                    : true,
    bufferMaxEntries     : 1000,
    readPreference       : 'ReadPreference | string',
    promoteValues        : {},
    pkFactory            : {},
    poolSize             : 1,
    
    socketOptions        : {},
    
    reconnectTries       : 123456,
    reconnectInterval    : 123456,
    
    ssl                  : true,
    sslValidate          : {},
    checkServerIdentity  : function (){ },
    sslCA                : ['str'],
    sslCert              : new Buffer(999),
    sslKey               : new Buffer(999),
    sslPass              : new Buffer(999)
}
    MongoClient.connect('mongodb://127.0.0.1:27017/test', options, function(err: mongodb.MongoError, db: mongodb.Db) {
    if (err) throw err;

    var collection = db.collection('test_insert');
    collection.insertOne({ a: 2 }, function(err: mongodb.MongoError, docs: any) {

        collection.count(function(err: mongodb.MongoError, count: any) {
            console.log(format("count = %s", count));
        });

        // Locate all the entries using find
        collection.find({}).toArray(function(err: mongodb.MongoError, results: any) {
            console.dir(results);
            // Let's close the db
            db.close();
        });

        // Get some statistics
        collection.stats(function(err: mongodb.MongoError, stats: any) {
            console.log(stats.count + " documents");
        });

        collection.createIndex({}, {partialFilterExpression: {rating: {$exists: 1}}})
    });

    {
    let cursor: mongodb.Cursor;
        cursor = collection.find();
        cursor = cursor.addCursorFlag('',true);
        cursor = cursor.addQueryModifier('',true);
        cursor = cursor.batchSize(1);
        cursor = cursor.comment('');
        cursor = cursor.filter(1);
        cursor = cursor.hint({});
        cursor = cursor.limit(1);
        cursor = cursor.map(function (result) {});
        cursor = cursor.max(1);
        cursor = cursor.min(1);
        cursor = cursor.maxAwaitTimeMS(1);
        cursor = cursor.maxScan({});
        cursor = cursor.maxTimeMS(1);
        cursor = cursor.project({});
        cursor = cursor.returnKey({});
        cursor = cursor.setCursorOption('',{});
        cursor = cursor.setReadPreference('');
        cursor = cursor.showRecordId({});
        cursor = cursor.skip(1);
        cursor = cursor.snapshot({});
        cursor = cursor.sort({});
        cursor = cursor.stream();
    }
    // Collection .findM<T>() & .agggregate<T>() generic tests
    {
    let bag : {cost: number, color: string};
    type bag = typeof bag;
    let cursor: mongodb.Cursor<bag> = collection.find<bag>({color: 'black'})
        cursor.toArray(function (err,r) { r[0].cost} );
        cursor.forEach(function (bag  ) { bag.color }, () => {});
        collection.findOne({ color: 'white' }).then(b => { let _b:bag = b; })
        collection.findOne<bag>({ color: 'white' }).then(b => { b.cost; })
    }
    {
    let payment: {total: number};
    type payment = typeof payment;
    let cursor: mongodb.AggregationCursor<payment> = collection.aggregate<payment>([{}])
    }
})
