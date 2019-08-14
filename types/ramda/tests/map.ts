import { flatten, identity, inc, ifElse, map, toString } from 'ramda';

() => {
  // Flatten all arrays in the list but leave other values alone.
  const flattenArrays = map(ifElse(Array.isArray, flatten, identity));

  // $ExpectType any[]
  flattenArrays([[0], [[10], [8]], 1234, {}]); // => [[0], [10, 8], 1234, {}]

  // $ExpectType any[]
  flattenArrays([[[10], 123], [8, [10]], 'hello']); // => [[10, 123], [8, 10], "hello"]
};

() => {
  function double(x: number) {
    return x * 2;
  }

  // $ExpectType number[]
  map(double)([1, 2, 3]); // => [2, 4, 6]

  // $ExpectType number[]
  map(double, [1, 2, 3]); // => [2, 4, 6]

  // functor
  const numberFunctor = {
    map: <U>(fn: (c: number) => U) => {
      const chars = 'Ifmmp!Xpsme'.split('');
      return chars.map(char => fn(char.charCodeAt(0)));
    },
  };

  // $ExpectType Functor<number>
  map((x: number) => x - 1, numberFunctor); // => [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
};

() => {
  interface A {
    a: number;
    b: number;
  }

  interface B {
    a: string;
    b: string;
  }

  // $ExpectType A
  map<A, A>(inc)({ a: 1, b: 2 });

  // $ExpectType A
  map<A, A>(inc, { a: 1, b: 2 });

  // $ExpectType B
  map<A, B>(toString)({ a: 1, b: 2 });

  // $ExpectType B
  map<A, B>(toString, { a: 1, b: 2 });
};
