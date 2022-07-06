import Sentencer = require('sentencer');

// @ts-expect-error
Sentencer.make();
// @ts-expect-error
Sentencer.make(123);
// $ExpectType string
Sentencer.make("");
// $ExpectType string
Sentencer.make("123");
// $ExpectType string
Sentencer.make("123--{{ a_noun }}--123");

// @ts-expect-error
Sentencer.configure(123);
// @ts-expect-error
Sentencer.configure();
// $ExpectType void
Sentencer.configure({ actions: { test: () => "123" }});
