import protocols = require('protocols');

protocols('git+ssh://git@some-host.com/and-the-path/name'); // $ExpectType string[]
protocols('http://example.com', true); // $ExpectType string
protocols('ftp://example.com', 1); // $ExpectType string
protocols('https://example.com', false); // $ExpectType string[]
