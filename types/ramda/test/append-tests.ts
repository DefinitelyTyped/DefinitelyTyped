import * as R from 'ramda';

() => {
  R.append('tests', ['write', 'more']); // => ['write', 'more', 'tests']
  R.append('tests')(['write', 'more']); // => ['write', 'more', 'tests']
  R.append('tests', []); // => ['tests']
};
