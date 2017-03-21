
/// <reference types="node" />

import compare = require('buffer-compare');

let result: number;

result = compare(new Buffer(''), new Buffer(''));
result = compare([], []);
result = compare('', '');
result = compare(new Buffer(''), []);
result = compare([], '');
result = compare('', new Buffer(''));

result = compare<Buffer>(new Buffer(''), new Buffer(''));
result = compare<any[]>([], []);
result = compare<string>('', '');
result = compare<Buffer|any[]>(new Buffer(''), []);
result = compare<any[]|string>([], '');
result = compare<string|Buffer>('', new Buffer(''));

result = compare<Buffer, Buffer>(new Buffer(''), new Buffer(''));
result = compare<any[], any[]>([], []);
result = compare<string, string>('', '');
result = compare<Buffer, any[]>(new Buffer(''), []);
result = compare<any[], string>([], '');
result = compare<string, Buffer>('', new Buffer(''));
