/// <reference path="./express-validator.d.ts" />

// @todo Most of the sanitize/validator methods are not tested here.

import express = require('express');
import expressValidator = require('express-validator');

var app = express();

// Add the middleware to make sure it includes.
app.use(expressValidator({
	errorFormatter: function(param: string, msg: string, value: string): {} {
		return {};
	}
}));

var router: express.Router = express.Router();

// Add a sample route so we can use the request.
router.get('/test/:testParam', function(req: express.Request, res: express.Response): void {

	// Various different request tests.
	// The fluid calls are just random, making sure to cover a portion of the Validator.
	req.checkParams('testParam', 'Invalid testParam').notEmpty().isInt();
	req.checkBody('testBody', 'Invalid testBody').isNumeric();
	req.checkFiles('testFiles', 'Invalid testFiles').isUrl();
	req.checkQuery('testQuery', 'Invalid testQuery').isDate();
	req.checkHeader('testHeader', 'Invalid testHeader').isLowercase().isUppercase();

	var test = req.filter('postparam').toBoolean();
	var test2 = req.sanitize('postparam').toInt();

	var errors = req.validationErrors();
	var mappedErrors = req.validationErrors(true);
});