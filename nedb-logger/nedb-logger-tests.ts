/**
 * Created by Joe Vanderstelt 2017-02-22.
 */

/// <reference types="node" />


import * as es6styleimport from 'nedb-logger';

import Q = require('q');
import nedblogger = require('nedb-logger');

class BaseCollection<T> {

    private dataStore: nedblogger;

    constructor(dataStore: nedblogger) {

        this.dataStore = dataStore;
    }

    insert(document: T): Q.Promise<T> {

        var deferred = Q.defer<T>();

        this.dataStore.insert<T>(document, function(err: Error, newDoc: T) {   // Callback is optional
            // newDoc is the newly inserted document, including its _id
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(newDoc);
            }
        });

        return deferred.promise;
    }

}

// Type 1: Persistent datastore with manual loading

import Datastore = require('nedb-logger');
var db = new Datastore({filename: 'path/to/datafile'});

var doc: any = {
    hello: 'world'
    , n: 5
    , today: new Date()
    , nedbIsAwesome: true
    , notthere: null
    , notToBeSaved: undefined  // Will not be saved
    , fruits: ['apple', 'orange', 'pear']
    , infos: {name: 'nedb'}
};

db.insert(doc, function(err: Error, newDoc: any) {   // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
});

db.insert([{a: 5}, {a: 42}], function(err: Error, newdocs: any[]) {
    // Two documents were inserted in the database
    // newDocs is an array with these documents, augmented with their _id
});
