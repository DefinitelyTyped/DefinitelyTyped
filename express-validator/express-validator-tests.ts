/// <reference path="./express-validator.d.ts"/>

/* Usage Example from https://github.com/ctavan/express-validator */

import util = require('util')
import express = require('express')
import expressValidator = require('express-validator')
var app = express();

app.use(expressValidator());

app.post('/:urlparam', function(req: express.Request, res: express.Response) {

  // checkBody only checks req.body; none of the other req parameters
  // Similarly checkParams only checks in req.params (URL params) and
  // checkQuery only checks req.query (GET params).
  req.checkBody('postparam', 'Invalid postparam').notEmpty().isInt();
  req.checkParams('urlparam', 'Invalid urlparam').isAlpha();
  req.checkQuery('getparam', 'Invalid getparam').isInt();
  req.checkHeader('testHeader', 'Invalid testHeader').isLowercase().isUppercase();
  req.checkFiles('testFiles', 'Invalid testFiles').isUrl();


  // OR assert can be used to check on all 3 types of params.
  // req.assert('postparam', 'Invalid postparam').notEmpty().isInt();
  // req.assert('urlparam', 'Invalid urlparam').isAlpha();
  // req.assert('getparam', 'Invalid getparam').isInt();

  req.sanitize('postparam').toBoolean();
  req.filter('postparam').toBoolean();

  var errors = req.validationErrors();
  var mappedErrors = req.validationErrors(true);

  if (errors) {
    res.status(400).send('There have been validation errors: ' + util.inspect(errors));
    return;
  }
  res.json({
    urlparam: req.param('urlparam'),
    getparam: req.param('getparam'),
    postparam: req.param('postparam')
  });
});

app.listen(8888);
