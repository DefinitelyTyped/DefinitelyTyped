import whichBoxedPrimitive = require("which-boxed-primitive");

whichBoxedPrimitive(undefined); // $ExpectType null
whichBoxedPrimitive(null); // $ExpectType null

whichBoxedPrimitive(false); // $ExpectType null
whichBoxedPrimitive(true); // $ExpectType null
whichBoxedPrimitive(new Boolean(false)); // $ExpectType "Boolean"
whichBoxedPrimitive(new Boolean(true)); // $ExpectType "Boolean"

whichBoxedPrimitive(42); // $ExpectType null
whichBoxedPrimitive(NaN); // $ExpectType null
whichBoxedPrimitive(Infinity); // $ExpectType null
whichBoxedPrimitive(new Number(42)); // $ExpectType "Number"
whichBoxedPrimitive(new Number(NaN)); // $ExpectType "Number"
whichBoxedPrimitive(new Number(Infinity)); // $ExpectType "Number"

whichBoxedPrimitive(""); // $ExpectType null
whichBoxedPrimitive("foo"); // $ExpectType null
whichBoxedPrimitive(new String("")); // $ExpectType "String"
whichBoxedPrimitive(new String("foo")); // $ExpectType "String"

whichBoxedPrimitive(Symbol()); // $ExpectType null
whichBoxedPrimitive(Object(Symbol()) as Symbol); // $ExpectType "Symbol"

whichBoxedPrimitive(BigInt(42)); // $ExpectType null
whichBoxedPrimitive(Object(BigInt(42)) as BigInt); // $ExpectType "BigInt"

whichBoxedPrimitive([]); // $ExpectType undefined
whichBoxedPrimitive({}); // $ExpectType undefined
whichBoxedPrimitive(/a/g); // $ExpectType undefined
whichBoxedPrimitive(new RegExp("a", "g")); // $ExpectType undefined
whichBoxedPrimitive(new Date()); // $ExpectType undefined
whichBoxedPrimitive(() => {}); // $ExpectType undefined
whichBoxedPrimitive(function*() {}); // $ExpectType undefined
whichBoxedPrimitive((x: number) => x * x); // $ExpectType undefined
whichBoxedPrimitive([]); // $ExpectType undefined
