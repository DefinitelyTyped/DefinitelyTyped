declare var console: { log(...args: any[]): void };
declare var setTimeout: (cb: () => void, timeout: number) => void;

import steed = require('steed');

declare const path: {
    exists(path: string, callback?: (error: Error, exists: boolean) => any): void;
};

function funcStringCbErrBoolean(v: string, cb: (error: Error, res: boolean) => void) { }
function callback() { }

steed.parallel([
    () => {},
    () => {}
], callback);

steed.series([
    () => {},
    () => {}
]);

const data: any[] = [];
function steedProcess(item: any, callback: (error: Error, result: any) => void) { }
steed.map(data, steedProcess, (error, results) => {
    console.log(results);
});

const openFiles = ['file1', 'file2'];

const saveFile = (file: string, cb: (error: Error) => void) => {};
steed.each(openFiles, saveFile, (error: Error) => {});
steed.eachSeries(openFiles, saveFile, (error: Error) => {});

// Control Flow //

steed.series([
    callback => {
        callback(undefined, 'one');
    },
    callback => {
        callback(undefined, 'two');
    },
],
    (error, results) => {});

steed.series<string, Error>([
    callback => {
        callback(undefined, 'one');
    },
    callback => {
        callback(undefined, 'two');
    },
],
    (error, results) => {});

steed.series({
    one(callback) {
        setTimeout(() => {
            callback(undefined, 1);
        }, 200);
    },
    two(callback) {
        setTimeout(() => {
            callback(undefined, 2);
        }, 100);
    },
},
    (error, results) => {});

steed.series<number, Error>({
    one(callback) {
        setTimeout(() => {
            callback(undefined, 1);
        }, 200);
    },
    two(callback) {
        setTimeout(() => {
            callback(undefined, 2);
        }, 100);
    },
},
    (error, results) => {});

steed.parallel([
    callback => {
        setTimeout(() => {
            callback(undefined, 'one');
        }, 200);
    },
    callback => {
        setTimeout(() => {
            callback(undefined, 'two');
        }, 100);
    },
],
    (error, results) => {});

steed.parallel<string, Error>([
    callback => {
        setTimeout(() => {
            callback(undefined, 'one');
        }, 200);
    },
    callback => {
        setTimeout(() => {
            callback(undefined, 'two');
        }, 100);
    },
],
    (error, results) => {});

steed.parallel({
    one(callback) {
        setTimeout(() => {
            callback(undefined, 1);
        }, 200);
    },
    two(callback) {
        setTimeout(() => {
            callback(undefined, 2);
        }, 100);
    },
},
    (error, results) => {});

steed.parallel<number, Error>({
    one(callback) {
        setTimeout(() => {
            callback(undefined, 1);
        }, 200);
    },
    two(callback) {
        setTimeout(() => {
            callback(undefined, 2);
        }, 100);
    },
},
    (error, results) => {});

function whileFn(callback: any) {
    count++;
    setTimeout(callback, 1000);
}

function whileTest() { return count < 5; }
let count = 0;

steed.waterfall([
    (callback: any) => {
        callback(null, 'one', 'two');
    },
    (arg1: any, arg2: any, callback: any) => {
        callback(null, 'three');
    },
    (arg1: any, callback: any) => {
        callback(null, 'done');
    }
], (error, result) => {});

const q = steed.queue<any, Error>((task: any, callback: () => void) => {
    console.log('hello ' + task.name);
    callback();
}, 2);

q.drain = () => {
    console.log('all items have been processed');
};

q.push({ name: 'foo' });

q.push({ name: 'bar' }, err => {
    console.log('finished processing bar');
});

q.push([{ name: 'baz' }, { name: 'bay' }, { name: 'bax' }], (error: Error) => {
    console.log('finished processing bar');
});

q.unshift({ name: 'foo' });

q.unshift({ name: 'bar' }, err => {
    console.log('finished processing bar');
});

q.unshift([{ name: 'baz' }, { name: 'bay' }, { name: 'bax' }], (error: Error) => {
    console.log('finished processing bar');
});

const qLength: number = q.length();
const qIsIdle: boolean = q.idle();

q.saturated = () => {
    console.log('queue is saturated.');
};

q.empty = () => {
    console.log('queue is empty.');
};

q.drain = () => {
    console.log('queue was drained.');
};

q.pause();
q.resume();
q.kill();

// tests for strongly typed tasks
const q2 = steed.queue<string, Error>((task: string, callback: () => void) => {
    console.log('Task: ' + task);
    callback();
}, 1);

q2.push('task1');

q2.push('task2', error => {
    console.log('Finished tasks');
});

q2.push(['task3', 'task4', 'task5'], (error: Error) => {
    console.log('Finished tasks');
});

q2.unshift('task1');

q2.unshift('task2', error => {
    console.log('Finished tasks');
});

q2.unshift(['task3', 'task4', 'task5'], (error: Error) => {
    console.log('Finished tasks');
});

steed.parallel([
    (callback: (error: Error, val: string) => void) => { },
    callback => {}
],
    (error: Error, results: string[]) => {
        steed.series([
            callback => { },
            function email_link(callback) { }
        ]);
    });

// each

steed.each<number, Error>({
    a: 1,
    b: 2
}, (val: number, next: steed.ErrorCallback<Error>): void => {
    setTimeout((): void => {
        console.log(`steed.each: ${val}`);
        next();
    }, 500);
}, (err?: Error): void => {
    console.log("steed.each: done.");
});

steed.eachSeries<number, Error>({
    a: 1,
    b: 2
}, (val: number, next: steed.ErrorCallback<Error>): void => {
    setTimeout((): void => {
        console.log(`steed.eachSeries: ${val}`);
        next();
    }, 500);
}, (err?: Error): void => {
    console.log("steed.eachSeries: done.");
});

// map

steed.map<number, string, Error>({
    a: 1,
    b: 2,
    c: 3
}, (val: number, next: steed.SteedResultCallback<string, Error>): void => {
    setTimeout((): void => {
        console.log(`steed.map: ${val}`);
        next(undefined as any, val.toString());
    }, 500);
}, (error: Error, results: string[]): void => {
    console.log("steed.map: done with results", results);
});

steed.mapSeries<number, string, Error>({
    a: 1,
    b: 2,
    c: 3
}, (val: number, next: steed.SteedResultCallback<string, Error>): void => {
    setTimeout((): void => {
        console.log(`steed.mapSeries: ${val}`);
        next(undefined as any, val.toString());
    }, 500);
}, (error: Error, results: string[]): void => {
    console.log("steed.mapSeries: done with results", results);
});
