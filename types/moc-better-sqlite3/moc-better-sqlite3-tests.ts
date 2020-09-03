import Sqlite = require('moc-better-sqlite3');

const integer = Sqlite.Integer(1);
const err = new Sqlite.SqliteError('ok', 'ok');
const result: Sqlite.RunResult = { changes: 1, lastInsertRowid: 1 };
const options: Sqlite.Options = { fileMustExist: true, memory: true, readonly: true };
const registrationOptions: Sqlite.RegistrationOptions = {
    deterministic: true,
    safeIntegers: true,
    varargs: true,
};

let db: Sqlite.Database = Sqlite('.');
db = new Sqlite('.', { memory: true, verbose: () => {} });
db.exec('CREATE TABLE test (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL);');
db.exec('INSERT INTO test(name) VALUES("name");');
db.pragma('data_version', { simple: true });
db.checkpoint();
db.checkpoint('main');
db.function('noop', () => {});
db.function('noop', { deterministic: true, varargs: true }, () => {});
db.aggregate('add', {
    start: 0,
    step: (t, n) => t + n,
    deterministic: true,
    varargs: true,
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

const stmt: Sqlite.Statement = db.prepare('SELECT * FROM test WHERE name == ?;');
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
stmt.raw();
stmt.raw(true);
stmt.raw(false);
let col: Sqlite.ColumnDefinition;
for (col of stmt.columns()) {
    col.name;
    col.column;
    col.type;
}
type BindParameters = [string, number];
const stmtWithBindTyped = db.prepare<BindParameters>('SELECT * FROM test WHERE name == ? and age = ?');
stmtWithBindTyped.run('alice', 20);
// note the following is technically legal according to the docs, but we do not have a way to express both typed args
// and variable tuples in typescript. If you want to group tuples, you must specify it that way in the prepare function
// https://github.com/vazra/better-sqlite3/blob/master/docs/api.md#binding-parameters
// $ExpectError
stmtWithBindTyped.run(['alice', 20]);
interface NamedBindParameters {
    name: string;
    age: number;
}
const stmtWithNamedBind = db.prepare<NamedBindParameters>('INSERT INTO test VALUES (@name, @age)');
stmtWithNamedBind.run({ name: 'bob', age: 20 });

const trans: Sqlite.Transaction = db.transaction(param => stmt.all(param));
trans('name');
trans(1);
trans.default('name');
trans.deferred('name');
trans.immediate('name');
trans.exclusive('name');

const transTyped = db.transaction((param: number) => stmt.all(param));
transTyped(1);
trans.default(1);
trans.deferred(1);
trans.immediate(1);
trans.exclusive(1);
// $ExpectError
transTyped('name');

const transReturn = db.transaction(() => 1);
// $ExpectType number
transReturn();

db.backup('backup-today.db').then(({ totalPages, remainingPages }) => {});
const paused = false;
db.backup('backup-today.db', {
    progress({ totalPages: t, remainingPages: r }) {
        return paused ? 0 : 200;
    },
});
