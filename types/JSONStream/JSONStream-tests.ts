import JSONStream from 'JSONStream';

let jsonStream: JSONStream.JSONStream;

// parse with string pattern
jsonStream = JSONStream.parse('');
jsonStream = JSONStream.parse('', (data, path) => data);

// parse with array pattern
jsonStream = JSONStream.parse(['', { emitKey: true, emitPath: true, recurse: true }]);
jsonStream = JSONStream.parse(['', { emitKey: true, emitPath: true, recurse: true }], (data, path) => data);

// stringify array
jsonStream = JSONStream.stringify();
jsonStream = JSONStream.stringify(false);
jsonStream = JSONStream.stringify('', '', '');

// stringify object
jsonStream = JSONStream.stringifyObject();
jsonStream = JSONStream.stringifyObject(false);
jsonStream = JSONStream.stringifyObject('', '', '');
