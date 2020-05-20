/**
 * Typescript definition tests for d3/d3-collection module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Collection from 'd3-collection';
import { ascending } from 'd3-array';

// Preparatory steps --------------------------------------------------------------

const keyValueObj = {
    a: 'test',
    b: 123,
    c: [true, true, false]
};

const keyValueObj2 = {
    a: 'test',
    b: 'same',
    c: 'type'
};

let stringArray: string[];
let anyArray: any[];
let stringKVArray: Array<{ key: string, value: string }>;
let anyKVArray: Array<{ key: string, value: any }>;

let num: number;
let booleanFlag: boolean;

// ---------------------------------------------------------------------
// Test Objects
// ---------------------------------------------------------------------

// test keys(...) signatures ------------------------------------------------------

stringArray = d3Collection.keys(keyValueObj);
stringArray = d3Collection.keys([0, 1, 2]);

stringArray = d3Collection.keys(document); // purely for the fun of it

// test values(...) signatures ------------------------------------------------------

anyArray = d3Collection.values(keyValueObj);
// stringArray = d3Collection.values(keyValueObj); // test fails, as values in keyValueObj are not all strings

stringArray = d3Collection.values(keyValueObj2);
stringArray = d3Collection.values<string>(keyValueObj2);
// stringArray = d3Collection.values<string>(keyValueObj); // test fails, as values in keyValueObj do not meet generic constraint
stringArray = d3Collection.values(['1', '2']);

anyArray = d3Collection.values(document); // purely for the fun of it

// test entries(...) signatures ------------------------------------------------------

anyKVArray = d3Collection.entries(keyValueObj);
// stringKVArray = d3Collection.entries(keyValueObj); // test fails, as values in keyValueObj are not all strings

stringKVArray = d3Collection.entries(keyValueObj2);
stringKVArray = d3Collection.entries<string>(keyValueObj2);
// stringKVArray = d3Collection.entries<string>(keyValueObj); // test fails, as values in keyValueObj do not meet generic constraint

stringKVArray = d3Collection.entries(['1', '2']);
anyKVArray = d3Collection.entries(document); // purely for the fun of it

// ---------------------------------------------------------------------
// map / Map
// ---------------------------------------------------------------------

interface TestObject {
    name: string;
    val: number;
}

let testObjectMaybe: TestObject | undefined;
let testObjArray: TestObject[];
let testObjKVArray: Array<{ key: string, value: TestObject }>;

// Create Map ========================================================

let basicMap: d3Collection.Map<string>;
let anyMap: d3Collection.Map<any>;
anyMap = d3Collection.map(); // empty map
basicMap = d3Collection.map<string>(); // empty map

// from array with accessor without accessor
basicMap = d3Collection.map(['foo', 'bar']); // map with key-value pairs { '0': 'foo' } and { '1': 'bar'}

// from array with accessor
let testObjMap: d3Collection.Map<TestObject>;
testObjMap = d3Collection.map<TestObject>([{ name: 'foo', val: 10 }, { name: 'bar', val: 42 }], (value, i, array) => {
    return value.name;
});

// from existing map
basicMap = d3Collection.map(basicMap);
// basicMap = d3Collection.map(testObjMap); // fails, as maps have different value type

// from object
let objectMap: d3Collection.Map<any>;
objectMap = d3Collection.map(keyValueObj);

let objectMap2: d3Collection.Map<string>;
objectMap2 = d3Collection.map(keyValueObj2);

// Use Map ===========================================================

// has(...) ------------------------------------------------------------

booleanFlag = basicMap.has('foo');

// get(...) ------------------------------------------------------------

testObjectMaybe = testObjMap.get('foo');

// set(...) ------------------------------------------------------------

basicMap = basicMap.set('foo', '42');

// remove(...) ---------------------------------------------------------

booleanFlag = testObjMap.remove('bar');

// clear() -------------------------------------------------------------

basicMap.clear();

// keys() --------------------------------------------------------------

stringArray = testObjMap.keys();

// values() ------------------------------------------------------------

testObjArray = testObjMap.values();

// entries() -----------------------------------------------------------

testObjKVArray = testObjMap.entries();

// each() --------------------------------------------------------------

testObjMap.each((value, key, map) => {
    const v: TestObject = value;
    const k: string = key;
    const m: d3Collection.Map<TestObject> = map;
    console.log(v.val);
});

// empty() -------------------------------------------------------------

booleanFlag = testObjMap.empty();

// size() --------------------------------------------------------------

num = testObjMap.size();

// ---------------------------------------------------------------------
// set / Set
// ---------------------------------------------------------------------

// Create Set ========================================================

// TODO:
// - from set
// - from array with/without accessor

let basicSet: d3Collection.Set;
basicSet = d3Collection.set(); // empty set

// from array without accessor
basicSet = d3Collection.set(['foo', 'bar', 42]); // last element is coerced

// from array without accessor
basicSet = d3Collection.set(testObjArray, (value, index, array) => {
    const v: TestObject = value;
    const i: number = index;
    const a: TestObject[] = array;
    return v.name;
});

// from existing set

basicSet = d3Collection.set(basicSet);

// Use Set ===========================================================

// has(...) ------------------------------------------------------------

booleanFlag = basicSet.has('foo');

// add(...) ------------------------------------------------------------

basicSet = basicSet
    .add('foo')
    .add('bar')
    .add(42); // will be coerced to string

// remove(...) ---------------------------------------------------------

booleanFlag = basicSet.remove('bar');
booleanFlag = basicSet.remove(42);

// clear() -------------------------------------------------------------

basicSet.clear();

// values() ------------------------------------------------------------

stringArray = basicSet.values();

// each() --------------------------------------------------------------

basicSet.each((value, valueRepeat, set) => {
    const v: string = value;
    const vr: string = valueRepeat;
    const s: d3Collection.Set = set;
    console.log(v);
});

// empty() -------------------------------------------------------------

booleanFlag = basicSet.empty();

// size() --------------------------------------------------------------

num = basicSet.size();

// ---------------------------------------------------------------------
// nest / Nest
// ---------------------------------------------------------------------

interface Yield {
    yield: number;
    variety: string;
    year: number;
    site: string;
}

const raw: Yield[] = [
    { yield: 27.00, variety: 'Manchuria', year: 1931, site: 'University Farm' },
    { yield: 48.87, variety: 'Manchuria', year: 1931, site: 'Waseca' },
    { yield: 27.43, variety: 'Manchuria', year: 1931, site: 'Morris' },
    { yield: 43.07, variety: 'Glabron', year: 1931, site: 'University Farm' },
    { yield: 55.20, variety: 'Glabron', year: 1931, site: 'Waseca' },
    { yield: 26.00, variety: 'Manchuria', year: 1932, site: 'University Farm' },
    { yield: 47.87, variety: 'Manchuria', year: 1932, site: 'Waseca' },
    { yield: 26.43, variety: 'Manchuria', year: 1932, site: 'Morris' },
    { yield: 42.07, variety: 'Glabron', year: 1932, site: 'University Farm' },
    { yield: 54.20, variety: 'Glabron', year: 1932, site: 'Waseca' }
];

// Create Nest ========================================================

let nestL2: d3Collection.Nest<Yield, undefined>;
nestL2 = d3Collection.nest<Yield>();

let nestL1Rollup: d3Collection.Nest<Yield, number>;
nestL1Rollup = d3Collection.nest<Yield, number>();

// Configure Nest =====================================================

// key(...) and sortKeys(...) -----------------------------------------

nestL2 = nestL2
    .key(d => {
        return d.year.toString();
    });

// with 2nd key with sortkey(...)
nestL2 = nestL2
    .key(d => {
        return d.variety;
    })
    .sortKeys(ascending);

nestL1Rollup = nestL1Rollup
    .key(d => {
        return d.year.toString();
    });

// sortValues(...) ----------------------------------------------------

nestL2 = nestL2
    .sortValues((a, b) => {
        const val1: Yield = a; // data type Yield
        const val2: Yield = b; // data type Yield
        return a.yield - b.yield;
    });

// rollup(...) --------------------------------------------------------

nestL1Rollup = nestL1Rollup
    .rollup(values => {
        const vs: Yield[] = values; // correct data array type
        return vs.length;
    });

// Use Nest ===========================================================

// map(...) -----------------------------------------------------------

type TestL2NestedMap = d3Collection.Map<d3Collection.Map<Yield[]>>;

type TestL1NestedMapRollup = d3Collection.Map<number>;

let testL2NestedMap: TestL2NestedMap;
let testL1NestedMapRollup: TestL1NestedMapRollup;

testL2NestedMap = nestL2.map(raw);

num = testL2NestedMap.get('1931')!.get('Manchuria')![0].yield; // use existence assertion with care for access chain to leaf property

testL1NestedMapRollup = nestL1Rollup.map(raw);

num = testL1NestedMapRollup.get('1931')!; // get rollup value (use existence assertion with care)

// object(...) --------------------------------------------------------

interface TestL2NestedObject {
    [keyL1: string]: {
        [keyL2: string]: Yield[];
    };
}

interface TestL1NestedObjectRollup {
    [keyL1: string]: number;
}

let testL2NestedObject: TestL2NestedObject;
let testL1NestedObjectRollup: TestL1NestedObjectRollup;

testL2NestedObject = nestL2.object(raw);

num = testL2NestedObject['1931']['Manchuria'][0].yield; // access chain to leaf property

testL1NestedObjectRollup = nestL1Rollup.object(raw);

num = testL1NestedObjectRollup['1931']; // get rollup value

// entries(...) -------------------------------------------------------

type TestL2NestedArray = Array<{
    key: string;
    values: Array<{
        key: string;
        values: Yield[];
    }>
}>;

type TestL1NestedArrayRollup = Array<{
    key: string;
    value?: number; // conservatively allow for value to be undefined
}>;

let testL2NestedArray: TestL2NestedArray;
let testL1NestedArrayRollup: TestL1NestedArrayRollup;

testL2NestedArray = nestL2.entries(raw);

num = testL2NestedArray[0].values[0].values[0].yield; // access chain to leaf property

testL1NestedArrayRollup = nestL1Rollup.entries(raw);

num = testL1NestedArrayRollup[0].value!; // get rollup value use existence assertion with care
