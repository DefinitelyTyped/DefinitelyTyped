import Sentencer = require('sentencer');

// $ExpectError
Sentencer.make();
// $ExpectError
Sentencer.make(123);
// $ExpectType string
Sentencer.make("");
// $ExpectType string
Sentencer.make("123");
// $ExpectType string
Sentencer.make("123--{{ a_noun }}--123");

// $ExpectError
Sentencer.configure(123);
// $ExpectError
Sentencer.configure();
// $ExpectType void
Sentencer.configure({ actions: { test: () => "123" }});
