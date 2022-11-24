import pg_database_url = require('pg-database-url');

// Full config object.
pg_database_url({
  host: 'localhost',
  port: 5432,
  database: 'dbname',
  username: 'user',
  password: 'pass'
});

// Minimum config object.
pg_database_url({
  database: 'dbname',
  username: 'user',
});
