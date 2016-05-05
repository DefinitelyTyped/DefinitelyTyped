// Test source : https://github.com/mongodb/node-mongodb-native
import mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var format = require('util').format;
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err: mongodb.MongoError, db: mongodb.Db) {
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
    });
})
