interface StringCallback { (err?: Error, result?: string): void; }
interface AsyncStringGetter { (callback: StringCallback): void; }

const taskArray: AsyncStringGetter[] = [
    callback => { setTimeout(() => { callback(undefined, 'one'); }, 200); },
    callback => { setTimeout(() => { callback(undefined, 'two'); }, 100); }
];

async.series(taskArray, (err, results) => {
    if (results) {
        const first = results[0];
        if (first) {
            console.log(first.match(/o/));
        }
    }
});

async.parallel(taskArray, (err, results) => {
    if (results) {
        const first = results[0];
        if (first) {
            console.log(first.match(/o/));
        }
    }
});

async.parallelLimit(taskArray, 3, (err, results) => {
    if (results) {
        const first = results[0];
        if (first) {
            console.log(first.match(/o/));
        }
    }
});

interface Lookup<T> { [key: string]: T; }
interface NumberCallback { (err?: Error, result?: number): void; }
interface AsyncNumberGetter { (callback: NumberCallback): void; }

const taskDict: Lookup<AsyncNumberGetter> = {
    one: callback => { setTimeout(() => { callback(undefined, 1); }, 200); },
    two: callback => { setTimeout(() => { callback(undefined, 2); }, 100); }
};

async.series(taskDict, (err, results) => {
    const one = results['one'];
    console.log(one && one.toFixed(1));
});

async.parallel(taskDict, (err, results) => {
    const one = results['one'];
    console.log(one && one.toFixed(1));
});

async.parallelLimit(taskDict, 3, (err, results) => {
    const one = results['one'];
    console.log(one && one.toFixed(1));
});
