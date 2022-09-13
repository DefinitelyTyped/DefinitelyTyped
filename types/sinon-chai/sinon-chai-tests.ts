import Sinon = require('sinon');

import chai = require('chai');
import sinonChai = require('sinon-chai');

chai.use(sinonChai);
var expect = chai.expect;
declare var spy: Sinon.SinonSpy;
declare var anotherSpy: Sinon.SinonSpy;
declare var anotherStub: Sinon.SinonStub;
declare var spyCall: Sinon.SinonSpyCall;
declare var anotherSpyCall: Sinon.SinonSpyCall;
declare var context: {};
declare var match: RegExp;

// ReSharper disable WrongExpressionStatement
function test() {
    expect(spy).to.have.been.called;
    expect(spy).to.have.been.calledOnce;
    expect(spy).to.have.been.calledTwice;
    expect(spy).to.have.been.calledThrice;
    expect(spy).to.have.been.calledBefore(anotherSpy);
    expect(spy).to.have.been.calledImmediatelyBefore(anotherSpy);
    expect(spy).to.have.been.calledAfter(anotherSpy);
    expect(spy).to.have.been.calledImmediatelyAfter(anotherSpy);
    expect(spy).to.have.been.calledBefore(anotherStub);
    expect(spy).to.have.been.calledImmediatelyBefore(anotherStub);
    expect(spy).to.have.been.calledAfter(anotherStub);
    expect(spy).to.have.been.calledImmediatelyAfter(anotherStub);
    expect(spy).to.have.been.calledWithNew;
    expect(spy).to.always.have.been.calledWithNew;
    expect(spy).to.have.been.calledOn(context);
    expect(spy).to.always.have.been.calledOn(context);
    expect(spy).to.have.been.calledWith('foo', 'bar');
    expect(spy).to.have.been.calledOnceWith('foo', 'bar');
    expect(spy).to.always.have.been.calledWith('foo', 'bar');
    expect(spy).to.have.been.calledWithExactly('foo', 'bar');
    expect(spy).to.have.been.calledOnceWithExactly('foo', 'bar');
    expect(spy).to.always.have.been.calledWithExactly('foo', 'bar');
    expect(spy).to.have.been.calledWithMatch(match);
    expect(spy).to.always.have.been.calledWithMatch(match);
    expect(spy).to.have.returned(1);
    expect(spy).to.have.always.returned(1);
    expect(spy).to.have.thrown(new Error());
    expect(spy).to.have.thrown(Error);
    expect(spy).to.have.thrown('an error');
    expect(spy).to.have.always.thrown(new Error());
    expect(spy).to.have.always.thrown(Error);
    expect(spy).to.have.always.thrown('an error');
    expect(spyCall).to.have.been.calledBefore(anotherSpyCall);
    expect(spyCall).to.have.been.calledAfter(anotherSpyCall);
}
