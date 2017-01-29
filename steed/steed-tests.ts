/// <reference types="node" />

import steed = require('steed')

declare var path: {
    exists: (path: string, callback?: (error: Error, exists: boolean) => any) => void;
};

function funcStringCbErrBoolean(v: string, cb: (error: Error, res: boolean) => void) { }
function callback() { }

steed.parallel([
    function () { },
    function () { }
], callback);

steed.series([
    function () { },
    function () { }
]);

var data: any[] = [];
function steedProcess(item: any, callback: (error: Error, result: any) => void) { }
steed.map(data, steedProcess, function (error, results) {
    console.log(results);
});

var openFiles = ['file1', 'file2'];

var saveFile = function (file: string, cb: (error: Error) => void) { }
steed.each(openFiles, saveFile, function (error: Error) { });
steed.eachSeries(openFiles, saveFile, function (error: Error) { });

// Control Flow //

steed.series([
    function (callback) {
        callback(undefined, 'one');
    },
    function (callback) {
        callback(undefined, 'two');
    },
],
    function (error, results) { });

steed.series<string, Error>([
    function (callback) {
        callback(undefined, 'one');
    },
    function (callback) {
        callback(undefined, 'two');
    },
],
    function (error, results) { });

steed.series({
    one: function (callback) {
        setTimeout(function () {
            callback(undefined, 1);
        }, 200);
    },
    two: function (callback) {
        setTimeout(function () {
            callback(undefined, 2);
        }, 100);
    },
},
    function (error, results) { });

steed.series<number, Error>({
    one: function (callback) {
        setTimeout(function () {
            callback(undefined, 1);
        }, 200);
    },
    two: function (callback) {
        setTimeout(function () {
            callback(undefined, 2);
        }, 100);
    },
},
    function (error, results) { });

steed.parallel([
    function (callback) {
        setTimeout(function () {
            callback(undefined, 'one');
        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            callback(undefined, 'two');
        }, 100);
    },
],
    function (error, results) { });

steed.parallel<string, Error>([
    function (callback) {
        setTimeout(function () {
            callback(undefined, 'one');
        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            callback(undefined, 'two');
        }, 100);
    },
],
    function (error, results) { });


steed.parallel({
    one: function (callback) {
        setTimeout(function () {
            callback(undefined, 1);
        }, 200);
    },
    two: function (callback) {
        setTimeout(function () {
            callback(undefined, 2);
        }, 100);
    },
},
    function (error, results) { });

steed.parallel<number, Error>({
    one: function (callback) {
        setTimeout(function () {
            callback(undefined, 1);
        }, 200);
    },
    two: function (callback) {
        setTimeout(function () {
            callback(undefined, 2);
        }, 100);
    },
},
    function (error, results) { });

function whileFn(callback: any) {
    count++;
    setTimeout(callback, 1000);
}

function whileTest() { return count < 5; }
var count = 0;

steed.waterfall([
    function (callback: any) {
        callback(null, 'one', 'two');
    },
    function (arg1: any, arg2: any, callback: any) {
        callback(null, 'three');
    },
    function (arg1: any, callback: any) {
        callback(null, 'done');
    }
], function (error, result) { });


var q = steed.queue<any, Error>(function (task: any, callback: () => void) {
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

q.push([{ name: 'baz' }, { name: 'bay' }, { name: 'bax' }], function (error: Error) {
    console.log('finished processing bar');
});

q.unshift({ name: 'foo' });

q.unshift({ name: 'bar' }, function (err) {
    console.log('finished processing bar');
});

q.unshift([{ name: 'baz' }, { name: 'bay' }, { name: 'bax' }], function (error: Error) {
    console.log('finished processing bar');
});

var qLength: number = q.length();
var qIsIdle: boolean = q.idle();

q.saturated = function () {
    console.log('queue is saturated.');
}

q.empty = function () {
    console.log('queue is empty.');
}

q.drain = function () {
    console.log('queue was drained.');
}

q.pause();
q.resume();
q.kill();

// tests for strongly typed tasks
var q2 = steed.queue<string, Error>(function (task: string, callback: () => void) {
    console.log('Task: ' + task);
    callback();
}, 1);

q2.push('task1');

q2.push('task2', function (error) {
    console.log('Finished tasks');
});

q2.push(['task3', 'task4', 'task5'], function (error: Error) {
    console.log('Finished tasks');
});

q2.unshift('task1');

q2.unshift('task2', function (error) {
    console.log('Finished tasks');
});

q2.unshift(['task3', 'task4', 'task5'], function (error: Error) {
    console.log('Finished tasks');
});

steed.parallel([
    function (callback: (error: Error, val: string) => void) { },
    function (callback) { }
],
    function (error: Error, results: Array<string>) {
        steed.series([
            function (callback) { },
            function email_link(callback) { }
        ]);
    });

// each

steed.each<number, Error>({
    "a": 1,
    "b": 2
}, function (val: number, next: steed.ErrorCallback<Error>): void {

    setTimeout(function (): void {

        console.log(`steed.each: ${val}`);

        next();

    }, 500);

}, function (err?: Error): void {

    console.log("steed.each: done.");

});

steed.eachSeries<number, Error>({
    "a": 1,
    "b": 2
}, function (val: number, next: steed.ErrorCallback<Error>): void {

    setTimeout(function (): void {

        console.log(`steed.eachSeries: ${val}`);

        next();

    }, 500);

}, function (err?: Error): void {

    console.log("steed.eachSeries: done.");

});

// map

steed.map<number, string, Error>({
    "a": 1,
    "b": 2,
    "c": 3
}, function (val: number, next: steed.SteedResultCallback<string, Error>): void {

    setTimeout(function (): void {

        console.log(`steed.map: ${val}`);

        next(undefined as any, val.toString());

    }, 500);

}, function (error: Error, results: string[]): void {

    console.log("steed.map: done with results", results);

});

steed.mapSeries<number, string, Error>({
    "a": 1,
    "b": 2,
    "c": 3
}, function (val: number, next: steed.SteedResultCallback<string, Error>): void {

    setTimeout(function (): void {

        console.log(`steed.mapSeries: ${val}`);

        next(undefined as any, val.toString());

    }, 500);

}, function (error: Error, results: string[]): void {

    console.log("steed.mapSeries: done with results", results);

});