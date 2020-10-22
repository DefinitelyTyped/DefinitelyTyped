import dotProp = require('dot-prop-immutable');

dotProp.get(undefined, 'foo.bar');  // $ExpectType any
dotProp.get<string>(undefined, 'foo.bar', 'default value');  // $ExpectType string

dotProp.get({foo: {bar: 'unicorn'}}, 'foo.bar');  // $ExpectType any
dotProp.get({foo: {bar: 'a'}}, 'foo.notDefined.deep');  // $ExpectType any
dotProp.get<string>({foo: {bar: 'a'}}, 'foo.notDefined.deep', 'default value');  // $ExpectType string
dotProp.get({foo: {'dot.dot': 'unicorn'}}, 'foo.dot\\.dot');  // $ExpectType any
dotProp.get({foo: {'dot.dot': 'unicorn'}}, ['foo', 'dot.dot']);  // $ExpectType any

dotProp.set<object>({foo: {bar: 'a'}}, 'foo.bar', 'b');  // $ExpectType object
dotProp.set<object>({foo: {bar: 'b'}} , 'foo.baz', 'x');  // $ExpectType object
dotProp.set<object>({foo: {bar: 'a'}}, 'foo.bar', (v: string) => v + 'bc');  // $ExpectType object

dotProp.toggle<object>({foo: {bar: true}}, 'foo.bar');  // $ExpectType object

dotProp.merge<object>({foo: {bar: {a: 1, b: 2}}}, 'foo.bar', {c: 3});  // $ExpectType object
dotProp.merge<object>({foo: {bar: [1, 2]}}, 'foo.bar', [3, 4]);  // $ExpectType object
