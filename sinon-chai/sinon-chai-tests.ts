/// <reference path="../chai/chai.d.ts" />
/// <reference path="sinon-chai.d.ts" />

declare var expect: chai.ExpectStatic;

import chai = require('chai');
import sinonChai = require('sinon-chai');

chai.use(sinonChai);

function test() {
    var spy: Function;
    var anotherSpy: Function;
    var context: any;
    var match: any;
    
    expect(spy).to.have.been.called;
    expect(spy).to.have.been.calledOnce;
    expect(spy).to.have.been.calledTwice;
    expect(spy).to.have.been.calledThrice;
    expect(spy).to.have.been.calledBefore(anotherSpy);
    expect(spy).to.have.been.calledAfter(anotherSpy);
    expect(spy).to.have.been.calledWithNew;
    expect(spy).to.always.have.been.calledWithNew;
    expect(spy).to.have.been.calledOn(context);
    expect(spy).to.always.have.been.calledOn(context);
    expect(spy).to.have.been.calledWith('foo', 'bar');
    expect(spy).to.always.have.been.calledWith('foo', 'bar');
    expect(spy).to.have.been.calledWithExactly('foo', 'bar');
    expect(spy).to.always.have.been.calledWithExactly('foo', 'bar');
    expect(spy).to.have.been.calledWithMatch(match);
    expect(spy).to.always.have.been.calledWithMatch(match);
    expect(spy).to.have.returned(1);
    expect(spy).to.have.always.returned(1);
    expect(spy).to.have.thrown('an error');
    expect(spy).to.have.always.thrown('an error');
}
