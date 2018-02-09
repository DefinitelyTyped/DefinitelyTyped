import * as check from "check-types";

const a: boolean = check.number(2);

const b: any = 2;

if (check.string(b)) {
  const c = b.slice(0, 1);
}

check.map({ val: 1, val2: 2 }, { val: check.number, val2: check.string });

check.even(3);

check.not.even(3);

check.maybe.even(2);

check.assert.like({ foo: 'bar' }, { baz: 'qux' });

check.assert(false, "msg", Error);

check.assert.not.like({ foo: 'bar' }, { baz: 'qux' });

check.assert.maybe.like(undefined, { foo: 'bar' });

check.assert(function a(): any { return {}; }, 'Something went wrong', Error);

check.apply([ 'foo', 'bar', '' ], check.nonEmptyString);

check.any(
  check.apply(
      [ 1, 2, 3, '' ],
      check.string
  )
);

check.any(
  check.map(
    { foo: 0, bar: '' },
    { foo: check.number, bar: check.string }
  )
);

check.all(
  check.map(
      { foo: 0, bar: '' },
      { foo: check.number, bar: check.string }
  )
);

check.all(
  check.apply(
    [ 1, 2, 3, '' ],
    check.string
  )
);
