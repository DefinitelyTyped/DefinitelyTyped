import couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('default');
var N1qlQuery = couchbase.N1qlQuery;

bucket.on('connect', () => console.error('Connected!'));
bucket.on('error', err => console.error('Connection failed!'));

bucket.once('connect', () => console.error('Connected!'));
bucket.once('error', err => console.error('Connection failed!'));

bucket.manager().createPrimaryIndex(function() {
    bucket.upsert('user:king_arthur', {
        'email': 'kingarthur@couchbase.com', 'interests': ['Holy Grail', 'African Swallows']
    },
    function(err, result) {
        bucket.get('user:king_arthur', function(err, result) {
            console.log('Got result: %j', result.value);
            bucket.query(
                N1qlQuery.fromString('SELECT * FROM bucketname WHERE $1 in interests LIMIT 1'),
                ['African Swallows'],
                function(err, rows) {
                    console.log("Got rows: %j", rows);
                });
        });
    });
});
