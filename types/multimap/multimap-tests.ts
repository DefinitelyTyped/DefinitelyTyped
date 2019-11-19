import Multimap = require('multimap');

var map: Multimap = new Multimap();

map.size;                 // 4
map.count;                // 2

map.get('a');             // ['one', 'two']
map.get('b');             // [1, 2]

map.has('a');             // true
map.has('foo');           // false

map.has('a', 'one');      // true
map.has('b', 3);          // false

map.set('a', 'three');
map.size;                 // 5
map.count;                // 2
map.get('a');             // ['one', 'two', 'three']

map.set('b', 3, 4);
map.size;                 // 7
map.count;                // 2

map.delete('a', 'three'); // true
map.delete('x');          // false
map.delete('a', 'four');  // false
map.delete('b');          // true

map.size;                 // 2
map.count;                // 1

map.set('b', 1, 2);
map.size;                 // 4
map.count;                // 2


map.forEach(function (value: any, key: any) {
    // iterates { 'one', 'a' }, { 'two', 'a' }, { 1, b }, { 2, 'b' }
});

map.forEachEntry(function (entry: any, key: any) {
    // iterates {['one', 'two'], 'a' }, {[1, 2], 'b' }
});


var keys = map.keys();      // iterator with ['a', 'b']
keys.next().value;          // 'a'
var values = map.values();  // iterator ['one', 'two', 1, 2]
values.next().value;        // 1

map.clear();                // undefined
map.size;                   // 0
map.count;                  // 0