import Sqlite = require('better-sqlite3');

const err = new Sqlite.SqliteError('ok', 'ok');
const result: Sqlite.RunResult = { changes: 1, lastInsertRowid: 1 };
const options: Sqlite.Options = { fileMustExist: true, readonly: true };
const registrationOptions: Sqlite.RegistrationOptions = {
    deterministic: true,
    safeIntegers: true,
    varargs: true,
};

let db: Sqlite.Database = Sqlite(':memory:');
db = new Sqlite(':memory:', { verbose: () => {} });
db.exec('CREATE TABLE test (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL);');
db.exec('INSERT INTO test(name) VALUES("name");');
db.pragma('data_version', { simple: true });
db.table('vtable', {
    columns: ['name'],
    *rows() {
        yield 'testName';
    },
});
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

const vtable: Sqlite.Statement = db.prepare('SELECT * FROM vtable');
vtable.all();

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
type BindParameters = [string, number, bigint];
const stmtWithBindTyped = db.prepare<BindParameters>('SELECT * FROM test WHERE name == ? and age = ? and id == ?');
stmtWithBindTyped.run('alice', 20, BigInt(1234));
// note the following is technically legal according to the docs, but we do not have a way to express both typed args
// and variable tuples in typescript. If you want to group tuples, you must specify it that way in the prepare function
// https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/api.md#binding-parameters
// $ExpectError
stmtWithBindTyped.run(['alice', 20, BigInt(1234)]);
interface NamedBindParameters {
    name: string;
    age: number;
    id: bigint;
}
const stmtWithNamedBind = db.prepare<NamedBindParameters>('INSERT INTO test VALUES (@name, @age, @id)');
stmtWithNamedBind.run({ name: 'bob', age: 20, id: BigInt(1234) });
// After binding you shouldn't be able to
stmtWithNamedBind.bind({ name: 'bob', age: 20, id: BigInt(1234) }).all();

// Test query return types
const fullyTypedStmt = db.prepare<{ age: number }, { name: string }, [string]>(
    'SELECT name FROM test WHERE age = @age',
);
// $ExpectType { name: string; }
fullyTypedStmt.get({ age: 42 })!;
// $ExpectType { name: string; }[]
fullyTypedStmt.all({ age: 42 });
// $ExpectType string
fullyTypedStmt.pluck(true).get({ age: 42 })!;
// $ExpectType string[]
fullyTypedStmt.pluck().all({ age: 42 });
// $ExpectType [string]
fullyTypedStmt.raw().get({ age: 42 })!;
// $ExpectType [string][]
fullyTypedStmt.raw(true).all({ age: 42 });
// $ExpectType NamespacedDict
fullyTypedStmt.expand(true).get({ age: 42 })!;
// $ExpectType NamespacedDict[]
fullyTypedStmt.expand().all({ age: 42 });

// Extra cases
const boundFullyTypedStmt = fullyTypedStmt.bind({ age: 42 });
// $ExpectType string
boundFullyTypedStmt.pluck().get()!;
// $ExpectType [string][]
boundFullyTypedStmt.raw().all();
// $ExpectType NamespacedDict
boundFullyTypedStmt.pluck(true).expand(true).get()!;

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
