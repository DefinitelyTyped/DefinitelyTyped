///<reference path="mongodb.d.ts"/>

// Test source : https://github.com/mongodb/node-mongodb-native
import mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

async function main() {
    var db = await MongoClient.connect('mongodb://127.0.0.1:27017/test');
var collection = db.collection<any>('test_insert');
await collection.insert({ a: 2 });
var count = await collection.count();
console.log("count ${count}");
// Locate all the entries using find
var docsCursor = await collection.find();
var docs = await docsCursor.toArray();
console.dir(docs);
var stats = await collection.stats();
console.log(stats.count + " documents");
await db.close();
}

main();