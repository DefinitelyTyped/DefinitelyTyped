import * as SqlString from "tsqlstring";

// Code samples taken from:
// https://github.com/kylefarris/tsqlstring/blob/master/README.md
// https://github.com/mysqljs/sqlstring/blob/master/README.md

const userId = "some user provided value";
const sql = "SELECT * FROM users WHERE id = " + SqlString.escape(userId);

const userId2 = 1;
const sql2 = SqlString.format("SELECT * FROM users WHERE id = ?", [userId2]);

const userId3 = 1;
const sql3 = SqlString.format("UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?", ["a", "b", "c", userId3]);

const post = { id: 1, title: "Hello MySQL" };
const sql4 = SqlString.format("INSERT INTO posts SET ?", post);

const GETDATE = SqlString.raw("GETDATE()");
const sql6 = SqlString.format("UPDATE posts SET modified = ? WHERE id = ?", [GETDATE, 42]);

const sql7 = "SELECT * FROM posts WHERE title=" + SqlString.escape("Hello SQL Server");

const sorter = "date";
const sql8 = "SELECT * FROM posts ORDER BY " + SqlString.escapeId(sorter);

const sorter2 = "date";
const sql9 = "SELECT * FROM posts ORDER BY " + SqlString.escapeId("posts." + sorter2);

const sorter3 = "date.2";
const sql10 = "SELECT * FROM posts ORDER BY " + SqlString.escapeId(sorter3, true);

const userId4 = 1;
const columns = ["username", "email"];
const sql11 = SqlString.format("SELECT ?? FROM ?? WHERE id = ?", [columns, "users", userId4]);

const userId5 = 1;
const inserts = ["users", "id", userId5];
const sql12 = SqlString.format("SELECT * FROM ?? WHERE ?? = ?", inserts);

const userId6 = 1;
const data = { email: "foobar@example.com", modified: SqlString.raw("GETDATE()") };
const sql13 = SqlString.format("UPDATE ?? SET ? WHERE `id` = ?", ["users", data, userId6]);
