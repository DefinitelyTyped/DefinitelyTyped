import validateObjectId = require('validate-objectid');

// $ExpectType boolean
validateObjectId('ab89cfd');

// $ExpectError
validateObjectId();
