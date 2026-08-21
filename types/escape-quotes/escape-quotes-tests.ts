import escapeQuote = require("escape-quotes");

// $ExpectType string
escapeQuote("I'm a little teapot");
// => I\'m a little teapot

// $ExpectType string
escapeQuote("No thanks, I already have a penguin", "a", "*");
// => No th*anks, I *alre*ady h*ave *a penguin

// @ts-expect-error
escapeQuote(1);

// @ts-expect-error
escapeQuote([]);

// @ts-expect-error
escapeQuote(undefined);

// @ts-expect-error
escapeQuote(null);

// @ts-expect-error
escapeQuote("aaa", undefined, "\\");
