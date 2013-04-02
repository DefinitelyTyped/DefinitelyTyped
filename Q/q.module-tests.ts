/// <reference path="q.module.d.ts" />
/// <reference path="../jasmine/jasmine.d.ts" />

import Q = module("q");

describe("q", function () {
    it("should return", function (done) {
        Q({ myValue: true }).then(function (obj) {

            if (obj.myValue) done();
            else done("didn't work =(");
        },
        (err) => done(err));
    });

    it("should process all", function (done: (err?) => void ) {
        Q.all([Q(1), Q(2), Q(3)]).then(function (arr: number[]) {
            var sum = arr.reduce(function (memo, cur) {
                return memo + cur;
            }, 0);

            if (sum === 6) done();
            else done({ actual: sum });
        },
        (err) => done(err));
    });
});

var delay = function (delay) {
    var d = Q.defer();
    setTimeout(d.resolve, delay);
    return d.promise;
};

Q.when(delay(1000), function () {
    console.log('Hello, World!');
});

var eventually = function (eventually) {
    return Q.delay(eventually, 1000);
};

var x = Q.all([1, 2, 3].map(eventually));
Q.when(x, function (x) {
    console.log(x);
});

Q.all([
    eventually(10),
    eventually(20)
])
.spread(function (x, y) {
    console.log(x, y);
});

Q.fcall(function () { })
.then(function () { })
.then(function () { })
.then(function () { })
.then(function (value4) {
    // Do something with value4
}, function (error) {
    // Handle any error from step1 through step4
}).done();

Q.allResolved([])
.then(function (promises: Qpromise[]) {
    promises.forEach(function (promise) {
        if (promise.isFulfilled()) {
            var value = promise.valueOf();
        } else {
            var exception = promise.valueOf().exception;
        }
    })
});