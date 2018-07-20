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
