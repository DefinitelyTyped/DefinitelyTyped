// Type definitions for mathjs
// Project: http://mathjs.org/
// Definitions by: Ilya Shestakov <https://github.com/siavol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var math: mathjs.IMathJsStatic;

declare namespace mathjs {

	type MathArray = number[]|number[][];
	type MathType = number|BigNumber|Fraction|Complex|Unit|MathArray|Matrix;
	type MathExpression = string|string[]|MathArray|Matrix;

	export interface IMathJsStatic {

		e: number;
		pi: number;
		i: number;
		Infinity: number;
		LN2: number;
		LN10: number;
		LOG2E: number;
		LOG10E: number;
		NaN: number;
		null: number;
		phi: number;
		SQRT1_2: number;
		SQRT2: number;
		tau: number;

		uninitialized: any;
		version: string;
		
		config(options: any): void;

                expression: MathNode;

		/**
		 * Solves the linear equation system by forwards substitution. Matrix must be a lower triangular matrix.
		 * @param L A N x N matrix or array (L)
		 * @param b A column vector with the b values
		 * @returns A column vector with the linear system solution (x)
		 */
		lsolve(L: Matrix|MathArray, b: Matrix|MathArray): Matrix|MathArray;

		/**
                 * Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in two matrices (L, U)
		 * and a row permutation vector p where A[p,:] = L * U
		 * @param A A two dimensional matrix or array for which to get the LUP decomposition.
		 * @returns The lower triangular matrix, the upper triangular matrix and the permutation matrix.
		 */
		lup(A?: Matrix|MathArray): MathArray;

		/**
		 * Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.
		 * @param A Invertible Matrix or the Matrix LU decomposition
		 * @param b Column Vector
		 * @returns Column vector with the solution to the linear system A * x = b
		 */
		lusolve(A: Matrix|MathArray|Number, b: Matrix|MathArray): Matrix|MathArray;

		/**
                 * Calculate the Sparse Matrix LU decomposition with full pivoting. Sparse Matrix A is decomposed in
		 * two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U
		 * @param A A two dimensional sparse matrix for which to get the LU decomposition.
                 * @param order The Symbolic Ordering and Analysis order: 0 - Natural ordering, no permutation vector q is
                 * returned 1 - Matrix must be square, symbolic ordering and analisis is performed on M = A + A' 2 - Symbolic
                 * ordering and analisis is performed on M = A' * A. Dense columns from A' are dropped, A recreated from A'.
                 * This is appropriatefor LU factorization of unsymmetric matrices. 3 - Symbolic ordering and analisis is performed
                 * on M = A' * A. This is best used for LU factorization is matrix M has no dense rows. A dense row is a row with
		 * more than 10*sqr(columns) entries.
		 * @param threshold Partial pivoting threshold (1 for partial pivoting)
		 * @returns The lower triangular matrix, the upper triangular matrix and the permutation vectors.
		 */
		slu(A: Matrix, order: Number, threshold: Number): any;

		/**
		 * Solves the linear equation system by backward substitution. Matrix must be an upper triangular matrix. U * x = b
		 * @param U A N x N matrix or array (U)
		 * @param b A column vector with the b values
		 * @returns A column vector with the linear system solution (x)
		 */
		usolve(U: Matrix|MathArray, b:Matrix|MathArray): Matrix|MathArray;

		/**
		 * Calculate the absolute value of a number. For matrices, the function is evaluated element wise.
		 * @param x A number or matrix for which to get the absolute value
		 * @returns Absolute value of x
		 */
		abs(x: number): number;
		abs(x: BigNumber): BigNumber;
		abs(x: Fraction): Fraction;
		abs(x: Complex): Complex;
		abs(x: MathArray): MathArray;
		abs(x: Matrix): Matrix;
		abs(x: Unit): Unit;

		/**
		 * Add two values, x + y. For matrices, the function is evaluated element wise.
		 * @param x First value to add
		 * @param y Second value to add
		 * @returns Sum of x and y
		 */
		add(x: MathType, y: MathType): MathType;

		/**
		 * Calculate the cubic root of a value. For matrices, the function is evaluated element wise.
		 * @param x Value for which to calculate the cubic root.
		 * @param allRoots Optional, false by default. Only applicable when x is a number or complex number. If true, all complex roots are returned, if false (default) the principal root is returned.
		 * @returns Returns the cubic root of x
		 */
		cbrt(x: number, allRoots?: boolean): number;
		cbrt(x: BigNumber, allRoots?: boolean): BigNumber;
		cbrt(x: Fraction, allRoots?: boolean): Fraction;
		cbrt(x: Complex, allRoots?: boolean): Complex;
		cbrt(x: MathArray, allRoots?: boolean): MathArray;
		cbrt(x: Matrix, allRoots?: boolean): Matrix;
		cbrt(x: Unit, allRoots?: boolean): Unit;

		/**
		 * Round a value towards plus infinity If x is complex, both real and imaginary part are rounded towards plus infinity. For matrices, the function is evaluated element wise.
		 * @param x Number to be rounded
		 * @returns Rounded value
		 */
		ceil(x: number): number;
		ceil(x: BigNumber): BigNumber;
		ceil(x: Fraction): Fraction;
		ceil(x: Complex): Complex;
		ceil(x: MathArray): MathArray;
		ceil(x: Matrix): Matrix;
		ceil(x: Unit): Unit;

                /**
		 * Compute the cube of a value, x * x * x. For matrices, the function is evaluated element wise.
		 * @param x Number for which to calculate the cube
		 * @returns Cube of x
		 */
		cube(x: number): number;
		cube(x: BigNumber): BigNumber;
		cube(x: Fraction): Fraction;
		cube(x: Complex): Complex;
		cube(x: MathArray): MathArray;
		cube(x: Matrix): Matrix;
		cube(x: Unit): Unit;

		/**
		 * Divide two values, x / y. To divide matrices, x is multiplied with the inverse of y: x * inv(y).
		 * @param x Numerator
		 * @param y Denominator
		 * @returns Quotient, x / y
		 */
		divide(x: Unit, y: Unit): Unit;
		divide(x: number, y: number): number;
		divide(x:MathType, y:MathType): MathType;

		/**
		 * Divide two matrices element wise. The function accepts both matrices and scalar values.
		 * @param x Numerator
		 * @param y Denominator
		 * @returns Quotient, x ./ y
		 */
		dotDivide(x: MathType, y: MathType): MathType;

		/**
		 * Multiply two matrices element wise. The function accepts both matrices and scalar values.
		 * @param x Left hand value
		 * @param y Right hand value
		 * @returns Multiplication of x and y
		 */
		dotMultiply(x: MathType, y: MathType): MathType;

                /**
		 * Calculates the power of x to y element wise.
		 * @param x The base
		 * @param y The exponent
		 * @returns The value of x to the power y
		 */
		dotPow(x: MathType, y: MathType): MathType;

		/**
		 * Calculate the exponent of a value. For matrices, the function is evaluated element wise.
		 * @param x A number or matrix to exponentiate
		 * #returns Exponent of x
		 */
		exp(x: number): number;
		exp(x: BigNumber ): BigNumber ;
		exp(x: Complex ): Complex ;
		exp(x: MathArray ): MathArray ;
		exp(x: Matrix): Matrix;

                /**
		 * Round a value towards zero. For matrices, the function is evaluated element wise.
		 * @param x Number to be rounded
		 * @returns Rounded value
		 */
		fix(x: number): number;
		fix(x: BigNumber ): BigNumber ;
		fix(x: Fraction ): Fraction ;
		fix(x: Complex ): Complex ;
		fix(x: MathArray ): MathArray ;
		fix(x: Matrix): Matrix;

		/**
		 * Round a value towards minus infinity. For matrices, the function is evaluated element wise.
		 * @param Number to be rounded
		 * @returns Rounded value
		 */
		floor(x: number): number;
		floor(x: BigNumber ): BigNumber ;
		floor(x: Fraction ): Fraction ;
		floor(x: Complex ): Complex ;
		floor(x: MathArray ): MathArray ;
		floor(x: Matrix): Matrix;

		/**
		 * Calculate the greatest common divisor for two or more values or arrays. For matrices, the function is evaluated element wise.
		 */
		gcd(...args: number[]): number;
		gcd(...args: BigNumber[]): BigNumber ;
		gcd(...args: Fraction[]): Fraction ;
		gcd(...args: MathArray[]): MathArray ;
		gcd(...args: Matrix[]): Matrix;

		/**
		 * Calculate the hypotenusa of a list with values. The hypotenusa is defined as:
		 * hypot(a, b, c, ...) = sqrt(a^2 + b^2 + c^2 + ...)
		 * For matrix input, the hypotenusa is calculated for all values in the matrix.
		 */
		hypot(...args: number[]): number;
		hypot(...args: BigNumber[]): BigNumber;

		/**
		 * Calculate the least common multiple for two or more values or arrays. lcm is defined as:
		 * lcm(a, b) = abs(a * b) / gcd(a, b)
		 * For matrices, the function is evaluated element wise.
		 */
		lcm(a: number, b: number): number;
		lcm(a: BigNumber , b: BigNumber ): BigNumber ;
		lcm(a: MathArray, b: MathArray): MathArray;
		lcm(a: Matrix, b: Matrix): Matrix;

		/**
		 * Calculate the logarithm of a value. For matrices, the function is evaluated element wise.
		 * @param x Value for which to calculate the logarithm.
		 * @param base Optional base for the logarithm. If not provided, the natural logarithm of x is calculated. Default value: e.
		 */
		log(x: number|BigNumber|Complex|MathArray|Matrix, base?: number|BigNumber|Complex): number|BigNumber|Complex|MathArray|Matrix;

		/**
		 * Calculate the 10-base of a value. This is the same as calculating log(x, 10). For matrices, the function is evaluated element wise.
		 * @param x Value for which to calculate the logarithm.
		 */
		log10(x: number): number;
		log10(x: BigNumber): BigNumber;
		log10(x: Complex): Complex;
		log10(x: MathArray): MathArray;
		log10(x: Matrix): Matrix;

		/**
		 * Calculates the modulus, the remainder of an integer division. For matrices, the function is evaluated element wise.
		 * The modulus is defined as:
		 * x - y * floor(x / y)
		 * See http://en.wikipedia.org/wiki/Modulo_operation.
		 * @param x Dividend
		 * @param y Divisor
		 */
		mod(x: number|BigNumber|Fraction|MathArray|Matrix, y: number|BigNumber|Fraction|MathArray|Matrix): number|BigNumber|Fraction|MathArray|Matrix;

		/**
		 * Multiply two values, x * y. The result is squeezed. For matrices, the matrix product is calculated.
		 */
		multiply(x: MathArray|Matrix, y: MathArray|Matrix): Matrix;
		multiply(x: MathArray|Matrix, y: MathType): Matrix;
		multiply(x: Unit, y: Unit): Unit;
		multiply(x: number, y: number): number;
		multiply(x: MathType, y: MathType): MathType;

		/**
		 * Calculate the norm of a number, vector or matrix. The second parameter p is optional. If not provided, it defaults to 2.
		 * @param x Value for which to calculate the norm
		 * @param p Vector space. Supported numbers include Infinity and -Infinity. Supported strings are: 'inf', '-inf', and 'fro' (The Frobenius norm) Default value: 2.
		 * @returns the p-norm
		 */
		norm(x: number|BigNumber|Complex|MathArray|Matrix, p?: number|BigNumber|string): number|BigNumber;

		/**
		 * Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation
		 * x^root = A
		 * For matrices, the function is evaluated element wise.
		 * @param a Value for which to calculate the nth root
		 * @param root The root. Default value: 2.
		 */
		nthRoot(a: number|BigNumber|MathArray|Matrix|Complex, root?: number|BigNumber): number|Complex|MathArray|Matrix;

		/**
		 * Calculates the power of x to y, x ^ y. Matrix exponentiation is supported for square matrices x, and positive integer exponents y.
		 * @param x The base
		 * @param y The exponent
		 */
		pow(x: number|BigNumber|Complex|MathArray|Matrix, y: number|BigNumber|Complex): number|BigNumber|Complex|MathArray|Matrix;

		/**
		 * Round a value towards the nearest integer. For matrices, the function is evaluated element wise.
		 * @param x Number to be rounded
		 * @param n Number of decimals Default value: 0.
		 */
		round(x: number|BigNumber|Fraction|Complex|MathArray|Matrix, n?: number|BigNumber|MathArray): number|BigNumber|Fraction|Complex|MathArray|Matrix;

		/**
		 * Compute the sign of a value. The sign of a value x is:
		 * 1 when x > 1
		 * -1 when x < 0
		 * 0 when x == 0
		 * For matrices, the function is evaluated element wise.
		 */
		sign(x: number): number;
		sign(x: BigNumber ): BigNumber;
		sign(x: Fraction ): Fraction ;
		sign(x: Complex ): Complex ;
		sign(x: MathArray): MathArray;
		sign(x: Matrix): Matrix;
		sign(x: Unit): Unit;

		/**
		 * Calculate the square root of a value. For matrices, the function is evaluated element wise.
		 */
		sqrt(x: number): number;
		sqrt(x: BigNumber ): BigNumber;
		sqrt(x: Complex ): Complex ;
		sqrt(x: MathArray): MathArray;
		sqrt(x: Matrix): Matrix;
		sqrt(x: Unit): Unit;

		/**
		 * Compute the square of a value, x * x. For matrices, the function is evaluated element wise.
		 */
		square(x: number): number;
		square(x: BigNumber ): BigNumber;
		square(x: Fraction ): Fraction ;
		square(x: Complex ): Complex ;
		square(x: MathArray): MathArray;
		square(x: Matrix): Matrix;
		square(x: Unit): Unit;

		/**
		 * Subtract two values, x - y. For matrices, the function is evaluated element wise.
		 */
		subtract(x: MathType, y: MathType): MathType;

		/**
		 * Inverse the sign of a value, apply a unary minus operation.
		 * For matrices, the function is evaluated element wise. Boolean values and strings will be converted to a number. For complex numbers, both real and complex value are inverted.
		 */
		unaryMinus(x: number): number;
		unaryMinus(x: BigNumber ): BigNumber;
		unaryMinus(x: Fraction ): Fraction ;
		unaryMinus(x: Complex ): Complex ;
		unaryMinus(x: MathArray): MathArray;
		unaryMinus(x: Matrix): Matrix;
		unaryMinus(x: Unit): Unit;

		/**
		 * Unary plus operation. Boolean values and strings will be converted to a number, numeric values will be returned as is.
		 * For matrices, the function is evaluated element wise.
		 */
		unaryPlus(x: number): number;
		unaryPlus(x: BigNumber ): BigNumber;
		unaryPlus(x: Fraction ): Fraction ;
		unaryPlus(x: string): string;
		unaryPlus(x: Complex ): Complex ;
		unaryPlus(x: MathArray): MathArray;
		unaryPlus(x: Matrix): Matrix;
		unaryPlus(x: Unit): Unit;

		/**
		 * Calculate the extended greatest common divisor for two values. See http://en.wikipedia.org/wiki/Extended_Euclidean_algorithm.
		 */
		xgcd(a: number|BigNumber, b: number|BigNumber): MathArray;

		/**
		 * Bitwise AND two values, x & y. For matrices, the function is evaluated element wise.
		 */
		bitAnd(x: number|BigNumber|MathArray|Matrix, y: number|BigNumber|MathArray|Matrix): number|BigNumber|MathArray|Matrix;

		/**
		 * Bitwise NOT value, ~x. For matrices, the function is evaluated element wise. For units, the function is evaluated on the best prefix base.
		 */
		bitNot(x: number): number;
		bitNot(x: BigNumber ): BigNumber ;
		bitNot(x: MathArray): MathArray;
		bitNot(x: Matrix): Matrix;

		/**
		 * Bitwise OR two values, x | y. For matrices, the function is evaluated element wise. For units, the function is evaluated on the lowest print base.
		 */
		bitOr(x: number): number;
		bitOr(x: BigNumber ): BigNumber ;
		bitOr(x: MathArray): MathArray;
		bitOr(x: Matrix): Matrix;

		/**
		 * Bitwise XOR two values, x ^ y. For matrices, the function is evaluated element wise.
		 */
		bitXor(x: number|BigNumber|MathArray|Matrix, y: number|BigNumber|MathArray|Matrix): number|BigNumber|MathArray|Matrix;

		/**
		 * Bitwise left logical shift of a value x by y number of bits, x << y. For matrices, the function is evaluated element wise. For units, the function is evaluated on the best prefix base.
		 * @param x Value to be shifted
		 * @param y Amount of shifts
		 */
		leftShift(x: number|BigNumber|MathArray|Matrix, y: number|BigNumber): number|BigNumber|MathArray|Matrix;

		/**
		 * Bitwise right arithmetic shift of a value x by y number of bits, x >> y. For matrices, the function is evaluated element wise. For units, the function is evaluated on the best prefix base.
		 * @param x Value to be shifted
		 * @param y Amount of shifts
		 */
		rightArithShift(x: number|BigNumber|MathArray|Matrix, y: number|BigNumber): number|BigNumber|MathArray|Matrix;

		/**
		 * Bitwise right logical shift of value x by y number of bits, x >>> y. For matrices, the function is evaluated element wise. For units, the function is evaluated on the best prefix base.
		 * @param x Value to be shifted
		 * @param y Amount of shifts
		 */
		rightLogShift(x: number|MathArray|Matrix, y: number): number|MathArray|Matrix;

		/**
		 * The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. bellNumbers only takes integer arguments. The following condition must be enforced: n >= 0
		 * @param n Total number of objects in the set
		 */
		bellNumbers(n: Number): Number;
		bellNumbers(n: BigNumber): BigNumber;

		/**
		 * The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0
		 * @pararm n nth Catalan number
		 */
		catalan(n: Number): Number;
		catalan(n: BigNumber): BigNumber;

		/**
		 * The composition counts of n into k parts. Composition only takes integer arguments. The following condition must be enforced: k <= n.
		 * @param n Total number of objects in the set
		 * @param k Number of objects in the subset
		 * @returns Returns the composition counts of n into k parts.
		 */
		composition(n: Number|BigNumber, k: Number|BigNumber): Number|BigNumber

		/**
		 * The Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. stirlingS2 only takes integer arguments. The following condition must be enforced: k <= n.
		 * If n = k or k = 1, then s(n,k) = 1
		 * @param n Total number of objects in the set
		 * @param k Number of objects in the subset
		 */
		stirlingS2(n: Number|BigNumber, k: Number|BigNumber): Number|BigNumber;

		/**
		 * Compute the argument of a complex value. For a complex number a + bi, the argument is computed as atan2(b, a). For matrices, the function is evaluated element wise.
		 * @param x A complex number or array with complex numbers
		 */
		arg(x: number): number;
		arg(x: Complex): number;
		arg(x: MathArray): MathArray;
		arg(x: Matrix): Matrix;

		/**
		 * Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate of x is a - bi. For matrices, the function is evaluated element wise.
		 * @param x A complex number or array with complex numbers
		 */
		conj(x: number|BigNumber|Complex|MathArray|Matrix): number|BigNumber|Complex|MathArray|Matrix;

                /**
                 * Get the imaginary part of a complex number. For a complex number a + bi, the function returns b.
		 * For matrices, the function is evaluated element wise.
		 */
		im(x: number|BigNumber|Complex|MathArray|Matrix): number|BigNumber|MathArray|Matrix;

		/**
		 * Get the real part of a complex number. For a complex number a + bi, the function returns a.
		 * For matrices, the function is evaluated element wise.
		 */
		re(x: number|BigNumber|Complex|MathArray|Matrix): number|BigNumber|MathArray|Matrix;

		/**
		 * Create a BigNumber, which can store numbers with arbitrary precision. When a matrix is provided, all elements will be converted to BigNumber.
		 */
		bignumber(x?: number|string|MathArray|Matrix|boolean): BigNumber;

		/**
		 * Create a boolean or convert a string or number to a boolean. In case of a number, true is returned for non-zero numbers, and false in case of zero. Strings can be 'true' or 'false', or can contain a number. When value is a matrix, all elements will be converted to boolean.
		 */
		boolean(x: string|number|boolean|MathArray|Matrix ): boolean|MathArray|Matrix;

		/**
		 * Wrap any value in a chain, allowing to perform chained operations on the value.
		 * All methods available in the math.js library can be called upon the chain, and then will be evaluated with the value itself as first argument. The chain can be closed by executing chain.done(), which returns the final value.
		 * The chain has a number of special functions:
		 * done() Finalize the chain and return the chain's value.
		 * valueOf() The same as done()
		 * toString() Executes math.format() onto the chain's value, returning a string representation of the value.
		 */
		chain(value?: any): IMathJsChain;

		/**
		 * Create a complex value or convert a value to a complex value.
		 */
		complex(): Complex;
		complex(re: number, im: number): Complex;
		complex(complex: Complex): Complex;
		complex(arg: string): Complex;
		complex(array: MathArray): Complex;
		complex(obj: IPolarCoordinates): Complex;

		/**
		 * Create a fraction convert a value to a fraction.
		 */
		fraction(numerator: number|string|MathArray|Matrix, denominator?: number|string|MathArray|Matrix): Fraction|MathArray|Matrix;

		/**
		 * Create an index. An Index can store ranges having start, step, and end for multiple dimensions. Matrix.get, Matrix.set, and math.subset accept an Index as input.
		 */
		index(...ranges: any[]): Index;

		/**
                 * Create a Matrix. The function creates a new math.type.Matrix object from an Array. A Matrix has utility functions
                 * to manipulate the data in the matrix, like getting the size and getting or setting values in the matrix. Supported
		 * storage formats are 'dense' and 'sparse'.
		 */
		matrix(format?: 'sparse'|'dense'): Matrix;
		matrix(data: MathArray|Matrix, format?: 'sparse'|'dense', dataType?: string): Matrix;

		/**
		 * Create a number or convert a string, boolean, or unit to a number. When value is a matrix, all elements will be converted to number.
		 */
		number(value?: string|number|boolean|MathArray|Matrix|Unit|BigNumber): number|MathArray|Matrix;
		number(unit: Unit, valuelessUnit: Unit|string): number|MathArray|Matrix;

		/**
                 * Create a Sparse Matrix. The function creates a new math.type.Matrix object from an Array. A Matrix has utility
		 * functions to manipulate the data in the matrix, like getting the size and getting or setting values in the matrix.
		 * @param data A two dimensional array
		 */
		sparse(data?: MathArray|Matrix, dataType?:string): Matrix;

		/**
		 * Create a string or convert any object into a string. Elements of Arrays and Matrices are processed element wise.
		 * @param value A value to convert to a string
		 */
		string(value: any): string|MathArray|Matrix;

		/**
                 * Create a unit. Depending on the passed arguments, the function will create and return a new math.type.Unit object.
		 * When a matrix is provided, all elements will be converted to units.
		 */
		unit(unit: string): Unit;
		unit(value: number, unit: string): Unit;

		/**
		 * Parse and compile an expression. Returns a an object with a function eval([scope]) to evaluate the compiled expression.
		 */
		compile(expr: MathExpression): EvalFunction;
		compile(exprs: MathExpression[]): EvalFunction[];

		/**
		 * Evaluate an expression.
		 */
		eval(expr: MathExpression, scope?: any): any;
		eval(exprs: MathExpression[], scope?: any): any;

		/**
		 * Retrieve help on a function or data type. Help files are retrieved from the documentation in math.expression.docs.
		 */
		help(search: any): Help;

		/**
		 * Parse an expression. Returns a node tree, which can be evaluated by invoking node.eval();
		 */
		parse(expr: MathExpression, options?: any): MathNode;
		parse(exprs: MathExpression[], options?: any): MathNode[];

		/**
		 * Create a parser. The function creates a new math.expression.Parser object.
		 */
		parser(): Parser;

		/**
                 * Calculates: The eucledian distance between two points in 2 and 3 dimensional spaces. Distance between point
                 * and a line in 2 and 3 dimensional spaces. Pairwise distance between a set of 2D or 3D points NOTE: When
                 * substituting coefficients of a line(a, b and c), use ax + by + c = 0 instead of ax + by = c For parametric
		 * equation of a 3D line, x0, y0, z0, a, b, c are from: (x−x0, y−y0, z−z0) = t(a, b, c)
		 */
		distance(x: MathArray|Matrix|any, y: MathArray|Matrix|any): Number | BigNumber;

		/**
                 * Calculates the point of intersection of two lines in two or three dimensions and of a line and a plane in
                 * three dimensions. The inputs are in the form of arrays or 1 dimensional matrices. The line intersection functions
		 * return null if the lines do not meet.
		 * Note: Fill the plane coefficients as x + y + z = c and not as x + y + z + c = 0.
		 * @param w Co-ordinates of first end-point of first line
		 * @param x Co-ordinates of second end-point of first line
		 * @param y Co-ordinates of first end-point of second line OR Co-efficients of the plane's equation
		 * @param z Co-ordinates of second end-point of second line OR null if the calculation is for line and plane
		 * @returns Returns the point of intersection of lines/lines-planes
		 */
		intersect(w: MathArray|Matrix, x: MathArray|Matrix, y: MathArray|Matrix, z: MathArray|Matrix): MathArray;

		/**
		 * Logical and. Test whether two values are both defined with a nonzero/nonempty value. For matrices, the function is evaluated element wise.
		 */
		and(x: number|BigNumber|Complex|Unit|MathArray|Matrix, y: number|BigNumber|Complex|Unit|MathArray|Matrix): boolean|MathArray|Matrix;

		/**
		 * Logical not. Flips boolean value of a given parameter. For matrices, the function is evaluated element wise.
		 */
		not(x: number|BigNumber|Complex|Unit|MathArray|Matrix): boolean|MathArray|Matrix;

		/**
		 * Logical or. Test if at least one value is defined with a nonzero/nonempty value. For matrices, the function is evaluated element wise.
		 */
		or(x: number|BigNumber|Complex|Unit|MathArray|Matrix, y: number|BigNumber|Complex|Unit|MathArray|Matrix): boolean|MathArray|Matrix;

		/**
		 * Logical xor. Test whether one and only one value is defined with a nonzero/nonempty value. For matrices, the function is evaluated element wise.
		 */
		xor(x: number|BigNumber|Complex|Unit|MathArray|Matrix, y: number|BigNumber|Complex|Unit|MathArray|Matrix): boolean|MathArray|Matrix;

		/**
		 * Concatenate two or more matrices.
		 * dim: number is a zero-based dimension over which to concatenate the matrices. By default the last dimension of the matrices.
		 */
		concat(...args: (MathArray|Matrix|number)[]): MathArray|Matrix;

		/**
                 * Calculate the cross product for two vectors in three dimensional space. The cross product of A = [a1, a2, a3]
		 * and B =[b1, b2, b3] is defined as:
		 * cross(A, B) = [ a2 * b3 - a3 * b2, a3 * b1 - a1 * b3, a1 * b2 - a2 * b1 ]
		 */
		cross(x: MathArray|Matrix, y: MathArray|Matrix): Matrix;

		/**
		 * Calculate the determinant of a matrix.
		 */
		det(x: MathArray|Matrix): number;

		/**
		 * Create a diagonal matrix or retrieve the diagonal of a matrix.
                 * When x is a vector, a matrix with vector x on the diagonal will be returned. When x is a two dimensional matrix,
		 * the matrixes kth diagonal will be returned
                 * as vector. When k is positive, the values are placed on the super diagonal. When k is negative, the values are
		 * placed on the sub diagonal.
		 * @param X A two dimensional matrix or a vector
		 * @param k The diagonal where the vector will be filled in or retrieved. Default value: 0.
		 * @param format The matrix storage format. Default value: 'dense'.
		 */
		diag(X: MathArray|Matrix, format?: string): Matrix;
		diag(X: MathArray|Matrix, k: number|BigNumber, format?: string): Matrix;

		/**
                 * Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn]
		 * is defined as:
		 * dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn
		 */
		dot(x: MathArray|Matrix, y: MathArray|Matrix): number;

		/**
		 * Create a 2-dimensional identity matrix with size m x n or n x n. The matrix has ones on the diagonal and zeros elsewhere.
		 */
		eye(n: number, format?: string): Matrix;
		eye(m: number, n: number, format?: string): Matrix;
		eye(size: number[], format?: string): Matrix;

		/**
		 * Flatten a multi dimensional matrix into a single dimensional matrix.
		 */
                flatten(x: MathArray|Matrix): MathArray|Matrix;

		/**
		 * Calculate the inverse of a square matrix.
		 */
		inv(x: number|Complex|MathArray|Matrix): number|Complex|MathArray|Matrix;

		/**
		 * Create a matrix filled with ones. The created matrix can have one or multiple dimensions.
		 */
		ones(n: number, format?: string): MathArray|Matrix;
		ones(m: number, n: number, format?: string): MathArray|Matrix;
		ones(size: number[], format?: string): MathArray|Matrix;

		/**
		 * Create an array from a range. By default, the range end is excluded. This can be customized by providing an extra parameter includeEnd.
		 * @param str A string 'start:end' or 'start:step:end'
		 * @param start Start of the range
		 * @param end End of the range, excluded by default, included when parameter includeEnd=true
		 * @param step Step size. Default value is 1.
		 * @returns Parameters describing the ranges start, end, and optional step.
		 */
		range(str: string, includeEnd?: boolean): Matrix;
		range(start: number|BigNumber, end:number|BigNumber, includeEnd?:boolean): Matrix;
		range(start: number|BigNumber, end: number|BigNumber, step: number|BigNumber, includeEnd?:boolean): Matrix;

		/**
		 * Resize a matrix
		 * @param x Matrix to be resized
		 * @param size One dimensional array with numbers
		 * @param defaultValue Zero by default, except in case of a string, in that case defaultValue = ' ' Default value: 0.
		 */
		resize(x: MathArray|Matrix, size: MathArray|Matrix, defaultValue?: number|string): MathArray|Matrix;

		/**
		 * Calculate the size of a matrix or scalar.
		 */
		size(x: boolean|number|Complex|Unit|string|MathArray|Matrix): MathArray|Matrix;

		/**
		 * Squeeze a matrix, remove inner and outer singleton dimensions from a matrix.
		 */
		squeeze(x: MathArray|Matrix): Matrix|MathArray;

		/**
		 * Get or set a subset of a matrix or string.
		 * @param value An array, matrix, or string
		 * @param index An index containing ranges for each dimension
		 * @param replacement An array, matrix, or scalar. If provided, the subset is replaced with replacement. If not provided, the subset is returned
		 * @param defaultValue Default value, filled in on new entries when the matrix is resized. If not provided, math.matrix elements will be left undefined. Default value: undefined.
		 */
		subset(value: MathArray|Matrix|string, index: Index, replacement?: any, defaultValue?: any): MathArray|Matrix|string;

		/**
		 * Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.
		 */
		trace(x: MathArray|Matrix): number;

		/**
		 * Transpose a matrix. All values of the matrix are reflected over its main diagonal. Only two dimensional matrices are supported.
		 */
		transpose(x: MathArray|Matrix): MathArray|Matrix;

		/**
		 * Create a matrix filled with zeros. The created matrix can have one or multiple dimensions.
		 */
		zeros(n: number, format?: string): MathArray|Matrix;
		zeros(m: number, n: number, format?: string): MathArray|Matrix;
		zeros(size: number[], format?: string): MathArray|Matrix;

		/**
                 * Compute the number of ways of picking k unordered outcomes from n possibilities.
		 * Combinations only takes integer arguments. The following condition must be enforced: k <= n.
		 */
		combinations(n: number|BigNumber, k: number|BigNumber): number|BigNumber;

		/**
		 * Create a distribution object with a set of random functions for given random distribution.
		 * @param name Name of a distribution. Choose from 'uniform', 'normal'.
		 */
		distribution(name: string): Distribution;

		/**
		 * Compute the factorial of a value
		 * Factorial only supports an integer value as argument. For matrices, the function is evaluated element wise.
		 */
		factorial(n: number|BigNumber|MathArray|Matrix): number|BigNumber|MathArray|Matrix;

		/**
                 * Compute the gamma function of a value using Lanczos approximation for small values, and an extended
		 * Stirling approximation for large values.
		 * For matrices, the function is evaluated element wise.
		 */
		gamma(n: number|MathArray|Matrix): number|MathArray|Matrix;

		/**
		 * Calculate the Kullback-Leibler (KL) divergence between two distributions
		 */
		kldivergence(x: MathArray|Matrix, y: MathArray|Matrix): number;

		/**
		 * Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from n possibilities.
		 * multinomial takes one array of integers as an argument. The following condition must be enforced: every ai <= 0
		 */
		multinomial(a: number[]|BigNumber[]): number|BigNumber;

		/**
		 * Compute the number of ways of obtaining an ordered subset of k elements from a set of n elements.
		 * Permutations only takes integer arguments. The following condition must be enforced: k <= n.
		 * @param n The number of objects in total
		 * @param k The number of objects in the subset
		 */
		permutations(n: number|BigNumber, k?:number|BigNumber): number|BigNumber;

		/**
		 * Random pick a value from a one dimensional array. Array element is picked using a random function with uniform distribution.
		 */
		pickRandom(array: number[]): number;

		/**
		 * Return a random number larger or equal to min and smaller than max using a uniform distribution.
		 */
		random(): number;
		random(max: number): number;
		random(min: number, max: number): number;
		random(size: MathArray|Matrix, max?: number): MathArray|Matrix;
		random(size: MathArray|Matrix, min:number, max: number): MathArray|Matrix;

		/**
		 * Return a random integer number larger or equal to min and smaller than max using a uniform distribution.
		 */
		randomInt(max: number): number;
		randomInt(min: number, max: number): number;
		randomInt(size: MathArray|Matrix, max?: number): MathArray|Matrix;
		randomInt(size: MathArray|Matrix, min:number, max: number): MathArray|Matrix;

		/**
		 * Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.
                 * x and y are considered equal when the relative difference between x and y is smaller than the configured epsilon.
		 * The function cannot be used to compare values smaller than approximately 2.22e-16.
		 * For matrices, the function is evaluated element wise.
		 */
		compare(x: MathType, y: MathType): number|BigNumber|Fraction|MathArray|Matrix;

		/**
		 * Test element wise whether two matrices are equal. The function accepts both matrices and scalar values.
		 */
		deepEqual(x: MathType, y: MathType): number|BigNumber|Fraction|Complex|Unit|MathArray|Matrix;

		/**
		 * Test whether two values are equal.
                 *
                 * The function tests whether the relative difference between x and y is smaller than the configured epsilon.
		 * The function cannot be used to compare values smaller than approximately 2.22e-16.
                 *
		 * For matrices, the function is evaluated element wise. In case of complex numbers, x.re must equal y.re, and x.im must equal y.im.
                 *
		 * Values null and undefined are compared strictly, thus null is only equal to null and nothing else, and undefined is only equal to undefined and nothing else.
		 */
		equal(x: MathType, y: MathType): boolean|MathArray|Matrix;

		/**
		 * Test whether value x is larger than y.
                 *
                 * The function returns true when x is larger than y and the relative difference between x and y is larger than the configured epsilon.
		 * The function cannot be used to compare values smaller than approximately 2.22e-16.
                 *
		 * For matrices, the function is evaluated element wise.
		 */
		larger(x: MathType, y: MathType): boolean|MathArray|Matrix;

		/**
		 * Test whether value x is larger or equal to y.
                 *
                 * The function returns true when x is larger than y or the relative difference between x and y is smaller than the configured epsilon.
		 * The function cannot be used to compare values smaller than approximately 2.22e-16.
                 *
		 * For matrices, the function is evaluated element wise.
		 */
		largerEq(x: MathType, y: MathType): boolean|MathArray|Matrix;

		/**
		 * Test whether value x is smaller than y.
                 *
                 * The function returns true when x is smaller than y and the relative difference between x and y is smaller than the configured epsilon.
		 * The function cannot be used to compare values smaller than approximately 2.22e-16.
                 *
		 * For matrices, the function is evaluated element wise.
		 */
		smaller(x: MathType, y: MathType): boolean|MathArray|Matrix;

		/**
		 * Test whether value x is smaller or equal to y.
                 *
                 * The function returns true when x is smaller than y or the relative difference between x and y is smaller than the configured epsilon.
		 * The function cannot be used to compare values smaller than approximately 2.22e-16. For matrices, the function is evaluated element wise.
		 */
		smallerEq(x: MathType, y: MathType): boolean|MathArray|Matrix;

		/**
		 * Test whether two values are unequal.
                 *
                 * The function tests whether the relative difference between x and y is larger than the configured epsilon. The function cannot
		 * be used to compare values smaller than approximately 2.22e-16.
                 *
		 * For matrices, the function is evaluated element wise. In case of complex numbers, x.re must unequal y.re, or x.im must unequal y.im.
                 *
                 * Values null and undefined are compared strictly, thus null is unequal with everything except null, and undefined is unequal with
		 * everying except. undefined.
		 */
		unequal(x: MathType, y: MathType): boolean|MathArray|Matrix;

		/**
                 * Compute the maximum value of a matrix or a list with values. In case of a multi dimensional array, the maximum of the flattened
		 * array will be calculated. When dim is provided, the maximum over the selected dimension will be calculated. Parameter dim is zero-based.
		 */
		max(...args: MathType[]): any;
		max(A: MathArray|Matrix, dim?: number): any;

		/**
                 * Compute the mean value of matrix or a list with values. In case of a multi dimensional array, the mean of the flattened array will be
		 * calculated. When dim is provided, the maximum over the selected dimension will be calculated. Parameter dim is zero-based.
		 */
		mean(...args: MathType[]): any;
		mean(A: MathArray|Matrix, dim?: number): any;

		/**
                 * Compute the median of a matrix or a list with values. The values are sorted and the middle value is returned. In case of an
		 * even number of values, the average of the two middle values is returned. Supported types of values are: Number, BigNumber, Unit
                 *
		 * In case of a (multi dimensional) array or matrix, the median of all elements will be calculated.
		 */
		median(...args: MathType[]): any;

		/**
                 * Compute the maximum value of a matrix or a list of values. In case of a multi dimensional array, the maximum of the flattened
		 * array will be calculated. When dim is provided, the maximum over the selected dimension will be calculated. Parameter dim is zero-based.
		 */
		min(...args: MathType[]): any;
		min(A: MathArray|Matrix, dim?: number): any;

		/**
		 * Computes the mode of a set of numbers or a list with values(numbers or characters). If there are more than one modes, it returns a list of those values.
		 */
		mode(...args: MathType[]): any;

		/**
		 * Compute the product of a matrix or a list with values. In case of a (multi dimensional) array or matrix, the sum of all elements will be calculated.
		 */
		prod(...args: MathType[]): any;

		/**
                 * Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned.
		 * Supported types of sequence values are: Number, BigNumber, Unit Supported types of probability are: Number, BigNumber
                 *
		 * In case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.
		 */
		quantileSeq(A: MathArray|Matrix, prob: Number|BigNumber|MathArray, sorted?: boolean): Number|BigNumber|Unit|MathArray;

		/**
                 * Compute the standard deviation of a matrix or a list with values. The standard deviations is defined as the square root of the
                 * variance: std(A) = sqrt(var(A)). In case of a (multi dimensional) array or matrix, the standard deviation over all elements will
		 * be calculated.
                 *
                 * Optionally, the type of normalization can be specified as second parameter. The parameter normalization can be one of the following
		 * values:
                 *
		 * 'unbiased' (default) The sum of squared errors is divided by (n - 1)
		 * 'uncorrected' The sum of squared errors is divided by n
		 * 'biased' The sum of squared errors is divided by (n + 1)
		 */
		std(array: MathArray|Matrix, normalization?: string): number;

		/**
		 * Compute the sum of a matrix or a list with values. In case of a (multi dimensional) array or matrix, the sum of all elements will be calculated.
		 */
		sum(...args: (Number|BigNumber|Fraction)[]): any;
		sum(array: MathArray|Matrix): any;

		/**
                 * Compute the variance of a matrix or a list with values. In case of a (multi dimensional) array or matrix, the variance over all
		 * elements will be calculated.
                 *
                 * Optionally, the type of normalization can be specified as second parameter. The parameter normalization can be one of the
		 * following values:
                 *
		 * 'unbiased' (default) The sum of squared errors is divided by (n - 1)
		 * 'uncorrected' The sum of squared errors is divided by n
		 * 'biased' The sum of squared errors is divided by (n + 1)
                 * Note that older browser may not like the variable name var. In that case, the function can be called as math['var'](...)
		 * instead of math.var(...).
		 */
		var(...args: (Number|BigNumber|Fraction)[]): any;
		var(array: MathArray|Matrix, normalization?: string): any;

		/**
		 * Calculate the inverse cosine of a value. For matrices, the function is evaluated element wise.
		 */
		acos(x: number): number;
		acos(x: BigNumber): BigNumber;
		acos(x: Complex): Complex;
		acos(x: MathArray): MathArray;
		acos(x: Matrix): Matrix;

		/**
		 * Calculate the hyperbolic arccos of a value, defined as acosh(x) = ln(sqrt(x^2 - 1) + x).
		 * For matrices, the function is evaluated element wise.
		 */
		acosh(x: number): number;
		acosh(x: BigNumber): BigNumber;
		acosh(x: Complex): Complex;
		acosh(x: MathArray): MathArray;
		acosh(x: Matrix): Matrix;

		/**
		 * Calculate the inverse cotangent of a value. For matrices, the function is evaluated element wise.
		 */
		acot(x: number): number;
		acot(x: BigNumber): BigNumber;
		acot(x: MathArray): MathArray;
		acot(x: Matrix): Matrix;

		/**
		 * Calculate the hyperbolic arccotangent of a value, defined as acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2.
		 * For matrices, the function is evaluated element wise.
		 */
		acoth(x: number): number;
		acoth(x: BigNumber): BigNumber;
		acoth(x: MathArray): MathArray;
		acoth(x: Matrix): Matrix;

		/**
		 * Calculate the inverse cosecant of a value. For matrices, the function is evaluated element wise.
		 */
		acsc(x: number): number;
		acsc(x: BigNumber): BigNumber;
		acsc(x: MathArray): MathArray;
		acsc(x: Matrix): Matrix;

		/**
		 * Calculate the hyperbolic arccosecant of a value, defined as acsch(x) = ln(1/x + sqrt(1/x^2 + 1)).
		 * For matrices, the function is evaluated element wise.
		 */
		acsch(x: number): number;
		acsch(x: BigNumber): BigNumber;
		acsch(x: MathArray): MathArray;
		acsch(x: Matrix): Matrix;

		/**
		 * Calculate the inverse secant of a value. For matrices, the function is evaluated element wise.
		 */
		asec(x: number): number;
		asec(x: BigNumber): BigNumber;
		asec(x: MathArray): MathArray;
		asec(x: Matrix): Matrix;

		/**
		 * Calculate the hyperbolic arcsecant of a value, defined as asech(x) = ln(sqrt(1/x^2 - 1) + 1/x). For matrices, the function is evaluated element wise.
		 */
		asech(x: number): number;
		asech(x: BigNumber): BigNumber;
		asech(x: MathArray): MathArray;
		asech(x: Matrix): Matrix;

		/**
		 * Calculate the inverse sine of a value. For matrices, the function is evaluated element wise.
		 */
		asin(x: number): number;
		asin(x: BigNumber): BigNumber;
		asin(x: Complex): Complex;
		asin(x: MathArray): MathArray;
		asin(x: Matrix): Matrix;

		/**
		 * Calculate the hyperbolic arcsine of a value, defined as asinh(x) = ln(x + sqrt(x^2 + 1)). For matrices, the function is evaluated element wise.
		 */
		asinh(x: number): number;
		asinh(x: BigNumber): BigNumber;
		asinh(x: MathArray): MathArray;
		asinh(x: Matrix): Matrix;

		/**
		 * Calculate the inverse tangent of a value. For matrices, the function is evaluated element wise.
		 */
		atan(x: number): number;
		atan(x: BigNumber): BigNumber;
		atan(x: MathArray): MathArray;
		atan(x: Matrix): Matrix;

		/**
                 * Calculate the inverse tangent function with two arguments, y/x. By providing two arguments, the right quadrant of the
		 * computed angle can be determined.
                 *
		 * For matrices, the function is evaluated element wise.
		 */
		atan2(y: number, x: number): number;
		atan2(y: MathArray|Matrix, x: MathArray|Matrix): MathArray|Matrix;

		/**
		 * Calculate the hyperbolic arctangent of a value, defined as atanh(x) = ln((1 + x)/(1 - x)) / 2.
		 * For matrices, the function is evaluated element wise.
		 */
		atanh(x: number): number;
		atanh(x: BigNumber): BigNumber;
		atanh(x: MathArray): MathArray;
		atanh(x: Matrix): Matrix;

		/**
		 * Calculate the cosine of a value. For matrices, the function is evaluated element wise.
		 */
		asin(x: number): number;
		asin(x: BigNumber): BigNumber;
		asin(x: Complex): Complex;
		asin(x: Unit): number;
		asin(x: MathArray): MathArray;
		asin(x: Matrix): Matrix;

		/**
		 * Calculate the hyperbolic cosine of a value, defined as cosh(x) = 1/2 * (exp(x) + exp(-x)). For matrices, the function is evaluated element wise.
		 */
		cosh(x: number): number;
		cosh(x: BigNumber): BigNumber;
		cosh(x: Complex): Complex;
		cosh(x: Unit): number;
		cosh(x: MathArray): MathArray;
		cosh(x: Matrix): Matrix;

		/**
		 * Calculate the cotangent of a value. cot(x) is defined as 1 / tan(x). For matrices, the function is evaluated element wise.
		 */
		cot(x: number): number;
		cot(x: Complex): Complex;
		cot(x: Unit): number;
		cot(x: MathArray): MathArray;
		cot(x: Matrix): Matrix;

		/**
		 * Calculate the hyperbolic cotangent of a value, defined as coth(x) = 1 / tanh(x). For matrices, the function is evaluated element wise.
		 */
		coth(x: number): number;
		coth(x: Complex): Complex;
		coth(x: Unit): number;
		coth(x: MathArray): MathArray;
		coth(x: Matrix): Matrix;

		/**
		 * Calculate the cosecant of a value, defined as csc(x) = 1/sin(x). For matrices, the function is evaluated element wise.
		 */
		csc(x: number): number;
		csc(x: Complex): Complex;
		csc(x: Unit): number;
		csc(x: MathArray): MathArray;
		csc(x: Matrix): Matrix;

		/**
		 * Calculate the hyperbolic cosecant of a value, defined as csch(x) = 1 / sinh(x). For matrices, the function is evaluated element wise.
		 */
		csch(x: number): number;
		csch(x: Complex): Complex;
		csch(x: Unit): number;
		csch(x: MathArray): MathArray;
		csch(x: Matrix): Matrix;

		/**
		 * Calculate the secant of a value, defined as sec(x) = 1/cos(x). For matrices, the function is evaluated element wise.
		 */
		sec(x: number): number;
		sec(x: Complex): Complex;
		sec(x: Unit): number;
		sec(x: MathArray): MathArray;
		sec(x: Matrix): Matrix;

		/**
		 * Calculate the hyperbolic secant of a value, defined as sech(x) = 1 / cosh(x). For matrices, the function is evaluated element wise.
		 */
		sech(x: number): number;
		sech(x: Complex): Complex;
		sech(x: Unit): number;
		sech(x: MathArray): MathArray;
		sech(x: Matrix): Matrix;

		/**
		 * Calculate the sine of a value. For matrices, the function is evaluated element wise.
		 */
		sin(x: number): number;
		sin(x: BigNumber): BigNumber;
		sin(x: Complex): Complex;
		sin(x: Unit): number;
		sin(x: MathArray): MathArray;
		sin(x: Matrix): Matrix;

		/**
		 * Calculate the cosine of a value. For matrices, the function is evaluated element wise.
		 */
		cos(x: number): number;
		cos(x: BigNumber): BigNumber;
		cos(x: Complex): Complex;
		cos(x: Unit): number;
		cos(x: MathArray): MathArray;
		cos(x: Matrix): Matrix;

		/**
		 * Calculate the hyperbolic sine of a value, defined as sinh(x) = 1/2 * (exp(x) - exp(-x)). For matrices, the function is evaluated element wise.
		 */
		sinh(x: number): number;
		sinh(x: BigNumber): BigNumber;
		sinh(x: Complex): Complex;
		sinh(x: Unit): number;
		sinh(x: MathArray): MathArray;
		sinh(x: Matrix): Matrix;

		/**
		 * Calculate the tangent of a value. tan(x) is equal to sin(x) / cos(x). For matrices, the function is evaluated element wise.
		 */
		tan(x: number): number;
		tan(x: BigNumber): BigNumber;
		tan(x: Complex): Complex;
		tan(x: Unit): number;
		tan(x: MathArray): MathArray;
		tan(x: Matrix): Matrix;

		/**
		 * Calculate the hyperbolic tangent of a value, defined as tanh(x) = (exp(2 * x) - 1) / (exp(2 * x) + 1). For matrices, the function is evaluated element wise.
		 */
		tanh(x: number): number;
		tanh(x: BigNumber): BigNumber;
		tanh(x: Complex): Complex;
		tanh(x: Unit): number;
		tanh(x: MathArray): MathArray;
		tanh(x: Matrix): Matrix;

		/**
		 * Change the unit of a value. For matrices, the function is evaluated element wise.
		 * @param x The unit to be converted.
		 * @param unit New unit. Can be a string like "cm" or a unit without value.
		 */
		to(x: Unit|MathArray|Matrix, unit: Unit|string): Unit|MathArray|Matrix

		/**
		 * Clone an object.
		 */
		clone(x: any): any;

		/**
		 * Filter the items in an array or one dimensional matrix.
		 * @param x A one dimensional matrix or array to filter
                 * @param test
		 */
		filter(x: MathArray|Matrix, test: RegExp|((item: any)=>boolean)): MathArray|Matrix;

		/**
		 * Iterate over all elements of a matrix/array, and executes the given callback function.
		 * @param x The matrix to iterate on.
		 * @param callback The callback function is invoked with three parameters: the value of the element, the index of the element, and the Matrix/array being traversed.
		 */
		forEach(x: MathArray|Matrix, callback: (item: any)=>any): void;

		/**
		 * Format a value of any type into a string.
		 * @param value The value to be formatted
		 */
		format(value: any, options?: IFormatOptions|number|((item: any)=>string)): string;

		/**
                 * Test whether a value is an integer number. The function supports number, BigNumber, and Fraction.
		 * The function is evaluated element-wise in case of Array or Matrix input.
		 */
		isInteger(x: any): boolean;

		/**
		 * Test whether a value is negative: smaller than zero. The function supports types number, BigNumber, Fraction, and Unit.
		 * The function is evaluated element-wise in case of Array or Matrix input.
		 */
		isNegative(x: any): boolean;

		/**
		 * Test whether a value is an numeric value. The function is evaluated element-wise in case of Array or Matrix input.
		 */
		isNumeric(x: any): boolean;

		/**
		 * Test whether a value is positive: larger than zero. The function supports types number, BigNumber, Fraction, and Unit.
		 * The function is evaluated element-wise in case of Array or Matrix input.
		 */
		isPositive(x: any): boolean;

		/**
		 * Test whether a value is zero. The function can check for zero for types number, BigNumber, Fraction, Complex, and Unit.
		 * The function is evaluated element-wise in case of Array or Matrix input.
		 */
		isZero(x: any): boolean;

		/**
		 * Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.
		 * @param x The matrix to iterate on.
		 * @param callback The callback method is invoked with three parameters: the value of the element, the index of the element, and the matrix being traversed.
		 */
		map(x: MathArray|Matrix, callback: (item: any)=>any): MathArray|Matrix;

		/**
		 * Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.
		 * @param x A one dimensional matrix or array to sort
		 * @param k The kth smallest value to be retrieved; zero-based index
		 * @param compare  An optional comparator function. The function is called as compare(a, b), and must return 1 when a > b, -1 when a < b, and 0 when a == b. Default value: 'asc'.
		 * @returns Returns the kth lowest value.
		 */
		partitionSelect(x: MathArray|Matrix, k: number, compare?: string|((a: any, b: any)=>number)): any;

		/**
		 * Interpolate values into a string template.
		 * @param template A string containing variable placeholders.
		 * @param values An object containing variables which will be filled in in the template.
		 * @param precision Number of digits to format numbers. If not provided, the value will not be rounded.
		 */
		print(template:string, values: any, precision?: number): void;

		/**
		 * Sort the items in a matrix.
		 * @param x A one dimensional matrix or array to sort
		 * @param compare  An optional comparator function. The function is called as compare(a, b), and must return 1 when a > b, -1 when a < b, and 0 when a == b. Default value: 'asc'.
		 */
		sort(x: MathArray|Matrix, compare?: string|((a: any, b: any)=>number)): MathArray|Matrix;

		/**
		 * Determine the type of a variable.
		 */
		typeof(x: any): string;
	}

	export interface Matrix {
		type: string;
		storage(): string;
		datatype(): string;
		density(): number;
		subset(index: Index, replacement?: any, defaultValue?: any): Matrix;
		get(index: number[]): any;
		set(index: number[], value: any, defaultValue?: number|string): Matrix;
		resize(size: MathArray|Matrix, defaultValue?: number|string): Matrix;
		clone(): Matrix;
		size(): number[];
		map(callback: (a: any, b: number, c: Matrix) => any, skipZeros?: boolean): Matrix;
		forEach(callback: (a: any, b: number, c: Matrix) => void, skipZeros?: boolean): void;
		toJSON(): any;
		diagonal(k?: number|BigNumber): any[];
		swapRows(i: number, j: number): Matrix;
	}

	export interface BigNumber {

	}

	export interface Fraction {

	}

	export interface Complex {
		re: number;
		im: number;
		toPolar(): IPolarCoordinates;
		clone(): Complex;
	}

	export interface IPolarCoordinates {
                r: number;
		phi: number;
        }

	export interface Unit {
		to(unit: string): Unit;
		toNumber(unit: string): number;
	}

	export interface Index {

	}

	export interface EvalFunction {
		eval(scope?: any): any;
	}

	export interface MathNode {
                isNode: boolean;
                isSymbolNode?: boolean;
                isConstantNode?: boolean;
                isOperatorNode?: boolean;
                op?: string;
                fn?: string;
                args?: MathNode[];
                type: string;
                name?: string;
                value?: any;

                compile(): EvalFunction;
                eval(): any;
                eval(expr: string): any;
                /**
                 *
                 * Filter nodes in an expression tree. The callback function is called as callback(node: Node, path: string, parent: Node) : boolean for every node in the tree,
                 * and must return a boolean. The function filter returns an array with nodes for which the test returned true.
                 * Parameter path is a string containing a relative JSON Path.
                 *
                 * Example:
                 *
                 * ```
                 * var node = math.parse('x^2 + x/4 + 3*y');
                 * var filtered = node.filter(function (node) {
                  * return node.isSymbolNode && node.name == 'x';
                 * });
                 * // returns an array with two entries: two SymbolNodes 'x'
                 * ```
                 *
                 * @param The callback function is called as callback(node: Node, path: string, parent: Node) : boolean for every node in the tree, and must return a boolean. The function filter returns an array with nodes for which the test returned true. Parameter path is a string containing a relative JSON Path.
                 * @param  {Function} callback(node [description]
                 * @return {[Mathnode]}           Returns an array with nodes for which test returned true
                 */
                filter(callback: (node: MathNode, path: string, parent: MathNode)=>any ): MathNode[];


                /**
                 * [forEach description]
                 * @param  {MathNode} callback(node [description]
                 * @return {[type]}                 [description]
                 */
                forEach(callback: (node: MathNode, path: string, parent: MathNode)=>any): MathNode[];
		

                /**
                * `traverse(callback)`
                *
                * Recursively traverse all nodes in a node tree. Executes given callback for this node and each of its child nodes. Similar to Array.forEach, except recursive. The callback function is a mapping function accepting a node, and returning a replacement for the node or the original node. Function callback is called as callback(node: Node, path: string, parent: Node) for every node in the tree. Parameter path is a string containing a relative JSON Path. Example:
                *
                * ```
                * var node = math.parse('3 * x + 2');
                * node.traverse(function (node, path, parent) {
                * switch (node.type) {
                * case 'OperatorNode': console.log(node.type, node.op);    break;
                * case 'ConstantNode': console.log(node.type, node.value); break;
                * case 'SymbolNode':   console.log(node.type, node.name);  break;
                * default:             console.log(node.type);
                * }
                * });
                * // outputs:
                * //   OperatorNode +
                * //   OperatorNode *
                * //   ConstantNode 3
                * //   SymbolNode x
                * //   ConstantNode 2
                * ```
                *
                * @param  {MathNode} callback=(node [description]
                * @return {[type]}                  [description]
                */
                traverse(callback: (node: MathNode, path: string, parent: MathNode)=> void): any;
//addEventListener(ev: 'change', callback: (ev: EditorChangeEvent) => any);
                /**
                 * Recursively transform an expression tree via a transform function. Similar to Array.map, 
                 * but recursively executed on all nodes in the expression tree. The callback function is a 
                 * mapping function accepting a node, and returning a replacement for the node or the original node. 
                 * Function callback is called as callback(node: Node, path: string, parent: Node) for every node in 
                 * the tree, and must return a Node. Parameter path is a string containing a relative JSON Path.
                 *
                 * For example, to replace all nodes of type SymbolNode having name ‘x’ with a ConstantNode with value 3:
                 * ```js
                 * var node = math.parse('x^2 + 5*x');
                 * var transformed = node.transform(function (node, path, parent) {
                 *   if (node.SymbolNode && node.name == 'x') {
                 *     return new math.expression.node.ConstantNode(3);
                 *   }
                 *   else {
                 *     return node;
                 *   }
                 * });
                 * transformed.toString(); // returns '(3 ^ 2) + (5 * 3)'
                 * ```
                 */
                transform(callback: (node: MathNode, path: string, parent: MathNode)=>MathNode): MathNode;
                /**
                 * Transform a node. Creates a new Node having it’s childs be the results of calling the provided 
                 * callback function for each of the childs of the original node. The callback function is called 
                 * as `callback(child: Node, path: string, parent: Node)` and must return a Node. 
                 * Parameter path is a string containing a relative JSON Path.
                 *
                 *
                 * See also transform, which is a recursive version of map.
                */
                map(callback: (node: MathNode, path: string, parent: MathNode)=>MathNode): MathNode;
	}


	export interface Parser {
		eval(expr: string): any;
		get(variable: string): any;
		set(variable: string, value: any): void;
		clear(): void;
	}

	export interface Distribution {
		random(size: any, min?: any, max?: any): any;
		randomInt(min: any, max?: any): any;
		pickRandom(array: any): any;
	}

	export interface IFormatOptions {
		/**
		 * Number notation. Choose from:
		 * 'fixed' Always use regular number notation. For example '123.40' and '14000000'
		 * 'exponential' Always use exponential notation. For example '1.234e+2' and '1.4e+7'
                 * 'auto' (default) Regular number notation for numbers having an absolute value between lower and upper bounds, and
		 * uses exponential notation elsewhere. Lower bound is included, upper bound is excluded. For example '123.4' and '1.4e7'.
		 */
		notation?: string;

		/**
                 * A number between 0 and 16 to round the digits of the number. In case of notations 'exponential' and 'auto',
                 * precision defines the total number of significant digits returned and is undefined by default. In case of notation 'fixed',
		 * precision defines the number of significant digits after the decimal point, and is 0 by default.
		 */
		precision?: number;

		/**
                 * An object containing two parameters, {number} lower and {number} upper, used by notation 'auto' to determine
		 * when to return exponential notation. Default values are lower=1e-3 and upper=1e5. Only applicable for notation auto.
		 */
		exponential?: {lower: number; upper: number};

		/**
                 * Available values: 'ratio' (default) or 'decimal'. For example format(fraction(1, 3)) will output '1/3' when 'ratio'
		 * is configured, and will output 0.(3) when 'decimal' is configured.
		 */
		fraction?: string;

                /**
                 * A custom formatting function. Can be used to override the built-in notations. Function fn is called with
                 * value as parameter and must return a string. Is useful for example to format all values inside a matrix in a particular way.
		 * */
		fn?: (item: any)=>string;
	}

	export interface Help {
		toString(): string;
		toJSON(): string;
        }

        export interface IMathJsChain {
		/**
		 * Solves the linear equation system by forwards substitution. Matrix must be a lower triangular matrix.
		 * @param b A column vector with the b values
		 */
		lsolve(b: Matrix|MathArray): IMathJsChain;

		/**
                 * Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in two matrices (L, U)
		 * and a row permutation vector p where A[p,:] = L * U
		 */
		lup(): IMathJsChain;

		/**
		 * Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.
		 * @param b Column Vector
		 */
		lusolve(b: Matrix|MathArray): IMathJsChain;

		/**
                 * Calculate the Sparse Matrix LU decomposition with full pivoting. Sparse Matrix A is decomposed in
		 * two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U
                 * @param order The Symbolic Ordering and Analysis order: 0 - Natural ordering, no permutation vector q is
                 * returned 1 - Matrix must be square, symbolic ordering and analisis is performed on M = A + A' 2 - Symbolic
                 * ordering and analisis is performed on M = A' * A. Dense columns from A' are dropped, A recreated from A'.
                 * This is appropriatefor LU factorization of unsymmetric matrices. 3 - Symbolic ordering and analisis is performed
                 * on M = A' * A. This is best used for LU factorization is matrix M has no dense rows. A dense row is a row with
		 * more than 10*sqr(columns) entries.
		 * @param threshold Partial pivoting threshold (1 for partial pivoting)
		 * @returns The lower triangular matrix, the upper triangular matrix and the permutation vectors.
		 */
		slu(order: Number, threshold: Number): IMathJsChain;

		/**
		 * Solves the linear equation system by backward substitution. Matrix must be an upper triangular matrix. U * x = b
		 * @param b A column vector with the b values
		 * @returns A column vector with the linear system solution (x)
		 */
		usolve(b:Matrix|MathArray): IMathJsChain;

		/**
		 * Calculate the absolute value of a number. For matrices, the function is evaluated element wise.
		 */
		abs(): IMathJsChain;

		/**
		 * Add two values, x + y. For matrices, the function is evaluated element wise.
		 * @param y Second value to add
		 */
		add(y: MathType): IMathJsChain;

		/**
		 * Calculate the cubic root of a value. For matrices, the function is evaluated element wise.
		 * @param allRoots Optional, false by default. Only applicable when x is a number or complex number. If true, all complex roots are returned, if false (default) the principal root is returned.
		 */
		cbrt(allRoots?: boolean): IMathJsChain;

		/**
		 * Round a value towards plus infinity If x is complex, both real and imaginary part are rounded towards plus infinity. For matrices, the function is evaluated element wise.
		 */
		ceil(): IMathJsChain;

                /**
		 * Compute the cube of a value, x * x * x. For matrices, the function is evaluated element wise.
		 */
		cube(): IMathJsChain;

		/**
		 * Divide two values, x / y. To divide matrices, x is multiplied with the inverse of y: x * inv(y).
		 * @param y Denominator
		 */
		divide(y:MathType): IMathJsChain;

		/**
		 * Divide two matrices element wise. The function accepts both matrices and scalar values.
		 * @param y Denominator
		 */
		dotDivide(y: MathType): IMathJsChain;

		/**
		 * Multiply two matrices element wise. The function accepts both matrices and scalar values.
		 * @param y Right hand value
		 */
		dotMultiply(y: MathType): IMathJsChain;

                /**
		 * Calculates the power of x to y element wise.
		 * @param y The exponent
		 */
		dotPow(y: MathType): IMathJsChain;

		/**
		 * Calculate the exponent of a value. For matrices, the function is evaluated element wise.
		 */
		exp(): IMathJsChain;

                /**
		 * Round a value towards zero. For matrices, the function is evaluated element wise.
		 */
		fix(): IMathJsChain;

		/**
		 * Round a value towards minus infinity. For matrices, the function is evaluated element wise.
		 */
		floor(): IMathJsChain;

		/**
		 * Calculate the greatest common divisor for two or more values or arrays. For matrices, the function is evaluated element wise.
		 */
		gcd(...args: number[]): IMathJsChain;
		gcd(...args: BigNumber[]): IMathJsChain ;
		gcd(...args: Fraction[]): IMathJsChain ;
		gcd(...args: MathArray[]): IMathJsChain ;
		gcd(...args: Matrix[]): IMathJsChain;

		/**
		 * Calculate the hypotenusa of a list with values. The hypotenusa is defined as:
		 * hypot(a, b, c, ...) = sqrt(a^2 + b^2 + c^2 + ...)
		 * For matrix input, the hypotenusa is calculated for all values in the matrix.
		 */
		hypot(...args: number[]): IMathJsChain;
		hypot(...args: BigNumber[]): IMathJsChain;

		/**
		 * Calculate the least common multiple for two or more values or arrays. lcm is defined as:
		 * lcm(a, b) = abs(a * b) / gcd(a, b)
		 * For matrices, the function is evaluated element wise.
		 */
		lcm(b: number): IMathJsChain;
		lcm(b: BigNumber ): IMathJsChain ;
		lcm(b: MathArray): IMathJsChain;
		lcm(b: Matrix): IMathJsChain;

		/**
		 * Calculate the logarithm of a value. For matrices, the function is evaluated element wise.
		 * @param base Optional base for the logarithm. If not provided, the natural logarithm of x is calculated. Default value: e.
		 */
		log(base?: number|BigNumber|Complex): IMathJsChain;

		/**
		 * Calculate the 10-base of a value. This is the same as calculating log(x, 10). For matrices, the function is evaluated element wise.
		 */
		log10(): IMathJsChain;

		/**
		 * Calculates the modulus, the remainder of an integer division. For matrices, the function is evaluated element wise.
		 * The modulus is defined as:
		 * x - y * floor(x / y)
		 * See http://en.wikipedia.org/wiki/Modulo_operation.
		 * @param y Divisor
		 */
		mod(y: number|BigNumber|Fraction|MathArray|Matrix): IMathJsChain;

		/**
		 * Multiply two values, x * y. The result is squeezed. For matrices, the matrix product is calculated.
		 */
		multiply(y: MathType): IMathJsChain;

		/**
		 * Calculate the norm of a number, vector or matrix. The second parameter p is optional. If not provided, it defaults to 2.
		 * @param p Vector space. Supported numbers include Infinity and -Infinity. Supported strings are: 'inf', '-inf', and 'fro' (The Frobenius norm) Default value: 2.
		 */
		norm(p?: number|BigNumber|string): IMathJsChain;

		/**
		 * Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation
		 * x^root = A
		 * For matrices, the function is evaluated element wise.
		 * @param root The root. Default value: 2.
		 */
		nthRoot(root?: number|BigNumber): IMathJsChain;

		/**
		 * Calculates the power of x to y, x ^ y. Matrix exponentiation is supported for square matrices x, and positive integer exponents y.
		 * @param y The exponent
		 */
		pow(y: number|BigNumber|Complex): IMathJsChain;

		/**
		 * Round a value towards the nearest integer. For matrices, the function is evaluated element wise.
		 * @param n Number of decimals Default value: 0.
		 */
		round(n?: number|BigNumber|MathArray): IMathJsChain;

		/**
		 * Compute the sign of a value. The sign of a value x is:
		 * 1 when x > 1
		 * -1 when x < 0
		 * 0 when x == 0
		 * For matrices, the function is evaluated element wise.
		 */
		sign(): IMathJsChain;

		/**
		 * Calculate the square root of a value. For matrices, the function is evaluated element wise.
		 */
		sqrt(): IMathJsChain;

		/**
		 * Compute the square of a value, x * x. For matrices, the function is evaluated element wise.
		 */
		square(): IMathJsChain;

		/**
		 * Subtract two values, x - y. For matrices, the function is evaluated element wise.
		 */
		subtract(y: MathType): IMathJsChain;

		/**
		 * Inverse the sign of a value, apply a unary minus operation.
		 * For matrices, the function is evaluated element wise. Boolean values and strings will be converted to a number. For complex numbers, both real and complex value are inverted.
		 */
		unaryMinus(): IMathJsChain;

		/**
		 * Unary plus operation. Boolean values and strings will be converted to a number, numeric values will be returned as is.
		 * For matrices, the function is evaluated element wise.
		 */
		unaryPlus(): IMathJsChain;

		/**
		 * Calculate the extended greatest common divisor for two values. See http://en.wikipedia.org/wiki/Extended_Euclidean_algorithm.
		 */
		xgcd(b: number|BigNumber): IMathJsChain;

		/**
		 * Bitwise AND two values, x & y. For matrices, the function is evaluated element wise.
		 */
		bitAnd(y: number|BigNumber|MathArray|Matrix): IMathJsChain;

		/**
		 * Bitwise NOT value, ~x. For matrices, the function is evaluated element wise. For units, the function is evaluated on the best prefix base.
		 */
		bitNot(): IMathJsChain;

		/**
		 * Bitwise OR two values, x | y. For matrices, the function is evaluated element wise. For units, the function is evaluated on the lowest print base.
		 */
		bitOr(): IMathJsChain;

		/**
		 * Bitwise XOR two values, x ^ y. For matrices, the function is evaluated element wise.
		 */
		bitXor(y: number|BigNumber|MathArray|Matrix): IMathJsChain;

		/**
		 * Bitwise left logical shift of a value x by y number of bits, x << y. For matrices, the function is evaluated element wise. For units, the function is evaluated on the best prefix base.
		 * @param x Value to be shifted
		 * @param y Amount of shifts
		 */
		leftShift(y: number|BigNumber): IMathJsChain;

		/**
		 * Bitwise right arithmetic shift of a value x by y number of bits, x >> y. For matrices, the function is evaluated element wise. For units, the function is evaluated on the best prefix base.
		 * @param x Value to be shifted
		 * @param y Amount of shifts
		 */
		rightArithShift(y: number|BigNumber): IMathJsChain;

		/**
		 * Bitwise right logical shift of value x by y number of bits, x >>> y. For matrices, the function is evaluated element wise. For units, the function is evaluated on the best prefix base.
		 * @param x Value to be shifted
		 * @param y Amount of shifts
		 */
		rightLogShift(y: number): IMathJsChain;

		/**
		 * The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. bellNumbers only takes integer arguments. The following condition must be enforced: n >= 0
		 * @param n Total number of objects in the set
		 */
		bellNumbers(): IMathJsChain;

		/**
		 * The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0
		 * @pararm n nth Catalan number
		 */
		catalan(): IMathJsChain;

		/**
		 * The composition counts of n into k parts. Composition only takes integer arguments. The following condition must be enforced: k <= n.
		 * @param n Total number of objects in the set
		 * @param k Number of objects in the subset
		 * @returns Returns the composition counts of n into k parts.
		 */
		composition(k: Number|BigNumber): IMathJsChain;

		/**
		 * The Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. stirlingS2 only takes integer arguments. The following condition must be enforced: k <= n.
		 * If n = k or k = 1, then s(n,k) = 1
		 * @param n Total number of objects in the set
		 * @param k Number of objects in the subset
		 */
		stirlingS2(k: Number|BigNumber): IMathJsChain;

		/**
		 * Compute the argument of a complex value. For a complex number a + bi, the argument is computed as atan2(b, a). For matrices, the function is evaluated element wise.
		 * @param x A complex number or array with complex numbers
		 */
		arg(): IMathJsChain;

		/**
		 * Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate of x is a - bi. For matrices, the function is evaluated element wise.
		 * @param x A complex number or array with complex numbers
		 */
		conj(): IMathJsChain;

                /**
                 * Get the imaginary part of a complex number. For a complex number a + bi, the function returns b.
		 * For matrices, the function is evaluated element wise.
		 */
		im(): IMathJsChain;

		/**
		 * Get the real part of a complex number. For a complex number a + bi, the function returns a.
		 * For matrices, the function is evaluated element wise.
		 */
		re(): IMathJsChain;

		/**
                 * Calculates: The eucledian distance between two points in 2 and 3 dimensional spaces. Distance between point
                 * and a line in 2 and 3 dimensional spaces. Pairwise distance between a set of 2D or 3D points NOTE: When
                 * substituting coefficients of a line(a, b and c), use ax + by + c = 0 instead of ax + by = c For parametric
		 * equation of a 3D line, x0, y0, z0, a, b, c are from: (x−x0, y−y0, z−z0) = t(a, b, c)
		 */
		distance(y: MathArray|Matrix|any): IMathJsChain;

		/**
                 * Calculates the point of intersection of two lines in two or three dimensions and of a line and a plane in
                 * three dimensions. The inputs are in the form of arrays or 1 dimensional matrices. The line intersection functions
		 * return null if the lines do not meet.
		 * Note: Fill the plane coefficients as x + y + z = c and not as x + y + z + c = 0.
		 * @param w Co-ordinates of first end-point of first line
		 * @param x Co-ordinates of second end-point of first line
		 * @param y Co-ordinates of first end-point of second line OR Co-efficients of the plane's equation
		 * @param z Co-ordinates of second end-point of second line OR null if the calculation is for line and plane
		 * @returns Returns the point of intersection of lines/lines-planes
		 */
		intersect(x: MathArray|Matrix, y: MathArray|Matrix, z: MathArray|Matrix): IMathJsChain;

		/**
		 * Logical and. Test whether two values are both defined with a nonzero/nonempty value. For matrices, the function is evaluated element wise.
		 */
		and(y: number|BigNumber|Complex|Unit|MathArray|Matrix): IMathJsChain;

		/**
		 * Logical not. Flips boolean value of a given parameter. For matrices, the function is evaluated element wise.
		 */
		not(): IMathJsChain;

		/**
		 * Logical or. Test if at least one value is defined with a nonzero/nonempty value. For matrices, the function is evaluated element wise.
		 */
		or(y: number|BigNumber|Complex|Unit|MathArray|Matrix): IMathJsChain;

		/**
		 * Logical xor. Test whether one and only one value is defined with a nonzero/nonempty value. For matrices, the function is evaluated element wise.
		 */
		xor(y: number|BigNumber|Complex|Unit|MathArray|Matrix): IMathJsChain;

		/**
                 * Calculate the cross product for two vectors in three dimensional space. The cross product of A = [a1, a2, a3]
		 * and B =[b1, b2, b3] is defined as:
		 * cross(A, B) = [ a2 * b3 - a3 * b2, a3 * b1 - a1 * b3, a1 * b2 - a2 * b1 ]
		 */
		cross(y: MathArray|Matrix): IMathJsChain;

		/**
		 * Calculate the determinant of a matrix.
		 */
		det(): IMathJsChain;

		/**
		 * Resize a matrix
		 * @param x Matrix to be resized
		 * @param size One dimensional array with numbers
		 * @param defaultValue Zero by default, except in case of a string, in that case defaultValue = ' ' Default value: 0.
		 */
		resize(size: MathArray|Matrix, defaultValue?: number|string): IMathJsChain;

		/**
		 * Calculate the size of a matrix or scalar.
		 */
		size(): IMathJsChain;

		/**
		 * Squeeze a matrix, remove inner and outer singleton dimensions from a matrix.
		 */
		squeeze(): IMathJsChain;

		/**
		 * Get or set a subset of a matrix or string.
		 * @param value An array, matrix, or string
		 * @param index An index containing ranges for each dimension
		 * @param replacement An array, matrix, or scalar. If provided, the subset is replaced with replacement. If not provided, the subset is returned
		 * @param defaultValue Default value, filled in on new entries when the matrix is resized. If not provided, math.matrix elements will be left undefined. Default value: undefined.
		 */
		subset(index: Index, replacement?: any, defaultValue?: any): IMathJsChain;

		/**
		 * Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.
		 */
		trace(): IMathJsChain;

		/**
		 * Transpose a matrix. All values of the matrix are reflected over its main diagonal. Only two dimensional matrices are supported.
		 */
		transpose(): IMathJsChain;

		/**
		 * Random pick a value from a one dimensional array. Array element is picked using a random function with uniform distribution.
		 */
		pickRandom(): IMathJsChain;

		/**
		 * Return a random number larger or equal to min and smaller than max using a uniform distribution.
		 */
		random(): IMathJsChain;
		random(max?: number): IMathJsChain;
		random(min:number, max: number): IMathJsChain;

		/**
		 * Return a random integer number larger or equal to min and smaller than max using a uniform distribution.
		 */
		randomInt(max?: number): IMathJsChain;
		randomInt(min:number, max: number): IMathJsChain;

		/**
		 * Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.
                 * x and y are considered equal when the relative difference between x and y is smaller than the configured epsilon.
		 * The function cannot be used to compare values smaller than approximately 2.22e-16.
		 * For matrices, the function is evaluated element wise.
		 */
		compare(y: MathType): IMathJsChain;

		/**
		 * Test element wise whether two matrices are equal. The function accepts both matrices and scalar values.
		 */
		deepEqual(y: MathType): IMathJsChain;

		/**
		 * Test whether two values are equal.
                 *
                 * The function tests whether the relative difference between x and y is smaller than the configured epsilon.
		 * The function cannot be used to compare values smaller than approximately 2.22e-16.
                 *
		 * For matrices, the function is evaluated element wise. In case of complex numbers, x.re must equal y.re, and x.im must equal y.im.
                 *
		 * Values null and undefined are compared strictly, thus null is only equal to null and nothing else, and undefined is only equal to undefined and nothing else.
		 */
		equal(y: MathType): IMathJsChain;

		/**
		 * Test whether value x is larger than y.
                 *
                 * The function returns true when x is larger than y and the relative difference between x and y is larger than the configured epsilon.
		 * The function cannot be used to compare values smaller than approximately 2.22e-16.
                 *
		 * For matrices, the function is evaluated element wise.
		 */
		larger(y: MathType): IMathJsChain;

		/**
		 * Test whether value x is larger or equal to y.
                 *
                 * The function returns true when x is larger than y or the relative difference between x and y is smaller than the configured epsilon.
		 * The function cannot be used to compare values smaller than approximately 2.22e-16.
                 *
		 * For matrices, the function is evaluated element wise.
		 */
		largerEq(y: MathType): IMathJsChain;

		/**
		 * Test whether value x is smaller than y.
                 *
                 * The function returns true when x is smaller than y and the relative difference between x and y is smaller than the configured epsilon.
		 * The function cannot be used to compare values smaller than approximately 2.22e-16.
                 *
		 * For matrices, the function is evaluated element wise.
		 */
		smaller(IMathJsChainy: MathType): IMathJsChain;

		/**
		 * Test whether value x is smaller or equal to y.
                 *
                 * The function returns true when x is smaller than y or the relative difference between x and y is smaller than the configured epsilon.
		 * The function cannot be used to compare values smaller than approximately 2.22e-16. For matrices, the function is evaluated element wise.
		 */
		smallerEq(IMathJsChainy: MathType): IMathJsChain;

		/**
		 * Test whether two values are unequal.
                 *
                 * The function tests whether the relative difference between x and y is larger than the configured epsilon. The function cannot
		 * be used to compare values smaller than approximately 2.22e-16.
                 *
		 * For matrices, the function is evaluated element wise. In case of complex numbers, x.re must unequal y.re, or x.im must unequal y.im.
                 *
                 * Values null and undefined are compared strictly, thus null is unequal with everything except null, and undefined is unequal with
		 * everying except. undefined.
		 */
		unequal(IMathJsChainy: MathType): IMathJsChain;

		/**
                 * Compute the maximum value of a matrix or a list with values. In case of a multi dimensional array, the maximum of the flattened
		 * array will be calculated. When dim is provided, the maximum over the selected dimension will be calculated. Parameter dim is zero-based.
		 */
		max(dim?: number): IMathJsChain;

		/**
                 * Compute the mean value of matrix or a list with values. In case of a multi dimensional array, the mean of the flattened array will be
		 * calculated. When dim is provided, the maximum over the selected dimension will be calculated. Parameter dim is zero-based.
		 */
		mean(dim?: number): IMathJsChain;

		/**
                 * Compute the median of a matrix or a list with values. The values are sorted and the middle value is returned. In case of an
		 * even number of values, the average of the two middle values is returned. Supported types of values are: Number, BigNumber, Unit
                 *
		 * In case of a (multi dimensional) array or matrix, the median of all elements will be calculated.
		 */
		median(): IMathJsChain;

		/**
                 * Compute the maximum value of a matrix or a list of values. In case of a multi dimensional array, the maximum of the flattened
		 * array will be calculated. When dim is provided, the maximum over the selected dimension will be calculated. Parameter dim is zero-based.
		 */
		min(dim?: number): IMathJsChain;

		/**
		 * Computes the mode of a set of numbers or a list with values(numbers or characters). If there are more than one modes, it returns a list of those values.
		 */
		mode(): IMathJsChain;

		/**
		 * Compute the product of a matrix or a list with values. In case of a (multi dimensional) array or matrix, the sum of all elements will be calculated.
		 */
		prod(): IMathJsChain;

		/**
                 * Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned.
		 * Supported types of sequence values are: Number, BigNumber, Unit Supported types of probability are: Number, BigNumber
                 *
		 * In case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.
		 */
		quantileSeq(prob: Number|BigNumber|MathArray, sorted?: boolean): IMathJsChain;

		/**
                 * Compute the standard deviation of a matrix or a list with values. The standard deviations is defined as the square root of the
                 * variance: std(A) = sqrt(var(A)). In case of a (multi dimensional) array or matrix, the standard deviation over all elements will
		 * be calculated.
                 *
                 * Optionally, the type of normalization can be specified as second parameter. The parameter normalization can be one of the following
		 * values:
                 *
		 * 'unbiased' (default) The sum of squared errors is divided by (n - 1)
		 * 'uncorrected' The sum of squared errors is divided by n
		 * 'biased' The sum of squared errors is divided by (n + 1)
		 */
		std(normalization?: string): IMathJsChain;

		/**
		 * Compute the sum of a matrix or a list with values. In case of a (multi dimensional) array or matrix, the sum of all elements will be calculated.
		 */
		sum(): IMathJsChain;

		/**
                 * Compute the variance of a matrix or a list with values. In case of a (multi dimensional) array or matrix, the variance over all
		 * elements will be calculated.
                 *
                 * Optionally, the type of normalization can be specified as second parameter. The parameter normalization can be one of the
		 * following values:
                 *
		 * 'unbiased' (default) The sum of squared errors is divided by (n - 1)
		 * 'uncorrected' The sum of squared errors is divided by n
		 * 'biased' The sum of squared errors is divided by (n + 1)
                 * Note that older browser may not like the variable name var. In that case, the function can be called as math['var'](...)
		 * instead of math.var(...).
		 */
		var(normalization?: string): IMathJsChain;

		/**
		 * Calculate the inverse cosine of a value. For matrices, the function is evaluated element wise.
		 */
		acos(): IMathJsChain;

		/**
		 * Calculate the hyperbolic arccos of a value, defined as acosh(x) = ln(sqrt(x^2 - 1) + x).
		 * For matrices, the function is evaluated element wise.
		 */
		acosh(): IMathJsChain;

		/**
		 * Calculate the inverse cotangent of a value. For matrices, the function is evaluated element wise.
		 */
		acot(): IMathJsChain;

		/**
		 * Calculate the hyperbolic arccotangent of a value, defined as acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2.
		 * For matrices, the function is evaluated element wise.
		 */
		acoth(): IMathJsChain;

		/**
		 * Calculate the inverse cosecant of a value. For matrices, the function is evaluated element wise.
		 */
		acsc(): IMathJsChain;

		/**
		 * Calculate the hyperbolic arccosecant of a value, defined as acsch(x) = ln(1/x + sqrt(1/x^2 + 1)).
		 * For matrices, the function is evaluated element wise.
		 */
		acsch(): IMathJsChain;

		/**
		 * Calculate the inverse secant of a value. For matrices, the function is evaluated element wise.
		 */
		asec(): IMathJsChain;

		/**
		 * Calculate the hyperbolic arcsecant of a value, defined as asech(x) = ln(sqrt(1/x^2 - 1) + 1/x). For matrices, the function is evaluated element wise.
		 */
		asech(): IMathJsChain;

                /**
		 * Calculate the inverse sine of a value. For matrices, the function is evaluated element wise.
		 */
		asin(): IMathJsChain;

		/**
		 * Calculate the hyperbolic arcsine of a value, defined as asinh(x) = ln(x + sqrt(x^2 + 1)). For matrices, the function is evaluated element wise.
		 */
		asinh(): IMathJsChain;

		/**
		 * Calculate the inverse tangent of a value. For matrices, the function is evaluated element wise.
		 */
		atan(): IMathJsChain;

		/**
                 * Calculate the inverse tangent function with two arguments, y/x. By providing two arguments, the right quadrant of the
		 * computed angle can be determined.
                 *
		 * For matrices, the function is evaluated element wise.
		 */
		atan2(x: number): IMathJsChain;
		atan2(x: MathArray|Matrix): IMathJsChain;

		/**
		 * Calculate the hyperbolic arctangent of a value, defined as atanh(x) = ln((1 + x)/(1 - x)) / 2.
		 * For matrices, the function is evaluated element wise.
		 */
		atanh(): IMathJsChain;

		/**
		 * Calculate the cosine of a value. For matrices, the function is evaluated element wise.
		 */
		asin(): IMathJsChain;

		/**
		 * Calculate the hyperbolic cosine of a value, defined as cosh(x) = 1/2 * (exp(x) + exp(-x)). For matrices, the function is evaluated element wise.
		 */
		cosh(): IMathJsChain;

		/**
		 * Calculate the cotangent of a value. cot(x) is defined as 1 / tan(x). For matrices, the function is evaluated element wise.
		 */
		cot(): IMathJsChain;

		/**
		 * Calculate the hyperbolic cotangent of a value, defined as coth(x) = 1 / tanh(x). For matrices, the function is evaluated element wise.
		 */
		coth(): IMathJsChain;

		/**
		 * Calculate the cosecant of a value, defined as csc(x) = 1/sin(x). For matrices, the function is evaluated element wise.
		 */
		csc(): IMathJsChain;

		/**
		 * Calculate the hyperbolic cosecant of a value, defined as csch(x) = 1 / sinh(x). For matrices, the function is evaluated element wise.
		 */
		csch(): IMathJsChain;

		/**
		 * Calculate the secant of a value, defined as sec(x) = 1/cos(x). For matrices, the function is evaluated element wise.
		 */
		sec(): IMathJsChain;

		/**
		 * Calculate the hyperbolic secant of a value, defined as sech(x) = 1 / cosh(x). For matrices, the function is evaluated element wise.
		 */
		sech(): IMathJsChain;

		/**
		 * Calculate the sine of a value. For matrices, the function is evaluated element wise.
		 */
		sin(): IMathJsChain;

		/**
		 * Calculate the hyperbolic sine of a value, defined as sinh(x) = 1/2 * (exp(x) - exp(-x)). For matrices, the function is evaluated element wise.
		 */
		sinh(): IMathJsChain;

		/**
		 * Calculate the tangent of a value. tan(x) is equal to sin(x) / cos(x). For matrices, the function is evaluated element wise.
		 */
		tan(): IMathJsChain;

		/**
		 * Calculate the hyperbolic tangent of a value, defined as tanh(x) = (exp(2 * x) - 1) / (exp(2 * x) + 1). For matrices, the function is evaluated element wise.
		 */
		tanh(): IMathJsChain;

		/**
		 * Change the unit of a value. For matrices, the function is evaluated element wise.
		 * @param x The unit to be converted.
		 * @param unit New unit. Can be a string like "cm" or a unit without value.
		 */
		to(unit: Unit|string): IMathJsChain;

		/**
		 * Clone an object.
		 */
		clone(): IMathJsChain;

		/**
		 * Filter the items in an array or one dimensional matrix.
		 * @param x A one dimensional matrix or array to filter
                 * @param test
		 */
		filter(test: RegExp|((item: any)=>boolean)): IMathJsChain;

		/**
		 * Format a value of any type into a string.
		 */
		format(options?: IFormatOptions|number|((item: any)=>string)): IMathJsChain;

		/**
		 * Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.
		 * @param callback The callback method is invoked with three parameters: the value of the element, the index of the element, and the matrix being traversed.
		 */
		map(callback: (item: any)=>any): IMathJsChain;

		/**
		 * Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.
		 * @param k The kth smallest value to be retrieved; zero-based index
		 * @param compare  An optional comparator function. The function is called as compare(a, b), and must return 1 when a > b, -1 when a < b, and 0 when a == b. Default value: 'asc'.
		 * @returns Returns the kth lowest value.
		 */
		partitionSelect(k: number, compare?: string|((a: any, b: any)=>number)): IMathJsChain;

		/**
		 * Sort the items in a matrix.
		 * @param compare  An optional comparator function. The function is called as compare(a, b), and must return 1 when a > b, -1 when a < b, and 0 when a == b. Default value: 'asc'.
		 */
		sort(compare?: string|((a: any, b: any)=>number)): IMathJsChain;

		done(): any;
		valueOf(): any;
		toString(): string;
	}
}

declare module 'mathjs'{
	export = math;
}

