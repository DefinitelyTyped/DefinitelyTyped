
/// <reference path="../es6-promise/es6-promise.d.ts" />
/// <reference path="../node/node.d.ts" />

import MongoDB = require("mongodb");
import Promise = require('bluebird');

class MongoTester {
    private _dbURL: string;
    private _collectionName: string;
    private _dbHandle: MongoDB.Db;
    private _collectionHandle: MongoDB.Collection;

    constructor(dbURL: string, collectionName: string) {
        this._dbURL = dbURL;
        this._collectionName = collectionName;
    }

    public connect(): Promise<boolean> {
        return MongoDB.MongoClient.connect(this._dbURL).then((db: MongoDB.Db) => {
            this._dbHandle = db;
            this._collectionHandle = this._dbHandle.collection(this._collectionName);
            return Promise.resolve(true);
        });
    }

    public populate(): Promise<boolean> {
        let testDocs = [ {msg: "Hello"}, {msg: "World"} ];

        return this._collectionHandle.insertMany(testDocs).then(() => {
            return Promise.resolve(true);
        });
    }

    public count(): Promise<number> {
        return this._collectionHandle.count({});
    }

    public cleanUp(): Promise<boolean> {
        return this._dbHandle.dropDatabase().then(() => {
            return Promise.resolve(true);
        });
    }
}

let client = new MongoTester("mongodb://127.0.0.1:27017/test", "test_insert");
client.connect().then(() => {
    console.log("Connected...");
    return client.populate();
}).then(() => {
    console.log("Populated database...");
    return client.count();
}).then((tCount: number) => {
    console.log("Counted", tCount, "docs!!!11");
    return client.cleanUp();
}).then(() => {
    console.log("Finished & Cleaned!");
}).catch((error: Error) => {
    console.log(error);
});
