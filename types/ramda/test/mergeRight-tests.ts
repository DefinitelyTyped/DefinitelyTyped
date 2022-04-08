import * as R from 'ramda';

() => {
  R.mergeRight({ name: 'fred', age: 10 }, { age: 40 });
  // => { 'name': 'fred', 'age': 40 }

  const withDefaults = R.mergeRight({ x: 0, y: 0 });
  withDefaults({ y: 2 }); // => {x: 0, y: 2}
};
