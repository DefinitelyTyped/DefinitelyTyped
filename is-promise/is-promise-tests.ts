import isPromise = require("./");

isPromise({ then() { }});
isPromise(null);
isPromise({ });
isPromise({then: true});

function f(x: number | PromiseLike<number>) {
    if (isPromise(x)) {
        x.then;
    }
    else {
        x.toExponential;
    }
}