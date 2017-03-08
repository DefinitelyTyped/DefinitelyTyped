import * as isPlainObject from 'is-plain-object';

isPlainObject(Object.create({}));
//=> true
isPlainObject(Object.create(Object.prototype));
//=> true
isPlainObject({foo: 'bar'});
//=> true
isPlainObject({});

isPlainObject(1);
//=> false
isPlainObject(['foo', 'bar']);
//=> false
isPlainObject([]);
//=> false
class Foo {}
isPlainObject(new Foo);
//=> false
isPlainObject(null);
//=> false
isPlainObject(Object.create(null));
//=> false