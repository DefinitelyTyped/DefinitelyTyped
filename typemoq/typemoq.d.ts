// Type definitions for typemoq v0.0.6
// Project: https://github.com/florinn/typemoq
// Definitions by: Florin Nitoi <https://github.com/florinn>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module TypeMoq {
    class Cons {
        static IMATCH_ID_VALUE: string;
        static IMATCH_ID_NAME: string;
        static IMATCH_MATCHES_NAME: string;
    }
}


declare module TypeMoq {
    class CurrentInterceptContext<T> {
        call: proxy.IProxyCall<T>;
    }
}


declare module TypeMoq {
    enum GlobalType {
        Class = 0,
        Function = 1,
        Value = 2,
    }
    class GlobalMock<T> implements IGlobalMock<T> {
        mock: Mock<T>;
        private _name;
        private _type;
        container: Object;
        constructor(mock: Mock<T>, _name: string, _type: GlobalType, container: Object);
        static ofInstance<U>(instance: U, name?: string, container?: Object, behavior?: MockBehavior): GlobalMock<U>;
        static ofType<U>(ctor: Ctor<U>, container?: Object, behavior?: MockBehavior): GlobalMock<U>;
        object: T;
        name: string;
        behavior: MockBehavior;
        callBase: boolean;
        type: GlobalType;
        setup<TResult>(expression: IFunc2<T, TResult>): MethodCallReturn<T, TResult>;
        verify<TResult>(expression: IFunc2<T, TResult>, times: Times): void;
        verifyAll(): void;
    }
}


declare module TypeMoq.Api {
    interface ICallback<T, TResult> {
        callback(action: IAction): IReturnsThrows<T, TResult>;
        callback(action: IAction1<T>): IReturnsThrows<T, TResult>;
    }
}


declare module TypeMoq.Api {
    interface IReturns<T, TResult> {
        returns(valueFunction: IFuncN<any, TResult>): IReturnsResult<T>;
        callBase(): IReturnsResult<T>;
    }
    interface IReturnsResult<T> extends IVerifies {
    }
    interface IReturnsThrows<T, TResult> extends IReturns<T, TResult>, IThrows {
    }
}


declare module TypeMoq.Api {
    interface ISetup<T, TResult> extends ICallback<T, TResult>, IReturnsThrows<T, TResult>, IVerifies {
    }
}


declare module TypeMoq.Api {
    interface IThrows {
        throws<T extends error.Exception>(exception: T): IThrowsResult;
    }
    interface IThrowsResult extends IVerifies {
    }
}


declare module TypeMoq.Api {
    interface IUsingResult {
        with(action: IAction): void;
    }
}


declare module TypeMoq.Api {
    interface IVerifies {
        verifiable(failMessage?: string): void;
    }
}


/// <reference path="ICallback.d.ts" />
/// <reference path="IReturns.d.ts" />
/// <reference path="ISetup.d.ts" />
/// <reference path="IThrows.d.ts" />
/// <reference path="IUsing.d.ts" />
/// <reference path="IVerifies.d.ts" />


declare module TypeMoq {
    interface Ctor<T> {
        new (): T;
        prototype: any;
    }
    interface CtorWithArgs<T> {
        new (...ctorArgs: any[]): T;
        prototype: any;
    }
}


declare module TypeMoq {
    interface IAction {
        (): void;
    }
    interface IAction1<T> {
        (x: T): void;
    }
    interface IActionN<T> {
        (...x: T[]): void;
    }
    interface IFunc1<TResult> {
        (): TResult;
    }
    interface IFunc2<T, TResult> {
        (x: T): TResult;
    }
    interface IFuncN<T, TResult> {
        (...x: T[]): TResult;
    }
}


declare module TypeMoq {
    class PropertyRetriever {
        static getOwnEnumerables(obj: any): {
            name: string;
            desc: PropertyDescriptor;
        }[];
        static getOwnNonenumerables(obj: any): {
            name: string;
            desc: PropertyDescriptor;
        }[];
        static getOwnEnumerablesAndNonenumerables(obj: any): {
            name: string;
            desc: PropertyDescriptor;
        }[];
        static getPrototypeEnumerables(obj: any): {
            name: string;
            desc: PropertyDescriptor;
        }[];
        static getPrototypeNonenumerables(obj: any): {
            name: string;
            desc: PropertyDescriptor;
        }[];
        static getPrototypeEnumerablesAndNonenumerables(obj: any): {
            name: string;
            desc: PropertyDescriptor;
        }[];
        static getOwnAndPrototypeEnumerables(obj: any): {
            name: string;
            desc: PropertyDescriptor;
        }[];
        static getOwnAndPrototypeNonenumerables(obj: any): {
            name: string;
            desc: PropertyDescriptor;
        }[];
        static getOwnAndPrototypeEnumerablesAndNonenumerables(obj: any): {
            name: string;
            desc: PropertyDescriptor;
        }[];
        private static _enumerable(obj, prop);
        private static _notEnumerable(obj, prop);
        private static _enumerableAndNotEnumerable(obj, prop);
        private static _getPropertyNames(obj, iterateSelfBool, iteratePrototypeBool, includePropCb);
    }
}


declare module TypeMoq {
    class Utils {
        static getUUID(): string;
        static functionName(fun: any): any;
        static conthunktor<U>(ctor: CtorWithArgs<U>, args: any[]): U;
    }
}


/// <reference path="Ctor.d.ts" />
/// <reference path="Func.d.ts" />
/// <reference path="PropertyRetriever.d.ts" />
/// <reference path="Utils.d.ts" />


declare module TypeMoq.Error {
    class Exception implements Error {
        name: string;
        message: string;
        constructor(name?: string, message?: string);
        toString(): string;
    }
}


declare module TypeMoq.Error {
    enum MockExceptionReason {
        NoSetup = 0,
        MoreThanOneSetupExpression = 1,
        InvalidSetupExpression = 2,
        InvalidMatcher = 3,
        InvalidProxyArgument = 4,
        UnknownGlobalType = 5,
        VerificationFailed = 6,
        MoreThanOneCall = 7,
        MoreThanNCalls = 8,
    }
    class MockException extends Exception {
        reason: MockExceptionReason;
        ctx: any;
        constructor(reason: MockExceptionReason, ctx: any, name?: string, message?: string);
    }
}


/// <reference path="Exception.d.ts" />
/// <reference path="MockException.d.ts" />


declare module TypeMoq.Match {
    interface IMatch {
        ___id: string;
        ___matches(object: Object): boolean;
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq.Match {
    class MatchAnyObject<T> implements IMatch {
        private _ctor;
        ___id: string;
        constructor(_ctor: Ctor<T>);
        ___matches(object: Object): boolean;
    }
    class MatchAny implements IMatch {
        ___id: string;
        ___matches(object: Object): boolean;
    }
    class MatchAnyString implements IMatch {
        ___id: string;
        ___matches(object: Object): boolean;
    }
    class MatchAnyNumber implements IMatch {
        ___id: string;
        ___matches(object: Object): boolean;
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq.Match {
    class MatchValue<T> implements IMatch {
        private _value;
        ___id: string;
        constructor(_value: T);
        ___matches(object: any): boolean;
    }
}


/// <reference path="IMatch.d.ts" />
/// <reference path="MatchAny.d.ts" />
/// <reference path="MatchValue.d.ts" />


/// <reference path="_all.d.ts" />
declare module TypeMoq.Proxy {
    interface ICallContext {
        args: IArguments;
        property: IPropertyInfo;
        returnValue: any;
        invokeBase(): void;
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq.Proxy {
    interface ICallInterceptor {
        intercept(context: ICallContext): void;
    }
}


declare module TypeMoq.Proxy {
    class MethodInvocation implements ICallContext {
        private _property;
        private _args;
        returnValue: any;
        constructor(_property: MethodInfo, _args?: IArguments);
        args: IArguments;
        property: PropertyInfo;
        invokeBase(): void;
    }
    class GetterInvocation implements ICallContext {
        private _property;
        returnValue: any;
        constructor(_property: PropertyInfo, value: any);
        args: IArguments;
        property: PropertyInfo;
        invokeBase(): void;
    }
    class SetterInvocation implements ICallContext {
        private _property;
        private _args;
        returnValue: any;
        constructor(_property: PropertyInfo, _args: IArguments);
        args: IArguments;
        property: PropertyInfo;
        invokeBase(): void;
    }
    class MethodInfo implements IPropertyInfo {
        obj: Object;
        name: string;
        constructor(obj: Object, name: string);
        toFunc: Function;
    }
    class PropertyInfo implements IPropertyInfo {
        obj: Object;
        name: string;
        constructor(obj: Object, name: string);
    }
    interface IPropertyInfo {
        obj: Object;
        name: string;
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq.Proxy {
    interface IProxyCall<T> {
        id: string;
        callCount: number;
        failMessage: string;
        isInvoked: boolean;
        isVerifiable: boolean;
        setupExpression: IAction1<T>;
        setupCall: proxy.ICallContext;
        evaluatedSuccessfully(): void;
        matches(call: proxy.ICallContext): boolean;
        execute(call: proxy.ICallContext): void;
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq.Proxy {
    interface IProxyFactory {
        createProxy<T>(interceptor: ICallInterceptor, instance: T): T;
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq.Proxy {
    class Proxy<T> {
        constructor(interceptor: ICallInterceptor, instance: T);
        static of<U>(instance: U, interceptor: ICallInterceptor): any;
        private static check<U>(instance);
        private check<U>(instance);
        private static checkNotNull<U>(instance);
        private static isPrimitiveObject(obj);
        private defineMethodProxy(that, interceptor, instance, propName, propDesc?);
        private static methodProxyValue<U>(interceptor, instance, propName);
        private definePropertyProxy(that, interceptor, instance, propName, propValue, propDesc?);
        private defineProperty(obj, name, desc);
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq.Proxy {
    class ProxyFactory implements IProxyFactory {
        createProxy<T>(interceptor: ICallInterceptor, instance: T): T;
    }
}


/// <reference path="ICallContext.d.ts" />
/// <reference path="ICallInterceptor.d.ts" />
/// <reference path="Invocation.d.ts" />
/// <reference path="IProxyCall.d.ts" />
/// <reference path="IProxyFactory.d.ts" />
/// <reference path="Proxy.d.ts" />
/// <reference path="ProxyFactory.d.ts" />


declare module TypeMoq {
    interface IGlobalMock<T> extends IMock<T> {
        mock: Mock<T>;
        type: GlobalType;
        container: Object;
    }
}


declare module TypeMoq {
    interface IMock<T> {
        object: T;
        name: string;
        behavior: MockBehavior;
        callBase: boolean;
        setup<TResult>(expression: IFunc2<T, TResult>): MethodCallReturn<T, TResult>;
        verify<TResult>(expression: IFunc2<T, TResult>, times: Times): void;
        verifyAll(): void;
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq {
    enum InterceptionAction {
        Continue = 0,
        Stop = 1,
    }
    interface IInterceptStrategy<T> {
        handleIntercept(invocation: proxy.ICallContext, ctx: InterceptorContext<T>, localCtx: CurrentInterceptContext<T>): InterceptionAction;
    }
    class InterceptorContext<T> {
        behavior: MockBehavior;
        mock: IMock<T>;
        private _actualInvocations;
        private _orderedCalls;
        constructor(behavior: MockBehavior, mock: IMock<T>);
        addInvocation(invocation: proxy.ICallContext): void;
        actualInvocations(): proxy.ICallContext[];
        clearInvocations(): void;
        addOrderedCall(call: proxy.IProxyCall<T>): void;
        removeOrderedCall(call: proxy.IProxyCall<T>): void;
        orderedCalls(): proxy.IProxyCall<T>[];
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq {
    class InterceptorExecute<T> implements Proxy.ICallInterceptor {
        private _interceptorContext;
        constructor(behavior: MockBehavior, mock: IMock<T>);
        interceptorContext: InterceptorContext<T>;
        intercept(invocation: proxy.ICallContext): void;
        addCall(call: proxy.IProxyCall<T>): void;
        verifyCall<T, TResult>(call: MethodCall<T, TResult>, times: Times): void;
        verify(): void;
        private interceptionStrategies();
        private throwVerifyCallException(call, times);
        private throwVerifyException(failures, times);
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq {
    class InterceptorSetup<T> implements Proxy.ICallInterceptor {
        private _interceptedCall;
        interceptedCall: proxy.ICallContext;
        intercept(invocation: proxy.ICallContext): void;
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq {
    class AddActualInvocation<T> implements IInterceptStrategy<T> {
        handleIntercept(invocation: proxy.ICallContext, ctx: InterceptorContext<T>, localCtx: CurrentInterceptContext<T>): InterceptionAction;
    }
    class ExtractProxyCall<T> implements IInterceptStrategy<T> {
        handleIntercept(invocation: proxy.ICallContext, ctx: InterceptorContext<T>, localCtx: CurrentInterceptContext<T>): InterceptionAction;
    }
    class ExecuteCall<T> implements IInterceptStrategy<T> {
        private _ctx;
        handleIntercept(invocation: proxy.ICallContext, ctx: InterceptorContext<T>, localCtx: CurrentInterceptContext<T>): InterceptionAction;
    }
    class InvokeBase<T> implements IInterceptStrategy<T> {
        handleIntercept(invocation: proxy.ICallContext, ctx: InterceptorContext<T>, localCtx: CurrentInterceptContext<T>): InterceptionAction;
    }
    class HandleMockRecursion<T> implements IInterceptStrategy<T> {
        handleIntercept(invocation: proxy.ICallContext, ctx: InterceptorContext<T>, localCtx: CurrentInterceptContext<T>): InterceptionAction;
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq {
    class It {
        static isValue<T>(x: T): T;
        static isAnyObject<T>(x: Ctor<T>): T;
        static isAny(): any;
        static isAnyString(): string;
        static isAnyNumber(): number;
    }
}


declare module TypeMoq {
    class MethodCall<T, TResult> implements proxy.IProxyCall<T>, api.IVerifies {
        mock: Mock<T>;
        private _setupExpression;
        protected _id: string;
        protected _callCount: number;
        protected _expectedCallCount: number;
        protected _isOnce: boolean;
        protected _setupCallback: IAction;
        protected _setupCall: proxy.ICallContext;
        protected _thrownException: error.Exception;
        protected _isVerifiable: boolean;
        protected _evaluatedSuccessfully: boolean;
        failMessage: string;
        isInvoked: boolean;
        constructor(mock: Mock<T>, _setupExpression: IFunc2<T, TResult>);
        private generateId();
        private transformToMatchers(args);
        id: string;
        callCount: number;
        setupExpression: IAction1<T>;
        setupCall: proxy.ICallContext;
        isVerifiable: boolean;
        evaluatedSuccessfully(): void;
        matches(call: proxy.ICallContext): boolean;
        execute(call: proxy.ICallContext): void;
        verifiable(failMessage?: string): void;
    }
}


declare module TypeMoq {
    class MethodCallReturn<T, TResult> extends MethodCall<T, TResult> implements api.ISetup<T, TResult>, api.IReturnsResult<T> {
        protected _returnValueFunc: IFuncN<any, TResult>;
        hasReturnValue: boolean;
        protected _callBase: boolean;
        constructor(mock: Mock<T>, setupExpression: IFunc2<T, TResult>);
        execute(call: proxy.ICallContext): void;
        callback(action: IActionN<any>): api.IReturnsThrows<T, TResult>;
        throws(exception: Error): api.IThrowsResult;
        returns(valueFunc: IFuncN<any, TResult>): api.IReturnsResult<T>;
        callBase(): api.IReturnsResult<T>;
    }
}


/// <reference path="_all.d.ts" />
declare module TypeMoq {
    enum MockBehavior {
        Loose = 0,
        Strict = 1,
    }
    class Mock<T> implements IMock<T> {
        instance: T;
        private _behavior;
        static proxyFactory: proxy.IProxyFactory;
        private _id;
        private _name;
        private _interceptor;
        private _proxy;
        private _callBase;
        constructor(instance: T, _behavior?: MockBehavior);
        static ofInstance<U>(instance: U, behavior?: MockBehavior): Mock<U>;
        static ofType<U>(ctor: CtorWithArgs<U>, behavior?: MockBehavior, ...ctorArgs: any[]): Mock<U>;
        static ofType2<U>(ctor: CtorWithArgs<U>, ctorArgs: any[], behavior?: MockBehavior): Mock<U>;
        object: T;
        name: string;
        behavior: MockBehavior;
        callBase: boolean;
        private generateId();
        private getNameOf(instance);
        setup<TResult>(expression: IFunc2<T, TResult>): MethodCallReturn<T, TResult>;
        verify<TResult>(expression: IFunc2<T, TResult>, times: Times): void;
        verifyAll(): void;
    }
}


declare module TypeMoq {
    class Times {
        private _condition;
        private _from;
        private _to;
        private static NO_MATCHING_CALLS_EXACTLY_N_TIMES;
        private static NO_MATCHING_CALLS_AT_LEAST_ONCE;
        private static NO_MATCHING_CALLS_AT_MOST_ONCE;
        private _lastCallCount;
        private _failMessage;
        constructor(_condition: IFunc2<number, boolean>, _from: number, _to: number, failMessage: string);
        failMessage: any;
        verify(callCount: number): boolean;
        static exactly(n: number): Times;
        static never(): Times;
        static once(): Times;
        static atLeastOnce(): Times;
        static atMostOnce(): Times;
    }
}


/// <reference path="../bower_components/DefinitelyTyped/underscore/underscore.d.ts" />
/// <reference path="Api/_all.d.ts" />
/// <reference path="Common/_all.d.ts" />
/// <reference path="Error/_all.d.ts" />
/// <reference path="Match/_all.d.ts" />
/// <reference path="Proxy/_all.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="CurrentInterceptContext.d.ts" />
/// <reference path="GlobalMock.d.ts" />
/// <reference path="GlobalScope.d.ts" />
/// <reference path="IGlobalMock.d.ts" />
/// <reference path="IMock.d.ts" />
/// <reference path="InterceptorContext.d.ts" />
/// <reference path="InterceptorExecute.d.ts" />
/// <reference path="InterceptorSetup.d.ts" />
/// <reference path="InterceptorStrategies.d.ts" />
/// <reference path="It.d.ts" />
/// <reference path="MethodCall.d.ts" />
/// <reference path="MethodCallReturn.d.ts" />
/// <reference path="Mock.d.ts" />
/// <reference path="Times.d.ts" />
import api = TypeMoq.Api;
import error = TypeMoq.Error;
import match = TypeMoq.Match;
import proxy = TypeMoq.Proxy;


/// <reference path="_all.d.ts" />
declare module TypeMoq {
    class GlobalScope implements api.IUsingResult {
        private _args;
        constructor(_args: IGlobalMock<any>[]);
        static using(...args: IGlobalMock<any>[]): api.IUsingResult;
        with(action: IAction): void;
    }
}


/// <reference path="../bower_components/DefinitelyTyped/node/node.d.ts" />


//# sourceMappingURL=output.d.ts.map