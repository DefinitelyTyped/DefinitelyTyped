import sinon = require("sinon");

function testSandbox() {
    const obj = {};

    sinon.createSandbox({
        injectInto: obj,
        properties: ['spy', 'stub'],
        useFakeTimers: true,
        useFakeServer: true
    });
    sinon.createSandbox({
        injectInto: null
    });
    sinon.createSandbox({
        useFakeTimers: {
            now: 1000,
            shouldAdvanceTime: false
        },
        useFakeServer: sinon.fakeServer.create()
    });
    sinon.createSandbox(sinon.defaultConfig);
    sinon.sandbox.create();
    sinon.sandbox.create(sinon.defaultConfig);

    const sb = sinon.createSandbox();

    sb.assert.pass('foo');
    sb.clock.tick(1000);
    sb.spy();
    sb.stub();
    sb.mock(obj);

    sb.useFakeTimers();
    sb.useFakeTimers(1000);
    sb.useFakeTimers(new Date());
    sb.useFakeTimers({
        now: 1000
    });

    const xhr = sb.useFakeXMLHttpRequest();
    xhr.useFilters = true;
    xhr.restore();

    const server = sb.useFakeServer();
    server.respondWith('foo');

    sb.restore();
    sb.reset();
    sb.resetHistory();
    sb.resetBehavior();
    sb.usingPromise(Promise);
    sb.verify();
    sb.verifyAndRestore();

    const replaceMe = {
        prop: 5,
        method() { return 6; },
        get getter() { return 7; },
        get setter() { return true; },
        set setter(val) { }
    };

    sb.replace(replaceMe, 'prop', 10);
    sb.replace(replaceMe, 'method', sb.spy());
    sb.replaceGetter(replaceMe, 'getter', () => 14);
    sb.replaceSetter(replaceMe, 'setter', (v) => { });

    const cls = class {
        foo(arg1: string, arg2: number): number { return 1; }
        bar: number;
    };
    const PrivateFoo = class {
        private constructor() { }
        foo() { }
        bar: number;
        static create() {
            return new PrivateFoo();
        }
    };

    const stubInstance = sb.createStubInstance(cls);
    const privateFooStubbedInstance = sb.createStubInstance(PrivateFoo);
    stubInstance.foo.calledWith('foo', 1);
    stubInstance.foo.calledWith('foo');
    privateFooStubbedInstance.foo.calledWith();
    const clsFoo: sinon.SinonStub<[string, number], number> = stubInstance.foo;
    const privateFooFoo: sinon.SinonStub<[], void> = privateFooStubbedInstance.foo;
    const clsBar: number = stubInstance.bar;
    const privateFooBar: number = privateFooStubbedInstance.bar;
    sb.createStubInstance(cls, {
        foo: sinon.stub<[string, number], number>().returns(1),
        bar: 1
    });
    sb.createStubInstance(cls, {
        foo: 1, // used as return value
    });
}

function testFakeServer() {
    let s = sinon.fakeServer.create();
    s = sinon.fakeServerWithClock.create();

    sinon.fakeServer.create({
        autoRespond: true,
        autoRespondAfter: 3,
        fakeHTTPMethods: true,
        respondImmediately: false
    });

    sinon.fakeServer.create({
        autoRespond: true,
        autoRespondAfter: 3
    });
}

function testXHR() {
    const xhr = new sinon.FakeXMLHttpRequest();
    const headers = xhr.getAllResponseHeaders();
    const header = xhr.getResponseHeader('foo');

    xhr.setResponseHeaders({ 'Content-Type': 'text/html' });
    xhr.setResponseBody('foo');
    xhr.respond(200, { 'Content-Type': 'foo' }, 'bar');
    xhr.error();

    sinon.FakeXMLHttpRequest.useFilters = true;
    sinon.FakeXMLHttpRequest.addFilter((method, url, async, user, pass) => true);
    sinon.FakeXMLHttpRequest.onCreate = (xhr) => { };
    sinon.FakeXMLHttpRequest.restore();
}

function testClock() {
    let clock = sinon.clock.create(1000);
    clock = sinon.clock.create(new Date());

    let now: sinon.SinonTimerId = 0;
    now = clock.now;

    const fn = () => { };
    const fnWithArgs = (a: number, b: string) => {};

    clock.setTimeout(fn, 0);
    clock.setInterval(fn, 0);
    clock.setImmediate(fn);
    clock.requestAnimationFrame(fn);

    now = clock.setTimeout(fnWithArgs, 0, 1234, 'abc');
    now = clock.setInterval(fnWithArgs, 0, 1234, 'abc');
    now = clock.setImmediate(fnWithArgs, 1234, 'abc');

    let timer = clock.setTimeout(fn, 0);
    clock.clearTimeout(timer);
    timer = clock.setInterval(fn, 0);
    clock.clearInterval(timer);
    timer = clock.setImmediate(fn);
    clock.clearImmediate(timer);

    const animTimer = clock.requestAnimationFrame(fn);
    clock.cancelAnimationFrame(animTimer);

    clock.nextTick(fn);

    clock.tick(1);
    clock.tick('00:10');
    clock.tickAsync(500).then(val => val.toExponential());
    clock.tickAsync('500').then(val => val.toExponential());

    clock.next();
    clock.nextAsync().then(val => val.toExponential());

    clock.runAll();
    clock.runAllAsync().then(val => val.toExponential());

    clock.runToLast();
    clock.runToLastAsync().then(val => val.toExponential());

    clock.reset();
    clock.runMicrotasks();
    clock.runToFrame();
    clock.restore();
    clock.uninstall();
    clock.setSystemTime(1000);
    clock.setSystemTime(new Date());
}

function testExpectation() {
    const obj = {};

    let ex = sinon.expectation.create();
    ex = sinon.expectation.create('some name');

    ex.atLeast(5).atMost(10);
    ex.never();
    ex.once();
    ex.twice();
    ex.thrice();
    ex.exactly(5);
    ex.withArgs('a', 'b');
    ex.withExactArgs('a', 'b');
    ex.on(obj);
    ex.verify();
    ex.restore();
}

function testMatch() {
    const obj = {};
    const fn = () => { };

    sinon.match(5).test(5);
    sinon.match('str').test('foo');
    sinon.match(/foo/).test('foo');
    sinon.match({ a: 5, b: 6 }).test({});
    sinon.match((v) => true).test('foo');
    sinon.match((v) => true, 'some message').test('foo');
    sinon.match.any.test('foo');
    sinon.match.defined.test('foo');
    sinon.match.truthy.test('foo');
    sinon.match.falsy.test('foo');
    sinon.match.bool.test('foo');
    sinon.match.number.test('foo');
    sinon.match.string.test('foo');
    sinon.match.object.test('foo');
    sinon.match.func.test(fn);
    sinon.match.map.test(new Map([['a', 1], ['b', 2]]));
    sinon.match.set.test(new Set([1, 2, 3]));
    sinon.match.array.test([1, 2, 3]);
    sinon.match.regexp.test('foo');
    sinon.match.date.test('foo');
    sinon.match.symbol.test('foo');
    sinon.match.in([1, 2, 3]).test(1);
    sinon.match.same(obj);
    sinon.match.typeOf('string').test('foo');
    sinon.match.instanceOf(fn).test('foo');
    sinon.match.has('prop').test(obj);
    sinon.match.has('prop', 123).test(obj);
    sinon.match.hasOwn('prop').test(obj);
    sinon.match.hasOwn('prop', 123).test(obj);
    sinon.match.hasNested('prop.foo.bar').test(obj);
    sinon.match.hasNested('prop.foo.bar', 123).test(obj);
    sinon.match.every(sinon.match.number).test([1, 2, 'three']);
    sinon.match.some(sinon.match.number).test([1, 2, 'three']);
    sinon.match.array.deepEquals([{ a: 'b' }]).test([]);
    sinon.match.array.startsWith([{ a: 'b' }]).test([]);
    sinon.match.array.deepEquals([{ a: 'b' }]).test([]);
    sinon.match.array.contains([{ a: 'b' }]).test([]);
    sinon.match.map.deepEquals(new Map([['a', true], ['b', false]])).test(new Map());
    sinon.match.map.contains(new Map([['a', true]])).test(new Map());
}

function testFake() {
    const fn = () => { };
    let fake = sinon.fake();

    fake = sinon.fake(() => true);
    fake = sinon.fake.returns(5);
    fake = sinon.fake.throws('foo');
    fake = sinon.fake.throws(new Error('foo'));
    fake = sinon.fake.resolves('foo');
    fake = sinon.fake.rejects('foo');
    fake = sinon.fake.yields(1, 2, fn);
    fake = sinon.fake.yieldsAsync(1, 2, fn);

    fake.calledWith('foo');
}

function testAssert() {
    const spy = sinon.spy();
    const spyTwo = sinon.spy();
    const obj = {};

    sinon.assert.fail();
    sinon.assert.fail('foo');
    sinon.assert.pass('foo');
    sinon.assert.notCalled(spy);
    sinon.assert.called(spy);
    sinon.assert.calledOnce(spy);
    sinon.assert.calledTwice(spy);
    sinon.assert.calledThrice(spy);
    sinon.assert.callCount(spy, 3);
    sinon.assert.callOrder(spy, spyTwo);
    sinon.assert.calledOn(spy, obj);
    sinon.assert.calledOn(spy.firstCall, obj);
    sinon.assert.alwaysCalledOn(spy, obj);
    sinon.assert.alwaysCalledWith(spy, 'a', 'b', 'c');
    sinon.assert.neverCalledWith(spy, 'a', 'b', 'c');
    sinon.assert.calledWithExactly(spy, 'a', 'b', 'c');
    sinon.assert.calledOnceWithExactly(spy, 'a', 'b', 'c');
    sinon.assert.alwaysCalledWithExactly(spy, 'a', 'b', 'c');
    sinon.assert.calledWithMatch(spy, 'a', 'b', 'c');
    sinon.assert.calledWithMatch(spy.firstCall, 'a', 'b', 'c');
    sinon.assert.calledOnceWithMatch(spy, 'a', 'b', 'c');
    sinon.assert.calledOnceWithMatch(spy.firstCall, 'a', 'b', 'c');
    sinon.assert.alwaysCalledWithMatch(spy, 'a', 'b', 'c');
    sinon.assert.neverCalledWithMatch(spy, 'a', 'b', 'c');
    sinon.assert.calledWithNew(spy);
    sinon.assert.calledWithNew(spy.firstCall);
    sinon.assert.threw(spy);
    sinon.assert.threw(spy.firstCall);
    sinon.assert.threw(spy, 'foo error');
    sinon.assert.threw(spy.firstCall, 'foo error');
    sinon.assert.threw(spy, new Error('foo'));
    sinon.assert.threw(spy.firstCall, new Error('foo'));
    sinon.assert.alwaysThrew(spy);
    sinon.assert.alwaysThrew(spy, 'foo error');
    sinon.assert.alwaysThrew(spy, new Error('foo'));
    sinon.assert.match('a', 'b');
    sinon.assert.match(1, 1 + 1);
    sinon.assert.match({ a: 1 }, { b: 2, c: 'abc' });
    sinon.assert.expose(obj);
    sinon.assert.expose(obj, { prefix: 'blah' });
    sinon.assert.expose(obj, { includeFail: true });

    const typedSpy = sinon.spy((arg1: string, arg2: boolean) => 123);
    sinon.assert.notCalled(typedSpy);
    sinon.assert.called(typedSpy);
    sinon.assert.calledOnce(typedSpy);
    sinon.assert.calledTwice(typedSpy);
    sinon.assert.calledThrice(typedSpy);
    sinon.assert.callCount(typedSpy, 3);
    sinon.assert.callOrder(typedSpy, spyTwo);
    sinon.assert.calledOn(typedSpy, obj);
    sinon.assert.calledOn(typedSpy.firstCall, obj);
    sinon.assert.alwaysCalledOn(typedSpy, obj);
    sinon.assert.alwaysCalledWith(typedSpy, 'a', 'b', 'c'); // $ExpectError
    sinon.assert.alwaysCalledWith(typedSpy, 'a', true);
    sinon.assert.neverCalledWith(typedSpy, 'a', false);
    sinon.assert.neverCalledWith(typedSpy, 'a', 'b'); // $ExpectError
    sinon.assert.calledWithExactly(typedSpy, 'a', true);
    sinon.assert.calledWithExactly(typedSpy, 'a', 'b'); // $ExpectError
    sinon.assert.alwaysCalledWithExactly(typedSpy, 'a', true);
    sinon.assert.alwaysCalledWithExactly(typedSpy, 'a', 1); // $ExpectError
    sinon.assert.calledWithMatch(typedSpy, 'a', true);
    sinon.assert.calledWithMatch(typedSpy.firstCall, 'a', true);
    sinon.assert.calledWithMatch(typedSpy.firstCall, 'a', 2); // $ExpectError
    sinon.assert.alwaysCalledWithMatch(typedSpy, 'a', true);
    sinon.assert.alwaysCalledWithMatch(typedSpy, 'a', 2); // $ExpectError
    sinon.assert.neverCalledWithMatch(typedSpy, 'a', true);
    sinon.assert.neverCalledWithMatch(typedSpy, 'a', 2); // $ExpectError
    sinon.assert.calledWithNew(typedSpy);
    sinon.assert.calledWithNew(typedSpy.firstCall);
    sinon.assert.threw(typedSpy);
    sinon.assert.threw(typedSpy.firstCall);
    sinon.assert.threw(typedSpy, 'foo error');
    sinon.assert.threw(typedSpy.firstCall, 'foo error');
    sinon.assert.threw(typedSpy, new Error('foo'));
    sinon.assert.threw(typedSpy.firstCall, new Error('foo'));
    sinon.assert.alwaysThrew(typedSpy);
    sinon.assert.alwaysThrew(typedSpy, 'foo error');
    sinon.assert.alwaysThrew(typedSpy, new Error('foo'));
    sinon.assert.match('a', 'b');
    sinon.assert.match(1, 1 + 1);
    sinon.assert.match({ a: 1 }, { b: 2, c: 'abc' });
    sinon.assert.expose(obj);
    sinon.assert.expose(obj, { prefix: 'blah' });
    sinon.assert.expose(obj, { includeFail: true });
}

function testTypedSpy() {
    const cls = class {
        get accessorTest() { return 5; }
        set accessorTest(v: number) { }
        get getterTest() { return 5; }
        set setterTest(v: number) { }
        foo(a: number, b: string): number {
            return 3;
        }
    };

    const instance = new cls();
    const spy = sinon.spy(instance, 'foo');

    spy.calledWith(5, 'x');
    spy.calledWith(sinon.match(5), 'x');
    spy.calledWithExactly(5, 'x');
    spy.calledWithExactly(5, sinon.match('x'));
    spy.calledOnceWith(5, 'x');
    spy.calledOnceWith(sinon.match(5), 'x');
    spy.notCalledWith(5, 'x');
    spy.notCalledWith(sinon.match(5), 'x');
    spy.returned(5);
    spy.returned(sinon.match(5));

    spy.withArgs(sinon.match(5), 'x').calledWith(5, 'x');
    spy.alwaysCalledWith(sinon.match(5), 'x');
    spy.alwaysCalledWith(5, 'x');
    spy.alwaysCalledWithExactly(sinon.match(5), 'x');
    spy.alwaysCalledWithExactly(5, 'x');
    spy.neverCalledWith(sinon.match(5), 'x');
    spy.neverCalledWith(5, 'x');

    const stub = sinon.stub(instance, 'foo');

    stub.withArgs(5, 'x').returns(3);
    stub.withArgs(sinon.match(5), 'x').returns(5);

    const accessorSpy = sinon.spy(instance, 'accessorTest', ['get', 'set']);
    accessorSpy.get.returned(5);
    accessorSpy.set.calledWith(55);

    const getterSpy = sinon.spy(instance, 'getterTest', ['get']);
    getterSpy.get.returned(5);

    const setterSpy = sinon.spy(instance, 'setterTest', ['set']);
    setterSpy.set.calledWith(100);
}

function testSpy() {
    let fn = (arg: string, arg2: number): boolean => true;
    const obj = class {
        foo() { }
        foobar(p1?: string) { return p1; }
        set bar(val: number) { }
        get bar() { return 0; }
    };
    const instance = new obj();

    const spy = sinon.spy(); // $ExpectType SinonSpy<any[], any>
    const spyTwo = sinon.spy().named('spyTwo');

    const methodSpy = sinon.spy(instance, 'foo'); // $ExpectType SinonSpy<[], void>
    methodSpy.wrappedMethod; // $ExpectType () => void

    const methodSpy2 = sinon.spy(instance, 'foobar'); // $ExpectType SinonSpy<[(string | undefined)?], string | undefined> || SinonSpy<[p1?: string | undefined], string | undefined>
    methodSpy2.wrappedMethod; // $ExpectType (p1?: string | undefined) => string | undefined

    methodSpy.calledBefore(methodSpy2);
    methodSpy.calledAfter(methodSpy2);
    methodSpy.calledImmediatelyBefore(methodSpy2);
    methodSpy.calledImmediatelyAfter(methodSpy2);

    let count = 0;
    count = spy.callCount;

    let called = false;
    called = spy.called;
    called = spy.notCalled;
    called = spy.calledOnce;
    called = spy.calledTwice;
    called = spy.calledThrice;

    let arr: any[] = [];
    arr = spy.thisValues;
    arr = spy.args;
    arr = spy.exceptions;
    arr = spy.returnValues;

    const fnSpy = sinon.spy(fn); // $ExpectType SinonSpy<[string, number], boolean> || SinonSpy<[arg: string, arg2: number], boolean>
    fn = fnSpy; // Should be assignable to original function
    fnSpy('a', 1); // $ExpectType boolean
    fnSpy.args; // $ExpectType [string, number][] || [arg: string, arg2: number][]
    fnSpy.returnValues; // $ExpectType boolean[]

    spy(1, 2);
    spy(true);

    spy.calledBefore(spyTwo);
    spy.calledAfter(spyTwo);
    spy.calledImmediatelyBefore(spyTwo);
    spy.calledImmediatelyAfter(spyTwo);
    spy.calledWithNew();
    spy.withArgs('a', 1).calledBefore(spyTwo);
    spy.alwaysCalledOn(instance);
    spy.alwaysCalledWith('a', 1);
    spy.alwaysCalledWith('a');
    spy.alwaysCalledWithExactly('a', 1);
    spy.alwaysCalledWithMatch('foo');
    spy.neverCalledWith('b', 2);
    spy.neverCalledWith('b');
    spy.neverCalledWithMatch('foo', 'bar');
    spy.alwaysThrew();
    spy.alwaysThrew('foo');
    spy.alwaysThrew(new Error('foo'));
    spy.alwaysReturned('foo');
    spy.invokeCallback('a', 'b');
    spy.calledOn(instance);
    spy.calledWith('a', 2);
    spy.calledWithExactly('a', 2);
    spy.calledOnceWith('a', 2);
    spy.calledOnceWithExactly('a', 2);
    spy.calledWithMatch('bar', 2);
    spy.notCalledWith('a', 2);
    spy.notCalledWithMatch('a', 2);
    spy.returned(true);
    spy.returned('foo');
    spy.returned(2);
    spy.threw();
    spy.threw('foo');
    spy.threw(new Error('foo'));
    spy.callArg(1);
    spy.callArgOn(1, instance);
    spy.callArgOn(1, instance, 'a', 2);
    spy.callArgWith(1, 'a', 2);
    spy.callArgOnWith(1, instance, 'a', 2);
    spy.yield('a', 2);
    spy.yieldOn(instance, 'a', 2);
    spy.yieldTo('prop', 'a', 2);
    spy.yieldToOn('prop', instance, 'a', 2);

    let call = spy.firstCall;
    call = spy.secondCall;
    call = spy.thirdCall;
    call = spy.lastCall;
    call = spy.getCall(1);
    call = spy.getCalls()[0];

    let arg: any;
    arg = call.firstArg;
    arg = call.lastArg;

    call.calledBefore(call);
    call.calledAfter(call);
    call.calledWithNew();

    spy.resetHistory();
    spy.restore();
}

function testStub() {
    const obj = class {
        foo(arg: string): number { return 1; }
        promiseFunc() { return Promise.resolve('foo'); }
        promiseLikeFunc() { return Promise.resolve('foo') as PromiseLike<string>; }
        unresolvableReturnFunc(): any { return Promise.resolve(); }
        fooDeep(arg: { s: string }): void { return undefined; }
    };
    const instance = new obj();

    const stub = sinon.stub();

    const spy: sinon.SinonSpy = stub;

    const promiseStub = sinon.stub(instance, 'promiseFunc');
    promiseStub.resolves('test');
    promiseStub.resolves(123); // $ExpectError

    const promiseUnresolvableReturn =
        sinon.stub(instance, 'unresolvableReturnFunc');
    promiseUnresolvableReturn.resolves(['anything', 123, true]);

    const promiseLikeStub = sinon.stub(instance, 'promiseLikeFunc');
    promiseLikeStub.resolves('test');

    sinon.stub(instance);

    stub.reset();
    stub.resetBehavior();
    stub.usingPromise(Promise);

    stub.returns(true);
    stub.returns(5);
    stub.returns('foo');
    stub.returnsArg(1);
    stub.returnsThis();
    stub.resolves();
    stub.resolves('foo');
    stub.resolvesArg(1);
    stub.resolvesThis();
    stub.throws();
    stub.throws('err');
    stub.throws(new Error('err'));
    stub.throwsArg(1);
    stub.throwsException('err');
    stub.throwsException(new Error('err'));
    stub.rejects();
    stub.rejects('TypeError');
    stub.rejects(1234);
    stub.callsArg(1);
    stub.callThrough();
    stub.callsArgOn(1, instance);
    stub.callsArgWith(1, 'a', 2);
    stub.callsArgAsync(1);
    stub.callsArgOnAsync(1, instance);
    stub.callsArgWithAsync(1, 'a', 2);
    stub.callsArgOnWithAsync(1, instance, 'a', 2);
    stub.callsFake((s1, s2, s3) => { });
    stub.callsFake(() => { });
    stub.get(() => true);
    stub.set((v) => { });
    stub.onCall(1).returns(true);
    stub.onFirstCall().resolves('foo');
    stub.onSecondCall().resolves('foo');
    stub.onThirdCall().resolves('foo');
    stub.value('foo');
    stub.yields('a', 2);
    stub.yieldsOn(instance, 'a', 2);
    stub.yieldsRight('a', 2);
    stub.yieldsTo('foo', 'a', 2);
    stub.yieldsToOn('foo', instance, 'a', 2);
    stub.yieldsAsync('a', 2);
    stub.yieldsOnAsync(instance, 'a', 2);
    stub.yieldsToAsync('foo', 'a', 2);
    stub.yieldsToOnAsync('foo', instance, 'a', 2);
    stub.withArgs('a', 2).returns(true);

    // Type-safe stubs
    const stub2 = sinon.stub(instance, 'foo').named('namedStub');
    instance.foo = stub2; // Should be assignable to original
    stub2.returns(true); // $ExpectError
    stub2.returns(5);
    stub2.returns('foo'); // $ExpectError
    stub2.callsFake((arg: string) => 1);
    stub2.callsFake((arg: number) => 1); // $ExpectError
    stub2.callsFake((arg: string) => 'a'); // $ExpectError
    stub2.onCall(1).returns(2);
    stub2.withArgs('a', 2).returns('true'); // $ExpectError
    stub2.withArgs('a').returns(1);
    stub2.withArgs('a').returns('a'); // $ExpectError

    const stub3 = sinon.stub(instance, 'fooDeep').named('namedStubDeep');
    stub3.calledWith({ s: sinon.match.string });

    const pStub = sinon.stub(instance, 'promiseFunc');
    pStub.resolves();
    pStub.resolves('foo');
    pStub.resolves(1); // $ExpectError
}

function testTypedStub() {
    class Foo {
        bar(baz: number, qux: string): boolean {
            return true;
        }
    }
    let stub: sinon.SinonStub<[number, string], boolean> = sinon.stub();
    let stub2 = sinon.stub<[number, string], boolean>();
    const foo = new Foo();
    stub = sinon.stub(foo, 'bar');
    stub2 = sinon.stub(foo, 'bar');
    const result: boolean = stub(42, 'qux');
    const fooStub: sinon.SinonStubbedInstance<Foo> = {
        bar: sinon.stub()
    };
}

function testMock() {
    const obj = {};
    const mock = sinon.mock(obj);

    mock.expects('method').atLeast(2).atMost(5);
    mock.restore();
    mock.verify();
}
