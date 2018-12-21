import decodeEntities = require('decode-entities');

// $ExpectType string
decodeEntities('&#33;'); 