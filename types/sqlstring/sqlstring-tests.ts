import * as assert from "assert";
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
const sql5 = "SELECT * FROM posts ORDER BY " + SqlString.escapeId("posts." + sorter);

const sorter2 = "date.2";
const sql6 = "SELECT * FROM posts ORDER BY " + SqlString.escapeId(sorter2, true);

const userId4 = 1;
const inserts = ["users", "id", userId4];
const sql7 = SqlString.format("SELECT * FROM ?? WHERE ?? = ?", inserts);

const CURRENT_TIMESTAMP = SqlString.raw("CURRENT_TIMESTAMP()");
const sql8 = SqlString.format("UPDATE posts SET modified = ? WHERE id = ?", [CURRENT_TIMESTAMP, 42]);

// Code samples taken from:
// https://github.com/mysqljs/sqlstring/blob/master/test/unit/test-SqlString.js
/* tslint:disable:object-literal-shorthand only-arrow-functions prefer-template */

// SqlString.escapeId
assert.equal(SqlString.escapeId("id"), "`id`");
assert.equal(SqlString.escapeId(42), "`42`");
assert.equal(SqlString.escapeId({}), "`[object Object]`");
assert.equal(
    SqlString.escapeId({
        toString: function() {
            return "foo";
        },
    }),
    "`foo`",
);
assert.equal(
    SqlString.escapeId({
        toString: function() {
            return "f`oo";
        },
    }),
    "`f``oo`",
);
assert.equal(SqlString.escapeId("i`d"), "`i``d`");
assert.equal(SqlString.escapeId("id1.id2"), "`id1`.`id2`");
assert.equal(SqlString.escapeId("id`1.i`d2"), "`id``1`.`i``d2`");
assert.equal(SqlString.escapeId("id1.id2", true), "`id1.id2`");
assert.equal(SqlString.escapeId(["a", "b", "t.c"]), "`a`, `b`, `t`.`c`");
assert.equal(SqlString.escapeId(["a", ["b", ["t.c"]]]), "`a`, `b`, `t`.`c`");

// SqlString.escape
assert.equal(SqlString.escape(undefined), "NULL");
assert.equal(SqlString.escape(null), "NULL");
assert.equal(SqlString.escape(false), "false");
assert.equal(SqlString.escape(true), "true");
assert.equal(SqlString.escape(5), "5");
assert.equal(SqlString.escape(SqlString.raw("NOW()")), "NOW()");
assert.equal(SqlString.escape({ a: "b", c: "d" }), "`a` = 'b', `c` = 'd'");
assert.equal(SqlString.escape({ a: "b", c: function() {} }), "`a` = 'b'");
assert.equal(
    SqlString.escape({
        id: {
            toSqlString: function() {
                return "LAST_INSERT_ID()";
            },
        },
    }),
    "`id` = LAST_INSERT_ID()",
);
assert.equal(
    SqlString.escape({
        toSqlString: function() {
            return "@foo_id";
        },
    }),
    "@foo_id",
);
assert.equal(
    SqlString.escape({
        toSqlString: function() {
            return "CURRENT_TIMESTAMP()";
        },
    }),
    "CURRENT_TIMESTAMP()",
);
assert.equal(SqlString.escape({ a: { nested: true } }), "`a` = '[object Object]'");
assert.equal(
    SqlString.escape({
        a: {
            toString: function() {
                return "foo";
            },
        },
    }),
    "`a` = 'foo'",
);
assert.equal(
    SqlString.escape({
        a: {
            toString: function() {
                return "f'oo";
            },
        },
    }),
    "`a` = 'f\\'oo'",
);
assert.equal(SqlString.escape([1, 2, "c"]), "1, 2, 'c'");
assert.equal(
    SqlString.escape([[1, 2, 3], [4, 5, 6], ["a", "b", { nested: true }]]),
    "(1, 2, 3), (4, 5, 6), ('a', 'b', '[object Object]')",
);
assert.equal(SqlString.escape([1, { nested: true }, 2]), "1, '[object Object]', 2");
assert.equal(
    SqlString.escape([1, {
        toString: function() {
            return "foo";
        },
    }, 2]),
    "1, 'foo', 2",
);
assert.equal(SqlString.escape("Super"), "'Super'");
assert.equal(SqlString.escape("Sup\0er"), "'Sup\\0er'");
assert.equal(SqlString.escape("Super\0"), "'Super\\0'");
assert.equal(SqlString.escape("Sup\ber"), "'Sup\\ber'");
assert.equal(SqlString.escape("Super\b"), "'Super\\b'");
assert.equal(SqlString.escape("Sup\ner"), "'Sup\\ner'");
assert.equal(SqlString.escape("Super\n"), "'Super\\n'");
assert.equal(SqlString.escape("Sup\rer"), "'Sup\\rer'");
assert.equal(SqlString.escape("Super\r"), "'Super\\r'");
assert.equal(SqlString.escape("Sup\ter"), "'Sup\\ter'");
assert.equal(SqlString.escape("Super\t"), "'Super\\t'");
assert.equal(SqlString.escape("Sup\\er"), "'Sup\\\\er'");
assert.equal(SqlString.escape("Super\\"), "'Super\\\\'");
assert.equal(SqlString.escape("Sup\u001aer"), "'Sup\\Zer'");
assert.equal(SqlString.escape("Super\u001a"), "'Super\\Z'");
assert.equal(SqlString.escape("Sup'er"), "'Sup\\'er'");
assert.equal(SqlString.escape("Super'"), "'Super\\''");
assert.equal(SqlString.escape("Sup\"er"), "'Sup\\\"er'");
assert.equal(SqlString.escape("Super\""), "'Super\\\"'");
{
    const expected = "2012-05-07 11:42:03.002";
    const date = new Date(2012, 4, 7, 11, 42, 3, 2);
    const string = SqlString.escape(date);
    assert.strictEqual(string, "'" + expected + "'");
}
{
    const expected = "2012-05-07 11:42:03.002";
    const date = new Date(Date.UTC(2012, 4, 7, 11, 42, 3, 2));
    const string = SqlString.escape(date, false, "Z");
    assert.strictEqual(string, "'" + expected + "'");
}
{
    const expected = "2012-05-07 12:42:03.002";
    const date = new Date(Date.UTC(2012, 4, 7, 11, 42, 3, 2));
    const string = SqlString.escape(date, false, "+01");
    assert.strictEqual(string, "'" + expected + "'");
}
{
    const expected = "2012-05-07 13:42:03.002";
    const date = new Date(Date.UTC(2012, 4, 7, 11, 42, 3, 2));
    const string = SqlString.escape(date, false, "+0200");
    assert.strictEqual(string, "'" + expected + "'");
}
{
    const expected = "2012-05-07 06:42:03.002";
    const date = new Date(Date.UTC(2012, 4, 7, 11, 42, 3, 2));
    const string = SqlString.escape(date, false, "-05:00");
    assert.strictEqual(string, "'" + expected + "'");
}
{
    const date = new Date(Date.UTC(2012, 4, 7, 11, 42, 3, 2));
    const expected = SqlString.escape(date, false, "Z");
    const string = SqlString.escape(date, false, "foo");
    assert.strictEqual(string, expected);
}
{
    const date = new Date(NaN);
    const string = SqlString.escape(date);
    assert.strictEqual(string, "NULL");
}
// {
//   const buffer = new Buffer([0, 1, 254, 255]);
//   const string = SqlString.escape(buffer);
//   assert.strictEqual(string, "X'0001feff'");
// }
// {
//   const buffer = new Buffer([0, 1, 254, 255]);
//   buffer.toString = function() { return "00' OR '1'='1"; };
//   const string = SqlString.escape(buffer);
//   assert.strictEqual(string, "X'00\\' OR \\'1\\'=\\'1'");
// }
assert.equal(SqlString.escape(NaN), "NaN");
assert.equal(SqlString.escape(Infinity), "Infinity");

// SqlString.format
{
    const sql = SqlString.format("? and ?", ["a", "b"]);
    assert.equal(sql, "'a' and 'b'");
}
{
    const sql = SqlString.format("SELECT * FROM ?? WHERE id = ?", ["table", 42]);
    assert.equal(sql, "SELECT * FROM `table` WHERE id = 42");
}
{
    const sql = SqlString.format("? or ??? and ?", ["foo", "bar", "fizz", "buzz"]);
    assert.equal(sql, "'foo' or ??? and 'bar'");
}
{
    const sql = SqlString.format("? and ?", ["a"]);
    assert.equal(sql, "'a' and ?");
}
{
    const sql = SqlString.format("? and ?", ["a", "b", "c"]);
    assert.equal(sql, "'a' and 'b'");
}
{
    const sql = SqlString.format("? and ?", ["hello?", "b"]);
    assert.equal(sql, "'hello?' and 'b'");
}
{
    const sql = SqlString.format("?", undefined, false);
    assert.equal(sql, "?");
}
{
    const sql = SqlString.format("?", { hello: "world" }, false);
    assert.equal(sql, "`hello` = 'world'");
}
{
    const sql = SqlString.format("?", { hello: "world" }, true);
    assert.equal(sql, "'[object Object]'");
}
{
    const sql = SqlString.format("?", {
        toString: function() {
            return "hello";
        },
    }, true);
    assert.equal(sql, "'hello'");
}
{
    const sql = SqlString.format("?", {
        toSqlString: function() {
            return "@foo";
        },
    }, true);
    assert.equal(sql, "@foo");
}
{
    const sql = SqlString.format("SELECT ??");
    assert.equal(sql, "SELECT ??");
}
{
    const sql = SqlString.format("SELECT COUNT(*) FROM table", ["a", "b"]);
    assert.equal(sql, "SELECT COUNT(*) FROM table");
}

// SqlString.raw
assert.equal(typeof SqlString.raw("NOW()"), "object");
assert.equal(typeof SqlString.raw("NOW()").toSqlString, "function");
assert.equal(SqlString.raw("NOW() AS 'current_time'").toSqlString(), "NOW() AS 'current_time'");
