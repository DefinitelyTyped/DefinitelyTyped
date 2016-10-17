import anydbsql = require('anydb-sql');
import { Table, Column } from 'anydb-sql'
import migrator = require('anydb-sql-migrations');

function do_not_run() {

    var db = anydbsql({
        url: 'postgres://user:pass@host:port/database',
        connections: { min: 2, max: 20 }
    });

    migrator
    .create(db, '/path/to/migrations/dir')
    .run();
}
