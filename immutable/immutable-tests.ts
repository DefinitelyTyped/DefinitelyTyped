/// <reference path="immutable.d.ts" />

import immutable = require('immutable')

// List tests

let list: immutable.List<number> = immutable.List<number>([0, 1, 2, 3, 4, 5]);
let list1: immutable.List<number> = immutable.List<number>(list);

list = immutable.List.of<number>(0, 1, 2, 3, 4);
let bool: boolean = immutable.List.isList(list);

list = list.set(0, 1);
list = list.delete(0);
list = list.remove(0);
list = list.insert(0, 1);
list = list.clear();
list = list.push(0, 1, 2, 3, 4, 5);
list = list.pop();
list = list.unshift(1, 2, 3);
list = list.shift();
list = list.update((value: immutable.List<number>) => value);
list = list.update(1, (value: number) => value);
list = list.update(1, 1, (value: number) => value);
list = list.merge(list1, list);
list = list.merge([0, 1, 2], [3, 4, 5]);
list = list.mergeWith((prev: number, next: number, key: number) => prev, list, list1);
list = list.mergeWith((prev: number, next: number, key: number) => prev, [0, 1, 2], [3, 4, 5]);
list = list.mergeDeep(list1, list);
list = list.mergeDeep([0, 1, 2], [3, 4, 5]);
list = list.mergeDeepWith((prev: number, next: number, key: number) => prev, list, list1);
list = list.mergeDeepWith((prev: number, next: number, key: number) => prev, [0, 1, 2], [3, 4, 5]);
list = list.setSize(5);
list = list.setIn([0, 1, 2], 5);
list = list.deleteIn([0, 1, 2]);
list = list.removeIn([0, 1, 2]);
list = list.updateIn([0, 1, 2], value => value);
list = list.updateIn([0, 1, 2], 1, value => value);
list = list.mergeIn([0, 1, 2], list, list1);
list = list.mergeIn([0, 1, 2], [0, 1, 2], [3, 4, 5]);
list = list.mergeDeepIn([0, 1, 2], list, list1);
list = list.mergeDeepIn([0, 1, 2], [0, 1, 2], [3, 4, 5]);
list = list.withMutations((mutable: immutable.List<number>) => mutable);
list = list.asMutable();
list = list.asImmutable();

// Collection.Indexed
let indexedSeq: immutable.Seq.Indexed<number> = list.toSeq();

// Iterable tests 
let value: number = list.get(0);
value = list.get(0, 1);
list = list.interpose(0);
list = list.interleave(list, list1);
list = list.splice(0, 2, 4, 5, 6);
list = list.zip(list1);
let indexedIterable: immutable.Iterable.Indexed<number> = list.zipWith<number, number>(
    (value: number, other: number) => value + other,
    list1
);
let indexedIterable1: immutable.Iterable.Indexed<number> = list.zipWith<number, number, number>(
    (value: number, other: number, third: number) => value + other + third,
    list1,
    indexedIterable
);
indexedIterable = list.zipWith<number>(
    (value: number, other: number, third: number) => value + other + third,
    list1,
    indexedIterable1
);
value = list.indexOf(1);
value = list.lastIndexOf(1);
value = list.findIndex((value: number, index: number, iter: immutable.List<number>) => true);
value = list.findLastIndex((value: number, index: number, iter: immutable.List<number>) => true);
value = list.size;

bool = list.equals(list1);
value = list.hashCode();
bool = list.has(1);
bool = list.includes(1);
bool = list.contains(1);
value = list.first();
value = list.last();
let toArr: number[] = list.toArray();
let toMap: immutable.Map<number, number> = list.toMap();
let toOrderedMap: immutable.OrderedMap<number, number> = list.toOrderedMap();
let toSet: immutable.Set<number> = list.toSet();
let toOrderedSet: immutable.OrderedSet<number> = list.toOrderedSet();
list = list.toList();
let toStack: immutable.Stack<number> = list.toStack();
let toKeyedSeq: immutable.Seq.Keyed<number, number> = list.toKeyedSeq();
indexedSeq = list.toIndexedSeq();
let toSetSeq: immutable.Seq.Set<number> = list.toSetSeq();

let iter: immutable.Iterator<number> = list.keys();
iter = list.values();
let iter1: immutable.Iterator<[number, number]> = list.entries();

indexedSeq = list.keySeq();
indexedSeq = list.valueSeq();
let indexedSeq1: immutable.Seq.Indexed<[number, number]> = list.entrySeq();

let iter2: immutable.Iterable<number, string> = list.map<string>(
    (value: number, key: number, iter: immutable.List<number>) => "foo"
)

list = list.filterNot((value: number, key: number, iter: immutable.List<number>) => true);
list = list.reverse();
list = list.sort((valA: number, valB: number) => 0);
list = list.sortBy<string>(
    (value: number, key: number, iter: immutable.List<number>) => "foo",
    (valueA: string, valueB: string) => 0
);

let keyedSeq2: immutable.Seq.Keyed<string, immutable.List<number>> = list.groupBy<string>(
    (value: number, key: number, iter: immutable.List<number>) => ""
);

value = list.forEach((value: number, key: number, iter: immutable.List<number>) => true);
list = list.slice(0, 1);
list = list.rest();
list = list.butLast();
list = list.skip(0);
list = list.skipLast(0);
list = list.skipWhile(
    (value: number, key: number, iter: immutable.List<number>) => true
);
list = list.take(2);
list = list.takeLast(2);
list = list.takeWhile(
    (value: number, key: number, iter: immutable.List<number>) => true
);
list = list.takeUntil(
    (value: number, key: number, iter: immutable.List<number>) => true
);
list = list.concat(list1, 2, 3);
list = list.flatten(1);
list = list.flatten(true);
let str: string = list.reduce<string>(
    (red: string, value: number, key: number, iter: immutable.List<number>) => red + "bar",
    "foo"
);
str = list.reduceRight<string>(
    (red: string, value: number, key: number, iter: immutable.List<number>) => red + "bar",
    "foo"
);
bool = list.every(
    (value: number, key: number, iter: immutable.List<number>) => true
);
bool = list.some(
    (value: number, key: number, iter: immutable.List<number>) => true
);
str = list.join(",");
bool = list.isEmpty();
value = list.count();
value = list.count(
    (value: number, key: number, iter: immutable.List<number>) => true
);
let keyedSeq3: immutable.Seq.Keyed<string, number> = list.countBy<string>(
    (value: number, key: number, iter: immutable.List<number>) => "foo"
);
value = list.find(
    (value: number, key: number, iter: immutable.List<number>) => true,
    null,
    0
);
value = list.findLast(
    (value: number, key: number, iter: immutable.List<number>) => true,
    null,
    0
);
let tuple: [number, number] = list.findEntry(
    (value: number, key: number, iter: immutable.List<number>) => true,
    null,
    0
);
tuple = list.findLastEntry(
    (value: number, key: number, iter: immutable.List<number>) => true,
    null,
    0
);
value = list.findKey(
    (value: number, key: number, iter: immutable.List<number>) => true,
    null
); 
value = list.findLastKey(
    (value: number, key: number, iter: immutable.List<number>) => true,
    null
); 
value = list.keyOf(0);
value = list.lastKeyOf(0);
value = list.max((valA: number, valB: number) => 0);
value = list.maxBy<string>(
    (value: number, key: number, iter: immutable.List<number>) => "foo",
    (valueA: string, valueB: string) => 0
);
value = list.min((valA: number, valB: number) => 0);
value = list.minBy<string>(
    (value: number, key: number, iter: immutable.List<number>) => "foo",
    (valueA: string, valueB: string) => 0
);
bool = list.isSubset(list1);
bool = list.isSubset([0, 1, 2]);
bool = list.isSuperset(list1);
bool = list.isSuperset([0, 1, 2]);


// Map tests

let map: immutable.Map<string, number> = immutable.Map<string, number>();
map = immutable.Map<string, number>([["foo", 1], ["bar", 2]]);
let map1: immutable.Map<string, number> = immutable.Map<string, number>(map);
map = map.set("baz", 3);
map.delete("foo");
map.remove("foo");
map = map.clear();
map = map.update((value: immutable.Map<string, number>) => value);
map = map.update("foo", (value: number) => value);
map = map.update("bar", 1, (value: number) => value);
map = map.merge(map1, map);
map = map.merge({ "foo": 0, "bar": 1}, {"baz": 2});
map = map.mergeWith((prev: number, next: number, key: string) => prev, map, map1);
map = map.mergeWith((prev: number, next: number, key: string) => prev,{ "foo": 0, "bar": 1}, {"baz": 2});
map = map.mergeDeep(map1, map);
map = map.mergeDeep({ "foo": 0, "bar": 1}, {"baz": 2});
map = map.mergeDeepWith((prev: number, next: number, key: string) => prev, map, map1);
map = map.mergeDeepWith((prev: number, next: number, key: string) => prev, { "foo": 0, "bar": 1}, {"baz": 2});
map = map.setIn([0, 1, 2], 5);
map = map.deleteIn([0, 1, 2]);
map = map.removeIn([0, 1, 2]);
map = map.updateIn([0, 1, 2], value => value);
map = map.updateIn([0, 1, 2], 1, value => value);
map = map.mergeIn([0, 1, 2], map, map1);
map = map.mergeIn([0, 1, 2], { "foo": 0, "bar": 1}, {"baz": 2});
map = map.mergeDeepIn([0, 1, 2], map, map1);
map = map.mergeDeepIn([0, 1, 2], { "foo": 0, "bar": 1}, {"baz": 2});
map = map.withMutations((mutable: immutable.Map<string, number>) => mutable);
map = map.asMutable();
map = map.asImmutable();

bool = immutable.Map.isMap(map);
map = immutable.Map.of<string, number>("foo", 0, "bar", 1);

// OrderedMap tests
bool = immutable.OrderedMap.isOrderedMap(toOrderedMap);
toOrderedMap = immutable.OrderedMap(toOrderedMap);

// Set tests
let set: immutable.Set<number> = immutable.Set.of<number>(0, 1, 2, 3);
bool = immutable.Set.isSet(set);
set = immutable.Set.fromKeys<number>(toMap);
let set1: immutable.Set<string> = immutable.Set.fromKeys({ "foo": 1, "bar": 2});
set = immutable.Set<number>();
set = immutable.Set<number>(set);
set = set.add(3);
set.delete(1);
set.remove(2);
set = set.clear();
set = set.union(map, list);
set = set.union([1, 2, 3], [4, 5, 6]);
set = set.merge(map1, list);
set = set.merge([1, 2, 3], [4, 5, 6]);
set = set.intersect(map1, list);
set = set.intersect([1, 2, 3], [4, 5, 6]);
set = set.subtract(map1, list);
set = set.subtract([1, 2, 3], [4, 5, 6]);
set = set.withMutations((mutable: immutable.Set<number>) => mutable);
set = set.asMutable();
set = set.asImmutable();


// OrderedSet tests
bool = immutable.OrderedSet.isOrderedSet(set);
let orderedSet1: immutable.OrderedSet<number> = immutable.OrderedSet.of<number>(0, 1, 2, 3);
orderedSet1 = immutable.OrderedSet.fromKeys<number>(toMap);
let orderedSet2: immutable.Set<string> = immutable.Set.fromKeys({ "foo": 1, "bar": 2});

// Stack tests

let stack: immutable.Stack<number> = immutable.Stack<number>();
bool = immutable.Stack.isStack(stack);
stack = immutable.Stack.of<number>(0, 1, 2, 3, 4, 5);
stack = immutable.Stack<number>(list);
value = stack.peek();
stack = stack.clear();
stack = stack.unshift(0, 1, 2);
stack = stack.unshiftAll(list);
stack = stack.unshiftAll([1, 2, 3]);
stack = stack.shift();
stack = stack.push(1, 2, 3);
stack = stack.pushAll(list);
stack = stack.pushAll([1, 2, 3]);
stack = stack.pop();
stack = stack.withMutations((mutable: immutable.Stack<number>) => mutable);
stack = stack.asMutable();
stack = stack.asImmutable();


// Range and Repeat function tests

let funcSeqIndexed: immutable.Seq.Indexed<number> = immutable.Range(0, 3, 1);
funcSeqIndexed = immutable.Repeat<number>(2, 10);


// Seq tests 
let seq: immutable.Seq<string, number> = immutable.Seq<string, number>();
bool = immutable.Seq.isSeq(seq);
funcSeqIndexed = immutable.Seq.of<number>(0, 1, 2, 3);
seq = immutable.Seq<string, number>(map);
value = seq.size;
seq = seq.cacheResult();


// keyed
let seqKeyed: immutable.Seq.Keyed<string, number> = immutable.Seq.Keyed<string, number>();
seqKeyed = immutable.Seq.Keyed<string, number>(map);
seqKeyed = seqKeyed.toSeq();

// indexed
let seqIndexed: immutable.Seq.Indexed<number> = immutable.Seq.Indexed<number>();
seqIndexed = immutable.Seq.Indexed.of<number>(0, 1, 2, 3);
seqIndexed = immutable.Seq.Indexed<number>(list);
seqIndexed = seqIndexed.toSeq();

// indexed
let seqSet: immutable.Seq.Set<number> = immutable.Seq.Set<number>();
seqSet = immutable.Seq.Set.of<number>(0, 1, 2, 3);
seqSet = immutable.Seq.Set<number>(list);
seqSet = seqSet.toSeq();
