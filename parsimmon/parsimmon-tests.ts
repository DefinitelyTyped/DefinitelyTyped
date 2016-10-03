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
anyArrPar = P.seq(barPar, fooPar, numPar);

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
