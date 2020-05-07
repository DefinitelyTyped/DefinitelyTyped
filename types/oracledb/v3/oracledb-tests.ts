import * as oracledb from 'oracledb';
import * as dotenv from 'dotenv';
import * as assert from 'assert';

dotenv.config();

/*

TABLE SETUP FOR TESTING:

CREATE TABLE CONNOR_TEST_TABLE (
    TEST VARCHAR2(20) NOT NULL,
    CLOB_COLUMN CLOB
);

*/

const {
    DB_CONNECTION_STRING,
    // DB_MAX_ROWS,
    // DB_PAGE_SIZE,
    DB_PASSWORD,
    // DB_POOL_MAX,
    // DB_POOL_MIN,
    DB_USER,
} = process.env;

const initSession = (connection: oracledb.Connection, requestedTag: string, callback: () => void): void => {
    connection.execute(`alter session set nls_date_format = 'YYYY-MM-DD' nls_language = AMERICAN`, callback);
};

const testBreak = (connection: oracledb.Connection): Promise<void> =>
    new Promise(
        (resolve): void => {
            console.log('Testing connection.execute()...');

            connection.execute(
                `   BEGIN
                        dbms_lock.sleep(:seconds);
                    END;
                `,
                [2],
                (error: oracledb.DBError): void => {
                    // ORA-01013: user requested cancel of current operation
                    assert(error.message.includes('ORA-01013'), 'message not defined for DB error');
                    assert(error.errorNum !== undefined, 'errorNum not defined for DB error');
                    assert(error.offset !== undefined, 'offset not defined for DB error');

                    return resolve();
                },
            );

            setTimeout((): void => {
                console.log('Testing connection.execute()...');

                connection.break().then((): void => {});
            }, 1000);
        },
    );

const testGetStatmentInfo = async (connection: oracledb.Connection): Promise<void> => {
    console.log('Testing connection.getStatementInfo()...');

    const info = await connection.getStatementInfo('SELECT 1 FROM CONNOR_TEST_TABLE WHERE SYSDATE > :myDate');

    assert.deepStrictEqual(
        info.metaData[0],
        {
            name: '1',
            fetchType: 2002,
            dbType: 2,
            nullable: true,
            precision: 0,
            scale: -127,
        },
        'connection.getStatementInfo() has invalid metaData field in its response',
    );

    assert(
        info.bindNames.findIndex(s => s === 'MYDATE') >= 0,
        'connection.getStatementInfo() has invalid bindNames field in its response',
    );
    assert(info.statementType === 1, 'connection.getStatementInfo() has invalid statementType field in its response');

    return;
};

const testQueryStream = async (connection: oracledb.Connection): Promise<void> =>
    new Promise(resolve => {
        console.log('Testing connection.queryStream()...');

        const stream = connection.queryStream('SELECT 1 FROM DUAL WHERE 10 < :myValue', {
            myValue: {
                dir: oracledb.BIND_IN,
                maxSize: 50,
                type: oracledb.NUMBER,
                val: 20,
            },
        });

        let data = '';

        stream.on('data', chunk => {
            data += chunk;
        });

        stream.on('metadata', metadata => {
            assert.deepStrictEqual(metadata[0], {
                name: '1',
            });
        });

        stream.on('end', () => {
            return resolve(JSON.parse(data));
        });

        stream.on('error', err => {
            throw err;
        });
    });

const createAndPopulateLob = (connection: oracledb.Connection): Promise<oracledb.Lob> =>
    new Promise(resolve => {
        console.log('Testing connection.createLob()...');

        connection.createLob(oracledb.CLOB).then(lob => {
            lob.write('abcdefg', 'utf-8', err => {
                if (err) {
                    throw err;
                }

                return resolve(lob);
            });
        });
    });

const testResultSet = async (connection: oracledb.Connection): Promise<void> => {
    console.log('Testing ResultSet...');

    const result = await connection.execute(
        `   SELECT 1 FROM DUAL
            UNION
            SELECT 2 FROM DUAL
            UNION
            SELECT 3 FROM DUAL`,
        {},
        {
            resultSet: true,
        },
    );

    assert.deepStrictEqual(result.metaData[0], { name: '1' });

    const { resultSet } = result;

    console.log('Testing resultSet.getRow()...');

    const row = await resultSet.getRow();

    assert.deepStrictEqual(row, [1]);

    console.log('Testing resultSet.getRows()...');

    const rows = await resultSet.getRows(1);

    assert.deepStrictEqual(rows, [[2]]);

    console.log('Testing resultSet.close()...');

    await resultSet.close();
};

const runPromiseTests = async (): Promise<void> => {
    try {
        if (typeof DB_USER !== 'string') {
            throw new Error('DB_USER must be fined');
        }
        if (typeof DB_PASSWORD !== 'string') {
            throw new Error('DB_PASSWORD must be fined');
        }
        if (typeof DB_CONNECTION_STRING !== 'string') {
            throw new Error('DB_CONNECTION_STRING must be fined');
        }

        console.log('Testing createPool()...');

        await oracledb.createPool({
            connectString: DB_CONNECTION_STRING,
            // edition: 'myEdition',
            events: true,
            externalAuth: false,
            homogeneous: true,
            password: DB_PASSWORD,
            poolAlias: 'myPool',
            poolIncrement: 1,
            poolMax: 5,
            poolMin: 3,
            poolPingInterval: 60,
            poolTimeout: 60,
            queueTimeout: 60000,
            sessionCallback: initSession,
            stmtCacheSize: 5,
            user: DB_USER,
        });

        console.log('Testing getPool()...');

        const pool = oracledb.getPool('myPool');

        console.log('Testing pool.getConnection()...');

        const connection = await pool.getConnection();

        await testBreak(connection);

        // await connection.subscribe('testNotification', {
        //     sql: 'SELECT * FROM CONNOR_TEST_TABLE',
        //     callback: async message => {
        //         assert.strictEqual(message.type, oracledb.SUBSCR_EVENT_TYPE_OBJ_CHANGE);

        //         await connection.unsubscribe('testNotification');
        //     }
        // })

        const lob = 'test'; //await createAndPopulateLob(connection);

        console.log('Testing connection.executeMany()...');

        // const results = await connection.executeMany(
        //     `INSERT INTO CONNOR_TEST_TABLE VALUES(
        //         :stringValue,
        //         NULL
        //     )`,
        //     [
        //         {
        //             stringValue: 'test',
        //             // clobValue: lob,
        //         },
        //         {
        //             stringValue: 'test2',
        //             // clobValue: lob,
        //         },
        //     ],
        //     {
        //         autoCommit: false,
        //         batchErrors: false,
        //         bindDefs: {
        //             stringValue: {
        //                 dir: oracledb.BIND_IN,
        //                 maxSize: 50,
        //                 type: oracledb.STRING,
        //             },
        //             // clobValue: {
        //             //     maxSize: 10,
        //             //     dir: oracledb.BIND_IN,
        //             //     type: oracledb.CLOB,
        //             // }
        //         },
        //         dmlRowCounts: false,
        //     },
        // );

        console.log('Testing lob.close()...');

        // await lob.close();

        console.log('Testing connection.commit()...');

        await connection.commit();

        console.log('Testing connection.changePassword()...');

        await connection.changePassword(DB_USER, DB_PASSWORD, DB_PASSWORD);

        await testGetStatmentInfo(connection);

        await testQueryStream(connection);

        console.log('Testing connection.ping()...');

        await connection.ping();

        console.log('Testing connection.rollback()...');

        await connection.rollback();

        await testResultSet(connection);

        console.log('Testing connection.close()...');

        await connection.close({ drop: true });

        console.log('Testing pool.close()...');

        await pool.close(5);
    } catch (err) {
        console.log(err.message);
    }
};

runPromiseTests();
