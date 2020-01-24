import P = require('parsimmon');
import { Parser, Mark, Result, Index, Reply, Language, TypedLanguage } from "parsimmon";

// --  --  --  --  --  --  --  --  --  --  --  --  --

class Foo {
	bar: Bar;
}

class Bar {
	foo: Foo;
}

// --  --  --  --  --  --  --  --  --  --  --  --  --

let str: string = null!;
let strArr: string[];
let bool: boolean;
let num: number = null!;
let index: Index;

let foo: Foo = null!;
declare const bar: Bar;

// --  --  --  --  --  --  --  --  --  --  --  --  --

let strPar: Parser<string>;
let numPar: Parser<number> = null!;
let voidPar: Parser<void>;
let anyPar: Parser<any>;
let nullPar: Parser<null>;
let emptyStrPar: Parser<''>;
let indexPar: Parser<Index>;

let fooPar: Parser<Foo> = null!;
let barPar: Parser<Bar> = null!;
let fooOrBarPar: Parser<Foo | Bar>;

// --  --  --  --  --  --  --  --  --  --  --  --  --

let strArrPar: Parser<string[]>;
let fooArrPar: Parser<Foo[]>;

// --  --  --  --  --  --  --  --  --  --  --  --  --

let fooMarkPar: Parser<Mark<Foo>> = null!;

const result = fooMarkPar.parse(str);
if (result.status) {
	index = result.value.start;
	index = result.value.end;
	foo = result.value.value;
}

// --  --  --  --  --  --  --  --  --  --  --  --  --

let fooResult: Result<Foo> = fooPar.parse("");

// https://github.com/Microsoft/TypeScript/issues/12882
if (fooResult.status === true) {
	foo = fooResult.value;
} else {
	strArr = fooResult.expected;
	index = fooResult.index;
}

// --  --  --  --  --  --  --  --  --  --  --  --  --
let fooReply: Reply<Foo>;

fooReply = P.makeSuccess(0, foo);
fooReply = P.makeFailure(0, '');
fooReply = P.makeFailure(0, ['', '']);

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

strPar = P.string(str);

strPar = strPar.contramap((f) => {
	f; // $ExpectType string
	return f.toUpperCase();
});

barPar = strPar.promap((f) => {
	f; // $ExpectType string
	return 3;
}, (f) => {
	f; // $ExpectType number
	return bar;
});

// --  --  --  --  --  --  --  --  --  --  --  --  --

fooPar = fooPar.skip(barPar);

fooPar = fooPar.wrap(barPar, strPar);

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
fooPar = fooPar.desc([str, str]);

// --  --  --  --  --  --  --  --  --  --  --  --  --

strPar = P.string(str);
strPar = P.regex(/rgx/);

fooPar = P.succeed(foo);

fooArrPar = P.seq(fooPar, fooPar);
const par: Parser<[Bar, Foo, number]> = P.seq(barPar, fooPar, numPar);
const par2: Parser<number> = P.seq(barPar, fooPar, numPar).map(([a, b, c]: [Bar, Foo, number]) => 42);
const par3: Parser<[string, string, string, number, string, string, string, number]> = P.seq(fooPar, fooPar, fooPar, numPar, fooPar, fooPar, fooPar, numPar);

interface SeqObj {
	first: number;
	second: string;
	third: Foo;
}

const seqObjPar: Parser<SeqObj> = P.seqObj<SeqObj>(
	['first', numPar],
	barPar,
	fooArrPar,
	['third', fooPar],
	['second', strPar]);

fooPar = P.custom<Foo>((success, failure) => (stream, i) => { str = stream; num = i; return success(num, foo); });
fooPar = P.custom<Foo>((success, failure) => (stream, i) => failure(num, str));

fooPar = P.alt(fooPar, fooPar);
anyPar = P.alt(barPar, fooPar, numPar);

fooPar = P.lazy(() => {
	return fooPar;
});

voidPar = P.fail(str);
fooPar = P.fail(str);

fooPar = P.empty(); // $ExpectType Parser<never>

// --  --  --  --  --  --  --  --  --  --  --  --  --

const bytePar: Parser<number> = P.byte(3);

const byteParMany: Parser<number[]> = P.bitSeq([1, 2, 5, 1]);

interface ByteSeqObj {
	first: number;
	second: number;
	third: number;
}

const byteParObj: Parser<ByteSeqObj> = P.bitSeqObj([
	['first', 3],
	6,
	['second', 8],
	7,
	['third', 9],
]);

const byteParObjErr: Parser<ByteSeqObj> = P.bitSeqObj([ // $ExpectError
	['first', 3],
	6,
	['second', 8],
	7,
	/* missing 'third' key */
]);

// --  --  --  --  --  --  --  --  --  --  --  --  --

strPar = P.letter;
strPar = P.letters;

strPar = P.digit;
strPar = P.digits;

strPar = P.whitespace;
strPar = P.optWhitespace;

strPar = P.cr;
strPar = P.lf;
strPar = P.crlf;
strPar = P.newline;
const voidOrStrPar: Parser<undefined | string> = P.end;

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

strPar = P.range('a', 'z');

strPar = P.regex(/foo/);
strPar = P.regex(/foo/, 3);
strPar = P.regexp(/bar/);
strPar = P.regexp(/bar/, 3);

nullPar = P.notFollowedBy(fooPar);
emptyStrPar = P.lookahead(str);
emptyStrPar = P.lookahead(/foo/);
emptyStrPar = P.lookahead(fooPar);

strPar = strPar.tie();

strPar = strPar.tieWith("");

fooPar = P.of(foo);

str = P.formatError('foo', strPar.parse('bar'));

strPar = P.seqMap(P.digit, (a: string) => 'foo');
numPar = P.seqMap(P.digit, P.digits, (a: string, b: string) => 42);
strPar = P.seqMap(P.digit, P.digits, P.letter, (a: string, b: string, c: string) => 'foo');
strPar = P.seqMap(P.digit, P.digits, P.letter, P.letters.map(Number), (a: string, b: string, c: string, d: number) => 'foo');
strPar = P.seqMap(
	P.digit,
	P.digit,
	P.digit,
	P.digit,
	P.digit.map(Number),
	P.digit.map(Number),
	P.digit,
	P.digit,
	P.digit,
	P.digit,
	(a: string, b: string, c: string, d: string, e: number, f: number, g: string, h: string, i: string, j: string) => 'foo',
);

strArrPar = P.sepBy(P.string('foo'), P.string('bar'));
strArrPar = P.sepBy1(P.string('foo'), P.string('bar'));

strPar = P.test((a: string) => false);

strPar = P.takeWhile((a: string) => true);

// Slightly modified from the documentation example for 'parser.thru(wrapper)'.
function makeNode<Name extends string>(name: Name) {
	return <T>(parser: P.Parser<T>): P.Parser<P.Node<Name, T>> => {
		return P.seqMap(
			P.index,
			parser,
			P.index,
			(start, value, end) => {
				return {
					name,
					start,
					value,
					end,
				};
			},
		);
	};
}

let node: P.Parser<P.Node<'identifier', string>> = P.letters.node('identifier');
node = P.letters.thru(makeNode('identifier'));

// --  --  --  --  --  --  --  --  --  --  --  --  --
// Fantasy Land support

fooPar = fooPar.empty(); // $ExpectType Parser<never>

// example taken from the documentation for the #ap method
numPar = P.digit
  .ap(P.digit
    .map(s => (t: string) =>
      Number(s) + Number(t)));

fooArrPar = fooPar.sepBy(barPar);
fooArrPar = fooPar.sepBy1(barPar);

fooPar = barPar.of(foo);

// --  --  --  --  --  --  --  --  --  --  --  --  --

let language: Language;

language = P.createLanguage({
	SomeRule: r => P.alt(P.string(""), r.AnotherRule),
	AnotherRule: () => P.string(""),
});

// $ExpectType Parser<any>
language.SomeRule;
// $ExpectType Parser<any>
language.AnotherRule;
// $ExpectType Parser<any>
language.UndefinedRule;

interface MyLanguageSpec {
	FooRule: Foo;
	BarRule: Bar;
	StringRule: string;
}

let myLanguage: TypedLanguage<MyLanguageSpec>;

myLanguage = P.createLanguage<MyLanguageSpec>({
	FooRule: r => {
		fooPar = r.FooRule;
		barPar = r.BarRule;
		strPar = r.StringRule;
		return fooPar;
	},
	BarRule: r => barPar,
	StringRule: () => strPar,
});

// $ExpectType Parser<Foo>
myLanguage.FooRule;
// $ExpectType Parser<Bar>
myLanguage.BarRule;
// $ExpectType Parser<string>
myLanguage.StringRule;

const noRules = P.createLanguage<{}>({});

// $ExpectError
P.createLanguage<{MissingRule: string}>({});

P.createLanguage<{SomeRule: string}>({
	SomeRule: r => strPar,
	AnotherRule: (r: any) => strPar // $ExpectError
});
