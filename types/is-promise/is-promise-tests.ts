import isPromise = require("is-promise");

isPromise({ then() {} });
isPromise(null);
isPromise({});
isPromise({then: true});

function f(x: number | PromiseLike<number>) {
    if (isPromise(x)) {
        x.then;
    } else {
        x.toExponential;
    }
}
