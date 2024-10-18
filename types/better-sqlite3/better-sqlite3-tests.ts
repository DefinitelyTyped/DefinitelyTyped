import fs = require("fs");
import Sqlite = require("better-sqlite3");

const err = new Sqlite.SqliteError("ok", "ok");
const result: Sqlite.RunResult = { changes: 1, lastInsertRowid: 1 };
const options: Sqlite.Options = { fileMustExist: true, readonly: true, nativeBinding: "/some/native/binding/path" };
const registrationOptions: Sqlite.RegistrationOptions = {
    deterministic: true,
    safeIntegers: true,
    varargs: true,
    directOnly: true,
};

let db: Sqlite.Database = Sqlite(":memory:");
db = new Sqlite(":memory:", { verbose: () => {} });
db.exec("CREATE TABLE test (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, age INTEGER);");
db.exec("INSERT INTO test(name) VALUES('name');");
db.pragma("data_version", { simple: true });
db.table("vtable", {
    columns: ["name"],
    *rows() {
        yield { name: "testName" };
    },
});
db.table("vtable_parameters", {
    parameters: ["name"],
    columns: ["name"],
    *rows(name) {
        yield { name: name };
    },
});
db.function("noop", () => {});
db.function("noop", {
    deterministic: true,
    varargs: true,
    directOnly: true,
}, () => {});
db.aggregate("add", {
    start: 0,
    step: (t, n) => t + n,
    deterministic: true,
    varargs: true,
    directOnly: true,
});
db.aggregate("getAverage", {
    start: () => [] as number[],
    step: (array, nextValue) => {
        array.push(nextValue);
    },
    result: array => array.reduce((t, v) => t + v) / array.length,
});
db.aggregate("addAll", {
    start: 0,
    step: (total, nextValue) => total + nextValue,
    inverse: (total, droppedValue) => total - droppedValue,
    result: total => Math.round(total),
});
db.defaultSafeIntegers();
db.defaultSafeIntegers(true);

const vtable: Sqlite.Statement = db.prepare("SELECT * FROM vtable");
vtable.all();

const vtable_parameters: Sqlite.Statement = db.prepare("SELECT * FROM vtable_parameters('testName')");
vtable_parameters.all();

interface TypedParameter {
    search: string;
}
interface TypedResult {
    id: number;
    name: string;
}
const typedStatement: Sqlite.Statement<TypedParameter, TypedResult> = db.prepare<TypedParameter, TypedResult>(
    "select id, name from test where name like :search",
);

typedStatement.all({ search: "%alice%" }); // $ExpectType TypedResult[]
try {
    // @ts-expect-error
    typedStatement.all({});
} catch (error) {
    // expect runtime error
}
try {
    // @ts-expect-error
    typedStatement.all();
} catch (error) {
    // expect runtime error
}

typedStatement.get({ search: "%alice%" })?.id;
typedStatement.get({ search: "%alice%" })?.name;
try {
    // @ts-expect-error
    typedStatement.get({ search: "%alice%" })?.search;
} catch (error) {
    // expect runtime error
}
try {
    // @ts-expect-error
    typedStatement.get({ search: "%alice%" }).name;
} catch (error) {
    // expect runtime error
}
try {
    // @ts-expect-error
    typedStatement.get({});
} catch (error) {
    // expect runtime error
}
try {
    // @ts-expect-error
    typedStatement.get();
} catch (error) {
    // expect runtime error
}

for (let row of typedStatement.iterate({ search: "%alice%" })) {
    row.id;
    row.name;
    // @ts-expect-error
    row.search;
}
try {
    // @ts-expect-error
    typedStatement.iterate({});
} catch (error) {
    // expect runtime error
}
try {
    // @ts-expect-error
    typedStatement.iterate();
} catch (error) {
    // expect runtime error
}

let stmt: Sqlite.Statement = db.prepare("SELECT * FROM test WHERE name == ?;");
stmt.busy; // $ExpectType boolean
stmt.readonly; // $ExpectType boolean

stmt.get(["name"]);
stmt.all(["name"]);
for (const row of stmt.iterate("name")) {
}
stmt.pluck();
stmt.pluck(true);
stmt.expand();
stmt.expand(true);
stmt.bind("name");
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
const stmtWithBindTyped = db.prepare<BindParameters>("SELECT * FROM test WHERE name == ? and age = ? and id == ?");
stmtWithBindTyped.run("alice", 20, BigInt(1234));
// note the following is technically legal according to the docs, but we do not have a way to express both typed args
// and variable tuples in typescript. If you want to group tuples, you must specify it that way in the prepare function
// https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/api.md#binding-parameters
// @ts-expect-error
stmtWithBindTyped.run(["alice", 20, BigInt(1234)]);
interface NamedBindParameters {
    name: string;
    age: number;
    id: bigint;
}
const stmtWithNamedBind = db.prepare<NamedBindParameters>("INSERT INTO test (name, age, id) VALUES (@name, @age, @id)");
stmtWithNamedBind.run({ name: "bob", age: 20, id: BigInt(1234) });

// create a new statement to reset the bind state
stmt = db.prepare("SELECT * FROM test WHERE name == ?;");
const trans: Sqlite.Transaction = db.transaction(param => stmt.all(param));
trans("name");
trans(1);
trans.default("name");
trans.deferred("name");
trans.immediate("name");
trans.exclusive("name");

const transTyped = db.transaction((param: number) => stmt.all(param));
transTyped(1);
trans.default(1);
trans.deferred(1);
trans.immediate(1);
trans.exclusive(1);
// @ts-expect-error
transTyped("name");

const transReturn = db.transaction(() => 1);
// $ExpectType number
transReturn();

db.serialize();

db.backup("backup-today.db").then(({ totalPages, remainingPages }) => {});
const paused = false;
db.backup("backup-today.db", {
    progress({ totalPages: t, remainingPages: r }) {
        return paused ? 0 : 200;
    },
});

const newDb = new Sqlite(db.serialize());
setTimeout(() => {
    db.close();
    fs.unlinkSync("backup-today.db");
}, 50);

const stmtWithNamedBindForNewDb = newDb.prepare<NamedBindParameters>(
    "INSERT INTO test (name, age, id) VALUES (@name, @age, @id)",
);
stmtWithNamedBindForNewDb.run({ name: "bob1", age: 201, id: BigInt(1235) });
