/// <reference path='knex.d.ts' />
/// <reference path='../lodash/lodash.d.ts' />
import Knex = require('knex');
import _ = require('lodash');
'use strict';
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
    socketPath     : '/path/to/socket.sock',
    user     : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
});

// Pooling
var knex = Knex({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  },
  pool: {
    min: 0,
    max: 7,
    afterCreate: (connection: any, callback: Function) => {
      return callback(null, connection);
    },
    beforeDestroy: (connection: any, callback: Function) => {
      return callback(null, connection);
    }
  }
});

// Migrations
var knex = Knex({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  },
  migrations: {
    tableName: 'migrations'
  }
});

// Knex Query Builder
knex.select('title', 'author', 'year').from('books');
knex.select().table('books');

knex.avg('sum_column1').from(function() {
  this.sum('column1 as sum_column1').from('t1').groupBy('column1').as('t1')
}).as('ignored_alias');

knex.column('title', 'author', 'year').select().from('books');
knex.column(['title', 'author', 'year']).select().from('books');
knex.select('*').from('users');

knex('users').where({
  first_name: 'Test',
  last_name:  'User'
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
  .orWhere(function() {
    this.where('votes', '>', 100).andWhere('title', '<>', 'Admin');
  });

knex('users').whereNotIn('id', [1, 2, 3]);

knex('users').where('name', 'like', '%Test%').orWhereNotIn('id', [1, 2, 3]);

knex('users').whereNull('updated_at');

knex('users').whereNotNull('created_at');

knex('users').whereExists(function() {
  this.select('*').from('accounts').whereRaw('users.account_id = accounts.id');
});

knex('users').whereExists(knex.select('*').from('accounts').whereRaw('users.account_id = accounts.id'));

knex('users').whereNotExists(function() {
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
  .join('contacts', 'users.id', 'contacts.user_id')
  .select('users.id', 'contacts.phone');

knex.select('*').from('users').join('accounts', function() {
  this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').join('accounts', 'accounts.type', knex.raw('?', ['admin']));

knex.from('users').innerJoin('accounts', 'users.id', 'accounts.user_id');

knex.table('users').innerJoin('accounts', 'users.id', '=', 'accounts.user_id');

knex('users').innerJoin('accounts', function() {
  this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').leftJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('users').leftJoin('accounts', function() {
  this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').leftOuterJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('users').leftOuterJoin('accounts', function() {
  this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').rightJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('users').rightJoin('accounts', function() {
  this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').rightOuterJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('users').rightOuterJoin('accounts', function() {
  this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').outerJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('users').outerJoin('accounts', function() {
  this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
});

knex.select('*').from('users').fullOuterJoin('accounts', 'users.id', 'accounts.user_id');

knex.select('*').from('users').fullOuterJoin('accounts', function() {
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

knex('coords').insert([{x: 20}, {y: 30},  {x: 10, y: 20}]);

knex.insert([{title: 'Great Gatsby'}, {title: 'Fahrenheit 451'}], 'id').into('books');
knex.insert([{title: 'Great Gatsby'}, {title: 'Fahrenheit 451'}], ['id', 'title']).into('books');

knex('books')
  .returning('id')
  .insert({title: 'Slaughterhouse Five'});

knex('books')
  .returning('id')
  .insert([{title: 'Great Gatsby'}, {title: 'Fahrenheit 451'}]);

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

var someExternalMethod: Function;

knex.transaction(function(trx) {
  knex('books').transacting(trx).insert({name: 'Old Books'})
    .then(function(resp) {
      var id = resp[0];
      return someExternalMethod(id, trx);
    })
    .then(trx.commit)
    .catch(trx.rollback);

}).then(function() {
  console.log('Transaction complete.');
}).catch(function(err) {
  console.error(err);
});

knex.transaction(function(trx) {
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

knex.table('users').pluck('id').then(function(ids) {
  console.log(ids);
});

knex.table('users').first('id', 'name').then(function(row) {
  console.log(row);
});

// Using trx as a query builder:
knex.transaction(function(trx) {

  var info: any;
  var books: any[] = [
    {title: 'Canterbury Tales'},
    {title: 'Moby Dick'},
    {title: 'Hamlet'}
  ];

  return trx
    .insert({name: 'Old Books'}, 'id')
    .into('catalogues')
    .then(function(ids) {
      return Promise.map(books, function(book) {
        book.catalogue_id = ids[0];
        // Some validation could take place here.
        return trx.insert(info).into('books');
      });
    });
})
.then(function(inserts) {
  console.log(inserts.length + ' new books saved.');
})
.catch(function(error) {
  // If we get here, that means that neither the 'Old Books' catalogues insert,
  // nor any of the books inserts will have taken place.
  console.error(error);
});

// Using trx as a transaction object:
knex.transaction(function(trx) {

  var info: any;
  var books: any[] = [
    {title: 'Canterbury Tales'},
    {title: 'Moby Dick'},
    {title: 'Hamlet'}
  ];

  knex.insert({name: 'Old Books'}, 'id')
    .into('catalogues')
    .transacting(trx)
    .then(function(ids) {
      return Promise.map(books, function(book) {
        book.catalogue_id = ids[0];

        // Some validation could take place here.

        return knex.insert(info).into('books').transacting(trx);
      });
    })
    .then(trx.commit)
    .catch(trx.rollback);
})
.then(function(inserts) {
  console.log(inserts.length + ' new books saved.');
})
.catch(function(error) {
  // If we get here, that means that neither the 'Old Books' catalogues insert,
  // nor any of the books inserts will have taken place.
  console.error(error);
});

knex.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.enu('favorite_color', ['red', 'blue', 'green']);
  table.timestamps();
});

knex.schema.renameTable('users', 'old_users');

knex.schema.dropTable('users');

knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('users', function(t) {
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

knex.schema.dropTableIfExists('users');

knex.schema.table('users', function (table) {
  table.dropColumn('name');
  table.string('first_name');
  table.string('last_name');
});

knex.schema.raw("SET sql_mode='TRADITIONAL'")
.table('users', function (table) {
    table.dropColumn('name');
    table.string('first_name');
    table.string('last_name');
});

knex('users')
  .select(knex.raw('count(*) as user_count, status'))
  .where(knex.raw(1))
  .orWhere(knex.raw('status <> ?', [1]))
  .groupBy('status');

  knex.raw('select * from users where id = ?', [1]).then(function(resp) {
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
  .then(function(rows: any) {
    return _.pluck(rows, 'name');
  })
  .then(function(names: any) {
    return knex.select('id').from('nicknames').whereIn('nickname', names);
  })
  .then(function(rows) {
    console.log(rows);
  })
  .catch(function(error) {
    console.error(error)
  });

knex.select('*').from('users').where({name: 'Tim'})
  .then(function(rows) {
    return knex.insert({user_id: rows[0].id, name: 'Test'}, 'id').into('accounts');
  }).then(function(id) {
    console.log('Inserted Account ' + id);
  }).catch(function(error) {
    console.error(error);
  });

knex.insert({id: 1, name: 'Test'}, 'id').into('accounts')
  .catch(function(error) {
    console.error(error);
  }).then(function() {
    return knex.select('*').from('accounts').where('id', 1);
  }).then(function(rows) {
    console.log(rows[0]);
  }).catch(function(error) {
    console.error(error);
  });

var query: any;
query.then(function(x: any) {
    // doSideEffectsHere(x);
    return x;
});

knex.select('name').from('users').limit(10).map(function(row: any) {
  return row.name;
}).then(function(names) {
  console.log(names);
}).catch(function(e) {
  console.error(e);
});

knex.select('name').from('users').limit(10).reduce(function(memo: any, row: any) {
  memo.names.push(row.name);
  memo.count++;
  return memo;
}, {count: 0, names: []}).then(function(obj) {
  console.log(obj);
}).catch(function(e) {
  console.error(e);
});

knex.select('name').from('users')
  .limit(10)
  .bind(console)
  .then(console.log)
  .catch(console.error);

var values: any[];
// Without return:
knex.insert(values).into('users')
  .then(function() {
    return {inserted: true};
  });

knex.insert(values).into('users').return({inserted: true});

knex.select('name').from('users')
  .where('id', '>', 20)
  .andWhere('id', '<', 200)
  .limit(10)
  .offset(x)
  .exec(function(err: any, rows: any[]) {
    if (err) return console.error(err);
    knex.select('id').from('nicknames').whereIn('nickname', _.pluck(rows, 'name'))
      .exec(function(err: any, rows: any[]) {
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

var stream = knex.select('*').from('users').where(knex.raw('id = ?', [1])).stream(function(stream: any) {
  stream.pipe(writableStream);
}).then(function() {
  // ...
}).catch(function(e: Error) {
  console.error(e);
});

})();

var stream = knex.select('*').from('users').pipe(writableStream);
var app: any;

knex.select('*')
  .from('users')
  .on('query', function(data: any) {
    app.log(data);
  })
  .then(function() {
    // ...
  });

  knex.select('*').from('users').where(knex.raw('id = ?', [1])).toString();

  knex.select('*').from('users').where(knex.raw('id = ?', [1])).toSQL();

//
// Migrations
//
var config = { };
knex.migrate.make(name, config);
knex.migrate.make(name);

knex.migrate.latest(config);
knex.migrate.latest();

knex.migrate.rollback(config);
knex.migrate.rollback();

knex.migrate.currentversion(config);
knex.migrate.currentversion();

knex.seed.make(name, config);
knex.seed.make(name);

knex.seed.run(config);
knex.seed.run();
