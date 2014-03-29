/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="Q.d.ts" />

import q = require('q');

Q(8).then(x => console.log(x.toExponential()));

var delay = function (delay: number) {
    var d = Q.defer<void>();
    setTimeout(d.resolve, delay);
    return d.promise;
};

Q.when(delay(1000), function (val: void) {
    console.log('Hello, World!');
    return;
});

Q.timeout(Q(new Date()), 1000, "My dates never arrived. :(").then(d => d.toJSON());

Q.delay(Q(8), 1000).then(x => x.toExponential());
Q.delay(8, 1000).then(x => x.toExponential());
Q.delay(Q("asdf"), 1000).then(x => x.length);
Q.delay("asdf", 1000).then(x => x.length);

var eventualAdd = Q.promised((a?: number, b?: number) => a + b);
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

declare var arrayPromise: Q.IPromise<number[]>;
declare var stringPromise: Q.IPromise<string>;
declare function returnsNumPromise(text: string): Q.Promise<number>;

Q<number[]>(arrayPromise) // type specification required
    .then(arr => arr.join(','))
    .then<number>(returnsNumPromise) // requires specification
    .then(num => num.toFixed());

declare var jPromise: JQueryPromise<string>;

// if jQuery promises definition supported generics, this could be more interesting example
Q<string>(jPromise).then(str => str.split(','));
jPromise.then<number>(returnsNumPromise);

// watch the typing flow through from jQueryPromise to Q.Promise
Q(jPromise).then(str => str.split(','));

declare var promiseArray: Q.IPromise<number>[];
var qPromiseArray = promiseArray.map(p => Q<number>(p));
var myNums: any[] = [2, 3, Q(4), 5, Q(6), Q(7)];

Q.all(promiseArray).then(nums => nums.map(num => num.toPrecision(2)).join(','));

Q.all<number>(myNums).then(nums => nums.map(Math.round));

Q.fbind((dateString?: string) => new Date(dateString), "11/11/1991")().then(d => d.toLocaleDateString());

Q.when(8, num => num + "!");
Q.when(Q(8), num => num + "!").then(str => str.split(','));

declare function saveToDisk(): Q.Promise<any>;
declare function saveToCloud(): Q.Promise<any>;
Q.allSettled([saveToDisk(), saveToCloud()]).spread(function (disk, cloud) {
    console.log("saved to disk:", disk.state === "fulfilled");
    console.log("saved to cloud:", cloud.state === "fulfilled");

    if (disk.state === "fulfilled") {
        console.log("value was " + disk.value);
    }
    else if (disk.state === "rejected") {
        console.log("rejected because " + disk.reason);
    }
}).done();

var nodeStyle = (input: string, cb: Function) => {
        cb(null, input);
};

Q.nfapply(nodeStyle, ["foo"]).done((result: string) => {});
Q.nfcall(nodeStyle, "foo").done((result: string) => {});
