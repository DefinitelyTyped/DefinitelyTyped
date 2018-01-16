/// <reference types="node"/>
import dotProp = require('dot-prop');
import { get, has, set } from 'dot-prop';

get({foo: {bar: 'unicorn'}}, 'foo.bar');
dotProp.get({foo: {bar: 'a'}}, 'foo.notDefined.deep');
dotProp.get({foo: {bar: 'a'}}, 'foo.notDefined.deep', 'default value');
dotProp.get({foo: {'dot.dot': 'unicorn'}}, 'foo.dot\\.dot');

const obj = {foo: {bar: 'a'}};
set(obj, 'foo.bar', 'b');
console.log(obj);
dotProp.set(obj, 'foo.baz', 'x');
console.log(obj);

has({foo: {bar: 'unicorn'}}, 'foo.bar');
dotProp.has({foo: {bar: 'unicorn'}}, 'foo.bar');

dotProp.delete(obj, 'foo.bar');
console.log(obj);
(<any> obj).foo.bar = {x: 'y', y: 'x'};
dotProp.delete(obj, 'foo.bar.x');
console.log(obj);
