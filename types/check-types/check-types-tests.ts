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

check.apply(['foo', 'bar', ''], check.nonEmptyString);

check.any(check.apply([1, 2, 3, ''], check.string));

check.any(check.map({ foo: 0, bar: '' }, { foo: check.number, bar: check.string }));

check.all(check.map({ foo: 0, bar: '' }, { foo: check.number, bar: check.string }));

check.all(check.apply([1, 2, 3, ''], check.string));
