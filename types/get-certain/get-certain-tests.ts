import getCertain = require('get-certain');

const map = new Map<string, number>();

map.set('foo', 1);

// $ExpectType number
getCertain(map, 'foo');
getCertain(map, 'bar', 'This map is barless.');
