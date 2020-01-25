import { Buffer } from 'buffer';
import * as async from 'async';
import PQ = require('libpq');

// Declaring shims removes assert dependency. These tests are never executed, only typechecked, so this is fine.
declare function assert(value: any, message?: string): void;
declare function assertEqual<T>(actual: T, expected: T, message?: string): void;
declare function assertIfError(value: any): void;
declare function assertNotEqual<T>(actual: T, expected: T, message?: string): void;
declare function assertThrows(fn: () => void, message?: string): void;

// Stub mocha functions
const {describe, it, before, after, beforeEach, afterEach} = null as any as {
    [s: string]: ((s: string, cb: (done: any) => void) => void) & ((cb: (done: any) => void) => void) & {only: any, skip: any};
};

declare const _: { times<T>(n: number, f: () => T): T[] };

declare const ok: Function;

const createTable = (pq: PQ) => {
    pq.exec('CREATE TEMP TABLE test_data(name text, age int)');
    console.log(pq.resultErrorMessage());
    pq.exec("INSERT INTO test_data(name, age) VALUES ('brian', 32), ('aaron', 30), ('', null);");
};

const blink = (n: number, cb: Function) => {
    const connections: PQ[] = [];
    for (let i = 0; i < 30; i++) {
        connections.push(new PQ());
    }
    const connect = (con: PQ, cb: (err?: Error) => void) => {
        con.connect(cb);
    };
    async.each(connections, connect, ok(() => {
        connections.forEach((con) => {
            con.finish();
        });
        cb();
    }));
};

const queryText = "SELECT * FROM generate_series(1, 1000)";

const query = (pq: PQ, cb: Function) => {
    const readError = (message?: string) => {
        cleanup();
        return cb(new Error(message || pq.errorMessage()));
    };

    const onReadable = () => {
        if (!pq.consumeInput()) {
            return readError();
        }

        if (pq.isBusy()) {
            return;
        }

        pq.getResult();

        if (pq.getResult()) {
            return readError('Only one result at a time is accepted');
        }
        cleanup();
        return cb(null, []);
    };

    const sent = pq.sendQuery(queryText);
    if (!sent) return cb(new Error(pq.errorMessage()));
    console.log('sent query');

    const cleanup = () => {
        pq.removeListener('readable', onReadable);
        pq.stopReader();
    };

    pq.on('readable', onReadable);
    pq.startReader();
};

describe('async connection', () => {
    it('works', (done) => {
        const pq = new PQ();
        assert(!pq.connected, 'should have connected set to falsy');
        pq.connect(err => {
            assertIfError(err);
            pq.exec('SELECT NOW()');
            assertEqual(pq.ntuples(), 1);
            done();
        });
    });

    it('works with hard-coded connection parameters', (done) => {
        const pq = new PQ();
        const conString = `host=${process.env.PGHOST || 'localhost'}`;
        pq.connect(conString, done);
    });

    it('returns an error to the callback if connection fails', (done) => {
        new PQ().connect('host=asldkfjasldkfjalskdfjasdf', err => {
            assert(err, 'should have passed an error');
            done();
        });
    });

    it('respects the active domain', (done) => {
        const pq = new PQ();
        const domain = require('domain').create();
        domain.run(() => {
            const activeDomain = process.domain;
            assert(activeDomain, 'Should have an active domain');
            pq.connect(() => {
                assertEqual(process.domain, activeDomain, 'Active domain is lost');
                done();
            });
        });
    });
});

const consume = (pq: PQ, cb: Function) => {
    if (!pq.isBusy()) return cb();
    pq.startReader();
    const onReadable = () => {
        assert(pq.consumeInput(), pq.errorMessage());
        if (pq.isBusy()) {
            console.log('consuming a 2nd buffer of input later...');
            return;
        }
        pq.removeListener('readable', onReadable);
        pq.stopReader();
        cb();
    };
    pq.on('readable', onReadable);
};

describe('async simple query', () => {
    const pq: PQ = null as any;

    it('dispatches simple query', (done: Function) => {
        assert(pq.setNonBlocking(true));
        pq.writable(() => {
            const success = pq.sendQuery('SELECT 1');
            assertEqual(pq.flush(), 0, 'Should have flushed all data to socket');
            assert(success, pq.errorMessage());
            consume(pq, () => {
                assertIfError(pq.errorMessage());
                assert(pq.getResult());
                assertEqual(pq.getResult(), false);
                assertEqual(pq.ntuples(), 1);
                assertEqual(pq.getvalue(0, 0), '1');
                done();
            });
        });
    });

    it('dispatches parameterized query', (done: Function) => {
        const success = pq.sendQueryParams('SELECT $1::text as name', ['Brian']);
        assert(success, pq.errorMessage());
        assertEqual(pq.flush(), 0, 'Should have flushed query text & parameters');
        consume(pq, () => {
            assertIfError(pq.errorMessage());
            assert(pq.getResult());
            assertEqual(pq.getResult(), false);
            assertEqual(pq.ntuples(), 1);
            assertEqual(pq.getvalue(0, 0), 'Brian');
            done();
        });
    });

    it('dispatches named query', (done: Function) => {
        const statementName = 'async-get-name';
        const success = pq.sendPrepare(statementName, 'SELECT $1::text as name', 1);
        assert(success, pq.errorMessage());
        assertEqual(pq.flush(), 0, 'Should have flushed query text');
        consume(pq, () => {
            assertIfError(pq.errorMessage());

            // first time there should be a result
            assert(pq.getResult());

            // call 'getResult' until it returns false indicating
            // there is no more input to consume
            assertEqual(pq.getResult(), false);

            // since we only prepared a statement there should be
            // 0 tuples in the result
            assertEqual(pq.ntuples(), 0);

            // now execute the previously prepared statement
            const success = pq.sendQueryPrepared(statementName, ['Brian']);
            assert(success, pq.errorMessage());
            assertEqual(pq.flush(), 0, 'Should have flushed parameters');
            consume(pq, () => {
                assertIfError(pq.errorMessage());

                // consume the result of the query execution
                assert(pq.getResult());
                assertEqual(pq.ntuples(), 1);
                assertEqual(pq.getvalue(0, 0), 'Brian');

                // call 'getResult' again to ensure we're finished
                assertEqual(pq.getResult(), false);
                done();
            });
        });
    });
});

describe('cancel a request', () => {
    it('works', (done) => {
        const pq = new PQ();
        pq.connectSync();
        const sent = pq.sendQuery('pg_sleep(5000)');
        assert(sent, 'should have sent');
        const canceled = pq.cancel();
        assertEqual(canceled, true, 'should have canceled');
        const hasResult = pq.getResult();
        assert(hasResult, 'should have a result');
        assertEqual(pq.resultStatus(), 'PGRES_FATAL_ERROR');
        assertEqual(pq.getResult(), false);
        pq.exec('SELECT NOW()');
        done();
    });
});

describe('Constructing multiple', () => {
    it('works all at once', () => {
        for (let i = 0; i < 1000; i++) {
            const pq = new PQ();
        }
    });

    it('connects and disconnects each client', (done) => {
        const connect = (n: number, cb: (err?: Error) => void) => {
            const pq = new PQ();
            pq.connect(cb);
        };
        async.times(30, connect, done);
    });
});

describe('COPY IN', () => {
    let pq: PQ;

    before(() => {
        pq = new PQ();
        pq.connectSync();
        createTable(pq);
    });

    after(() => {
        pq.finish();
    });

    it('check existing data assuptions', () => {
        pq.exec('SELECT COUNT(*) FROM test_data');
        assertEqual(pq.getvalue(0, 0), '3');
    });

    it('copies data in', () => {
        const success = pq.exec('COPY test_data FROM stdin');
        assertEqual(pq.resultStatus(), 'PGRES_COPY_IN');

        const buffer = new Buffer("bob\t100\n", 'utf8');
        const res1 = pq.putCopyData(buffer);
        assertEqual(res1, 1);

        const res2 = pq.putCopyEnd();
        assertEqual(res2, 1);

        while (pq.getResult()) {
        }

        pq.exec('SELECT COUNT(*) FROM test_data');
        assertEqual(pq.getvalue(0, 0), '4');
    });

    it('can cancel copy data in', () => {
        const success = pq.exec('COPY test_data FROM stdin');
        assertEqual(pq.resultStatus(), 'PGRES_COPY_IN');

        const buffer = new Buffer("bob\t100\n", 'utf8');
        const res1 = pq.putCopyData(buffer);
        assertEqual(res1, 1);

        const res2 = pq.putCopyEnd('cancel!');
        assertEqual(res2, 1);

        while (pq.getResult()) {
        }
        assert(pq.errorMessage());
        assert(
          pq.errorMessage().includes('cancel!'),
          `${pq.errorMessage()} should have contained "cancel!"`
        );

        pq.exec('SELECT COUNT(*) FROM test_data');
        assertEqual(pq.getvalue(0, 0), '4');
    });
});

describe('COPY OUT', () => {
    let pq: PQ;

    before(() => {
        pq = new PQ();
        pq.connectSync();
        createTable(pq);
    });

    after(() => {
        pq.finish();
    });

    const getRow = (pq: PQ, expected: string) => {
        const result = <Buffer> pq.getCopyData(false);
        assert(result instanceof Buffer, 'Result should be a buffer');
        assertEqual(result.toString('utf8'), expected);
    };

    it('copies data out', () => {
        pq.exec('COPY test_data TO stdin');
        assertEqual(pq.resultStatus(), 'PGRES_COPY_OUT');
        getRow(pq, 'brian\t32\n');
        getRow(pq, 'aaron\t30\n');
        getRow(pq, '\t\\N\n');
        assertEqual(<number> pq.getCopyData(), -1);
    });
});

describe('without being connected', () => {
    it('exec fails', () => {
        const pq = new PQ();
        pq.exec();
        assertEqual(pq.resultStatus(), 'PGRES_FATAL_ERROR');
        assert(pq.errorMessage());
    });

    it('fails on async query', () => {
        const pq = new PQ();
        const success = pq.sendQuery('blah');
        assertEqual(success, false);
        assertEqual(pq.resultStatus(), 'PGRES_FATAL_ERROR');
        assert(pq.errorMessage());
    });

    it('throws when reading while not connected', () => {
        const pq = new PQ();
        assertThrows(() => {
            pq.startReader();
        });
    });

    it('throws when writing while not connected', () => {
        const pq = new PQ();
        assertThrows(() => {
            pq.writable(() => {
            });
        });
    });
});

describe('error info', () => {
    let pq: PQ;

    before(() => {
        pq = new PQ();
        pq.connectSync();
        createTable(pq);
    });

    after(() => {
        pq.finish();
    });

    describe('when there is no error', () => {
        it('everything is null', () => {
            pq.exec('SELECT NOW()');
            assert(!pq.errorMessage(), pq.errorMessage());
            assertEqual(pq.ntuples(), 1);
            assert(pq.resultErrorFields(), undefined);
        });
    });

    describe('when there is an error', () => {
        it('sets all error codes', () => {
            pq.exec('INSERT INTO test_data VALUES(1, NOW())');
            assert(pq.errorMessage());
            const err = pq.resultErrorFields();
            assertNotEqual(err, null);
            assertEqual(err.severity, 'ERROR');
            assertEqual(err.sqlState, '42804');
            assertEqual(err.messagePrimary, 'column "age" is of type integer but expression is of type timestamp with time zone');
            assertEqual(err.messageDetail, undefined);
            assertEqual(err.messageHint, 'You will need to rewrite or cast the expression.');
            assertEqual(err.statementPosition, '33');
            assertEqual(err.internalPosition, undefined);
            assertEqual(err.internalQuery, undefined);
            assertEqual(err.context, undefined);
            assertEqual(err.schemaName, undefined);
            assertEqual(err.tableName, undefined);
            assertEqual(err.dataTypeName, undefined);
            assertEqual(err.constraintName, undefined);
            assertEqual(err.sourceFile, "parse_target.c");
            assert(parseInt(err.sourceLine, 10));
            assertEqual(err.sourceFunction, "transformAssignedExpr");
        });
    });
});

describe('escapeLiteral', () => {
    it('fails to escape when the server is not connected', () => {
        const pq = new PQ();
        const result = pq.escapeLiteral('test');
        assertEqual(result, null);
        assert(pq.errorMessage());
    });

    it('escapes a simple string', () => {
        const pq = new PQ();
        pq.connectSync();
        const result = pq.escapeLiteral('bang');
        assertEqual(result, "'bang'");
    });

    it('escapes a bad string', () => {
        const pq = new PQ();
        pq.connectSync();
        const result = pq.escapeLiteral("'; TRUNCATE TABLE blah;");
        assertEqual(result, "'''; TRUNCATE TABLE blah;'");
    });
});

describe('escapeIdentifier', () => {
    it('fails when the server is not connected', () => {
        const pq = new PQ();
        const result = pq.escapeIdentifier('test');
        assertEqual(result, null);
        assert(pq.errorMessage());
    });

    it('escapes a simple string', () => {
        const pq = new PQ();
        pq.connectSync();
        const result = pq.escapeIdentifier('bang');
        assertEqual(result, '"bang"');
    });
});

describe('connecting', () => {
    it('works', () => {
        const client = new PQ();
        client.connectSync();
    });
});

describe('many connections', () => {
    it('works', (done) => {
        async.timesSeries(10, blink, done);
    });
});

describe('connectSync', () => {
    it('works 50 times in a row', () => {
        const pqs = _.times(50, () => new PQ());
        pqs.forEach((pq) => {
            pq.connectSync();
        });
        pqs.forEach((pq) => {
            pq.finish();
        });
    });
});

describe('connect async', () => {
    const total = 50;
    it(`works ${total} times in a row`, (done) => {
        const pqs = _.times(total, () => new PQ());

        let count = 0;
        const connect = (cb: Function) => {
            pqs.forEach((pq) => {
                pq.connect((err) => {
                    assertIfError(err);
                    count++;
                    pq.startReader();
                    if (count === total) {
                        cb();
                    }
                });
            });
        };
        connect(() => {
            pqs.forEach((pq) => {
                pq.stopReader();
                pq.finish();
            });
            done();
        });
    });
});

describe('multiple queries', () => {
    const pq = new PQ();

    before((done) => {
        pq.connect(done);
    });

    it('first query works', (done) => {
        query(pq, done);
    });

    it('second query works', (done) => {
        query(pq, done);
    });

    it('third query works', (done) => {
        query(pq, done);
    });
});

describe('set & get non blocking', () => {
    let pq: PQ;

    before(() => {
        pq = new PQ();
        pq.connectSync();
        createTable(pq);
    });

    after(() => {
        pq.finish();
    });

    it('is initially set to false', () => {
        assertEqual(pq.isNonBlocking(), false);
    });

    it('can switch back and forth', () => {
        assertEqual(pq.setNonBlocking(true), true);
        assertEqual(pq.isNonBlocking(), true);
        assertEqual(pq.setNonBlocking(), true);
        assertEqual(pq.isNonBlocking(), false);
    });
});

describe('LISTEN/NOTIFY', () => {
    let listener: PQ;
    let notifier: PQ;

    before(() => {
        listener = new PQ();
        notifier = new PQ();
        listener.connectSync();
        notifier.connectSync();
    });

    it('works', () => {
        notifier.exec("NOTIFY testing, 'My Payload'");
        let notice = listener.notifies();
        assertEqual(notice, null);

        listener.exec('LISTEN testing');
        notifier.exec("NOTIFY testing, 'My Second Payload'");
        listener.exec('SELECT NOW()');
        notice = listener.notifies();
        assert(notice, 'listener should have had a notification come in');
        assertEqual(notice.relname, 'testing', 'missing relname == testing');
        assertEqual(notice.extra, 'My Second Payload');
        assert(notice.be_pid);
    });

    after(() => {
        listener.finish();
        notifier.finish();
    });
});

describe('result accessors', () => {
    let pq: PQ;

    before(() => {
        pq = new PQ();
        pq.connectSync();
        createTable(pq);
    });

    after(() => {
        pq.finish();
    });

    before(() => {
        pq.exec("INSERT INTO test_data(name, age) VALUES ('bob', 80) RETURNING *");
        assert(!pq.errorMessage());
    });

    it('has ntuples', () => {
        assertEqual(pq.ntuples(), 1);
    });

    it('has cmdStatus', () => {
        assertEqual(pq.cmdStatus(), 'INSERT 0 1');
    });

    it('has command tuples', () => {
        assertEqual(pq.cmdTuples(), '1');
    });
});

describe('Retrieve server version from connection', () => {
    it('return version number when connected', () => {
        const pq = new PQ();
        pq.connectSync();
        const version = pq.serverVersion();
        assertEqual(typeof version, 'number');
        assert(version > 60000);
    });

    it('return zero when not connected', () => {
        const pq = new PQ();
        const version = pq.serverVersion();
        assertEqual(typeof version, 'number');
        assertEqual(version, 0);
    });
});

describe('getting socket', () => {
    let pq: PQ;

    before(() => {
        pq = new PQ();
        pq.connectSync();
        createTable(pq);
    });

    after(() => {
        pq.finish();
    });

    it('returns -1 when not connected', () => {
        const pq = new PQ();
        assertEqual(pq.socket(), -1);
    });

    it('returns value when connected', () => {
        assert(pq.socket() > 0);
    });
});

describe('connecting with bad credentials', () => {
    it('throws an error', () => {
        try {
            new PQ().connectSync('asldkfjlasdf');
        } catch (e) {
            assertEqual(e.toString().indexOf('connection pointer is NULL'), -1);
            return;
        }

        throw new Error('Should have thrown an exception');
    });
});

describe('connecting with no credentials', () => {
    let pq: PQ;

    before(() => {
        pq = new PQ();
        pq.connectSync();
    });

    it('is connected', () => {
        assert(pq.connected, 'should have connected == true');
    });

    after(() => {
        pq.finish();
        assert(!pq.connected);
    });
});

describe('result checking', () => {
    let pq: PQ;

    before(() => {
        pq = new PQ();
        pq.connectSync();
    });

    after(() => {
        pq.finish();
    });

    it('executes query', () => {
        pq.exec('SELECT NOW() as my_col');
        assertEqual(pq.resultStatus(), 'PGRES_TUPLES_OK');
    });

    it('has 1 tuple', () => {
        assertEqual(pq.ntuples(), 1);
    });

    it('has 1 field', () => {
        assertEqual(pq.nfields(), 1);
    });

    it('has column name', () => {
        assertEqual(pq.fname(0), 'my_col');
    });

    it('has oid type of timestamptz', () => {
        assertEqual(pq.ftype(0), 1184);
    });

    it('has value as a date', () => {
        const now = new Date();
        const val = pq.getvalue(0);
        const date = new Date(Date.parse(val));
        assertEqual(date.getFullYear(), now.getFullYear());
        assertEqual(date.getMonth(), now.getMonth());
    });

    it('can manually clear result multiple times', () => {
        pq.clear();
        pq.clear();
        pq.clear();
    });
});

describe('low-level query integration tests', () => {
    let pq: PQ;

    before(() => {
        pq = new PQ();
        pq.connectSync();
        createTable(pq);
    });

    after(() => {
        pq.finish();
    });

    describe('exec', () => {
        before(() => {
            pq.exec('SELECT * FROM test_data');
        });

        it('has correct tuples', () => {
            assertEqual(pq.ntuples(), 3);
        });

        it('has correct field count', () => {
            assertEqual(pq.nfields(), 2);
        });

        it('has correct rows', () => {
            assertEqual(pq.getvalue(0, 0), 'brian');
            assertEqual(pq.getvalue(1, 1), '30');
            assertEqual(pq.getvalue(2, 0), '');
            assertEqual(pq.getisnull(2, 0), false);
            assertEqual(pq.getvalue(2, 1), '');
            assertEqual(pq.getisnull(2, 1), true);
        });
    });
});

describe('sync query with parameters', () => {
    let pq: PQ;

    before(() => {
        pq = new PQ();
        pq.connectSync();
        createTable(pq);
    });

    after(() => {
        pq.finish();
    });

    it('works with single string parameter', () => {
        const queryText = 'SELECT $1::text as name';
        pq.execParams(queryText, ['Brian']);
        assertEqual(pq.ntuples(), 1);
        assertEqual(pq.getvalue(0, 0), 'Brian');
    });

    it('works with a number parameter', () => {
        const queryText = 'SELECT $1::int as age';
        pq.execParams(queryText, [32]);
        assertEqual(pq.ntuples(), 1);
        assertEqual(pq.getvalue(0, 0), '32');
    });

    it('works with multiple parameters', () => {
        const queryText = 'INSERT INTO test_data(name, age) VALUES($1, $2)';
        pq.execParams(queryText, ['Barkley', 4]);
        assertEqual(pq.resultErrorMessage(), '');
    });
});

describe('prepare and execPrepared', () => {
    let pq: PQ;

    before(() => {
        pq = new PQ();
        pq.connectSync();
        createTable(pq);
    });

    after(() => {
        pq.finish();
    });

    const statementName = 'get-name';

    describe('preparing a statement', () => {
        it('works properly', () => {
            pq.prepare(statementName, 'SELECT $1::text as name', 1);
            assertIfError(pq.resultErrorMessage());
            assertEqual(pq.resultStatus(), 'PGRES_COMMAND_OK');
        });
    });

    describe('executing a prepared statement', () => {
        it('works properly', () => {
            pq.execPrepared(statementName, ['Brian']);
            assertIfError(pq.resultErrorMessage());
            assertEqual(pq.ntuples(), 1);
            assertEqual(pq.nfields(), 1);
            assertEqual(pq.getvalue(0, 0), 'Brian');
        });
    });
});
