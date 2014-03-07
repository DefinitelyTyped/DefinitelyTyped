// Type definitions for Lo-Dash
// Project: http://lodash.com/
// Definitions by: Brian Zengel <https://github.com/bczengel>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var _: _.LoDashStatic;

declare module _ {
	interface LoDashStatic {
		/**
		* Creates a lodash object which wraps the given value to enable intuitive method chaining.
		*
		* In addition to Lo-Dash methods, wrappers also have the following Array methods:
		* concat, join, pop, push, reverse, shift, slice, sort, splice, and unshift
		*
		* Chaining is supported in custom builds as long as the value method is implicitly or 
		* explicitly included in the build.
		*
		* The chainable wrapper functions are:
		* after, assign, bind, bindAll, bindKey, chain, compact, compose, concat, countBy, 
		* createCallback, curry, debounce, defaults, defer, delay, difference, filter, flatten, 
		* forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, functions, groupBy, 
		* indexBy, initial, intersection, invert, invoke, keys, map, max, memoize, merge, min, 
		* object, omit, once, pairs, partial, partialRight, pick, pluck, pull, push, range, reject, 
		* remove, rest, reverse, shuffle, slice, sort, sortBy, splice, tap, throttle, times, 
		* toArray, transform, union, uniq, unshift, unzip, values, where, without, wrap, and zip
		*
		* The non-chainable wrapper functions are:
		* clone, cloneDeep, contains, escape, every, find, findIndex, findKey, findLast, 
		* findLastIndex, findLastKey, has, identity, indexOf, isArguments, isArray, isBoolean, 
		* isDate, isElement, isEmpty, isEqual, isFinite, isFunction, isNaN, isNull, isNumber, 
		* isObject, isPlainObject, isRegExp, isString, isUndefined, join, lastIndexOf, mixin, 
		* noConflict, parseInt, pop, random, reduce, reduceRight, result, shift, size, some, 
		* sortedIndex, runInContext, template, unescape, uniqueId, and value
		*
		* The wrapper functions first and last return wrapped values when n is provided, otherwise 
		* they return unwrapped values.
		*
		* Explicit chaining can be enabled by using the _.chain method.
		**/
		(value: number): LoDashWrapper<number>;
		(value: string): LoDashWrapper<string>;
		(value: boolean): LoDashWrapper<boolean>;
		<T>(value: Array<T>): LoDashArrayWrapper<T>;
		<T extends {}>(value: T): LoDashObjectWrapper<T>;
		(value: any): LoDashWrapper<any>;

		/**
		* The semantic version number.
		**/
		VERSION: string;

		/**
		* An object used to flag environments features.
		**/
		support: Support;

		/**
		* By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby 
		* (ERB). Change the following template settings to use alternative delimiters.
		**/
		templateSettings: TemplateSettings;
	}

	/**
	* By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby 
	* (ERB). Change the following template settings to use alternative delimiters.
	**/
	interface TemplateSettings {
		/**
		* The "escape" delimiter.
		**/
		escape?: RegExp;

		/**
		* The "evaluate" delimiter.
		**/
		evaluate?: RegExp;

		/**
		* An object to import into the template as local variables.
		**/
		imports?: Dictionary<any>;

		/**
		* The "interpolate" delimiter.
		**/
		interpolate?: RegExp;

		/**
		* Used to reference the data object in the template text.
		**/
		variable?: string;
	}

	/**
	* An object used to flag environments features.
	**/
	interface Support {
		/**
		* Detect if an arguments object’s [[Class]] is resolvable (all but Firefox < 4, IE < 9).
		**/
		argsClass: boolean;

		/**
		* Detect if arguments objects are Object objects (all but Narwhal and Opera < 10.5).
		**/
		argsObject: boolean;

		/**
		* Detect if name or message properties of Error.prototype are enumerable by default. 
		* (IE < 9, Safari < 5.1)
		**/
		enumErrorProps: boolean;

		/**
		* Detect if Function#bind exists and is inferred to be fast (all but V8).
		**/
		fastBind: boolean;

		/**
		* Detect if functions can be decompiled by Function#toString (all but PS3 and older Opera 
		* mobile browsers & avoided in Windows 8 apps).
		**/
		funcDecomp: boolean;

		/**
		* Detect if Function#name is supported (all but IE).
		**/
		funcNames: boolean;

		/**
		* Detect if arguments object indexes are non-enumerable (Firefox < 4, IE < 9, PhantomJS, 
		* Safari < 5.1).
		**/
		nonEnumArgs: boolean;

		/**
		* Detect if properties shadowing those on Object.prototype are non-enumerable.
		*
		* In IE < 9 an objects own properties, shadowing non-enumerable ones, are made 
		* non-enumerable as well (a.k.a the JScript [[DontEnum]] bug).
		**/
		nonEnumShadows: boolean;

		/**
		* Detect if own properties are iterated after inherited properties (all but IE < 9).
		**/
		ownLast: boolean;

		/**
		* Detect if Array#shift and Array#splice augment array-like objects correctly.
		*
		* Firefox < 10, IE compatibility mode, and IE < 9 have buggy Array shift() and splice() 
		* functions that fail to remove the last element, value[0], of array-like objects even 
		* though the length property is set to 0. The shift() method is buggy in IE 8 compatibility 
		* mode, while splice() is buggy regardless of mode in IE < 9 and buggy in compatibility mode
		* in IE 9.
		**/
		spliceObjects: boolean;

		/**
		* Detect lack of support for accessing string characters by index.
		*
		* IE < 8 can't access characters by index and IE 8 can only access characters by index on 
		* string literals.
		**/
		unindexedChars: boolean;
	}

	interface LoDashWrapperBase<T, TWrapper> {
		/**
		* Produces the toString result of the wrapped value.
		* @return Returns the string result.
		**/
		toString(): string;

		/**
		* Extracts the wrapped value.
		* @return The wrapped value.
		**/
		valueOf(): T;

			/**
			* @see valueOf
			**/
			value(): T;
	} 

	interface LoDashWrapper<T> extends LoDashWrapperBase<T, LoDashWrapper<T>> {}

	interface LoDashObjectWrapper<T> extends LoDashWrapperBase<T, LoDashObjectWrapper<T>> {}

	interface LoDashArrayWrapper<T> extends LoDashWrapperBase<T[], LoDashArrayWrapper<T>> {
		concat(...items: T[]): LoDashArrayWrapper<T>;
		join(seperator?: string): LoDashWrapper<string>;
		pop(): LoDashWrapper<T>;
		push(...items: T[]): void;
		reverse(): LoDashArrayWrapper<T>;
		shift(): LoDashWrapper<T>;
		slice(start: number, end?: number): LoDashArrayWrapper<T>;
		sort(compareFn?: (a: T, b: T) => number): LoDashArrayWrapper<T>;
		splice(start: number): LoDashArrayWrapper<T>;
		splice(start: number, deleteCount: number, ...items: any[]): LoDashArrayWrapper<T>;
		unshift(...items: any[]): LoDashWrapper<number>;
	}

	//_.chain
	interface LoDashStatic {
		/**
		* Creates a lodash object that wraps the given value with explicit method chaining enabled.
		* @param value The value to wrap.
		* @return The wrapper object.
		**/
		chain(value: number): LoDashWrapper<number>;
		chain(value: string): LoDashWrapper<string>;
		chain(value: boolean): LoDashWrapper<boolean>;
		chain<T>(value: Array<T>): LoDashArrayWrapper<T>;
		chain<T extends {}>(value: T): LoDashObjectWrapper<T>;
		chain(value: any): LoDashWrapper<any>;
	}

	interface LoDashWrapperBase<T, TWrapper> {
		/**
		* Enables explicit method chaining on the wrapper object.
		* @see _.chain
		* @return The wrapper object.
		**/
		chain(): TWrapper;
	}

	//_.tap
	interface LoDashStatic {
		/**
		* Invokes interceptor with the value as the first argument and then returns value. The 
		* purpose of this method is to "tap into" a method chain in order to perform operations on 
		* intermediate results within the chain.
		* @param value The value to provide to interceptor
		* @param interceptor The function to invoke.
		* @return value
		**/
		tap<T>(
			value: T,
			interceptor: (value: T) => void): T;
	}

	interface LoDashWrapperBase<T, TWrapper> {
		/**
		* @see _.tap
		**/
		tap(interceptor: (value: T) => void): TWrapper;
	}

	/*********
	* Arrays *
	**********/

	//_.compact
	interface LoDashStatic {
		/**
		* Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "",
		* undefined and NaN are all falsy.
		* @param array Array to compact.
		* @return (Array) Returns a new array of filtered values.
		**/
		compact<T>(array: List<T>): T[];
	}

	interface LoDashArrayWrapper<T> {
		/**
		* @see _.compact
		**/
		compact<T>(): LoDashArrayWrapper<T>;
	}	

	//_.difference
	interface LoDashStatic {
		/**
		* Creates an array excluding all values of the provided arrays using strict equality for comparisons
		* , i.e. ===.
		* @param array The array to process
		* @param others The arrays of values to exclude.
		* @return Returns a new array of filtered values.
		**/
		difference<T>(
			array: List<T>,
			...others: List<T>[]): T[];
	}

	interface LoDashArrayWrapper<T> {
		/**
		* @see _.difference
		**/
		difference(
			...others: List<T>[]): LoDashArrayWrapper<T>;
	}

	//_.findIndex
	interface LoDashStatic {
		/**
		* This method is like _.find except that it returns the index of the first element that passes 
		* the callback check, instead of the element itself.
		* @param array The array to search.
		* @param {(Function|Object|string)} callback The function called per iteration. If a property name or object is provided it will be 
		* used to create a ".pluck" or ".where" style callback, respectively.
		* @param thisArg The this binding of callback.
		* @return Returns the index of the found element, else -1.
		**/
		findIndex<T>(
			array: List<T>,
			callback: ListIterator<T, boolean>,
			thisArg?: any): number;

		/**
		* @see _.findIndex
		**/
		findIndex<T>(
			array: List<T>,
			pluckValue: string): number;
		
		/**
		* @see _.findIndex
		**/
		findIndex<W, T>(
			array: List<T>,
			whereDictionary: W): number;
	}

	//_.findLastIndex
	interface LoDashStatic {
		/**
		* This method is like _.findIndex except that it iterates over elements of a collection from right to left.
		* @param array The array to search.
		* @param {(Function|Object|string)} callback The function called per iteration. If a property name or object is provided it will be 
		* used to create a ".pluck" or ".where" style callback, respectively.
		* @param thisArg The this binding of callback.
		* @return Returns the index of the found element, else -1.
		**/
		findLastIndex<T>(
			array: List<T>,
			callback: ListIterator<T, boolean>,
			thisArg?: any): number;
		
		/**
		* @see _.findLastIndex
		**/
		findLastIndex<T>(
			array: List<T>,
			pluckValue: string): number;
		
		/**
		* @see _.findLastIndex
		**/
		findLastIndex<T>(
			array: List<T>,
			whereDictionary: Dictionary<any>): number;
	}

	//_.first
	interface LoDashStatic {
		/**
		* Gets the first element or first n elements of an array. If a callback is provided 
		* elements at the beginning of the array are returned as long as the callback returns 
		* truey. The callback is bound to thisArg and invoked with three arguments; (value, 
		* index, array).
		*
		* If a property name is provided for callback the created "_.pluck" style callback 
		* will return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return ]
		* true for elements that have the properties of the given object, else false.
		* @param array Retrieves the first element of this array.
		* @return Returns the first element of `array`.
		**/
		first<T>(array: List<T>): T;

		/**
		* @see _.first
		* @param n The number of elements to return.
		**/
		first<T>(
			array: List<T>,
			n: number): T[];

		/**
		* @see _.first
		* @param callback The function called per element.
		* @param [thisArg] The this binding of callback.
		**/
		first<T>(
			array: List<T>,
			callback: ListIterator<T, boolean>,
			thisArg?: any): T[];

		/**
		* @see _.first
		* @param pluckValue "_.pluck" style callback value
		**/
		first<T>(
			array: List<T>,
			pluckValue: string): T[];

		/**
		* @see _.first
		* @param whereValue "_.where" style callback value
		**/
		first<W, T>(
			array: List<T>,
			whereValue: W): T[];

			/**
			* @see _.first
			**/
			head<T>(array: List<T>): T;

			/**
			* @see _.first
			**/
			head<T>(
				array: List<T>,
				n: number): T[];

			/**
			* @see _.first
			**/
			head<T>(
				array: List<T>,
				callback: ListIterator<T, boolean>,
				thisArg?: any): T[];

			/**
			* @see _.first
			**/
			head<T>(
				array: List<T>,
				pluckValue: string): T[];

			/**
			* @see _.first
			**/
			head<W, T>(
				array: List<T>,
				whereValue: W): T[];

			/**
			* @see _.first
			**/
			take<T>(array: List<T>): T;

			/**
			* @see _.first
			**/
			take<T>(
				array: List<T>,
				n: number): T[];

			/**
			* @see _.first
			**/
			take<T>(
				array: List<T>,
				callback: ListIterator<T, boolean>,
				thisArg?: any): T[];

			/**
			* @see _.first
			**/
			take<T>(
				array: List<T>,
				pluckValue: string): T[];

			/**
			* @see _.first
			**/
			take<W, T>(
				array: List<T>,
				whereValue: W): T[];
	}

	//_.flatten
	interface LoDashStatic {
		/**
		* Flattens a nested array (the nesting can be to any depth). If isShallow is truey, the 
		* array will only be flattened a single level. If a callback is provided each element of 
		* the array is passed through the callback before flattening. The callback is bound to 
		* thisArg and invoked with three arguments; (value, index, array).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false.
		* @param array The array to flatten.
		* @param shallow If true then only flatten one level, optional, default = false.
		* @return `array` flattened.
		**/
		flatten<T>(array: List<any>, isShallow?: boolean): T[];

		flatten<T>(
			array: List<any>,
			isShallow: boolean,
			callback: ListIterator<any, T>,
			thisArg?: any): T[];			

		flatten<T>(
			array: List<any>,
			callback: ListIterator<any, T>,
			thisArg?: any): T[];			

		flatten<W, T>(
			array: List<any>,
			isShallow: boolean,
			whereValue: W): T[];			

		flatten<W, T>(
			array: List<any>,
			whereValue: W): T[];			

		flatten<T>(
			array: List<any>,
			isShallow: boolean,
			pluckValue: string): T[];			

		flatten<T>(
			array: List<any>,
			pluckValue: string): T[];			
	}

	interface LoDashArrayWrapper<T> {
		/**
		* @see _.flatten
		**/
        flatten<Flat>(isShallow?: boolean): LoDashArrayWrapper<Flat>;

        flatten<Flat>(
			isShallow: boolean,
			callback: ListIterator<T, Flat>,
			thisArg?: any): LoDashArrayWrapper<Flat>;

        flatten<Flat>(
			callback: ListIterator<T, Flat>,
			thisArg?: any): LoDashArrayWrapper<Flat>;

        flatten<Flat>(
			isShallow: boolean,
			pluckValue: string): LoDashArrayWrapper<Flat>;

        flatten<Flat>(
			pluckValue: string): LoDashArrayWrapper<Flat>;

        flatten<Flat, W>(
			isShallow: boolean,
			whereValue: W): LoDashArrayWrapper<Flat>;

        flatten<Flat, W>(
			whereValue: W): LoDashArrayWrapper<Flat>;
	}

	//_.indexOf
	interface LoDashStatic {
		/**
		* Gets the index at which the first occurrence of value is found using strict equality 
		* for comparisons, i.e. ===. If the array is already sorted providing true for fromIndex 
		* will run a faster binary search.
		* @param array The array to search.
		* @param value The value to search for.
		* @param fromIndex The index to search from.
		* @return The index of `value` within `array`.
		**/
		indexOf<T>(
			array: List<T>,
			value: T): number;

		/**
		* @see _.indexOf
		* @param fromIndex The index to search from
		**/
		indexOf<T>(
			array: List<T>,
			value: T,
			fromIndex: number): number;

		/**
		* @see _.indexOf
		* @param isSorted True to perform a binary search on a sorted array.
		**/
		indexOf<T>(
			array: List<T>,
			value: T,
			isSorted: boolean): number;
	}

	//_.initial
	interface LoDashStatic {
		/**
		* Gets all but the last element or last n elements of an array. If a callback is provided 
		* elements at the end of the array are excluded from the result as long as the callback 
		* returns truey. The callback is bound to thisArg and invoked with three arguments; 
		* (value, index, array).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false.
		* @param array The array to query.
		* @param n Leaves this many elements behind, optional.
		* @return Returns everything but the last `n` elements of `array`.
		**/
		initial<T>(
			array: List<T>): T[];

		/**
		* @see _.initial
		* @param n The number of elements to exclude.
		**/
		initial<T>(
			array: List<T>,
			n: number): T[];

		/**
		* @see _.initial
		* @param callback The function called per element
		**/
		initial<T>(
			array: List<T>,
			callback: ListIterator<T, boolean>): T[];

		/**
		* @see _.initial
		* @param pluckValue _.pluck style callback
		**/
		initial<T>(
			array: List<T>,
			pluckValue: string): T[];

		/**
		* @see _.initial
		* @param whereValue _.where style callback
		**/
		initial<W, T>(
			array: List<T>,
			whereValue: W): T[];
	}

	//_.intersection
	interface LoDashStatic {
		/**
		* Creates an array of unique values present in all provided arrays using strict 
		* equality for comparisons, i.e. ===.
		* @param arrays The arrays to inspect.
		* @return Returns an array of composite values.
		**/
		intersection<T>(...arrays: List<T>[]): T[];
	}

	//_.last
	interface LoDashStatic {
		/**
		* Gets the last element or last n elements of an array. If a callback is provided 
		* elements at the end of the array are returned as long as the callback returns truey. 
		* The callback is bound to thisArg and invoked with three arguments; (value, index, array).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false.
		* @param array The array to query.
		* @return Returns the last element(s) of array.
		**/
		last<T>(array: List<T>): T;

		/**
		* @see _.last
		* @param n The number of elements to return
		**/
		last<T>(
			array: List<T>,
			n: number): T[];

		/**
		* @see _.last
		* @param callback The function called per element
		**/
		last<T>(
			array: List<T>,
			callback: ListIterator<T, boolean>,
			thisArg?: any): T[];

		/**
		* @see _.last
		* @param pluckValue _.pluck style callback
		**/
		last<T>(
			array: List<T>,
			pluckValue: string): T[];

		/**
		* @see _.last
		* @param whereValue _.where style callback
		**/
		last<W, T>(
			array: List<T>,
			whereValue: W): T[];
	}

	//_.lastIndexOf
	interface LoDashStatic {
		/**
		* Gets the index at which the last occurrence of value is found using strict equality 
		* for comparisons, i.e. ===. If fromIndex is negative, it is used as the offset from the 
		* end of the collection.
		* @param array The array to search.
		* @param value The value to search for.
		* @param fromIndex The index to search from.
		* @return The index of the matched value or -1.
		**/
		lastIndexOf<T>(
			array: List<T>,
			value: T,
			fromIndex?: number): number;
	}
	
	//_.pull
	interface LoDashStatic {
		/**
		* Removes all provided values from the given array using strict equality for comparisons, 
		* i.e. ===.
		* @param array The array to modify.
		* @param values The values to remove.
		* @return array.
		**/
		pull(
			array: List<any>,
			...values: any[]): any[];
	}

	//_.range
	interface LoDashStatic {
		/**
		* Creates an array of numbers (positive and/or negative) progressing from start up 
		* to but not including end. If start is less than stop a zero-length range is created 
		* unless a negative step is specified.
		* @param start The start of the range.
		* @param end The end of the range.
		* @param step The value to increment or decrement by.
		* @return Returns a new range array.
		**/

		range(
			start: number,
			stop: number,
			step?: number): number[];
		
		/**
		* @see _.range
		* @param end The end of the range.
		* @return Returns a new range array.
		* @note If start is not specified the implementation will never pull the step (step = arguments[2] || 0)
		**/
		range(stop: number): number[];
	}

	//_.remove
	interface LoDashStatic {
		/**
		* Removes all elements from an array that the callback returns truey for and returns 
		* an array of removed elements. The callback is bound to thisArg and invoked with three 
		* arguments; (value, index, array).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false.
		* @param array The array to modify.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return A new array of removed elements.
		**/
		remove(
			array: List<any>,
			callback?: ListIterator<any, boolean>,
			thisArg?: any): any[];

		/**
		* @see _.remove
		* @param pluckValue _.pluck style callback
		**/
		remove(
			array: List<any>,
			pluckValue?: string): any[];

		/**
		* @see _.remove
		* @param whereValue _.where style callback
		**/
		remove(
			array: List<any>,
			wherealue?: Dictionary<any>): any[];
	}

	//_.rest
	interface LoDashStatic {
		/**
		* The opposite of _.initial this method gets all but the first element or first n elements of 
		* an array. If a callback function is provided elements at the beginning of the array are excluded 
		* from the result as long as the callback returns truey. The callback is bound to thisArg and 
		* invoked with three arguments; (value, index, array).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will return 
		* the property value of the given element.
		* 
		* If an object is provided for callback the created "_.where" style callback will return true 
		* for elements that have the properties of the given object, else false.
		* @param array The array to query.
		* @param {(Function|Object|number|string)} [callback=1] The function called per element or the number 
		* of elements to exclude. If a property name or object is provided it will be used to create a 
		* ".pluck" or ".where" style callback, respectively.
		* @param {*} [thisArg] The this binding of callback.
		* @return Returns a slice of array.
		**/
		rest<T>(array: List<T>): T[];

		/**
		* @see _.rest
		**/
		rest<T>(
			array: List<T>,
            callback: ListIterator<T, boolean>,
			thisArg?: any): T[];

		/**
		* @see _.rest
		**/
		rest<T>(
			array: List<T>,
			n: number): T[];
		
		/**
		* @see _.rest
		**/
		rest<T>(
			array: List<T>,
			pluckValue: string): T[];
		
		/**
		* @see _.rest
		**/
        rest<W, T>(
			array: List<T>,
			whereValue: W): T[];

            /**
            * @see _.rest
            **/
            drop<T>(array: List<T>): T[];

            /**
            * @see _.rest
            **/
            drop<T>(
                array: List<T>,
                callback: ListIterator<T, boolean>,
                thisArg?: any): T[];

            /**
            * @see _.rest
            **/
            drop<T>(
                array: List<T>,
                n: number): T[];
            
            /**
            * @see _.rest
            **/
            drop<T>(
                array: List<T>,
                pluckValue: string): T[];
            
            /**
            * @see _.rest
            **/
            drop<W, T>(
                array: List<T>,
                whereValue: W): T[];

                /**
                * @see _.rest
                **/
                tail<T>(array: List<T>): T[];

                /**
                * @see _.rest
                **/
                tail<T>(
                    array: List<T>,
                    callback: ListIterator<T, boolean>,
                    thisArg?: any): T[];

                /**
                * @see _.rest
                **/
                tail<T>(
                    array: List<T>,
                    n: number): T[];
                
                /**
                * @see _.rest
                **/
                tail<T>(
                    array: List<T>,
                    pluckValue: string): T[];
                
                /**
                * @see _.rest
                **/
                tail<W, T>(
                    array: List<T>,
                    whereValue: W): T[];
	}

	//_.sortedIndex
	interface LoDashStatic {
		/**
		* Uses a binary search to determine the smallest index at which a value should be inserted 
		* into a given sorted array in order to maintain the sort order of the array. If a callback 
		* is provided it will be executed for value and each element of array to compute their sort 
		* ranking. The callback is bound to thisArg and invoked with one argument; (value).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false.
		* @param array The sorted list.
		* @param value The value to determine its index within `list`.
		* @param callback Iterator to compute the sort ranking of each value, optional.
		* @return The index at which value should be inserted into array.
		**/
		sortedIndex<T, TSort>(
			array: List<T>,
			value: T,
			callback?: (x: T) => TSort, 
			thisArg?: any): number;

		/**
		* @see _.sortedIndex
		* @param pluckValue the _.pluck style callback
		**/
		sortedIndex<T>(
			array: List<T>,
			value: T,
			pluckValue: string): number;

		/**
		* @see _.sortedIndex
		* @param pluckValue the _.where style callback
		**/
		sortedIndex<W, T>(
			array: List<T>,
			value: T,
			whereValue: W): number;
	}

	//_.union
	interface LoDashStatic {
		/**
		* Creates an array of unique values, in order, of the provided arrays using strict 
		* equality for comparisons, i.e. ===.
		* @param arrays The arrays to inspect.
		* @return Returns an array of composite values.
		**/
		union<T>(...arrays: List<T>[]): T[];
	}

	//_.uniq
	interface LoDashStatic {
		/**
		* Creates a duplicate-value-free version of an array using strict equality for comparisons, 
		* i.e. ===. If the array is sorted, providing true for isSorted will use a faster algorithm. 
		* If a callback is provided each element of array is passed through the callback before 
		* uniqueness is computed. The callback is bound to thisArg and invoked with three arguments; 
		* (value, index, array).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false.
		* @param array Array to remove duplicates from.
		* @param isSorted True if `array` is already sorted, optiona, default = false.
		* @param iterator Transform the elements of `array` before comparisons for uniqueness.
		* @param context 'this' object in `iterator`, optional.
		* @return Copy of `array` where all elements are unique.
		**/
		uniq<T, TSort>(array: List<T>, isSorted?: boolean): T[];

		uniq<T, TSort>(
			array: List<T>,
			isSorted: boolean,
			callback: ListIterator<T, TSort>,
			thisArg?: any): T[];

		/**
		* @see _.uniq
		**/
		uniq<T, TSort>(
			array: List<T>,
			callback: ListIterator<T, TSort>,
			thisArg?: any): T[];

		/**
		* @see _.uniq
		* @param pluckValue _.pluck style callback
		**/
		uniq<T>(
			array: List<T>,
			isSorted: boolean,
			pluckValue: string): T[];

		uniq<T>(
			array: List<T>,
			pluckValue: string): T[];

		/**
		* @see _.uniq
		* @param whereValue _.where style callback
		**/
		uniq<W, T>(
			array: List<T>,
			isSorted: boolean,
			whereValue: W): T[];

		uniq<W, T>(
			array: List<T>,
			whereValue: W): T[];

			/**
			* @see _.uniq
			**/
			unique<T>(array: List<T>, isSorted?: boolean): T[];

			unique<T, TSort>(
				array: List<T>,
				callback: ListIterator<T, TSort>,
				thisArg?: any): T[];

			/**
			* @see _.uniq
			**/
			unique<T, TSort>(
				array: List<T>,
				isSorted: boolean,
				callback: ListIterator<T, TSort>,
				thisArg?: any): T[];

			/**
			* @see _.uniq
			* @param pluckValue _.pluck style callback
			**/
			unique<T>(
				array: List<T>,
				isSorted: boolean,
				pluckValue: string): T[];

			unique<T>(
				array: List<T>,
				pluckValue: string): T[];

			/**
			* @see _.uniq
			* @param whereValue _.where style callback
			**/
			unique<W, T>(
				array: List<T>,
				whereValue?: W): T[];

			unique<W, T>(
				array: List<T>,
				isSorted: boolean,
				whereValue?: W): T[];
	}

	//_.without
	interface LoDashStatic {
		/**
		* Creates an array excluding all provided values using strict equality for comparisons, i.e. ===.
		* @param array The array to filter.
		* @param values The value(s) to exclude.
		* @return A new array of filtered values.
		**/
		without<T>(
			array: List<T>,
			...values: T[]): T[];
	}

	//_.zip
	interface LoDashStatic {
		/**
		* Creates an array of grouped elements, the first of which contains the first 
		* elements of the given arrays, the second of which contains the second elements 
		* of the given arrays, and so on.
		* @param arrays Arrays to process.
		* @return A new array of grouped elements.
		**/
		zip(...arrays: any[][]): any[][];

		/**
		* @see _.zip
		**/
		zip(...arrays: any[]): any[];

			/**
			* @see _.zip
			**/
			unzip(...arrays: any[][]): any[][];

			/**
			* @see _.zip
			**/
			unzip(...arrays: any[]): any[];
	}

	//_.zipObject
	interface LoDashStatic {
		/**
		* Creates an object composed from arrays of keys and values. Provide either a single 
		* two dimensional array, i.e. [[key1, value1], [key2, value2]] or two arrays, one of 
		* keys and one of corresponding values.
		* @param keys The array of keys.
		* @param values The array of values.
		* @return An object composed of the given keys and corresponding values.
		**/
		zipObject<TResult extends {}>(
			keys: List<string>,
			values: List<any>): TResult;

			/**
			* @see _.object
			**/
			object<TResult extends {}>(
				keys: List<string>,
				values: List<any>): TResult;
	}

	/* *************
	 * Collections *
	 ************* */

	//_.at
	interface LoDashStatic {
		/**
		* Creates an array of elements from the specified indexes, or keys, of the collection. 
		* Indexes may be specified as individual arguments or as arrays of indexes.
		* @param collection The collection to iterate over.
		* @param indexes The indexes of collection to retrieve, specified as individual indexes or 
		* arrays of indexes.
		* @return A new array of elements corresponding to the provided indexes.
		**/
		at<T>(
			collection: Collection<T>,
			indexes: number[]): T[];

		/**
		* @see _.at
		**/
		at<T>(
			collection: Collection<T>,
			...indexes: number[]): T[];
	}

	//_.contains
	interface LoDashStatic {
		/**
		* Checks if a given value is present in a collection using strict equality for comparisons, 
		* i.e. ===. If fromIndex is negative, it is used as the offset from the end of the collection.
		* @param collection The collection to iterate over.
		* @param target The value to check for.
		* @param fromIndex The index to search from.
		* @return True if the target element is found, else false.
		**/
		contains<T>(
			collection: Collection<T>,
			target: T,
			fromIndex?: number): boolean;

		/**
		* @see _.contains
		* @param dictionary The dictionary to iterate over.
		* @param key The key in the dictionary to search for.
		**/
		contains<T>(
			dictionary: Dictionary<T>,
			key: string,
			fromIndex?: number): boolean;

		/**
		* @see _.contains
		* @param searchString the string to search
		* @param targetString the string to search for
		**/
		contains(
			searchString: string,
			targetString: string,
			fromIndex?: number): boolean;

			/**
			* @see _.contains
			**/
			include<T>(
				collection: Collection<T>,
				target: T,
				fromIndex?: number): boolean;

			/**
			* @see _.contains
			**/
			include<T>(
				dictionary: Dictionary<T>,
				key: string,
				fromIndex?: number): boolean;

			/**
			* @see _.contains
			**/
			include(
				searchString: string,
				targetString: string,
				fromIndex?: number): boolean;
	}

	//_.countBy
	interface LoDashStatic {
		/**
		* Creates an object composed of keys generated from the results of running each element 
		* of collection through the callback. The corresponding value of each key is the number 
		* of times the key was returned by the callback. The callback is bound to thisArg and 
		* invoked with three arguments; (value, index|key, collection).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return Returns the composed aggregate object.
		**/
		countBy<T>(
			collection: Collection<T>,
			callback?: ListIterator<T, any>,
			thisArg?: any): Dictionary<number>;

		/**
		* @see _.countBy
		* @param callback Function name
		**/
		countBy<T>(
			collection: Collection<T>,
			callback: string,
			thisArg?: any): Dictionary<number>;			
	}

	interface LoDashArrayWrapper<T> {
		/**
		* @see _.countBy
		**/
		countBy<T>(
			callback?: ListIterator<T, any>,
			thisArg?: any): LoDashObjectWrapper<Dictionary<number>>;

		/**
		* @see _.countBy
		* @param callback Function name
		**/
		countBy<T>(
			callback: string,
			thisArg?: any): LoDashObjectWrapper<Dictionary<number>>;
	}

	//_.every
	interface LoDashStatic {
		/**
		* Checks if the given callback returns truey value for all elements of a collection. 
		* The callback is bound to thisArg and invoked with three arguments; (value, index|key, 
		* collection).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return True if all elements passed the callback check, else false.
		**/
		every<T>(
			collection: Collection<T>,
			callback?: ListIterator<T, boolean>,
			thisArg?: any): boolean;

		/**
		* @see _.every
		* @param pluckValue _.pluck style callback
		**/
		every<T>(
			collection: Collection<T>,
			pluckValue: string): boolean;

		/**
		* @see _.every
		* @param whereValue _.where style callback
		**/
		every<W, T>(
			collection: Collection<T>,
			whereValue: W): boolean;

			/**
			* @see _.every
			**/
			all<T>(
				collection: Collection<T>,
				callback?: ListIterator<T, boolean>,
				thisArg?: any): boolean;

			/**
			* @see _.every
			* @param pluckValue _.pluck style callback
			**/
			all<T>(
				collection: Collection<T>,
				pluckValue: string): boolean;

			/**
			* @see _.every
			* @param whereValue _.where style callback
			**/
			all<W, T>(
				collection: Collection<T>,
				whereValue: W): boolean;
	}

	//_.filter
	interface LoDashStatic {
		/**
		* Iterates over elements of a collection, returning an array of all elements the 
		* callback returns truey for. The callback is bound to thisArg and invoked with three 
		* arguments; (value, index|key, collection).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param context The this binding of callback.
		* @return Returns a new array of elements that passed the callback check.
		**/
		filter<T>(
			collection: Collection<T>,
			callback: ListIterator<T, boolean>,
			thisArg?: any): T[];

		/**
		* @see _.filter
		* @param pluckValue _.pluck style callback
		**/
		filter<T>(
			collection: Collection<T>,
			pluckValue: string): T[];

		/**
		* @see _.filter
		* @param pluckValue _.pluck style callback
		**/
        filter<W, T>(
			collection: Collection<T>,
            whereValue: W): T[];

			/**
			* @see _.filter
			**/
			select<T>(
				collection: Collection<T>,
				callback: ListIterator<T, boolean>,
				thisArg?: any): T[];

			/**
			* @see _.filter
			* @param pluckValue _.pluck style callback
			**/
			select<T>(
				collection: Collection<T>,
				pluckValue: string): T[];

			/**
			* @see _.filter
			* @param pluckValue _.pluck style callback
			**/
			select<W, T>(
				collection: Collection<T>,
				whereValue: W): T[];
	}

	interface LoDashArrayWrapper<T> {
		/**
		* @see _.filter
		**/
		filter<T>(
			callback: ListIterator<T, boolean>,
			thisArg?: any): LoDashArrayWrapper<T>;

		/**
		* @see _.filter
		* @param pluckValue _.pluck style callback
		**/
		filter<T>(
			pluckValue: string): LoDashArrayWrapper<T>;

		/**
		* @see _.filter
		* @param pluckValue _.pluck style callback
		**/
		filter<W, T>(
			whereValue: W): LoDashArrayWrapper<T>;

			/**
			* @see _.filter
			**/
			select<T>(
				callback: ListIterator<T, boolean>,
				thisArg?: any): LoDashArrayWrapper<T>;

			/**
			* @see _.filter
			* @param pluckValue _.pluck style callback
			**/
			select<T>(
				pluckValue: string): LoDashArrayWrapper<T>;

			/**
			* @see _.filter
			* @param pluckValue _.pluck style callback
			**/
			select<W, T>(
				whereValue: W): LoDashArrayWrapper<T>;
	}

	//_.find
	interface LoDashStatic {
		/**
		* Iterates over elements of a collection, returning the first element that the callback 
		* returns truey for. The callback is bound to thisArg and invoked with three arguments; 
		* (value, index|key, collection).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false.
		* @param collection Searches for a value in this list.
		* @param callback The function called per iteration. 
		* @param thisArg The this binding of callback.
		* @return The found element, else undefined.
		**/
		find<T>(
			collection: Collection<T>,
			callback: ListIterator<T, boolean>,
			thisArg?: any): T;

		/**
		* @see _.find
		* @param _.pluck style callback
		**/
		find<W, T>(
			collection: Collection<T>,
			whereValue: W): T;

		/**
		* @see _.find
		* @param _.where style callback
		**/
		find<T>(
			collection: Collection<T>,
			pluckValue: string): T;

			/**
			* @see _.find
			**/
			detect<T>(
				collection: Collection<T>,
				callback: ListIterator<T, boolean>,
				thisArg?: any): T;

			/**
			* @see _.find
			* @param _.pluck style callback
			**/
			detect<W, T>(
				collection: Collection<T>,
				whereValue: W): T;

			/**
			* @see _.find
			* @param _.where style callback
			**/
			detect<T>(
				collection: Collection<T>,
				pluckValue: string): T;

			/**
			* @see _.find
			**/
			findWhere<T>(
				collection: Collection<T>,
				callback: ListIterator<T, boolean>,
				thisArg?: any): T;

			/**
			* @see _.find
			* @param _.pluck style callback
			**/
			findWhere<W, T>(
				collection: Collection<T>,
				whereValue: W): T;

			/**
			* @see _.find
			* @param _.where style callback
			**/
			findWhere<T>(
				collection: Collection<T>,
				pluckValue: string): T;
	}

	//_.findLast
	interface LoDashStatic {
		/**
		* This method is like _.find except that it iterates over elements of a collection from 
		* right to left.
		* @param collection Searches for a value in this list.
		* @param callback The function called per iteration. 
		* @param thisArg The this binding of callback.
		* @return The found element, else undefined.
		**/
		findLast<T>(
			collection: Collection<T>,
			callback: ListIterator<T, boolean>,
			thisArg?: any): T;

		/**
		* @see _.find
		* @param _.pluck style callback
		**/
		findLast<W, T>(
			collection: Collection<T>,
			whereValue: W): T;

		/**
		* @see _.find
		* @param _.where style callback
		**/
		findLast<T>(
			collection: Collection<T>,
			pluckValue: string): T;
	}

	//_.forEach
	interface LoDashStatic {
		/**
		* Iterates over elements of a collection, executing the callback for each element. 
		* The callback is bound to thisArg and invoked with three arguments; (value, index|key, 
		* collection). Callbacks may exit iteration early by explicitly returning false.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		**/
		forEach<T>(
			collection: List<T>,
			callback: ListIterator<T, void >,
			thisArg?: any): List<T>;

		/**
		* @see _.forEach
		**/
		forEach<T extends {}>(
			object: Dictionary<T>,
			callback: ObjectIterator<T, void >,
			thisArg?: any): Dictionary<T>;

			/**
			* @see _.forEach
			**/
			each<T>(
				collection: List<T>,
				callback: ListIterator<T, void>,
				thisArg?: any): List<T>;

			/**
			* @see _.forEach
			* @param object The object to iterate over
			* @param callback The function called per iteration.
			* @param thisArg The this binding of callback.
			**/
			each<T extends {}>(
				object: Dictionary<T>,
				callback: ObjectIterator<T, void>,
				thisArg?: any): Dictionary<T>;			
	}

	interface LoDashArrayWrapper<T> {
		/**
		* @see _.forEach
		**/
		forEach<T>(
			callback: ListIterator<T, void >,
			thisArg?: any): LoDashArrayWrapper<T>;

			/**
			* @see _.forEach
			**/
			each<T>(
				callback: ListIterator<T, void >,
				thisArg?: any): LoDashArrayWrapper<T>;
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.forEach
		**/
		forEach<T extends {}>(
			callback: ObjectIterator<T, void >,
			thisArg?: any): LoDashObjectWrapper<T>;

			/**
			* @see _.forEach
			**/
			each<T extends {}>(
				callback: ObjectIterator<T, void >,	
				thisArg?: any): LoDashObjectWrapper<T>;
	}

	//_.forEachRight
	interface LoDashStatic {
		/**
		* This method is like _.forEach except that it iterates over elements of a 
		* collection from right to left.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		**/
		forEachRight<T>(
			collection: List<T>,
			callback: ListIterator<T, void >,
			thisArg?: any): List<T>;

		/**
		* @see _.forEachRight
		**/
		forEachRight<T extends {}>(
			object: Dictionary<T>,
			callback: ObjectIterator<T, void >,
			thisArg?: any): Dictionary<T>;

			/**
			* @see _.forEachRight
			**/
			eachRight<T>(
				collection: List<T>,
				callback: ListIterator<T, void>,
				thisArg?: any): List<T>;

			/**
			* @see _.forEachRight
			* @param object The object to iterate over
			* @param callback The function called per iteration.
			* @param thisArg The this binding of callback.
			**/
			eachRight<T extends {}>(
				object: Dictionary<T>,
				callback: ObjectIterator<T, void>,
				thisArg?: any): Dictionary<T>;
	}

	interface LoDashArrayWrapper<T> {
		/**
		* @see _.forEachRight
		**/
		forEachRight<T>(
			callback: ListIterator<T, void >,
			thisArg?: any): LoDashArrayWrapper<T>;

			/**
			* @see _.forEachRight
			**/
			eachRight<T>(
				callback: ListIterator<T, void >,
				thisArg?: any): LoDashArrayWrapper<T>;
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.forEachRight
		**/
		forEachRight<T extends {}>(
			callback: ObjectIterator<T, void >,
			thisArg?: any): LoDashObjectWrapper<Dictionary<T>>;

			/**
			* @see _.forEachRight
			* @param object The object to iterate over
			* @param callback The function called per iteration.
			* @param thisArg The this binding of callback.
			**/
			eachRight<T extends {}>(
				callback: ObjectIterator<T, void>,
				thisArg?: any): LoDashObjectWrapper<Dictionary<T>>;
	}

	//_.groupBy
	interface LoDashStatic {
		/**
		* Creates an object composed of keys generated from the results of running each element 
		* of a collection through the callback. The corresponding value of each key is an array 
		* of the elements responsible for generating the key. The callback is bound to thisArg 
		* and invoked with three arguments; (value, index|key, collection).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return Returns the composed aggregate object.
		**/
		groupBy<T>(
			collection: List<T>,
			callback?: ListIterator<T, any>,
			thisArg?: any): Dictionary<T[]>;

		/**
		* @see _.groupBy
		* @param pluckValue _.pluck style callback
		**/
		groupBy<T>(
			collection: List<T>,
			pluckValue: string): Dictionary<T[]>;

		/**
		* @see _.groupBy
		* @param whereValue _.where style callback
		**/
		groupBy<W, T>(
			collection: List<T>,
			whereValue: W): Dictionary<T[]>;
	}

    interface LoDashArrayWrapper<T> {
		/**
		* @see _.groupBy
		**/
		groupBy<T>(
			callback: ListIterator<T, any>,
			thisArg?: any): _.LoDashObjectWrapper<Dictionary<T[]>>;

		/**
		* @see _.groupBy
		**/
		groupBy<T>(
			pluckValue: string): _.LoDashObjectWrapper<Dictionary<T[]>>;

		/**
		* @see _.groupBy
		**/
		groupBy<W, T>(
			whereValue: W): _.LoDashObjectWrapper<Dictionary<T[]>>;
	}

	//_.indexBy
	interface LoDashStatic {
		/**
		* Creates an object composed of keys generated from the results of running each element 
		* of the collection through the given callback. The corresponding value of each key is 
		* the last element responsible for generating the key. The callback is bound to thisArg 
		* and invoked with three arguments; (value, index|key, collection).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return Returns the composed aggregate object.
		**/
		indexBy<T>(
			list: List<T>,
			iterator: ListIterator<T, any>,
			context?: any): Dictionary<T>;

		/**
		* @see _.indexBy
		* @param pluckValue _.pluck style callback
		**/
		indexBy<T>(
			collection: List<T>,
			pluckValue: string): Dictionary<T>;

		/**
		* @see _.indexBy
		* @param whereValue _.where style callback
		**/
		indexBy<W, T>(
			collection: List<T>,
			whereValue: W): Dictionary<T>;
	}

	//_.invoke
	interface LoDashStatic {
		/**
		* Invokes the method named by methodName on each element in the collection returning 
		* an array of the results of each invoked method. Additional arguments will be provided 
		* to each invoked method. If methodName is a function it will be invoked for, and this 
		* bound to, each element in the collection.
		* @param collection The collection to iterate over.
		* @param methodName The name of the method to invoke.
		* @param args Arguments to invoke the method with.
		**/
		invoke<T extends {}>(
			collection: Collection<T>,
			methodName: string,
			...args: any[]): any;

		/**
		* @see _.invoke
		**/
		invoke<T extends {}>(
			collection: Collection<T>,
			method: Function,
			...args: any[]): any;
	}

	//_.map
	interface LoDashStatic {
		/**
		* Creates an array of values by running each element in the collection through the callback. 
		* The callback is bound to thisArg and invoked with three arguments; (value, index|key, 
		* collection).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will return 
		* the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return true 
		* for elements that have the properties of the given object, else false.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param theArg The this binding of callback.
		* @return The mapped array result.
		**/
		map<T, TResult>(
			collection: List<T>,
			callback: ListIterator<T, TResult>,
			thisArg?: any): TResult[];

		/**
		* @see _.map
		* @param object The object to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg `this` object in `iterator`, optional.
		* @return The mapped object result.
		**/
		map<T extends {}, TResult>(
			object: Dictionary<T>,
			callback: ObjectIterator<T, TResult>,
			thisArg?: any): TResult[];

		/**
		* @see _.map
		* @param pluckValue _.pluck style callback
		**/
		map<T, TResult>(
			collection: List<T>,
			pluckValue: string): TResult[];

			/**
			* @see _.map
			**/
			collect<T, TResult>(
				collection: List<T>,
				callback: ListIterator<T, TResult>,
				thisArg?: any): TResult[];

			/**
			* @see _.map
			**/
			collect<T extends {}, TResult>(
				object: Dictionary<T>,
				callback: ObjectIterator<T, TResult>,
				thisArg?: any): TResult[];

			/**
			* @see _.map
			**/
			collect<T, TResult>(
				collection: List<T>,
				pluckValue: string): TResult[];
	}

	interface LoDashArrayWrapper<T> {
		/**
		* @see _.map
		**/
		map<T, TResult>(
			callback: ListIterator<T, TResult>,
			thisArg?: any): LoDashArrayWrapper<TResult>;

		/**
		* @see _.map
		* @param pluckValue _.pluck style callback
		**/
		map<T, TResult>(
			pluckValue: string): LoDashArrayWrapper<TResult>;

			/**
			* @see _.map
			**/
			collect<T, TResult>(
				callback: ListIterator<T, TResult>,
				thisArg?: any): LoDashArrayWrapper<TResult>;

			/**
			* @see _.map
			**/
			collect<T, TResult>(
				pluckValue: string): LoDashArrayWrapper<TResult>;
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.map
		**/
		map<T extends {}, TResult>(
			callback: ObjectIterator<T, TResult>,
			thisArg?: any): LoDashObjectWrapper<TResult>;

			/**
			* @see _.map
			**/
			collect<T extends {}, TResult>(
				callback: ObjectIterator<T, TResult>,
				thisArg?: any): LoDashObjectWrapper<TResult>;
	}

	//_.max
	interface LoDashStatic {
		/**
		* Retrieves the maximum value of a collection. If the collection is empty or falsey -Infinity is 
		* returned. If a callback is provided it will be executed for each value in the collection to 
		* generate the criterion by which the value is ranked. The callback is bound to thisArg and invoked 
		* with three arguments; (value, index, collection).
		* 
		* If a property name is provided for callback the created "_.pluck" style callback will return the 
		* property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return true for 
		* elements that have the properties of the given object, else false.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return Returns the maximum value.
		**/
		max<T>(
			collection: Collection<T>,
			callback?: ListIterator<T, any>,
			thisArg?: any): T;

		/**
		* @see _.max
		* @param pluckValue _.pluck style callback
		**/
		max<T>(
			collection: Collection<T>,
			pluckValue: string): T;

		/**
		* @see _.max
		* @param whereValue _.where style callback
		**/
		max<W, T>(
			collection: Collection<T>,
			whereValue: W): T;
	}

	//_.min
	interface LoDashStatic {
		/**
		* Retrieves the minimum value of a collection. If the collection is empty or falsey 
		* Infinity is returned. If a callback is provided it will be executed for each value 
		* in the collection to generate the criterion by which the value is ranked. The callback 
		* is bound to thisArg and invoked with three arguments; (value, index, collection).
		*
		* If a property name is provided for callback the created "_.pluck" style callback 
		* will return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will 
		* return true for elements that have the properties of the given object, else false.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return Returns the maximum value.
		**/
		min<T>(
			collection: Collection<T>,
			callback?: ListIterator<T, any>,
			thisArg?: any): T;

		/**
		* @see _.min
		* @param pluckValue _.pluck style callback
		**/
		min<T>(
			collection: Collection<T>,
			pluckValue: string): T;

		/**
		* @see _.min
		* @param whereValue _.where style callback
		**/
		min<W, T>(
			collection: Collection<T>,
			whereValue: W): T;
	}

	//_.pluck
	interface LoDashStatic {
		/**
		* Retrieves the value of a specified property from all elements in the collection.
		* @param collection The collection to iterate over.
		* @param property The property to pluck.
		* @return A new array of property values.
		**/
		pluck<T extends {}>(
			collection: Collection<T>,
			property: string): any[];
	}

	//_.reduce
	interface LoDashStatic {
		/**
		* Reduces a collection to a value which is the accumulated result of running each 
		* element in the collection through the callback, where each successive callback execution 
		* consumes the return value of the previous execution. If accumulator is not provided the 
		* first element of the collection will be used as the initial accumulator value. The callback 
		* is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param accumulator Initial value of the accumulator.
		* @param thisArg The this binding of callback.
		* @return Returns the accumulated value.
		**/
		reduce<T, TResult>(
			collection: Collection<T>,
			callback: MemoIterator<T, TResult>,
			accumulator: TResult,
			thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
		reduce<T, TResult>(
			collection: Collection<T>,
			callback: MemoIterator<T, TResult>,
			thisArg?: any): TResult;

			/**
			* @see _.reduce
			**/
			inject<T, TResult>(
				collection: Collection<T>,
				callback: MemoIterator<T, TResult>,
				accumulator: TResult,
				thisArg?: any): TResult;

			/**
			* @see _.reduce
			**/
			inject<T, TResult>(
				collection: Collection<T>,
				callback: MemoIterator<T, TResult>,
				thisArg?: any): TResult;

			/**
			* @see _.reduce
			**/
			foldl<T, TResult>(
				collection: Collection<T>,
				callback: MemoIterator<T, TResult>,
				accumulator: TResult,
				thisArg?: any): TResult;

			/**
			* @see _.reduce
			**/
			foldl<T, TResult>(
				collection: Collection<T>,
				callback: MemoIterator<T, TResult>,
				thisArg?: any): TResult;
	}

	//_.reduceRight
	interface LoDashStatic {
		/**
		* This method is like _.reduce except that it iterates over elements of a collection from 
		* right to left.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param accumulator Initial value of the accumulator.
		* @param thisArg The this binding of callback.
		* @return The accumulated value.
		**/
		reduceRight<T, TResult>(
			collection: Collection<T>,
			callback: MemoIterator<T, TResult>,
			accumulator: TResult,
			thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
		reduceRight<T, TResult>(
			collection: Collection<T>,
			callback: MemoIterator<T, TResult>,
			thisArg?: any): TResult;

			/**
			* @see _.reduceRight
			**/
			foldr<T, TResult>(
				collection: Collection<T>,
				callback: MemoIterator<T, TResult>,
				accumulator: TResult,
				thisArg?: any): TResult;

			/**
			* @see _.reduceRight
			**/
			foldr<T, TResult>(
				collection: Collection<T>,
				callback: MemoIterator<T, TResult>,
				thisArg?: any): TResult;
	}

	//_.reject
	interface LoDashStatic {
		/**
		* The opposite of _.filter this method returns the elements of a collection that 
		* the callback does not return truey for.
		*
		* If a property name is provided for callback the created "_.pluck" style callback 
		* will return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will 
		* return true for elements that have the properties of the given object, else false.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return A new array of elements that failed the callback check.
		**/
		reject<T>(
			collection: Collection<T>,
			callback: ListIterator<T, boolean>,
			thisArg?: any): T[];

		/**
		* @see _.reject
		* @param pluckValue _.pluck style callback
		**/
		reject<T>(
			collection: Collection<T>,
			pluckValue: string): T[];

		/**
		* @see _.reject
		* @param whereValue _.where style callback
		**/
		reject<W, T>(
			collection: Collection<T>,
			whereValue: W): T[];
	}

	//_.sample
	interface LoDashStatic {
		/**
		* Retrieves a random element or n random elements from a collection.
		* @param collection The collection to sample.
		* @return Returns the random sample(s) of collection.
		**/
		sample<T>(collection: Collection<T>): T;

		/**
		* @see _.sample
		* @param n The number of elements to sample.
		**/
		sample<T>(collection: Collection<T>, n: number): T[];
	}

	//_.shuffle
	interface LoDashStatic {
		/**
		* Creates an array of shuffled values, using a version of the Fisher-Yates shuffle. 
		* See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
		* @param collection The collection to shuffle.
		* @return Returns a new shuffled collection.
		**/
		shuffle<T>(collection: Collection<T>): T[];
	}

	//_.size
	interface LoDashStatic {
		/**
		* Gets the size of the collection by returning collection.length for arrays and array-like 
		* objects or the number of own enumerable properties for objects.
		* @param collection The collection to inspect.
		* @return collection.length
		**/
		size<T>(collection: List<T>): number;

		/**
		* @see _.size
		* @param object The object to inspect
		* @return The number of own enumerable properties.
		**/
		size<T extends {}>(object: T): number;

		/**
		* @see _.size
		* @param aString The string to inspect
		* @return The length of aString
		**/
		size(aString: string): number;
	}

	//_.some
	interface LoDashStatic {
		/**
		* Checks if the callback returns a truey value for any element of a collection. The function 
		* returns as soon as it finds a passing value and does not iterate over the entire collection. 
		* The callback is bound to thisArg and invoked with three arguments; (value, index|key, collection).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will return 
		* the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return true for 
		* elements that have the properties of the given object, else false.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return True if any element passed the callback check, else false.
		**/
		some<T>(
			collection: Collection<T>,
			callback?: ListIterator<T, boolean>,
			thisArg?: any): boolean;

		/**
		* @see _.some
		* @param pluckValue _.pluck style callback
		**/
		some<T>(
			collection: Collection<T>,
			pluckValue: string): boolean;

		/**
		* @see _.some
		* @param whereValue _.where style callback
		**/
		some<W, T>(
			collection: Collection<T>,
			whereValue: W): boolean;

			/**
			* @see _.some
			**/
			any<T>(
				collection: Collection<T>,
				callback?: ListIterator<T, boolean>,
				thisArg?: any): boolean;

			/**
			* @see _.some
			* @param pluckValue _.pluck style callback
			**/
			any<T>(
				collection: Collection<T>,
				pluckValue: string): boolean;

			/**
			* @see _.some
			* @param whereValue _.where style callback
			**/
			any<W, T>(
				collection: Collection<T>,
				whereValue: W): boolean;
	}

	//_.sortBy
	interface LoDashStatic {
		/**
		* Creates an array of elements, sorted in ascending order by the results of running each 
		* element in a collection through the callback. This method performs a stable sort, that 
		* is, it will preserve the original sort order of equal elements. The callback is bound 
		* to thisArg and invoked with three arguments; (value, index|key, collection).
		*
		* If a property name is provided for callback the created "_.pluck" style callback will 
		* return the property value of the given element.
		*
		* If an object is provided for callback the created "_.where" style callback will return 
		* true for elements that have the properties of the given object, else false.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return A new array of sorted elements.
		**/
		sortBy<T, TSort>(
			collection: List<T>,
			callback?: ListIterator<T, TSort>,
			thisArg?: any): T[];

		/**
		* @see _.sortBy
		* @param pluckValue _.pluck style callback
		**/
		sortBy<T>(
			collection: List<T>,
			pluckValue: string): T[];

		/**
		* @see _.sortBy
		* @param whereValue _.where style callback
		**/
		sortBy<W, T>(
			collection: List<T>,
			whereValue: W): T[];
	}

	//_.toArray
	interface LoDashStatic {
		/**
		* Converts the collection to an array.
		* @param collection The collection to convert.
		* @return The new converted array.
		**/
		toArray<T>(collection: Collection<T>): T[];
	}

	//_.where
	interface LoDashStatic {
		/**
		* Performs a deep comparison of each element in a collection to the given properties 
		* object, returning an array of all elements that have equivalent property values.
		* @param collection The collection to iterate over.
		* @param properties The object of property values to filter by.
		* @return A new array of elements that have the given properties.
		**/
		where<T, U extends {}>(
			list: Collection<T>,
			properties: U): T[];
	}

	/*************
	 * Functions *
	 *************/

	//_.after
	interface LoDashStatic {
		/**
		* Creates a function that executes func, with the this binding and arguments of the 
		* created function, only after being called n times.
		* @param n The number of times the function must be called before func is executed.
		* @param func The function to restrict.
		* @return The new restricted function.
		**/
		after(
			n: number,
			func: Function): Function;			
	}

	interface LoDashWrapper<T> {
		/**
		* @see _.after
		**/
		after(func: Function): LoDashObjectWrapper<Function>;
	}

	//_.bind
	interface LoDashStatic {
		/**
		* Creates a function that, when called, invokes func with the this binding of thisArg 
		* and prepends any additional bind arguments to those provided to the bound function.
		* @param func The function to bind.
		* @param thisArg The this binding of func.
		* @param args Arguments to be partially applied.
		* @return The new bound function.
		**/
		bind(
			func: Function,
			thisArg: any,
			...args: any[]): () => any;			
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.bind
		**/
		bind(
			thisArg: any,
			...args: any[]): LoDashObjectWrapper<() => any>;
	}

	//_.bindAll
	interface LoDashStatic {
		/**
		* Binds methods of an object to the object itself, overwriting the existing method. Method 
		* names may be specified as individual arguments or as arrays of method names. If no method 
		* names are provided all the function properties of object will be bound.
		* @param object The object to bind and assign the bound methods to.
		* @param methodNames The object method names to bind, specified as individual method names 
		* or arrays of method names.
		* @return object
		**/
		bindAll<T>(
			object: T,
			...methodNames: string[]): T;			
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.bindAll
		**/
		bindAll<T>(...methodNames: string[]): LoDashWrapper<T>;
	}

	//_.bindKey
	interface LoDashStatic {
		/**
		* Creates a function that, when called, invokes the method at object[key] and prepends any 
		* additional bindKey arguments to those provided to the bound function. This method differs 
		* from _.bind by allowing bound functions to reference methods that will be redefined or don't 
		* yet exist. See http://michaux.ca/articles/lazy-function-definition-pattern.
		* @param object The object the method belongs to.
		* @param key The key of the method.
		* @param args Arguments to be partially applied.
		* @return The new bound function.
		**/
		bindKey<T>(
			object: T,
			key: string,
			...args: any[]): Function;			
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.bindKey
		**/
		bindKey(
			key: string,
			...args: any[]): LoDashObjectWrapper<Function>;
	}

	//_.compose
	interface LoDashStatic {
		/**
		* Creates a function that is the composition of the provided functions, where each function 
		* consumes the return value of the function that follows. For example, composing the functions 
		* f(), g(), and h() produces f(g(h())). Each function is executed with the this binding of the 
		* composed function.
		* @param funcs Functions to compose.
		* @return The new composed function.
		**/
		compose(...funcs: Function[]): Function;	
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.compose
		**/
		compose(...funcs: Function[]): LoDashObjectWrapper<Function>;
	}

	//_.createCallback
	interface LoDashStatic {
		/**
		* Produces a callback bound to an optional thisArg. If func is a property name the created 
		* callback will return the property value for a given element. If func is an object the created 
		* callback will return true for elements that contain the equivalent object properties, 
		* otherwise it will return false.
		* @param func The value to convert to a callback.
		* @param thisArg The this binding of the created callback.
		* @param argCount The number of arguments the callback accepts.
		* @return A callback function.
		**/
		createCallback(
			func: string,
			thisArg?: any,
			argCount?: number): () => any;

		/**
		* @see _.createCallback
		**/
		createCallback(
			func: Dictionary<any>,
			thisArg?: any,
			argCount?: number): () => boolean;			
	}

	interface LoDashWrapper<T> {
		/**
		* @see _.createCallback
		**/
		createCallback(
			thisArg?: any,
			argCount?: number): LoDashObjectWrapper<() => any>;
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.createCallback
		**/
		createCallback(
			thisArg?: any,
			argCount?: number): LoDashObjectWrapper<() => any>;
	}

	//_.curry
	interface LoDashStatic {
		/**
		* Creates a function which accepts one or more arguments of func that when invoked either 
		* executes func returning its result, if all func arguments have been provided, or returns 
		* a function that accepts one or more of the remaining func arguments, and so on. The arity 
		* of func can be specified if func.length is not sufficient.
		* @param func The function to curry.
		* @param arity The arity of func.
		* @return The new curried function.
		**/
		curry(
			func: Function,
			arity?: number): Function;	
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.curry
		**/
		curry(arity?: number): LoDashObjectWrapper<Function>;
	}

	//_.debounce
	interface LoDashStatic {
		/**
		* Creates a function that will delay the execution of func until after wait milliseconds have 
		* elapsed since the last time it was invoked. Provide an options object to indicate that func 
		* should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls 
		* to the debounced function will return the result of the last func call.
		*
		* Note: If leading and trailing options are true func will be called on the trailing edge of 
		* the timeout only if the the debounced function is invoked more than once during the wait 
		* timeout.
		* @param func The function to debounce.
		* @param wait The number of milliseconds to delay.
		* @param options The options object.
		* @param options.leading Specify execution on the leading edge of the timeout.
		* @param options.maxWait The maximum time func is allowed to be delayed before it’s called.
		* @param options.trailing Specify execution on the trailing edge of the timeout.
		* @return The new debounced function.
		**/
		debounce<T extends Function>(
			func: T,
			wait: number,
			options?: DebounceSettings): T;			
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.debounce
		**/
		debounce(
			wait: number,
			options?: DebounceSettings): LoDashObjectWrapper<Function>;
	}

	interface DebounceSettings {
		/**
		* Specify execution on the leading edge of the timeout.
		**/
		leading?: boolean;
		
		/**
		* The maximum time func is allowed to be delayed before it’s called.
		**/
		maxWait?: number;

		/**
		* Specify execution on the trailing edge of the timeout.
		**/
		trailing?: boolean;
	}

	//_.defer
	interface LoDashStatic {
		/**
		* Defers executing the func function until the current call stack has cleared. Additional 
		* arguments will be provided to func when it is invoked.
		* @param func The function to defer.
		* @param args Arguments to invoke the function with.
		* @return The timer id.
		**/
		defer(
			func: Function,
			...args: any[]): number;			
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.defer
		**/
		defer(...args: any[]): LoDashWrapper<number>;
	}

	//_.delay
	interface LoDashStatic {
		/**
		* Executes the func function after wait milliseconds. Additional arguments will be provided 
		* to func when it is invoked.
		* @param func The function to delay.
		* @param wait The number of milliseconds to delay execution.
		* @param args Arguments to invoke the function with.
		* @return The timer id.
		**/
		delay(
			func: Function,
			wait: number,
			...args: any[]): number;			
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.delay
		**/
		delay(
			wait: number,
			...args: any[]): LoDashWrapper<number>;
	}

	//_.memoize
	interface LoDashStatic {
		/**
		* Creates a function that memoizes the result of func. If resolver is provided it will be 
		* used to determine the cache key for storing the result based on the arguments provided to 
		* the memoized function. By default, the first argument provided to the memoized function is 
		* used as the cache key. The func is executed with the this binding of the memoized function. 
		* The result cache is exposed as the cache property on the memoized function.
		* @param func Computationally expensive function that will now memoized results.
		* @param resolver Hash function for storing the result of `fn`.
		* @return Returns the new memoizing function.
		**/
        memoize<T extends Function>(
			func: T,
			resolver?: Function): T;
	}

	//_.once
	interface LoDashStatic {
		/**
		* Creates a function that is restricted to execute func once. Repeat calls to the function 
		* will return the value of the first call. The func is executed with the this binding of the 
		* created function.
		* @param func Function to only execute once.
		* @return The new restricted function.
		**/
        once<T extends Function>(func: T): T;
	}

	//_.partial
	interface LoDashStatic {
		/**
		* Creates a function that, when called, invokes func with any additional partial arguments 
		* prepended to those provided to the new function. This method is similar to _.bind except 
		* it does not alter the this binding.
		* @param func The function to partially apply arguments to.
		* @param args Arguments to be partially applied.
		* @return The new partially applied function.
		**/
		partial(
			func: Function,
			...args: any[]): Function;
	}

	//_.partialRight
	interface LoDashStatic {
		/**
		* This method is like _.partial except that partial arguments are appended to those provided 
		* to the new function.
		* @param func The function to partially apply arguments to.
		* @param args Arguments to be partially applied.
		* @return The new partially applied function.
		**/
		partialRight(
			func: Function,
			...args: any[]): Function;
	}

	//_.throttle
	interface LoDashStatic {
		/**
		* Creates a function that, when executed, will only call the func function at most once per 
		* every wait milliseconds. Provide an options object to indicate that func should be invoked 
		* on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled 
		* function will return the result of the last func call.
		*
		* Note: If leading and trailing options are true func will be called on the trailing edge of 
		* the timeout only if the the throttled function is invoked more than once during the wait timeout.
		* @param func The function to throttle.
		* @param wait The number of milliseconds to throttle executions to.
		* @param options The options object.
		* @param options.leading Specify execution on the leading edge of the timeout.
		* @param options.trailing Specify execution on the trailing edge of the timeout.
		* @return The new throttled function.
		**/
        throttle<T extends Function>(
			func: T,
			wait: number,
			options?: ThrottleSettings): T;
	}

	interface ThrottleSettings {

		/**
		* If you'd like to disable the leading-edge call, pass this as false.
		**/
		leading?: boolean;

		/**
		* If you'd like to disable the execution on the trailing-edge, pass false.
		**/
		trailing?: boolean;
	}

	//_.wrap
	interface LoDashStatic {
		/**
		* Creates a function that provides value to the wrapper function as its first argument. 
		* Additional arguments provided to the function are appended to those provided to the 
		* wrapper function. The wrapper is executed with the this binding of the created function.
		* @param value The value to wrap.
		* @param wrapper The wrapper function.
		* @return The new function.
		**/
		wrap(
			value: any,
			wrapper: (func: Function, ...args: any[]) => any): Function;
	}

	/*************
	 * Objects   *
	 *************/

	//_.assign
	interface LoDashStatic {
		/**
		* Assigns own enumerable properties of source object(s) to the destination object. Subsequent 
		* sources will overwrite property assignments of previous sources. If a callback is provided 
		* it will be executed to produce the assigned values. The callback is bound to thisArg and 
		* invoked with two arguments; (objectValue, sourceValue).
		* @param object The destination object.
		* @param s1-8 The source object(s)
		* @param callback The function to customize merging properties.
		* @param thisArg The this binding of callback.
		* @return The destination object.
		**/
        assign<P, T, S1, Value, Result>(
            object: T,
            s1: S1,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

		/**
		* @see _.assign
		**/
        assign<P, T, S1, S2, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

		/**
		* @see _.assign
		**/
        assign<P, T, S1, S2, S3, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
            s3: S3,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

		/**
		* @see _.assign
		**/
        assign<P, T, S1, S2, S3, S4, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
            s3: S3,
            s4: S4,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

		/**
		* @see _.assign
		**/
	extend<P, T, S1, Value, Result>(
            object: T,
            s1: S1,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

		/**
		* @see _.assign
		**/
        extend<P, T, S1, S2, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

		/**
		* @see _.assign
		**/
        extend<P, T, S1, S2, S3, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
            s3: S3,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

		/**
		* @see _.assign
		**/
        extend<P, T, S1, S2, S3, S4, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
            s3: S3,
            s4: S4,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.assign
		**/
		assign<S1, Value, TResult>(
			s1: S1,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
			thisArg?: any): TResult;

		/**
		* @see _.assign
		**/
		assign<S1, S2, Value, TResult>(
			s1: S1,
			s2: S2,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
			thisArg?: any): TResult;
		/**
		* @see _.assign
		**/
		assign<S1, S2, S3, Value, TResult>(
			s1: S1,
			s2: S2,
			s3: S3,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
			thisArg?: any): TResult;
		/**
		* @see _.assign
		**/
		assign<S1, S2, S3, S4, Value, TResult>(
			s1: S1,
			s2: S2,
			s3: S3,
			s4: S4,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
			thisArg?: any): TResult;
		/**
		* @see _.assign
		**/
		assign<S1, S2, S3, S4, S5, Value, TResult>(
			s1: S1,
			s2: S2,
			s3: S3,
			s4: S4,
			s5: S5,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
			thisArg?: any): TResult;

          /**
          * @see _.assign
          **/
          extend<S1, Value, TResult>(
              s1: S1,
              callback?: (objectValue: Value, sourceValue: Value) => Value,
              thisArg?: any): TResult;

          /**
          * @see _.assign
          **/
          extend<S1, S2, Value, TResult>(
              s1: S1,
              s2: S2,
              callback?: (objectValue: Value, sourceValue: Value) => Value,
              thisArg?: any): TResult;
          /**
          * @see _.assign
          **/
          extend<S1, S2, S3, Value, TResult>(
              s1: S1,
              s2: S2,
              s3: S3,
              callback?: (objectValue: Value, sourceValue: Value) => Value,
              thisArg?: any): TResult;
          /**
          * @see _.assign
          **/
          extend<S1, S2, S3, S4, Value, TResult>(
              s1: S1,
              s2: S2,
              s3: S3,
              s4: S4,
              callback?: (objectValue: Value, sourceValue: Value) => Value,
              thisArg?: any): TResult;
          /**
          * @see _.assign
          **/
          extend<S1, S2, S3, S4, S5, Value, TResult>(
              s1: S1,
              s2: S2,
              s3: S3,
              s4: S4,
              s5: S5,
              callback?: (objectValue: Value, sourceValue: Value) => Value,
              thisArg?: any): TResult;

	}

	//_.clone
	interface LoDashStatic {
		/**
		* Creates a clone of value. If deep is true nested objects will also be cloned, otherwise 
		* they will be assigned by reference. If a callback is provided it will be executed to produce 
		* the cloned values. If the callback returns undefined cloning will be handled by the method 
		* instead. The callback is bound to thisArg and invoked with one argument; (value).
		* @param value The value to clone.
		* @param deep Specify a deep clone.
		* @param callback The function to customize cloning values.
		* @param thisArg The this binding of callback.
		* @return The cloned value.
		**/
		clone<T>(
			value: T,
			deep?: boolean,
			callback?: (value: any) => any,
			thisArg?: any): T;
	}

	//_.cloneDeep
	interface LoDashStatic {
		/**
		* Creates a deep clone of value. If a callback is provided it will be executed to produce the 
		* cloned values. If the callback returns undefined cloning will be handled by the method instead. 
		* The callback is bound to thisArg and invoked with one argument; (value).
		*
		* Note: This method is loosely based on the structured clone algorithm. Functions and DOM nodes 
		* are not cloned. The enumerable properties of arguments objects and objects created by constructors 
		* other than Object are cloned to plain Object objects. 
		* See http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm.
		* @param value The value to clone.
		* @param callback The function to customize cloning values.
		* @param thisArg The this binding of callback.
		* @return The cloned value.
		**/
		cloneDeep<T>(
			value: T,
			callback?: (value: any) => any,
			thisArg?: any): T;
	}

	//_.defaults
	interface LoDashStatic {
		/**
		* Assigns own enumerable properties of source object(s) to the destination object for all 
		* destination properties that resolve to undefined. Once a property is set, additional defaults 
		* of the same property will be ignored.
		* @param object The destination object.
		* @param sources The source objects.
		* @return The destination object.
		**/
		defaults<T, TResult>(
			object: T,
			...sources: any[]): TResult;	
	}

	interface LoDashObjectWrapper<T> {
		/**
		* @see _.defaults
		**/
		defaults<T, TResult>(...sources: any[]): LoDashObjectWrapper<TResult>
	}

	//_.findKey
	interface LoDashStatic {
		/**
		* This method is like _.findIndex except that it returns the key of the first element that 
		* passes the callback check, instead of the element itself.
		* @param object The object to search.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return The key of the found element, else undefined.
		**/
		findKey(
			object: any,
			callback: (value: any) => boolean,
			thisArg?: any): string;

		/**
		* @see _.findKey
		* @param pluckValue _.pluck style callback
		**/
		findKey(
			object: any,
			pluckValue: string): string;

		/**
		* @see _.findKey
		* @param whereValue _.where style callback
		**/
        findKey<W extends Dictionary<any>, T>(
			object: T,
			whereValue: W): string;
	}

	//_.findLastKey
	interface LoDashStatic {
		/**
		* This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
		* @param object The object to search.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return The key of the found element, else undefined.
		**/
		findLastKey(
			object: any,
			callback: (value: any) => boolean,
			thisArg?: any): string;

		/**
		* @see _.findLastKey
		* @param pluckValue _.pluck style callback
		**/
		findLastKey(
			object: any,
			pluckValue: string): string;

		/**
		* @see _.findLastKey
		* @param whereValue _.where style callback
		**/
        findLastKey<W extends Dictionary<any>, T>(
			object: T,
			whereValue: W): string;
	}

	//_.forIn
	interface LoDashStatic {
		/**
		* Iterates over own and inherited enumerable properties of an object, executing the callback for 
		* each property. The callback is bound to thisArg and invoked with three arguments; (value, key, 
		* object). Callbacks may exit iteration early by explicitly returning false.
		* @param object The object to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return object
		**/
		forIn<T>(
			object: Dictionary<T>,
			callback?: ObjectIterator<T, void>,
			thisArg?: any): Dictionary<T>;
	}

    interface LoDashObjectWrapper<T> {
		/**
		* @see _.forIn
		**/
		forIn<T extends {}>(
			callback: ObjectIterator<T, void>,
			thisArg?: any): _.LoDashObjectWrapper<T>;
	}

	//_.forInRight
	interface LoDashStatic {
		/**
		* This method is like _.forIn except that it iterates over elements of a collection in the 
		* opposite order.
		* @param object The object to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return object
		**/
		forInRight<T extends {}>(
			object: Dictionary<T>,
			callback?: ObjectIterator<T, void>,
			thisArg?: any): Dictionary<T>;
	}

    interface LoDashObjectWrapper<T> {
		/**
		* @see _.forInRight
		**/
		forInRight<T extends {}>(
			callback: ObjectIterator<T, void>,
			thisArg?: any): _.LoDashObjectWrapper<T>;
	}

	//_.forOwn
	interface LoDashStatic {
		/**
		* Iterates over own enumerable properties of an object, executing the callback for each 
		* property. The callback is bound to thisArg and invoked with three arguments; (value, key, 
		* object). Callbacks may exit iteration early by explicitly returning false.
		* @param object The object to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return object
		**/
		forOwn<T extends {}>(
			object: Dictionary<T>,
			callback?: ObjectIterator<T, void>,
			thisArg?: any): Dictionary<T>;
	}

    interface LoDashObjectWrapper<T> {
		/**
		* @see _.forOwn
		**/
		forOwn<T extends {}>(
			callback: ObjectIterator<T, void>,
			thisArg?: any): _.LoDashObjectWrapper<T>;
	}

	//_.forOwnRight
	interface LoDashStatic {
		/**
		* This method is like _.forOwn except that it iterates over elements of a collection in the 
		* opposite order.
		* @param object The object to iterate over.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		* @return object
		**/
		forOwnRight<T extends {}>(
			object: Dictionary<T>,
			callback?: ObjectIterator<T, void>,
			thisArg?: any): Dictionary<T>;
	}

    interface LoDashObjectWrapper<T> {
		/**
		* @see _.forOwnRight
		**/
		forOwnRight<T extends {}>(
			callback: ObjectIterator<T, void>,
			thisArg?: any): _.LoDashObjectWrapper<T>;
	}

	//_.functions
	interface LoDashStatic {
		/**
		* Creates a sorted array of property names of all enumerable properties, own and inherited, of 
		* object that have function values.
		* @param object The object to inspect.
		* @return An array of property names that have function values.
		**/
		functions(object: any): string[];

			/**
			* @see _functions
			**/
			methods(object: any): string[];
	}

    interface LoDashObjectWrapper<T> {
		/**
		* @see _.functions
		**/
		functions(): _.LoDashArrayWrapper<string>;

			/**
			* @see _.functions
			**/
			methods(): _.LoDashArrayWrapper<string>;
	}

	//_.has
	interface LoDashStatic {
		/**
		* Checks if the specified object property exists and is a direct property, instead of an 
		* inherited property.
		* @param object The object to check.
		* @param property The property to check for.
		* @return True if key is a direct property, else false.
		**/
		has(object: any, property: string): boolean;
	}

	//_.invert
	interface LoDashStatic {
		/**
		* Creates an object composed of the inverted keys and values of the given object.
		* @param object The object to invert.
		* @return The created inverted object.
		**/
		invert(object: any): any;
	}

	//_.isArguments
	interface LoDashStatic {
		/**
		* Checks if value is an arguments object.
		* @param value The value to check.
		* @return True if the value is an arguments object, else false.
		**/
		isArguments(value: any): boolean;
	}

	//_.isArray
	interface LoDashStatic {
		/**
		* Checks if value is an array.
		* @param value The value to check.
		* @return True if the value is an array, else false.
		**/
		isArray(value: any): boolean;
	}

	//_.isBoolean
	interface LoDashStatic {
		/**
		* Checks if value is a boolean value.
		* @param value The value to check.
		* @return True if the value is a boolean value, else false.
		**/
		isBoolean(value: any): boolean;
	}

	//_.isDate
	interface LoDashStatic {
		/**
		* Checks if value is a date.
		* @param value The value to check.
		* @return True if the value is a date, else false.
		**/
		isDate(value: any): boolean;
	}

	//_.isElement
	interface LoDashStatic {
		/**
		* Checks if value is a DOM element.
		* @param value The value to check.
		* @return True if the value is a DOM element, else false.
		**/
		isElement(value: any): boolean;
	}

	//_.isEmpty
	interface LoDashStatic {
		/**
		* Checks if value is empty. Arrays, strings, or arguments objects with a length of 0 and objects 
		* with no own enumerable properties are considered "empty".
		* @param value The value to inspect.
		* @return True if the value is empty, else false.
		**/
		isEmpty(value: any[]): boolean;

		/**
		* @see _.isEmpty
		**/
		isEmpty(value: Dictionary<any>): boolean;

		/**
		* @see _.isEmpty
		**/
		isEmpty(value: string): boolean;
		
		/**
		* @see _.isEmpty
		**/
		isEmpty(value: any): boolean;
	}

	//_.isEqual
	interface LoDashStatic {
		/**
		* Performs a deep comparison between two values to determine if they are equivalent to each 
		* other. If a callback is provided it will be executed to compare values. If the callback 
		* returns undefined comparisons will be handled by the method instead. The callback is bound to 
		* thisArg and invoked with two arguments; (a, b).
		* @param a The value to compare.
		* @param b The other value to compare.
		* @param callback The function to customize comparing values.
		* @param thisArg The this binding of callback.
		* @return True if the values are equivalent, else false.
		**/
		isEqual(
			a: any,
			b: any,
			callback?: (a: any, b: any) => boolean,
			thisArg?: any): boolean;
	}

	//_.isFinite
	interface LoDashStatic {
		/**
		* Checks if value is, or can be coerced to, a finite number.
		*
		* Note: This is not the same as native isFinite which will return true for booleans and empty 
		* strings. See http://es5.github.io/#x15.1.2.5.
		* @param value The value to check.
		* @return True if the value is finite, else false.
		**/
		isFinite(value: any): boolean;
	}

	//_.isFunction
	interface LoDashStatic {
		/**
		* Checks if value is a function.
		* @param value The value to check.
		* @return True if the value is a function, else false.
		**/
		isFunction(value: any): boolean;
	}

	//_.isNaN
	interface LoDashStatic {
		/**
		* Checks if value is NaN.
		*
		* Note: This is not the same as native isNaN which will return true for undefined and other 
		* non-numeric values. See http://es5.github.io/#x15.1.2.4.
		* @param value The value to check.
		* @return True if the value is NaN, else false.
		**/
		isNaN(value: any): boolean;
	}

	//_.isNull
	interface LoDashStatic {
		/**
		* Checks if value is null.
		* @param value The value to check.
		* @return True if the value is null, else false.
		**/
		isNull(value: any): boolean;
	}

	//_.isNumber
	interface LoDashStatic {
		/**
		* Checks if value is a number.
		*
		* Note: NaN is considered a number. See http://es5.github.io/#x8.5.
		* @param value The value to check.
		* @return True if the value is a number, else false.
		**/
		isNumber(value: any): boolean;
	}

	//_.isObject
	interface LoDashStatic {
		/**
		* Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, 
		* new Number(0), and new String(''))
		* @param value The value to check.
		* @return True if the value is an object, else false.
		**/
		isObject(value: any): boolean;
	}

	//_.isPlainObject
	interface LoDashStatic {
		/**
		* Checks if value is an object created by the Object constructor.
		* @param value The value to check.
		* @return True if value is a plain object, else false.
		**/
		isPlainObject(value: any): boolean;
	}

	//_.isRegExp
	interface LoDashStatic {
		/**
		* Checks if value is a regular expression.
		* @param value The value to check.
		* @return True if the value is a regular expression, else false.
		**/
		isRegExp(value: any): boolean;
	}

	//_.isString
	interface LoDashStatic {
		/**
		* Checks if value is a string.
		* @param value The value to check.
		* @return True if the value is a string, else false.
		**/
		isString(value: any): boolean;
	}

	//_.isUndefined
	interface LoDashStatic {
		/**
		* Checks if value is undefined.
		* @param value The value to check.
		* @return True if the value is undefined, else false.
		**/
		isUndefined(value: any): boolean;
	}

	//_.keys
	interface LoDashStatic {
		/**
		* Creates an array composed of the own enumerable property names of an object.
		* @param object The object to inspect.
		* @return An array of property names.
		**/
		keys(object: any): string[];
	}

	//_.merge
	interface LoDashStatic {
		/**
		* Recursively merges own enumerable properties of the source object(s), that don't resolve 
		* to undefined into the destination object. Subsequent sources will overwrite property 
		* assignments of previous sources. If a callback is provided it will be executed to produce 
		* the merged values of the destination and source properties. If the callback returns undefined 
		* merging will be handled by the method instead. The callback is bound to thisArg and invoked 
		* with two arguments; (objectValue, sourceValue).
		* @param object The destination object.
		* @param s1-8 The source object(s)
		* @param callback The function to customize merging properties.
		* @param thisArg The this binding of callback.
		* @return The destination object.
		**/
        merge<P, T, S1, Value, Result>(
            object: T,
            s1: S1,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

		/**
		* @see _.merge
		**/
        merge<P, T, S1, S2, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

		/**
		* @see _.merge
		**/
        merge<P, T, S1, S2, S3, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
            s3: S3,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

		/**
		* @see _.merge
		**/
        merge<P, T, S1, S2, S3, S4, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
            s3: S3,
            s4: S4,
			callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;
	}

	//_.omit
	interface LoDashStatic {
		/**
		* Creates a shallow clone of object excluding the specified properties. Property names may be 
		* specified as individual arguments or as arrays of property names. If a callback is provided 
		* it will be executed for each property of object omitting the properties the callback returns 
		* truey for. The callback is bound to thisArg and invoked with three arguments; (value, key, 
		* object).
		* @param object The source object.
		* @param keys The properties to omit.
		* @return An object without the omitted properties.
		**/
        omit<Omitted, T>(
			object: T,
			...keys: string[]): Omitted;

		/**
		* @see _.omit
		**/
		omit<Omitted, T>(
			object: T,
			keys: string[]): Omitted;

		/**
		* @see _.omit
		**/
		omit<Omitted, T>(
			object: T,
			callback: ObjectIterator<any, boolean>,
			thisArg?: any): Omitted;
	}

	//_.pairs
	interface LoDashStatic {
		/**
		* Creates a two dimensional array of an object’s key-value pairs, 
		* i.e. [[key1, value1], [key2, value2]].
		* @param object The object to inspect.
		* @return Aew array of key-value pairs.
		**/
		pairs(object: any): any[][];
	}

	//_.picks
	interface LoDashStatic {
		/**
		* Creates a shallow clone of object composed of the specified properties. Property names may be 
		* specified as individual arguments or as arrays of property names. If a callback is provided 
		* it will be executed for each property of object picking the properties the callback returns 
		* truey for. The callback is bound to thisArg and invoked with three arguments; (value, key, 
		* object).
		* @param object Object to strip unwanted key/value pairs.
		* @param keys Property names to pick
		* @return An object composed of the picked properties.
		**/
        pick<Picked, T>(
			object: T,
			...keys: string[]): Picked;

		/**
		* @see _.pick
		**/
		pick<Picked, T>(
			object: T,
			keys: string[]): Picked;

		/**
		* @see _.pick
		**/
		pick<Picked, T>(
			object: T,
			callback: ObjectIterator<any, boolean>,
			thisArg?: any): Picked;
	}

	//_.transform
	interface LoDashStatic {
		/**
		* An alternative to _.reduce this method transforms object to a new accumulator object which is 
		* the result of running each of its elements through a callback, with each callback execution 
		* potentially mutating the accumulator object. The callback is bound to thisArg and invoked with 
		* four arguments; (accumulator, value, key, object). Callbacks may exit iteration early by 
		* explicitly returning false.
		* @param collection The collection to iterate over.
		* @param callback The function called per iteration.
		* @param accumulator The custom accumulator value.
		* @param thisArg The this binding of callback.
		* @return The accumulated value.
		**/
		transform<T, Acc>(
			collection: Collection<T>,
			callback: MemoVoidIterator<T, Acc>,
			accumulator: Acc,
			thisArg?: any): Acc;

		/**
		* @see _.transform
		**/
		transform<T, Acc>(
			collection: Collection<T>,
			callback?: MemoVoidIterator<T, Acc>,
			thisArg?: any): Acc;
	}

	//_.values
	interface LoDashStatic {
		/**
		* Creates an array composed of the own enumerable property values of object.
		* @param object The object to inspect.
		* @return Returns an array of property values.
		**/
		values(object: any): any[];
	}

	/*************
	 * Utilities *
	 *************/
	//_.escape
	interface LoDashStatic {
		/**
		* Converts the characters &, <, >, ", and ' in string to their corresponding HTML entities.
		* @param string The string to escape.
		* @return The escaped string.
		**/
		escape(str: string): string;
	}

	//_.identity
	interface LoDashStatic {
		/**
		* This method returns the first argument provided to it.
		* @param value Any value.
		* @return value.
		**/
		identity<T>(value: T): T;
	}

	//_.mixin
	interface LoDashStatic {
		/**
		* Adds function properties of a source object to the lodash function and chainable wrapper.
		* @param object The object of function properties to add to lodash.
		**/
		mixin(object: Dictionary<(value: any) => any>): void;
	}

	//_.noConflict
	interface LoDashStatic {
		/**
		* Reverts the '_' variable to its previous value and returns a reference to the lodash function.
		* @return The lodash function.
		**/
		noConflict(): typeof _;
	}

	//_.parseInt
	interface LoDashStatic {
		/**
		* Converts the given value into an integer of the specified radix. If radix is undefined or 0 a 
		* radix of 10 is used unless the value is a hexadecimal, in which case a radix of 16 is used.
		*
		* Note: This method avoids differences in native ES3 and ES5 parseInt implementations. See 
		* http://es5.github.io/#E.
		* @param value The value to parse.
		* @param radix The radix used to interpret the value to parse.
		* @return The new integer value.
		**/
		parseInt(value: string): number;
	}

	//_.random
	interface LoDashStatic {
		/**
		* Produces a random number between min and max (inclusive). If only one argument is provided a 
		* number between 0 and the given number will be returned. If floating is truey or either min or 
		* max are floats a floating-point number will be returned instead of an integer.
		* @param max The maximum possible value.
		* @param floating Specify returning a floating-point number.
		* @return A random number.
		**/
		random(max: number, floating?: boolean): number;
	
		/**
		* @see _.random
		* @param min The minimum possible value.
		* @return A random number between `min` and `max`.
		**/
		random(min: number, max: number, floating?: boolean): number;
	}

	//_.result
	interface LoDashStatic {
		/**
		* Resolves the value of property on object. If property is a function it will be invoked with 
		* the this binding of object and its result returned, else the property value is returned. If 
		* object is falsey then undefined is returned.
		* @param object The object to inspect.
		* @param property The property to get the value of.
		* @return The resolved value.
		**/
		result(object: any, property: string): any;
	}

	//_.runInContext
	interface LoDashStatic {
		/**
		* Create a new lodash function using the given context object.
		* @param context The context object
		* @returns The lodash function.
		**/
		runInContext(context: any): typeof _;
	}

	//_.template
	interface LoDashStatic {
		/**
		* A micro-templating method that handles arbitrary delimiters, preserves whitespace, and 
		* correctly escapes quotes within interpolated code.
		*
		* Note: In the development build, _.template utilizes sourceURLs for easier debugging. See 
		* http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
		*
		* For more information on precompiling templates see:
		* http://lodash.com/#custom-builds
		*
		* For more information on Chrome extension sandboxes see:
		* http://developer.chrome.com/stable/extensions/sandboxingEval.html
		* @param text The template text.
		* @param data The data object used to populate the text.
		* @param options The options object.
		* @param options.escape The "escape" delimiter.
		* @param options.evaluate The "evaluate" delimiter.
		* @param options.import An object to import into the template as local variables.
		* @param options.interpolate The "interpolate" delimiter.
		* @param sourceURL The sourceURL of the template’s compiled source.
		* @param variable The data object variable name.
		* @return Returns the compiled Lo-Dash HTML template or a TemplateExecutor if no data is passed.
		**/
		template(
			text: string): TemplateExecutor;
		
		/**
		* @see _.template
		**/
		template(
			text: string,
			data: any, 
			options?: TemplateSettings,
			sourceURL?: string,
			variable?: string): any /* string or TemplateExecutor*/;
	}

	interface TemplateExecutor {
		(...data: any[]): string;
		source: string;
	}
		
	//_.times
	interface LoDashStatic {
		/**
		* Executes the callback n times, returning an array of the results of each callback execution. 
		* The callback is bound to thisArg and invoked with one argument; (index).
		* @param n The number of times to execute the callback.
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		**/
		times<TResult>(
			n: number, 
			callback: (num: number) => TResult, 
			context?: any): TResult[];
	}

	//_.unescape
	interface LoDashStatic {
		/**
		* The inverse of _.escape this method converts the HTML entities &amp;, <, &gt;, &quot;, and 
		* &#39; in string to their corresponding characters.
		* @param string The string to unescape.
		* @return The unescaped string.
		**/
		unescape(
			string: string): string;
	}

	//_.uniqueId
	interface LoDashStatic {
		/**
		* Generates a unique ID. If prefix is provided the ID will be appended to it.
		* @param prefix The value to prefix the ID with.
		* @return Returns the unique ID.
		**/
		uniqueId(prefix?: string): string;
	}

	interface ListIterator<T, TResult> {
		(value: T, index: number, list: T[]): TResult;
	}

	interface ObjectIterator<T, TResult> {
		(element: T, key: string, list: any): TResult;
	}

	interface MemoVoidIterator<T, TResult> {
		(prev: TResult, curr: T, indexOrKey: any, list?: T[]): void;
	}
	interface MemoIterator<T, TResult> {
		(prev: TResult, curr: T, indexOrKey: any, list?: T[]): TResult;
	}
    /*
	interface MemoListIterator<T, TResult> {
		(prev: TResult, curr: T, index: number, list?: T[]): TResult;
	}
	interface MemoObjectIterator<T, TResult> {
		(prev: TResult, curr: T, index: string, object?: Dictionary<T>): TResult;
	}
    */

	interface Collection<T> { }

	// Common interface between Arrays and jQuery objects
	interface List<T> extends Collection<T> {
		[index: number]: T;
		length: number;
	}

	interface Dictionary<T> extends Collection<T> {
		[index: string]: T;
	}
}

declare module "lodash" {
	export = _;
}
