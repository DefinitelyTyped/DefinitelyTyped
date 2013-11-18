/// <reference path="couchbase.d.ts"/>

import couchbase = require('couchbase');
var db = new couchbase.Connection({ bucket: "default" }, function (err) {
    if (err) throw err;

    db.set('testdoc', { name: 'Frank' }, function (err, result) {
        if (err) throw err;

        db.get('testdoc', function (err, result) {
            if (err) throw err;

            console.log(result.value);
            // {name: Frank}
        });
    });
});