import parsePath = require('parse-path');

const parsed = parsePath('http://domain.com/path/name?foo=bar&bar=42#some-hash');
parsed.hash; // $ExpectType string
parsed.host; // $ExpectType string
parsed.href; // $ExpectType string
parsed.pathname; // $ExpectType string
parsed.password; // $ExpectType string
parsed.parse_failed; // $ExpectType boolean
parsed.port; // $ExpectType string
parsed.protocol; // $ExpectType Protocol
parsed.protocols; // $ExpectType Protocol[]
parsed.resource; // $ExpectType string
parsed.search; // $ExpectType string
parsed.user; // $ExpectType string
parsed.query; // $ExpectType Record<string, string>
parsed.query.bar; // $ExpectType string
