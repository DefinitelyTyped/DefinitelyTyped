/// <reference path="async.d.ts" />

var fs, path;

function callback() {}

async.map(['file1', 'file2', 'file3'], fs.stat, function (err, results) { });

async.filter(['file1', 'file2', 'file3'], path.exists, function (results) { });

async.parallel([
    function () { },
    function () { }
], callback);

async.series([
    function () { },
    function () { }
]);

var data;
function asyncProcess() { }
async.map(data, asyncProcess, function (err, results) {
    alert(results);
});

var openFiles = ['file1', 'file2'];
var saveFile = function () { }
async.forEach(openFiles, saveFile, function (err) { });

var documents, requestApi;
async.forEachLimit(documents, 20, requestApi, function (err) { });

async.map(['file1', 'file2', 'file3'], fs.stat, function (err, results) { });

async.filter(['file1', 'file2', 'file3'], path.exists, function (results) { });

var process;
async.reduce([1, 2, 3], 0, function (memo, item, callback) {
    process.nextTick(function () {
        callback(null, memo + item)
    });
}, function (err, result) { });

async.detect(['file1', 'file2', 'file3'], path.exists, function (result) { });

async.sortBy(['file1', 'file2', 'file3'], function (file, callback) {
    fs.stat(file, function (err, stats) {
        callback(err, stats.mtime);
    });
}, function (err, results) { });

async.some(['file1', 'file2', 'file3'], path.exists, function (result) { });

async.every(['file1', 'file2', 'file3'], path.exists, function (result) { });

async.concat(['dir1', 'dir2', 'dir3'], fs.readdir, function (err, files) { });

async.series([
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


var count = 0;

async.whilst(
    function () { return count < 5; },
    function (callback) {
        count++;
        setTimeout(callback, 1000);
    },
    function (err) { }
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


var q = async.queue(function (task, callback) {
    console.log('hello ' + task.name);
    callback();
}, 2);


q.drain = function () {
    console.log('all items have been processed');
}

q.push({ name: 'foo' }, function (err) {
    console.log('finished processing foo');
});
q.push({ name: 'bar' }, function (err) {
    console.log('finished processing bar');
});

q.push([{ name: 'baz' }, { name: 'bay' }, { name: 'bax' }], function (err) {
    console.log('finished processing bar');
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


async.parallel([
    function (callback) { },
    function (callback) { }
],
function (results) {
    async.series([
        function (callback) { },
        function email_link(callback) { }
    ]);
});

var sys;
var iterator = async.iterator([
    function () { sys.p('one'); },
    function () { sys.p('two'); },
    function () { sys.p('three'); }
]);

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
