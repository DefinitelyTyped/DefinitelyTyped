/// <reference path="jest.d.ts" />

// Tests based on the Jest website
jest.dontMock('../sum');

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
        var callback = jest.genMockFunction();
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

jest.dontMock('../displayUser.js')
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

jest.dontMock('../CheckboxWithLabel.js');
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

function testInstances() {
    var mockFn = jest.genMockFunction<Function>();
    var a = new mockFn();
    var b = new mockFn();

    mockFn.mock.instances[0] === a; // true
    mockFn.mock.instances[1] === b; // true
}

function testMockImplementation() {
    var mockFn = jest.genMockFunction<Function>().mockImplementation(function (scalar:number):number {
        return 42 + scalar;
    });

    var a = mockFn(0);
    var b = mockFn(1);

    a === 42; // true
    b === 43; // true

    mockFn.mock.calls[0][0] === 0; // true
    mockFn.mock.calls[1][0] === 1; // true
}