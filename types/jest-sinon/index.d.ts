/// <reference types="jest" />
/// <reference types="sinon" />

declare namespace jest {
    interface Matchers<R, T> {
        toHaveBeenAlwaysCalledOn(object: object): R;
        toBeAlwaysCalledOn(object: object): R;

        toHaveBeenAlwaysCalledWith(...args: any[]): R;
        toBeAlwaysCalledWith(...args: any[]): R;

        toHaveBeenAlwaysCalledWithExactly(...args: any[]): R;
        toBeAlwaysCalledWithExactly(...args: any[]): R;

        toHaveBeenAlwaysCalledWithMatch(...args: sinon.SinonMatch[] | any[]): R;
        toBeAlwaysCalledWithMatch(...args: sinon.SinonMatch[] | any[]): R;

        toHaveBeenAlwaysCalledWithNew(): R;
        toBeAlwaysCalledWithNew(): R;

        toHaveBeenCalled(): R;
        toBeCalled(): R;

        toHaveBeenCalledAfter(spy: sinon.SinonSpy): R;
        toBeCalledAfter(spy: sinon.SinonSpy): R;

        toHaveBeenCalledBefore(spy: sinon.SinonSpy): R;
        toBeCalledBefore(spy: sinon.SinonSpy): R;

        toHaveBeenCalledImmediatelyAfter(spy: sinon.SinonSpy): R;
        toBeCalledImmediatelyAfter(spy: sinon.SinonSpy): R;

        toHaveBeenCalledImmediatelyBefore(spy: sinon.SinonSpy): R;
        toBeCalledImmediatelyBefore(spy: sinon.SinonSpy): R;

        toHaveBeenCalledOn(object: object): R;
        toBeCalledOn(object: object): R;

        toHaveBeenCalledOnce(): R;
        toBeCalledOnce(): R;

        toHaveBeenCalledOnceWith(...args: any[]): R;
        toBeCalledOnceWith(...args: any[]): R;

        toHaveBeenCalledOnceWithExactly(...args: any[]): R;
        toBeCalledOnceWithExactly(...args: any[]): R;

        toHaveBeenCalledTwice(): R;
        toBeCalledTwice(): R;

        toHaveBeenCalledThrice(): R;
        toBeCalledThrice(): R;

        toHaveBeenCalledWith(...args: any[]): R;
        toBeCalledWith(...args: any[]): R;

        toHaveBeenCalledWithExactly(...args: any[]): R;
        toBeCalledWithExactly(...args: any[]): R;

        toHaveBeenCalledWithMatch(...args: sinon.SinonMatch[] | any[]): R;
        toBeCalledWithMatch(...args: sinon.SinonMatch[] | any[]): R;

        toHaveBeenCalledWithNew(): R;
        toBeCalledWithNew(): R;

        toHaveCallCount(callCount: number): R;
        toHaveBeenCalledTimes(callCount: number): R;
        toBeCalledTimes(callCount: number): R;

        toHaveReturnedWith(obj: any): R;
        toReturnWith(obj: any): R;
        toHaveReturned(obj: any): R;
        toReturn(obj: any): R;

        toHaveAlwaysReturnedWith(obj: any): R;
        toAlwaysReturnWith(obj: any): R;

        toHaveThrown(error?: any): R;
        toThrow(error?: any): R;
        toThrowError(error?: any): R;

        toHaveAlwaysThrown(error?: any): R;
        toHaveAlwaysThrownError(error?: any): R;
        toAlwaysThrow(error?: any): R;
        toAlwaysThrowError(error?: any): R;
    }
}
