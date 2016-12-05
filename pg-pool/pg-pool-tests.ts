import {Pool} from "pg-pool";

let pool = new Pool()

//you can pass properties to the pool
//these properties are passed unchanged to both the node-postgres Client constructor
//and the node-pool (https://github.com/coopernurse/node-pool) constructor
//allowing you to fully configure the behavior of both
let pool2 = new Pool({
  database: 'postgres',
  user: 'brianc',
  password: 'secret!',
  port: 5432,
  ssl: true,
  max: 20, //set pool max size to 20
  min: 4, //set min pool size to 4
  idleTimeoutMillis: 1000 //close idle clients after 1 second
})

pool.connect().then(client => {
  client.query('select $1::text as name', ['pg-pool']).then(res => {
    client.release()
    console.log('hello from', res.rows[0].name)
  })
  .catch(e => {
    client.release()
    console.error('query error', e.message, e.stack)
  })
})

async function helperTest() {
    const time = await pool.query('SELECT NOW()');
    const name = await pool.query('select $1::text as name', ['brianc']);
    console.log(name.rows[0].name, 'says hello at', time.rows[0].name);
}

pool.query('SELECT $1::text as name', ['brianc'], function (err, res) {
  console.log(res.rows[0].name) // brianc
})

pool.end();
