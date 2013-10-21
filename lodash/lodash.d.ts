// Type definitions for Lo-Dash 2.2.1
// Project: http://lodash.com/
// Definitions by:
// Brian Zengel <https://github.com/bczengel/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Heavily based on Underscore definitions by Boris Yankov

/**
* Lo-Dash OOP Wrapper, all Lo-Dash functions that take an object
* as the first parameter can be invoked through this function.
* @param key First argument to Lo-Dash object functions.
**/
declare function _<T>(value: Array<T>): _.LoDashWrapper<Array<T>>;
declare function _<T>(value: T): _.LoDashWrapper<T>;

declare module _ {
	interface LoDashWrapper<T> {}

	/**
	* lodash.js _.debounce options
	**/
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

	/**
	* lodash.js _.throttle options.
	**/
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

	interface TemplateExecutor {
		(...data: any[]): string;
		source: string;
	}

	interface ListIterator<T, TResult> {
		(value: T, index: number, list: T[]): TResult;
	}

	interface ObjectIterator<T, TResult> {
		(element: T, key: string, list: any): TResult;
	}

	interface MemoIterator<T, TResult> {
		(prev: TResult, curr: T, index: number, list: T[]): TResult;
	}

	interface Collection<T> { }

	// Common interface between Arrays and jQuery objects
	interface List<T> extends Collection<T> {
		[index: number]: T;
		length: number;
	}

	interface Dictionary<T> extends Collection<T> {
		[index: string]: T;
	}

	/*********
	* Chaining *
	**********/
	
	/**
	* Creates a lodash object that wraps the given value with explicit method chaining enabled.
	* @param value The value to wrap.
	* @return The wrapper object.
	**/
	export function chain<T>(value: T): LoDashWrapper<T>;

	/**
	* @see _.chain
	**/
	export function chain<T>(value: Array<T>): LoDashWrapper<Array<T>>;	

		interface LoDashWrapper<T> {
			/**
			* Enables explicit method chaining on the wrapper object.
			* @see _.chain
			* @return The wrapper object.
			**/
			chain(): LoDashWrapper<T>;
		}

	/**
	* Invokes interceptor with the value as the first argument and then returns value. The 
	* purpose of this method is to "tap into" a method chain in order to perform operations on 
	* intermediate results within the chain.
	* @param value The value to provide to interceptor
	* @param interceptor The function to invoke.
	* @return value
	**/
	export function tap<T>(
		value: T,
		interceptor: (value: T) => void): T;

		interface LoDashWrapper<T> {
			/**
			* @see _.tap
			**/
			tap(interceptor: (value: T) => void): LoDashWrapper<T>;
		}

	interface LoDashWrapper<T> {
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

	/*********
	* Arrays *
	**********/

	/**
	* Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "",
	* undefined and NaN are all falsy.
	* @param array Array to compact.
	* @return (Array) Returns a new array of filtered values.
	**/
	export function compact<T>(array: List<T>): T[];

	/**
	* Creates an array excluding all values of the provided arrays using strict equality for comparisons
	* , i.e. ===.
	* @param array The array to process
	* @param others The arrays of values to exclude.
	* @return Returns a new array of filtered values.
	**/
	export function difference<T>(
		array: List<T>,
		...others: List<T>[]): T[];

	/**
	* @see _.rest
	**/
	export function drop<T>(
		array: List<T>,
		callback: (num: number) => boolean,
		thisArg?: any): T[];
	export function drop<T>(
		array: List<T>,
		n?: number,
		thisArg?: any): T[];
	export function drop<T>(
		array: List<T>,
		pluckValue: string,
		thisArg?: any): T[];
	export function drop<T>(
		array: List<T>,
		whereValue: Dictionary<any>,
		thisArg?: any): T[];

	/**
	* This method is like _.find except that it returns the index of the first element that passes 
	* the callback check, instead of the element itself.
	* @param array The array to search.
	* @param {(Function|Object|string)} callback The function called per iteration. If a property name or object is provided it will be 
	* used to create a ".pluck" or ".where" style callback, respectively.
	* @param thisArg The this binding of callback.
	* @return Returns the index of the found element, else -1.
	**/
	export function findIndex<T>(
		array: List<T>,
		callback: ListIterator<T, boolean>,
		thisArg?: any): number;
	export function findIndex<T>(
		array: List<T>,
		pluckValue: string,
		thisArg?: any): number;
	export function findIndex<T>(
		array: List<T>,
		whereDictionary: Dictionary<any>,
		thisArg?: any): number;

	/**
	* This method is like _.findIndex except that it iterates over elements of a collection from right to left.
	* @param array The array to search.
	* @param {(Function|Object|string)} callback The function called per iteration. If a property name or object is provided it will be 
	* used to create a ".pluck" or ".where" style callback, respectively.
	* @param thisArg The this binding of callback.
	* @return Returns the index of the found element, else -1.
	**/
	export function findLastIndex<T>(
		array: List<T>,
		callback: ListIterator<T, boolean>,
		thisArg?: any): number;
	export function findLastIndex<T>(
		array: List<T>,
		pluckValue: string): number;
	export function findLastIndex<T>(
		array: List<T>,
		whereDictionary: Dictionary<any>): number;

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
	export function first<T>(array: List<T>): T;

	/**
	* @see _.first
	* @param n The number of elements to return.
	**/
	export function first<T>(
		array: List<T>,
		n: number): T[];

	/**
	* @see _.first
	* @param callback The function called per element.
	* @param [thisArg] The this binding of callback.
	**/
	export function first<T>(
		array: List<T>,
		callback: ListIterator<T, boolean>,
		thisArg?: any): T[];

	/**
	* @see _.first
	* @param pluckValue "_.pluck" style callback value
	**/
	export function first<T>(
		array: List<T>,
		pluckValue: string): T[];

	/**
	* @see _.first
	* @param whereValue "_.where" style callback value
	**/
	export function first<T>(
		array: List<T>,
		whereValue: Dictionary<string>): T[];

	/**
	* @see _.first
	**/
	export function take<T>(array: List<T>): T;

	/**
	* @see _.first
	**/
	export function take<T>(
		array: List<T>,
		n: number): T[];

	/**
	* @see _.first
	**/
	export function take<T>(
		array: List<T>,
		callback: ListIterator<T, boolean>,
		thisArg?: any): T[];

	/**
	* @see _.first
	**/
	export function take<T>(
		array: List<T>,
		pluckValue: string): T[];

	/**
	* @see _.first
	**/
	export function take<T>(
		array: List<T>,
		whereValue: Dictionary<string>): T[];
	
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
	export function flatten(
		array: List<any>,
		isShallow?,
		callback?: ListIterator<any, any>,
		thisArg?: any): any[];

	/**
	* @see _.first
	**/
	export function head<T>(array: List<T>): T;

	/**
	* @see _.first
	**/
	export function head<T>(
		array: List<T>,
		n: number): T[];

	/**
	* @see _.first
	**/
	export function head<T>(
		array: List<T>,
		callback: ListIterator<T, boolean>,
		thisArg?: any): T[];

	/**
	* @see _.first
	**/
	export function head<T>(
		array: List<T>,
		pluckValue: string): T[];

	/**
	* @see _.first
	**/
	export function head<T>(
		array: List<T>,
		whereValue: Dictionary<string>): T[];

	/**
	* Gets the index at which the first occurrence of value is found using strict equality 
	* for comparisons, i.e. ===. If the array is already sorted providing true for fromIndex 
	* will run a faster binary search.
	* @param array The array to search.
	* @param value The value to search for.
	* @param fromIndex The index to search from.
	* @return The index of `value` within `array`.
	**/
	export function indexOf<T>(
		array: List<T>,
		value: T): number;

	/**
	* @see _.indexOf
	* @param fromIndex The index to search from
	**/
	export function indexOf<T>(
		array: List<T>,
		value: T,
		fromIndex: number): number;

	/**
	* @see _.indexOf
	* @param isSorted True to perform a binary search on a sorted array.
	**/
	export function indexOf<T>(
		array: List<T>,
		value: T,
		isSorted: boolean): number;

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
	export function initial<T>(
		array: List<T>): T[];

	/**
	* @see _.initial
	* @param n The number of elements to exclude.
	**/
	export function initial<T>(
		array: List<T>,
		n: number): T[];

	/**
	* @see _.initial
	* @param callback The function called per element
	**/
	export function initial<T>(
		array: List<T>,
		callback: ListIterator<T, boolean>): T[];

	/**
	* @see _.initial
	* @param pluckValue _.pluck style callback
	**/
	export function initial<T>(
		array: List<T>,
		pluckValue: string): T[];

	/**
	* @see _.initial
	* @param whereValue _.where style callback
	**/
	export function initial<T>(
		array: List<T>,
		whereValue: Dictionary<any>): T[];

	/**
	* Creates an array of unique values present in all provided arrays using strict 
	* equality for comparisons, i.e. ===.
	* @param arrays The arrays to inspect.
	* @return Returns an array of composite values.
	**/
	export function intersection<T>(...arrays: List<T>[]): T[];

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
	export function last<T>(array: List<T>): T;

	/**
	* @see _.last
	* @param n The number of elements to return
	**/
	export function last<T>(
		array: List<T>,
		n: number): T[];

	/**
	* @see _.last
	* @param callback The function called per element
	**/
	export function last<T>(
		array: List<T>,
		callback: ListIterator<T, boolean>,
		thisArg?: any): T[];

	/**
	* @see _.last
	* @param pluckValue _.pluck style callback
	**/
	export function last<T>(
		array: List<T>,
		pluckValue: string): T[];

	/**
	* @see _.last
	* @param whereValue _.where style callback
	**/
	export function last<T>(
		array: List<T>,
		whereValue: Dictionary<any>): T[];

	/**
	* Gets the index at which the last occurrence of value is found using strict equality 
	* for comparisons, i.e. ===. If fromIndex is negative, it is used as the offset from the 
	* end of the collection.
	* @param array The array to search.
	* @param value The value to search for.
	* @param fromIndex The index to search from.
	* @return The index of the matched value or -1.
	**/
	export function lastIndexOf<T>(
		array: List<T>,
		value: T,
		fromIndex?: number): number;

	/**
	* Creates an object composed from arrays of keys and values. Provide either a single 
	* two dimensional array, i.e. [[key1, value1], [key2, value2]] or two arrays, one of 
	* keys and one of corresponding values.
	* @param keys The array of keys.
	* @param values The array of values.
	* @return An object composed of the given keys and corresponding values.
	**/
	export function zipObject<TResult extends {}>(
		keys: List<string>,
		values: List<any>): TResult;

	/**
	* @see _.object
	**/
	export function object<TResult extends {}>(
		keys: List<string>,
		values: List<any>): TResult;

	/**
	* Converts arrays into objects. Pass either a single list of [key, value] pairs, or a
	* list of keys, and a list of values.
	* @param keyValuePairs Array of [key, value] pairs.
	* @return An object containing the `keys` as properties and `values` as the property values.
	**/
	export function object<TResult extends {}>(...keyValuePairs: any[][]): TResult;

	/**
	* @see _.object
	**/
	export function object<TResult extends {}>(
		list: List<any>,
		values?: any): TResult;

	/**
	* Removes all provided values from the given array using strict equality for comparisons, 
	* i.e. ===.
	* @param array The array to modify.
	* @param values The values to remove.
	* @return array.
	**/
	export function pull(
		array: List<any>,
		...values: any[]): any[];

	/**
	* Creates an array of numbers (positive and/or negative) progressing from start up 
	* to but not including end. If start is less than stop a zero-length range is created 
	* unless a negative step is specified.
	* @param start The start of the range.
	* @param end The end of the range.
	* @param step The value to increment or decrement by.
	* @return Returns a new range array.
	**/

	export function range(
		start: number,
		stop: number,
		step?: number): number[];
	
	/**
	* @see _.range
	* @param end The end of the range.
	* @return Returns a new range array.
	* @note If start is not specified the implementation will never pull the step (step = arguments[2] || 0)
	**/
	export function range(stop: number): number[];

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
	export function remove(
		array: List<any>,
		callback?: ListIterator<any, boolean>,
		thisArg?: any): any[];

	/**
	* @see _.remove
	* @param pluckValue _.pluck style callback
	**/
	export function remove(
		array: List<any>,
		pluckValue?: string): any[];

	/**
	* @see _.remove
	* @param whereValue _.where style callback
	**/
	export function remove(
		array: List<any>,
		wherealue?: Dictionary<any>): any[];

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
	export function rest<T>(
		array: List<T>,
		callback: (num: number) => boolean,
		thisArg?: any): T[];
	export function rest<T>(
		array: List<T>,
		n?: number,
		thisArg?: any): T[];
	export function rest<T>(
		array: List<T>,
		pluckValue: string,
		thisArg?: any): T[];
	export function rest<T>(
		array: List<T>,
		whereValue: Dictionary<any>,
		thisArg?: any): T[];

	/**
	* @see _.rest
	**/
	export function tail<T>(
		array: List<T>,
		callback: (num: number) => boolean,
		thisArg?: any): T[];
	export function tail<T>(
		array: List<T>,
		n?: number,
		thisArg?: any): T[];
	export function tail<T>(
		array: List<T>,
		pluckValue: string,
		thisArg?: any): T[];
	export function tail<T>(
		array: List<T>,
		whereValue: Dictionary<any>,
		thisArg?: any): T[];

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
	export function sortedIndex<T, TSort>(
		array: List<T>,
		value: T,
		callback?: (x: T) => TSort, 
		thisArg?: any): number;

	/**
	* @see _.sortedIndex
	* @param pluckValue the _.pluck style callback
	**/
	export function sortedIndex<T, TSort>(
		array: List<T>,
		value: T,
		pluckValue: string): number;

	/**
	* @see _.sortedIndex
	* @param pluckValue the _.where style callback
	**/
	export function sortedIndex<T, TSort>(
		array: List<T>,
		value: T,
		whereValue: Dictionary<any>): number;

	/**
	* Creates an array of unique values, in order, of the provided arrays using strict 
	* equality for comparisons, i.e. ===.
	* @param arrays The arrays to inspect.
	* @return Returns an array of composite values.
	**/
	export function union<T>(...arrays: List<T>[]): T[];

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
	export function uniq<T, TSort>(
		array: List<T>,
		isSorted?: boolean,
		callback?: ListIterator<T, TSort>,
		thisArg?: any): T[];

	/**
	* @see _.uniq
	**/
	export function uniq<T, TSort>(
		array: List<T>,
		callback?: ListIterator<T, TSort>,
		thisArg?: any): T[];

	/**
	* @see _.uniq
	* @param pluckValue _.pluck style callback
	**/
	export function uniq<T, TSort>(
		array: List<T>,
		isSorted?: boolean,
		pluckValue?: string): T[];

	/**
	* @see _.uniq
	* @param whereValue _.where style callback
	**/
	export function uniq<T, TSort>(
		array: List<T>,
		whereValue?: Dictionary<any>): T[];

	/**
	* @see _.uniq
	**/
	export function unique<T, TSort>(
		array: List<T>,
		callback?: ListIterator<T, TSort>,
		thisArg?: any): T[];

	/**
	* @see _.uniq
	**/
	export function unique<T, TSort>(
		array: List<T>,
		isSorted?: boolean,
		callback?: ListIterator<T, TSort>,
		thisArg?: any): T[];

	/**
	* @see _.uniq
	* @param pluckValue _.pluck style callback
	**/
	export function unique<T, TSort>(
		array: List<T>,
		isSorted?: boolean,
		pluckValue?: string): T[];

	/**
	* @see _.uniq
	* @param whereValue _.where style callback
	**/
	export function unique<T, TSort>(
		array: List<T>,
		whereValue?: Dictionary<any>): T[];

	/**
	* Creates an array of grouped elements, the first of which contains the first 
	* elements of the given arrays, the second of which contains the second elements 
	* of the given arrays, and so on.
	* @param arrays Arrays to process.
	* @return A new array of grouped elements.
	**/
	export function zip(...arrays: any[][]): any[][];

	/**
	* @see _.zip
	**/
	export function zip(...arrays: any[]): any[];

	/**
	* @see _.zip
	**/
	export function unzip(...arrays: any[][]): any[][];

	/**
	* @see _.zip
	**/
	export function unzip(...arrays: any[]): any[];

	/**
	* Creates an array excluding all provided values using strict equality for comparisons, i.e. ===.
	* @param array The array to filter.
	* @param values The value(s) to exclude.
	* @return A new array of filtered values.
	**/
	export function without<T>(
		array: List<T>,
		...values: T[]): T[];

	/* *************
	 * Collections *
	 ************* */

	/**
	* Creates an array of elements from the specified indexes, or keys, of the collection. 
	* Indexes may be specified as individual arguments or as arrays of indexes.
	* @param collection The collection to iterate over.
	* @param indexes The indexes of collection to retrieve, specified as individual indexes or 
	* arrays of indexes.
	* @return A new array of elements corresponding to the provided indexes.
	**/
	export function at<T>(
		collection: Collection<T>,
		indexes: number[]): T[];

	/**
	* @see _.at
	**/
	export function at<T>(
		collection: Collection<T>,
		...indexes: number[]): T[];

	/**
	* Checks if a given value is present in a collection using strict equality for comparisons, 
	* i.e. ===. If fromIndex is negative, it is used as the offset from the end of the collection.
	* @param collection The collection to iterate over.
	* @param target The value to check for.
	* @param fromIndex The index to search from.
	* @return True if the target element is found, else false.
	**/
	export function contains<T>(
		collection: Collection<T>,
		target: T,
		fromIndex?: number): boolean;

	/**
	* @see _.contains
	* @param dictionary The dictionary to iterate over.
	* @param key The key in the dictionary to search for.
	**/
	export function contains<T>(
		dictionary: Dictionary<T>,
		key: string,
		fromIndex?: number): boolean;

	/**
	* @see _.contains
	* @param searchString the string to search
	* @param targetString the string to search for
	**/
	export function contains(
		searchString: string,
		targetString: string,
		fromIndex?: number): boolean;

		/**
		* @see _.contains
		**/
		export function include<T>(
			collection: Collection<T>,
			target: T,
			fromIndex?: number): boolean;

		/**
		* @see _.contains
		**/
		export function include<T>(
			dictionary: Dictionary<T>,
			key: string,
			fromIndex?: number): boolean;

		/**
		* @see _.contains
		**/
		export function include(
			searchString: string,
			targetString: string,
			fromIndex?: number): boolean;
	
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
	export function countBy<T>(
		collection: Collection<T>,
		callback?: ListIterator<T, any>,
		thisArg?: any): Dictionary<number>;

	/**
	* @see _.countBy
	* @param iterator Function name
	**/
	export function countBy<T>(
		collection: Collection<T>,
		callback: string,
		thisArg?: any): Dictionary<number>;

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
	export function every<T>(
		collection: Collection<T>,
		callback?: ListIterator<T, boolean>,
		thisArg?: any): boolean;

	/**
	* @see _.every
	* @param pluckValue _.pluck style callback
	**/
	export function every<T>(
		collection: Collection<T>,
		pluckValue: string): boolean;

	/**
	* @see _.every
	* @param whereValue _.where style callback
	**/
	export function every<T>(
		collection: Collection<T>,
		whereValue: Dictionary<any>): boolean;

		/**
		* @see _.every
		**/
		export function all<T>(
			collection: Collection<T>,
			callback?: ListIterator<T, boolean>,
			thisArg?: any): boolean;

		/**
		* @see _.every
		* @param pluckValue _.pluck style callback
		**/
		export function all<T>(
			collection: Collection<T>,
			pluckValue: string): boolean;

		/**
		* @see _.every
		* @param whereValue _.where style callback
		**/
		export function all<T>(
			collection: Collection<T>,
			whereValue: Dictionary<any>): boolean;

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
	export function filter<T>(
		collection: Collection<T>,
		callback: ListIterator<T, boolean>,
		thisArg?: any): T[];

	/**
	* @see _.filter
	* @param pluckValue _.pluck style callback
	**/
	export function filter<T>(
		collection: Collection<T>,
		pluckValue: string): T[];

	/**
	* @see _.filter
	* @param pluckValue _.pluck style callback
	**/
	export function filter<T>(
		collection: Collection<T>,
		whereValue: Dictionary<any>): T[];

		/**
		* @see _.filter
		**/
		export function select<T>(
		collection: Collection<T>,
		callback: ListIterator<T, boolean>,
		thisArg?: any): T[];

		/**
		* @see _.filter
		* @param pluckValue _.pluck style callback
		**/
		export function select<T>(
			collection: Collection<T>,
			pluckValue: string): T[];

		/**
		* @see _.filter
		* @param pluckValue _.pluck style callback
		**/
		export function select<T>(
			collection: Collection<T>,
			whereValue: Dictionary<any>): T[];

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
	export function find<T>(
		collection: Collection<T>,
		callback: ListIterator<T, boolean>,
		thisArg?: any): T;

	/**
	* @see _.find
	* @param _.pluck style callback
	**/
	export function find<T>(
		collection: Collection<T>,
		whereValue: Dictionary<any>): T;

	/**
	* @see _.find
	* @param _.where style callback
	**/
	export function find<T>(
		collection: Collection<T>,
		pluckValue: string): T;

		/**
		* @see _.find
		**/
		export function detect<T>(
			collection: Collection<T>,
			callback: ListIterator<T, boolean>,
			thisArg?: any): T;

		/**
		* @see _.find
		* @param _.pluck style callback
		**/
		export function detect<T>(
			collection: Collection<T>,
			whereValue: Dictionary<any>): T;

		/**
		* @see _.find
		* @param _.where style callback
		**/
		export function detect<T>(
			collection: Collection<T>,
			pluckValue: string): T;

		/**
		* @see _.find
		**/
		export function findWhere<T>(
			collection: Collection<T>,
			callback: ListIterator<T, boolean>,
			thisArg?: any): T;

		/**
		* @see _.find
		* @param _.pluck style callback
		**/
		export function findWhere<T>(
			collection: Collection<T>,
			whereValue: Dictionary<any>): T;

		/**
		* @see _.find
		* @param _.where style callback
		**/
		export function findWhere<T>(
			collection: Collection<T>,
			pluckValue: string): T;

	/**
	* This method is like _.find except that it iterates over elements of a collection from 
	* right to left.
	* @param collection Searches for a value in this list.
	* @param callback The function called per iteration. 
	* @param thisArg The this binding of callback.
	* @return The found element, else undefined.
	**/
	export function findLast<T>(
		collection: Collection<T>,
		callback: ListIterator<T, boolean>,
		thisArg?: any): T;

	/**
	* @see _.find
	* @param _.pluck style callback
	**/
	export function findLast<T>(
		collection: Collection<T>,
		whereValue: Dictionary<any>): T;

	/**
	* @see _.find
	* @param _.where style callback
	**/
	export function findLast<T>(
		collection: Collection<T>,
		pluckValue: string): T;

	/**
	* Iterates over elements of a collection, executing the callback for each element. 
	* The callback is bound to thisArg and invoked with three arguments; (value, index|key, 
	* collection). Callbacks may exit iteration early by explicitly returning false.
	* @param collection The collection to iterate over.
	* @param callback The function called per iteration.
	* @param thisArg The this binding of callback.
	**/
	export function forEach<T>(
		collection: List<T>,
		callback: ListIterator<T, void >,
		thisArg?: any): List<T>;

	/**
	* @see _.each
	**/
	export function forEach<T extends {}>(
		object: Dictionary<T>,
		callback: ObjectIterator<T, void >,
		thisArg?: any): Dictionary<T>;

		/**
		* @see _.each
		**/
		export function each<T>(
			collection: List<T>,
			callback: ListIterator<T, void>,
			thisArg?: any): List<T>;

		/**
		* @see _.each
		* @param object The object to iterate over
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		**/
		export function each<T extends {}>(
			object: Dictionary<T>,
			callback: ObjectIterator<T, void>,
			thisArg?: any): Dictionary<T>;

	/**
	* This method is like _.forEach except that it iterates over elements of a 
	* collection from right to left.
	* @param collection The collection to iterate over.
	* @param callback The function called per iteration.
	* @param thisArg The this binding of callback.
	**/
	export function forEachRight<T>(
		collection: List<T>,
		callback: ListIterator<T, void >,
		thisArg?: any): List<T>;

	/**
	* @see _.each
	**/
	export function forEachRight<T extends {}>(
		object: Dictionary<T>,
		callback: ObjectIterator<T, void >,
		thisArg?: any): Dictionary<T>;

		/**
		* @see _.each
		**/
		export function eachRight<T>(
			collection: List<T>,
			callback: ListIterator<T, void>,
			thisArg?: any): List<T>;

		/**
		* @see _.each
		* @param object The object to iterate over
		* @param callback The function called per iteration.
		* @param thisArg The this binding of callback.
		**/
		export function eachRight<T extends {}>(
			object: Dictionary<T>,
			callback: ObjectIterator<T, void>,
			thisArg?: any): Dictionary<T>;

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
	export function groupBy<T>(
		collection: List<T>,
		callback?: ListIterator<T, any>,
		thisArg?: any): Dictionary<T[]>;

	/**
	* @see _.groupBy
	* @param pluckValue _.pluck style callback
	**/
	export function groupBy<T>(
		collection: List<T>,
		pluckValue: string): Dictionary<T[]>;

	/**
	* @see _.groupBy
	* @param whereValue _.where style callback
	**/
	export function groupBy<T>(
		collection: List<T>,
		whereValue: Dictionary<any>): Dictionary<T[]>;

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
	export function indexBy<T>(
		list: List<T>,
		iterator: ListIterator<T, any>,
		context?: any): Dictionary<T>;

	/**
	* @see _.indexBy
	* @param pluckValue _.pluck style callback
	**/
	export function indexBy<T>(
		collection: List<T>,
		pluckValue: string): Dictionary<T>;

	/**
	* @see _.indexBy
	* @param whereValue _.where style callback
	**/
	export function indexBy<T>(
		collection: List<T>,
		whereValue: Dictionary<any>): Dictionary<T>;

	/**
	* Invokes the method named by methodName on each element in the collection returning 
	* an array of the results of each invoked method. Additional arguments will be provided 
	* to each invoked method. If methodName is a function it will be invoked for, and this 
	* bound to, each element in the collection.
	* @param collection The collection to iterate over.
	* @param methodName The name of the method to invoke.
	* @param args Arguments to invoke the method with.
	**/
	export function invoke<T extends {}>(
		collection: Collection<T>,
		methodName: string,
		...args: any[]): any;

	/**
	* @see _.invoke
	**/
	export function invoke<T extends {}>(
		collection: Collection<T>,
		method: Function,
		...args: any[]): any;

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
	export function map<T, TResult>(
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
	export function map<T extends {}, TResult>(
		object: Dictionary<T>,
		callback: ObjectIterator<T, TResult>,
		thisArg?: any): TResult[];

	/**
	* @see _.map
	* @param pluckValue _.pluck style callback
	**/
	export function map<T, TResult>(
		collection: List<T>,
		pluckValue: string): TResult[];

			/**
			* @see _.map
			**/
			export function collect<T, TResult>(
				collection: List<T>,
				callback: ListIterator<T, TResult>,
				thisArg?: any): TResult[];

			/**
			* @see _.map
			**/
			export function collect<T extends {}, TResult>(
				object: Dictionary<T>,
				callback: ObjectIterator<T, TResult>,
				thisArg?: any): TResult[];

			/**
			* @see _.map
			**/
			export function collect<T, TResult>(
				collection: List<T>,
				pluckValue: string): TResult[];

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
	export function max<T>(
		collection: Collection<T>,
		callback?: ListIterator<T, any>,
		thisArg?: any): T;

	/**
	* @see _.max
	* @param pluckValue _.pluck style callback
	**/
	export function max<T>(
		collection: Collection<T>,
		pluckValue: string): T;

	/**
	* @see _.max
	* @param whereValue _.where style callback
	**/
	export function max<T>(
		collection: Collection<T>,
		whereValue: Dictionary<any>): T;

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
	export function min<T>(
		collection: Collection<T>,
		callback?: ListIterator<T, any>,
		thisArg?: any): T;

	/**
	* @see _.min
	* @param pluckValue _.pluck style callback
	**/
	export function min<T>(
		collection: Collection<T>,
		pluckValue: string): T;

	/**
	* @see _.min
	* @param whereValue _.where style callback
	**/
	export function min<T>(
		collection: Collection<T>,
		whereValue: Dictionary<any>): T;

	/**
	* Retrieves the value of a specified property from all elements in the collection.
	* @param collection The collection to iterate over.
	* @param property The property to pluck.
	* @return A new array of property values.
	**/
	export function pluck<T extends {}>(
		collection: Collection<T>,
		property: string): any[];

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
	export function reduce<T, TResult>(
		collection: Collection<T>,
		callback: MemoIterator<T, TResult>,
		accumulator?: TResult,
		thisArg?: any): TResult;

		/**
		* @see _.reduce
		**/
		export function inject<T, TResult>(
			collection: Collection<T>,
			callback: MemoIterator<T, TResult>,
			accumulator?: TResult,
			thisArg?: any): TResult;

		/**
		* @see _.reduce
		**/
		export function foldl<T, TResult>(
			collection: Collection<T>,
			callback: MemoIterator<T, TResult>,
			accumulator?: TResult,
			thisArg?: any): TResult;

	/**
	* This method is like _.reduce except that it iterates over elements of a collection from 
	* right to left.
	* @param collection The collection to iterate over.
	* @param callback The function called per iteration.
	* @param accumulator Initial value of the accumulator.
	* @param thisArg The this binding of callback.
	* @return The accumulated value.
	**/
	export function reduceRight<T, TResult>(
		collection: Collection<T>,
		callback: MemoIterator<T, TResult>,
		accumulator?: TResult,
		thisArg?: any): TResult;

		/**
		* @see _.reduceRight
		**/
		export function foldr<T, TResult>(
			collection: Collection<T>,
			callback: MemoIterator<T, TResult>,
			accumulator?: TResult,
			thisArg?: any): TResult;

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
	export function reject<T>(
		collection: Collection<T>,
		callback: ListIterator<T, boolean>,
		thisArg?: any): T[];

	/**
	* @see _.reject
	* @param pluckValue _.pluck style callback
	**/
	export function reject<T>(
		collection: Collection<T>,
		pluckValue: string): T[];

	/**
	* @see _.reject
	* @param whereValue _.where style callback
	**/
	export function reject<T>(
		collection: Collection<T>,
		whereValue: Dictionary<any>): T[];

	/**
	* Retrieves a random element or n random elements from a collection.
	* @param collection The collection to sample.
	* @return Returns the random sample(s) of collection.
	**/
	export function sample<T>(collection: Collection<T>): T;

	/**
	* @see _.sample
	* @param n The number of elements to sample.
	**/
	export function sample<T>(collection: Collection<T>, n: number): T[];

	/**
	* Creates an array of shuffled values, using a version of the Fisher-Yates shuffle. 
	* See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
	* @param collection The collection to shuffle.
	* @return Returns a new shuffled collection.
	**/
	export function shuffle<T>(collection: Collection<T>): T[];

	/**
	* Gets the size of the collection by returning collection.length for arrays and array-like 
	* objects or the number of own enumerable properties for objects.
	* @param collection The collection to inspect.
	* @return collection.length
	**/
	export function size<T>(collection: List<T>): number;

	/**
	* @see _.size
	* @param object The object to inspect
	* @return The number of own enumerable properties.
	**/
	export function size<T extends {}>(object: T): number;

	/**
	* @see _.size
	* @param aString The string to inspect
	* @return The length of aString
	**/
	export function size(aString: string): number;

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
	export function some<T>(
		collection: Collection<T>,
		callback?: ListIterator<T, boolean>,
		thisArg?: any): boolean;

	/**
	* @see _.some
	* @param pluckValue _.pluck style callback
	**/
	export function some<T>(
		collection: Collection<T>,
		pluckValue: string): boolean;

	/**
	* @see _.some
	* @param whereValue _.where style callback
	**/
	export function some<T>(
		collection: Collection<T>,
		whereValue: Dictionary<any>): boolean;

		/**
		* @see _.some
		**/
		export function any<T>(
			collection: Collection<T>,
			callback?: ListIterator<T, boolean>,
			thisArg?: any): boolean;

		/**
		* @see _.some
		* @param pluckValue _.pluck style callback
		**/
		export function any<T>(
			collection: Collection<T>,
			pluckValue: string): boolean;

		/**
		* @see _.some
		* @param whereValue _.where style callback
		**/
		export function any<T>(
			collection: Collection<T>,
			whereValue: Dictionary<any>): boolean;
	
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
	export function sortBy<T, TSort>(
		collection: List<T>,
		callback?: ListIterator<T, TSort>,
		thisArg?: any): T[];

	/**
	* @see _.sortBy
	* @param pluckValue _.pluck style callback
	**/
	export function sortBy<T>(
		collection: List<T>,
		pluckValue: string): T[];

	/**
	* @see _.sortBy
	* @param whereValue _.where style callback
	**/
	export function sortBy<T>(
		collection: List<T>,
		whereValue: Dictionary<any>): T[];

	/**
	* Converts the collection to an array.
	* @param collection The collection to convert.
	* @return The new converted array.
	**/
	export function toArray<T>(collection: Collection<T>): T[];

	/**
	* Performs a deep comparison of each element in a collection to the given properties 
	* object, returning an array of all elements that have equivalent property values.
	* @param collection The collection to iterate over.
	* @param properties The object of property values to filter by.
	* @return A new array of elements that have the given properties.
	**/
	export function where<T, U extends {}>(
		list: Collection<T>,
		properties: U): T[];

	/*************
	 * Functions *
	 *************/

	 /**
	* Creates a function that executes func, with the this binding and arguments of the 
	* created function, only after being called n times.
	* @param n The number of times the function must be called before func is executed.
	* @param func The function to restrict.
	* @return The new restricted function.
	**/
	export function after(
		n: number,
		func: Function): Function;

		interface LoDashWrapper<T> {
			/**
			* @see _.after
			**/
			after(func: Function): LoDashWrapper<Function>;
		}

	/**
	* Creates a function that, when called, invokes func with the this binding of thisArg 
	* and prepends any additional bind arguments to those provided to the bound function.
	* @param func The function to bind.
	* @param thisArg The this binding of func.
	* @param args Arguments to be partially applied.
	* @return The new bound function.
	**/
	export function bind(
		func: Function,
		thisArg: any,
		...args: any[]): () => any;

	/**
	* Binds methods of an object to the object itself, overwriting the existing method. Method 
	* names may be specified as individual arguments or as arrays of method names. If no method 
	* names are provided all the function properties of object will be bound.
	* @param object The object to bind and assign the bound methods to.
	* @param methodNames The object method names to bind, specified as individual method names 
	* or arrays of method names.
	* @return object
	**/
	export function bindAll(
		object: any,
		...methodNames: string[]): any;

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
	export function bindKey(
		object: any,
		key: string,
		...args: any[]): Function;

	/**
	* Creates a function that is the composition of the provided functions, where each function 
	* consumes the return value of the function that follows. For example, composing the functions 
	* f(), g(), and h() produces f(g(h())). Each function is executed with the this binding of the 
	* composed function.
	* @param funcs Functions to compose.
	* @return The new composed function.
	**/
	export function compose(...funcs: Function[]): Function;

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
	export function createCallback(
		func: string,
		thisArg?: any,
		argCount?: number): () => any;

	/**
	* @see _.createCallback
	**/
	export function createCallback(
		func: Dictionary<any>,
		thisArg?: any,
		argCount?: number): () => boolean;

	/**
	* Creates a function which accepts one or more arguments of func that when invoked either 
	* executes func returning its result, if all func arguments have been provided, or returns 
	* a function that accepts one or more of the remaining func arguments, and so on. The arity 
	* of func can be specified if func.length is not sufficient.
	* @param func The function to curry.
	* @param arity The arity of func.
	* @return The new curried function.
	**/
	export function curry(
		func: Function,
		arity?: number): Function;

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
	export function debounce(
		func: Function,
		wait: number,
		options?: DebounceSettings): Function;	

	/**
	* Defers executing the func function until the current call stack has cleared. Additional 
	* arguments will be provided to func when it is invoked.
	* @param func The function to defer.
	* @param args Arguments to invoke the function with.
	* @return The timer id.
	**/
	export function defer(
		func: Function,
		...args: any[]): number;

	/**
	* Executes the func function after wait milliseconds. Additional arguments will be provided 
	* to func when it is invoked.
	* @param func The function to delay.
	* @param wait The number of milliseconds to delay execution.
	* @param args Arguments to invoke the function with.
	* @return The timer id.
	**/
	export function delay(
		func: Function,
		wait: number,
		...args: any[]): number;

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
	export function memoize(
		func: Function,
		resolver?: (n: any) => string): Function;

	/**
	* Creates a function that is restricted to execute func once. Repeat calls to the function 
	* will return the value of the first call. The func is executed with the this binding of the 
	* created function.
	* @param func Function to only execute once.
	* @return The new restricted function.
	**/
	export function once(func: Function): Function;

	/**
	* Creates a function that, when called, invokes func with any additional partial arguments 
	* prepended to those provided to the new function. This method is similar to _.bind except 
	* it does not alter the this binding.
	* @param func The function to partially apply arguments to.
	* @param args Arguments to be partially applied.
	* @return The new partially applied function.
	**/
	export function partial(
		func: Function,
		...args: any[]): Function;

	/**
	* This method is like _.partial except that partial arguments are appended to those provided 
	* to the new function.
	* @param func The function to partially apply arguments to.
	* @param args Arguments to be partially applied.
	* @return The new partially applied function.
	**/
	export function partialRight(
		func: Function,
		...args: any[]): Function;

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
	export function throttle(
		func: any,
		wait: number,
		options?: ThrottleSettings): Function;

	/**
	* Creates a function that provides value to the wrapper function as its first argument. 
	* Additional arguments provided to the function are appended to those provided to the 
	* wrapper function. The wrapper is executed with the this binding of the created function.
	* @param value The value to wrap.
	* @param wrapper The wrapper function.
	* @return The new function.
	**/
	export function wrap(
		value: any,
		wrapper: (func: Function, ...args: any[]) => any): Function;

	

	

	

	

	

	/**********
	* Objects *
	***********/
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
	export function assign(
		object: any,
		s1: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.assign
	**/
	export function assign(
		object: any,
		s1: any,
		s2: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.assign
	**/		
	export function assign(
		object: any,
		s1: any,
		s2: any,
		s3: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.assign
	**/
	export function assign(
		object: any,
		s1: any,
		s2: any,
		s3: any,
		s4: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.assign
	**/
	export function assign(
		object: any,
		s1: any,
		s2: any,
		s3: any,
		s4: any,
		s5: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.assign
	**/
	export function assign(
		object: any,
		s1: any,
		s2: any,
		s3: any,
		s4: any,
		s5: any,
		s6: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.assign
	**/
	export function assign(
		object: any,
		s1: any,
		s2: any,
		s3: any,
		s4: any,
		s5: any,
		s6: any,
		s7: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.assign
	**/
	export function assign(
		object: any,
		s1: any,
		s2: any,
		s3: any,
		s4: any,
		s5: any,
		s6: any,
		s7: any,
		s8: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	interface LoDashWrapper<T> {
		/**
		* @see _.assign
		**/
		assign(
			s1: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.assign
		**/
		assign(
			s1: any,
			s2: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.assign
		**/		
		assign(
			s1: any,
			s2: any,
			s3: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.assign
		**/
		assign(
			s1: any,
			s2: any,
			s3: any,
			s4: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.assign
		**/
		assign(
			s1: any,
			s2: any,
			s3: any,
			s4: any,
			s5: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.assign
		**/
		assign(
			s1: any,
			s2: any,
			s3: any,
			s4: any,
			s5: any,
			s6: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.assign
		**/
		assign(
			s1: any,
			s2: any,
			s3: any,
			s4: any,
			s5: any,
			s6: any,
			s7: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.assign
		**/
		assign(
			s1: any,
			s2: any,
			s3: any,
			s4: any,
			s5: any,
			s6: any,
			s7: any,
			s8: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;
	}

		/**
		* @see _.extend
		**/
		export function extend(
			object: any,
			s1: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.extend
		**/
		export function extend(
			object: any,
			s1: any,
			s2: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.extend
		**/				
		export function extend(
			object: any,
			s1: any,
			s2: any,
			s3: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.extend
		**/
		export function extend(
			object: any,
			s1: any,
			s2: any,
			s3: any,
			s4: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.extend
		**/
		export function extend(
			object: any,
			s1: any,
			s2: any,
			s3: any,
			s4: any,
			s5: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.extend
		**/
		export function extend(
			object: any,
			s1: any,
			s2: any,
			s3: any,
			s4: any,
			s5: any,
			s6: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.extend
		**/
		export function extend(
			object: any,
			s1: any,
			s2: any,
			s3: any,
			s4: any,
			s5: any,
			s6: any,
			s7: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

		/**
		* @see _.extend
		**/
		export function extend(
			object: any,
			s1: any,
			s2: any,
			s3: any,
			s4: any,
			s5: any,
			s6: any,
			s7: any,
			s8: any,
			callback?: (objectValue: any, sourceValue: any) => any,
			thisArg?: any): any;

			interface LoDashWrapper<T> {
				/**
				* @see _.assign
				**/
				extend(
					s1: any,
					callback?: (objectValue: any, sourceValue: any) => any,
					thisArg?: any): any;

				/**
				* @see _.assign
				**/
				extend(
					s1: any,
					s2: any,
					callback?: (objectValue: any, sourceValue: any) => any,
					thisArg?: any): any;

				/**
				* @see _.assign
				**/		
				extend(
					s1: any,
					s2: any,
					s3: any,
					callback?: (objectValue: any, sourceValue: any) => any,
					thisArg?: any): any;

				/**
				* @see _.assign
				**/
				extend(
					s1: any,
					s2: any,
					s3: any,
					s4: any,
					callback?: (objectValue: any, sourceValue: any) => any,
					thisArg?: any): any;

				/**
				* @see _.assign
				**/
				extend(
					s1: any,
					s2: any,
					s3: any,
					s4: any,
					s5: any,
					callback?: (objectValue: any, sourceValue: any) => any,
					thisArg?: any): any;

				/**
				* @see _.assign
				**/
				extend(
					s1: any,
					s2: any,
					s3: any,
					s4: any,
					s5: any,
					s6: any,
					callback?: (objectValue: any, sourceValue: any) => any,
					thisArg?: any): any;

				/**
				* @see _.assign
				**/
				extend(
					s1: any,
					s2: any,
					s3: any,
					s4: any,
					s5: any,
					s6: any,
					s7: any,
					callback?: (objectValue: any, sourceValue: any) => any,
					thisArg?: any): any;

				/**
				* @see _.assign
				**/
				extend(
					s1: any,
					s2: any,
					s3: any,
					s4: any,
					s5: any,
					s6: any,
					s7: any,
					s8: any,
					callback?: (objectValue: any, sourceValue: any) => any,
					thisArg?: any): any;
			}

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
	export function clone<T>(
		value: T,
		deep?: boolean,
		callback?: (value: any) => any,
		thisArg?: any): T;

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
	export function cloneDeep<T>(
		value: T,
		callback?: (value: any) => any,
		thisArg?: any): T;

	/**
	* Assigns own enumerable properties of source object(s) to the destination object for all 
	* destination properties that resolve to undefined. Once a property is set, additional defaults 
	* of the same property will be ignored.
	* @param object The destination object.
	* @param sources The source objects.
	* @return The destination object.
	**/
	export function defaults(
		object: any,
		...sources: any[]): any;

	/**
	* This method is like _.findIndex except that it returns the key of the first element that 
	* passes the callback check, instead of the element itself.
	* @param object The object to search.
	* @param callback The function called per iteration.
	* @param thisArg The this binding of callback.
	* @return The key of the found element, else undefined.
	**/
	export function findKey(
		object: any,
		callback: (value: any) => boolean,
		thisArg?: any): string;

	/**
	* @see _.findKey
	* @param pluckValue _.pluck style callback
	**/
	export function findKey(
		object: any,
		pluckValue: string): string;

	/**
	* @see _.findKey
	* @param whereValue _.where style callback
	**/
	export function findKey(
		object: any,
		whereValue: Dictionary<any>): string;

	/**
	* This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
	* @param object The object to search.
	* @param callback The function called per iteration.
	* @param thisArg The this binding of callback.
	* @return The key of the found element, else undefined.
	**/
	export function findLastKey(
		object: any,
		callback: (value: any) => boolean,
		thisArg?: any): string;

	/**
	* @see _.findLastKey
	* @param pluckValue _.pluck style callback
	**/
	export function findLastKey(
		object: any,
		pluckValue: string): string;

	/**
	* @see _.findLastKey
	* @param whereValue _.where style callback
	**/
	export function findLastKey(
		object: any,
		whereValue: Dictionary<any>): string;

	/**
	* Iterates over own and inherited enumerable properties of an object, executing the callback for 
	* each property. The callback is bound to thisArg and invoked with three arguments; (value, key, 
	* object). Callbacks may exit iteration early by explicitly returning false.
	* @param object The object to iterate over.
	* @param callback The function called per iteration.
	* @param thisArg The this binding of callback.
	* @return object
	**/
	export function forIn<T extends {}>(
		object: Dictionary<T>,
		callback?: ObjectIterator<T, void>,
		thisArg?: any): Dictionary<T>;

	/**
	* This method is like _.forIn except that it iterates over elements of a collection in the 
	* opposite order.
	* @param object The object to iterate over.
	* @param callback The function called per iteration.
	* @param thisArg The this binding of callback.
	* @return object
	**/
	export function forInRight<T extends {}>(
		object: Dictionary<T>,
		callback?: ObjectIterator<T, void>,
		thisArg?: any): Dictionary<T>;

	/**
	* Iterates over own enumerable properties of an object, executing the callback for each 
	* property. The callback is bound to thisArg and invoked with three arguments; (value, key, 
	* object). Callbacks may exit iteration early by explicitly returning false.
	* @param object The object to iterate over.
	* @param callback The function called per iteration.
	* @param thisArg The this binding of callback.
	* @return object
	**/
	export function forOwn<T extends {}>(
		object: Dictionary<T>,
		callback?: ObjectIterator<T, void>,
		thisArg?: any): Dictionary<T>;

	/**
	* This method is like _.forOwn except that it iterates over elements of a collection in the 
	* opposite order.
	* @param object The object to iterate over.
	* @param callback The function called per iteration.
	* @param thisArg The this binding of callback.
	* @return object
	**/
	export function forOwnRight<T extends {}>(
		object: Dictionary<T>,
		callback?: ObjectIterator<T, void>,
		thisArg?: any): Dictionary<T>;

	/**
	* Creates a sorted array of property names of all enumerable properties, own and inherited, of 
	* object that have function values.
	* @param object The object to inspect.
	* @return An array of property names that have function values.
	**/
	export function functions(object: any): string[];

		/**
		* @see _functions
		**/
		export function methods(object: any): string[];

	/**
	* Checks if the specified object property exists and is a direct property, instead of an 
	* inherited property.
	* @param object The object to check.
	* @param property The property to check for.
	* @return True if key is a direct property, else false.
	**/
	export function has(object: any, property: string): boolean;

	/**
	* Creates an object composed of the inverted keys and values of the given object.
	* @param object The object to invert.
	* @return The created inverted object.
	**/
	export function invert(object: any): any;

	/**
	* Checks if value is an arguments object.
	* @param value The value to check.
	* @return True if the value is an arguments object, else false.
	**/
	export function isArguments(value: any): boolean;

	/**
	* Checks if value is an array.
	* @param value The value to check.
	* @return True if the value is an array, else false.
	**/
	export function isArray(value: any): boolean;

	/**
	* Checks if value is a boolean value.
	* @param value The value to check.
	* @return True if the value is a boolean value, else false.
	**/
	export function isBoolean(value: any): boolean;

	/**
	* Checks if value is a date.
	* @param value The value to check.
	* @return True if the value is a date, else false.
	**/
	export function isDate(value: any): boolean;

	/**
	* Checks if value is a DOM element.
	* @param value The value to check.
	* @return True if the value is a DOM element, else false.
	**/
	export function isElement(value: any): boolean;

	/**
	* Checks if value is empty. Arrays, strings, or arguments objects with a length of 0 and objects 
	* with no own enumerable properties are considered "empty".
	* @param value The value to inspect.
	* @return True if the value is empty, else false.
	**/
	export function isEmpty(value: any[]): boolean;

	/**
	* @see _.isEmpty
	**/
	export function isEmpty(value: Dictionary<any>): boolean;

	/**
	* @see _.isEmpty
	**/
	export function isEmpty(value: string): boolean;

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
	export function isEqual(
		a: any,
		b: any,
		callback?: (a, b) => boolean,
		thisArg?: any): boolean;

	/**
	* Checks if value is, or can be coerced to, a finite number.
	*
	* Note: This is not the same as native isFinite which will return true for booleans and empty 
	* strings. See http://es5.github.io/#x15.1.2.5.
	* @param value The value to check.
	* @return True if the value is finite, else false.
	**/
	export function isFinite(value: any): boolean;

	/**
	* Checks if value is a function.
	* @param value The value to check.
	* @return True if the value is a function, else false.
	**/
	export function isFunction(value: any): boolean;

	/**
	* Checks if value is NaN.
	*
	* Note: This is not the same as native isNaN which will return true for undefined and other 
	* non-numeric values. See http://es5.github.io/#x15.1.2.4.
	* @param value The value to check.
	* @return True if the value is NaN, else false.
	**/
	export function isNaN(value: any): boolean;

	/**
	* Checks if value is null.
	* @param value The value to check.
	* @return True if the value is null, else false.
	**/
	export function isNull(value: any): boolean;

	/**
	* Checks if value is a number.
	*
	* Note: NaN is considered a number. See http://es5.github.io/#x8.5.
	* @param value The value to check.
	* @return True if the value is a number, else false.
	**/
	export function isNumber(value: any): boolean;

	/**
	* Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, 
	* new Number(0), and new String(''))
	* @param value The value to check.
	* @return True if the value is an object, else false.
	**/
	export function isObject(value: any): boolean;

	/**
	* Checks if value is an object created by the Object constructor.
	* @param value The value to check.
	* @return True if value is a plain object, else false.
	**/
	export function isPlainObject(value: any): boolean;

	/**
	* Checks if value is a regular expression.
	* @param value The value to check.
	* @return True if the value is a regular expression, else false.
	**/
	export function isRegExp(value: any): boolean;

	/**
	* Checks if value is a string.
	* @param value The value to check.
	* @return True if the value is a string, else false.
	**/
	export function isString(value: any): boolean;

	/**
	* Checks if value is undefined.
	* @param value The value to check.
	* @return True if the value is undefined, else false.
	**/
	export function isUndefined(value: any): boolean;

	/**
	* Creates an array composed of the own enumerable property names of an object.
	* @param object The object to inspect.
	* @return An array of property names.
	**/
	export function keys(object: any): string[];

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
	export function merge(
		object: any,
		s1: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.merge
	**/
	export function merge(
		object: any,
		s1: any,
		s2: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.merge
	**/
	export function merge(
		object: any,
		s1: any,
		s2: any,
		s3: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.merge
	**/
	export function merge(
		object: any,
		s1: any,
		s2: any,
		s3: any,
		s4: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.merge
	**/
	export function merge(
		object: any,
		s1: any,
		s2: any,
		s3: any,
		s4: any,
		s5: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.merge
	**/
	export function merge(
		object: any,
		s1: any,
		s2: any,
		s3: any,
		s4: any,
		s5: any,
		s6: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.merge
	**/
	export function merge(
		object: any,
		s1: any,
		s2: any,
		s3: any,
		s4: any,
		s5: any,
		s6: any,
		s7: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

	/**
	* @see _.merge
	**/
	export function merge(
		object: any,
		s1: any,
		s2: any,
		s3: any,
		s4: any,
		s5: any,
		s6: any,
		s7: any,
		s8: any,
		callback?: (objectValue: any, sourceValue: any) => any,
		thisArg?: any): any;

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
	export function omit(
		object: any,
		...keys: string[]): any;

	/**
	* @see _.omit
	**/
	export function omit(
		object: any,
		keys: string[]): any;	

	/**
	* @see _.omit
	**/
	export function omit<T>(
		object: any,
		callback: ObjectIterator<T, boolean>,
		thisArg?: any): any;

	/**
	* Creates a two dimensional array of an object’s key-value pairs, 
	* i.e. [[key1, value1], [key2, value2]].
	* @param object The object to inspect.
	* @return Aew array of key-value pairs.
	**/
	export function pairs(object: any): any[][];

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
	export function pick(
		object: any,
		...keys: string[]): any;

	/**
	* @see _.pick
	**/
	export function pick(
		object: any,
		keys: string[]): any;

	/**
	* @see _.pick
	**/
	export function pick(
		object: any,
		callback: ObjectIterator<any, boolean>,
		thisArg?: any): any;
	
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
	export function transform<T>(
		collection: Collection<T>,
		callback?: MemoIterator<T, any>,
		accumulator?: any,
		thisArg?: any): any;

	/**
	* Creates an array composed of the own enumerable property values of object.
	* @param object The object to inspect.
	* @return Returns an array of property values.
	**/
	export function values(object: any): any[];

	/* *********
	 * Utilities *
	********** */

	/**
	* Converts the characters &, <, >, ", and ' in string to their corresponding HTML entities.
	* @param string The string to escape.
	* @return The escaped string.
	**/
	export function escape(str: string): string;

	/**
	* This method returns the first argument provided to it.
	* @param value Any value.
	* @return value.
	**/
	export function identity<T>(value: T): T;

	/**
	* Adds function properties of a source object to the lodash function and chainable wrapper.
	* @param object The object of function properties to add to lodash.
	**/
	export function mixin(object: Dictionary<(value: any) => any>): void;

	/**
	* Reverts the '_' variable to its previous value and returns a reference to the lodash function.
	* @return The lodash function.
	**/
	export function noConflict(): typeof _;

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
	export function parseInt(value: string): number;

	/**
	* Produces a random number between min and max (inclusive). If only one argument is provided a 
	* number between 0 and the given number will be returned. If floating is truey or either min or 
	* max are floats a floating-point number will be returned instead of an integer.
	* @param max The maximum possible value.
	* @param floating Specify returning a floating-point number.
	* @return A random number.
	**/
	export function random(max: number, floating?: boolean): number;

	/**
	* @see _.random
	* @param min The minimum possible value.
	* @return A random number between `min` and `max`.
	**/
	export function random(min: number, max: number, floating?: boolean): number;

	/**
	* Resolves the value of property on object. If property is a function it will be invoked with 
	* the this binding of object and its result returned, else the property value is returned. If 
	* object is falsey then undefined is returned.
	* @param object The object to inspect.
	* @param property The property to get the value of.
	* @return The resolved value.
	**/
	export function result(object: any, property: string): any;

	/**
	* Create a new lodash function using the given context object.
	* @param context The context object
	* @returns The lodash function.
	**/
	export function runInContext(context: any): typeof _;

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
	export function template(
		text: string): TemplateExecutor;

	/**
	* @see _.template
	**/
	export function template(
		text: string,
		data: any, 
		options?: TemplateSettings,
		sourceURL?: string,
		variable?: string): any /* string or TemplateExecutor*/;
	
	/**
	* Executes the callback n times, returning an array of the results of each callback execution. 
	* The callback is bound to thisArg and invoked with one argument; (index).
	* @param n The number of times to execute the callback.
	* @param callback The function called per iteration.
	* @param thisArg The this binding of callback.
	**/
	export function times<TResult>(
		n: number, 
		callback: Function, 
		context?: any): TResult[];

	/**
	* The inverse of _.escape this method converts the HTML entities &amp;, <, &gt;, &quot;, and 
	* &#39; in string to their corresponding characters.
	* @param string The string to unescape.
	* @return The unescaped string.
	**/
	export function unescape(
		string: string): string;	

	/**
	* Generates a unique ID. If prefix is provided the ID will be appended to it.
	* @param prefix The value to prefix the ID with.
	* @return Returns the unique ID.
	**/
	export function uniqueId(prefix?: string): string;

	/**
	* The semantic version number.
	**/
	export var VERSION: string;

	/**
	* An object used to flag environments features.
	**/
	export var support: Support;

	/**
	* By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby 
	* (ERB). Change the following template settings to use alternative delimiters.
	**/
	export var templateSettings: TemplateSettings;
}

declare module "lodash" {
	export = _;
}
