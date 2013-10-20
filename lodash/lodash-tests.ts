/// <reference path="lodash.d.ts" />

declare var $, jQuery;

interface IFoodOrganic {
	name: string;
	organic: boolean;
}

interface IFoodType {
	name: string;
	type: string;
}

interface IFoodCombined {
	name: string;
	organic: boolean;
	type: string;
}

interface IStoogesQuote {
	name: string;
	quotes: string[];
}

interface IStoogesAge {
	name: string;
	age: number;
}

interface IStoogesCombined {
	name: string;
	age: number;
	quotes: string[];
}

interface IKey {
	dir: string;
	code: number;
}

var foodsOrganic: IFoodOrganic[] = [
	{ name: 'banana', organic: true },
	{ name: 'beet',   organic: false },
];
var foodsType: IFoodType[] = [
	{ name: 'apple',  type: 'fruit' },
	{ name: 'banana', type: 'fruit' },
	{ name: 'beet',   type: 'vegetable' }
];
var foodsCombined: IFoodCombined[] = [
  { 'name': 'apple',  'organic': false, 'type': 'fruit' },
  { 'name': 'carrot', 'organic': true,  'type': 'vegetable' }
];

var stoogesQuotes: IStoogesQuote[] = [
	{ 'name': 'curly', 'quotes': ['Oh, a wise guy, eh?', 'Poifect!'] },
	{ 'name': 'moe', 'quotes': ['Spread out!', 'You knucklehead!'] }
];
var stoogesAges: IStoogesAge[] = [
	{ 'name': 'moe', 'age': 40 },
	{ 'name': 'larry', 'age': 50 }
];

var stoogesCombined: IStoogesCombined[] = [
  { 'name': 'curly', 'age': 30, 'quotes': ['Oh, a wise guy, eh?', 'Poifect!'] },
  { 'name': 'moe', 'age': 40, 'quotes': ['Spread out!', 'You knucklehead!'] }
];

var keys: IKey[] = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log('Woof, woof!');
};

var result;

//Array Method Tests
result = <any[]>_.compact([0, 1, false, 2, '', 3]);
result = <number[]>_.difference([1, 2, 3, 4, 5], [5, 2, 10]);

result = <number[]>_.rest([1, 2, 3]);
result = <number[]>_.rest([1, 2, 3], 2);
result = <number[]>_.rest([1, 2, 3], function(num) {
  return num < 3;
});
result = <IFoodOrganic[]>_.rest(foodsOrganic, 'test');
result = <IFoodType[]>_.rest(foodsType, { 'test': 'value' });

	_.drop([1, 2, 3]);
	_.drop([1, 2, 3], 2);
	_.drop([1, 2, 3], function(num) {
	  return num < 3;
	});
	_.drop(foodsOrganic, 'test');
	_.drop(foodsType, { 'test': 'value' });

	_.tail([1, 2, 3]);
	_.tail([1, 2, 3], 2);
	_.tail([1, 2, 3], function(num) {
	  return num < 3;
	});
	_.tail(foodsOrganic, 'test');
	_.tail(foodsType, { 'test': 'value' });

result = <number>_.findIndex(['apple', 'banana', 'beet'], function(f) {
  return /^b/.test(f);
});
result = <number>_.findIndex(['apple', 'banana', 'beet'], 'apple');
result = <number>_.findIndex([{ food: 'apple' }, { food: 'banana' }, { food: 'beet' }], { food: 'apple'});

result = <number>_.findLastIndex(['apple', 'banana', 'beet'], function(f) {
  return /^b/.test(f);
});
result = <number>_.findLastIndex(['apple', 'banana', 'beet'], 'apple');
result = <number>_.findLastIndex([{ food: 'apple' }, { food: 'banana' }, { food: 'beet' }], { food: 'apple'});


result = <number>_.first([1, 2, 3]);
result = <number[]>_.first([1, 2, 3], 2);
result = <number[]>_.first([1, 2, 3], function(num) {
  return num < 3;
});
result = <IFoodOrganic[]>_.first(foodsOrganic, 'organic');
result = <IFoodType[]>_.first(foodsType, { 'type': 'fruit' });

result = <number>_.head([1, 2, 3]);
result = <number[]>_.head([1, 2, 3], 2);
result = <number[]>_.head([1, 2, 3], function(num) {
  return num < 3;
});
result = <IFoodOrganic[]>_.head(foodsOrganic, 'organic');
result = <IFoodType[]>_.head(foodsType, { 'type': 'fruit' });

result = <number>_.take([1, 2, 3]);
result = <number[]>_.take([1, 2, 3], 2);
result = <number[]>_.take([1, 2, 3], function(num) {
  return num < 3;
});
result = <IFoodOrganic[]>_.take(foodsOrganic, 'organic');
result = <IFoodType[]>_.take(foodsType, { 'type': 'fruit' });

result = <number[]>_.flatten([1, [2], [3, [[4]]]]);
result = <any[]>_.flatten([1, [2], [3, [[4]]]], true);
result = <string[]>_.flatten(stoogesQuotes, 'quotes');

result = <number>_.indexOf([1, 2, 3, 1, 2, 3], 2);
result = <number>_.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
result = <number>_.indexOf([1, 1, 2, 2, 3, 3], 2, true);

result = <number[]>_.initial([1, 2, 3]);
result = <number[]>_.initial([1, 2, 3], 2);
result = <number[]>_.initial([1, 2, 3], function(num) {
  return num > 1;
});
result = <IFoodOrganic[]>_.initial(foodsOrganic, 'organic');
result = <IFoodType[]>_.initial(foodsType, { 'type': 'vegetable' });

result = <number[]>_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);

result = <number>_.last([1, 2, 3]);
result = <number[]>_.last([1, 2, 3], 2);
result = <number[]>_.last([1, 2, 3], function(num) {
  return num > 1;
});
result = <IFoodOrganic[]>_.last(foodsOrganic, 'organic');
result = <IFoodType[]>_.last(foodsType, { 'type': 'vegetable' });

result = <number>_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
result = <number>_.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);

result = <{[key: string]: any}>_.zipObject(['moe', 'larry'], [30, 40]);
	result = <{[key: string]: any}>_.object(['moe', 'larry'], [30, 40]);

result = <any[]>_.pull([1, 2, 3, 1, 2, 3], 2, 3);

result = <number[]>_.range(10);
result = <number[]>_.range(1, 11);
result = <number[]>_.range(0, 30, 5);
result = <number[]>_.range(0, -10, -1);
result = <number[]>_.range(1, 4, 0);
result = <number[]>_.range(0);

result = <number[]>_.remove([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
result = <IFoodOrganic[]>_.remove(foodsOrganic, 'organic');
result = <IFoodType[]>_.remove(foodsType, { 'type': 'vegetable'});

result = <number>_.sortedIndex([20, 30, 50], 40);
result = <number>_.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
var sortedIndexDict = {
  'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
};
result = <number>_.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
  return sortedIndexDict.wordToNumber[word];
});
result = <number>_.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
  return this.wordToNumber[word];
}, sortedIndexDict);

result = <number[]>_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);

result = <number[]>_.uniq([1, 2, 1, 3, 1]);
result = <number[]>_.uniq([1, 1, 2, 2, 3], true);
result = <string[]>_.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function(letter) { 
	return letter.toLowerCase(); 
});
result = <number[]>_.uniq([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math);
result = <{x: number;}[]>_.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');

	result = <number[]>_.unique([1, 2, 1, 3, 1]);
	result = <number[]>_.unique([1, 1, 2, 2, 3], true);
	result = <string[]>_.unique(['A', 'b', 'C', 'a', 'B', 'c'], function(letter) { 
		return letter.toLowerCase(); 
	});
	result = <number[]>_.unique([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math);
	result = <{x: number;}[]>_.unique([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');

result = <any[][]>_.unzip(['moe', 'larry'], [30, 40], [true, false]);
	result = <any[][]>_.zip(['moe', 'larry'], [30, 40], [true, false]);

result = <number[]>_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);

/* *************
 * Collections *
 ************* */

result = <string[]>_.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
result = <string[]>_.at(['moe', 'larry', 'curly'], 0, 2);

result = <boolean>_.contains([1, 2, 3], 1);
result = <boolean>_.contains([1, 2, 3], 1, 2);
result = <boolean>_.contains({ 'name': 'moe', 'age': 40 }, 'moe');
result = <boolean>_.contains('curly', 'ur');

	result = <boolean>_.include([1, 2, 3], 1);
	result = <boolean>_.include([1, 2, 3], 1, 2);
	result = <boolean>_.include({ 'name': 'moe', 'age': 40 }, 'moe');
	result = <boolean>_.include('curly', 'ur');

result = <_.Dictionary<number>>_.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
result = <_.Dictionary<number>>_.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
result = <_.Dictionary<number>>_.countBy(['one', 'two', 'three'], 'length');

result = <boolean>_.every([true, 1, null, 'yes'], Boolean);
result = <boolean>_.every(stoogesAges, 'age');
result = <boolean>_.every(stoogesAges, { 'age': 50 });

	result = <boolean>_.all([true, 1, null, 'yes'], Boolean);
	result = <boolean>_.all(stoogesAges, 'age');
	result = <boolean>_.all(stoogesAges, { 'age': 50 });

result = <number[]>_.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
result = <IFoodCombined[]>_.filter(foodsCombined, 'organic');
result = <IFoodCombined[]>_.filter(foodsCombined, { 'type': 'fruit' });

	result = <number[]>_.select([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
	result = <IFoodCombined[]>_.select(foodsCombined, 'organic');
	result = <IFoodCombined[]>_.select(foodsCombined, { 'type': 'fruit' });

result = <number>_.find([1, 2, 3, 4], function(num) {
  return num % 2 == 0;
});
result = <IFoodCombined>_.find(foodsCombined, { 'type': 'vegetable' });
result = <IFoodCombined>_.find(foodsCombined, 'organic');

	result = <number>_.detect([1, 2, 3, 4], function(num) {
	  return num % 2 == 0;
	});
	result = <IFoodCombined>_.detect(foodsCombined, { 'type': 'vegetable' });
	result = <IFoodCombined>_.detect(foodsCombined, 'organic');

	result = <number>_.findWhere([1, 2, 3, 4], function(num) {
	  return num % 2 == 0;
	});
	result = <IFoodCombined>_.findWhere(foodsCombined, { 'type': 'vegetable' });
	result = <IFoodCombined>_.findWhere(foodsCombined, 'organic');

result = <number>_.findLast([1, 2, 3, 4], function(num) {
  return num % 2 == 0;
});
result = <IFoodCombined>_.findLast(foodsCombined, { 'type': 'vegetable' });
result = <IFoodCombined>_.findLast(foodsCombined, 'organic');

result = <number[]>_.forEach([1, 2, 3], function(num) { console.log(num); });
result = <_.Dictionary<number>>_.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });

	result = <number[]>_.each([1, 2, 3], function(num) { console.log(num); });
	result = <_.Dictionary<number>>_.each({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });

result = <number[]>_.forEachRight([1, 2, 3], function(num) { console.log(num); });
result = <_.Dictionary<number>>_.forEachRight({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });

	result = <number[]>_.eachRight([1, 2, 3], function(num) { console.log(num); });
	result = <_.Dictionary<number>>_.eachRight({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });

result = <_.Dictionary<number[]>>_.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
result = <_.Dictionary<number[]>>_.groupBy([4.2, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
result = <_.Dictionary<string[]>>_.groupBy(['one', 'two', 'three'], 'length');

result = <_.Dictionary<IKey>>_.indexBy(keys, 'dir');
result = <_.Dictionary<IKey>>_.indexBy(keys, function(key) { return String.fromCharCode(key.code); });
result = <_.Dictionary<IKey>>_.indexBy(keys, function(key) { this.fromCharCode(key.code); }, String);

result = <any[]>_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
result = <any[]>_.invoke([123, 456], String.prototype.split, '');

result = <any[]>_.map([1, 2, 3], function(num) { return num * 3; });
result = <any[]>_.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
result = <any[]>_.map(stoogesAges, 'name');

	result = <any[]>_.collect([1, 2, 3], function(num) { return num * 3; });
	result = <any[]>_.collect({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
	result = <any[]>_.collect(stoogesAges, 'name');

result = <number>_.max([4, 2, 8, 6]);
result = <IStoogesAge>_.max(stoogesAges, function(stooge) { return stooge.age; });
result = <IStoogesAge>_.max(stoogesAges, 'age');

result = <number>_.min([4, 2, 8, 6]);
result = <IStoogesAge>_.min(stoogesAges, function(stooge) { return stooge.age; });
result = <IStoogesAge>_.min(stoogesAges, 'age');

result = <string[]>_.pluck(stoogesAges, 'name');

result = <any>_.reduce([1, 2, 3], function(sum, num) {
  return sum + num;
});
result = <any>_.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
  result[key] = num * 3;
  return result;
}, {});

	result = <any>_.foldl([1, 2, 3], function(sum, num) {
	  return sum + num;
	});
	result = <any>_.foldl({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
	  result[key] = num * 3;
	  return result;
	}, {});

	result = <any>_.inject([1, 2, 3], function(sum, num) {
	  return sum + num;
	});
	result = <any>_.inject({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
	  result[key] = num * 3;
	  return result;
	}, {});

result = <any>_.reduceRight([[0, 1], [2, 3], [4, 5]], function(a, b) { return a.concat(b); }, []);

	result = <any>_.foldr([[0, 1], [2, 3], [4, 5]], function(a, b) { return a.concat(b); }, []);

result = <number[]>_.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
result = <IFoodCombined[]>_.reject(foodsCombined, 'organic');
result = <IFoodCombined[]>_.reject(foodsCombined, { 'type': 'fruit' });

result = <number>_.sample([1, 2, 3, 4]);
result = <number[]>_.sample([1, 2, 3, 4], 2);

result = <number[]>_.shuffle([1, 2, 3, 4, 5, 6]);

result = <number>_.size([1, 2]);
result = <number>_.size({ 'one': 1, 'two': 2, 'three': 3 });
result = <number>_.size('curly');

result = <boolean>_.some([null, 0, 'yes', false], Boolean);
result = <boolean>_.some(foodsCombined, 'organic');
result = <boolean>_.some(foodsCombined, { 'type': 'meat' });
	
	result = <boolean>_.any([null, 0, 'yes', false], Boolean);
	result = <boolean>_.any(foodsCombined, 'organic');
	result = <boolean>_.any(foodsCombined, { 'type': 'meat' });
	
result = <number[]>_.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
result = <number[]>_.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
result = <string[]>_.sortBy(['banana', 'strawberry', 'apple'], 'length');

(function(a, b, c, d){ return _.toArray(arguments).slice(1); })(1, 2, 3, 4);

result = <IStoogesCombined[]>_.where(stoogesCombined, { 'age': 40 });
result = <IStoogesCombined[]>_.where(stoogesCombined, { 'quotes': ['Poifect!'] });
	
/*************
 * Functions *
 *************/
var saves = ['profile', 'settings'];
var asyncSave = (obj) => obj.done();

var done: Function = _.after(saves.length, function() {
  console.log('Done saving!');
});

_.forEach(saves, function(type) {
  asyncSave({ 'type': type, 'complete': done });
});

var funcBind = function (greeting) { return greeting + ' ' + this.name };
// need a second var otherwise typescript thinks func signature is the above func type,
// instead of the newly returned _bind => func type.
var funcBind2: () => any = _.bind(funcBind, { 'name': 'moe' }, 'hi');
funcBind2();

var view = {
 'label': 'docs',
 'onClick': function() { console.log('clicked ' + this.label); }
};

view = _.bindAll(view);
jQuery('#docs').on('click', view.onClick);

var objectBindKey = {
  'name': 'moe',
  'greet': function(greeting) {
    return greeting + ' ' + this.name;
  }
};

var funcBindKey: Function = _.bindKey(object, 'greet', 'hi');
funcBindKey();

objectBindKey.greet = function(greeting) {
  return greeting + ', ' + this.name + '!';
};

funcBindKey();

var realNameMap = {
  'curly': 'jerome'
};

var format = function(name) {
  name = realNameMap[name.toLowerCase()] || name;
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

var greet = function(formatted) {
  return 'Hiya ' + formatted + '!';
};

var welcome: Function = _.compose(greet, format);
welcome('curly');

var createCallbackObj = { name: 'Joe' };
var pluckCallback: () => any = _.createCallback('name');
var whereCallback: () => boolean = _.createCallback(createCallbackObj);

var curried: Function = _.curry(function(a, b, c) {
  console.log(a + b + c);
});

curried(1)(2)(3);
curried(1, 2)(3);
curried(1, 2, 3);

var lazyLayout: Function = _.debounce(function() {}, 150);
jQuery(window).on('resize', lazyLayout);

jQuery('#postbox').on('click', <Function>_.debounce(function() {}, 300, {
  'leading': true,
  'trailing': false
}));

declare var source;
source.addEventListener('message', <Function>_.debounce(function() {}, 250, {
  'maxWait': 1000
}), false);

result = <number>_.defer(function() { console.log('deferred'); });

var log = _.bind(console.log, console);
result = <number>_.delay(log, 1000, 'logged later');

var fibonacci = <Function>_.memoize(function(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

var data = {
  'moe': { 'name': 'moe', 'age': 40 },
  'curly': { 'name': 'curly', 'age': 60 }
};

var stooge = <Function>_.memoize(function(name) { return data[name]; }, _.identity);
stooge('curly');

stooge['cache']['curly'].name = 'jerome';
stooge('curly');

var initialize = <Function>_.once(function(){ });
initialize();
initialize();

var greetPartial = function(greeting, name) { return greeting + ' ' + name; };
var hi = <Function>_.partial(greetPartial, 'hi');
hi('moe');

var defaultsDeep = <Function>_.partialRight(_.merge, _.defaults);

var optionsPartialRight = {
  'variable': 'data',
  'imports': { 'jq': $ }
};

defaultsDeep(optionsPartialRight, _.templateSettings);

var throttled = _.throttle(function () { }, 100);
jQuery(window).on('scroll', throttled);

jQuery('.interactive').on('click', _.throttle(function() { }, 300000, {
  'trailing': false
}));

var helloWrap = function(name) { return 'hello ' + name; };
var helloWrap2 = _.wrap(helloWrap, function(func) {
  return 'before, ' + func('moe') + ', after';
});
helloWrap2();

/**********
* Objects *
***********/
result = <any>_.assign({ 'name': 'moe' }, { 'age': 40 });
result = <any>_.assign({ 'name': 'moe' }, { 'age': 40 }, function(a, b) {
  return typeof a == 'undefined' ? b : a;
});

	result = <any>_.extend({ 'name': 'moe' }, { 'age': 40 });
	result = <any>_.extend({ 'name': 'moe' }, { 'age': 40 }, function(a, b) {
	  return typeof a == 'undefined' ? b : a;
	});

var result = <any>_.clone(stoogesAges);
var result = <any>_.clone(stoogesAges, true);
var result = <any>_.clone(stoogesAges, true, function(value) {
    return _.isElement(value) ? value.cloneNode(false) : undefined;
});

var result = <any>_.cloneDeep(stoogesAges);
var result = <any>_.cloneDeep(stoogesAges, function(value) {
    return _.isElement(value) ? value.cloneNode(false) : undefined;
});

var foodDefaults = { 'name': 'apple' };
result = <any>_.defaults(foodDefaults, { 'name': 'banana', 'type': 'fruit' });

result = <string>_.findKey({ 'a': 1, 'b': 2, 'c': 3, 'd': 4 }, function(num) {
  return num % 2 == 0;
});

result = <string>_.findLastKey({ 'a': 1, 'b': 2, 'c': 3, 'd': 4 }, function(num) {
  return num % 2 == 1;
});

result = <any>_.forIn(new Dog('Dagny'), function(value, key) {
  console.log(key);
});

result = <any>_.forInRight(new Dog('Dagny'), function(value, key) {
  console.log(key);
});


result = <any>_.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
  console.log(key);
});

result = <any>_.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
  console.log(key);
});

result = <string[]>_.functions(_);
	result = <string[]>_.methods(_);

result = <boolean>_.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');

result = <any>_.invert({ 'first': 'moe', 'second': 'larry' });

(function(...args: any[]) { return <boolean>_.isArguments(arguments); })(1, 2, 3);

(function () { return <boolean>_.isArray(arguments); })();
result = <boolean>_.isArray([1, 2, 3]);

result = <boolean>_.isBoolean(null);

result = <boolean>_.isDate(new Date());

result = <boolean>_.isElement(document.body);

result = <boolean>_.isEmpty([1, 2, 3]);
result = <boolean>_.isEmpty({});
result = <boolean>_.isEmpty('');

var moe = { 'name': 'moe', 'age': 40 };
var copy = { 'name': 'moe', 'age': 40 };

result = <boolean>_.isEqual(moe, copy);

var words = ['hello', 'goodbye'];
var otherWords = ['hi', 'goodbye'];

result = <boolean>_.isEqual(words, otherWords, function(a, b) {
  var reGreet = /^(?:hello|hi)$/i,
      aGreet = _.isString(a) && reGreet.test(a),
      bGreet = _.isString(b) && reGreet.test(b);

  return (aGreet || bGreet) ? (aGreet == bGreet) : undefined;
});

result = <boolean>_.isFinite(-101);
result = <boolean>_.isFinite('10');
result = <boolean>_.isFinite(true);
result = <boolean>_.isFinite('');
result = <boolean>_.isFinite(Infinity);

result = <boolean>_.isFunction(_);

result = <boolean>_.isNaN(NaN);
result = <boolean>_.isNaN(new Number(NaN));
result = <boolean>_.isNaN(undefined);

result = <boolean>_.isNull(null);
result = <boolean>_.isNull(undefined);

result = <boolean>_.isNumber(8.4 * 5);

result = <boolean>_.isObject({});
result = <boolean>_.isObject([1, 2, 3]);
result = <boolean>_.isObject(1);

function Stooge(name, age) {
  this.name = name;
  this.age = age;
}

result = <boolean>_.isPlainObject(new Stooge('moe', 40));
result = <boolean>_.isPlainObject([1, 2, 3]);
result = <boolean>_.isPlainObject({ 'name': 'moe', 'age': 40 });

result = <boolean>_.isRegExp(/moe/);

result = <boolean>_.isString('moe');

result = <boolean>_.isUndefined(void 0);

result = <string[]>_.keys({ 'one': 1, 'two': 2, 'three': 3 });

var mergeNames = {
  'stooges': [
    { 'name': 'moe' },
    { 'name': 'larry' }
  ]
};

var mergeAges = {
  'stooges': [
    { 'age': 40 },
    { 'age': 50 }
  ]
};

result = <any>_.merge(mergeNames, mergeAges);

var mergeFood = {
  'fruits': ['apple'],
  'vegetables': ['beet']
};

var mergeOtherFood = {
  'fruits': ['banana'],
  'vegetables': ['carrot']
};

result = <any>_.merge(mergeFood, mergeOtherFood, function(a, b) {
  return _.isArray(a) ? a.concat(b) : undefined;
});

result = <any>_.omit({ 'name': 'moe', 'age': 40 }, 'age');
result = <any>_.omit({ 'name': 'moe', 'age': 40 }, ['age']);
result = <any>_.omit({ 'name': 'moe', 'age': 40 }, function(value) {
  return typeof value == 'number';
});

result = <any[][]>_.pairs({ 'moe': 30, 'larry': 40 });

result = <any>_.pick({ 'name': 'moe', '_userid': 'moe1' }, 'name');
result = <any>_.pick({ 'name': 'moe', '_userid': 'moe1' }, ['name']);
result = <any>_.pick({ 'name': 'moe', '_userid': 'moe1' }, function(value, key) {
  return key.charAt(0) != '_';
});

result = <any>_.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(result, num) {
  num *= num;
  if (num % 2) {
    return result.push(num) < 3;
  }
});
// → [1, 9, 25]

result = <any>_.transform({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
  result[key] = num * 3;
});

result = <any[]>_.values({ 'one': 1, 'two': 2, 'three': 3 });

/**********
* Utilities *
***********/


//////////////////////////////////////////////////////////////////////////////////////////////////

var iceCream = { flavor: "chocolate" };

_([1, 2, 3, 4])
	.chain()
	.filter((num: number) => {
		return num % 2 == 0;
	}).tap(alert)
	.map((num: number) => {
		return num * num;
	})
	.value();

_.chain([1, 2, 3, 200])
	.filter(function (num: number) { return num % 2 == 0; })
	.tap(alert)
	.map(function (num: number) { return num * num })
	.value();

///////////////////////////////////////////////////////////////////////////////////////

var underscore = _.noConflict();

var moe2 = { name: 'moe' };
moe2 === _.identity(moe);

var genie;
var r2 = _.times<number>(3, (n) => { return n * n });
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
_.template(list2, { people: ['moe', 'curly', 'larry'] });
var template = _.template("<b><%- value %></b>");
template({ value: '<script>' });
var compiled2 = _.template("<% print('Hello ' + epithet); %>");
compiled2({ epithet: "stooge" });
_.templateSettings = {
	interpolate: /\{\{(.+?)\}\}/g
};
var template2 = _.template("Hello {{ name }}!");
template2({ name: "Mustache" });
_.template("Using 'with': <%= data.answer %>", { answer: 'no' }, { variable: 'data' });


_(['test', 'test']).pick(['test2', 'test2']);

//////////////// Chain Tests
function chain_tests() {
    var list:number[] = _.chain([1, 2, 3, 4, 5, 6, 7, 8])
        .filter(n => n % 2 == 0)
        .map(n => n * n)
        .value();

    _([1, 2, 3, 4])
        .chain()
        .filter((num: number) => {
            return num % 2 == 0;
        }).tap(alert)
        .map((num: number) => {
            return num * num;
        })
        .value();

    _.chain([1, 2, 3, 200])
        .filter(function (num: number) { return num % 2 == 0; })
        .tap(alert)
        .map(function (num: number) { return num * num })
        .value();
}
