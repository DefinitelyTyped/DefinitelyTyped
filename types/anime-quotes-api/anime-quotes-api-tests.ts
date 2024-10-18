import Quotes = require("anime-quotes-api");

const quote = new Quotes();

// $ExpectType Promise<object[]>
quote.quotes();
