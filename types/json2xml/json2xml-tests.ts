import json2xml = require("json2xml");

json2xml([]); // $ExpectType string
json2xml({}); // $ExpectType string
json2xml(""); // $ExpectType string
json2xml(undefined); // $ExpectType string

json2xml({}, { header: true }); // $ExpectType string
json2xml({}, { attributes_key: 'attributes' }); // $ExpectType string
