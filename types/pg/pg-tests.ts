import * as pg from "pg";

// https://github.com/brianc/node-pg-types
// tslint:disable-next-line no-unnecessary-callback-wrapper
pg.types.setTypeParser(20, val => Number(val));

const client = new pg.Client({
  host: 'my.database-server.com',
  port: 5334,
  user: 'database-user',
  password: 'secretpassword!!',
});
client.connect(err => {
    if (err) {
        console.error("Could not connect to postgres", err);
        return;
    }
    client.query("SELECT NOW() AS 'theTime'", (err, result) => {
        if (err) {
            console.error("Error running query", err);
            return;
        }
        console.log(result.rowCount);
        console.log(result.rows[0]["theTime"]);
        client.end();
        return null;
    });
    return null;
});
client.on('end', () => console.log("Client was disconnected."));

client.connect()
  .then(() => console.log('connected'))
  .catch(e => console.error('connection error', e.stack));

client.query('SELECT NOW()', (err, res) => {
  if (err) throw err;
  console.log(res);
  client.end();
});

client.query('SELECT $1::text as name', ['brianc'], (err, res) => {
  if (err) throw err;
  console.log(res);
  client.end();
});

const query = {
  name: 'get-name',
  text: 'SELECT $1::text',
  values: ['brianc'],
  rowMode: 'array'
};
client.query(query, (err, res) => {
  if (err) {
    console.error(err.stack);
  } else {
    console.log(res.rows);
  }
});
client.query(query)
  .then(res => {
    console.log(res.rows);
  })
  .catch(e => {
    console.error(e.stack);
  });

client.end((err) => {
  console.log('client has disconnected');
  if (err) {
    console.log('error during disconnection', err.stack);
  }
});

client.end()
  .then(() => console.log('client has disconnected'))
  .catch(err => console.error('error during disconnection', err.stack));

const poolOne = new pg.Pool({
  connectionString: 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
});

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  user: 'database-user',
  database: 'my_db',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
console.log(pool.totalCount);
pool.connect((err, client, done) => {
  if (err) {
    console.error('error fetching client from pool', err);
    return;
  }
  client.query('SELECT $1::int AS number', ['1'], (err, result) => {
    done();

    if (err) {
      console.error('error running query', err);
      return;
    }
    console.log(result.rows[0].number);
  });
});

pool.on('error', (err, client) => {
  console.error('idle client error', err.message, err.stack);
});

pool.query('SELECT $1::text as name', ['brianc'], (err, result) => {
  if (err) {
    console.error('Error executing query', err.stack);
    return;
  }
  console.log(result.rows[0].name);
});

pool.query('SELECT $1::text as name', ['brianc'])
  .then((res) => console.log(res.rows[0].name))
  .catch(err => console.error('Error executing query', err.stack));

pool.end(() => {
  console.log('pool has ended');
});

pool.end().then(() => console.log('pool has ended'));

(async () => {
  const client = await pool.connect();
  await client.query('SELECT NOW()');
  client.release();
})();
