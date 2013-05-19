/* 
underscore-1.4.4.d.ts may be freely distributed under the MIT license.

Copyright (c) 2013 Josh Baldwin https://github.com/jbaldwin/underscore.d.ts

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation 
files (the "Software"), to deal in the Software without 
restriction, including without limitation the rights to use, 
copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be 
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
OTHER DEALINGS IN THE SOFTWARE.
*/

interface Underscore {

	/**************
	* Collections *
	**************/

	/**
	* Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is
	* bound to the context object, if one is passed. Each invocation of iterator is called with three
	* arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be
	* (value, key, object). Delegates to the native forEach function if it exists.
	* @param list Iterates over this list of elements.
	* @param iterator Iterator function for each element `list`.
	* @param context 'this' object in `iterator`, optional.
	**/
	each(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): void;
	/**
	* Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is
	* bound to the context object, if one is passed. Each invocation of iterator is called with three
	* arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be
	* (value, key, object). Delegates to the native forEach function if it exists.
	* @param obj Iterators over this object's properties.
	* @param iterator Iterator function for each property on `obj`.
	* @param context `this` object in the `iterator`, optional.
	**/
	each(
		obj: Object,
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): void;

	/**
	* Alias for 'each'.
	* @see each
	**/
	forEach(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): void;
	/**
	* Alias for 'each'.
	* @see each
	**/
	forEach(
		obj: Object,
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): void;

	/**
	* Produces a new array of values by mapping each value in list through a transformation function
	* (iterator). If the native map method exists, it will be used instead. If list is a JavaScript
	* object, iterator's arguments will be (value, key, object).
	* @param list Maps the elements of this array.
	* @param iterator Map iterator function for each element in `list`.
	* @param context `this` object in `iterator`, optional.
	* @return The mapped array result.
	**/
	map(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): any[];
	/**
	* Produces a new array of values by mapping each value in list through a transformation function
	* (iterator). If the native map method exists, it will be used instead. If list is a JavaScript
	* object, iterator's arguments will be (value, key, object).
	* @param list Maps the properties of this object.
	* @param iterator Map iterator function for each property on `obj`.
	* @param context `this` object in `iterator`, optional.
	* @return The mapped object result.
	**/
	map(
		obj: Object,
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): any[];

	/**
	* Alias for 'map'.
	* @see map
	**/
	collect(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): any[];
	/**
	* Alias for 'map'.
	* @see map
	**/
	collect(
		obj: Object,
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): any[];

	/**
	* Also known as inject and foldl, reduce boils down a list of values into a single value.
	* Memo is the initial state of the reduction, and each successive step of it should be
	* returned by iterator. The iterator is passed four arguments: the memo, then the value
	* and index (or key) of the iteration, and finally a reference to the entire list.
	* @param list Reduces the elements of this array.
	* @param iterator Reduce iterator function for each element in `list`.
	* @param memo Initial reduce state.
	* @param context `this` object in `iterator`, optional.
	* @return Reduced object result.
	**/
	reduce(
		list: any[],
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Alias for 'reduce'.
	* @see reduce
	**/
	inject(
		list: any[],
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Alias for 'reduce'.
	* @see reduce
	**/
	foldl(
		list: any[],
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* The right-associative version of reduce. Delegates to the JavaScript 1.8 version of
	* reduceRight, if it exists. Foldr is not as useful in JavaScript as it would be in a
	* language with lazy evaluation.
	* @param list Reduces the elements of this array.
	* @param iterator Reduce iterator function for each element in `list`.
	* @param memo Initial reduce state.
	* @param context `this` object in `iterator`, optional.
	* @return Reduced object result.
	**/
	reduceRight(
		list: any[],
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Alias for 'reduceRight'.
	* @see reduceRight
	**/
	foldr(
		list: any[],
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Looks through each value in the list, returning the first one that passes a truth
	* test (iterator). The function returns as soon as it finds an acceptable element,
	* and doesn't traverse the entire list.
	* @param list Searches for a value in this list.
	* @param iterator Search iterator function for each element in `list`.
	* @param context `this` object in `iterator`, optional.
	* @return The first acceptable found element in `list`, if nothing is found undefined/null is returned.
	**/
	find(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any;

	/**
	* Alias for 'find'.
	* @see find
	**/
	detect(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any;


	/**
	* Looks through each value in the list, returning an array of all the values that pass a truth
	* test (iterator). Delegates to the native filter method, if it exists.
	* @param list Filter elements out of this list.
	* @param iterator Filter iterator function for each element in `list`.
	* @param context `this` object in `iterator`, optional.
	* @return The filtered list of elements.
	**/
	filter(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any[];

	/**
	* Alias for 'filter'.
	* @see filter
	**/
	select(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any[];

	/**
	* Looks through each value in the list, returning an array of all the values that contain all
	* of the key-value pairs listed in properties.
	* @param list List to match elements again `properties`.
	* @param properties The properties to check for on each element within `list`.
	* @return The elements within `list` that contain the required `properties`.
	**/
	where(list: any[], properties: any): any[];

	/**
	* Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.
	* @param list Search through this list's elements for the first object with all `properties`.
	* @param properties Properties to look for on the elements within `list`.
	* @return The first element in `list` that has all `properties`.
	**/
	findWhere(list: any[], properties: any): any;

	/**
	* Returns the values in list without the elements that the truth test (iterator) passes.
	* The opposite of filter.
	* Return all the elements for which a truth test fails.
	* @param list Reject elements within this list.
	* @param iterator Reject iterator function for each element in `list`.
	* @param context `this` object in `iterator`, optional.
	* @return The rejected list of elements.
	**/
	reject(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any[];

	/**
	* Returns true if all of the values in the list pass the iterator truth test. Delegates to the
	* native method every, if present.
	* @param list Truth test against all elements within this list.
	* @param iterator Trust test iterator function for each element in `list`.
	* @param context `this` object in `iterator`, optional.
	* @return True if all elements passed the truth test, otherwise false.
	**/
	all(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): bool;

	/**
	* Alias for 'all'.
	* @see all
	**/
	every(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): bool;

	/**
	* Returns true if any of the values in the list pass the iterator truth test. Short-circuits and
	* stops traversing the list if a true element is found. Delegates to the native method some, if present.
	* @param list Truth test against all elements within this list.
	* @param iterator Trust test iterator function for each element in `list`.
	* @param context `this` object in `iterator`, optional.
	* @return True if any elements passed the truth test, otherwise false.
	**/
	any(
		list: any[],
		iterator?: (element: any, index?: number, list?: any[]) => bool,
		context?: any): bool;

	/**
	* Alias for 'any'.
	* @see any
	**/
	some(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): bool;

	/**
	* Returns true if the value is present in the list. Uses indexOf internally,
	* if list is an Array.
	* @param list Checks each element to see if `value` is present.
	* @param value The value to check for within `list`.
	* @return True if `value` is present in `list`, otherwise false.
	**/
	contains(list: any[], value: any): bool;

	/**
	* Alias for 'contains'.
	* @see contains
	**/
	include(list: any[], value: any): bool;

	/**
	* Calls the method named by methodName on each value in the list. Any extra arguments passed to
	* invoke will be forwarded on to the method invocation.
	* @param list The element's in this list will each have the method `methodName` invoked.
	* @param methodName The method's name to call on each element within `list`.
	* @param arguments Additional arguments to pass to the method `methodName`.
	**/
	invoke(list: any[], methodName: string, ...arguments: any[]): void;

	/**
	* A convenient version of what is perhaps the most common use-case for map: extracting a list of
	* property values.
	* @param list The list to pluck elements out of that have the property `propertyName`.
	* @param propertyName The property to look for on each element within `list`.
	* @return The list of elements within `list` that have the property `propertyName`.
	**/
	pluck(list: any[], propertyName: string): any[];

	/**
	* Returns the maximum value in list.
	* @param list Finds the maximum value in this list.
	* @return Maximum value in `list`.
	**/
	max(list: number[]): number;
	/**
	* Returns the maximum value in list. If iterator is passed, it will be used on each value to generate
	* the criterion by which the value is ranked.
	* @param list Finds the maximum value in this list.
	* @param iterator Compares each element in `list` to find the maximum value.
	* @param context `this` object in `iterator`, optional.
	* @return The maximum element within `list`.
	**/
	max(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => number,
		context?: any): any;

	/**
	* Returns the minimum value in list.
	* @param list Finds the minimum value in this list.
	* @return Minimum value in `list`.
	**/
	min(list: number[]): number;
	/**
	* Returns the minimum value in list. If iterator is passed, it will be used on each value to generate
	* the criterion by which the value is ranked.
	* @param list Finds the minimum value in this list.
	* @param iterator Compares each element in `list` to find the minimum value.
	* @param context `this` object in `iterator`, optional.
	* @return The minimum element within `list`.
	**/
	min(
		list: any[],
		iterator: (obj: any, index?: number, list?: any[]) => number,
		context?: any): any;

	/**
	* Returns a sorted copy of list, ranked in ascending order by the results of running each value
	* through iterator. Iterator may also be the string name of the property to sort by (eg. length).
	* @param list Sorts this list.
	* @param iterator Sort iterator for each element within `list`.
	* @param context `this` object in `iterator`, optional.
	* @return A sorted copy of `list`.
	**/
	sortBy(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): any[];
	/**
	* Returns a sorted copy of list, ranked in ascending order by the results of running each value
	* through iterator. Iterator may also be the string name of the property to sort by (eg. length).
	* @param list Sorts this list.
	* @param iterator Sort iterator for each element within `list`.
	* @param context `this` object in `iterator`, optional.
	* @return A sorted copy of `list`.
	**/
	sortBy(
		list: any[],
		iterator: string,
		context?: any): any[];

	/**
	* Splits a collection into sets, grouped by the result of running each value through iterator.
	* If iterator is a string instead of a function, groups by the property named by iterator on
	* each of the values.
	* @param list Groups this list.
	* @param iterator Group iterator for each element within `list`, return the key to group the element by.
	* @param context `this` object in `iterator`, optional.
	* @return An object with the group names as properties where each property contains the grouped elements from `list`.
	**/
	groupBy(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => string,
		context?: any): { [key: string]: any[]; };
	/**
	* Splits a collection into sets, grouped by the result of running each value through iterator.
	* If iterator is a string instead of a function, groups by the property named by iterator on
	* each of the values.
	* @param list Groups this list.
	* @param iterator Group iterator for each element within `list`, return the key to group the element by.
	* @param context `this` object in `iterator`, optional.
	* @return An object with the group names as properties where each property contains the grouped elements from `list`.
	**/
	groupBy(
		list: any[],
		iterator: string,
		context?: any): { [key: string]: any[]; };

	/**
	* Sorts a list into groups and returns a count for the number of objects in each group. Similar
	* to groupBy, but instead of returning a list of values, returns a count for the number of values
	* in that group.
	* @param list Group elements in this list and then count the number of elements in each group.
	* @param iterator Group iterator for each element within `list`, return the key to group the element by.
	* @param context `this` object in `iterator`, optional.
	* @return An object with the group names as properties where each property contains the number of elements in that group.
	**/
	countBy(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => string,
		context?: any): { [key: string]: number; };
	/**
	* Sorts a list into groups and returns a count for the number of objects in each group. Similar
	* to groupBy, but instead of returning a list of values, returns a count for the number of values
	* in that group.
	* @param list Group elements in this list and then count the number of elements in each group.
	* @param iterator Group iterator for each element within `list`, return the key to group the element by.
	* @param context `this` object in `iterator`, optional.
	* @return An object with the group names as properties where each property contains the number of elements in that group.
	**/
	countBy(
		list: any[],
		iterator: string,
		context?: any): { [key: string]: number; };

	/**
	* Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.
	* @param list List to shuffle.
	* @return Shuffled copy of `list`.
	**/
	shuffle(list: any[]): any[];

	/**
	* Converts the list (anything that can be iterated over), into a real Array. Useful for transmuting
	* the arguments object.
	* @param list object to transform into an array.
	* @return `list` as an array.
	**/
	toArray(list: any): any[];

	/**
	* Return the number of values in the list.
	* @param list Count the number of values/elements in this list.
	* @return Number of values in `list`.
	**/
	size(list: any): number;

	/*********
	* Arrays *
	**********/

	/**
	* Returns the first element of an array. Passing n will return the first n elements of the array.
	* @param array Retrieves the first element of this array.
	* @return Returns the first element of `array`.
	**/
	first(array: any[]): any;
	/**
	* Returns the first element of an array. Passing n will return the first n elements of the array.
	* @param array Retreives the first `n` elements of this array.
	* @param n Return more than one element from `array`.
	* @return Returns the first `n` elements from `array.
	**/
	first(array: any[], n: number): any[];

	/**
	* Alias for 'first'.
	* @see first
	**/
	head(array: any[]): any;
	/**
	* Alias for 'first'.
	* @see first
	**/
	head(array: any[], n: number): any[];

	/**
	* Alias for 'first'.
	* @see first
	**/
	take(array: any[]): any;
	/**
	* Alias for 'first'.
	* @see first
	**/
	take(array: any[], n: number): any[];

	/**
	* Returns everything but the last entry of the array. Especially useful on the arguments object.
	* Pass n to exclude the last n elements from the result.
	* @param array Retreive all elements except the last `n`.
	* @param n Leaves this many elements behind, optional.
	* @return Returns everything but the last `n` elements of `array`.
	**/
	initial(array: any[], n?: number): any[];

	/**
	* Returns the last element of an array. Passing n will return the last n elements of the array.
	* @param array Retrieves the last element of this array.
	* @return Returns the last element of `array`.
	**/
	last(array: any[]): any;
	/**
	* Returns the last element of an array. Passing n will return the last n elements of the array.
	* @param array Retreives the last `n` elements of this array.
	* @param n Return more than one element from `array`.
	* @return Returns the last `n` elements from `array.
	**/
	last(array: any[], n: number): any[];

	/**
	* Returns the rest of the elements in an array. Pass an index to return the values of the array
	* from that index onward.
	* @param array The array to retrieve all but the first `index` elements.
	* @param index The index to start retrieving elements forward from, optional, default = 1.
	* @return Returns the elements of `array` from `index` to the end of `array`.
	**/
	rest(array: any[], index?: number): any[];

	/**
	* Alias for 'rest'.
	* @see rest
	**/
	tail(array: any[], index?: number): any[];

	/**
	* Alias for 'rest'.
	* @see rest
	**/
	drop(array: any[], index?: number): any[];

	/**
	* Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "",
	* undefined and NaN are all falsy.
	* @param array Array to compact.
	* @return Copy of `array` without false values.
	**/
	compact(array: any[]): any[];

	/**
	* Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will
	* only be flattened a single level.
	* @param array The array to flatten.
	* @param shallow If true then only flatten one level, optional, default = false.
	* @return `array` flattened.
	**/
	flatten(array: any, shallow?: bool): any;

	/**
	* Returns a copy of the array with all instances of the values removed.
	* @param array The array to remove `values` from.
	* @param values The values to remove from `array`.
	* @return Copy of `array` without `values`.
	**/
	without(array: any[], ...values: any[]): any[];

	/**
	* Computes the union of the passed-in arrays: the list of unique items, in order, that are
	* present in one or more of the arrays.
	* @param arrays Array of arrays to compute the union of.
	* @return The union of elements within `arrays`.
	**/
	union(...arrays: any[][]): any[];

	/**
	* Computes the list of values that are the intersection of all the arrays. Each value in the result
	* is present in each of the arrays.
	* @param arrays Array of arrays to compute the intersection of.
	* @return The intersection of elements within `arrays`.
	**/
	intersection(...arrays: any[][]): any[];

	/**
	* Similar to without, but returns the values from array that are not present in the other arrays.
	* @param array Keeps values that are within `others`.
	* @param others The values to keep within `array`.
	* @return Copy of `array` with only `others` values.
	**/
	difference(array: any[], ...others: any[]): any[];

	/**
	* Produces a duplicate-free version of the array, using === to test object equality. If you know in
	* advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If
	* you want to compute unique items based on a transformation, pass an iterator function.
	* @param array Array to remove duplicates from.
	* @param isSorted True if `array` is already sorted, optiona, default = false.
	* @param iterator Transform the elements of `array` before comparisons for uniqueness.
	* @param context 'this' object in `iterator`, optional.
	* @return Copy of `array` where all elements are unique.
	**/
	uniq(
		array: any[],
		isSorted?: bool,
		iterator?: (element: any, index?: number, list?: any[]) => any,
		context?: any): any[];
	/**
	* Produces a duplicate-free version of the array, using === to test object equality. If you know in
	* advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If
	* you want to compute unique items based on a transformation, pass an iterator function.
	* @param array Array to remove duplicates from.
	* @param iterator Transform the elements of `array` before comparisons for uniqueness.
	* @param context 'this' object in `iterator`, optional.
	* @return Copy of `array` where all elements are unique.
	**/
	uniq(
		array: any[],
		iterator?: (element: any, index?: number, list?: any[]) => any,
		context?: any): any[];

	/**
	* Alias for 'uniq'.
	* @see uniq
	**/
	unique(array: any[],
		isSorted?: bool,
		iterator?: (element: any, index?: number, list?: any[]) => any): any[];

	/**
	* Merges together the values of each of the arrays with the values at the corresponding position.
	* Useful when you have separate data sources that are coordinated through matching array indexes.
	* If you're working with a matrix of nested arrays, zip.apply can transpose the matrix in a similar fashion.
	* @param arrays The arrays to merge/zip.
	* @return Zipped version of `arrays`.
	**/
	zip(...arrays: any[][]): any[][];

	/**
	* Converts arrays into objects. Pass either a single list of [key, value] pairs, or a
	* list of keys, and a list of values.
	* @param keys Key array.
	* @param values Value array.
	* @return An object containing the `keys` as properties and `values` as the property values.
	**/
	object(keys: string[], values: any[]): any;
	/**
	* Converts arrays into objects. Pass either a single list of [key, value] pairs, or a
	* list of keys, and a list of values.
	* @param keyValuePairs Array of [key, value] pairs.
	* @return An object containing the `keys` as properties and `values` as the property values.
	**/
	object(...keyValuePairs: any[][]): any;

	/**
	* Returns the index at which value can be found in the array, or -1 if value is not present in the array.
	* Uses the native indexOf function unless it's missing. If you're working with a large array, and you know
	* that the array is already sorted, pass true for isSorted to use a faster binary search ... or, pass a number
	* as the third argument in order to look for the first matching value in the array after the given index.
	* @param array The array to search for the index of `value`.
	* @param value The value to search for within `array`.
	* @param isSorted True if the array is already sorted, optional, default = false.
	* @return The index of `value` within `array`.
	**/
	indexOf(array: any[], value: any, isSorted?: bool): number;

	/**
	* Returns the index of the last occurrence of value in the array, or -1 if value is not present. Uses the
	* native lastIndexOf function if possible. Pass fromIndex to start your search at a given index.
	* @param array The array to search for the last index of `value`.
	* @param value The value to search for within `array`.
	* @param from The starting index for the search, optional.
	* @return The index of the last occurance of `value` within `array`.
	**/
	lastIndexOf(array: any[], value: any, from?: number): number;

	/**
	* Uses a binary search to determine the index at which the value should be inserted into the list in order
	* to maintain the list's sorted order. If an iterator is passed, it will be used to compute the sort ranking
	* of each value, including the value you pass.
	* @param list The sorted list.
	* @param value The value to determine its index within `list`.
	* @param iterator Iterator to compute the sort ranking of each value, optional.
	* @return The index where `value` should be inserted into `list`.
	**/
	sortedIndex(list: any[], value: any, iterator?: (element: any) => number): number;

	/**
	* A function to create flexibly-numbered lists of integers, handy for each and map loops. start, if omitted,
	* defaults to 0; step defaults to 1. Returns a list of integers from start to stop, incremented (or decremented)
	* by step, exclusive.
	* @param start Start here.
	* @param stop Stop here.
	* @param step The number to count up by each iteration, optional, default = 1.
	* @return Array of numbers from `start` to `stop` with increments of `step`.
	**/
	range(start: number, stop: number, step?: number): number[];
	/**
	* A function to create flexibly-numbered lists of integers, handy for each and map loops. start, if omitted,
	* defaults to 0; step defaults to 1. Returns a list of integers from start to stop, incremented (or decremented)
	* by step, exclusive.
	* @param stop Stop here.
	* @return Array of numbers from 0 to `stop` with increments of 1.
	* @note If start is not specified the implementation will never pull the step (step = arguments[2] || 0)
	**/
	range(stop: number): number[];

	/************
	* Functions *
	*************/

	/**
	* Bind a function to an object, meaning that whenever the function is called, the value of this will
	* be the object. Optionally, bind arguments to the function to pre-fill them, also known as partial application.
	* @param fn The function to bind `this` to `object`.
	* @param object The `this` pointer whenever `fn` is called.
	* @param arguments Additional arguments to pass to `fn` when called.
	* @return `fn` with `this` bound to `object`.
	**/
	bind(fn: Function, object: any, ...arguments: any[]): Function;


	/**
	* Binds a number of methods on the object, specified by methodNames, to be run in the context of that object
	* whenever they are invoked. Very handy for binding functions that are going to be used as event handlers,
	* which would otherwise be invoked with a fairly useless this. If no methodNames are provided, all of the
	* object's function properties will be bound to it.
	* @param object The object to bind the methods `methodName` to.
	* @param methodNames The methods to bind to `object`, optional and if not provided all of `object`'s 
	*                    methods are bound.
	**/
	bindAll(object: any, ...methodNames: string[]): void;

	/**
	* Partially apply a function by filling in any number of its arguments, without changing its dynamic this value.
	* A close cousin of bind.
	* @param fn Function to partially fill in arguments.
	* @param arguments The partial arguments.
	* @return `fn` with partially filled in arguments.
	**/
	partial(fn: Function, ...arguments: any[]): Function;

	/**
	* Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations.
	* If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based
	* on the arguments to the original function. The default hashFunction just uses the first argument to the
	* memoized function as the key.
	* @param fn Computationally expensive function that will now memoized results.
	* @param hashFn Hash function for storing the result of `fn`.
	* @return Memoized version of `fn`.
	**/
	memoize(fn: Function, hashFn?: (n: any) => string): Function;

	/**
	* Much like setTimeout, invokes function after wait milliseconds. If you pass the optional arguments,
	* they will be forwarded on to the function when it is invoked.
	* @param fn Function to delay `waitMS` amount of ms.
	* @param waitMS The amount of milliseconds to delay `fn`.
	* @arguments Additional arguments to pass to `fn`.
	**/
	delay(fn: Function, waitMS: number, ...arguments: any[]): void;

	/**
	* Defers invoking the function until the current call stack has cleared, similar to using setTimeout
	* with a delay of 0. Useful for performing expensive computations or HTML rendering in chunks without
	* blocking the UI thread from updating. If you pass the optional arguments, they will be forwarded on
	* to the function when it is invoked.
	* @param fn The function to defer.
	* @param arguments Additional arguments to pass to `fn`.
	**/
	defer(fn: Function, ...arguments: any[]): void;

	/**
	* Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly,
	* will only actually call the original function at most once per every wait milliseconds. Useful for
	* rate-limiting events that occur faster than you can keep up with.
	* @param fn Function to throttle `waitMS` ms.
	* @param waitMS The number of milliseconds to wait before `fn` can be invoked again.
	* @return `fn` with a throttle of `waitMS`.
	**/
	throttle(fn: Function, waitMS: number): Function;

	/**
	* Creates and returns a new debounced version of the passed function that will postpone its execution
	* until after wait milliseconds have elapsed since the last time it was invoked. Useful for implementing
	* behavior that should only happen after the input has stopped arriving. For example: rendering a preview
	* of a Markdown comment, recalculating a layout after the window has stopped being resized, and so on.
	*
	* Pass true for the immediate parameter to cause debounce to trigger the function on the leading instead
	* of the trailing edge of the wait interval. Useful in circumstances like preventing accidental double
	*-clicks on a "submit" button from firing a second time.
	* @param fn Function to debounce `waitMS` ms.
	* @param waitMS The number of milliseconds to wait before `fn` can be invoked again.
	* @param immediate True if `fn` should be invoked on the leading edge of `waitMS` instead of the trailing edge.
	* @return Debounced version of `fn` that waits `waitMS` ms when invoked.
	**/
	debounce(fn: Function, waitMS: number, immediate?: bool): Function;

	/**
	* Creates a version of the function that can only be called one time. Repeated calls to the modified
	* function will have no effect, returning the value from the original call. Useful for initialization
	* functions, instead of having to set a boolean flag and then check it later.
	* @param fn Function to only execute once.
	* @return Copy of `fn` that can only be invoked once.
	**/
	once(fn: Function): Function;

	/**
	* Creates a version of the function that will only be run after first being called count times. Useful
	* for grouping asynchronous responses, where you want to be sure that all the async calls have finished,
	* before proceeding.
	* @param count Number of times to be called before actually executing.
	* @fn The function to defer execution `count` times.
	* @return Copy of `fn` that will not execute until it is invoked `count` times.
	**/
	after(count: number, fn: Function): Function;

	/**
	* Wraps the first function inside of the wrapper function, passing it as the first argument. This allows
	* the wrapper to execute code before and after the function runs, adjust the arguments, and execute it
	* conditionally.
	* @param fn Function to wrap.
	* @param wrapper The function that will wrap `fn`.
	* @return Wrapped version of `fn.
	**/
	wrap(fn: Function, wrapper: (fn: Function, ...args: any[]) => any): Function;

	/**
	* Returns the composition of a list of functions, where each function consumes the return value of the
	* function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
	* @param functions List of functions to compose.
	* @return Composition of `functions`.
	**/
	compose(...functions: Function[]): Function;

	/**********
	* Objects *
	***********/

	/**
	* Retrieve all the names of the object's properties.
	* @param object Retreive the key or property names from this object.
	* @return List of all the property names on `object`.
	**/
	keys(object: any): string[];

	/**
	* Return all of the values of the object's properties.
	* @param object Retreive the values of all the properties on this object.
	* @return List of all the values on `object`.
	**/
	values(object: any): any[];

	/**
	* Convert an object into a list of [key, value] pairs.
	* @param object Convert this object to a list of [key, value] pairs.
	* @return List of [key, value] pairs on `object`.
	**/
	pairs(object: any): any[][];

	/**
	* Returns a copy of the object where the keys have become the values and the values the keys.
	* For this to work, all of your object's values should be unique and string serializable.
	* @param object Object to invert key/value pairs.
	* @return An inverted key/value paired version of `object`.
	**/
	invert(object: any): any;

	/**
	* Returns a sorted list of the names of every method in an object � that is to say,
	* the name of every function property of the object.
	* @param object Object to pluck all function property names from.
	* @return List of all the function names on `object`.
	**/
	functions(object: any): string[];

	/**
	* Copy all of the properties in the source objects over to the destination object, and return
	* the destination object. It's in-order, so the last source will override properties of the
	* same name in previous arguments.
	* @param destination Object to extend all the properties from `sources`.
	* @param sources Extends `destination` with all properties from these source objects.
	* @return `destination` extended with all the properties from the `sources` objects.
	**/
	extend(destination: any, ...sources: any[]): any;

	/**
	* Return a copy of the object, filtered to only have values for the whitelisted keys
	* (or array of valid keys).
	* @param object Object to strip unwanted key/value pairs.
	* @keys The key/value pairs to keep on `object`.
	* @return Copy of `object` with only the `keys` properties.
	**/
	pick(object: any, ...keys: string[]): any;

	/**
	* Return a copy of the object, filtered to omit the blacklisted keys (or array of keys).
	* @param object Object to strip unwanted key/value pairs.
	* @param keys The key/value pairs to remove on `object`.
	* @return Copy of `object` without the `keys` properties.
	**/
	omit(object: any, ...keys: string[]): any;

	/**
	* Fill in null and undefined properties in object with values from the defaults objects,
	* and return the object. As soon as the property is filled, further defaults will have no effect.
	* @param object Fill this object with default values.
	* @param defaults The default values to add to `object`.
	* @return `object` with added `defaults` values.
	**/
	defaults(object: any, ...defaults: any[]): any;

	/**
	* Create a shallow-copied clone of the object.
	* Any nested objects or arrays will be copied by reference, not duplicated.
	* @param object Object to clone.
	* @return Copy of `object`.
	**/
	clone(object: any): any;
	/**
	* Create a shallow-copied clone of the object.
	* Any nested objects or arrays will be copied by reference, not duplicated.
	* @param list List to clone.
	* @return Copy of `list`.
	**/
	clone(list: any[]): any[];

	/**
	* Invokes interceptor with the object, and then returns object. The primary purpose of this method
	* is to "tap into" a method chain, in order to perform operations on intermediate results within the chain.
	* @param object Argument to `interceptor`.
	* @param intercepter The function to modify `object` before continuing the method chain.
	* @return Modified `object`.
	**/
	tap(object: any, intercepter: Function): any;

	/**
	* Does the object contain the given key? Identical to object.hasOwnProperty(key), but uses a safe
	* reference to the hasOwnProperty function, in case it's been overridden accidentally.
	* @param object Object to check for `key`.
	* @param key The key to check for on `object`.
	* @return True if `key` is a property on `object`, otherwise false.
	**/
	has(object: any, key: string): bool;

	/**
	* Performs an optimized deep comparison between the two objects,
	* to determine if they should be considered equal.
	* @param object Compare to `other`.
	* @param other Compare to `object`.
	* @return True if `object` is equal to `other`.
	**/
	isEqual(object: any, other: any): bool;

	/**
	* Returns true if object contains no values.
	* @param object Check if this object has no properties or values.
	* @return True if `object` is empty.
	**/
	isEmpty(object: any): bool;
	/**
	* Returns true if the list contains no values.
	* @param object Check if this list has no elements.
	* @return True if `list` is empty.
	**/
	isEmpty(list: any[]): bool;

	/**
	* Returns true if object is a DOM element.
	* @param object Check if this object is a DOM element.
	* @return True if `object` is a DOM element, otherwise false.
	**/
	isElement(object: any): bool;

	/**
	* Returns true if object is an Array.
	* @param object Check if this object is an Array.
	* @return True if `object` is an Array, otherwise false.
	**/
	isArray(object: any): bool;

	/**
	* Returns true if value is an Object. Note that JavaScript arrays and functions are objects,
	* while (normal) strings and numbers are not.
	* @param object Check if this object is an Object.
	* @return True of `object` is an Object, otherwise false.
	**/
	isObject(object: any): bool;

	/**
	* Returns true if object is an Arguments object.
	* @param object Check if this object is an Arguments object.
	* @return True if `object` is an Arguments object, otherwise false.
	**/
	isArguments(object: any): bool;

	/**
	* Returns true if object is a Function.
	* @param object Check if this object is a Function.
	* @return True if `object` is a Function, otherwise false.
	**/
	isFunction(object: any): bool;

	/**
	* Returns true if object is a String.
	* @param object Check if this object is a String.
	* @return True if `object` is a String, otherwise false.
	**/
	isString(object: any): bool;

	/**
	* Returns true if object is a Number (including NaN).
	* @param object Check if this object is a Number.
	* @return True if `object` is a Number, otherwise false.
	**/
	isNumber(object: any): bool;

	/**
	* Returns true if object is a finite Number.
	* @param object Check if this object is a finite Number.
	* @return True if `object` is a finite Number.
	**/
	isFinite(object: any): bool;

	/**
	* Returns true if object is either true or false.
	* @param object Check if this object is a bool.
	* @return True if `object` is a bool, otherwise false.
	**/
	isBoolean(object: any): bool;

	/**
	* Returns true if object is a Date.
	* @param object Check if this object is a Date.
	* @return True if `object` is a Date, otherwise false.
	**/
	isDate(object: any): bool;

	/**
	* Returns true if object is a RegExp.
	* @param object Check if this object is a RegExp.
	* @return True if `object` is a RegExp, otherwise false.
	**/
	isRegExp(object: any): bool;

	/**
	* Returns true if object is NaN.
	* Note: this is not the same as the native isNaN function,
	* which will also return true if the variable is undefined.
	* @param object Check if this object is NaN.
	* @return True if `object` is NaN, otherwise false.
	**/
	isNaN(object: any): bool;

	/**
	* Returns true if the value of object is null.
	* @param object Check if this object is null.
	* @return True if `object` is null, otherwise false.
	**/
	isNull(object: any): bool;

	/**
	* Returns true if value is undefined.
	* @param object Check if this object is undefined.
	* @return True if `object` is undefined, otherwise false.
	**/
	isUndefined(object: any): bool;

	/**********
	* Utility *
	***********/

	/**
	* Give control of the "_" variable back to its previous owner.
	* Returns a reference to the Underscore object.
	* @return Underscore object reference.
	**/
	noConflict(): Underscore;

	/**
	* Returns the same value that is used as the argument. In math: f(x) = x
	* This function looks useless, but is used throughout Underscore as a default iterator.
	* @param value Identity of this object.
	* @return `value`.
	**/
	identity(value: any): any;

	/**
	* Invokes the given iterator function n times.
	* Each invocation of iterator is called with an index argument
	* @param n Number of times to invoke `iterator`.
	* @param iterator Function iterator to invoke `n` times.
	* @param context `this` object in `iterator`, optional.
	**/
	times(n: number, iterator: (n: number) => any , context?: any): any[];

	/**
	* Returns a random integer between min and max, inclusive. If you only pass one argument,
	* it will return a number between 0 and that number.
	* @param max The maximum random number.
	* @return A random number between 0 and `max`.
	**/
	random(max: number): number;
	/**
	* Returns a random integer between min and max, inclusive. If you only pass one argument,
	* it will return a number between 0 and that number.
	* @param min The minimum random number.
	* @param max The maximum random number.
	* @return A random number between `min` and `max`.
	**/
	random(min: number, max: number): number;

	/**
	* Allows you to extend Underscore with your own utility functions. Pass a hash of
	* {name: function} definitions to have your functions added to the Underscore object,
	* as well as the OOP wrapper.
	* @param object Mixin object containing key/function pairs to add to the Underscore object.
	**/
	mixin(object: any): void;

	/**
	* Generate a globally-unique id for client-side models or DOM elements that need one.
	* If prefix is passed, the id will be appended to it. Without prefix, returns an integer.
	* @return Unique number ID.
	**/
	uniqueId(): number;
	/**
	* Generate a globally-unique id for client-side models or DOM elements that need one.
	* If prefix is passed, the id will be appended to it. Without prefix, returns an integer.
	* @param prefix A prefix string to start the unique ID with.
	* @return Unique string ID beginning with `prefix`.
	**/
	uniqueId(prefix: string): string;

	/**
	* Escapes a string for insertion into HTML, replacing &, <, >, ", ', and / characters.
	* @param str Raw string to escape.
	* @return `str` HTML escaped.
	**/
	escape(str: string): string;

	/**
	* If the value of the named property is a function then invoke it; otherwise, return it.
	* @param object Object to maybe invoke function `property` on.
	* @param property The function by name to invoke on `object`.
	* @return The result of invoking the function `property` on `object.
	**/
	result(object: any, property: string): any;

	/**
	* Compiles JavaScript templates into functions that can be evaluated for rendering. Useful
	* for rendering complicated bits of HTML from JSON data sources. Template functions can both
	* interpolate variables, using <%= � %>, as well as execute arbitrary JavaScript code, with
	* <% � %>. If you wish to interpolate a value, and have it be HTML-escaped, use <%- � %> When
	* you evaluate a template function, pass in a data object that has properties corresponding to
	* the template's free variables. If you're writing a one-off, you can pass the data object as
	* the second parameter to template in order to render immediately instead of returning a template
	* function. The settings argument should be a hash containing any _.templateSettings that should
	* be overridden.
	* @param templateString Underscore HTML template.
	* @param data Data to use when compiling `templateString`.
	* @param settings Settings to use while compiling.
	* @return Returns the compiled Underscore HTML template.
	**/
	template(templateString: string, data?: any, settings?: UnderscoreTemplateSettings): any;

	/**
	* By default, Underscore uses ERB-style template delimiters, change the
	* following template settings to use alternative delimiters.
	**/
	templateSettings: UnderscoreTemplateSettings;

	/***********
	* Chaining *
	************/

	/**
	* Returns a wrapped object. Calling methods on this object will continue to return wrapped objects
	* until value() is used.
	* @param obj Object to chain.
	* @return Wrapped `obj`.
	**/
	chain(obj: any): UnderscoreChain;

	/**
	* Extracts the value of a wrapped object.
	* @param obj Wrapped object to extract the value from.
	* @return Value of `obj`.
	**/
	value(obj: any): any;

	/**************
	* OOP Wrapper *
	**************/

	/**
	* Underscore OOP Wrapper, all Underscore functions that take an object
	* as the first parameter can be invoked through this function.
	* @param key First argument to Underscore object functions.
	**/
	(obj: any): UnderscoreOOPWrapper;
}

/**
* underscore.js template settings, set templateSettings or pass as an argument 
* to 'template()' to overide defaults.
**/
interface UnderscoreTemplateSettings {
	/**
	* Default value is '/<%([\s\S]+?)%>/g'.
	**/
	evaluate?: RegExp;

	/**
	* Default value is '/<%=([\s\S]+?)%>/g'.
	**/
	interpolate?: RegExp;

	/**
	* Default value is '/<%-([\s\S]+?)%>/g'.
	**/
	escape?: RegExp;
}

interface UnderscoreOOPWrapper {

	/**************
	* Collections *
	**************/

	/**
	* Wrapped type `any[]`.
	* @see _.each
	**/
	each(
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): void;
	/**
	* Wrapped type `object`.
	* @see _.each
	**/
	each(
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): void;

	/**
	* Alias for 'each'.
	* @see each
	**/
	forEach(
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): void;
	/**
	* Alias for 'each'.
	* @see each
	**/
	forEach(
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): void;

	/**
	* Wrapped type `any[]`.
	* @see _.map
	**/
	map(
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): any[];
	/**
	* Wrapped type `object`.
	* @see _.map
	**/
	map(
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): any[];

	/**
	* Alias for 'map'.
	* @see map
	**/
	collect(
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): any[];
	/**
	* Alias for 'map'.
	* @see map
	**/
	collect(
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): any[];

	/**
	* Wrapped type `any[]`.
	* @see _.reduce
	**/
	reduce(
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Alias for 'reduce'.
	* @see reduce
	**/
	inject(
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Alias for 'reduce'.
	* @see reduce
	**/
	foldl(
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Wrapped type `any[]`.
	* @see _.reduceRight
	**/
	reduceRight(
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Alias for 'reduceRight'.
	* @see reduceRight
	**/
	foldr(
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Wrapped type `any[]`.
	* @see _.find
	**/
	find(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any;

	/**
	* Alias for 'find'.
	* @see find
	**/
	detect(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any;


	/**
	* Wrapped type `any[]`.
	* @see _.filter
	**/
	filter(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any[];

	/**
	* Alias for 'filter'.
	* @see filter
	**/
	select(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any[];

	/**
	* Wrapped type `any[]`.
	* @see _.where
	**/
	where(list: any[], properties: any): any[];

	/**
	* Wrapped type `any[]`.
	* @see _.findWhere
	**/
	findWhere(properties: any): any;

	/**
	* Wrapped type `any[]`.
	* @see _.reject
	**/
	reject(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any[];

	/**
	* Wrapped type `any[]`.
	* @see _.all
	**/
	all(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): bool;

	/**
	* Alias for 'all'.
	* @see all
	**/
	every(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): bool;

	/**
	* Wrapped type `any[]`.
	* @see _.any
	**/
	any(
		list: any[],
		iterator?: (element: any, index?: number, list?: any[]) => bool,
		context?: any): bool;

	/**
	* Alias for 'any'.
	* @see any
	**/
	some(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): bool;

	/**
	* Wrapped type `any[]`.
	* @see _.contains
	**/
	contains(value: any): bool;

	/**
	* Alias for 'contains'.
	* @see contains
	**/
	include(value: any): bool;

	/**
	* Wrapped type `any[]`.
	* @see _.invoke
	**/
	invoke(methodName: string, ...arguments: any[]): void;

	/**
	* Wrapped type `any[]`.
	* @see _.pluck
	**/
	pluck(propertyName: string): any[];

	/**
	* Wrapped type `number[]`.
	* @see _.max
	**/
	max(): number;
	/**
	* Wrapped type `any[]`.
	* @see _.max
	**/
	max(
		iterator: (element: any, index?: number, list?: any[]) => number,
		context?: any): any;

	/**
	* Wrapped type `number[]`.
	* @see _.min
	**/
	min(): number;
	/**
	* Wrapped type `any[]`.
	* @see _.min
	**/
	min(
		iterator: (obj: any, index?: number, list?: any[]) => number,
		context?: any): any;

	/**
	* Wrapped type `any[]`.
	* @see _.sortBy
	**/
	sortBy(
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): any[];
	/**
	* Wrapped type `any[]`.
	* @see _.sortBy
	**/
	sortBy(
		iterator: string,
		context?: any): any[];

	/**
	* Wrapped type `any[]`.
	* @see _.groupBy
	**/
	groupBy(
		iterator: (element: any, index?: number, list?: any[]) => string,
		context?: any): { [key: string]: any[]; };
	/**
	* Wrapped type `any[]`.
	* @see _.groupBy
	**/
	groupBy(
		iterator: string,
		context?: any): { [key: string]: any[]; };

	/**
	* Wrapped type `any[]`.
	* @see _.countBy
	**/
	countBy(
		iterator: (element: any, index?: number, list?: any[]) => string,
		context?: any): { [key: string]: number; };
	/**
	* Wrapped type `any[]`.
	* @see _.countBy
	**/
	countBy(
		iterator: string,
		context?: any): { [key: string]: number; };

	/**
	* Wrapped type `any[]`.
	* @see _.shuffle
	**/
	shuffle(): any[];

	/**
	* Wrapped type `any`.
	* @see _.toArray
	**/
	toArray(): any[];

	/**
	* Wrapped type `any`.
	* @see _.size
	**/
	size(): number;

	/*********
	* Arrays *
	**********/

	/**
	* Wrapped type `any[]`.
	* @see _.first
	**/
	first(): any;
	/**
	* Wrapped type `any[]`.
	* @see _.first
	**/
	first(n: number): any[];

	/**
	* Alias for 'first'.
	* @see first
	**/
	head(): any;
	/**
	* Alias for 'first'.
	* @see first
	**/
	head(n: number): any[];

	/**
	* Alias for 'first'.
	* @see first
	**/
	take(): any;
	/**
	* Alias for 'first'.
	* @see first
	**/
	take(n: number): any[];

	/**
	* Wrapped type `any[]`.
	* @see _.initial
	**/
	initial(n?: number): any[];

	/**
	* Wrapped type `any[]`.
	* @see _.last
	**/
	last(): any;
	/**
	* Wrapped type `any[]`.
	* @see _.last
	**/
	last(n: number): any[];

	/**
	* Wrapped type `any[]`.
	* @see _.rest
	**/
	rest(index?: number): any[];

	/**
	* Alias for 'rest'.
	* @see rest
	**/
	tail(index?: number): any[];

	/**
	* Alias for 'rest'.
	* @see rest
	**/
	drop(index?: number): any[];

	/**
	* Wrapped type `any[]`.
	* @see _.compact
	**/
	compact(): any[];

	/**
	* Wrapped type `any`.
	* @see _.flatten
	**/
	flatten(shallow?: bool): any;

	/**
	* Wrapped type `any[]`.
	* @see _.without
	**/
	without(...values: any[]): any[];

	/**
	* Wrapped type `any[][]`.
	* @see _.union
	**/
	union(...arrays: any[][]): any[];

	/**
	* Wrapped type `any[][]`.
	* @see _.intersection
	**/
	intersection(...arrays: any[][]): any[];

	/**
	* Wrapped type `any[]`.
	* @see _.difference
	**/
	difference(...others: any[]): any[];

	/**
	* Wrapped type `any[]`.
	* @see _.uniq
	**/
	uniq(
		isSorted?: bool,
		iterator?: (element: any, index?: number, list?: any[]) => any,
		context?: any): any[];
	/**
	* Wrapped type `any[]`.
	* @see _.uniq
	**/
	uniq(
		iterator?: (element: any, index?: number, list?: any[]) => any,
		context?: any): any[];

	/**
	* Alias for 'uniq'.
	* @see uniq
	**/
	unique(
		isSorted?: bool,
		iterator?: (element: any, index?: number, list?: any[]) => any): any[];

	/**
	* Wrapped type `any[][]`.
	* @see _.zip
	**/
	zip(...arrays: any[][]): any[][];

	/**
	* Wrapped type `any[][]`.
	* @see _.object
	**/
	object(...keyValuePairs: any[][]): any;

	/**
	* Wrapped type `any[]`.
	* @see _.indexOf
	**/
	indexOf(value: any, isSorted?: bool): number;

	/**
	* Wrapped type `any[]`.
	* @see _.lastIndexOf
	**/
	lastIndexOf(value: any, from?: number): number;

	/**
	* Wrapped type `any[]`.
	* @see _.sortedIndex
	**/
	sortedIndex(value: any, iterator?: (element: any) => number): number;

	/**
	* Wrapped type `number`.
	* @see _.range
	**/
	range(stop: number, step?: number): number[];
	/**
	* Wrapped type `number`.
	* @see _.range
	**/
	range(): number[];

	/************
	* Functions *
	*************/

	/**
	* Wrapped type `Function`.
	* @see _.bind
	**/
	bind(object: any, ...arguments: any[]): Function;


	/**
	* Wrapped type `object`.
	* @see _.bindAll
	**/
	bindAll(...methodNames: string[]): void;

	/**
	* Wrapped type `Function`.
	* @see _.partial
	**/
	partial(...arguments: any[]): Function;

	/**
	* Wrapped type `Function`.
	* @see _.memoize
	**/
	memoize(hashFn?: (n: any) => string): Function;

	/**
	* Wrapped type `Function`.
	* @see _.delay
	**/
	delay(waitMS: number, ...arguments: any[]): void;

	/**
	* Wrapped type `Function`.
	* @see _.defer
	**/
	defer(...arguments: any[]): void;

	/**
	* Wrapped type `Function`.
	* @see _.throttle
	**/
	throttle(waitMS: number): Function;

	/**
	* Wrapped type `Function`.
	* @see _.debounce
	**/
	debounce(waitMS: number, immediate?: bool): Function;

	/**
	* Wrapped type `Function`.
	* @see _.once
	**/
	once(): Function;

	/**
	* Wrapped type `number`.
	* @see _.after
	**/
	after(fn: Function): Function;

	/**
	* Wrapped type `Function`.
	* @see _.wrap
	**/
	wrap(wrapper: (fn: Function, ...args: any[]) => any): Function;

	/**
	* Wrapped type `Function[]`.
	* @see _.compose
	**/
	compose(...functions: Function[]): Function;

	/**********
	* Objects *
	***********/

	/**
	* Wrapped type `object`.
	* @see _.keys
	**/
	keys(): string[];

	/**
	* Wrapped type `object`.
	* @see _.values
	**/
	values(): any[];

	/**
	* Wrapped type `object`.
	* @see _.pairs
	**/
	pairs(): any[][];

	/**
	* Wrapped type `object`.
	* @see _.invert
	**/
	invert(): any;

	/**
	* Wrapped type `object`.
	* @see _.functions
	**/
	functions(): string[];

	/**
	* Wrapped type `object`.
	* @see _.extend
	**/
	extend(...sources: any[]): any;

	/**
	* Wrapped type `object`.
	* @see _.pick
	**/
	pick(...keys: string[]): any;

	/**
	* Wrapped type `object`.
	* @see _.omit
	**/
	omit(...keys: string[]): any;

	/**
	* Wrapped type `object`.
	* @see _.defaults
	**/
	defaults(...defaults: any[]): any;

	/**
	* Wrapped type `object`.
	* @see _.clone
	**/
	clone(object: any): any;
	/**
	* Wrapped type `any[]`.
	* @see _.clone
	**/
	clone(list: any[]): any[];

	/**
	* Wrapped type `object`.
	* @see _.tap
	**/
	tap(intercepter: Function): any;

	/**
	* Wrapped type `object`.
	* @see _.has
	**/
	has(key: string): bool;

	/**
	* Wrapped type `object`.
	* @see _.isEqual
	**/
	isEqual(other: any): bool;

	/**
	* Wrapped type `object`.
	* @see _.isEmpty
	**/
	isEmpty(object: any): bool;
	/**
	* Wrapped type `any[]`.
	* @see _.isEmpty
	**/
	isEmpty(list: any[]): bool;

	/**
	* Wrapped type `object`.
	* @see _.isElement
	**/
	isElement(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isArray
	**/
	isArray(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isObject
	**/
	isObject(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isArguments
	**/
	isArguments(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isFunction
	**/
	isFunction(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isString
	**/
	isString(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isNumber
	**/
	isNumber(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isFinite
	**/
	isFinite(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isBoolean
	**/
	isBoolean(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isDate
	**/
	isDate(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isRegExp
	**/
	isRegExp(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isNaN
	**/
	isNaN(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isNull
	**/
	isNull(): bool;

	/**
	* Wrapped type `object`.
	* @see _.isUndefined
	**/
	isUndefined(): bool;

	/**********
	* Utility *
	***********/

	/**
	* Wrapped type `any`.
	* @see _.identity
	**/
	identity(): any;

	/**
	* Wrapped type `number`.
	* @see _.times
	**/
	times(iterator: (n: number) => any, context?: any): any[];

	/**
	* Wrapped type `number`.
	* @see _.random
	**/
	random(): number;
	/**
	* Wrapped type `number`.
	* @see _.random
	**/
	random(max: number): number;

	/**
	* Wrapped type `object`.
	* @see _.mixin
	**/
	mixin(): void;

	/**
	* Wrapped type `string`.
	* @see _.uniqueId
	**/
	uniqueId(): string;

	/**
	* Wrapped type `string`.
	* @see _.escape
	**/
	escape(): string;

	/**
	* Wrapped type `object`.
	* @see _.result
	**/
	result(property: string): any;

	/**
	* Wrapped type `string`.
	* @see _.template
	**/
	template(data?: any, settings?: UnderscoreTemplateSettings): any;

	/***********
	* Chaining *
	************/

	/**
	* Wrapped type `any`.
	* @see _.chain
	**/
	chain(): UnderscoreChain;

	/**
	* Wrapped type `any`.
	* @see _.value
	**/
	value(): any;
}

interface UnderscoreChain {

	/**************
	* Collections *
	**************/

	/**
	* Wrapped type `any[]`.
	* @see _.each
	**/
	each(
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): UnderscoreChain;
	/**
	* Wrapped type `object`.
	* @see _.each
	**/
	each(
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): UnderscoreChain;

	/**
	* Alias for 'each'.
	* @see each
	**/
	forEach(
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): UnderscoreChain;
	/**
	* Alias for 'each'.
	* @see each
	**/
	forEach(
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.map
	**/
	map(
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): UnderscoreChain;
	/**
	* Wrapped type `object`.
	* @see _.map
	**/
	map(
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): UnderscoreChain;

	/**
	* Alias for 'map'.
	* @see map
	**/
	collect(
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): UnderscoreChain;
	/**
	* Alias for 'map'.
	* @see map
	**/
	collect(
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.reduce
	**/
	reduce(
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): UnderscoreChain;

	/**
	* Alias for 'reduce'.
	* @see reduce
	**/
	inject(
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): UnderscoreChain;

	/**
	* Alias for 'reduce'.
	* @see reduce
	**/
	foldl(
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.reduceRight
	**/
	reduceRight(
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): UnderscoreChain;

	/**
	* Alias for 'reduceRight'.
	* @see reduceRight
	**/
	foldr(
		iterator: (memo: any, element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.find
	**/
	find(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): UnderscoreChain;

	/**
	* Alias for 'find'.
	* @see find
	**/
	detect(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): UnderscoreChain;


	/**
	* Wrapped type `any[]`.
	* @see _.filter
	**/
	filter(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): UnderscoreChain;

	/**
	* Alias for 'filter'.
	* @see filter
	**/
	select(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.where
	**/
	where(properties: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.findWhere
	**/
	findWhere(properties: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.reject
	**/
	reject(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.all
	**/
	all(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): UnderscoreChain;

	/**
	* Alias for 'all'.
	* @see all
	**/
	every(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.any
	**/
	any(
		iterator?: (element: any, index?: number, list?: any[]) => bool,
		context?: any): UnderscoreChain;

	/**
	* Alias for 'any'.
	* @see any
	**/
	some(
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.contains
	**/
	contains(value: any): UnderscoreChain;

	/**
	* Alias for 'contains'.
	* @see contains
	**/
	include(value: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.invoke
	**/
	invoke(methodName: string, ...arguments: any[]): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.pluck
	**/
	pluck(propertyName: string): UnderscoreChain;

	/**
	* Wrapped type `number[]`.
	* @see _.max
	**/
	max(): UnderscoreChain;
	/**
	* Wrapped type `any[]`.
	* @see _.max
	**/
	max(
		iterator: (element: any, index?: number, list?: any[]) => number,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `number[]`.
	* @see _.min
	**/
	min(): UnderscoreChain;
	/**
	* Wrapped type `any[]`.
	* @see _.min
	**/
	min(
		iterator: (obj: any, index?: number, list?: any[]) => number,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.sortBy
	**/
	sortBy(
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): UnderscoreChain;
	/**
	* Wrapped type `any[]`.
	* @see _.sortBy
	**/
	sortBy(
		iterator: string,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.groupBy
	**/
	groupBy(
		iterator: (element: any, index?: number, list?: any[]) => string,
		context?: any): UnderscoreChain;
	/**
	* Wrapped type `any[]`.
	* @see _.groupBy
	**/
	groupBy(
		iterator: string,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.countBy
	**/
	countBy(
		iterator: (element: any, index?: number, list?: any[]) => string,
		context?: any): UnderscoreChain;
	/**
	* Wrapped type `any[]`.
	* @see _.countBy
	**/
	countBy(
		iterator: string,
		context?: any): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.shuffle
	**/
	shuffle(): UnderscoreChain;

	/**
	* Wrapped type `any`.
	* @see _.toArray
	**/
	toArray(): UnderscoreChain;

	/**
	* Wrapped type `any`.
	* @see _.size
	**/
	size(): UnderscoreChain;

	/*********
	* Arrays *
	**********/

	/**
	* Wrapped type `any[]`.
	* @see _.first
	**/
	first(): UnderscoreChain;
	/**
	* Wrapped type `any[]`.
	* @see _.first
	**/
	first(n: number): UnderscoreChain;

	/**
	* Alias for 'first'.
	* @see first
	**/
	head(): UnderscoreChain;
	/**
	* Alias for 'first'.
	* @see first
	**/
	head(n: number): UnderscoreChain;

	/**
	* Alias for 'first'.
	* @see first
	**/
	take(): UnderscoreChain;
	/**
	* Alias for 'first'.
	* @see first
	**/
	take(n: number): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.initial
	**/
	initial(n?: number): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.last
	**/
	last(): UnderscoreChain;
	/**
	* Wrapped type `any[]`.
	* @see _.last
	**/
	last(n: number): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.rest
	**/
	rest(index?: number): UnderscoreChain;

	/**
	* Alias for 'rest'.
	* @see rest
	**/
	tail(index?: number): UnderscoreChain;

	/**
	* Alias for 'rest'.
	* @see rest
	**/
	drop(index?: number): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.compact
	**/
	compact(): UnderscoreChain;

	/**
	* Wrapped type `any`.
	* @see _.flatten
	**/
	flatten(shallow?: bool): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.without
	**/
	without(...values: any[]): UnderscoreChain;

	/**
	* Wrapped type `any[][]`.
	* @see _.union
	**/
	union(...arrays: any[][]): UnderscoreChain;

	/**
	* Wrapped type `any[][]`.
	* @see _.intersection
	**/
	intersection(...arrays: any[][]): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.difference
	**/
	difference(...others: any[]): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.uniq
	**/
	uniq(
		isSorted?: bool,
		iterator?: (element: any, index?: number, list?: any[]) => any,
		context?: any): UnderscoreChain;
	/**
	* Wrapped type `any[]`.
	* @see _.uniq
	**/
	uniq(
		iterator?: (element: any, index?: number, list?: any[]) => any,
		context?: any): UnderscoreChain;

	/**
	* Alias for 'uniq'.
	* @see uniq
	**/
	unique(
		isSorted?: bool,
		iterator?: (element: any, index?: number, list?: any[]) => any): UnderscoreChain;

	/**
	* Wrapped type `any[][]`.
	* @see _.zip
	**/
	zip(...arrays: any[][]): UnderscoreChain;

	/**
	* Wrapped type `any[][]`.
	* @see _.object
	**/
	object(...keyValuePairs: any[][]): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.indexOf
	**/
	indexOf(value: any, isSorted?: bool): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.lastIndexOf
	**/
	lastIndexOf(value: any, from?: number): UnderscoreChain;

	/**
	* Wrapped type `any[]`.
	* @see _.sortedIndex
	**/
	sortedIndex(value: any, iterator?: (element: any) => number): UnderscoreChain;

	/**
	* Wrapped type `number`.
	* @see _.range
	**/
	range(stop: number, step?: number): UnderscoreChain;
	/**
	* Wrapped type `number`.
	* @see _.range
	**/
	range(): UnderscoreChain;

	/************
	* Functions *
	*************/

	/**
	* Wrapped type `Function`.
	* @see _.bind
	**/
	bind(object: any, ...arguments: any[]): UnderscoreChain;


	/**
	* Wrapped type `object`.
	* @see _.bindAll
	**/
	bindAll(...methodNames: string[]): UnderscoreChain;

	/**
	* Wrapped type `Function`.
	* @see _.partial
	**/
	partial(...arguments: any[]): UnderscoreChain;

	/**
	* Wrapped type `Function`.
	* @see _.memoize
	**/
	memoize(hashFn?: (n: any) => string): UnderscoreChain;

	/**
	* Wrapped type `Function`.
	* @see _.delay
	**/
	delay(waitMS: number, ...arguments: any[]): UnderscoreChain;

	/**
	* Wrapped type `Function`.
	* @see _.defer
	**/
	defer(...arguments: any[]): UnderscoreChain;

	/**
	* Wrapped type `Function`.
	* @see _.throttle
	**/
	throttle(waitMS: number): UnderscoreChain;

	/**
	* Wrapped type `Function`.
	* @see _.debounce
	**/
	debounce(waitMS: number, immediate?: bool): UnderscoreChain;

	/**
	* Wrapped type `Function`.
	* @see _.once
	**/
	once(): UnderscoreChain;

	/**
	* Wrapped type `number`.
	* @see _.after
	**/
	after(fn: Function): UnderscoreChain;

	/**
	* Wrapped type `Function`.
	* @see _.wrap
	**/
	wrap(wrapper: (fn: Function, ...args: any[]) => any): UnderscoreChain;

	/**
	* Wrapped type `Function[]`.
	* @see _.compose
	**/
	compose(...functions: Function[]): UnderscoreChain;

	/**********
	* Objects *
	***********/

	/**
	* Wrapped type `object`.
	* @see _.keys
	**/
	keys(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.values
	**/
	values(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.pairs
	**/
	pairs(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.invert
	**/
	invert(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.functions
	**/
	functions(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.extend
	**/
	extend(...sources: any[]): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.pick
	**/
	pick(...keys: string[]): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.omit
	**/
	omit(...keys: string[]): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.defaults
	**/
	defaults(...defaults: any[]): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.clone
	**/
	clone(object: any): UnderscoreChain;
	/**
	* Wrapped type `any[]`.
	* @see _.clone
	**/
	clone(list: any[]): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.tap
	**/
	tap(intercepter: Function): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.has
	**/
	has(key: string): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isEqual
	**/
	isEqual(other: any): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isEmpty
	**/
	isEmpty(object: any): UnderscoreChain;
	/**
	* Wrapped type `any[]`.
	* @see _.isEmpty
	**/
	isEmpty(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isElement
	**/
	isElement(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isArray
	**/
	isArray(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isObject
	**/
	isObject(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isArguments
	**/
	isArguments(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isFunction
	**/
	isFunction(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isString
	**/
	isString(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isNumber
	**/
	isNumber(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isFinite
	**/
	isFinite(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isBoolean
	**/
	isBoolean(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isDate
	**/
	isDate(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isRegExp
	**/
	isRegExp(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isNaN
	**/
	isNaN(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isNull
	**/
	isNull(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.isUndefined
	**/
	isUndefined(): UnderscoreChain;

	/**********
	* Utility *
	***********/

	/**
	* Wrapped type `any`.
	* @see _.identity
	**/
	identity(): UnderscoreChain;

	/**
	* Wrapped type `number`.
	* @see _.times
	**/
	times(iterator: (n: number) => any, context?: any): UnderscoreChain;

	/**
	* Wrapped type `number`.
	* @see _.random
	**/
	random(): UnderscoreChain;
	/**
	* Wrapped type `number`.
	* @see _.random
	**/
	random(max: number): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.mixin
	**/
	mixin(): UnderscoreChain;

	/**
	* Wrapped type `string`.
	* @see _.uniqueId
	**/
	uniqueId(): UnderscoreChain;

	/**
	* Wrapped type `string`.
	* @see _.escape
	**/
	escape(): UnderscoreChain;

	/**
	* Wrapped type `object`.
	* @see _.result
	**/
	result(property: string): UnderscoreChain;

	/**
	* Wrapped type `string`.
	* @see _.template
	**/
	template(data?: any, settings?: UnderscoreTemplateSettings): UnderscoreChain;

	/***********
	* Chaining *
	************/

	/**
	* Wrapped type `any`.
	* @see _.chain
	**/
	chain(): UnderscoreChain;

	/**
	* Wrapped type `any`.
	* @see _.value
	**/
	value(): any;
}

declare var _: Underscore;
