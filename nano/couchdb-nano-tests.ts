import * as nano from "nano";
import * as fs from 'fs';
import * as path from 'path';

/*
 * Instantiate with configuration object
 */
const config: nano.Configuration = {
    url: "http://localhost:5984/foo",
    requestDefaults: { "proxy": "http://someproxy" }
};

const cfgInstance = nano(config);

/*
 * Server Scope
 */
const instance: nano.ServerScope = <nano.ServerScope>nano('http://localhost:5984/emails');

instance.dinosaur('', function (err, response) { });
const url = instance.config.url;

instance.relax({
    method: 'POST',
    path: '_users',
    body: {
        _id: 'org.couchdb.user:',
        type: 'user',
        name: 'ss',
        roles: ['admin'],
        password: 'rf'
    }
}, function (err: any) { });

instance.session(function (error, session) { });

instance.request({
      db: 'shared_headers',
      doc: 'new',
      headers: {'If-None-Match': JSON.stringify({})}
    }, function(error, helloWorld, rh) {});

instance.relax({
    db: 'document_list',
    doc: '_all_docs',
    method: 'GET',
    qs: {limit: 1}
  }, function(error, docs) {});

instance.auth("", "", function(err: any, _: any, headers: any) {});

instance.uuids(3, function (error, data) { });

/*
 * Database Scope
 */
const db: nano.DatabaseScope = instance.db;

db.create('az09_$()+-/', function (err) { });
db.get('database_get', function(error, response) {});
db.destroy('_users', function() {});
db.list(function(error, list) {});
db.replicate(instance.use("a"), instance.use("b"), function(error: any) {});
db.replicate("a", "b", function(error: any) {});


/*
 * Document Scope
 */
const mydb: nano.DocumentScope = instance.use("mydb");

mydb.insert({ 'foo': 'baz' }, null, function (error, response) { });
mydb.insert({ 'foo': 'baz' }, 'foobar', function (error, foo) { });
mydb.get('foobaz', { 'revs_info': true }, function (error, foobaz) { });
mydb.head('foobaz', function (error, body, headers) { });
mydb.copy('foo_src', 'foo_dest', { overwrite: true }, function (error, response, headers) { });
mydb.destroy(undefined, undefined, function (error, response) { });
mydb.bulk(
    {
        'docs': [
            { 'key': 'baz', 'name': 'bazzel' },
            { 'key': 'bar', 'name': 'barry' }
        ]
    },
    function (error: any, response: any) { }
);
mydb.list(function (error: any, docs: any) { });
mydb.fetch({ keys: ['foobar'] }, function (error: any, docs: any) { });
mydb.fetchRevs({ keys: ['foobar'] }, function (error: any, docs: any) { });
mydb.changes({ since: 0 }, function (error, response) { });
mydb.compact(function (error) { });
const feed = mydb.follow({ since: '0' });
feed.on('change', function (change: any) { });
mydb.atomic('update', 'addbaz', 'baz', function (error: any, response: any) { });
mydb.viewWithList('people', 'by_name_and_city', 'my_list', {
    key: [
        'Derek',
        'San Francisco'
    ]
}, function (error, list) { }
);
mydb.view('alice', 'by_id', {
    keys: ['foobar', 'barfoo'],
    'include_docs': true
}, function (err, view) { }
);
mydb.show('people', 'singleDoc', 'p_clemens', function(error: any, doc: any, rh: any) {});
mydb.replicate('database_replica', function(error: any) {});

mydb.attachment.insert('new', 'att', 'Hello World!', 'text/plain', function (error: any, att: any) { });
mydb.attachment.destroy('new', 'att', { rev: '123' }, function (error, response) { });
mydb.attachment.get('new_string', 'att', function (error: any, helloWorld: any) { });

mydb.multipart.insert({'foo': 'baz'}, [{}], 'foobaz', function(error, foo) {});
mydb.multipart.get('foobaz', function(error: any, foobaz: any, headers: any) {});

const rs = fs.createReadStream("");
const is = mydb.attachment.insert('nodejs', 'logo.png', null, 'image/png');
is.on('end', function () { });
rs.pipe(is);