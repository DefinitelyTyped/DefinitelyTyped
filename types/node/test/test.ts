import test = require('node:test');

{
  test('foo', (t) => {
    // $ExpectType number
    t;
  });
}

