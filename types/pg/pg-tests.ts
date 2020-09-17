import { types, Client, QueryArrayConfig, Pool } from 'pg';

// https://github.com/brianc/node-pg-types
// tslint:disable-next-line no-unnecessary-callback-wrapper
types.setTypeParser(20, val => Number(val));

const client = new Client({
    host: 'my.database-server.com',
    port: 5334,
    user: 'database-user',
    password: 'secretpassword!!',
    application_name: 'DefinitelyTyped',
    keepAlive: true,
});
client.connect(err => {
    if (err) {
        console.error('Could not connect to postgres', err);
        return;
    }
    client.query("SELECT NOW() AS 'theTime'", (err, result) => {
        if (err) {
            console.error('Error running query', err);
            return;
        }
        console.log(result.rowCount);
        console.log(result.rows[0]['theTime']);
        client.end();
        return null;
    });
    return null;
});
client.on('end', () => console.log('Client was disconnected.'));

client
    .connect()
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

interface Person {
    name: string;
}

client.query<Person, [string]>('SELECT $1::text as name', ['brianc'], (err, res) => {
    if (err) throw err;
    console.log(res.rows[0].name);
    client.end();
});

const query = {
    name: 'get-name',
    text: 'SELECT $1::text',
    values: ['brianc'],
};
client.query(query, (err, res) => {
    if (err) {
        console.error(err.stack);
    } else {
        console.log(res.rows);
        console.log(res.fields.map(f => f.name));
    }
});
client
    .query(query)
    .then(res => {
        console.log(res.rows);
        console.log(res.fields.map(f => f.name));
    })
    .catch(e => {
        console.error(e.stack);
    });
client
    .query(query, ['brianc'])
    .then(res => {
        console.log(res.rows);
        console.log(res.fields.map(f => f.name));
    })
    .catch(e => {
        console.error(e.stack);
    });

const queryArrMode: QueryArrayConfig = {
    name: 'get-name-array',
    text: 'SELECT $1::text',
    values: ['brianc'],
    rowMode: 'array',
};
client.query(queryArrMode, (err, res) => {
    if (err) {
        console.error(err.stack);
    } else {
        console.log(res.rows);
        console.log(res.fields.map(f => f.name));
    }
});
client
    .query(queryArrMode)
    .then(res => {
        console.log(res.rows);
        console.log(res.fields.map(f => f.name));
    })
    .catch(e => {
        console.error(e.stack);
    });
client
    .query({
        text: 'select 1',
        rowMode: 'array',
    })
    .then(res => console.log(res.fields[0]));

client.end(err => {
    console.log('client has disconnected');
    if (err) {
        console.log('error during disconnection', err.stack);
    }
});

client
    .end()
    .then(() => console.log('client has disconnected'))
    .catch(err => console.error('error during disconnection', err.stack));

// pg.Pool
// https://node-postgres.com/api/pool

// no params ctor
const poolParameterlessCtor = new Pool();

const poolOne = new Pool({
    connectionString: 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb',
});

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'database-user',
    database: 'my_db',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    keepAlive: false,
    log: (...args) => {
        console.log.apply(console, args);
    },
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

pool.connect().then(client => {
    client
        .query({ text: 'SELECT $1::int AS number', values: ['1'], rowMode: 'array' })
        .then(result => {
            console.log(result.rowCount, result.rows[0][0], result.fields[0].name);
        })
        .then(
            () => client.release(),
            e => client.release(e),
        );
});

pool.on('error', (err, client) => {
    console.error('idle client error', err.message, err.stack);
});

(async () => {
    const client = await pool.connect();
    await client.query('SELECT 1');
    client.release(true);
})();

pool.query('SELECT $1::text as name', ['brianc'], (err, result) => {
    if (err) {
        console.error('Error executing query', err.stack);
        return;
    }
    console.log(result.rows[0].name);
});

pool.query('SELECT $1::text as name', ['brianc'])
    .then(res => console.log(res.rows[0].name))
    .catch(err => console.error('Error executing query', err.stack));
pool.query({ text: 'SELECT $1::text as name' }, ['brianc'])
    .then(res => console.log(res.rows[0].name))
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

// client constructor tests
// client config object tested above
let c = new Client(); // empty constructor allowed
c = new Client('connectionString'); // connection string allowed
c = new Client({
    connectionString: 'connectionString',
    connectionTimeoutMillis: 1000, // connection timeout optionally specified
});
