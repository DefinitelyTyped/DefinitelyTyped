

declare var $: any, window: any;
declare var alert: (msg: string) => any;
declare var console: {log: any};

_.each([1, 2, 3], (num) => alert(num.toString()));
_.each({ one: 1, two: 2, three: 3 }, (value, key) => alert(value.toString()));

_.map([1, 2, 3], (num) => num * 3);
_.map({ one: 1, two: 2, three: 3 }, (value, key) => value * 3);
let plucked: string[] = _.map([{key: 'apples'}, {key: 'oranges'}], 'key');

//var sum = _.reduce([1, 2, 3], (memo, num) => memo + num, 0);	// https://typescript.codeplex.com/workitem/1960
var sum = _.reduce<number, number>([1, 2, 3], (memo, num) => memo + num, 0);
sum = _.reduce<number, number>([1, 2, 3], (memo, num) => memo + num); // memo is optional #issue 5 github
sum = _.reduce<string, number>({'a':'1', 'b':'2', 'c':'3'}, (memo, numstr) => memo + (+numstr));

var list = [[0, 1], [2, 3], [4, 5]];
//var flat = _.reduceRight(list, (a, b) => a.concat(b), []);	// https://typescript.codeplex.com/workitem/1960
var flat = _.reduceRight<number[], number[]>(list, (a, b) => a.concat(b), []);

namespace TestFind {
	let array: {a: string}[] = [{a: 'a'}, {a: 'b'}];
	let list: _.List<{a: string}> = {0: {a: 'a'}, 1: {a: 'b'}, length: 2};
	let dict: _.Dictionary<{a: string}> = {a: {a: 'a'}, b: {a: 'b'}};
	let context = {};

	{
		let iterator = (value: {a: string}, index: number, list: _.List<{a: string}>) => value.a === 'b';
		let result: {a: string} | undefined;

		result = _.find<{a: string}>(array, iterator);
		result = _.find<{a: string}>(array, iterator, context);
		result = _.find<{a: string}, {a: string}>(array, {a: 'b'});
		result = _.find<{a: string}>(array, 'a');

		result = _(array).find<{a: string}>(iterator);
		result = _(array).find<{a: string}>(iterator, context);
		result = _(array).find<{a: string}, {a: string}>({a: 'b'});
		result = _(array).find<{a: string}>('a');

		result = _(array).chain().find<{a: string}>(iterator).value();
		result = _(array).chain().find<{a: string}>(iterator, context).value();
		result = _(array).chain().find<{a: string}, {a: string}>({a: 'b'}).value();
		result = _(array).chain().find<{a: string}>('a').value();

		result = _.find<{a: string}>(list, iterator);
		result = _.find<{a: string}>(list, iterator, context);
		result = _.find<{a: string}, {a: string}>(list, {a: 'b'});
		result = _.find<{a: string}>(list, 'a');

		result = _(list).find<{a: string}>(iterator);
		result = _(list).find<{a: string}>(iterator, context);
		result = _(list).find<{a: string}, {a: string}>({a: 'b'});
		result = _(list).find<{a: string}>('a');

		result = _(list).chain().find<{a: string}>(iterator).value();
		result = _(list).chain().find<{a: string}>(iterator, context).value();
		result = _(list).chain().find<{a: string}, {a: string}>({a: 'b'}).value();
		result = _(list).chain().find<{a: string}>('a').value();

		result = _.detect<{a: string}>(array, iterator);
		result = _.detect<{a: string}>(array, iterator, context);
		result = _.detect<{a: string}, {a: string}>(array, {a: 'b'});
		result = _.detect<{a: string}>(array, 'a');

		result = _(array).detect<{a: string}>(iterator);
		result = _(array).detect<{a: string}>(iterator, context);
		result = _(array).detect<{a: string}, {a: string}>({a: 'b'});
		result = _(array).detect<{a: string}>('a');

		result = _(array).chain().detect<{a: string}>(iterator).value();
		result = _(array).chain().detect<{a: string}>(iterator, context).value();
		result = _(array).chain().detect<{a: string}, {a: string}>({a: 'b'}).value();
		result = _(array).chain().detect<{a: string}>('a').value();

		result = _.detect<{a: string}>(list, iterator);
		result = _.detect<{a: string}>(list, iterator, context);
		result = _.detect<{a: string}, {a: string}>(list, {a: 'b'});
		result = _.detect<{a: string}>(list, 'a');

		result = _(list).detect<{a: string}>(iterator);
		result = _(list).detect<{a: string}>(iterator, context);
		result = _(list).detect<{a: string}, {a: string}>({a: 'b'});
		result = _(list).detect<{a: string}>('a');

		result = _(list).chain().detect<{a: string}>(iterator).value();
		result = _(list).chain().detect<{a: string}>(iterator, context).value();
		result = _(list).chain().detect<{a: string}, {a: string}>({a: 'b'}).value();
		result = _(list).chain().detect<{a: string}>('a').value();
	}

	{
		let iterator = (element: {a: string}, key: string, list: _.Dictionary<{a: string}>) => element.a === 'b';
		let result: {a: string} | undefined;

		result = _.find<{a: string}>(dict, iterator);
		result = _.find<{a: string}>(dict, iterator, context);
		result = _.find<{a: string}, {a: string}>(dict, {a: 'b'});
		result = _.find<{a: string}>(dict, 'a');

		result = _(dict).find<{a: string}>(iterator);
		result = _(dict).find<{a: string}>(iterator, context);
		result = _(dict).find<{a: string}, {a: string}>({a: 'b'});
		result = _(dict).find<{a: string}>('a');

		result = _(dict).chain().find<{a: string}>(iterator).value();
		result = _(dict).chain().find<{a: string}>(iterator, context).value();
		result = _(dict).chain().find<{a: string}, {a: string}>({a: 'b'}).value();
		result = _(dict).chain().find<{a: string}>('a').value();

		result = _.detect<{a: string}>(dict, iterator);
		result = _.detect<{a: string}>(dict, iterator, context);
		result = _.detect<{a: string}, {a: string}>(dict, {a: 'b'});
		result = _.detect<{a: string}>(dict, 'a');

		result = _(dict).detect<{a: string}>(iterator);
		result = _(dict).detect<{a: string}>(iterator, context);
		result = _(dict).detect<{a: string}, {a: string}>({a: 'b'});
		result = _(dict).detect<{a: string}>('a');

		result = _(dict).chain().detect<{a: string}>(iterator).value();
		result = _(dict).chain().detect<{a: string}>(iterator, context).value();
		result = _(dict).chain().detect<{a: string}, {a: string}>({a: 'b'}).value();
		result = _(dict).chain().detect<{a: string}>('a').value();
	}

	{
		let iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
		let result: string | undefined;

		result = _.find<string>('abc', iterator);
		result = _.find<string>('abc', iterator, context);

		result = _('abc').find<string>(iterator);
		result = _('abc').find<string>(iterator, context);

		result = _('abc').chain().find<string>(iterator).value();
		result = _('abc').chain().find<string>(iterator, context).value();

		result = _.detect<string>('abc', iterator);
		result = _.detect<string>('abc', iterator, context);

		result = _('abc').detect<string>(iterator);
		result = _('abc').detect<string>(iterator, context);

		result = _('abc').chain().detect<string>(iterator).value();
		result = _('abc').chain().detect<string>(iterator, context).value();
	}

    {
        _(list).map(x => x.a);
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

// Test map function with _ChainOfArrays<>
let usersTable_2 /*: { age: number; name: string; id: string }[][]*/ = _.chain(usersData)
    .map<{ age: number; name: string; id: string }>((p, k: string) => {
        return [{ id: k, ...p }];
    })
    .value();

let usersTable_3 /*: { score: number; fullName: string; login: string }[][]*/ = _.chain(usersTable)
    .map<{ score: number; fullName: string; login: string }>(p => {
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

var func = function (greeting) { return greeting + ': ' + this.name };
// need a second var otherwise typescript thinks func signature is the above func type,
// instead of the newly returned _bind => func type.
var func2 = _.bind(func, { name: 'moe' }, 'hi');
func2();

var buttonView = {
	label: 'underscore',
	onClick: function () { alert('clicked: ' + this.label); },
	onHover: function () { console.log('hovering: ' + this.label); }
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
var hello2 = _.wrap(hello, (func) => { return "before, " + func("moe") + ", after"; });
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

_.isUndefined((<any>window).missingVariable);

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
	capitalize: function (string) {
		return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
	}
});
(<any>_("fabio")).capitalize();

_.uniqueId('contact_');

_.escape('Curly, Larry & Moe');

var object = { cheese: 'crumpets', stuff: function () { return 'nonsense'; } };
_.result(object, 'cheese');

_.result(object, 'stuff');

var compiled = _.template("hello: <%= name %>");
compiled({ name: 'moe' });
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

  var numEvens = _.chain(['a', 'bb', 'ccc', 'dddd'])
    .map(n => n.length)
    .filter(s => s % 2 == 0)
    .value()
    .length;

  var sortBy = _.chain([4, 3, 2, 1])
    .map(v => v * 5)
    .sortBy(v => v)
    .value()
    .length;

  var each = _.chain([4, 3, 2, 1])
    .map(v => v * 5)
    .each(v => console.log(v))
    .forEach(v => console.log(v))
    .value()
    .length;

  var objectEach: {[key: string]: number} = _.chain({a: 4, b: 3, c: 2, d: 1})
    .each(v => console.log(v))
    .forEach(v => console.log(v))
    .value();

  var whereAndReject = _.chain({a: 4, b: 3, c: 2, d: 1})
    .where(v => v < 2)
    .reject(v => v > 3)
    .value()
    .length;

  var invoke = _.chain(
    [[5, 1, 7], [3, 2, 1]]
  ).invoke('sort').value().length;

  var indexBy: {[key: string]: string} = _.chain(['a', 'bb', 'c', 'dd'])
    .indexBy(v => v[0])
    .value()

  var countBy: {[key: string]: number} = _.chain(['a', 'aa', 'b', 'bb'])
    .countBy(v => v[0])
    .value();

  var groupBy = _.chain(['a', 'aa', 'b', 'bb'])
    .groupBy(v => v[0])
    .value()[0].length;

  var sampleOne = _.chain([1, 2, 3]).sample().value() * 2;
  var sampleMore = _.chain([1, 2, 3]).sample(2).value().length;

  function testChainToArray() {
    var f: string[] = _.chain(arguments)
      .toArray()
      .value()
      .slice();
  }

  var lastN = _.chain([1, 2, 3, 4]).last(3).value().length;
  var fisrtN = _.chain([1, 2, 3, 4]).first(3).value().length;
  var drop = _.chain([1, 2, 3, 4]).drop().value().length;

  var part: number[][] = _.chain([0, 1, 2, 3, 4, 5]).partition(n => n % 2 == 0).value();
  var compact: string[] = _.chain(['a', null, 'b'] as string[]).compact().value();
  var intersection: string[] = _.chain(['a', 'b']).intersection(['b', 'c']).value();
  var difference: string[] = _.chain(['a', 'b']).difference(['b', 'c']).value();
  var uniq: string[] = _.chain(['a', 'b', 'c', 'b', 'a']).uniq().value();
  var zip: Array<string | number>[] = _.chain(['a', 'b', 'c']).zip([1, 2, 3]).value();
  var unzip: string[][] = _.chain([['a', 'b', 'c'], ['d', 'e', 'f']]).unzip().value();
  var obj: {[key: string]: number} = _.chain([['a', 1], ['b', 2]]).object().value();
  var range: number[] = _.chain(10).range().value();
  var range2: number[] = _.chain(1).range(10, 2).value();
  var shuffleChunk: number[][] = _.chain([1, 2, 3, 4, 5, 6]).shuffle().chunk(2).value();

  interface bindAll {
    a: () => number;
    b: (a: number) => string;
  }

  var didBindAll: bindAll = _.chain({a: () => 5, b: (a: number) => a.toString()})
    .bindAll('a', 'b')
    .value();

  var partial: Function = _.chain((a: number, b: number) => b - a)
    .partial(5)
    .value();

  var bind: (a: number) => number = _.chain((a: number) => a * 2).bind({}).value();

  _.chain(alert).defer('hello');
  _.chain(alert).delay(5, 'hello');
  var throttle: (s: string) => void = _.chain(alert).throttle(5).value();
  var debounce: (s: string) => void = _.chain(alert).debounce(5).value();
  var once: (s: string) => void = _.chain((s: string) => console.log(s, s)).once().value();
  var after: (s: string) => void = _.chain((s: string) => console.log(s, s)).after(1).value();
  var before: (s: string) => void = _.chain((s: string) => console.log(s, s)).before(2).value();
  var restArgs: Function = _.chain((a: number, b: string[]) => console.log(a, b))
    .restArgs(1)
    .value();

  var hello = name => 'hello: ' + name;
  var hello2: Function = _.chain(hello)
    .wrap((func) => 'before, ' + func('moe') + ', after')
    .value();

  var negated: boolean = _.chain((a: boolean, b: boolean) => (a || b))
    .negate()
    .value()(true, false);
  var compose: (v: string) => string = _.chain(hello).compose(h => h + '!').value()
  var keys: string[] = _.chain({a: 1, b: 2}).keys().value();
  var values: number[] = _.chain({a: 1, b: 2}).values().value();
  var mappedObj: {[key: string]: string} = _.chain({a: 1, b: 2})
    .mapObject(v => v.toString())
    .value();
  var paired: Array<[string, number]> = _.chain({a: 1, b: 2}).pairs().value();
  var inverted: {[key: string]: string} = _.chain({a: 'b', b: 'a'}).invert().value();
  var functions: string[] = _.chain(_).functions().value();
  var methods: string[] = _.chain(_).methods().value();
  var extend: {[key: string]: number} = _.chain({a: 1, b: 2}).extend({c: 3}, {d: 4}).value();
  var findKey: string = _.chain({a: 1, b: 2}).findKey(v => v % 2 === 0).value();
  var omit: {[key: string]: number} = _.chain({a: 1, b: 2}).omit('a').value();
  var clone: {[key: string]: number} = _.chain({a: 1, b: 2}).clone().value();
  var has: boolean = _.chain({a: 1, b: 2}).has('b').value();
  var defaults: {[key: string]: number} = _.chain({a: 1}).defaults({b: 2}).value();
  var create: {[key: string]: number} = _.chain(Object.prototype).create({a: 1, b: 2}).value();
  var matches: (obj: any) => boolean = _.chain({a: 1, b: 2}).matcher().value();
  var property: (obj: any) => string = _.chain('hello').property().value();
  var propertyOf: (key: string) => any = _.chain({a: 1, b: 2}).propertyOf().value();
  var isEqual: boolean = _.chain({a: 1, b: 2}).isEqual({c: 3}).value();
  var isEmpty: boolean = _.chain({a: 1, b: 2}).isEmpty().value();
  var isMatch: boolean = _.chain({a: 1, b: 2}).isMatch({b: 3}).value();
  var isElement: boolean = _.chain('hello').isElement().value();
  var isArray: boolean = _.chain('hello').isArray().value();
  var isSymbol: boolean = _.chain('hello').isSymbol().value();
  var isArguments: boolean = _.chain('hello').isArguments().value();
  var isFunction: boolean = _.chain('hello').isFunction().value();
  var isError: boolean = _.chain('hello').isError().value();
  var isString: boolean = _.chain('hello').isString().value();
  var isNumber: boolean = _.chain('hello').isNumber().value();
  var isFinite: boolean = _.chain('hello').isFinite().value();
  var isBoolean: boolean = _.chain('hello').isBoolean().value();
  var isDate: boolean = _.chain('hello').isDate().value();
  var isRegExp: boolean = _.chain('hello').isRegExp().value();
  var isNaN: boolean = _.chain('hello').isNaN().value();
  var isNull: boolean = _.chain('hello').isNull().value();
  var isUndefined: boolean = _.chain('hello').isUndefined().value();
  var identity: number[] = _.chain([1, 2, 3]).identity().value();
  var constant: () => string = _.chain('hello').constant().value();
  _.chain('hello').noop();
  var times: number[] = _.chain(5).times(n => n*2).value();
  var random: number = _.chain(10).random().value();
  _.chain([1, 2, 3]).mixin({a: () => 'hello'});
  var uniqueId: string = _.chain('prefix').uniqueId().value();
  var esc: string = _.chain('hello').escape().value();
  var unesc: string = _.chain('hello').unescape().value();
  var result: string = _.chain({a: () => 'hello'}).result('a').value();
  var template: (kv: any) => string = _.chain('templatey').template().value();
  var proxies: number[] = _.chain([1, 2, 3])
    .concat([4, 5, 6])
    .push(7)
    .reverse()
    .slice(0)
    .sort((a: number, b: number) => b - a)
    .unshift(0)
    .splice(5, 1, 2, 3, 4, 5)
    .value();
  var joined: string = _.chain(['a', 'b', 'c']).join(', ').value();
  var toString: string = _.chain([1, 2, 3]).toString().value();
  var chainchain: string[] = _.chain(['a', 'b', 'c']).chain().value();

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

    const arr1: string[] = ['z', 'x', 'y'], query = 'z';
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
    },
    empty = {};

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
