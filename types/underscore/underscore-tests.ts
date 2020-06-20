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

const simpleStringObjectArray: SimpleStringObject[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'b' }, { a: 'c', b: 'a' }];
const simpleStringObjectList: _.List<SimpleStringObject> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: { a: 'c', b: 'a' }, length: 3 };
const simpleStringObjectListPropertyModifyingIterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a += 'b';
const simpleStringObjectListPropertySelectingIterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a;
const simpleStringObjectListPropertyComparingIterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a === 'b';
const simpleStringObjectListPropertyMemoIterator = (prev: string, value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => prev + value.a;

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

type SimpleStringObjectOrUndefined = SimpleStringObject | undefined;

const simpleStringObjectOrUndefinedArray: SimpleStringObjectOrUndefined[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'b' }, undefined];
const simpleStringObjectOrUndefinedList: _.List<SimpleStringObjectOrUndefined> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: undefined, length: 3 };
const simpleStringObjectOrUndefinedDictionary: _.Dictionary<SimpleStringObjectOrUndefined> = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: undefined };

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
    {

        let result: SimpleStringObject[];

        result = _.each(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator);
        result = _.each(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator, context);

        result = _(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator);
        result = _(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator, context);

        result = _.chain(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator).value();
        result = _.chain(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator, context).value();

        result = _.forEach(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator);
        result = _.forEach(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator, context);

        result = _(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator);
        result = _(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator, context);

        result = _.chain(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator).value();
        result = _.chain(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator, context).value();
    }

    {
        let result: _.List<SimpleStringObject>;

        result = _.each(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator);
        result = _.each(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator, context);

        result = _(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator);
        result = _(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator, context);

        result = _.chain(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator).value();
        result = _.chain(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator, context).value();

        result = _.forEach(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator);
        result = _.forEach(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator, context);

        result = _(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator);
        result = _(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator, context);

        result = _.chain(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator).value();
        result = _.chain(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator, context).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.each(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator);
        result = _.each(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator, context);

        result = _(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator);
        result = _(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator, context);

        result = _.chain(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator).value();
        result = _.chain(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator, context).value();

        result = _.forEach(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator);
        result = _.forEach(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator, context);

        result = _(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator);
        result = _(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator, context);

        result = _.chain(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator).value();
        result = _.chain(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator, context).value();
    }
}

// map, collect
{
    // function iterator
    {
        let result: string[];

        result = _.map(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.map(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.collect(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.collect(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: string[];

        result = _.map(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.map(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.collect(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.collect(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: string[];

        result = _.map(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.map(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator, context).value();

        result = _.collect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.collect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
    }

    {
        let result: string[];

        result = _.map(simpleString, stringListModifyingIterator);
        result = _.map(simpleString, stringListModifyingIterator, context);

        result = _(simpleString).map(stringListModifyingIterator);
        result = _(simpleString).map(stringListModifyingIterator, context);

        result = _.chain(simpleString).map(stringListModifyingIterator).value();
        result = _.chain(simpleString).map(stringListModifyingIterator, context).value();

        result = _.collect(simpleString, stringListModifyingIterator);
        result = _.collect(simpleString, stringListModifyingIterator, context);

        result = _(simpleString).collect(stringListModifyingIterator);
        result = _(simpleString).collect(stringListModifyingIterator, context);

        result = _.chain(simpleString).collect(stringListModifyingIterator).value();
        result = _.chain(simpleString).collect(stringListModifyingIterator, context).value();
    }

    // partial object iterator with a non-nullable single type
    {
        let result: boolean[];

        result = _.map(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        result = _.map(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        result = _.map(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    // partial object iterator with a non-nullable intersecting type union
    {
        let result: boolean[];

        result = _.map(intersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch);

        result = _(intersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(intersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(intersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch);

        result = _(intersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(intersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        result = _.map(intersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch);

        result = _(intersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(intersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(intersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch);

        result = _(intersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(intersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        result = _.map(intersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(intersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(intersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(intersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    // partial object iterator with a nullable type union
    {
        let result: boolean[];

        result = _.map(simpleStringObjectOrUndefinedArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(simpleStringObjectOrUndefinedArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        result = _.map(simpleStringObjectOrUndefinedList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectOrUndefinedList).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectOrUndefinedList).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(simpleStringObjectOrUndefinedList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        result = _.map(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    // partial object iterator with a non-nullable non-intersecting type union
    {
        let result: boolean[];

        result = _.map(nonIntersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch);

        result = _(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(nonIntersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch);

        result = _(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        result = _.map(nonIntersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch);

        result = _(nonIntersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(nonIntersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(nonIntersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch);

        result = _(nonIntersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(nonIntersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        result = _.map(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    // partial object iterator of type any
    {
        let result: boolean[];

        result = _.map(simpleStringObjectArray as any, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray as any).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray as any).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect(simpleStringObjectArray as any, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray as any).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray as any).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator with a non-nullable single type
    {
        let result: string[];

        result = _.map(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).map(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).map(simpleStringObjectPropertyName).value();

        result = _.collect(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).collect(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: string[];

        result = _.map(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).map(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).map(simpleStringObjectPropertyName).value();

        result = _.collect(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).collect(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: string[];

        result = _.map(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).map(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).map(simpleStringObjectPropertyName).value();

        result = _.collect(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).collect(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).collect(simpleStringObjectPropertyName).value();
    }

    // property name iterator with a non-nullable intersecting type union
    {
        let result: (string | boolean)[];

        result = _.map(intersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        result = _(intersectingObjectPropertiesArray).map(simpleStringObjectPropertyName);

        result = _.chain(intersectingObjectPropertiesArray).map(simpleStringObjectPropertyName).value();

        result = _.collect(intersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        result = _(intersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName);

        result = _.chain(intersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | boolean)[];

        result = _.map(intersectingObjectPropertiesList, simpleStringObjectPropertyName);

        result = _(intersectingObjectPropertiesList).map(simpleStringObjectPropertyName);

        result = _.chain(intersectingObjectPropertiesList).map(simpleStringObjectPropertyName).value();

        result = _.collect(intersectingObjectPropertiesList, simpleStringObjectPropertyName);

        result = _(intersectingObjectPropertiesList).collect(simpleStringObjectPropertyName);

        result = _.chain(intersectingObjectPropertiesList).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | boolean)[];

        result = _.map(intersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);

        result = _(intersectingObjectPropertiesDictionary).map(simpleStringObjectPropertyName);

        result = _.chain(intersectingObjectPropertiesDictionary).map(simpleStringObjectPropertyName).value();

        result = _.collect(intersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);

        result = _(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPropertyName);

        result = _.chain(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPropertyName).value();
    }

    // property name iterator with a nullable type union
    {
        let result: (string | undefined)[];

        result = _.map(simpleStringObjectOrUndefinedArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPropertyName).value();

        result = _.collect(simpleStringObjectOrUndefinedArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        result = _.map(simpleStringObjectOrUndefinedList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectOrUndefinedList).map(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectOrUndefinedList).map(simpleStringObjectPropertyName).value();

        result = _.collect(simpleStringObjectOrUndefinedList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        result = _.map(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPropertyName).value();

        result = _.collect(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPropertyName).value();
    }

    // property name iterator with a non-nullable non-intersecting type union
    {
        let result: (string | undefined)[];

        result = _.map(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        result = _(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPropertyName);

        result = _.chain(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPropertyName).value();

        result = _.collect(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        result = _(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName);

        result = _.chain(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        result = _.map(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        result = _(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPropertyName);

        result = _.chain(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPropertyName).value();

        result = _.collect(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        result = _(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName);

        result = _.chain(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        result = _.map(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);

        result = _(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPropertyName);

        result = _.chain(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPropertyName).value();

        result = _.collect(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);

        result = _(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPropertyName);

        result = _.chain(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPropertyName).value();
    }

    // property name iterator with type any
    // specifying any as T causes the result to be any[], which isn't ideal, but on the other hand getting that result involves choosing
    // to specify any in the first place
    {
        let result: any[];

        result = _.map(simpleStringObjectArray as any, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray as any).map(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray as any).map(simpleStringObjectPropertyName).value();

        result = _.collect(simpleStringObjectArray as any, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray as any).collect(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray as any).collect(simpleStringObjectPropertyName).value();
    }
}

// reduce, foldl, inject
{
    {
        const memo = '';
        let result: string;

        result = _.reduce(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.reduce(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectArray).reduce(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectArray).reduce(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectArray).reduce(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectArray).reduce(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.foldl(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.foldl(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectArray).foldl(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectArray).foldl(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectArray).foldl(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectArray).foldl(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.inject(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.inject(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectArray).inject(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectArray).inject(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectArray).inject(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectArray).inject(simpleStringObjectListPropertyMemoIterator, memo, context).value();
    }

    {
        const memo = '';
        let result: string;

        result = _.reduce(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.reduce(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectList).reduce(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectList).reduce(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectList).reduce(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectList).reduce(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.foldl(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.foldl(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectList).foldl(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectList).foldl(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectList).foldl(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectList).foldl(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.inject(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.inject(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectList).inject(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectList).inject(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectList).inject(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectList).inject(simpleStringObjectListPropertyMemoIterator, memo, context).value();
    }

    {
        const memo = '';
        let result: string;

        result = _.reduce(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.reduce(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectDictionary).reduce(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _(simpleStringObjectDictionary).reduce(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectDictionary).reduce(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectDictionary).reduce(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();

        result = _.foldl(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.foldl(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectDictionary).foldl(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _(simpleStringObjectDictionary).foldl(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectDictionary).foldl(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectDictionary).foldl(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();

        result = _.inject(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.inject(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();
    }

    {
        const memo: _.Dictionary<number> = {};
        let result: _.Dictionary<number>;

        result = _.reduce(simpleString, stringListMemoIterator, memo);
        result = _.reduce(simpleString, stringListMemoIterator, memo, context);

        result = _(simpleString).reduce(stringListMemoIterator, memo);
        result = _(simpleString).reduce(stringListMemoIterator, memo, context);

        result = _.chain(simpleString).reduce(stringListMemoIterator, memo).value();
        result = _.chain(simpleString).reduce(stringListMemoIterator, memo, context).value();

        result = _.foldl(simpleString, stringListMemoIterator, memo);
        result = _.foldl(simpleString, stringListMemoIterator, memo, context);

        result = _(simpleString).foldl(stringListMemoIterator, memo);
        result = _(simpleString).foldl(stringListMemoIterator, memo, context);

        result = _.chain(simpleString).foldl(stringListMemoIterator, memo).value();
        result = _.chain(simpleString).foldl(stringListMemoIterator, memo, context).value();

        result = _.inject(simpleString, stringListMemoIterator, memo);
        result = _.inject(simpleString, stringListMemoIterator, memo, context);

        result = _(simpleString).inject(stringListMemoIterator, memo);
        result = _(simpleString).inject(stringListMemoIterator, memo, context);

        result = _.chain(simpleString).inject(stringListMemoIterator, memo).value();
        result = _.chain(simpleString).inject(stringListMemoIterator, memo, context).value();
    }
}

// reduceRight, foldr
{
    {
        const memo = '';
        let result: string;

        result = _.reduceRight(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.reduceRight(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectArray).reduceRight(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectArray).reduceRight(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectArray).reduceRight(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectArray).reduceRight(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.foldr(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.foldr(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, memo, context).value();
    }

    {
        const memo = '';
        let result: string;

        result = _.reduceRight(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.reduceRight(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectList).reduceRight(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectList).reduceRight(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectList).reduceRight(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectList).reduceRight(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.foldr(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.foldr(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, memo, context).value();
    }

    {
        const memo = '';
        let result: string;

        result = _.reduceRight(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.reduceRight(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectDictionary).reduceRight(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _(simpleStringObjectDictionary).reduceRight(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectDictionary).reduceRight(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectDictionary).reduceRight(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();

        result = _.foldr(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.foldr(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _.chain(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();
    }

    {
        const memo: _.Dictionary<number> = {};
        let result: _.Dictionary<number>;

        result = _.reduceRight(simpleString, stringListMemoIterator, memo);
        result = _.reduceRight(simpleString, stringListMemoIterator, memo, context);

        result = _(simpleString).reduceRight(stringListMemoIterator, memo);
        result = _(simpleString).reduceRight(stringListMemoIterator, memo, context);

        result = _.chain(simpleString).reduceRight(stringListMemoIterator, memo).value();
        result = _.chain(simpleString).reduceRight(stringListMemoIterator, memo, context).value();

        result = _.foldr(simpleString, stringListMemoIterator, memo);
        result = _.foldr(simpleString, stringListMemoIterator, memo, context);

        result = _(simpleString).foldr(stringListMemoIterator, memo);
        result = _(simpleString).foldr(stringListMemoIterator, memo, context);

        result = _.chain(simpleString).foldr(stringListMemoIterator, memo).value();
        result = _.chain(simpleString).foldr(stringListMemoIterator, memo, context).value();
    }
}

// find, detect
{
    // function iterator
    {
        let result: {a: string} | undefined;

        result = _.find(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.find(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.detect(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.detect(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: SimpleStringObjectOrUndefined;

        result = _.find(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.find(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.detect(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.detect(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: SimpleStringObjectOrUndefined;

        result = _.find(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.find(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.detect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.detect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
    }

    {
        let result: string | undefined;

        result = _.find(simpleString, stringListComparingIterator);
        result = _.find(simpleString, stringListComparingIterator, context);

        result = _(simpleString).find(stringListComparingIterator);
        result = _(simpleString).find(stringListComparingIterator, context);

        result = _.chain(simpleString).find(stringListComparingIterator).value();
        result = _.chain(simpleString).find(stringListComparingIterator, context).value();

        result = _.detect(simpleString, stringListComparingIterator);
        result = _.detect(simpleString, stringListComparingIterator, context);

        result = _(simpleString).detect(stringListComparingIterator);
        result = _(simpleString).detect(stringListComparingIterator, context);

        result = _.chain(simpleString).detect(stringListComparingIterator).value();
        result = _.chain(simpleString).detect(stringListComparingIterator, context).value();
    }

    // partial object iterator
    {
        let result: SimpleStringObjectOrUndefined;

        result = _.find(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).find(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).find(simpleStringObjectPartialPropertyMatch).value();

        result = _.detect(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).detect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).detect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObjectOrUndefined;

        result = _.find(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).find(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).find(simpleStringObjectPartialPropertyMatch).value();

        result = _.detect(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).detect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).detect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObjectOrUndefined;

        result = _.find(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).find(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).find(simpleStringObjectPartialPropertyMatch).value();

        result = _.detect(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).detect(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).detect(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator
    {
        let result: SimpleStringObjectOrUndefined;

        result = _.find(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).find(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).find(simpleStringObjectPropertyName).value();

        result = _.detect(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).detect(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).detect(simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleStringObjectOrUndefined;

        result = _.find(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).find(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).find(simpleStringObjectPropertyName).value();

        result = _.detect(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).detect(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).detect(simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleStringObjectOrUndefined;

        result = _.find(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).find(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).find(simpleStringObjectPropertyName).value();

        result = _.detect(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).detect(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).detect(simpleStringObjectPropertyName).value();
    }
}

// filter, select
{
    // function iterator
    {
        let result: SimpleStringObject[];

        result = _.filter(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.filter(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.select(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.select(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.filter(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.filter(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.select(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.select(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.filter(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.filter(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.select(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.select(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
    }

    {
        let result: string[];

        result = _.filter(simpleString, stringListComparingIterator);
        result = _.filter(simpleString, stringListComparingIterator, context);

        result = _(simpleString).filter(stringListComparingIterator);
        result = _(simpleString).filter(stringListComparingIterator, context);

        result = _.chain(simpleString).filter(stringListComparingIterator).value();
        result = _.chain(simpleString).filter(stringListComparingIterator, context).value();

        result = _.select(simpleString, stringListComparingIterator);
        result = _.select(simpleString, stringListComparingIterator, context);

        result = _(simpleString).select(stringListComparingIterator);
        result = _(simpleString).select(stringListComparingIterator, context);

        result = _.chain(simpleString).select(stringListComparingIterator).value();
        result = _.chain(simpleString).select(stringListComparingIterator, context).value();
    }

    // partial object iterator
    {
        let result: SimpleStringObject[];

        result = _.filter(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).filter(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).filter(simpleStringObjectPartialPropertyMatch).value();

        result = _.select(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).select(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).select(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.filter(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).filter(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).filter(simpleStringObjectPartialPropertyMatch).value();

        result = _.select(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).select(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).select(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.filter(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).filter(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).filter(simpleStringObjectPartialPropertyMatch).value();

        result = _.select(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).select(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).select(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator
    {
        let result: SimpleStringObject[];

        result = _.filter(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).filter(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).filter(simpleStringObjectPropertyName).value();

        result = _.select(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).select(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).select(simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.filter(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).filter(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).filter(simpleStringObjectPropertyName).value();

        result = _.select(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).select(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).select(simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.filter(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).filter(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).filter(simpleStringObjectPropertyName).value();

        result = _.select(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).select(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).select(simpleStringObjectPropertyName).value();
    }
}

// where
{
    {
        let result: SimpleStringObject[];

        result = _.where(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).where(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).where(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.where(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).where(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).where(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.where(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).where(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).where(simpleStringObjectPartialPropertyMatch).value();
    }
}

// findWhere
{
    {
        let result: SimpleStringObjectOrUndefined;

        result = _.findWhere(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).findWhere(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).findWhere(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObjectOrUndefined;

        result = _.findWhere(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).findWhere(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).findWhere(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObjectOrUndefined;

        result = _.findWhere(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).findWhere(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).findWhere(simpleStringObjectPartialPropertyMatch).value();
    }
}

// reject
{
    // function iterator
    {
        let result: SimpleStringObject[];

        result = _.reject(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.reject(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.reject(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.reject(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.reject(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.reject(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
    }

    {
        let result: string[];

        result = _.reject(simpleString, stringListComparingIterator);
        result = _.reject(simpleString, stringListComparingIterator, context);

        result = _(simpleString).reject(stringListComparingIterator);
        result = _(simpleString).reject(stringListComparingIterator, context);

        result = _.chain(simpleString).reject(stringListComparingIterator).value();
        result = _.chain(simpleString).reject(stringListComparingIterator, context).value();
    }

    // partial object iterator
    {
        let result: SimpleStringObject[];

        result = _.reject(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).reject(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).reject(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.reject(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).reject(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).reject(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.reject(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).reject(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).reject(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator
    {
        let result: SimpleStringObject[];

        result = _.reject(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).reject(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).reject(simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.reject(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).reject(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).reject(simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.reject(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).reject(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).reject(simpleStringObjectPropertyName).value();
    }
}

// every, all
{
    // function iterator
    {
        let result: boolean;

        result = _.every(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.every(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.all(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.all(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: boolean;

        result = _.every(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.every(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.all(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.all(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: boolean;

        result = _.every(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.every(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.all(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.all(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
    }

    {
        let result: boolean;

        result = _.every(simpleString, stringListComparingIterator);
        result = _.every(simpleString, stringListComparingIterator, context);

        result = _(simpleString).every(stringListComparingIterator);
        result = _(simpleString).every(stringListComparingIterator, context);

        result = _.chain(simpleString).every(stringListComparingIterator).value();
        result = _.chain(simpleString).every(stringListComparingIterator, context).value();

        result = _.all(simpleString, stringListComparingIterator);
        result = _.all(simpleString, stringListComparingIterator, context);

        result = _(simpleString).all(stringListComparingIterator);
        result = _(simpleString).all(stringListComparingIterator, context);

        result = _.chain(simpleString).all(stringListComparingIterator).value();
        result = _.chain(simpleString).all(stringListComparingIterator, context).value();
    }

    // partial object iterator
    {
        let result: boolean;

        result = _.every(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).every(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).every(simpleStringObjectPartialPropertyMatch).value();

        result = _.all(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).all(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).all(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean;

        result = _.every(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).every(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).every(simpleStringObjectPartialPropertyMatch).value();

        result = _.all(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).all(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).all(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean;

        result = _.every(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).every(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).every(simpleStringObjectPartialPropertyMatch).value();

        result = _.all(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).all(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).all(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator
    {
        let result: boolean;

        result = _.every(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).every(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).every(simpleStringObjectPropertyName).value();

        result = _.all(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).all(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).all(simpleStringObjectPropertyName).value();
    }

    {
        let result: boolean;

        result = _.every(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).every(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).every(simpleStringObjectPropertyName).value();

        result = _.all(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).all(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).all(simpleStringObjectPropertyName).value();
    }

    {
        let result: boolean;

        result = _.every(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).every(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).every(simpleStringObjectPropertyName).value();

        result = _.all(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).all(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).all(simpleStringObjectPropertyName).value();
    }
}

// some, any
{
    // function iterator
    {
        let result: boolean;

        result = _.some(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.some(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.any(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.any(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: boolean;

        result = _.some(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.some(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.any(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.any(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: boolean;

        result = _.some(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.some(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.any(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.any(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
    }

    {
        let result: boolean;

        result = _.some(simpleString, stringListComparingIterator);
        result = _.some(simpleString, stringListComparingIterator, context);

        result = _(simpleString).some(stringListComparingIterator);
        result = _(simpleString).some(stringListComparingIterator, context);

        result = _.chain(simpleString).some(stringListComparingIterator).value();
        result = _.chain(simpleString).some(stringListComparingIterator, context).value();

        result = _.any(simpleString, stringListComparingIterator);
        result = _.any(simpleString, stringListComparingIterator, context);

        result = _(simpleString).any(stringListComparingIterator);
        result = _(simpleString).any(stringListComparingIterator, context);

        result = _.chain(simpleString).any(stringListComparingIterator).value();
        result = _.chain(simpleString).any(stringListComparingIterator, context).value();
    }

    // partial object iterator
    {
        let result: boolean;

        result = _.some(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).some(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).some(simpleStringObjectPartialPropertyMatch).value();

        result = _.any(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).any(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).any(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean;

        result = _.some(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).some(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).some(simpleStringObjectPartialPropertyMatch).value();

        result = _.any(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).any(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).any(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean;

        result = _.some(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).some(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).some(simpleStringObjectPartialPropertyMatch).value();

        result = _.any(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).any(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).any(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator
    {
        let result: boolean;

        result = _.some(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).some(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).some(simpleStringObjectPropertyName).value();

        result = _.any(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).any(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).any(simpleStringObjectPropertyName).value();
    }

    {
        let result: boolean;

        result = _.some(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).some(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).some(simpleStringObjectPropertyName).value();

        result = _.any(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).any(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).any(simpleStringObjectPropertyName).value();
    }

    {
        let result: boolean;

        result = _.some(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).some(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).some(simpleStringObjectPropertyName).value();

        result = _.any(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).any(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).any(simpleStringObjectPropertyName).value();
    }
}

// contains, include, includes
{
    const fromIndex = 1;

    {
        const value = simpleStringObjectArray[0];
        let result: boolean;

        result = _.contains(simpleStringObjectArray, value);
        result = _.contains(simpleStringObjectArray, value, fromIndex);

        result = _(simpleStringObjectArray).contains(value);
        result = _(simpleStringObjectArray).contains(value, fromIndex);

        result = _.chain(simpleStringObjectArray).contains(value).value();
        result = _.chain(simpleStringObjectArray).contains(value, fromIndex).value();

        result = _.include(simpleStringObjectArray, value);
        result = _.include(simpleStringObjectArray, value, fromIndex);

        result = _(simpleStringObjectArray).include(value);
        result = _(simpleStringObjectArray).include(value, fromIndex);

        result = _.chain(simpleStringObjectArray).include(value).value();
        result = _.chain(simpleStringObjectArray).include(value, fromIndex).value();

        result = _.includes(simpleStringObjectArray, value);
        result = _.includes(simpleStringObjectArray, value, fromIndex);

        result = _(simpleStringObjectArray).includes(value);
        result = _(simpleStringObjectArray).includes(value, fromIndex);

        result = _.chain(simpleStringObjectArray).includes(value).value();
        result = _.chain(simpleStringObjectArray).includes(value, fromIndex).value();
    }

    {
        const value = simpleStringObjectList[0];
        let result: boolean;

        result = _.contains(simpleStringObjectList, value);
        result = _.contains(simpleStringObjectList, value, fromIndex);

        result = _(simpleStringObjectList).contains(value);
        result = _(simpleStringObjectList).contains(value, fromIndex);

        result = _.chain(simpleStringObjectList).contains(value).value();
        result = _.chain(simpleStringObjectList).contains(value, fromIndex).value();

        result = _.include(simpleStringObjectList, value);
        result = _.include(simpleStringObjectList, value, fromIndex);

        result = _(simpleStringObjectList).include(value);
        result = _(simpleStringObjectList).include(value, fromIndex);

        result = _.chain(simpleStringObjectList).include(value).value();
        result = _.chain(simpleStringObjectList).include(value, fromIndex).value();

        result = _.includes(simpleStringObjectList, value);
        result = _.includes(simpleStringObjectList, value, fromIndex);

        result = _(simpleStringObjectList).includes(value);
        result = _(simpleStringObjectList).includes(value, fromIndex);

        result = _.chain(simpleStringObjectList).includes(value).value();
        result = _.chain(simpleStringObjectList).includes(value, fromIndex).value();
    }

    {
        const value = simpleStringObjectDictionary.a;
        let result: boolean;

        result = _.contains(simpleStringObjectDictionary, value);

        result = _(simpleStringObjectDictionary).contains(value);

        result = _.chain(simpleStringObjectDictionary).contains(value).value();

        result = _.include(simpleStringObjectDictionary, value);

        result = _(simpleStringObjectDictionary).include(value);

        result = _.chain(simpleStringObjectDictionary).include(value).value();

        result = _.includes(simpleStringObjectDictionary, value);

        result = _(simpleStringObjectDictionary).includes(value);

        result = _.chain(simpleStringObjectDictionary).includes(value).value();
    }

    {
        const value = simpleString[0];
        let result: boolean;

        result = _.contains(simpleString, value);
        result = _.contains(simpleString, value, fromIndex);

        result = _(simpleString).contains(value);
        result = _(simpleString).contains(value, fromIndex);

        result = _.chain(simpleString).contains(value).value();
        result = _.chain(simpleString).contains(value, fromIndex).value();

        result = _.include(simpleString, value);
        result = _.include(simpleString, value, fromIndex);

        result = _(simpleString).include(value);
        result = _(simpleString).include(value, fromIndex);

        result = _.chain(simpleString).include(value).value();
        result = _.chain(simpleString).include(value, fromIndex).value();

        result = _.includes(simpleString, value);
        result = _.includes(simpleString, value, fromIndex);

        result = _(simpleString).includes(value);
        result = _(simpleString).includes(value, fromIndex);

        result = _.chain(simpleString).includes(value).value();
        result = _.chain(simpleString).includes(value, fromIndex).value();
    }
}

// invoke
// once TS 3.6 is reached as a minimum version, as a breaking change, consider updating invoke to be the following:
// type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
{

    // without parameters
    {
        let result: any[];

        result = _.invoke(simpleNoParameterFunctionObjectArray, simpleStringObjectPropertyName);

        result = _(simpleNoParameterFunctionObjectArray).invoke(simpleStringObjectPropertyName);

        result = _.chain(simpleNoParameterFunctionObjectArray).invoke(simpleStringObjectPropertyName).value();
    }

    {
        let result: any[];

        result = _.invoke(simpleNoParameterFunctionObjectList, simpleStringObjectPropertyName);

        result = _(simpleNoParameterFunctionObjectList).invoke(simpleStringObjectPropertyName);

        result = _.chain(simpleNoParameterFunctionObjectList).invoke(simpleStringObjectPropertyName).value();
    }

    {
        let result: any[];

        result = _.invoke(simpleNoParameterFunctionObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleNoParameterFunctionObjectDictionary).invoke(simpleStringObjectPropertyName);

        result = _.chain(simpleNoParameterFunctionObjectDictionary).invoke(simpleStringObjectPropertyName).value();
    }

    {
        let result: any[];

        result = _.invoke(simpleString, simpleStringObjectPropertyName);

        result = _(simpleString).invoke(simpleStringObjectPropertyName);

        result = _.chain(simpleString).invoke(simpleStringObjectPropertyName).value();
    }

    // with parameters
    {
        const arg = -1;
        let result: any[];

        result = _.invoke(simpleOneParameterFunctionObjectArray, simpleStringObjectPropertyName, arg);

        result = _(simpleOneParameterFunctionObjectArray).invoke(simpleStringObjectPropertyName, arg);

        result = _.chain(simpleOneParameterFunctionObjectArray).invoke(simpleStringObjectPropertyName, arg).value();
    }

    {
        const arg = -1;
        let result: any[];

        result = _.invoke(simpleOneParameterFunctionObjectList, simpleStringObjectPropertyName, arg);

        result = _(simpleOneParameterFunctionObjectList).invoke(simpleStringObjectPropertyName, arg);

        result = _.chain(simpleOneParameterFunctionObjectList).invoke(simpleStringObjectPropertyName, arg).value();
    }

    {
        const arg = -1;
        let result: any[];

        result = _.invoke(simpleOneParameterFunctionObjectDictionary, simpleStringObjectPropertyName, arg);

        result = _(simpleOneParameterFunctionObjectDictionary).invoke(simpleStringObjectPropertyName, arg);

        result = _.chain(simpleOneParameterFunctionObjectDictionary).invoke(simpleStringObjectPropertyName, arg).value();
    }

    {
        const functionName = 'substring';
        const arg = 1;
        let result: any[];

        result = _.invoke(simpleString, functionName, arg);

        result = _(simpleString).invoke(functionName, arg);

        result = _.chain(simpleString).invoke(functionName, arg).value();
    }
}

// pluck
{
    // property name iterator with a non-nullable single type
    {
        let result: string[];

        result = _.pluck(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).pluck(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: string[];

        result = _.pluck(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).pluck(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: string[];

        result = _.pluck(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).pluck(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).pluck(simpleStringObjectPropertyName).value();
    }

    // property name iterator with a non-nullable intersecting type union
    {
        let result: (string | boolean)[];

        result = _.pluck(intersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        result = _(intersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName);

        result = _.chain(intersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | boolean)[];

        result = _.pluck(intersectingObjectPropertiesList, simpleStringObjectPropertyName);

        result = _(intersectingObjectPropertiesList).pluck(simpleStringObjectPropertyName);

        result = _.chain(intersectingObjectPropertiesList).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | boolean)[];

        result = _.pluck(intersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);

        result = _(intersectingObjectPropertiesDictionary).pluck(simpleStringObjectPropertyName);

        result = _.chain(intersectingObjectPropertiesDictionary).pluck(simpleStringObjectPropertyName).value();
    }

    // property name iterator with a nullable type union
    {
        let result: (string | undefined)[];

        result = _.pluck(simpleStringObjectOrUndefinedArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectOrUndefinedArray).pluck(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectOrUndefinedArray).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        result = _.pluck(simpleStringObjectOrUndefinedList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectOrUndefinedList).pluck(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectOrUndefinedList).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        result = _.pluck(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectOrUndefinedDictionary).pluck(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectOrUndefinedDictionary).pluck(simpleStringObjectPropertyName).value();
    }

    // property name iterator with a non-nullable non-intersecting type union
    {
        let result: (string | undefined)[];

        result = _.pluck(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        result = _(nonIntersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName);

        result = _.chain(nonIntersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        result = _.pluck(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        result = _(nonIntersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName);

        result = _.chain(nonIntersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        result = _.pluck(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);

        result = _(nonIntersectingObjectPropertiesDictionary).pluck(simpleStringObjectPropertyName);

        result = _.chain(nonIntersectingObjectPropertiesDictionary).pluck(simpleStringObjectPropertyName).value();
    }

    // property name iterator with type any
    // specifying any as T causes the result to be any[], which isn't ideal, but on the other hand getting that result involves choosing
    // to specify any in the first place
    {
        let result: any[];

        result = _.pluck(simpleStringObjectArray as any, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray as any).pluck(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray as any).pluck(simpleStringObjectPropertyName).value();
    }
}

// max
{
    // without iterator
    {
        let result: number;

        result = _.max(simpleNumberArray);

        result = _(simpleNumberArray).max();

        result = _.chain(simpleNumberArray).max().value();
    }

    {
        let result: number;

        result = _.max(simpleNumberList);

        result = _(simpleNumberList).max();

        result = _.chain(simpleNumberList).max().value();
    }

    {
        let result: number;

        result = _.max(simpleNumberDictionary);

        result = _(simpleNumberDictionary).max();

        result = _.chain(simpleNumberDictionary).max().value();
    }

    // function iterator
    {
        let result: SimpleNumberObject | number;

        result = _.max(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator);
        result = _.max(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator, context);

        result = _(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator);
        result = _(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator, context);

        result = _.chain(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.max(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator);
        result = _.max(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator, context);

        result = _(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator);
        result = _(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator, context);

        result = _.chain(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.max(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator);
        result = _.max(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator, context);

        result = _(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator);
        result = _(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator, context);

        result = _.chain(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: SimpleNumberObject | number;

        result = _.max(simpleNumberObjectArray, simpleStringObjectPropertyName);

        result = _(simpleNumberObjectArray).max(simpleStringObjectPropertyName);

        result = _.chain(simpleNumberObjectArray).max(simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.max(simpleNumberObjectList, simpleStringObjectPropertyName);

        result = _(simpleNumberObjectList).max(simpleStringObjectPropertyName);

        result = _.chain(simpleNumberObjectList).max(simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.max(simpleNumberObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleNumberObjectDictionary).max(simpleStringObjectPropertyName);

        result = _.chain(simpleNumberObjectDictionary).max(simpleStringObjectPropertyName).value();
    }
}

// min
{
    // without iterator
    {
        let result: number;

        result = _.min(simpleNumberArray);

        result = _(simpleNumberArray).min();

        result = _.chain(simpleNumberArray).min().value();
    }

    {
        let result: number;

        result = _.min(simpleNumberList);

        result = _(simpleNumberList).min();

        result = _.chain(simpleNumberList).min().value();
    }

    {
        let result: number;

        result = _.min(simpleNumberDictionary);

        result = _(simpleNumberDictionary).min();

        result = _.chain(simpleNumberDictionary).min().value();
    }

    // function iterator
    {
        let result: SimpleNumberObject | number;

        result = _.min(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator);
        result = _.min(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator, context);

        result = _(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator);
        result = _(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator, context);

        result = _.chain(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.min(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator);
        result = _.min(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator, context);

        result = _(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator);
        result = _(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator, context);

        result = _.chain(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.min(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator);
        result = _.min(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator, context);

        result = _(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator);
        result = _(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator, context);

        result = _.chain(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: SimpleNumberObject | number;

        result = _.min(simpleNumberObjectArray, simpleStringObjectPropertyName);

        result = _(simpleNumberObjectArray).min(simpleStringObjectPropertyName);

        result = _.chain(simpleNumberObjectArray).min(simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.min(simpleNumberObjectList, simpleStringObjectPropertyName);

        result = _(simpleNumberObjectList).min(simpleStringObjectPropertyName);

        result = _.chain(simpleNumberObjectList).min(simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.min(simpleNumberObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleNumberObjectDictionary).min(simpleStringObjectPropertyName);

        result = _.chain(simpleNumberObjectDictionary).min(simpleStringObjectPropertyName).value();
    }
}

// sortBy
{
    // function iterator
    {
        let result: SimpleStringObject[];

        result = _.sortBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.sortBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.sortBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.sortBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.sortBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.sortBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: SimpleStringObject[];

        result = _.sortBy(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).sortBy(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).sortBy(simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.sortBy(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).sortBy(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).sortBy(simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.sortBy(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).sortBy(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).sortBy(simpleStringObjectPropertyName).value();
    }
}

// groupBy
{
    // function iterator
    {
        let result: _.Dictionary<SimpleStringObject[]>;

        result = _.groupBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.groupBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject[]>;

        result = _.groupBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.groupBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject[]>;

        result = _.groupBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.groupBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: _.Dictionary<SimpleStringObject[]>;

        result = _.groupBy(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).groupBy(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).groupBy(simpleStringObjectPropertyName).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject[]>;

        result = _.groupBy(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).groupBy(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).groupBy(simpleStringObjectPropertyName).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject[]>;

        result = _.groupBy(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).groupBy(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).groupBy(simpleStringObjectPropertyName).value();
    }
}

// indexBy
{
    // function iterator
    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.indexBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.indexBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.indexBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.indexBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.indexBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.indexBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.indexBy(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).indexBy(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).indexBy(simpleStringObjectPropertyName).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.indexBy(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).indexBy(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).indexBy(simpleStringObjectPropertyName).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.indexBy(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).indexBy(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).indexBy(simpleStringObjectPropertyName).value();
    }
}

// countBy
{
    // function iterator
    {
        let result: _.Dictionary<number>;

        result = _.countBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.countBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<number>;

        result = _.countBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.countBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<number>;

        result = _.countBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.countBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<number>;

        result = _.countBy(simpleString, stringListSelectingIterator);
        result = _.countBy(simpleString, stringListSelectingIterator, context);

        result = _(simpleString).countBy(stringListSelectingIterator);
        result = _(simpleString).countBy(stringListSelectingIterator, context);

        result = _.chain(simpleString).countBy(stringListSelectingIterator).value();
        result = _.chain(simpleString).countBy(stringListSelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: _.Dictionary<number>;

        result = _.countBy(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).countBy(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).countBy(simpleStringObjectPropertyName).value();
    }

    {
        let result: _.Dictionary<number>;

        result = _.countBy(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).countBy(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).countBy(simpleStringObjectPropertyName).value();
    }

    {
        let result: _.Dictionary<number>;

        result = _.countBy(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).countBy(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).countBy(simpleStringObjectPropertyName).value();
    }
}

// shuffle
{
    {
        let result: SimpleStringObject[];

        result = _.shuffle(simpleStringObjectArray);

        result = _(simpleStringObjectArray).shuffle();

        result = _.chain(simpleStringObjectArray).shuffle().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.shuffle(simpleStringObjectList);

        result = _(simpleStringObjectList).shuffle();

        result = _.chain(simpleStringObjectList).shuffle().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.shuffle(simpleStringObjectDictionary);

        result = _(simpleStringObjectDictionary).shuffle();

        result = _.chain(simpleStringObjectDictionary).shuffle().value();
    }

    {
        let result: string[];

        result = _.shuffle(simpleString);

        result = _(simpleString).shuffle();

        result = _.chain(simpleString).shuffle().value();
    }
}

// sample
{
    // without n
    {
        let result: SimpleStringObjectOrUndefined;

        result = _.sample(simpleStringObjectArray);

        result = _(simpleStringObjectArray).sample();

        result = _.chain(simpleStringObjectArray).sample().value();
    }

    {
        let result: SimpleStringObjectOrUndefined;

        result = _.sample(simpleStringObjectList);

        result = _(simpleStringObjectList).sample();

        result = _.chain(simpleStringObjectList).sample().value();
    }

    {
        let result: SimpleStringObjectOrUndefined;

        result = _.sample(simpleStringObjectDictionary);

        result = _(simpleStringObjectDictionary).sample();

        result = _.chain(simpleStringObjectDictionary).sample().value();
    }

    {
        let result: string | undefined;

        result = _.sample(simpleString);

        result = _(simpleString).sample();

        result = _.chain(simpleString).sample().value();
    }

    // with n
    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.sample(simpleStringObjectArray, n);

        result = _(simpleStringObjectArray).sample(n);

        result = _.chain(simpleStringObjectArray).sample(n).value();
    }

    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.sample(simpleStringObjectList, n);

        result = _(simpleStringObjectList).sample(n);

        result = _.chain(simpleStringObjectList).sample(n).value();
    }

    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.sample(simpleStringObjectDictionary, n);

        result = _(simpleStringObjectDictionary).sample(n);

        result = _.chain(simpleStringObjectDictionary).sample(n).value();
    }

    {
        const n = 2;
        let result: string[];

        result = _.sample(simpleString, n);

        result = _(simpleString).sample(n);

        result = _.chain(simpleString).sample(n).value();
    }
}

// toArray
{
    {
        let result: SimpleStringObject[];

        result = _.toArray(simpleStringObjectArray);

        result = _(simpleStringObjectArray).toArray();

        result = _.chain(simpleStringObjectArray).toArray().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.toArray(simpleStringObjectList);

        result = _(simpleStringObjectList).toArray();

        result = _.chain(simpleStringObjectList).toArray().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.toArray(simpleStringObjectDictionary);

        result = _(simpleStringObjectDictionary).toArray();

        result = _.chain(simpleStringObjectDictionary).toArray().value();
    }

    {
        let result: string[];

        result = _.toArray(simpleString);

        result = _(simpleString).toArray();

        result = _.chain(simpleString).toArray().value();
    }
}

// size
{
    {
        let result: number;

        result = _.size(simpleStringObjectArray);

        result = _(simpleStringObjectArray).size();

        result = _.chain(simpleStringObjectArray).size().value();
    }

    {
        let result: number;

        result = _.size(simpleStringObjectList);

        result = _(simpleStringObjectList).size();

        result = _.chain(simpleStringObjectList).size().value();
    }

    {
        let result: number;

        result = _.size(simpleStringObjectDictionary);

        result = _(simpleStringObjectDictionary).size();

        result = _.chain(simpleStringObjectDictionary).size().value();
    }

    {
        let result: number;

        result = _.size(simpleString);

        result = _(simpleString).size();

        result = _.chain(simpleString).size().value();
    }
}

// partition
{
    // function iterator
    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.partition(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.partition(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.partition(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
    }

    {
        let result: [string[], string[]];

        result = _.partition(simpleString, stringListComparingIterator);
        result = _.partition(simpleString, stringListComparingIterator, context);

        result = _(simpleString).partition(stringListComparingIterator);
        result = _(simpleString).partition(stringListComparingIterator, context);

        result = _.chain(simpleString).partition(stringListComparingIterator).value();
        result = _.chain(simpleString).partition(stringListComparingIterator, context).value();
    }

    // partial object iterator
    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).partition(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).partition(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).partition(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).partition(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectDictionary).partition(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectDictionary).partition(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator
    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition(simpleStringObjectArray, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).partition(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).partition(simpleStringObjectPropertyName).value();
    }

    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition(simpleStringObjectList, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).partition(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).partition(simpleStringObjectPropertyName).value();
    }

    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        result = _(simpleStringObjectDictionary).partition(simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectDictionary).partition(simpleStringObjectPropertyName).value();
    }
}

// Arrays

// first, head, take
{
    // without n
    {
        let result: SimpleStringObjectOrUndefined;

        result = _.first(simpleStringObjectArray);

        result = _(simpleStringObjectArray).first();

        result = _.chain(simpleStringObjectArray).first().value();

        result = _.head(simpleStringObjectArray);

        result = _(simpleStringObjectArray).head();

        result = _.chain(simpleStringObjectArray).head().value();

        result = _.take(simpleStringObjectArray);

        result = _(simpleStringObjectArray).take();

        result = _.chain(simpleStringObjectArray).take().value();
    }

    {
        let result: SimpleStringObjectOrUndefined;

        result = _.first(simpleStringObjectList);

        result = _(simpleStringObjectList).first();

        result = _.chain(simpleStringObjectList).first().value();

        result = _.head(simpleStringObjectList);

        result = _(simpleStringObjectList).head();

        result = _.chain(simpleStringObjectList).head().value();

        result = _.take(simpleStringObjectList);

        result = _(simpleStringObjectList).take();

        result = _.chain(simpleStringObjectList).take().value();
    }

    {
        let result: string | undefined;

        result = _.first(simpleString);

        result = _(simpleString).first();

        result = _.chain(simpleString).first().value();

        result = _.head(simpleString);

        result = _(simpleString).head();

        result = _.chain(simpleString).head().value();

        result = _.take(simpleString);

        result = _(simpleString).take();

        result = _.chain(simpleString).take().value();
    }

    // with n
    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.first(simpleStringObjectArray, n);

        result = _(simpleStringObjectArray).first(n);

        result = _.chain(simpleStringObjectArray).first(n).value();

        result = _.head(simpleStringObjectArray, n);

        result = _(simpleStringObjectArray).head(n);

        result = _.chain(simpleStringObjectArray).head(n).value();

        result = _.take(simpleStringObjectArray, n);

        result = _(simpleStringObjectArray).take(n);

        result = _.chain(simpleStringObjectArray).take(n).value();
    }

    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.first(simpleStringObjectList, n);

        result = _(simpleStringObjectList).first(n);

        result = _.chain(simpleStringObjectList).first(n).value();

        result = _.head(simpleStringObjectList, n);

        result = _(simpleStringObjectList).head(n);

        result = _.chain(simpleStringObjectList).head(n).value();

        result = _.take(simpleStringObjectList, n);

        result = _(simpleStringObjectList).take(n);

        result = _.chain(simpleStringObjectList).take(n).value();
    }

    {
        const n = 2;
        let result: string[];

        result = _.first(simpleString, n);

        result = _(simpleString).first(n);

        result = _.chain(simpleString).first(n).value();

        result = _.head(simpleString, n);

        result = _(simpleString).head(n);

        result = _.chain(simpleString).head(n).value();

        result = _.take(simpleString, n);

        result = _(simpleString).take(n);

        result = _.chain(simpleString).take(n).value();
    }
}

// initial
{
    // without n
    {
        let result: SimpleStringObject[];

        result = _.initial(simpleStringObjectArray);

        result = _(simpleStringObjectArray).initial();

        result = _.chain(simpleStringObjectArray).initial().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.initial(simpleStringObjectList);

        result = _(simpleStringObjectList).initial();

        result = _.chain(simpleStringObjectList).initial().value();
    }

    {
        let result: string[];

        result = _.initial(simpleString);

        result = _(simpleString).initial();

        result = _.chain(simpleString).initial().value();
    }

    // with n
    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.initial(simpleStringObjectArray, n);

        result = _(simpleStringObjectArray).initial(n);

        result = _.chain(simpleStringObjectArray).initial(n).value();
    }

    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.initial(simpleStringObjectList, n);

        result = _(simpleStringObjectList).initial(n);

        result = _.chain(simpleStringObjectList).initial(n).value();
    }

    {
        const n = 2;
        let result: string[];

        result = _.initial(simpleString, n);

        result = _(simpleString).initial(n);

        result = _.chain(simpleString).initial(n).value();
    }
}

// last
{
    // without n
    {
        let result: SimpleStringObjectOrUndefined;

        result = _.last(simpleStringObjectArray);

        result = _(simpleStringObjectArray).last();

        result = _.chain(simpleStringObjectArray).last().value();
    }

    {
        let result: SimpleStringObjectOrUndefined;

        result = _.last(simpleStringObjectList);

        result = _(simpleStringObjectList).last();

        result = _.chain(simpleStringObjectList).last().value();
    }

    {
        let result: string | undefined;

        result = _.last(simpleString);

        result = _(simpleString).last();

        result = _.chain(simpleString).last().value();
    }

    // with n
    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.last(simpleStringObjectArray, n);

        result = _(simpleStringObjectArray).last(n);

        result = _.chain(simpleStringObjectArray).last(n).value();
    }

    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.last(simpleStringObjectList, n);

        result = _(simpleStringObjectList).last(n);

        result = _.chain(simpleStringObjectList).last(n).value();
    }

    {
        const n = 2;
        let result: string[];

        result = _.last(simpleString, n);

        result = _(simpleString).last(n);

        result = _.chain(simpleString).last(n).value();
    }
}

// rest, tail, drop
{
    // without n
    {
        let result: SimpleStringObject[];

        result = _.rest(simpleStringObjectArray);

        result = _(simpleStringObjectArray).rest();

        result = _.chain(simpleStringObjectArray).rest().value();

        result = _.tail(simpleStringObjectArray);

        result = _(simpleStringObjectArray).tail();

        result = _.chain(simpleStringObjectArray).tail().value();

        result = _.drop(simpleStringObjectArray);

        result = _(simpleStringObjectArray).drop();

        result = _.chain(simpleStringObjectArray).drop().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.rest(simpleStringObjectList);

        result = _(simpleStringObjectList).rest();

        result = _.chain(simpleStringObjectList).rest().value();

        result = _.tail(simpleStringObjectList);

        result = _(simpleStringObjectList).tail();

        result = _.chain(simpleStringObjectList).tail().value();

        result = _.drop(simpleStringObjectList);

        result = _(simpleStringObjectList).drop();

        result = _.chain(simpleStringObjectList).drop().value();
    }

    {
        let result: string[];

        result = _.rest(simpleString);

        result = _(simpleString).rest();

        result = _.chain(simpleString).rest().value();

        result = _.tail(simpleString);

        result = _(simpleString).tail();

        result = _.chain(simpleString).tail().value();

        result = _.drop(simpleString);

        result = _(simpleString).drop();

        result = _.chain(simpleString).drop().value();
    }

    // with n
    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.rest(simpleStringObjectArray, n);

        result = _(simpleStringObjectArray).rest(n);

        result = _.chain(simpleStringObjectArray).rest(n).value();

        result = _.tail(simpleStringObjectArray, n);

        result = _(simpleStringObjectArray).tail(n);

        result = _.chain(simpleStringObjectArray).tail(n).value();

        result = _.drop(simpleStringObjectArray, n);

        result = _(simpleStringObjectArray).drop(n);

        result = _.chain(simpleStringObjectArray).drop(n).value();
    }

    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.rest(simpleStringObjectList, n);

        result = _(simpleStringObjectList).rest(n);

        result = _.chain(simpleStringObjectList).rest(n).value();

        result = _.tail(simpleStringObjectList, n);

        result = _(simpleStringObjectList).tail(n);

        result = _.chain(simpleStringObjectList).tail(n).value();

        result = _.drop(simpleStringObjectList, n);

        result = _(simpleStringObjectList).drop(n);

        result = _.chain(simpleStringObjectList).drop(n).value();
    }

    {
        const n = 2;
        let result: string[];

        result = _.rest(simpleString, n);

        result = _(simpleString).rest(n);

        result = _.chain(simpleString).rest(n).value();

        result = _.tail(simpleString, n);

        result = _(simpleString).tail(n);

        result = _.chain(simpleString).tail(n).value();

        result = _.drop(simpleString, n);

        result = _(simpleString).drop(n);

        result = _.chain(simpleString).drop(n).value();
    }
}

// compact
{
    {
        let result: SimpleStringObject[];

        result = _.compact(simpleStringObjectOrUndefinedArray);

        result = _(simpleStringObjectOrUndefinedArray).compact();

        result = _.chain(simpleStringObjectOrUndefinedArray).compact().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.compact(simpleStringObjectOrUndefinedList);

        result = _(simpleStringObjectOrUndefinedList).compact();

        result = _.chain(simpleStringObjectOrUndefinedList).compact().value();
    }
}

// flatten
{
    // one dimension, deep
    {
        let result: SimpleStringObject[];

        result = _.flatten(simpleStringObjectArray);

        result = _(simpleStringObjectArray).flatten();

        result = _.chain(simpleStringObjectArray).flatten().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.flatten(simpleStringObjectList);

        result = _(simpleStringObjectList).flatten();

        result = _.chain(simpleStringObjectList).flatten().value();
    }

    // one dimension, shallow
    {
        let result: SimpleStringObject[];

        result = _.flatten(simpleStringObjectArray, true);

        result = _(simpleStringObjectArray).flatten(true);

        result = _.chain(simpleStringObjectArray).flatten(true).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.flatten(simpleStringObjectList, true);

        result = _(simpleStringObjectList).flatten(true);

        result = _.chain(simpleStringObjectList).flatten(true).value();
    }

    // two dimensions, deep
    {
        const array: SimpleStringObject[][] = [simpleStringObjectArray];
        let result: SimpleStringObject[];

        result = _.flatten(array);

        result = _(array).flatten();

        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<SimpleStringObject>> = { 0: simpleStringObjectList, length: 1 };
        let result: SimpleStringObject[];

        result = _.flatten(list);

        result = _(list).flatten();

        result = _.chain(list).flatten().value();
    }

    // two dimensions, shallow
    {
        const array: SimpleStringObject[][] = [simpleStringObjectArray];
        let result: SimpleStringObject[];

        result = _.flatten(array, true);

        result = _(array).flatten(true);

        result = _.chain(array).flatten(true).value();
    }

    {
        const list: _.List<_.List<SimpleStringObject>> = { 0: simpleStringObjectList, length: 1 };
        let result: SimpleStringObject[];

        result = _.flatten(list, true);

        result = _(list).flatten(true);

        result = _.chain(list).flatten(true).value();
    }

    // three dimensions, deep
    {
        const array: SimpleStringObject[][][] = [[simpleStringObjectArray]];
        let result: SimpleStringObject[];

        result = _.flatten(array);

        result = _(array).flatten();

        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<_.List<SimpleStringObject>>> = { 0: { 0: simpleStringObjectList, length: 1 }, length: 1 };
        let result: SimpleStringObject[];

        result = _.flatten(list);

        result = _(list).flatten();

        result = _.chain(list).flatten().value();
    }

    // three dimensions, shallow
    {
        const array: SimpleStringObject[][][] = [[simpleStringObjectArray]];
        let result: SimpleStringObject[][];

        result = _.flatten(array, true);

        result = _(array).flatten(true);

        result = _.chain(array).flatten(true).value();
    }

    {
        const list: _.List<_.List<_.List<SimpleStringObject>>> = { 0: { 0: simpleStringObjectList, length: 1 }, length: 1 };
        let result: _.List<SimpleStringObject>[];

        result = _.flatten(list, true);

        result = _(list).flatten(true);

        result = _.chain(list).flatten(true).value();
    }

    // four dimensions, deep - this is where recursion gives up and results in any[]
    {
        const array: SimpleStringObject[][][][] = [[[simpleStringObjectArray]]];
        let result: any[];

        // $ExpectType any[]
        // $ExpectType any[]
        result = _.flatten(array);

        // $ExpectType any[]
        // $ExpectType any[]
        result = _(array).flatten();

        // $ExpectType any[]
        // $ExpectType any[]
        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<_.List<_.List<SimpleStringObject>>>> = { 0: { 0: { 0: simpleStringObjectList, length: 1 }, length: 1 }, length: 1 };
        let result: any[];

        // $ExpectType any[]
        // $ExpectType any[]
        result = _.flatten(list);

        // $ExpectType any[]
        // $ExpectType any[]
        result = _(list).flatten();

        // $ExpectType any[]
        // $ExpectType any[]
        result = _.chain(list).flatten().value();
    }

    // string lists, deep
    {
        const array: string[][] = [simpleStringArray];
        let result: string[];

        result = _.flatten(array);

        result = _(array).flatten();

        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<string>> = { 0: simpleStringList, length: 1 };
        let result: string[];

        result = _.flatten(list);

        result = _(list).flatten();

        result = _.chain(list).flatten().value();
    }

    // string lists, shallow
    {
        let result: string[];

        result = _.flatten(simpleStringList, true);

        result = _(simpleStringArray).flatten(true);

        result = _.chain(simpleStringArray).flatten(true).value();
    }

    {
        let result: string[];

        result = _.flatten(simpleStringList, true);

        result = _(simpleStringList).flatten(true);

        result = _.chain(simpleStringList).flatten(true).value();
    }

    // type unions, deep
    {
        const array: NonIntersectingObjectPropertiesType[][] = [nonIntersectingObjectPropertiesArray];
        let result: NonIntersectingObjectPropertiesType[];

        result = _.flatten(array);

        result = _(array).flatten();

        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<NonIntersectingObjectPropertiesType>> = { 0: nonIntersectingObjectPropertiesList, length: 1 };
        let result: NonIntersectingObjectPropertiesType[];

        result = _.flatten(list);

        result = _(list).flatten();

        result = _.chain(list).flatten().value();
    }

    // type unions, shallow
    {
        let result: NonIntersectingObjectPropertiesType[];

        result = _.flatten(nonIntersectingObjectPropertiesArray, true);

        result = _(nonIntersectingObjectPropertiesArray).flatten(true);

        result = _.chain(nonIntersectingObjectPropertiesArray).flatten(true).value();
    }

    {
        let result: NonIntersectingObjectPropertiesType[];

        result = _.flatten(nonIntersectingObjectPropertiesList, true);

        result = _(nonIntersectingObjectPropertiesList).flatten(true);

        result = _.chain(nonIntersectingObjectPropertiesList).flatten(true).value();
    }
}

// without
{
    {
        const item1 = simpleStringObjectArray[0];
        const item2 = simpleStringObjectArray[1];
        let result: SimpleStringObject[];

        result = _.without(simpleStringObjectArray, item1, item2);

        result = _(simpleStringObjectArray).without(item1, item2);

        result = _.chain(simpleStringObjectArray).without(item1, item2).value();
    }

    {
        const item1 = simpleStringObjectList[0];
        const item2 = simpleStringObjectList[1];
        let result: SimpleStringObject[];

        result = _.without(simpleStringObjectList, item1, item2);

        result = _(simpleStringObjectList).without(item1, item2);

        result = _.chain(simpleStringObjectList).without(item1, item2).value();
    }

    {
        const item1 = simpleString[0];
        const item2 = simpleString[1];
        let result: string[];

        result = _.without(simpleString, item1, item2);

        result = _(simpleString).without(item1, item2);

        result = _.chain(simpleString).without(item1, item2).value();
    }
}

// union
{
    {
        let result: SimpleStringObject[];

        result = _.union(simpleStringObjectArray, simpleStringObjectArray);

        result = _(simpleStringObjectArray).union(simpleStringObjectArray);

        result = _.chain(simpleStringObjectArray).union(simpleStringObjectArray).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.union(simpleStringObjectList, simpleStringObjectList);

        result = _(simpleStringObjectList).union(simpleStringObjectList);

        result = _.chain(simpleStringObjectList).union(simpleStringObjectList).value();
    }

    {
        let result: string[];

        result = _.union(simpleString, simpleString);

        result = _(simpleString).union(simpleString);

        result = _.chain(simpleString).union(simpleString).value();
    }
}

// intersection
{
    {
        let result: SimpleStringObject[];

        result = _.intersection(simpleStringObjectArray, simpleStringObjectArray);

        result = _(simpleStringObjectArray).intersection(simpleStringObjectArray);

        result = _.chain(simpleStringObjectArray).intersection(simpleStringObjectArray).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.intersection(simpleStringObjectList, simpleStringObjectList);

        result = _(simpleStringObjectList).intersection(simpleStringObjectList);

        result = _.chain(simpleStringObjectList).intersection(simpleStringObjectList).value();
    }

    {
        let result: string[];

        result = _.intersection(simpleString, simpleString);

        result = _(simpleString).intersection(simpleString);

        result = _.chain(simpleString).intersection(simpleString).value();
    }
}

// difference
{
    {
        let result: SimpleStringObject[];

        result = _.difference(simpleStringObjectArray, simpleStringObjectArray);

        result = _(simpleStringObjectArray).difference(simpleStringObjectArray);

        result = _.chain(simpleStringObjectArray).difference(simpleStringObjectArray).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.difference(simpleStringObjectList, simpleStringObjectList);

        result = _(simpleStringObjectList).difference(simpleStringObjectList);

        result = _.chain(simpleStringObjectList).difference(simpleStringObjectList).value();
    }

    {
        let result: string[];

        result = _.difference(simpleString, simpleString);

        result = _(simpleString).difference(simpleString);

        result = _.chain(simpleString).difference(simpleString).value();
    }
}

// uniq, unique
{
    // function iterator
    {
        let result: SimpleStringObject[];

        result = _.uniq(simpleStringObjectArray);
        result = _.uniq(simpleStringObjectArray, true);
        result = _.uniq(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator);
        result = _.uniq(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectArray).uniq();
        result = _(simpleStringObjectArray).uniq(true);
        result = _(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectArray).uniq().value();
        result = _.chain(simpleStringObjectArray).uniq(true).value();
        result = _.chain(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.unique(simpleStringObjectArray);
        result = _.unique(simpleStringObjectArray, true);
        result = _.unique(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator);
        result = _.unique(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectArray).unique();
        result = _(simpleStringObjectArray).unique(true);
        result = _(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectArray).unique().value();
        result = _.chain(simpleStringObjectArray).unique(true).value();
        result = _.chain(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.uniq(simpleStringObjectList);
        result = _.uniq(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.uniq(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        result = _.uniq(simpleStringObjectList, true);
        result = _.uniq(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator);
        result = _.uniq(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectList).uniq();
        result = _(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectList).uniq(true);
        result = _(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectList).uniq().value();
        result = _.chain(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).uniq(true).value();
        result = _.chain(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.unique(simpleStringObjectList);
        result = _.unique(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.unique(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        result = _.unique(simpleStringObjectList, true);
        result = _.unique(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator);
        result = _.unique(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectList).unique();
        result = _(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectList).unique(true);
        result = _(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectList).unique().value();
        result = _.chain(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).unique(true).value();
        result = _.chain(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: SimpleStringObject[];

        result = _.uniq(simpleStringObjectArray, simpleStringObjectPropertyName);
        result = _.uniq(simpleStringObjectArray, true, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).uniq(simpleStringObjectPropertyName);
        result = _(simpleStringObjectArray).uniq(true, simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).uniq(simpleStringObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).uniq(true, simpleStringObjectPropertyName).value();

        result = _.unique(simpleStringObjectArray, simpleStringObjectPropertyName);
        result = _.unique(simpleStringObjectArray, true, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).unique(simpleStringObjectPropertyName);
        result = _(simpleStringObjectArray).unique(true, simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).unique(simpleStringObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).unique(true, simpleStringObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.uniq(simpleStringObjectList, simpleStringObjectPropertyName);
        result = _.uniq(simpleStringObjectList, true, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).uniq(simpleStringObjectPropertyName);
        result = _(simpleStringObjectList).uniq(true, simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).uniq(simpleStringObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).uniq(true, simpleStringObjectPropertyName).value();

        result = _.unique(simpleStringObjectList, simpleStringObjectPropertyName);
        result = _.unique(simpleStringObjectList, true, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).unique(simpleStringObjectPropertyName);
        result = _(simpleStringObjectList).unique(true, simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).unique(simpleStringObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).unique(true, simpleStringObjectPropertyName).value();
    }
}

// zip
{
    {
        const array1: string[] = ['a', 'b'];
        const array2: number[] = [1, 2];
        const array3: boolean[] = [true, false];
        let result: any[][]; // ideally should be [string, number, boolean][]

        result = _.zip(array1, array2, array3);

        result = _(array1).zip(array2, array3);

        result = _.chain(array1).zip(array2, array3).value();
    }

    {
        const list1: _.List<string> = { 0: 'a', 1: 'b', length: 2 };
        const list2: _.List<number> = { 0: 1, 1: 2, length: 2 };
        const list3: _.List<boolean> = { 0: true, 1: false, length: 2 };
        let result: any[][]; // ideally should be [string, number, boolean][]

        result = _.zip(list1, list2, list3);

        result = _(list1).zip(list2, list3);

        result = _.chain(list1).zip(list2, list3).value();
    }
}

// unzip
{
    {
        const array: [string, number, boolean][] = [['a', 1, true], ['b', 2, false]];
        let result: any[][]; // ideally should be [string[], number[], boolean[]]

        result = _.unzip(array);

        result = _(array).unzip();

        result = _.chain(array).unzip().value();
    }

    {
        const list: _.List<_.List<(string | number | boolean)>> = { 0: { 0: 'a', 1: 1, 2: true, length: 3 }, 1: { 0: 'b', 1: 2, 2: false, length: 3 }, length: 2 };
        let result: any[][]; // ideally should be [(string | number | boolean)[], (string | number | boolean)[], (string | number | boolean)[]]

        result = _.unzip(list);

        result = _(list).unzip();

        result = _.chain(list).unzip().value();
    }
}

// object
{
    // separate key and value sets
    {
        const keyArray: string[] = ['a', 'b'];
        const valueArray: number[] = [1, 2];
        let result: _.Dictionary<number>;

        result = _.object(keyArray, valueArray);

        result = _(keyArray).object(valueArray);

        result = _.chain(keyArray).object(valueArray).value();
    }

    {
        const keyList: _.List<string> = { 0: 'a', 1: 'b', length: 2 };
        const valueList: _.List<number> = { 0: 1, 1: 2, length: 2 };
        let result: _.Dictionary<number>;

        result = _.object(keyList, valueList);

        result = _(keyList).object(valueList);

        result = _.chain(keyList).object(valueList).value();
    }

    // key value pair tuples
    {
        const array: [string, number][] = [['a', 1], ['b', 2]];
        let result: _.Dictionary<number>;

        result = _.object(array);

        result = _(array).object();

        result = _.chain(array).object().value();
    }

    {
        const list: _.List<[string, number]> = { 0: ['a', 1], 1: ['b', 2], length: 2 };
        let result: _.Dictionary<number>;

        result = _.object(list);

        result = _(list).object();

        result = _.chain(list).object().value();
    }
}

// chunk
{
    {
        const length = 2;
        let result: SimpleStringObject[][];

        result = _.chunk(simpleStringObjectArray, length);

        result = _(simpleStringObjectArray).chunk(length);

        result = _.chain(simpleStringObjectArray).chunk(length).value();

        result = _.chain(simpleStringObjectArray).chunk(length).value();
    }

    {
        const length = 2;
        let result: SimpleStringObject[][];

        result = _.chunk(simpleStringObjectList, length);

        result = _(simpleStringObjectList).chunk(length);

        result = _.chain(simpleStringObjectList).chunk(length).value();

        result = _.chain(simpleStringObjectList).chunk(length).value();
    }

    {
        const length = 2;
        let result: string[][];

        result = _.chunk(simpleString, length);

        result = _(simpleString).chunk(length);

        result = _.chain(simpleString).chunk(length).value();
    }
}

// indexOf
{
    const isSorted = true;

    {
        const item = simpleStringObjectArray[0];
        let result: number;

        result = _.indexOf(simpleStringObjectArray, item);
        result = _.indexOf(simpleStringObjectArray, item, isSorted);

        result = _(simpleStringObjectArray).indexOf(item);
        result = _(simpleStringObjectArray).indexOf(item, isSorted);

        result = _.chain(simpleStringObjectArray).indexOf(item).value();
        result = _.chain(simpleStringObjectArray).indexOf(item, isSorted).value();

        result = _.chain(simpleStringObjectArray).indexOf(item).value();
        result = _.chain(simpleStringObjectArray).indexOf(item, isSorted).value();
    }

    {
        const item = simpleStringObjectList[0];
        let result: number;

        result = _.indexOf(simpleStringObjectList, item);
        result = _.indexOf(simpleStringObjectList, item, isSorted);

        result = _(simpleStringObjectList).indexOf(item);
        result = _(simpleStringObjectList).indexOf(item, isSorted);

        result = _.chain(simpleStringObjectList).indexOf(item).value();
        result = _.chain(simpleStringObjectList).indexOf(item, isSorted).value();

        result = _.chain(simpleStringObjectList).indexOf(item).value();
        result = _.chain(simpleStringObjectList).indexOf(item, isSorted).value();
    }

    {
        const item = simpleString[0];
        let result: number;

        result = _.indexOf(simpleString, item);
        result = _.indexOf(simpleString, item, isSorted);

        result = _(simpleString).indexOf(item);
        result = _(simpleString).indexOf(item, isSorted);

        result = _.chain(simpleString).indexOf(item).value();
        result = _.chain(simpleString).indexOf(item, isSorted).value();
    }
}

// lastIndexof
{
    const fromIndex = 1;

    {
        const item = simpleStringObjectArray[0];
        let result: number;

        result = _.lastIndexOf(simpleStringObjectArray, item);
        result = _.lastIndexOf(simpleStringObjectArray, item, fromIndex);

        result = _(simpleStringObjectArray).lastIndexOf(item);
        result = _(simpleStringObjectArray).lastIndexOf(item, fromIndex);

        result = _.chain(simpleStringObjectArray).lastIndexOf(item).value();
        result = _.chain(simpleStringObjectArray).lastIndexOf(item, fromIndex).value();

        result = _.chain(simpleStringObjectArray).lastIndexOf(item).value();
        result = _.chain(simpleStringObjectArray).lastIndexOf(item, fromIndex).value();
    }

    {
        const item = simpleStringObjectList[0];
        let result: number;

        result = _.lastIndexOf(simpleStringObjectList, item);
        result = _.lastIndexOf(simpleStringObjectList, item, fromIndex);

        result = _(simpleStringObjectList).lastIndexOf(item);
        result = _(simpleStringObjectList).lastIndexOf(item, fromIndex);

        result = _.chain(simpleStringObjectList).lastIndexOf(item).value();
        result = _.chain(simpleStringObjectList).lastIndexOf(item, fromIndex).value();

        result = _.chain(simpleStringObjectList).lastIndexOf(item).value();
        result = _.chain(simpleStringObjectList).lastIndexOf(item, fromIndex).value();
    }

    {
        const item = simpleString[0];
        let result: number;

        result = _.lastIndexOf(simpleString, item);
        result = _.lastIndexOf(simpleString, item, fromIndex);

        result = _(simpleString).lastIndexOf(item);
        result = _(simpleString).lastIndexOf(item, fromIndex);

        result = _.chain(simpleString).lastIndexOf(item).value();
        result = _.chain(simpleString).lastIndexOf(item, fromIndex).value();
    }
}

// sortedIndex
{
    // no iterator
    {
        const item = 'b';
        let result: number;

        result = _.sortedIndex(simpleStringArray, item);

        result = _(simpleStringArray).sortedIndex(item);

        result = _.chain(simpleStringArray).sortedIndex(item).value();
    }

    {
        const item = 'b';
        let result: number;

        result = _.sortedIndex(simpleStringList, item);

        result = _(simpleStringList).sortedIndex(item);

        result = _.chain(simpleStringList).sortedIndex(item).value();
    }

    {
        const item = 'b';
        let result: number;

        result = _.sortedIndex(simpleString, item);

        result = _(simpleString).sortedIndex(item);

        result = _.chain(simpleString).sortedIndex(item).value();
    }

    // function iterator
    {
        const item = simpleStringObjectArray[0];
        let result: number;

        result = _.sortedIndex(simpleStringObjectArray, item, simpleStringObjectListPropertySelectingIterator);
        result = _.sortedIndex(simpleStringObjectArray, item, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectArray).sortedIndex(item, simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).sortedIndex(item, simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectArray).sortedIndex(item, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).sortedIndex(item, simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        const item = simpleStringObjectList[0];
        let result: number;

        result = _.sortedIndex(simpleStringObjectList, item, simpleStringObjectListPropertySelectingIterator);
        result = _.sortedIndex(simpleStringObjectList, item, simpleStringObjectListPropertySelectingIterator, context);

        result = _(simpleStringObjectList).sortedIndex(item, simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).sortedIndex(item, simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain(simpleStringObjectList).sortedIndex(item, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).sortedIndex(item, simpleStringObjectListPropertySelectingIterator, context).value();
    }

    // property name iterator
    {
        const item = simpleStringObjectArray[0];
        let result: number;

        result = _.sortedIndex(simpleStringObjectArray, item, simpleStringObjectPropertyName);

        result = _(simpleStringObjectArray).sortedIndex(item, simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectArray).sortedIndex(item, simpleStringObjectPropertyName).value();
    }

    {
        const item = simpleStringObjectList[0];
        let result: number;

        result = _.sortedIndex(simpleStringObjectList, item, simpleStringObjectPropertyName);

        result = _(simpleStringObjectList).sortedIndex(item, simpleStringObjectPropertyName);

        result = _.chain(simpleStringObjectList).sortedIndex(item, simpleStringObjectPropertyName).value();
    }
}

// findIndex
{
    {
        let result: number;

        result = _.findIndex(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.findIndex(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: number;

        result = _.findIndex(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).findIndex(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).findIndex(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: number;

        result = _.findIndex(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.findIndex(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: number;

        result = _.findIndex(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).findIndex(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).findIndex(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: number;

        result = _.findIndex(simpleString, stringListComparingIterator);
        result = _.findIndex(simpleString, stringListComparingIterator, context);

        result = _(simpleString).findIndex(stringListComparingIterator);
        result = _(simpleString).findIndex(stringListComparingIterator, context);

        result = _.chain(simpleString).findIndex(stringListComparingIterator).value();
        result = _.chain(simpleString).findIndex(stringListComparingIterator, context).value();
    }
}

// findLastIndex
{
    {
        let result: number;

        result = _.findLastIndex(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.findLastIndex(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        const array: { a: string, b: string }[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'd' }];
        let result: number;

        result = _.findLastIndex(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectArray).findLastIndex(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectArray).findLastIndex(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: number;

        result = _.findLastIndex(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.findLastIndex(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: number;

        result = _.findLastIndex(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _(simpleStringObjectList).findLastIndex(simpleStringObjectPartialPropertyMatch);

        result = _.chain(simpleStringObjectList).findLastIndex(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: number;

        result = _.findLastIndex(simpleString, stringListComparingIterator);
        result = _.findLastIndex(simpleString, stringListComparingIterator, context);

        result = _(simpleString).findLastIndex(stringListComparingIterator);
        result = _(simpleString).findLastIndex(stringListComparingIterator, context);

        result = _.chain(simpleString).findLastIndex(stringListComparingIterator).value();
        result = _.chain(simpleString).findLastIndex(stringListComparingIterator, context).value();
    }
}

// range
{
    const start = 0;
    const stop = 10;
    const step = 1;
    let result: number[];

    result = _.range(stop);
    result = _.range(start, stop);
    result = _.range(start, stop, step);

    result = _(stop).range();
    result = _(start).range(stop);
    result = _(start).range(stop, step);

    result = _.chain(stop).range().value();
    result = _.chain(start).range(stop).value();
    result = _.chain(start).range(stop, step).value();
}

// OOP Style

// underscore
{
    {
        let result: _.Underscore<SimpleStringObject, SimpleStringObject[]>;

        // $ExpectType Underscore<SimpleStringObject, SimpleStringObject[]>
        result = _(simpleStringObjectArray);
    }

    {
        let result: _.Underscore<SimpleStringObject, _.List<SimpleStringObject>>;

        // $ExpectType Underscore<SimpleStringObject, List<SimpleStringObject>>
        result = _(simpleStringObjectList);
    }

    {
        let result: _.Underscore<SimpleStringObject, _.Dictionary<SimpleStringObject>>;

        // $ExpectType Underscore<SimpleStringObject, Dictionary<SimpleStringObject>>
        result = _(simpleStringObjectDictionary);

    }

    {
        let result: _.Underscore<string, string>;

        // $ExpectType Underscore<string, string>
        result = _(simpleString);
    }

    {
        let result: _.Underscore<number, number>;

        // $ExpectType Underscore<number, number>
        result = _(simpleNumber);
    }
}

// value
// verify that the object given to underscore is returned by value
{
    {
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _(simpleStringObjectArray).value();
    }

    {
        let result: _.List<SimpleStringObject>;

        // $ExpectType List<SimpleStringObject>
        result = _(simpleStringObjectList).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        // $ExpectType Dictionary<SimpleStringObject>
        result = _(simpleStringObjectDictionary).value();

    }

    {
        let result: string;

        // $ExpectType string
        result = _(simpleString).value();
    }

    {
        let result: number;

        // $ExpectType number
        result = _(simpleNumber).value();
    }
}

// Chaining

// chain
// verify that the right chain item and value types are yielded by calls to chain
// these tests also check to make sure that _.chain() and _().chain() yield the same types
{
    {
        let result: _._Chain<SimpleStringObject, SimpleStringObject[]>;

        // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
        result = _.chain(simpleStringObjectArray);

        // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
        result = _(simpleStringObjectArray).chain();
    }

    {
        let result: _._Chain<SimpleStringObject, _.List<SimpleStringObject>>;

        // $ExpectType _Chain<SimpleStringObject, List<SimpleStringObject>>
        result = _.chain(simpleStringObjectList);

        // $ExpectType _Chain<SimpleStringObject, List<SimpleStringObject>>
        result = _(simpleStringObjectList).chain();
    }

    {
        let result: _._Chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>;

        // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
        result = _.chain(simpleStringObjectDictionary);

        // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
        result = _(simpleStringObjectDictionary).chain();

    }

    {
        let result: _._Chain<string, string>;

        // $ExpectType _Chain<string, string>
        result = _.chain(simpleString);

        // $ExpectType _Chain<string, string>
        result = _(simpleString).chain();
    }

    {
        let result: _._Chain<number, number>;

        // $ExpectType _Chain<number, number>
        result = _.chain(simpleNumber);

        // $ExpectType _Chain<number, number>
        result = _(simpleNumber).chain();
    }
}

// value
// verify that the object given to chain is returned by value
{
    {
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.chain(simpleStringObjectArray).value();
    }

    {
        let result: _.List<SimpleStringObject>;

        // $ExpectType List<SimpleStringObject>
        result = _.chain(simpleStringObjectList).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        // $ExpectType Dictionary<SimpleStringObject>
        result = _.chain(simpleStringObjectDictionary).value();

    }

    {
        let result: string;

        // $ExpectType string
        result = _.chain(simpleString).value();
    }

    {
        let result: number;

        // $ExpectType number
        result = _.chain(simpleNumber).value();
    }
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
