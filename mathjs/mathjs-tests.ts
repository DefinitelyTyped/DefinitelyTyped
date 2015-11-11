/// <reference path="mathjs.d.ts" />


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