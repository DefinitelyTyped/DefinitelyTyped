import * as sql from 'mssql';
import * as msnodesqlv8 from 'mssql/msnodesqlv8';

interface Entity {
    value: number;
}

interface AnotherEntity {
    property: string;
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
    pool: {},
    authentication: {
        type: "default",
        options: {
            userName: "user",
            password: "password"
        }
    },
    beforeConnect: (conn) => {
        conn.on('debug', message => console.info(message));
        conn.on('error', err => console.error(err));
        conn.removeAllListeners();
    }
}

var connectionString = 'Server=localhost,1433;Database=database;User Id=username;Password=password;Encrypt=true';

var minimalConfig: sql.config = { server: 'ip' };

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

        requestQuery.query`SELECT * FROM TABLE`.then(res => { });

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

        requestStoredProcedure.execute<[Entity, AnotherEntity]>('StoredProcedureName', function (err, recordsets, returnValue) {
            if (err != null) {
                console.error(`Error happened calling Query: ${err.name} ${err.message}`);
            }
            else {
                console.info(returnValue);
                recordsets.recordsets[0] // $ExpectType IRecordSet<Entity>
                recordsets.recordsets[1] // $ExpectType IRecordSet<AnotherEntity>
            }
        });

        var requestStoredProcedureWithOutput = new sql.Request(connection);
        var testId: number = 0;
        var testString: string = 'test';

        // checking default input/output methods

        requestStoredProcedureWithOutput.input("name", sql.VarChar, "abc");               // varchar(3)
        requestStoredProcedureWithOutput.input("name", sql.VarChar(50), "abc");           // varchar(MAX)
        requestStoredProcedureWithOutput.output("name", sql.VarChar);                     // varchar(8000)
        requestStoredProcedureWithOutput.output("name", sql.VarChar, "abc");              // varchar(3)

        requestStoredProcedureWithOutput.input("name", sql.Decimal, 155.33);              // decimal(18, 0)
        requestStoredProcedureWithOutput.input("name", sql.Decimal(10), 155.33);          // decimal(10, 0)
        requestStoredProcedureWithOutput.input("name", sql.Decimal(10, 2), 155.33);       // decimal(10, 2)

        requestStoredProcedureWithOutput.input("name", sql.DateTime2, new Date());        // datetime2(7)
        requestStoredProcedureWithOutput.input("name", sql.DateTime2(5), new Date());     // datetime2(5)

        requestStoredProcedureWithOutput.input("name", "abc");

        // checking replaceInput method

        requestStoredProcedureWithOutput.replaceInput("name", sql.VarChar, "abc");               // varchar(3)
        requestStoredProcedureWithOutput.replaceInput("name", sql.VarChar(50), "abc");           // varchar(MAX)

        requestStoredProcedureWithOutput.replaceInput("name", sql.Decimal, 155.33);              // decimal(18, 0)
        requestStoredProcedureWithOutput.replaceInput("name", sql.Decimal(10), 155.33);          // decimal(10, 0)
        requestStoredProcedureWithOutput.replaceInput("name", sql.Decimal(10, 2), 155.33);       // decimal(10, 2)

        requestStoredProcedureWithOutput.replaceInput("name", sql.DateTime2, new Date());        // datetime2(7)
        requestStoredProcedureWithOutput.replaceInput("name", sql.DateTime2(5), new Date());     // datetime2(5)

        requestStoredProcedureWithOutput.replaceInput("name", "abc");

        // executing stored procedure

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

function test_connection_string_parser() {
    var parsedConfig: sql.config = sql.ConnectionPool.parseConnectionString(connectionString);
}

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

    table.columns.add('col1', sql.VarChar, { length: sql.MAX, nullable: false });
    table.columns.add('col2', sql.Int, { nullable: false, identity: true });
    table.columns.add('col3', sql.VarChar, { nullable: false, readOnly: true });
    table.columns.add('col4', sql.VarChar, { nullable: false, length: 20 });
    table.columns.add('col5', sql.Decimal(7, 2), { nullable: false});

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
    connection.query('SELECT 1').then((recordset) => { });
    connection.query<Entity>('SELECT 1 as value').then(res => { });
    connection.query`SELECT ${1}`.then((recordset) => { });
    connection.batch('create procedure #temporary as select * from table').then((recordset) => { });
    connection.batch<Entity>('create procedure #temporary as select * from table;select 1 as value').then((recordset) => { });
    connection.batch`create procedure #temporary as select ${1} from table`.then((recordset) => { });
    connection.batch<Entity>`create procedure #temporary as select ${1} from table`.then((recordset) => { });

    var preparedStatment = new sql.PreparedStatement(connection);
    preparedStatment.prepare("SELECT @myValue").then(() => { });
    preparedStatment.execute({ myValue: 1 }).then((recordSet) => { });
    preparedStatment.unprepare().then(() => { });

    const transaction = new sql.Transaction(connection);
    transaction.begin().then(() => { });
    transaction.begin(sql.ISOLATION_LEVEL.READ_COMMITTED).then(() => {}).catch(() => {});
    transaction.begin(sql.ISOLATION_LEVEL.READ_COMMITTED).then(trans => {}).catch(err => {});
    transaction.begin(undefined, err => {
        err; // $ExpectType ConnectionError | TransactionError
    });
    (async () => {
        await transaction.begin();
        transaction.begin(sql.ISOLATION_LEVEL.READ_COMMITTED)
    })();
    transaction.commit().then(() => { });
    transaction.rollback().then(() => { });

    var request = new sql.Request();
    request.batch('create procedure #temporary as select * from table;select 1 as value').then((recordset) => { });
    request.batch<Entity>('create procedure #temporary as select * from table;select 1 as value').then((recordset) => { });
    request.batch`create procedure #temporary as select * from table;select ${1} as value`.then((recordset) => { });
    request.batch<Entity>`create procedure #temporary as select * from table;select ${1} as value`.then((recordset) => { });
    request.bulk(new sql.Table("table_name")).then(() => { });
    request.query('SELECT 1').then((recordset) => { });
    request.query`SELECT ${1} as value`.then(res => { });
    request.query<Entity>('SELECT 1 as value').then(res => { });
    request.query`SELECT ${1}`.then((recordset) => { });
    request.query<Entity>`SELECT ${1}`.then((recordset) => { });
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

function test_prepared_statement_constructor() {
    // Request can be constructed with a connection, preparedStatment, transaction or no arguments
    var connection: sql.ConnectionPool = new sql.ConnectionPool(config);
    var preparedStatment = new sql.PreparedStatement(connection);
    var transaction = new sql.Transaction(connection);

    var preparedSatement1 = new sql.PreparedStatement(connection);
    var preparedSatement2 = new sql.PreparedStatement(transaction);
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

function test_rows_and_columnns() {
    var table = new sql.Table('#temp_table3');
    table.columns.forEach(col => col.name)
}

function test_mssql_errors() {
    // Test constructors
    const sqlDriverError = new Error('mock error');
    const mssqlStringError = new sql.MSSQLError('Something went wrong');
    const baseMSSQLError = new sql.MSSQLError(sqlDriverError, 'EREQUEST');
    const connectionError = new sql.ConnectionError(sqlDriverError, 'ELOGIN');
    const requestError = new sql.RequestError(sqlDriverError, 'EREQUEST');
    const preparedStatementError = new sql.PreparedStatementError(sqlDriverError, 'EINJECT');
    const transactionError = new sql.TransactionError(sqlDriverError, 'EABORT');

    // Test inheritance
    if (
        'name' in baseMSSQLError &&
        'name' in connectionError &&
        'name' in requestError &&
        'name' in preparedStatementError &&
        'name' in transactionError
    ) {
        let name: string = baseMSSQLError.name;
        let msg: string = requestError.message;
        let lineNo: number = requestError.lineNumber;
        let err: Error = requestError.originalError;
        err = connectionError.originalError;
        err = preparedStatementError.originalError;
        err = transactionError.originalError;
    }
}

async function test_global_connect_config() {
    const value = 'test_value';
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .query('select * from mytable where id = @input_parameter')

        console.dir(result1)

        // Stored procedure

        let result2 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .output('output_parameter', sql.VarChar(50))
            .execute('procedure_name')

        console.dir(result2)
    } catch (err) {
        // ... error checks
    }
}

function test_globa_request_callback_config() {
    const value = 'test_value';
    sql.connect(config, err => {
        // ... error checks

        // Query

        new sql.Request().query('select 1 as number', (err, result) => {
            // ... error checks

            console.dir(result)
        })

        // Stored Procedure

        new sql.Request()
        .input('input_parameter', sql.Int, value)
        .output('output_parameter', sql.VarChar(50))
        .execute('procedure_name', (err, result) => {
            // ... error checks

            console.dir(result)
        })
    })
}

function test_global_request_promise_config() {
    const value = 'test_value';
    sql.connect(connectionString).then(pool => {
        // Query

        return pool.request()
            .input('input_parameter', sql.Int, value)
            .query('select * from mytable where id = @input_parameter')
    }).then(() => { }).catch(err => { });
}

async function test_global_connect_connection_string() {
    const value = 'test_value';
    try {
        let pool = await sql.connect(connectionString)
        let result1 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .query('select * from mytable where id = @input_parameter')

        console.dir(result1)

        // Stored procedure

        let result2 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .output('output_parameter', sql.VarChar(50))
            .execute('procedure_name')

        console.dir(result2)
    } catch (err) {
        // ... error checks
    }
}

function test_globa_request_callback_connection_string() {
    const value = 'test_value';
    sql.connect(connectionString, err => {
        // ... error checks

        // Query

        new sql.Request().query('select 1 as number', (err, result) => {
            // ... error checks

            console.dir(result)
        })

        // Stored Procedure

        new sql.Request()
        .input('input_parameter', sql.Int, value)
        .output('output_parameter', sql.VarChar(50))
        .execute('procedure_name', (err, result) => {
            // ... error checks

            console.dir(result)
        })
    })
}

function test_global_request_promise_connection_string() {
    const value = 'test_value';
    sql.connect(connectionString).then(pool => {
        // Query

        return pool.request()
            .input('input_parameter', sql.Int, value)
            .query('select * from mytable where id = @input_parameter')
    }).then(() => { }).catch(err => { });
}

function test_connection_options() {
    sql.connect({
        options: {
            // @ts-expect-error
            useColumnNames: false,
        },
    }).then(() => {
        // noop
    });
}
