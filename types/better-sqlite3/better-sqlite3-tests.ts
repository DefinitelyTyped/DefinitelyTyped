import Database = require('better-sqlite3');

const integer = Database.Integer(1);
const err = new Database.SqliteError('ok', 'ok');
const result: Database.RunResult = { changes: 1, lastInsertRowid: 1 };
const options: Database.Options = { fileMustExist: true, memory: true, readonly: true };
const registrationOptions: Database.RegistrationOptions = {
    deterministic: true,
    safeIntegers: true,
    varargs: true
};

let db = Database('.');
db = new Database('.', { memory: true });
db.exec('CREATE TABLE test (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL);');
db.exec('INSERT INTO test(name) VALUES("name");');
db.pragma('data_version', { simple: true });
db.checkpoint();
db.checkpoint('main');
db.function('noop', () => { });
db.function('noop', { deterministic: true, varargs: true }, () => { });
db.aggregate('add', {
    start: 0,
    step: (t, n) => t + n,
    deterministic: true,
    varargs: true
});
db.aggregate('getAverage', {
    start: () => [],
    step: (array, nextValue) => {
        array.push(nextValue);
    },
    result: array => array.reduce((t: any, v: any) => t + v) / array.length,
});
db.aggregate('addAll', {
    start: 0,
    step: (total, nextValue) => total + nextValue,
    inverse: (total, droppedValue) => total - droppedValue,
    result: total => Math.round(total),
});
db.defaultSafeIntegers();
db.defaultSafeIntegers(true);

const stmt = db.prepare('SELECT * FROM test WHERE name == ?;');
stmt.get(['name']);
stmt.all({ name: 'name' });
for (const row of stmt.iterate('name')) {
}
stmt.pluck();
stmt.pluck(true);
stmt.expand();
stmt.expand(true);
stmt.bind('name');
stmt.safeIntegers();
stmt.safeIntegers(true);

const trans = db.transaction((param) => stmt.all(param));
trans('name');
trans.default('name');
trans.default('name');
trans.immediate('name');
trans.exclusive('name');
