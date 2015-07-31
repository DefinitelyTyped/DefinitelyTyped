/// <reference path="../node/node.d.ts" />
/// <reference path="mssql.d.ts" />

import sql = require('mssql');

var config: sql.config = {
    user: 'user',
    password: 'password',
    server: 'ip',
    database: 'database',
    connectionTimeout: 10000,
    options: {
        encrypt: true
    }
}

var connection: sql.Connection = new sql.Connection(config, function (err: any) {
    if (err != null) {
        console.warn("Issue with connecting to SQL Server!");
    }
    else {
        var requestQuery = new sql.Request(connection);

        var getArticlesQuery = "SELECT * FROM TABLE";

        requestQuery.query(getArticlesQuery, function (err, recordSet) {
            if (err) {
                console.error('Error happened calling Query: ' + err.name + " " + err.message);

            }
            // checking to see if the articles returned as at least one.
            else if (recordSet.length > 0) {
            }
        });

        var requestStoredProcedure = new sql.Request(connection);
        var testId: number = 0;
        var testString: string = 'test';

        requestStoredProcedure.input('pId', testId);
        requestStoredProcedure.input('pString', testString);


        requestStoredProcedure.execute('StoredProcedureName', function (err, recordsets, returnValue) {
            if (err != null) {
                console.error('Error happened calling Query: ' + err.name + " " + err.message);
            }
            else {
                console.info(returnValue);
            }
        });

        var requestStoredProcedureWithOutput = new sql.Request(connection);
        var testId: number = 0;
        var testString: string = 'test';

        requestStoredProcedureWithOutput.input("name", sql.VarChar, "abc");               // varchar(3)
        requestStoredProcedureWithOutput.input("name", sql.VarChar(50), "abc");           // varchar(MAX)
        requestStoredProcedureWithOutput.output("name", sql.VarChar);                     // varchar(8000)
        requestStoredProcedureWithOutput.output("name", sql.VarChar, "abc");              // varchar(3)

        requestStoredProcedureWithOutput.input("name", sql.Decimal, 155.33);              // decimal(18, 0)
        requestStoredProcedureWithOutput.input("name", sql.Decimal(10), 155.33);          // decimal(10, 0)
        requestStoredProcedureWithOutput.input("name", sql.Decimal(10, 2), 155.33);       // decimal(10, 2)

        requestStoredProcedureWithOutput.input("name", sql.DateTime2, new Date());        // datetime2(7)
        requestStoredProcedureWithOutput.input("name", sql.DateTime2(5), new Date());     // datetime2(5)

        requestStoredProcedure.execute('StoredProcedureName', function (err, recordsets, returnValue) {
            if (err != null) {
                console.error('Error happened calling Query: ' + err.name + " " + err.message);
            }
            else {
                console.info(requestStoredProcedureWithOutput.parameters.output.value);
            }
        });
    }
});
