import strictUriEncode = require('strict-uri-encode');

// $ExpectType string
strictUriEncode('!#$@*()jsjs');

// $ExpectError
strictUriEncode([12, 23]);
