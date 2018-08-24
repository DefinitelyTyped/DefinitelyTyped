// Type definitions for Sinon 5.0
// Project: http://sinonjs.org/
// Definitions by: William Sears <https://github.com/mrbigdog2u>
//                 Jonathan Little <https://github.com/rationull>
//                 Lukas Spieß <https://github.com/lumaxis>
//                 Nico Jansen <https://github.com/nicojs>
//                 James Garbutt <https://github.com/43081j>
//                 Josh Goldberg <https://github.com/joshuakgoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// sinon uses DOM dependencies which are absent in browser-less environment like node.js
// to avoid compiler errors this monkey patch is used
// see more details in https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11351
interface Event { } // tslint:disable-line no-empty-interface
interface Document { } // tslint:disable-line no-empty-interface

declare namespace Sinon {
    interface SinonSpyCallApi {
        // Properties
        args: any[];

        // Methods
        /**
         * Returns true if the spy was called at least once with @param obj as this. 
         * calledOn also accepts a matcher spyCall.calledOn(sinon.match(fn)) (see matchers).
         * @param obj 
         */
        calledOn(obj: any): boolean;
        /**
         * Returns true if spy was called at least once with the provided arguments.
         * Can be used for partial matching, Sinon only checks the provided arguments against actual arguments, 
         * so a call that received the provided arguments (in the same spots) and possibly others as well will return true.
         * @param args 
         */
        calledWith(...args: any[]): boolean;
        /**
         * Returns true if spy was called at least once with the provided arguments and no others.
         */
        calledWithExactly(...args: any[]): boolean;
        /**
         * Returns true if spy/stub was called the new operator.
         * Beware that this is inferred based on the value of the this object and the spy function’s prototype, 
         * so it may give false positives if you actively return the right kind of object.
         */
        calledWithNew(): boolean;
        /**
         * Returns true if spy was called at exactly once with the provided arguments.
         * @param args 
         */
        calledOnceWith(...args: any[]): boolean;
        calledOnceWithExactly(...args: any[]): boolean;
        /**
         * Returns true if spy was called with matching arguments (and possibly others).
         * This behaves the same as spy.calledWith(sinon.match(arg1), sinon.match(arg2), ...).
         * @param args 
         */
        calledWithMatch(...args: any[]): boolean;
        notCalledWith(...args: any[]): boolean;
        notCalledWithMatch(...args: any[]): boolean;
        /**
         * Returns true if spy returned the provided value at least once.
         * Uses deep comparison for objects and arrays. Use spy.returned(sinon.match.same(obj)) for strict comparison (see matchers).
         * @param value 
         */
        returned(value: any): boolean;
        /**
         * Returns true if spy threw an exception at least once.
         */
        threw(): boolean;
        /**
         * Returns true if spy threw an exception of the provided type at least once.
         */
        threw(type: string): boolean;
        /**
         * Returns true if spy threw the provided exception object at least once.
         */
        threw(obj: any): boolean;
        /**
         * Like yield, but with an explicit argument number specifying which callback to call.
         * Useful if a function is called with more than one callback, and simply calling the first callback is not desired.
         * @param pos 
         */
        callArg(pos: number): void;
        callArgOn(pos: number, obj: any, ...args: any[]): void;
        /**
         * Like callArg, but with arguments.
         */
        callArgWith(pos: number, ...args: any[]): void;
        callArgOnWith(pos: number, obj: any, ...args: any[]): void;
        /**
         * Invoke callbacks passed to the stub with the given arguments.
         * If the stub was never called with a function argument, yield throws an error.
         * Returns an Array with all callbacks return values in the order they were called, if no error is thrown.
         * Also aliased as invokeCallback.
         */
        yield(...args: any[]): void;
        yieldOn(obj: any, ...args: any[]): void;
        /**
         * Invokes callbacks passed as a property of an object to the stub.
         * Like yield, yieldTo grabs the first matching argument, finds the callback and calls it with the (optional) arguments.
         */
        yieldTo(property: string, ...args: any[]): void;
        yieldToOn(property: string, obj: any, ...args: any[]): void;
    }

    interface SinonSpyCall extends SinonSpyCallApi {
        thisValue: any;
        exception: any;
        returnValue: any;
        callback: Function | undefined;
        lastArg: any;

        calledBefore(call: SinonSpyCall): boolean;
        calledAfter(call: SinonSpyCall): boolean;
    }

    interface SinonSpy extends SinonSpyCallApi {
        // Properties
        /**
         * The number of recorded calls.
         */
        callCount: number;
        /**
         * true if the spy was called at least once
         */
        called: boolean;
        /**
         * true if the spy was not called
         */
        notCalled: boolean;
        /**
         * true if spy was called exactly once
         */
        calledOnce: boolean;
        /**
         * true if the spy was called exactly twice
         */
        calledTwice: boolean;
        /**
         * true if the spy was called exactly thrice
         */
        calledThrice: boolean;
        /**
         * The first call
         */
        firstCall: SinonSpyCall;
        /**
         * The second call
         */
        secondCall: SinonSpyCall;
        /**
         * The third call
         */
        thirdCall: SinonSpyCall;
        /**
         * The last call
         */
        lastCall: SinonSpyCall;
        /**
         * Array of this objects, spy.thisValues[0] is the this object for the first call.
         */
        thisValues: any[];
        /**
         * Array of arguments received, spy.args[0] is an array of arguments received in the first call.
         */
        args: any[][];
        /**
         * Array of exception objects thrown, spy.exceptions[0] is the exception thrown by the first call.
         * If the call did not throw an error, the value at the call’s location in .exceptions will be undefined.
         */
        exceptions: any[];
        /**
         * Array of return values, spy.returnValues[0] is the return value of the first call.
         * If the call did not explicitly return a value, the value at the call’s location in .returnValues will be undefined.
         */
        returnValues: any[];

        // Methods
        (...args: any[]): any;
        /**
         * Returns true if the spy was called before @param anotherSpy
         * @param anotherSpy 
         */
        calledBefore(anotherSpy: SinonSpy): boolean;
        /**
         * Returns true if the spy was called after @param anotherSpy
         * @param anotherSpy 
         */
        calledAfter(anotherSpy: SinonSpy): boolean;
        /**
         * Returns true if spy was called before @param anotherSpy, and no spy calls occurred between spy and @param anotherSpy.
         * @param anotherSpy 
         */
        calledImmediatelyBefore(anotherSpy: SinonSpy): boolean;
        /**
         * Returns true if spy was called after @param anotherSpy, and no spy calls occurred between @param anotherSpy and spy.
         * @param anotherSpy 
         */
        calledImmediatelyAfter(anotherSpy: SinonSpy): boolean;
        /**
         * Creates a spy that only records calls when the received arguments match those passed to withArgs. This is useful to be more expressive in your assertions, where you can access the spy with the same call.
         * @param args Expected args
         */
        withArgs(...args: any[]): SinonSpy;
        /**
         * Returns true if the spy was always called with @param obj as this.
         * @param obj 
         */
        alwaysCalledOn(obj: any): boolean;
        /**
         * Returns true if spy was always called with the provided arguments (and possibly others).
         */
        alwaysCalledWith(...args: any[]): boolean;
        /**
         * Returns true if spy was always called with the exact provided arguments.
         * @param args 
         */
        alwaysCalledWithExactly(...args: any[]): boolean;
        /**
         * Returns true if spy was always called with matching arguments (and possibly others).
         * This behaves the same as spy.alwaysCalledWith(sinon.match(arg1), sinon.match(arg2), ...).
         * @param args 
         */
        alwaysCalledWithMatch(...args: any[]): boolean;
        /**
         * Returns true if the spy/stub was never called with the provided arguments.
         * @param args 
         */
        neverCalledWith(...args: any[]): boolean;
        /**
         * Returns true if the spy/stub was never called with matching arguments.
         * This behaves the same as spy.neverCalledWith(sinon.match(arg1), sinon.match(arg2), ...).
         * @param args 
         */
        neverCalledWithMatch(...args: any[]): boolean;
        /**
         * Returns true if spy always threw an exception.
         */
        alwaysThrew(): boolean;
        /**
         * Returns true if spy always threw an exception of the provided type.
         */
        alwaysThrew(type: string): boolean;
        /**
         * Returns true if spy always threw the provided exception object.
         */
        alwaysThrew(obj: any): boolean;
        /**
         * Returns true if spy always returned the provided value.
         * @param obj 
         */
        alwaysReturned(obj: any): boolean;
        /**
         * Invoke callbacks passed to the stub with the given arguments.
         * If the stub was never called with a function argument, yield throws an error.
         * Returns an Array with all callbacks return values in the order they were called, if no error is thrown.
         */
        invokeCallback(...args: any[]): void;
        /**
         * Returns the nth call.
         * Accessing individual calls helps with more detailed behavior verification when the spy is called more than once.
         * @param n 
         */
        getCall(n: number): SinonSpyCall;
        /**
         * Returns an Array of all calls recorded by the spy.
         */
        getCalls(): SinonSpyCall[];
        /**
         * Resets the state of a spy.
         */
        resetHistory(): void;
        /**
         * Returns the passed format string with the following replacements performed:
         * * %n - the name of the spy "spy" by default)
         * * %c - the number of times the spy was called, in words ("once", "twice", etc.)
         * * %C - a list of string representations of the calls to the spy, with each call prefixed by a newline and four spaces
         * * %t - a comma-delimited list of this values the spy was called on
         * * %n - the formatted value of the nth argument passed to printf
         * * %* - a comma-delimited list of the (non-format string) arguments passed to printf
         * * %D - a multi-line list of the arguments received by all calls to the spy
         * @param format 
         * @param args 
         */
        printf(format: string, ...args: any[]): string;
        /**
         * Replaces the spy with the original method. Only available if the spy replaced an existing method.
         */
        restore(): void;
    }

    interface SinonSpyStatic {
        (): SinonSpy;
        (func: Function): SinonSpy;
        <T>(obj: T, method: keyof T): SinonSpy;
    }

    interface SinonStub extends SinonSpy {
        /**
         * Resets the stub’s behaviour to the default behaviour
         * You can reset behaviour of all stubs using sinon.resetBehavior()
         */
        resetBehavior(): void;
        /**
         * Resets both behaviour and history of the stub.
         * This is equivalent to calling both stub.resetBehavior() and stub.resetHistory()
         * Updated in sinon@2.0.0
         * Since sinon@5.0.0
         * As a convenience, you can apply stub.reset() to all stubs using sinon.reset()
         */
        reset(): void;
        /**
         * Causes the stub to return promises using a specific Promise library instead of the global one when using stub.rejects or stub.resolves. 
         * Returns the stub to allow chaining.
         */
        usingPromise(promiseLibrary: any): SinonStub;

        /**
         * Makes the stub return the provided @param obj value.
         * @param obj 
         */
        returns(obj: any): SinonStub;
        /**
         * Causes the stub to return the argument at the provided @param index.
         * stub.returnsArg(0); causes the stub to return the first argument.
         * If the argument at the provided index is not available, prior to sinon@6.1.2, an undefined value will be returned; 
         * starting from sinon@6.1.2, a TypeError will be thrown.
         * @param index 
         */
        returnsArg(index: number): SinonStub;
        /**
         * Causes the stub to return its this value.
         * Useful for stubbing jQuery-style fluent APIs.
         */
        returnsThis(): SinonStub;
        /**
         * Causes the stub to return a Promise which resolves to the provided value.
         * When constructing the Promise, sinon uses the Promise.resolve method. You are responsible for providing a polyfill in environments which do not provide Promise. The Promise library can be overwritten using the usingPromise method.
         * Since sinon@2.0.0
         */
        resolves(value?: any): SinonStub;
        /**
         * Causes the stub to throw an exception (Error).
         * @param type 
         */
        throws(type?: string): SinonStub;
        /**
         * Causes the stub to throw the provided exception object.
         */
        throws(obj: any): SinonStub;
        /**
         * Causes the stub to throw the argument at the provided index.
         * stub.throwsArg(0); causes the stub to throw the first argument as the exception.
         * If the argument at the provided index is not available, a TypeError will be thrown.
         * Since sinon@2.3.0
         * @param index 
         */
        throwsArg(index: number): SinonStub;
        throwsException(type?: string): SinonStub;
        throwsException(obj: any): SinonStub;
        /**
         * Causes the stub to return a Promise which rejects with an exception (Error).
         * When constructing the Promise, sinon uses the Promise.reject method. You are responsible for providing a polyfill in environments which do not provide Promise. The Promise library can be overwritten using the usingPromise method.
         * Since sinon@2.0.0
         */
        rejects(): SinonStub;
        /**
         * Causes the stub to return a Promise which rejects with an exception of the provided type.
         * Since sinon@2.0.0
         */
        rejects(errorType: string): SinonStub;
        /**
         * Causes the stub to return a Promise which rejects with the provided exception object.
         * Since sinon@2.0.0
         */
        rejects(value: any): SinonStub;
        /**
         * Causes the stub to call the argument at the provided index as a callback function.
         * stub.callsArg(0); causes the stub to call the first argument as a callback.
         * If the argument at the provided index is not available or is not a function, a TypeError will be thrown.
         */
        callsArg(index: number): SinonStub;
        /**
         * Causes the original method wrapped into the stub to be called when none of the conditional stubs are matched.
         */
        callThrough(): SinonStub;
        /**
         * Like stub.callsArg(index); but with an additional parameter to pass the this context.
         * @param index 
         * @param context 
         */
        callsArgOn(index: number, context: any): SinonStub;
        /**
         * Like callsArg, but with arguments to pass to the callback.
         * @param index 
         * @param args 
         */
        callsArgWith(index: number, ...args: any[]): SinonStub;
        /**
         * Like above but with an additional parameter to pass the this context.
         * @param index 
         * @param context 
         * @param args 
         */
        callsArgOnWith(index: number, context: any, ...args: any[]): SinonStub;
        /**
         * Same as their corresponding non-Async counterparts, but with callback being deferred at called after all instructions in the current call stack are processed.
         * In Node environment the callback is deferred with process.nextTick.
         * In a browser the callback is deferred with setTimeout(callback, 0).
         * @param index 
         */
        callsArgAsync(index: number): SinonStub;
        /**
         * Same as their corresponding non-Async counterparts, but with callback being deferred at called after all instructions in the current call stack are processed.
         * In Node environment the callback is deferred with process.nextTick.
         * In a browser the callback is deferred with setTimeout(callback, 0).
         * @param index 
         * @param context 
         */
        callsArgOnAsync(index: number, context: any): SinonStub;
        /**
         * Same as their corresponding non-Async counterparts, but with callback being deferred at called after all instructions in the current call stack are processed.
         * In Node environment the callback is deferred with process.nextTick.
         * In a browser the callback is deferred with setTimeout(callback, 0).
         */
        callsArgWithAsync(index: number, ...args: any[]): SinonStub;
        /**
         * Same as their corresponding non-Async counterparts, but with callback being deferred at called after all instructions in the current call stack are processed.
         * In Node environment the callback is deferred with process.nextTick.
         * In a browser the callback is deferred with setTimeout(callback, 0).
         */
        callsArgOnWithAsync(index: number, context: any, ...args: any[]): SinonStub;
        /**
         * Makes the stub call the provided @param func when invoked.
         * @param func 
         */
        callsFake(func: (...args: any[]) => any): SinonStub;
        /**
         * Replaces a new getter for this stub.
         */
        get(func: () => any): SinonStub;
        /**
         * Defines a new setter for this stub.
         * @param func 
         */
        set(func: (v: any) => void): SinonStub;
        /**
         * Defines the behavior of the stub on the @param n call. Useful for testing sequential interactions.
         * There are methods onFirstCall, onSecondCall,onThirdCall to make stub definitions read more naturally.
         * onCall can be combined with all of the behavior defining methods in this section. In particular, it can be used together with withArgs.
         * @param n 
         */
        onCall(n: number): SinonStub;
        /**
         * Alias for stub.onCall(0);
         */
        onFirstCall(): SinonStub;
        /**
         * Alias for stub.onCall(1);
         */
        onSecondCall(): SinonStub;
        /**
         * Alias for stub.onCall(2);
         */
        onThirdCall(): SinonStub;
        /**
         * Defines a new value for this stub.
         * @param val 
         */
        value(val: any): SinonStub;
        /**
         * Similar to callsArg.
         * Causes the stub to call the first callback it receives with the provided arguments (if any).
         * If a method accepts more than one callback, you need to use callsArg to have the stub invoke other callbacks than the first one.
         */
        yields(...args: any[]): SinonStub;
        /**
         * Like above but with an additional parameter to pass the this context.
         */
        yieldsOn(context: any, ...args: any[]): SinonStub;
        yieldsRight(...args: any[]): SinonStub;
        /**
         * Causes the spy to invoke a callback passed as a property of an object to the spy.
         * Like yields, yieldsTo grabs the first matching argument, finds the callback and calls it with the (optional) arguments.
         * @param property 
         * @param args 
         */
        yieldsTo(property: string, ...args: any[]): SinonStub;
        /**
         * Like above but with an additional parameter to pass the this context.
         */
        yieldsToOn(property: string, context: any, ...args: any[]): SinonStub;
        /**
         * Same as their corresponding non-Async counterparts, but with callback being deferred at called after all instructions in the current call stack are processed.
         * In Node environment the callback is deferred with process.nextTick.
         * In a browser the callback is deferred with setTimeout(callback, 0).
         * @param args 
         */
        yieldsAsync(...args: any[]): SinonStub;
        /**
         * Same as their corresponding non-Async counterparts, but with callback being deferred at called after all instructions in the current call stack are processed.
         * In Node environment the callback is deferred with process.nextTick.
         * In a browser the callback is deferred with setTimeout(callback, 0).
         * @param context 
         * @param args 
         */
        yieldsOnAsync(context: any, ...args: any[]): SinonStub;
        /**
         * Same as their corresponding non-Async counterparts, but with callback being deferred at called after all instructions in the current call stack are processed.
         * In Node environment the callback is deferred with process.nextTick.
         * In a browser the callback is deferred with setTimeout(callback, 0).
         * @param property 
         * @param args 
         */
        yieldsToAsync(property: string, ...args: any[]): SinonStub;
        /**
         * Same as their corresponding non-Async counterparts, but with callback being deferred at called after all instructions in the current call stack are processed.
         * In Node environment the callback is deferred with process.nextTick.
         * In a browser the callback is deferred with setTimeout(callback, 0).
         * @param property 
         * @param context 
         * @param args 
         */
        yieldsToOnAsync(property: string, context: any, ...args: any[]): SinonStub;
        /**
         * Stubs the method only for the provided arguments.
         * This is useful to be more expressive in your assertions, where you can access the spy with the same call. It is also useful to create a stub that can act differently in response to different arguments.
         * @param args 
         */
        withArgs(...args: any[]): SinonStub;
    }

    interface SinonStubStatic {
        /**
         * Creates an anonymous stub function
         */
        (): SinonStub;
        /**
         * Stubs all the object’s methods.
         * Note that it’s usually better practice to stub individual methods, particularly on objects that you don’t understand or control all the methods for (e.g. library dependencies).
         * Stubbing individual methods tests intent more precisely and is less susceptible to unexpected behavior as the object’s code evolves.
         * If you want to create a stub object of MyConstructor, but don’t want the constructor to be invoked, use this utility function.
         */
        <T>(obj: T): SinonStubbedInstance<T>;
        /**
         * Replaces obj.method with a stub function. 
         * An exception is thrown if the property is not already a function.
         * The original function can be restored by calling object.method.restore(); (or stub.restore();).
         */
        <T>(obj: T, method: keyof T): SinonStub;
    }

    interface SinonExpectation extends SinonStub {
        atLeast(n: number): SinonExpectation;
        atMost(n: number): SinonExpectation;
        never(): SinonExpectation;
        once(): SinonExpectation;
        twice(): SinonExpectation;
        thrice(): SinonExpectation;
        exactly(n: number): SinonExpectation;
        withArgs(...args: any[]): SinonExpectation;
        withExactArgs(...args: any[]): SinonExpectation;
        on(obj: any): SinonExpectation;
        verify(): SinonExpectation;
        restore(): void;
    }

    interface SinonExpectationStatic {
        create(methodName?: string): SinonExpectation;
    }

    interface SinonMock {
        expects(method: string): SinonExpectation;
        restore(): void;
        verify(): void;
    }

    interface SinonMockStatic {
        (): SinonExpectation;
        (obj: any): SinonMock;
    }

    type SinonTimerId = number | { id: number };

    interface SinonFakeTimers {
        now: number;

        setTimeout(callback: (...args: any[]) => void, timeout: number, ...args: any[]): SinonTimerId;
        clearTimeout(id: SinonTimerId): void;
        setInterval(callback: (...args: any[]) => void, timeout: number, ...args: any[]): SinonTimerId;
        clearInterval(id: SinonTimerId): void;
        setImmediate(callback: (...args: any[]) => void, ...args: any[]): SinonTimerId;
        clearImmediate(id: SinonTimerId): void;
        requestAnimationFrame(callback: (...args: any[]) => void): number;
        cancelAnimationFrame(id: number): void;
        nextTick(callback: () => void): void;

        tick(ms: number | string): void;
        next(): void;
        runAll(): void;
        runToLast(): void;
        reset(): void;
        runMicrotasks(): void;
        runToFrame(): void;

        Date(): Date;
        Date(year: number): Date;
        Date(year: number, month: number): Date;
        Date(year: number, month: number, day: number): Date;
        Date(year: number, month: number, day: number, hour: number): Date;
        Date(year: number, month: number, day: number, hour: number, minute: number): Date;
        Date(year: number, month: number, day: number, hour: number, minute: number, second: number): Date;
        Date(year: number, month: number, day: number, hour: number, minute: number, second: number, ms: number): Date;

        restore(): void;
        uninstall(): void;

        /**
         * Simulate the user changing the system clock while your program is running. It changes the 'now' timestamp
         * without affecting timers, intervals or immediates.
         * @param now The new 'now' in unix milliseconds
         */
        setSystemTime(now: number): void;
        /**
         * Simulate the user changing the system clock while your program is running. It changes the 'now' timestamp
         * without affecting timers, intervals or immediates.
         * @param now The new 'now' as a JavaScript Date
         */
        setSystemTime(date: Date): void;
    }

    interface SinonFakeTimersConfig {
        now: number | Date;
        toFake: string[];
        shouldAdvanceTime: boolean;
    }

    interface SinonFakeUploadProgress {
        eventListeners: {
            progress: any[];
            load: any[];
            abort: any[];
            error: any[];
        };

        addEventListener(event: string, listener: (e: Event) => any): void;
        removeEventListener(event: string, listener: (e: Event) => any): void;
        dispatchEvent(event: Event): void;
    }

    interface SinonFakeXMLHttpRequest {
        // Properties
        url: string;
        method: string;
        requestHeaders: any;
        requestBody: string;
        status: number;
        statusText: string;
        async: boolean;
        username: string;
        password: string;
        withCredentials: boolean;
        upload: SinonFakeUploadProgress;
        responseXML: Document;
        getResponseHeader(header: string): string;
        getAllResponseHeaders(): any;

        // Methods
        setResponseHeaders(headers: any): void;
        setResponseBody(body: string): void;
        respond(status: number, headers: any, body: string): void;
        autoRespond(ms: number): void;
        error(): void;
        onerror(): void;
    }

    interface SinonFakeXMLHttpRequestStatic {
        new(): SinonFakeXMLHttpRequest;
        useFilters: boolean;
        addFilter(filter: (method: string, url: string, async: boolean, username: string, password: string) => boolean): void;
        onCreate(xhr: SinonFakeXMLHttpRequest): void;
        restore(): void;
    }

    interface SinonFakeServer extends SinonFakeServerOptions {
        // Properties
        getHTTPMethod(request: SinonFakeXMLHttpRequest): string;
        requests: SinonFakeXMLHttpRequest[];

        // Methods
        respondWith(body: string): void;
        respondWith(response: any[]): void;
        respondWith(fn: (xhr: SinonFakeXMLHttpRequest) => void): void;
        respondWith(url: string, body: string): void;
        respondWith(url: string, response: any[]): void;
        respondWith(url: string, fn: (xhr: SinonFakeXMLHttpRequest) => void): void;
        respondWith(method: string, url: string, body: string): void;
        respondWith(method: string, url: string, response: any[]): void;
        respondWith(method: string, url: string, fn: (xhr: SinonFakeXMLHttpRequest) => void): void;
        respondWith(url: RegExp, body: string): void;
        respondWith(url: RegExp, response: any[]): void;
        respondWith(url: RegExp, fn: (xhr: SinonFakeXMLHttpRequest) => void): void;
        respondWith(method: string, url: RegExp, body: string): void;
        respondWith(method: string, url: RegExp, response: any[]): void;
        respondWith(method: string, url: RegExp, fn: (xhr: SinonFakeXMLHttpRequest) => void): void;
        respond(): void;
        restore(): void;
    }

    interface SinonFakeServerOptions {
        autoRespond: boolean;
        autoRespondAfter: number;
        fakeHTTPMethods: boolean;
        respondImmediately: boolean;
    }

    interface SinonFakeServerStatic {
        create(options?: Partial<SinonFakeServerOptions>): SinonFakeServer;
    }

    interface SinonExposeOptions {
        prefix: string;
        includeFail: boolean;
    }

    interface SinonAssert {
        // Properties
        failException: string;
        fail(message?: string): void; // Overridable
        pass(assertion: any): void; // Overridable

        // Methods
        notCalled(spy: SinonSpy): void;
        called(spy: SinonSpy): void;
        calledOnce(spy: SinonSpy): void;
        calledTwice(spy: SinonSpy): void;
        calledThrice(spy: SinonSpy): void;
        callCount(spy: SinonSpy, count: number): void;
        callOrder(...spies: SinonSpy[]): void;
        calledOn(spyOrSpyCall: SinonSpy | SinonSpyCall, obj: any): void;
        alwaysCalledOn(spy: SinonSpy, obj: any): void;
        calledWith(spyOrSpyCall: SinonSpy | SinonSpyCall, ...args: any[]): void;
        alwaysCalledWith(spy: SinonSpy, ...args: any[]): void;
        neverCalledWith(spy: SinonSpy, ...args: any[]): void;
        calledWithExactly(spyOrSpyCall: SinonSpy | SinonSpyCall, ...args: any[]): void;
        alwaysCalledWithExactly(spy: SinonSpy, ...args: any[]): void;
        calledWithMatch(spyOrSpyCall: SinonSpy | SinonSpyCall, ...args: any[]): void;
        alwaysCalledWithMatch(spy: SinonSpy, ...args: any[]): void;
        neverCalledWithMatch(spy: SinonSpy, ...args: any[]): void;
        calledWithNew(spyOrSpyCall: SinonSpy | SinonSpyCall): void;
        threw(spyOrSpyCall: SinonSpy | SinonSpyCall): void;
        threw(spyOrSpyCall: SinonSpy | SinonSpyCall, exception: string): void;
        threw(spyOrSpyCall: SinonSpy | SinonSpyCall, exception: any): void;
        alwaysThrew(spy: SinonSpy): void;
        alwaysThrew(spy: SinonSpy, exception: string): void;
        alwaysThrew(spy: SinonSpy, exception: any): void;
        match(actual: any, expected: any): void;
        expose(obj: any, options?: Partial<SinonExposeOptions>): void;
    }

    interface SinonMatcher {
        and(expr: SinonMatcher): SinonMatcher;
        or(expr: SinonMatcher): SinonMatcher;
        test(val: any): boolean;
    }

    interface SinonArrayMatcher extends SinonMatcher {
        /**
         * Requires an Array to be deep equal another one.
         */
        deepEquals(expected: any[]): SinonMatcher;
        /**
         * Requires an Array to start with the same values as another one.
         */
        startsWith(expected: any[]): SinonMatcher;
        /**
         * Requires an Array to end with the same values as another one.
         */
        endsWith(expected: any[]): SinonMatcher;
        /**
         * Requires an Array to contain each one of the values the given array has.
         */
        contains(expected: any[]): SinonMatcher;
    }

    interface SimplifiedSet {
        has(el: any): boolean;
    }

    interface SimplifiedMap extends SimplifiedSet {
        get(key: any): any;
    }

    interface SinonMapMatcher extends SinonMatcher {
        /**
         * Requires a Map to be deep equal another one.
         */
        deepEquals(expected: SimplifiedMap): SinonMatcher;
        /**
         * Requires a Map to contain each one of the items the given map has.
         */
        contains(expected: SimplifiedMap): SinonMatcher;
    }

    interface SinonSetMatcher extends SinonMatcher {
        /**
         *  Requires a Set to be deep equal another one.
         */
        deepEquals(expected: SimplifiedSet): SinonMatcher;
        /**
         * Requires a Set to contain each one of the items the given set has.
         */
        contains(expected: SimplifiedSet): SinonMatcher;
    }

    interface SinonMatch {
        (value: number): SinonMatcher;
        (value: string): SinonMatcher;
        (expr: RegExp): SinonMatcher;
        (callback: (value: any) => boolean, message?: string): SinonMatcher;
        (obj: object): SinonMatcher;
        any: SinonMatcher;
        defined: SinonMatcher;
        truthy: SinonMatcher;
        falsy: SinonMatcher;
        bool: SinonMatcher;
        number: SinonMatcher;
        string: SinonMatcher;
        object: SinonMatcher;
        func: SinonMatcher;
        /**
         * Requires the value to be a Map.
         */
        map: SinonMapMatcher;
        /**
         * Requires the value to be a Set.
         */
        set: SinonSetMatcher;
        /**
         * Requires the value to be an Array.
         */
        array: SinonArrayMatcher;
        regexp: SinonMatcher;
        date: SinonMatcher;
        symbol: SinonMatcher;
        same(obj: any): SinonMatcher;
        typeOf(type: string): SinonMatcher;
        instanceOf(type: any): SinonMatcher;
        has(property: string, expect?: any): SinonMatcher;
        hasOwn(property: string, expect?: any): SinonMatcher;
        hasNested(path: string, expect?: any): SinonMatcher;
        every(matcher: SinonMatcher): SinonMatcher;
        some(matcher: SinonMatcher): SinonMatcher;
    }

    interface SinonSandboxConfig {
        injectInto: object | null;
        properties: string[];
        useFakeTimers: boolean | Partial<SinonFakeTimersConfig>;
        useFakeServer: boolean | SinonFakeServer;
    }

    /**
     * Stubbed type of an object with members replaced by stubs.
     *
     * @template TType Type being stubbed.
     */
    interface StubbableType<TType> {
        new(...args: any[]): TType;
    }

    /**
     * An instance of a stubbed object type with functions replaced by stubs.
     *
     * @template TType Object type being stubbed.
     */
    type SinonStubbedInstance<TType> = {
        [P in keyof TType]: SinonStubbedMember<TType[P]>;
    };

    /**
     * Replaces a type with a Sinon stub if it's a function.
     */
    type SinonStubbedMember<T> = T extends Function ? SinonStub : T;

    interface SinonFake {
        /**
         * Creates a basic fake, with no behavior
         */
        (): SinonSpy;
        /**
         * Wraps an existing Function to record all interactions, while leaving it up to the func to provide the behavior.
         * This is useful when complex behavior not covered by the sinon.fake.* methods is required or when wrapping an existing function or method.
         */
        (fn: Function): SinonSpy;
        /**
         * Creates a fake that returns the val argument
         * @param val Returned value
         */
        returns(val: any): SinonSpy;
        /**
         * Creates a fake that throws an Error with the provided value as the message property.
         * If an Error is passed as the val argument, then that will be the thrown value. If any other value is passed, then that will be used for the message property of the thrown Error.
         * @param val Returned value or throw value if an Error
         */
        throws(val: Error | string): SinonSpy;
        /**
         * Creates a fake that returns a resolved Promise for the passed value.
         * @param val Resolved promise 
         */
        resolves(val: any): SinonSpy;
        /**
         * Creates a fake that returns a rejected Promise for the passed value.
         * If an Error is passed as the value argument, then that will be the value of the promise. If any other value is passed, then that will be used for the message property of the Error returned by the promise.
         * @param val Rejected promise
         */
        rejects(val: any): SinonSpy;
        /**
         * fake expects the last argument to be a callback and will invoke it with the given arguments.
         */
        yields(...args: any[]): SinonSpy;
        /**
         * fake expects the last argument to be a callback and will invoke it asynchronously with the given arguments.
         */
        yieldsAsync(...args: any[]): SinonSpy;
    }

    interface SinonSandbox {
        assert: SinonAssert;
        clock: SinonFakeTimers;
        requests: SinonFakeXMLHttpRequest[];
        server: SinonFakeServer;
        spy: SinonSpyStatic;
        stub: SinonStubStatic;
        mock: SinonMockStatic;

        useFakeTimers(config?: number | Date | Partial<SinonFakeTimersConfig>): SinonFakeTimers;
        useFakeXMLHttpRequest(): SinonFakeXMLHttpRequestStatic;
        useFakeServer(): SinonFakeServer;
        restore(): void;
        reset(): void;
        resetHistory(): void;
        resetBehavior(): void;
        usingPromise(promiseLibrary: any): SinonSandbox;
        verify(): void;
        verifyAndRestore(): void;

        replace<T, TKey extends keyof T>(
            obj: T,
            prop: TKey,
            replacement: T[TKey]): T[TKey];
        replaceGetter<T, TKey extends keyof T>(
            obj: T,
            prop: TKey,
            replacement: () => T[TKey]): () => T[TKey];
        replaceSetter<T, TKey extends keyof T>(
            obj: T,
            prop: TKey,
            replacement: (val: T[TKey]) => void): (val: T[TKey]) => void;

        /**
         * Creates a new object with the given functions as the prototype and stubs all implemented functions.
         *
         * @template TType Type being stubbed.
         * @param constructor   Object or class to stub.
         * @returns A stubbed version of the constructor.
         * @remarks The given constructor function is not invoked. See also the stub API.
         */
        createStubInstance<TType>(constructor: StubbableType<TType>): SinonStubbedInstance<TType>;
    }

    interface SinonApi {
        fake: SinonFake;
        match: SinonMatch;
        spyCall(...args: any[]): SinonSpyCall;
        expectation: SinonExpectationStatic;

        clock: {
            create(now: number | Date): SinonFakeTimers;
        };

        FakeXMLHttpRequest: SinonFakeXMLHttpRequestStatic;

        fakeServer: SinonFakeServerStatic;
        fakeServerWithClock: SinonFakeServerStatic;

        createSandbox(config?: Partial<SinonSandboxConfig>): SinonSandbox;
        defaultConfig: Partial<SinonSandboxConfig>;
    }

    interface LegacySandbox {
        sandbox: {
            /**
             * @deprecated Since 5.0, use `sinon.createSandbox` instead
             */
            create(config?: Partial<SinonSandboxConfig>): SinonSandbox;
        };
    }

    type SinonStatic = SinonSandbox & LegacySandbox & SinonApi;
}

declare const Sinon: Sinon.SinonStatic;

export = Sinon;
export as namespace sinon;
