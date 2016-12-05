import * as r from "rethinkdb";

function errorAndCursorCallback(err: Error, cursor: r.Cursor): void {}
function cursorCallback(cursor: r.Cursor): void {}

r.connect({ host: "localhost", port: 28015 }, function(err: Error, conn: r.Connection) {
    console.log("HI", err, conn);

    const testDb = r.db("test");

    r.table("players").hasFields("games_won").run(conn, errorAndCursorCallback);
    r.table("players").hasFields({ "games_won": { "championships": true } }).run(conn, errorAndCursorCallback);
    r.table("players").filter(r.row.hasFields("games_won").not()).run(conn, errorAndCursorCallback);
    r.table("players").filter(r.row.hasFields({ "games_won": { "championships": true } }).not()).run(conn, errorAndCursorCallback);

    r.table("players").filter(
      r.row.hasFields("games_won").not()
      .or(r.row("games_won").not().eq(true))
      .and(true)
    )
    .run(conn, errorAndCursorCallback);

    testDb.tableCreate("users").run(conn, function(err, stuff) {
        const users = testDb.table("users");

        users.insert({ name: "bob" }).run(conn, function() {
        });

        users.hasFields("foo_bar").run(conn, () => {});

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
r.connect({ host: "localhost", port: 28015 }).then(function(conn: r.Connection) {
    console.log("HI", conn);

    const testDb = r.db("test");

    r.table("players").hasFields("games_won").run(conn).then(cursorCallback);
    r.table("players").hasFields({ "games_won": { "championships": true } }).run(conn).then(cursorCallback);
    r.table("players").filter(r.row.hasFields("games_won").not()).run(conn).then(cursorCallback);
    r.table("players").filter(r.row.hasFields({ "games_won": { "championships": true } }).not()).run(conn).then(cursorCallback);

    testDb.tableCreate("users").run(conn).then(function() {
        const users = testDb.table("users");

        users.insert({ name: "bob" }).run(conn, function() {
        });

        users.filter(function(doc?) {
            return doc("henry").eq("bob");
        })
        .between("james", "beth")
        .limit(4)
        .run(conn)
        .then((cursor: r.Cursor) => {
          cursor.toArray().then((rows: any[]) => {
            console.log(rows);
          });
        });
    });
});
