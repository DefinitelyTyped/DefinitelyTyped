/// <reference path="lodash.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var foodsOrganic = [
    { name: 'banana', organic: true },
    { name: 'beet', organic: false },
];
var foodsType = [
    { name: 'apple', type: 'fruit' },
    { name: 'banana', type: 'fruit' },
    { name: 'beet', type: 'vegetable' }
];
var foodsCombined = [
    { 'name': 'apple', 'organic': false, 'type': 'fruit' },
    { 'name': 'carrot', 'organic': true, 'type': 'vegetable' }
];
var stoogesQuotes = [
    { 'name': 'curly', 'quotes': ['Oh, a wise guy, eh?', 'Poifect!'] },
    { 'name': 'moe', 'quotes': ['Spread out!', 'You knucklehead!'] }
];
var stoogesAges = [
    { 'name': 'moe', 'age': 40 },
    { 'name': 'larry', 'age': 50 }
];
var stoogesAgesDict = {
    first: { 'name': 'moe', 'age': 40 },
    second: { 'name': 'larry', 'age': 50 }
};
var stoogesCombined = [
    { 'name': 'curly', 'age': 30, 'quotes': ['Oh, a wise guy, eh?', 'Poifect!'] },
    { 'name': 'moe', 'age': 40, 'quotes': ['Spread out!', 'You knucklehead!'] }
];
var keys = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
];
var Dog = (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.bark = function () {
        console.log('Woof, woof!');
    };
    return Dog;
})();
var result;
var any;
// _.MapCache
var testMapCache;
result = testMapCache.delete;
result = testMapCache.get;
result = testMapCache.has;
result = testMapCache.set;
// _
var TestWrapper;
(function (TestWrapper) {
    {
        var result_1;
        result_1 = _('');
    }
    {
        var result_2;
        result_2 = _(42);
    }
    {
        var result_3;
        result_3 = _(true);
    }
    {
        var result_4;
        result_4 = _(['']);
    }
    {
        var result_5;
        result_5 = _({ a: '' });
    }
})(TestWrapper || (TestWrapper = {}));
//Wrapped array shortcut methods
result = _([1, 2, 3, 4]).join(',');
result = _([1, 2, 3, 4]).pop();
result = _([1, 2, 3, 4]).push(5, 6, 7);
result = _([1, 2, 3, 4]).shift();
result = _([1, 2, 3, 4]).sort(function (a, b) { return 1; });
result = _([1, 2, 3, 4]).splice(1);
result = _([1, 2, 3, 4]).splice(1, 2, 5, 6);
result = _([1, 2, 3, 4]).unshift(5, 6);
/*********
 * Array *
 *********/
// _.chunk
var TestChunk;
(function (TestChunk) {
    var array;
    var list;
    {
        var result_6;
        result_6 = _.chunk(array);
        result_6 = _.chunk(array, 42);
        result_6 = _.chunk(list);
        result_6 = _.chunk(list, 42);
    }
    {
        var result_7;
        result_7 = _(array).chunk();
        result_7 = _(array).chunk(42);
        result_7 = _(list).chunk();
        result_7 = _(list).chunk(42);
    }
    {
        var result_8;
        result_8 = _(array).chain().chunk();
        result_8 = _(array).chain().chunk(42);
        result_8 = _(list).chain().chunk();
        result_8 = _(list).chain().chunk(42);
    }
})(TestChunk || (TestChunk = {}));
// _.compact
var TestCompact;
(function (TestCompact) {
    var array;
    var list;
    {
        var result_9;
        result_9 = _.compact();
        result_9 = _.compact(array);
        result_9 = _.compact(list);
    }
    {
        var result_10;
        result_10 = _(array).compact();
        result_10 = _(list).compact();
    }
    {
        var result_11;
        result_11 = _(array).chain().compact();
        result_11 = _(list).chain().compact();
    }
})(TestCompact || (TestCompact = {}));
// _.difference
var TestDifference;
(function (TestDifference) {
    var array;
    var list;
    {
        var result_12;
        result_12 = _.difference(array);
        result_12 = _.difference(array, array);
        result_12 = _.difference(array, list, array);
        result_12 = _.difference(array, array, list, array);
        result_12 = _.difference(list);
        result_12 = _.difference(list, list);
        result_12 = _.difference(list, array, list);
        result_12 = _.difference(list, list, array, list);
    }
    {
        var result_13;
        result_13 = _(array).difference();
        result_13 = _(array).difference(array);
        result_13 = _(array).difference(list, array);
        result_13 = _(array).difference(array, list, array);
        result_13 = _(list).difference();
        result_13 = _(list).difference(list);
        result_13 = _(list).difference(array, list);
        result_13 = _(list).difference(list, array, list);
    }
    {
        var result_14;
        result_14 = _(array).chain().difference();
        result_14 = _(array).chain().difference(array);
        result_14 = _(array).chain().difference(list, array);
        result_14 = _(array).chain().difference(array, list, array);
        result_14 = _(list).chain().difference();
        result_14 = _(list).chain().difference(list);
        result_14 = _(list).chain().difference(array, list);
        result_14 = _(list).chain().difference(list, array, list);
    }
})(TestDifference || (TestDifference = {}));
// _.drop
{
    var array;
    var list;
    {
        var result_15;
        result_15 = _.drop(array);
        result_15 = _.drop(array, 42);
        result_15 = _.drop(list);
        result_15 = _.drop(list, 42);
    }
    {
        var result_16;
        result_16 = _(array).drop();
        result_16 = _(array).drop(42);
        result_16 = _(list).drop();
        result_16 = _(list).drop(42);
    }
    {
        var result_17;
        result_17 = _(array).chain().drop();
        result_17 = _(array).chain().drop(42);
        result_17 = _(list).chain().drop();
        result_17 = _(list).chain().drop(42);
    }
}
// _.dropRight
var TestDropRight;
(function (TestDropRight) {
    var array;
    var list;
    {
        var result_18;
        result_18 = _.dropRight(array);
        result_18 = _.dropRight(array, 42);
        result_18 = _.dropRight(list);
        result_18 = _.dropRight(list, 42);
    }
    {
        var result_19;
        result_19 = _(array).dropRight();
        result_19 = _(array).dropRight(42);
        result_19 = _(list).dropRight();
        result_19 = _(list).dropRight(42);
    }
    {
        var result_20;
        result_20 = _(array).chain().dropRight();
        result_20 = _(array).chain().dropRight(42);
        result_20 = _(list).chain().dropRight();
        result_20 = _(list).chain().dropRight(42);
    }
})(TestDropRight || (TestDropRight = {}));
// _.dropRightWhile
var TestDropRightWhile;
(function (TestDropRightWhile) {
    var array;
    var list;
    var predicateFn;
    {
        var result_21;
        result_21 = _.dropRightWhile(array);
        result_21 = _.dropRightWhile(array, predicateFn);
        result_21 = _.dropRightWhile(array, predicateFn, any);
        result_21 = _.dropRightWhile(array, '');
        result_21 = _.dropRightWhile(array, '', any);
        result_21 = _.dropRightWhile(array, { a: 42 });
        result_21 = _.dropRightWhile(list);
        result_21 = _.dropRightWhile(list, predicateFn);
        result_21 = _.dropRightWhile(list, predicateFn, any);
        result_21 = _.dropRightWhile(list, '');
        result_21 = _.dropRightWhile(list, '', any);
        result_21 = _.dropRightWhile(list, { a: 42 });
    }
    {
        var result_22;
        result_22 = _(array).dropRightWhile();
        result_22 = _(array).dropRightWhile(predicateFn);
        result_22 = _(array).dropRightWhile(predicateFn, any);
        result_22 = _(array).dropRightWhile('');
        result_22 = _(array).dropRightWhile('', any);
        result_22 = _(array).dropRightWhile({ a: 42 });
        result_22 = _(list).dropRightWhile();
        result_22 = _(list).dropRightWhile(predicateFn);
        result_22 = _(list).dropRightWhile(predicateFn, any);
        result_22 = _(list).dropRightWhile('');
        result_22 = _(list).dropRightWhile('', any);
        result_22 = _(list).dropRightWhile({ a: 42 });
    }
    {
        var result_23;
        result_23 = _(array).chain().dropRightWhile();
        result_23 = _(array).chain().dropRightWhile(predicateFn);
        result_23 = _(array).chain().dropRightWhile(predicateFn, any);
        result_23 = _(array).chain().dropRightWhile('');
        result_23 = _(array).chain().dropRightWhile('', any);
        result_23 = _(array).chain().dropRightWhile({ a: 42 });
        result_23 = _(list).chain().dropRightWhile();
        result_23 = _(list).chain().dropRightWhile(predicateFn);
        result_23 = _(list).chain().dropRightWhile(predicateFn, any);
        result_23 = _(list).chain().dropRightWhile('');
        result_23 = _(list).chain().dropRightWhile('', any);
        result_23 = _(list).chain().dropRightWhile({ a: 42 });
    }
})(TestDropRightWhile || (TestDropRightWhile = {}));
// _.dropWhile
var TestDropWhile;
(function (TestDropWhile) {
    var array;
    var list;
    var predicateFn;
    {
        var result_24;
        result_24 = _.dropWhile(array);
        result_24 = _.dropWhile(array, predicateFn);
        result_24 = _.dropWhile(array, predicateFn, any);
        result_24 = _.dropWhile(array, '');
        result_24 = _.dropWhile(array, '', any);
        result_24 = _.dropWhile(array, { a: 42 });
        result_24 = _.dropWhile(list);
        result_24 = _.dropWhile(list, predicateFn);
        result_24 = _.dropWhile(list, predicateFn, any);
        result_24 = _.dropWhile(list, '');
        result_24 = _.dropWhile(list, '', any);
        result_24 = _.dropWhile(list, { a: 42 });
    }
    {
        var result_25;
        result_25 = _(array).dropWhile();
        result_25 = _(array).dropWhile(predicateFn);
        result_25 = _(array).dropWhile(predicateFn, any);
        result_25 = _(array).dropWhile('');
        result_25 = _(array).dropWhile('', any);
        result_25 = _(array).dropWhile({ a: 42 });
        result_25 = _(list).dropWhile();
        result_25 = _(list).dropWhile(predicateFn);
        result_25 = _(list).dropWhile(predicateFn, any);
        result_25 = _(list).dropWhile('');
        result_25 = _(list).dropWhile('', any);
        result_25 = _(list).dropWhile({ a: 42 });
    }
    {
        var result_26;
        result_26 = _(array).chain().dropWhile();
        result_26 = _(array).chain().dropWhile(predicateFn);
        result_26 = _(array).chain().dropWhile(predicateFn, any);
        result_26 = _(array).chain().dropWhile('');
        result_26 = _(array).chain().dropWhile('', any);
        result_26 = _(array).chain().dropWhile({ a: 42 });
        result_26 = _(list).chain().dropWhile();
        result_26 = _(list).chain().dropWhile(predicateFn);
        result_26 = _(list).chain().dropWhile(predicateFn, any);
        result_26 = _(list).chain().dropWhile('');
        result_26 = _(list).chain().dropWhile('', any);
        result_26 = _(list).chain().dropWhile({ a: 42 });
    }
})(TestDropWhile || (TestDropWhile = {}));
// _.fill
var TestFill;
(function (TestFill) {
    var array;
    var list;
    {
        var result_27;
        result_27 = _.fill(array, 42);
        result_27 = _.fill(array, 42, 0);
        result_27 = _.fill(array, 42, 0, 10);
    }
    {
        var result_28;
        result_28 = _.fill(list, 42);
        result_28 = _.fill(list, 42, 0);
        result_28 = _.fill(list, 42, 0, 10);
    }
    {
        var result_29;
        result_29 = _(array).fill(42);
        result_29 = _(array).fill(42, 0);
        result_29 = _(array).fill(42, 0, 10);
    }
    {
        var result_30;
        result_30 = _(list).fill(42);
        result_30 = _(list).fill(42, 0);
        result_30 = _(list).fill(42, 0, 10);
    }
    {
        var result_31;
        result_31 = _(array).chain().fill(42);
        result_31 = _(array).chain().fill(42, 0);
        result_31 = _(array).chain().fill(42, 0, 10);
    }
    {
        var result_32;
        result_32 = _(list).chain().fill(42);
        result_32 = _(list).chain().fill(42, 0);
        result_32 = _(list).chain().fill(42, 0, 10);
    }
})(TestFill || (TestFill = {}));
// _.findIndex
var TestFindIndex;
(function (TestFindIndex) {
    var array;
    var list;
    var predicateFn;
    {
        var result_33;
        result_33 = _.findIndex(array);
        result_33 = _.findIndex(array, predicateFn);
        result_33 = _.findIndex(array, predicateFn, any);
        result_33 = _.findIndex(array, '');
        result_33 = _.findIndex(array, '', any);
        result_33 = _.findIndex(array, { a: 42 });
        result_33 = _.findIndex(list);
        result_33 = _.findIndex(list, predicateFn);
        result_33 = _.findIndex(list, predicateFn, any);
        result_33 = _.findIndex(list, '');
        result_33 = _.findIndex(list, '', any);
        result_33 = _.findIndex(list, { a: 42 });
        result_33 = _(array).findIndex();
        result_33 = _(array).findIndex(predicateFn);
        result_33 = _(array).findIndex(predicateFn, any);
        result_33 = _(array).findIndex('');
        result_33 = _(array).findIndex('', any);
        result_33 = _(array).findIndex({ a: 42 });
        result_33 = _(list).findIndex();
        result_33 = _(list).findIndex(predicateFn);
        result_33 = _(list).findIndex(predicateFn, any);
        result_33 = _(list).findIndex('');
        result_33 = _(list).findIndex('', any);
        result_33 = _(list).findIndex({ a: 42 });
    }
    {
        var result_34;
        result_34 = _(array).chain().findIndex();
        result_34 = _(array).chain().findIndex(predicateFn);
        result_34 = _(array).chain().findIndex(predicateFn, any);
        result_34 = _(array).chain().findIndex('');
        result_34 = _(array).chain().findIndex('', any);
        result_34 = _(array).chain().findIndex({ a: 42 });
        result_34 = _(list).chain().findIndex();
        result_34 = _(list).chain().findIndex(predicateFn);
        result_34 = _(list).chain().findIndex(predicateFn, any);
        result_34 = _(list).chain().findIndex('');
        result_34 = _(list).chain().findIndex('', any);
        result_34 = _(list).chain().findIndex({ a: 42 });
    }
})(TestFindIndex || (TestFindIndex = {}));
// _.findLastIndex
var TestFindLastIndex;
(function (TestFindLastIndex) {
    var array;
    var list;
    var predicateFn;
    {
        var result_35;
        result_35 = _.findLastIndex(array);
        result_35 = _.findLastIndex(array, predicateFn);
        result_35 = _.findLastIndex(array, predicateFn, any);
        result_35 = _.findLastIndex(array, '');
        result_35 = _.findLastIndex(array, '', any);
        result_35 = _.findLastIndex(array, { a: 42 });
        result_35 = _.findLastIndex(list);
        result_35 = _.findLastIndex(list, predicateFn);
        result_35 = _.findLastIndex(list, predicateFn, any);
        result_35 = _.findLastIndex(list, '');
        result_35 = _.findLastIndex(list, '', any);
        result_35 = _.findLastIndex(list, { a: 42 });
        result_35 = _(array).findLastIndex();
        result_35 = _(array).findLastIndex(predicateFn);
        result_35 = _(array).findLastIndex(predicateFn, any);
        result_35 = _(array).findLastIndex('');
        result_35 = _(array).findLastIndex('', any);
        result_35 = _(array).findLastIndex({ a: 42 });
        result_35 = _(list).findLastIndex();
        result_35 = _(list).findLastIndex(predicateFn);
        result_35 = _(list).findLastIndex(predicateFn, any);
        result_35 = _(list).findLastIndex('');
        result_35 = _(list).findLastIndex('', any);
        result_35 = _(list).findLastIndex({ a: 42 });
    }
    {
        var result_36;
        result_36 = _(array).chain().findLastIndex();
        result_36 = _(array).chain().findLastIndex(predicateFn);
        result_36 = _(array).chain().findLastIndex(predicateFn, any);
        result_36 = _(array).chain().findLastIndex('');
        result_36 = _(array).chain().findLastIndex('', any);
        result_36 = _(array).chain().findLastIndex({ a: 42 });
        result_36 = _(list).chain().findLastIndex();
        result_36 = _(list).chain().findLastIndex(predicateFn);
        result_36 = _(list).chain().findLastIndex(predicateFn, any);
        result_36 = _(list).chain().findLastIndex('');
        result_36 = _(list).chain().findLastIndex('', any);
        result_36 = _(list).chain().findLastIndex({ a: 42 });
    }
})(TestFindLastIndex || (TestFindLastIndex = {}));
// _.first
var TestFirst;
(function (TestFirst) {
    var array;
    var list;
    var result;
    result = _.first(array);
    result = _.first(list);
    result = _(array).first();
    result = _(list).first();
})(TestFirst || (TestFirst = {}));
// _.flatten
var TestFlatten;
(function (TestFlatten) {
    {
        var result_37;
        result_37 = _.flatten('abc');
    }
    {
        var result_38;
        result_38 = _.flatten([1, 2, 3]);
        result_38 = _.flatten([1, [2, 3]]);
        result_38 = _.flatten([1, [2, [3]]], true);
        result_38 = _.flatten([1, [2, [3]], [[4]]], true);
        result_38 = _.flatten({ 0: 1, 1: 2, 2: 3, length: 3 });
        result_38 = _.flatten({ 0: 1, 1: [2, 3], length: 2 });
        result_38 = _.flatten({ 0: 1, 1: [2, [3]], length: 2 }, true);
        result_38 = _.flatten({ 0: 1, 1: [2, [3]], 2: [[4]], length: 3 }, true);
    }
    {
        var result_39;
        result_39 = _.flatten([1, [2, [3]]]);
        result_39 = _.flatten([1, [2, [3]], [[4]]]);
        result_39 = _.flatten({ 0: 1, 1: [2, [3]], length: 2 });
        result_39 = _.flatten({ 0: 1, 1: [2, [3]], 2: [[4]], length: 3 });
    }
    {
        var result_40;
        result_40 = _('abc').flatten();
    }
    {
        var result_41;
        result_41 = _([1, 2, 3]).flatten();
        result_41 = _([1, [2, 3]]).flatten();
        result_41 = _([1, [2, [3]]]).flatten(true);
        result_41 = _([1, [2, [3]], [[4]]]).flatten(true);
        result_41 = _({ 0: 1, 1: 2, 2: 3, length: 3 }).flatten();
        result_41 = _({ 0: 1, 1: [2, 3], length: 2 }).flatten();
        result_41 = _({ 0: 1, 1: [2, [3]], length: 2 }).flatten(true);
        result_41 = _({ 0: 1, 1: [2, [3]], 2: [[4]], length: 3 }).flatten(true);
    }
    {
        var result_42;
        result_42 = _([1, [2, [3]]]).flatten();
        result_42 = _([1, [2, [3]], [[4]]]).flatten();
        result_42 = _({ 0: 1, 1: [2, [3]], length: 2 }).flatten();
        result_42 = _({ 0: 1, 1: [2, [3]], 2: [[4]], length: 3 }).flatten();
    }
    {
        var result_43;
        result_43 = _('abc').chain().flatten();
    }
    {
        var result_44;
        result_44 = _([1, 2, 3]).chain().flatten();
        result_44 = _([1, [2, 3]]).chain().flatten();
        result_44 = _([1, [2, [3]]]).chain().flatten(true);
        result_44 = _([1, [2, [3]], [[4]]]).chain().flatten(true);
        result_44 = _({ 0: 1, 1: 2, 2: 3, length: 3 }).chain().flatten();
        result_44 = _({ 0: 1, 1: [2, 3], length: 2 }).chain().flatten();
        result_44 = _({ 0: 1, 1: [2, [3]], length: 2 }).chain().flatten(true);
        result_44 = _({ 0: 1, 1: [2, [3]], 2: [[4]], length: 3 }).chain().flatten(true);
    }
    {
        var result_45;
        result_45 = _([1, [2, [3]]]).chain().flatten();
        result_45 = _([1, [2, [3]], [[4]]]).chain().flatten();
        result_45 = _({ 0: 1, 1: [2, [3]], length: 2 }).chain().flatten();
        result_45 = _({ 0: 1, 1: [2, [3]], 2: [[4]], length: 3 }).chain().flatten();
    }
})(TestFlatten || (TestFlatten = {}));
// _.flattenDeep
var TestFlattenDeep;
(function (TestFlattenDeep) {
    {
        var result_46;
        result_46 = _.flattenDeep('abc');
    }
    {
        var result_47;
        result_47 = _.flattenDeep([1, 2, 3]);
        result_47 = _.flattenDeep([1, [2, 3]]);
        result_47 = _.flattenDeep([1, [2, [3]]]);
        result_47 = _.flattenDeep([1, [2, [3]], [[4]]]);
        result_47 = _.flattenDeep({ 0: 1, 1: 2, 2: 3, length: 3 });
        result_47 = _.flattenDeep({ 0: 1, 1: [2, 3], length: 2 });
        result_47 = _.flattenDeep({ 0: 1, 1: [2, [3]], length: 2 });
        result_47 = _.flattenDeep({ 0: 1, 1: [2, [3]], 2: [[4]], length: 3 });
    }
    {
        var result_48;
        result_48 = _('abc').flattenDeep();
    }
    {
        var result_49;
        result_49 = _([1, 2, 3]).flattenDeep();
        result_49 = _([1, [2, 3]]).flattenDeep();
        result_49 = _([1, [2, [3]]]).flattenDeep();
        result_49 = _([1, [2, [3]], [[4]]]).flattenDeep();
        result_49 = _({ 0: 1, 1: 2, 2: 3, length: 3 }).flattenDeep();
        result_49 = _({ 0: 1, 1: [2, 3], length: 2 }).flattenDeep();
        result_49 = _({ 0: 1, 1: [2, [3]], length: 2 }).flattenDeep();
        result_49 = _({ 0: 1, 1: [2, [3]], 2: [[4]], length: 3 }).flattenDeep();
    }
    {
        var result_50;
        result_50 = _([1, [2, [3]]]).flattenDeep();
        result_50 = _([1, [2, [3]], [[4]]]).flattenDeep();
        result_50 = _({ 0: 1, 1: [2, [3]], length: 2 }).flattenDeep();
        result_50 = _({ 0: 1, 1: [2, [3]], 2: [[4]], length: 3 }).flattenDeep();
    }
    {
        var result_51;
        result_51 = _('abc').chain().flattenDeep();
    }
    {
        var result_52;
        result_52 = _([1, 2, 3]).chain().flattenDeep();
        result_52 = _([1, [2, 3]]).chain().flattenDeep();
        result_52 = _([1, [2, [3]]]).chain().flattenDeep();
        result_52 = _([1, [2, [3]], [[4]]]).chain().flattenDeep();
        result_52 = _({ 0: 1, 1: 2, 2: 3, length: 3 }).chain().flattenDeep();
        result_52 = _({ 0: 1, 1: [2, 3], length: 2 }).chain().flattenDeep();
        result_52 = _({ 0: 1, 1: [2, [3]], length: 2 }).chain().flattenDeep();
        result_52 = _({ 0: 1, 1: [2, [3]], 2: [[4]], length: 3 }).chain().flattenDeep();
    }
    {
        var result_53;
        result_53 = _([1, [2, [3]]]).chain().flattenDeep();
        result_53 = _([1, [2, [3]], [[4]]]).chain().flattenDeep();
        result_53 = _({ 0: 1, 1: [2, [3]], length: 2 }).chain().flattenDeep();
        result_53 = _({ 0: 1, 1: [2, [3]], 2: [[4]], length: 3 }).chain().flattenDeep();
    }
})(TestFlattenDeep || (TestFlattenDeep = {}));
// _.head
var TestHead;
(function (TestHead) {
    var array;
    var list;
    var result;
    result = _.head(array);
    result = _.head(list);
    result = _(array).head();
    result = _(list).head();
})(TestHead || (TestHead = {}));
// _.indexOf
var TestIndexOf;
(function (TestIndexOf) {
    var array;
    var list;
    var value;
    {
        var result_54;
        result_54 = _.indexOf(array, value);
        result_54 = _.indexOf(array, value, true);
        result_54 = _.indexOf(array, value, 42);
        result_54 = _.indexOf(list, value);
        result_54 = _.indexOf(list, value, true);
        result_54 = _.indexOf(list, value, 42);
        result_54 = _(array).indexOf(value);
        result_54 = _(array).indexOf(value, true);
        result_54 = _(array).indexOf(value, 42);
        result_54 = _(list).indexOf(value);
        result_54 = _(list).indexOf(value, true);
        result_54 = _(list).indexOf(value, 42);
    }
    {
        var result_55;
        result_55 = _(array).chain().indexOf(value);
        result_55 = _(array).chain().indexOf(value, true);
        result_55 = _(array).chain().indexOf(value, 42);
        result_55 = _(list).chain().indexOf(value);
        result_55 = _(list).chain().indexOf(value, true);
        result_55 = _(list).chain().indexOf(value, 42);
    }
})(TestIndexOf || (TestIndexOf = {}));
// _.sortedIndexOf
var TestIndexOf;
(function (TestIndexOf) {
    var array;
    var list;
    var value;
    {
        var result_56;
        result_56 = _.sortedIndexOf(array, value);
        result_56 = _.sortedIndexOf(list, value);
        result_56 = _(array).sortedIndexOf(value);
        result_56 = _(list).sortedIndexOf(value);
    }
    {
        var result_57;
        result_57 = _(array).chain().sortedIndexOf(value);
        result_57 = _(list).chain().sortedIndexOf(value);
    }
})(TestIndexOf || (TestIndexOf = {}));
//_.initial
var TestInitial;
(function (TestInitial) {
    var array;
    var list;
    {
        var result_58;
        result_58 = _.initial(array);
        result_58 = _.initial(list);
    }
    {
        var result_59;
        result_59 = _(array).initial();
        result_59 = _(list).initial();
    }
    {
        var result_60;
        result_60 = _(array).chain().initial();
        result_60 = _(list).chain().initial();
    }
})(TestInitial || (TestInitial = {}));
// _.intersection
var TestIntersection;
(function (TestIntersection) {
    var array;
    var list;
    {
        var result_61;
        result_61 = _.intersection(array, list);
        result_61 = _.intersection(list, array, list);
    }
    {
        var result_62;
        result_62 = _(array).intersection(array);
        result_62 = _(array).intersection(list, array);
        result_62 = _(list).intersection(array);
        result_62 = _(list).intersection(list, array);
    }
    {
        var result_63;
        result_63 = _(array).chain().intersection(array);
        result_63 = _(array).chain().intersection(list, array);
        result_63 = _(list).chain().intersection(array);
        result_63 = _(list).chain().intersection(list, array);
    }
})(TestIntersection || (TestIntersection = {}));
// _.last
var TestLast;
(function (TestLast) {
    var array;
    var list;
    {
        var result_64;
        result_64 = _.last(array);
        result_64 = _.last(list);
        result_64 = _(array).last();
        result_64 = _(list).last();
    }
    {
        var result_65;
        result_65 = _(array).chain().last();
    }
    {
        var result_66;
        result_66 = _(list).chain().last();
    }
})(TestLast || (TestLast = {}));
// _.lastIndexOf
var TestLastIndexOf;
(function (TestLastIndexOf) {
    var array;
    var list;
    var value;
    {
        var result_67;
        result_67 = _.lastIndexOf(array, value);
        result_67 = _.lastIndexOf(array, value, true);
        result_67 = _.lastIndexOf(array, value, 42);
        result_67 = _.lastIndexOf(list, value);
        result_67 = _.lastIndexOf(list, value, true);
        result_67 = _.lastIndexOf(list, value, 42);
        result_67 = _(array).lastIndexOf(value);
        result_67 = _(array).lastIndexOf(value, true);
        result_67 = _(array).lastIndexOf(value, 42);
        result_67 = _(list).lastIndexOf(value);
        result_67 = _(list).lastIndexOf(value, true);
        result_67 = _(list).lastIndexOf(value, 42);
    }
    {
        var result_68;
        result_68 = _(array).chain().lastIndexOf(value);
        result_68 = _(array).chain().lastIndexOf(value, true);
        result_68 = _(array).chain().lastIndexOf(value, 42);
        result_68 = _(list).chain().lastIndexOf(value);
        result_68 = _(list).chain().lastIndexOf(value, true);
        result_68 = _(list).chain().lastIndexOf(value, 42);
    }
})(TestLastIndexOf || (TestLastIndexOf = {}));
// _.pull
var TestPull;
(function (TestPull) {
    var array;
    var list;
    var value;
    {
        var result_69;
        result_69 = _.pull(array);
        result_69 = _.pull(array, value);
        result_69 = _.pull(array, value, value);
        result_69 = _.pull(array, value, value, value);
    }
    {
        var result_70;
        result_70 = _.pull(list);
        result_70 = _.pull(list, value);
        result_70 = _.pull(list, value, value);
        result_70 = _.pull(list, value, value, value);
    }
    {
        var result_71;
        result_71 = _(array).pull();
        result_71 = _(array).pull(value);
        result_71 = _(array).pull(value, value);
        result_71 = _(array).pull(value, value, value);
    }
    {
        var result_72;
        result_72 = _(list).pull();
        result_72 = _(list).pull(value);
        result_72 = _(list).pull(value, value);
        result_72 = _(list).pull(value, value, value);
    }
    {
        var result_73;
        result_73 = _(array).chain().pull();
        result_73 = _(array).chain().pull(value);
        result_73 = _(array).chain().pull(value, value);
        result_73 = _(array).chain().pull(value, value, value);
    }
    {
        var result_74;
        result_74 = _(list).chain().pull();
        result_74 = _(list).chain().pull(value);
        result_74 = _(list).chain().pull(value, value);
        result_74 = _(list).chain().pull(value, value, value);
    }
})(TestPull || (TestPull = {}));
// _.pullAt
var TestPullAt;
(function (TestPullAt) {
    var array;
    var list;
    {
        var result_75;
        result_75 = _.pullAt(array);
        result_75 = _.pullAt(array, 1);
        result_75 = _.pullAt(array, [2, 3], 1);
        result_75 = _.pullAt(array, 4, [2, 3], 1);
        result_75 = _.pullAt(list);
        result_75 = _.pullAt(list, 1);
        result_75 = _.pullAt(list, [2, 3], 1);
        result_75 = _.pullAt(list, 4, [2, 3], 1);
    }
    {
        var result_76;
        result_76 = _(array).pullAt();
        result_76 = _(array).pullAt(1);
        result_76 = _(array).pullAt([2, 3], 1);
        result_76 = _(array).pullAt(4, [2, 3], 1);
        result_76 = _(list).pullAt();
        result_76 = _(list).pullAt(1);
        result_76 = _(list).pullAt([2, 3], 1);
        result_76 = _(list).pullAt(4, [2, 3], 1);
    }
    {
        var result_77;
        result_77 = _(array).chain().pullAt();
        result_77 = _(array).chain().pullAt(1);
        result_77 = _(array).chain().pullAt([2, 3], 1);
        result_77 = _(array).chain().pullAt(4, [2, 3], 1);
        result_77 = _(list).chain().pullAt();
        result_77 = _(list).chain().pullAt(1);
        result_77 = _(list).chain().pullAt([2, 3], 1);
        result_77 = _(list).chain().pullAt(4, [2, 3], 1);
    }
})(TestPullAt || (TestPullAt = {}));
// _.remove
var TestRemove;
(function (TestRemove) {
    var array;
    var list;
    var predicateFn;
    {
        var result_78;
        result_78 = _.remove(array);
        result_78 = _.remove(array, predicateFn);
        result_78 = _.remove(array, predicateFn, any);
        result_78 = _.remove(array, '');
        result_78 = _.remove(array, '', any);
        result_78 = _.remove(array, { a: 42 });
        result_78 = _.remove(list);
        result_78 = _.remove(list, predicateFn);
        result_78 = _.remove(list, predicateFn, any);
        result_78 = _.remove(list, '');
        result_78 = _.remove(list, '', any);
        result_78 = _.remove(list, { a: 42 });
    }
    {
        var result_79;
        result_79 = _(array).remove();
        result_79 = _(array).remove(predicateFn);
        result_79 = _(array).remove(predicateFn, any);
        result_79 = _(array).remove('');
        result_79 = _(array).remove('', any);
        result_79 = _(array).remove({ a: 42 });
        result_79 = _(list).remove();
        result_79 = _(list).remove(predicateFn);
        result_79 = _(list).remove(predicateFn, any);
        result_79 = _(list).remove('');
        result_79 = _(list).remove('', any);
        result_79 = _(list).remove({ a: 42 });
    }
    {
        var result_80;
        result_80 = _(array).chain().remove();
        result_80 = _(array).chain().remove(predicateFn);
        result_80 = _(array).chain().remove(predicateFn, any);
        result_80 = _(array).chain().remove('');
        result_80 = _(array).chain().remove('', any);
        result_80 = _(array).chain().remove({ a: 42 });
        result_80 = _(list).chain().remove();
        result_80 = _(list).chain().remove(predicateFn);
        result_80 = _(list).chain().remove(predicateFn, any);
        result_80 = _(list).chain().remove('');
        result_80 = _(list).chain().remove('', any);
        result_80 = _(list).chain().remove({ a: 42 });
    }
})(TestRemove || (TestRemove = {}));
// _.tail
var TestTail;
(function (TestTail) {
    var array;
    var list;
    {
        var result_81;
        result_81 = _.tail(array);
        result_81 = _.tail(list);
    }
    {
        var result_82;
        result_82 = _(array).tail();
        result_82 = _(list).tail();
    }
    {
        var result_83;
        result_83 = _(array).chain().tail();
        result_83 = _(list).chain().tail();
    }
})(TestTail || (TestTail = {}));
// _.slice
var TestSlice;
(function (TestSlice) {
    var array;
    {
        var result_84;
        result_84 = _.slice(array);
        result_84 = _.slice(array, 42);
        result_84 = _.slice(array, 42, 42);
    }
    {
        var result_85;
        result_85 = _(array).slice();
        result_85 = _(array).slice(42);
        result_85 = _(array).slice(42, 42);
    }
    {
        var result_86;
        result_86 = _(array).chain().slice();
        result_86 = _(array).chain().slice(42);
        result_86 = _(array).chain().slice(42, 42);
    }
})(TestSlice || (TestSlice = {}));
// _.sortedIndex
var TestSortedIndex;
(function (TestSortedIndex) {
    var array;
    var list;
    var value;
    var stringIterator;
    var arrayIterator;
    var listIterator;
    {
        var result_87;
        result_87 = _.sortedIndex('', '');
        result_87 = _.sortedIndex(array, value);
        result_87 = _.sortedIndex(list, value);
        result_87 = _('').sortedIndex('');
        result_87 = _(array).sortedIndex(value);
        result_87 = _(list).sortedIndex(value);
    }
    {
        var result_88;
        result_88 = _('').chain().sortedIndex('');
        result_88 = _(array).chain().sortedIndex(value);
        result_88 = _(list).chain().sortedIndex(value);
    }
})(TestSortedIndex || (TestSortedIndex = {}));
// _.sortedIndexBy
var TestSortedIndexBy;
(function (TestSortedIndexBy) {
    var array;
    var list;
    var value;
    var stringIterator;
    var arrayIterator;
    var listIterator;
    {
        var result_89;
        result_89 = _.sortedIndexBy('', '', stringIterator);
        result_89 = _.sortedIndexBy('', '', stringIterator);
        result_89 = _.sortedIndexBy(array, value, arrayIterator);
        result_89 = _.sortedIndexBy(array, value, '');
        result_89 = _.sortedIndexBy(array, value, { a: 42 });
        result_89 = _.sortedIndexBy(array, value, arrayIterator);
        result_89 = _.sortedIndexBy(array, value, { a: 42 });
        result_89 = _.sortedIndexBy(list, value, listIterator);
        result_89 = _.sortedIndexBy(list, value, '');
        result_89 = _.sortedIndexBy(list, value, { a: 42 });
        result_89 = _.sortedIndexBy(list, value, listIterator);
        result_89 = _.sortedIndexBy(list, value, { a: 42 });
        result_89 = _('').sortedIndexBy('', stringIterator);
        result_89 = _(array).sortedIndexBy(value, arrayIterator);
        result_89 = _(array).sortedIndexBy(value, '');
        result_89 = _(array).sortedIndexBy(value, { a: 42 });
        result_89 = _(list).sortedIndexBy(value, listIterator);
        result_89 = _(list).sortedIndexBy(value, '');
        result_89 = _(list).sortedIndexBy(value, { a: 42 });
        result_89 = _(list).sortedIndexBy(value, listIterator);
        result_89 = _(list).sortedIndexBy(value, { a: 42 });
    }
    {
        var result_90;
        result_90 = _('').chain().sortedIndexBy('', stringIterator);
        result_90 = _(array).chain().sortedIndexBy(value, arrayIterator);
        result_90 = _(array).chain().sortedIndexBy(value, '');
        result_90 = _(array).chain().sortedIndexBy(value, { a: 42 });
        result_90 = _(list).chain().sortedIndexBy(value, listIterator);
        result_90 = _(list).chain().sortedIndexBy(value, '');
        result_90 = _(list).chain().sortedIndexBy(value, { a: 42 });
        result_90 = _(list).chain().sortedIndexBy(value, listIterator);
        result_90 = _(list).chain().sortedIndexBy(value, { a: 42 });
    }
})(TestSortedIndexBy || (TestSortedIndexBy = {}));
// _.sortedLastIndex
var TestSortedLastIndex;
(function (TestSortedLastIndex) {
    var array;
    var list;
    var value;
    var stringIterator;
    var arrayIterator;
    var listIterator;
    {
        var result_91;
        result_91 = _.sortedLastIndex('', '');
        result_91 = _.sortedLastIndex(array, value);
        result_91 = _.sortedLastIndex(list, value);
        result_91 = _('').sortedLastIndex('');
        result_91 = _(array).sortedLastIndex(value);
        result_91 = _(list).sortedLastIndex(value);
    }
    {
        var result_92;
        result_92 = _('').chain().sortedLastIndex('');
        result_92 = _(array).chain().sortedLastIndex(value);
        result_92 = _(list).chain().sortedLastIndex(value);
    }
})(TestSortedLastIndex || (TestSortedLastIndex = {}));
// _.sortedLastIndexBy
var TestSortedLastIndexBy;
(function (TestSortedLastIndexBy) {
    var array;
    var list;
    var value;
    var stringIterator;
    var arrayIterator;
    var listIterator;
    {
        var result_93;
        result_93 = _.sortedLastIndexBy('', '', stringIterator);
        result_93 = _.sortedLastIndexBy('', '', stringIterator);
        result_93 = _.sortedLastIndexBy(array, value, arrayIterator);
        result_93 = _.sortedLastIndexBy(array, value, '');
        result_93 = _.sortedLastIndexBy(array, value, { a: 42 });
        result_93 = _.sortedLastIndexBy(array, value, arrayIterator);
        result_93 = _.sortedLastIndexBy(array, value, { a: 42 });
        result_93 = _.sortedLastIndexBy(list, value, listIterator);
        result_93 = _.sortedLastIndexBy(list, value, '');
        result_93 = _.sortedLastIndexBy(list, value, { a: 42 });
        result_93 = _.sortedLastIndexBy(list, value, listIterator);
        result_93 = _.sortedLastIndexBy(list, value, { a: 42 });
        result_93 = _('').sortedLastIndexBy('', stringIterator);
        result_93 = _(array).sortedLastIndexBy(value, arrayIterator);
        result_93 = _(array).sortedLastIndexBy(value, '');
        result_93 = _(array).sortedLastIndexBy(value, { a: 42 });
        result_93 = _(list).sortedLastIndexBy(value, listIterator);
        result_93 = _(list).sortedLastIndexBy(value, '');
        result_93 = _(list).sortedLastIndexBy(value, { a: 42 });
        result_93 = _(list).sortedLastIndexBy(value, listIterator);
        result_93 = _(list).sortedLastIndexBy(value, { a: 42 });
    }
    {
        var result_94;
        result_94 = _('').chain().sortedLastIndexBy('', stringIterator);
        result_94 = _(array).chain().sortedLastIndexBy(value, arrayIterator);
        result_94 = _(array).chain().sortedLastIndexBy(value, '');
        result_94 = _(array).chain().sortedLastIndexBy(value, { a: 42 });
        result_94 = _(list).chain().sortedLastIndexBy(value, listIterator);
        result_94 = _(list).chain().sortedLastIndexBy(value, '');
        result_94 = _(list).chain().sortedLastIndexBy(value, { a: 42 });
        result_94 = _(list).chain().sortedLastIndexBy(value, listIterator);
        result_94 = _(list).chain().sortedLastIndexBy(value, { a: 42 });
    }
})(TestSortedLastIndexBy || (TestSortedLastIndexBy = {}));
// _.tail
var TestTail;
(function (TestTail) {
    var array;
    var list;
    {
        var result_95;
        result_95 = _.tail(array);
        result_95 = _.tail(list);
    }
    {
        var result_96;
        result_96 = _(array).tail();
        result_96 = _(list).tail();
    }
    {
        var result_97;
        result_97 = _(array).chain().tail();
        result_97 = _(list).chain().tail();
    }
})(TestTail || (TestTail = {}));
// _.take
var TestTake;
(function (TestTake) {
    var array;
    var list;
    {
        var result_98;
        result_98 = _.take(array);
        result_98 = _.take(array, 42);
        result_98 = _.take(list);
        result_98 = _.take(list, 42);
    }
    {
        var result_99;
        result_99 = _(array).take();
        result_99 = _(array).take(42);
        result_99 = _(list).take();
        result_99 = _(list).take(42);
    }
    {
        var result_100;
        result_100 = _(array).chain().take();
        result_100 = _(array).chain().take(42);
        result_100 = _(list).chain().take();
        result_100 = _(list).chain().take(42);
    }
})(TestTake || (TestTake = {}));
// _.takeRight
var TestTakeRight;
(function (TestTakeRight) {
    var array;
    var list;
    {
        var result_101;
        result_101 = _.takeRight(array);
        result_101 = _.takeRight(array, 42);
        result_101 = _.takeRight(list);
        result_101 = _.takeRight(list, 42);
    }
    {
        var result_102;
        result_102 = _(array).takeRight();
        result_102 = _(array).takeRight(42);
        result_102 = _(list).takeRight();
        result_102 = _(list).takeRight(42);
    }
    {
        var result_103;
        result_103 = _(array).chain().takeRight();
        result_103 = _(array).chain().takeRight(42);
        result_103 = _(list).chain().takeRight();
        result_103 = _(list).chain().takeRight(42);
    }
})(TestTakeRight || (TestTakeRight = {}));
// _.takeRightWhile
var TestTakeRightWhile;
(function (TestTakeRightWhile) {
    var array;
    var list;
    var predicateFn;
    {
        var result_104;
        result_104 = _.takeRightWhile(array);
        result_104 = _.takeRightWhile(array, predicateFn);
        result_104 = _.takeRightWhile(array, predicateFn, any);
        result_104 = _.takeRightWhile(array, '');
        result_104 = _.takeRightWhile(array, '', any);
        result_104 = _.takeRightWhile(array, { a: 42 });
        result_104 = _.takeRightWhile(list);
        result_104 = _.takeRightWhile(list, predicateFn);
        result_104 = _.takeRightWhile(list, predicateFn, any);
        result_104 = _.takeRightWhile(list, '');
        result_104 = _.takeRightWhile(list, '', any);
        result_104 = _.takeRightWhile(list, { a: 42 });
    }
    {
        var result_105;
        result_105 = _(array).takeRightWhile();
        result_105 = _(array).takeRightWhile(predicateFn);
        result_105 = _(array).takeRightWhile(predicateFn, any);
        result_105 = _(array).takeRightWhile('');
        result_105 = _(array).takeRightWhile('', any);
        result_105 = _(array).takeRightWhile({ a: 42 });
        result_105 = _(list).takeRightWhile();
        result_105 = _(list).takeRightWhile(predicateFn);
        result_105 = _(list).takeRightWhile(predicateFn, any);
        result_105 = _(list).takeRightWhile('');
        result_105 = _(list).takeRightWhile('', any);
        result_105 = _(list).takeRightWhile({ a: 42 });
    }
    {
        var result_106;
        result_106 = _(array).chain().takeRightWhile();
        result_106 = _(array).chain().takeRightWhile(predicateFn);
        result_106 = _(array).chain().takeRightWhile(predicateFn, any);
        result_106 = _(array).chain().takeRightWhile('');
        result_106 = _(array).chain().takeRightWhile('', any);
        result_106 = _(array).chain().takeRightWhile({ a: 42 });
        result_106 = _(list).chain().takeRightWhile();
        result_106 = _(list).chain().takeRightWhile(predicateFn);
        result_106 = _(list).chain().takeRightWhile(predicateFn, any);
        result_106 = _(list).chain().takeRightWhile('');
        result_106 = _(list).chain().takeRightWhile('', any);
        result_106 = _(list).chain().takeRightWhile({ a: 42 });
    }
})(TestTakeRightWhile || (TestTakeRightWhile = {}));
// _.takeWhile
var TestTakeWhile;
(function (TestTakeWhile) {
    var array;
    var list;
    var predicateFn;
    {
        var result_107;
        result_107 = _.takeWhile(array);
        result_107 = _.takeWhile(array, predicateFn);
        result_107 = _.takeWhile(array, predicateFn, any);
        result_107 = _.takeWhile(array, '');
        result_107 = _.takeWhile(array, '', any);
        result_107 = _.takeWhile(array, { a: 42 });
        result_107 = _.takeWhile(list);
        result_107 = _.takeWhile(list, predicateFn);
        result_107 = _.takeWhile(list, predicateFn, any);
        result_107 = _.takeWhile(list, '');
        result_107 = _.takeWhile(list, '', any);
        result_107 = _.takeWhile(list, { a: 42 });
    }
    {
        var result_108;
        result_108 = _(array).takeWhile();
        result_108 = _(array).takeWhile(predicateFn);
        result_108 = _(array).takeWhile(predicateFn, any);
        result_108 = _(array).takeWhile('');
        result_108 = _(array).takeWhile('', any);
        result_108 = _(array).takeWhile({ a: 42 });
        result_108 = _(list).takeWhile();
        result_108 = _(list).takeWhile(predicateFn);
        result_108 = _(list).takeWhile(predicateFn, any);
        result_108 = _(list).takeWhile('');
        result_108 = _(list).takeWhile('', any);
        result_108 = _(list).takeWhile({ a: 42 });
    }
    {
        var result_109;
        result_109 = _(array).chain().takeWhile();
        result_109 = _(array).chain().takeWhile(predicateFn);
        result_109 = _(array).chain().takeWhile(predicateFn, any);
        result_109 = _(array).chain().takeWhile('');
        result_109 = _(array).chain().takeWhile('', any);
        result_109 = _(array).chain().takeWhile({ a: 42 });
        result_109 = _(list).chain().takeWhile();
        result_109 = _(list).chain().takeWhile(predicateFn);
        result_109 = _(list).chain().takeWhile(predicateFn, any);
        result_109 = _(list).chain().takeWhile('');
        result_109 = _(list).chain().takeWhile('', any);
        result_109 = _(list).chain().takeWhile({ a: 42 });
    }
})(TestTakeWhile || (TestTakeWhile = {}));
// _.union
var TestUnion;
(function (TestUnion) {
    var array;
    var list;
    {
        var result_110;
        result_110 = _.union();
        result_110 = _.union(array);
        result_110 = _.union(array, list);
        result_110 = _.union(array, list, array);
        result_110 = _.union(list);
        result_110 = _.union(list, array);
        result_110 = _.union(list, array, list);
    }
    {
        var result_111;
        result_111 = _(array).union();
        result_111 = _(array).union(list);
        result_111 = _(array).union(list, array);
        result_111 = _(array).union();
        result_111 = _(array).union(list);
        result_111 = _(array).union(list, array);
        result_111 = _(list).union();
        result_111 = _(list).union(array);
        result_111 = _(list).union(array, list);
    }
    {
        var result_112;
        result_112 = _(array).chain().union();
        result_112 = _(array).chain().union(list);
        result_112 = _(array).chain().union(list, array);
        result_112 = _(array).chain().union();
        result_112 = _(array).chain().union(list);
        result_112 = _(array).chain().union(list, array);
        result_112 = _(list).chain().union();
        result_112 = _(list).chain().union(array);
        result_112 = _(list).chain().union(array, list);
    }
})(TestUnion || (TestUnion = {}));
// _.uniq
var TestUniq;
(function (TestUniq) {
    var array;
    var list;
    var stringIterator;
    var listIterator;
    {
        var result_113;
        result_113 = _.uniq('abc');
    }
    {
        var result_114;
        result_114 = _.uniq(array);
        result_114 = _.uniq(list);
    }
    {
        var result_115;
        result_115 = _('abc').uniq();
    }
    {
        var result_116;
        result_116 = _(array).uniq();
        result_116 = _(list).uniq();
    }
    {
        var result_117;
        result_117 = _('abc').chain().uniq();
    }
    {
        var result_118;
        result_118 = _(array).chain().uniq();
        result_118 = _(list).chain().uniq();
    }
})(TestUniq || (TestUniq = {}));
// _.uniqBy
var TestUniqBy;
(function (TestUniqBy) {
    var array;
    var list;
    var stringIterator;
    var listIterator;
    {
        var result_119;
        result_119 = _.uniqBy('abc', stringIterator);
        result_119 = _.uniqBy('abc', stringIterator);
    }
    {
        var result_120;
        result_120 = _.uniqBy(array, listIterator);
        result_120 = _.uniqBy(array, listIterator);
        result_120 = _.uniqBy(array, 'a');
        result_120 = _.uniqBy(array, { a: 42 });
        result_120 = _.uniqBy(array, { a: 42 });
        result_120 = _.uniqBy(list, listIterator);
        result_120 = _.uniqBy(list, listIterator);
        result_120 = _.uniqBy(list, 'a');
        result_120 = _.uniqBy(list, { a: 42 });
        result_120 = _.uniqBy(list, { a: 42 });
    }
    {
        var result_121;
        result_121 = _('abc').uniqBy(stringIterator);
    }
    {
        var result_122;
        result_122 = _(array).uniqBy(listIterator);
        result_122 = _(array).uniqBy('a');
        result_122 = _(array).uniqBy({ a: 42 });
        result_122 = _(list).uniqBy(listIterator);
        result_122 = _(list).uniqBy(listIterator);
        result_122 = _(list).uniqBy('a');
        result_122 = _(list).uniqBy({ a: 42 });
        result_122 = _(list).uniqBy({ a: 42 });
    }
    {
        var result_123;
        result_123 = _('abc').chain().uniqBy(stringIterator);
    }
    {
        var result_124;
        result_124 = _(array).chain().uniqBy(listIterator);
        result_124 = _(array).chain().uniqBy('a');
        result_124 = _(array).chain().uniqBy({ a: 42 });
        result_124 = _(list).chain().uniqBy(listIterator);
        result_124 = _(list).chain().uniqBy(listIterator);
        result_124 = _(list).chain().uniqBy('a');
        result_124 = _(list).chain().uniqBy({ a: 42 });
        result_124 = _(list).chain().uniqBy({ a: 42 });
    }
})(TestUniqBy || (TestUniqBy = {}));
// _.sortedUniq
var TestSortedUniq;
(function (TestSortedUniq) {
    var array;
    var list;
    var stringIterator;
    var listIterator;
    {
        var result_125;
        result_125 = _.sortedUniq('abc');
    }
    {
        var result_126;
        result_126 = _.sortedUniq(array);
        result_126 = _.sortedUniq(list);
    }
    {
        var result_127;
        result_127 = _('abc').sortedUniq();
    }
    {
        var result_128;
        result_128 = _(array).sortedUniq();
        result_128 = _(list).sortedUniq();
    }
    {
        var result_129;
        result_129 = _('abc').chain().sortedUniq();
    }
    {
        var result_130;
        result_130 = _(array).chain().sortedUniq();
        result_130 = _(list).chain().sortedUniq();
    }
})(TestSortedUniq || (TestSortedUniq = {}));
// _.sortedUniqBy
var TestSortedUniqBy;
(function (TestSortedUniqBy) {
    var array;
    var list;
    var stringIterator;
    var listIterator;
    {
        var result_131;
        result_131 = _.sortedUniqBy('abc', stringIterator);
        result_131 = _.sortedUniqBy('abc', stringIterator);
    }
    {
        var result_132;
        result_132 = _.sortedUniqBy(array, listIterator);
        result_132 = _.sortedUniqBy(array, listIterator);
        result_132 = _.sortedUniqBy(array, 'a');
        result_132 = _.sortedUniqBy(array, { a: 42 });
        result_132 = _.sortedUniqBy(array, { a: 42 });
        result_132 = _.sortedUniqBy(list, listIterator);
        result_132 = _.sortedUniqBy(list, listIterator);
        result_132 = _.sortedUniqBy(list, 'a');
        result_132 = _.sortedUniqBy(list, { a: 42 });
        result_132 = _.sortedUniqBy(list, { a: 42 });
    }
    {
        var result_133;
        result_133 = _('abc').sortedUniqBy(stringIterator);
    }
    {
        var result_134;
        result_134 = _(array).sortedUniqBy(listIterator);
        result_134 = _(array).sortedUniqBy('a');
        result_134 = _(array).sortedUniqBy({ a: 42 });
        result_134 = _(list).sortedUniqBy(listIterator);
        result_134 = _(list).sortedUniqBy(listIterator);
        result_134 = _(list).sortedUniqBy('a');
        result_134 = _(list).sortedUniqBy({ a: 42 });
        result_134 = _(list).sortedUniqBy({ a: 42 });
    }
    {
        var result_135;
        result_135 = _('abc').chain().sortedUniqBy(stringIterator);
    }
    {
        var result_136;
        result_136 = _(array).chain().sortedUniqBy(listIterator);
        result_136 = _(array).chain().sortedUniqBy('a');
        result_136 = _(array).chain().sortedUniqBy({ a: 42 });
        result_136 = _(list).chain().sortedUniqBy(listIterator);
        result_136 = _(list).chain().sortedUniqBy(listIterator);
        result_136 = _(list).chain().sortedUniqBy('a');
        result_136 = _(list).chain().sortedUniqBy({ a: 42 });
        result_136 = _(list).chain().sortedUniqBy({ a: 42 });
    }
})(TestSortedUniqBy || (TestSortedUniqBy = {}));
// _.upzip
var TestUnzip;
(function (TestUnzip) {
    var array = [['a', 'b'], [1, 2], [true, false]];
    var list = {
        0: { 0: 'a', 1: 'b', length: 2 },
        1: { 0: 1, 1: 2, length: 2 },
        2: { 0: true, 1: false, length: 2 },
        length: 3
    };
    {
        var result_137;
        result_137 = _.unzip(array);
        result_137 = _.unzip(list);
    }
    {
        var result_138;
        result_138 = _(array).unzip();
        result_138 = _(list).unzip();
    }
    {
        var result_139;
        result_139 = _(array).chain().unzip();
        result_139 = _(list).chain().unzip();
    }
})(TestUnzip || (TestUnzip = {}));
// _.unzipWith
{
    var testUnzipWithArray;
    var testUnzipWithList;
    var testUnzipWithIterator;
    var result_140;
    result_140 = _.unzipWith(testUnzipWithArray);
    result_140 = _.unzipWith(testUnzipWithArray, testUnzipWithIterator);
    result_140 = _.unzipWith(testUnzipWithArray, testUnzipWithIterator, any);
    result_140 = _.unzipWith(testUnzipWithList);
    result_140 = _.unzipWith(testUnzipWithList, testUnzipWithIterator);
    result_140 = _.unzipWith(testUnzipWithList, testUnzipWithIterator, any);
    result_140 = _(testUnzipWithArray).unzipWith(testUnzipWithIterator).value();
    result_140 = _(testUnzipWithArray).unzipWith(testUnzipWithIterator, any).value();
    result_140 = _(testUnzipWithList).unzipWith(testUnzipWithIterator).value();
    result_140 = _(testUnzipWithList).unzipWith(testUnzipWithIterator, any).value();
}
// _.without
var TestWithout;
(function (TestWithout) {
    var array;
    var list;
    {
        var result_141;
        result_141 = _.without(array);
        result_141 = _.without(array, 1);
        result_141 = _.without(array, 1, 2);
        result_141 = _.without(array, 1, 2, 3);
        result_141 = _.without(list);
        result_141 = _.without(list, 1);
        result_141 = _.without(list, 1, 2);
        result_141 = _.without(list, 1, 2, 3);
    }
    {
        var result_142;
        result_142 = _(array).without();
        result_142 = _(array).without(1);
        result_142 = _(array).without(1, 2);
        result_142 = _(array).without(1, 2, 3);
        result_142 = _(list).without();
        result_142 = _(list).without(1);
        result_142 = _(list).without(1, 2);
        result_142 = _(list).without(1, 2, 3);
    }
    {
        var result_143;
        result_143 = _(array).chain().without();
        result_143 = _(array).chain().without(1);
        result_143 = _(array).chain().without(1, 2);
        result_143 = _(array).chain().without(1, 2, 3);
        result_143 = _(list).chain().without();
        result_143 = _(list).chain().without(1);
        result_143 = _(list).chain().without(1, 2);
        result_143 = _(list).chain().without(1, 2, 3);
    }
})(TestWithout || (TestWithout = {}));
// _.xor
var TestXor;
(function (TestXor) {
    var array;
    var list;
    {
        var result_144;
        result_144 = _.xor();
        result_144 = _.xor(array);
        result_144 = _.xor(array, list);
        result_144 = _.xor(array, list, array);
        result_144 = _.xor(list);
        result_144 = _.xor(list, array);
        result_144 = _.xor(list, array, list);
    }
    {
        var result_145;
        result_145 = _(array).xor();
        result_145 = _(array).xor(list);
        result_145 = _(array).xor(list, array);
        result_145 = _(list).xor();
        result_145 = _(list).xor(array);
        result_145 = _(list).xor(array, list);
    }
    {
        var result_146;
        result_146 = _(array).chain().xor();
        result_146 = _(array).chain().xor(list);
        result_146 = _(array).chain().xor(list, array);
        result_146 = _(list).chain().xor();
        result_146 = _(list).chain().xor(array);
        result_146 = _(list).chain().xor(array, list);
    }
})(TestXor || (TestXor = {}));
// _.zip
var TestZip;
(function (TestZip) {
    var array;
    var list;
    {
        var result_147;
        result_147 = _.zip(array);
        result_147 = _.zip(array, list);
        result_147 = _.zip(array, list, array);
        result_147 = _.zip(list);
        result_147 = _.zip(list, array);
        result_147 = _.zip(list, array, list);
    }
    {
        var result_148;
        result_148 = _(array).zip(list);
        result_148 = _(array).zip(list, array);
        result_148 = _(list).zip(array);
        result_148 = _(list).zip(array, list);
    }
    {
        var result_149;
        result_149 = _(array).chain().zip(list);
        result_149 = _(array).chain().zip(list, array);
        result_149 = _(list).chain().zip(array);
        result_149 = _(list).chain().zip(array, list);
    }
})(TestZip || (TestZip = {}));
// _.zipObject
var TestZipObject;
(function (TestZipObject) {
    var arrayOfKeys;
    var arrayOfValues;
    var arrayOfKeyValuePairs;
    var listOfKeys;
    var listOfValues;
    var listOfKeyValuePairs;
    {
        var result_150;
        result_150 = _.zipObject(arrayOfKeys);
        result_150 = _.zipObject(listOfKeys);
    }
    {
        var result_151;
        result_151 = _.zipObject(arrayOfKeys, arrayOfValues);
        result_151 = _.zipObject(arrayOfKeys, listOfValues);
        result_151 = _.zipObject(listOfKeys, listOfValues);
        result_151 = _.zipObject(listOfKeys, arrayOfValues);
        result_151 = _.zipObject(arrayOfKeys, arrayOfValues);
        result_151 = _.zipObject(arrayOfKeys, listOfValues);
        result_151 = _.zipObject(listOfKeys, listOfValues);
        result_151 = _.zipObject(listOfKeys, arrayOfValues);
        result_151 = _.zipObject(arrayOfKeyValuePairs);
        result_151 = _.zipObject(listOfKeyValuePairs);
    }
    {
        var result_152;
        result_152 = _.zipObject(arrayOfKeys);
        result_152 = _.zipObject(arrayOfKeys, arrayOfValues);
        result_152 = _.zipObject(arrayOfKeys, listOfValues);
        result_152 = _.zipObject(listOfKeys);
        result_152 = _.zipObject(listOfKeys, listOfValues);
        result_152 = _.zipObject(listOfKeys, arrayOfValues);
        result_152 = _.zipObject(arrayOfKeyValuePairs);
        result_152 = _.zipObject(listOfKeyValuePairs);
    }
    {
        var result_153;
        result_153 = _(arrayOfKeys).zipObject();
        result_153 = _(listOfKeys).zipObject();
    }
    {
        var result_154;
        result_154 = _(arrayOfKeys).zipObject(arrayOfValues);
        result_154 = _(arrayOfKeys).zipObject(listOfValues);
        result_154 = _(listOfKeys).zipObject(listOfValues);
        result_154 = _(listOfKeys).zipObject(arrayOfValues);
        result_154 = _(arrayOfKeys).zipObject(arrayOfValues);
        result_154 = _(arrayOfKeys).zipObject(listOfValues);
        result_154 = _(listOfKeys).zipObject(listOfValues);
        result_154 = _(listOfKeys).zipObject(arrayOfValues);
        result_154 = _(listOfKeys).zipObject(arrayOfKeyValuePairs);
        result_154 = _(listOfKeys).zipObject(listOfKeyValuePairs);
    }
    {
        var result_155;
        result_155 = _(arrayOfKeys).zipObject();
        result_155 = _(arrayOfKeys).zipObject(arrayOfValues);
        result_155 = _(arrayOfKeys).zipObject(listOfValues);
        result_155 = _(listOfKeys).zipObject();
        result_155 = _(listOfKeys).zipObject(listOfValues);
        result_155 = _(listOfKeys).zipObject(arrayOfValues);
        result_155 = _(listOfKeys).zipObject(arrayOfKeyValuePairs);
        result_155 = _(listOfKeys).zipObject(listOfKeyValuePairs);
    }
    {
        var result_156;
        result_156 = _(arrayOfKeys).chain().zipObject();
        result_156 = _(listOfKeys).chain().zipObject();
    }
    {
        var result_157;
        result_157 = _(arrayOfKeys).chain().zipObject(arrayOfValues);
        result_157 = _(arrayOfKeys).chain().zipObject(listOfValues);
        result_157 = _(listOfKeys).chain().zipObject(listOfValues);
        result_157 = _(listOfKeys).chain().zipObject(arrayOfValues);
        result_157 = _(arrayOfKeys).chain().zipObject(arrayOfValues);
        result_157 = _(arrayOfKeys).chain().zipObject(listOfValues);
        result_157 = _(listOfKeys).chain().zipObject(listOfValues);
        result_157 = _(listOfKeys).chain().zipObject(arrayOfValues);
        result_157 = _(listOfKeys).chain().zipObject(arrayOfKeyValuePairs);
        result_157 = _(listOfKeys).chain().zipObject(listOfKeyValuePairs);
    }
    {
        var result_158;
        result_158 = _(arrayOfKeys).chain().zipObject();
        result_158 = _(arrayOfKeys).chain().zipObject(arrayOfValues);
        result_158 = _(arrayOfKeys).chain().zipObject(listOfValues);
        result_158 = _(listOfKeys).chain().zipObject();
        result_158 = _(listOfKeys).chain().zipObject(listOfValues);
        result_158 = _(listOfKeys).chain().zipObject(arrayOfValues);
        result_158 = _(listOfKeys).chain().zipObject(arrayOfKeyValuePairs);
        result_158 = _(listOfKeys).chain().zipObject(listOfKeyValuePairs);
    }
})(TestZipObject || (TestZipObject = {}));
var testZipWithFn;
result = _.zipWith([1, 2]);
result = _.zipWith([1, 2], testZipWithFn);
result = _.zipWith([1, 2], testZipWithFn, any);
result = _.zipWith([1, 2], [1, 2], testZipWithFn, any);
result = _.zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], testZipWithFn, any);
result = _([1, 2]).zipWith().value();
result = _([1, 2]).zipWith(testZipWithFn).value();
result = _([1, 2]).zipWith(testZipWithFn, any).value();
result = _([1, 2]).zipWith([1, 2], testZipWithFn, any).value();
result = _([1, 2]).zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], testZipWithFn, any).value();
/*********
 * Chain *
 *********/
// _.chain
var TestChain;
(function (TestChain) {
    {
        var result_159;
        result_159 = _.chain('');
        result_159 = _('').chain();
        result_159 = _.chain('').chain();
        result_159 = _('').chain().chain();
    }
    {
        var result_160;
        result_160 = _.chain(42);
        result_160 = _(42).chain();
    }
    {
        var result_161;
        result_161 = _.chain(true);
        result_161 = _(true).chain();
    }
    {
        var result_162;
        result_162 = _.chain(['']);
        result_162 = _(['']).chain();
    }
    {
        var result_163;
        result_163 = _.chain({ a: '' });
        result_163 = _({ a: '' }).chain();
    }
})(TestChain || (TestChain = {}));
// _.tap
var TestTap;
(function (TestTap) {
    {
        var interceptor;
        var result_164;
        _.tap('', interceptor);
        _.tap('', interceptor, any);
    }
    {
        var interceptor;
        var result_165;
        _.tap([''], interceptor);
        _.tap([''], interceptor, any);
    }
    {
        var interceptor;
        var result_166;
        _.tap({ a: '' }, interceptor);
        _.tap({ a: '' }, interceptor, any);
    }
    {
        var interceptor;
        var result_167;
        _.chain('').tap(interceptor, any);
        _.chain('').tap(interceptor, any);
        _('').tap(interceptor);
        _('').tap(interceptor, any);
    }
    {
        var interceptor;
        var result_168;
        _.chain(['']).tap(interceptor);
        _.chain(['']).tap(interceptor, any);
        _(['']).tap(interceptor);
        _(['']).tap(interceptor, any);
    }
    {
        var interceptor;
        var result_169;
        _.chain({ a: '' }).tap(interceptor);
        _.chain({ a: '' }).tap(interceptor, any);
        _({ a: '' }).tap(interceptor);
        _({ a: '' }).tap(interceptor, any);
    }
    {
        var interceptor;
        var result_170;
        _.chain('').tap(interceptor, any);
        _.chain('').tap(interceptor, any);
        _('').chain().tap(interceptor);
        _('').chain().tap(interceptor, any);
    }
    {
        var interceptor;
        var result_171;
        _.chain(['']).tap(interceptor);
        _.chain(['']).tap(interceptor, any);
        _(['']).chain().tap(interceptor);
        _(['']).chain().tap(interceptor, any);
    }
    {
        var interceptor;
        var result_172;
        _.chain({ a: '' }).tap(interceptor);
        _.chain({ a: '' }).tap(interceptor, any);
        _({ a: '' }).chain().tap(interceptor);
        _({ a: '' }).chain().tap(interceptor, any);
    }
})(TestTap || (TestTap = {}));
// _.thru
var TestThru;
(function (TestThru) {
    {
        var interceptor;
        var result_173;
        result_173 = _.thru(1, interceptor);
        result_173 = _.thru(1, interceptor, any);
    }
    {
        var interceptor;
        var result_174;
        result_174 = _(1).thru(interceptor);
        result_174 = _(1).thru(interceptor, any);
    }
    {
        var interceptor;
        var result_175;
        result_175 = _('').thru(interceptor);
        result_175 = _('').thru(interceptor, any);
    }
    {
        var interceptor;
        var result_176;
        result_176 = _(true).thru(interceptor);
        result_176 = _(true).thru(interceptor, any);
    }
    {
        var interceptor;
        var result_177;
        result_177 = _({ a: '' }).thru(interceptor);
        result_177 = _({ a: '' }).thru(interceptor, any);
    }
    {
        var interceptor;
        var result_178;
        result_178 = _([1, 2, 3]).thru(interceptor);
        result_178 = _([1, 2, 3]).thru(interceptor, any);
    }
    {
        var interceptor;
        var result_179;
        result_179 = _(1).chain().thru(interceptor);
        result_179 = _(1).chain().thru(interceptor, any);
    }
    {
        var interceptor;
        var result_180;
        result_180 = _('').chain().thru(interceptor);
        result_180 = _('').chain().thru(interceptor, any);
    }
    {
        var interceptor;
        var result_181;
        result_181 = _(true).chain().thru(interceptor);
        result_181 = _(true).chain().thru(interceptor, any);
    }
    {
        var interceptor;
        var result_182;
        result_182 = _({ a: '' }).chain().thru(interceptor);
        result_182 = _({ a: '' }).chain().thru(interceptor, any);
    }
    {
        var interceptor;
        var result_183;
        result_183 = _([1, 2, 3]).chain().thru(interceptor);
        result_183 = _([1, 2, 3]).chain().thru(interceptor, any);
    }
})(TestThru || (TestThru = {}));
// _.prototype.commit
var TestCommit;
(function (TestCommit) {
    {
        var result_184;
        result_184 = _(42).commit();
    }
    {
        var result_185;
        result_185 = _([]).commit();
    }
    {
        var result_186;
        result_186 = _({}).commit();
    }
    {
        var result_187;
        result_187 = _(42).chain().commit();
    }
    {
        var result_188;
        result_188 = _([]).chain().commit();
    }
    {
        var result_189;
        result_189 = _({}).chain().commit();
    }
})(TestCommit || (TestCommit = {}));
// _.prototype.concat
var TestConcat;
(function (TestConcat) {
    {
        var result_190;
        result_190 = _(1).concat(2);
        result_190 = _(1).concat(2, 3);
        result_190 = _(1).concat(2, 3, 4);
        result_190 = _(1).concat(2);
        result_190 = _(1).concat(2, 3);
        result_190 = _(1).concat(2, 3, 4);
    }
    {
        var result_191;
        result_191 = _(['']).concat(['']);
        result_191 = _(['']).concat([''], ['']);
        result_191 = _(['']).concat([''], [''], ['']);
        result_191 = _(['']).concat(['']);
        result_191 = _(['']).concat([''], ['']);
        result_191 = _(['']).concat([''], [''], ['']);
    }
    {
        var result_192;
        result_192 = _({ a: '' }).concat({ a: '' });
        result_192 = _({ a: '' }).concat({ a: '' }, { a: '' });
        result_192 = _({ a: '' }).concat({ a: '' }, { a: '' }, { a: '' });
        result_192 = _({ a: '' }).concat({ a: '' });
        result_192 = _({ a: '' }).concat({ a: '' }, { a: '' });
        result_192 = _({ a: '' }).concat({ a: '' }, { a: '' }, { a: '' });
    }
    {
        var result_193;
        result_193 = _(1).chain().concat(2);
        result_193 = _(1).chain().concat(2, 3);
        result_193 = _(1).chain().concat(2, 3, 4);
        result_193 = _(1).chain().concat(2);
        result_193 = _(1).chain().concat(2, 3);
        result_193 = _(1).chain().concat(2, 3, 4);
    }
    {
        var result_194;
        result_194 = _(['']).chain().concat(['']);
        result_194 = _(['']).chain().concat([''], ['']);
        result_194 = _(['']).chain().concat([''], [''], ['']);
        result_194 = _(['']).chain().concat(['']);
        result_194 = _(['']).chain().concat([''], ['']);
        result_194 = _(['']).chain().concat([''], [''], ['']);
    }
    {
        var result_195;
        result_195 = _({ a: '' }).chain().concat({ a: '' });
        result_195 = _({ a: '' }).chain().concat({ a: '' }, { a: '' });
        result_195 = _({ a: '' }).chain().concat({ a: '' }, { a: '' }, { a: '' });
        result_195 = _({ a: '' }).chain().concat({ a: '' });
        result_195 = _({ a: '' }).chain().concat({ a: '' }, { a: '' });
        result_195 = _({ a: '' }).chain().concat({ a: '' }, { a: '' }, { a: '' });
    }
})(TestConcat || (TestConcat = {}));
// _.prototype.plant
var TestPlant;
(function (TestPlant) {
    {
        var result_196;
        result_196 = _(any).plant(42);
    }
    {
        var result_197;
        result_197 = _(any).plant('');
    }
    {
        var result_198;
        result_198 = _(any).plant(true);
    }
    {
        var result_199;
        result_199 = _(any).plant([42]);
    }
    {
        var result_200;
        result_200 = _(any).plant([]);
    }
    {
        var result_201;
        result_201 = _(any).plant({});
    }
    {
        var result_202;
        result_202 = _(any).chain().plant(42);
    }
    {
        var result_203;
        result_203 = _(any).chain().plant('');
    }
    {
        var result_204;
        result_204 = _(any).chain().plant(true);
    }
    {
        var result_205;
        result_205 = _(any).chain().plant([42]);
    }
    {
        var result_206;
        result_206 = _(any).chain().plant([]);
    }
    {
        var result_207;
        result_207 = _(any).chain().plant({});
    }
})(TestPlant || (TestPlant = {}));
// _.prototype.reverse
var TestReverse;
(function (TestReverse) {
    {
        var result_208;
        result: _([42]).reverse();
    }
    {
        var result_209;
        result: _([42]).chain().reverse();
    }
})(TestReverse || (TestReverse = {}));
// _.prototype.toJSON
var TestToJSON;
(function (TestToJSON) {
    {
        var result_210;
        result_210 = _('').toJSON();
        result_210 = _('').chain().toJSON();
    }
    {
        var result_211;
        result_211 = _(42).toJSON();
        result_211 = _(42).chain().toJSON();
    }
    {
        var result_212;
        result_212 = _(true).toJSON();
        result_212 = _(true).chain().toJSON();
    }
    {
        var result_213;
        result_213 = _([]).toJSON();
        result_213 = _([]).chain().toJSON();
    }
    {
        var result_214;
        result_214 = _({ a: '' }).toJSON();
        result_214 = _({ a: '' }).chain().toJSON();
    }
})(TestToJSON || (TestToJSON = {}));
// _.prototype.toString
var TestToString;
(function (TestToString) {
    var result;
    result = _('').toString();
    result = _(42).toString();
    result = _(true).toString();
    result = _(['']).toString();
    result = _({}).toString();
    result = _('').chain().toString();
    result = _(42).chain().toString();
    result = _(true).chain().toString();
    result = _(['']).chain().toString();
    result = _({}).chain().toString();
})(TestToString || (TestToString = {}));
// _.prototype.value
var TestValue;
(function (TestValue) {
    {
        var result_215;
        result_215 = _('').value();
        result_215 = _('').chain().value();
    }
    {
        var result_216;
        result_216 = _(42).value();
        result_216 = _(42).chain().value();
    }
    {
        var result_217;
        result_217 = _(true).value();
        result_217 = _(true).chain().value();
    }
    {
        var result_218;
        result_218 = _([]).value();
        result_218 = _([]).chain().value();
    }
    {
        var result_219;
        result_219 = _({ a: '' }).value();
        result_219 = _({ a: '' }).chain().value();
    }
})(TestValue || (TestValue = {}));
// _.prototype.valueOf
var TestValueOf;
(function (TestValueOf) {
    {
        var result_220;
        result_220 = _('').valueOf();
        result_220 = _('').chain().valueOf();
    }
    {
        var result_221;
        result_221 = _(42).valueOf();
        result_221 = _(42).chain().valueOf();
    }
    {
        var result_222;
        result_222 = _(true).valueOf();
        result_222 = _(true).chain().valueOf();
    }
    {
        var result_223;
        result_223 = _([]).valueOf();
        result_223 = _([]).chain().valueOf();
    }
    {
        var result_224;
        result_224 = _({ a: '' }).valueOf();
        result_224 = _({ a: '' }).chain().valueOf();
    }
})(TestValueOf || (TestValueOf = {}));
/**************
 * Collection *
 **************/
// _.at
var TestAt;
(function (TestAt) {
    var array;
    var list;
    var dictionary;
    {
        var result_225;
        result_225 = _.at(array, 0, '1', [2], ['3'], [4, '5']);
        result_225 = _.at(list, 0, '1', [2], ['3'], [4, '5']);
        result_225 = _.at(dictionary, 0, '1', [2], ['3'], [4, '5']);
    }
    {
        var result_226;
        result_226 = _(array).at(0, '1', [2], ['3'], [4, '5']);
        result_226 = _(list).at(0, '1', [2], ['3'], [4, '5']);
        result_226 = _(dictionary).at(0, '1', [2], ['3'], [4, '5']);
    }
    {
        var result_227;
        result_227 = _(array).chain().at(0, '1', [2], ['3'], [4, '5']);
        result_227 = _(list).chain().at(0, '1', [2], ['3'], [4, '5']);
        result_227 = _(dictionary).chain().at(0, '1', [2], ['3'], [4, '5']);
    }
})(TestAt || (TestAt = {}));
// _.countBy
var TestCountBy;
(function (TestCountBy) {
    var array;
    var list;
    var dictionary;
    var numericDictionary;
    var stringIterator;
    var listIterator;
    var dictionaryIterator;
    var numericDictionaryIterator;
    {
        var result_228;
        result_228 = _.countBy('');
        result_228 = _.countBy('', stringIterator);
        result_228 = _.countBy('', stringIterator, any);
        result_228 = _.countBy(array);
        result_228 = _.countBy(array, listIterator);
        result_228 = _.countBy(array, listIterator, any);
        result_228 = _.countBy(array, '');
        result_228 = _.countBy(array, '', any);
        result_228 = _.countBy(array, { a: 42 });
        result_228 = _.countBy(array, { a: 42 });
        result_228 = _.countBy(list);
        result_228 = _.countBy(list, listIterator);
        result_228 = _.countBy(list, listIterator, any);
        result_228 = _.countBy(list, '');
        result_228 = _.countBy(list, '', any);
        result_228 = _.countBy(list, { a: 42 });
        result_228 = _.countBy(list, { a: 42 });
        result_228 = _.countBy(dictionary);
        result_228 = _.countBy(dictionary, dictionaryIterator);
        result_228 = _.countBy(dictionary, dictionaryIterator, any);
        result_228 = _.countBy(dictionary, '');
        result_228 = _.countBy(dictionary, '', any);
        result_228 = _.countBy(dictionary, { a: 42 });
        result_228 = _.countBy(dictionary, { a: 42 });
        result_228 = _.countBy(numericDictionary);
        result_228 = _.countBy(numericDictionary, numericDictionaryIterator);
        result_228 = _.countBy(numericDictionary, numericDictionaryIterator, any);
        result_228 = _.countBy(numericDictionary, '');
        result_228 = _.countBy(numericDictionary, '', any);
        result_228 = _.countBy(numericDictionary, { a: 42 });
        result_228 = _.countBy(numericDictionary, { a: 42 });
    }
    {
        var resutl;
        result = _('').countBy();
        result = _('').countBy(stringIterator);
        result = _('').countBy(stringIterator, any);
        result = _(array).countBy();
        result = _(array).countBy(listIterator);
        result = _(array).countBy(listIterator, any);
        result = _(array).countBy('');
        result = _(array).countBy('', any);
        result = _(array).countBy({ a: 42 });
        result = _(array).countBy({ a: 42 });
        result = _(list).countBy();
        result = _(list).countBy(listIterator);
        result = _(list).countBy(listIterator, any);
        result = _(list).countBy('');
        result = _(list).countBy('', any);
        result = _(list).countBy({ a: 42 });
        result = _(list).countBy({ a: 42 });
        result = _(dictionary).countBy();
        result = _(dictionary).countBy(dictionaryIterator);
        result = _(dictionary).countBy(dictionaryIterator, any);
        result = _(dictionary).countBy('');
        result = _(dictionary).countBy('', any);
        result = _(dictionary).countBy({ a: 42 });
        result = _(dictionary).countBy({ a: 42 });
        result = _(numericDictionary).countBy();
        result = _(numericDictionary).countBy(numericDictionaryIterator);
        result = _(numericDictionary).countBy(numericDictionaryIterator, any);
        result = _(numericDictionary).countBy('');
        result = _(numericDictionary).countBy('', any);
        result = _(numericDictionary).countBy({ a: 42 });
        result = _(numericDictionary).countBy({ a: 42 });
    }
    {
        var resutl;
        result = _('').chain().countBy();
        result = _('').chain().countBy(stringIterator);
        result = _('').chain().countBy(stringIterator, any);
        result = _(array).chain().countBy();
        result = _(array).chain().countBy(listIterator);
        result = _(array).chain().countBy(listIterator, any);
        result = _(array).chain().countBy('');
        result = _(array).chain().countBy('', any);
        result = _(array).chain().countBy({ a: 42 });
        result = _(array).chain().countBy({ a: 42 });
        result = _(list).chain().countBy();
        result = _(list).chain().countBy(listIterator);
        result = _(list).chain().countBy(listIterator, any);
        result = _(list).chain().countBy('');
        result = _(list).chain().countBy('', any);
        result = _(list).chain().countBy({ a: 42 });
        result = _(list).chain().countBy({ a: 42 });
        result = _(dictionary).chain().countBy();
        result = _(dictionary).chain().countBy(dictionaryIterator);
        result = _(dictionary).chain().countBy(dictionaryIterator, any);
        result = _(dictionary).chain().countBy('');
        result = _(dictionary).chain().countBy('', any);
        result = _(dictionary).chain().countBy({ a: 42 });
        result = _(dictionary).chain().countBy({ a: 42 });
        result = _(numericDictionary).chain().countBy();
        result = _(numericDictionary).chain().countBy(numericDictionaryIterator);
        result = _(numericDictionary).chain().countBy(numericDictionaryIterator, any);
        result = _(numericDictionary).chain().countBy('');
        result = _(numericDictionary).chain().countBy('', any);
        result = _(numericDictionary).chain().countBy({ a: 42 });
        result = _(numericDictionary).chain().countBy({ a: 42 });
    }
})(TestCountBy || (TestCountBy = {}));
// _.each
var TestEach;
(function (TestEach) {
    var array;
    var list;
    var dictionary;
    var stringIterator;
    var listIterator;
    var dictionaryIterator;
    {
        var result_229;
        _.each('', stringIterator);
        _.each('', stringIterator, any);
    }
    {
        var result_230;
        _.each(array, listIterator);
        _.each(array, listIterator, any);
    }
    {
        var result_231;
        _.each(list, listIterator);
        _.each(list, listIterator, any);
    }
    {
        var result_232;
        _.each(dictionary, dictionaryIterator);
        _.each(dictionary, dictionaryIterator, any);
    }
    {
        var result_233;
        _('').each(stringIterator);
        _('').each(stringIterator, any);
    }
    {
        var result_234;
        _(array).each(listIterator);
        _(array).each(listIterator, any);
    }
    {
        var result_235;
        _(list).each(listIterator);
        _(list).each(listIterator, any);
    }
    {
        var result_236;
        _(dictionary).each(dictionaryIterator);
        _(dictionary).each(dictionaryIterator, any);
    }
    {
        var result_237;
        _('').chain().each(stringIterator);
        _('').chain().each(stringIterator, any);
    }
    {
        var result_238;
        _(array).chain().each(listIterator);
        _(array).chain().each(listIterator, any);
    }
    {
        var result_239;
        _(list).chain().each(listIterator);
        _(list).chain().each(listIterator, any);
    }
    {
        var result_240;
        _(dictionary).chain().each(dictionaryIterator);
        _(dictionary).chain().each(dictionaryIterator, any);
    }
})(TestEach || (TestEach = {}));
// _.eachRight
var TestEachRight;
(function (TestEachRight) {
    var array;
    var list;
    var dictionary;
    var stringIterator;
    var listIterator;
    var dictionaryIterator;
    {
        var result_241;
        _.eachRight('', stringIterator);
        _.eachRight('', stringIterator, any);
    }
    {
        var result_242;
        _.eachRight(array, listIterator);
        _.eachRight(array, listIterator, any);
    }
    {
        var result_243;
        _.eachRight(list, listIterator);
        _.eachRight(list, listIterator, any);
    }
    {
        var result_244;
        _.eachRight(dictionary, dictionaryIterator);
        _.eachRight(dictionary, dictionaryIterator, any);
    }
    {
        var result_245;
        _('').eachRight(stringIterator);
        _('').eachRight(stringIterator, any);
    }
    {
        var result_246;
        _(array).eachRight(listIterator);
        _(array).eachRight(listIterator, any);
    }
    {
        var result_247;
        _(list).eachRight(listIterator);
        _(list).eachRight(listIterator, any);
    }
    {
        var result_248;
        _(dictionary).eachRight(dictionaryIterator);
        _(dictionary).eachRight(dictionaryIterator, any);
    }
    {
        var result_249;
        _('').chain().eachRight(stringIterator);
        _('').chain().eachRight(stringIterator, any);
    }
    {
        var result_250;
        _(array).chain().eachRight(listIterator);
        _(array).chain().eachRight(listIterator, any);
    }
    {
        var result_251;
        _(list).chain().eachRight(listIterator);
        _(list).chain().eachRight(listIterator, any);
    }
    {
        var result_252;
        _(dictionary).chain().eachRight(dictionaryIterator);
        _(dictionary).chain().eachRight(dictionaryIterator, any);
    }
})(TestEachRight || (TestEachRight = {}));
// _.every
var TestEvery;
(function (TestEvery) {
    var array;
    var list;
    var dictionary;
    var listIterator;
    var dictionaryIterator;
    {
        var result_253;
        result_253 = _.every(array);
        result_253 = _.every(array, listIterator);
        result_253 = _.every(array, listIterator, any);
        result_253 = _.every(array, '');
        result_253 = _.every(array, { a: 42 });
        result_253 = _.every(list);
        result_253 = _.every(list, listIterator);
        result_253 = _.every(list, listIterator, any);
        result_253 = _.every(list, '');
        result_253 = _.every(list, { a: 42 });
        result_253 = _.every(dictionary);
        result_253 = _.every(dictionary, dictionaryIterator);
        result_253 = _.every(dictionary, dictionaryIterator, any);
        result_253 = _.every(dictionary, '');
        result_253 = _.every(dictionary, { a: 42 });
        result_253 = _(array).every();
        result_253 = _(array).every(listIterator);
        result_253 = _(array).every(listIterator, any);
        result_253 = _(array).every('');
        result_253 = _(array).every({ a: 42 });
        result_253 = _(list).every();
        result_253 = _(list).every(listIterator);
        result_253 = _(list).every(listIterator, any);
        result_253 = _(list).every('');
        result_253 = _(list).every({ a: 42 });
        result_253 = _(dictionary).every();
        result_253 = _(dictionary).every(dictionaryIterator);
        result_253 = _(dictionary).every(dictionaryIterator, any);
        result_253 = _(dictionary).every('');
        result_253 = _(dictionary).every({ a: 42 });
    }
    {
        var result_254;
        result_254 = _(array).chain().every();
        result_254 = _(array).chain().every(listIterator);
        result_254 = _(array).chain().every(listIterator, any);
        result_254 = _(array).chain().every('');
        result_254 = _(array).chain().every({ a: 42 });
        result_254 = _(list).chain().every();
        result_254 = _(list).chain().every(listIterator);
        result_254 = _(list).chain().every(listIterator, any);
        result_254 = _(list).chain().every('');
        result_254 = _(list).chain().every({ a: 42 });
        result_254 = _(dictionary).chain().every();
        result_254 = _(dictionary).chain().every(dictionaryIterator);
        result_254 = _(dictionary).chain().every(dictionaryIterator, any);
        result_254 = _(dictionary).chain().every('');
        result_254 = _(dictionary).chain().every({ a: 42 });
    }
})(TestEvery || (TestEvery = {}));
// _.filter
var TestFilter;
(function (TestFilter) {
    var array;
    var list;
    var dictionary;
    var stringIterator;
    var listIterator;
    var dictionaryIterator;
    {
        var result_255;
        result_255 = _.filter('', stringIterator);
        result_255 = _.filter('', stringIterator, any);
    }
    {
        var result_256;
        result_256 = _.filter(array, listIterator);
        result_256 = _.filter(array, listIterator, any);
        result_256 = _.filter(array, '');
        result_256 = _.filter(array, '', any);
        result_256 = _.filter(array, { a: 42 });
        result_256 = _.filter(list, listIterator);
        result_256 = _.filter(list, listIterator, any);
        result_256 = _.filter(list, '');
        result_256 = _.filter(list, '', any);
        result_256 = _.filter(list, { a: 42 });
        result_256 = _.filter(dictionary, dictionaryIterator);
        result_256 = _.filter(dictionary, dictionaryIterator, any);
        result_256 = _.filter(dictionary, '');
        result_256 = _.filter(dictionary, '', any);
        result_256 = _.filter(dictionary, { a: 42 });
    }
    {
        var result_257;
        result_257 = _('').filter(stringIterator);
        result_257 = _('').filter(stringIterator, any);
    }
    {
        var result_258;
        result_258 = _(array).filter(listIterator);
        result_258 = _(array).filter(listIterator, any);
        result_258 = _(array).filter('');
        result_258 = _(array).filter('', any);
        result_258 = _(array).filter({ a: 42 });
        result_258 = _(list).filter(listIterator);
        result_258 = _(list).filter(listIterator, any);
        result_258 = _(list).filter('');
        result_258 = _(list).filter('', any);
        result_258 = _(list).filter({ a: 42 });
        result_258 = _(dictionary).filter(dictionaryIterator);
        result_258 = _(dictionary).filter(dictionaryIterator, any);
        result_258 = _(dictionary).filter('');
        result_258 = _(dictionary).filter('', any);
        result_258 = _(dictionary).filter({ a: 42 });
    }
    {
        var result_259;
        result_259 = _('').chain().filter(stringIterator);
        result_259 = _('').chain().filter(stringIterator, any);
    }
    {
        var result_260;
        result_260 = _(array).chain().filter(listIterator);
        result_260 = _(array).chain().filter(listIterator, any);
        result_260 = _(array).chain().filter('');
        result_260 = _(array).chain().filter('', any);
        result_260 = _(array).chain().filter({ a: 42 });
        result_260 = _(list).chain().filter(listIterator);
        result_260 = _(list).chain().filter(listIterator, any);
        result_260 = _(list).chain().filter('');
        result_260 = _(list).chain().filter('', any);
        result_260 = _(list).chain().filter({ a: 42 });
        result_260 = _(dictionary).chain().filter(dictionaryIterator);
        result_260 = _(dictionary).chain().filter(dictionaryIterator, any);
        result_260 = _(dictionary).chain().filter('');
        result_260 = _(dictionary).chain().filter('', any);
        result_260 = _(dictionary).chain().filter({ a: 42 });
    }
})(TestFilter || (TestFilter = {}));
// _.find
var TestFind;
(function (TestFind) {
    var array;
    var list;
    var dictionary;
    var listIterator;
    var dictionaryIterator;
    var result;
    result = _.find(array);
    result = _.find(array, listIterator);
    result = _.find(array, listIterator, any);
    result = _.find(array, '');
    result = _.find(array, { a: 42 });
    result = _.find(list);
    result = _.find(list, listIterator);
    result = _.find(list, listIterator, any);
    result = _.find(list, '');
    result = _.find(list, { a: 42 });
    result = _.find(dictionary);
    result = _.find(dictionary, dictionaryIterator);
    result = _.find(dictionary, dictionaryIterator, any);
    result = _.find(dictionary, '');
    result = _.find(dictionary, { a: 42 });
    result = _(array).find();
    result = _(array).find(listIterator);
    result = _(array).find(listIterator, any);
    result = _(array).find('');
    result = _(array).find({ a: 42 });
    result = _(list).find();
    result = _(list).find(listIterator);
    result = _(list).find(listIterator, any);
    result = _(list).find('');
    result = _(list).find({ a: 42 });
    result = _(dictionary).find();
    result = _(dictionary).find(dictionaryIterator);
    result = _(dictionary).find(dictionaryIterator, any);
    result = _(dictionary).find('');
    result = _(dictionary).find({ a: 42 });
})(TestFind || (TestFind = {}));
result = _.findLast([1, 2, 3, 4], function (num) {
    return num % 2 == 0;
});
result = _.findLast(foodsCombined, { 'type': 'vegetable' });
result = _.findLast(foodsCombined, 'organic');
result = _([1, 2, 3, 4]).findLast(function (num) {
    return num % 2 == 0;
});
result = _(foodsCombined).findLast({ 'type': 'vegetable' });
result = _(foodsCombined).findLast('organic');
// _.forEach
var TestForEach;
(function (TestForEach) {
    var array;
    var list;
    var dictionary;
    var stringIterator;
    var listIterator;
    var dictionaryIterator;
    {
        var result_261;
        _.forEach('', stringIterator);
        _.forEach('', stringIterator, any);
    }
    {
        var result_262;
        _.forEach(array, listIterator);
        _.forEach(array, listIterator, any);
    }
    {
        var result_263;
        _.forEach(list, listIterator);
        _.forEach(list, listIterator, any);
    }
    {
        var result_264;
        _.forEach(dictionary, dictionaryIterator);
        _.forEach(dictionary, dictionaryIterator, any);
    }
    {
        var result_265;
        _('').forEach(stringIterator);
        _('').forEach(stringIterator, any);
    }
    {
        var result_266;
        _(array).forEach(listIterator);
        _(array).forEach(listIterator, any);
    }
    {
        var result_267;
        _(list).forEach(listIterator);
        _(list).forEach(listIterator, any);
    }
    {
        var result_268;
        _(dictionary).forEach(dictionaryIterator);
        _(dictionary).forEach(dictionaryIterator, any);
    }
    {
        var result_269;
        _('').chain().forEach(stringIterator);
        _('').chain().forEach(stringIterator, any);
    }
    {
        var result_270;
        _(array).chain().forEach(listIterator);
        _(array).chain().forEach(listIterator, any);
    }
    {
        var result_271;
        _(list).chain().forEach(listIterator);
        _(list).chain().forEach(listIterator, any);
    }
    {
        var result_272;
        _(dictionary).chain().forEach(dictionaryIterator);
        _(dictionary).chain().forEach(dictionaryIterator, any);
    }
})(TestForEach || (TestForEach = {}));
// _.forEachRight
var TestForEachRight;
(function (TestForEachRight) {
    var array;
    var list;
    var dictionary;
    var stringIterator;
    var listIterator;
    var dictionaryIterator;
    {
        var result_273;
        _.forEachRight('', stringIterator);
        _.forEachRight('', stringIterator, any);
    }
    {
        var result_274;
        _.forEachRight(array, listIterator);
        _.forEachRight(array, listIterator, any);
    }
    {
        var result_275;
        _.forEachRight(list, listIterator);
        _.forEachRight(list, listIterator, any);
    }
    {
        var result_276;
        _.forEachRight(dictionary, dictionaryIterator);
        _.forEachRight(dictionary, dictionaryIterator, any);
    }
    {
        var result_277;
        _('').forEachRight(stringIterator);
        _('').forEachRight(stringIterator, any);
    }
    {
        var result_278;
        _(array).forEachRight(listIterator);
        _(array).forEachRight(listIterator, any);
    }
    {
        var result_279;
        _(list).forEachRight(listIterator);
        _(list).forEachRight(listIterator, any);
    }
    {
        var result_280;
        _(dictionary).forEachRight(dictionaryIterator);
        _(dictionary).forEachRight(dictionaryIterator, any);
    }
    {
        var result_281;
        _('').chain().forEachRight(stringIterator);
        _('').chain().forEachRight(stringIterator, any);
    }
    {
        var result_282;
        _(array).chain().forEachRight(listIterator);
        _(array).chain().forEachRight(listIterator, any);
    }
    {
        var result_283;
        _(list).chain().forEachRight(listIterator);
        _(list).chain().forEachRight(listIterator, any);
    }
    {
        var result_284;
        _(dictionary).chain().forEachRight(dictionaryIterator);
        _(dictionary).chain().forEachRight(dictionaryIterator, any);
    }
})(TestForEachRight || (TestForEachRight = {}));
// _.groupBy
var TestGroupBy;
(function (TestGroupBy) {
    var array;
    var list;
    var dictionary;
    var stringIterator;
    var listIterator;
    var dictionaryIterator;
    {
        var result_285;
        result_285 = _.groupBy('');
        result_285 = _.groupBy('', stringIterator);
        result_285 = _.groupBy('', stringIterator, any);
        result_285 = _.groupBy('', stringIterator);
        result_285 = _.groupBy('', stringIterator, any);
    }
    {
        var result_286;
        result_286 = _.groupBy(array);
        result_286 = _.groupBy(array, listIterator);
        result_286 = _.groupBy(array, listIterator, any);
        result_286 = _.groupBy(array, '');
        result_286 = _.groupBy(array, '', any);
        result_286 = _.groupBy(array, { a: 42 });
        result_286 = _.groupBy(array, listIterator);
        result_286 = _.groupBy(array, listIterator, any);
        result_286 = _.groupBy(array, '', true);
        result_286 = _.groupBy(array, { a: 42 });
        result_286 = _.groupBy(list);
        result_286 = _.groupBy(list, listIterator);
        result_286 = _.groupBy(list, listIterator, any);
        result_286 = _.groupBy(list, '');
        result_286 = _.groupBy(list, '', any);
        result_286 = _.groupBy(list, { a: 42 });
        result_286 = _.groupBy(list, listIterator);
        result_286 = _.groupBy(list, listIterator, any);
        result_286 = _.groupBy(list, '', true);
        result_286 = _.groupBy(list, { a: 42 });
        result_286 = _.groupBy(dictionary);
        result_286 = _.groupBy(dictionary, dictionaryIterator);
        result_286 = _.groupBy(dictionary, dictionaryIterator, any);
        result_286 = _.groupBy(dictionary, '');
        result_286 = _.groupBy(dictionary, '', any);
        result_286 = _.groupBy(dictionary, { a: 42 });
        result_286 = _.groupBy(dictionary, dictionaryIterator);
        result_286 = _.groupBy(dictionary, dictionaryIterator, any);
        result_286 = _.groupBy(dictionary, '', true);
        result_286 = _.groupBy(dictionary, { a: 42 });
    }
    {
        var result_287;
        result_287 = _('').groupBy();
        result_287 = _('').groupBy(stringIterator);
        result_287 = _('').groupBy(stringIterator, any);
    }
    {
        var result_288;
        result_288 = _(array).groupBy();
        result_288 = _(array).groupBy(listIterator);
        result_288 = _(array).groupBy(listIterator, any);
        result_288 = _(array).groupBy('');
        result_288 = _(array).groupBy('', true);
        result_288 = _(array).groupBy({ a: 42 });
        result_288 = _(list).groupBy();
        result_288 = _(list).groupBy(listIterator);
        result_288 = _(list).groupBy(listIterator, any);
        result_288 = _(list).groupBy('');
        result_288 = _(list).groupBy('', any);
        result_288 = _(list).groupBy({ a: 42 });
        result_288 = _(list).groupBy(listIterator);
        result_288 = _(list).groupBy(listIterator, any);
        result_288 = _(list).groupBy('', true);
        result_288 = _(list).groupBy({ a: 42 });
        result_288 = _(dictionary).groupBy();
        result_288 = _(dictionary).groupBy(dictionaryIterator);
        result_288 = _(dictionary).groupBy(dictionaryIterator, any);
        result_288 = _(dictionary).groupBy('');
        result_288 = _(dictionary).groupBy('', any);
        result_288 = _(dictionary).groupBy({ a: 42 });
        result_288 = _(dictionary).groupBy(dictionaryIterator);
        result_288 = _(dictionary).groupBy(dictionaryIterator, any);
        result_288 = _(dictionary).groupBy('', true);
        result_288 = _(dictionary).groupBy({ a: 42 });
    }
    {
        var result_289;
        result_289 = _('').chain().groupBy();
        result_289 = _('').chain().groupBy(stringIterator);
        result_289 = _('').chain().groupBy(stringIterator, any);
    }
    {
        var result_290;
        result_290 = _(array).chain().groupBy();
        result_290 = _(array).chain().groupBy(listIterator);
        result_290 = _(array).chain().groupBy(listIterator, any);
        result_290 = _(array).chain().groupBy('');
        result_290 = _(array).chain().groupBy('', true);
        result_290 = _(array).chain().groupBy({ a: 42 });
        result_290 = _(list).chain().groupBy();
        result_290 = _(list).chain().groupBy(listIterator);
        result_290 = _(list).chain().groupBy(listIterator, any);
        result_290 = _(list).chain().groupBy('');
        result_290 = _(list).chain().groupBy('', any);
        result_290 = _(list).chain().groupBy({ a: 42 });
        result_290 = _(list).chain().groupBy(listIterator);
        result_290 = _(list).chain().groupBy(listIterator, any);
        result_290 = _(list).chain().groupBy('', true);
        result_290 = _(list).chain().groupBy({ a: 42 });
        result_290 = _(dictionary).chain().groupBy();
        result_290 = _(dictionary).chain().groupBy(dictionaryIterator);
        result_290 = _(dictionary).chain().groupBy(dictionaryIterator, any);
        result_290 = _(dictionary).chain().groupBy('');
        result_290 = _(dictionary).chain().groupBy('', any);
        result_290 = _(dictionary).chain().groupBy({ a: 42 });
        result_290 = _(dictionary).chain().groupBy(dictionaryIterator);
        result_290 = _(dictionary).chain().groupBy(dictionaryIterator, any);
        result_290 = _(dictionary).chain().groupBy('', true);
        result_290 = _(dictionary).chain().groupBy({ a: 42 });
    }
})(TestGroupBy || (TestGroupBy = {}));
// _.includes
var TestIncludes;
(function (TestIncludes) {
    var array;
    var list;
    var dictionary;
    var target;
    {
        var result_291;
        result_291 = _.includes(array, target);
        result_291 = _.includes(array, target, 42);
        result_291 = _.includes(list, target);
        result_291 = _.includes(list, target, 42);
        result_291 = _.includes(dictionary, target);
        result_291 = _.includes(dictionary, target, 42);
        result_291 = _(array).includes(target);
        result_291 = _(array).includes(target, 42);
        result_291 = _(list).includes(target);
        result_291 = _(list).includes(target, 42);
        result_291 = _(dictionary).includes(target);
        result_291 = _(dictionary).includes(target, 42);
    }
    {
        var result_292;
        result_292 = _(array).chain().includes(target);
        result_292 = _(array).chain().includes(target, 42);
        result_292 = _(list).chain().includes(target);
        result_292 = _(list).chain().includes(target, 42);
        result_292 = _(dictionary).chain().includes(target);
        result_292 = _(dictionary).chain().includes(target, 42);
    }
})(TestIncludes || (TestIncludes = {}));
// _.keyBy
var TestKeyBy;
(function (TestKeyBy) {
    var array;
    var list;
    var dictionary;
    var numericDictionary;
    var stringIterator;
    var listIterator;
    var dictionaryIterator;
    var numericDictionaryIterator;
    {
        var result_293;
        result_293 = _.keyBy('abcd');
        result_293 = _.keyBy('abcd', stringIterator);
        result_293 = _.keyBy('abcd', stringIterator, any);
    }
    {
        var result_294;
        result_294 = _.keyBy(array);
        result_294 = _.keyBy(array, listIterator);
        result_294 = _.keyBy(array, listIterator, any);
        result_294 = _.keyBy(array, 'a');
        result_294 = _.keyBy(array, 'a', any);
        result_294 = _.keyBy(array, { a: 42 });
        result_294 = _.keyBy(array, { a: 42 });
        result_294 = _.keyBy(list);
        result_294 = _.keyBy(list, listIterator);
        result_294 = _.keyBy(list, listIterator, any);
        result_294 = _.keyBy(list, 'a');
        result_294 = _.keyBy(list, 'a', any);
        result_294 = _.keyBy(list, { a: 42 });
        result_294 = _.keyBy(list, { a: 42 });
        result_294 = _.keyBy(numericDictionary);
        result_294 = _.keyBy(numericDictionary, numericDictionaryIterator);
        result_294 = _.keyBy(numericDictionary, numericDictionaryIterator, any);
        result_294 = _.keyBy(numericDictionary, 'a');
        result_294 = _.keyBy(numericDictionary, 'a', any);
        result_294 = _.keyBy(numericDictionary, { a: 42 });
        result_294 = _.keyBy(numericDictionary, { a: 42 });
        result_294 = _.keyBy(dictionary);
        result_294 = _.keyBy(dictionary, dictionaryIterator);
        result_294 = _.keyBy(dictionary, dictionaryIterator, any);
        result_294 = _.keyBy(dictionary, 'a');
        result_294 = _.keyBy(dictionary, 'a', any);
        result_294 = _.keyBy(dictionary, { a: 42 });
        result_294 = _.keyBy(dictionary, { a: 42 });
    }
    {
        var result_295;
        result_295 = _('abcd').keyBy();
        result_295 = _('abcd').keyBy(stringIterator);
        result_295 = _('abcd').keyBy(stringIterator, any);
    }
    {
        var result_296;
        result_296 = _(array).keyBy();
        result_296 = _(array).keyBy(listIterator);
        result_296 = _(array).keyBy(listIterator, any);
        result_296 = _(array).keyBy('a');
        result_296 = _(array).keyBy('a', any);
        result_296 = _(array).keyBy({ a: 42 });
        result_296 = _(list).keyBy();
        result_296 = _(list).keyBy(listIterator);
        result_296 = _(list).keyBy(listIterator, any);
        result_296 = _(list).keyBy('a');
        result_296 = _(list).keyBy('a', any);
        result_296 = _(list).keyBy({ a: 42 });
        result_296 = _(list).keyBy({ a: 42 });
        result_296 = _(numericDictionary).keyBy();
        result_296 = _(numericDictionary).keyBy(numericDictionaryIterator);
        result_296 = _(numericDictionary).keyBy(numericDictionaryIterator, any);
        result_296 = _(numericDictionary).keyBy('a');
        result_296 = _(numericDictionary).keyBy('a', any);
        result_296 = _(numericDictionary).keyBy({ a: 42 });
        result_296 = _(numericDictionary).keyBy({ a: 42 });
        result_296 = _(dictionary).keyBy();
        result_296 = _(dictionary).keyBy(dictionaryIterator);
        result_296 = _(dictionary).keyBy(dictionaryIterator, any);
        result_296 = _(dictionary).keyBy('a');
        result_296 = _(dictionary).keyBy('a', any);
        result_296 = _(dictionary).keyBy({ a: 42 });
        result_296 = _(dictionary).keyBy({ a: 42 });
    }
    {
        var result_297;
        result_297 = _('abcd').chain().keyBy();
        result_297 = _('abcd').chain().keyBy(stringIterator);
        result_297 = _('abcd').chain().keyBy(stringIterator, any);
    }
    {
        var result_298;
        result_298 = _(array).chain().keyBy();
        result_298 = _(array).chain().keyBy(listIterator);
        result_298 = _(array).chain().keyBy(listIterator, any);
        result_298 = _(array).chain().keyBy('a');
        result_298 = _(array).chain().keyBy('a', any);
        result_298 = _(array).chain().keyBy({ a: 42 });
        result_298 = _(list).chain().keyBy();
        result_298 = _(list).chain().keyBy(listIterator);
        result_298 = _(list).chain().keyBy(listIterator, any);
        result_298 = _(list).chain().keyBy('a');
        result_298 = _(list).chain().keyBy('a', any);
        result_298 = _(list).chain().keyBy({ a: 42 });
        result_298 = _(list).chain().keyBy({ a: 42 });
        result_298 = _(numericDictionary).chain().keyBy();
        result_298 = _(numericDictionary).chain().keyBy(numericDictionaryIterator);
        result_298 = _(numericDictionary).chain().keyBy(numericDictionaryIterator, any);
        result_298 = _(numericDictionary).chain().keyBy('a');
        result_298 = _(numericDictionary).chain().keyBy('a', any);
        result_298 = _(numericDictionary).chain().keyBy({ a: 42 });
        result_298 = _(numericDictionary).chain().keyBy({ a: 42 });
        result_298 = _(dictionary).chain().keyBy();
        result_298 = _(dictionary).chain().keyBy(dictionaryIterator);
        result_298 = _(dictionary).chain().keyBy(dictionaryIterator, any);
        result_298 = _(dictionary).chain().keyBy('a');
        result_298 = _(dictionary).chain().keyBy('a', any);
        result_298 = _(dictionary).chain().keyBy({ a: 42 });
        result_298 = _(dictionary).chain().keyBy({ a: 42 });
    }
})(TestKeyBy || (TestKeyBy = {}));
//_.invokeMap
var TestInvokeMap;
(function (TestInvokeMap) {
    var numArray = [4, 2, 1, 3];
    var numDict = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    };
    {
        var result_299;
        result_299 = _.invokeMap(numArray, 'toString');
        result_299 = _.invokeMap(numArray, 'toString', 2);
        result_299 = _.invokeMap(numArray, 'toString');
        result_299 = _.invokeMap(numArray, 'toString', 2);
        result_299 = _(numArray).invokeMap('toString').value();
        result_299 = _(numArray).invokeMap('toString', 2).value();
        result_299 = _(numArray).chain().invokeMap('toString').value();
        result_299 = _(numArray).chain().invokeMap('toString', 2).value();
        result_299 = _.invokeMap(numArray, Number.prototype.toString);
        result_299 = _.invokeMap(numArray, Number.prototype.toString, 2);
        result_299 = _.invokeMap(numArray, Number.prototype.toString);
        result_299 = _.invokeMap(numArray, Number.prototype.toString, 2);
        result_299 = _(numArray).invokeMap(Number.prototype.toString).value();
        result_299 = _(numArray).invokeMap(Number.prototype.toString, 2).value();
        result_299 = _(numArray).chain().invokeMap(Number.prototype.toString).value();
        result_299 = _(numArray).chain().invokeMap(Number.prototype.toString, 2).value();
    }
    {
        var result_300;
        result_300 = _.invokeMap(numDict, 'toString');
        result_300 = _.invokeMap(numDict, 'toString', 2);
        result_300 = _.invokeMap(numDict, 'toString');
        result_300 = _.invokeMap(numDict, 'toString', 2);
        result_300 = _(numDict).invokeMap('toString').value();
        result_300 = _(numDict).invokeMap('toString', 2).value();
        result_300 = _(numDict).chain().invokeMap('toString').value();
        result_300 = _(numDict).chain().invokeMap('toString', 2).value();
        result_300 = _.invokeMap(numDict, Number.prototype.toString);
        result_300 = _.invokeMap(numDict, Number.prototype.toString, 2);
        result_300 = _.invokeMap(numDict, Number.prototype.toString);
        result_300 = _.invokeMap(numDict, Number.prototype.toString, 2);
        result_300 = _(numDict).invokeMap(Number.prototype.toString).value();
        result_300 = _(numDict).invokeMap(Number.prototype.toString, 2).value();
        result_300 = _(numDict).chain().invokeMap(Number.prototype.toString).value();
        result_300 = _(numDict).chain().invokeMap(Number.prototype.toString, 2).value();
    }
})(TestInvokeMap || (TestInvokeMap = {}));
// _.map
var TestMap;
(function (TestMap) {
    var array;
    var list;
    var dictionary;
    var listIterator;
    var dictionaryIterator;
    {
        var result_301;
        result_301 = _.map(array);
        result_301 = _.map(array, listIterator);
        result_301 = _.map(array, listIterator, any);
        result_301 = _.map(array, '');
        result_301 = _.map(list);
        result_301 = _.map(list, listIterator);
        result_301 = _.map(list, listIterator, any);
        result_301 = _.map(list, '');
        result_301 = _.map(dictionary);
        result_301 = _.map(dictionary, dictionaryIterator);
        result_301 = _.map(dictionary, dictionaryIterator, any);
        result_301 = _.map(dictionary, '');
    }
    {
        var result_302;
        result_302 = _.map(array, {});
        result_302 = _.map(list, {});
        result_302 = _.map(dictionary, {});
    }
    {
        var result_303;
        result_303 = _(array).map();
        result_303 = _(array).map(listIterator);
        result_303 = _(array).map(listIterator, any);
        result_303 = _(array).map('');
        result_303 = _(list).map();
        result_303 = _(list).map(listIterator);
        result_303 = _(list).map(listIterator, any);
        result_303 = _(list).map('');
        result_303 = _(dictionary).map();
        result_303 = _(dictionary).map(dictionaryIterator);
        result_303 = _(dictionary).map(dictionaryIterator, any);
        result_303 = _(dictionary).map('');
    }
    {
        var result_304;
        result_304 = _(array).map({});
        result_304 = _(list).map({});
        result_304 = _(dictionary).map({});
    }
    {
        var result_305;
        result_305 = _(array).chain().map();
        result_305 = _(array).chain().map(listIterator);
        result_305 = _(array).chain().map(listIterator, any);
        result_305 = _(array).chain().map('');
        result_305 = _(list).chain().map();
        result_305 = _(list).chain().map(listIterator);
        result_305 = _(list).chain().map(listIterator, any);
        result_305 = _(list).chain().map('');
        result_305 = _(dictionary).chain().map();
        result_305 = _(dictionary).chain().map(dictionaryIterator);
        result_305 = _(dictionary).chain().map(dictionaryIterator, any);
        result_305 = _(dictionary).chain().map('');
    }
    {
        var result_306;
        result_306 = _(array).chain().map({});
        result_306 = _(list).chain().map({});
        result_306 = _(dictionary).chain().map({});
    }
})(TestMap || (TestMap = {}));
// _.partition
result = _.partition('abcd', function (n) { return n < 'c'; });
result = _.partition(['a', 'b', 'c', 'd'], function (n) { return n < 'c'; });
result = _.partition([1, 2, 3, 4], function (n) { return n < 3; });
result = _.partition({ 0: 1, 1: 2, 2: 3, 3: 4, length: 4 }, function (n) { return n < 3; });
result = _.partition({ a: 1, b: 2, c: 3, d: 4 }, function (n) { return n < 3; });
result = _.partition([{ a: 1 }, { a: 2 }], { a: 2 });
result = _.partition({ 0: { a: 1 }, 1: { a: 2 }, length: 2 }, { a: 2 });
result = _.partition({ 0: { a: 1 }, 1: { a: 2 } }, { a: 2 });
result = _.partition([{ a: 1 }, { a: 2 }], 'a');
result = _.partition([{ a: 1 }, { a: 2 }], 'a', 2);
result = _.partition({ 0: { a: 1 }, 1: { a: 2 }, length: 2 }, 'a');
result = _.partition({ 0: { a: 1 }, 1: { a: 2 }, length: 2 }, 'a', 2);
result = _.partition({ 0: { a: 1 }, 1: { a: 2 } }, 'a');
result = _.partition({ 0: { a: 1 }, 1: { a: 2 } }, 'a', 2);
result = _('abcd').partition(function (n) { return n < 'c'; }).value();
result = _(['a', 'b', 'c', 'd']).partition(function (n) { return n < 'c'; }).value();
result = _([1, 2, 3, 4]).partition(function (n) { return n < 3; }).value();
result = _({ 0: 1, 1: 2, 2: 3, 3: 4, length: 4 }).partition(function (n) { return n < 3; }).value();
result = _({ a: 1, b: 2, c: 3, d: 4 }).partition(function (n) { return n < 3; }).value();
result = _([{ a: 1 }, { a: 2 }]).partition({ a: 2 }).value();
result = _({ 0: { a: 1 }, 1: { a: 2 }, length: 2 }).partition({ a: 2 }).value();
result = _({ 0: { a: 1 }, 1: { a: 2 } }).partition({ a: 2 }).value();
result = _([{ a: 1 }, { a: 2 }]).partition('a').value();
result = _([{ a: 1 }, { a: 2 }]).partition('a', 2).value();
result = _({ 0: { a: 1 }, 1: { a: 2 } }).partition('a').value();
result = _({ 0: { a: 1 }, 1: { a: 2 } }).partition('a', 2).value();
result = _.reduce([1, 2, 3], function (sum, num) {
    return sum + num;
});
result = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function (r, num, key) {
    r[key] = num * 3;
    return r;
}, {});
result = _([1, 2, 3]).reduce(function (sum, num) {
    return sum + num;
});
result = _({ 'a': 1, 'b': 2, 'c': 3 }).reduce(function (r, num, key) {
    r[key] = num * 3;
    return r;
}, {});
result = _.reduceRight([[0, 1], [2, 3], [4, 5]], function (a, b) { return a.concat(b); }, []);
// _.reject
var TestReject;
(function (TestReject) {
    var array;
    var list;
    var dictionary;
    var stringIterator;
    var listIterator;
    var dictionaryIterator;
    {
        var result_307;
        result_307 = _.reject('', stringIterator);
        result_307 = _.reject('', stringIterator, any);
    }
    {
        var result_308;
        result_308 = _.reject(array, listIterator);
        result_308 = _.reject(array, listIterator, any);
        result_308 = _.reject(array, '');
        result_308 = _.reject(array, '', any);
        result_308 = _.reject(array, { a: 42 });
        result_308 = _.reject(list, listIterator);
        result_308 = _.reject(list, listIterator, any);
        result_308 = _.reject(list, '');
        result_308 = _.reject(list, '', any);
        result_308 = _.reject(list, { a: 42 });
        result_308 = _.reject(dictionary, dictionaryIterator);
        result_308 = _.reject(dictionary, dictionaryIterator, any);
        result_308 = _.reject(dictionary, '');
        result_308 = _.reject(dictionary, '', any);
        result_308 = _.reject(dictionary, { a: 42 });
    }
    {
        var result_309;
        result_309 = _('').reject(stringIterator);
        result_309 = _('').reject(stringIterator, any);
    }
    {
        var result_310;
        result_310 = _(array).reject(listIterator);
        result_310 = _(array).reject(listIterator, any);
        result_310 = _(array).reject('');
        result_310 = _(array).reject('', any);
        result_310 = _(array).reject({ a: 42 });
        result_310 = _(list).reject(listIterator);
        result_310 = _(list).reject(listIterator, any);
        result_310 = _(list).reject('');
        result_310 = _(list).reject('', any);
        result_310 = _(list).reject({ a: 42 });
        result_310 = _(dictionary).reject(dictionaryIterator);
        result_310 = _(dictionary).reject(dictionaryIterator, any);
        result_310 = _(dictionary).reject('');
        result_310 = _(dictionary).reject('', any);
        result_310 = _(dictionary).reject({ a: 42 });
    }
    {
        var result_311;
        result_311 = _('').chain().reject(stringIterator);
        result_311 = _('').chain().reject(stringIterator, any);
    }
    {
        var result_312;
        result_312 = _(array).chain().reject(listIterator);
        result_312 = _(array).chain().reject(listIterator, any);
        result_312 = _(array).chain().reject('');
        result_312 = _(array).chain().reject('', any);
        result_312 = _(array).chain().reject({ a: 42 });
        result_312 = _(list).chain().reject(listIterator);
        result_312 = _(list).chain().reject(listIterator, any);
        result_312 = _(list).chain().reject('');
        result_312 = _(list).chain().reject('', any);
        result_312 = _(list).chain().reject({ a: 42 });
        result_312 = _(dictionary).chain().reject(dictionaryIterator);
        result_312 = _(dictionary).chain().reject(dictionaryIterator, any);
        result_312 = _(dictionary).chain().reject('');
        result_312 = _(dictionary).chain().reject('', any);
        result_312 = _(dictionary).chain().reject({ a: 42 });
    }
})(TestReject || (TestReject = {}));
// _.sample
result = _.sample([1, 2, 3, 4]);
result = _([1, 2, 3, 4]).sample();
result = _([1, 2, 3, 4]).sample().value();
// _.sampleSize
result = _.sampleSize([1, 2, 3, 4], 2);
result = _([1, 2, 3, 4]).sampleSize(2);
result = _([1, 2, 3, 4]).sampleSize(2).value();
// _.shuffle
var TestShuffle;
(function (TestShuffle) {
    var array;
    var list;
    var dictionary;
    {
        var result_313;
        result_313 = _.shuffle('abc');
    }
    {
        var result_314;
        result_314 = _.shuffle(array);
        result_314 = _.shuffle(list);
        result_314 = _.shuffle(dictionary);
    }
    {
        var result_315;
        result_315 = _('abc').shuffle();
    }
    {
        var result_316;
        result_316 = _(array).shuffle();
        result_316 = _(list).shuffle();
        result_316 = _(dictionary).shuffle();
    }
    {
        var result_317;
        result_317 = _('abc').chain().shuffle();
    }
    {
        var result_318;
        result_318 = _(array).chain().shuffle();
        result_318 = _(list).chain().shuffle();
        result_318 = _(dictionary).chain().shuffle();
    }
})(TestShuffle || (TestShuffle = {}));
// _.size
var TestSize;
(function (TestSize) {
    var array;
    var list;
    var dictionary;
    {
        var result_319;
        result_319 = _.size(array);
        result_319 = _.size(list);
        result_319 = _.size(dictionary);
        result_319 = _.size('');
        result_319 = _(array).size();
        result_319 = _(list).size();
        result_319 = _(dictionary).size();
        result_319 = _('').size();
    }
    {
        var result_320;
        result_320 = _(array).chain().size();
        result_320 = _(list).chain().size();
        result_320 = _(dictionary).chain().size();
        result_320 = _('').chain().size();
    }
})(TestSize || (TestSize = {}));
// _.some
var TestSome;
(function (TestSome) {
    var array;
    var list;
    var dictionary;
    var numericDictionary;
    var listIterator;
    var dictionaryIterator;
    var numericDictionaryIterator;
    {
        var result_321;
        result_321 = _.some(array);
        result_321 = _.some(array, listIterator);
        result_321 = _.some(array, listIterator, any);
        result_321 = _.some(array, '');
        result_321 = _.some(array, { a: 42 });
        result_321 = _.some(list);
        result_321 = _.some(list, listIterator);
        result_321 = _.some(list, listIterator, any);
        result_321 = _.some(list, '');
        result_321 = _.some(list, { a: 42 });
        result_321 = _.some(dictionary);
        result_321 = _.some(dictionary, dictionaryIterator);
        result_321 = _.some(dictionary, dictionaryIterator, any);
        result_321 = _.some(dictionary, '');
        result_321 = _.some(dictionary, { a: 42 });
        result_321 = _.some(numericDictionary);
        result_321 = _.some(numericDictionary, numericDictionaryIterator);
        result_321 = _.some(numericDictionary, numericDictionaryIterator, any);
        result_321 = _.some(numericDictionary, '');
        result_321 = _.some(numericDictionary, { a: 42 });
        result_321 = _(array).some();
        result_321 = _(array).some(listIterator);
        result_321 = _(array).some(listIterator, any);
        result_321 = _(array).some('');
        result_321 = _(array).some({ a: 42 });
        result_321 = _(list).some();
        result_321 = _(list).some(listIterator);
        result_321 = _(list).some(listIterator, any);
        result_321 = _(list).some('');
        result_321 = _(list).some({ a: 42 });
        result_321 = _(dictionary).some();
        result_321 = _(dictionary).some(dictionaryIterator);
        result_321 = _(dictionary).some(dictionaryIterator, any);
        result_321 = _(dictionary).some('');
        result_321 = _(dictionary).some({ a: 42 });
        result_321 = _(numericDictionary).some();
        result_321 = _(numericDictionary).some(numericDictionaryIterator);
        result_321 = _(numericDictionary).some(numericDictionaryIterator, any);
        result_321 = _(numericDictionary).some('');
        result_321 = _(numericDictionary).some({ a: 42 });
    }
    {
        var result_322;
        result_322 = _(array).chain().some();
        result_322 = _(array).chain().some(listIterator);
        result_322 = _(array).chain().some(listIterator, any);
        result_322 = _(array).chain().some('');
        result_322 = _(array).chain().some({ a: 42 });
        result_322 = _(list).chain().some();
        result_322 = _(list).chain().some(listIterator);
        result_322 = _(list).chain().some(listIterator, any);
        result_322 = _(list).chain().some('');
        result_322 = _(list).chain().some({ a: 42 });
        result_322 = _(dictionary).chain().some();
        result_322 = _(dictionary).chain().some(dictionaryIterator);
        result_322 = _(dictionary).chain().some(dictionaryIterator, any);
        result_322 = _(dictionary).chain().some('');
        result_322 = _(dictionary).chain().some({ a: 42 });
        result_322 = _(numericDictionary).chain().some();
        result_322 = _(numericDictionary).chain().some(numericDictionaryIterator);
        result_322 = _(numericDictionary).chain().some(numericDictionaryIterator, any);
        result_322 = _(numericDictionary).chain().some('');
        result_322 = _(numericDictionary).chain().some({ a: 42 });
    }
})(TestSome || (TestSome = {}));
// _.sortBy
var TestSortBy;
(function (TestSortBy) {
    var array;
    var list;
    var dictionary;
    var listIterator;
    var dictionaryIterator;
    {
        var result_323;
        result_323 = _.sortBy(array);
        result_323 = _.sortBy(array, listIterator);
        result_323 = _.sortBy(array, '');
        result_323 = _.sortBy(array, { a: 42 });
        result_323 = _.sortBy(list);
        result_323 = _.sortBy(list, listIterator);
        result_323 = _.sortBy(list, '');
        result_323 = _.sortBy(list, { a: 42 });
        result_323 = _.sortBy(dictionary);
        result_323 = _.sortBy(dictionary, dictionaryIterator);
        result_323 = _.sortBy(dictionary, '');
        result_323 = _.sortBy(dictionary, { a: 42 });
    }
    {
        var result_324;
        result_324 = _(array).sortBy();
        result_324 = _(array).sortBy(listIterator);
        result_324 = _(array).sortBy('');
        result_324 = _(array).sortBy({ a: 42 });
        result_324 = _(list).sortBy();
        result_324 = _(list).sortBy(listIterator);
        result_324 = _(list).sortBy('');
        result_324 = _(list).sortBy({ a: 42 });
        result_324 = _(dictionary).sortBy();
        result_324 = _(dictionary).sortBy(dictionaryIterator);
        result_324 = _(dictionary).sortBy('');
        result_324 = _(dictionary).sortBy({ a: 42 });
    }
    {
        var result_325;
        result_325 = _(array).chain().sortBy();
        result_325 = _(array).chain().sortBy(listIterator);
        result_325 = _(array).chain().sortBy('');
        result_325 = _(array).chain().sortBy({ a: 42 });
        result_325 = _(list).chain().sortBy();
        result_325 = _(list).chain().sortBy(listIterator);
        result_325 = _(list).chain().sortBy('');
        result_325 = _(list).chain().sortBy({ a: 42 });
        result_325 = _(dictionary).chain().sortBy();
        result_325 = _(dictionary).chain().sortBy(dictionaryIterator);
        result_325 = _(dictionary).chain().sortBy('');
        result_325 = _(dictionary).chain().sortBy({ a: 42 });
    }
})(TestSortBy || (TestSortBy = {}));
result = _.sortBy(stoogesAges, function (stooge) { return Math.sin(stooge.age); }, function (stooge) { return stooge.name.slice(1); });
result = _.sortBy(stoogesAges, ['name', 'age']);
result = _.sortBy(stoogesAges, 'name', function (stooge) { return Math.sin(stooge.age); });
result = _(foodsOrganic).sortBy('organic', function (food) { return food.name; }, { organic: true }).value();
// _.orderBy
var TestorderBy;
(function (TestorderBy) {
    var array;
    var list;
    var numericDictionary;
    var dictionary;
    var orders;
    {
        var iteratees;
        var result_326;
        result_326 = _.orderBy('acbd', iteratees);
        result_326 = _.orderBy('acbd', iteratees, orders);
    }
    {
        var iteratees;
        var result_327;
        result_327 = _.orderBy(array, iteratees);
        result_327 = _.orderBy(array, iteratees, orders);
        result_327 = _.orderBy(array, iteratees);
        result_327 = _.orderBy(array, iteratees, orders);
        result_327 = _.orderBy(list, iteratees);
        result_327 = _.orderBy(list, iteratees, orders);
        result_327 = _.orderBy(list, iteratees);
        result_327 = _.orderBy(list, iteratees, orders);
        result_327 = _.orderBy(numericDictionary, iteratees);
        result_327 = _.orderBy(numericDictionary, iteratees, orders);
        result_327 = _.orderBy(numericDictionary, iteratees);
        result_327 = _.orderBy(numericDictionary, iteratees, orders);
        result_327 = _.orderBy(dictionary, iteratees);
        result_327 = _.orderBy(dictionary, iteratees, orders);
        result_327 = _.orderBy(dictionary, iteratees);
        result_327 = _.orderBy(dictionary, iteratees, orders);
    }
    {
        var iteratees;
        var result_328;
        result_328 = _(array).orderBy(iteratees);
        result_328 = _(array).orderBy(iteratees, orders);
        result_328 = _(list).orderBy(iteratees);
        result_328 = _(list).orderBy(iteratees, orders);
        result_328 = _(list).orderBy(iteratees);
        result_328 = _(list).orderBy(iteratees, orders);
        result_328 = _(numericDictionary).orderBy(iteratees);
        result_328 = _(numericDictionary).orderBy(iteratees, orders);
        result_328 = _(numericDictionary).orderBy(iteratees);
        result_328 = _(numericDictionary).orderBy(iteratees, orders);
        result_328 = _(dictionary).orderBy(iteratees);
        result_328 = _(dictionary).orderBy(iteratees, orders);
        result_328 = _(dictionary).orderBy(iteratees);
        result_328 = _(dictionary).orderBy(iteratees, orders);
    }
    {
        var iteratees;
        var result_329;
        result_329 = _(array).chain().orderBy(iteratees);
        result_329 = _(array).chain().orderBy(iteratees, orders);
        result_329 = _(list).chain().orderBy(iteratees);
        result_329 = _(list).chain().orderBy(iteratees, orders);
        result_329 = _(list).chain().orderBy(iteratees);
        result_329 = _(list).chain().orderBy(iteratees, orders);
        result_329 = _(numericDictionary).chain().orderBy(iteratees);
        result_329 = _(numericDictionary).chain().orderBy(iteratees, orders);
        result_329 = _(numericDictionary).chain().orderBy(iteratees);
        result_329 = _(numericDictionary).chain().orderBy(iteratees, orders);
        result_329 = _(dictionary).chain().orderBy(iteratees);
        result_329 = _(dictionary).chain().orderBy(iteratees, orders);
        result_329 = _(dictionary).chain().orderBy(iteratees);
        result_329 = _(dictionary).chain().orderBy(iteratees, orders);
    }
})(TestorderBy || (TestorderBy = {}));
/********
 * Date *
 ********/
var TestNow;
(function (TestNow) {
    {
        var result_330;
        result_330 = _.now();
        result_330 = _(42).now();
        result_330 = _([]).now();
        result_330 = _({}).now();
    }
    {
        var result_331;
        result_331 = _(42).chain().now();
        result_331 = _([]).chain().now();
        result_331 = _({}).chain().now();
    }
})(TestNow || (TestNow = {}));
/*************
 * Functions *
 *************/
// _.after
var TestAfter;
(function (TestAfter) {
    var func;
    {
        var result_332;
        _.after(42, func);
    }
    {
        var result_333;
        _(42).after(func);
    }
    {
        var result_334;
        _(42).chain().after(func);
    }
})(TestAfter || (TestAfter = {}));
// _.ary
var TestAry;
(function (TestAry) {
    var func;
    {
        var result_335;
        result_335 = _.ary(func);
        result_335 = _.ary(func, 2);
        result_335 = _.ary(func);
        result_335 = _.ary(func, 2);
    }
    {
        var result_336;
        result_336 = _(func).ary();
        result_336 = _(func).ary(2);
    }
    {
        var result_337;
        result_337 = _(func).chain().ary();
        result_337 = _(func).chain().ary(2);
    }
})(TestAry || (TestAry = {}));
// _.before
var TestBefore;
(function (TestBefore) {
    var func;
    {
        var result_338;
        _.before(42, func);
    }
    {
        var result_339;
        _(42).before(func);
    }
    {
        var result_340;
        _(42).chain().before(func);
    }
})(TestBefore || (TestBefore = {}));
// _.bind
var TestBind;
(function (TestBind) {
    var func;
    {
        var result_341;
        result_341 = _.bind(func, any);
        result_341 = _.bind(func, any);
    }
    {
        var result_342;
        result_342 = _.bind(func, any, 42);
        result_342 = _.bind(func, any, 42);
    }
    {
        var result_343;
        result_343 = _.bind(func, any, 42, '');
        result_343 = _.bind(func, any, 42, '');
    }
    {
        var result_344;
        result_344 = _(func).bind(any);
    }
    {
        var result_345;
        result_345 = _(func).bind(any, 42);
    }
    {
        var result_346;
        result_346 = _(func).bind(any, 42, '');
    }
    {
        var result_347;
        result_347 = _(func).chain().bind(any);
    }
    {
        var result_348;
        result_348 = _(func).chain().bind(any, 42);
    }
    {
        var result_349;
        result_349 = _(func).chain().bind(any, 42, '');
    }
})(TestBind || (TestBind = {}));
// _.bindAll
var TestBindAll;
(function (TestBindAll) {
    var object;
    {
        var result_350;
        result_350 = _.bindAll(object);
        result_350 = _.bindAll(object, 'c');
        result_350 = _.bindAll(object, ['b'], 'c');
        result_350 = _.bindAll(object, 'a', ['b'], 'c');
    }
    {
        var result_351;
        result_351 = _(object).bindAll();
        result_351 = _(object).bindAll('c');
        result_351 = _(object).bindAll(['b'], 'c');
        result_351 = _(object).bindAll('a', ['b'], 'c');
    }
    {
        var result_352;
        result_352 = _(object).chain().bindAll();
        result_352 = _(object).chain().bindAll('c');
        result_352 = _(object).chain().bindAll(['b'], 'c');
        result_352 = _(object).chain().bindAll('a', ['b'], 'c');
    }
})(TestBindAll || (TestBindAll = {}));
// _.bindKey
var TestBindKey;
(function (TestBindKey) {
    var object;
    {
        var result_353;
        result_353 = _.bindKey(object, 'foo');
        result_353 = _.bindKey(object, 'foo');
    }
    {
        var result_354;
        result_354 = _.bindKey(object, 'foo', 42);
        result_354 = _.bindKey(object, 'foo', 42);
    }
    {
        var result_355;
        result_355 = _.bindKey(object, 'foo', 42, '');
        result_355 = _.bindKey(object, 'foo', 42, '');
    }
    {
        var result_356;
        result_356 = _(object).bindKey('foo');
    }
    {
        var result_357;
        result_357 = _(object).bindKey('foo', 42);
    }
    {
        var result_358;
        result_358 = _(object).bindKey('foo', 42, '');
    }
    {
        var result_359;
        result_359 = _(object).chain().bindKey('foo');
    }
    {
        var result_360;
        result_360 = _(object).chain().bindKey('foo', 42);
    }
    {
        var result_361;
        result_361 = _(object).chain().bindKey('foo', 42, '');
    }
})(TestBindKey || (TestBindKey = {}));
var createCallbackObj = { name: 'Joe' };
result = _.createCallback('name');
result = _.createCallback(createCallbackObj);
result = _('name').createCallback();
result = _(createCallbackObj).createCallback();
// _.curry
var testCurryFn = function (a, b, c) { return [a, b, c]; };
var curryResult0;
var curryResult1;
var curryResult2;
curryResult0 = _.curry(testCurryFn)(1, 2, 3);
curryResult1 = _.curry(testCurryFn)(1, 2);
curryResult0 = _.curry(testCurryFn)(1, 2)(3);
curryResult0 = _.curry(testCurryFn)(1)(2)(3);
curryResult2 = _.curry(testCurryFn)(1);
curryResult1 = _.curry(testCurryFn)(1)(2);
curryResult0 = _.curry(testCurryFn)(1)(2)(3);
curryResult0 = _.curry(testCurryFn)(1)(2, 3);
curryResult0 = _(testCurryFn).curry().value()(1, 2, 3);
curryResult2 = _(testCurryFn).curry().value()(1);
var curryResult3;
var curryResult4;
var curryResult5;
var curryResult6;
curryResult3 = _.curry(testCurry2)("1", 2, true);
curryResult3 = _.curry(testCurry2)("1", 2)(true);
curryResult3 = _.curry(testCurry2)("1")(2, true);
curryResult3 = _.curry(testCurry2)("1")(2)(true);
curryResult4 = _.curry(testCurry2)("1", 2);
curryResult4 = _.curry(testCurry2)("1")(2);
curryResult5 = _.curry(testCurry2)("1");
curryResult6 = _.curry(testCurry2);
// _.curryRight
var testCurryRightFn = function (a, b, c) { return [a, b, c]; };
curryResult0 = _.curryRight(testCurryRightFn)(1, 2, 3);
curryResult2 = _.curryRight(testCurryRightFn)(1);
curryResult0 = _(testCurryRightFn).curryRight().value()(1, 2, 3);
curryResult2 = _(testCurryRightFn).curryRight().value()(1);
var curryResult7;
var curryResult8;
var curryResult9;
curryResult3 = _.curryRight(testCurry2)(true, 2, "1");
curryResult3 = _.curryRight(testCurry2)(true, 2)("1");
curryResult3 = _.curryRight(testCurry2)(true)(2, "1");
curryResult3 = _.curryRight(testCurry2)(true)(2)("1");
curryResult7 = _.curryRight(testCurry2)(true, 2);
curryResult7 = _.curryRight(testCurry2)(true)(2);
curryResult8 = _.curryRight(testCurry2)(true);
curryResult9 = _.curryRight(testCurry2);
// _.debounce
var TestDebounce;
(function (TestDebounce) {
    var func;
    var options;
    {
        var result_362;
        result_362 = _.debounce(func);
        result_362 = _.debounce(func, 42);
        result_362 = _.debounce(func, 42, options);
    }
    {
        var result_363;
        result_363 = _(func).debounce();
        result_363 = _(func).debounce(42);
        result_363 = _(func).debounce(42, options);
    }
    {
        var result_364;
        result_364 = _(func).chain().debounce();
        result_364 = _(func).chain().debounce(42);
        result_364 = _(func).chain().debounce(42, options);
    }
})(TestDebounce || (TestDebounce = {}));
// _.defer
var TestDefer;
(function (TestDefer) {
    var func;
    {
        var result_365;
        result_365 = _.defer(func);
        result_365 = _.defer(func, any);
        result_365 = _.defer(func, any, any);
        result_365 = _.defer(func, any, any, any);
    }
    {
        var result_366;
        result_366 = _(func).defer();
        result_366 = _(func).defer(any);
        result_366 = _(func).defer(any, any);
        result_366 = _(func).defer(any, any, any);
    }
    {
        var result_367;
        result_367 = _(func).chain().defer();
        result_367 = _(func).chain().defer(any);
        result_367 = _(func).chain().defer(any, any);
        result_367 = _(func).chain().defer(any, any, any);
    }
})(TestDefer || (TestDefer = {}));
// _.delay
var TestDelay;
(function (TestDelay) {
    var func;
    {
        var result_368;
        result_368 = _.delay(func, 1);
        result_368 = _.delay(func, 1, 2);
        result_368 = _.delay(func, 1, 2, '');
    }
    {
        var result_369;
        result_369 = _(func).delay(1);
        result_369 = _(func).delay(1, 2);
        result_369 = _(func).delay(1, 2, '');
    }
    {
        var result_370;
        result_370 = _(func).chain().delay(1);
        result_370 = _(func).chain().delay(1, 2);
        result_370 = _(func).chain().delay(1, 2, '');
    }
})(TestDelay || (TestDelay = {}));
// _.flip
var TestFlip;
(function (TestFlip) {
    var func;
    {
        var result_371;
        result_371 = _.flip(func);
    }
    {
        var result_372;
        result_372 = _(func).flip();
    }
    {
        var result_373;
        result_373 = _(func).chain().flip();
    }
})(TestFlip || (TestFlip = {}));
// _.flow
var TestFlow;
(function (TestFlow) {
    var Fn1;
    var Fn2;
    {
        var result_374;
        result_374 = _.flow(Fn1, Fn2);
        result_374 = _.flow(Fn1, Fn1, Fn2);
        result_374 = _.flow(Fn1, Fn1, Fn1, Fn2);
    }
    {
        var result_375;
        result_375 = _(Fn1).flow(Fn2);
        result_375 = _(Fn1).flow(Fn1, Fn2);
        result_375 = _(Fn1).flow(Fn1, Fn1, Fn2);
    }
    {
        var result_376;
        result_376 = _(Fn1).chain().flow(Fn2);
        result_376 = _(Fn1).chain().flow(Fn1, Fn2);
        result_376 = _(Fn1).chain().flow(Fn1, Fn1, Fn2);
    }
})(TestFlow || (TestFlow = {}));
// _.flowRight
var TestFlowRight;
(function (TestFlowRight) {
    var Fn1;
    var Fn2;
    {
        var result_377;
        result_377 = _.flowRight(Fn1, Fn2);
        result_377 = _.flowRight(Fn1, Fn1, Fn2);
        result_377 = _.flowRight(Fn1, Fn1, Fn1, Fn2);
    }
    {
        var result_378;
        result_378 = _(Fn1).flowRight(Fn2);
        result_378 = _(Fn1).flowRight(Fn1, Fn2);
        result_378 = _(Fn1).flowRight(Fn1, Fn1, Fn2);
    }
    {
        var result_379;
        result_379 = _(Fn1).chain().flowRight(Fn2);
        result_379 = _(Fn1).chain().flowRight(Fn1, Fn2);
        result_379 = _(Fn1).chain().flowRight(Fn1, Fn1, Fn2);
    }
})(TestFlowRight || (TestFlowRight = {}));
// _.memoize
var testMemoizedFunction;
result = testMemoizedFunction.cache;
var testMemoizeFn;
var testMemoizeResolverFn;
result = _.memoize(testMemoizeFn);
result = _.memoize(testMemoizeFn, testMemoizeResolverFn);
result = (_(testMemoizeFn).memoize().value());
result = (_(testMemoizeFn).memoize(testMemoizeResolverFn).value());
// _.overArgs
var TestOverArgs;
(function (TestOverArgs) {
    var func1;
    var func2;
    var transform1;
    var transform2;
    {
        var result_380;
        result_380 = _.overArgs(func1, transform1);
        result_380 = _.overArgs(func1, [transform1]);
    }
    {
        var result_381;
        result_381 = _.overArgs(func2, transform1, transform2);
        result_381 = _.overArgs(func2, [transform1, transform2]);
    }
    {
        var result_382;
        result_382 = _(func1).overArgs(transform1);
        result_382 = _(func1).overArgs([transform1]);
    }
    {
        var result_383;
        result_383 = _(func2).overArgs(transform1, transform2);
        result_383 = _(func2).overArgs([transform1, transform2]);
    }
    {
        var result_384;
        result_384 = _(func1).chain().overArgs(transform1);
        result_384 = _(func1).chain().overArgs([transform1]);
    }
    {
        var result_385;
        result_385 = _(func2).chain().overArgs(transform1, transform2);
        result_385 = _(func2).chain().overArgs([transform1, transform2]);
    }
})(TestOverArgs || (TestOverArgs = {}));
// _.negate
var TestNegate;
(function (TestNegate) {
    var predicate = function (a1, a2) { return a1 > a2; };
    {
        var result_386;
        result_386 = _.negate(predicate);
        result_386 = _.negate(predicate);
    }
    {
        var result_387;
        result_387 = _(predicate).negate();
        result_387 = _(predicate).negate();
    }
    {
        var result_388;
        result_388 = _(predicate).chain().negate();
        result_388 = _(predicate).chain().negate();
    }
})(TestNegate || (TestNegate = {}));
// _.once
var TestOnce;
(function (TestOnce) {
    var func;
    {
        var result_389;
        result_389 = _.once(func);
    }
    {
        var result_390;
        result_390 = _(func).once();
    }
    {
        var result_391;
        result_391 = _(func).chain().once();
    }
})(TestOnce || (TestOnce = {}));
var greetPartial = function (greeting, name) { return greeting + ' ' + name; };
var hi = _.partial(greetPartial, 'hi');
hi('moe');
var defaultsDeep = _.partialRight(_.merge, _.defaults);
var optionsPartialRight = {
    'variable': 'data',
    'imports': { 'jq': $ }
};
defaultsDeep(optionsPartialRight, _.templateSettings);
//_.rearg
var testReargFn = function (a, b, c) { return [a, b, c]; };
result = (_.rearg(testReargFn, 2, 0, 1))('b', 'c', 'a');
result = (_.rearg(testReargFn, [2, 0, 1]))('b', 'c', 'a');
result = (_(testReargFn).rearg(2, 0, 1).value())('b', 'c', 'a');
result = (_(testReargFn).rearg([2, 0, 1]).value())('b', 'c', 'a');
// _.rest
var TestRest;
(function (TestRest) {
    var func;
    {
        var result_392;
        result_392 = _.rest(func);
        result_392 = _.rest(func, 1);
        result_392 = _.rest(func);
        result_392 = _.rest(func, 1);
    }
    {
        var result_393;
        result_393 = _(func).rest();
        result_393 = _(func).rest(1);
    }
    {
        var result_394;
        result_394 = _(func).chain().rest();
        result_394 = _(func).chain().rest(1);
    }
})(TestRest || (TestRest = {}));
//_.spread
var TestSpread;
(function (TestSpread) {
    var func;
    {
        var result_395;
        result_395 = _.spread(func);
        result_395 = _.spread(func);
    }
    {
        var result_396;
        result_396 = _(func).spread();
    }
    {
        var result_397;
        result_397 = _(func).chain().spread();
    }
})(TestSpread || (TestSpread = {}));
// _.throttle
var TestThrottle;
(function (TestThrottle) {
    var func;
    var options;
    {
        var result_398;
        result_398 = _.throttle(func);
        result_398 = _.throttle(func, 42);
        result_398 = _.throttle(func, 42, options);
    }
    {
        var result_399;
        result_399 = _(func).throttle();
        result_399 = _(func).throttle(42);
        result_399 = _(func).throttle(42, options);
    }
    {
        var result_400;
        result_400 = _(func).chain().throttle();
        result_400 = _(func).chain().throttle(42);
        result_400 = _(func).chain().throttle(42, options);
    }
})(TestThrottle || (TestThrottle = {}));
// _.unary
var TestUnary;
(function (TestUnary) {
    var func;
    {
        var result_401;
        result_401 = _.unary(func);
    }
    {
        var result_402;
        result_402 = _(func).unary();
    }
    {
        var result_403;
        result_403 = _(func).chain().unary();
    }
})(TestUnary || (TestUnary = {}));
// _.wrap
var TestWrap;
(function (TestWrap) {
    {
        var value;
        var wrapper;
        var result_404;
        result_404 = _.wrap(value, wrapper);
        result_404 = _.wrap(value, wrapper);
        result_404 = _.wrap(value, wrapper);
    }
    {
        var value;
        var wrapper;
        var result_405;
        result_405 = _(value).wrap(wrapper);
        result_405 = _(value).wrap(wrapper);
    }
    {
        var value;
        var wrapper;
        var result_406;
        result_406 = _(value).wrap(wrapper);
        result_406 = _(value).wrap(wrapper);
    }
    {
        var value;
        var wrapper;
        var result_407;
        result_407 = _(value).wrap(wrapper);
        result_407 = _(value).wrap(wrapper);
    }
    {
        var value;
        var wrapper;
        var result_408;
        result_408 = _(value).chain().wrap(wrapper);
        result_408 = _(value).chain().wrap(wrapper);
    }
    {
        var value;
        var wrapper;
        var result_409;
        result_409 = _(value).chain().wrap(wrapper);
        result_409 = _(value).chain().wrap(wrapper);
    }
    {
        var value;
        var wrapper;
        var result_410;
        result_410 = _(value).chain().wrap(wrapper);
        result_410 = _(value).chain().wrap(wrapper);
    }
})(TestWrap || (TestWrap = {}));
/********
 * Lang *
 ********/
// _.clone
{
    var result_411;
    result_411 = _.clone(42);
    result_411 = _(42).clone();
}
{
    var result_412;
    result_412 = _.clone([]);
    result_412 = _([]).clone();
}
{
    var result_413;
    result_413 = _.clone({ a: { b: 2 } });
    result_413 = _({ a: { b: 2 } }).clone();
}
// _.cloneDeep
{
    var result_414;
    result_414 = _.cloneDeep(42);
    result_414 = _(42).cloneDeep();
}
{
    var result_415;
    result_415 = _.cloneDeep([]);
    result_415 = _([]).cloneDeep();
}
{
    var result_416;
    result_416 = _.cloneDeep({ a: { b: 2 } });
    result_416 = _({ a: { b: 2 } }).cloneDeep();
}
var testCloneCustomizerFn;
{
    var result_417;
    result_417 = _.clone(42, testCloneCustomizerFn);
    result_417 = _(42).clone(testCloneCustomizerFn);
}
{
    var result_418;
    result_418 = _.clone([], testCloneCustomizerFn);
    result_418 = _([]).clone(testCloneCustomizerFn);
}
{
    var result_419;
    result_419 = _.clone({ a: { b: 2 } }, testCloneCustomizerFn);
    result_419 = _({ a: { b: 2 } }).clone(testCloneCustomizerFn);
}
var testCloneDeepCustomizerFn;
{
    var result_420;
    result_420 = _.cloneDeep(42, testCloneDeepCustomizerFn);
    result_420 = _(42).cloneDeep(testCloneDeepCustomizerFn);
}
{
    var result_421;
    result_421 = _.cloneDeep([], testCloneDeepCustomizerFn);
    result_421 = _([]).cloneDeep(testCloneDeepCustomizerFn);
}
{
    var result_422;
    result_422 = _.cloneDeep({ a: { b: 2 } }, testCloneDeepCustomizerFn);
    result_422 = _({ a: { b: 2 } }).cloneDeep(testCloneDeepCustomizerFn);
}
// _.eq
var TestEq;
(function (TestEq) {
    var customizer;
    {
        var result_423;
        result_423 = _.eq(any, any);
        result_423 = _(any).eq(any);
    }
    {
        var result_424;
        result_424 = _(any).chain().eq(any);
    }
})(TestEq || (TestEq = {}));
// _.gt
var TestGt;
(function (TestGt) {
    {
        var result_425;
        result_425 = _.gt(any, any);
        result_425 = _(1).gt(any);
        result_425 = _([]).gt(any);
        result_425 = _({}).gt(any);
    }
    {
        var result_426;
        result_426 = _(1).chain().gt(any);
        result_426 = _([]).chain().gt(any);
        result_426 = _({}).chain().gt(any);
    }
})(TestGt || (TestGt = {}));
// _.gte
var TestGte;
(function (TestGte) {
    {
        var result_427;
        result_427 = _.gte(any, any);
        result_427 = _(1).gte(any);
        result_427 = _([]).gte(any);
        result_427 = _({}).gte(any);
    }
    {
        var result_428;
        result_428 = _(1).chain().gte(any);
        result_428 = _([]).chain().gte(any);
        result_428 = _({}).chain().gte(any);
    }
})(TestGte || (TestGte = {}));
// _.isArguments
var TestisArguments;
(function (TestisArguments) {
    {
        var value;
        if (_.isArguments(value)) {
            var result_429 = value;
        }
        else {
            var result_430 = value;
        }
    }
    {
        var result_431;
        result_431 = _.isArguments(any);
        result_431 = _(1).isArguments();
        result_431 = _([]).isArguments();
        result_431 = _({}).isArguments();
    }
    {
        var result_432;
        result_432 = _(1).chain().isArguments();
        result_432 = _([]).chain().isArguments();
        result_432 = _({}).chain().isArguments();
    }
})(TestisArguments || (TestisArguments = {}));
// _.isArray
var TestIsArray;
(function (TestIsArray) {
    {
        var value;
        if (_.isArray(value)) {
            var result_433 = value;
        }
        else {
            if (_.isArray(value)) {
                var result_434 = value;
            }
            else {
                var result_435 = value;
            }
        }
    }
    {
        var result_436;
        result_436 = _.isArray(any);
        result_436 = _(1).isArray();
        result_436 = _([]).isArray();
        result_436 = _({}).isArray();
    }
    {
        var result_437;
        result_437 = _(1).chain().isArray();
        result_437 = _([]).chain().isArray();
        result_437 = _({}).chain().isArray();
    }
})(TestIsArray || (TestIsArray = {}));
// _.isArrayLike
var TestIsArrayLike;
(function (TestIsArrayLike) {
    {
        var value;
        if (_.isArrayLike(value)) {
            var result_438 = value;
        }
        else {
            if (_.isArrayLike(value)) {
                var result_439 = value;
            }
            else {
                var result_440 = value;
            }
        }
    }
    {
        var result_441;
        result_441 = _.isArrayLike(any);
        result_441 = _(1).isArrayLike();
        result_441 = _([]).isArrayLike();
        result_441 = _({}).isArrayLike();
    }
    {
        var result_442;
        result_442 = _(1).chain().isArrayLike();
        result_442 = _([]).chain().isArrayLike();
        result_442 = _({}).chain().isArrayLike();
    }
})(TestIsArrayLike || (TestIsArrayLike = {}));
// _.isArrayLikeObject
var TestIsArrayLikeObject;
(function (TestIsArrayLikeObject) {
    {
        var value;
        if (_.isArrayLikeObject(value)) {
            var result_443 = value;
        }
        else {
            if (_.isArrayLikeObject(value)) {
                var result_444 = value;
            }
            else {
                var result_445 = value;
            }
        }
    }
    {
        var result_446;
        result_446 = _.isArrayLikeObject(any);
        result_446 = _(1).isArrayLikeObject();
        result_446 = _([]).isArrayLikeObject();
        result_446 = _({}).isArrayLikeObject();
    }
    {
        var result_447;
        result_447 = _(1).chain().isArrayLikeObject();
        result_447 = _([]).chain().isArrayLikeObject();
        result_447 = _({}).chain().isArrayLikeObject();
    }
})(TestIsArrayLikeObject || (TestIsArrayLikeObject = {}));
// _.isBoolean
var TestIsBoolean;
(function (TestIsBoolean) {
    {
        var value;
        if (_.isBoolean(value)) {
            var result_448 = value;
        }
        else {
            var result_449 = value;
        }
    }
    {
        var result_450;
        result_450 = _.isBoolean(any);
        result_450 = _(1).isBoolean();
        result_450 = _([]).isBoolean();
        result_450 = _({}).isBoolean();
    }
    {
        var result_451;
        result_451 = _(1).chain().isBoolean();
        result_451 = _([]).chain().isBoolean();
        result_451 = _({}).chain().isBoolean();
    }
})(TestIsBoolean || (TestIsBoolean = {}));
// _.isDate
var TestIsBoolean;
(function (TestIsBoolean) {
    {
        var value;
        if (_.isDate(value)) {
            var result_452 = value;
        }
        else {
            var result_453 = value;
        }
    }
    {
        var result_454;
        result_454 = _.isDate(any);
        result_454 = _(42).isDate();
        result_454 = _([]).isDate();
        result_454 = _({}).isDate();
    }
    {
        var result_455;
        result_455 = _(42).chain().isDate();
        result_455 = _([]).chain().isDate();
        result_455 = _({}).chain().isDate();
    }
})(TestIsBoolean || (TestIsBoolean = {}));
// _.isElement
var TestIsElement;
(function (TestIsElement) {
    {
        var result_456;
        result_456 = _.isElement(any);
        result_456 = _(42).isElement();
        result_456 = _([]).isElement();
        result_456 = _({}).isElement();
    }
    {
        var result_457;
        result_457 = _(42).chain().isElement();
        result_457 = _([]).chain().isElement();
        result_457 = _({}).chain().isElement();
    }
})(TestIsElement || (TestIsElement = {}));
// _.isEmpty
result = _.isEmpty([1, 2, 3]);
result = _.isEmpty({});
result = _.isEmpty('');
result = _([1, 2, 3]).isEmpty();
result = _({}).isEmpty();
result = _('').isEmpty();
// _.isEqual
var TestIsEqual;
(function (TestIsEqual) {
    var customizer;
    {
        var result_458;
        result_458 = _.isEqual(any, any);
        result_458 = _(any).isEqual(any);
    }
    {
        var result_459;
        result_459 = _(any).chain().isEqual(any);
    }
})(TestIsEqual || (TestIsEqual = {}));
// _.isEqualWith
var TestIsEqualWith;
(function (TestIsEqualWith) {
    var customizer;
    {
        var result_460;
        result_460 = _.isEqualWith(any, any, customizer);
        result_460 = _(any).isEqualWith(any, customizer);
    }
    {
        var result_461;
        result_461 = _(any).chain().isEqualWith(any, customizer);
    }
})(TestIsEqualWith || (TestIsEqualWith = {}));
// _.isError
var TestIsError;
(function (TestIsError) {
    {
        var value;
        if (_.isError(value)) {
            var result_462 = value;
        }
        else {
            var result_463 = value;
        }
    }
    {
        var CustomError = (function (_super) {
            __extends(CustomError, _super);
            function CustomError() {
                _super.apply(this, arguments);
            }
            return CustomError;
        })(Error);
        var value;
        if (_.isError(value)) {
            var result_464 = value;
        }
        else {
            var result_465 = value;
        }
    }
    {
        var result_466;
        result_466 = _.isError(any);
        result_466 = _(1).isError();
        result_466 = _([]).isError();
        result_466 = _({}).isError();
    }
    {
        var result_467;
        result_467 = _(1).chain().isError();
        result_467 = _([]).chain().isError();
        result_467 = _({}).chain().isError();
    }
})(TestIsError || (TestIsError = {}));
// _.isFinite
var TestIsFinite;
(function (TestIsFinite) {
    {
        var result_468;
        result_468 = _.isFinite(any);
        result_468 = _(1).isFinite();
        result_468 = _([]).isFinite();
        result_468 = _({}).isFinite();
    }
    {
        var result_469;
        result_469 = _(1).chain().isFinite();
        result_469 = _([]).chain().isFinite();
        result_469 = _({}).chain().isFinite();
    }
})(TestIsFinite || (TestIsFinite = {}));
// _.isFunction
var TestIsFunction;
(function (TestIsFunction) {
    {
        var value;
        if (_.isFunction(value)) {
            var result_470 = value;
        }
        else {
            var result_471 = value;
        }
    }
    {
        var result_472;
        result_472 = _.isFunction(any);
        result_472 = _(1).isFunction();
        result_472 = _([]).isFunction();
        result_472 = _({}).isFunction();
    }
    {
        var result_473;
        result_473 = _(1).chain().isFunction();
        result_473 = _([]).chain().isFunction();
        result_473 = _({}).chain().isFunction();
    }
})(TestIsFunction || (TestIsFunction = {}));
// _.isInteger
var TestIsInteger;
(function (TestIsInteger) {
    {
        var result_474;
        result_474 = _.isInteger(any);
        result_474 = _(1).isInteger();
        result_474 = _([]).isInteger();
        result_474 = _({}).isInteger();
    }
    {
        var result_475;
        result_475 = _(1).chain().isInteger();
        result_475 = _([]).chain().isInteger();
        result_475 = _({}).chain().isInteger();
    }
})(TestIsInteger || (TestIsInteger = {}));
// _.isLength
var TestIsLength;
(function (TestIsLength) {
    {
        var result_476;
        result_476 = _.isLength(any);
        result_476 = _(1).isLength();
        result_476 = _([]).isLength();
        result_476 = _({}).isLength();
    }
    {
        var result_477;
        result_477 = _(1).chain().isLength();
        result_477 = _([]).chain().isLength();
        result_477 = _({}).chain().isLength();
    }
})(TestIsLength || (TestIsLength = {}));
// _.isMatch
var TestIsMatch;
(function (TestIsMatch) {
    var testIsMatchCustiomizerFn;
    var result;
    result = _.isMatch({}, {});
    result = _({}).isMatch({});
})(TestIsMatch || (TestIsMatch = {}));
// _.isMatchWith
var TestIsMatchWith;
(function (TestIsMatchWith) {
    var testIsMatchCustiomizerFn;
    var result;
    result = _.isMatchWith({}, {}, testIsMatchCustiomizerFn);
    result = _({}).isMatchWith({}, testIsMatchCustiomizerFn);
})(TestIsMatchWith || (TestIsMatchWith = {}));
// _.isNaN
var TestIsNaN;
(function (TestIsNaN) {
    {
        var result_478;
        result_478 = _.isNaN(any);
        result_478 = _(1).isNaN();
        result_478 = _([]).isNaN();
        result_478 = _({}).isNaN();
    }
    {
        var result_479;
        result_479 = _(1).chain().isNaN();
        result_479 = _([]).chain().isNaN();
        result_479 = _({}).chain().isNaN();
    }
})(TestIsNaN || (TestIsNaN = {}));
// _.isNative
var TestIsNative;
(function (TestIsNative) {
    {
        var value;
        if (_.isNative(value)) {
            var result_480 = value;
        }
        else {
            var result_481 = value;
        }
    }
    {
        var result_482;
        result_482 = _.isNative(any);
        result_482 = _(1).isNative();
        result_482 = _([]).isNative();
        result_482 = _({}).isNative();
    }
    {
        var result_483;
        result_483 = _(1).chain().isNative();
        result_483 = _([]).chain().isNative();
        result_483 = _({}).chain().isNative();
    }
})(TestIsNative || (TestIsNative = {}));
// _.isNil
var TestIsNil;
(function (TestIsNil) {
    {
        var result_484;
        result_484 = _.isNil(any);
        result_484 = _(1).isNil();
        result_484 = _([]).isNil();
        result_484 = _({}).isNil();
    }
    {
        var result_485;
        result_485 = _(1).chain().isNil();
        result_485 = _([]).chain().isNil();
        result_485 = _({}).chain().isNil();
    }
})(TestIsNil || (TestIsNil = {}));
// _.isNull
var TestIsNull;
(function (TestIsNull) {
    {
        var result_486;
        result_486 = _.isNull(any);
        result_486 = _(1).isNull();
        result_486 = _([]).isNull();
        result_486 = _({}).isNull();
    }
    {
        var result_487;
        result_487 = _(1).chain().isNull();
        result_487 = _([]).chain().isNull();
        result_487 = _({}).chain().isNull();
    }
})(TestIsNull || (TestIsNull = {}));
// _.isNumber
var TestIsNumber;
(function (TestIsNumber) {
    {
        var value;
        if (_.isNumber(value)) {
            var result_488 = value;
        }
        else {
            var result_489 = value;
        }
    }
    {
        var result_490;
        result_490 = _.isNumber(any);
        result_490 = _(1).isNumber();
        result_490 = _([]).isNumber();
        result_490 = _({}).isNumber();
    }
    {
        var result_491;
        result_491 = _(1).chain().isNumber();
        result_491 = _([]).chain().isNumber();
        result_491 = _({}).chain().isNumber();
    }
})(TestIsNumber || (TestIsNumber = {}));
// _.isObject
var TestIsObject;
(function (TestIsObject) {
    {
        var result_492;
        result_492 = _.isObject(any);
        result_492 = _(1).isObject();
        result_492 = _([]).isObject();
        result_492 = _({}).isObject();
    }
    {
        var result_493;
        result_493 = _(1).chain().isObject();
        result_493 = _([]).chain().isObject();
        result_493 = _({}).chain().isObject();
    }
})(TestIsObject || (TestIsObject = {}));
// _.isObjectLike
var TestIsObjectLike;
(function (TestIsObjectLike) {
    {
        var result_494;
        result_494 = _.isObjectLike(any);
        result_494 = _(1).isObjectLike();
        result_494 = _([]).isObjectLike();
        result_494 = _({}).isObjectLike();
    }
    {
        var result_495;
        result_495 = _(1).chain().isObjectLike();
        result_495 = _([]).chain().isObjectLike();
        result_495 = _({}).chain().isObjectLike();
    }
})(TestIsObjectLike || (TestIsObjectLike = {}));
// _.isPlainObject
var TestIsPlainObject;
(function (TestIsPlainObject) {
    {
        var result_496;
        result_496 = _.isPlainObject(any);
        result_496 = _(1).isPlainObject();
        result_496 = _([]).isPlainObject();
        result_496 = _({}).isPlainObject();
    }
    {
        var result_497;
        result_497 = _(1).chain().isPlainObject();
        result_497 = _([]).chain().isPlainObject();
        result_497 = _({}).chain().isPlainObject();
    }
})(TestIsPlainObject || (TestIsPlainObject = {}));
// _.isRegExp
var TestIsRegExp;
(function (TestIsRegExp) {
    {
        var value;
        if (_.isRegExp(value)) {
            var result_498 = value;
        }
        else {
            var result_499 = value;
        }
    }
    {
        var result_500;
        result_500 = _.isRegExp(any);
        result_500 = _(1).isRegExp();
        result_500 = _([]).isRegExp();
        result_500 = _({}).isRegExp();
    }
    {
        var result_501;
        result_501 = _(1).chain().isRegExp();
        result_501 = _([]).chain().isRegExp();
        result_501 = _({}).chain().isRegExp();
    }
})(TestIsRegExp || (TestIsRegExp = {}));
// _.isSafeInteger
var TestIsSafeInteger;
(function (TestIsSafeInteger) {
    {
        var result_502;
        result_502 = _.isSafeInteger(any);
        result_502 = _(1).isSafeInteger();
        result_502 = _([]).isSafeInteger();
        result_502 = _({}).isSafeInteger();
    }
    {
        var result_503;
        result_503 = _(1).chain().isSafeInteger();
        result_503 = _([]).chain().isSafeInteger();
        result_503 = _({}).chain().isSafeInteger();
    }
})(TestIsSafeInteger || (TestIsSafeInteger = {}));
// _.isString
var TestIsString;
(function (TestIsString) {
    {
        var value;
        if (_.isString(value)) {
            var result_504 = value;
        }
        else {
            var result_505 = value;
        }
    }
    {
        var result_506;
        result_506 = _.isString(any);
        result_506 = _(1).isString();
        result_506 = _([]).isString();
        result_506 = _({}).isString();
    }
    {
        var result_507;
        result_507 = _(1).chain().isString();
        result_507 = _([]).chain().isString();
        result_507 = _({}).chain().isString();
    }
})(TestIsString || (TestIsString = {}));
// _.isSymbol
var TestIsSymbol;
(function (TestIsSymbol) {
    {
        var result_508;
        result_508 = _.isSymbol(any);
        result_508 = _(1).isSymbol();
        result_508 = _([]).isSymbol();
        result_508 = _({}).isSymbol();
    }
    {
        var result_509;
        result_509 = _(1).chain().isSymbol();
        result_509 = _([]).chain().isSymbol();
        result_509 = _({}).chain().isSymbol();
    }
})(TestIsSymbol || (TestIsSymbol = {}));
// _.isTypedArray
var TestIsTypedArray;
(function (TestIsTypedArray) {
    {
        var result_510;
        result_510 = _.isTypedArray([]);
        result_510 = _([]).isTypedArray();
    }
    {
        var result_511;
        result_511 = _([]).chain().isTypedArray();
    }
})(TestIsTypedArray || (TestIsTypedArray = {}));
// _.isUndefined
var TestIsUndefined;
(function (TestIsUndefined) {
    {
        var result_512;
        result_512 = _.isUndefined(any);
        result_512 = _(1).isUndefined();
        result_512 = _([]).isUndefined();
        result_512 = _({}).isUndefined();
    }
    {
        var result_513;
        result_513 = _(1).chain().isUndefined();
        result_513 = _([]).chain().isUndefined();
        result_513 = _({}).chain().isUndefined();
    }
})(TestIsUndefined || (TestIsUndefined = {}));
// _.lt
var TestLt;
(function (TestLt) {
    {
        var result_514;
        result_514 = _.lt(any, any);
        result_514 = _(1).lt(any);
        result_514 = _([]).lt(any);
        result_514 = _({}).lt(any);
    }
    {
        var result_515;
        result_515 = _(1).chain().lt(any);
        result_515 = _([]).chain().lt(any);
        result_515 = _({}).chain().lt(any);
    }
})(TestLt || (TestLt = {}));
// _.lte
var TestLte;
(function (TestLte) {
    {
        var result_516;
        result_516 = _.lte(any, any);
        result_516 = _(1).lte(any);
        result_516 = _([]).lte(any);
        result_516 = _({}).lte(any);
    }
    {
        var result_517;
        result_517 = _(1).chain().lte(any);
        result_517 = _([]).chain().lte(any);
        result_517 = _({}).chain().lte(any);
    }
})(TestLte || (TestLte = {}));
// _.toArray
var TestToArray;
(function (TestToArray) {
    var array;
    var list;
    var dictionary;
    var numericDictionary;
    {
        var result_518;
        result_518 = _.toArray('');
        result_518 = _.toArray('');
    }
    {
        var result_519;
        result_519 = _.toArray(array);
        result_519 = _.toArray(list);
        result_519 = _.toArray(dictionary);
        result_519 = _.toArray(numericDictionary);
        result_519 = _.toArray(array);
        result_519 = _.toArray(list);
        result_519 = _.toArray(dictionary);
        result_519 = _.toArray(numericDictionary);
    }
    {
        var result_520;
        result_520 = _.toArray();
        result_520 = _.toArray(42);
        result_520 = _.toArray(true);
    }
    {
        var result_521;
        result_521 = _(array).toArray();
        result_521 = _(list).toArray();
        result_521 = _(dictionary).toArray();
        result_521 = _(numericDictionary).toArray();
    }
    {
        var result_522;
        result_522 = _(array).chain().toArray();
        result_522 = _(list).chain().toArray();
        result_522 = _(dictionary).chain().toArray();
        result_522 = _(numericDictionary).chain().toArray();
    }
})(TestToArray || (TestToArray = {}));
// _.toPlainObject
var TestToPlainObject;
(function (TestToPlainObject) {
    {
        var result_523;
        result_523 = _.toPlainObject();
        result_523 = _.toPlainObject(true);
        result_523 = _.toPlainObject(1);
        result_523 = _.toPlainObject('a');
        result_523 = _.toPlainObject([]);
        result_523 = _.toPlainObject({});
    }
    {
        var result_524;
        result_524 = _(true).toPlainObject();
        result_524 = _(1).toPlainObject();
        result_524 = _('a').toPlainObject();
        result_524 = _([1]).toPlainObject();
        result_524 = _([]).toPlainObject();
        result_524 = _({}).toPlainObject();
    }
})(TestToPlainObject || (TestToPlainObject = {}));
// _.toInteger
var TestToInteger;
(function (TestToInteger) {
    {
        var result_525;
        result_525 = _.toInteger(true);
        result_525 = _.toInteger(1);
        result_525 = _.toInteger('a');
        result_525 = _.toInteger([]);
        result_525 = _.toInteger({});
    }
    {
        var result_526;
        result_526 = _(true).toInteger();
        result_526 = _(1).toInteger();
        result_526 = _('a').toInteger();
        result_526 = _([1]).toInteger();
        result_526 = _([]).toInteger();
        result_526 = _({}).toInteger();
    }
})(TestToInteger || (TestToInteger = {}));
// _.toLength
var TestToLength;
(function (TestToLength) {
    {
        var result_527;
        result_527 = _.toLength(true);
        result_527 = _.toLength(1);
        result_527 = _.toLength('a');
        result_527 = _.toLength([]);
        result_527 = _.toLength({});
    }
    {
        var result_528;
        result_528 = _(true).toLength();
        result_528 = _(1).toLength();
        result_528 = _('a').toLength();
        result_528 = _([1]).toLength();
        result_528 = _([]).toLength();
        result_528 = _({}).toLength();
    }
})(TestToLength || (TestToLength = {}));
// _.toNumber
var TestToNumber;
(function (TestToNumber) {
    {
        var result_529;
        result_529 = _.toNumber(true);
        result_529 = _.toNumber(1);
        result_529 = _.toNumber('a');
        result_529 = _.toNumber([]);
        result_529 = _.toNumber({});
    }
    {
        var result_530;
        result_530 = _(true).toNumber();
        result_530 = _(1).toNumber();
        result_530 = _('a').toNumber();
        result_530 = _([1]).toNumber();
        result_530 = _([]).toNumber();
        result_530 = _({}).toNumber();
    }
})(TestToNumber || (TestToNumber = {}));
// _.toSafeInteger
var TestToSafeInteger;
(function (TestToSafeInteger) {
    {
        var result_531;
        result_531 = _.toSafeInteger(true);
        result_531 = _.toSafeInteger(1);
        result_531 = _.toSafeInteger('a');
        result_531 = _.toSafeInteger([]);
        result_531 = _.toSafeInteger({});
    }
    {
        var result_532;
        result_532 = _(true).toSafeInteger();
        result_532 = _(1).toSafeInteger();
        result_532 = _('a').toSafeInteger();
        result_532 = _([1]).toSafeInteger();
        result_532 = _([]).toSafeInteger();
        result_532 = _({}).toSafeInteger();
    }
})(TestToSafeInteger || (TestToSafeInteger = {}));
/********
 * Math *
 ********/
// _.add
var TestAdd;
(function (TestAdd) {
    {
        var result_533;
        result_533 = _.add(1, 1);
        result_533 = _(1).add(1);
    }
    {
        var result_534;
        result_534 = _(1).chain().add(1);
    }
})(TestAdd || (TestAdd = {}));
// _.ceil
var TestCeil;
(function (TestCeil) {
    {
        var result_535;
        result_535 = _.ceil(6.004);
        result_535 = _.ceil(6.004, 2);
        result_535 = _(6.004).ceil();
        result_535 = _(6.004).ceil(2);
    }
    {
        var result_536;
        result_536 = _(6.004).chain().ceil();
        result_536 = _(6.004).chain().ceil(2);
    }
})(TestCeil || (TestCeil = {}));
// _.floor
var TestFloor;
(function (TestFloor) {
    {
        var result_537;
        result_537 = _.floor(4.006);
        result_537 = _.floor(0.046, 2);
        result_537 = _.floor(4060, -2);
        result_537 = _(4.006).floor();
        result_537 = _(0.046).floor(2);
        result_537 = _(4060).floor(-2);
    }
    {
        var result_538;
        result_538 = _(4.006).chain().floor();
        result_538 = _(0.046).chain().floor(2);
        result_538 = _(4060).chain().floor(-2);
    }
})(TestFloor || (TestFloor = {}));
// _.max
var TestMax;
(function (TestMax) {
    var array;
    var list;
    var result;
    result = _.max(array);
    result = _.max(list);
    result = _(array).max();
    result = _(list).max();
})(TestMax || (TestMax = {}));
// _.maxBy
var TestMaxBy;
(function (TestMaxBy) {
    var array;
    var list;
    var dictionary;
    var listIterator;
    var dictionaryIterator;
    var result;
    result = _.maxBy(array);
    result = _.maxBy(array, listIterator);
    result = _.maxBy(array, '');
    result = _.maxBy(array, { a: 42 });
    result = _.maxBy(list);
    result = _.maxBy(list, listIterator);
    result = _.maxBy(list, '');
    result = _.maxBy(list, { a: 42 });
    result = _.maxBy(dictionary);
    result = _.maxBy(dictionary, dictionaryIterator);
    result = _.maxBy(dictionary, '');
    result = _.maxBy(dictionary, { a: 42 });
    result = _(array).maxBy();
    result = _(array).maxBy(listIterator);
    result = _(array).maxBy('');
    result = _(array).maxBy({ a: 42 });
    result = _(list).maxBy();
    result = _(list).maxBy(listIterator);
    result = _(list).maxBy('');
    result = _(list).maxBy({ a: 42 });
    result = _(dictionary).maxBy();
    result = _(dictionary).maxBy(dictionaryIterator);
    result = _(dictionary).maxBy('');
    result = _(dictionary).maxBy({ a: 42 });
})(TestMaxBy || (TestMaxBy = {}));
// _.mean
var TestMean;
(function (TestMean) {
    var array;
    var result;
    result = _.mean(array);
    result = _(array).mean();
})(TestMean || (TestMean = {}));
// _.min
var TestMin;
(function (TestMin) {
    var array;
    var list;
    var result;
    result = _.min(array);
    result = _.min(list);
    result = _(array).min();
    result = _(list).min();
})(TestMin || (TestMin = {}));
// _.minBy
var TestMinBy;
(function (TestMinBy) {
    var array;
    var list;
    var dictionary;
    var listIterator;
    var dictionaryIterator;
    var result;
    result = _.minBy(array);
    result = _.minBy(array, listIterator);
    result = _.minBy(array, '');
    result = _.minBy(array, { a: 42 });
    result = _.minBy(list);
    result = _.minBy(list, listIterator);
    result = _.minBy(list, '');
    result = _.minBy(list, { a: 42 });
    result = _.minBy(dictionary);
    result = _.minBy(dictionary, dictionaryIterator);
    result = _.minBy(dictionary, '');
    result = _.minBy(dictionary, { a: 42 });
    result = _(array).minBy();
    result = _(array).minBy(listIterator);
    result = _(array).minBy('');
    result = _(array).minBy({ a: 42 });
    result = _(list).minBy();
    result = _(list).minBy(listIterator);
    result = _(list).minBy('');
    result = _(list).minBy({ a: 42 });
    result = _(dictionary).minBy();
    result = _(dictionary).minBy(dictionaryIterator);
    result = _(dictionary).minBy('');
    result = _(dictionary).minBy({ a: 42 });
})(TestMinBy || (TestMinBy = {}));
// _.round
var TestRound;
(function (TestRound) {
    {
        var result_539;
        result_539 = _.round(4.006);
        result_539 = _.round(4.006, 2);
        result_539 = _(4.006).round();
        result_539 = _(4.006).round(2);
    }
    {
        var result_540;
        result_540 = _(4.006).chain().round();
        result_540 = _(4.006).chain().round(2);
    }
})(TestRound || (TestRound = {}));
// _.sum
var TestSum;
(function (TestSum) {
    var array;
    var list;
    var dictionary;
    var listIterator;
    var dictionaryIterator;
    {
        var result_541;
        result_541 = _.sum(array);
        result_541 = _.sum(array);
        result_541 = _.sum(list);
        result_541 = _.sum(list);
        result_541 = _(array).sum();
        result_541 = _(list).sum();
        result_541 = _(dictionary).sum();
    }
    {
        var result_542;
        result_542 = _(array).chain().sum();
        result_542 = _(list).chain().sum();
        result_542 = _(dictionary).chain().sum();
    }
})(TestSum || (TestSum = {}));
// _.sumBy
var TestSumBy;
(function (TestSumBy) {
    var array;
    var list;
    var dictionary;
    var listIterator;
    var dictionaryIterator;
    {
        var result_543;
        result_543 = _.sumBy(array);
        result_543 = _.sumBy(array, listIterator);
        result_543 = _.sumBy(array, '');
        result_543 = _.sumBy(list);
        result_543 = _.sumBy(list, listIterator);
        result_543 = _.sumBy(list, '');
        result_543 = _.sumBy(dictionary);
        result_543 = _.sumBy(dictionary, dictionaryIterator);
        result_543 = _.sumBy(dictionary, '');
        result_543 = _(array).sumBy(listIterator);
        result_543 = _(array).sumBy('');
        result_543 = _(list).sumBy(listIterator);
        result_543 = _(list).sumBy('');
        result_543 = _(dictionary).sumBy(dictionaryIterator);
        result_543 = _(dictionary).sumBy('');
    }
    {
        var result_544;
        result_544 = _(array).chain().sumBy(listIterator);
        result_544 = _(array).chain().sumBy('');
        result_544 = _(list).chain().sumBy(listIterator);
        result_544 = _(list).chain().sumBy('');
        result_544 = _(dictionary).chain().sumBy(dictionaryIterator);
        result_544 = _(dictionary).chain().sumBy('');
    }
})(TestSumBy || (TestSumBy = {}));
/**********
 * Number *
 **********/
// _.subtract
var subtract;
(function (subtract) {
    {
        var result_545;
        result_545 = _.subtract(3, 2);
        result_545 = _(3).subtract(2);
    }
    {
        var result_546;
        result_546 = _(3).chain().subtract(2);
    }
})(subtract || (subtract = {}));
// _.clamp
var TestInClamp;
(function (TestInClamp) {
    {
        var result_547;
        result_547 = _.clamp(3, 2, 4);
        result_547 = _(3).clamp(2, 4);
    }
    {
        var result_548;
        result_548 = _(3).chain().clamp(2, 4);
    }
})(TestInClamp || (TestInClamp = {}));
// _.inRange
var TestInRange;
(function (TestInRange) {
    {
        var result_549;
        result_549 = _.inRange(3, 2, 4);
        result_549 = _.inRange(4, 8);
        result_549 = _(3).inRange(2, 4);
        result_549 = _(4).inRange(8);
    }
    {
        var result_550;
        result_550 = _(3).chain().inRange(2, 4);
        result_550 = _(4).chain().inRange(8);
    }
})(TestInRange || (TestInRange = {}));
// _.random
var TestRandom;
(function (TestRandom) {
    {
        var result_551;
        result_551 = _.random();
        result_551 = _.random(1);
        result_551 = _.random(1, 2);
        result_551 = _.random(1, 2, true);
        result_551 = _.random(1, true);
        result_551 = _.random(true);
        result_551 = _(1).random();
        result_551 = _(1).random(2);
        result_551 = _(1).random(2, true);
        result_551 = _(1).random(true);
        result_551 = _(true).random();
    }
    {
        var result_552;
        result_552 = _(1).chain().random();
        result_552 = _(1).chain().random(2);
        result_552 = _(1).chain().random(2, true);
        result_552 = _(1).chain().random(true);
        result_552 = _(true).chain().random();
    }
})(TestRandom || (TestRandom = {}));
/**********
 * Object *
 **********/
// _.assign
var TestAssign;
(function (TestAssign) {
    ;
    ;
    ;
    ;
    ;
    ;
    var obj;
    var s1;
    var s2;
    var s3;
    var s4;
    var s5;
    var customizer;
    {
        var result_553;
        result_553 = _.assign(obj);
    }
    {
        var result_554;
        result_554 = _.assign(obj, s1);
    }
    {
        var result_555;
        result_555 = _.assign(obj, s1, s2);
    }
    {
        var result_556;
        result_556 = _.assign(obj, s1, s2, s3);
    }
    {
        var result_557;
        result_557 = _.assign(obj, s1, s2, s3, s4);
    }
    {
        var result_558;
        result_558 = _.assign(obj, s1, s2, s3, s4, s5);
    }
    {
        var result_559;
        result_559 = _(obj).assign();
    }
    {
        var result_560;
        result_560 = _(obj).assign(s1);
    }
    {
        var result_561;
        result_561 = _(obj).assign(s1, s2);
    }
    {
        var result_562;
        result_562 = _(obj).assign(s1, s2, s3);
    }
    {
        var result_563;
        result_563 = _(obj).assign(s1, s2, s3, s4);
    }
    {
        var result_564;
        result_564 = _(obj).assign(s1, s2, s3, s4, s5);
    }
    {
        var result_565;
        result_565 = _(obj).chain().assign();
    }
    {
        var result_566;
        result_566 = _(obj).chain().assign(s1);
    }
    {
        var result_567;
        result_567 = _(obj).chain().assign(s1, s2);
    }
    {
        var result_568;
        result_568 = _(obj).chain().assign(s1, s2, s3);
    }
    {
        var result_569;
        result_569 = _(obj).chain().assign(s1, s2, s3, s4);
    }
    {
        var result_570;
        result_570 = _(obj).chain().assign(s1, s2, s3, s4, s5);
    }
})(TestAssign || (TestAssign = {}));
// _.assignWith
var TestAssignWith;
(function (TestAssignWith) {
    ;
    ;
    ;
    ;
    ;
    ;
    var obj;
    var s1;
    var s2;
    var s3;
    var s4;
    var s5;
    var customizer;
    {
        var result_571;
        result_571 = _.assignWith(obj);
    }
    {
        var result_572;
        result_572 = _.assignWith(obj, s1, customizer);
    }
    {
        var result_573;
        result_573 = _.assignWith(obj, s1, s2, customizer);
    }
    {
        var result_574;
        result_574 = _.assignWith(obj, s1, s2, s3, customizer);
    }
    {
        var result_575;
        result_575 = _.assignWith(obj, s1, s2, s3, s4, customizer);
    }
    {
        var result_576;
        result_576 = _.assignWith(obj, s1, s2, s3, s4, s5, customizer);
    }
    {
        var result_577;
        result_577 = _(obj).assignWith();
    }
    {
        var result_578;
        result_578 = _(obj).assignWith(s1, customizer);
    }
    {
        var result_579;
        result_579 = _(obj).assignWith(s1, s2, customizer);
    }
    {
        var result_580;
        result_580 = _(obj).assignWith(s1, s2, s3, customizer);
    }
    {
        var result_581;
        result_581 = _(obj).assignWith(s1, s2, s3, s4, customizer);
    }
    {
        var result_582;
        result_582 = _(obj).assignWith(s1, s2, s3, s4, s5, customizer);
    }
    {
        var result_583;
        result_583 = _(obj).chain().assignWith();
    }
    {
        var result_584;
        result_584 = _(obj).chain().assignWith(s1, customizer);
    }
    {
        var result_585;
        result_585 = _(obj).chain().assignWith(s1, s2, customizer);
    }
    {
        var result_586;
        result_586 = _(obj).chain().assignWith(s1, s2, s3, customizer);
    }
    {
        var result_587;
        result_587 = _(obj).chain().assignWith(s1, s2, s3, s4, customizer);
    }
    {
        var result_588;
        result_588 = _(obj).chain().assignWith(s1, s2, s3, s4, s5, customizer);
    }
})(TestAssignWith || (TestAssignWith = {}));
// _.assignIn
var TestAssignIn;
(function (TestAssignIn) {
    ;
    ;
    ;
    ;
    ;
    ;
    var obj;
    var s1;
    var s2;
    var s3;
    var s4;
    var s5;
    var customizer;
    {
        var result_589;
        result_589 = _.assignIn(obj);
    }
    {
        var result_590;
        result_590 = _.assignIn(obj, s1);
    }
    {
        var result_591;
        result_591 = _.assignIn(obj, s1, s2);
    }
    {
        var result_592;
        result_592 = _.assignIn(obj, s1, s2, s3);
    }
    {
        var result_593;
        result_593 = _.assignIn(obj, s1, s2, s3, s4);
    }
    {
        var result_594;
        result_594 = _.assignIn(obj, s1, s2, s3, s4, s5);
    }
    {
        var result_595;
        result_595 = _(obj).assignIn();
    }
    {
        var result_596;
        result_596 = _(obj).assignIn(s1);
    }
    {
        var result_597;
        result_597 = _(obj).assignIn(s1, s2);
    }
    {
        var result_598;
        result_598 = _(obj).assignIn(s1, s2, s3);
    }
    {
        var result_599;
        result_599 = _(obj).assignIn(s1, s2, s3, s4);
    }
    {
        var result_600;
        result_600 = _(obj).assignIn(s1, s2, s3, s4, s5);
    }
    {
        var result_601;
        result_601 = _(obj).chain().assignIn();
    }
    {
        var result_602;
        result_602 = _(obj).chain().assignIn(s1);
    }
    {
        var result_603;
        result_603 = _(obj).chain().assignIn(s1, s2);
    }
    {
        var result_604;
        result_604 = _(obj).chain().assignIn(s1, s2, s3);
    }
    {
        var result_605;
        result_605 = _(obj).chain().assignIn(s1, s2, s3, s4);
    }
    {
        var result_606;
        result_606 = _(obj).chain().assignIn(s1, s2, s3, s4, s5);
    }
})(TestAssignIn || (TestAssignIn = {}));
// _.assignInWith
var TestAssignInWith;
(function (TestAssignInWith) {
    ;
    ;
    ;
    ;
    ;
    ;
    var obj;
    var s1;
    var s2;
    var s3;
    var s4;
    var s5;
    var customizer;
    {
        var result_607;
        result_607 = _.assignInWith(obj);
    }
    {
        var result_608;
        result_608 = _.assignInWith(obj, s1, customizer);
    }
    {
        var result_609;
        result_609 = _.assignInWith(obj, s1, s2, customizer);
    }
    {
        var result_610;
        result_610 = _.assignInWith(obj, s1, s2, s3, customizer);
    }
    {
        var result_611;
        result_611 = _.assignInWith(obj, s1, s2, s3, s4, customizer);
    }
    {
        var result_612;
        result_612 = _.assignInWith(obj, s1, s2, s3, s4, s5, customizer);
    }
    {
        var result_613;
        result_613 = _(obj).assignInWith();
    }
    {
        var result_614;
        result_614 = _(obj).assignInWith(s1, customizer);
    }
    {
        var result_615;
        result_615 = _(obj).assignInWith(s1, s2, customizer);
    }
    {
        var result_616;
        result_616 = _(obj).assignInWith(s1, s2, s3, customizer);
    }
    {
        var result_617;
        result_617 = _(obj).assignInWith(s1, s2, s3, s4, customizer);
    }
    {
        var result_618;
        result_618 = _(obj).assignInWith(s1, s2, s3, s4, s5, customizer);
    }
    {
        var result_619;
        result_619 = _(obj).chain().assignInWith();
    }
    {
        var result_620;
        result_620 = _(obj).chain().assignInWith(s1, customizer);
    }
    {
        var result_621;
        result_621 = _(obj).chain().assignInWith(s1, s2, customizer);
    }
    {
        var result_622;
        result_622 = _(obj).chain().assignInWith(s1, s2, s3, customizer);
    }
    {
        var result_623;
        result_623 = _(obj).chain().assignInWith(s1, s2, s3, s4, customizer);
    }
    {
        var result_624;
        result_624 = _(obj).chain().assignInWith(s1, s2, s3, s4, s5, customizer);
    }
})(TestAssignInWith || (TestAssignInWith = {}));
// _.create
var TestCreate;
(function (TestCreate) {
    var prototype;
    var properties;
    {
        var result_625;
        result_625 = _.create(prototype, properties);
        result_625 = _.create(prototype, properties);
    }
    {
        var result_626;
        result_626 = _(prototype).create(properties);
        result_626 = _(prototype).create(properties);
    }
    {
        var result_627;
        result_627 = _(prototype).chain().create(properties);
        result_627 = _(prototype).chain().create(properties);
    }
})(TestCreate || (TestCreate = {}));
// _.defaults
var TestDefaults;
(function (TestDefaults) {
    ;
    ;
    ;
    ;
    ;
    ;
    var obj;
    var s1;
    var s2;
    var s3;
    var s4;
    var s5;
    {
        var result_628;
        result_628 = _.defaults(obj);
    }
    {
        var result_629;
        result_629 = _.defaults(obj, s1);
    }
    {
        var result_630;
        result_630 = _.defaults(obj, s1, s2);
    }
    {
        var result_631;
        result_631 = _.defaults(obj, s1, s2, s3);
    }
    {
        var result_632;
        result_632 = _.defaults(obj, s1, s2, s3, s4);
    }
    {
        var result_633;
        result_633 = _.defaults(obj, s1, s2, s3, s4, s5);
    }
    {
        var result_634;
        result_634 = _(obj).defaults();
    }
    {
        var result_635;
        result_635 = _(obj).defaults(s1);
    }
    {
        var result_636;
        result_636 = _(obj).defaults(s1, s2);
    }
    {
        var result_637;
        result_637 = _(obj).defaults(s1, s2, s3);
    }
    {
        var result_638;
        result_638 = _(obj).defaults(s1, s2, s3, s4);
    }
    {
        var result_639;
        result_639 = _(obj).defaults(s1, s2, s3, s4, s5);
    }
    {
        var result_640;
        result_640 = _(obj).chain().defaults();
    }
    {
        var result_641;
        result_641 = _(obj).chain().defaults(s1);
    }
    {
        var result_642;
        result_642 = _(obj).chain().defaults(s1, s2);
    }
    {
        var result_643;
        result_643 = _(obj).chain().defaults(s1, s2, s3);
    }
    {
        var result_644;
        result_644 = _(obj).chain().defaults(s1, s2, s3, s4);
    }
    {
        var result_645;
        result_645 = _(obj).chain().defaults(s1, s2, s3, s4, s5);
    }
})(TestDefaults || (TestDefaults = {}));
var TestDefaultsDeepObject = { 'user': { 'name': 'barney' } };
var TestDefaultsDeepSource = { 'user': { 'name': 'fred', 'age': 36 } };
result = _.defaultsDeep(TestDefaultsDeepObject, TestDefaultsDeepSource);
result = _(TestDefaultsDeepObject).defaultsDeep(TestDefaultsDeepSource).value();
// _.extend
var TestExtend;
(function (TestExtend) {
    var obj;
    var s1;
    var s2;
    var s3;
    var s4;
    var s5;
    var customizer;
    {
        var result_646;
        result_646 = _.extend(obj);
    }
    {
        var result_647;
        result_647 = _.extend(obj, s1);
        result_647 = _.extend(obj, s1, customizer);
        result_647 = _.extend(obj, s1, customizer, any);
    }
    {
        var result_648;
        result_648 = _.extend(obj, s1, s2);
        result_648 = _.extend(obj, s1, s2, customizer);
        result_648 = _.extend(obj, s1, s2, customizer, any);
    }
    {
        var result_649;
        result_649 = _.extend(obj, s1, s2, s3);
        result_649 = _.extend(obj, s1, s2, s3, customizer);
        result_649 = _.extend(obj, s1, s2, s3, customizer, any);
    }
    {
        var result_650;
        result_650 = _.extend(obj, s1, s2, s3, s4);
        result_650 = _.extend(obj, s1, s2, s3, s4, customizer);
        result_650 = _.extend(obj, s1, s2, s3, s4, customizer, any);
    }
    {
        var result_651;
        result_651 = _.extend(obj, s1, s2, s3, s4, s5);
        result_651 = _.extend(obj, s1, s2, s3, s4, s5, customizer);
        result_651 = _.extend(obj, s1, s2, s3, s4, s5, customizer, any);
    }
    {
        var result_652;
        result_652 = _(obj).extend();
    }
    {
        var result_653;
        result_653 = _(obj).extend(s1);
        result_653 = _(obj).extend(s1, customizer);
        result_653 = _(obj).extend(s1, customizer, any);
    }
    {
        var result_654;
        result_654 = _(obj).extend(s1, s2);
        result_654 = _(obj).extend(s1, s2, customizer);
        result_654 = _(obj).extend(s1, s2, customizer, any);
    }
    {
        var result_655;
        result_655 = _(obj).extend(s1, s2, s3);
        result_655 = _(obj).extend(s1, s2, s3, customizer);
        result_655 = _(obj).extend(s1, s2, s3, customizer, any);
    }
    {
        var result_656;
        result_656 = _(obj).extend(s1, s2, s3, s4);
        result_656 = _(obj).extend(s1, s2, s3, s4, customizer);
        result_656 = _(obj).extend(s1, s2, s3, s4, customizer, any);
    }
    {
        var result_657;
        result_657 = _(obj).extend(s1, s2, s3, s4, s5);
        result_657 = _(obj).extend(s1, s2, s3, s4, s5, customizer);
        result_657 = _(obj).extend(s1, s2, s3, s4, s5, customizer, any);
    }
    {
        var result_658;
        result_658 = _(obj).chain().extend();
    }
    {
        var result_659;
        result_659 = _(obj).chain().extend(s1);
        result_659 = _(obj).chain().extend(s1, customizer);
        result_659 = _(obj).chain().extend(s1, customizer, any);
    }
    {
        var result_660;
        result_660 = _(obj).chain().extend(s1, s2);
        result_660 = _(obj).chain().extend(s1, s2, customizer);
        result_660 = _(obj).chain().extend(s1, s2, customizer, any);
    }
    {
        var result_661;
        result_661 = _(obj).chain().extend(s1, s2, s3);
        result_661 = _(obj).chain().extend(s1, s2, s3, customizer);
        result_661 = _(obj).chain().extend(s1, s2, s3, customizer, any);
    }
    {
        var result_662;
        result_662 = _(obj).chain().extend(s1, s2, s3, s4);
        result_662 = _(obj).chain().extend(s1, s2, s3, s4, customizer);
        result_662 = _(obj).chain().extend(s1, s2, s3, s4, customizer, any);
    }
    {
        var result_663;
        result_663 = _(obj).chain().extend(s1, s2, s3, s4, s5);
        result_663 = _(obj).chain().extend(s1, s2, s3, s4, s5, customizer);
        result_663 = _(obj).chain().extend(s1, s2, s3, s4, s5, customizer, any);
    }
})(TestExtend || (TestExtend = {}));
// _.findKey
var TestFindKey;
(function (TestFindKey) {
    {
        var predicateFn;
        var result_664;
        result_664 = _.findKey({ a: '' });
        result_664 = _.findKey({ a: '' }, predicateFn);
        result_664 = _.findKey({ a: '' }, predicateFn, any);
        result_664 = _.findKey({ a: '' }, '');
        result_664 = _.findKey({ a: '' }, '', any);
        result_664 = _.findKey({ a: '' }, { a: 42 });
        result_664 = _({ a: '' }).findKey();
        result_664 = _({ a: '' }).findKey(predicateFn);
        result_664 = _({ a: '' }).findKey(predicateFn, any);
        result_664 = _({ a: '' }).findKey('');
        result_664 = _({ a: '' }).findKey('', any);
        result_664 = _({ a: '' }).findKey({ a: 42 });
    }
    {
        var predicateFn;
        var result_665;
        result_665 = _.findKey({ a: '' }, predicateFn);
        result_665 = _.findKey({ a: '' }, predicateFn, any);
        result_665 = _({ a: '' }).findKey(predicateFn);
        result_665 = _({ a: '' }).findKey(predicateFn, any);
    }
    {
        var predicateFn;
        var result_666;
        result_666 = _({ a: '' }).chain().findKey();
        result_666 = _({ a: '' }).chain().findKey(predicateFn);
        result_666 = _({ a: '' }).chain().findKey(predicateFn, any);
        result_666 = _({ a: '' }).chain().findKey('');
        result_666 = _({ a: '' }).chain().findKey('', any);
        result_666 = _({ a: '' }).chain().findKey({ a: 42 });
    }
    {
        var predicateFn;
        var result_667;
        result_667 = _({ a: '' }).chain().findKey(predicateFn);
        result_667 = _({ a: '' }).chain().findKey(predicateFn, any);
    }
})(TestFindKey || (TestFindKey = {}));
// _.findLastKey
var TestFindLastKey;
(function (TestFindLastKey) {
    {
        var predicateFn;
        var result_668;
        result_668 = _.findLastKey({ a: '' });
        result_668 = _.findLastKey({ a: '' }, predicateFn);
        result_668 = _.findLastKey({ a: '' }, predicateFn, any);
        result_668 = _.findLastKey({ a: '' }, '');
        result_668 = _.findLastKey({ a: '' }, '', any);
        result_668 = _.findLastKey({ a: '' }, { a: 42 });
        result_668 = _({ a: '' }).findLastKey();
        result_668 = _({ a: '' }).findLastKey(predicateFn);
        result_668 = _({ a: '' }).findLastKey(predicateFn, any);
        result_668 = _({ a: '' }).findLastKey('');
        result_668 = _({ a: '' }).findLastKey('', any);
        result_668 = _({ a: '' }).findLastKey({ a: 42 });
    }
    {
        var predicateFn;
        var result_669;
        result_669 = _.findLastKey({ a: '' }, predicateFn);
        result_669 = _.findLastKey({ a: '' }, predicateFn, any);
        result_669 = _({ a: '' }).findLastKey(predicateFn);
        result_669 = _({ a: '' }).findLastKey(predicateFn, any);
    }
    {
        var predicateFn;
        var result_670;
        result_670 = _({ a: '' }).chain().findLastKey();
        result_670 = _({ a: '' }).chain().findLastKey(predicateFn);
        result_670 = _({ a: '' }).chain().findLastKey(predicateFn, any);
        result_670 = _({ a: '' }).chain().findLastKey('');
        result_670 = _({ a: '' }).chain().findLastKey('', any);
        result_670 = _({ a: '' }).chain().findLastKey({ a: 42 });
    }
    {
        var predicateFn;
        var result_671;
        result_671 = _({ a: '' }).chain().findLastKey(predicateFn);
        result_671 = _({ a: '' }).chain().findLastKey(predicateFn, any);
    }
})(TestFindLastKey || (TestFindLastKey = {}));
// _.forIn
var TestForIn;
(function (TestForIn) {
    var dictionary;
    var dictionaryIterator;
    var object;
    var objectIterator;
    {
        var result_672;
        result_672 = _.forIn(dictionary);
        result_672 = _.forIn(dictionary, dictionaryIterator);
        result_672 = _.forIn(dictionary, dictionaryIterator, any);
    }
    {
        var result_673;
        result_673 = _.forIn(object);
        result_673 = _.forIn(object, objectIterator);
        result_673 = _.forIn(object, objectIterator, any);
    }
    {
        var result_674;
        result_674 = _(dictionary).forIn();
        result_674 = _(dictionary).forIn(dictionaryIterator);
        result_674 = _(dictionary).forIn(dictionaryIterator, any);
    }
    {
        var result_675;
        result_675 = _(dictionary).chain().forIn();
        result_675 = _(dictionary).chain().forIn(dictionaryIterator);
        result_675 = _(dictionary).chain().forIn(dictionaryIterator, any);
    }
})(TestForIn || (TestForIn = {}));
// _.forInRight
var TestForInRight;
(function (TestForInRight) {
    var dictionary;
    var dictionaryIterator;
    var object;
    var objectIterator;
    {
        var result_676;
        result_676 = _.forInRight(dictionary);
        result_676 = _.forInRight(dictionary, dictionaryIterator);
        result_676 = _.forInRight(dictionary, dictionaryIterator, any);
    }
    {
        var result_677;
        result_677 = _.forInRight(object);
        result_677 = _.forInRight(object, objectIterator);
        result_677 = _.forInRight(object, objectIterator, any);
    }
    {
        var result_678;
        result_678 = _(dictionary).forInRight();
        result_678 = _(dictionary).forInRight(dictionaryIterator);
        result_678 = _(dictionary).forInRight(dictionaryIterator, any);
    }
    {
        var result_679;
        result_679 = _(dictionary).chain().forInRight();
        result_679 = _(dictionary).chain().forInRight(dictionaryIterator);
        result_679 = _(dictionary).chain().forInRight(dictionaryIterator, any);
    }
})(TestForInRight || (TestForInRight = {}));
// _.forOwn
var TestForOwn;
(function (TestForOwn) {
    var dictionary;
    var dictionaryIterator;
    var object;
    var objectIterator;
    {
        var result_680;
        result_680 = _.forOwn(dictionary);
        result_680 = _.forOwn(dictionary, dictionaryIterator);
        result_680 = _.forOwn(dictionary, dictionaryIterator, any);
    }
    {
        var result_681;
        result_681 = _.forOwn(object);
        result_681 = _.forOwn(object, objectIterator);
        result_681 = _.forOwn(object, objectIterator, any);
    }
    {
        var result_682;
        result_682 = _(dictionary).forOwn();
        result_682 = _(dictionary).forOwn(dictionaryIterator);
        result_682 = _(dictionary).forOwn(dictionaryIterator, any);
    }
    {
        var result_683;
        result_683 = _(dictionary).chain().forOwn();
        result_683 = _(dictionary).chain().forOwn(dictionaryIterator);
        result_683 = _(dictionary).chain().forOwn(dictionaryIterator, any);
    }
})(TestForOwn || (TestForOwn = {}));
// _.forOwnRight
var TestForOwnRight;
(function (TestForOwnRight) {
    var dictionary;
    var dictionaryIterator;
    var object;
    var objectIterator;
    {
        var result_684;
        result_684 = _.forOwnRight(dictionary);
        result_684 = _.forOwnRight(dictionary, dictionaryIterator);
        result_684 = _.forOwnRight(dictionary, dictionaryIterator, any);
    }
    {
        var result_685;
        result_685 = _.forOwnRight(object);
        result_685 = _.forOwnRight(object, objectIterator);
        result_685 = _.forOwnRight(object, objectIterator, any);
    }
    {
        var result_686;
        result_686 = _(dictionary).forOwnRight();
        result_686 = _(dictionary).forOwnRight(dictionaryIterator);
        result_686 = _(dictionary).forOwnRight(dictionaryIterator, any);
    }
    {
        var result_687;
        result_687 = _(dictionary).chain().forOwnRight();
        result_687 = _(dictionary).chain().forOwnRight(dictionaryIterator);
        result_687 = _(dictionary).chain().forOwnRight(dictionaryIterator, any);
    }
})(TestForOwnRight || (TestForOwnRight = {}));
// _.functions
var TestFunctions;
(function (TestFunctions) {
    var object;
    {
        var result_688;
        result_688 = _.functions(object);
    }
    {
        var result_689;
        result_689 = _(object).functions();
    }
    {
        var result_690;
        result_690 = _(object).chain().functions();
    }
})(TestFunctions || (TestFunctions = {}));
// _.functionsIn
var TestFunctionsIn;
(function (TestFunctionsIn) {
    var object;
    {
        var result_691;
        result_691 = _.functionsIn(object);
    }
    {
        var result_692;
        result_692 = _(object).functionsIn();
    }
    {
        var result_693;
        result_693 = _(object).chain().functionsIn();
    }
})(TestFunctionsIn || (TestFunctionsIn = {}));
// _.get
result = _.get({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c');
{
    var result_694;
    result_694 = _.get({}, '');
    result_694 = _.get({}, 42);
    result_694 = _.get({}, true);
    result_694 = _.get({}, ['', 42, true]);
    result_694 = _({}).get('');
    result_694 = _({}).get(42);
    result_694 = _({}).get(true);
    result_694 = _({}).get(['', 42, true]);
}
// _.has
var TestHas;
(function (TestHas) {
    var object;
    {
        var result_695;
        result_695 = _.has(object, '');
        result_695 = _.has(object, 42);
        result_695 = _.has(object, true);
        result_695 = _.has(object, ['', 42, true]);
        result_695 = _(object).has('');
        result_695 = _(object).has(42);
        result_695 = _(object).has(true);
        result_695 = _(object).has(['', 42, true]);
    }
    {
        var result_696;
        result_696 = _(object).chain().has('');
        result_696 = _(object).chain().has(42);
        result_696 = _(object).chain().has(true);
        result_696 = _(object).chain().has(['', 42, true]);
    }
})(TestHas || (TestHas = {}));
// _.hasIn
var TestHasIn;
(function (TestHasIn) {
    var object;
    {
        var result_697;
        result_697 = _.hasIn(object, '');
        result_697 = _.hasIn(object, 42);
        result_697 = _.hasIn(object, true);
        result_697 = _.hasIn(object, ['', 42, true]);
        result_697 = _(object).hasIn('');
        result_697 = _(object).hasIn(42);
        result_697 = _(object).hasIn(true);
        result_697 = _(object).hasIn(['', 42, true]);
    }
    {
        var result_698;
        result_698 = _(object).chain().hasIn('');
        result_698 = _(object).chain().hasIn(42);
        result_698 = _(object).chain().hasIn(true);
        result_698 = _(object).chain().hasIn(['', 42, true]);
    }
})(TestHasIn || (TestHasIn = {}));
// _.invert
var TestInvert;
(function (TestInvert) {
    {
        var result_699;
        result_699 = _.invert({});
        result_699 = _.invert({}, true);
        result_699 = _.invert({});
        result_699 = _.invert({}, true);
    }
    {
        var result_700;
        result_700 = _({}).invert();
        result_700 = _({}).invert(true);
    }
    {
        var result_701;
        result_701 = _({}).chain().invert();
        result_701 = _({}).chain().invert(true);
    }
})(TestInvert || (TestInvert = {}));
// _.keys
var TestKeys;
(function (TestKeys) {
    var object;
    {
        var result_702;
        result_702 = _.keys(object);
    }
    {
        var result_703;
        result_703 = _(object).keys();
    }
    {
        var result_704;
        result_704 = _(object).chain().keys();
    }
})(TestKeys || (TestKeys = {}));
// _.keysIn
var TestKeysIn;
(function (TestKeysIn) {
    var object;
    {
        var result_705;
        result_705 = _.keysIn(object);
    }
    {
        var result_706;
        result_706 = _(object).keysIn();
    }
    {
        var result_707;
        result_707 = _(object).chain().keysIn();
    }
})(TestKeysIn || (TestKeysIn = {}));
// _.mapKeys
var TestMapKeys;
(function (TestMapKeys) {
    var array;
    var list;
    var dictionary;
    var listIterator;
    var dictionaryIterator;
    {
        var result_708;
        result_708 = _.mapKeys(array);
        result_708 = _.mapKeys(array, listIterator);
        result_708 = _.mapKeys(array, listIterator, any);
        result_708 = _.mapKeys(array, '');
        result_708 = _.mapKeys(array, '', any);
        result_708 = _.mapKeys(array, {});
        result_708 = _.mapKeys(list);
        result_708 = _.mapKeys(list, listIterator);
        result_708 = _.mapKeys(list, listIterator, any);
        result_708 = _.mapKeys(list, '');
        result_708 = _.mapKeys(list, '', any);
        result_708 = _.mapKeys(list, {});
        result_708 = _.mapKeys(dictionary);
        result_708 = _.mapKeys(dictionary, dictionaryIterator);
        result_708 = _.mapKeys(dictionary, dictionaryIterator, any);
        result_708 = _.mapKeys(dictionary, '');
        result_708 = _.mapKeys(dictionary, '', any);
        result_708 = _.mapKeys(dictionary, {});
    }
    {
        var result_709;
        result_709 = _(array).mapKeys();
        result_709 = _(array).mapKeys(listIterator);
        result_709 = _(array).mapKeys(listIterator, any);
        result_709 = _(array).mapKeys('');
        result_709 = _(array).mapKeys('', any);
        result_709 = _(array).mapKeys({});
        result_709 = _(list).mapKeys();
        result_709 = _(list).mapKeys(listIterator);
        result_709 = _(list).mapKeys(listIterator, any);
        result_709 = _(list).mapKeys('');
        result_709 = _(list).mapKeys('', any);
        result_709 = _(list).mapKeys({});
        result_709 = _(dictionary).mapKeys();
        result_709 = _(dictionary).mapKeys(dictionaryIterator);
        result_709 = _(dictionary).mapKeys(dictionaryIterator, any);
        result_709 = _(dictionary).mapKeys('');
        result_709 = _(dictionary).mapKeys('', any);
        result_709 = _(dictionary).mapKeys({});
    }
    {
        var result_710;
        result_710 = _(array).chain().mapKeys();
        result_710 = _(array).chain().mapKeys(listIterator);
        result_710 = _(array).chain().mapKeys(listIterator, any);
        result_710 = _(array).chain().mapKeys('');
        result_710 = _(array).chain().mapKeys('', any);
        result_710 = _(array).chain().mapKeys({});
        result_710 = _(list).chain().mapKeys();
        result_710 = _(list).chain().mapKeys(listIterator);
        result_710 = _(list).chain().mapKeys(listIterator, any);
        result_710 = _(list).chain().mapKeys('');
        result_710 = _(list).chain().mapKeys('', any);
        result_710 = _(list).chain().mapKeys({});
        result_710 = _(dictionary).chain().mapKeys();
        result_710 = _(dictionary).chain().mapKeys(dictionaryIterator);
        result_710 = _(dictionary).chain().mapKeys(dictionaryIterator, any);
        result_710 = _(dictionary).chain().mapKeys('');
        result_710 = _(dictionary).chain().mapKeys('', any);
        result_710 = _(dictionary).chain().mapKeys({});
    }
})(TestMapKeys || (TestMapKeys = {}));
// _.merge
var TestMerge;
(function (TestMerge) {
    var initialValue = { a: 1 };
    var mergingValue = { b: "hi" };
    var result;
    // Test for basic merging
    result = _.merge(initialValue, mergingValue);
    result = _.merge(initialValue, {}, mergingValue);
    result = _.merge(initialValue, {}, {}, mergingValue);
    result = _.merge(initialValue, {}, {}, {}, mergingValue);
    // Once we get to the varargs version, you have to specify the result explicitly
    result = _.merge(initialValue, {}, {}, {}, {}, mergingValue);
    var complicatedResult = _.merge({ a: 1 }, { b: "string" }, { c: {} }, { d: [1] }, { e: true });
    var overriddenResult = _.merge({ a: 1 }, { a: "string" }, { a: {} }, { a: [1] }, { a: true });
    // Tests for basic chaining with merge
    result = _(initialValue).merge(mergingValue).value();
    result = _(initialValue).merge({}, mergingValue).value();
    result = _(initialValue).merge({}, {}, mergingValue).value();
    result = _(initialValue).merge({}, {}, {}, mergingValue).value();
    // Once we get to the varargs version, you have to specify the result explicitly
    result = _(initialValue).merge({}, {}, {}, {}, mergingValue).value();
    // Test complex multiple combinations with chaining
    var complicatedResult = _({ a: 1 }).merge({ b: "string" }, { c: {} }, { d: [1] }, { e: true }).value();
    // Test for type overriding with chaining
    var overriddenResult = _({ a: 1 }).merge({ a: "string" }, { a: {} }, { a: [1] }, { a: true }).value();
    {
        var result_711;
    }
    {
        var result_712;
    }
    {
        var result_713;
    }
})(TestMerge || (TestMerge = {}));
// _.mergeWith
var TestMergeWith;
(function (TestMergeWith) {
    var initialValue = { a: 1 };
    var mergingValue = { b: "hi" };
    var result;
    var customizer;
    // Test for basic merging
    result = _.mergeWith(initialValue, mergingValue, customizer);
    result = _.mergeWith(initialValue, {}, mergingValue, customizer);
    result = _.mergeWith(initialValue, {}, {}, mergingValue, customizer);
    result = _.mergeWith(initialValue, {}, {}, {}, mergingValue, customizer);
    // Once we get to the varargs version, you have to specify the result explicitl
    result = _.mergeWith(initialValue, {}, {}, {}, {}, mergingValue, customizer);
    // Tests for basic chaining with mergeWith
    result = _(initialValue).mergeWith(mergingValue, customizer).value();
    result = _(initialValue).mergeWith({}, mergingValue, customizer).value();
    result = _(initialValue).mergeWith({}, {}, mergingValue, customizer).value();
    result = _(initialValue).mergeWith({}, {}, {}, mergingValue, customizer).value();
    // Once we get to the varargs version, you have to specify the result explicitl
    result = _(initialValue).mergeWith({}, {}, {}, {}, mergingValue, customizer).value();
})(TestMergeWith || (TestMergeWith = {}));
// _.omit
var TestOmit;
(function (TestOmit) {
    var predicate;
    {
        var result_714;
        result_714 = _.omit({}, 'a');
        result_714 = _.omit({}, 0, 'a');
        result_714 = _.omit({}, true, 0, 'a');
        result_714 = _.omit({}, ['b', 1, false], true, 0, 'a');
    }
    {
        var result_715;
        result_715 = _({}).omit('a');
        result_715 = _({}).omit(0, 'a');
        result_715 = _({}).omit(true, 0, 'a');
        result_715 = _({}).omit(['b', 1, false], true, 0, 'a');
    }
    {
        var result_716;
        result_716 = _({}).chain().omit('a');
        result_716 = _({}).chain().omit(0, 'a');
        result_716 = _({}).chain().omit(true, 0, 'a');
        result_716 = _({}).chain().omit(['b', 1, false], true, 0, 'a');
    }
})(TestOmit || (TestOmit = {}));
// _.omitBy
var TestOmitBy;
(function (TestOmitBy) {
    var predicate;
    {
        var result_717;
        result_717 = _.omitBy({}, predicate);
    }
    {
        var result_718;
        result_718 = _({}).omitBy(predicate);
    }
    {
        var result_719;
        result_719 = _({}).chain().omitBy(predicate);
    }
})(TestOmitBy || (TestOmitBy = {}));
// _.toPairs
var TestToPairs;
(function (TestToPairs) {
    var object;
    {
        var result_720;
        result_720 = _.toPairs(object);
    }
    {
        var result_721;
        result_721 = _.toPairs(object);
    }
    {
        var result_722;
        result_722 = _(object).toPairs();
    }
    {
        var result_723;
        result_723 = _(object).toPairs();
    }
    {
        var result_724;
        result_724 = _(object).chain().toPairs();
    }
    {
        var result_725;
        result_725 = _(object).chain().toPairs();
    }
})(TestToPairs || (TestToPairs = {}));
// _.pick
var TestPick;
(function (TestPick) {
    var predicate;
    {
        var result_726;
        result_726 = _.pick({}, 'a');
        result_726 = _.pick({}, 0, 'a');
        result_726 = _.pick({}, true, 0, 'a');
        result_726 = _.pick({}, ['b', 1, false], true, 0, 'a');
    }
    {
        var result_727;
        result_727 = _({}).pick('a');
        result_727 = _({}).pick(0, 'a');
        result_727 = _({}).pick(true, 0, 'a');
        result_727 = _({}).pick(['b', 1, false], true, 0, 'a');
    }
    {
        var result_728;
        result_728 = _({}).chain().pick('a');
        result_728 = _({}).chain().pick(0, 'a');
        result_728 = _({}).chain().pick(true, 0, 'a');
        result_728 = _({}).chain().pick(['b', 1, false], true, 0, 'a');
    }
})(TestPick || (TestPick = {}));
// _.pickBy
var TestPickBy;
(function (TestPickBy) {
    var predicate;
    {
        var result_729;
        result_729 = _.pickBy({}, predicate);
    }
    {
        var result_730;
        result_730 = _({}).pickBy(predicate);
    }
    {
        var result_731;
        result_731 = _({}).chain().pickBy(predicate);
    }
})(TestPickBy || (TestPickBy = {}));
// _.result
{
    var testResultPath;
    var testResultDefaultValue;
    var result_732;
    result_732 = _.result({}, testResultPath);
    result_732 = _.result({}, testResultPath, testResultDefaultValue);
    result_732 = _({}).result(testResultPath);
    result_732 = _({}).result(testResultPath, testResultDefaultValue);
}
// _.set
var TestSet;
(function (TestSet) {
    var object;
    var value = { a: 1, b: '', c: true };
    {
        var result_733;
        result_733 = _.set(object, '', any);
        result_733 = _.set(object, ['a', 'b', 1], any);
        result_733 = _.set(object, '', value);
        result_733 = _.set(object, ['a', 'b', 1], value);
    }
    {
        var result_734;
        result_734 = _(object).set('', any);
        result_734 = _(object).set(['a', 'b', 1], any);
        result_734 = _(object).set('', value);
        result_734 = _(object).set(['a', 'b', 1], value);
    }
    {
        var result_735;
        result_735 = _(object).chain().set('', any);
        result_735 = _(object).chain().set(['a', 'b', 1], any);
        result_735 = _(object).chain().set('', value);
        result_735 = _(object).chain().set(['a', 'b', 1], value);
    }
})(TestSet || (TestSet = {}));
// _.transform
var TestTransform;
(function (TestTransform) {
    var array;
    var dictionary;
    {
        var iterator;
        var accumulator;
        var result_736;
        result_736 = _.transform(array);
        result_736 = _.transform(array, iterator);
        result_736 = _.transform(array, iterator, accumulator);
        result_736 = _.transform(array, iterator, accumulator, any);
        result_736 = _(array).transform().value();
        result_736 = _(array).transform(iterator).value();
        result_736 = _(array).transform(iterator, accumulator).value();
        result_736 = _(array).transform(iterator, accumulator, any).value();
    }
    {
        var iterator;
        var accumulator;
        var result_737;
        result_737 = _.transform(array, iterator);
        result_737 = _.transform(array, iterator, accumulator);
        result_737 = _.transform(array, iterator, accumulator, any);
        result_737 = _(array).transform(iterator).value();
        result_737 = _(array).transform(iterator, accumulator).value();
        result_737 = _(array).transform(iterator, accumulator, any).value();
    }
    {
        var iterator;
        var accumulator;
        var result_738;
        result_738 = _.transform(dictionary);
        result_738 = _.transform(dictionary, iterator);
        result_738 = _.transform(dictionary, iterator, accumulator);
        result_738 = _.transform(dictionary, iterator, accumulator, any);
        result_738 = _(dictionary).transform().value();
        result_738 = _(dictionary).transform(iterator).value();
        result_738 = _(dictionary).transform(iterator, accumulator).value();
        result_738 = _(dictionary).transform(iterator, accumulator, any).value();
    }
    {
        var iterator;
        var accumulator;
        var result_739;
        result_739 = _.transform(dictionary, iterator);
        result_739 = _.transform(dictionary, iterator, accumulator);
        result_739 = _.transform(dictionary, iterator, accumulator, any);
        result_739 = _(dictionary).transform(iterator).value();
        result_739 = _(dictionary).transform(iterator, accumulator).value();
        result_739 = _(dictionary).transform(iterator, accumulator, any).value();
    }
})(TestTransform || (TestTransform = {}));
// _.values
var TestValues;
(function (TestValues) {
    var object;
    {
        var result_740;
        result_740 = _.values(object);
    }
    {
        var result_741;
        result_741 = _(object).values();
    }
    {
        var result_742;
        result_742 = _(object).chain().values();
    }
})(TestValues || (TestValues = {}));
// _.valuesIn
var TestValuesIn;
(function (TestValuesIn) {
    var object;
    {
        var result_743;
        result_743 = _.valuesIn(object);
    }
    {
        var result_744;
        result_744 = _(object).valuesIn();
    }
    {
        var result_745;
        result_745 = _(object).chain().valuesIn();
    }
})(TestValuesIn || (TestValuesIn = {}));
/**********
 * String *
 **********/
// _.camelCase
var TestCamelCase;
(function (TestCamelCase) {
    {
        var result_746;
        result_746 = _.camelCase('Foo Bar');
        result_746 = _('Foo Bar').camelCase();
    }
    {
        var result_747;
        result_747 = _('Foo Bar').chain().camelCase();
    }
})(TestCamelCase || (TestCamelCase = {}));
// _.capitalize
var TestCapitalize;
(function (TestCapitalize) {
    {
        var result_748;
        result_748 = _.capitalize('fred');
        result_748 = _('fred').capitalize();
    }
    {
        var result_749;
        result_749 = _('fred').chain().capitalize();
    }
})(TestCapitalize || (TestCapitalize = {}));
// _.deburr
var TestDeburr;
(function (TestDeburr) {
    {
        var result_750;
        result_750 = _.deburr('déjà vu');
        result_750 = _('déjà vu').deburr();
    }
    {
        var result_751;
        result_751 = _('déjà vu').chain().deburr();
    }
})(TestDeburr || (TestDeburr = {}));
// _.endsWith
var TestEndsWith;
(function (TestEndsWith) {
    {
        var result_752;
        result_752 = _.endsWith('abc', 'c');
        result_752 = _.endsWith('abc', 'c', 1);
        result_752 = _('abc').endsWith('c');
        result_752 = _('abc').endsWith('c', 1);
    }
    {
        var result_753;
        result_753 = _('abc').chain().endsWith('c');
        result_753 = _('abc').chain().endsWith('c', 1);
    }
})(TestEndsWith || (TestEndsWith = {}));
// _.escape
var TestEscape;
(function (TestEscape) {
    {
        var result_754;
        result_754 = _.escape('fred, barney, & pebbles');
        result_754 = _('fred, barney, & pebbles').escape();
    }
    {
        var result_755;
        result_755 = _('fred, barney, & pebbles').chain().escape();
    }
})(TestEscape || (TestEscape = {}));
// _.escapeRegExp
var TestEscapeRegExp;
(function (TestEscapeRegExp) {
    {
        var result_756;
        result_756 = _.escapeRegExp('[lodash](https://lodash.com/)');
        result_756 = _('[lodash](https://lodash.com/)').escapeRegExp();
    }
    {
        var result_757;
        result_757 = _('[lodash](https://lodash.com/)').chain().escapeRegExp();
    }
})(TestEscapeRegExp || (TestEscapeRegExp = {}));
// _.kebabCase
var TestKebabCase;
(function (TestKebabCase) {
    {
        var result_758;
        result_758 = _.kebabCase('Foo Bar');
        result_758 = _('Foo Bar').kebabCase();
    }
    {
        var result_759;
        result_759 = _('Foo Bar').chain().kebabCase();
    }
})(TestKebabCase || (TestKebabCase = {}));
// _.lowerCase
var TestLowerCase;
(function (TestLowerCase) {
    {
        var result_760;
        result_760 = _.lowerCase('Foo Bar');
        result_760 = _('Foo Bar').lowerCase();
    }
    {
        var result_761;
        result_761 = _('Foo Bar').chain().lowerCase();
    }
})(TestLowerCase || (TestLowerCase = {}));
// _.lowerFirst
var TestLowerFirst;
(function (TestLowerFirst) {
    {
        var result_762;
        result_762 = _.lowerFirst('Foo Bar');
        result_762 = _('Foo Bar').lowerFirst();
    }
    {
        var result_763;
        result_763 = _('Foo Bar').chain().lowerFirst();
    }
})(TestLowerFirst || (TestLowerFirst = {}));
// _.pad
var TestPad;
(function (TestPad) {
    {
        var result_764;
        result_764 = _.pad('abd');
        result_764 = _.pad('abc', 8);
        result_764 = _.pad('abc', 8, '_-');
        result_764 = _('abc').pad();
        result_764 = _('abc').pad(8);
        result_764 = _('abc').pad(8, '_-');
    }
    {
        var result_765;
        result_765 = _('abc').chain().pad();
        result_765 = _('abc').chain().pad(8);
        result_765 = _('abc').chain().pad(8, '_-');
    }
})(TestPad || (TestPad = {}));
// _.padStart
var TestPadStart;
(function (TestPadStart) {
    {
        var result_766;
        result_766 = _.padStart('abc');
        result_766 = _.padStart('abc', 6);
        result_766 = _.padStart('abc', 6, '_-');
        result_766 = _('abc').padStart();
        result_766 = _('abc').padStart(6);
        result_766 = _('abc').padStart(6, '_-');
    }
    {
        var result_767;
        result_767 = _('abc').chain().padStart();
        result_767 = _('abc').chain().padStart(6);
        result_767 = _('abc').chain().padStart(6, '_-');
    }
})(TestPadStart || (TestPadStart = {}));
// _.padEnd
var TestPadEnd;
(function (TestPadEnd) {
    {
        var result_768;
        result_768 = _.padEnd('abc');
        result_768 = _.padEnd('abc', 6);
        result_768 = _.padEnd('abc', 6, '_-');
        result_768 = _('abc').padEnd();
        result_768 = _('abc').padEnd(6);
        result_768 = _('abc').padEnd(6, '_-');
    }
    {
        var result_769;
        result_769 = _('abc').chain().padEnd();
        result_769 = _('abc').chain().padEnd(6);
        result_769 = _('abc').chain().padEnd(6, '_-');
    }
})(TestPadEnd || (TestPadEnd = {}));
// _.parseInt
var TestParseInt;
(function (TestParseInt) {
    {
        var result_770;
        result_770 = _.parseInt('08');
        result_770 = _.parseInt('08', 10);
        result_770 = _('08').parseInt();
        result_770 = _('08').parseInt(10);
    }
    {
        var result_771;
        result_771 = _('08').chain().parseInt();
        result_771 = _('08').chain().parseInt(10);
    }
})(TestParseInt || (TestParseInt = {}));
// _.repeat
var TestRepeat;
(function (TestRepeat) {
    {
        var result_772;
        result_772 = _.repeat('*');
        result_772 = _.repeat('*', 3);
        result_772 = _('*').repeat();
        result_772 = _('*').repeat(3);
    }
    {
        var result_773;
        result_773 = _('*').chain().repeat();
        result_773 = _('*').chain().repeat(3);
    }
})(TestRepeat || (TestRepeat = {}));
// _.snakeCase
var TestSnakeCase;
(function (TestSnakeCase) {
    {
        var result_774;
        result_774 = _.snakeCase('Foo Bar');
        result_774 = _('Foo Bar').snakeCase();
    }
    {
        var result_775;
        result_775 = _('Foo Bar').chain().snakeCase();
    }
})(TestSnakeCase || (TestSnakeCase = {}));
// _.startCase
var TestStartCase;
(function (TestStartCase) {
    {
        var result_776;
        result_776 = _.startCase('--foo-bar');
        result_776 = _('--foo-bar').startCase();
    }
    {
        var result_777;
        result_777 = _('--foo-bar').chain().startCase();
    }
})(TestStartCase || (TestStartCase = {}));
// _.startsWith
var TestStartsWith;
(function (TestStartsWith) {
    {
        var result_778;
        result_778 = _.startsWith('abc', 'a');
        result_778 = _.startsWith('abc', 'a', 1);
        result_778 = _('abc').startsWith('a');
        result_778 = _('abc').startsWith('a', 1);
    }
    {
        var result_779;
        result_779 = _('abc').chain().startsWith('a');
        result_779 = _('abc').chain().startsWith('a', 1);
    }
})(TestStartsWith || (TestStartsWith = {}));
// _.template
var TestTemplate;
(function (TestTemplate) {
    var options;
    {
        var result_780;
        result_780 = _.template('');
        result_780 = _.template('', options);
        result_780 = _('').template();
        result_780 = _('').template(options);
    }
    {
        var result_781;
        result_781 = _('').chain().template();
        result_781 = _('').chain().template(options);
    }
})(TestTemplate || (TestTemplate = {}));
// _.toLower
var TestToLower;
(function (TestToLower) {
    {
        var result_782;
        result_782 = _.toLower('fred, barney, &amp; pebbles');
        result_782 = _('fred, barney, &amp; pebbles').toLower();
    }
    {
        var result_783;
        result_783 = _('fred, barney, &amp; pebbles').chain().toLower();
    }
})(TestToLower || (TestToLower = {}));
// _.toUpper
var TestToUpper;
(function (TestToUpper) {
    {
        var result_784;
        result_784 = _.toUpper('fred, barney, &amp; pebbles');
        result_784 = _('fred, barney, &amp; pebbles').toUpper();
    }
    {
        var result_785;
        result_785 = _('fred, barney, &amp; pebbles').chain().toUpper();
    }
})(TestToUpper || (TestToUpper = {}));
// _.trim
var TestTrim;
(function (TestTrim) {
    {
        var result_786;
        result_786 = _.trim();
        result_786 = _.trim('  abc  ');
        result_786 = _.trim('-_-abc-_-', '_-');
        result_786 = _('-_-abc-_-').trim();
        result_786 = _('-_-abc-_-').trim('_-');
    }
    {
        var result_787;
        result_787 = _('-_-abc-_-').chain().trim();
        result_787 = _('-_-abc-_-').chain().trim('_-');
    }
})(TestTrim || (TestTrim = {}));
// _.trimStart
var TestTrimStart;
(function (TestTrimStart) {
    {
        var result_788;
        result_788 = _.trimStart();
        result_788 = _.trimStart('  abc  ');
        result_788 = _.trimStart('-_-abc-_-', '_-');
        result_788 = _('-_-abc-_-').trimStart();
        result_788 = _('-_-abc-_-').trimStart('_-');
    }
    {
        var result_789;
        result_789 = _('-_-abc-_-').chain().trimStart();
        result_789 = _('-_-abc-_-').chain().trimStart('_-');
    }
})(TestTrimStart || (TestTrimStart = {}));
// _.trimEnd
var TestTrimEnd;
(function (TestTrimEnd) {
    {
        var result_790;
        result_790 = _.trimEnd();
        result_790 = _.trimEnd('  abc  ');
        result_790 = _.trimEnd('-_-abc-_-', '_-');
        result_790 = _('-_-abc-_-').trimEnd();
        result_790 = _('-_-abc-_-').trimEnd('_-');
    }
    {
        var result_791;
        result_791 = _('-_-abc-_-').chain().trimEnd();
        result_791 = _('-_-abc-_-').chain().trimEnd('_-');
    }
})(TestTrimEnd || (TestTrimEnd = {}));
// _.truncate
var Testtruncate;
(function (Testtruncate) {
    {
        var result_792;
        result_792 = _.truncate('hi-diddly-ho there, neighborino');
        result_792 = _.truncate('hi-diddly-ho there, neighborino', 24);
        result_792 = _.truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': ' ' });
        result_792 = _.truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': /,? +/ });
        result_792 = _.truncate('hi-diddly-ho there, neighborino', { 'omission': ' […]' });
        result_792 = _('hi-diddly-ho there, neighborino').truncate();
        result_792 = _('hi-diddly-ho there, neighborino').truncate(24);
        result_792 = _('hi-diddly-ho there, neighborino').truncate({ 'length': 24, 'separator': ' ' });
        result_792 = _('hi-diddly-ho there, neighborino').truncate({ 'length': 24, 'separator': /,? +/ });
        result_792 = _('hi-diddly-ho there, neighborino').truncate({ 'omission': ' […]' });
    }
    {
        var result_793;
        result_793 = _('hi-diddly-ho there, neighborino').chain().truncate();
        result_793 = _('hi-diddly-ho there, neighborino').chain().truncate(24);
        result_793 = _('hi-diddly-ho there, neighborino').chain().truncate({ 'length': 24, 'separator': ' ' });
        result_793 = _('hi-diddly-ho there, neighborino').chain().truncate({ 'length': 24, 'separator': /,? +/ });
        result_793 = _('hi-diddly-ho there, neighborino').chain().truncate({ 'omission': ' […]' });
    }
})(Testtruncate || (Testtruncate = {}));
// _.upperCase
var TestUpperCase;
(function (TestUpperCase) {
    {
        var result_794;
        result_794 = _.upperCase('fred, barney, &amp; pebbles');
        result_794 = _('fred, barney, &amp; pebbles').upperCase();
    }
    {
        var result_795;
        result_795 = _('fred, barney, &amp; pebbles').chain().upperCase();
    }
})(TestUpperCase || (TestUpperCase = {}));
// _.upperFirst
var TestUpperFirst;
(function (TestUpperFirst) {
    {
        var result_796;
        result_796 = _.upperFirst('fred, barney, &amp; pebbles');
        result_796 = _('fred, barney, &amp; pebbles').upperFirst();
    }
    {
        var result_797;
        result_797 = _('fred, barney, &amp; pebbles').chain().upperFirst();
    }
})(TestUpperFirst || (TestUpperFirst = {}));
// _.unescape
var TestUnescape;
(function (TestUnescape) {
    {
        var result_798;
        result_798 = _.unescape('fred, barney, &amp; pebbles');
        result_798 = _('fred, barney, &amp; pebbles').unescape();
    }
    {
        var result_799;
        result_799 = _('fred, barney, &amp; pebbles').chain().unescape();
    }
})(TestUnescape || (TestUnescape = {}));
// _.words
var TestWords;
(function (TestWords) {
    {
        var result_800;
        result_800 = _.words('fred, barney, & pebbles');
        result_800 = _.words('fred, barney, & pebbles', /[^, ]+/g);
        result_800 = _('fred, barney, & pebbles').words();
        result_800 = _('fred, barney, & pebbles').words(/[^, ]+/g);
    }
    {
        var result_801;
        result_801 = _('fred, barney, & pebbles').chain().words();
        result_801 = _('fred, barney, & pebbles').chain().words(/[^, ]+/g);
    }
})(TestWords || (TestWords = {}));
/***********
 * Utility *
 ***********/
// _.attempt
var TestAttempt;
(function (TestAttempt) {
    var func;
    {
        var result_802;
        result_802 = _.attempt(func);
        result_802 = _(func).attempt();
    }
    {
        var result_803;
        result_803 = _(func).chain().attempt();
    }
})(TestAttempt || (TestAttempt = {}));
// _.constant
var TestConstant;
(function (TestConstant) {
    {
        var result_804;
        result: _.constant(42);
    }
    {
        var result_805;
        result: _.constant('a');
    }
    {
        var result_806;
        result: _.constant(true);
    }
    {
        var result_807;
        result: _.constant(['a']);
    }
    {
        var result_808;
        result: _.constant({ a: 'a' });
    }
    {
        var result_809;
        result: _(42).constant();
    }
    {
        var result_810;
        result: _('a').constant();
    }
    {
        var result_811;
        result: _(true).constant();
    }
    {
        var result_812;
        result: _(['a']).constant();
    }
    {
        var result_813;
        result: _({ a: 'a' }).constant();
    }
    {
        var result_814;
        result: _(42).chain().constant();
    }
    {
        var result_815;
        result: _('a').chain().constant();
    }
    {
        var result_816;
        result: _(true).chain().constant();
    }
    {
        var result_817;
        result: _(['a']).chain().constant();
    }
    {
        var result_818;
        result: _({ a: 'a' }).chain().constant();
    }
})(TestConstant || (TestConstant = {}));
// _.identity
{
    var testIdentityValue;
    var result_819;
    result_819 = _.identity(testIdentityValue);
    result_819 = _(testIdentityValue).identity();
}
{
    var result_820;
    result_820 = _(42).identity();
}
{
    var result_821;
    result_821 = _([]).identity();
}
// _.iteratee
var TestIteratee;
(function (TestIteratee) {
    {
        var result_822;
        result_822 = _.iteratee(Function);
        result_822 = _.iteratee(Function, any);
    }
    {
        var result_823;
        result_823 = _.iteratee('');
        result_823 = _.iteratee('', any);
    }
    {
        var result_824;
        result_824 = _.iteratee({});
        result_824 = _.iteratee({}, any);
    }
    {
        var result_825;
        result_825 = _(Function).iteratee();
        result_825 = _(Function).iteratee(any);
    }
    {
        var result_826;
        result_826 = _('').iteratee();
        result_826 = _('').iteratee(any);
    }
    {
        var result_827;
        result_827 = _({}).iteratee();
        result_827 = _({}).iteratee(any);
    }
    {
        var result_828;
        result_828 = _(Function).chain().iteratee();
        result_828 = _(Function).chain().iteratee(any);
    }
    {
        var result_829;
        result_829 = _('').chain().iteratee();
        result_829 = _('').chain().iteratee(any);
    }
    {
        var result_830;
        result_830 = _({}).chain().iteratee();
        result_830 = _({}).chain().iteratee(any);
    }
})(TestIteratee || (TestIteratee = {}));
// _.matches
var TestMatches;
(function (TestMatches) {
    var source;
    {
        var result_831;
        result_831 = _.matches(source);
    }
    {
        var result_832;
        result_832 = _.matches(source);
    }
    {
        var result_833;
        result_833 = _(source).matches();
    }
    {
        var result_834;
        result_834 = _(source).chain().matches();
    }
})(TestMatches || (TestMatches = {}));
// _.matchesProperty
var TestMatches;
(function (TestMatches) {
    var path;
    var source;
    {
        var result_835;
        result_835 = _.matchesProperty(path, source);
    }
    {
        var result_836;
        result_836 = _.matchesProperty(path, source);
    }
    {
        var result_837;
        result_837 = _(path).matchesProperty(source);
    }
    {
        var result_838;
        result_838 = _(path).matchesProperty(source);
    }
    {
        var result_839;
        result_839 = _(path).chain().matchesProperty(source);
    }
    {
        var result_840;
        result_840 = _(path).chain().matchesProperty(source);
    }
})(TestMatches || (TestMatches = {}));
// _.method
var TestMethod;
(function (TestMethod) {
    {
        var result_841;
        result_841 = _.method('a.0');
        result_841 = _.method('a.0', any);
        result_841 = _.method('a.0', any, any);
        result_841 = _.method('a.0', any, any, any);
        result_841 = _.method(['a', 0]);
        result_841 = _.method(['a', 0], any);
        result_841 = _.method(['a', 0], any, any);
        result_841 = _.method(['a', 0], any, any, any);
    }
    {
        var result_842;
        result_842 = _.method('a.0');
        result_842 = _.method('a.0', any);
        result_842 = _.method('a.0', any, any);
        result_842 = _.method('a.0', any, any, any);
        result_842 = _.method(['a', 0]);
        result_842 = _.method(['a', 0], any);
        result_842 = _.method(['a', 0], any, any);
        result_842 = _.method(['a', 0], any, any, any);
    }
    {
        var result_843;
        result_843 = _('a.0').method();
        result_843 = _('a.0').method(any);
        result_843 = _('a.0').method(any, any);
        result_843 = _('a.0').method(any, any, any);
        result_843 = _(['a', 0]).method();
        result_843 = _(['a', 0]).method(any);
        result_843 = _(['a', 0]).method(any, any);
        result_843 = _(['a', 0]).method(any, any, any);
    }
    {
        var result_844;
        result_844 = _('a.0').method();
        result_844 = _('a.0').method(any);
        result_844 = _('a.0').method(any, any);
        result_844 = _('a.0').method(any, any, any);
        result_844 = _(['a', 0]).method();
        result_844 = _(['a', 0]).method(any);
        result_844 = _(['a', 0]).method(any, any);
        result_844 = _(['a', 0]).method(any, any, any);
    }
    {
        var result_845;
        result_845 = _('a.0').chain().method();
        result_845 = _('a.0').chain().method(any);
        result_845 = _('a.0').chain().method(any, any);
        result_845 = _('a.0').chain().method(any, any, any);
        result_845 = _(['a', 0]).chain().method();
        result_845 = _(['a', 0]).chain().method(any);
        result_845 = _(['a', 0]).chain().method(any, any);
        result_845 = _(['a', 0]).chain().method(any, any, any);
    }
    {
        var result_846;
        result_846 = _('a.0').chain().method();
        result_846 = _('a.0').chain().method(any);
        result_846 = _('a.0').chain().method(any, any);
        result_846 = _('a.0').chain().method(any, any, any);
        result_846 = _(['a', 0]).chain().method();
        result_846 = _(['a', 0]).chain().method(any);
        result_846 = _(['a', 0]).chain().method(any, any);
        result_846 = _(['a', 0]).chain().method(any, any, any);
    }
})(TestMethod || (TestMethod = {}));
// _.methodOf
var TestMethodOf;
(function (TestMethodOf) {
    var object;
    {
        var result_847;
        result_847 = _.methodOf(object);
        result_847 = _.methodOf(object, any);
        result_847 = _.methodOf(object, any, any);
        result_847 = _.methodOf(object, any, any, any);
        result_847 = _.methodOf(object);
        result_847 = _.methodOf(object, any);
        result_847 = _.methodOf(object, any, any);
        result_847 = _.methodOf(object, any, any, any);
    }
    {
        var result_848;
        result_848 = _(object).methodOf();
        result_848 = _(object).methodOf(any);
        result_848 = _(object).methodOf(any, any);
        result_848 = _(object).methodOf(any, any, any);
    }
    {
        var result_849;
        result_849 = _(object).chain().methodOf();
        result_849 = _(object).chain().methodOf(any);
        result_849 = _(object).chain().methodOf(any, any);
        result_849 = _(object).chain().methodOf(any, any, any);
    }
})(TestMethodOf || (TestMethodOf = {}));
// _.mixin
var TestMixin;
(function (TestMixin) {
    var source;
    var options;
    {
        var result_850;
        result_850 = _.mixin({}, source);
        result_850 = _.mixin({}, source, options);
        result_850 = _.mixin(source);
        result_850 = _.mixin(source, options);
    }
    {
        var result_851;
        result_851 = _({}).mixin(source);
        result_851 = _({}).mixin(source, options);
        result_851 = _(source).mixin();
        result_851 = _(source).mixin(options);
    }
    {
        var result_852;
        result_852 = _({}).chain().mixin(source);
        result_852 = _({}).chain().mixin(source, options);
        result_852 = _(source).chain().mixin();
        result_852 = _(source).chain().mixin(options);
    }
})(TestMixin || (TestMixin = {}));
// _.noConflict
{
    var result_853;
    result_853 = _.noConflict();
    result_853 = _(42).noConflict();
    result_853 = _([]).noConflict();
    result_853 = _({}).noConflict();
}
// _.noop
var TestNoop;
(function (TestNoop) {
    {
        var result_854;
        result_854 = _.noop();
        result_854 = _.noop(1);
        result_854 = _.noop('a', 1);
        result_854 = _.noop(true, 'a', 1);
        result_854 = _('a').noop(true, 'a', 1);
        result_854 = _([1]).noop(true, 'a', 1);
        result_854 = _([]).noop(true, 'a', 1);
        result_854 = _({}).noop(true, 'a', 1);
        result_854 = _(any).noop(true, 'a', 1);
    }
    {
        var result_855;
        result_855 = _('a').chain().noop(true, 'a', 1);
        result_855 = _([1]).chain().noop(true, 'a', 1);
        result_855 = _([]).chain().noop(true, 'a', 1);
        result_855 = _({}).chain().noop(true, 'a', 1);
        result_855 = _(any).chain().noop(true, 'a', 1);
    }
})(TestNoop || (TestNoop = {}));
// _.property
var TestProperty;
(function (TestProperty) {
    {
        var result_856;
        result_856 = _.property('a.b[0]');
        result_856 = _.property(['a', 'b', 0]);
    }
    {
        var result_857;
        result_857 = _('a.b[0]').property();
        result_857 = _(['a', 'b', 0]).property();
    }
    {
        var result_858;
        result_858 = _('a.b[0]').chain().property();
        result_858 = _(['a', 'b', 0]).chain().property();
    }
})(TestProperty || (TestProperty = {}));
// _.propertyOf
var TestPropertyOf;
(function (TestPropertyOf) {
    var object;
    {
        var result_859;
        result_859 = _.propertyOf({});
        result_859 = _.propertyOf(object);
    }
    {
        var result_860;
        result_860 = _({}).propertyOf();
    }
    {
        var result_861;
        result_861 = _({}).chain().propertyOf();
    }
})(TestPropertyOf || (TestPropertyOf = {}));
// _.range
var TestRange;
(function (TestRange) {
    {
        var result_862;
        result_862 = _.range(10);
        result_862 = _.range(1, 11);
        result_862 = _.range(0, 30, 5);
    }
    {
        var result_863;
        result_863 = _(10).range();
        result_863 = _(1).range(11);
        result_863 = _(0).range(30, 5);
    }
    {
        var result_864;
        result_864 = _(10).chain().range();
        result_864 = _(1).chain().range(11);
        result_864 = _(0).chain().range(30, 5);
    }
})(TestRange || (TestRange = {}));
// _.rangeRight
var TestRangeRight;
(function (TestRangeRight) {
    {
        var result_865;
        result_865 = _.rangeRight(10);
        result_865 = _.rangeRight(1, 11);
        result_865 = _.rangeRight(0, 30, 5);
    }
    {
        var result_866;
        result_866 = _(10).rangeRight();
        result_866 = _(1).rangeRight(11);
        result_866 = _(0).rangeRight(30, 5);
    }
    {
        var result_867;
        result_867 = _(10).chain().rangeRight();
        result_867 = _(1).chain().rangeRight(11);
        result_867 = _(0).chain().rangeRight(30, 5);
    }
})(TestRangeRight || (TestRangeRight = {}));
// _.runInContext
{
    var result_868;
    result_868 = _.runInContext();
    result_868 = _.runInContext({});
    result_868 = _({}).runInContext();
}
// _.times
var TestTimes;
(function (TestTimes) {
    var iteratee;
    {
        var result_869;
        result_869 = _.times(42);
    }
    {
        var result_870;
        result_870 = _.times(42, iteratee);
        result_870 = _.times(42, iteratee, any);
    }
    {
        var result_871;
        result_871 = _(42).times();
    }
    {
        var result_872;
        result_872 = _(42).times(iteratee);
        result_872 = _(42).times(iteratee, any);
    }
    {
        var result_873;
        result_873 = _(42).chain().times();
    }
    {
        var result_874;
        result_874 = _(42).chain().times(iteratee);
        result_874 = _(42).chain().times(iteratee, any);
    }
})(TestTimes || (TestTimes = {}));
// _.toPath
var TestToPath;
(function (TestToPath) {
    {
        var result_875;
        result_875 = _.toPath(true);
        result_875 = _.toPath(1);
        result_875 = _.toPath('a');
        result_875 = _.toPath(["a"]);
        result_875 = _.toPath({});
    }
    {
        var result_876;
        result_876 = _(true).toPath();
        result_876 = _(1).toPath();
        result_876 = _('a').toPath();
        result_876 = _([1]).toPath();
        result_876 = _(["a"]).toPath();
        result_876 = _({}).toPath();
    }
})(TestToPath || (TestToPath = {}));
// _.uniqueId
var TestUniqueId;
(function (TestUniqueId) {
    {
        var result_877;
        result_877 = _.uniqueId();
        result_877 = _.uniqueId('');
        result_877 = _('').uniqueId();
    }
    {
        var result_878;
        result_878 = _('').chain().uniqueId();
    }
})(TestUniqueId || (TestUniqueId = {}));
result = _.VERSION;
result = _.templateSettings;
// _.partial & _.partialRight
{
    function func0() {
        return 42;
    }
    function func1(arg1) {
        return arg1 * 2;
    }
    function func2(arg1, arg2) {
        return arg1 * arg2.length;
    }
    function func3(arg1, arg2, arg3) {
        return arg1 * arg2.length + (arg3 ? 1 : 0);
    }
    function func4(arg1, arg2, arg3, arg4) {
        return arg1 * arg2.length + (arg3 ? 1 : 0) - arg4;
    }
    var res____;
    var res1___;
    var res_2__;
    var res__3_;
    var res___4;
    var res12__;
    var res1_3_;
    var res1__4;
    var res_23_;
    var res_2_4;
    var res__34;
    var res123_;
    var res12_4;
    var res1_34;
    var res_234;
    var res1234;
    //
    // _.partial
    //
    // with arity 0 function
    res____ = _.partial(func0);
    // with arity 1 function
    res____ = _.partial(func1, 42);
    res1___ = _.partial(func1);
    // with arity 2 function
    res12__ = _.partial(func2);
    res_2__ = _.partial(func2, 42);
    res1___ = _.partial(func2, _, "foo");
    res____ = _.partial(func2, 42, "foo");
    // with arity 3 function
    res123_ = _.partial(func3);
    res_23_ = _.partial(func3, 42);
    res1_3_ = _.partial(func3, _, "foo");
    res__3_ = _.partial(func3, 42, "foo");
    res12__ = _.partial(func3, _, _, true);
    res_2__ = _.partial(func3, 42, _, true);
    res1___ = _.partial(func3, _, "foo", true);
    res____ = _.partial(func3, 42, "foo", true);
    // with arity 4 function
    res1234 = _.partial(func4);
    res_234 = _.partial(func4, 42);
    res1_34 = _.partial(func4, _, "foo");
    res__34 = _.partial(func4, 42, "foo");
    res12_4 = _.partial(func4, _, _, true);
    res_2_4 = _.partial(func4, 42, _, true);
    res1__4 = _.partial(func4, _, "foo", true);
    res___4 = _.partial(func4, 42, "foo", true);
    res123_ = _.partial(func4, _, _, _, 100);
    res_23_ = _.partial(func4, 42, _, _, 100);
    res1_3_ = _.partial(func4, _, "foo", _, 100);
    res__3_ = _.partial(func4, 42, "foo", _, 100);
    res12__ = _.partial(func4, _, _, true, 100);
    res_2__ = _.partial(func4, 42, _, true, 100);
    res1___ = _.partial(func4, _, "foo", true, 100);
    res____ = _.partial(func4, 42, "foo", true, 100);
    //
    // _.partialRight
    //
    // with arity 0 function
    res____ = _.partialRight(func0);
    // with arity 1 function
    res____ = _.partialRight(func1, 42);
    res1___ = _.partialRight(func1);
    // with arity 2 function
    res12__ = _.partialRight(func2);
    res_2__ = _.partialRight(func2, 42, _);
    res1___ = _.partialRight(func2, "foo");
    res____ = _.partialRight(func2, 42, "foo");
    // with arity 3 function
    res123_ = _.partialRight(func3);
    res_23_ = _.partialRight(func3, 42, _, _);
    res1_3_ = _.partialRight(func3, "foo", _);
    res__3_ = _.partialRight(func3, 42, "foo", _);
    res12__ = _.partialRight(func3, true);
    res_2__ = _.partialRight(func3, 42, _, true);
    res1___ = _.partialRight(func3, "foo", true);
    res____ = _.partialRight(func3, 42, "foo", true);
    // with arity 4 function
    res1234 = _.partialRight(func4);
    res_234 = _.partialRight(func4, 42, _, _, _);
    res1_34 = _.partialRight(func4, "foo", _, _);
    res__34 = _.partialRight(func4, 42, "foo", _, _);
    res12_4 = _.partialRight(func4, true, _);
    res_2_4 = _.partialRight(func4, 42, _, true, _);
    res1__4 = _.partialRight(func4, "foo", true, _);
    res___4 = _.partialRight(func4, 42, "foo", true, _);
    res123_ = _.partialRight(func4, 100);
    res_23_ = _.partialRight(func4, 42, _, _, 100);
    res1_3_ = _.partialRight(func4, "foo", _, 100);
    res__3_ = _.partialRight(func4, 42, "foo", _, 100);
    res12__ = _.partialRight(func4, true, 100);
    res_2__ = _.partialRight(func4, 42, _, true, 100);
    res1___ = _.partialRight(func4, "foo", true, 100);
    res____ = _.partialRight(func4, 42, "foo", true, 100);
}
