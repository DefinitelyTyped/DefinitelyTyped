import couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');

cluster.authenticate('username', 'password');
cluster.authenticate({username: 'username', password: 'password'});
cluster.authenticate(new couchbase.ClassicAuthenticator({'bucket': 'password'}, 'username', 'password'));

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

// Ensure bucket.upsert is composable with normal callbacks
function composable(callback: (err?: Error) => void) {
    bucket.upsert('key', {value: 1}, callback);
}

// From https://developer.couchbase.com/documentation/server/current/sdk/nodejs/n1ql-queries-with-sdk.html
function n1ql_a() {
    const n1qlquery = N1qlQuery.fromString('SELECT name, email FROM users WHERE name=$1');
    bucket.query(n1qlquery, ['Monty Python'], function(err, rows) {
    // ...
    });
}

function n1ql_b() {
    const q = N1qlQuery.fromString('SELECT * FROM `travel-sample` LIMIT 10');
    const req = bucket.query(q);
    req.on('row', function(row) {
    console.log('Got a row');
    });
    req.on('error', function(err) {
    console.error('Got error %j', err);
    });
    req.on('end', function(meta) {
    console.log('All rows received. Metadata is %j:', meta);
    });
}

function n1ql_c() {
    // Insert a document with a random x value
    bucket.upsert('test-doc', {x: Math.round(Math.random()*10000000)}, function(err, res) {
        if (err) {
        throw err;
        }

        var qs = 'SELECT t.*, TOSTRING(META().cas) AS `_cas` FROM `travel-sample` t WHERE META().id="test-doc"';
        var q = couchbase.N1qlQuery.fromString(qs);
        q.consistency(couchbase.N1qlQuery.Consistency.REQUEST_PLUS);
        bucket.query(q, function(err, rows) {
            if (err) {
                throw err;
            }

            if (rows.length !== 1) {
                throw new Error('unexpected number of rows');
            }

            console.log('Query Result:', rows[0]);

            var cas = rows[0]._cas;
            var doc = rows[0];
            delete(doc._cas);
            doc.y = doc.x;

            bucket.replace('test-doc', doc, {cas: cas}, function(err) {
                if (err) {
                    throw err;
                }

                bucket.get('test-doc', function(err, res) {
                if (err) {
                    throw err;
                }

                console.log('Updated:', res.value);

                process.exit(0);
                });
            });
        });
    });
}

// From https://developer.couchbase.com/documentation/server/current/sdk/nodejs/full-text-searching-with-sdk.html
const SearchQuery = couchbase.SearchQuery;
const SearchFacet = couchbase.SearchFacet;

function search_a() {
    let searchQuery = SearchQuery.new('travel-search', SearchQuery.term('office'));
    bucket.query(searchQuery, function(err, res, meta) {
        for (var i = 0; i < res.length; ++i) {
            console.log('Hit:', res[i].id);
        }
    });
}

function search_b() {
    const searchQuery = SearchQuery.new('travel-search', SearchQuery.term('office'));
    searchQuery.addFacet('countries', SearchFacet.term('country', 5));
    bucket.query(searchQuery, function(err, res, meta) {
        console.log('Total Countries:', meta.facets['countries'].total);
    });
}

// From https://developer.couchbase.com/documentation/server/5.1/sdk/nodejs/view-queries-with-sdk.html
const ViewQuery = couchbase.ViewQuery;

function view_a() {
    var query = ViewQuery.from('beer', 'by_name').skip(6).limit(3);
    bucket.query(query, function(err, results) {
        for(let i in results)
            console.log(results[i]);
    });
}

function view_b() {
    var SpatialQuery = couchbase.SpatialQuery;

    var query = SpatialQuery.from('spatial', 'by_location').limit(10);
    bucket.query(query, function(err, results) {
        for(let i in results)
            console.log(results[i]);
    });
}

// From https://developer.couchbase.com/documentation/server/current/sdk/nodejs/sample-app-backend.html
function userSearch(location: string | undefined, description: string | undefined) {
    var qp = couchbase.SearchQuery.conjuncts(couchbase.SearchQuery.term('hotel').field('type'));
    if (location && location !== '*') {
        qp.and(couchbase.SearchQuery.disjuncts(
            couchbase.SearchQuery.matchPhrase(location).field("country"),
            couchbase.SearchQuery.matchPhrase(location).field("city"),
            couchbase.SearchQuery.matchPhrase(location).field("state"),
            couchbase.SearchQuery.matchPhrase(location).field("address")
        ));
    }

    if (description && description !== '*') {
        qp.and(
            couchbase.SearchQuery.disjuncts(
                couchbase.SearchQuery.matchPhrase(description).field("description"),
                couchbase.SearchQuery.matchPhrase(description).field("name")
            ));
    }
}
