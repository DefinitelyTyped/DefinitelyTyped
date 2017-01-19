///<reference path="index.d.ts"/>

// examples taken from https://github.com/litehelpers/Cordova-sqlite-storage
function echoTestFunction() {
    function successCallback(value: string) {

    }
    function errorCallback() {

    }
    window.sqlitePlugin.echoTest(successCallback, errorCallback);
}
function selfTestFunction() {
    function successCallback() {

    }
    function errorCallback() {

    }
    window.sqlitePlugin.selfTest(successCallback, errorCallback);
}

function openingDatabase() {
    function successcb(db: SQLitePlugin.Database) {

    }
    function errorcb(err: Error) {

    }

    var db = window.sqlitePlugin.openDatabase({name: 'my.db', location: 'default'}, successcb, errorcb);
    var db = window.sqlitePlugin.openDatabase({name: 'my.db', iosDatabaseLocation: 'Library'}, successcb, errorcb);
}

function openingDatabase2() {
    window.sqlitePlugin.openDatabase({name: 'my.db', location: 'default'}, function(db) {
        db.transaction(function(tx) {
            // ...
        }, function(err) {
            console.log('Open database ERROR: ' + JSON.stringify(err));
        });
    });
}

function singleStatementTransactions(db: SQLitePlugin.Database) {
    db.executeSql('INSERT INTO MyTable VALUES (?)', ['test-value'], function (resultSet) {
        console.log('resultSet.insertId: ' + resultSet.insertId);
        console.log('resultSet.rowsAffected: ' + resultSet.rowsAffected);
    }, function(error) {
        console.log('SELECT error: ' + error.message);
    });

    db.executeSql("SELECT LENGTH('tenletters') AS stringlength", [], function (resultSet) {
        console.log('got stringlength: ' + resultSet.rows.item(0).stringlength);
    }, function(error) {
        console.log('SELECT error: ' + error.message);
    });
}

function sqlBatchTransactions(db: SQLitePlugin.Database) {
    db.sqlBatch([
        'DROP TABLE IF EXISTS MyTable',
        'CREATE TABLE MyTable (SampleColumn)',
        [ 'INSERT INTO MyTable VALUES (?)', ['test-value'] ],
    ], function() {
        db.executeSql('SELECT * FROM MyTable', [], function (resultSet) {
            console.log('Sample column value: ' + resultSet.rows.item(0).SampleColumn);
        });
    }, function(error) {
        console.log('Populate table error: ' + error.message);
    });
}

function asynchronousTransaction(db: SQLitePlugin.Database) {
    db.transaction(function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS MyTable');
        tx.executeSql('CREATE TABLE MyTable (SampleColumn)');
        tx.executeSql('INSERT INTO MyTable VALUES (?)', ['test-value'], function(tx, resultSet) {
            console.log('resultSet.insertId: ' + resultSet.insertId);
            console.log('resultSet.rowsAffected: ' + resultSet.rowsAffected);
        }, function(tx, error) {
            console.log('INSERT error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });

    db.readTransaction(function(tx) {
        tx.executeSql("SELECT UPPER('Some US-ASCII text') AS uppertext", [], function(tx, resultSet) {
            console.log("resultSet.rows.item(0).uppertext: " + resultSet.rows.item(0).uppertext);
        }, function(tx, error) {
            console.log('SELECT error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });
}

function sampleWithPRAGMA() {
    // Wait for Cordova to load
    document.addEventListener('deviceready', onDeviceReady, false);

    // Cordova is ready
    function onDeviceReady() {
        var db = window.sqlitePlugin.openDatabase({name: 'my.db', location: 'default'});

        db.transaction(function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS test_table');
            tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data text, data_num integer)');

            // demonstrate PRAGMA:
            db.executeSql("pragma table_info (test_table);", [], function(res) {
                console.log("PRAGMA res: " + JSON.stringify(res));
            });

            tx.executeSql("INSERT INTO test_table (data, data_num) VALUES (?,?)", ["test", 100], function(tx, res) {
                console.log("insertId: " + res.insertId + " -- probably 1");
                console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");

                db.transaction(function(tx) {
                    tx.executeSql("select count(id) as cnt from test_table;", [], function(tx, res) {
                        console.log("res.rows.length: " + res.rows.length + " -- should be 1");
                        console.log("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
                    });
                });

//            }, function(e) {                    // probably example in https://github.com/litehelpers/Cordova-sqlite-storage is broken
            }, function(_tx, e) {
                console.log("ERROR: " + e.message);
            });
        });
    }
}


function sampleWithTransactionLevelNesting() {
    // Wait for Cordova to load
    document.addEventListener('deviceready', onDeviceReady, false);

    // Cordova is ready
    function onDeviceReady() {
        var db = window.sqlitePlugin.openDatabase({name: 'my.db', location: 'default'});

        db.transaction(function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS test_table');
            tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data text, data_num integer)');

            tx.executeSql("INSERT INTO test_table (data, data_num) VALUES (?,?)", ["test", 100], function(tx, res) {
                console.log("insertId: " + res.insertId + " -- probably 1");
                console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");

                tx.executeSql("select count(id) as cnt from test_table;", [], function(tx, res) {
                    console.log("res.rows.length: " + res.rows.length + " -- should be 1");
                    console.log("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
                });

            }, function(tx, e) {
                console.log("ERROR: " + e.message);
            });
        });
    }
}


function dbClose(db: SQLitePlugin.Database) {
    function successcb() {

    }
    function errorcb(err: Error) {

    }

    db.close(successcb, errorcb);


    db.transaction(function (tx) {
        tx.executeSql("SELECT LENGTH('tenletters') AS stringlength", [], function (tx, res) {
            console.log('got stringlength: ' + res.rows.item(0).stringlength);
        });
    }, function (error) {
        // OK to close here:
        console.log('transaction error: ' + error.message);
        db.close();
    }, function () {
        // OK to close here:
        console.log('transaction ok');
        db.close(function () {
            console.log('database is closed ok');
        });
    });
}

function deleteDatabase() {
    function successcb() {

    }
    function errorcb(err: Error) {

    }

    window.sqlitePlugin.deleteDatabase({name: 'my.db', location: 'default'}, successcb, errorcb);
}


function quickInstallationTest() {
    window.sqlitePlugin.openDatabase({ name: 'hello-world.db', location: 'default' }, function (db) {
        db.executeSql("select length('tenletters') as stringlength", [], function (res) {
            var stringlength = res.rows.item(0).stringlength;
            console.log('got stringlength: ' + stringlength);
            //document.getElementById('deviceready').querySelector('.received').innerHTML = 'stringlength: ' + stringlength;
        });
    });
}
