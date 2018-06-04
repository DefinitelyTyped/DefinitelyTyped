/**
 * Created by Joe Vanderstelt 2017-02-22.
 */

import * as es6styleimport from 'nedb-logger';

import nedblogger = require('nedb-logger');

// Type 1: Persistent datastore with manual loading

import Datastore = require('nedb-logger');
const db = new Datastore({ filename: 'path/to/datafile' });

const doc: any = {
    hello: 'world',
    n: 5,
    today: new Date(),
    nedbIsAwesome: true,
    notthere: null,
    notToBeSaved: undefined,  // Will not be saved
    fruits: ['apple', 'orange', 'pear'],
    infos: { name: 'nedb' },
};

db.insert(doc, (err: Error, newDoc: any) => {   // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
});

db.insert([{ a: 5 }, { a: 42 }], (err: Error, newdocs: any[]) => {
    // Two documents were inserted in the database
    // newDocs is an array with these documents, augmented with their _id
});
