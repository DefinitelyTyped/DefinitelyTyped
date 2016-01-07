// Test file for db.js Definition file
/// <reference path="db.js.d.ts" />

/* Opening/creating a database and connection */

var server: DbJsServer;

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
}).then(function (s: DbJsServer) {
    server = s;
});

var peopleStore = server['people'];

/* Basic server operations */

var idb = server.getIndexedDB();
server.close();

/* General server/store methods */

// Adding items
server.add('people', {
    firstName: 'Aaron',
    lastName: 'Powell',
    answer: 42
}).then(function (item) { });

peopleStore.add({ 
    firstName: 'Aaron',
    lastName: 'Powell',
    answer: 42
}).then(function (item) { });

// Updating
server.update('people', {
    firstName: 'Aaron',
    lastName: 'Powell',
    answer: 42
}).then(function (item) { });

peopleStore.update({
    firstName: 'Aaron',
    lastName: 'Powell',
    answer: 42
}).then(function (item) { });

// Removing
server.remove('people', 1).then(function (key) { });
peopleStore.remove(1).then(function (key) { });

// Clearing
server.clear('people').then(function() { });
peopleStore.clear().then(function() { });

// Fetching

// Getting a single object by ID
server.get('people', 5).then(function (results) { });
peopleStore.get(5).then(function (results) { });

// Querying all objects
server.query('people')
    .all()
    .execute()
    .then(function (results) { });

peopleStore.query()
    .all()
    .execute()
    .then(function (results) { });

// Querying using indexes
server.query('people', 'specialProperty')
    .all()
    .execute()
    .then(function (results) { });
    
 peopleStore.query('specialProperty')
    .all()
    .execute()
    .then(function (results) { });

// Filter with property and value
server.query('people')
    .filter('firstName', 'Aaron')
    .execute()
    .then(function (results) { });

// Filter with function
server.query('people')
    .filter(function(person) { return person.group === 'hipster'; })
    .execute()
    .then(function (results) { });
    
peopleStore.query('people')
    .filter(function(person) { return person.group === 'hipster'; })
    .execute()
    .then(function (results) { });

// Querying with ranges
server.query('people', 'firstName')
    .only('Aaron')
    .then(function (results) { });

server.query('people', 'answer')
    .bound(30, 50)
    .then(function (results) { });
    
server.query('people', 'firstName')
    .range({ eq: 'Aaron' })
    .then(function (results) { });

server.query('people', 'answer')
    .range({ gte: 30, lte: 50 })
    .then(function (results) { });    

// Querying for distinct values
 server.query('people', 'firstName')
    .only('Aaron')
    .distinct()
    .execute()
    .then(function (data) { });
    
// Limiting cursor range
server.query('people', 'firstName')
    .all()
    .limit(1, 3)
    .execute()
    .then(function (data) { });

// Cursor direction (desc)
server.query('people')
    .all()
    .desc()
    .execute()
    .then(function (results) { });

// Keys
server.query('people', 'firstName')
    .only('Aaron')
    .keys()
    .execute()
    .then(function (results) { });

// Mapping
server.query('people', 'age')
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
server.query('people', 'firstName')
    .only('Aaron')
    .count()
    .execute()
    .then(function (results) { });

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
    .modify({ views: function(profile) { return profile.views + 1; } })
    .execute()
    .then(function () { });
        
/* Other server methods */

// Closing connection
server.close();

// Retrieving the indexedDB.open result object in use
var storeNames = server.getIndexedDB().objectStoreNames;

// Deleting a database
db.delete('dbName').then(function () { }, function (err: Error) { });