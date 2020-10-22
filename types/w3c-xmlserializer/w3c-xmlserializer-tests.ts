import serialize = require('w3c-xmlserializer');

serialize(document); // $ExpectType string
serialize(document.documentElement); // $ExpectType string
serialize(window); // $ExpectError

serialize(document, { requireWellFormed: true }); // $ExpectType string
serialize(document.documentElement, { requireWellFormed: true }); // $ExpectType string
serialize(window, { requireWellFormed: true }); // $ExpectError
