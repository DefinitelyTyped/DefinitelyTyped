import * as dotProp from 'dot-prop';

dotProp.get({foo: {bar: 'unicorn'}}, 'foo.bar');
dotProp.get({foo: {bar: 'a'}}, 'foo.notDefined.deep');
dotProp.get({foo: {'dot.dot': 'unicorn'}}, 'foo.dot\\.dot');

const obj = {foo: {bar: 'a'}};
dotProp.set(obj, 'foo.bar', 'b');
dotProp.set(obj, 'foo.baz', 'x');
dotProp.set(obj, 'foo.dot\\.dot', 'unicorn');
