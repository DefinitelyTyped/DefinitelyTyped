import objectPath = require('object-path');

const object = {
    one: 1,
    two: {
        three: 3,
        four: ['4'],
    },
};

objectPath.get(object, []);
objectPath.get(object, [1, 2]);
objectPath.get(object, [1, '2']);
objectPath.get(object, 1);
objectPath.get(object, '1');

objectPath.del(object, 'a'); // $ExpectType { [key: string]: any; }
objectPath.has(object, 'a'); // $ExpectType boolean
objectPath.get(object, 'a'); // $ExpectType any
objectPath.get(object, 'a', 1); // $ExpectType 1
objectPath.set(object, 'a', 1); // $ExpectType 1 | undefined
objectPath.set(object, 'a', 1, true); // $ExpectType 1 | undefined
objectPath.push(object, 'a', 1, 2); // $ExpectType void
objectPath.coalesce(object, 'a', 1); // $ExpectType 1
objectPath.coalesce(object, 'a'); // $ExpectType any
objectPath.coalesce(object, [['a']]); // $ExpectType any
objectPath.coalesce<number>(object, 'a'); // $ExpectType number | undefined
objectPath.empty(object, 'a'); // $ExpectType any
objectPath.ensureExists(object, 'a', 1); // $ExpectType 1
objectPath.ensureExists(object, 'a'); // $ExpectType any
objectPath.ensureExists<number>(object, 'a'); // $ExpectType number | undefined
objectPath.insert(object, 'a', 1); // $ExpectType void
objectPath.insert(object, 'a', 1, 2); // $ExpectType void

const obj = objectPath(object);

obj.del('a'); // $ExpectType { [key: string]: any; }
obj.has('a'); // $ExpectType boolean
obj.get('a'); // $ExpectType any
obj.get('a', 1); // $ExpectType 1
obj.set('a', 1); // $ExpectType 1 | undefined
obj.set('a', 1, true); // $ExpectType 1 | undefined
obj.push('a', 1, 2); // $ExpectType void
obj.coalesce('a', 1); // $ExpectType 1
obj.coalesce('a'); // $ExpectType any
obj.coalesce([['a']]); // $ExpectType any
obj.coalesce<number>('a'); // $ExpectType number | undefined
obj.empty('a'); // $ExpectType any
obj.ensureExists('a', 1); // $ExpectType 1
obj.ensureExists('a'); // $ExpectType any
obj.ensureExists<number>('a'); // $ExpectType number | undefined
obj.insert('a', 1); // $ExpectType void
obj.insert('a', 1, 2); // $ExpectType void

objectPath.withInheritedProps; // $ExpectType ObjectPathStatic
objectPath.create(); // $ExpectType ObjectPathStatic
objectPath.create({ includeInheritedProps: true }); // $ExpectType ObjectPathStatic
