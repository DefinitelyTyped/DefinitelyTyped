

function test_expect() {
    expect();
    expect(1);
    expect(true);
    expect({});
    expect(0);
}

function test_expect_properties() {
    expect(0).be.an;
    expect(0).have.own;
    expect(0).not.be.an;
    expect(0).not.have.own;
    expect(0).not.include;
    expect(0).not.only.have.own;
    expect(0).not.to.be;
    expect(0).not.to.have.own;
    expect(0).not.to.include;
    expect(0).not.to.only.have.own;
    expect(0).only.have.own;
    expect(0).to.be.an;
    expect(0).to.have.own;
    expect(0).to.include;
    expect(0).to.not.be.an;
    expect(0).to.not.have.own;
    expect(0).to.not.include;
    expect(0).to.not.only.have.own;
    expect(0).to.only.have.own;
    expect(0).be;
}

function test_ok() {
    expect(true).to.be.ok();
}

function test_be() {
    expect(1).to.be(1);
}

function test_equal() {
    expect(1).to.equal(1);
}

function test_eql() {
    expect({ a: 'b' }).to.eql({ a: 'b' });
}

function test_a() {
    // string
    expect(5).to.be.a('number');
    expect([]).to.be.an('array');

    // constructors
    expect(5).to.be.a(Number);
    expect([]).to.be.an(Array);
}

function test_match() {
    expect('1.2.3').to.match(/[0-9]+\.[0-9]+\.[0-9]+/);
}

function test_contain() {
    // string
    expect('hello world').to.contain('world');
    expect('hello world').to.string('world');
    // any
    expect([1, 2]).to.contain(1);
    expect([1, 2]).to.string(1);
}

function test_length() {
    expect([1,2,3]).to.have.length(3);
}

function test_empty() {
    expect([]).to.be.empty();
}

function test_property() {
    expect(window).to.have.property('expect');
    expect(window).to.have.property('expect', expect);
}

function test_key() {
    expect({ a: 'b' }).to.have.key('a');
    expect({ a: 'b' }).to.include.key('a');
    expect({ a: 'b', c: 'd' }).to.only.have.keys('a', 'c');
    expect({ a: 'b', c: 'd' }).to.only.have.keys(['a', 'c']);
    expect({ a: 'b', c: 'd' }).to.not.only.have.key('a');
}

function test_throwException() {
    var fn = () => {};
    expect(fn).to.throwError();
    expect(fn).to.throwException(function (e) {
        expect(e).to.be.a(SyntaxError);
    });
    expect(fn).to.throwException(/matches the exception message/);
    expect(fn).to.not.throwException();
}

function test_withArgs() {
    var fn = () => {};
    expect(fn).withArgs().to.throwException();
    expect(fn).withArgs(true, 1, '').to.throwException();
}

function test_within() {
    expect(1).to.be.within(0, Infinity);
}

function test_greaterThan() {
    expect(5).to.be.greaterThan(3);
    expect(3).to.be.above(0);
}

function test_lessThan() {
    expect(1).to.be.lessThan(3);
    expect(0).to.be.below(3);
}

function test_fail() {
    expect().fail();
    expect().fail('Custom failure message');
}