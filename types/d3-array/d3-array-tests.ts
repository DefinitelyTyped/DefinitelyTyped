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
let undef: undefined;
let mixedObject: MixedObject;

let numOrUndefined: number | undefined;
let strOrUndefined: string | undefined;
let numericOrUndefined: NumCoercible | undefined;
let dateOrUndefined: Date | undefined;
let mixedObjectOrUndefined: MixedObject | undefined;
let numOrUndefinedExtent: [number, number] | [undefined, undefined];
let strOrUndefinedExtent: [string, string] | [undefined, undefined];
let numericOrUndefinedExtent: [NumCoercible, NumCoercible] | [undefined, undefined];
let dateMixedOrUndefined: [Date, Date] | [undefined, undefined];
let mixedOrUndefinedExtent: [d3Array.Primitive | NumCoercible, d3Array.Primitive | NumCoercible] | [undefined, undefined];
let dateOrUndefinedExtent: [Date, Date] | [undefined, undefined];

let numbersArray = [10, 20, 30, 40, 50];
const numbersOrUndefinedArray = [10, 20, undefined, null, 40, 50];
let stringyNumbersArray = ['10', '20', '30', '40', '50'];
const numericArray = [new NumCoercible(10), new NumCoercible(20), new NumCoercible(30), new NumCoercible(40), new NumCoercible(50)];
let dateArray = [new Date(2016, 6, 1), new Date(2016, 7, 30), new Date(2015, 3, 15)];

const mixedObjectArray = [
    new MixedObject(10, new Date(2016, 6, 1)),
    new MixedObject(20, new Date(2016, 7, 30)),
    new MixedObject(30, new Date(2015, 3, 15)),
    new MixedObject(40, new Date(2014, 3, 15)),
    new MixedObject(50, new Date(2017, 4, 15))
];

const mixedObjectOrUndefinedArray = [...mixedObjectArray, undefined];
const mixedObjectArrayLike = mixedObjectArray as ArrayLike<MixedObject>;

let typedArray = Uint8Array.from(numbersArray);
let readonlyNumbersArray = numbersArray as ReadonlyArray<number>;
const readonlyNumbersOrUndefinedArray = numbersOrUndefinedArray as ReadonlyArray<number>;
const readonlyStringyNumbersArray = stringyNumbersArray as ReadonlyArray<string>;
const readonlyNumericArray = numericArray as ReadonlyArray<NumCoercible>;
const readonlyDateArray = dateArray as ReadonlyArray<Date>;
const readonlyMixedObjectArray = mixedObjectArray as ReadonlyArray<MixedObject>;
const readonlyMixedObjectOrUndefinedArray = mixedObjectOrUndefinedArray as ReadonlyArray<MixedObject | undefined>;

function accessorMixedObjectToNum(datum: MixedObject, index: number, array: ArrayLike<MixedObject>): number {
    return datum.num;
}

function accessorMixedObjectToStr(datum: MixedObject, index: number, array: ArrayLike<MixedObject>): string {
    return datum.str;
}

function accessorMixedObjectToNumeric(datum: MixedObject, index: number, array: ArrayLike<MixedObject>): NumCoercible {
    return datum.numeric;
}

function accessorMixedObjectToDate(datum: MixedObject, index: number, array: ArrayLike<MixedObject>): Date {
    return datum.date;
}

function accessorMixedObjectToNumOrUndefined(datum: MixedObject | undefined, index: number, array: ArrayLike<MixedObject | undefined>): number | undefined | null {
    return datum ? datum.num : undefined;
}

function accessorMixedObjectToStrOrUndefined(datum: MixedObject | undefined, index: number, array: ArrayLike<MixedObject>): string | undefined | null {
    return datum ? datum.str : undefined;
}

function accessorLikeMixedObjectToNum(datum: MixedObject, index: number, array: ArrayLike<MixedObject>): number {
    return datum.num;
}

function accessorLikeMixedObjectToStr(datum: MixedObject, index: number, array: ArrayLike<MixedObject>): string {
    return datum.str;
}

function accessorLikeMixedObjectToNumeric(datum: MixedObject, index: number, array: ArrayLike<MixedObject>): NumCoercible {
    return datum.numeric;
}

function accessorLikeMixedObjectToDate(datum: MixedObject, index: number, array: ArrayLike<MixedObject>): Date {
    return datum.date;
}

function accessorLikeMixedObjectToNumOrUndefined(datum: MixedObject | undefined, index: number, array: ArrayLike<MixedObject | undefined>): number | undefined | null {
    return datum ? datum.num : undefined;
}

function accessorLikeMixedObjectToStrOrUndefined(datum: MixedObject | undefined, index: number, array: ArrayLike<MixedObject>): string | undefined | null {
    return datum ? datum.str : undefined;
}

function accessorReadOnlyMixedObjectToNumOrUndefined(datum: MixedObject | undefined, index: number, array: ArrayLike<MixedObject | undefined>): number | undefined | null {
    return datum ? datum.num : undefined;
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

// ArrayLike test cases

numOrUndefined = d3Array.max(typedArray);
numOrUndefined = d3Array.max(readonlyNumbersOrUndefinedArray);
strOrUndefined = d3Array.max(readonlyStringyNumbersArray);
numericOrUndefined = d3Array.max(readonlyNumericArray);
dateOrUndefined = d3Array.max(readonlyDateArray);

// with accessors

numOrUndefined = d3Array.max(mixedObjectArray, accessorMixedObjectToNum);
strOrUndefined = d3Array.max(mixedObjectArray, accessorMixedObjectToStr);
numericOrUndefined = d3Array.max(mixedObjectArray, accessorMixedObjectToNumeric);
dateOrUndefined = d3Array.max(mixedObjectArray, accessorMixedObjectToDate);
numOrUndefined = d3Array.max(mixedObjectArray, accessorMixedObjectToNumOrUndefined);
strOrUndefined = d3Array.max(mixedObjectArray, accessorMixedObjectToStrOrUndefined);
numOrUndefined = d3Array.max(readonlyMixedObjectOrUndefinedArray, accessorReadOnlyMixedObjectToNumOrUndefined);

numOrUndefined = d3Array.max(mixedObjectArrayLike, accessorLikeMixedObjectToNum);
numOrUndefined = d3Array.max(mixedObjectArray, accessorLikeMixedObjectToNum);
numOrUndefined = d3Array.max(mixedObjectArray, accessorReadOnlyMixedObjectToNumOrUndefined);

numOrUndefined = d3Array.max(mixedObjectArray, (d) => {
    const l: MixedObject = d;
    return l.num;
});

strOrUndefined = d3Array.max(mixedObjectArray, (d) => {
    const l: MixedObject = d;
    return l.str;
});

// $ExpectError
numOrUndefined = d3Array.max(readonlyNumbersArray, (d, i, a) => { a.push(3); return 0; });

// min() -----------------------------------------------------------------------

// without accessors

numOrUndefined = d3Array.min(numbersArray);
strOrUndefined = d3Array.min(stringyNumbersArray);
numericOrUndefined = d3Array.min(numericArray);
dateOrUndefined = d3Array.min(dateArray);

// ArrayLike test cases

numOrUndefined = d3Array.min(typedArray);
numOrUndefined = d3Array.min(readonlyNumbersOrUndefinedArray);
strOrUndefined = d3Array.min(readonlyStringyNumbersArray);
numericOrUndefined = d3Array.min(readonlyNumericArray);
dateOrUndefined = d3Array.min(readonlyDateArray);

// with accessors

numOrUndefined = d3Array.min(mixedObjectArray, accessorMixedObjectToNum);
strOrUndefined = d3Array.min(mixedObjectArray, accessorMixedObjectToStr);
numericOrUndefined = d3Array.min(mixedObjectArray, accessorMixedObjectToNumeric);
dateOrUndefined = d3Array.min(mixedObjectArray, accessorMixedObjectToDate);
numOrUndefined = d3Array.min(mixedObjectArray, accessorMixedObjectToNumOrUndefined);
strOrUndefined = d3Array.min(mixedObjectArray, accessorMixedObjectToStrOrUndefined);
numOrUndefined = d3Array.min(readonlyMixedObjectOrUndefinedArray, accessorReadOnlyMixedObjectToNumOrUndefined);

// extent() --------------------------------------------------------------------

// without accessors

numOrUndefinedExtent = d3Array.extent(numbersArray);
strOrUndefinedExtent = d3Array.extent(stringyNumbersArray);
numericOrUndefinedExtent = d3Array.extent(numericArray);
dateOrUndefinedExtent = d3Array.extent(dateArray);

// ArrayLike test cases

numOrUndefinedExtent = d3Array.extent(typedArray);
numOrUndefinedExtent = d3Array.extent(readonlyNumbersOrUndefinedArray);
strOrUndefinedExtent = d3Array.extent(readonlyStringyNumbersArray);
numericOrUndefinedExtent = d3Array.extent(readonlyNumericArray);
dateOrUndefinedExtent = d3Array.extent(readonlyDateArray);

// with accessors

numOrUndefinedExtent = d3Array.extent(mixedObjectArray, accessorMixedObjectToNum);
strOrUndefinedExtent = d3Array.extent(mixedObjectArray, accessorMixedObjectToStr);
mixedOrUndefinedExtent = d3Array.extent(mixedObjectArray, accessorMixedObjectToNumeric);
dateMixedOrUndefined = d3Array.extent(mixedObjectArray, accessorMixedObjectToDate);
numOrUndefinedExtent = d3Array.extent(mixedObjectArray, accessorMixedObjectToNumOrUndefined);
strOrUndefinedExtent = d3Array.extent(mixedObjectArray, accessorMixedObjectToStrOrUndefined);
numOrUndefinedExtent = d3Array.extent(readonlyMixedObjectOrUndefinedArray, accessorReadOnlyMixedObjectToNumOrUndefined);

// mean() ----------------------------------------------------------------------

numOrUndefined = d3Array.mean(numbersArray);
numOrUndefined = d3Array.mean(numericArray);
numOrUndefined = d3Array.mean(numbersOrUndefinedArray);

numOrUndefined = d3Array.mean(typedArray);
numOrUndefined = d3Array.mean(readonlyNumbersOrUndefinedArray);
numOrUndefined = d3Array.mean(readonlyNumericArray);
numOrUndefined = d3Array.mean(readonlyNumbersOrUndefinedArray);

numOrUndefined = d3Array.mean(mixedObjectArray, accessorMixedObjectToNum);
numOrUndefined = d3Array.mean(mixedObjectOrUndefinedArray, accessorMixedObjectToNumOrUndefined);
numOrUndefined = d3Array.mean(readonlyMixedObjectOrUndefinedArray, accessorReadOnlyMixedObjectToNumOrUndefined);

// median() --------------------------------------------------------------------

numOrUndefined = d3Array.median(numbersArray);
numOrUndefined = d3Array.median(numericArray);
numOrUndefined = d3Array.median(numbersOrUndefinedArray);

numOrUndefined = d3Array.median(typedArray);
numOrUndefined = d3Array.median(readonlyNumbersArray);
numOrUndefined = d3Array.median(readonlyNumericArray);
numOrUndefined = d3Array.median(readonlyNumbersOrUndefinedArray);

numOrUndefined = d3Array.median(mixedObjectArray, accessorMixedObjectToNum);
numOrUndefined = d3Array.median(mixedObjectOrUndefinedArray, accessorMixedObjectToNumOrUndefined);
numOrUndefined = d3Array.median(readonlyMixedObjectOrUndefinedArray, accessorReadOnlyMixedObjectToNumOrUndefined);

// quantile() ------------------------------------------------------------------

numOrUndefined = d3Array.quantile(numbersArray, 0.5);
numOrUndefined = d3Array.quantile(numericArray, 0.5);
numOrUndefined = d3Array.quantile(numbersOrUndefinedArray, 0.5);

numOrUndefined = d3Array.quantile(typedArray, 0.5);
numOrUndefined = d3Array.quantile(readonlyNumbersArray, 0.5);
numOrUndefined = d3Array.quantile(readonlyNumericArray, 0.5);
numOrUndefined = d3Array.quantile(readonlyNumbersOrUndefinedArray, 0.5);

numOrUndefined = d3Array.quantile(mixedObjectArray, 0.5, accessorMixedObjectToNum);
numOrUndefined = d3Array.quantile(mixedObjectOrUndefinedArray, 0.5, accessorMixedObjectToNumOrUndefined);
numOrUndefined = d3Array.quantile(readonlyMixedObjectOrUndefinedArray, 0.5, accessorReadOnlyMixedObjectToNumOrUndefined);

// sum() -----------------------------------------------------------------------

numOrUndefined = d3Array.sum(numbersArray);
numOrUndefined = d3Array.sum(numericArray);
numOrUndefined = d3Array.sum(numbersOrUndefinedArray);

numOrUndefined = d3Array.sum(typedArray);
numOrUndefined = d3Array.sum(readonlyNumbersArray);
numOrUndefined = d3Array.sum(readonlyNumericArray);
numOrUndefined = d3Array.sum(readonlyNumbersOrUndefinedArray);

numOrUndefined = d3Array.sum(mixedObjectArray, accessorMixedObjectToNum);
numOrUndefined = d3Array.sum(mixedObjectOrUndefinedArray, accessorMixedObjectToNumOrUndefined);
numOrUndefined = d3Array.sum(readonlyMixedObjectOrUndefinedArray, accessorReadOnlyMixedObjectToNumOrUndefined);

// deviation() -----------------------------------------------------------------

numOrUndefined = d3Array.deviation(numbersArray);
numOrUndefined = d3Array.deviation(numericArray);
numOrUndefined = d3Array.deviation(numbersOrUndefinedArray);

numOrUndefined = d3Array.deviation(typedArray);
numOrUndefined = d3Array.deviation(readonlyNumbersArray);
numOrUndefined = d3Array.deviation(readonlyNumericArray);
numOrUndefined = d3Array.deviation(readonlyNumbersOrUndefinedArray);

numOrUndefined = d3Array.deviation(mixedObjectArray, accessorMixedObjectToNum);
numOrUndefined = d3Array.deviation(mixedObjectOrUndefinedArray, accessorMixedObjectToNumOrUndefined);
numOrUndefined = d3Array.deviation(readonlyMixedObjectOrUndefinedArray, accessorReadOnlyMixedObjectToNumOrUndefined);

// variance() ------------------------------------------------------------------

numOrUndefined = d3Array.variance(numbersArray);
numOrUndefined = d3Array.variance(numericArray);
numOrUndefined = d3Array.variance(numbersOrUndefinedArray);

numOrUndefined = d3Array.variance(typedArray);
numOrUndefined = d3Array.variance(readonlyNumbersArray);
numOrUndefined = d3Array.variance(readonlyNumericArray);
numOrUndefined = d3Array.variance(readonlyNumbersOrUndefinedArray);

numOrUndefined = d3Array.variance(mixedObjectArray, accessorMixedObjectToNum);
numOrUndefined = d3Array.variance(mixedObjectOrUndefinedArray, accessorMixedObjectToNumOrUndefined);
numOrUndefined = d3Array.variance(readonlyMixedObjectOrUndefinedArray, accessorReadOnlyMixedObjectToNumOrUndefined);

// -----------------------------------------------------------------------------
// Test Searching Arrays
// -----------------------------------------------------------------------------

numbersArray = [0, 2, 3, 4, 7, 8];
stringyNumbersArray = ['0', '2', '3', '4', '7', '8'];
dateArray = [new Date(2010, 1, 1), new Date(2011, 1, 1), new Date(2012, 1, 1), new Date(2013, 1, 1)];
typedArray = Uint8Array.from(numbersArray);

// scan() ----------------------------------------------------------------------

numOrUndefined = d3Array.scan(numbersArray);
numOrUndefined = d3Array.scan(typedArray);
numOrUndefined = d3Array.scan(readonlyNumbersArray);

numOrUndefined = d3Array.scan(mixedObjectArray, (a, b) => {
    const aElem: MixedObject = a;
    const bElem: MixedObject = b;
    return a.num - b.num;
});

numOrUndefined = d3Array.scan(readonlyMixedObjectArray, (a, b) => {
    const aElem: MixedObject = a;
    const bElem: MixedObject = b;
    return a.num - b.num;
});

numOrUndefined = d3Array.scan(mixedObjectOrUndefinedArray, (a, b) => {
    const aElem: MixedObject | undefined = a;
    const bElem: MixedObject | undefined = b;
    return a && b ? a.num - b.num : NaN;
});

numOrUndefined = d3Array.scan(readonlyMixedObjectOrUndefinedArray, (a, b) => {
    const aElem: MixedObject | undefined = a;
    const bElem: MixedObject | undefined = b;
    return a && b ? a.num - b.num : NaN;
});

// bisectLeft() ----------------------------------------------------------------

num = d3Array.bisectLeft(numbersArray, 4);
num = d3Array.bisectLeft(numbersArray, 4, 1);
num = d3Array.bisectLeft(numbersArray, 4, 1, 4);

num = d3Array.bisectLeft(stringyNumbersArray, '21');
num = d3Array.bisectLeft(stringyNumbersArray, '21', 1);
num = d3Array.bisectLeft(stringyNumbersArray, '21', 1, 4);

num = d3Array.bisectLeft(dateArray, new Date(2011, 2, 1));
num = d3Array.bisectLeft(dateArray, new Date(2011, 2, 1), 1);
num = d3Array.bisectLeft(dateArray, new Date(2011, 2, 1), 1, 2);

num = d3Array.bisectLeft(typedArray, 4);
num = d3Array.bisectLeft(typedArray, 4, 1);
num = d3Array.bisectLeft(typedArray, 4, 1, 4);

num = d3Array.bisectLeft(readonlyNumbersArray, 4);
num = d3Array.bisectLeft(readonlyNumbersArray, 4, 1);
num = d3Array.bisectLeft(readonlyNumbersArray, 4, 1, 4);

num = d3Array.bisectLeft(readonlyStringyNumbersArray, '21');
num = d3Array.bisectLeft(readonlyStringyNumbersArray, '21', 1);
num = d3Array.bisectLeft(readonlyStringyNumbersArray, '21', 1, 4);

num = d3Array.bisectLeft(readonlyDateArray, new Date(2011, 2, 1));
num = d3Array.bisectLeft(readonlyDateArray, new Date(2011, 2, 1), 1);
num = d3Array.bisectLeft(readonlyDateArray, new Date(2011, 2, 1), 1, 2);

// bisectRight() ---------------------------------------------------------------

num = d3Array.bisectRight(numbersArray, 4);
num = d3Array.bisectRight(numbersArray, 4, 1);
num = d3Array.bisectRight(numbersArray, 4, 1, 4);

num = d3Array.bisectRight(stringyNumbersArray, '21');
num = d3Array.bisectRight(stringyNumbersArray, '21', 1);
num = d3Array.bisectRight(stringyNumbersArray, '21', 1, 4);

num = d3Array.bisectRight(dateArray, new Date(2011, 2, 1));
num = d3Array.bisectRight(dateArray, new Date(2011, 2, 1), 1);
num = d3Array.bisectRight(dateArray, new Date(2011, 2, 1), 1, 2);

num = d3Array.bisectRight(typedArray, 4);
num = d3Array.bisectRight(typedArray, 4, 1);
num = d3Array.bisectRight(typedArray, 4, 1, 4);

num = d3Array.bisectRight(readonlyNumbersArray, 4);
num = d3Array.bisectRight(readonlyNumbersArray, 4, 1);
num = d3Array.bisectRight(readonlyNumbersArray, 4, 1, 4);

num = d3Array.bisectRight(readonlyStringyNumbersArray, '21');
num = d3Array.bisectRight(readonlyStringyNumbersArray, '21', 1);
num = d3Array.bisectRight(readonlyStringyNumbersArray, '21', 1, 4);

num = d3Array.bisectRight(readonlyDateArray, new Date(2011, 2, 1));
num = d3Array.bisectRight(readonlyDateArray, new Date(2011, 2, 1), 1);
num = d3Array.bisectRight(readonlyDateArray, new Date(2011, 2, 1), 1, 2);

// bisect() --------------------------------------------------------------------

num = d3Array.bisect(numbersArray, 4);
num = d3Array.bisect(numbersArray, 4, 1);
num = d3Array.bisect(numbersArray, 4, 1, 4);

num = d3Array.bisect(stringyNumbersArray, '21');
num = d3Array.bisect(stringyNumbersArray, '21', 1);
num = d3Array.bisect(stringyNumbersArray, '21', 1, 4);

num = d3Array.bisect(dateArray, new Date(2011, 2, 1));
num = d3Array.bisect(dateArray, new Date(2011, 2, 1), 1);
num = d3Array.bisect(dateArray, new Date(2011, 2, 1), 1, 2);

num = d3Array.bisect(typedArray, 4);
num = d3Array.bisect(typedArray, 4, 1);
num = d3Array.bisect(typedArray, 4, 1, 4);

num = d3Array.bisect(readonlyNumbersArray, 4);
num = d3Array.bisect(readonlyNumbersArray, 4, 1);
num = d3Array.bisect(readonlyNumbersArray, 4, 1, 4);

num = d3Array.bisect(readonlyStringyNumbersArray, '21');
num = d3Array.bisect(readonlyStringyNumbersArray, '21', 1);
num = d3Array.bisect(readonlyStringyNumbersArray, '21', 1, 4);

num = d3Array.bisect(readonlyDateArray, new Date(2011, 2, 1));
num = d3Array.bisect(readonlyDateArray, new Date(2011, 2, 1), 1);
num = d3Array.bisect(readonlyDateArray, new Date(2011, 2, 1), 1, 2);

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

num = mixedObjectDateBisectorObject.left(readonlyMixedObjectArray, new Date(2015, 3, 14));
num = mixedObjectDateBisectorObject.left(readonlyMixedObjectArray, new Date(2015, 3, 14), 1);
num = mixedObjectDateBisectorObject.left(readonlyMixedObjectArray, new Date(2015, 3, 14), 3, 4);

// bisect right
num = mixedObjectDateBisectorObject.right(mixedObjectArray, new Date(2015, 3, 14));
num = mixedObjectDateBisectorObject.right(mixedObjectArray, new Date(2015, 3, 14), 1);
num = mixedObjectDateBisectorObject.right(mixedObjectArray, new Date(2015, 3, 14), 3, 4);

num = mixedObjectDateBisectorObject.right(readonlyMixedObjectArray, new Date(2015, 3, 14));
num = mixedObjectDateBisectorObject.right(readonlyMixedObjectArray, new Date(2015, 3, 14), 1);
num = mixedObjectDateBisectorObject.right(readonlyMixedObjectArray, new Date(2015, 3, 14), 3, 4);

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

const testArray1 = [
    new MixedObject(10, new Date(2016, 6, 1)),
    new MixedObject(20, new Date(2016, 7, 30)),
    new MixedObject(30, new Date(2015, 3, 15)),
    new MixedObject(40, new Date(2014, 3, 15)),
    new MixedObject(50, new Date(2017, 4, 15))
];

const testArray2 = [
    new MixedObject(40, new Date(2016, 3, 1)),
    new MixedObject(50, new Date(2016, 9, 30)),
];

let testArrays: MixedObject[][] = [testArray1, testArray2];

const readonlyTestArray1 = testArray1 as ReadonlyArray<MixedObject>;
const readonlyTestArray2 = testArray2 as ReadonlyArray<MixedObject>;
const readonlyTestArrays = [testArray1, testArray2] as ReadonlyArray<ReadonlyArray<MixedObject>>;

let mergedArray: MixedObject[];

mergedArray = d3Array.merge(testArrays); // inferred type
mergedArray = d3Array.merge<MixedObject>(testArrays); // explicit type
// $ExpectError
mergedArray = d3Array.merge<MixedObject>([[10, 40, 30], [15, 30]]); // fails, type mismatch
// $ExpectError
mergedArray = d3Array.merge([testArray1, [15, 30]]); // fails, type mismatch

mergedArray = d3Array.merge(readonlyTestArrays); // inferred type
mergedArray = d3Array.merge<MixedObject>(readonlyTestArrays); // explicit type

// cross() ---------------------------------------------------------------------

let crossed: Array<[string, number]>;

const chars = ['x', 'y'];
const nums = [1, 2];

crossed = d3Array.cross(chars, nums);
crossed = d3Array.cross<string, number>(chars, nums);

let strArray: string[] = d3Array.cross<number, number, string>([2, 3], [5, 6], (a, b) => (a + b) + 'px');
strArray = d3Array.cross([2, 3], [5, 6], (a, b) => {
    const aa: number = a;
    const bb: number = b;
    return (aa + bb) + 'px';
});

const readonlyChars = chars as ReadonlyArray<string>;
const readonlyNums = new Uint8Array(nums);

crossed = d3Array.cross(readonlyChars, readonlyNums);
crossed = d3Array.cross<string, number>(readonlyChars, readonlyNums);

strArray = d3Array.cross<number, number, string>([2, 3] as ReadonlyArray<number>, new Uint8ClampedArray([5, 6]), (a, b) => (a + b) + 'px');
strArray = d3Array.cross([2, 3] as ReadonlyArray<number>, new Uint8ClampedArray([5, 6]), (a, b) => {
    const aa: number = a;
    const bb: number = b;
    return (aa + bb) + 'px';
});

d3Array.cross(new Uint8Array([1, 2, 3, 4, 5]), new Uint8Array([10, 20, 30, 40, 50]));

// pairs() ---------------------------------------------------------------------

let pairs: Array<[MixedObject, MixedObject]>;

pairs = d3Array.pairs(mergedArray);

numbersArray = d3Array.pairs<MixedObject, number>(mergedArray, (a, b) => b.num - a.num);
numbersArray = d3Array.pairs(mergedArray, (a, b) => {
    const aa: MixedObject = a;
    const bb: MixedObject = b;
    return bb.num - aa.num;
});

const readonlyMergedArray = mergedArray as ReadonlyArray<MixedObject>;
pairs = d3Array.pairs(readonlyMergedArray);

numbersArray = d3Array.pairs<MixedObject, number>(readonlyMergedArray, (a, b) => b.num - a.num);
numbersArray = d3Array.pairs(readonlyMergedArray, (a, b) => {
    const aa: MixedObject = a;
    const bb: MixedObject = b;
    return bb.num - aa.num;
});

// permute() -------------------------------------------------------------------

// getting a permutation of array elements
mergedArray = d3Array.permute(mergedArray, [1, 0, 2, 5, 3, 4, 6]);
mergedArray = d3Array.permute(readonlyMergedArray, [1, 0, 2, 5, 3, 4, 6]);
mergedArray = d3Array.permute(readonlyMergedArray, nums);

// Getting an ordered array with object properties

const testObject = {
    val: 10,
    name: 'Test',
    when: new Date(),
    more: [10, 30, 40]
};

const p1: Array<number | string | Date | number[]> = d3Array.permute(testObject, ['name', 'val', 'when', 'more']);
const p2: Array<Date | number[]> = d3Array.permute(testObject, ['when', 'more']);
// $ExpectError
const p3 = d3Array.permute(testObject, ['when', 'unknown']);

// range() ---------------------------------------------------------------------

numbersArray = d3Array.range(10);
numbersArray = d3Array.range(1, 10);
numbersArray = d3Array.range(1, 10, 0.5);

// shuffle() -------------------------------------------------------------------

mergedArray = d3Array.shuffle(mergedArray);
mergedArray = d3Array.shuffle(mergedArray, 1);
mergedArray = d3Array.shuffle(mergedArray, 1, 3);
// $ExpectError
mergedArray = d3Array.shuffle(readonlyMergedArray); // fails, shuffle mutates input array in-place

// Test each TypedArray explicitly. Can't use ArrayLike in this case because shuffle is mutable and ArrayLike would include ReadonlyArray
const resultInt8: Int8Array = d3Array.shuffle(new Int8Array(numbersArray));
const resultUint8: Uint8Array = d3Array.shuffle(new Uint8Array(numbersArray));
const resultUint8Clamped: Uint8ClampedArray = d3Array.shuffle(new Uint8ClampedArray(numbersArray));
const resultInt16: Int16Array = d3Array.shuffle(new Int16Array(numbersArray));
const resultUint6: Uint16Array = d3Array.shuffle(new Uint16Array(numbersArray));
const resultInt32: Int32Array = d3Array.shuffle(new Int32Array(numbersArray));
const resultUint32: Uint32Array = d3Array.shuffle(new Uint32Array(numbersArray));
const resultFloat32: Float32Array = d3Array.shuffle(new Float32Array(numbersArray));
const resultFloat64: Float64Array = d3Array.shuffle(new Float64Array(numbersArray));

// ticks() ---------------------------------------------------------------------

numbersArray = d3Array.ticks(1, 10, 5);

// tickIncrement() ------------------------------------------------------------------

let numDiff: number = d3Array.tickIncrement(1, 10, 5);

// tickStep() ------------------------------------------------------------------

numDiff = d3Array.tickStep(1, 10, 5);

// transpose() -----------------------------------------------------------------

testArrays = d3Array.transpose([testArray1, testArray2]);
testArrays = d3Array.transpose([readonlyTestArray1, readonlyTestArray2] as ReadonlyArray<ReadonlyArray<MixedObject>>);

// zip() -----------------------------------------------------------------------

testArrays = d3Array.zip(testArray1, testArray2);
testArrays = d3Array.zip(readonlyTestArray1, readonlyTestArray2);

// -----------------------------------------------------------------------------
// Test Histogram
// -----------------------------------------------------------------------------

const timeScale = scaleTime();

// Create histogram generator ==================================================

// number - number
let histoNumber_Number: d3Array.HistogramGeneratorNumber<number, number>;
histoNumber_Number = d3Array.histogram();
histoNumber_Number = d3Array.histogram<number, number>();

// MixedObject - number | undefined
let histoMixed_NumberOrUndefined: d3Array.HistogramGeneratorNumber<MixedObject, number | undefined>;
histoMixed_NumberOrUndefined = d3Array.histogram<MixedObject, number | undefined>();

// MixedObject | undefined - number | undefined
let histoMixedOrUndefined_NumberOrUndefined: d3Array.HistogramGeneratorNumber<MixedObject | undefined, number | undefined>;
histoMixedOrUndefined_NumberOrUndefined = d3Array.histogram<MixedObject | undefined, number | undefined>();

// MixedObject | undefined - number
let histoMixedOrUndefined_Number: d3Array.HistogramGeneratorNumber<MixedObject | undefined, number>;
histoMixedOrUndefined_Number = d3Array.histogram<MixedObject | undefined, number>();

// MixedObject - Date
let histoMixedObject_Date: d3Array.HistogramGeneratorDate<MixedObject, Date>;
histoMixedObject_Date = d3Array.histogram<MixedObject, Date>();

// MixedObject - Date | undefined
let histoMixedObject_DateOrUndefined: d3Array.HistogramGeneratorDate<MixedObject, Date | undefined>;
histoMixedObject_DateOrUndefined = d3Array.histogram<MixedObject, Date | undefined>();

let defaultHistogram: d3Array.HistogramGeneratorNumber<number, number>;
defaultHistogram = d3Array.histogram();

// Configure histogram generator ===============================================

// value(...) ------------------------------------------------------------------

let valueAccessorFn: (d: MixedObject, i: number, data: MixedObject[]) => Date;
valueAccessorFn = histoMixedObject_Date.value();

type valueAccessor<D, V> = (d: D, i: number, data: D[]) => V;

// number - number
const valueFnNumber_Number: valueAccessor<number, number> = histoNumber_Number.value();
histoNumber_Number = histoNumber_Number.value((d: number, i: number, data: ArrayLike<number>) => {
    return d - num;
});

// MixedObject - number | undefined
const valueFnMixedObject_NumberOrUndefined: valueAccessor<MixedObject, number | undefined> = histoMixed_NumberOrUndefined.value();
histoMixed_NumberOrUndefined = histoMixed_NumberOrUndefined.value((d: MixedObject, i: number, data: ArrayLike<MixedObject>) => {
    return d.str === "NA" ? undefined : d.num;
});

// MixedObject | undefined - number | undefined
const valueFnMixedOrUndefined_NumberOrUndefined: valueAccessor<MixedObject | undefined, number | undefined> = histoMixedOrUndefined_NumberOrUndefined.value();
histoMixedOrUndefined_NumberOrUndefined = histoMixedOrUndefined_NumberOrUndefined.value((d: MixedObject | undefined, i: number, data: ArrayLike<MixedObject | undefined>) => {
    return d ? d.num : undefined;
});

// MixedObject | undefined - number
const valueFnMixedOrUndefined_Number: valueAccessor<MixedObject | undefined, number> = histoMixedOrUndefined_Number.value();
histoMixedOrUndefined_Number = histoMixedOrUndefined_Number.value((d: MixedObject | undefined, i: number, data: ArrayLike<MixedObject | undefined>) => {
    return d ? d.num : 0;
});

// MixedObject - Date
const valueFnMixedObject_Date: valueAccessor<MixedObject, Date> = histoMixedObject_Date.value();
histoMixedObject_Date = histoMixedObject_Date.value((d: MixedObject, i: number, data: ArrayLike<MixedObject>) => {
    return d.date;
});

// MixedObject - Date | undefined
const valueFnMixedObject_DateOrUndefined: valueAccessor<MixedObject, Date | undefined> = histoMixedObject_DateOrUndefined.value();
histoMixedObject_DateOrUndefined = histoMixedObject_DateOrUndefined.value((d: MixedObject, i: number, data: ArrayLike<MixedObject>) => {
    return d.date;
});

// domain(...) -----------------------------------------------------------------

const domain = timeScale.domain();
let domainFnNumber: (array: number[]) => [number, number] | [undefined, undefined];
let domainFnNumberOrUndef: (array: Array<number | undefined>) => [number, number] | [undefined, undefined];
let domainFnDate: (values: Date[]) => [Date, Date];

// number - number
domainFnNumber = histoNumber_Number.domain();
histoNumber_Number = histoNumber_Number.domain([0, 100]);
histoNumber_Number = histoNumber_Number.domain(d3Array.extent);

// MixedObject - number | undefined
domainFnNumber = histoNumber_Number.domain();
histoMixed_NumberOrUndefined = histoMixed_NumberOrUndefined.domain([0, 100]);
histoMixed_NumberOrUndefined = histoMixed_NumberOrUndefined.domain(d3Array.extent);

// MixedObject | undefined - number | undefined
domainFnNumberOrUndef = histoMixedOrUndefined_NumberOrUndefined.domain();
histoMixedOrUndefined_NumberOrUndefined = histoMixedOrUndefined_NumberOrUndefined.domain([0, 100]);
histoMixedOrUndefined_NumberOrUndefined = histoMixedOrUndefined_NumberOrUndefined.domain(d3Array.extent);

// MixedObject | undefined - number
domainFnNumber = histoMixedOrUndefined_Number.domain();
histoMixedOrUndefined_Number = histoMixedOrUndefined_Number.domain([0, 100]);
histoMixedOrUndefined_Number = histoMixedOrUndefined_Number.domain(d3Array.extent);

// MixedObject - Date
domainFnDate = histoMixedObject_Date.domain();
histoMixedObject_Date = histoMixedObject_Date.domain([new Date(2014, 3, 15), new Date(2017, 4, 15)]);
histoMixedObject_Date = histoMixedObject_Date.domain([domain[0], domain[domain.length]]);
histoMixedObject_Date = histoMixedObject_Date.domain((values) => [values[0], values[values.length]]);
// $ExpectError
histoMixedObject_Date = histoMixedObject_Date.domain(timeScale.domain()); // fails, as scale domain is an array with possibly more than the two elements expected by histogram

// MixedObject - Date | undefined
domainFnDate = histoMixedObject_Date.domain();
histoMixedObject_DateOrUndefined = histoMixedObject_DateOrUndefined.domain([new Date(2014, 3, 15), new Date(2017, 4, 15)]);
histoMixedObject_DateOrUndefined = histoMixedObject_DateOrUndefined.domain([domain[0], domain[domain.length]]);
histoMixedObject_DateOrUndefined = histoMixedObject_DateOrUndefined.domain((values) =>  [values[0]!, values[values.length]!]);

// thresholds(...) -------------------------------------------------------------

type thresholdsWithUndefinedCont = d3Array.ThresholdCountGenerator;
type thresholdsWithUndefinedArray = d3Array.ThresholdNumberArrayGenerator<number | undefined>;

let thresholds: d3Array.ThresholdCountGenerator<number> | d3Array.ThresholdNumberArrayGenerator<number>;
let thresholdsWithUndefined: thresholdsWithUndefinedCont | thresholdsWithUndefinedArray;
const thresholdsArray: d3Array.ThresholdNumberArrayGenerator<number> = (x: ArrayLike<number>) => [5, 10, 20];

let thresholdsDate: d3Array.ThresholdDateArrayGenerator<Date>;
let thresholdsDateOrUndefined: d3Array.ThresholdDateArrayGenerator<Date | undefined>;

// number - number
thresholds = histoNumber_Number.thresholds();
histoNumber_Number = histoNumber_Number.thresholds(3);
histoNumber_Number = histoNumber_Number.thresholds([5, 10, 20]);
histoNumber_Number = histoNumber_Number.thresholds(d3Array.thresholdScott);
histoNumber_Number = histoNumber_Number.thresholds(thresholdsArray);

// MixedObject - number | undefined
thresholdsWithUndefined = histoMixed_NumberOrUndefined.thresholds();
histoMixed_NumberOrUndefined = histoMixed_NumberOrUndefined.thresholds(3);
histoMixed_NumberOrUndefined = histoMixed_NumberOrUndefined.thresholds([5, 10, 20]);
histoMixed_NumberOrUndefined = histoMixed_NumberOrUndefined.thresholds(d3Array.thresholdScott);

// MixedObject | undefined - number | undefined
thresholdsWithUndefined = histoMixedOrUndefined_NumberOrUndefined.thresholds();
histoMixedOrUndefined_NumberOrUndefined = histoMixedOrUndefined_NumberOrUndefined.thresholds(3);
histoMixedOrUndefined_NumberOrUndefined = histoMixedOrUndefined_NumberOrUndefined.thresholds([5, 10, 20]);
histoMixedOrUndefined_NumberOrUndefined = histoMixedOrUndefined_NumberOrUndefined.thresholds(d3Array.thresholdScott);

// MixedObject | undefined - number
thresholds = histoMixedOrUndefined_Number.thresholds();
histoMixedOrUndefined_Number = histoMixedOrUndefined_Number.thresholds(5);
histoMixedOrUndefined_Number = histoMixedOrUndefined_Number.thresholds([5, 10, 20]);
histoMixedOrUndefined_Number = histoMixedOrUndefined_Number.thresholds(d3Array.thresholdSturges);

// MixedObject - Date
thresholdsDate = histoMixedObject_Date.thresholds();
histoMixedObject_Date = histoMixedObject_Date.thresholds([new Date(2015, 11, 15), new Date(2016, 6, 1), new Date(2016, 8, 30)]);
histoMixedObject_Date = histoMixedObject_Date.thresholds(timeScale.ticks(timeYear));
histoMixedObject_Date = histoMixedObject_Date.thresholds((values: ArrayLike<Date>) => [new Date(2015, 11, 15), new Date(2016, 6, 1), new Date(2016, 8, 30)]);
histoMixedObject_Date = histoMixedObject_Date.thresholds((values: ArrayLike<Date>, min: Date, max: Date) => {
    const thresholds: Date[] = [values[0], values[2], values[4]];
    return thresholds;
});
// $ExpectError
histoMixedObject_Date = histoMixedObject_Date.thresholds(d3Array.thresholdScott);

// MixedObject - Date | undefined
thresholdsDateOrUndefined = histoMixedObject_DateOrUndefined.thresholds();
histoMixedObject_DateOrUndefined = histoMixedObject_DateOrUndefined.thresholds([new Date(2015, 11, 15), new Date(2016, 6, 1), new Date(2016, 8, 30)]);
histoMixedObject_DateOrUndefined = histoMixedObject_DateOrUndefined.thresholds(timeScale.ticks(timeYear));
histoMixedObject_DateOrUndefined = histoMixedObject_DateOrUndefined.thresholds((values: ArrayLike<Date | undefined>, min: Date, max: Date) => {
    const thresholds: Date[] = [values[0]!, new Date(2015, 11, 15), values[values.length]!];
    return thresholds;
});

// Use histogram generator =====================================================

undef = d3Array.histogram()([])[0].x0 as undefined;
undef = d3Array.histogram<number | undefined, number | undefined>()([undefined])[0].x0 as undefined;

// number - number
let binsNumber_Number: Array<d3Array.Bin<number, number>>;
binsNumber_Number = histoNumber_Number([-1, 0, 1, 1, 3, 20, 234]);

let binNumber_Number: d3Array.Bin<number, number>;
binNumber_Number = binsNumber_Number[0];

num = binNumber_Number.length;
num = binNumber_Number[0];
numOrUndefined = binNumber_Number.x0;
numOrUndefined = binNumber_Number.x1;

// MixedObject - number | undefined
let binsNumberMixed_NumberOrUndefined: Array<d3Array.Bin<MixedObject, number | undefined>>;
binsNumberMixed_NumberOrUndefined = histoMixed_NumberOrUndefined(mixedObjectArray);

let binNumberMixed_NumberOrUndefined: d3Array.Bin<MixedObject, number | undefined>;
binNumberMixed_NumberOrUndefined = binsNumberMixed_NumberOrUndefined[0];

num = binNumberMixed_NumberOrUndefined.length;
mixedObject = binNumberMixed_NumberOrUndefined[0];
numOrUndefined = binNumberMixed_NumberOrUndefined.x0;
numOrUndefined = binNumberMixed_NumberOrUndefined.x1;

// MixedObject | undefined - number | undefined
let binsNumberMixedOrUndefined_NumberOrUndefined: Array<d3Array.Bin<MixedObject | undefined, number | undefined>>;
binsNumberMixedOrUndefined_NumberOrUndefined = histoMixedOrUndefined_NumberOrUndefined(mixedObjectArray);

let binNumberMixedOrUndefined_NumberOrUndefined: d3Array.Bin<MixedObject | undefined, number | undefined>;
binNumberMixedOrUndefined_NumberOrUndefined = binsNumberMixedOrUndefined_NumberOrUndefined[0];

num = binNumberMixedOrUndefined_NumberOrUndefined.length;
mixedObjectOrUndefined = binNumberMixedOrUndefined_NumberOrUndefined[0];
numOrUndefined = binNumberMixedOrUndefined_NumberOrUndefined.x0;
numOrUndefined = binNumberMixedOrUndefined_NumberOrUndefined.x1;

// MixedObject | undefined - number
let binsNumberMixedOrUndefined_Number: Array<d3Array.Bin<MixedObject | undefined, number>>;
binsNumberMixedOrUndefined_Number = histoMixedOrUndefined_Number(mixedObjectArray);

let binNumberMixedOrUndefined_Number: d3Array.Bin<MixedObject | undefined, number>;
binNumberMixedOrUndefined_Number = binsNumberMixedOrUndefined_Number[0];

num = binNumberMixedOrUndefined_Number.length;
mixedObjectOrUndefined = binNumberMixedOrUndefined_Number[0];
numOrUndefined = binNumberMixedOrUndefined_Number.x0;
numOrUndefined = binNumberMixedOrUndefined_Number.x1;

// MixedObject - Date
let binsMixedObject_Date: Array<d3Array.Bin<MixedObject, Date>>;
binsMixedObject_Date = histoMixedObject_Date(mixedObjectArray);
binsMixedObject_Date = histoMixedObject_Date(readonlyMixedObjectArray);

let binMixedObject_Date: d3Array.Bin<MixedObject, Date>;
binMixedObject_Date = binsMixedObject_Date[0];

num = binMixedObject_Date.length;
mixedObject = binMixedObject_Date[0];
dateOrUndefined = binMixedObject_Date.x0;
dateOrUndefined = binMixedObject_Date.x1;

// MixedObject - Date | undefined
let binsMixedObject_DateOrUndefined: Array<d3Array.Bin<MixedObject, Date | undefined>>;
binsMixedObject_DateOrUndefined = histoMixedObject_DateOrUndefined(mixedObjectArray);

let binMixedObject_DateOrUndefined: d3Array.Bin<MixedObject, Date | undefined>;
binMixedObject_DateOrUndefined = binsMixedObject_DateOrUndefined[0];

num = binMixedObject_DateOrUndefined.length;
mixedObject = binMixedObject_DateOrUndefined[0];
dateOrUndefined = binMixedObject_DateOrUndefined.x0;
dateOrUndefined = binMixedObject_DateOrUndefined.x1;

// Histogram Thresholds ========================================================

numbersArray = [-1, 0, 1, 1, 3, 20, 234];
typedArray = new Uint8Array(numbersArray);
readonlyNumbersArray = numbersArray as ReadonlyArray<number>;

num = d3Array.thresholdFreedmanDiaconis(numbersArray, -1, 234);
num = d3Array.thresholdFreedmanDiaconis(typedArray, -1, 234);
num = d3Array.thresholdFreedmanDiaconis(readonlyNumbersArray, -1, 234);

num = d3Array.thresholdScott(numbersArray, -1, 234);
num = d3Array.thresholdScott(typedArray, -1, 234);
num = d3Array.thresholdScott(readonlyNumbersArray, -1, 234);

num = d3Array.thresholdSturges(numbersArray);
num = d3Array.thresholdSturges(typedArray);
num = d3Array.thresholdSturges(readonlyNumbersArray);

// Deprecated ==================================================================

const histDeprecatedNumber: d3Array.HistogramGenerator<MixedObject, number> = d3Array.histogram<MixedObject, number>();
const histDeprecatedDate: d3Array.HistogramGenerator<MixedObject, Date> = d3Array.histogram<MixedObject, Date>();
