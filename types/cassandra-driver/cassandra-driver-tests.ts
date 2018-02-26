import * as cassandra from 'cassandra-driver';
import * as util from 'util';
import * as fs from 'fs';

const client = new cassandra.Client({
    contactPoints: ['h1', 'h2'],
    keyspace: 'ks1',
    sslOptions: {
        cert: fs.readFileSync('certFilePath')
    }
});

const query = 'SELECT email, last_name FROM user_profiles WHERE key=?';
client.execute(query, ['guy'], function(err, result) {
  console.log('got user profile with email ' + result.rows[0].email);
});

client.execute(query, [ 'guy' ], { prepare: true }).then(
    (result) => console.log(result.first().email),
    (error) => console.log(error)
);
