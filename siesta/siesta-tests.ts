/// <reference path="siesta.d.ts" />

StartTest(function (t: Siesta.Test.ExtJS) {
    t.waitForComponentQuery('#myItemId', () => {
        t.ajaxRequestAndThen('http://some/url', () => {
            t.isBoolean(123, 'not a boolean');
        }, null);
    }, null, 2000);
});

startTest(function (t: Siesta.Test.Browser) {
    t.waitForSelectors(['.class', '#id'], () => { });
});

describe(function (t: Siesta.Test.jQuery) {
    var library = t.get$();

    t.describe('My Module', () => {
        t.it('should do something', () => {
            t.expect('some string').not.toBe('some other string');
        });
    });
});

var Harness = Siesta.Harness.Browser;

Harness.start({
    group: 'MyGroup',
    items: [
        'test-script01.js',
        'test-script02.js',
        {
            url: 'http://somesite.com/test-script03.js',
            preload: [{
                type: 'css',
                url: 'http://somesite.com/test-script03.ashx'
            }]
        }
    ],
    option1: true
});
