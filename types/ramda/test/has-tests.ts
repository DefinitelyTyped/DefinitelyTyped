import * as R from 'ramda';
import Dummy from './dummyType'

// Common
() => {
  const hasName = R.has('name');
  const a1: boolean = hasName({ name: 'alice' }); // => true
  const a2: boolean = hasName({ name: 'bob' }); // => true
  const a3: boolean = hasName({}); // => false
};

//TypedParameters
() => {
  const dummy: Dummy = { field: 'foobar' };
  const hasField = R.has<Dummy>('field');

  const a1: boolean = hasField(dummy); // => true
  // $ExpectError
  const a2: boolean = hasField({}); // => false

  const a3: boolean = R.has<Dummy>('field', dummy); // => true
  // $ExpectError
  const a4: boolean = R.has<Dummy>('field', {}); // => false
};
