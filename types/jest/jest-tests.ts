/* Basic matchers */

describe('', () => {
    it('', () => {
        expect(BigInt(0)).toBeGreaterThan(BigInt(1));

        expect(BigInt(0)).toBeGreaterThanOrEqual(BigInt(1));

        expect(BigInt(0)).toBeLessThan(BigInt(1));

        expect(BigInt(0)).toBeLessThanOrEqual(BigInt(1));
    });
});

/* Lifecycle events */

beforeAll(() => {});
beforeAll((done) => {done(); });
// @ts-expect-error
beforeAll((done) => Promise.resolve());

beforeEach(() => {});
beforeEach((done) => {done(); });
// @ts-expect-error
beforeEach((done) => Promise.resolve());

afterAll(() => {});
afterAll(done => {
    done();
});
// @ts-expect-error
afterAll(done => Promise.resolve());

afterEach(() => {});
afterEach((done) => { done(); });
// @ts-expect-error
afterEach((done) => Promise.resolve());

/* describe */

describe(0, () => {});
describe('name', () => {});
describe(
    () => {},
    () => {},
);

describe.only(0, () => {});
describe.only('name', () => {});
describe.only(
    () => {},
    () => {},
);

describe.skip(0, () => {});
describe.skip('name', () => {});
describe.skip(
    () => {},
    () => {},
);

fdescribe(0, () => {});
fdescribe('name', () => {});
fdescribe(
    () => {},
    () => {},
);

xdescribe(0, () => {});
xdescribe('name', () => {});
xdescribe(
    () => {},
    () => {},
);

/* it */

it('name', () => {});
it('name', async () => {});
it('name', () => {}, 9001);
it('name', async () => {}, 9001);
it('name', (callback) => {}, 9001);

it.only('name', () => {});
it.only('name', async () => {});
it.only('name', () => {}, 9001);
it.only('name', async () => {}, 9001);
it.only('name', (callback) => {}, 9001);

it.failing('name', () => {});
it.failing('name', async () => {});
it.failing('name', () => {}, 9001);
it.failing('name', async () => {}, 9001);
it.failing('name', (callback) => {}, 9001);
it.only.failing('name', () => {});
it.skip.failing('name', () => {});

it.skip('name', () => {});
it.skip('name', async () => {});
it.skip('name', () => {}, 9001);
it.skip('name', async () => {}, 9001);
it.skip('name', (callback) => {}, 9001);

it.todo('name');

it.concurrent('name', async () => {});
it.concurrent('name', async () => {}, 9001);

fit('name', () => {});
fit('name', async () => {});
fit('name', () => {}, 9001);
fit('name', async () => {}, 9001);
fit('name', (callback) => {}, 9001);

fit.failing('name', () => {});
fit.failing('name', async () => {});
fit.failing('name', () => {}, 9001);
fit.failing('name', async () => {}, 9001);
fit.failing('name', (callback) => {}, 9001);

xit('name', () => {});
xit('name', async () => {});
xit('name', () => {}, 9001);
xit('name', async () => {}, 9001);
xit('name', (callback) => {}, 9001);

xit.failing('name', () => {});
xit.failing('name', async () => {});
xit.failing('name', () => {}, 9001);
xit.failing('name', async () => {}, 9001);
xit.failing('name', (callback) => {}, 9001);

test('name', () => {});
test('name', async () => {});
test('name', () => {}, 9001);
test('name', async () => {}, 9001);
test('name', (callback) => {}, 9001);

test.only('name', () => {});
test.only('name', async () => {});
test.only('name', () => {}, 9001);
test.only('name', async () => {}, 9001);
test.only('name', (callback) => {}, 9001);

test.failing('name', () => {});
test.failing('name', async () => {});
test.failing('name', () => {}, 9001);
test.failing('name', async () => {}, 9001);
test.failing('name', (callback) => {}, 9001);
test.only.failing('name', () => {});
test.skip.failing('name', () => {});

test.skip('name', () => {});
test.skip('name', async () => {});
test.skip('name', () => {}, 9001);
test.skip('name', async () => {}, 9001);
test.skip('name', (callback) => {}, 9001);

test.todo('name');

test.concurrent('name', async () => {});
test.concurrent('name', async () => {}, 9001);

xtest('name', () => {});
xtest('name', async () => {});
xtest('name', () => {}, 9001);
xtest('name', async () => {}, 9001);
xtest('name', (callback) => {}, 9001);

xtest.failing('name', () => {});
xtest.failing('name', async () => {});
xtest.failing('name', () => {}, 9001);
xtest.failing('name', async () => {}, 9001);
xtest.failing('name', (callback) => {}, 9001);

/* Done callbacks */

describe('', () => {
    it('', (callback): void => {
        callback();
        callback('');
    });
});

/* Top-level jest namespace functions */

jest.autoMockOff();
jest.autoMockOn();
jest.clearAllMocks();
jest.clearAllTimers();
jest.resetAllMocks();
jest.restoreAllMocks();
jest.clearAllTimers();
jest.deepUnmock('moduleName');
jest.disableAutomock();
jest.doMock('moduleName');
jest.doMock('moduleName', jest.fn());
jest.doMock('moduleName', jest.fn(), {});
jest.doMock('moduleName', jest.fn(), { virtual: true });
jest.dontMock('moduleName');
jest.enableAutomock();
jest.mock('moduleName');
jest.mock('moduleName', jest.fn());
jest.mock('moduleName', jest.fn(), {});
jest.mock('moduleName', jest.fn(), { virtual: true });
jest.resetModules();
jest.isolateModules(() => {});
jest.retryTimes(3, { logErrorsBeforeRetry: true });
jest.runAllImmediates();
jest.runAllTicks();
jest.runAllTimers();
jest.runOnlyPendingTimers();
jest.advanceTimersByTime(9001);
jest.setMock('moduleName', {});
jest.setTimeout(9001);
jest.unmock('moduleName');
jest.useFakeTimers();
jest.useRealTimers();

jest.advanceTimersToNextTimer();
jest.advanceTimersToNextTimer(2);

// https://jestjs.io/docs/configuration#faketimers-object
jest.useFakeTimers();
jest.useFakeTimers({ legacyFakeTimers: false });
jest.useFakeTimers({ timerLimit: 50 });
// @ts-expect-error
jest.useFakeTimers('legacy');
// @ts-expect-error
jest.useFakeTimers('modern');
// @ts-expect-error
jest.useFakeTimers('foo');

// https://jestjs.io/docs/en/jest-object#jestsetsystemtimenow-number--date
jest.setSystemTime();
jest.setSystemTime(0);
jest.setSystemTime(new Date(0));
// @ts-expect-error
jest.setSystemTime('foo');

// https://jestjs.io/docs/en/jest-object#jestgetrealsystemtime
const realSystemTime1: number = jest.getRealSystemTime();
// @ts-expect-error
const realSystemTime2: number = jest.getRealSystemTime('foo');

// https://jestjs.io/docs/en/jest-object#jestrequireactualmodulename
// $ExpectType unknown
jest.requireActual('./thisReturnsTheActualModule');

// https://jestjs.io/docs/en/jest-object#jestrequiremockmodulename
// $ExpectType unknown
jest.requireMock('./thisAlwaysReturnsTheMock');

/* Mocks and spies */

// $ExpectType Mock<() => undefined>
const mock2 = jest.fn(() => undefined);
// $ExpectType Mock<() => string>
const mock3 = jest.fn(() => 'abc');
// $ExpectType Mock<() => "abc">
const mock4 = jest.fn((): 'abc' => 'abc');
// $ExpectType Mock<(...args: string[]) => string>
const mock5 = jest.fn((...args: string[]) => args.join(''));

interface TestApi {
    test(x: number): string;
}

// @ts-expect-error
mock7('abc');
// @ts-expect-error
mock7.mockImplementation((arg: string) => 1);

const isStringMock: boolean = jest.isMockFunction('foo');

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
jest.fn<() => Promise<number>>().mockResolvedValue(1);

interface SpyInterface {
    prop?: number | undefined;
    method?: ((arg1: boolean) => void) | undefined;
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

// @ts-expect-error
jest.spyOn(spiedTarget, 'setValue', 'get');
// @ts-expect-error
jest.spyOn(spiedTarget, 'setValue', undefined);
// @ts-expect-error
jest.spyOn(spiedTarget2, 'value');

const spy1 = jest.spyOn(spiedTarget, 'returnsVoid');
const spy3 = jest.spyOn(spiedTarget, 'returnsString');
const spy1Name: string = spy1.getMockName();

const spy1Calls: Array<[]> = spy1.mock.calls;

spy1.mockClear();
spy1.mockReset();

const spy3Mock = spy3
    .mockImplementation(() => '')
    // @ts-expect-error
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
    },
};
jest.spyOn(spiedPromiseTarget, 'resolvesString')
    .mockResolvedValue('value')
    .mockResolvedValueOnce('value')
    .mockRejectedValue('value')
    .mockRejectedValueOnce('value');

// @ts-expect-error
jest.mocked();

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
    test5(x: Type1): Promise<void> {
        return Promise.resolve();
    }
}

// @ts-expect-error
mocked.test4.mockResolvedValue({ a: 1 });
// @ts-expect-error
mocked.test4.mockResolvedValueOnce({ a: 1 });
// @ts-expect-error
mocked.test4.mockResolvedValue(Promise.resolve({ a: 1 }));
// @ts-expect-error
mocked.test4.mockResolvedValueOnce(Promise.resolve({ a: 1 }));
// @ts-expect-error
mocked.test4.mockRejectedValue(new Error());
// @ts-expect-error
mocked.test4.mockRejectedValueOnce(new Error());

class TestClass {
    testClassMethod(str: string, num: number): boolean {
        return true;
    }

    constructor(stringValue: string) {}
}

/* getState and setState */
// @ts-expect-error
expect.setState(true);
const expectState = expect.getState();
// $ExpectType string | undefined
expectState.currentTestName;
// $ExpectType string | undefined
expectState.testPath;
// $ExpectType boolean | undefined
expectState.expand;
// $ExpectType number
expectState.assertionCalls;
// $ExpectType number | null
expectState.expectedAssertionsNumber;
// $ExpectType boolean
expectState.isExpectingAssertions;
// $ExpectType Error[]
expectState.suppressedErrors;

/* Snapshot serialization */

expect.addSnapshotSerializer({
    print: (value: unknown) => '',
    test: (value: {}) => value === value,
});

expect.addSnapshotSerializer({
    print: (value: unknown, serialize: (val: {}) => string, indent: (str: string) => string, opts: {}) => '',
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

expect.extend({});
// @ts-expect-error
const customMatcherResultMessage: jest.CustomMatcherResult['message'] = 'msg';

expect.extend({
    foo() {
        const isNot: boolean | undefined = this.isNot;
        const expand: boolean | undefined = this.expand;

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

        const printedWithType: string = this.utils.printWithType('name', {}, value => '');

        const stringified: string = this.utils.stringify({});
        const stringifiedWithMaxDepth: string = this.utils.stringify({}, 3);

        const equals: boolean = this.equals({}, {});

        this.dontThrow();
        const currentTestName: string | undefined = this.currentTestName;
        const testPath: string | undefined = this.testPath;

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
        // @ts-expect-error
        expect('').not.not;
        // @ts-expect-error
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

        // @ts-expect-error
        expect(jest.fn()).toBeCalledWith<[string, number]>(1, 'two');
        // @ts-expect-error
        expect({}).toEqual<{ p1: string; p2: number }>({ p1: 'hello' });

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

        expect(1.230000003).toBeCloseTo(1.23);
        expect(1.230000003).toBeCloseTo(1.23, 2);

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
        expect('abc').toContain('bc');

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

        expect({}).toMatchSnapshot();
        expect({}).toMatchSnapshot('snapshotName');
        expect({ abc: 'def' }).toMatchSnapshot({ abc: expect.any(String) }, 'snapshotName');
        expect({
            one: 1,
            two: '2',
            three: 3,
            four: { four: 3 },
            five: 5.0000001,
            date: new Date(),
        }).toMatchSnapshot({
            one: expect.any(Number),
            // Leave 'two' to the auto-generated snapshot
            three: 3,
            four: { four: expect.any(Number) },
            five: expect.closeTo(5, 1),
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
        expect(() => {}).toThrowErrorMatchingSnapshot('snapshotName');
        expect(willThrow).toThrowErrorMatchingSnapshot();
        expect(willThrow).toThrowErrorMatchingSnapshot('snapshotName');
        expect(jest.fn()).toThrowErrorMatchingSnapshot();
        expect(jest.fn()).toThrowErrorMatchingSnapshot('snapshotName');
        expect(jest.fn(willThrow)).toThrowErrorMatchingSnapshot();
        expect(jest.fn(willThrow)).toThrowErrorMatchingSnapshot('snapshotName');

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

        expect(Promise.reject('jest'))
            .rejects.toEqual('jest')
            .then(() => {});
        expect(Promise.reject('jest'))
            .rejects.not.toEqual('other')
            .then(() => {});

        expect(Promise.resolve('jest'))
            .resolves.toEqual('jest')
            .then(() => {});
        expect(Promise.resolve('jest'))
            .resolves.not.toEqual('other')
            .then(() => {});
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
            }),
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

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26368

describe.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', (a: number, b: number, expected: number) => {
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
`('$a + $b', ({ a, b, expected }) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

describe.only.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

describe.only.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`('$a + $b', ({ a, b, expected }) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

describe.skip.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

describe.skip.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`('$a + $b', ({ a, b, expected }) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

test.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
    expect(a + b).toBe(expected);
});

test.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])(
    '.add(%i, %i)',
    (a, b, expected) => {
        expect(a + b).toBe(expected);
    },
    5000,
);

declare const constCases: [['a', 'b', 'ab'], ['d', 2, 'd2']];
test.each(constCases)('%s + %s', (...args) => {
    // following assertion is skipped because of flaky testing
    // _$ExpectType ["a", "b", "ab"] | ["d", 2, "d2"]
    args;
});

declare const constCasesWithMoreThanTen: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 910, 911],
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
`('returns $expected when $a is added $b', ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
});

test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`(
    'returns $expected when $a is added $b',
    ({ a, b, expected }) => {
        expect(a + b).toBe(expected);
    },
    5000,
);

test.each([
    [1, '1'],
    [2, '2'],
])('', (a, b) => {
    a; // $ExpectType number
    b; // $ExpectType string
});

test.only.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
    expect(a + b).toBe(expected);
});

test.only.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
});

expect('').toHaveProperty('path.to.thing');
expect('').toHaveProperty('path.to.thing', {});

/* Test function can return a promise */

test(`returns a Promise<boolean>`, () => {
    return Promise.resolve(true);
});

test(`returns a Promise<{ isAnObject: boolean }>`, () => {
    return Promise.resolve({ isAnObject: true });
});

test(`returns a Promise<any>`, () => {
    return Promise.resolve('any' as any);
});

/* Test function can take and call the done callback function */

test(`uses done`, done => {
    done();
});

/* Test function can do nothing */

test(`does nothing`, () => {
    // noop
});

/* Test function should not return non-promise */

// @ts-expect-error
test(`returns a boolean`, () => {
    return true;
});

// @ts-expect-error
test(`returns a number`, () => {
    return 3;
});

// @ts-expect-error
test(`returns an object`, () => {
    return {
        isAnObject: true,
    };
});

/* Test function should not return promise and takes done callback function */

// @ts-expect-error
test(`returns a Promise<boolean> and takes done`, done => {
    return Promise.resolve(true);
});

// @ts-expect-error
test(`returns a Promise<{ isAnObject: boolean }> and takes done`, done => {
    return Promise.resolve({ isAnObject: true });
});

// @ts-expect-error
test(`returns a Promise<any> and takes done`, done => {
    return Promise.resolve('any' as any);
});

// @ts-expect-error
test(`async function takes done`, async done => {
    done();
});

test('import.meta.jest replaces the global jest in ESM', () => {
    // @ts-expect-error
    // ts(1343): The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'es2022', 'esnext', 'system', 'node16', or 'nodenext'.

    // tslint:disable-next-line: whitespace
    const importMetaJest = import.meta.jest;

    importMetaJest.fn();
});
