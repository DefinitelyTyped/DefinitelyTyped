


/*
Basic usage examples
*/
(function(){
	// functions and constants
	math.round(math.e, 3);           // 2.718
	math.atan2(3, -3) / math.pi;     // 0.75
	math.log(10000, 10);             // 4
	math.sqrt(-4);                   // 2i
	math.pow([[-1, 2], [3, 1]], 2);  // [[7, 0], [0, 7]]
	var angle = 0.2;
	math.add(math.pow(math.sin(angle), 2), math.pow(math.cos(angle), 2)); // returns number ~1

	// expressions
	math.eval('1.2 * (2 + 4.5)');    // 7.8
	math.eval('5.08 cm to inch');    // 2 inch
	math.eval('sin(45 deg) ^ 2');    // 0.5
	math.eval('9 / 3 + 2i');         // 3 + 2i
	math.eval('det([-1, 2; 3, 1])'); // -7

	// chained operations
	var a = math.chain(3)
		.add(4)
		.multiply(2)
		.done(); // 14

	// mixed use of different data types in functions
	console.log('mixed use of data types');
	math.add(4, [5, 6]);                   // number + Array, [9, 10]
	math.multiply(math.unit('5 mm'), 3);   // Unit * number,  15 mm
	math.subtract([2, 3, 4], 5);           // Array - number, [-3, -2, -1]
	math.add(math.matrix([2, 3]), [4, 5]); // Matrix + Array, [6, 8]
}());


/*
Bignumbers examples
*/
(function() {
	// configure the default type of numbers as BigNumbers
	math.config({
	number: 'bignumber',  // Default type of number:
							// 'number' (default), 'bignumber', or 'fraction'
	precision: 20         // Number of significant digits for BigNumbers
	});

	console.log('round-off errors with numbers');
	math.add(0.1, 0.2);    // number, 0.30000000000000004
	math.divide(0.3, 0.2); // number, 1.4999999999999998
	console.log();

	console.log('no round-off errors with BigNumbers');
	math.add(math.bignumber(0.1), math.bignumber(0.2));     // BigNumber, 0.3
	math.divide(math.bignumber(0.3), math.bignumber(0.2));  // BigNumber, 1.5
	console.log();

	console.log('create BigNumbers from strings when exceeding the range of a number');
	math.bignumber(1.2e+500);    // BigNumber, Infinity      WRONG
	math.bignumber('1.2e+500');  // BigNumber, 1.2e+500
	console.log();

	// one can work conveniently with BigNumbers using the expression parser.
	// note though that BigNumbers are only supported in arithmetic functions
	console.log('use BigNumbers in the expression parser');
	math.eval('0.1 + 0.2');  // BigNumber, 0.3
	math.eval('0.3 / 0.2');  // BigNumber, 1.5
	console.log();
}());



/*
Chaining examples
*/
(function() {
	// create a chained operation using the function `chain(value)`
	// end a chain using done(). Let's calculate (3 + 4) * 2
	var a = math.chain(3)
		.add(4)
		.multiply(2)
		.done(); // 14

	// Another example, calculate square(sin(pi / 4))
	var b = math.chain(math.pi)
		.divide(4)
		.sin()
		.square()
		.done(); // 0.5

	// A chain has a few special methods: done, toString, valueOf, get, and set.
	// these are demonstrated in the following examples

	// toString will return a string representation of the chain's value
	var chain = math.chain(2).divide(3);
	var str = chain.toString(); // "0.6666666666666666"

	// a chain has a function .valueOf(), which returns the value hold by the chain.
	// This allows using it in regular operations. The function valueOf() acts the
	// same as function done().
	chain.valueOf(); // 0.66666666666667


	// the function subset can be used to get or replace sub matrices
	var array = [[1, 2], [3, 4]];
	var v = math.chain(array)
		.subset(math.index(1, 0))
		.done(); // 3

	var m = math.chain(array)
		.subset(math.index(0, 0), 8)
		.multiply(3)
		.done(); // [[24, 6], [9, 12]]
}());


/*
Complex numbers examples
*/
(function(){
	var a = math.complex(2, 3); // 2 + 3i

	// read the real and complex parts of the complex number
	a.re;                    // 2
	a.im;                    // 3

	// clone a complex value
	var clone = a.clone(); // 2 + 3i

	// adjust the complex value
	a.re = 5; // 5 + 3i

	// create a complex number by providing a string with real and complex parts
	var b = math.complex('3 - 7i'); // 3 - 7i
	console.log();

	// perform operations with complex numbers
	console.log('perform operations');
	math.add(a, b);          // 8 - 4i
	math.multiply(a, b);     // 36 - 26i
	math.sin(a);             // -9.6541254768548 + 2.8416922956064i

	// some operations will return a complex number depending on the arguments
	math.sqrt(4);           // 2
	math.sqrt(-4);          // 2i

	// create a complex number from polar coordinates
	console.log('create complex numbers with polar coordinates');
	var c = math.complex({r: math.sqrt(2), phi: math.pi / 4}); // 1 + i

	// get polar coordinates of a complex number
	var d = math.complex(3, 4);
        d.toPolar();      // { r: 5, phi: 0.9272952180016122 }
}());


/*
Expressions examples
*/
(function() {
	// 1. using the function math.eval
	//
	// Function `eval` accepts a single expression or an array with
	// expressions as first argument, and has an optional second argument
	// containing a scope with variables and functions. The scope is a regular
	// JavaScript Object. The scope will be used to resolve symbols, and to write
	// assigned variables or function.
	console.log('1. USING FUNCTION MATH.EVAL');

	// evaluate expressions
	console.log('\nevaluate expressions');
	math.eval('sqrt(3^2 + 4^2)');        // 5
	math.eval('sqrt(-4)');               // 2i
	math.eval('2 inch to cm');           // 5.08 cm
	math.eval('cos(45 deg)');            // 0.70711

	// evaluate multiple expressions at once
	console.log('\nevaluate multiple expressions at once');
	math.eval([
	'f = 3',
	'g = 4',
	'f * g'
	]);                                        // [3, 4, 12]

	// provide a scope (just a regular JavaScript Object)
	console.log('\nevaluate expressions providing a scope with variables and functions');
	var scope: any = {
	a: 3,
	b: 4
	};

	// variables can be read from the scope
	math.eval('a * b', scope);           // 12

	// variable assignments are written to the scope
	math.eval('c = 2.3 + 4.5', scope);   // 6.8
	scope.c;                             // 6.8

	// scope can contain both variables and functions
	scope["hello"] = function (name: string) {
		return 'hello, ' + name + '!';
	};
	math.eval('hello("hero")', scope);   // "hello, hero!"

	// define a function as an expression
	var f = math.eval('f(x) = x ^ a', scope);
	f(2);                                // 8
	scope.f(2);                          // 8



	// 2. using function math.parse
	//
	// Function `math.parse` parses expressions into a node tree. The syntax is
	// similar to function `math.eval`.
	// Function `parse` accepts a single expression or an array with
	// expressions as first argument. The function returns a node tree, which
	// then can be compiled against math, and then evaluated against an (optional
	// scope. This scope is a regular JavaScript Object. The scope will be used
	// to resolve symbols, and to write assigned variables or function.
	console.log('\n2. USING FUNCTION MATH.PARSE');

	// parse an expression
	console.log('\nparse an expression into a node tree');
	var node1 = math.parse('sqrt(3^2 + 4^2)');
	node1.toString();                    // "sqrt((3 ^ 2) + (4 ^ 2))"

	// compile and evaluate the compiled code
	// you could also do this in two steps: node1.compile().eval()
	node1.eval();                        // 5

	// provide a scope
	console.log('\nprovide a scope');
	var node2 = math.parse('x^a');
	var code2 = node2.compile();
	node2.toString();                    // "x ^ a"
	var scope: any = {
	x: 3,
	a: 2
	};
	code2.eval(scope);                   // 9

	// change a value in the scope and re-evaluate the node
	scope.a = 3;
	code2.eval(scope);                   // 27


	// 3. using function math.compile
	//
	// Function `math.compile` compiles expressions into a node tree. The syntax is
	// similar to function `math.eval`.
	// Function `compile` accepts a single expression or an array with
	// expressions as first argument, and returns an object with a function eval
	// to evaluate the compiled expression. On evaluation, an optional scope can
	// be provided. This scope will be used to resolve symbols, and to write
	// assigned variables or function.
	console.log('\n3. USING FUNCTION MATH.COMPILE');

	// parse an expression
	console.log('\ncompile an expression');
	var code3 = math.compile('sqrt(3^2 + 4^2)');

	// evaluate the compiled code
	code3.eval();                        // 5

	// provide a scope for the variable assignment
	console.log('\nprovide a scope');
	var code2 = math.compile('a = a + 3');
	var scope: any = {
	a: 7
	};
	code2.eval(scope);
	scope.a;                             // 10


	// 4. using a parser
	//
	// In addition to the static functions `math.eval` and `math.parse`, math.js
	// contains a parser with functions `eval` and `parse`, which automatically
	// keeps a scope with assigned variables in memory. The parser also contains
	// some convenience methods to get, set, and remove variables from memory.
	console.log('\n4. USING A PARSER');
	var parser = math.parser();

	// evaluate with parser
	console.log('\nevaluate expressions');
	parser.eval('sqrt(3^2 + 4^2)');          // 5
	parser.eval('sqrt(-4)');                 // 2i
	parser.eval('2 inch to cm');             // 5.08 cm
	parser.eval('cos(45 deg)');              // 0.70711

	// define variables and functions
	console.log('\ndefine variables and functions');
	parser.eval('x = 7 / 2');                // 3.5
	parser.eval('x + 3');                    // 6.5
	parser.eval('f(x, y) = x^y');            // f(x, y)
	parser.eval('f(2, 3)');                  // 8

	// manipulate matrices
	// Note that matrix indexes in the expression parser are one-based with the
	// upper-bound included. On a JavaScript level however, math.js uses zero-based
	// indexes with an excluded upper-bound.
	console.log('\nmanipulate matrices');
	parser.eval('k = [1, 2; 3, 4]');         // [[1, 2], [3, 4]]
	parser.eval('l = zeros(2, 2)');          // [[0, 0], [0, 0]]
	parser.eval('l[1, 1:2] = [5, 6]');       // [[5, 6], [0, 0]]
	parser.eval('l[2, :] = [7, 8]');         // [[5, 6], [7, 8]]
	parser.eval('m = k * l');                // [[19, 22], [43, 50]]
	parser.eval('n = m[2, 1]');              // 43
	parser.eval('n = m[:, 1]');              // [[19], [43]]

	// get and set variables and functions
	console.log('\nget and set variables and function in the scope of the parser');
	var x = parser.get('x');
	console.log('x =', x);                          // x = 7
	var f = parser.get('f');
	console.log('f =', math.format(f));             // f = f(x, y)
	var g = f(3, 3);
	console.log('g =', g);                          // g = 27

	parser.set('h', 500);
	parser.eval('h / 2');                    // 250
	parser.set('hello', function (name: string) {
	return 'hello, ' + name + '!';
	});
	parser.eval('hello("hero")');            // "hello, hero!"

	// clear defined functions and variables
	parser.clear();
}());


/*
Fractions examples
*/
(function(){
	// configure the default type of numbers as Fractions
	math.config({
		number: 'fraction'   // Default type of number:
							// 'number' (default), 'bignumber', or 'fraction'
	});

	console.log('basic usage');
	math.fraction(0.125);         // Fraction, 1/8
	math.fraction(0.32);          // Fraction, 8/25
	math.fraction('1/3');         // Fraction, 1/3
	math.fraction('0.(3)');       // Fraction, 1/3
	math.fraction(2, 3);          // Fraction, 2/3
	math.fraction('0.(285714)');  // Fraction, 2/7
	console.log();

	console.log('round-off errors with numbers');
	math.add(0.1, 0.2);                // number, 0.30000000000000004
	math.divide(0.3, 0.2);             // number, 1.4999999999999998
	console.log();

	console.log('no round-off errors with fractions :)');
	math.add(math.fraction(0.1), math.fraction(0.2));     // Fraction, 3/10
	math.divide(math.fraction(0.3), math.fraction(0.2));  // Fraction, 3/2
	console.log();

	console.log('represent an infinite number of repeating digits');
	math.fraction('1/3');        // Fraction, 0.(3)
	math.fraction('2/7');        // Fraction, 0.(285714)
	math.fraction('23/11');      // Fraction, 2.(09)
	console.log();

	// one can work conveniently with fractions using the expression parser.
	// note though that Fractions are only supported by basic arithmetic functions
	console.log('use fractions in the expression parser');
	math.eval('0.1 + 0.2'); // Fraction,  3/10
	math.eval('0.3 / 0.2'); // Fraction,  3/2
	math.eval('23 / 11');   // Fraction, 23/11
	console.log();

	// output formatting
	console.log('output formatting of fractions');
	var a = math.fraction('2/3');
	console.log(math.format(a));                          // Fraction,  2/3
	console.log(math.format(a, {fraction: 'ratio'}));     // Fraction,  2/3
	console.log(math.format(a, {fraction: 'decimal'}));   // Fraction,  0.(6)
	console.log(a.toString());                            // Fraction,  0.(6)
        console.log();
}());

/*
Matrices examples
*/
(function() {
	// create matrices and arrays. a matrix is just a wrapper around an Array,
	// providing some handy utilities.
	console.log('create a matrix');
	var a = math.matrix([1, 4, 9, 16, 25]); // [1, 4, 9, 16, 25]
	var b = math.matrix(math.ones([2, 3])); // [[1, 1, 1], [1, 1, 1]]
	b.size();                           // [2, 3]

	// the Array data of a Matrix can be retrieved using valueOf()
	var array = a.valueOf();  // [1, 4, 9, 16, 25]

	// Matrices can be cloned
	var clone = a.clone(); // [1, 4, 9, 16, 25]
	console.log();

	// perform operations with matrices
	console.log('perform operations');
	math.sqrt(a);                       // [1, 2, 3, 4, 5]
	var c = [1, 2, 3, 4, 5];
	math.factorial(c);                  // [1, 2, 6, 24, 120]
	console.log();

	// create and manipulate matrices. Arrays and Matrices can be used mixed.
	console.log('manipulate matrices');
	var d = [[1, 2], [3, 4]]; // [[1, 2], [3, 4]]
	var e = math.matrix([[5, 6], [1, 1]]); // [[5, 6], [1, 1]]

	// set a submatrix.
	// Matrix indexes are zero-based.
	e.subset(math.index(1, [0, 1]), [[7, 8]]); // [[5, 6], [7, 8]]
	var f = math.multiply(d, e); // [[19, 22], [43, 50]]
	var g = f.subset(math.index(1, 0)); // 43
	console.log();

	// get a sub matrix
	// Matrix indexes are zero-based.
	console.log('get a sub matrix');
	var h = math.diag(math.range(1,4)); // [[1, 0, 0], [0, 2, 0], [0, 0, 3]]
	h.subset( math.index([1, 2], [1, 2])); // [[2, 0], [0, 3]]
	var i = math.range(1,6); // [1, 2, 3, 4, 5]
	i.subset(math.index(math.range(1,4))); // [2, 3, 4]
	console.log();


	// resize a multi dimensional matrix
	console.log('resizing a matrix');
	var j = math.matrix();
	var defaultValue = 0;
	j.resize([2, 2, 2], defaultValue); // [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
	j.size();                            // [2, 2, 2]
	j.resize([2, 2]); // [[0, 0], [0, 0]]
	j.size();                            // [2, 2]
	console.log();

	// setting a value outside the matrices range will resize the matrix.
	// new elements will be initialized with zero.
	console.log('set a value outside a matrices range');
	var k = math.matrix();
	k.subset(math.index(2), 6); // [0, 0, 6]
	console.log();

	console.log('set a value outside a matrices range, leaving new entries uninitialized');
	var m = math.matrix();
	defaultValue = math.uninitialized;
	m.subset(math.index(2), 6, defaultValue); // [undefined, undefined, 6]
	console.log();

	// create ranges
	console.log('create ranges');
	math.range(1, 6);                    // [1, 2, 3, 4, 5]
	math.range(0, 18, 3);                // [0, 3, 6, 9, 12, 15]
	math.range('2:-1:-3');               // [2, 1, 0, -1, -2]
	math.factorial(math.range('1:6'));   // [1, 2, 6, 24, 120]
	console.log();
}());

/*
Sparse matrices examples
*/
(function() {
	// create a sparse matrix
	console.log('creating a 1000x1000 sparse matrix...');
	var a = math.eye(1000, 1000, 'sparse');

	// do operations with a sparse matrix
	console.log('doing some operations on the sparse matrix...');
	var b = math.multiply(a, a);
	var c = math.multiply(b, math.complex(2, 2));
	var d = math.transpose(c);
	var e = math.multiply(d, a);

	// we will not print the output, but doing the same operations
	// with a dense matrix are very slow, try it for yourself.
	console.log('already done');
	console.log('now try this with a dense matrix :)');
}());

/*
Units examples
*/
(function() {
	// units can be created by providing a value and unit name, or by providing
	// a string with a valued unit.
	console.log('create units');
	var a = math.unit(45, 'cm'); // 450 mm
	var b = math.unit('0.1m'); // 100 mm
	console.log();

	// units can be added, subtracted, and multiplied or divided by numbers and by other units
	console.log('perform operations');
	math.add(a, b);                                  // 0.55 m
	math.multiply(b, 2);                             // 200 mm
	math.divide(math.unit('1 m'), math.unit('1 s')); // 1 m / s
	math.pow(math.unit('12 in'), 3);                 // 1728 in^3
	console.log();

	// units can be converted to a specific type, or to a number
	console.log('convert to another type or to a number');
	b.to('cm');                    // 10 cm  Alternatively: math.to(b, 'cm')
	math.to(b, 'inch');            // 3.9370... inch
	b.toNumber('cm');              // 10
	math.number(b, 'cm');          // 10
	console.log();

	// the expression parser supports units too
	console.log('parse expressions');
	math.eval('2 inch to cm');     // 5.08 cm
	math.eval('cos(45 deg)');      // 0.70711...
	math.eval('90 km/h to m/s');   // 25 m / s
	console.log();

	// convert a unit to a number
	// A second parameter with the unit for the exported number must be provided
	math.eval('number(5 cm, mm)'); // number, 50
	console.log();

	// simplify units
	console.log('simplify units');
	math.eval('100000 N / m^2');   // 100 kPa
	math.eval('9.81 m/s^2 * 100 kg * 40 m'); // 39.24 kJ
	console.log();

	// example engineering calculations
	console.log('compute molar volume of ideal gas at 65 Fahrenheit, 14.7 psi in L/mol');
	var Rg = math.unit('8.314 N m / (mol K)');
	var T = math.unit('65 degF');
	var P = math.unit('14.7 psi');
	var v = math.divide(math.multiply(Rg, T), P);
	console.log('gas constant (Rg) = ', format(Rg));
	console.log('P = ' + format(P));
	console.log('T = ' + format(T));
	console.log('v = Rg * T / P = ' + format(math.to(v, 'L/mol'))); // 23.910... L / mol
	console.log();

	console.log('compute speed of fluid flowing out of hole in a container');
	var g = math.unit('9.81 m / s^2');
	var h = math.unit('1 m');
	var v2 = math.pow(math.multiply(2, math.multiply(g, h)), 0.5); // Can also use math.sqrt
	console.log('g = ' + format(g));
	console.log('h = ' + format(h));
	console.log('v = (2 g h) ^ 0.5 = ' + format(v2)); // 4.429... m / s
	console.log();

	console.log('electrical power consumption:');
	var expr = '460 V * 20 A * 30 days to kWh';
	console.log(expr + ' = ' + math.eval(expr));  // 6624 kWh
	console.log();

	console.log('circuit design:');
	var expr = '24 V / (6 mA)';
	console.log(expr + ' = ' + math.eval(expr));  // 4 kohm
	console.log();

	console.log('operations on arrays:');
	var B = math.eval('[1, 0, 0] T');
	var v3 = math.eval('[0, 1, 0] m/s');
	var q = math.eval('1 C');
	var F = math.multiply(q, math.cross(v3, B));
	console.log('B (magnetic field strength) = ' + format(B)); // [1 T, 0 T, 0 T]
	console.log('v (particle velocity) = ' + format(v3));       // [0 m / s, 1 m / s, 0 m / s]
	console.log('q (particle charge) = ' + format(q));         // 1 C
	console.log('F (force) = q (v cross B) = ' + format(F));   // [0 N, 0 N, -1 N]

	/**
	* Helper function to format an output a value.
	* @param {*} value
	* @return {string} Returns the formatted value
	*/
	function format (value: any): string {
		var precision = 14;
		return math.format(value, precision);
	}
}());


/*
Expression tree examples
*/
(function(){

        // Filter an expression tree
console.log('Filter all symbol nodes "x" in the expression "x^2 + x/4 + 3*y"');
var node = math.parse('x^2 + x/4 + 3*y');
var filtered = node.filter(function (node) {
  return node.isSymbolNode && node.name == 'x';
});
// returns an array with two entries: two SymbolNodes 'x'

filtered.forEach(function (node) {
  console.log(node.type, node.toString())
});
// outputs:
//  SymbolNode x
//  SymbolNode x


// Traverse an expression tree
console.log();
console.log('Traverse the expression tree of expression "3 * x + 2"');
var node1 = math.parse('3 * x + 2');
node1.traverse(function (node, path, parent) {
  switch (node.type) {
    // case 'OperatorNode': console.log(node.type, node.op);    break;
    case 'OperatorNode': console.log(node.type);             break;//for now removing .op
    case 'ConstantNode': console.log(node.type, node.value); break;
    case 'SymbolNode':   console.log(node.type, node.name);  break;
    default:             console.log(node.type);
  }
});
// outputs:
//   OperatorNode +
//   OperatorNode *
//   ConstantNode 3
//   SymbolNode x
//   ConstantNode 2


// transform an expression tree
// console.log();
// console.log('Replace all symbol nodes "x" in expression "x^2 + 5*x" with a constant 3');
// var node2 = math.parse('x^2 + 5*x');
// var transformed = node2.transform(function (node, path, parent) {
//   if (node.isSymbolNode && node.name == 'x') {
//     return new math.expression.node.ConstantNode(3);
//   }
//   else {
//     return node;
//   }
// });
// console.log(transformed.toString());
// outputs: '(3 ^ 2) + (5 * 3)'
}());
