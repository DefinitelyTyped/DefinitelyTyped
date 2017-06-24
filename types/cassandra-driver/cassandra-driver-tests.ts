import * as cassandra from 'cassandra-driver';
import * as util from 'util';

var client = new cassandra.Client({ contactPoints: ['h1', 'h2'], keyspace: 'ks1'});

var query = 'SELECT email, last_name FROM user_profiles WHERE key=?';
client.execute(query, ['guy'], function(err: any, result: any) {
  console.log('got user profile with email ' + result.rows[0].email);
});