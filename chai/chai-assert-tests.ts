/*

---------
  test extracted from original test suite
  chai original licence follows
---------

## License

(The MIT License)

Copyright (c) 2011-2013 Jake Luer <jake@alogicalparadox.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

///<reference path="chai-assert.d.ts" />

//stubs
declare module chai {
	var AssertionError;
	function expect(body):any;
}
//tdd
declare function suite(description, action):void;
declare function test(description, action):void;
declare function err(action, msg?):void;
interface FieldObj {
	field: any;
}

suite('assert', () => {

	test('assert', () => {
		var foo = 'bar';
		assert(foo == 'bar', "expected foo to equal `bar`");

		err(() => {
			assert(foo == 'baz', "expected foo to equal `bar`");
		}, "expected foo to equal `bar`");
	});

	test('fail', () => {
		chai.expect(() => {
			assert.fail();
		}).to.throw(chai.AssertionError);
	});

	test('isTrue', () => {
		assert.isTrue(true);

		err(() => {
			assert.isTrue(false);
		}, "expected false to be true");

		err(() => {
			assert.isTrue(1);
		}, "expected 1 to be true");

		err(() => {
			assert.isTrue('test');
		}, "expected 'test' to be true");
	});

	test('ok', () => {
		assert.ok(true);
		assert.ok(1);
		assert.ok('test');

		err(() => {
			assert.ok(false);
		}, "expected false to be truthy");

		err(() => {
			assert.ok(0);
		}, "expected 0 to be truthy");

		err(() => {
			assert.ok('');
		}, "expected '' to be truthy");
	});

	test('isFalse', () => {
		assert.isFalse(false);

		err(() => {
			assert.isFalse(true);
		}, "expected true to be false");

		err(() => {
			assert.isFalse(0);
		}, "expected 0 to be false");
	});

	test('equal', () => {
		var foo;
		assert.equal(foo, undefined);
	});

	test('typeof / notTypeOf', () => {
		assert.typeOf('test', 'string');
		assert.typeOf(true, 'boolean');
		assert.typeOf(5, 'number');

		err(() => {
			assert.typeOf(5, 'string');
		}, "expected 5 to be a string");

	});

	test('notTypeOf', () => {
		assert.notTypeOf('test', 'number');

		err(() => {
			assert.notTypeOf(5, 'number');
		}, "expected 5 not to be a number");
	});

	test('instanceOf', () => {
		function Foo() {
		}

		assert.instanceOf(new Foo(), Foo);

		err(() => {
			assert.instanceOf(5, Foo);
		}, "expected 5 to be an instance of Foo");

		function CrashyObject() {
		};
		CrashyObject.prototype.inspect = () => {
			throw new Error("Arg's inspect() called even though the test passed");
		};
		assert.instanceOf(new CrashyObject(), CrashyObject);
	});

	test('notInstanceOf', () => {
		function Foo() {
		}

		assert.notInstanceOf(new Foo(), String);

		err(() => {
			assert.notInstanceOf(new Foo(), Foo);
		}, "expected {} to not be an instance of Foo");
	});

	test('isObject', () => {
		function Foo() {
		}

		assert.isObject({});
		assert.isObject(new Foo());

		err(() => {
			assert.isObject(true);
		}, "expected true to be an object");

		err(() => {
			assert.isObject(Foo);
		}, "expected [Function: Foo] to be an object");

		err(() => {
			assert.isObject('foo');
		}, "expected 'foo' to be an object");
	});

	test('isNotObject', () => {
		function Foo() {
		}

		assert.isNotObject(5);

		err(() => {
			assert.isNotObject({});
		}, "expected {} not to be an object");
	});

	test('notEqual', () => {
		assert.notEqual(3, 4);

		err(() => {
			assert.notEqual(5, 5);
		}, "expected 5 to not equal 5");
	});

	test('strictEqual', () => {
		assert.strictEqual('foo', 'foo');

		err(() => {
			assert.strictEqual('5', 5);
		}, "expected \'5\' to equal 5");
	});

	test('notStrictEqual', () => {
		assert.notStrictEqual(5, '5');

		err(() => {
			assert.notStrictEqual(5, 5);
		}, "expected 5 to not equal 5");
	});

	test('deepEqual', () => {
		assert.deepEqual({tea: 'chai'}, {tea: 'chai'});

		err(() => {
			assert.deepEqual({tea: 'chai'}, {tea: 'black'});
		}, "expected { tea: \'chai\' } to deeply equal { tea: \'black\' }");

		var obja = Object.create({ tea: 'chai' })
		, objb = Object.create({ tea: 'chai' });

		assert.deepEqual(obja, objb);

		var obj1 = Object.create({tea: 'chai'})
		, obj2 = Object.create({tea: 'black'});

		err(() => {
			assert.deepEqual(obj1, obj2);
		}, "expected { tea: \'chai\' } to deeply equal { tea: \'black\' }");
	});

	test('deepEqual (ordering)', () => {
		var a = { a: 'b', c: 'd' }
		, b = { c: 'd', a: 'b' };
		assert.deepEqual(a, b);
	});

	test('deepEqual (circular)', () => {
		var circularObject:any = {}
		, secondCircularObject:any = {};
		circularObject.field = circularObject;
		secondCircularObject.field = secondCircularObject;

		assert.deepEqual(circularObject, secondCircularObject);

		err(() => {
			secondCircularObject.field2 = secondCircularObject;
			assert.deepEqual(circularObject, secondCircularObject);
		}, "expected { field: [Circular] } to deeply equal { Object (field, field2) }");
	});

	test('notDeepEqual', () => {
		assert.notDeepEqual({tea: 'jasmine'}, {tea: 'chai'});
		err(() => {
			assert.notDeepEqual({tea: 'chai'}, {tea: 'chai'});
		}, "expected { tea: \'chai\' } to not deeply equal { tea: \'chai\' }");
	});

	test('notDeepEqual (circular)', () => {
		var circularObject:any = {}
		, secondCircularObject:any = { tea: 'jasmine' };
		circularObject.field = circularObject;
		secondCircularObject.field = secondCircularObject;

		assert.notDeepEqual(circularObject, secondCircularObject);

		err(() => {
			delete secondCircularObject.tea;
			assert.notDeepEqual(circularObject, secondCircularObject);
		}, "expected { field: [Circular] } to not deeply equal { field: [Circular] }");
	});

	test('isNull', () => {
		assert.isNull(null);

		err(() => {
			assert.isNull(undefined);
		}, "expected undefined to equal null");
	});

	test('isNotNull', () => {
		assert.isNotNull(undefined);

		err(() => {
			assert.isNotNull(null);
		}, "expected null to not equal null");
	});

	test('isUndefined', () => {
		assert.isUndefined(undefined);

		err(() => {
			assert.isUndefined(null);
		}, "expected null to equal undefined");
	});

	test('isDefined', () => {
		assert.isDefined(null);

		err(() => {
			assert.isDefined(undefined);
		}, "expected undefined to not equal undefined");
	});

	test('isFunction', () => {
		var func = () => {
		};
		assert.isFunction(func);

		err(() => {
			assert.isFunction({});
		}, "expected {} to be a function");
	});

	test('isNotFunction', () => {
		assert.isNotFunction(5);

		err(() => {
			assert.isNotFunction(() => {
			});
		}, "expected [Function] not to be a function");
	});

	test('isArray', () => {
		assert.isArray([]);
		assert.isArray(new Array<any>());

		err(() => {
			assert.isArray({});
		}, "expected {} to be an array");
	});

	test('isNotArray', () => {
		assert.isNotArray(3);

		err(() => {
			assert.isNotArray([]);
		}, "expected [] not to be an array");

		err(() => {
			assert.isNotArray(new Array<any>());
		}, "expected [] not to be an array");
	});

	test('isString', () => {
		assert.isString('Foo');
		assert.isString(new String('foo'));

		err(() => {
			assert.isString(1);
		}, "expected 1 to be a string");
	});

	test('isNotString', () => {
		assert.isNotString(3);
		assert.isNotString([ 'hello' ]);

		err(() => {
			assert.isNotString('hello');
		}, "expected 'hello' not to be a string");
	});

	test('isNumber', () => {
		assert.isNumber(1);
		assert.isNumber(Number('3'));

		err(() => {
			assert.isNumber('1');
		}, "expected \'1\' to be a number");
	});

	test('isNotNumber', () => {
		assert.isNotNumber('hello');
		assert.isNotNumber([ 5 ]);

		err(() => {
			assert.isNotNumber(4);
		}, "expected 4 not to be a number");
	});

	test('isBoolean', () => {
		assert.isBoolean(true);
		assert.isBoolean(false);

		err(() => {
			assert.isBoolean('1');
		}, "expected \'1\' to be a boolean");
	});

	test('isNotBoolean', () => {
		assert.isNotBoolean('true');

		err(() => {
			assert.isNotBoolean(true);
		}, "expected true not to be a boolean");

		err(() => {
			assert.isNotBoolean(false);
		}, "expected false not to be a boolean");
	});

	test('include', () => {
		assert.include('foobar', 'bar');
		assert.include([ 1, 2, 3], 3);

		err(() => {
			assert.include('foobar', 'baz');
		}, "expected \'foobar\' to contain \'baz\'");

		err(() => {
			assert.include(undefined, 'bar');
		}, "expected an array or string");
	});

	test('notInclude', () => {
		assert.notInclude('foobar', 'baz');
		assert.notInclude([ 1, 2, 3 ], 4);

		err(() => {
			assert.notInclude('foobar', 'bar');
		}, "expected \'foobar\' to not contain \'bar\'");

		err(() => {
			assert.notInclude(undefined, 'bar');
		}, "expected an array or string");
	});

	test('lengthOf', () => {
		assert.lengthOf([1, 2, 3], 3);
		assert.lengthOf('foobar', 6);

		err(() => {
			assert.lengthOf('foobar', 5);
		}, "expected 'foobar' to have a length of 5 but got 6");

		err(() => {
			assert.lengthOf(1, 5);
		}, "expected 1 to have a property \'length\'");
	});

	test('match', () => {
		assert.match('foobar', /^foo/);
		assert.notMatch('foobar', /^bar/);

		err(() => {
			assert.match('foobar', /^bar/i);
		}, "expected 'foobar' to match /^bar/i");

		err(() => {
			assert.notMatch('foobar', /^foo/i);
		}, "expected 'foobar' not to match /^foo/i");
	});

	test('property', () => {
		var obj = { foo: { bar: 'baz' } };
		var simpleObj = { foo: 'bar' };
		assert.property(obj, 'foo');
		assert.deepProperty(obj, 'foo.bar');
		assert.notProperty(obj, 'baz');
		assert.notProperty(obj, 'foo.bar');
		assert.notDeepProperty(obj, 'foo.baz');
		assert.deepPropertyVal(obj, 'foo.bar', 'baz');
		assert.deepPropertyNotVal(obj, 'foo.bar', 'flow');

		err(() => {
			assert.property(obj, 'baz');
		}, "expected { foo: { bar: 'baz' } } to have a property 'baz'");

		err(() => {
			assert.deepProperty(obj, 'foo.baz');
		}, "expected { foo: { bar: 'baz' } } to have a deep property 'foo.baz'");

		err(() => {
			assert.notProperty(obj, 'foo');
		}, "expected { foo: { bar: 'baz' } } to not have property 'foo'");

		err(() => {
			assert.notDeepProperty(obj, 'foo.bar');
		}, "expected { foo: { bar: 'baz' } } to not have deep property 'foo.bar'");

		err(() => {
			assert.propertyVal(simpleObj, 'foo', 'ball');
		}, "expected { foo: 'bar' } to have a property 'foo' of 'ball', but got 'bar'");

		err(() => {
			assert.deepPropertyVal(obj, 'foo.bar', 'ball');
		}, "expected { foo: { bar: 'baz' } } to have a deep property 'foo.bar' of 'ball', but got 'baz'");

		err(() => {
			assert.propertyNotVal(simpleObj, 'foo', 'bar');
		}, "expected { foo: 'bar' } to not have a property 'foo' of 'bar'");

		err(() => {
			assert.deepPropertyNotVal(obj, 'foo.bar', 'baz');
		}, "expected { foo: { bar: 'baz' } } to not have a deep property 'foo.bar' of 'baz'");
	});

	test('throws', () => {
		assert.throws(() => {
			throw new Error('foo');
		});
		assert.throws(() => {
			throw new Error('bar');
		}, 'bar');
		assert.throws(() => {
			throw new Error('bar');
		}, /bar/);
		assert.throws(() => {
			throw new Error('bar');
		}, Error);
		assert.throws(() => {
			throw new Error('bar');
		}, Error, 'bar');

		err(() => {
			assert.throws(() => {
				throw new Error('foo');
			}, TypeError);
		}, "expected [Function] to throw 'TypeError' but [Error: foo] was thrown");

		err(() => {
			assert.throws(() => {
				throw new Error('foo');
			}, 'bar');
		}, "expected [Function] to throw error including 'bar' but got 'foo'");

		err(() => {
			assert.throws(() => {
				throw new Error('foo');
			}, Error, 'bar');
		}, "expected [Function] to throw error including 'bar' but got 'foo'");

		err(() => {
			assert.throws(() => {
				throw new Error('foo');
			}, TypeError, 'bar');
		}, "expected [Function] to throw 'TypeError' but [Error: foo] was thrown");

		err(() => {
			assert.throws(() => {
			});
		}, "expected [Function] to throw an error");

		err(() => {
			assert.throws(() => {
				throw new Error('');
			}, 'bar');
		}, "expected [Function] to throw error including 'bar' but got ''");

		err(() => {
			assert.throws(() => {
				throw new Error('');
			}, /bar/);
		}, "expected [Function] to throw error matching /bar/ but got ''");
	});

	test('doesNotThrow', () => {
		assert.doesNotThrow(() => {
		});
		assert.doesNotThrow(() => {
		}, 'foo');

		err(() => {
			assert.doesNotThrow(() => {
				throw new Error('foo');
			});
		}, 'expected [Function] to not throw an error but [Error: foo] was thrown');
	});

	test('ifError', () => {
		assert.ifError(false);
		assert.ifError(null);
		assert.ifError(undefined);

		err(() => {
			assert.ifError('foo');
		}, "expected \'foo\' to be falsy");
	});

	test('operator', () => {
		assert.operator(1, '<', 2);
		assert.operator(2, '>', 1);
		assert.operator(1, '==', 1);
		assert.operator(1, '<=', 1);
		assert.operator(1, '>=', 1);
		assert.operator(1, '!=', 2);
		assert.operator(1, '!==', 2);

		err(() => {
			assert.operator(1, '=', 2);
		}, 'Invalid operator "="');

		err(() => {
			assert.operator(2, '<', 1);
		}, "expected 2 to be < 1");

		err(() => {
			assert.operator(1, '>', 2);
		}, "expected 1 to be > 2");

		err(() => {
			assert.operator(1, '==', 2);
		}, "expected 1 to be == 2");

		err(() => {
			assert.operator(2, '<=', 1);
		}, "expected 2 to be <= 1");

		err(() => {
			assert.operator(1, '>=', 2);
		}, "expected 1 to be >= 2");

		err(() => {
			assert.operator(1, '!=', 1);
		}, "expected 1 to be != 1");

		err(() => {
			assert.operator(1, '!==', '1');
		}, "expected 1 to be !== \'1\'");
	});

	test('closeTo', () => {
		assert.closeTo(1.5, 1.0, 0.5);
		assert.closeTo(10, 20, 20);
		assert.closeTo(-10, 20, 30);

		err(() => {
			assert.closeTo(2, 1.0, 0.5);
		}, "expected 2 to be close to 1 +/- 0.5");

		err(() => {
			assert.closeTo(-10, 20, 29);
		}, "expected -10 to be close to 20 +/- 29");
	});

	test('members', () => {
		assert.includeMembers([1, 2, 3], [2, 3]);
		assert.includeMembers([1, 2, 3], []);
		assert.includeMembers([1, 2, 3], [3]);

		err(() => {
			assert.includeMembers([5, 6], [7, 8]);
		}, 'expected [ 5, 6 ] to be a superset of [ 7, 8 ]');

		err(() => {
			assert.includeMembers([5, 6], [5, 6, 0]);
		}, 'expected [ 5, 6 ] to be a superset of [ 5, 6, 0 ]');
	});

	test('memberEquals', () => {
		assert.sameMembers([], []);
		assert.sameMembers([1, 2, 3], [3, 2, 1]);
		assert.sameMembers([4, 2], [4, 2]);

		err(() => {
			assert.sameMembers([], [1, 2]);
		}, 'expected [] to have the same members as [ 1, 2 ]');

		err(() => {
			assert.sameMembers([1, 54], [6, 1, 54]);
		}, 'expected [ 1, 54 ] to have the same members as [ 6, 1, 54 ]');
	});

});
