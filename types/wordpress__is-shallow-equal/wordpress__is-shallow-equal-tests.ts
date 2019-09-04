import isShallowEqual = require('@wordpress/is-shallow-equal');

isShallowEqual({}, []);

isShallowEqual(['foo'], () => void 0);

isShallowEqual('3', { foo: 'bar' });

isShallowEqual.isShallowEqualArrays(['foo'], ['bar']);

isShallowEqual.isShallowEqualObjects({ foo: 'foo' }, { bar: 'bar' });
