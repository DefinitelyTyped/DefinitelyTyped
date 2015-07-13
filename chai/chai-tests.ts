/// <reference path="chai.d.ts" />
import chai = require('chai');

// ReSharper disable WrongExpressionStatement

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();
declare var err: Function;

function chaiVersion() {
    expect(chai).to.have.property('version');
    (<Object><{}>chai).should.have.property('version');
}

function assertion() {
    expect('test').to.be.a('string');
    'test'.should.be.a('string');
    expect('foo').to.equal('foo');
    'foo'.should.equal('foo');
    should.equal('foo', 'foo');
}

function fail() {
    err(() => {
        should.fail('foo', 'bar');
    }, 'expected fail to throw an AssertionError');
    err(() => {
        should.fail('foo', 'bar', 'should fail');
    }, 'expected fail to throw an AssertionError');
    err(() => {
        should.fail('foo', 'bar', 'should fail', 'equal');
    }, 'expected fail to throw an AssertionError');
}

// ReSharper disable once InconsistentNaming
function _true() {
    expect(true).to.be.true;
    true.should.be.true;
    expect(false).to.not.be.true;
    false.should.not.be.true;
    expect(1).to.not.be.true;
    (1).should.not.be.true;

    err(() => {
        expect('test').to.be.true;
        'test'.should.be.true;
    }, 'expected \'test\' to be true');
}

function ok() {
    expect(true).to.be.ok;
    true.should.be.ok;
    expect(false).to.not.be.ok;
    false.should.not.be.ok;
    expect(1).to.be.ok;
    (1).should.be.ok;
    expect(0).to.not.be.ok;
    (0).should.not.be.ok;

    err(() => {
        expect('').to.be.ok;
        ''.should.be.ok;
    }, 'expected \'\' to be truthy');

    err(() => {
        expect('test').to.not.be.ok;
        'test'.should.not.be.ok;
    }, 'expected \'test\' to be falsy');
}

function _false() {
    expect(false).to.be.false;
    false.should.be.false;
    expect(true).to.not.be.false;
    true.should.not.be.false;
    expect(0).to.not.be.false;
    (0).should.not.be.false;

    err(() => {
        expect('').to.be.false;
        ''.should.be.false;
    }, 'expected \'\' to be false');
}

function _null() {
    expect(null).to.be.null;
    should.equal(null, null);
    expect(false).to.not.be.null;
    false.should.not.be.null;

    err(() => {
        expect('').to.be.null;
        ''.should.be.null;
    }, 'expected \'\' to be null');
}

function _undefined() {
    expect(undefined).to.be.undefined;
    should.equal(undefined, undefined);
    expect(null).to.not.be.undefined;
    should.not.equal(null, undefined);

    err(() => {
        expect('').to.be.undefined;
        ''.should.be.undefined;
    }, 'expected \'\' to be undefined');
}

function exist() {
    var foo = 'bar';
    expect(foo).to.exist;
    should.exist(foo);
    expect(void(0)).to.not.exist;
    should.not.exist(void (0));
}

function arguments() {
    var args = arguments;
    expect(args).to.be.arguments;
    args.should.be.arguments;
    expect([]).to.not.be.arguments;
    [].should.not.be.arguments;
    expect(args).to.be.an('arguments').and.be.arguments;
    args.should.be.an('arguments').and.be.arguments;
    expect([]).to.be.an('array').and.not.be.Arguments;
    [].should.be.an('array').and.not.be.Arguments;
}

function equal() {
    expect(undefined).to.equal(void(0));
    should.equal(undefined, void(0));
}

function _typeof() {
    expect('test').to.be.a('string');
    'test'.should.be.a('string');

    err(() => {
        expect('test').to.not.be.a('string');
        'test'.should.not.be.a('string');
    }, 'expected \'test\' not to be a string');

    expect(arguments).to.be.an('arguments');
    arguments.should.be.an('arguments');

    expect(5).to.be.a('number');
    (5).should.be.a('number');

    expect(new Number(1)).to.be.a('number');
    (new Number(1)).should.be.a('number');
    expect(Number(1)).to.be.a('number');
    Number(1).should.be.a('number');
    expect(true).to.be.a('boolean');
    true.should.be.a('boolean');
    expect(new Array()).to.be.a('array');
    (new Array()).should.be.a('array');
    expect(new Object()).to.be.a('object');
    (new Object()).should.be.a('object');
    expect({}).to.be.a('object');
    ({}).should.be.a('object');
    expect([]).to.be.a('array');
    [].should.be.a('array');
    expect(() => { }).to.be.a('function');
    (() => { }).should.be.a('function');
    expect(null).to.be.a('null');
    // N.B. previous line has no should equivalent

    err(() => {
        expect(5).to.not.be.a('number', 'blah');
        (5).should.not.be.a('number', 'blah');
    }, 'blah: expected 5 not to be a number');
}

class Foo { }
function _instanceof() {
    expect(new Foo()).to.be.an.instanceof(Foo);
    (new Foo()).should.be.an.instanceof(Foo);

    err(() => {
        expect(3).to.an.instanceof(Foo, 'blah');
        (3).should.an.instanceof(Foo, 'blah');
    }, 'blah: expected 3 to be an instance of Foo');
}

function within() {
    expect(5).to.be.within(5, 10);
    (5).should.be.within(5, 10);
    expect(5).to.be.within(3, 6);
    (5).should.be.within(3, 6);
    expect(5).to.be.within(3, 5);
    (5).should.be.within(3, 5);
    expect(5).to.not.be.within(1, 3);
    (5).should.not.be.within(1, 3);
    expect('foo').to.have.length.within(2, 4);
    'foo'.should.have.length.within(2, 4);
    expect([1, 2, 3]).to.have.length.within(2, 4);
    [1, 2, 3].should.have.length.within(2, 4);

    err(() => {
        expect(5).to.not.be.within(4, 6, 'blah');
        (5).should.not.be.within(4, 6, 'blah');
    }, 'blah: expected 5 to not be within 4..6', 'blah');

    err(() => {
        expect(10).to.be.within(50, 100, 'blah');
        (10).should.be.within(50, 100, 'blah');
    }, 'blah: expected 10 to be within 50..100');

    err(() => {
        expect('foo').to.have.length.within(5, 7, 'blah');
        'foo'.should.have.length.within(5, 7, 'blah');
    }, 'blah: expected \'foo\' to have a length within 5..7');

    err(() => {
        expect([1, 2, 3]).to.have.length.within(5, 7, 'blah');
        [1, 2, 3].should.have.length.within(5, 7, 'blah');
    }, 'blah: expected [ 1, 2, 3 ] to have a length within 5..7');
}

function above() {
    expect(5).to.be.above(2);
    (5).should.be.above(2);
    expect(5).to.be.greaterThan(2);
    (5).should.be.greaterThan(2);
    expect(5).to.not.be.above(5);
    (5).should.not.be.above(5);
    expect(5).to.not.be.above(6);
    (5).should.not.be.above(6);
    expect('foo').to.have.length.above(2);
    'foo'.should.have.length.above(2);
    expect([1, 2, 3]).to.have.length.above(2);
    [1, 2, 3].should.have.length.above(2);

    err(() => {
        expect(5).to.be.above(6, 'blah');
        (5).should.be.above(6, 'blah');
    }, 'blah: expected 5 to be above 6', 'blah');

    err(() => {
        expect(10).to.not.be.above(6, 'blah');
        (10).should.not.be.above(6, 'blah');
    }, 'blah: expected 10 to be at most 6');

    err(() => {
        expect('foo').to.have.length.above(4, 'blah');
        'foo'.should.have.length.above(4, 'blah');
    }, 'blah: expected \'foo\' to have a length above 4 but got 3');

    err(() => {
        expect([1, 2, 3]).to.have.length.above(4, 'blah');
        [1, 2, 3].should.have.length.above(4, 'blah');
    }, 'blah: expected [ 1, 2, 3 ] to have a length above 4 but got 3');
}

function least() {
    expect(5).to.be.at.least(2);
    (5).should.be.at.least(2);
    expect(5).to.be.at.least(5);
    (5).should.be.at.least(5);
    expect(5).to.not.be.at.least(6);
    (5).should.not.be.at.least(6);
    expect('foo').to.have.length.of.at.least(2);
    'foo'.should.have.length.of.at.least(2);
    expect([1, 2, 3]).to.have.length.of.at.least(2);
    [1, 2, 3].should.have.length.of.at.least(2);

    err(() => {
        expect(5).to.be.at.least(6, 'blah');
        (5).should.be.at.least(6, 'blah');
    }, 'blah: expected 5 to be at least 6', 'blah');

    err(() => {
        expect(10).to.not.be.at.least(6, 'blah');
        (10).should.not.be.at.least(6, 'blah');
    }, 'blah: expected 10 to be below 6');

    err(() => {
        expect('foo').to.have.length.of.at.least(4, 'blah');
        'foo'.should.have.length.of.at.least(4, 'blah');
    }, 'blah: expected \'foo\' to have a length at least 4 but got 3');

    err(() => {
        expect([1, 2, 3]).to.have.length.of.at.least(4, 'blah');
        [1, 2, 3].should.have.length.of.at.least(4, 'blah');
    }, 'blah: expected [ 1, 2, 3 ] to have a length at least 4 but got 3');

    err(() => {
        expect([1, 2, 3, 4]).to.not.have.length.of.at.least(4, 'blah');
        [1, 2, 3, 4].should.not.have.length.of.at.least(4, 'blah');
    }, 'blah: expected [ 1, 2, 3, 4 ] to have a length below 4');
}

function below() {
    expect(2).to.be.below(5);
    (2).should.be.below(5);
    expect(2).to.be.lessThan(5);
    (2).should.be.lessThan(5);
    expect(2).to.not.be.below(2);
    (2).should.not.be.below(2);
    expect(2).to.not.be.below(1);
    (2).should.not.be.below(1);
    expect('foo').to.have.length.below(4);
    'foo'.should.have.length.below(4);
    expect([1, 2, 3]).to.have.length.below(4);
    [1, 2, 3].should.have.length.below(4);

    err(() => {
        expect(6).to.be.below(5, 'blah');
        (6).should.be.below(5, 'blah');
    }, 'blah: expected 6 to be below 5');

    err(() => {
        expect(6).to.not.be.below(10, 'blah');
        (6).should.not.be.below(10, 'blah');
    }, 'blah: expected 6 to be at least 10');

    err(() => {
        expect('foo').to.have.length.below(2, 'blah');
        'foo'.should.have.length.below(2, 'blah');
    }, 'blah: expected \'foo\' to have a length below 2 but got 3');

    err(() => {
        expect([1, 2, 3]).to.have.length.below(2, 'blah');
        [1, 2, 3].should.have.length.below(2, 'blah');
    }, 'blah: expected [ 1, 2, 3 ] to have a length below 2 but got 3');
}

function most() {
    expect(2).to.be.at.most(5);
    (2).should.be.at.most(5);
    expect(2).to.be.at.most(2);
    (2).should.be.at.most(2);
    expect(2).to.not.be.at.most(1);
    (2).should.not.be.at.most(1);
    expect(2).to.not.be.at.most(1);
    (2).should.not.be.at.most(1);
    expect('foo').to.have.length.of.at.most(4);
    'foo'.should.have.length.of.at.most(4);
    expect([1, 2, 3]).to.have.length.of.at.most(4);
    [1, 2, 3].should.have.length.of.at.most(4);

    err(() => {
        expect(6).to.be.at.most(5, 'blah');
        (6).should.be.at.most(5, 'blah');
    }, 'blah: expected 6 to be at most 5');

    err(() => {
        expect(6).to.not.be.at.most(10, 'blah');
        (6).should.not.be.at.most(10, 'blah');
    }, 'blah: expected 6 to be above 10');

    err(() => {
        expect('foo').to.have.length.of.at.most(2, 'blah');
        'foo'.should.have.length.of.at.most(2, 'blah');
    }, 'blah: expected \'foo\' to have a length at most 2 but got 3');

    err(() => {
        expect([1, 2, 3]).to.have.length.of.at.most(2, 'blah');
        [1, 2, 3].should.have.length.of.at.most(2, 'blah');
    }, 'blah: expected [ 1, 2, 3 ] to have a length at most 2 but got 3');

    err(() => {
        expect([1, 2]).to.not.have.length.of.at.most(2, 'blah');
        [1, 2].should.not.have.length.of.at.most(2, 'blah');
    }, 'blah: expected [ 1, 2 ] to have a length above 2');
}

function match() {
    expect('foobar').to.match(/^foo/);
    'foobar'.should.match(/^foo/);
    expect('foobar').to.not.match(/^bar/);
    'foobar'.should.not.match(/^bar/);

    err(() => {
        expect('foobar').to.match(/^bar/i, 'blah');
        'foobar'.should.match(/^bar/i, 'blah');
    }, 'blah: expected \'foobar\' to match /^bar/i');

    err(() => {
        expect('foobar').to.not.match(/^foo/i, 'blah');
        'foobar'.should.not.match(/^foo/i, 'blah');
    }, 'blah: expected \'foobar\' not to match /^foo/i');
}

function length2() {
    expect('test').to.have.length(4);
    'test'.should.have.length(4);
    expect('test').to.not.have.length(3);
    'test'.should.not.have.length(3);
    expect([1, 2, 3]).to.have.length(3);
    [1, 2, 3].should.have.length(3);

    err(() => {
        expect(4).to.have.length(3, 'blah');
        (4).should.have.length(3, 'blah');
    }, 'blah: expected 4 to have a property \'length\'');

    err(() => {
        expect('asd').to.not.have.length(3, 'blah');
        'asd'.should.not.have.length(3, 'blah');
    }, 'blah: expected \'asd\' to not have a length of 3');
}

function eql() {
    expect('test').to.eql('test');
    'test'.should.eql('test');
    expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
    ({ foo: 'bar' }).should.eql({ foo: 'bar' });
    expect(1).to.eql(1);
    (1).should.eql(1);
    expect('4').to.not.eql(4);
    '4'.should.not.eql(4);

    err(() => {
        expect(4).to.eql(3, 'blah');
        (4).should.eql(3, 'blah');
    }, 'blah: expected 4 to deeply equal 3');
}

class Buffer {
    constructor(arr: number[]) {
    }
}
function buffer() {
    expect(new Buffer([1])).to.eql(new Buffer([1]));
    (new Buffer([1])).should.eql(new Buffer([1]));

    err(() => {
        expect(new Buffer([0])).to.eql(new Buffer([1]));
        (new Buffer([0])).should.eql(new Buffer([1]));
    }, 'expected <Buffer 00> to deeply equal <Buffer 01>');
}

function equal2() {
    expect('test').to.equal('test');
    'test'.should.equal('test');
    should.equal('test', 'test');
    expect(1).to.equal(1);
    (1).should.equal(1);
    should.equal(1, 1);

    err(() => {
        expect(4).to.equal(3, 'blah');
        (4).should.equal(3, 'blah');
        should.equal(4, 3, 'blah');
    }, 'blah: expected 4 to equal 3');

    err(() => {
        expect('4').to.equal(4, 'blah');
        '4'.should.equal(4, 'blah');
        should.equal(4, 4, 'blah');
    }, 'blah: expected \'4\' to equal 4');
}

function deepEqual() {
    expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
    ({ foo: 'bar' }).should.deep.equal({ foo: 'bar' });
    expect({ foo: 'bar' }).not.to.deep.equal({ foo: 'baz' });
}

function deepEqual2() {
    expect(/a/).to.deep.equal(/a/);
    /a/.should.deep.equal(/a/);
    expect(/a/).not.to.deep.equal(/b/);
    expect(/a/).not.to.deep.equal({});
    expect(/a/g).to.deep.equal(/a/g);
    /a/g.should.deep.equal(/a/g);
    expect(/a/g).not.to.deep.equal(/b/g);
    expect(/a/i).to.deep.equal(/a/i);
    /a/i.should.deep.equal(/a/i);
    expect(/a/i).not.to.deep.equal(/b/i);
    expect(/a/m).to.deep.equal(/a/m);
    /a/m.should.deep.equal(/a/m);
    expect(/a/m).not.to.deep.equal(/b/m);
}

// ReSharper disable once InconsistentNaming
function deepEqual3() {
    var a = new Date(1, 2, 3);
    var b = new Date(4, 5, 6);
    expect(a).to.deep.equal(a);
    a.should.deep.equal(a);
    expect(a).not.to.deep.equal(b);
    a.should.not.deep.equal(b);
    expect(a).not.to.deep.equal({});
    a.should.not.deep.equal({});
}

function deepInclude() {
    expect(['foo', 'bar']).to.deep.include(['bar', 'foo']);
    ['foo', 'bar'].should.deep.include(['bar', 'foo']);
    expect(['foo', 'bar']).not.to.deep.equal(['foo', 'baz' ]);
    ['foo', 'bar'].should.not.deep.equal(['foo', 'baz' ]);
}

class FakeArgs {
    length: number;
}

function empty() {
    FakeArgs.prototype.length = 0;

    expect('').to.be.empty;

    ''.should.be.empty;
    expect('foo').not.to.be.empty;
    'foo'.should.not.be.empty;
    expect([]).to.be.empty;
    [].should.be.empty;
    expect(['foo']).not.to.be.empty;
    ['foo'].should.not.be.empty;
    expect(new FakeArgs).to.be.empty;
    (new FakeArgs).should.be.empty;
    expect({ arguments: 0 }).not.to.be.empty;
    ({ arguments: 0 }).should.not.be.empty;
    expect({}).to.be.empty;
    ({}).should.be.empty;
    expect({ foo: 'bar' }).not.to.be.empty;
    ({ foo: 'bar' }).should.not.be.empty;

    err(() => {
        expect('').not.to.be.empty;
        ''.should.not.be.empty;
    }, 'expected \'\' not to be empty');

    err(() => {
        expect('foo').to.be.empty;
        'foo'.should.be.empty;
        'foo'.should.be.empty;
    }, 'expected \'foo\' to be empty');

    err(() => {
        expect([]).not.to.be.empty;
        [].should.not.be.empty;
    }, 'expected [] not to be empty');

    err(() => {
        expect(['foo']).to.be.empty;
        ['foo'].should.be.empty;
    }, 'expected [ \'foo\' ] to be empty');

    err(() => {
        expect(new FakeArgs).not.to.be.empty;
        (new FakeArgs).should.not.be.empty;
    }, 'expected { length: 0 } not to be empty');

    err(() => {
        expect({ arguments: 0 }).to.be.empty;
        ({ arguments: 0 }).should.be.empty;
    }, 'expected { arguments: 0 } to be empty');

    err(() => {
        expect({}).not.to.be.empty;
        ({}).should.not.be.empty;
    }, 'expected {} not to be empty');

    err(() => {
        expect({ foo: 'bar' }).to.be.empty;
        ({ foo: 'bar' }).should.be.empty;
    }, 'expected { foo: \'bar\' } to be empty');
}

function property() {
    expect('test').to.have.property('length');
    'test'.should.have.property('length');
    expect(4).to.not.have.property('length');
    (4).should.not.have.property('length');

    expect({ 'foo.bar': 'baz' })
        .to.have.property('foo.bar');
    ({ 'foo.bar': 'baz' }).should.have.property('foo.bar');
    expect({ foo: { bar: 'baz' } })
        .to.not.have.property('foo.bar');
    ({ foo: { bar: 'baz' } }).should.not.have.property('foo.bar');

    err(() => {
        expect('asd').to.have.property('foo');
        'asd'.should.have.property('foo');
    }, 'expected \'asd\' to have a property \'foo\'');
    err(() => {
        expect({ foo: { bar: 'baz' } })
            .to.have.property('foo.bar');
        ({ foo: { bar: 'baz' } }).should.have.property('foo.bar');
    }, 'expected { foo: { bar: \'baz\' } } to have a property \'foo.bar\'');
}

function deepProperty() {
    expect({ 'foo.bar': 'baz' })
        .to.not.have.deep.property('foo.bar');
    ({ 'foo.bar': 'baz' }).should
        .not.have.deep.property('foo.bar');
    expect({ foo: { bar: 'baz' } })
        .to.have.deep.property('foo.bar');
    ({ foo: { bar: 'baz' } }).should
        .have.deep.property('foo.bar');

    err(() => {
        expect({ 'foo.bar': 'baz' })
            .to.have.deep.property('foo.bar');
        ({ 'foo.bar': 'baz' }).should
            .have.deep.property('foo.bar');
    }, 'expected { \'foo.bar\': \'baz\' } to have a deep property \'foo.bar\'');
}

function property2() {
    expect('test').to.have.property('length', 4);
    'test'.should.have.property('length', 4);
    expect('asd').to.have.property('constructor', String);
    'asd'.should.have.property('constructor', String);

    err(() => {
        expect('asd').to.have.property('length', 4, 'blah');
        'asd'.should.have.property('length', 4, 'blah');
    }, 'blah: expected \'asd\' to have a property \'length\' of 4, but got 3');

    err(() => {
        expect('asd').to.not.have.property('length', 3, 'blah');
        'asd'.should.not.have.property('length', 3, 'blah');
    }, 'blah: expected \'asd\' to not have a property \'length\' of 3');

    err(() => {
        expect('asd').to.not.have.property('foo', 3, 'blah');
        'asd'.should.not.have.property('foo', 3, 'blah');
    }, 'blah: \'asd\' has no property \'foo\'');

    err(() => {
        expect('asd').to.have.property('constructor', Number, 'blah');
        'asd'.should.have.property('constructor', Number, 'blah');
    }, 'blah: expected \'asd\' to have a property \'constructor\' of [Function: Number], but got [Function: String]');
}

function deepProperty2() {
    expect({ foo: { bar: 'baz' } })
        .to.have.deep.property('foo.bar', 'baz');
    ({ foo: { bar: 'baz' } }).should
        .have.deep.property('foo.bar', 'baz');

    err(() => {
        expect({ foo: { bar: 'baz' } })
            .to.have.deep.property('foo.bar', 'quux', 'blah');
        ({ foo: { bar: 'baz' } }).should
            .have.deep.property('foo.bar', 'quux', 'blah');
    }, 'blah: expected { foo: { bar: \'baz\' } } to have a deep property \'foo.bar\' of \'quux\', but got \'baz\'');
    err(() => {
        expect({ foo: { bar: 'baz' } })
            .to.not.have.deep.property('foo.bar', 'baz', 'blah');
        ({ foo: { bar: 'baz' } }).should
            .not.have.deep.property('foo.bar', 'baz', 'blah');
    }, 'blah: expected { foo: { bar: \'baz\' } } to not have a deep property \'foo.bar\' of \'baz\'');
    err(() => {
        expect({ foo: 5 })
            .to.not.have.deep.property('foo.bar', 'baz', 'blah');
        ({ foo: 5 }).should
            .not.have.deep.property('foo.bar', 'baz', 'blah');
    }, 'blah: { foo: 5 } has no deep property \'foo.bar\'');
}

function ownProperty() {
    expect('test').to.have.ownProperty('length');
    'test'.should.have.ownProperty('length');
    expect('test').to.haveOwnProperty('length');
    'test'.should.haveOwnProperty('length');
    expect({ length: 12 }).to.have.ownProperty('length');
    ({ length: 12 }).should.have.ownProperty('length');

    err(() => {
        expect({ length: 12 }).to.not.have.ownProperty('length', 'blah');
        ({ length: 12 }).should.not.have.ownProperty('length', 'blah');
    }, 'blah: expected { length: 12 } to not have own property \'length\'');
}

function string() {
    expect('foobar').to.have.string('bar');
    'foobar'.should.have.string('bar');
    expect('foobar').to.have.string('foo');
    'foobar'.should.have.string('foo');
    expect('foobar').to.not.have.string('baz');
    'foobar'.should.not.have.string('baz');

    err(() => {
        expect(3).to.have.string('baz');
        (3).should.have.string('baz');
    }, 'expected 3 to be a string');

    err(() => {
        expect('foobar').to.have.string('baz', 'blah');
        'foobar'.should.have.string('baz', 'blah');
    }, 'blah: expected \'foobar\' to contain \'baz\'');

    err(() => {
        expect('foobar').to.not.have.string('bar', 'blah');
        'foobar'.should.not.have.string('bar', 'blah');
    }, 'blah: expected \'foobar\' to not contain \'bar\'');
}

function include() {
    expect(['foo', 'bar']).to.include('foo');
    ['foo', 'bar'].should.include('foo');
    expect(['foo', 'bar']).to.include('foo');
    ['foo', 'bar'].should.include('foo');
    expect(['foo', 'bar']).to.include('bar');
    ['foo', 'bar'].should.include('bar');
    expect([1, 2]).to.include(1);
    [1, 2].should.include(1);
    expect(['foo', 'bar']).to.not.include('baz');
    ['foo', 'bar'].should.not.include('baz');
    expect(['foo', 'bar']).to.not.include(1);
    ['foo', 'bar'].should.not.include(1);

    err(() => {
        expect(['foo']).to.include('bar', 'blah');
        ['foo'].should.include('bar', 'blah');
    }, 'blah: expected [ \'foo\' ] to include \'bar\'');

    err(() => {
        expect(['bar', 'foo']).to.not.include('foo', 'blah');
        ['bar', 'foo'].should.not.include('foo', 'blah');
    }, 'blah: expected [ \'bar\', \'foo\' ] to not include \'foo\'');
}

function keys() {
    expect({ foo: 1 }).to.have.keys(['foo']);
    ({ foo: 1 }).should.have.keys(['foo']);
    expect({ foo: 1, bar: 2 }).to.have.keys(['foo', 'bar']);
    ({ foo: 1, bar: 2 }).should.have.keys(['foo', 'bar']);
    expect({ foo: 1, bar: 2 }).to.have.keys('foo', 'bar');
    ({ foo: 1, bar: 2 }).should.have.keys('foo', 'bar');
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('foo', 'bar');
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.keys('foo', 'bar');
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('bar', 'foo');
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.keys('bar', 'foo');
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('baz');
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.keys('baz');

    expect({ foo: 1, bar: 2 }).to.contain.keys('foo');
    ({ foo: 1, bar: 2 }).should.contain.keys('foo');
    expect({ foo: 1, bar: 2 }).to.contain.keys('bar', 'foo');
    ({ foo: 1, bar: 2 }).should.contain.keys('bar', 'foo');
    expect({ foo: 1, bar: 2 }).to.contain.keys(['foo']);
    ({ foo: 1, bar: 2 }).should.contain.keys(['foo']);
    expect({ foo: 1, bar: 2 }).to.contain.keys(['bar']);
    ({ foo: 1, bar: 2 }).should.contain.keys(['bar']);
    expect({ foo: 1, bar: 2 }).to.contain.keys(['bar', 'foo']);
    ({ foo: 1, bar: 2 }).should.contain.keys(['bar', 'foo']);

    expect({ foo: 1, bar: 2 }).to.not.have.keys('baz');
    ({ foo: 1, bar: 2 }).should.not.have.keys('baz');
    expect({ foo: 1, bar: 2 }).to.not.have.keys('foo', 'baz');
    ({ foo: 1, bar: 2 }).should.not.have.keys('foo', 'baz');
    expect({ foo: 1, bar: 2 }).to.not.contain.keys('baz');
    ({ foo: 1, bar: 2 }).should.not.contain.keys('baz');
    expect({ foo: 1, bar: 2 }).to.not.contain.keys('foo', 'baz');
    ({ foo: 1, bar: 2 }).should.not.contain.keys('foo', 'baz');
    expect({ foo: 1, bar: 2 }).to.not.contain.keys('baz', 'foo');
    ({ foo: 1, bar: 2 }).should.not.contain.keys('baz', 'foo');

    err(() => {
        expect({ foo: 1 }).to.have.keys();
        ({ foo: 1 }).should.have.keys();
    }, 'keys required');

    err(() => {
        expect({ foo: 1 }).to.have.keys([]);
        ({ foo: 1 }).should.have.keys([]);
    }, 'keys required');

    err(() => {
        expect({ foo: 1 }).to.not.have.keys([]);
        ({ foo: 1 }).should.not.have.keys([]);
    }, 'keys required');

    err(() => {
        expect({ foo: 1 }).to.contain.keys([]);
        ({ foo: 1 }).should.contain.keys([]);
    }, 'keys required');

    err(() => {
        expect({ foo: 1 }).to.have.keys(['bar']);
        ({ foo: 1 }).should.have.keys(['bar']);
    }, 'expected { foo: 1 } to have key \'bar\'');

    err(() => {
        expect({ foo: 1 }).to.have.keys(['bar', 'baz']);
        ({ foo: 1 }).should.have.keys(['bar', 'baz']);
    }, 'expected { foo: 1 } to have keys \'bar\', and \'baz\'');

    err(() => {
        expect({ foo: 1 }).to.have.keys(['foo', 'bar', 'baz']);
        ({ foo: 1 }).should.have.keys(['foo', 'bar', 'baz']);
    }, 'expected { foo: 1 } to have keys \'foo\', \'bar\', and \'baz\'');

    err(() => {
        expect({ foo: 1 }).to.not.have.keys(['foo']);
        ({ foo: 1 }).should.not.have.keys(['foo']);
    }, 'expected { foo: 1 } to not have key \'foo\'');

    err(() => {
        expect({ foo: 1 }).to.not.have.keys(['foo']);
        ({ foo: 1 }).should.not.have.keys(['foo']);
    }, 'expected { foo: 1 } to not have key \'foo\'');

    err(() => {
        expect({ foo: 1, bar: 2 }).to.not.have.keys(['foo', 'bar']);
        ({ foo: 1, bar: 2 }).should.not.have.keys(['foo', 'bar']);
    }, 'expected { foo: 1, bar: 2 } to not have keys \'foo\', and \'bar\'');

    err(() => {
        expect({ foo: 1 }).to.not.contain.keys(['foo']);
        ({ foo: 1 }).should.not.contain.keys(['foo']);
    }, 'expected { foo: 1 } to not contain key \'foo\'');

    err(() => {
        expect({ foo: 1 }).to.contain.keys('foo', 'bar');
        ({ foo: 1 }).should.contain.keys('foo', 'bar');
    }, 'expected { foo: 1 } to contain keys \'foo\', and \'bar\'');
}

function chaining() {
    var tea = { name: 'chai', extras: ['milk', 'sugar', 'smile'] };
    expect(tea).to.have.property('extras').with.lengthOf(3);
    tea.should.have.property('extras').with.lengthOf(3);

    err(() => {
        expect(tea).to.have.property('extras').with.lengthOf(4);
        tea.should.have.property('extras').with.lengthOf(4);
    }, 'expected [ \'milk\', \'sugar\', \'smile\' ] to have a length of 4 but got 3');

    expect(tea).to.be.a('object').and.have.property('name', 'chai');
    tea.should.be.a('object').and.have.property('name', 'chai');
}

class PoorlyConstructedError {}
function _throw() {
    // See GH-45: some poorly-constructed custom errors don't have useful names
    // on either their constructor or their constructor prototype, but instead
    // only set the name inside the constructor itself.
    PoorlyConstructedError.prototype = Object.create(Error.prototype);

    var specificError = new RangeError('boo');

    var goodFn = () => { }
        , badFn = () => { throw new Error('testing'); }
        , refErrFn = () => { throw new ReferenceError('hello'); }
        , ickyErrFn = () => { throw new PoorlyConstructedError(); }
        , specificErrFn = () => { throw specificError; };

    expect(goodFn).to.not.throw();
    goodFn.should.not.throw();
    should.not.throw(goodFn);
    expect(goodFn).to.not.throw(Error);
    goodFn.should.not.throw(Error);
    should.not.throw(goodFn, Error);
    expect(goodFn).to.not.throw(specificError);
    goodFn.should.not.throw(specificError);
    should.not.throw(goodFn, specificError);

    expect(badFn).to.throw();
    badFn.should.throw();
    should.throw(badFn);
    expect(badFn).to.throw(Error);
    badFn.should.throw(Error);
    should.throw(badFn, Error);
    expect(badFn).to.not.throw(ReferenceError);
    badFn.should.not.throw(ReferenceError);
    should.not.throw(badFn, ReferenceError);
    expect(badFn).to.not.throw(specificError);
    badFn.should.not.throw(specificError);
    should.not.throw(badFn, specificError);

    expect(refErrFn).to.throw();
    refErrFn.should.throw();
    should.throw(refErrFn);
    expect(refErrFn).to.throw(ReferenceError);
    refErrFn.should.throw(ReferenceError);
    should.throw(refErrFn, ReferenceError);
    expect(refErrFn).to.throw(Error);
    refErrFn.should.throw(Error);
    should.throw(refErrFn, Error);
    expect(refErrFn).to.not.throw(TypeError);
    refErrFn.should.not.throw(TypeError);
    should.not.throw(refErrFn, TypeError);
    expect(refErrFn).to.not.throw(specificError);
    refErrFn.should.not.throw(specificError);
    should.not.throw(refErrFn, specificError);

    expect(ickyErrFn).to.throw();
    ickyErrFn.should.throw();
    should.throw(ickyErrFn);
    expect(ickyErrFn).to.throw(PoorlyConstructedError);
    ickyErrFn.should.throw(PoorlyConstructedError);
    should.throw(ickyErrFn, PoorlyConstructedError);
    expect(ickyErrFn).to.throw(Error);
    ickyErrFn.should.throw(Error);
    should.throw(ickyErrFn, Error);
    expect(ickyErrFn).to.not.throw(specificError);
    ickyErrFn.should.not.throw(specificError);
    should.not.throw(ickyErrFn, specificError);
    expect(specificErrFn).to.throw(specificError);
    specificErrFn.should.throw(specificError);
    should.throw(ickyErrFn, specificError);

    expect(badFn).to.throw(/testing/);
    badFn.should.throw(/testing/);
    should.throw(badFn, /testing/);
    expect(badFn).to.not.throw(/hello/);
    badFn.should.not.throw(/hello/);
    should.not.throw(badFn, /hello/);
    expect(badFn).to.throw('testing');
    badFn.should.throw('testing');
    should.throw(badFn, 'testing');
    expect(badFn).to.not.throw('hello');
    badFn.should.not.throw('hello');
    should.not.throw(badFn, 'hello');

    expect(badFn).to.throw(Error, /testing/);
    badFn.should.throw(Error, /testing/);
    should.throw(badFn, Error, /testing/);
    expect(badFn).to.throw(Error, 'testing');
    badFn.should.throw(Error, 'testing');
    should.throw(badFn, Error, 'testing');

    err(() => {
        expect(goodFn).to.throw();
        goodFn.should.throw();
        should.throw(goodFn);
    }, 'expected [Function] to throw an error');

    err(() => {
        expect(goodFn).to.throw(ReferenceError);
        goodFn.should.throw(ReferenceError);
        should.throw(goodFn, ReferenceError);
    }, 'expected [Function] to throw ReferenceError');

    err(() => {
        expect(goodFn).to.throw(specificError);
        goodFn.should.throw(specificError);
        should.throw(goodFn, specificError);
    }, 'expected [Function] to throw [RangeError: boo]');

    err(() => {
        expect(badFn).to.not.throw();
        badFn.should.not.throw();
        should.not.throw(badFn);
    }, 'expected [Function] to not throw an error but [Error: testing] was thrown');

    err(() => {
        expect(badFn).to.throw(ReferenceError);
        badFn.should.throw(ReferenceError);
        should.throw(badFn, ReferenceError);
    }, 'expected [Function] to throw \'ReferenceError\' but [Error: testing] was thrown');

    err(() => {
        expect(badFn).to.throw(specificError);
        badFn.should.throw(specificError);
        should.throw(badFn, specificError);
    }, 'expected [Function] to throw [RangeError: boo] but [Error: testing] was thrown');

    err(() => {
        expect(badFn).to.not.throw(Error);
        badFn.should.not.throw(Error);
        should.not.throw(badFn, Error);
    }, 'expected [Function] to not throw \'Error\' but [Error: testing] was thrown');

    err(() => {
        expect(refErrFn).to.not.throw(ReferenceError);
        refErrFn.should.not.throw(ReferenceError);
        should.not.throw(refErrFn, ReferenceError);
    }, 'expected [Function] to not throw \'ReferenceError\' but [ReferenceError: hello] was thrown');

    err(() => {
        expect(badFn).to.throw(PoorlyConstructedError);
        badFn.should.throw(PoorlyConstructedError);
        should.throw(badFn, PoorlyConstructedError);
    }, 'expected [Function] to throw \'PoorlyConstructedError\' but [Error: testing] was thrown');

    err(() => {
        expect(ickyErrFn).to.not.throw(PoorlyConstructedError);
        ickyErrFn.should.not.throw(PoorlyConstructedError);
        should.not.throw(ickyErrFn, PoorlyConstructedError);
    }, /^(expected \[Function\] to not throw 'PoorlyConstructedError' but)(.*)(PoorlyConstructedError|\{ Object \()(.*)(was thrown)$/);

    err(() => {
        expect(ickyErrFn).to.throw(ReferenceError);
        ickyErrFn.should.throw(ReferenceError);
        should.throw(ickyErrFn, ReferenceError);
    }, /^(expected \[Function\] to throw 'ReferenceError' but)(.*)(PoorlyConstructedError|\{ Object \()(.*)(was thrown)$/);

    err(() => {
        expect(specificErrFn).to.throw(new ReferenceError('eek'));
        specificErrFn.should.throw(new ReferenceError('eek'));
        should.throw(specificErrFn, new ReferenceError('eek'));
    }, 'expected [Function] to throw [ReferenceError: eek] but [RangeError: boo] was thrown');

    err(() => {
        expect(specificErrFn).to.not.throw(specificError);
        specificErrFn.should.not.throw(specificError);
        should.not.throw(specificErrFn, specificError);
    }, 'expected [Function] to not throw [RangeError: boo]');

    err(() => {
        expect(badFn).to.not.throw(/testing/);
        badFn.should.not.throw(/testing/);
        should.not.throw(badFn, /testing/);
    }, 'expected [Function] to throw error not matching /testing/');

    err(() => {
        expect(badFn).to.throw(/hello/);
        badFn.should.throw(/hello/);
        should.throw(badFn, /hello/);
    }, 'expected [Function] to throw error matching /hello/ but got \'testing\'');

    err(() => {
        expect(badFn).to.throw(Error, /hello/, 'blah');
        badFn.should.throw(Error, /hello/, 'blah');
        should.throw(badFn, Error, /hello/, 'blah');
    }, 'blah: expected [Function] to throw error matching /hello/ but got \'testing\'');

    err(() => {
        expect(badFn).to.throw(Error, 'hello', 'blah');
        badFn.should.throw(Error, 'hello', 'blah');
        should.throw(badFn, Error, 'hello', 'blah');
    }, 'blah: expected [Function] to throw error including \'hello\' but got \'testing\'');
}

function use(){
    // ReSharper disable once InconsistentNaming
    chai.use((_chai) => {
      _chai.can.use.any();
    });
}

function respondTo() {
    var bar = {};

    expect(Foo).to.respondTo('bar');
    Foo.should.respondTo('bar');
    expect(Foo).to.not.respondTo('foo');
    Foo.should.not.respondTo('foo');
    expect(Foo).itself.to.respondTo('func');
    expect(Foo).itself.not.to.respondTo('bar');

    expect(bar).to.respondTo('foo');
    bar.should.respondTo('foo');

    err(() => {
        expect(Foo).to.respondTo('baz', 'constructor');
        Foo.should.respondTo('baz', 'constructor');
    }, /^(constructor: expected)(.*)(\[Function: Foo\])(.*)(to respond to \'baz\')$/);

    err(() => {
        expect(bar).to.respondTo('baz', 'object');
        bar.should.respondTo('baz', 'object');
    }, /^(object: expected)(.*)(\{ foo: \[Function\] \}|\{ Object \()(.*)(to respond to \'baz\')$/);
}

function satisfy() {
    function matcher(num: number) {
        return num === 1;
    }

    expect(1).to.satisfy(matcher);
    (1).should.satisfy(matcher);

    err(() => {
        expect(2).to.satisfy(matcher, 'blah');
        (2).should.satisfy(matcher, 'blah');
    }, 'blah: expected 2 to satisfy [Function: matcher]');
}

function closeTo() {
    expect(1.5).to.be.closeTo(1.0, 0.5);
    (1.5).should.be.closeTo(1.0, 0.5);
    expect(10).to.be.closeTo(20, 20);
    (10).should.be.closeTo(20, 20);
    expect(-10).to.be.closeTo(20, 30);
    (-10).should.be.closeTo(20, 30);

    err(() => {
        expect(2).to.be.closeTo(1.0, 0.5, 'blah');
        (2).should.be.closeTo(1.0, 0.5, 'blah');
    }, 'blah: expected 2 to be close to 1 +/- 0.5');

    err(() => {
        expect(-10).to.be.closeTo(20, 29, 'blah');
        (-10).should.be.closeTo(20, 29, 'blah');
    }, 'blah: expected -10 to be close to 20 +/- 29');
}

function includeMembers() {
    expect([1, 2, 3]).to.include.members([]);
    [1, 2, 3].should.include.members([]);

    expect([1, 2, 3]).to.include.members([3, 2]);

    [1, 2, 3].should.include.members([3, 2]);

    expect([1, 2, 3]).to.not.include.members([8, 4]);

    [1, 2, 3].should.not.include.members([8, 4]);

    expect([1, 2, 3]).to.not.include.members([1, 2, 3, 4]);

    [1, 2, 3].should.not.include.members([1, 2, 3, 4]);
}

function sameMembers() {
    expect([5, 4]).to.have.same.members([4, 5]);
    [5, 4].should.have.same.members([4, 5]);
    expect([5, 4]).to.have.same.members([5, 4]);
    [5, 4].should.have.same.members([5, 4]);

    expect([5, 4]).to.not.have.same.members([]);
    [5, 4].should.not.have.same.members([]);
    expect([5, 4]).to.not.have.same.members([6, 3]);
    [5, 4].should.not.have.same.members([6, 3]);
    expect([5, 4]).to.not.have.same.members([5, 4, 2]);
    [5, 4].should.not.have.same.members([5, 4, 2]);
}

function members() {
    expect([5, 4]).members([4, 5]);
    expect([5, 4]).members([5, 4]);

    expect([5, 4]).not.members([]);
    expect([5, 4]).not.members([6, 3]);
    expect([5, 4]).not.members([5, 4, 2]);
}

//tdd
declare function suite(description: string, action: Function):void;
declare function test(description: string, action: Function):void;

interface FieldObj {
    field: any;
}

class CrashyObject {
    inspect (): void {
        throw new Error('Arg\'s inspect() called even though the test passed');
    }
}

suite('assert', () => {

    test('assert', () => {
        var foo = 'bar';
        assert(foo === 'bar', 'expected foo to equal `bar`');

        err(() => {
            assert(foo === 'baz', 'expected foo to equal `bar`');
        }, 'expected foo to equal `bar`');
    });

    test('isTrue', () => {
        assert.isTrue(true);

        err(() => {
            assert.isTrue(false);
        }, 'expected false to be true');

        err(() => {
            assert.isTrue(1);
        }, 'expected 1 to be true');

        err(() => {
            assert.isTrue('test');
        }, 'expected \'test\' to be true');
    });

    test('ok', () => {
        assert.ok(true);
        assert.ok(1);
        assert.ok('test');

        err(() => {
            assert.ok(false);
        }, 'expected false to be truthy');

        err(() => {
            assert.ok(0);
        }, 'expected 0 to be truthy');

        err(() => {
            assert.ok('');
        }, 'expected \'\' to be truthy');
    });

    test('isFalse', () => {
        assert.isFalse(false);

        err(() => {
            assert.isFalse(true);
        }, 'expected true to be false');

        err(() => {
            assert.isFalse(0);
        }, 'expected 0 to be false');
    });

    test('equal', () => {
        assert.equal(void(0), undefined);
    });

    test('typeof / notTypeOf', () => {
        assert.typeOf('test', 'string');
        assert.typeOf(true, 'boolean');
        assert.typeOf(5, 'number');

        err(() => {
            assert.typeOf(5, 'string');
        }, 'expected 5 to be a string');

    });

    test('notTypeOf', () => {
        assert.notTypeOf('test', 'number');

        err(() => {
            assert.notTypeOf(5, 'number');
        }, 'expected 5 not to be a number');
    });

    test('instanceOf', () => {
        assert.instanceOf(new Foo(), Foo);

        err(() => {
            assert.instanceOf(5, Foo);
        }, 'expected 5 to be an instance of Foo');
        assert.instanceOf(new CrashyObject(), CrashyObject);
    });

    test('notInstanceOf', () => {
        assert.notInstanceOf(new Foo(), String);

        err(() => {
            assert.notInstanceOf(new Foo(), Foo);
        }, 'expected {} to not be an instance of Foo');
    });

    test('isObject', () => {
        assert.isObject({});
        assert.isObject(new Foo());

        err(() => {
            assert.isObject(true);
        }, 'expected true to be an object');

        err(() => {
            assert.isObject(Foo);
        }, 'expected [Function: Foo] to be an object');

        err(() => {
            assert.isObject('foo');
        }, 'expected \'foo\' to be an object');
    });

    test('isNotObject', () => {
        assert.isNotObject(5);

        err(() => {
            assert.isNotObject({});
        }, 'expected {} not to be an object');
    });

    test('notEqual', () => {
        assert.notEqual(3, 4);

        err(() => {
            assert.notEqual(5, 5);
        }, 'expected 5 to not equal 5');
    });

    test('strictEqual', () => {
        assert.strictEqual('foo', 'foo');

        err(() => {
            assert.strictEqual('5', 5);
        }, 'expected \'5\' to equal 5');
    });

    test('notStrictEqual', () => {
        assert.notStrictEqual(5, '5');

        err(() => {
            assert.notStrictEqual(5, 5);
        }, 'expected 5 to not equal 5');
    });

    test('deepEqual', () => {
        assert.deepEqual({tea: 'chai'}, {tea: 'chai'});

        err(() => {
            assert.deepEqual({tea: 'chai'}, {tea: 'black'});
        }, 'expected { tea: \'chai\' } to deeply equal { tea: \'black\' }');

        var obja = Object.create({ tea: 'chai' })
        , objb = Object.create({ tea: 'chai' });

        assert.deepEqual(obja, objb);

        var obj1 = Object.create({tea: 'chai'})
        , obj2 = Object.create({tea: 'black'});

        err(() => {
            assert.deepEqual(obj1, obj2);
        }, 'expected { tea: \'chai\' } to deeply equal { tea: \'black\' }');
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
        }, 'expected { field: [Circular] } to deeply equal { Object (field, field2) }');
    });

    test('notDeepEqual', () => {
        assert.notDeepEqual({tea: 'jasmine'}, {tea: 'chai'});
        err(() => {
            assert.notDeepEqual({tea: 'chai'}, {tea: 'chai'});
        }, 'expected { tea: \'chai\' } to not deeply equal { tea: \'chai\' }');
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
        }, 'expected { field: [Circular] } to not deeply equal { field: [Circular] }');
    });

    test('isNull', () => {
        assert.isNull(null);

        err(() => {
            assert.isNull(undefined);
        }, 'expected undefined to equal null');
    });

    test('isNotNull', () => {
        assert.isNotNull(undefined);

        err(() => {
            assert.isNotNull(null);
        }, 'expected null to not equal null');
    });

    test('isUndefined', () => {
        assert.isUndefined(undefined);

        err(() => {
            assert.isUndefined(null);
        }, 'expected null to equal undefined');
    });

    test('isDefined', () => {
        assert.isDefined(null);

        err(() => {
            assert.isDefined(undefined);
        }, 'expected undefined to not equal undefined');
    });

    test('isFunction', () => {
        var func = () => {
        };
        assert.isFunction(func);

        err(() => {
            assert.isFunction({});
        }, 'expected {} to be a function');
    });

    test('isNotFunction', () => {
        assert.isNotFunction(5);

        err(() => {
            assert.isNotFunction(() => {
            });
        }, 'expected [Function] not to be a function');
    });

    test('isArray', () => {
        assert.isArray([]);
        assert.isArray(new Array<any>());

        err(() => {
            assert.isArray({});
        }, 'expected {} to be an array');
    });

    test('isNotArray', () => {
        assert.isNotArray(3);

        err(() => {
            assert.isNotArray([]);
        }, 'expected [] not to be an array');

        err(() => {
            assert.isNotArray(new Array<any>());
        }, 'expected [] not to be an array');
    });

    test('isString', () => {
        assert.isString('Foo');
        assert.isString(new String('foo'));

        err(() => {
            assert.isString(1);
        }, 'expected 1 to be a string');
    });

    test('isNotString', () => {
        assert.isNotString(3);
        assert.isNotString([ 'hello' ]);

        err(() => {
            assert.isNotString('hello');
        }, 'expected \'hello\' not to be a string');
    });

    test('isNumber', () => {
        assert.isNumber(1);
        assert.isNumber(Number('3'));

        err(() => {
            assert.isNumber('1');
        }, 'expected \'1\' to be a number');
    });

    test('isNotNumber', () => {
        assert.isNotNumber('hello');
        assert.isNotNumber([ 5 ]);

        err(() => {
            assert.isNotNumber(4);
        }, 'expected 4 not to be a number');
    });

    test('isBoolean', () => {
        assert.isBoolean(true);
        assert.isBoolean(false);

        err(() => {
            assert.isBoolean('1');
        }, 'expected \'1\' to be a boolean');
    });

    test('isNotBoolean', () => {
        assert.isNotBoolean('true');

        err(() => {
            assert.isNotBoolean(true);
        }, 'expected true not to be a boolean');

        err(() => {
            assert.isNotBoolean(false);
        }, 'expected false not to be a boolean');
    });

    test('include', () => {
        assert.include('foobar', 'bar');
        assert.include([ 1, 2, 3], 3);

        err(() => {
            assert.include('foobar', 'baz');
        }, 'expected \'foobar\' to contain \'baz\'');

        err(() => {
            assert.include(undefined, 'bar');
        }, 'expected an array or string');
    });

    test('notInclude', () => {
        assert.notInclude('foobar', 'baz');
        assert.notInclude([ 1, 2, 3 ], 4);

        err(() => {
            assert.notInclude('foobar', 'bar');
        }, 'expected \'foobar\' to not contain \'bar\'');

        err(() => {
            assert.notInclude(undefined, 'bar');
        }, 'expected an array or string');
    });

    test('lengthOf', () => {
        assert.lengthOf([1, 2, 3], 3);
        assert.lengthOf('foobar', 6);

        err(() => {
            assert.lengthOf('foobar', 5);
        }, 'expected \'foobar\' to have a length of 5 but got 6');

        err(() => {
            assert.lengthOf(1, 5);
        }, 'expected 1 to have a property \'length\'');
    });

    test('match', () => {
        assert.match('foobar', /^foo/);
        assert.notMatch('foobar', /^bar/);

        err(() => {
            assert.match('foobar', /^bar/i);
        }, 'expected \'foobar\' to match /^bar/i');

        err(() => {
            assert.notMatch('foobar', /^foo/i);
        }, 'expected \'foobar\' not to match /^foo/i');
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
        }, 'expected { foo: { bar: \'baz\' } } to have a property \'baz\'');

        err(() => {
            assert.deepProperty(obj, 'foo.baz');
        }, 'expected { foo: { bar: \'baz\' } } to have a deep property \'foo.baz\'');

        err(() => {
            assert.notProperty(obj, 'foo');
        }, 'expected { foo: { bar: \'baz\' } } to not have property \'foo\'');

        err(() => {
            assert.notDeepProperty(obj, 'foo.bar');
        }, 'expected { foo: { bar: \'baz\' } } to not have deep property \'foo.bar\'');

        err(() => {
            assert.propertyVal(simpleObj, 'foo', 'ball');
        }, 'expected { foo: \'bar\' } to have a property \'foo\' of \'ball\', but got \'bar\'');

        err(() => {
            assert.deepPropertyVal(obj, 'foo.bar', 'ball');
        }, 'expected { foo: { bar: \'baz\' } } to have a deep property \'foo.bar\' of \'ball\', but got \'baz\'');

        err(() => {
            assert.propertyNotVal(simpleObj, 'foo', 'bar');
        }, 'expected { foo: \'bar\' } to not have a property \'foo\' of \'bar\'');

        err(() => {
            assert.deepPropertyNotVal(obj, 'foo.bar', 'baz');
        }, 'expected { foo: { bar: \'baz\' } } to not have a deep property \'foo.bar\' of \'baz\'');
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
        }, 'expected [Function] to throw \'TypeError\' but [Error: foo] was thrown');

        err(() => {
            assert.throws(() => {
                throw new Error('foo');
            }, 'bar');
        }, 'expected [Function] to throw error including \'bar\' but got \'foo\'');

        err(() => {
            assert.throws(() => {
                throw new Error('foo');
            }, Error, 'bar');
        }, 'expected [Function] to throw error including \'bar\' but got \'foo\'');

        err(() => {
            assert.throws(() => {
                throw new Error('foo');
            }, TypeError, 'bar');
        }, 'expected [Function] to throw \'TypeError\' but [Error: foo] was thrown');

        err(() => {
            assert.throws(() => {
            });
        }, 'expected [Function] to throw an error');

        err(() => {
            assert.throws(() => {
                throw new Error('');
            }, 'bar');
        }, 'expected [Function] to throw error including \'bar\' but got \'\'');

        err(() => {
            assert.throws(() => {
                throw new Error('');
            }, /bar/);
        }, 'expected [Function] to throw error matching /bar/ but got \'\'');
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
        }, 'expected \'foo\' to be falsy');
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
        }, 'expected 2 to be < 1');

        err(() => {
            assert.operator(1, '>', 2);
        }, 'expected 1 to be > 2');

        err(() => {
            assert.operator(1, '==', 2);
        }, 'expected 1 to be == 2');

        err(() => {
            assert.operator(2, '<=', 1);
        }, 'expected 2 to be <= 1');

        err(() => {
            assert.operator(1, '>=', 2);
        }, 'expected 1 to be >= 2');

        err(() => {
            assert.operator(1, '!=', 1);
        }, 'expected 1 to be != 1');

        err(() => {
            assert.operator(1, '!==', '1');
        }, 'expected 1 to be !== \'1\'');
    });

    test('closeTo', () => {
        assert.closeTo(1.5, 1.0, 0.5);
        assert.closeTo(10, 20, 20);
        assert.closeTo(-10, 20, 30);

        err(() => {
            assert.closeTo(2, 1.0, 0.5);
        }, 'expected 2 to be close to 1 +/- 0.5');

        err(() => {
            assert.closeTo(-10, 20, 29);
        }, 'expected -10 to be close to 20 +/- 29');
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
