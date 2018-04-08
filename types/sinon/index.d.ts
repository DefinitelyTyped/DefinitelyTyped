// Type definitions for Sinon 4.3
// Project: http://sinonjs.org/
// Definitions by: William Sears <https://github.com/mrbigdog2u>
//                 Jonathan Little <https://github.com/rationull>
//                 Lukas Spieß <https://github.com/lumaxis>
//                 Nico Jansen <https://github.com/nicojs>
//                 James Garbutt <https://github.com/43081j>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// sinon uses DOM dependencies which are absent in browser-less environment like node.js
// to avoid compiler errors this monkey patch is used
// see more details in https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11351
interface Event { } // tslint:disable-line no-empty-interface
interface Document { } // tslint:disable-line no-empty-interface

declare namespace Sinon {
    interface SinonSpyCallApi {
        // Properties
        thisValue: any;
        args: any[];
        exception: any;
        returnValue: any;

        // Methods
        calledOn(obj: any): boolean;
        calledWith(...args: any[]): boolean;
        calledWithExactly(...args: any[]): boolean;
        calledOnceWith(...args: any[]): boolean;
        calledOnceWithExactly(...args: any[]): boolean;
        calledWithMatch(...args: any[]): boolean;
        notCalledWith(...args: any[]): boolean;
        notCalledWithMatch(...args: any[]): boolean;
        returned(value: any): boolean;
        threw(): boolean;
        threw(type: string): boolean;
        threw(obj: any): boolean;
        callArg(pos: number): void;
        callArgOn(pos: number, obj: any, ...args: any[]): void;
        callArgWith(pos: number, ...args: any[]): void;
        callArgOnWith(pos: number, obj: any, ...args: any[]): void;
        yield(...args: any[]): void;
        yieldOn(obj: any, ...args: any[]): void;
        yieldTo(property: string, ...args: any[]): void;
        yieldToOn(property: string, obj: any, ...args: any[]): void;
    }

    interface SinonSpyCall extends SinonSpyCallApi {
        calledBefore(call: SinonSpyCall): boolean;
        calledAfter(call: SinonSpyCall): boolean;
        calledWithNew(call: SinonSpyCall): boolean;
    }

    interface SinonSpy extends SinonSpyCallApi {
        // Properties
        callCount: number;
        called: boolean;
        notCalled: boolean;
        calledOnce: boolean;
        calledTwice: boolean;
        calledThrice: boolean;
        firstCall: SinonSpyCall;
        secondCall: SinonSpyCall;
        thirdCall: SinonSpyCall;
        lastCall: SinonSpyCall;
        thisValues: any[];
        args: any[][];
        exceptions: any[];
        returnValues: any[];

        // Methods
        (...args: any[]): any;
        calledBefore(anotherSpy: SinonSpy): boolean;
        calledAfter(anotherSpy: SinonSpy): boolean;
        calledImmediatelyBefore(anotherSpy: SinonSpy): boolean;
        calledImmediatelyAfter(anotherSpy: SinonSpy): boolean;
        calledWithNew(): boolean;
        withArgs(...args: any[]): SinonSpy;
        alwaysCalledOn(obj: any): boolean;
        alwaysCalledWith(...args: any[]): boolean;
        alwaysCalledWithExactly(...args: any[]): boolean;
        alwaysCalledWithMatch(...args: any[]): boolean;
        neverCalledWith(...args: any[]): boolean;
        neverCalledWithMatch(...args: any[]): boolean;
        alwaysThrew(): boolean;
        alwaysThrew(type: string): boolean;
        alwaysThrew(obj: any): boolean;
        alwaysReturned(obj: any): boolean;
        invokeCallback(...args: any[]): void;
        getCall(n: number): SinonSpyCall;
        getCalls(): SinonSpyCall[];
        /// @deprecated Use resetHistory() instead
        reset(): void;
        resetHistory(): void;
        printf(format: string, ...args: any[]): string;
        restore(): void;
    }

    interface SinonSpyStatic {
        (): SinonSpy;
        (func: Function): SinonSpy;
        <T>(obj: T, method: keyof T): SinonSpy;
    }

    interface SinonStatic {
        spy: SinonSpyStatic;
    }

    interface SinonStub extends SinonSpy {
        resetBehavior(): void;
        resetHistory(): void;
        usingPromise(promiseLibrary: any): SinonStub;

        returns(obj: any): SinonStub;
        returnsArg(index: number): SinonStub;
        returnsThis(): SinonStub;
        resolves(value?: any): SinonStub;
        throws(type?: string): SinonStub;
        throws(obj: any): SinonStub;
        throwsArg(index: number): SinonStub;
        throwsException(type?: string): SinonStub;
        throwsException(obj: any): SinonStub;
        rejects(): SinonStub;
        rejects(errorType: string): SinonStub;
        rejects(value: any): SinonStub;
        callsArg(index: number): SinonStub;
        callThrough(): SinonStub;
        callsArgOn(index: number, context: any): SinonStub;
        callsArgWith(index: number, ...args: any[]): SinonStub;
        callsArgOnWith(index: number, context: any, ...args: any[]): SinonStub;
        callsArgAsync(index: number): SinonStub;
        callsArgOnAsync(index: number, context: any): SinonStub;
        callsArgWithAsync(index: number, ...args: any[]): SinonStub;
        callsArgOnWithAsync(index: number, context: any, ...args: any[]): SinonStub;
        callsFake(func: (...args: any[]) => void): SinonStub;
        get(func: () => any): SinonStub;
        set(func: (v: any) => void): SinonStub;
        onCall(n: number): SinonStub;
        onFirstCall(): SinonStub;
        onSecondCall(): SinonStub;
        onThirdCall(): SinonStub;
        value(val: any): SinonStub;
        yields(...args: any[]): SinonStub;
        yieldsOn(context: any, ...args: any[]): SinonStub;
        yieldsRight(...args: any[]): SinonStub;
        yieldsTo(property: string, ...args: any[]): SinonStub;
        yieldsToOn(property: string, context: any, ...args: any[]): SinonStub;
        yieldsAsync(...args: any[]): SinonStub;
        yieldsOnAsync(context: any, ...args: any[]): SinonStub;
        yieldsToAsync(property: string, ...args: any[]): SinonStub;
        yieldsToOnAsync(property: string, context: any, ...args: any[]): SinonStub;
        withArgs(...args: any[]): SinonStub;
    }

    interface SinonStubStatic {
        (): SinonStub;
        <T>(obj: T): SinonStubbedInstance<T>;
        <T>(obj: T, method: keyof T): SinonStub;
        <T>(obj: T, method: keyof T, func: Function): SinonStub;
    }

    interface SinonStatic {
        stub: SinonStubStatic;
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

    interface SinonStatic {
        expectation: SinonExpectationStatic;
        mock: SinonMockStatic;
    }

    interface SinonFakeTimers {
        now: number;
        create(now: number): SinonFakeTimers;
        setTimeout(callback: (...args: any[]) => void, timeout: number, ...args: any[]): number;
        clearTimeout(id: number): void;
        setInterval(callback: (...args: any[]) => void, timeout: number, ...args: any[]): number;
        clearInterval(id: number): void;
        tick(ms: number): number;
        next(): void;
        runAll(): void;
        runToLast(): void;
        reset(): void;
        Date(): Date;
        Date(year: number): Date;
        Date(year: number, month: number): Date;
        Date(year: number, month: number, day: number): Date;
        Date(year: number, month: number, day: number, hour: number): Date;
        Date(year: number, month: number, day: number, hour: number, minute: number): Date;
        Date(year: number, month: number, day: number, hour: number, minute: number, second: number): Date;
        Date(year: number, month: number, day: number, hour: number, minute: number, second: number, ms: number): Date;
        restore(): void;

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

    interface SinonFakeTimersStatic {
        (now?: number | Date): SinonFakeTimers;
        (config?: Partial<SinonFakeTimersConfig>): SinonFakeTimers;
    }

    interface SinonStatic {
        useFakeTimers: SinonFakeTimersStatic;
        clock: SinonFakeTimers;
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
        onCreate(xhr: SinonFakeXMLHttpRequest): void;
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
        restore(): void;
        useFilters: boolean;
        addFilter(filter: (method: string, url: string, async: boolean, username: string, password: string) => boolean): void;
        setResponseHeaders(headers: any): void;
        setResponseBody(body: string): void;
        respond(status: number, headers: any, body: string): void;
        autoRespond(ms: number): void;
        error(): void;
        onerror(): void;
    }

    type SinonFakeXMLHttpRequestStatic = () => SinonFakeXMLHttpRequest;

    interface SinonStatic {
        useFakeXMLHttpRequest: SinonFakeXMLHttpRequestStatic;
        FakeXMLHttpRequest: SinonFakeXMLHttpRequest;
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
        autoRespond?: boolean;
        autoRespondAfter?: number;
        fakeHTTPMethods?: boolean;
        respondImmediately?: boolean;
    }

    interface SinonFakeServerStatic {
        create(options?: SinonFakeServerOptions): SinonFakeServer;
    }

    interface SinonStatic {
        fakeServer: SinonFakeServerStatic;
        fakeServerWithClock: SinonFakeServerStatic;
    }

    interface SinonExposeOptions {
        prefix?: string;
        includeFail?: boolean;
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
        expose(obj: any, options?: SinonExposeOptions): void;
    }

    interface SinonStatic {
        assert: SinonAssert;
    }

    interface SinonMatcher {
        and(expr: SinonMatcher): SinonMatcher;
        or(expr: SinonMatcher): SinonMatcher;
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
        (obj: any): SinonMatcher;
        (callback: (value: any) => boolean, message?: string): SinonMatcher;
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
    }

    interface SinonStatic {
        match: SinonMatch;
    }

    interface SinonSandboxConfig {
        injectInto?: any;
        properties?: string[];
        useFakeTimers?: any;
        useFakeServer?: any;
    }

    interface SinonSandbox {
        assert: SinonAssert;
        clock: SinonFakeTimers;
        requests: SinonFakeXMLHttpRequest;
        server: SinonFakeServer;
        spy: SinonSpyStatic;
        stub: SinonStubStatic;
        mock: SinonMockStatic;
        useFakeTimers: SinonFakeTimersStatic;
        useFakeXMLHttpRequest: SinonFakeXMLHttpRequestStatic;
        useFakeServer(): SinonFakeServer;
        restore(): void;
        reset(): void;
        resetHistory(): void;
        resetBehavior(): void;
        usingPromise(promiseLibrary: any): SinonSandbox;
        verify(): void;
        verifyAndRestore(): void;
        createStubInstance(constructor: any): any;
        createStubInstance<TType>(constructor: StubbableType<TType>): SinonStubbedInstance<TType>;
    }

    interface SinonSandboxStatic {
        create(config?: SinonSandboxConfig): SinonSandbox;
    }

    interface SinonStatic {
        createSandbox(config?: SinonSandboxConfig): SinonSandbox;
        defaultConfig: SinonSandboxConfig;
        sandbox: SinonSandboxStatic;
    }

    interface SinonTestConfig {
        injectIntoThis?: boolean;
        injectInto?: any;
        properties?: string[];
        useFakeTimers?: boolean;
        useFakeServer?: boolean;
    }

    interface SinonTestWrapper extends SinonSandbox {
        (...args: any[]): any;
    }

    // Utility overridables
    interface SinonStatic {
        /**
         * Creates a new object with the given functions as the prototype and stubs all implemented functions.
         *
         * @param constructor   Object or class to stub.
         * @returns A stubbed version of the constructor.
         * @remarks The given constructor function is not invoked. See also the stub API.
         */
        createStubInstance(constructor: any): any;

        /**
         * Creates a new object with the given functions as the prototype and stubs all implemented functions.
         *
         * @template TType Type being stubbed.
         * @param constructor   Object or class to stub.
         * @returns A stubbed version of the constructor.
         * @remarks The given constructor function is not invoked. See also the stub API.
         */
        createStubInstance<TType>(constructor: StubbableType<TType>): SinonStubbedInstance<TType>;

        format(obj: any): string;
        restore(object: any): void;
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
     * An instance of a stubbed object type with members replaced by stubs.
     *
     * @template TType Object type being stubbed.
     */
    type SinonStubbedInstance<TType> = {
        // TODO: this should really only replace functions on TType with SinonStubs, not all properties
        // Likely infeasible without mapped conditional types, per https://github.com/Microsoft/TypeScript/issues/12424
        [P in keyof TType]: SinonStub;
    };
}

declare const Sinon: Sinon.SinonStatic;

export = Sinon;
export as namespace sinon;
