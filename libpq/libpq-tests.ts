/// <reference types="node" />
/// <reference types="mocha" />

import * as assert from 'assert';
import * as async from 'async';
import * as PQ from 'libpq';

declare const ok: any;

var createTable = function(pq) {
  pq.exec('CREATE TEMP TABLE test_data(name text, age int)')
  console.log(pq.resultErrorMessage());
  pq.exec("INSERT INTO test_data(name, age) VALUES ('brian', 32), ('aaron', 30), ('', null);")
};

var helper = {
  setupIntegration: function() {
    before(function() {
      this.pq = new PQ();
      this.pq.connectSync();
      createTable(this.pq);
    });

    after(function() {
      this.pq.finish();
    });
  }
};

describe('async connection', () => {
  it('works', done => {
    const pq = new PQ();
    assert(!pq.connected, 'should have connected set to falsy');
    pq.connect(err => {
      assert.ifError(err);
      pq.exec('SELECT NOW()');
      assert.equal(pq.connected, true, 'should have connected set to true');
      assert.equal(pq.ntuples(), 1);
      done();
    });
  });

  it('works with hard-coded connection parameters', done => {
    const pq = new PQ();
    const conString =`host=${process.env.PGHOST || 'localhost'}`;
    pq.connect(conString, done);
  });

  it('returns an error to the callback if connection fails', done => {
    new PQ().connect('host=asldkfjasldkfjalskdfjasdf', err => {
      assert(err, 'should have passed an error');
      done();
    });
  });

  it('respects the active domain', done => {
    const pq = new PQ();
    const domain = require('domain').create();
    domain.run(() => {
      const activeDomain = process.domain;
      assert(activeDomain, 'Should have an active domain');
      pq.connect(err => {
        assert.strictEqual(process.domain, activeDomain, 'Active domain is lost');
        done();
      });
    });
  });
});

const consume = (pq, cb) => {
  if(!pq.isBusy()) return cb();
  pq.startReader();
  const onReadable = () => {
    assert(pq.consumeInput(), pq.errorMessage());
    if(pq.isBusy()) {
      console.log('consuming a 2nd buffer of input later...')
      return;
    }
    pq.removeListener('readable', onReadable);
    pq.stopReader();
    cb();
  };
  pq.on('readable', onReadable);
};

describe('async simple query', () => {
  helper.setupIntegration();

  it('dispatches simple query', function(done) {
    const pq = this.pq;
    assert(this.pq.setNonBlocking(true));
    this.pq.writable(() => {
      const success = pq.sendQuery('SELECT 1');
      assert.strictEqual(pq.flush(), 0, 'Should have flushed all data to socket');
      assert(success, pq.errorMessage());
      consume(pq, () => {
        assert.ifError(pq.errorMessage());
        assert(pq.getResult());
        assert.strictEqual(pq.getResult(), false);
        assert.strictEqual(pq.ntuples(), 1);
        assert.strictEqual(pq.getvalue(0, 0), '1');
        done();
      });
    });
  });

  it('dispatches parameterized query', function(done) {
    const pq = this.pq;
    const success = pq.sendQueryParams('SELECT $1::text as name', ['Brian']);
    assert(success, pq.errorMessage());
    assert.strictEqual(pq.flush(), 0, 'Should have flushed query text & parameters');
    consume(pq, () => {
      assert.ifError(pq.errorMessage());
      assert(pq.getResult());
      assert.strictEqual(pq.getResult(), false);
      assert.strictEqual(pq.ntuples(), 1);
      assert.equal(pq.getvalue(0, 0), 'Brian');
      done();
    })
  });

  it('dispatches named query', function(done) {
    const pq = this.pq;
    const statementName = 'async-get-name';
    const success = pq.sendPrepare(statementName, 'SELECT $1::text as name', 1);
    assert(success, pq.errorMessage());
    assert.strictEqual(pq.flush(), 0, 'Should have flushed query text');
    consume(pq, () => {
      assert.ifError(pq.errorMessage());

      //first time there should be a result
      assert(pq.getResult());

      //call 'getResult' until it returns false indicating
      //there is no more input to consume
      assert.strictEqual(pq.getResult(), false);

      //since we only prepared a statement there should be
      //0 tuples in the result
      assert.equal(pq.ntuples(), 0);

      //now execute the previously prepared statement
      const success = pq.sendQueryPrepared(statementName, ['Brian']);
      assert(success, pq.errorMessage());
      assert.strictEqual(pq.flush(), 0, 'Should have flushed parameters');
      consume(pq, () => {
        assert.ifError(pq.errorMessage());

        //consume the result of the query execution
        assert(pq.getResult());
        assert.equal(pq.ntuples(), 1);
        assert.equal(pq.getvalue(0, 0), 'Brian');

        //call 'getResult' again to ensure we're finished
        assert.strictEqual(pq.getResult(), false);
        done();
      });
    });
  });
});

describe('cancel a request', function() {
  it('works', function(done) {
    var pq = new PQ();
    pq.connectSync();
    var sent = pq.sendQuery('pg_sleep(5000)');
    assert(sent, 'should have sent');
    var canceled = pq.cancel();
    assert.strictEqual(canceled, true, 'should have canceled');
    var hasResult = pq.getResult();
    assert(hasResult, 'should have a result');
    assert.equal(pq.resultStatus(), 'PGRES_FATAL_ERROR');
    assert.equal(pq.getResult(), false);
    pq.exec('SELECT NOW()');
    done();
  });

  it('returns (not throws) an error if not connected', function(done) {
    var pq = new PQ();
    assert.doesNotThrow(function () {
      pq.cancel(function (err) {
        assert(err, 'should raise an error when not connected');
      });
    });
    done();
  });
});

describe('Constructing multiple', function() {
  it('works all at once', function() {
    for(var i = 0; i < 1000; i++) {
      var pq = new PQ();
    }
  });

  it('connects and disconnects each client', function(done) {
    var connect = function(n, cb) {
      var pq = new PQ();
      pq.connect(cb);
    };
    async.times(30, connect, done);
  });
});

describe('COPY IN', function() {
  helper.setupIntegration();

  it('check existing data assuptions', function() {
    this.pq.exec('SELECT COUNT(*) FROM test_data');
    assert.equal(this.pq.getvalue(0, 0), 3);
  });

  it('copies data in', function() {
    var success = this.pq.exec('COPY test_data FROM stdin');
    assert.equal(this.pq.resultStatus(), 'PGRES_COPY_IN');

    var buffer = Buffer("bob\t100\n", 'utf8');
    var res = this.pq.putCopyData(buffer);
    assert.strictEqual(res, 1);

    var res = this.pq.putCopyEnd();
    assert.strictEqual(res, 1);

    while(this.pq.getResult()) {}

    this.pq.exec('SELECT COUNT(*) FROM test_data');
    assert.equal(this.pq.getvalue(0, 0), 4);
  });

  it('can cancel copy data in', function() {
    var success = this.pq.exec('COPY test_data FROM stdin');
    assert.equal(this.pq.resultStatus(), 'PGRES_COPY_IN');

    var buffer = Buffer("bob\t100\n", 'utf8');
    var res = this.pq.putCopyData(buffer);
    assert.strictEqual(res, 1);

    var res = this.pq.putCopyEnd('cancel!');
    assert.strictEqual(res, 1);

    while(this.pq.getResult()) {}
    assert(this.pq.errorMessage());
    assert(this.pq.errorMessage().indexOf('cancel!') > -1, this.pq.errorMessage() + ' should have contained "cancel!"');

    this.pq.exec('SELECT COUNT(*) FROM test_data');
    assert.equal(this.pq.getvalue(0, 0), 4);
  });
});

describe('COPY OUT', function() {
  helper.setupIntegration();

  var getRow = function(pq, expected) {
    var result = pq.getCopyData(false);
    assert(result instanceof Buffer, 'Result should be a buffer');
    assert.equal(result.toString('utf8'), expected);
  };

  it('copies data out', function() {
    this.pq.exec('COPY test_data TO stdin');
    assert.equal(this.pq.resultStatus(), 'PGRES_COPY_OUT');
    getRow(this.pq, 'brian\t32\n');
    getRow(this.pq, 'aaron\t30\n');
    getRow(this.pq, '\t\\N\n');
    assert.strictEqual(this.pq.getCopyData(), -1);
  });
});

describe('without being connected', function() {
  it('exec fails', function() {
    var pq = new PQ();
    pq.exec();
    assert.equal(pq.resultStatus(), 'PGRES_FATAL_ERROR');
    assert(pq.errorMessage());
  });

  it('fails on async query', function() {
    var pq = new PQ();
    var success = pq.sendQuery('blah');
    assert.strictEqual(success, false);
    assert.equal(pq.resultStatus(), 'PGRES_FATAL_ERROR');
    assert(pq.errorMessage());
  });

  it('throws when reading while not connected', function() {
    var pq = new PQ();
    assert.throws(function() {
      pq.startReader();
    });
  });

  it('throws when writing while not connected', function() {
    var pq = new PQ();
    assert.throws(function() {
      pq.writable(function() {
      });
    });
  });
})

describe('error info', function() {
  helper.setupIntegration();

  describe('when there is no error', function() {

    it('everything is null', function() {
      var pq = this.pq;
      pq.exec('SELECT NOW()');
      assert(!pq.errorMessage(), pq.errorMessage());
      assert.equal(pq.ntuples(), 1);
      assert(pq.resultErrorFields(), null);
    });
  });

  describe('when there is an error', function() {

    it('sets all error codes', function() {
      var pq = this.pq;
      pq.exec('INSERT INTO test_data VALUES(1, NOW())');
      assert(pq.errorMessage());
      var err = pq.resultErrorFields();
      assert.notEqual(err, null);
      assert.equal(err.severity, 'ERROR');
      assert.equal(err.sqlState, 42804);
      assert.equal(err.messagePrimary, 'column "age" is of type integer but expression is of type timestamp with time zone');
      assert.equal(err.messageDetail, undefined);
      assert.equal(err.messageHint, 'You will need to rewrite or cast the expression.');
      assert.equal(err.statementPosition, 33);
      assert.equal(err.internalPosition, undefined);
      assert.equal(err.internalQuery, undefined);
      assert.equal(err.context, undefined);
      assert.equal(err.schemaName, undefined);
      assert.equal(err.tableName, undefined);
      assert.equal(err.dataTypeName, undefined);
      assert.equal(err.constraintName, undefined);
      assert.equal(err.sourceFile, "parse_target.c");
      assert(parseInt(err.sourceLine));
      assert.equal(err.sourceFunction, "transformAssignedExpr");
    });
  });
});

describe('escapeLiteral', function() {
  it('fails to escape when the server is not connected', function() {
    var pq = new PQ();
    var result = pq.escapeLiteral('test');
    assert.strictEqual(result, null);
    assert(pq.errorMessage());
  });

  it('escapes a simple string', function() {
    var pq = new PQ();
    pq.connectSync();
    var result = pq.escapeLiteral('bang');
    assert.equal(result, "'bang'");
  });

  it('escapes a bad string', function() {
    var pq = new PQ();
    pq.connectSync();
    var result = pq.escapeLiteral("'; TRUNCATE TABLE blah;");
    assert.equal(result, "'''; TRUNCATE TABLE blah;'");
  });
});

describe('escapeIdentifier', function() {
  it('fails when the server is not connected', function() {
    var pq = new PQ();
    var result = pq.escapeIdentifier('test');
    assert.strictEqual(result, null);
    assert(pq.errorMessage());
  });

  it('escapes a simple string', function() {
    var pq = new PQ();
    pq.connectSync();
    var result = pq.escapeIdentifier('bang');
    assert.equal(result, '"bang"');
  });
});

describe('connecting', function() {
  it('works', function() {
    var client = new PQ();
    client.connectSync();
  });
});

var blink = function(n, cb) {
  var connections = []
  for(var i = 0; i < 30; i++) {
    connections.push(new PQ())
  }
  var connect = function(con, cb) {
    con.connect(cb)
  }
  async.each(connections, connect, ok(function() {
    connections.forEach(function(con) {
      con.finish()
    })
    cb()
  }))
}

describe('many connections', function() {
  it('works', function(done) {
    async.timesSeries(10, blink, done)
  })
})

var queryText = "SELECT * FROM generate_series(1, 1000)"

var query = function(pq, cb) {
  var sent = pq.sendQuery(queryText);
  if(!sent) return cb(new Error(pg.errorMessage()));
  console.log('sent query')

  //consume any outstanding results
  //while(!pq.isBusy() && pq.getResult()) {
  //console.log('consumed unused result')
  //}

  var cleanup = function() {
    pq.removeListener('readable', onReadable);
    pq.stopReader();
  }

  var readError = function(message) {
    cleanup();
    return cb(new Error(message || pq.errorMessage));
  };

  var onReadable = function() {
    //read waiting data from the socket
    //e.g. clear the pending 'select'
    if(!pq.consumeInput()) {
      return readError();
    }
    //check if there is still outstanding data
    //if so, wait for it all to come in
    if(pq.isBusy()) {
      return;
    }
    //load our result object
    pq.getResult();

    //"read until results return null"
    //or in our case ensure we only have one result
    if(pq.getResult()) {
      return readError('Only one result at a time is accepted');
    }
    cleanup();
    return cb(null, [])
  };
  pq.on('readable', onReadable);
  pq.startReader();
};

describe('multiple queries', function() {
  var pq = new PQ();

  before(function(done) {
    pq.connect(done)
  })

  it('first query works', function(done) {
    query(pq, done);
  });

  it('second query works', function(done) {
    query(pq, done);
  });

  it('third query works', function(done) {
    query(pq, done);
  });
});

describe('set & get non blocking', function() {
  helper.setupIntegration();
  it('is initially set to false', function() {
    assert.strictEqual(this.pq.isNonBlocking(), false);
  });

  it('can switch back and forth', function() {
    assert.strictEqual(this.pq.setNonBlocking(true), true);
    assert.strictEqual(this.pq.isNonBlocking(), true);
    assert.strictEqual(this.pq.setNonBlocking(), true);
    assert.strictEqual(this.pq.isNonBlocking(), false);
  });
});

describe('LISTEN/NOTIFY', function() {
  before(function() {
    this.listener = new Libpq();
    this.notifier = new Libpq();
    this.listener.connectSync();
    this.notifier.connectSync();
  });

  it('works', function() {
    this.notifier.exec("NOTIFY testing, 'My Payload'");
    var notice = this.listener.notifies();
    assert.equal(notice, null);

    this.listener.exec('LISTEN testing');
    this.notifier.exec("NOTIFY testing, 'My Second Payload'");
    this.listener.exec('SELECT NOW()');
    var notice = this.listener.notifies();
    assert(notice, 'listener should have had a notification come in');
    assert.equal(notice.relname, 'testing', 'missing relname == testing');
    assert.equal(notice.extra, 'My Second Payload');
    assert(notice.be_pid);
  });

  after(function() {
    this.listener.finish();
    this.notifier.finish();
  });
});

describe('result accessors', function() {
  helper.setupIntegration();

  before(function() {
    this.pq.exec("INSERT INTO test_data(name, age) VALUES ('bob', 80) RETURNING *");
    assert(!this.pq.errorMessage());
  });

  it('has ntuples', function() {
    assert.strictEqual(this.pq.ntuples(), 1);
  });

  it('has cmdStatus', function() {
    assert.equal(this.pq.cmdStatus(), 'INSERT 0 1');
  });

  it('has command tuples', function() {
    assert.strictEqual(this.pq.cmdTuples(), '1');
  });
});

describe('Retrieve server version from connection', function() {

  it('return version number when connected', function() {
    var pq = new Libpq();
    pq.connectSync();
    var version = pq.serverVersion();
    assert.equal(typeof version, 'number');
    assert(version > 60000);
  });

  it('return zero when not connected', function() {
    var pq = new Libpq();
    var version = pq.serverVersion();
    assert.equal(typeof version, 'number');
    assert.equal(version, 0);
  });

});

describe('getting socket', function() {
  helper.setupIntegration();

  it('returns -1 when not connected', function() {
    var pq = new LibPQ();
    assert.equal(pq.socket(), -1);
  });

  it('returns value when connected', function() {
    assert(this.pq.socket() > 0);
  });
});

describe('low-level query integration tests', function() {

  helper.setupIntegration();

  describe('exec', function() {
    before(function() {
      this.pq.exec('SELECT * FROM test_data');
    });

    it('has correct tuples', function() {
      assert.strictEqual(this.pq.ntuples(), 3);
    });

    it('has correct field count', function() {
      assert.strictEqual(this.pq.nfields(), 2);
    });

    it('has correct rows', function() {
      assert.strictEqual(this.pq.getvalue(0, 0), 'brian');
      assert.strictEqual(this.pq.getvalue(1, 1), '30');
      assert.strictEqual(this.pq.getvalue(2, 0), '');
      assert.strictEqual(this.pq.getisnull(2, 0), false);
      assert.strictEqual(this.pq.getvalue(2, 1), '');
      assert.strictEqual(this.pq.getisnull(2, 1), true);
    });
  });
});

describe('sync query with parameters', function() {
  helper.setupIntegration();

  it('works with single string parameter', function() {
    var queryText = 'SELECT $1::text as name';
    this.pq.execParams(queryText, ['Brian']);
    assert.strictEqual(this.pq.ntuples(), 1);
    assert.strictEqual(this.pq.getvalue(0, 0), 'Brian');
  });

  it('works with a number parameter', function() {
    var queryText = 'SELECT $1::int as age';
    this.pq.execParams(queryText, [32]);
    assert.strictEqual(this.pq.ntuples(), 1);
    assert.strictEqual(this.pq.getvalue(0, 0), '32');
  });

  it('works with multiple parameters', function() {
    var queryText = 'INSERT INTO test_data(name, age) VALUES($1, $2)';
    this.pq.execParams(queryText, ['Barkley', 4]);
    assert.equal(this.pq.resultErrorMessage(), '');
  });
});

describe('prepare and execPrepared', function() {

  helper.setupIntegration();

  var statementName = 'get-name';

  describe('preparing a statement', function() {
    it('works properly', function() {
      this.pq.prepare(statementName, 'SELECT $1::text as name', 1);
      assert.ifError(this.pq.resultErrorMessage());
      assert.equal(this.pq.resultStatus(), 'PGRES_COMMAND_OK');
    });
  });

  describe('executing a prepared statement', function() {
    it('works properly', function() {
      this.pq.execPrepared(statementName, ['Brian']);
      assert.ifError(this.pq.resultErrorMessage());
      assert.strictEqual(this.pq.ntuples(), 1)
      assert.strictEqual(this.pq.nfields(), 1);
      assert.strictEqual(this.pq.getvalue(0, 0), 'Brian');
    });
  });
});

describe('connecting with bad credentials', function() {
  it('throws an error', function() {
    try {
      new PQ().connectSync('asldkfjlasdf');
    } catch(e) {
      assert.equal(e.toString().indexOf('connection pointer is NULL'), -1)
      return;
    }
    assert.fail('Should have thrown an exception');
  });
});

describe('connecting with no credentials', function() {
  before(function() {
    this.pq = new PQ();
    this.pq.connectSync();
  });

  it('is connected', function() {
    assert(this.pq.connected, 'should have connected == true');
  });

  after(function() {
    this.pq.finish();
    assert(!this.pq.connected);
  });
});

describe('result checking', function() {
  before(function() {
    this.pq = new PQ();
    this.pq.connectSync();
  });

  after(function() {
    this.pq.finish();
  });

  it('executes query', function() {
    this.pq.exec('SELECT NOW() as my_col');
    assert.equal(this.pq.resultStatus(), 'PGRES_TUPLES_OK');
  })

  it('has 1 tuple', function() {
    assert.equal(this.pq.ntuples(), 1);
  });

  it('has 1 field', function() {
    assert.strictEqual(this.pq.nfields(), 1);
  });

  it('has column name', function() {
    assert.equal(this.pq.fname(0), 'my_col');
  });

  it('has oid type of timestamptz', function() {
    assert.strictEqual(this.pq.ftype(0), 1184);
  });

  it('has value as a date', function() {
    var now = new Date();
    var val = this.pq.getvalue(0);
    var date = new Date(Date.parse(val));
    assert.equal(date.getFullYear(), now.getFullYear());
    assert.equal(date.getMonth(), now.getMonth());
  });

  it('can manually clear result multiple times', function() {
    this.pq.clear();
    this.pq.clear();
    this.pq.clear();
  });
});
