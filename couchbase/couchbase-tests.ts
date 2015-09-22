/// <reference path="couchbase.d.ts"/>

import couchbase = require('couchbase');
var db = new couchbase.Connection({ bucket: "default" }, function (err) {
    if (err) throw err;

	// TS 0.9.5 bug https://typescript.codeplex.com/workitem/2035, todo: remove cast after fix
	(<couchbase.Connection>db).set('testdoc', { name: 'Frank' }, function (err, result) {
		if (err) throw err;

	    var s: string = err.message;

		// TS 0.9.5 bug https://typescript.codeplex.com/workitem/2035, todo: remove cast after fix
		(<couchbase.Connection>db).get('testdoc', function (err, result) {
            if (err) throw err;

            console.log(result.value);
            // {name: Frank}
        });
    });
});