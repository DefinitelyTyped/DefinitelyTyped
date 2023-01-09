import * as check from 'check-types';

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

check.assert(false, 'msg', Error);

check.assert.not.like({ foo: 'bar' }, { baz: 'qux' });

check.assert.not.like({ foo: 'bar' }, { baz: 'qux' }, 'with a message');

check.assert.maybe.like(undefined, { foo: 'bar' });

check.assert.maybe.like(undefined, { foo: 'bar' }, 'with a message');

check.assert.nonEmptyArray([1, 2], 'With a message');

check.emptyArray([1, 2, 3]);
check.emptyArray([]);
check.emptyArray('foo');
check.emptyArray(true);
check.emptyArray(undefined);
check.emptyArray(null);
check.emptyArray(Symbol(''));
check.emptyArray(0);
check.emptyArray({});

check.nonEmptyArray([1, 2, 3]);
check.nonEmptyArray([]);
check.nonEmptyArray('foo');
check.nonEmptyArray(true);
check.nonEmptyArray(undefined);
check.nonEmptyArray(null);
check.nonEmptyArray(Symbol(''));
check.nonEmptyArray(0);
check.nonEmptyArray({});

check.assert.not.inRange(1, 2, 3);

check.assert.not.inRange(1, 2, 3, 'With a message');

check.assert.array.of.string(['']);

check.assert.array.of.string([''], 'With a message');

check.assert.not.array.of.string(['']);

check.assert.not.array.of.string([''], 'With a message');

check.array.of.string(['']);

check.assert(
    function a(): any {
        return {};
    },
    'Something went wrong',
    Error,
);

check.emptyString('foo');
check.emptyString('');
check.emptyString(true);
check.emptyString(undefined);
check.emptyString(null);
check.emptyString(Symbol(''));
check.emptyString(0);
check.emptyString({});
check.emptyString([]);

check.nonEmptyString('foo');
check.nonEmptyString('');
check.nonEmptyString(true);
check.nonEmptyString(undefined);
check.nonEmptyString(null);
check.nonEmptyString(Symbol(''));
check.nonEmptyString(0);
check.nonEmptyString({});
check.nonEmptyString([]);

check.any(check.apply([1, 2, 3, ''], check.string));

check.any(check.map({ foo: 0, bar: '' }, { foo: check.number, bar: check.string }));

check.all(check.map({ foo: 0, bar: '' }, { foo: check.number, bar: check.string }));

check.all(check.apply([1, 2, 3, ''], check.string));

check.emptyObject({});
check.emptyObject({x: 1});
check.emptyObject('foo');
check.emptyObject(true);
check.emptyObject(undefined);
check.emptyObject(null);
check.emptyObject(Symbol(''));
check.emptyObject(0);
check.emptyObject([]);

check.nonEmptyObject({});
check.nonEmptyObject({x: 1});
check.nonEmptyObject('foo');
check.nonEmptyObject(true);
check.nonEmptyObject(undefined);
check.nonEmptyObject(null);
check.nonEmptyObject(Symbol(''));
check.nonEmptyObject(0);
check.nonEmptyObject([]);
