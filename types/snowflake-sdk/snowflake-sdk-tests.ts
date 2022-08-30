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

const connectCallback = (err: snowflake.SnowflakeError | undefined, conn: snowflake.Connection) => {
    if (err) {
        err.code; // $ExpectType ErrorCode | undefined
        err.sqlState; // $ExpectType string | undefined
        err.data; // $ExpectType object | undefined
        err.response; // $ExpectType object | undefined
        err.responseBody; // $ExpectType string | undefined
        err.cause; // $ExpectType Error | undefined
        err.isFatal; // $ExpectType boolean | undefined
    }
    conn.execute({
        sqlText: '',
        fetchAsString: ['Boolean', 'JSON'],
        binds: [1, ''],
        complete(err, stmt, rows) {
            err; // $ExpectType SnowflakeError | undefined
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

            // These column functions are defined at
            // https://github.com/snowflakedb/snowflake-connector-nodejs/blob/5848cb627cf9ad5b90e0e2a69b4a1abd4b7cefc3/lib/connection/result/column.js#L103-L116.
            col1.isString(); // $ExpectType boolean
            col1.isBinary(); // $ExpectType boolean
            col1.isNumber(); // $ExpectType boolean
            col1.isBoolean(); // $ExpectType boolean
            col1.isDate(); // $ExpectType boolean
            col1.isTime(); // $ExpectType boolean
            col1.isTimestamp(); // $ExpectType boolean
            col1.isTimestampLtz(); // $ExpectType boolean
            col1.isTimestampNtz(); // $ExpectType boolean
            col1.isTimestampTz(); // $ExpectType boolean
            col1.isVariant(); // $ExpectType boolean
            col1.isObject(); // $ExpectType boolean
            col1.isArray(); // $ExpectType boolean

            const stream = stmt.streamRows();
            stream.on('data', data => {
                //
            });
        },
    });

    conn.execute({
        sqlText: '',
        // @ts-expect-error
        fetchAsString: ['NaN'],
        binds: [
            [1, ''],
            [2, ''],
        ],
        complete(err, stmt, rows) {
            //
        },
    });

    // $ExpectType Statement
    const statement = conn.execute({
        sqlText: ''
    });
    // $ExpectType Readable
    const stream = statement.streamRows();
    stream.on('data', data => {
        //
    });
};
connection.connect(connectCallback);
connection.connectAsync(connectCallback).then(() => {});

//  Key pair connections

snowflake.createConnection({
    account: '',
    username: '',
    authenticator: '',
    privateKey: '',
    privateKeyPass: '',
    privateKeyPath: '',
});

//  Oauth connections

snowflake.createConnection({
    account: '',
    username: '',
    authenticator: '',
    token: '',
});

// Application

snowflake.createConnection({
    account: '',
    password: '',
    username: '',
    application: '',
});

// Pool
// $ExpectType Pool<Connection>
const pool = snowflake.createPool({
    account: '',
    username: '',
});
