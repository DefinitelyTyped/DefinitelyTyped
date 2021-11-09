import * as R from 'ramda';

() => {
  R.propIs(Number, 'x', { x: 1, y: 2 }); // => true
  R.propIs(Number, 'x')({ x: 1, y: 2 }); // => true
  R.propIs(Number)('x', { x: 1, y: 2 }); // => true
  R.propIs(Number)('x')({ x: 1, y: 2 }); // => true
  R.propIs(Number, 'x', { x: 'foo' }); // => false
  R.propIs(Number, 'x', {}); // => false
};

() => {
  const obj = {};

  if (R.propIs(Number, "x", obj)) {
    const number: number = obj.x;
  }

  if (R.propIs(Number, "x")(obj)) {
    const number: number = obj.x;
  }

  if (R.propIs(Number)("x", obj)) {
    const number: number = obj.x;
  }

  if (R.propIs(Number)("x")(obj)) {
    const number: number = obj.x;
  }
};

() => {
  class Foo {}

  const obj = {};

  if (R.propIs(Foo, "foo", obj)) {
    const foo: Foo = obj.foo;
  }

  if (R.propIs(Foo, "foo")(obj)) {
    const foo: Foo = obj.foo;
  }

  if (R.propIs(Foo)("foo", obj)) {
    const foo: Foo = obj.foo;
  }

  if (R.propIs(Foo)("foo")(obj)) {
    const foo: Foo = obj.foo;
  }
};
