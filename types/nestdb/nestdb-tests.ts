/**
 * Created by alexanderson1993 on 16.10.19.
 */

import * as es6styleimport from 'nestdb';

import nestdb = require('nestdb');

class BaseCollection<T> {
    private readonly dataStore: nestdb;

    constructor(dataStore: nestdb) {
        this.dataStore = dataStore;
    }

    insert(document: T): Promise<T> {
        return new Promise((resolve, reject) => {
            this.dataStore.insert<T>(document, (err: Error, newDoc: T) => {   // Callback is optional
                // newDoc is the newly inserted document, including its _id
                if (err) {
                    reject(err);
                } else {
                    resolve(newDoc);
                }
            });
        });
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.dataStore.count({}, (err: Error, count: number) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(count);
                }
            });
        });
    }

    countBy(criteria: any): Promise<number> {
        return new Promise((resolve, reject) => {
            this.dataStore.count(criteria, (err: Error, count: number) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(count);
                }
            });
        });
    }

    findByID(id: string): Promise<T> {
        return new Promise((resolve, reject) => {
            this.dataStore.findOne<T>({ _id: id }, (err: Error, doc: T) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    }

    findOne(criteria: any): Promise<T> {
        return new Promise((resolve, reject) => {
            this.dataStore.findOne<T>(criteria, (err: Error, doc: T) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    }

    find(criteria: any): Promise<T[]> {
        return new Promise((resolve, reject) => {
            this.dataStore.find(criteria, (err: Error, docs: T[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(docs);
                }
            });
        });
    }

    all(): Promise<T[]> {
        return new Promise((resolve, reject) => {
            this.dataStore.find({}, (err: Error, docs: T[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(docs);
                }
            });
        });
    }

    upsert(query: any, updateQuery: any): Promise<T[]> {
        const a: Promise<T[]> = new Promise((resolve, reject) => {
            this.dataStore.update(query, updateQuery, { upsert: true }, (err: Error, numberOfUpdated: number, upsert: boolean) => {
                if (err) {
                    reject(err);
                } else {
                    // resolve(newDoc);
                }
            });
        });

        const b: Promise<T[]> = new Promise((resolve, reject) => {
            this.dataStore.update(query, updateQuery, { upsert: true }, (err: Error, numberOfUpdated: number, affectedDocs: any, upsert: boolean) => {
                if (err) {
                    reject(err);
                } else {
                    // resolve(newDoc);
                }
            });
        });

        return a || b;
    }

    update(query: {}, updateQuery: {}, options?: any): Promise<number> {
        return new Promise((resolve, reject) => {
            this.dataStore.update(query, updateQuery, options, (err: Error, numberOfUpdated: number) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(numberOfUpdated);
                }
            });
        });
    }

    remove(criteria: any): Promise<number> {
        return new Promise((resolve, reject) => {
            this.dataStore.remove(criteria, (err: Error, numberOfDeletedEntrys: number) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(numberOfDeletedEntrys);
                }
            });
        });
    }
}

// Type 1: In-memory only datastore (no need to load the database)
import Datastore = require('nestdb');
let db = new Datastore();

// Type 2: Persistent datastore with manual loading
db = new Datastore({ filename: 'path/to/datafile' });
db.load((err) => {    // Callback is optional
    // Now commands will be executed
});

// Type 3: Persistent datastore with automatic loading
db = new Datastore({ filename: 'path/to/datafile', autoload: true });
// You can issue commands right away

// Type 4: Persistent datastore for a Node Webkit app called 'nwtest'
// For example on Linux, the datafile will be ~/.config/nwtest/nestdb-data/something.db
db = new Datastore({ filename: 'something.db' });

// Of course you can create multiple datastores if you need several
// collections. In this case it's usually a good idea to use autoload for all collections.
const dbContainer: any = {};
dbContainer.users = new Datastore('path/to/users.db');
dbContainer.robots = new Datastore('path/to/robots.db');

// You need to load each database (here we do it asynchronously)
dbContainer.users.load();
dbContainer.robots.load();

const doc: any = {
    hello: 'world',
    n: 5,
    today: new Date(),
    nestdbIsAwesome: true,
    notthere: null,
    notToBeSaved: undefined,  // Will not be saved
    fruits: ['apple', 'orange', 'pear'],
    infos: { name: 'nestdb' }
};

db.insert(doc, (err: Error, newDoc: any) => {   // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
});

db.insert([{ a: 5 }, { a: 42 }], (err: Error, newdocs: any[]) => {
    // Two documents were inserted in the database
    // newDocs is an array with these documents, augmented with their _id
});

// If there is a unique constraint on field 'a', this will fail
db.insert([{ a: 5 }, { a: 42 }, { a: 5 }], (err: Error) => {
    // err is a 'uniqueViolated' error
    // The database was not modified
});

// Finding all planets in the solar system
db.find({ system: 'solar' }, (err: Error, docs: any[]) => {
    // docs is an array containing documents Mars, Earth, Jupiter
    // If no document is found, docs is equal to []
});

// Finding all planets whose name contain the substring 'ar' using a regular expression
db.find({ planet: /ar/ }, (err: Error, docs: any[]) => {
    // docs contains Mars and Earth
});

// Finding all inhabited planets in the solar system
db.find({ system: 'solar', inhabited: true }, (err: Error, docs: any[]) => {
    // docs is an array containing document Earth only
});

// Use the dot-notation to match fields in subdocuments
db.find({ "humans.genders": 2 }, (err: Error, docs: any[]) => {
    // docs contains Earth
});

// Use the dot-notation to navigate arrays of subdocuments
db.find({ "completeData.planets.name": "Mars" }, (err: Error, docs: any[]) => {
    // docs contains document 5
});

db.find({ "completeData.planets.name": "Jupiter" }, (err: Error, docs: any[]) => {
    // docs is empty
});

db.find({ "completeData.planets.0.name": "Earth" }, (err: Error, docs: any[]) => {
    // docs contains document 5
    // If we had tested against "Mars" docs would be empty because we are matching against a specific array element
});

// You can also deep-compare objects. Don't confuse this with dot-notation!
db.find({ humans: { genders: 2 } }, (err: Error, docs: any[]) => {
    // docs is empty, because { genders: 2 } is not equal to { genders: 2, eyes: true }
});

// Find all documents in the collection
db.find({}, (err: Error, docs: any[]) => {
});

// The same rules apply when you want to only find one document
db.findOne({ _id: 'id1' }, (err: Error, doc: any) => {
    // doc is the document Mars
    // If no document is found, doc is null
});

// $lt, $lte, $gt and $gte work on numbers and strings
db.find({ "humans.genders": { $gt: 5 } }, (err: Error, docs: any[]) => {
    // docs contains Omicron Persei 8, whose humans have more than 5 genders (7).
});

// When used with strings, lexicographical order is used
db.find({ planet: { $gt: 'Mercury' } }, (err: Error, docs: any[]) => {
    // docs contains Omicron Persei 8
});

// Using $in. $nin is used in the same way
db.find({ planet: { $in: ['Earth', 'Jupiter'] } }, (err: Error, docs: any[]) => {
    // docs contains Earth and Jupiter
});

// Using $exists
db.find({ satellites: { $exists: true } }, (err: Error, docs: any[]) => {
    // docs contains only Mars
});

// Using $regex with another operator
db.find({ planet: { $regex: /ar/, $nin: ['Jupiter', 'Earth'] } }, (err: Error, docs: any[]) => {
    // docs only contains Mars because Earth was excluded from the match by $nin
});

// Using an array-specific comparison function
// Note: you can't use nested comparison functions, e.g. { $size: { $lt: 5 } } will throw an error
db.find({ satellites: { $size: 2 } }, (err: Error, docs: any[]) => {
    // docs contains Mars
});

db.find({ satellites: { $size: 1 } }, (err: Error, docs: any[]) => {
    // docs is empty
});

// If a document's field is an array, matching it means matching any element of the array
db.find({ satellites: 'Phobos' }, (err: Error, docs: any[]) => {
    // docs contains Mars. Result would have been the same if query had been { satellites: 'Deimos' }
});

// This also works for queries that use comparison operators
db.find({ satellites: { $lt: 'Amos' } }, (err: Error, docs: any[]) => {
    // docs is empty since Phobos and Deimos are after Amos in lexicographical order
});

// This also works with the $in and $nin operator
db.find({ satellites: { $in: ['Moon', 'Deimos'] } }, (err: Error, docs: any[]) => {
    // docs contains Mars (the Earth document is not complete!)
});

db.find({ $or: [{ planet: 'Earth' }, { planet: 'Mars' }] }, (err: Error, docs: any[]) => {
    // docs contains Earth and Mars
});

db.find({ $not: { planet: 'Earth' } }, (err: Error, docs: any[]) => {
    // docs contains Mars, Jupiter, Omicron Persei 8
});

db.find({
    $where() {
        return parseInt(Object.keys(this)[0], 10) > 6;
    }
}, (err: Error, docs: any[]) => {
    // docs with more than 6 properties
});

// You can mix normal queries, comparison queries and logical operators
db.find({ $or: [{ planet: 'Earth' }, { planet: 'Mars' }], inhabited: true }, (err: Error, docs: any[]) => {
    // docs contains Earth
});

// No query used means all results are returned (before the Cursor modifiers)
db.find({}).sort({ planet: 1 }).skip(1).limit(2).exec((err: Error, docs: any[]) => {
    // docs is [doc3, doc1]
});

// You can sort in reverse order like this
db.find({ system: 'solar' }).sort({ planet: -1 }).exec((err: Error, docs: any[]) => {
    // docs is [doc1, doc3, doc2]
});

// You can sort on one field, then another, and so on like this:
db.find({}).sort({ firstField: 1, secondField: -1 });

// Same database as above

// Keeping only the given fields
db.find({ planet: 'Mars' }, { planet: 1, system: 1 }, (err: Error, docs: any[]) => {
    // docs is [{ planet: 'Mars', system: 'solar', _id: 'id1' }]
});

// Keeping only the given fields but removing _id
db.find({ planet: 'Mars' }, { planet: 1, system: 1, _id: 0 }, (err: Error, docs: any[]) => {
    // docs is [{ planet: 'Mars', system: 'solar' }]
});

// Omitting only the given fields and removing _id
db.find({ planet: 'Mars' }, { planet: 0, system: 0, _id: 0 }, (err: Error, docs: any[]) => {
    // docs is [{ inhabited: false, satellites: ['Phobos', 'Deimos'] }]
});

// Failure: using both modes at the same time
db.find({ planet: 'Mars' }, { planet: 0, system: 1 }, (err: Error, docs: any[]) => {
    // err is the error message, docs is undefined
});

// You can also use it in a Cursor way but this syntax is not compatible with MongoDB
// If upstream compatibility is important don't use this method
db.find({ planet: 'Mars' }).projection({ planet: 1, system: 1 }).exec((err: Error, docs: any[]) => {
    // docs is [{ planet: 'Mars', system: 'solar', _id: 'id1' }]
});

// Count all planets in the solar system
db.count({ system: 'solar' }, (err: Error, count: number) => {
    // count equals to 3
});

// Count all documents in the datastore
db.count({}, (err: Error, count: number) => {
    // count equals to 4
});

// Let's use the same example collection as in the "finding document" part
// { _id: 'id1', planet: 'Mars', system: 'solar', inhabited: false }
// { _id: 'id2', planet: 'Earth', system: 'solar', inhabited: true }
// { _id: 'id3', planet: 'Jupiter', system: 'solar', inhabited: false }
// { _id: 'id4', planet: 'Omicron Persia 8', system: 'futurama', inhabited: true }

// Replace a document by another
db.update({ planet: 'Jupiter' }, { planet: 'Pluton' }, {}, (err: Error, numReplaced: number) => {
    // numReplaced = 1
    // The doc #3 has been replaced by { _id: 'id3', planet: 'Pluton' }
    // Note that the _id is kept unchanged, and the document has been replaced
    // (the 'system' and inhabited fields are not here anymore)
});

// Set an existing field's value
db.update({ system: 'solar' }, { $set: { system: 'solar system' } }, { multi: true }, (err: Error, numReplaced: number) => {
    // numReplaced = 3
    // Field 'system' on Mars, Earth, Jupiter now has value 'solar system'
});

// Setting the value of a non-existing field in a subdocument by using the dot-notation
db.update({ planet: 'Mars' }, { $set: { "data.satellites": 2, "data.red": true } }, {}, () => {
    // Mars document now is { _id: 'id1', system: 'solar', inhabited: false
    //                      , data: { satellites: 2, red: true }
    //                      }
    // Not that to set fields in subdocuments, you HAVE to use dot-notation
    // Using object-notation will just replace the top-level field
    db.update({ planet: 'Mars' }, { $set: { data: { satellites: 3 } } }, {}, () => {
        // Mars document now is { _id: 'id1', system: 'solar', inhabited: false
        //                      , data: { satellites: 3 }
        //                      }
        // You lost the "data.red" field which is probably not the intended behavior
    });
});

// Deleting a field
db.update({ planet: 'Mars' }, { $unset: { planet: true } }, {}, () => {
    // Now the document for Mars doesn't contain the planet field
    // You can unset nested fields with the dot notation of course
});

// Upserting a document
db.update({ planet: 'Pluton' }, {
    planet: 'Pluton',
    inhabited: false
}, { upsert: true }, (err: Error, numReplaced: number, upsert: boolean) => {
    // numReplaced = 1, upsert = { _id: 'id5', planet: 'Pluton', inhabited: false }
    // A new document { _id: 'id5', planet: 'Pluton', inhabited: false } has been added to the collection
});

// If you upsert with a modifier, the upserted doc is the query modified by the modifier
// This is simpler than it sounds :)
db.update({ planet: 'Pluton' }, { $inc: { distance: 38 } }, { upsert: true }, () => {
    // A new document { _id: 'id5', planet: 'Pluton', distance: 38 } has been added to the collection
});

// If we insert a new document { _id: 'id6', fruits: ['apple', 'orange', 'pear'] } in the collection,
// let's see how we can modify the array field atomically

// $push inserts new elements at the end of the array
db.update({ _id: 'id6' }, { $push: { fruits: 'banana' } }, {}, () => {
    // Now the fruits array is ['apple', 'orange', 'pear', 'banana']
});

// $pop removes an element from the end (if used with 1) or the front (if used with -1) of the array
db.update({ _id: 'id6' }, { $pop: { fruits: 1 } }, {}, () => {
    // Now the fruits array is ['apple', 'orange']
    // With { $pop: { fruits: -1 } }, it would have been ['orange', 'pear']
});

// $addToSet adds an element to an array only if it isn't already in it
// Equality is deep-checked (i.e. $addToSet will not insert an object in an array already containing the same object)
// Note that it doesn't check whether the array contained duplicates before or not
db.update({ _id: 'id6' }, { $addToSet: { fruits: 'apple' } }, {}, () => {
    // The fruits array didn't change
    // If we had used a fruit not in the array, e.g. 'banana', it would have been added to the array
});

// $pull removes all values matching a value or even any nestdb query from the array
db.update({ _id: 'id6' }, { $pull: { fruits: 'apple' } }, {}, () => {
    // Now the fruits array is ['orange', 'pear']
});
db.update({ _id: 'id6' }, { $pull: { fruits: { $in: ['apple', 'pear'] } } }, {}, () => {
    // Now the fruits array is ['orange']
});

// $each can be used to $push or $addToSet multiple values at once
// This example works the same way with $addToSet
db.update({ _id: 'id6' }, { $push: { fruits: { $each: ['banana', 'orange'] } } }, {}, () => {
    // Now the fruits array is ['apple', 'orange', 'pear', 'banana', 'orange']
});

// Let's use the same example collection as in the "finding document" part
// { _id: 'id1', planet: 'Mars', system: 'solar', inhabited: false }
// { _id: 'id2', planet: 'Earth', system: 'solar', inhabited: true }
// { _id: 'id3', planet: 'Jupiter', system: 'solar', inhabited: false }
// { _id: 'id4', planet: 'Omicron Persia 8', system: 'futurama', inhabited: true }

// Remove one document from the collection
// options set to {} since the default for multi is false
db.remove({ _id: 'id2' }, {}, (err: Error, numRemoved: number) => {
    // numRemoved = 1
});

// Remove multiple documents
db.remove({ system: 'solar' }, { multi: true }, (err: Error, numRemoved: number) => {
    // numRemoved = 3
    // All planets from the solar system were removed
});

db.ensureIndex({ fieldName: 'somefield' }, (err: Error) => {
    // If there was an error, err is not null
});

// Using a unique constraint with the index
db.ensureIndex({ fieldName: 'somefield', unique: true }, (err: Error) => {
});

// Using a sparse unique index
db.ensureIndex({ fieldName: 'somefield', unique: true, sparse: true }, (err: Error) => {
});

// Example of using expireAfterSeconds to remove documents 1 hour
// after their creation (db's timestampData option is true here)
db.ensureIndex({ fieldName: 'somefield', expireAfterSeconds: 3600 }, (err: Error) => {
});

// Format of the error message when the unique constraint is not met
db.insert({ somefield: 'nestdb' }, (err: Error) => {
    // err is null
    db.insert({ somefield: 'nestdb' }, (err: Error) => {
        // err is { errorType: 'uniqueViolated'
        //        , key: 'name'
        //        , message: 'Unique constraint violated for key name' }
    });
});

// Remove index on field somefield
db.removeIndex('somefield', (err: Error) => {
});

db.addListener("compaction.done", () => { });
db.on("compaction.done", () => { });
db.once("compaction.done", () => { });
db.prependListener("compaction.done", () => { });
db.prependOnceListener("compaction.done", () => { });
db.removeListener("compaction.done", () => { });
db.off("compaction.done", () => { });
db.listeners("compaction.done"); // $ExpectType (() => void)[]
db.rawListeners("compaction.done"); // $ExpectType (() => void)[]
db.listenerCount("compaction.done"); // $ExpectType number
