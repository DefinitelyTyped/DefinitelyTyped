/**
 * Typescript definition tests for d3/d3-array module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Array from 'd3-array';
import { scaleTime } from 'd3-scale';
import { timeYear } from 'd3-time';

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
let extentDateMixed: [d3Array.Primitive, d3Array.Primitive];
let extentMixed: [d3Array.Primitive | NumCoercible, d3Array.Primitive | NumCoercible];
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

num = d3Array.max(numbersArray);
str = d3Array.max(stringyNumbersArray);
numeric = d3Array.max(numericArray);
date = d3Array.max(dateArray);

// with accessors

num = d3Array.max(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

str = d3Array.max(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.str;
});

numeric = d3Array.max(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.numeric;
});

date = d3Array.max(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.date;
});

// min() -----------------------------------------------------------------------

// without accessors

num = d3Array.min(numbersArray);
str = d3Array.min(stringyNumbersArray);
numeric = d3Array.min(numericArray);
date = d3Array.min(dateArray);

// with accessors

num = d3Array.min(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

str = d3Array.min(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.str;
});

numeric = d3Array.min(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.numeric;
});

date = d3Array.min(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.date;
});

// extent() --------------------------------------------------------------------

// without accessors

extentNum = d3Array.extent(numbersArray);
extentStr = d3Array.extent(stringyNumbersArray);
extentNumeric = d3Array.extent(numericArray);
extentDate = d3Array.extent(dateArray);
extentMixed = d3Array.extent<NumCoercible>([new NumCoercible(10), 13, '12', true]);

// with accessors

extentNum = d3Array.extent(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

extentStr = d3Array.extent(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.str;
});

extentMixed = d3Array.extent(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.numeric;
});

extentDateMixed = d3Array.extent(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.date;
});

// mean() ----------------------------------------------------------------------

num = d3Array.mean(numbersArray);

num = d3Array.mean(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

// median() --------------------------------------------------------------------

num = d3Array.median(numbersArray);

num = d3Array.median(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

// quantile() ------------------------------------------------------------------

num = d3Array.quantile(numbersArray, 0.5);

num = d3Array.quantile(mixedObjectArray, 0.5, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

// sum() -----------------------------------------------------------------------


num = d3Array.sum(numbersArray);

num = d3Array.sum(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

// deviation() -----------------------------------------------------------------

num = d3Array.deviation(numbersArray);

num = d3Array.deviation(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

// variance() ------------------------------------------------------------------

num = d3Array.variance(numbersArray);

num = d3Array.variance(mixedObjectArray, function (datum, index, array) {
    let d: MixedObject = datum;
    let i: number = index;
    let arr: Array<MixedObject> = array;
    return datum.num;
});

// -----------------------------------------------------------------------------
// Test Searching Arrays
// -----------------------------------------------------------------------------

// scan() ----------------------------------------------------------------------

num = d3Array.scan(mixedObjectArray, function (a, b) {
    return a.num - b.num; // a and b are of type MixedObject
});

// bisectLeft() ----------------------------------------------------------------

num = d3Array.bisectLeft([0, 2, 3, 4, 7, 8], 4);
num = d3Array.bisectLeft([0, 2, 3, 4, 7, 8], 4, 1);
num = d3Array.bisectLeft([0, 2, 3, 4, 7, 8], 4, 1, 4);

num = d3Array.bisectLeft(['0', '2', '3', '4', '7', '8'], '21');
num = d3Array.bisectLeft(['0', '2', '3', '4', '7', '8'], '21', 1);
num = d3Array.bisectLeft(['0', '2', '3', '4', '7', '8'], '21', 1, 4);

num = d3Array.bisectLeft([new Date(2010, 1, 1), new Date(2011, 1, 1), new Date(2012, 1, 1), new Date(2013, 1, 1)], new Date(2011, 2, 1));
num = d3Array.bisectLeft([new Date(2010, 1, 1), new Date(2011, 1, 1), new Date(2012, 1, 1), new Date(2013, 1, 1)], new Date(2011, 2, 1), 1);
num = d3Array.bisectLeft([new Date(2010, 1, 1), new Date(2011, 1, 1), new Date(2012, 1, 1), new Date(2013, 1, 1)], new Date(2011, 2, 1), 1, 2);

// bisectRight() ---------------------------------------------------------------

num = d3Array.bisectRight([0, 2, 3, 4, 7, 8], 4);
num = d3Array.bisectRight([0, 2, 3, 4, 7, 8], 4, 1);
num = d3Array.bisectRight([0, 2, 3, 4, 7, 8], 4, 1, 4);

num = d3Array.bisectRight(['0', '2', '3', '4', '7', '8'], '21');
num = d3Array.bisectRight(['0', '2', '3', '4', '7', '8'], '21', 1);
num = d3Array.bisectRight(['0', '2', '3', '4', '7', '8'], '21', 1, 4);

num = d3Array.bisectRight([new Date(2010, 1, 1), new Date(2011, 1, 1), new Date(2012, 1, 1), new Date(2013, 1, 1)], new Date(2011, 2, 1));
num = d3Array.bisectRight([new Date(2010, 1, 1), new Date(2011, 1, 1), new Date(2012, 1, 1), new Date(2013, 1, 1)], new Date(2011, 2, 1), 1);
num = d3Array.bisectRight([new Date(2010, 1, 1), new Date(2011, 1, 1), new Date(2012, 1, 1), new Date(2013, 1, 1)], new Date(2011, 2, 1), 1, 2);

// bisect() --------------------------------------------------------------------

num = d3Array.bisect([0, 2, 3, 4, 7, 8], 4);
num = d3Array.bisect([0, 2, 3, 4, 7, 8], 4, 1);
num = d3Array.bisect([0, 2, 3, 4, 7, 8], 4, 1, 4);

num = d3Array.bisect(['0', '2', '3', '4', '7', '8'], '21');
num = d3Array.bisect(['0', '2', '3', '4', '7', '8'], '21', 1);
num = d3Array.bisect(['0', '2', '3', '4', '7', '8'], '21', 1, 4);

num = d3Array.bisect([new Date(2010, 1, 1), new Date(2011, 1, 1), new Date(2012, 1, 1), new Date(2013, 1, 1)], new Date(2011, 2, 1));
num = d3Array.bisect([new Date(2010, 1, 1), new Date(2011, 1, 1), new Date(2012, 1, 1), new Date(2013, 1, 1)], new Date(2011, 2, 1), 1);
num = d3Array.bisect([new Date(2010, 1, 1), new Date(2011, 1, 1), new Date(2012, 1, 1), new Date(2013, 1, 1)], new Date(2011, 2, 1), 1, 2);

// bisector() ------------------------------------------------------------------

mixedObjectArray.sort(function (a, b) { return a.date.valueOf() - b.date.valueOf(); });

let mixedObjectDateBisectorObject: d3Array.Bisector<MixedObject, Date>;

// define using accessor
mixedObjectDateBisectorObject = d3Array.bisector<MixedObject, Date>(function (el) {
    return el.date;
});

// define using comparator
mixedObjectDateBisectorObject = d3Array.bisector<MixedObject, Date>(function (el, x) {
    return el.date.valueOf() - x.valueOf();
});

// bisect left
num = mixedObjectDateBisectorObject.left(mixedObjectArray, new Date(2015, 3, 14));
num = mixedObjectDateBisectorObject.left(mixedObjectArray, new Date(2015, 3, 14), 1);
num = mixedObjectDateBisectorObject.left(mixedObjectArray, new Date(2015, 3, 14), 3, 4);

// bisect right
num = mixedObjectDateBisectorObject.right(mixedObjectArray, new Date(2015, 3, 14));
num = mixedObjectDateBisectorObject.right(mixedObjectArray, new Date(2015, 3, 14), 1);
num = mixedObjectDateBisectorObject.right(mixedObjectArray, new Date(2015, 3, 14), 3, 4);


// ascending() -----------------------------------------------------------------

num = d3Array.ascending(10, 20);
num = d3Array.ascending('10', '20');
num = d3Array.ascending(new Date(2016, 6, 13), new Date(2016, 6, 14));

// descending() ----------------------------------------------------------------

num = d3Array.descending(10, 20);
num = d3Array.descending('10', '20');
num = d3Array.descending(new Date(2016, 6, 13), new Date(2016, 6, 14));

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

mergedArray = d3Array.merge(testArrays); // inferred type
mergedArray = d3Array.merge<MixedObject>(testArrays); // explicit type
// mergedArray = d3.merge<MixedObject>([[10, 40, 30], [15, 30]]); // fails, type mismatch

// pairs() ---------------------------------------------------------------------

let pairs: Array<[MixedObject, MixedObject]>;

pairs = d3Array.pairs(mergedArray);

// permute() -------------------------------------------------------------------

// getting a permutation of array elements
mergedArray = d3Array.permute(mergedArray, [1, 0, 2, 5, 3, 4, 6]);

// Getting an ordered array with object properties

let testObject = {
    val: 10,
    name: 'Test',
    when: new Date(),
    more: [10, 30, 40]
};

let x: Array<number | string | Date | number[]> = d3Array.permute(testObject, ['name', 'val', 'when', 'more']);


// range() ---------------------------------------------------------------------

numbersArray = d3Array.range(10);
numbersArray = d3Array.range(1, 10);
numbersArray = d3Array.range(1, 10, 0.5);

// shuffle() -------------------------------------------------------------------

mergedArray = d3Array.shuffle(mergedArray);

mergedArray = d3Array.shuffle(mergedArray, 1);

mergedArray = d3Array.shuffle(mergedArray, 1, 3);


// ticks() ---------------------------------------------------------------------

numbersArray = d3Array.ticks(1, 10, 5);

// tickStep() ------------------------------------------------------------------

numbersArray = d3Array.tickStep(1, 10, 5);

// transpose() -----------------------------------------------------------------

testArrays = d3Array.transpose([
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

testArrays = d3Array.zip(
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

let tScale = scaleTime();

// Create histogram generator ==================================================

let defaultHistogram: d3Array.HistogramGenerator<number, number>;
defaultHistogram = d3Array.histogram();

let testHistogram: d3Array.HistogramGenerator<MixedObject, Date>;
testHistogram = d3Array.histogram<MixedObject, Date>();

// Configure histogram generator ===============================================

// value(...) ------------------------------------------------------------------

testHistogram = testHistogram.value(function (d, i, data) {
    let datum: MixedObject = d; // d is of type MixedObject
    let index: number = i; // i is number
    let array: MixedObject[] = data; // data is of type MixedObject[]
    return datum.date;
});

let valueAccessorFn: (d: MixedObject, i: number, data: MixedObject[]) => Date;
valueAccessorFn = testHistogram.value();

// domain(...) -----------------------------------------------------------------

// test with array
testHistogram = testHistogram.domain([new Date(2014, 3, 15), new Date(2017, 4, 15)]);

// usage with scale domain:
let domain = tScale.domain();

testHistogram = testHistogram.domain([domain[0], domain[domain.length]]);

// testHistogram = testHistogram.domain(tScale.domain()); // fails, as scale domain is an array with possibly more than the two elements expected by histogram

// use with accessor function
testHistogram = testHistogram.domain(function (values) {
    return [values[0], values[values.length]];
});

// get current domain accessor function
let domainAccessorFn: (values: Date[]) => [Date, Date];
domainAccessorFn = testHistogram.domain();

// thresholds(...) -------------------------------------------------------------

// with count constant
defaultHistogram = defaultHistogram.thresholds(3);

// with threshold count generator
defaultHistogram = defaultHistogram.thresholds(d3Array.thresholdScott);

// with thresholds value array

testHistogram = testHistogram.thresholds([new Date(2015, 11, 15), new Date(2016, 6, 1), new Date(2016, 8, 30)]);

// with thresholds value array accessors
testHistogram = testHistogram.thresholds(function (values: Date[], min: Date, max: Date) {
    let thresholds: Date[];
    thresholds = [values[0], values[2], values[4]];
    return thresholds;
});

testHistogram = testHistogram.thresholds(tScale.ticks(timeYear));

// Use histogram generator =====================================================

let defaultBins: Array<d3Array.Bin<number, number>>;
defaultBins = defaultHistogram([-1, 0, 1, 1, 3, 20, 234]);

let defaultBin: d3Array.Bin<number, number>;
defaultBin = defaultBins[0];

num = defaultBin.length; // defaultBin is array
num = defaultBin[0]; // with element type number
num = defaultBin.x0; // bin lower bound is number
num = defaultBin.x1; // bin upper bound is number

let testBins: Array<d3Array.Bin<MixedObject, Date>>;
testBins = testHistogram(mixedObjectArray);

let testBin: d3Array.Bin<MixedObject, Date>;
testBin = testBins[0];

num = testBin.length; // defaultBin is array
let mixedObject: MixedObject = testBin[0]; // with element type MixedObject
date = testBin.x0; // bin lower bound is Date
date = testBin.x1; // bin upper bound is Date



// Histogram Tresholds =========================================================

num = d3Array.thresholdFreedmanDiaconis([-1, 0, 1, 1, 3, 20, 234], -1, 234);

num = d3Array.thresholdScott([-1, 0, 1, 1, 3, 20, 234], -1, 234);

num = d3Array.thresholdSturges([-1, 0, 1, 1, 3, 20, 234]);
