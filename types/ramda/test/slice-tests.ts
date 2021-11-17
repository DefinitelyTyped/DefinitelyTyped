import * as R from 'ramda';

() => {
  const xs = R.range(0, 10);
  R.slice(2, 5, xs); // => [2, 3, 4]
  R.slice(2, 5)(xs); // => [2, 3, 4]
  R.slice(2)(5, xs); // => [2, 3, 4]

  const str = 'Hello World';
  R.slice(2, 5, str); // => 'llo'
  R.slice(2, 5)(str); // => 'llo'
  R.slice(2)(5, str); // => 'llo'
  console.log('str : ', str);
};

() => {
  // make type inference work well
  const str = 'Hello World';

  // $ExpectType string
  R.pipe(
    R.slice(2, 5)
  )(str);

  // $ExpectType string[]
  R.pipe(
    (str: string[]) => R.slice(2, 5)(str)
  )([str, str]);

  // $ExpectType string
  R.pipe(
    R.slice(2)
  )(5, str);

  // $ExpectType string[]
  R.pipe(
    (b: number, str: string[]) => R.slice(2)(b, str)
  )(5, [str, str]);
};
