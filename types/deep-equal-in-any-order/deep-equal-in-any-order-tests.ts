import { expect, use } from 'chai';
import deepEqualInAnyOrder = require('deep-equal-in-any-order');

use(deepEqualInAnyOrder);

expect([1, 2]).to.deep.equalInAnyOrder([2, 1]);
expect([1, 2]).to.not.deep.equalInAnyOrder([2, 1, 3]);
expect({ foo: [1, 2], bar: [4, 89, 22] }).to.deep.equalInAnyOrder({ foo: [2, 1], bar: [4, 22, 89] });
expect({ foo: ['foo-1', 'foo-2', [1, 2], null] }).to.deep.equalInAnyOrder({ foo: [null, [1, 2], 'foo-1', 'foo-2'] });
expect({ foo: [1, 2], bar: { baz: ['a', 'b', { lorem: [5, 6] }] } }).to.deep.equalInAnyOrder({
    foo: [2, 1],
    bar: { baz: ['b', 'a', { lorem: [6, 5] }] }
});
