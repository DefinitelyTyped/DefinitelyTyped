/// <reference path="../jjv/jjv.d.ts" />
/// <reference path="jjve.d.ts" />

import jjv = require('jjv');
import jjve = require('jjve');

var env: jjv.Env = jjv();
var je: jjve.Env = jjve(env);

var schema = {
	type: 'object',
	properties: {
		ok: {
			type: 'boolean',
		},
	},
};

var data = { ok: 1 };

var result = env.validate(schema, data);

if (result) {
	var errors = je(schema, data, result);
	console.log(JSON.stringify(errors, null, 4));
}

errors.forEach(error =>
	console.log(
		'code: %s, message: %s, data: %s, path: %s',
		error.code,
		error.message,
		error.data,
		error.path));
