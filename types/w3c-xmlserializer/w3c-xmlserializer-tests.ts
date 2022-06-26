import serialize = require('w3c-xmlserializer');

serialize(document); // $ExpectType string
serialize(document.documentElement); // $ExpectType string
// @ts-expect-error
serialize(window);

serialize(document, { requireWellFormed: true }); // $ExpectType string
serialize(document.documentElement, { requireWellFormed: true }); // $ExpectType string
// @ts-expect-error
serialize(window, { requireWellFormed: true });
