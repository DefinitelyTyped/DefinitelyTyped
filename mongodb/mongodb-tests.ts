///<reference path="mongodb.d.ts"/>

// Test source : https://github.com/mongodb/node-mongodb-native
import mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var format = require('util').format;
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
    });
})