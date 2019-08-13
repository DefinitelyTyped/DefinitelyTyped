import { addIndex, forEach, map, reduce, reject } from 'ramda';
import { Rectangle } from './test-helpers';

() => {
  // Test that addIndex works with forEach

  function plusFive(num: number, idx: number, list: number[]) {
    list[idx] = num + 5;
  }

  addIndex(forEach)(plusFive)([1, 2, 3]); // => [6, 7, 8]
};

() => {
  // Test that addIndex works with map

  function squareEnds(elt: number, idx: number, list: number[]) {
    if (idx === 0 || idx === list.length - 1) {
      return elt * elt;
    }
    return elt;
  }

  addIndex(map)(squareEnds, [8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]
  addIndex(map)(squareEnds)([8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]
};

() => {
  // Test that addIndex works with reduce

  const reduceIndexed = addIndex(reduce);
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

  reduceIndexed(objectify, {}, letters); // => { 'a': 0, 'b': 1, 'c': 2 }
  reduceIndexed(objectify)({}, letters); // => { 'a': 0, 'b': 1, 'c': 2 }
  reduceIndexed(objectify, {})(letters); // => { 'a': 0, 'b': 1, 'c': 2 }
};

() => {
  // Test that addIndex works with reject

  function lastTwo(val: number, idx: number, list: number[]) {
    return list.length - idx <= 2;
  }

  const rejectIndexed = addIndex(reject);
  rejectIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]
  rejectIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]
};

() => {
  // Test that addIndex works with map

  const mapIndexed = addIndex(map);
  mapIndexed((val: string, idx: number) => `${idx}-${val}`)([
    'f',
    'o',
    'o',
    'b',
    'a',
    'r',
  ]);
  // => ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
  mapIndexed(
    (rectangle: Rectangle, idx: number): number => rectangle.area() * idx,
    [new Rectangle(1, 2), new Rectangle(4, 7)],
  );
  // => [2, 56]
};

() => {
  // Test that addIndex works with reduce

  const reduceIndexed = addIndex(reduce);
  reduceIndexed(
    (acc: string, val: string, idx: number) => `${acc},${idx}-${val}`,
    '',
    ['f', 'o', 'o', 'b', 'a', 'r'],
  );
  // => ['0-f,1-o,2-o,3-b,4-a,5-r']
};
