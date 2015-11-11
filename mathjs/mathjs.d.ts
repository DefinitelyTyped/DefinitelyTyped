// Type definitions for mathjs
// Project: http://mathjs.org/
// Definitions by: Ilya Shestakov <https://github.com/siavol/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var math: mathjs.IMathJsStatic;

declare module mathjs {
	
	type MathArray = Array<Number>;
	type MathType = number|BigNumber|Fraction|Complex|Unit|MathArray|Matrix;
	type MathExpression = string|string[]|MathArray|Matrix;
	
	export interface IMathJsStatic {
		
		e: number;
		pi: number;
		
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
		
		/**
		 * Create a fraction convert a value to a fraction.
		 */
		fraction(numerator: number|string|MathArray|Matrix, denominator: number|string|MathArray|Matrix): Fraction|MathArray|Matrix;
		
		/**
		 * Create an index. An Index can store ranges having start, step, and end for multiple dimensions. Matrix.get, Matrix.set, and math.subset accept an Index as input.
		 */
		index(...ranges: any[]): Index;
		
		/**
		 * Create a Matrix. The function creates a new math.type.Matrix object from an Array. A Matrix has utility functions 
		 * to manipulate the data in the matrix, like getting the size and getting or setting values in the matrix. Supported 
		 * storage formats are 'dense' and 'sparse'.
		 */
		matrix(format?: string): Matrix;
		matrix(data: MathArray|Matrix, format?: string, dataType?:string): Matrix;
		
		/**
		 * Create a number or convert a string, boolean, or unit to a number. When value is a matrix, all elements will be converted to number.
		 */
		number(value?: string|number|boolean|MathArray|Matrix|Unit): number|MathArray|Matrix;
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
		unit(unit: string): Unit|MathArray|Matrix;
		unit(value: number, unit: string): Unit|MathArray|Matrix;
		
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
		cross(x: MathArray|Matrix, y: MathArray|Matrix): MathArray|Matrix;
		
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
		diag(X: MathArray|Matrix, format?: string): MathArray|Matrix;
		diag(X: MathArray|Matrix, k: number|BigNumber, format?: string): MathArray|Matrix;
		
		/**
		 * Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] 
		 * is defined as:
		 * dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn
		 */
		dot(x: MathArray|Matrix, y: MathArray|Matrix): number;
		
		/**
		 * Create a 2-dimensional identity matrix with size m x n or n x n. The matrix has ones on the diagonal and zeros elsewhere.
		 */
		eye(n: number, format?: string): MathArray|Matrix|number;
		eye(m: number, n: number, format?: string): MathArray|Matrix|number;
		eye(size: number[], format?: string): MathArray|Matrix|number;
		
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
		ones(n: number, format?: string): MathArray|Matrix|number;
		ones(m: number, n: number, format?: string): MathArray|Matrix|number;
		ones(size: number[], format?: string): MathArray|Matrix|number;
		
		/**
		 * Create an array from a range. By default, the range end is excluded. This can be customized by providing an extra parameter includeEnd.
		 * @param str A string 'start:end' or 'start:step:end'
		 * @param start Start of the range
		 * @param end End of the range, excluded by default, included when parameter includeEnd=true
		 * @param step Step size. Default value is 1.
		 * @returns Parameters describing the ranges start, end, and optional step.
		 */
		range(str: string, includeEnd?: boolean): MathArray|Matrix;
		range(start: number|BigNumber, end:number|BigNumber, includeEnd?:boolean): MathArray|Matrix;
		range(start: number|BigNumber, end: number|BigNumber, step: number|BigNumber, includeEnd?:boolean): MathArray|Matrix;
		
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
		zeros(n: number, format?: string): MathArray|Matrix|number;
		zeros(m: number, n: number, format?: string): MathArray|Matrix|number;
		zeros(size: number[], format?: string): MathArray|Matrix|number;
	
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
		
		
	}
	
	export interface Matrix {
		
	}
	
	export interface BigNumber {
		
	}
	
	export interface Fraction {
		
	}
	
	export interface Complex {
		
	}
	
	export interface Unit {
		
	}
	
	export interface Index {
		
	}
	
	export interface EvalFunction {
		eval(): any;
	}
	
	export interface MathNode {
		compile(): EvalFunction;
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
	
	export interface Help {
		toString(): string;
		toJSON(): string;
	}	
	
	export interface IMathJsChain {		
		
		done(): any;
		valueOf(): any;
		toString(): string;
	}
}