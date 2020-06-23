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

interface SimpleStringObject {
    a: string;
    b: string;
}

const simpleStringObjectPropertyName = 'a';
const simpleStringObjectPartialPropertyMatch: Partial<SimpleStringObject> = { a: 'b' };

interface SimpleStringObjectListWithExtraProperties extends _.List<SimpleStringObject> {
    notAListProperty: boolean;
}

const simpleStringObjectArray: SimpleStringObject[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'b' }, { a: 'c', b: 'a' }];
const simpleStringObjectListWithExtraProperties: SimpleStringObjectListWithExtraProperties = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: { a: 'c', b: 'a' }, length: 3, notAListProperty: true };
const simpleStringObjectList: _.List<SimpleStringObject> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: { a: 'c', b: 'a' }, length: 3 };
const simpleStringObjectListPropertyModifyingIterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a += 'b';
const simpleStringObjectListPropertySelectingIterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a;
const simpleStringObjectListPropertyComparingIterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a === 'b';
const simpleStringObjectListPropertyMemoIterator = (prev: string, value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => prev + value.a;

interface StronglyKeyedSimpleStringObjectDictionary extends _.Dictionary<SimpleStringObject> {
    a: SimpleStringObject;
    b: SimpleStringObject;
    c: SimpleStringObject;
}

const stronglyKeyedSimpleStringObjectDictionary: StronglyKeyedSimpleStringObjectDictionary = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: { a: 'c', b: 'a' } };
const simpleStringObjectDictionary: _.Dictionary<SimpleStringObject> = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: { a: 'c', b: 'a' } };
const simpleStringObjectDictionaryPropertyModifyingIterator = (element: SimpleStringObject, key: string, dictionary: _.Dictionary<SimpleStringObject>) => element.a += 'b';
const simpleStringObjectDictionaryPropertySelectingIterator = (element: SimpleStringObject, key: string, dictionary: _.Dictionary<SimpleStringObject>) => element.a;
const simpleStringObjectDictionaryPropertyComparingIterator = (element: SimpleStringObject, key: string, list: _.Dictionary<SimpleStringObject>) => element.a === 'b';
const simpleStringObjectDictionaryPropertyMemoIterator = (prev: string, element: SimpleStringObject, key: string, dictionary: _.Dictionary<SimpleStringObject>) => prev + element.a;

const simpleString = 'abc';
const stringListModifyingIterator = (value: string, index: number, list: _.List<string>) => value + 'b';
const stringListSelectingIterator = (value: string, index: number, list: _.List<string>) => value;
const stringListComparingIterator = (value: string, index: number, list: _.List<string>) => value === 'b';
const stringListMemoIterator = (prev: _.Dictionary<number>, value: string, index: number, list: _.List<string>) => {
    prev[value] = index;
    return prev;
};

const simpleStringObjectOrUndefinedArray: (SimpleStringObject | undefined)[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'b' }, undefined];
const simpleStringObjectOrUndefinedList: _.List<SimpleStringObject | undefined> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: undefined, length: 3 };
const simpleStringObjectOrUndefinedDictionary: _.Dictionary<SimpleStringObject | undefined> = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: undefined };

interface SimpleMultiTypeObject {
    a: boolean;
    c: string;
}

type IntersectingObjectPropertiesType = SimpleStringObject | SimpleMultiTypeObject;

const intersectingObjectPropertiesArray: IntersectingObjectPropertiesType[] = [{ a: 'a', b: 'b' }, { a: true, c: 'c' }];
const intersectingObjectPropertiesList: _.List<IntersectingObjectPropertiesType> = { 0: { a: 'a', b: 'b' }, 1: { a: true, c: 'c' }, length: 2 };
const intersectingObjectPropertiesDictionary: _.Dictionary<IntersectingObjectPropertiesType> = { a: { a: 'a', b: 'b' }, b: { a: true, c: 'c' } };

interface SimpleNonIntersectingObject {
    onlySimpleNonIntersectingObject: string;
}

type NonIntersectingObjectPropertiesType = SimpleStringObject | SimpleNonIntersectingObject;

const nonIntersectingObjectPropertiesArray: NonIntersectingObjectPropertiesType[] = [{ a: 'a', b: 'c' }, { onlySimpleNonIntersectingObject: 'b' }];
const nonIntersectingObjectPropertiesList: _.List<NonIntersectingObjectPropertiesType> = { 0: { a: 'a', b: 'c' }, 1: { onlySimpleNonIntersectingObject: 'b' }, length: 2 };
const nonIntersectingObjectPropertiesDictionary: _.Dictionary<NonIntersectingObjectPropertiesType> = { a: { a: 'a', b: 'c' }, b: { onlySimpleNonIntersectingObject: 'b' } };

const simpleStringArray: string[] = ['a', 'c'];
const simpleStringList: _.List<string> = { 0: 'a', 1: 'c', length: 2 };

interface SimpleNumberObject {
    a: number;
}

const simpleNumberObjectArray: SimpleNumberObject[] = [{ a: 0 }, { a: 1 }];
const simpleNumberObjectList: _.List<SimpleNumberObject> = { 0: { a: 0 }, 1: { a: 1 }, length: 2 };
const simpleNumberObjectListPropertySelectingIterator = (value: SimpleNumberObject, index: number, list: _.List<SimpleNumberObject>) => value.a;

const simpleNumberObjectDictionary: _.Dictionary<SimpleNumberObject> = { a: { a: 0 }, b: { a: 1 } };
const simpleNumberObjectDictionaryPropertySelectingIterator = (element: SimpleNumberObject, key: string, list: _.Dictionary<SimpleNumberObject>) => element.a;

const simpleNumberArray: number[] = [0, 1];
const simpleNumberList: _.List<number> = { 0: 0, 1: 1, length: 2 };
const simpleNumberDictionary: _.Dictionary<number> = { a: 0, b: 1 };

const simpleNumber = 7;

interface SimpleNoParameterFunctionObject {
    a: () => number;
}

const simpleNoParameterFunctionObjectArray: SimpleNoParameterFunctionObject[] = [{ a: Math.random }, { a: Math.random }];
const simpleNoParameterFunctionObjectList: _.List<SimpleNoParameterFunctionObject> = { 0: { a: Math.random }, 1: { a: Math.random }, length: 2 };
const simpleNoParameterFunctionObjectDictionary: _.Dictionary<SimpleNoParameterFunctionObject> = { a: { a: Math.random }, b: { a: Math.random } };

interface SimpleOneParameterFunctionObject {
    a: (arg0: number) => number;
}

const simpleOneParameterFunctionObjectArray: SimpleOneParameterFunctionObject[] = [{ a: Math.abs }, { a: Math.abs }];
const simpleOneParameterFunctionObjectList: _.List<SimpleOneParameterFunctionObject> = { 0: { a: Math.abs }, 1: { a: Math.abs }, length: 2 };
const simpleOneParameterFunctionObjectDictionary: _.Dictionary<SimpleOneParameterFunctionObject> = { a: { a: Math.abs }, b: { a: Math.abs } };

// Collections

// each, forEach
{
    _.each(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator); // $ExpectType SimpleStringObject[]
    _.each(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.forEach(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator); // $ExpectType SimpleStringObject[]
    _.forEach(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.each(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator); // $ExpectType List<SimpleStringObject>
    _.each(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator, context); // $ExpectType List<SimpleStringObject>

    _(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator); // $ExpectType List<SimpleStringObject>
    _(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator, context); // $ExpectType List<SimpleStringObject>

    _.chain(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator); // // $ExpectType _Chain<SimpleStringObject, List<SimpleStringObject>>
    _.chain(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator, context); // // $ExpectType _Chain<SimpleStringObject, List<SimpleStringObject>>

    _.forEach(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator); // $ExpectType List<SimpleStringObject>
    _.forEach(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator, context); // $ExpectType List<SimpleStringObject>

    _(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator); // $ExpectType List<SimpleStringObject>
    _(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator, context); // $ExpectType List<SimpleStringObject>

    _.chain(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator); // // $ExpectType _Chain<SimpleStringObject, List<SimpleStringObject>>
    _.chain(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator, context); // // $ExpectType _Chain<SimpleStringObject, List<SimpleStringObject>>

    _.each(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator); // $ExpectType Dictionary<SimpleStringObject>
    _.each(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator, context); // $ExpectType Dictionary<SimpleStringObject>

    _(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator); // $ExpectType Dictionary<SimpleStringObject>
    _(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator, context); // $ExpectType Dictionary<SimpleStringObject>

    _.chain(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
    _.chain(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator, context); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>

    _.forEach(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator); // $ExpectType Dictionary<SimpleStringObject>
    _.forEach(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator, context); // $ExpectType Dictionary<SimpleStringObject>

    _(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator); // $ExpectType Dictionary<SimpleStringObject>
    _(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator, context); // $ExpectType Dictionary<SimpleStringObject>

    _.chain(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
    _.chain(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator, context); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
}

// map, collect
{
    // function iterator
    _.map(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator); // $ExpectType string[]
    _.map(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType string[]

    _(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator); // $ExpectType string[]
    _(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType string[]

    _.chain(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<string, string[]>
    _.chain(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<string, string[]>

    _.collect(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator); // $ExpectType string[]
    _.collect(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType string[]

    _(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator); // $ExpectType string[]
    _(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType string[]

    _.chain(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<string, string[]>
    _.chain(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<string, string[]>

    _.map(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator); // $ExpectType string[]
    _.map(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType string[]

    _(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator); // $ExpectType string[]
    _(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType string[]

    _.chain(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<string, string[]>
    _.chain(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<string, string[]>

    _.collect(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator); // $ExpectType string[]
    _.collect(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType string[]

    _(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator); // $ExpectType string[]
    _(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType string[]

    _.chain(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<string, string[]>
    _.chain(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<string, string[]>

    _.map(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType string[]
    _.map(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType string[]

    _(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType string[]
    _(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType string[]

    _.chain(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType _Chain<string, string[]>
    _.chain(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType _Chain<string, string[]>

    _.collect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType string[]
    _.collect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType string[]

    _(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType string[]
    _(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType string[]

    _.chain(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType _Chain<string, string[]>
    _.chain(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType _Chain<string, string[]>

    _.map(simpleString, stringListModifyingIterator); // $ExpectType string[]
    _.map(simpleString, stringListModifyingIterator, context); // $ExpectType string[]

    _(simpleString).map(stringListModifyingIterator); // $ExpectType string[]
    _(simpleString).map(stringListModifyingIterator, context); // $ExpectType string[]

    _.chain(simpleString).map(stringListModifyingIterator); // $ExpectType _Chain<string, string[]>
    _.chain(simpleString).map(stringListModifyingIterator, context); // $ExpectType _Chain<string, string[]>

    _.collect(simpleString, stringListModifyingIterator); // $ExpectType string[]
    _.collect(simpleString, stringListModifyingIterator, context); // $ExpectType string[]

    _(simpleString).collect(stringListModifyingIterator); // $ExpectType string[]
    _(simpleString).collect(stringListModifyingIterator, context); // $ExpectType string[]

    _.chain(simpleString).collect(stringListModifyingIterator); // $ExpectType _Chain<string, string[]>
    _.chain(simpleString).collect(stringListModifyingIterator, context); // $ExpectType _Chain<string, string[]>

    // partial object iterator with a non-nullable single type
    _.map(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectArray).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectArray).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectArray).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectArray).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.map(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectList).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectList).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectList).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectList).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.map(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectDictionary).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectDictionary).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectDictionary).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectDictionary).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    // partial object iterator with a non-nullable intersecting type union
    _.map(intersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(intersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(intersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(intersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(intersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(intersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.map(intersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(intersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(intersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(intersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(intersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(intersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.map(intersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(intersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(intersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(intersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    // partial object iterator with a nullable type union
    _.map(simpleStringObjectOrUndefinedArray, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(simpleStringObjectOrUndefinedArray, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.map(simpleStringObjectOrUndefinedList, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectOrUndefinedList).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectOrUndefinedList).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(simpleStringObjectOrUndefinedList, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.map(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    // partial object iterator with a non-nullable non-intersecting type union
    _.map(nonIntersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(nonIntersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.map(nonIntersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(nonIntersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(nonIntersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(nonIntersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(nonIntersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(nonIntersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.map(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    // partial object iterator of type any
    _.map(simpleStringObjectArray as any, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectArray as any).map(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectArray as any).map(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    _.collect(simpleStringObjectArray as any, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _(simpleStringObjectArray as any).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean[]

    _.chain(simpleStringObjectArray as any).collect(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<boolean, boolean[]>

    // property name iterator with a non-nullable single type
    _.map(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType string[]

    _(simpleStringObjectArray).map(simpleStringObjectPropertyName); // $ExpectType string[]

    _.chain(simpleStringObjectArray).map(simpleStringObjectPropertyName); // $ExpectType _Chain<string, string[]>

    _.collect(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType string[]

    _(simpleStringObjectArray).collect(simpleStringObjectPropertyName); // $ExpectType string[]

    _.chain(simpleStringObjectArray).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<string, string[]>

    _.map(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType string[]

    _(simpleStringObjectList).map(simpleStringObjectPropertyName); // $ExpectType string[]

    _.chain(simpleStringObjectList).map(simpleStringObjectPropertyName); // $ExpectType _Chain<string, string[]>

    _.collect(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType string[]

    _(simpleStringObjectList).collect(simpleStringObjectPropertyName); // $ExpectType string[]

    _.chain(simpleStringObjectList).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<string, string[]>

    _.map(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType string[]

    _(simpleStringObjectDictionary).map(simpleStringObjectPropertyName); // $ExpectType string[]

    _.chain(simpleStringObjectDictionary).map(simpleStringObjectPropertyName); // $ExpectType _Chain<string, string[]>

    _.collect(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType string[]

    _(simpleStringObjectDictionary).collect(simpleStringObjectPropertyName); // $ExpectType string[]

    _.chain(simpleStringObjectDictionary).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<string, string[]>

    // property name iterator with a non-nullable intersecting type union
    _.map(intersectingObjectPropertiesArray, simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _(intersectingObjectPropertiesArray).map(simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _.chain(intersectingObjectPropertiesArray).map(simpleStringObjectPropertyName); // $ExpectType _Chain<string | boolean, (string | boolean)[]>

    _.collect(intersectingObjectPropertiesArray, simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _(intersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _.chain(intersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<string | boolean, (string | boolean)[]>

    _.map(intersectingObjectPropertiesList, simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _(intersectingObjectPropertiesList).map(simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _.chain(intersectingObjectPropertiesList).map(simpleStringObjectPropertyName); // $ExpectType _Chain<string | boolean, (string | boolean)[]>

    _.collect(intersectingObjectPropertiesList, simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _(intersectingObjectPropertiesList).collect(simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _.chain(intersectingObjectPropertiesList).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<string | boolean, (string | boolean)[]>

    _.map(intersectingObjectPropertiesDictionary, simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _(intersectingObjectPropertiesDictionary).map(simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _.chain(intersectingObjectPropertiesDictionary).map(simpleStringObjectPropertyName); // $ExpectType _Chain<string | boolean, (string | boolean)[]>

    _.collect(intersectingObjectPropertiesDictionary, simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _.chain(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<string | boolean, (string | boolean)[]>

    // property name iterator with a nullable type union
    _.map(simpleStringObjectOrUndefinedArray, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.collect(simpleStringObjectOrUndefinedArray, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.map(simpleStringObjectOrUndefinedList, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(simpleStringObjectOrUndefinedList).map(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(simpleStringObjectOrUndefinedList).map(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.collect(simpleStringObjectOrUndefinedList, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.map(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.collect(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    // property name iterator with a non-nullable non-intersecting type union
    _.map(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.collect(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.map(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.collect(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.map(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.collect(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    // property name iterator with type any
    // specifying any as T causes the result to be any[], which isn't ideal, but on the other hand getting that result involves choosing
    // to specify any in the first place
    _.map(simpleStringObjectArray as any, simpleStringObjectPropertyName); // $ExpectType any[]

    _(simpleStringObjectArray as any).map(simpleStringObjectPropertyName); // $ExpectType any[]

    _.chain(simpleStringObjectArray as any).map(simpleStringObjectPropertyName); // $ExpectType _Chain<any, any[]>

    _.collect(simpleStringObjectArray as any, simpleStringObjectPropertyName); // $ExpectType any[]

    _(simpleStringObjectArray as any).collect(simpleStringObjectPropertyName); // $ExpectType any[]

    _.chain(simpleStringObjectArray as any).collect(simpleStringObjectPropertyName); // $ExpectType _Chain<any, any[]>
}

// reduce, foldl, inject
{
    const stringMemo = '';
    const dictionaryMemo: _.Dictionary<number> = {};

    _.reduce(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.reduce(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectArray).reduce(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectArray).reduce(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectArray).reduce(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectArray).reduce(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.foldl(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.foldl(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectArray).foldl(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectArray).foldl(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectArray).foldl(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectArray).foldl(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.inject(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.inject(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectArray).inject(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectArray).inject(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectArray).inject(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectArray).inject(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.reduce(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.reduce(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectList).reduce(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectList).reduce(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectList).reduce(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectList).reduce(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.foldl(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.foldl(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectList).foldl(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectList).foldl(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectList).foldl(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectList).foldl(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.inject(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.inject(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectList).inject(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectList).inject(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectList).inject(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectList).inject(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.reduce(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _.reduce(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectDictionary).reduce(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectDictionary).reduce(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectDictionary).reduce(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectDictionary).reduce(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.foldl(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _.foldl(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectDictionary).foldl(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectDictionary).foldl(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectDictionary).foldl(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectDictionary).foldl(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.inject(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _.inject(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.reduce(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.reduce(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _(simpleString).reduce(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).reduce(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _.chain(simpleString).reduce(stringListMemoIterator, dictionaryMemo); // $ExpectType _ChainSingle<Dictionary<number>>
    _.chain(simpleString).reduce(stringListMemoIterator, dictionaryMemo, context); // $ExpectType _ChainSingle<Dictionary<number>>

    _.foldl(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.foldl(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _(simpleString).foldl(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).foldl(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _.chain(simpleString).foldl(stringListMemoIterator, dictionaryMemo); // $ExpectType _ChainSingle<Dictionary<number>>
    _.chain(simpleString).foldl(stringListMemoIterator, dictionaryMemo, context); // $ExpectType _ChainSingle<Dictionary<number>>

    _.inject(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.inject(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _(simpleString).inject(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).inject(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _.chain(simpleString).inject(stringListMemoIterator, dictionaryMemo); // $ExpectType _ChainSingle<Dictionary<number>>
    _.chain(simpleString).inject(stringListMemoIterator, dictionaryMemo, context); // $ExpectType _ChainSingle<Dictionary<number>>
}

// reduceRight, foldr
{
    const stringMemo = '';
    const dictionaryMemo: _.Dictionary<number> = {};

    _.reduceRight(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.reduceRight(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectArray).reduceRight(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectArray).reduceRight(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectArray).reduceRight(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectArray).reduceRight(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.foldr(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.foldr(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.reduceRight(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.reduceRight(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectList).reduceRight(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectList).reduceRight(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectList).reduceRight(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectList).reduceRight(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.foldr(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _.foldr(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.reduceRight(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _.reduceRight(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectDictionary).reduceRight(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectDictionary).reduceRight(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectDictionary).reduceRight(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectDictionary).reduceRight(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.foldr(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _.foldr(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType string
    _(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType string

    _.chain(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo); // $ExpectType _ChainSingle<string>
    _.chain(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, stringMemo, context); // $ExpectType _ChainSingle<string>

    _.reduceRight(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.reduceRight(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _(simpleString).reduceRight(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).reduceRight(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _.chain(simpleString).reduceRight(stringListMemoIterator, dictionaryMemo); // $ExpectType _ChainSingle<Dictionary<number>>
    _.chain(simpleString).reduceRight(stringListMemoIterator, dictionaryMemo, context); // $ExpectType _ChainSingle<Dictionary<number>>

    _.foldr(simpleString, stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _.foldr(simpleString, stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _(simpleString).foldr(stringListMemoIterator, dictionaryMemo); // $ExpectType Dictionary<number>
    _(simpleString).foldr(stringListMemoIterator, dictionaryMemo, context); // $ExpectType Dictionary<number>

    _.chain(simpleString).foldr(stringListMemoIterator, dictionaryMemo); // $ExpectType _ChainSingle<Dictionary<number>>
    _.chain(simpleString).foldr(stringListMemoIterator, dictionaryMemo, context); // $ExpectType _ChainSingle<Dictionary<number>>
}

// find, detect
{
    // function iterator
    _.find(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject | undefined
    _.find(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject | undefined
    _(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<SimpleStringObject | undefined>
    _.chain(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.detect(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject | undefined
    _.detect(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject | undefined
    _(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<SimpleStringObject | undefined>
    _.chain(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.find(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject | undefined
    _.find(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject | undefined
    _(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<SimpleStringObject | undefined>
    _.chain(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.detect(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject | undefined
    _.detect(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject | undefined
    _(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<SimpleStringObject | undefined>
    _.chain(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.find(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType SimpleStringObject | undefined
    _.find(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType SimpleStringObject | undefined
    _(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType _ChainSingle<SimpleStringObject | undefined>
    _.chain(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.detect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType SimpleStringObject | undefined
    _.detect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType SimpleStringObject | undefined
    _(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType _ChainSingle<SimpleStringObject | undefined>
    _.chain(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.find(simpleString, stringListComparingIterator); // $ExpectType string | undefined
    _.find(simpleString, stringListComparingIterator, context); // $ExpectType string | undefined

    _(simpleString).find(stringListComparingIterator); // $ExpectType string | undefined
    _(simpleString).find(stringListComparingIterator, context); // $ExpectType string | undefined

    _.chain(simpleString).find(stringListComparingIterator); // $ExpectType _ChainSingle<string | undefined>
    _.chain(simpleString).find(stringListComparingIterator, context); // $ExpectType _ChainSingle<string | undefined>

    _.detect(simpleString, stringListComparingIterator); // $ExpectType string | undefined
    _.detect(simpleString, stringListComparingIterator, context); // $ExpectType string | undefined

    _(simpleString).detect(stringListComparingIterator); // $ExpectType string | undefined
    _(simpleString).detect(stringListComparingIterator, context); // $ExpectType string | undefined

    _.chain(simpleString).detect(stringListComparingIterator); // $ExpectType _ChainSingle<string | undefined>
    _.chain(simpleString).detect(stringListComparingIterator, context); // $ExpectType _ChainSingle<string | undefined>

    // partial object iterator
    _.find(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectArray).find(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectArray).find(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.detect(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectArray).detect(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectArray).detect(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.find(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectList).find(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectList).find(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.detect(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectList).detect(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectList).detect(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.find(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectDictionary).find(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectDictionary).find(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.detect(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectDictionary).detect(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectDictionary).detect(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    // property name iterator
    _.find(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectArray).find(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectArray).find(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.detect(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectArray).detect(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectArray).detect(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.find(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectList).find(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectList).find(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.detect(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectList).detect(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectList).detect(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.find(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectDictionary).find(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectDictionary).find(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.detect(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectDictionary).detect(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectDictionary).detect(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<SimpleStringObject | undefined>
}

// filter, select
{
    // function iterator
    _.filter(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _.filter(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.select(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _.select(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.filter(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _.filter(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.select(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _.select(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.filter(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _.filter(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.select(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _.select(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.filter(simpleString, stringListComparingIterator); // $ExpectType string[]
    _.filter(simpleString, stringListComparingIterator, context); // $ExpectType string[]

    _(simpleString).filter(stringListComparingIterator); // $ExpectType string[]
    _(simpleString).filter(stringListComparingIterator, context); // $ExpectType string[]

    _.chain(simpleString).filter(stringListComparingIterator); // $ExpectType _Chain<string, string[]>
    _.chain(simpleString).filter(stringListComparingIterator, context); // $ExpectType _Chain<string, string[]>

    _.select(simpleString, stringListComparingIterator); // $ExpectType string[]
    _.select(simpleString, stringListComparingIterator, context); // $ExpectType string[]

    _(simpleString).select(stringListComparingIterator); // $ExpectType string[]
    _(simpleString).select(stringListComparingIterator, context); // $ExpectType string[]

    _.chain(simpleString).select(stringListComparingIterator); // $ExpectType _Chain<string, string[]>
    _.chain(simpleString).select(stringListComparingIterator, context); // $ExpectType _Chain<string, string[]>

    // partial object iterator
    _.filter(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).filter(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).filter(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.select(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).select(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).select(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.filter(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).filter(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).filter(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.select(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).select(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).select(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.filter(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).filter(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).filter(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.select(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).select(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).select(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    // property name iterator
    _.filter(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).filter(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).filter(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.select(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).select(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).select(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.filter(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).filter(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).filter(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.select(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).select(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).select(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.filter(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).filter(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).filter(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.select(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).select(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).select(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
}

// where
{
    _.where(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).where(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).where(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.where(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).where(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).where(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.where(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).where(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).where(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
}

// findWhere
{
    _.findWhere(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectArray).findWhere(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectArray).findWhere(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.findWhere(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectList).findWhere(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectList).findWhere(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.findWhere(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectDictionary).findWhere(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectDictionary).findWhere(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<SimpleStringObject | undefined>
}

// reject
{
    // function iterator
    _.reject(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _.reject(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.reject(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _.reject(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.reject(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _.reject(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.reject(simpleString, stringListComparingIterator); // $ExpectType string[]
    _.reject(simpleString, stringListComparingIterator, context); // $ExpectType string[]

    _(simpleString).reject(stringListComparingIterator); // $ExpectType string[]
    _(simpleString).reject(stringListComparingIterator, context); // $ExpectType string[]

    _.chain(simpleString).reject(stringListComparingIterator); // $ExpectType _Chain<string, string[]>
    _.chain(simpleString).reject(stringListComparingIterator, context); // $ExpectType _Chain<string, string[]>

    // partial object iterator
    _.reject(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).reject(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).reject(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.reject(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).reject(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).reject(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.reject(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).reject(simpleStringObjectPartialPropertyMatch); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).reject(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    // property name iterator
    _.reject(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).reject(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).reject(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.reject(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).reject(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).reject(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.reject(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).reject(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).reject(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
}

// every, all
{
    // function iterator
    _.every(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _.every(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _.chain(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.all(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _.all(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _.chain(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.every(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _.every(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _.chain(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.all(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _.all(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _.chain(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.every(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType boolean
    _.every(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    _(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType boolean
    _(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.all(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType boolean
    _.all(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    _(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType boolean
    _(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.every(simpleString, stringListComparingIterator); // $ExpectType boolean
    _.every(simpleString, stringListComparingIterator, context); // $ExpectType boolean

    _(simpleString).every(stringListComparingIterator); // $ExpectType boolean
    _(simpleString).every(stringListComparingIterator, context); // $ExpectType boolean

    _.chain(simpleString).every(stringListComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleString).every(stringListComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.all(simpleString, stringListComparingIterator); // $ExpectType boolean
    _.all(simpleString, stringListComparingIterator, context); // $ExpectType boolean

    _(simpleString).all(stringListComparingIterator); // $ExpectType boolean
    _(simpleString).all(stringListComparingIterator, context); // $ExpectType boolean

    _.chain(simpleString).all(stringListComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleString).all(stringListComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    // partial object iterator
    _.every(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _(simpleStringObjectArray).every(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _.chain(simpleStringObjectArray).every(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<boolean>

    _.all(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _(simpleStringObjectArray).all(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _.chain(simpleStringObjectArray).all(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<boolean>

    _.every(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _(simpleStringObjectList).every(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _.chain(simpleStringObjectList).every(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<boolean>

    _.all(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _(simpleStringObjectList).all(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _.chain(simpleStringObjectList).all(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<boolean>

    _.every(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _(simpleStringObjectDictionary).every(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).every(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<boolean>

    _.all(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _(simpleStringObjectDictionary).all(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).all(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<boolean>

    // property name iterator
    _.every(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType boolean

    _(simpleStringObjectArray).every(simpleStringObjectPropertyName); // $ExpectType boolean

    _.chain(simpleStringObjectArray).every(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<boolean>

    _.all(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType boolean

    _(simpleStringObjectArray).all(simpleStringObjectPropertyName); // $ExpectType boolean

    _.chain(simpleStringObjectArray).all(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<boolean>

    _.every(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType boolean

    _(simpleStringObjectList).every(simpleStringObjectPropertyName); // $ExpectType boolean

    _.chain(simpleStringObjectList).every(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<boolean>

    _.all(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType boolean

    _(simpleStringObjectList).all(simpleStringObjectPropertyName); // $ExpectType boolean

    _.chain(simpleStringObjectList).all(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<boolean>

    _.every(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType boolean

    _(simpleStringObjectDictionary).every(simpleStringObjectPropertyName); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).every(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<boolean>

    _.all(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType boolean

    _(simpleStringObjectDictionary).all(simpleStringObjectPropertyName); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).all(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<boolean>
}

// some, any
{
    // function iterator
    _.some(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _.some(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _.chain(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.any(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _.any(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _.chain(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.some(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _.some(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _.chain(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.any(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _.any(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator); // $ExpectType boolean
    _(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType boolean

    _.chain(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.some(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType boolean
    _.some(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    _(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType boolean
    _(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.any(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType boolean
    _.any(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    _(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType boolean
    _(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.some(simpleString, stringListComparingIterator); // $ExpectType boolean
    _.some(simpleString, stringListComparingIterator, context); // $ExpectType boolean

    _(simpleString).some(stringListComparingIterator); // $ExpectType boolean
    _(simpleString).some(stringListComparingIterator, context); // $ExpectType boolean

    _.chain(simpleString).some(stringListComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleString).some(stringListComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    _.any(simpleString, stringListComparingIterator); // $ExpectType boolean
    _.any(simpleString, stringListComparingIterator, context); // $ExpectType boolean

    _(simpleString).any(stringListComparingIterator); // $ExpectType boolean
    _(simpleString).any(stringListComparingIterator, context); // $ExpectType boolean

    _.chain(simpleString).any(stringListComparingIterator); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleString).any(stringListComparingIterator, context); // $ExpectType _ChainSingle<boolean>

    // partial object iterator
    _.some(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _(simpleStringObjectArray).some(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _.chain(simpleStringObjectArray).some(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<boolean>

    _.any(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _(simpleStringObjectArray).any(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _.chain(simpleStringObjectArray).any(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<boolean>

    _.some(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _(simpleStringObjectList).some(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _.chain(simpleStringObjectList).some(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<boolean>

    _.any(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _(simpleStringObjectList).any(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _.chain(simpleStringObjectList).any(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<boolean>

    _.some(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _(simpleStringObjectDictionary).some(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).some(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<boolean>

    _.any(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _(simpleStringObjectDictionary).any(simpleStringObjectPartialPropertyMatch); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).any(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<boolean>

    // property name iterator
    _.some(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType boolean

    _(simpleStringObjectArray).some(simpleStringObjectPropertyName); // $ExpectType boolean

    _.chain(simpleStringObjectArray).some(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<boolean>

    _.any(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType boolean

    _(simpleStringObjectArray).any(simpleStringObjectPropertyName); // $ExpectType boolean

    _.chain(simpleStringObjectArray).any(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<boolean>

    _.some(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType boolean

    _(simpleStringObjectList).some(simpleStringObjectPropertyName); // $ExpectType boolean

    _.chain(simpleStringObjectList).some(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<boolean>

    _.any(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType boolean

    _(simpleStringObjectList).any(simpleStringObjectPropertyName); // $ExpectType boolean

    _.chain(simpleStringObjectList).any(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<boolean>

    _.some(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType boolean

    _(simpleStringObjectDictionary).some(simpleStringObjectPropertyName); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).some(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<boolean>

    _.any(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType boolean

    _(simpleStringObjectDictionary).any(simpleStringObjectPropertyName); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).any(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<boolean>
}

// contains, include, includes
{
    const fromIndex = 1;
    const simpleStringObjectValue = simpleStringObjectArray[0];
    const simpleStringValue = simpleString[0];

    _.contains(simpleStringObjectArray, simpleStringObjectValue); // $ExpectType boolean
    _.contains(simpleStringObjectArray, simpleStringObjectValue, fromIndex); // $ExpectType boolean

    _(simpleStringObjectArray).contains(simpleStringObjectValue); // $ExpectType boolean
    _(simpleStringObjectArray).contains(simpleStringObjectValue, fromIndex); // $ExpectType boolean

    _.chain(simpleStringObjectArray).contains(simpleStringObjectValue); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectArray).contains(simpleStringObjectValue, fromIndex); // $ExpectType _ChainSingle<boolean>

    _.include(simpleStringObjectArray, simpleStringObjectValue); // $ExpectType boolean
    _.include(simpleStringObjectArray, simpleStringObjectValue, fromIndex); // $ExpectType boolean

    _(simpleStringObjectArray).include(simpleStringObjectValue); // $ExpectType boolean
    _(simpleStringObjectArray).include(simpleStringObjectValue, fromIndex); // $ExpectType boolean

    _.chain(simpleStringObjectArray).include(simpleStringObjectValue); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectArray).include(simpleStringObjectValue, fromIndex); // $ExpectType _ChainSingle<boolean>

    _.includes(simpleStringObjectArray, simpleStringObjectValue); // $ExpectType boolean
    _.includes(simpleStringObjectArray, simpleStringObjectValue, fromIndex); // $ExpectType boolean

    _(simpleStringObjectArray).includes(simpleStringObjectValue); // $ExpectType boolean
    _(simpleStringObjectArray).includes(simpleStringObjectValue, fromIndex); // $ExpectType boolean

    _.chain(simpleStringObjectArray).includes(simpleStringObjectValue); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectArray).includes(simpleStringObjectValue, fromIndex); // $ExpectType _ChainSingle<boolean>

    _.contains(simpleStringObjectList, simpleStringObjectValue); // $ExpectType boolean
    _.contains(simpleStringObjectList, simpleStringObjectValue, fromIndex); // $ExpectType boolean

    _(simpleStringObjectList).contains(simpleStringObjectValue); // $ExpectType boolean
    _(simpleStringObjectList).contains(simpleStringObjectValue, fromIndex); // $ExpectType boolean

    _.chain(simpleStringObjectList).contains(simpleStringObjectValue); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectList).contains(simpleStringObjectValue, fromIndex); // $ExpectType _ChainSingle<boolean>

    _.include(simpleStringObjectList, simpleStringObjectValue); // $ExpectType boolean
    _.include(simpleStringObjectList, simpleStringObjectValue, fromIndex); // $ExpectType boolean

    _(simpleStringObjectList).include(simpleStringObjectValue); // $ExpectType boolean
    _(simpleStringObjectList).include(simpleStringObjectValue, fromIndex); // $ExpectType boolean

    _.chain(simpleStringObjectList).include(simpleStringObjectValue); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectList).include(simpleStringObjectValue, fromIndex); // $ExpectType _ChainSingle<boolean>

    _.includes(simpleStringObjectList, simpleStringObjectValue); // $ExpectType boolean
    _.includes(simpleStringObjectList, simpleStringObjectValue, fromIndex); // $ExpectType boolean

    _(simpleStringObjectList).includes(simpleStringObjectValue); // $ExpectType boolean
    _(simpleStringObjectList).includes(simpleStringObjectValue, fromIndex); // $ExpectType boolean

    _.chain(simpleStringObjectList).includes(simpleStringObjectValue); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleStringObjectList).includes(simpleStringObjectValue, fromIndex); // $ExpectType _ChainSingle<boolean>

    _.contains(simpleStringObjectDictionary, simpleStringObjectValue); // $ExpectType boolean

    _(simpleStringObjectDictionary).contains(simpleStringObjectValue); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).contains(simpleStringObjectValue); // $ExpectType _ChainSingle<boolean>

    _.include(simpleStringObjectDictionary, simpleStringObjectValue); // $ExpectType boolean

    _(simpleStringObjectDictionary).include(simpleStringObjectValue); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).include(simpleStringObjectValue); // $ExpectType _ChainSingle<boolean>

    _.includes(simpleStringObjectDictionary, simpleStringObjectValue); // $ExpectType boolean

    _(simpleStringObjectDictionary).includes(simpleStringObjectValue); // $ExpectType boolean

    _.chain(simpleStringObjectDictionary).includes(simpleStringObjectValue); // $ExpectType _ChainSingle<boolean>

    _.contains(simpleString, simpleStringValue); // $ExpectType boolean
    _.contains(simpleString, simpleStringValue, fromIndex); // $ExpectType boolean

    _(simpleString).contains(simpleStringValue); // $ExpectType boolean
    _(simpleString).contains(simpleStringValue, fromIndex); // $ExpectType boolean

    _.chain(simpleString).contains(simpleStringValue); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleString).contains(simpleStringValue, fromIndex); // $ExpectType _ChainSingle<boolean>

    _.include(simpleString, simpleStringValue); // $ExpectType boolean
    _.include(simpleString, simpleStringValue, fromIndex); // $ExpectType boolean

    _(simpleString).include(simpleStringValue); // $ExpectType boolean
    _(simpleString).include(simpleStringValue, fromIndex); // $ExpectType boolean

    _.chain(simpleString).include(simpleStringValue); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleString).include(simpleStringValue, fromIndex); // $ExpectType _ChainSingle<boolean>

    _.includes(simpleString, simpleStringValue); // $ExpectType boolean
    _.includes(simpleString, simpleStringValue, fromIndex); // $ExpectType boolean

    _(simpleString).includes(simpleStringValue); // $ExpectType boolean
    _(simpleString).includes(simpleStringValue, fromIndex); // $ExpectType boolean

    _.chain(simpleString).includes(simpleStringValue); // $ExpectType _ChainSingle<boolean>
    _.chain(simpleString).includes(simpleStringValue, fromIndex); // $ExpectType _ChainSingle<boolean>
}

// invoke
// once TS 3.6 is reached as a minimum version, as a breaking change, consider updating invoke to be the following:
// type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
{
    const functionName = 'substring';
    const simpleStringArg = 1;
    const simpleStringObjectArg = -1;

    // without parameters
    _.invoke(simpleNoParameterFunctionObjectArray, simpleStringObjectPropertyName); // $ExpectType any[]

    _(simpleNoParameterFunctionObjectArray).invoke(simpleStringObjectPropertyName); // $ExpectType any[]

    _.chain(simpleNoParameterFunctionObjectArray).invoke(simpleStringObjectPropertyName); // $ExpectType _Chain<any, any[]>

    _.invoke(simpleNoParameterFunctionObjectList, simpleStringObjectPropertyName); // $ExpectType any[]

    _(simpleNoParameterFunctionObjectList).invoke(simpleStringObjectPropertyName); // $ExpectType any[]

    _.chain(simpleNoParameterFunctionObjectList).invoke(simpleStringObjectPropertyName); // $ExpectType _Chain<any, any[]>

    _.invoke(simpleNoParameterFunctionObjectDictionary, simpleStringObjectPropertyName); // $ExpectType any[]

    _(simpleNoParameterFunctionObjectDictionary).invoke(simpleStringObjectPropertyName); // $ExpectType any[]

    _.chain(simpleNoParameterFunctionObjectDictionary).invoke(simpleStringObjectPropertyName); // $ExpectType _Chain<any, any[]>

    _.invoke(simpleString, simpleStringObjectPropertyName); // $ExpectType any[]

    _(simpleString).invoke(simpleStringObjectPropertyName); // $ExpectType any[]

    _.chain(simpleString).invoke(simpleStringObjectPropertyName); // $ExpectType _Chain<any, any[]>

    // with parameters
    _.invoke(simpleOneParameterFunctionObjectArray, simpleStringObjectPropertyName, simpleStringObjectArg); // $ExpectType any[]

    _(simpleOneParameterFunctionObjectArray).invoke(simpleStringObjectPropertyName, simpleStringObjectArg); // $ExpectType any[]

    _.chain(simpleOneParameterFunctionObjectArray).invoke(simpleStringObjectPropertyName, simpleStringObjectArg); // $ExpectType _Chain<any, any[]>

    _.invoke(simpleOneParameterFunctionObjectList, simpleStringObjectPropertyName, simpleStringObjectArg); // $ExpectType any[]

    _(simpleOneParameterFunctionObjectList).invoke(simpleStringObjectPropertyName, simpleStringObjectArg); // $ExpectType any[]

    _.chain(simpleOneParameterFunctionObjectList).invoke(simpleStringObjectPropertyName, simpleStringObjectArg); // $ExpectType _Chain<any, any[]>

    _.invoke(simpleOneParameterFunctionObjectDictionary, simpleStringObjectPropertyName, simpleStringObjectArg); // $ExpectType any[]

    _(simpleOneParameterFunctionObjectDictionary).invoke(simpleStringObjectPropertyName, simpleStringObjectArg); // $ExpectType any[]

    _.chain(simpleOneParameterFunctionObjectDictionary).invoke(simpleStringObjectPropertyName, simpleStringObjectArg); // $ExpectType _Chain<any, any[]>

    _.invoke(simpleString, functionName, simpleStringArg); // $ExpectType any[]

    _(simpleString).invoke(functionName, simpleStringArg); // $ExpectType any[]

    _.chain(simpleString).invoke(functionName, simpleStringArg); // $ExpectType _Chain<any, any[]>
}

// pluck
{
    // property name iterator with a non-nullable single type
    _.pluck(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType string[]

    _(simpleStringObjectArray).pluck(simpleStringObjectPropertyName); // $ExpectType string[]

    _.chain(simpleStringObjectArray).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<string, string[]>

    _.pluck(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType string[]

    _(simpleStringObjectList).pluck(simpleStringObjectPropertyName); // $ExpectType string[]

    _.chain(simpleStringObjectList).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<string, string[]>

    _.pluck(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType string[]

    _(simpleStringObjectDictionary).pluck(simpleStringObjectPropertyName); // $ExpectType string[]

    _.chain(simpleStringObjectDictionary).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<string, string[]>

    // property name iterator with a non-nullable intersecting type union
    _.pluck(intersectingObjectPropertiesArray, simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _(intersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _.chain(intersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<string | boolean, (string | boolean)[]>

    _.pluck(intersectingObjectPropertiesList, simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _(intersectingObjectPropertiesList).pluck(simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _.chain(intersectingObjectPropertiesList).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<string | boolean, (string | boolean)[]>

    _.pluck(intersectingObjectPropertiesDictionary, simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _(intersectingObjectPropertiesDictionary).pluck(simpleStringObjectPropertyName); // $ExpectType (string | boolean)[]

    _.chain(intersectingObjectPropertiesDictionary).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<string | boolean, (string | boolean)[]>

    // property name iterator with a nullable type union
    _.pluck(simpleStringObjectOrUndefinedArray, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(simpleStringObjectOrUndefinedArray).pluck(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(simpleStringObjectOrUndefinedArray).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.pluck(simpleStringObjectOrUndefinedList, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(simpleStringObjectOrUndefinedList).pluck(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(simpleStringObjectOrUndefinedList).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.pluck(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(simpleStringObjectOrUndefinedDictionary).pluck(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(simpleStringObjectOrUndefinedDictionary).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    // property name iterator with a non-nullable non-intersecting type union
    _.pluck(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(nonIntersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(nonIntersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.pluck(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(nonIntersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(nonIntersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    _.pluck(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _(nonIntersectingObjectPropertiesDictionary).pluck(simpleStringObjectPropertyName); // $ExpectType (string | undefined)[]

    _.chain(nonIntersectingObjectPropertiesDictionary).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<string | undefined, (string | undefined)[]>

    // property name iterator with type any
    // specifying any as T causes the result to be any[], which isn't ideal, but on the other hand getting that result involves choosing
    // to specify any in the first place
    _.pluck(simpleStringObjectArray as any, simpleStringObjectPropertyName); // $ExpectType any[]

    _(simpleStringObjectArray as any).pluck(simpleStringObjectPropertyName); // $ExpectType any[]

    _.chain(simpleStringObjectArray as any).pluck(simpleStringObjectPropertyName); // $ExpectType _Chain<any, any[]>
}

// max
{
    // without iterator
    _.max(simpleNumberArray); // $ExpectType number

    _(simpleNumberArray).max(); // $ExpectType number

    _.chain(simpleNumberArray).max(); // $ExpectType _ChainSingle<number>

    _.max(simpleNumberList); // $ExpectType number

    _(simpleNumberList).max(); // $ExpectType number

    _.chain(simpleNumberList).max(); // $ExpectType _ChainSingle<number>

    _.max(simpleNumberDictionary); // $ExpectType number

    _(simpleNumberDictionary).max(); // $ExpectType number

    _.chain(simpleNumberDictionary).max(); // $ExpectType _ChainSingle<number>

    // function iterator
    _.max(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator); // $ExpectType number | SimpleNumberObject
    _.max(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator, context); // $ExpectType number | SimpleNumberObject

    _(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator); // $ExpectType number | SimpleNumberObject
    _(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator, context); // $ExpectType number | SimpleNumberObject

    _.chain(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator); // $ExpectType _ChainSingle<number | SimpleNumberObject>
    _.chain(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator, context); // $ExpectType _ChainSingle<number | SimpleNumberObject>

    _.max(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator); // $ExpectType number | SimpleNumberObject
    _.max(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator, context); // $ExpectType number | SimpleNumberObject

    _(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator); // $ExpectType number | SimpleNumberObject
    _(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator, context); // $ExpectType number | SimpleNumberObject

    _.chain(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator); // $ExpectType _ChainSingle<number | SimpleNumberObject>
    _.chain(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator, context); // $ExpectType _ChainSingle<number | SimpleNumberObject>

    _.max(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator); // $ExpectType number | SimpleNumberObject
    _.max(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator, context); // $ExpectType number | SimpleNumberObject

    _(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator); // $ExpectType number | SimpleNumberObject
    _(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator, context); // $ExpectType number | SimpleNumberObject

    _.chain(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator); // $ExpectType _ChainSingle<number | SimpleNumberObject>
    _.chain(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator, context); // $ExpectType _ChainSingle<number | SimpleNumberObject>

    // property name iterator
    _.max(simpleNumberObjectArray, simpleStringObjectPropertyName); // $ExpectType number | SimpleNumberObject

    _(simpleNumberObjectArray).max(simpleStringObjectPropertyName); // $ExpectType number | SimpleNumberObject

    _.chain(simpleNumberObjectArray).max(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<number | SimpleNumberObject>

    _.max(simpleNumberObjectList, simpleStringObjectPropertyName); // $ExpectType number | SimpleNumberObject

    _(simpleNumberObjectList).max(simpleStringObjectPropertyName); // $ExpectType number | SimpleNumberObject

    _.chain(simpleNumberObjectList).max(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<number | SimpleNumberObject>

    _.max(simpleNumberObjectDictionary, simpleStringObjectPropertyName); // $ExpectType number | SimpleNumberObject

    _(simpleNumberObjectDictionary).max(simpleStringObjectPropertyName); // $ExpectType number | SimpleNumberObject

    _.chain(simpleNumberObjectDictionary).max(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<number | SimpleNumberObject>
}

// min
{
    // without iterator
    _.min(simpleNumberArray); // $ExpectType number

    _(simpleNumberArray).min(); // $ExpectType number

    _.chain(simpleNumberArray).min(); // $ExpectType _ChainSingle<number>

    _.min(simpleNumberList); // $ExpectType number

    _(simpleNumberList).min(); // $ExpectType number

    _.chain(simpleNumberList).min(); // $ExpectType _ChainSingle<number>

    _.min(simpleNumberDictionary); // $ExpectType number

    _(simpleNumberDictionary).min(); // $ExpectType number

    _.chain(simpleNumberDictionary).min(); // $ExpectType _ChainSingle<number>

    // function iterator
    _.min(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator); // $ExpectType number | SimpleNumberObject
    _.min(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator, context); // $ExpectType number | SimpleNumberObject

    _(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator); // $ExpectType number | SimpleNumberObject
    _(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator, context); // $ExpectType number | SimpleNumberObject

    _.chain(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator); // $ExpectType _ChainSingle<number | SimpleNumberObject>
    _.chain(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator, context); // $ExpectType _ChainSingle<number | SimpleNumberObject>

    _.min(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator); // $ExpectType number | SimpleNumberObject
    _.min(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator, context); // $ExpectType number | SimpleNumberObject

    _(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator); // $ExpectType number | SimpleNumberObject
    _(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator, context); // $ExpectType number | SimpleNumberObject

    _.chain(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator); // $ExpectType _ChainSingle<number | SimpleNumberObject>
    _.chain(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator, context); // $ExpectType _ChainSingle<number | SimpleNumberObject>

    _.min(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator); // $ExpectType number | SimpleNumberObject
    _.min(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator, context); // $ExpectType number | SimpleNumberObject

    _(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator); // $ExpectType number | SimpleNumberObject
    _(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator, context); // $ExpectType number | SimpleNumberObject

    _.chain(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator); // $ExpectType _ChainSingle<number | SimpleNumberObject>
    _.chain(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator, context); // $ExpectType _ChainSingle<number | SimpleNumberObject>

    // property name iterator
    _.min(simpleNumberObjectArray, simpleStringObjectPropertyName); // $ExpectType number | SimpleNumberObject

    _(simpleNumberObjectArray).min(simpleStringObjectPropertyName); // $ExpectType number | SimpleNumberObject

    _.chain(simpleNumberObjectArray).min(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<number | SimpleNumberObject>

    _.min(simpleNumberObjectList, simpleStringObjectPropertyName); // $ExpectType number | SimpleNumberObject

    _(simpleNumberObjectList).min(simpleStringObjectPropertyName); // $ExpectType number | SimpleNumberObject

    _.chain(simpleNumberObjectList).min(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<number | SimpleNumberObject>

    _.min(simpleNumberObjectDictionary, simpleStringObjectPropertyName); // $ExpectType number | SimpleNumberObject

    _(simpleNumberObjectDictionary).min(simpleStringObjectPropertyName); // $ExpectType number | SimpleNumberObject

    _.chain(simpleNumberObjectDictionary).min(simpleStringObjectPropertyName); // $ExpectType _ChainSingle<number | SimpleNumberObject>
}

// sortBy
{
    // function iterator
    _.sortBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _.sortBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.sortBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _.sortBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.sortBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _.sortBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    // property name iterator
    _.sortBy(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).sortBy(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).sortBy(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.sortBy(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).sortBy(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).sortBy(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.sortBy(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).sortBy(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).sortBy(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
}

// groupBy
{
    // function iterator
    _.groupBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator); // $ExpectType Dictionary<SimpleStringObject[]>
    _.groupBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType Dictionary<SimpleStringObject[]>

    _(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator); // $ExpectType Dictionary<SimpleStringObject[]>
    _(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType Dictionary<SimpleStringObject[]>

    _.chain(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator); // // $ExpectType _Chain<SimpleStringObject[], Dictionary<SimpleStringObject[]>>
    _.chain(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator, context); // // $ExpectType _Chain<SimpleStringObject[], Dictionary<SimpleStringObject[]>>

    _.groupBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator); // $ExpectType Dictionary<SimpleStringObject[]>
    _.groupBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType Dictionary<SimpleStringObject[]>

    _(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator); // $ExpectType Dictionary<SimpleStringObject[]>
    _(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType Dictionary<SimpleStringObject[]>

    _.chain(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator); // // $ExpectType _Chain<SimpleStringObject[], Dictionary<SimpleStringObject[]>>
    _.chain(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator, context); // // $ExpectType _Chain<SimpleStringObject[], Dictionary<SimpleStringObject[]>>

    _.groupBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType Dictionary<SimpleStringObject[]>
    _.groupBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType Dictionary<SimpleStringObject[]>

    _(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType Dictionary<SimpleStringObject[]>
    _(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType Dictionary<SimpleStringObject[]>

    _.chain(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator); // // $ExpectType _Chain<SimpleStringObject[], Dictionary<SimpleStringObject[]>>
    _.chain(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator, context); // // $ExpectType _Chain<SimpleStringObject[], Dictionary<SimpleStringObject[]>>

    // property name iterator
    _.groupBy(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType Dictionary<SimpleStringObject[]>

    _(simpleStringObjectArray).groupBy(simpleStringObjectPropertyName); // $ExpectType Dictionary<SimpleStringObject[]>

    _.chain(simpleStringObjectArray).groupBy(simpleStringObjectPropertyName); // // $ExpectType _Chain<SimpleStringObject[], Dictionary<SimpleStringObject[]>>

    _.groupBy(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType Dictionary<SimpleStringObject[]>

    _(simpleStringObjectList).groupBy(simpleStringObjectPropertyName); // $ExpectType Dictionary<SimpleStringObject[]>

    _.chain(simpleStringObjectList).groupBy(simpleStringObjectPropertyName); // // $ExpectType _Chain<SimpleStringObject[], Dictionary<SimpleStringObject[]>>

    _.groupBy(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType Dictionary<SimpleStringObject[]>

    _(simpleStringObjectDictionary).groupBy(simpleStringObjectPropertyName); // $ExpectType Dictionary<SimpleStringObject[]>

    _.chain(simpleStringObjectDictionary).groupBy(simpleStringObjectPropertyName); // // $ExpectType _Chain<SimpleStringObject[], Dictionary<SimpleStringObject[]>>
}

// indexBy
{
    // function iterator
    _.indexBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator); // $ExpectType Dictionary<SimpleStringObject>
    _.indexBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType Dictionary<SimpleStringObject>

    _(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator); // $ExpectType Dictionary<SimpleStringObject>
    _(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType Dictionary<SimpleStringObject>

    _.chain(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
    _.chain(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator, context); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>

    _.indexBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator); // $ExpectType Dictionary<SimpleStringObject>
    _.indexBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType Dictionary<SimpleStringObject>

    _(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator); // $ExpectType Dictionary<SimpleStringObject>
    _(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType Dictionary<SimpleStringObject>

    _.chain(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
    _.chain(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator, context); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>

    _.indexBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType Dictionary<SimpleStringObject>
    _.indexBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType Dictionary<SimpleStringObject>

    _(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType Dictionary<SimpleStringObject>
    _(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType Dictionary<SimpleStringObject>

    _.chain(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
    _.chain(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator, context); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>

    // property name iterator
    _.indexBy(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType Dictionary<SimpleStringObject>

    _(simpleStringObjectArray).indexBy(simpleStringObjectPropertyName); // $ExpectType Dictionary<SimpleStringObject>

    _.chain(simpleStringObjectArray).indexBy(simpleStringObjectPropertyName); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>

    _.indexBy(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType Dictionary<SimpleStringObject>

    _(simpleStringObjectList).indexBy(simpleStringObjectPropertyName); // $ExpectType Dictionary<SimpleStringObject>

    _.chain(simpleStringObjectList).indexBy(simpleStringObjectPropertyName); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>

    _.indexBy(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType Dictionary<SimpleStringObject>

    _(simpleStringObjectDictionary).indexBy(simpleStringObjectPropertyName); // $ExpectType Dictionary<SimpleStringObject>

    _.chain(simpleStringObjectDictionary).indexBy(simpleStringObjectPropertyName); // // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
}

// countBy
{
    // function iterator
    _.countBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator); // $ExpectType Dictionary<number>
    _.countBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType Dictionary<number>

    _(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator); // $ExpectType Dictionary<number>
    _(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType Dictionary<number>

    _.chain(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<number, Dictionary<number>>
    _.chain(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<number, Dictionary<number>>

    _.countBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator); // $ExpectType Dictionary<number>
    _.countBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType Dictionary<number>

    _(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator); // $ExpectType Dictionary<number>
    _(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType Dictionary<number>

    _.chain(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<number, Dictionary<number>>
    _.chain(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<number, Dictionary<number>>

    _.countBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType Dictionary<number>
    _.countBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType Dictionary<number>

    _(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType Dictionary<number>
    _(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType Dictionary<number>

    _.chain(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator); // $ExpectType _Chain<number, Dictionary<number>>
    _.chain(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator, context); // $ExpectType _Chain<number, Dictionary<number>>

    _.countBy(simpleString, stringListSelectingIterator); // $ExpectType Dictionary<number>
    _.countBy(simpleString, stringListSelectingIterator, context); // $ExpectType Dictionary<number>

    _(simpleString).countBy(stringListSelectingIterator); // $ExpectType Dictionary<number>
    _(simpleString).countBy(stringListSelectingIterator, context); // $ExpectType Dictionary<number>

    _.chain(simpleString).countBy(stringListSelectingIterator); // $ExpectType _Chain<number, Dictionary<number>>
    _.chain(simpleString).countBy(stringListSelectingIterator, context); // $ExpectType _Chain<number, Dictionary<number>>

    // property name iterator
    _.countBy(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType Dictionary<number>

    _(simpleStringObjectArray).countBy(simpleStringObjectPropertyName); // $ExpectType Dictionary<number>

    _.chain(simpleStringObjectArray).countBy(simpleStringObjectPropertyName); // $ExpectType _Chain<number, Dictionary<number>>

    _.countBy(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType Dictionary<number>

    _(simpleStringObjectList).countBy(simpleStringObjectPropertyName); // $ExpectType Dictionary<number>

    _.chain(simpleStringObjectList).countBy(simpleStringObjectPropertyName); // $ExpectType _Chain<number, Dictionary<number>>

    _.countBy(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType Dictionary<number>

    _(simpleStringObjectDictionary).countBy(simpleStringObjectPropertyName); // $ExpectType Dictionary<number>

    _.chain(simpleStringObjectDictionary).countBy(simpleStringObjectPropertyName); // $ExpectType _Chain<number, Dictionary<number>>
}

// shuffle
{
    _.shuffle(simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).shuffle(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).shuffle(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.shuffle(simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).shuffle(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).shuffle(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.shuffle(simpleStringObjectDictionary); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).shuffle(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).shuffle(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.shuffle(simpleString); // $ExpectType string[]

    _(simpleString).shuffle(); // $ExpectType string[]

    _.chain(simpleString).shuffle(); // $ExpectType _Chain<string, string[]>
}

// sample
{
    const n = 2;

    // without n
    _.sample(simpleStringObjectArray); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectArray).sample(); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectArray).sample(); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.sample(simpleStringObjectList); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectList).sample(); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectList).sample(); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.sample(simpleStringObjectDictionary); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectDictionary).sample(); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectDictionary).sample(); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.sample(simpleString); // $ExpectType string | undefined

    _(simpleString).sample(); // $ExpectType string | undefined

    _.chain(simpleString).sample(); // $ExpectType _ChainSingle<string | undefined>

    // with n
    _.sample(simpleStringObjectArray, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).sample(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).sample(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.sample(simpleStringObjectList, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).sample(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).sample(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.sample(simpleStringObjectDictionary, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).sample(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).sample(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.sample(simpleString, n); // $ExpectType string[]

    _(simpleString).sample(n); // $ExpectType string[]

    _.chain(simpleString).sample(n); // $ExpectType _Chain<string, string[]>
}

// toArray
{
    _.toArray(simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).toArray(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).toArray(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.toArray(simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).toArray(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).toArray(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.toArray(simpleStringObjectDictionary); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectDictionary).toArray(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectDictionary).toArray(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.toArray(simpleString); // $ExpectType string[]

    _(simpleString).toArray(); // $ExpectType string[]

    _.chain(simpleString).toArray(); // $ExpectType _Chain<string, string[]>
}

// size
{
    _.size(simpleStringObjectArray); // $ExpectType number

    _(simpleStringObjectArray).size(); // $ExpectType number

    _.chain(simpleStringObjectArray).size(); // $ExpectType _ChainSingle<number>

    _.size(simpleStringObjectList); // $ExpectType number

    _(simpleStringObjectList).size(); // $ExpectType number

    _.chain(simpleStringObjectList).size(); // $ExpectType _ChainSingle<number>

    _.size(simpleStringObjectDictionary); // $ExpectType number

    _(simpleStringObjectDictionary).size(); // $ExpectType number

    _.chain(simpleStringObjectDictionary).size(); // $ExpectType _ChainSingle<number>

    _.size(simpleString); // $ExpectType number

    _(simpleString).size(); // $ExpectType number

    _.chain(simpleString).size(); // $ExpectType _ChainSingle<number>
}

// partition
{
    // function iterator
    _.partition(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]
    _.partition(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]
    _(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _.chain(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator); // $ExpectType _Chain<SimpleStringObject[], [SimpleStringObject[], SimpleStringObject[]]>
    _.chain(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _Chain<SimpleStringObject[], [SimpleStringObject[], SimpleStringObject[]]>

    _.partition(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]
    _.partition(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]
    _(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _.chain(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator); // $ExpectType _Chain<SimpleStringObject[], [SimpleStringObject[], SimpleStringObject[]]>
    _.chain(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _Chain<SimpleStringObject[], [SimpleStringObject[], SimpleStringObject[]]>

    _.partition(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]
    _.partition(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]
    _(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _.chain(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator); // $ExpectType _Chain<SimpleStringObject[], [SimpleStringObject[], SimpleStringObject[]]>
    _.chain(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator, context); // $ExpectType _Chain<SimpleStringObject[], [SimpleStringObject[], SimpleStringObject[]]>

    _.partition(simpleString, stringListComparingIterator); // $ExpectType [string[], string[]]
    _.partition(simpleString, stringListComparingIterator, context); // $ExpectType [string[], string[]]

    _(simpleString).partition(stringListComparingIterator); // $ExpectType [string[], string[]]
    _(simpleString).partition(stringListComparingIterator, context); // $ExpectType [string[], string[]]

    _.chain(simpleString).partition(stringListComparingIterator); // $ExpectType _Chain<string[], [string[], string[]]>
    _.chain(simpleString).partition(stringListComparingIterator, context); // $ExpectType _Chain<string[], [string[], string[]]>

    // partial object iterator
    _.partition(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _(simpleStringObjectArray).partition(simpleStringObjectPartialPropertyMatch); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _.chain(simpleStringObjectArray).partition(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject[], [SimpleStringObject[], SimpleStringObject[]]>

    _.partition(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _(simpleStringObjectList).partition(simpleStringObjectPartialPropertyMatch); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _.chain(simpleStringObjectList).partition(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject[], [SimpleStringObject[], SimpleStringObject[]]>

    _.partition(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _(simpleStringObjectDictionary).partition(simpleStringObjectPartialPropertyMatch); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _.chain(simpleStringObjectDictionary).partition(simpleStringObjectPartialPropertyMatch); // $ExpectType _Chain<SimpleStringObject[], [SimpleStringObject[], SimpleStringObject[]]>

    // property name iterator
    _.partition(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _(simpleStringObjectArray).partition(simpleStringObjectPropertyName); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _.chain(simpleStringObjectArray).partition(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject[], [SimpleStringObject[], SimpleStringObject[]]>

    _.partition(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _(simpleStringObjectList).partition(simpleStringObjectPropertyName); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _.chain(simpleStringObjectList).partition(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject[], [SimpleStringObject[], SimpleStringObject[]]>

    _.partition(simpleStringObjectDictionary, simpleStringObjectPropertyName); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _(simpleStringObjectDictionary).partition(simpleStringObjectPropertyName); // $ExpectType [SimpleStringObject[], SimpleStringObject[]]

    _.chain(simpleStringObjectDictionary).partition(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject[], [SimpleStringObject[], SimpleStringObject[]]>
}

// Arrays

// first, head, take
{
    const n = 2;

    // without n
    _.first(simpleStringObjectArray); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectArray).first(); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectArray).first(); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.head(simpleStringObjectArray); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectArray).head(); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectArray).head(); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.take(simpleStringObjectArray); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectArray).take(); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectArray).take(); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.first(simpleStringObjectList); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectList).first(); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectList).first(); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.head(simpleStringObjectList); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectList).head(); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectList).head(); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.take(simpleStringObjectList); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectList).take(); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectList).take(); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.first(simpleString); // $ExpectType string | undefined

    _(simpleString).first(); // $ExpectType string | undefined

    _.chain(simpleString).first(); // $ExpectType _ChainSingle<string | undefined>

    _.head(simpleString); // $ExpectType string | undefined

    _(simpleString).head(); // $ExpectType string | undefined

    _.chain(simpleString).head(); // $ExpectType _ChainSingle<string | undefined>

    _.take(simpleString); // $ExpectType string | undefined

    _(simpleString).take(); // $ExpectType string | undefined

    _.chain(simpleString).take(); // $ExpectType _ChainSingle<string | undefined>

    // with n
    _.first(simpleStringObjectArray, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).first(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).first(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.head(simpleStringObjectArray, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).head(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).head(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.take(simpleStringObjectArray, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).take(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).take(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.first(simpleStringObjectList, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).first(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).first(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.head(simpleStringObjectList, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).head(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).head(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.take(simpleStringObjectList, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).take(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).take(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.first(simpleString, n); // $ExpectType string[]

    _(simpleString).first(n); // $ExpectType string[]

    _.chain(simpleString).first(n); // $ExpectType _Chain<string, string[]>

    _.head(simpleString, n); // $ExpectType string[]

    _(simpleString).head(n); // $ExpectType string[]

    _.chain(simpleString).head(n); // $ExpectType _Chain<string, string[]>

    _.take(simpleString, n); // $ExpectType string[]

    _(simpleString).take(n); // $ExpectType string[]

    _.chain(simpleString).take(n); // $ExpectType _Chain<string, string[]>
}

// initial
{
    const n = 2;

    // without n
    _.initial(simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).initial(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).initial(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.initial(simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).initial(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).initial(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.initial(simpleString); // $ExpectType string[]

    _(simpleString).initial(); // $ExpectType string[]

    _.chain(simpleString).initial(); // $ExpectType _Chain<string, string[]>

    // with n
    _.initial(simpleStringObjectArray, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).initial(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).initial(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.initial(simpleStringObjectList, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).initial(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).initial(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.initial(simpleString, n); // $ExpectType string[]

    _(simpleString).initial(n); // $ExpectType string[]

    _.chain(simpleString).initial(n); // $ExpectType _Chain<string, string[]>
}

// last
{
    const n = 2;

    // without n
    _.last(simpleStringObjectArray); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectArray).last(); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectArray).last(); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.last(simpleStringObjectList); // $ExpectType SimpleStringObject | undefined

    _(simpleStringObjectList).last(); // $ExpectType SimpleStringObject | undefined

    _.chain(simpleStringObjectList).last(); // $ExpectType _ChainSingle<SimpleStringObject | undefined>

    _.last(simpleString); // $ExpectType string | undefined

    _(simpleString).last(); // $ExpectType string | undefined

    _.chain(simpleString).last(); // $ExpectType _ChainSingle<string | undefined>

    // with n
    _.last(simpleStringObjectArray, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).last(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).last(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.last(simpleStringObjectList, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).last(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).last(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.last(simpleString, n); // $ExpectType string[]

    _(simpleString).last(n); // $ExpectType string[]

    _.chain(simpleString).last(n); // $ExpectType _Chain<string, string[]>
}

// rest, tail, drop
{
    const n = 2;

    // without n
    _.rest(simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).rest(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).rest(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.tail(simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).tail(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).tail(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.drop(simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).drop(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).drop(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.rest(simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).rest(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).rest(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.tail(simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).tail(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).tail(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.drop(simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).drop(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).drop(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.rest(simpleString); // $ExpectType string[]

    _(simpleString).rest(); // $ExpectType string[]

    _.chain(simpleString).rest(); // $ExpectType _Chain<string, string[]>

    _.tail(simpleString); // $ExpectType string[]

    _(simpleString).tail(); // $ExpectType string[]

    _.chain(simpleString).tail(); // $ExpectType _Chain<string, string[]>

    _.drop(simpleString); // $ExpectType string[]

    _(simpleString).drop(); // $ExpectType string[]

    _.chain(simpleString).drop(); // $ExpectType _Chain<string, string[]>

    // with n
    _.rest(simpleStringObjectArray, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).rest(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).rest(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.tail(simpleStringObjectArray, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).tail(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).tail(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.drop(simpleStringObjectArray, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).drop(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).drop(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.rest(simpleStringObjectList, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).rest(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).rest(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.tail(simpleStringObjectList, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).tail(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).tail(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.drop(simpleStringObjectList, n); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).drop(n); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).drop(n); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.rest(simpleString, n); // $ExpectType string[]

    _(simpleString).rest(n); // $ExpectType string[]

    _.chain(simpleString).rest(n); // $ExpectType _Chain<string, string[]>

    _.tail(simpleString, n); // $ExpectType string[]

    _(simpleString).tail(n); // $ExpectType string[]

    _.chain(simpleString).tail(n); // $ExpectType _Chain<string, string[]>

    _.drop(simpleString, n); // $ExpectType string[]

    _(simpleString).drop(n); // $ExpectType string[]

    _.chain(simpleString).drop(n); // $ExpectType _Chain<string, string[]>
}

// compact
{
    _.compact(simpleStringObjectOrUndefinedArray); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectOrUndefinedArray).compact(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectOrUndefinedArray).compact(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.compact(simpleStringObjectOrUndefinedList); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectOrUndefinedList).compact(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectOrUndefinedList).compact(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
}

// flatten
{
    const twoDimensionArray: SimpleStringObject[][] = [simpleStringObjectArray];
    const twoDimensionList: _.List<_.List<SimpleStringObject>> = { 0: simpleStringObjectList, length: 1 };
    const threeDimensionArray: SimpleStringObject[][][] = [[simpleStringObjectArray]];
    const threeDimensionList: _.List<_.List<_.List<SimpleStringObject>>> = { 0: { 0: simpleStringObjectList, length: 1 }, length: 1 };
    const fourDimensionArray: SimpleStringObject[][][][] = [[[simpleStringObjectArray]]];
    const fourDimensionList: _.List<_.List<_.List<_.List<SimpleStringObject>>>> = { 0: { 0: { 0: simpleStringObjectList, length: 1 }, length: 1 }, length: 1 };
    const stringArray: string[][] = [simpleStringArray];
    const stringList: _.List<_.List<string>> = { 0: simpleStringList, length: 1 };
    const typeUnionArray: NonIntersectingObjectPropertiesType[][] = [nonIntersectingObjectPropertiesArray];
    const typeUnionList: _.List<_.List<NonIntersectingObjectPropertiesType>> = { 0: nonIntersectingObjectPropertiesList, length: 1 };

    // one dimension, deep
    _.flatten(simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).flatten(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).flatten(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.flatten(simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).flatten(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).flatten(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    // one dimension, shallow
    _.flatten(simpleStringObjectArray, true); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).flatten(true); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).flatten(true); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.flatten(simpleStringObjectList, true); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).flatten(true); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).flatten(true); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    // two dimensions, deep
    _.flatten(twoDimensionArray); // $ExpectType SimpleStringObject[]

    _(twoDimensionArray).flatten(); // $ExpectType SimpleStringObject[]

    _.chain(twoDimensionArray).flatten(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.flatten(twoDimensionList); // $ExpectType SimpleStringObject[]

    _(twoDimensionList).flatten(); // $ExpectType SimpleStringObject[]

    _.chain(twoDimensionList).flatten(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    // two dimensions, shallow
    _.flatten(twoDimensionArray, true); // $ExpectType SimpleStringObject[]

    _(twoDimensionArray).flatten(true); // $ExpectType SimpleStringObject[]

    _.chain(twoDimensionArray).flatten(true); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.flatten(twoDimensionList, true); // $ExpectType SimpleStringObject[]

    _(twoDimensionList).flatten(true); // $ExpectType SimpleStringObject[]

    _.chain(twoDimensionList).flatten(true); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    // three dimensions, deep
    _.flatten(threeDimensionArray); // $ExpectType SimpleStringObject[]

    _(threeDimensionArray).flatten(); // $ExpectType SimpleStringObject[]

    _.chain(threeDimensionArray).flatten(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.flatten(threeDimensionList); // $ExpectType SimpleStringObject[]

    _(threeDimensionList).flatten(); // $ExpectType SimpleStringObject[]

    _.chain(threeDimensionList).flatten(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    // three dimensions, shallow
    _.flatten(threeDimensionArray, true); // $ExpectType SimpleStringObject[][]

    _(threeDimensionArray).flatten(true); // $ExpectType SimpleStringObject[][]

    _.chain(threeDimensionArray).flatten(true); // $ExpectType _Chain<SimpleStringObject[], SimpleStringObject[][]>

    _.flatten(threeDimensionList, true); // $ExpectType List<SimpleStringObject>[]

    _(threeDimensionList).flatten(true); // $ExpectType List<SimpleStringObject>[]

    _.chain(threeDimensionList).flatten(true); // $ExpectType _Chain<List<SimpleStringObject>, List<SimpleStringObject>[]>

    // four dimensions, deep - this is where recursion gives up and results in any[]
    _.flatten(fourDimensionArray); // $ExpectType any[]

    _(fourDimensionArray).flatten(); // $ExpectType any[]

    _.chain(fourDimensionArray).flatten(); // $ExpectType _Chain<any, any[]>

    _.flatten(fourDimensionList); // $ExpectType any[]

    _(fourDimensionList).flatten(); // $ExpectType any[]

    _.chain(fourDimensionList).flatten(); // $ExpectType _Chain<any, any[]>

    // string lists, deep
    _.flatten(stringArray); // $ExpectType string[]

    _(stringArray).flatten(); // $ExpectType string[]

    _.chain(stringArray).flatten(); // $ExpectType _Chain<string, string[]>

    _.flatten(stringList); // $ExpectType string[]

    _(stringList).flatten(); // $ExpectType string[]

    _.chain(stringList).flatten(); // $ExpectType _Chain<string, string[]>

    // string lists, shallow
    _.flatten(simpleStringList, true); // $ExpectType string[]

    _(simpleStringArray).flatten(true); // $ExpectType string[]

    _.chain(simpleStringArray).flatten(true); // $ExpectType _Chain<string, string[]>

    _.flatten(simpleStringList, true); // $ExpectType string[]

    _(simpleStringList).flatten(true); // $ExpectType string[]

    _.chain(simpleStringList).flatten(true); // $ExpectType _Chain<string, string[]>

    // type unions, deep
    _.flatten(typeUnionArray); // $ExpectType NonIntersectingObjectPropertiesType[]

    _(typeUnionArray).flatten(); // $ExpectType NonIntersectingObjectPropertiesType[]

    _.chain(typeUnionArray).flatten(); // $ExpectType _Chain<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>

    _.flatten(typeUnionList); // $ExpectType NonIntersectingObjectPropertiesType[]

    _(typeUnionList).flatten(); // $ExpectType NonIntersectingObjectPropertiesType[]

    _.chain(typeUnionList).flatten(); // $ExpectType _Chain<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>

    // type unions, shallow
    _.flatten(nonIntersectingObjectPropertiesArray, true); // $ExpectType NonIntersectingObjectPropertiesType[]

    _(nonIntersectingObjectPropertiesArray).flatten(true); // $ExpectType NonIntersectingObjectPropertiesType[]

    _.chain(nonIntersectingObjectPropertiesArray).flatten(true); // $ExpectType _Chain<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>

    _.flatten(nonIntersectingObjectPropertiesList, true); // $ExpectType NonIntersectingObjectPropertiesType[]

    _(nonIntersectingObjectPropertiesList).flatten(true); // $ExpectType NonIntersectingObjectPropertiesType[]

    _.chain(nonIntersectingObjectPropertiesList).flatten(true); // $ExpectType _Chain<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>
}

// without
{
    const simpleStringObject1 = simpleStringObjectArray[0];
    const simpleStringObject2 = simpleStringObjectArray[1];
    const simpleString1 = simpleString[0];
    const simpleString2 = simpleString[1];

    _.without(simpleStringObjectArray, simpleStringObject1, simpleStringObject2); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).without(simpleStringObject1, simpleStringObject2); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).without(simpleStringObject1, simpleStringObject2); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.without(simpleStringObjectList, simpleStringObject1, simpleStringObject2); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).without(simpleStringObject1, simpleStringObject2); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).without(simpleStringObject1, simpleStringObject2); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.without(simpleString, simpleString1, simpleString2); // $ExpectType string[]

    _(simpleString).without(simpleString1, simpleString2); // $ExpectType string[]

    _.chain(simpleString).without(simpleString1, simpleString2); // $ExpectType _Chain<string, string[]>
}

// union
{
    _.union(simpleStringObjectArray, simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).union(simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).union(simpleStringObjectArray); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.union(simpleStringObjectList, simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).union(simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).union(simpleStringObjectList); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.union(simpleString, simpleString); // $ExpectType string[]

    _(simpleString).union(simpleString); // $ExpectType string[]

    _.chain(simpleString).union(simpleString); // $ExpectType _Chain<string, string[]>
}

// intersection
{
    _.intersection(simpleStringObjectArray, simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).intersection(simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).intersection(simpleStringObjectArray); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.intersection(simpleStringObjectList, simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).intersection(simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).intersection(simpleStringObjectList); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.intersection(simpleString, simpleString); // $ExpectType string[]

    _(simpleString).intersection(simpleString); // $ExpectType string[]

    _.chain(simpleString).intersection(simpleString); // $ExpectType _Chain<string, string[]>
}

// difference
{
    _.difference(simpleStringObjectArray, simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).difference(simpleStringObjectArray); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).difference(simpleStringObjectArray); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.difference(simpleStringObjectList, simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).difference(simpleStringObjectList); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).difference(simpleStringObjectList); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.difference(simpleString, simpleString); // $ExpectType string[]

    _(simpleString).difference(simpleString); // $ExpectType string[]

    _.chain(simpleString).difference(simpleString); // $ExpectType _Chain<string, string[]>
}

// uniq, unique
{
    // function iterator
    _.uniq(simpleStringObjectArray); // $ExpectType SimpleStringObject[]
    _.uniq(simpleStringObjectArray, true); // $ExpectType SimpleStringObject[]
    _.uniq(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _.uniq(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).uniq(); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).uniq(true); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).uniq(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).uniq(true); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.unique(simpleStringObjectArray); // $ExpectType SimpleStringObject[]
    _.unique(simpleStringObjectArray, true); // $ExpectType SimpleStringObject[]
    _.unique(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _.unique(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).unique(); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).unique(true); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).unique(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).unique(true); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.uniq(simpleStringObjectList); // $ExpectType SimpleStringObject[]
    _.uniq(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _.uniq(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]
    _.uniq(simpleStringObjectList, true); // $ExpectType SimpleStringObject[]
    _.uniq(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _.uniq(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).uniq(); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).uniq(true); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).uniq(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).uniq(true); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.unique(simpleStringObjectList); // $ExpectType SimpleStringObject[]
    _.unique(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _.unique(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]
    _.unique(simpleStringObjectList, true); // $ExpectType SimpleStringObject[]
    _.unique(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _.unique(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).unique(); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).unique(true); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).unique(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).unique(true); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    // property name iterator
    _.uniq(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]
    _.uniq(simpleStringObjectArray, true, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).uniq(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).uniq(true, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).uniq(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).uniq(true, simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.unique(simpleStringObjectArray, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]
    _.unique(simpleStringObjectArray, true, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectArray).unique(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectArray).unique(true, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectArray).unique(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectArray).unique(true, simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.uniq(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]
    _.uniq(simpleStringObjectList, true, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).uniq(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).uniq(true, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).uniq(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).uniq(true, simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.unique(simpleStringObjectList, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]
    _.unique(simpleStringObjectList, true, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectList).unique(simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]
    _(simpleStringObjectList).unique(true, simpleStringObjectPropertyName); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectList).unique(simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _.chain(simpleStringObjectList).unique(true, simpleStringObjectPropertyName); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
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

    _.chain(array1).zip(array2, array3); // $ExpectType _Chain<any[], any[][]>

    _.zip(list1, list2, list3); // $ExpectType any[][]

    _(list1).zip(list2, list3); // $ExpectType any[][]

    _.chain(list1).zip(list2, list3); // $ExpectType _Chain<any[], any[][]>
}

// unzip
{
    const array: [string, number, boolean][] = [['a', 1, true], ['b', 2, false]];
    const list: _.List<_.List<(string | number | boolean)>> = { 0: { 0: 'a', 1: 1, 2: true, length: 3 }, 1: { 0: 'b', 1: 2, 2: false, length: 3 }, length: 2 };

    _.unzip(array); // $ExpectType any[][]

    _(array).unzip(); // $ExpectType any[][]

    _.chain(array).unzip(); // $ExpectType _Chain<any[], any[][]>

    _.unzip(list); // $ExpectType any[][]

    _(list).unzip(); // $ExpectType any[][]

    _.chain(list).unzip(); // $ExpectType _Chain<any[], any[][]>
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

    _.chain(keyArray).object(valueArray); // $ExpectType _Chain<number, Dictionary<number>>

    _.object(keyList, valueList); // $ExpectType Dictionary<number>

    _(keyList).object(valueList); // $ExpectType Dictionary<number>

    _.chain(keyList).object(valueList); // $ExpectType _Chain<number, Dictionary<number>>

    // key value pair tuples
    _.object(pairArray); // $ExpectType Dictionary<number>

    _(pairArray).object(); // $ExpectType Dictionary<number>

    _.chain(pairArray).object(); // $ExpectType _Chain<number, Dictionary<number>>

    _.object(pairList); // $ExpectType Dictionary<number>

    _(pairList).object(); // $ExpectType Dictionary<number>

    _.chain(pairList).object(); // $ExpectType _Chain<number, Dictionary<number>>
}

// chunk
{
    const length = 2;

    _.chunk(simpleStringObjectArray, length); // $ExpectType SimpleStringObject[][]

    _(simpleStringObjectArray).chunk(length); // $ExpectType SimpleStringObject[][]

    _.chain(simpleStringObjectArray).chunk(length); // $ExpectType _Chain<SimpleStringObject[], SimpleStringObject[][]>

    _.chunk(simpleStringObjectList, length); // $ExpectType SimpleStringObject[][]

    _(simpleStringObjectList).chunk(length); // $ExpectType SimpleStringObject[][]

    _.chain(simpleStringObjectList).chunk(length); // $ExpectType _Chain<SimpleStringObject[], SimpleStringObject[][]>

    _.chunk(simpleString, length); // $ExpectType string[][]

    _(simpleString).chunk(length); // $ExpectType string[][]

    _.chain(simpleString).chunk(length); // $ExpectType _Chain<string[], string[][]>
}

// indexOf
{
    const simpleStringObjectItem = simpleStringObjectArray[0];
    const simpleStringItem = simpleString[0];
    const isSorted = true;

    _.indexOf(simpleStringObjectArray, simpleStringObjectItem); // $ExpectType number
    _.indexOf(simpleStringObjectArray, simpleStringObjectItem, isSorted); // $ExpectType number

    _(simpleStringObjectArray).indexOf(simpleStringObjectItem); // $ExpectType number
    _(simpleStringObjectArray).indexOf(simpleStringObjectItem, isSorted); // $ExpectType number

    _.chain(simpleStringObjectArray).indexOf(simpleStringObjectItem); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectArray).indexOf(simpleStringObjectItem, isSorted); // $ExpectType _ChainSingle<number>

    _.chain(simpleStringObjectArray).indexOf(simpleStringObjectItem); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectArray).indexOf(simpleStringObjectItem, isSorted); // $ExpectType _ChainSingle<number>

    _.indexOf(simpleStringObjectList, simpleStringObjectItem); // $ExpectType number
    _.indexOf(simpleStringObjectList, simpleStringObjectItem, isSorted); // $ExpectType number

    _(simpleStringObjectList).indexOf(simpleStringObjectItem); // $ExpectType number
    _(simpleStringObjectList).indexOf(simpleStringObjectItem, isSorted); // $ExpectType number

    _.chain(simpleStringObjectList).indexOf(simpleStringObjectItem); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectList).indexOf(simpleStringObjectItem, isSorted); // $ExpectType _ChainSingle<number>

    _.chain(simpleStringObjectList).indexOf(simpleStringObjectItem); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectList).indexOf(simpleStringObjectItem, isSorted); // $ExpectType _ChainSingle<number>

    _.indexOf(simpleString, simpleStringItem); // $ExpectType number
    _.indexOf(simpleString, simpleStringItem, isSorted); // $ExpectType number

    _(simpleString).indexOf(simpleStringItem); // $ExpectType number
    _(simpleString).indexOf(simpleStringItem, isSorted); // $ExpectType number

    _.chain(simpleString).indexOf(simpleStringItem); // $ExpectType _ChainSingle<number>
    _.chain(simpleString).indexOf(simpleStringItem, isSorted); // $ExpectType _ChainSingle<number>
}

// lastIndexof
{
    const fromIndex = 1;
    const simpleStringObjectItem = simpleStringObjectArray[0];
    const simpleStringItem = simpleString[0];

    _.lastIndexOf(simpleStringObjectArray, simpleStringObjectItem); // $ExpectType number
    _.lastIndexOf(simpleStringObjectArray, simpleStringObjectItem, fromIndex); // $ExpectType number

    _(simpleStringObjectArray).lastIndexOf(simpleStringObjectItem); // $ExpectType number
    _(simpleStringObjectArray).lastIndexOf(simpleStringObjectItem, fromIndex); // $ExpectType number

    _.chain(simpleStringObjectArray).lastIndexOf(simpleStringObjectItem); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectArray).lastIndexOf(simpleStringObjectItem, fromIndex); // $ExpectType _ChainSingle<number>

    _.chain(simpleStringObjectArray).lastIndexOf(simpleStringObjectItem); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectArray).lastIndexOf(simpleStringObjectItem, fromIndex); // $ExpectType _ChainSingle<number>

    _.lastIndexOf(simpleStringObjectList, simpleStringObjectItem); // $ExpectType number
    _.lastIndexOf(simpleStringObjectList, simpleStringObjectItem, fromIndex); // $ExpectType number

    _(simpleStringObjectList).lastIndexOf(simpleStringObjectItem); // $ExpectType number
    _(simpleStringObjectList).lastIndexOf(simpleStringObjectItem, fromIndex); // $ExpectType number

    _.chain(simpleStringObjectList).lastIndexOf(simpleStringObjectItem); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectList).lastIndexOf(simpleStringObjectItem, fromIndex); // $ExpectType _ChainSingle<number>

    _.chain(simpleStringObjectList).lastIndexOf(simpleStringObjectItem); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectList).lastIndexOf(simpleStringObjectItem, fromIndex); // $ExpectType _ChainSingle<number>

    _.lastIndexOf(simpleString, simpleStringItem); // $ExpectType number
    _.lastIndexOf(simpleString, simpleStringItem, fromIndex); // $ExpectType number

    _(simpleString).lastIndexOf(simpleStringItem); // $ExpectType number
    _(simpleString).lastIndexOf(simpleStringItem, fromIndex); // $ExpectType number

    _.chain(simpleString).lastIndexOf(simpleStringItem); // $ExpectType _ChainSingle<number>
    _.chain(simpleString).lastIndexOf(simpleStringItem, fromIndex); // $ExpectType _ChainSingle<number>
}

// sortedIndex
{
    const simpleStringItem = 'b';
    const simpleStringObjectItem = simpleStringObjectArray[0];

    // no iterator
    _.sortedIndex(simpleStringArray, simpleStringItem); // $ExpectType number

    _(simpleStringArray).sortedIndex(simpleStringItem); // $ExpectType number

    _.chain(simpleStringArray).sortedIndex(simpleStringItem); // $ExpectType _ChainSingle<number>

    _.sortedIndex(simpleStringList, simpleStringItem); // $ExpectType number

    _(simpleStringList).sortedIndex(simpleStringItem); // $ExpectType number

    _.chain(simpleStringList).sortedIndex(simpleStringItem); // $ExpectType _ChainSingle<number>

    _.sortedIndex(simpleString, simpleStringItem); // $ExpectType number

    _(simpleString).sortedIndex(simpleStringItem); // $ExpectType number

    _.chain(simpleString).sortedIndex(simpleStringItem); // $ExpectType _ChainSingle<number>

    // function iterator
    _.sortedIndex(simpleStringObjectArray, simpleStringObjectItem, simpleStringObjectListPropertySelectingIterator); // $ExpectType number
    _.sortedIndex(simpleStringObjectArray, simpleStringObjectItem, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType number

    _(simpleStringObjectArray).sortedIndex(simpleStringObjectItem, simpleStringObjectListPropertySelectingIterator); // $ExpectType number
    _(simpleStringObjectArray).sortedIndex(simpleStringObjectItem, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType number

    _.chain(simpleStringObjectArray).sortedIndex(simpleStringObjectItem, simpleStringObjectListPropertySelectingIterator); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectArray).sortedIndex(simpleStringObjectItem, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _ChainSingle<number>

    _.sortedIndex(simpleStringObjectList, simpleStringObjectItem, simpleStringObjectListPropertySelectingIterator); // $ExpectType number
    _.sortedIndex(simpleStringObjectList, simpleStringObjectItem, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType number

    _(simpleStringObjectList).sortedIndex(simpleStringObjectItem, simpleStringObjectListPropertySelectingIterator); // $ExpectType number
    _(simpleStringObjectList).sortedIndex(simpleStringObjectItem, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType number

    _.chain(simpleStringObjectList).sortedIndex(simpleStringObjectItem, simpleStringObjectListPropertySelectingIterator); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectList).sortedIndex(simpleStringObjectItem, simpleStringObjectListPropertySelectingIterator, context); // $ExpectType _ChainSingle<number>

    // property name iterator
    _.sortedIndex(simpleStringObjectArray, simpleStringObjectItem, simpleStringObjectPropertyName); // $ExpectType number

    _(simpleStringObjectArray).sortedIndex(simpleStringObjectItem, simpleStringObjectPropertyName); // $ExpectType number

    _.chain(simpleStringObjectArray).sortedIndex(simpleStringObjectItem, simpleStringObjectPropertyName); // $ExpectType _ChainSingle<number>

    _.sortedIndex(simpleStringObjectList, simpleStringObjectItem, simpleStringObjectPropertyName); // $ExpectType number

    _(simpleStringObjectList).sortedIndex(simpleStringObjectItem, simpleStringObjectPropertyName); // $ExpectType number

    _.chain(simpleStringObjectList).sortedIndex(simpleStringObjectItem, simpleStringObjectPropertyName); // $ExpectType _ChainSingle<number>
}

// findIndex
{
    _.findIndex(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator); // $ExpectType number
    _.findIndex(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType number

    _(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator); // $ExpectType number
    _(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType number

    _.chain(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<number>

    _.findIndex(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType number

    _(simpleStringObjectArray).findIndex(simpleStringObjectPartialPropertyMatch); // $ExpectType number

    _.chain(simpleStringObjectArray).findIndex(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<number>

    _.findIndex(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator); // $ExpectType number
    _.findIndex(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType number

    _(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator); // $ExpectType number
    _(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType number

    _.chain(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<number>

    _.findIndex(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType number

    _(simpleStringObjectList).findIndex(simpleStringObjectPartialPropertyMatch); // $ExpectType number

    _.chain(simpleStringObjectList).findIndex(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<number>

    _.findIndex(simpleString, stringListComparingIterator); // $ExpectType number
    _.findIndex(simpleString, stringListComparingIterator, context); // $ExpectType number

    _(simpleString).findIndex(stringListComparingIterator); // $ExpectType number
    _(simpleString).findIndex(stringListComparingIterator, context); // $ExpectType number

    _.chain(simpleString).findIndex(stringListComparingIterator); // $ExpectType _ChainSingle<number>
    _.chain(simpleString).findIndex(stringListComparingIterator, context); // $ExpectType _ChainSingle<number>
}

// findLastIndex
{
    _.findLastIndex(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator); // $ExpectType number
    _.findLastIndex(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType number

    _(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator); // $ExpectType number
    _(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType number

    _.chain(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<number>

    _.findLastIndex(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator); // $ExpectType number
    _.findLastIndex(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context); // $ExpectType number

    _(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator); // $ExpectType number
    _(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType number

    _.chain(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator); // $ExpectType _ChainSingle<number>
    _.chain(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator, context); // $ExpectType _ChainSingle<number>

    _.findLastIndex(simpleString, stringListComparingIterator); // $ExpectType number
    _.findLastIndex(simpleString, stringListComparingIterator, context); // $ExpectType number

    _(simpleString).findLastIndex(stringListComparingIterator); // $ExpectType number
    _(simpleString).findLastIndex(stringListComparingIterator, context); // $ExpectType number

    _.chain(simpleString).findLastIndex(stringListComparingIterator); // $ExpectType _ChainSingle<number>
    _.chain(simpleString).findLastIndex(stringListComparingIterator, context); // $ExpectType _ChainSingle<number>

    // partial property iterator
    _.findLastIndex(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch); // $ExpectType number

    _(simpleStringObjectArray).findLastIndex(simpleStringObjectPartialPropertyMatch); // $ExpectType number

    _.chain(simpleStringObjectArray).findLastIndex(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<number>

    _.findLastIndex(simpleStringObjectList, simpleStringObjectPartialPropertyMatch); // $ExpectType number

    _(simpleStringObjectList).findLastIndex(simpleStringObjectPartialPropertyMatch); // $ExpectType number

    _.chain(simpleStringObjectList).findLastIndex(simpleStringObjectPartialPropertyMatch); // $ExpectType _ChainSingle<number>
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

    _.chain(stop).range(); // $ExpectType _Chain<number, number[]>
    _.chain(start).range(stop); // $ExpectType _Chain<number, number[]>
    _.chain(start).range(stop, step); // $ExpectType _Chain<number, number[]>
}

// OOP Style

// underscore
{
    _(simpleStringObjectArray); // $ExpectType Underscore<SimpleStringObject, SimpleStringObject[]>

    _(simpleStringObjectListWithExtraProperties) // $ExpectType Underscore<SimpleStringObject, SimpleStringObjectListWithExtraProperties>
    _(simpleStringObjectList); // $ExpectType Underscore<SimpleStringObject, List<SimpleStringObject>>

    _(stronglyKeyedSimpleStringObjectDictionary) // $ExpectType Underscore<SimpleStringObject, StronglyKeyedSimpleStringObjectDictionary>
    _(simpleStringObjectDictionary); // $ExpectType Underscore<SimpleStringObject, Dictionary<SimpleStringObject>>

    _(simpleString); // $ExpectType Underscore<string, string>
    _(simpleNumber); // $ExpectType Underscore<never, number>
}

// value
// verify that the object type given to underscore is returned by value
{
    _(simpleStringObjectArray).value(); // $ExpectType SimpleStringObject[]

    _(simpleStringObjectListWithExtraProperties).value(); // $ExpectType SimpleStringObjectListWithExtraProperties
    _(simpleStringObjectList).value(); // $ExpectType List<SimpleStringObject>

    _(stronglyKeyedSimpleStringObjectDictionary).value(); // $ExpectType StronglyKeyedSimpleStringObjectDictionary
    _(simpleStringObjectDictionary).value(); // $ExpectType Dictionary<SimpleStringObject>

    _(simpleString).value(); // $ExpectType string
    _(simpleNumber).value(); // $ExpectType number
}

// Chaining

// chain
// verify that the right chain item and value types are yielded by calls to chain
// these tests also check to make sure that _.chain() and _().chain() yield the same types
{
    _.chain(simpleStringObjectArray); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
    _(simpleStringObjectArray).chain(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>

    _.chain(simpleStringObjectListWithExtraProperties); // $ExpectType _Chain<SimpleStringObject, SimpleStringObjectListWithExtraProperties>
    _(simpleStringObjectListWithExtraProperties).chain(); // $ExpectType _Chain<SimpleStringObject, SimpleStringObjectListWithExtraProperties>

    _.chain(simpleStringObjectList); // $ExpectType _Chain<SimpleStringObject, List<SimpleStringObject>>
    _(simpleStringObjectList).chain(); // $ExpectType _Chain<SimpleStringObject, List<SimpleStringObject>>

    _.chain(stronglyKeyedSimpleStringObjectDictionary); // $ExpectType _Chain<SimpleStringObject, StronglyKeyedSimpleStringObjectDictionary>
    _(stronglyKeyedSimpleStringObjectDictionary).chain(); // $ExpectType _Chain<SimpleStringObject, StronglyKeyedSimpleStringObjectDictionary>

    _.chain(simpleStringObjectDictionary); // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
    _(simpleStringObjectDictionary).chain(); // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>

    _.chain(simpleString); // $ExpectType _Chain<string, string>
    _(simpleString).chain(); // $ExpectType _Chain<string, string>

    _.chain(simpleNumber); // $ExpectType _Chain<never, number>
    _(simpleNumber).chain(); // $ExpectType _Chain<never, number>
}

// value
// verify that the object type given to chain is returned by value
{
    _.chain(simpleStringObjectArray).value(); // $ExpectType SimpleStringObject[]

    _.chain(simpleStringObjectListWithExtraProperties).value(); // $ExpectType SimpleStringObjectListWithExtraProperties
    _.chain(simpleStringObjectList).value(); // $ExpectType List<SimpleStringObject>

    _.chain(stronglyKeyedSimpleStringObjectDictionary).value(); // $ExpectType StronglyKeyedSimpleStringObjectDictionary
    _.chain(simpleStringObjectDictionary).value(); // $ExpectType Dictionary<SimpleStringObject>

    _.chain(simpleString).value(); // $ExpectType string
    _.chain(simpleNumber).value(); // $ExpectType number
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

    let numberObjects = [{simpleStringObjectPropertyName: 'odd', value: 1}, {simpleStringObjectPropertyName: 'even', value: 2}, {simpleStringObjectPropertyName: 'even', value: 0}];
    let evenAndOddGroupedNumbers = _.chain(numberObjects)
        .groupBy('simpleStringObjectPropertyName')
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
