const callback = sinon.spy();
const obj = { };

callback.should.be.alwaysCalledOn(obj);
callback.should.be.alwaysCalledWith(1, 2, 3);
callback.should.have.callCount(0);
callback.should.be.called();
callback.should.be.calledOn(obj);
callback.should.be.calledOnce();
callback.should.be.calledThrice();
callback.should.be.calledTwice();
callback.should.be.calledWith(1, 2, 3);
callback.should.be.neverCalledWith(1, 2, 3);

callback.firstCall.should.be.alwaysCalledOn(obj);
callback.firstCall.should.be.alwaysCalledWith(1, 2, 3);
callback.firstCall.should.have.callCount(0);
callback.firstCall.should.be.called();
callback.firstCall.should.be.calledOn(obj);
callback.firstCall.should.be.calledOnce();
callback.firstCall.should.be.calledThrice();
callback.firstCall.should.be.calledTwice();
callback.firstCall.should.be.calledWith(1, 2, 3);
callback.firstCall.should.be.neverCalledWith(1, 2, 3);
