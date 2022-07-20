import validateObjectId = require('validate-objectid');

// $ExpectType boolean
validateObjectId('ab89cfd');

// @ts-expect-error
validateObjectId();
