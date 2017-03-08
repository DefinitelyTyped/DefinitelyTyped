
import cradle = require("cradle");

cradle.setup({
    host: 'living-room.couch',
    cache: true,
    raw: false,
    forceSave: true
});

const connection = new cradle.Connection();
const connection2 = new(cradle.Connection);
const connection3 = new(cradle.Connection)('173.45.66.92');

connection.databases(function(error, response) {});
connection.config(function(error, response) {});
connection.databases(function(error, response) {});
connection.info(function(error, response) {});
connection.stats(function(error, response) {});
connection.activeTasks(function(error, response) {});
connection.uuids(function(error, response) {});
connection.uuids(10, function(error, response) {});
connection.replicate({
    source: "database",
    target: "targetDatabase"
}, function(error, response) {});

const db = connection.database('starwars');

db.exists(function (error, exists) {
    if (error) {
        console.log('error', error);
    } else if (exists) {
        console.log('the force is with you.');
    } else {
        console.log('database does not exists.');
        db.create(function(error){
           /* do something if there's an erroror */
           /* populate design documents */
        });
    }
});

db.get<{
    name: string;
}>('vader', function (error, doc) {
    doc.name; // 'Darth Vader'
});

db.get('luke', function (error, doc) {
    doc.prop;
});

 db.get(['luke', 'vader'], function (error, doc) {
     //
 });

db.save('skywalker', {
    force: 'light',
    name: 'Luke Skywalker'
}, function (error, res) {
    if (error) {
        // Handle erroror
    } else {
        // Handle success
    }
});

db.save({
    force: 'dark', name: 'Darth'
 }, function (err, res) {
    // Handle response
 });

db.save('luke', '1-94B6F82', {
    force: 'dark', name: 'Luke'
}, function (err, res) {
    // Handle response
});

db.save([
    { name: 'Yoda' },
    { name: 'Han Solo' },
    { name: 'Leia' }
], function (err, res) {
    // Handle response
});

db.merge('luke', {jedi: true}, function (err, res) {
    // Luke is now a jedi,
    // but remains on the dark side of the force.
});

db.view('characters/all', function (err, res) {
    res.forEach(function (row: any) {
        console.log("%s is on the %s side of the force.", row.name, row.force);
    });
});

db.view('characters/all', {group: true, reduce: true} , function (err, res) {
    res.forEach(function (row: any) {
        console.log("%s is on the %s side of the force.", row.name, row.force);
    });
 });

 db.temporaryView({
    map: function (doc: any) {
        //
    }
 }, function (err, res) {
    if (err) console.log(err);
    console.log(res);
 });

db.remove('luke', '1-94B6F82', function (err, res) {
    // Handle response
});

db.update('my_designdoc/update_handler_name', 'luke', undefined, { my_param: false }, function (err, res) {
    // Handle the response, specified by the update handler
});

db.changes(function (err, list) {
    list.forEach(function (change) { console.log(change) });
});

db.changes({ since: 42 }, function (err, list) {
    //
});

const feed = db.changes({ since: 42 });

feed.on('change', function (change: any) {
    console.log(change);
});

const idAndRevData = {
  id: 'luke',
  rev: 'my-rev'
};

const attachmentData = {
  name: 'fooAttachment.txt',
  'Content-Type': 'text/plain',
  body: 'Foo document text'
};

db.saveAttachment(idAndRevData, attachmentData, function (err, reply) {
  if (err) {
    console.dir(err)
    return
  }
  console.dir(reply)
});


db.getAttachment('luke', 'foo.txt', function (err, reply) {
    if (err) {
        console.dir(err);
        return;
    }
    console.dir(reply);
});

db.removeAttachment('luke', 'foo.txt', function (err, reply) {
    if (err) {
        console.dir(err);
        return;
    }
    console.dir(reply);
});

db.info(function(error, response) {});
db.all(function(error, response) {});
db.all({
    body: {
        keys: ['key1', 'key2']
    }
}, function(error, response) {});
db.compact(function(error, response) {});
db.compact('design', function(error, response) {});
db.viewCleanup(function(error, response) {});
db.replicate('database', function(error, response) {});
db.replicate('database', {}, function(error, response) {});
