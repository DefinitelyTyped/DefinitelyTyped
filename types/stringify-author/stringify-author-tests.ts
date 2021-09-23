import stringify = require("stringify-author");

stringify({});
stringify({ name: "", email: "", url: "" });

// $ExpectType string
stringify({});
