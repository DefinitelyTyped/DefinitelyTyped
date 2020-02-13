import * as R from 'ramda';

(() => {
  const addOneOnce = R.once((x: number) => x + 1);
  addOneOnce(10); // => 11
  addOneOnce(addOneOnce(50)); // => 11

  const str = R.once<string>(() => 'test')();
})();
