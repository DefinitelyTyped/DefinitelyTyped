
import * as deepExtend from 'deep-extend';
var obj1 = {
  a: 1,
  b: 2,
  d: {
    a: 1,
    b: [true],
    c: { test1: 123, test2: 321 }
  },
  f: 5,
  g: 123,
  i: 321,
  j: [1, 2]
};
var obj2 = {
  b: 3,
  c: 5,
  d: {
    b: { first: 'one', second: 'two' },
    c: { test2: 222 }
  },
  e: { one: 1, two: 2 },
  f: [42],
  g: function(){},
  h: /abc/g,
  i: null as {aaa: boolean},
  j: [3, 4]
};

deepExtend(obj1, obj2);
deepExtend(obj1, obj2, {ccc: 3});
deepExtend(obj1, obj2, {ccc: 3}, {ddd: 4});


