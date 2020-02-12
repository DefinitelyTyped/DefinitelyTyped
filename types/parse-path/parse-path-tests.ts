import parsePath = require('parse-path');

const parsed = parsePath('http://www.example.com');

parsed.hash; // $ExpectType string
parsed.href; // $ExpectType string
parsed.pathname; // $ExpectType string
parsed.port; // $ExpectType number | null
parsed.protocol; // $ExpectType Protocol
parsed.protocols; // $ExpectType Protocol[]
parsed.resource; // $ExpectType string
parsed.search; // $ExpectType string
parsed.user; // $ExpectType string
