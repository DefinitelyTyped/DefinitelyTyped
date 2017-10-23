// TODO: Avoid requiring things that don't exist.
declare var require: {
    (s: string): any;
    requireActual(s: string): any;
    requireMock(s: string): any;
};
// TODO: use real jquery types?
declare var $: any;

// Tests based on the Jest website
jest.unmock('../sum');

describe('sum', function() {
    it('adds 1 + 2 to equal 3', function() {
        var sum: (a: number, b: number) => number = require('../sum');
        expect(sum(1, 2)).toBe(3);
    });
});

describe('fetchCurrentUser', function() {
    it('calls the callback when $.ajax requests are finished', function() {
        var $ = require('jquery');
        var fetchCurrentUser = require('../fetchCurrentUser');

        // Create a mock function for our callback
        var callback = jest.fn();
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
jest.unmock('../displayUser.js')

describe('displayUser', function() {
    it('displays a user after a click', function() {
        // Set up our document body
        document.body.innerHTML =
            '<div>' +
            '  <span id="username" />' +
            '  <button id="button" />' +
            '</div>';

        var displayUser = require.requireActual('../displayUser');
        var $ = require('jquery');
        var fetchCurrentUser = require('../fetchCurrentUser');

        // Tell the fetchCurrentUser mock function to automatically invoke
        // its callback with some data
        fetchCurrentUser.mockImplementation(function(cb: Function) {
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
describe('CheckboxWithLabel', function() {
    it('changes the text after click', function() {
        var React = require('react/addons');
        var CheckboxWithLabel = require('../CheckboxWithLabel.js');
        var TestUtils = React.addons.TestUtils;

        // Render a checkbox with label in the document
        var checkbox = TestUtils.renderIntoDocument(
            CheckboxWithLabel({
                    labelOn: "On",
                    labelOff: "Off"
                })
        );

        // Verify that it's Off by default
        var label = TestUtils.findRenderedDOMComponentWithTag(
            checkbox, 'label');
        expect(label.getDOMNode().textContent).toEqual('Off');

        // Simulate a click and verify that it is now On
        var input = TestUtils.findRenderedDOMComponentWithTag(
            checkbox, 'input');
        TestUtils.Simulate.change(input);
        expect(label.getDOMNode().textContent).toEqual('On');
    });
});

jest.runAllTicks();
xdescribe('Hooks and Suits', function () {
    let tested: boolean;

    beforeEach(function () {
        tested = false;
    });

    afterEach(function () {
       tested = true;
    });

    test('tested', function () {
       expect(tested).toBeTruthy();
       expect(tested).not.toBeFalsy();
    });

    fit('tested', function () {
       expect(tested).toBeDefined();
       expect(tested).not.toBeUndefined();
    });

    xit('expect null to be null', function () {
       expect(null).toBeNull();
    });
});

describe('compartion', function () {
    var sum: (a: number, b: number) => number = require.requireMock('../sum');

    it('compares is 7 + 2 greater than 3', function () {
       expect(sum(7, 2)).toBeGreaterThan(3);
    });

    it('compares is 2 + 7 greater than or equal to 3', function () {
       expect(sum(2, 7)).toBeGreaterThanOrEqual(3);
    });

    it('compares is 3 less than 3 + 4', function () {
       expect(3).toBeLessThan(sum(3, 4));
    });

    it('compares is 3 less than or equal to 4 + 3', function () {
       expect(3).toBeLessThanOrEqual(sum(4, 3));
    });

    it('works sanely with simple decimals', function () {
        expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
    });
});

describe('toThrow API', function () {
   function throwTypeError(): void {
       throw new TypeError('toThrow Definition was out of date');
   }

   it('throws', function () {
      expect(throwTypeError()).toThrow();
   });

   it('throws TypeError', function () {
       expect(throwTypeError()).toThrowError(TypeError);
   });

   it('throws \'Definition was out of date\'', function () {
      expect(throwTypeError()).toThrowError(/Definition was out of date/);
   });

   it('throws \'toThorow Definition was out of date\'', function () {
      expect(throwTypeError()).toThrowError('toThrow Definition was out of date');
   });
});

describe('missing tests', function () {
    it('creates closures', function () {
       class Closure<T> {
           private arg: T;

           public constructor(private fn: (arg: T) => void) {
               this.fn = fn;
           }

           public bind(arg: T): void {
               this.arg = arg;
           }

           public call(): void {
               this.fn(this.arg);
           }
       }

       type StringClosure = (arg: string) => void;
       let spy: jest.Mock<StringClosure> = jest.fn<StringClosure>();
       let closure: Closure<string> = new Closure<string>(spy);
       closure.bind('jest');
       closure.call();
       expect(spy).lastCalledWith('jest');
       expect(spy).toBeCalledWith('jest');
       expect(jest.isMockFunction(spy)).toBeTruthy();
   });

   it('tests all mising Mocks functionality', function () {
       type FruitsGetter = () => Array<string>;
       let mock: jest.Mock<FruitsGetter> = jest.fn<FruitsGetter>();
       mock.mockImplementationOnce(() => ['Orange', 'Apple', 'Plum'])
       jest.setMock('./../tesks/getFruits', mock);
       const getFruits: FruitsGetter = require('./../tesks/getFruits');
       expect(getFruits()).toContain('Orange');
       mock.mockReturnValueOnce(['Apple', 'Plum']);
       expect(mock()).not.toContain('Orange');
       const myBeverage: any = {delicious: true, sour: false};
       expect(myBeverage).toContainEqual({delicious: true, sour: false});
       mock.mockReturnValue([]); //Deprecated: Use jest.fn(() => value) instead.
       mock.mockClear();
       let thisMock: jest.Mock<any> = jest.fn<any>().mockReturnThis();
       expect(thisMock()).toBe(this);
   });

   it('creates snapshoter', function () {
       jest.disableAutomock().mock('./render', () => jest.fn((): string => "{Link to: \"facebook\"}"), { virtual: true });
       const render: () => string = require('./render');
       expect(render()).toMatch(/Link/);
       jest.enableAutomock();
   });

   it('runs only pending timers', function () {
        jest.useRealTimers();
        setTimeout(() => expect(1).not.toEqual(0), 3000);
        jest.runOnlyPendingTimers().runTimersToTime(300);
   });

   it('runs all timers', function () {
        jest.clearAllTimers();
        jest.useFakeTimers();
        setTimeout(() => expect(0).not.toEqual(1), 3000);
        jest.runAllTimers();
   });

   it('cleares cache', function () {
       const sum1 = require('../sum');
       jest.resetModules();
       const sum2 = require('../sum');
       expect(sum1).not.toBe(sum2);
   })
});

describe('toMatchSnapshot', function () {
   it('compares snapshots', function () {
        expect({ type: 'a', props: { href: 'https://www.facebook.com/' }, children: [ 'Facebook' ] }).toMatchSnapshot();
    });
});

describe('toThrowErrorMatchingSnapshot', function () {
   it('compares snapshots', function () {
        expect(() => { throw new Error('descriptiton') }).toThrowErrorMatchingSnapshot();
    });
});

function testInstances() {
    var mockFn = jest.fn<Function>();
    var a = new mockFn();
    var b = new mockFn();

    mockFn.mock.instances[0] === a; // true
    mockFn.mock.instances[1] === b; // true
}

function testMockImplementation() {
    var mockFn = jest.fn<Function>().mockImplementation(function (scalar:number):number {
        return 42 + scalar;
    });

    var a = mockFn(0);
    var b = mockFn(1);

    a === 42; // true
    b === 43; // true

    mockFn.mock.calls[0][0] === 0; // true
    mockFn.mock.calls[1][0] === 1; // true
}

// Test from jest Docs: <http://facebook.github.io/jest/docs/manual-mocks.html#content>
describe('genMockFromModule', function () {
   // Interfaces:
    interface MockFiles {
        [index: string]: string;
    }

    interface MockedFS {
        readdirSync: (dir: string) => string[];
        __setMockFiles: (newMockFiles: MockFiles) => void ;
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

    //export default summarizeFilesInDirectorySync; // For sake of compilation

    // ------------------------------------------------------------------------------------
    // __mocks__/fs.js

    const path = require('path');

    const mockedFS: MockedFS = jest.genMockFromModule<MockedFS>('fs');

    let mockFiles: any = Object.create(null);
    function __setMockFiles(newMockFiles: MockFiles): void {
      mockFiles = Object.create(null);
      for(const file in newMockFiles) {
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

    //export = mockedFS; // For sake of compilation
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
describe('strictNullChecks', function () {
    it('does not complain when using done callback', (done) => {
        done();
    })
});
