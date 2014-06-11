/// <reference path="lodash.d.ts" />

declare var $: any, jQuery: any;

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
    { name: 'beet', organic: false },
];
var foodsType: IFoodType[] = [
    { name: 'apple', type: 'fruit' },
    { name: 'banana', type: 'fruit' },
    { name: 'beet', type: 'vegetable' }
];
var foodsCombined: IFoodCombined[] = [
    { 'name': 'apple', 'organic': false, 'type': 'fruit' },
    { 'name': 'carrot', 'organic': true, 'type': 'vegetable' }
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

class Dog {
    constructor(public name: string) { }

    public bark() {
        console.log('Woof, woof!');
    }
}

var result: any;

/*************
 * Chaining *
 *************/
result = <_.LoDashWrapper<string>>_('test');
result = <_.LoDashWrapper<number>>_(1);
result = <_.LoDashWrapper<boolean>>_(true);
result = <_.LoDashArrayWrapper<string>>_(['test1', 'test2']);
// Appears to be a change in the compiler, if the type explicity implements the object indexer.
// Looking at: https://typescript.codeplex.com/wikipage?title=Known%20breaking%20changes%20between%200.8%20and%200.9&referringTitle=Documentation
// "The ‘noimplicitany’ option now warns on the use of the hidden default indexer"
result = <_.LoDashObjectWrapper<_.Dictionary<string>>>_(<{ [index: string]: string; }>{ 'key1': 'test1', 'key2': 'test2' });

result = <_.LoDashWrapper<string>>_.chain('test');
result = <_.LoDashWrapper<string>>_('test').chain();
result = <_.LoDashWrapper<number>>_.chain(1);
result = <_.LoDashWrapper<number>>_(1).chain();
result = <_.LoDashWrapper<boolean>>_.chain(true);
result = <_.LoDashWrapper<boolean>>_(true).chain();
result = <_.LoDashArrayWrapper<string>>_.chain(['test1', 'test2']);
result = <_.LoDashArrayWrapper<string>>_(['test1', 'test2']).chain();
result = <_.LoDashObjectWrapper<_.Dictionary<string>>>_.chain(<{ [index: string]: string; }>{ 'key1': 'test1', 'key2': 'test2' });
result = <_.LoDashObjectWrapper<_.Dictionary<string>>>_(<{ [index: string]: string; }>{ 'key1': 'test1', 'key2': 'test2' }).chain();

//Wrapped array shortcut methods
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).concat(5, 6);
result = <_.LoDashWrapper<string>>_([1, 2, 3, 4]).join(',');
result = <_.LoDashWrapper<number>>_([1, 2, 3, 4]).pop();
_([1, 2, 3, 4]).push(5, 6, 7);
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).reverse();
result = <_.LoDashWrapper<number>>_([1, 2, 3, 4]).shift();
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).slice(1, 2);
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).slice(2);
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).sort((a, b) => 1);
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).splice(1);
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).splice(1, 2, 5, 6);
result = <_.LoDashWrapper<number>>_([1, 2, 3, 4]).unshift(5, 6);

result = <number[]>_.tap([1, 2, 3, 4], function (array) { console.log(array); });
result = <_.LoDashWrapper<string>>_('test').tap(function (value) { console.log(value); });
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).tap(function (array) { console.log(array); });
result = <_.LoDashObjectWrapper<_.Dictionary<string>>>_(<{ [index: string]: string; }>{ 'key1': 'test1', 'key2': 'test2' }).tap(function (array) { console.log(array); });

result = <string>_('test').toString();
result = <string>_([1, 2, 3]).toString();
result = <string>_({ 'key1': 'test1', 'key2': 'test2' }).toString();

result = <string>_('test').valueOf();
result = <number[]>_([1, 2, 3]).valueOf();
result = <_.Dictionary<string>>_(<{ [index: string]: string; }>{ 'key1': 'test1', 'key2': 'test2' }).valueOf();

result = <string>_('test').value();
result = <number[]>_([1, 2, 3]).value();
result = <_.Dictionary<string>>_(<{ [index: string]: string; }>{ 'key1': 'test1', 'key2': 'test2' }).value();

// /*************
//  * Arrays *
//  *************/
result = <any[]>_.compact([0, 1, false, 2, '', 3]);
result = <_.LoDashArrayWrapper<any>>_([0, 1, false, 2, '', 3]).compact();

result = <number[]>_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4, 5]).difference([5, 2, 10]);

result = <number[]>_.rest([1, 2, 3]);
result = <number[]>_.rest([1, 2, 3], 2);
result = <number[]>_.rest([1, 2, 3], (num) => num < 3)
result = <IFoodOrganic[]>_.rest(foodsOrganic, 'test');
result = <IFoodType[]>_.rest(foodsType, { 'type': 'value' });

result = <number[]>_.drop([1, 2, 3]);
result = <number[]>_.drop([1, 2, 3], 2);
result = <number[]>_.drop([1, 2, 3], (num) => num < 3)
result = <IFoodOrganic[]>_.drop(foodsOrganic, 'test');
result = <IFoodType[]>_.drop(foodsType, { 'type': 'value' });

result = <number[]>_.tail([1, 2, 3])
result = <number[]>_.tail([1, 2, 3], 2)
result = <number[]>_.tail([1, 2, 3], (num) => num < 3)
result = <IFoodOrganic[]>_.tail(foodsOrganic, 'test')
result = <IFoodType[]> _.tail(foodsType, { 'type': 'value' })

result = <number>_.findIndex(['apple', 'banana', 'beet'], function (f) {
    return /^b/.test(f);
});
result = <number>_.findIndex(['apple', 'banana', 'beet'], 'apple');
result = <number>_.findIndex([{ food: 'apple' }, { food: 'banana' }, { food: 'beet' }], { food: 'apple' });

result = <number>_.findLastIndex(['apple', 'banana', 'beet'], function (f: string) {
    return /^b/.test(f);
});
result = <number>_.findLastIndex(['apple', 'banana', 'beet'], 'apple');
result = <number>_.findLastIndex([{ food: 'apple' }, { food: 'banana' }, { food: 'beet' }], { food: 'apple' });

result = <number>_.first([1, 2, 3]);
result = <number[]>_.first([1, 2, 3], 2);
result = <number[]>_.first([1, 2, 3], function (num) {
    return num < 3;
});
result = <IFoodOrganic[]>_.first(foodsOrganic, 'organic');
result = <IFoodType[]>_.first(foodsType, { 'type': 'fruit' });

result = <number>_([1, 2, 3]).first();
result = <number[]>_([1, 2, 3]).first(2).value();
result = <number[]>_([1, 2, 3]).first(function (num) {
    return num < 3;
}).value();
result = <IFoodOrganic[]>_(foodsOrganic).first('organic').value();
result = <IFoodType[]>_(foodsType).first({ 'type': 'fruit' }).value();

result = <number>_.head([1, 2, 3]);
result = <number[]>_.head([1, 2, 3], 2);
result = <number[]>_.head([1, 2, 3], function (num) {
    return num < 3;
});
result = <IFoodOrganic[]>_.head(foodsOrganic, 'organic');
result = <IFoodType[]>_.head(foodsType, { 'type': 'fruit' });

result = <number>_([1, 2, 3]).head();
result = <number[]>_([1, 2, 3]).head(2).value();
result = <number[]>_([1, 2, 3]).head(function (num) {
    return num < 3;
}).value();
result = <IFoodOrganic[]>_(foodsOrganic).head('organic').value();
result = <IFoodType[]>_(foodsType).head({ 'type': 'fruit' }).value();

result = <number>_.take([1, 2, 3]);
result = <number[]>_.take([1, 2, 3], 2);
result = <number[]>_.take([1, 2, 3], (num) => num < 3);
result = <IFoodOrganic[]>_.take(foodsOrganic, 'organic');
result = <IFoodType[]>_.take(foodsType, { 'type': 'fruit' });

result = <number>_([1, 2, 3]).take();
result = <number[]>_([1, 2, 3]).take(2).value();
result = <number[]>_([1, 2, 3]).take(function (num) {
    return num < 3;
}).value();
result = <IFoodOrganic[]>_(foodsOrganic).take('organic').value();
result = <IFoodType[]>_(foodsType).take({ 'type': 'fruit' }).value();

result = <number[]>_.flatten([1, [2], [3, [[4]]]]);
result = <any[]>_.flatten([1, [2], [3, [[4]]]], true);
var result: any
result = <string[]>_.flatten(stoogesQuotes, 'quotes');

result = <_.LoDashArrayWrapper<number>>_([1, [2], [3, [[4]]]]).flatten();
result = <_.LoDashArrayWrapper<number>>_([1, [2], [3, [[4]]]]).flatten(true);
result = <_.LoDashArrayWrapper<string>>_(stoogesQuotes).flatten('quotes');

result = <number>_.indexOf([1, 2, 3, 1, 2, 3], 2);
result = <number>_.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
result = <number>_.indexOf([1, 1, 2, 2, 3, 3], 2, true);

result = <number[]>_.initial([1, 2, 3]);
result = <number[]>_.initial([1, 2, 3], 2);
result = <number[]>_.initial([1, 2, 3], function (num) {
    return num > 1;
});
result = <IFoodOrganic[]>_.initial(foodsOrganic, 'organic');
result = <IFoodType[]>_.initial(foodsType, { 'type': 'vegetable' });

result = <number[]>_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);

result = <number>_.last([1, 2, 3]);
result = <number[]>_.last([1, 2, 3], 2);
result = <number[]>_.last([1, 2, 3], function (num) {
    return num > 1;
});
result = <IFoodOrganic[]>_.last(foodsOrganic, 'organic');
result = <IFoodType[]>_.last(foodsType, { 'type': 'vegetable' });

result = <number>_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
result = <number>_.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);

result = <{ [key: string]: any }>_.zipObject(['moe', 'larry'], [30, 40]);
result = <{ [key: string]: any }>_.object(['moe', 'larry'], [30, 40]);

result = <number[]>_.pull([1, 2, 3, 1, 2, 3], 2, 3);

result = <number[]>_.range(10);
result = <number[]>_.range(1, 11);
result = <number[]>_.range(0, 30, 5);
result = <number[]>_.range(0, -10, -1);
result = <number[]>_.range(1, 4, 0);
result = <number[]>_.range(0);

result = <number[]>_.remove([1, 2, 3, 4, 5, 6], function (num: number) { return num % 2 == 0; });
result = <IFoodOrganic[]>_.remove(foodsOrganic, 'organic');
result = <IFoodType[]>_.remove(foodsType, { 'type': 'vegetable' });

result = <number>_.sortedIndex([20, 30, 50], 40);
result = <number>_.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
var sortedIndexDict: { wordToNumber: { [idx: string]: number } } = {
    'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
};
result = <number>_.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function (word: string) {
    return sortedIndexDict.wordToNumber[word];
});
result = <number>_.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function (word: string) {
    return this.wordToNumber[word];
}, sortedIndexDict);

result = <number[]>_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);

result = <number[]>_.uniq([1, 2, 1, 3, 1]);
result = <number[]>_.uniq([1, 1, 2, 2, 3], true);
result = <string[]>_.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function (letter) {
    return letter.toLowerCase();
});
result = <number[]>_.uniq([1, 2.5, 3, 1.5, 2, 3.5], function (num) { return this.floor(num); }, Math);
result = <{ x: number; }[]>_.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');

result = <number[]>_.unique([1, 2, 1, 3, 1]);
result = <number[]>_.unique([1, 1, 2, 2, 3], true);
result = <string[]>_.unique(['A', 'b', 'C', 'a', 'B', 'c'], function (letter) {
    return letter.toLowerCase();
});
result = <number[]>_.unique([1, 2.5, 3, 1.5, 2, 3.5], function (num) { return this.floor(num); }, Math);
result = <{ x: number; }[]>_.unique([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');

result = <number[]>_([1, 2, 1, 3, 1]).uniq().value();
result = <number[]>_([1, 1, 2, 2, 3]).uniq(true).value();
result = <string[]>_(['A', 'b', 'C', 'a', 'B', 'c']).uniq(function (letter) {
    return letter.toLowerCase();
}).value();
result = <number[]>_([1, 2.5, 3, 1.5, 2, 3.5]).uniq(function (num) { return this.floor(num); }, Math).value();
result = <{ x: number; }[]>_([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }]).uniq('x').value();

result = <number[]>_([1, 2, 1, 3, 1]).unique().value();
result = <number[]>_([1, 1, 2, 2, 3]).unique(true).value();
result = <string[]>_(['A', 'b', 'C', 'a', 'B', 'c']).unique(function (letter) {
    return letter.toLowerCase();
}).value();
result = <number[]>_([1, 2.5, 3, 1.5, 2, 3.5]).unique(function (num) { return this.floor(num); }, Math).value();
result = <{ x: number; }[]>_([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }]).unique('x').value();

result = <number[]>_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);

result = <any[][]>_.zip(['moe', 'larry'], [30, 40], [true, false]);
result = <any[][]>_.unzip(['moe', 'larry'], [30, 40], [true, false]);

// /* *************
//  * Collections *
//  ************* */

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

result = <_.Dictionary<number>>_.countBy([4.3, 6.1, 6.4], function (num) { return Math.floor(num); });
result = <_.Dictionary<number>>_.countBy([4.3, 6.1, 6.4], function (num) { return this.floor(num); }, Math);
result = <_.Dictionary<number>>_.countBy(['one', 'two', 'three'], 'length');

result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_([4.3, 6.1, 6.4]).countBy(function (num) { return Math.floor(num); });
result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_([4.3, 6.1, 6.4]).countBy(function (num) { return this.floor(num); }, Math);
result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_(['one', 'two', 'three']).countBy('length');

result = <boolean>_.every([true, 1, null, 'yes'], Boolean);
result = <boolean>_.every(stoogesAges, 'age');
result = <boolean>_.every(stoogesAges, { 'age': 50 });

result = <boolean>_.all([true, 1, null, 'yes'], Boolean);
result = <boolean>_.all(stoogesAges, 'age');
result = <boolean>_.all(stoogesAges, { 'age': 50 });

result = <number[]>_.filter([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; });
result = <IFoodCombined[]>_.filter(foodsCombined, 'organic');
result = <IFoodCombined[]>_.filter(foodsCombined, { 'type': 'fruit' });

result = <number[]>_([1, 2, 3, 4, 5, 6]).filter(function (num) { return num % 2 == 0; }).value();
result = <IFoodCombined[]>_(foodsCombined).filter('organic').value();
result = <IFoodCombined[]>_(foodsCombined).filter({ 'type': 'fruit' }).value();

result = <number[]>_.select([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; });
result = <IFoodCombined[]>_.select(foodsCombined, 'organic');
result = <IFoodCombined[]>_.select(foodsCombined, { 'type': 'fruit' });

result = <number[]>_([1, 2, 3, 4, 5, 6]).select(function (num) { return num % 2 == 0; }).value();
result = <IFoodCombined[]>_(foodsCombined).select('organic').value();
result = <IFoodCombined[]>_(foodsCombined).select({ 'type': 'fruit' }).value();

result = <number>_.find([1, 2, 3, 4], function (num) {
    return num % 2 == 0;
});
result = <IFoodCombined>_.find(foodsCombined, { 'type': 'vegetable' });
result = <IFoodCombined>_.find(foodsCombined, 'organic');

result = <number>_.detect([1, 2, 3, 4], function (num) {
    return num % 2 == 0;
});
result = <IFoodCombined>_.detect(foodsCombined, { 'type': 'vegetable' });
result = <IFoodCombined>_.detect(foodsCombined, 'organic');

result = <number>_.findWhere([1, 2, 3, 4], function (num) {
    return num % 2 == 0;
});
result = <IFoodCombined>_.findWhere(foodsCombined, { 'type': 'vegetable' });
result = <IFoodCombined>_.findWhere(foodsCombined, 'organic');

result = <number>_.findLast([1, 2, 3, 4], function (num) {
    return num % 2 == 0;
});
result = <IFoodCombined>_.findLast(foodsCombined, { 'type': 'vegetable' });
result = <IFoodCombined>_.findLast(foodsCombined, 'organic');

result = <number[]>_.forEach([1, 2, 3], function (num) { console.log(num); });
result = <_.Dictionary<number>>_.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function (num) { console.log(num); });
result = <IFoodType>_.forEach<IFoodType, string>({ name: 'apple', type: 'fruit' }, function (value, key) { console.log(value, key) });

result = <number[]>_.each([1, 2, 3], function (num) { console.log(num); });
result = <_.Dictionary<number>>_.each({ 'one': 1, 'two': 2, 'three': 3 }, function (num) { console.log(num); });
result = <IFoodType>_.each<IFoodType, string>({ name: 'apple', type: 'fruit' }, function (value, key) { console.log(value, key) });

result = <_.LoDashArrayWrapper<number>>_([1, 2, 3]).forEach(function (num) { console.log(num); });
result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_(<{ [index: string]: number; }>{ 'one': 1, 'two': 2, 'three': 3 }).forEach(function (num) { console.log(num); });

result = <_.LoDashArrayWrapper<number>>_([1, 2, 3]).each(function (num) { console.log(num); });
result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_(<{ [index: string]: number; }>{ 'one': 1, 'two': 2, 'three': 3 }).each(function (num) { console.log(num); });

result = <number[]>_.forEachRight([1, 2, 3], function (num) { console.log(num); });
result = <_.Dictionary<number>>_.forEachRight({ 'one': 1, 'two': 2, 'three': 3 }, function (num) { console.log(num); });

result = <number[]>_.eachRight([1, 2, 3], function (num) { console.log(num); });
result = <_.Dictionary<number>>_.eachRight({ 'one': 1, 'two': 2, 'three': 3 }, function (num) { console.log(num); });

result = <_.LoDashArrayWrapper<number>>_([1, 2, 3]).forEachRight(function (num) { console.log(num); });
result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_(<{ [index: string]: number; }>{ 'one': 1, 'two': 2, 'three': 3 }).forEachRight(function (num) { console.log(num); });

result = <_.LoDashArrayWrapper<number>>_([1, 2, 3]).eachRight(function (num) { console.log(num); });
result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_(<{ [index: string]: number; }>{ 'one': 1, 'two': 2, 'three': 3 }).eachRight(function (num) { console.log(num); });

result = <_.Dictionary<number[]>>_.groupBy([4.2, 6.1, 6.4], function (num) { return Math.floor(num); });
result = <_.Dictionary<number[]>>_.groupBy([4.2, 6.1, 6.4], function (num) { return this.floor(num); }, Math);
result = <_.Dictionary<string[]>>_.groupBy(['one', 'two', 'three'], 'length');

result = <_.LoDashObjectWrapper<_.Dictionary<number[]>>>_([4.2, 6.1, 6.4]).groupBy(function (num) { return Math.floor(num); });
result = <_.LoDashObjectWrapper<_.Dictionary<number[]>>>_([4.2, 6.1, 6.4]).groupBy(function (num) { return this.floor(num); }, Math);
result = <_.LoDashObjectWrapper<_.Dictionary<string[]>>>_(['one', 'two', 'three']).groupBy('length');

result = <_.Dictionary<IKey>>_.indexBy(keys, 'dir');
result = <_.Dictionary<IKey>>_.indexBy(keys, function (key) { return String.fromCharCode(key.code); });
result = <_.Dictionary<IKey>>_.indexBy(keys, function (key) { this.fromCharCode(key.code); }, String);

result = <number[][]>_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
result = <string[][]>_.invoke([123, 456], String.prototype.split, '');

result = <number[]>_.map([1, 2, 3], function (num) { return num * 3; });
result = <number[]>_.map({ 'one': 1, 'two': 2, 'three': 3 }, function (num) { return num * 3; });
result = <IStoogesAge[]>_.map(stoogesAges, 'name');

result = <number[]>_([1, 2, 3]).map(function (num) { return num * 3; }).value();
result = <number[]>_({ 'one': 1, 'two': 2, 'three': 3 }).map(function (num: number) { return num * 3; }).value();
result = <IStoogesAge[]>_(stoogesAges).map('name').value();

result = <number[]>_.collect([1, 2, 3], function (num) { return num * 3; });
result = <number[]>_.collect({ 'one': 1, 'two': 2, 'three': 3 }, function (num) { return num * 3; });
result = <IStoogesAge[]>_.collect(stoogesAges, 'name');

result = <number[]>_([1, 2, 3]).collect(function (num) { return num * 3; }).value();
result = <number[]>_({ 'one': 1, 'two': 2, 'three': 3 }).collect(function (num: number) { return num * 3; }).value();
result = <IStoogesAge[]>_(stoogesAges).collect('name').value();

result = <number>_.max([4, 2, 8, 6]);
result = <IStoogesAge>_.max(stoogesAges, function (stooge) { return stooge.age; });
result = <IStoogesAge>_.max(stoogesAges, 'age');

result = <number>_.min([4, 2, 8, 6]);
result = <IStoogesAge>_.min(stoogesAges, function (stooge) { return stooge.age; });
result = <IStoogesAge>_.min(stoogesAges, 'age');

result = <string[]>_.pluck(stoogesAges, 'name');
result = <string[]>_(stoogesAges).pluck('name').value();

interface ABC {
    [index: string]: number;
    a: number;
    b: number;
    c: number;
}

result = <number>_.reduce<number, number>([1, 2, 3], function (sum: number, num: number) {
    return sum + num;
});
result = <ABC>_.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function (r: ABC, num: number, key: string) {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_.foldl([1, 2, 3], function (sum: number, num: number) {
    return sum + num;
});
result = <ABC>_.foldl({ 'a': 1, 'b': 2, 'c': 3 }, function (r: ABC, num: number, key: string) {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_.inject([1, 2, 3], function (sum: number, num: number) {
    return sum + num;
});
result = <ABC>_.inject({ 'a': 1, 'b': 2, 'c': 3 }, function (r: ABC, num: number, key: string) {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_([1, 2, 3]).reduce<number>(function (sum: number, num: number) {
    return sum + num;
});
result = <ABC>_({ 'a': 1, 'b': 2, 'c': 3 }).reduce<number, ABC>(function (r: ABC, num: number, key: string) {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_([1, 2, 3]).foldl<number>(function (sum: number, num: number) {
    return sum + num;
});
result = <ABC>_({ 'a': 1, 'b': 2, 'c': 3 }).foldl<number, ABC>(function (r: ABC, num: number, key: string) {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_([1, 2, 3]).inject<number>(function (sum: number, num: number) {
    return sum + num;
});
result = <ABC>_({ 'a': 1, 'b': 2, 'c': 3 }).inject<number, ABC>(function (r: ABC, num: number, key: string) {
    r[key] = num * 3;
    return r;
}, {});

result = <number[]>_.reduceRight([[0, 1], [2, 3], [4, 5]], function (a: number[], b: number[]) { return a.concat(b); }, <number[]>[]);
result = <number[]>_.foldr([[0, 1], [2, 3], [4, 5]], function (a: number[], b: number[]) { return a.concat(b); }, <number[]>[]);

result = <number[]>_.reject([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; });
result = <IFoodCombined[]>_.reject(foodsCombined, 'organic');
result = <IFoodCombined[]>_.reject(foodsCombined, { 'type': 'fruit' });

result = <number[]>_([1, 2, 3, 4, 5, 6]).reject(function (num) { return num % 2 == 0; }).value();
result = <IFoodCombined[]>_(foodsCombined).reject('organic').value();
result = <IFoodCombined[]>_(foodsCombined).reject({ 'type': 'fruit' }).value();

result = <number>_.sample([1, 2, 3, 4]);
result = <number[]>_.sample([1, 2, 3, 4], 2);

result = <number[]>_.shuffle([1, 2, 3, 4, 5, 6]);

result = <number>_.size([1, 2]);
result = <number>_.size({ 'one': 1, 'two': 2, 'three': 3 });
result = <number>_.size('curly');

result = <boolean>_.some([null, 0, 'yes', false], Boolean);
result = <boolean>_.some(foodsCombined, 'organic');
result = <boolean>_.some(foodsCombined, { 'type': 'meat' });
result = <boolean>_.some(foodsOrganic[0]);

result = <boolean>_.any([null, 0, 'yes', false], Boolean);
result = <boolean>_.any(foodsCombined, 'organic');
result = <boolean>_.any(foodsCombined, { 'type': 'meat' });
result = <boolean>_.any(foodsOrganic[0]);

result = <number[]>_.sortBy([1, 2, 3], function (num) { return Math.sin(num); });
result = <number[]>_.sortBy([1, 2, 3], function (num) { return this.sin(num); }, Math);
result = <string[]>_.sortBy(['banana', 'strawberry', 'apple'], 'length');

result = <number[]>_([1, 2, 3]).sortBy(function (num) { return Math.sin(num); }).value();
result = <number[]>_([1, 2, 3]).sortBy(function (num) { return this.sin(num); }, Math).value();
result = <string[]>_(['banana', 'strawberry', 'apple']).sortBy('length').value();

(function (a: number, b: number, c: number, d: number) { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);

result = <IStoogesCombined[]>_.where(stoogesCombined, { 'age': 40 });
result = <IStoogesCombined[]>_.where(stoogesCombined, { 'quotes': ['Poifect!'] });

result = <IStoogesCombined[]>_(stoogesCombined).where({ 'age': 40 }).value();
result = <IStoogesCombined[]>_(stoogesCombined).where({ 'quotes': ['Poifect!'] }).value();

/*************
 * Functions *
 *************/
var saves = ['profile', 'settings'];
var asyncSave = (obj: any) => obj.done();
var done: Function;

done = _.after(saves.length, function () {
    console.log('Done saving!');
});

_.forEach(saves, function (type) {
    asyncSave({ 'type': type, 'complete': done });
});

done = _(saves.length).after(function () {
    console.log('Done saving!');
}).value();

_.forEach(saves, function (type) {
    asyncSave({ 'type': type, 'complete': done });
});

var funcBind = function (greeting: string) { return greeting + ' ' + this.name };
var funcBind2: () => any = _.bind(funcBind, { 'name': 'moe' }, 'hi');
funcBind2();

var funcBind3: () => any = _(funcBind).bind({ 'name': 'moe' }, 'hi').value();
funcBind3();

var view = {
    'label': 'docs',
    'onClick': function () { console.log('clicked ' + this.label); }
};

view = _.bindAll(view);
jQuery('#docs').on('click', view.onClick);

view = _(view).bindAll().value();
jQuery('#docs').on('click', view.onClick);

var objectBindKey = {
    'name': 'moe',
    'greet': function (greeting: string) {
        return greeting + ' ' + this.name;
    }
};

var funcBindKey: Function = _.bindKey(objectBindKey, 'greet', 'hi');
funcBindKey();

objectBindKey.greet = function (greeting) {
    return greeting + ', ' + this.name + '!';
};

funcBindKey();

funcBindKey = _(objectBindKey).bindKey('greet', 'hi').value();
funcBindKey();

var realNameMap: { [index: string]: string; } = {
    'curly': 'jerome'
};

var format = function (name: string) {
    name = realNameMap[name.toLowerCase()] || name;
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

var greet = function (formatted: string) {
    return 'Hiya ' + formatted + '!';
};

result = <Function>_.compose(greet, format);
result = <_.LoDashObjectWrapper<Function>>_(greet).compose(format);

var createCallbackObj: { [index: string]: string; } = { name: 'Joe' };
result = <() => any>_.createCallback('name');
result = <() => boolean>_.createCallback(createCallbackObj);
result = <_.LoDashObjectWrapper<() => any>>_('name').createCallback();
result = <_.LoDashObjectWrapper<() => boolean>>_(createCallbackObj).createCallback();

result = <Function>_.curry(function (a: any, b: any, c: any) {
    console.log(a + b + c);
});

result = <_.LoDashObjectWrapper<Function>>_(function (a, b, c) {
    console.log(a + b + c);
}).curry();

declare var source: any;
result = <Function>_.debounce(function () { }, 150);

jQuery('#postbox').on('click', <Function>_.debounce(function () { }, 300, {
    'leading': true,
    'trailing': false
}));

source.addEventListener('message', <Function>_.debounce(function () { }, 250, {
    'maxWait': 1000
}), false);

result = <_.LoDashObjectWrapper<Function>>_(function () { }).debounce(150);

jQuery('#postbox').on('click', <_.LoDashObjectWrapper<Function>>_(function () { }).debounce(300, {
    'leading': true,
    'trailing': false
}));

source.addEventListener('message', <_.LoDashObjectWrapper<Function>>_(function () { }).debounce(250, {
    'maxWait': 1000
}), false);

var returnedDebounce = _.throttle(function (a) { return a * 5; }, 5);
returnedThrottled(4);

result = <number>_.defer(function () { console.log('deferred'); });
result = <_.LoDashWrapper<number>>_(function () { console.log('deferred'); }).defer();

var log = _.bind(console.log, console);
result = <number>_.delay(log, 1000, 'logged later');
result = <_.LoDashWrapper<number>>_(log).delay(1000, 'logged later');

var fibonacci = <Function>_.memoize(function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

var data: { [index: string]: { name: string; age: number; } } = {
    'moe': { 'name': 'moe', 'age': 40 },
    'curly': { 'name': 'curly', 'age': 60 }
};

var stooge = _.memoize(function (name: string) { return data[name]; }, _.identity);
stooge('curly');

var returnedMemoize = _.throttle(function (a) { return a * 5; }, 5);
returnedMemoize(4);

var initialize = _.once(function () { });
initialize();
initialize();''
var returnedOnce = _.throttle(function (a) { return a * 5; }, 5);
returnedOnce(4);

var greetPartial = function (greeting: string, name: string) { return greeting + ' ' + name; };
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

jQuery('.interactive').on('click', _.throttle(function () { }, 300000, {
    'trailing': false
}));

var returnedThrottled = _.throttle(function (a) { return a * 5; }, 5);
returnedThrottled(4);

var helloWrap = function (name: string) { return 'hello ' + name; };
var helloWrap2 = _.wrap(helloWrap, function (func) {
    return 'before, ' + func('moe') + ', after';
});
helloWrap2();

/**********
* Objects *
***********/
interface NameAge {
    name: string;
    age: number;
}
result = <NameAge>_.assign({ 'name': 'moe' }, { 'age': 40 });
result = <NameAge>_.assign({ 'name': 'moe' }, { 'age': 40 }, function (a, b) {
    return typeof a == 'undefined' ? b : a;
});

result = <_.LoDashObjectWrapper<NameAge>>_({ 'name': 'moe' }).assign({ 'age': 40 });
result = <_.LoDashObjectWrapper<NameAge>>_({ 'name': 'moe' }).assign({ 'age': 40 }, function (a, b) {
    return typeof a == 'undefined' ? b : a;
});

result = <NameAge>_.extend({ 'name': 'moe' }, { 'age': 40 });
result = <NameAge>_.extend({ 'name': 'moe' }, { 'age': 40 }, function (a, b) {
    return typeof a == 'undefined' ? b : a;
});

result = <_.LoDashObjectWrapper<NameAge>>_({ 'name': 'moe' }).extend({ 'age': 40 });
result = <_.LoDashObjectWrapper<NameAge>>_({ 'name': 'moe' }).extend({ 'age': 40 }, function (a, b) {
    return typeof a == 'undefined' ? b : a;
});

result = <IStoogesAge[]>_.clone(stoogesAges);
result = <IStoogesAge[]>_.clone(stoogesAges, true);
result = <any>_.clone(stoogesAges, true, function (value) {
    return _.isElement(value) ? value.cloneNode(false) : undefined;
});

result = <IStoogesAge[]>_.cloneDeep(stoogesAges);
result = <IStoogesAge[]>_.cloneDeep(stoogesAges, function (value) {
    return _.isElement(value) ? value.cloneNode(false) : undefined;
});

interface Food {
    name: string;
    type: string;
}
var foodDefaults = { 'name': 'apple' };
result = <Food>_.defaults(foodDefaults, { 'name': 'banana', 'type': 'fruit' });
result = <_.LoDashObjectWrapper<Food>>_(foodDefaults).defaults({ 'name': 'banana', 'type': 'fruit' });

result = <string>_.findKey({ 'a': 1, 'b': 2, 'c': 3, 'd': 4 }, function (num) {
    return num % 2 == 0;
});

result = <string>_.findLastKey({ 'a': 1, 'b': 2, 'c': 3, 'd': 4 }, function (num) {
    return num % 2 == 1;
});

result = <Dog>_.forIn(new Dog('Dagny'), function (value, key) {
    console.log(key);
});

result = <_.LoDashObjectWrapper<Dog>>_(new Dog('Dagny')).forIn(function (value, key) {
    console.log(key);
});

result = <Dog>_.forInRight(new Dog('Dagny'), function (value, key) {
    console.log(key);
});

result = <_.LoDashObjectWrapper<Dog>>_(new Dog('Dagny')).forInRight(function (value, key) {
    console.log(key);
});

interface ZeroOne {
    0: string;
    1: string;
    one: string;
}

result = <ZeroOne>_.forOwn(<ZeroOne>{ '0': 'zero', '1': 'one', 'one': '2' }, function (num, key) {
    console.log(key);
});

result = <_.LoDashObjectWrapper<ZeroOne>>_({ '0': 'zero', '1': 'one', 'length': 2 }).forOwn(function (num, key) {
    console.log(key);
});

result = <any>_.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function (num, key) {
    console.log(key);
});

result = <_.LoDashObjectWrapper<ZeroOne>>_({ '0': 'zero', '1': 'one', 'length': 2 }).forOwnRight(function (num, key) {
    console.log(key);
});

result = <string[]>_.functions(_);
result = <string[]>_.methods(_);

result = <_.LoDashArrayWrapper<string>>_(_).functions();
result = <_.LoDashArrayWrapper<string>>_(_).methods();

result = <boolean>_.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');

interface FirstSecond {
    first: string;
    second: string;
}
result = <FirstSecond>_.invert({ 'first': 'moe', 'second': 'larry' });

(function (...args: any[]) { return <boolean>_.isArguments(arguments); })(1, 2, 3);

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

result = <boolean>_.isEqual(words, otherWords, function (a, b) {
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

class Stooge {
    constructor(
        public name: string,
        public age: number
        ) { }
}

result = <boolean>_.isPlainObject(new Stooge('moe', 40));
result = <boolean>_.isPlainObject([1, 2, 3]);
result = <boolean>_.isPlainObject({ 'name': 'moe', 'age': 40 });

result = <boolean>_.isRegExp(/moe/);

result = <boolean>_.isString('moe');

result = <boolean>_.isUndefined(void 0);

result = <string[]>_.keys({ 'one': 1, 'two': 2, 'three': 3 });
result = <string[]>_({ 'one': 1, 'two': 2, 'three': 3 }).keys().value();

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

result = <NameAge>_.merge(mergeNames, mergeAges);

var mergeFood = {
    'fruits': ['apple'],
    'vegetables': ['beet']
};

var mergeOtherFood: { [index: string]: string[] } = {
    'fruits': ['banana'],
    'vegetables': ['carrot']
};

interface FruitVeg {
    [index: string]: string[];
    fruits: string[];
    vegetables: string[]
};

result = <FruitVeg[]>_.merge(<FruitVeg>mergeFood, <FruitVeg>mergeOtherFood, function (a: any, b: any) {
    return _.isArray(a) ? a.concat(b) : undefined;
});

interface HasName {
    name: string;
}
result = <HasName>_.omit({ 'name': 'moe', 'age': 40 }, 'age');
result = <HasName>_.omit({ 'name': 'moe', 'age': 40 }, ['age']);
result = <HasName>_.omit({ 'name': 'moe', 'age': 40 }, function (value) {
    return typeof value == 'number';
});
result = <HasName>_({ 'name': 'moe', 'age': 40 }).omit('age').value();
result = <HasName>_({ 'name': 'moe', 'age': 40 }).omit(['age']).value();
result = <HasName>_({ 'name': 'moe', 'age': 40 }).omit(function (value) {
    return typeof value == 'number';
}).value();

result = <any[][]>_.pairs({ 'moe': 30, 'larry': 40 });
result = <any[][]>_({ 'moe': 30, 'larry': 40 }).pairs().value();

result = <HasName>_.pick({ 'name': 'moe', '_userid': 'moe1' }, 'name');
result = <HasName>_.pick({ 'name': 'moe', '_userid': 'moe1' }, ['name']);
result = <HasName>_.pick({ 'name': 'moe', '_userid': 'moe1' }, function (value, key) {
    return key.charAt(0) != '_';
});

result = <number[]>_.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (r: number[], num: number) {
    num *= num;
    if (num % 2) {
        return r.push(num) < 3;
    }
});
// → [1, 9, 25]

result = <{ a: number; b: number; c: number; }>_.transform(<{ [index: string]: number; }>{ 'a': 1, 'b': 2, 'c': 3 }, function (r: any, num: number, key: string) {
    r[key] = num * 3;
});

result = <number[]>_.values({ 'one': 1, 'two': 2, 'three': 3 });

/**********
* Utilities *
***********/

result = <string>_.escape('Moe, Larry & Curly');

result = <{ name: string }>_.identity({ 'name': 'moe' });

_.mixin({
    'capitalize': function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
});

var lodash = <typeof _>_.noConflict();

result = <number>_.parseInt('08');

result = <number>_.random(0, 5);
result = <number>_.random(5);
result = <number>_.random(5, true);
result = <number>_.random(1.2, 5.2);
result = <number>_.random(0, 5, true);

var object = {
    'cheese': 'crumpets',
    'stuff': function () {
        return 'nonsense';
    }
};

result = <string>_.result(object, 'cheese');
result = <string>_.result(object, 'stuff');

var tempObject = {};
result = <typeof _>_.runInContext(tempObject);

result = <_.TemplateExecutor>_.template('hello <%= name %>');
result = <string>_.template('<b><%- value %></b>', { 'value': '<script>' });

var listTemplate = '<% _.forEach(people, function(name) { %><li><%- name %></li><% }); %>';
result = <string>_.template(listTemplate, { 'people': ['moe', 'larry'] });
result = <string>_.template('hello ${ name }', { 'name': 'curly' });
result = <string>_.template('<% print("hello " + name); %>!', { 'name': 'larry' });

var listTemplate = '<% $.each(people, function(name) { %><li><%- name %></li><% }); %>';
result = <string>_.template(listTemplate, { 'people': ['moe', 'larry'] }, { 'imports': { '$': jQuery } });
result = <_.TemplateExecutor>_.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });

result = <_.TemplateExecutor>_.template('hi <%= data.name %>!', null, { 'variable': 'data' });
result = <string>(<_.TemplateExecutor>result).source;

class Mage {
    public castSpell(n: number) {
        return n;
    }

    public cast(n: number) {
        return n;
    }
}

var mage = new Mage();
result = _.times(3, <() => number>_.partial(_.random, 1, 6));
result = _.times(3, function (n: number) { mage.castSpell(n); });
result = _.times(3, function (n: number) { this.cast(n); }, mage);

result = <string>_.unescape('Moe, Larry &amp; Curly');

result = <string>_.uniqueId('contact_');
result = <string>_.uniqueId();

/**********
* Utilities *
***********/

result = <string>_.VERSION;
result = <_.Support>_.support;
result = <_.TemplateSettings>_.templateSettings;
