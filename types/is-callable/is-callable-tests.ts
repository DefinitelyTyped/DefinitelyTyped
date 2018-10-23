import isCallable = require("is-callable");

isCallable(undefined);
isCallable(null);
isCallable(false);
isCallable(true);
isCallable([]);
isCallable({});
isCallable(/a/g);
isCallable(new RegExp("a", "g"));
isCallable(new Date());
isCallable(42);
isCallable(NaN);
isCallable(Infinity);
isCallable("foo");
isCallable(Object("foo"));

function func1() {}
if (isCallable(func1)) {
    func1();
}

const func2 = (x: number) => x * x;
if (isCallable(func2)) {
    func2(0);
}
