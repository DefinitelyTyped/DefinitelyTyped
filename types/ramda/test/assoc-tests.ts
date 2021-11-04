import * as R from 'ramda';

() => {
  interface ABC {
    a: number;
    b: number;
    c: number;
  }
  const a: ABC = R.assoc('c', 3, { a: 1, b: 2 }); // => {a: 1, b: 2, c: 3}
  const b: ABC = R.assoc('c')(3, { a: 1, b: 2 }); // => {a: 1, b: 2, c: 3}
  const c: ABC = R.assoc('c', 3)({ a: 1, b: 2 }); // => {a: 1, b: 2, c: 3}
  const d: ABC = R.assoc(R.__, 3, { a: 1, b: 2 })('c'); // => {a: 1, b: 2, c: 3}
  const e: ABC = R.assoc('c', R.__, { a: 1, b: 2 })(3); // => {a: 1, b: 2, c: 3}
  // $ExpectError
  const f: ABC = R.assoc('c', "test", {a: 1, b: 2, c: 3}); // => {a: 1, b: 2, c: "test"}
  // $ExpectError
  const g: ABC = R.assoc('c', "test")({a: 1, b: 2, c: 3});  // => {a: 1, b: 2, c: "test"}
  // $ExpectError
  const h: ABC = R.assoc('c')("test")({a: 1, b: 2, c: 3});  // => {a: 1, b: 2, c: "test"}
  // $ExpectError
  const i: ABC = R.assoc('c')("test", {a: 1, b: 2, c: 3});  // => {a: 1, b: 2, c: "test"}
};

() => {
  type ABC = Record<string, string>;
  const b: ABC = R.compose(
    R.assoc,
    R.toString,
  )(3)('c', { 1: 'a', 2: 'b' }); // => {1: "a", 2: "b", 3: "c"}
  const c: ABC = R.compose(
    R.assoc,
    R.toString,
  )(3)('c')({ 1: 'a', 2: 'b' }); // => {1: "a", 2: "b", 3: "c"}
};
