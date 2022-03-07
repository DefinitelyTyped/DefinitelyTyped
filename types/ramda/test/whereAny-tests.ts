import * as R from 'ramda';

() => {
  // pred :: Object -> Boolean
  // $ExpectType (testObj: { a: string; b: string; x: number; y: number; }) => boolean
  const pred = R.whereAny({
    a: R.equals('foo'),
    b: R.complement(R.equals('xxx')),
    x: R.gt(R.__, 10),
    y: R.lt(R.__, 20)
  });

  // $ExpectType boolean
  pred({a: 'foo', b: 'xxx', x: 8, y: 34}); // => true
  pred({a: 'xxx', b: 'xxx', x: 9, y: 21}); // => false
  pred({a: 'bar', b: 'xxx', x: 10, y: 20}); // => false
  pred({a: 'foo', b: 'bar', x: 10, y: 20}); // => true
  pred({a: 'foo', b: 'xxx', x: 11, y: 20}); // => true

  // $ExpectType boolean
  R.whereAny({
    a: R.equals('foo'),
    b: R.complement(R.equals('xxx')),
    x: R.gt(R.__, 10),
    y: R.lt(R.__, 20)
  }, {a: 'foo', b: 'xxx', x: 8, y: 34}); // => true
};
