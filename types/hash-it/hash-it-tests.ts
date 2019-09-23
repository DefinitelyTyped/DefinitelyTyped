/// tests originate from https://github.com/planttheidea/hash-it

import hash from "hash-it";

const foo = { foo: "bar"};
const alsoFoo = {foo: "bar"};
const stillFoo = { foo: "bar"};

hash(foo);

hash.is(null, 123);
hash.is(null, null);

const isNull = hash.is(null);
isNull(123);
isNull(null);

hash.is.all(foo, alsoFoo, stillFoo);

const isAllFoo = hash.is.all(foo);
isAllFoo(alsoFoo, stillFoo);

const nopeBar = {
    bar: "baz"
};

hash.is.any(foo, alsoFoo);
hash.is.any(foo, nopeBar);
hash.is.any(foo, alsoFoo, nopeBar);

const isAnyFoo = hash.is.any(foo);
isAnyFoo(alsoFoo, nopeBar);

hash.is.not(null, 123);
hash.is.not(null, null);

const isNotNull = hash.is.not(null);
isNotNull(123);
isNotNull(null);
