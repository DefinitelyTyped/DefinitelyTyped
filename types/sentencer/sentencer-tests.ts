import Sentencer, { configure } from 'sentencer';

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
configure(123);
// $ExpectError
configure();
// $ExpectError
Sentencer.configure();
// $ExpectType void
configure({ actions: { test: () => "123" }});
// $ExpectType void
Sentencer.configure({ actions: { test: () => "123" }});
