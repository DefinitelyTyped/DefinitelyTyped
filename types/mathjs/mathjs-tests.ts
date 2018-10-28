/*
Basic usage examples
*/
{
	// functions and constants
	math.round(math.e, 3);
	math.atan2(3, -3) / math.pi;
	math.log(10000, 10);
	math.sqrt(-4);
	math.pow([[-1, 2], [3, 1]], 2);
	const angle = 0.2;
	math.add(math.pow(math.sin(angle), 2), math.pow(math.cos(angle), 2));

	// expressions
	math.eval('1.2 * (2 + 4.5)');

	// chained operations
	const a = math.chain(3)
		.add(4)
		.multiply(2)
		.done(); // 14

	// mixed use of different data types in functions
	math.add(4, [5, 6]);                   // number + Array, [9, 10]
	math.multiply(math.unit('5 mm'), 3);   // Unit * number,  15 mm
	math.subtract([2, 3, 4], 5);           // Array - number, [-3, -2, -1]
	math.add(math.matrix([2, 3]), [4, 5]); // Matrix + Array, [6, 8]
}

/*
Bignumbers examples
*/
{
	// configure the default type of numbers as BigNumbers
	math.config({
		number: 'BigNumber',
		precision: 20,
	});

	{
		math.add(math.bignumber(0.1), math.bignumber(0.2));     // BigNumber, 0.3
		math.divide(math.bignumber(0.3), math.bignumber(0.2));  // BigNumber, 1.5
	}
}

/*
Chaining examples
*/
{
	const a = math.chain(3)
		.add(4)
		.multiply(2)
		.done(); // 14

	// Another example, calculate square(sin(pi / 4))
	const b = math.chain(math.pi)
		.divide(4)
		.sin()
		.square()
		.done();

	// toString will return a string representation of the chain's value
	const chain = math.chain(2).divide(3);
	const str: string = chain.toString(); // "0.6666666666666666"

	chain.valueOf();

	// the function subset can be used to get or replace sub matrices
	const array = [[1, 2], [3, 4]];
	const v = math.chain(array)
		.subset(math.index(1, 0))
		.done(); // 3

	const m = math.chain(array)
		.subset(math.index(0, 0), 8)
		.multiply(3)
		.done();
}

/*
Complex numbers examples
*/
{
	const a = math.complex(2, 3);
	// create a complex number by providing a string with real and complex parts
	const b = math.complex('3 - 7i');

	// read the real and complex parts of the complex number
	{
		const x: number = a.re;
		const y: number = a.im;

		// adjust the complex value
		a.re = 5;
	}

	// clone a complex value
	{
		const clone = a.clone();
	}

	// perform operations with complex numbers
	{
		math.add(a, b);
		math.multiply(a, b);
		math.sin(a);
	}

	// create a complex number from polar coordinates
	{
        const p: math.PolarCoordinates = { r: math.sqrt(2), phi: math.pi / 4 };
		const c: math.Complex = math.complex(p);
	}

	// get polar coordinates of a complex number
	{
		const p: math.PolarCoordinates = math.complex(3, 4).toPolar();
	}
}

/*
Expressions examples
*/
{
	// evaluate expressions
	{
		math.eval('sqrt(3^2 + 4^2)');
	}

	// evaluate multiple expressions at once
	{
		math.eval([
			'f = 3',
			'g = 4',
			'f * g'
		]);
	}

	// scope can contain both variables and functions
	{
		const scope = { hello: (name: string) => `hello, ${name}!` };
		math.eval('hello("hero")', scope);   // "hello, hero!"
	}

	// define a function as an expression
	{
		const scope: any = {
			a: 3,
			b: 4,
		};
		const f = math.eval('f(x) = x ^ a', scope);
		f(2);
		scope.f(2);
	}

	{
		const node2 = math.parse('x^a');
		const code2: math.EvalFunction = node2.compile();
		node2.toString();
	}

	// 3. using function math.compile
	// parse an expression
	{
		// provide a scope for the variable assignment
		const code2 = math.compile('a = a + 3');
		const scope = { a: 7 };
		code2.eval(scope);
	}
	// 4. using a parser
	const parser = math.parser();

	// get and set variables and functions
	{
        parser.eval('x = 7 / 2');               // 3.5
     	parser.eval('x + 3');                   // 6.5
        parser.eval('f(x, y) = x^y');           // f(x, y)
        parser.eval('f(2, 3)');                 // 8

		const x = parser.get('x');
		const f = parser.get('f');
		const g = f(3, 3);

		parser.set('h', 500);
		parser.set('hello', (name: string) => `hello, ${name}!`);
	}

	// clear defined functions and variables
	parser.clear();
}

/*
Fractions examples
*/
{
	// configure the default type of numbers as Fractions
	math.config({
		number: 'Fraction',
	});

	const x = math.fraction(0.125);
	const y = math.fraction('1/3');
	math.fraction(2, 3);

	math.add(x, y);
	math.divide(x, y);

	// output formatting
	const a = math.fraction('2/3');
}

/*
Matrices examples
*/
{
	// create matrices and arrays. a matrix is just a wrapper around an Array,
	// providing some handy utilities.
	const a: math.Matrix = math.matrix([1, 4, 9, 16, 25]);
	const b: math.Matrix = math.matrix(math.ones([2, 3]));
	b.size();

	// the Array data of a Matrix can be retrieved using valueOf()
	const array = a.valueOf();

	// Matrices can be cloned
	const clone: math.Matrix = a.clone();

	// perform operations with matrices
	math.sqrt(a);
	math.factorial(a);

	// create and manipulate matrices. Arrays and Matrices can be used mixed.
	{
		const a = [[1, 2], [3, 4]];
		const b: math.Matrix = math.matrix([[5, 6], [1, 1]]);

		b.subset(math.index(1, [0, 1]), [[7, 8]]);
		const c = math.multiply(a, b);
		const f: math.Matrix = math.matrix([1, 0]);
		const d: math.Matrix = f.subset(math.index(1, 0));
	}

	// get a sub matrix
	{
		const a: math.Matrix = math.diag(math.range(1, 4));
		a.subset(math.index([1, 2], [1, 2]));
		const b: math.Matrix = math.range(1, 6);
		b.subset(math.index(math.range(1, 4)));
	}

	// resize a multi dimensional matrix
	{
		const a = math.matrix();
		a.resize([2, 2, 2], 0);
		a.size();
		a.resize([2, 2]);
		a.size();
	}

	// can set a subset of a matrix to uninitialized
	{
		const m = math.matrix();
		m.subset(math.index(2), 6, math.uninitialized);
	}

	// create ranges
	{
		math.range(1, 6);
		math.range(0, 18, 3);
		math.range('2:-1:-3');
		math.factorial(math.range('1:6'));
	}
}

/*
Sparse matrices examples
*/
{
	// create a sparse matrix
	const a = math.eye(1000, 1000, 'sparse');

	// do operations with a sparse matrix
	const b = math.multiply(a, a);
	const c = math.multiply(b, math.complex(2, 2));
	const d = math.matrix([0, 1]);
	const e = math.transpose(d);
	const f = math.multiply(e, a);
}

/*
Units examples
*/
{
	// units can be created by providing a value and unit name, or by providing
	// a string with a valued unit.
	const a = math.unit(45, 'cm'); // 450 mm
	const b = math.unit('0.1m'); // 100 mm

	// creating units
	math.createUnit('foo');
	math.createUnit('furlong', '220 yards');
	math.createUnit('furlong', '220 yards', {override: true});
	math.createUnit('testunit', {definition: '0.555556 kelvin', offset: 459.67});
	math.createUnit('testunit', {definition: '0.555556 kelvin', offset: 459.67}, {override: true});
	math.createUnit('knot', {definition: '0.514444 m/s', aliases: ['knots', 'kt', 'kts']});
	math.createUnit('knot', {definition: '0.514444 m/s', aliases: ['knots', 'kt', 'kts']}, {override: true});
	math.createUnit('knot', {
		definition: '0.514444 m/s',
		aliases: ['knots', 'kt', 'kts'],
		prefixes: 'long'
	}, {override: true});
	math.createUnit({
		foo_2: {
			prefixes: 'long'
		},
		bar: '40 foo',
		baz: {
			definition: '1 bar/hour',
			prefixes: 'long'
		}
	}, {
		override: true
	});
	// use Unit as definition
	math.createUnit('c', {definition: b});
	math.createUnit('c', {definition: b}, {override: true});

	// units can be added, subtracted, and multiplied or divided by numbers and by other units
	math.add(a, b);
	math.multiply(b, 2);
	math.divide(math.unit('1 m'), math.unit('1 s'));
	math.pow(math.unit('12 in'), 3);

	// units can be converted to a specific type, or to a number
	b.to('cm');
	math.to(b, 'inch');
	b.toNumber('cm');
	math.number(b, 'cm');

	// the expression parser supports units too
	math.eval('2 inch to cm');

	// units can be converted to SI
	math.unit('1 inch').toSI();

	// units can be split into other units
	math.unit('1 m').splitUnit(['ft', 'in']);
}

/*
Expression tree examples
*/
{
	// Filter an expression tree
	const node: math.MathNode = math.parse('x^2 + x/4 + 3*y');
	const filtered: math.MathNode[] = node.filter((node: math.MathNode) => node.isSymbolNode && node.name === 'x');

	const arr: string[] = filtered.map((node: math.MathNode) => node.toString());

	// Traverse an expression tree
	const node1: math.MathNode = math.parse('3 * x + 2');
	node1.traverse((node: math.MathNode, path: string, parent: math.MathNode) => {
		switch (node.type) {
			case 'OperatorNode':
				return node.type === 'OperatorNode';
			case 'ConstantNode':
				return node.type === 'ConstantNode';
			case 'SymbolNode':
				return node.type === 'SymbolNode';
			default:
				return node.type === 'any string at all';
		}
	});
}

/*
JSON serialization/deserialization
*/
{
	const data = {
		bigNumber: math.bignumber('1.5')
	};
	const stringified = JSON.stringify(data);
	const parsed = JSON.parse(stringified, math.json.reviver);
	parsed.bigNumber === math.bignumber('1.5'); // true
}
