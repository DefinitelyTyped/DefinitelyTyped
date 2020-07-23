declare const $: any;
declare const window: any;
declare const alert: (msg: string) => any;
declare const console: {log: any};

_.VERSION; // $ExpectType string
_.each([1, 2, 3], (num) => alert(num.toString()));
_.each({ one: 1, two: 2, three: 3 }, (value, key) => alert(value.toString()));

_.map([1, 2, 3], (num) => num * 3);
_.map({ one: 1, two: 2, three: 3 }, (value, key) => value * 3);
let plucked: string[] = _.map([{key: 'apples'}, {key: 'oranges'}], 'key');

//var sum = _.reduce([1, 2, 3], (memo, num) => memo + num, 0);    // https://typescript.codeplex.com/workitem/1960
_.reduce([1, 2, 3], (memo, num) => memo + num); // $ExpectType number | undefined
_.reduce<_.Dictionary<string>, number>({ 'a': '1', 'b': '2', 'c': '3' }, (memo, numstr) => (+memo) + (+numstr)); // $ExpectType string | number | undefined
_.reduce({ 'a': '1', 'b': '2', 'c': '3' }, (memo: string | number, numstr) => (+memo) + (+numstr)); // $ExpectType string | number | undefined
_.reduce([1, 2, 3], (memo, num) => memo + num, 0); // $ExpectType number
_([1, 2, 3]).reduce((memo, num) => memo + num, 0); // $ExpectType number
_.chain([1, 2, 3]).reduce((memo, num) => memo + num, 0).value(); // $ExpectType number

var list = [[0, 1], [2, 3], [4, 5]];
//var flat = _.reduceRight(list, (a, b) => a.concat(b), []);    // https://typescript.codeplex.com/workitem/1960
var flat = _.reduceRight(list, (a, b) => a.concat(b), [] as number[]);

// common testing types and objects
const context = {};

interface StringRecord {
    a: string;
    b: string;
}

const stringRecordProperty = 'a';
const stringRecordPropertyPath = ['a', 'length'];
const partialStringRecord: Partial<StringRecord> = { a: 'b' };

interface StringRecordAugmentedList extends _.List<StringRecord> {
    notAListProperty: boolean;
}

const stringRecordArray: StringRecord[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'b' }, { a: 'c', b: 'a' }];
const stringRecordAugmentedList: StringRecordAugmentedList = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: { a: 'c', b: 'a' }, length: 3, notAListProperty: true };
const stringRecordList: _.List<StringRecord> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: { a: 'c', b: 'a' }, length: 3 };

declare const level2RecordList: _.List<_.List<StringRecord>>;
declare const level3RecordList: _.List<_.List<_.List<StringRecord>>>;
declare const level4RecordList: _.List<_.List<_.List<_.List<StringRecord>>>>;
declare const maxLevel2RecordArray: (StringRecord | StringRecord[])[];
declare const maxLevel3RecordArray: (StringRecord | StringRecord[] | StringRecord[][])[];

const stringRecordListVoidIterator = (value: StringRecord, index: number, list: _.List<StringRecord>) => { value.a += 'b'; };
const stringRecordListValueIterator = (value: StringRecord, index: number, list: _.List<StringRecord>) => value.a;
const stringRecordListBooleanIterator = (value: StringRecord, index: number, list: _.List<StringRecord>) => value.a === 'b';
declare const stringRecordPartialMemoIterator: (prev: string, value: StringRecord) => string;
declare const stringRecordListMemoIterator: (prev: string, value: StringRecord, index: number, list: _.List<StringRecord>) => string;
declare const resultUnionPartialMemoIterator: (prev: string | StringRecord, value: StringRecord) => string | StringRecord;

interface StringRecordExplicitDictionary extends _.Dictionary<StringRecord> {
    a: StringRecord;
    b: StringRecord;
    c: StringRecord;
}

const stringRecordExplicitDictionary: StringRecordExplicitDictionary = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: { a: 'c', b: 'a' } };
const stringRecordDictionary: _.Dictionary<StringRecord> = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: { a: 'c', b: 'a' } };

const stringRecordDictionaryVoidIterator = (element: StringRecord, key: string, dictionary: _.Dictionary<StringRecord>) => { element.a += 'b'; };
const stringRecordDictionaryValueIterator = (element: StringRecord, key: string, dictionary: _.Dictionary<StringRecord>) => element.a;
const stringRecordDictionaryBooleanIterator = (element: StringRecord, key: string, list: _.Dictionary<StringRecord>) => element.a === 'b';
declare const stringRecordDictionaryMemoIterator: (prev: string, element: StringRecord, key: string, dictionary: _.Dictionary<StringRecord>) => string;

const simpleString = 'abc';

const stringListValueIterator = (value: string, index: number, list: _.List<string>) => value.length;
const stringListBooleanIterator = (value: string, index: number, list: _.List<string>) => value === 'b';
declare const stringListSelfMemoIterator: (prev: string, value: string, index: number, list: _.List<string>) => string;
declare const stringListMemoIterator: (prev: _.Dictionary<number>, value: string, index: number, list: _.List<string>) => _.Dictionary<number>;
declare const resultUnionStringListMemoIterator: (prev: string | number, value: string, index: number, str: string) => string | number;

const stringRecordOrUndefinedArray: (StringRecord | undefined)[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'b' }, undefined];
const stringRecordOrUndefinedList: _.List<StringRecord | undefined> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: undefined, length: 3 };

interface IntersectingMixedTypeRecord {
    a: boolean;
    c: string;
}

type IntersectingProperties = StringRecord | IntersectingMixedTypeRecord;

const intersectingPropertiesList: _.List<IntersectingProperties> = { 0: { a: 'a', b: 'b' }, 1: { a: true, c: 'c' }, length: 2 };

interface NonIntersectingStringRecord {
    onlyNonIntersectingStringRecord: string;
}

type NonIntersectingProperties = StringRecord | NonIntersectingStringRecord;

const nonIntersectingPropertiesList: _.List<NonIntersectingProperties> = { 0: { a: 'a', b: 'c' }, 1: { onlyNonIntersectingStringRecord: 'b' }, length: 2 };
declare const level2NonIntersectingPropertiesList: _.List<_.List<NonIntersectingProperties>>;
const nonIntersectingPropertiesDictionary: _.Dictionary<NonIntersectingProperties> = { a: { a: 'a', b: 'c' }, b: { onlyNonIntersectingStringRecord: 'b' } };

const simpleStringArray: string[] = ['a', 'c'];
const simpleStringList: _.List<string> = { 0: 'a', 1: 'c', length: 2 };
declare const level2StringList: _.List<_.List<string>>;

interface NumberRecord {
    a: number;
}

const numberRecordArray: NumberRecord[] = [{ a: 0 }, { a: 1 }];
const numberRecordList: _.List<NumberRecord> = { 0: { a: 0 }, 1: { a: 1 }, length: 2 };
const numberRecordListValueIterator = (value: NumberRecord, index: number, list: _.List<NumberRecord>) => value.a;

const numberRecordDictionary: _.Dictionary<NumberRecord> = { a: { a: 0 }, b: { a: 1 } };
const numberRecordDictionaryValueIterator = (element: NumberRecord, key: string, list: _.Dictionary<NumberRecord>) => element.a;

const numberArray: number[] = [0, 1];
const numberList: _.List<number> = { 0: 0, 1: 1, length: 2 };
const numberDictionary: _.Dictionary<number> = { a: 0, b: 1 };

const simpleNumber = 7;

declare const level2UnionList: _.List<_.List<string | number>>;
declare const tupleList: _.List<[string, number]>;

interface NoParameterFunctionRecord {
    a: () => number;
}

declare const noParameterFunctionRecordList: _.List<NoParameterFunctionRecord>;
declare const noParameterFunctionRecordDictionary: _.Dictionary<NoParameterFunctionRecord>;

interface TwoParameterFunctionRecord {
    a: (arg0: number, arg1: string) => void;
}

declare const twoParameterFunctionRecordList: _.List<TwoParameterFunctionRecord>;
declare const twoParameterFunctionRecordDictionary: _.Dictionary<TwoParameterFunctionRecord>;

declare const mixedIterabilityValue: number | number[];
declare const anyValue: any;

// avoid referencing types under test directly by translating them to other types to avoid needing to make lots of changes if
// the types under test need to be refactored
interface UnderscoreType<TWrappedValue, TItemType> { }

interface UnderscoreTypeExtractor {
    <T, V>(chainResult: _.Underscore<T, V>): UnderscoreType<V, T>;
}

declare const extractUnderscoreTypes: UnderscoreTypeExtractor;

interface ChainType<TWrappedValue, TItemType> { }

interface ChainTypeExtractor {
    <T, V>(chainResult: _._Chain<T, V>): ChainType<V, T>;
}

declare const extractChainTypes: ChainTypeExtractor;

// Collections

// each, forEach
{
    _.each(stringRecordList, stringRecordListVoidIterator); // $ExpectType List<StringRecord>
    _.each(stringRecordList, stringRecordListVoidIterator, context); // $ExpectType List<StringRecord>

    _(stringRecordList).each(stringRecordListVoidIterator); // $ExpectType List<StringRecord>
    _(stringRecordList).each(stringRecordListVoidIterator, context); // $ExpectType List<StringRecord>

    _.chain(stringRecordList).each(stringRecordListVoidIterator); // // $ExpectType _Chain<StringRecord, List<StringRecord>>
    _.chain(stringRecordList).each(stringRecordListVoidIterator, context); // // $ExpectType _Chain<StringRecord, List<StringRecord>>

    _.forEach(stringRecordList, stringRecordListVoidIterator); // $ExpectType List<StringRecord>
    _.forEach(stringRecordList, stringRecordListVoidIterator, context); // $ExpectType List<StringRecord>

    _(stringRecordList).forEach(stringRecordListVoidIterator); // $ExpectType List<StringRecord>
    _(stringRecordList).forEach(stringRecordListVoidIterator, context); // $ExpectType List<StringRecord>

    _.chain(stringRecordList).forEach(stringRecordListVoidIterator); // // $ExpectType _Chain<StringRecord, List<StringRecord>>
    _.chain(stringRecordList).forEach(stringRecordListVoidIterator, context); // // $ExpectType _Chain<StringRecord, List<StringRecord>>

    _.each(stringRecordDictionary, stringRecordDictionaryVoidIterator); // $ExpectType Dictionary<StringRecord>
    _.each(stringRecordDictionary, stringRecordDictionaryVoidIterator, context); // $ExpectType Dictionary<StringRecord>

    _(stringRecordDictionary).each(stringRecordDictionaryVoidIterator); // $ExpectType Dictionary<StringRecord>
    _(stringRecordDictionary).each(stringRecordDictionaryVoidIterator, context); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordDictionary).each(stringRecordDictionaryVoidIterator); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
    _.chain(stringRecordDictionary).each(stringRecordDictionaryVoidIterator, context); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>

    _.forEach(stringRecordDictionary, stringRecordDictionaryVoidIterator); // $ExpectType Dictionary<StringRecord>
    _.forEach(stringRecordDictionary, stringRecordDictionaryVoidIterator, context); // $ExpectType Dictionary<StringRecord>

    _(stringRecordDictionary).forEach(stringRecordDictionaryVoidIterator); // $ExpectType Dictionary<StringRecord>
    _(stringRecordDictionary).forEach(stringRecordDictionaryVoidIterator, context); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordDictionary).forEach(stringRecordDictionaryVoidIterator); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
    _.chain(stringRecordDictionary).forEach(stringRecordDictionaryVoidIterator, context); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
}

// map, collect
{
    // function iteratee - lists
    _.map(stringRecordList, stringRecordListValueIterator, context); // $ExpectType string[]
    _(stringRecordList).map(stringRecordListValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).map(stringRecordListValueIterator, context)); // $ExpectType ChainType<string[], string>
    _.collect(stringRecordList, stringRecordListValueIterator, context); // $ExpectType string[]
    _(stringRecordList).collect(stringRecordListValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).collect(stringRecordListValueIterator, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - dictionaries
    _.map(stringRecordDictionary, stringRecordDictionaryValueIterator, context); // $ExpectType string[]
    _(stringRecordDictionary).map(stringRecordDictionaryValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).map(stringRecordDictionaryValueIterator, context)); // $ExpectType ChainType<string[], string>
    _.collect(stringRecordDictionary, stringRecordDictionaryValueIterator, context); // $ExpectType string[]
    _(stringRecordDictionary).collect(stringRecordDictionaryValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).collect(stringRecordDictionaryValueIterator, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - strings
    _.map(simpleString, stringListValueIterator, context); // $ExpectType number[]
    _(simpleString).map(stringListValueIterator, context); // $ExpectType number[]
    extractChainTypes(_.chain(simpleString).map(stringListValueIterator, context)); // $ExpectType ChainType<number[], number>
    _.collect(simpleString, stringListValueIterator, context); // $ExpectType number[]
    _(simpleString).collect(stringListValueIterator, context); // $ExpectType number[]
    extractChainTypes(_.chain(simpleString).collect(stringListValueIterator, context)); // $ExpectType ChainType<number[], number>

    // function iteratee - any
    _.map(anyValue, stringRecordListValueIterator, context); // $ExpectType string[]
    _(anyValue).map(stringRecordListValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(anyValue).map(stringRecordListValueIterator, context)); // $ExpectType ChainType<string[], string>
    _.collect(anyValue, stringRecordListValueIterator, context); // $ExpectType string[]
    _(anyValue).collect(stringRecordListValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(anyValue).collect(stringRecordListValueIterator, context)); // $ExpectType ChainType<string[], string>

    // partial object iteratee - lists
    _.map(stringRecordList, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordList).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordList).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(stringRecordList, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordList).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordList).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iteratee - dictionaries
    _.map(stringRecordDictionary, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordDictionary).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordDictionary).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(stringRecordDictionary, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordDictionary).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordDictionary).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iteratee - any (see #33479)
    _.map(anyValue, partialStringRecord); // $ExpectType boolean[]
    _(anyValue).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(anyValue).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(anyValue, partialStringRecord); // $ExpectType boolean[]
    _(anyValue).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(anyValue).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // property name iteratee with a non-nullable single type - lists
    _.map(stringRecordList, stringRecordProperty); // $ExpectType string[]
    _(stringRecordList).map(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).map(stringRecordProperty)); // $ExpectType ChainType<string[], string>
    _.collect(stringRecordList, stringRecordProperty); // $ExpectType string[]
    _(stringRecordList).collect(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).collect(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    // property name iteratee with a non-nullable single type - dictionaries
    _.map(stringRecordDictionary, stringRecordProperty); // $ExpectType string[]
    _(stringRecordDictionary).map(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).map(stringRecordProperty)); // $ExpectType ChainType<string[], string>
    _.collect(stringRecordDictionary, stringRecordProperty); // $ExpectType string[]
    _(stringRecordDictionary).collect(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).collect(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    // property name iteratee with other types - lists
    _.map(stringRecordOrUndefinedList, stringRecordProperty); // $ExpectType any[]
    _.map(intersectingPropertiesList, stringRecordProperty); // $ExpectType (string | boolean)[]
    _.map(nonIntersectingPropertiesList, stringRecordProperty); // $ExpectType any[]

    // property name iteratee - any (see #33479)
    _.map(anyValue, stringRecordProperty); // $ExpectType any[]
    _(anyValue).map(stringRecordProperty); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).map(stringRecordProperty)); // $ExpectType ChainType<any[], any>
    _.collect(anyValue, stringRecordProperty); // $ExpectType any[]
    _(anyValue).collect(stringRecordProperty); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).collect(stringRecordProperty)); // $ExpectType ChainType<any[], any>

    // property path iteratee - lists
    _.map(stringRecordList, stringRecordPropertyPath); // $ExpectType any[]
    _(stringRecordList).map(stringRecordPropertyPath); // $ExpectType any[]
    extractChainTypes(_.chain(stringRecordList).map(stringRecordPropertyPath)); // $ExpectType ChainType<any[], any>
    _.collect(stringRecordList, stringRecordPropertyPath); // $ExpectType any[]
    _(stringRecordList).collect(stringRecordPropertyPath); // $ExpectType any[]
    extractChainTypes(_.chain(stringRecordList).collect(stringRecordPropertyPath)); // $ExpectType ChainType<any[], any>

    // property path iteratee - dictionaries
    _.map(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType any[]
    _(stringRecordDictionary).map(stringRecordPropertyPath); // $ExpectType any[]
    extractChainTypes(_.chain(stringRecordDictionary).map(stringRecordPropertyPath)); // $ExpectType ChainType<any[], any>
    _.collect(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType any[]
    _(stringRecordDictionary).collect(stringRecordPropertyPath); // $ExpectType any[]
    extractChainTypes(_.chain(stringRecordDictionary).collect(stringRecordPropertyPath)); // $ExpectType ChainType<any[], any>

    // property path iteratee - any
    _.map(anyValue, stringRecordPropertyPath); // $ExpectType any[]
    _(anyValue).map(stringRecordPropertyPath); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).map(stringRecordPropertyPath)); // $ExpectType ChainType<any[], any>
    _.collect(anyValue, stringRecordPropertyPath); // $ExpectType any[]
    _(anyValue).collect(stringRecordPropertyPath); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).collect(stringRecordPropertyPath)); // $ExpectType ChainType<any[], any>
}

// reduce, foldl, inject
{
    const stringMemo = '';
    const dictionaryMemo: _.Dictionary<number> = {};

    // constant primitive memo and memo-type result - lists - reduce
    _.reduce(stringRecordList, stringRecordListMemoIterator, stringMemo); // $ExpectType string
    _.reduce(stringRecordList, stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    _(stringRecordList).reduce(stringRecordListMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordList).reduce(stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    extractChainTypes(_.chain(stringRecordList).reduce(stringRecordListMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordList).reduce(stringRecordPartialMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - foldl
    _.foldl(stringRecordList, stringRecordListMemoIterator, stringMemo); // $ExpectType string
    _.foldl(stringRecordList, stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    _(stringRecordList).foldl(stringRecordListMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordList).foldl(stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    extractChainTypes(_.chain(stringRecordList).foldl(stringRecordListMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordList).foldl(stringRecordPartialMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - inject
    _.inject(stringRecordList, stringRecordListMemoIterator, stringMemo); // $ExpectType string
    _.inject(stringRecordList, stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    _(stringRecordList).inject(stringRecordListMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordList).inject(stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    extractChainTypes(_.chain(stringRecordList).inject(stringRecordListMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordList).inject(stringRecordPartialMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - dictionaries - reduce
    _.reduce(stringRecordDictionary, stringRecordDictionaryMemoIterator, stringMemo); // $ExpectType string
    _.reduce(stringRecordDictionary, stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    _(stringRecordDictionary).reduce(stringRecordDictionaryMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordDictionary).reduce(stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    extractChainTypes(_.chain(stringRecordDictionary).reduce(stringRecordDictionaryMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordDictionary).reduce(stringRecordPartialMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - dictionaries - foldl
    _.foldl(stringRecordDictionary, stringRecordDictionaryMemoIterator, stringMemo); // $ExpectType string
    _.foldl(stringRecordDictionary, stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    _(stringRecordDictionary).foldl(stringRecordDictionaryMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordDictionary).foldl(stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    extractChainTypes(_.chain(stringRecordDictionary).foldl(stringRecordDictionaryMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordDictionary).foldl(stringRecordPartialMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - dictionaries - inject
    _.inject(stringRecordDictionary, stringRecordDictionaryMemoIterator, stringMemo); // $ExpectType string
    _.inject(stringRecordDictionary, stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    _(stringRecordDictionary).inject(stringRecordDictionaryMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordDictionary).inject(stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    extractChainTypes(_.chain(stringRecordDictionary).inject(stringRecordDictionaryMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordDictionary).inject(stringRecordPartialMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    // object memo and memo-type result - strings - reduce
    _.reduce(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.reduce(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>
    _(simpleString).reduce(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).reduce(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(simpleString).reduce(stringListMemoIterator, dictionaryMemo)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(simpleString).reduce(stringListMemoIterator, dictionaryMemo, context)); // $ExpectType ChainType<Dictionary<number>, number>

    // object memo and memo-type result - strings - foldl
    _.foldl(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.foldl(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>
    _(simpleString).foldl(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).foldl(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(simpleString).foldl(stringListMemoIterator, dictionaryMemo)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(simpleString).foldl(stringListMemoIterator, dictionaryMemo, context)); // $ExpectType ChainType<Dictionary<number>, number>

    // object memo and memo-type result - strings - inject
    _.inject(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.inject(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>
    _(simpleString).inject(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).inject(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(simpleString).inject(stringListMemoIterator, dictionaryMemo)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(simpleString).inject(stringListMemoIterator, dictionaryMemo, context)); // $ExpectType ChainType<Dictionary<number>, number>

    // no memo and collection type result - strings - reduce
    _.reduce(simpleString, stringListSelfMemoIterator); // $ExpectType string | undefined
    _(simpleString).reduce(stringListSelfMemoIterator); // $ExpectType string | undefined
    extractChainTypes(_.chain(simpleString).reduce(stringListSelfMemoIterator)); // $ExpectType ChainType<string | undefined, string>

    // no memo and collection type result - strings - foldl
    _.foldl(simpleString, stringListSelfMemoIterator); // $ExpectType string | undefined
    _(simpleString).foldl(stringListSelfMemoIterator); // $ExpectType string | undefined
    extractChainTypes(_.chain(simpleString).foldl(stringListSelfMemoIterator)); // $ExpectType ChainType<string | undefined, string>

    // no memo and collection type result - strings - inject
    _.inject(simpleString, stringListSelfMemoIterator); // $ExpectType string | undefined
    _(simpleString).inject(stringListSelfMemoIterator); // $ExpectType string | undefined
    extractChainTypes(_.chain(simpleString).inject(stringListSelfMemoIterator)); // $ExpectType ChainType<string | undefined, string>

    // constant primitive memo and type union result - lists - reduce
    _.reduce(stringRecordList, resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    _(stringRecordList).reduce(resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(stringRecordList).reduce(resultUnionPartialMemoIterator, stringMemo)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - foldl
    _.foldl(stringRecordList, resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    _(stringRecordList).foldl(resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(stringRecordList).foldl(resultUnionPartialMemoIterator, stringMemo)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - inject
    _.inject(stringRecordList, resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    _(stringRecordList).inject(resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(stringRecordList).inject(resultUnionPartialMemoIterator, stringMemo)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - dictionaries - reduce
    _.reduce(stringRecordDictionary, resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    _(stringRecordDictionary).reduce(resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(stringRecordDictionary).reduce(resultUnionPartialMemoIterator, stringMemo)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - dictionaries - foldl
    _.foldl(stringRecordDictionary, resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    _(stringRecordDictionary).foldl(resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(stringRecordDictionary).foldl(resultUnionPartialMemoIterator, stringMemo)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - dictionaries - inject
    _.inject(stringRecordDictionary, resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    _(stringRecordDictionary).inject(resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(stringRecordDictionary).inject(resultUnionPartialMemoIterator, stringMemo)); // $ExpectType ChainType<string | StringRecord, string>

    // no memo and union type result - strings - reduce
    _.reduce(simpleString, resultUnionStringListMemoIterator); // $ExpectType string | number | undefined
    _(simpleString).reduce(resultUnionStringListMemoIterator); // $ExpectType string | number | undefined
    extractChainTypes(_.chain(simpleString).reduce(resultUnionStringListMemoIterator)); // $ExpectType ChainType<string | number | undefined, string>

    // no memo and union type result - strings - foldl
    _.foldl(simpleString, resultUnionStringListMemoIterator); // $ExpectType string | number | undefined
    _(simpleString).foldl(resultUnionStringListMemoIterator); // $ExpectType string | number | undefined
    extractChainTypes(_.chain(simpleString).foldl(resultUnionStringListMemoIterator)); // $ExpectType ChainType<string | number | undefined, string>

    // no memo and union type result - strings - inject
    _.inject(simpleString, resultUnionStringListMemoIterator); // $ExpectType string | number | undefined
    _(simpleString).inject(resultUnionStringListMemoIterator); // $ExpectType string | number | undefined
    extractChainTypes(_.chain(simpleString).inject(resultUnionStringListMemoIterator)); // $ExpectType ChainType<string | number | undefined, string>
}

// reduceRight, foldr
{
    const stringMemo = '';
    const dictionaryMemo: _.Dictionary<number> = {};

    // constant primitive memo and memo-type result - lists - reduceRight
    _.reduceRight(stringRecordList, stringRecordListMemoIterator, stringMemo); // $ExpectType string
    _.reduceRight(stringRecordList, stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    _(stringRecordList).reduceRight(stringRecordListMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordList).reduceRight(stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    extractChainTypes(_.chain(stringRecordList).reduceRight(stringRecordListMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordList).reduceRight(stringRecordPartialMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - foldr
    _.foldr(stringRecordList, stringRecordListMemoIterator, stringMemo); // $ExpectType string
    _.foldr(stringRecordList, stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    _(stringRecordList).foldr(stringRecordListMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordList).foldr(stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    extractChainTypes(_.chain(stringRecordList).foldr(stringRecordListMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordList).foldr(stringRecordPartialMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - dictionaries - reduceRight
    _.reduceRight(stringRecordDictionary, stringRecordDictionaryMemoIterator, stringMemo); // $ExpectType string
    _.reduceRight(stringRecordDictionary, stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    _(stringRecordDictionary).reduceRight(stringRecordDictionaryMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordDictionary).reduceRight(stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    extractChainTypes(_.chain(stringRecordDictionary).reduceRight(stringRecordDictionaryMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordDictionary).reduceRight(stringRecordPartialMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - dictionaries - foldr
    _.foldr(stringRecordDictionary, stringRecordDictionaryMemoIterator, stringMemo); // $ExpectType string
    _.foldr(stringRecordDictionary, stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    _(stringRecordDictionary).foldr(stringRecordDictionaryMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordDictionary).foldr(stringRecordPartialMemoIterator, stringMemo, context); // $ExpectType string
    extractChainTypes(_.chain(stringRecordDictionary).foldr(stringRecordDictionaryMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordDictionary).foldr(stringRecordPartialMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    // object memo and memo-type result - strings - reduceRight
    _.reduceRight(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.reduceRight(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>
    _(simpleString).reduceRight(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).reduceRight(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(simpleString).reduceRight(stringListMemoIterator, dictionaryMemo)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(simpleString).reduceRight(stringListMemoIterator, dictionaryMemo, context)); // $ExpectType ChainType<Dictionary<number>, number>

    // object memo and memo-type result - strings - foldr
    _.foldr(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.foldr(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>
    _(simpleString).foldr(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).foldr(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(simpleString).foldr(stringListMemoIterator, dictionaryMemo)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(simpleString).foldr(stringListMemoIterator, dictionaryMemo, context)); // $ExpectType ChainType<Dictionary<number>, number>

    // no memo and collection type result - strings - reduceRight
    _.reduceRight(simpleString, stringListSelfMemoIterator); // $ExpectType string | undefined
    _(simpleString).reduceRight(stringListSelfMemoIterator); // $ExpectType string | undefined
    extractChainTypes(_.chain(simpleString).reduceRight(stringListSelfMemoIterator)); // $ExpectType ChainType<string | undefined, string>

    // no memo and collection type result - strings - foldr
    _.foldr(simpleString, stringListSelfMemoIterator); // $ExpectType string | undefined
    _(simpleString).foldr(stringListSelfMemoIterator); // $ExpectType string | undefined
    extractChainTypes(_.chain(simpleString).foldr(stringListSelfMemoIterator)); // $ExpectType ChainType<string | undefined, string>

    // constant primitive memo and type union result - lists - reduceRight
    _.reduceRight(stringRecordList, resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    _(stringRecordList).reduceRight(resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(stringRecordList).reduceRight(resultUnionPartialMemoIterator, stringMemo)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - lists - foldr
    _.foldl(stringRecordList, resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    _(stringRecordList).foldl(resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(stringRecordList).foldl(resultUnionPartialMemoIterator, stringMemo)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - dictionaries - reduceRight
    _.reduceRight(stringRecordDictionary, resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    _(stringRecordDictionary).reduceRight(resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(stringRecordDictionary).reduceRight(resultUnionPartialMemoIterator, stringMemo)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - dictionaries - foldr
    _.foldr(stringRecordDictionary, resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    _(stringRecordDictionary).foldr(resultUnionPartialMemoIterator, stringMemo); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(stringRecordDictionary).foldr(resultUnionPartialMemoIterator, stringMemo)); // $ExpectType ChainType<string | StringRecord, string>

    // no memo and union type result - strings - reduceRight
    _.reduceRight(simpleString, resultUnionStringListMemoIterator); // $ExpectType string | number | undefined
    _(simpleString).reduceRight(resultUnionStringListMemoIterator); // $ExpectType string | number | undefined
    extractChainTypes(_.chain(simpleString).reduceRight(resultUnionStringListMemoIterator)); // $ExpectType ChainType<string | number | undefined, string>

    // no memo and union type result - strings - foldr
    _.foldr(simpleString, resultUnionStringListMemoIterator); // $ExpectType string | number | undefined
    _(simpleString).foldr(resultUnionStringListMemoIterator); // $ExpectType string | number | undefined
    extractChainTypes(_.chain(simpleString).foldr(resultUnionStringListMemoIterator)); // $ExpectType ChainType<string | number | undefined, string>
}

// find, detect
{
    // function iterator
    _.find(stringRecordArray, stringRecordListBooleanIterator); // $ExpectType StringRecord | undefined
    _.find(stringRecordArray, stringRecordListBooleanIterator, context); // $ExpectType StringRecord | undefined

    _(stringRecordArray).find(stringRecordListBooleanIterator); // $ExpectType StringRecord | undefined
    _(stringRecordArray).find(stringRecordListBooleanIterator, context); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).find(stringRecordListBooleanIterator)); // $ExpectType ChainType<StringRecord | undefined, never>
    extractChainTypes(_.chain(stringRecordArray).find(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.detect(stringRecordArray, stringRecordListBooleanIterator); // $ExpectType StringRecord | undefined
    _.detect(stringRecordArray, stringRecordListBooleanIterator, context); // $ExpectType StringRecord | undefined

    _(stringRecordArray).detect(stringRecordListBooleanIterator); // $ExpectType StringRecord | undefined
    _(stringRecordArray).detect(stringRecordListBooleanIterator, context); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).detect(stringRecordListBooleanIterator)); // $ExpectType ChainType<StringRecord | undefined, never>
    extractChainTypes(_.chain(stringRecordArray).detect(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.find(stringRecordList, stringRecordListBooleanIterator); // $ExpectType StringRecord | undefined
    _.find(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType StringRecord | undefined

    _(stringRecordList).find(stringRecordListBooleanIterator); // $ExpectType StringRecord | undefined
    _(stringRecordList).find(stringRecordListBooleanIterator, context); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).find(stringRecordListBooleanIterator)); // $ExpectType ChainType<StringRecord | undefined, never>
    extractChainTypes(_.chain(stringRecordList).find(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.detect(stringRecordList, stringRecordListBooleanIterator); // $ExpectType StringRecord | undefined
    _.detect(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType StringRecord | undefined

    _(stringRecordList).detect(stringRecordListBooleanIterator); // $ExpectType StringRecord | undefined
    _(stringRecordList).detect(stringRecordListBooleanIterator, context); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).detect(stringRecordListBooleanIterator)); // $ExpectType ChainType<StringRecord | undefined, never>
    extractChainTypes(_.chain(stringRecordList).detect(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.find(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType StringRecord | undefined
    _.find(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord | undefined

    _(stringRecordDictionary).find(stringRecordDictionaryBooleanIterator); // $ExpectType StringRecord | undefined
    _(stringRecordDictionary).find(stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordDictionary).find(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<StringRecord | undefined, never>
    extractChainTypes(_.chain(stringRecordDictionary).find(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.detect(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType StringRecord | undefined
    _.detect(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord | undefined

    _(stringRecordDictionary).detect(stringRecordDictionaryBooleanIterator); // $ExpectType StringRecord | undefined
    _(stringRecordDictionary).detect(stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordDictionary).detect(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<StringRecord | undefined, never>
    extractChainTypes(_.chain(stringRecordDictionary).detect(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.find(simpleString, stringListBooleanIterator); // $ExpectType string | undefined
    _.find(simpleString, stringListBooleanIterator, context); // $ExpectType string | undefined

    _(simpleString).find(stringListBooleanIterator); // $ExpectType string | undefined
    _(simpleString).find(stringListBooleanIterator, context); // $ExpectType string | undefined

    extractChainTypes(_.chain(simpleString).find(stringListBooleanIterator)); // $ExpectType ChainType<string | undefined, string>
    extractChainTypes(_.chain(simpleString).find(stringListBooleanIterator, context)); // $ExpectType ChainType<string | undefined, string>

    _.detect(simpleString, stringListBooleanIterator); // $ExpectType string | undefined
    _.detect(simpleString, stringListBooleanIterator, context); // $ExpectType string | undefined

    _(simpleString).detect(stringListBooleanIterator); // $ExpectType string | undefined
    _(simpleString).detect(stringListBooleanIterator, context); // $ExpectType string | undefined

    extractChainTypes(_.chain(simpleString).detect(stringListBooleanIterator)); // $ExpectType ChainType<string | undefined, string>
    extractChainTypes(_.chain(simpleString).detect(stringListBooleanIterator, context)); // $ExpectType ChainType<string | undefined, string>

    // partial object iterator
    _.find(stringRecordArray, partialStringRecord); // $ExpectType StringRecord | undefined

    _(stringRecordArray).find(partialStringRecord); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).find(partialStringRecord)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.detect(stringRecordArray, partialStringRecord); // $ExpectType StringRecord | undefined

    _(stringRecordArray).detect(partialStringRecord); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).detect(partialStringRecord)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.find(stringRecordList, partialStringRecord); // $ExpectType StringRecord | undefined

    _(stringRecordList).find(partialStringRecord); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).find(partialStringRecord)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.detect(stringRecordList, partialStringRecord); // $ExpectType StringRecord | undefined

    _(stringRecordList).detect(partialStringRecord); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).detect(partialStringRecord)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.find(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord | undefined

    _(stringRecordDictionary).find(partialStringRecord); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordDictionary).find(partialStringRecord)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.detect(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord | undefined

    _(stringRecordDictionary).detect(partialStringRecord); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordDictionary).detect(partialStringRecord)); // $ExpectType ChainType<StringRecord | undefined, never>

    // property name iterator
    _.find(stringRecordArray, stringRecordProperty); // $ExpectType StringRecord | undefined

    _(stringRecordArray).find(stringRecordProperty); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).find(stringRecordProperty)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.detect(stringRecordArray, stringRecordProperty); // $ExpectType StringRecord | undefined

    _(stringRecordArray).detect(stringRecordProperty); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).detect(stringRecordProperty)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.find(stringRecordList, stringRecordProperty); // $ExpectType StringRecord | undefined

    _(stringRecordList).find(stringRecordProperty); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).find(stringRecordProperty)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.detect(stringRecordList, stringRecordProperty); // $ExpectType StringRecord | undefined

    _(stringRecordList).detect(stringRecordProperty); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).detect(stringRecordProperty)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.find(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecord | undefined

    _(stringRecordDictionary).find(stringRecordProperty); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordDictionary).find(stringRecordProperty)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.detect(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecord | undefined

    _(stringRecordDictionary).detect(stringRecordProperty); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordDictionary).detect(stringRecordProperty)); // $ExpectType ChainType<StringRecord | undefined, never>
}

// filter, select
{
    // function iteratee - lists
    _.filter(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).filter(stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).filter(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).select(stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).select(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - dictionaries
    _.filter(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordDictionary).filter(stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).filter(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordDictionary).select(stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).select(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - strings
    _.filter(simpleString, stringListBooleanIterator, context); // $ExpectType string[]
    _(simpleString).filter(stringListBooleanIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(simpleString).filter(stringListBooleanIterator, context)); // $ExpectType ChainType<string[], string>
    _.select(simpleString, stringListBooleanIterator, context); // $ExpectType string[]
    _(simpleString).select(stringListBooleanIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(simpleString).select(stringListBooleanIterator, context)); // $ExpectType ChainType<string[], string>

    // partial object iteratee - lists
    _.filter(stringRecordList, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordList).filter(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).filter(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordList, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordList).select(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).select(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // partial object iteratee - dictionaries
    _.filter(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordDictionary).filter(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).filter(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordDictionary).select(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).select(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property name iteratee - lists
    _.filter(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordList).filter(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).filter(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordList).select(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).select(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property name iteratee - dictionaries
    _.filter(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordDictionary).filter(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).filter(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordDictionary).select(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).select(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property path iteratee - lists
    _.filter(stringRecordList, stringRecordPropertyPath); // $ExpectType StringRecord[]
    _(stringRecordList).filter(stringRecordPropertyPath); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).filter(stringRecordPropertyPath)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordList, stringRecordPropertyPath); // $ExpectType StringRecord[]
    _(stringRecordList).select(stringRecordPropertyPath); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).select(stringRecordPropertyPath)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property path iteratee - dictionaries
    _.filter(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType StringRecord[]
    _(stringRecordDictionary).filter(stringRecordPropertyPath); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).filter(stringRecordPropertyPath)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType StringRecord[]
    _(stringRecordDictionary).select(stringRecordPropertyPath); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).select(stringRecordPropertyPath)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// where
{
    _.where(stringRecordArray, partialStringRecord); // $ExpectType StringRecord[]

    _(stringRecordArray).where(partialStringRecord); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).where(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.where(stringRecordList, partialStringRecord); // $ExpectType StringRecord[]

    _(stringRecordList).where(partialStringRecord); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).where(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.where(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord[]

    _(stringRecordDictionary).where(partialStringRecord); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).where(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// findWhere
{
    _.findWhere(stringRecordArray, partialStringRecord); // $ExpectType StringRecord | undefined

    _(stringRecordArray).findWhere(partialStringRecord); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).findWhere(partialStringRecord)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.findWhere(stringRecordList, partialStringRecord); // $ExpectType StringRecord | undefined

    _(stringRecordList).findWhere(partialStringRecord); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).findWhere(partialStringRecord)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.findWhere(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord | undefined

    _(stringRecordDictionary).findWhere(partialStringRecord); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordDictionary).findWhere(partialStringRecord)); // $ExpectType ChainType<StringRecord | undefined, never>
}

// reject
{
    // function iterator
    _.reject(stringRecordArray, stringRecordListBooleanIterator); // $ExpectType StringRecord[]
    _.reject(stringRecordArray, stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]

    _(stringRecordArray).reject(stringRecordListBooleanIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).reject(stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).reject(stringRecordListBooleanIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).reject(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.reject(stringRecordList, stringRecordListBooleanIterator); // $ExpectType StringRecord[]
    _.reject(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]

    _(stringRecordList).reject(stringRecordListBooleanIterator); // $ExpectType StringRecord[]
    _(stringRecordList).reject(stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).reject(stringRecordListBooleanIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).reject(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.reject(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType StringRecord[]
    _.reject(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]

    _(stringRecordDictionary).reject(stringRecordDictionaryBooleanIterator); // $ExpectType StringRecord[]
    _(stringRecordDictionary).reject(stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).reject(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordDictionary).reject(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.reject(simpleString, stringListBooleanIterator); // $ExpectType string[]
    _.reject(simpleString, stringListBooleanIterator, context); // $ExpectType string[]

    _(simpleString).reject(stringListBooleanIterator); // $ExpectType string[]
    _(simpleString).reject(stringListBooleanIterator, context); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).reject(stringListBooleanIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(simpleString).reject(stringListBooleanIterator, context)); // $ExpectType ChainType<string[], string>

    // partial object iterator
    _.reject(stringRecordArray, partialStringRecord); // $ExpectType StringRecord[]

    _(stringRecordArray).reject(partialStringRecord); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).reject(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.reject(stringRecordList, partialStringRecord); // $ExpectType StringRecord[]

    _(stringRecordList).reject(partialStringRecord); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).reject(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.reject(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord[]

    _(stringRecordDictionary).reject(partialStringRecord); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).reject(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property name iterator
    _.reject(stringRecordArray, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordArray).reject(stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).reject(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.reject(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordList).reject(stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).reject(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.reject(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordDictionary).reject(stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).reject(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// every, all
{
    // function iterator
    _.every(stringRecordArray, stringRecordListBooleanIterator); // $ExpectType boolean
    _.every(stringRecordArray, stringRecordListBooleanIterator, context); // $ExpectType boolean

    _(stringRecordArray).every(stringRecordListBooleanIterator); // $ExpectType boolean
    _(stringRecordArray).every(stringRecordListBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).every(stringRecordListBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordArray).every(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.all(stringRecordArray, stringRecordListBooleanIterator); // $ExpectType boolean
    _.all(stringRecordArray, stringRecordListBooleanIterator, context); // $ExpectType boolean

    _(stringRecordArray).all(stringRecordListBooleanIterator); // $ExpectType boolean
    _(stringRecordArray).all(stringRecordListBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).all(stringRecordListBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordArray).all(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.every(stringRecordList, stringRecordListBooleanIterator); // $ExpectType boolean
    _.every(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType boolean

    _(stringRecordList).every(stringRecordListBooleanIterator); // $ExpectType boolean
    _(stringRecordList).every(stringRecordListBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).every(stringRecordListBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordList).every(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.all(stringRecordList, stringRecordListBooleanIterator); // $ExpectType boolean
    _.all(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType boolean

    _(stringRecordList).all(stringRecordListBooleanIterator); // $ExpectType boolean
    _(stringRecordList).all(stringRecordListBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).all(stringRecordListBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordList).all(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.every(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType boolean
    _.every(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType boolean

    _(stringRecordDictionary).every(stringRecordDictionaryBooleanIterator); // $ExpectType boolean
    _(stringRecordDictionary).every(stringRecordDictionaryBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).every(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordDictionary).every(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.all(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType boolean
    _.all(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType boolean

    _(stringRecordDictionary).all(stringRecordDictionaryBooleanIterator); // $ExpectType boolean
    _(stringRecordDictionary).all(stringRecordDictionaryBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).all(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordDictionary).all(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.every(simpleString, stringListBooleanIterator); // $ExpectType boolean
    _.every(simpleString, stringListBooleanIterator, context); // $ExpectType boolean

    _(simpleString).every(stringListBooleanIterator); // $ExpectType boolean
    _(simpleString).every(stringListBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(simpleString).every(stringListBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(simpleString).every(stringListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.all(simpleString, stringListBooleanIterator); // $ExpectType boolean
    _.all(simpleString, stringListBooleanIterator, context); // $ExpectType boolean

    _(simpleString).all(stringListBooleanIterator); // $ExpectType boolean
    _(simpleString).all(stringListBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(simpleString).all(stringListBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(simpleString).all(stringListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    // partial object iterator
    _.every(stringRecordArray, partialStringRecord); // $ExpectType boolean

    _(stringRecordArray).every(partialStringRecord); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).every(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    _.all(stringRecordArray, partialStringRecord); // $ExpectType boolean

    _(stringRecordArray).all(partialStringRecord); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).all(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    _.every(stringRecordList, partialStringRecord); // $ExpectType boolean

    _(stringRecordList).every(partialStringRecord); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).every(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    _.all(stringRecordList, partialStringRecord); // $ExpectType boolean

    _(stringRecordList).all(partialStringRecord); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).all(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    _.every(stringRecordDictionary, partialStringRecord); // $ExpectType boolean

    _(stringRecordDictionary).every(partialStringRecord); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).every(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    _.all(stringRecordDictionary, partialStringRecord); // $ExpectType boolean

    _(stringRecordDictionary).all(partialStringRecord); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).all(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    // property name iterator
    _.every(stringRecordArray, stringRecordProperty); // $ExpectType boolean

    _(stringRecordArray).every(stringRecordProperty); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).every(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    _.all(stringRecordArray, stringRecordProperty); // $ExpectType boolean

    _(stringRecordArray).all(stringRecordProperty); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).all(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    _.every(stringRecordList, stringRecordProperty); // $ExpectType boolean

    _(stringRecordList).every(stringRecordProperty); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).every(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    _.all(stringRecordList, stringRecordProperty); // $ExpectType boolean

    _(stringRecordList).all(stringRecordProperty); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).all(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    _.every(stringRecordDictionary, stringRecordProperty); // $ExpectType boolean

    _(stringRecordDictionary).every(stringRecordProperty); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).every(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    _.all(stringRecordDictionary, stringRecordProperty); // $ExpectType boolean

    _(stringRecordDictionary).all(stringRecordProperty); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).all(stringRecordProperty)); // $ExpectType ChainType<boolean, never>
}

// some, any
{
    // function iterator
    _.some(stringRecordArray, stringRecordListBooleanIterator); // $ExpectType boolean
    _.some(stringRecordArray, stringRecordListBooleanIterator, context); // $ExpectType boolean

    _(stringRecordArray).some(stringRecordListBooleanIterator); // $ExpectType boolean
    _(stringRecordArray).some(stringRecordListBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).some(stringRecordListBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordArray).some(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.any(stringRecordArray, stringRecordListBooleanIterator); // $ExpectType boolean
    _.any(stringRecordArray, stringRecordListBooleanIterator, context); // $ExpectType boolean

    _(stringRecordArray).any(stringRecordListBooleanIterator); // $ExpectType boolean
    _(stringRecordArray).any(stringRecordListBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).any(stringRecordListBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordArray).any(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.some(stringRecordList, stringRecordListBooleanIterator); // $ExpectType boolean
    _.some(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType boolean

    _(stringRecordList).some(stringRecordListBooleanIterator); // $ExpectType boolean
    _(stringRecordList).some(stringRecordListBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).some(stringRecordListBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordList).some(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.any(stringRecordList, stringRecordListBooleanIterator); // $ExpectType boolean
    _.any(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType boolean

    _(stringRecordList).any(stringRecordListBooleanIterator); // $ExpectType boolean
    _(stringRecordList).any(stringRecordListBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).any(stringRecordListBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordList).any(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.some(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType boolean
    _.some(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType boolean

    _(stringRecordDictionary).some(stringRecordDictionaryBooleanIterator); // $ExpectType boolean
    _(stringRecordDictionary).some(stringRecordDictionaryBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).some(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordDictionary).some(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.any(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType boolean
    _.any(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType boolean

    _(stringRecordDictionary).any(stringRecordDictionaryBooleanIterator); // $ExpectType boolean
    _(stringRecordDictionary).any(stringRecordDictionaryBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).any(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordDictionary).any(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.some(simpleString, stringListBooleanIterator); // $ExpectType boolean
    _.some(simpleString, stringListBooleanIterator, context); // $ExpectType boolean

    _(simpleString).some(stringListBooleanIterator); // $ExpectType boolean
    _(simpleString).some(stringListBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(simpleString).some(stringListBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(simpleString).some(stringListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    _.any(simpleString, stringListBooleanIterator); // $ExpectType boolean
    _.any(simpleString, stringListBooleanIterator, context); // $ExpectType boolean

    _(simpleString).any(stringListBooleanIterator); // $ExpectType boolean
    _(simpleString).any(stringListBooleanIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(simpleString).any(stringListBooleanIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(simpleString).any(stringListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    // partial object iterator
    _.some(stringRecordArray, partialStringRecord); // $ExpectType boolean

    _(stringRecordArray).some(partialStringRecord); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).some(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    _.any(stringRecordArray, partialStringRecord); // $ExpectType boolean

    _(stringRecordArray).any(partialStringRecord); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).any(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    _.some(stringRecordList, partialStringRecord); // $ExpectType boolean

    _(stringRecordList).some(partialStringRecord); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).some(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    _.any(stringRecordList, partialStringRecord); // $ExpectType boolean

    _(stringRecordList).any(partialStringRecord); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).any(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    _.some(stringRecordDictionary, partialStringRecord); // $ExpectType boolean

    _(stringRecordDictionary).some(partialStringRecord); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).some(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    _.any(stringRecordDictionary, partialStringRecord); // $ExpectType boolean

    _(stringRecordDictionary).any(partialStringRecord); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).any(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    // property name iterator
    _.some(stringRecordArray, stringRecordProperty); // $ExpectType boolean

    _(stringRecordArray).some(stringRecordProperty); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).some(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    _.any(stringRecordArray, stringRecordProperty); // $ExpectType boolean

    _(stringRecordArray).any(stringRecordProperty); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).any(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    _.some(stringRecordList, stringRecordProperty); // $ExpectType boolean

    _(stringRecordList).some(stringRecordProperty); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).some(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    _.any(stringRecordList, stringRecordProperty); // $ExpectType boolean

    _(stringRecordList).any(stringRecordProperty); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).any(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    _.some(stringRecordDictionary, stringRecordProperty); // $ExpectType boolean

    _(stringRecordDictionary).some(stringRecordProperty); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).some(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    _.any(stringRecordDictionary, stringRecordProperty); // $ExpectType boolean

    _(stringRecordDictionary).any(stringRecordProperty); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).any(stringRecordProperty)); // $ExpectType ChainType<boolean, never>
}

// contains, include, includes
{
    const fromIndex = 1;
    const stringRecordValue = stringRecordArray[0];
    const simpleStringValue = simpleString[0];

    _.contains(stringRecordArray, stringRecordValue); // $ExpectType boolean
    _.contains(stringRecordArray, stringRecordValue, fromIndex); // $ExpectType boolean

    _(stringRecordArray).contains(stringRecordValue); // $ExpectType boolean
    _(stringRecordArray).contains(stringRecordValue, fromIndex); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).contains(stringRecordValue)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordArray).contains(stringRecordValue, fromIndex)); // $ExpectType ChainType<boolean, never>

    _.include(stringRecordArray, stringRecordValue); // $ExpectType boolean
    _.include(stringRecordArray, stringRecordValue, fromIndex); // $ExpectType boolean

    _(stringRecordArray).include(stringRecordValue); // $ExpectType boolean
    _(stringRecordArray).include(stringRecordValue, fromIndex); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).include(stringRecordValue)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordArray).include(stringRecordValue, fromIndex)); // $ExpectType ChainType<boolean, never>

    _.includes(stringRecordArray, stringRecordValue); // $ExpectType boolean
    _.includes(stringRecordArray, stringRecordValue, fromIndex); // $ExpectType boolean

    _(stringRecordArray).includes(stringRecordValue); // $ExpectType boolean
    _(stringRecordArray).includes(stringRecordValue, fromIndex); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).includes(stringRecordValue)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordArray).includes(stringRecordValue, fromIndex)); // $ExpectType ChainType<boolean, never>

    _.contains(stringRecordList, stringRecordValue); // $ExpectType boolean
    _.contains(stringRecordList, stringRecordValue, fromIndex); // $ExpectType boolean

    _(stringRecordList).contains(stringRecordValue); // $ExpectType boolean
    _(stringRecordList).contains(stringRecordValue, fromIndex); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).contains(stringRecordValue)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordList).contains(stringRecordValue, fromIndex)); // $ExpectType ChainType<boolean, never>

    _.include(stringRecordList, stringRecordValue); // $ExpectType boolean
    _.include(stringRecordList, stringRecordValue, fromIndex); // $ExpectType boolean

    _(stringRecordList).include(stringRecordValue); // $ExpectType boolean
    _(stringRecordList).include(stringRecordValue, fromIndex); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).include(stringRecordValue)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordList).include(stringRecordValue, fromIndex)); // $ExpectType ChainType<boolean, never>

    _.includes(stringRecordList, stringRecordValue); // $ExpectType boolean
    _.includes(stringRecordList, stringRecordValue, fromIndex); // $ExpectType boolean

    _(stringRecordList).includes(stringRecordValue); // $ExpectType boolean
    _(stringRecordList).includes(stringRecordValue, fromIndex); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).includes(stringRecordValue)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordList).includes(stringRecordValue, fromIndex)); // $ExpectType ChainType<boolean, never>

    _.contains(stringRecordDictionary, stringRecordValue); // $ExpectType boolean

    _(stringRecordDictionary).contains(stringRecordValue); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).contains(stringRecordValue)); // $ExpectType ChainType<boolean, never>

    _.include(stringRecordDictionary, stringRecordValue); // $ExpectType boolean

    _(stringRecordDictionary).include(stringRecordValue); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).include(stringRecordValue)); // $ExpectType ChainType<boolean, never>

    _.includes(stringRecordDictionary, stringRecordValue); // $ExpectType boolean

    _(stringRecordDictionary).includes(stringRecordValue); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).includes(stringRecordValue)); // $ExpectType ChainType<boolean, never>

    _.contains(simpleString, simpleStringValue); // $ExpectType boolean
    _.contains(simpleString, simpleStringValue, fromIndex); // $ExpectType boolean

    _(simpleString).contains(simpleStringValue); // $ExpectType boolean
    _(simpleString).contains(simpleStringValue, fromIndex); // $ExpectType boolean

    extractChainTypes(_.chain(simpleString).contains(simpleStringValue)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(simpleString).contains(simpleStringValue, fromIndex)); // $ExpectType ChainType<boolean, never>

    _.include(simpleString, simpleStringValue); // $ExpectType boolean
    _.include(simpleString, simpleStringValue, fromIndex); // $ExpectType boolean

    _(simpleString).include(simpleStringValue); // $ExpectType boolean
    _(simpleString).include(simpleStringValue, fromIndex); // $ExpectType boolean

    extractChainTypes(_.chain(simpleString).include(simpleStringValue)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(simpleString).include(simpleStringValue, fromIndex)); // $ExpectType ChainType<boolean, never>

    _.includes(simpleString, simpleStringValue); // $ExpectType boolean
    _.includes(simpleString, simpleStringValue, fromIndex); // $ExpectType boolean

    _(simpleString).includes(simpleStringValue); // $ExpectType boolean
    _(simpleString).includes(simpleStringValue, fromIndex); // $ExpectType boolean

    extractChainTypes(_.chain(simpleString).includes(simpleStringValue)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(simpleString).includes(simpleStringValue, fromIndex)); // $ExpectType ChainType<boolean, never>
}

// invoke
{
    // known property - function without parameters
    _.invoke(noParameterFunctionRecordList, stringRecordProperty); // $ExpectType number[]
    _(noParameterFunctionRecordList).invoke(stringRecordProperty); // $ExpectType number[]
    extractChainTypes(_.chain(noParameterFunctionRecordList).invoke(stringRecordProperty)); // $ExpectType ChainType<number[], number>

    // known property - function with parameters
    _.invoke(twoParameterFunctionRecordDictionary, stringRecordProperty, simpleNumber, simpleString); // $ExpectType void[]
    _(twoParameterFunctionRecordDictionary).invoke(stringRecordProperty, simpleNumber, simpleString); // $ExpectType void[]
    extractChainTypes(_.chain(twoParameterFunctionRecordDictionary).invoke(stringRecordProperty, simpleNumber, simpleString)); // $ExpectType ChainType<void[], void>

    // unknown property
    _.invoke(nonIntersectingPropertiesList, stringRecordProperty, simpleString); // $ExpectType any[]
    _(nonIntersectingPropertiesList).invoke(stringRecordProperty, simpleString); // $ExpectType any[]
    extractChainTypes(_.chain(nonIntersectingPropertiesList).invoke(stringRecordProperty, simpleString)); // $ExpectType ChainType<any[], any>

    // non-function property
    _.invoke(stringRecordDictionary, stringRecordProperty, simpleString); // $ExpectType any[]
    _(stringRecordDictionary).invoke(stringRecordProperty, simpleString); // $ExpectType any[]
    extractChainTypes(_.chain(stringRecordDictionary).invoke(stringRecordProperty, simpleString)); // $ExpectType ChainType<any[], any>

    // any
    _.invoke(anyValue, stringRecordProperty, simpleString, simpleNumber); // $ExpectType any[]
    _(anyValue).invoke(stringRecordProperty, simpleString, simpleNumber); // $ExpectType any[]
    extractChainTypes(_.chain(nonIntersectingPropertiesList).invoke(stringRecordProperty, simpleString, simpleNumber)); // $ExpectType ChainType<any[], any>
}

// pluck
{
    // property name iteratee with a non-nullable single type - lists
    _.pluck(stringRecordList, stringRecordProperty); // $ExpectType string[]
    _(stringRecordList).pluck(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).pluck(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    // property name iteratee with a non-nullable single type - dictionaries
    _.pluck(stringRecordDictionary, stringRecordProperty); // $ExpectType string[]
    _(stringRecordDictionary).pluck(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).pluck(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    // property name iteratee with other types - lists
    _.pluck(stringRecordOrUndefinedList, stringRecordProperty); // $ExpectType any[]
    _.pluck(intersectingPropertiesList, stringRecordProperty); // $ExpectType (string | boolean)[]
    _.pluck(nonIntersectingPropertiesList, stringRecordProperty) // $ExpectType any[]
    _.pluck(anyValue, stringRecordProperty); // $ExpectType any[]
}

// max
{
    // without iterator
    _.max(numberArray); // $ExpectType number

    _(numberArray).max(); // $ExpectType number

    extractChainTypes(_.chain(numberArray).max()); // $ExpectType ChainType<number, never>

    _.max(numberList); // $ExpectType number

    _(numberList).max(); // $ExpectType number

    extractChainTypes(_.chain(numberList).max()); // $ExpectType ChainType<number, never>

    _.max(numberDictionary); // $ExpectType number

    _(numberDictionary).max(); // $ExpectType number

    extractChainTypes(_.chain(numberDictionary).max()); // $ExpectType ChainType<number, never>

    // function iterator
    _.max(numberRecordArray, numberRecordListValueIterator); // $ExpectType number | NumberRecord
    _.max(numberRecordArray, numberRecordListValueIterator, context); // $ExpectType number | NumberRecord

    _(numberRecordArray).max(numberRecordListValueIterator); // $ExpectType number | NumberRecord
    _(numberRecordArray).max(numberRecordListValueIterator, context); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordArray).max(numberRecordListValueIterator)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordArray).max(numberRecordListValueIterator, context)); // $ExpectType ChainType<number | NumberRecord, never>

    _.max(numberRecordList, numberRecordListValueIterator); // $ExpectType number | NumberRecord
    _.max(numberRecordList, numberRecordListValueIterator, context); // $ExpectType number | NumberRecord

    _(numberRecordList).max(numberRecordListValueIterator); // $ExpectType number | NumberRecord
    _(numberRecordList).max(numberRecordListValueIterator, context); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordList).max(numberRecordListValueIterator)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordList).max(numberRecordListValueIterator, context)); // $ExpectType ChainType<number | NumberRecord, never>

    _.max(numberRecordDictionary, numberRecordDictionaryValueIterator); // $ExpectType number | NumberRecord
    _.max(numberRecordDictionary, numberRecordDictionaryValueIterator, context); // $ExpectType number | NumberRecord

    _(numberRecordDictionary).max(numberRecordDictionaryValueIterator); // $ExpectType number | NumberRecord
    _(numberRecordDictionary).max(numberRecordDictionaryValueIterator, context); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordDictionary).max(numberRecordDictionaryValueIterator)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordDictionary).max(numberRecordDictionaryValueIterator, context)); // $ExpectType ChainType<number | NumberRecord, never>

    // property name iterator
    _.max(numberRecordArray, stringRecordProperty); // $ExpectType number | NumberRecord

    _(numberRecordArray).max(stringRecordProperty); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordArray).max(stringRecordProperty)); // $ExpectType ChainType<number | NumberRecord, never>

    _.max(numberRecordList, stringRecordProperty); // $ExpectType number | NumberRecord

    _(numberRecordList).max(stringRecordProperty); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordList).max(stringRecordProperty)); // $ExpectType ChainType<number | NumberRecord, never>

    _.max(numberRecordDictionary, stringRecordProperty); // $ExpectType number | NumberRecord

    _(numberRecordDictionary).max(stringRecordProperty); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordDictionary).max(stringRecordProperty)); // $ExpectType ChainType<number | NumberRecord, never>
}

// min
{
    // without iterator
    _.min(numberArray); // $ExpectType number

    _(numberArray).min(); // $ExpectType number

    extractChainTypes(_.chain(numberArray).min()); // $ExpectType ChainType<number, never>

    _.min(numberList); // $ExpectType number

    _(numberList).min(); // $ExpectType number

    extractChainTypes(_.chain(numberList).min()); // $ExpectType ChainType<number, never>

    _.min(numberDictionary); // $ExpectType number

    _(numberDictionary).min(); // $ExpectType number

    extractChainTypes(_.chain(numberDictionary).min()); // $ExpectType ChainType<number, never>

    // function iterator
    _.min(numberRecordArray, numberRecordListValueIterator); // $ExpectType number | NumberRecord
    _.min(numberRecordArray, numberRecordListValueIterator, context); // $ExpectType number | NumberRecord

    _(numberRecordArray).min(numberRecordListValueIterator); // $ExpectType number | NumberRecord
    _(numberRecordArray).min(numberRecordListValueIterator, context); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordArray).min(numberRecordListValueIterator)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordArray).min(numberRecordListValueIterator, context)); // $ExpectType ChainType<number | NumberRecord, never>

    _.min(numberRecordList, numberRecordListValueIterator); // $ExpectType number | NumberRecord
    _.min(numberRecordList, numberRecordListValueIterator, context); // $ExpectType number | NumberRecord

    _(numberRecordList).min(numberRecordListValueIterator); // $ExpectType number | NumberRecord
    _(numberRecordList).min(numberRecordListValueIterator, context); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordList).min(numberRecordListValueIterator)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordList).min(numberRecordListValueIterator, context)); // $ExpectType ChainType<number | NumberRecord, never>

    _.min(numberRecordDictionary, numberRecordDictionaryValueIterator); // $ExpectType number | NumberRecord
    _.min(numberRecordDictionary, numberRecordDictionaryValueIterator, context); // $ExpectType number | NumberRecord

    _(numberRecordDictionary).min(numberRecordDictionaryValueIterator); // $ExpectType number | NumberRecord
    _(numberRecordDictionary).min(numberRecordDictionaryValueIterator, context); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordDictionary).min(numberRecordDictionaryValueIterator)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordDictionary).min(numberRecordDictionaryValueIterator, context)); // $ExpectType ChainType<number | NumberRecord, never>

    // property name iterator
    _.min(numberRecordArray, stringRecordProperty); // $ExpectType number | NumberRecord

    _(numberRecordArray).min(stringRecordProperty); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordArray).min(stringRecordProperty)); // $ExpectType ChainType<number | NumberRecord, never>

    _.min(numberRecordList, stringRecordProperty); // $ExpectType number | NumberRecord

    _(numberRecordList).min(stringRecordProperty); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordList).min(stringRecordProperty)); // $ExpectType ChainType<number | NumberRecord, never>

    _.min(numberRecordDictionary, stringRecordProperty); // $ExpectType number | NumberRecord

    _(numberRecordDictionary).min(stringRecordProperty); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordDictionary).min(stringRecordProperty)); // $ExpectType ChainType<number | NumberRecord, never>
}

// sortBy
{
    // function iterator
    _.sortBy(stringRecordArray, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _.sortBy(stringRecordArray, stringRecordListValueIterator, context); // $ExpectType StringRecord[]

    _(stringRecordArray).sortBy(stringRecordListValueIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).sortBy(stringRecordListValueIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).sortBy(stringRecordListValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).sortBy(stringRecordListValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.sortBy(stringRecordList, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _.sortBy(stringRecordList, stringRecordListValueIterator, context); // $ExpectType StringRecord[]

    _(stringRecordList).sortBy(stringRecordListValueIterator); // $ExpectType StringRecord[]
    _(stringRecordList).sortBy(stringRecordListValueIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).sortBy(stringRecordListValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).sortBy(stringRecordListValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.sortBy(stringRecordDictionary, stringRecordDictionaryValueIterator); // $ExpectType StringRecord[]
    _.sortBy(stringRecordDictionary, stringRecordDictionaryValueIterator, context); // $ExpectType StringRecord[]

    _(stringRecordDictionary).sortBy(stringRecordDictionaryValueIterator); // $ExpectType StringRecord[]
    _(stringRecordDictionary).sortBy(stringRecordDictionaryValueIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).sortBy(stringRecordDictionaryValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordDictionary).sortBy(stringRecordDictionaryValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property name iterator
    _.sortBy(stringRecordArray, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordArray).sortBy(stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).sortBy(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.sortBy(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordList).sortBy(stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).sortBy(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.sortBy(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordDictionary).sortBy(stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).sortBy(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// groupBy
{
    // function iteratee - lists
    _.groupBy(stringRecordList, stringRecordListValueIterator, context); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordList).groupBy(stringRecordListValueIterator, context); // $ExpectType Dictionary<StringRecord[]>
    _.chain(stringRecordList).groupBy(stringRecordListValueIterator, context); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // function iteratee - dictionaries
    _.groupBy(stringRecordDictionary, stringRecordDictionaryValueIterator, context); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordDictionary).groupBy(stringRecordDictionaryValueIterator, context); // $ExpectType Dictionary<StringRecord[]>
    _.chain(stringRecordDictionary).groupBy(stringRecordDictionaryValueIterator, context); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // property name iteratee - lists
    _.groupBy(stringRecordList, stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordList).groupBy(stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>
    _.chain(stringRecordList).groupBy(stringRecordProperty); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // property name iteratee - dictionaries
    _.groupBy(stringRecordDictionary, stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordDictionary).groupBy(stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>
    _.chain(stringRecordDictionary).groupBy(stringRecordProperty); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // property path iteratee - lists
    _.groupBy(stringRecordList, stringRecordPropertyPath); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordList).groupBy(stringRecordPropertyPath); // $ExpectType Dictionary<StringRecord[]>
    _.chain(stringRecordList).groupBy(stringRecordPropertyPath); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // property path iteratee - dictionaries
    _.groupBy(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordDictionary).groupBy(stringRecordPropertyPath); // $ExpectType Dictionary<StringRecord[]>
    _.chain(stringRecordDictionary).groupBy(stringRecordPropertyPath); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>
}

// indexBy
{
    // function iterator
    _.indexBy(stringRecordArray, stringRecordListValueIterator); // $ExpectType Dictionary<StringRecord>
    _.indexBy(stringRecordArray, stringRecordListValueIterator, context); // $ExpectType Dictionary<StringRecord>

    _(stringRecordArray).indexBy(stringRecordListValueIterator); // $ExpectType Dictionary<StringRecord>
    _(stringRecordArray).indexBy(stringRecordListValueIterator, context); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordArray).indexBy(stringRecordListValueIterator); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
    _.chain(stringRecordArray).indexBy(stringRecordListValueIterator, context); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>

    _.indexBy(stringRecordList, stringRecordListValueIterator); // $ExpectType Dictionary<StringRecord>
    _.indexBy(stringRecordList, stringRecordListValueIterator, context); // $ExpectType Dictionary<StringRecord>

    _(stringRecordList).indexBy(stringRecordListValueIterator); // $ExpectType Dictionary<StringRecord>
    _(stringRecordList).indexBy(stringRecordListValueIterator, context); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordList).indexBy(stringRecordListValueIterator); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
    _.chain(stringRecordList).indexBy(stringRecordListValueIterator, context); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>

    _.indexBy(stringRecordDictionary, stringRecordDictionaryValueIterator); // $ExpectType Dictionary<StringRecord>
    _.indexBy(stringRecordDictionary, stringRecordDictionaryValueIterator, context); // $ExpectType Dictionary<StringRecord>

    _(stringRecordDictionary).indexBy(stringRecordDictionaryValueIterator); // $ExpectType Dictionary<StringRecord>
    _(stringRecordDictionary).indexBy(stringRecordDictionaryValueIterator, context); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordDictionary).indexBy(stringRecordDictionaryValueIterator); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
    _.chain(stringRecordDictionary).indexBy(stringRecordDictionaryValueIterator, context); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>

    // property name iterator
    _.indexBy(stringRecordArray, stringRecordProperty); // $ExpectType Dictionary<StringRecord>

    _(stringRecordArray).indexBy(stringRecordProperty); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordArray).indexBy(stringRecordProperty); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>

    _.indexBy(stringRecordList, stringRecordProperty); // $ExpectType Dictionary<StringRecord>

    _(stringRecordList).indexBy(stringRecordProperty); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordList).indexBy(stringRecordProperty); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>

    _.indexBy(stringRecordDictionary, stringRecordProperty); // $ExpectType Dictionary<StringRecord>

    _(stringRecordDictionary).indexBy(stringRecordProperty); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordDictionary).indexBy(stringRecordProperty); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
}

// countBy
{
    // function iterator
    _.countBy(stringRecordArray, stringRecordListValueIterator); // $ExpectType Dictionary<number>
    _.countBy(stringRecordArray, stringRecordListValueIterator, context); // $ExpectType Dictionary<number>

    _(stringRecordArray).countBy(stringRecordListValueIterator); // $ExpectType Dictionary<number>
    _(stringRecordArray).countBy(stringRecordListValueIterator, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(stringRecordArray).countBy(stringRecordListValueIterator)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(stringRecordArray).countBy(stringRecordListValueIterator, context)); // $ExpectType ChainType<Dictionary<number>, number>

    _.countBy(stringRecordList, stringRecordListValueIterator); // $ExpectType Dictionary<number>
    _.countBy(stringRecordList, stringRecordListValueIterator, context); // $ExpectType Dictionary<number>

    _(stringRecordList).countBy(stringRecordListValueIterator); // $ExpectType Dictionary<number>
    _(stringRecordList).countBy(stringRecordListValueIterator, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(stringRecordList).countBy(stringRecordListValueIterator)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(stringRecordList).countBy(stringRecordListValueIterator, context)); // $ExpectType ChainType<Dictionary<number>, number>

    _.countBy(stringRecordDictionary, stringRecordDictionaryValueIterator); // $ExpectType Dictionary<number>
    _.countBy(stringRecordDictionary, stringRecordDictionaryValueIterator, context); // $ExpectType Dictionary<number>

    _(stringRecordDictionary).countBy(stringRecordDictionaryValueIterator); // $ExpectType Dictionary<number>
    _(stringRecordDictionary).countBy(stringRecordDictionaryValueIterator, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(stringRecordDictionary).countBy(stringRecordDictionaryValueIterator)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(stringRecordDictionary).countBy(stringRecordDictionaryValueIterator, context)); // $ExpectType ChainType<Dictionary<number>, number>

    _.countBy(simpleString, stringListValueIterator); // $ExpectType Dictionary<number>
    _.countBy(simpleString, stringListValueIterator, context); // $ExpectType Dictionary<number>

    _(simpleString).countBy(stringListValueIterator); // $ExpectType Dictionary<number>
    _(simpleString).countBy(stringListValueIterator, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(simpleString).countBy(stringListValueIterator)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(simpleString).countBy(stringListValueIterator, context)); // $ExpectType ChainType<Dictionary<number>, number>

    // property name iterator
    _.countBy(stringRecordArray, stringRecordProperty); // $ExpectType Dictionary<number>

    _(stringRecordArray).countBy(stringRecordProperty); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(stringRecordArray).countBy(stringRecordProperty)); // $ExpectType ChainType<Dictionary<number>, number>

    _.countBy(stringRecordList, stringRecordProperty); // $ExpectType Dictionary<number>

    _(stringRecordList).countBy(stringRecordProperty); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(stringRecordList).countBy(stringRecordProperty)); // $ExpectType ChainType<Dictionary<number>, number>

    _.countBy(stringRecordDictionary, stringRecordProperty); // $ExpectType Dictionary<number>

    _(stringRecordDictionary).countBy(stringRecordProperty); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(stringRecordDictionary).countBy(stringRecordProperty)); // $ExpectType ChainType<Dictionary<number>, number>
}

// shuffle
{
    _.shuffle(stringRecordArray); // $ExpectType StringRecord[]

    _(stringRecordArray).shuffle(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).shuffle()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.shuffle(stringRecordList); // $ExpectType StringRecord[]

    _(stringRecordList).shuffle(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).shuffle()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.shuffle(stringRecordDictionary); // $ExpectType StringRecord[]

    _(stringRecordDictionary).shuffle(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).shuffle()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.shuffle(simpleString); // $ExpectType string[]

    _(simpleString).shuffle(); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).shuffle()); // $ExpectType ChainType<string[], string>
}

// sample
{
    const n = 2;

    // without n
    _.sample(stringRecordArray); // $ExpectType StringRecord | undefined

    _(stringRecordArray).sample(); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).sample()); // $ExpectType ChainType<StringRecord | undefined, never>

    _.sample(stringRecordList); // $ExpectType StringRecord | undefined

    _(stringRecordList).sample(); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).sample()); // $ExpectType ChainType<StringRecord | undefined, never>

    _.sample(stringRecordDictionary); // $ExpectType StringRecord | undefined

    _(stringRecordDictionary).sample(); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordDictionary).sample()); // $ExpectType ChainType<StringRecord | undefined, never>

    _.sample(simpleString); // $ExpectType string | undefined

    _(simpleString).sample(); // $ExpectType string | undefined

    extractChainTypes(_.chain(simpleString).sample()); // $ExpectType ChainType<string | undefined, string>

    // with n
    _.sample(stringRecordArray, n); // $ExpectType StringRecord[]

    _(stringRecordArray).sample(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).sample(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.sample(stringRecordList, n); // $ExpectType StringRecord[]

    _(stringRecordList).sample(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).sample(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.sample(stringRecordDictionary, n); // $ExpectType StringRecord[]

    _(stringRecordDictionary).sample(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).sample(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.sample(simpleString, n); // $ExpectType string[]

    _(simpleString).sample(n); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).sample(n)); // $ExpectType ChainType<string[], string>
}

// toArray
{
    _.toArray(stringRecordArray); // $ExpectType StringRecord[]

    _(stringRecordArray).toArray(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).toArray()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.toArray(stringRecordList); // $ExpectType StringRecord[]

    _(stringRecordList).toArray(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).toArray()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.toArray(stringRecordDictionary); // $ExpectType StringRecord[]

    _(stringRecordDictionary).toArray(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).toArray()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.toArray(simpleString); // $ExpectType string[]

    _(simpleString).toArray(); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).toArray()); // $ExpectType ChainType<string[], string>
}

// size
{
    _.size(stringRecordArray); // $ExpectType number

    _(stringRecordArray).size(); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).size()); // $ExpectType ChainType<number, never>

    _.size(stringRecordList); // $ExpectType number

    _(stringRecordList).size(); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).size()); // $ExpectType ChainType<number, never>

    _.size(stringRecordDictionary); // $ExpectType number

    _(stringRecordDictionary).size(); // $ExpectType number

    extractChainTypes(_.chain(stringRecordDictionary).size()); // $ExpectType ChainType<number, never>

    _.size(simpleString); // $ExpectType number

    _(simpleString).size(); // $ExpectType number

    extractChainTypes(_.chain(simpleString).size()); // $ExpectType ChainType<number, never>
}

// partition
{
    // function iterator
    _.partition(stringRecordArray, stringRecordListBooleanIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _.partition(stringRecordArray, stringRecordListBooleanIterator, context); // $ExpectType [StringRecord[], StringRecord[]]

    _(stringRecordArray).partition(stringRecordListBooleanIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordArray).partition(stringRecordListBooleanIterator, context); // $ExpectType [StringRecord[], StringRecord[]]

    extractChainTypes(_.chain(stringRecordArray).partition(stringRecordListBooleanIterator)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>
    extractChainTypes(_.chain(stringRecordArray).partition(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    _.partition(stringRecordList, stringRecordListBooleanIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _.partition(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType [StringRecord[], StringRecord[]]

    _(stringRecordList).partition(stringRecordListBooleanIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordList).partition(stringRecordListBooleanIterator, context); // $ExpectType [StringRecord[], StringRecord[]]

    extractChainTypes(_.chain(stringRecordList).partition(stringRecordListBooleanIterator)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>
    extractChainTypes(_.chain(stringRecordList).partition(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    _.partition(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _.partition(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType [StringRecord[], StringRecord[]]

    _(stringRecordDictionary).partition(stringRecordDictionaryBooleanIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordDictionary).partition(stringRecordDictionaryBooleanIterator, context); // $ExpectType [StringRecord[], StringRecord[]]

    extractChainTypes(_.chain(stringRecordDictionary).partition(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>
    extractChainTypes(_.chain(stringRecordDictionary).partition(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    _.partition(simpleString, stringListBooleanIterator); // $ExpectType [string[], string[]]
    _.partition(simpleString, stringListBooleanIterator, context); // $ExpectType [string[], string[]]

    _(simpleString).partition(stringListBooleanIterator); // $ExpectType [string[], string[]]
    _(simpleString).partition(stringListBooleanIterator, context); // $ExpectType [string[], string[]]

    extractChainTypes(_.chain(simpleString).partition(stringListBooleanIterator)); // $ExpectType ChainType<[string[], string[]], string[]>
    extractChainTypes(_.chain(simpleString).partition(stringListBooleanIterator, context)); // $ExpectType ChainType<[string[], string[]], string[]>

    // partial object iterator
    _.partition(stringRecordArray, partialStringRecord); // $ExpectType [StringRecord[], StringRecord[]]

    _(stringRecordArray).partition(partialStringRecord); // $ExpectType [StringRecord[], StringRecord[]]

    extractChainTypes(_.chain(stringRecordArray).partition(partialStringRecord)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    _.partition(stringRecordList, partialStringRecord); // $ExpectType [StringRecord[], StringRecord[]]

    _(stringRecordList).partition(partialStringRecord); // $ExpectType [StringRecord[], StringRecord[]]

    extractChainTypes(_.chain(stringRecordList).partition(partialStringRecord)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    _.partition(stringRecordDictionary, partialStringRecord); // $ExpectType [StringRecord[], StringRecord[]]

    _(stringRecordDictionary).partition(partialStringRecord); // $ExpectType [StringRecord[], StringRecord[]]

    extractChainTypes(_.chain(stringRecordDictionary).partition(partialStringRecord)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    // property name iterator
    _.partition(stringRecordArray, stringRecordProperty); // $ExpectType [StringRecord[], StringRecord[]]

    _(stringRecordArray).partition(stringRecordProperty); // $ExpectType [StringRecord[], StringRecord[]]

    extractChainTypes(_.chain(stringRecordArray).partition(stringRecordProperty)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    _.partition(stringRecordList, stringRecordProperty); // $ExpectType [StringRecord[], StringRecord[]]

    _(stringRecordList).partition(stringRecordProperty); // $ExpectType [StringRecord[], StringRecord[]]

    extractChainTypes(_.chain(stringRecordList).partition(stringRecordProperty)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    _.partition(stringRecordDictionary, stringRecordProperty); // $ExpectType [StringRecord[], StringRecord[]]

    _(stringRecordDictionary).partition(stringRecordProperty); // $ExpectType [StringRecord[], StringRecord[]]

    extractChainTypes(_.chain(stringRecordDictionary).partition(stringRecordProperty)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>
}

// Arrays

// first, head, take
{
    const n = 2;

    // without n
    _.first(stringRecordArray); // $ExpectType StringRecord | undefined

    _(stringRecordArray).first(); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).first()); // $ExpectType ChainType<StringRecord | undefined, never>

    _.head(stringRecordArray); // $ExpectType StringRecord | undefined

    _(stringRecordArray).head(); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).head()); // $ExpectType ChainType<StringRecord | undefined, never>

    _.take(stringRecordArray); // $ExpectType StringRecord | undefined

    _(stringRecordArray).take(); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).take()); // $ExpectType ChainType<StringRecord | undefined, never>

    _.first(stringRecordList); // $ExpectType StringRecord | undefined

    _(stringRecordList).first(); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).first()); // $ExpectType ChainType<StringRecord | undefined, never>

    _.head(stringRecordList); // $ExpectType StringRecord | undefined

    _(stringRecordList).head(); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).head()); // $ExpectType ChainType<StringRecord | undefined, never>

    _.take(stringRecordList); // $ExpectType StringRecord | undefined

    _(stringRecordList).take(); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).take()); // $ExpectType ChainType<StringRecord | undefined, never>

    _.first(simpleString); // $ExpectType string | undefined

    _(simpleString).first(); // $ExpectType string | undefined

    extractChainTypes(_.chain(simpleString).first()); // $ExpectType ChainType<string | undefined, string>

    _.head(simpleString); // $ExpectType string | undefined

    _(simpleString).head(); // $ExpectType string | undefined

    extractChainTypes(_.chain(simpleString).head()); // $ExpectType ChainType<string | undefined, string>

    _.take(simpleString); // $ExpectType string | undefined

    _(simpleString).take(); // $ExpectType string | undefined

    extractChainTypes(_.chain(simpleString).take()); // $ExpectType ChainType<string | undefined, string>

    // with n
    _.first(stringRecordArray, n); // $ExpectType StringRecord[]

    _(stringRecordArray).first(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).first(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.head(stringRecordArray, n); // $ExpectType StringRecord[]

    _(stringRecordArray).head(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).head(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.take(stringRecordArray, n); // $ExpectType StringRecord[]

    _(stringRecordArray).take(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).take(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.first(stringRecordList, n); // $ExpectType StringRecord[]

    _(stringRecordList).first(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).first(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.head(stringRecordList, n); // $ExpectType StringRecord[]

    _(stringRecordList).head(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).head(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.take(stringRecordList, n); // $ExpectType StringRecord[]

    _(stringRecordList).take(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).take(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.first(simpleString, n); // $ExpectType string[]

    _(simpleString).first(n); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).first(n)); // $ExpectType ChainType<string[], string>

    _.head(simpleString, n); // $ExpectType string[]

    _(simpleString).head(n); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).head(n)); // $ExpectType ChainType<string[], string>

    _.take(simpleString, n); // $ExpectType string[]

    _(simpleString).take(n); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).take(n)); // $ExpectType ChainType<string[], string>
}

// initial
{
    const n = 2;

    // without n
    _.initial(stringRecordArray); // $ExpectType StringRecord[]

    _(stringRecordArray).initial(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).initial()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.initial(stringRecordList); // $ExpectType StringRecord[]

    _(stringRecordList).initial(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).initial()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.initial(simpleString); // $ExpectType string[]

    _(simpleString).initial(); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).initial()); // $ExpectType ChainType<string[], string>

    // with n
    _.initial(stringRecordArray, n); // $ExpectType StringRecord[]

    _(stringRecordArray).initial(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).initial(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.initial(stringRecordList, n); // $ExpectType StringRecord[]

    _(stringRecordList).initial(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).initial(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.initial(simpleString, n); // $ExpectType string[]

    _(simpleString).initial(n); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).initial(n)); // $ExpectType ChainType<string[], string>
}

// last
{
    const n = 2;

    // without n
    _.last(stringRecordArray); // $ExpectType StringRecord | undefined

    _(stringRecordArray).last(); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).last()); // $ExpectType ChainType<StringRecord | undefined, never>

    _.last(stringRecordList); // $ExpectType StringRecord | undefined

    _(stringRecordList).last(); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).last()); // $ExpectType ChainType<StringRecord | undefined, never>

    _.last(simpleString); // $ExpectType string | undefined

    _(simpleString).last(); // $ExpectType string | undefined

    extractChainTypes(_.chain(simpleString).last()); // $ExpectType ChainType<string | undefined, string>

    // with n
    _.last(stringRecordArray, n); // $ExpectType StringRecord[]

    _(stringRecordArray).last(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).last(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.last(stringRecordList, n); // $ExpectType StringRecord[]

    _(stringRecordList).last(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).last(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.last(simpleString, n); // $ExpectType string[]

    _(simpleString).last(n); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).last(n)); // $ExpectType ChainType<string[], string>
}

// rest, tail, drop
{
    const n = 2;

    // without n
    _.rest(stringRecordArray); // $ExpectType StringRecord[]

    _(stringRecordArray).rest(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).rest()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.tail(stringRecordArray); // $ExpectType StringRecord[]

    _(stringRecordArray).tail(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).tail()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.drop(stringRecordArray); // $ExpectType StringRecord[]

    _(stringRecordArray).drop(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).drop()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.rest(stringRecordList); // $ExpectType StringRecord[]

    _(stringRecordList).rest(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).rest()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.tail(stringRecordList); // $ExpectType StringRecord[]

    _(stringRecordList).tail(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).tail()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.drop(stringRecordList); // $ExpectType StringRecord[]

    _(stringRecordList).drop(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).drop()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.rest(simpleString); // $ExpectType string[]

    _(simpleString).rest(); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).rest()); // $ExpectType ChainType<string[], string>

    _.tail(simpleString); // $ExpectType string[]

    _(simpleString).tail(); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).tail()); // $ExpectType ChainType<string[], string>

    _.drop(simpleString); // $ExpectType string[]

    _(simpleString).drop(); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).drop()); // $ExpectType ChainType<string[], string>

    // with n
    _.rest(stringRecordArray, n); // $ExpectType StringRecord[]

    _(stringRecordArray).rest(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).rest(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.tail(stringRecordArray, n); // $ExpectType StringRecord[]

    _(stringRecordArray).tail(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).tail(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.drop(stringRecordArray, n); // $ExpectType StringRecord[]

    _(stringRecordArray).drop(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).drop(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.rest(stringRecordList, n); // $ExpectType StringRecord[]

    _(stringRecordList).rest(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).rest(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.tail(stringRecordList, n); // $ExpectType StringRecord[]

    _(stringRecordList).tail(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).tail(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.drop(stringRecordList, n); // $ExpectType StringRecord[]

    _(stringRecordList).drop(n); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).drop(n)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.rest(simpleString, n); // $ExpectType string[]

    _(simpleString).rest(n); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).rest(n)); // $ExpectType ChainType<string[], string>

    _.tail(simpleString, n); // $ExpectType string[]

    _(simpleString).tail(n); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).tail(n)); // $ExpectType ChainType<string[], string>

    _.drop(simpleString, n); // $ExpectType string[]

    _(simpleString).drop(n); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).drop(n)); // $ExpectType ChainType<string[], string>
}

// compact
{
    _.compact(stringRecordOrUndefinedArray); // $ExpectType StringRecord[]

    _(stringRecordOrUndefinedArray).compact(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordOrUndefinedArray).compact()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.compact(stringRecordOrUndefinedList); // $ExpectType StringRecord[]

    _(stringRecordOrUndefinedList).compact(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordOrUndefinedList).compact()); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// flatten
{
    // one dimension, deep
    _.flatten(stringRecordList); // $ExpectType StringRecord[]
    _(stringRecordList).flatten(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // one dimension, shallow
    _.flatten(stringRecordList, true); // $ExpectType StringRecord[]
    _(stringRecordList).flatten(true); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).flatten(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // two dimensions, deep
    _.flatten(level2RecordList); // $ExpectType StringRecord[]
    _(level2RecordList).flatten(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(level2RecordList).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // two dimensions, shallow
    _.flatten(level2RecordList, true); // $ExpectType StringRecord[]
    _(level2RecordList).flatten(true); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(level2RecordList).flatten(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // three dimensions, deep - this is where recursion gives up and results in any[]
    _.flatten(level3RecordList); // $ExpectType any[]
    _(level3RecordList).flatten(); // $ExpectType any[]
    extractChainTypes(_.chain(level3RecordList).flatten()); // $ExpectType ChainType<any[], any>

    // three dimensions, shallow - verify that we continue to not give up for lists that are three dimensions or higher
    _.flatten(level3RecordList, true); // $ExpectType List<StringRecord>[]
    _(level3RecordList).flatten(true); // $ExpectType List<StringRecord>[]
    extractChainTypes(_.chain(level3RecordList).flatten(true)); // $ExpectType ChainType<List<StringRecord>[], List<StringRecord>>

    // four dimensions, deep - verify that we continue to give for lists that are higher than three dimensions
    _.flatten(level4RecordList); // $ExpectType any[]
    _(level4RecordList).flatten(); // $ExpectType any[]
    extractChainTypes(_.chain(level4RecordList).flatten()); // $ExpectType ChainType<any[], any>

    // mixed dimensions, deep
    _.flatten(maxLevel2RecordArray); // $ExpectType StringRecord[]
    _(maxLevel2RecordArray).flatten(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(maxLevel2RecordArray).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // mixed dimensions, shallow
    _.flatten(maxLevel3RecordArray, true); // $ExpectType (StringRecord | StringRecord[])[]
    _(maxLevel3RecordArray).flatten(true); // $ExpectType (StringRecord | StringRecord[])[]
    extractChainTypes(_.chain(maxLevel3RecordArray).flatten(true)); // $ExpectType ChainType<(StringRecord | StringRecord[])[], StringRecord | StringRecord[]>

    // string lists, deep
    _.flatten(level2StringList); // $ExpectType string[]
    _(level2StringList).flatten(); // $ExpectType string[]
    extractChainTypes(_.chain(level2StringList).flatten()); // $ExpectType ChainType<string[], string>

    // string lists, shallow
    _.flatten(simpleStringArray, true); // $ExpectType string[]
    _(simpleStringArray).flatten(true); // $ExpectType string[]
    extractChainTypes(_.chain(simpleStringArray).flatten(true)); // $ExpectType ChainType<string[], string>

    _.flatten(simpleStringList, true); // $ExpectType string[]
    _(simpleStringList).flatten(true); // $ExpectType string[]
    extractChainTypes(_.chain(simpleStringList).flatten(true)); // $ExpectType ChainType<string[], string>

    // type unions, deep
    _.flatten(level2NonIntersectingPropertiesList); // $ExpectType NonIntersectingProperties[]
    _(level2NonIntersectingPropertiesList).flatten(); // $ExpectType NonIntersectingProperties[]
    extractChainTypes(_.chain(level2NonIntersectingPropertiesList).flatten()); // $ExpectType ChainType<NonIntersectingProperties[], NonIntersectingProperties>

    // type unions, shallow
    _.flatten(level2NonIntersectingPropertiesList, true); // $ExpectType NonIntersectingProperties[]
    _(level2NonIntersectingPropertiesList).flatten(true); // $ExpectType NonIntersectingProperties[]
    extractChainTypes(_.chain(level2NonIntersectingPropertiesList).flatten(true)); // $ExpectType ChainType<NonIntersectingProperties[], NonIntersectingProperties>
}

// without
{
    const stringRecord1 = stringRecordArray[0];
    const stringRecord2 = stringRecordArray[1];
    const simpleString1 = simpleString[0];
    const simpleString2 = simpleString[1];

    _.without(stringRecordArray, stringRecord1, stringRecord2); // $ExpectType StringRecord[]

    _(stringRecordArray).without(stringRecord1, stringRecord2); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).without(stringRecord1, stringRecord2)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.without(stringRecordList, stringRecord1, stringRecord2); // $ExpectType StringRecord[]

    _(stringRecordList).without(stringRecord1, stringRecord2); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).without(stringRecord1, stringRecord2)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.without(simpleString, simpleString1, simpleString2); // $ExpectType string[]

    _(simpleString).without(simpleString1, simpleString2); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).without(simpleString1, simpleString2)); // $ExpectType ChainType<string[], string>
}

// union
{
    _.union(stringRecordArray, stringRecordArray); // $ExpectType StringRecord[]

    _(stringRecordArray).union(stringRecordArray); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).union(stringRecordArray)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.union(stringRecordList, stringRecordList); // $ExpectType StringRecord[]

    _(stringRecordList).union(stringRecordList); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).union(stringRecordList)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.union(simpleString, simpleString); // $ExpectType string[]

    _(simpleString).union(simpleString); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).union(simpleString)); // $ExpectType ChainType<string[], string>
}

// intersection
{
    _.intersection(stringRecordArray, stringRecordArray); // $ExpectType StringRecord[]

    _(stringRecordArray).intersection(stringRecordArray); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).intersection(stringRecordArray)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.intersection(stringRecordList, stringRecordList); // $ExpectType StringRecord[]

    _(stringRecordList).intersection(stringRecordList); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).intersection(stringRecordList)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.intersection(simpleString, simpleString); // $ExpectType string[]

    _(simpleString).intersection(simpleString); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).intersection(simpleString)); // $ExpectType ChainType<string[], string>
}

// difference
{
    _.difference(stringRecordArray, stringRecordArray); // $ExpectType StringRecord[]

    _(stringRecordArray).difference(stringRecordArray); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).difference(stringRecordArray)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.difference(stringRecordList, stringRecordList); // $ExpectType StringRecord[]

    _(stringRecordList).difference(stringRecordList); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).difference(stringRecordList)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.difference(simpleString, simpleString); // $ExpectType string[]

    _(simpleString).difference(simpleString); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).difference(simpleString)); // $ExpectType ChainType<string[], string>
}

// uniq, unique
{
    // function iterator
    _.uniq(stringRecordArray); // $ExpectType StringRecord[]
    _.uniq(stringRecordArray, true); // $ExpectType StringRecord[]
    _.uniq(stringRecordArray, true, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _.uniq(stringRecordArray, true, stringRecordListValueIterator, context); // $ExpectType StringRecord[]

    _(stringRecordArray).uniq(); // $ExpectType StringRecord[]
    _(stringRecordArray).uniq(true); // $ExpectType StringRecord[]
    _(stringRecordArray).uniq(true, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).uniq(true, stringRecordListValueIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).uniq()); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).uniq(true)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).uniq(true, stringRecordListValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).uniq(true, stringRecordListValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.unique(stringRecordArray); // $ExpectType StringRecord[]
    _.unique(stringRecordArray, true); // $ExpectType StringRecord[]
    _.unique(stringRecordArray, true, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _.unique(stringRecordArray, true, stringRecordListValueIterator, context); // $ExpectType StringRecord[]

    _(stringRecordArray).unique(); // $ExpectType StringRecord[]
    _(stringRecordArray).unique(true); // $ExpectType StringRecord[]
    _(stringRecordArray).unique(true, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).unique(true, stringRecordListValueIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).unique()); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).unique(true)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).unique(true, stringRecordListValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).unique(true, stringRecordListValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.uniq(stringRecordList); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, stringRecordListValueIterator, context); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, true); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, true, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, true, stringRecordListValueIterator, context); // $ExpectType StringRecord[]

    _(stringRecordList).uniq(); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(stringRecordListValueIterator); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(stringRecordListValueIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true, stringRecordListValueIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).uniq()); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(stringRecordListValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(stringRecordListValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(true)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(true, stringRecordListValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(true, stringRecordListValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.unique(stringRecordList); // $ExpectType StringRecord[]
    _.unique(stringRecordList, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _.unique(stringRecordList, stringRecordListValueIterator, context); // $ExpectType StringRecord[]
    _.unique(stringRecordList, true); // $ExpectType StringRecord[]
    _.unique(stringRecordList, true, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _.unique(stringRecordList, true, stringRecordListValueIterator, context); // $ExpectType StringRecord[]

    _(stringRecordList).unique(); // $ExpectType StringRecord[]
    _(stringRecordList).unique(stringRecordListValueIterator); // $ExpectType StringRecord[]
    _(stringRecordList).unique(stringRecordListValueIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true, stringRecordListValueIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).unique()); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(stringRecordListValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(stringRecordListValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(true)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(true, stringRecordListValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(true, stringRecordListValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property name iterator
    _.uniq(stringRecordArray, stringRecordProperty); // $ExpectType StringRecord[]
    _.uniq(stringRecordArray, true, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordArray).uniq(stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordArray).uniq(true, stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).uniq(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).uniq(true, stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.unique(stringRecordArray, stringRecordProperty); // $ExpectType StringRecord[]
    _.unique(stringRecordArray, true, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordArray).unique(stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordArray).unique(true, stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).unique(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).unique(true, stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.uniq(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, true, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordList).uniq(stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true, stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).uniq(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(true, stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.unique(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]
    _.unique(stringRecordList, true, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordList).unique(stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true, stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).unique(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(true, stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// zip
{
    _.zip(simpleStringList, numberList, stringRecordList); // $ExpectType any[][]
    _(simpleStringList).zip(numberList, stringRecordList); // $ExpectType any[][]
    extractChainTypes(_.chain(simpleStringList).zip(numberList, stringRecordList)); // $ExpectType ChainType<any[][], any[]>
}

// unzip
{
    // tuple lists
    _.unzip(tupleList); // $ExpectType any[][]
    _(tupleList).unzip(); // $ExpectType any[][]
    extractChainTypes(_.chain(tupleList).unzip()); // $ExpectType ChainType<any[][], any[]>

    // nested lists
    _.unzip(level2UnionList); // $ExpectType any[][]
    _(level2UnionList).unzip(); // $ExpectType any[][]
    extractChainTypes(_.chain(level2UnionList).unzip()); // $ExpectType ChainType<any[][], any[]>
}

// object
{
    // key and value lists
    _.object(simpleStringList, numberList); // $ExpectType Dictionary<number>
    _(simpleStringList).object(numberList); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(simpleStringList).object(numberList)); // $ExpectType ChainType<Dictionary<number>, number>

    // tuple lists
    _.object(tupleList); // $ExpectType Dictionary<number>
    _(tupleList).object(); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(tupleList).object()); // $ExpectType ChainType<Dictionary<number>, number>

    // nested lists
    _.object(level2UnionList); // $ExpectType Dictionary<any>
    _(level2UnionList).object(); // $ExpectType Dictionary<any>
    extractChainTypes(_.chain(level2UnionList).object()); // $ExpectType ChainType<Dictionary<any>, any>
}

// chunk
{
    const length = 2;

    // lists
    _.chunk(stringRecordList, length); // $ExpectType StringRecord[][]
    _(stringRecordList).chunk(length); // $ExpectType StringRecord[][]
    extractChainTypes(_.chain(stringRecordList).chunk(length)); // $ExpectType ChainType<StringRecord[][], StringRecord[]>

    // strings
    _.chunk(simpleString, length); // $ExpectType string[][]
    _(simpleString).chunk(length); // $ExpectType string[][]
    extractChainTypes(_.chain(simpleString).chunk(length)); // $ExpectType ChainType<string[][], string[]>
}

// indexOf
{
    const stringRecordItem = stringRecordArray[0];
    const simpleStringItem = simpleString[0];
    const isSorted = true;

    _.indexOf(stringRecordArray, stringRecordItem); // $ExpectType number
    _.indexOf(stringRecordArray, stringRecordItem, isSorted); // $ExpectType number

    _(stringRecordArray).indexOf(stringRecordItem); // $ExpectType number
    _(stringRecordArray).indexOf(stringRecordItem, isSorted); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).indexOf(stringRecordItem)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordArray).indexOf(stringRecordItem, isSorted)); // $ExpectType ChainType<number, never>

    extractChainTypes(_.chain(stringRecordArray).indexOf(stringRecordItem)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordArray).indexOf(stringRecordItem, isSorted)); // $ExpectType ChainType<number, never>

    _.indexOf(stringRecordList, stringRecordItem); // $ExpectType number
    _.indexOf(stringRecordList, stringRecordItem, isSorted); // $ExpectType number

    _(stringRecordList).indexOf(stringRecordItem); // $ExpectType number
    _(stringRecordList).indexOf(stringRecordItem, isSorted); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).indexOf(stringRecordItem)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordList).indexOf(stringRecordItem, isSorted)); // $ExpectType ChainType<number, never>

    extractChainTypes(_.chain(stringRecordList).indexOf(stringRecordItem)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordList).indexOf(stringRecordItem, isSorted)); // $ExpectType ChainType<number, never>

    _.indexOf(simpleString, simpleStringItem); // $ExpectType number
    _.indexOf(simpleString, simpleStringItem, isSorted); // $ExpectType number

    _(simpleString).indexOf(simpleStringItem); // $ExpectType number
    _(simpleString).indexOf(simpleStringItem, isSorted); // $ExpectType number

    extractChainTypes(_.chain(simpleString).indexOf(simpleStringItem)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(simpleString).indexOf(simpleStringItem, isSorted)); // $ExpectType ChainType<number, never>
}

// lastIndexof
{
    const fromIndex = 1;
    const stringRecordItem = stringRecordArray[0];
    const simpleStringItem = simpleString[0];

    _.lastIndexOf(stringRecordArray, stringRecordItem); // $ExpectType number
    _.lastIndexOf(stringRecordArray, stringRecordItem, fromIndex); // $ExpectType number

    _(stringRecordArray).lastIndexOf(stringRecordItem); // $ExpectType number
    _(stringRecordArray).lastIndexOf(stringRecordItem, fromIndex); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).lastIndexOf(stringRecordItem)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordArray).lastIndexOf(stringRecordItem, fromIndex)); // $ExpectType ChainType<number, never>

    extractChainTypes(_.chain(stringRecordArray).lastIndexOf(stringRecordItem)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordArray).lastIndexOf(stringRecordItem, fromIndex)); // $ExpectType ChainType<number, never>

    _.lastIndexOf(stringRecordList, stringRecordItem); // $ExpectType number
    _.lastIndexOf(stringRecordList, stringRecordItem, fromIndex); // $ExpectType number

    _(stringRecordList).lastIndexOf(stringRecordItem); // $ExpectType number
    _(stringRecordList).lastIndexOf(stringRecordItem, fromIndex); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).lastIndexOf(stringRecordItem)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordList).lastIndexOf(stringRecordItem, fromIndex)); // $ExpectType ChainType<number, never>

    extractChainTypes(_.chain(stringRecordList).lastIndexOf(stringRecordItem)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordList).lastIndexOf(stringRecordItem, fromIndex)); // $ExpectType ChainType<number, never>

    _.lastIndexOf(simpleString, simpleStringItem); // $ExpectType number
    _.lastIndexOf(simpleString, simpleStringItem, fromIndex); // $ExpectType number

    _(simpleString).lastIndexOf(simpleStringItem); // $ExpectType number
    _(simpleString).lastIndexOf(simpleStringItem, fromIndex); // $ExpectType number

    extractChainTypes(_.chain(simpleString).lastIndexOf(simpleStringItem)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(simpleString).lastIndexOf(simpleStringItem, fromIndex)); // $ExpectType ChainType<number, never>
}

// sortedIndex
{
    const simpleStringItem = 'b';
    const stringRecordItem = stringRecordArray[0];

    // no iterator
    _.sortedIndex(simpleStringArray, simpleStringItem); // $ExpectType number

    _(simpleStringArray).sortedIndex(simpleStringItem); // $ExpectType number

    extractChainTypes(_.chain(simpleStringArray).sortedIndex(simpleStringItem)); // $ExpectType ChainType<number, never>

    _.sortedIndex(simpleStringList, simpleStringItem); // $ExpectType number

    _(simpleStringList).sortedIndex(simpleStringItem); // $ExpectType number

    extractChainTypes(_.chain(simpleStringList).sortedIndex(simpleStringItem)); // $ExpectType ChainType<number, never>

    _.sortedIndex(simpleString, simpleStringItem); // $ExpectType number

    _(simpleString).sortedIndex(simpleStringItem); // $ExpectType number

    extractChainTypes(_.chain(simpleString).sortedIndex(simpleStringItem)); // $ExpectType ChainType<number, never>

    // function iterator
    _.sortedIndex(stringRecordArray, stringRecordItem, stringRecordListValueIterator); // $ExpectType number
    _.sortedIndex(stringRecordArray, stringRecordItem, stringRecordListValueIterator, context); // $ExpectType number

    _(stringRecordArray).sortedIndex(stringRecordItem, stringRecordListValueIterator); // $ExpectType number
    _(stringRecordArray).sortedIndex(stringRecordItem, stringRecordListValueIterator, context); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).sortedIndex(stringRecordItem, stringRecordListValueIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordArray).sortedIndex(stringRecordItem, stringRecordListValueIterator, context)); // $ExpectType ChainType<number, never>

    _.sortedIndex(stringRecordList, stringRecordItem, stringRecordListValueIterator); // $ExpectType number
    _.sortedIndex(stringRecordList, stringRecordItem, stringRecordListValueIterator, context); // $ExpectType number

    _(stringRecordList).sortedIndex(stringRecordItem, stringRecordListValueIterator); // $ExpectType number
    _(stringRecordList).sortedIndex(stringRecordItem, stringRecordListValueIterator, context); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).sortedIndex(stringRecordItem, stringRecordListValueIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordList).sortedIndex(stringRecordItem, stringRecordListValueIterator, context)); // $ExpectType ChainType<number, never>

    // property name iterator
    _.sortedIndex(stringRecordArray, stringRecordItem, stringRecordProperty); // $ExpectType number

    _(stringRecordArray).sortedIndex(stringRecordItem, stringRecordProperty); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).sortedIndex(stringRecordItem, stringRecordProperty)); // $ExpectType ChainType<number, never>

    _.sortedIndex(stringRecordList, stringRecordItem, stringRecordProperty); // $ExpectType number

    _(stringRecordList).sortedIndex(stringRecordItem, stringRecordProperty); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).sortedIndex(stringRecordItem, stringRecordProperty)); // $ExpectType ChainType<number, never>
}

// findIndex
{
    _.findIndex(stringRecordArray, stringRecordListBooleanIterator); // $ExpectType number
    _.findIndex(stringRecordArray, stringRecordListBooleanIterator, context); // $ExpectType number

    _(stringRecordArray).findIndex(stringRecordListBooleanIterator); // $ExpectType number
    _(stringRecordArray).findIndex(stringRecordListBooleanIterator, context); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).findIndex(stringRecordListBooleanIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordArray).findIndex(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<number, never>

    _.findIndex(stringRecordArray, partialStringRecord); // $ExpectType number

    _(stringRecordArray).findIndex(partialStringRecord); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).findIndex(partialStringRecord)); // $ExpectType ChainType<number, never>

    _.findIndex(stringRecordList, stringRecordListBooleanIterator); // $ExpectType number
    _.findIndex(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType number

    _(stringRecordList).findIndex(stringRecordListBooleanIterator); // $ExpectType number
    _(stringRecordList).findIndex(stringRecordListBooleanIterator, context); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).findIndex(stringRecordListBooleanIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordList).findIndex(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<number, never>

    _.findIndex(stringRecordList, partialStringRecord); // $ExpectType number

    _(stringRecordList).findIndex(partialStringRecord); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).findIndex(partialStringRecord)); // $ExpectType ChainType<number, never>

    _.findIndex(simpleString, stringListBooleanIterator); // $ExpectType number
    _.findIndex(simpleString, stringListBooleanIterator, context); // $ExpectType number

    _(simpleString).findIndex(stringListBooleanIterator); // $ExpectType number
    _(simpleString).findIndex(stringListBooleanIterator, context); // $ExpectType number

    extractChainTypes(_.chain(simpleString).findIndex(stringListBooleanIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(simpleString).findIndex(stringListBooleanIterator, context)); // $ExpectType ChainType<number, never>
}

// findLastIndex
{
    _.findLastIndex(stringRecordArray, stringRecordListBooleanIterator); // $ExpectType number
    _.findLastIndex(stringRecordArray, stringRecordListBooleanIterator, context); // $ExpectType number

    _(stringRecordArray).findLastIndex(stringRecordListBooleanIterator); // $ExpectType number
    _(stringRecordArray).findLastIndex(stringRecordListBooleanIterator, context); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).findLastIndex(stringRecordListBooleanIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordArray).findLastIndex(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<number, never>

    _.findLastIndex(stringRecordList, stringRecordListBooleanIterator); // $ExpectType number
    _.findLastIndex(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType number

    _(stringRecordList).findLastIndex(stringRecordListBooleanIterator); // $ExpectType number
    _(stringRecordList).findLastIndex(stringRecordListBooleanIterator, context); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).findLastIndex(stringRecordListBooleanIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordList).findLastIndex(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<number, never>

    _.findLastIndex(simpleString, stringListBooleanIterator); // $ExpectType number
    _.findLastIndex(simpleString, stringListBooleanIterator, context); // $ExpectType number

    _(simpleString).findLastIndex(stringListBooleanIterator); // $ExpectType number
    _(simpleString).findLastIndex(stringListBooleanIterator, context); // $ExpectType number

    extractChainTypes(_.chain(simpleString).findLastIndex(stringListBooleanIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(simpleString).findLastIndex(stringListBooleanIterator, context)); // $ExpectType ChainType<number, never>

    // partial property iterator
    _.findLastIndex(stringRecordArray, partialStringRecord); // $ExpectType number

    _(stringRecordArray).findLastIndex(partialStringRecord); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).findLastIndex(partialStringRecord)); // $ExpectType ChainType<number, never>

    _.findLastIndex(stringRecordList, partialStringRecord); // $ExpectType number

    _(stringRecordList).findLastIndex(partialStringRecord); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).findLastIndex(partialStringRecord)); // $ExpectType ChainType<number, never>
}

// range
{
    const start = 0;
    const stop = 10;
    const step = 1;

    _.range(stop); // $ExpectType number[]
    _.range(start, stop); // $ExpectType number[]
    _.range(start, stop, step); // $ExpectType number[]

    _(stop).range(); // $ExpectType number[]
    _(start).range(stop); // $ExpectType number[]
    _(start).range(stop, step); // $ExpectType number[]

    extractChainTypes(_.chain(stop).range()); // $ExpectType ChainType<number[], number>
    extractChainTypes(_.chain(start).range(stop)); // $ExpectType ChainType<number[], number>
    extractChainTypes(_.chain(start).range(stop, step)); // $ExpectType ChainType<number[], number>
}

// OOP Style

// underscore
{
    // lists
    extractUnderscoreTypes(_(stringRecordAugmentedList)); // $ExpectType UnderscoreType<StringRecordAugmentedList, StringRecord>
    extractUnderscoreTypes(_(stringRecordList)); // $ExpectType UnderscoreType<List<StringRecord>, StringRecord>

    // dictionaries
    extractUnderscoreTypes(_(stringRecordExplicitDictionary)); // $ExpectType UnderscoreType<StringRecordExplicitDictionary, StringRecord>
    extractUnderscoreTypes(_(stringRecordDictionary)); // $ExpectType UnderscoreType<Dictionary<StringRecord>, StringRecord>

    // strings
    extractUnderscoreTypes(_(simpleString)); // $ExpectType UnderscoreType<string, string>

    // non-collections
    extractUnderscoreTypes(_(simpleNumber)); // $ExpectType UnderscoreType<number, never>

    // mixed non-collections and collections
    extractUnderscoreTypes(_(mixedIterabilityValue)); // $ExpectType UnderscoreType<number | number[], number>
}

// value
// verify that the object type given to underscore is returned by value
{
    // lists
    _(stringRecordAugmentedList).value(); // $ExpectType StringRecordAugmentedList
    _(stringRecordList).value(); // $ExpectType List<StringRecord>

    // dictionaries
    _(stringRecordExplicitDictionary).value(); // $ExpectType StringRecordExplicitDictionary
    _(stringRecordDictionary).value(); // $ExpectType Dictionary<StringRecord>

    // strings
    _(simpleString).value(); // $ExpectType string

    // non-collections
    _(simpleNumber).value(); // $ExpectType number

    // mixed non-collections and collections
    _(mixedIterabilityValue).value(); // $ExpectType number | number[]
}

// Chaining

// chain
// verify that the right chain item and value types are yielded by calls to chain
// these tests also check to make sure that extractChainTypes(_.chain() and _().chain() yield the same types
{
    // lists
    extractChainTypes(_.chain(stringRecordAugmentedList)); // $ExpectType ChainType<StringRecordAugmentedList, StringRecord>
    extractChainTypes(_(stringRecordAugmentedList).chain()); // $ExpectType ChainType<StringRecordAugmentedList, StringRecord>
    extractChainTypes(_.chain(stringRecordList)); // $ExpectType ChainType<List<StringRecord>, StringRecord>
    extractChainTypes(_(stringRecordList).chain()); // $ExpectType ChainType<List<StringRecord>, StringRecord>

    // dictionaries
    extractChainTypes(_.chain(stringRecordExplicitDictionary)); // $ExpectType ChainType<StringRecordExplicitDictionary, StringRecord>
    extractChainTypes(_(stringRecordExplicitDictionary).chain()); // $ExpectType ChainType<StringRecordExplicitDictionary, StringRecord>
    extractChainTypes(_.chain(stringRecordDictionary)); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>
    extractChainTypes(_(stringRecordDictionary).chain()); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    // strings
    extractChainTypes(_.chain(simpleString)); // $ExpectType ChainType<string, string>
    extractChainTypes(_(simpleString).chain()); // $ExpectType ChainType<string, string>

    // non-collections
    extractChainTypes(_.chain(simpleNumber)); // $ExpectType ChainType<number, never>
    extractChainTypes(_(simpleNumber).chain()); // $ExpectType ChainType<number, never>

    // mixed non-collections and collections
    extractChainTypes(_.chain(mixedIterabilityValue)); // $ExpectType ChainType<number | number[], number>
    extractChainTypes(_(mixedIterabilityValue).chain()); // $ExpectType ChainType<number | number[], number>
}

// value
// verify that the object type given to chain is returned by value
{
    // lists
    _.chain(stringRecordAugmentedList).value(); // $ExpectType StringRecordAugmentedList
    _.chain(stringRecordList).value(); // $ExpectType List<StringRecord>

    // dictionaries
    _.chain(stringRecordExplicitDictionary).value(); // $ExpectType StringRecordExplicitDictionary
    _.chain(stringRecordDictionary).value(); // $ExpectType Dictionary<StringRecord>

    // strings
    _.chain(simpleString).value(); // $ExpectType string

    // non-collections
    _.chain(simpleNumber).value(); // $ExpectType number

    // mixed non-collections and collections
    _.chain(mixedIterabilityValue).value(); // $ExpectType number | number[]
}

var evens = _.filter([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0);

var capitalLetters = _.filter({ a: 'a', b: 'B', c: 'C', d: 'd' }, l => l === l.toUpperCase());

var listOfPlays = [{ title: "Cymbeline", author: "Shakespeare", year: 1611 }, { title: "The Tempest", author: "Shakespeare", year: 1611 }, { title: "Other", author: "Not Shakespeare", year: 2012 }];
_.where(listOfPlays, { author: "Shakespeare", year: 1611 });

var odds = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0);

_.every([true, 1, null, 'yes'], x => !!_.identity(x));

_.any([null, 0, 'yes', false]);

_.some([1, 2, 3, 4], l => l % 3 === 0);

_.some({ a: 'a', b: 'B', c: 'C', d: 'd' }, l => l === l.toUpperCase());

_.contains([1, 2, 3], 3);

_.contains([1, 2, 3], 3, 1);

_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33479
var foo: any[] = [{'a': 1, 'b': 2}];
_.pluck(foo, 'a');

var stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
_.pluck(stooges, 'name');

_.max(stooges, (stooge) => stooge.age);
_.min(stooges, (stooge) => stooge.age);
_.max({ a: 1, b: 2 });
_.max({ a: 'a', b: 'bb' }, (v, k) => v.length);
_.min({ a: 1, b: 2 });
_.min({ a: 'a', b: 'bb' }, (v, k) => v.length);

var numbers = [10, 5, 100, 2, 1000];
_.max(numbers);
_.min(numbers);

_.sortBy([1, 2, 3, 4, 5, 6], (num) => Math.sin(num));

_([1, 2, 3]).chain()
    .sortBy(x => -x)
    .sortBy(x => -x)
    .value().length;

_([1.3, 2.1, 2.4]).groupBy((e) => Math.floor(e));
_.groupBy([1.3, 2.1, 2.4], (num) => Math.floor(num).toString());
_.groupBy(['one', 'two', 'three'], 'length');

_.indexBy(stooges, 'age')['40'].age;
_(stooges).indexBy('age')['40'].name;
_(stooges)
    .chain()
    .indexBy('age')
    .value()['40'].age;

let pensioners: string[] = _.chain(stooges)
    .filter(p => p.age >= 60)
    .map(p => p.name)
    .value();

var usersData: _.Dictionary<{ age: number; name: string }> = {
    'user id': { name: 'moe', age: 40 },
    'other user Id': { name: 'larry', age: 50 },
    'fake id': { name: 'curly', age: 60 },
};

let youngPeopleId: string[] = _.chain(usersData)
    .map((p, k: string) => k)
    .value();

let usersTable: { age: number; name: string; id: string }[] = _.chain(usersData)
    .map((p, k: string) => {
        return { id: k, ...p };
    })
    .value();

let usersTable_2 /*: { age: number; name: string; id: string }[][]*/ = _.chain(usersData)
    .map((p, k: string) => {
        return [{ id: k, ...p }];
    })
    .value();

let usersTable_3 /*: { score: number; fullName: string; login: string }[][]*/ = _.chain(usersTable)
    .map(p => {
        return [
            {
                login: p.id,
                fullName: p.name,
                score: p.age,
            },
        ];
    })
    .value();

_.countBy([1, 2, 3, 4, 5], (num) => (num % 2 == 0) ? 'even' : 'odd');

_.shuffle([1, 2, 3, 4, 5, 6]);

(function (a, b, c, d) { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);

_.size({ one: 1, two: 2, three: 3 });

_.partition<number[]>([0, 1, 2, 3, 4, 5], (num) => {return num % 2 == 0 });

interface Family {
    name: string;
    relation: string;
}
var isUncleMoe = _.matches<Family>({ name: 'moe', relation: 'uncle' });
_.filter([{ name: 'larry', relation: 'father' }, { name: 'moe', relation: 'uncle' }], isUncleMoe);
var uncleMoe: Family = { name: 'moe', relation: 'uncle' };
isUncleMoe(uncleMoe);

///////////////////////////////////////////////////////////////////////////////////////

_.first([5, 4, 3, 2, 1]);
_.initial([5, 4, 3, 2, 1]);
_.last([5, 4, 3, 2, 1]);
_.rest([5, 4, 3, 2, 1]);
_.compact([0, 1, false, 2, '', 3]);

_.flatten([1, 2, 3, 4]);
_.flatten([1, [2]]);

// typescript doesn't like the elements being different
_.flatten([1, [2], [3, [[4]]]]);
_.flatten([1, [2], [3, [[4]]]], true);
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
_.uniq([1, 2, 1, 3, 1, 4]);
_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
var r = _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
_.object([['moe', 30], ['larry', 40], ['curly', 50]]);
_.indexOf([1, 2, 3], 2);
_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
_.sortedIndex([10, 20, 30, 40, 50], 35);
_.findIndex([1, 2, 3, 1, 2, 3], num => num % 2 === 0);
_.findIndex([{a: 'a'}, {a: 'b'}], {a: 'b'});
_.findLastIndex([1, 2, 3, 1, 2, 3], num => num % 2 === 0);
_.findLastIndex([{ a: 'a' }, { a: 'b' }], { a: 'b' });
_.range(10);
_.range(1, 11);
_.range(0, 30, 5);
_.range(0, 30, 5);
_.range(0);

///////////////////////////////////////////////////////////////////////////////////////

var func = function (greeting) { return `${greeting}: ${this.name}` };
// need a second var otherwise typescript thinks func signature is the above func type,
// instead of the newly returned _bind => func type.
var func2 = _.bind(func, { name: 'moe' }, 'hi');
func2();

var buttonView = {
    label: 'underscore',
    onClick() { alert('clicked: ' + this.label); },
    onHover() { console.log('hovering: ' + this.label); }
};
_.bindAll(buttonView);
$('#underscore_button').bind('click', buttonView.onClick);

var fibonacci = _.memoize(function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

class MyClass {};

var classMemoized = _.memoize<MyClass>(function (classInstance) {
    return new classInstance();
});

var log = _.bind(console.log, console);
_.delay(log, 1000, 'logged later');

_.defer(function () { alert('deferred'); });

var updatePosition = (param:string) => alert('updating position... Param: ' + param);
var throttled = _.throttle(updatePosition, 100);
$(window).scroll(throttled);
throttled.cancel();

var calculateLayout = (param:string) => alert('calculating layout... Param: ' + param);
var lazyLayout = _.debounce(calculateLayout, 300);
$(window).resize(lazyLayout);
lazyLayout.cancel();

var createApplication = (param:string) => alert('creating application... Param: ' + param);
var initialize = _.once(createApplication);
initialize("me");
initialize("me");

var notes: any[] = [1,2,3];
var render = () => alert("rendering...");
var renderNotes = _.after(notes.length, render);
_.each(notes, (note) => note.asyncSave({ success: renderNotes }));

var hello = function (name) { return "hello: " + name; };
// can't use the same "hello" var otherwise typescript fails
var hello2 = _.wrap(hello, (func) => { return `before, ${func("moe")} + after`; });
hello2();

var greet = function (name) { return "hi: " + name; };
var exclaim = function (statement) { return statement + "!"; };
var welcome = _.compose(exclaim, greet);
welcome('moe');

var partialApplicationTestFunction = (a: string, b: number, c: boolean, d: string, e: number, f: string) => {  }
var partialApplicationResult = _.partial(partialApplicationTestFunction, "", 1);
var parametersCanBeStubbed = _.partial(partialApplicationResult, _, _, _, "");

///////////////////////////////////////////////////////////////////////////////////////

_.keys({ one: 1, two: 2, three: 3 });
_.values({ one: 1, two: 2, three: 3 });
_.pairs({ one: 1, two: 2, three: 3 });
_.invert({ Moe: "Moses", Larry: "Louis", Curly: "Jerome" });
_.functions(_);
_.extend({ name: 'moe' }, { age: 50 });
_.extendOwn({ name: 'moe'}, { age: 50 });
_.assign({ name: 'moe'}, { age: 50 });

_.pick({ name: 'moe', age: 50, userid: 'moe1' }, 'name', 'age').age = 5;
_.pick({ name: 'moe', age: 50, userid: 'moe1' }, ['name', 'age']).age = 5;
_.pick({ name: 'moe', age: 50, userid: 'moe1' }, (value, key) => {
    return key === 'name' || key === 'age';
}).age = 5;

_({ name: 'moe', age: 50, userid: 'moe1' }).pick('name', 'age').age = 5;
_({ name: 'moe', age: 50, userid: 'moe1' }).pick(['name', 'age']).age = 5;
_({ name: 'moe', age: 50, userid: 'moe1' }).pick((value, key) => {
    return key === 'name' || key === 'age';
}).age = 5;

_.chain({ name: 'moe', age: 50, userid: 'moe1' }).pick('name', 'age').value().age = 5;
_.chain({ name: 'moe', age: 50, userid: 'moe1' }).pick(['name', 'age']).value().age = 5;
_.chain({ name: 'moe', age: 50, userid: 'moe1' }).pick((value, key) => {
    return key === 'name' || key === 'age';
}).value().age = 5;

_.omit({ name: 'moe', age: 50, userid: 'moe1' }, 'name');
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, 'name', 'age');
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, ['name', 'age']);

_.mapObject({ a: 1, b: 2 }, val => val * 2) === _.mapObject({ a: 2, b: 4 }, _.identity);
_.mapObject({ a: 1, b: 2 }, (val, key, o) => o[key] * 2) === _.mapObject({ a: 2, b: 4}, _.identity);
_.mapObject({ x: "string 1", y: "string 2" }, 'length') === _.mapObject({ x: "string 1", y: "string 2"}, _.property('length'));

var iceCream = { flavor: "chocolate" };
_.defaults(iceCream, { flavor: "vanilla", sprinkles: "lots" });

_.clone({ name: 'moe' });
_.clone(['i', 'am', 'an', 'object!']);

_([1, 2, 3, 4])
    .chain()
    .filter((num) => { return num % 2 == 0; })
    .tap(alert)
    .map((num) => { return num * num; })
    .value();

_.chain([1, 2, 3, 200])
    .filter((num) => { return num % 2 == 0; })
    .tap(alert)
    .map((num) => { return num * num; })
    .value();

_.has({ a: 1, b: 2, c: 3 }, "b");

var moe = { name: 'moe', luckyNumbers: [13, 27, 34] };
var clone = { name: 'moe', luckyNumbers: [13, 27, 34] };
moe == clone;
_.isEqual(moe, clone);

_.isEmpty([1, 2, 3]);
_.isEmpty({});

_.isElement($('body')[0]);

(function () { return _.isArray(arguments); })();
_.isArray([1, 2, 3]);

_.isObject({});
_.isObject(1);

_.property('name')(moe);
_.property(['name'])(moe);
_.property(['luckyNumbers', 2])(moe)

// (() => { return _.isArguments(arguments); })(1, 2, 3);
_.isArguments([1, 2, 3]);

_.isFunction(alert);

_.isString("moe");

_.isNumber(8.4 * 5);

_.isFinite(-101);

_.isFinite(-Infinity);

_.isBoolean(null);

_.isDate(new Date());

_.isRegExp(/moe/);

_.isNaN(NaN);
_.isNaN(undefined);

_.isNull(null);
_.isNull(undefined);

_.isUndefined((window).missingVariable);

//////////////////////////////////// User Defined Guard tests

function useElement(arg: Element) {};
function useArguments(arg: IArguments) {};
function useFunction(arg: Function) {};
function useError(arg: Error) {};
function useString(arg: String) {};
function useNumber(arg: Number) {};
function useBoolean(arg: Boolean) {};
function useDate(arg: Date) {};
function useRegExp(arg: RegExp) {};
function useArray<T>(arg: T[]) {};
function useSymbol(arg: symbol) {};

var guardedType: {} = {};
if(_.isElement(guardedType)) useElement(guardedType);
if(_.isArray(guardedType)) useArray(guardedType);
if(_.isArguments(guardedType)) useArguments(guardedType);
if(_.isFunction(guardedType)) useFunction(guardedType);
if(_.isError(guardedType)) useError(guardedType);
if(_.isString(guardedType)) useString(guardedType);
if(_.isNumber(guardedType)) useNumber(guardedType);
if(_.isBoolean(guardedType)) useBoolean(guardedType);
if(_.isDate(guardedType)) useDate(guardedType);
if(_.isRegExp(guardedType)) useRegExp(guardedType);
if(_.isSymbol(guardedType)) useSymbol(guardedType);

///////////////////////////////////////////////////////////////////////////////////////

var UncleMoe = { name: 'moe' };
_.constant(UncleMoe)();

typeof _.now() === "number";

var underscore = _.noConflict();

var moe2 = { name: 'moe' };
moe2 === _.identity(moe);

var genie;
var r2 = _.times(3, (n) => { return n * n });
_(3).times(function (n) { genie.grantWishNumber(n); });

_.random(0, 100);

_.mixin({
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    }
});
(<any>_("fabio")).capitalize();

_.uniqueId('contact_');

_.escape('Curly, Larry & Moe');

var object = { cheese: 'crumpets', stuff() { return 'nonsense'; } };
_.result(object, 'cheese');

_.result(object, 'stuff');

var compiled = _.template("hello: <%= name %>");
compiled({ name: 'moe' });
let source: string = compiled.source;
var list2 = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
_.template(list2)({ people: ['moe', 'curly', 'larry'] });
var template = _.template("<b><%- value %></b>");
template({ value: '<script>' });
var compiled2 = _.template("<% print('Hello ' + epithet); %>");
compiled2({ epithet: "stooge" });
var oldTemplateSettings = _.templateSettings;
_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};
var template2 = _.template("Hello {{ name }}!");
template2({ name: "Mustache" });
_.template("Using 'with': <%= data.answer %>", oldTemplateSettings)({ variable: 'data' });

_.template("Using 'with': <%= data.answer %>", { variable: 'data' })({ answer: 'no' });
let template0 = _.template("I don't depend on any variables");
template0();

//////////////// Chain Tests
function chain_tests() {
    // https://typescript.codeplex.com/workitem/1960
    var numArray: number[] = _.chain([1, 2, 3, 4, 5, 6, 7, 8])
        .filter(num => num % 2 == 0)
        .map(num => num * num)
        .value();

    var strArray: string[] = _([1, 2, 3, 4])
        .chain()
        .filter(num => num % 2 == 0)
        .tap(alert)
        .map(num => "string" + num)
        .value();

    var n: number = _.chain([1, 2, 3, 200])
        .filter(num => num % 2 == 0)
        .tap(alert)
        .map(num => num * num)
        .max()
        .value();

    var hoverOverValueShouldBeNumberOrUndefinedNotAny = _([1, 2, 3]).chain()
        .map(num => [num, num + 1])
        .flatten()
        .find(num => num % 2 == 0)
        .value();

    var firstVal: number | undefined = _.chain([1, 2, 3])
        .first()
        .value();

    var firstVal2: number | undefined = _.chain([])
        .first()
        .value();

    let numberObjects = [{stringRecordPropertyName: 'odd', value: 1}, {stringRecordPropertyName: 'even', value: 2}, {stringRecordPropertyName: 'even', value: 0}];
    let evenAndOddGroupedNumbers = _.chain(numberObjects)
        .groupBy('stringRecordPropertyName')
        .mapObject((objects) => _.pluck(objects, 'value'))
        .value(); // { odd: [1], even: [0, 2] }

    var matrixOfString : string[][] = _.chain({'foo' : '1', 'bar': '1'})
        .keys()    // return ['foo', 'bar'] : string[]
        .pairs()   // return [['foo', '0'], ['bar', '1']] : string[][]
        .value();

    interface IYears {
        2016: number;
        2017: number;
    }

    let yearObject: IYears = {2016: 1, 2017: 2};
    let valuePerYear: number[] = _.chain(yearObject)
        .values()
        .value()

    const arr1: string[] = ['z', 'x', 'y'];
    const query = 'z';
    let arr2: string[] = ['a', 'b', 'c'];
    arr2 = _.chain(arr1)
        .union(arr2)
        .without(query)
        .value();
}

var obj: { [k: string] : number } = {
       'test' : 5,
       'another' : 8,
       'third' : 10
    };
let empty = {};

_.chain(obj).map(function (value, key) {
    empty[key] = value;
    console.log("vk", value, key);
});

function strong_typed_values_tests() {
    var dictionaryLike: { [k: string] : {title: string, value: number} } = {
        'test' : { title: 'item1', value: 5 },
        'another' : { title: 'item2', value: 8 },
        'third' : { title: 'item3', value: 10 }
    };

    _.chain(dictionaryLike).values().filter((r) => {
        return r.value >= 8;
    }).map((r) => {
        return [r.title, true];
    }).object().value();

    var x: number = _(dictionaryLike).chain().filter((x) => {
        console.log(x.title);
        console.log(x.value.toFixed());
        return x.title == 'item1';
    }).size().value();

    _.values<{title: string, value: number}>(dictionaryLike);
}

// tests for #7931 - verify that the result of a function like reduce that returns a singleton can be chained further
// $ExpectType number[]
_.chain([1, 2, 3])
    .reduce((acc, x) => { acc.unshift(x); return acc; }, [] as number[])
    .map(x => x + 1)
    .value();

// $ExpectType boolean
_.chain([{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }])
    .findWhere({ a: 1 })
    .some(n => n === 2)
    .value();

// $ExpectType number
_.chain([1, 2, 3, 4, 5, 6])
    .chunk(3)
    .shuffle()
    .first()
    .reduce((aggregate, n) => aggregate + n, 0)
    .value();

// $ExpectType number[]
_.chain([1, 2, 3, 4, 5, 6])
    .sample()
    .range(10)
    .value();

// $ExpectType number
_.chain([{ a: 1, b: 2, c: 3 }, { a: 2, b: 1, c: 3 }, { a: 3, b: 2, c: 1 }])
    .max(o => o.a)
    .reduce((aggregate, num) => aggregate + num, 0)
    .value();
// end tests for #7931

// $ExpectType [number[], number[]]
_.chain([[1, 2, 3], [4, undefined, 5], [undefined, undefined, 6]])
    .flatten()
    .compact()
    .partition(n => n > 3)
    .value();

// $ExpectType Dictionary<number>
_.chain([[[{ a: 'a' }, { a: 'b' }], [{ a: 'c' }, { a: 'a' }]], [{ a: 'b' }, { a: 'd' }]])
    .flatten()
    .countBy(n => n.a)
    .value();

// $ExpectType boolean
_.chain([{ a: 1 }, { a: 2 }, { a: 3 }, { b: 4 }])
    .map('a')
    .contains(3)
    .value();

// $ExpectType boolean
_.chain([{ a: 1 }, { a: 2 }, { a: 3 }, { b: 4 }])
    .map({ a: 3 })
    .some()
    .value();

// $ExpectType NonIntersectingProperties[]
_.chain(nonIntersectingPropertiesDictionary)
    .shuffle()
    .filter('a')
    .value();

// $ExpectType StringRecord[]
_.chain(stringRecordList)
    .where({ a: 'b' })
    .reject(o => o.a === 'b')
    .value();

// $ExpectType number | undefined
_.chain([{ a: 1 }, { a: 2 }, { a: 3 }, { b: 4 }])
    .pluck('a')
    .max()
    .value();

declare const dictionaryTuple: [string, { str: string; bool: boolean; }][];

// $ExpectType [{ str: string; bool: boolean; }[], { str: string; bool: boolean; }[]]
_.chain(dictionaryTuple)
    .object()
    .each((element, key, collection) => {
        // verify that an object call on a tuple array results in a Dictionary
        // $ExpectType Dictionary<{ str: string; bool: boolean; }>
        collection;

        element.str += key;
    })
    .filter((element, key, collection) => {
        // verify that each preserves the colleciton type it was given
        // $ExpectType Dictionary<{ str: string; bool: boolean; }>
        collection;

        return element.str === 'match';
    })
    .partition('bool')
    .value();
