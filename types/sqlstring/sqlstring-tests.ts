import * as SqlString from "sqlstring";

// Code samples taken from:
// https://github.com/mysqljs/sqlstring/blob/master/README.md

const userId = "some user provided value";
const sql1 = "SELECT * FROM users WHERE id = " + SqlString.escape(userId);

const userId2 = 1;
const sql2 = SqlString.format("SELECT * FROM users WHERE id = ?", [userId2]);

const userId3 = 1;
const sql3 = SqlString.format(
  "UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?",
  ["a", "b", "c", userId3],
);

const post = { id: 1, title: "Hello MySQL" };
const sql4 = SqlString.format("INSERT INTO posts SET ?", post);

const sorter = "date";
const sql5 =
  "SELECT * FROM posts ORDER BY " + SqlString.escapeId("posts." + sorter);

const sorter2 = "date.2";
const sql6 =
  "SELECT * FROM posts ORDER BY " + SqlString.escapeId(sorter2, true);

const userId4 = 1;
const inserts = ["users", "id", userId4];
const sql7 = SqlString.format("SELECT * FROM ?? WHERE ?? = ?", inserts);
