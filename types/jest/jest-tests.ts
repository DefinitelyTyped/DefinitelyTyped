// TODO: Avoid requiring things that don't exist.
declare var require: {
    (s: string): any;
    requireActual(s: string): any;
    requireMock(s: string): any;
};
// TODO: use real jquery types?
declare const $: any;

// Tests based on the Jest website
jest.unmock('../sum');

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        const sum: (a: number, b: number) => number = require('../sum');
        expect(sum(1, 2)).toBe(3);
    });
});

describe('restoreAllMocks', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
});

describe('fetchCurrentUser', () => {
    it('calls the callback when $.ajax requests are finished', () => {
        const fetchCurrentUser = require('../fetchCurrentUser');

        // Create a mock function for our callback
        const callback = jest.fn();
        fetchCurrentUser(callback);

        // Now we emulate the process by which `$.ajax` would execute its own
        // callback
        $.ajax.mock.calls[0 /*first call*/][0 /*first argument*/].success({
            firstName: 'Bobby',
            lastName: '");DROP TABLE Users;--'
        });

        // And finally we assert that this emulated call by `$.ajax` incurred a
        // call back into the mock function we provided as a callback
        expect(callback.mock.calls[0/*first call*/][0/*first arg*/]).toEqual({
            loggedIn: true,
            fullName: 'Bobby ");DROP TABLE Users;--'
        });
    });
});

// unmock is the recommended approach for unmocking...
jest.unmock('../displayUser.js');

describe('displayUser', () => {
    it('displays a user after a click', () => {
        // Set up our document body
        document.body.innerHTML =
            '<div>' +
            '  <span id="username" />' +
            '  <button id="button" />' +
            '</div>';

        const displayUser = require.requireActual('../displayUser');
        const $ = require('jquery');
        const fetchCurrentUser = require('../fetchCurrentUser');

        // Tell the fetchCurrentUser mock function to automatically invoke
        // its callback with some data
        fetchCurrentUser.mockImplementation((cb: (...args: any[]) => any) => {
            cb({
                loggedIn: true,
                fullName: 'Johnny Cash'
            });
        });

        // Use jquery to emulate a click on our button
        $('#button').click();

        // Assert that the fetchCurrentUser function was called, and that the
        // #username span's innter text was updated as we'd it expect.
        expect(fetchCurrentUser).toBeCalled();
        expect($('#username').text()).toEqual('Johnny Cash - Logged In');
    });
});

jest.unmock('../CheckboxWithLabel.js');
describe('CheckboxWithLabel', () => {
    it('changes the text after click', () => {
        const React = require('react/addons');
        const CheckboxWithLabel = require('../CheckboxWithLabel.js');
        const TestUtils = React.addons.TestUtils;

        // Render a checkbox with label in the document
        const checkbox = TestUtils.renderIntoDocument(
            CheckboxWithLabel({
                    labelOn: "On",
                    labelOff: "Off"
                })
        );

        // Verify that it's Off by default
        const label = TestUtils.findRenderedDOMComponentWithTag(
            checkbox, 'label');
        expect(label.getDOMNode().textContent).toEqual('Off');

        // Simulate a click and verify that it is now On
        const input = TestUtils.findRenderedDOMComponentWithTag(
            checkbox, 'input');
        TestUtils.Simulate.change(input);
        expect(label.getDOMNode().textContent).toEqual('On');
    });
});

jest.runAllTicks();
xdescribe('Hooks and Suits', () => {
    let tested: boolean;

    beforeEach(() => {
        tested = false;
    });

    afterEach(() => {
       tested = true;
    });

    test('tested', () => {
       expect(tested).toBeTruthy();
       expect(tested).not.toBeFalsy();
    });

    fit('tested', () => {
       expect(tested).toBeDefined();
       expect(tested).not.toBeUndefined();
    });

    xit('expect null to be null', () => {
       expect(null).toBeNull();
    });

    xit('expect NaN to be NaN', () => {
       expect(NaN).toBeNaN();
    });
});

describe('compartion', () => {
    const sum: (a: number, b: number) => number = require.requireMock('../sum');

    it('compares is 7 + 2 greater than 3', () => {
       expect(sum(7, 2)).toBeGreaterThan(3);
    });

    it('compares is 2 + 7 greater than or equal to 3', () => {
       expect(sum(2, 7)).toBeGreaterThanOrEqual(3);
    });

    it('compares is 3 less than 3 + 4', () => {
       expect(3).toBeLessThan(sum(3, 4));
    });

    it('compares is 3 less than or equal to 4 + 3', () => {
       expect(3).toBeLessThanOrEqual(sum(4, 3));
    });

    it('works sanely with simple decimals', () => {
        expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
    });

    it('works sanely with simple decimals and the default delta', () => {
        expect(0.2 + 0.1).toBeCloseTo(0.3);
    });
});

describe('toThrow API', () => {
   function throwTypeError(): void {
       throw new TypeError('toThrow Definition was out of date');
   }

   it('throws', () => {
      expect(throwTypeError()).toThrow();
      expect(throwTypeError()).toThrowError();
   });

   it('throws TypeError', () => {
       expect(throwTypeError()).toThrow(TypeError);
       expect(throwTypeError()).toThrowError(TypeError);
   });

   it('throws \'Definition was out of date\'', () => {
       expect(throwTypeError()).toThrow(/Definition was out of date/);
       expect(throwTypeError()).toThrowError(/Definition was out of date/);
   });

   it('throws \'toThorow Definition was out of date\'', () => {
       expect(throwTypeError()).toThrow('toThrow Definition was out of date');
       expect(throwTypeError()).toThrowError('toThrow Definition was out of date');
   });
});

describe('Assymetric matchers', () => {
    it('works', () => {
        expect({
            timestamp: 1480807810388,
            text: 'Some text content, but we care only about *this part*',
            color: '#bada55',
            greeting: 'hello, world!',
        }).toEqual({
            timestamp: expect.any(Number),
            text: expect.stringMatching('*this part*'),
            color: expect.stringMatching(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i),
            greeting: expect.stringContaining('hello'),
        });

        const callback = jest.fn();
        expect(callback).toEqual(expect.any(Function));
        callback(5, "test");
        expect(callback).toBeCalledWith(expect.any(Number), expect.any(String));
        const obj = {
            items: [1]
        };
        expect(obj).toEqual(expect.objectContaining({
            items: expect.arrayContaining([
                expect.any(Number)
            ])
        }));

        expect.assertions(4);

        interface Test {
            a: number;
            b: string;
        }

        // It's useful to create expected objects before the test call for refactoring purposes
        // Assymetric matchers must return any in this case to constrain the required type
        const test: Test = {
            a: expect.any(Number),
            b: expect.anything()
        };
        expect(callback).toHaveBeenCalledWith(test);
    });
});

describe('setTimeout', () => {
    it('works as expected', done => {
        jest.setTimeout(1000);

        setTimeout(() => {
            expect(true).toBeTruthy();
            done();
        }, 900);
    });
});

describe('Extending extend', () => {
    it('works', () => {
        expect.extend({
            toBeNumber(received: any, actual: any) {
                const pass = received === actual;
                const message =
                    () => `expected ${received} ${pass ? 'not ' : ''} to be ${actual}`;
                return { message, pass };
            },
            toBeVariadicMatcher(received: any, floor: number, ceiling: number) {
                const pass = received >= floor && received <= ceiling;
                const message =
                    () => `expected ${received} ${pass ? 'not ' : ''} to be within range ${floor}-${ceiling}`;
                return { message, pass };
            },
            toBeTest(received: any, actual: any) {
                this.utils.ensureNoExpected(received);
                this.utils.ensureActualIsNumber(received);
                this.utils.ensureExpectedIsNumber(actual);
                this.utils.ensureNumbers(received, actual);

                return {
                    message: () => `
                    ${this.utils.getType(received).toLowerCase()} \n\n
                    ${this.utils.matcherHint(".not.toBe")} ${this.utils.printExpected(actual)} ${this.utils.printReceived(received)}\n\n
                    `,
                    pass: true
                };
            }
        });
    });
});

describe('missing tests', () => {
    it('creates closures', () => {
       class Closure<T> {
           private arg: T;

           constructor(private readonly fn: (arg: T) => void) {
               this.fn = fn;
           }

           bind(arg: T): void {
               this.arg = arg;
           }

           call(): void {
               this.fn(this.arg);
           }
       }

       type StringClosure = (arg: string) => void;
       const spy: jest.Mock<StringClosure> = jest.fn<StringClosure>();
       const closure: Closure<string> = new Closure<string>(spy);
       closure.bind('jest');
       closure.call();
       expect(spy).lastCalledWith('jest');
       expect(spy).toBeCalledWith('jest');
       expect(jest.isMockFunction(spy)).toBeTruthy();
   });

    it('tests all missing Mocks functionality', () => {
       type FruitsGetter = () => string[];
       const mock: jest.Mock<FruitsGetter> = jest.fn<FruitsGetter>();
       mock.mockImplementationOnce(() => ['Orange', 'Apple', 'Plum']);
       jest.setMock('./../tesks/getFruits', mock);
       const getFruits: FruitsGetter = require('./../tesks/getFruits');
       expect(getFruits()).toContain('Orange');
       mock.mockReturnValueOnce(['Apple', 'Plum']);
       expect(mock()).not.toContain('Orange');
       const myBeverage: any = {delicious: true, sour: false};
       expect(myBeverage).toContainEqual({delicious: true, sour: false});
       mock.mockReturnValue([]); // Deprecated: Use jest.fn(() => value) instead.
       mock.mockClear();
       const thisMock: jest.Mock<any> = jest.fn<any>().mockReturnThis();
       expect(thisMock()).toBe(this);
   });

    it('tests mock name functionality', () => {
        const mock: jest.Mock = jest.fn();
        mock.mockName('Carrot');
        expect(mock.getMockName()).toBe('Carrot');
    });

    it('creates snapshoter', () => {
       jest.disableAutomock().mock('./render', () => jest.fn((): string => "{Link to: \"facebook\"}"), { virtual: true });
       const render: () => string = require('./render');
       expect(render()).toMatch(/Link/);
       jest.enableAutomock();
   });

    it('runs only pending timers', () => {
        jest.useRealTimers();
        setTimeout(() => expect(1).not.toEqual(0), 3000);
        jest.runOnlyPendingTimers().runTimersToTime(300);
   });

    it('runs all timers', () => {
        jest.clearAllTimers();
        jest.useFakeTimers();
        setTimeout(() => expect(0).not.toEqual(1), 3000);
        jest.runAllTimers();
   });

    it('cleares cache', () => {
       const sum1 = require('../sum');
       jest.resetModules();
       const sum2 = require('../sum');
       expect(sum1).not.toBe(sum2);
   });
});

describe('toMatchSnapshot', () => {
   it('compares snapshots', () => {
        expect({ type: 'a', props: { href: 'https://www.facebook.com/' }, children: [ 'Facebook' ] }).toMatchSnapshot();
    });

   it('can give name to snapshot', () => {
        expect({ type: 'a', props: { href: 'https://www.facebook.com/' }, children: [ 'Facebook' ] }).toMatchSnapshot('given name');
   });
});

describe('toThrowErrorMatchingSnapshot', () => {
   it('compares snapshots', () => {
        expect(() => { throw new Error('descriptiton'); }).toThrowErrorMatchingSnapshot();
    });
});

const testSerializerPluginString = "set by testSerializerPlugin";
let testSerializerPluginCallCount = 0;
expect.addSnapshotSerializer({
  print(val, serialize, indent, opts, colors) {
    val.willOverwrite = testSerializerPluginString;
    testSerializerPluginCallCount += 1;
    return 'plugin called: ' + serialize(val.willOverwrite);
  },
  test(val) {
    return val && val.willOverwrite && val.willOverwrite !== testSerializerPluginString;
  },
});
describe('addSnapshotSerializer', () => {
    it('the plugin does its work', () => {
        testSerializerPluginCallCount = 0;
        expect({ willOverwrite: { x: 1, y: 2, } }).toMatchSnapshot();
        expect({ willOverwrite: "this will get overwritten by testSerializerPlugin" }).toMatchSnapshot();
        expect({ willOverwrite: "so will this" }).toMatchSnapshot();
        expect({ foo: "this will not" }).toMatchSnapshot();
        expect(testSerializerPluginCallCount).toBe(3);
    });
});

function testInstances() {
    const mockFn = jest.fn<(...args: any[]) => any>();
    const a = new mockFn();
    const b = new mockFn();

    mockFn.mock.instances[0] === a; // true
    mockFn.mock.instances[1] === b; // true
}

function testMockImplementation() {
    const mockFn = jest.fn<(...args: any[]) => any>().mockImplementation((scalar: number): number => {
        return 42 + scalar;
    });

    const a = mockFn(0);
    const b = mockFn(1);

    a === 42; // true
    b === 43; // true

    mockFn.mock.calls[0][0] === 0; // true
    mockFn.mock.calls[1][0] === 1; // true
}

// Test from jest Docs: <http://facebook.github.io/jest/docs/manual-mocks.html#content>
describe('genMockFromModule', () => {
   // Interfaces:
    interface MockFiles {
        [index: string]: string;
    }

    interface MockedFS {
        readdirSync(dir: string): string[];
        __setMockFiles(newMockFiles: MockFiles): void ;
    }

    // ------------------------------------------------------------------------------------
    // FileSummarizer.ts

    const fs = require('fs');

    function summarizeFilesInDirectorySync(directory: string): string[] {
      return fs.readdirSync(directory).map((fileName: string) => ({
        fileName,
        directory,
      }));
    }

    // export default summarizeFilesInDirectorySync; // For sake of compilation

    // ------------------------------------------------------------------------------------
    // __mocks__/fs.js

    const path = require('path');

    const mockedFS: MockedFS = jest.genMockFromModule<MockedFS>('fs');

    let mockFiles: any = Object.create(null);
    function __setMockFiles(newMockFiles: MockFiles): void {
      mockFiles = Object.create(null);
      for (const file in newMockFiles) {
        const dir: string = path.dirname(file);

        if (!mockFiles[dir]) {
          mockFiles[dir] = [];
        }
        mockFiles[dir].push(path.basename(file));
      }
    }

    function readdirSync(directoryPath: string): string[] {
      return mockFiles[directoryPath] || [];
    }

    mockedFS.readdirSync = readdirSync;
    mockedFS.__setMockFiles = __setMockFiles;

    // export = mockedFS; // For sake of compilation
    // ------------------------------------------------------------------------------------
    // __tests__/FileSummarizer-test.js

    jest.mock('fs');

    describe('listFilesInDirectorySync', () => {
      const MOCK_FILE_INFO: MockFiles = {
        '/path/to/file1.js': 'console.log("file1 contents");',
        '/path/to/file2.txt': 'file2 contents',
      };

      beforeEach(() => {
        // Set up some mocked out file info before each test
        (require('fs') as MockedFS).__setMockFiles(MOCK_FILE_INFO);
      });

      it('includes all files in the directory in the summary', () => {
        const FileSummarizer: (dir: string) => string[] = require('../FileSummarizer');
        const fileSummary = FileSummarizer('/path/to');

        expect(fileSummary.length).toBe(2);
      });
    });
});

/**
 * Pass strictNullChecks
 */
describe('strictNullChecks', () => {
    it('does not complain when using done callback', (done) => {
        done();
    });
});

describe('beforeEach with timeout', () => {
    beforeEach(() => {
        // this shouldn't take more than a second
    }, 1000);
});

class TestApi {
    constructor() { }
    testProp: boolean;
    private readonly anotherProp: string;
    testMethod(a: number): string { return ""; }
}

declare function mockedFunc(a: number): string;

declare function mockedFuncWithApi(api: TestApi): void;

describe('Mocked type', () => {
    it('Works', () => {
        const mock: jest.Mocked<TestApi> = new TestApi() as any;
        mock.testProp;
        mock.testMethod.mockImplementation(() => 'test');
        mock.testMethod(5).toUpperCase();

        mockedFuncWithApi(mock);
    });
});

describe('Mocks', () => {
    it('jest.fn() without args is a function type', () => {
        const test = jest.fn();
        test();
        new test();
        test.mock.instances[0];
        test.mockImplementation(() => { });
    });

    it('jest.fn() with returned object infers type', () => {
        const testMock = jest.fn(() => ({ a: 5, test: jest.fn() }));

        testMock(5, 5, 'a');
        testMock.mockImplementation(() => { });
        testMock.caller;

        const ins = new testMock();
        ins.a;
        ins.test();
        ins.test.mockImplementation(() => 5);
        ins.test.mock.calls;

        const anotherMock = jest.fn(() => {
            const api: Partial<TestApi> = {
                testMethod: jest.fn()
            };
            return api;
        });
        const anotherIns: jest.Mocked<TestApi> = new anotherMock() as any;
        anotherIns.testMethod.mockImplementation(() => 1);
    });

    it('jest.fn() accepts constructor arguments', () => {
        interface TestLog {
            log(...msg: any[]): void;
        }

        class LogMock extends jest.fn<TestLog>((verbose?: boolean) => {
            const mockLog = () => {
                if (verbose) {
                    return jest.fn((...args) => {
                        const subj = args.shift() || "";
                        console.log(subj, ...args);
                    });
                }
                return jest.fn();
            };

            return {
                log: mockLog()
            };
        }) {
        }

        const nonVerboseLog = new LogMock();
        nonVerboseLog.log("this is completely catched by jest");
        expect(nonVerboseLog.log).toBeCalledWith("this is completely catched by jest");
        const verboseLog = new LogMock(true);
        verboseLog.log("this should also be printed to the console");
        expect(verboseLog.log).toBeCalledWith("this should also be printed to the console");
    });
});

// https://facebook.github.io/jest/docs/en/expect.html#resolves
describe('resolves', () => {
    it('unwraps the expected Promise', () => {
        const expectation = expect(Promise.resolve('test')).resolves.toEqual('test');
        expect(expectation instanceof Promise).toBeTruthy();
        return expectation;
    });

    it('unwraps a .toHaveBeenCalledX', done => {
        expect.assertions(2);

        const fn = jest.fn();
        return expect(Promise.resolve(fn)).resolves.toHaveBeenCalledTimes(0).then(val => {
            expect(val).toEqual(true);
            done();
        });
    });

    it('unwraps a not.toHaveBeenCalledX', done => {
        expect.assertions(2);

        const fn = jest.fn();
        return expect(Promise.resolve(fn)).resolves.not.toHaveBeenCalledTimes(1).then(val => {
            expect(val).toEqual(true);
            done();
        });
    });
});

// https://facebook.github.io/jest/docs/en/expect.html#rejects
describe('rejects', () => {
    it('unwraps the expected Promise', () => {
        const expectation = expect(Promise.reject(new Error('error'))).rejects.toMatch('error');
        expect(expectation instanceof Promise).toBeTruthy();
        return expectation;
    });
});

class MyTransformer implements jest.Transformer {
    process(text: string, path: string) {
        return `
            // some comments
            ${text}
        `;
    }
}

class MyReporter implements jest.Reporter {
    onRunStart() {
        console.log('hello world');
    }
}

declare const testResult: jest.TestResult;
const myTestRunner: jest.TestFramework = () => Promise.resolve(testResult);

const testResultsProcessor: jest.TestResultsProcessor = result => ({...result, numFailedTests: 1});

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18826
test('moduleName 1', () => {
    jest.doMock('../moduleName', () => {
        return jest.fn(() => 1);
    });
    const moduleName = require('../moduleName');
    expect(moduleName()).toEqual(1);
});
test('moduleName 2', () => {
    jest.doMock('../moduleName', () => {
        return jest.fn(() => 2);
    });
    const moduleName = require('../moduleName');
    expect(moduleName()).toEqual(2);
});
