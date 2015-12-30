/// <reference path="couchbase.d.ts"/>

import couchbase = require('couchbase');
import Cluster = couchbase.Cluster;
import ViewQuery = couchbase.ViewQuery;
import Errors = couchbase.errors;

var cluster = new Cluster('my_connection_string');
var clusterManager = cluster.manager();
var bucket = cluster.openBucket('my_bucket');
var bucketManager = bucket.manager();

var query = ViewQuery.from('users', 'date')
    .group_level(2)
    .stale(ViewQuery.Update.BEFORE)
    .limit(5)
    .range([2015, 1, 2, 13, 56, 0], [2015, 1, 2, 16, 43, 57], true);

bucket.query(query, (err, result) => {
    if (err != null && err.code === Errors.genericError) {
        // do something
    } else {
        // do something
    }
});