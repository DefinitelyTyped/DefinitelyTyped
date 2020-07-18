import * as R from 'ramda';

(() => {
  function printXPlusFive(x: number) {
    console.log(x + 5);
  }

  R.forEach(printXPlusFive, [1, 2, 3]);
})();

// (() => {
//   function printXPlusFive(x, i) { console.log(i + 5); }
//   R.forEach.idx(printXPlusFive, [{name: 1}, {name: 2}, {name: 3}]);
// })();

() => {
  function printXPlusFive(x: number) {
    console.log(x + 5);
  }

  R.forEach(printXPlusFive, [1, 2, 3]); // => [1, 2, 3]
  R.forEach(printXPlusFive)([1, 2, 3]); // => [1, 2, 3]
  // -> 6
  // -> 7
  // -> 8
};
