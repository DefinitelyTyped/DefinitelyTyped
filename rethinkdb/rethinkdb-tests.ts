/// <reference path="./rethinkdb.d.ts"/>

import * as r from "rethinkdb";

r.connect({ host: "localhost", port: 28015 }, function(err, conn) {
    console.log("HI", err, conn);

    const testDb = r.db("test");

    testDb.tableCreate("users").run(conn, function(err, stuff) {
        const users = testDb.table("users");

        users.insert({ name: "bob" }).run(conn, function() {
        });

        users.filter(function(doc?) {
            return doc("henry").eq("bob");
        })
        .filter(r.row("updatedAt").default(0).lt(r.now().sub(1000)))
        .between("james", "beth")
        .limit(4)
        .run(conn, function(err, cursor) {
          cursor.toArray<string>((err, strings) => {
            console.log(strings);
          });
        });
    });

    r.js("'str1' + 'str2'").run(conn, function (err, value) {});
    r.uuid().run(conn, function (err, uuid) {});
    r.uuid("input value").run(conn, function (err, uuid) {});

    r.table("games").changes().run(conn, function(err, cursor) {
      cursor.each(console.log);
    });
});

// use promises instead of callbacks
r.connect({ host: "localhost", port: 28015 }).then(function(conn) {
    console.log("HI", conn);

    const testDb = r.db("test");

    testDb.tableCreate("users").run(conn).then(function(stuff) {
        const users = testDb.table("users");

        users.insert({ name: "bob" }).run(conn, function() {
        });

        users.filter(function(doc?) {
            return doc("henry").eq("bob");
        })
        .between("james", "beth")
        .limit(4)
        .run(conn)
        .then(cursor => {
          cursor.toArray().then(rows => {
            console.log(rows);
          });
        });
    });
});
