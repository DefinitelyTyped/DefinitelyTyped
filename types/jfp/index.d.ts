declare var j: j.JfpStatic;
export = j;
export as namespace j;

declare namespace j {
    interface JfpStatic {
        /**
         * jfp supports string function aliasing -- alias is a jfp function name and seeking behavior
         * will happen against the jfp object only.
         */
        (alias: string, ...args: any[]): JfpCurriedOutput<any>;
        (externalFunction: (...args: any[]) => any, ...args: any[]): JfpCurriedOutput<any>;
    }

    interface JfpCurriedOutput<T> {}

    // Array functions
    interface JfpStatic {
        /**
         * Removes falsey values from an array
         * @param values The array to compact
         */
        compact(values: any[]): any[];

        /**
         * Clones and concatenates two arrays
         * @param values1 The array to concatenate to
         * @param values2 The array to concatenate with
         */
        concat(values1: any[], values2: any[]): any[];

        /**
         * Appends value to clone of destination array
         * @param value The value to add to the end of an array
         * @param destination The array to be cloned and appended to
         */
        conj(value: any, destination: any[]): any[];

        /**
         * Prepends value to clone of destination array
         * @param value The value to add to the beginning of an array
         * @param destination The array to be cloned and prepended to
         */
        cons(value: any, destination: any[]): any[];

        /**
         * Returns a copy of passed array
         */
        copyArray(list: any[]): any[];

        /**
         * Takes the difference of sets A and B where the difference is A - B
         */
        difference(lista: any[], listb: any[]): any[];

        /**
         * Drops value at specified index from clone of array
         * @param index Index to perform drop at
         * @param values Array to remove value from
         */
        drop(index: number, values: any[]): any[];

        /**
         * Drops first element from clone of values array
         * @param values Array to drop first value of
         */
        dropFirst(values: any[]): any[];

        /**
         * Drops last element from clone of values array
         * @param values Array to drop last value from
         */
        dropLast(values: any[]): any[];

        /**
         * Drops values from array until predicate is satisfied
         */
        dropUntil(predicate: (...args: any[]) => boolean, list: any[]): any[];

        /**
         * Performs iterable function on each value of provided array
         * @param iterable Function to perform on each value of array
         * @param values Array to operate on
         */
        each(iteratable: (value: any) => void, values: any[]): any[];

        /**
         * Filters all values not passing provided predicate
         * @param predicate Function which performs a boolean resultant operation on a value of the array
         * @param values Array to filter
         */
        filter(predicate: (value: any) => boolean, values: any[]): any[];

        /**
         * Finds the first value in an array that satisfies provided predicate
         * @param predicate Function which performs a boolean resultant operation on a value of the array
         * @param values Array to run predicate against
         */
        find(predicate: (value: any) => boolean, values: any[]): any;

        /**
         * Drops last element of array
         */
        init(list: any[]): any[];

        /**
         * Takes the intersection of two arrays
         */
        intersect(lista: any[], listb: any[]): any[];

        /**
         * Returns the first value in an array
         * @param values Array of values
         */
        first(values: any[]): any;

        /**
         * Returns last value in an array
         * @param values Array of values
         */
        last(values: any[]): any;

        /**
         * Returns last index of an array
         * @param values Array
         */
        lastIndex(values: any[]): number;

        /**
         * Maps functions into new array using mapper function
         * @param mapper Mapping function
         * @param values Array to map
         */
        map(mapper: (value: any) => any, values: any[]): any[];

        /**
         * Takes multiple partitions of a list using a partitioning predicate and criteria
         */
        multiPartition(predicate: (criterion: any, value: any) => boolean, criteria: any[], list: any[]): any[][];

        /**
         * Counts number of list values which satisfy predicate
         */
        numberOf(predicate: (value: any) => boolean, list: any[]): number;

        /**
         * Partitions array on values which pass and do not pass predicate
         */
        partition(predicate: (value: any) => boolean, list: any[]): any[][];

        /**
         * Returns nth value of passed array
         * @param index Array index
         * @param values Array of values
         */
        nth(index: number, values: any[]): any;

        /**
         * Reduces array using reducer function
         * @param reducer Function to reduce values with
         * @param values Array to reduce
         */
        reduce(reducer: (condition1: any, condition2: any) => any, values: any[]): any;

        /**
         * Reduces array using reducer function
         * @param reducer Function to reduce values with
         * @param values Array to reduce
         * @param initialCondition Initial value to use in first reduction application
         */
        reduce(reducer: (condition1: any, condition2: any) => any, values: any[], initialCondition: any): any;

        /**
         * Returns all but the first element of array
         * @param values Array to return the rest of
         */
        rest(values: any[]): any[];

        /**
         * Returns a slice of an array
         * @param initialIndex index to start slicing at
         * @param values Array to slice
         */
        slice(initialIndex: number, values: any[]): any[];

        /**
         * Returns a slice of an array
         * @param initialIndex index to start slicing at
         * @param values Array to slice
         * @param lastIndex Index to end slice with
         */
        slice(initialIndex: number, values: any[], lastIndex: number): any[];

        /**
         * Returns true if at least one array element satisfies predicate, else false
         */
        some(predicate: (value: any) => boolean, list: any[]): boolean;

        /**
         * Sorts values in an array with an optional comparator arguments
         */
        sort(list: any[]): any[];
        sort(list: any[], comparator: (a: any, b: any) => number): any[];

        /**
         * Takes the symmetric difference of two arrays
         */
        symmetricDifference(lista: any[], listb: any[]): any[];

        /**
         * Returns first n values of an array
         * @param quantity Number of values to return
         * @param values Array of values to take from
         */
        take(quantity: number, values: any[]): any[];

        /**
         * Takes values from array until predicate is satisfied
         */
        takeUntil(predicate: (value: any) => boolean, list: any[]): any[];

        /**
         * Takes the union of two arrays
         */
        union(lista: any[], listb: any[]): any[];

        /**
         * Returns array of values with duplicates removed
         * @param values Array of values to filter by uniqueness
         */
        unique(values: any[]): any[];

        /**
         * Zips two arrays together into an array of arrays
         */
        zip(lista: any[], listb: any[]): any[][];
    }

    // Conditional functions
    interface JfpStatic {
        /**
         * Returns preferred value if truthy, otherwise returns default value
         * @param defaultValue Default value
         * @param preferredValue Preferred value
         */
        either(defaultValue: any, preferredValue: any): any;

        /**
         * Returns provided value if truthy or matches datatype, otherwise returns default value
         * @param defaultValue Default value
         * @param preferredValue Preferred value
         * @param datatype Type preferred value should be
         */
        either(defaultValue: any, preferredValue: any, datatype: string): any;

        /**
         * Returns preferred value if truthy, otherwise returns default value
         * @param defaultValue Default value
         * @param preferredValue Preferred value
         * @param predicateValue Boolean switch to return default or preferred value
         */
        eitherIf(defaultValue: any, preferredValue: any, predicateValue: boolean): any;

        /**
         * Returns provided value if truthy, otherwise returns default value
         * @param defaultValue Default value
         * @param preferredValue Preferred value
         * @param predicate Predicate function preferred value is tested against
         */
        eitherWhen(defaultValue: any, preferredValue: any, predicate: (value: any) => boolean): any;

        /**
         * Returns preferred value if truthy, otherwise null
         * @param preferredValue Preferred value to check
         */
        maybe(preferredValue: any): any;

        /**
         * Returns preferred value if truthy or matches datatype, otherwise null
         * @param preferredValue Preferred value to check
         * @param datatype Datatype to match
         */
        maybe(preferredValue: any, datatype: string): any;

        /**
         * Executes function if value is truthy, otherwise returns default
         * @param defaultValue
         * @param userFn
         * @param value
         */
        shortCircuit(defaultValue: any, userFn: (...args: any[]) => any, value: any): any;

        /**
         * Executes function when condition is true
         * @param predicateValue Value to set behavior execution
         * @param userFunction Behavior to execute
         */
        when(predicateValue: boolean, userFunction: (...args: any[]) => any): any;

        /**
         * Executes function when condition is true
         * @param predicateValue Value to set behavior execution
         * @param userFunction Behavior to execute
         * @param ...args arguments for userFunction
         */
        when(predicateValue: boolean, userFunction: (...args: any[]) => any, ...args: any[]): any;
    }

    interface JfpStatic {
        /**
         * Converts value to decimal equivalent returns null if non-convertable
         * @param value String or number value to convert
         */
        toDec(value: string): number;
        toDec(value: number): number;

        /**
         * Converts an object literal into an array of values
         * @param value Object literal
         */
        toValues(value: Object): any[];
    }

    interface JfpStatic {
        /**
         * Returns function which returns provided value
         * Signature: (any) -> () -> any
         * @param value Value to return from produced function
         */
        always(value: any): (...args: any[]) => any;

        /**
         * Applies an array of values to a function
         * @param userFn Function to perform application against
         * @param values Array of arguments for function
         */
        apply(userFn: (...args: any[]) => any, values: any[]): void;

        /**
         * Composes a set of functions into a new single function
         * @param ...args Arguments for compose
         */
        compose(...args: ((...args: any[]) => any)[]): (...args: any[]) => any;

        /**
         * Counts the number of arguments in a function declaration
         * @param userFn Function to count arguments of
         */
        countArguments(userFn: (...args: any[]) => any): number;

        /**
         * Curries function until all arguments are satisfied
         * @param userFn Function to curry
         * @param ...argments Initial arguments for currying application
         */
        curry(userFn: (...args: any[]) => any): (...args: any[]) => any;
        curry(userFn: (...args: any[]) => any): any;
        curry(userFn: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any;
        curry(userFn: (...args: any[]) => any, ...args: any[]): any;

        /**
         * Executes passed function
         * @param userFn
         */
        execute(userFn: (...args: any[]) => any): any;

        /**
         * Gets type of passed value
         * @param value
         */
        getType(value: any): string;

        /**
         * Returns value passed to the function
         * @param value Value to return
         */
        identity(value: any): any;

        /**
         * Applies values to a function and returns partially applied function
         * @param userFn Function to apply values to
         * @param ...args Values to apply
         */
        partial(userFn: (...args: any[]) => any): (...args: any[]) => any;
        partial(userFn: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any;

        /**
         * Pipelines or chains functions producing a single final output
         * @param value Initial condition for function pipelining
         * @param ...args Functions to chain/pipeline
         */
        pipeline(value: any, ...args: ((...args: any[]) => any)[]): any;

        /**
         * Recursion function to allow for tail-optimized recursion
         * @param userFn Function to recur on
         * @param ...args Initial condition arguments
         */
        recur(userFn: (...args: any[]) => any): any;
        recur(userFn: (...args: any[]) => any, ...args: any[]): any;

        /**
         * Reverses arguments of provided function
         * @param userFn
         */
        reverseArgs(userFn: (...args: any[]) => any): (...args: any[]) => any;

        /**
         * Performs a right partial application on a function
         * @param userFn Function to apply arguments
         * @param ...args Inital arguments
         */
        rpartial(userFn: (...args: any[]) => any): any;
        rpartial(userFn: (...args: any[]) => any, ...args: any[]): any;

        /**
         * Performs a split partial application
         * @param userFn
         * @param leftArgs
         * @param rightArgs
         */
        splitPartial(userFn: (...args: any[]) => any, leftArgs: any[], rightArgs: any[]): (...args: any[]) => any;
    }

    // Predicate functions
    interface JfpStatic {
        /**
         * Returns true if array contains provided value, else false
         */
        contains(value: any, list: any[]): boolean;

        /**
         * Checks value equality of two arguments
         * @param valuea
         * @param valueb
         */
        equal(valuea: any, valueb: any): boolean;

        /**
         * Checks if every value in an array passes a predicate
         */
        every(predicate: (value: any) => boolean, list: any[]): boolean;

        /**
         * Checks if value is an empty string
         * @param value
         */
        isEmptyString(value: any): boolean;

        /**
         * Checks if value is null
         * @param value
         */
        isNull(value: any): boolean;

        /**
         * Checks if value is of type passed as string
         * @param type
         * @param value
         */
        isType(type: string, value: any): boolean;

        /**
         * Checks if passed value is an array
         */
        isArray(value: any): boolean;

        /**
         * Checks if passed value is a boolean
         */
        isBoolean(value: any): boolean;

        /**
         * Checks if passed value is a function
         */
        isFunction(value: any): boolean;

        /**
         * Checks if passed value is a number
         */
        isNumber(value: any): boolean;

        /**
         * Checks if passed value is an object
         */
        isObject(value: any): boolean;

        /**
         * Checks if passed value is a string
         */
        isString(value: any): boolean;

        /**
         * Checks if passed value is undefined
         */
        isUndefined(value: any): boolean;

        /**
         * Checks if passed value is a tuple
         */
        isTuple(value: any): boolean;

        /**
         * Checks if passed value is a tuple of length 2
         */
        isPair(value: any): boolean;

        /**
         * Checks if passed value is a tuple of length 1
         */
        isSingle(value: any): boolean;

        /**
         * Checks if passed value is a tuple of length 3
         */
        isTriple(value: any): boolean;

        /**
         * Checks that passed value is an array which contains a first value
         */
        hasFirst(value: any): boolean;

        /**
         * Checks if passed value is either a number or a numeric string
         */
        isNumeric(value: any): boolean;

        /**
         * Checks if passed value is a primitive Javascript type
         */
        isPrimitive(value: any): boolean;

        /**
         * Checks if passed value is truthy
         */
        isTruthy(value: any): boolean;

        /**
         * Returns boolean inverse of passed value
         */
        not(value: boolean): boolean;
    }

    // Composite functions
    interface JfpStatic {
        /**
         * Clones values to an optional depth
         */
        clone(value: any): any;
        clone(value: any, depth: number): any;

        /**
         * Composes functions together in common nested order
         */
        compose(...args: ((...args: any[]) => any)[]): (...args: any[]) => any;

        /**
         * Curries passed function and applies optional arguments
         */
        curry(fn: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any;

        /**
         * Returns either typed value based on type parameter
         */
        eitherType(type: string, defaultValue: any, value: any): any;

        /**
         * Returns maybe typed value based on type parameter
         */
        maybeType(type: string, value: any): any;

        /**
         * Returns a partially applied function with remaining arguments reversed
         */
        partialReverse(fn: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any;

        /**
         * Passes chains functions together with an initial arguments
         */
        pipeline(value: any, ...args: ((...args: any[]) => any)[]): any;

        /**
         * Composes functions executing from left to right
         */
        rcompose(...args: ((...args: any[]) => any)[]): (...args: any[]) => any;

        /**
         * Executes a trampolined tail-optimized recursive function
         */
        recur(fn: (...args: any[]) => any): any;

        /**
         * Repeats action n times
         */
        repeat(count: number, action: (...args: any[]) => any): any;

        /**
         * Outputs a string composed of n copies of base string
         */
        times(count: number, value: string): string;
    }

    interface JfpStatic {
        /**
         * Converts string to decimal safely
         */
        toDec(value: any): number;
    }

    interface JfpStatic {
        /**
         * Adds two numbers
         */
        add(a: number, b: number): number;

        /**
         * Divides first number by second
         */
        divide(numerator: number, denominator: number): number;

        /**
         * Takes the factorial of passed number
         */
        fac(n: number): number;

        /**
         * Increments a number
         */
        inc(value: number): number;

        /**
         * Takes the maximum of two numbers
         */
        max(a: number, b: number): number;

        /**
         * Takes the minimum of two numbers
         */
        min(a: number, b: number): number;

        /**
         * Takes the modulus of first number against second number
         */
        mod(a: number, b: number): number;

        /**
         * Takes mathematical modulo of first number against second number
         */
        modulo(a: number, b: number): number;

        /**
         * Multiplies two numbers
         */
        multiply(a: number, b: number): number;

        /**
         * Creates a range either from 0 to an integer or from one integer to another
         */
        range(end: number): number[];
        range(start: number, end: number): number[];

        /**
         * Subtracts second argument from first
         */
        subtract(a: number, b: number): number;

        /**
         * Truncates number to floor if positive or to ceil if negative
         */
        truncate(value: number): number;
    }

    interface JfpStatic {
        /**
         * Checks if number is negative
         */
        isNegative(value: number): boolean;

        /**
         * Checks if number is positive
         */
        isPositive(value: number): boolean;

        /**
         * Checks if number is 0
         */
        isZero(value: number): boolean;

        /**
         * Checks if number is between two values
         */
        between(bounds: number[], value: number): boolean;

        /**
         * Checks if value is even
         */
        isEven(value: number): boolean;

        /**
         * Checks if value is an integer
         */
        isInt(value: number): boolean;

        /**
         * Checks if value is a multiple of base value
         */
        isMultipleOf(base: number, value: number): boolean;

        /**
         * Checks if value is positive or 0
         */
        isNonNegative(value: number): boolean;

        /**
         * Checks if value is negative or 0
         */
        isNonPositive(value: number): boolean;

        /**
         * Checks if value is not 0
         */
        isNonZero(value: number): boolean;

        /**
         * Checks if value is odd
         */
        isOdd(value: number): boolean;

        /**
         * Checks if a is greater or equal to b
         */
        geq(a: number, b: number): boolean;

        /**
         * Checks if a is greater than b
         */
        greater(a: number, b: number): boolean;

        /**
         * Checks if a is less than or equal to b
         */
        leq(a: number, b: number): boolean;

        /**
         * Checks if a is less than b
         */
        less(a: number, b: number): boolean;
    }

    interface JfpStatic {
        /**
         * Gets object keys
         */
        getKeys(dataset: {}): string[];

        /**
         * Merges right object into a copy of left object
         */
        merge(left: {}, right: {}): {};

        /**
         * Picks key from object
         */
        pick(key: string, dataset: {}): any;
    }

    interface JfpStatic {
        /**
         * Traverses object tree and retrieves dot-delimited key or returns null
         */
        deref(key: string, dataset: {}): any;

        /**
         * Picks value from object by key and returns a new object containing key value pair
         */
        pluck(key: string, dataset: {}): {};

        /**
         * Performs pluck across an array of keys, returns a single object containing all key value pairs
         */
        pluckKeys(keys: string[], dataset: {}): {};

        /**
         * Converts object to an array of values
         */
        toValues(dataset: {}): any[];

        /**
         * Transforms object to a new object containing transformed keys
         */
        transform(transformation: string[][], dataset: {}): {};
    }

    interface JfpStatic {
        /**
         * Performs a conjunction (and) operation on two or more booleans
         */
        and(a: boolean, b: boolean, ...args: boolean[]): boolean;

        /**
         * Performs a disjunction (or) operation on two or more booleans
         */
        or(a: boolean, b: boolean, ...args: boolean[]): boolean;

        /**
         * Performs an exclusive or operation on two booleans
         */
        xor(a: boolean, b: boolean): boolean;

        /**
         * Creates composite predicate which performs each check on a value and then conjoins the result
         */
        composePredicate(...args: ((...args: any[]) => boolean)[]): (...args: any[]) => boolean;
    }
}
