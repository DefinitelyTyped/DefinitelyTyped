import format = require("diffable-html");

format("<p>Hello world</p>"); // $ExpectType string

format("<p>Hello world</p>", { sortAttributes: names => names.sort() }); // $ExpectType string
