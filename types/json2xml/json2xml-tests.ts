import json2xml = require("json2xml");

json2xml([]); // $ExpectType string
json2xml({}); // $ExpectType string
json2xml(""); // $ExpectType string
json2xml(undefined); // $ExpectType string
