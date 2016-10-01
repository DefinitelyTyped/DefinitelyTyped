/// <reference path="parsimmon.d.ts" />

import P = require('parsimmon');
import Parser = P.Parser;
import Mark = P.Mark;
import Result = P.Result;

// --  --  --  --  --  --  --  --  --  --  --  --  --

class Foo {
	bar: Bar;
}

class Bar {
	foo: Foo;
}

// --  --  --  --  --  --  --  --  --  --  --  --  --

var str: string;
var bool: boolean;
var num: number;
var regex: RegExp;

var foo: Foo;
var bar: Bar;

var strArr: string[];
var fooArr: Foo[];
var barArr: Bar[];

// --  --  --  --  --  --  --  --  --  --  --  --  --

var strPar: Parser<string>;
var numPar: Parser<number>;
var voidPar: Parser<void>;
var anyPar: Parser<any>;

var fooPar: Parser<Foo>;
var barPar: Parser<Bar>;

// --  --  --  --  --  --  --  --  --  --  --  --  --

var anyArrPar: Parser<any[]>;

var fooArrPar: Parser<Foo[]>;
var barArrPar: Parser<Bar[]>;

// --  --  --  --  --  --  --  --  --  --  --  --  --

var fooMarkPar: Parser<Mark<Foo>>;

// --  --  --  --  --  --  --  --  --  --  --  --  --

var fooResult: Result<Foo>;

bool = fooResult.status;
foo = fooResult.value;
str = fooResult.expected;
num = fooResult.index;

// --  --  --  --  --  --  --  --  --  --  --  --  --

fooResult = fooPar.parse(str);

fooPar = fooPar.or(fooPar);
anyPar = fooPar.or(barPar);

barPar = fooPar.chain((f) => {
	foo = f;
	return barPar;
});

barPar = fooPar.then((f) => {
	foo = f;
	return barPar;
});
barPar = fooPar.then(barPar);

barPar = fooPar.map((f) => {
	foo = f;
	return bar;
});

// --  --  --  --  --  --  --  --  --  --  --  --  --

fooPar = fooPar.skip(barPar);

barPar = barPar = fooPar.result(bar);

// --  --  --  --  --  --  --  --  --  --  --  --  --

fooArrPar = fooPar.many();
fooArrPar = fooPar.times(num);
fooArrPar = fooPar.times(num, num);
fooArrPar = fooPar.atMost(num);
fooArrPar = fooPar.atLeast(num);

fooMarkPar = fooPar.mark();

fooPar = fooPar.desc(str);

// --  --  --  --  --  --  --  --  --  --  --  --  --

strPar = P.string(str);
strPar = P.regex(regex);

fooPar = P.succeed(foo);

fooArrPar = P.seq(fooPar, fooPar);
var par: Parser<[Bar, Foo, number]> = P.seq(barPar, fooPar, numPar);
var par2: Parser<number> = P.seq(barPar, fooPar, numPar).map(([a, b, c]: [Bar, Foo, number]) => 42);

fooPar = P.custom<Foo>((success, failure) => (stream, i) => { str = stream; num = i; return success(num, foo); });
fooPar = P.custom<Foo>((success, failure) => (stream, i) => failure(num, str));

fooPar = P.alt(fooPar, fooPar);
anyPar = P.alt(barPar, fooPar, numPar);


fooPar = P.lazy(() => {
	return fooPar;
});

voidPar = P.fail(str);
fooPar = P.fail<Foo>(str);

// --  --  --  --  --  --  --  --  --  --  --  --  --

strPar = P.letter;
strPar = P.letters;

strPar = P.digit;
strPar = P.digits;

strPar = P.whitespace;
strPar = P.optWhitespace;

strPar = P.any;
strPar = P.all;
voidPar = P.eof;
numPar = P.index;

// --  --  --  --  --  --  --  --  --  --  --  --  --

P.isParser(numPar);
P.isParser(null);
P.isParser(42);

P.oneOf('a');
P.noneOf('a');

P.regex(/foo/);
P.regex(/foo/, 3);

P.of(foo);

P.formatError('foo', strPar.parse('bar'));

P.seqMap(P.digit, (a: string) => 'foo').parse('foo');
P.seqMap(P.digit, P.digits, (a: string, b: string) => 'foo').parse('foo');
P.seqMap(P.digit, P.digits, P.letter, (a: string, b: string, c: string) => 'foo').parse('foo');
P.seqMap(P.digit, P.digits, P.letter, P.letters.map(Number), (a: string, b: string, c: string, d: number) => 'foo').parse('foo');

P.sepBy(P.string('foo'), P.string('bar')).parse('foo');
P.sepBy1(P.string('foo'), P.string('bar')).parse('foo');

P.test((a: string) => false).parse('foo');

P.takeWhile((a: string) => true).parse('foo');