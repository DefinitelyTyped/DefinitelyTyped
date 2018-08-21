import getType = require('jest-get-type');

getType([]); // $ExpectType ValueType
getType(false);
getType(null);
getType(1000);
getType(/d+/);
getType(new Map());
getType(new Set());
getType(new Date());
getType('ts');
getType(Symbol());
getType(undefined);

getType(); // $ExpectError
getType([], undefined); // $ExpectError
getType([], ''); // $ExpectError
