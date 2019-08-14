import { flatten, identity, inc, ifElse, map, toString } from 'ramda';

() => {
  // Flatten all arrays in the list but leave other values alone.
  const flattenArrays = map(ifElse(Array.isArray, flatten, identity));

  flattenArrays([[0], [[10], [8]], 1234, {}]); // => [[0], [10, 8], 1234, {}]
  flattenArrays([[[10], 123], [8, [10]], 'hello']); // => [[10, 123], [8, 10], "hello"]
};

() => {
  function double(x: number) {
    return x * 2;
  }

  map(double, [1, 2, 3]); // => [2, 4, 6]

  // functor
  const numberFunctor = {
    map: <U>(fn: (c: number) => U) => {
      const chars = 'Ifmmp!Xpsme'.split('');
      return chars.map(char => fn(char.charCodeAt(0)));
    },
  };
  map((x: number) => x - 1, numberFunctor); // => "Hello World"
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

  map<A, A>(inc, { a: 1, b: 2 });
  map<A, B>(toString, { a: 1, b: 2 });

  map<A, A>(inc)({ a: 1, b: 2 });
  map<A, B>(toString)({ a: 1, b: 2 });
};
