/// <reference path="chai.d.ts" />

var expect = chai.expect;

function test_be() {
    expect(true).to.be.ok;
    expect(true).to.be.true;
    expect(false).to.be.false;
    expect(null).to.be.null;
    expect(undefined).to.be.undefined;
    expect([]).to.be.empty;
    expect([]).to.be.arguments;
    expect({}).to.be.an('object');
    expect({}).to.be.an.instanceof(Object);
    expect(5).to.be.at.least(5);
    expect(5).to.be.at.gte(5);
    expect(5).to.be.at.most(5);
    expect(5).to.be.at.lte(5);
    expect('').to.be.a('string');
    expect(5).to.be.within(1, 6);
    expect(5.001).to.be.closeTo(5, 0.5);
}

function test_not() {
    expect(5).to.not.be.a('string');
}

function test_deep() {
    expect(5).to.deep.equal(5);
    expect({ foo: 'bar' }).to.deep.property('foo', 'bar');
}

function test_have() {
    expect({ foo: 'bar' }).to.have.property('foo', 'bar');
    expect([]).to.have.length(5);
    expect({ foo: 'bar' }).to.have.ownProperty('foo');
    expect('foo-bar').to.have.string('bar');
    expect({ foo: 'bar', baz: 'qux' }).to.have.keys('foo', 'baz');
}

function test_exist() {
    var obj = { foo: 'bar' };
    expect(obj.foo).to.exist;
}

function test_equal() {
    expect(5).to.equal(5);
}

function test_include() {
    expect('foo-bar').to.include('o-b');
    expect([1,2,3]).to.include(2);
    expect({ foo: 'bar', baz: 'qux' }).to.include.keys('foo', 'baz');

    expect('foo-bar').to.contain('o-b');
    expect([1,2,3]).to.contain(2);
    expect({ foo: 'bar', baz: 'qux' }).to.contain.keys('foo', 'baz');
}

function test_throw() {
    var foo = {
        bar: () => { }
    };

    expect(foo.bar).to.throw(new Error);
    expect(foo.bar).to.throw('An error');
    expect(foo.bar).to.throw(/error/);
}

function test_eql() {
    var foo = {}
    expect(foo).to.eql({});
    expect(foo).to.eqls({});
}

function test_match() {
    expect('foo-bar').to.match(/foo/);
}

function test_respondTo() {
    var foo = {
        bar: () => { }
    };

    expect(foo).to.respondTo('bar');
}

function test_satisfy() {
    expect(1).to.satisfy((n) => n > 0);
}