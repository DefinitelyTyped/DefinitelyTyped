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
    a: number;

    constructor(a: number) {
        this.a = a;
    }
    valueOf() {
        return this.a;
    }
}

class MixedObject {
    num: number;
    str: string;
    numeric: NumCoercible;
    date: Date;

    constructor(a: number, date: Date) {
        this.num = a;
        this.str = a.toString();
        this.numeric = new NumCoercible(a);
        this.date = date;
    }
}

let num: number;
let date: Date;

let numOrUndefined: number | undefined;
let strOrUndefined: string |  undefined;
let numericOrUndefined: NumCoercible |  undefined;
let dateOrUndefined: Date |  undefined;
let numOrUndefinedExtent: [number, number] | [undefined, undefined];
let strOrUndefinedExtent: [string, string] | [undefined, undefined];
let numericOrUndefinedExtent: [NumCoercible, NumCoercible] | [undefined, undefined];
let dateMixedOrUndefined: [Date, Date] | [undefined, undefined];
let mixedOrUndefinedExtent: [d3Array.Primitive | NumCoercible, d3Array.Primitive | NumCoercible] | [undefined, undefined];
let dateOrUndefinedExtent: [Date, Date] | [undefined, undefined];

let numbersArray = [10, 20, 30, 40, 50];
const numbersOrUndefinedArray = [10, 20, undefined, null, 40, 50];
const stringyNumbersArray = ['10', '20', '30', '40', '50'];
const numericArray = [new NumCoercible(10), new NumCoercible(20), new NumCoercible(30), new NumCoercible(40), new NumCoercible(50)];
const dateArray = [new Date(2016, 6, 1), new Date(2016, 7, 30), new Date(2015, 3, 15)];
const mixedObjectArray = [
    new MixedObject(10, new Date(2016, 6, 1)),
    new MixedObject(20, new Date(2016, 7, 30)),
    new MixedObject(30, new Date(2015, 3, 15)),
    new MixedObject(40, new Date(2014, 3, 15)),
    new MixedObject(50, new Date(2017, 4, 15))
];
const mixedObjectOrUndefinedArray = [...mixedObjectArray, undefined];

function accessorMixedObjectToNum(datum: MixedObject, index: number, array: MixedObject[]): number {
    return datum.num;
}

function accessorMixedObjectToStr(datum: MixedObject, index: number, array: MixedObject[]): string {
    return datum.str;
}

function accessorMixedObjectToNumeric(datum: MixedObject, index: number, array: MixedObject[]): NumCoercible {
    return datum.numeric;
}

function accessorMixedObjectToDate(datum: MixedObject, index: number, array: MixedObject[]): Date {
    return datum.date;
}

function accessorMixedObjectToNumOrUndefined(datum: MixedObject | undefined, index: number, array: Array<MixedObject | undefined>): number | undefined | null {
    return datum ? datum.num : undefined;
}

function accessorMixedObjectToStrOrUndefined(datum: MixedObject | undefined, index: number, array: MixedObject[]): string | undefined | null {
    return datum ? datum.str : undefined;
}

// -----------------------------------------------------------------------------
// Test Statistics
// -----------------------------------------------------------------------------

// max() -----------------------------------------------------------------------

// without accessors

numOrUndefined = d3Array.max(numbersArray);
strOrUndefined = d3Array.max(stringyNumbersArray);
numericOrUndefined = d3Array.max(numericArray);
dateOrUndefined = d3Array.max(dateArray);

// with accessors

numOrUndefined = d3Array.max(mixedObjectArray, accessorMixedObjectToNum);
strOrUndefined = d3Array.max(mixedObjectArray, accessorMixedObjectToStr);
numericOrUndefined = d3Array.max(mixedObjectArray, accessorMixedObjectToNumeric);
dateOrUndefined = d3Array.max(mixedObjectArray, accessorMixedObjectToDate);
numOrUndefined = d3Array.max(mixedObjectArray, accessorMixedObjectToNumOrUndefined);
strOrUndefined = d3Array.max(mixedObjectArray, accessorMixedObjectToStrOrUndefined);

// min() -----------------------------------------------------------------------

// without accessors

numOrUndefined = d3Array.min(numbersArray);
strOrUndefined = d3Array.min(stringyNumbersArray);
numericOrUndefined = d3Array.min(numericArray);
dateOrUndefined = d3Array.min(dateArray);

// with accessors

numOrUndefined = d3Array.min(mixedObjectArray, accessorMixedObjectToNum);
strOrUndefined = d3Array.min(mixedObjectArray, accessorMixedObjectToStr);
numericOrUndefined = d3Array.min(mixedObjectArray, accessorMixedObjectToNumeric);
dateOrUndefined = d3Array.min(mixedObjectArray, accessorMixedObjectToDate);
numOrUndefined = d3Array.min(mixedObjectArray, accessorMixedObjectToNumOrUndefined);
strOrUndefined = d3Array.min(mixedObjectArray, accessorMixedObjectToStrOrUndefined);

// extent() --------------------------------------------------------------------

// without accessors

numOrUndefinedExtent = d3Array.extent(numbersArray);
strOrUndefinedExtent = d3Array.extent(stringyNumbersArray);
numericOrUndefinedExtent = d3Array.extent(numericArray);
dateOrUndefinedExtent = d3Array.extent(dateArray);

// with accessors

numOrUndefinedExtent = d3Array.extent(mixedObjectArray, accessorMixedObjectToNum);
strOrUndefinedExtent = d3Array.extent(mixedObjectArray, accessorMixedObjectToStr);
mixedOrUndefinedExtent = d3Array.extent(mixedObjectArray, accessorMixedObjectToNumeric);
dateMixedOrUndefined = d3Array.extent(mixedObjectArray, accessorMixedObjectToDate);
numOrUndefinedExtent = d3Array.extent(mixedObjectArray, accessorMixedObjectToNumOrUndefined);
strOrUndefinedExtent = d3Array.extent(mixedObjectArray, accessorMixedObjectToStrOrUndefined);

// mean() ----------------------------------------------------------------------

numOrUndefined = d3Array.mean(numbersArray);
numOrUndefined = d3Array.mean(numericArray);
numOrUndefined = d3Array.mean(numbersOrUndefinedArray);

numOrUndefined = d3Array.mean(mixedObjectArray, accessorMixedObjectToNum);
numOrUndefined = d3Array.mean(mixedObjectOrUndefinedArray, accessorMixedObjectToNumOrUndefined);

// median() --------------------------------------------------------------------

numOrUndefined = d3Array.median(numbersArray);
numOrUndefined = d3Array.median(numericArray);
numOrUndefined = d3Array.median(numbersOrUndefinedArray);

numOrUndefined = d3Array.median(mixedObjectArray, accessorMixedObjectToNum);
numOrUndefined = d3Array.median(mixedObjectOrUndefinedArray, accessorMixedObjectToNumOrUndefined);

// quantile() ------------------------------------------------------------------

numOrUndefined = d3Array.quantile(numbersArray, 0.5);
numOrUndefined = d3Array.quantile(numericArray, 0.5);
numOrUndefined = d3Array.quantile(numbersOrUndefinedArray, 0.5);

numOrUndefined = d3Array.quantile(mixedObjectArray, 0.5, accessorMixedObjectToNum);
numOrUndefined = d3Array.quantile(mixedObjectOrUndefinedArray, 0.5, accessorMixedObjectToNumOrUndefined);

// sum() -----------------------------------------------------------------------

numOrUndefined = d3Array.sum(numbersArray);
numOrUndefined = d3Array.sum(numericArray);
numOrUndefined = d3Array.sum(numbersOrUndefinedArray);

numOrUndefined = d3Array.sum(mixedObjectArray, accessorMixedObjectToNum);
numOrUndefined = d3Array.sum(mixedObjectOrUndefinedArray, accessorMixedObjectToNumOrUndefined);

// deviation() -----------------------------------------------------------------

numOrUndefined = d3Array.deviation(numbersArray);
numOrUndefined = d3Array.deviation(numericArray);
numOrUndefined = d3Array.deviation(numbersOrUndefinedArray);

numOrUndefined = d3Array.deviation(mixedObjectArray, accessorMixedObjectToNum);
numOrUndefined = d3Array.deviation(mixedObjectOrUndefinedArray, accessorMixedObjectToNumOrUndefined);

// variance() ------------------------------------------------------------------

numOrUndefined = d3Array.variance(numbersArray);
numOrUndefined = d3Array.variance(numericArray);
numOrUndefined = d3Array.variance(numbersOrUndefinedArray);

numOrUndefined = d3Array.variance(mixedObjectArray, accessorMixedObjectToNum);
numOrUndefined = d3Array.variance(mixedObjectOrUndefinedArray, accessorMixedObjectToNumOrUndefined);

// -----------------------------------------------------------------------------
// Test Searching Arrays
// -----------------------------------------------------------------------------

// scan() ----------------------------------------------------------------------

numOrUndefined = d3Array.scan(numbersArray);

numOrUndefined = d3Array.scan(mixedObjectArray, (a, b) => {
    const aElem: MixedObject = a;
    const bElem: MixedObject = b;
    return a.num - b.num;
});

numOrUndefined = d3Array.scan(mixedObjectOrUndefinedArray, (a, b) => {
    const aElem: MixedObject | undefined = a;
    const bElem: MixedObject | undefined = b;
    return a && b ? a.num - b.num : NaN;
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

mixedObjectArray.sort((a, b) => a.date.valueOf() - b.date.valueOf());

let mixedObjectDateBisectorObject: d3Array.Bisector<MixedObject, Date>;

// define using accessor
mixedObjectDateBisectorObject = d3Array.bisector<MixedObject, Date>(el => el.date);

// define using comparator
mixedObjectDateBisectorObject = d3Array.bisector<MixedObject, Date>((el, x) =>
    el.date.valueOf() - x.valueOf());

// bisect left
num = mixedObjectDateBisectorObject.left(mixedObjectArray, new Date(2015, 3, 14));
num = mixedObjectDateBisectorObject.left(mixedObjectArray, new Date(2015, 3, 14), 1);
num = mixedObjectDateBisectorObject.left(mixedObjectArray, new Date(2015, 3, 14), 3, 4);

// bisect right
num = mixedObjectDateBisectorObject.right(mixedObjectArray, new Date(2015, 3, 14));
num = mixedObjectDateBisectorObject.right(mixedObjectArray, new Date(2015, 3, 14), 1);
num = mixedObjectDateBisectorObject.right(mixedObjectArray, new Date(2015, 3, 14), 3, 4);

// ascending() -----------------------------------------------------------------

num = d3Array.ascending(undefined, 20);
num = d3Array.ascending(10, 20);
num = d3Array.ascending('10', '20');
num = d3Array.ascending(new Date(2016, 6, 13), new Date(2016, 6, 14));

// descending() ----------------------------------------------------------------

num = d3Array.descending(undefined, 20);
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
// mergedArray = d3Array.merge<MixedObject>([[10, 40, 30], [15, 30]]); // fails, type mismatch

// cross() ---------------------------------------------------------------------

let crossed: Array<[string, number]>;

crossed = d3Array.cross(['x', 'y'], [1, 2]);
crossed = d3Array.cross<string, number>(['x', 'y'], [1, 2]);

let strArray: string[] = d3Array.cross<number, number, string>([2, 3], [5, 6], (a, b) => (a + b) + 'px');
strArray = d3Array.cross([2, 3], [5, 6], (a, b) => {
    const aa: number = a;
    const bb: number = b;
    return (aa + bb) + 'px';
});

// pairs() ---------------------------------------------------------------------

let pairs: Array<[MixedObject, MixedObject]>;

pairs = d3Array.pairs(mergedArray);

numbersArray = d3Array.pairs<MixedObject, number>(mergedArray, (a, b) => b.num - a.num);
numbersArray = d3Array.pairs(mergedArray, (a, b) => {
    const aa: MixedObject = a;
    const bb: MixedObject = b;
    return bb.num - aa.num;
});

// permute() -------------------------------------------------------------------

// getting a permutation of array elements
mergedArray = d3Array.permute(mergedArray, [1, 0, 2, 5, 3, 4, 6]);

// Getting an ordered array with object properties

const testObject = {
    val: 10,
    name: 'Test',
    when: new Date(),
    more: [10, 30, 40]
};

const x: Array<number | string | Date | number[]> = d3Array.permute(testObject, ['name', 'val', 'when', 'more']);

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

// tickIncrement() ------------------------------------------------------------------

let numDiff: number = d3Array.tickIncrement(1, 10, 5);

// tickStep() ------------------------------------------------------------------

numDiff = d3Array.tickStep(1, 10, 5);

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

const tScale = scaleTime();

// Create histogram generator ==================================================

let defaultHistogram: d3Array.HistogramGenerator<number, number>;
defaultHistogram = d3Array.histogram();

let testHistogram: d3Array.HistogramGenerator<MixedObject, Date>;
testHistogram = d3Array.histogram<MixedObject, Date>();

// Configure histogram generator ===============================================

// value(...) ------------------------------------------------------------------

testHistogram = testHistogram.value((d, i, data) => {
    const datum: MixedObject = d; // d is of type MixedObject
    const index: number = i; // i is number
    const array: MixedObject[] = data; // data is of type MixedObject[]
    return datum.date;
});

let valueAccessorFn: (d: MixedObject, i: number, data: MixedObject[]) => Date;
valueAccessorFn = testHistogram.value();

// domain(...) -----------------------------------------------------------------

// test with array
testHistogram = testHistogram.domain([new Date(2014, 3, 15), new Date(2017, 4, 15)]);

// usage with scale domain:
const domain = tScale.domain();

testHistogram = testHistogram.domain([domain[0], domain[domain.length]]);

// testHistogram = testHistogram.domain(tScale.domain()); // fails, as scale domain is an array with possibly more than the two elements expected by histogram

// use with accessor function
testHistogram = testHistogram.domain(values => [values[0], values[values.length]]);

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
testHistogram = testHistogram.thresholds((values: Date[], min: Date, max: Date) => {
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
const mixedObject: MixedObject = testBin[0]; // with element type MixedObject
date = testBin.x0; // bin lower bound is Date
date = testBin.x1; // bin upper bound is Date

// Histogram Tresholds =========================================================

num = d3Array.thresholdFreedmanDiaconis([-1, 0, 1, 1, 3, 20, 234], -1, 234);

num = d3Array.thresholdScott([-1, 0, 1, 1, 3, 20, 234], -1, 234);

num = d3Array.thresholdSturges([-1, 0, 1, 1, 3, 20, 234]);
