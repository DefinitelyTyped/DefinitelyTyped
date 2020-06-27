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
var sum = _.reduce<number, number>([1, 2, 3], (memo, num) => memo + num, 0);
sum = _.reduce<number, number>([1, 2, 3], (memo, num) => memo + num); // memo is optional #issue 5 github
sum = _.reduce<string, number>({'a':'1', 'b':'2', 'c':'3'}, (memo, numstr) => memo + (+numstr));

var list = [[0, 1], [2, 3], [4, 5]];
//var flat = _.reduceRight(list, (a, b) => a.concat(b), []);    // https://typescript.codeplex.com/workitem/1960
var flat = _.reduceRight<number[], number[]>(list, (a, b) => a.concat(b), []);

// common testing types and objects
const context = {};

interface StringRecord {
    a: string;
    b: string;
}

const stringRecordProperty = 'a';
const partialStringRecord: Partial<StringRecord> = { a: 'b' };

interface StringRecordAugmentedList extends _.List<StringRecord> {
    notAListProperty: boolean;
}

const stringRecordArray: StringRecord[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'b' }, { a: 'c', b: 'a' }];
const stringRecordAugmentedList: StringRecordAugmentedList = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: { a: 'c', b: 'a' }, length: 3, notAListProperty: true };
const stringRecordList: _.List<StringRecord> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: { a: 'c', b: 'a' }, length: 3 };
const stringRecordListPropertyModifyingIterator = (value: StringRecord, index: number, list: _.List<StringRecord>) => value.a += 'b';
const stringRecordListPropertySelectingIterator = (value: StringRecord, index: number, list: _.List<StringRecord>) => value.a;
const stringRecordListPropertyComparingIterator = (value: StringRecord, index: number, list: _.List<StringRecord>) => value.a === 'b';
const stringRecordListPropertyMemoIterator = (prev: string, value: StringRecord, index: number, list: _.List<StringRecord>) => prev + value.a;

interface StringRecordExplicitDictionary extends _.Dictionary<StringRecord> {
    a: StringRecord;
    b: StringRecord;
    c: StringRecord;
}

const stringRecordExcplcitDictionary: StringRecordExplicitDictionary = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: { a: 'c', b: 'a' } };
const stringRecordDictionary: _.Dictionary<StringRecord> = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: { a: 'c', b: 'a' } };
const stringRecordDictionaryPropertyModifyingIterator = (element: StringRecord, key: string, dictionary: _.Dictionary<StringRecord>) => element.a += 'b';
const stringRecordDictionaryPropertySelectingIterator = (element: StringRecord, key: string, dictionary: _.Dictionary<StringRecord>) => element.a;
const stringRecordDictionaryPropertyComparingIterator = (element: StringRecord, key: string, list: _.Dictionary<StringRecord>) => element.a === 'b';
const stringRecordDictionaryPropertyMemoIterator = (prev: string, element: StringRecord, key: string, dictionary: _.Dictionary<StringRecord>) => prev + element.a;

const simpleString = 'abc';
const stringListModifyingIterator = (value: string, index: number, list: _.List<string>) => value + 'b';
const stringListSelectingIterator = (value: string, index: number, list: _.List<string>) => value;
const stringListComparingIterator = (value: string, index: number, list: _.List<string>) => value === 'b';
const stringListMemoIterator = (prev: _.Dictionary<number>, value: string, index: number, list: _.List<string>) => {
    prev[value] = index;
    return prev;
};

const stringRecordOrUndefinedArray: (StringRecord | undefined)[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'b' }, undefined];
const stringRecordOrUndefinedList: _.List<StringRecord | undefined> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: undefined, length: 3 };
const stringRecordOrUndefinedDictionary: _.Dictionary<StringRecord | undefined> = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: undefined };

interface IntersectingMixedTypeRecord {
    a: boolean;
    c: string;
}

type IntersectingProperties = StringRecord | IntersectingMixedTypeRecord;

const intersectingPropertiesArray: IntersectingProperties[] = [{ a: 'a', b: 'b' }, { a: true, c: 'c' }];
const intersectingPropertiesList: _.List<IntersectingProperties> = { 0: { a: 'a', b: 'b' }, 1: { a: true, c: 'c' }, length: 2 };
const intersectingPropertiesDictionary: _.Dictionary<IntersectingProperties> = { a: { a: 'a', b: 'b' }, b: { a: true, c: 'c' } };

interface NonIntersectingStringRecord {
    onlyNonIntersectingStringRecord: string;
}

type NonIntersectingProperties = StringRecord | NonIntersectingStringRecord;

const nonIntersectingPropertiesArray: NonIntersectingProperties[] = [{ a: 'a', b: 'c' }, { onlyNonIntersectingStringRecord: 'b' }];
const nonIntersectingPropertiesList: _.List<NonIntersectingProperties> = { 0: { a: 'a', b: 'c' }, 1: { onlyNonIntersectingStringRecord: 'b' }, length: 2 };
const nonIntersectingPropertiesDictionary: _.Dictionary<NonIntersectingProperties> = { a: { a: 'a', b: 'c' }, b: { onlyNonIntersectingStringRecord: 'b' } };

const simpleStringArray: string[] = ['a', 'c'];
const simpleStringList: _.List<string> = { 0: 'a', 1: 'c', length: 2 };

interface NumberRecord {
    a: number;
}

const numberRecordArray: NumberRecord[] = [{ a: 0 }, { a: 1 }];
const numberRecordList: _.List<NumberRecord> = { 0: { a: 0 }, 1: { a: 1 }, length: 2 };
const numberRecordListPropertySelectingIterator = (value: NumberRecord, index: number, list: _.List<NumberRecord>) => value.a;

const numberRecordDictionary: _.Dictionary<NumberRecord> = { a: { a: 0 }, b: { a: 1 } };
const numberRecordDictionaryPropertySelectingIterator = (element: NumberRecord, key: string, list: _.Dictionary<NumberRecord>) => element.a;

const numberArray: number[] = [0, 1];
const numberList: _.List<number> = { 0: 0, 1: 1, length: 2 };
const numberDictionary: _.Dictionary<number> = { a: 0, b: 1 };

const simpleNumber = 7;

interface NoParameterFunctionRecord {
    a: () => number;
}

const noParameterFunctionRecordArray: NoParameterFunctionRecord[] = [{ a: Math.random }, { a: Math.random }];
const noParameterFunctionRecordList: _.List<NoParameterFunctionRecord> = { 0: { a: Math.random }, 1: { a: Math.random }, length: 2 };
const noParameterFunctionRecordDictionary: _.Dictionary<NoParameterFunctionRecord> = { a: { a: Math.random }, b: { a: Math.random } };

interface OneParameterFunctionRecord {
    a: (arg0: number) => number;
}

const oneParameterFunctionRecordArray: OneParameterFunctionRecord[] = [{ a: Math.abs }, { a: Math.abs }];
const oneParameterFunctionRecordList: _.List<OneParameterFunctionRecord> = { 0: { a: Math.abs }, 1: { a: Math.abs }, length: 2 };
const oneParameterFunctionRecordDictionary: _.Dictionary<OneParameterFunctionRecord> = { a: { a: Math.abs }, b: { a: Math.abs } };

declare const mixedIterabilityValue: number | number[];

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
    _.each(stringRecordArray, stringRecordListPropertyModifyingIterator); // $ExpectType StringRecord[]
    _.each(stringRecordArray, stringRecordListPropertyModifyingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordArray).each(stringRecordListPropertyModifyingIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).each(stringRecordListPropertyModifyingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).each(stringRecordListPropertyModifyingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).each(stringRecordListPropertyModifyingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.forEach(stringRecordArray, stringRecordListPropertyModifyingIterator); // $ExpectType StringRecord[]
    _.forEach(stringRecordArray, stringRecordListPropertyModifyingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordArray).forEach(stringRecordListPropertyModifyingIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).forEach(stringRecordListPropertyModifyingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).forEach(stringRecordListPropertyModifyingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).forEach(stringRecordListPropertyModifyingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.each(stringRecordList, stringRecordListPropertyModifyingIterator); // $ExpectType List<StringRecord>
    _.each(stringRecordList, stringRecordListPropertyModifyingIterator, context); // $ExpectType List<StringRecord>

    _(stringRecordList).each(stringRecordListPropertyModifyingIterator); // $ExpectType List<StringRecord>
    _(stringRecordList).each(stringRecordListPropertyModifyingIterator, context); // $ExpectType List<StringRecord>

    _.chain(stringRecordList).each(stringRecordListPropertyModifyingIterator); // // $ExpectType _Chain<StringRecord, List<StringRecord>>
    _.chain(stringRecordList).each(stringRecordListPropertyModifyingIterator, context); // // $ExpectType _Chain<StringRecord, List<StringRecord>>

    _.forEach(stringRecordList, stringRecordListPropertyModifyingIterator); // $ExpectType List<StringRecord>
    _.forEach(stringRecordList, stringRecordListPropertyModifyingIterator, context); // $ExpectType List<StringRecord>

    _(stringRecordList).forEach(stringRecordListPropertyModifyingIterator); // $ExpectType List<StringRecord>
    _(stringRecordList).forEach(stringRecordListPropertyModifyingIterator, context); // $ExpectType List<StringRecord>

    _.chain(stringRecordList).forEach(stringRecordListPropertyModifyingIterator); // // $ExpectType _Chain<StringRecord, List<StringRecord>>
    _.chain(stringRecordList).forEach(stringRecordListPropertyModifyingIterator, context); // // $ExpectType _Chain<StringRecord, List<StringRecord>>

    _.each(stringRecordDictionary, stringRecordDictionaryPropertyModifyingIterator); // $ExpectType Dictionary<StringRecord>
    _.each(stringRecordDictionary, stringRecordDictionaryPropertyModifyingIterator, context); // $ExpectType Dictionary<StringRecord>

    _(stringRecordDictionary).each(stringRecordDictionaryPropertyModifyingIterator); // $ExpectType Dictionary<StringRecord>
    _(stringRecordDictionary).each(stringRecordDictionaryPropertyModifyingIterator, context); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordDictionary).each(stringRecordDictionaryPropertyModifyingIterator); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
    _.chain(stringRecordDictionary).each(stringRecordDictionaryPropertyModifyingIterator, context); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>

    _.forEach(stringRecordDictionary, stringRecordDictionaryPropertyModifyingIterator); // $ExpectType Dictionary<StringRecord>
    _.forEach(stringRecordDictionary, stringRecordDictionaryPropertyModifyingIterator, context); // $ExpectType Dictionary<StringRecord>

    _(stringRecordDictionary).forEach(stringRecordDictionaryPropertyModifyingIterator); // $ExpectType Dictionary<StringRecord>
    _(stringRecordDictionary).forEach(stringRecordDictionaryPropertyModifyingIterator, context); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordDictionary).forEach(stringRecordDictionaryPropertyModifyingIterator); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
    _.chain(stringRecordDictionary).forEach(stringRecordDictionaryPropertyModifyingIterator, context); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
}

// map, collect
{
    // function iterator
    _.map(stringRecordArray, stringRecordListPropertySelectingIterator); // $ExpectType string[]
    _.map(stringRecordArray, stringRecordListPropertySelectingIterator, context); // $ExpectType string[]

    _(stringRecordArray).map(stringRecordListPropertySelectingIterator); // $ExpectType string[]
    _(stringRecordArray).map(stringRecordListPropertySelectingIterator, context); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordArray).map(stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(stringRecordArray).map(stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<string[], string>

    _.collect(stringRecordArray, stringRecordListPropertySelectingIterator); // $ExpectType string[]
    _.collect(stringRecordArray, stringRecordListPropertySelectingIterator, context); // $ExpectType string[]

    _(stringRecordArray).collect(stringRecordListPropertySelectingIterator); // $ExpectType string[]
    _(stringRecordArray).collect(stringRecordListPropertySelectingIterator, context); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordArray).collect(stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(stringRecordArray).collect(stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<string[], string>

    _.map(stringRecordList, stringRecordListPropertySelectingIterator); // $ExpectType string[]
    _.map(stringRecordList, stringRecordListPropertySelectingIterator, context); // $ExpectType string[]

    _(stringRecordList).map(stringRecordListPropertySelectingIterator); // $ExpectType string[]
    _(stringRecordList).map(stringRecordListPropertySelectingIterator, context); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordList).map(stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(stringRecordList).map(stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<string[], string>

    _.collect(stringRecordList, stringRecordListPropertySelectingIterator); // $ExpectType string[]
    _.collect(stringRecordList, stringRecordListPropertySelectingIterator, context); // $ExpectType string[]

    _(stringRecordList).collect(stringRecordListPropertySelectingIterator); // $ExpectType string[]
    _(stringRecordList).collect(stringRecordListPropertySelectingIterator, context); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordList).collect(stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(stringRecordList).collect(stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<string[], string>

    _.map(stringRecordDictionary, stringRecordDictionaryPropertySelectingIterator); // $ExpectType string[]
    _.map(stringRecordDictionary, stringRecordDictionaryPropertySelectingIterator, context); // $ExpectType string[]

    _(stringRecordDictionary).map(stringRecordDictionaryPropertySelectingIterator); // $ExpectType string[]
    _(stringRecordDictionary).map(stringRecordDictionaryPropertySelectingIterator, context); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordDictionary).map(stringRecordDictionaryPropertySelectingIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(stringRecordDictionary).map(stringRecordDictionaryPropertySelectingIterator, context)); // $ExpectType ChainType<string[], string>

    _.collect(stringRecordDictionary, stringRecordDictionaryPropertySelectingIterator); // $ExpectType string[]
    _.collect(stringRecordDictionary, stringRecordDictionaryPropertySelectingIterator, context); // $ExpectType string[]

    _(stringRecordDictionary).collect(stringRecordDictionaryPropertySelectingIterator); // $ExpectType string[]
    _(stringRecordDictionary).collect(stringRecordDictionaryPropertySelectingIterator, context); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordDictionary).collect(stringRecordDictionaryPropertySelectingIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(stringRecordDictionary).collect(stringRecordDictionaryPropertySelectingIterator, context)); // $ExpectType ChainType<string[], string>

    _.map(simpleString, stringListModifyingIterator); // $ExpectType string[]
    _.map(simpleString, stringListModifyingIterator, context); // $ExpectType string[]

    _(simpleString).map(stringListModifyingIterator); // $ExpectType string[]
    _(simpleString).map(stringListModifyingIterator, context); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).map(stringListModifyingIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(simpleString).map(stringListModifyingIterator, context)); // $ExpectType ChainType<string[], string>

    _.collect(simpleString, stringListModifyingIterator); // $ExpectType string[]
    _.collect(simpleString, stringListModifyingIterator, context); // $ExpectType string[]

    _(simpleString).collect(stringListModifyingIterator); // $ExpectType string[]
    _(simpleString).collect(stringListModifyingIterator, context); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).collect(stringListModifyingIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(simpleString).collect(stringListModifyingIterator, context)); // $ExpectType ChainType<string[], string>

    // partial object iterator with a non-nullable single type
    _.map(stringRecordArray, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordArray).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordArray).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(stringRecordArray, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordArray).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordArray).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(stringRecordList, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordList).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordList).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(stringRecordList, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordList).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordList).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(stringRecordDictionary, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordDictionary).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordDictionary).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(stringRecordDictionary, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordDictionary).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordDictionary).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iterator with a non-nullable intersecting type union
    _.map(intersectingPropertiesArray, partialStringRecord); // $ExpectType boolean[]

    _(intersectingPropertiesArray).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(intersectingPropertiesArray).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(intersectingPropertiesArray, partialStringRecord); // $ExpectType boolean[]

    _(intersectingPropertiesArray).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(intersectingPropertiesArray).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(intersectingPropertiesList, partialStringRecord); // $ExpectType boolean[]

    _(intersectingPropertiesList).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(intersectingPropertiesList).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(intersectingPropertiesList, partialStringRecord); // $ExpectType boolean[]

    _(intersectingPropertiesList).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(intersectingPropertiesList).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(intersectingPropertiesDictionary, partialStringRecord); // $ExpectType boolean[]

    _(intersectingPropertiesDictionary).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(intersectingPropertiesDictionary).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(intersectingPropertiesDictionary, partialStringRecord); // $ExpectType boolean[]

    _(intersectingPropertiesDictionary).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(intersectingPropertiesDictionary).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iterator with a nullable type union
    _.map(stringRecordOrUndefinedArray, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordOrUndefinedArray).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordOrUndefinedArray).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(stringRecordOrUndefinedArray, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordOrUndefinedArray).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordOrUndefinedArray).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(stringRecordOrUndefinedList, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordOrUndefinedList).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordOrUndefinedList).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(stringRecordOrUndefinedList, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordOrUndefinedList).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordOrUndefinedList).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(stringRecordOrUndefinedDictionary, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordOrUndefinedDictionary).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordOrUndefinedDictionary).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(stringRecordOrUndefinedDictionary, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordOrUndefinedDictionary).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordOrUndefinedDictionary).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iterator with a non-nullable non-intersecting type union
    _.map(nonIntersectingPropertiesArray, partialStringRecord); // $ExpectType boolean[]

    _(nonIntersectingPropertiesArray).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(nonIntersectingPropertiesArray).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(nonIntersectingPropertiesArray, partialStringRecord); // $ExpectType boolean[]

    _(nonIntersectingPropertiesArray).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(nonIntersectingPropertiesArray).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(nonIntersectingPropertiesList, partialStringRecord); // $ExpectType boolean[]

    _(nonIntersectingPropertiesList).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(nonIntersectingPropertiesList).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(nonIntersectingPropertiesList, partialStringRecord); // $ExpectType boolean[]

    _(nonIntersectingPropertiesList).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(nonIntersectingPropertiesList).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(nonIntersectingPropertiesDictionary, partialStringRecord); // $ExpectType boolean[]

    _(nonIntersectingPropertiesDictionary).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(nonIntersectingPropertiesDictionary).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(nonIntersectingPropertiesDictionary, partialStringRecord); // $ExpectType boolean[]

    _(nonIntersectingPropertiesDictionary).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(nonIntersectingPropertiesDictionary).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iterator of type any
    _.map(stringRecordArray as any, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordArray as any).map(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordArray as any).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.collect(stringRecordArray as any, partialStringRecord); // $ExpectType boolean[]

    _(stringRecordArray as any).collect(partialStringRecord); // $ExpectType boolean[]

    extractChainTypes(_.chain(stringRecordArray as any).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // property name iterator with a non-nullable single type
    _.map(stringRecordArray, stringRecordProperty); // $ExpectType string[]

    _(stringRecordArray).map(stringRecordProperty); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordArray).map(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    _.collect(stringRecordArray, stringRecordProperty); // $ExpectType string[]

    _(stringRecordArray).collect(stringRecordProperty); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordArray).collect(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    _.map(stringRecordList, stringRecordProperty); // $ExpectType string[]

    _(stringRecordList).map(stringRecordProperty); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordList).map(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    _.collect(stringRecordList, stringRecordProperty); // $ExpectType string[]

    _(stringRecordList).collect(stringRecordProperty); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordList).collect(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    _.map(stringRecordDictionary, stringRecordProperty); // $ExpectType string[]

    _(stringRecordDictionary).map(stringRecordProperty); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordDictionary).map(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    _.collect(stringRecordDictionary, stringRecordProperty); // $ExpectType string[]

    _(stringRecordDictionary).collect(stringRecordProperty); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordDictionary).collect(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    // property name iterator with a non-nullable intersecting type union
    _.map(intersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | boolean)[]

    _(intersectingPropertiesArray).map(stringRecordProperty); // $ExpectType (string | boolean)[]

    extractChainTypes(_.chain(intersectingPropertiesArray).map(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    _.collect(intersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | boolean)[]

    _(intersectingPropertiesArray).collect(stringRecordProperty); // $ExpectType (string | boolean)[]

    extractChainTypes(_.chain(intersectingPropertiesArray).collect(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    _.map(intersectingPropertiesList, stringRecordProperty); // $ExpectType (string | boolean)[]

    _(intersectingPropertiesList).map(stringRecordProperty); // $ExpectType (string | boolean)[]

    extractChainTypes(_.chain(intersectingPropertiesList).map(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    _.collect(intersectingPropertiesList, stringRecordProperty); // $ExpectType (string | boolean)[]

    _(intersectingPropertiesList).collect(stringRecordProperty); // $ExpectType (string | boolean)[]

    extractChainTypes(_.chain(intersectingPropertiesList).collect(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    _.map(intersectingPropertiesDictionary, stringRecordProperty); // $ExpectType (string | boolean)[]

    _(intersectingPropertiesDictionary).map(stringRecordProperty); // $ExpectType (string | boolean)[]

    extractChainTypes(_.chain(intersectingPropertiesDictionary).map(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    _.collect(intersectingPropertiesDictionary, stringRecordProperty); // $ExpectType (string | boolean)[]

    _(intersectingPropertiesDictionary).collect(stringRecordProperty); // $ExpectType (string | boolean)[]

    extractChainTypes(_.chain(intersectingPropertiesDictionary).collect(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    // property name iterator with a nullable type union
    _.map(stringRecordOrUndefinedArray, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(stringRecordOrUndefinedArray).map(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(stringRecordOrUndefinedArray).map(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.collect(stringRecordOrUndefinedArray, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(stringRecordOrUndefinedArray).collect(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(stringRecordOrUndefinedArray).collect(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.map(stringRecordOrUndefinedList, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(stringRecordOrUndefinedList).map(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(stringRecordOrUndefinedList).map(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.collect(stringRecordOrUndefinedList, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(stringRecordOrUndefinedList).collect(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(stringRecordOrUndefinedList).collect(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.map(stringRecordOrUndefinedDictionary, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(stringRecordOrUndefinedDictionary).map(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(stringRecordOrUndefinedDictionary).map(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.collect(stringRecordOrUndefinedDictionary, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(stringRecordOrUndefinedDictionary).collect(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(stringRecordOrUndefinedDictionary).collect(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    // property name iterator with a non-nullable non-intersecting type union
    _.map(nonIntersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(nonIntersectingPropertiesArray).map(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(nonIntersectingPropertiesArray).map(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.collect(nonIntersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(nonIntersectingPropertiesArray).collect(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(nonIntersectingPropertiesArray).collect(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.map(nonIntersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(nonIntersectingPropertiesArray).map(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(nonIntersectingPropertiesArray).map(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.collect(nonIntersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(nonIntersectingPropertiesArray).collect(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(nonIntersectingPropertiesArray).collect(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.map(nonIntersectingPropertiesDictionary, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(nonIntersectingPropertiesDictionary).map(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(nonIntersectingPropertiesDictionary).map(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.collect(nonIntersectingPropertiesDictionary, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(nonIntersectingPropertiesDictionary).collect(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(nonIntersectingPropertiesDictionary).collect(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    // property name iterator with type any
    // specifying any as T causes the result to be any[], which isn't ideal, but on the other hand getting that result involves choosing
    // to specify any in the first place
    _.map(stringRecordArray as any, stringRecordProperty); // $ExpectType any[]

    _(stringRecordArray as any).map(stringRecordProperty); // $ExpectType any[]

    extractChainTypes(_.chain(stringRecordArray as any).map(stringRecordProperty)); // $ExpectType ChainType<any[], any>

    _.collect(stringRecordArray as any, stringRecordProperty); // $ExpectType any[]

    _(stringRecordArray as any).collect(stringRecordProperty); // $ExpectType any[]

    extractChainTypes(_.chain(stringRecordArray as any).collect(stringRecordProperty)); // $ExpectType ChainType<any[], any>
}

// reduce, foldl, inject
{
    const stringMemo = '';
    const dictionaryMemo: _.Dictionary<number> = {};

    _.reduce(stringRecordArray, stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.reduce(stringRecordArray, stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordArray).reduce(stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordArray).reduce(stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordArray).reduce(stringRecordListPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordArray).reduce(stringRecordListPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.foldl(stringRecordArray, stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.foldl(stringRecordArray, stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordArray).foldl(stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordArray).foldl(stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordArray).foldl(stringRecordListPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordArray).foldl(stringRecordListPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.inject(stringRecordArray, stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.inject(stringRecordArray, stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordArray).inject(stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordArray).inject(stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordArray).inject(stringRecordListPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordArray).inject(stringRecordListPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.reduce(stringRecordList, stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.reduce(stringRecordList, stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordList).reduce(stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordList).reduce(stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordList).reduce(stringRecordListPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordList).reduce(stringRecordListPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.foldl(stringRecordList, stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.foldl(stringRecordList, stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordList).foldl(stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordList).foldl(stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordList).foldl(stringRecordListPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordList).foldl(stringRecordListPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.inject(stringRecordList, stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.inject(stringRecordList, stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordList).inject(stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordList).inject(stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordList).inject(stringRecordListPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordList).inject(stringRecordListPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.reduce(stringRecordDictionary, stringRecordDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _.reduce(stringRecordDictionary, stringRecordDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordDictionary).reduce(stringRecordDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordDictionary).reduce(stringRecordDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordDictionary).reduce(stringRecordDictionaryPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordDictionary).reduce(stringRecordDictionaryPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.foldl(stringRecordDictionary, stringRecordDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _.foldl(stringRecordDictionary, stringRecordDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordDictionary).foldl(stringRecordDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordDictionary).foldl(stringRecordDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordDictionary).foldl(stringRecordDictionaryPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordDictionary).foldl(stringRecordDictionaryPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.inject(stringRecordDictionary, stringRecordDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _.inject(stringRecordDictionary, stringRecordDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordDictionary).inject(stringRecordDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordDictionary).inject(stringRecordDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordDictionary).inject(stringRecordDictionaryPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordDictionary).inject(stringRecordDictionaryPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.reduce(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.reduce(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _(simpleString).reduce(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).reduce(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(simpleString).reduce(stringListMemoIterator, dictionaryMemo)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(simpleString).reduce(stringListMemoIterator, dictionaryMemo, context)); // $ExpectType ChainType<Dictionary<number>, number>

    _.foldl(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.foldl(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _(simpleString).foldl(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).foldl(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(simpleString).foldl(stringListMemoIterator, dictionaryMemo)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(simpleString).foldl(stringListMemoIterator, dictionaryMemo, context)); // $ExpectType ChainType<Dictionary<number>, number>

    _.inject(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.inject(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _(simpleString).inject(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).inject(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(simpleString).inject(stringListMemoIterator, dictionaryMemo)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(simpleString).inject(stringListMemoIterator, dictionaryMemo, context)); // $ExpectType ChainType<Dictionary<number>, number>
}

// reduceRight, foldr
{
    const stringMemo = '';
    const dictionaryMemo: _.Dictionary<number> = {};

    _.reduceRight(stringRecordArray, stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.reduceRight(stringRecordArray, stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordArray).reduceRight(stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordArray).reduceRight(stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordArray).reduceRight(stringRecordListPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordArray).reduceRight(stringRecordListPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.foldr(stringRecordArray, stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.foldr(stringRecordArray, stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordArray).foldr(stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordArray).foldr(stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordArray).foldr(stringRecordListPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordArray).foldr(stringRecordListPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.reduceRight(stringRecordList, stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.reduceRight(stringRecordList, stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordList).reduceRight(stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordList).reduceRight(stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordList).reduceRight(stringRecordListPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordList).reduceRight(stringRecordListPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.foldr(stringRecordList, stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.foldr(stringRecordList, stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordList).foldr(stringRecordListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordList).foldr(stringRecordListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordList).foldr(stringRecordListPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordList).foldr(stringRecordListPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.reduceRight(stringRecordDictionary, stringRecordDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _.reduceRight(stringRecordDictionary, stringRecordDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordDictionary).reduceRight(stringRecordDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordDictionary).reduceRight(stringRecordDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordDictionary).reduceRight(stringRecordDictionaryPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordDictionary).reduceRight(stringRecordDictionaryPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.foldr(stringRecordDictionary, stringRecordDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _.foldr(stringRecordDictionary, stringRecordDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(stringRecordDictionary).foldr(stringRecordDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _(stringRecordDictionary).foldr(stringRecordDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    extractChainTypes(_.chain(stringRecordDictionary).foldr(stringRecordDictionaryPropertyMemoIterator, stringMemo)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(stringRecordDictionary).foldr(stringRecordDictionaryPropertyMemoIterator, stringMemo, context)); // $ExpectType ChainType<string, string>

    _.reduceRight(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.reduceRight(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _(simpleString).reduceRight(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).reduceRight(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(simpleString).reduceRight(stringListMemoIterator, dictionaryMemo)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(simpleString).reduceRight(stringListMemoIterator, dictionaryMemo, context)); // $ExpectType ChainType<Dictionary<number>, number>

    _.foldr(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.foldr(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _(simpleString).foldr(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).foldr(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(simpleString).foldr(stringListMemoIterator, dictionaryMemo)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(simpleString).foldr(stringListMemoIterator, dictionaryMemo, context)); // $ExpectType ChainType<Dictionary<number>, number>
}

// find, detect
{
    // function iterator
    _.find(stringRecordArray, stringRecordListPropertyComparingIterator); // $ExpectType StringRecord | undefined
    _.find(stringRecordArray, stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord | undefined

    _(stringRecordArray).find(stringRecordListPropertyComparingIterator); // $ExpectType StringRecord | undefined
    _(stringRecordArray).find(stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).find(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<StringRecord | undefined, never>
    extractChainTypes(_.chain(stringRecordArray).find(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.detect(stringRecordArray, stringRecordListPropertyComparingIterator); // $ExpectType StringRecord | undefined
    _.detect(stringRecordArray, stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord | undefined

    _(stringRecordArray).detect(stringRecordListPropertyComparingIterator); // $ExpectType StringRecord | undefined
    _(stringRecordArray).detect(stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordArray).detect(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<StringRecord | undefined, never>
    extractChainTypes(_.chain(stringRecordArray).detect(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.find(stringRecordList, stringRecordListPropertyComparingIterator); // $ExpectType StringRecord | undefined
    _.find(stringRecordList, stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord | undefined

    _(stringRecordList).find(stringRecordListPropertyComparingIterator); // $ExpectType StringRecord | undefined
    _(stringRecordList).find(stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).find(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<StringRecord | undefined, never>
    extractChainTypes(_.chain(stringRecordList).find(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.detect(stringRecordList, stringRecordListPropertyComparingIterator); // $ExpectType StringRecord | undefined
    _.detect(stringRecordList, stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord | undefined

    _(stringRecordList).detect(stringRecordListPropertyComparingIterator); // $ExpectType StringRecord | undefined
    _(stringRecordList).detect(stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordList).detect(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<StringRecord | undefined, never>
    extractChainTypes(_.chain(stringRecordList).detect(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.find(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator); // $ExpectType StringRecord | undefined
    _.find(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType StringRecord | undefined

    _(stringRecordDictionary).find(stringRecordDictionaryPropertyComparingIterator); // $ExpectType StringRecord | undefined
    _(stringRecordDictionary).find(stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordDictionary).find(stringRecordDictionaryPropertyComparingIterator)); // $ExpectType ChainType<StringRecord | undefined, never>
    extractChainTypes(_.chain(stringRecordDictionary).find(stringRecordDictionaryPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.detect(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator); // $ExpectType StringRecord | undefined
    _.detect(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType StringRecord | undefined

    _(stringRecordDictionary).detect(stringRecordDictionaryPropertyComparingIterator); // $ExpectType StringRecord | undefined
    _(stringRecordDictionary).detect(stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType StringRecord | undefined

    extractChainTypes(_.chain(stringRecordDictionary).detect(stringRecordDictionaryPropertyComparingIterator)); // $ExpectType ChainType<StringRecord | undefined, never>
    extractChainTypes(_.chain(stringRecordDictionary).detect(stringRecordDictionaryPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    _.find(simpleString, stringListComparingIterator); // $ExpectType string | undefined
    _.find(simpleString, stringListComparingIterator, context); // $ExpectType string | undefined

    _(simpleString).find(stringListComparingIterator); // $ExpectType string | undefined
    _(simpleString).find(stringListComparingIterator, context); // $ExpectType string | undefined

    extractChainTypes(_.chain(simpleString).find(stringListComparingIterator)); // $ExpectType ChainType<string | undefined, string>
    extractChainTypes(_.chain(simpleString).find(stringListComparingIterator, context)); // $ExpectType ChainType<string | undefined, string>

    _.detect(simpleString, stringListComparingIterator); // $ExpectType string | undefined
    _.detect(simpleString, stringListComparingIterator, context); // $ExpectType string | undefined

    _(simpleString).detect(stringListComparingIterator); // $ExpectType string | undefined
    _(simpleString).detect(stringListComparingIterator, context); // $ExpectType string | undefined

    extractChainTypes(_.chain(simpleString).detect(stringListComparingIterator)); // $ExpectType ChainType<string | undefined, string>
    extractChainTypes(_.chain(simpleString).detect(stringListComparingIterator, context)); // $ExpectType ChainType<string | undefined, string>

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
    // function iterator
    _.filter(stringRecordArray, stringRecordListPropertyComparingIterator); // $ExpectType StringRecord[]
    _.filter(stringRecordArray, stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordArray).filter(stringRecordListPropertyComparingIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).filter(stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).filter(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).filter(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.select(stringRecordArray, stringRecordListPropertyComparingIterator); // $ExpectType StringRecord[]
    _.select(stringRecordArray, stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordArray).select(stringRecordListPropertyComparingIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).select(stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).select(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).select(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(stringRecordList, stringRecordListPropertyComparingIterator); // $ExpectType StringRecord[]
    _.filter(stringRecordList, stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordList).filter(stringRecordListPropertyComparingIterator); // $ExpectType StringRecord[]
    _(stringRecordList).filter(stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).filter(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).filter(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.select(stringRecordList, stringRecordListPropertyComparingIterator); // $ExpectType StringRecord[]
    _.select(stringRecordList, stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordList).select(stringRecordListPropertyComparingIterator); // $ExpectType StringRecord[]
    _(stringRecordList).select(stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).select(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).select(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator); // $ExpectType StringRecord[]
    _.filter(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordDictionary).filter(stringRecordDictionaryPropertyComparingIterator); // $ExpectType StringRecord[]
    _(stringRecordDictionary).filter(stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).filter(stringRecordDictionaryPropertyComparingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordDictionary).filter(stringRecordDictionaryPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.select(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator); // $ExpectType StringRecord[]
    _.select(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordDictionary).select(stringRecordDictionaryPropertyComparingIterator); // $ExpectType StringRecord[]
    _(stringRecordDictionary).select(stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).select(stringRecordDictionaryPropertyComparingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordDictionary).select(stringRecordDictionaryPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(simpleString, stringListComparingIterator); // $ExpectType string[]
    _.filter(simpleString, stringListComparingIterator, context); // $ExpectType string[]

    _(simpleString).filter(stringListComparingIterator); // $ExpectType string[]
    _(simpleString).filter(stringListComparingIterator, context); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).filter(stringListComparingIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(simpleString).filter(stringListComparingIterator, context)); // $ExpectType ChainType<string[], string>

    _.select(simpleString, stringListComparingIterator); // $ExpectType string[]
    _.select(simpleString, stringListComparingIterator, context); // $ExpectType string[]

    _(simpleString).select(stringListComparingIterator); // $ExpectType string[]
    _(simpleString).select(stringListComparingIterator, context); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).select(stringListComparingIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(simpleString).select(stringListComparingIterator, context)); // $ExpectType ChainType<string[], string>

    // partial object iterator
    _.filter(stringRecordArray, partialStringRecord); // $ExpectType StringRecord[]

    _(stringRecordArray).filter(partialStringRecord); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).filter(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.select(stringRecordArray, partialStringRecord); // $ExpectType StringRecord[]

    _(stringRecordArray).select(partialStringRecord); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).select(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(stringRecordList, partialStringRecord); // $ExpectType StringRecord[]

    _(stringRecordList).filter(partialStringRecord); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).filter(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.select(stringRecordList, partialStringRecord); // $ExpectType StringRecord[]

    _(stringRecordList).select(partialStringRecord); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).select(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord[]

    _(stringRecordDictionary).filter(partialStringRecord); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).filter(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.select(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord[]

    _(stringRecordDictionary).select(partialStringRecord); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).select(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property name iterator
    _.filter(stringRecordArray, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordArray).filter(stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).filter(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.select(stringRecordArray, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordArray).select(stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).select(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordList).filter(stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).filter(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.select(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordList).select(stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).select(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordDictionary).filter(stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).filter(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.select(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecord[]

    _(stringRecordDictionary).select(stringRecordProperty); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).select(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
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
    _.reject(stringRecordArray, stringRecordListPropertyComparingIterator); // $ExpectType StringRecord[]
    _.reject(stringRecordArray, stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordArray).reject(stringRecordListPropertyComparingIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).reject(stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).reject(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).reject(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.reject(stringRecordList, stringRecordListPropertyComparingIterator); // $ExpectType StringRecord[]
    _.reject(stringRecordList, stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordList).reject(stringRecordListPropertyComparingIterator); // $ExpectType StringRecord[]
    _(stringRecordList).reject(stringRecordListPropertyComparingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).reject(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).reject(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.reject(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator); // $ExpectType StringRecord[]
    _.reject(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordDictionary).reject(stringRecordDictionaryPropertyComparingIterator); // $ExpectType StringRecord[]
    _(stringRecordDictionary).reject(stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).reject(stringRecordDictionaryPropertyComparingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordDictionary).reject(stringRecordDictionaryPropertyComparingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.reject(simpleString, stringListComparingIterator); // $ExpectType string[]
    _.reject(simpleString, stringListComparingIterator, context); // $ExpectType string[]

    _(simpleString).reject(stringListComparingIterator); // $ExpectType string[]
    _(simpleString).reject(stringListComparingIterator, context); // $ExpectType string[]

    extractChainTypes(_.chain(simpleString).reject(stringListComparingIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(simpleString).reject(stringListComparingIterator, context)); // $ExpectType ChainType<string[], string>

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
    _.every(stringRecordArray, stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _.every(stringRecordArray, stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    _(stringRecordArray).every(stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _(stringRecordArray).every(stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).every(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordArray).every(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.all(stringRecordArray, stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _.all(stringRecordArray, stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    _(stringRecordArray).all(stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _(stringRecordArray).all(stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).all(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordArray).all(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.every(stringRecordList, stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _.every(stringRecordList, stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    _(stringRecordList).every(stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _(stringRecordList).every(stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).every(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordList).every(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.all(stringRecordList, stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _.all(stringRecordList, stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    _(stringRecordList).all(stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _(stringRecordList).all(stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).all(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordList).all(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.every(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator); // $ExpectType boolean
    _.every(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    _(stringRecordDictionary).every(stringRecordDictionaryPropertyComparingIterator); // $ExpectType boolean
    _(stringRecordDictionary).every(stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).every(stringRecordDictionaryPropertyComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordDictionary).every(stringRecordDictionaryPropertyComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.all(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator); // $ExpectType boolean
    _.all(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    _(stringRecordDictionary).all(stringRecordDictionaryPropertyComparingIterator); // $ExpectType boolean
    _(stringRecordDictionary).all(stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).all(stringRecordDictionaryPropertyComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordDictionary).all(stringRecordDictionaryPropertyComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.every(simpleString, stringListComparingIterator); // $ExpectType boolean
    _.every(simpleString, stringListComparingIterator, context); // $ExpectType boolean

    _(simpleString).every(stringListComparingIterator); // $ExpectType boolean
    _(simpleString).every(stringListComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(simpleString).every(stringListComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(simpleString).every(stringListComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.all(simpleString, stringListComparingIterator); // $ExpectType boolean
    _.all(simpleString, stringListComparingIterator, context); // $ExpectType boolean

    _(simpleString).all(stringListComparingIterator); // $ExpectType boolean
    _(simpleString).all(stringListComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(simpleString).all(stringListComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(simpleString).all(stringListComparingIterator, context)); // $ExpectType ChainType<boolean, never>

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
    _.some(stringRecordArray, stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _.some(stringRecordArray, stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    _(stringRecordArray).some(stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _(stringRecordArray).some(stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).some(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordArray).some(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.any(stringRecordArray, stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _.any(stringRecordArray, stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    _(stringRecordArray).any(stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _(stringRecordArray).any(stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordArray).any(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordArray).any(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.some(stringRecordList, stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _.some(stringRecordList, stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    _(stringRecordList).some(stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _(stringRecordList).some(stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).some(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordList).some(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.any(stringRecordList, stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _.any(stringRecordList, stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    _(stringRecordList).any(stringRecordListPropertyComparingIterator); // $ExpectType boolean
    _(stringRecordList).any(stringRecordListPropertyComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordList).any(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordList).any(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.some(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator); // $ExpectType boolean
    _.some(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    _(stringRecordDictionary).some(stringRecordDictionaryPropertyComparingIterator); // $ExpectType boolean
    _(stringRecordDictionary).some(stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).some(stringRecordDictionaryPropertyComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordDictionary).some(stringRecordDictionaryPropertyComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.any(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator); // $ExpectType boolean
    _.any(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    _(stringRecordDictionary).any(stringRecordDictionaryPropertyComparingIterator); // $ExpectType boolean
    _(stringRecordDictionary).any(stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(stringRecordDictionary).any(stringRecordDictionaryPropertyComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(stringRecordDictionary).any(stringRecordDictionaryPropertyComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.some(simpleString, stringListComparingIterator); // $ExpectType boolean
    _.some(simpleString, stringListComparingIterator, context); // $ExpectType boolean

    _(simpleString).some(stringListComparingIterator); // $ExpectType boolean
    _(simpleString).some(stringListComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(simpleString).some(stringListComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(simpleString).some(stringListComparingIterator, context)); // $ExpectType ChainType<boolean, never>

    _.any(simpleString, stringListComparingIterator); // $ExpectType boolean
    _.any(simpleString, stringListComparingIterator, context); // $ExpectType boolean

    _(simpleString).any(stringListComparingIterator); // $ExpectType boolean
    _(simpleString).any(stringListComparingIterator, context); // $ExpectType boolean

    extractChainTypes(_.chain(simpleString).any(stringListComparingIterator)); // $ExpectType ChainType<boolean, never>
    extractChainTypes(_.chain(simpleString).any(stringListComparingIterator, context)); // $ExpectType ChainType<boolean, never>

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
// once TS 3.6 is reached as a minimum version, as a breaking change, consider updating invoke to be the following:
// type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
{
    const functionName = 'substring';
    const simpleStringArg = 1;
    const stringRecordArg = -1;

    // without parameters
    _.invoke(noParameterFunctionRecordArray, stringRecordProperty); // $ExpectType any[]

    _(noParameterFunctionRecordArray).invoke(stringRecordProperty); // $ExpectType any[]

    extractChainTypes(_.chain(noParameterFunctionRecordArray).invoke(stringRecordProperty)); // $ExpectType ChainType<any[], any>

    _.invoke(noParameterFunctionRecordList, stringRecordProperty); // $ExpectType any[]

    _(noParameterFunctionRecordList).invoke(stringRecordProperty); // $ExpectType any[]

    extractChainTypes(_.chain(noParameterFunctionRecordList).invoke(stringRecordProperty)); // $ExpectType ChainType<any[], any>

    _.invoke(noParameterFunctionRecordDictionary, stringRecordProperty); // $ExpectType any[]

    _(noParameterFunctionRecordDictionary).invoke(stringRecordProperty); // $ExpectType any[]

    extractChainTypes(_.chain(noParameterFunctionRecordDictionary).invoke(stringRecordProperty)); // $ExpectType ChainType<any[], any>

    _.invoke(simpleString, stringRecordProperty); // $ExpectType any[]

    _(simpleString).invoke(stringRecordProperty); // $ExpectType any[]

    extractChainTypes(_.chain(simpleString).invoke(stringRecordProperty)); // $ExpectType ChainType<any[], any>

    // with parameters
    _.invoke(oneParameterFunctionRecordArray, stringRecordProperty, stringRecordArg); // $ExpectType any[]

    _(oneParameterFunctionRecordArray).invoke(stringRecordProperty, stringRecordArg); // $ExpectType any[]

    extractChainTypes(_.chain(oneParameterFunctionRecordArray).invoke(stringRecordProperty, stringRecordArg)); // $ExpectType ChainType<any[], any>

    _.invoke(oneParameterFunctionRecordList, stringRecordProperty, stringRecordArg); // $ExpectType any[]

    _(oneParameterFunctionRecordList).invoke(stringRecordProperty, stringRecordArg); // $ExpectType any[]

    extractChainTypes(_.chain(oneParameterFunctionRecordList).invoke(stringRecordProperty, stringRecordArg)); // $ExpectType ChainType<any[], any>

    _.invoke(oneParameterFunctionRecordDictionary, stringRecordProperty, stringRecordArg); // $ExpectType any[]

    _(oneParameterFunctionRecordDictionary).invoke(stringRecordProperty, stringRecordArg); // $ExpectType any[]

    extractChainTypes(_.chain(oneParameterFunctionRecordDictionary).invoke(stringRecordProperty, stringRecordArg)); // $ExpectType ChainType<any[], any>

    _.invoke(simpleString, functionName, simpleStringArg); // $ExpectType any[]

    _(simpleString).invoke(functionName, simpleStringArg); // $ExpectType any[]

    extractChainTypes(_.chain(simpleString).invoke(functionName, simpleStringArg)); // $ExpectType ChainType<any[], any>
}

// pluck
{
    // property name iterator with a non-nullable single type
    _.pluck(stringRecordArray, stringRecordProperty); // $ExpectType string[]

    _(stringRecordArray).pluck(stringRecordProperty); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordArray).pluck(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    _.pluck(stringRecordList, stringRecordProperty); // $ExpectType string[]

    _(stringRecordList).pluck(stringRecordProperty); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordList).pluck(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    _.pluck(stringRecordDictionary, stringRecordProperty); // $ExpectType string[]

    _(stringRecordDictionary).pluck(stringRecordProperty); // $ExpectType string[]

    extractChainTypes(_.chain(stringRecordDictionary).pluck(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    // property name iterator with a non-nullable intersecting type union
    _.pluck(intersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | boolean)[]

    _(intersectingPropertiesArray).pluck(stringRecordProperty); // $ExpectType (string | boolean)[]

    extractChainTypes(_.chain(intersectingPropertiesArray).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    _.pluck(intersectingPropertiesList, stringRecordProperty); // $ExpectType (string | boolean)[]

    _(intersectingPropertiesList).pluck(stringRecordProperty); // $ExpectType (string | boolean)[]

    extractChainTypes(_.chain(intersectingPropertiesList).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    _.pluck(intersectingPropertiesDictionary, stringRecordProperty); // $ExpectType (string | boolean)[]

    _(intersectingPropertiesDictionary).pluck(stringRecordProperty); // $ExpectType (string | boolean)[]

    extractChainTypes(_.chain(intersectingPropertiesDictionary).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    // property name iterator with a nullable type union
    _.pluck(stringRecordOrUndefinedArray, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(stringRecordOrUndefinedArray).pluck(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(stringRecordOrUndefinedArray).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.pluck(stringRecordOrUndefinedList, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(stringRecordOrUndefinedList).pluck(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(stringRecordOrUndefinedList).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.pluck(stringRecordOrUndefinedDictionary, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(stringRecordOrUndefinedDictionary).pluck(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(stringRecordOrUndefinedDictionary).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    // property name iterator with a non-nullable non-intersecting type union
    _.pluck(nonIntersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(nonIntersectingPropertiesArray).pluck(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(nonIntersectingPropertiesArray).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.pluck(nonIntersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(nonIntersectingPropertiesArray).pluck(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(nonIntersectingPropertiesArray).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.pluck(nonIntersectingPropertiesDictionary, stringRecordProperty); // $ExpectType (string | undefined)[]

    _(nonIntersectingPropertiesDictionary).pluck(stringRecordProperty); // $ExpectType (string | undefined)[]

    extractChainTypes(_.chain(nonIntersectingPropertiesDictionary).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    // property name iterator with type any
    // specifying any as T causes the result to be any[], which isn't ideal, but on the other hand getting that result involves choosing
    // to specify any in the first place
    _.pluck(stringRecordArray as any, stringRecordProperty); // $ExpectType any[]

    _(stringRecordArray as any).pluck(stringRecordProperty); // $ExpectType any[]

    extractChainTypes(_.chain(stringRecordArray as any).pluck(stringRecordProperty)); // $ExpectType ChainType<any[], any>
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
    _.max(numberRecordArray, numberRecordListPropertySelectingIterator); // $ExpectType number | NumberRecord
    _.max(numberRecordArray, numberRecordListPropertySelectingIterator, context); // $ExpectType number | NumberRecord

    _(numberRecordArray).max(numberRecordListPropertySelectingIterator); // $ExpectType number | NumberRecord
    _(numberRecordArray).max(numberRecordListPropertySelectingIterator, context); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordArray).max(numberRecordListPropertySelectingIterator)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordArray).max(numberRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<number | NumberRecord, never>

    _.max(numberRecordList, numberRecordListPropertySelectingIterator); // $ExpectType number | NumberRecord
    _.max(numberRecordList, numberRecordListPropertySelectingIterator, context); // $ExpectType number | NumberRecord

    _(numberRecordList).max(numberRecordListPropertySelectingIterator); // $ExpectType number | NumberRecord
    _(numberRecordList).max(numberRecordListPropertySelectingIterator, context); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordList).max(numberRecordListPropertySelectingIterator)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordList).max(numberRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<number | NumberRecord, never>

    _.max(numberRecordDictionary, numberRecordDictionaryPropertySelectingIterator); // $ExpectType number | NumberRecord
    _.max(numberRecordDictionary, numberRecordDictionaryPropertySelectingIterator, context); // $ExpectType number | NumberRecord

    _(numberRecordDictionary).max(numberRecordDictionaryPropertySelectingIterator); // $ExpectType number | NumberRecord
    _(numberRecordDictionary).max(numberRecordDictionaryPropertySelectingIterator, context); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordDictionary).max(numberRecordDictionaryPropertySelectingIterator)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordDictionary).max(numberRecordDictionaryPropertySelectingIterator, context)); // $ExpectType ChainType<number | NumberRecord, never>

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
    _.min(numberRecordArray, numberRecordListPropertySelectingIterator); // $ExpectType number | NumberRecord
    _.min(numberRecordArray, numberRecordListPropertySelectingIterator, context); // $ExpectType number | NumberRecord

    _(numberRecordArray).min(numberRecordListPropertySelectingIterator); // $ExpectType number | NumberRecord
    _(numberRecordArray).min(numberRecordListPropertySelectingIterator, context); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordArray).min(numberRecordListPropertySelectingIterator)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordArray).min(numberRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<number | NumberRecord, never>

    _.min(numberRecordList, numberRecordListPropertySelectingIterator); // $ExpectType number | NumberRecord
    _.min(numberRecordList, numberRecordListPropertySelectingIterator, context); // $ExpectType number | NumberRecord

    _(numberRecordList).min(numberRecordListPropertySelectingIterator); // $ExpectType number | NumberRecord
    _(numberRecordList).min(numberRecordListPropertySelectingIterator, context); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordList).min(numberRecordListPropertySelectingIterator)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordList).min(numberRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<number | NumberRecord, never>

    _.min(numberRecordDictionary, numberRecordDictionaryPropertySelectingIterator); // $ExpectType number | NumberRecord
    _.min(numberRecordDictionary, numberRecordDictionaryPropertySelectingIterator, context); // $ExpectType number | NumberRecord

    _(numberRecordDictionary).min(numberRecordDictionaryPropertySelectingIterator); // $ExpectType number | NumberRecord
    _(numberRecordDictionary).min(numberRecordDictionaryPropertySelectingIterator, context); // $ExpectType number | NumberRecord

    extractChainTypes(_.chain(numberRecordDictionary).min(numberRecordDictionaryPropertySelectingIterator)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordDictionary).min(numberRecordDictionaryPropertySelectingIterator, context)); // $ExpectType ChainType<number | NumberRecord, never>

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
    _.sortBy(stringRecordArray, stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _.sortBy(stringRecordArray, stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordArray).sortBy(stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).sortBy(stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).sortBy(stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).sortBy(stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.sortBy(stringRecordList, stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _.sortBy(stringRecordList, stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordList).sortBy(stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _(stringRecordList).sortBy(stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).sortBy(stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).sortBy(stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.sortBy(stringRecordDictionary, stringRecordDictionaryPropertySelectingIterator); // $ExpectType StringRecord[]
    _.sortBy(stringRecordDictionary, stringRecordDictionaryPropertySelectingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordDictionary).sortBy(stringRecordDictionaryPropertySelectingIterator); // $ExpectType StringRecord[]
    _(stringRecordDictionary).sortBy(stringRecordDictionaryPropertySelectingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordDictionary).sortBy(stringRecordDictionaryPropertySelectingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordDictionary).sortBy(stringRecordDictionaryPropertySelectingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

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
    // function iterator
    _.groupBy(stringRecordArray, stringRecordListPropertySelectingIterator); // $ExpectType Dictionary<StringRecord[]>
    _.groupBy(stringRecordArray, stringRecordListPropertySelectingIterator, context); // $ExpectType Dictionary<StringRecord[]>

    _(stringRecordArray).groupBy(stringRecordListPropertySelectingIterator); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordArray).groupBy(stringRecordListPropertySelectingIterator, context); // $ExpectType Dictionary<StringRecord[]>

    _.chain(stringRecordArray).groupBy(stringRecordListPropertySelectingIterator); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>
    _.chain(stringRecordArray).groupBy(stringRecordListPropertySelectingIterator, context); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    _.groupBy(stringRecordList, stringRecordListPropertySelectingIterator); // $ExpectType Dictionary<StringRecord[]>
    _.groupBy(stringRecordList, stringRecordListPropertySelectingIterator, context); // $ExpectType Dictionary<StringRecord[]>

    _(stringRecordList).groupBy(stringRecordListPropertySelectingIterator); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordList).groupBy(stringRecordListPropertySelectingIterator, context); // $ExpectType Dictionary<StringRecord[]>

    _.chain(stringRecordList).groupBy(stringRecordListPropertySelectingIterator); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>
    _.chain(stringRecordList).groupBy(stringRecordListPropertySelectingIterator, context); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    _.groupBy(stringRecordDictionary, stringRecordDictionaryPropertySelectingIterator); // $ExpectType Dictionary<StringRecord[]>
    _.groupBy(stringRecordDictionary, stringRecordDictionaryPropertySelectingIterator, context); // $ExpectType Dictionary<StringRecord[]>

    _(stringRecordDictionary).groupBy(stringRecordDictionaryPropertySelectingIterator); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordDictionary).groupBy(stringRecordDictionaryPropertySelectingIterator, context); // $ExpectType Dictionary<StringRecord[]>

    _.chain(stringRecordDictionary).groupBy(stringRecordDictionaryPropertySelectingIterator); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>
    _.chain(stringRecordDictionary).groupBy(stringRecordDictionaryPropertySelectingIterator, context); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // property name iterator
    _.groupBy(stringRecordArray, stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>

    _(stringRecordArray).groupBy(stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>

    _.chain(stringRecordArray).groupBy(stringRecordProperty); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    _.groupBy(stringRecordList, stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>

    _(stringRecordList).groupBy(stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>

    _.chain(stringRecordList).groupBy(stringRecordProperty); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    _.groupBy(stringRecordDictionary, stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>

    _(stringRecordDictionary).groupBy(stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>

    _.chain(stringRecordDictionary).groupBy(stringRecordProperty); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>
}

// indexBy
{
    // function iterator
    _.indexBy(stringRecordArray, stringRecordListPropertySelectingIterator); // $ExpectType Dictionary<StringRecord>
    _.indexBy(stringRecordArray, stringRecordListPropertySelectingIterator, context); // $ExpectType Dictionary<StringRecord>

    _(stringRecordArray).indexBy(stringRecordListPropertySelectingIterator); // $ExpectType Dictionary<StringRecord>
    _(stringRecordArray).indexBy(stringRecordListPropertySelectingIterator, context); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordArray).indexBy(stringRecordListPropertySelectingIterator); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
    _.chain(stringRecordArray).indexBy(stringRecordListPropertySelectingIterator, context); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>

    _.indexBy(stringRecordList, stringRecordListPropertySelectingIterator); // $ExpectType Dictionary<StringRecord>
    _.indexBy(stringRecordList, stringRecordListPropertySelectingIterator, context); // $ExpectType Dictionary<StringRecord>

    _(stringRecordList).indexBy(stringRecordListPropertySelectingIterator); // $ExpectType Dictionary<StringRecord>
    _(stringRecordList).indexBy(stringRecordListPropertySelectingIterator, context); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordList).indexBy(stringRecordListPropertySelectingIterator); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
    _.chain(stringRecordList).indexBy(stringRecordListPropertySelectingIterator, context); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>

    _.indexBy(stringRecordDictionary, stringRecordDictionaryPropertySelectingIterator); // $ExpectType Dictionary<StringRecord>
    _.indexBy(stringRecordDictionary, stringRecordDictionaryPropertySelectingIterator, context); // $ExpectType Dictionary<StringRecord>

    _(stringRecordDictionary).indexBy(stringRecordDictionaryPropertySelectingIterator); // $ExpectType Dictionary<StringRecord>
    _(stringRecordDictionary).indexBy(stringRecordDictionaryPropertySelectingIterator, context); // $ExpectType Dictionary<StringRecord>

    _.chain(stringRecordDictionary).indexBy(stringRecordDictionaryPropertySelectingIterator); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>
    _.chain(stringRecordDictionary).indexBy(stringRecordDictionaryPropertySelectingIterator, context); // // $ExpectType _Chain<StringRecord, Dictionary<StringRecord>>

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
    _.countBy(stringRecordArray, stringRecordListPropertySelectingIterator); // $ExpectType Dictionary<number>
    _.countBy(stringRecordArray, stringRecordListPropertySelectingIterator, context); // $ExpectType Dictionary<number>

    _(stringRecordArray).countBy(stringRecordListPropertySelectingIterator); // $ExpectType Dictionary<number>
    _(stringRecordArray).countBy(stringRecordListPropertySelectingIterator, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(stringRecordArray).countBy(stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(stringRecordArray).countBy(stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<Dictionary<number>, number>

    _.countBy(stringRecordList, stringRecordListPropertySelectingIterator); // $ExpectType Dictionary<number>
    _.countBy(stringRecordList, stringRecordListPropertySelectingIterator, context); // $ExpectType Dictionary<number>

    _(stringRecordList).countBy(stringRecordListPropertySelectingIterator); // $ExpectType Dictionary<number>
    _(stringRecordList).countBy(stringRecordListPropertySelectingIterator, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(stringRecordList).countBy(stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(stringRecordList).countBy(stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<Dictionary<number>, number>

    _.countBy(stringRecordDictionary, stringRecordDictionaryPropertySelectingIterator); // $ExpectType Dictionary<number>
    _.countBy(stringRecordDictionary, stringRecordDictionaryPropertySelectingIterator, context); // $ExpectType Dictionary<number>

    _(stringRecordDictionary).countBy(stringRecordDictionaryPropertySelectingIterator); // $ExpectType Dictionary<number>
    _(stringRecordDictionary).countBy(stringRecordDictionaryPropertySelectingIterator, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(stringRecordDictionary).countBy(stringRecordDictionaryPropertySelectingIterator)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(stringRecordDictionary).countBy(stringRecordDictionaryPropertySelectingIterator, context)); // $ExpectType ChainType<Dictionary<number>, number>

    _.countBy(simpleString, stringListSelectingIterator); // $ExpectType Dictionary<number>
    _.countBy(simpleString, stringListSelectingIterator, context); // $ExpectType Dictionary<number>

    _(simpleString).countBy(stringListSelectingIterator); // $ExpectType Dictionary<number>
    _(simpleString).countBy(stringListSelectingIterator, context); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(simpleString).countBy(stringListSelectingIterator)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(simpleString).countBy(stringListSelectingIterator, context)); // $ExpectType ChainType<Dictionary<number>, number>

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
    _.partition(stringRecordArray, stringRecordListPropertyComparingIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _.partition(stringRecordArray, stringRecordListPropertyComparingIterator, context); // $ExpectType [StringRecord[], StringRecord[]]

    _(stringRecordArray).partition(stringRecordListPropertyComparingIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordArray).partition(stringRecordListPropertyComparingIterator, context); // $ExpectType [StringRecord[], StringRecord[]]

    extractChainTypes(_.chain(stringRecordArray).partition(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>
    extractChainTypes(_.chain(stringRecordArray).partition(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    _.partition(stringRecordList, stringRecordListPropertyComparingIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _.partition(stringRecordList, stringRecordListPropertyComparingIterator, context); // $ExpectType [StringRecord[], StringRecord[]]

    _(stringRecordList).partition(stringRecordListPropertyComparingIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordList).partition(stringRecordListPropertyComparingIterator, context); // $ExpectType [StringRecord[], StringRecord[]]

    extractChainTypes(_.chain(stringRecordList).partition(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>
    extractChainTypes(_.chain(stringRecordList).partition(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    _.partition(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _.partition(stringRecordDictionary, stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType [StringRecord[], StringRecord[]]

    _(stringRecordDictionary).partition(stringRecordDictionaryPropertyComparingIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordDictionary).partition(stringRecordDictionaryPropertyComparingIterator, context); // $ExpectType [StringRecord[], StringRecord[]]

    extractChainTypes(_.chain(stringRecordDictionary).partition(stringRecordDictionaryPropertyComparingIterator)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>
    extractChainTypes(_.chain(stringRecordDictionary).partition(stringRecordDictionaryPropertyComparingIterator, context)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    _.partition(simpleString, stringListComparingIterator); // $ExpectType [string[], string[]]
    _.partition(simpleString, stringListComparingIterator, context); // $ExpectType [string[], string[]]

    _(simpleString).partition(stringListComparingIterator); // $ExpectType [string[], string[]]
    _(simpleString).partition(stringListComparingIterator, context); // $ExpectType [string[], string[]]

    extractChainTypes(_.chain(simpleString).partition(stringListComparingIterator)); // $ExpectType ChainType<[string[], string[]], string[]>
    extractChainTypes(_.chain(simpleString).partition(stringListComparingIterator, context)); // $ExpectType ChainType<[string[], string[]], string[]>

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
    const twoDimensionArray: StringRecord[][] = [stringRecordArray];
    const twoDimensionList: _.List<_.List<StringRecord>> = { 0: stringRecordList, length: 1 };
    const threeDimensionArray: StringRecord[][][] = [[stringRecordArray]];
    const threeDimensionList: _.List<_.List<_.List<StringRecord>>> = { 0: { 0: stringRecordList, length: 1 }, length: 1 };
    const fourDimensionArray: StringRecord[][][][] = [[[stringRecordArray]]];
    const fourDimensionList: _.List<_.List<_.List<_.List<StringRecord>>>> = { 0: { 0: { 0: stringRecordList, length: 1 }, length: 1 }, length: 1 };
    const mixedDimensionArray: (StringRecord | StringRecord[] | StringRecord[][])[] = [stringRecordArray[0], stringRecordArray, [stringRecordArray]];
    const stringArray: string[][] = [simpleStringArray];
    const stringList: _.List<_.List<string>> = { 0: simpleStringList, length: 1 };
    const typeUnionArray: NonIntersectingProperties[][] = [nonIntersectingPropertiesArray];
    const typeUnionList: _.List<_.List<NonIntersectingProperties>> = { 0: nonIntersectingPropertiesList, length: 1 };

    // one dimension, deep
    _.flatten(stringRecordArray); // $ExpectType StringRecord[]

    _(stringRecordArray).flatten(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.flatten(stringRecordList); // $ExpectType StringRecord[]

    _(stringRecordList).flatten(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // one dimension, shallow
    _.flatten(stringRecordArray, true); // $ExpectType StringRecord[]

    _(stringRecordArray).flatten(true); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).flatten(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.flatten(stringRecordList, true); // $ExpectType StringRecord[]

    _(stringRecordList).flatten(true); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).flatten(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // two dimensions, deep
    _.flatten(twoDimensionArray); // $ExpectType StringRecord[]

    _(twoDimensionArray).flatten(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(twoDimensionArray).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.flatten(twoDimensionList); // $ExpectType StringRecord[]

    _(twoDimensionList).flatten(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(twoDimensionList).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // two dimensions, shallow
    _.flatten(twoDimensionArray, true); // $ExpectType StringRecord[]

    _(twoDimensionArray).flatten(true); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(twoDimensionArray).flatten(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.flatten(twoDimensionList, true); // $ExpectType StringRecord[]

    _(twoDimensionList).flatten(true); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(twoDimensionList).flatten(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // three dimensions, deep
    _.flatten(threeDimensionArray); // $ExpectType StringRecord[]

    _(threeDimensionArray).flatten(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(threeDimensionArray).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.flatten(threeDimensionList); // $ExpectType StringRecord[]

    _(threeDimensionList).flatten(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(threeDimensionList).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // three dimensions, shallow
    _.flatten(threeDimensionArray, true); // $ExpectType StringRecord[][]

    _(threeDimensionArray).flatten(true); // $ExpectType StringRecord[][]

    extractChainTypes(_.chain(threeDimensionArray).flatten(true)); // $ExpectType ChainType<StringRecord[][], StringRecord[]>

    _.flatten(threeDimensionList, true); // $ExpectType List<StringRecord>[]

    _(threeDimensionList).flatten(true); // $ExpectType List<StringRecord>[]

    extractChainTypes(_.chain(threeDimensionList).flatten(true)); // $ExpectType ChainType<List<StringRecord>[], List<StringRecord>>

    // four dimensions, deep - this is where recursion gives up and results in any[]
    _.flatten(fourDimensionArray); // $ExpectType any[]

    _(fourDimensionArray).flatten(); // $ExpectType any[]

    extractChainTypes(_.chain(fourDimensionArray).flatten()); // $ExpectType ChainType<any[], any>

    _.flatten(fourDimensionList); // $ExpectType any[]

    _(fourDimensionList).flatten(); // $ExpectType any[]

    extractChainTypes(_.chain(fourDimensionList).flatten()); // $ExpectType ChainType<any[], any>

    // mixed dimensions, deep
    _.flatten(mixedDimensionArray); // $ExpectType StringRecord[]

    _(mixedDimensionArray).flatten(); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(mixedDimensionArray).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // mixed dimensions, shallow
    _.flatten(mixedDimensionArray, true); // $ExpectType (StringRecord | StringRecord[])[]

    _(mixedDimensionArray).flatten(true); // $ExpectType (StringRecord | StringRecord[])[]

    extractChainTypes(_.chain(mixedDimensionArray).flatten(true)); // $ExpectType ChainType<(StringRecord | StringRecord[])[], StringRecord | StringRecord[]>

    // string lists, deep
    _.flatten(stringArray); // $ExpectType string[]

    _(stringArray).flatten(); // $ExpectType string[]

    extractChainTypes(_.chain(stringArray).flatten()); // $ExpectType ChainType<string[], string>

    _.flatten(stringList); // $ExpectType string[]

    _(stringList).flatten(); // $ExpectType string[]

    extractChainTypes(_.chain(stringList).flatten()); // $ExpectType ChainType<string[], string>

    // string lists, shallow
    _.flatten(simpleStringList, true); // $ExpectType string[]

    _(simpleStringArray).flatten(true); // $ExpectType string[]

    extractChainTypes(_.chain(simpleStringArray).flatten(true)); // $ExpectType ChainType<string[], string>

    _.flatten(simpleStringList, true); // $ExpectType string[]

    _(simpleStringList).flatten(true); // $ExpectType string[]

    extractChainTypes(_.chain(simpleStringList).flatten(true)); // $ExpectType ChainType<string[], string>

    // type unions, deep
    _.flatten(typeUnionArray); // $ExpectType NonIntersectingProperties[]

    _(typeUnionArray).flatten(); // $ExpectType NonIntersectingProperties[]

    extractChainTypes(_.chain(typeUnionArray).flatten()); // $ExpectType ChainType<NonIntersectingProperties[], NonIntersectingProperties>

    _.flatten(typeUnionList); // $ExpectType NonIntersectingProperties[]

    _(typeUnionList).flatten(); // $ExpectType NonIntersectingProperties[]

    extractChainTypes(_.chain(typeUnionList).flatten()); // $ExpectType ChainType<NonIntersectingProperties[], NonIntersectingProperties>

    // type unions, shallow
    _.flatten(nonIntersectingPropertiesArray, true); // $ExpectType NonIntersectingProperties[]

    _(nonIntersectingPropertiesArray).flatten(true); // $ExpectType NonIntersectingProperties[]

    extractChainTypes(_.chain(nonIntersectingPropertiesArray).flatten(true)); // $ExpectType ChainType<NonIntersectingProperties[], NonIntersectingProperties>

    _.flatten(nonIntersectingPropertiesList, true); // $ExpectType NonIntersectingProperties[]

    _(nonIntersectingPropertiesList).flatten(true); // $ExpectType NonIntersectingProperties[]

    extractChainTypes(_.chain(nonIntersectingPropertiesList).flatten(true)); // $ExpectType ChainType<NonIntersectingProperties[], NonIntersectingProperties>
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
    _.uniq(stringRecordArray, true, stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _.uniq(stringRecordArray, true, stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordArray).uniq(); // $ExpectType StringRecord[]
    _(stringRecordArray).uniq(true); // $ExpectType StringRecord[]
    _(stringRecordArray).uniq(true, stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).uniq(true, stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).uniq()); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).uniq(true)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).uniq(true, stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).uniq(true, stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.unique(stringRecordArray); // $ExpectType StringRecord[]
    _.unique(stringRecordArray, true); // $ExpectType StringRecord[]
    _.unique(stringRecordArray, true, stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _.unique(stringRecordArray, true, stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordArray).unique(); // $ExpectType StringRecord[]
    _(stringRecordArray).unique(true); // $ExpectType StringRecord[]
    _(stringRecordArray).unique(true, stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).unique(true, stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordArray).unique()); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).unique(true)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).unique(true, stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).unique(true, stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.uniq(stringRecordList); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, true); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, true, stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, true, stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordList).uniq(); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true, stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true, stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).uniq()); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(true)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(true, stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(true, stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.unique(stringRecordList); // $ExpectType StringRecord[]
    _.unique(stringRecordList, stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _.unique(stringRecordList, stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]
    _.unique(stringRecordList, true); // $ExpectType StringRecord[]
    _.unique(stringRecordList, true, stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _.unique(stringRecordList, true, stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]

    _(stringRecordList).unique(); // $ExpectType StringRecord[]
    _(stringRecordList).unique(stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _(stringRecordList).unique(stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true, stringRecordListPropertySelectingIterator); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true, stringRecordListPropertySelectingIterator, context); // $ExpectType StringRecord[]

    extractChainTypes(_.chain(stringRecordList).unique()); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(true)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(true, stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(true, stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

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
    const array1: string[] = ['a', 'b'];
    const array2: number[] = [1, 2];
    const array3: boolean[] = [true, false];
    const list1: _.List<string> = { 0: 'a', 1: 'b', length: 2 };
    const list2: _.List<number> = { 0: 1, 1: 2, length: 2 };
    const list3: _.List<boolean> = { 0: true, 1: false, length: 2 };

    _.zip(array1, array2, array3); // $ExpectType any[][]

    _(array1).zip(array2, array3); // $ExpectType any[][]

    extractChainTypes(_.chain(array1).zip(array2, array3)); // $ExpectType ChainType<any[][], any[]>

    _.zip(list1, list2, list3); // $ExpectType any[][]

    _(list1).zip(list2, list3); // $ExpectType any[][]

    extractChainTypes(_.chain(list1).zip(list2, list3)); // $ExpectType ChainType<any[][], any[]>
}

// unzip
{
    const array: [string, number, boolean][] = [['a', 1, true], ['b', 2, false]];
    const list: _.List<_.List<(string | number | boolean)>> = { 0: { 0: 'a', 1: 1, 2: true, length: 3 }, 1: { 0: 'b', 1: 2, 2: false, length: 3 }, length: 2 };

    _.unzip(array); // $ExpectType any[][]

    _(array).unzip(); // $ExpectType any[][]

    extractChainTypes(_.chain(array).unzip()); // $ExpectType ChainType<any[][], any[]>

    _.unzip(list); // $ExpectType any[][]

    _(list).unzip(); // $ExpectType any[][]

    extractChainTypes(_.chain(list).unzip()); // $ExpectType ChainType<any[][], any[]>
}

// object
{
    // separate key and value sets
    const keyArray: string[] = ['a', 'b'];
    const valueArray: number[] = [1, 2];
    const keyList: _.List<string> = { 0: 'a', 1: 'b', length: 2 };
    const valueList: _.List<number> = { 0: 1, 1: 2, length: 2 };
    const pairArray: [string, number][] = [['a', 1], ['b', 2]];
    const pairList: _.List<[string, number]> = { 0: ['a', 1], 1: ['b', 2], length: 2 };

    _.object(keyArray, valueArray); // $ExpectType Dictionary<number>

    _(keyArray).object(valueArray); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(keyArray).object(valueArray)); // $ExpectType ChainType<Dictionary<number>, number>

    _.object(keyList, valueList); // $ExpectType Dictionary<number>

    _(keyList).object(valueList); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(keyList).object(valueList)); // $ExpectType ChainType<Dictionary<number>, number>

    // key value pair tuples
    _.object(pairArray); // $ExpectType Dictionary<number>

    _(pairArray).object(); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(pairArray).object()); // $ExpectType ChainType<Dictionary<number>, number>

    _.object(pairList); // $ExpectType Dictionary<number>

    _(pairList).object(); // $ExpectType Dictionary<number>

    extractChainTypes(_.chain(pairList).object()); // $ExpectType ChainType<Dictionary<number>, number>
}

// chunk
{
    const length = 2;

    _.chunk(stringRecordArray, length); // $ExpectType StringRecord[][]

    _(stringRecordArray).chunk(length); // $ExpectType StringRecord[][]

    extractChainTypes(_.chain(stringRecordArray).chunk(length)); // $ExpectType ChainType<StringRecord[][], StringRecord[]>

    _.chunk(stringRecordList, length); // $ExpectType StringRecord[][]

    _(stringRecordList).chunk(length); // $ExpectType StringRecord[][]

    extractChainTypes(_.chain(stringRecordList).chunk(length)); // $ExpectType ChainType<StringRecord[][], StringRecord[]>

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
    _.sortedIndex(stringRecordArray, stringRecordItem, stringRecordListPropertySelectingIterator); // $ExpectType number
    _.sortedIndex(stringRecordArray, stringRecordItem, stringRecordListPropertySelectingIterator, context); // $ExpectType number

    _(stringRecordArray).sortedIndex(stringRecordItem, stringRecordListPropertySelectingIterator); // $ExpectType number
    _(stringRecordArray).sortedIndex(stringRecordItem, stringRecordListPropertySelectingIterator, context); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).sortedIndex(stringRecordItem, stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordArray).sortedIndex(stringRecordItem, stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<number, never>

    _.sortedIndex(stringRecordList, stringRecordItem, stringRecordListPropertySelectingIterator); // $ExpectType number
    _.sortedIndex(stringRecordList, stringRecordItem, stringRecordListPropertySelectingIterator, context); // $ExpectType number

    _(stringRecordList).sortedIndex(stringRecordItem, stringRecordListPropertySelectingIterator); // $ExpectType number
    _(stringRecordList).sortedIndex(stringRecordItem, stringRecordListPropertySelectingIterator, context); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).sortedIndex(stringRecordItem, stringRecordListPropertySelectingIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordList).sortedIndex(stringRecordItem, stringRecordListPropertySelectingIterator, context)); // $ExpectType ChainType<number, never>

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
    _.findIndex(stringRecordArray, stringRecordListPropertyComparingIterator); // $ExpectType number
    _.findIndex(stringRecordArray, stringRecordListPropertyComparingIterator, context); // $ExpectType number

    _(stringRecordArray).findIndex(stringRecordListPropertyComparingIterator); // $ExpectType number
    _(stringRecordArray).findIndex(stringRecordListPropertyComparingIterator, context); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).findIndex(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordArray).findIndex(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<number, never>

    _.findIndex(stringRecordArray, partialStringRecord); // $ExpectType number

    _(stringRecordArray).findIndex(partialStringRecord); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).findIndex(partialStringRecord)); // $ExpectType ChainType<number, never>

    _.findIndex(stringRecordList, stringRecordListPropertyComparingIterator); // $ExpectType number
    _.findIndex(stringRecordList, stringRecordListPropertyComparingIterator, context); // $ExpectType number

    _(stringRecordList).findIndex(stringRecordListPropertyComparingIterator); // $ExpectType number
    _(stringRecordList).findIndex(stringRecordListPropertyComparingIterator, context); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).findIndex(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordList).findIndex(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<number, never>

    _.findIndex(stringRecordList, partialStringRecord); // $ExpectType number

    _(stringRecordList).findIndex(partialStringRecord); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).findIndex(partialStringRecord)); // $ExpectType ChainType<number, never>

    _.findIndex(simpleString, stringListComparingIterator); // $ExpectType number
    _.findIndex(simpleString, stringListComparingIterator, context); // $ExpectType number

    _(simpleString).findIndex(stringListComparingIterator); // $ExpectType number
    _(simpleString).findIndex(stringListComparingIterator, context); // $ExpectType number

    extractChainTypes(_.chain(simpleString).findIndex(stringListComparingIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(simpleString).findIndex(stringListComparingIterator, context)); // $ExpectType ChainType<number, never>
}

// findLastIndex
{
    _.findLastIndex(stringRecordArray, stringRecordListPropertyComparingIterator); // $ExpectType number
    _.findLastIndex(stringRecordArray, stringRecordListPropertyComparingIterator, context); // $ExpectType number

    _(stringRecordArray).findLastIndex(stringRecordListPropertyComparingIterator); // $ExpectType number
    _(stringRecordArray).findLastIndex(stringRecordListPropertyComparingIterator, context); // $ExpectType number

    extractChainTypes(_.chain(stringRecordArray).findLastIndex(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordArray).findLastIndex(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<number, never>

    _.findLastIndex(stringRecordList, stringRecordListPropertyComparingIterator); // $ExpectType number
    _.findLastIndex(stringRecordList, stringRecordListPropertyComparingIterator, context); // $ExpectType number

    _(stringRecordList).findLastIndex(stringRecordListPropertyComparingIterator); // $ExpectType number
    _(stringRecordList).findLastIndex(stringRecordListPropertyComparingIterator, context); // $ExpectType number

    extractChainTypes(_.chain(stringRecordList).findLastIndex(stringRecordListPropertyComparingIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordList).findLastIndex(stringRecordListPropertyComparingIterator, context)); // $ExpectType ChainType<number, never>

    _.findLastIndex(simpleString, stringListComparingIterator); // $ExpectType number
    _.findLastIndex(simpleString, stringListComparingIterator, context); // $ExpectType number

    _(simpleString).findLastIndex(stringListComparingIterator); // $ExpectType number
    _(simpleString).findLastIndex(stringListComparingIterator, context); // $ExpectType number

    extractChainTypes(_.chain(simpleString).findLastIndex(stringListComparingIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(simpleString).findLastIndex(stringListComparingIterator, context)); // $ExpectType ChainType<number, never>

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
    extractUnderscoreTypes(_(stringRecordArray)); // $ExpectType UnderscoreType<StringRecord[], StringRecord>

    extractUnderscoreTypes(_(stringRecordAugmentedList)); // $ExpectType UnderscoreType<StringRecordAugmentedList, StringRecord>
    extractUnderscoreTypes(_(stringRecordList)); // $ExpectType UnderscoreType<List<StringRecord>, StringRecord>

    extractUnderscoreTypes(_(stringRecordExcplcitDictionary)); // $ExpectType UnderscoreType<StringRecordExplicitDictionary, StringRecord>
    extractUnderscoreTypes(_(stringRecordDictionary)); // $ExpectType UnderscoreType<Dictionary<StringRecord>, StringRecord>

    extractUnderscoreTypes(_(simpleString)); // $ExpectType UnderscoreType<string, string>
    extractUnderscoreTypes(_(simpleNumber)); // $ExpectType UnderscoreType<number, never>

    extractUnderscoreTypes(_(mixedIterabilityValue)); // $ExpectType UnderscoreType<number | number[], number>
}

// value
// verify that the object type given to underscore is returned by value
{
    _(stringRecordArray).value(); // $ExpectType StringRecord[]

    _(stringRecordAugmentedList).value(); // $ExpectType StringRecordAugmentedList
    _(stringRecordList).value(); // $ExpectType List<StringRecord>

    _(stringRecordExcplcitDictionary).value(); // $ExpectType StringRecordExplicitDictionary
    _(stringRecordDictionary).value(); // $ExpectType Dictionary<StringRecord>

    _(simpleString).value(); // $ExpectType string
    _(simpleNumber).value(); // $ExpectType number

    _(mixedIterabilityValue).value(); // $ExpectType number | number[]
}

// Chaining

// chain
// verify that the right chain item and value types are yielded by calls to chain
// these tests also check to make sure that extractChainTypes(_.chain() and _().chain() yield the same types
{
    extractChainTypes(_.chain(stringRecordArray)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_(stringRecordArray).chain()); // $ExpectType ChainType<StringRecord[], StringRecord>

    extractChainTypes(_.chain(stringRecordAugmentedList)); // $ExpectType ChainType<StringRecordAugmentedList, StringRecord>
    extractChainTypes(_(stringRecordAugmentedList).chain()); // $ExpectType ChainType<StringRecordAugmentedList, StringRecord>

    extractChainTypes(_.chain(stringRecordList)); // $ExpectType ChainType<List<StringRecord>, StringRecord>
    extractChainTypes(_(stringRecordList).chain()); // $ExpectType ChainType<List<StringRecord>, StringRecord>

    extractChainTypes(_.chain(stringRecordExcplcitDictionary)); // $ExpectType ChainType<StringRecordExplicitDictionary, StringRecord>
    extractChainTypes(_(stringRecordExcplcitDictionary).chain()); // $ExpectType ChainType<StringRecordExplicitDictionary, StringRecord>

    extractChainTypes(_.chain(stringRecordDictionary)); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>
    extractChainTypes(_(stringRecordDictionary).chain()); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    extractChainTypes(_.chain(simpleString)); // $ExpectType ChainType<string, string>
    extractChainTypes(_(simpleString).chain()); // $ExpectType ChainType<string, string>

    extractChainTypes(_.chain(simpleNumber)); // $ExpectType ChainType<number, never>
    extractChainTypes(_(simpleNumber).chain()); // $ExpectType ChainType<number, never>

    extractChainTypes(_.chain(mixedIterabilityValue)); // $ExpectType ChainType<number | number[], number>
    extractChainTypes(_(mixedIterabilityValue).chain()); // $ExpectType ChainType<number | number[], number>
}

// value
// verify that the object type given to chain is returned by value
{
    _.chain(stringRecordArray).value(); // $ExpectType StringRecord[]

    _.chain(stringRecordAugmentedList).value(); // $ExpectType StringRecordAugmentedList
    _.chain(stringRecordList).value(); // $ExpectType List<StringRecord>

    _.chain(stringRecordExcplcitDictionary).value(); // $ExpectType StringRecordExplicitDictionary
    _.chain(stringRecordDictionary).value(); // $ExpectType Dictionary<StringRecord>

    _.chain(simpleString).value(); // $ExpectType string
    _.chain(simpleNumber).value(); // $ExpectType number

    _.chain(mixedIterabilityValue).value(); // $ExpectType number | number[]
    _(mixedIterabilityValue).chain().value(); // $ExpectType number | number[]
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
    .map<{ age: number; name: string; id: string }>((p, k: string) => {
        return { id: k, ...p };
    })
    .value();

let usersTable_2 /*: { age: number; name: string; id: string }[][]*/ = _.chain(usersData)
    .map<{ age: number; name: string; id: string }[]>((p, k: string) => {
        return [{ id: k, ...p }];
    })
    .value();

let usersTable_3 /*: { score: number; fullName: string; login: string }[][]*/ = _.chain(usersTable)
    .map<{ score: number; fullName: string; login: string }[]>(p => {
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

_.partition<number>([0, 1, 2, 3, 4, 5], (num) => {return num % 2 == 0 });

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
if(_.isArray<String>(guardedType)) useArray(guardedType);
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
    .first()
    .compact()
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

// $ExpectType string | undefined
_.chain(stringRecordOrUndefinedList)
    .pluck('a')
    .find(a => a === 'a')
    .value();

// $ExpectType number | undefined
_.chain([{ a: 1 }, { a: 2 }, { a: 3 }, { b: 4 }])
    .pluck('a')
    .max()
    .value();
