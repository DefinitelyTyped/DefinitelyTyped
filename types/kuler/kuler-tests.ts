import kuler = require("kuler");

// $ExpectType string
kuler("test").style("red");

// @ts-expect-error
kuler("test").style(new Symbol(5));

// $ExpectType string
kuler("test", "red");

// @ts-expect-error
kuler("test", new Symbol(5));

const kulerInstance = kuler("test");

// $ExpectType string
kulerInstance.text;

// $ExpectType string
kulerInstance.ansi(1, 2, 3);

// $ExpectType [number, number, number]
kulerInstance.hex("#ffffff");

// $ExpectType string
kulerInstance.rgb(1, 2, 3);

// $ExpectType string
kulerInstance.reset();

// $ExpectType string
kulerInstance.style("red");

// $ExpectType string
kulerInstance.suffix;

// $ExpectType string
kulerInstance.prefix;

// @ts-expect-error
kulerInstance.ansi(new Symbol(5), 2, 3);
