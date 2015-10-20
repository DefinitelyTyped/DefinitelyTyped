/// <reference path="pouch.d.ts" />
var db = new PouchDB('dbname', {adapter : 'websql'});
var db = new PouchDB('http://example.com/dbname', {
  ajax: {
    cache: false,
    timeout: 10000,
    headers: {
      'X-Some-Special-Header': 'foo'
    },
  },
  auth: {
    username: 'mysecretusername',
    password: 'mysecretpassword'
  }
});

db.destroy().then(function (response) {
  // success
}).catch(function (err) {
  console.log(err);
});

db.destroy(function (err, response) {
  if (err) {
    return console.log(err);
  } else {
    // success
  }
});

db.put({
  _id: 'mydoc',
  title: 'Heroes'
}).then(function (response) {
  // handle response
}).catch(function (err) {
  console.log(err);
});

db.get('mydoc').then(function(doc) {
  return db.put({
    _id: 'mydoc',
    title: "Let's Dance"
  });
}).then(function(response) {
  // handle response
}).catch(function (err) {
  console.log(err);
});

db.get('mydoc').then(function(doc) {
}).then(function(response) {
  // handle response
}).catch(function (err) {
  console.log(err);
});

db.post({
  title: 'Ziggy Stardust'
}).then(function (response) {
  // handle response
}).catch(function (err) {
  console.log(err);
});

db.get('mydoc').then(function (doc) {
  // handle doc
}).catch(function (err) {
  console.log(err);
});

db.get('mydoc').then(function(doc) {
}).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.get('mydoc').then(function(doc) {
}).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.get('mydoc').then(function(doc) {
}).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.bulkDocs([
  {title : 'Lisa Says', _id: 'doc1'},
  {title : 'Space Oddity', _id: 'doc2'}
]).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.bulkDocs([
  {title : 'Lisa Says'},
  {title : 'Space Oddity'}
]).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.bulkDocs([
  {
    title  : 'Lisa Says',
    artist : 'Velvet Underground',
    _id    : "doc1",
    _rev   : "1-84abc2a942007bee7cf55007cba56198"
  },
  {
    title  : 'Space Oddity',
    artist : 'David Bowie',
    _id    : "doc2",
    _rev   : "1-7b80fc50b6af7a905f368670429a757e"
  }
]).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.bulkDocs([
  {
    title    : 'Lisa Says',
    _deleted : true,
    _id      : "doc1",
    _rev     : "1-84abc2a942007bee7cf55007cba56198"
  },
  {
    title    : 'Space Oddity',
    _deleted : true,
    _id      : "doc2",
    _rev     : "1-7b80fc50b6af7a905f368670429a757e"
  }
]).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.allDocs({
  include_docs: true,
  attachments: true
}).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.allDocs({
  include_docs: true,
  attachments: true,
  startkey: 'bar',
  endkey: 'quux'
}).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.allDocs({
  include_docs: true,
  attachments: true,
  startkey: 'foo',
  endkey: 'foo\uffff'
}).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

var changes = db.changes({
  since: 'now',
  live: true,
  include_docs: true
}).on('change', function(change) {
  // handle change
}).on('complete', function(info) {
  // changes() was canceled
}).on('error', function (err) {
  console.log(err);
});

changes.cancel(); // whenever you want to cancel

db.changes({
  limit: 10,
  since: 0
}).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.changes({
  filter: function (doc) {
    return doc === 'marsupial';
  }
});

db.changes({
  doc_ids: ['a', 'c']
});

db.changes({
  filter: 'mydesign/myfilter'
});

db.changes({
  filter: 'myfilter',
  query_params: {type: 'marsupial'}
});

db.changes({
  filter: '_view',
  view: 'mydesign/myview'
});

var rep = PouchDB.replicate('mydb', 'http://localhost:5984/mydb', {
  live: true,
  retry: true
}).on('change', function (info) {
  // handle change
}).on('paused', function () {
  // replication paused (e.g. user went offline)
}).on('active', function () {
  // replicate resumed (e.g. user went back online)
}).on('denied', function (info) {
  // a document failed to replicate, e.g. due to permissions
}).on('complete', function (info) {
  // handle complete
}).on('error', function (err) {
  // handle error
});

rep.cancel(); // whenever you want to cancel

db.replicate.to('http://localhost:5984/mydb').then(function (result) {
  // handle 'completed' result
}).catch(function (err) {
  console.log(err);
});

db.replicate.to('http://localhost:5984/mydb', {
  filter: function (doc) {
    return doc === 'marsupial';
  }
});

db.replicate.to('http://localhost:5984/mydb', {
  doc_ids: ['a', 'c']
});

db.replicate.to('http://localhost:5984/mydb', {
  filter: 'mydesign/myfilter'
});

db.replicate.to('http://localhost:5984/mydb', {
  filter: 'mydesign/myfilter',
  query_params: {type: 'marsupial'}
});

db.replicate.to('http://localhost:5984/mydb', {
  filter: '_view',
  view: 'mydesign/myview'
});

db.replicate.to('http://localhost:5984/mydb', {
  live: true,
  retry: true,
  back_off_function: function (delay) {
    if (delay === 0) {
      return 1000;
    }
    return delay * 3;
  }
});

var sync = PouchDB.sync('mydb', 'http://localhost:5984/mydb', {
  live: true,
  retry: true
}).on('change', function (info) {
  // handle change
}).on('paused', function () {
  // replication paused (e.g. user went offline)
}).on('active', function () {
  // replicate resumed (e.g. user went back online)
}).on('denied', function (info) {
  // a document failed to replicate, e.g. due to permissions
}).on('complete', function (info) {
  // handle complete
}).on('error', function (err) {
  // handle error
});

sync.cancel(); // whenever you want to cancel

PouchDB.replicate('mydb', 'http://localhost:5984/mydb');
PouchDB.replicate('http://localhost:5984/mydb', 'mydb');

PouchDB.sync('mydb', 'http://localhost:5984/mydb');

var attachment = new Blob(['Is there life on Mars?'], {type: 'text/plain'});
db.putAttachment('doc', 'att.txt', attachment, 'text/plain').then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.getAttachment('doc', 'att.txt').then(function (blobOrBuffer) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

var rev = '1-068E73F5B44FEC987B51354DFC772891';
db.removeAttachment('doc', 'att.txt', rev).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

// create a design doc
var ddoc = {
  _id: '_design/index',
  views: {
    index: {
      map: function mapFun(doc) {
        if (doc.title) {
        }
      }.toString()
    }
  }
}

// save the design doc
db.put(ddoc).catch(function (err) {
  // ignore if doc already exists
}).then(function () {
  // find docs where title === 'Lisa Says'
  return db.query('index', {
    key: 'Lisa Says',
    include_docs: true
  });
}).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});
var map;
db.query(map).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.query(map, {include_docs : true}).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

var myId = 'foo';
db.query(function(doc, emit) {
  if (doc._id === myId) {
    emit(doc);
  }
}).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.viewCleanup().then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.viewCleanup(function (err, result) {
  if (err) { return console.log(err); }
  // handle result
});

db.info().then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.compact().then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

db.revsDiff({
  myDoc1: [
    "1-b2e54331db828310f3c772d6e042ac9c",
    "2-3a24009a9525bde9e4bfa8a99046b00d"
  ]
}).then(function (result) {
  // handle result
}).catch(function (err) {
  console.log(err);
});

PouchDB.on('created', function (dbName) {
  // called whenver a db is created.
});
PouchDB.on('destroyed', function (dbName) {
  // called whenver a db is destroyed.
});

PouchDB.defaults({
  option1: 'foo',
  option2: 'value'
});

var MyMemPouch = PouchDB.defaults({
});

var MyPrefixedPouch = PouchDB.defaults({
  prefix: '/path/to/my/db/'
});

PouchDB.plugin({
  methodName: 'myFunction'
});

PouchDB.plugin({
  sayHello : function () {
    console.log("Hello!");
  }
});

PouchDB.debug.enable('*');
PouchDB.debug.disable();

//Version 5.0.0
new PouchDB('mydb').destroy();
db.changes({live: true})
  .on('change', function (change) {
  });