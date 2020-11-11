import beautify = require("beautify");

beautify(`{"a":1}`, {format: 'json'}); // $ExpectType string
