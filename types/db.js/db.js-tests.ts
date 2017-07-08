import db = require("db.js");

/* Type for use in tests */

interface Person {
    firstName: string;
    lastName: string;
    answer: number;
    group?: string;
}

/* Opening/creating a database and connection */

var server: DbJs.Server;

db.open({
    server: 'my-app',
    version: 1,
    schema: {
        people: {
            key: { keyPath: 'id', autoIncrement: true },
                indexes: {
                firstName: {},
                answer: { unique: true }
            }
        }
    }
}).then(function (s: DbJs.Server) {
    server = s;
});

var typedStore: DbJs.TypedObjectStoreServer<Person> = server['people'];

/* Basic server operations */

var idb = server.getIndexedDB();
server.close();

/* General server/store methods */

// Adding items
server.add<Person>('people', {
    firstName: 'Aaron',
    lastName: 'Powell',
    answer: 42
}).then(function (item) { });

typedStore.add({
    firstName: 'Aaron',
    lastName: 'Powell',
    answer: 42
}).then(function (item) { });

// Updating
server.update<Person>('people', {
    firstName: 'Aaron',
    lastName: 'Powell',
    answer: 42
}).then(function (item) { });

typedStore.update({
    firstName: 'Aaron',
    lastName: 'Powell',
    answer: 42
}).then(function (item) { });

// Removing
server.remove('people', 1).then(function (key) { });
typedStore.remove(1).then(function (key) { });

// Clearing
server.clear('people').then(function() { });
typedStore.clear().then(function() { });

// Fetching

// Getting a single object by key
server.get<Person>('people', 5).then(function (results) { });
typedStore.get(5).then(function (results) { });

// Getting a single object by key range

// With a MongoDB-style range:

server.get<Person>('people', {gte: 1, lt: 3})
    .then(function (results) { });
typedStore.get({gte: 1, lt: 3})
    .then(function (results) { });

// With an IDBKeyRange :

server.get<Person>('people', IDBKeyRange.bound(1, 3, false, true))
    .then(function (results) { });
typedStore.get(IDBKeyRange.bound(1, 3, false, true))
    .then(function (results) { });

// Querying

// Querying all objects
server.query<Person>('people')
    .all()
    .execute()
    .then(function (results) { });

typedStore.query()
    .all()
    .execute()
    .then(function (results) { });

// Querying using indexes
server.query<Person>('people', 'specialProperty')
    .all()
    .execute()
    .then(function (results) { });

 typedStore.query('specialProperty')
    .all()
    .execute()
    .then(function (results) { });

// Filter with property and value
server.query<Person>('people')
    .filter('firstName', 'Aaron')
    .execute()
    .then(function (results) { });

// Filter with function
server.query<Person>('people')
    .filter(function(person: any) { return person.group === 'hipster'; })
    .execute()
    .then(function (results) { });

typedStore.query('people')
    .filter(function(person) { return person.group === 'hipster'; })
    .execute()
    .then(function (results) { });

// Querying with ranges
server.query<Person>('people', 'firstName')
    .only('Aaron')
    .then(function (results) { });

server.query<Person>('people', 'answer')
    .bound(30, 50)
    .then(function (results) { });

server.query<Person>('people', 'firstName')
    .range({ eq: 'Aaron' })
    .then(function (results) { });

server.query<Person>('people', 'answer')
    .range({ gte: 30, lte: 50 })
    .then(function (results) { });

// Querying for distinct values
 server.query<Person>('people', 'firstName')
    .only('Aaron')
    .distinct()
    .execute()
    .then(function (data) { });

// Limiting cursor range
server.query<Person>('people', 'firstName')
    .all()
    .limit(1, 3)
    .execute()
    .then(function (data) { });

// Cursor direction (desc)
server.query<Person>('people')
    .all()
    .desc()
    .execute()
    .then(function (results) { });

// Keys
server.query<Person>('people', 'firstName')
    .only('Aaron')
    .keys()
    .execute()
    .then(function (results) { });

// Mapping
server.query<Person>('people', 'age')
    .lowerBound(30)
    .map(function (value) {
        return {
            fullName: value.firstName + ' ' + value.lastName,
            raw: value
        };
    })
    .execute()
    .then(function (data) { });

// Counting
server.query<Person>('people', 'firstName')
    .only('Aaron')
    .count()
    .execute()
    .then(function (results) { });

// With no arguments (count all items)
server.count().then(function (ct) { });

// With a key
server.count('myKey').then(function (ct) { });

// With a MongoDB-style range
server.count({gte: 1, lt: 3}).then(function (ct) { });

// With an IDBKeyRange range
server.count(IDBKeyRange.bound(1, 3, false, true)).then(function (ct) { });

// Atomic updates
server.query('users', 'last_mod')
    .lowerBound(new Date().getTime() - 10000)
    .modify({ last_mod: new Date().getTime() })
    .execute()
    .then(function(results) { });

server.query('users', 'changed')
    .only(true)
    .modify({ changed: false })
    .execute()
    .then(function () { });

server.query('users', 'name')
    .lowerBound('marcy')
    .modify({ views: function(profile: any) { return profile.views + 1; } })
    .execute()
    .then(function () { });

/* Other server methods */

// Closing connection
server.close();

// Retrieving the indexedDB.open result object in use
var storeNames = server.getIndexedDB().objectStoreNames;

// Server event handlers

server.addEventListener('abort', function (e: Event) { });
server.addEventListener('error', function (err: Event) { });
server.addEventListener('versionchange', function (e: Event) { });

server
    .abort(function (e) { })
    .error(function (err) { })
    .versionchange(function (e) { });

// Deleting a database
db.delete('dbName').then(function () { }, function (err: Error) { });
db.delete('dbName').catch(function (err) { }).then(function (ev) { });

// Comparing two keys

db.cmp('key1', 'key2');
