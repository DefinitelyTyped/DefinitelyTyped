import * as sql from 'mssql';
import * as msnodesqlv8 from 'mssql/msnodesqlv8';

interface Entity {
    value: number;
}

var config: sql.config = {
    user: 'user',
    password: 'password',
    server: 'ip',
    database: 'database',
    connectionTimeout: 10000,
    options: {
        encrypt: true
    },
    pool: {
        autostart: true
    }
}

var connectionStringTest: sql.ConnectionPool = new sql.ConnectionPool("connectionstring", (err) => {
    if (err) {
        return err;
    }
});

var connection: sql.ConnectionPool = new sql.ConnectionPool(config, function (err: any) {
    if (err != null) {
        console.warn("Issue with connecting to SQL Server!");
    }
    else {
        connection.query`SELECT ${1} as value`.then(res => { });
        var requestQuery = new sql.Request(connection);

        var getArticlesQuery = "SELECT * FROM TABLE";

        requestQuery.query(getArticlesQuery, function (err, result) {
            if (err) {
                console.error(`Error happened calling Query: ${err.name} ${err.message}`);
            }
            // checking to see if the articles returned as at least one.
            else if (result.recordset.length > 0) {
            }
        });

        getArticlesQuery = "SELECT 1 as value FROM TABLE";

        requestQuery.query<Entity>(getArticlesQuery, function (err, result) {
            if (err) {
                console.error(`Error happened calling Query: ${err.name} ${err.message}`);

            }
            // checking to see if the articles returned as at least one.
            else if (result.recordset.length > 0 && result.recordset[0].value) {
            }
        });

        var requestStoredProcedure = new sql.Request(connection);
        var testId: number = 0;
        var testString: string = 'test';

        requestStoredProcedure.input('pId', testId);
        requestStoredProcedure.input('pString', testString);


        requestStoredProcedure.execute('StoredProcedureName', function (err, recordsets, returnValue) {
            if (err != null) {
                console.error(`Error happened calling Query: ${err.name} ${err.message}`);
            }
            else {
                console.info(returnValue);
            }
        });

        requestStoredProcedure.execute<Entity>('StoredProcedureName', function (err, recordsets, returnValue) {
            if (err != null) {
                console.error(`Error happened calling Query: ${err.name} ${err.message}`);
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
                console.error(`Error happened calling Query: ${err.name} ${err.message}`);
            }
            else {
                console.info(requestStoredProcedureWithOutput.parameters['output'].value);
            }
        });

        requestStoredProcedure.execute<Entity>('StoredProcedureName', function (err, recordsets, returnValue) {
            if (err != null) {
                console.error(`Error happened calling Query: ${err.name} ${err.message}`);
            }
            else {
                console.info(requestStoredProcedureWithOutput.parameters['output'].value);
            }
        });
    }
});

function test_table() {
    var table = new sql.Table('#temp_table');

    table.create = true;

    table.columns.add('name', sql.VarChar(sql.MAX), { nullable: false });
    table.columns.add('type', sql.Int, { nullable: false });
    table.columns.add('amount', sql.Decimal(7, 2), { nullable: false });

    table.rows.add('name', 42, 3.50);
    table.rows.add('name2', 7, 3.14);
}

function test_table2() {
    var table = new sql.Table('#temp_table2');

    table.create = true;

    ([
        { name: 'name', type: { typeName: 'VarChar', length: sql.MAX }, nullable: false },
        { name: 'type', type: { typeName: 'Int' }, nullable: false },
        { name: 'type', type: { typeName: 'Decimal', precision: 7, scale: 2 }, nullable: false }
    ] as any[])
        .forEach((col: sql.IColumn) =>
            table.columns.add(col.name, _getSqlType(col.type), { nullable: col.nullable }));

    [['name', 42, 3.50], ['name2', 7, 3.14]].forEach((row: sql.IRow) => table.rows.add(...row));
}

function _getSqlType(type: any): sql.ISqlType {
    return sql.TYPES[type.typeName](type.length | type.precision, type.scale);
}

function test_promise_returns() {
    // Methods return a promises if the callback is omitted.
    var connection: sql.ConnectionPool = new sql.ConnectionPool(config);
    connection.connect().then(() => { });
    connection.close().then(() => { });

    var preparedStatment = new sql.PreparedStatement(connection);
    preparedStatment.prepare("SELECT @myValue").then(() => { });
    preparedStatment.execute({ myValue: 1 }).then((recordSet) => { });
    preparedStatment.unprepare().then(() => { });

    var transaction = new sql.Transaction(connection);
    transaction.begin().then(() => { });
    transaction.commit().then(() => { });
    transaction.rollback().then(() => { });

    var request = new sql.Request();
    request.batch('create procedure #temporary as select * from table').then((recordset) => { });
    request.batch<Entity>('create procedure #temporary as select * from table;select 1 as value').then((recordset) => { });
    request.bulk(new sql.Table("table_name")).then(() => { });
    request.query('SELECT 1').then((recordset) => { });
    request.query<Entity>('SELECT 1 as value').then(res => { });
    request.execute('procedure_name').then((recordset) => { });
}


function test_request_constructor() {
    // Request can be constructed with a connection, preparedStatment, transaction or no arguments
    var connection: sql.ConnectionPool = new sql.ConnectionPool(config);
    var preparedStatment = new sql.PreparedStatement(connection);
    var transaction = new sql.Transaction(connection);

    var request1 = new sql.Request(connection);
    var request2 = new sql.Request(preparedStatment);
    var request3 = new sql.Request(transaction);
    var request4 = new sql.Request();
}

function test_classes_extend_eventemitter() {
    var connection: sql.ConnectionPool = new sql.ConnectionPool(config);
    var transaction = new sql.Transaction();
    var request = new sql.Request();
    var preparedStatment = new sql.PreparedStatement();

    connection.on('connect', () => { });
    transaction.on('begin', () => { });
    transaction.on('commit', () => { });
    transaction.on('rollback', () => { });
    request.on('done', () => { });
    request.on('error', () => { });

    preparedStatment.on('error', () => { })
}

async function test_msnodesqlv8() {
    const connection = new msnodesqlv8.ConnectionPool({ server: "localhost", database: "master", options: { trustedConnection: true } });
    await connection.connect();
    const result = await connection.query`SELECT * FROM sys.databases`;
    await connection.close();
}
