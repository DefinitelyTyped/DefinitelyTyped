

interface DbState {
    database: Database;
    version: DOMString;
    transaction: (callback: SQLTransactionCallback, errorCallback?: SQLTransactionErrorCallback, successCallback?: SQLVoidCallback) => void;
    readTransaction: (callback: SQLTransactionCallback, errorCallback?: SQLTransactionErrorCallback, successCallback?: SQLVoidCallback) => void;
    changeVersion: (oldVersion: DOMString, newVersion: DOMString, callback?: SQLTransactionCallback, errorCallback?: SQLTransactionErrorCallback, successCallback?: SQLVoidCallback) => void
}

interface SqlQuery {
    sql: DOMString;
    args?: ObjectArray;
}

interface Results {
    data: any[];
    sqlResultSet: SQLResultSet;
}


(function () {
    var dbName: string = "websql-tests";

    // run the test
    createDatabase(dbName);


    function log(...msg: any[]) {
        if (console && console.log) {
            console.log.apply(console, msg);
        }
    }


    function createDatabase(name: string) {
        var tableOne = {
            name: "tableOne",
            columns: ["i_id", "s_name", "d_last"],
        };
        var tableTwo = {
            name: "tableTwo",
            columns: ["i_thing", "s_description", "d_decimal"],
        };

        openDatabase(dbName, "1", dbName, 1024 * 1024, function (dbState) {
            createTables(dbState, [
                { name: tableOne.name, columns: tableOne.columns },
                { name: tableTwo.name, columns: tableTwo.columns },
            ], function (res) {
                writeRecords(dbState, [
                    { name: tableOne.name, data: createMockRecord(tableOne.columns) },
                    { name: tableOne.name, data: createMockRecord(tableOne.columns) },
                    { name: tableTwo.name, data: createMockRecord(tableTwo.columns) },
                    { name: tableTwo.name, data: createMockRecord(tableTwo.columns) },
                    { name: tableTwo.name, data: createMockRecord(tableTwo.columns) },
                ], function (ress) {
                    log(ress);
                    readRecords(dbState, [tableOne.name, tableTwo.name], function (resss) {
                        log(resss);
                    });
                });
            });
        });
    }


    function initDb(db: Database): DbState {
        return {
            database: db,
            version: db.version,
            transaction: db.transaction.bind(db),
            readTransaction: db.readTransaction.bind(db),
            changeVersion: db.changeVersion.bind(db)
        };
    }


    function openDatabase(name: string, version: string, displayName: string, estimatedSize: number, callback: (dbState: DbState) => void) {
        estimatedSize = estimatedSize || (5 * 1024 * 1024);

        try {
            if (!window.openDatabase) {
                log("WebSQL not implemented");
            } else {
                // seems to synchronously open WebSQL, even though window.openDatabase is async
                var db: Database = window.openDatabase(name, version, displayName, estimatedSize);
                var dbState = initDb(db);
                if (db) {
                    callback(dbState);
                } else {
                    log("Failed to open database");
                }
            }
        } catch (ex) {
            log("Failed to open database '" + name + "': " + (JSON && JSON.stringify ? JSON.stringify(ex) : ex));
        }
    }


    function createTables(dbState: DbState, tableDefs: { name: string; columns: string[]; }[], callback: (rec: SQLResultSet[][]) => void) {
        var res: SQLResultSet[][] = [];
        var resI = 0, count = tableDefs.length;
        for (var i = 0; i < count; i++) {
            createTable(dbState, tableDefs[i].name, tableDefs[i].columns, function (rec: SQLResultSet[]) {
                res.push(rec);
                resI++;
                if (resI == count) {
                    callback(res);
                }
            });
        }
    }


    function createTable(dbState: DbState, name: string, columns: string[], callback: (rec: SQLResultSet[]) => void) {
        var sqls: SqlQuery[] = [];
        var colDefs = columns.map((col) => {
            var colType: string = null;
            var type = col.charAt(0);
            switch (type) {
                case 'i':
                case 'l':
                    colType = "INTEGER";
                    break;
                case 'f':
                case 'd':
                    colType = "REAL";
                    break;
                case 'b':
                case 'z':
                    colType = "INTEGER";
                    break;
                case 's':
                    colType = "TEXT";
                    break;
                default:
                    colType = "TEXT";
            }
            return col + " " + colType;
        });
        sqls.push({ sql: "CREATE TABLE IF NOT EXISTS " + name + " (" + colDefs.join(",") + ")", args: [] });
        execSqlStatements(dbState.transaction, sqls, callback);
    }


    /** column name prefixes
     * 'i', 'l' - integer
     * 'f', 'd' - float
     * 'b', 'z' - boolean
     * 's' - string
     * other - null
     */
    function createMockRecord(columns: string[]): any {
        var rec: { [id: string]: any } = {};
        for (var i = 0, size = columns.length; i < size; i++) {
            var col = columns[i];
            var type = col.charAt(0);
            switch (type) {
                case 'i':
                case 'l':
                    rec[col] = parseInt((Math.random() * 1000000).toString());
                    break;
                case 'f':
                case 'd':
                    rec[col] = (Math.random() - 0.5) * 2000000;
                    break;
                case 'b':
                case 'z':
                    rec[col] = Math.random() > 0.5;
                    break;
                case 's':
                    rec[col] = String.fromCharCode.apply(String, new Array(Math.round(Math.random() * 21)).join(".").split("").map((k) => 65 + Math.round(Math.random() * 25)));
                    break;
                default:
                    rec[col] = null;
            }
        }
        return rec;
    }


    function writeRecords(dbState: DbState, tableDefs: { name: string; data: any; }[], callback: (rec: SQLResultSet[][]) => void) {
        var res: SQLResultSet[][] = [];
        var resI = 0, count = tableDefs.length;
        for (var i = 0; i < count; i++) {
            writeRecord(dbState, tableDefs[i].name, tableDefs[i].data, function (rec: SQLResultSet[]) {
                res.push(rec);
                resI++;
                if (resI == count) {
                    callback(res);
                }
            });
        }
    }


    function writeRecord(dbState: DbState, tableName: string, record: any, callback: (rec: SQLResultSet[]) => void) {
        var props = Object.keys(record);
        var propCount = props.length;
        var args: ObjectArray = [];
        var sqlStatement = {
            sql: "INSERT INTO " + tableName + " values(" + (new Array(propCount + 1).join("?").split("").join(",")) + ")",
            args: args
        };
        for (var i = 0; i < propCount; i++) {
            var prop = props[i];
            args.push(record[prop]);
        }

        execSqlStatements(dbState.transaction, [sqlStatement], callback);
    }


    function readRecords(dbState: DbState, tableNames: string[], callback: (rec: Results[]) => void) {
        var res: Results[] = [];
        var resI = 0, count = tableNames.length;
        for (var i = 0; i < count; i++) {
            readRecord(dbState, tableNames[i], function (rec: Results) {
                res.push(rec);
                resI++;
                if (resI == count) {
                    callback(res);
                }
            });
        }
    }


    function readRecord(dbState: DbState, tableName: string, callback: (rec: Results) => void) {
        var args: ObjectArray = [];
        var sqlStatement = {
            sql: "SELECT * FROM " + tableName,
            args: args
        };

        execSqlStatements(dbState.transaction, [sqlStatement], function (rec: SQLResultSet[]) {
            var resObjs: Results[] = resultSetToResults(rec);
            callback(resObjs[0]);
        });
    }


    function resultSetToResults(results: SQLResultSet[]) {
        var resObjs: Results[] = [];
        for (var i = 0, count = results.length; i < count; i++) {
            var resAry: any[] = [];
            var sqlRsI = results[i];
            var resObj = {
                data: resAry,
                sqlResultSet: sqlRsI
            };
            resObjs.push(resObj);
            var rows = sqlRsI.rows;
            var rI = 0;
            for (var rI = 0, rCount = sqlRsI.rows.length; rI < rCount; rI++) {
                var r = rows.item(rI);
                resAry.push(r);
            }
        }
        return resObjs;
    }


    function compareRecords(rec1: any, rec2: any): boolean {
        var props = Object.keys(rec1);
        for (var i = 0, size = props.length; i < size; i++) {
            var prop = props[i];
            if (rec1[prop] !== rec2[prop]) {
                return false;
            }
        }
        return true;
    }


    function execSqlStatements<T, U>(xactMethod: (callback: SQLTransactionCallback) => void, sqlStatement: SqlQuery[],
            callback: (rs: SQLResultSet[]) => void) {
        var results: SQLResultSet[] = [];
        var sqlCount = sqlStatement.length;
        var resI = 0;

        function execCommand(xact: SQLTransaction, sql: DOMString, args: ObjectArray) {
            xact.executeSql(sql, args || [], function (xact: SQLTransaction, rs: SQLResultSet): void {
                results.push(rs);
                resI++;
                if (resI === sqlCount) {
                    callback(results);
                }
            }, function (transaction, err) {
                    log(err, transaction);
                return false;
            });
        }

        xactMethod(function (xact: SQLTransaction): void {
            for (var i = 0; i < sqlCount; i++) {
                execCommand(xact, sqlStatement[i].sql, sqlStatement[i].args);
            }
        });
    }

} ());
