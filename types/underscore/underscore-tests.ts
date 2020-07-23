declare const $: any;
declare const window: any;
declare const alert: (msg: string) => any;
declare const console: {log: any};
declare const anyValue: any;

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
    .reject(i => i.rejectBoolean)
    .find(i => i.findBooleanFunction())
    .value();

// $ExpectType boolean
_.chain([{ a: 1 }, { a: 2 }, { a: 3 }, { b: 4 }])
    .map('a')
    .contains(3)
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

// verify that partial objects can be provided without error to where and findWhere for a union type collection
// where no types in the union share the same property names
declare const nonIntersectinglTypeUnion: _.Dictionary<{ one: string; } | { two: number; }>;

// $ExpectType ({ one: string; } | { two: number; })[]
_.chain(nonIntersectinglTypeUnion)
    .where({ one: 'one' })
    .sample(5)
    .value();

// $ExpectType { one: string; } | { two: number; } | undefined
_.chain(nonIntersectinglTypeUnion)
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

const stringRecordAugmentedList: StringRecordAugmentedList = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: { a: 'c', b: 'a' }, length: 3, notAListProperty: true };
const stringRecordList: _.List<StringRecord> = stringRecordAugmentedList;
declare const stringRecordListUnion: StringRecord[] | _.List<StringRecord>;
declare const level2RecordList: _.List<_.List<StringRecord>>;
declare const level3RecordList: _.List<_.List<_.List<StringRecord>>>;
declare const level4RecordList: _.List<_.List<_.List<_.List<StringRecord>>>>;
declare const maxLevel2RecordArray: (StringRecord | StringRecord[])[];
declare const maxLevel3RecordArray: (StringRecord | StringRecord[] | StringRecord[][])[];

const stringRecordAugmentedListVoidIterator = (value: StringRecord, index: number, list: StringRecordAugmentedList) => { value.a += 'b'; };
const stringRecordListValueIterator = (value: StringRecord, index: number, list: _.List<StringRecord>) => value.a;
const stringRecordListBooleanIterator = (value: StringRecord, index: number, list: _.List<StringRecord>) => value.a === 'b';
const stringRecordPartialBooleanIterator = (value: StringRecord) => value.a === 'b';
declare const stringRecordListUnionVoidIterator: (element: StringRecord, key: number, list: StringRecord[] | _.List<StringRecord>) => void;
declare const stringRecordPartialMemoIterator: (prev: string, value: StringRecord) => string;
declare const stringRecordListMemoIterator: (prev: string, value: StringRecord, index: number, list: _.List<StringRecord>) => string;
declare const resultUnionPartialMemoIterator: (prev: string | StringRecord, value: StringRecord) => string | StringRecord;

interface StringRecordExplicitDictionary extends _.Dictionary<StringRecord> {
    a: StringRecord;
    b: StringRecord;
    c: StringRecord;
}

const stringRecordExplicitDictionary: StringRecordExplicitDictionary = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: { a: 'c', b: 'a' } };
const stringRecordDictionary: _.Dictionary<StringRecord> = stringRecordExplicitDictionary;

const stringRecordExplicitDictionaryVoidIterator = (element: StringRecord, key: string, dictionary: StringRecordExplicitDictionary) => { element.a += 'b'; };
const stringRecordDictionaryValueIterator = (element: StringRecord, key: string, dictionary: _.Dictionary<StringRecord>) => element.a;
const stringRecordDictionaryBooleanIterator = (element: StringRecord, key: string, list: _.Dictionary<StringRecord>) => element.a === 'b';
declare const stringRecordDictionaryMemoIterator: (prev: string, element: StringRecord, key: string, dictionary: _.Dictionary<StringRecord>) => string;

type StringRecordOrUndefined = StringRecord | undefined;

const stringRecordOrUndefinedList: _.List<StringRecordOrUndefined> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: undefined, length: 3 };

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

const simpleString = 'abc';

const simpleStringArray: string[] = ['a', 'c'];
const simpleStringList: _.List<string> = { 0: 'a', 1: 'c', length: 2 };
declare const level2StringList: _.List<_.List<string>>;

const stringListValueIterator = (value: string, index: number, str: string) => value.length;
const stringListBooleanIterator = (value: string, index: number, str: string) => value === 'b';
declare const stringListSelfMemoIterator: (prev: string, value: string, index: number, str: string) => string;
declare const stringListMemoIterator: (prev: _.Dictionary<number>, value: string, index: number, str: string) => _.Dictionary<number>;
declare const resultUnionStringListMemoIterator: (prev: string | number, value: string, index: number, str: string) => string | number;

declare const anyCollectionVoidIterator: (element: any, index: string | number, collection: any) => void;

const simpleNumber = 7;
declare const simpleNumberDictionary: _.Dictionary<number>;

declare const simpleBooleanList: _.List<boolean>;
declare const simpleBooleanDictionary: _.Dictionary<boolean>;

declare const mixedIterabilityValue: number | number[];
declare const neverValue: never;
declare const maybeFunction: (() => void) | undefined;
declare const maybeStringArray: string[] | undefined;
declare const stringy: StringRecord | string;

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

// Iteratee
{
    // functions
    const listFunctionIteratee: _.Iteratee<_.List<StringRecord>, string> = (element, key, collection) => {
        element; // $ExpectType StringRecord
        key; // $ExpectType number
        collection; // $ExpectType List<StringRecord>
        return element.a;
    };
    listFunctionIteratee(stringRecordList[0], 0, stringRecordList); // $ExpectType string

    const dictionaryFunctionIteratee: _.Iteratee<_.Dictionary<StringRecord>, string> = (element, key, collection) => {
        element; // $ExpectType StringRecord
        key; // $ExpectType string
        collection; // $ExpectType Dictionary<StringRecord>
        return element.a;
    };
    dictionaryFunctionIteratee(stringRecordDictionary['a'], 'a', stringRecordDictionary); // $ExpectType string

    const unionCollectionItemFunctionIteratee: _.Iteratee<_.List<IntersectingProperties>, string | boolean> = (element, key, collection) => {
        element; // $ExpectType IntersectingProperties
        key; // $ExpectType number
        collection; // $ExpectType List<IntersectingProperties>
        return element.a;
    };
    unionCollectionItemFunctionIteratee(intersectingPropertiesList[0], 0, intersectingPropertiesList); // $ExpectType string | boolean

    const unionCollectionFunctionIteratee: _.Iteratee<_.Dictionary<StringRecord> | StringRecord[], string> = (element, key, collection) => {
        element; // $ExpectType StringRecord
        key; // $ExpectType string | number
        collection; // $ExpectType Dictionary<StringRecord> | StringRecord[]
        return element.a;
    };
    unionCollectionFunctionIteratee(stringRecordDictionary['a'], 'a', stringRecordDictionary); // $ExpectType string

    const anyFunctionIteratee: _.Iteratee<any, string> = (element, key, collection) => {
        element; // $ExpectType any
        key; // $ExpectType string | number
        collection; // $ExpectType any
        return element.a;
    };
    if (_.isFunction(anyFunctionIteratee)) {
        anyFunctionIteratee(stringRecordDictionary['a'], 'a', stringRecordDictionary); // $ExpectType string
    }

    // partial objects
    const listPartialObjectIteratee: _.Iteratee<_.List<StringRecord>, string> = partialStringRecord;
    listPartialObjectIteratee; // $ExpectType Partial<StringRecord>

    const dictionaryPartialObjectIteratee: _.Iteratee<_.Dictionary<StringRecord>, string> = partialStringRecord;
    dictionaryPartialObjectIteratee; // $ExpectType Partial<StringRecord>

    const unionCollectionItemPartialObjectIteratee: _.Iteratee<_.List<IntersectingProperties>, string | boolean> = partialStringRecord;
    unionCollectionItemPartialObjectIteratee; // $ExpectType Partial<StringRecord>

    const unionCollectionPartialObjectIteratee: _.Iteratee<StringRecord[] | _.Dictionary<StringRecord>, string> = partialStringRecord;
    unionCollectionPartialObjectIteratee; // $ExpectType Partial<StringRecord>

    const anyPartialObjectIteratee: _.Iteratee<any, string> = partialStringRecord;
    anyPartialObjectIteratee; // $ExpectType Partial<any>

    // property names
    const listPropertyNameIteratee: _.Iteratee<_.List<StringRecord>, string> = stringRecordProperty;
    listPropertyNameIteratee; // $ExpectType string

    const dictionaryPropertyNameIteratee: _.Iteratee<_.Dictionary<StringRecord>, string> = stringRecordProperty;
    dictionaryPropertyNameIteratee; // $ExpectType string

    const unionCollectionItemPropertyNameIteratee: _.Iteratee<_.List<IntersectingProperties>, string | boolean> = stringRecordProperty;
    unionCollectionItemPropertyNameIteratee; // $ExpectType string

    const unionCollectionPropertyNameIteratee: _.Iteratee<StringRecord[] | _.Dictionary<StringRecord>, string> = stringRecordProperty;
    unionCollectionPropertyNameIteratee; // $ExpectType string

    const anyPropertyNameteratee: _.Iteratee<any, string> = stringRecordProperty;
    anyPropertyNameteratee; // $ExpectType string

    // property paths
    const listPropertyPathIteratee: _.Iteratee<_.List<StringRecord>, string> = stringRecordPropertyPath;
    listPropertyPathIteratee; // $ExpectType (string | number)[]

    const dictionaryPropertyPathIteratee: _.Iteratee<_.Dictionary<StringRecord>, string> = stringRecordPropertyPath;
    dictionaryPropertyPathIteratee; // $ExpectType (string | number)[]

    const unionCollectionItemPropertyPathIteratee: _.Iteratee<_.List<IntersectingProperties>, string | boolean> = stringRecordPropertyPath;
    unionCollectionItemPropertyPathIteratee; // $ExpectType (string | number)[]

    const unionCollectionPropertyPathIteratee: _.Iteratee<StringRecord[] | _.Dictionary<StringRecord>, string> = stringRecordPropertyPath;
    unionCollectionPropertyPathIteratee; // $ExpectType (string | number)[]

    const anyPropertyPathIteratee: _.Iteratee<any, string> = stringRecordPropertyPath;
    if (_.isArray(anyPropertyPathIteratee)) {
        anyPropertyPathIteratee; // $ExpectType (string | number)[]
    }

    // identity
    const listIdentityIteratee: _.Iteratee<_.List<StringRecord>, string> = undefined;
    listIdentityIteratee; // $ExpectType undefined

    const dictionaryIdentityIteratee: _.Iteratee<_.Dictionary<StringRecord>, string> = null;
    dictionaryIdentityIteratee; // $ExpectType null

    const unionCollectionItemIdentityIteratee: _.Iteratee<_.List<IntersectingProperties>, string | boolean> = undefined;
    unionCollectionItemIdentityIteratee; // $ExpectType undefined

    const unionCollectionIdentityIteratee: _.Iteratee<StringRecord[] | _.Dictionary<StringRecord>, string> = null;
    unionCollectionIdentityIteratee; // $ExpectType null

    const anyIdentityIteratee: _.Iteratee<any, string> = undefined;
    anyIdentityIteratee; // $ExpectType undefined
}

// IterateeResult
declare const functionIterateeResult: _.IterateeResult<() => string, StringRecord>;
functionIterateeResult; // $ExpectType string

declare const partialObjectIterateeResult: _.IterateeResult<Partial<StringRecord>, StringRecord>;
partialObjectIterateeResult; // $ExpectType boolean

declare const knownPropertyNameIterateeResult: _.IterateeResult<typeof stringRecordProperty, IntersectingProperties>;
knownPropertyNameIterateeResult; // $ExpectType string | boolean

declare const unknownPropertyNameIterateeResult: _.IterateeResult<typeof stringRecordProperty, NonIntersectingProperties>;
unknownPropertyNameIterateeResult; // $ExpectType any

declare const propertyPathIterateeResult: _.IterateeResult<_.EnumerableKey[], StringRecord>;
propertyPathIterateeResult; // $ExpectType any

declare const nullIdentityIterateeResult: _.IterateeResult<null, StringRecord>;
nullIdentityIterateeResult; // $ExpectType StringRecord

declare const undefinedIdentityIterateeResult: _.IterateeResult<undefined, StringRecord>;
undefinedIdentityIterateeResult; // $ExpectType StringRecord

// Collections

// each, forEach
{
    // lists - each
    _.each(stringRecordAugmentedList, stringRecordAugmentedListVoidIterator); // $ExpectType StringRecordAugmentedList
    _(stringRecordAugmentedList).each(stringRecordAugmentedListVoidIterator, context); // $ExpectType StringRecordAugmentedList
    _.chain(stringRecordAugmentedList).each(stringRecordAugmentedListVoidIterator); // // $ExpectType _Chain<StringRecordAugmentedList, StringRecordAugmentedList>

    // lists - forEach
    _.forEach(stringRecordAugmentedList, stringRecordAugmentedListVoidIterator, context); // $ExpectType StringRecordAugmentedList
    _(stringRecordAugmentedList).forEach(stringRecordAugmentedListVoidIterator); // $ExpectType StringRecordAugmentedList
    _.chain(stringRecordAugmentedList).forEach(stringRecordAugmentedListVoidIterator, context); // // $ExpectType _Chain<StringRecordAugmentedList, StringRecordAugmentedList>

    // dictionaries - each
    _.each(stringRecordExplicitDictionary, stringRecordExplicitDictionaryVoidIterator, context); // $ExpectType StringRecordExplicitDictionary
    _(stringRecordExplicitDictionary).each(stringRecordExplicitDictionaryVoidIterator); // $ExpectType StringRecordExplicitDictionary
    _.chain(stringRecordExplicitDictionary).each(stringRecordExplicitDictionaryVoidIterator, context); // // $ExpectType _Chain<StringRecord, StringRecordExplicitDictionary>

    // dictionaries - forEach
    _.forEach(stringRecordExplicitDictionary, stringRecordExplicitDictionaryVoidIterator); // $ExpectType StringRecordExplicitDictionary
    _(stringRecordExplicitDictionary).forEach(stringRecordExplicitDictionaryVoidIterator, context); // $ExpectType StringRecordExplicitDictionary
    _.chain(stringRecordExplicitDictionary).forEach(stringRecordExplicitDictionaryVoidIterator); // // $ExpectType _Chain<StringRecord, StringRecordExplicitDictionary>

    // unioned list types with similar items - each
    _.each(stringRecordListUnion, stringRecordListUnionVoidIterator); // $ExpectType List<StringRecord> | StringRecord[]
    _(stringRecordListUnion).each(stringRecordListUnionVoidIterator); // $ExpectType List<StringRecord> | StringRecord[]
    _.chain(stringRecordListUnion).each(stringRecordListUnionVoidIterator); // // $ExpectType _Chain<StringRecord, List<StringRecord> | StringRecord[]>

    // unioned list types with similar items - forEach
    _.forEach(stringRecordListUnion, stringRecordListUnionVoidIterator); // $ExpectType List<StringRecord> | StringRecord[]
    _(stringRecordListUnion).forEach(stringRecordListUnionVoidIterator); // $ExpectType List<StringRecord> | StringRecord[]
    _.chain(stringRecordListUnion).forEach(stringRecordListUnionVoidIterator); // // $ExpectType _Chain<StringRecord, List<StringRecord> | StringRecord[]>

    // any - each
    _.each(anyValue, anyCollectionVoidIterator); // $ExpectType any
    _(anyValue).each(anyCollectionVoidIterator, context); // $ExpectType any
    _.chain(anyValue).each(anyCollectionVoidIterator); // // $ExpectType _Chain<any, any>

    // any - forEach
    _.forEach(anyValue, anyCollectionVoidIterator); // $ExpectType any
    _(anyValue).forEach(anyCollectionVoidIterator, context); // $ExpectType any
    _.chain(anyValue).forEach(anyCollectionVoidIterator); // // $ExpectType _Chain<any, any>
}

// map, collect
{
    // function iteratee - lists - map
    _.map(stringRecordList, stringRecordListValueIterator, context); // $ExpectType string[]
    _(stringRecordList).map(stringRecordListValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).map(stringRecordListValueIterator, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - lists - collect
    _.collect(stringRecordList, stringRecordListValueIterator, context); // $ExpectType string[]
    _(stringRecordList).collect(stringRecordListValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).collect(stringRecordListValueIterator, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - dictionaries - map
    _.map(stringRecordDictionary, stringRecordDictionaryValueIterator, context); // $ExpectType string[]
    _(stringRecordDictionary).map(stringRecordDictionaryValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).map(stringRecordDictionaryValueIterator, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - dictionaries - collect
    _.collect(stringRecordDictionary, stringRecordDictionaryValueIterator, context); // $ExpectType string[]
    _(stringRecordDictionary).collect(stringRecordDictionaryValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).collect(stringRecordDictionaryValueIterator, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - strings - map
    _.map(simpleString, stringListValueIterator, context); // $ExpectType number[]
    _(simpleString).map(stringListValueIterator, context); // $ExpectType number[]
    extractChainTypes(_.chain(simpleString).map(stringListValueIterator, context)); // $ExpectType ChainType<number[], number>

    // function iteratee - strings - collect
    _.collect(simpleString, stringListValueIterator, context); // $ExpectType number[]
    _(simpleString).collect(stringListValueIterator, context); // $ExpectType number[]
    extractChainTypes(_.chain(simpleString).collect(stringListValueIterator, context)); // $ExpectType ChainType<number[], number>

    // function iteratee - any - map
    _.map(anyValue, stringRecordListValueIterator, context); // $ExpectType string[]
    _(anyValue).map(stringRecordListValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(anyValue).map(stringRecordListValueIterator, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - any - collect
    _.collect(anyValue, stringRecordListValueIterator, context); // $ExpectType string[]
    _(anyValue).collect(stringRecordListValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(anyValue).collect(stringRecordListValueIterator, context)); // $ExpectType ChainType<string[], string>

    // partial object iteratee - lists - map
    _.map(stringRecordList, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordList).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordList).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iteratee - lists - collect
    _.collect(stringRecordList, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordList).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordList).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iteratee - dictionaries - map
    _.map(stringRecordDictionary, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordDictionary).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordDictionary).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iteratee - dictionaries - collect
    _.collect(stringRecordDictionary, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordDictionary).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordDictionary).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iteratee - any (see #33479) - map
    _.map(anyValue, partialStringRecord); // $ExpectType boolean[]
    _(anyValue).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(anyValue).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iteratee - any (see #33479) - collect
    _.collect(anyValue, partialStringRecord); // $ExpectType boolean[]
    _(anyValue).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(anyValue).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // property name iteratee with a non-nullable single type - lists - map
    _.map(stringRecordList, stringRecordProperty); // $ExpectType string[]
    _(stringRecordList).map(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).map(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    // property name iteratee with a non-nullable single type - lists - collect
    _.collect(stringRecordList, stringRecordProperty); // $ExpectType string[]
    _(stringRecordList).collect(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).collect(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    // property name iteratee with a non-nullable single type - dictionaries - map
    _.map(stringRecordDictionary, stringRecordProperty); // $ExpectType string[]
    _(stringRecordDictionary).map(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).map(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    // property name iteratee with a non-nullable single type - dictionaries - collect
    _.collect(stringRecordDictionary, stringRecordProperty); // $ExpectType string[]
    _(stringRecordDictionary).collect(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).collect(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    // property name iteratee with other types - lists - map
    _.map(stringRecordOrUndefinedList, stringRecordProperty); // $ExpectType any[]
    _.map(intersectingPropertiesList, stringRecordProperty); // $ExpectType (string | boolean)[]
    _.map(nonIntersectingPropertiesList, stringRecordProperty); // $ExpectType any[]

    // property name iteratee with other types - lists - collect
    _.collect(stringRecordOrUndefinedList, stringRecordProperty); // $ExpectType any[]
    _.collect(intersectingPropertiesList, stringRecordProperty); // $ExpectType (string | boolean)[]
    _.collect(nonIntersectingPropertiesList, stringRecordProperty); // $ExpectType any[]

    // property name iteratee - any (see #33479) - map
    _.map(anyValue, stringRecordProperty); // $ExpectType any[]
    _(anyValue).map(stringRecordProperty); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).map(stringRecordProperty)); // $ExpectType ChainType<any[], any>

    // property name iteratee - any (see #33479) - collect
    _.collect(anyValue, stringRecordProperty); // $ExpectType any[]
    _(anyValue).collect(stringRecordProperty); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).collect(stringRecordProperty)); // $ExpectType ChainType<any[], any>

    // property path iteratee - lists - map
    _.map(stringRecordList, stringRecordPropertyPath); // $ExpectType any[]
    _(stringRecordList).map(stringRecordPropertyPath); // $ExpectType any[]
    extractChainTypes(_.chain(stringRecordList).map(stringRecordPropertyPath)); // $ExpectType ChainType<any[], any>

    // property path iteratee - lists - collect
    _.collect(stringRecordList, stringRecordPropertyPath); // $ExpectType any[]
    _(stringRecordList).collect(stringRecordPropertyPath); // $ExpectType any[]
    extractChainTypes(_.chain(stringRecordList).collect(stringRecordPropertyPath)); // $ExpectType ChainType<any[], any>

    // property path iteratee - dictionaries - map
    _.map(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType any[]
    _(stringRecordDictionary).map(stringRecordPropertyPath); // $ExpectType any[]
    extractChainTypes(_.chain(stringRecordDictionary).map(stringRecordPropertyPath)); // $ExpectType ChainType<any[], any>

    // property path iteratee - dictionaries - collect
    _.collect(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType any[]
    _(stringRecordDictionary).collect(stringRecordPropertyPath); // $ExpectType any[]
    extractChainTypes(_.chain(stringRecordDictionary).collect(stringRecordPropertyPath)); // $ExpectType ChainType<any[], any>

    // property path iteratee - any - map
    _.map(anyValue, stringRecordPropertyPath); // $ExpectType any[]
    _(anyValue).map(stringRecordPropertyPath); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).map(stringRecordPropertyPath)); // $ExpectType ChainType<any[], any>

    // property path iteratee - any - collect
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
    // function iteratee - lists - find
    _.find(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType StringRecordOrUndefined
    _(stringRecordList).find(stringRecordListBooleanIterator, context); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordList).find(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // function iteratee - lists - detect
    _.detect(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType StringRecordOrUndefined
    _(stringRecordList).detect(stringRecordListBooleanIterator, context); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordList).detect(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // function iteratee - dictionaries - find
    _.find(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecordOrUndefined
    _(stringRecordDictionary).find(stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordDictionary).find(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // function iteratee - dictionaries - detect
    _.detect(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecordOrUndefined
    _(stringRecordDictionary).detect(stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordDictionary).detect(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // function iteratee - strings - find
    _.find(simpleString, stringListBooleanIterator, context); // $ExpectType string | undefined
    _(simpleString).find(stringListBooleanIterator, context); // $ExpectType string | undefined
    extractChainTypes(_.chain(simpleString).find(stringListBooleanIterator, context)); // $ExpectType ChainType<string | undefined, string>

    // function iteratee - strings - detect
    _.detect(simpleString, stringListBooleanIterator, context); // $ExpectType string | undefined
    _(simpleString).detect(stringListBooleanIterator, context); // $ExpectType string | undefined
    extractChainTypes(_.chain(simpleString).detect(stringListBooleanIterator, context)); // $ExpectType ChainType<string | undefined, string>

    // function iteratee - any - find
    _.find(anyValue, stringRecordPartialBooleanIterator, context); // $ExpectType any
    _(anyValue).find(stringRecordPartialBooleanIterator, context); // $ExpectType any
    extractChainTypes(_.chain(anyValue).find(stringRecordPartialBooleanIterator, context)); // $ExpectType ChainType<any, any>

    // function iteratee - any - detect
    _.detect(anyValue, stringRecordPartialBooleanIterator, context); // $ExpectType any
    _(anyValue).detect(stringRecordPartialBooleanIterator, context); // $ExpectType any
    extractChainTypes(_.chain(anyValue).detect(stringRecordPartialBooleanIterator, context)); // $ExpectType ChainType<any, any>

    // partial object iteratee - lists - find
    _.find(stringRecordList, partialStringRecord); // $ExpectType StringRecordOrUndefined
    _(stringRecordList).find(partialStringRecord); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordList).find(partialStringRecord)); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // partial object iteratee - dictionaries - detect
    _.detect(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecordOrUndefined
    _(stringRecordDictionary).detect(partialStringRecord); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordDictionary).detect(partialStringRecord)); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // property name iteratee - dictionaries - find
    _.find(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecordOrUndefined
    _(stringRecordDictionary).find(stringRecordProperty); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordDictionary).find(stringRecordProperty)); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // property name iteratee - lists - detect
    _.detect(stringRecordList, stringRecordProperty); // $ExpectType StringRecordOrUndefined
    _(stringRecordList).detect(stringRecordProperty); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordList).detect(stringRecordProperty)); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // property path iteratee - lists - find
    _.find(stringRecordList, stringRecordPropertyPath); // $ExpectType StringRecordOrUndefined
    _(stringRecordList).find(stringRecordPropertyPath); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordList).find(stringRecordPropertyPath)); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // property path iteratee - dictionaries - detect
    _.detect(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType StringRecordOrUndefined
    _(stringRecordDictionary).detect(stringRecordPropertyPath); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordDictionary).detect(stringRecordPropertyPath)); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // identity iteratee - dictionaries - find
    _.find(simpleNumberDictionary); // $ExpectType number | undefined
    _(simpleNumberDictionary).find(); // $ExpectType number | undefined
    extractChainTypes(_.chain(simpleNumberDictionary).find()); // $ExpectType ChainType<number | undefined, never>

    // identity iteratee - lists - detect
    _.detect(simpleStringList); // $ExpectType string | undefined
    _(simpleStringList).detect(); // $ExpectType string | undefined
    extractChainTypes(_.chain(simpleStringList).detect()); // $ExpectType ChainType<string | undefined, string>
}

// filter, select
{
    // function iteratee - lists - filter
    _.filter(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).filter(stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).filter(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - lists - select
    _.select(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).select(stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).select(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - dictionaries - filter
    _.filter(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordDictionary).filter(stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).filter(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - dictionaries - select
    _.select(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordDictionary).select(stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).select(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - strings - filter
    _.filter(simpleString, stringListBooleanIterator, context); // $ExpectType string[]
    _(simpleString).filter(stringListBooleanIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(simpleString).filter(stringListBooleanIterator, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - strings - select
    _.select(simpleString, stringListBooleanIterator, context); // $ExpectType string[]
    _(simpleString).select(stringListBooleanIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(simpleString).select(stringListBooleanIterator, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - any - filter
    _.filter(anyValue, stringRecordPartialBooleanIterator, context); // $ExpectType any[]
    _(anyValue).filter(stringRecordPartialBooleanIterator, context); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).filter(stringRecordPartialBooleanIterator, context)); // $ExpectType ChainType<any[], any>

    // function iteratee - any - select
    _.select(anyValue, stringRecordPartialBooleanIterator, context); // $ExpectType any[]
    _(anyValue).select(stringRecordPartialBooleanIterator, context); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).select(stringRecordPartialBooleanIterator, context)); // $ExpectType ChainType<any[], any>

    // partial object iteratee - lists - filter
    _.filter(stringRecordList, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordList).filter(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).filter(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // partial object iteratee - dictionaries - select
    _.select(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordDictionary).select(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).select(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property name iteratee - dictionaries - filter
    _.filter(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordDictionary).filter(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).filter(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property name iteratee - lists - select
    _.select(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordList).select(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).select(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property path iteratee - lists - filter
    _.filter(stringRecordList, stringRecordPropertyPath); // $ExpectType StringRecord[]
    _(stringRecordList).filter(stringRecordPropertyPath); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).filter(stringRecordPropertyPath)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property path iteratee - dictionaries - select
    _.select(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType StringRecord[]
    _(stringRecordDictionary).select(stringRecordPropertyPath); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).select(stringRecordPropertyPath)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // identity iteratee - dictionaries - filter
    _.filter(simpleNumberDictionary); // $ExpectType number[]
    _(simpleNumberDictionary).filter(); // $ExpectType number[]
    extractChainTypes(_.chain(simpleNumberDictionary).filter()); // $ExpectType ChainType<number[], number>

    // identity iteratee - lists - select
    _.select(simpleStringList); // $ExpectType string[]
    _(simpleStringList).select(); // $ExpectType string[]
    extractChainTypes(_.chain(simpleStringList).select()); // $ExpectType ChainType<string[], string>
}

// where
{
    // non-intersecting type union - lists
    _.where(nonIntersectingPropertiesList, partialStringRecord); // $ExpectType NonIntersectingProperties[]
    _(nonIntersectingPropertiesList).where(partialStringRecord); // $ExpectType NonIntersectingProperties[]
    extractChainTypes(_.chain(nonIntersectingPropertiesList).where(partialStringRecord)); // $ExpectType ChainType<NonIntersectingProperties[], NonIntersectingProperties>

    // simple type - dictionaries
    _.where(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordDictionary).where(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).where(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // any
    _.where(anyValue, partialStringRecord); // $ExpectType any[]
    _(anyValue).where(partialStringRecord); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).where(partialStringRecord)); // $ExpectType ChainType<any[], any>
}

// findWhere
{
    // non-intersecting type union - lists
    _.findWhere(nonIntersectingPropertiesList, partialStringRecord); // $ExpectType StringRecord | NonIntersectingStringRecord | undefined
    _(nonIntersectingPropertiesList).findWhere(partialStringRecord); // $ExpectType StringRecord | NonIntersectingStringRecord | undefined
    extractChainTypes(_.chain(nonIntersectingPropertiesList).findWhere(partialStringRecord)); // $ExpectType ChainType<StringRecord | NonIntersectingStringRecord | undefined, never>

    // simple type - dictionaries
    _.findWhere(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecordOrUndefined
    _(stringRecordDictionary).findWhere(partialStringRecord); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordDictionary).findWhere(partialStringRecord)); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // any
    _.findWhere(anyValue, partialStringRecord); // $ExpectType any
    _(anyValue).findWhere(partialStringRecord); // $ExpectType any
    extractChainTypes(_.chain(anyValue).findWhere(partialStringRecord)); // $ExpectType ChainType<any, any>
}

// reject
{
    // function iteratee - lists
    _.reject(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).reject(stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).reject(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - dictionaries
    _.reject(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordDictionary).reject(stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).reject(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // function iteratee - strings
    _.reject(simpleString, stringListBooleanIterator, context); // $ExpectType string[]
    _(simpleString).reject(stringListBooleanIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(simpleString).reject(stringListBooleanIterator, context)); // $ExpectType ChainType<string[], string>

    // function iteratee - any
    _.reject(anyValue, stringRecordPartialBooleanIterator, context); // $ExpectType any[]
    _(anyValue).reject(stringRecordPartialBooleanIterator, context); // $ExpectType any[]
    extractChainTypes(_.chain(anyValue).reject(stringRecordPartialBooleanIterator, context)); // $ExpectType ChainType<any[], any>

    // partial object iteratee - lists
    _.reject(stringRecordList, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordList).reject(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).reject(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property name iteratee - dictionaries
    _.reject(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordDictionary).reject(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).reject(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property path iteratee - lists
    _.reject(stringRecordList, stringRecordPropertyPath); // $ExpectType StringRecord[]
    _(stringRecordList).reject(stringRecordPropertyPath); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).reject(stringRecordPropertyPath)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // identity iteratee - dictionaries
    _.reject(simpleNumberDictionary); // $ExpectType number[]
    _(simpleNumberDictionary).reject(); // $ExpectType number[]
    extractChainTypes(_.chain(simpleNumberDictionary).reject()); // $ExpectType ChainType<number[], number>
}

// every, all
{
    // function iteratee - lists - every
    _.every(stringRecordList, stringRecordListBooleanIterator); // $ExpectType boolean
    _(stringRecordList).every(stringRecordListBooleanIterator, context); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).every(stringRecordListBooleanIterator)); // $ExpectType ChainType<boolean, never>

    // function iteratee - lists - all
    _.all(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType boolean
    _(stringRecordList).all(stringRecordListBooleanIterator); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).all(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    // function iteratee - dictionaries - every
    _.every(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType boolean
    _(stringRecordDictionary).every(stringRecordDictionaryBooleanIterator); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).every(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    // function iteratee - dictionaries - all
    _.all(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType boolean
    _(stringRecordDictionary).all(stringRecordDictionaryBooleanIterator, context); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).all(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<boolean, never>

    // partial object iteratee - lists - every
    _.every(stringRecordList, partialStringRecord); // $ExpectType boolean
    _(stringRecordList).every(partialStringRecord); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).every(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    // partial object iteratee - lists - all
    _.all(stringRecordList, partialStringRecord); // $ExpectType boolean
    _(stringRecordList).all(partialStringRecord); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).all(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    // partial object iteratee - dictionaries - every
    _.every(stringRecordDictionary, partialStringRecord); // $ExpectType boolean
    _(stringRecordDictionary).every(partialStringRecord); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).every(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    // partial object iteratee - dictionaries - all
    _.all(stringRecordDictionary, partialStringRecord); // $ExpectType boolean
    _(stringRecordDictionary).all(partialStringRecord); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).all(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    // property name iterator - lists - every
    _.every(stringRecordList, stringRecordProperty); // $ExpectType boolean
    _(stringRecordList).every(stringRecordProperty); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).every(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    // property name iterator - lists - all
    _.all(stringRecordList, stringRecordProperty); // $ExpectType boolean
    _(stringRecordList).all(stringRecordProperty); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).all(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    // property name iterator - dictionaries - every
    _.every(stringRecordDictionary, stringRecordProperty); // $ExpectType boolean
    _(stringRecordDictionary).every(stringRecordProperty); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).every(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    // property name iterator - dictionaries - all
    _.all(stringRecordDictionary, stringRecordProperty); // $ExpectType boolean
    _(stringRecordDictionary).all(stringRecordProperty); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).all(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    // property path iterator - lists - every
    _.every(stringRecordList, stringRecordPropertyPath); // $ExpectType boolean
    _(stringRecordList).every(stringRecordPropertyPath); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).every(stringRecordPropertyPath)); // $ExpectType ChainType<boolean, never>

    // property path iterator - lists - all
    _.all(stringRecordList, stringRecordPropertyPath); // $ExpectType boolean
    _(stringRecordList).all(stringRecordPropertyPath); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).all(stringRecordPropertyPath)); // $ExpectType ChainType<boolean, never>

    // property path iterator - dictionaries - every
    _.every(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType boolean
    _(stringRecordDictionary).every(stringRecordPropertyPath); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).every(stringRecordPropertyPath)); // $ExpectType ChainType<boolean, never>

    // property path iterator - dictionaries - all
    _.all(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType boolean
    _(stringRecordDictionary).all(stringRecordPropertyPath); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).all(stringRecordPropertyPath)); // $ExpectType ChainType<boolean, never>

    // identity iterator - lists - every
    _.every(simpleBooleanList); // $ExpectType boolean
    _(simpleBooleanList).every(); // $ExpectType boolean
    extractChainTypes(_.chain(simpleBooleanList).every()); // $ExpectType ChainType<boolean, never>

    // identity iterator - lists - all
    _.all(simpleBooleanList); // $ExpectType boolean
    _(simpleBooleanList).all(); // $ExpectType boolean
    extractChainTypes(_.chain(simpleBooleanList).all()); // $ExpectType ChainType<boolean, never>

    // identity iterator - dictionaries - every
    _.every(simpleBooleanDictionary); // $ExpectType boolean
    _(simpleBooleanDictionary).every(); // $ExpectType boolean
    extractChainTypes(_.chain(simpleBooleanDictionary).every()); // $ExpectType ChainType<boolean, never>

    // identity iterator - dictionaries - all
    _.all(simpleBooleanDictionary); // $ExpectType boolean
    _(simpleBooleanDictionary).all(); // $ExpectType boolean
    extractChainTypes(_.chain(simpleBooleanDictionary).all()); // $ExpectType ChainType<boolean, never>
}

// some, any
{
    // function iteratee - lists - some
    _.some(stringRecordList, stringRecordListBooleanIterator); // $ExpectType boolean
    _(stringRecordList).some(stringRecordListBooleanIterator, context); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).some(stringRecordListBooleanIterator)); // $ExpectType ChainType<boolean, never>

    // function iteratee - lists - any
    _.any(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType boolean
    _(stringRecordList).any(stringRecordListBooleanIterator); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).any(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    // function iteratee - dictionaries - some
    _.some(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType boolean
    _(stringRecordDictionary).some(stringRecordDictionaryBooleanIterator); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).some(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<boolean, never>

    // function iteratee - dictionaries - any
    _.any(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType boolean
    _(stringRecordDictionary).any(stringRecordDictionaryBooleanIterator, context); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).any(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<boolean, never>

    // partial object iteratee - lists - some
    _.some(stringRecordList, partialStringRecord); // $ExpectType boolean
    _(stringRecordList).some(partialStringRecord); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).some(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    // partial object iteratee - lists - any
    _.any(stringRecordList, partialStringRecord); // $ExpectType boolean
    _(stringRecordList).any(partialStringRecord); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).any(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    // partial object iteratee - dictionaries - some
    _.some(stringRecordDictionary, partialStringRecord); // $ExpectType boolean
    _(stringRecordDictionary).some(partialStringRecord); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).some(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    // partial object iteratee - dictionaries - any
    _.any(stringRecordDictionary, partialStringRecord); // $ExpectType boolean
    _(stringRecordDictionary).any(partialStringRecord); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).any(partialStringRecord)); // $ExpectType ChainType<boolean, never>

    // property name iterator - lists - some
    _.some(stringRecordList, stringRecordProperty); // $ExpectType boolean
    _(stringRecordList).some(stringRecordProperty); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).some(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    // property name iterator - lists - any
    _.any(stringRecordList, stringRecordProperty); // $ExpectType boolean
    _(stringRecordList).any(stringRecordProperty); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).any(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    // property name iterator - dictionaries - some
    _.some(stringRecordDictionary, stringRecordProperty); // $ExpectType boolean
    _(stringRecordDictionary).some(stringRecordProperty); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).some(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    // property name iterator - dictionaries - any
    _.any(stringRecordDictionary, stringRecordProperty); // $ExpectType boolean
    _(stringRecordDictionary).any(stringRecordProperty); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).any(stringRecordProperty)); // $ExpectType ChainType<boolean, never>

    // property path iterator - lists - some
    _.some(stringRecordList, stringRecordPropertyPath); // $ExpectType boolean
    _(stringRecordList).some(stringRecordPropertyPath); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).some(stringRecordPropertyPath)); // $ExpectType ChainType<boolean, never>

    // property path iterator - lists - any
    _.any(stringRecordList, stringRecordPropertyPath); // $ExpectType boolean
    _(stringRecordList).any(stringRecordPropertyPath); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).any(stringRecordPropertyPath)); // $ExpectType ChainType<boolean, never>

    // property path iterator - dictionaries - some
    _.some(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType boolean
    _(stringRecordDictionary).some(stringRecordPropertyPath); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).some(stringRecordPropertyPath)); // $ExpectType ChainType<boolean, never>

    // property path iterator - dictionaries - any
    _.any(stringRecordDictionary, stringRecordPropertyPath); // $ExpectType boolean
    _(stringRecordDictionary).any(stringRecordPropertyPath); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).any(stringRecordPropertyPath)); // $ExpectType ChainType<boolean, never>

    // identity iterator - lists - some
    _.some(simpleBooleanList); // $ExpectType boolean
    _(simpleBooleanList).some(); // $ExpectType boolean
    extractChainTypes(_.chain(simpleBooleanList).some()); // $ExpectType ChainType<boolean, never>

    // identity iterator - lists - any
    _.any(simpleBooleanList); // $ExpectType boolean
    _(simpleBooleanList).any(); // $ExpectType boolean
    extractChainTypes(_.chain(simpleBooleanList).any()); // $ExpectType ChainType<boolean, never>

    // identity iterator - dictionaries - some
    _.some(simpleBooleanDictionary); // $ExpectType boolean
    _(simpleBooleanDictionary).some(); // $ExpectType boolean
    extractChainTypes(_.chain(simpleBooleanDictionary).some()); // $ExpectType ChainType<boolean, never>

    // identity iterator - dictionaries - any
    _.any(simpleBooleanDictionary); // $ExpectType boolean
    _(simpleBooleanDictionary).any(); // $ExpectType boolean
    extractChainTypes(_.chain(simpleBooleanDictionary).any()); // $ExpectType ChainType<boolean, never>
}

// contains, include, includes
{
    // no index - lists - contains
    _.contains(stringRecordList, stringRecordList[0]); // $ExpectType boolean
    _(stringRecordList).contains(stringRecordList[0]); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).contains(stringRecordList[0])); // $ExpectType ChainType<boolean, never>

    // no index - lists - include
    _.include(stringRecordList, stringRecordList[0]); // $ExpectType boolean
    _(stringRecordList).include(stringRecordList[0]); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).include(stringRecordList[0])); // $ExpectType ChainType<boolean, never>

    // no index - lists - includes
    _.includes(stringRecordList, stringRecordList[0]); // $ExpectType boolean
    _(stringRecordList).includes(stringRecordList[0]); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).includes(stringRecordList[0])); // $ExpectType ChainType<boolean, never>

    // no index - dictionaries - contains
    _.contains(stringRecordDictionary, stringRecordList[0]); // $ExpectType boolean
    _(stringRecordDictionary).contains(stringRecordList[0]); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).contains(stringRecordList[0])); // $ExpectType ChainType<boolean, never>

    // no index - dictionaries - include
    _.include(stringRecordDictionary, stringRecordList[0]); // $ExpectType boolean
    _(stringRecordDictionary).include(stringRecordList[0]); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).include(stringRecordList[0])); // $ExpectType ChainType<boolean, never>

    // no index - dictionaries - includes
    _.includes(stringRecordDictionary, stringRecordList[0]); // $ExpectType boolean
    _(stringRecordDictionary).includes(stringRecordList[0]); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordDictionary).includes(stringRecordList[0])); // $ExpectType ChainType<boolean, never>

    // with index - contains
    _.contains(stringRecordList, stringRecordList[0], simpleNumber); // $ExpectType boolean
    _(stringRecordList).contains(stringRecordList[0], simpleNumber); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).contains(stringRecordList[0], simpleNumber)); // $ExpectType ChainType<boolean, never>

    // with index - include
    _.include(stringRecordList, stringRecordList[0], simpleNumber); // $ExpectType boolean
    _(stringRecordList).include(stringRecordList[0], simpleNumber); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).include(stringRecordList[0], simpleNumber)); // $ExpectType ChainType<boolean, never>

    // with index - includes
    _.includes(stringRecordList, stringRecordList[0], simpleNumber); // $ExpectType boolean
    _(stringRecordList).includes(stringRecordList[0], simpleNumber); // $ExpectType boolean
    extractChainTypes(_.chain(stringRecordList).includes(stringRecordList[0], simpleNumber)); // $ExpectType ChainType<boolean, never>
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

// shuffle
{
    // lists
    _.shuffle(stringRecordList); // $ExpectType StringRecord[]
    _(stringRecordList).shuffle(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).shuffle()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // dictionaries
    _.shuffle(stringRecordDictionary); // $ExpectType StringRecord[]
    _(stringRecordDictionary).shuffle(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).shuffle()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // strings
    _.shuffle(simpleString); // $ExpectType string[]
    _(simpleString).shuffle(); // $ExpectType string[]
    extractChainTypes(_.chain(simpleString).shuffle()); // $ExpectType ChainType<string[], string>
}

// sample
{
    // without n - lists
    _.sample(stringRecordList); // $ExpectType StringRecordOrUndefined
    _(stringRecordList).sample(); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordList).sample()); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // without n - dictionaries
    _.sample(stringRecordDictionary); // $ExpectType StringRecordOrUndefined
    _(stringRecordDictionary).sample(); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordDictionary).sample()); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // without n - strings
    _.sample(simpleString); // $ExpectType string | undefined
    _(simpleString).sample(); // $ExpectType string | undefined
    extractChainTypes(_.chain(simpleString).sample()); // $ExpectType ChainType<string | undefined, string>

    // with n - lists
    _.sample(stringRecordList, simpleNumber); // $ExpectType StringRecord[]
    _(stringRecordList).sample(simpleNumber); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).sample(simpleNumber)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - dictionaries
    _.sample(stringRecordDictionary, simpleNumber); // $ExpectType StringRecord[]
    _(stringRecordDictionary).sample(simpleNumber); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).sample(simpleNumber)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - strings
    _.sample(simpleString, simpleNumber); // $ExpectType string[]
    _(simpleString).sample(simpleNumber); // $ExpectType string[]
    extractChainTypes(_.chain(simpleString).sample(simpleNumber)); // $ExpectType ChainType<string[], string>
}

// toArray
{
    // lists
    _.toArray(stringRecordList); // $ExpectType StringRecord[]
    _(stringRecordList).toArray(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).toArray()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // dictionaries
    _.toArray(stringRecordDictionary); // $ExpectType StringRecord[]
    _(stringRecordDictionary).toArray(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).toArray()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // strings
    _.toArray(simpleString); // $ExpectType string[]
    _(simpleString).toArray(); // $ExpectType string[]
    extractChainTypes(_.chain(simpleString).toArray()); // $ExpectType ChainType<string[], string>
}

// partition
{
    // function iteratee - lists
    _.partition(stringRecordList, stringRecordListBooleanIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _.partition(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordList).partition(stringRecordListBooleanIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordList).partition(stringRecordListBooleanIterator, context); // $ExpectType [StringRecord[], StringRecord[]]
    extractChainTypes(_.chain(stringRecordList).partition(stringRecordListBooleanIterator)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>
    extractChainTypes(_.chain(stringRecordList).partition(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    // function iteratee - dictionaries
    _.partition(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _.partition(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordDictionary).partition(stringRecordDictionaryBooleanIterator); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordDictionary).partition(stringRecordDictionaryBooleanIterator, context); // $ExpectType [StringRecord[], StringRecord[]]
    extractChainTypes(_.chain(stringRecordDictionary).partition(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>
    extractChainTypes(_.chain(stringRecordDictionary).partition(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    // function iteratee - strings
    _.partition(simpleString, stringListBooleanIterator); // $ExpectType [string[], string[]]
    _.partition(simpleString, stringListBooleanIterator, context); // $ExpectType [string[], string[]]
    _(simpleString).partition(stringListBooleanIterator); // $ExpectType [string[], string[]]
    _(simpleString).partition(stringListBooleanIterator, context); // $ExpectType [string[], string[]]
    extractChainTypes(_.chain(simpleString).partition(stringListBooleanIterator)); // $ExpectType ChainType<[string[], string[]], string[]>
    extractChainTypes(_.chain(simpleString).partition(stringListBooleanIterator, context)); // $ExpectType ChainType<[string[], string[]], string[]>

    // partial object iteratee - lists
    _.partition(stringRecordList, partialStringRecord); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordList).partition(partialStringRecord); // $ExpectType [StringRecord[], StringRecord[]]
    extractChainTypes(_.chain(stringRecordList).partition(partialStringRecord)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    // property name iteratee - dictionaries
    _.partition(stringRecordDictionary, stringRecordProperty); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordDictionary).partition(stringRecordProperty); // $ExpectType [StringRecord[], StringRecord[]]
    extractChainTypes(_.chain(stringRecordDictionary).partition(stringRecordProperty)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    // property path iteratee - lists
    _.partition(stringRecordList, stringRecordPropertyPath); // $ExpectType [StringRecord[], StringRecord[]]
    _(stringRecordList).partition(stringRecordPropertyPath); // $ExpectType [StringRecord[], StringRecord[]]
    extractChainTypes(_.chain(stringRecordList).partition(stringRecordPropertyPath)); // $ExpectType ChainType<[StringRecord[], StringRecord[]], StringRecord[]>

    // identity iteratee - dictionaries
    _.partition(simpleNumberDictionary); // $ExpectType [number[], number[]]
    _(simpleNumberDictionary).partition(); // $ExpectType [number[], number[]]
    extractChainTypes(_.chain(simpleNumberDictionary).partition()); // $ExpectType ChainType<[number[], number[]], number[]>
}

// Arrays

// first, head, take
{
    // without n - first
    _.first(stringRecordList); // $ExpectType StringRecordOrUndefined
    _(stringRecordList).first(); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordList).first()); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // without n - head
    _.head(stringRecordList); // $ExpectType StringRecordOrUndefined
    _(stringRecordList).head(); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordList).head()); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // without n - take
    _.take(stringRecordList); // $ExpectType StringRecordOrUndefined
    _(stringRecordList).take(); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordList).take()); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // with n - first
    _.first(stringRecordList, simpleNumber); // $ExpectType StringRecord[]
    _(stringRecordList).first(simpleNumber); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).first(simpleNumber)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - head
    _.head(stringRecordList, simpleNumber); // $ExpectType StringRecord[]
    _(stringRecordList).head(simpleNumber); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).head(simpleNumber)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - take
    _.take(stringRecordList, simpleNumber); // $ExpectType StringRecord[]
    _(stringRecordList).take(simpleNumber); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).take(simpleNumber)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// initial
{
    // without n
    _.initial(stringRecordList); // $ExpectType StringRecord[]
    _(stringRecordList).initial(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).initial()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n
    _.initial(stringRecordList, simpleNumber); // $ExpectType StringRecord[]
    _(stringRecordList).initial(simpleNumber); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).initial(simpleNumber)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// last
{
    // without n
    _.last(stringRecordList); // $ExpectType StringRecordOrUndefined
    _(stringRecordList).last(); // $ExpectType StringRecordOrUndefined
    extractChainTypes(_.chain(stringRecordList).last()); // $ExpectType ChainType<StringRecordOrUndefined, never>

    // with n
    _.last(stringRecordList, simpleNumber); // $ExpectType StringRecord[]
    _(stringRecordList).last(simpleNumber); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).last(simpleNumber)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// rest, tail, drop
{
    // without n - rest
    _.rest(stringRecordList); // $ExpectType StringRecord[]
    _(stringRecordList).rest(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).rest()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // without n - tail
    _.tail(stringRecordList); // $ExpectType StringRecord[]
    _(stringRecordList).tail(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).tail()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // without n - drop
    _.drop(stringRecordList); // $ExpectType StringRecord[]
    _(stringRecordList).drop(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).drop()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - rest
    _.rest(stringRecordList, simpleNumber); // $ExpectType StringRecord[]
    _(stringRecordList).rest(simpleNumber); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).rest(simpleNumber)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - tail
    _.tail(stringRecordList, simpleNumber); // $ExpectType StringRecord[]
    _(stringRecordList).tail(simpleNumber); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).tail(simpleNumber)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // with n - drop
    _.drop(stringRecordList, simpleNumber); // $ExpectType StringRecord[]
    _(stringRecordList).drop(simpleNumber); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).drop(simpleNumber)); // $ExpectType ChainType<StringRecord[], StringRecord>
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
    // lists
    _.without(stringRecordList, stringRecordList[0], stringRecordList[1]); // $ExpectType StringRecord[]
    _(stringRecordList).without(stringRecordList[0], stringRecordList[1]); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).without(stringRecordList[0], stringRecordList[1])); // $ExpectType ChainType<StringRecord[], StringRecord>

    // strings
    _.without(simpleString, simpleString[0], simpleString[1]); // $ExpectType string[]
    _(simpleString).without(simpleString[0], simpleString[1]); // $ExpectType string[]
    extractChainTypes(_.chain(simpleString).without(simpleString[0], simpleString[1])); // $ExpectType ChainType<string[], string>
}

// uniq, unique
{
    // not sorted - identity iteratee - uniq
    _.uniq(stringRecordList); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).uniq()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - identity iteratee - unique
    _.unique(stringRecordList); // $ExpectType StringRecord[]
    _(stringRecordList).unique(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).unique()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - function iteratee - uniq
    _.uniq(stringRecordList, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, stringRecordListValueIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(stringRecordListValueIterator); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(stringRecordListValueIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).uniq(stringRecordListValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(stringRecordListValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - function iteratee - unique
    _.unique(stringRecordList, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _.unique(stringRecordList, stringRecordListValueIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).unique(stringRecordListValueIterator); // $ExpectType StringRecord[]
    _(stringRecordList).unique(stringRecordListValueIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).unique(stringRecordListValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(stringRecordListValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - partial object iteratee - uniq
    _.uniq(stringRecordList, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).uniq(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - partial object iteratee - unique
    _.unique(stringRecordList, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordList).unique(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).unique(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - property name iteratee - uniq
    _.uniq(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).uniq(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - property name iteratee - unique
    _.unique(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordList).unique(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).unique(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - property path iteratee - uniq
    _.uniq(stringRecordList, stringRecordPropertyPath); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(stringRecordPropertyPath); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).uniq(stringRecordPropertyPath)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // not sorted - property path iteratee - unique
    _.unique(stringRecordList, stringRecordPropertyPath); // $ExpectType StringRecord[]
    _(stringRecordList).unique(stringRecordPropertyPath); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).unique(stringRecordPropertyPath)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - identity iteratee - uniq
    _.uniq(stringRecordList, true); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).uniq(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - identity iteratee - unique
    _.unique(stringRecordList, true); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).unique(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - function iteratee - uniq
    _.uniq(stringRecordList, true, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _.uniq(stringRecordList, true, stringRecordListValueIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true, stringRecordListValueIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).uniq(true, stringRecordListValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).uniq(true, stringRecordListValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - function iteratee - unique
    _.unique(stringRecordList, true, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _.unique(stringRecordList, true, stringRecordListValueIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true, stringRecordListValueIterator); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true, stringRecordListValueIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).unique(true, stringRecordListValueIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).unique(true, stringRecordListValueIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - partial object iteratee - uniq
    _.uniq(stringRecordList, true, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true, partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).uniq(true, partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - partial object iteratee - unique
    _.unique(stringRecordList, true, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true, partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).unique(true, partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - property name iteratee - uniq
    _.uniq(stringRecordList, true, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true, stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).uniq(true, stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - property name iteratee - unique
    _.unique(stringRecordList, true, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true, stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).unique(true, stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - property path iteratee - uniq
    _.uniq(stringRecordList, true, stringRecordPropertyPath); // $ExpectType StringRecord[]
    _(stringRecordList).uniq(true, stringRecordPropertyPath); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).uniq(true, stringRecordPropertyPath)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // sorted - property path iteratee - unique
    _.unique(stringRecordList, true, stringRecordPropertyPath); // $ExpectType StringRecord[]
    _(stringRecordList).unique(true, stringRecordPropertyPath); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).unique(true, stringRecordPropertyPath)); // $ExpectType ChainType<StringRecord[], StringRecord>
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

// sortedIndex
{
    // identity iteratee
    _.sortedIndex(simpleStringList, simpleString); // $ExpectType number
    _(simpleStringList).sortedIndex(simpleString); // $ExpectType number
    extractChainTypes(_.chain(simpleStringList).sortedIndex(simpleString)); // $ExpectType ChainType<number, never>

    // function iteratee
    _.sortedIndex(stringRecordList, stringRecordList[0], stringRecordListValueIterator); // $ExpectType number
    _.sortedIndex(stringRecordList, stringRecordList[0], stringRecordListValueIterator, context); // $ExpectType number
    _(stringRecordList).sortedIndex(stringRecordList[0], stringRecordListValueIterator); // $ExpectType number
    _(stringRecordList).sortedIndex(stringRecordList[0], stringRecordListValueIterator, context); // $ExpectType number
    extractChainTypes(_.chain(stringRecordList).sortedIndex(stringRecordList[0], stringRecordListValueIterator)); // $ExpectType ChainType<number, never>
    extractChainTypes(_.chain(stringRecordList).sortedIndex(stringRecordList[0], stringRecordListValueIterator, context)); // $ExpectType ChainType<number, never>

    // partial object iteratee
    _.sortedIndex(stringRecordList, stringRecordList[0], partialStringRecord); // $ExpectType number
    _(stringRecordList).sortedIndex(stringRecordList[0], partialStringRecord); // $ExpectType number
    extractChainTypes(_.chain(stringRecordList).sortedIndex(stringRecordList[0], partialStringRecord)); // $ExpectType ChainType<number, never>

    // property name iteratee
    _.sortedIndex(stringRecordList, stringRecordList[0], stringRecordProperty); // $ExpectType number
    _(stringRecordList).sortedIndex(stringRecordList[0], stringRecordProperty); // $ExpectType number
    extractChainTypes(_.chain(stringRecordList).sortedIndex(stringRecordList[0], stringRecordProperty)); // $ExpectType ChainType<number, never>

    // property path iteratee
    _.sortedIndex(stringRecordList, stringRecordList[0], stringRecordPropertyPath); // $ExpectType number
    _(stringRecordList).sortedIndex(stringRecordList[0], stringRecordPropertyPath); // $ExpectType number
    extractChainTypes(_.chain(stringRecordList).sortedIndex(stringRecordList[0], stringRecordPropertyPath)); // $ExpectType ChainType<number, never>
}

// findIndex and findLastIndex
{
    _([1, 2, 3, 1, 2, 3]).findIndex(num => num % 2 === 0); // $ExpectType number
    _([{a: 'a'}, {a: 'b'}]).findIndex({a: 'b'}); // $ExpectType number
    _.chain([1, 2, 3, 1, 2, 3]).findIndex(num => num % 2 === 0).value(); // $ExpectType number
    _.chain([{a: 'a'}, {a: 'b'}]).findIndex({a: 'b'}).value(); // $ExpectType number

    _([1, 2, 3, 1, 2, 3]).findLastIndex(num => num % 2 === 0); // $ExpectType number
    _([{a: 'a'}, {a: 'b'}]).findLastIndex({ a: 'b' }); // $ExpectType number
    _.chain([1, 2, 3, 1, 2, 3]).findLastIndex(num => num % 2 === 0).value(); // $ExpectType number
    _.chain([{a: 'a'}, {a: 'b'}]).findLastIndex({ a: 'b' }).value(); // $ExpectType number
}

// Objects

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
        anyValue.propertyName; // $ExpectType any
        anyValue[3]; // $ExpectType any
        _.map(anyValue, i => i); // $ExpectType any[]
        _.isFunction(anyValue) ? anyValue : neverValue; // $ExpectType Function
    }

    _.isObject(stringy) ? stringy : neverValue // $ExpectType StringRecord
    _.isObject(maybeStringArray) ? maybeStringArray : neverValue; // $ExpectType string[]
    _.isObject(maybeFunction) ? maybeFunction : neverValue; // $ExpectType () => void
    _.isObject(simpleString) ? simpleString : neverValue; // $ExpectType never

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

    // any
    extractUnderscoreTypes(_(anyValue)); // $ExpectType UnderscoreType<any, any>

    // never
    extractUnderscoreTypes(_(neverValue)); // $ExpectType UnderscoreType<never, never>
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

    // any
    _(anyValue).value(); // $ExpectType any

    // never
    _(neverValue).value(); // $ExpectType never
}

// Chaining

// chain
// verify that the right chain item and value types are yielded by calls to chain
// these tests also check to make sure that _.chain() and _().chain() yield the same types
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

    // any
    _.chain(anyValue).value(); // $ExpectType any

    // never
    _.chain(neverValue).value(); // $ExpectType never
}
