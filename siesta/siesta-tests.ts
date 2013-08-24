/// <reference path="siesta.d.ts" />

StartTest(function (t: Siesta.Test) {
});

startTest(function (t: Siesta.Test) {
});

describe(function (t: Siesta.Test) {
});

var Harness = Siesta.Harness.Browser;

Harness.start(<Siesta.Harness.ITestGroupDescriptor>{
    group: 'MyGroup',
    items: [
        'test-script01.js',
        'test-script02.js',
        <Siesta.Harness.ITestUrlDescriptor>{
            url: 'http://somesite.com/test-script03.js',
            preload: [<Siesta.Harness.IPreloadUrlDescriptor>{
                type: 'css',
                url: 'http://somesite.com/test-script03.css'
            }]
        }
    ],
    option1: true
});