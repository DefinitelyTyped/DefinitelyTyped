import TokenStream = require("token-stream");

const tokens = new TokenStream(["a", "b", "c"]);

tokens.lookahead(0); // $ExpectType string | undefined
tokens.advance(); // $ExpectType string | undefined
tokens.peek(); // $ExpectType string | undefined
tokens.defer("d"); // $ExpectType void
