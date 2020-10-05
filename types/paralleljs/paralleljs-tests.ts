

interface String {
    reverse(): string;
}

var p = new Parallel<number[]>([1, 2, 3, 4, 5]);
console.log(p.data);

var p2 = new Parallel('forwards');

// Spawn a remote job (we'll see more on how to use then later)
p2.spawn(function (data) {
    data = data.reverse();

    console.log(data); // logs sdrawrof

    return data;
}).then(function (data) {
        console.log(data) // logs sdrawrof
});

var p3 = new Parallel([0, 1, 2, 3, 4, 5, 6]),
    log = function () { console.log(arguments); };

// One gotcha: anonymous functions cannot be serialzed
// If you want to do recursion, make sure the function
// is named appropriately
function fib(n: number): number {
    return n < 2 ? 1 : fib(n - 1) + fib(n - 2);
};

p3.map(fib).then(log);

var p4 = new Parallel([0, 1, 2, 3, 4, 5, 6, 7, 8]);

function add(d: number[]) { return d[0] + d[1]; }
function factorial(n: number): number { return n < 2 ? 1 : n * factorial(n - 1); }

p4.require(factorial);

// Approximate e^10
p4.map(function (n: number) { return Math.pow(10, n); }).reduce(add).then(log);

var p5 = new Parallel([1, 2, 3]);

function dbl(n: number) { return n * 2; }

p5.map(dbl).map(dbl).map(dbl).then(function (data) {
    console.log(data); // logs [8, 16, 24]
});

// Approximate e^10
p5.map(function (n: number) { return Math.pow(10, n) / factorial(n); }).reduce(add).then(log);
