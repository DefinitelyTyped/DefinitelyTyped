import snowflake = require('snowflake-sdk');

snowflake.configure({
    insecureConnect: true,
    logLevel: 'ERROR',
    ocspFailOpen: true,
});

const connection = snowflake.createConnection({
    account: '',
    password: '',
    username: '',
});

connection.connect((err, conn) => {
    conn.execute({
        sqlText: '',
        fetchAsString: ['Boolean', 'JSON'],
        binds: [1, ''],
        complete(err, stmt, rows) {
            stmt.cancel((err, stmt) => {
                //
            });

            stmt.getSqlText(); // $ExpectType string
            stmt.getNumRows(); // $ExpectType number
            stmt.getNumUpdatedRows(); // $ExpectType number
            stmt.getRequestId(); // $ExpectType string
            stmt.getStatementId(); // $ExpectType string
            const cols = stmt.getColumns();
            const col1 = cols[0];
            const stream = stmt.streamRows();
            stream.on('data', data => {
                //
            });
        },
    });

    conn.execute({
        sqlText: '',
        fetchAsString: ['NaN'], // $ExpectError
        binds: [
            [1, ''],
            [2, ''],
        ],
        complete(err, stmt, rows) {
            //
        },
    });
});
