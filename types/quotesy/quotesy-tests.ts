import quotesy = require("quotesy");

quotesy.parse_json(); // $ExpectType Quote[]
quotesy.random(); // $ExpectType Quote
quotesy.random_by_tag(""); // $ExpectType Quote
