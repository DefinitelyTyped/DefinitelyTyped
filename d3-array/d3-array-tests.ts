/**
 * Typescript definition tests for d3/d3-array module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3 from 'd3-array';

// -----------------------------------------------------------------------------
// Preparatory Steps
// -----------------------------------------------------------------------------

class NumCoercible {
    public a: number;

    constructor(a: number) {
        this.a = a;
    }
    public valueOf() {
        return this.a;
    }
}


class MixedObject {

    public num: number;
    public str: string;
    public numeric: NumCoercible;
    public date: Date;

    constructor(a: number, date: Date) {
        this.num = a;
        this.str = a.toString();
        this.numeric = new NumCoercible(a);
        this.date = date;
    }
}
let num: number;
let str: string;
let numeric: NumCoercible;
let date: Date;
let extentNum: [number, number];
let extentStr: [string, string];
let extentNumeric: [NumCoercible, NumCoercible];
let extentDateMixed: [d3.Primitive, d3.Primitive];
let extentMixed: [d3.Primitive | NumCoercible, d3.Primitive | NumCoercible];
let extentDate: [Date, Date];

let numbersArray = [10, 20, 30, 40, 50];
let stringyNumbersArray = ['10', '20', '30', '40', '50'];
let numericArray = [new NumCoercible(10), new NumCoercible(20), new NumCoercible(30), new NumCoercible(40), new NumCoercible(50)];
let dateArray = [new Date(2016, 6, 1), new Date(2016, 7, 30), new Date(2015, 3, 15)];
let mixedObjectArray = [
    new MixedObject(10, new Date(2016, 6, 1)),
    new MixedObject(20, new Date(2016, 7, 30)),
    new MixedObject(30, new Date(2015, 3, 15)),
    new MixedObject(40, new Date(2014, 3, 15)),
    new MixedObject(50, new Date(2017, 4, 15))
];


// -----------------------------------------------------------------------------
// Test Statistics
// -----------------------------------------------------------------------------

// max() -----------------------------------------------------------------------

// without accessors

num = d3.max(numbersArray);
str = d3.max(stringyNumbersArray);
numeric = d3.max(numericArray);
date = d3.max(dateArray);

// with accessors

num = d3.max(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

str = d3.max(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.str;
});

numeric = d3.max(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.numeric;
});

date = d3.max(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.date;
});

// min() -----------------------------------------------------------------------

// without accessors

num = d3.min(numbersArray);
str = d3.min(stringyNumbersArray);
numeric = d3.min(numericArray);
date = d3.min(dateArray);

// with accessors

num = d3.min(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

str = d3.min(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.str;
});

numeric = d3.min(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.numeric;
});

date = d3.min(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.date;
});

// extent() --------------------------------------------------------------------

// without accessors

extentNum = d3.extent(numbersArray);
extentStr = d3.extent(stringyNumbersArray);
extentNumeric = d3.extent(numericArray);
extentDate = d3.extent(dateArray);
extentMixed = d3.extent([new NumCoercible(10), 13, '12', true]);

// with accessors

extentNum = d3.extent(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

extentStr = d3.extent(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.str;
});

extentMixed = d3.extent(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.numeric;
});

extentDateMixed = d3.extent(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.date;
});

// mean() ----------------------------------------------------------------------

num = d3.mean(numbersArray);

num = d3.mean(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

// median() --------------------------------------------------------------------

num = d3.median(numbersArray);

num = d3.median(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

// quantile() ------------------------------------------------------------------

num = d3.quantile(numbersArray, 0.5);

num = d3.quantile(mixedObjectArray, 0.5, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

// sum() -----------------------------------------------------------------------


num = d3.sum(numbersArray);

num = d3.sum(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

// deviation() -----------------------------------------------------------------

num = d3.deviation(numbersArray);

num = d3.deviation(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

// variance() ------------------------------------------------------------------

num = d3.variance(numbersArray);

num = d3.variance(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

// -----------------------------------------------------------------------------
// Test Searching Arrrays
// -----------------------------------------------------------------------------

// scan() ----------------------------------------------------------------------

num = d3.scan(mixedObjectArray, function (a, b) {
    return a.num - b.num; // a and b are of type MixedObject
});

// bisectLeft() ----------------------------------------------------------------

// TODO: complete

// bisect() --------------------------------------------------------------------

// TODO: complete

// bisectRight() ---------------------------------------------------------------

// TODO: complete

// bisector() ------------------------------------------------------------------

// TODO: complete

// ascending() -----------------------------------------------------------------

num = d3.ascending(10, 20);
num = d3.ascending('10', '20');
num = d3.ascending(new Date(2016, 6, 13), new Date(2016, 6, 14));

// descending() ----------------------------------------------------------------

num = d3.descending(10, 20);
num = d3.descending('10', '20');
num = d3.descending(new Date(2016, 6, 13), new Date(2016, 6, 14));

// -----------------------------------------------------------------------------
// Test Transforming  Arrays
// -----------------------------------------------------------------------------

// merge() ---------------------------------------------------------------------

let testArrays: MixedObject[][] = [
    [
        new MixedObject(10, new Date(2016, 6, 1)),
        new MixedObject(20, new Date(2016, 7, 30)),
        new MixedObject(30, new Date(2015, 3, 15)),
        new MixedObject(40, new Date(2014, 3, 15)),
        new MixedObject(50, new Date(2017, 4, 15))
    ],
    [
        new MixedObject(40, new Date(2016, 3, 1)),
        new MixedObject(50, new Date(2016, 9, 30)),
    ]
];


let mergedArray: MixedObject[];

mergedArray = d3.merge(testArrays); // inferred type
mergedArray = d3.merge<MixedObject>(testArrays); // explicit type
// mergedArray = d3.merge<MixedObject>([[10, 40, 30], [15, 30]]); // fails, type mismatch

// pairs() ---------------------------------------------------------------------

let pairs: Array<[MixedObject, MixedObject]>;

pairs = d3.pairs(mergedArray);

// permute() -------------------------------------------------------------------

// getting a permutation of array elements
mergedArray = d3.permute(mergedArray, [1, 0, 2, 5, 3, 4, 6]);

// Getting an ordered array with object properties

let testObject = {
    val: 10,
    name: 'Test',
    when: new Date(),
    more: [10, 30, 40]
};

let x: Array<number | string | Date | number[]> = d3.permute(testObject, ['name', 'val', 'when', 'more']);


// range() ---------------------------------------------------------------------

numbersArray = d3.range(10);
numbersArray = d3.range(1, 10);
numbersArray = d3.range(1, 10, 0.5);

// shuffle() -------------------------------------------------------------------

mergedArray = d3.shuffle(mergedArray);

mergedArray = d3.shuffle(mergedArray, 1);

mergedArray = d3.shuffle(mergedArray, 1, 3);


// ticks() ---------------------------------------------------------------------

numbersArray = d3.ticks(1, 10, 5);

// tickStep() ------------------------------------------------------------------

numbersArray = d3.tickStep(1, 10, 5);

// transpose() -----------------------------------------------------------------

testArrays = d3.transpose([
    [
        new MixedObject(10, new Date(2016, 6, 1)),
        new MixedObject(50, new Date(2017, 4, 15))
    ],
    [
        new MixedObject(40, new Date(2016, 3, 1)),
        new MixedObject(50, new Date(2016, 9, 30)),
    ]
]);

// zip() -----------------------------------------------------------------------

testArrays = d3.zip(
    [
        new MixedObject(10, new Date(2016, 6, 1)),
        new MixedObject(20, new Date(2016, 7, 30)),
        new MixedObject(30, new Date(2015, 3, 15)),
        new MixedObject(40, new Date(2014, 3, 15)),
        new MixedObject(50, new Date(2017, 4, 15))
    ],
    [
        new MixedObject(40, new Date(2016, 3, 1)),
        new MixedObject(50, new Date(2016, 9, 30)),
    ]
);

// -----------------------------------------------------------------------------
// Test Histogram
// -----------------------------------------------------------------------------

// Create histogram generator ==================================================

let defaultHistogram: d3.HistogramGenerator<number>;
defaultHistogram = d3.histogram();

let testHistogram: d3.HistogramGenerator<MixedObject>;
testHistogram = d3.histogram<MixedObject>();

// Configure histogram generator ===============================================

// value(...) ------------------------------------------------------------------


// domain(...) -----------------------------------------------------------------


// thresholds(...) -------------------------------------------------------------


// Use histogram generator =====================================================

let bins: Array<d3.Bin<MixedObject>>;
bins = testHistogram(mixedObjectArray);

// Note currently bins returned are as follows: !!!
// first bin.x0:T bin.x1:number,
// interior bin.x0:number, bin.x1:number
// last bin.x0:number, bin.x1:T

// Histogram Tresholds =========================================================

// TODO: Complete