// Type definitions for mathjs 6.0
// Project: https://mathjs.org/
// Definitions by: Ilya Shestakov <https://github.com/siavol>,
//                  Andy Patterson <https://github.com/andnp>,
//                  Brad Besserman <https://github.com/bradbesserman>
//                  Pawel Krol <https://github.com/pawkrol>
//                  Charlee Li <https://github.com/charlee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Decimal } from "decimal.js";

declare const math: math.MathJsStatic;
export as namespace math;
export = math;

type NoLiteralType<T> =
    T extends number ? number :
    T extends string ? string :
    T extends boolean ? boolean :
    T;
declare namespace math {
    type MathArray = number[] | number[][];
    type MathType =
        | number
        | BigNumber
        | Fraction
        | Complex
        | Unit
        | MathArray
        | Matrix;
    type MathExpression = string | string[] | MathArray | Matrix;

    type FactoryFunction<T> = (scope: any) => T;

    // FactoryFunctionMap can be nested; all nested objects will be flattened
    interface FactoryFunctionMap {
        [key: string]: FactoryFunction<any> | FactoryFunctionMap;
    }

    type MathJsFunctionName = keyof MathJsStatic;

    interface MathJsStatic extends FactoryDependencies {
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

        expression: MathNode;
        json: MathJsJson;

        /*************************************************************************
         * Core functions
         ************************************************************************/

        /**
         * Set configuration options for math.js, and get current options. Will
         * emit a ‘config’ event, with arguments (curr, prev, changes).
         * @param options Available options: {number} epsilon Minimum relative
         * difference between two compared values, used by all comparison
         * functions. {string} matrix A string ‘Matrix’ (default) or ‘Array’.
         * {string} number A string ‘number’ (default), ‘BigNumber’, or
         * ‘Fraction’ {number} precision The number of significant digits for
         * BigNumbers. Not applicable for Numbers. {string} parenthesis How to
         * display parentheses in LaTeX and string output. {string} randomSeed
         * Random seed for seeded pseudo random number generator. Set to null to
         * randomly seed.
         * @returns Returns the current configuration
         */
        config: (options: ConfigOptions) => ConfigOptions;
        /**
         * Create a typed-function which checks the types of the arguments and
         * can match them against multiple provided signatures. The
         * typed-function automatically converts inputs in order to find a
         * matching signature. Typed functions throw informative errors in case
         * of wrong input arguments.
         * @param name Optional name for the typed-function
         * @param signatures Object with one or multiple function signatures
         * @returns The created typed-function.
         */
        typed: (name: string, signatures: Record<string, (...args: any[]) => any>) => ((...args: any[]) => any);

        /*************************************************************************
         * Construction functions
         ************************************************************************/

        /**
         * Create a BigNumber, which can store numbers with arbitrary precision.
         * When a matrix is provided, all elements will be converted to
         * BigNumber.
         * @param x Value for the big number, 0 by default.
         * @returns The created bignumber
         */
        bignumber(
            x?:
                | number
                | string
                | Fraction
                | BigNumber
                | MathArray
                | Matrix
                | boolean
                | Fraction
                | null
        ): BigNumber;

        /**
         * Create a boolean or convert a string or number to a boolean. In case
         * of a number, true is returned for non-zero numbers, and false in case
         * of zero. Strings can be 'true' or 'false', or can contain a number.
         * When value is a matrix, all elements will be converted to boolean.
         * @param x A value of any type
         * @returns The boolean value
         */
        boolean(
            x: string | number | boolean | MathArray | Matrix | null
        ): boolean | MathArray | Matrix;

        /**
         * Wrap any value in a chain, allowing to perform chained operations on
         * the value. All methods available in the math.js library can be called
         * upon the chain, and then will be evaluated with the value itself as
         * first argument. The chain can be closed by executing chain.done(),
         * which returns the final value. The chain has a number of special
         * functions: done() Finalize the chain and return the chain's value.
         * valueOf() The same as done() toString() Executes math.format() onto
         * the chain's value, returning a string representation of the value.
         * @param value A value of any type on which to start a chained
         * operation.
         * @returns The created chain
         */
        chain(value?: any): MathJsChain;

        /**
         * Create a complex value or convert a value to a complex value.
         * @param args Arguments specifying the real and imaginary part of the
         * complex number
         * @returns Returns a complex value
         */
        complex(arg?: Complex | string | PolarCoordinates): Complex;
        complex(arg?: MathArray | Matrix): MathArray | Matrix;
        /**
         * @param re Argument specifying the real part of the complex number
         * @param im Argument specifying the imaginary part of the complex
         * number
         * @returns Returns a complex value
         */
        complex(re: number, im: number): Complex;

        /**
         * Create a user-defined unit and register it with the Unit type.
         * @param name The name of the new unit. Must be unique. Example: ‘knot’
         * @param definition Definition of the unit in terms of existing units.
         * For example, ‘0.514444444 m / s’.
         * @param options (optional) An object containing any of the following
         * properties:</br>- prefixes {string} “none”, “short”, “long”,
         * “binary_short”, or “binary_long”. The default is “none”.</br>-
         * aliases {Array} Array of strings. Example: [‘knots’, ‘kt’,
         * ‘kts’]</br>- offset {Numeric} An offset to apply when converting from
         * the unit. For example, the offset for celsius is 273.15. Default is
         * 0.
         * @returns The new unit
         */
        createUnit(
            name: string,
            definition?: string | UnitDefinition,
            options?: CreateUnitOptions
        ): Unit;
        /**
         * Create a user-defined unit and register it with the Unit type.
         * @param units Definition of the unit
         * @param options
         * @returns The new unit
         */
        createUnit(
            units: Record<string, string | UnitDefinition>,
            options?: CreateUnitOptions
        ): Unit;

        /**
         * Create a fraction convert a value to a fraction.
         * @param args Arguments specifying the numerator and denominator of the
         * fraction
         * @returns Returns a fraction
         */
        fraction(
            args: Fraction | MathArray | Matrix
        ): Fraction | MathArray | Matrix;
        /**
         * @param numerator Argument specifying the numerator of the fraction
         * @param denominator Argument specifying the denominator of the
         * fraction
         * @returns Returns a fraction
         */
        fraction(
            numerator: number | string | MathArray | Matrix,
            denominator?: number | string | MathArray | Matrix
        ): Fraction | MathArray | Matrix;

        /**
         * Create an index. An Index can store ranges having start, step, and
         * end for multiple dimensions. Matrix.get, Matrix.set, and math.subset
         * accept an Index as input.
         * @param ranges Zero or more ranges or numbers.
         * @returns Returns the created index
         */
        index(...ranges: any[]): Index;

        /**
         * Create a Matrix. The function creates a new math.type.Matrix object
         * from an Array. A Matrix has utility functions to manipulate the data
         * in the matrix, like getting the size and getting or setting values in
         * the matrix. Supported storage formats are 'dense' and 'sparse'.
         * @param format The Matrix storage format
         * @returns The created Matrix
         */
        matrix(format?: "sparse" | "dense"): Matrix;
        /**
         * @param data A multi dimensional array
         * @param format The Matrix storage format
         * @param dataType The Matrix data type
         * @returns The created Matrix
         */
        matrix(
            data: MathArray | Matrix,
            format?: "sparse" | "dense",
            dataType?: string
        ): Matrix;

        /**
         * Create a number or convert a string, boolean, or unit to a number.
         * When value is a matrix, all elements will be converted to number.
         * @param value Value to be converted
         * @returns The created number
         */
        number(
            value?:
                | string
                | number
                | BigNumber
                | Fraction
                | boolean
                | MathArray
                | Matrix
                | Unit
                | null
        ): number | MathArray | Matrix;
        /**
         * @param value Value to be converted
         * @param valuelessUnit A valueless unit, used to convert a unit to a
         * number
         * @returns The created number
         */
        number(unit: Unit, valuelessUnit: Unit | string): number;

        /**
         * Create a Sparse Matrix. The function creates a new math.type.Matrix
         * object from an Array. A Matrix has utility functions to manipulate
         * the data in the matrix, like getting the size and getting or setting
         * values in the matrix.
         * @param data A two dimensional array
         * @param dataType Sparse Matrix data type
         * @returns The created matrix
         */
        sparse(data?: MathArray | Matrix, dataType?: string): Matrix;

        /**
         * Split a unit in an array of units whose sum is equal to the original
         * unit.
         * @param unit A unit to be split
         * @param parts An array of strings or valueless units
         * @returns An array of units
         */
        splitUnit(unit: Unit, parts: Unit[]): Unit[];

        /**
         * Create a string or convert any object into a string. Elements of
         * Arrays and Matrices are processed element wise.
         * @param value A value to convert to a string
         * @returns The created string
         */
        string(
            value: MathType | null
        ): string | MathArray | Matrix;

        /**
         * Create a unit. Depending on the passed arguments, the function will
         * create and return a new math.type.Unit object. When a matrix is
         * provided, all elements will be converted to units.
         * @param unit The unit to be created
         * @returns The created unit
         */
        unit(unit: string): Unit;
        /**
         * @param value The value of the unit to be created
         * @param unit The unit to be created
         * @returns The created unit
         */
        unit(value: number | MathArray | Matrix, unit: string): Unit;

        /*************************************************************************
         * Expression functions
         ************************************************************************/

        /**
         * Parse and compile an expression. Returns a an object with a function
         * evaluate([scope]) to evaluate the compiled expression.
         * @param expr The expression to be compiled
         * @returns An object with the compiled expression
         */
        compile(expr: MathExpression): EvalFunction;
        /**
         * @param exprs The expressions to be compiled
         * @returns An array of objects with the compiled expressions
         */
        compile(exprs: MathExpression[]): EvalFunction[];

        /**
         * Evaluate an expression.
         * @param expr The expression to be evaluated
         * @param scope Scope to read/write variables
         * @returns The result of the expression
         */
        evaluate(
            expr: MathExpression | MathExpression[] | Matrix,
            scope?: object
        ): any;

        /**
         * Retrieve help on a function or data type. Help files are retrieved
         * from the documentation in math.expression.docs.
         * @param search A function or function name for which to get help
         * @returns A help object
         */
        help(search: () => any): Help;

        /**
         * Parse an expression. Returns a node tree, which can be evaluated by
         * invoking node.evaluate();
         * @param expr Expression to be parsed
         * @param options Available options: nodes - a set of custome nodes
         * @returns A node
         */
        parse(expr: MathExpression, options?: any): MathNode;
        /**
         * @param exprs Expressions to be parsed
         * @param options Available options: nodes - a set of custome nodes
         * @returns An arry of nodes
         */
        parse(exprs: MathExpression[], options?: any): MathNode[];

        /**
         * Create a parser. The function creates a new math.expression.Parser
         * object.
         * @returns A Parser object
         */
        parser(): Parser;

        /*************************************************************************
         * Algebra functions
         ************************************************************************/
        /**
         * @param expr The expression to differentiate
         * @param variable The variable over which to differentiate
         * @param options There is one option available, simplify, which is true
         * by default. When false, output will not be simplified.
         * @returns The derivative of expr
         */
        derivative(
            expr: MathNode | string,
            variable: MathNode | string,
            options?: {simplify: boolean}
        ): MathNode;

        /**
         * Solves the linear equation system by forwards substitution. Matrix
         * must be a lower triangular matrix.
         * @param L A N x N matrix or array (L)
         * @param b A column vector with the b values
         * @returns A column vector with the linear system solution (x)
         */
        lsolve(
            L: Matrix | MathArray,
            b: Matrix | MathArray
        ): Matrix | MathArray;

        /**
         * Calculate the Matrix LU decomposition with partial pivoting. Matrix A
         * is decomposed in two matrices (L, U) and a row permutation vector p
         * where A[p,:] = L * U
         * @param A A two dimensional matrix or array for which to get the LUP
         * decomposition.
         * @returns The lower triangular matrix, the upper triangular matrix and
         * the permutation matrix.
         */
        lup(
            A?: Matrix | MathArray
        ): { L: MathArray | Matrix; U: MathArray | Matrix; P: number[] };

        /**
         * Solves the linear system A * x = b where A is an [n x n] matrix and b
         * is a [n] column vector.
         * @param A Invertible Matrix or the Matrix LU decomposition
         * @param b Column Vector
         * @param order The Symbolic Ordering and Analysis order, see slu for
         * details. Matrix must be a SparseMatrix
         * @param threshold Partial pivoting threshold (1 for partial pivoting),
         * see slu for details. Matrix must be a SparseMatrix.
         * @returns Column vector with the solution to the linear system A * x =
         * b
         */
        lusolve(
            A: Matrix | MathArray | number,
            b: Matrix | MathArray,
            order?: number,
            threshold?: number
        ): Matrix | MathArray;

        /**
         * Calculate the Matrix QR decomposition. Matrix A is decomposed in two
         * matrices (Q, R) where Q is an orthogonal matrix and R is an upper
         * triangular matrix.
         * @param A A two dimensional matrix or array for which to get the QR
         * decomposition.
         * @returns Q: the orthogonal matrix and R: the upper triangular matrix
         */
        qr(
            A: Matrix | MathArray
        ): { Q: MathArray | Matrix; R: MathArray | Matrix };

        /**
         * Transform a rationalizable expression in a rational fraction. If
         * rational fraction is one variable polynomial then converts the
         * numerator and denominator in canonical form, with decreasing
         * exponents, returning the coefficients of numerator.
         * @param expr The expression to check if is a polynomial expression
         * @param optional scope of expression or true for already evaluated
         * rational expression at input
         * @param detailed  optional True if return an object, false if return
         * expression node (default)
         * @returns The rational polynomial of expr
         */
        rationalize(expr: MathNode | string, optional?: object | boolean, detailed?: true): { expression: MathNode | string, variables: string[], coefficients: MathType[] };
        rationalize(expr: MathNode | string, optional?: object | boolean, detailed?: false): MathNode;

        /**
         * Simplify an expression tree.
         * @param expr The expression to be simplified
         * @param rules A list of rules are applied to an expression, repeating
         * over the list until no further changes are made. It’s possible to
         * pass a custom set of rules to the function as second argument. A rule
         * can be specified as an object, string, or function.
         * @param scope Scope to variables
         * @returns Returns the simplified form of expr
         */
        simplify(
            expr: MathNode | string,
            rules?: Array<({ l: string; r: string } | string | ((node: MathNode) => MathNode))>,
            scope?: object
        ): MathNode;

        /**
         * Calculate the Sparse Matrix LU decomposition with full pivoting.
         * Sparse Matrix A is decomposed in two matrices (L, U) and two
         * permutation vectors (pinv, q) where P * A * Q = L * U
         * @param A A two dimensional sparse matrix for which to get the LU
         * decomposition.
         * @param order The Symbolic Ordering and Analysis order: 0 - Natural
         * ordering, no permutation vector q is returned 1 - Matrix must be
         * square, symbolic ordering and analisis is performed on M = A + A' 2 -
         * Symbolic ordering and analysis is performed on M = A' * A. Dense
         * columns from A' are dropped, A recreated from A'. This is appropriate
         * for LU factorization of non-symmetric matrices. 3 - Symbolic ordering
         * and analysis is performed on M = A' * A. This is best used for LU
         * factorization is matrix M has no dense rows. A dense row is a row
         * with more than 10*sqr(columns) entries.
         * @param threshold Partial pivoting threshold (1 for partial pivoting)
         * @returns The lower triangular matrix, the upper triangular matrix and
         * the permutation vectors.
         */
        slu(A: Matrix, order: number, threshold: number): object;

        /**
         * Solves the linear equation system by backward substitution. Matrix
         * must be an upper triangular matrix. U * x = b
         * @param U A N x N matrix or array (U)
         * @param b A column vector with the b values
         * @returns A column vector with the linear system solution (x)
         */
        usolve(
            U: Matrix | MathArray,
            b: Matrix | MathArray
        ): Matrix | MathArray;

        /*************************************************************************
         * Arithmetic functions
         ************************************************************************/

        /**
         * Calculate the absolute value of a number. For matrices, the function
         * is evaluated element wise.
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
         * Add two values, x + y. For matrices, the function is evaluated
         * element wise.
         * @param x First value to add
         * @param y Second value to add
         * @returns Sum of x and y
         */
        add(x: MathType, y: MathType): MathType;

        /**
         * Calculate the cubic root of a value. For matrices, the function is
         * evaluated element wise.
         * @param x Value for which to calculate the cubic root.
         * @param allRoots Optional, false by default. Only applicable when x is
         * a number or complex number. If true, all complex roots are returned,
         * if false (default) the principal root is returned.
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
         * Round a value towards plus infinity If x is complex, both real and
         * imaginary part are rounded towards plus infinity. For matrices, the
         * function is evaluated element wise.
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
         * Compute the cube of a value, x * x * x. For matrices, the function is
         * evaluated element wise.
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
         * Divide two values, x / y. To divide matrices, x is multiplied with
         * the inverse of y: x * inv(y).
         * @param x Numerator
         * @param y Denominator
         * @returns Quotient, x / y
         */
        divide(x: Unit, y: Unit): Unit;
        divide(x: number, y: number): number;
        divide(x: MathType, y: MathType): MathType;

        /**
         * Divide two matrices element wise. The function accepts both matrices
         * and scalar values.
         * @param x Numerator
         * @param y Denominator
         * @returns Quotient, x ./ y
         */
        dotDivide(x: MathType, y: MathType): MathType;

        /**
         * Multiply two matrices element wise. The function accepts both
         * matrices and scalar values.
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
         * Calculate the exponent of a value. For matrices, the function is
         * evaluated element wise.
         * @param x A number or matrix to exponentiate
         * @returns Exponent of x
         */
        exp(x: number): number;
        exp(x: BigNumber): BigNumber;
        exp(x: Complex): Complex;
        exp(x: MathArray): MathArray;
        exp(x: Matrix): Matrix;

        /**
         * Calculate the value of subtracting 1 from the exponential value. For
         * matrices, the function is evaluated element wise.
         * @param x A number or matrix to apply expm1
         * @returns Exponent of x
         */
        expm1(x: number): number;
        expm1(x: BigNumber): BigNumber;
        expm1(x: Complex): Complex;
        expm1(x: MathArray): MathArray;
        expm1(x: Matrix): Matrix;

        /**
         * Round a value towards zero. For matrices, the function is evaluated
         * element wise.
         * @param x Number to be rounded
         * @returns Rounded value
         */
        fix(x: number): number;
        fix(x: BigNumber): BigNumber;
        fix(x: Fraction): Fraction;
        fix(x: Complex): Complex;
        fix(x: MathArray): MathArray;
        fix(x: Matrix): Matrix;

        /**
         * Round a value towards minus infinity. For matrices, the function is
         * evaluated element wise.
         * @param Number to be rounded
         * @returns Rounded value
         */
        floor(x: number): number;
        floor(x: BigNumber): BigNumber;
        floor(x: Fraction): Fraction;
        floor(x: Complex): Complex;
        floor(x: MathArray): MathArray;
        floor(x: Matrix): Matrix;

        /**
         * Calculate the greatest common divisor for two or more values or
         * arrays. For matrices, the function is evaluated element wise.
         * @param args Two or more integer numbers
         * @returns The greatest common divisor
         */
        gcd(...args: number[]): number;
        gcd(...args: BigNumber[]): BigNumber;
        gcd(...args: Fraction[]): Fraction;
        gcd(...args: MathArray[]): MathArray;
        gcd(...args: Matrix[]): Matrix;

        /**
         * Calculate the hypotenusa of a list with values. The hypotenusa is
         * defined as: hypot(a, b, c, ...) = sqrt(a^2 + b^2 + c^2 + ...) For
         * matrix input, the hypotenusa is calculated for all values in the
         * matrix.
         * @param args A list with numeric values or an Array or Matrix. Matrix
         * and Array input is flattened and returns a single number for the
         * whole matrix.
         * @returns Returns the hypothenuse of the input values.
         */
        hypot(...args: number[]): number;
        hypot(...args: BigNumber[]): BigNumber;

        /**
         * Calculate the least common multiple for two or more values or arrays.
         * lcm is defined as: lcm(a, b) = abs(a * b) / gcd(a, b) For matrices,
         * the function is evaluated element wise.
         * @param a An integer number
         * @param b An integer number
         * @returns The least common multiple
         */
        lcm(a: number, b: number): number;
        lcm(a: BigNumber, b: BigNumber): BigNumber;
        lcm(a: MathArray, b: MathArray): MathArray;
        lcm(a: Matrix, b: Matrix): Matrix;

        /**
         * Calculate the logarithm of a value. For matrices, the function is
         * evaluated element wise.
         * @param x Value for which to calculate the logarithm.
         * @param base Optional base for the logarithm. If not provided, the
         * natural logarithm of x is calculated. Default value: e.
         * @returns Returns the logarithm of x
         */
        log<T extends number | BigNumber | Complex | MathArray | Matrix>(
            x: T,
            base?: number | BigNumber | Complex
        ): NoLiteralType<T>;

        /**
         * Calculate the 10-base of a value. This is the same as calculating
         * log(x, 10). For matrices, the function is evaluated element wise.
         * @param x Value for which to calculate the logarithm.
         * @returns Returns the 10-base logarithm of x
         */
        log10(x: number): number;
        log10(x: BigNumber): BigNumber;
        log10(x: Complex): Complex;
        log10(x: MathArray): MathArray;
        log10(x: Matrix): Matrix;

        /**
         * Calculate the logarithm of a value+1. For matrices, the function is
         * evaluated element wise.
         * @param x Value for which to calculate the logarithm.
         * @returns Returns the logarithm of x+1
         */
        log1p(x: number, base?: number | BigNumber | Complex): number;
        log1p(x: BigNumber, base?: number | BigNumber | Complex): BigNumber;
        log1p(x: Complex, base?: number | BigNumber | Complex): Complex;
        log1p(x: MathArray, base?: number | BigNumber | Complex): MathArray;
        log1p(x: Matrix, base?: number | BigNumber | Complex): Matrix;

        /**
         * Calculate the 2-base of a value. This is the same as calculating
         * log(x, 2). For matrices, the function is evaluated element wise.
         * @param x Value for which to calculate the logarithm.
         * @returns Returns the 2-base logarithm of x
         */
        log2(x: number): number;
        log2(x: BigNumber): BigNumber;
        log2(x: Complex): Complex;
        log2(x: MathArray): MathArray;
        log2(x: Matrix): Matrix;

        /**
         * Calculates the modulus, the remainder of an integer division. For
         * matrices, the function is evaluated element wise. The modulus is
         * defined as: x - y * floor(x / y)
         * @see http://en.wikipedia.org/wiki/Modulo_operation.
         * @param x Dividend
         * @param y Divisor
         * @returns Returns the remainder of x divided by y
         */
        mod<T extends number | BigNumber | Fraction | MathArray | Matrix>(
            x: T,
            y: number | BigNumber | Fraction | MathArray | Matrix
        ): NoLiteralType<T>;

        /**
         * Multiply two values, x * y. The result is squeezed. For matrices, the
         * matrix product is calculated.
         * @param x The first value to multiply
         * @param y The second value to multiply
         * @returns Multiplication of x and y
         */
        multiply<T extends Matrix | MathArray>(x: T, y: MathType): T;
        multiply(x: Unit, y: Unit): Unit;
        multiply(x: number, y: number): number;
        multiply(x: MathType, y: MathType): MathType;

        /**
         * Calculate the norm of a number, vector or matrix. The second
         * parameter p is optional. If not provided, it defaults to 2.
         * @param x Value for which to calculate the norm
         * @param p Vector space. Supported numbers include Infinity and
         * -Infinity. Supported strings are: 'inf', '-inf', and 'fro' (The
         * Frobenius norm) Default value: 2.
         * @returns the p-norm
         */
        norm(
            x: number | BigNumber | Complex | MathArray | Matrix,
            p?: number | BigNumber | string
        ): number | BigNumber;

        /**
         * Calculate the nth root of a value. The principal nth root of a
         * positive real number A, is the positive real solution of the equation
         * x^root = A For matrices, the function is evaluated element wise.
         * @param a Value for which to calculate the nth root
         * @param root The root. Default value: 2.
         * @return The nth root of a
         */
        nthRoot(
            a: number | BigNumber | MathArray | Matrix | Complex,
            root?: number | BigNumber
        ): number | Complex | MathArray | Matrix;

        /**
         * Calculates the power of x to y, x ^ y. Matrix exponentiation is
         * supported for square matrices x, and positive integer exponents y.
         * @param x The base
         * @param y The exponent
         * @returns x to the power y
         */
        pow(x: MathType, y: number | BigNumber | Complex): MathType;

        /**
         * Round a value towards the nearest integer. For matrices, the function
         * is evaluated element wise.
         * @param x Number to be rounded
         * @param n Number of decimals Default value: 0.
         * @returns Rounded value of x
         */
        round<T extends number | BigNumber | Fraction | Complex | MathArray | Matrix>(
            x: T,
            n?: number | BigNumber | MathArray
        ): NoLiteralType<T>;

        /**
         * Compute the sign of a value. The sign of a value x is: 1 when x > 1
         * -1 when x < 0 0 when x == 0 For matrices, the function is evaluated
         * element wise.
         * @param x The number for which to determine the sign
         * @returns The sign of x
         */
        sign(x: number): number;
        sign(x: BigNumber): BigNumber;
        sign(x: Fraction): Fraction;
        sign(x: Complex): Complex;
        sign(x: MathArray): MathArray;
        sign(x: Matrix): Matrix;
        sign(x: Unit): Unit;

        /**
         * Calculate the square root of a value. For matrices, the function is
         * evaluated element wise.
         * @param x Value for which to calculate the square root
         * @returns Returns the square root of x
         */
        sqrt(x: number): number;
        sqrt(x: BigNumber): BigNumber;
        sqrt(x: Complex): Complex;
        sqrt(x: MathArray): MathArray;
        sqrt(x: Matrix): Matrix;
        sqrt(x: Unit): Unit;

        /**
         * Compute the square of a value, x * x. For matrices, the function is
         * evaluated element wise.
         * @param x Number for which to calculate the square
         * @returns Squared value
         */
        square(x: number): number;
        square(x: BigNumber): BigNumber;
        square(x: Fraction): Fraction;
        square(x: Complex): Complex;
        square(x: MathArray): MathArray;
        square(x: Matrix): Matrix;
        square(x: Unit): Unit;

        /**
         * Subtract two values, x - y. For matrices, the function is evaluated
         * element wise.
         * @param x Initial value
         * @param y Value to subtract from x
         * @returns Subtraction of x and y
         */
        subtract(x: MathType, y: MathType): MathType;

        /**
         * Inverse the sign of a value, apply a unary minus operation. For
         * matrices, the function is evaluated element wise. Boolean values and
         * strings will be converted to a number. For complex numbers, both real
         * and complex value are inverted.
         * @param x Number to be inverted
         * @returns Retursn the value with inverted sign
         */
        unaryMinus(x: number): number;
        unaryMinus(x: BigNumber): BigNumber;
        unaryMinus(x: Fraction): Fraction;
        unaryMinus(x: Complex): Complex;
        unaryMinus(x: MathArray): MathArray;
        unaryMinus(x: Matrix): Matrix;
        unaryMinus(x: Unit): Unit;

        /**
         * Unary plus operation. Boolean values and strings will be converted to
         * a number, numeric values will be returned as is. For matrices, the
         * function is evaluated element wise.
         * @param x Input value
         * @returns Returns the input value when numeric, converts to a number
         * when input is non-numeric.
         */
        unaryPlus(x: number): number;
        unaryPlus(x: BigNumber): BigNumber;
        unaryPlus(x: Fraction): Fraction;
        unaryPlus(x: string): string;
        unaryPlus(x: Complex): Complex;
        unaryPlus(x: MathArray): MathArray;
        unaryPlus(x: Matrix): Matrix;
        unaryPlus(x: Unit): Unit;

        /**
         * Calculate the extended greatest common divisor for two values. See
         * http://en.wikipedia.org/wiki/Extended_Euclidean_algorithm.
         * @param a An integer number
         * @param b An integer number
         * @returns Returns an array containing 3 integers [div, m, n] where div
         * = gcd(a, b) and a*m + b*n = div
         */
        xgcd(a: number | BigNumber, b: number | BigNumber): MathArray;

        /*************************************************************************
         * Bitwise functions
         ************************************************************************/

        /**
         * Bitwise AND two values, x & y. For matrices, the function is
         * evaluated element wise.
         * @param x First value to and
         * @param y Second value to and
         * @returns AND of x and y
         */
        bitAnd<T extends number | BigNumber | MathArray | Matrix>(
            x: T,
            y: number | BigNumber | MathArray | Matrix
        ): NoLiteralType<T>;

        /**
         * Bitwise NOT value, ~x. For matrices, the function is evaluated
         * element wise. For units, the function is evaluated on the best prefix
         * base.
         * @param x Value to not
         * @returns NOT of x
         */
        bitNot(x: number): number;
        bitNot(x: BigNumber): BigNumber;
        bitNot(x: MathArray): MathArray;
        bitNot(x: Matrix): Matrix;

        /**
         * Bitwise OR two values, x | y. For matrices, the function is evaluated
         * element wise. For units, the function is evaluated on the lowest
         * print base.
         * @param x First value to or
         * @param y Second value to or
         * @returns OR of x and y
         */
        bitOr(x: number, y: number): number;
        bitOr(x: BigNumber, y: BigNumber): BigNumber;
        bitOr(x: MathArray, y: MathArray): MathArray;
        bitOr(x: Matrix, y: Matrix): Matrix;

        /**
         * Bitwise XOR two values, x ^ y. For matrices, the function is
         * evaluated element wise.
         * @param x First value to xor
         * @param y Second value to xor
         * @returns XOR of x and y
         */
        bitXor<T extends number | BigNumber | MathArray | Matrix>(
            x: T,
            y: number | BigNumber | MathArray | Matrix
        ): NoLiteralType<T>;

        /**
         * Bitwise left logical shift of a value x by y number of bits, x << y.
         * For matrices, the function is evaluated element wise. For units, the
         * function is evaluated on the best prefix base.
         * @param x Value to be shifted
         * @param y Amount of shifts
         * @returns x shifted left y times
         */
        leftShift<T extends number | BigNumber | MathArray | Matrix>(
            x: T,
            y: number | BigNumber
        ): NoLiteralType<T>;

        /**
         * Bitwise right arithmetic shift of a value x by y number of bits, x >>
         * y. For matrices, the function is evaluated element wise. For units,
         * the function is evaluated on the best prefix base.
         * @param x Value to be shifted
         * @param y Amount of shifts
         * @returns x sign-filled shifted right y times
         */
        rightArithShift<T extends number | BigNumber | MathArray | Matrix>(
            x: T,
            y: number | BigNumber
        ): NoLiteralType<T>;

        /**
         * Bitwise right logical shift of value x by y number of bits, x >>> y.
         * For matrices, the function is evaluated element wise. For units, the
         * function is evaluated on the best prefix base.
         * @param x Value to be shifted
         * @param y Amount of shifts
         * @returns x zero-filled shifted right y times
         */
        rightLogShift<T extends number | MathArray | Matrix>(
            x: T,
            y: number
        ): NoLiteralType<T>;

        /*************************************************************************
         * Combinatorics functions
         ************************************************************************/

        /**
         * The Bell Numbers count the number of partitions of a set. A partition
         * is a pairwise disjoint subset of S whose union is S. bellNumbers only
         * takes integer arguments. The following condition must be enforced: n
         * >= 0
         * @param n Total number of objects in the set
         * @returns B(n)
         */
        bellNumbers(n: number): number;
        bellNumbers(n: BigNumber): BigNumber;

        /**
         * The Catalan Numbers enumerate combinatorial structures of many
         * different types. catalan only takes integer arguments. The following
         * condition must be enforced: n >= 0
         * @param n nth Catalan number
         * @returns Cn(n)
         */
        catalan(n: number): number;
        catalan(n: BigNumber): BigNumber;

        /**
         * The composition counts of n into k parts. Composition only takes
         * integer arguments. The following condition must be enforced: k <= n.
         * @param n Total number of objects in the set
         * @param k Number of objects in the subset
         * @returns Returns the composition counts of n into k parts.
         */
        composition<T extends number | BigNumber>(
            n: T,
            k: number | BigNumber
        ): NoLiteralType<T>;

        /**
         * The Stirling numbers of the second kind, counts the number of ways to
         * partition a set of n labelled objects into k nonempty unlabelled
         * subsets. stirlingS2 only takes integer arguments. The following
         * condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) =
         * 1
         * @param n Total number of objects in the set
         * @param k Number of objects in the subset
         * @returns S(n,k)
         */
        stirlingS2<T extends number | BigNumber>(
            n: T,
            k: number | BigNumber
        ): NoLiteralType<T>;

        /*************************************************************************
         * Complex functions
         ************************************************************************/

        /**
         * Compute the argument of a complex value. For a complex number a + bi,
         * the argument is computed as atan2(b, a). For matrices, the function
         * is evaluated element wise.
         * @param x A complex number or array with complex numbers
         * @returns The argument of x
         */
        arg(x: number | Complex): number;
        arg(x: BigNumber | Complex): BigNumber;
        arg(x: MathArray): MathArray;
        arg(x: Matrix): Matrix;

        /**
         * Compute the complex conjugate of a complex value. If x = a+bi, the
         * complex conjugate of x is a - bi. For matrices, the function is
         * evaluated element wise.
         * @param x A complex number or array with complex numbers
         * @returns The complex conjugate of x
         */
        conj<T extends number | BigNumber | Complex | MathArray | Matrix>(
            x: T
        ): NoLiteralType<T>;

        /**
         * Get the imaginary part of a complex number. For a complex number a +
         * bi, the function returns b. For matrices, the function is evaluated
         * element wise.
         * @param x A complex number or array with complex numbers
         * @returns The imaginary part of x
         */
        im(
            x: number | BigNumber | Complex | MathArray | Matrix
        ): number | BigNumber | MathArray | Matrix;

        /**
         * Get the real part of a complex number. For a complex number a + bi,
         * the function returns a. For matrices, the function is evaluated
         * element wise.
         * @param x A complex number or array of complex numbers
         * @returns The real part of x
         */
        re(
            x: number | BigNumber | Complex | MathArray | Matrix
        ): number | BigNumber | MathArray | Matrix;

        /*************************************************************************
         * Geometry functions
         ************************************************************************/

        /**
         * Calculates: The eucledian distance between two points in 2 and 3
         * dimensional spaces. Distance between point and a line in 2 and 3
         * dimensional spaces. Pairwise distance between a set of 2D or 3D
         * points NOTE: When substituting coefficients of a line(a, b and c),
         * use ax + by + c = 0 instead of ax + by = c For parametric equation of
         * a 3D line, x0, y0, z0, a, b, c are from: (x−x0, y−y0, z−z0) = t(a, b,
         * c)
         * @param x Coordinates of the first point
         * @param y Coordinates of the second point
         * @returns Returns the distance from two/three points
         */
        distance(
            x: MathArray | Matrix | object,
            y: MathArray | Matrix | object
        ): number | BigNumber;

        /**
         * Calculates the point of intersection of two lines in two or three
         * dimensions and of a line and a plane in three dimensions. The inputs
         * are in the form of arrays or 1 dimensional matrices. The line
         * intersection functions return null if the lines do not meet. Note:
         * Fill the plane coefficients as x + y + z = c and not as x + y + z + c
         * = 0.
         * @param w Co-ordinates of first end-point of first line
         * @param x Co-ordinates of second end-point of first line
         * @param y Co-ordinates of first end-point of second line OR
         * Coefficients of the plane's equation
         * @param z Co-ordinates of second end-point of second line OR null if
         * the calculation is for line and plane
         * @returns Returns the point of intersection of lines/lines-planes
         */
        intersect(
            w: MathArray | Matrix,
            x: MathArray | Matrix,
            y: MathArray | Matrix,
            z: MathArray | Matrix
        ): MathArray;

        /*************************************************************************
         * Logical functions
         ************************************************************************/

        /**
         * Logical and. Test whether two values are both defined with a
         * nonzero/nonempty value. For matrices, the function is evaluated
         * element wise.
         * @param x First value to and
         * @param y Second value to and
         * @returns Returns true when both inputs are defined with a
         * nonzero/nonempty value.
         */
        and(
            x: number | BigNumber | Complex | Unit | MathArray | Matrix,
            y: number | BigNumber | Complex | Unit | MathArray | Matrix
        ): boolean | MathArray | Matrix;

        /**
         * Logical not. Flips boolean value of a given parameter. For matrices,
         * the function is evaluated element wise.
         * @param x First value to not
         * @returns Returns true when input is a zero or empty value.
         */
        not(
            x: number | BigNumber | Complex | Unit | MathArray | Matrix
        ): boolean | MathArray | Matrix;

        /**
         * Logical or. Test if at least one value is defined with a
         * nonzero/nonempty value. For matrices, the function is evaluated
         * element wise.
         * @param x First value to or
         * @param y Second value to or
         * @returns Returns true when one of the inputs is defined with a
         * nonzero/nonempty value.
         */
        or(
            x: number | BigNumber | Complex | Unit | MathArray | Matrix,
            y: number | BigNumber | Complex | Unit | MathArray | Matrix
        ): boolean | MathArray | Matrix;

        /**
         * Logical xor. Test whether one and only one value is defined with a
         * nonzero/nonempty value. For matrices, the function is evaluated
         * element wise.
         * @param x First value to xor
         * @param y Second value to xor
         * @returns Returns true when one and only one input is defined with a
         * nonzero/nonempty value.
         */
        xor(
            x: number | BigNumber | Complex | Unit | MathArray | Matrix,
            y: number | BigNumber | Complex | Unit | MathArray | Matrix
        ): boolean | MathArray | Matrix;

        /*************************************************************************
         * Matrix functions
         ************************************************************************/

        /**
         * Concatenate two or more matrices. dim: number is a zero-based
         * dimension over which to concatenate the matrices. By default the last
         * dimension of the matrices.
         * @param args Two or more matrices
         * @returns Concatenated matrix
         */
        concat(...args: Array<MathArray | Matrix>): MathArray | Matrix;

        /**
         * Calculate the cross product for two vectors in three dimensional
         * space. The cross product of A = [a1, a2, a3] and B =[b1, b2, b3] is
         * defined as: cross(A, B) = [ a2 * b3 - a3 * b2, a3 * b1 - a1 * b3, a1
         * * b2 - a2 * b1 ]
         * @param x First vector
         * @param y Second vector
         * @returns Returns the cross product of x and y
         */
        cross(x: MathArray | Matrix, y: MathArray | Matrix): Matrix | MathArray;

        /**
         * Calculate the determinant of a matrix.
         * @param x A Matrix
         * @returns the determinant of x
         */
        det(x: MathArray | Matrix): number;

        /**
         * Create a diagonal matrix or retrieve the diagonal of a matrix. When x
         * is a vector, a matrix with vector x on the diagonal will be returned.
         * When x is a two dimensional matrix, the matrixes kth diagonal will be
         * returned as vector. When k is positive, the values are placed on the
         * super diagonal. When k is negative, the values are placed on the sub
         * diagonal.
         * @param X A two dimensional matrix or a vector
         * @param k The diagonal where the vector will be filled in or
         * retrieved. Default value: 0.
         * @param format The matrix storage format. Default value: 'dense'.
         * @returns Diagonal matrix from input vector, or diagonal from input
         * matrix
         */
        diag(X: MathArray | Matrix, format?: string): Matrix;
        diag(
            X: MathArray | Matrix,
            k: number | BigNumber,
            format?: string
        ): Matrix | MathArray;

        /**
         * Calculate the dot product of two vectors. The dot product of A = [a1,
         * a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as: dot(A,
         * B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn
         * @param x First vector
         * @param y Second vector
         * @returns Returns the dot product of x and y
         */
        dot(x: MathArray | Matrix, y: MathArray | Matrix): number;

        /**
         * Compute the matrix exponential, expm(A) = e^A. The matrix must be
         * square. Not to be confused with exp(a), which performs element-wise
         * exponentiation. The exponential is calculated using the Padé
         * approximant with scaling and squaring; see “Nineteen Dubious Ways to
         * Compute the Exponential of a Matrix,” by Moler and Van Loan.
         * @param x A square matrix
         * @returns The exponential of x
         */
        expm(x: Matrix): Matrix;

        /**
         * Create a 2-dimensional identity matrix with size m x n or n x n. The
         * matrix has ones on the diagonal and zeros elsewhere.
         * @param size The size for the matrix
         * @param format The Matrix storage format
         * @returns A matrix with ones on the diagonal
         */
        identity(
            size: number | number[] | Matrix | MathArray,
            format?: string
        ): Matrix | MathArray | number;
        /**
         * @param m The x dimension for the matrix
         * @param n The y dimension for the matrix
         * @param format The Matrix storage format
         * @returns A matrix with ones on the diagonal
         */
        identity(m: number, n: number, format?: string): Matrix | MathArray | number;

        /**
         * Filter the items in an array or one dimensional matrix.
         * @param x A one dimensional matrix or array to filter
         * @param test A function or regular expression to test items. All
         * entries for which test returns true are returned. When test is a
         * function, it is invoked with three parameters: the value of the
         * element, the index of the element, and the matrix/array being
         * traversed. The function must return a boolean.
         */
        filter(
            x: Matrix | MathArray | string[],
            test: ((value: any, index: any, matrix: Matrix | MathArray | string[]) => boolean) | RegExp
        ): Matrix | MathArray;

        /**
         * Flatten a multi dimensional matrix into a single dimensional matrix.
         * @param x Matrix to be flattened
         * @returns Returns the flattened matrix
         */
        flatten<T extends MathArray | Matrix>(x: T): T;

        /**
         * Iterate over all elements of a matrix/array, and executes the given
         * callback function.
         * @param x The matrix to iterate on.
         * @param callback The callback function is invoked with three
         * parameters: the value of the element, the index of the element, and
         * the Matrix/array being traversed.
         */
        forEach<T extends Matrix | MathArray>(x: T, callback: ((value: any, index: any, matrix: T) => void)): void;

        /**
         * Calculate the inverse of a square matrix.
         * @param x Matrix to be inversed
         * @returns The inverse of x
         */
        inv<T extends number | Complex | MathArray | Matrix>(
            x: T
        ): NoLiteralType<T>;

        /**
         * Calculate the kronecker product of two matrices or vectors
         * @param x First vector
         * @param y Second vector
         * @returns Returns the kronecker product of x and y
         */
        kron(x: Matrix | MathArray, y: Matrix | MathArray): Matrix;

        /**
         * Iterate over all elements of a matrix/array, and executes the given
         * callback function.
         * @param x The matrix to iterate on.
         * @param callback The callback function is invoked with three
         * parameters: the value of the element, the index of the element, and
         * the Matrix/array being traversed.
         * @returns Transformed map of x
         */
        map<T extends Matrix | MathArray>(x: T, callback: ((value: any, index: any, matrix: T) => MathType | string)): T;

        /**
         * Create a matrix filled with ones. The created matrix can have one or
         * multiple dimensions.
         * @param size The size of each dimension of the matrix
         * @param format The matrix storage format
         * @returns A matrix filled with ones
         */
        ones(size: number | number[], format?: string): MathArray | Matrix;
        /**
         * @param m The x dimension of the matrix
         * @param n The y dimension of the amtrix
         * @param format The matrix storage format
         * @returns A matrix filled with ones
         */
        ones(m: number, n: number, format?: string): MathArray | Matrix;

        /**
         * Partition-based selection of an array or 1D matrix. Will find the kth
         * smallest value, and mutates the input array. Uses Quickselect.
         * @param x A one dimensional matrix or array to sort
         * @param k The kth smallest value to be retrieved; zero-based index
         * @param compare  An optional comparator function. The function is
         * called as compare(a, b), and must return 1 when a > b, -1 when a < b,
         * and 0 when a == b. Default value: 'asc'.
         * @returns Returns the kth lowest value.
         */
        partitionSelect(
            x: MathArray | Matrix,
            k: number,
            compare?: "asc" | "desc" | ((a: any, b: any) => number)
        ): any;

        /**
         * Create an array from a range. By default, the range end is excluded.
         * This can be customized by providing an extra parameter includeEnd.
         * @param str A string 'start:end' or 'start:step:end'
         * @param start Start of the range
         * @param end End of the range, excluded by default, included when
         * parameter includeEnd=true
         * @param step Step size. Default value is 1.
         * @param includeEnd: Option to specify whether to include the end or
         * not. False by default
         * @returns Parameters describing the ranges start, end, and optional
         * step.
         */
        range(str: string, includeEnd?: boolean): Matrix;
        range(
            start: number | BigNumber,
            end: number | BigNumber,
            includeEnd?: boolean
        ): Matrix;
        range(
            start: number | BigNumber,
            end: number | BigNumber,
            step: number | BigNumber,
            includeEnd?: boolean
        ): Matrix;

        /**
         * Reshape a multi dimensional array to fit the specified dimensions
         * @param x Matrix to be reshaped
         * @param sizes One dimensional array with integral sizes for each
         * dimension
         * @returns A reshaped clone of matrix x
         */
        reshape<T extends MathArray | Matrix>(
            x: T,
            sizes: number[]
        ): T;

        /**
         * Resize a matrix
         * @param x Matrix to be resized
         * @param size One dimensional array with numbers
         * @param defaultValue Zero by default, except in case of a string, in
         * that case defaultValue = ' ' Default value: 0.
         * @returns A resized clone of matrix x
         */
        resize<T extends MathArray | Matrix>(
            x: T,
            size: MathArray | Matrix,
            defaultValue?: number | string
        ): T;

        /**
         * Calculate the size of a matrix or scalar.
         * @param A matrix
         * @returns A vector with the size of x
         */
        size(
            x: boolean | number | Complex | Unit | string | MathArray | Matrix
        ): MathArray | Matrix;

        /**
         * Sort the items in a matrix
         * @param x A one dimensional matrix or array to sort
         * @param compare An optional _comparator function or name. The function
         * is called as compare(a, b), and must return 1 when a > b, -1 when a <
         * b, and 0 when a == b. Default value: ‘asc’
         * @returns Returns the sorted matrix
         */
        sort<T extends Matrix | MathArray>(
            x: T,
            compare: ((a: any, b: any) => number) | "asc" | "desc" | "natural"
        ): T;

        /**
         * Calculate the principal square root of a square matrix. The principal
         * square root matrix X of another matrix A is such that X * X = A.
         * @param A The square matrix A
         * @returns The principal square root of matrix A
         */
        sqrtm<T extends MathArray | Matrix>(A: T): T;

        /**
         * Squeeze a matrix, remove inner and outer singleton dimensions from a
         * matrix.
         * @param x Matrix to be squeezed
         * @returns Squeezed matrix
         */
        squeeze<T extends MathArray | Matrix>(x: T): T;

        /**
         * Get or set a subset of a matrix or string.
         * @param value An array, matrix, or string
         * @param index An index containing ranges for each dimension
         * @param replacement An array, matrix, or scalar. If provided, the
         * subset is replaced with replacement. If not provided, the subset is
         * returned
         * @param defaultValue Default value, filled in on new entries when the
         * matrix is resized. If not provided, math.matrix elements will be left
         * undefined. Default value: undefined.
         * @returns Either the retrieved subset or the updated matrix
         */
        subset<T extends MathArray | Matrix | string>(
            value: T,
            index: Index,
            replacement?: any,
            defaultValue?: any
        ): T;

        /**
         * Calculate the trace of a matrix: the sum of the elements on the main
         * diagonal of a square matrix.
         * @param x A matrix
         * @returns The trace of x
         */
        trace(x: MathArray | Matrix): number;

        /**
         * Transpose a matrix. All values of the matrix are reflected over its
         * main diagonal. Only two dimensional matrices are supported.
         * @param x Matrix to be transposed
         * @returns The transposed matrix
         */
        transpose<T extends MathArray | Matrix>(x: T): T;

        /**
         * Create a matrix filled with zeros. The created matrix can have one or
         * multiple dimensions.
         * @param size The size of each dimension of the matrix
         * @param format The matrix storage format
         * @returns A matrix filled with zeros
         */
        zeros(size: number | number[], format?: string): MathArray | Matrix;
        /**
         * @param m The x dimension of the matrix
         * @param n The y dimension of the matrix
         * @param format The matrix storage format
         * @returns A matrix filled with zeros
         */
        zeros(m: number, n: number, format?: string): MathArray | Matrix;

        /*************************************************************************
         * Probability functions
         ************************************************************************/

        /**
         * Compute the number of ways of picking k unordered outcomes from n
         * possibilities. Combinations only takes integer arguments. The
         * following condition must be enforced: k <= n.
         * @param n Total number of objects in the set
         * @param k Number of objects in the subset
         * @returns Number of possible combinations
         */
        combinations<T extends number | BigNumber>(
            n: T,
            k: number | BigNumber
        ): NoLiteralType<T>;

        /**
         * Compute the factorial of a value Factorial only supports an integer
         * value as argument. For matrices, the function is evaluated element
         * wise.
         * @param n An integer number
         * @returns The factorial of n
         */
        factorial<T extends number | BigNumber | MathArray | Matrix>(
            n: T
        ): NoLiteralType<T>;

        /**
         * Compute the gamma function of a value using Lanczos approximation for
         * small values, and an extended Stirling approximation for large
         * values. For matrices, the function is evaluated element wise.
         * @param n A real or complex number
         * @returns The gamma of n
         */
        gamma(n: number | MathArray | Matrix): number | MathArray | Matrix;

        /**
         * Calculate the Kullback-Leibler (KL) divergence between two
         * distributions
         * @param q First vector
         * @param p Second vector
         * @returns Returns disance between q and p
         */
        kldivergence(q: MathArray | Matrix, p: MathArray | Matrix): number;

        /**
         * Multinomial Coefficients compute the number of ways of picking a1,
         * a2, ..., ai unordered outcomes from n possibilities. multinomial
         * takes one array of integers as an argument. The following condition
         * must be enforced: every ai <= 0
         * @param a Integer number of objects in the subset
         * @returns multinomial coefficent
         */
        multinomial<T extends number | BigNumber>(a: T[]): NoLiteralType<T>;

        /**
         * Compute the number of ways of obtaining an ordered subset of k
         * elements from a set of n elements. Permutations only takes integer
         * arguments. The following condition must be enforced: k <= n.
         * @param n The number of objects in total
         * @param k The number of objects in the subset
         * @returns The number of permutations
         */
        permutations<T extends number | BigNumber>(
            n: T,
            k?: number | BigNumber
        ): NoLiteralType<T>;

        /**
         * Random pick a value from a one dimensional array. Array element is
         * picked using a random function with uniform distribution.
         * @param array A one dimensional array
         * @param number An int or float
         * @param weights An array of ints or floats
         * @returns Returns a single random value from array when number is 1 or
         * undefined. Returns an array with the configured number of elements
         * when number is > 1.
         */
        pickRandom(
            array: number[],
            number?: number,
            weights?: number[]
        ): number | number[];

        /**
         * Return a random number larger or equal to min and smaller than max
         * using a uniform distribution.
         * @param size If provided, an array or matrix with given size and
         * filled with random values is returned
         * @param min Minimum boundary for the random value, included
         * @param max Maximum boundary for the random value, excluded
         * @returns A random number
         */
        random(min?: number, max?: number): number;
        random<T extends MathArray | Matrix>(
            size: T,
            min?: number,
            max?: number
        ): T;

        /**
         * Return a random integer number larger or equal to min and smaller
         * than max using a uniform distribution.
         * @param size If provided, an array or matrix with given size and
         * filled with random values is returned
         * @param min Minimum boundary for the random value, included
         * @param max Maximum boundary for the random value, excluded
         * @returns A random number
         */
        randomInt(min: number, max?: number): number;
        randomInt<T extends MathArray | Matrix>(
            size: T,
            min?: number,
            max?: number
        ): T;

        /*************************************************************************
         * Relational functions
         ************************************************************************/

        /**
         * Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x
         * == y. x and y are considered equal when the relative difference
         * between x and y is smaller than the configured epsilon. The function
         * cannot be used to compare values smaller than approximately 2.22e-16.
         * For matrices, the function is evaluated element wise.
         * @param x First value to compare
         * @param y Second value to compare
         * @returns Returns the result of the comparison: 1 when x > y, -1 when
         * x < y, and 0 when x == y.
         */
        compare(
            x: MathType | string,
            y: MathType | string
        ): number | BigNumber | Fraction | MathArray | Matrix;

        /**
         * Compare two values of any type in a deterministic, natural way. For
         * numeric values, the function works the same as math.compare. For
         * types of values that can’t be compared mathematically, the function
         * compares in a natural way.
         * @param x First value to compare
         * @param y Second value to compare
         * @returns Returns the result of the comparison: 1 when x > y, -1 when
         * x < y, and 0 when x == y.
         */
        compareNatural(x: any, y: any): number;

        /**
         * Compare two strings lexically. Comparison is case sensitive. Returns
         * 1 when x > y, -1 when x < y, and 0 when x == y. For matrices, the
         * function is evaluated element wise.
         * @param x First string to compare
         * @param y Second string to compare
         * @returns Returns the result of the comparison: 1 when x > y, -1 when
         * x < y, and 0 when x == y.
         */
        compareText(
            x: string | MathArray | Matrix,
            y: string | MathArray | Matrix
        ): number | MathArray | Matrix;

        /**
         * Test element wise whether two matrices are equal. The function
         * accepts both matrices and scalar values.
         * @param x First matrix to compare
         * @param y Second amtrix to compare
         * @returns Returns true when the input matrices have the same size and
         * each of their elements is equal.
         */
        deepEqual(
            x: MathType,
            y: MathType
        ): number | BigNumber | Fraction | Complex | Unit | MathArray | Matrix;

        /**
         * Test whether two values are equal.
         *
         * The function tests whether the relative difference between x and y is
         * smaller than the configured epsilon. The function cannot be used to
         * compare values smaller than approximately 2.22e-16. For matrices, the
         * function is evaluated element wise. In case of complex numbers, x.re
         * must equal y.re, and x.im must equal y.im. Values null and undefined
         * are compared strictly, thus null is only equal to null and nothing
         * else, and undefined is only equal to undefined and nothing else.
         * @param x First value to compare
         * @param y Second value to compare
         * @returns Returns true when the compared values are equal, else
         * returns false
         */
        equal(
            x: MathType | string,
            y: MathType | string
        ): boolean | MathArray | Matrix;

        /**
         * Check equality of two strings. Comparison is case sensitive. For
         * matrices, the function is evaluated element wise.
         * @param x First string to compare
         * @param y Second string to compare
         * @returns Returns true if the values are equal, and false if not.
         */
        equalText(
            x: string | MathArray | Matrix,
            y: string | MathArray | Matrix
        ): number | MathArray | Matrix;

        /**
         * Test whether value x is larger than y. The function returns true when
         * x is larger than y and the relative difference between x and y is
         * larger than the configured epsilon. The function cannot be used to
         * compare values smaller than approximately 2.22e-16. For matrices, the
         * function is evaluated element wise.
         * @param x First value to compare
         * @param y Second value to vcompare
         * @returns Returns true when x is larger than y, else returns false
         */
        larger(
            x: MathType | string,
            y: MathType | string
        ): boolean | MathArray | Matrix;

        /**
         * Test whether value x is larger or equal to y. The function returns
         * true when x is larger than y or the relative difference between x and
         * y is smaller than the configured epsilon. The function cannot be used
         * to compare values smaller than approximately 2.22e-16. For matrices,
         * the function is evaluated element wise.
         * @param x First value to compare
         * @param y Second value to vcompare
         * @returns Returns true when x is larger than or equal to y, else
         * returns false
         */
        largerEq(
            x: MathType | string,
            y: MathType | string
        ): boolean | MathArray | Matrix;

        /**
         * Test whether value x is smaller than y. The function returns true
         * when x is smaller than y and the relative difference between x and y
         * is smaller than the configured epsilon. The function cannot be used
         * to compare values smaller than approximately 2.22e-16. For matrices,
         * the function is evaluated element wise.
         * @param x First value to compare
         * @param y Second value to vcompare
         * @returns Returns true when x is smaller than y, else returns false
         */
        smaller(
            x: MathType | string,
            y: MathType | string
        ): boolean | MathArray | Matrix;

        /**
         * Test whether value x is smaller or equal to y. The function returns
         * true when x is smaller than y or the relative difference between x
         * and y is smaller than the configured epsilon. The function cannot be
         * used to compare values smaller than approximately 2.22e-16. For
         * matrices, the function is evaluated element wise.
         * @param x First value to compare
         * @param y Second value to vcompare
         * @returns Returns true when x is smaller than or equal to y, else
         * returns false
         */
        smallerEq(
            x: MathType | string,
            y: MathType | string
        ): boolean | MathArray | Matrix;

        /**
         * Test whether two values are unequal. The function tests whether the
         * relative difference between x and y is larger than the configured
         * epsilon. The function cannot be used to compare values smaller than
         * approximately 2.22e-16. For matrices, the function is evaluated
         * element wise. In case of complex numbers, x.re must unequal y.re, or
         * x.im must unequal y.im. Values null and undefined are compared
         * strictly, thus null is unequal with everything except null, and
         * undefined is unequal with everything except undefined.
         * @param x First value to compare
         * @param y Second value to vcompare
         * @returns Returns true when the compared values are unequal, else
         * returns false
         */
        unequal(
            x: MathType | string,
            y: MathType | string
        ): boolean | MathArray | Matrix;

        /*************************************************************************
         * Set functions
         ************************************************************************/

        /**
         * Create the cartesian product of two (multi)sets. Multi-dimension
         * arrays will be converted to single-dimension arrays before the
         * operation.
         * @param a1 A (multi)set
         * @param a2 A (multi)set
         * @returns The cartesian product of two (multi)sets
         */
        setCartesian<T extends MathArray | Matrix>(
            a1: T,
            a2: MathArray | Matrix
        ): T;

        /**
         * Create the difference of two (multi)sets: every element of set1, that
         * is not the element of set2. Multi-dimension arrays will be converted
         * to single-dimension arrays before the operation
         * @param a1 A (multi)set
         * @param a2 A (multi)set
         * @returns The difference of two (multi)sets
         */
        setDifference<T extends MathArray | Matrix>(
            a1: T,
            a2: MathArray | Matrix
        ): T;

        /**
         * Collect the distinct elements of a multiset. A multi-dimension array
         * will be converted to a single-dimension array before the operation.
         * @param a A multiset
         * @returns A set containing the distinct elements of the multiset
         */
        setDistinct<T extends MathArray | Matrix>(a: T): T;

        /**
         * Create the intersection of two (multi)sets. Multi-dimension arrays
         * will be converted to single-dimension arrays before the operation.
         * @param a1 A (multi)set
         * @param a2 A (multi)set
         * @returns The intersection of two (multi)sets
         */
        setIntersect<T extends MathArray | Matrix>(
            a1: T,
            a2: MathArray | Matrix
        ): T;

        /**
         * Check whether a (multi)set is a subset of another (multi)set. (Every
         * element of set1 is the element of set2.) Multi-dimension arrays will
         * be converted to single-dimension arrays before the operation.
         * @param a1 A (multi)set
         * @param a2 A (multi)set
         * @returns True if a1 is subset of a2, else false
         */
        setIsSubset(a1: MathArray | Matrix, a2: MathArray | Matrix): boolean;

        /**
         * Count the multiplicity of an element in a multiset. A multi-dimension
         * array will be converted to a single-dimension array before the
         * operation.
         * @param e An element in the multiset
         * @param a A multiset
         * @returns The number of how many times the multiset contains the
         * element
         */
        setMultiplicity(
            e: number | BigNumber | Fraction | Complex,
            a: MathArray | Matrix
        ): number;

        /**
         * Create the powerset of a (multi)set. (The powerset contains very
         * possible subsets of a (multi)set.) A multi-dimension array will be
         * converted to a single-dimension array before the operation.
         * @param a A multiset
         * @returns The powerset of the (multi)set
         */
        setPowerset<T extends MathArray | Matrix>(a: T): T;

        /**
         * Count the number of elements of a (multi)set. When a second parameter
         * is ‘true’, count only the unique values. A multi-dimension array will
         * be converted to a single-dimension array before the operation.
         * @param a A multiset
         * @returns The number of elements of the (multi)set
         */
        setSize(a: MathArray | Matrix): number;

        /**
         * Create the symmetric difference of two (multi)sets. Multi-dimension
         * arrays will be converted to single-dimension arrays before the
         * operation.
         * @param a1 A (multi)set
         * @param a2 A (multi)set
         * @returns The symmetric difference of two (multi)sets
         */
        setSymDifference<T extends MathArray | Matrix>(
            a1: T,
            a2: MathArray | Matrix
        ): T;

        /**
         * Create the union of two (multi)sets. Multi-dimension arrays will be
         * converted to single-dimension arrays before the operation.
         * @param a1 A (multi)set
         * @param a2 A (multi)set
         * @returns The union of two (multi)sets
         */
        setUnion<T extends MathArray | Matrix>(
            a1: T,
            a2: MathArray | Matrix
        ): T;

        /*************************************************************************
         * Special functions
         ************************************************************************/

        /**
         * Compute the erf function of a value using a rational Chebyshev
         * approximations for different intervals of x.
         * @param x A real number
         * @returns The erf of x
         */
        erf<T extends number | MathArray | Matrix>(x: T): NoLiteralType<T>;

        /*************************************************************************
         * Statistics functions
         ************************************************************************/

        /**
         * Compute the median absolute deviation of a matrix or a list with
         * values. The median absolute deviation is defined as the median of the
         * absolute deviations from the median.
         * @param array A single matrix or multiple scalar values.
         * @returns The median absolute deviation
         */
        mad(array: MathArray | Matrix): any;

        /**
         * Compute the maximum value of a matrix or a list with values. In case
         * of a multi dimensional array, the maximum of the flattened array will
         * be calculated. When dim is provided, the maximum over the selected
         * dimension will be calculated. Parameter dim is zero-based.
         * @param args A single matrix or multiple scalar values
         * @returns The maximum value
         */
        max(...args: MathType[]): any;
        /**
         * @param A A single matrix
         * @param dim The maximum over the selected dimension
         * @returns The maximum value
         */
        max(A: MathArray | Matrix, dim?: number): any;

        /**
         * Compute the mean value of matrix or a list with values. In case of a
         * multi dimensional array, the mean of the flattened array will be
         * calculated. When dim is provided, the maximum over the selected
         * dimension will be calculated. Parameter dim is zero-based.
         * @param args A single matrix or multiple scalar values
         * @returns The mean of all values
         */
        mean(...args: MathType[]): any;
        /**
         * @param A A single matrix
         * @param dim The mean over the selected dimension
         * @returns The mean of all values
         */
        mean(A: MathArray | Matrix, dim?: number): any;

        /**
         * Compute the median of a matrix or a list with values. The values are
         * sorted and the middle value is returned. In case of an even number of
         * values, the average of the two middle values is returned. Supported
         * types of values are: Number, BigNumber, Unit In case of a (multi
         * dimensional) array or matrix, the median of all elements will be
         * calculated.
         * @param args A single matrix or or multiple scalar values
         * @returns The median
         */
        median(...args: MathType[]): any;

        /**
         * Compute the maximum value of a matrix or a list of values. In case of
         * a multi dimensional array, the maximum of the flattened array will be
         * calculated. When dim is provided, the maximum over the selected
         * dimension will be calculated. Parameter dim is zero-based.
         * @param args A single matrix or or multiple scalar values
         * @returns The minimum value
         */
        min(...args: MathType[]): any;
        /**
         * @param A A single matrix
         * @param dim The minimum over the selected dimension
         * @returns The minimum value
         */
        min(A: MathArray | Matrix, dim?: number): any;

        /**
         * Computes the mode of a set of numbers or a list with values(numbers
         * or characters). If there are more than one modes, it returns a list
         * of those values.
         * @param args A single matrix
         * @returns The mode of all values
         */
        mode(...args: MathType[]): any;

        /**
         * Compute the product of a matrix or a list with values. In case of a
         * (multi dimensional) array or matrix, the sum of all elements will be
         * calculated.
         * @param args A single matrix or multiple scalar values
         * @returns The product of all values
         */
        prod(...args: MathType[]): any;

        /**
         * Compute the prob order quantile of a matrix or a list with values.
         * The sequence is sorted and the middle value is returned. Supported
         * types of sequence values are: Number, BigNumber, Unit Supported types
         * of probability are: Number, BigNumber In case of a (multi
         * dimensional) array or matrix, the prob order quantile of all elements
         * will be calculated.
         * @param A A single matrix or array
         * @param probOrN prob is the order of the quantile, while N is the
         * amount of evenly distributed steps of probabilities; only one of
         * these options can be provided
         * @param sorted =false is data sorted in ascending order
         * @returns Quantile(s)
         */
        quantileSeq(
            A: MathArray | Matrix,
            prob: number | BigNumber | MathArray,
            sorted?: boolean
        ): number | BigNumber | Unit | MathArray;

        /**
         * Compute the standard deviation of a matrix or a list with values. The
         * standard deviations is defined as the square root of the variance:
         * std(A) = sqrt(variance(A)). In case of a (multi dimensional) array or
         * matrix, the standard deviation over all elements will be calculated.
         * Optionally, the type of normalization can be specified as second
         * parameter. The parameter normalization can be one of the following
         * values: 'unbiased' (default) The sum of squared errors is divided by
         * (n - 1) 'uncorrected' The sum of squared errors is divided by n
         * 'biased' The sum of squared errors is divided by (n + 1)
         * @param array A single matrix or multiple scalar values
         * @param normalization Determines how to normalize the variance. Choose
         * ‘unbiased’ (default), ‘uncorrected’, or ‘biased’. Default value:
         * ‘unbiased’.
         * @returns The standard deviation
         */
        std(
            array: MathArray | Matrix,
            normalization?: "unbiased" | "uncorrected" | "biased" | "unbiased"
        ): number;

        /**
         * Compute the sum of a matrix or a list with values. In case of a
         * (multi dimensional) array or matrix, the sum of all elements will be
         * calculated.
         * @param args A single matrix or multiple scalar values
         * @returns The sum of all values
         */
        sum(...args: Array<number | BigNumber | Fraction>): any;
        /**
         * @param array A single matrix
         * @returns The sum of all values
         */
        sum(array: MathArray | Matrix): any;

        /**
         * Compute the variance of a matrix or a list with values. In case of a
         * (multi dimensional) array or matrix, the variance over all elements
         * will be calculated. Optionally, the type of normalization can be
         * specified as second parameter. The parameter normalization can be one
         * of the following values: 'unbiased' (default) The sum of squared
         * errors is divided by (n - 1) 'uncorrected' The sum of squared errors
         * is divided by n 'biased' The sum of squared errors is divided by (n +
         * 1) Note that older browser may not like the variable name var. In
         * that case, the function can be called as math['var'](...) instead of
         * math.variance(...).
         * @param args A single matrix or multiple scalar values
         * @returns The variance
         */
        variance(...args: Array<number | BigNumber | Fraction>): any;
        /**
         * @param array A single matrix
         * @param normalization normalization Determines how to normalize the
         * variance. Choose ‘unbiased’ (default), ‘uncorrected’, or ‘biased’.
         * Default value: ‘unbiased’.
         * @returns The variance
         */
        variance(
            array: MathArray | Matrix,
            normalization?: "unbiased" | "uncorrected" | "biased" | "unbiased"
        ): any;

        /*************************************************************************
         * String functions
         ************************************************************************/

        /**
         * Format a value of any type into a string.
         * @param value The value to be formatted
         * @param options An object with formatting options.
         * @param callback A custom formatting function, invoked for all numeric
         * elements in value, for example all elements of a matrix, or the real
         * and imaginary parts of a complex number. This callback can be used to
         * override the built-in numeric notation with any type of formatting.
         * Function callback is called with value as parameter and must return a
         * string.
         * @see http://mathjs.org/docs/reference/functions/format.html
         * @returns The formatted value
         */
        format(
            value: any,
            options?: FormatOptions | number | ((item: any) => string),
            callback?: ((value: any) => string)
        ): string;

        /**
         * Interpolate values into a string template.
         * @param template A string containing variable placeholders.
         * @param values An object containing variables which will be filled in
         * in the template.
         * @param precision Number of digits to format numbers. If not provided,
         * the value will not be rounded.
         * @param options Formatting options, or the number of digits to format
         * numbers. See function math.format for a description of all options.
         * @returns Interpolated string
         */
        print(
            template: string,
            values: any,
            precision?: number,
            options?: number | object
        ): void;

        /*************************************************************************
         * Trigonometry functions
         ************************************************************************/

        /**
         * Calculate the inverse cosine of a value. For matrices, the function
         * is evaluated element wise.
         * @param x Function input
         * @returns The arc cosine of x
         */
        acos(x: number): number;
        acos(x: BigNumber): BigNumber;
        acos(x: Complex): Complex;
        acos(x: MathArray): MathArray;
        acos(x: Matrix): Matrix;

        /**
         * Calculate the hyperbolic arccos of a value, defined as acosh(x) =
         * ln(sqrt(x^2 - 1) + x). For matrices, the function is evaluated
         * element wise.
         * @param x Function input
         * @returns The hyperbolic arccosine of x
         */
        acosh(x: number): number;
        acosh(x: BigNumber): BigNumber;
        acosh(x: Complex): Complex;
        acosh(x: MathArray): MathArray;
        acosh(x: Matrix): Matrix;

        /**
         * Calculate the inverse cotangent of a value. For matrices, the
         * function is evaluated element wise.
         * @param x Function input
         * @returns The arc cotangent of x
         */
        acot(x: number): number;
        acot(x: BigNumber): BigNumber;
        acot(x: MathArray): MathArray;
        acot(x: Matrix): Matrix;

        /**
         * Calculate the hyperbolic arccotangent of a value, defined as acoth(x)
         * = (ln((x+1)/x) + ln(x/(x-1))) / 2. For matrices, the function is
         * evaluated element wise.
         * @param x Function input
         * @returns The hyperbolic arccotangent of x
         */
        acoth(x: number): number;
        acoth(x: BigNumber): BigNumber;
        acoth(x: MathArray): MathArray;
        acoth(x: Matrix): Matrix;

        /**
         * Calculate the inverse cosecant of a value. For matrices, the function
         * is evaluated element wise.
         * @param x Function input
         * @returns The arc cosecant of x
         */
        acsc(x: number): number;
        acsc(x: BigNumber): BigNumber;
        acsc(x: MathArray): MathArray;
        acsc(x: Matrix): Matrix;

        /**
         * Calculate the hyperbolic arccosecant of a value, defined as acsch(x)
         * = ln(1/x + sqrt(1/x^2 + 1)). For matrices, the function is evaluated
         * element wise.
         * @param x Function input
         * @returns The hyperbolic arccosecant of x
         */
        acsch(x: number): number;
        acsch(x: BigNumber): BigNumber;
        acsch(x: MathArray): MathArray;
        acsch(x: Matrix): Matrix;

        /**
         * Calculate the inverse secant of a value. For matrices, the function
         * is evaluated element wise.
         * @param x Function input
         * @returns The arc secant of x
         */
        asec(x: number): number;
        asec(x: BigNumber): BigNumber;
        asec(x: MathArray): MathArray;
        asec(x: Matrix): Matrix;

        /**
         * Calculate the hyperbolic arcsecant of a value, defined as asech(x) =
         * ln(sqrt(1/x^2 - 1) + 1/x). For matrices, the function is evaluated
         * element wise.
         * @param x Function input
         * @returns The hyperbolic arcsecant of x
         */
        asech(x: number): number;
        asech(x: BigNumber): BigNumber;
        asech(x: MathArray): MathArray;
        asech(x: Matrix): Matrix;

        /**
         * Calculate the inverse sine of a value. For matrices, the function is
         * evaluated element wise.
         * @param x Function input
         * @returns The arc sine of x
         */
        asin(x: number): number;
        asin(x: BigNumber): BigNumber;
        asin(x: Complex): Complex;
        asin(x: MathArray): MathArray;
        asin(x: Matrix): Matrix;

        /**
         * Calculate the hyperbolic arcsine of a value, defined as asinh(x) =
         * ln(x + sqrt(x^2 + 1)). For matrices, the function is evaluated
         * element wise.
         * @param x Function input
         * @returns The hyperbolic arcsine of x
         */
        asinh(x: number): number;
        asinh(x: BigNumber): BigNumber;
        asinh(x: MathArray): MathArray;
        asinh(x: Matrix): Matrix;

        /**
         * Calculate the inverse tangent of a value. For matrices, the function
         * is evaluated element wise.
         * @param x Function input
         * @returns The arc tangent of x
         */
        atan(x: number): number;
        atan(x: BigNumber): BigNumber;
        atan(x: MathArray): MathArray;
        atan(x: Matrix): Matrix;

        /**
         * Calculate the inverse tangent function with two arguments, y/x. By
         * providing two arguments, the right quadrant of the computed angle can
         * be determined. For matrices, the function is evaluated element wise.
         * @param x Function input
         * @returns Four quadrant inverse tangent
         */
        atan2(y: number, x: number): number;
        atan2(y: MathArray | Matrix, x: MathArray | Matrix): MathArray | Matrix;

        /**
         * Calculate the hyperbolic arctangent of a value, defined as atanh(x) =
         * ln((1 + x)/(1 - x)) / 2. For matrices, the function is evaluated
         * element wise.
         * @param x Function input
         * @returns The hyperbolic arctangent of x
         */
        atanh(x: number): number;
        atanh(x: BigNumber): BigNumber;
        atanh(x: MathArray): MathArray;
        atanh(x: Matrix): Matrix;

        /**
         * Calculate the cosine of a value. For matrices, the function is
         * evaluated element wise.
         * @param x Function input
         * @returns The cosine of x
         */
        cos(x: number | Unit): number;
        cos(x: BigNumber): BigNumber;
        cos(x: Complex): Complex;
        cos(x: MathArray): MathArray;
        cos(x: Matrix): Matrix;

        /**
         * Calculate the hyperbolic cosine of a value, defined as cosh(x) = 1/2
         * * (exp(x) + exp(-x)). For matrices, the function is evaluated element
         * wise.
         * @param x Function input
         * @returns The hyperbolic cosine of x
         */
        cosh(x: number | Unit): number;
        cosh(x: BigNumber): BigNumber;
        cosh(x: Complex): Complex;
        cosh(x: MathArray): MathArray;
        cosh(x: Matrix): Matrix;

        /**
         * Calculate the cotangent of a value. cot(x) is defined as 1 / tan(x).
         * For matrices, the function is evaluated element wise.
         * @param x Function input
         * @returns The cotangent of x
         */
        cot(x: number | Unit): number;
        cot(x: Complex): Complex;
        cot(x: MathArray): MathArray;
        cot(x: Matrix): Matrix;

        /**
         * Calculate the hyperbolic cotangent of a value, defined as coth(x) = 1
         * / tanh(x). For matrices, the function is evaluated element wise.
         * @param x Function input
         * @returns The hyperbolic cotangent of x
         */
        coth(x: number | Unit): number;
        coth(x: Complex): Complex;
        coth(x: MathArray): MathArray;
        coth(x: Matrix): Matrix;

        /**
         * Calculate the cosecant of a value, defined as csc(x) = 1/sin(x). For
         * matrices, the function is evaluated element wise.
         * @param x Function input
         * @returns The cosecant hof x
         */
        csc(x: number | Unit): number;
        csc(x: Complex): Complex;
        csc(x: MathArray): MathArray;
        csc(x: Matrix): Matrix;

        /**
         * Calculate the hyperbolic cosecant of a value, defined as csch(x) = 1
         * / sinh(x). For matrices, the function is evaluated element wise.
         * @param x Function input
         * @returns The hyperbolic cosecant of x
         */
        csch(x: number | Unit): number;
        csch(x: Complex): Complex;
        csch(x: MathArray): MathArray;
        csch(x: Matrix): Matrix;

        /**
         * Calculate the secant of a value, defined as sec(x) = 1/cos(x). For
         * matrices, the function is evaluated element wise.
         * @param x Function input
         * @returns The secant of x
         */
        sec(x: number | Unit): number;
        sec(x: Complex): Complex;
        sec(x: MathArray): MathArray;
        sec(x: Matrix): Matrix;

        /**
         * Calculate the hyperbolic secant of a value, defined as sech(x) = 1 /
         * cosh(x). For matrices, the function is evaluated element wise.
         * @param x Function input
         * @returns The hyperbolic secant of x
         */
        sech(x: number | Unit): number;
        sech(x: Complex): Complex;
        sech(x: MathArray): MathArray;
        sech(x: Matrix): Matrix;

        /**
         * Calculate the sine of a value. For matrices, the function is
         * evaluated element wise.
         * @param x Function input
         * @returns The sine of x
         */
        sin(x: number | Unit): number;
        sin(x: BigNumber): BigNumber;
        sin(x: Complex): Complex;
        sin(x: MathArray): MathArray;
        sin(x: Matrix): Matrix;

        /**
         * Calculate the hyperbolic sine of a value, defined as sinh(x) = 1/2 *
         * (exp(x) - exp(-x)). For matrices, the function is evaluated element
         * wise.
         * @param x Function input
         * @returns The hyperbolic sine of x
         */
        sinh(x: number | Unit): number;
        sinh(x: BigNumber): BigNumber;
        sinh(x: Complex): Complex;
        sinh(x: MathArray): MathArray;
        sinh(x: Matrix): Matrix;

        /**
         * Calculate the tangent of a value. tan(x) is equal to sin(x) / cos(x).
         * For matrices, the function is evaluated element wise.
         * @param x Function input
         * @returns The tangent of x
         */
        tan(x: number | Unit): number;
        tan(x: BigNumber): BigNumber;
        tan(x: Complex): Complex;
        tan(x: MathArray): MathArray;
        tan(x: Matrix): Matrix;

        /**
         * Calculate the hyperbolic tangent of a value, defined as tanh(x) =
         * (exp(2 * x) - 1) / (exp(2 * x) + 1). For matrices, the function is
         * evaluated element wise.
         * @param x Function input
         * @returns The hyperbolic tangent of x
         */
        tanh(x: number | Unit): number;
        tanh(x: BigNumber): BigNumber;
        tanh(x: Complex): Complex;
        tanh(x: MathArray): MathArray;
        tanh(x: Matrix): Matrix;

        /*************************************************************************
         * Unit functions
         ************************************************************************/

        /**
         * Change the unit of a value. For matrices, the function is evaluated
         * element wise.
         * @param x The unit to be converted.
         * @param unit New unit. Can be a string like "cm" or a unit without
         * value.
         * @returns Value with changed, fixed unit
         */
        to(
            x: Unit | MathArray | Matrix,
            unit: Unit | string
        ): Unit | MathArray | Matrix;

        /*************************************************************************
         * Utils functions
         ************************************************************************/

        /**
         * Clone an object.
         * @param x Object to be cloned
         * @returns A clone of object x
         */
        clone(x: any): any;

        /**
         * Test whether a value is an integer number. The function supports
         * number, BigNumber, and Fraction. The function is evaluated
         * element-wise in case of Array or Matrix input.
         * @param x Value to be tested
         * @returns Returns true when x contains a numeric, integer value.
         * Throws an error in case of an unknown data type.
         */
        isInteger(
            x: number | BigNumber | Fraction | MathArray | Matrix
        ): boolean;

        /**
         * Test whether a value is NaN (not a number). The function supports
         * types number, BigNumber, Fraction, Unit and Complex. The function is
         * evaluated element-wise in case of Array or Matrix input.
         * @param x Value to be tested
         * @returns Returns true when x is NaN. Throws an error in case of an
         * unknown data type.
         */
        isNaN(
            x: number | BigNumber | Fraction | MathArray | Matrix | Unit
        ): boolean;

        /**
         * Test whether a value is negative: smaller than zero. The function
         * supports types number, BigNumber, Fraction, and Unit. The function is
         * evaluated element-wise in case of Array or Matrix input.
         * @param x Value to be tested
         * @returns Returns true when x is larger than zero. Throws an error in
         * case of an unknown data type.
         */
        isNegative(
            x: number | BigNumber | Fraction | MathArray | Matrix | Unit
        ): boolean;

        /**
         * Test whether a value is an numeric value. The function is evaluated
         * element-wise in case of Array or Matrix input.
         * @param x Value to be tested
         * @returns Returns true when x is a number, BigNumber, Fraction, or
         * boolean. Returns false for other types. Throws an error in case of
         * unknown types.
         */
        isNumeric(x: any): x is number | BigNumber | Fraction | boolean;

        /**
         * Test whether a value is positive: larger than zero. The function
         * supports types number, BigNumber, Fraction, and Unit. The function is
         * evaluated element-wise in case of Array or Matrix input.
         * @param x Value to be tested
         * @returns Returns true when x is larger than zero. Throws an error in
         * case of an unknown data type.
         */
        isPositive(
            x: number | BigNumber | Fraction | MathArray | Matrix | Unit
        ): boolean;

        /**
         * Test whether a value is prime: has no divisors other than itself and
         * one. The function supports type number, bignumber. The function is
         * evaluated element-wise in case of Array or Matrix input.
         * @param x Value to be tested
         * @returns Returns true when x is larger than zero. Throws an error in
         * case of an unknown data type.
         */
        isPrime(x: number | BigNumber | MathArray | Matrix): boolean;

        /**
         * Test whether a value is zero. The function can check for zero for
         * types number, BigNumber, Fraction, Complex, and Unit. The function is
         * evaluated element-wise in case of Array or Matrix input.
         * @param x Value to be tested
         * @returns Returns true when x is zero. Throws an error in case of an
         * unknown data type.
         */
        isZero(
            x:
                | number
                | BigNumber
                | Fraction
                | MathArray
                | Matrix
                | Unit
                | Complex
        ): boolean;

        /**
         * Determine the type of a variable.
         * @param x The variable for which to test the type
         * @returns Returns the name of the type. Primitive types are lower
         * case, non-primitive types are upper-camel-case. For example ‘number’,
         * ‘string’, ‘Array’, ‘Date’.
         */
        typeOf(x: any): string;

        /**
         * Import functions from an object or a module
         * To avoid errors when using one of the imported functions extend module like this:
         *
         * @example
         * // imported_math_functions.ts
         * declare module 'mathjs' {
         *      interface MathJsStatic {
         *          hello(a: number): number;
         *      }
         * }
         *
         * @param object An object with functions to be imported.
         * @param options An object with import options.
         */
        import(object: ImportObject | ImportObject[], options: ImportOptions): void;
    }

    /*************************************************************************
     * Factory and Dependencies
     ************************************************************************/
    interface FactoryDependencies {
        create: (factories: FactoryFunctionMap, config: ConfigOptions) => Partial<MathJsStatic>;
        factory: <T>(
            name: string,
            dependencies: MathJsFunctionName[],
            create: (injected: Partial<MathJsStatic>) => T,
            meta?: any,
        ) => FactoryFunction<T>;
        all: FactoryFunctionMap;

        typedDependencies: FactoryFunctionMap;
        ResultSetDependencies: FactoryFunctionMap;
        BigNumberDependencies: FactoryFunctionMap;
        ComplexDependencies: FactoryFunctionMap;
        FractionDependencies: FactoryFunctionMap;
        RangeDependencies: FactoryFunctionMap;
        MatrixDependencies: FactoryFunctionMap;
        DenseMatrixDependencies: FactoryFunctionMap;
        cloneDependencies: FactoryFunctionMap;
        isIntegerDependencies: FactoryFunctionMap;
        isNegativeDependencies: FactoryFunctionMap;
        isNumericDependencies: FactoryFunctionMap;
        hasNumericValueDependencies: FactoryFunctionMap;
        isPositiveDependencies: FactoryFunctionMap;
        isZeroDependencies: FactoryFunctionMap;
        isNaNDependencies: FactoryFunctionMap;
        typeOfDependencies: FactoryFunctionMap;
        typeofDependencies: FactoryFunctionMap;
        equalScalarDependencies: FactoryFunctionMap;
        SparseMatrixDependencies: FactoryFunctionMap;
        numberDependencies: FactoryFunctionMap;
        stringDependencies: FactoryFunctionMap;
        booleanDependencies: FactoryFunctionMap;
        bignumberDependencies: FactoryFunctionMap;
        complexDependencies: FactoryFunctionMap;
        fractionDependencies: FactoryFunctionMap;
        matrixDependencies: FactoryFunctionMap;
        splitUnitDependencies: FactoryFunctionMap;
        unaryMinusDependencies: FactoryFunctionMap;
        unaryPlusDependencies: FactoryFunctionMap;
        absDependencies: FactoryFunctionMap;
        applyDependencies: FactoryFunctionMap;
        addScalarDependencies: FactoryFunctionMap;
        cbrtDependencies: FactoryFunctionMap;
        ceilDependencies: FactoryFunctionMap;
        cubeDependencies: FactoryFunctionMap;
        expDependencies: FactoryFunctionMap;
        expm1Dependencies: FactoryFunctionMap;
        fixDependencies: FactoryFunctionMap;
        floorDependencies: FactoryFunctionMap;
        gcdDependencies: FactoryFunctionMap;
        lcmDependencies: FactoryFunctionMap;
        log10Dependencies: FactoryFunctionMap;
        log2Dependencies: FactoryFunctionMap;
        modDependencies: FactoryFunctionMap;
        multiplyScalarDependencies: FactoryFunctionMap;
        multiplyDependencies: FactoryFunctionMap;
        nthRootDependencies: FactoryFunctionMap;
        signDependencies: FactoryFunctionMap;
        sqrtDependencies: FactoryFunctionMap;
        squareDependencies: FactoryFunctionMap;
        subtractDependencies: FactoryFunctionMap;
        xgcdDependencies: FactoryFunctionMap;
        dotMultiplyDependencies: FactoryFunctionMap;
        bitAndDependencies: FactoryFunctionMap;
        bitNotDependencies: FactoryFunctionMap;
        bitOrDependencies: FactoryFunctionMap;
        bitXorDependencies: FactoryFunctionMap;
        argDependencies: FactoryFunctionMap;
        conjDependencies: FactoryFunctionMap;
        imDependencies: FactoryFunctionMap;
        reDependencies: FactoryFunctionMap;
        notDependencies: FactoryFunctionMap;
        orDependencies: FactoryFunctionMap;
        xorDependencies: FactoryFunctionMap;
        concatDependencies: FactoryFunctionMap;
        columnDependencies: FactoryFunctionMap;
        crossDependencies: FactoryFunctionMap;
        diagDependencies: FactoryFunctionMap;
        eyeDependencies: FactoryFunctionMap;
        filterDependencies: FactoryFunctionMap;
        flattenDependencies: FactoryFunctionMap;
        forEachDependencies: FactoryFunctionMap;
        getMatrixDataTypeDependencies: FactoryFunctionMap;
        identityDependencies: FactoryFunctionMap;
        kronDependencies: FactoryFunctionMap;
        mapDependencies: FactoryFunctionMap;
        onesDependencies: FactoryFunctionMap;
        rangeDependencies: FactoryFunctionMap;
        reshapeDependencies: FactoryFunctionMap;
        resizeDependencies: FactoryFunctionMap;
        rowDependencies: FactoryFunctionMap;
        sizeDependencies: FactoryFunctionMap;
        squeezeDependencies: FactoryFunctionMap;
        subsetDependencies: FactoryFunctionMap;
        transposeDependencies: FactoryFunctionMap;
        ctransposeDependencies: FactoryFunctionMap;
        zerosDependencies: FactoryFunctionMap;
        erfDependencies: FactoryFunctionMap;
        modeDependencies: FactoryFunctionMap;
        prodDependencies: FactoryFunctionMap;
        formatDependencies: FactoryFunctionMap;
        printDependencies: FactoryFunctionMap;
        toDependencies: FactoryFunctionMap;
        isPrimeDependencies: FactoryFunctionMap;
        numericDependencies: FactoryFunctionMap;
        divideScalarDependencies: FactoryFunctionMap;
        powDependencies: FactoryFunctionMap;
        roundDependencies: FactoryFunctionMap;
        logDependencies: FactoryFunctionMap;
        log1pDependencies: FactoryFunctionMap;
        nthRootsDependencies: FactoryFunctionMap;
        dotPowDependencies: FactoryFunctionMap;
        dotDivideDependencies: FactoryFunctionMap;
        lsolveDependencies: FactoryFunctionMap;
        usolveDependencies: FactoryFunctionMap;
        leftShiftDependencies: FactoryFunctionMap;
        rightArithShiftDependencies: FactoryFunctionMap;
        rightLogShiftDependencies: FactoryFunctionMap;
        andDependencies: FactoryFunctionMap;
        compareDependencies: FactoryFunctionMap;
        compareNaturalDependencies: FactoryFunctionMap;
        compareTextDependencies: FactoryFunctionMap;
        equalDependencies: FactoryFunctionMap;
        equalTextDependencies: FactoryFunctionMap;
        smallerDependencies: FactoryFunctionMap;
        smallerEqDependencies: FactoryFunctionMap;
        largerDependencies: FactoryFunctionMap;
        largerEqDependencies: FactoryFunctionMap;
        deepEqualDependencies: FactoryFunctionMap;
        unequalDependencies: FactoryFunctionMap;
        partitionSelectDependencies: FactoryFunctionMap;
        sortDependencies: FactoryFunctionMap;
        maxDependencies: FactoryFunctionMap;
        minDependencies: FactoryFunctionMap;
        ImmutableDenseMatrixDependencies: FactoryFunctionMap;
        IndexDependencies: FactoryFunctionMap;
        FibonacciHeapDependencies: FactoryFunctionMap;
        SpaDependencies: FactoryFunctionMap;
        UnitDependencies: FactoryFunctionMap;
        unitDependencies: FactoryFunctionMap;
        sparseDependencies: FactoryFunctionMap;
        createUnitDependencies: FactoryFunctionMap;
        acosDependencies: FactoryFunctionMap;
        acoshDependencies: FactoryFunctionMap;
        acotDependencies: FactoryFunctionMap;
        acothDependencies: FactoryFunctionMap;
        acscDependencies: FactoryFunctionMap;
        acschDependencies: FactoryFunctionMap;
        asecDependencies: FactoryFunctionMap;
        asechDependencies: FactoryFunctionMap;
        asinDependencies: FactoryFunctionMap;
        asinhDependencies: FactoryFunctionMap;
        atanDependencies: FactoryFunctionMap;
        atan2Dependencies: FactoryFunctionMap;
        atanhDependencies: FactoryFunctionMap;
        cosDependencies: FactoryFunctionMap;
        coshDependencies: FactoryFunctionMap;
        cotDependencies: FactoryFunctionMap;
        cothDependencies: FactoryFunctionMap;
        cscDependencies: FactoryFunctionMap;
        cschDependencies: FactoryFunctionMap;
        secDependencies: FactoryFunctionMap;
        sechDependencies: FactoryFunctionMap;
        sinDependencies: FactoryFunctionMap;
        sinhDependencies: FactoryFunctionMap;
        tanDependencies: FactoryFunctionMap;
        tanhDependencies: FactoryFunctionMap;
        setCartesianDependencies: FactoryFunctionMap;
        setDifferenceDependencies: FactoryFunctionMap;
        setDistinctDependencies: FactoryFunctionMap;
        setIntersectDependencies: FactoryFunctionMap;
        setIsSubsetDependencies: FactoryFunctionMap;
        setMultiplicityDependencies: FactoryFunctionMap;
        setPowersetDependencies: FactoryFunctionMap;
        setSizeDependencies: FactoryFunctionMap;
        setSymDifferenceDependencies: FactoryFunctionMap;
        setUnionDependencies: FactoryFunctionMap;
        addDependencies: FactoryFunctionMap;
        hypotDependencies: FactoryFunctionMap;
        normDependencies: FactoryFunctionMap;
        dotDependencies: FactoryFunctionMap;
        traceDependencies: FactoryFunctionMap;
        indexDependencies: FactoryFunctionMap;
        NodeDependencies: FactoryFunctionMap;
        AccessorNodeDependencies: FactoryFunctionMap;
        ArrayNodeDependencies: FactoryFunctionMap;
        AssignmentNodeDependencies: FactoryFunctionMap;
        BlockNodeDependencies: FactoryFunctionMap;
        ConditionalNodeDependencies: FactoryFunctionMap;
        ConstantNodeDependencies: FactoryFunctionMap;
        FunctionAssignmentNodeDependencies: FactoryFunctionMap;
        IndexNodeDependencies: FactoryFunctionMap;
        ObjectNodeDependencies: FactoryFunctionMap;
        OperatorNodeDependencies: FactoryFunctionMap;
        ParenthesisNodeDependencies: FactoryFunctionMap;
        RangeNodeDependencies: FactoryFunctionMap;
        RelationalNodeDependencies: FactoryFunctionMap;
        SymbolNodeDependencies: FactoryFunctionMap;
        FunctionNodeDependencies: FactoryFunctionMap;
        parseDependencies: FactoryFunctionMap;
        compileDependencies: FactoryFunctionMap;
        evaluateDependencies: FactoryFunctionMap;
        evalDependencies: FactoryFunctionMap;
        ParserDependencies: FactoryFunctionMap;
        parserDependencies: FactoryFunctionMap;
        lupDependencies: FactoryFunctionMap;
        qrDependencies: FactoryFunctionMap;
        sluDependencies: FactoryFunctionMap;
        lusolveDependencies: FactoryFunctionMap;
        HelpDependencies: FactoryFunctionMap;
        ChainDependencies: FactoryFunctionMap;
        helpDependencies: FactoryFunctionMap;
        chainDependencies: FactoryFunctionMap;
        detDependencies: FactoryFunctionMap;
        invDependencies: FactoryFunctionMap;
        expmDependencies: FactoryFunctionMap;
        sqrtmDependencies: FactoryFunctionMap;
        divideDependencies: FactoryFunctionMap;
        distanceDependencies: FactoryFunctionMap;
        intersectDependencies: FactoryFunctionMap;
        sumDependencies: FactoryFunctionMap;
        meanDependencies: FactoryFunctionMap;
        medianDependencies: FactoryFunctionMap;
        madDependencies: FactoryFunctionMap;
        varianceDependencies: FactoryFunctionMap;
        varDependencies: FactoryFunctionMap;
        quantileSeqDependencies: FactoryFunctionMap;
        stdDependencies: FactoryFunctionMap;
        combinationsDependencies: FactoryFunctionMap;
        gammaDependencies: FactoryFunctionMap;
        factorialDependencies: FactoryFunctionMap;
        kldivergenceDependencies: FactoryFunctionMap;
        multinomialDependencies: FactoryFunctionMap;
        permutationsDependencies: FactoryFunctionMap;
        pickRandomDependencies: FactoryFunctionMap;
        randomDependencies: FactoryFunctionMap;
        randomIntDependencies: FactoryFunctionMap;
        stirlingS2Dependencies: FactoryFunctionMap;
        bellNumbersDependencies: FactoryFunctionMap;
        catalanDependencies: FactoryFunctionMap;
        compositionDependencies: FactoryFunctionMap;
        simplifyDependencies: FactoryFunctionMap;
        derivativeDependencies: FactoryFunctionMap;
        rationalizeDependencies: FactoryFunctionMap;
        reviverDependencies: FactoryFunctionMap;
        eDependencies: FactoryFunctionMap;
        EDependencies: FactoryFunctionMap;
        falseDependencies: FactoryFunctionMap;
        iDependencies: FactoryFunctionMap;
        InfinityDependencies: FactoryFunctionMap;
        LN10Dependencies: FactoryFunctionMap;
        LN2Dependencies: FactoryFunctionMap;
        LOG10EDependencies: FactoryFunctionMap;
        LOG2EDependencies: FactoryFunctionMap;
        NaNDependencies: FactoryFunctionMap;
        nullDependencies: FactoryFunctionMap;
        phiDependencies: FactoryFunctionMap;
        piDependencies: FactoryFunctionMap;
        PIDependencies: FactoryFunctionMap;
        SQRT1_2Dependencies: FactoryFunctionMap;
        SQRT2Dependencies: FactoryFunctionMap;
        tauDependencies: FactoryFunctionMap;
        trueDependencies: FactoryFunctionMap;
        versionDependencies: FactoryFunctionMap;
        atomicMassDependencies: FactoryFunctionMap;
        avogadroDependencies: FactoryFunctionMap;
        bohrMagnetonDependencies: FactoryFunctionMap;
        bohrRadiusDependencies: FactoryFunctionMap;
        boltzmannDependencies: FactoryFunctionMap;
        classicalElectronRadiusDependencies: FactoryFunctionMap;
        conductanceQuantumDependencies: FactoryFunctionMap;
        coulombDependencies: FactoryFunctionMap;
        deuteronMassDependencies: FactoryFunctionMap;
        efimovFactorDependencies: FactoryFunctionMap;
        electricConstantDependencies: FactoryFunctionMap;
        electronMassDependencies: FactoryFunctionMap;
        elementaryChargeDependencies: FactoryFunctionMap;
        faradayDependencies: FactoryFunctionMap;
        fermiCouplingDependencies: FactoryFunctionMap;
        fineStructureDependencies: FactoryFunctionMap;
        firstRadiationDependencies: FactoryFunctionMap;
        gasConstantDependencies: FactoryFunctionMap;
        gravitationConstantDependencies: FactoryFunctionMap;
        gravityDependencies: FactoryFunctionMap;
        hartreeEnergyDependencies: FactoryFunctionMap;
        inverseConductanceQuantumDependencies: FactoryFunctionMap;
        klitzingDependencies: FactoryFunctionMap;
        loschmidtDependencies: FactoryFunctionMap;
        magneticConstantDependencies: FactoryFunctionMap;
        magneticFluxQuantumDependencies: FactoryFunctionMap;
        molarMassDependencies: FactoryFunctionMap;
        molarMassC12Dependencies: FactoryFunctionMap;
        molarPlanckConstantDependencies: FactoryFunctionMap;
        molarVolumeDependencies: FactoryFunctionMap;
        neutronMassDependencies: FactoryFunctionMap;
        nuclearMagnetonDependencies: FactoryFunctionMap;
        planckChargeDependencies: FactoryFunctionMap;
        planckConstantDependencies: FactoryFunctionMap;
        planckLengthDependencies: FactoryFunctionMap;
        planckMassDependencies: FactoryFunctionMap;
        planckTemperatureDependencies: FactoryFunctionMap;
        planckTimeDependencies: FactoryFunctionMap;
        protonMassDependencies: FactoryFunctionMap;
        quantumOfCirculationDependencies: FactoryFunctionMap;
        reducedPlanckConstantDependencies: FactoryFunctionMap;
        rydbergDependencies: FactoryFunctionMap;
        sackurTetrodeDependencies: FactoryFunctionMap;
        secondRadiationDependencies: FactoryFunctionMap;
        speedOfLightDependencies: FactoryFunctionMap;
        stefanBoltzmannDependencies: FactoryFunctionMap;
        thomsonCrossSectionDependencies: FactoryFunctionMap;
        vacuumImpedanceDependencies: FactoryFunctionMap;
        weakMixingAngleDependencies: FactoryFunctionMap;
        wienDisplacementDependencies: FactoryFunctionMap;
        applyTransformDependencies: FactoryFunctionMap;
        columnTransformDependencies: FactoryFunctionMap;
        filterTransformDependencies: FactoryFunctionMap;
        forEachTransformDependencies: FactoryFunctionMap;
        indexTransformDependencies: FactoryFunctionMap;
        mapTransformDependencies: FactoryFunctionMap;
        maxTransformDependencies: FactoryFunctionMap;
        meanTransformDependencies: FactoryFunctionMap;
        minTransformDependencies: FactoryFunctionMap;
        rangeTransformDependencies: FactoryFunctionMap;
        rowTransformDependencies: FactoryFunctionMap;
        subsetTransformDependencies: FactoryFunctionMap;
        concatTransformDependencies: FactoryFunctionMap;
        stdTransformDependencies: FactoryFunctionMap;
        sumTransformDependencies: FactoryFunctionMap;
        varianceTransformDependencies: FactoryFunctionMap;
    }

    interface Matrix {
        type: string;
        storage(): string;
        datatype(): string;
        create(data: MathArray, datatype?: string): void;
        density(): number;
        subset(index: Index, replacement?: any, defaultValue?: any): Matrix;
        get(index: number[]): any;
        set(
            index: number[],
            value: any,
            defaultValue?: number | string
        ): Matrix;
        resize(
            size: MathArray | Matrix,
            defaultValue?: number | string
        ): Matrix;
        clone(): Matrix;
        size(): number[];
        map(
            callback: (a: any, b: number, c: Matrix) => any,
            skipZeros?: boolean
        ): Matrix;
        forEach(
            callback: (a: any, b: number, c: Matrix) => void,
            skipZeros?: boolean
        ): void;
        toArray(): MathArray | Matrix;
        valueOff(): MathArray | Matrix;
        format(options?: FormatOptions | number | ((value: any) => string)): string;
        toString(): string;
        toJSON(): any;
        diagonal(k?: number | BigNumber): any[];
        swapRows(i: number, j: number): Matrix;
    }

    interface BigNumber extends Decimal {} // tslint:disable-line no-empty-interface

    interface Fraction {
        s: number;
        n: number;
        d: number;
    }

    interface Complex {
        re: number;
        im: number;
        clone(): Complex;
        equals(other: Complex): boolean;
        format(precision?: number): string;
        fromJSON(json: object): Complex;
        fromPolar(polar: object): Complex;
        fromPolar(r: number, phi: number): Complex;
        toJSON(): object;
        toPolar(): PolarCoordinates;
        toString(): string;
        compare(a: Complex, b: Complex): number;
    }

    interface PolarCoordinates {
        r: number;
        phi: number;
    }

    interface MathJSON {
        mathjs?: string;
        value: number;
        unit: string;
        fixPrefix?: boolean;
    }

    interface Unit {
        valueOf(): string;
        clone(): Unit;
        hasBase(base: any): boolean;
        equalBase(unit: Unit): boolean;
        equals(unit: Unit): boolean;
        multiply(unit: Unit): Unit;
        divide(unit: Unit): Unit;
        pow(unit: Unit): Unit;
        abs(unit: Unit): Unit;
        to(unit: string): Unit;
        toNumber(unit: string): number;
        toNumeric(unit: string): number | Fraction | BigNumber;
        toSI(): Unit;
        toString(): string;
        toJSON(): MathJSON;
        formatUnits(): string;
        format(options: FormatOptions): string;
        splitUnit(parts: ReadonlyArray<string | Unit>): Unit[];
    }

    interface CreateUnitOptions {
        prefixes?: "none" | "short" | "long" | "binary_short" | "binary_long";
        aliases?: string[];
        offset?: number;
        override?: boolean;
    }

    interface UnitDefinition {
        definition?: string | Unit;
        prefixes?: string;
        offset?: number;
        aliases?: string[];
    }

    interface Index {} // tslint:disable-line no-empty-interface

    interface EvalFunction {
        evaluate(scope?: any): any;
    }

    interface MathNode {
        isNode: boolean;
        isAccessorNode?: boolean;
        isArrayNode?: boolean;
        isAssignmentNode?: boolean;
        isBlockNode?: boolean;
        isConditionalnode?: boolean;
        isConstantNode?: boolean;
        isFunctionAssignmentNode?: boolean;
        isFunctionNode?: boolean;
        isIndexNode?: boolean;
        isObjectNode?: boolean;
        isOperatorNode?: boolean;
        isParenthesisNode?: boolean;
        isRangeNode?: boolean;
        isSymbolNode?: boolean;
        isUpdateNode?: boolean;
        comment?: string;
        op?: string;
        fn?: string;
        args?: MathNode[];
        type: string;
        name?: string;
        value?: any;

        /**
         * Create a shallow clone of the node. The node itself is cloned, its
         * childs are not cloned.
         */
        clone(): MathNode;
        /**
         * Create a deep clone of the node. Both the node as well as all its
         * childs are cloned recursively.
         */
        cloneDeep(): MathNode;
        /**
         * Compile an expression into optimized JavaScript code. compile returns
         * an object with a function evaluate([scope]) to evaluate. Example:
         */
        compile(): EvalFunction;
        /**
         * Compile and eval an expression, this is the equivalent of doing
         * node.compile().evaluate(scope). Example:
         */
        evaluate(expr?: any): any;
        /**
         * Test whether this node equals an other node. Does a deep comparison
         * of the values of both nodes.
         */
        equals(other: MathNode): boolean;
        /**
         *
         * Filter nodes in an expression tree. The callback function is called
         * as callback(node: MathNode, path: string, parent: MathNode) : boolean
         * for every node in the tree, and must return a boolean. The function
         * filter returns an array with nodes for which the test returned true.
         * Parameter path is a string containing a relative JSON Path.
         *
         * Example:
         *
         * ```
         * var node = math.parse('x^2 + x/4 + 3*y');
         * var filtered = node.filter(function (node) {
         * return node.isSymbolMathNode && node.name == 'x';
         * });
         * // returns an array with two entries: two SymbolMathNodes 'x'
         * ```
         *
         * The callback function is called as callback(node: MathNode, path:
         * string, parent: MathNode) : boolean for every node in the tree, and
         * must return a boolean. The function filter returns an array with
         * nodes for which the test returned true. Parameter path is a string
         * containing a relative JSON Path.
         * @return Returns an array with nodes for which test returned true
         */
        filter(
            callback: (node: MathNode, path: string, parent: MathNode) => any
        ): MathNode[];

        /**
         * [forEach description]
         */
        forEach(
            callback: (node: MathNode, path: string, parent: MathNode) => any
        ): MathNode[];

        /**
         * Transform a node. Creates a new MathNode having it’s child's be the
         * results of calling the provided callback function for each of the
         * child's of the original node. The callback function is called as
         * `callback(child: MathNode, path: string, parent: MathNode)` and must
         * return a MathNode. Parameter path is a string containing a relative
         * JSON Path.
         *
         *
         * See also transform, which is a recursive version of map.
         */
        map(
            callback: (
                node: MathNode,
                path: string,
                parent: MathNode
            ) => MathNode
        ): MathNode;

        /**
         * Get a HTML representation of the parsed expression.
         */
        toHtml(options?: object): string;

        /**
         * Get a string representation of the parsed expression. This is not
         * exactly the same as the original input.
         */
        toString(options?: object): string;

        /**
         * Get a LaTeX representation of the expression.
         */
        toTex(options?: object): string;

        /**
         * Recursively transform an expression tree via a transform function.
         * Similar to Array.map, but recursively executed on all nodes in the
         * expression tree. The callback function is a mapping function
         * accepting a node, and returning a replacement for the node or the
         * original node. Function callback is called as callback(node:
         * MathNode, path: string, parent: MathNode) for every node in the tree,
         * and must return a MathNode. Parameter path is a string containing a
         * relative JSON Path.
         *
         * For example, to replace all nodes of type SymbolMathNode having name
         * ‘x’ with a ConstantMathNode with value 3:
         * ```js
         * var node = math.parse('x^2 + 5*x');
         * var transformed = node.transform(function (node, path, parent) {
         *   if (node.SymbolMathNode && node.name == 'x') {
         *     return new math.expression.node.ConstantMathNode(3);
         *   }
         *   else {
         *     return node;
         *   }
         * });
         * transformed.toString(); // returns '(3 ^ 2) + (5 * 3)'
         * ```
         */
        transform(
            callback: (
                node: MathNode,
                path: string,
                parent: MathNode
            ) => MathNode
        ): MathNode;

        /**
         * `traverse(callback)`
         *
         * Recursively traverse all nodes in a node tree. Executes given
         * callback for this node and each of its child nodes. Similar to
         * Array.forEach, except recursive. The callback function is a mapping
         * function accepting a node, and returning a replacement for the node
         * or the original node. Function callback is called as callback(node:
         * MathNode, path: string, parent: MathNode) for every node in the tree.
         * Parameter path is a string containing a relative JSON Path. Example:
         *
         * ```
         * var node = math.parse('3 * x + 2');
         * node.traverse(function (node, path, parent) {
         * switch (node.type) {
         * case 'OperatorMathNode': console.log(node.type, node.op);    break;
         * case 'ConstantMathNode': console.log(node.type, node.value); break;
         * case 'SymbolMathNode':   console.log(node.type, node.name);  break;
         * default:             console.log(node.type);
         * }
         * });
         * // outputs:
         * //   OperatorMathNode +
         * //   OperatorMathNode *
         * //   ConstantMathNode 3
         * //   SymbolMathNode x
         * //   ConstantMathNode 2
         * ```
         */
        traverse(
            callback: (node: MathNode, path: string, parent: MathNode) => void
        ): any;
    }

    interface Parser {
        evaluate(expr: string): any;
        get(variable: string): any;
        getAll(): { [key: string]: any; };
        set: (variable: string, value: any) => void;
        clear: () => void;
    }

    interface Distribution {
        random(size: any, min?: any, max?: any): any;
        randomInt(min: any, max?: any): any;
        pickRandom(array: any): any;
    }

    interface FormatOptions {
        /**
         * Number notation. Choose from: 'fixed' Always use regular number
         * notation. For example '123.40' and '14000000' 'exponential' Always
         * use exponential notation. For example '1.234e+2' and '1.4e+7' 'auto'
         * (default) Regular number notation for numbers having an absolute
         * value between lower and upper bounds, and uses exponential notation
         * elsewhere. Lower bound is included, upper bound is excluded. For
         * example '123.4' and '1.4e7'.
         */
        notation?: "fixed" | "exponential" | "engineering" | "auto";

        /**
         * A number between 0 and 16 to round the digits of the number. In case
         * of notations 'exponential' and 'auto', precision defines the total
         * number of significant digits returned and is undefined by default. In
         * case of notation 'fixed', precision defines the number of significant
         * digits after the decimal point, and is 0 by default.
         */
        precision?: number;

        /**
         * Exponent determining the lower boundary for formatting a value with
         * an exponent when notation='auto. Default value is -3.
         */
        lowerExp?: number;

        /**
         * Exponent determining the upper boundary for formatting a value with
         * an exponent when notation='auto. Default value is 5.
         */
        upperExp?: number;

        /**
         * Available values: 'ratio' (default) or 'decimal'. For example
         * format(fraction(1, 3)) will output '1/3' when 'ratio' is configured,
         * and will output 0.(3) when 'decimal' is configured.
         */
        fraction?: string;
    }

    interface Help {
        toString(): string;
        toJSON(): string;
    }

    interface ConfigOptions {
        epsilon?: number;
        matrix?: string;
        number?: string;
        precision?: number;
        parenthesis?: string;
        randomSeed?: string;
    }

    interface MathJsJson {
        /**
         * Returns reviver function that can be used as reviver in JSON.parse function.
         */
        reviver(): (key: any, value: any) => any;
    }

    interface MathJsChain {
        done(): any;

        /*************************************************************************
         * Construction functions
         ************************************************************************/

        /**
         * Create a BigNumber, which can store numbers with arbitrary precision.
         * When a matrix is provided, all elements will be converted to
         * BigNumber.
         */
        bignumber(): MathJsChain;

        /**
         * Create a boolean or convert a string or number to a boolean. In case
         * of a number, true is returned for non-zero numbers, and false in case
         * of zero. Strings can be 'true' or 'false', or can contain a number.
         * When value is a matrix, all elements will be converted to boolean.
         */
        boolean(): MathJsChain;

        /**
         * Create a complex value or convert a value to a complex value.
         * @param im Argument specifying the imaginary part of the complex
         * number
         */
        complex(im?: number): MathJsChain;

        /**
         * Create a user-defined unit and register it with the Unit type.
         * @param definition Definition of the unit in terms of existing units.
         * For example, ‘0.514444444 m / s’.
         * @param options (optional) An object containing any of the following
         * properties:</br>- prefixes {string} “none”, “short”, “long”,
         * “binary_short”, or “binary_long”. The default is “none”.</br>-
         * aliases {Array} Array of strings. Example: [‘knots’, ‘kt’,
         * ‘kts’]</br>- offset {Numeric} An offset to apply when converting from
         * the unit. For example, the offset for celsius is 273.15. Default is
         * 0.
         */
        createUnit(
            definition?: string | UnitDefinition,
            options?: CreateUnitOptions
        ): MathJsChain;
        /**
         * Create a user-defined unit and register it with the Unit type.
         * @param options (optional) An object containing any of the following
         * properties:</br>- prefixes {string} “none”, “short”, “long”,
         * “binary_short”, or “binary_long”. The default is “none”.</br>-
         * aliases {Array} Array of strings. Example: [‘knots’, ‘kt’,
         * ‘kts’]</br>- offset {Numeric} An offset to apply when converting from
         * the unit. For example, the offset for celsius is 273.15. Default is
         * 0.
         */
        createUnit(options?: CreateUnitOptions): MathJsChain;

        /**
         * Create a fraction convert a value to a fraction.
         * @param denominator Argument specifying the denominator of the
         * fraction
         */
        fraction(
            denominator?: number | string | MathArray | Matrix
        ): MathJsChain;

        /**
         * Create an index. An Index can store ranges having start, step, and
         * end for multiple dimensions. Matrix.get, Matrix.set, and math.subset
         * accept an Index as input.
         */
        index(): MathJsChain;

        /**
         * Create a Matrix. The function creates a new math.type.Matrix object
         * from an Array. A Matrix has utility functions to manipulate the data
         * in the matrix, like getting the size and getting or setting values in
         * the matrix. Supported storage formats are 'dense' and 'sparse'.
         */
        matrix(format?: "sparse" | "dense", dataType?: string): MathJsChain;

        /**
         * Create a number or convert a string, boolean, or unit to a number.
         * When value is a matrix, all elements will be converted to number.
         * @param valuelessUnit A valueless unit, used to convert a unit to a
         * number
         */
        number(valuelessUnit?: Unit | string): MathJsChain;

        /**
         * Create a Sparse Matrix. The function creates a new math.type.Matrix
         * object from an Array. A Matrix has utility functions to manipulate
         * the data in the matrix, like getting the size and getting or setting
         * values in the matrix.
         * @param dataType Sparse Matrix data type
         */
        sparse(dataType?: string): MathJsChain;

        /**
         * Split a unit in an array of units whose sum is equal to the original
         * unit.
         * @param parts An array of strings or valueless units
         */
        splitUnit(parts: Unit[]): MathJsChain;

        /**
         * Create a string or convert any object into a string. Elements of
         * Arrays and Matrices are processed element wise.
         */
        string(): MathJsChain;

        /**
         * Create a unit. Depending on the passed arguments, the function will
         * create and return a new math.type.Unit object. When a matrix is
         * provided, all elements will be converted to units.
         * @param unit The unit to be created
         */
        unit(unit?: string): MathJsChain;

        /*************************************************************************
         * Expression functions
         ************************************************************************/

        /**
         * Parse and compile an expression. Returns a an object with a function
         * evaluate([scope]) to evaluate the compiled expression.
         */
        compile(): MathJsChain;

        /**
         * Evaluate an expression.
         * @param scope Scope to read/write variables
         */
        evaluate(scope?: object): MathJsChain;

        /**
         * Retrieve help on a function or data type. Help files are retrieved
         * from the documentation in math.expression.docs.
         */
        help(): MathJsChain;

        /**
         * Parse an expression. Returns a node tree, which can be evaluated by
         * invoking node.evaluate();
         * @param options Available options: nodes - a set of custome nodes
         */
        parse(options?: any): MathJsChain;
        /**
         * @param options Available options: nodes - a set of custome nodes
         */
        parse(options?: any): MathJsChain;

        /**
         * Create a parser. The function creates a new math.expression.Parser
         * object.
         */
        parser(): MathJsChain;

        /*************************************************************************
         * Algebra functions
         ************************************************************************/
        /**
         * @param variable The variable over which to differentiate
         * @param options There is one option available, simplify, which is true
         * by default. When false, output will not be simplified.
         */
        derivative(variable: MathNode | string, options?: {simplify: boolean}): MathJsChain;

        /**
         * Solves the linear equation system by forwards substitution. Matrix
         * must be a lower triangular matrix.
         * @param b A column vector with the b values
         */
        lsolve(b: Matrix | MathArray): MathJsChain;

        /**
         * Calculate the Matrix LU decomposition with partial pivoting. Matrix A
         * is decomposed in two matrices (L, U) and a row permutation vector p
         * where A[p,:] = L * U
         */
        lup(): MathJsChain;

        /**
         * Solves the linear system A * x = b where A is an [n x n] matrix and b
         * is a [n] column vector.
         * @param b Column Vector
         * @param order The Symbolic Ordering and Analysis order, see slu for
         * details. Matrix must be a SparseMatrix
         * @param threshold Partial pivoting threshold (1 for partial pivoting),
         * see slu for details. Matrix must be a SparseMatrix.
         */
        lusolve(
            b: Matrix | MathArray,
            order?: number,
            threshold?: number
        ): MathJsChain;

        /**
         * Calculate the Matrix QR decomposition. Matrix A is decomposed in two
         * matrices (Q, R) where Q is an orthogonal matrix and R is an upper
         * triangular matrix.
         */
        qr(): MathJsChain;

        /**
         * Transform a rationalizable expression in a rational fraction. If
         * rational fraction is one variable polynomial then converts the
         * numerator and denominator in canonical form, with decreasing
         * exponents, returning the coefficients of numerator.
         * @param optional scope of expression or true for already evaluated
         * rational expression at input
         * @param detailed  optional True if return an object, false if return
         * expression node (default)
         */
        rationalize(optional?: object | boolean, detailed?: boolean): MathJsChain;

        /**
         * Simplify an expression tree.
         * @param rules A list of rules are applied to an expression, repeating
         * over the list until no further changes are made. It’s possible to
         * pass a custom set of rules to the function as second argument. A rule
         * can be specified as an object, string, or function.
         * @param scope Scope to variables
         */
        simplify(
            rules?: Array<({ l: string; r: string } | string | ((node: MathNode) => MathNode))>,
            scope?: object
        ): MathJsChain;

        /**
         * Calculate the Sparse Matrix LU decomposition with full pivoting.
         * Sparse Matrix A is decomposed in two matrices (L, U) and two
         * permutation vectors (pinv, q) where P * A * Q = L * U
         * @param order The Symbolic Ordering and Analysis order: 0 - Natural
         * ordering, no permutation vector q is returned 1 - Matrix must be
         * square, symbolic ordering and analisis is performed on M = A + A' 2 -
         * Symbolic ordering and analysis is performed on M = A' * A. Dense
         * columns from A' are dropped, A recreated from A'. This is appropriate
         * for LU factorization of non-symmetric matrices. 3 - Symbolic ordering
         * and analysis is performed on M = A' * A. This is best used for LU
         * factorization is matrix M has no dense rows. A dense row is a row
         * with more than 10*sqr(columns) entries.
         * @param threshold Partial pivoting threshold (1 for partial pivoting)
         */
        slu(order: number, threshold: number): MathJsChain;

        /**
         * Solves the linear equation system by backward substitution. Matrix
         * must be an upper triangular matrix. U * x = b
         * @param b A column vector with the b values
         */
        usolve(b: Matrix | MathArray): MathJsChain;

        /*************************************************************************
         * Arithmetic functions
         ************************************************************************/

        /**
         * Calculate the absolute value of a number. For matrices, the function
         * is evaluated element wise.
         */
        abs(): MathJsChain;

        /**
         * Add two values, x + y. For matrices, the function is evaluated
         * element wise.
         * @param y Second value to add
         */
        add(y: MathType): MathJsChain;

        /**
         * Calculate the cubic root of a value. For matrices, the function is
         * evaluated element wise.
         * @param allRoots Optional, false by default. Only applicable when x is
         * a number or complex number. If true, all complex roots are returned,
         * if false (default) the principal root is returned.
         */
        cbrt(allRoots?: boolean): MathJsChain;

        /**
         * Round a value towards plus infinity If x is complex, both real and
         * imaginary part are rounded towards plus infinity. For matrices, the
         * function is evaluated element wise.
         */
        ceil(): MathJsChain;

        /**
         * Compute the cube of a value, x * x * x. For matrices, the function is
         * evaluated element wise.
         */
        cube(): MathJsChain;

        /**
         * Divide two values, x / y. To divide matrices, x is multiplied with
         * the inverse of y: x * inv(y).
         * @param y Denominator
         */
        divide(y: MathType): MathJsChain;

        /**
         * Divide two matrices element wise. The function accepts both matrices
         * and scalar values.
         * @param y Denominator
         */
        dotDivide(y: MathType): MathJsChain;

        /**
         * Multiply two matrices element wise. The function accepts both
         * matrices and scalar values.
         * @param y Right hand value
         */
        dotMultiply(y: MathType): MathJsChain;

        /**
         * Calculates the power of x to y element wise.
         * @param y The exponent
         */
        dotPow(y: MathType): MathJsChain;

        /**
         * Calculate the exponent of a value. For matrices, the function is
         * evaluated element wise.
         */
        exp(): MathJsChain;

        /**
         * Calculate the value of subtracting 1 from the exponential value. For
         * matrices, the function is evaluated element wise.
         */
        expm1(): MathJsChain;

        /**
         * Round a value towards zero. For matrices, the function is evaluated
         * element wise.
         */
        fix(): MathJsChain;

        /**
         * Round a value towards minus infinity. For matrices, the function is
         * evaluated element wise.
         */
        floor(): MathJsChain;

        /**
         * Calculate the greatest common divisor for two or more values or
         * arrays. For matrices, the function is evaluated element wise.
         */
        gcd(): MathJsChain;

        /**
         * Calculate the hypotenusa of a list with values. The hypotenusa is
         * defined as: hypot(a, b, c, ...) = sqrt(a^2 + b^2 + c^2 + ...) For
         * matrix input, the hypotenusa is calculated for all values in the
         * matrix.
         */
        hypot(): MathJsChain;

        /**
         * Calculate the least common multiple for two or more values or arrays.
         * lcm is defined as: lcm(a, b) = abs(a * b) / gcd(a, b) For matrices,
         * the function is evaluated element wise.
         * @param b An integer number
         */
        lcm(b: number | BigNumber | MathArray | Matrix): MathJsChain;

        /**
         * Calculate the logarithm of a value. For matrices, the function is
         * evaluated element wise.
         * @param base Optional base for the logarithm. If not provided, the
         * natural logarithm of x is calculated. Default value: e.
         */
        log(base?: number | BigNumber | Complex): MathJsChain;

        /**
         * Calculate the 10-base of a value. This is the same as calculating
         * log(x, 10). For matrices, the function is evaluated element wise.
         */
        log10(): MathJsChain;

        /**
         * Calculate the logarithm of a value+1. For matrices, the function is
         * evaluated element wise.
         */
        log1p(base?: number | BigNumber | Complex): MathJsChain;
        /**
         * Calculate the 2-base of a value. This is the same as calculating
         * log(x, 2). For matrices, the function is evaluated element wise.
         */
        log2(): MathJsChain;
        /**
         * Calculates the modulus, the remainder of an integer division. For
         * matrices, the function is evaluated element wise. The modulus is
         * defined as: x - y * floor(x / y)
         * @see http://en.wikipedia.org/wiki/Modulo_operation.
         * @param y Divisor
         */
        mod(y: number | BigNumber | Fraction | MathArray | Matrix): MathJsChain;

        /**
         * Multiply two values, x * y. The result is squeezed. For matrices, the
         * matrix product is calculated.
         * @param y The second value to multiply
         */
        multiply(y: MathType): MathJsChain;

        /**
         * Calculate the norm of a number, vector or matrix. The second
         * parameter p is optional. If not provided, it defaults to 2.
         * @param p Vector space. Supported numbers include Infinity and
         * -Infinity. Supported strings are: 'inf', '-inf', and 'fro' (The
         * Frobenius norm) Default value: 2.
         */
        norm(p?: number | BigNumber | string): MathJsChain;

        /**
         * Calculate the nth root of a value. The principal nth root of a
         * positive real number A, is the positive real solution of the equation
         * x^root = A For matrices, the function is evaluated element wise.
         * @param root The root. Default value: 2.
         */
        nthRoot(root?: number | BigNumber): MathJsChain;

        /**
         * Calculates the power of x to y, x ^ y. Matrix exponentiation is
         * supported for square matrices x, and positive integer exponents y.
         * @param y The exponent
         */
        pow(): MathJsChain;

        /**
         * Round a value towards the nearest integer. For matrices, the function
         * is evaluated element wise.
         * @param n Number of decimals Default value: 0.
         */
        round(n?: number | BigNumber | MathArray): MathJsChain;

        /**
         * Compute the sign of a value. The sign of a value x is: 1 when x > 1
         * -1 when x < 0 0 when x == 0 For matrices, the function is evaluated
         * element wise.
         * @param x The number for which to determine the sign
         * @returns The sign of x
         */
        sign(): MathJsChain;

        /**
         * Calculate the square root of a value. For matrices, the function is
         * evaluated element wise.
         */
        sqrt(): MathJsChain;

        /**
         * Compute the square of a value, x * x. For matrices, the function is
         * evaluated element wise.
         */
        square(): MathJsChain;

        /**
         * Subtract two values, x - y. For matrices, the function is evaluated
         * element wise.
         * @param y Value to subtract from x
         */
        subtract(y: MathType): MathJsChain;

        /**
         * Inverse the sign of a value, apply a unary minus operation. For
         * matrices, the function is evaluated element wise. Boolean values and
         * strings will be converted to a number. For complex numbers, both real
         * and complex value are inverted.
         */
        unaryMinus(): MathJsChain;

        /**
         * Unary plus operation. Boolean values and strings will be converted to
         * a number, numeric values will be returned as is. For matrices, the
         * function is evaluated element wise.
         */
        unaryPlus(): MathJsChain;

        /**
         * Calculate the extended greatest common divisor for two values. See
         * http://en.wikipedia.org/wiki/Extended_Euclidean_algorithm.
         * @param b An integer number
         */
        xgcd(b: number | BigNumber): MathJsChain;

        /*************************************************************************
         * Bitwise functions
         ************************************************************************/

        /**
         * Bitwise AND two values, x & y. For matrices, the function is
         * evaluated element wise.
         * @param y Second value to and
         */
        bitAnd(y: number | BigNumber | MathArray | Matrix): MathJsChain;

        /**
         * Bitwise NOT value, ~x. For matrices, the function is evaluated
         * element wise. For units, the function is evaluated on the best prefix
         * base.
         */
        bitNot(): MathJsChain;

        /**
         * Bitwise OR two values, x | y. For matrices, the function is evaluated
         * element wise. For units, the function is evaluated on the lowest
         * print base.
         * @param y Second value to or
         */
        bitOr(y: number | BigNumber | MathArray | Matrix): MathJsChain;

        /**
         * Bitwise XOR two values, x ^ y. For matrices, the function is
         * evaluated element wise.
         * @param y Second value to xor
         */
        bitXor(y: number | BigNumber | MathArray | Matrix): MathJsChain;

        /**
         * Bitwise left logical shift of a value x by y number of bits, x << y.
         * For matrices, the function is evaluated element wise. For units, the
         * function is evaluated on the best prefix base.
         * @param y Amount of shifts
         */
        leftShift(y: number | BigNumber): MathJsChain;

        /**
         * Bitwise right arithmetic shift of a value x by y number of bits, x >>
         * y. For matrices, the function is evaluated element wise. For units,
         * the function is evaluated on the best prefix base.
         * @param y Amount of shifts
         */
        rightArithShift(y: number | BigNumber): MathJsChain;

        /**
         * Bitwise right logical shift of value x by y number of bits, x >>> y.
         * For matrices, the function is evaluated element wise. For units, the
         * function is evaluated on the best prefix base.
         * @param y Amount of shifts
         */
        rightLogShift(y: number): MathJsChain;

        /*************************************************************************
         * Combinatorics functions
         ************************************************************************/

        /**
         * The Bell Numbers count the number of partitions of a set. A partition
         * is a pairwise disjoint subset of S whose union is S. bellNumbers only
         * takes integer arguments. The following condition must be enforced: n
         * >= 0
         */
        bellNumbers(): MathJsChain;

        /**
         * The Catalan Numbers enumerate combinatorial structures of many
         * different types. catalan only takes integer arguments. The following
         * condition must be enforced: n >= 0
         */
        catalan(): MathJsChain;

        /**
         * The composition counts of n into k parts. Composition only takes
         * integer arguments. The following condition must be enforced: k <= n.
         * @param k Number of objects in the subset
         */
        composition(k: number | BigNumber): MathJsChain;

        /**
         * The Stirling numbers of the second kind, counts the number of ways to
         * partition a set of n labelled objects into k nonempty unlabelled
         * subsets. stirlingS2 only takes integer arguments. The following
         * condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) =
         * 1
         * @param k Number of objects in the subset
         */
        stirlingS2(k: number | BigNumber): MathJsChain;

        /*************************************************************************
         * Complex functions
         ************************************************************************/

        /**
         * Compute the argument of a complex value. For a complex number a + bi,
         * the argument is computed as atan2(b, a). For matrices, the function
         * is evaluated element wise.
         */
        arg(): MathJsChain;

        /**
         * Compute the complex conjugate of a complex value. If x = a+bi, the
         * complex conjugate of x is a - bi. For matrices, the function is
         * evaluated element wise.
         */
        conj(): MathJsChain;

        /**
         * Get the imaginary part of a complex number. For a complex number a +
         * bi, the function returns b. For matrices, the function is evaluated
         * element wise.
         */
        im(): MathJsChain;

        /**
         * Get the real part of a complex number. For a complex number a + bi,
         * the function returns a. For matrices, the function is evaluated
         * element wise.
         */
        re(): MathJsChain;

        /*************************************************************************
         * Geometry functions
         ************************************************************************/

        /**
         * Calculates: The eucledian distance between two points in 2 and 3
         * dimensional spaces. Distance between point and a line in 2 and 3
         * dimensional spaces. Pairwise distance between a set of 2D or 3D
         * points NOTE: When substituting coefficients of a line(a, b and c),
         * use ax + by + c = 0 instead of ax + by = c For parametric equation of
         * a 3D line, x0, y0, z0, a, b, c are from: (x−x0, y−y0, z−z0) = t(a, b,
         * c)
         * @param y Coordinates of the second point
         */
        distance(y: MathArray | Matrix | object): MathJsChain;

        /**
         * Calculates the point of intersection of two lines in two or three
         * dimensions and of a line and a plane in three dimensions. The inputs
         * are in the form of arrays or 1 dimensional matrices. The line
         * intersection functions return null if the lines do not meet. Note:
         * Fill the plane coefficients as x + y + z = c and not as x + y + z + c
         * = 0.
         * @param x Co-ordinates of second end-point of first line
         * @param y Co-ordinates of first end-point of second line OR
         * Coefficients of the plane's equation
         * @param z Co-ordinates of second end-point of second line OR null if
         * the calculation is for line and plane
         */
        intersect(
            x: MathArray | Matrix,
            y: MathArray | Matrix,
            z: MathArray | Matrix
        ): MathJsChain;

        /*************************************************************************
         * Logical functions
         ************************************************************************/

        /**
         * Logical and. Test whether two values are both defined with a
         * nonzero/nonempty value. For matrices, the function is evaluated
         * element wise.
         * @param y Second value to and
         */
        and(
            y: number | BigNumber | Complex | Unit | MathArray | Matrix
        ): MathJsChain;

        /**
         * Logical not. Flips boolean value of a given parameter. For matrices,
         * the function is evaluated element wise.
         */
        not(): MathJsChain;

        /**
         * Logical or. Test if at least one value is defined with a
         * nonzero/nonempty value. For matrices, the function is evaluated
         * element wise.
         * @param y Second value to or
         */
        or(
            y: number | BigNumber | Complex | Unit | MathArray | Matrix
        ): MathJsChain;

        /**
         * Logical xor. Test whether one and only one value is defined with a
         * nonzero/nonempty value. For matrices, the function is evaluated
         * element wise.
         * @param y Second value to xor
         */
        xor(
            y: number | BigNumber | Complex | Unit | MathArray | Matrix
        ): MathJsChain;

        /*************************************************************************
         * Matrix functions
         ************************************************************************/

        /**
         * Concatenate two or more matrices. dim: number is a zero-based
         * dimension over which to concatenate the matrices. By default the last
         * dimension of the matrices.
         */
        concat(): MathJsChain;

        /**
         * Calculate the cross product for two vectors in three dimensional
         * space. The cross product of A = [a1, a2, a3] and B =[b1, b2, b3] is
         * defined as: cross(A, B) = [ a2 * b3 - a3 * b2, a3 * b1 - a1 * b3, a1
         * * b2 - a2 * b1 ]
         * @param y Second vector
         */
        cross(y: MathArray | Matrix): MathJsChain;

        /**
         * Calculate the determinant of a matrix.
         */
        det(): MathJsChain;

        /**
         * Create a diagonal matrix or retrieve the diagonal of a matrix. When x
         * is a vector, a matrix with vector x on the diagonal will be returned.
         * When x is a two dimensional matrix, the matrixes kth diagonal will be
         * returned as vector. When k is positive, the values are placed on the
         * super diagonal. When k is negative, the values are placed on the sub
         * diagonal.
         * @param k The diagonal where the vector will be filled in or
         * retrieved. Default value: 0.
         * @param format The matrix storage format. Default value: 'dense'.
         */
        diag(format?: string): MathJsChain;
        diag(k: number | BigNumber, format?: string): MathJsChain;

        /**
         * Calculate the dot product of two vectors. The dot product of A = [a1,
         * a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as: dot(A,
         * B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn
         * @param y Second vector
         */
        dot(y: MathArray | Matrix): MathJsChain;

        /**
         * Compute the matrix exponential, expm(A) = e^A. The matrix must be
         * square. Not to be confused with exp(a), which performs element-wise
         * exponentiation. The exponential is calculated using the Padé
         * approximant with scaling and squaring; see “Nineteen Dubious Ways to
         * Compute the Exponential of a Matrix,” by Moler and Van Loan.
         */
        expm(): MathJsChain;

        /**
         * Create a 2-dimensional identity matrix with size m x n or n x n. The
         * matrix has ones on the diagonal and zeros elsewhere.
         * @param format The Matrix storage format
         */
        identity(format?: string): MathJsChain;
        /**
         * @param n The y dimension for the matrix
         * @param format The Matrix storage format
         */
        identity(n: number, format?: string): MathJsChain;

        /**
         * Filter the items in an array or one dimensional matrix.
         */
        filter(test: ((value: any, index: any, matrix: Matrix | MathArray) => Matrix | MathArray)| RegExp): MathJsChain;

        /**
         * Flatten a multi dimensional matrix into a single dimensional matrix.
         */
        flatten(): MathJsChain;

        /**
         * Iterate over all elements of a matrix/array, and executes the given
         * callback function.
         */
        forEach(callback: ((value: any, index: any, matrix: Matrix | MathArray) => void)): MathJsChain;

        /**
         * Calculate the inverse of a square matrix.
         */
        inv(): MathJsChain;

        /**
         * Calculate the kronecker product of two matrices or vectors
         * @param y Second vector
         */
        kron(y: Matrix | MathArray): MathJsChain;

        /**
         * Iterate over all elements of a matrix/array, and executes the given
         * callback function.
         * @param callback The callback function is invoked with three
         * parameters: the value of the element, the index of the element, and
         * the Matrix/array being traversed.
         */
        map(callback: ((value: any, index: any, matrix: Matrix | MathArray) => Matrix | MathArray)): MathJsChain;

        /**
         * Create a matrix filled with ones. The created matrix can have one or
         * multiple dimensions.
         * @param format The matrix storage format
         */
        ones(format?: string): MathJsChain;
        /**
         * @param format The matrix storage format
         */
        ones(n: number, format?: string): MathJsChain;
        /**
         * Partition-based selection of an array or 1D matrix. Will find the kth
         * smallest value, and mutates the input array. Uses Quickselect.
         * @param k The kth smallest value to be retrieved; zero-based index
         * @param compare  An optional comparator function. The function is
         * called as compare(a, b), and must return 1 when a > b, -1 when a < b,
         * and 0 when a == b. Default value: 'asc'.
         */
        partitionSelect(
            k: number,
            compare?: "asc" | "desc" | ((a: any, b: any) => number)
        ): MathJsChain;

        /**
         * Create an array from a range. By default, the range end is excluded.
         * This can be customized by providing an extra parameter includeEnd.
         * @param end End of the range, excluded by default, included when
         * parameter includeEnd=true
         * @param step Step size. Default value is 1.
         * @param includeEnd: Option to specify whether to include the end or
         * not. False by default
         */
        range(includeEnd?: boolean): Matrix;
        range(end: number | BigNumber, includeEnd?: boolean): MathJsChain;
        range(
            end: number | BigNumber,
            step: number | BigNumber,
            includeEnd?: boolean
        ): MathJsChain;

        /**
         * Reshape a multi dimensional array to fit the specified dimensions
         * @param sizes One dimensional array with integral sizes for each
         * dimension
         */
        reshape(sizes: number[]): MathJsChain;

        /**
         * Resize a matrix
         * @param size One dimensional array with numbers
         * @param defaultValue Zero by default, except in case of a string, in
         * that case defaultValue = ' ' Default value: 0.
         */
        resize(
            size: MathArray | Matrix,
            defaultValue?: number | string
        ): MathJsChain;

        /**
         * Calculate the size of a matrix or scalar.
         */
        size(): MathJsChain;

        /**
         * Sort the items in a matrix
         * @param compare An optional _comparator function or name. The function
         * is called as compare(a, b), and must return 1 when a > b, -1 when a <
         * b, and 0 when a == b. Default value: ‘asc’
         */
        sort(compare: ((a: any, b: any) => number) | "asc" | "desc" | "natural"): MathJsChain;

        /**
         * Calculate the principal square root of a square matrix. The principal
         * square root matrix X of another matrix A is such that X * X = A.
         */
        sqrtm(): MathJsChain;

        /**
         * Squeeze a matrix, remove inner and outer singleton dimensions from a
         * matrix.
         */
        squeeze(): MathJsChain;

        /**
         * Get or set a subset of a matrix or string.
         * @param index An index containing ranges for each dimension
         * @param replacement An array, matrix, or scalar. If provided, the
         * subset is replaced with replacement. If not provided, the subset is
         * returned
         * @param defaultValue Default value, filled in on new entries when the
         * matrix is resized. If not provided, math.matrix elements will be left
         * undefined. Default value: undefined.
         */
        subset(
            index: Index,
            replacement?: any,
            defaultValue?: any
        ): MathJsChain;

        /**
         * Calculate the trace of a matrix: the sum of the elements on the main
         * diagonal of a square matrix.
         */
        trace(): MathJsChain;

        /**
         * Transpose a matrix. All values of the matrix are reflected over its
         * main diagonal. Only two dimensional matrices are supported.
         */
        transpose(): MathJsChain;

        /**
         * Create a matrix filled with zeros. The created matrix can have one or
         * multiple dimensions.
         * @param format The matrix storage format
         * @returns A matrix filled with zeros
         */
        zeros(format?: string): MathJsChain;
        /**
         * @param n The y dimension of the matrix
         * @param format The matrix storage format
         */
        zeros(n: number, format?: string): MathJsChain;

        /*************************************************************************
         * Probability functions
         ************************************************************************/

        /**
         * Compute the number of ways of picking k unordered outcomes from n
         * possibilities. Combinations only takes integer arguments. The
         * following condition must be enforced: k <= n.
         * @param k Number of objects in the subset
         */
        combinations(k: number | BigNumber): MathJsChain;

        /**
         * Compute the factorial of a value Factorial only supports an integer
         * value as argument. For matrices, the function is evaluated element
         * wise.
         */
        factorial(): MathJsChain;

        /**
         * Compute the gamma function of a value using Lanczos approximation for
         * small values, and an extended Stirling approximation for large
         * values. For matrices, the function is evaluated element wise.
         */
        gamma(): MathJsChain;

        /**
         * Calculate the Kullback-Leibler (KL) divergence between two
         * distributions
         * @param p Second vector
         */
        kldivergence(p: MathArray | Matrix): MathJsChain;

        /**
         * Multinomial Coefficients compute the number of ways of picking a1,
         * a2, ..., ai unordered outcomes from n possibilities. multinomial
         * takes one array of integers as an argument. The following condition
         * must be enforced: every ai <= 0
         */
        multinomial(): MathJsChain;

        /**
         * Compute the number of ways of obtaining an ordered subset of k
         * elements from a set of n elements. Permutations only takes integer
         * arguments. The following condition must be enforced: k <= n.
         * @param k The number of objects in the subset
         */
        permutations(k?: number | BigNumber): MathJsChain;

        /**
         * Random pick a value from a one dimensional array. Array element is
         * picked using a random function with uniform distribution.
         * @param number An int or float
         * @param weights An array of ints or floats
         */
        pickRandom(number?: number, weights?: number[]): MathJsChain;

        /**
         * Return a random number larger or equal to min and smaller than max
         * using a uniform distribution.
         * @param min Minimum boundary for the random value, included
         * @param max Maximum boundary for the random value, excluded
         */
        // tslint:disable-next-line unified-signatures
        random(max?: number): MathJsChain;
        // tslint:disable-next-line unified-signatures
        random(min: number, max: number): MathJsChain;

        /**
         * Return a random integer number larger or equal to min and smaller
         * than max using a uniform distribution.
         * @param min Minimum boundary for the random value, included
         * @param max Maximum boundary for the random value, excluded
         */
        // tslint:disable-next-line unified-signatures
        randomInt(max?: number): MathJsChain;
        // tslint:disable-next-line unified-signatures
        randomInt(min: number, max: number): MathJsChain;

        /*************************************************************************
         * Relational functions
         ************************************************************************/

        /**
         * Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x
         * == y. x and y are considered equal when the relative difference
         * between x and y is smaller than the configured epsilon. The function
         * cannot be used to compare values smaller than approximately 2.22e-16.
         * For matrices, the function is evaluated element wise.
         * @param y Second value to compare
         */
        compare(y: MathType | string): MathJsChain;

        /**
         * Compare two values of any type in a deterministic, natural way. For
         * numeric values, the function works the same as math.compare. For
         * types of values that can’t be compared mathematically, the function
         * compares in a natural way.
         * @param y Second value to compare
         */
        compareNatural(y: any): MathJsChain;

        /**
         * Compare two strings lexically. Comparison is case sensitive. Returns
         * 1 when x > y, -1 when x < y, and 0 when x == y. For matrices, the
         * function is evaluated element wise.
         * @param y Second string to compare
         */
        compareText(y: string | MathArray | Matrix): MathJsChain;

        /**
         * Test element wise whether two matrices are equal. The function
         * accepts both matrices and scalar values.
         * @param y Second amtrix to compare
         */
        deepEqual(y: MathType): MathJsChain;

        /**
         * Test whether two values are equal.
         *
         * The function tests whether the relative difference between x and y is
         * smaller than the configured epsilon. The function cannot be used to
         * compare values smaller than approximately 2.22e-16. For matrices, the
         * function is evaluated element wise. In case of complex numbers, x.re
         * must equal y.re, and x.im must equal y.im. Values null and undefined
         * are compared strictly, thus null is only equal to null and nothing
         * else, and undefined is only equal to undefined and nothing else.
         * @param y Second value to compare
         */
        equal(y: MathType | string): MathJsChain;

        /**
         * Check equality of two strings. Comparison is case sensitive. For
         * matrices, the function is evaluated element wise.
         * @param y Second string to compare
         */
        equalText(y: string | MathArray | Matrix): MathJsChain;

        /**
         * Test whether value x is larger than y. The function returns true when
         * x is larger than y and the relative difference between x and y is
         * larger than the configured epsilon. The function cannot be used to
         * compare values smaller than approximately 2.22e-16. For matrices, the
         * function is evaluated element wise.
         * @param y Second value to compare
         */
        larger(y: MathType | string): MathJsChain;

        /**
         * Test whether value x is larger or equal to y. The function returns
         * true when x is larger than y or the relative difference between x and
         * y is smaller than the configured epsilon. The function cannot be used
         * to compare values smaller than approximately 2.22e-16. For matrices,
         * the function is evaluated element wise.
         * @param y Second value to vcompare
         */
        largerEq(y: MathType | string): MathJsChain;

        /**
         * Test whether value x is smaller than y. The function returns true
         * when x is smaller than y and the relative difference between x and y
         * is smaller than the configured epsilon. The function cannot be used
         * to compare values smaller than approximately 2.22e-16. For matrices,
         * the function is evaluated element wise.
         * @param y Second value to vcompare
         */
        smaller(y: MathType | string): MathJsChain;

        /**
         * Test whether value x is smaller or equal to y. The function returns
         * true when x is smaller than y or the relative difference between x
         * and y is smaller than the configured epsilon. The function cannot be
         * used to compare values smaller than approximately 2.22e-16. For
         * matrices, the function is evaluated element wise.
         * @param y Second value to compare
         */
        smallerEq(y: MathType | string): MathJsChain;

        /**
         * Test whether two values are unequal. The function tests whether the
         * relative difference between x and y is larger than the configured
         * epsilon. The function cannot be used to compare values smaller than
         * approximately 2.22e-16. For matrices, the function is evaluated
         * element wise. In case of complex numbers, x.re must unequal y.re, or
         * x.im must unequal y.im. Values null and undefined are compared
         * strictly, thus null is unequal with everything except null, and
         * undefined is unequal with everything except undefined.
         * @param y Second value to vcompare
         */
        unequal(y: MathType | string): MathJsChain;

        /*************************************************************************
         * Set functions
         ************************************************************************/

        /**
         * Create the cartesian product of two (multi)sets. Multi-dimension
         * arrays will be converted to single-dimension arrays before the
         * operation.
         * @param a2 A (multi)set
         */
        setCartesian(a2: MathArray | Matrix): MathJsChain;

        /**
         * Create the difference of two (multi)sets: every element of set1, that
         * is not the element of set2. Multi-dimension arrays will be converted
         * to single-dimension arrays before the operation
         * @param a2 A (multi)set
         */
        setDifference(a2: MathArray | Matrix): MathJsChain;

        /**
         * Collect the distinct elements of a multiset. A multi-dimension array
         * will be converted to a single-dimension array before the operation.
         */
        setDistinct(): MathJsChain;

        /**
         * Create the intersection of two (multi)sets. Multi-dimension arrays
         * will be converted to single-dimension arrays before the operation.
         * @param a2 A (multi)set
         */
        setIntersect(a2: MathArray | Matrix): MathJsChain;

        /**
         * Check whether a (multi)set is a subset of another (multi)set. (Every
         * element of set1 is the element of set2.) Multi-dimension arrays will
         * be converted to single-dimension arrays before the operation.
         * @param a2 A (multi)set
         */
        setIsSubset(a2: MathArray | Matrix): MathJsChain;

        /**
         * Count the multiplicity of an element in a multiset. A multi-dimension
         * array will be converted to a single-dimension array before the
         * operation.
         * @param a A multiset
         */
        setMultiplicity(a: MathArray | Matrix): MathJsChain;

        /**
         * Create the powerset of a (multi)set. (The powerset contains very
         * possible subsets of a (multi)set.) A multi-dimension array will be
         * converted to a single-dimension array before the operation.
         */
        setPowerset(): MathJsChain;

        /**
         * Count the number of elements of a (multi)set. When a second parameter
         * is ‘true’, count only the unique values. A multi-dimension array will
         * be converted to a single-dimension array before the operation.
         */
        setSize(): MathJsChain;

        /**
         * Create the symmetric difference of two (multi)sets. Multi-dimension
         * arrays will be converted to single-dimension arrays before the
         * operation.
         * @param a2 A (multi)set
         */
        setSymDifference(a2: MathArray | Matrix): MathJsChain;

        /**
         * Create the union of two (multi)sets. Multi-dimension arrays will be
         * converted to single-dimension arrays before the operation.
         * @param a2 A (multi)set
         */
        setUnion(a2: MathArray | Matrix): MathJsChain;

        /*************************************************************************
         * Special functions
         ************************************************************************/

        /**
         * Compute the erf function of a value using a rational Chebyshev
         * approximations for different intervals of x.
         */
        erf(): MathJsChain;

        /*************************************************************************
         * Statistics functions
         ************************************************************************/

        /**
         * Compute the median absolute deviation of a matrix or a list with
         * values. The median absolute deviation is defined as the median of the
         * absolute deviations from the median.
         */
        mad(): MathJsChain;

        /**
         * Compute the maximum value of a matrix or a list with values. In case
         * of a multi dimensional array, the maximum of the flattened array will
         * be calculated. When dim is provided, the maximum over the selected
         * dimension will be calculated. Parameter dim is zero-based.
         * @param dim The maximum over the selected dimension
         */
        max(dim?: number): MathJsChain;

        /**
         * Compute the mean value of matrix or a list with values. In case of a
         * multi dimensional array, the mean of the flattened array will be
         * calculated. When dim is provided, the maximum over the selected
         * dimension will be calculated. Parameter dim is zero-based.
         * @param dim The mean over the selected dimension
         */
        mean(dim?: number): MathJsChain;

        /**
         * Compute the median of a matrix or a list with values. The values are
         * sorted and the middle value is returned. In case of an even number of
         * values, the average of the two middle values is returned. Supported
         * types of values are: Number, BigNumber, Unit In case of a (multi
         * dimensional) array or matrix, the median of all elements will be
         * calculated.
         */
        median(): MathJsChain;

        /**
         * Compute the maximum value of a matrix or a list of values. In case of
         * a multi dimensional array, the maximum of the flattened array will be
         * calculated. When dim is provided, the maximum over the selected
         * dimension will be calculated. Parameter dim is zero-based.
         * @param dim The minimum over the selected dimension
         */
        min(dim?: number): MathJsChain;

        /**
         * Computes the mode of a set of numbers or a list with values(numbers
         * or characters). If there are more than one modes, it returns a list
         * of those values.
         */
        mode(): MathJsChain;

        /**
         * Compute the product of a matrix or a list with values. In case of a
         * (multi dimensional) array or matrix, the sum of all elements will be
         * calculated.
         */
        prod(): MathJsChain;

        /**
         * Compute the prob order quantile of a matrix or a list with values.
         * The sequence is sorted and the middle value is returned. Supported
         * types of sequence values are: Number, BigNumber, Unit Supported types
         * of probability are: Number, BigNumber In case of a (multi
         * dimensional) array or matrix, the prob order quantile of all elements
         * will be calculated.
         * @param probOrN prob is the order of the quantile, while N is the
         * amount of evenly distributed steps of probabilities; only one of
         * these options can be provided
         * @param sorted =false is data sorted in ascending order
         */
        quantileSeq(
            prob: number | BigNumber | MathArray,
            sorted?: boolean
        ): MathJsChain;

        /**
         * Compute the standard deviation of a matrix or a list with values. The
         * standard deviations is defined as the square root of the variance:
         * std(A) = sqrt(variance(A)). In case of a (multi dimensional) array or
         * matrix, the standard deviation over all elements will be calculated.
         * Optionally, the type of normalization can be specified as second
         * parameter. The parameter normalization can be one of the following
         * values: 'unbiased' (default) The sum of squared errors is divided by
         * (n - 1) 'uncorrected' The sum of squared errors is divided by n
         * 'biased' The sum of squared errors is divided by (n + 1)
         * @param array A single matrix or multiple scalar values
         * @param normalization Determines how to normalize the variance. Choose
         * ‘unbiased’ (default), ‘uncorrected’, or ‘biased’. Default value:
         * ‘unbiased’.
         * @returns The standard deviation
         */
        std(
            normalization?: "unbiased" | "uncorrected" | "biased" | "unbiased"
        ): MathJsChain;

        /**
         * Compute the sum of a matrix or a list with values. In case of a
         * (multi dimensional) array or matrix, the sum of all elements will be
         * calculated.
         */
        sum(): MathJsChain;

        /**
         * Compute the variance of a matrix or a list with values. In case of a
         * (multi dimensional) array or matrix, the variance over all elements
         * will be calculated. Optionally, the type of normalization can be
         * specified as second parameter. The parameter normalization can be one
         * of the following values: 'unbiased' (default) The sum of squared
         * errors is divided by (n - 1) 'uncorrected' The sum of squared errors
         * is divided by n 'biased' The sum of squared errors is divided by (n +
         * 1) Note that older browser may not like the variable name var. In
         * that case, the function can be called as math['var'](...) instead of
         * math.variance(...).
         * @param normalization normalization Determines how to normalize the
         * variance. Choose ‘unbiased’ (default), ‘uncorrected’, or ‘biased’.
         * Default value: ‘unbiased’.
         * @returns The variance
         */
        variance(
            normalization?: "unbiased" | "uncorrected" | "biased" | "unbiased"
        ): MathJsChain;

        /*************************************************************************
         * String functions
         ************************************************************************/

        /**
         * Format a value of any type into a string.
         * @param options An object with formatting options.
         * @param callback A custom formatting function, invoked for all numeric
         * elements in value, for example all elements of a matrix, or the real
         * and imaginary parts of a complex number. This callback can be used to
         * override the built-in numeric notation with any type of formatting.
         * Function callback is called with value as parameter and must return a
         * string.
         * @see http://mathjs.org/docs/reference/functions/format.html
         */
        format(
            value: any,
            options?: FormatOptions | number | ((item: any) => string),
            callback?: ((value: any) => string)
        ): MathJsChain;

        /**
         * Interpolate values into a string template.
         * @param values An object containing variables which will be filled in
         * in the template.
         * @param precision Number of digits to format numbers. If not provided,
         * the value will not be rounded.
         * @param options Formatting options, or the number of digits to format
         * numbers. See function math.format for a description of all options.
         */
        print(
            values: any,
            precision?: number,
            options?: number | object
        ): MathJsChain;

        /*************************************************************************
         * Trigonometry functions
         ************************************************************************/

        /**
         * Calculate the inverse cosine of a value. For matrices, the function
         * is evaluated element wise.
         */
        acos(): MathJsChain;

        /**
         * Calculate the hyperbolic arccos of a value, defined as acosh(x) =
         * ln(sqrt(x^2 - 1) + x). For matrices, the function is evaluated
         * element wise.
         */
        acosh(): MathJsChain;

        /**
         * Calculate the inverse cotangent of a value. For matrices, the
         * function is evaluated element wise.
         */
        acot(): MathJsChain;

        /**
         * Calculate the hyperbolic arccotangent of a value, defined as acoth(x)
         * = (ln((x+1)/x) + ln(x/(x-1))) / 2. For matrices, the function is
         * evaluated element wise.
         */
        acoth(): MathJsChain;

        /**
         * Calculate the inverse cosecant of a value. For matrices, the function
         * is evaluated element wise.
         */
        acsc(): MathJsChain;

        /**
         * Calculate the hyperbolic arccosecant of a value, defined as acsch(x)
         * = ln(1/x + sqrt(1/x^2 + 1)). For matrices, the function is evaluated
         * element wise.
         */
        acsch(): MathJsChain;

        /**
         * Calculate the inverse secant of a value. For matrices, the function
         * is evaluated element wise.
         */
        asec(): MathJsChain;

        /**
         * Calculate the hyperbolic arcsecant of a value, defined as asech(x) =
         * ln(sqrt(1/x^2 - 1) + 1/x). For matrices, the function is evaluated
         * element wise.
         */
        asech(): MathJsChain;

        /**
         * Calculate the inverse sine of a value. For matrices, the function is
         * evaluated element wise.
         */
        asin(): MathJsChain;

        /**
         * Calculate the hyperbolic arcsine of a value, defined as asinh(x) =
         * ln(x + sqrt(x^2 + 1)). For matrices, the function is evaluated
         * element wise.
         */
        asinh(): MathJsChain;

        /**
         * Calculate the inverse tangent of a value. For matrices, the function
         * is evaluated element wise.
         */
        atan(): MathJsChain;

        /**
         * Calculate the inverse tangent function with two arguments, y/x. By
         * providing two arguments, the right quadrant of the computed angle can
         * be determined. For matrices, the function is evaluated element wise.
         */
        atan2(): MathJsChain;

        /**
         * Calculate the hyperbolic arctangent of a value, defined as atanh(x) =
         * ln((1 + x)/(1 - x)) / 2. For matrices, the function is evaluated
         * element wise.
         */
        atanh(): MathJsChain;

        /**
         * Calculate the cosine of a value. For matrices, the function is
         * evaluated element wise.
         */
        cos(): MathJsChain;

        /**
         * Calculate the hyperbolic cosine of a value, defined as cosh(x) = 1/2
         * * (exp(x) + exp(-x)). For matrices, the function is evaluated element
         * wise.
         */
        cosh(): MathJsChain;

        /**
         * Calculate the cotangent of a value. cot(x) is defined as 1 / tan(x).
         * For matrices, the function is evaluated element wise.
         */
        cot(): MathJsChain;

        /**
         * Calculate the hyperbolic cotangent of a value, defined as coth(x) = 1
         * / tanh(x). For matrices, the function is evaluated element wise.
         */
        coth(): MathJsChain;

        /**
         * Calculate the cosecant of a value, defined as csc(x) = 1/sin(x). For
         * matrices, the function is evaluated element wise.
         */
        csc(): MathJsChain;

        /**
         * Calculate the hyperbolic cosecant of a value, defined as csch(x) = 1
         * / sinh(x). For matrices, the function is evaluated element wise.
         */
        csch(): MathJsChain;

        /**
         * Calculate the secant of a value, defined as sec(x) = 1/cos(x). For
         * matrices, the function is evaluated element wise.
         */
        sec(): MathJsChain;

        /**
         * Calculate the hyperbolic secant of a value, defined as sech(x) = 1 /
         * cosh(x). For matrices, the function is evaluated element wise.
         */
        sech(): MathJsChain;

        /**
         * Calculate the sine of a value. For matrices, the function is
         * evaluated element wise.
         */
        sin(): MathJsChain;

        /**
         * Calculate the hyperbolic sine of a value, defined as sinh(x) = 1/2 *
         * (exp(x) - exp(-x)). For matrices, the function is evaluated element
         * wise.
         */
        sinh(): MathJsChain;

        /**
         * Calculate the tangent of a value. tan(x) is equal to sin(x) / cos(x).
         * For matrices, the function is evaluated element wise.
         */
        tan(): MathJsChain;

        /**
         * Calculate the hyperbolic tangent of a value, defined as tanh(x) =
         * (exp(2 * x) - 1) / (exp(2 * x) + 1). For matrices, the function is
         * evaluated element wise.
         */
        tanh(): MathJsChain;

        /*************************************************************************
         * Unit functions
         ************************************************************************/

        /**
         * Change the unit of a value. For matrices, the function is evaluated
         * element wise.
         * @param unit New unit. Can be a string like "cm" or a unit without
         * value.
         */
        to(unit: Unit | string): MathJsChain;

        /*************************************************************************
         * Utils functions
         ************************************************************************/

        /**
         * Clone an object.
         */
        clone(): MathJsChain;

        /**
         * Test whether a value is an integer number. The function supports
         * number, BigNumber, and Fraction. The function is evaluated
         * element-wise in case of Array or Matrix input.
         */
        isInteger(): MathJsChain;

        /**
         * Test whether a value is NaN (not a number). The function supports
         * types number, BigNumber, Fraction, Unit and Complex. The function is
         * evaluated element-wise in case of Array or Matrix input.
         */
        isNaN(): MathJsChain;

        /**
         * Test whether a value is negative: smaller than zero. The function
         * supports types number, BigNumber, Fraction, and Unit. The function is
         * evaluated element-wise in case of Array or Matrix input.
         */
        isNegative(): MathJsChain;

        /**
         * Test whether a value is an numeric value. The function is evaluated
         * element-wise in case of Array or Matrix input.
         */
        isNumeric(): MathJsChain;

        /**
         * Test whether a value is positive: larger than zero. The function
         * supports types number, BigNumber, Fraction, and Unit. The function is
         * evaluated element-wise in case of Array or Matrix input.
         */
        isPositive(): MathJsChain;

        /**
         * Test whether a value is prime: has no divisors other than itself and
         * one. The function supports type number, bignumber. The function is
         * evaluated element-wise in case of Array or Matrix input.
         */
        isPrime(): MathJsChain;

        /**
         * Test whether a value is zero. The function can check for zero for
         * types number, BigNumber, Fraction, Complex, and Unit. The function is
         * evaluated element-wise in case of Array or Matrix input.
         */
        isZero(): MathJsChain;

        /**
         * Determine the type of a variable.
         */
        typeOf(): MathJsChain;
    }

    interface ImportOptions {
        override?: boolean;
        silent?: boolean;
        wrap?: boolean;
    }

    interface ImportObject {
        [key: string]: any;
    }
}
