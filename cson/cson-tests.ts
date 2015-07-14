/// <reference path="cson.d.ts" />

import cson = require('cson');

var data: string = cson.stringify({hello: 'world'});
console.log('cson.stringify => %s', data);

data = cson.createString({hello: 'world'});
console.log('cson.createString => %s', data);

data = cson.createJSONString({hello: 'world'});
console.log('cson.createJSONString => %s', data);

data = cson.createCSONString({hello: 'world'});
console.log('cson.createCSONString => %s', data);

var obj: Object = cson.parse(data);
console.log('cson.parse => ' + obj);

obj = cson.parseCSONString(data);
console.log('cson.parseCSONString => ' + obj);

obj = cson.parseJSONString('{"hello": "world"}');
console.log('cson.parseJSONString => ' + obj);

obj = cson.parseString("hello: 'world'");
console.log('cson.parseString => ' + obj);

obj = cson.load('cson-test.cson');
console.log('cson.load => ' + obj);

obj = cson.parseCSONFile('cson-test.cson');
console.log('cson.parseCSONFile => ' + obj);

obj = cson.parseJSONFile('cson-test.json');
console.log('cson.parseJSONFile => ' + obj);
