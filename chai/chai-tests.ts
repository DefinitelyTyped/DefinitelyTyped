/// <reference path="chai.d.ts" />

var expect = chai.expect;
declare var err: Function;

function chaiVersion() {
    expect(chai).to.have.property('version');
}

function assertion() {
    expect('test').to.be.a('string');
    expect('foo').to.equal('foo');
}

function _true() {
    expect(true).to.be.true;
    expect(false).to.not.be.true;
    expect(1).to.not.be.true;

    err(() => {
        expect('test').to.be.true;
    }, "expected 'test' to be true")
}

function ok() {
    expect(true).to.be.ok;
    expect(false).to.not.be.ok;
    expect(1).to.be.ok;
    expect(0).to.not.be.ok;

    err(() => {
        expect('').to.be.ok;
    }, "expected '' to be truthy");

    err(() => {
        expect('test').to.not.be.ok;
    }, "expected 'test' to be falsy");
}

function _false() {
    expect(false).to.be.false;
    expect(true).to.not.be.false;
    expect(0).to.not.be.false;

    err(() => {
        expect('').to.be.false;
    }, "expected '' to be false")
}

function _null() {
    expect(null).to.be.null;
    expect(false).to.not.be.null;

    err(() => {
        expect('').to.be.null;
    }, "expected '' to be null")
}

function _undefined() {
    expect(undefined).to.be.undefined;
    expect(null).to.not.be.undefined;

    err(() => {
        expect('').to.be.undefined;
    }, "expected '' to be undefined")
}

function exist() {
    var foo = 'bar'
        , bar;
    expect(foo).to.exist;
    expect(bar).to.not.exist;
}

function arguments() {
    var args = arguments;
    expect(args).to.be.arguments;
    expect([]).to.not.be.arguments;
    expect(args).to.be.an('arguments').and.be.arguments;
    expect([]).to.be.an('array').and.not.be.Arguments;
}

function equal() {
    var foo;
    expect(undefined).to.equal(foo);
}

function _typeof() {
    expect('test').to.be.a('string');

    err(() => {
        expect('test').to.not.be.a('string');
    }, "expected 'test' not to be a string");

    expect(arguments).to.be.an('arguments');

    expect(5).to.be.a('number');
    expect(new Number(1)).to.be.a('number');
    expect(Number(1)).to.be.a('number');
    expect(true).to.be.a('boolean');
    expect(new Array()).to.be.a('array');
    expect(new Object()).to.be.a('object');
    expect({}).to.be.a('object');
    expect([]).to.be.a('array');
    expect(function () { }).to.be.a('function');
    expect(null).to.be.a('null');

    err(() => {
        expect(5).to.not.be.a('number', 'blah');
    }, "blah: expected 5 not to be a number");
}

function _instanceof() {
    function Foo() { }
    expect(new Foo()).to.be.an.instanceof(Foo);

    err(() => {
        expect(3).to.an.instanceof(Foo, 'blah');
    }, "blah: expected 3 to be an instance of Foo");
}

function within(start, finish) {
    expect(5).to.be.within(5, 10);
    expect(5).to.be.within(3, 6);
    expect(5).to.be.within(3, 5);
    expect(5).to.not.be.within(1, 3);
    expect('foo').to.have.length.within(2, 4);
    expect([1, 2, 3]).to.have.length.within(2, 4);

    err(() => {
        expect(5).to.not.be.within(4, 6, 'blah');
    }, "blah: expected 5 to not be within 4..6", 'blah');

    err(() => {
        expect(10).to.be.within(50, 100, 'blah');
    }, "blah: expected 10 to be within 50..100");

    err(() => {
        expect('foo').to.have.length.within(5, 7, 'blah');
    }, "blah: expected \'foo\' to have a length within 5..7");

    err(() => {
        expect([1, 2, 3]).to.have.length.within(5, 7, 'blah');
    }, "blah: expected [ 1, 2, 3 ] to have a length within 5..7");
}

function above(n) {
    expect(5).to.be.above(2);
    expect(5).to.be.greaterThan(2);
    expect(5).to.not.be.above(5);
    expect(5).to.not.be.above(6);
    expect('foo').to.have.length.above(2);
    expect([1, 2, 3]).to.have.length.above(2);

    err(() => {
        expect(5).to.be.above(6, 'blah');
    }, "blah: expected 5 to be above 6", 'blah');

    err(() => {
        expect(10).to.not.be.above(6, 'blah');
    }, "blah: expected 10 to be at most 6");

    err(() => {
        expect('foo').to.have.length.above(4, 'blah');
    }, "blah: expected \'foo\' to have a length above 4 but got 3");

    err(() => {
        expect([1, 2, 3]).to.have.length.above(4, 'blah');
    }, "blah: expected [ 1, 2, 3 ] to have a length above 4 but got 3");
}

function least(n) {
    expect(5).to.be.at.least(2);
    expect(5).to.be.at.least(5);
    expect(5).to.not.be.at.least(6);
    expect('foo').to.have.length.of.at.least(2);
    expect([1, 2, 3]).to.have.length.of.at.least(2);

    err(() => {
        expect(5).to.be.at.least(6, 'blah');
    }, "blah: expected 5 to be at least 6", 'blah');

    err(() => {
        expect(10).to.not.be.at.least(6, 'blah');
    }, "blah: expected 10 to be below 6");

    err(() => {
        expect('foo').to.have.length.of.at.least(4, 'blah');
    }, "blah: expected \'foo\' to have a length at least 4 but got 3");

    err(() => {
        expect([1, 2, 3]).to.have.length.of.at.least(4, 'blah');
    }, "blah: expected [ 1, 2, 3 ] to have a length at least 4 but got 3");

    err(() => {
        expect([1, 2, 3, 4]).to.not.have.length.of.at.least(4, 'blah');
    }, "blah: expected [ 1, 2, 3, 4 ] to have a length below 4");
}

function below(n) {
    expect(2).to.be.below(5);
    expect(2).to.be.lessThan(5);
    expect(2).to.not.be.below(2);
    expect(2).to.not.be.below(1);
    expect('foo').to.have.length.below(4);
    expect([1, 2, 3]).to.have.length.below(4);

    err(() => {
        expect(6).to.be.below(5, 'blah');
    }, "blah: expected 6 to be below 5");

    err(() => {
        expect(6).to.not.be.below(10, 'blah');
    }, "blah: expected 6 to be at least 10");

    err(() => {
        expect('foo').to.have.length.below(2, 'blah');
    }, "blah: expected \'foo\' to have a length below 2 but got 3");

    err(() => {
        expect([1, 2, 3]).to.have.length.below(2, 'blah');
    }, "blah: expected [ 1, 2, 3 ] to have a length below 2 but got 3");
}

function most(n) {
    expect(2).to.be.at.most(5);
    expect(2).to.be.at.most(2);
    expect(2).to.not.be.at.most(1);
    expect(2).to.not.be.at.most(1);
    expect('foo').to.have.length.of.at.most(4);
    expect([1, 2, 3]).to.have.length.of.at.most(4);

    err(() => {
        expect(6).to.be.at.most(5, 'blah');
    }, "blah: expected 6 to be at most 5");

    err(() => {
        expect(6).to.not.be.at.most(10, 'blah');
    }, "blah: expected 6 to be above 10");

    err(() => {
        expect('foo').to.have.length.of.at.most(2, 'blah');
    }, "blah: expected \'foo\' to have a length at most 2 but got 3");

    err(() => {
        expect([1, 2, 3]).to.have.length.of.at.most(2, 'blah');
    }, "blah: expected [ 1, 2, 3 ] to have a length at most 2 but got 3");

    err(() => {
        expect([1, 2]).to.not.have.length.of.at.most(2, 'blah');
    }, "blah: expected [ 1, 2 ] to have a length above 2");
}

function match(regexp) {
    expect('foobar').to.match(/^foo/);
    expect('foobar').to.not.match(/^bar/);

    err(() => {
        expect('foobar').to.match(/^bar/i, 'blah')
}, "blah: expected 'foobar' to match /^bar/i");

    err(() => {
        expect('foobar').to.not.match(/^foo/i, 'blah')
}, "blah: expected 'foobar' not to match /^foo/i");
}

function length2(n) {
    expect('test').to.have.length(4);
    expect('test').to.not.have.length(3);
    expect([1, 2, 3]).to.have.length(3);

    err(() => {
        expect(4).to.have.length(3, 'blah');
    }, 'blah: expected 4 to have a property \'length\'');

    err(() => {
        expect('asd').to.not.have.length(3, 'blah');
    }, "blah: expected 'asd' to not have a length of 3");
}

function eql(val) {
    expect('test').to.eql('test');
    expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
    expect(1).to.eql(1);
    expect('4').to.not.eql(4);

    err(() => {
        expect(4).to.eql(3, 'blah');
    }, 'blah: expected 4 to deeply equal 3');
}

function buffer() {
    var Buffer;
    expect(new Buffer([1])).to.eql(new Buffer([1]));

    err(() => {
        expect(new Buffer([0])).to.eql(new Buffer([1]));
    }, 'expected <Buffer 00> to deeply equal <Buffer 01>');
}

function equal2(val) {
    expect('test').to.equal('test');
    expect(1).to.equal(1);

    err(() => {
        expect(4).to.equal(3, 'blah');
    }, 'blah: expected 4 to equal 3');

    err(() => {
        expect('4').to.equal(4, 'blah');
    }, "blah: expected '4' to equal 4");
}

function deepEqual(val) {
    expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
    expect({ foo: 'bar' }).not.to.deep.equal({ foo: 'baz' });
}

function deepEqual2() {
    expect(/a/).to.deep.equal(/a/);
    expect(/a/).not.to.deep.equal(/b/);
    expect(/a/).not.to.deep.equal({});
    expect(/a/g).to.deep.equal(/a/g);
    expect(/a/g).not.to.deep.equal(/b/g);
    expect(/a/i).to.deep.equal(/a/i);
    expect(/a/i).not.to.deep.equal(/b/i);
    expect(/a/m).to.deep.equal(/a/m);
    expect(/a/m).not.to.deep.equal(/b/m);
}

function deepEqual3(Date) {
    var a = new Date(1, 2, 3)
        , b = new Date(4, 5, 6);
    expect(a).to.deep.equal(a);
    expect(a).not.to.deep.equal(b);
    expect(a).not.to.deep.equal({});
}

function empty() {
    function FakeArgs() { };
    FakeArgs.prototype.length = 0;

    expect('').to.be.empty;
    expect('foo').not.to.be.empty;
    expect([]).to.be.empty;
    expect(['foo']).not.to.be.empty;
    expect(new FakeArgs).to.be.empty;
    expect({ arguments: 0 }).not.to.be.empty;
    expect({}).to.be.empty;
    expect({ foo: 'bar' }).not.to.be.empty;

    err(() => {
        expect('').not.to.be.empty;
    }, "expected \'\' not to be empty");

    err(() => {
        expect('foo').to.be.empty;
    }, "expected \'foo\' to be empty");

    err(() => {
        expect([]).not.to.be.empty;
    }, "expected [] not to be empty");

    err(() => {
        expect(['foo']).to.be.empty;
    }, "expected [ \'foo\' ] to be empty");

    err(() => {
        expect(new FakeArgs).not.to.be.empty;
    }, "expected { length: 0 } not to be empty");

    err(() => {
        expect({ arguments: 0 }).to.be.empty;
    }, "expected { arguments: 0 } to be empty");

    err(() => {
        expect({}).not.to.be.empty;
    }, "expected {} not to be empty");

    err(() => {
        expect({ foo: 'bar' }).to.be.empty;
    }, "expected { foo: \'bar\' } to be empty");
}

function property(name) {
    expect('test').to.have.property('length');
    expect(4).to.not.have.property('length');

    expect({ 'foo.bar': 'baz' })
        .to.have.property('foo.bar');
    expect({ foo: { bar: 'baz' } })
        .to.not.have.property('foo.bar');

    err(() => {
        expect('asd').to.have.property('foo');
    }, "expected 'asd' to have a property 'foo'");
    err(() => {
        expect({ foo: { bar: 'baz' } })
            .to.have.property('foo.bar');
    }, "expected { foo: { bar: 'baz' } } to have a property 'foo.bar'");
}

function deepProperty(name) {
    expect({ 'foo.bar': 'baz' })
        .to.not.have.deep.property('foo.bar');
    expect({ foo: { bar: 'baz' } })
        .to.have.deep.property('foo.bar');

    err(() => {
        expect({ 'foo.bar': 'baz' })
            .to.have.deep.property('foo.bar');
    }, "expected { 'foo.bar': 'baz' } to have a deep property 'foo.bar'");
}

function property2(name, val) {
    expect('test').to.have.property('length', 4);
    expect('asd').to.have.property('constructor', String);

    err(() => {
        expect('asd').to.have.property('length', 4, 'blah');
    }, "blah: expected 'asd' to have a property 'length' of 4, but got 3");

    err(() => {
        expect('asd').to.not.have.property('length', 3, 'blah');
    }, "blah: expected 'asd' to not have a property 'length' of 3");

    err(() => {
        expect('asd').to.not.have.property('foo', 3, 'blah');
    }, "blah: 'asd' has no property 'foo'");

    err(() => {
        expect('asd').to.have.property('constructor', Number, 'blah');
    }, "blah: expected 'asd' to have a property 'constructor' of [Function: Number], but got [Function: String]");
}

function deepProperty2(name, val) {
    expect({ foo: { bar: 'baz' } })
        .to.have.deep.property('foo.bar', 'baz');

    err(() => {
        expect({ foo: { bar: 'baz' } })
            .to.have.deep.property('foo.bar', 'quux', 'blah');
    }, "blah: expected { foo: { bar: 'baz' } } to have a deep property 'foo.bar' of 'quux', but got 'baz'");
    err(() => {
        expect({ foo: { bar: 'baz' } })
            .to.not.have.deep.property('foo.bar', 'baz', 'blah');
    }, "blah: expected { foo: { bar: 'baz' } } to not have a deep property 'foo.bar' of 'baz'");
    err(() => {
        expect({ foo: 5 })
            .to.not.have.deep.property('foo.bar', 'baz', 'blah');
    }, "blah: { foo: 5 } has no deep property 'foo.bar'");
}

function ownProperty(name) {
    expect('test').to.have.ownProperty('length');
    expect('test').to.haveOwnProperty('length');
    expect({ length: 12 }).to.have.ownProperty('length');

    err(() => {
        expect({ length: 12 }).to.not.have.ownProperty('length', 'blah');
    }, "blah: expected { length: 12 } to not have own property 'length'");
}

function string() {
    expect('foobar').to.have.string('bar');
    expect('foobar').to.have.string('foo');
    expect('foobar').to.not.have.string('baz');

    err(() => {
        expect(3).to.have.string('baz');
    }, "expected 3 to be a string");

    err(() => {
        expect('foobar').to.have.string('baz', 'blah');
    }, "blah: expected 'foobar' to contain 'baz'");

    err(() => {
        expect('foobar').to.not.have.string('bar', 'blah');
    }, "blah: expected 'foobar' to not contain 'bar'");
}

function include() {
    expect(['foo', 'bar']).to.include('foo');
    expect(['foo', 'bar']).to.include('foo');
    expect(['foo', 'bar']).to.include('bar');
    expect([1, 2]).to.include(1);
    expect(['foo', 'bar']).to.not.include('baz');
    expect(['foo', 'bar']).to.not.include(1);

    err(() => {
        expect(['foo']).to.include('bar', 'blah');
    }, "blah: expected [ 'foo' ] to include 'bar'");

    err(() => {
        expect(['bar', 'foo']).to.not.include('foo', 'blah');
    }, "blah: expected [ 'bar', 'foo' ] to not include 'foo'");
}

function keys(array) {
    expect({ foo: 1 }).to.have.keys(['foo']);
    expect({ foo: 1, bar: 2 }).to.have.keys(['foo', 'bar']);
    expect({ foo: 1, bar: 2 }).to.have.keys('foo', 'bar');
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('foo', 'bar');
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('bar', 'foo');
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('baz');

    expect({ foo: 1, bar: 2 }).to.contain.keys('foo');
    expect({ foo: 1, bar: 2 }).to.contain.keys('bar', 'foo');
    expect({ foo: 1, bar: 2 }).to.contain.keys(['foo']);
    expect({ foo: 1, bar: 2 }).to.contain.keys(['bar']);
    expect({ foo: 1, bar: 2 }).to.contain.keys(['bar', 'foo']);

    expect({ foo: 1, bar: 2 }).to.not.have.keys('baz');
    expect({ foo: 1, bar: 2 }).to.not.have.keys('foo', 'baz');
    expect({ foo: 1, bar: 2 }).to.not.contain.keys('baz');
    expect({ foo: 1, bar: 2 }).to.not.contain.keys('foo', 'baz');
    expect({ foo: 1, bar: 2 }).to.not.contain.keys('baz', 'foo');

    err(() => {
        expect({ foo: 1 }).to.have.keys();
    }, "keys required");

    err(() => {
        expect({ foo: 1 }).to.have.keys([]);
    }, "keys required");

    err(() => {
        expect({ foo: 1 }).to.not.have.keys([]);
    }, "keys required");

    err(() => {
        expect({ foo: 1 }).to.contain.keys([]);
    }, "keys required");

    err(() => {
        expect({ foo: 1 }).to.have.keys(['bar']);
    }, "expected { foo: 1 } to have key 'bar'");

    err(() => {
        expect({ foo: 1 }).to.have.keys(['bar', 'baz']);
    }, "expected { foo: 1 } to have keys 'bar', and 'baz'");

    err(() => {
        expect({ foo: 1 }).to.have.keys(['foo', 'bar', 'baz']);
    }, "expected { foo: 1 } to have keys 'foo', 'bar', and 'baz'");

    err(() => {
        expect({ foo: 1 }).to.not.have.keys(['foo']);
    }, "expected { foo: 1 } to not have key 'foo'");

    err(() => {
        expect({ foo: 1 }).to.not.have.keys(['foo']);
    }, "expected { foo: 1 } to not have key 'foo'");

    err(() => {
        expect({ foo: 1, bar: 2 }).to.not.have.keys(['foo', 'bar']);
    }, "expected { foo: 1, bar: 2 } to not have keys 'foo', and 'bar'");

    err(() => {
        expect({ foo: 1 }).to.not.contain.keys(['foo']);
    }, "expected { foo: 1 } to not contain key 'foo'");

    err(() => {
        expect({ foo: 1 }).to.contain.keys('foo', 'bar');
    }, "expected { foo: 1 } to contain keys 'foo', and 'bar'");
}

function chaining() {
    var tea = { name: 'chai', extras: ['milk', 'sugar', 'smile'] };
    expect(tea).to.have.property('extras').with.lengthOf(3);

    err(() => {
        expect(tea).to.have.property('extras').with.lengthOf(4);
    }, "expected [ 'milk', 'sugar', 'smile' ] to have a length of 4 but got 3");

    expect(tea).to.be.a('object').and.have.property('name', 'chai');
}

function _throw() {
    // See GH-45: some poorly-constructed custom errors don't have useful names
    // on either their constructor or their constructor prototype, but instead
    // only set the name inside the constructor itself.
    var PoorlyConstructedError = () => {
        this.name = 'PoorlyConstructedError';
    };
    PoorlyConstructedError.prototype = Object.create(Error.prototype);

    var specificError = new RangeError('boo');

    var goodFn = () => { 1 == 1; }
        , badFn = () => { throw new Error('testing'); }
        , refErrFn = () => { throw new ReferenceError('hello'); }
        , ickyErrFn = () => { throw new PoorlyConstructedError(); }
        , specificErrFn = () => { throw specificError; };

    expect(goodFn).to.not.throw();
    expect(goodFn).to.not.throw(Error);
    expect(goodFn).to.not.throw(specificError);
    expect(badFn).to.throw();
    expect(badFn).to.throw(Error);
    expect(badFn).to.not.throw(ReferenceError);
    expect(badFn).to.not.throw(specificError);
    expect(refErrFn).to.throw();
    expect(refErrFn).to.throw(ReferenceError);
    expect(refErrFn).to.throw(Error);
    expect(refErrFn).to.not.throw(TypeError);
    expect(refErrFn).to.not.throw(specificError);
    expect(ickyErrFn).to.throw();
    expect(ickyErrFn).to.throw(PoorlyConstructedError);
    expect(ickyErrFn).to.throw(Error);
    expect(ickyErrFn).to.not.throw(specificError);
    expect(specificErrFn).to.throw(specificError);

    expect(badFn).to.throw(/testing/);
    expect(badFn).to.not.throw(/hello/);
    expect(badFn).to.throw('testing');
    expect(badFn).to.not.throw('hello');

    expect(badFn).to.throw(Error, /testing/);
    expect(badFn).to.throw(Error, 'testing');

    err(() => {
        expect(goodFn).to.throw();
    }, "expected [Function] to throw an error");

    err(() => {
        expect(goodFn).to.throw(ReferenceError);
    }, "expected [Function] to throw ReferenceError");

    err(() => {
        expect(goodFn).to.throw(specificError);
    }, "expected [Function] to throw [RangeError: boo]");

    err(() => {
        expect(badFn).to.not.throw();
    }, "expected [Function] to not throw an error but [Error: testing] was thrown");

    err(() => {
        expect(badFn).to.throw(ReferenceError);
    }, "expected [Function] to throw 'ReferenceError' but [Error: testing] was thrown");

    err(() => {
        expect(badFn).to.throw(specificError);
    }, "expected [Function] to throw [RangeError: boo] but [Error: testing] was thrown");

    err(() => {
        expect(badFn).to.not.throw(Error);
    }, "expected [Function] to not throw 'Error' but [Error: testing] was thrown");

    err(() => {
        expect(refErrFn).to.not.throw(ReferenceError);
    }, "expected [Function] to not throw 'ReferenceError' but [ReferenceError: hello] was thrown");

    err(() => {
        expect(badFn).to.throw(PoorlyConstructedError);
    }, "expected [Function] to throw 'PoorlyConstructedError' but [Error: testing] was thrown");

    err(() => {
        expect(ickyErrFn).to.not.throw(PoorlyConstructedError);
    }, /^(expected \[Function\] to not throw 'PoorlyConstructedError' but)(.*)(PoorlyConstructedError|\{ Object \()(.*)(was thrown)$/);

    err(() => {
        expect(ickyErrFn).to.throw(ReferenceError);
    }, /^(expected \[Function\] to throw 'ReferenceError' but)(.*)(PoorlyConstructedError|\{ Object \()(.*)(was thrown)$/);

    err(() => {
        expect(specificErrFn).to.throw(new ReferenceError('eek'));
    }, "expected [Function] to throw [ReferenceError: eek] but [RangeError: boo] was thrown");

    err(() => {
        expect(specificErrFn).to.not.throw(specificError);
    }, "expected [Function] to not throw [RangeError: boo]");

    err(() => {
        expect(badFn).to.not.throw(/testing/);
    }, "expected [Function] to throw error not matching /testing/");

    err(() => {
        expect(badFn).to.throw(/hello/);
    }, "expected [Function] to throw error matching /hello/ but got 'testing'");

    err(() => {
        expect(badFn).to.throw(Error, /hello/, 'blah');
    }, "blah: expected [Function] to throw error matching /hello/ but got 'testing'");

    err(() => {
        expect(badFn).to.throw(Error, 'hello', 'blah');
    }, "blah: expected [Function] to throw error including 'hello' but got 'testing'");
}

function use(){
    chai.use(function (_chai, utils) {
      _chai.can.use.any();
    });
}

function respondTo() {
    function Foo() {};
    var bar = {};

    expect(Foo).to.respondTo('bar');
    expect(Foo).to.not.respondTo('foo');
    expect(Foo).itself.to.respondTo('func');
    expect(Foo).itself.not.to.respondTo('bar');

    expect(bar).to.respondTo('foo');

    err(() => {
        expect(Foo).to.respondTo('baz', 'constructor');
    }, /^(constructor: expected)(.*)(\[Function: Foo\])(.*)(to respond to \'baz\')$/);

    err(() => {
        expect(bar).to.respondTo('baz', 'object');
    }, /^(object: expected)(.*)(\{ foo: \[Function\] \}|\{ Object \()(.*)(to respond to \'baz\')$/);
}

function satisfy() {
    function matcher(num) {
        return num === 1;
    };

    expect(1).to.satisfy(matcher);

    err(() => {
        expect(2).to.satisfy(matcher, 'blah');
    }, "blah: expected 2 to satisfy [Function: matcher]");
}

function closeTo() {
    expect(1.5).to.be.closeTo(1.0, 0.5);
    expect(10).to.be.closeTo(20, 20);
    expect(-10).to.be.closeTo(20, 30);

    err(() => {
        expect(2).to.be.closeTo(1.0, 0.5, 'blah');
    }, "blah: expected 2 to be close to 1 +/- 0.5");

    err(() => {
        expect(-10).to.be.closeTo(20, 29, 'blah');
    }, "blah: expected -10 to be close to 20 +/- 29");
}

function includeMembers() {
    expect([1, 2, 3]).to.include.members([]);

    expect([1, 2, 3]).to.include.members([3, 2]);

    expect([1, 2, 3]).to.not.include.members([8, 4]);

    expect([1, 2, 3]).to.not.include.members([1, 2, 3, 4]);
}

function sameMembers() {
    expect([5, 4]).to.have.same.members([4, 5]);
    expect([5, 4]).to.have.same.members([5, 4]);

    expect([5, 4]).to.not.have.same.members([]);
    expect([5, 4]).to.not.have.same.members([6, 3]);
    expect([5, 4]).to.not.have.same.members([5, 4, 2]);
}

function members() {
    expect([5, 4]).members([4, 5]);
    expect([5, 4]).members([5, 4]);

    expect([5, 4]).not.members([]);
    expect([5, 4]).not.members([6, 3]);
    expect([5, 4]).not.members([5, 4, 2]);
}
