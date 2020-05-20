declare var console: { log(x: any): void };
declare var inspect: (x: any) => string;

// These are the examples from the node-mariasql README transposed to TypeScript
// https://github.com/mscdex/node-mariasql

// Example 1 - SHOW DATABASES
import Client = require('mariasql');

var c = new Client();

c.connect({
    host: '127.0.0.1',
    user: 'foo',
    password: 'bar'
});

c.on('connect', function () {
    console.log('Client connected');
})
    .on('error', function (err) {
        console.log('Client error: ' + err);
    })
    .on('close', function (hadError) {
        console.log('Client closed');
    });

c.query('SHOW DATABASES')
    .on('result', function (res) {
        res.on('row', function (row) {
            console.log('Result row: ' + inspect(row));
        })
            .on('error', function (err) {
                console.log('Result error: ' + inspect(err));
            })
            .on('end', function (info) {
                console.log('Result finished successfully');
            });
    })
    .on('end', function () {
        console.log('Done with all results');
    });

c.end();


// Example 2 - Query Placeholders
var c = new Client();

c.connect({
    host: '127.0.0.1',
    user: 'foo',
    password: 'bar',
    db: 'mydb'
});

c.on('connect', function () {
    console.log('Client connected');
})
    .on('error', function (err) {
        console.log('Client error: ' + err);
    })
    .on('close', function (hadError) {
        console.log('Client closed');
    });

c.query('SELECT * FROM users WHERE id = :id AND name = :name',
    {id: 1337, name: 'Frylock'})
    .on('result', function (res) {
        res.on('row', function (row) {
            console.log('Result row: ' + inspect(row));
        })
            .on('error', function (err) {
                console.log('Result error: ' + inspect(err));
            })
            .on('end', function (info) {
                console.log('Result finished successfully');
            });
    })
    .on('end', function () {
        console.log('Done with all results');
    });

c.query('SELECT * FROM users WHERE id = ? AND name = ?',
    [1337, 'Frylock'])
    .on('result', function (res) {
        res.on('row', function (row) {
            console.log('Result row: ' + inspect(row));
        })
            .on('error', function (err) {
                console.log('Result error: ' + inspect(err));
            })
            .on('end', function (info) {
                console.log(info.affectedRows);
                console.log(info.insertId);
                console.log(info.numRows);
                console.log('Result finished successfully');
            });
    })
    .on('end', function () {
        console.log('Done with all results');
    });

c.end();


// Example 3 prepared query
c = new Client();

c.connect({
    host: '127.0.0.1',
    user: 'foo',
    password: 'bar',
    db: 'mydb'
});

c.on('connect', function () {
    console.log('Client connected');
})
    .on('error', function (err) {
        console.log('Client error: ' + err);
    })
    .on('close', function (hadError) {
        console.log('Client closed');
    });

var pq = c.prepare('SELECT * FROM users WHERE id = :id AND name = :name');

c.query(pq({id: 1337, name: 'Frylock'}))
    .on('result', function (res) {
        res.on('row', function (row) {
            console.log('Result row: ' + inspect(row));
        })
            .on('error', function (err) {
                console.log('Result error: ' + inspect(err));
            })
            .on('end', function (info) {
                console.log('Result finished successfully');
            });
    })
    .on('end', function () {
        console.log('Done with all results');
    });

c.end();


// Example 4 - Abort Query
c = new Client()
var qcnt:number = 0;

c.connect({
    host: '127.0.0.1',
    user: 'foo',
    password: 'bar',
    multiStatements: true
});

c.on('connect', function () {
    console.log('Client connected');
})
    .on('error', function (err) {
        console.log('Client error: ' + err);
    })
    .on('close', function (hadError) {
        console.log('Client closed');
    });

c.query('SELECT "first query"; SELECT "second query"; SELECT "third query"', true)
    .on('result', function (res) {
        if (++qcnt === 2)
            res.abort();
        res.on('row', function (row) {
            console.log('Query #' + (qcnt) + ' row: ' + inspect(row));
        })
            .on('error', function (err) {
                console.log('Query #' + (qcnt) + ' error: ' + inspect(err));
            })
            .on('abort', function () {
                console.log('Query #' + (qcnt) + ' was aborted');
            })
            .on('end', function (info) {
                console.log('Query #' + (qcnt) + ' finished successfully');
            });
    })
    .on('end', function () {
        console.log('Done with all queries');
    });

c.end();
/* output:
 Client connected
 Query #1 row: [ 'first query' ]
 Query #1 finished successfully
 Query #2 was aborted
 Query #3 row: [ 'third query' ]
 Query #3 finished successfully
 Done with all queries
 Client closed
 */
