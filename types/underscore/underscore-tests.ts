import _ = require('underscore');

/**************************************
 * Common Testing Types and Variables *
 **************************************/
declare const $: any;
declare const window: any;
declare const alert: (msg: string) => void;
declare const console: { log(...data: any[]): void; };

declare const context: object;

// string record (also used to represent a generic record)
interface StringRecord {
    a: string;
    b: string;
}

interface AugmentedList extends _.List<StringRecord> {
    notAListProperty: boolean;
}

// tslint:disable-next-line:interface-over-type-literal
type AugmentedListLiteral = {
    [index: number]: StringRecord;
    length: number;
    notAListProperty: string;
};

interface ExplicitDictionary extends _.Dictionary<StringRecord> {
    a: StringRecord;
    b: StringRecord;
    c: StringRecord;
}

// tslint:disable-next-line:interface-over-type-literal
type ExplicitDictionaryLiteral = {
    a: StringRecord;
    b: StringRecord;
    c: StringRecord;
};

declare const shallowProperty: 'a';
declare const deepProperty: ['a', 'length'];
declare const matcher: Partial<StringRecord>;
declare const recordTester: (value: StringRecord) => boolean;
declare const recordStringReducer: (prev: string, value: StringRecord) => string;
declare const recordUnionReducer: (prev: string | StringRecord, value: StringRecord) => string | StringRecord;

declare const augmentedList: AugmentedList;
declare const augmentedListIterator: (value: StringRecord, index: number, list: AugmentedList) => void;

declare const recordList: _.List<StringRecord>;
declare const recordListSelector: (value: StringRecord, index: number, list: _.List<StringRecord>) => string;
declare const recordMaybeListSelector: (value: StringRecord, index?: number, list?: _.List<StringRecord>) => string;
declare const recordListTester: (value: StringRecord, index: number, list: _.List<StringRecord>) => boolean;
declare const recordListUnionIterator: (element: StringRecord, key: number, list: StringRecord[] | _.List<StringRecord>) => void;
declare const recordListStringReducer: (prev: string, value: StringRecord, index: number, list: _.List<StringRecord>) => string;

declare const recordListUnion: StringRecord[] | _.List<StringRecord>;
declare const recordListArray: _.List<StringRecord>[];
declare const level2RecordList: _.List<_.List<StringRecord>>;
declare const level3RecordList: _.List<_.List<_.List<StringRecord>>>;
declare const level4RecordList: _.List<_.List<_.List<_.List<StringRecord>>>>;
declare const maxLevel2RecordArray: (StringRecord | StringRecord[])[];
declare const maxLevel3RecordArray: (StringRecord | StringRecord[] | StringRecord[][])[];

declare const explicitDictionary: ExplicitDictionary;
declare const explicitDictionaryIterator: (element: StringRecord, key: string, dictionary: ExplicitDictionary) => void;

declare const recordDictionary: _.Dictionary<StringRecord>;
declare const recordDictionarySelector: (element: StringRecord, key: string, dictionary: _.Dictionary<StringRecord>) => string;
declare const recordDictionaryTester: (element: StringRecord, key: string, list: _.Dictionary<StringRecord>) => boolean;
declare const recordDictionaryStringReducer: (prev: string, element: StringRecord, key: string, dictionary: _.Dictionary<StringRecord>) => string;

declare const maybeRecordList: _.List<StringRecord | undefined>;

// number record
interface NumberRecord {
    a: number;
}

declare const numberRecordList: _.List<NumberRecord>;
declare const numberRecordListSelector: (value: NumberRecord, index: number, collection: _.List<NumberRecord>) => number;

declare const numberRecordDictionary: _.Dictionary<NumberRecord>;
declare const numberRecordDictionarySelector: (element: NumberRecord, key: string, collection: _.Dictionary<NumberRecord>) => number;

// function record
interface NoParametersRecord {
    a: () => number;
}

declare const noParametersRecordList: _.List<NoParametersRecord>;

interface TwoParametersRecord {
    a: (arg0: number, arg1: string) => void;
}

declare const twoParametersRecordDictionary: _.Dictionary<TwoParametersRecord>;

// string
declare const stringValue: string;
declare const stringIterator: (value: string, index: number, str: string) => number;
declare const stringTester: (value: string, index: number, str: string) => boolean;
declare const stringStringReducer: (prev: string, value: string, index: number, str: string) => string;
declare const dictionaryStringReducer: (prev: _.Dictionary<number>, value: string, index: number, str: string) => _.Dictionary<number>;
declare const unionStringReducer: (prev: string | number, value: string, index: number, str: string) => string | number;

declare const stringArray: string[];
declare const maybeStringArray: string[] | undefined;
declare const stringList: _.List<string>;
declare const level2StringList: _.List<_.List<string>>;

// number
declare const numberValue: number;
declare const numberList: _.List<number>;
declare const numberArray: number[];
declare const numberDictionary: _.Dictionary<number>;

// boolean
declare const booleanList: _.List<boolean>;
declare const booleanDictionary: _.Dictionary<boolean>;

// any
declare const anyValue: any;
declare const anyArray: any[];
declare const anyCollectionIterator: (element: any, index: string | number, collection: any) => void;
declare const anyCollectionTester: (element: any, index: string | number, collection: any) => boolean;

// never
declare const neverValue: never;

// truthiness
type Truthies = string | number | boolean | object | Function | StringRecord | (() => void);
declare const truthyFalsyList: _.List<Truthies | _.AnyFalsy>;
declare const maybeTruthyFalsyList: _.List<Truthies | _.AnyFalsy> | null | undefined;

// mixed types
interface MixedTypeRecord {
    a: StringRecord;
    b: number;
    c: NonIntersecting;
}

type Intersecting = StringRecord | MixedTypeRecord;

interface NonIntersectingRecord {
    onlyNonIntersectingRecord: string;
}

type NonIntersecting = StringRecord | NonIntersectingRecord;

declare const mixedTypeRecord: MixedTypeRecord;
declare const mixedTypeSelector: (element: any, key: string, object: MixedTypeRecord) => string;
declare const mixedTypeTester: (element: any, key: string, object: MixedTypeRecord) => boolean;

declare const intersectingPropertiesList: _.List<Intersecting>;
declare const nonIntersectingList: _.List<NonIntersecting>;
declare const level2NonIntersectingList: _.List<_.List<NonIntersecting>>;

declare const mixedIterabilityValue: number | number[];
declare const stringy: StringRecord | string;
declare const level2UnionList: _.List<_.List<string | number>>;
declare const tupleList: _.List<[string, number]>;
declare const maybeFunction: (() => void) | undefined;

// concrete example types
declare const manyParameters: (a: string, b: number, c: boolean, d: string, e: number, f: string) => string;
const stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
declare const explicitNumberDictionary: { one: number; two: number; three: number; };

/*********
 * Types *
 *********/

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

// TypeOfCollection

declare const listItem: _.TypeOfCollection<_.List<StringRecord>>;
listItem; // $ExpectType StringRecord

declare const arrayItem: _.TypeOfCollection<StringRecord[]>;
arrayItem; // $ExpectType StringRecord

declare const augmentedListItem: _.TypeOfCollection<AugmentedList>;
augmentedListItem; // $ExpectType StringRecord

declare const augmentedListLiteralItem: _.TypeOfCollection<AugmentedListLiteral>;
augmentedListLiteralItem; // $ExpectType StringRecord

declare const dictionaryItem: _.TypeOfCollection<_.Dictionary<StringRecord>>;
dictionaryItem; // $ExpectType StringRecord

declare const explicitDictionaryItem: _.TypeOfCollection<ExplicitDictionary>;
explicitDictionaryItem; // $ExpectType StringRecord

declare const explicitDictionaryLiteralItem: _.TypeOfCollection<ExplicitDictionaryLiteral>;
explicitDictionaryLiteralItem; // $ExpectType StringRecord

// Iteratee

{
    // functions
    const listFunctionIteratee: _.Iteratee<_.List<StringRecord>, string> = (element, key, collection) => {
        element; // $ExpectType StringRecord
        key; // $ExpectType number
        collection; // $ExpectType List<StringRecord>
        return element.a;
    };
    listFunctionIteratee(recordList[0], 0, recordList); // $ExpectType string

    const dictionaryFunctionIteratee: _.Iteratee<_.Dictionary<StringRecord>, string> = (element, key, collection) => {
        element; // $ExpectType StringRecord
        key; // $ExpectType string
        collection; // $ExpectType Dictionary<StringRecord>
        return element.a;
    };
    dictionaryFunctionIteratee(recordDictionary['a'], 'a', recordDictionary); // $ExpectType string

    const unionFunctionIteratee: _.Iteratee<_.List<Intersecting>, string | StringRecord> = (element, key, collection) => {
        element; // $ExpectType Intersecting
        key; // $ExpectType number
        collection; // $ExpectType List<Intersecting>
        return element.a;
    };
    unionFunctionIteratee(intersectingPropertiesList[0], 0, intersectingPropertiesList); // $ExpectType string | StringRecord

    const collectionFunctionIteratee: _.Iteratee<_.Dictionary<StringRecord> | StringRecord[], string> = (element, key, collection) => {
        element; // $ExpectType StringRecord
        key; // $ExpectType string | number
        collection; // $ExpectType StringRecord[] | Dictionary<StringRecord>
        return element.a;
    };
    collectionFunctionIteratee(recordDictionary['a'], 'a', recordDictionary); // $ExpectType string

    const anyFunctionIteratee: _.Iteratee<any, string> = (element, key, collection) => {
        element; // $ExpectType any
        key; // $ExpectType any
        collection; // $ExpectType any
        return element.a;
    };
    if (_.isFunction(anyFunctionIteratee)) {
        anyFunctionIteratee(recordDictionary['a'], 'a', recordDictionary); // $ExpectType string
    }

    // matchers
    const listMatcherIteratee: _.Iteratee<_.List<StringRecord>, string> = matcher;
    listMatcherIteratee; // $ExpectType Partial<StringRecord>

    const dictionaryMatcherIteratee: _.Iteratee<_.Dictionary<StringRecord>, string> = matcher;
    dictionaryMatcherIteratee; // $ExpectType Partial<StringRecord>

    const unionMatcherIteratee: _.Iteratee<_.List<Intersecting>, string | boolean> = matcher;
    unionMatcherIteratee; // $ExpectType Partial<StringRecord>

    const collectionUnionMatcherIteratee: _.Iteratee<StringRecord[] | _.Dictionary<StringRecord>, string> = matcher;
    collectionUnionMatcherIteratee; // $ExpectType Partial<StringRecord>

    const anyMatcherIteratee: _.Iteratee<any, string> = matcher;
    anyMatcherIteratee; // $ExpectType Partial<any>

    // shallow properties
    const listShallowPropertyIteratee: _.Iteratee<_.List<StringRecord>, string> = shallowProperty;
    listShallowPropertyIteratee; // $ExpectType string

    const dictionaryShallowPropertyIteratee: _.Iteratee<_.Dictionary<StringRecord>, string> = shallowProperty;
    dictionaryShallowPropertyIteratee; // $ExpectType string

    const unionShallowPropertyIteratee: _.Iteratee<_.List<Intersecting>, string | boolean> = shallowProperty;
    unionShallowPropertyIteratee; // $ExpectType string

    const collectionShallowPropertyIteratee: _.Iteratee<StringRecord[] | _.Dictionary<StringRecord>, string> = shallowProperty;
    collectionShallowPropertyIteratee; // $ExpectType string

    const anyShallowPropertyIteratee: _.Iteratee<any, string> = shallowProperty;
    anyShallowPropertyIteratee; // $ExpectType string

    // deep properties
    const listDeepPropertyIteratee: _.Iteratee<_.List<StringRecord>, string> = deepProperty;
    listDeepPropertyIteratee; // $ExpectType (string | number)[]

    const dictionaryDeepPropertyIteratee: _.Iteratee<_.Dictionary<StringRecord>, string> = deepProperty;
    dictionaryDeepPropertyIteratee; // $ExpectType (string | number)[]

    const unionDeepPropertyIteratee: _.Iteratee<_.List<Intersecting>, string | boolean> = deepProperty;
    unionDeepPropertyIteratee; // $ExpectType (string | number)[]

    const collectionDeepPropertyIteratee: _.Iteratee<StringRecord[] | _.Dictionary<StringRecord>, string> = deepProperty;
    collectionDeepPropertyIteratee; // $ExpectType (string | number)[]

    const anyDeepPropertyIteratee: _.Iteratee<any, string> = deepProperty;
    if (_.isArray(anyDeepPropertyIteratee)) {
        anyDeepPropertyIteratee; // $ExpectType (string | number)[]
    }

    // identity
    const listIdentityIteratee: _.Iteratee<_.List<StringRecord>, string> = undefined;
    listIdentityIteratee; // $ExpectType undefined

    const dictionaryIdentityIteratee: _.Iteratee<_.Dictionary<StringRecord>, string> = null;
    dictionaryIdentityIteratee; // $ExpectType null

    const unionIdentityIteratee: _.Iteratee<_.List<Intersecting>, string | boolean> = undefined;
    unionIdentityIteratee; // $ExpectType undefined

    const collectionIdentityIteratee: _.Iteratee<StringRecord[] | _.Dictionary<StringRecord>, string> = null;
    collectionIdentityIteratee; // $ExpectType null

    const anyIdentityIteratee: _.Iteratee<any, string> = undefined;
    anyIdentityIteratee; // $ExpectType undefined
}

// IterateeResult

declare const functionResult: _.IterateeResult<() => string, StringRecord>;
functionResult; // $ExpectType string

declare const matcherResult: _.IterateeResult<Partial<StringRecord>, StringRecord>;
matcherResult; // $ExpectType boolean

declare const knownShallowPropertyResult: _.IterateeResult<typeof shallowProperty, Intersecting>;
knownShallowPropertyResult; // $ExpectType string | StringRecord

declare const unknownShallowPropertyResult: _.IterateeResult<typeof shallowProperty, NonIntersecting>;
unknownShallowPropertyResult; // $ExpectType any

declare const deepPropertyResult: _.IterateeResult<(string | number)[], StringRecord>;
deepPropertyResult; // $ExpectType any

declare const nullResult: _.IterateeResult<null, StringRecord>;
nullResult; // $ExpectType StringRecord

declare const undefinedResult: _.IterateeResult<undefined, StringRecord>;
undefinedResult; // $ExpectType StringRecord

/*******
 * OOP *
 *******/

// underscore

{
    // lists
    extractUnderscoreTypes(_(augmentedList)); // $ExpectType UnderscoreType<AugmentedList, StringRecord>
    extractUnderscoreTypes(_(recordList)); // $ExpectType UnderscoreType<List<StringRecord>, StringRecord>

    // dictionaries
    extractUnderscoreTypes(_(explicitDictionary)); // $ExpectType UnderscoreType<ExplicitDictionary, StringRecord>
    extractUnderscoreTypes(_(recordDictionary)); // $ExpectType UnderscoreType<Dictionary<StringRecord>, StringRecord>

    // strings
    extractUnderscoreTypes(_(stringValue)); // $ExpectType UnderscoreType<string, string>

    // non-collections
    extractUnderscoreTypes(_(numberValue)); // $ExpectType UnderscoreType<number, never>

    // mixed non-collections and collections
    extractUnderscoreTypes(_(mixedIterabilityValue)); // $ExpectType UnderscoreType<number | number[], number>

    // any
    extractUnderscoreTypes(_(anyValue)); // $ExpectType UnderscoreType<any, any>

    // never
    extractUnderscoreTypes(_(neverValue)); // $ExpectType UnderscoreType<never, never>
}

// value

// verify that the object type given to underscore is returned by value
{
    // lists
    _(augmentedList).value(); // $ExpectType AugmentedList
    _(recordList).value(); // $ExpectType List<StringRecord>

    // dictionaries
    _(explicitDictionary).value(); // $ExpectType ExplicitDictionary
    _(recordDictionary).value(); // $ExpectType Dictionary<StringRecord>

    // strings
    _(stringValue).value(); // $ExpectType string

    // non-collections
    _(numberValue).value(); // $ExpectType number

    // mixed non-collections and collections
    _(mixedIterabilityValue).value(); // $ExpectType number | number[]

    // any
    _(anyValue).value(); // $ExpectType any

    // never
    _(neverValue).value(); // $ExpectType never
}

/***************
 * Collections *
 ***************/

// each, forEach

// iterating through an array
// $ExpectType number[]
_.each(numberArray, (value, key, collection) => {
    value; // $ExpectType number
    key; // $ExpectType number
    collection; // $ExpectType number[]
});

// iterating through a dictionary
// $ExpectType { one: number; two: number; three: number; }
_(explicitNumberDictionary).each((value, key, collection) => {
    value; // $ExpectType number
    key; // $ExpectType string
    collection; // $ExpectType { one: number; two: number; three: number; }
});

{
    // lists - each
    _.each(augmentedList, augmentedListIterator); // $ExpectType AugmentedList
    _(augmentedList).each(augmentedListIterator, context); // $ExpectType AugmentedList
    _.chain(augmentedList).each(augmentedListIterator); // // $ExpectType _Chain<AugmentedList, AugmentedList>

    // lists - forEach
    _.forEach(augmentedList, augmentedListIterator, context); // $ExpectType AugmentedList
    _(augmentedList).forEach(augmentedListIterator); // $ExpectType AugmentedList
    _.chain(augmentedList).forEach(augmentedListIterator, context); // // $ExpectType _Chain<AugmentedList, AugmentedList>

    // dictionaries - each
    _.each(explicitDictionary, explicitDictionaryIterator, context); // $ExpectType ExplicitDictionary
    _(explicitDictionary).each(explicitDictionaryIterator); // $ExpectType ExplicitDictionary
    _.chain(explicitDictionary).each(explicitDictionaryIterator, context); // // $ExpectType _Chain<StringRecord, ExplicitDictionary>

    // dictionaries - forEach
    _.forEach(explicitDictionary, explicitDictionaryIterator); // $ExpectType ExplicitDictionary
    _(explicitDictionary).forEach(explicitDictionaryIterator, context); // $ExpectType ExplicitDictionary
    _.chain(explicitDictionary).forEach(explicitDictionaryIterator); // // $ExpectType _Chain<StringRecord, ExplicitDictionary>

    // unioned list types with similar items - each
    _.each(recordListUnion, recordListUnionIterator); // $ExpectType List<StringRecord> | StringRecord[]
    _(recordListUnion).each(recordListUnionIterator); // $ExpectType List<StringRecord> | StringRecord[]
    _.chain(recordListUnion).each(recordListUnionIterator); // // $ExpectType _Chain<StringRecord, List<StringRecord> | StringRecord[]>

    // unioned list types with similar items - forEach
    _.forEach(recordListUnion, recordListUnionIterator); // $ExpectType List<StringRecord> | StringRecord[]
    _(recordListUnion).forEach(recordListUnionIterator); // $ExpectType List<StringRecord> | StringRecord[]
    _.chain(recordListUnion).forEach(recordListUnionIterator); // // $ExpectType _Chain<StringRecord, List<StringRecord> | StringRecord[]>

    // any - each
    _.each(anyValue, anyCollectionIterator); // $ExpectType any
    _(anyValue).each(anyCollectionIterator, context); // $ExpectType any
    _.chain(anyValue).each(anyCollectionIterator); // // $ExpectType _Chain<any, any>

    // any - forEach
    _.forEach(anyValue, anyCollectionIterator); // $ExpectType any
    _(anyValue).forEach(anyCollectionIterator, context); // $ExpectType any
    _.chain(anyValue).forEach(anyCollectionIterator); // // $ExpectType _Chain<any, any>
}

// get

{
    // null as object
    // $ExpectType undefined
    _.get(null, 'a');

    // null as object, with default value
    // $ExpectType number
    _.get(null, 'a', numberValue);

    // no default value
    // $ExpectType number | undefined
    _.get({ a: numberValue }, 'a');

    // trying to get the property on a simple path
    // $ExpectType number
    _.get({ a: numberValue }, ['a'], numberValue);

    // trying to get the property one level deep
    // $ExpectType number | { b: number; }
    _.get({ a: { b: numberValue } }, ['a'], numberValue);

    // trying to get the property one level deep
    // $ExpectType string | number | { b: number; }
    _.get({ a: { b: numberValue }, c: "a" }, ['a', 'b'], numberValue);

    // default value if not found of the 'same type'
    // $ExpectType number
    _.get({ a: numberValue }, ['b'], numberValue);

    // oop style with null as object
    // $ExpectType undefined
    _(null).get(['b']);

    // oop style with null as object and default value
    // $ExpectType number
    _(null).get(['b'], numberValue);

    // oop style without default value
    // $ExpectType number | undefined
    _({ a: numberValue }).get(['b']);

    // oop style with default value
    // $ExpectType string | number
    _({ a: numberValue }).get(['a'], stringValue);

    // chained with null as object
    // $ExpectType _Chain<undefined, undefined>
    _.chain(null).get(['a']);

    // chained with null as object and default value
    // $ExpectType _Chain<number, number>
    _.chain(null).get(['a'], numberValue);

    // chained without default value
    // $ExpectType _Chain<string | number | undefined, string | number | undefined>
    _.chain({ a: numberValue, b: stringValue }).get(['a']);

    // chained with default value
    // $ExpectType _Chain<string | number, string | number>
    _.chain({ a: numberValue }).get(['a'], stringValue);
}

// map, collect

// mapping an array with an inferred result type
// $ExpectType number[]
_(numberArray).map((value, key, collection) => {
    value; // $ExpectType number
    key; // $ExpectType number
    collection; // $ExpectType number[]

    return value;
});

// mapping a dictionary with an explicit result type
// $ExpectType NumberRecord[]
_.map(explicitNumberDictionary, (value, key, collection): NumberRecord => {
    value; // $ExpectType number
    key; // $ExpectType string
    collection; // $ExpectType { one: number; two: number; three: number; }

    return { a: value };
});

// mapping a dictionary by retrieving the value of a specific property
_.map([{ key: 'apples' }, { key: 'oranges' }], 'key'); // $ExpectType string[]

{
    // function iteratee - lists - map
    _.map(recordList, recordListSelector, context); // $ExpectType string[]
    _(recordList).map(recordListSelector, context); // $ExpectType string[]
    extractChainTypes(_.chain(recordList).map(recordListSelector, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - lists - collect
    _.collect(recordList, recordListSelector, context); // $ExpectType string[]
    _(recordList).collect(recordListSelector, context); // $ExpectType string[]
    extractChainTypes(_.chain(recordList).collect(recordListSelector, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - dictionaries - map
    _.map(recordDictionary, recordDictionarySelector, context); // $ExpectType string[]
    _(recordDictionary).map(recordDictionarySelector, context); // $ExpectType string[]
    extractChainTypes(_.chain(recordDictionary).map(recordDictionarySelector, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - dictionaries - collect
    _.collect(recordDictionary, recordDictionarySelector, context); // $ExpectType string[]
    _(recordDictionary).collect(recordDictionarySelector, context); // $ExpectType string[]
    extractChainTypes(_.chain(recordDictionary).collect(recordDictionarySelector, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - strings - map
    _.map(stringValue, stringIterator, context); // $ExpectType number[]
    _(stringValue).map(stringIterator, context); // $ExpectType number[]
    extractChainTypes(_.chain(stringValue).map(stringIterator, context)); // $ExpectType ChainType<number[], number>

    // function iteratee - strings - collect
    _.collect(stringValue, stringIterator, context); // $ExpectType number[]
    _(stringValue).collect(stringIterator, context); // $ExpectType number[]
    extractChainTypes(_.chain(stringValue).collect(stringIterator, context)); // $ExpectType ChainType<number[], number>

    // function iteratee - any (see #33479) - map
    _.map(anyValue, recordListSelector, context); // $ExpectType string[]
    _(anyValue).map(recordListSelector, context); // $ExpectType string[]
    extractChainTypes(_.chain(anyValue).map(recordListSelector, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - any (see #33479) - collect
    _.collect(anyValue, recordListSelector, context); // $ExpectType string[]
    _(anyValue).collect(recordListSelector, context); // $ExpectType string[]
    extractChainTypes(_.chain(anyValue).collect(recordListSelector, context)); // $ExpectType ChainType<string[], string>

    // matcher iteratee - lists - map
    _.map(recordList, matcher); // $ExpectType boolean[]
    _(recordList).map(matcher); // $ExpectType boolean[]
    extractChainTypes(_.chain(recordList).map(matcher)); // $ExpectType ChainType<boolean[], boolean>

    // matcher iteratee - lists - collect
    _.collect(recordList, matcher); // $ExpectType boolean[]
    _(recordList).collect(matcher); // $ExpectType boolean[]
    extractChainTypes(_.chain(recordList).collect(matcher)); // $ExpectType ChainType<boolean[], boolean>

    // matcher iteratee - dictionaries - map
    _.map(recordDictionary, matcher); // $ExpectType boolean[]
    _(recordDictionary).map(matcher); // $ExpectType boolean[]
    extractChainTypes(_.chain(recordDictionary).map(matcher)); // $ExpectType ChainType<boolean[], boolean>

    // matcher iteratee - dictionaries - collect
    _.collect(recordDictionary, matcher); // $ExpectType boolean[]
    _(recordDictionary).collect(matcher); // $ExpectType boolean[]
    extractChainTypes(_.chain(recordDictionary).collect(matcher)); // $ExpectType ChainType<boolean[], boolean>

    // matcher iteratee - any (see #33479) - map
    _.map(anyValue, matcher); // $ExpectType boolean[]
    _(anyValue).map(matcher); // $ExpectType boolean[]
    extractChainTypes(_.chain(anyValue).map(matcher)); // $ExpectType ChainType<boolean[], boolean>

    // matcher iteratee - any (see #33479) - collect
    _.collect(anyValue, matcher); // $ExpectType boolean[]
    _(anyValue).collect(matcher); // $ExpectType boolean[]
    extractChainTypes(_.chain(anyValue).collect(matcher)); // $ExpectType ChainType<boolean[], boolean>

    // shallow property iteratee with a non-nullable single type - lists - map
    _.map(recordList, shallowProperty); // $ExpectType string[]
    _(recordList).map(shallowProperty); // $ExpectType string[]
    extractChainTypes(_.chain(recordList).map(shallowProperty)); // $ExpectType ChainType<string[], string>

    // shallow property iteratee with a non-nullable single type - lists - collect
    _.collect(recordList, shallowProperty); // $ExpectType string[]
    _(recordList).collect(shallowProperty); // $ExpectType string[]
    extractChainTypes(_.chain(recordList).collect(shallowProperty)); // $ExpectType ChainType<string[], string>

    // shallow property iteratee with a non-nullable single type - dictionaries - map
    _.map(recordDictionary, shallowProperty); // $ExpectType string[]
    _(recordDictionary).map(shallowProperty); // $ExpectType string[]
    extractChainTypes(_.chain(recordDictionary).map(shallowProperty)); // $ExpectType ChainType<string[], string>

    // shallow property iteratee with a non-nullable single type - dictionaries - collect
    _.collect(recordDictionary, shallowProperty); // $ExpectType string[]
    _(recordDictionary).collect(shallowProperty); // $ExpectType string[]
    extractChainTypes(_.chain(recordDictionary).collect(shallowProperty)); // $ExpectType ChainType<string[], string>

    // shallow property iteratee with other types - lists - map
    _.map(maybeRecordList, shallowProperty); // $ExpectType any[]
    _.map(intersectingPropertiesList, shallowProperty); // $ExpectType (string | StringRecord)[]
    _.map(nonIntersectingList, shallowProperty); // $ExpectType any[]

    // shallow property iteratee with other types - lists - collect
    _.collect(maybeRecordList, shallowProperty); // $ExpectType any[]
    _.collect(intersectingPropertiesList, shallowProperty); // $ExpectType (string | StringRecord)[]
    _.collect(nonIntersectingList, shallowProperty); // $ExpectType any[]

    // shallow property iteratee - any (see #33479) - map
    _.map(anyValue, shallowProperty); // $ExpectType any[]
    _(anyValue).map(shallowProperty); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).map(shallowProperty)); // $ExpectType ChainType<any[], any>

    // shallow property iteratee - any (see #33479) - collect
    _.collect(anyValue, shallowProperty); // $ExpectType any[]
    _(anyValue).collect(shallowProperty); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).collect(shallowProperty)); // $ExpectType ChainType<any[], any>

    // deep property iteratee - lists - map
    _.map(recordList, deepProperty); // $ExpectType any[]
    _(recordList).map(deepProperty); // $ExpectType any[]
    extractChainTypes(_.chain(recordList).map(deepProperty)); // $ExpectType ChainType<any[], any>

    // deep property iteratee - lists - collect
    _.collect(recordList, deepProperty); // $ExpectType any[]
    _(recordList).collect(deepProperty); // $ExpectType any[]
    extractChainTypes(_.chain(recordList).collect(deepProperty)); // $ExpectType ChainType<any[], any>

    // deep property iteratee - dictionaries - map
    _.map(recordDictionary, deepProperty); // $ExpectType any[]
    _(recordDictionary).map(deepProperty); // $ExpectType any[]
    extractChainTypes(_.chain(recordDictionary).map(deepProperty)); // $ExpectType ChainType<any[], any>

    // deep property iteratee - dictionaries - collect
    _.collect(recordDictionary, deepProperty); // $ExpectType any[]
    _(recordDictionary).collect(deepProperty); // $ExpectType any[]
    extractChainTypes(_.chain(recordDictionary).collect(deepProperty)); // $ExpectType ChainType<any[], any>

    // deep property iteratee - any (see #33479) - map
    _.map(anyValue, deepProperty); // $ExpectType any[]
    _(anyValue).map(deepProperty); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).map(deepProperty)); // $ExpectType ChainType<any[], any>

    // deep property iteratee - any (see #33479) - collect
    _.collect(anyValue, deepProperty); // $ExpectType any[]
    _(anyValue).collect(deepProperty); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).collect(deepProperty)); // $ExpectType ChainType<any[], any>
}

// reduce, foldl, inject

// summing with a result of undefined when no values are provided
// $ExpectType number | undefined
_.reduce(numberArray, (memo, num, key, collection) => {
    memo; // $ExpectType number
    num; // $ExpectType number
    key; // $ExpectType number
    collection; // $ExpectType number[]

    return memo + num;
});

// summing numbers as strings in an object collection with a result of undefined when no values are provided
// and a result of a string when only one value is provided
// $ExpectType string | number | undefined
_({ a: '1', b: '2', c: '3' }).reduce((memo: string | number, numstr, key, collection) => {
    numstr; // $ExpectType string
    key; // $ExpectType string
    collection; // $ExpectType { a: string; b: string; c: string; }

    return (+memo) + (+numstr);
});

// summing with a result of zero when no values are provided
_.reduce(numberArray, (memo, num) => memo + num, 0); // $ExpectType number

{
    // constant primitive memo and memo-type result - lists - reduce
    _.reduce(recordList, recordListStringReducer, stringValue); // $ExpectType string
    _.reduce(recordList, recordStringReducer, stringValue, context); // $ExpectType string
    _(recordList).reduce(recordListStringReducer, stringValue); // $ExpectType string
    _(recordList).reduce(recordStringReducer, stringValue, context); // $ExpectType string
    extractChainTypes(_.chain(recordList).reduce(recordListStringReducer, stringValue)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(recordList).reduce(recordStringReducer, stringValue, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - foldl
    _.foldl(recordList, recordListStringReducer, stringValue); // $ExpectType string
    _.foldl(recordList, recordStringReducer, stringValue, context); // $ExpectType string
    _(recordList).foldl(recordListStringReducer, stringValue); // $ExpectType string
    _(recordList).foldl(recordStringReducer, stringValue, context); // $ExpectType string
    extractChainTypes(_.chain(recordList).foldl(recordListStringReducer, stringValue)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(recordList).foldl(recordStringReducer, stringValue, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - inject
    _.inject(recordList, recordListStringReducer, stringValue); // $ExpectType string
    _.inject(recordList, recordStringReducer, stringValue, context); // $ExpectType string
    _(recordList).inject(recordListStringReducer, stringValue); // $ExpectType string
    _(recordList).inject(recordStringReducer, stringValue, context); // $ExpectType string
    extractChainTypes(_.chain(recordList).inject(recordListStringReducer, stringValue)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(recordList).inject(recordStringReducer, stringValue, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - dictionaries - reduce
    _.reduce(recordDictionary, recordDictionaryStringReducer, stringValue); // $ExpectType string
    _.reduce(recordDictionary, recordStringReducer, stringValue, context); // $ExpectType string
    _(recordDictionary).reduce(recordDictionaryStringReducer, stringValue); // $ExpectType string
    _(recordDictionary).reduce(recordStringReducer, stringValue, context); // $ExpectType string
    extractChainTypes(_.chain(recordDictionary).reduce(recordDictionaryStringReducer, stringValue)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(recordDictionary).reduce(recordStringReducer, stringValue, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - dictionaries - foldl
    _.foldl(recordDictionary, recordDictionaryStringReducer, stringValue); // $ExpectType string
    _.foldl(recordDictionary, recordStringReducer, stringValue, context); // $ExpectType string
    _(recordDictionary).foldl(recordDictionaryStringReducer, stringValue); // $ExpectType string
    _(recordDictionary).foldl(recordStringReducer, stringValue, context); // $ExpectType string
    extractChainTypes(_.chain(recordDictionary).foldl(recordDictionaryStringReducer, stringValue)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(recordDictionary).foldl(recordStringReducer, stringValue, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - dictionaries - inject
    _.inject(recordDictionary, recordDictionaryStringReducer, stringValue); // $ExpectType string
    _.inject(recordDictionary, recordStringReducer, stringValue, context); // $ExpectType string
    _(recordDictionary).inject(recordDictionaryStringReducer, stringValue); // $ExpectType string
    _(recordDictionary).inject(recordStringReducer, stringValue, context); // $ExpectType string
    extractChainTypes(_.chain(recordDictionary).inject(recordDictionaryStringReducer, stringValue)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(recordDictionary).inject(recordStringReducer, stringValue, context)); // $ExpectType ChainType<string, string>

    // object memo and memo-type result - strings - reduce
    _.reduce(stringValue, dictionaryStringReducer, numberDictionary); // $ExpectType Dictionary<number>
    _.reduce(stringValue, dictionaryStringReducer, numberDictionary, context); // $ExpectType Dictionary<number>
    _(stringValue).reduce(dictionaryStringReducer, numberDictionary); // $ExpectType Dictionary<number>
    _(stringValue).reduce(dictionaryStringReducer, numberDictionary, context); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(stringValue).reduce(dictionaryStringReducer, numberDictionary)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(stringValue).reduce(dictionaryStringReducer, numberDictionary, context)); // $ExpectType ChainType<Dictionary<number>, number>

    // object memo and memo-type result - strings - foldl
    _.foldl(stringValue, dictionaryStringReducer, numberDictionary); // $ExpectType Dictionary<number>
    _.foldl(stringValue, dictionaryStringReducer, numberDictionary, context); // $ExpectType Dictionary<number>
    _(stringValue).foldl(dictionaryStringReducer, numberDictionary); // $ExpectType Dictionary<number>
    _(stringValue).foldl(dictionaryStringReducer, numberDictionary, context); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(stringValue).foldl(dictionaryStringReducer, numberDictionary)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(stringValue).foldl(dictionaryStringReducer, numberDictionary, context)); // $ExpectType ChainType<Dictionary<number>, number>

    // object memo and memo-type result - strings - inject
    _.inject(stringValue, dictionaryStringReducer, numberDictionary); // $ExpectType Dictionary<number>
    _.inject(stringValue, dictionaryStringReducer, numberDictionary, context); // $ExpectType Dictionary<number>
    _(stringValue).inject(dictionaryStringReducer, numberDictionary); // $ExpectType Dictionary<number>
    _(stringValue).inject(dictionaryStringReducer, numberDictionary, context); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(stringValue).inject(dictionaryStringReducer, numberDictionary)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(stringValue).inject(dictionaryStringReducer, numberDictionary, context)); // $ExpectType ChainType<Dictionary<number>, number>

    // no memo and collection type result - strings - reduce
    _.reduce(stringValue, stringStringReducer); // $ExpectType string | undefined
    _(stringValue).reduce(stringStringReducer); // $ExpectType string | undefined
    extractChainTypes(_.chain(stringValue).reduce(stringStringReducer)); // $ExpectType ChainType<string | undefined, string>

    // no memo and collection type result - strings - foldl
    _.foldl(stringValue, stringStringReducer); // $ExpectType string | undefined
    _(stringValue).foldl(stringStringReducer); // $ExpectType string | undefined
    extractChainTypes(_.chain(stringValue).foldl(stringStringReducer)); // $ExpectType ChainType<string | undefined, string>

    // no memo and collection type result - strings - inject
    _.inject(stringValue, stringStringReducer); // $ExpectType string | undefined
    _(stringValue).inject(stringStringReducer); // $ExpectType string | undefined
    extractChainTypes(_.chain(stringValue).inject(stringStringReducer)); // $ExpectType ChainType<string | undefined, string>

    // constant primitive memo and type union result - lists - reduce
    _.reduce(recordList, recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    _(recordList).reduce(recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(recordList).reduce(recordUnionReducer, stringValue)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - foldl
    _.foldl(recordList, recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    _(recordList).foldl(recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(recordList).foldl(recordUnionReducer, stringValue)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - inject
    _.inject(recordList, recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    _(recordList).inject(recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(recordList).inject(recordUnionReducer, stringValue)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - dictionaries - reduce
    _.reduce(recordDictionary, recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    _(recordDictionary).reduce(recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(recordDictionary).reduce(recordUnionReducer, stringValue)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - dictionaries - foldl
    _.foldl(recordDictionary, recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    _(recordDictionary).foldl(recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(recordDictionary).foldl(recordUnionReducer, stringValue)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - dictionaries - inject
    _.inject(recordDictionary, recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    _(recordDictionary).inject(recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(recordDictionary).inject(recordUnionReducer, stringValue)); // $ExpectType ChainType<string | StringRecord, string>

    // no memo and union type result - strings - reduce
    _.reduce(stringValue, unionStringReducer); // $ExpectType string | number | undefined
    _(stringValue).reduce(unionStringReducer); // $ExpectType string | number | undefined
    extractChainTypes(_.chain(stringValue).reduce(unionStringReducer)); // $ExpectType ChainType<string | number | undefined, string>

    // no memo and union type result - strings - foldl
    _.foldl(stringValue, unionStringReducer); // $ExpectType string | number | undefined
    _(stringValue).foldl(unionStringReducer); // $ExpectType string | number | undefined
    extractChainTypes(_.chain(stringValue).foldl(unionStringReducer)); // $ExpectType ChainType<string | number | undefined, string>

    // no memo and union type result - strings - inject
    _.inject(stringValue, unionStringReducer); // $ExpectType string | number | undefined
    _(stringValue).inject(unionStringReducer); // $ExpectType string | number | undefined
    extractChainTypes(_.chain(stringValue).inject(unionStringReducer)); // $ExpectType ChainType<string | number | undefined, string>
}

// reduceRight, foldr

// flattening an array in reverse order
_([[0, 1], [2, 3], [4, 5]]).reduceRight((a: number[], b) => a.concat(b), []); // $ExpectType number[]

{
    // constant primitive memo and memo-type result - lists - reduceRight
    _.reduceRight(recordList, recordListStringReducer, stringValue); // $ExpectType string
    _.reduceRight(recordList, recordStringReducer, stringValue, context); // $ExpectType string
    _(recordList).reduceRight(recordListStringReducer, stringValue); // $ExpectType string
    _(recordList).reduceRight(recordStringReducer, stringValue, context); // $ExpectType string
    extractChainTypes(_.chain(recordList).reduceRight(recordListStringReducer, stringValue)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(recordList).reduceRight(recordStringReducer, stringValue, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - foldr
    _.foldr(recordList, recordListStringReducer, stringValue); // $ExpectType string
    _.foldr(recordList, recordStringReducer, stringValue, context); // $ExpectType string
    _(recordList).foldr(recordListStringReducer, stringValue); // $ExpectType string
    _(recordList).foldr(recordStringReducer, stringValue, context); // $ExpectType string
    extractChainTypes(_.chain(recordList).foldr(recordListStringReducer, stringValue)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(recordList).foldr(recordStringReducer, stringValue, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - dictionaries - reduceRight
    _.reduceRight(recordDictionary, recordDictionaryStringReducer, stringValue); // $ExpectType string
    _.reduceRight(recordDictionary, recordStringReducer, stringValue, context); // $ExpectType string
    _(recordDictionary).reduceRight(recordDictionaryStringReducer, stringValue); // $ExpectType string
    _(recordDictionary).reduceRight(recordStringReducer, stringValue, context); // $ExpectType string
    extractChainTypes(_.chain(recordDictionary).reduceRight(recordDictionaryStringReducer, stringValue)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(recordDictionary).reduceRight(recordStringReducer, stringValue, context)); // $ExpectType ChainType<string, string>

    // constant primitive memo and memo-type result - dictionaries - foldr
    _.foldr(recordDictionary, recordDictionaryStringReducer, stringValue); // $ExpectType string
    _.foldr(recordDictionary, recordStringReducer, stringValue, context); // $ExpectType string
    _(recordDictionary).foldr(recordDictionaryStringReducer, stringValue); // $ExpectType string
    _(recordDictionary).foldr(recordStringReducer, stringValue, context); // $ExpectType string
    extractChainTypes(_.chain(recordDictionary).foldr(recordDictionaryStringReducer, stringValue)); // $ExpectType ChainType<string, string>
    extractChainTypes(_.chain(recordDictionary).foldr(recordStringReducer, stringValue, context)); // $ExpectType ChainType<string, string>

    // object memo and memo-type result - strings - reduceRight
    _.reduceRight(stringValue, dictionaryStringReducer, numberDictionary); // $ExpectType Dictionary<number>
    _.reduceRight(stringValue, dictionaryStringReducer, numberDictionary, context); // $ExpectType Dictionary<number>
    _(stringValue).reduceRight(dictionaryStringReducer, numberDictionary); // $ExpectType Dictionary<number>
    _(stringValue).reduceRight(dictionaryStringReducer, numberDictionary, context); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(stringValue).reduceRight(dictionaryStringReducer, numberDictionary)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(stringValue).reduceRight(dictionaryStringReducer, numberDictionary, context)); // $ExpectType ChainType<Dictionary<number>, number>

    // object memo and memo-type result - strings - foldr
    _.foldr(stringValue, dictionaryStringReducer, numberDictionary); // $ExpectType Dictionary<number>
    _.foldr(stringValue, dictionaryStringReducer, numberDictionary, context); // $ExpectType Dictionary<number>
    _(stringValue).foldr(dictionaryStringReducer, numberDictionary); // $ExpectType Dictionary<number>
    _(stringValue).foldr(dictionaryStringReducer, numberDictionary, context); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(stringValue).foldr(dictionaryStringReducer, numberDictionary)); // $ExpectType ChainType<Dictionary<number>, number>
    extractChainTypes(_.chain(stringValue).foldr(dictionaryStringReducer, numberDictionary, context)); // $ExpectType ChainType<Dictionary<number>, number>

    // no memo and collection type result - strings - reduceRight
    _.reduceRight(stringValue, stringStringReducer); // $ExpectType string | undefined
    _(stringValue).reduceRight(stringStringReducer); // $ExpectType string | undefined
    extractChainTypes(_.chain(stringValue).reduceRight(stringStringReducer)); // $ExpectType ChainType<string | undefined, string>

    // no memo and collection type result - strings - foldr
    _.foldr(stringValue, stringStringReducer); // $ExpectType string | undefined
    _(stringValue).foldr(stringStringReducer); // $ExpectType string | undefined
    extractChainTypes(_.chain(stringValue).foldr(stringStringReducer)); // $ExpectType ChainType<string | undefined, string>

    // constant primitive memo and type union result - lists - reduceRight
    _.reduceRight(recordList, recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    _(recordList).reduceRight(recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(recordList).reduceRight(recordUnionReducer, stringValue)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - lists - foldr
    _.foldl(recordList, recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    _(recordList).foldl(recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(recordList).foldl(recordUnionReducer, stringValue)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - dictionaries - reduceRight
    _.reduceRight(recordDictionary, recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    _(recordDictionary).reduceRight(recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(recordDictionary).reduceRight(recordUnionReducer, stringValue)); // $ExpectType ChainType<string | StringRecord, string>

    // constant primitive memo and type union result - dictionaries - foldr
    _.foldr(recordDictionary, recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    _(recordDictionary).foldr(recordUnionReducer, stringValue); // $ExpectType string | StringRecord
    extractChainTypes(_.chain(recordDictionary).foldr(recordUnionReducer, stringValue)); // $ExpectType ChainType<string | StringRecord, string>

    // no memo and union type result - strings - reduceRight
    _.reduceRight(stringValue, unionStringReducer); // $ExpectType string | number | undefined
    _(stringValue).reduceRight(unionStringReducer); // $ExpectType string | number | undefined
    extractChainTypes(_.chain(stringValue).reduceRight(unionStringReducer)); // $ExpectType ChainType<string | number | undefined, string>

    // no memo and union type result - strings - foldr
    _.foldr(stringValue, unionStringReducer); // $ExpectType string | number | undefined
    _(stringValue).foldr(unionStringReducer); // $ExpectType string | number | undefined
    extractChainTypes(_.chain(stringValue).foldr(unionStringReducer)); // $ExpectType ChainType<string | number | undefined, string>
}

// find, detect

{
    // function iteratee - lists - find
    _.find(recordList, recordListTester, context); // $ExpectType StringRecord | undefined
    _(recordList).find(recordListTester, context); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordList).find(recordListTester, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    // function iteratee - lists - detect
    _.detect(recordList, recordListTester, context); // $ExpectType StringRecord | undefined
    _(recordList).detect(recordListTester, context); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordList).detect(recordListTester, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    // function iteratee - dictionaries - find
    _.find(recordDictionary, recordDictionaryTester, context); // $ExpectType StringRecord | undefined
    _(recordDictionary).find(recordDictionaryTester, context); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordDictionary).find(recordDictionaryTester, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    // function iteratee - dictionaries - detect
    _.detect(recordDictionary, recordDictionaryTester, context); // $ExpectType StringRecord | undefined
    _(recordDictionary).detect(recordDictionaryTester, context); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordDictionary).detect(recordDictionaryTester, context)); // $ExpectType ChainType<StringRecord | undefined, never>

    // function iteratee - strings - find
    _.find(stringValue, stringTester, context); // $ExpectType string | undefined
    _(stringValue).find(stringTester, context); // $ExpectType string | undefined
    extractChainTypes(_.chain(stringValue).find(stringTester, context)); // $ExpectType ChainType<string | undefined, string>

    // function iteratee - strings - detect
    _.detect(stringValue, stringTester, context); // $ExpectType string | undefined
    _(stringValue).detect(stringTester, context); // $ExpectType string | undefined
    extractChainTypes(_.chain(stringValue).detect(stringTester, context)); // $ExpectType ChainType<string | undefined, string>

    // function iteratee - any - find
    _.find(anyValue, recordTester, context); // $ExpectType any
    _(anyValue).find(recordTester, context); // $ExpectType any
    extractChainTypes(_.chain(anyValue).find(recordTester, context)); // $ExpectType ChainType<any, any>

    // function iteratee - any - detect
    _.detect(anyValue, recordTester, context); // $ExpectType any
    _(anyValue).detect(recordTester, context); // $ExpectType any
    extractChainTypes(_.chain(anyValue).detect(recordTester, context)); // $ExpectType ChainType<any, any>

    // matcher iteratee - lists - find
    _.find(recordList, matcher); // $ExpectType StringRecord | undefined
    _(recordList).find(matcher); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordList).find(matcher)); // $ExpectType ChainType<StringRecord | undefined, never>

    // matcher iteratee - dictionaries - detect
    _.detect(recordDictionary, matcher); // $ExpectType StringRecord | undefined
    _(recordDictionary).detect(matcher); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordDictionary).detect(matcher)); // $ExpectType ChainType<StringRecord | undefined, never>

    // shallow property iteratee - dictionaries - find
    _.find(recordDictionary, shallowProperty); // $ExpectType StringRecord | undefined
    _(recordDictionary).find(shallowProperty); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordDictionary).find(shallowProperty)); // $ExpectType ChainType<StringRecord | undefined, never>

    // shallow property iteratee - lists - detect
    _.detect(recordList, shallowProperty); // $ExpectType StringRecord | undefined
    _(recordList).detect(shallowProperty); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordList).detect(shallowProperty)); // $ExpectType ChainType<StringRecord | undefined, never>

    // deep property iteratee - lists - find
    _.find(recordList, deepProperty); // $ExpectType StringRecord | undefined
    _(recordList).find(deepProperty); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordList).find(deepProperty)); // $ExpectType ChainType<StringRecord | undefined, never>

    // deep property iteratee - dictionaries - detect
    _.detect(recordDictionary, deepProperty); // $ExpectType StringRecord | undefined
    _(recordDictionary).detect(deepProperty); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordDictionary).detect(deepProperty)); // $ExpectType ChainType<StringRecord | undefined, never>

    // identity iteratee - dictionaries - find
    _.find(numberDictionary); // $ExpectType number | undefined
    _(numberDictionary).find(); // $ExpectType number | undefined
    extractChainTypes(_.chain(numberDictionary).find()); // $ExpectType ChainType<number | undefined, never>

    // identity iteratee - lists - detect
    _.detect(stringList); // $ExpectType string | undefined
    _(stringList).detect(); // $ExpectType string | undefined
    extractChainTypes(_.chain(stringList).detect()); // $ExpectType ChainType<string | undefined, string>
}

// filter, select

// filtering to only evens
_.filter(numberArray, num => num % 2 === 0); // $ExpectType number[]

// filtering to only uppercase letters
_({ a: 'a', b: 'B', c: 'C', d: 'd' }).filter(l => l === l.toUpperCase()); // $ExpectType string[]

{
    // function iteratee - lists - filter
    _.filter(recordList, recordListTester, context); // $ExpectType StringRecord[]
    _(recordList).filter(recordListTester, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).filter(recordListTester, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - lists - select
    _.select(recordList, recordListTester, context); // $ExpectType StringRecord[]
    _(recordList).select(recordListTester, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).select(recordListTester, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - dictionaries - filter
    _.filter(recordDictionary, recordDictionaryTester, context); // $ExpectType StringRecord[]
    _(recordDictionary).filter(recordDictionaryTester, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).filter(recordDictionaryTester, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - dictionaries - select
    _.select(recordDictionary, recordDictionaryTester, context); // $ExpectType StringRecord[]
    _(recordDictionary).select(recordDictionaryTester, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).select(recordDictionaryTester, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - strings - filter
    _.filter(stringValue, stringTester, context); // $ExpectType string[]
    _(stringValue).filter(stringTester, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringValue).filter(stringTester, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - strings - select
    _.select(stringValue, stringTester, context); // $ExpectType string[]
    _(stringValue).select(stringTester, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringValue).select(stringTester, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - any - filter
    _.filter(anyValue, recordTester, context); // $ExpectType any[]
    _(anyValue).filter(recordTester, context); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).filter(recordTester, context)); // $ExpectType ChainType<any[], any>

    // function iteratee - any - select
    _.select(anyValue, recordTester, context); // $ExpectType any[]
    _(anyValue).select(recordTester, context); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).select(recordTester, context)); // $ExpectType ChainType<any[], any>

    // matcher iteratee - lists - filter
    _.filter(recordList, matcher); // $ExpectType StringRecord[]
    _(recordList).filter(matcher); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).filter(matcher)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // matcher iteratee - dictionaries - select
    _.select(recordDictionary, matcher); // $ExpectType StringRecord[]
    _(recordDictionary).select(matcher); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).select(matcher)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // shallow property iteratee - dictionaries - filter
    _.filter(recordDictionary, shallowProperty); // $ExpectType StringRecord[]
    _(recordDictionary).filter(shallowProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).filter(shallowProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // shallow property iteratee - lists - select
    _.select(recordList, shallowProperty); // $ExpectType StringRecord[]
    _(recordList).select(shallowProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).select(shallowProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // deep property iteratee - lists - filter
    _.filter(recordList, deepProperty); // $ExpectType StringRecord[]
    _(recordList).filter(deepProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).filter(deepProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // deep property iteratee - dictionaries - select
    _.select(recordDictionary, deepProperty); // $ExpectType StringRecord[]
    _(recordDictionary).select(deepProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).select(deepProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // identity iteratee - dictionaries - filter
    _.filter(numberDictionary); // $ExpectType number[]
    _(numberDictionary).filter(); // $ExpectType number[]
    extractChainTypes(_.chain(numberDictionary).filter()); // $ExpectType ChainType<number[], number>

    // identity iteratee - lists - select
    _.select(stringList); // $ExpectType string[]
    _(stringList).select(); // $ExpectType string[]
    extractChainTypes(_.chain(stringList).select()); // $ExpectType ChainType<string[], string>
}

// where

// filtering to partial matches
// $ExpectType { title: string; author: string; year: number; }[]
_.where([
    { title: "Cymbeline", author: "Shakespeare", year: 1611 },
    { title: "The Tempest", author: "Shakespeare", year: 1611 },
    { title: "Other", author: "Not Shakespeare", year: 2012 }
],
    { author: "Shakespeare", year: 1611 }
);

{
    // non-intersecting type union - lists
    _.where(nonIntersectingList, matcher); // $ExpectType NonIntersecting[]
    _(nonIntersectingList).where(matcher); // $ExpectType NonIntersecting[]
    extractChainTypes(_.chain(nonIntersectingList).where(matcher)); // $ExpectType ChainType<NonIntersecting[], NonIntersecting>

    // simple type - dictionaries
    _.where(recordDictionary, matcher); // $ExpectType StringRecord[]
    _(recordDictionary).where(matcher); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).where(matcher)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // any
    _.where(anyValue, matcher); // $ExpectType any[]
    _(anyValue).where(matcher); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).where(matcher)); // $ExpectType ChainType<any[], any>
}

// findWhere

{
    // non-intersecting type union - lists
    _.findWhere(nonIntersectingList, matcher); // $ExpectType StringRecord | NonIntersectingRecord | undefined || NonIntersecting | undefined
    _(nonIntersectingList).findWhere(matcher); // $ExpectType StringRecord | NonIntersectingRecord | undefined || NonIntersecting | undefined
    extractChainTypes(_.chain(nonIntersectingList).findWhere(matcher)); // $ExpectType ChainType<StringRecord | NonIntersectingRecord | undefined, never> || ChainType<NonIntersecting | undefined, never>

    // simple type - dictionaries
    _.findWhere(recordDictionary, matcher); // $ExpectType StringRecord | undefined
    _(recordDictionary).findWhere(matcher); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordDictionary).findWhere(matcher)); // $ExpectType ChainType<StringRecord | undefined, never>

    // any
    _.findWhere(anyValue, matcher); // $ExpectType any
    _(anyValue).findWhere(matcher); // $ExpectType any
    extractChainTypes(_.chain(anyValue).findWhere(matcher)); // $ExpectType ChainType<any, any>
}

// reject

// rejecting evens
_.reject(numberArray, (num) => num % 2 === 0); // $ExpectType number[]

{
    // function iteratee - lists
    _.reject(recordList, recordListTester, context); // $ExpectType StringRecord[]
    _(recordList).reject(recordListTester, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).reject(recordListTester, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - dictionaries
    _.reject(recordDictionary, recordDictionaryTester, context); // $ExpectType StringRecord[]
    _(recordDictionary).reject(recordDictionaryTester, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).reject(recordDictionaryTester, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - strings
    _.reject(stringValue, stringTester, context); // $ExpectType string[]
    _(stringValue).reject(stringTester, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringValue).reject(stringTester, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - any
    _.reject(anyValue, recordTester, context); // $ExpectType any[]
    _(anyValue).reject(recordTester, context); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).reject(recordTester, context)); // $ExpectType ChainType<any[], any>

    // matcher iteratee - lists
    _.reject(recordList, matcher); // $ExpectType StringRecord[]
    _(recordList).reject(matcher); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).reject(matcher)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // shallow property iteratee - dictionaries
    _.reject(recordDictionary, shallowProperty); // $ExpectType StringRecord[]
    _(recordDictionary).reject(shallowProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).reject(shallowProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // deep property iteratee - lists
    _.reject(recordList, deepProperty); // $ExpectType StringRecord[]
    _(recordList).reject(deepProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).reject(deepProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // identity iteratee - dictionaries
    _.reject(numberDictionary); // $ExpectType number[]
    _(numberDictionary).reject(); // $ExpectType number[]
    extractChainTypes(_.chain(numberDictionary).reject()); // $ExpectType ChainType<number[], number>
}

// every, all

// determining whether every value is truthy
_.every([true, 1, null, 'yes']); // $ExpectType boolean

{
    // function iteratee - lists - every
    _.every(recordList, recordListTester); // $ExpectType boolean
    _(recordList).every(recordListTester, context); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).every(recordListTester)); // $ExpectType ChainType<boolean, never>

    // function iteratee - lists - all
    _.all(recordList, recordListTester, context); // $ExpectType boolean
    _(recordList).all(recordListTester); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).all(recordListTester, context)); // $ExpectType ChainType<boolean, never>

    // function iteratee - dictionaries - every
    _.every(recordDictionary, recordDictionaryTester, context); // $ExpectType boolean
    _(recordDictionary).every(recordDictionaryTester); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).every(recordDictionaryTester, context)); // $ExpectType ChainType<boolean, never>

    // function iteratee - dictionaries - all
    _.all(recordDictionary, recordDictionaryTester); // $ExpectType boolean
    _(recordDictionary).all(recordDictionaryTester, context); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).all(recordDictionaryTester)); // $ExpectType ChainType<boolean, never>

    // matcher iteratee - lists - every
    _.every(recordList, matcher); // $ExpectType boolean
    _(recordList).every(matcher); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).every(matcher)); // $ExpectType ChainType<boolean, never>

    // matcher iteratee - lists - all
    _.all(recordList, matcher); // $ExpectType boolean
    _(recordList).all(matcher); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).all(matcher)); // $ExpectType ChainType<boolean, never>

    // matcher iteratee - dictionaries - every
    _.every(recordDictionary, matcher); // $ExpectType boolean
    _(recordDictionary).every(matcher); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).every(matcher)); // $ExpectType ChainType<boolean, never>

    // matcher iteratee - dictionaries - all
    _.all(recordDictionary, matcher); // $ExpectType boolean
    _(recordDictionary).all(matcher); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).all(matcher)); // $ExpectType ChainType<boolean, never>

    // property name iterator - lists - every
    _.every(recordList, shallowProperty); // $ExpectType boolean
    _(recordList).every(shallowProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).every(shallowProperty)); // $ExpectType ChainType<boolean, never>

    // property name iterator - lists - all
    _.all(recordList, shallowProperty); // $ExpectType boolean
    _(recordList).all(shallowProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).all(shallowProperty)); // $ExpectType ChainType<boolean, never>

    // property name iterator - dictionaries - every
    _.every(recordDictionary, shallowProperty); // $ExpectType boolean
    _(recordDictionary).every(shallowProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).every(shallowProperty)); // $ExpectType ChainType<boolean, never>

    // property name iterator - dictionaries - all
    _.all(recordDictionary, shallowProperty); // $ExpectType boolean
    _(recordDictionary).all(shallowProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).all(shallowProperty)); // $ExpectType ChainType<boolean, never>

    // property path iterator - lists - every
    _.every(recordList, deepProperty); // $ExpectType boolean
    _(recordList).every(deepProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).every(deepProperty)); // $ExpectType ChainType<boolean, never>

    // property path iterator - lists - all
    _.all(recordList, deepProperty); // $ExpectType boolean
    _(recordList).all(deepProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).all(deepProperty)); // $ExpectType ChainType<boolean, never>

    // property path iterator - dictionaries - every
    _.every(recordDictionary, deepProperty); // $ExpectType boolean
    _(recordDictionary).every(deepProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).every(deepProperty)); // $ExpectType ChainType<boolean, never>

    // property path iterator - dictionaries - all
    _.all(recordDictionary, deepProperty); // $ExpectType boolean
    _(recordDictionary).all(deepProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).all(deepProperty)); // $ExpectType ChainType<boolean, never>

    // identity iterator - lists - every
    _.every(booleanList); // $ExpectType boolean
    _(booleanList).every(); // $ExpectType boolean
    extractChainTypes(_.chain(booleanList).every()); // $ExpectType ChainType<boolean, never>

    // identity iterator - lists - all
    _.all(booleanList); // $ExpectType boolean
    _(booleanList).all(); // $ExpectType boolean
    extractChainTypes(_.chain(booleanList).all()); // $ExpectType ChainType<boolean, never>

    // identity iterator - dictionaries - every
    _.every(booleanDictionary); // $ExpectType boolean
    _(booleanDictionary).every(); // $ExpectType boolean
    extractChainTypes(_.chain(booleanDictionary).every()); // $ExpectType ChainType<boolean, never>

    // identity iterator - dictionaries - all
    _.all(booleanDictionary); // $ExpectType boolean
    _(booleanDictionary).all(); // $ExpectType boolean
    extractChainTypes(_.chain(booleanDictionary).all()); // $ExpectType ChainType<boolean, never>
}

// some, any

// determining whether any number in a list is divisible by three
_.some(numberArray, l => l % 3 === 0); // $ExpectType boolean

// determining whether any value in a dictionary is uppercase
_.some({ a: 'a', b: 'B', c: 'C', d: 'd' }, l => l === l.toUpperCase()); // $ExpectType boolean

{
    // function iteratee - lists - some
    _.some(recordList, recordListTester); // $ExpectType boolean
    _(recordList).some(recordListTester, context); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).some(recordListTester)); // $ExpectType ChainType<boolean, never>

    // function iteratee - lists - any
    _.any(recordList, recordListTester, context); // $ExpectType boolean
    _(recordList).any(recordListTester); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).any(recordListTester, context)); // $ExpectType ChainType<boolean, never>

    // function iteratee - dictionaries - some
    _.some(recordDictionary, recordDictionaryTester, context); // $ExpectType boolean
    _(recordDictionary).some(recordDictionaryTester); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).some(recordDictionaryTester, context)); // $ExpectType ChainType<boolean, never>

    // function iteratee - dictionaries - any
    _.any(recordDictionary, recordDictionaryTester); // $ExpectType boolean
    _(recordDictionary).any(recordDictionaryTester, context); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).any(recordDictionaryTester)); // $ExpectType ChainType<boolean, never>

    // matcher iteratee - lists - some
    _.some(recordList, matcher); // $ExpectType boolean
    _(recordList).some(matcher); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).some(matcher)); // $ExpectType ChainType<boolean, never>

    // matcher iteratee - lists - any
    _.any(recordList, matcher); // $ExpectType boolean
    _(recordList).any(matcher); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).any(matcher)); // $ExpectType ChainType<boolean, never>

    // matcher iteratee - dictionaries - some
    _.some(recordDictionary, matcher); // $ExpectType boolean
    _(recordDictionary).some(matcher); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).some(matcher)); // $ExpectType ChainType<boolean, never>

    // matcher iteratee - dictionaries - any
    _.any(recordDictionary, matcher); // $ExpectType boolean
    _(recordDictionary).any(matcher); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).any(matcher)); // $ExpectType ChainType<boolean, never>

    // property name iterator - lists - some
    _.some(recordList, shallowProperty); // $ExpectType boolean
    _(recordList).some(shallowProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).some(shallowProperty)); // $ExpectType ChainType<boolean, never>

    // property name iterator - lists - any
    _.any(recordList, shallowProperty); // $ExpectType boolean
    _(recordList).any(shallowProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).any(shallowProperty)); // $ExpectType ChainType<boolean, never>

    // property name iterator - dictionaries - some
    _.some(recordDictionary, shallowProperty); // $ExpectType boolean
    _(recordDictionary).some(shallowProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).some(shallowProperty)); // $ExpectType ChainType<boolean, never>

    // property name iterator - dictionaries - any
    _.any(recordDictionary, shallowProperty); // $ExpectType boolean
    _(recordDictionary).any(shallowProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).any(shallowProperty)); // $ExpectType ChainType<boolean, never>

    // property path iterator - lists - some
    _.some(recordList, deepProperty); // $ExpectType boolean
    _(recordList).some(deepProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).some(deepProperty)); // $ExpectType ChainType<boolean, never>

    // property path iterator - lists - any
    _.any(recordList, deepProperty); // $ExpectType boolean
    _(recordList).any(deepProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).any(deepProperty)); // $ExpectType ChainType<boolean, never>

    // property path iterator - dictionaries - some
    _.some(recordDictionary, deepProperty); // $ExpectType boolean
    _(recordDictionary).some(deepProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).some(deepProperty)); // $ExpectType ChainType<boolean, never>

    // property path iterator - dictionaries - any
    _.any(recordDictionary, deepProperty); // $ExpectType boolean
    _(recordDictionary).any(deepProperty); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).any(deepProperty)); // $ExpectType ChainType<boolean, never>

    // identity iterator - lists - some
    _.some(booleanList); // $ExpectType boolean
    _(booleanList).some(); // $ExpectType boolean
    extractChainTypes(_.chain(booleanList).some()); // $ExpectType ChainType<boolean, never>

    // identity iterator - lists - any
    _.any(booleanList); // $ExpectType boolean
    _(booleanList).any(); // $ExpectType boolean
    extractChainTypes(_.chain(booleanList).any()); // $ExpectType ChainType<boolean, never>

    // identity iterator - dictionaries - some
    _.some(booleanDictionary); // $ExpectType boolean
    _(booleanDictionary).some(); // $ExpectType boolean
    extractChainTypes(_.chain(booleanDictionary).some()); // $ExpectType ChainType<boolean, never>

    // identity iterator - dictionaries - any
    _.any(booleanDictionary); // $ExpectType boolean
    _(booleanDictionary).any(); // $ExpectType boolean
    extractChainTypes(_.chain(booleanDictionary).any()); // $ExpectType ChainType<boolean, never>
}

// contains, include, includes

// checking whether an item is in an array
_.contains(numberArray, 3); // $ExpectType boolean

// checking whether an item is in the portion of an array that starts with index 1
_.contains(numberArray, 3, 1); // $ExpectType boolean

{
    // no index - lists - contains
    _.contains(recordList, recordList[0]); // $ExpectType boolean
    _(recordList).contains(recordList[0]); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).contains(recordList[0])); // $ExpectType ChainType<boolean, never>

    // no index - lists - include
    _.include(recordList, recordList[0]); // $ExpectType boolean
    _(recordList).include(recordList[0]); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).include(recordList[0])); // $ExpectType ChainType<boolean, never>

    // no index - lists - includes
    _.includes(recordList, recordList[0]); // $ExpectType boolean
    _(recordList).includes(recordList[0]); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).includes(recordList[0])); // $ExpectType ChainType<boolean, never>

    // no index - dictionaries - contains
    _.contains(recordDictionary, recordList[0]); // $ExpectType boolean
    _(recordDictionary).contains(recordList[0]); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).contains(recordList[0])); // $ExpectType ChainType<boolean, never>

    // no index - dictionaries - include
    _.include(recordDictionary, recordList[0]); // $ExpectType boolean
    _(recordDictionary).include(recordList[0]); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).include(recordList[0])); // $ExpectType ChainType<boolean, never>

    // no index - dictionaries - includes
    _.includes(recordDictionary, recordList[0]); // $ExpectType boolean
    _(recordDictionary).includes(recordList[0]); // $ExpectType boolean
    extractChainTypes(_.chain(recordDictionary).includes(recordList[0])); // $ExpectType ChainType<boolean, never>

    // with index - contains
    _.contains(recordList, recordList[0], numberValue); // $ExpectType boolean
    _(recordList).contains(recordList[0], numberValue); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).contains(recordList[0], numberValue)); // $ExpectType ChainType<boolean, never>

    // with index - include
    _.include(recordList, recordList[0], numberValue); // $ExpectType boolean
    _(recordList).include(recordList[0], numberValue); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).include(recordList[0], numberValue)); // $ExpectType ChainType<boolean, never>

    // with index - includes
    _.includes(recordList, recordList[0], numberValue); // $ExpectType boolean
    _(recordList).includes(recordList[0], numberValue); // $ExpectType boolean
    extractChainTypes(_.chain(recordList).includes(recordList[0], numberValue)); // $ExpectType ChainType<boolean, never>
}

// invoke

// truncating a set of strings to 5 characters or less
_.invoke(['zebra', 'giraffe', 'lion'], 'substring', 0, 5); // $ExpectType any[]

{
    // function without parameters
    _.invoke(noParametersRecordList, shallowProperty); // $ExpectType any[]
    _(noParametersRecordList).invoke(shallowProperty); // $ExpectType any[]
    extractChainTypes(_.chain(noParametersRecordList).invoke(shallowProperty)); // $ExpectType ChainType<any[], any>

    // function with parameters
    _.invoke(twoParametersRecordDictionary, shallowProperty, numberValue, stringValue); // $ExpectType any[]
    _(twoParametersRecordDictionary).invoke(shallowProperty, numberValue, stringValue); // $ExpectType any[]
    extractChainTypes(_.chain(twoParametersRecordDictionary).invoke(shallowProperty, numberValue, stringValue)); // $ExpectType ChainType<any[], any>
}

// pluck

// retrieving a property value from all items in a collection
_.pluck(stooges, 'name'); // $ExpectType string[]

{
    // shallow property iteratee with a non-nullable single type - lists
    _.pluck(recordList, shallowProperty); // $ExpectType string[]
    _(recordList).pluck(shallowProperty); // $ExpectType string[]
    extractChainTypes(_.chain(recordList).pluck(shallowProperty)); // $ExpectType ChainType<string[], string>

    // shallow property iteratee with a non-nullable single type - dictionaries
    _.pluck(recordDictionary, shallowProperty); // $ExpectType string[]
    _(recordDictionary).pluck(shallowProperty); // $ExpectType string[]
    extractChainTypes(_.chain(recordDictionary).pluck(shallowProperty)); // $ExpectType ChainType<string[], string>

    // shallow property iteratee with other types - lists
    _.pluck(maybeRecordList, shallowProperty); // $ExpectType any[]
    _.pluck(intersectingPropertiesList, shallowProperty); // $ExpectType (string | StringRecord)[]
    _.pluck(nonIntersectingList, shallowProperty) // $ExpectType any[]
    _.pluck(anyValue, shallowProperty); // $ExpectType any[]
}

// max

// retrieving the item with the maximum number in a property
_.max(stooges, stooge => stooge.age); // $ExpectType number | { name: string; age: number; }

{
    // function iteratee - lists
    _.max(numberRecordList, numberRecordListSelector); // $ExpectType number | NumberRecord
    _.max(numberRecordList, numberRecordListSelector, context); // $ExpectType number | NumberRecord
    _(numberRecordList).max(numberRecordListSelector); // $ExpectType number | NumberRecord
    _(numberRecordList).max(numberRecordListSelector, context); // $ExpectType number | NumberRecord
    extractChainTypes(_.chain(numberRecordList).max(numberRecordListSelector)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordList).max(numberRecordListSelector, context)); // $ExpectType ChainType<number | NumberRecord, never>

    // function iteratee - dictionaries
    _.max(numberRecordDictionary, numberRecordDictionarySelector); // $ExpectType number | NumberRecord
    _.max(numberRecordDictionary, numberRecordDictionarySelector, context); // $ExpectType number | NumberRecord
    _(numberRecordDictionary).max(numberRecordDictionarySelector); // $ExpectType number | NumberRecord
    _(numberRecordDictionary).max(numberRecordDictionarySelector, context); // $ExpectType number | NumberRecord
    extractChainTypes(_.chain(numberRecordDictionary).max(numberRecordDictionarySelector)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordDictionary).max(numberRecordDictionarySelector, context)); // $ExpectType ChainType<number | NumberRecord, never>

    // shallow property iteratee - lists
    _.max(numberRecordList, shallowProperty); // $ExpectType number | NumberRecord
    _(numberRecordList).max(shallowProperty); // $ExpectType number | NumberRecord
    extractChainTypes(_.chain(numberRecordList).max(shallowProperty)); // $ExpectType ChainType<number | NumberRecord, never>

    // shallow property iteratee - dictionaries
    _.max(numberRecordDictionary, shallowProperty); // $ExpectType number | NumberRecord
    _(numberRecordDictionary).max(shallowProperty); // $ExpectType number | NumberRecord
    extractChainTypes(_.chain(numberRecordDictionary).max(shallowProperty)); // $ExpectType ChainType<number | NumberRecord, never>

    // deep property iteratee - lists
    _.max(numberRecordList, deepProperty); // $ExpectType number | NumberRecord
    _(numberRecordList).max(deepProperty); // $ExpectType number | NumberRecord
    extractChainTypes(_.chain(numberRecordList).max(deepProperty)); // $ExpectType ChainType<number | NumberRecord, never>

    // deep property iteratee - dictionaries
    _.max(numberRecordDictionary, deepProperty); // $ExpectType number | NumberRecord
    _(numberRecordDictionary).max(deepProperty); // $ExpectType number | NumberRecord
    extractChainTypes(_.chain(numberRecordDictionary).max(deepProperty)); // $ExpectType ChainType<number | NumberRecord, never>

    // identity iteratee - lists
    _.max(numberList); // $ExpectType number
    _(numberList).max(); // $ExpectType number
    extractChainTypes(_.chain(numberList).max()); // $ExpectType ChainType<number, never>

    // identity iteratee - dictionaries
    _.max(numberDictionary); // $ExpectType number
    _(numberDictionary).max(); // $ExpectType number
    extractChainTypes(_.chain(numberDictionary).max()); // $ExpectType ChainType<number, never>
}

// min

// retrieving the minimum number in a dictionary
_.min(numberDictionary); // $ExpectType number

{
    // function iteratee - lists
    _.min(numberRecordList, numberRecordListSelector); // $ExpectType number | NumberRecord
    _.min(numberRecordList, numberRecordListSelector, context); // $ExpectType number | NumberRecord
    _(numberRecordList).min(numberRecordListSelector); // $ExpectType number | NumberRecord
    _(numberRecordList).min(numberRecordListSelector, context); // $ExpectType number | NumberRecord
    extractChainTypes(_.chain(numberRecordList).min(numberRecordListSelector)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordList).min(numberRecordListSelector, context)); // $ExpectType ChainType<number | NumberRecord, never>

    // function iteratee - dictionaries
    _.min(numberRecordDictionary, numberRecordDictionarySelector); // $ExpectType number | NumberRecord
    _.min(numberRecordDictionary, numberRecordDictionarySelector, context); // $ExpectType number | NumberRecord
    _(numberRecordDictionary).min(numberRecordDictionarySelector); // $ExpectType number | NumberRecord
    _(numberRecordDictionary).min(numberRecordDictionarySelector, context); // $ExpectType number | NumberRecord
    extractChainTypes(_.chain(numberRecordDictionary).min(numberRecordDictionarySelector)); // $ExpectType ChainType<number | NumberRecord, never>
    extractChainTypes(_.chain(numberRecordDictionary).min(numberRecordDictionarySelector, context)); // $ExpectType ChainType<number | NumberRecord, never>

    // shallow property iteratee - lists
    _.min(numberRecordList, shallowProperty); // $ExpectType number | NumberRecord
    _(numberRecordList).min(shallowProperty); // $ExpectType number | NumberRecord
    extractChainTypes(_.chain(numberRecordList).min(shallowProperty)); // $ExpectType ChainType<number | NumberRecord, never>

    // shallow property iteratee - dictionaries
    _.min(numberRecordDictionary, shallowProperty); // $ExpectType number | NumberRecord
    _(numberRecordDictionary).min(shallowProperty); // $ExpectType number | NumberRecord
    extractChainTypes(_.chain(numberRecordDictionary).min(shallowProperty)); // $ExpectType ChainType<number | NumberRecord, never>

    // deep property iteratee - lists
    _.min(numberRecordList, deepProperty); // $ExpectType number | NumberRecord
    _(numberRecordList).min(deepProperty); // $ExpectType number | NumberRecord
    extractChainTypes(_.chain(numberRecordList).min(deepProperty)); // $ExpectType ChainType<number | NumberRecord, never>

    // deep property iteratee - dictionaries
    _.min(numberRecordDictionary, deepProperty); // $ExpectType number | NumberRecord
    _(numberRecordDictionary).min(deepProperty); // $ExpectType number | NumberRecord
    extractChainTypes(_.chain(numberRecordDictionary).min(deepProperty)); // $ExpectType ChainType<number | NumberRecord, never>

    // identity iteratee - lists
    _.min(numberList); // $ExpectType number
    _(numberList).min(); // $ExpectType number
    extractChainTypes(_.chain(numberList).min()); // $ExpectType ChainType<number, never>

    // identity iteratee - dictionaries
    _.min(numberDictionary); // $ExpectType number
    _(numberDictionary).min(); // $ExpectType number
    extractChainTypes(_.chain(numberDictionary).min()); // $ExpectType ChainType<number, never>
}

// sortBy

// sorting by a calculated value
_.sortBy(numberArray, num => Math.sin(num)); // $ExpectType number[]

{
    // function iteratee - lists
    _.sortBy(recordList, recordListSelector); // $ExpectType StringRecord[]
    _(recordList).sortBy(recordListSelector, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).sortBy(recordListSelector)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - dictionaries
    _.sortBy(recordDictionary, recordDictionarySelector, context); // $ExpectType StringRecord[]
    _(recordDictionary).sortBy(recordDictionarySelector); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).sortBy(recordDictionarySelector, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // matcher iteratee - lists
    _.sortBy(recordList, matcher); // $ExpectType StringRecord[]
    _(recordList).sortBy(matcher); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).sortBy(matcher)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // matcher iteratee - dictionaries
    _.sortBy(recordDictionary, matcher); // $ExpectType StringRecord[]
    _(recordDictionary).sortBy(matcher); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).sortBy(matcher)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // shallow property iteratee - lists
    _.sortBy(recordList, shallowProperty); // $ExpectType StringRecord[]
    _(recordList).sortBy(shallowProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).sortBy(shallowProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // shallow property iteratee - dictionaries
    _.sortBy(recordDictionary, shallowProperty); // $ExpectType StringRecord[]
    _(recordDictionary).sortBy(shallowProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).sortBy(shallowProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // deep property iteratee - lists
    _.sortBy(recordList, deepProperty); // $ExpectType StringRecord[]
    _(recordList).sortBy(deepProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).sortBy(deepProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // deep property iteratee - dictionaries
    _.sortBy(recordDictionary, deepProperty); // $ExpectType StringRecord[]
    _(recordDictionary).sortBy(deepProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).sortBy(deepProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // identity iteratee - lists
    _.sortBy(recordList); // $ExpectType StringRecord[]
    _(recordList).sortBy(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).sortBy()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // identity iteratee - dictionaries
    _.sortBy(recordDictionary); // $ExpectType StringRecord[]
    _(recordDictionary).sortBy(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).sortBy()); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// groupBy

// grouping numbers by their non-fractional parts
_([1.3, 2.1, 2.4]).groupBy((e) => Math.floor(e)); // $ExpectType Dictionary<number[]>

// grouping numbers by the value of a specified property
_.groupBy(['one', 'two', 'three'], 'length'); // $ExpectType Dictionary<string[]>

{
    // function iteratee - lists
    _.groupBy(recordList, recordListSelector, context); // $ExpectType Dictionary<StringRecord[]>
    _(recordList).groupBy(recordListSelector, context); // $ExpectType Dictionary<StringRecord[]>
    _.chain(recordList).groupBy(recordListSelector, context); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // function iteratee - dictionaries
    _.groupBy(recordDictionary, recordDictionarySelector, context); // $ExpectType Dictionary<StringRecord[]>
    _(recordDictionary).groupBy(recordDictionarySelector, context); // $ExpectType Dictionary<StringRecord[]>
    _.chain(recordDictionary).groupBy(recordDictionarySelector, context); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // matcher iteratee - lists
    _.groupBy(recordList, matcher); // $ExpectType Dictionary<StringRecord[]>
    _(recordList).groupBy(matcher); // $ExpectType Dictionary<StringRecord[]>
    _.chain(recordList).groupBy(matcher); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // matcher iteratee - dictionaries
    _.groupBy(recordDictionary, matcher); // $ExpectType Dictionary<StringRecord[]>
    _(recordDictionary).groupBy(matcher); // $ExpectType Dictionary<StringRecord[]>
    _.chain(recordDictionary).groupBy(matcher); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // shallow property iteratee - lists
    _.groupBy(recordList, shallowProperty); // $ExpectType Dictionary<StringRecord[]>
    _(recordList).groupBy(shallowProperty); // $ExpectType Dictionary<StringRecord[]>
    _.chain(recordList).groupBy(shallowProperty); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // shallow property iteratee - dictionaries
    _.groupBy(recordDictionary, shallowProperty); // $ExpectType Dictionary<StringRecord[]>
    _(recordDictionary).groupBy(shallowProperty); // $ExpectType Dictionary<StringRecord[]>
    _.chain(recordDictionary).groupBy(shallowProperty); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // deep property iteratee - lists
    _.groupBy(recordList, deepProperty); // $ExpectType Dictionary<StringRecord[]>
    _(recordList).groupBy(deepProperty); // $ExpectType Dictionary<StringRecord[]>
    _.chain(recordList).groupBy(deepProperty); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // deep property iteratee - dictionaries
    _.groupBy(recordDictionary, deepProperty); // $ExpectType Dictionary<StringRecord[]>
    _(recordDictionary).groupBy(deepProperty); // $ExpectType Dictionary<StringRecord[]>
    _.chain(recordDictionary).groupBy(deepProperty); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // identity iteratee - lists
    _.groupBy(recordList); // $ExpectType Dictionary<StringRecord[]>
    _(recordList).groupBy(); // $ExpectType Dictionary<StringRecord[]>
    _.chain(recordList).groupBy(); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // identity iteratee - dictionaries
    _.groupBy(recordDictionary); // $ExpectType Dictionary<StringRecord[]>
    _(recordDictionary).groupBy(); // $ExpectType Dictionary<StringRecord[]>
    _.chain(recordDictionary).groupBy(); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>
}

// indexBy

// indexing items in a dictionary by age
_.indexBy(stooges, 'age'); // $ExpectType Dictionary<{ name: string; age: number; }>

{
    // function iteratee - lists
    _.indexBy(recordList, recordListSelector); // $ExpectType Dictionary<StringRecord>
    _(recordList).indexBy(recordListSelector, context); // $ExpectType Dictionary<StringRecord>
    extractChainTypes(_.chain(recordList).indexBy(recordListSelector)); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    // function iteratee - dictionaries
    _.indexBy(recordDictionary, recordDictionarySelector, context); // $ExpectType Dictionary<StringRecord>
    _(recordDictionary).indexBy(recordDictionarySelector); // $ExpectType Dictionary<StringRecord>
    extractChainTypes(_.chain(recordDictionary).indexBy(recordDictionarySelector, context)); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    // matcher iteratee - lists
    _.indexBy(recordList, matcher); // $ExpectType Dictionary<StringRecord>
    _(recordList).indexBy(matcher); // $ExpectType Dictionary<StringRecord>
    extractChainTypes(_.chain(recordList).indexBy(matcher)); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    // matcher iteratee - dictionaries
    _.indexBy(recordDictionary, matcher); // $ExpectType Dictionary<StringRecord>
    _(recordDictionary).indexBy(matcher); // $ExpectType Dictionary<StringRecord>
    extractChainTypes(_.chain(recordDictionary).indexBy(matcher)); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    // shallow property iteratee - lists
    _.indexBy(recordList, shallowProperty); // $ExpectType Dictionary<StringRecord>
    _(recordList).indexBy(shallowProperty); // $ExpectType Dictionary<StringRecord>
    extractChainTypes(_.chain(recordList).indexBy(shallowProperty)); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    // shallow property iteratee - dictionaries
    _.indexBy(recordDictionary, shallowProperty); // $ExpectType Dictionary<StringRecord>
    _(recordDictionary).indexBy(shallowProperty); // $ExpectType Dictionary<StringRecord>
    extractChainTypes(_.chain(recordDictionary).indexBy(shallowProperty)); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    // deep property iteratee - lists
    _.indexBy(recordList, deepProperty); // $ExpectType Dictionary<StringRecord>
    _(recordList).indexBy(deepProperty); // $ExpectType Dictionary<StringRecord>
    extractChainTypes(_.chain(recordList).indexBy(deepProperty)); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    // deep property iteratee - dictionaries
    _.indexBy(recordDictionary, deepProperty); // $ExpectType Dictionary<StringRecord>
    _(recordDictionary).indexBy(deepProperty); // $ExpectType Dictionary<StringRecord>
    extractChainTypes(_.chain(recordDictionary).indexBy(deepProperty)); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    // identity iteratee - lists
    _.indexBy(recordList); // $ExpectType Dictionary<StringRecord>
    _(recordList).indexBy(); // $ExpectType Dictionary<StringRecord>
    extractChainTypes(_.chain(recordList).indexBy()); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    // identity iteratee - dictionaries
    _.indexBy(recordDictionary); // $ExpectType Dictionary<StringRecord>
    _(recordDictionary).indexBy(); // $ExpectType Dictionary<StringRecord>
    extractChainTypes(_.chain(recordDictionary).indexBy()); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>
}

// countBy

// counting numbers by their evenness
_.countBy(numberArray, num => (num % 2 === 0) ? 'even' : 'odd'); // $ExpectType Dictionary<number>

{
    // function iteratee - lists
    _.countBy(recordList, recordListSelector); // $ExpectType Dictionary<number>
    _(recordList).countBy(recordListSelector, context); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(recordList).countBy(recordListSelector)); // $ExpectType ChainType<Dictionary<number>, number>

    // function iteratee - dictionaries
    _.countBy(recordDictionary, recordDictionarySelector, context); // $ExpectType Dictionary<number>
    _(recordDictionary).countBy(recordDictionarySelector); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(recordDictionary).countBy(recordDictionarySelector, context)); // $ExpectType ChainType<Dictionary<number>, number>

    // matcher iteratee - lists
    _.countBy(recordList, matcher); // $ExpectType Dictionary<number>
    _(recordList).countBy(matcher); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(recordList).countBy(matcher)); // $ExpectType ChainType<Dictionary<number>, number>

    // matcher iteratee - dictionaries
    _.countBy(recordDictionary, matcher); // $ExpectType Dictionary<number>
    _(recordDictionary).countBy(matcher); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(recordDictionary).countBy(matcher)); // $ExpectType ChainType<Dictionary<number>, number>

    // shallow property iteratee - lists
    _.countBy(recordList, shallowProperty); // $ExpectType Dictionary<number>
    _(recordList).countBy(shallowProperty); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(recordList).countBy(shallowProperty)); // $ExpectType ChainType<Dictionary<number>, number>

    // shallow property iteratee - dictionaries
    _.countBy(recordDictionary, shallowProperty); // $ExpectType Dictionary<number>
    _(recordDictionary).countBy(shallowProperty); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(recordDictionary).countBy(shallowProperty)); // $ExpectType ChainType<Dictionary<number>, number>

    // deep property iteratee - lists
    _.countBy(recordList, deepProperty); // $ExpectType Dictionary<number>
    _(recordList).countBy(deepProperty); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(recordList).countBy(deepProperty)); // $ExpectType ChainType<Dictionary<number>, number>

    // deep property iteratee - dictionaries
    _.countBy(recordDictionary, deepProperty); // $ExpectType Dictionary<number>
    _(recordDictionary).countBy(deepProperty); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(recordDictionary).countBy(deepProperty)); // $ExpectType ChainType<Dictionary<number>, number>

    // identity iteratee - lists
    _.countBy(recordList); // $ExpectType Dictionary<number>
    _(recordList).countBy(); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(recordList).countBy()); // $ExpectType ChainType<Dictionary<number>, number>

    // identity iteratee - dictionaries
    _.countBy(recordDictionary); // $ExpectType Dictionary<number>
    _(recordDictionary).countBy(); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(recordDictionary).countBy()); // $ExpectType ChainType<Dictionary<number>, number>
}

// shuffle

// shuffling numbers
_.shuffle(numberArray); // $ExpectType number[]

{
    // lists
    _.shuffle(recordList); // $ExpectType StringRecord[]
    _(recordList).shuffle(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).shuffle()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // dictionaries
    _.shuffle(recordDictionary); // $ExpectType StringRecord[]
    _(recordDictionary).shuffle(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).shuffle()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // strings
    _.shuffle(stringValue); // $ExpectType string[]
    _(stringValue).shuffle(); // $ExpectType string[]
    extractChainTypes(_.chain(stringValue).shuffle()); // $ExpectType ChainType<string[], string>
}

// sample

{
    // without n - lists
    _.sample(recordList); // $ExpectType StringRecord | undefined
    _(recordList).sample(); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordList).sample()); // $ExpectType ChainType<StringRecord | undefined, never>

    // without n - dictionaries
    _.sample(recordDictionary); // $ExpectType StringRecord | undefined
    _(recordDictionary).sample(); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordDictionary).sample()); // $ExpectType ChainType<StringRecord | undefined, never>

    // without n - strings
    _.sample(stringValue); // $ExpectType string | undefined
    _(stringValue).sample(); // $ExpectType string | undefined
    extractChainTypes(_.chain(stringValue).sample()); // $ExpectType ChainType<string | undefined, string>

    // with n - lists
    _.sample(recordList, numberValue); // $ExpectType StringRecord[]
    _(recordList).sample(numberValue); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).sample(numberValue)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - dictionaries
    _.sample(recordDictionary, numberValue); // $ExpectType StringRecord[]
    _(recordDictionary).sample(numberValue); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).sample(numberValue)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - strings
    _.sample(stringValue, numberValue); // $ExpectType string[]
    _(stringValue).sample(numberValue); // $ExpectType string[]
    extractChainTypes(_.chain(stringValue).sample(numberValue)); // $ExpectType ChainType<string[], string>
}

// toArray

// converting an array-like structure to an array
(function (a, b, c, d) {
    const args = _.toArray(arguments); // $ExpectType any[]
    return args;
})(1, 2, 3, 4);

// converting a dictionary to an array
_.toArray(explicitNumberDictionary); // $ExpectType number[]

{
    // lists
    _.toArray(recordList); // $ExpectType StringRecord[]
    _(recordList).toArray(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).toArray()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // dictionaries
    _.toArray(recordDictionary); // $ExpectType StringRecord[]
    _(recordDictionary).toArray(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordDictionary).toArray()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // strings
    _.toArray(stringValue); // $ExpectType string[]
    _(stringValue).toArray(); // $ExpectType string[]
    extractChainTypes(_.chain(stringValue).toArray()); // $ExpectType ChainType<string[], string>
}

// size

// determining the number of items in a dictionary
_.size(explicitNumberDictionary); // $ExpectType number

{
    // lists
    _.size(recordList); // $ExpectType number
    _(recordList).size(); // $ExpectType number
    extractChainTypes(_.chain(recordList).size()); // $ExpectType ChainType<number, never>

    // dictionaries
    _.size(recordDictionary); // $ExpectType number
    _(recordDictionary).size(); // $ExpectType number
    extractChainTypes(_.chain(recordDictionary).size()); // $ExpectType ChainType<number, never>

    // strings
    _.size(stringValue); // $ExpectType number
    _(stringValue).size(); // $ExpectType number
    extractChainTypes(_.chain(stringValue).size()); // $ExpectType ChainType<number, never>
}

// partition

// splitting numbers into sets of even and odd values
_.partition(numberArray, num => num % 2 === 0); // $ExpectType [number[], number[]]

{
    // function iteratee - lists
    _.partition(recordList, recordListTester); // $ExpectType [StringRecord[], StringRecord[]]
    _.partition(recordList, recordListTester, context); // $ExpectType [StringRecord[], StringRecord[]]
    _(recordList).partition(recordListTester); // $ExpectType [StringRecord[], StringRecord[]]
    _(recordList).partition(recordListTester, context); // $ExpectType [StringRecord[], StringRecord[]]
    extractChainTypes(_.chain(recordList).partition(recordListTester)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>
    extractChainTypes(_.chain(recordList).partition(recordListTester, context)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    // function iteratee - dictionaries
    _.partition(recordDictionary, recordDictionaryTester); // $ExpectType [StringRecord[], StringRecord[]]
    _.partition(recordDictionary, recordDictionaryTester, context); // $ExpectType [StringRecord[], StringRecord[]]
    _(recordDictionary).partition(recordDictionaryTester); // $ExpectType [StringRecord[], StringRecord[]]
    _(recordDictionary).partition(recordDictionaryTester, context); // $ExpectType [StringRecord[], StringRecord[]]
    extractChainTypes(_.chain(recordDictionary).partition(recordDictionaryTester)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>
    extractChainTypes(_.chain(recordDictionary).partition(recordDictionaryTester, context)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    // function iteratee - strings
    _.partition(stringValue, stringTester); // $ExpectType [string[], string[]]
    _.partition(stringValue, stringTester, context); // $ExpectType [string[], string[]]
    _(stringValue).partition(stringTester); // $ExpectType [string[], string[]]
    _(stringValue).partition(stringTester, context); // $ExpectType [string[], string[]]
    extractChainTypes(_.chain(stringValue).partition(stringTester)); // $ExpectType ChainType<[string[], string[]], string[]>
    extractChainTypes(_.chain(stringValue).partition(stringTester, context)); // $ExpectType ChainType<[string[], string[]], string[]>

    // matcher iteratee - lists
    _.partition(recordList, matcher); // $ExpectType [StringRecord[], StringRecord[]]
    _(recordList).partition(matcher); // $ExpectType [StringRecord[], StringRecord[]]
    extractChainTypes(_.chain(recordList).partition(matcher)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    // shallow property iteratee - dictionaries
    _.partition(recordDictionary, shallowProperty); // $ExpectType [StringRecord[], StringRecord[]]
    _(recordDictionary).partition(shallowProperty); // $ExpectType [StringRecord[], StringRecord[]]
    extractChainTypes(_.chain(recordDictionary).partition(shallowProperty)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    // deep property iteratee - lists
    _.partition(recordList, deepProperty); // $ExpectType [StringRecord[], StringRecord[]]
    _(recordList).partition(deepProperty); // $ExpectType [StringRecord[], StringRecord[]]
    extractChainTypes(_.chain(recordList).partition(deepProperty)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    // identity iteratee - dictionaries
    _.partition(numberDictionary); // $ExpectType [number[], number[]]
    _(numberDictionary).partition(); // $ExpectType [number[], number[]]
    extractChainTypes(_.chain(numberDictionary).partition()); // $ExpectType ChainType<[number[], number[]], number[]>
}

/**********
 * Arrays *
 **********/

// first, head, take

// retrieving the first item in an array
_.first(numberArray); // $ExpectType number | undefined

{
    // without n - first
    _.first(recordList); // $ExpectType StringRecord | undefined
    _(recordList).first(); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordList).first()); // $ExpectType ChainType<StringRecord | undefined, never>

    // without n - head
    _.head(recordList); // $ExpectType StringRecord | undefined
    _(recordList).head(); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordList).head()); // $ExpectType ChainType<StringRecord | undefined, never>

    // without n - take
    _.take(recordList); // $ExpectType StringRecord | undefined
    _(recordList).take(); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordList).take()); // $ExpectType ChainType<StringRecord | undefined, never>

    // with n - first
    _.first(recordList, numberValue); // $ExpectType StringRecord[]
    _(recordList).first(numberValue); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).first(numberValue)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - head
    _.head(recordList, numberValue); // $ExpectType StringRecord[]
    _(recordList).head(numberValue); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).head(numberValue)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - take
    _.take(recordList, numberValue); // $ExpectType StringRecord[]
    _(recordList).take(numberValue); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).take(numberValue)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// initial

// retrieving all but the last element in an array
_.initial(numberArray); // $ExpectType number[]

{
    // without n
    _.initial(recordList); // $ExpectType StringRecord[]
    _(recordList).initial(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).initial()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n
    _.initial(recordList, numberValue); // $ExpectType StringRecord[]
    _(recordList).initial(numberValue); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).initial(numberValue)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// last

// retrieving the last two elements in an array
_.last(numberArray, 2); // $ExpectType number[]

{
    // without n
    _.last(recordList); // $ExpectType StringRecord | undefined
    _(recordList).last(); // $ExpectType StringRecord | undefined
    extractChainTypes(_.chain(recordList).last()); // $ExpectType ChainType<StringRecord | undefined, never>

    // with n
    _.last(recordList, numberValue); // $ExpectType StringRecord[]
    _(recordList).last(numberValue); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).last(numberValue)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// rest, tail, drop

// retrieving all but the first two elements in an array
_.rest(numberArray, 2); // $ExpectType number[]

{
    // without n - rest
    _.rest(recordList); // $ExpectType StringRecord[]
    _(recordList).rest(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).rest()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // without n - tail
    _.tail(recordList); // $ExpectType StringRecord[]
    _(recordList).tail(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).tail()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // without n - drop
    _.drop(recordList); // $ExpectType StringRecord[]
    _(recordList).drop(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).drop()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - rest
    _.rest(recordList, numberValue); // $ExpectType StringRecord[]
    _(recordList).rest(numberValue); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).rest(numberValue)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - tail
    _.tail(recordList, numberValue); // $ExpectType StringRecord[]
    _(recordList).tail(numberValue); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).tail(numberValue)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - drop
    _.drop(recordList, numberValue); // $ExpectType StringRecord[]
    _(recordList).drop(numberValue); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).drop(numberValue)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// compact

// removing falsy values
_.compact([0, 1, false, 2, '', '3', undefined]); // $ExpectType (string | number | true)[]

{
    // lists
    _.compact(truthyFalsyList); // $ExpectType (string | number | true | object | Function | StringRecord | (() => void))[]
    _(truthyFalsyList).compact(); // $ExpectType (string | number | true | object | Function | StringRecord | (() => void))[]
    extractChainTypes(_.chain(truthyFalsyList).compact()); // $ExpectType ChainType<(string | number | true | object | Function | StringRecord | (() => void))[], string | number | true | object | Function | StringRecord | (() => void)>

    // maybe lists
    _.compact(maybeTruthyFalsyList); // $ExpectType (string | number | true | object | Function | StringRecord | (() => void))[]
    _(maybeTruthyFalsyList).compact(); // $ExpectType (string | number | true | object | Function | StringRecord | (() => void))[]
    extractChainTypes(_.chain(maybeTruthyFalsyList).compact()); // $ExpectType ChainType<(string | number | true | object | Function | StringRecord | (() => void))[], string | number | true | object | Function | StringRecord | (() => void)>
}

// flatten

// deep flattening an array
_.flatten([[[1, 2], [3]], [[4, 5]]]); // $ExpectType any[]

// shallow flattening an array
_.flatten([[[1, 2], [3]], [[4, 5]]], true); // $ExpectType number[][]

// flattening an array to a particular depth
_.flatten([[[1, 2], [3]], [[4, 5]]], 2); // $ExpectType any[]

{
    // one dimension, deep
    _.flatten(recordList); // $ExpectType StringRecord[]
    _(recordList).flatten(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // one dimension, shallow
    _.flatten(recordList, true); // $ExpectType StringRecord[]
    _(recordList).flatten(true); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).flatten(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

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
    _.flatten(stringArray, true); // $ExpectType string[]
    _(stringArray).flatten(true); // $ExpectType string[]
    extractChainTypes(_.chain(stringArray).flatten(true)); // $ExpectType ChainType<string[], string>

    _.flatten(stringList, true); // $ExpectType string[]
    _(stringList).flatten(true); // $ExpectType string[]
    extractChainTypes(_.chain(stringList).flatten(true)); // $ExpectType ChainType<string[], string>

    // type unions, deep
    _.flatten(level2NonIntersectingList); // $ExpectType NonIntersecting[]
    _(level2NonIntersectingList).flatten(); // $ExpectType NonIntersecting[]
    extractChainTypes(_.chain(level2NonIntersectingList).flatten()); // $ExpectType ChainType<NonIntersecting[], NonIntersecting>

    // type unions, shallow
    _.flatten(level2NonIntersectingList, true); // $ExpectType NonIntersecting[]
    _(level2NonIntersectingList).flatten(true); // $ExpectType NonIntersecting[]
    extractChainTypes(_.chain(level2NonIntersectingList).flatten(true)); // $ExpectType ChainType<NonIntersecting[], NonIntersecting>
}

// without

// excluding values from a list
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1); // $ExpectType number[]

{
    // lists
    _.without(recordList, recordList[0], recordList[1]); // $ExpectType StringRecord[]
    _(recordList).without(recordList[0], recordList[1]); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).without(recordList[0], recordList[1])); // $ExpectType ChainType<StringRecord[], StringRecord>

    // strings
    _.without(stringValue, stringValue[0], stringValue[1]); // $ExpectType string[]
    _(stringValue).without(stringValue[0], stringValue[1]); // $ExpectType string[]
    extractChainTypes(_.chain(stringValue).without(stringValue[0], stringValue[1])); // $ExpectType ChainType<string[], string>
}

// union

// computing the union of several sets
_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]); // $ExpectType number[]

{
    // lists
    _.union(...recordListArray); // $ExpectType StringRecord[]
    _(recordList).union(...recordListArray); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).union(...recordListArray)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // list and array mix
    _.union(stringList, stringArray, stringList); // $ExpectType string[]
    _(stringList).union(stringArray, stringList); // $ExpectType string[]
    extractChainTypes(_.chain(stringList).union(stringArray, stringList)); // $ExpectType ChainType<string[], string>
}

// intersection

// computing the intersection of several sets
_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]); // $ExpectType number[]

{
    // lists
    _.intersection(...recordListArray); // $ExpectType StringRecord[]
    _(recordList).intersection(...recordListArray); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).intersection(...recordListArray)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // list and array mix
    _.intersection(stringList, stringArray, stringList); // $ExpectType string[]
    _(stringList).intersection(stringArray, stringList); // $ExpectType string[]
    extractChainTypes(_.chain(stringList).intersection(stringArray, stringList)); // $ExpectType ChainType<string[], string>
}

// difference

// computing the difference between one set and other sets
_.difference([1, 2, 3, 4, 5], [5, 2, 10]); // $ExpectType number[]

{
    // lists
    _.difference(recordList, ...recordListArray); // $ExpectType StringRecord[]
    _(recordList).difference(...recordListArray); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).difference(...recordListArray)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // list and array mix
    _.intersection(stringList, stringArray, stringList); // $ExpectType string[]
    _(stringList).intersection(stringArray, stringList); // $ExpectType string[]
    extractChainTypes(_.chain(stringList).intersection(stringArray, stringList)); // $ExpectType ChainType<string[], string>
}

// uniq, unique

// determining the unique values in an array
_.uniq([1, 2, 1, 3, 1, 4]); // $ExpectType number[]

{
    // not sorted - identity iteratee - uniq
    _.uniq(recordList); // $ExpectType StringRecord[]
    _(recordList).uniq(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).uniq()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - identity iteratee - unique
    _.unique(recordList); // $ExpectType StringRecord[]
    _(recordList).unique(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).unique()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - function iteratee - uniq
    _.uniq(recordList, recordListSelector); // $ExpectType StringRecord[]
    _.uniq(recordList, recordListSelector, context); // $ExpectType StringRecord[]
    _(recordList).uniq(recordListSelector); // $ExpectType StringRecord[]
    _(recordList).uniq(recordListSelector, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).uniq(recordListSelector)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(recordList).uniq(recordListSelector, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - function iteratee - unique
    _.unique(recordList, recordListSelector); // $ExpectType StringRecord[]
    _.unique(recordList, recordListSelector, context); // $ExpectType StringRecord[]
    _(recordList).unique(recordListSelector); // $ExpectType StringRecord[]
    _(recordList).unique(recordListSelector, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).unique(recordListSelector)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(recordList).unique(recordListSelector, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - matcher iteratee - uniq
    _.uniq(recordList, matcher); // $ExpectType StringRecord[]
    _(recordList).uniq(matcher); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).uniq(matcher)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - matcher iteratee - unique
    _.unique(recordList, matcher); // $ExpectType StringRecord[]
    _(recordList).unique(matcher); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).unique(matcher)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - shallow property iteratee - uniq
    _.uniq(recordList, shallowProperty); // $ExpectType StringRecord[]
    _(recordList).uniq(shallowProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).uniq(shallowProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - shallow property iteratee - unique
    _.unique(recordList, shallowProperty); // $ExpectType StringRecord[]
    _(recordList).unique(shallowProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).unique(shallowProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - deep property iteratee - uniq
    _.uniq(recordList, deepProperty); // $ExpectType StringRecord[]
    _(recordList).uniq(deepProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).uniq(deepProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - deep property iteratee - unique
    _.unique(recordList, deepProperty); // $ExpectType StringRecord[]
    _(recordList).unique(deepProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).unique(deepProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - identity iteratee - uniq
    _.uniq(recordList, true); // $ExpectType StringRecord[]
    _(recordList).uniq(true); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).uniq(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - identity iteratee - unique
    _.unique(recordList, true); // $ExpectType StringRecord[]
    _(recordList).unique(true); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).unique(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - function iteratee - uniq
    _.uniq(recordList, true, recordListSelector); // $ExpectType StringRecord[]
    _.uniq(recordList, true, recordListSelector, context); // $ExpectType StringRecord[]
    _(recordList).uniq(true, recordListSelector); // $ExpectType StringRecord[]
    _(recordList).uniq(true, recordListSelector, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).uniq(true, recordListSelector)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(recordList).uniq(true, recordListSelector, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - function iteratee - unique
    _.unique(recordList, true, recordListSelector); // $ExpectType StringRecord[]
    _.unique(recordList, true, recordListSelector, context); // $ExpectType StringRecord[]
    _(recordList).unique(true, recordListSelector); // $ExpectType StringRecord[]
    _(recordList).unique(true, recordListSelector, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).unique(true, recordListSelector)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(recordList).unique(true, recordListSelector, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - matcher iteratee - uniq
    _.uniq(recordList, true, matcher); // $ExpectType StringRecord[]
    _(recordList).uniq(true, matcher); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).uniq(true, matcher)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - matcher iteratee - unique
    _.unique(recordList, true, matcher); // $ExpectType StringRecord[]
    _(recordList).unique(true, matcher); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).unique(true, matcher)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - shallow property iteratee - uniq
    _.uniq(recordList, true, shallowProperty); // $ExpectType StringRecord[]
    _(recordList).uniq(true, shallowProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).uniq(true, shallowProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - shallow property iteratee - unique
    _.unique(recordList, true, shallowProperty); // $ExpectType StringRecord[]
    _(recordList).unique(true, shallowProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).unique(true, shallowProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - deep property iteratee - uniq
    _.uniq(recordList, true, deepProperty); // $ExpectType StringRecord[]
    _(recordList).uniq(true, deepProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).uniq(true, deepProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - deep property iteratee - unique
    _.unique(recordList, true, deepProperty); // $ExpectType StringRecord[]
    _(recordList).unique(true, deepProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(recordList).unique(true, deepProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// zip

// merging together lists of values at a set of positions
_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]); // $ExpectType any[][]

{
    // multiple arguments
    _.zip(stringList, numberList, recordList); // $ExpectType any[][]
    _(stringList).zip(numberList, recordList); // $ExpectType any[][]
    extractChainTypes(_.chain(stringList).zip(numberList, recordList)); // $ExpectType ChainType<any[][], any[]>

    // single arguments
    _.zip(stringList); // $ExpectType any[][]
    _(stringList).zip(); // $ExpectType any[][]
    extractChainTypes(_.chain(stringList).zip()); // $ExpectType ChainType<any[][], any[]>
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

// transpose

{
    // tuple lists
    _.transpose(tupleList); // $ExpectType any[][]
    _(tupleList).transpose(); // $ExpectType any[][]
    extractChainTypes(_.chain(tupleList).transpose()); // $ExpectType ChainType<any[][], any[]>

    // nested lists
    _.transpose(level2UnionList); // $ExpectType any[][]
    _(level2UnionList).transpose(); // $ExpectType any[][]
    extractChainTypes(_.chain(level2UnionList).transpose()); // $ExpectType ChainType<any[][], any[]>
}

// object

// creating an object from a set of keys and a set of values
_.object(['moe', 'larry', 'curly'], [30, 40, 50]); // $ExpectType Dictionary<number | undefined>

// creating an object from a set of key-value pairs
_.object([['moe', 30], ['larry', 40], ['curly', 50]] as [string, number][]); // $ExpectType Dictionary<number>

{
    // key and value lists
    _.object(stringList, numberList); // $ExpectType Dictionary<number | undefined>
    _(stringList).object(numberList); // $ExpectType Dictionary<number | undefined>
    extractChainTypes(_.chain(stringList).object(numberList)); // $ExpectType ChainType<Dictionary<number | undefined>, number | undefined>

    // tuple lists
    _.object(tupleList); // $ExpectType Dictionary<number>
    _(tupleList).object(); // $ExpectType Dictionary<number>
    extractChainTypes(_.chain(tupleList).object()); // $ExpectType ChainType<Dictionary<number>, number>

    // nested lists
    _.object(level2UnionList); // $ExpectType Dictionary<string | number>
    _(level2UnionList).object(); // $ExpectType Dictionary<string | number>
    extractChainTypes(_.chain(level2UnionList).object()); // $ExpectType ChainType<Dictionary<string | number>, string | number>

    // non-nested lists
    _.object(recordList); // $ExpectError
    _(recordList).object(); // $ExpectType Dictionary<never>
    extractChainTypes(_.chain(recordList).object()); // $ExpectType ChainType<Dictionary<never>, never>
}

// chunk

{
    // lists
    _.chunk(recordList, numberValue); // $ExpectType StringRecord[][]
    _(recordList).chunk(numberValue); // $ExpectType StringRecord[][]
    extractChainTypes(_.chain(recordList).chunk(numberValue)); // $ExpectType ChainType<StringRecord[][], StringRecord[]>

    // strings
    _.chunk(stringValue, numberValue); // $ExpectType string[][]
    _(stringValue).chunk(numberValue); // $ExpectType string[][]
    extractChainTypes(_.chain(stringValue).chunk(numberValue)); // $ExpectType ChainType<string[][], string[]>
}

// indexOf

// finding the index of a value
_.indexOf(numberArray, 2); // $ExpectType number

{
    // not sorted, from zero
    _.indexOf(recordList, recordList[0]); // $ExpectType number
    _(recordList).indexOf(recordList[0]); // $ExpectType number
    extractChainTypes(_.chain(recordList).indexOf(recordList[0])); // $ExpectType ChainType<number, never>

    // sorted
    _.indexOf(recordList, recordList[0], true); // $ExpectType number
    _(recordList).indexOf(recordList[0], true); // $ExpectType number
    extractChainTypes(_.chain(recordList).indexOf(recordList[0], true)); // $ExpectType ChainType<number, never>

    // from index
    _.indexOf(recordList, recordList[0], numberValue); // $ExpectType number
    _(recordList).indexOf(recordList[0], numberValue); // $ExpectType number
    extractChainTypes(_.chain(recordList).indexOf(recordList[0], numberValue)); // $ExpectType ChainType<number, never>
}

// lastIndexOf

// finding the last index of a value
_.lastIndexOf(numberArray, 2); // $ExpectType number

{
    // from zero
    _.lastIndexOf(recordList, recordList[0]); // $ExpectType number
    _(recordList).lastIndexOf(recordList[0]); // $ExpectType number
    extractChainTypes(_.chain(recordList).lastIndexOf(recordList[0])); // $ExpectType ChainType<number, never>

    // from index
    _.lastIndexOf(recordList, recordList[0], numberValue); // $ExpectType number
    _(recordList).lastIndexOf(recordList[0], numberValue); // $ExpectType number
    extractChainTypes(_.chain(recordList).lastIndexOf(recordList[0], numberValue)); // $ExpectType ChainType<number, never>
}

// findIndex

// finding the index of the first matching value
_.findIndex(numberArray, num => num % 2 === 0); // $ExpectType number

// finding the index of the first matching value via a shallow object contents comparison
_.findIndex([{ a: 'a' }, { a: 'b' }], { a: 'b' }); // $ExpectType number

{
    // function iteratee
    _.findIndex(recordList, recordListTester); // $ExpectType number
    _.findIndex(recordList, recordListTester, context); // $ExpectType number
    _(recordList).findIndex(recordListTester); // $ExpectType number
    _(recordList).findIndex(recordListTester, context); // $ExpectType number
    extractChainTypes(_.chain(recordList).findIndex(recordListTester)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(recordList).findIndex(recordListTester, context)); // $ExpectType ChainType<number, never>

    // matcher iteratee
    _.findIndex(recordList, matcher); // $ExpectType number
    _(recordList).findIndex(matcher); // $ExpectType number
    extractChainTypes(_.chain(recordList).findIndex(matcher)); // $ExpectType ChainType<number, never>

    // shallow property iteratee
    _.findIndex(recordList, shallowProperty); // $ExpectType number
    _(recordList).findIndex(shallowProperty); // $ExpectType number
    extractChainTypes(_.chain(recordList).findIndex(shallowProperty)); // $ExpectType ChainType<number, never>

    // deep property iteratee
    _.findIndex(recordList, deepProperty); // $ExpectType number
    _(recordList).findIndex(deepProperty); // $ExpectType number
    extractChainTypes(_.chain(recordList).findIndex(deepProperty)); // $ExpectType ChainType<number, never>

    // identity iteratee
    _.findIndex(recordList); // $ExpectType number
    _(recordList).findIndex(); // $ExpectType number
    extractChainTypes(_.chain(recordList).findIndex()); // $ExpectType ChainType<number, never>
}

// findLastIndex

// finding the index of the last matching value
_.findLastIndex([1, 2, 3, 1, 2, 3], num => num % 2 === 0); // $ExpectType number

// finding the index of the last matching value via a shallow object contents comparison
_.findLastIndex([{ a: 'a' }, { a: 'b' }], { a: 'b' }); // $ExpectType number

{
    // function iteratee
    _.findLastIndex(recordList, recordListTester); // $ExpectType number
    _.findLastIndex(recordList, recordListTester, context); // $ExpectType number
    _(recordList).findLastIndex(recordListTester); // $ExpectType number
    _(recordList).findLastIndex(recordListTester, context); // $ExpectType number
    extractChainTypes(_.chain(recordList).findLastIndex(recordListTester)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(recordList).findLastIndex(recordListTester, context)); // $ExpectType ChainType<number, never>

    // matcher iteratee
    _.findLastIndex(recordList, matcher); // $ExpectType number
    _(recordList).findLastIndex(matcher); // $ExpectType number
    extractChainTypes(_.chain(recordList).findLastIndex(matcher)); // $ExpectType ChainType<number, never>

    // shallow property iteratee
    _.findLastIndex(recordList, shallowProperty); // $ExpectType number
    _(recordList).findLastIndex(shallowProperty); // $ExpectType number
    extractChainTypes(_.chain(recordList).findLastIndex(shallowProperty)); // $ExpectType ChainType<number, never>

    // deep property iteratee
    _.findLastIndex(recordList, deepProperty); // $ExpectType number
    _(recordList).findLastIndex(deepProperty); // $ExpectType number
    extractChainTypes(_.chain(recordList).findLastIndex(deepProperty)); // $ExpectType ChainType<number, never>

    // identity iteratee
    _.findLastIndex(recordList); // $ExpectType number
    _(recordList).findLastIndex(); // $ExpectType number
    extractChainTypes(_.chain(recordList).findLastIndex()); // $ExpectType ChainType<number, never>
}

// sortedIndex

// finding the index at which to insert a value to maintain order
_.sortedIndex(numberArray, 35); // $ExpectType number

{
    // identity iteratee
    _.sortedIndex(stringList, stringValue); // $ExpectType number
    _(stringList).sortedIndex(stringValue); // $ExpectType number
    extractChainTypes(_.chain(stringList).sortedIndex(stringValue)); // $ExpectType ChainType<number, never>

    // function iteratee
    _.sortedIndex(recordList, recordList[0], recordMaybeListSelector); // $ExpectType number
    _.sortedIndex(recordList, recordList[0], recordMaybeListSelector, context); // $ExpectType number
    _(recordList).sortedIndex(recordList[0], recordMaybeListSelector); // $ExpectType number
    _(recordList).sortedIndex(recordList[0], recordMaybeListSelector, context); // $ExpectType number
    extractChainTypes(_.chain(recordList).sortedIndex(recordList[0], recordMaybeListSelector)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(recordList).sortedIndex(recordList[0], recordMaybeListSelector, context)); // $ExpectType ChainType<number, never>

    // matcher iteratee
    _.sortedIndex(recordList, recordList[0], matcher); // $ExpectType number
    _(recordList).sortedIndex(recordList[0], matcher); // $ExpectType number
    extractChainTypes(_.chain(recordList).sortedIndex(recordList[0], matcher)); // $ExpectType ChainType<number, never>

    // shallow property iteratee
    _.sortedIndex(recordList, recordList[0], shallowProperty); // $ExpectType number
    _(recordList).sortedIndex(recordList[0], shallowProperty); // $ExpectType number
    extractChainTypes(_.chain(recordList).sortedIndex(recordList[0], shallowProperty)); // $ExpectType ChainType<number, never>

    // deep property iteratee
    _.sortedIndex(recordList, recordList[0], deepProperty); // $ExpectType number
    _(recordList).sortedIndex(recordList[0], deepProperty); // $ExpectType number
    extractChainTypes(_.chain(recordList).sortedIndex(recordList[0], deepProperty)); // $ExpectType ChainType<number, never>
}

// range

// creating an array of numbers from 0 to 10
_.range(10); // $ExpectType number[]

// creating an array of numbers from 1 to 11
_.range(1, 11); // $ExpectType number[]

// creating an array of numbers from 0 to 30 in increments of 5
_.range(0, 30, 5); // $ExpectType number[]

{
    // only stop
    _.range(numberValue); // $ExpectType number[]
    _(numberValue).range(); // $ExpectType number[]
    extractChainTypes(_.chain(numberValue).range()); // $ExpectType ChainType<number[], number>

    // start and stop
    _.range(numberValue, numberValue); // $ExpectType number[]
    _(numberValue).range(numberValue); // $ExpectType number[]
    extractChainTypes(_.chain(numberValue).range(numberValue)); // $ExpectType ChainType<number[], number>

    // stop and step
    _.range(numberValue, undefined, numberValue); // $ExpectType number[]
    _(numberValue).range(undefined, numberValue); // $ExpectType number[]
    extractChainTypes(_.chain(numberValue).range(undefined, numberValue)); // $ExpectType ChainType<number[], number>

    // start, stop, and step
    _.range(numberValue, numberValue, numberValue); // $ExpectType number[]
    _(numberValue).range(numberValue, numberValue); // $ExpectType number[]
    extractChainTypes(_.chain(numberValue).range(numberValue, numberValue)); // $ExpectType ChainType<number[], number>
}

/*************
 * Functions *
 *************/

// bind

// binding a context and arguments to a function
{
    const nameGreeting = function (this: { name: string }, greeting: string) { return `${greeting}: ${this.name}`; };
    _.bind(nameGreeting, { name: 'moe' }, 'hi'); // $ExpectType () => any
}

// bindAll

// binding a context to all functions in an object
{
    const buttonView = {
        label: 'underscore',
        onClick() { alert('clicked: ' + this.label); },
        onHover() { console.log('hovering: ' + this.label); }
    };
    _.bindAll(buttonView); // $ExpectType any
    $('#underscore_button').bind('click', buttonView.onClick);
}

// partial

// providing a partial set of leading arguments
_.partial(manyParameters, "", 1); // $ExpectType (p3: boolean, p4: string, p5: number, p6: string) => string

// providing a partial set of arguments in the middle of a parameter set
_.partial(manyParameters, _, _, _, ""); // $ExpectType (p1: string, p2: number, p3: boolean, p5: number, p6: string) => string

// memoize

// creating a function that will remember previously computed values for a set of arguments
{
    // $ExpectType (n: number) => number
    const fibonacci = _.memoize((n: number): number => {
        return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
    });
    fibonacci(10); // $ExpectType number
}

// creating a function that will cache instances of classes as singletons
// (the second call will return the same object as the first)
{
    class MyClass { };
    const singleton = _.memoize(<T>(classInstance: new () => T) => new classInstance()); // $ExpectType <T>(classInstance: new () => T) => T
    singleton(MyClass); // $ExpectType MyClass
    singleton(MyClass); // $ExpectType MyClass
}

// delay

// delaying the execution of a function with arguments
_.delay(alert, 1000, 'delayed'); // $ExpectType any

//defer

// deferring the execution of a function
_.defer(() => alert('deferred')); // $ExpectType void

// throttle

// rate-limiting a function
{
    const updatePosition = (param: string) => alert('updating position... Param: ' + param);
    const throttled = _.throttle(updatePosition, 100); // $ExpectType ((param: string) => void) & Cancelable
    $(window).scroll(throttled);
    throttled.cancel(); // $ExpectType void
}

// debounce

// debouncing a function
{
    const calculateLayout = (param: string) => alert('calculating layout... Param: ' + param);
    const lazyLayout = _.debounce(calculateLayout, 300); // $ExpectType ((param: string) => void) & Cancelable
    $(window).resize(lazyLayout);
    lazyLayout.cancel(); // $ExpectType void
}

// once

// creating a function that will only perform its action once (the second call will return the result of the first call)
{
    const createApplication = (param: string) => 'creating application... Param: ' + param;
    const initialize = _.once(createApplication); // $ExpectType (param: string) => string
    initialize("first"); // $ExpectType string
    initialize("second"); // $ExpectType string
}

// after

// creating a wrapped function that will only be invoked after the wrapper is invoked a number of times
{
    const renderNotes = _.after(anyArray.length, () => alert("rendering...")); // $ExpectType Function
    _.each(anyArray, note => note.asyncSave({ success: renderNotes })); // $ExpectType any[]
}

// wrap

// wrapping a function in another function
{
    const hello = (name: string) => "hello: " + name;
    const hello2 = _.wrap(hello, func => `before, ${func("moe")} + after`); // $ExpectType Function
    hello2(); // $ExpectType any
}

// compose

// composing a function as the result of multiple function calls
{
    const greet = (name: string) => "hi: " + name;
    const exclaim = (statement: string) => statement + "!";
    const welcome = _.compose(exclaim, greet); // $ExpectType Function
    welcome('moe'); // $ExpectType any
}

/***********
 * Objects *
 ***********/

// keys

// retrieving the keys of an object
_.keys(explicitNumberDictionary); // $ExpectType string[]

// values

// retrieving the values of a dictionary
_.values(explicitNumberDictionary); // $ExpectType number[]

// mapObject

// converting the properties of an object from numbers to strings
_.mapObject({ a: '1', b: '2' }, val => +val); // $ExpectType { a: number; b: number; }

{
    // function iteratee - objects
    _.mapObject(mixedTypeRecord, mixedTypeSelector, context); // $ExpectType { a: string; b: string; c: string; }
    _(mixedTypeRecord).mapObject(mixedTypeSelector, context); // $ExpectType { a: string; b: string; c: string; }
    extractChainTypes(_.chain(mixedTypeRecord).mapObject(mixedTypeSelector, context)); // $ExpectType ChainType<{ a: string; b: string; c: string; }, string>

    // function iteratee - dictionaries
    _.mapObject(recordDictionary, recordDictionarySelector, context); // $ExpectType { [x: string]: string; }
    _(recordDictionary).mapObject(recordDictionarySelector, context); // $ExpectType { [x: string]: string; }
    extractChainTypes(_.chain(recordDictionary).mapObject(recordDictionarySelector, context)); // $ExpectType ChainType<{ [x: string]: string; }, string>

    // function iteratee - any
    _.mapObject(anyValue, recordDictionarySelector, context); // $ExpectType { [x: string]: string; }
    _(anyValue).mapObject(recordDictionarySelector, context); // $ExpectType { [x: string]: string; }
    extractChainTypes(_.chain(anyValue).mapObject(recordDictionarySelector, context)); // $ExpectType ChainType<{ [x: string]: string; }, string>

    // matcher iteratee - objects
    _.mapObject(mixedTypeRecord, matcher); // $ExpectType { a: boolean; b: boolean; c: boolean; }
    _(mixedTypeRecord).mapObject(matcher); // $ExpectType { a: boolean; b: boolean; c: boolean; }
    extractChainTypes(_.chain(mixedTypeRecord).mapObject(matcher)); // $ExpectType ChainType<{ a: boolean; b: boolean; c: boolean; }, boolean>

    // matcher iteratee - any
    _.mapObject(anyValue, matcher); // $ExpectType { [x: string]: boolean; }
    _(anyValue).mapObject(matcher); // $ExpectType { [x: string]: boolean; }
    extractChainTypes(_.chain(anyValue).mapObject(matcher)); // $ExpectType ChainType<{ [x: string]: boolean; }, boolean>

    // shallow property iteratee - objects
    _.mapObject(mixedTypeRecord, shallowProperty); // $ExpectType { a: string; b: any; c: any; }
    _(mixedTypeRecord).mapObject(shallowProperty); // $ExpectType { a: string; b: any; c: any; }
    extractChainTypes(_.chain(mixedTypeRecord).mapObject(shallowProperty)); // $ExpectType ChainType<{ a: string; b: any; c: any; }, any>

    // shallow property iteratee - any
    _.mapObject(anyValue, shallowProperty); // $ExpectType { [x: string]: any; }
    _(anyValue).mapObject(shallowProperty); // $ExpectType { [x: string]: any; }
    extractChainTypes(_.chain(anyValue).mapObject(shallowProperty)); // $ExpectType ChainType<{ [x: string]: any; }, any>

    // deep property iteratee - objects
    _.mapObject(mixedTypeRecord, deepProperty); // $ExpectType { a: any; b: any; c: any; }
    _(mixedTypeRecord).mapObject(deepProperty); // $ExpectType { a: any; b: any; c: any; }
    extractChainTypes(_.chain(mixedTypeRecord).mapObject(deepProperty)); // $ExpectType ChainType<{ a: any; b: any; c: any; }, any>

    // deep property iteratee - any
    _.mapObject(anyValue, deepProperty); // $ExpectType { [x: string]: any; }
    _(anyValue).mapObject(deepProperty); // $ExpectType { [x: string]: any; }
    extractChainTypes(_.chain(anyValue).mapObject(deepProperty)); // $ExpectType ChainType<{ [x: string]: any; }, any>
}

// pairs

// retrieving an array of key-value pairs for an object
_.pairs(explicitNumberDictionary); // $ExpectType ["one" | "two" | "three", number][]

{
    // dictionaries
    _.pairs(recordDictionary); // $ExpectType [string, StringRecord][]
    _(recordDictionary).pairs(); // $ExpectType [string, StringRecord][]
    extractChainTypes(_.chain(recordDictionary).pairs()); // $ExpectType ChainType<[string, StringRecord][], [string, StringRecord]>

    // objects
    _.pairs(mixedTypeRecord); // $ExpectType ["a" | "b" | "c", any][] || [keyof MixedTypeRecord, any][]
    _(mixedTypeRecord).pairs(); // $ExpectType ["a" | "b" | "c", any][] || [keyof MixedTypeRecord, any][]
    extractChainTypes(_.chain(mixedTypeRecord).pairs()); // $ExpectType ChainType<["a" | "b" | "c", any][], ["a" | "b" | "c", any]> || ChainType<[keyof MixedTypeRecord, any][], [keyof MixedTypeRecord, any]>

    // any
    _.pairs(anyValue); // $ExpectType [string, any][]
    _(anyValue).pairs(); // $ExpectType [string, any][]
    extractChainTypes(_.chain(anyValue).pairs()); // $ExpectType ChainType<[string, any][], [string, any]>
}

// invert

// making an object's keys its values and vice versa
_.invert({ Moe: "Moses", Larry: "Louis", Curly: "Jerome" }); // $ExpectType any

// functions

// retrieving the names of all of the function-valued properties from an object
_.functions(_); // $ExpectType string[]

// extend

// shallow copying properties from the source objects to the destination object
_.extend({ name: 'moe' }, { age: 50 }, { userid: 'moe1' }); // $ExpectType any

// extendOwn, assign

// shallow copying own properties from the source objects to the destination object
_.extendOwn({ name: 'moe' }, { age: 50 }, { userid: 'moe1' }); // $ExpectType any
_.assign({ name: 'moe' }, { age: 50 }, { userid: 'moe1' }); // $ExpectType any

// findKey
{
    // function iteratee - objects
    _.findKey(mixedTypeRecord, mixedTypeTester, context); // $ExpectType "a" | "b" | "c" | undefined || keyof MixedTypeRecord | undefined
    _(mixedTypeRecord).findKey(mixedTypeTester, context); // $ExpectType "a" | "b" | "c" | undefined || keyof MixedTypeRecord | undefined
    extractChainTypes(_.chain(mixedTypeRecord).findKey(mixedTypeTester, context)); // $ExpectType ChainType<"a" | "b" | "c" | undefined, string> || ChainType<keyof MixedTypeRecord | undefined, string>

    // function iteratee - dictionaries
    _.findKey(recordDictionary, recordDictionaryTester, context); // $ExpectType string | undefined
    _(recordDictionary).findKey(recordDictionaryTester, context); // $ExpectType string | undefined
    extractChainTypes(_.chain(recordDictionary).findKey(recordDictionaryTester, context)); // $ExpectType ChainType<string | undefined, string>

    // function iteratee - any
    _.findKey(anyValue, recordDictionaryTester, context); // $ExpectType string | undefined
    _(anyValue).findKey(recordDictionaryTester, context); // $ExpectType string | undefined
    extractChainTypes(_.chain(anyValue).findKey(recordDictionaryTester, context)); // $ExpectType ChainType<string | undefined, string>

    // matcher iteratee - objects
    _.findKey(mixedTypeRecord, matcher); // $ExpectType "a" | "b" | "c" | undefined || keyof MixedTypeRecord | undefined
    _(mixedTypeRecord).findKey(matcher); // $ExpectType "a" | "b" | "c" | undefined || keyof MixedTypeRecord | undefined
    extractChainTypes(_.chain(mixedTypeRecord).findKey(matcher)); // $ExpectType ChainType<"a" | "b" | "c" | undefined, string> || ChainType<keyof MixedTypeRecord | undefined, string>

    // shallow property iteratee - objects
    _.findKey(mixedTypeRecord, shallowProperty); // $ExpectType "a" | "b" | "c" | undefined || keyof MixedTypeRecord | undefined
    _(mixedTypeRecord).findKey(shallowProperty); // $ExpectType "a" | "b" | "c" | undefined || keyof MixedTypeRecord | undefined
    extractChainTypes(_.chain(mixedTypeRecord).findKey(shallowProperty)); // $ExpectType ChainType<"a" | "b" | "c" | undefined, string> || ChainType<keyof MixedTypeRecord | undefined, string>

    // deep property iteratee - objects
    _.findKey(mixedTypeRecord, deepProperty); // $ExpectType "a" | "b" | "c" | undefined || keyof MixedTypeRecord | undefined
    _(mixedTypeRecord).findKey(deepProperty); // $ExpectType "a" | "b" | "c" | undefined || keyof MixedTypeRecord | undefined
    extractChainTypes(_.chain(mixedTypeRecord).findKey(deepProperty)); // $ExpectType ChainType<"a" | "b" | "c" | undefined, string> || ChainType<keyof MixedTypeRecord | undefined, string>

    // identity iteratee - objects
    _.findKey(mixedTypeRecord); // $ExpectType "a" | "b" | "c" | undefined || keyof MixedTypeRecord | undefined
    _(mixedTypeRecord).findKey(); // $ExpectType "a" | "b" | "c" | undefined || keyof MixedTypeRecord | undefined
    extractChainTypes(_.chain(mixedTypeRecord).findKey()); // $ExpectType ChainType<"a" | "b" | "c" | undefined, string> || ChainType<keyof MixedTypeRecord | undefined, string>
}

// pick

// making a copy of an object that includes a specific subset of properties selected by known names
_.pick({ name: 'moe', age: 50, userid: 'moe1' }, 'name', 'age'); // $ExpectType Pick<{ name: string; age: number; userid: string; }, "name" | "age">
_.pick({ name: 'moe', age: 50, userid: 'moe1' }, ['name', 'age']); // $ExpectType Pick<{ name: string; age: number; userid: string; }, "name" | "age">

// making a copy of an object that includes a specific subset of properties selected by unknown names
_.pick({ name: 'moe', age: 50, userid: 'moe1' }, stringArray); // $ExpectType Partial<{ name: string; age: number; userid: string; }>

// making a copy of an object that includes a specific subset of properties selected by an iteratee
_.pick({ name: 'moe', age: 50, userid: 'moe1' }, (value, key) => key === 'name' || key === 'age'); // $ExpectType Partial<{ name: string; age: number; userid: string; }>

{
    // constant strings - record
    _.pick(mixedTypeRecord, 'a', 'b', 'notAKey'); // $ExpectType Pick<MixedTypeRecord, "a" | "b">
    _(mixedTypeRecord).pick('a', 'b', 'notAKey'); // $ExpectType Pick<MixedTypeRecord, "a" | "b">
    extractChainTypes(_.chain(mixedTypeRecord).pick('a', 'b', 'notAKey')); // $ExpectType ChainType<Pick<MixedTypeRecord, "a" | "b">, number | StringRecord>

    // constant strings - any
    _.pick(anyValue, 'a', 'b'); // $ExpectType Pick<any, "a" | "b">
    _(anyValue).pick('a', 'b'); // $ExpectType Pick<any, "a" | "b">
    extractChainTypes(_.chain(anyValue).pick('a', 'b')); // $ExpectType ChainType<Pick<any, "a" | "b">, any>

    // constant string arrays - record
    _.pick(mixedTypeRecord, ['a'], ['b', 'notAKey']); // $ExpectType Pick<MixedTypeRecord, "a" | "b">
    _(mixedTypeRecord).pick(['a'], ['b', 'notAKey']); // $ExpectType Pick<MixedTypeRecord, "a" | "b">
    extractChainTypes(_.chain(mixedTypeRecord).pick(['a'], ['b', 'notAKey'])); // $ExpectType ChainType<Pick<MixedTypeRecord, "a" | "b">, number | StringRecord>

    // constant string arrays - any
    _.pick(anyValue, ['a'], ['b']); // $ExpectType Pick<any, "a" | "b">
    _(anyValue).pick(['a'], ['b']); // $ExpectType Pick<any, "a" | "b">
    extractChainTypes(_.chain(anyValue).pick(['a'], ['b'])); // $ExpectType ChainType<Pick<any, "a" | "b">, any>

    // the explicit generics in the below cases are only required in TS versions below 3.6
    // constant strings and string arrays - record
    _.pick<MixedTypeRecord, 'a' | 'b' | 'notAKey'>(mixedTypeRecord, 'a', ['b'], 'notAKey'); // $ExpectType Pick<MixedTypeRecord, "a" | "b">
    _(mixedTypeRecord).pick<'a' | 'b' | 'notAKey'>('a', ['b'], 'notAKey'); // $ExpectType Pick<MixedTypeRecord, "a" | "b">
    extractChainTypes(_.chain(mixedTypeRecord).pick<'a' | 'b' | 'notAKey'>('a', ['b'], 'notAKey')); // $ExpectType ChainType<Pick<MixedTypeRecord, "a" | "b">, number | StringRecord>

    // constant strings and string arrays - any
    _.pick<any, 'a' | 'b'>(anyValue, 'a', ['b']); // $ExpectType Pick<any, "a" | "b">
    _(anyValue).pick<'a' | 'b'>('a', ['b']); // $ExpectType Pick<any, "a" | "b">
    extractChainTypes(_.chain(anyValue).pick<'a' | 'b'>('a', ['b'])); // $ExpectType ChainType<Pick<any, "a" | "b">, any>

    // generic strings - record
    _.pick(mixedTypeRecord, stringValue); // $ExpectType Partial<MixedTypeRecord>
    _(mixedTypeRecord).pick(stringValue); // $ExpectType Partial<MixedTypeRecord>
    extractChainTypes(_.chain(mixedTypeRecord).pick(stringValue)); // $ExpectType ChainType<Partial<MixedTypeRecord>, number | StringRecord | NonIntersectingRecord | undefined> || ChainType<Partial<MixedTypeRecord>, number | NonIntersecting | undefined> || ChainType<Partial<MixedTypeRecord>, number | NonIntersecting>

    // generic strings - any
    _.pick(anyValue, stringValue); // $ExpectType Pick<any, string>
    _(anyValue).pick(stringValue); // $ExpectType Pick<any, string>
    extractChainTypes(_.chain(anyValue).pick(stringValue)); // $ExpectType ChainType<Pick<any, string>, any>

    // generic string arrays - record
    _.pick(mixedTypeRecord, stringArray); // $ExpectType Partial<MixedTypeRecord>
    _(mixedTypeRecord).pick(stringArray); // $ExpectType Partial<MixedTypeRecord>
    extractChainTypes(_.chain(mixedTypeRecord).pick(stringArray)); // $ExpectType ChainType<Partial<MixedTypeRecord>, number | StringRecord | NonIntersectingRecord | undefined> || ChainType<Partial<MixedTypeRecord>, number | NonIntersecting | undefined> || ChainType<Partial<MixedTypeRecord>, number | NonIntersecting>

    // generic string arrays - any
    _.pick(anyValue, stringArray); // $ExpectType Pick<any, string>
    _(anyValue).pick(stringArray); // $ExpectType Pick<any, string>
    extractChainTypes(_.chain(anyValue).pick(stringArray)); // $ExpectType ChainType<Pick<any, string>, any>

    // function - record
    _.pick(mixedTypeRecord, mixedTypeTester); // $ExpectType Partial<MixedTypeRecord>
    _(mixedTypeRecord).pick(mixedTypeTester); // $ExpectType Partial<MixedTypeRecord>
    extractChainTypes(_.chain(mixedTypeRecord).pick(mixedTypeTester)); // $ExpectType ChainType<Partial<MixedTypeRecord>, number | StringRecord | NonIntersectingRecord | undefined> || ChainType<Partial<MixedTypeRecord>, number | NonIntersecting | undefined> || ChainType<Partial<MixedTypeRecord>, number | NonIntersecting>

    // function - dictionary
    _.pick(recordDictionary, recordDictionaryTester); // $ExpectType Partial<Dictionary<StringRecord>>
    _(recordDictionary).pick(recordDictionaryTester); // $ExpectType Partial<Dictionary<StringRecord>>
    extractChainTypes(_.chain(recordDictionary).pick(recordDictionaryTester)); // $ExpectType ChainType<Partial<Dictionary<StringRecord>>, StringRecord | undefined>

    // function - any
    _.pick(anyValue, anyCollectionTester); // $ExpectType Partial<any>
    _(anyValue).pick(anyCollectionTester); // $ExpectType Partial<any>
    extractChainTypes(_.chain(anyValue).pick(anyCollectionTester)); // $ExpectType ChainType<Partial<any>, any>
}

// omit

// making a copy of an object that omits a specific subset of properties selected by known names
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, 'name', 'age'); // $ExpectType Pick<{ name: string; age: number; userid: string; }, "userid">
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, ['name', 'age']); // $ExpectType Pick<{ name: string; age: number; userid: string; }, "userid">

// making a copy of an object that omits a specific subset of properties selected by unknown names
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, stringArray); // $ExpectType Partial<{ name: string; age: number; userid: string; }>

// making a copy of an object that omits a specific subset of properties selected by an iteratee
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, (value, key) => key === 'name' || key === 'age'); // $ExpectType Partial<{ name: string; age: number; userid: string; }>

{
    // constant strings - record
    _.omit(mixedTypeRecord, 'a', 'b', 'notAKey'); // $ExpectType Pick<MixedTypeRecord, "c">
    _(mixedTypeRecord).omit('a', 'b', 'notAKey'); // $ExpectType Pick<MixedTypeRecord, "c">
    extractChainTypes(_.chain(mixedTypeRecord).omit('a', 'b', 'notAKey')); // $ExpectType ChainType<Pick<MixedTypeRecord, "c">, NonIntersecting>

    // constant strings - any
    _.omit(anyValue, 'a', 'b'); // $ExpectType any
    _(anyValue).omit('a', 'b'); // $ExpectType any
    extractChainTypes(_.chain(anyValue).omit('a', 'b')); // $ExpectType ChainType<any, any>

    // constant string arrays - record
    _.omit(mixedTypeRecord, ['a'], ['b', 'notAKey']); // $ExpectType Pick<MixedTypeRecord, "c">
    _(mixedTypeRecord).omit(['a'], ['b', 'notAKey']); // $ExpectType Pick<MixedTypeRecord, "c">
    extractChainTypes(_.chain(mixedTypeRecord).omit(['a'], ['b', 'notAKey'])); // $ExpectType ChainType<Pick<MixedTypeRecord, "c">, NonIntersecting>

    // constant string arrays - any
    _.omit(anyValue, ['a'], ['b']); // $ExpectType any
    _(anyValue).omit(['a'], ['b']); // $ExpectType any
    extractChainTypes(_.chain(anyValue).omit(['a'], ['b'])); // $ExpectType ChainType<any, any>

    // the explicit generics in the below cases are only required in TS versions below 3.6
    // constant strings and string arrays - record
    _.omit<MixedTypeRecord, 'a' | 'b' | 'notAKey'>(mixedTypeRecord, 'a', ['b'], 'notAKey'); // $ExpectType Pick<MixedTypeRecord, "c">
    _(mixedTypeRecord).omit<'a' | 'b' | 'notAKey'>('a', ['b'], 'notAKey'); // $ExpectType Pick<MixedTypeRecord, "c">
    extractChainTypes(_.chain(mixedTypeRecord).omit<'a' | 'b' | 'notAKey'>('a', ['b'], 'notAKey')); // $ExpectType ChainType<Pick<MixedTypeRecord, "c">, NonIntersecting>

    // constant strings and string arrays - any
    _.omit<any, 'a' | 'b'>(anyValue, 'a', ['b']); // $ExpectType any
    _(anyValue).omit<'a' | 'b'>('a', ['b']); // $ExpectType any
    extractChainTypes(_.chain(anyValue).omit<'a' | 'b'>('a', ['b'])); // $ExpectType ChainType<any, any>

    // generic strings - record
    _.omit(mixedTypeRecord, stringValue); // $ExpectType Partial<MixedTypeRecord>
    _(mixedTypeRecord).omit(stringValue); // $ExpectType Partial<MixedTypeRecord>
    extractChainTypes(_.chain(mixedTypeRecord).omit(stringValue)); // $ExpectType ChainType<Partial<MixedTypeRecord>, number | StringRecord | NonIntersectingRecord | undefined> || ChainType<Partial<MixedTypeRecord>, number | NonIntersecting | undefined> || ChainType<Partial<MixedTypeRecord>, number | NonIntersecting>

    // generic strings - any
    _.omit(anyValue, stringValue); // $ExpectType any
    _(anyValue).omit(stringValue); // $ExpectType any
    extractChainTypes(_.chain(anyValue).omit(stringValue)); // $ExpectType ChainType<any, any>

    // generic string arrays - record
    _.omit(mixedTypeRecord, stringArray); // $ExpectType Partial<MixedTypeRecord>
    _(mixedTypeRecord).omit(stringArray); // $ExpectType Partial<MixedTypeRecord>
    extractChainTypes(_.chain(mixedTypeRecord).omit(stringArray)); // $ExpectType ChainType<Partial<MixedTypeRecord>, number | StringRecord | NonIntersectingRecord | undefined> || ChainType<Partial<MixedTypeRecord>, number | NonIntersecting | undefined> || ChainType<Partial<MixedTypeRecord>, number | NonIntersecting>

    // generic string arrays - any
    _.omit(anyValue, stringArray); // $ExpectType any
    _(anyValue).omit(stringArray); // $ExpectType any
    extractChainTypes(_.chain(anyValue).omit(stringArray)); // $ExpectType ChainType<any, any>

    // function - record
    _.omit(mixedTypeRecord, mixedTypeTester); // $ExpectType Partial<MixedTypeRecord>
    _(mixedTypeRecord).omit(mixedTypeTester); // $ExpectType Partial<MixedTypeRecord>
    extractChainTypes(_.chain(mixedTypeRecord).omit(mixedTypeTester)); // $ExpectType ChainType<Partial<MixedTypeRecord>, number | StringRecord | NonIntersectingRecord | undefined> || ChainType<Partial<MixedTypeRecord>, number | NonIntersecting | undefined> || ChainType<Partial<MixedTypeRecord>, number | NonIntersecting>

    // function - dictionary
    _.omit(recordDictionary, recordDictionaryTester); // $ExpectType Partial<Dictionary<StringRecord>>
    _(recordDictionary).omit(recordDictionaryTester); // $ExpectType Partial<Dictionary<StringRecord>>
    extractChainTypes(_.chain(recordDictionary).omit(recordDictionaryTester)); // $ExpectType ChainType<Partial<Dictionary<StringRecord>>, StringRecord | undefined>

    // function - any
    _.omit(anyValue, anyCollectionTester); // $ExpectType Partial<any>
    _(anyValue).omit(anyCollectionTester); // $ExpectType Partial<any>
    extractChainTypes(_.chain(anyValue).omit(anyCollectionTester)); // $ExpectType ChainType<Partial<any>, any>
}

// defaults

// filling in properties missing on an object
_.defaults({ flavor: "chocolate" }, { flavor: "vanilla", sprinkles: "lots" }); // $ExpectType any

// clone

// creating a shallow-copied clone of an object
_.clone({ name: 'moe' }); // $ExpectType { name: string; }

// creating a shallow-copied clone of an array
_.clone(['i', 'am', 'an', 'object!']); // $ExpectType string[]

// has

// checking whether or not an object has a property
_.has({ a: 1, b: 2, c: 3 }, "b"); // $ExpectType boolean

// matches

// creating a function that can determine if one object's property values matches another's
{
    const isUncleMoe = _.matches({ name: 'moe', relation: 'uncle' }); // $ExpectType Predicate<{ name: string; relation: string; }>
    isUncleMoe({ name: 'moe', relation: 'uncle' }); // $ExpectType boolean
}

// property

// retrieving shallow and deep property values from an object
{
    const luckyNumbersMoe = { name: 'moe', luckyNumbers: [13, 27, 34] };
    _.property('name')(luckyNumbersMoe); // $ExpectType any
    _.property(['luckyNumbers', 2])(luckyNumbersMoe); // $ExpectType any
}

// isEqual
{
    _.isEqual(anyValue, anyValue); // $ExpectType boolean
    _(anyValue).isEqual(anyValue); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isEqual(anyValue)); // $ExpectType ChainType<boolean, never>
}

// isEmpty
{
    _.isEmpty(anyValue); // $ExpectType boolean
    _(anyValue).isEmpty(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isEmpty()); // $ExpectType ChainType<boolean, never>
}

// isMatch
{
    _.isMatch(anyValue, anyValue); // $ExpectType boolean
    _(anyValue).isMatch(anyValue); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isMatch(anyValue)); // $ExpectType ChainType<boolean, never>
}

// isElement
{
    _.isElement(anyValue) ? anyValue : neverValue; // $ExpectType Element
    _(anyValue).isElement(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isElement()); // $ExpectType ChainType<boolean, never>
}

// isArray
{
    _.isArray(anyValue) ? anyValue : neverValue; // $ExpectType any[]
    _(anyValue).isArray(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isArray()); // $ExpectType ChainType<boolean, never>
}

// isArrayBuffer
{
    _.isArrayBuffer(anyValue) ? anyValue : neverValue; // $ExpectType ArrayBuffer
    _(anyValue).isArrayBuffer(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isArrayBuffer()); // $ExpectType ChainType<boolean, never>
}

// isDataView
{
    _.isDataView(anyValue) ? anyValue : neverValue; // $ExpectType DataView
    _(anyValue).isDataView(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isDataView()); // $ExpectType ChainType<boolean, never>
}

// isTypedArray
{
    _.isTypedArray(anyValue) ? anyValue : neverValue; // $ExpectType TypedArray
    _(anyValue).isTypedArray(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isTypedArray()); // $ExpectType ChainType<boolean, never>
}

// isSymbol
{
    _.isSymbol(anyValue) ? anyValue : neverValue; // $ExpectType symbol
    _(anyValue).isSymbol(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isSymbol()); // $ExpectType ChainType<boolean, never>
}

// isObject
{
    if (_.isObject(anyValue)) {
        anyValue; // $ExpectType Dictionary<any> & object
        anyValue.shallowProperty; // $ExpectType any
        anyValue[3]; // $ExpectType any
        _.map(anyValue, i => i); // $ExpectType any[]
        _.isFunction(anyValue) ? anyValue : neverValue; // $ExpectType Function
    }

    _.isObject(stringy) ? stringy : neverValue // $ExpectType StringRecord
    _.isObject(maybeStringArray) ? maybeStringArray : neverValue; // $ExpectType string[]
    _.isObject(maybeFunction) ? maybeFunction : neverValue; // $ExpectType () => void
    _.isObject(stringValue) ? stringValue : neverValue; // $ExpectType never

    _(anyValue).isObject(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isObject()); // $ExpectType ChainType<boolean, never>
}

// isArguments
{
    _.isArguments(anyValue) ? anyValue : neverValue; // $ExpectType IArguments
    _(anyValue).isArguments(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isArguments()); // $ExpectType ChainType<boolean, never>
}

// isFunction
{
    _.isFunction(maybeFunction) ? maybeFunction : neverValue; // $ExpectType () => void
    _(anyValue).isFunction(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isFunction()); // $ExpectType ChainType<boolean, never>
}

// isError
{
    _.isError(anyValue) ? anyValue : neverValue; // $ExpectType Error
    _(anyValue).isError(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isError()); // $ExpectType ChainType<boolean, never>
}

// isString
{
    _.isString(anyValue) ? anyValue : neverValue; // $ExpectType string
    _(anyValue).isString(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isString()); // $ExpectType ChainType<boolean, never>
}

// isNumber
{
    _.isNumber(anyValue) ? anyValue : neverValue; // $ExpectType number
    _(anyValue).isNumber(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isNumber()); // $ExpectType ChainType<boolean, never>
}

// isFinite
{
    _.isFinite(anyValue); // $ExpectType boolean
    _(anyValue).isFinite(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isFinite()); // $ExpectType ChainType<boolean, never>
}

// isBoolean
{
    _.isBoolean(anyValue) ? anyValue : neverValue; // $ExpectType boolean
    _(anyValue).isBoolean(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isBoolean()); // $ExpectType ChainType<boolean, never>
}

// isDate
{
    _.isDate(anyValue) ? anyValue : neverValue; // $ExpectType Date
    _(anyValue).isDate(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isDate()); // $ExpectType ChainType<boolean, never>
}

// isRegExp
{
    _.isRegExp(anyValue) ? anyValue : neverValue; // $ExpectType RegExp
    _(anyValue).isRegExp(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isRegExp()); // $ExpectType ChainType<boolean, never>
}

// isNaN
{
    _.isNaN(anyValue); // $ExpectType boolean
    _(anyValue).isNaN(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isNaN()); // $ExpectType ChainType<boolean, never>
}

// isNull
{
    _.isNull(anyValue) ? anyValue : neverValue; // $ExpectType null
    _(anyValue).isNull(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isNull()); // $ExpectType ChainType<boolean, never>
}

// isUndefined
{
    _.isUndefined(anyValue) ? anyValue : neverValue; // $ExpectType undefined
    _.isUndefined(maybeFunction) ? neverValue : maybeFunction; // $ExpectType () => void
    _(anyValue).isUndefined(); // $ExpectType boolean
    extractChainTypes(_.chain(anyValue).isUndefined()); // $ExpectType ChainType<boolean, never>
}

/***********
 * Utility *
 ***********/

// noConflict

// giving control of the _ global variable back to its previous owner (returns a reference to value of _ that is in effect before the function is called)
_.noConflict(); // $ExpectType any

// identity

// calling a function that returns the same value that is used as the argument
_.identity({ name: 'moe' }); // $ExpectType { name: string; }

// constant

// creating a function that will always return a specific value
_.constant({ name: 'moe' }); // $ExpectType () => { name: string; }

// times

// calling a function multiple times with the iteration as an argument and getting an array containing the result of each call
// in this case, the result is the squares of the numbers 0 through 4
_.times(5, n => n * n); // $ExpectType number[]

// random

// generating a random number between two bounds
_.random(0, 100); // $ExpectType number

// mixin

// adding functions to Underscore by calling _.mixin
_.mixin({
    capitalize: (string: string) => string.charAt(0).toUpperCase() + string.substring(1)
});

// augmenting Underscore's type definitions to make TypeScript aware of the above
declare module 'underscore' {
    interface UnderscoreStatic {
        capitalize(string: string): string;
    }

    interface Underscore<T, V> {
        capitalize(): string;
    }

    interface _Chain<T, V> {
        capitalize(): _ChainSingle<string>;
    }
}

_.capitalize("fabio"); // $ExpectType string
_("fabio").capitalize(); // $ExpectType string
_.chain("fabio").capitalize().value(); // $ExpectType string

// uniqueId

// generating an id that is unique only to this current usage of underscore
_.uniqueId('contact_'); // $ExpectType string

// escape

// HTML-escaping a string
_.escape('Curly, Larry & Moe'); // $ExpectType string

// result

// getting the result of a property by either:
//   evaluating it (if it's a function),
//   returning the value of the default parameter (if it's undefined)
//   or returning its value
// the example below will always return a string
declare const objectWithFunctionOrValue: { functionOrValue: (() => string) | string | undefined; };
_.result(objectWithFunctionOrValue, 'functionOrValue', 'someDefaultResult'); // $ExpectType any

// template

// compiling and evaluating templates
{
    const template = _.template("<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>"); // $ExpectType CompiledTemplate
    template({ people: ['moe', 'curly', 'larry'] }); // $ExpectType string
}

// overriding template settings
{
    // $ExpectType CompiledTemplate
    const template = _.template("<p>Hello {{: data.name }}!<p><p>The current timestamp is {{= _.now() }}</p>",
        {
            escape: /\{\{=(.+?)\}\}/g,
            interpolate: /\{\{:(.+?)\}\}/g,
            evaluate: /\{\{\}\}/g,
            variable: 'data'
        });
    template({ name: "Mustache O'Grady" }); // $ExpectType string
}

// templateSettings

// setting different global settings for templates
{
    _.templateSettings = {
        escape: /\{\{=(.+?)\}\}/g,
        interpolate: /\{\{:(.+?)\}\}/g,
        evaluate: /\{\{\}\}/g,
        variable: 'data'
    };
    const template = _.template("<p>Hello {{: data.name }}!<p><p>The current timestamp is {{= _.now() }}</p>"); // $ExpectType CompiledTemplate
    template({ name: "Mustache O'Grady" }); // $ExpectType string
}

// now

// getting the current time as an integer timestamp
_.now(); // $ExpectType number

// VERSION

// checking the version of Underscore
_.VERSION; // $ExpectType string

/************
 * Chaining *
 ************/

// $ExpectType number[]
_.chain(numberArray)
    .filter(num => num % 2 === 0)
    .tap(alert)
    .map(num => num * num)
    .value();

// $ExpectType number | undefined
_.chain([1, 2, 3])
    .map(num => [num, num + 1])
    .flatten()
    .find(num => num % 2 === 0)
    .value();

// $ExpectType { [x: string]: number[]; }
_.chain([{ property: 'odd', value: 1 }, { property: 'even', value: 2 }, { property: 'even', value: 0 }])
    .groupBy('property')
    .mapObject((objects) => _.pluck(objects, 'value'))
    .value();

// $ExpectType string[]
_.chain(['z', 'x', 'y'])
    .union(['a', 'b', 'c'])
    .without('z')
    .value();

// $ExpectType Dictionary<boolean>
_.chain({
    'test': { title: 'item1', value: 5 },
    'another': { title: 'item2', value: 8 },
    'third': { title: 'item3', value: 10 }
})
    .values()
    .filter(r => r.value >= 8)
    .map(r => [r.title, true] as [string, boolean])
    .object()
    .value();

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
    .reduce((aggregate, n) => aggregate + n, 0)
    .value();

// $ExpectType any
_.chain(anyValue)
    .filter(i => i.filterBoolean)
    .reject('rejectBoolean')
    .find(i => i.findBooleanFunction())
    .value();

// $ExpectType boolean
_.chain([{ a: 1 }, { a: 2 }, { a: 3 }, { b: 4 }])
    .map('a')
    .contains(3)
    .value();

// $ExpectType string[]
_.chain({
    a: {
        common: 'only',
        onlyA: 3
    },
    b: {
        common: 'strings',
        onlyB: true
    },
    c: {
        common: 'strings',
        onlyC: []
    }
})
    .mapObject('common')
    .reject(s => s === 'not')
    .uniq()
    .value();

// $ExpectType any[][]
_.chain({ one: 1, two: 2 })
    .pairs()
    .unzip()
    .value();

// $ExpectType any[][]
_.chain({ one: 1, two: 2 })
    .pairs()
    .transpose()
    .value();

// $ExpectType ["one" | "two" | "three", string | number | number[]] | undefined
_.chain({ one: '1', two: 2, three: [3] })
    .pairs()
    .last()
    .value();

// $ExpectType string | undefined
_.chain(['one', 'two', 'three'])
    .object([1, 2, 3])
    .findKey((element, key, value) => {
        element; // $ExpectType number | undefined
        key; // $ExpectType string
        value; // $ExpectType Dictionary<number | undefined>

        return element === 2;
    })
    .value();

// $ExpectType { valueProperty: string; } | undefined
_.chain([
    {
        group: 'a',
        subGroup: 1,
        value: { valueProperty: 'first' }
    },
    {
        group: 'b',
        subGroup: 2,
        value: { valueProperty: 'second' }
    },
    {
        group: 'b',
        subGroup: 3,
        value: { valueProperty: 'third' }
    }])
    .groupBy(v => v.group)
    .filter(g => g.length >= 2)
    .flatten()
    .where({ subGroup: 2 })
    .pluck('value')
    .sample()
    .value();

// $ExpectType number[]
_.chain([1, 2, 3, 4, 5, 6])
    .sample()
    .range(10)
    .value();

// $ExpectType [number[], number[]]
_.chain([[1, 2, 3], [4, undefined, 5], [undefined, undefined, 6]])
    .flatten()
    .compact()
    .partition(n => n > 3)
    .value();

// verify that partial objects can be provided without error to where and findWhere for a union type collection
// where no types in the union share the same property names
declare const nonIntersectingTypeUnion: _.Dictionary<{ one: string; } | { two: number; }>;

// $ExpectType ({ one: string; } | { two: number; })[]
_.chain(nonIntersectingTypeUnion)
    .where({ one: 'one' })
    .sample(5)
    .value();

// $ExpectType { one: string; } | { two: number; } | undefined
_.chain(nonIntersectingTypeUnion)
    .sample(5)
    .findWhere({ two: 2 })
    .value();

// verify that both types can be provided without error to where and findWhere for a union type collection where
// two properties in the union have different types
declare const overlappingTypeUnion: _.Dictionary<{ same: string; } | { same: number; }>;

// $ExpectType ({ same: string; } | { same: number; })[]
_.chain(overlappingTypeUnion)
    .where({ same: 0 })
    .shuffle()
    .value();

// $ExpectType { same: string; } | { same: number; } | undefined
_.chain(overlappingTypeUnion)
    .shuffle()
    .findWhere({ same: 'no' })
    .value();

declare const nestedObjectList: { a: { b: boolean; c: string; }; }[];

// $ExpectType [{ a: { b: boolean; c: string; }; }[], { a: { b: boolean; c: string; }; }[]]
_.chain(nestedObjectList)
    .uniq(['a', 'c'])
    .without(nestedObjectList[0], nestedObjectList[2])
    .partition(['a', 'b'])
    .value();

// $ExpectType number[]
_.chain([1, 3, 5])
    .union([2, 4, 6], [7, 8])
    .difference([2, 5], [3, 6])
    .intersection([2, 4, 6, 8], [4, 8])
    .value();

// "as const" isn't supported until TS3.4; the Readonly assertion below mimics its effect
// $ExpectType Dictionary<number>
_.chain([{ id: 1, name: 'a' }, { id: 2, name: 'b' }])
    .map(o => [o.name, o.id] as Readonly<[string, number]>)
    .object()
    .value();

// $ExpectType number
_.chain([1, 2, 3])
    .partition(n => n >= 2)
    .first()
    .size()
    .value();

// $ExpectType string[]
_.chain([{ type: 'one' }, { type: 'two' }, { type: 'one' }])
    .countBy('type')
    .omit(count => count < 2)
    .keys()
    .value();

// $ExpectType number
_.chain(['rate', 'rest', 'fate', 'best'])
    .rest(2)
    .invoke('substring', 2)
    .indexOf('te')
    .value();

// $ExpectType number | { food: string; }
_.chain([{ food: 'apple' }, { food: 'banana' }, { food: 'carrot' }])
    .initial()
    .max(['food', 'length'])
    .value();

// $ExpectType number
_.chain([{ score: 27 }, { score: 45 }, { score: 16 }])
    .sortBy('score')
    .sortedIndex({ score: 33 }, 'score')
    .value();

// $ExpectType boolean
_.chain([1, 3, 5])
    .sample(2)
    .every(n => n > 2)
    .value();

// $ExpectType number
_.chain(10)
    .range()
    .shuffle()
    .findLastIndex(n => n > 3)
    .value();

// chain

// verify that the right chain item and value types are yielded by calls to chain
// these tests also check to make sure that _.chain() and _().chain() yield the same types
{
    // lists
    extractChainTypes(_.chain(augmentedList)); // $ExpectType ChainType<AugmentedList, StringRecord>
    extractChainTypes(_(augmentedList).chain()); // $ExpectType ChainType<AugmentedList, StringRecord>
    extractChainTypes(_.chain(recordList)); // $ExpectType ChainType<List<StringRecord>, StringRecord>
    extractChainTypes(_(recordList).chain()); // $ExpectType ChainType<List<StringRecord>, StringRecord>

    // dictionaries
    extractChainTypes(_.chain(explicitDictionary)); // $ExpectType ChainType<ExplicitDictionary, StringRecord>
    extractChainTypes(_(explicitDictionary).chain()); // $ExpectType ChainType<ExplicitDictionary, StringRecord>
    extractChainTypes(_.chain(recordDictionary)); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>
    extractChainTypes(_(recordDictionary).chain()); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    // strings
    extractChainTypes(_.chain(stringValue)); // $ExpectType ChainType<string, string>
    extractChainTypes(_(stringValue).chain()); // $ExpectType ChainType<string, string>

    // non-collections
    extractChainTypes(_.chain(numberValue)); // $ExpectType ChainType<number, never>
    extractChainTypes(_(numberValue).chain()); // $ExpectType ChainType<number, never>

    // mixed non-collections and collections
    extractChainTypes(_.chain(mixedIterabilityValue)); // $ExpectType ChainType<number | number[], number>
    extractChainTypes(_(mixedIterabilityValue).chain()); // $ExpectType ChainType<number | number[], number>

    // any
    extractChainTypes(_.chain(anyValue)); // $ExpectType ChainType<any, any>
    extractChainTypes(_(anyValue).chain()); // $ExpectType ChainType<any, any>

    // never
    extractChainTypes(_.chain(neverValue)); // $ExpectType ChainType<never, never>
    extractChainTypes(_(neverValue).chain()); // $ExpectType ChainType<never, never>
}

// value

// verify that the object type given to chain is returned by value
{
    // lists
    _.chain(augmentedList).value(); // $ExpectType AugmentedList
    _.chain(recordList).value(); // $ExpectType List<StringRecord>

    // dictionaries
    _.chain(explicitDictionary).value(); // $ExpectType ExplicitDictionary
    _.chain(recordDictionary).value(); // $ExpectType Dictionary<StringRecord>

    // strings
    _.chain(stringValue).value(); // $ExpectType string

    // non-collections
    _.chain(numberValue).value(); // $ExpectType number

    // mixed non-collections and collections
    _.chain(mixedIterabilityValue).value(); // $ExpectType number | number[]

    // any
    _.chain(anyValue).value(); // $ExpectType any

    // never
    _.chain(neverValue).value(); // $ExpectType never
}
