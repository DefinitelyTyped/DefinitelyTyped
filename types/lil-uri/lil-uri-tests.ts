import uri = require('lil-uri');

//
// Tests are based on code samples on https://github.com/lil-js/uri#readme
//

//
// Parser
//

const url = uri('http://user:pass@example.com:8080/bar/foo.xml?foo=bar&hello=world&#hash=1');

// $ExpectType string
url.protocol(); // -> http

// $ExpectType string
url.host(); // -> example.com:8080

// $ExpectType string
url.hostname(); // -> example.com

// $ExpectType number
url.port(); // -> 8080

// $ExpectType Credentials
url.auth(); // -> { user: 'user', password: 'pass' }

// $ExpectType string
url.user(); // -> user

// $ExpectType string
url.password(); // -> pass

// $ExpectType string
url.path(); // -> /bar/foo.xml

// $ExpectType string
url.search(); // -> foo=bar&hello=world

// $ExpectType QueryString
url.query(); // -> { foo: 'bar', hello: 'world' }

// $ExpectType string
url.hash(); // -> hash=1

//
// Builder
//

// $ExpectType string
uri()
    .protocol('https')
    .host('example.com')
    .port('8080')
    .auth('user:pass')
    .path('/bar/foo.xml')
    .query({ foo: 'bar', hello: 'world' })
    .hash('hash=1')
    .build(); // -> http://@example.com:8080/bar/foo.xml?foo=bar&hello=world&#frament=1
