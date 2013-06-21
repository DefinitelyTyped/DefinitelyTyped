/// <reference path="Q.d.ts" />

import q = module('q');

Q(8).then(x => console.log(x.toExponential()));

var delay = function (delay: number) {
    var d = Q.defer();
    setTimeout(d.resolve, delay);
    return d.promise;
};

Q.when(delay(1000), function () {
    console.log('Hello, World!');
});

Q.delay(Q(8), 1000).then(x => x.toExponential());
Q.delay(8, 1000).then(x => x.toExponential());
Q.delay(Q("asdf"), 1000).then(x => x.length);
Q.delay("asdf", 1000).then(x => x.length);

var eventualAdd = Q.promised((a: number, b: number) => a + b);
eventualAdd(Q(1), Q(2)).then(x => x.toExponential());

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
]).spread(function (x, y) {
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
.then(function (promises: Q.Promise<any>[]) {
    promises.forEach(function (promise) {
        if (promise.isFulfilled()) {
            var value = promise.valueOf();
        } else {
            var exception = promise.valueOf().exception;
        }
    })
});