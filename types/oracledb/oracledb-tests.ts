import * as oracledb from 'oracledb';


import defaultOracledb from 'oracledb';
// import dotenv from 'dotenv';
import assert from 'assert';



// dotenv.config();

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

                connection.break().then((): void => { });
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
            anotherValue: {
                dir: oracledb.BIND_INOUT,
                type: oracledb.DB_TYPE_NCLOB,
            }
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
        {
            test: undefined,
        },
        {
            resultSet: true,
        },
    );

    assert.deepStrictEqual(result.metaData[0], { name: '1' });

    const { resultSet, lastRowid } = result;

    console.log(lastRowid);
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

interface One {
    one: string;
}

const dbObjectTests = async () => {
    const conn = await oracledb.getConnection();

    interface Test {
        COLUMN1: string;
        COLUMN2: string;
    }

    const TestClass = await conn.getDbObjectClass<Test>('test')

    const test1 = new TestClass({
        COLUMN1: '1234',
        COLUMN2: '1234'
    })
    test1.COLUMN1 = '1234'

    TestClass.prototype;

    interface Geom {
        SDO_GTYPE: number;
        SDO_SRID: string | null;
        SDO_POINT: string | null;
        SDO_ELEM_INFO: number[];
        SDO_ORDINATES: number[];
    }

    const GeomType = await conn.getDbObjectClass<Geom>("MDSYS.SDO_GEOMETRY");
    console.log(GeomType.prototype);

    const geom = new GeomType();

    geom.SDO_GTYPE = 2003;

    geom.SDO_GTYPE = 2003;
    geom.SDO_SRID = null;
    geom.SDO_POINT = null;
    geom.SDO_ELEM_INFO = [1, 1003, 3];
    geom.SDO_ORDINATES = [1, 1, 5, 7];

    geom.getKeys().find((e) => e === 'SDO_ELEM_INFO')

    await conn.execute(
        `INSERT INTO testgeometry (id, geometry) VALUES (:id, :g)`,
        { id: 1, g: geom }
    );

    await conn.execute(
        `INSERT INTO testgeometry (id, geometry) VALUES (:id, :g)`,
        {
            id: 1,
            g: {
                type: "MDSYS.SDO_GEOMETRY",
                val: {
                    SDO_GTYPE: 2003,
                    SDO_SRID: null,
                    SDO_POINT: null,
                    SDO_ELEM_INFO: [1, 1003, 3],
                    SDO_ORDINATES: [1, 1, 5, 7]
                }
            }
        }
    );

    interface OutGeom {
        SDO_GTYPE: number;
        SDO_SRID: string | null;
        SDO_POINT: string | null;
        SDO_ELEM_INFO: oracledb.DBObject_OUT<number>;
        SDO_ORDINATES: oracledb.DBObject_OUT<number>;
    }

    const result = await conn.execute<oracledb.DBObject_OUT<OutGeom>[]>(`SELECT geometry FROM testgeometry WHERE id = 1`);
    const o = result.rows[0][0];
    console.log(o.isCollection);
    o.getKeys()
    o.SDO_ELEM_INFO.getKeys()
    console.log(o.SDO_ELEM_INFO.isCollection);
    console.log(o.SDO_ELEM_INFO.getKeys().find(e => typeof e === 'number'));
    console.log(o.getValues()[0].SDO_ELEM_INFO);
}

const version4Tests = async () => {
    console.log(oracledb.OUT_FORMAT_ARRAY, oracledb.OUT_FORMAT_OBJECT);

    const pool = await oracledb.createPool({});

    const connection = await pool.getConnection();

    const implicitResults = (await connection.execute<One>(
        'SELECT 1 FROM DUAL',
    )).implicitResults as oracledb.ResultSet<One>[];

    (await implicitResults[0].getRow()).one;

    await implicitResults[0].close()

    const implicitResults2 = (await connection.execute<One>(
        'SELECT 1 FROM DUAL',
    )).implicitResults as One[][];

    const results = implicitResults2[0][0];

    console.log(results.one);

    const GeomType = await connection.getDbObjectClass("MDSYS.SDO_GEOMETRY");

    const geom = new GeomType(
        {
            SDO_GTYPE: 2003,
            SDO_SRID: null,
            SDO_POINT: null,
            SDO_ELEM_INFO: [1, 1003, 3],
            SDO_ORDINATES: [1, 1, 5, 7]
        }
    );

    geom.attributes = {
        STREET_NUMBER: { type: 2, typeName: 'NUMBER' },
        LOCATION: {
            type: 2023,
            typeName: 'MDSYS.SDO_POINT_TYPE',
            typeClass: GeomType,
        }
    }

    new geom.attributes.test.typeClass({});

    await connection.execute(
        `INSERT INTO testgeometry (id, geometry) VALUES (:id, :g)`,
        { id: 1, g: geom }
    );

    const sub = await connection.subscribe('test', {
        sql: 'test',
        callback: (message) => {
            console.log(message.queueName);
        }
    });

    console.log(sub.regId);

    const queue = await connection.getQueue('test', {
        payloadType: 'test'
    })

    const {
        name,
        deqOptions,
        enqOptions,
        payloadType,
        payloadTypeClass,
        payloadTypeName
    } = queue;

    const {
        condition,
        consumerName,
        correlation,
        mode,
        msgId,
        navigation,
        transformation,
        visibility,
        wait,
    } = deqOptions;

    const messages = await queue.deqMany(5);

    const lob = await connection.createLob(2);

    await lob.getData();

    const plsql = `
    DECLARE
        c1 SYS_REFCURSOR;
        c2 SYS_REFCURSOR;
    BEGIN
        OPEN c1 FOR SELECT city, postal_code
                    FROM locations
                    WHERE location_id < 1200;
        DBMS_SQL.RETURN_RESULT(c1);

        OPEN C2 FOR SELECT job_id, employee_id, last_name
                    FROM employees
                    WHERE employee_id < 103;
        DBMS_SQL.RETURN_RESULT(c2);
    END;`;

    let result = await connection.execute(plsql);
    console.log(result.implicitResults);

    result = await connection.execute(plsql, [], { resultSet: true });

    for (let i = 0; i < result.implicitResults.length; i++) {
        console.log(' Implicit Result Set', i + 1);
        const rs = result.implicitResults[i] as oracledb.ResultSet<One>; // get the next ResultSet
        let row;
        while ((row = await rs.getRow())) {
            console.log('  ', row);
        }

        await rs.close();
    }

    const queueName = "DEMO_RAW_QUEUE";
    const queue2 = await connection.getQueue(queueName);
    await queue2.enqOne("This is my message");
    await connection.commit();

    const queueName3 = "DEMO_RAW_QUEUE";
    const queue3 = await connection.getQueue(queueName3);
    const msg = await queue3.deqOne();
    await connection.commit();
    console.log(msg.payload.toString());

    const message = new queue.payloadTypeClass(
        {
            NAME: "scott",
            ADDRESS: "The Kennel"
        }
    );
    await queue.enqOne(message);
    await connection.commit();

    const queue5 = await connection.getQueue(queueName, { payloadType: "DEMOQUEUE.USER_ADDRESS_TYPE" });
    const msg5 = await queue.deqOne();
    await connection.commit();
}

const aqTests = async () => {
    const c = await oracledb.getConnection();

    interface QueueItem {
        test: string;
        connor: boolean;
        test2: number;
    }

    const MyClass = await c.getDbObjectClass<QueueItem>('test');
    const q = await c.getQueue<QueueItem>('test');

    q.enqOne('test');
    q.enqOne(new Buffer('test'));
    q.enqOne(new MyClass());

    const msg = await q.deqOne();
    msg.payload
}

interface MyTableRow {
    firstColumn: string;
    secondColumn: number;
}

const testGenerics = async () => {
    const connection = await oracledb.getConnection({
        user: 'test'
    });

    const result = await connection.execute<MyTableRow>('SELECT 1 FROM DUAL');

    console.log(result.rows[0].firstColumn);
    console.log(result.rows[0].secondColumn);

    const result2 = await connection.execute<{ test: string }>(' BEGIN DO_SOMETHING END;', {
        test: {
            dir: oracledb.BIND_OUT,
            val: 'something'
        }
    })

    console.log(result2.outBinds.test);

    const sql = `SELECT FIRST_COLUMN, SECOND_COLUMN FROM SOMEWHERE`;

    const result3 = await connection.executeMany<MyTableRow>(sql, 5);

    console.log(result3.outBinds[0].firstColumn);
}



const test4point1 = async (): Promise<void> => {
    defaultOracledb.poolMaxPerShard = 45;

    await oracledb.createPool({
        poolMaxPerShard: 5,
    });

    const connection = await oracledb.getConnection({
        shardingKey: ['TEST', 1234, new Date(), new Buffer('1234')],
        superShardingKey: ['TEST', 1234, new Date(), new Buffer('1234')],
    });

    connection.clientInfo = '12345';
    connection.dbOp = '12345';
};

export const v5Tests = async (): Promise<void> => {
    console.log(oracledb.SYSPRELIM);
    defaultOracledb.queueRequests = 0;
    defaultOracledb.prefetchRows = 5;
    defaultOracledb.queueMax = 0;
    defaultOracledb.createPool({
        queueRequests: 0,
        queueMax: 5,
    });
    defaultOracledb.initOracleClient({
        configDir: '',
        driverName: '',
        errorUrl: '',
        libDir: '',
    });

    const creds = {
        user: 'test',
        password: 'test',
        connectionString: 'test',
        externalAuth: true,
    };

    await defaultOracledb.startup(creds);

    await defaultOracledb.startup(creds, {
        force: true,
        restrict: true,
        pfile: ''
    });

    await defaultOracledb.shutdown(creds, defaultOracledb.SHUTDOWN_MODE_ABORT);

    const conn = await defaultOracledb.getConnection();

    await conn.startup({
        force: true,
        restrict: true,
        pfile: '',
    });

    await conn.shutdown(defaultOracledb.SHUTDOWN_MODE_ABORT);

    await conn.execute('', {}, {
        prefetchRows: 5,
    });
}
