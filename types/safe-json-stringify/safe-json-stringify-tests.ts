import safeJsonStringify = require('safe-json-stringify');

const obj1 = {foo: 'bar'};
// $ExpectType string
safeJsonStringify(obj1);

class A {
  a() { }
}

// Ensure that concrete classes are widened to `object`
// $ExpectError
const a: A = safeJsonStringify.ensureProperties(new A());
// $ExpectType object
safeJsonStringify.ensureProperties(new A());
// $ExpectType object
safeJsonStringify.ensureProperties(obj1);
// $ExpectType true
safeJsonStringify.ensureProperties(true);
// $ExpectType null
safeJsonStringify.ensureProperties(null);
// $ExpectType 10
safeJsonStringify.ensureProperties(10);
// $ExpectType "wat"
safeJsonStringify.ensureProperties('wat');

safeJsonStringify(obj1, null, 2);
safeJsonStringify(obj1, null, ' ');
safeJsonStringify(obj1, (_k: string, v) => 'wat', 2);
safeJsonStringify(obj1, (_k: string, v: any) => v, '  ');
safeJsonStringify(obj1, ['foo'], 2);
safeJsonStringify(obj1, ['foo', 0], '  ');
