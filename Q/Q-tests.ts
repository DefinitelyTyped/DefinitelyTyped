/// <reference path="Q.d.ts" />

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

var initialVal: any;
var funcs = ['foo', 'bar', 'baz', 'qux'];
var result = Q.resolve(initialVal);
funcs.forEach(function (f) {
    result = result.then(f);
});