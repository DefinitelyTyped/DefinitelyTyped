/// <reference types="jquery" />


import Q = require('q');

Q(8).then(x => console.log(x.toExponential()));
Q().then(() => console.log("nothing"));

var delay = function (delay: number) {
    var d = Q.defer<void>();
    setTimeout(d.resolve, delay);
    return d.promise;
};

Q.when(delay(1000), function (val: void) {
    console.log('Hello, World!');
    return;
});

// Note from Q documentation: a deferred can be resolved with a value or a promise.
var otherPromise = Q.defer<string>().promise;
Q.defer<string>().resolve(otherPromise);

Q.timeout(Q(new Date()), 1000, "My dates never arrived. :(").then(d => d.toJSON());

Q.delay(Q(8), 1000).then(x => x.toExponential());
Q.delay(8, 1000).then(x => x.toExponential());
Q.delay(Q("asdf"), 1000).then(x => x.length);
Q.delay("asdf", 1000).then(x => x.length);

var eventualAdd = Q.promised((a?: number, b?: number) => a + b);
eventualAdd(Q(1), Q(2)).then(x => x.toExponential());

function eventually<T>(eventually: T) {
    return Q.delay(eventually, 1000);
};

var x = Q.all([1, 2, 3].map(eventually));
Q.when(x, function (x) {
    console.log(x);
});

Q.all([
    eventually(10),
    eventually(20)
]).spread(function (x: number, y: number) {
    console.log(x, y);
});

Q.all([
    eventually(10),
    eventually(20)
]).then(function (results) {
    let [x, y] = results;
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

Q(42)
    .tap(() => "hello")
    .tap(x => {
        console.log(x);
    })
    .then(x => {
        console.log("42 == " + x);
    });

declare var arrayPromise: Q.IPromise<number[]>;
declare var stringPromise: Q.IPromise<string>;
declare function returnsNumPromise(text: string): Q.Promise<number>;
declare function returnsNumPromise(text: string): JQueryPromise<number>;

Q<number[]>(arrayPromise) // type specification required
    .then(arr => arr.join(','))
    .then<number>(returnsNumPromise) // requires specification
    .then(num => num.toFixed());

declare var jPromise: JQueryPromise<string>;

// if jQuery promises definition supported generics, this could be more interesting example
Q<string>(jPromise).then(str => str.split(','));
jPromise.then(returnsNumPromise);

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
var voidPromise: Q.Promise<void> = Q.when();

declare function saveToDisk(): Q.Promise<any>;
declare function saveToCloud(): Q.Promise<any>;
Q.allSettled([saveToDisk(), saveToCloud()]).spread(function (disk: any, cloud: any) {
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
Q.denodeify(nodeStyle)('foo').done((result: string) => {});
Q.nfbind(nodeStyle)('foo').done((result: string) => {});


class Repo {
    private items: any[] = [
        { name: 'Max', cute: false },
        { name: 'Annie', cute: true }
    ];

    find(options: any): Q.Promise<any[]> {
        var result = this.items;

        for (var key in options) {
            result = result.filter(i => i[key] == options[key]);
        }

        return Q(result);
    }
}

var kitty = new Repo();
Q.nbind(kitty.find, kitty)({ cute: true }).done((kitties: any[]) => {});


/*
 * Test: Can "rethrow" rejected promises
 */
namespace TestCanRethrowRejectedPromises {

    interface Foo {
        a: number;
    }

    function nestedBar(): Q.Promise<Foo> {
        var deferred = Q.defer<Foo>();

        return deferred.promise;
    }

    function bar(): Q.Promise<Foo> {
        return nestedBar()
            .then((foo:Foo) => {
                console.log("Lorem ipsum");
            })
            .fail((error) => {
                console.log("Intermediate error handling");

                /*
                 * Cannot do this, because:
                 *     error TS2322: Type 'Promise<void>' is not assignable to type 'Promise<Foo>'
                 */
                //throw error;

                return Q.reject<Foo>(error);
            })
        ;
    }

    bar()
        .finally(() => {
            console.log("Cleanup")
        })
        .done()
    ;

}

// test Q.Promise.all
var y1 = Q().then(() => {
    var s = Q("hello");
    var n = Q(1);
    return <[typeof s, typeof n]>[s, n];
});

var y2 = Q().then(() => {
    var s = "hello";
    var n = Q(1);
    return <[typeof s, typeof n]>[s, n];
});

var p2: Q.Promise<[string, number]> = y1.then(val => Q.all(val));
var p3: Q.Promise<[string, number]> = Q.all(y1);
var p5: Q.Promise<[string, number]> = y2.then(val => Q.all(val));
var p6: Q.Promise<[string, number]> = Q.all(y2);
