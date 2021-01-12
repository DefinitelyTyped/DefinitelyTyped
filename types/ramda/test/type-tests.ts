import * as R from 'ramda';

() => {
  R.type({}); // => "Object"
  R.type(1); // => "Number"
  R.type(false); // => "Boolean"
  R.type('s'); // => "String"
  R.type(null); // => "Null"
  R.type([]); // => "Array"
  R.type(/[A-z]/); // => "RegExp"
  R.type(Symbol()); // => "Symbol"
};
