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
const simpleObjectPropertyName = 'a';

interface SimpleStringObject {
    a: string;
}
const simpleStringObjectPartialPropertyMatch: Partial<SimpleStringObject> = { a: 'b' };

const simpleStringObjectArray: SimpleStringObject[] = [{ a: 'a' }, { a: 'b' }, { a: 'c' }];
const simpleStringObjectList: _.List<SimpleStringObject> = { 0: { a: 'a' }, 1: { a: 'b' }, 2: { a: 'c' }, length: 3 };
const simpleStringObjectListPropertyModifyingIterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a += 'b';
const simpleStringObjectListPropertySelectingIterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a;
const simpleStringObjectListPropertyComparingIterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a === 'b';
const simpleStringObjectListPropertyMemoIterator = (prev: string, value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => prev + value.a;

const simpleStringObjectDictionary: _.Dictionary<SimpleStringObject> = { a: { a: 'a' }, b: { a: 'b' }, c: { a: 'c' } };
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

// Collection Functions

// each, forEach
{
    {

        let result: SimpleStringObject[];

        result = _.each<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator);
        result = _.each<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator, context);
        result = _.each(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator);
        result = _.each(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator, context);
        result = _(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator);
        result = _(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator, context).value();
        result = _.chain(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator).value();
        result = _.chain(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator, context).value();

        result = _.forEach<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator);
        result = _.forEach<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator, context);
        result = _.forEach(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator);
        result = _.forEach(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator, context);
        result = _(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator);
        result = _(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator, context).value();
        result = _.chain(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator).value();
        result = _.chain(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator, context).value();
    }

    {
        let result: _.List<SimpleStringObject>;

        result = _.each<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator);
        result = _.each<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator, context);
        result = _.each(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator);
        result = _.each(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator, context);
        result = _(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator);
        result = _(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator, context).value();
        result = _.chain(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator).value();
        result = _.chain(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator, context).value();

        result = _.forEach<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator);
        result = _.forEach<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator, context);
        result = _.forEach(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator);
        result = _.forEach(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator, context);
        result = _(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator);
        result = _(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator, context).value();
        result = _.chain(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator).value();
        result = _.chain(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator, context).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.each<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator);
        result = _.each<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator, context);
        result = _.each(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator);
        result = _.each(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator, context);
        result = _(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator);
        result = _(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator).value();
        result = _.chain(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator, context).value();

        result = _.forEach<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator);
        result = _.forEach<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator, context);
        result = _.forEach(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator);
        result = _.forEach(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator, context);
        result = _(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator);
        result = _(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator).value();
        result = _.chain(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator, context).value();
    }
}

// map, collect
{
    // function iterator
    {
        let result: string[];

        result = _.map<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.map<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);
        result = _.map(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.map(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).map<string>(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).map<string>(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).map<string>(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).map<string>(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.collect<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.collect<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);
        result = _.collect(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.collect(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).collect<string>(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).collect<string>(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).collect<string>(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).collect<string>(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: string[];

        result = _.map<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.map<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        result = _.map(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.map(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).map<string>(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).map<string>(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).map<string>(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).map<string>(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.collect<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.collect<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        result = _.collect(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.collect(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).collect<string>(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).collect<string>(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).collect<string>(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).collect<string>(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: string[];

        result = _.map<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.map<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);
        result = _.map(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.map(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).map<string>(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).map<string>(simpleStringObjectDictionaryPropertySelectingIterator, context);
        result = _(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).map<string>(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).map<string>(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator, context).value();

        result = _.collect<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.collect<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);
        result = _.collect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.collect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).collect<string>(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).collect<string>(simpleStringObjectDictionaryPropertySelectingIterator, context);
        result = _(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).collect<string>(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).collect<string>(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
    }

    {
        let result: string[];

        result = _.map<string, string>(simpleString, stringListModifyingIterator);
        result = _.map<string, string>(simpleString, stringListModifyingIterator, context);
        result = _.map(simpleString, stringListModifyingIterator);
        result = _.map(simpleString, stringListModifyingIterator, context);

        result = _<string>(simpleString).map<string>(stringListModifyingIterator);
        result = _<string>(simpleString).map<string>(stringListModifyingIterator, context);
        result = _(simpleString).map(stringListModifyingIterator);
        result = _(simpleString).map(stringListModifyingIterator, context);

        result = _.chain<string>(simpleString).map<string>(stringListModifyingIterator).value();
        result = _.chain<string>(simpleString).map<string>(stringListModifyingIterator, context).value();
        result = _.chain(simpleString).map(stringListModifyingIterator).value();
        result = _.chain(simpleString).map(stringListModifyingIterator, context).value();

        result = _.collect<string, string>(simpleString, stringListModifyingIterator);
        result = _.collect<string, string>(simpleString, stringListModifyingIterator, context);
        result = _.collect(simpleString, stringListModifyingIterator);
        result = _.collect(simpleString, stringListModifyingIterator, context);

        result = _<string>(simpleString).collect<string>(stringListModifyingIterator);
        result = _<string>(simpleString).collect<string>(stringListModifyingIterator, context);
        result = _(simpleString).collect(stringListModifyingIterator);
        result = _(simpleString).collect(stringListModifyingIterator, context);

        result = _.chain<string>(simpleString).collect<string>(stringListModifyingIterator).value();
        result = _.chain<string>(simpleString).collect<string>(stringListModifyingIterator, context).value();
        result = _.chain(simpleString).collect(stringListModifyingIterator).value();
        result = _.chain(simpleString).collect(stringListModifyingIterator, context).value();
    }

    // partial object iterator (nullable values always return false if any properties are specified and true if no properties are specified)
    {
        const array: (SimpleStringObject | undefined)[] = [{ a: 'a' }, { a: 'b' }, undefined];
        let result: boolean[];

        result = _.map<(SimpleStringObject | undefined)>(array, simpleStringObjectPartialPropertyMatch);
        result = _.map(array, simpleStringObjectPartialPropertyMatch);

        result = _<(SimpleStringObject | undefined)>(array).map(simpleStringObjectPartialPropertyMatch);
        result = _(array).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain<(SimpleStringObject | undefined)>(array).map(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(array).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect<(SimpleStringObject | undefined)>(array, simpleStringObjectPartialPropertyMatch);
        result = _.collect(array, simpleStringObjectPartialPropertyMatch);

        result = _<(SimpleStringObject | undefined)>(array).collect(simpleStringObjectPartialPropertyMatch);
        result = _(array).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain<(SimpleStringObject | undefined)>(array).collect(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(array).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        const list: _.List<(SimpleStringObject | undefined)> = { 0: { a: 'a' }, 1: { a: 'b' }, 2: undefined, length: 3 };
        let result: boolean[];

        result = _.map<(SimpleStringObject | undefined)>(list, simpleStringObjectPartialPropertyMatch);
        result = _.map(list, simpleStringObjectPartialPropertyMatch);

        result = _<(SimpleStringObject | undefined)>(list).map(simpleStringObjectPartialPropertyMatch);
        result = _(list).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain<(SimpleStringObject | undefined)>(list).map(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(list).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect<(SimpleStringObject | undefined)>(list, simpleStringObjectPartialPropertyMatch);
        result = _.collect(list, simpleStringObjectPartialPropertyMatch);

        result = _<(SimpleStringObject | undefined)>(list).collect(simpleStringObjectPartialPropertyMatch);
        result = _(list).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain<(SimpleStringObject | undefined)>(list).collect(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(list).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        const dict: _.Dictionary<(SimpleStringObject | undefined)> = { a: { a: 'a' }, b: { a: 'b' }, c: undefined };
        let result: boolean[];

        result = _.map<(SimpleStringObject | undefined)>(dict, simpleStringObjectPartialPropertyMatch);
        result = _.map(dict, simpleStringObjectPartialPropertyMatch);

        result = _<(SimpleStringObject | undefined)>(dict).map(simpleStringObjectPartialPropertyMatch);
        result = _(dict).map(simpleStringObjectPartialPropertyMatch);

        result = _.chain<(SimpleStringObject | undefined)>(dict).map(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(dict).map(simpleStringObjectPartialPropertyMatch).value();

        result = _.collect<(SimpleStringObject | undefined)>(dict, simpleStringObjectPartialPropertyMatch);
        result = _.collect(dict, simpleStringObjectPartialPropertyMatch);

        result = _<(SimpleStringObject | undefined)>(dict).collect(simpleStringObjectPartialPropertyMatch);
        result = _(dict).collect(simpleStringObjectPartialPropertyMatch);

        result = _.chain<(SimpleStringObject | undefined)>(dict).collect(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(dict).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator with nonnullable intersecting types
    {
        const array: ({ a: string, b: string } | { a: boolean, c: string })[] = [{ a: 'a', b: 'b' }, { a: true, c: 'c' }];
        let result: (string | boolean)[];

        result = _.map<{ a: string, b: string } | { a: boolean, c: string }, typeof simpleObjectPropertyName>(array, simpleObjectPropertyName);
        result = _.map(array, simpleObjectPropertyName);

        result = _<{ a: string, b: string } | { a: boolean, c: string }>(array).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(array).map(simpleObjectPropertyName);

        result = _.chain<{ a: string, b: string } | { a: boolean, c: string }>(array).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(array).map(simpleObjectPropertyName).value();

        result = _.collect<{ a: string, b: string } | { a: boolean, c: string }, typeof simpleObjectPropertyName>(array, simpleObjectPropertyName);
        result = _.collect(array, simpleObjectPropertyName);

        result = _<{ a: string, b: string } | { a: boolean, c: string }>(array).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(array).collect(simpleObjectPropertyName);

        result = _.chain<{ a: string, b: string } | { a: boolean, c: string }>(array).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(array).collect(simpleObjectPropertyName).value();
    }

    {
        const list: _.List<{ a: string, b: string } | { a: boolean, c: string }> = { 0: { a: 'a', b: 'b' }, 1: { a: true, c: 'c' }, length: 2 };
        let result: (string | boolean)[];

        result = _.map<{ a: string, b: string } | { a: boolean, c: string }, typeof simpleObjectPropertyName>(list, simpleObjectPropertyName);
        result = _.map(list, simpleObjectPropertyName);

        result = _<{ a: string, b: string } | { a: boolean, c: string }>(list).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(list).map(simpleObjectPropertyName);

        result = _.chain<{ a: string, b: string } | { a: boolean, c: string }>(list).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(list).map(simpleObjectPropertyName).value();

        result = _.collect<{ a: string, b: string } | { a: boolean, c: string }, typeof simpleObjectPropertyName>(list, simpleObjectPropertyName);
        result = _.collect(list, simpleObjectPropertyName);

        result = _<{ a: string, b: string } | { a: boolean, c: string }>(list).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(list).collect(simpleObjectPropertyName);

        result = _.chain<{ a: string, b: string } | { a: boolean, c: string }>(list).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(list).collect(simpleObjectPropertyName).value();
    }

    {
        const dict: _.Dictionary<{ a: string, b: string } | { a: boolean, c: string }> = { a: { a: 'a', b: 'b' }, b: { a: true, c: 'c' } };
        let result: (string | boolean)[];

        result = _.map<{ a: string, b: string } | { a: boolean, c: string }, typeof simpleObjectPropertyName>(dict, simpleObjectPropertyName);
        result = _.map(dict, simpleObjectPropertyName);

        result = _<{ a: string, b: string } | { a: boolean, c: string }>(dict).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(dict).map(simpleObjectPropertyName);

        result = _.chain<{ a: string, b: string } | { a: boolean, c: string }>(dict).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(dict).map(simpleObjectPropertyName).value();

        result = _.collect<{ a: string, b: string } | { a: boolean, c: string }, typeof simpleObjectPropertyName>(dict, simpleObjectPropertyName);
        result = _.collect(dict, simpleObjectPropertyName);

        result = _<{ a: string, b: string } | { a: boolean, c: string }>(dict).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(dict).collect(simpleObjectPropertyName);

        result = _.chain<{ a: string, b: string } | { a: boolean, c: string }>(dict).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(dict).collect(simpleObjectPropertyName).value();
    }

    // property name iterator with nullable types
    {
        const array: (SimpleStringObject | undefined)[] = [{ a: 'a' }, undefined];
        let result: (string | undefined)[];

        result = _.map<SimpleStringObject | undefined, typeof simpleObjectPropertyName>(array, simpleObjectPropertyName);
        result = _.map(array, simpleObjectPropertyName);

        result = _<SimpleStringObject | undefined>(array).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(array).map(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | undefined>(array).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(array).map(simpleObjectPropertyName).value();

        result = _.collect<SimpleStringObject | undefined, typeof simpleObjectPropertyName>(array, simpleObjectPropertyName);
        result = _.collect(array, simpleObjectPropertyName);

        result = _<SimpleStringObject | undefined>(array).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(array).collect(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | undefined>(array).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(array).collect(simpleObjectPropertyName).value();
    }

    {
        const list: _.List<(SimpleStringObject | undefined)> = { 0: { a: 'a' }, 1: undefined, length: 2 };
        let result: (string | undefined)[];

        result = _.map<SimpleStringObject | undefined, typeof simpleObjectPropertyName>(list, simpleObjectPropertyName);
        result = _.map(list, simpleObjectPropertyName);

        result = _<SimpleStringObject | undefined>(list).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(list).map(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | undefined>(list).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(list).map(simpleObjectPropertyName).value();

        result = _.collect<SimpleStringObject | undefined, typeof simpleObjectPropertyName>(list, simpleObjectPropertyName);
        result = _.collect(list, simpleObjectPropertyName);

        result = _<SimpleStringObject | undefined>(list).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(list).collect(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | undefined>(list).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(list).collect(simpleObjectPropertyName).value();
    }

    {
        const dict: _.Dictionary<(SimpleStringObject | undefined)> = { a: { a: 'a' }, b: undefined };
        let result: (string | undefined)[];

        result = _.map<SimpleStringObject | undefined, typeof simpleObjectPropertyName>(dict, simpleObjectPropertyName);
        result = _.map(dict, simpleObjectPropertyName);

        result = _<SimpleStringObject | undefined>(dict).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(dict).map(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | undefined>(dict).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(dict).map(simpleObjectPropertyName).value();

        result = _.collect<SimpleStringObject | undefined, typeof simpleObjectPropertyName>(dict, simpleObjectPropertyName);
        result = _.collect(dict, simpleObjectPropertyName);

        result = _<SimpleStringObject | undefined>(dict).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(dict).collect(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | undefined>(dict).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(dict).collect(simpleObjectPropertyName).value();
    }

    // property name iterator with a non-nullable non-intersecting types
    {
        const array: (SimpleStringObject | { b: string })[] = [{ a: 'a' }, { b: 'b' }];
        let result: (string | undefined)[];

        result = _.map<SimpleStringObject | { b: string }, typeof simpleObjectPropertyName>(array, simpleObjectPropertyName);
        result = _.map(array, simpleObjectPropertyName);

        result = _<SimpleStringObject | { b: string }>(array).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(array).map(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | { b: string }>(array).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(array).map(simpleObjectPropertyName).value();

        result = _.collect<SimpleStringObject | { b: string }, typeof simpleObjectPropertyName>(array, simpleObjectPropertyName);
        result = _.collect(array, simpleObjectPropertyName);

        result = _<SimpleStringObject | { b: string }>(array).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(array).collect(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | { b: string }>(array).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(array).collect(simpleObjectPropertyName).value();
    }

    {
        const list: _.List<SimpleStringObject | { b: string }> = { 0: { a: 'a' }, 1: { b: 'b' }, length: 2 };
        let result: (string | undefined)[];

        result = _.map<SimpleStringObject | { b: string }, typeof simpleObjectPropertyName>(list, simpleObjectPropertyName);
        result = _.map(list, simpleObjectPropertyName);

        result = _<SimpleStringObject | { b: string }>(list).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(list).map(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | { b: string }>(list).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(list).map(simpleObjectPropertyName).value();

        result = _.collect<SimpleStringObject | { b: string }, typeof simpleObjectPropertyName>(list, simpleObjectPropertyName);
        result = _.collect(list, simpleObjectPropertyName);

        result = _<SimpleStringObject | { b: string }>(list).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(list).collect(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | { b: string }>(list).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(list).collect(simpleObjectPropertyName).value();
    }

    {
        const dict: _.Dictionary<SimpleStringObject | { b: string }> = { a: { a: 'a' }, b: { b: 'b' } };
        let result: (string | undefined)[];

        result = _.map<SimpleStringObject | { b: string }, typeof simpleObjectPropertyName>(dict, simpleObjectPropertyName);
        result = _.map(dict, simpleObjectPropertyName);

        result = _<SimpleStringObject | { b: string }>(dict).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(dict).map(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | { b: string }>(dict).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(dict).map(simpleObjectPropertyName).value();

        result = _.collect<SimpleStringObject | { b: string }, typeof simpleObjectPropertyName>(dict, simpleObjectPropertyName);
        result = _.collect(dict, simpleObjectPropertyName);

        result = _<SimpleStringObject | { b: string }>(dict).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(dict).collect(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | { b: string }>(dict).collect<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(dict).collect(simpleObjectPropertyName).value();
    }
}

// reduce, foldl, inject
{
    {
        const memo = '';
        let result: string;

        result = _.reduce<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.reduce<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _.reduce(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.reduce(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).reduce<string>(simpleStringObjectListPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectArray).reduce<string>(simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectArray).reduce(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectArray).reduce(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).reduce<string>(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).reduce<string>(simpleStringObjectListPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectArray).reduce(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectArray).reduce(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.foldl<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.foldl<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _.foldl(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.foldl(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).foldl<string>(simpleStringObjectListPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectArray).foldl<string>(simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectArray).foldl(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectArray).foldl(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).foldl<string>(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).foldl<string>(simpleStringObjectListPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectArray).foldl(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectArray).foldl(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.inject<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.inject<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _.inject(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.inject(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).inject<string>(simpleStringObjectListPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectArray).inject<string>(simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectArray).inject(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectArray).inject(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).inject<string>(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).inject<string>(simpleStringObjectListPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectArray).inject(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectArray).inject(simpleStringObjectListPropertyMemoIterator, memo, context).value();
    }

    {
        const memo = '';
        let result: string;

        result = _.reduce<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.reduce<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _.reduce(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.reduce(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectList).reduce<string>(simpleStringObjectListPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectList).reduce<string>(simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectList).reduce(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectList).reduce(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).reduce<string>(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).reduce<string>(simpleStringObjectListPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectList).reduce(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectList).reduce(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.foldl<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.foldl<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _.foldl(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.foldl(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectList).foldl<string>(simpleStringObjectListPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectList).foldl<string>(simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectList).foldl(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectList).foldl(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).foldl<string>(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).foldl<string>(simpleStringObjectListPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectList).foldl(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectList).foldl(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.inject<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.inject<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _.inject(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.inject(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectList).inject<string>(simpleStringObjectListPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectList).inject<string>(simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectList).inject(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectList).inject(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).inject<string>(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).inject<string>(simpleStringObjectListPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectList).inject(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectList).inject(simpleStringObjectListPropertyMemoIterator, memo, context).value();
    }

    {
        const memo = '';
        let result: string;

        result = _.reduce<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.reduce<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);
        result = _.reduce(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.reduce(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).reduce<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).reduce<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectDictionary).reduce(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _(simpleStringObjectDictionary).reduce(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).reduce<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).reduce<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectDictionary).reduce(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectDictionary).reduce(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();

        result = _.foldl<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.foldl<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);
        result = _.foldl(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.foldl(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).foldl<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).foldl<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectDictionary).foldl(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _(simpleStringObjectDictionary).foldl(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).foldl<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).foldl<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectDictionary).foldl(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectDictionary).foldl(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();

        result = _.inject<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.inject<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);
        result = _.inject(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.inject(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).inject<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).inject<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).inject<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).inject<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).inject<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).inject<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectDictionary).inject(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();
    }

    {
        const memo: _.Dictionary<number> = {};
        let result: _.Dictionary<number>;

        result = _.reduce<string, _.Dictionary<number>>(simpleString, stringListMemoIterator, memo);
        result = _.reduce<string, _.Dictionary<number>>(simpleString, stringListMemoIterator, memo, context);
        result = _.reduce(simpleString, stringListMemoIterator, memo);
        result = _.reduce(simpleString, stringListMemoIterator, memo, context);

        result = _<string>(simpleString).reduce<_.Dictionary<number>>(stringListMemoIterator, memo);
        result = _<string>(simpleString).reduce<_.Dictionary<number>>(stringListMemoIterator, memo, context);
        result = _(simpleString).reduce(stringListMemoIterator, memo);
        result = _(simpleString).reduce(stringListMemoIterator, memo, context);

        result = _.chain<string>(simpleString).reduce<_.Dictionary<number>>(stringListMemoIterator, memo).value();
        result = _.chain<string>(simpleString).reduce<_.Dictionary<number>>(stringListMemoIterator, memo, context).value();
        result = _.chain(simpleString).reduce(stringListMemoIterator, memo).value();
        result = _.chain(simpleString).reduce(stringListMemoIterator, memo, context).value();

        result = _.foldl<string, _.Dictionary<number>>(simpleString, stringListMemoIterator, memo);
        result = _.foldl<string, _.Dictionary<number>>(simpleString, stringListMemoIterator, memo, context);
        result = _.foldl(simpleString, stringListMemoIterator, memo);
        result = _.foldl(simpleString, stringListMemoIterator, memo, context);

        result = _<string>(simpleString).foldl<_.Dictionary<number>>(stringListMemoIterator, memo);
        result = _<string>(simpleString).foldl<_.Dictionary<number>>(stringListMemoIterator, memo, context);
        result = _(simpleString).foldl(stringListMemoIterator, memo);
        result = _(simpleString).foldl(stringListMemoIterator, memo, context);

        result = _.chain<string>(simpleString).foldl<_.Dictionary<number>>(stringListMemoIterator, memo).value();
        result = _.chain<string>(simpleString).foldl<_.Dictionary<number>>(stringListMemoIterator, memo, context).value();
        result = _.chain(simpleString).foldl(stringListMemoIterator, memo).value();
        result = _.chain(simpleString).foldl(stringListMemoIterator, memo, context).value();

        result = _.inject<string, _.Dictionary<number>>(simpleString, stringListMemoIterator, memo);
        result = _.inject<string, _.Dictionary<number>>(simpleString, stringListMemoIterator, memo, context);
        result = _.inject(simpleString, stringListMemoIterator, memo);
        result = _.inject(simpleString, stringListMemoIterator, memo, context);

        result = _<string>(simpleString).inject<_.Dictionary<number>>(stringListMemoIterator, memo);
        result = _<string>(simpleString).inject<_.Dictionary<number>>(stringListMemoIterator, memo, context);
        result = _(simpleString).inject(stringListMemoIterator, memo);
        result = _(simpleString).inject(stringListMemoIterator, memo, context);

        result = _.chain<string>(simpleString).inject<_.Dictionary<number>>(stringListMemoIterator, memo).value();
        result = _.chain<string>(simpleString).inject<_.Dictionary<number>>(stringListMemoIterator, memo, context).value();
        result = _.chain(simpleString).inject(stringListMemoIterator, memo).value();
        result = _.chain(simpleString).inject(stringListMemoIterator, memo, context).value();
    }
}

// reduceRight, foldr
{
    {
        const memo = '';
        let result: string;

        result = _.reduceRight<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.reduceRight<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _.reduceRight(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.reduceRight(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).reduceRight<string>(simpleStringObjectListPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectArray).reduceRight<string>(simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectArray).reduceRight(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectArray).reduceRight(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).reduceRight<string>(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).reduceRight<string>(simpleStringObjectListPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectArray).reduceRight(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectArray).reduceRight(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.foldr<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.foldr<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _.foldr(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.foldr(simpleStringObjectArray, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).foldr<string>(simpleStringObjectListPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectArray).foldr<string>(simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).foldr<string>(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).foldr<string>(simpleStringObjectListPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).foldr<string>(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).foldr<string>(simpleStringObjectListPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectArray).foldr(simpleStringObjectListPropertyMemoIterator, memo, context).value();
    }

    {
        const memo = '';
        let result: string;

        result = _.reduceRight<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.reduceRight<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _.reduceRight(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.reduceRight(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectList).reduceRight<string>(simpleStringObjectListPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectList).reduceRight<string>(simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectList).reduceRight(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectList).reduceRight(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).reduceRight<string>(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).reduceRight<string>(simpleStringObjectListPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectList).reduceRight(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectList).reduceRight(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.foldr<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.foldr<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _.foldr(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo);
        result = _.foldr(simpleStringObjectList, simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectList).foldr<string>(simpleStringObjectListPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectList).foldr<string>(simpleStringObjectListPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, memo);
        result = _(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).foldr<string>(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).foldr<string>(simpleStringObjectListPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, memo, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).foldr<string>(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).foldr<string>(simpleStringObjectListPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectList).foldr(simpleStringObjectListPropertyMemoIterator, memo, context).value();
    }

    {
        const memo = '';
        let result: string;

        result = _.reduceRight<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.reduceRight<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);
        result = _.reduceRight(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.reduceRight(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).reduceRight<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).reduceRight<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectDictionary).reduceRight(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _(simpleStringObjectDictionary).reduceRight(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).reduceRight<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).reduceRight<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectDictionary).reduceRight(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectDictionary).reduceRight(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();

        result = _.foldr<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.foldr<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);
        result = _.foldr(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _.foldr(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).foldr<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).foldr<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);
        result = _(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, memo);
        result = _(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, memo, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).foldr<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).foldr<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).foldr<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).foldr<string>(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();
        result = _.chain(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, memo).value();
        result = _.chain(simpleStringObjectDictionary).foldr(simpleStringObjectDictionaryPropertyMemoIterator, memo, context).value();
    }

    {
        const memo: _.Dictionary<number> = {};
        let result: _.Dictionary<number>;

        result = _.reduceRight<string, _.Dictionary<number>>(simpleString, stringListMemoIterator, memo);
        result = _.reduceRight<string, _.Dictionary<number>>(simpleString, stringListMemoIterator, memo, context);
        result = _.reduceRight(simpleString, stringListMemoIterator, memo);
        result = _.reduceRight(simpleString, stringListMemoIterator, memo, context);

        result = _<string>(simpleString).reduceRight<_.Dictionary<number>>(stringListMemoIterator, memo);
        result = _<string>(simpleString).reduceRight<_.Dictionary<number>>(stringListMemoIterator, memo, context);
        result = _(simpleString).reduceRight(stringListMemoIterator, memo);
        result = _(simpleString).reduceRight(stringListMemoIterator, memo, context);

        result = _.chain<string>(simpleString).reduceRight<_.Dictionary<number>>(stringListMemoIterator, memo).value();
        result = _.chain<string>(simpleString).reduceRight<_.Dictionary<number>>(stringListMemoIterator, memo, context).value();
        result = _.chain(simpleString).reduceRight(stringListMemoIterator, memo).value();
        result = _.chain(simpleString).reduceRight(stringListMemoIterator, memo, context).value();

        result = _.foldr<string, _.Dictionary<number>>(simpleString, stringListMemoIterator, memo);
        result = _.foldr<string, _.Dictionary<number>>(simpleString, stringListMemoIterator, memo, context);
        result = _.foldr(simpleString, stringListMemoIterator, memo);
        result = _.foldr(simpleString, stringListMemoIterator, memo, context);

        result = _<string>(simpleString).foldr<_.Dictionary<number>>(stringListMemoIterator, memo);
        result = _<string>(simpleString).foldr<_.Dictionary<number>>(stringListMemoIterator, memo, context);
        result = _(simpleString).foldr(stringListMemoIterator, memo);
        result = _(simpleString).foldr(stringListMemoIterator, memo, context);

        result = _.chain<string>(simpleString).foldr<_.Dictionary<number>>(stringListMemoIterator, memo).value();
        result = _.chain<string>(simpleString).foldr<_.Dictionary<number>>(stringListMemoIterator, memo, context).value();
        result = _.chain(simpleString).foldr(stringListMemoIterator, memo).value();
        result = _.chain(simpleString).foldr(stringListMemoIterator, memo, context).value();
    }
}

// find, detect
{
    // function iterator
    {
        let result: {a: string} | undefined;

        result = _.find<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.find<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);
        result = _.find(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.find(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).find(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.detect<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.detect<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);
        result = _.detect(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.detect(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).detect(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: SimpleStringObject | undefined;

        result = _.find<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.find<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);
        result = _.find(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.find(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).find(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.detect<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.detect<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);
        result = _.detect(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.detect(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).detect(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: SimpleStringObject | undefined;

        result = _.find<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.find<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _.find(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.find(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).find(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.detect<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.detect<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _.detect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.detect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).detect(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
    }

    {
        let result: string | undefined;

        result = _.find<string>(simpleString, stringListComparingIterator);
        result = _.find<string>(simpleString, stringListComparingIterator, context);
        result = _.find(simpleString, stringListComparingIterator);
        result = _.find(simpleString, stringListComparingIterator, context);

        result = _<string>(simpleString).find(stringListComparingIterator);
        result = _<string>(simpleString).find(stringListComparingIterator, context);
        result = _(simpleString).find(stringListComparingIterator);
        result = _(simpleString).find(stringListComparingIterator, context);

        result = _.chain<string>(simpleString).find(stringListComparingIterator).value();
        result = _.chain<string>(simpleString).find(stringListComparingIterator, context).value();
        result = _.chain(simpleString).find(stringListComparingIterator).value();
        result = _.chain(simpleString).find(stringListComparingIterator, context).value();

        result = _.detect<string>(simpleString, stringListComparingIterator);
        result = _.detect<string>(simpleString, stringListComparingIterator, context);
        result = _.detect(simpleString, stringListComparingIterator);
        result = _.detect(simpleString, stringListComparingIterator, context);

        result = _<string>(simpleString).detect(stringListComparingIterator);
        result = _<string>(simpleString).detect(stringListComparingIterator, context);
        result = _(simpleString).detect(stringListComparingIterator);
        result = _(simpleString).detect(stringListComparingIterator, context);

        result = _.chain<string>(simpleString).detect(stringListComparingIterator).value();
        result = _.chain<string>(simpleString).detect(stringListComparingIterator, context).value();
        result = _.chain(simpleString).detect(stringListComparingIterator).value();
        result = _.chain(simpleString).detect(stringListComparingIterator, context).value();
    }

    // partial object iterator
    {
        let result: SimpleStringObject | undefined;

        result = _.find<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        result = _.find(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectArray).find(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectArray).find(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).find(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).find(simpleStringObjectPartialPropertyMatch).value();

        result = _.detect<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        result = _.detect(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectArray).detect(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectArray).detect(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).detect(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).detect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject | undefined;

        result = _.find<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        result = _.find(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectList).find(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectList).find(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).find(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).find(simpleStringObjectPartialPropertyMatch).value();

        result = _.detect<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        result = _.detect(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectList).detect(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectList).detect(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).detect(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).detect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject | undefined;

        result = _.find<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        result = _.find(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).find(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectDictionary).find(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).find(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).find(simpleStringObjectPartialPropertyMatch).value();

        result = _.detect<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        result = _.detect(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).detect(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectDictionary).detect(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).detect(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).detect(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator
    {
        let result: SimpleStringObject | undefined;

        result = _.find<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.find(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).find(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).find(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).find(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).find(simpleObjectPropertyName).value();

        result = _.detect<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.detect(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).detect(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).detect(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).detect(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).detect(simpleObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject | undefined;

        result = _.find<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.find(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).find(simpleObjectPropertyName);
        result = _(simpleStringObjectList).find(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).find(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).find(simpleObjectPropertyName).value();

        result = _.detect<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.detect(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).detect(simpleObjectPropertyName);
        result = _(simpleStringObjectList).detect(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).detect(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).detect(simpleObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject | undefined;

        result = _.find<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.find(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).find(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).find(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).find(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).find(simpleObjectPropertyName).value();

        result = _.detect<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.detect(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).detect(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).detect(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).detect(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).detect(simpleObjectPropertyName).value();
    }
}

// filter, select
{
    // function iterator
    {
        let result: SimpleStringObject[];

        result = _.filter<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.filter<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);
        result = _.filter(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.filter(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).filter(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.select<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.select<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);
        result = _.select(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.select(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).select(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.filter<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.filter<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);
        result = _.filter(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.filter(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).filter(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.select<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.select<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);
        result = _.select(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.select(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).select(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.filter<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.filter<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _.filter(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.filter(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).filter(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.select<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.select<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _.select(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.select(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).select(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
    }

    {
        let result: string[];

        result = _.filter<string>(simpleString, stringListComparingIterator);
        result = _.filter<string>(simpleString, stringListComparingIterator, context);
        result = _.filter(simpleString, stringListComparingIterator);
        result = _.filter(simpleString, stringListComparingIterator, context);

        result = _<string>(simpleString).filter(stringListComparingIterator);
        result = _<string>(simpleString).filter(stringListComparingIterator, context);
        result = _(simpleString).filter(stringListComparingIterator);
        result = _(simpleString).filter(stringListComparingIterator, context);

        result = _.chain<string>(simpleString).filter(stringListComparingIterator).value();
        result = _.chain<string>(simpleString).filter(stringListComparingIterator, context).value();
        result = _.chain(simpleString).filter(stringListComparingIterator).value();
        result = _.chain(simpleString).filter(stringListComparingIterator, context).value();

        result = _.select<string>(simpleString, stringListComparingIterator);
        result = _.select<string>(simpleString, stringListComparingIterator, context);
        result = _.select(simpleString, stringListComparingIterator);
        result = _.select(simpleString, stringListComparingIterator, context);

        result = _<string>(simpleString).select(stringListComparingIterator);
        result = _<string>(simpleString).select(stringListComparingIterator, context);
        result = _(simpleString).select(stringListComparingIterator);
        result = _(simpleString).select(stringListComparingIterator, context);

        result = _.chain<string>(simpleString).select(stringListComparingIterator).value();
        result = _.chain<string>(simpleString).select(stringListComparingIterator, context).value();
        result = _.chain(simpleString).select(stringListComparingIterator).value();
        result = _.chain(simpleString).select(stringListComparingIterator, context).value();
    }

    // partial object iterator
    {
        let result: SimpleStringObject[];

        result = _.filter<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        result = _.filter(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectArray).filter(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectArray).filter(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).filter(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).filter(simpleStringObjectPartialPropertyMatch).value();

        result = _.select<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        result = _.select(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectArray).select(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectArray).select(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).select(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).select(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.filter<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        result = _.filter(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectList).filter(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectList).filter(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).filter(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).filter(simpleStringObjectPartialPropertyMatch).value();

        result = _.select<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        result = _.select(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectList).select(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectList).select(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).select(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).select(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.filter<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        result = _.filter(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).filter(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectDictionary).filter(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).filter(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).filter(simpleStringObjectPartialPropertyMatch).value();

        result = _.select<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        result = _.select(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).select(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectDictionary).select(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).select(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).select(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator
    {
        let result: SimpleStringObject[];

        result = _.filter<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.filter(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).filter(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).filter(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).filter(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).filter(simpleObjectPropertyName).value();

        result = _.select<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.select(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).select(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).select(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).select(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).select(simpleObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.filter<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.filter(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).filter(simpleObjectPropertyName);
        result = _(simpleStringObjectList).filter(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).filter(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).filter(simpleObjectPropertyName).value();

        result = _.select<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.select(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).select(simpleObjectPropertyName);
        result = _(simpleStringObjectList).select(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).select(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).select(simpleObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.filter<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.filter(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).filter(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).filter(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).filter(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).filter(simpleObjectPropertyName).value();

        result = _.select<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.select(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).select(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).select(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).select(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).select(simpleObjectPropertyName).value();
    }
}

// where
{
    {
        let result: SimpleStringObject[];

        result = _.where<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        result = _.where(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectArray).where(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectArray).where(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).where(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).where(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).where(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).where(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.where<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        result = _.where(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectList).where(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectList).where(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).where(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).where(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).where(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).where(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.where<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        result = _.where(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).where(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectDictionary).where(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).where(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).where(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).where(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).where(simpleStringObjectPartialPropertyMatch).value();
    }
}

// findWhere
{
    {
        let result: SimpleStringObject | undefined;

        result = _.findWhere<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        result = _.findWhere(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectArray).findWhere(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectArray).findWhere(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).findWhere(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).findWhere(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).findWhere(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).findWhere(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject | undefined;

        result = _.findWhere<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        result = _.findWhere(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectList).findWhere(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectList).findWhere(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).findWhere(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).findWhere(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).findWhere(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).findWhere(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject | undefined;

        result = _.findWhere<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        result = _.findWhere(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).findWhere(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectDictionary).findWhere(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).findWhere(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).findWhere(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).findWhere(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).findWhere(simpleStringObjectPartialPropertyMatch).value();
    }
}

// reject
{
    // function iterator
    {
        let result: SimpleStringObject[];

        result = _.reject<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.reject<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);
        result = _.reject(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.reject(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).reject(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.reject<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.reject<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);
        result = _.reject(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.reject(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).reject(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.reject<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.reject<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _.reject(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.reject(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).reject(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
    }

    {
        let result: string[];

        result = _.reject<string>(simpleString, stringListComparingIterator);
        result = _.reject<string>(simpleString, stringListComparingIterator, context);
        result = _.reject(simpleString, stringListComparingIterator);
        result = _.reject(simpleString, stringListComparingIterator, context);

        result = _<string>(simpleString).reject(stringListComparingIterator);
        result = _<string>(simpleString).reject(stringListComparingIterator, context);
        result = _(simpleString).reject(stringListComparingIterator);
        result = _(simpleString).reject(stringListComparingIterator, context);

        result = _.chain<string>(simpleString).reject(stringListComparingIterator).value();
        result = _.chain<string>(simpleString).reject(stringListComparingIterator, context).value();
        result = _.chain(simpleString).reject(stringListComparingIterator).value();
        result = _.chain(simpleString).reject(stringListComparingIterator, context).value();
    }

    // partial object iterator
    {
        let result: SimpleStringObject[];

        result = _.reject<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        result = _.reject(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectArray).reject(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectArray).reject(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).reject(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).reject(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.reject<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        result = _.reject(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectList).reject(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectList).reject(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).reject(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).reject(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.reject<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        result = _.reject(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).reject(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectDictionary).reject(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).reject(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).reject(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator
    {
        let result: SimpleStringObject[];

        result = _.reject<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.reject(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).reject(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).reject(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).reject(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).reject(simpleObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.reject<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.reject(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).reject(simpleObjectPropertyName);
        result = _(simpleStringObjectList).reject(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).reject(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).reject(simpleObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.reject<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.reject(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).reject(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).reject(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).reject(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).reject(simpleObjectPropertyName).value();
    }
}

// every, all
{
    // function iterator
    {
        let result: boolean;

        result = _.every<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.every<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);
        result = _.every(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.every(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).every(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.all<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.all<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);
        result = _.all(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.all(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).all(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: boolean;

        result = _.every<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.every<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);
        result = _.every(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.every(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).every(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.all<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.all<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);
        result = _.all(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.all(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).all(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: boolean;

        result = _.every<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.every<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _.every(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.every(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).every(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.all<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.all<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _.all(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.all(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).all(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
    }

    {
        let result: boolean;

        result = _.every<string>(simpleString, stringListComparingIterator);
        result = _.every<string>(simpleString, stringListComparingIterator, context);
        result = _.every(simpleString, stringListComparingIterator);
        result = _.every(simpleString, stringListComparingIterator, context);

        result = _<string>(simpleString).every(stringListComparingIterator);
        result = _<string>(simpleString).every(stringListComparingIterator, context);
        result = _(simpleString).every(stringListComparingIterator);
        result = _(simpleString).every(stringListComparingIterator, context);

        result = _.chain<string>(simpleString).every(stringListComparingIterator).value();
        result = _.chain<string>(simpleString).every(stringListComparingIterator, context).value();
        result = _.chain(simpleString).every(stringListComparingIterator).value();
        result = _.chain(simpleString).every(stringListComparingIterator, context).value();

        result = _.all<string>(simpleString, stringListComparingIterator);
        result = _.all<string>(simpleString, stringListComparingIterator, context);
        result = _.all(simpleString, stringListComparingIterator);
        result = _.all(simpleString, stringListComparingIterator, context);

        result = _<string>(simpleString).all(stringListComparingIterator);
        result = _<string>(simpleString).all(stringListComparingIterator, context);
        result = _(simpleString).all(stringListComparingIterator);
        result = _(simpleString).all(stringListComparingIterator, context);

        result = _.chain<string>(simpleString).all(stringListComparingIterator).value();
        result = _.chain<string>(simpleString).all(stringListComparingIterator, context).value();
        result = _.chain(simpleString).all(stringListComparingIterator).value();
        result = _.chain(simpleString).all(stringListComparingIterator, context).value();
    }

    // partial object iterator
    {
        let result: boolean;

        result = _.every<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        result = _.every(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectArray).every(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectArray).every(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).every(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).every(simpleStringObjectPartialPropertyMatch).value();

        result = _.all<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        result = _.all(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectArray).all(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectArray).all(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).all(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).all(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean;

        result = _.every<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        result = _.every(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectList).every(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectList).every(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).every(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).every(simpleStringObjectPartialPropertyMatch).value();

        result = _.all<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        result = _.all(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectList).all(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectList).all(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).all(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).all(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean;

        result = _.every<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        result = _.every(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).every(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectDictionary).every(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).every(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).every(simpleStringObjectPartialPropertyMatch).value();

        result = _.all<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        result = _.all(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).all(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectDictionary).all(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).all(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).all(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator
    {
        let result: boolean;

        result = _.every<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.every(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).every(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).every(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).every(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).every(simpleObjectPropertyName).value();

        result = _.all<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.all(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).all(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).all(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).all(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).all(simpleObjectPropertyName).value();
    }

    {
        let result: boolean;

        result = _.every<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.every(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).every(simpleObjectPropertyName);
        result = _(simpleStringObjectList).every(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).every(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).every(simpleObjectPropertyName).value();

        result = _.all<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.all(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).all(simpleObjectPropertyName);
        result = _(simpleStringObjectList).all(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).all(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).all(simpleObjectPropertyName).value();
    }

    {
        let result: boolean;

        result = _.every<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.every(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).every(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).every(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).every(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).every(simpleObjectPropertyName).value();

        result = _.all<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.all(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).all(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).all(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).all(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).all(simpleObjectPropertyName).value();
    }
}

// some, any
{
    // function iterator
    {
        let result: boolean;

        result = _.some<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.some<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);
        result = _.some(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.some(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).some(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.any<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.any<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);
        result = _.any(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.any(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).any(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: boolean;

        result = _.some<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.some<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);
        result = _.some(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.some(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).some(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.any<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.any<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);
        result = _.any(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.any(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).any(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: boolean;

        result = _.some<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.some<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _.some(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.some(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).some(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.any<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.any<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _.any(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.any(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).any(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
    }

    {
        let result: boolean;

        result = _.some<string>(simpleString, stringListComparingIterator);
        result = _.some<string>(simpleString, stringListComparingIterator, context);
        result = _.some(simpleString, stringListComparingIterator);
        result = _.some(simpleString, stringListComparingIterator, context);

        result = _<string>(simpleString).some(stringListComparingIterator);
        result = _<string>(simpleString).some(stringListComparingIterator, context);
        result = _(simpleString).some(stringListComparingIterator);
        result = _(simpleString).some(stringListComparingIterator, context);

        result = _.chain<string>(simpleString).some(stringListComparingIterator).value();
        result = _.chain<string>(simpleString).some(stringListComparingIterator, context).value();
        result = _.chain(simpleString).some(stringListComparingIterator).value();
        result = _.chain(simpleString).some(stringListComparingIterator, context).value();

        result = _.any<string>(simpleString, stringListComparingIterator);
        result = _.any<string>(simpleString, stringListComparingIterator, context);
        result = _.any(simpleString, stringListComparingIterator);
        result = _.any(simpleString, stringListComparingIterator, context);

        result = _<string>(simpleString).any(stringListComparingIterator);
        result = _<string>(simpleString).any(stringListComparingIterator, context);
        result = _(simpleString).any(stringListComparingIterator);
        result = _(simpleString).any(stringListComparingIterator, context);

        result = _.chain<string>(simpleString).any(stringListComparingIterator).value();
        result = _.chain<string>(simpleString).any(stringListComparingIterator, context).value();
        result = _.chain(simpleString).any(stringListComparingIterator).value();
        result = _.chain(simpleString).any(stringListComparingIterator, context).value();
    }

    // partial object iterator
    {
        let result: boolean;

        result = _.some<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        result = _.some(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectArray).some(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectArray).some(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).some(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).some(simpleStringObjectPartialPropertyMatch).value();

        result = _.any<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        result = _.any(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectArray).any(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectArray).any(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).any(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).any(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean;

        result = _.some<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        result = _.some(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectList).some(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectList).some(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).some(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).some(simpleStringObjectPartialPropertyMatch).value();

        result = _.any<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        result = _.any(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectList).any(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectList).any(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).any(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).any(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean;

        result = _.some<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        result = _.some(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).some(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectDictionary).some(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).some(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).some(simpleStringObjectPartialPropertyMatch).value();

        result = _.any<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        result = _.any(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).any(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectDictionary).any(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).any(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).any(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator
    {
        let result: boolean;

        result = _.some<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.some(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).some(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).some(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).some(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).some(simpleObjectPropertyName).value();

        result = _.any<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.any(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).any(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).any(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).any(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).any(simpleObjectPropertyName).value();
    }

    {
        let result: boolean;

        result = _.some<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.some(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).some(simpleObjectPropertyName);
        result = _(simpleStringObjectList).some(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).some(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).some(simpleObjectPropertyName).value();

        result = _.any<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.any(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).any(simpleObjectPropertyName);
        result = _(simpleStringObjectList).any(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).any(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).any(simpleObjectPropertyName).value();
    }

    {
        let result: boolean;

        result = _.some<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.some(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).some(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).some(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).some(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).some(simpleObjectPropertyName).value();

        result = _.any<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.any(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).any(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).any(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).any(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).any(simpleObjectPropertyName).value();
    }
}

// contains, include, includes
{
    const fromIndex = 1;

    {
        const value = simpleStringObjectArray[0];
        let result: boolean;

        result = _.contains<SimpleStringObject>(simpleStringObjectArray, value);
        result = _.contains<SimpleStringObject>(simpleStringObjectArray, value, fromIndex);
        result = _.contains(simpleStringObjectArray, value);
        result = _.contains(simpleStringObjectArray, value, fromIndex);

        result = _<SimpleStringObject>(simpleStringObjectArray).contains(value);
        result = _<SimpleStringObject>(simpleStringObjectArray).contains(value, fromIndex);
        result = _(simpleStringObjectArray).contains(value);
        result = _(simpleStringObjectArray).contains(value, fromIndex);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).contains(value).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).contains(value, fromIndex).value();
        result = _.chain(simpleStringObjectArray).contains(value).value();
        result = _.chain(simpleStringObjectArray).contains(value, fromIndex).value();

        result = _.include<SimpleStringObject>(simpleStringObjectArray, value);
        result = _.include<SimpleStringObject>(simpleStringObjectArray, value, fromIndex);
        result = _.include(simpleStringObjectArray, value);
        result = _.include(simpleStringObjectArray, value, fromIndex);

        result = _<SimpleStringObject>(simpleStringObjectArray).include(value);
        result = _<SimpleStringObject>(simpleStringObjectArray).include(value, fromIndex);
        result = _(simpleStringObjectArray).include(value);
        result = _(simpleStringObjectArray).include(value, fromIndex);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).include(value).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).include(value, fromIndex).value();
        result = _.chain(simpleStringObjectArray).include(value).value();
        result = _.chain(simpleStringObjectArray).include(value, fromIndex).value();

        result = _.includes<SimpleStringObject>(simpleStringObjectArray, value);
        result = _.includes<SimpleStringObject>(simpleStringObjectArray, value, fromIndex);
        result = _.includes(simpleStringObjectArray, value);
        result = _.includes(simpleStringObjectArray, value, fromIndex);

        result = _<SimpleStringObject>(simpleStringObjectArray).includes(value);
        result = _<SimpleStringObject>(simpleStringObjectArray).includes(value, fromIndex);
        result = _(simpleStringObjectArray).includes(value);
        result = _(simpleStringObjectArray).includes(value, fromIndex);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).includes(value).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).includes(value, fromIndex).value();
        result = _.chain(simpleStringObjectArray).includes(value).value();
        result = _.chain(simpleStringObjectArray).includes(value, fromIndex).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).includes(value).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).includes(value, fromIndex).value();
        result = _.chain(simpleStringObjectArray).includes(value).value();
        result = _.chain(simpleStringObjectArray).includes(value, fromIndex).value();
    }

    {
        const value = simpleStringObjectList[0];
        let result: boolean;

        result = _.contains<SimpleStringObject>(simpleStringObjectList, value);
        result = _.contains<SimpleStringObject>(simpleStringObjectList, value, fromIndex);
        result = _.contains(simpleStringObjectList, value);
        result = _.contains(simpleStringObjectList, value, fromIndex);

        result = _<SimpleStringObject>(simpleStringObjectList).contains(value);
        result = _<SimpleStringObject>(simpleStringObjectList).contains(value, fromIndex);
        result = _(simpleStringObjectList).contains(value);
        result = _(simpleStringObjectList).contains(value, fromIndex);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).contains(value).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).contains(value, fromIndex).value();
        result = _.chain(simpleStringObjectList).contains(value).value();
        result = _.chain(simpleStringObjectList).contains(value, fromIndex).value();

        result = _.include<SimpleStringObject>(simpleStringObjectList, value);
        result = _.include<SimpleStringObject>(simpleStringObjectList, value, fromIndex);
        result = _.include(simpleStringObjectList, value);
        result = _.include(simpleStringObjectList, value, fromIndex);

        result = _<SimpleStringObject>(simpleStringObjectList).include(value);
        result = _<SimpleStringObject>(simpleStringObjectList).include(value, fromIndex);
        result = _(simpleStringObjectList).include(value);
        result = _(simpleStringObjectList).include(value, fromIndex);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).include(value).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).include(value, fromIndex).value();
        result = _.chain(simpleStringObjectList).include(value).value();
        result = _.chain(simpleStringObjectList).include(value, fromIndex).value();

        result = _.includes<SimpleStringObject>(simpleStringObjectList, value);
        result = _.includes<SimpleStringObject>(simpleStringObjectList, value, fromIndex);
        result = _.includes(simpleStringObjectList, value);
        result = _.includes(simpleStringObjectList, value, fromIndex);

        result = _<SimpleStringObject>(simpleStringObjectList).includes(value);
        result = _<SimpleStringObject>(simpleStringObjectList).includes(value, fromIndex);
        result = _(simpleStringObjectList).includes(value);
        result = _(simpleStringObjectList).includes(value, fromIndex);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).includes(value).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).includes(value, fromIndex).value();
        result = _.chain(simpleStringObjectList).includes(value).value();
        result = _.chain(simpleStringObjectList).includes(value, fromIndex).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).includes(value).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).includes(value, fromIndex).value();
        result = _.chain(simpleStringObjectList).includes(value).value();
        result = _.chain(simpleStringObjectList).includes(value, fromIndex).value();
    }

    {
        const value = simpleStringObjectDictionary.a;
        let result: boolean;

        result = _.contains<SimpleStringObject>(simpleStringObjectDictionary, value);
        result = _.contains(simpleStringObjectDictionary, value);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).contains(value);
        result = _(simpleStringObjectDictionary).contains(value);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).contains(value).value();
        result = _.chain(simpleStringObjectDictionary).contains(value).value();

        result = _.include<SimpleStringObject>(simpleStringObjectDictionary, value);
        result = _.include(simpleStringObjectDictionary, value);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).include(value);
        result = _(simpleStringObjectDictionary).include(value);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).include(value).value();
        result = _.chain(simpleStringObjectDictionary).include(value).value();

        result = _.includes<SimpleStringObject>(simpleStringObjectDictionary, value);
        result = _.includes(simpleStringObjectDictionary, value);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).includes(value);
        result = _(simpleStringObjectDictionary).includes(value);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).includes(value).value();
        result = _.chain(simpleStringObjectDictionary).includes(value).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).includes(value).value();
        result = _.chain(simpleStringObjectDictionary).includes(value).value();
    }

    {
        const value = simpleString[0];
        let result: boolean;

        result = _.contains<string>(simpleString, value);
        result = _.contains<string>(simpleString, value, fromIndex);
        result = _.contains(simpleString, value);
        result = _.contains(simpleString, value, fromIndex);

        result = _<string>(simpleString).contains(value);
        result = _<string>(simpleString).contains(value, fromIndex);
        result = _(simpleString).contains(value);
        result = _(simpleString).contains(value, fromIndex);

        result = _.chain<string>(simpleString).contains(value).value();
        result = _.chain<string>(simpleString).contains(value, fromIndex).value();
        result = _.chain(simpleString).contains(value).value();
        result = _.chain(simpleString).contains(value, fromIndex).value();

        result = _.include<string>(simpleString, value);
        result = _.include<string>(simpleString, value, fromIndex);
        result = _.include(simpleString, value);
        result = _.include(simpleString, value, fromIndex);

        result = _<string>(simpleString).include(value);
        result = _<string>(simpleString).include(value, fromIndex);
        result = _(simpleString).include(value);
        result = _(simpleString).include(value, fromIndex);

        result = _.chain<string>(simpleString).include(value).value();
        result = _.chain<string>(simpleString).include(value, fromIndex).value();
        result = _.chain(simpleString).include(value).value();
        result = _.chain(simpleString).include(value, fromIndex).value();

        result = _.includes<string>(simpleString, value);
        result = _.includes<string>(simpleString, value, fromIndex);
        result = _.includes(simpleString, value);
        result = _.includes(simpleString, value, fromIndex);

        result = _<string>(simpleString).includes(value);
        result = _<string>(simpleString).includes(value, fromIndex);
        result = _(simpleString).includes(value);
        result = _(simpleString).includes(value, fromIndex);

        result = _.chain<string>(simpleString).includes(value).value();
        result = _.chain<string>(simpleString).includes(value, fromIndex).value();
        result = _.chain(simpleString).includes(value).value();
        result = _.chain(simpleString).includes(value, fromIndex).value();
    }
}

// invoke
// once TS 3.6 is reached as a minimum version, as a breaking change, consider updating invoke to be the following:
// type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
// invoke<T extends {}, TFunctionProperty extends FunctionPropertyNames<T>>(list: _.List<T>, methodName: TFunctionProperty, ...args: Parameters<T[TFunctionProperty]>): ReturnType<T[TFunctionProperty]>[];
{

    // without parameters
    {
        let result: number[];

        result = _.invoke<SimpleNoParameterFunctionObject>(simpleNoParameterFunctionObjectArray, simpleObjectPropertyName);
        result = _.invoke(simpleNoParameterFunctionObjectArray, simpleObjectPropertyName);

        result = _<SimpleNoParameterFunctionObject>(simpleNoParameterFunctionObjectArray).invoke(simpleObjectPropertyName);
        result = _(simpleNoParameterFunctionObjectArray).invoke(simpleObjectPropertyName);

        result = _.chain<SimpleNoParameterFunctionObject>(simpleNoParameterFunctionObjectArray).invoke(simpleObjectPropertyName).value();
        result = _.chain(simpleNoParameterFunctionObjectArray).invoke(simpleObjectPropertyName).value();

        result = _.chain<SimpleNoParameterFunctionObject>(simpleNoParameterFunctionObjectArray).invoke(simpleObjectPropertyName).value();
        result = _.chain(simpleNoParameterFunctionObjectArray).invoke(simpleObjectPropertyName).value();
    }

    {
        let result: number[];

        result = _.invoke<SimpleNoParameterFunctionObject>(simpleNoParameterFunctionObjectList, simpleObjectPropertyName);
        result = _.invoke(simpleNoParameterFunctionObjectList, simpleObjectPropertyName);

        result = _<SimpleNoParameterFunctionObject>(simpleNoParameterFunctionObjectList).invoke(simpleObjectPropertyName);
        result = _(simpleNoParameterFunctionObjectList).invoke(simpleObjectPropertyName);

        result = _.chain<SimpleNoParameterFunctionObject>(simpleNoParameterFunctionObjectList).invoke(simpleObjectPropertyName).value();
        result = _.chain(simpleNoParameterFunctionObjectList).invoke(simpleObjectPropertyName).value();

        result = _.chain<SimpleNoParameterFunctionObject>(simpleNoParameterFunctionObjectList).invoke(simpleObjectPropertyName).value();
        result = _.chain(simpleNoParameterFunctionObjectList).invoke(simpleObjectPropertyName).value();
    }

    {
        let result: number[];

        result = _.invoke<SimpleNoParameterFunctionObject>(simpleNoParameterFunctionObjectDictionary, simpleObjectPropertyName);
        result = _.invoke(simpleNoParameterFunctionObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleNoParameterFunctionObject>(simpleNoParameterFunctionObjectDictionary).invoke(simpleObjectPropertyName);
        result = _(simpleNoParameterFunctionObjectDictionary).invoke(simpleObjectPropertyName);

        result = _.chain<SimpleNoParameterFunctionObject>(simpleNoParameterFunctionObjectDictionary).invoke(simpleObjectPropertyName).value();
        result = _.chain(simpleNoParameterFunctionObjectDictionary).invoke(simpleObjectPropertyName).value();

        result = _.chain<SimpleNoParameterFunctionObject>(simpleNoParameterFunctionObjectDictionary).invoke(simpleObjectPropertyName).value();
        result = _.chain(simpleNoParameterFunctionObjectDictionary).invoke(simpleObjectPropertyName).value();
    }

    {
        let result: string[];

        result = _.invoke<string>(simpleString, simpleObjectPropertyName);
        result = _.invoke(simpleString, simpleObjectPropertyName);

        result = _<string>(simpleString).invoke(simpleObjectPropertyName);
        result = _(simpleString).invoke(simpleObjectPropertyName);

        result = _.chain<string>(simpleString).invoke(simpleObjectPropertyName).value();
        result = _.chain(simpleString).invoke(simpleObjectPropertyName).value();
    }

    // with parameters
    {
        const arg = -1;
        let result: number[];

        result = _.invoke<SimpleOneParameterFunctionObject>(simpleOneParameterFunctionObjectArray, simpleObjectPropertyName, arg);
        result = _.invoke(simpleOneParameterFunctionObjectArray, simpleObjectPropertyName, arg);

        result = _<SimpleOneParameterFunctionObject>(simpleOneParameterFunctionObjectArray).invoke(simpleObjectPropertyName, arg);
        result = _(simpleOneParameterFunctionObjectArray).invoke(simpleObjectPropertyName, arg);

        result = _.chain<SimpleOneParameterFunctionObject>(simpleOneParameterFunctionObjectArray).invoke(simpleObjectPropertyName, arg).value();
        result = _.chain(simpleOneParameterFunctionObjectArray).invoke(simpleObjectPropertyName, arg).value();

        result = _.chain<SimpleOneParameterFunctionObject>(simpleOneParameterFunctionObjectArray).invoke(simpleObjectPropertyName, arg).value();
        result = _.chain(simpleOneParameterFunctionObjectArray).invoke(simpleObjectPropertyName, arg).value();
    }

    {
        const arg = -1;
        let result: number[];

        result = _.invoke<SimpleOneParameterFunctionObject>(simpleOneParameterFunctionObjectList, simpleObjectPropertyName, arg);
        result = _.invoke(simpleOneParameterFunctionObjectList, simpleObjectPropertyName, arg);

        result = _<SimpleOneParameterFunctionObject>(simpleOneParameterFunctionObjectList).invoke(simpleObjectPropertyName, arg);
        result = _(simpleOneParameterFunctionObjectList).invoke(simpleObjectPropertyName, arg);

        result = _.chain<SimpleOneParameterFunctionObject>(simpleOneParameterFunctionObjectList).invoke(simpleObjectPropertyName, arg).value();
        result = _.chain(simpleOneParameterFunctionObjectList).invoke(simpleObjectPropertyName, arg).value();

        result = _.chain<SimpleOneParameterFunctionObject>(simpleOneParameterFunctionObjectList).invoke(simpleObjectPropertyName, arg).value();
        result = _.chain(simpleOneParameterFunctionObjectList).invoke(simpleObjectPropertyName, arg).value();
    }

    {
        const arg = -1;
        let result: number[];

        result = _.invoke<SimpleOneParameterFunctionObject>(simpleOneParameterFunctionObjectDictionary, simpleObjectPropertyName, arg);
        result = _.invoke(simpleOneParameterFunctionObjectDictionary, simpleObjectPropertyName, arg);

        result = _<SimpleOneParameterFunctionObject>(simpleOneParameterFunctionObjectDictionary).invoke(simpleObjectPropertyName, arg);
        result = _(simpleOneParameterFunctionObjectDictionary).invoke(simpleObjectPropertyName, arg);

        result = _.chain<SimpleOneParameterFunctionObject>(simpleOneParameterFunctionObjectDictionary).invoke(simpleObjectPropertyName, arg).value();
        result = _.chain(simpleOneParameterFunctionObjectDictionary).invoke(simpleObjectPropertyName, arg).value();

        result = _.chain<SimpleOneParameterFunctionObject>(simpleOneParameterFunctionObjectDictionary).invoke(simpleObjectPropertyName, arg).value();
        result = _.chain(simpleOneParameterFunctionObjectDictionary).invoke(simpleObjectPropertyName, arg).value();
    }

    {
        const functionName = 'substring';
        const arg = 1;
        let result: string[];

        result = _.invoke<string>(simpleString, functionName, arg);
        result = _.invoke(simpleString, functionName, arg);

        result = _<string>(simpleString).invoke(functionName, arg);
        result = _(simpleString).invoke(functionName, arg);

        result = _.chain<string>(simpleString).invoke(functionName, arg).value();
        result = _.chain(simpleString).invoke(functionName, arg).value();
    }
}

// pluck
{
    // property name iterator with nonnullable intersecting types
    {
        const array: ({ a: string, b: string } | { a: boolean, c: string })[] = [{ a: 'a', b: 'b' }, { a: true, c: 'c' }];
        let result: (string | boolean)[];

        result = _.map<{ a: string, b: string } | { a: boolean, c: string }, typeof simpleObjectPropertyName>(array, simpleObjectPropertyName);
        result = _.map(array, simpleObjectPropertyName);

        result = _<{ a: string, b: string } | { a: boolean, c: string }>(array).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(array).map(simpleObjectPropertyName);

        result = _.chain<{ a: string, b: string } | { a: boolean, c: string }>(array).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(array).map(simpleObjectPropertyName).value();
    }

    {
        const list: _.List<{ a: string, b: string } | { a: boolean, c: string }> = { 0: { a: 'a', b: 'b' }, 1: { a: true, c: 'c' }, length: 2 };
        let result: (string | boolean)[];

        result = _.map<{ a: string, b: string } | { a: boolean, c: string }, typeof simpleObjectPropertyName>(list, simpleObjectPropertyName);
        result = _.map(list, simpleObjectPropertyName);

        result = _<{ a: string, b: string } | { a: boolean, c: string }>(list).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(list).map(simpleObjectPropertyName);

        result = _.chain<{ a: string, b: string } | { a: boolean, c: string }>(list).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(list).map(simpleObjectPropertyName).value();
    }

    {
        const dict: _.Dictionary<{ a: string, b: string } | { a: boolean, c: string }> = { a: { a: 'a', b: 'b' }, b: { a: true, c: 'c' } };
        let result: (string | boolean)[];

        result = _.map<{ a: string, b: string } | { a: boolean, c: string }, typeof simpleObjectPropertyName>(dict, simpleObjectPropertyName);
        result = _.map(dict, simpleObjectPropertyName);

        result = _<{ a: string, b: string } | { a: boolean, c: string }>(dict).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(dict).map(simpleObjectPropertyName);

        result = _.chain<{ a: string, b: string } | { a: boolean, c: string }>(dict).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(dict).map(simpleObjectPropertyName).value();
    }

    // property name iterator with nullable types
    {
        const array: (SimpleStringObject | undefined)[] = [{ a: 'a' }, undefined];
        let result: (string | undefined)[];

        result = _.map<SimpleStringObject | undefined, typeof simpleObjectPropertyName>(array, simpleObjectPropertyName);
        result = _.map(array, simpleObjectPropertyName);

        result = _<SimpleStringObject | undefined>(array).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(array).map(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | undefined>(array).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(array).map(simpleObjectPropertyName).value();
    }

    {
        const list: _.List<(SimpleStringObject | undefined)> = { 0: { a: 'a' }, 1: undefined, length: 2 };
        let result: (string | undefined)[];

        result = _.map<SimpleStringObject | undefined, typeof simpleObjectPropertyName>(list, simpleObjectPropertyName);
        result = _.map(list, simpleObjectPropertyName);

        result = _<SimpleStringObject | undefined>(list).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(list).map(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | undefined>(list).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(list).map(simpleObjectPropertyName).value();
    }

    {
        const dict: _.Dictionary<(SimpleStringObject | undefined)> = { a: { a: 'a' }, b: undefined };
        let result: (string | undefined)[];

        result = _.map<SimpleStringObject | undefined, typeof simpleObjectPropertyName>(dict, simpleObjectPropertyName);
        result = _.map(dict, simpleObjectPropertyName);

        result = _<SimpleStringObject | undefined>(dict).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(dict).map(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | undefined>(dict).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(dict).map(simpleObjectPropertyName).value();
    }

    // property name iterator with a non-nullable non-intersecting types
    {
        const array: (SimpleStringObject | { b: string })[] = [{ a: 'a' }, { b: 'b' }];
        let result: (string | undefined)[];

        result = _.map<SimpleStringObject | { b: string }, typeof simpleObjectPropertyName>(array, simpleObjectPropertyName);
        result = _.map(array, simpleObjectPropertyName);

        result = _<SimpleStringObject | { b: string }>(array).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(array).map(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | { b: string }>(array).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(array).map(simpleObjectPropertyName).value();
    }

    {
        const list: _.List<SimpleStringObject | { b: string }> = { 0: { a: 'a' }, 1: { b: 'b' }, length: 2 };
        let result: (string | undefined)[];

        result = _.map<SimpleStringObject | { b: string }, typeof simpleObjectPropertyName>(list, simpleObjectPropertyName);
        result = _.map(list, simpleObjectPropertyName);

        result = _<SimpleStringObject | { b: string }>(list).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(list).map(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | { b: string }>(list).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(list).map(simpleObjectPropertyName).value();
    }

    {
        const dict: _.Dictionary<SimpleStringObject | { b: string }> = { a: { a: 'a' }, b: { b: 'b' } };
        let result: (string | undefined)[];

        result = _.map<SimpleStringObject | { b: string }, typeof simpleObjectPropertyName>(dict, simpleObjectPropertyName);
        result = _.map(dict, simpleObjectPropertyName);

        result = _<SimpleStringObject | { b: string }>(dict).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName);
        result = _(dict).map(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject | { b: string }>(dict).map<typeof simpleObjectPropertyName>(simpleObjectPropertyName).value();
        result = _.chain(dict).map(simpleObjectPropertyName).value();
    }
}

// max
{
    // without iterator
    {
        let result: number;

        result = _.max<number>(simpleNumberArray);
        result = _.max(simpleNumberArray);

        result = _<number>(simpleNumberArray).max();
        result = _(simpleNumberArray).max();

        result = _.chain<number>(simpleNumberArray).max().value();
        result = _.chain(simpleNumberArray).max().value();

        result = _.chain<number>(simpleNumberArray).max().value();
        result = _.chain(simpleNumberArray).max().value();
    }

    {
        let result: number;

        result = _.max<number>(simpleNumberList);
        result = _.max(simpleNumberList);

        result = _<number>(simpleNumberList).max();
        result = _(simpleNumberList).max();

        result = _.chain<number>(simpleNumberList).max().value();
        result = _.chain(simpleNumberList).max().value();

        result = _.chain<number>(simpleNumberList).max().value();
        result = _.chain(simpleNumberList).max().value();
    }

    {
        let result: number;

        result = _.max<number>(simpleNumberDictionary);
        result = _.max(simpleNumberDictionary);

        result = _<number>(simpleNumberDictionary).max();
        result = _(simpleNumberDictionary).max();

        result = _.chain<number>(simpleNumberDictionary).max().value();
        result = _.chain(simpleNumberDictionary).max().value();

        result = _.chain<number>(simpleNumberDictionary).max().value();
        result = _.chain(simpleNumberDictionary).max().value();
    }

    // function iterator
    {
        let result: SimpleNumberObject | number;

        result = _.max<SimpleNumberObject>(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator);
        result = _.max<SimpleNumberObject>(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator, context);
        result = _.max(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator);
        result = _.max(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator, context);

        result = _<SimpleNumberObject>(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator);
        result = _<SimpleNumberObject>(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator, context);
        result = _(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator);
        result = _(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleNumberObject>(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleNumberObject>(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleNumberObject>(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleNumberObject>(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectArray).max(simpleNumberObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.max<SimpleNumberObject>(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator);
        result = _.max<SimpleNumberObject>(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator, context);
        result = _.max(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator);
        result = _.max(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator, context);

        result = _<SimpleNumberObject>(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator);
        result = _<SimpleNumberObject>(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator, context);
        result = _(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator);
        result = _(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleNumberObject>(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleNumberObject>(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleNumberObject>(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleNumberObject>(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectList).max(simpleNumberObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.max<SimpleNumberObject>(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator);
        result = _.max<SimpleNumberObject>(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator, context);
        result = _.max(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator);
        result = _.max(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator, context);

        result = _<SimpleNumberObject>(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator);
        result = _<SimpleNumberObject>(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator, context);
        result = _(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator);
        result = _(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator, context);

        result = _.chain<SimpleNumberObject>(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleNumberObject>(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator, context).value();

        result = _.chain<SimpleNumberObject>(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleNumberObject>(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectDictionary).max(simpleNumberObjectDictionaryPropertySelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: SimpleNumberObject | number;

        result = _.max<SimpleNumberObject>(simpleNumberObjectArray, simpleObjectPropertyName);
        result = _.max(simpleNumberObjectArray, simpleObjectPropertyName);

        result = _<SimpleNumberObject>(simpleNumberObjectArray).max(simpleObjectPropertyName);
        result = _(simpleNumberObjectArray).max(simpleObjectPropertyName);

        result = _.chain<SimpleNumberObject>(simpleNumberObjectArray).max(simpleObjectPropertyName).value();
        result = _.chain(simpleNumberObjectArray).max(simpleObjectPropertyName).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.max<SimpleNumberObject>(simpleNumberObjectList, simpleObjectPropertyName);
        result = _.max(simpleNumberObjectList, simpleObjectPropertyName);

        result = _<SimpleNumberObject>(simpleNumberObjectList).max(simpleObjectPropertyName);
        result = _(simpleNumberObjectList).max(simpleObjectPropertyName);

        result = _.chain<SimpleNumberObject>(simpleNumberObjectList).max(simpleObjectPropertyName).value();
        result = _.chain(simpleNumberObjectList).max(simpleObjectPropertyName).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.max<SimpleNumberObject>(simpleNumberObjectDictionary, simpleObjectPropertyName);
        result = _.max(simpleNumberObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleNumberObject>(simpleNumberObjectDictionary).max(simpleObjectPropertyName);
        result = _(simpleNumberObjectDictionary).max(simpleObjectPropertyName);

        result = _.chain<SimpleNumberObject>(simpleNumberObjectDictionary).max(simpleObjectPropertyName).value();
        result = _.chain(simpleNumberObjectDictionary).max(simpleObjectPropertyName).value();
    }
}

// min
{
    // without iterator
    {
        let result: number;

        result = _.min<number>(simpleNumberArray);
        result = _.min(simpleNumberArray);

        result = _<number>(simpleNumberArray).min();
        result = _(simpleNumberArray).min();

        result = _.chain<number>(simpleNumberArray).min().value();
        result = _.chain(simpleNumberArray).min().value();

        result = _.chain<number>(simpleNumberArray).min().value();
        result = _.chain(simpleNumberArray).min().value();
    }

    {
        let result: number;

        result = _.min<number>(simpleNumberList);
        result = _.min(simpleNumberList);

        result = _<number>(simpleNumberList).min();
        result = _(simpleNumberList).min();

        result = _.chain<number>(simpleNumberList).min().value();
        result = _.chain(simpleNumberList).min().value();

        result = _.chain<number>(simpleNumberList).min().value();
        result = _.chain(simpleNumberList).min().value();
    }

    {
        let result: number;

        result = _.min<number>(simpleNumberDictionary);
        result = _.min(simpleNumberDictionary);

        result = _<number>(simpleNumberDictionary).min();
        result = _(simpleNumberDictionary).min();

        result = _.chain<number>(simpleNumberDictionary).min().value();
        result = _.chain(simpleNumberDictionary).min().value();

        result = _.chain<number>(simpleNumberDictionary).min().value();
        result = _.chain(simpleNumberDictionary).min().value();
    }

    // function iterator
    {
        let result: SimpleNumberObject | number;

        result = _.min<SimpleNumberObject>(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator);
        result = _.min<SimpleNumberObject>(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator, context);
        result = _.min(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator);
        result = _.min(simpleNumberObjectArray, simpleNumberObjectListPropertySelectingIterator, context);

        result = _<SimpleNumberObject>(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator);
        result = _<SimpleNumberObject>(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator, context);
        result = _(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator);
        result = _(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleNumberObject>(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleNumberObject>(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleNumberObject>(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleNumberObject>(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectArray).min(simpleNumberObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.min<SimpleNumberObject>(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator);
        result = _.min<SimpleNumberObject>(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator, context);
        result = _.min(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator);
        result = _.min(simpleNumberObjectList, simpleNumberObjectListPropertySelectingIterator, context);

        result = _<SimpleNumberObject>(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator);
        result = _<SimpleNumberObject>(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator, context);
        result = _(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator);
        result = _(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleNumberObject>(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleNumberObject>(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleNumberObject>(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleNumberObject>(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectList).min(simpleNumberObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.min<SimpleNumberObject>(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator);
        result = _.min<SimpleNumberObject>(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator, context);
        result = _.min(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator);
        result = _.min(simpleNumberObjectDictionary, simpleNumberObjectDictionaryPropertySelectingIterator, context);

        result = _<SimpleNumberObject>(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator);
        result = _<SimpleNumberObject>(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator, context);
        result = _(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator);
        result = _(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator, context);

        result = _.chain<SimpleNumberObject>(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleNumberObject>(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator, context).value();

        result = _.chain<SimpleNumberObject>(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleNumberObject>(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleNumberObjectDictionary).min(simpleNumberObjectDictionaryPropertySelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: SimpleNumberObject | number;

        result = _.min<SimpleNumberObject>(simpleNumberObjectArray, simpleObjectPropertyName);
        result = _.min(simpleNumberObjectArray, simpleObjectPropertyName);

        result = _<SimpleNumberObject>(simpleNumberObjectArray).min(simpleObjectPropertyName);
        result = _(simpleNumberObjectArray).min(simpleObjectPropertyName);

        result = _.chain<SimpleNumberObject>(simpleNumberObjectArray).min(simpleObjectPropertyName).value();
        result = _.chain(simpleNumberObjectArray).min(simpleObjectPropertyName).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.min<SimpleNumberObject>(simpleNumberObjectList, simpleObjectPropertyName);
        result = _.min(simpleNumberObjectList, simpleObjectPropertyName);

        result = _<SimpleNumberObject>(simpleNumberObjectList).min(simpleObjectPropertyName);
        result = _(simpleNumberObjectList).min(simpleObjectPropertyName);

        result = _.chain<SimpleNumberObject>(simpleNumberObjectList).min(simpleObjectPropertyName).value();
        result = _.chain(simpleNumberObjectList).min(simpleObjectPropertyName).value();
    }

    {
        let result: SimpleNumberObject | number;

        result = _.min<SimpleNumberObject>(simpleNumberObjectDictionary, simpleObjectPropertyName);
        result = _.min(simpleNumberObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleNumberObject>(simpleNumberObjectDictionary).min(simpleObjectPropertyName);
        result = _(simpleNumberObjectDictionary).min(simpleObjectPropertyName);

        result = _.chain<SimpleNumberObject>(simpleNumberObjectDictionary).min(simpleObjectPropertyName).value();
        result = _.chain(simpleNumberObjectDictionary).min(simpleObjectPropertyName).value();
    }
}

// sortBy
{
    // function iterator
    {
        let result: SimpleStringObject[];

        result = _.sortBy<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.sortBy<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);
        result = _.sortBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.sortBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).sortBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.sortBy<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.sortBy<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        result = _.sortBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.sortBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).sortBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.sortBy<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.sortBy<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);
        result = _.sortBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.sortBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator, context);
        result = _(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).sortBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: SimpleStringObject[];

        result = _.sortBy<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.sortBy(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).sortBy(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).sortBy(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).sortBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).sortBy(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).sortBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).sortBy(simpleObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.sortBy<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.sortBy(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).sortBy(simpleObjectPropertyName);
        result = _(simpleStringObjectList).sortBy(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).sortBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).sortBy(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).sortBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).sortBy(simpleObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.sortBy<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.sortBy(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).sortBy(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).sortBy(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).sortBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).sortBy(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).sortBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).sortBy(simpleObjectPropertyName).value();
    }
}

// groupBy
{
    // function iterator
    {
        let result: _.Dictionary<_.List<SimpleStringObject>>;

        result = _.groupBy<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.groupBy<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);
        result = _.groupBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.groupBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).groupBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<_.List<SimpleStringObject>>;

        result = _.groupBy<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.groupBy<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        result = _.groupBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.groupBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).groupBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<_.List<SimpleStringObject>>;

        result = _.groupBy<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.groupBy<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);
        result = _.groupBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.groupBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator, context);
        result = _(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).groupBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: _.Dictionary<_.List<SimpleStringObject>>;

        result = _.groupBy<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.groupBy(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).groupBy(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).groupBy(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).groupBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).groupBy(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).groupBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).groupBy(simpleObjectPropertyName).value();
    }

    {
        let result: _.Dictionary<_.List<SimpleStringObject>>;

        result = _.groupBy<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.groupBy(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).groupBy(simpleObjectPropertyName);
        result = _(simpleStringObjectList).groupBy(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).groupBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).groupBy(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).groupBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).groupBy(simpleObjectPropertyName).value();
    }

    {
        let result: _.Dictionary<_.List<SimpleStringObject>>;

        result = _.groupBy<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.groupBy(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).groupBy(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).groupBy(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).groupBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).groupBy(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).groupBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).groupBy(simpleObjectPropertyName).value();
    }
}

// indexBy
{
    // function iterator
    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.indexBy<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.indexBy<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);
        result = _.indexBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.indexBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).indexBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.indexBy<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.indexBy<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        result = _.indexBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.indexBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).indexBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.indexBy<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.indexBy<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);
        result = _.indexBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.indexBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator, context);
        result = _(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).indexBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.indexBy<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.indexBy(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).indexBy(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).indexBy(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).indexBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).indexBy(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).indexBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).indexBy(simpleObjectPropertyName).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.indexBy<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.indexBy(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).indexBy(simpleObjectPropertyName);
        result = _(simpleStringObjectList).indexBy(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).indexBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).indexBy(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).indexBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).indexBy(simpleObjectPropertyName).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        result = _.indexBy<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.indexBy(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).indexBy(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).indexBy(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).indexBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).indexBy(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).indexBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).indexBy(simpleObjectPropertyName).value();
    }
}

// countBy
{
    // function iterator
    {
        let result: _.Dictionary<number>;

        result = _.countBy<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.countBy<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);
        result = _.countBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        result = _.countBy(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).countBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<number>;

        result = _.countBy<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.countBy<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        result = _.countBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.countBy(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).countBy(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<number>;

        result = _.countBy<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.countBy<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);
        result = _.countBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        result = _.countBy(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator, context);
        result = _(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator);
        result = _(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectDictionary).countBy(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
    }

    {
        let result: _.Dictionary<number>;

        result = _.countBy<string>(simpleString, stringListSelectingIterator);
        result = _.countBy<string>(simpleString, stringListSelectingIterator, context);
        result = _.countBy(simpleString, stringListSelectingIterator);
        result = _.countBy(simpleString, stringListSelectingIterator, context);

        result = _<string>(simpleString).countBy(stringListSelectingIterator);
        result = _<string>(simpleString).countBy(stringListSelectingIterator, context);
        result = _(simpleString).countBy(stringListSelectingIterator);
        result = _(simpleString).countBy(stringListSelectingIterator, context);

        result = _.chain<string>(simpleString).countBy(stringListSelectingIterator).value();
        result = _.chain<string>(simpleString).countBy(stringListSelectingIterator, context).value();
        result = _.chain(simpleString).countBy(stringListSelectingIterator).value();
        result = _.chain(simpleString).countBy(stringListSelectingIterator, context).value();

        result = _.chain<string>(simpleString).countBy(stringListSelectingIterator).value();
        result = _.chain<string>(simpleString).countBy(stringListSelectingIterator, context).value();
        result = _.chain(simpleString).countBy(stringListSelectingIterator).value();
        result = _.chain(simpleString).countBy(stringListSelectingIterator, context).value();
    }

    // property name iterator
    {
        let result: _.Dictionary<number>;

        result = _.countBy<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.countBy(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).countBy(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).countBy(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).countBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).countBy(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).countBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).countBy(simpleObjectPropertyName).value();
    }

    {
        let result: _.Dictionary<number>;

        result = _.countBy<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.countBy(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).countBy(simpleObjectPropertyName);
        result = _(simpleStringObjectList).countBy(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).countBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).countBy(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).countBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).countBy(simpleObjectPropertyName).value();
    }

    {
        let result: _.Dictionary<number>;

        result = _.countBy<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.countBy(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).countBy(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).countBy(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).countBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).countBy(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).countBy(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).countBy(simpleObjectPropertyName).value();
    }
}

// shuffle
{
    {
        let result: SimpleStringObject[];

        result = _.shuffle<SimpleStringObject>(simpleStringObjectArray);
        result = _.shuffle(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).shuffle();
        result = _(simpleStringObjectArray).shuffle();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).shuffle().value();
        result = _.chain(simpleStringObjectArray).shuffle().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).shuffle().value();
        result = _.chain(simpleStringObjectArray).shuffle().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.shuffle<SimpleStringObject>(simpleStringObjectList);
        result = _.shuffle(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).shuffle();
        result = _(simpleStringObjectList).shuffle();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).shuffle().value();
        result = _.chain(simpleStringObjectList).shuffle().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).shuffle().value();
        result = _.chain(simpleStringObjectList).shuffle().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.shuffle<SimpleStringObject>(simpleStringObjectDictionary);
        result = _.shuffle(simpleStringObjectDictionary);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).shuffle();
        result = _(simpleStringObjectDictionary).shuffle();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).shuffle().value();
        result = _.chain(simpleStringObjectDictionary).shuffle().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).shuffle().value();
        result = _.chain(simpleStringObjectDictionary).shuffle().value();
    }

    {
        let result: string[];

        result = _.shuffle<string>(simpleString);
        result = _.shuffle(simpleString);

        result = _<string>(simpleString).shuffle();
        result = _(simpleString).shuffle();

        result = _.chain<string>(simpleString).shuffle().value();
        result = _.chain(simpleString).shuffle().value();
    }
}

// sample
{
    // without n
    {
        let result: SimpleStringObject | undefined;

        result = _.sample<SimpleStringObject>(simpleStringObjectArray);
        result = _.sample(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).sample();
        result = _(simpleStringObjectArray).sample();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).sample().value();
        result = _.chain(simpleStringObjectArray).sample().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).sample().value();
        result = _.chain(simpleStringObjectArray).sample().value();
    }

    {
        let result: SimpleStringObject | undefined;

        result = _.sample<SimpleStringObject>(simpleStringObjectList);
        result = _.sample(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).sample();
        result = _(simpleStringObjectList).sample();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).sample().value();
        result = _.chain(simpleStringObjectList).sample().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).sample().value();
        result = _.chain(simpleStringObjectList).sample().value();
    }

    {
        let result: SimpleStringObject | undefined;

        result = _.sample<SimpleStringObject>(simpleStringObjectDictionary);
        result = _.sample(simpleStringObjectDictionary);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).sample();
        result = _(simpleStringObjectDictionary).sample();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).sample().value();
        result = _.chain(simpleStringObjectDictionary).sample().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).sample().value();
        result = _.chain(simpleStringObjectDictionary).sample().value();
    }

    {
        let result: string | undefined;

        result = _.sample<string>(simpleString);
        result = _.sample(simpleString);

        result = _<string>(simpleString).sample();
        result = _(simpleString).sample();

        result = _.chain<string>(simpleString).sample().value();
        result = _.chain(simpleString).sample().value();
    }

    // with n
    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.sample<SimpleStringObject>(simpleStringObjectArray, n);
        result = _.sample(simpleStringObjectArray, n);

        result = _<SimpleStringObject>(simpleStringObjectArray).sample(n);
        result = _(simpleStringObjectArray).sample(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).sample(n).value();
        result = _.chain(simpleStringObjectArray).sample(n).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).sample(n).value();
        result = _.chain(simpleStringObjectArray).sample(n).value();
    }

    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.sample<SimpleStringObject>(simpleStringObjectList, n);
        result = _.sample(simpleStringObjectList, n);

        result = _<SimpleStringObject>(simpleStringObjectList).sample(n);
        result = _(simpleStringObjectList).sample(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).sample(n).value();
        result = _.chain(simpleStringObjectList).sample(n).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).sample(n).value();
        result = _.chain(simpleStringObjectList).sample(n).value();
    }

    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.sample<SimpleStringObject>(simpleStringObjectDictionary, n);
        result = _.sample(simpleStringObjectDictionary, n);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).sample(n);
        result = _(simpleStringObjectDictionary).sample(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).sample(n).value();
        result = _.chain(simpleStringObjectDictionary).sample(n).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).sample(n).value();
        result = _.chain(simpleStringObjectDictionary).sample(n).value();
    }

    {
        const n = 2;
        let result: string[];

        result = _.sample<string>(simpleString, n);
        result = _.sample(simpleString, n);

        result = _<string>(simpleString).sample(n);
        result = _(simpleString).sample(n);

        result = _.chain<string>(simpleString).sample(n).value();
        result = _.chain(simpleString).sample(n).value();
    }
}

// toArray
{
    {
        let result: SimpleStringObject[];

        result = _.toArray<SimpleStringObject>(simpleStringObjectArray);
        result = _.toArray(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).toArray();
        result = _(simpleStringObjectArray).toArray();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).toArray().value();
        result = _.chain(simpleStringObjectArray).toArray().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).toArray().value();
        result = _.chain(simpleStringObjectArray).toArray().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.toArray<SimpleStringObject>(simpleStringObjectList);
        result = _.toArray(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).toArray();
        result = _(simpleStringObjectList).toArray();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).toArray().value();
        result = _.chain(simpleStringObjectList).toArray().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).toArray().value();
        result = _.chain(simpleStringObjectList).toArray().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.toArray<SimpleStringObject>(simpleStringObjectDictionary);
        result = _.toArray(simpleStringObjectDictionary);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).toArray();
        result = _(simpleStringObjectDictionary).toArray();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).toArray().value();
        result = _.chain(simpleStringObjectDictionary).toArray().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).toArray().value();
        result = _.chain(simpleStringObjectDictionary).toArray().value();
    }

    {
        let result: string[];

        result = _.toArray<string>(simpleString);
        result = _.toArray(simpleString);

        result = _<string>(simpleString).toArray();
        result = _(simpleString).toArray();

        result = _.chain<string>(simpleString).toArray().value();
        result = _.chain(simpleString).toArray().value();
    }
}

// size
{
    {
        let result: number;

        result = _.size<SimpleStringObject>(simpleStringObjectArray);
        result = _.size(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).size();
        result = _(simpleStringObjectArray).size();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).size().value();
        result = _.chain(simpleStringObjectArray).size().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).size().value();
        result = _.chain(simpleStringObjectArray).size().value();
    }

    {
        let result: number;

        result = _.size<SimpleStringObject>(simpleStringObjectList);
        result = _.size(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).size();
        result = _(simpleStringObjectList).size();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).size().value();
        result = _.chain(simpleStringObjectList).size().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).size().value();
        result = _.chain(simpleStringObjectList).size().value();
    }

    {
        let result: number;

        result = _.size<SimpleStringObject>(simpleStringObjectDictionary);
        result = _.size(simpleStringObjectDictionary);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).size();
        result = _(simpleStringObjectDictionary).size();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).size().value();
        result = _.chain(simpleStringObjectDictionary).size().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).size().value();
        result = _.chain(simpleStringObjectDictionary).size().value();
    }

    {
        let result: number;

        result = _.size<string>(simpleString);
        result = _.size(simpleString);

        result = _<string>(simpleString).size();
        result = _(simpleString).size();

        result = _.chain<string>(simpleString).size().value();
        result = _.chain(simpleString).size().value();
    }
}

// partition
{
    // function iterator
    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.partition<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);
        result = _.partition(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.partition(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).partition(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.partition<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);
        result = _.partition(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.partition(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).partition(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.partition<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _.partition(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator);
        result = _.partition(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator, context);
        result = _(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator);
        result = _(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectDictionary).partition(simpleStringObjectDictionaryPropertyComparingIterator, context).value();
    }

    {
        let result: [string[], string[]];

        result = _.partition<string>(simpleString, stringListComparingIterator);
        result = _.partition<string>(simpleString, stringListComparingIterator, context);
        result = _.partition(simpleString, stringListComparingIterator);
        result = _.partition(simpleString, stringListComparingIterator, context);

        result = _<string>(simpleString).partition(stringListComparingIterator);
        result = _<string>(simpleString).partition(stringListComparingIterator, context);
        result = _(simpleString).partition(stringListComparingIterator);
        result = _(simpleString).partition(stringListComparingIterator, context);

        result = _.chain<string>(simpleString).partition(stringListComparingIterator).value();
        result = _.chain<string>(simpleString).partition(stringListComparingIterator, context).value();
        result = _.chain(simpleString).partition(stringListComparingIterator).value();
        result = _.chain(simpleString).partition(stringListComparingIterator, context).value();
    }

    // partial object iterator
    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        result = _.partition(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectArray).partition(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectArray).partition(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).partition(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).partition(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).partition(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectArray).partition(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        result = _.partition(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectList).partition(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectList).partition(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).partition(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).partition(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).partition(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectList).partition(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        result = _.partition(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).partition(simpleStringObjectPartialPropertyMatch);
        result = _(simpleStringObjectDictionary).partition(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).partition(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).partition(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).partition(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(simpleStringObjectDictionary).partition(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator
    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.partition(simpleStringObjectArray, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).partition(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).partition(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).partition(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).partition(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).partition(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).partition(simpleObjectPropertyName).value();
    }

    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.partition(simpleStringObjectList, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).partition(simpleObjectPropertyName);
        result = _(simpleStringObjectList).partition(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).partition(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).partition(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).partition(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).partition(simpleObjectPropertyName).value();
    }

    {
        let result: [SimpleStringObject[], SimpleStringObject[]];

        result = _.partition<SimpleStringObject>(simpleStringObjectDictionary, simpleObjectPropertyName);
        result = _.partition(simpleStringObjectDictionary, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).partition(simpleObjectPropertyName);
        result = _(simpleStringObjectDictionary).partition(simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).partition(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).partition(simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary).partition(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectDictionary).partition(simpleObjectPropertyName).value();
    }
}

// Array Functions

// first, head, take
{
    // without n
    {
        let result: SimpleStringObject | undefined;

        result = _.first<SimpleStringObject>(simpleStringObjectArray);
        result = _.first(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).first();
        result = _(simpleStringObjectArray).first();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).first().value();
        result = _.chain(simpleStringObjectArray).first().value();

        result = _.head<SimpleStringObject>(simpleStringObjectArray);
        result = _.head(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).head();
        result = _(simpleStringObjectArray).head();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).head().value();
        result = _.chain(simpleStringObjectArray).head().value();

        result = _.take<SimpleStringObject>(simpleStringObjectArray);
        result = _.take(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).take();
        result = _(simpleStringObjectArray).take();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).take().value();
        result = _.chain(simpleStringObjectArray).take().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).take().value();
        result = _.chain(simpleStringObjectArray).take().value();
    }

    {
        let result: SimpleStringObject | undefined;

        result = _.first<SimpleStringObject>(simpleStringObjectList);
        result = _.first(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).first();
        result = _(simpleStringObjectList).first();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).first().value();
        result = _.chain(simpleStringObjectList).first().value();

        result = _.head<SimpleStringObject>(simpleStringObjectList);
        result = _.head(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).head();
        result = _(simpleStringObjectList).head();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).head().value();
        result = _.chain(simpleStringObjectList).head().value();

        result = _.take<SimpleStringObject>(simpleStringObjectList);
        result = _.take(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).take();
        result = _(simpleStringObjectList).take();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).take().value();
        result = _.chain(simpleStringObjectList).take().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).take().value();
        result = _.chain(simpleStringObjectList).take().value();
    }

    {
        let result: string | undefined;

        result = _.first<string>(simpleString);
        result = _.first(simpleString);

        result = _<string>(simpleString).first();
        result = _(simpleString).first();

        result = _.chain<string>(simpleString).first().value();
        result = _.chain(simpleString).first().value();

        result = _.head<string>(simpleString);
        result = _.head(simpleString);

        result = _<string>(simpleString).head();
        result = _(simpleString).head();

        result = _.chain<string>(simpleString).head().value();
        result = _.chain(simpleString).head().value();

        result = _.take<string>(simpleString);
        result = _.take(simpleString);

        result = _<string>(simpleString).take();
        result = _(simpleString).take();

        result = _.chain<string>(simpleString).take().value();
        result = _.chain(simpleString).take().value();
    }

    // with n
    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.first<SimpleStringObject>(simpleStringObjectArray, n);
        result = _.first(simpleStringObjectArray, n);

        result = _<SimpleStringObject>(simpleStringObjectArray).first(n);
        result = _(simpleStringObjectArray).first(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).first(n).value();
        result = _.chain(simpleStringObjectArray).first(n).value();

        result = _.head<SimpleStringObject>(simpleStringObjectArray, n);
        result = _.head(simpleStringObjectArray, n);

        result = _<SimpleStringObject>(simpleStringObjectArray).head(n);
        result = _(simpleStringObjectArray).head(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).head(n).value();
        result = _.chain(simpleStringObjectArray).head(n).value();

        result = _.take<SimpleStringObject>(simpleStringObjectArray, n);
        result = _.take(simpleStringObjectArray, n);

        result = _<SimpleStringObject>(simpleStringObjectArray).take(n);
        result = _(simpleStringObjectArray).take(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).take(n).value();
        result = _.chain(simpleStringObjectArray).take(n).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).take(n).value();
        result = _.chain(simpleStringObjectArray).take(n).value();
    }

    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.first<SimpleStringObject>(simpleStringObjectList, n);
        result = _.first(simpleStringObjectList, n);

        result = _<SimpleStringObject>(simpleStringObjectList).first(n);
        result = _(simpleStringObjectList).first(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).first(n).value();
        result = _.chain(simpleStringObjectList).first(n).value();

        result = _.head<SimpleStringObject>(simpleStringObjectList, n);
        result = _.head(simpleStringObjectList, n);

        result = _<SimpleStringObject>(simpleStringObjectList).head(n);
        result = _(simpleStringObjectList).head(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).head(n).value();
        result = _.chain(simpleStringObjectList).head(n).value();

        result = _.take<SimpleStringObject>(simpleStringObjectList, n);
        result = _.take(simpleStringObjectList, n);

        result = _<SimpleStringObject>(simpleStringObjectList).take(n);
        result = _(simpleStringObjectList).take(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).take(n).value();
        result = _.chain(simpleStringObjectList).take(n).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).take(n).value();
        result = _.chain(simpleStringObjectList).take(n).value();
    }

    {
        const n = 2;
        let result: string[];

        result = _.first<string>(simpleString, n);
        result = _.first(simpleString, n);

        result = _<string>(simpleString).first(n);
        result = _(simpleString).first(n);

        result = _.chain<string>(simpleString).first(n).value();
        result = _.chain(simpleString).first(n).value();

        result = _.head<string>(simpleString, n);
        result = _.head(simpleString, n);

        result = _<string>(simpleString).head(n);
        result = _(simpleString).head(n);

        result = _.chain<string>(simpleString).head(n).value();
        result = _.chain(simpleString).head(n).value();

        result = _.take<string>(simpleString, n);
        result = _.take(simpleString, n);

        result = _<string>(simpleString).take(n);
        result = _(simpleString).take(n);

        result = _.chain<string>(simpleString).take(n).value();
        result = _.chain(simpleString).take(n).value();
    }
}

// initial
{
    // without n
    {
        let result: SimpleStringObject[];

        result = _.initial<SimpleStringObject>(simpleStringObjectArray);
        result = _.initial(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).initial();
        result = _(simpleStringObjectArray).initial();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).initial().value();
        result = _.chain(simpleStringObjectArray).initial().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).initial().value();
        result = _.chain(simpleStringObjectArray).initial().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.initial<SimpleStringObject>(simpleStringObjectList);
        result = _.initial(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).initial();
        result = _(simpleStringObjectList).initial();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).initial().value();
        result = _.chain(simpleStringObjectList).initial().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).initial().value();
        result = _.chain(simpleStringObjectList).initial().value();
    }

    {
        let result: string[];

        result = _.initial<string>(simpleString);
        result = _.initial(simpleString);

        result = _<string>(simpleString).initial();
        result = _(simpleString).initial();

        result = _.chain<string>(simpleString).initial().value();
        result = _.chain(simpleString).initial().value();
    }

    // with n
    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.initial<SimpleStringObject>(simpleStringObjectArray, n);
        result = _.initial(simpleStringObjectArray, n);

        result = _<SimpleStringObject>(simpleStringObjectArray).initial(n);
        result = _(simpleStringObjectArray).initial(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).initial(n).value();
        result = _.chain(simpleStringObjectArray).initial(n).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).initial(n).value();
        result = _.chain(simpleStringObjectArray).initial(n).value();
    }

    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.initial<SimpleStringObject>(simpleStringObjectList, n);
        result = _.initial(simpleStringObjectList, n);

        result = _<SimpleStringObject>(simpleStringObjectList).initial(n);
        result = _(simpleStringObjectList).initial(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).initial(n).value();
        result = _.chain(simpleStringObjectList).initial(n).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).initial(n).value();
        result = _.chain(simpleStringObjectList).initial(n).value();
    }

    {
        const n = 2;
        let result: string[];

        result = _.initial<string>(simpleString, n);
        result = _.initial(simpleString, n);

        result = _<string>(simpleString).initial(n);
        result = _(simpleString).initial(n);

        result = _.chain<string>(simpleString).initial(n).value();
        result = _.chain(simpleString).initial(n).value();
    }
}

// last
{
    // without n
    {
        let result: SimpleStringObject | undefined;

        result = _.last<SimpleStringObject>(simpleStringObjectArray);
        result = _.last(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).last();
        result = _(simpleStringObjectArray).last();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).last().value();
        result = _.chain(simpleStringObjectArray).last().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).last().value();
        result = _.chain(simpleStringObjectArray).last().value();
    }

    {
        let result: SimpleStringObject | undefined;

        result = _.last<SimpleStringObject>(simpleStringObjectList);
        result = _.last(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).last();
        result = _(simpleStringObjectList).last();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).last().value();
        result = _.chain(simpleStringObjectList).last().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).last().value();
        result = _.chain(simpleStringObjectList).last().value();
    }

    {
        let result: string | undefined;

        result = _.last<string>(simpleString);
        result = _.last(simpleString);

        result = _<string>(simpleString).last();
        result = _(simpleString).last();

        result = _.chain<string>(simpleString).last().value();
        result = _.chain(simpleString).last().value();
    }

    // with n
    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.last<SimpleStringObject>(simpleStringObjectArray, n);
        result = _.last(simpleStringObjectArray, n);

        result = _<SimpleStringObject>(simpleStringObjectArray).last(n);
        result = _(simpleStringObjectArray).last(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).last(n).value();
        result = _.chain(simpleStringObjectArray).last(n).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).last(n).value();
        result = _.chain(simpleStringObjectArray).last(n).value();
    }

    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.last<SimpleStringObject>(simpleStringObjectList, n);
        result = _.last(simpleStringObjectList, n);

        result = _<SimpleStringObject>(simpleStringObjectList).last(n);
        result = _(simpleStringObjectList).last(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).last(n).value();
        result = _.chain(simpleStringObjectList).last(n).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).last(n).value();
        result = _.chain(simpleStringObjectList).last(n).value();
    }

    {
        const n = 2;
        let result: string[];

        result = _.last<string>(simpleString, n);
        result = _.last(simpleString, n);

        result = _<string>(simpleString).last(n);
        result = _(simpleString).last(n);

        result = _.chain<string>(simpleString).last(n).value();
        result = _.chain(simpleString).last(n).value();
    }
}

// rest, tail, drop
{
    // without n
    {
        let result: SimpleStringObject[];

        result = _.rest<SimpleStringObject>(simpleStringObjectArray);
        result = _.rest(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).rest();
        result = _(simpleStringObjectArray).rest();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).rest().value();
        result = _.chain(simpleStringObjectArray).rest().value();

        result = _.tail<SimpleStringObject>(simpleStringObjectArray);
        result = _.tail(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).tail();
        result = _(simpleStringObjectArray).tail();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).tail().value();
        result = _.chain(simpleStringObjectArray).tail().value();

        result = _.drop<SimpleStringObject>(simpleStringObjectArray);
        result = _.drop(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).drop();
        result = _(simpleStringObjectArray).drop();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).drop().value();
        result = _.chain(simpleStringObjectArray).drop().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).drop().value();
        result = _.chain(simpleStringObjectArray).drop().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.rest<SimpleStringObject>(simpleStringObjectList);
        result = _.rest(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).rest();
        result = _(simpleStringObjectList).rest();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).rest().value();
        result = _.chain(simpleStringObjectList).rest().value();

        result = _.tail<SimpleStringObject>(simpleStringObjectList);
        result = _.tail(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).tail();
        result = _(simpleStringObjectList).tail();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).tail().value();
        result = _.chain(simpleStringObjectList).tail().value();

        result = _.drop<SimpleStringObject>(simpleStringObjectList);
        result = _.drop(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).drop();
        result = _(simpleStringObjectList).drop();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).drop().value();
        result = _.chain(simpleStringObjectList).drop().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).drop().value();
        result = _.chain(simpleStringObjectList).drop().value();
    }

    {
        let result: string[];

        result = _.rest<string>(simpleString);
        result = _.rest(simpleString);

        result = _<string>(simpleString).rest();
        result = _(simpleString).rest();

        result = _.chain<string>(simpleString).rest().value();
        result = _.chain(simpleString).rest().value();

        result = _.tail<string>(simpleString);
        result = _.tail(simpleString);

        result = _<string>(simpleString).tail();
        result = _(simpleString).tail();

        result = _.chain<string>(simpleString).tail().value();
        result = _.chain(simpleString).tail().value();

        result = _.drop<string>(simpleString);
        result = _.drop(simpleString);

        result = _<string>(simpleString).drop();
        result = _(simpleString).drop();

        result = _.chain<string>(simpleString).drop().value();
        result = _.chain(simpleString).drop().value();
    }

    // with n
    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.rest<SimpleStringObject>(simpleStringObjectArray, n);
        result = _.rest(simpleStringObjectArray, n);

        result = _<SimpleStringObject>(simpleStringObjectArray).rest(n);
        result = _(simpleStringObjectArray).rest(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).rest(n).value();
        result = _.chain(simpleStringObjectArray).rest(n).value();

        result = _.tail<SimpleStringObject>(simpleStringObjectArray, n);
        result = _.tail(simpleStringObjectArray, n);

        result = _<SimpleStringObject>(simpleStringObjectArray).tail(n);
        result = _(simpleStringObjectArray).tail(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).tail(n).value();
        result = _.chain(simpleStringObjectArray).tail(n).value();

        result = _.drop<SimpleStringObject>(simpleStringObjectArray, n);
        result = _.drop(simpleStringObjectArray, n);

        result = _<SimpleStringObject>(simpleStringObjectArray).drop(n);
        result = _(simpleStringObjectArray).drop(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).drop(n).value();
        result = _.chain(simpleStringObjectArray).drop(n).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).drop(n).value();
        result = _.chain(simpleStringObjectArray).drop(n).value();
    }

    {
        const n = 2;
        let result: SimpleStringObject[];

        result = _.rest<SimpleStringObject>(simpleStringObjectList, n);
        result = _.rest(simpleStringObjectList, n);

        result = _<SimpleStringObject>(simpleStringObjectList).rest(n);
        result = _(simpleStringObjectList).rest(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).rest(n).value();
        result = _.chain(simpleStringObjectList).rest(n).value();

        result = _.tail<SimpleStringObject>(simpleStringObjectList, n);
        result = _.tail(simpleStringObjectList, n);

        result = _<SimpleStringObject>(simpleStringObjectList).tail(n);
        result = _(simpleStringObjectList).tail(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).tail(n).value();
        result = _.chain(simpleStringObjectList).tail(n).value();

        result = _.drop<SimpleStringObject>(simpleStringObjectList, n);
        result = _.drop(simpleStringObjectList, n);

        result = _<SimpleStringObject>(simpleStringObjectList).drop(n);
        result = _(simpleStringObjectList).drop(n);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).drop(n).value();
        result = _.chain(simpleStringObjectList).drop(n).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).drop(n).value();
        result = _.chain(simpleStringObjectList).drop(n).value();
    }

    {
        const n = 2;
        let result: string[];

        result = _.rest<string>(simpleString, n);
        result = _.rest(simpleString, n);

        result = _<string>(simpleString).rest(n);
        result = _(simpleString).rest(n);

        result = _.chain<string>(simpleString).rest(n).value();
        result = _.chain(simpleString).rest(n).value();

        result = _.tail<string>(simpleString, n);
        result = _.tail(simpleString, n);

        result = _<string>(simpleString).tail(n);
        result = _(simpleString).tail(n);

        result = _.chain<string>(simpleString).tail(n).value();
        result = _.chain(simpleString).tail(n).value();

        result = _.drop<string>(simpleString, n);
        result = _.drop(simpleString, n);

        result = _<string>(simpleString).drop(n);
        result = _(simpleString).drop(n);

        result = _.chain<string>(simpleString).drop(n).value();
        result = _.chain(simpleString).drop(n).value();
    }
}

// compact
{
    {
        const array: (SimpleStringObject | undefined)[] = [{ a: 'a' }, { a: 'b' }, undefined];
        let result: SimpleStringObject[];

        result = _.compact<SimpleStringObject | undefined>(array);
        result = _.compact(array);

        result = _<SimpleStringObject | undefined>(array).compact();
        result = _(array).compact();

        result = _.chain<SimpleStringObject | undefined>(array).compact().value();
        result = _.chain(array).compact().value();

        result = _.chain<SimpleStringObject | undefined>(array).compact().value();
        result = _.chain(array).compact().value();
    }

    {
        const list: _.List<(SimpleStringObject | undefined)> = { 0: { a: 'a' }, 1: { a: 'b' }, 2: undefined, length: 3 };
        let result: SimpleStringObject[];

        result = _.compact<SimpleStringObject | undefined>(list);
        result = _.compact(list);

        result = _<SimpleStringObject | undefined>(list).compact();
        result = _(list).compact();

        result = _.chain<SimpleStringObject | undefined>(list).compact().value();
        result = _.chain(list).compact().value();

        result = _.chain<SimpleStringObject | undefined>(list).compact().value();
        result = _.chain(list).compact().value();
    }
}

// flatten
{
    // one dimension, deep
    {
        let result: SimpleStringObject[];

        result = _.flatten<SimpleStringObject>(simpleStringObjectArray);
        result = _.flatten(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).flatten();
        result = _(simpleStringObjectArray).flatten();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).flatten().value();
        result = _.chain(simpleStringObjectArray).flatten().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).flatten().value();
        result = _.chain(simpleStringObjectArray).flatten().value();
    }

    {
        let result: SimpleStringObject[];

        result = _.flatten<SimpleStringObject>(simpleStringObjectList);
        result = _.flatten(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).flatten();
        result = _(simpleStringObjectList).flatten();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).flatten().value();
        result = _.chain(simpleStringObjectList).flatten().value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).flatten().value();
        result = _.chain(simpleStringObjectList).flatten().value();
    }

    // one dimension, shallow
    {
        let result: SimpleStringObject[];

        result = _.flatten<SimpleStringObject>(simpleStringObjectArray, true);
        result = _.flatten(simpleStringObjectArray, true);

        result = _<SimpleStringObject>(simpleStringObjectArray).flatten(true);
        result = _(simpleStringObjectArray).flatten(true);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).flatten(true).value();
        result = _.chain(simpleStringObjectArray).flatten(true).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).flatten(true).value();
        result = _.chain(simpleStringObjectArray).flatten(true).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.flatten<SimpleStringObject>(simpleStringObjectList, true);
        result = _.flatten(simpleStringObjectList, true);

        result = _<SimpleStringObject>(simpleStringObjectList).flatten(true);
        result = _(simpleStringObjectList).flatten(true);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).flatten(true).value();
        result = _.chain(simpleStringObjectList).flatten(true).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).flatten(true).value();
        result = _.chain(simpleStringObjectList).flatten(true).value();
    }

    // two dimensions, deep
    {
        const array: SimpleStringObject[][] = [[{ a: 'a' }, { a: 'b' }], [{ a: 'a' }, { a: 'b' }]];
        let result: SimpleStringObject[];

        result = _.flatten<SimpleStringObject[]>(array);
        result = _.flatten(array);

        result = _<SimpleStringObject[]>(array).flatten();
        result = _(array).flatten();

        result = _.chain<SimpleStringObject[]>(array).flatten().value();
        result = _.chain(array).flatten().value();

        result = _.chain<SimpleStringObject[]>(array).flatten().value();
        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<SimpleStringObject>> = { 0: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, 1: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, length: 2 };
        let result: SimpleStringObject[];

        result = _.flatten<_.List<SimpleStringObject>>(list);
        result = _.flatten(list);

        result = _<_.List<SimpleStringObject>>(list).flatten();
        result = _(list).flatten();

        result = _.chain<_.List<SimpleStringObject>>(list).flatten().value();
        result = _.chain(list).flatten().value();

        result = _<_.List<SimpleStringObject>>(list).chain().flatten().value();
        result = _.chain(list).flatten().value();
    }

    // two dimensions, shallow
    {
        const array: SimpleStringObject[][] = [[{ a: 'a' }, { a: 'b' }], [{ a: 'a' }, { a: 'b' }]];
        let result: SimpleStringObject[];

        result = _.flatten<SimpleStringObject[]>(array, true);
        result = _.flatten(array, true);

        result = _<SimpleStringObject[]>(array).flatten(true);
        result = _(array).flatten(true);

        result = _.chain<SimpleStringObject[]>(array).flatten(true).value();
        result = _.chain(array).flatten(true).value();

        result = _.chain<SimpleStringObject[]>(array).flatten(true).value();
        result = _.chain(array).flatten(true).value();
    }

    {
        const list: _.List<_.List<SimpleStringObject>> = { 0: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, 1: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, length: 2 };
        let result: SimpleStringObject[];

        result = _.flatten<_.List<SimpleStringObject>>(list, true);
        result = _.flatten(list, true);

        result = _<_.List<SimpleStringObject>>(list).flatten(true);
        result = _(list).flatten(true);

        result = _.chain<_.List<SimpleStringObject>>(list).flatten(true).value();
        result = _.chain(list).flatten(true).value();

        result = _<_.List<SimpleStringObject>>(list).chain().flatten(true).value();
        result = _.chain(list).flatten(true).value();
    }

    // three dimensions, deep
    {
        const array: SimpleStringObject[][][] = [[[{ a: 'a' }, { a: 'b' }], [{ a: 'a' }, { a: 'b' }]]];
        let result: SimpleStringObject[];

        result = _.flatten<SimpleStringObject[][]>(array);
        result = _.flatten(array);

        result = _<SimpleStringObject[][]>(array).flatten();
        result = _(array).flatten();

        result = _.chain<SimpleStringObject[][]>(array).flatten().value();
        result = _.chain(array).flatten().value();

        result = _.chain<SimpleStringObject[][]>(array).flatten().value();
        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<_.List<SimpleStringObject>>> = { 0: { 0: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, 1: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, length: 2 }, length: 1 };
        let result: SimpleStringObject[];

        result = _.flatten<_.List<_.List<SimpleStringObject>>>(list);
        result = _.flatten(list);

        result = _<_.List<_.List<SimpleStringObject>>>(list).flatten();
        result = _(list).flatten();

        result = _.chain < _.List<_.List<SimpleStringObject>>>(list).flatten().value();
        result = _.chain(list).flatten().value();

        result = _<_.List<_.List<SimpleStringObject>>>(list).chain().flatten().value();
        result = _.chain(list).flatten().value();
    }

    // three dimensions, shallow
    {
        const array: SimpleStringObject[][][] = [[[{ a: 'a' }, { a: 'b' }], [{ a: 'a' }, { a: 'b' }]]];
        let result: SimpleStringObject[][];

        result = _.flatten<SimpleStringObject[][]>(array, true);
        result = _.flatten(array, true);

        result = _<SimpleStringObject[][]>(array).flatten(true);
        result = _(array).flatten(true);

        result = _.chain<SimpleStringObject[][]>(array).flatten(true).value();
        result = _.chain(array).flatten(true).value();

        result = _.chain<SimpleStringObject[][]>(array).flatten(true).value();
        result = _.chain(array).flatten(true).value();
    }

    {
        const list: _.List<_.List<_.List<SimpleStringObject>>> = { 0: { 0: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, 1: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, length: 2 }, length: 1 };
        let result: _.List<SimpleStringObject>[];

        result = _.flatten<_.List<_.List<SimpleStringObject>>>(list, true);
        result = _.flatten(list, true);

        result = _<_.List<_.List<SimpleStringObject>>>(list).flatten(true);
        result = _(list).flatten(true);

        result = _.chain<_.List<_.List<SimpleStringObject>>>(list).flatten(true).value();
        result = _.chain(list).flatten(true).value();

        result = _<_.List<_.List<SimpleStringObject>>>(list).chain().flatten(true).value();
        result = _.chain(list).flatten(true).value();
    }

    // four dimensions, deep - this is where recursion gives up and results in any[]
    {
        const array: SimpleStringObject[][][][] = [[[[{ a: 'a' }, { a: 'b' }], [{ a: 'a' }, { a: 'b' }]]]];
        let result: SimpleStringObject[];

        // $ExpectType any[]
        result = _.flatten<SimpleStringObject[][][]>(array);
        // $ExpectType any[]
        result = _.flatten(array);

        // $ExpectType any[]
        result = _<SimpleStringObject[][][]>(array).flatten();
        // $ExpectType any[]
        result = _(array).flatten();

        // $ExpectType any[]
        result = _.chain<SimpleStringObject[][][]>(array).flatten().value();
        // $ExpectType any[]
        result = _.chain(array).flatten().value();

        // $ExpectType any[]
        result = _.chain<SimpleStringObject[][][]>(array).flatten().value();
        // $ExpectType any[]
        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<_.List<_.List<SimpleStringObject>>>> = { 0: { 0: { 0: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, 1: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, length: 2 }, length: 1 }, length: 1 };
        let result: SimpleStringObject[];

        result = _.flatten<_.List<_.List<_.List<SimpleStringObject>>>>(list); // $ExpectType any[]
        result = _.flatten(list); // $ExpectType any[]

        result = _<_.List<_.List<_.List<SimpleStringObject>>>>(list).flatten(); // $ExpectType any[]
        result = _(list).flatten(); // $ExpectType any[]

        result = _.chain<_.List<_.List<_.List<SimpleStringObject>>>>(list).flatten().value(); // $ExpectType any[]
        result = _.chain(list).flatten().value(); // $ExpectType any[]

        result = _<_.List<_.List<_.List<SimpleStringObject>>>>(list).chain().flatten().value(); // $ExpectType any[]
        result = _.chain(list).flatten().value(); // $ExpectType any[]
    }
}

// without
{
    {
        const item1 = simpleStringObjectArray[0];
        const item2 = simpleStringObjectArray[1];
        let result: SimpleStringObject[];

        result = _.without<SimpleStringObject>(simpleStringObjectArray, item1, item2);
        result = _.without(simpleStringObjectArray, item1, item2);

        result = _<SimpleStringObject>(simpleStringObjectArray).without(item1, item2);
        result = _(simpleStringObjectArray).without(item1, item2);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).without(item1, item2).value();
        result = _.chain(simpleStringObjectArray).without(item1, item2).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).without(item1, item2).value();
        result = _.chain(simpleStringObjectArray).without(item1, item2).value();
    }

    {
        const item1 = simpleStringObjectList[0];
        const item2 = simpleStringObjectList[1];
        let result: SimpleStringObject[];

        result = _.without<SimpleStringObject>(simpleStringObjectList, item1, item2);
        result = _.without(simpleStringObjectList, item1, item2);

        result = _<SimpleStringObject>(simpleStringObjectList).without(item1, item2);
        result = _(simpleStringObjectList).without(item1, item2);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).without(item1, item2).value();
        result = _.chain(simpleStringObjectList).without(item1, item2).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).without(item1, item2).value();
        result = _.chain(simpleStringObjectList).without(item1, item2).value();
    }

    {
        const item1 = simpleString[0];
        const item2 = simpleString[1];
        let result: string[];

        result = _.without<string>(simpleString, item1, item2);
        result = _.without(simpleString, item1, item2);

        result = _<string>(simpleString).without(item1, item2);
        result = _(simpleString).without(item1, item2);

        result = _.chain<string>(simpleString).without(item1, item2).value();
        result = _.chain(simpleString).without(item1, item2).value();
    }
}

// union
{
    {
        const array1: SimpleStringObject[] = [{ a: 'a' }, { a: 'b' }];
        const array2: SimpleStringObject[] = [array1[0], { a: 'c' }];
        let result: SimpleStringObject[];

        result = _.union<SimpleStringObject>(array1, array2);
        result = _.union(array1, array2);

        result = _<SimpleStringObject>(array1).union(array2);
        result = _(array1).union(array2);

        result = _.chain<SimpleStringObject>(array1).union(array2).value();
        result = _.chain(array1).union(array2).value();

        result = _.chain<SimpleStringObject>(array1).union(array2).value();
        result = _.chain(array1).union(array2).value();
    }

    {
        const list1: _.List<SimpleStringObject> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const list2: _.List<SimpleStringObject> = { 0: list1[0], 1: { a: 'c' }, length: 2 };
        let result: SimpleStringObject[];

        result = _.union<SimpleStringObject>(list1, list2);
        result = _.union(list1, list2);

        result = _<SimpleStringObject>(list1).union(list2);
        result = _(list1).union(list2);

        result = _.chain<SimpleStringObject>(list1).union(list2).value();
        result = _.chain(list1).union(list2).value();

        result = _.chain<SimpleStringObject>(list1).union(list2).value();
        result = _.chain(list1).union(list2).value();
    }

    {
        const str1 = 'ab';
        const str2 = 'bc';
        let result: string[];

        result = _.union<string>(str1, str2);
        result = _.union(str1, str2);;

        result = _<string>(str1).union(str2);
        result = _(str1).union(str2);

        result = _.chain<string>(str1).union(str2).value();
        result = _.chain(str1).union(str2).value();
    }
}

// intersection
{
    {
        const array1: SimpleStringObject[] = [{ a: 'a' }, { a: 'b' }];
        const array2: SimpleStringObject[] = [array1[0], { a: 'c' }];
        let result: SimpleStringObject[];

        result = _.intersection<SimpleStringObject>(array1, array2);
        result = _.intersection(array1, array2);

        result = _<SimpleStringObject>(array1).intersection(array2);
        result = _(array1).intersection(array2);

        result = _.chain<SimpleStringObject>(array1).intersection(array2).value();
        result = _.chain(array1).intersection(array2).value();

        result = _.chain<SimpleStringObject>(array1).intersection(array2).value();
        result = _.chain(array1).intersection(array2).value();
    }

    {
        const list1: _.List<SimpleStringObject> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const list2: _.List<SimpleStringObject> = { 0: list1[0], 1: { a: 'c' }, length: 2 };
        let result: SimpleStringObject[];

        result = _.intersection<SimpleStringObject>(list1, list2);
        result = _.intersection(list1, list2);

        result = _<SimpleStringObject>(list1).intersection(list2);
        result = _(list1).intersection(list2);

        result = _.chain<SimpleStringObject>(list1).intersection(list2).value();
        result = _.chain(list1).intersection(list2).value();

        result = _.chain<SimpleStringObject>(list1).intersection(list2).value();
        result = _.chain(list1).intersection(list2).value();
    }

    {
        const str1 = 'ab';
        const str2 = 'bc';
        let result: string[];

        result = _.intersection<string>(str1, str2);
        result = _.intersection(str1, str2);;

        result = _<string>(str1).intersection(str2);
        result = _(str1).intersection(str2);

        result = _.chain<string>(str1).intersection(str2).value();
        result = _.chain(str1).intersection(str2).value();
    }
}

// difference
{
    {
        const array1: SimpleStringObject[] = [{ a: 'a' }, { a: 'b' }];
        const array2: SimpleStringObject[] = [array1[0], { a: 'c' }];
        let result: SimpleStringObject[];

        result = _.difference<SimpleStringObject>(array1, array2);
        result = _.difference(array1, array2);

        result = _<SimpleStringObject>(array1).difference(array2);
        result = _(array1).difference(array2);

        result = _.chain<SimpleStringObject>(array1).difference(array2).value();
        result = _.chain(array1).difference(array2).value();

        result = _.chain<SimpleStringObject>(array1).difference(array2).value();
        result = _.chain(array1).difference(array2).value();
    }

    {
        const list1: _.List<SimpleStringObject> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const list2: _.List<SimpleStringObject> = { 0: list1[0], 1: { a: 'c' }, length: 2 };
        let result: SimpleStringObject[];

        result = _.difference<SimpleStringObject>(list1, list2);
        result = _.difference(list1, list2);

        result = _<SimpleStringObject>(list1).difference(list2);
        result = _(list1).difference(list2);

        result = _.chain<SimpleStringObject>(list1).difference(list2).value();
        result = _.chain(list1).difference(list2).value();

        result = _.chain<SimpleStringObject>(list1).difference(list2).value();
        result = _.chain(list1).difference(list2).value();
    }

    {
        const str1 = 'ab';
        const str2 = 'bc';
        let result: string[];

        result = _.difference<string>(str1, str2);
        result = _.difference(str1, str2);;

        result = _<string>(str1).difference(str2);
        result = _(str1).difference(str2);

        result = _.chain<string>(str1).difference(str2).value();
        result = _.chain(str1).difference(str2).value();
    }
}

// uniq, unique
{
    // function iterator
    {
        let result: SimpleStringObject[];

        result = _.uniq<SimpleStringObject>(simpleStringObjectArray);
        result = _.uniq<SimpleStringObject>(simpleStringObjectArray, true);
        result = _.uniq<SimpleStringObject>(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator);
        result = _.uniq<SimpleStringObject>(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator, context);
        result = _.uniq(simpleStringObjectArray);
        result = _.uniq(simpleStringObjectArray, true);
        result = _.uniq(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator);
        result = _.uniq(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).uniq();
        result = _<SimpleStringObject>(simpleStringObjectArray).uniq(true);
        result = _<SimpleStringObject>(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectArray).uniq();
        result = _(simpleStringObjectArray).uniq(true);
        result = _(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).uniq().value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).uniq(true).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).uniq().value();
        result = _.chain(simpleStringObjectArray).uniq(true).value();
        result = _.chain(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).uniq(true, simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.unique<SimpleStringObject>(simpleStringObjectArray);
        result = _.unique<SimpleStringObject>(simpleStringObjectArray, true);
        result = _.unique<SimpleStringObject>(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator);
        result = _.unique<SimpleStringObject>(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator, context);
        result = _.unique(simpleStringObjectArray);
        result = _.unique(simpleStringObjectArray, true);
        result = _.unique(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator);
        result = _.unique(simpleStringObjectArray, true, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).unique();
        result = _<SimpleStringObject>(simpleStringObjectArray).unique(true);
        result = _<SimpleStringObject>(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectArray).unique();
        result = _(simpleStringObjectArray).unique(true);
        result = _(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).unique().value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).unique(true).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).unique().value();
        result = _.chain(simpleStringObjectArray).unique(true).value();
        result = _.chain(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).unique().value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).unique(true).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectArray).unique().value();
        result = _.chain(simpleStringObjectArray).unique(true).value();
        result = _.chain(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectArray).unique(true, simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.uniq<SimpleStringObject>(simpleStringObjectList);
        result = _.uniq<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.uniq<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        result = _.uniq<SimpleStringObject>(simpleStringObjectList, true);
        result = _.uniq<SimpleStringObject>(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator);
        result = _.uniq<SimpleStringObject>(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator, context);
        result = _.uniq(simpleStringObjectList);
        result = _.uniq(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.uniq(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        result = _.uniq(simpleStringObjectList, true);
        result = _.uniq(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator);
        result = _.uniq(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).uniq();
        result = _<SimpleStringObject>(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator, context);
        result = _<SimpleStringObject>(simpleStringObjectList).uniq(true);
        result = _<SimpleStringObject>(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectList).uniq();
        result = _(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectList).uniq(true);
        result = _(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).uniq().value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).uniq(true).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).uniq().value();
        result = _.chain(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).uniq(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).uniq(true).value();
        result = _.chain(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).uniq(true, simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.unique<SimpleStringObject>(simpleStringObjectList);
        result = _.unique<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.unique<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        result = _.unique<SimpleStringObject>(simpleStringObjectList, true);
        result = _.unique<SimpleStringObject>(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator);
        result = _.unique<SimpleStringObject>(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator, context);
        result = _.unique(simpleStringObjectList);
        result = _.unique(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        result = _.unique(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        result = _.unique(simpleStringObjectList, true);
        result = _.unique(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator);
        result = _.unique(simpleStringObjectList, true, simpleStringObjectListPropertySelectingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).unique();
        result = _<SimpleStringObject>(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator, context);
        result = _<SimpleStringObject>(simpleStringObjectList).unique(true);
        result = _<SimpleStringObject>(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectList).unique();
        result = _(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator, context);
        result = _(simpleStringObjectList).unique(true);
        result = _(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator);
        result = _(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique().value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(true).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).unique().value();
        result = _.chain(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain(simpleStringObjectList).unique(true).value();
        result = _.chain(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique().value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(simpleStringObjectListPropertySelectingIterator, context).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(true).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(true, simpleStringObjectListPropertySelectingIterator, context).value();
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

        result = _.uniq<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.uniq<SimpleStringObject>(simpleStringObjectArray, true, simpleObjectPropertyName);
        result = _.uniq(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.uniq(simpleStringObjectArray, true, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).uniq(simpleObjectPropertyName);
        result = _<SimpleStringObject>(simpleStringObjectArray).uniq(true, simpleObjectPropertyName);
        result = _(simpleStringObjectArray).uniq(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).uniq(true, simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).uniq(simpleObjectPropertyName).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).uniq(true, simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).uniq(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).uniq(true, simpleObjectPropertyName).value();

        result = _.unique<SimpleStringObject>(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.unique<SimpleStringObject>(simpleStringObjectArray, true, simpleObjectPropertyName);
        result = _.unique(simpleStringObjectArray, simpleObjectPropertyName);
        result = _.unique(simpleStringObjectArray, true, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectArray).unique(simpleObjectPropertyName);
        result = _<SimpleStringObject>(simpleStringObjectArray).unique(true, simpleObjectPropertyName);
        result = _(simpleStringObjectArray).unique(simpleObjectPropertyName);
        result = _(simpleStringObjectArray).unique(true, simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).unique(simpleObjectPropertyName).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).unique(true, simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).unique(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).unique(true, simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).unique(simpleObjectPropertyName).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).unique(true, simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).unique(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectArray).unique(true, simpleObjectPropertyName).value();
    }

    {
        let result: SimpleStringObject[];

        result = _.uniq<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.uniq<SimpleStringObject>(simpleStringObjectList, true, simpleObjectPropertyName);
        result = _.uniq(simpleStringObjectList, simpleObjectPropertyName);
        result = _.uniq(simpleStringObjectList, true, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).uniq(simpleObjectPropertyName);
        result = _<SimpleStringObject>(simpleStringObjectList).uniq(true, simpleObjectPropertyName);
        result = _(simpleStringObjectList).uniq(simpleObjectPropertyName);
        result = _(simpleStringObjectList).uniq(true, simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).uniq(simpleObjectPropertyName).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).uniq(true, simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).uniq(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).uniq(true, simpleObjectPropertyName).value();

        result = _.unique<SimpleStringObject>(simpleStringObjectList, simpleObjectPropertyName);
        result = _.unique<SimpleStringObject>(simpleStringObjectList, true, simpleObjectPropertyName);
        result = _.unique(simpleStringObjectList, simpleObjectPropertyName);
        result = _.unique(simpleStringObjectList, true, simpleObjectPropertyName);

        result = _<SimpleStringObject>(simpleStringObjectList).unique(simpleObjectPropertyName);
        result = _<SimpleStringObject>(simpleStringObjectList).unique(true, simpleObjectPropertyName);
        result = _(simpleStringObjectList).unique(simpleObjectPropertyName);
        result = _(simpleStringObjectList).unique(true, simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(simpleObjectPropertyName).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(true, simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).unique(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).unique(true, simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(simpleObjectPropertyName).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).unique(true, simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).unique(simpleObjectPropertyName).value();
        result = _.chain(simpleStringObjectList).unique(true, simpleObjectPropertyName).value();
    }
}

// zip
// once TS 3.0 is reached as a minimum version, as a breaking change, consider updating zip to something like zip<T extends _.List<any>[]>(...arrays: T): TypeOfListItem<T>[]
// except not that because that doesn't distribute to each type in the tuple individually and also ends up making a type union
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

        result = _.object<number>(keyArray, valueArray);
        result = _.object(keyArray, valueArray);

        result = _<string>(keyArray).object<number>(valueArray);
        result = _(keyArray).object(valueArray);

        result = _.chain<string>(keyArray).object<number>(valueArray).value();
        result = _.chain(keyArray).object(valueArray).value();
    }

    {
        const keyList: _.List<string> = { 0: 'a', 1: 'b', length: 2 };
        const valueList: _.List<number> = { 0: 1, 1: 2, length: 2 };
        let result: _.Dictionary<number>;

        result = _.object<number>(keyList, valueList);
        result = _.object(keyList, valueList);

        result = _<string>(keyList).object<number>(valueList);
        result = _(keyList).object(valueList);

        result = _.chain<string>(keyList).object<number>(valueList).value();
        result = _.chain(keyList).object(valueList).value();
    }

    // key value pair tuples
    {
        const array: [string, number][] = [['a', 1], ['b', 2]];
        let result: _.Dictionary<number>;

        result = _.object<number>(array);
        result = _.object(array);

        result = _<[string, number]>(array).object();
        result = _(array).object();

        result = _.chain<[string, number]>(array).object().value();
        result = _.chain(array).object().value();
    }

    {
        const list: _.List<[string, number]> = { 0: ['a', 1], 1: ['b', 2], length: 2 };
        let result: _.Dictionary<number>;

        result = _.object<number>(list);
        result = _.object(list);

        result = _<[string, number]>(list).object();
        result = _(list).object();

        result = _.chain<[string, number]>(list).object().value();
        result = _.chain(list).object().value();
    }
}

// chunk
{
    {
        const length = 2;
        let result: SimpleStringObject[][];

        result = _.chunk<SimpleStringObject>(simpleStringObjectArray, length);
        result = _.chunk(simpleStringObjectArray, length);

        result = _<SimpleStringObject>(simpleStringObjectArray).chunk(length);
        result = _(simpleStringObjectArray).chunk(length);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).chunk(length).value();
        result = _.chain(simpleStringObjectArray).chunk(length).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).chunk(length).value();
        result = _.chain(simpleStringObjectArray).chunk(length).value();
    }

    {
        const length = 2;
        let result: SimpleStringObject[][];

        result = _.chunk<SimpleStringObject>(simpleStringObjectList, length);
        result = _.chunk(simpleStringObjectList, length);

        result = _<SimpleStringObject>(simpleStringObjectList).chunk(length);
        result = _(simpleStringObjectList).chunk(length);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).chunk(length).value();
        result = _.chain(simpleStringObjectList).chunk(length).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).chunk(length).value();
        result = _.chain(simpleStringObjectList).chunk(length).value();
    }

    {
        const length = 2;
        let result: string[][];

        result = _.chunk<string>(simpleString, length);
        result = _.chunk(simpleString, length);

        result = _<string>(simpleString).chunk(length);
        result = _(simpleString).chunk(length);

        result = _.chain<string>(simpleString).chunk(length).value();
        result = _.chain(simpleString).chunk(length).value();
    }
}

// indexOf
{
    const isSorted = true;

    {
        const item = simpleStringObjectArray[0];
        let result: number;

        result = _.indexOf<SimpleStringObject>(simpleStringObjectArray, item);
        result = _.indexOf<SimpleStringObject>(simpleStringObjectArray, item, isSorted);
        result = _.indexOf(simpleStringObjectArray, item);
        result = _.indexOf(simpleStringObjectArray, item, isSorted);

        result = _<SimpleStringObject>(simpleStringObjectArray).indexOf(item);
        result = _<SimpleStringObject>(simpleStringObjectArray).indexOf(item, isSorted);
        result = _(simpleStringObjectArray).indexOf(item);
        result = _(simpleStringObjectArray).indexOf(item, isSorted);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).indexOf(item).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).indexOf(item, isSorted).value();
        result = _.chain(simpleStringObjectArray).indexOf(item).value();
        result = _.chain(simpleStringObjectArray).indexOf(item, isSorted).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).indexOf(item).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).indexOf(item, isSorted).value();
        result = _.chain(simpleStringObjectArray).indexOf(item).value();
        result = _.chain(simpleStringObjectArray).indexOf(item, isSorted).value();
    }

    {
        const item = simpleStringObjectList[0];
        let result: number;

        result = _.indexOf<SimpleStringObject>(simpleStringObjectList, item);
        result = _.indexOf<SimpleStringObject>(simpleStringObjectList, item, isSorted);
        result = _.indexOf(simpleStringObjectList, item);
        result = _.indexOf(simpleStringObjectList, item, isSorted);

        result = _<SimpleStringObject>(simpleStringObjectList).indexOf(item);
        result = _<SimpleStringObject>(simpleStringObjectList).indexOf(item, isSorted);
        result = _(simpleStringObjectList).indexOf(item);
        result = _(simpleStringObjectList).indexOf(item, isSorted);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).indexOf(item).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).indexOf(item, isSorted).value();
        result = _.chain(simpleStringObjectList).indexOf(item).value();
        result = _.chain(simpleStringObjectList).indexOf(item, isSorted).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).indexOf(item).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).indexOf(item, isSorted).value();
        result = _.chain(simpleStringObjectList).indexOf(item).value();
        result = _.chain(simpleStringObjectList).indexOf(item, isSorted).value();
    }

    {
        const item = simpleString[0];
        let result: number;

        result = _.indexOf<string>(simpleString, item);
        result = _.indexOf<string>(simpleString, item, isSorted);
        result = _.indexOf(simpleString, item);
        result = _.indexOf(simpleString, item, isSorted);

        result = _<string>(simpleString).indexOf(item);
        result = _<string>(simpleString).indexOf(item, isSorted);
        result = _(simpleString).indexOf(item);
        result = _(simpleString).indexOf(item, isSorted);

        result = _.chain<string>(simpleString).indexOf(item).value();
        result = _.chain<string>(simpleString).indexOf(item, isSorted).value();
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

        result = _.lastIndexOf<SimpleStringObject>(simpleStringObjectArray, item);
        result = _.lastIndexOf<SimpleStringObject>(simpleStringObjectArray, item, fromIndex);
        result = _.lastIndexOf(simpleStringObjectArray, item);
        result = _.lastIndexOf(simpleStringObjectArray, item, fromIndex);

        result = _<SimpleStringObject>(simpleStringObjectArray).lastIndexOf(item);
        result = _<SimpleStringObject>(simpleStringObjectArray).lastIndexOf(item, fromIndex);
        result = _(simpleStringObjectArray).lastIndexOf(item);
        result = _(simpleStringObjectArray).lastIndexOf(item, fromIndex);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).lastIndexOf(item).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).lastIndexOf(item, fromIndex).value();
        result = _.chain(simpleStringObjectArray).lastIndexOf(item).value();
        result = _.chain(simpleStringObjectArray).lastIndexOf(item, fromIndex).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).lastIndexOf(item).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).lastIndexOf(item, fromIndex).value();
        result = _.chain(simpleStringObjectArray).lastIndexOf(item).value();
        result = _.chain(simpleStringObjectArray).lastIndexOf(item, fromIndex).value();
    }

    {
        const item = simpleStringObjectList[0];
        let result: number;

        result = _.lastIndexOf<SimpleStringObject>(simpleStringObjectList, item);
        result = _.lastIndexOf<SimpleStringObject>(simpleStringObjectList, item, fromIndex);
        result = _.lastIndexOf(simpleStringObjectList, item);
        result = _.lastIndexOf(simpleStringObjectList, item, fromIndex);

        result = _<SimpleStringObject>(simpleStringObjectList).lastIndexOf(item);
        result = _<SimpleStringObject>(simpleStringObjectList).lastIndexOf(item, fromIndex);
        result = _(simpleStringObjectList).lastIndexOf(item);
        result = _(simpleStringObjectList).lastIndexOf(item, fromIndex);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).lastIndexOf(item).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).lastIndexOf(item, fromIndex).value();
        result = _.chain(simpleStringObjectList).lastIndexOf(item).value();
        result = _.chain(simpleStringObjectList).lastIndexOf(item, fromIndex).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).lastIndexOf(item).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).lastIndexOf(item, fromIndex).value();
        result = _.chain(simpleStringObjectList).lastIndexOf(item).value();
        result = _.chain(simpleStringObjectList).lastIndexOf(item, fromIndex).value();
    }

    {
        const item = simpleString[0];
        let result: number;

        result = _.lastIndexOf<string>(simpleString, item);
        result = _.lastIndexOf<string>(simpleString, item, fromIndex);
        result = _.lastIndexOf(simpleString, item);
        result = _.lastIndexOf(simpleString, item, fromIndex);

        result = _<string>(simpleString).lastIndexOf(item);
        result = _<string>(simpleString).lastIndexOf(item, fromIndex);
        result = _(simpleString).lastIndexOf(item);
        result = _(simpleString).lastIndexOf(item, fromIndex);

        result = _.chain<string>(simpleString).lastIndexOf(item).value();
        result = _.chain<string>(simpleString).lastIndexOf(item, fromIndex).value();
        result = _.chain(simpleString).lastIndexOf(item).value();
        result = _.chain(simpleString).lastIndexOf(item, fromIndex).value();
    }
}

// sortedIndex
{
    // no iterator
    {
        const array: string[] = ['a', 'c'];
        const item = 'b';
        let result: number;

        result = _.sortedIndex<string>(array, item);
        result = _.sortedIndex(array, item);

        result = _<string>(array).sortedIndex(item);
        result = _(array).sortedIndex(item);

        result = _.chain<string>(array).sortedIndex(item).value();
        result = _.chain(array).sortedIndex(item).value();

        result = _.chain<string>(array).sortedIndex(item).value();
        result = _.chain(array).sortedIndex(item).value();
    }

    {
        const list: _.List<string> = { 0: 'a', 1: 'c', length: 2 };
        const item = 'b';
        let result: number;

        result = _.sortedIndex<string>(list, item);
        result = _.sortedIndex(list, item);

        result = _<string>(list).sortedIndex(item);
        result = _(list).sortedIndex(item);

        result = _.chain<string>(list).sortedIndex(item).value();
        result = _.chain(list).sortedIndex(item).value();

        result = _.chain<string>(list).sortedIndex(item).value();
        result = _.chain(list).sortedIndex(item).value();
    }

    {
        const simpleString = 'ac';
        const item = 'b';
        let result: number;

        result = _.sortedIndex<string>(simpleString, item);
        result = _.sortedIndex(simpleString, item);

        result = _<string>(simpleString).sortedIndex(item);
        result = _(simpleString).sortedIndex(item);

        result = _.chain<string>(simpleString).sortedIndex(item).value();
        result = _.chain(simpleString).sortedIndex(item).value();
    }

    // function iterator
    {
        const array: SimpleStringObject[] = [{ a: 'a' }, { a: 'c' }];
        const item = { a: 'b' };
        const iterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a;
        let result: number;

        result = _.sortedIndex<SimpleStringObject>(array, item, iterator);
        result = _.sortedIndex<SimpleStringObject>(array, item, iterator, context);
        result = _.sortedIndex(array, item, iterator);
        result = _.sortedIndex(array, item, iterator, context);

        result = _<SimpleStringObject>(array).sortedIndex(item, iterator);
        result = _<SimpleStringObject>(array).sortedIndex(item, iterator, context);
        result = _(array).sortedIndex(item, iterator);
        result = _(array).sortedIndex(item, iterator, context);

        result = _.chain<SimpleStringObject>(array).sortedIndex(item, iterator).value();
        result = _.chain<SimpleStringObject>(array).sortedIndex(item, iterator, context).value();
        result = _.chain(array).sortedIndex(item, iterator).value();
        result = _.chain(array).sortedIndex(item, iterator, context).value();

        result = _.chain<SimpleStringObject>(array).sortedIndex(item, iterator).value();
        result = _.chain<SimpleStringObject>(array).sortedIndex(item, iterator, context).value();
        result = _.chain(array).sortedIndex(item, iterator).value();
        result = _.chain(array).sortedIndex(item, iterator, context).value();
    }

    {
        const list: _.List<SimpleStringObject> = { 0: { a: 'a' }, 1: { a: 'c' }, length: 2 };
        const item = { a: 'b' };
        const iterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a;
        let result: number;

        result = _.sortedIndex<SimpleStringObject>(list, item, iterator);
        result = _.sortedIndex<SimpleStringObject>(list, item, iterator, context);
        result = _.sortedIndex(list, item, iterator);
        result = _.sortedIndex(list, item, iterator, context);

        result = _<SimpleStringObject>(list).sortedIndex(item, iterator);
        result = _<SimpleStringObject>(list).sortedIndex(item, iterator, context);
        result = _(list).sortedIndex(item, iterator);
        result = _(list).sortedIndex(item, iterator, context);

        result = _.chain<SimpleStringObject>(list).sortedIndex(item, iterator).value();
        result = _.chain<SimpleStringObject>(list).sortedIndex(item, iterator, context).value();
        result = _.chain(list).sortedIndex(item, iterator).value();
        result = _.chain(list).sortedIndex(item, iterator, context).value();

        result = _.chain<SimpleStringObject>(list).sortedIndex(item, iterator).value();
        result = _.chain<SimpleStringObject>(list).sortedIndex(item, iterator, context).value();
        result = _.chain(list).sortedIndex(item, iterator).value();
        result = _.chain(list).sortedIndex(item, iterator, context).value();
    }

    // property name iterator
    {
        const array: SimpleStringObject[] = [{ a: 'a' }, { a: 'c' }];
        const item = { a: 'b' };
        const simpleObjectPropertyName = 'a'
        let result: number;

        result = _.sortedIndex<SimpleStringObject>(array, item, simpleObjectPropertyName);
        result = _.sortedIndex(array, item, simpleObjectPropertyName);

        result = _<SimpleStringObject>(array).sortedIndex(item, simpleObjectPropertyName);
        result = _(array).sortedIndex(item, simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(array).sortedIndex(item, simpleObjectPropertyName).value();
        result = _.chain(array).sortedIndex(item, simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(array).sortedIndex(item, simpleObjectPropertyName).value();
        result = _.chain(array).sortedIndex(item, simpleObjectPropertyName).value();
    }

    {
        const list: _.List<SimpleStringObject> = { 0: { a: 'a' }, 1: { a: 'c' }, length: 2 };
        const item = { a: 'b' };
        let result: number;

        result = _.sortedIndex<SimpleStringObject>(list, item, simpleObjectPropertyName);
        result = _.sortedIndex(list, item, simpleObjectPropertyName);

        result = _<SimpleStringObject>(list).sortedIndex(item, simpleObjectPropertyName);
        result = _(list).sortedIndex(item, simpleObjectPropertyName);

        result = _.chain<SimpleStringObject>(list).sortedIndex(item, simpleObjectPropertyName).value();
        result = _.chain(list).sortedIndex(item, simpleObjectPropertyName).value();

        result = _.chain<SimpleStringObject>(list).sortedIndex(item, simpleObjectPropertyName).value();
        result = _.chain(list).sortedIndex(item, simpleObjectPropertyName).value();
    }
}

// findIndex
{
    {
        let result: number;

        result = _.findIndex<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.findIndex<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);
        result = _.findIndex(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.findIndex(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).findIndex(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        const array: { a: string, b: string }[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'd' }];
        let result: number;

        result = _.findIndex<SimpleStringObject>(array, simpleStringObjectPartialPropertyMatch);
        result = _.findIndex(array, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(array).findIndex(simpleStringObjectPartialPropertyMatch);
        result = _(array).findIndex(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(array).findIndex(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(array).findIndex(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(array).findIndex(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(array).findIndex(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: number;

        result = _.findIndex<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.findIndex<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);
        result = _.findIndex(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.findIndex(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).findIndex(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        const list: _.List<{ a: string, b: string }> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'd' }, length: 2 };
        let result: number;

        result = _.findIndex<SimpleStringObject>(list, simpleStringObjectPartialPropertyMatch);
        result = _.findIndex(list, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(list).findIndex(simpleStringObjectPartialPropertyMatch);
        result = _(list).findIndex(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(list).findIndex(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(list).findIndex(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(list).findIndex(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(list).findIndex(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: number;

        result = _.findIndex<string>(simpleString, stringListComparingIterator);
        result = _.findIndex<string>(simpleString, stringListComparingIterator, context);
        result = _.findIndex(simpleString, stringListComparingIterator);
        result = _.findIndex(simpleString, stringListComparingIterator, context);

        result = _<string>(simpleString).findIndex(stringListComparingIterator);
        result = _<string>(simpleString).findIndex(stringListComparingIterator, context);
        result = _(simpleString).findIndex(stringListComparingIterator);
        result = _(simpleString).findIndex(stringListComparingIterator, context);

        result = _.chain<string>(simpleString).findIndex(stringListComparingIterator).value();
        result = _.chain<string>(simpleString).findIndex(stringListComparingIterator, context).value();
        result = _.chain(simpleString).findIndex(stringListComparingIterator).value();
        result = _.chain(simpleString).findIndex(stringListComparingIterator, context).value();
    }
}

// findLastIndex
{
    {
        let result: number;

        result = _.findLastIndex<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.findLastIndex<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);
        result = _.findLastIndex(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator);
        result = _.findLastIndex(simpleStringObjectArray, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectArray).findLastIndex(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        const array: { a: string, b: string }[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'd' }];
        let result: number;

        result = _.findLastIndex<SimpleStringObject>(array, simpleStringObjectPartialPropertyMatch);
        result = _.findLastIndex(array, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(array).findLastIndex(simpleStringObjectPartialPropertyMatch);
        result = _(array).findLastIndex(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(array).findLastIndex(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(array).findLastIndex(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(array).findLastIndex(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(array).findLastIndex(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: number;

        result = _.findLastIndex<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.findLastIndex<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);
        result = _.findLastIndex(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator);
        result = _.findLastIndex(simpleStringObjectList, simpleStringObjectListPropertyComparingIterator, context);

        result = _<SimpleStringObject>(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator);
        result = _<SimpleStringObject>(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator, context);
        result = _(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator);
        result = _(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator, context);

        result = _.chain<SimpleStringObject>(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator, context).value();

        result = _.chain<SimpleStringObject>(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain<SimpleStringObject>(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator, context).value();
        result = _.chain(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator).value();
        result = _.chain(simpleStringObjectList).findLastIndex(simpleStringObjectListPropertyComparingIterator, context).value();
    }

    {
        const list: _.List<{ a: string, b: string }> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'd' }, length: 2 };
        let result: number;

        result = _.findLastIndex<SimpleStringObject>(list, simpleStringObjectPartialPropertyMatch);
        result = _.findLastIndex(list, simpleStringObjectPartialPropertyMatch);

        result = _<SimpleStringObject>(list).findLastIndex(simpleStringObjectPartialPropertyMatch);
        result = _(list).findLastIndex(simpleStringObjectPartialPropertyMatch);

        result = _.chain<SimpleStringObject>(list).findLastIndex(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(list).findLastIndex(simpleStringObjectPartialPropertyMatch).value();

        result = _.chain<SimpleStringObject>(list).findLastIndex(simpleStringObjectPartialPropertyMatch).value();
        result = _.chain(list).findLastIndex(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: number;

        result = _.findLastIndex<string>(simpleString, stringListComparingIterator);
        result = _.findLastIndex<string>(simpleString, stringListComparingIterator, context);
        result = _.findLastIndex(simpleString, stringListComparingIterator);
        result = _.findLastIndex(simpleString, stringListComparingIterator, context);

        result = _<string>(simpleString).findLastIndex(stringListComparingIterator);
        result = _<string>(simpleString).findLastIndex(stringListComparingIterator, context);
        result = _(simpleString).findLastIndex(stringListComparingIterator);
        result = _(simpleString).findLastIndex(stringListComparingIterator, context);

        result = _.chain<string>(simpleString).findLastIndex(stringListComparingIterator).value();
        result = _.chain<string>(simpleString).findLastIndex(stringListComparingIterator, context).value();
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

// Chaining

// chain
// as a breaking change, consider either removing Chain.chain or making its return type "never" since while it is technically something that one can do as far as I can tell
// doing it always results in a stack overflow
// as a breaking chnage, consider updating chain<string>() to return Chain<string, string> rather than Chain<string, _.List<string>>
{
    {
        let result: _._Chain<SimpleStringObject, SimpleStringObject[]>;

        result = _.chain<SimpleStringObject>(simpleStringObjectArray);
        result = _.chain(simpleStringObjectArray);

        result = _<SimpleStringObject>(simpleStringObjectArray).chain();
        result = _(simpleStringObjectArray).chain();
    }

    {
        let result: _._Chain<SimpleStringObject, _.List<SimpleStringObject>>;

        result = _.chain<SimpleStringObject>(simpleStringObjectList);
        result = _.chain(simpleStringObjectList);

        result = _<SimpleStringObject>(simpleStringObjectList).chain();
        result = _(simpleStringObjectList).chain();
    }

    {
        let result: _._Chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>;

        result = _.chain<SimpleStringObject>(simpleStringObjectDictionary);
        result = _.chain(simpleStringObjectDictionary);

        result = _<SimpleStringObject>(simpleStringObjectDictionary).chain();
        result = _(simpleStringObjectDictionary).chain();
    }

    {
        let result: _._Chain<string, _.List<string>>;

        result = _.chain<string>(simpleString);
        result = _.chain(simpleString);

        result = _<string>(simpleString).chain();
        result = _(simpleString).chain();
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

    let numberObjects = [{simpleObjectPropertyName: 'odd', value: 1}, {simpleObjectPropertyName: 'even', value: 2}, {simpleObjectPropertyName: 'even', value: 0}];
    let evenAndOddGroupedNumbers = _.chain(numberObjects)
        .groupBy('simpleObjectPropertyName')
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
