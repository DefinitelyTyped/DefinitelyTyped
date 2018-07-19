import couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('default');

bucket.on('connect', () => console.error('Connected!'));
bucket.on('error', err => console.error('Connection failed!'));

bucket.once('connect', () => console.error('Connected!'));
bucket.once('error', err => console.error('Connection failed!'));

bucket.upsert('testdoc', { name: 'Frank' }, (error) => {
    if (error) throw error;

    bucket.get('testdoc', (err, result) => {
        if (err) throw err;

        console.log(result.value);
        // {name: Frank} 
    });
});