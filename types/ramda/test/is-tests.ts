import * as R from 'ramda';

() => {
  R.is(Object, {}); // => true
  R.is(Object)({}); // => true
  R.is(Number, 1); // => true
  R.is(Number)(1); // => true
  R.is(Object, 1); // => false
  R.is(Object)(1); // => false
  R.is(String, 's'); // => true
  R.is(String)('s'); // => true
  R.is(String, new String('')); // => true
  R.is(String)(new String('')); // => true
  R.is(Object, new String('')); // => true
  R.is(Object)(new String('')); // => true
  R.is(Object, 's'); // => false
  R.is(Object)('s'); // => false
  R.is(Number, {}); // => false
  R.is(Number)({}); // => false
};
