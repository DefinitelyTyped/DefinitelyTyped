import strictUriEncode = require('strict-uri-encode');

// $ExpectType string
strictUriEncode('!#$@*()jsjs');

// @ts-expect-error
strictUriEncode([12, 23]);
