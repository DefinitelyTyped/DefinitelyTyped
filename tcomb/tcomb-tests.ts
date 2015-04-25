// ReSharper disable InconsistentNaming
// ReSharper disable WrongExpressionStatement

import t = require("tcomb");

var Str = t.Str;
var Num = t.Num;
var Bool = t.Bool;
var Arr = t.Arr;
var Obj = t.Obj;
var Func = t.Func;
var Err = t.Err;
var Re = t.Re;
var Dat = t.Dat;
var Nil = t.Nil;
var Any = t.Any;
var Type = t.Type;

var struct = t.struct;
var tuple = t.tuple;
var list = t.list;
var dict = t.dict;
var union = t.union;
var maybe = t.maybe;
var func = t.func;
var subtype = t.subtype;

Str.is("a string"); // => true
Str.is(1);          // => false

Num.is("a string"); // => true
Num.is(1);          // => false

Bool.is("a string"); // => true
Bool.is(1);          // => false

Arr.is("a string"); // => true
Arr.is(1);          // => false

Obj.is("a string"); // => true
Obj.is(1);          // => false

Func.is("a string"); // => true
Func.is(1);          // => false

Err.is("a string"); // => true
Err.is(1);          // => false

Re.is("a string"); // => true
Re.is(1);          // => false

Dat.is("a string"); // => true
Dat.is(1);          // => false

Nil.is("a string"); // => true
Nil.is(1);          // => false

Any.is("a string"); // => true
Any.is(1);          // => false

Type.is("a string"); // => true
Type.is(1);          // => false

var assert = t.assert;

assert(t.Str.is("a string")); // => ok
assert(t.Str.is(1)); // => fail!

var x = -2;
var min = 0;
// throws "-2 should be greater then 0"
assert(x > min, "%s should be greater then %s", x, min);

Str("a string"); // => ok

class Point1 {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = <number>Num(x);
		this.y = <number>Num(y);
	}
}

var Foo = t.irreducible("Foo", x => {
	return t.Bool(x.hasOwnProperty("bar"));
});

Foo.is({ bar: "baz" }); // => true

// defines a type representing positive numbers
var Positive = t.subtype(t.Num, n => {
  return n >= 0;
}, "Positive");

Positive.is(1);  // => true
Positive.is(-1); // => false

var Country = t.enums({
  IT: "Italy",
  US: "United States"
}, "Country");

Country.is("IT"); // => true
Country.is("FR"); // => false

// values will mirror the keys
Country = t.enums.of("IT US", "Country");

// same as

Country = t.enums(["IT", "US"], "Country");

// same as

Country = t.enums({
  IT: "IT",
  US: "US"
}, "Country");

var Point = t.struct({
  x: Num,
  y: Num
}, "Point");

// constructor usage, `p` is immutable, new is optional
var p2 = new Point({ x: 1, y: 2 });

Point.is(p2); // => true

// now p is mutable
new Point({ x: 1, y: 2 }, true);

Point.extend({ z: Num }, "Point3D");

// multiple inheritance
var A = struct({});
var B = struct({});
var MixinC = {};
var MixinD = {};
A.extend([B, MixinC, MixinD]);

var Rectangle = struct({
  width: Num,
  height: Num
});

Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};

var Cube = Rectangle.extend({
  thickness: Num
});

// typeof Cube.prototype.getArea === 'function'
Cube.prototype.getVolume = function() {
  return this.getArea() * this.thickness;
};

var Area = tuple([Num, Num]);

// constructor usage, `area` is immutable
Area([1, 2]);

var Path = list(Point);

// costructor usage, `path` is immutable
Path([
	{ x: 0, y: 0 }, // tcomb hydrates automatically using the `Point` constructor
	{ x: 1, y: 1 }
]);

var Tel = dict(Str, Num);

// costructor usage, `tel` is immutable
Tel({ jack: 4098, sape: 4139 });

var ReactKey = union([Str, Num]);

ReactKey.is("a");  // => true
ReactKey.is(1);    // => true
ReactKey.is(true); // => false

ReactKey.dispatch = x => {
	if (Str.is(x)) return <tcomb.T>Str;
	if (Num.is(x)) return <tcomb.T>Num;
	return <tcomb.T>Any;
};

// now you can do this without a fail
ReactKey("a");

// the value of a radio input where null = no selection
var Radio = maybe(Str);

Radio.is("a");     // => true
Radio.is(null);    // => true
Radio.is(1);       // => false

// add takes two `Num`s and returns a `Num`
var add = func([Num, Num], Num)
	.of((x: number, y: number) => { return x + y; });

add("Hello", 2); // Raises error: Invalid `Hello` supplied to `Num`
add("Hello");    // Raises error: Invalid `Hello` supplied to `Num`

add(1, 2);       // Returns: 3
add(1)(2);       // Returns: 3

// An `A` takes a `Str` and returns an `Num`
func(Str, Num);

// A `B` takes a `Func` (which takes a `Str` and returns a `Num`) and returns a `Str`.
func(func(Str, Num), Str);

// An `ExcitedStr` is a `Str` containing an exclamation mark
var ExcitedStr = subtype(Str, s => { return s.indexOf("!") !== -1; }, "ExcitedStr");

// An `Exciter` takes a `Str` and returns an `ExcitedStr`
var Exciter = func(Str, ExcitedStr);

// A `C` takes an `A`, a `B` and a `Str` and returns a `Num`
func([A, B, Str], Num);

func(A, B).of(() => {});

var simpleQuestionator = Exciter.of((s: string) => { return s + "?"; });
var simpleExciter = Exciter.of((s: string) => { return s + "!"; });

// Raises error:
// Invalid `Hello?` supplied to `ExcitedStr`, insert a valid value for the subtype
simpleQuestionator("Hello");

// Raises error: Invalid `1` supplied to `Str`
simpleExciter(1);

// Returns: "Hello!"
simpleExciter("Hello");

// We can reasonably suggest that add has the following type signature
// add : Num -> Num -> Num
add = func([Num, Num], Num)
	.of((x: number, y: number) => { return x + y });

add("Hello"); // As this raises: "Error: Invalid `Hello` supplied to `Num`"

var add2 = add(2);
add2(1); // And this returns: 3

func(A, B).is(x);

Exciter.is(simpleExciter);      // Returns: true
Exciter.is(simpleQuestionator); // Returns: true

var id = (x: number) => { return x; };

func([Num, Num], Num).is(func([Num, Num], Num).of(id)); // Returns: true
func([Num, Num], Num).is(func(Num, Num).of(id));        // Returns: false

var p4 = new Point({x: 1, y: 2});

p4 = Point.update(p4, { x: { "$set": 3 } }); // => {x: 3, y: 2}

var Type2 = dict(Str, Num);
var instance = Type2({ a: 1, b: 2 });
Type2.update(instance, { $remove: ["a"] }); // => {b: 2}

var Type3 = list(Num);
var instance2 = Type3([1, 2, 3, 4]);
Type3.update(instance2, { "$swap": { from: 1, to: 2 } }); // => [1, 3, 2, 4]

t.options.onFail = message => {
	return message;
};

t.format("Invalid argument `name` = `%s` supplied to `%s`", 1, "MyType");

t.getKind(Str);       // => 'irreducible'
t.getKind(list(Str)); // => 'list'

t.getFunctionName(t.getKind); // => 'getKind'
t.getFunctionName(() => { }); // => '<function0>'

t.getTypeName(Str);

t.mixin({ a: 1 }, { b: 2 }); // => {a: 1, b: 2}
t.mixin({ a: 1 }, { a: 2 }); // => fail!
