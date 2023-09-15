import sql from "k6/x/sql";

// @ts-expect-error
sql.open();
// @ts-expect-error
sql.open("not-supported", "123");
// @ts-expect-error
sql.open("sqlite3");

// $ExpectType DatabaseConnection
sql.open("sqlite3", "my.db");

const db = sql.open("sqlite3", "my.db");

// @ts-expect-error
db.exec();

db.exec("some statements");

// @ts-expect-error
db.close(1);

db.close();

// @ts-expect-error
sql.query();
// @ts-expect-error
sql.query("not-connection-object", "select statement");
// @ts-expect-error
sql.query(db);

sql.query(db, "select statement");
sql.query(db, "select statement", "param1");
sql.query(db, "select statement", "param1", "param2");
sql.query(db, "select statement", "param1", "param2", "param3");
