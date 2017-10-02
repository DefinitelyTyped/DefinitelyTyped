

import should = require('should');

should.fail('actual', 'expected', 'msg', 'operator');
should.assert('value', 'msg');
should.ok('value');
should.equal('actual', 'expected');
should.notEqual('actual', 'expected');
should.deepEqual('actual', 'expected');
should.notDeepEqual('actual', 'expected');
should.strictEqual('actual', 'expected');
should.notStrictEqual('actual', 'expected');
should.throws(() => {});
should.doesNotThrow(() => {});
should.ifError('value');

(0).should
  .a
  .an
  .and
  .be
  .has
  .have
  .is
  .it
  .of
  .the
  .which
  .with
  .equal(0)

class User {
  name: string;
  pets: string[];
  age: number;
}

var user = {
  name: 'tj',
  pets: ['tobi', 'loki', 'jane', 'bandit'],
  age: 17
};

user.should.have.property('name', 'tj');
user.should.have.property('pets').with.lengthOf(4);

should.exist('hello');
should.exist([]);
should.exist(null);

should.not.exist(false);
should.not.exist('');
should.not.exist({});

Should.exist(null);
window.Should.exist(null);

user.should.have.property('pets').with.lengthOf(4);
user.pets.should.have.lengthOf(4);
user.should.be.of.type('object').and.have.property('name', 'tj');

'foo'.should.equal('bar');

should.exist({});
should.exist([]);
should.exist('');
should.exist(0);
should.exist(null);
should.exist(undefined);

should.not.exist(undefined);
should.not.exist(null);
should.not.exist('');
should.not.exist({});

true.should.be.ok();
'yay'.should.be.ok();
(1).should.be.ok();

false.should.not.be.ok();
''.should.not.be.ok();
(0).should.not.be.ok();

true.should.be.true();
true.should.be.True();
'1'.should.not.be.true();

false.should.be.false();
false.should.be.False();
(0).should.not.be.false();

var args = function (a: string, b: string, c: string) { return arguments; };
args.should.be.arguments();
args.should.be.Arguments();
['a'].should.not.be.arguments();

['a'].should.be.empty();
''.should.be.empty();
({ length: 0 }).should.be.empty();

({ foo: 'bar' }).should.eql({ foo: 'bar' });
[1, 2, 3].should.eql([1, 2, 3]);
[1, 2, 3].should.deepEqual([1, 2, 3]);

(4).should.equal(4);
'test'.should.equal('test');
[1, 2, 3].should.not.equal([1, 2, 3]);

'ab'.should.equalOneOf('a', 10, 'ab');
'ab'.should.equalOneOf(['a', 10, 'ab']);

({a: 10}).should.be.oneOf('a', 10, 'ab', {a: 10});
({a: 10}).should.be.oneOf(['a', 10, 'ab', {a: 10}]);

'1'.should.be.exactly('1');
'1'.should.not.be.exactly(1);

user.age.should.be.within(5, 50);

user.should.be.of.type('object');
'test'.should.be.of.type('string');

user.should.be.an.instanceof(User);
['a'].should.be.an.instanceOf(Array);

user.age.should.be.above(5);
user.age.should.not.be.above(100);

user.age.should.be.below(100);
user.age.should.not.be.below(5);

'username'.should.match(/^\w+$/);

user.pets.should.have.length(5);
user.pets.should.have.lengthOf(5);

user.should.have.property('name');
user.should.have.property('age', 15);
user.should.not.have.property('rawr');
user.should.not.have.property('age', 0);

({ a: 10 }).should.have.properties('a');
({ a: 10, b: 20 }).should.have.properties([ 'a' ]);
({ a: 10, b: 20 }).should.have.properties({ b: 20 });
({ foo: 'bar' }).should.have.ownProperty('foo');
({ foo: 'bar' }).should.hasOwnProperty('foo');
({ a: {b: 10}}).should.have.propertyByPath('a', 'b').eql(10);
({ a: 10 }).should.have.propertyWithDescriptor('a', { enumerable: true });

NaN.should.be.NaN();
Infinity.should.be.Infinity();
new Date().should.be.a.Date();
({}).should.be.an.Object();
"".should.be.a.String();
true.should.be.a.Boolean();
(4).should.be.a.Number();
new ReferenceError("error").should.be.an.Error();
(function() {}).should.be.a.Function();
User.should.be.a.class();
User.should.be.a.Class();
'a'.should.not.be.a.generator();
[].should.be.iterable();
[].should.be.an.iterator();
[].should.be.an.Array();
should(undefined).be.undefined();
should(null).be.null();

var res = {};
res.should.have.status(200);

res.should.have.header('content-length');
res.should.have.header('Content-Length', '123');
res.should.have.header('content-length', '123');

res.should.be.json();

res.should.be.html();

[1, 2, 3].should.containEql(3);
[1, 2, 3].should.containEql(2);
[1, 2, 3].should.not.containEql(4);

'foo bar baz'.should.containEql('foo');
'foo bar baz'.should.containEql('bar');
'foo bar baz'.should.containEql('baz');
'foo bar baz'.should.not.containEql('FOO')

var tobi = { name: 'Tobi', age: 1 };
var jane = { name: 'Jane', age: 5 };
var tj = { name: 'TJ', pet: tobi };
tj.should.containEql({ pet: tobi });
tj.should.containEql({ pet: tobi, name: 'TJ' });
tj.should.not.containEql({ pet: jane });
tj.should.not.containEql({ name: 'Someone' });

[[1], [2], [3]].should.containEql([3]);
[[1], [2], [3]].should.containEql([2]);
[[1], [2], [3]].should.not.containEql([4]);

var spy = function() { };
spy.should.be.alwaysCalledOn({});
spy.should.be.alwaysCalledWith(1, 2);
spy.should.be.alwaysCalledWithExactly(1, 2);
spy.should.be.alwaysCalledWithMatch(1, 2);
spy.should.have.alwaysThrew("ReferenceError");
spy.should.have.callCount(1);
spy.should.be.called();
spy.should.be.calledOn({});
spy.should.be.calledOnce();
spy.should.be.calledTwice();
spy.should.be.calledThrice();
spy.should.be.calledWith(1, 2);
spy.should.be.calledWithExactly(1, 2);
spy.should.be.calledWithMatch(1, 2);
spy.should.be.calledWithNew();
spy.should.be.neverCalledWith(1, 2);
spy.should.be.neverCalledWithMatch(1, 2);
spy.should.have.threw("ReferenceError");

(10).should.be.aboveOrEqual(0);
(10).should.be.aboveOrEqual(10);
(10).should.be.greaterThanOrEqual(0);
(10).should.be.greaterThanOrEqual(10);

(0).should.be.belowOrEqual(10);
(0).should.be.belowOrEqual(0);
(0).should.be.lessThanOrEqual(10);
(0).should.be.lessThanOrEqual(0);

(function () {
  throw new Error('fail');
}).should.throw();

(function () {
}).should.not.throw();

(function () {
  throw new Error('fail');
}).should.throw('fail');

(function () {
  throw new Error('failed to foo');
}).should.throw(/^fail/);

(function () {
  throw new Error('failed to foo');
}).should.throw(Error);

(function () {
  throw new Error('failed to foo');
}).should.throw(Error, { message: 'failed to baz' });

(function () {
  throw new Error('failed to foo');
}).should.throwError(Error, { message: 'failed to baz' });

(function () {
  throw new Error('failed to baz');
}).should.throwError(/^fail.*/);

var obj = { foo: 'bar', baz: 'raz' };
obj.should.have.keys('foo', 'bar');
obj.should.have.keys(['foo', 'bar']);
obj.should.have.key('foo');

({ a: 10 }).should.have.size(1);

({ a: 10 }).should.have.value('a', 10);
({ a: 10 }).should.have.value(1, 2);

({ a: 10 }).should.have.enumerable('a');
({ a: 10 }).should.have.enumerable('a', 10);
({ a: 10, b: 10 }).should.have.enumerables('a', 'b');

(1).should.eql(0, 'some useful description');

[ 1, 2, 3].should.containDeep([2, 1]);
[ 1, 2, [ 1, 2, 3 ]].should.containDeep([ 1, [ 3, 1 ]]);

[ 1, 2, 3].should.containDeepOrdered([1, 2]);
[ 1, 2, [ 1, 2, 3 ]].should.containDeepOrdered([ 1, [ 2, 3 ]]);

({ a: 10, b: { c: 10, d: [1, 2, 3] }}).should.containDeepOrdered({a: 10});
({ a: 10, b: { c: 10, d: [1, 2, 3] }}).should.containDeepOrdered({b: {c: 10}});
({ a: 10, b: { c: 10, d: [1, 2, 3] }}).should.containDeepOrdered({b: {d: [1, 3]}});
