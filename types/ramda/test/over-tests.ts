import * as R from 'ramda';

interface Point {
  x: number;
  y: number;
}

type Getter<S, A> = (s: S) => A
type Setter<S, A> = (a:A, s:S) => S

() => {
  const headLens = R.lensIndex<string>(0);
  // $ExpectType string[]
  R.over(headLens, R.toUpper, ['a', 'b', 'c']); // => ['A', 'b', 'c']
};

() => {
  const xLens = R.lens(R.prop('x') as Getter<Point, number>, R.assoc('x') as Setter<Point, number>);
  // $ExpectType Point
  R.over(xLens, R.negate, { x: 1, y: 2 }); // => {x: -1, y: 2}
  // $ExpectType (obj: Point) => Point
  R.over(xLens, R.negate)({ x: 1, y: 2 }); // => {x: -1, y: 2}
  // $ExpectType (fn: (a: number) => number, value: Point) => Point 
  R.over(xLens)(R.negate, { x: 1, y: 2 }); // => {x: -1, y: 2}
};

() => {
  const headLens = R.lensIndex<string>(0);
  // $ExpectType string[]
  R.over(headLens, R.toUpper, ['a', 'b', 'c']); // => ['A', 'b', 'c']
};

() => {
  const xLens = R.lensProp<Point>('x');
  // $ExpectType Point
  R.over(xLens, R.negate, { x: 1, y: 2 }); // => {x: -1, y: 2}
};

() => {
  const testObj = { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] };
  const xyLens = R.lensPath<typeof testObj>(['x', 0, 'y']);

  // $ExpectType typeof testObj
  R.over(xyLens, R.negate, testObj); // => {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
};

() => {
  const headLens = R.lensIndex<string>(0);
  // $ExpectType string[]
  R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); // => ['FOO', 'bar', 'baz']
};
