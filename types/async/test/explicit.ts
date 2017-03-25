

interface StringCallback { (err?: Error, result?: string): void; }
interface AsyncStringGetter { (callback: StringCallback): void; }

var taskArray: AsyncStringGetter[] = [
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
];

async.series(taskArray, function (err, results) {
    if (results) {
        let first = results[0];
        if (first) {
            console.log(first.match(/o/))
        }
    }
});
async.parallel(taskArray, function (err, results) {
    if (results) {
        let first = results[0];
        if (first) {
            console.log(first.match(/o/))
        }
    }
});
async.parallelLimit(taskArray, 3, function (err, results) {
    if (results) {
        let first = results[0];
        if (first) {
            console.log(first.match(/o/))
        }
    }
});


interface Lookup<T> { [key: string]: T; }
interface NumberCallback { (err?: Error, result?: number): void; }
interface AsyncNumberGetter { (callback: NumberCallback): void; }

var taskDict: Lookup<AsyncNumberGetter> = {
    one: function(callback){
        setTimeout(function(){
            callback(undefined, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function(){
            callback(undefined, 2);
        }, 100);
    }
}

async.series(taskDict, function(err, results) {
    let one = results['one'];
    console.log(one && one.toFixed(1))
});
async.parallel(taskDict, function(err, results) {
    let one = results['one'];
    console.log(one && one.toFixed(1))
});
async.parallelLimit(taskDict, 3, function(err, results) {
    let one = results['one'];
    console.log(one && one.toFixed(1))
});

