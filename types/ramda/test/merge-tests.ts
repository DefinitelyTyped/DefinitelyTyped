import * as R from 'ramda';

() => {
  R.merge({ name: 'fred', age: 10 }, { age: 40 });
  // => { 'name': 'fred', 'age': 40 }
};
