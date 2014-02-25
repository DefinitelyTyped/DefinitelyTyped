/// <reference path="lazy.js.d.ts" />

var sequence: LazyJS.Sequence;
var arraySeq: LazyJS.ArrayLikeSequence;
var objectSeq: LazyJS.ObjectLikeSequence;
var asyncSeq: LazyJS.AsyncSequence;
var stringSeq: LazyJS.StringLikeSequence;

var obj: Object;
var bool: boolean;
var num: number;
var str: string;
var x: any = null;
var arr: any[];
var exp: RegExp;
var strArr: string[];
var numArr: string[];

function fnCallback(): void {
}

function fnErrorCallback(error: any): void {

}

function fnValueCallback(value: any): void {
}

function fnGetKeyCallback(value: any): string {
	return '';
}

function fnTestCallback(value: any): boolean {
	return false;
}

function fnMapCallback(value: any): any {
	return null;
}

function fnMapStringCallback(value: string): string {
	return '';
}

function fnNumberCallback(value: any): number {
	return 0;
}

function fnMemoCallback(memo: any, value: any): any {
	return null;
}

function fnGeneratorCallback(index: number): any {
	return null;
}

// Lazy

arraySeq = Lazy([]);
objectSeq = Lazy({});
stringSeq = Lazy('');

// Strict

var Strict = Lazy.strict();
arraySeq = Strict([1, 2, num]).pop();

// Sequence

asyncSeq = sequence.async(num);
sequence = sequence.chunk(num);
sequence = sequence.compact();
sequence = sequence.concat(arr);
sequence = sequence.consecutive(num);
bool = sequence.contains(x);
sequence = sequence.countBy(str);
sequence = sequence.countBy(fnGetKeyCallback);
sequence = sequence.dropWhile(fnTestCallback);
sequence = sequence.each(fnValueCallback);
bool = sequence.every(fnTestCallback);
sequence = sequence.filter(fnTestCallback);
sequence = sequence.find(fnTestCallback);
sequence = sequence.findWhere(obj);

x = sequence.first();
sequence = sequence.first(num);

sequence = sequence.flatten();
objectSeq = sequence.groupBy(fnGetKeyCallback);
sequence = sequence.indexOf(x);
sequence = sequence.initial();
sequence = sequence.initial(num);
sequence = sequence.intersection(arr);
sequence = sequence.invoke(str);
bool = sequence.isEmpty();
str = sequence.join();
str = sequence.join(str);

x = sequence.last();
sequence = sequence.last(num);

sequence = sequence.lastIndexOf(x);
sequence = sequence.map(fnMapCallback);
x = sequence.max();
x = sequence.max(fnNumberCallback);
x = sequence.min();
x = sequence.min(fnNumberCallback);
sequence = sequence.pluck(str);
x = sequence.reduce(fnMemoCallback);
x = sequence.reduce(fnMemoCallback, x);
x = sequence.reduceRight(fnMemoCallback, x);
sequence = sequence.reject(fnTestCallback);
sequence = sequence.rest(num);
sequence = sequence.reverse();
sequence = sequence.shuffle();
bool = sequence.some();
bool = sequence.some(fnTestCallback);
sequence = sequence.sortBy(fnNumberCallback);
sequence = sequence.sortedIndex(x);
sequence = sequence.sum();
sequence = sequence.sum(fnNumberCallback);
sequence = sequence.takeWhile(fnTestCallback);
sequence = sequence.union(arr);
sequence = sequence.uniq();
sequence = sequence.where(obj);
sequence = sequence.without(arr);
sequence = sequence.zip(arr);

arr = sequence.toArray();
obj = sequence.toObject();

// ArrayLikeSequence

arraySeq = arraySeq.concat();
arraySeq = arraySeq.first();
arraySeq = arraySeq.first(num);
x = arraySeq.get(num);
num = arraySeq.length();
arraySeq = arraySeq.map(fnMapCallback);
arraySeq = arraySeq.pop();
arraySeq = arraySeq.rest();
arraySeq = arraySeq.rest(num);
arraySeq = arraySeq.reverse();
arraySeq = arraySeq.shift();
arraySeq = arraySeq.slice(num);
arraySeq = arraySeq.slice(num, num);

// ObjectLikeSequence

objectSeq = objectSeq.defaults(obj);
sequence = objectSeq.functions();
objectSeq = objectSeq.get(str);
objectSeq = objectSeq.invert();
sequence = objectSeq.keys();
objectSeq = objectSeq.omit(strArr);
sequence = objectSeq.pairs();
objectSeq = objectSeq.pick(strArr);
arr = objectSeq.toArray();
obj = objectSeq.toObject();
sequence = objectSeq.values();

// StringLikeSequence

str = stringSeq.charAt(num);
num = stringSeq.charCodeAt(num);
bool = stringSeq.contains(str);
bool = stringSeq.endsWith(str);

str = stringSeq.first();
stringSeq = stringSeq.first(num);

num = stringSeq.indexOf(str);
num = stringSeq.indexOf(str, num);

str = stringSeq.last();
stringSeq = stringSeq.last(num);

num = stringSeq.lastIndexOf(str);
num = stringSeq.lastIndexOf(str, num);
stringSeq = stringSeq.mapString(fnMapStringCallback);
stringSeq = stringSeq.match(exp);
stringSeq = stringSeq.reverse();

sequence = stringSeq.split(str);
sequence = stringSeq.split(exp);

bool = stringSeq.startsWith(str);
stringSeq = stringSeq.substring(num);
stringSeq = stringSeq.substring(num, num);
stringSeq = stringSeq.toLowerCase();
stringSeq = stringSeq.toUpperCase();
