"use strict";
import Knex = require('knex');
import Promise = require('bluebird');
import _ = require('lodash');

// Initializing the Library
var knex = Knex({
    client: 'sqlite3',
    connection: {
        filename: "./mydb.sqlite"
    }
});

var knex = Knex({
    debug: true,
    client: 'mysql',
    connection: {
        socketPath: '/path/to/socket.sock',
        user: 'your_database_user',
        password: 'your_database_password',
        database: 'myapp_test'
    }
});

// Mariasql configuration
var knex = Knex({
    debug: true,
    client: 'mariasql',
    connection: {
        host: '127.0.0.1',
        user: 'your_database_user',
        password: 'your_database_password',
        db: 'myapp_test'
    }
});

// Mysql configuration
var knex = Knex({
    debug: true,
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'your_database_user',
        password: 'your_database_password',
        db: 'myapp_test',
        trace: false
    }
});

// Pooling
var knex = Knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'your_database_user',
        password: 'your_database_password',
        database: 'myapp_test'
    },
    pool: {
        min: 0,
        max: 7,
        afterCreate: (connection: any, callback: (err: any, result: any) => any) => {
            return callback(null, connection);
        },
        // deprecated method
        beforeDestroy: (connection: any, callback: (err: any, result: any) => any) => {
            return callback(null, connection);
        }
    }
});

// acquireConnectionTimeout
var knex = Knex({
    debug: true,
    client: 'mysql',
    connection: {
        socketPath: '/path/to/socket.sock',
        user: 'your_database_user',
        password: 'your_database_password',
        database: 'myapp_test'
    },
    acquireConnectionTimeout: 60000,
});

// Pure Query Builder without a connection
var knex = Knex({});

// Pure Query Builder without a connection, using a specific flavour of SQL
var knex = Knex({
    client: 'pg'
});

// searchPath
var knex = Knex({
    client: 'pg',
    searchPath: 'public',
});

// useNullAsDefault
var knex = Knex({
    client: 'sqlite',
    useNullAsDefault: true,
});

knex('books').insert({title: 'Test'}).returning('*').toString();

// Migrations
var knex = Knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'your_database_user',
        password: 'your_database_password',
        database: 'myapp_test'
    },
    migrations: {
        tableName: 'migrations'
    }
});

// Knex Query Builder
knex.select('title', 'author', 'year').from('books');
knex.select().table('books');

knex.avg('sum_column1').from(() => {
    this.sum('column1 as sum_column1').from('t1').groupBy('column1').as('t1')
}).as('ignored_alias');

knex.column('title', 'author', 'year').select().from('books');
knex.column(['title', 'author', 'year']).select().from('books');
knex.select('*').from('users');

knex('users').where({
    first_name: 'Test',
    last_name: 'User'
}).select('id');

knex('users').where('id', 1);

knex('users').where(() => {
    this.where('id', 1).orWhere('id', '>', 10)
}).orWhere({name: 'Tester'});

knex('users').where('votes', '>', 100);

var subquery = knex('users').where('votes', '>', 100).andWhere('status', 'active').orWhere('name', 'John').select('id');
knex('accounts').where('id', 'in', subquery);

knex.select('name').from('users')
    .whereIn('id', [1, 2, 3])
    .orWhereIn('id', [4, 5, 6]);

var subquery = knex.select('id').from('accounts');
knex.select('name').from('users')
    .whereIn('account_id', subquery);

knex('users')
    .where('name', '=', 'John')
    .orWhere(() => {
        this.where('votes', '>', 100).andWhere('title', '<>', 'Admin');
    });

knex('users').whereNotIn('id', [1, 2, 3]);

knex('users').where('name', 'like', '%Test%').orWhereNotIn('id', [1, 2, 3]);

knex('users').whereNull('updated_at');

knex('users').whereNotNull('created_at');

knex('users').whereExists(() => {
    this.select('*').from('accounts').whereRaw('users.account_id = accounts.id');
});

knex('users').whereExists(knex.select('*').from('accounts').whereRaw('users.account_id = accounts.id'));

knex('users').whereNotExists(() => {
    this.select('*').from('accounts').whereRaw('users.account_id = accounts.id');
});

knex('users').whereBetween('votes', [1, 100]);

knex('users').whereNotBetween('votes', [1, 100]);

knex('users').whereRaw('id = ?', [1]);

// Join methods
knex('users')
    .join('contacts', 'users.id', '=', 'contacts.user_id')
    .select('users.id', 'contacts.phone');

knex('users')
    .join('contacts', { 'users.id': 12355 })
    .select('users.id', 'contacts.phone');

knex('users')
    .join('contacts', 'users.id', 'contacts.user_id')
    .select('users.id', 'contacts.phone');

knex('users')
    .join(knex('contacts').select('user_id', 'phone').as('contacts'), 'users.id', 'contacts.user_id')
    .select('users.id', 'contacts.phone');

knex.select('*').from('users').join('accounts', () => {
    this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').join('accounts', 'accounts.type', knex.raw('?', ['admin']));

knex.raw('select * from users where id = :user_id', {user_id: 1});

knex.from('users').innerJoin('accounts', 'users.id', 'accounts.user_id');

knex.table('users').innerJoin('accounts', 'users.id', '=', 'accounts.user_id');

knex('users').innerJoin('accounts', () => {
    this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').leftJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('users').leftJoin('accounts', () => {
    this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').leftOuterJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('users').leftOuterJoin('accounts', () => {
    this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').rightJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('users').rightJoin('accounts', () => {
    this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').rightOuterJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('users').rightOuterJoin('accounts', () => {
    this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').outerJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('users').outerJoin('accounts', () => {
    this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').fullOuterJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('users').fullOuterJoin('accounts', () => {
    this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').crossJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('accounts').joinRaw('natural full join table1').where('id', 1);

knex.select('*').from('accounts').join(knex.raw('natural full join table1')).where('id', 1);

knex('customers')
    .distinct('first_name', 'last_name')
    .select();

knex('users').groupBy('count');

knex.select('year', knex.raw('SUM(profit)')).from('sales').groupByRaw('year WITH ROLLUP');

knex('users').orderBy('name', 'desc');

knex.select('*').from('table').orderByRaw('col NULLS LAST DESC');

knex('books').insert({title: 'Slaughterhouse Five'});

knex('coords').insert([{x: 20}, {y: 30}, {x: 10, y: 20}]);

knex.insert([{title: 'Great Gatsby'}, {title: 'Fahrenheit 451'}], 'id').into('books');
knex.insert([{title: 'Great Gatsby'}, {title: 'Fahrenheit 451'}], ['id', 'title']).into('books');

knex('books')
    .returning('id')
    .insert({title: 'Slaughterhouse Five'});

knex('books')
    .returning('id')
    .insert([{title: 'Great Gatsby'}, {title: 'Fahrenheit 451'}]);

knex.batchInsert('books', [{title:'Great Gatsby'}, {title: 'Fahrenheit 451'}], 200);

knex('books').where('published_date', '<', 2000).update({status: 'archived'});
knex('books').where('published_date', '<', 2000).update({status: 'archived'}, 'id');
knex('books').where('published_date', '<', 2000).update({status: 'archived'}, ['id', 'title']);

knex('books').update('title', 'Slaughterhouse Five');
knex('books').update('title', 'Slaughterhouse Five', 'id');
knex('books').update('title', 'Slaughterhouse Five', ['id', 'title']);

knex('accounts').where('activated', false).del();
knex('accounts').where('activated', false).del('id');
knex('accounts').where('activated', false).del(['id', 'title']);
knex('accounts').where('activated', false).delete();
knex('accounts').where('activated', false).delete('id');
knex('accounts').where('activated', false).delete(['id', 'title']);

let someExternalMethod: (id: number, trx: Knex.Transaction) => Knex.Transaction;

knex.transaction((trx) => {
    knex('books').transacting(trx).insert({name: 'Old Books'})
        .then((resp) => {
            const id = resp[0];
            return someExternalMethod(id, trx);
        })
        .then(trx.commit)
        .catch(trx.rollback);

}).then(() => {
    console.log('Transaction complete.');
}).catch((err) => {
    console.error(err);
});

knex.transaction((trx) => {
    knex('tableName')
        .transacting(trx)
        .forUpdate()
        .select('*');

    knex('tableName')
        .transacting(trx)
        .forShare()
        .select('*')
});

knex('users').count('active');

knex('users').min('age');

knex('users').min('age as a');

knex('users').max('age');

knex('users').max('age as a');

knex('users').sum('products');

knex('users').sum('products as p');

knex('users').avg('age');

knex('users').avg('age as a');

knex('accounts')
    .where('userid', '=', 1)
    .increment('balance', 10);

knex('accounts').where('userid', '=', 1).decrement('balance', 5);

knex('accounts').truncate();

knex.table('users').first('id').then((ids) => {
    console.log(ids);
});

knex.table('users').first('id', 'name').then((row) => {
    console.log(row);
});

// Using trx as a query builder:
knex.transaction((trx) => {

    var info: any;
    var books: any[] = [
        {title: 'Canterbury Tales'},
        {title: 'Moby Dick'},
        {title: 'Hamlet'}
    ];

    return trx
        .insert({name: 'Old Books'}, 'id')
        .into('catalogues')
        .then((ids) => {
            return Promise.all(books.map((book: any) => {
                book.catalogue_id = ids[0];
                // Some validation could take place here.
                return trx.insert(info).into('books');
            }));
        });
})
    .then((inserts) => {
        console.log(inserts.length + ' new books saved.');
    })
    .catch((error) => {
        // If we get here, that means that neither the 'Old Books' catalogues insert,
        // nor any of the books inserts will have taken place.
        console.error(error);
    });

// Using trx as a transaction object:
knex.transaction((trx) => {

    trx.raw('');

    var info: any;
    var books: any[] = [
        {title: 'Canterbury Tales'},
        {title: 'Moby Dick'},
        {title: 'Hamlet'}
    ];

    knex.insert({name: 'Old Books'}, 'id')
        .into('catalogues')
        .transacting(trx)
        .then((ids) => {
            return Promise.all(books.map((book: any) => {
                book.catalogue_id = ids[0];

                // Some validation could take place here.

                return knex.insert(info).into('books').transacting(trx);
            }));
        })
        .then(trx.commit)
        .catch(trx.rollback);
})
    .then((inserts) => {
        console.log(inserts.length + ' new books saved.');
    })
    .catch((error) => {
        // If we get here, that means that neither the 'Old Books' catalogues insert,
        // nor any of the books inserts will have taken place.
        console.error(error);
    });

knex.schema.withSchema("public").hasTable("table") as Promise<boolean>;

knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name');
    table.enu('favorite_color', ['red', 'blue', 'green']);
    table.timestamps();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamps(true, true);
});

knex.schema.renameTable('users', 'old_users');

knex.schema.dropTable('users');

knex.schema.hasTable('users').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('users', (t) => {
            t.increments('id').primary();
            t.string('first_name', 100);
            t.string('last_name', 100);
            t.text('bio');
        });
    }
});

var tableName: string;
var columnName: string;
knex.schema.hasColumn(tableName, columnName);

knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('other');

knex.schema.table('users', (table) => {
    table.dropColumn('name');
    table.string('first_name');
    table.string('last_name');
});

knex.schema.raw("SET sql_mode='TRADITIONAL'")
    .table('users', (table) => {
        table.dropColumn('name');
        table.string('first_name');
        table.string('last_name');
        table.dropUnique(["name1", "name2"], "index_name");
        table.dropUnique(["name1", "name2"]);
        table.dropPrimary();
        table.dropPrimary("constraint_name");
    });

knex('users')
    .select(knex.raw('count(*) as user_count, status'))
    .where(knex.raw(1))
    .orWhere(knex.raw('status <> ?', [1]))
    .groupBy('status');

knex.raw('select * from users where id = ?', [1]).then((resp) => {
    // ...
});

(() => {
    var subcolumn = knex.raw('select avg(salary) from employee where dept_no = e.dept_no')
        .wrap('(', ') avg_sal_dept');

    knex.select('e.lastname', 'e.salary', subcolumn)
        .from('employee as e')
        .whereRaw('dept_no = e.dept_no');
})();

(() => {
    var subcolumn = knex.avg('salary')
        .from('employee')
        .whereRaw('dept_no = e.dept_no')
        .as('avg_sal_dept');

    knex.select('e.lastname', 'e.salary', subcolumn)
        .from('employee as e')
        .whereRaw('dept_no = e.dept_no');
})();

var x: number;
knex.select('name').from('users')
    .where('id', '>', 20)
    .andWhere('id', '<', 200)
    .limit(10)
    .offset(x)
    .then((rows: any) => {
        return _.map(rows, 'name');
    })
    .then((names: any) => {
        return knex.select('id').from('nicknames').whereIn('nickname', names);
    })
    .then((rows) => {
        console.log(rows);
    })
    .catch((error) => {
        console.error(error)
    });

knex.select('*').from('users').where({name: 'Tim'})
    .then((rows) => {
        return knex.insert({user_id: rows[0].id, name: 'Test'}, 'id').into('accounts');
    }).then((id) => {
    console.log('Inserted Account ' + id);
}).catch((error) => {
    console.error(error);
});

knex.insert({id: 1, name: 'Test'}, 'id').into('accounts')
    .catch((error) => {
        console.error(error);
    }).then(() => {
    return knex.select('*').from('accounts').where('id', 1);
}).then((rows) => {
    console.log(rows[0]);
}).catch((error) => {
    console.error(error);
});

var query: any;
query.then((x: any) => {
    // doSideEffectsHere(x);
    return x;
});

knex.select('name').from('users').limit(10).then((rows: any[]): string[] => {
    return rows.map((row: any): string => {
        return row.name;
    });
}).then((names: string[]) => {
    console.log(names);
}).catch((e: Error) => {
    console.error(e);
});

knex.select('name').from('users').limit(10).then((rows: any[]) => {
    return rows.reduce((memo: any, row: any) => {
        memo.names.push(row.name);
        memo.count++;
        return memo;
    }, {count: 0, names: []})
}).then((obj: any) => {
    console.log(obj);
}).catch((e: Error) => {
    console.error(e);
});

knex.select('name').from('users')
    .limit(10)
    .then(console.log.bind(console))
    .catch(console.error.bind(console));

var values: any[];

knex.insert(values).into('users')
    .then(() => {
        return {inserted: true};
    });

knex.select('name').from('users')
    .where('id', '>', 20)
    .andWhere('id', '<', 200)
    .limit(10)
    .offset(x)
    .exec((err: any, rows: any[]) => {
        if (err) return console.error(err);
        knex.select('id').from('nicknames').whereIn('nickname', _.map(rows, 'name') as any)
            .exec((err: any, rows: any[]) => {
                if (err) return console.error(err);
                console.log(rows);
            });
    });

// Retrieve the stream:
var stream = knex.select('*').from('users').stream();
var writableStream: any;
stream.pipe(writableStream);

// With options:
var stream = knex.select('*').from('users').stream({highWaterMark: 5});
stream.pipe(writableStream);

// Use as a promise:
(() => {

    var stream = knex.select('*').from('users').where(knex.raw('id = ?', [1])).stream((stream: any) => {
        stream.pipe(writableStream);
    }).then(() => {
        // ...
    }).catch((e: Error) => {
        console.error(e);
    });

})();

var stream = knex.select('*').from('users').pipe(writableStream);
var app: any;

knex.select('*')
    .from('users')
    .on('query', (data: any) => {
        app.log(data);
    })
    .then(() => {
        // ...
    });

knex.select('*').from('users').where(knex.raw('id = ?', [1])).toString();

knex.select('*').from('users').where(knex.raw('id = ?', [1])).toSQL();

//
// Migrations
//
var config = {
    directory: "./migrations",
    extension: "js",
    tableName: "knex_migrations",
    disableTransactions: false
};
knex.migrate.make(name, config);
knex.migrate.make(name);

knex.migrate.latest(config);
knex.migrate.latest();

knex.migrate.rollback(config);
knex.migrate.rollback();

knex.migrate.currentVersion(config);
knex.migrate.currentVersion();

knex.seed.make(name, config);
knex.seed.make(name);

knex.seed.run(config);
knex.seed.run();
