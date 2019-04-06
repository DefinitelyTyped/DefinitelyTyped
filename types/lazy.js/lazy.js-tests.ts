

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface Foo {
    foo(): string;
}
interface Bar {
    bar(): string;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var foo: Foo;
var bar: Bar;

var fooArr: Foo[];
var barArr: Bar[];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var fooSequence: LazyJS.Sequence<Foo>;
var barSequence: LazyJS.Sequence<Bar>;
var fooArraySeq: LazyJS.ArrayLikeSequence<Foo>;
var barArraySeq: LazyJS.ArrayLikeSequence<Bar>;
var fooObjectSeq: LazyJS.ObjectLikeSequence<Foo>;
var anyObjectSeq: LazyJS.ObjectLikeSequence<any>;
var fooAsyncSeq: LazyJS.AsyncSequence<Foo>;

var strSequence: LazyJS.Sequence<string>;
var anySequence: LazyJS.Sequence<any>;
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

function fnValueCallback(value: Foo): void {
}

function fnGetKeyCallback(value: Foo): string {
    return str;
}

function fnTestCallback(value: Foo): boolean {
    return bool;
}

function fnMapCallback(value: Foo): Bar {
    return bar;
}

function fnMapStringCallback(value: string): string {
    return str;
}

function fnNumberCallback(value: Foo): number {
    return num;
}

function fnMemoCallback(memo: Bar, value: Foo): Bar {
    return bar;
}

function fnCompareCallback(x: any, y: any): number {
    return num;
}

function fnGeneratorCallback(index: number): Foo {
    return foo;
}

// Lazy

fooArraySeq = Lazy(fooArr);
fooObjectSeq = Lazy<Foo>({a: foo, b: foo});
anyObjectSeq = Lazy<any>({a: num, b: str});
stringSeq = Lazy(str);

// Strict

var Strict = Lazy.strict();
fooArraySeq = Strict([foo, foo]).pop();

// Sequence

fooAsyncSeq = fooSequence.async(num);
fooSequence = fooSequence.chunk(num);
fooSequence = fooSequence.compact();
fooSequence = fooSequence.concat(arr);
fooSequence = fooSequence.consecutive(num);
bool = fooSequence.contains(foo);
fooSequence = fooSequence.countBy(str);
fooObjectSeq = fooSequence.countBy(fnGetKeyCallback);
fooSequence = fooSequence.dropWhile(fnTestCallback);
fooSequence = fooSequence.each(fnValueCallback);
bool = fooSequence.every(fnTestCallback);
fooSequence = fooSequence.filter(fnTestCallback);
foo = fooSequence.find(fnTestCallback);
foo = fooSequence.findWhere(obj);

x = fooSequence.first();
fooSequence = fooSequence.first(num);

fooSequence = fooSequence.flatten();
fooObjectSeq = fooSequence.groupBy(fnGetKeyCallback);
num = fooSequence.indexOf(x);
fooSequence = fooSequence.initial();
fooSequence = fooSequence.initial(num);
fooSequence = fooSequence.intersection(arr);
fooSequence = fooSequence.invoke(str);
bool = fooSequence.isEmpty();
str = fooSequence.join();
str = fooSequence.join(str);

foo = fooSequence.last();
fooSequence = fooSequence.last(num);

num = fooSequence.lastIndexOf(foo);
barSequence = fooSequence.map(fnMapCallback);
foo = fooSequence.max();
foo = fooSequence.max(fnNumberCallback);
foo = fooSequence.min();
foo = fooSequence.min(fnNumberCallback);
anySequence = fooSequence.pluck(str);
bar = fooSequence.reduce(fnMemoCallback);
bar = fooSequence.reduce(fnMemoCallback, bar);
bar = fooSequence.reduceRight(fnMemoCallback, bar);
fooSequence = fooSequence.reject(fnTestCallback);
fooSequence = fooSequence.rest(num);
fooSequence = fooSequence.reverse();
fooSequence = fooSequence.shuffle();
bool = fooSequence.some();
bool = fooSequence.some(fnTestCallback);
fooSequence = fooSequence.sort();
fooSequence = fooSequence.sort(fnCompareCallback);
fooSequence = fooSequence.sort(fnCompareCallback, bool);
fooSequence = fooSequence.sortBy(str);
fooSequence = fooSequence.sortBy(str, bool);
fooSequence = fooSequence.sortBy(fnNumberCallback);
fooSequence = fooSequence.sortBy(fnNumberCallback, bool);
num = fooSequence.sortedIndex(foo);
foo = fooSequence.sum();
foo = fooSequence.sum(fnNumberCallback);
fooSequence = fooSequence.takeWhile(fnTestCallback);
fooSequence = fooSequence.union(fooArr);
fooSequence = fooSequence.uniq();
fooSequence = fooSequence.where(obj);
fooSequence = fooSequence.without(foo, foo);
fooSequence = fooSequence.without(fooArr);
fooSequence = fooSequence.zip(arr);

fooArr = fooSequence.toArray();
obj = fooSequence.toObject();

// ArrayLikeSequence

fooArraySeq = fooArraySeq.concat(fooArr);
x = fooArraySeq.first();
fooArraySeq = fooArraySeq.first(num);
foo = fooArraySeq.get(num);
num = fooArraySeq.length();
barArraySeq = fooArraySeq.map(fnMapCallback);
fooArraySeq = fooArraySeq.pop();
fooArraySeq = fooArraySeq.rest();
fooArraySeq = fooArraySeq.rest(num);
fooArraySeq = fooArraySeq.reverse();
fooArraySeq = fooArraySeq.shift();
fooArraySeq = fooArraySeq.slice(num);
fooArraySeq = fooArraySeq.slice(num, num);

// ObjectLikeSequence

fooObjectSeq = fooObjectSeq.defaults(obj);
fooSequence = fooObjectSeq.functions();
x = fooObjectSeq.get(str);
fooObjectSeq = fooObjectSeq.invert();
strSequence = fooObjectSeq.keys();
fooObjectSeq = fooObjectSeq.omit(strArr);
fooSequence = fooObjectSeq.pairs();
fooObjectSeq = fooObjectSeq.pick(strArr);
arr = fooObjectSeq.toArray();
obj = fooObjectSeq.toObject();
fooSequence = fooObjectSeq.values();

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

stringSeq = stringSeq.split(str);
stringSeq = stringSeq.split(exp);

bool = stringSeq.startsWith(str);
stringSeq = stringSeq.substring(num);
stringSeq = stringSeq.substring(num, num);
stringSeq = stringSeq.toLowerCase();
stringSeq = stringSeq.toUpperCase();
