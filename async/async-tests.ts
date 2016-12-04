/// <reference path="async.d.ts" />
/// <reference path="../node/node.d.ts" />
import * as fs from "fs";
// var fs = require("fs");

function callback() {}
function funcStringCbErrBoolean(v:string, cb:(err:Error,res:boolean) => void) {}

async.map(['file1', 'file2', 'file3'], fs.stat, function (err:Error, results:Array<fs.Stats>) { });
async.mapSeries(['file1', 'file2', 'file3'], fs.stat, function (err:Error, results:Array<fs.Stats>) { });
async.mapLimit(['file1', 'file2', 'file3'], 2, fs.stat, function (err:Error, results:Array<fs.Stats>) { });

async.filter(['file1', 'file2', 'file3'], funcStringCbErrBoolean, function (err:Error,results:Array<string>) { });
async.filterSeries(['file1', 'file2', 'file3'], funcStringCbErrBoolean, function (err:Error,results:Array<string>) { });
async.filterLimit(['file1', 'file2', 'file3'], 2, funcStringCbErrBoolean, function (err:Error,results:Array<string>) { });
async.select(['file1', 'file2', 'file3'], funcStringCbErrBoolean, function (err:Error,results:Array<string>) { });
async.selectSeries(['file1', 'file2', 'file3'], funcStringCbErrBoolean, function (err:Error,results:Array<string>) { });
async.selectLimit(['file1', 'file2', 'file3'], 2, funcStringCbErrBoolean, function (err:Error,results:Array<string>) { });

async.reject(['file1', 'file2', 'file3'], funcStringCbErrBoolean, function (err:Error,results:Array<string>) { });
async.rejectSeries(['file1', 'file2', 'file3'], funcStringCbErrBoolean, function (err:Error,results:Array<string>) { });
async.rejectLimit(['file1', 'file2', 'file3'], 2, funcStringCbErrBoolean, function (err:Error,results:Array<string>) { });

async.parallel([
    function () { },
    function () { }
], callback);

async.series([
    function () { },
    function () { }
]);

var data = [];
function asyncProcess(item, callback) { }
async.map(data, asyncProcess, function (err, results) {
    console.log(results);
});

var openFiles = ['file1', 'file2'];
var openFilesObj = {
    file1: "fileOne",
    file2: "fileTwo"
}

var saveFile = function (file:string,cb:(err:Error)=>void) { }
async.each(openFiles, saveFile, function (err:Error) { });
async.eachSeries(openFiles, saveFile, function (err:Error) { });

var documents, requestApi;
async.eachLimit(documents, 20, requestApi, function (err) { });

// forEachOf* functions. May accept array or object.
function forEachOfIterator(item, key, forEachOfIteratorCallback) {
    console.log("ForEach: item=" + item + ", key=" + key);
    forEachOfIteratorCallback();
}
async.forEachOf(openFiles, forEachOfIterator, function (err) { });
async.forEachOf(openFilesObj, forEachOfIterator, function (err) { });
async.forEachOfSeries(openFiles, forEachOfIterator, function (err) { });
async.forEachOfSeries(openFilesObj, forEachOfIterator, function (err) { });
async.forEachOfLimit(openFiles, 2, forEachOfIterator, function (err) { });
async.forEachOfLimit(openFilesObj, 2, forEachOfIterator, function (err) { });

var process;
var numArray = [1, 2, 3];
function reducer(memo, item, callback) {
    process.nextTick(function () {
        callback(null, memo + item)
    });
}
async.reduce(numArray, 0, reducer, function (err, result) { });
async.inject(numArray, 0, reducer, function (err, result) { });
async.foldl(numArray, 0, reducer, function (err, result) { });
async.reduceRight(numArray, 0, reducer, function (err, result) { });
async.foldr(numArray, 0, reducer, function (err, result) { });

async.detect(['file1', 'file2', 'file3'], funcStringCbErrBoolean, function (err,result:string) { });
async.detectSeries(['file1', 'file2', 'file3'], funcStringCbErrBoolean, function (err,result) { });
async.detectLimit(['file1', 'file2', 'file3'], 2, funcStringCbErrBoolean, function (err,result) { });

async.sortBy(['file1', 'file2', 'file3'], function (file, callback) {
    fs.stat(file, function (err, stats) {
        callback(err, stats.mtime);
    });
}, function (err, results) { });

async.some(['file1', 'file2', 'file3'], funcStringCbErrBoolean, function (err:Error,result:boolean) { });
async.someLimit(['file1', 'file2', 'file3'], 2, funcStringCbErrBoolean, function (err:Error,result:boolean) { });
async.any(['file1', 'file2', 'file3'], funcStringCbErrBoolean, function (err:Error,result:boolean) { });

async.every(['file1', 'file2', 'file3'], funcStringCbErrBoolean, function (err:Error,result:boolean) { });
async.everyLimit(['file1', 'file2', 'file3'], 2, funcStringCbErrBoolean, function (err:Error,result:boolean) { });
async.all(['file1', 'file2', 'file3'], funcStringCbErrBoolean, function (err:Error,result:boolean) { });

async.concat(['dir1', 'dir2', 'dir3'], fs.readdir, function (err, files) { });
async.concatSeries(['dir1', 'dir2', 'dir3'], fs.readdir, function (err, files) { });


// Control Flow //

async.series([
    function (callback) {
        callback(null, 'one');
    },
    function (callback) {
        callback(null, 'two');
    },
],
function (err, results) { });

async.series<string,Error>([
    function (callback) {
        callback(null, 'one');
    },
    function (callback) {
        callback(null, 'two');
    },
],
function (err, results) { });

async.series({
    one: function (callback) {
        setTimeout(function () {
            callback(null, 1);
        }, 200);
    },
    two: function (callback) {
        setTimeout(function () {
            callback(null, 2);
        }, 100);
    },
},
function (err, results) { });

async.series<number,Error>({
    one: function (callback) {
        setTimeout(function () {
            callback(null, 1);
        }, 200);
    },
    two: function (callback) {
        setTimeout(function () {
            callback(null, 2);
        }, 100);
    },
},
function (err, results) { });

async.times(5, function(n, next) {
    next(null, n)
}, function(err, results) {
    console.log(results)
})

async.timesSeries(5, function(n, next) {
    next(null, n)
}, function(err, results) {
    console.log(results)
})

async.parallel([
    function (callback) {
        setTimeout(function () {
            callback(null, 'one');
        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            callback(null, 'two');
        }, 100);
    },
],
function (err, results) { });

async.parallel<string,Error>([
    function (callback) {
        setTimeout(function () {
            callback(null, 'one');
        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            callback(null, 'two');
        }, 100);
    },
],
function (err, results) { });


async.parallel({
    one: function (callback) {
        setTimeout(function () {
            callback(null, 1);
        }, 200);
    },
    two: function (callback) {
        setTimeout(function () {
            callback(null, 2);
        }, 100);
    },
},
function (err, results) { });

async.parallel<number,Error>({
    one: function (callback) {
        setTimeout(function () {
            callback(null, 1);
        }, 200);
    },
    two: function (callback) {
        setTimeout(function () {
            callback(null, 2);
        }, 100);
    },
},
    function (err, results) { });

async.parallelLimit({
    one: function (callback) {
        setTimeout(function () {
            callback(null, 1);
        }, 200);
    },
    two: function (callback) {
        setTimeout(function () {
            callback(null, 2);
        }, 100);
    },
},
    2,
    function (err, results) { }
);


function whileFn(callback) {
    count++;
    setTimeout(callback, 1000);
}

function whileTest() { return count < 5; }
var count = 0;
async.whilst(whileTest, whileFn, function (err) { });
async.until(whileTest, whileFn, function (err) { });
async.doWhilst(whileFn, whileTest, function (err) { });
async.doUntil(whileFn, whileTest, function (err) { });

async.during(function (testCallback) { testCallback(new Error(), false); }, function (callback) { callback() }, function (error) { console.log(error) });
async.doDuring(function (callback) { callback() }, function (testCallback) { testCallback(new Error(), false); }, function (error) { console.log(error) });
async.forever(function (errBack) {
    errBack(new Error("Not going on forever."));
},
    function (error) {
        console.log(error);
    }
);

async.waterfall([
    function (callback) {
        callback(null, 'one', 'two');
    },
    function (arg1, arg2, callback) {
        callback(null, 'three');
    },
    function (arg1, callback) {
        callback(null, 'done');
    }
], function (err, result) { });


var q = async.queue<any,Error>(function (task: any, callback) {
    console.log('hello ' + task.name);
    callback();
}, 2);


q.drain = function () {
    console.log('all items have been processed');
}

q.push({ name: 'foo' });

q.push({ name: 'bar' }, function (err) {
    console.log('finished processing bar');
});

q.push([{ name: 'baz' }, { name: 'bay' }, { name: 'bax' }], function (err) {
    console.log('finished processing bar');
});

q.unshift({ name: 'foo' });

q.unshift({ name: 'bar' }, function (err) {
    console.log('finished processing bar');
});

q.unshift([{ name: 'baz' }, { name: 'bay' }, { name: 'bax' }], function (err) {
    console.log('finished processing bar');
});

var qLength : number = q.length();
var qStarted : boolean = q.started;
var qPaused : boolean = q.paused;
var qProcessingCount : number = q.running();
var qIsIdle : boolean = q.idle();

q.saturated = function() {
    console.log('queue is saturated.');
}

q.empty = function() {
    console.log('queue is empty.');
}

q.drain = function() {
    console.log('queue was drained.');
}

q.pause();
q.resume();
q.kill();

// tests for strongly typed tasks
var q2 = async.queue<string,Error>(function (task: string, callback) {
    console.log('Task: ' + task);
    callback();
}, 1);

q2.push('task1');

q2.push('task2', function (error) {
    console.log('Finished tasks');
});

q2.push(['task3', 'task4', 'task5'], function (error) {
    console.log('Finished tasks');
});

q2.unshift('task1');

q2.unshift('task2', function (error) {
    console.log('Finished tasks');
});

q2.unshift(['task3', 'task4', 'task5'], function (error) {
    console.log('Finished tasks');
});

// create a cargo object with payload 2
var cargo = async.cargo(function (tasks, callback) {
    for (var i = 0; i < tasks.length; i++) {
        console.log('hello ' + tasks[i].name);
    }
    callback();
}, 2);


// add some items
cargo.push({ name: 'foo' }, function (err) {
    console.log('finished processing foo');
});
cargo.push({ name: 'bar' }, function (err) {
    console.log('finished processing bar');
});
cargo.push({ name: 'baz' }, function (err) {
    console.log('finished processing baz');
});

var filename = '';
async.auto({
    get_data: function (callback) { },
    make_folder: function (callback) { },
    //arrays with different types are not accepted by TypeScript.
    write_file: ['get_data', 'make_folder', <any>function (callback) {
        callback(null, filename);
    }],
    //arrays with different types are not accepted by TypeScript.
    email_link: ['write_file', <any>function (callback, results) { }]
});

async.retry(3, function (callback, results) { }, function (err, result) { });
async.retry({ times: 3, interval: 200 }, function (callback, results) { }, function (err, result) { });
async.retry({ times: 3, interval: (retryCount) => { return 200 * retryCount; } }, function (callback, results) { }, function (err, result) { });


async.parallel([
    function (callback: ( err:Error, val:string ) => void ) { },
    function (callback) { }
],
function (err:Error,results:Array<string>) {
    async.series([
        function (callback) { },
        function email_link(callback) { }
    ]);
});

async.parallel([
    async.apply(fs.writeFile, 'testfile1', 'test1'),
    async.apply(fs.writeFile, 'testfile2', 'test2'),
]);


async.parallel([
    function (callback) {
        fs.writeFile('testfile1', 'test1', callback);
    },
    function (callback) {
        fs.writeFile('testfile2', 'test2', callback);
    },
]);

var call_order = [];
async.nextTick(function () {
    call_order.push('two');
});
call_order.push('one');

var slow_fn = function (name, callback) {
    callback(null, 123);
};
var fn = async.memoize(slow_fn);
fn('some name', function () {});
async.unmemoize(fn);
async.ensureAsync(function () { });
async.constant(42);
async.asyncify(function () { });

async.log(function (name, callback) {
    setTimeout(function () {
        callback(null, 'hello ' + name);
    }, 0);
}, "world"
    );

async.dir(function (name, callback) {
    setTimeout(function () {
        callback(null, { hello: name });
    }, 1000);
}, "world");

// each

async.each<number,Error>({
    "a": 1,
    "b": 2
}, function(val: number, next: ErrorCallback<Error>): void {

    setTimeout(function(): void {

        console.log(`async.each: ${val}`);

        next();

    }, 500);

}, function(err?: Error): void {

    console.log("async.each: done.");

});

async.eachSeries<number, Error>({
    "a": 1,
    "b": 2
}, function(val: number, next: ErrorCallback<Error>): void {

    setTimeout(function(): void {

        console.log(`async.eachSeries: ${val}`);

        next();

    }, 500);

}, function(err?: Error): void {

    console.log("async.eachSeries: done.");

});

async.eachLimit<number, Error>({
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6
}, 2, function(val: number, next: ErrorCallback<Error>): void {

    setTimeout(function(): void {

        console.log(`async.eachLimit: ${val}`);

        next();

    }, 500);

}, function(err?: Error): void {

    console.log("async.eachLimit: done.");

});

// forEachOf/eachOf

async.eachOf<number, Error>({
    "a": 1,
    "b": 2
}, function(val: number, key: string, next: ErrorCallback<Error>): void {

    setTimeout(function(): void {

        console.log(`async.forEachOf/eachOf: ${key} = ${val}`);

        next();

    }, 500);

}, function(err?: Error): void {

    console.log("async.forEachOf/eachOf: done.");

});

async.forEachOfSeries<number, Error>({
    "a": 1,
    "b": 2
}, function(val: number, key: string, next: ErrorCallback<Error>): void {

    setTimeout(function(): void {

        console.log(`async.forEachOfSeries: ${key} = ${val}`);

        next();

    }, 500);

}, function(err?: Error): void {

    console.log("async.forEachOfSeries: done.");

});

async.forEachOfLimit<number, Error>({
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6
}, 2, function(val: number, key: string, next: ErrorCallback<Error>): void {

    setTimeout(function(): void {

        console.log(`async.forEachOfLimit: ${key} = ${val}`);

        next();

    }, 500);

}, function(err?: Error): void {

    console.log("async.forEachOfLimit: done.");

});

// map

async.map<number, string, Error>({
    "a": 1,
    "b": 2,
    "c": 3
}, function(val: number, next: AsyncResultCallback<string, Error>): void {

    setTimeout(function(): void {

        console.log(`async.map: ${val}`);

        next(null, val.toString());

    }, 500);

}, function(err: Error, results: string[]): void {

    console.log("async.map: done with results", results);

});

async.mapSeries<number, string, Error>({
    "a": 1,
    "b": 2,
    "c": 3
}, function(val: number, next: AsyncResultCallback<string, Error>): void {

    setTimeout(function(): void {

        console.log(`async.mapSeries: ${val}`);

        next(null, val.toString());

    }, 500);

}, function(err: Error, results: string[]): void {

    console.log("async.mapSeries: done with results", results);

});

async.mapLimit<number, string, Error>({
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6
}, 2, function(val: number, next: AsyncResultCallback<string, Error>): void {

    setTimeout(function(): void {

        console.log(`async.mapLimit: ${val}`);

        next(null, val.toString());

    }, 500);

}, function(err: Error, results: string[]): void {

    console.log("async.mapLimit: done with results", results);

});

// mapValues

async.mapValues<number, string, Error>({
    "a": 1,
    "b": 2,
    "c": 3
}, function(val: number, key: string, next: AsyncResultCallback<string, Error>): void {

    setTimeout(function(): void {

        console.log(`async.mapValues: ${key} = ${val}`);

        next(null, val.toString());

    }, 500);

}, function(err: Error, results: string[]): void {

    console.log("async.mapValues: done with results", results);

});

async.mapValuesSeries<number, string, Error>({
    "a": 1,
    "b": 2,
    "c": 3
}, function(val: number, key: string, next: AsyncResultCallback<string, Error>): void {

    setTimeout(function(): void {

        console.log(`async.mapValuesSeries: ${key} = ${val}`);

        next(null, val.toString());

    }, 500);

}, function(err: Error, results: string[]): void {

    console.log("async.mapValuesSeries: done with results", results);

});

// filter/select/reject

async.filter<number, Error>({
    "a": 1,
    "b": 2,
    "c": 3
}, function(val: number, next: AsyncBooleanResultCallback<Error>): void {

    setTimeout(function(): void {

        console.log(`async.filter/select: ${val}`);

        next(null, val % 2 === 0);

    }, 500);

}, function(err: Error, results: number[]): void {

    console.log("async.filter/select: done with results", results);

});

async.reject<number, Error>({
    "a": 1,
    "b": 2,
    "c": 3
}, function(val: number, next: AsyncBooleanResultCallback<Error>): void {

    setTimeout(function(): void {

        console.log(`async.reject: ${val}`);

        next(null, val % 2 === 0);

    }, 500);

}, function(err: Error, results: number[]): void {

    console.log("async.reject: done with results", results);

});

// concat

async.concat<string, string, Error>({
    "a": "1",
    "b": "2",
    "c": "3"
}, function(item: string, next: AsyncResultCallback<string[], Error>): void {

    console.log(`async.concat: ${item}`);

    next(null, [item, item, item]);

}, function(err: Error, results: string[]) {

    console.log("async.concat: done with results", results);

});

// detect/find

async.detect<number, Error>({
    "a": 1,
    "b": 2,
    "c": 3
}, function(item: number, next: AsyncBooleanResultCallback<Error>): void {

    console.log(`async.detect/find: ${item}`);

    next(null, item > 1);

}, function(err: Error, result: number) {

    if (err) {

        console.log(err);

    } else {

        console.log("async.detect/find: done with result", result);
    }

});

// every/all

async.every<number,Error>({
    "a": 1,
    "b": 2,
    "c": 3
}, function(item: number, next: AsyncBooleanResultCallback<Error>): void {

    console.log(`async.every/all: ${item}`);

    next(null, item > 0);

}, function(err: Error, result: boolean) {

    console.log("async.every/all: done with result", result);

});

// some/any

async.some<number, Error>({
    "a": 1,
    "b": 2,
    "c": 3
}, function(item: number, next: AsyncBooleanResultCallback<Error>): void {

    console.log(`async.some/any: ${item}`);

    next(null, item > 2);

}, function(err: Error, result: boolean) {

    console.log("async.some/any: done with result", result);

});
