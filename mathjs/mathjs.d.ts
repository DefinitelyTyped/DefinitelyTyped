// Type definitions for mathjs
// Project: http://mathjs.org/
// Definitions by: Ilya Shestakov <https://github.com/siavol/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var math: mathjs.IMathJsStatic;

declare module mathjs {
	
	type MathArray = Array<Number>;
	type MathType = number|BigNumber|Fraction|Complex|Unit|MathArray|Matrix;
	
	export interface IMathJsStatic {
		/**
		 * Solves the linear equation system by forwards substitution. Matrix must be a lower triangular matrix.
		 * @param L A N x N matrix or array (L)
		 * @param b A column vector with the b values
		 * @returns A column vector with the linear system solution (x)
		 */
		lsolve(L: Matrix|MathArray, b: Matrix|MathArray): DenseMatrix|MathArray;
		
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
		lusolve(A: Matrix|MathArray|Number, b: Matrix|MathArray): DenseMatrix|MathArray;
		
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
		slu(A: SparseMatrix, order: Number, threshold: Number): any;
		
		/**
		 * Solves the linear equation system by backward substitution. Matrix must be an upper triangular matrix. U * x = b
		 * @param U A N x N matrix or array (U)
		 * @param b A column vector with the b values
		 * @returns A column vector with the linear system solution (x)
		 */
		usolve(U: Matrix|MathArray, b:Matrix|MathArray): DenseMatrix|MathArray;
		
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
		chain(value?): IMathJsChain;
		
		/**
		 * Create a complex value or convert a value to a complex value.
		 */
		complex(): Complex;
		complex(re, im): Complex;
		complex(complex: Complex): Complex;
		complex(arg: string): Complex;
		complex(array: MathArray): Complex;
		complex(arg): Complex;
		
		/**
		 * Create a fraction convert a value to a fraction.
		 */
		fraction(numerator: number|string|MathArray|Matrix, denominator: number|string|MathArray|Matrix): Fraction|MathArray|Matrix;
		
		
	}
	
	export interface Matrix {
		
	}
	
	export interface DenseMatrix {
		
	}
	
	export interface SparseMatrix {
		
	}
	
	export interface BigNumber {
		
	}
	
	export interface Fraction {
		
	}
	
	export interface Complex {
		
	}
	
	export interface Unit {
		
	}
	
	export interface IMathJsChain {
		
		
		done(): any;
		valueOf(): any;
		toString(): string;
	}
}