import cloneDeep = require('clone-deep');

cloneDeep<object>(Object.create(null)); // $ExpectType object
cloneDeep<object>({}); // $ExpectType object
cloneDeep({}); // $ExpectType {}
cloneDeep(new Array()); // $ExpectType any[]
cloneDeep<any[]>([]); // $ExpectType any[]
cloneDeep<number>(42); // $ExpectType number
cloneDeep<string>('clone'); // $ExpectType string
cloneDeep<object>({}, true); // $ExpectType object
cloneDeep({}, true); // $ExpectType {}
cloneDeep<number>(42, true); // $ExpectType number
cloneDeep<object>({}, _ => ({})); // $ExpectType object
cloneDeep({}, _ => ({})); // $ExpectType {}
cloneDeep<object>({}, _ => 42); // $ExpectError
cloneDeep(42, _ => ({})); // $ExpectError
