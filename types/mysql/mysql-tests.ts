import fs = require('fs');
import mysql = require('mysql');
import stream = require('stream');

/// Connections
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
});

connection.end(err => {
});

connection = mysql.createConnection({
    host: 'example.org',
    user: 'bob',
    password: 'secret'
});

connection.connect(err => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }

    console.log(`connected as id ${connection.threadId}`);
});

connection.query('SELECT 1', (err, rows) => {
    // connected! (unless `err` is set)
});

connection = mysql.createConnection({
    host: 'localhost',
    ssl: 'Amazon RDS'
});

connection = mysql.createConnection({
    host: 'localhost',
    ssl: {
        ca: ''
    }
});

connection = mysql.createConnection({
    host: 'localhost',
    ssl: {
        // DO NOT DO THIS
        // set up your ca correctly to trust the connection
        rejectUnauthorized: false
    }
});

connection.end(err => {
    // The connection is terminated now
});

connection.destroy();

connection.changeUser({user: 'john'}, err => {
    if (err) console.error('SHOULD BE ERROR');
});

connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'test'
});

const userId = 'some user provided value';
let sql = `SELECT * FROM users WHERE id = ${connection.escape(userId)}`;
connection.query(sql, (err, results) => {
    // ...
});
connection.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
    // ...
});

const post = {id: 1, title: 'Hello MySQL'};
const queryx = connection.query('INSERT INTO posts SET ?', post, (err, result) => {
    // Neat!
});
console.log(queryx.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'

const queryStr = `SELECT * FROM posts WHERE title=${mysql.escape("Hello MySQL")}`;

console.log(queryStr); // SELECT * FROM posts WHERE title='Hello MySQL'

let sorter = 'date';
sql = `SELECT * FROM posts ORDER BY ${connection.escapeId(sorter)}`;
connection.query(sql, (err, results) => {
    // ...
});

sorter = 'date';
sql = `SELECT * FROM posts ORDER BY ${connection.escapeId('posts.' + sorter)}`;
connection.query(sql, (err, results) => {
    // ...
});

const userIdNum = 1;
const columns = ['username', 'email'];
const queryy = connection.query('SELECT ?? FROM ?? WHERE id = ?', [columns, 'users', userIdNum], (err, results) => {
    // ...
});

console.log(queryy.sql); // SELECT `username`, `email` FROM `users` WHERE id = 1

sql = "SELECT * FROM ?? WHERE ?? = ?";
const inserts = ['users', 'id', userId];
sql = mysql.format(sql, inserts);

connection.config.queryFormat = function(query, values) {
    if (!values) return query;
    return query.replace(/\:(\w+)/g, function(txt: string, key: string) {
        if (values.hasOwnProperty(key)) {
            return this.escape(values[key]);
        }
        return txt;
    }.bind(this));
};

connection.query("UPDATE posts SET title = :title", {title: "Hello MySQL"});

const s: stream.Readable = connection.query("UPDATE posts SET title = :title", {title: "Hello MySQL"}).stream({highWaterMark: 5});

connection.query('INSERT INTO posts SET ?', {title: 'test'}, (err, result) => {
    if (err) throw err;

    console.log(result.insertId);
});

connection.query('DELETE FROM posts WHERE title = "wrong"', (err, result) => {
    if (err) throw err;

    console.log(`deleted ${result.affectedRows} rows`);
});

connection.query('UPDATE posts SET ...', (err, result) => {
    if (err) throw err;

    console.log(`changed ${result.changedRows} rows`);
});
connection.destroy();

connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'test'
});

connection.connect(err => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
});

connection.ping(err => {
    if (err) throw err;
    console.log('Ping was successful');
});

/// Pools

const poolConfig = {
    connectionLimit: 10,
    host: 'example.org',
    user: 'bob',
    password: 'secret'
};

let pool = mysql.createPool(poolConfig);

pool.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
});

pool = mysql.createPool({
    host: 'example.org',
    user: 'bob',
    password: 'secret'
});

pool.getConnection((err, connection) => {
    // connected! (unless `err` is set)
});

pool.on('connection', connection => {
    connection.query('SET SESSION auto_increment_increment=1');
});

pool.getConnection((err, connection) => {
    // Use the connection
    connection.query('SELECT something FROM sometable', (err, rows) => {
        // And done with the connection.
        connection.release();

        // Don't use the connection here, it has been returned to the pool.
    });
});

/// PoolClusters

// create
const poolCluster = mysql.createPoolCluster();

poolCluster.add(poolConfig); // anonymous group
poolCluster.add('MASTER', poolConfig);
poolCluster.add('SLAVE1', poolConfig);
poolCluster.add('SLAVE2', poolConfig);

// Target Group : ALL(anonymous, MASTER, SLAVE1-2), Selector : round-robin(default)
poolCluster.getConnection((err, connection) => {
});

// Target Group : MASTER, Selector : round-robin
poolCluster.getConnection('MASTER', (err, connection) => {
});

// Target Group : SLAVE1-2, Selector : order
// If can't connect to SLAVE1, return SLAVE2. (remove SLAVE1 in the cluster)
poolCluster.on('remove', nodeId => {
    console.log(`REMOVED NODE : ${nodeId}`); // nodeId = SLAVE1
});

poolCluster.getConnection('SLAVE*', 'ORDER', (err, connection) => {
});

// of namespace : of(pattern, selector)
poolCluster.of('*').getConnection((err, connection) => {
});

pool = poolCluster.of('SLAVE*', 'RANDOM');
pool.getConnection((err, connection) => {
});
pool.getConnection((err, connection) => {
});

const poolClusterWithOptions = mysql.createPoolCluster({
    canRetry: true,
    removeNodeErrorCount: 3,
    restoreNodeTimeout: 1000,
    defaultSelector: 'RR'
});

// destroy
poolCluster.end();

/// Queries

const queryF = connection.query('SELECT * FROM posts');
queryF
    .on('error', err => {
        // Handle error, an 'end' event will be emitted after this as well
    })
    .on('fields', fields => {
        // the field packets for the rows to follow
    })
    .on('result', row => {
        // Pausing the connnection is useful if your processing involves I/O
        connection.pause();

        const processRow = (row: any, cb: () => void) => {
            cb();
        };

        processRow(row, () => {
            connection.resume();
        });
    })
    .on('end', () => {
        // all rows have been received
    });

const writable = fs.createWriteStream('file.txt');
connection.query('SELECT * FROM posts')
    .stream({highWaterMark: 5})
    .pipe(writable);

connection = mysql.createConnection({multipleStatements: true});

connection.query('SELECT 1; SELECT 2', (err, results) => {
    if (err) throw err;

    // `results` is an array with one element for every statement in the query:
    console.log(results[0]); // [{1: 1}]
    console.log(results[1]); // [{2: 2}]
});

const queryH = connection.query('SELECT 1; SELECT 2');

queryH
    .on('fields', (fields, index) => {
        // the fields for the result rows that follow
    })
    .on('result', (row, index) => {
        // index refers to the statement this result belongs to (starts at 0)
    });

const options = {sql: '...', nestTables: true};

connection.query(options, (err, results) => {
    /* results will be an array like this now:
    [{
      table1: {
        fieldA: '...',
        fieldB: '...',
      },
      table2: {
        fieldA: '...',
        fieldB: '...',
      },
    }, ...]
    */
});

connection.beginTransaction(err => {
    const title = 'title';

    if (err) {
        throw err;
    }
    connection.query('INSERT INTO posts SET title=?', title, (err, result) => {
        if (err) {
            connection.rollback(() => {
                throw err;
            });
        }

        const log = `Post ${result.insertId} added`;

        connection.query('INSERT INTO log SET data=?', log, (err, result) => {
            if (err) {
                connection.rollback(() => {
                    throw err;
                });
            }
            connection.commit(err => {
                if (err) {
                    connection.rollback(() => {
                        throw err;
                    });
                }
                console.log('success!');
            });
        });
    });
});

// Kill query after 60s
connection.query({sql: 'SELECT COUNT(*) AS count FROM big_table', timeout: 60000}, (err, rows: any) => {
    if (err && err.code === 'PROTOCOL_SEQUENCE_TIMEOUT') {
        throw new Error('too long to count table rows!');
    }

    if (err) {
        throw err;
    }

    console.log(`${rows[0].count} rows`);
});

try {
    connection = mysql.createConnection({
        port: 8943, // set wrong port and uncomment throw
    });
    // throw new Error('error not thrown')
} catch (err) {
    console.error('SHOULD BE WRONG PORT ERROR: ', err);
}

connection.connect(err => {
    console.log(err.code); // 'ECONNREFUSED'
    console.log(err.fatal); // true
});

connection.query('SELECT 1', err => {
    console.log(err.code); // 'ECONNREFUSED'
    console.log(err.fatal); // true
});

connection.query('USE name_of_db_that_does_not_exist', (err: mysql.MysqlError, rows: any) => {
    console.log(err.code); // 'ER_BAD_DB_ERROR'
});

connection.query('SELECT 1', (err, rows) => {
    console.log(err); // null
    console.log(rows.length); // 1
});

connection.on('error', err => {
    console.log(err.code); // 'ER_BAD_DB_ERROR'
});

connection.query('USE name_of_db_that_does_not_exist');

// I am Chuck Norris:
connection.on('error', () => {
});

connection = mysql.createConnection({typeCast: false});

const query1 = connection.query({sql: '...', typeCast: false}, (err: Error, results: any) => {
});

connection.query({
    sql: '...',
    typeCast: (field, next: () => void) => {
        if (field.type === 'TINY' && field.length === 1) {
            return (field.string() === '1'); // 1 = true, 0 = false
        }
        next();
    }
});

connection = mysql.createConnection("mysql://localhost/test?flags=-FOUND_ROWS");
connection = mysql.createConnection({debug: true});
connection = mysql.createConnection({debug: ['ComQueryPacket', 'RowDataPacket']});
