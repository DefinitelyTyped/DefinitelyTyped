import decodeEntities = require('decode-entities');

// $ExpectType string
decodeEntities('&copy; &#33;');
