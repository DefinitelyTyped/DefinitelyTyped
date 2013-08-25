/// <reference path="siesta.d.ts" />

StartTest(function (t: Siesta.Test.ExtJS) {
});

startTest(function (t: Siesta.Test.Browser) {
});

describe(function (t: Siesta.Test.jQuery) {
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

var temp: Siesta.Test.ExtJS;

var temps: Shapes.Point;
