import * as Database from 'better-sqlite3';

const integer = Database.Integer(1);
const err = new Database.SqliteError('ok', 'ok');

let db = Database('.');
db = new Database('.', {memory: true});
db.exec('CREATE TABLE test (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL);');
db.exec('INSERT INTO test(name) VALUES("name");');
db.pragma('data_version', true);
db.checkpoint();
db.checkpoint('main');
db.register(() => {});
db.register({name: 'noop', deterministic: true, varargs: true}, () => {});
db.defaultSafeIntegers();
db.defaultSafeIntegers(true);

const stmt = db.prepare('SELECT * FROM test WHERE name == ?;');
stmt.get(['name']);
stmt.all({name: 'name'});
stmt.each('name', (row: {name: string}) => {});
stmt.each((row: {name: string}) => {});
stmt.pluck();
stmt.pluck(true);
stmt.bind('name');
stmt.safeIntegers();
stmt.safeIntegers(true);

const trans = db.transaction(['INSERT INTO test(name) VALUES(?);']);
trans.run('name');
trans.bind('name');
trans.run();
