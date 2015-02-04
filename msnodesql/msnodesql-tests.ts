/// <reference path="msnodesql.d.ts" />

import sql = require('msnodesql');

function test_streaming() {

    var conn_str = "Driver={SQL Server Native Client 11.0};Server={(local)\\SQLEXPRESS};Database={DBName};Trusted_Connection={Yes};";

    var stmt = sql.query(conn_str, "SELECT * from TestTable");
    stmt.on('meta', function (meta) { console.log("We've received the metadata"); });
    stmt.on('row', function (idx) { console.log("We've started receiving a row"); });
    stmt.on('column', function (idx, data, more) { console.log(idx + ":" + data); });
    stmt.on('done', function () { console.log("All done!"); });
    stmt.on('error', function (err) { console.log("We had an error :-( " + err); });
}

function test_callback() {
    var conn_str = "Driver={SQL Server Native Client 11.0};Server={(local)\\SQLEXPRESS};Database={DBName};Trusted_Connection={Yes};";

    sql.query(conn_str, "SELECT * FROM TestTable", (err, results) => {
        if (err) {
            console.error(err);
        }
        else if (results.length) {
            console.log(results);
        }
        else {
            console.log("No results");
        }
    });
}

function test_explicit() {
    var conn_str = "Driver={SQL Server Native Client 11.0};Server={(localdb)\\v11.0};Database={DBName};Trusted_Connection={Yes};";

    sql.open(conn_str, function (err?: Error, connection?: sql.Connection) {
        if (err) {
            console.log("Error opening the connection!");
            return;
        }
        connection.queryRaw("SELECT * FROM TestTable", function (err?: Error, results?: sql.QueryRawResult, more?: boolean) {
            if (err) {
                console.log("Error running query!");
                return;
            }
            for (var i = 0; i < results.rows.length; i++) {
                console.log("0:" + results.rows[i][0]);
            }
        });
    });
}