/* Lifecycle events */

beforeAll(() => {});
beforeAll((done: jest.DoneCallback) => {});
beforeAll((done: jest.DoneCallback) => done.fail(), 9001);

beforeEach(() => {});
beforeEach((done: jest.DoneCallback) => {});
beforeEach((done: jest.DoneCallback) => done.fail(), 9001);

afterAll(() => {});
afterAll((done: jest.DoneCallback) => {});
afterAll((done: jest.DoneCallback) => done.fail(), 9001);

afterEach(() => {});
afterEach((done: jest.DoneCallback) => {});
afterEach((done: jest.DoneCallback) => done.fail(), 9001);

/* describe */

describe(0, () => {});
describe('name', () => {});
describe(() => {}, () => {});
describe({ name: 'name' }, () => {});

describe.only(0, () => {});
describe.only('name', () => {});
describe.only(() => {}, () => {});
describe.only({ name: 'name' }, () => {});

describe.skip(0, () => {});
describe.skip('name', () => {});
describe.skip(() => {}, () => {});
describe.skip({ name: 'name' }, () => {});

fdescribe(0, () => {});
fdescribe('name', () => {});
fdescribe(() => {}, () => {});
fdescribe({ name: 'name' }, () => {});

fdescribe.only(0, () => {});
fdescribe.only('name', () => {});
fdescribe.only(() => {}, () => {});
fdescribe.only({ name: 'name' }, () => {});

fdescribe.skip(0, () => {});
fdescribe.skip('name', () => {});
fdescribe.skip(() => {}, () => {});
fdescribe.skip({ name: 'name' }, () => {});

xdescribe(0, () => {});
xdescribe('name', () => {});
xdescribe(() => {}, () => {});
xdescribe({ name: 'name' }, () => {});

xdescribe.only(0, () => {});
xdescribe.only('name', () => {});
xdescribe.only(() => {}, () => {});
xdescribe.only({ name: 'name' }, () => {});

xdescribe.skip(0, () => {});
xdescribe.skip('name', () => {});
xdescribe.skip(() => {}, () => {});
xdescribe.skip({ name: 'name' }, () => {});

/* it */

it('name', () => {});
it('name', async () => {});
it('name', () => {}, 9001);
it('name', async () => {}, 9001);
it('name', (callback: jest.DoneCallback) => {}, 9001);

it.only('name', () => {});
it.only('name', async () => {});
it.only('name', () => {}, 9001);
it.only('name', async () => {}, 9001);
it.only('name', (callback: jest.DoneCallback) => {}, 9001);

it.skip('name', () => {});
it.skip('name', async () => {});
it.skip('name', () => {}, 9001);
it.skip('name', async () => {}, 9001);
it.skip('name', (callback: jest.DoneCallback) => {}, 9001);

it.todo('name', () => {});
it.todo('name', async () => {});
it.todo('name', () => {}, 9001);
it.todo('name', async () => {}, 9001);
it.todo('name', (callback: jest.DoneCallback) => {}, 9001);

it.concurrent('name', () => {});
it.concurrent('name', async () => {});
it.concurrent('name', () => {}, 9001);
it.concurrent('name', async () => {}, 9001);
it.concurrent('name', (callback: jest.DoneCallback) => {}, 9001);

fit('name', () => {});
fit('name', async () => {});
fit('name', () => {}, 9001);
fit('name', async () => {}, 9001);
fit('name', (callback: jest.DoneCallback) => {}, 9001);

fit.only('name', () => {});
fit.only('name', async () => {});
fit.only('name', () => {}, 9001);
fit.only('name', async () => {}, 9001);
fit.only('name', (callback: jest.DoneCallback) => {}, 9001);

fit.skip('name', () => {});
fit.skip('name', async () => {});
fit.skip('name', () => {}, 9001);
fit.skip('name', async () => {}, 9001);
fit.skip('name', (callback: jest.DoneCallback) => {}, 9001);

fit.todo('name', () => {});
fit.todo('name', async () => {});
fit.todo('name', () => {}, 9001);
fit.todo('name', async () => {}, 9001);
fit.todo('name', (callback: jest.DoneCallback) => {}, 9001);

fit.concurrent('name', () => {});
fit.concurrent('name', async () => {});
fit.concurrent('name', () => {}, 9001);
fit.concurrent('name', async () => {}, 9001);
fit.concurrent('name', (callback: jest.DoneCallback) => {}, 9001);

xit('name', () => {});
xit('name', async () => {});
xit('name', () => {}, 9001);
xit('name', async () => {}, 9001);
xit('name', (callback: jest.DoneCallback) => {}, 9001);

xit.only('name', () => {});
xit.only('name', async () => {});
xit.only('name', () => {}, 9001);
xit.only('name', async () => {}, 9001);
xit.only('name', (callback: jest.DoneCallback) => {}, 9001);

xit.skip('name', () => {});
xit.skip('name', async () => {});
xit.skip('name', () => {}, 9001);
xit.skip('name', async () => {}, 9001);
xit.skip('name', (callback: jest.DoneCallback) => {}, 9001);

xit.todo('name', () => {});
xit.todo('name', async () => {});
xit.todo('name', () => {}, 9001);
xit.todo('name', async () => {}, 9001);
xit.todo('name', (callback: jest.DoneCallback) => {}, 9001);

xit.concurrent('name', () => {});
xit.concurrent('name', async () => {});
xit.concurrent('name', () => {}, 9001);
xit.concurrent('name', async () => {}, 9001);
xit.concurrent('name', (callback: jest.DoneCallback) => {}, 9001);

test('name', () => {});
test('name', async () => {});
test('name', () => {}, 9001);
test('name', async () => {}, 9001);
test('name', (callback: jest.DoneCallback) => {}, 9001);

test.only('name', () => {});
test.only('name', async () => {});
test.only('name', () => {}, 9001);
test.only('name', async () => {}, 9001);
test.only('name', (callback: jest.DoneCallback) => {}, 9001);

test.skip('name', () => {});
test.skip('name', async () => {});
test.skip('name', () => {}, 9001);
test.skip('name', async () => {}, 9001);
test.skip('name', (callback: jest.DoneCallback) => {}, 9001);

test.todo('name', () => {});
test.todo('name', async () => {});
test.todo('name', () => {}, 9001);
test.todo('name', async () => {}, 9001);
test.todo('name', (callback: jest.DoneCallback) => {}, 9001);

test.concurrent('name', () => {});
test.concurrent('name', async () => {});
test.concurrent('name', () => {}, 9001);
test.concurrent('name', async () => {}, 9001);
test.concurrent('name', (callback: jest.DoneCallback) => {}, 9001);

xtest('name', () => {});
xtest('name', async () => {});
xtest('name', () => {}, 9001);
xtest('name', async () => {}, 9001);
xtest('name', (callback: jest.DoneCallback) => {}, 9001);

xtest.only('name', () => {});
xtest.only('name', async () => {});
xtest.only('name', () => {}, 9001);
xtest.only('name', async () => {}, 9001);
xtest.only('name', (callback: jest.DoneCallback) => {}, 9001);

xtest.skip('name', () => {});
xtest.skip('name', async () => {});
xtest.skip('name', () => {}, 9001);
xtest.skip('name', async () => {}, 9001);
xtest.skip('name', (callback: jest.DoneCallback) => {}, 9001);

xtest.todo('name', () => {});
xtest.todo('name', async () => {});
xtest.todo('name', () => {}, 9001);
xtest.todo('name', async () => {}, 9001);
xtest.todo('name', (callback: jest.DoneCallback) => {}, 9001);

xtest.concurrent('name', () => {});
xtest.concurrent('name', async () => {});
xtest.concurrent('name', () => {}, 9001);
xtest.concurrent('name', async () => {}, 9001);
xtest.concurrent('name', (callback: jest.DoneCallback) => {}, 9001);

/* Done callbacks */

describe('', () => {
    it('', (callback: jest.DoneCallback): void => {
        callback();
        callback('');
        callback('', 3);
        callback.fail();
        callback.fail('error');
        callback.fail({ message: 'message' });
    });
});

/* NodeRequire interface (require extensions) */

declare const nodeRequire: NodeRequire;

// $ExpectType any
nodeRequire.requireActual('moduleName');

// $ExpectType any
nodeRequire.requireMock('moduleName');

/* Top-level jest namespace functions */

const customMatcherFactories: jasmine.CustomMatcherFactories = {};

jest.addMatchers(customMatcherFactories)
    .addMatchers({})
    .addMatchers(customMatcherFactories)
    .autoMockOff()
    .autoMockOn()
    .clearAllMocks()
    .clearAllTimers()
    .resetAllMocks()
    .restoreAllMocks()
    .clearAllTimers()
    .deepUnmock('moduleName')
    .disableAutomock()
    .doMock('moduleName')
    .doMock('moduleName', jest.fn())
    .doMock('moduleName', jest.fn(), {})
    .doMock('moduleName', jest.fn(), { virtual: true })
    .dontMock('moduleName')
    .enableAutomock()
    .mock('moduleName')
    .mock('moduleName', jest.fn())
    .mock('moduleName', jest.fn(), {})
    .mock('moduleName', jest.fn(), { virtual: true })
    .resetModuleRegistry()
    .resetModules()
    .isolateModules(() => {})
    .retryTimes(3)
    .runAllImmediates()
    .runAllTicks()
    .runAllTimers()
    .runOnlyPendingTimers()
    .runTimersToTime(9001)
    .advanceTimersByTime(9001)
    .setMock('moduleName', {})
    .setMock<{}>('moduleName', {})
    .setMock<{ a: 'b' }>('moduleName', { a: 'b' })
    .setTimeout(9001)
    .unmock('moduleName')
    .useFakeTimers()
    .useRealTimers();

jest.advanceTimersToNextTimer();
jest.advanceTimersToNextTimer(2);

// https://jestjs.io/docs/en/jest-object#jestrequireactualmodulename
jest.requireActual('./thisReturnsTheActualModule');

// https://jestjs.io/docs/en/jest-object#jestrequiremockmodulename
jest.requireMock('./thisAlwaysReturnsTheMock');

/* Mocks and spies */

// $ExpectType Mock<any, any>
const mock1: jest.Mock<number> = jest.fn();
// $ExpectType Mock<undefined, []>
const mock2 = jest.fn(() => undefined);
// $ExpectType Mock<string, []>
const mock3 = jest.fn(() => 'abc');
// $ExpectType Mock<"abc", []>
const mock4 = jest.fn((): 'abc' => 'abc');
// $ExpectType Mock<string, string[]>
const mock5 = jest.fn((...args: string[]) => args.join(''));
// $ExpectType Mock<{}, [{}]>
const mock6 = jest.fn((arg: {}) => arg);
// $ExpectType Mock<number, [number]>
const mock7 = jest.fn((arg: number) => arg);
// $ExpectType Mock<number, [number]>
const mock8: jest.Mock = jest.fn((arg: number) => arg);
// $ExpectType Mock<Promise<boolean>, [number, string, {}, [], boolean]>
const mock9 = jest.fn((a: number, _b: string, _c: {}, _iReallyDontCare: [], _makeItStop: boolean) =>
    Promise.resolve(_makeItStop)
);
// $ExpectType Mock<never, []>
const mock10 = jest.fn(() => {
    throw new Error();
});
// $ExpectType Mock<unknown, [unknown]>
const mock11 = jest.fn((arg: unknown) => arg);
interface TestApi {
    test(x: number): string;
}
// $ExpectType Mock<string, [number]>
const mock12 = jest.fn<ReturnType<TestApi['test']>, jest.ArgsType<TestApi['test']>>();

// $ExpectType number
mock1('test');

// $ExpectError
mock7('abc');
// $ExpectError
mock7.mockImplementation((arg: string) => 1);

// compiles because mock8 is declared as jest.Mock<{}, any>
mock8('abc');
mock8.mockImplementation((arg: string) => 1);

// mockImplementation not required to declare all arguments
mock9.mockImplementation((a: number) => Promise.resolve(a === 0));

const genMockModule1: {} = jest.genMockFromModule('moduleName');
const genMockModule2: { a: 'b' } = jest.genMockFromModule<{ a: 'b' }>('moduleName');

const isStringMock: boolean = jest.isMockFunction('foo');
const isMockMock: boolean = jest.isMockFunction(mock1);

const maybeMock = () => {};
if (jest.isMockFunction(maybeMock)) {
    maybeMock.getMockName();
}

const mockName: string = jest.fn().getMockName();
const mockContextVoid = jest.fn().mock;
const mockContextString = jest.fn(() => '').mock;

jest.fn().mockClear();
jest.fn().mockReset();
jest.fn().mockRestore();
jest.fn().mockImplementation((test: number) => test);
jest.fn().mockResolvedValue(1);

interface SpyInterface {
    prop?: number;
    method?: (arg1: boolean) => void;
}
const spiedTarget = {
    returnsVoid(): void {},
    setValue(value: string): void {
        this.value = value;
    },
    returnsString(): string {
        return '';
    },
};
class SpiedTargetClass {
    private _value = 3;
    private _value2 = '';
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    get value2() {
        return this._value2;
    }
    set value2(value2) {
        this._value2 = value2;
    }
}

const spiedTarget2 = new SpiedTargetClass();

// $ExpectError
jest.spyOn(spiedTarget, 'setValue', 'get');
// $ExpectError
jest.spyOn(spiedTarget2, 'value');

const spy1 = jest.spyOn(spiedTarget, 'returnsVoid');
const spy3 = jest.spyOn(spiedTarget, 'returnsString');
const spy1Name: string = spy1.getMockName();

const spy1Calls: Array<[]> = spy1.mock.calls;

spy1.mockClear();
spy1.mockReset();

const spy3Mock = spy3
    .mockImplementation(() => '')
    .mockImplementation()
    // $ExpectError
    .mockImplementation((arg: {}) => arg)
    .mockImplementation((...args: string[]) => args.join(''))
    .mockImplementationOnce(() => '')
    .mockName('name')
    .mockReturnThis()
    .mockReturnValue('value')
    .mockReturnValueOnce('value');

const spiedPromiseTarget = {
    resolvesString() {
        return Promise.resolve('string');
    }
};
jest.spyOn(spiedPromiseTarget, 'resolvesString')
    .mockResolvedValue('value')
    .mockResolvedValueOnce('value')
    .mockRejectedValue('value')
    .mockRejectedValueOnce('value');

let spy4: jest.SpyInstance;
// $ExpectType SpyInstance<string, []>
spy4 = jest.spyOn(spiedTarget, 'returnsString');
// compiles because spy4 is declared as jest.SpyInstance<any, any>
spy4.mockImplementation(() => 1);
spy4.mockRestore();

let spy5: jest.SpiedFunction<typeof spiedTarget.setValue>;

// $ExpectType SpyInstance<void, [string]>
spy5 = jest.spyOn(spiedTarget, 'setValue');
// $ExpectError
spy5 = jest.spyOn(spiedTarget, 'returnsString');

// $ExpectType SpyInstance<number, []>
const spy6 = jest.spyOn(spiedTarget2, 'value', 'get');
// $ExpectError
spy6.mockReturnValue('5');

// $ExpectType SpyInstance<void, [number]>
jest.spyOn(spiedTarget2, 'value', 'set');

let spyInterfaceImpl: SpyInterface = {};
// $ExpectError
jest.spyOn(spyInterfaceImpl, 'method', 'get');
// $ExpectError
jest.spyOn(spyInterfaceImpl, 'prop');
// $ExpectType SpyInstance<number, []>
jest.spyOn(spyInterfaceImpl, 'prop', 'get');
// $ExpectType SpyInstance<void, [boolean]>
jest.spyOn(spyInterfaceImpl, 'method');

class SpyableClass {
    constructor(a: number, b: string) {}
    foo() {}
}
// $ExpectType SpyInstance<SpyableClass, [number, string]>
jest.spyOn({ SpyableClass }, "SpyableClass");

interface Type1 {
    a: number;
}
interface Type2 {
    b: number;
}
class TestMocked {
    field: string;
    test1(x: Type1): Promise<Type1> {
        return Promise.resolve(x);
    }
    test2(x: Promise<Type1>): Promise<Type1> {
        return x;
    }
    test3(x: Promise<Type1>): Promise<Type2> {
        return x.then(() => ({ b: 1 }));
    }
    test4(x: Type1): Type1 {
        return x;
    }
}

const mocked: jest.Mocked<TestMocked> = new TestMocked() as any;
mocked.test1.mockImplementation(() => Promise.resolve({ a: 1 }));
mocked.test1.mockReturnValue(Promise.resolve({ a: 1 }));
// $ExpectType MockInstance<Promise<Type1>, [Type1]> & ((x: Type1) => Promise<Type1>)
mocked.test1.mockResolvedValue({ a: 1 });
mocked.test1.mockResolvedValueOnce({ a: 1 });
// $ExpectType MockInstance<Promise<Type1>, [Type1]> & ((x: Type1) => Promise<Type1>)
mocked.test1.mockResolvedValue(Promise.resolve({ a: 1 }));
mocked.test1.mockResolvedValueOnce(Promise.resolve({ a: 1 }));
// $ExpectType MockInstance<Promise<Type1>, [Promise<Type1>]> & ((x: Promise<Type1>) => Promise<Type1>)
mocked.test2.mockResolvedValue({ a: 1 });
mocked.test2.mockResolvedValueOnce({ a: 1 });
// $ExpectType MockInstance<Promise<Type1>, [Promise<Type1>]> & ((x: Promise<Type1>) => Promise<Type1>)
mocked.test2.mockResolvedValue(Promise.resolve({ a: 1 }));
mocked.test2.mockResolvedValueOnce(Promise.resolve({ a: 1 }));
// $ExpectType MockInstance<Promise<Type2>, [Promise<Type1>]> & ((x: Promise<Type1>) => Promise<Type2>)
mocked.test3.mockResolvedValue({ b: 1 });
mocked.test3.mockResolvedValueOnce({ b: 1 });
// $ExpectType MockInstance<Promise<Type2>, [Promise<Type1>]> & ((x: Promise<Type1>) => Promise<Type2>)
mocked.test3.mockResolvedValue(Promise.resolve({ b: 1 }));
mocked.test3.mockResolvedValueOnce(Promise.resolve({ b: 1 }));
mocked.test3.mockRejectedValue(new Error());
mocked.test3.mockRejectedValueOnce(new Error());
// $ExpectError
mocked.test4.mockResolvedValue({ a: 1 });
// $ExpectError
mocked.test4.mockResolvedValueOnce({ a: 1 });
// $ExpectError
mocked.test4.mockResolvedValue(Promise.resolve({ a: 1 }));
// $ExpectError
mocked.test4.mockResolvedValueOnce(Promise.resolve({ a: 1 }));
// $ExpectError
mocked.test4.mockRejectedValue(new Error());
// $ExpectError
mocked.test4.mockRejectedValueOnce(new Error());

class TestClass {
    testClassMethod(str: string, num: number): boolean {
        return true;
    }

    constructor(stringValue: string) {}
}

const module = {
    testFunction(num: number, str: string): boolean {
        return true;
    },
    testLambdaFunction: (num: number, str: string): boolean => {
        return true;
    },
    TestClass,
    testClassInstance: new TestClass('test'),
};

const mockedModule = module as jest.Mocked<typeof module>;
mockedModule.testFunction.mock.calls[0][0]; // $ExpectType number
mockedModule.testFunction.mock.calls[0][1]; // $ExpectType string
const testFunction_0_ret = mockedModule.testFunction.mock.results[0];
if (testFunction_0_ret.type === 'return') {
    testFunction_0_ret.value; // $ExpectType boolean
}

mockedModule.TestClass.mock.calls[0][0]; // $ExpectType string
mockedModule.TestClass.mock.instances[0]; // $ExpectType TestClass

mockedModule.TestClass.prototype.testClassMethod.mock.calls[0][0]; // $ExpectType string
mockedModule.TestClass.prototype.testClassMethod.mock.calls[0][1]; // $ExpectType number
const TestClass_testClassMethod_0_ret = mockedModule.TestClass.prototype.testClassMethod.mock.results[0];
if (TestClass_testClassMethod_0_ret.type === 'return') {
    TestClass_testClassMethod_0_ret.value; // $ExpectType boolean
}

const mockedTestFunction = module.testFunction as jest.MockedFunction<typeof module.testFunction>;
mockedTestFunction.mock.calls[0][0]; // $ExpectType number
mockedTestFunction.mock.calls[0][1]; // $ExpectType string
const mockedTestFunction_0_ret = mockedTestFunction.mock.results[0];
if (mockedTestFunction_0_ret.type === 'return') {
    mockedTestFunction_0_ret.value; // $ExpectType boolean
}

const mockedTestLambdaFunction = module.testLambdaFunction as jest.MockedFunction<typeof module.testLambdaFunction>;
mockedTestLambdaFunction.mock.calls[0][0]; // $ExpectType number
mockedTestLambdaFunction.mock.calls[0][1]; // $ExpectType string
const mockedTestLambdaFunction_0_ret = mockedTestLambdaFunction.mock.results[0];
if (mockedTestLambdaFunction_0_ret.type === 'return') {
    mockedTestLambdaFunction_0_ret.value; // $ExpectType boolean
}

const MockedTestClass = module.TestClass as jest.MockedClass<typeof module.TestClass>;
MockedTestClass.prototype.testClassMethod.mock.calls[0][0]; // $ExpectType string
MockedTestClass.prototype.testClassMethod.mock.calls[0][1]; // $ExpectType number
const MockedTestClass_testClassMethod_0_ret = mockedModule.TestClass.prototype.testClassMethod.mock.results[0];
if (MockedTestClass_testClassMethod_0_ret.type === 'return') {
    MockedTestClass_testClassMethod_0_ret.value; // $ExpectType boolean
}

const mockResult = jest.fn(() => 1).mock.results[0];
switch (mockResult.type) {
    case 'return':
        mockResult.value; // $ExpectType number
        break;
    case 'incomplete':
        mockResult.value; // $ExpectType undefined
        break;
    case 'throw':
        mockResult.value; // $ExpectType any
        break;
}

/* getState and setState */
// $ExpectError
expect.setState(true);
expect.setState({for: 'state'});
const expectState = expect.getState();
// $ExpectType string
expectState.currentTestName;
// $ExpectType string
expectState.testPath;
// $ExpectType boolean
expectState.expand;
// $ExpectType number
expectState.assertionCalls;
// $ExpectType number
expectState.expectedAssertionsNumber;
// $ExpectType boolean | undefined
expectState.isExpectingAssertions;
// $ExpectType Error[]
expectState.suppressedErrors;
// allows additional state properties added by getState
expectState.for;

/* Snapshot serialization */

const snapshotSerializerPlugin: jest.SnapshotSerializerPlugin = {
    print: () => '',
    test: () => true,
};

expect.addSnapshotSerializer(snapshotSerializerPlugin);

expect.addSnapshotSerializer({
    print: (value: {}) => '',
    test: (value: {}) => value === value,
});

expect.addSnapshotSerializer({
    print: (value: {}, serialize: (val: {}) => string, indent: (str: string) => string, opts: {}) => '',
    test: (value: {}) => value === value,
});

expect.addSnapshotSerializer({
    serialize(value, config, indentation, depth, refs, printer) {
        let result = '';

        if (config.callToJSON !== undefined && config.callToJSON) {
            result += ' ';
        }

        result += config.spacingInner;
        result += config.spacingOuter;

        if (config.escapeRegex !== undefined && config.escapeRegex) {
            result += ' ';
        }

        if (indentation !== undefined) {
            result += indentation;
        }

        if (config.maxDepth !== undefined) {
            result = result.substring(0, config.maxDepth);
        }

        if (config.min !== undefined && config.min) {
            result += ' ';
        }

        if (config.plugins !== undefined) {
            for (const plugin of config.plugins) {
                expect.addSnapshotSerializer(plugin);
            }
        }

        if (config.printFunctionName !== undefined && config.printFunctionName) {
            result += ' ';
        }

        return result;
    },
    test: (value: {}) => value === value,
});

// old API
expect.addSnapshotSerializer({
    print(value, serialize, indent, opts, colors) {
        let result = '';

        result += opts.edgeSpacing;
        result += opts.spacing;

        if (opts.min !== undefined && opts.min) {
            result += ' ';
        }

        for (const color of [colors.comment, colors.content, colors.prop, colors.tag, colors.value]) {
            result += color.open;
            result += color.close;
        }

        return result;
    },
    test: (value: {}) => value === value,
});

/* expect extensions */

const expectExtendMap: jest.ExpectExtendMap = {};

expect.extend(expectExtendMap);
expect.extend({});
expect.extend({
    foo(this: jest.MatcherContext, received: {}, ...actual: Array<{}>) {
        return {
            message: () => JSON.stringify(received),
            pass: false,
        };
    },
});
// $ExpectError
const customMatcherResultMessage: jest.CustomMatcherResult['message'] = 'msg';
expect.extend({
    async foo(this: jest.MatcherContext, received: {}, ...actual: Array<{}>) {
        return {
            message: () => JSON.stringify(received),
            pass: false,
        };
    },
});

expect.extend({
    foo(this: jest.MatcherContext) {
        const isNot: boolean = this.isNot;
        const expand: boolean = this.expand;

        const expectedColor = this.utils.EXPECTED_COLOR('blue');
        const receivedColor = this.utils.EXPECTED_COLOR('red');

        const diff: string | null = this.utils.diff({}, {});

        this.utils.ensureActualIsNumber({}, 'matcher');

        this.utils.ensureExpectedIsNumber({}, 'matcher');

        this.utils.ensureNoExpected({}, 'matcher');

        this.utils.ensureNumbers({}, {}, 'matcher');

        this.utils.matcherHint('matcher');
        this.utils.matcherHint('matcher', 'received');
        this.utils.matcherHint('matcher', 'received', 'expected');
        this.utils.matcherHint('matcher', 'received', 'expected', {});
        this.utils.matcherHint('matcher', 'received', 'expected', {
            isDirectExpectCall: true,
        });
        this.utils.matcherHint('matcher', 'received', 'expected', {
            secondArgument: '',
        });
        this.utils.matcherHint('matcher', 'received', 'expected', {
            isDirectExpectCall: true,
            secondArgument: '',
        });

        const plural: string = this.utils.pluralize('word', 3);

        const expectedPrinted: string = this.utils.printExpected({});

        const receivedPrinted: string = this.utils.printReceived({});

        const printedWithType: string = this.utils.printWithType('name', {}, (value: {}) => '');

        const stringified: string = this.utils.stringify({});
        const stringifiedWithMaxDepth: string = this.utils.stringify({}, 3);

        const equals: boolean = this.equals({}, {});

        this.dontThrow();
        this.fromState;
        const currentTestName: string = this.currentTestName;
        const testPath: string = this.testPath;

        return {
            message: () => `Can use ${this.promise} for failure message`,
            pass: false,
        };
    },
});

/* Basic matchers */

describe('', () => {
    it('', () => {
        /* Corrections of previous typings */
        // $ExpectError
        expect('').not.not;
        // $ExpectError
        expect('').resolves.resolves;
        // $ExpectType void
        expect('').toEqual('');
        // $ExpectType Promise<void>
        expect(Promise.resolve('')).resolves.toEqual('');

        expect(jest.fn()).lastCalledWith();
        expect(jest.fn()).lastCalledWith('jest');
        expect(jest.fn()).lastCalledWith({}, {});

        expect(jest.fn()).lastReturnedWith('jest');
        expect(jest.fn()).lastReturnedWith({});

        expect(jest.fn()).nthCalledWith(0, 'jest');
        expect(jest.fn()).nthCalledWith(1, {});

        expect(jest.fn()).nthReturnedWith(0, 'jest');
        expect(jest.fn()).nthReturnedWith(1, {});

        expect({}).toBe({});
        expect([]).toBe([]);
        expect(10).toBe(10);

        expect(jest.fn()).toBeCalled();

        expect(jest.fn()).toBeCalledTimes(1);

        expect(jest.fn()).toBeCalledWith();
        expect(jest.fn()).toBeCalledWith('jest');
        expect(jest.fn()).toBeCalledWith({}, {});

        // $ExpectError
        expect(jest.fn()).toBeCalledWith<[string, number]>(1, 'two');
        // $ExpectError
        expect({}).toEqual<{ p1: string, p2: number }>({ p1: 'hello' });

        expect(0).toBeCloseTo(1);
        expect(0).toBeCloseTo(1, 2);

        expect(undefined).toBeDefined();
        expect({}).toBeDefined();

        expect(true).toBeFalsy();
        expect(false).toBeFalsy();
        expect(0).toBeFalsy();

        expect(0).toBeGreaterThan(1);

        expect(0).toBeGreaterThanOrEqual(1);

        expect(3).toBeInstanceOf(Number);

        expect(0).toBeLessThan(1);

        expect(0).toBeLessThanOrEqual(1);

        expect(null).toBeNull();
        expect(undefined).toBeNull();

        expect(true).toBeTruthy();
        expect(false).toBeFalsy();
        expect(1).toBeTruthy();

        expect(undefined).toBeUndefined();
        expect({}).toBeUndefined();

        expect(NaN).toBeNaN();
        expect(Infinity).toBeNaN();

        expect([]).toContain({});
        expect(['abc']).toContain('abc');
        expect(['abc']).toContain('def');

        expect([]).toContainEqual({});
        expect(['abc']).toContainEqual('def');

        expect([]).toEqual([]);
        expect({}).toEqual({});

        expect(jest.fn()).toHaveBeenCalled();

        expect(jest.fn()).toHaveBeenCalledTimes(0);
        expect(jest.fn()).toHaveBeenCalledTimes(1);

        expect(jest.fn()).toHaveBeenCalledWith();
        expect(jest.fn()).toHaveBeenCalledWith('jest');
        expect(jest.fn()).toHaveBeenCalledWith({}, {});

        expect(jest.fn()).toHaveBeenCalledWith(0);
        expect(jest.fn()).toHaveBeenCalledWith(1, 'jest');
        expect(jest.fn()).toHaveBeenCalledWith(2, {}, {});

        expect(jest.fn()).toHaveBeenLastCalledWith();
        expect(jest.fn()).toHaveBeenLastCalledWith('jest');
        expect(jest.fn()).toHaveBeenLastCalledWith({}, {});

        expect(jest.fn()).toHaveLastReturnedWith('jest');
        expect(jest.fn()).toHaveLastReturnedWith({});

        expect([]).toHaveLength(0);
        expect('').toHaveLength(1);

        expect(jest.fn()).toHaveNthReturnedWith(0, 'jest');
        expect(jest.fn()).toHaveNthReturnedWith(1, {});

        expect({}).toHaveProperty('property');
        expect({}).toHaveProperty('property', {});
        expect({}).toHaveProperty(['property']);
        expect({}).toHaveProperty(['property'], {});
        expect({}).toHaveProperty(['property', 'deep']);
        expect({}).toHaveProperty(['property', 'deep'], {});

        expect(jest.fn()).toHaveReturned();

        expect(jest.fn()).toHaveReturnedTimes(0);
        expect(jest.fn()).toHaveReturnedTimes(1);

        expect(jest.fn()).toHaveReturnedWith('jest');
        expect(jest.fn()).toHaveReturnedWith({});

        expect('').toMatch('');
        expect('').toMatch(/foo/);

        expect({}).toMatchObject({});
        expect({ abc: 'def' }).toMatchObject({ abc: 'def' });
        expect({}).toMatchObject([{}, {}]);
        expect({ abc: 'def' }).toMatchObject([{ abc: 'def' }, { invalid: 'property' }]);
        expect({ abc: 'def' }).toMatchObject<{ abc: string }>({ abc: 'def' });
        expect([{ abc: 'def' }, { abc: 'def' }]).toMatchObject<[{ abc: string }, { abc: string }]>([
            { abc: 'def' },
            { abc: 'def' },
        ]);

        expect({}).toMatchSnapshot();
        expect({}).toMatchSnapshot('snapshotName');
        expect({ abc: 'def' }).toMatchSnapshot({ abc: expect.any(String) }, 'snapshotName');
        expect({
            one: 1,
            two: '2',
            three: 3,
            four: { four: 3 },
            date: new Date(),
        }).toMatchSnapshot({
            one: expect.any(Number),
            // Leave 'two' to the auto-generated snapshot
            three: 3,
            four: { four: expect.any(Number) },
            date: expect.any(Date),
        });

        expect({}).toMatchInlineSnapshot();
        expect({}).toMatchInlineSnapshot('snapshot');
        expect({ abc: 'def' }).toMatchInlineSnapshot({ abc: expect.any(String) }, 'snapshot');
        expect({
            one: 1,
            two: '2',
            three: 3,
            four: { four: 3 },
            date: new Date(),
        }).toMatchInlineSnapshot({
            one: expect.any(Number),
            // leave out two
            three: 3,
            four: { four: expect.any(Number) },
            date: expect.any(Date),
        });

        expect(jest.fn()).toReturn();

        expect(jest.fn()).toReturnTimes(0);
        expect(jest.fn()).toReturnTimes(1);

        expect(jest.fn()).toReturnWith('jest');
        expect(jest.fn()).toReturnWith({});

        expect(true).toStrictEqual(false);
        expect({}).toStrictEqual({});

        const errInstance = new Error();
        const willThrow = () => {
            throw new Error();
        };
        expect(() => {}).toThrow();
        expect(willThrow).toThrow('');
        expect(willThrow).toThrow(errInstance);
        expect(jest.fn()).toThrow(Error);
        expect(jest.fn(willThrow)).toThrow(/foo/);

        expect(() => {}).toThrowErrorMatchingSnapshot();
        expect(willThrow).toThrowErrorMatchingSnapshot();
        expect(jest.fn()).toThrowErrorMatchingSnapshot();
        expect(jest.fn(willThrow)).toThrowErrorMatchingSnapshot();

        expect(() => {}).toThrowErrorMatchingInlineSnapshot();
        expect(() => {}).toThrowErrorMatchingInlineSnapshot('Error Message');
        expect(willThrow).toThrowErrorMatchingInlineSnapshot();
        expect(willThrow).toThrowErrorMatchingInlineSnapshot('Error Message');
        expect(jest.fn()).toThrowErrorMatchingInlineSnapshot();
        expect(jest.fn()).toThrowErrorMatchingInlineSnapshot('Error Message');
        expect(jest.fn(willThrow)).toThrowErrorMatchingInlineSnapshot();
        expect(jest.fn(willThrow)).toThrowErrorMatchingInlineSnapshot('Error Message');

        /* not */

        expect({}).not.toEqual({});
        expect([]).not.toStrictEqual([]);

        /* Promise matchers */

        expect(Promise.reject('jest')).rejects.toEqual('jest').then(() => {});
        expect(Promise.reject('jest')).rejects.not.toEqual('other').then(() => {});

        expect(Promise.resolve('jest')).resolves.toEqual('jest').then(() => {});
        expect(Promise.resolve('jest')).resolves.not.toEqual('other').then(() => {});
        /* type matchers */

        expect({}).toBe(expect.anything());

        expect({}).toBe(expect.any(class Foo {}));
        expect(new Error()).toBe(expect.any(Error));
        expect(7).toBe(expect.any(Number));

        expect({}).toBe(expect.arrayContaining(['a', 'b']));
        expect(['abc']).toBe(expect.arrayContaining(['a', 'b']));

        expect.objectContaining({});
        expect.stringMatching('foo');
        expect.stringMatching(/foo/);
        expect.stringContaining('foo');

        expect({ abc: 'def' }).toBe(
            expect.objectContaining({
                abc: expect.arrayContaining([expect.any(Date), {}]),
                def: expect.objectContaining({
                    foo: 'bar',
                }),
                ghi: expect.stringMatching('foo'),
            })
        );

        /* Inverse type matchers */

        expect('How are you?').toEqual(expect.not.stringContaining('Hello world!'));
        expect('How are you?').toEqual(expect.not.stringMatching(/Hello world!/));
        expect({ bar: 'baz' }).toEqual(expect.not.objectContaining({ foo: 'bar' }));
        expect(['Alice', 'Bob', 'Eve']).toEqual(expect.not.arrayContaining(['Samantha']));

        /* Miscellaneous */

        expect.hasAssertions();
        expect.assertions(0);
        expect.assertions(9001);
    });
});

/* Custom matchers and CustomExpect */
describe('', () => {
    it('', () => {
        const customMatcher = (expected: any, actual: {prop: string}, option1: boolean) => {
            return {pass: true, message: () => ''};
        };
        const asyncMatcher = () => {
            return Promise.resolve({pass: true, message: () => ''});
        };

        const customMatchers = {customMatcher, asyncMatcher};
        expect.extend(customMatchers);
        const extendedExpect: jest.ExtendedExpect<typeof customMatchers> = expect as any;

        // extracting matcher types
        const matchers = extendedExpect({thing: true});
        let nonPromiseMatchers: jest.NonPromiseMatchers<typeof matchers> = matchers;
        const isNot = true;
        if (isNot) {
            nonPromiseMatchers = matchers.not;
        }
        // retains U from <U>(actual: U) => JestExtendedMatchers<T, U>; - BUT CANNOT DO THAT WITH CUSTOM...
        nonPromiseMatchers.toMatchInlineSnapshot({thing: extendedExpect.any(Boolean)});
        // $ExpectError
        nonPromiseMatchers.toMatchInlineSnapshot({notthing: extendedExpect.any(Boolean)});

        let promiseMatchers: jest.PromiseMatchers<typeof matchers> = matchers.rejects;
        if (isNot) {
            promiseMatchers = matchers.rejects.not;
        }
        // $ExpectType Promise<void>
        promiseMatchers.customMatcher({prop: ''}, true);

        // retains built in asymmetric matcher
        extendedExpect.not.arrayContaining;

        extendedExpect.customMatcher({prop: 'good'}, false).asymmetricMatch({}).valueOf();
        // $ExpectError
        extendedExpect.customMatcher({prop: {not: 'good'}}, false);

        extendedExpect.not.customMatcher({prop: 'good'}, false).asymmetricMatch({}).valueOf();
        // $ExpectError
        extendedExpect.not.customMatcher({prop: 'good'}, 'bad').asymmetricMatch({}).valueOf();

        // $ExpectError
        const asynMatcherExcluded = extendedExpect.asyncMatcher;

        extendedExpect('').customMatcher({prop: 'good'}, true);
        // $ExpectError
        extendedExpect('').customMatcher({prop: 'good'}, 'bad');

        extendedExpect('').not.customMatcher({prop: 'good'}, true);
        // $ExpectError
        extendedExpect('').not.customMatcher({prop: 'good'}, 'bad');

        extendedExpect(Promise.resolve('')).resolves.customMatcher({prop: 'good'}, true).then(() => {});
        // $ExpectError
        extendedExpect(Promise.resolve('')).resolves.customMatcher({prop: 'good'}, 'bad').then(() => {});

        extendedExpect(Promise.resolve('')).resolves.not.customMatcher({prop: 'good'}, true).then(() => {});
        // $ExpectError
        extendedExpect(Promise.resolve('')).resolves.not.customMatcher({prop: 'good'}, 'bad').then(() => {});

        extendedExpect(Promise.reject('')).rejects.customMatcher({prop: 'good'}, true).then(() => {});
        // $ExpectError
        extendedExpect(Promise.reject('')).rejects.customMatcher({prop: 'good'}, 'bad').then(() => {});

        extendedExpect(Promise.reject('')).rejects.not.customMatcher({prop: 'good'}, true).then(() => {});
        // $ExpectError
        extendedExpect(Promise.reject('')).rejects.not.customMatcher({prop: 'good'}, 'bad').then(() => {});
    });
});

/* Jasmine status changers */

describe('', () => {
    it('', () => {
        pending();
        pending('reason');

        fail();
        fail('error');
        fail(new Error('reason'));
        fail({});
    });
});

/* Jasmine clocks and timing */

jasmine.DEFAULT_TIMEOUT_INTERVAL = 9001;

const clock = jasmine.clock();

clock.install();

clock.mockDate();
clock.mockDate(undefined);
clock.mockDate(new Date());

clock.tick(0);
clock.tick(9001);

/* Jasmine matchers */

expect({}).toBe(jasmine.anything());

expect({}).toBe(jasmine.any(class Foo {}));
expect(new Error()).toBe(jasmine.any(Error));
expect(7).toBe(jasmine.any(Number));

expect({}).toBe(jasmine.arrayContaining(['a', 'b']));
expect(['abc']).toBe(jasmine.arrayContaining(['a', 'b']));

jasmine.arrayContaining([]);
new (jasmine.arrayContaining([]))([]);
const arrayContained: boolean = jasmine.arrayContaining([]).asymmetricMatch([]);
const arrayContainedName: string = jasmine.arrayContaining([]).jasmineToString();

jasmine.objectContaining({});
new (jasmine.objectContaining({}))({});
const objectContained: boolean = jasmine.objectContaining({}).jasmineMatches({}, ['abc'], ['def']);
const objectContainedName: string = jasmine.objectContaining({}).jasmineToString();

jasmine.stringMatching('foo');
jasmine.stringMatching(/foo/);
new (jasmine.stringMatching('foo'))({});
const stringContained: boolean = jasmine.stringMatching(/foo/).jasmineMatches({});
const stringContainedName: string = jasmine.stringMatching('foo').jasmineToString();

expect({ abc: 'def' }).toBe(
    jasmine.objectContaining({
        abc: jasmine.arrayContaining([jasmine.any(Date), {}]),
        def: jasmine.objectContaining({
            foo: 'bar',
        }),
        ghi: jasmine.stringMatching('foo'),
    })
);

/* Jasmine spies */

describe('', () => {
    it('', () => {
        let spy = jasmine.createSpy();
        jasmine.createSpy('name');
        jasmine.createSpy('name', () => {});
        jasmine.createSpy('name', (arg: {}) => arg);
        jasmine.createSpy('name', (...args: string[]) => args.join(''));

        spy = jasmine
            .createSpy()
            .and.callFake(() => {})
            .and.callFake((arg: {}) => arg)
            .and.callFake((...args: string[]) => args.join(''))
            .and.callThrough()
            .and.returnValue('jasmine')
            .and.returnValue({})
            .and.returnValues()
            .and.returnValues('jasmine')
            .and.returnValues({}, {})
            .and.stub()
            .and.throwError('message');

        const identity: string = spy.identity;

        let args: any[];
        args = spy.mostRecentCall.args;
        args = spy.argsForCall[0];
        args = spy.calls.allArgs();
        args = spy.calls.argsFor(0);

        const spyCalled: boolean = spy.calls.any();

        const wasCalled: boolean = spy.wasCalled;

        for (const call of [...spy.calls.all(), spy.calls.first(), spy.calls.mostRecent()]) {
            const callType: jasmine.CallInfo = call;
            const callArgs: any[] = call.args;
            const { object, returnValue } = call;
        }

        spy.calls.reset();

        const spyReturn = spy();

        /* Jasmine spy objects */

        let spyObject = {
            abc() {
                return '';
            },
            def: 7,
        };

        spyObject = jasmine.createSpyObj('baseName', ['abc']);
        spyObject = jasmine.createSpyObj<typeof spyObject>('baseName', ['abc']);

        const newSpyObject: typeof spyObject = jasmine.createSpyObj<typeof spyObject>('baseName', ['abc']);
    });
});

/* Jasmine pp */

const pp: string = jasmine.pp({});

/* Jasmine equality testers */

const equalityTesterObject = (first: {}, second: {}) => false;
const equalityTesterString: jasmine.CustomEqualityTester = (first: string, second: string) => first === second;

jasmine.addCustomEqualityTester(equalityTesterObject);
jasmine.addCustomEqualityTester(equalityTesterObject);

/* Jasmine matchers */

const customMatcherFactoriesNone = {};
const customMatcherFactoriesIndex: { [i: string]: jasmine.CustomMatcherFactory } = {};
const customMatcherFactoriesManual = {
    abc: () => ({
        compare: (actual: '', expected: '', ...args: Array<{}>) => ({
            pass: true,
            message: '',
        }),
    }),
    def: (util: jasmine.MatchersUtil, customEqualityTestesr: jasmine.CustomEqualityTester): jasmine.CustomMatcher => ({
        compare<T extends string>(actual: T, expected: T): jasmine.CustomMatcherResult {
            return {
                pass: actual === expected,
                message: () => 'foo',
            };
        },
    }),
};

const matchersUtil1 = {
    buildFailureMessage: () => '',
    contains: (haystack: string, needle: string) => haystack.indexOf(needle) !== -1,
    equals: (a: {}, b: {}) => false,
};

let matchersUtil2: jasmine.MatchersUtil = {
    buildFailureMessage(matcherName: string, isNot: boolean, actual: any, ...expected: any[]): string {
        return `${matcherName}${isNot ? '1' : '0'}${actual}${expected.join('')}`;
    },
    contains<T>(haystack: T[], needle: T, customTesters?: jasmine.CustomEqualityTester[]) {
        return true;
    },
    equals: (a: {}, b: {}, customTesters?: jasmine.CustomEqualityTester[]) => false,
};

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26368

describe.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])('.add(%i, %i)', (a: number, b: number, expected: number) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

interface Case {
    a: number;
    b: number;
    expected: number;
}

describe.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`('$a + $b', ({ a, b, expected }: Case) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

describe.only.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])('.add(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

describe.only.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`('$a + $b', ({ a, b, expected }: Case) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

describe.skip.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])('.add(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

describe.skip.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`('$a + $b', ({ a, b, expected }: Case) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])('.add(%i, %i)', (a, b, expected) => {
    expect(a + b).toBe(expected);
});

test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
    '.add(%i, %i)',
    (a, b, expected) => {
        expect(a + b).toBe(expected);
    },
    5000
);

declare const constCases: [['a', 'b', 'ab'], ['d', 2, 'd2']];
test.each(constCases)('%s + %s', (...args) => {
    // following assertion is skipped because of flaky testing
    // _$ExpectType ["a", "b", "ab"] | ["d", 2, "d2"]
    args;
});

declare const constCasesWithMoreThanTen: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 910, 911]
];

test.each(constCasesWithMoreThanTen)('should fall back with more than 10 args', (...args) => {
    // following assertion is skipped because of flaky testing
    // _$ExpectType [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] | [91, 92, 93, 94, 95, 96, 97, 98, 99, 910, 911]
    args;
});

test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({ a, b, expected }: Case) => {
    expect(a + b).toBe(expected);
});

test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`(
    'returns $expected when $a is added $b',
    ({ a, b, expected }: Case) => {
        expect(a + b).toBe(expected);
    },
    5000
);

test.each([
    [1, "1"],
    [2, "2"]
])("", (a, b) => {
    a; // $ExpectType number
    b; // $ExpectType string
});

test.only.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])('.add(%i, %i)', (a, b, expected) => {
    expect(a + b).toBe(expected);
});

test.only.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({ a, b, expected }: Case) => {
    expect(a + b).toBe(expected);
});

expect('').toHaveProperty('path.to.thing');
