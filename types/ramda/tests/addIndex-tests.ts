import { addIndex, forEach, map, reduce, reject } from 'ramda';
import { Rectangle } from './test-helpers';

() => {
  // Test that addIndex works with forEach

  function plusFive(num: number, idx: number, list: number[]) {
    list[idx] = num + 5;
  }

  // $ExpectType number[]
  addIndex<number>(forEach)(plusFive, [1, 2, 3]); // => [6, 7, 8]

  // $ExpectType number[]
  addIndex<number>(forEach)(plusFive)([1, 2, 3]); // => [6, 7, 8]
};

() => {
  // Test that addIndex works with map

  function squareEnds(elt: number, idx: number, list: number[]) {
    if (idx === 0 || idx === list.length - 1) {
      return elt * elt;
    }
    return elt;
  }

  // $ExpectType number[]
  addIndex(map)(squareEnds)([8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]

  // $ExpectError
  addIndex(map)(squareEnds)(['a', 'b']);

  // $ExpectType number[]
  addIndex(map)(squareEnds, [8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]

  // $ExpectError
  addIndex(map)(squareEnds, ['a', 'b']);
};

() => {
  // Test that addIndex works with reduce

  const reduceIndexed = addIndex<string, Record<string, number>>(reduce);
  const letters = ['a', 'b', 'c'];

  function objectify(
    accObject: { [elem: string]: number },
    elem: string,
    idx: number,
    list: string[],
  ) {
    accObject[elem] = idx;
    return accObject;
  }

  // $ExpectType Record<string, number>
  reduceIndexed(objectify, {}, letters); // => { 'a': 0, 'b': 1, 'c': 2 }

  // $ExpectType Record<string, number>
  reduceIndexed(objectify)({}, letters); // => { 'a': 0, 'b': 1, 'c': 2 }

  // $ExpectType Record<string, number>
  reduceIndexed(objectify, {})(letters); // => { 'a': 0, 'b': 1, 'c': 2 }
};

() => {
  // Test that addIndex works with reject

  function lastTwo(val: number, idx: number, list: number[]) {
    return list.length - idx <= 2;
  }

  const rejectIndexed = addIndex<number>(reject);

  // $ExpectType number[]
  rejectIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]

  // $ExpectError
  rejectIndexed(lastTwo)(['a', 'b']);

  // $ExpectType number[]
  rejectIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]

  // $ExpectError
  rejectIndexed(lastTwo, ['a', 'b']);
};

() => {
  // Test that addIndex works with map

  const mapIndexed = addIndex(map);

  // $ExpectType (b: readonly string[]) => string[]
  mapIndexed((val: string, idx: number) => `${idx}-${val}`);

  // $ExpectType string[]
  mapIndexed((val: string, idx: number) => `${idx}-${val}`, [
    'f',
    'o',
    'o',
    'b',
    'a',
    'r',
  ]);

  // $ExpectError
  mapIndexed((val: string, idx: number) => `${idx}-${val}`, [1, 2, 3]);

  // $ExpectType string[]
  mapIndexed((val: string, idx: number) => `${idx}-${val}`)([
    'f',
    'o',
    'o',
    'b',
    'a',
    'r',
  ]);
  // => ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']

  // $ExpectError
  mapIndexed((val: string, idx: number) => `${idx}-${val}`)([1, 2, 3]);

  // $ExpectType number[]
  mapIndexed(
    (rectangle: Rectangle, idx: number): number => rectangle.area() * idx,
    [new Rectangle(1, 2), new Rectangle(4, 7)],
  );
  // => [2, 56]
};

() => {
  // Test that addIndex works with reduce

  const reduceIndexed = addIndex<string, string>(reduce);

  // $ExpectType string
  reduceIndexed(
    (acc: string, val: string, idx: number) => `${acc},${idx}-${val}`,
    '',
    ['f', 'o', 'o', 'b', 'a', 'r'],
  );
  // => ',0-f,1-o,2-o,3-b,4-a,5-r'
};
