// Test source : https://github.com/mongodb/node-mongodb-native
import mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

import { format } from "util";
MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
    if (err) throw err;

    var collection = db.collection('test_insert');
    collection.insert({ a: 2 }, function (err, docs) {

        collection.count(function (err, count) {
            console.log(format("count = %s", count));
        });

        // Locate all the entries using find
        collection.find().toArray(function (err, results) {
            console.dir(results);
            // Let's close the db
            db.close();
        });

        // Get some statistics
        collection.stats(function (err, stats) {
            console.log(stats.count + " documents");
        });
    });
})
