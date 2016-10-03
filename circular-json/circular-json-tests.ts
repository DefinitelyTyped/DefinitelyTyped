/// <reference path="circular-json.d.ts" />

import CircularJSON = require('circular-json');

var replacer = (key: any, val: any) => {
  return val;
}

var replacerArray = ['a', 'x'];

// implements JSON interface
var json_obj: JSON = CircularJSON;

CircularJSON.parse('{"a":"b"}');

CircularJSON.parse('{"a":"b"}', replacer);

// just stringify a value
CircularJSON.stringify({a: 'b'});

// do replacements for part of the object
CircularJSON.stringify({a: 'b'}, replacer);
CircularJSON.stringify({a: 'b'}, replacerArray);

// add whitespace to the output
CircularJSON.stringify({a: 'b'}, replacer, 5);
CircularJSON.stringify({a: 'b'}, replacerArray, 5);

// do not actually set up a re-parseable object
CircularJSON.stringify({a: 'b'}, replacer, 5, true);
CircularJSON.stringify({a: 'b'}, replacerArray, 5, true);
