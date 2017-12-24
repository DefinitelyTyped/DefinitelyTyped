import caseless, { httpify } from "caseless";

caseless(); // $ExpectType Caseless
caseless({}); // $ExpectType Caseless
caseless(null); // $ExpectError
caseless(1); // $ExpectError
caseless("2"); // $ExpectError

const c = caseless();

c.set({}); // $ExpectType void
c.set('foo', 'bar'); // $ExpectType string | false
c.set('foo', 'bar', false); // $ExpectType string | false
c.set('foo', new Date()); // $ExpectType string | false
c.set(10, 'bar'); // $ExpectError

c.get('foo'); // $ExpectType any
c.get(10); // $ExpectError

c.has('foo'); // $ExpectType string | false
c.has(10); // $ExpectError

c.swap('foo'); // $ExpectType void
c.swap(10); // $ExpectError

c.del('foo'); // $ExpectType boolean

httpify(null, {}); // $ExpectError
httpify(1, {}); // $ExpectError
httpify("2", {}); // $ExpectError
httpify({}, null); // $ExpectError
httpify({}, 1); // $ExpectError
httpify({}, "2"); // $ExpectError

httpify({}, {}); // $ExpectType Caseless
