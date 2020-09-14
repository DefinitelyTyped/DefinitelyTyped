/**************************************
 * Common Testing Types and Variables *
 **************************************/
declare const $: any;
declare const window: any;
declare const alert: (msg: string) => any;
declare const console: {log: any};

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
declare const noParametersRecordDictionary: _.Dictionary<NoParametersRecord>;

interface TwoParametersRecord {
    a: (arg0: number, arg1: string) => void;
}

declare const twoParametersRecordList: _.List<TwoParametersRecord>;
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
declare const numberDictionary: _.Dictionary<number>;

// boolean
declare const booleanList: _.List<boolean>;
declare const booleanDictionary: _.Dictionary<boolean>;

// any
declare const anyValue: any;
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

/***************
 * Usage Tests *
 ***************/
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

// Test map function with _ChainOfArrays<>
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

_.property('name')(moe);
_.property(['name'])(moe);
_.property(['luckyNumbers', 2])(moe)

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
    var numArray = _.chain([1, 2, 3, 4, 5, 6, 7, 8])
        .filter(num => num % 2 == 0)
        .map(num => num * num)
        .value();

    var strArray = _([1, 2, 3, 4])
        .chain()
        .filter(num => num % 2 == 0)
        .tap(alert)
        .map(num => "string" + num)
        .value();

    var n = _.chain([1, 2, 3, 200])
        .filter(num => num % 2 == 0)
        .tap(alert)
        .map(num => num * num)
        .max()
        .value();

    var hoverOverValueShouldBeNumberNotAny = _([1, 2, 3]).chain()
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

    let numberObjects = [{property: 'odd', value: 1}, {property: 'even', value: 2}, {property: 'even', value: 0}];
    let evenAndOddGroupedNumbers = _.chain(numberObjects)
        .groupBy('property')
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

/*******************************
 * Combinatorial Tests - Types *
 *******************************/

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

// Types

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

declare const deepPropertyResult: _.IterateeResult<_.EnumerableKey[], StringRecord>;
deepPropertyResult; // $ExpectType any

declare const nullResult: _.IterateeResult<null, StringRecord>;
nullResult; // $ExpectType StringRecord

declare const undefinedResult: _.IterateeResult<undefined, StringRecord>;
undefinedResult; // $ExpectType StringRecord

/*************************************
 * Combinatorial Tests - Collections *
 *************************************/

// each, forEach
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

// map, collect
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

    // function iteratee - any - map
    _.map(anyValue, recordListSelector, context); // $ExpectType string[]
    _(anyValue).map(recordListSelector, context); // $ExpectType string[]
    extractChainTypes(_.chain(anyValue).map(recordListSelector, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - any - collect
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

    // deep property iteratee - any - map
    _.map(anyValue, deepProperty); // $ExpectType any[]
    _(anyValue).map(deepProperty); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).map(deepProperty)); // $ExpectType ChainType<any[], any>

    // deep property iteratee - any - collect
    _.collect(anyValue, deepProperty); // $ExpectType any[]
    _(anyValue).collect(deepProperty); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).collect(deepProperty)); // $ExpectType ChainType<any[], any>
}

// reduce, foldl, inject
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
    _.findWhere(nonIntersectingList, matcher); // $ExpectType StringRecord | NonIntersectingRecord | undefined
    _(nonIntersectingList).findWhere(matcher); // $ExpectType StringRecord | NonIntersectingRecord | undefined
    extractChainTypes(_.chain(nonIntersectingList).findWhere(matcher)); // $ExpectType ChainType<StringRecord | NonIntersectingRecord | undefined, never>

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

/********************************
 * Combinatorial Tests - Arrays *
 ********************************/

// first, head, take
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

// object
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

/*********************************
 * Combinatorial Tests - Objects *
 *********************************/

// mapObject
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
{
    // dictionaries
    _.pairs(recordDictionary); // $ExpectType [string, StringRecord][]
    _(recordDictionary).pairs(); // $ExpectType [string, StringRecord][]
    extractChainTypes(_.chain(recordDictionary).pairs()); // $ExpectType ChainType<[string, StringRecord][], [string, StringRecord]>

    // objects
    _.pairs(mixedTypeRecord); // $ExpectType ["a" | "b" | "c", any][]
    _(mixedTypeRecord).pairs(); // $ExpectType ["a" | "b" | "c", any][]
    extractChainTypes(_.chain(mixedTypeRecord).pairs()); // $ExpectType ChainType<["a" | "b" | "c", any][], ["a" | "b" | "c", any]>

    // any
    _.pairs(anyValue); // $ExpectType [string, any][]
    _(anyValue).pairs(); // $ExpectType [string, any][]
    extractChainTypes(_.chain(anyValue).pairs()); // $ExpectType ChainType<[string, any][], [string, any]>
}

// findKey
{
    // function iteratee - objects
    _.findKey(mixedTypeRecord, mixedTypeTester, context); // $ExpectType "a" | "b" | "c" | undefined
    _(mixedTypeRecord).findKey(mixedTypeTester, context); // $ExpectType "a" | "b" | "c" | undefined
    extractChainTypes(_.chain(mixedTypeRecord).findKey(mixedTypeTester, context)); // $ExpectType ChainType<"a" | "b" | "c" | undefined, string>

    // function iteratee - dictionaries
    _.findKey(recordDictionary, recordDictionaryTester, context); // $ExpectType string | undefined
    _(recordDictionary).findKey(recordDictionaryTester, context); // $ExpectType string | undefined
    extractChainTypes(_.chain(recordDictionary).findKey(recordDictionaryTester, context)); // $ExpectType ChainType<string | undefined, string>

    // function iteratee - any
    _.findKey(anyValue, recordDictionaryTester, context); // $ExpectType string | undefined
    _(anyValue).findKey(recordDictionaryTester, context); // $ExpectType string | undefined
    extractChainTypes(_.chain(anyValue).findKey(recordDictionaryTester, context)); // $ExpectType ChainType<string | undefined, string>

    // matcher iteratee - objects
    _.findKey(mixedTypeRecord, matcher); // $ExpectType "a" | "b" | "c" | undefined
    _(mixedTypeRecord).findKey(matcher); // $ExpectType "a" | "b" | "c" | undefined
    extractChainTypes(_.chain(mixedTypeRecord).findKey(matcher)); // $ExpectType ChainType<"a" | "b" | "c" | undefined, string>

    // shallow property iteratee - objects
    _.findKey(mixedTypeRecord, shallowProperty); // $ExpectType "a" | "b" | "c" | undefined
    _(mixedTypeRecord).findKey(shallowProperty); // $ExpectType "a" | "b" | "c" | undefined
    extractChainTypes(_.chain(mixedTypeRecord).findKey(shallowProperty)); // $ExpectType ChainType<"a" | "b" | "c" | undefined, string>

    // deep property iteratee - objects
    _.findKey(mixedTypeRecord, deepProperty); // $ExpectType "a" | "b" | "c" | undefined
    _(mixedTypeRecord).findKey(deepProperty); // $ExpectType "a" | "b" | "c" | undefined
    extractChainTypes(_.chain(mixedTypeRecord).findKey(deepProperty)); // $ExpectType ChainType<"a" | "b" | "c" | undefined, string>

    // identity iteratee - objects
    _.findKey(mixedTypeRecord); // $ExpectType "a" | "b" | "c" | undefined
    _(mixedTypeRecord).findKey(); // $ExpectType "a" | "b" | "c" | undefined
    extractChainTypes(_.chain(mixedTypeRecord).findKey()); // $ExpectType ChainType<"a" | "b" | "c" | undefined, string>
}

// pick
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
    extractChainTypes(_.chain(mixedTypeRecord).pick(stringValue)); // $ExpectType ChainType<Partial<MixedTypeRecord>, number | StringRecord | NonIntersectingRecord | undefined>

    // generic strings - any
    _.pick(anyValue, stringValue); // $ExpectType Pick<any, string>
    _(anyValue).pick(stringValue); // $ExpectType Pick<any, string>
    extractChainTypes(_.chain(anyValue).pick(stringValue)); // $ExpectType ChainType<Pick<any, string>, any>

    // generic string arrays - record
    _.pick(mixedTypeRecord, stringArray); // $ExpectType Partial<MixedTypeRecord>
    _(mixedTypeRecord).pick(stringArray); // $ExpectType Partial<MixedTypeRecord>
    extractChainTypes(_.chain(mixedTypeRecord).pick(stringArray)); // $ExpectType ChainType<Partial<MixedTypeRecord>, number | StringRecord | NonIntersectingRecord | undefined>

    // generic string arrays - any
    _.pick(anyValue, stringArray); // $ExpectType Pick<any, string>
    _(anyValue).pick(stringArray); // $ExpectType Pick<any, string>
    extractChainTypes(_.chain(anyValue).pick(stringArray)); // $ExpectType ChainType<Pick<any, string>, any>

    // function - record
    _.pick(mixedTypeRecord, mixedTypeTester); // $ExpectType Partial<MixedTypeRecord>
    _(mixedTypeRecord).pick(mixedTypeTester); // $ExpectType Partial<MixedTypeRecord>
    extractChainTypes(_.chain(mixedTypeRecord).pick(mixedTypeTester)); // $ExpectType ChainType<Partial<MixedTypeRecord>, number | StringRecord | NonIntersectingRecord | undefined>

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
    extractChainTypes(_.chain(mixedTypeRecord).omit(stringValue)); // $ExpectType ChainType<Partial<MixedTypeRecord>, number | StringRecord | NonIntersectingRecord | undefined>

    // generic strings - any
    _.omit(anyValue, stringValue); // $ExpectType any
    _(anyValue).omit(stringValue); // $ExpectType any
    extractChainTypes(_.chain(anyValue).omit(stringValue)); // $ExpectType ChainType<any, any>

    // generic string arrays - record
    _.omit(mixedTypeRecord, stringArray); // $ExpectType Partial<MixedTypeRecord>
    _(mixedTypeRecord).omit(stringArray); // $ExpectType Partial<MixedTypeRecord>
    extractChainTypes(_.chain(mixedTypeRecord).omit(stringArray)); // $ExpectType ChainType<Partial<MixedTypeRecord>, number | StringRecord | NonIntersectingRecord | undefined>

    // generic string arrays - any
    _.omit(anyValue, stringArray); // $ExpectType any
    _(anyValue).omit(stringArray); // $ExpectType any
    extractChainTypes(_.chain(anyValue).omit(stringArray)); // $ExpectType ChainType<any, any>

    // function - record
    _.omit(mixedTypeRecord, mixedTypeTester); // $ExpectType Partial<MixedTypeRecord>
    _(mixedTypeRecord).omit(mixedTypeTester); // $ExpectType Partial<MixedTypeRecord>
    extractChainTypes(_.chain(mixedTypeRecord).omit(mixedTypeTester)); // $ExpectType ChainType<Partial<MixedTypeRecord>, number | StringRecord | NonIntersectingRecord | undefined>

    // function - dictionary
    _.omit(recordDictionary, recordDictionaryTester); // $ExpectType Partial<Dictionary<StringRecord>>
    _(recordDictionary).omit(recordDictionaryTester); // $ExpectType Partial<Dictionary<StringRecord>>
    extractChainTypes(_.chain(recordDictionary).omit(recordDictionaryTester)); // $ExpectType ChainType<Partial<Dictionary<StringRecord>>, StringRecord | undefined>

    // function - any
    _.omit(anyValue, anyCollectionTester); // $ExpectType Partial<any>
    _(anyValue).omit(anyCollectionTester); // $ExpectType Partial<any>
    extractChainTypes(_.chain(anyValue).omit(anyCollectionTester)); // $ExpectType ChainType<Partial<any>, any>
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

/*****************************
 * Combinatorial Tests - OOP *
 *****************************/

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

/**********************************
 * Combinatorial Tests - Chaining *
 **********************************/

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
