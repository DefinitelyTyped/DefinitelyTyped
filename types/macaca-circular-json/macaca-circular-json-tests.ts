import CircularJSON = require('macaca-circular-json');

const replacer = (key: any, val: any) => {
  return val;
};

const replacerArray = ['a', 'x'];

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
