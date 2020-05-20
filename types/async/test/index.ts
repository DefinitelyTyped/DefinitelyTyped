/// <reference types="node" />

import async = require("async");
import { ErrorCallback, AsyncResultCallback, AsyncBooleanResultCallback, Dictionary } from "async";
import fs = require("fs");
import process = require("process");

declare var path: {
    exists: (path: string, callback?: (err: Error, exists: boolean) => any) => void;
};

function funcStringCbErrBoolean(v: string, cb: (err: Error, res: boolean) => void) {}
function callback() { }

async.map(['file1', 'file2', 'file3'], fs.stat, (err: Error, results: fs.Stats[]) => { });
async.mapSeries(['file1', 'file2', 'file3'], fs.stat, (err: Error, results: fs.Stats[]) => { });
async.mapLimit(['file1', 'file2', 'file3'], 2, fs.stat, (err: Error, results: fs.Stats[]) => { });

async.filter(['file1', 'file2', 'file3'], funcStringCbErrBoolean, (err: Error, results: string[]) => { });
async.filterSeries(['file1', 'file2', 'file3'], funcStringCbErrBoolean, (err: Error, results: string[]) => { });
async.filterLimit(['file1', 'file2', 'file3'], 2, funcStringCbErrBoolean, (err: Error, results: string[]) => { });
async.select(['file1', 'file2', 'file3'], funcStringCbErrBoolean, (err: Error, results: string[]) => { });
async.selectSeries(['file1', 'file2', 'file3'], funcStringCbErrBoolean, (err: Error, results: string[]) => { });
async.selectLimit(['file1', 'file2', 'file3'], 2, funcStringCbErrBoolean, (err: Error, results: string[]) => { });

async.reject(['file1', 'file2', 'file3'], funcStringCbErrBoolean, (err: Error, results: string[]) => { });
async.rejectSeries(['file1', 'file2', 'file3'], funcStringCbErrBoolean, (err: Error, results: string[]) => { });
async.rejectLimit(['file1', 'file2', 'file3'], 2, funcStringCbErrBoolean, (err: Error, results: string[]) => { });

async.parallel([
    () => { },
    () => { }
], callback);

async.series([
    () => { },
    () => { }
]);

const data: any[] = [];
function asyncProcess(item: any, callback: (err: Error, result: any) => void) { }
async.map(data, asyncProcess, (err, results) => { console.log(results); });

const openFiles = ['file1', 'file2'];
const openFilesObj = {
    file1: "fileOne",
    file2: "fileTwo"
};

const saveFile = (file: string, cb: (err: Error) => void) => { };
async.each(openFiles, saveFile, (err: Error) => { });
async.eachSeries(openFiles, saveFile, (err: Error) => { });

const documents: any[] = [];
const requestApi: async.AsyncIterator<any> = () => { };
async.eachLimit<any>(documents, 20, requestApi, err => { });

// forEachOf* functions. May accept array or object.
function forEachOfIterator(item: string, key: string, forEachOfIteratorCallback: any) {
    console.log(`ForEach: item=${item}, key=${key}`);
    forEachOfIteratorCallback();
}
async.forEachOf(openFiles, forEachOfIterator, err => { });
async.forEachOf(openFilesObj, forEachOfIterator, err => { });
async.forEachOfSeries(openFiles, forEachOfIterator, err => { });
async.forEachOfSeries(openFilesObj, forEachOfIterator, err => { });
async.forEachOfLimit(openFiles, 2, forEachOfIterator, err => { });
async.forEachOfLimit(openFilesObj, 2, forEachOfIterator, err => { });

const numArray = [1, 2, 3];
function reducer(memo: any, item: any, callback: any) {
    process.nextTick(() => { callback(null, memo + item); });
}

async.reduce(numArray, 0, reducer, (err, result) => { });
async.inject(numArray, 0, reducer, (err, result) => { });
async.foldl(numArray, 0, reducer, (err, result) => { });
async.reduceRight(numArray, 0, reducer, (err, result) => { });
async.foldr(numArray, 0, reducer, (err, result) => { });

async.detect(['file1', 'file2', 'file3'], funcStringCbErrBoolean, (err: Error, result: string) => { });
async.detectSeries(['file1', 'file2', 'file3'], funcStringCbErrBoolean, (err, result) => { });
async.detectLimit(['file1', 'file2', 'file3'], 2, funcStringCbErrBoolean, (err, result) => { });

async.sortBy(['file1', 'file2', 'file3'], (file, callback) => {
    fs.stat(file, (err, stats) => { callback(err, stats ? stats.mtime : -1); });
}, (err, results) => { });

async.some(['file1', 'file2', 'file3'], funcStringCbErrBoolean, (err: Error, result: boolean) => { });
async.someLimit(['file1', 'file2', 'file3'], 2, funcStringCbErrBoolean, (err: Error, result: boolean) => { });
async.any(['file1', 'file2', 'file3'], funcStringCbErrBoolean, (err: Error, result: boolean) => { });

async.every(['file1', 'file2', 'file3'], funcStringCbErrBoolean, (err: Error, result: boolean) => { });
async.everyLimit(['file1', 'file2', 'file3'], 2, funcStringCbErrBoolean, (err: Error, result: boolean) => { });
async.all(['file1', 'file2', 'file3'], funcStringCbErrBoolean, (err: Error, result: boolean) => { });

async.concat(['dir1', 'dir2', 'dir3'], fs.readdir, (err, files) => { });
async.concatSeries(['dir1', 'dir2', 'dir3'], fs.readdir, (err, files) => { });

// Control Flow //

async.series([callback => { callback(undefined, 'one'); }, callback => { callback(undefined, 'two'); }], (err, results) => { });
async.series<string>([callback => { callback(undefined, 'one'); }, callback => { callback(undefined, 'two'); }], (err, results) => { });

async.series({
        one: callback => { setTimeout(() => { callback(undefined, 1); }, 200); },
        two: callback => { setTimeout(() => { callback(undefined, 2); }, 100); }
    },
    (err, results) => { });

async.series<number>({
        one: callback => { setTimeout(() => { callback(undefined, 1); }, 200); },
        two: callback => { setTimeout(() => { callback(undefined, 2); }, 100); }
    },
    (err, results) => { });

async.times(5, (n, next) => { next(undefined as any, n); }, (err, results) => { console.log(results); });

async.timesSeries(5, (n, next) => { next(undefined as any, n); }, (err, results) => { console.log(results); });

async.parallel([
        callback => { setTimeout(() => { callback(undefined, 'one'); }, 200); },
        callback => { setTimeout(() => { callback(undefined, 'two'); }, 100); }
    ],
    (err, results) => { });

async.parallel<string>([
        callback => { setTimeout(() => { callback(undefined, 'one'); }, 200); },
        callback => { setTimeout(() => { callback(undefined, 'two'); }, 100); }
    ],
    (err, results) => { });

async.parallel({
        one: callback => { setTimeout(() => { callback(undefined, 1); }, 200); },
        two: callback => { setTimeout(() => { callback(undefined, 2); }, 100); }
    },
    (err, results) => { });

async.parallel<number>({
        one: callback => { setTimeout(() => { callback(undefined, 1); }, 200); },
        two: callback => { setTimeout(() => { callback(undefined, 2); }, 100); }
    },
    (err, results) => { });

async.parallelLimit({
        one: callback => { setTimeout(() => { callback(undefined, 1); }, 200); },
        two: callback => { setTimeout(() => { callback(undefined, 2); }, 100); }
    },
    2,
    (err, results) => { }
);

function whileFn(callback: any) {
    setTimeout(() => callback(null, ++count), 1000);
}

function whileTest() { return count < 5; }
function doWhileTest(count: number) { return count < 5; }

let count = 0;
async.whilst(whileTest, whileFn, err => { });
async.until(whileTest, whileFn, err => { });
async.doWhilst(whileFn, doWhileTest, err => { });
async.doUntil(whileFn, doWhileTest, err => { });

async.during(testCallback => { testCallback(new Error(), false); }, callback => { callback(); }, error => { console.log(error); });
async.doDuring(callback => { callback(); }, testCallback => { testCallback(new Error(), false); }, error => { console.log(error); });
async.forever(errBack => { errBack(new Error("Not going on forever.")); }, error => { console.log(error); });

async.waterfall([
        (callback: any) => { callback(null, 'one', 'two'); },
        (arg1: any, arg2: any, callback: any) => { callback(null, 'three'); },
        (arg1: any, callback: any) => { callback(null, 'done'); }
    ],
    (err, result) => { });

const q = async.queue<any>((task: any, callback: (err?: Error, msg?: string) => void) => {
    console.log('hello ' + task.name);
    callback(undefined, 'a message.');
}, 2);

q.drain(() => { console.log('all items have been processed'); });

q.push({ name: 'foo' });
q.push({ name: 'bar' }, err => { console.log('finished processing bar'); });
q.push([{ name: 'baz' }, { name: 'bay' }, { name: 'bax' }], err => { console.log('finished processing bar'); });
q.push<string>({name: 'foo'}, (err, msg) => { console.log(`foo finished with a message "${msg!}"`); });

q.unshift({ name: 'foo' });
q.unshift({ name: 'bar' }, err => { console.log('finished processing bar'); });
q.unshift([{ name: 'baz' }, { name: 'bay' }, { name: 'bax' }], err => { console.log('finished processing bar'); });

const qLength: number = q.length();
const qStarted: boolean = q.started;
const qPaused: boolean = q.paused;
const qProcessingCount: number = q.running();
const qIsIdle: boolean = q.idle();

q.saturated(() => { console.log('queue is saturated.'); });

q.empty(() => { console.log('queue is empty.'); });

q.drain(() => { console.log('queue was drained.'); });

q.pause();
q.resume();
q.kill();

// tests for strongly typed tasks
const q2 = async.queue<string>((task: string, callback: () => void) => {
    console.log('Task: ' + task);
    callback();
}, 1);

q2.push('task1');
q2.push('task2', error => { console.log('Finished tasks'); });
q2.push(['task3', 'task4', 'task5'], error => { console.log('Finished tasks'); });

q2.unshift('task1');
q2.unshift('task2', error => { console.log('Finished tasks'); });
q2.unshift(['task3', 'task4', 'task5'], error => { console.log('Finished tasks'); });

const q2Length = q2.length();
q2.push('testRemovalTask');
q2.remove(x => x.data === 'testTaskRemoval');

if (q2Length !== q2.length()) {
  console.log('warning: Failed to remove a task from queue.');
}

const aq = async.queue<number, number>((level: number, callback: (error?: Error, newLevel?: number) => void) => {
    console.log('hello ' + level);
    callback(undefined, level + 1);
});

aq.push(1, (err: Error, newLevel: number) => {
    console.log('finished processing bar' + newLevel);
});

// tests for the error method of queue
const q3 = async.queue<string>((task: string, callback: ErrorCallback) => {
    callback(new Error(task));
}, 1);

q3.error((error, task) => {
    console.log('task: ' +  task);
    console.log('error: ' + error);
});

q3.push(["task1", "task2", "task3"]);

// create a cargo object with payload 2
const cargo = async.cargo((tasks, callback) => {
    for (const task of tasks) {
        console.log('hello ' + task.name);
    }
    callback();
}, 2);
cargo.drain(); // $ExpectType Promise<void>
cargo.drain(() => { console.log('done processing queue'); }); // $ExpectType void

// add some items
cargo.push({ name: 'foo' }, (err: Error) => { console.log('finished processing foo'); });
cargo.push({ name: 'bar' }, (err: Error) => { console.log('finished processing bar'); });
cargo.push({ name: 'baz' }, (err: Error) => { console.log('finished processing baz'); });

const filename = '';
async.auto({
    get_data: (callback: AsyncResultCallback<any>) => { },
    make_folder: (callback: AsyncResultCallback<any>) => { },

    // arrays with different types are not accepted by TypeScript.
    write_file: ['get_data', 'make_folder', ((callback: AsyncResultCallback<any>) => {
        callback(null, filename);
    }) as any],

    // arrays with different types are not accepted by TypeScript.
    email_link: ['write_file', ((callback: AsyncResultCallback<any>, results: any) => { }) as any]
});

async.auto({
        get_data: (callback: AsyncResultCallback<any>) => { },
        make_folder: (callback: AsyncResultCallback<any>) => { },

        // arrays with different types are not accepted by TypeScript.
        write_file: ['get_data', 'make_folder', ((callback: AsyncResultCallback<any>) => { callback(null, filename); }) as any],

        // arrays with different types are not accepted by TypeScript.
        email_link: ['write_file', ((callback: AsyncResultCallback<any>, results: any) => { }) as any]
    },
    (err, results) => { console.log('finished auto'); }
);

interface A {
    get_data: any;
    make_folder: any;
    write_file: any;
    email_link: any;
}

async.auto<A>({
        get_data: (callback: AsyncResultCallback<any>) => { },
        make_folder: (callback: AsyncResultCallback<any>) => { },

        // arrays with different types are not accepted by TypeScript.
        write_file: ['get_data', 'make_folder', ((callback: AsyncResultCallback<any>) => { callback(null, filename); }) as any],

        // arrays with different types are not accepted by TypeScript.
        email_link: ['write_file', ((callback: AsyncResultCallback<any>, results: any) => { }) as any]
    },
    1,
    (err, results) => { console.log('finished auto'); }
);

async.retry(); // $ExpectType Promise<void>
async.retry(3); // $ExpectType Promise<void>
// $ExpectType Promise<void>
async.retry(
    3,
    (callback, results) => {},
);
// $ExpectType void
async.retry(
    { times: 3, interval: 200 },
    (callback, results) => {},
    (err, result) => {},
);
// $ExpectType void
async.retry(
    { times: 3, interval: retryCount => 200 * retryCount },
    (callback, results) => {},
    (err, result) => {},
);
// $ExpectType void
async.retry(
    { times: 3, interval: 200, errorFilter: err => true },
    (callback, results) => {},
    (err, result) => {},
);

async.retryable(
    (callback) => {},
);
async.retryable(
    3,
    (callback) => {},
);
async.retryable(
    { times: 3, interval: 200 },
    (callback) => {},
);
async.retryable(
    { times: 3, interval: retryCount => 200 * retryCount },
    (callback) => {},
);

async.parallel([
        (callback: (err: Error, val: string) => void) => { },
        callback => { }
    ],
    (err: Error, results: string[]) => { async.series([callback => { }, function email_link(callback) { }]);
});

async.parallel([
    async.apply(fs.writeFile, 'testfile1', 'test1'),
    async.apply(fs.writeFile, 'testfile2', 'test2'),
]);

async.parallel([
    callback => { fs.writeFile('testfile1', 'test1', callback); },
    callback => { fs.writeFile('testfile2', 'test2', callback); }
]);

const call_order: string[] = [];
async.nextTick(() => { call_order.push('two'); });
call_order.push('one');

const slow_fn = (name: string, callback: any) => { callback(null, 123); };
const fn = async.memoize(slow_fn);

fn('some name', () => { });
async.unmemoize(fn);
async.ensureAsync(() => { });
async.constant(42);
async.asyncify(() => { });

async.log(
    (name: any, callback: any) => { setTimeout(() => { callback(null, 'hello ' + name); }, 0); },
    "world");

async.dir((name: string, callback: any) => { setTimeout(() => { callback(null, { hello: name }); }, 1000); }, "world");

// each

async.each<number>(
    { a: 1, b: 2 },
    (val: number, next: ErrorCallback) => {
        setTimeout(() => {
            console.log(`async.each: ${val}`);
            next();
        },
        500);
    },
    (err?: Error) => { console.log("async.each: done."); }
);

async.eachSeries<number>(
    { a: 1, b: 2 },
    (val: number, next: ErrorCallback) => {
        setTimeout(
            () => {
                console.log(`async.eachSeries: ${val}`);
                next();
            },
            500);
    },
    (err?: Error) => { console.log("async.eachSeries: done."); }
);

async.eachLimit<number>(
    { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 },
    2,
    (val: number, next: ErrorCallback) => {
        setTimeout(() => {
            console.log(`async.eachLimit: ${val}`);
            next();
        },
        500);
    },
    (err?: Error) => { console.log("async.eachLimit: done."); }
);

// forEachOf/eachOf

async.eachOf<number>(
    { a: 1, b: 2 },
    (val: number, key: string, next: ErrorCallback) => {
        setTimeout(
            () => {
                console.log(`async.forEachOf/eachOf: ${key} = ${val}`);
                next();
            },
            500);
    },
    (err?: Error) => { console.log("async.forEachOf/eachOf: done."); }
);

async.forEachOfSeries<number>(
    { a: 1, b: 2 },
    (val: number, key: string, next: ErrorCallback) => {
        setTimeout(
            () => {
                console.log(`async.forEachOfSeries: ${key} = ${val}`);
                next();
            },
            500);
    },
    (err?: Error) => { console.log("async.forEachOfSeries: done."); }
);

async.forEachOfLimit<number>(
    { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 },
    2,
    (val: number, key: string, next: ErrorCallback) => {
        setTimeout(
            () => {
                console.log(`async.forEachOfLimit: ${key} = ${val}`);
                next();
            },
            500);
    },
    (err?: Error) => { console.log("async.forEachOfLimit: done."); }
);

// map

async.map<number, string>(
    { a: 1, b: 2, c: 3 },
    (val: number, next: AsyncResultCallback<string>) => {
        setTimeout(
            () => {
                console.log(`async.map: ${val}`);
                next(undefined as any, val.toString());
            },
            500);
    },
    (err: Error, results: string[]) => { console.log("async.map: done with results", results); }
);

async.mapSeries<number, string>(
    { a: 1, b: 2, c: 3 },
    (val: number, next: AsyncResultCallback<string>) => {
        setTimeout(
            () => {
                console.log(`async.mapSeries: ${val}`);
                next(undefined as any, val.toString());
            },
            500);
    },
    (err: Error, results: string[]) => { console.log("async.mapSeries: done with results", results); }
);

async.mapLimit<number, string>(
    { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 },
    2,
    (val: number, next: AsyncResultCallback<string>) => {
    setTimeout(
        () => {
            console.log(`async.mapLimit: ${val}`);
            next(undefined as any, val.toString());
        },
        500);
    },
    (err: Error, results: string[]) => { console.log("async.mapLimit: done with results", results); }
);

// mapValues

async.mapValues<number, string>(
    { a: 1, b: 2, c: 3 },
    (val: number, key: string, next: AsyncResultCallback<string>) => {
        setTimeout(
            () => {
                console.log(`async.mapValues: ${key} = ${val}`);
                next(undefined as any, val.toString());
            },
            500);
    },
    (err: Error, results: Dictionary<string>) => { console.log("async.mapValues: done with results", results); }
);

async.mapValuesSeries<number, string>(
    { a: 1, b: 2, c: 3 },
    (val: number, key: string, next: AsyncResultCallback<string>) => {
        setTimeout(
            () => {
                console.log(`async.mapValuesSeries: ${key} = ${val}`);
                next(undefined as any, val.toString());
            },
            500);
    },
    (err: Error, results: Dictionary<string>) => { console.log("async.mapValuesSeries: done with results", results); }
);

// filter/select/reject

async.filter<number>(
    { a: 1, b: 2, c: 3 },
    (val: number, next: AsyncBooleanResultCallback) => {
        setTimeout(
            () => {
                console.log(`async.filter/select: ${val}`);
                next(undefined as any, val % 2 === 0);
            },
            500);
    },
    (err: Error, results: number[]) => { console.log("async.filter/select: done with results", results); }
);

async.reject<number>(
    { a: 1, b: 2, c: 3 },
    (val: number, next: AsyncBooleanResultCallback) => {
        setTimeout(
            () => {
                console.log(`async.reject: ${val}`);
                next(undefined as any, val % 2 === 0);
            },
            500);
    },
    (err: Error, results: number[]) => { console.log("async.reject: done with results", results); }
);

// concat

async.concat<string, string>(
    { a: "1", b: "2", c: "3" },
    (item: string, next: AsyncResultCallback<string[]>) => {
        console.log(`async.concat: ${item}`);
        next(undefined as any, [item, item, item]);
    },
    (err: Error, results: string[]) => { console.log("async.concat: done with results", results); }
);

// detect/find

async.detect<number>(
    { a: 1, b: 2, c: 3 },
    (item: number, next: AsyncBooleanResultCallback) => {
        console.log(`async.detect/find: ${item}`);
        next(undefined as any, item > 1);
    },
    (err: Error, result: number) => {
        if (err) {
            console.log(err);
        } else {
            console.log("async.detect/find: done with result", result);
        }
    }
);

// every/all

async.every<number>(
    { a: 1, b: 2, c: 3 },
    (item: number, next: AsyncBooleanResultCallback) => {
        console.log(`async.every/all: ${item}`);
        next(undefined as any, item > 0);
    },
    (err: Error, result: boolean) => { console.log("async.every/all: done with result", result); }
);

// some/any

async.some<number>(
    { a: 1, b: 2, c: 3 },
    (item: number, next: AsyncBooleanResultCallback) => {
        console.log(`async.some/any: ${item}`);
        next(undefined as any, item > 2);
    },
    (err: Error, result: boolean) => { console.log("async.some/any: done with result", result); }
);

// timeout

function myFunction1(foo: any, callback: (err?: Error, result?: any) => void): void {
    console.log(`async.timeout 1 ${foo}`);
    callback(undefined, foo);
}
const wrapped1 = async.timeout(myFunction1, 1000);
wrapped1({ bar: 'bar' }, (err: Error, data: any) => { console.log(`async.timeout 1 end ${data}`); });

function myFunction2(callback: (err?: Error, result?: any) => void): void {
    console.log(`async.timeout 2`);
    callback(undefined, { bar: 'bar' });
}

const wrapped2 = async.timeout(myFunction2, 1000);
wrapped2((err: Error, data: any) => { console.log(`async.timeout 2 end ${data}`); });

function myFunction3(callback: (err?: Error, result?: any) => void): void {
    console.log(`async.timeout 3`);
    callback(undefined, { bar: 'bar' });
}

const wrapped3 = async.timeout(myFunction3, 1000, { bar: 'bar' });
wrapped3((err: Error, data: any) => { console.log(`async.timeout 3 end ${data}`); });
