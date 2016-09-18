/// <reference path="jest.d.ts" />

interface NodeRequire {
    (id: string): any;
}

declare var require: NodeRequire;

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
// ...but dontMock also still works.
jest.dontMock('jquery');

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
        var fetchCurrentUser: jest.Mock<any> = require('../fetchCurrentUser');

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

declare var inchesOfRain: Function;
declare var fetchBeverageList: () => PromiseLike<any>;

it('did not rain', () => {
  expect(inchesOfRain()).toBe(0);
});

const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  it('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  it('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
})

describe('my beverage list', () => {
  it('has lemon in it', () => {
    return fetchBeverageList().then((list) => {
      expect(list).toContain('lemon');
    });
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

//API tests

describe('aliases and narrowing', () => {
    fit('name', () => { });
    xit('name', () => { });
    test('name', () => { });
    xtest('name', () => { });
    it.only('name', () => { });
    it.skip('name', () => { });
    test.only('name', () => { });
    test.skip('name', () => { });
    fit('name', done => { done(); });
    xit('name', done => { done(); });
    test('name', done => { done(); });
    xtest('name', done => { done(); });
    it.only('name', done => { done(); });
    it.skip('name', done => { done(); });
    test.only('name', done => { done(); });
    test.skip('name', done => { done(); });
    fdescribe('name', () => { });
    xdescribe('name', () => { });
    describe.only('name', () => { });
    describe.skip('name', () => { });
});

describe('lifecycle', () => {
    beforeAll(() => { });
    beforeAll(done => { done(); });
    beforeEach(() => { });
    beforeEach(done => { done(); });
    afterAll(() => { });
    afterAll(done => { done(); });
    afterEach(() => { });
    afterEach(done => { done(); });
});

describe('mocks', () => {
    const mock = jest.fn<any>();
    mock();
    mock.apply({}, [1, 2, 3]);
    mock.mockClear();
    mock.mockReturnThis().mockClear();
    mock.mockReturnValue('asdf').mockClear();
    mock.mockReturnValueOnce('asdf').mockClear();
    mock.mockImplementationOnce(() => { }).mockClear();
});

describe('matchers', () => {
    let value: any;
    expect(value).toBe(value);
    expect(value).toBeCalled();
    expect(value).toBeCalledWith(1, 2, 3);
    expect(value).toBeCloseTo(1, 0.5);
    expect(value).toBeDefined();
    expect(value).toBeFalsy();
    expect(value).toBeGreaterThan(4);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeInstanceOf(Number);
    expect(value).toBeLessThan(4);
    expect(value).toBeLessThanOrEqual(4);
    expect(value).toBeNull();
    expect(value).toBeTruthy();
    expect(value).toBeUndefined();
    expect(value).toHaveBeenCalled();
    expect(value).toHaveBeenCalledTimes(2);
    expect(value).toHaveBeenCalledWith(1, 2, 3);
    expect(value).toMatch(/asdf/);
    expect(value).toMatch("asdf");
    expect(value).toMatchSnapshot();
    expect(value).toThrow();
    expect(value).toThrowError("asdf");
    expect(value).toThrowError(ReferenceError);
    expect(value).toThrowError(/asdf/);
});

describe('jest global object', () => {
    jest.autoMockOff().autoMockOff();
    jest.autoMockOn().autoMockOff();
    jest.clearAllTimers();
    jest.deepUnmock('name').autoMockOff();
    jest.disableAutomock().autoMockOff();
    jest.doMock('name').autoMockOff();
    jest.enableAutoMock().autoMockOff();
    jest.genMockFromModule<any>('name').mockReturnThis();
    jest.mock('name').autoMockOff();
    jest.resetModuleRegistry().autoMockOff();
    jest.resetModules().autoMockOff();
    jest.runAllImmediates();
    jest.runAllTicks();
    jest.runAllTimers();
    jest.runOnlyPendingTimers();
    jest.setMock('name', { x: 42 }).autoMockOff();
    jest.unmock('name').autoMockOff();
    jest.useFakeTimers().autoMockOff();
    jest.useRealTimers().autoMockOff();

    const mockFn: boolean | jest.Mock<any> = jest.fn();
    if (jest.isMockFunction(mockFn)) {
        mockFn.mockClear();
    }
});

describe('jasmine APIs', () => {
    fail('error');

    const obj = {
        w: 'asdf',
        x: () => { },
        y: 42,
        z: [1, 2]
    };
    spyOn(obj, 'x').and.callFake(() => { }).and;
    spyOn(obj, 'x').and.callThrough().and;
    spyOn(obj, 'x').and.returnValue(42).and;
    spyOn(obj, 'x').and.returnValues(1, 2, 3).and;
    spyOn(obj, 'x').and.stub().and;
    spyOn(obj, 'x').and.throwError('message').and;

    const spy = spyOn(obj, 'x');
    spy.identity.substring(0, 1);
    spy.mostRecentCall.args.indexOf(0);
    spy.argsForCall.indexOf(0);
    const called: boolean = spy.wasCalled;
    const calls = spy.calls;
    calls.any();
    calls.allArgs();
    calls.all();
    calls.argsFor(0);
    calls.count;
    calls.first().args.indexOf(0);
    calls.first().returnValue;
    calls.first().object;
    calls.mostRecent().args.indexOf(0);
    calls.mostRecent().returnValue;
    calls.mostRecent().object;
    calls.reset();

    const clock = jasmine.clock();
    clock.install();
    clock.mockDate(new Date());
    clock.tick(1000);
    clock.uninstall();

    expect(obj).toEqual(jasmine.objectContaining({ y: 42 }));
    expect(obj.z).toEqual(jasmine.arrayContaining([ 1 ]));
    expect(obj).toEqual({ w: jasmine.stringMatching('df') });
    expect(obj).toEqual({ w: jasmine.stringMatching(/df/) });
});

jest.addMatchers({
    toBeAsdf: (util: jasmine.MatchersUtil, customEqualityTesters: Array<jasmine.CustomEqualityTester>) => ({
        compare: (actual: string, expected: string) => {
            const result: jasmine.CustomMatcherResult = { pass: false, message: '' };
            result.pass = util.equals(actual, "asdf" + expected, customEqualityTesters);
            if (result.pass) {
                result.message = "Expected " + actual + " not to be asdf";
            } else {
                result.message = () => "Expected " + actual + " to be asdf";
            }
            return result;
        }
    })
});

declare namespace jest {
    interface Matchers {
        toBeAsdf(expected?: number): void;
    }
}

describe("Custom matcher", () => {
    expect('asdf').toBeAsdf();
    expect('asdf').toBeAsdf(123);
    expect('qwer').not.toBeAsdf();
});
