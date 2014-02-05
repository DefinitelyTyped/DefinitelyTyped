/// <reference path="should.d.ts" />

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

true.should.be.ok;
'yay'.should.be.ok;
(1).should.be.ok;

false.should.not.be.ok;
''.should.not.be.ok;
(0).should.not.be.ok;

true.should.be.true
'1'.should.not.be.true
false

false.should.be.false;
(0).should.not.be.false;

var args = (a: string, b: string, c: string) => { return arguments; };
args.should.be.arguments;
['a'].should.not.be.arguments;

['a'].should.be.empty;
''.should.be.empty;
({ length: 0 }).should.be.empty;

({ foo: 'bar' }).should.eql({ foo: 'bar' });
[1, 2, 3].should.eql([1, 2, 3]);

(4).should.equal(4);
'test'.should.equal('test');
[1, 2, 3].should.not.equal([1, 2, 3]);

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

({ foo: 'bar' }).should.have.ownProperty('foo');

var res = {};
res.should.have.status(200);

res.should.have.header('content-length');
res.should.have.header('Content-Length', '123');
res.should.have.header('content-length', '123');

res.should.be.json;

res.should.be.html;

[1, 2, 3].should.include(3);
[1, 2, 3].should.include(2);
[1, 2, 3].should.not.include(4);

'foo bar baz'.should.include('foo');
'foo bar baz'.should.include('bar');
'foo bar baz'.should.include('baz');
'foo bar baz'.should.not.include('FOO');

var tobi = { name: 'Tobi', age: 1 };
var jane = { name: 'Jane', age: 5 };
var tj = { name: 'TJ', pet: tobi };
tj.should.include({ pet: tobi });
tj.should.include({ pet: tobi, name: 'TJ' });
tj.should.not.include({ pet: jane });
tj.should.not.include({ name: 'Someone' });

[[1], [2], [3]].should.includeEql([3]);
[[1], [2], [3]].should.includeEql([2]);
[[1], [2], [3]].should.not.includeEql([4]);

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
  throw new Error('failed to baz');
}).should.throwError(/^fail.*/);

var obj = { foo: 'bar', baz: 'raz' };
obj.should.have.keys('foo', 'bar');
obj.should.have.keys(['foo', 'bar']);

(1).should.eql(0, 'some useful description');
