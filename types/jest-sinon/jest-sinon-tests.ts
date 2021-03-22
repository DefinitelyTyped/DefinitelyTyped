import * as sinon from 'sinon';

const fn = sinon.spy((arg1: any, arg2: any) => [arg1, arg2]);
const spy = sinon.spy();
const match = sinon.match.number;
const err = new Error();

expect(fn).toHaveBeenAlwaysCalledOn({});
expect(fn).toBeAlwaysCalledOn({});

expect(fn).toHaveBeenAlwaysCalledWith();
expect(fn).toBeAlwaysCalledWith();

expect(fn).toHaveBeenAlwaysCalledWithExactly(1, 2);
expect(fn).toBeAlwaysCalledWithExactly(1, 2);

expect(fn).toHaveBeenAlwaysCalledWithMatch(match);
expect(fn).toBeAlwaysCalledWithMatch(match);

expect(fn).toHaveBeenAlwaysCalledWithNew();
expect(fn).toBeAlwaysCalledWithNew();

expect(fn).toHaveBeenCalled();
expect(fn).toBeCalled();

expect(fn).toHaveBeenCalledAfter(spy);
expect(fn).toBeCalledAfter(spy);

expect(fn).toHaveBeenCalledBefore(spy);
expect(fn).toBeCalledBefore(spy);

expect(fn).toHaveBeenCalledImmediatelyAfter(spy);
expect(fn).toBeCalledImmediatelyAfter(spy);

expect(fn).toHaveBeenCalledImmediatelyBefore(spy);
expect(fn).toBeCalledImmediatelyBefore(spy);

expect(fn).toHaveBeenCalledOn({});
expect(fn).toBeCalledOn({});

expect(fn).toHaveBeenCalledOnce();
expect(fn).toBeCalledOnce();

expect(fn).toHaveBeenCalledOnceWith(1, 2);
expect(fn).toBeCalledOnceWith(1, 2);

expect(fn).toHaveBeenCalledOnceWithExactly(1, 2);
expect(fn).toBeCalledOnceWithExactly(1, 2);

expect(fn).toHaveBeenCalledTwice();
expect(fn).toBeCalledTwice();

expect(fn).toHaveBeenCalledThrice();
expect(fn).toBeCalledThrice();

expect(fn).toHaveBeenCalledWith(1, 2);
expect(fn).toBeCalledWith(1, 2);

expect(fn).toHaveBeenCalledWithExactly(1, 2);
expect(fn).toBeCalledWithExactly(1, 2);

expect(fn).toHaveBeenCalledWithMatch(match);
expect(fn).toBeCalledWithMatch(match);

expect(fn).toHaveBeenCalledWithNew();
expect(fn).toBeCalledWithNew();

expect(fn).toHaveCallCount(1);
expect(fn).toHaveBeenCalledTimes(1);
expect(fn).toBeCalledTimes(1);

expect(fn).toHaveReturnedWith({});
expect(fn).toReturnWith({});
expect(fn).toHaveReturned();
expect(fn).toReturn();
expect(fn).toHaveAlwaysReturnedWith({});
expect(fn).toAlwaysReturnWith({});

expect(fn).toHaveThrown();
expect(fn).toHaveThrown(err);
expect(fn).toThrow();
expect(fn).toThrow(err);
expect(fn).toThrowError();
expect(fn).toThrowError(err);

expect(fn).toHaveAlwaysThrown();
expect(fn).toHaveAlwaysThrown(err);
expect(fn).toHaveAlwaysThrownError();
expect(fn).toHaveAlwaysThrownError(err);
expect(fn).toAlwaysThrow();
expect(fn).toAlwaysThrow(err);
expect(fn).toAlwaysThrowError();
expect(fn).toAlwaysThrowError(err);
