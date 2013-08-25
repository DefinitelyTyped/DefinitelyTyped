/// <reference path="../chai/chai.d.ts" />
/// <reference path="sinon-chai.d.ts" />

declare var expect: chai.ExpectStatic;

function test() {
    var spy: Function;
    var anotherSpy: Function;
    var context;
    var match;

    expect(spy).to.have.been.called;
    expect(spy).to.have.been.calledOnce;
    expect(spy).to.have.been.calledTwice;
    expect(spy).to.have.been.calledThrice;
    expect(spy).to.have.been.calledBefore(anotherSpy);
    expect(spy).to.have.been.calledAfter(anotherSpy);
    expect(spy).to.have.been.calledWithNew;
    expect(spy).to.have.been.alwaysCalledWithNew;
    expect(spy).to.have.been.calledOn(context);
    expect(spy).to.have.been.alwaysCalledOn(context);
    expect(spy).to.have.been.calledWith('foo', 'bar');
    expect(spy).to.have.been.alwaysCalledWith('foo', 'bar');
    expect(spy).to.have.been.calledWithExactly('foo', 'bar');
    expect(spy).to.have.been.alwaysCalledWithExactly('foo', 'bar');
    expect(spy).to.have.been.calledWithMatch(match);
    expect(spy).to.have.been.alwaysCalledWithMatch(match);
    expect(spy).to.have.returned(1);
    expect(spy).to.have.alwaysReturned(1);
    expect(spy).threw('an error');
    expect(spy).alwaysThrew('an error');
}
