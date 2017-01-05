
import P = require('parsimmon');
import { Parser, Mark, Result, Index } from "parsimmon";

// --  --  --  --  --  --  --  --  --  --  --  --  --

class Foo {
	bar: Bar;
}

class Bar {
	foo: Foo;
}

// --  --  --  --  --  --  --  --  --  --  --  --  --

var str: string;
var strArr: string[];
var bool: boolean;
var num: number;
var index: Index;
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
var indexPar: Parser<Index>;

var fooPar: Parser<Foo>;
var barPar: Parser<Bar>;
var fooOrBarPar: Parser<Foo | Bar>;

// --  --  --  --  --  --  --  --  --  --  --  --  --

var anyArrPar: Parser<any[]>;

var strArrPar: Parser<string[]>;
var fooArrPar: Parser<Foo[]>;
var barArrPar: Parser<Bar[]>;

// --  --  --  --  --  --  --  --  --  --  --  --  --

var fooMarkPar: Parser<Mark<Foo>>;

const result = fooMarkPar.parse(str);
if (result.status) {
	index = result.value.start;
	index = result.value.end;
	foo = result.value.value;
}

// --  --  --  --  --  --  --  --  --  --  --  --  --

var fooResult: Result<Foo>;

// https://github.com/Microsoft/TypeScript/issues/12882
if (fooResult.status === true) {
	foo = fooResult.value;
} else {
	strArr = fooResult.expected;
	index = fooResult.index;
}

// --  --  --  --  --  --  --  --  --  --  --  --  --

fooResult = P.makeSuccess(0, foo);
fooResult = P.makeFailure(0, '');

fooPar = P((input: string, i: number) => P.makeSuccess(0, foo));
fooPar = P.Parser((input: string, i: number) => P.makeSuccess(0, foo));

// --  --  --  --  --  --  --  --  --  --  --  --  --

fooResult = fooPar.parse(str);
foo = fooPar.tryParse(str);

fooPar = fooPar.or(fooPar);
fooOrBarPar = fooPar.or(barPar);

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

fooOrBarPar = fooPar.fallback(bar);

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
fooPar = P.fail(str);

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
indexPar = P.index;

// --  --  --  --  --  --  --  --  --  --  --  --  --

bool = P.isParser(numPar);
bool = P.isParser(null);
bool = P.isParser(42);

strPar = P.oneOf('a');
strPar = P.noneOf('a');

strPar = P.regex(/foo/);
strPar = P.regex(/foo/, 3);
strPar = P.regexp(/bar/);
strPar = P.regexp(/bar/, 3);

fooPar = P.of(foo);

str = P.formatError('foo', strPar.parse('bar'));

strPar = P.seqMap(P.digit, (a: string) => 'foo');
numPar = P.seqMap(P.digit, P.digits, (a: string, b: string) => 42);
strPar = P.seqMap(P.digit, P.digits, P.letter, (a: string, b: string, c: string) => 'foo');
strPar = P.seqMap(P.digit, P.digits, P.letter, P.letters.map(Number), (a: string, b: string, c: string, d: number) => 'foo');

strArrPar = P.sepBy(P.string('foo'), P.string('bar'));
strArrPar = P.sepBy1(P.string('foo'), P.string('bar'));

strPar = P.test((a: string) => false);

strPar = P.takeWhile((a: string) => true);
