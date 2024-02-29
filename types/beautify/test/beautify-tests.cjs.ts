import beautify from "beautify";

beautify(`{"a":1}`, { format: "json" }); // $ExpectType string
