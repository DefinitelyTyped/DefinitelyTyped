import pg_database_url = require('pg-database-url');

pg_database_url({
  host: 'localhost',
  port: 5432,
  database: 'dbname',
  username: 'user',
  password: 'pass'
});
