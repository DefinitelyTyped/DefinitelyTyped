

import hash = require('object-hash');

var hashed: string;

var obj = { any: true };

// hash object
hashed = hash(obj);

hashed = hash.sha1(obj);
hashed = hash.keys(obj);
hashed = hash.MD5(obj);
hashed = hash.keysMD5(obj);

var options = {
	algorithm: 'md5',
	encoding: 'utf8',
	excludeValues: true
};

hashed = hash(obj, options);

// HashTable
var table: any;
table = hash.HashTable();
table = hash.HashTable(options);

table = table.add(obj);
table = table.add(obj, obj);
table = table.remove(obj);
table = table.remove(obj, obj);

var has: boolean = table.hasKey('whatEver');
var value: any = table.getValue('whatEver');
var count: number = table.getCount('whatEver');

var tableObject = table.table();
tableObject['whatEver'].value;
tableObject['whatEver'].count;

var tableArray = table.toArray();
tableArray.shift().value;
tableArray.pop().count;
tableArray[2].hash;

table = table.reset();
