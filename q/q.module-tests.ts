/// <reference path="q.d.ts" />
/// <reference path="../jasmine/jasmine.d.ts" />
/// <reference path="../node/node.d.ts" />

import q = module("q");
import fs = module("fs");

q(8).then(x => console.log(x));

var delay = function (delay) {
    var d = q.defer();
    setTimeout(d.resolve, delay);
    return d.promise;
};

q.when(delay(1000), function () {
    console.log('Hello, World!');
});

var eventually = function (eventually) {
    return q.delay(eventually, 1000);
};

var x = q.all([1, 2, 3].map(eventually));
q.when(x, function (x) {
    console.log(x);
});

q.all([
    eventually(10),
    eventually(20)
])
.spread(function (x, y) {
    console.log(x, y);
});

q.fcall(function () { })
.then(function () { })
.then(function () { })
.then(function () { })
.then(function (value4) {
    // Do something with value4
}, function (error) {
    // Handle any error from step1 through step4
}).done();

q.allResolved([]).then(function (promises) {
    promises.forEach(function (promise) {
        if (promise.isFulfilled()) {
            var value = promise.valueOf();
        } else {
            var exception = promise.valueOf().exception;
        }
    })
});

var initialVal: any;
var funcs = ['foo', 'bar', 'baz', 'qux'];
var result = q.resolve(initialVal);
funcs.forEach(function (f) {
    result = result.then(f);
});

var replaceText = (text: string) => text.replace("a", "b");

q.nfcall(fs.readFile, "foo.txt", "utf-8").then(replaceText);

q.ninvoke(fs, "readFile", "foo.txt", "utf-8").then(replaceText);

var deferred = q.defer();
fs.readFile("foo.txt", "utf-8", deferred.makeNodeResolver());
deferred.promise.then(replaceText);

var readFile = q.nfbind(fs.readFile);
readFile("foo.txt", "utf-8").then(replaceText);