// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface Foo {
    key: string;
    foo(): string;
}
interface Bar {
    bar(): string;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

declare var foo: Foo;
declare var bar: Bar;

declare var fooArr: Foo[];
declare var barArr: Bar[];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

declare var fooSequence: LazyJS.Sequence<Foo>;
declare var fooTupleSequence: LazyJS.Sequence<readonly [Foo, Foo, Foo, Foo, Foo]>;
declare var fooArrSequence: LazyJS.Sequence<Foo[]>;
declare var barSequence: LazyJS.Sequence<Bar>;
declare var fooArraySeq: LazyJS.ArrayLikeSequence<Foo>;
declare var barArraySeq: LazyJS.ArrayLikeSequence<Bar>;
declare var numObjectSeq: LazyJS.ObjectLikeSequence<number>;
declare var fooObjectSeq: LazyJS.ObjectLikeSequence<Foo>;
declare var fooBarObjectSeq: LazyJS.ObjectLikeSequence<Foo | Bar>;
declare var anyObjectSeq: LazyJS.ObjectLikeSequence<any>;
declare var fooAsyncSeq: LazyJS.AsyncSequence<Foo>;

declare var strSequence: LazyJS.Sequence<string>;
declare var unknownSequence: LazyJS.Sequence<unknown>;
declare var stringSeq: LazyJS.StringLikeSequence;

declare var obj: Object;
declare var bool: boolean;
declare var num: number;
declare var const5: 5;
declare var str: string;
var x: any = null;
declare var arr: any[];
declare var exp: RegExp;
declare var strArr: string[];
declare var numArr: string[];
declare var fooByNumber: Record<number, Foo>;

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
fooObjectSeq = Lazy<Foo>({ a: foo, b: foo });
anyObjectSeq = Lazy<any>({ a: num, b: str });
// $ExpectType ObjectLikeSequence<Foo>
Lazy(fooByNumber);
stringSeq = Lazy(str);

// Strict

var Strict = Lazy.strict();
fooArraySeq = Strict([foo, foo]).pop();

// Sequence

fooAsyncSeq = fooSequence.async(num);
fooArrSequence = fooSequence.chunk(num);
fooTupleSequence = fooSequence.chunk(const5);
unknownSequence = fooSequence.chunk(0);
fooSequence = fooSequence.compact();
fooSequence = fooSequence.concat(arr);
fooSequence = fooSequence.consecutive(num);
bool = fooSequence.contains(foo);
numObjectSeq = fooSequence.countBy("key");
numObjectSeq = fooSequence.countBy(fnGetKeyCallback);
fooSequence = fooSequence.dropWhile(fnTestCallback);
fooSequence = fooSequence.each(fnValueCallback);
bool = fooSequence.every(fnTestCallback);
fooSequence = fooSequence.filter(fnTestCallback);
// $ExpectType Foo | undefined
fooSequence.find(fnTestCallback);
foo = fooSequence.findWhere(obj);

x = fooSequence.first();
fooSequence = fooSequence.first(num);

fooSequence = fooSequence.flatten();
// $ExpectType ObjectLikeSequence<Foo[]>
fooSequence.groupBy(fnGetKeyCallback);
num = fooSequence.indexOf(x);
fooSequence = fooSequence.initial();
fooSequence = fooSequence.initial(num);
fooSequence = fooSequence.intersection(arr);
// $ExpectType Sequence<unknown>
fooSequence.invoke(str);
bool = fooSequence.isEmpty();
str = fooSequence.join();
str = fooSequence.join(str);

// $ExpectType Foo | undefined
fooSequence.last();
fooSequence = fooSequence.last(num);

num = fooSequence.lastIndexOf(foo);
barSequence = fooSequence.map(fnMapCallback);
foo = fooSequence.max();
foo = fooSequence.max(fnNumberCallback);
foo = fooSequence.min();
foo = fooSequence.min(fnNumberCallback);
strSequence = fooSequence.pluck("key");
// $ExpectType Foo | Bar | undefined
fooSequence.reduce(() => bar);
bar = fooSequence.reduce(fnMemoCallback, bar);
// $ExpectType Foo | Bar | undefined
fooSequence.reduceRight(() => bar);
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
num = fooSequence.sum();
num = fooSequence.sum(fnNumberCallback);
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
// $ExpectType Foo | undefined
fooArraySeq.get(num);
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

fooObjectSeq = fooObjectSeq.defaults(foo);
fooBarObjectSeq = fooObjectSeq.defaults(bar);
// $ExpectType Sequence<keyof Foo>
fooObjectSeq.functions();
x = fooObjectSeq.get(str);
fooObjectSeq = fooObjectSeq.invert();
strSequence = fooObjectSeq.keys();
fooObjectSeq = fooObjectSeq.omit(strArr);
// $ExpectType Sequence<[string, Foo]>
fooObjectSeq.pairs();
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

// flatten
declare var fooSeqSeqSequence: LazyJS.Sequence<LazyJS.Sequence<LazyJS.Sequence<Foo>>>;
fooSequence = fooSeqSeqSequence.flatten();
fooSequence = fooSeqSeqSequence.flatten(true).flatten(true);
