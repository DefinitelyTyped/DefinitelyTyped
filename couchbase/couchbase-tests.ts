import couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('default');

bucket.upsert('testdoc', { name: 'Frank' }, (error) => {
    if (error) throw error;

    bucket.get('testdoc', (err, result) => {
        if (err) throw err;

        console.log(result.value);
        // {name: Frank} 
    });
});