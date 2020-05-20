import * as Pool from 'pg-pool';
import * as pg from 'pg';

class CustomClient extends pg.Client {
    sayHi(): string {
        return `hi, I am ${this.toString()}`;
    }
}

// use custom client constructor, then with connect() you will get CustomClient instance extended with pg.PoolClient interface
const pool = new Pool({
    Client: CustomClient,
});

// you can pass properties to the pool
// these properties are passed unchanged to both the node-postgres Client constructor
// and the node-pool (https://github.com/coopernurse/node-pool) constructor
// allowing you to fully configure the behavior of both
const pool2 = new Pool({
    database: 'postgres',
    user: 'brianc',
    password: 'secret!',
    port: 5432,
    ssl: true,
    max: 20, // set pool max size to 20
    min: 4, // set min pool size to 4
    idleTimeoutMillis: 1000, // close idle clients after 1 second
});

const pool3 = new Pool();
const pool4 = new Pool({}, CustomClient);

new pool4.Client().sayHi();

pool.connect().then(client => {
    client.sayHi();
    client.query('select $1::text as name', ['pg-pool']).then(res => {
        client.release();
        console.log('hello from', res.rows[0].name);
    })
        .catch(e => {
            client.release();
            console.error('query error', e.message, e.stack);
        });
});

async function helperTest() {
    const time = await pool.query('SELECT NOW()');
    const name = await pool.query('select $1::text as name', ['brianc']);
    console.log(name.rows[0].name, 'says hello at', time.rows[0].name);
}

pool.query('SELECT $1::text as name', ['brianc'], (err, res) => {
    console.log(res.rows[0].name); // brianc
});

pool.end();
