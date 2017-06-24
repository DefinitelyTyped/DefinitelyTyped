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

let str: string;
let strArr: string[];
let bool: boolean;
let num: number;
let index: Index;

let foo: Foo;
declare const bar: Bar;

// --  --  --  --  --  --  --  --  --  --  --  --  --

let strPar: Parser<string>;
let numPar: Parser<number>;
let voidPar: Parser<void>;
let anyPar: Parser<any>;
let nullPar: Parser<null>;
let emptyStrPar: Parser<''>;
let indexPar: Parser<Index>;

let fooPar: Parser<Foo>;
let barPar: Parser<Bar>;
let fooOrBarPar: Parser<Foo | Bar>;

// --  --  --  --  --  --  --  --  --  --  --  --  --

let strArrPar: Parser<string[]>;
let fooArrPar: Parser<Foo[]>;

// --  --  --  --  --  --  --  --  --  --  --  --  --

let fooMarkPar: Parser<Mark<Foo>>;

const result = fooMarkPar.parse(str);
if (result.status) {
	index = result.value.start;
	index = result.value.end;
	foo = result.value.value;
}

// --  --  --  --  --  --  --  --  --  --  --  --  --

let fooResult: Result<Foo>;

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
strPar = P.regex(/rgx/);

fooPar = P.succeed(foo);

fooArrPar = P.seq(fooPar, fooPar);
const par: Parser<[Bar, Foo, number]> = P.seq(barPar, fooPar, numPar);
const par2: Parser<number> = P.seq(barPar, fooPar, numPar).map(([a, b, c]: [Bar, Foo, number]) => 42);

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

nullPar = P.notFollowedBy(fooPar);
emptyStrPar = P.lookahead(str);
emptyStrPar = P.lookahead(/foo/);
emptyStrPar = P.lookahead(fooPar);

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
