// Type definitions for TSTL v1.3.10
// Project: https://github.com/samchon/tstl
// Definitions by: Jeongho Nam <http://samchon.org>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "tstl"
{
	export = std;
}

/**
 * # <u>T</u>ypeScript-<u>STL</u>
 *
 * <a href="https://nodei.co/npm/tstl">
 *	<img src="https://nodei.co/npm/tstl.png?downloads=true&downloadRank=true&stars=true"> </a>
 *
 * STL (Standard Template Library) Containers and Algorithms for TypeScript.
 *
 * **T**ypeScript-**STL** is a TypeScript's <b>Standard Template Library</b> who is migrated from C++ STL. Most of classes
 * and functions of STL have implemented. Just enjoy it.
 *
 * @git https://github.com/samchon/tstl
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace std {
}
/**
 * Base classes composing STL in background.
 *
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace std.base {
}
declare namespace std {
    /**
     * Apply function to range.
     *
     * Applies function <i>fn</i> to each of the elements in the range [<i>first</i>, <i>last</i>).
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param fn Unary function that accepts an element in the range as argument. This can either be a function p
     *			 ointer or a move constructible function object. Its return value, if any, is ignored.
     */
    function for_each<T, InputIterator extends Iterator<T>, Func extends (val: T) => any>(first: InputIterator, last: InputIterator, fn: Func): Func;
    /**
     * Apply function to range.
     *
     * Applies function *fn* to each of the elements in the range [*first*, *first + n*).
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param n the number of elements to apply the function to
     * @param fn Unary function that accepts an element in the range as argument. This can either be a function p
     *			 ointer or a move constructible function object. Its return value, if any, is ignored.
     *
     * @return first + n
     */
    function for_each_n<T, InputIterator extends Iterator<T>>(first: InputIterator, n: number, fn: (val: T) => any): InputIterator;
    /**
     * Test condition on all elements in range.
     *
     * Returns <code>true</code> if <i>pred</i> returns <code>true</code> for all the elements in the range
     * [<i>first</i>, <i>last</i>) or if the range is {@link Container.empty empty}, and <code>false</code> otherwise.
     *
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument and returns a value convertible to
     *			   <code>boolean</code>. The value returned indicates whether the element fulfills the condition
     *			   checked by this function. The function shall not modify its argument.
     *
     * @return <code>true</code> if pred returns true for all the elements in the range or if the range is
     *		   {@link Container.empty empty}, and <code>false</code> otherwise.
     */
    function all_of<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean): boolean;
    /**
     * Test if any element in range fulfills condition.
     *
     * Returns <code>true</code> if <i>pred</i> returns true for any of the elements in the range
     * [<i>first</i>, <i>last</i>), and <code>false</code> otherwise.
     *
     * If [<i>first</i>, <i>last</i>) is an {@link Container.empty empty} range, the function returns
     * <code>false</code>.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument and returns a value convertible to
     *			   <code>boolean</code>. The value returned indicates whether the element fulfills the condition
     *			   checked by this function. The function shall not modify its argument.
     *
     * @return <code>true</code> if <i>pred</i> returns <code>true</code> for any of the elements in the range
     *		   [<i>first</i>, <i>last</i>), and <code>false</code> otherwise. If [<i>first</i>, <i>last</i>) is an
     *		   {@link Container.empty empty} range, the function returns <code>false</code>.
     */
    function any_of<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean): boolean;
    /**
     * Test if no elements fulfill condition.
     *
     * Returns <code>true</code> if <i>pred</i> returns false for all the elements in the range
     * [<i>first</i>, <i>last</i>) or if the range is {@link Container.empty empty}, and <code>false</code> otherwise.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument and returns a value convertible to
     *			   <code>boolean</code>. The value returned indicates whether the element fulfills the condition
     *			   checked by this function. The function shall not modify its argument.
     *
     * @return <code>true</code> if <i>pred</i> returns <code>false</code> for all the elements in the range
     *		   [<i>first</i>, <i>last</i>) or if the range is {@link Container.empty empty}, and <code>false</code>
     *		   otherwise.
     */
    function none_of<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean): boolean;
    /**
     * Test whether the elements in two ranges are equal.
     *
     * Compares the elements in the range [<i>first1</i>, <i>last1</i>) with those in the range beginning at
     * <i>first2</i>, and returns <code>true</code> if all of the elements in both ranges match.
     *
     * @param first1 An {@link Iterator} to the initial position of the first sequence.
     * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 An {@link Iterator} to the initial position of the second sequence. The comparison includes up to
     *				 as many elements of this sequence as those in the range [<i>first1</i>, <i>last1</i>).
     *
     * @return <code>true</code> if all the elements in the range [<i>first1</i>, <i>last1</i>) compare equal to those
     *		   of the range starting at <i>first2</i>, and <code>false</code> otherwise.
     */
    function equal<T, InputIterator extends Iterator<T>>(first1: InputIterator, last1: InputIterator, first2: Iterator<T>): boolean;
    /**
     * Test whether the elements in two ranges are equal.
     *
     * Compares the elements in the range [<i>first1</i>, <i>last1</i>) with those in the range beginning at
     * <i>first2</i>, and returns <code>true</code> if all of the elements in both ranges match.
     *
     * @param first1 An {@link Iterator} to the initial position of the first sequence.
     * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 An {@link Iterator} to the initial position of the second sequence. The comparison includes up to
     *				 as many elements of this sequence as those in the range [<i>first1</i>, <i>last1</i>).
     * @param pred Binary function that accepts two elements as argument (one of each of the two sequences, in the same
     *			   order), and returns a value convertible to <code>bool</code>. The value returned indicates whether
     *			   the elements are considered to match in the context of this function.
     *
     * @return <code>true</code> if all the elements in the range [<i>first1</i>, <i>last1</i>) compare equal to those
     *		   of the range starting at <i>first2</i>, and <code>false</code> otherwise.
     */
    function equal<T, InputIterator extends Iterator<T>>(first1: InputIterator, last1: InputIterator, first2: Iterator<T>, pred: (x: T, y: T) => boolean): boolean;
    /**
     * Lexicographical less-than comparison.
     *
     * Returns <code>true</code> if the range [<i>first1</i>, <i>last1</i>) compares <i>lexicographically less</i>
     * than the range [<i>first2</i>, <i>last2</i>).
     *
     * A <i>lexicographical comparison</i> is the kind of comparison generally used to sort words alphabetically in
     * dictionaries; It involves comparing sequentially the elements that have the same position in both ranges against
     * each other until one element is not equivalent to the other. The result of comparing these first non-matching
     * elements is the result of the lexicographical comparison.
     *
     * If both sequences compare equal until one of them ends, the shorter sequence is <i>lexicographically less</i>
     * than the longer one.
     *
     * @param first1 An {@link Iterator} to the initial position of the first sequence.
     * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 An {@link Iterator} to the initial position of the second sequence.
     * @param last2 An {@link Iterator} to the final position of the second sequence. The ranged used is
     *				[<i>first2</i>, <i>last2</i>).
     *
     * @return <code>true</code> if the first range compares <i>lexicographically less</i> than than the second.
     *		   <code>false</code> otherwise (including when all the elements of both ranges are equivalent).
     */
    function lexicographical_compare<T, T1 extends T, T2 extends T, Iterator1 extends Iterator<T1>, Iterator2 extends Iterator<T2>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2): boolean;
    /**
     * Lexicographical comparison.
     *
     * Returns <code>true</code> if the range [<i>first1</i>, <i>last1</i>) compares <i>lexicographically
     * relationship</i> than the range [<i>first2</i>, <i>last2</i>).
     *
     * A <i>lexicographical comparison</i> is the kind of comparison generally used to sort words alphabetically in
     * dictionaries; It involves comparing sequentially the elements that have the same position in both ranges against
     * each other until one element is not equivalent to the other. The result of comparing these first non-matching
     * elements is the result of the lexicographical comparison.
     *
     * If both sequences compare equal until one of them ends, the shorter sequence is <i>lexicographically
     * relationship</i> than the longer one.
     *
     * @param first1 An {@link Iterator} to the initial position of the first sequence.
     * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 An {@link Iterator} to the initial position of the second sequence.
     * @param last2 An {@link Iterator} to the final position of the second sequence. The ranged used is
     *				[<i>first2</i>, <i>last2</i>).
     * @param compare Binary function that accepts two arguments of the types pointed by the iterators, and returns a
     *		  value convertible to <code>bool</code>. The value returned indicates whether the first argument is
     *		  considered to go before the second in the specific <i>strict weak ordering</i> it defines.
     *
     * @return <code>true</code> if the first range compares <i>lexicographically relationship</i> than than the
     *		   second. <code>false</code> otherwise (including when all the elements of both ranges are equivalent).
     */
    function lexicographical_compare<T, T1 extends T, T2 extends T, Iterator1 extends Iterator<T1>, Iterator2 extends Iterator<T2>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2, compare: (x: T, y: T) => boolean): boolean;
    /**
     * Find value in range.
     *
     * Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) that compares equal to
     * <i>val</i>. If no such element is found, the function returns <i>last</i>.
     *
     * The function uses {@link equal_to equal_to} to compare the individual elements to <i>val</i>.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value to search for in the range.
     *
     * @return An {@link Iterator} to the first element in the range that compares equal to <i>val</i>. If no elements
     *		   match, the function returns <i>last</i>.
     */
    function find<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, val: T): InputIterator;
    /**
     * Find element in range.
     *
     * Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) for which pred returns
     * <code>true</code>. If no such element is found, the function returns <i>last</i>.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument and returns a value convertible
     *			   to <code>bool</code>. The value returned indicates whether the element is considered a match in
     *			   the context of this function. The function shall not modify its argument.
     *
     * @return An {@link Iterator} to the first element in the range for which <i>pred</i> does not return
     *		   <code>false</code>. If <i>pred</i> is <code>false</code> for all elements, the function returns
     *		   <i>last</i>.
     */
    function find_if<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean): InputIterator;
    /**
     * Find element in range.
     *
     * Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) for which pred returns
     * <code>true</code>. If no such element is found, the function returns <i>last</i>.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument and returns a value convertible
     *			   to <code>bool</code>. The value returned indicates whether the element is considered a match in
     *			   the context of this function. The function shall not modify its argument.
     *
     * @return An {@link Iterator} to the first element in the range for which <i>pred</i> returns <code>false</code>.
     *		   If <i>pred</i> is <code>true</code> for all elements, the function returns <i>last</i>.
     */
    function find_if_not<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean): InputIterator;
    /**
     * Find last subsequence in range.
     *
     * Searches the range [<i>first1</i>, <i>last1</i>) for the last occurrence of the sequence defined by
     * [<i>first2</i>, <i>last2</i>), and returns an {@link Iterator} to its first element, or <i>last1,/i> if no
     * occurrences are found.
     *
     * The elements in both ranges are compared sequentially using {@link equal_to}: A subsequence of
     * [<i>first1</i>, <i>last1</i>) is considered a match only when this is <code>true</code> for all the elements of
     * [<i>first2</i>, <i>last2</i>).
     *
     * This function returns the last of such occurrences. For an algorithm that returns the first instead, see
     * {@link search}.
     *
     * @param first1 An {@link Iterator} to the initial position of the first sequence.
     * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 An {@link Iterator} to the initial position of the element values to be searched for.
     * @param last2 An {@link Iterator} to the final position of the element values to be searched for. The range used
     *				is [<i>first2</i>, <i>last2</i>).
     * @param pred Binary function that accepts two elements as arguments (one of each of the two sequences, in the
     *			   same order), and returns a value convertible to <code>bool</code>. The value returned indicates
     *			   whether the elements are considered to match in the context of this function.
     *
     * @return An {@link Iterator} to the first element of the last occurrence of [<i>first2</i>, <i>last2</i>) in
     *		   [<i>first1</i>, <i>last1</i>). If the sequence is not found, the function returns ,i>last1</i>. Otherwise
     *		   [<i>first2</i>, <i>last2</i>) is an empty range, the function returns <i>last1</i>.
     */
    function find_end<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2): Iterator1;
    /**
     * Find last subsequence in range.
     *
     * Searches the range [<i>first1</i>, <i>last1</i>) for the last occurrence of the sequence defined by
     * [<i>first2</i>, <i>last2</i>), and returns an {@link Iterator} to its first element, or <i>last1,/i> if no
     * occurrences are found.
     *
     * The elements in both ranges are compared sequentially using <i>pred</i>: A subsequence of
     * [<i>first1</i>, <i>last1</i>) is considered a match only when this is <code>true</code> for all the elements of
     * [<i>first2</i>, <i>last2</i>).
     *
     * This function returns the last of such occurrences. For an algorithm that returns the first instead, see
     * {@link search}.
     *
     * @param first1 An {@link Iterator} to the initial position of the first sequence.
     * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 An {@link Iterator} to the initial position of the element values to be searched for.
     * @param last2 An {@link Iterator} to the final position of the element values to be searched for. The range used
     *				is [<i>first2</i>, <i>last2</i>).
     * @param pred Binary function that accepts two elements as arguments (one of each of the two sequences, in the
     *			   same order), and returns a value convertible to <code>bool</code>. The value returned indicates
     *			   whether the elements are considered to match in the context of this function.
     *
     * @return An {@link Iterator} to the first element of the last occurrence of [<i>first2</i>, <i>last2</i>) in
     *		   [<i>first1</i>, <i>last1</i>). If the sequence is not found, the function returns ,i>last1</i>. Otherwise
     *		   [<i>first2</i>, <i>last2</i>) is an empty range, the function returns <i>last1</i>.
     */
    function find_end<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2, pred: (x: T, y: T) => boolean): Iterator1;
    /**
     * Find element from set in range.
     *
     * Returns an iterator to the first element in the range [<i>first1</i>, <i>last1</i>) that matches any of the
     * elements in [<i>first2</i>, <i>last2</i>). If no such element is found, the function returns <i>last1</i>.
     *
     * The elements in [<i>first1</i>, <i>last1</i>) are sequentially compared to each of the values in
     * [<i>first2</i>, <i>last2</i>) using {@link equal_to}, until a pair matches.
     *
     * @param first1 An {@link Iterator} to the initial position of the first sequence.
     * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 An {@link Iterator} to the initial position of the element values to be searched for.
     * @param last2 An {@link Iterator} to the final position of the element values to be searched for. The range used
     *				is [<i>first2</i>, <i>last2</i>).
     *
     * @return An {@link Iterator} to the first element in [<i>first1</i>, <i>last1</i>) that is part of
     *		   [<i>first2</i>, <i>last2</i>). If no matches are found, the function returns <i>last1</i>.
     */
    function find_first_of<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2): Iterator1;
    /**
     * Find element from set in range.
     *
     * Returns an iterator to the first element in the range [<i>first1</i>, <i>last1</i>) that matches any of the
     * elements in [<i>first2</i>, <i>last2</i>). If no such element is found, the function returns <i>last1</i>.
     *
     * The elements in [<i>first1</i>, <i>last1</i>) are sequentially compared to each of the values in
     * [<i>first2</i>, <i>last2</i>) using <i>pred</i>, until a pair matches.
     *
     * @param first1 An {@link Iterator} to the initial position of the first sequence.
     * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 An {@link Iterator} to the initial position of the element values to be searched for.
     * @param last2 An {@link Iterator} to the final position of the element values to be searched for. The range used
     *				is [<i>first2</i>, <i>last2</i>).
     * @param pred Binary function that accepts two elements as arguments (one of each of the two sequences, in the
     *			   same order), and returns a value convertible to <code>bool</code>. The value returned indicates
     *			   whether the elements are considered to match in the context of this function.
     *
     * @return An {@link Iterator} to the first element in [<i>first1</i>, <i>last1</i>) that is part of
     *		   [<i>first2</i>, <i>last2</i>). If no matches are found, the function returns <i>last1</i>.
     */
    function find_first_of<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2, pred: (x: T, y: T) => boolean): Iterator1;
    /**
     * Find equal adjacent elements in range.
     *
     * Searches the range [<i>first</i>, <i>last</i>) for the first occurrence of two consecutive elements that match,
     * and returns an {@link Iterator} to the first of these two elements, or <i>last</i> if no such pair is found.
     *
     * Two elements match if they compare equal using {@link equal_to}.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     *
     * @return An {@link Iterator} to the first element of the first pair of matching consecutive elements in the range
     *		   [<i>first</i>, <i>last</i>). If no such pair is found, the function returns <i>last</i>.
     */
    function adjacent_find<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator): InputIterator;
    /**
     * Find equal adjacent elements in range.
     *
     * Searches the range [<i>first</i>, <i>last</i>) for the first occurrence of two consecutive elements that match,
     * and returns an {@link Iterator} to the first of these two elements, or <i>last</i> if no such pair is found.
     *
     * Two elements match if they compare equal using <i>pred</i>.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element is considered a match in the
     *			   context of this function. The function shall not modify its argument.
     *
     * @return An {@link Iterator} to the first element of the first pair of matching consecutive elements in the range
     *		   [<i>first</i>, <i>last</i>). If no such pair is found, the function returns <i>last</i>.
     */
    function adjacent_find<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (x: T, y: T) => boolean): InputIterator;
    /**
     * Search range for subsequence.
     *
     * Searches the range [<i>first1</i>, <i>last1</i>) for the first occurrence of the sequence defined by
     * [<i>first2</i>, <i>last2</i>), and returns an iterator to its first element, or <i>last1</i> if no occurrences are
     * found.
     *
     * The elements in both ranges are compared sequentially using {@link equal_to}: A subsequence of
     * [<i>first1</i>, <i>last1</i>) is considered a match only when this is true for <b>all</b> the elements of
     * [<i>first2</i>, <i>last2</i>).
     *
     * This function returns the first of such occurrences. For an algorithm that returns the last instead, see
     * {@link find_end}.
     *
     * @param first1 {@link Iterator Forward iterator} to the initial position of the searched sequence.
     * @param last1 {@link Iterator Forward iterator} to the final position of the searched sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
     *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Forward iterator} to the initial position of the sequence to be searched for.
     * @param last2 {@link Iterator Forward iterator} to the final position of the sequence to be searched for. The range
     *				used is [<i>first2</i>, <i>last2</i>).
     *
     * @return An iterator to the first element of the first occurrence of [<i>first2</i>, <i>last2</i>) in <i>first1</i>
     *		   and <i>last1</i>. If the sequence is not found, the function returns <i>last1</i>. Otherwise
     *		   [<i>first2</i>, <i>last2</i>) is an empty range, the function returns <i>first1</i>.
     */
    function search<T, ForwardIterator1 extends Iterator<T>, ForwardIterator2 extends Iterator<T>>(first1: ForwardIterator1, last1: ForwardIterator1, first2: ForwardIterator2, last2: ForwardIterator2): ForwardIterator1;
    /**
     * Search range for subsequence.
     *
     * Searches the range [<i>first1</i>, <i>last1</i>) for the first occurrence of the sequence defined by
     * [<i>first2</i>, <i>last2</i>), and returns an iterator to its first element, or <i>last1</i> if no occurrences are
     * found.
     *
     * The elements in both ranges are compared sequentially using <i>pred</i>: A subsequence of
     * [<i>first1</i>, <i>last1</i>) is considered a match only when this is true for <b>all</b> the elements of
     * [<i>first2</i>, <i>last2</i>).
     *
     * This function returns the first of such occurrences. For an algorithm that returns the last instead, see
     * {@link find_end}.
     *
     * @param first1 {@link Iterator Forward iterator} to the initial position of the searched sequence.
     * @param last1 {@link Iterator Forward iterator} to the final position of the searched sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
     *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Forward iterator} to the initial position of the sequence to be searched for.
     * @param last2 {@link Iterator Forward iterator} to the final position of the sequence to be searched for. The range
     *				used is [<i>first2</i>, <i>last2</i>).
     * @param pred Binary function that accepts two elements as arguments (one of each of the two sequences, in the same
     *			   order), and returns a value convertible to bool. The returned value indicates whether the elements are
     *			   considered to match in the context of this function. The function shall not modify any of its
     *			   arguments.
     *
     * @return An iterator to the first element of the first occurrence of [<i>first2</i>, <i>last2</i>) in
     *		   [<i>first1</i>, <i>last1</i>). If the sequence is not found, the function returns last1. Otherwise
     *		   [<i>first2</i>, <i>last2</i>) is an empty range, the function returns <i>first1</i>.
     */
    function search<T, ForwardIterator1 extends Iterator<T>, ForwardIterator2 extends Iterator<T>>(first1: ForwardIterator1, last1: ForwardIterator1, first2: ForwardIterator2, last2: ForwardIterator2, pred: (x: T, y: T) => boolean): ForwardIterator1;
    /**
     * Search range for elements.
     *
     * Searches the range [<i>first</i>, <i>last</i>) for a sequence of <i>count</i> elements, each comparing equal to
     * <i>val</i>.
     *
     * The function returns an iterator to the first of such elements, or <i>last</i> if no such sequence is found.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of the searched sequence.
     * @param last {@link Iterator Forward iterator} to the final position of the searched sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param count Minimum number of successive elements to match.
     * @param val Individual value to be compared, or to be used as argument for {@link equal_to}.
     *
     * @return An iterator to the first element of the sequence. If no such sequence is found, the function returns
     *		   <i>last</i>.
     */
    function search_n<T, ForwardIterator extends base.IArrayIterator<T>>(first: ForwardIterator, last: ForwardIterator, count: number, val: T): ForwardIterator;
    /**
     * Search range for elements.
     *
     * Searches the range [<i>first</i>, <i>last</i>) for a sequence of <i>count</i> elements, each comparing equal to
     * <i>val</i>.
     *
     * The function returns an iterator to the first of such elements, or <i>last</i> if no such sequence is found.
     *
     *
     * @param first {@link Iterator Forward iterator} to the initial position of the searched sequence.
     * @param last {@link Iterator Forward iterator} to the final position of the searched sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param count Minimum number of successive elements to match.
     * @param val Individual value to be compared, or to be used as argument for <i>pred</i>.
     * @param pred Binary function that accepts two arguments (one element from the sequence as first, and <i>val</i> as
     *			   second), and returns a value convertible to <code>bool</code>. The value returned indicates whether the
     *			   element is considered a match in the context of this function. The function shall not modify any of its
     *			   arguments.
     *
     * @return An {@link Iterator} to the first element of the sequence. If no such sequence is found, the function
     *		   returns <i>last</i>.
     */
    function search_n<T, ForwardIterator extends base.IArrayIterator<T>>(first: ForwardIterator, last: ForwardIterator, count: number, val: T, pred: (x: T, y: T) => boolean): ForwardIterator;
    /**
     * Return first position where two ranges differ.
     *
     * Compares the elements in the range [<i>first1</i>, <i>last1</i>) with those in the range beginning at
     * <i>first2</i>, and returns the first element of both sequences that does not match.
     *
     * The function returns a {@link Pair} of {@link iterators Iterator} to the first element in each range that
     * does not match.
     *
     * @param first1 An {@link Iterator} to the initial position of the first sequence.
     * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 An {@link Iterator} to the initial position of the second sequence. The comparison includes up to
     *				 as many elements of this sequence as those in the range [<i>first1</i>, <i>last1</i>).
     *
     * @return A {@link Pair}, where its members {@link Pair.first first} and {@link Pair.second second} point to the
     *		   first element in both sequences that did not compare equal to each other. If the elements compared in
     *		   both sequences have all matched, the function returns a {@link Pair} with {@link Pair.first first} set
     *		   to <i>last1</i> and {@link Pair.second second} set to the element in that same relative position in the
     *		   second sequence. If none matched, it returns {@link make_pair}(<i>first1</i>, <i>first2</i>).
     */
    function mismatch<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2): Pair<Iterator1, Iterator2>;
    /**
     * Return first position where two ranges differ.
     *
     * Compares the elements in the range [<i>first1</i>, <i>last1</i>) with those in the range beginning at
     * <i>first2</i>, and returns the first element of both sequences that does not match.
     *
     * The function returns a {@link Pair} of {@link iterators Iterator} to the first element in each range that
     * does not match.
     *
     * @param first1 An {@link Iterator} to the initial position of the first sequence.
     * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 An {@link Iterator} to the initial position of the second sequence. The comparison includes up to
     *				 as many elements of this sequence as those in the range [<i>first1</i>, <i>last1</i>).
     * @param pred Binary function that accepts two elements as argument (one of each of the two sequences, in the same
     *			   order), and returns a value convertible to <code>bool</code>. The value returned indicates whether
     *			   the elements are considered to match in the context of this function.
     *
     * @return A {@link Pair}, where its members {@link Pair.first first} and {@link Pair.second second} point to the
     *		   first element in both sequences that did not compare equal to each other. If the elements compared in
     *		   both sequences have all matched, the function returns a {@link Pair} with {@link Pair.first first} set
     *		   to <i>last1</i> and {@link Pair.second second} set to the element in that same relative position in the
     *		   second sequence. If none matched, it returns {@link make_pair}(<i>first1</i>, <i>first2</i>).
     */
    function mismatch<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, compare: (x: T, y: T) => boolean): Pair<Iterator1, Iterator2>;
    /**
     * Count appearances of value in range.
     *
     * Returns the number of elements in the range [<i>first</i>, <i>last</i>) that compare equal to <i>val</i>.
     *
     * The function uses {@link equal_to} to compare the individual elements to <i>val</i>.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value to match.
     *
     * @return The number of elements in the range [<i>first</i>, <i>last</i>) that compare equal to <i>val</i>.
     */
    function count<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, val: T): number;
    /**
     * Return number of elements in range satisfying condition.
     *
     * Returns the number of elements in the range [<i>first</i>, <i>last</i>) for which pred is <code>true</code>.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible
     *			   to <code>bool</code>. The value returned indicates whether the element is counted by this function.
     *			   The function shall not modify its argument. This can either be a function pointer or a function
     *			   object.
     */
    function count_if<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean): number;
}
declare namespace std {
    /**
     * Copy range of elements.
     *
     * Copies the elements in the range [<i>first</i>, <i>last</i>) into the range beginning at <i>result</i>.
     *
     * The function returns an iterator to the end of the destination range (which points to the element following the
     * last element copied).
     *
     * The ranges shall not overlap in such a way that result points to an element in the range
     * [<i>first</i>, <i>last</i>). For such cases, see {@link copy_backward}.
     *
     * @param first {@link Iterator Input iterator} to the initial position in a sequence to be copied.
     * @param last {@link Iterator Input iterator} to the initial position in a sequence to be copied. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position in the destination sequence. This shall not
     *				 point to any element in the range [<i>first</i>, <i>last</i>).
     *
     * @return An iterator to the end of the destination range where elements have been copied.
     */
    function copy<T, InputIterator extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator): OutputIterator;
    /**
     * Copy elements.
     *
     * Copies the first <i>n</i> elements from the range beginning at <i>first</i> into the range beginning at
     * <i>result</i>.
     *
     * The function returns an iterator to the end of the destination range (which points to one past the last element
     * copied).
     *
     * If <i>n</i> is negative, the function does nothing.
     *
     * If the ranges overlap, some of the elements in the range pointed by result may have undefined but valid values.
     *
     * @param first {@link Iterator Input iterator} to the initial position in a sequence of at least <i>n</i> elements to
     *				be copied. <i>InputIterator</i> shall point to a type assignable to the elements pointed by
     *				<i>OutputIterator</i>.
     * @param n Number of elements to copy. If this value is negative, the function does nothing.
     * @param result {@link Iterator Output iterator} to the initial position in the destination sequence of at least
     *				 <i>n</i> elements. This shall not point to any element in the range [<i>first</i>, last].
     *
     * @return An iterator to the end of the destination range where elements have been copied.
     */
    function copy_n<T, InputIterator extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first: InputIterator, n: number, result: OutputIterator): OutputIterator;
    /**
     * Copy certain elements of range.
     *
     * Copies the elements in the range [<i>first</i>, <i>last</i>) for which pred returns <code>true</code> to the
     * range beginning at <i>result</i>.
     *
     * @param first {@link Iterator Input iterator} to the initial position in a sequence to be copied.
     * @param last {@link Iterator Input iterator} to the initial position in a sequence to be copied. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position in the destination sequence. This shall not
     *				 point to any element in the range [<i>first</i>, <i>last</i>).
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element is to be copied (if
     *			   <code>true</code>, it is copied). The function shall not modify any of its arguments.
     *
     * @return An iterator to the end of the destination range where elements have been copied.
     */
    function copy_if<T, InputIterator extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, pred: (x: T) => boolean): OutputIterator;
    /**
     * Copy range of elements backward.
     *
     * Copies the elements in the range [<i>first</i>, <i>last</i>) starting from the end into the range terminating
     * at <i>result</i>.
     *
     * The function returns an iterator to the first element in the destination range.
     *
     * The resulting range has the elements in the exact same order as [<i>first</i>, <i>last</i>). To reverse their
     * order, see {@link reverse_copy}.
     *
     * The function begins by copying <code>*(last-1)</code> into <code>*(result-1)</code>, and then follows backward
     * by the elements preceding these, until <i>first</i> is reached (and including it).
     *
     * The ranges shall not overlap in such a way that <i>result</i> (which is the <i>past-the-end element</i> in the
     * destination range) points to an element in the range (first,last]. For such cases, see {@link copy}.
     *
     * @param first {@link Iterator Bidirectional iterator} to the initial position in a sequence to be copied.
     * @param last {@link Iterator Bidirectional iterator} to the initial position in a sequence to be copied. The range
     *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Bidirectional iterator} to the initial position in the destination sequence. This
     *				 shall not point to any element in the range [<i>first</i>, <i>last</i>).
     *
     * @return An iterator to the first element of the destination sequence where elements have been copied.
     */
    function copy_backward<T, BidirectionalIterator1 extends Iterator<T>, BidirectionalIterator2 extends base.ILinearIterator<T>>(first: BidirectionalIterator1, last: BidirectionalIterator1, result: BidirectionalIterator2): BidirectionalIterator2;
    /**
     * Fill range with value.
     *
     * Assigns val to all the elements in the range [<i>first</i>, <i>last</i>).
     *
     * @param first {@link Iterator Forward iterator} to the initial position in a sequence of elements that support being
     *				assigned a value of type <i>T</i>.
     * @param last {@link Iterator Forward iterator} to the final position in a sequence of elements that support being
     *				assigned a value of type <i>T</i>.. The range filled is [<i>first</i>, <i>last</i>), which contains
     *				all the elements between <i>first</i> and <i>last</i>, including the element pointed by <i>first</i>
     *				but not the element pointed by <i>last</i>.
     * @param val Value to assign to the elements in the filled range.
     */
    function fill<T, ForwardIterator extends base.ILinearIterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T): void;
    /**
     * Fill sequence with value.
     *
     * Assigns <i>val</i> to the first <i>n</i> elements of the sequence pointed by <i>first</i>.
     *
     * @param first {@link Iterator Output iterator} to the initial position in a sequence of elements that support being
     *				assigned a value of type <i>T</i>.
     * @param n Number of elements to fill. If negative, the function does nothing.
     * @param val Value to be used to fill the range.
     *
     * @return An iterator pointing to the element that follows the last element filled.
     */
    function fill_n<T, OutputIterator extends base.ILinearIterator<T>>(first: OutputIterator, n: number, val: T): OutputIterator;
    /**
     * Transform range.
     *
     * Applies <i>op</i> to each of the elements in the range [<i>first</i>, <i>last</i>) and stores the value returned
     * by each operation in the range that begins at <i>result</i>.
     *
     * @param first {@link Iterator Input iterator} to the initial position in a sequence to be transformed.
     * @param last {@link Iterator Input iterator} to the initial position in a sequence to be transformed. The range
     *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output} iterator to the initial position of the range where the operation results are
     *				 stored. The range includes as many elements as [<i>first</i>, <i>last</i>).
     * @param op Unary function that accepts one element of the type pointed to by <i>InputIterator</i> as argument, and
     *			 returns some result value convertible to the type pointed to by <i>OutputIterator</i>.
     *
     * @return An iterator pointing to the element that follows the last element written in the <i>result</i> sequence.
     */
    function transform<T, InputIterator extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, op: (val: T) => T): OutputIterator;
    /**
     * Transform range.
     *
     * Calls <i>binary_op</i> using each of the elements in the range [<i>first1</i>, <i>last1</i>) as first argument,
     * and the respective argument in the range that begins at <i>first2</i> as second argument. The value returned by
     * each call is stored in the range that begins at <i>result</i>.
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second range. The range includes as
     *				 many elements as [<i>first1</i>, <i>last1</i>).
     * @param result {@link Iterator Output} iterator to the initial position of the range where the operation results are
     *				 stored. The range includes as many elements as [<i>first1</i>, <i>last1</i>).
     * @param binary_op Binary function that accepts two elements as argument (one of each of the two sequences), and
     *					returns some result value convertible to the type pointed to by <i>OutputIterator</i>.
     *
     * @return An iterator pointing to the element that follows the last element written in the <i>result</i> sequence.
     */
    function transform<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, result: OutputIterator, binary_op: (x: T, y: T) => T): OutputIterator;
    /**
     * Generate values for range with function.
     *
     * Assigns the value returned by successive calls to gen to the elements in the range [<i>first</i>, <i>last</i>).
     *
     * @param first {@link Iterator Forward iterator} to the initial position in a sequence.
     * @param last {@link Iterator Forward iterator} to the final position in a sequence. The range affected is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param gen Generator function that is called with no arguments and returns some value of a type convertible to
     *			  those pointed by the iterators.
     */
    function generate<T, ForwardIterator extends base.ILinearIterator<T>>(first: ForwardIterator, last: ForwardIterator, gen: () => T): void;
    /**
     * Generate values for sequence with function.
     *
     * Assigns the value returned by successive calls to <i>gen</i> to the first <i>n</i> elements of the sequence
     * pointed by <i>first</i>.
     *
     * @param first {@link Iterator Output iterator} to the initial position in a sequence of at least <i>n</i> elements
     *				that support being assigned a value of the type returned by <i>gen</i>.
     * @param n Number of values to generate. If negative, the function does nothing.
     * @param gen Generator function that is called with no arguments and returns some value of a type convertible to
     *			  those pointed by the iterators.
     *
     * @return An iterator pointing to the element that follows the last element whose value has been generated.
     */
    function generate_n<T, ForwardIterator extends base.ILinearIterator<T>>(first: ForwardIterator, n: number, gen: () => T): ForwardIterator;
    /**
     * Remove consecutive duplicates in range.
     *
     * Removes all but the first element from every consecutive group of equivalent elements in the range
     * [<i>first</i>, <i>last</i>).
     *
     * The function cannot alter the properties of the object containing the range of elements (i.e., it cannot
     * alter the size of an array or a container): The removal is done by replacing the duplicate elements by the next
     * element that is not a duplicate, and signaling the new size of the shortened range by returning an iterator to
     * the element that should be considered its new past-the-last element.
     *
     * The relative order of the elements not removed is preserved, while the elements between the returned
     * iterator and last are left in a valid but unspecified state.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     *
     * @return An iterator to the element that follows the last element not removed. The range between <i>first</i> and
     *		   this iterator includes all the elements in the sequence that were not considered duplicates.
     */
    function unique<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator): InputIterator;
    /**
     * Remove consecutive duplicates in range.
     *
     * Removes all but the first element from every consecutive group of equivalent elements in the range
     * [<i>first</i>, <i>last</i>).
     *
     * The function cannot alter the properties of the object containing the range of elements (i.e., it cannot
     * alter the size of an array or a container): The removal is done by replacing the duplicate elements by the next
     * element that is not a duplicate, and signaling the new size of the shortened range by returning an iterator to
     * the element that should be considered its new past-the-last element.
     *
     * The relative order of the elements not removed is preserved, while the elements between the returned
     * iterator and last are left in a valid but unspecified state.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Binary function that accepts two elements in the range as argument, and returns a value convertible
     *			   to <code>bool</code>. The value returned indicates whether both arguments are considered equivalent
     *			  (if <code>true</code>, they are equivalent and one of them is removed). The function shall not modify
     *			  any of its arguments.
     *
     * @return An iterator to the element that follows the last element not removed. The range between <i>first</i> and
     *		   this iterator includes all the elements in the sequence that were not considered duplicates.
     */
    function unique<t, InputIterator extends Iterator<t>>(first: InputIterator, last: InputIterator, pred: (left: t, right: t) => boolean): InputIterator;
    /**
     * Copy range removing duplicates.
     *
     * Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, except
     * consecutive duplicates (elements that compare equal to the element preceding).
     *
     * Only the first element from every consecutive group of equivalent elements in the range
     * [<i>first</i>, <i>last</i>) is copied.
     *
     * The comparison between elements is performed by applying {@lnk equal_to}.
     *
     * @param first {@link Iterator Forward iterator} to the initial position in a sequence.
     * @param last {@link Iterator Forward iterator} to the final position in a sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result Output iterator to the initial position of the range where the resulting range of values is stored.
     *				 The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     *
     * @return An iterator pointing to the end of the copied range, which contains no consecutive duplicates.
     */
    function unique_copy<T, InputIterator extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator): OutputIterator;
    /**
     * Copy range removing duplicates.
     *
     * Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, except
     * consecutive duplicates (elements that compare equal to the element preceding).
     *
     * Only the first element from every consecutive group of equivalent elements in the range
     * [<i>first</i>, <i>last</i>) is copied.
     *
     * The comparison between elements is performed by applying <i>pred</i>.
     *
     * @param first {@link Iterator Forward iterator} to the initial position in a sequence.
     * @param last {@link Iterator Forward iterator} to the final position in a sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result Output iterator to the initial position of the range where the resulting range of values is stored.
     *				 The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     * @param pred Binary function that accepts two elements in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether both arguments are considered equivalent (if
     *			   <code>true</code>, they are equivalent and one of them is removed). The function shall not modify any
     *			   of its arguments.
     *
     * @return An iterator pointing to the end of the copied range, which contains no consecutive duplicates.
     */
    function unique_copy<T, InputIterator extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, pred: (x: T, y: T) => boolean): OutputIterator;
    /**
     * Remove value from range.
     *
     * Transforms the range [<i>first</i>, <i>last</i>) into a range with all the elements that compare equal to
     * <i>val</i> removed, and returns an iterator to the new last of that range.
     *
     * The function cannot alter the properties of the object containing the range of elements (i.e., it cannot alter
     * the size of an array or a container): The removal is done by replacing the elements that compare equal to
     * <i>val</i> by the next element that does not, and signaling the new size of the shortened range by returning an
     * iterator to the element that should be considered its new past-the-last element.
     *
     * The relative order of the elements not removed is preserved, while the elements between the returned iterator
     * and last are left in a valid but unspecified state.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value to be removed.
     */
    function remove<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, val: T): InputIterator;
    /**
     * Remove elements from range.
     *
     * Transforms the range [<i>first</i>, <i>last</i>) into a range with all the elements for which pred returns
     * <code>true</code> removed, and returns an iterator to the new last of that range.
     *
     * The function cannot alter the properties of the object containing the range of elements (i.e., it cannot
     * alter the size of an array or a container): The removal is done by replacing the elements for which pred returns
     * <code>true</code> by the next element for which it does not, and signaling the new size of the shortened range
     * by returning an iterator to the element that should be considered its new past-the-last element.
     *
     * The relative order of the elements not removed is preserved, while the elements between the returned
     * iterator and last are left in a valid but unspecified state.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element is to be removed (if
     *			   <code>true</code>, it is removed). The function shall not modify its argument.
     */
    function remove_if<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (left: T) => boolean): InputIterator;
    /**
     * Copy range removing value.
     *
     * Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, except
     * those elements that compare equal to <i>val</i>.
     *
     * The resulting range is shorter than [<i>first</i>, <i>last</i>) by as many elements as matches in the sequence,
     * which are "removed".
     *
     * The function uses {@link equal_to} to compare the individual elements to <i>val</i>.
     *
     * @param first {@link Iterator InputIterator} to the initial position in a sequence.
     * @param last {@link Iterator InputIterator} to the final position in a sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     * @param val Value to be removed.
     *
     * @return An iterator pointing to the end of the copied range, which includes all the elements in
     *		   [<i>first</i>, <i>last</i>) except those that compare equal to <i>val</i>.
     */
    function remove_copy<T, InputIterator extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, val: T): OutputIterator;
    /**
     * Copy range removing values.
     *
     * Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, except
     * those elements for which <i>pred</i> returns <code>true</code>.
     *
     * The resulting range is shorter than [<i>first</i>, <i>last</i>) by as many elements as matches, which are
     * "removed".
     *
     * @param first {@link Iterator InputIterator} to the initial position in a sequence.
     * @param last {@link Iterator InputIterator} to the final position in a sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element is to be removed from the copy (if
     *			   <code>true</code>, it is not copied). The function shall not modify its argument.
     *
     * @return An iterator pointing to the end of the copied range, which includes all the elements in
     *		   [<i>first</i>, <i>last</i>) except those for which <i>pred</i> returns <code>true</code>.
     */
    function remove_copy_if<T, InputIterator extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, pred: (val: T) => boolean): OutputIterator;
    /**
     * Replace value in range.
     *
     * Assigns <i>new_val</i> to all the elements in the range [<i>first</i>, <i>last</i>) that compare equal to
     * <i>old_val</i>.
     *
     * The function uses {@link equal_to} to compare the individual elements to old_val.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param old_val Value to be replaced.
     * @param new_val Replacement value.
     */
    function replace<T, InputIterator extends base.ILinearIterator<T>>(first: InputIterator, last: InputIterator, old_val: T, new_val: T): void;
    /**
     * Replace value in range.
     *
     * Assigns <i>new_val</i> to all the elements in the range [<i>first</i>, <i>last</i>) for which pred returns
     * <code>true</code>.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element is to be replaced (if
     *			   <code>true</code>, it is replaced). The function shall not modify its argument.
     * @param new_val Value to assign to replaced elements.
     */
    function replace_if<T, InputIterator extends base.ILinearIterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean, new_val: T): void;
    /**
     * Copy range replacing value.
     *
     * Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, replacing
     * the appearances of <i>old_value</i> by <i>new_value</i>.
     *
     * The function uses {@link equal_to} to compare the individual elements to <i>old_value</i>.
     *
     * The ranges shall not overlap in such a way that result points to an element in the range
     * [<i>first</i>, <i>last</i>).
     *
     * @param first {@link Iterator InputIterator} to the initial position in a sequence.
     * @param last {@link Iterator InputIterator} to the final position in a sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     * @param old_val Value to be replaced.
     * @param new_val Replacement value.
     *
     * @return An iterator pointing to the element that follows the last element written in the result sequence.
     */
    function replace_copy<T, InputIterator extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, old_val: T, new_val: T): OutputIterator;
    /**
     * Copy range replacing value.
     *
     * Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, replacing
     * those for which <i>pred</i> returns <code>true</code> by <i>new_value</i>.
     *
     * @param first {@link Iterator InputIterator} to the initial position in a sequence.
     * @param last {@link Iterator InputIterator} to the final position in a sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element is to be removed from the copy (if
     *			   <code>true</code>, it is not copied). The function shall not modify its argument.
     * @param new_val Value to assign to replaced values.
     *
     * @return An iterator pointing to the element that follows the last element written in the result sequence.
     */
    function replace_copy_if<T, InputIterator extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, pred: (val: T) => boolean, new_val: T): OutputIterator;
    /**
     * Exchange values of objects pointed to by two iterators.
     *
     * Swaps the elements pointed to by <i>x</i> and <i>y</i>.
     *
     * The function calls {@link Iterator.swap} to exchange the elements.
     *
     * @param x {@link Iterator Forward iterator} to the objects to swap.
     * @param y {@link Iterator Forward iterator} to the objects to swap.
     */
    function iter_swap<T>(x: Iterator<T>, y: Iterator<T>): void;
    /**
     * Exchange values of two ranges.
     *
     * Exchanges the values of each of the elements in the range [<i>first1</i>, <i>last1</i>) with those of their
     * respective elements in the range beginning at <i>first2</i>.
     *
     * The function calls {@link Iterator.swap} to exchange the elements.
     *
     * @param first1 {@link Iterator Forward iterator} to the initial position of the first sequence.
     * @param last1 {@link Iterator Forward iterator} to the final position of the first sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 {@link Iterator Forward iterator} to the initial position of the second range. The range includes as
     *				 many elements as [<i>first1</i>, <i>last1</i>). The two ranges shall not overlap.
     *
     * @return An iterator to the last element swapped in the second sequence.
     */
    function swap_ranges<T, ForwardIterator1 extends Iterator<T>, ForwardIterator2 extends Iterator<T>>(first1: ForwardIterator1, last1: ForwardIterator1, first2: ForwardIterator2): ForwardIterator2;
    /**
     * Reverse range.
     *
     * Reverses the order of the elements in the range [<i>first</i>, <i>last</i>).
     *
     * The function calls {@link iter_swap} to swap the elements to their new locations.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     */
    function reverse<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator): void;
    /**
     * Copy range reversed.
     *
     * Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, but in
     * reverse order.
     *
     * @param first {@link Iterator Bidirectional iterator} to the initial position in a sequence to be copied.
     * @param last {@link Iterator Bidirectional iterator} to the initial position in a sequence to be copied. The range
     *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position of the range where the reserved range is
     *				 stored. The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     *
     * @return An output iterator pointing to the end of the copied range, which contains the same elements in reverse
     *		   order.
     */
    function reverse_copy<T, BidirectionalIterator extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator, result: OutputIterator): OutputIterator;
    /**
     * Rotate left the elements in range.
     *
     * Rotates the order of the elements in the range [<i>first</i>, <i>last</i>), in such a way that the element
     * pointed by middle becomes the new first element.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param middle An {@link Iterator} pointing to the element within the range [<i>first</i>, <i>last</i>) that is
     *				 moved to the first position in the range.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     *
     * @return An iterator pointing to the element that now contains the value previously pointed by <i>first</i>.
     */
    function rotate<T, InputIterator extends Iterator<T>>(first: InputIterator, middle: InputIterator, last: InputIterator): InputIterator;
    /**
     * Copy range rotated left.
     *
     * Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, but
     * rotating the order of the elements in such a way that the element pointed by <i>middle</i> becomes the first
     * element in the resulting range.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of the range to be copy-rotated.
     * @param middle Forward iterator pointing to the element within the range [<i>first</i>, <i>last</i>) that is copied as the first element in the resulting range.
     * @param last {@link Iterator Forward iterator} to the final positions of the range to be copy-rotated. The range
     *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *			   Notice that in this function, these are not consecutive parameters, but the first and <b>third</b> ones.
     * @param result {@link Iterator Output iterator} to the initial position of the range where the reserved range is
     *				 stored. The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     *
     * @return An output iterator pointing to the end of the copied range.
     */
    function rotate_copy<T, ForwardIterator extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first: ForwardIterator, middle: ForwardIterator, last: ForwardIterator, result: OutputIterator): OutputIterator;
    /**
     * Randomly rearrange elements in range.
     *
     * Rearranges the elements in the range [<i>first</i>, <i>last</i>) randomly.
     *
     * The function swaps the value of each element with that of some other randomly picked element. When provided,
     * the function gen determines which element is picked in every case. Otherwise, the function uses some unspecified
     * source of randomness.
     *
     * To specify a uniform random generator, see {@link shuffle}.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     */
    function random_shuffle<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
    /**
     * Randomly rearrange elements in range using generator.
     *
     * Rearranges the elements in the range [<i>first</i>, <i>last</i>) randomly, using <i>g</i> as uniform random
     * number generator.
     *
     * The function swaps the value of each element with that of some other randomly picked element. The function
     * determines the element picked by calling <i>g()</i>.
     *
     * To shuffle the elements of the range without such a generator, see {@link random_shuffle} instead.
     *
     * <h5> Note </h5>
     * Using random generator engine is not implemented yet.
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     */
    function shuffle<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
}
declare namespace std {
    /**
     * Sort elements in range.
     *
     * Sorts the elements in the range [<i>first</i>, <i>last</i>) into ascending order. The elements are compared
     * using {@link less}.
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence to be sorted.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be sorted.
     *			  The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i>
     *			  and <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by
     *			  <i>last</i>. {@link IArrayIterator RandomAccessIterator} shall point to a type for which
     *			  {@link Iterator.swap swap} is properly defined.
     */
    function sort<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
    /**
     * Sort elements in range.
     *
     * Sorts the elements in the range [<i>first</i>, <i>last</i>) into specific order. The elements are compared
     * using <i>compare</i>.
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence to be sorted.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be sorted.
     *			  The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i>
     *			  and <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by
     *			  <i>last</i>. {@link IArrayIterator RandomAccessIterator} shall point to a type for which
     *			  {@link Iterator.swap swap} is properly defined.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
     *		  convertible to <code>boolean</code>. The value returned indicates whether the element passed as first
     *		  argument is considered to go before the second in the specific strict weak ordering it defines. The
     *		  function shall not modify any of its arguments. This can either be a function pointer or a function
     *		  object.
     */
    function sort<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (left: T, right: T) => boolean): void;
    /**
     * Partially sort elements in range.
     *
     * Rearranges the elements in the range [<i>first</i>, <i>last</i>), in such a way that the elements before
     * <i>middle</i> are the smallest elements in the entire range and are sorted in ascending order, while the remaining
     * elements are left without any specific order.
     *
     * The elements are compared using {@link less}.
     *
     * @param last {@link IArrayIterator Random-access iterator} to the first position of the sequence to be sorted.
     * @param middle {@link IArrayIterator Random-access iterator} pointing to the element within the range [<i>first</i>, <i>last</i>) that is used as the upper boundary of the elements that are fully sorted.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be sorted.
     *			  The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i>
     *			  and <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by
     *			  <i>last</i>.
     */
    function partial_sort<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, middle: RandomAccessIterator, last: RandomAccessIterator): void;
    /**
     * Partially sort elements in range.
     *
     * Rearranges the elements in the range [<i>first</i>, <i>last</i>), in such a way that the elements before
     * <i>middle</i> are the smallest elements in the entire range and are sorted in ascending order, while the remaining
     * elements are left without any specific order.
     *
     * The elements are compared using <i>comp</i>.
     *
     * @param last {@link IArrayIterator Random-access iterator} to the first position of the sequence to be sorted.
     * @param middle {@link IArrayIterator Random-access iterator} pointing to the element within the range [<i>first</i>, <i>last</i>) that is used as the upper boundary of the elements that are fully sorted.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be sorted.
     *			  The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i>
     *			  and <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by
     *			  <i>last</i>.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
     *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
     *				  first argument is considered to go before the second in the specific strict weak ordering it
     *				  defines. The function shall not modify any of its arguments.
     */
    function partial_sort<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, middle: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): void;
    /**
     * Copy and partially sort range.
     *
     * Copies the smallest  elements in the range [<i>first</i>, <i>last</i>) to
     * [<i>result_first</i>, <i>result_last</i>), sorting the elements copied. The number of elements copied is the same
     * as the {@link distance} between <i>result_first</i> and <i>result_last</i> (unless this is more than the amount of
     * elements in [<i>first</i>, <i>last</i>)).
     *
     * The range [<i>first</i>, <i>last</i>) is not modified.
     *
     * The elements are compared using {@link less}.
     *
     * @param first {@link Iterator Input iterator} to the initial position of the sequence to copy from.
     * @param last {@link Iterator Input iterator} to the final position of the sequence to copy from. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *			   <i>InputIterator</i> shall point to a type assignable to the elements pointed by
     *			   <i>RandomAccessIterator</i>.
     * @param result_first {@link Iterator Random-access iterator} to the initial position of the destination sequence.
     * @param result_last {@link Iterator Random-access iterator} to the final position of the destination sequence.
     *					  The range used is [<i>result_first</i>, <i>result_last</i>).
     * @param compare Binary function that accepts two elements in the result range as arguments, and returns a value
     *				  convertible to <code>bool</code>. The value returned indicates whether the element passed as first
     *				  argument is considered to go before the second in the specific <i>strict weak ordering</i> it
     *				  defines. The function shall not modify any of its arguments.
     *
     * @return An iterator pointing to the element that follows the last element written in the result sequence.
     */
    function partial_sort_copy<T, InputIterator extends Iterator<T>, RandomAccessIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, result_first: RandomAccessIterator, result_last: RandomAccessIterator): RandomAccessIterator;
    /**
     * Copy and partially sort range.
     *
     * Copies the smallest (or largest) elements in the range [<i>first</i>, <i>last</i>) to
     * [<i>result_first</i>, <i>result_last</i>), sorting the elements copied. The number of elements copied is the same
     * as the {@link distance} between <i>result_first</i> and <i>result_last</i> (unless this is more than the amount of
     * elements in [<i>first</i>, <i>last</i>)).
     *
     * The range [<i>first</i>, <i>last</i>) is not modified.
     *
     * The elements are compared using <i>compare</i>.
     *
     * @param first {@link Iterator Input iterator} to the initial position of the sequence to copy from.
     * @param last {@link Iterator Input iterator} to the final position of the sequence to copy from. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *			   <i>InputIterator</i> shall point to a type assignable to the elements pointed by
     *			   <i>RandomAccessIterator</i>.
     * @param result_first {@link Iterator Random-access iterator} to the initial position of the destination sequence.
     * @param result_last {@link Iterator Random-access iterator} to the final position of the destination sequence.
     *					  The range used is [<i>result_first</i>, <i>result_last</i>).
     * @param compare Binary function that accepts two elements in the result range as arguments, and returns a value
     *				  convertible to <code>bool</code>. The value returned indicates whether the element passed as first
     *				  argument is considered to go before the second in the specific <i>strict weak ordering</i> it
     *				  defines. The function shall not modify any of its arguments.
     *
     * @return An iterator pointing to the element that follows the last element written in the result sequence.
     */
    function partial_sort_copy<T, InputIterator extends Iterator<T>, RandomAccessIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, result_first: RandomAccessIterator, result_last: RandomAccessIterator, compare: (x: T, y: T) => boolean): RandomAccessIterator;
    /**
     * Check whether range is sorted.
     *
     * Returns <code>true</code> if the range [<i>first</i>, <i>last</i>) is sorted into ascending order.
     *
     * The elements are compared using {@link less}.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of the sequence.
     * @param last {@link Iterator Forward iterator} to the final position of the sequence. The range checked is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *
     * @return <code>true</code> if the range [<i>first</i>, <i>last</i>) is sorted into ascending order,
     *		   <code>false</code> otherwise. If the range [<i>first</i>, <i>last</i>) contains less than two elements,
     *		   the function always returns <code>true</code>.
     */
    function is_sorted<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator): boolean;
    /**
     * Check whether range is sorted.
     *
     * Returns <code>true</code> if the range [<i>first</i>, <i>last</i>) is sorted into ascending order.
     *
     * The elements are compared using <i>compare</i>.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of the sequence.
     * @param last {@link Iterator Forward iterator} to the final position of the sequence. The range checked is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
     *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
     *				  considered to go before the second in the specific strict weak ordering it defines. The function
     *				  shall not modify any of its arguments.
     *
     * @return <code>true</code> if the range [<i>first</i>, <i>last</i>) is sorted into ascending order,
     *		   <code>false</code> otherwise. If the range [<i>first</i>, <i>last</i>) contains less than two elements,
     *		   the function always returns <code>true</code>.
     */
    function is_sorted<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean): boolean;
    /**
     * Find first unsorted element in range.
     *
     * Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) which does not follow an
     * ascending order.
     *
     * The range between <i>first</i> and the iterator returned {@link is_sorted is sorted}.
     *
     * If the entire range is sorted, the function returns <i>last</i>.
     *
     * The elements are compared using {@link equal_to}.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of the sequence.
     * @param last {@link Iterator Forward iterator} to the final position of the sequence. The range checked is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
     *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
     *				  considered to go before the second in the specific strict weak ordering it defines. The function
     *				  shall not modify any of its arguments.
     *
     * @return An iterator to the first element in the range which does not follow an ascending order, or <i>last</i> if
     *		   all elements are sorted or if the range contains less than two elements.
     */
    function is_sorted_until<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator): ForwardIterator;
    /**
     * Find first unsorted element in range.
     *
     * Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) which does not follow an
     * ascending order.
     *
     * The range between <i>first</i> and the iterator returned {@link is_sorted is sorted}.
     *
     * If the entire range is sorted, the function returns <i>last</i>.
     *
     * The elements are compared using <i>compare</i>.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of the sequence.
     * @param last {@link Iterator Forward iterator} to the final position of the sequence. The range checked is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
     *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
     *				  considered to go before the second in the specific strict weak ordering it defines. The function
     *				  shall not modify any of its arguments.
     *
     * @return An iterator to the first element in the range which does not follow an ascending order, or <i>last</i> if
     *		   all elements are sorted or if the range contains less than two elements.
     */
    function is_sorted_until<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean): ForwardIterator;
}
declare namespace std {
    /**
     * Make heap from range.
     *
     * Rearranges the elements in the range [<i>first</i>, <i>last</i>) in such a way that they form a heap.
     *
     * A heap is a way to organize the elements of a range that allows for fast retrieval of the element with the
     * highest value at any moment (with {@link pop_heap}), even repeatedly, while allowing for fast insertion of new
     * elements (with {@link push_heap}).
     *
     * The element with the highest value is always pointed by first. The order of the other elements depends on the
     * particular implementation, but it is consistent throughout all heap-related functions of this header.
     *
     * The elements are compared using {@link less}: The element with the highest value is an element for which this
     * would return false when compared to every other element in the range.
     *
     * The standard container adaptor {@link PriorityQueue} calls {@link make_heap}, {@link push_heap} and
     * {@link pop_heap} automatically to maintain heap properties for a container.
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence to be
     *				transformed into a heap.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be transformed
     *			   into a heap. The range used is [<i>first</i>, <i>last</i>), which contains all the elements between
     *			   <i>first</i> and <i>last</i>, including the element pointed by <i>first</i> but not the element pointed
     *			   by <i>last</i>. {@link IArrayIterator RandomAccessIterator} shall point to a type for which
     *			   {@link Iterator.swap swap} is properly defined.
     */
    function make_heap<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
    /**
     * Make heap from range.
     *
     * Rearranges the elements in the range [<i>first</i>, <i>last</i>) in such a way that they form a heap.
     *
     * A heap is a way to organize the elements of a range that allows for fast retrieval of the element with the
     * highest value at any moment (with {@link pop_heap}), even repeatedly, while allowing for fast insertion of new
     * elements (with {@link push_heap}).
     *
     * The element with the highest value is always pointed by first. The order of the other elements depends on the
     * particular implementation, but it is consistent throughout all heap-related functions of this header.
     *
     * The elements are compared using <i>compare</i>: The element with the highest value is an element for which this
     * would return false when compared to every other element in the range.
     *
     * The standard container adaptor {@link PriorityQueue} calls {@link make_heap}, {@link push_heap} and
     * {@link pop_heap} automatically to maintain heap properties for a container.
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence to be
     *				transformed into a heap.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be transformed
     *			   into a heap. The range used is [<i>first</i>, <i>last</i>), which contains all the elements between
     *			   <i>first</i> and <i>last</i>, including the element pointed by <i>first</i> but not the element pointed
     *			   by <i>last</i>. {@link IArrayIterator RandomAccessIterator} shall point to a type for which
     *			   {@link Iterator.swap swap} is properly defined.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
     *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
     *				  first argument is considered to go before the second in the specific strict weak ordering it defines.
     *				  The function shall not modify any of its arguments. This can either be a function pointer or a
     *				  function object.
     */
    function make_heap<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): void;
    /**
     * Push element into heap range.
     *
     * Given a heap in the range [<i>first</i>, <i>last</i> - 1), this function extends the range considered a heap to
     * [<i>first</i>, <i>last</i>) by placing the value in (<i>last</i> - 1) into its corresponding location within it.
     *
     *
     * A range can be organized into a heap by calling {@link make_heap}. After that, its heap properties are
     * preserved if elements are added and removed from it using {@link push_heap} and {@link pop_heap}, respectively.
     *
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the new heap range, including
     *				the pushed element.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the new heap range, including
     *			   the pushed element.  The range used is [<i>first</i>, <i>last</i>), which contains all the elements
     *			   between <i>first</i> and <i>last</i>, including the element pointed by <i>first</i> but not the element
     *			   pointed by <i>last</i>. {@link IArrayIterator RandomAccessIterator} shall point to a type for which
     *			   {@link Iterator.swap swap} is properly defined.
     */
    function push_heap<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
    /**
     * Push element into heap range.
     *
     * Given a heap in the range [<i>first</i>, <i>last</i> - 1), this function extends the range considered a heap to
     * [<i>first</i>, <i>last</i>) by placing the value in (<i>last</i> - 1) into its corresponding location within it.
     *
     * A range can be organized into a heap by calling {@link make_heap}. After that, its heap properties are
     * preserved if elements are added and removed from it using {@link push_heap} and {@link pop_heap}, respectively.
     *
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the new heap range, including
     *				the pushed element.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the new heap range, including
     *			   the pushed element.  The range used is [<i>first</i>, <i>last</i>), which contains all the elements
     *			   between <i>first</i> and <i>last</i>, including the element pointed by <i>first</i> but not the element
     *			   pointed by <i>last</i>. {@link IArrayIterator RandomAccessIterator} shall point to a type for which
     *			   {@link Iterator.swap swap} is properly defined.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
     *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
     *				  first argument is considered to go before the second in the specific strict weak ordering it defines.
     *				  The function shall not modify any of its arguments. This can either be a function pointer or a
     *				  function object.
     */
    function push_heap<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): void;
    /**
     * Pop element from heap range.
     *
     * Rearranges the elements in the heap range [<i>first</i>, <i>last</i>) in such a way that the part considered a
     * heap is shortened by one: The element with the highest value is moved to (<i>last</i> - 1).
     *
     * While the element with the highest value is moved from first to (<i>last</i> - 1) (which now is out of the
     * heap), the other elements are reorganized in such a way that the range [<i>first</i>, <i>last</i> - 1) preserves
     * the properties of a heap.
     *
     * A range can be organized into a heap by calling {@link make_heap}. After that, its heap properties are
     * preserved if elements are added and removed from it using {@link push_heap} and {@link pop_heap}, respectively.
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the heap to be shrank by one.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the heap to be shrank by one.
     *			   The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
     *			   is properly defined.
     */
    function pop_heap<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
    /**
     * Pop element from heap range.
     *
     * Rearranges the elements in the heap range [<i>first</i>, <i>last</i>) in such a way that the part considered a
     * heap is shortened by one: The element with the highest value is moved to (<i>last</i> - 1).
     *
     * While the element with the highest value is moved from first to (<i>last</i> - 1) (which now is out of the
     * heap), the other elements are reorganized in such a way that the range [<i>first</i>, <i>last</i> - 1) preserves
     * the properties of a heap.
     *
     * A range can be organized into a heap by calling {@link make_heap}. After that, its heap properties are
     * preserved if elements are added and removed from it using {@link push_heap} and {@link pop_heap}, respectively.
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the heap to be shrank by one.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the heap to be shrank by one.
     *			   The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
     *			   is properly defined.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
     *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
     *				  first argument is considered to go before the second in the specific strict weak ordering it defines.
     *				  The function shall not modify any of its arguments. This can either be a function pointer or a
     *				  function object.
     */
    function pop_heap<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): void;
    /**
     * Test if range is heap.
     *
     * Returns true if the range [<i>first</i>, <i>last</i>) forms a heap, as if constructed with {@link make_heap}.
     *
     * The elements are compared using {@link less}.
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
     *			   is properly defined.
     *
     * @return <code>true</code> if the range [<i>first</i>, <i>last</i>) is a heap (as if constructed with
     *		   {@link make_heap}), <code>false</code> otherwise. If the range [<i>first</i>, <i>last</i>) contains less
     *		   than two elements, the function always returns <code>true</code>.
     */
    function is_heap<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): boolean;
    /**
     * Test if range is heap.
     *
     * Returns true if the range [<i>first</i>, <i>last</i>) forms a heap, as if constructed with {@link make_heap}.
     *
     * The elements are compared using <i>compare</i>.
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
     *			   is properly defined.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
     *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
     *				  first argument is considered to go before the second in the specific strict weak ordering it defines.
     *				  The function shall not modify any of its arguments. This can either be a function pointer or a
     *				  function object.
     *
     * @return <code>true</code> if the range [<i>first</i>, <i>last</i>) is a heap (as if constructed with
     *		   {@link make_heap}), <code>false</code> otherwise. If the range [<i>first</i>, <i>last</i>) contains less
     *		   than two elements, the function always returns <code>true</code>.
     */
    function is_heap<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): boolean;
    /**
     * Find first element not in heap order.
     *
     * Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) which is not in a valid
     * position if the range is considered a heap (as if constructed with {@link make_heap}).
     *
     * The range between first and the iterator returned is a heap.
     *
     * If the entire range is a valid heap, the function returns <i>last</i>.
     *
     * The elements are compared using {@link less}.
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
     *			   is properly defined.
     */
    function is_heap_until<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): RandomAccessIterator;
    /**
     * Find first element not in heap order.
     *
     * Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) which is not in a valid
     * position if the range is considered a heap (as if constructed with {@link make_heap}).
     *
     * The range between first and the iterator returned is a heap.
     *
     * If the entire range is a valid heap, the function returns <i>last</i>.
     *
     * The elements are compared using {@link less}.
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
     *			   is properly defined.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
     *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
     *				  first argument is considered to go before the second in the specific strict weak ordering it defines.
     *				  The function shall not modify any of its arguments. This can either be a function pointer or a
     *				  function object.
     */
    function is_heap_until<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): RandomAccessIterator;
    /**
     * Sort elements of heap.
     *
     * Sorts the elements in the heap range [<i>first</i>, <i>last</i>) into ascending order.
     *
     * The elements are compared using {@link less}, which shall be the same as used to construct the heap.
     *
     * The range loses its properties as a heap.
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence to be sorted.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be sorted.
     *			   The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
     *			   is properly defined.
     */
    function sort_heap<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
    /**
     * Sort elements of heap.
     *
     * Sorts the elements in the heap range [<i>first</i>, <i>last</i>) into ascending order.
     *
     * The elements are compared using <i>compare</i>, which shall be the same as used to construct the heap.
     *
     * The range loses its properties as a heap.
     *
     * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence to be sorted.
     * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be sorted.
     *			   The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
     *			   is properly defined.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
     *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
     *				  first argument is considered to go before the second in the specific strict weak ordering it defines.
     *				  The function shall not modify any of its arguments. This can either be a function pointer or a
     *				  function object.
     */
    function sort_heap<T, RandomAccessIterator extends base.IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): void;
}
declare namespace std {
    /**
     * Return iterator to lower bound.
     *
     * Returns an iterator pointing to the first element in the range [<i>first</i>, <i>last</i>) which does not
     * compare less than <i>val</i>.
     *
     * The elements are compared using {@link less}. The elements in the range shall already be {@link is_sorted sorted}
     * according to this same criterion ({@link less}), or at least {@link is_partitioned partitioned} with respect to
     * <i>val</i>.
     *
     * The function optimizes the number of comparisons performed by comparing non-consecutive elements of the sorted
     * range, which is specially efficient for {@link IArrayIterator random-access iterators}.
     *
     * Unlike {@link upper_bound}, the value pointed by the iterator returned by this function may also be equivalent
     * to <i>val</i>, and not only greater.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
     *				{@link is_partitioned partitioned}) sequence.
     * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
     *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
     *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			   <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value of the lower bound to search for in the range. <i>T</i> shall be a type supporting being compared
     *			  with elements of the range [<i>first</i>, <i>last</i>) as the left-hand side operand of {@link less}.
     *
     * @return An iterator to the lower bound of <i>val</i> in the range. If all the element in the range compare less than
     *		   <i>val</i>, the function returns <i>last</i>.
     */
    function lower_bound<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T): ForwardIterator;
    /**
     * Return iterator to lower bound.
     *
     * Returns an iterator pointing to the first element in the range [<i>first</i>, <i>last</i>) which does not
     * compare less than <i>val</i>.
     *
     * The elements are compared using <i>compare</i>. The elements in the range shall already be
     * {@link is_sorted sorted} according to this same criterion (<i>compare</i>), or at least
     * {@link is_partitioned partitioned} with respect to <i>val</i>.
     *
     * The function optimizes the number of comparisons performed by comparing non-consecutive elements of the sorted
     * range, which is specially efficient for {@link IArrayIterator random-access iterators}.
     *
     * Unlike {@link upper_bound}, the value pointed by the iterator returned by this function may also be equivalent
     * to <i>val</i>, and not only greater.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
     *				{@link is_partitioned partitioned}) sequence.
     * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
     *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
     *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			   <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value of the lower bound to search for in the range.
     * @param compare Binary function that accepts two arguments (the first of the type pointed by <i>ForwardIterator</i>,
     *				  and the second, always <i>val</i>), and returns a value convertible to <code>bool</code>. The value
     *				  returned indicates whether the first argument is considered to go before the second. The function
     *				  shall not modify any of its arguments.
     *
     * @return An iterator to the lower bound of <i>val</i> in the range. If all the element in the range compare less than
     *		   <i>val</i>, the function returns <i>last</i>.
     */
    function lower_bound<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T, compare: (x: T, y: T) => boolean): ForwardIterator;
    /**
     * Return iterator to upper bound.
     *
     * Returns an iterator pointing to the first element in the range [<i>first</i>, <i>last</i>) which compares
     * greater than <i>val</i>.
     *
     * The elements are compared using {@link less}. The elements in the range shall already be {@link is_sorted sorted}
     * according to this same criterion ({@link less}), or at least {@link is_partitioned partitioned} with respect to
     * <i>val</i>.
     *
     * The function optimizes the number of comparisons performed by comparing non-consecutive elements of the sorted
     * range, which is specially efficient for {@link IArrayIterator random-access iterators}.
     *
     * Unlike {@link lower_bound}, the value pointed by the iterator returned by this function cannot be equivalent to
     * <i>val</i>, only greater.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
     *				{@link is_partitioned partitioned}) sequence.
     * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
     *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
     *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			   <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value of the lower bound to search for in the range. <i>T</i> shall be a type supporting being compared
     *			  with elements of the range [<i>first</i>, <i>last</i>) as the left-hand side operand of {@link less}.
     *
     * @return An iterator to the upper bound of <i>val</i> in the range. If no element in the range comparse greater than
     *		   <i>val</i>, the function returns <i>last</i>.
     */
    function upper_bound<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T): ForwardIterator;
    /**
     * Return iterator to upper bound.
     *
     * Returns an iterator pointing to the first element in the range [<i>first</i>, <i>last</i>) which compares
     * greater than <i>val</i>.
     *
     * The elements are compared using <i>compare</i>. The elements in the range shall already be
     * {@link is_sorted sorted} according to this same criterion (<i>compare</i>), or at least
     * {@link is_partitioned partitioned} with respect to <i>val</i>.
     *
     * The function optimizes the number of comparisons performed by comparing non-consecutive elements of the sorted
     * range, which is specially efficient for {@link IArrayIterator random-access iterators}.
     *
     * Unlike {@link lower_bound}, the value pointed by the iterator returned by this function cannot be equivalent to
     * <i>val</i>, only greater.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
     *				{@link is_partitioned partitioned}) sequence.
     * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
     *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
     *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			   <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value of the lower bound to search for in the range.
     * @param compare Binary function that accepts two arguments (the first of the type pointed by <i>ForwardIterator</i>,
     *				  and the second, always <i>val</i>), and returns a value convertible to <code>bool</code>. The value
     *				  returned indicates whether the first argument is considered to go before the second. The function
     *				  shall not modify any of its arguments.
     *
     * @return An iterator to the upper bound of <i>val</i> in the range. If no element in the range comparse greater than
     *		   <i>val</i>, the function returns <i>last</i>.
     */
    function upper_bound<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T, compare: (x: T, y: T) => boolean): ForwardIterator;
    /**
     * Get subrange of equal elements.
     *
     * Returns the bounds of the subrange that includes all the elements of the range [<i>first</i>, <i>last</i>) with
     * values equivalent to <i>val</i>.
     *
     * The elements are compared using {@link less}. Two elements, <i>ax/i> and <i>y</i> are considered equivalent
     * <code>if (!less(x, y) && !less(y, x))</code>.
     *
     * The elements in the range shall already be {@link is_sorted sorted} according to this same criterion
     * ({@link less}), or at least {@link is_partitioned partitioned} with respect to <i>val</i>.
     *
     * If <i>val</i> is not equivalent to any value in the range, the subrange returned has a length of zero, with both
     * iterators pointing to the nearest value greater than <i>val</i>, if any, or to <i>last</i>, if <i>val</i> compares
     * greater than all the elements in the range.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
     *				{@link is_partitioned partitioned}) sequence.
     * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
     *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
     *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			   <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value of the lower bound to search for in the range. <i>T</i> shall be a type supporting being compared
     *			  with elements of the range [<i>first</i>, <i>last</i>) as the left-hand side operand of {@link less}.
     *
     * @return A {@link Pair} object, whose member {@link Pair.first} is an iterator to the lower bound of the subrange of
     *		   equivalent values, and {@link Pair.second} its upper bound. The values are the same as those that would be
     *		   returned by functions {@link lower_bound} and {@link upper_bound} respectively.
     */
    function equal_range<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T): Pair<ForwardIterator, ForwardIterator>;
    /**
     * Get subrange of equal elements.
     *
     * Returns the bounds of the subrange that includes all the elements of the range [<i>first</i>, <i>last</i>) with
     * values equivalent to <i>val</i>.
     *
     * The elements are compared using <i>compare</i>. Two elements, <i>ax/i> and <i>y</i> are considered equivalent
     * <code>if (!compare(x, y) && !compare(y, x))</code>.
     *
     * The elements in the range shall already be {@link is_sorted sorted} according to this same criterion
     * (<i>compare</i>), or at least {@link is_partitioned partitioned} with respect to <i>val</i>.
     *
     * If <i>val</i> is not equivalent to any value in the range, the subrange returned has a length of zero, with both
     * iterators pointing to the nearest value greater than <i>val</i>, if any, or to <i>last</i>, if <i>val</i> compares
     * greater than all the elements in the range.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
     *				{@link is_partitioned partitioned}) sequence.
     * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
     *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
     *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			   <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value of the lower bound to search for in the range.
     * @param compare Binary function that accepts two arguments of the type pointed by <i>ForwardIterator</i> (and of type
     *				  <i>T</i>), and returns a value convertible to <code>bool</code>. The value returned indicates whether
     *				  the first argument is considered to go before the second. The function shall not modify any of its
     *				  arguments.
     *
     * @return A {@link Pair} object, whose member {@link Pair.first} is an iterator to the lower bound of the subrange of
     *		   equivalent values, and {@link Pair.second} its upper bound. The values are the same as those that would be
     *		   returned by functions {@link lower_bound} and {@link upper_bound} respectively.
     */
    function equal_range<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T, compare: (x: T, y: T) => boolean): Pair<ForwardIterator, ForwardIterator>;
    /**
     * Get subrange of equal elements.
     *
     * Returns the bounds of the subrange that includes all the elements of the range [<i>first</i>, <i>last</i>) with
     * values equivalent to <i>val</i>.
     *
     * The elements are compared using {@link less}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
     * <code>if (!less(x, y) && !less(y, x))</code>.
     *
     * The elements in the range shall already be {@link is_sorted sorted} according to this same criterion
     * ({@link less}), or at least {@link is_partitioned partitioned} with respect to <i>val</i>.
     *
     * If <i>val</i> is not equivalent to any value in the range, the subrange returned has a length of zero, with both
     * iterators pointing to the nearest value greater than <i>val</i>, if any, or to <i>last</i>, if <i>val</i> compares
     * greater than all the elements in the range.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
     *				{@link is_partitioned partitioned}) sequence.
     * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
     *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
     *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			   <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value of the lower bound to search for in the range. <i>T</i> shall be a type supporting being compared
     *			  with elements of the range [<i>first</i>, <i>last</i>) as the left-hand side operand of {@link less}.
     *
     * @return <code>true</code> if an element equivalent to <i>val</i> is found, and <code>false</code> otherwise.
     */
    function binary_search<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T): boolean;
    /**
     * Get subrange of equal elements.
     *
     * Returns the bounds of the subrange that includes all the elements of the range [<i>first</i>, <i>last</i>) with
     * values equivalent to <i>val</i>.
     *
     * The elements are compared using {<i>compare</i>}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
     * <code>if (!compare(x, y) && !compare(y, x))</code>.
     *
     * The elements in the range shall already be {@link is_sorted sorted} according to this same criterion
     * (<i>compare</i>), or at least {@link is_partitioned partitioned} with respect to <i>val</i>.
     *
     * If <i>val</i> is not equivalent to any value in the range, the subrange returned has a length of zero, with both
     * iterators pointing to the nearest value greater than <i>val</i>, if any, or to <i>last</i>, if <i>val</i> compares
     * greater than all the elements in the range.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
     *				{@link is_partitioned partitioned}) sequence.
     * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
     *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
     *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			   <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value of the lower bound to search for in the range.
     * @param compare Binary function that accepts two arguments of the type pointed by <i>ForwardIterator</i> (and of type
     *				  <i>T</i>), and returns a value convertible to <code>bool</code>. The value returned indicates whether
     *				  the first argument is considered to go before the second. The function shall not modify any of its
     *				  arguments.
     *
     * @return <code>true</code> if an element equivalent to <i>val</i> is found, and <code>false</code> otherwise.
     */
    function binary_search<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T, compare: (x: T, y: T) => boolean): boolean;
}
declare namespace std {
    /**
     * Test whether range is partitioned.
     *
     * Returns <code>true</code> if all the elements in the range [<i>first</i>, <i>last</i>) for which <i>pred</i>
     * returns <code>true</code> precede those for which it returns <code>false</code>.
     *
     * If the range is {@link Container.empty empty}, the function returns <code>true</code>.
     *
     * @param first {@link Iterator Input iterator} to the initial position of the sequence.
     * @param last {@link Iterator Input iterator} to the final position of the sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element belongs to the first group (if
     *			   <code>true</code>, the element is expected before all the elements for which it returns
     *			   <code>false</code>). The function shall not modify its argument.
     *
     * @return <code>true</code> if all the elements in the range [<i>first</i>, <i>last</i>) for which <i>pred</i> returns
     *		   <code>true</code> precede those for which it returns <code>false</code>. Otherwise it returns
     *		   <code>false</code>. If the range is {@link Container.empty empty}, the function returns <code>true</code>.
     */
    function is_partitioned<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (x: T) => boolean): boolean;
    /**
     * Partition range in two.
     *
     * Rearranges the elements from the range [<i>first</i>, <i>last</i>), in such a way that all the elements for
     * which <i>pred</i> returns <code>true</code> precede all those for which it returns <code>false</code>. The iterator
     * returned points to the first element of the second group.
     *
     * The relative ordering within each group is not necessarily the same as before the call. See
     * {@link stable_partition} for a function with a similar behavior but with stable ordering within each group.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of the sequence to partition.
     * @param last {@link Iterator Forward iterator} to the final position of the sequence to partition. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element belongs to the first group (if
     *			   <code>true</code>, the element is expected before all the elements for which it returns
     *			   <code>false</code>). The function shall not modify its argument.
     *
     * @return An iterator that points to the first element of the second group of elements (those for which <i>pred</i>
     *		   returns <code>false</code>), or <i>last</i> if this group is {@link Container.empty empty}.
     */
    function partition<T, BidirectionalIterator extends Iterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator, pred: (x: T) => boolean): BidirectionalIterator;
    /**
     * Partition range in two - stable ordering.
     *
     * Rearranges the elements in the range [<i>first</i>, <i>last</i>), in such a way that all the elements for which
     * <i>pred</i> returns <code>true</code> precede all those for which it returns <code>false</code>, and, unlike
     * function {@link partition}, the relative order of elements within each group is preserved.
     *
     * This is generally implemented using an internal temporary buffer.
     *
     * @param first {@link Iterator Bidirectional iterator} to the initial position of the sequence to partition.
     * @param last {@link Iterator Bidirectional iterator} to the final position of the sequence to partition. The range
     *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element belongs to the first group (if
     *			   <code>true</code>, the element is expected before all the elements for which it returns
     *			   <code>false</code>). The function shall not modify its argument.
     *
     * @return An iterator that points to the first element of the second group of elements (those for which <i>pred</i>
     *		   returns <code>false</code>), or <i>last</i> if this group is {@link Container.empty empty}.
     */
    function stable_partition<T, BidirectionalIterator extends Iterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator, pred: (x: T) => boolean): BidirectionalIterator;
    /**
     * Partition range into two.
     *
     * Copies the elements in the range [<i>first</i>, <i>last</i>) for which <i>pred</i> returns <code>true</code>
     * into the range pointed by <i>result_true</i>, and those for which it does not into the range pointed by
     * <i>result_false</i>.
     *
     * @param first {@link Iterator Input iterator} to the initial position of the range to be copy-partitioned.
     * @param last {@link Iterator Input iterator} to the final position of the range to be copy-partitioned. The range
     *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result_true {@link Iterator Output iterator} to the initial position of the range where the elements for
     *					  which <i>pred</i> returns <code>true</code> are stored.
     * @param result_false {@link Iterator Output iterator} to the initial position of the range where the elements for
     *					   which <i>pred</i> returns <code>false</code> are stored.
     * @param pred Unary function that accepts an element pointed by <i>InputIterator</i> as argument, and returns a value
     *			   convertible to <code>bool</code>. The value returned indicates on which result range the element is
     *			   copied. The function shall not modify its argument.
     *
     * @return A {@link Pair} of iterators with the end of the generated sequences pointed by <i>result_true</i> and
     *		   <i>result_false</i>, respectivelly. Its member {@link Pair.first first} points to the element that follows
     *		   the last element copied to the sequence of elements for which <i>pred</i> returned <code>true</code>. Its
     *		   member {@link Pair.second second} points to the element that follows the last element copied to the sequence
     *		   of elements for which <i>pred</i> returned <code>false</code>.
     */
    function partition_copy<T, InputIterator extends Iterator<T>, OutputIterator1 extends base.ILinearIterator<T>, OutputIterator2 extends base.ILinearIterator<T>>(first: InputIterator, last: InputIterator, result_true: OutputIterator1, result_false: OutputIterator2, pred: (val: T) => T): Pair<OutputIterator1, OutputIterator2>;
    /**
     * Get partition point.
     *
     * Returns an iterator to the first element in the partitioned range [<i>first</i>, <i>last</i>) for which
     * <i>pred</i> is not <code>true</code>, indicating its partition point.
     *
     * The elements in the range shall already {@link is_partitioned be partitioned}, as if {@link partition} had been
     * called with the same arguments.
     *
     * The function optimizes the number of comparisons performed by comparing non-consecutive elements of the sorted
     * range, which is specially efficient for {@link Iteartor random-access iterators}.
     *
     * @param first {@link Iterator Forward iterator} to the initial position of the partitioned sequence.
     * @param last {@link Iterator Forward iterator} to the final position of the partitioned sequence. The range checked
     *		  is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> an <i>last</i>,
     *		  including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element goes before the partition point (if
     *			   <code>true</code>, it goes before; if <code>false</code> goes at or after it). The function shall not
     *			   modify its argument.
     *
     * @return An iterator to the first element in the partitioned range [<i>first</i>, <i>last</i>) for which <i>pred</i>
     *		   is not <code>true</code>, or <i>last</i> if it is not <code>true</code> for any element.
     */
    function partition_point<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, pred: (x: T) => boolean): ForwardIterator;
}
declare namespace std {
    /**
     * Merge sorted ranges.
     *
     * Combines the elements in the sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>), into
     * a new range beginning at <i>result</i> with all its elements sorted.
     *
     * The elements are compared using {@link less}. The elements in both ranges shall already be ordered according to
     * this same criterion ({@link less}). The resulting range is also sorted according to this.
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
     *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
     * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
     *				[<i>first2</i>, <i>last2</i>).
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting combined
     *				 range is stored. Its size is equal to the sum of both ranges above.
     *
     * @return An iterator pointing to the past-the-end element in the resulting sequence.
     */
    function merge<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator): OutputIterator;
    /**
     * Merge sorted ranges.
     *
     * Combines the elements in the sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>), into
     * a new range beginning at <i>result</i> with all its elements sorted.
     *
     * The elements are compared using {@link less}. The elements in both ranges shall already be ordered according to
     * this same criterion (<i>compare</i>). The resulting range is also sorted according to this.
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
     *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
     * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
     *				[<i>first2</i>, <i>last2</i>).
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting combined
     *				 range is stored. Its size is equal to the sum of both ranges above.
     * @param compare Binary function that accepts two arguments of the types pointed by the iterators, and returns a value
     *				  convertible to <code>bool</code>. The value returned indicates whether the first argument is
     *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
     *				  function shall not modify any of its arguments.
     *
     * @return An iterator pointing to the past-the-end element in the resulting sequence.
     */
    function merge<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean): OutputIterator;
    /**
     * Merge consecutive sorted ranges.
     *
     * Merges two consecutive sorted ranges: [<i>first</i>, <i>middle</i>) and [<i>middle</i>, <i>last</i>), putting
     * the result into the combined sorted range [<i>first</i>, <i>last</i>).
     *
     * The elements are compared using {@link less}. The elements in both ranges shall already be ordered according to
     * this same criterion ({@link less}). The resulting range is also sorted according to this.
     *
     * The function preserves the relative order of elements with equivalent values, with the elements in the first
     * range preceding those equivalent in the second.
     *
     * @param first {@link Iterator Bidirectional iterator} to the initial position in the first sorted sequence to merge.
     *				This is also the initial position where the resulting merged range is stored.
     * @param middle {@link Iterator Bidirectional iterator} to the initial position of the second sorted sequence, which
     *				 because both sequences must be consecutive, matches the <i>past-the-end</i> position of the first
     *				 sequence.
     * @param last {@link Iterator Bidirectional iterator} to the <i>past-the-end</i> position of the second sorted
     *			   sequence. This is also the <i>past-the-end</i> position of the range where the resulting merged range is
     *			   stored.
     */
    function inplace_merge<T, BidirectionalIterator extends Iterator<T>>(first: BidirectionalIterator, middle: BidirectionalIterator, last: BidirectionalIterator): void;
    /**
     * Merge consecutive sorted ranges.
     *
     * Merges two consecutive sorted ranges: [<i>first</i>, <i>middle</i>) and [<i>middle</i>, <i>last</i>), putting
     * the result into the combined sorted range [<i>first</i>, <i>last</i>).
     *
     * The elements are compared using <i>compare</i>. The elements in both ranges shall already be ordered according
     * to this same criterion (<i>compare</i>). The resulting range is also sorted according to this.
     *
     * The function preserves the relative order of elements with equivalent values, with the elements in the first
     * range preceding those equivalent in the second.
     *
     * @param first {@link Iterator Bidirectional iterator} to the initial position in the first sorted sequence to merge.
     *				This is also the initial position where the resulting merged range is stored.
     * @param middle {@link Iterator Bidirectional iterator} to the initial position of the second sorted sequence, which
     *				 because both sequences must be consecutive, matches the <i>past-the-end</i> position of the first
     *				 sequence.
     * @param last {@link Iterator Bidirectional iterator} to the <i>past-the-end</i> position of the second sorted
     *			   sequence. This is also the <i>past-the-end</i> position of the range where the resulting merged range is
     *			   stored.
     * @param compare Binary function that accepts two arguments of the types pointed by the iterators, and returns a value
     *				  convertible to <code>bool</code>. The value returned indicates whether the first argument is
     *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
     *				  function shall not modify any of its arguments.
     */
    function inplace_merge<T, BidirectionalIterator extends base.ILinearIterator<T>>(first: BidirectionalIterator, middle: BidirectionalIterator, last: BidirectionalIterator, compare: (x: T, y: T) => boolean): void;
    /**
     * Test whether sorted range includes another sorted range.
     *
     * Returns <code>true</code> if the sorted range [<i>first1</i>, <i>last1</i>) contains all the elements in the
     * sorted range [<i>first2</i>, <i>last2</i>).
     *
     * The elements are compared using {@link less}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
     * <code>if (!less(x, y) && !less(y, x))</code>.
     *
     * The elements in the range shall already be ordered according to this same criterion ({@link less}).
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence (which is tested on
     *				whether it contains the second sequence). The range used is [<i>first1</i>, <i>last1</i>), which
     *				contains all the elements between <i>first1</i> and <i>last1</i>, including the element pointed by
     *				<i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
     * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. (which is tested
     *				on whether it is contained in the first sequence). The range used is [<i>first2</i>, <i>last2</i>).
     *
     * @return <code>true</code> if every element in the range [<i>first2</i>, <i>last2</i>) is contained in the range
     *		   [<i>first1</i>, <i>last1</i>), <code>false</code> otherwise. If [<i>first2</i>, <i>last2</i>) is an empty
     *		   range, the function returns <code>true</code>.
     */
    function includes<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2): boolean;
    /**
     * Test whether sorted range includes another sorted range.
     *
     * Returns <code>true</code> if the sorted range [<i>first1</i>, <i>last1</i>) contains all the elements in the
     * sorted range [<i>first2</i>, <i>last2</i>).
     *
     * The elements are compared using <i>compare</i>. Two elements, <i>x</i> and <i>y</i> are considered equivalent
     * <code>if (!compare(x, y) && !compare(y, x))</code>.
     *
     * The elements in the range shall already be ordered according to this same criterion (<i>compare</i>).
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence (which is tested on
     *				whether it contains the second sequence). The range used is [<i>first1</i>, <i>last1</i>), which
     *				contains all the elements between <i>first1</i> and <i>last1</i>, including the element pointed by
     *				<i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
     * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. (which is tested
     *				on whether it is contained in the first sequence). The range used is [<i>first2</i>, <i>last2</i>).
     * @param compare Binary function that accepts two elements as arguments (one from each of the two sequences, in the
     *				  same order), and returns a value convertible to <code>bool</code>. The value returned indicates
     *				  whether the element passed as first argument is considered to go before the second in the specific
     *				  <i>strict weak ordering</i> it defines. The function shall not modify any of its arguments.
     *
     * @return <code>true</code> if every element in the range [<i>first2</i>, <i>last2</i>) is contained in the range
     *		   [<i>first1</i>, <i>last1</i>), <code>false</code> otherwise. If [<i>first2</i>, <i>last2</i>) is an empty
     *		   range, the function returns <code>true</code>.
     */
    function includes<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, compare: (x: T, y: T) => boolean): boolean;
    /**
     * Union of two sorted ranges.
     *
     * Constructs a sorted range beginning in the location pointed by <i>result</i> with the <i>set union</i> of the
     * two sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>).
     *
     * The <i>union</i> of two sets is formed by the elements that are present in either one of the sets, or in both.
     * Elements from the second range that have an equivalent element in the first range are not copied to the resulting
     * range.
     *
     * The elements are compared using {@link less}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
     * <code>if (!less(x, y) && !less(y, x))</code>.
     *
     * The elements in the ranges shall already be ordered according to this same criterion ({@link less}). The
     * resulting range is also sorted according to this.
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
     *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
     * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
     *				[<i>first2</i>, <i>last2</i>).
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element from the other ranges.
     *
     * @return An iterator to the end of the constructed range.
     */
    function set_union<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator): OutputIterator;
    /**
     * Union of two sorted ranges.
     *
     * Constructs a sorted range beginning in the location pointed by <i>result</i> with the <i>set union</i> of the
     * two sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>).
     *
     * The <i>union</i> of two sets is formed by the elements that are present in either one of the sets, or in both.
     * Elements from the second range that have an equivalent element in the first range are not copied to the resulting
     * range.
     *
     * The elements are compared using <i>compare</i>. Two elements, <i>x</i> and <i>y</i> are considered equivalent
     * <code>if (!compare(x, y) && !compare(y, x))</code>.
     *
     * The elements in the ranges shall already be ordered according to this same criterion (<i>compare</i>). The
     * resulting range is also sorted according to this.
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
     *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
     * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
     *				[<i>first2</i>, <i>last2</i>).
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element from the other ranges.
     * @param compare Binary function that accepts two arguments of the types pointed by the input iterators, and returns a
     *				  value convertible to <code>bool</code>. The value returned indicates whether the first argument is
     *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
     *				  function shall not modify any of its arguments.
     *
     * @return An iterator to the end of the constructed range.
     */
    function set_union<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean): OutputIterator;
    /**
     * Intersection of two sorted ranges.
     *
     * Constructs a sorted range beginning in the location pointed by <i>result</i> with the <i>set intersection</i> of
     * the two sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>).
     *
     * The <i>intersection</i> of two sets is formed only by the elements that are present in both sets. The elements
     * copied by the function come always from the first range, in the same order.
     *
     * The elements are compared using {@link less}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
     * <code>if (!less(x, y) && !less(y, x))</code>.
     *
     * The elements in the ranges shall already be ordered according to this same criterion ({@link less}). The
     * resulting range is also sorted according to this.
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
     *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
     * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
     *				[<i>first2</i>, <i>last2</i>).
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element from the first range.
     *
     * @return An iterator to the end of the constructed range.
     */
    function set_intersection<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator): OutputIterator;
    /**
     * Intersection of two sorted ranges.
     *
     * Constructs a sorted range beginning in the location pointed by <i>result</i> with the <i>set intersection</i> of
     * the two sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>).
     *
     * The <i>intersection</i> of two sets is formed only by the elements that are present in both sets. The elements
     * copied by the function come always from the first range, in the same order.
     *
     * The elements are compared using <i>compare</i>. Two elements, <i>x</i> and <i>y</i> are considered equivalent
     * <code>if (!compare(x, y) && !compare(y, x))</code>.
     *
     * The elements in the ranges shall already be ordered according to this same criterion (<i>compare</i>). The
     * resulting range is also sorted according to this.
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
     *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
     * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
     *				[<i>first2</i>, <i>last2</i>).
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element from the first range.
     * @param compare Binary function that accepts two arguments of the types pointed by the input iterators, and returns a
     *				  value convertible to <code>bool</code>. The value returned indicates whether the first argument is
     *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
     *				  function shall not modify any of its arguments.
     *
     * @return An iterator to the end of the constructed range.
     */
    function set_intersection<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean): OutputIterator;
    /**
     * Difference of two sorted ranges.
     *
     * Constructs a sorted range beginning in the location pointed by <i>result</i> with the <i>set difference</i> of
     * the sorted range [<i>first1</i>, <i>last1</i>) with respect to the sorted range [<i>first2</i>, <i>last2</i>).
     *
     * The <i>difference</i> of two sets is formed by the elements that are present in the first set, but not in the
     * second one. The elements copied by the function come always from the first range, in the same order.
     *
     * For containers supporting multiple occurrences of a value, the <i>difference</i> includes as many occurrences of
     * a given value as in the first range, minus the amount of matching elements in the second, preserving order.
     *
     * Notice that this is a directional operation - for a symmetrical equivalent, see {@link set_symmetric_difference}.
     *
     * The elements are compared using {@link less}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
     * <code>if (!less(x, y) && !less(y, x))</code>.
     *
     * The elements in the ranges shall already be ordered according to this same criterion ({@link less}). The
     * resulting range is also sorted according to this.
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
     *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
     * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
     *				[<i>first2</i>, <i>last2</i>).
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element from the first range.
     *
     * @return An iterator to the end of the constructed range.
     */
    function set_difference<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator): OutputIterator;
    /**
     * Difference of two sorted ranges.
     *
     * Constructs a sorted range beginning in the location pointed by <i>result</i> with the <i>set difference</i> of
     * the sorted range [<i>first1</i>, <i>last1</i>) with respect to the sorted range [<i>first2</i>, <i>last2</i>).
     *
     * The <i>difference</i> of two sets is formed by the elements that are present in the first set, but not in the
     * second one. The elements copied by the function come always from the first range, in the same order.
     *
     * For containers supporting multiple occurrences of a value, the <i>difference</i> includes as many occurrences of
     * a given value as in the first range, minus the amount of matching elements in the second, preserving order.
     *
     * Notice that this is a directional operation - for a symmetrical equivalent, see {@link set_symmetric_difference}.
     *
     * The elements are compared using <i>compare</i>. Two elements, <i>x</i> and <i>y</i> are considered equivalent
     * <code>if (!compare(x, y) && !compare(y, x))</code>.
     *
     * The elements in the ranges shall already be ordered according to this same criterion (<i>compare</i>). The
     * resulting range is also sorted according to this.
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
     *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
     * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
     *				[<i>first2</i>, <i>last2</i>).
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element from the first range.
     * @param compare Binary function that accepts two arguments of the types pointed by the input iterators, and returns a
     *				  value convertible to <code>bool</code>. The value returned indicates whether the first argument is
     *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
     *				  function shall not modify any of its arguments.
     *
     * @return An iterator to the end of the constructed range.
     */
    function set_difference<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean): OutputIterator;
    /**
     * Symmetric difference of two sorted ranges.
     *
     * Constructs a sorted range beginning in the location pointed by0 <i>result</i> with the set
     * <i>symmetric difference</i> of the two sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>).
     *
     * The <i>symmetric difference</i> of two sets is formed by the elements that are present in one of the sets, but
     * not in the other. Among the equivalent elements in each range, those discarded are those that appear before in the
     * existent order before the call. The existing order is also preserved for the copied elements.
     *
     * The elements are compared using {@link less}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
     * <code>if (!less(x, y) && !less(y, x))</code>.
     *
     * The elements in the ranges shall already be ordered according to this same criterion ({@link less}). The
     * resulting range is also sorted according to this.
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
     *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
     * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
     *				[<i>first2</i>, <i>last2</i>).
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element from the other ranges.
     * @param compare Binary function that accepts two arguments of the types pointed by the input iterators, and returns a
     *				  value convertible to <code>bool</code>. The value returned indicates whether the first argument is
     *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
     *				  function shall not modify any of its arguments.
     *
     * @return An iterator to the end of the constructed range.
     */
    function set_symmetric_difference<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator): OutputIterator;
    /**
     * Symmetric difference of two sorted ranges.
     *
     * Constructs a sorted range beginning in the location pointed by0 <i>result</i> with the set
     * <i>symmetric difference</i> of the two sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>).
     *
     * The <i>symmetric difference</i> of two sets is formed by the elements that are present in one of the sets, but
     * not in the other. Among the equivalent elements in each range, those discarded are those that appear before in the
     * existent order before the call. The existing order is also preserved for the copied elements.
     *
     * The elements are compared using <i>compare</i>. Two elements, <i>x</i> and <i>y</i> are considered equivalent
     * <code>if (!compare(x, y) && !compare(y, x))</code>.
     *
     * The elements in the ranges shall already be ordered according to this same criterion (<i>compare</i>). The
     * resulting range is also sorted according to this.
     *
     * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
     * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
     *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
     * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
     * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
     *				[<i>first2</i>, <i>last2</i>).
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element from the other ranges.
     * @param compare Binary function that accepts two arguments of the types pointed by the input iterators, and returns a
     *				  value convertible to <code>bool</code>. The value returned indicates whether the first argument is
     *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
     *				  function shall not modify any of its arguments.
     *
     * @return An iterator to the end of the constructed range.
     */
    function set_symmetric_difference<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends base.ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean): OutputIterator;
}
declare namespace std {
    /**
     * Return the smallest.
     *
     * Returns the smallest of all the elements in the <i>args</i>.
     *
     * @param args Values to compare.
     *
     * @return The lesser of the values passed as arguments.
     */
    function min<T>(...args: T[]): T;
    /**
     * Return the largest.
     *
     * Returns the largest of all the elements in the <i>args</i>.
     *
     * @param args Values to compare.
     *
     * @return The largest of the values passed as arguments.
     */
    function max<T>(...args: T[]): T;
    /**
     * Return smallest and largest elements.
     *
     * Returns a {@link Pair} with the smallest of all the elements in the <i>args</i> as first element (the first of
     * them, if there are more than one), and the largest as second (the last of them, if there are more than one).
     *
     * @param args Values to compare.
     *
     * @return The lesser and greatest of the values passed as arguments.
     */
    function minmax<T>(...args: T[]): Pair<T, T>;
    /**
     * Return smallest element in range.
     *
     * Returns an iterator pointing to the element with the smallest value in the range  [<i>first</i>, <i>last</i>).
     *
     * The comparisons are performed using either {@link less}; An element is the smallest if no other element
     * compares less than it. If more than one element fulfills this condition, the iterator returned points to the first
     * of such elements.
     *
     * @param first {@link Iteartor Input iterator} to the initial final position of the sequence to compare.
     * @param last {@link Iteartor Input iterator} to the final final position of the sequence to compare. The range used
     *			   is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *
     * @return An iterator to smallest value in the range, or <i>last</i> if the range is empty.
     */
    function min_element<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator): ForwardIterator;
    /**
     * Return smallest element in range.
     *
     * Returns an iterator pointing to the element with the smallest value in the range  [<i>first</i>, <i>last</i>).
     *
     * The comparisons are performed using either <i>compare</i>; An element is the smallest if no other element
     * compares less than it. If more than one element fulfills this condition, the iterator returned points to the first
     * of such elements.
     *
     * @param first {@link Iteartor Input iterator} to the initial final position of the sequence to compare.
     * @param last {@link Iteartor Input iterator} to the final final position of the sequence to compare. The range used
     *			   is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
     *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
     *				  considered less than the second. The function shall not modify any of its arguments.
     *
     * @return An iterator to smallest value in the range, or <i>last</i> if the range is empty.
     */
    function min_element<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean): ForwardIterator;
    /**
     * Return largest element in range.
     *
     * Returns an iterator pointing to the element with the largest value in the range  [<i>first</i>, <i>last</i>).
     *
     * The comparisons are performed using either {@link greater}; An element is the largest if no other element
     * compares less than it. If more than one element fulfills this condition, the iterator returned points to the first
     * of such elements.
     *
     * @param first {@link Iteartor Input iterator} to the initial final position of the sequence to compare.
     * @param last {@link Iteartor Input iterator} to the final final position of the sequence to compare. The range used
     *			   is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *
     * @return An iterator to largest value in the range, or <i>last</i> if the range is empty.
     */
    function max_element<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator): ForwardIterator;
    /**
     * Return largest element in range.
     *
     * Returns an iterator pointing to the element with the largest value in the range  [<i>first</i>, <i>last</i>).
     *
     * The comparisons are performed using either <i>compare</i>; An element is the largest if no other element
     * compares less than it. If more than one element fulfills this condition, the iterator returned points to the first
     * of such elements.
     *
     * @param first {@link Iteartor Input iterator} to the initial final position of the sequence to compare.
     * @param last {@link Iteartor Input iterator} to the final final position of the sequence to compare. The range used
     *			   is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
     *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
     *				  considered less than the second. The function shall not modify any of its arguments.
     *
     * @return An iterator to largest value in the range, or <i>last</i> if the range is empty.
     */
    function max_element<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean): ForwardIterator;
    /**
     * Return smallest and largest elements in range.
     *
     * Returns a {@link Pair} with an iterator pointing to the element with the smallest value in the range
     * [<i>first</i>, <i>last</i>) as first element, and the largest as second.
     *
     * The comparisons are performed using either {@link less} and {@link greater}.
     *
     * If more than one equivalent element has the smallest value, the first iterator points to the first of such
     * elements.
     *
     * If more than one equivalent element has the largest value, the second iterator points to the last of such
     * elements.
     *
     * @param first {@link Iteartor Input iterator} to the initial final position of the sequence to compare.
     * @param last {@link Iteartor Input iterator} to the final final position of the sequence to compare. The range used
     *			   is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
     *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
     *				  considered less than the second. The function shall not modify any of its arguments.
     *
     * @return A {@link Pair} with an iterator pointing to the element with the smallest value in the range
     *		   [<i>first</i>, <i>last</i>) as first element, and the largest as second.
     */
    function minmax_element<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator): Pair<ForwardIterator, ForwardIterator>;
    /**
     * Return smallest and largest elements in range.
     *
     * Returns a {@link Pair} with an iterator pointing to the element with the smallest value in the range
     * [<i>first</i>, <i>last</i>) as first element, and the largest as second.
     *
     * The comparisons are performed using either <i>compare</i>.
     *
     * If more than one equivalent element has the smallest value, the first iterator points to the first of such
     * elements.
     *
     * If more than one equivalent element has the largest value, the second iterator points to the last of such
     * elements.
     *
     * @param first {@link Iteartor Input iterator} to the initial final position of the sequence to compare.
     * @param last {@link Iteartor Input iterator} to the final final position of the sequence to compare. The range used
     *			   is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
     *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
     *				  considered less than the second. The function shall not modify any of its arguments.
     *
     * @return A {@link Pair} with an iterator pointing to the element with the smallest value in the range
     *		   [<i>first</i>, <i>last</i>) as first element, and the largest as second.
     */
    function minmax_element<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean): Pair<ForwardIterator, ForwardIterator>;
    /**
     * Clamp a value between a pair of boundary.
     *
     * @param v The value to clamp.
     * @param lo Start of the boundaries to clamp *v* to.
     * @param hi Terminal of the boundaries to clamp *v* to.
     *
     * @return *lo* if *v* is less than *lo*, *hi* if *hi* is less than *v*, otherwise *v*.
     */
    function clamp<T>(v: T, lo: T, hi: T): T;
    /**
     * Clamp a value between a pair of boundary.
     *
     * @param v The value to clamp.
     * @param lo Start of the boundaries to clamp *v* to.
     * @param hi Terminal of the boundaries to clamp *v* to.
     * @param comp Binary function that accepts two elements as arguments (one of each of the two sequences, in the
     *			   same order), and returns a value convertible to <code>bool</code>. The value returned indicates
     *			   whether the elements are considered to match in the context of this function.
     *
     * @return *lo* if *v* is less than *lo*, *hi* if *hi* is less than *v*, otherwise *v*.
     */
    function clamp<T>(v: T, lo: T, hi: T, comp: (x: T, y: T) => boolean): T;
    /**
     * Test whether range is permutation of another.
     *
     * Compares the elements in the range [<i>first1</i>, <i>last1</i>) with those in the range beginning at
     * <i>first2</i>, and returns <code>true</code> if all of the elements in both ranges match, even in a different
     * order.
     *
     * @param first1 An {@link Iterator} to the initial position of the first sequence.
     * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 An {@link Iterator} to the initial position of the second sequence. The comparison includes up to
     *				 as many elements of this sequence as those in the range [<i>first1</i>, <i>last1</i>).
     *
     * @return <code>true</code> if all the elements in the range [<i>first1</i>, <i>last1</i>) compare equal to those
     *		   of the range starting at <i>first2</i> in any order, and <code>false</code> otherwise.
     */
    function is_permutation<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2): boolean;
    /**
     * Test whether range is permutation of another.
     *
     * Compares the elements in the range [<i>first1</i>, <i>last1</i>) with those in the range beginning at
     * <i>first2</i>, and returns <code>true</code> if all of the elements in both ranges match, even in a different
     * order.
     *
     * @param first1 An {@link Iterator} to the initial position of the first sequence.
     * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 An {@link Iterator} to the initial position of the second sequence. The comparison includes up to
     *				 as many elements of this sequence as those in the range [<i>first1</i>, <i>last1</i>).
     * @param pred Binary function that accepts two elements as argument (one of each of the two sequences, in the same
     *			   order), and returns a value convertible to <code>bool</code>. The value returned indicates whether
     *			   the elements are considered to match in the context of this function.
     *
     * @return <code>true</code> if all the elements in the range [<i>first1</i>, <i>last1</i>) compare equal to those
     *		   of the range starting at <i>first2</i> in any order, and <code>false</code> otherwise.
     */
    function is_permutation<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, pred: (x: T, y: T) => boolean): boolean;
    /**
     * Transform range to previous permutation.
     *
     * Rearranges the elements in the range [*first*, *last*) into the previous *lexicographically-ordered* permutation.
     *
     * A *permutation* is each one of the N! possible arrangements the elements can take (where *N* is the number of
     * elements in the range). Different permutations can be ordered according to how they compare
     * {@link lexicographicaly lexicographical_compare} to each other; The first such-sorted possible permutation (the one
     * that would compare *lexicographically smaller* to all other permutations) is the one which has all its elements
     * sorted in ascending order, and the largest has all its elements sorted in descending order.
     *
     * The comparisons of individual elements are performed using the {@link less less()} function.
     *
     * If the function can determine the previous permutation, it rearranges the elements as such and returns true. If
     * that was not possible (because it is already at the lowest possible permutation), it rearranges the elements
     * according to the last permutation (sorted in descending order) and returns false.
     *
     * @param first Bidirectional iterators to the initial positions of the sequence
     * @param last Bidirectional iterators to the final positions of the sequence. The range used is [*first*, *last*),
     *			   which contains all the elements between *first* and *last*, including the element pointed by *first*
     *			   but not the element pointed by *last*.
     *
     * @return true if the function could rearrange the object as a lexicographicaly smaller permutation. Otherwise, the
     *		   function returns false to indicate that the arrangement is not less than the previous, but the largest
     *		   possible (sorted in descending order).
     */
    function prev_permutation<T, BidirectionalIterator extends base.IArrayIterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator): boolean;
    /**
     * Transform range to previous permutation.
     *
     * Rearranges the elements in the range [*first*, *last*) into the previous *lexicographically-ordered* permutation.
     *
     * A *permutation* is each one of the N! possible arrangements the elements can take (where *N* is the number of
     * elements in the range). Different permutations can be ordered according to how they compare
     * {@link lexicographicaly lexicographical_compare} to each other; The first such-sorted possible permutation (the one
     * that would compare *lexicographically smaller* to all other permutations) is the one which has all its elements
     * sorted in ascending order, and the largest has all its elements sorted in descending order.
     *
     * The comparisons of individual elements are performed using the *compare*.
     *
     * If the function can determine the previous permutation, it rearranges the elements as such and returns true. If
     * that was not possible (because it is already at the lowest possible permutation), it rearranges the elements
     * according to the last permutation (sorted in descending order) and returns false.
     *
     * @param first Bidirectional iterators to the initial positions of the sequence
     * @param last Bidirectional iterators to the final positions of the sequence. The range used is [*first*, *last*),
     *			   which contains all the elements between *first* and *last*, including the element pointed by *first*
     *			   but not the element pointed by *last*.
     * @param compare Binary function that accepts two arguments of the type pointed by BidirectionalIterator, and returns
     *				  a value convertible to bool. The value returned indicates whether the first argument is considered
     *				  to go before the second in the specific strict weak ordering it defines.
     *
     * @return true if the function could rearrange the object as a lexicographicaly smaller permutation. Otherwise, the
     *		   function returns false to indicate that the arrangement is not less than the previous, but the largest
     *		   possible (sorted in descending order).
     */
    function prev_permutation<T, BidirectionalIterator extends base.IArrayIterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator, compare: (x: T, y: T) => boolean): boolean;
    /**
     * Transform range to next permutation.
     *
     * Rearranges the elements in the range [*first*, *last*) into the next *lexicographically greater* permutation.
     *
     * A permutation is each one of the *N!* possible arrangements the elements can take (where *N* is the number of
     * elements in the range). Different permutations can be ordered according to how they compare
     * {@link lexicographicaly lexicographical_compare} to each other; The first such-sorted possible permutation (the one
     * that would compare *lexicographically smaller* to all other permutations) is the one which has all its elements
     * sorted in ascending order, and the largest has all its elements sorted in descending order.
     *
     * The comparisons of individual elements are performed using the {@link less} function.
     *
     * If the function can determine the next higher permutation, it rearranges the elements as such and returns true. If
     * that was not possible (because it is already at the largest possible permutation), it rearranges the elements
     * according to the first permutation (sorted in ascending order) and returns false.
     *
     * @param first Bidirectional iterators to the initial positions of the sequence
     * @param last Bidirectional iterators to the final positions of the sequence. The range used is [*first*, *last*),
     *			   which contains all the elements between *first* and *last*, including the element pointed by *first*
     *			   but not the element pointed by *last*.
     *
     * @return true if the function could rearrange the object as a lexicographicaly greater permutation. Otherwise, the
     *		   function returns false to indicate that the arrangement is not greater than the previous, but the lowest
     *		   possible (sorted in ascending order).
     */
    function next_permutation<T, BidirectionalIterator extends base.IArrayIterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator): boolean;
    /**
     * Transform range to next permutation.
     *
     * Rearranges the elements in the range [*first*, *last*) into the next *lexicographically greater* permutation.
     *
     * A permutation is each one of the *N!* possible arrangements the elements can take (where *N* is the number of
     * elements in the range). Different permutations can be ordered according to how they compare
     * {@link lexicographicaly lexicographical_compare} to each other; The first such-sorted possible permutation (the one
     * that would compare *lexicographically smaller* to all other permutations) is the one which has all its elements
     * sorted in ascending order, and the largest has all its elements sorted in descending order.
     *
     * The comparisons of individual elements are performed using the *compare*.
     *
     * If the function can determine the next higher permutation, it rearranges the elements as such and returns true. If
     * that was not possible (because it is already at the largest possible permutation), it rearranges the elements
     * according to the first permutation (sorted in ascending order) and returns false.
     *
     * @param first Bidirectional iterators to the initial positions of the sequence
     * @param last Bidirectional iterators to the final positions of the sequence. The range used is [*first*, *last*),
     *			   which contains all the elements between *first* and *last*, including the element pointed by *first*
     *			   but not the element pointed by *last*.
     * @param compare Binary function that accepts two arguments of the type pointed by BidirectionalIterator, and returns
     *				  a value convertible to bool. The value returned indicates whether the first argument is considered
     *				  to go before the second in the specific strict weak ordering it defines.
     *
     * @return true if the function could rearrange the object as a lexicographicaly greater permutation. Otherwise, the
     *		   function returns false to indicate that the arrangement is not greater than the previous, but the lowest
     *		   possible (sorted in ascending order).
     */
    function next_permutation<T, BidirectionalIterator extends base.IArrayIterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator, compare: (x: T, y: T) => boolean): boolean;
}
declare namespace std.base {
    /**
     * An abstract container.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/abstract_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/abstract_containers.png" style="max-width: 100%" />
     * </a>
     *
     * ### Container properties
     * <dl>
     * 	<dt> Sequence </dt>
     * 	<dd> Elements in sequence containers are ordered in a strict linear sequence. Individual elements are
     *		 accessed by their position in this sequence. </dd>
     *
     * 	<dt> Doubly-linked list </dt>
     *	<dd> Each element keeps information on how to locate the next and the previous elements, allowing
     *		 constant time insert and erase operations before or after a specific element (even of entire ranges),
     *		 but no direct random access. </dd>
     * </dl>
     *
     * @param <T> Type of elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class Container<T> {
        /**
         * Default Constructor.
         */
        protected constructor();
        /**
         * Assign new content to content.
         *
         * Assigns new contents to the container, replacing its current contents, and modifying its
         * {@link size} accordingly.
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        abstract assign<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
        /**
         * Clear content.
         *
         * Removes all elements from the Container, leaving the container with a size of 0.
         */
        clear(): void;
        /**
         * Return iterator to beginning.
         *
         * Returns an iterator referring the first element in the
         *
         * #### Note
         * If the container is {@link empty}, the returned iterator is same with {@link end end()}.
         *
         * @return An iterator to the first element in the  The iterator containes the first element's value.
         */
        abstract begin(): Iterator<T>;
        /**
         * Return iterator to end.
         * Returns an iterator referring to the past-the-end element in the
         *
         * The past-the-end element is the theoretical element that would follow the last element in the
         * It does not point to any element, and thus shall not be dereferenced.
         *
         * Because the ranges used by functions of the Container do not include the element reference by their
         * closing iterator, this function is often used in combination with {@link Container}.{@link begin} to
         * specify a range including all the elements in the container.
         *
         * #### Note
         * Returned iterator from {@link Container}.{@link end} does not refer any element. Trying to accessing
         * element by the iterator will cause throwing exception ({@link OutOfRange}).
         *
         * If the container is {@link empty}, this function returns the same as {@link Container}.{@link begin}.
         *
         *
         * @return An iterator to the end element in the
         */
        abstract end(): Iterator<T>;
        /**
         * Return {@link ReverseIterator reverse iterator} to <i>reverse beginning</i>.
         *
         * Returns a {@link ReverseIterator reverse iterator} pointing to the last element in the container (i.e.,
         * its <i>reverse beginning</i>).
         *
         * {@link ReverseIterator reverse iterators} iterate backwards: increasing them moves them towards the
         * beginning of the
         *
         * {@link rbegin} points to the element right before the one that would be pointed to by member {@link end}.
         *
         *
         * @return A {@link ReverseIterator reverse iterator} to the <i>reverse beginning</i> of the sequence
         */
        abstract rbegin(): IReverseIterator<T>;
        /**
         * Return {@link ReverseIterator reverse iterator} to <i>reverse end</i>.
         *
         * Returns a {@link ReverseIterator reverse iterator} pointing to the theoretical element preceding the
         * first element in the container (which is considered its <i>reverse end</i>).
         *
         * The range between {@link Container}.{@link rbegin} and {@link Container}.{@link rend} contains all
         * the elements of the container (in reverse order).
         *
         * @return A {@link ReverseIterator reverse iterator} to the <i>reverse end</i> of the sequence
         */
        abstract rend(): IReverseIterator<T>;
        /**
         * Return the number of elements in the {@link Container}.
         *
         * @return The number of elements in the container.
         */
        abstract size(): number;
        /**
         * Test whether the container is empty.
         * Returns whether the container is empty (i.e. whether its size is 0).
         *
         * This function does not modify the container in any way. To clear the content of the container,
         * see {@link clear clear()}.
         *
         * @return <code>true</code> if the container size is 0, <code>false</code> otherwise.
         */
        empty(): boolean;
        /**
         * Insert elements.
         *
         * Appends new elements to the container, and returns the new size of the
         *
         * @param items New elements to insert.
         *
         * @return New size of the Container.
         */
        abstract push(...items: T[]): number;
        /**
         * Insert an element.
         *
         * The container is extended by inserting a new element before the element at the specified
         * <i>position</i>. This effectively increases the {@link Container.size container size} by the amount of
         * elements inserted.
         *
         * @param position Position in the {@link Container} where the new element is inserted.
         *				   {@link iterator} is a member type, defined as a {@link Iterator random access iterator}
         *				   type that points to elements.
         * @param val Value to be copied to the inserted element.
         *
         * @re
        public abstract insert(position: Iterator<T>, val: T): Iterator<T>;

        /* ---------------------------------------------------------
            ERASE
        --------------------------------------------------------- */
        /**
         * Erase an element.
         *
         * Removes from the container a single element.
         *
         * This effectively reduces the container size by the number of element removed.
         *
         * @param position Iterator pointing to a single element to be removed from the Container.
         *
         * @return An iterator pointing to the element that followed the last element erased by the function
         *		   call. This is the {@link end Container.end} if the operation erased the last element in the
         *		   sequence.
         */
        abstract erase(position: Iterator<T>): Iterator<T>;
        /**
         * Erase elements.
         *
         * Removes from the container a range of elements.
         *
         * This effectively reduces the container size by the number of elements removed.
         *
         * @param begin An iterator specifying a range of beginning to erase.
         * @param end An iterator specifying a range of end to erase.
         *
         * @return An iterator pointing to the element that followed the last element erased by the function
         *		   call. This is the {@link end Container.end} if the operation erased the last element in
         *		   the sequence.
         */
        abstract erase<U extends T>(begin: Iterator<U>, end: Iterator<U>): Iterator<T>;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link Container container} object with same type of elements. Sizes and container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were in <i>obj</i>
         * before the call, and the elements of <i>obj</i> are those which were in this. All iterators, references and
         * pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link Container container} of the same type of elements (i.e., instantiated
         *			  with the same template parameter, <b>T</b>) whose content is swapped with that of this
         *			  {@link Container container}.
         */
        swap(obj: Container<T>): void;
    }
    interface IReverseIterator<T> extends ReverseIterator<T, Container<T>, Iterator<T>, IReverseIterator<T>> {
    }
}
declare namespace std {
    /**
     * Bi-directional iterator.
     *
     * {@link Iterator Bidirectional iterators} are iterators that can be used to access the sequence of elements
     * in a range in both directions (towards the end and towards the beginning).
     *
     * All {@link IArrayIterator random-access iterators} are also valid {@link Iterrator bidirectional iterators}.
     *
     * There is not a single type of {@link Iterator bidirectional iterator}: {@link Container Each container}
     * may define its own specific iterator type able to iterate through it and access its elements.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/abstract_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/abstract_containers.png" style="max-width: 100%" /></a>
     *
     * @reference http://www.cplusplus.com/reference/iterator/BidirectionalIterator
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class Iterator<T> {
        /**
         * @hidden
         */
        protected source_: base.Container<T>;
        /**
         * Construct from the source {@link Container container}.
         *
         * @param source The source container.
         */
        protected constructor(source: base.Container<T>);
        /**
         * Get iterator to previous element.
         *
         * If current iterator is the first item(equal with {@link Container.begin Container.begin()}),
         * returns {@link Container.end Container.end()}.
         *
         * @return An iterator of the previous item.
         */
        abstract prev(): Iterator<T>;
        /**
         * Get iterator to next element.
         *
         * If current iterator is the last item, returns {@link Container.end Container.end()}.
         *
         * @return An iterator of the next item.
         */
        abstract next(): Iterator<T>;
        /**
         * Advances the {@link Iterator} by <i>n</i> element positions.
         *
         * @param n Number of element positions to advance.
         * @return An advanced iterator.
         */
        abstract advance(n: number): Iterator<T>;
        /**
         * Get source container.
         *
         * Get source container of this iterator is directing for.
         */
        abstract source(): base.Container<T>;
        /**
         * Whether an iterator is equal with the iterator.
         *
         * Compare two iterators and returns whether they are equal or not.
         *
         * #### Note
         * Iterator's {@link equals equals()} only compare souce container and index number.
         *
         * Although elements in a pair, key and value are {@link equal_to equal_to}, if the source map or
         * index number is different, then the {@link equals equals()} will return false. If you want to
         * compare the elements of a pair, compare them directly by yourself.
         *
         * @param obj An iterator to compare
         * @return Indicates whether equal or not.
         */
        equals(obj: Iterator<T>): boolean;
        /**
         * Get value of the iterator is pointing.
         *
         * @return A value of the iterator.
         */
        readonly abstract value: T;
        abstract swap(obj: Iterator<T>): void;
    }
}
declare namespace std {
    /**
     * This class reverses the direction in which a bidirectional or random-access iterator iterates through a range.
     *
     * A copy of the original iterator (the {@link Iterator base iterator}) is kept internally and used to reflect
     * the operations performed on the {@link ReverseIterator}: whenever the {@link ReverseIterator} is incremented, its
     * {@link Iterator base iterator} is decreased, and vice versa. A copy of the {@link Iterator base iterator} with the
     * current state can be obtained at any time by calling member {@link base}.
     *
     * Notice however that when an iterator is reversed, the reversed version does not point to the same element in
     * the range, but to <b>the one preceding it</b>. This is so, in order to arrange for the past-the-end element of a
     * range: An iterator pointing to a past-the-end element in a range, when reversed, is pointing to the last element
     * (not past it) of the range (this would be the first element of the reversed range). And if an iterator to the
     * first element in a range is reversed, the reversed iterator points to the element before the first element (this
     * would be the past-the-end element of the reversed range).
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/abstract_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/abstract_containers.png" style="max-width: 100%" /></a>
     *
     * @reference http://www.cplusplus.com/reference/iterator/reverse_iterator
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ReverseIterator<T, Source extends base.Container<T>, Base extends Iterator<T>, This extends ReverseIterator<T, Source, Base, This>> extends Iterator<T> {
        /**
         * @hidden
         */
        protected base_: Base;
        /**
         * Construct from base iterator.
         *
         * @param base A reference of the base iterator, which iterates in the opposite direction.
         */
        protected constructor(base: Base);
        /**
         * @hidden
         */
        protected abstract _Create_neighbor(base: Base): This;
        source(): Source;
        /**
         * Return base iterator.
         *
         * Return a reference of the base iteraotr.
         *
         * The base iterator is an iterator of the same type as the one used to construct the {@link ReverseIterator},
         * but pointing to the element next to the one the {@link ReverseIterator} is currently pointing to
         * (a {@link ReverseIterator} has always an offset of -1 with respect to its base iterator).
         *
         * @return A reference of the base iterator, which iterates in the opposite direction.
         */
        base(): Base;
        /**
         * Get value of the iterator is pointing.
         *
         * @return A value of the reverse iterator.
         */
        readonly value: T;
        /**
         * @inheritdoc
         */
        prev(): This;
        /**
         * @inheritdoc
         */
        next(): This;
        /**
         * @inheritdoc
         */
        advance(n: number): This;
        /**
         * @inheritdoc
         */
        equals(obj: This): boolean;
        /**
         * @inheritdoc
         */
        swap(obj: This): void;
    }
    /**
     * Return the number of elements in the {@link Container}.
     *
     * @param container A container with a size method.
     * @return The number of elements in the container.
     */
    function size<T>(container: base.Container<T>): number;
    /**
     * Test whether the container is empty.
     *
     * Returns whether the {@link Container} is empty (i.e. whether its {@link size} is 0).
     *
     * @param container A container with a empty method.
     * @return <code>true</code> if the container size is 0, <code>false</code> otherwise.
     */
    function empty<T>(container: base.Container<T>): boolean;
    /**
     * Return distance between {@link Iterator iterators}.
     *
     * Calculates the number of elements between <i>first</i> and <i>last</i>.
     *
     * If it is a {@link IArrayIterator random-access iterator}, the function uses operator- to calculate this.
     * Otherwise, the function uses the increase operator {@link Iterator.next next()} repeatedly.
     *
     * @param first Iterator pointing to the initial element.
     * @param last Iterator pointing to the final element. This must be reachable from first.
     *
     * @return The number of elements between first and last.
     */
    function distance<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator): number;
    /**
     * Advance iterator.
     *
     * Advances the iterator <i>it</i> by <i>n</i> elements positions.
     *
     * @param it Iterator to be advanced.
     * @param n Number of element positions to advance.
     *
     * @return An iterator to the element <i>n</i> positions before <i>it</i>.
     */
    function advance<T, InputIterator extends Iterator<T>>(it: InputIterator, n: number): InputIterator;
    /**
     * Get iterator to previous element.
     *
     * Returns an iterator pointing to the element that <i>it</i> would be pointing to if advanced <i>-n</i> positions.
     *
     * @param it Iterator to base position.
     * @param n Number of element positions offset (1 by default).
     *
     * @return An iterator to the element <i>n</i> positions before <i>it</i>.
     */
    function prev<T, BidirectionalIterator extends Iterator<T>>(it: BidirectionalIterator, n?: number): BidirectionalIterator;
    /**
     * Get iterator to next element.
     *
     * Returns an iterator pointing to the element that <i>it</i> would be pointing to if advanced <i>n</i> positions.
     *
     * @param it Iterator to base position.
     * @param n Number of element positions offset (1 by default).
     *
     * @return An iterator to the element <i>n</i> positions away from <i>it</i>.
     */
    function next<T, ForwardIterator extends Iterator<T>>(it: ForwardIterator, n?: number): ForwardIterator;
    /**
     * Iterator to beginning.
     *
     * Returns an iterator pointing to the first element in the sequence.
     *
     * If the sequence is {@link empty}, the returned value shall not be dereferenced.
     *
     * @param container A container object of a class type for which member {@link begin} is defined.
     * @return The same as returned by {@link begin begin()}.
     */
    function begin<T>(container: base.Container<T>): Iterator<T>;
    function begin<T>(container: Vector<T>): VectorIterator<T>;
    function begin<T>(container: List<T>): ListIterator<T>;
    function begin<T>(container: Deque<T>): DequeIterator<T>;
    function begin<T>(container: base.SetContainer<T>): SetIterator<T>;
    function begin<Key, T>(container: base.MapContainer<Key, T>): MapIterator<Key, T>;
    /**
     * Iterator to reverse-beginning.
     *
     * Returns a reverse iterator pointing to the last element in the sequence.
     *
     * If the sequence is {@link empty}, the returned value shall not be dereferenced.
     *
     * @param container A container object of a class type for which member {@link rbegin} is defined.
     * @return The same as returned by {@link rbegin()}.
     */
    function rbegin<T>(container: base.Container<T>): base.IReverseIterator<T>;
    function rbegin<T>(container: Vector<T>): VectorReverseIterator<T>;
    function rbegin<T>(container: List<T>): ListReverseIterator<T>;
    function rbegin<T>(container: Deque<T>): DequeReverseIterator<T>;
    function rbegin<T>(container: base.SetContainer<T>): SetReverseIterator<T>;
    function rbegin<Key, T>(container: base.MapContainer<Key, T>): MapReverseIterator<Key, T>;
    /**
     * Iterator to end.
     *
     * Returns an iterator pointing to the <i>past-the-end</i> element in the sequence.
     *
     * If the sequence is {@link empty}, the returned value compares equal to the one returned by {@link begin} with the same argument.
     *
     * @param container A container of a class type for which member {@link end} is defined.
     * @return The same as returned by {@link end end()}.
     */
    function end<T>(container: base.Container<T>): Iterator<T>;
    function end<T>(container: Vector<T>): VectorIterator<T>;
    function end<T>(container: List<T>): ListIterator<T>;
    function end<T>(container: Deque<T>): DequeIterator<T>;
    function end<T>(container: base.SetContainer<T>): SetIterator<T>;
    function end<Key, T>(container: base.MapContainer<Key, T>): MapIterator<Key, T>;
    /**
     * Iterator to end.
     *
     * Returns an iterator pointing to the <i>past-the-end</i> element in the sequence.
     *
     * If the sequence is {@link empty}, the returned value compares equal to the one returned by {@link begin} with the same argument.
     *
     * @param container A container of a class type for which member {@link end} is defined.
     * @return The same as returned by {@link end end()}.
     */
    function rend<T>(container: base.Container<T>): base.IReverseIterator<T>;
    function rend<T>(container: Vector<T>): VectorReverseIterator<T>;
    function rend<T>(container: List<T>): ListReverseIterator<T>;
    function rend<T>(container: Deque<T>): DequeReverseIterator<T>;
    function rend<T>(container: base.SetContainer<T>): SetReverseIterator<T>;
    function rend<Key, T>(container: base.MapContainer<Key, T>): MapReverseIterator<Key, T>;
    /**
     * Make reverse iterator.
     *
     * @param it A reference of the base iterator, which iterates in the opposite direction.
     * @return A {@link ReverseIterator reverse iterator} based on *it*.
     */
    function make_reverse_iterator<T>(it: VectorIterator<T>): VectorReverseIterator<T>;
    function make_reverse_iterator<T>(it: DequeIterator<T>): DequeReverseIterator<T>;
    function make_reverse_iterator<T>(it: ListIterator<T>): ListReverseIterator<T>;
    function make_reverse_iterator<T>(it: SetIterator<T>): SetReverseIterator<T>;
    function make_reverse_iterator<Key, T>(it: MapIterator<Key, T>): MapReverseIterator<Key, T>;
}
declare namespace std.base {
    /**
     * @hidden
     */
    abstract class _ListContainer<T, BidirectionalIterator extends _ListIteratorBase<T>> extends Container<T> implements IDequeContainer<T> {
        /**
         * @hidden
         */
        private begin_;
        /**
         * @hidden
         */
        private end_;
        /**
         * @hidden
         */
        private size_;
        /**
         * Default Constructor.
         */
        protected constructor();
        /**
         * @hidden
         */
        protected abstract _Create_iterator(prev: BidirectionalIterator, next: BidirectionalIterator, val: T): BidirectionalIterator;
        /**
         * @hidden
         */
        protected _Set_begin(it: BidirectionalIterator): void;
        /**
         * @inheritdoc
         */
        assign<U extends T, InputIterator extends Iterator<U>>(first: InputIterator, last: InputIterator): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        begin(): BidirectionalIterator;
        /**
         * @inheritdoc
         */
        end(): BidirectionalIterator;
        /**
         * @inheritdoc
         */
        size(): number;
        /**
         * @inheritdoc
         */
        front(): T;
        /**
         * @inheritdoc
         */
        back(): T;
        /**
         * @inheritdoc
         */
        push_front(val: T): void;
        /**
         * @inheritdoc
         */
        push_back(val: T): void;
        /**
         * @inheritdoc
         */
        pop_front(): void;
        /**
         * @inheritdoc
         */
        pop_back(): void;
        /**
         * @inheritdoc
         */
        push(...items: T[]): number;
        /**
         * Insert an element.
         *
         * The container is extended by inserting a new element before the element at the specified
         * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
         * inserted.
         *
         * Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
         * inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param position Position in the container where the new element is inserted.
         *				   {@link iterator}> is a member type, defined as a
         *				   {@link ListIterator bidirectional iterator} type that points to elements.
         * @param val Value to be inserted as an element.
         *
         * @return An iterator that points to the newly inserted element; <i>val</i>.
         */
        insert(position: BidirectionalIterator, val: T): BidirectionalIterator;
        /**
         * Insert elements by repeated filling.
         *
         * The container is extended by inserting a new element before the element at the specified
         * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
         * inserted.
         *
         * Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
         * inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param position Position in the container where the new elements are inserted. The {@link iterator} is a
         *				   member type, defined as a {@link ListIterator bidirectional iterator} type that points to
         *				   elements.
         * @param size Number of elements to insert.
         * @param val Value to be inserted as an element.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert(position: BidirectionalIterator, size: number, val: T): BidirectionalIterator;
        /**
         * Insert elements by range iterators.
         *
         * The container is extended by inserting a new element before the element at the specified
         * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
         * inserted.
         *
         * Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
         * inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param position Position in the container where the new elements are inserted. The {@link iterator} is a
         *				   member type, defined as a {@link ListIterator bidirectional iterator} type that points to
         *				   elements.
         * @param begin An iterator specifying range of the begining element.
         * @param end An iterator specifying range of the ending element.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert<U extends T, InputIterator extends Iterator<U>>(position: BidirectionalIterator, begin: InputIterator, end: InputIterator): BidirectionalIterator;
        /**
         * @hidden
         */
        private _Insert_by_repeating_val(position, n, val);
        /**
         * @hidden
         */
        protected _Insert_by_range<U extends T, InputIterator extends Iterator<U>>(position: BidirectionalIterator, begin: InputIterator, end: InputIterator): BidirectionalIterator;
        /**
         * Erase an element.
         *
         * Removes from the {@link List} either a single element; <i>position</i>.
         *
         * This effectively reduces the container size by the number of element removed.
         *
         * Unlike other standard sequence containers, {@link List} objects are specifically designed to be
         * efficient inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param position Iterator pointing to a single element to be removed from the {@link List}.
         *
         * @return An iterator pointing to the element that followed the last element erased by the function call.
         *		   This is the {@link end end()} if the operation erased the last element in the sequence.
         */
        erase(position: BidirectionalIterator): BidirectionalIterator;
        /**
         * Erase elements.
         *
         * Removes from the {@link List} container a range of elements.
         *
         * This effectively reduces the container {@link size} by the number of elements removed.
         *
         * Unlike other standard sequence containers, {@link List} objects are specifically designed to be
         * efficient inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param begin An iterator specifying a range of beginning to erase.
         * @param end An iterator specifying a range of end to erase.
         *
         * @return An iterator pointing to the element that followed the last element erased by the function call.
         *		   This is the {@link end end()} if the operation erased the last element in the sequence.
         */
        erase(begin: BidirectionalIterator, end: BidirectionalIterator): BidirectionalIterator;
        /**
         * @hidden
         */
        protected _Erase_by_range(first: BidirectionalIterator, last: BidirectionalIterator): BidirectionalIterator;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link List container} object with same type of elements. Sizes and container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were in <i>obj</i>
         * before the call, and the elements of <i>obj</i> are those which were in this. All iterators, references and
         * pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link List container} of the same type of elements (i.e., instantiated
         *			  with the same template parameter, <b>T</b>) whose content is swapped with that of this
         *			  {@link List container}.
         */
        swap(obj: _ListContainer<T, BidirectionalIterator>): void;
        /**
         * @inheritdoc
         */
        swap(obj: Container<T>): void;
    }
}
declare namespace std.base {
    /**
     * @hidden
     */
    abstract class _ListIteratorBase<T> extends Iterator<T> {
        /**
         * @hidden
         */
        protected prev_: _ListIteratorBase<T>;
        /**
         * @hidden
         */
        protected next_: _ListIteratorBase<T>;
        /**
         * @hidden
         */
        protected value_: T;
        /**
         * Initializer Constructor.
         *
         * @param source The source {@link Container} to reference.
         * @param prev A refenrece of previous node ({@link ListIterator iterator}).
         * @param next A refenrece of next node ({@link ListIterator iterator}).
         * @param value Value to be stored in the node (iterator).
         */
        protected constructor(source: Container<T>, prev: _ListIteratorBase<T>, next: _ListIteratorBase<T>, value: T);
        /**
         * @inheritdoc
         */
        prev(): _ListIteratorBase<T>;
        /**
         * @inheritdoc
         */
        next(): _ListIteratorBase<T>;
        /**
         * @inheritdoc
         */
        advance(step: number): _ListIteratorBase<T>;
        /**
         * @inheritdoc
         */
        readonly value: T;
        /**
         * @inheritdoc
         */
        equals(obj: _ListIteratorBase<T>): boolean;
        /**
         * @inheritdoc
         */
        swap(obj: _ListIteratorBase<T>): void;
    }
}
declare namespace std.base {
    /**
     * An abstract error instance.
     *
     * {@link ErrorInstance} is an abstract class of {@link ErrorCode} and {@link ErrorCondition}
     * holding an error instance's identifier {@link value}, associated with a {@link category}.
     *
     * The operating system and other low-level applications and libraries generate numerical error codes to
     * represent possible results. These numerical values may carry essential information for a specific platform,
     * but be non-portable from one platform to another.
     *
     * Objects of this class associate such numerical codes to {@link ErrorCategory error categories},
     * so that they can be interpreted when needed as more abstract (and portable)
     * {@link ErrorCondition error conditions}.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ErrorInstance {
        /**
         * @hidden
         */
        protected category_: ErrorCategory;
        /**
         * @hidden
         */
        protected value_: number;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from a numeric value and error category.
         *
         * @param val A numerical value identifying an error instance.
         * @param category A reference to an {@link ErrorCategory} object.
         */
        constructor(val: number, category: ErrorCategory);
        /**
         * Assign error instance.
         *
         * Assigns the {@link ErrorCode} object a value of val associated with the {@link ErrorCategory}.
         *
         * @param val A numerical value identifying an error instance.
         * @param category A reference to an {@link ErrorCategory} object.
         */
        assign(val: number, category: ErrorCategory): void;
        /**
         * Clear error instance.
         *
         * Clears the value in the {@link ErrorCode} object so that it is set to a value of <i>0</i> of the
         * {@link ErrorCategory.systemCategory ErrorCategory.systemCategory()} (indicating no error).
         */
        clear(): void;
        /**
         * Get category.
         *
         * Returns a reference to the {@link ErrorCategory} associated with the {@link ErrorCode} object.
         *
         * @return A reference to a non-copyable object of a type derived from {@link ErrorCategory}.
         */
        category(): ErrorCategory;
        /**
         * Error value.
         *
         * Returns the error value associated with the {@link ErrorCode} object.
         *
         * @return The error value.
         */
        value(): number;
        /**
         * Get message.
         *
         * Returns the message associated with the error instance.
         *
         * Error messages are defined by the {@link category} the error instance belongs to.
         *
         * This function returns the same as if the following member was called:
         *
         * <code>category().message(value())</code>
         *
         * @return A string object with the message associated with the {@link ErrorCode}.
         */
        message(): string;
        /**
         * Default error condition.
         *
         * Returns the default {@link ErrorCondition}object associated with the {@link ErrorCode} object.
         *
         * This function returns the same as if the following member was called:
         *
         * <code>category().default_error_condition(value())</code>
         *
         * {@link ErrorCategory.default_error_condition ErrorCategory.default_error_condition()}
         * is a virtual member function, that can operate differently for each category.
         *
         * @return An {@link ErrorCondition}object that corresponds to the {@link ErrorCode} object.
         */
        default_error_condition(): ErrorCondition;
        /**
         * Convert to bool.
         *
         * Returns whether the error instance has a numerical {@link value} other than 0.
         *
         * If it is zero (which is generally used to represent no error), the function returns false, otherwise it returns true.
         *
         * @return <code>true</code> if the error's numerical value is not zero.
         *		   <code>false</code> otherwise.
         */
        to_bool(): boolean;
    }
}
declare namespace std.base {
    /**
     * @hidden
     */
    enum _Hash {
        MIN_SIZE = 10,
        RATIO = 1,
        MAX_RATIO = 2,
    }
    /**
     * @hidden
     */
    abstract class _HashBuckets<T> {
        private buckets_;
        private item_size_;
        protected constructor();
        rehash(size: number): void;
        clear(): void;
        size(): number;
        item_size(): number;
        capacity(): number;
        at(index: number): Vector<T>;
        hash_index(val: T): number;
        insert(val: T): void;
        erase(val: T): void;
    }
}
declare namespace std.base {
    /**
     * @hidden
     */
    class _MapHashBuckets<K, T> extends _HashBuckets<MapIterator<K, T>> {
        private map_;
        constructor(map: IHashMap<K, T>);
        find(key: K): MapIterator<K, T>;
    }
}
declare namespace std.base {
    /**
     * @hidden
     */
    class _SetHashBuckets<T> extends _HashBuckets<SetIterator<T>> {
        private set_;
        constructor(set: IHashSet<T>);
        find(val: T): SetIterator<T>;
    }
}
declare namespace std.base {
    /**
     * Array Container.
     *
     * {@link IArrayContainer} is an interface for sequence containers representing <i>arrays</i> that can change in
     * {@link size}. However, compared to <i>arrays</i>, {@link IArrayContainer} objectss consume more memory in exchange for
     * the ability to manage storage and grow dynamically in an efficient way.
     *
     * Both {@link Vector Vectors} and {@link Deque Deques} who implemented {@link IArrayContainer} provide a very
     * similar interface and can be used for similar purposes, but internally both work in quite different ways:
     * While {@link Vector Vectors} use a single array that needs to be occasionally reallocated for growth, the
     * elements of a {@link Deque} can be scattered in different chunks of storage, with the container keeping the
     * necessary information internally to provide direct access to any of its elements in constant time and with a
     * uniform sequential interface (through iterators). Therefore, {@link Deque Deques} are a little more complex
     * internally than {@link Vector Vectors}, but this allows them to grow more efficiently under certain
     * circumstances, especially with very long sequences, where reallocations become more expensive.
     *
     * Both {@link Vector Vectors} and {@link Deque Deques} provide a very similar interface and can be used for
     * similar purposes, but internally both work in quite different ways: While {@link Vector Vectors} use a single
     * array that needs to be occasionally reallocated for growth, the elements of a {@link Deque} can be scattered
     * in different chunks of storage, with the container keeping the necessary information internally to provide
     * direct access to any of its elements in constant time and with a uniform sequential interface (through
     * iterators). Therefore, {@link Deque Deques} are a little more complex internally than {@link Vector Vectors},
     * but this allows them to grow more efficiently under certain circumstances, especially with very long
     * sequences, where reallocations become more expensive.
     *
     * For operations that involve frequent insertion or removals of elements at positions other than the
     * beginning or the end, {@link IArrayContainer} objects perform worse and have less consistent iterators and references
     * than {@link List Lists}.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" />
     * </a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Sequence </dt>
     *	<dd>
     *		Elements in sequence containers are ordered in a strict linear sequence. Individual elements are
     *		accessed by their position in this sequence.
     *	</dd>
     *
     *	<dt> Dynamic array </dt>
     *	<dd>
     *		Allows direct access to any element in the sequence, even through pointer arithmetics, and provides
     *		relatively fast addition/removal of elements at the end of the sequence.
     *	</dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IArrayContainer<T> extends ILinearContainer<T> {
        /**
         * Access element.
         * Returns a value to the element at position <i>index</i> in the {@link IArrayContainer container}.</p>
         *
         * The function automatically checks whether <i>index</i> is within the bounds of valid elements
         * in the {@link IArrayContainer container}, throwing an {@link OutOfRange} exception if it is not (i.e.,
         * if <i>index</i> is greater or equal than its {@link size}).
         *
         * @param index Position of an element in the
         *				If this is greater than or equal to the {@link IArrayContainer container} {@link size}, an
         *				exception of type {@link OutOfRange} is thrown. Notice that the first
         *				element has a position of 0 (not 1).
         *
         * @return The element at the specified position in the
         */
        at(index: number): T;
        /**
         * Modify element.
         * Replaces an element at the specified position (<i>index</i>) in this {@link IArrayContainer container}
         * with the specified element (<i>val</i>).
         *
         * The function automatically checks whether <i>index</i> is within the bounds of valid elements
         * in the {@link IArrayContainer container}, throwing an {@link OutOfRange} exception if it is not (i.e., if
         * <i>index</i> is greater or equal than its {@link size}).
         *
         * @.param index A specified position of the value to replace.
         * @param val A value to be stored at the specified position.
         *
         * @return The previous element had stored at the specified position.
         */
        set(index: number, val: T): void;
    }
    /**
     * Random-access iterator.
     *
     * {@link IArrayIterator Random-access iterators} are iterators that can be used to access elements at an
     * arbitrary offset position relative to the element they point to, offering the same functionality as pointers.
     *
     * {@link IArrayIterator Random-access iterators} are the most complete iterators in terms of functionality.
     * All pointer types are also valid {@link IArrayIterator random-access iterators}.
     *
     * There is not a single type of {@link IArrayIterator random-access iterator}: Each container may define its
     * own specific iterator type able to iterate through it and access its elements.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" style="max-width: 100%" />
     * </a>
     *
     * @reference http://www.cplusplus.com/reference/iterator/RandomAccessIterator
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IArrayIterator<T> extends ILinearIterator<T> {
        /**
         * @inheritdoc
         */
        source(): IArrayContainer<T>;
        /**
         * Get index, sequence number of the iterator in the source {@link IArrayContainer array}.
         *
         * @return Sequence number of the iterator in the source {@link IArrayContainer array}.
         */
        index(): number;
        /**
         * @inheritdoc
         */
        prev(): IArrayIterator<T>;
        /**
         * @inheritdoc
         */
        next(): IArrayIterator<T>;
    }
}
declare namespace std.base {
    /**
     * An interface for deque
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" style="max-width: 100%" />
     * </a>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IDequeContainer<T> extends ILinearContainer<T> {
        /**
         * Insert element at beginning.
         *
         * Inserts a new element at the beginning of the {@link IDeque container}, right before its
         * current first element. This effectively increases the {@link IDeque container} {@link size} by
         * one.
         *
         * @param val Value to be inserted as an element.
         */
        push_front(val: T): void;
        /**
         * Delete first element.
         *
         * Removes the first element in the {@link IDeque container}, effectively reducing its
         * {@link size} by one.
         */
        pop_front(): void;
    }
}
declare namespace std.base {
    /**
     * Common interface for hash map.
     *
     * {@link IHashMap}s are associative containers that store elements formed by the combination of
     * a <i>key value</i> and a <i>mapped value</i>.
     *
     * In an {@link IHashMap}, the <i>key value</i> is generally used to uniquely identify the
     * element, while the <i>mapped value</i> is an object with the content associated to this <i>key</i>.
     * Types of <i>key</i> and <i>mapped value</i> may differ.
     *
     * Internally, the elements in the {@link IHashMap} are not sorted in any particular order with
     * respect to either their <i>key</i> or <i>mapped values</i>, but organized into <i>buckets</i> depending on
     * their hash values to allow for fast access to individual elements directly by their <i>key values</i>
     * (with a constant average time complexity on average).
     *
     * Elements with equivalent <i>keys</i> are grouped together in the same bucket and in such a way that
     * an iterator can iterate through all of them. Iterators in the container are doubly linked iterators.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /> </a>
     *
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Hashed </dt>
     *	<dd> Hashed containers organize their elements using hash tables that allow for fast access to elements
     *		 by their <i>key</i>. </dd>
     *
     *	<dt> Map </dt>
     *	<dd> Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		 <i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>. </dd>
     * </dl>
     *
     * @param <Key> Type of the key values.
     *				Each element in an {@link IHashMap} is identified by a key value.
     * @param <T> Type of the mapped value.
     *			  Each element in an {@link IHashMap} is used to store some data as its mapped value.
     *
     * @reference http://www.cplusplus.com/reference/unordered_map
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IHashMap<Key, T> extends MapContainer<Key, T> {
        /**
         * Return number of buckets.
         *
         * Returns the number of buckets in the {@link IHashMap} container.
         *
         * A bucket is a slot in the container's internal hash table to which elements are assigned based on the
         * hash value of their key.
         *
         * The number of buckets influences directly the {@link load_factor load factor} of the container's hash
         * table (and thus the probability of collision). The container automatically increases the number of buckets to
         * keep the load factor below a specific threshold (its {@link max_load_factor}), causing a {@link rehash} each
         * time the number of buckets needs to be increased.
         *
         * @return The current amount of buckets.
         */
        bucket_count(): number;
        /**
         * Return bucket size.
         *
         * Returns the number of elements in bucket <i>n</i>.
         *
         * A bucket is a slot in the container's internal hash table to which elements are assigned based on the hash
         * value of their key.
         *
         * The number of elements in a bucket influences the time it takes to access a particular element in the
         * bucket. The container automatically increases the number of buckets to keep the {@link load_cator load factor}
         * (which is the average bucket size) below its {@link max_load_factor}.
         *
         * @param n Bucket number. This shall be lower than {@link bucket_count}.
         *
         * @return The number of elements in bucket <i>n</i>.
         */
        bucket_size(n: number): number;
        /**
         * Get maximum load factor.
         *
         * Returns the current maximum load factor for the {@link HashMultiMap} container.
         *
         * The load factor is the ratio between the number of elements in the container (its {@link size}) and the
         * number of buckets ({@link bucket_count}).
         *
         * By default, {@link HashMultiMap} containers have a {@link max_load_factor} of 1.0.
         *
         * The load factor influences the probability of collision in the hash table (i.e., the probability of two
         * elements being located in the same bucket). The container uses the value of max_load_factor as the threshold
         * that forces an increase in the number of buckets (and thus causing a {@link rehash}).
         *
         * Note though, that implementations may impose an upper limit on the number of buckets (see
         * {@link max_bucket_count}), which may force the container to ignore the {@link max_load_factor}.
         *
         * @return The current load factor.
         */
        max_load_factor(): number;
        /**
         * Set maximum load factor.
         *
         * Sets <i>z</i> as the cnew maximum load factor for the {@link HashMultiMap} container.
         *
         * The load factor is the ratio between the number of elements in the container (its {@link size}) and the
         * number of buckets ({@link bucket_count}).
         *
         * By default, {@link HashMultiMap} containers have a {@link max_load_factor} of 1.0.
         *
         * The load factor influences the probability of collision in the hash table (i.e., the probability of two
         * elements being located in the same bucket). The container uses the value of max_load_factor as the threshold
         * that forces an increase in the number of buckets (and thus causing a {@link rehash}).
         *
         * Note though, that implementations may impose an upper limit on the number of buckets (see
         * {@link max_bucket_count}), which may force the container to ignore the {@link max_load_factor}.
         *
         * @param z The new maximum load factor.
         */
        max_load_factor(z: number): void;
        /**
         * Locate element's bucket.
         *
         * Returns the bucket number where the element with <i>key</i> is located.
         *
         * A bucket is a slot in the container's internal hash table to which elements are assigned based on the
         * hash value of their <i>key</i>. Buckets are numbered from 0 to ({@link bucket_count} - 1).
         *
         * Individual elements in a bucket can be accessed by means of the range iterators returned by
         * {@link begin} and {@link end}.
         *
         * @param key Key whose bucket is to be located.
         */
        bucket(key: Key): number;
        /**
         * Request a capacity change.
         *
         * Sets the number of buckets in the container ({@link bucket_count}) to the most appropriate to contain at
         * least <i>n</i> elements.
         *
         * If <i>n</i> is greater than the current {@link bucket_count} multiplied by the {@link max_load_factor},
         * the container's {@link bucket_count} is increased and a {@link rehash} is forced.
         *
         * If <i>n</i> is lower than that, the function may have no effect.
         *
         * @param n The number of elements requested as minimum capacity.
         */
        reserve(n: number): void;
        /**
         * Set number of buckets.
         *
         * Sets the number of buckets in the container to <i>n</i> or more.
         *
         * If <i>n</i> is greater than the current number of buckets in the container ({@link bucket_count}), a
         * {@link HashBuckets.rehash rehash} is forced. The new {@link bucket_count bucket count} can either be equal or
         * greater than <i>n</i>.
         *
         * If <i>n</i> is lower than the current number of buckets in the container ({@link bucket_count}), the
         * function may have no effect on the {@link bucket_count bucket count} and may not force a
         * {@link HashBuckets.rehash rehash}.
         *
         * A {@link HashBuckets.rehash rehash} is the reconstruction of the hash table: All the elements in the
         * container are rearranged according to their hash value into the new set of buckets. This may alter the order
         * of iteration of elements within the container.
         *
         * {@link HashBuckets.rehash Rehashes} are automatically performed by the container whenever its
         * {@link load_factor load factor} is going to surpass its {@link max_load_factor} in an operation.
         *
         * Notice that this function expects the number of buckets as argument. A similar function exists,
         * {@link reserve}, that expects the number of elements in the container as argument.
         *
         * @param n The minimum number of buckets for the container hash table.
         */
        rehash(n: number): void;
    }
}
declare namespace std.base {
    /**
     * A common interface for hash set.
     *
     * {@link IHashSet}s are containers that store unique elements in no particular order, and which
     * allow for fast retrieval of individual elements based on their value.
     *
     * In an {@link IHashSet}, the value of an element is at the same time its <i>key</i>, that
     * identifies it uniquely. Keys are immutable, therefore, the elements in an {@link IHashSet} cannot be
     * modified once in the container - they can be inserted and removed, though.
     *
     * Internally, the elements in the {@link IHashSet} are not sorted in any particular order, but
     * organized into buckets depending on their hash values to allow for fast access to individual elements
     * directly by their <i>values</i> (with a constant average time complexity on average).
     *
     * {@link IHashSet} containers are faster than {@link TreeSet} containers to access individual
     * elements by their <i>key</i>, although they are generally less efficient for range iteration through a
     * subset of their elements.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/set_containers.png" style="max-width: 100%" /> </a>
     *
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Hashed </dt>
     *	<dd> Hashed containers organize their elements using hash tables that allow for fast access to elements
     *		 by their <i>key</i>. </dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *			  Each element in an {@link IHashSet} is also uniquely identified by this value.
     *
     * @reference http://www.cplusplus.com/reference/unordered_set/unordered_set
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IHashSet<T> extends SetContainer<T> {
        /**
         * Return number of buckets.
         *
         * Returns the number of buckets in the {@link IHashSet} container.
         *
         * A bucket is a slot in the container's internal hash table to which elements are assigned based on the
         * hash value of their key.
         *
         * The number of buckets influences directly the {@link load_factor load factor} of the container's hash
         * table (and thus the probability of collision). The container automatically increases the number of buckets to
         * keep the load factor below a specific threshold (its {@link max_load_factor}), causing a {@link rehash} each
         * time the number of buckets needs to be increased.
         *
         * @return The current amount of buckets.
         */
        bucket_count(): number;
        /**
         * Return bucket size.
         *
         * Returns the number of elements in bucket <i>n</i>.
         *
         * A bucket is a slot in the container's internal hash table to which elements are assigned based on the hash
         * value of their key.
         *
         * The number of elements in a bucket influences the time it takes to access a particular element in the
         * bucket. The container automatically increases the number of buckets to keep the {@link load_cator load factor}
         * (which is the average bucket size) below its {@link max_load_factor}.
         *
         * @param n Bucket number. This shall be lower than {@link bucket_count}.
         *
         * @return The number of elements in bucket <i>n</i>.
         */
        bucket_size(n: number): number;
        /**
         * Get maximum load factor.
         *
         * Returns the current maximum load factor for the {@link HashMultiMap} container.
         *
         * The load factor is the ratio between the number of elements in the container (its {@link size}) and the
         * number of buckets ({@link bucket_count}).
         *
         * By default, {@link HashMultiMap} containers have a {@link max_load_factor} of 1.0.
         *
         * The load factor influences the probability of collision in the hash table (i.e., the probability of two
         * elements being located in the same bucket). The container uses the value of max_load_factor as the threshold
         * that forces an increase in the number of buckets (and thus causing a {@link rehash}).
         *
         * Note though, that implementations may impose an upper limit on the number of buckets (see
         * {@link max_bucket_count}), which may force the container to ignore the {@link max_load_factor}.
         *
         * @return The current load factor.
         */
        max_load_factor(): number;
        /**
         * Set maximum load factor.
         *
         * Sets <i>z</i> as the cnew maximum load factor for the {@link HashMultiMap} container.
         *
         * The load factor is the ratio between the number of elements in the container (its {@link size}) and the
         * number of buckets ({@link bucket_count}).
         *
         * By default, {@link HashMultiMap} containers have a {@link max_load_factor} of 1.0.
         *
         * The load factor influences the probability of collision in the hash table (i.e., the probability of two
         * elements being located in the same bucket). The container uses the value of max_load_factor as the threshold
         * that forces an increase in the number of buckets (and thus causing a {@link rehash}).
         *
         * Note though, that implementations may impose an upper limit on the number of buckets (see
         * {@link max_bucket_count}), which may force the container to ignore the {@link max_load_factor}.
         *
         * @param z The new maximum load factor.
         */
        max_load_factor(z: number): void;
        /**
         * Locate element's bucket.
         *
         * Returns the bucket number where the element with <i>key</i> is located.
         *
         * A bucket is a slot in the container's internal hash table to which elements are assigned based on the
         * hash value of their <i>key</i>. Buckets are numbered from 0 to ({@link bucket_count} - 1).
         *
         * Individual elements in a bucket can be accessed by means of the range iterators returned by
         * {@link begin} and {@link end}.
         *
         * @param key Key whose bucket is to be located.
         */
        bucket(key: T): number;
        /**
         * Request a capacity change.
         *
         * Sets the number of buckets in the container ({@link bucket_count}) to the most appropriate to contain at
         * least <i>n</i> elements.
         *
         * If <i>n</i> is greater than the current {@link bucket_count} multiplied by the {@link max_load_factor},
         * the container's {@link bucket_count} is increased and a {@link rehash} is forced.
         *
         * If <i>n</i> is lower than that, the function may have no effect.
         *
         * @param n The number of elements requested as minimum capacity.
         */
        reserve(n: number): void;
        /**
         * Set number of buckets.
         *
         * Sets the number of buckets in the container to <i>n</i> or more.
         *
         * If <i>n</i> is greater than the current number of buckets in the container ({@link bucket_count}), a
         * {@link HashBuckets.rehash rehash} is forced. The new {@link bucket_count bucket count} can either be equal or
         * greater than <i>n</i>.
         *
         * If <i>n</i> is lower than the current number of buckets in the container ({@link bucket_count}), the
         * function may have no effect on the {@link bucket_count bucket count} and may not force a
         * {@link HashBuckets.rehash rehash}.
         *
         * A {@link HashBuckets.rehash rehash} is the reconstruction of the hash table: All the elements in the
         * container are rearranged according to their hash value into the new set of buckets. This may alter the order
         * of iteration of elements within the container.
         *
         * {@link HashBuckets.rehash Rehashes} are automatically performed by the container whenever its
         * {@link load_factor load factor} is going to surpass its {@link max_load_factor} in an operation.
         *
         * Notice that this function expects the number of buckets as argument. A similar function exists,
         * {@link reserve}, that expects the number of elements in the container as argument.
         *
         * @param n The minimum number of buckets for the container hash table.
         */
        rehash(n: number): void;
    }
}
declare namespace std.base {
    /**
     * An interface for linear containers.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
     *
     *
     * @author Jeonngho Nam
     */
    interface ILinearContainer<T> extends Container<T> {
        /**
         * @inheritdoc
         */
        assign<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
        /**
         * Assign container content.
         *
         * Assigns new contents to the {@link IList container}, replacing its current contents,
         * and modifying its {@link size} accordingly.
         *
         * @param n New size for the
         * @param val Value to fill the container with. Each of the <u>n</u> elements in the container will
         *			  be initialized to a copy of this value.
         */
        assign(n: number, val: T): void;
        /**
         * Access first element.
         * Returns a value of the first element in the {@link IList container}.
         *
         * Unlike member {@link end end()}, which returns an iterator just past this element,
         * this function returns a direct value.
         *
         * Calling this function on an {@link empty} {@link IList container} causes undefined behavior.
         *
         * @return A value of the first element of the {@link IList container}.
         */
        front(): T;
        /**
         * Access last element.
         * Returns a value of the last element in the {@link IList container}.
         *
         * Unlike member {@link end end()}, which returns an iterator just past this element,
         * this function returns a direct value.
         *
         * Calling this function on an {@link empty} {@link IList container} causes undefined behavior.
         *
         * @return A value of the last element of the {@link IList container}.
         */
        back(): T;
        /**
         * Add element at the end.
         *
         * Adds a new element at the end of the {@link IList container}, after its current last element.
         * This effectively increases the {@link IList container} {@link size} by one.
         *
         * @param val Value to be copied to the new element.
         */
        push_back(val: T): void;
        /**
         * Delete last element.
         *
         * Removes the last element in the {@link IList container}, effectively reducing the
         * {@link IList container} {@link size} by one.
         */
        pop_back(): void;
        /**
         * Insert an element.
         *
         * The {@link IList conatiner} is extended by inserting new element before the element at the
         * specified <i>position</i>, effectively increasing the {@link IList container} {@link size} by
         * one.
         *
         * @param position Position in the {@link IList container} where the new elements are inserted.
         *				   {@link iterator} is a member type, defined as a {@link iterator random access iterator}
         *				   type that points to elements.
         * @param val Value to be copied to the inserted element.
         *
         * @return An iterator that points to the newly inserted element.
         */
        insert(position: Iterator<T>, val: T): Iterator<T>;
        /**
         * Insert elements by range iterators.
         *
         * The {@link IList container} is extended by inserting new elements before the element at the
         * specified <i>position</i>, effectively increasing the {@link IList container} {@link size} by
         * the number of repeating elements </i>n</i>.
         *
         * @param position Position in the {@link IList container} where the new elements are inserted.
         *				   {@link iterator} is a member type, defined as a {@link iterator random access iterator}
         *				   type that points to elements.
         * @param n Number of elements to insert. Each element is initialized to a copy of <i>val</i>.
         * @param val Value to be copied (or moved) to the inserted elements.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert(position: Iterator<T>, n: number, val: T): Iterator<T>;
        /**
         * Insert elements by range iterators.
         *
         * The {@link IList container} is extended by inserting new elements before the element at the
         * specified <i>position</i>, effectively increasing the {@link IList container} {@link size} by
         * the number of elements inserted by range iterators.
         *
         * @param position Position in the {@link IList container} where the new elements are inserted.
         *				   {@link iterator} is a member type, defined as a {@link iterator random access iterator}
         *				   type that points to elements.
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert<U extends T, InputIterator extends Iterator<U>>(position: Iterator<T>, begin: InputIterator, end: InputIterator): Iterator<T>;
    }
    /**
     * An interface for iterators from linear containers.
     *
     * {@link ILieanerIterator} is an bi-directional iterator which is created from the related
     * {@link ILinearContainer linear containers}. Not only accessing to {@link value} of the pointed element from
     * this {@link ILieanerIterator}, but also modifying the {@link value} is possible.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface ILinearIterator<T> extends Iterator<T> {
        /**
         * @inheritdoc
         */
        source(): ILinearContainer<T>;
        /**
         * @inheritdoc
         */
        value: T;
        /**
         * @inheritdoc
         */
        prev(): ILinearIterator<T>;
        /**
         * @inheritdoc
         */
        next(): ILinearIterator<T>;
    }
}
declare namespace std.base {
    /**
     * Common interface for tree-structured map.
     *
     * {@link ITreeMap ITreeMaps} are associative containers that store elements formed by a combination of
     * a <i>key value</i> and a <i>mapped value</i>, following a specific order.
     *
     * In a {@link ITreeMap}, the <i>key values</i> are generally used to sort and uniquely identify
     * the elements, while the <i>mapped values</i> store the content associated to this <i>key</i>. The types of
     * <i>key</i> and <i>mapped value</i> may differ, and are grouped together in member type
     * <code>value_type</code>, which is a {@link Pair} type combining both:
     *
     * <code>typedef Pair<const Key, T> value_type;</code>
     *
     * Internally, the elements in a {@link ITreeMap}are always sorted by its key following a
     * strict weak ordering criterion indicated by its internal comparison method (of {@link less}).
     *
     * {@link ITreeMap}containers are generally slower than {@link IHashMap} containers
     * to access individual elements by their <i>key</i>, but they allow the direct iteration on subsets based
     * on their order.
     *
     * {@link ITreeMap TreeMultiMaps} are typically implemented as binary search trees.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /></a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Ordered </dt>
     *	<dd> The elements in the container follow a strict order at all times. All inserted elements are
     *		 given a position in this order. </dd>
     *
     *	<dt> Map </dt>
     *	<dd> Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		 <i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>. </dd>
     * </dl>
     *
     * @param <Key> Type of the keys. Each element in a map is uniquely identified by its key value.
     * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
     *
     * @reference http://www.cplusplus.com/reference/map
     * @author Jeongho Nam <http://samchon.org>
     */
    interface ITreeMap<Key, T> extends MapContainer<Key, T> {
        /**
         * Return key comparison function.
         *
         * Returns a references of the comparison function used by the container to compare <i>keys</i>.
         *
         * The <i>comparison object</i> of a {@link ITreeMap tree-map object} is set on
         * {@link TreeMap.constructor construction}. Its type (<i>Key</i>) is the last parameter of the
         * {@link ITreeMap.constructor constructors}. By default, this is a {@link less} function, which returns the same
         * as <i>operator&lt;</i>.
         *
         * This function determines the order of the elements in the container: it is a function pointer that takes
         * two arguments of the same type as the element <i>keys</i>, and returns <code>true</code> if the first argument
         * is considered to go before the second in the strict weak ordering it defines, and <code>false</code> otherwise.
         *
         *
         * Two keys are considered equivalent if {@link key_comp} returns <code>false</code> reflexively (i.e., no
         * matter the order in which the keys are passed as arguments).
         *
         * @return The comparison function.
         */
        key_comp(): (x: Key, y: Key) => boolean;
        /**
         * Return value comparison function.
         *
         * Returns a comparison function that can be used to compare two elements to get whether the key of the first
         * one goes before the second.
         *
         * The arguments taken by this function object are of member type <code>Pair<Key, T></code> (defined in
         * {@link ITreeMap}), but the mapped type (<i>T</i>) part of the value is not taken into consideration in this
         * comparison.
         *
         * This comparison class returns <code>true</code> if the {@link Pair.first key} of the <i>first argument</i>
         * is considered to go before that of the <i>second</i> (according to the strict weak ordering specified by the
         * container's comparison function, {@link key_comp}), and <code>false</code> otherwise.
         *
         * @return The comparison function for element values.
         */
        value_comp(): (x: Pair<Key, T>, y: Pair<Key, T>) => boolean;
        /**
         * Return iterator to lower bound.
         *
         * Returns an iterator pointing to the first element in the container whose key is not considered to
         * go before <i>k</i> (i.e., either it is equivalent or goes after).
         *
         * The function uses its internal comparison object (key_comp) to determine this, returning an
         * iterator to the first element for which key_comp(<i>k</i>, element_key) would return false.
         *
         * If the {@link ITreeMap} class is instantiated with the default comparison type ({@link less}),
         * the function returns an iterator to the first element whose key is not less than <i>k</i>.
         *
         * A similar member function, {@link upper_bound}, has the same behavior as {@link lower_bound}, except
         * in the case that the {@link ITreeMap} contains an element with a key equivalent to <i>k</i>: In this
         * case, {@link lower_bound} returns an iterator pointing to that element, whereas {@link upper_bound}
         * returns an iterator pointing to the next element.
         *
         * @param k Key to search for.
         *
         * @return An iterator to the the first element in the container whose key is not considered to go before
         *		   <i>k</i>, or {@link ITreeMap.end} if all keys are considered to go before <i>k</i>.
         */
        lower_bound(key: Key): MapIterator<Key, T>;
        /**
         * Return iterator to upper bound.
         *
         * Returns an iterator pointing to the first element in the container whose key is considered to
         * go after <i>k</i>.
         *
         * The function uses its internal comparison object (key_comp) to determine this, returning an
         * iterator to the first element for which key_comp(<i>k</i>, element_key) would return true.
         *
         * If the {@link ITreeMap} class is instantiated with the default comparison type ({@link less}),
         * the function returns an iterator to the first element whose key is greater than <i>k</i>.
         *
         * A similar member function, {@link lower_bound}, has the same behavior as {@link upper_bound}, except
         * in the case that the map contains an element with a key equivalent to <i>k</i>: In this case
         * {@link lower_bound} returns an iterator pointing to that element, whereas {@link upper_bound} returns an
         * iterator pointing to the next element.
         *
         * @param k Key to search for.
         *
         * @return An iterator to the the first element in the container whose key is considered to go after
         *		   <i>k</i>, or {@link TreeMap.end end} if no keys are considered to go after <i>k</i>.
         */
        upper_bound(key: Key): MapIterator<Key, T>;
        /**
         * Get range of equal elements.
         *
         * Returns the bounds of a range that includes all the elements in the container which have a key
         * equivalent to <i>k</i>.
         *
         * If no matches are found, the range returned has a length of zero, with both iterators pointing to
         * the first element that has a key considered to go after <i>k</i> according to the container's internal
         * comparison object (key_comp).
         *
         * Two keys are considered equivalent if the container's comparison object returns false reflexively
         * (i.e., no matter the order in which the keys are passed as arguments).
         *
         * @param k Key to search for.
         *
         * @return The function returns a {@link Pair}, whose member {@link Pair.first} is the lower bound of
         *		   the range (the same as {@link lower_bound}), and {@link Pair.second} is the upper bound
         *		   (the same as {@link upper_bound}).
         */
        equal_range(key: Key): Pair<MapIterator<Key, T>, MapIterator<Key, T>>;
    }
}
declare namespace std.base {
    /**
     * A common interface for tree-structured set.
     *
     * {@link ITreeSet TreeMultiSets} are containers that store elements following a specific order.
     *
     * In a {@link ITreeSet}, the value of an element also identifies it (the value is itself
     * the <i>key</i>, of type <i>T</i>). The value of the elements in a {@link ITreeSet} cannot
     * be modified once in the container (the elements are always const), but they can be inserted or removed
     * from the
     *
     * Internally, the elements in a {@link ITreeSet TreeMultiSets} are always sorted following a strict
     * weak ordering criterion indicated by its internal comparison method (of {@link IComparable.less less}).
     *
     * {@link ITreeSet} containers are generally slower than {@link IHashSet} containers
     * to access individual elements by their <i>key</i>, but they allow the direct iteration on subsets based on
     * their order.
     *
     * {@link ITreeSet TreeMultiSets} are typically implemented as binary search trees.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /></a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		position in the container.
     *	</dd>
     *
     *	<dt> Ordered </dt>
     *	<dd>
     *		The elements in the container follow a strict order at all times. All inserted elements are
     *		given a position in this order.
     *	</dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     * </dl>
     *
     * @param <T> Type of the elements. Each element in a {@link ITreeSet} container is also identified
     *			  by this value (each value is itself also the element's <i>key</i>).
     *
     * @reference http://www.cplusplus.com/reference/set
     * @author Jeongho Nam <http://samchon.org>
     */
    interface ITreeSet<T> extends SetContainer<T> {
        /**
         * Return comparison function.
         *
         * Returns a copy of the comparison function used by the container.
         *
         * By default, this is a {@link less} object, which returns the same as <i>operator<</i>.
         *
         * This object determines the order of the elements in the container: it is a function pointer or a function
         * object that takes two arguments of the same type as the container elements, and returns <code>true</code> if
         * the <i>first argument</i> is considered to go before the <i>second</i> in the <i>strict weak ordering</i> it
         * defines, and <code>false</code> otherwise.
         *
         * Two elements of a {@link ITreeSet} are considered equivalent if {@link key_comp} returns <code>false</code>
         * reflexively (i.e., no matter the order in which the elements are passed as arguments).
         *
         * In {@link ITreeSet} containers, the <i>keys</i> to sort the elements are the values (<i>T</i>) themselves,
         * therefore {@link key_comp} and its sibling member function {@link value_comp} are equivalent.
         *
         * @return The comparison function.
         */
        key_comp(): (x: T, y: T) => boolean;
        /**
         * Return comparison function.
         *
         * Returns a copy of the comparison function used by the container.
         *
         * By default, this is a {@link less} object, which returns the same as <i>operator<</i>.
         *
         * This object determines the order of the elements in the container: it is a function pointer or a function
         * object that takes two arguments of the same type as the container elements, and returns <code>true</code> if
         * the <i>first argument</i> is considered to go before the <i>second</i> in the <i>strict weak ordering</i> it
         * defines, and <code>false</code> otherwise.
         *
         * Two elements of a {@link ITreeSet} are considered equivalent if {@link key_comp} returns <code>false</code>
         * reflexively (i.e., no matter the order in which the elements are passed as arguments).
         *
         * In {@link ITreeSet} containers, the <i>keys</i> to sort the elements are the values (<i>T</i>) themselves,
         * therefore {@link key_comp} and its sibling member function {@link value_comp} are equivalent.
         *
         * @return The comparison function.
         */
        value_comp(): (x: T, y: T) => boolean;
        /**
         * Return iterator to lower bound.
         *
         * Returns an iterator pointing to the first element in the container which is not considered to
         * go before <i>val</i> (i.e., either it is equivalent or goes after).
         *
         * The function uses its internal comparison object (key_comp) to determine this, returning an
         * iterator to the first element for which key_comp(element,val) would return false.
         *
         * If the {@link ITreeSet} class is instantiated with the default comparison type ({@link less}),
         * the function returns an iterator to the first element that is not less than <i>val</i>.

         * A similar member function, {@link upper_bound}, has the same behavior as {@link lower_bound}, except
         * in the case that the {@link ITreeSet} contains elements equivalent to <i>val</i>: In this case
         * {@link lower_bound} returns an iterator pointing to the first of such elements, whereas
         * {@link upper_bound} returns an iterator pointing to the element following the last.
         *
         * @param val Value to compare.
         *
         * @return An iterator to the the first element in the container which is not considered to go before
         *		   <i>val</i>, or {@link ITreeSet.end} if all elements are considered to go before <i>val</i>.
         */
        lower_bound(val: T): SetIterator<T>;
        /**
         * Return iterator to upper bound.
         *
         * Returns an iterator pointing to the first element in the container which is considered to go after
         * <i>val</i>.

         * The function uses its internal comparison object (key_comp) to determine this, returning an
         * iterator to the first element for which key_comp(val,element) would return true.

         * If the {@code ITreeSet} class is instantiated with the default comparison type (less), the
         * function returns an iterator to the first element that is greater than <i>val</i>.
         *
         * A similar member function, {@link lower_bound}, has the same behavior as {@link upper_bound}, except
         * in the case that the {@ITreeSet} contains elements equivalent to <i>val</i>: In this case
         * {@link lower_bound} returns an iterator pointing to the first of such elements, whereas
         * {@link upper_bound} returns an iterator pointing to the element following the last.
         *
         * @param val Value to compare.
         *
         * @return An iterator to the the first element in the container which is considered to go after
         *		   <i>val</i>, or {@link TreeSet.end end} if no elements are considered to go after <i>val</i>.
         */
        upper_bound(val: T): SetIterator<T>;
        /**
         * Get range of equal elements.
         *
         * Returns the bounds of a range that includes all the elements in the container that are equivalent
         * to <i>val</i>.
         *
         * If no matches are found, the range returned has a length of zero, with both iterators pointing to
         * the first element that is considered to go after val according to the container's
         * internal comparison object (key_comp).
         *
         * Two elements of a multiset are considered equivalent if the container's comparison object returns
         * false reflexively (i.e., no matter the order in which the elements are passed as arguments).
         *
         * @param key Value to search for.
         *
         * @return The function returns a {@link Pair}, whose member {@link Pair.first} is the lower bound of
         *		   the range (the same as {@link lower_bound}), and {@link Pair.second} is the upper bound
         *		   (the same as {@link upper_bound}).
         */
        equal_range(val: T): Pair<SetIterator<T>, SetIterator<T>>;
    }
}
declare namespace std.base {
    /**
     * @hidden
     */
    class _ArrayIterator<T> extends Iterator<T> {
        private data_;
        private index_;
        constructor(data: Array<T>, index: number);
        source(): Container<T>;
        index(): number;
        readonly value: T;
        prev(): _ArrayIterator<T>;
        next(): _ArrayIterator<T>;
        advance(n: number): _ArrayIterator<T>;
        equals(obj: _ArrayIterator<T>): boolean;
        swap(obj: _ArrayIterator<T>): void;
    }
}
declare namespace std.base {
    /**
     * @hidden
     */
    class _Repeater<T> extends Iterator<T> {
        private index_;
        private value_;
        constructor(index: number, value?: T);
        source(): base.Container<T>;
        index(): number;
        readonly value: T;
        prev(): _Repeater<T>;
        next(): _Repeater<T>;
        advance(n: number): _Repeater<T>;
        equals(obj: _Repeater<T>): boolean;
        swap(obj: _Repeater<T>): void;
    }
}
declare namespace std.base {
    /**
     * An abstract map.
     *
     * {@link MapContainer MapContainers} are associative containers that store elements formed by a combination
     * of a <i>key value</i> (<i>Key</i>) and a <i>mapped value</i> (<i>T</i>), and which allows for fast retrieval
     * of individual elements based on their keys.
     *
     * In a {@link MapContainer}, the <i>key values</i> are generally used to identify the elements, while the
     * <i>mapped values</i> store the content associated to this key. The types of <i>key</i> and
     * <i>mapped value</i> may differ, and are grouped together in member type <i>value_type</i>, which is a
     * {@link Pair} type combining both:
     *
     * <code>typedef pair<const Key, T> value_type;</code>
     *
     * {@link MapContainer} stores elements, keeps sequence and enables indexing by inserting elements into a
     * {@link List} and registering {@link ListIterator iterators} of the {@link data_ list container} to an index
     * table like {@link RBTree tree} or {@link HashBuckets hash-table}.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram" style="max-width: 100%" /></a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute position
     *		in the container.
     *	</dd>
     *
     *	<dt> Map </dt>
     *	<dd>
     *		Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		<i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>.
     *	</dd>
     * </dl>
     *
     * @param <Key> Type of the keys. Each element in a map is identified by its key value.
     * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class MapContainer<Key, T> extends Container<Pair<Key, T>> {
        /**
         * @hidden
         */
        private data_;
        /**
         * Default Constructor.
         */
        protected constructor();
        /**
         * @inheritdoc
         */
        assign<L extends Key, U extends T, InputIterator extends Iterator<Pair<L, U>>>(first: InputIterator, last: InputIterator): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * Get iterator to element.
         *
         * Searches the container for an element with a identifier equivalent to <i>key</i> and returns an
         * iterator to it if found, otherwise it returns an iterator to {@link end end()}.
         *
         * Two keys are considered equivalent if the container's comparison object returns false reflexively
         * (i.e., no matter the order in which the elements are passed as arguments).
         *
         * Another member functions, {@link has has()} and {@link count count()}, can be used to just check
         * whether a particular <i>key</i> exists.
         *
         * @param key Key to be searched for
         * @return An iterator to the element, if an element with specified <i>key</i> is found, or
         *		   {@link end end()} otherwise.
         */
        abstract find(key: Key): MapIterator<Key, T>;
        /**
         * Return iterator to beginning.
         *
         * Returns an iterator referring the first element in the
         *
         * #### Note
         * If the container is {@link empty}, the returned iterator is same with {@link end end()}.
         *
         * @return An iterator to the first element in the  The iterator containes the first element's value.
         */
        begin(): MapIterator<Key, T>;
        /**
         * Return iterator to end.
         * Returns an iterator referring to the past-the-end element in the
         *
         * The past-the-end element is the theoretical element that would follow the last element in the
         *  It does not point to any element, and thus shall not be dereferenced.
         *
         * Because the ranges used by functions of the container do not include the element reference by their
         * closing iterator, this function is often used in combination with {@link MapContainer}.{@link begin} to
         * specify a range including all the elements in the
         *
         * #### Note
         * Returned iterator from {@link MapContainer}.{@link end} does not refer any element. Trying to accessing
         * element by the iterator will cause throwing exception ({@link OutOfRange}).
         *
         * If the container is {@link empty}, this function returns the same as {@link begin}.
         *
         * @return An iterator to the end element in the
         */
        end(): MapIterator<Key, T>;
        /**
         * Return {@link MapReverseIterator reverse iterator} to <i>reverse beginning</i>.
         *
         * Returns a {@link MapReverseIterator reverse iterator} pointing to the last element in the container
         * (i.e., its <i>reverse beginning</i>).
         *
         * {@link MapReverseIterator Reverse iterators} iterate backwards: increasing them moves them towards the
         * beginning of the container.
         *
         * {@link rbegin} points to the element preceding the one that would be pointed to by member {@link end}.
         *7
         *
         * @return A {@link MapReverseIterator reverse iterator} to the <i>reverse beginning</i> of the sequence
         *
         */
        rbegin(): MapReverseIterator<Key, T>;
        /**
         * Return {@link MapReverseIterator reverse iterator} to <i>reverse end</i>.
         *
         * Returns a {@link MapReverseIterator reverse iterator} pointing to the theoretical element right before
         * the first element in the {@link MapContainer map container} (which is considered its <i>reverse end</i>).
         *
         *
         * The range between {@link MapContainer}.{@link rbegin} and {@link MapContainer}.{@link rend} contains
         * all the elements of the container (in reverse order).
         *
         * @return A {@link MapReverseIterator reverse iterator} to the <i>reverse end</i> of the sequence
         */
        rend(): MapReverseIterator<Key, T>;
        /**
         * Whether have the item or not.
         *
         * Indicates whether a map has an item having the specified identifier.
         *
         * @param key Key value of the element whose mapped value is accessed.
         *
         * @return Whether the map has an item having the specified identifier.
         */
        has(key: Key): boolean;
        /**
         * Count elements with a specific key.
         *
         * Searches the container for elements whose key is <i>key</i> and returns the number of elements found.
         *
         * @param key Key value to be searched for.
         *
         * @return The number of elements in the container with a <i>key</i>.
         */
        abstract count(key: Key): number;
        /**
         * Return the number of elements in the map.
         */
        size(): number;
        /**
         * @inheritdoc
         */
        push(...args: Pair<Key, T>[]): number;
        /**
         * @inheritdoc
         */
        push(...args: [Key, T][]): number;
        /**
         * Construct and insert element with hint
         *
         * Inserts a new element in the {@link MapContainer map container}. This new element is constructed in
         * place using *args* as the arguments for the element's constructor. *hint* points to a location in the
         * container suggested as a hint on where to start the search for its insertion point (the container may or
         * may not use this suggestion to optimize the insertion operation).
         *
         * A similar member function exists, {@link insert}, which either copies or moves an existing object into
         * the container, and may also take a position *hint*.
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param key The key used both to look up and to insert if not found.
         * @param value Value, the item.
         *
         * @return An iterator pointing to either the newly inserted element or to the element that already had an
         *		   equivalent key in the {@link MapContainer}.
         */
        emplace_hint(hint: MapIterator<Key, T>, key: Key, val: T): MapIterator<Key, T>;
        /**
         * Construct and insert element with hint
         *
         * Inserts a new element in the {@link MapContainer map container}. This new element is constructed in
         * place using *args* as the arguments for the element's constructor. *hint* points to a location in the
         * container suggested as a hint on where to start the search for its insertion point (the container may or
         * may not use this suggestion to optimize the insertion operation).
         *
         * A similar member function exists, {@link insert}, which either copies or moves an existing object into
         * the container, and may also take a position *hint*.
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param key The key used both to look up and to insert if not found.
         * @param value Value, the item.
         *
         * @return An {@link MapIterator iterator} pointing to either the newly inserted element or to the element
         *		   that already had an equivalent key in the {@link MapContainer}.
         */
        emplace_hint(hint: MapReverseIterator<Key, T>, key: Key, val: T): MapReverseIterator<Key, T>;
        /**
         * Construct and insert element with hint
         *
         * Inserts a new element in the {@link MapContainer map container}. This new element is constructed in
         * place using *args* as the arguments for the element's constructor. *hint* points to a location in the
         * container suggested as a hint on where to start the search for its insertion point (the container may or
         * may not use this suggestion to optimize the insertion operation).
         *
         * A similar member function exists, {@link insert}, which either copies or moves an existing object into
         * the container, and may also take a position *hint*.
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param pair A single argument of a {@link Pair} type with a value for the *key* as
         *			   {@link Pair.first first} member, and a *value* for the mapped value as
         *			   {@link Pair.second second}.
         *
         * @return An iterator pointing to either the newly inserted element or to the element that already had an
         *		   equivalent key in the {@link MapContainer}.
         */
        emplace_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
        /**
         * Construct and insert element with hint
         *
         * Inserts a new element in the {@link MapContainer map container}. This new element is constructed in
         * place using *args* as the arguments for the element's constructor. *hint* points to a location in the
         * container suggested as a hint on where to start the search for its insertion point (the container may or
         * may not use this suggestion to optimize the insertion operation).
         *
         * A similar member function exists, {@link insert}, which either copies or moves an existing object into
         * the container, and may also take a position *hint*.
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param pair A single argument of a {@link Pair} type with a value for the *key* as
         *			   {@link Pair.first first} member, and a *value* for the mapped value as
         *			   {@link Pair.second second}.
         *
         * @return An {@link MapIterator iterator} pointing to either the newly inserted element or to the element
         *		   that already had an equivalent key in the {@link MapContainer}.
         */
        emplace_hint(hint: MapReverseIterator<Key, T>, pair: Pair<Key, T>): MapReverseIterator<Key, T>;
        /**
         * Insert an element.
         *
         * Extends the container by inserting a new element, effectively increasing the container {@link size}
         * by the number of element inserted (zero or one).
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param pair A single argument of a {@link Pair} type with a value for the *key* as
         *			   {@link Pair.first first} member, and a *value* for the mapped value as
         *			   {@link Pair.second second}.
         *
         * @return An iterator pointing to either the newly inserted element or to the element that already had an
         *		   equivalent key in the {@link MapContainer}.
         */
        insert(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
        /**
         * Insert an element.
         *
         * Extends the container by inserting a new element, effectively increasing the container {@link size}
         * by the number of element inserted (zero or one).
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param pair A single argument of a {@link Pair} type with a value for the *key* as
         *			   {@link Pair.first first} member, and a *value* for the mapped value as
         *			   {@link Pair.second second}.
         *
         * @return An iterator pointing to either the newly inserted element or to the element that already had an
         *		   equivalent key in the {@link MapContainer}.
         */
        insert(hint: MapReverseIterator<Key, T>, pair: Pair<Key, T>): MapReverseIterator<Key, T>;
        /**
         * Insert an element.
         *
         * Extends the container by inserting new elements, effectively increasing the container {@link size}
         * by the number of elements inserted.
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param tuple Tuple represensts the {@link Pair} to be inserted as an element.
         *
         * @return An iterator pointing to either the newly inserted element or to the element that already had an
         *		   equivalent key in the {@link MapContainer}.
         */
        insert<L extends Key, U extends T>(hint: MapIterator<Key, T>, tuple: [L, U]): MapIterator<Key, T>;
        /**
         * Insert an element.
         *
         * Extends the container by inserting new elements, effectively increasing the container {@link size}
         * by the number of elements inserted.
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param tuple Tuple represensts the {@link Pair} to be inserted as an element.
         *
         * @return An iterator pointing to either the newly inserted element or to the element that already had an
         *		   equivalent key in the {@link MapContainer}.
         */
        insert<L extends Key, U extends T>(hint: MapReverseIterator<Key, T>, tuple: [L, U]): MapReverseIterator<Key, T>;
        /**
         * Insert elements from range iterators.
         *
         * Extends the container by inserting new elements, effectively increasing the container {@link size} by
         * the number of elements inserted.
         *
         * @param begin Input iterator specifying initial position of a range of elements.
         * @param end Input iterator specifying final position of a range of elements.
         *			  Notice that the range includes all the elements between <i>begin</i> and <i>end</i>,
         *			  including the element pointed by <i>begin</i> but not the one pointed by <i>end</i>.
         */
        insert<L extends Key, U extends T, InputIterator extends Iterator<Pair<L, U>>>(first: InputIterator, last: InputIterator): void;
        /**
         * @hidden
         */
        protected abstract _Insert_by_pair<L extends Key, U extends T>(pair: Pair<L, U>): any;
        /**
         * @hidden
         */
        private _Insert_by_tuple<L, U>(tuple);
        /**
         * @hidden
         */
        protected abstract _Insert_by_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
        /**
         * @hidden
         */
        private _Insert_by_hint_with_tuple(hint, tuple);
        /**
         * @hidden
         */
        protected abstract _Insert_by_range<L extends Key, U extends T, InputIterator extends Iterator<Pair<L, U>>>(first: InputIterator, last: InputIterator): void;
        /**
         * Erase an elemet by key.
         *
         * Removes from the {@link MapContainer map container} a single element.
         *
         * This effectively reduces the container {@link size} by the number of element removed (zero or one),
         * which are destroyed.
         *
         * @param key Key of the element to be removed from the {@link MapContainer}.
         */
        erase(key: Key): number;
        /**
         * Erase an elemet by iterator.
         *
         * Removes from the {@link MapContainer map container} a single element.
         *
         * This effectively reduces the container {@link size} by the number of element removed (zero or one),
         * which are destroyed.
         *
         * @param it Iterator specifying position winthin the {@link MapContainer map contaier} to be removed.
         */
        erase(it: MapIterator<Key, T>): MapIterator<Key, T>;
        /**
         * Erase elements by range iterators.
         *
         * Removes from the {@link MapContainer map container} a range of elements.
         *
         * This effectively reduces the container {@link size} by the number of elements removed, which are
         * destroyed.
         *
         * @param begin An iterator specifying initial position of a range within {@link MApContainer map container}
         *				to be removed.
         * @param end An iterator specifying initial position of a range within {@link MApContainer map container}
         *			  to be removed.
         *			  Notice that the range includes all the elements between <i>begin</i> and <i>end</i>,
         *			  including the element pointed by <i>begin</i> but not the one pointed by <i>end</i>.
         */
        erase(begin: MapIterator<Key, T>, end: MapIterator<Key, T>): MapIterator<Key, T>;
        /**
         * Erase an elemet by iterator.
         *
         * Removes from the {@link MapContainer map container} a single element.
         *
         * This effectively reduces the container {@link size} by the number of element removed (zero or one),
         * which are destroyed.
         *
         * @param it Iterator specifying position winthin the {@link MapContainer map contaier} to be removed.
         */
        erase(it: MapReverseIterator<Key, T>): MapReverseIterator<Key, T>;
        /**
         * Erase elements by range iterators.
         *
         * Removes from the {@link MapContainer map container} a range of elements.
         *
         * This effectively reduces the container {@link size} by the number of elements removed, which are
         * destroyed.
         *
         * @param begin An iterator specifying initial position of a range within {@link MApContainer map container}
         *				to be removed.
         * @param end An iterator specifying initial position of a range within {@link MApContainer map container}
         *			  to be removed.
         *			  Notice that the range includes all the elements between <i>begin</i> and <i>end</i>,
         *			  including the element pointed by <i>begin</i> but not the one pointed by <i>end</i>.
         */
        erase(begin: MapReverseIterator<Key, T>, end: MapReverseIterator<Key, T>): MapReverseIterator<Key, T>;
        /**
         * @hidden
         */
        private _Erase_by_key(key);
        /**
         * @hidden
         */
        private _Erase_by_iterator(first, last?);
        /**
         * @hidden
         */
        private _Erase_by_range(first, last);
        /**
         * @hidden
         */
        protected _Swap(obj: MapContainer<Key, T>): void;
        /**
         * Merge two maps.
         *
         * Extracts and transfers elements from *source* to this container.
         *
         * @param source A {@link MapContainer map container} to transfer the elements from.
         */
        abstract merge<L extends Key, U extends T>(source: MapContainer<L, U>): void;
        /**
         * @hidden
         */
        protected abstract _Handle_insert(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
        /**
         * @hidden
         */
        protected abstract _Handle_erase(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
    }
    /**
     * @hidden
     */
    class _MapElementList<Key, T> extends _ListContainer<Pair<Key, T>, MapIterator<Key, T>> {
        private associative_;
        private rend_;
        constructor(associative: MapContainer<Key, T>);
        protected _Create_iterator(prev: MapIterator<Key, T>, next: MapIterator<Key, T>, val: Pair<Key, T>): MapIterator<Key, T>;
        protected _Set_begin(it: MapIterator<Key, T>): void;
        associative(): MapContainer<Key, T>;
        rbegin(): MapReverseIterator<Key, T>;
        rend(): MapReverseIterator<Key, T>;
    }
}
declare namespace std {
    /**
     * An iterator of {@link MapContainer map container}.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram" style="max-width: 100%" /></a>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class MapIterator<Key, T> extends base._ListIteratorBase<Pair<Key, T>> implements IComparable<MapIterator<Key, T>> {
        /**
         * Construct from the {@link MapContainer source map} and {@link ListIterator list iterator}.
         *
         * @param source The source {@link MapContainer}.
         * @param list_iterator A {@link ListIterator} pointing {@link Pair} of <i>key</i> and <i>value</i>.
         */
        constructor(source: base._MapElementList<Key, T>, prev: MapIterator<Key, T>, next: MapIterator<Key, T>, val: Pair<Key, T>);
        /**
         * Get iterator to previous element.
         */
        prev(): MapIterator<Key, T>;
        /**
         * Get iterator to next element.
         */
        next(): MapIterator<Key, T>;
        /**
         * Advances the Iterator by n element positions.
         *
         * @param step Number of element positions to advance.
         * @return An advanced Iterator.
         */
        advance(step: number): MapIterator<Key, T>;
        /**
         * @hidden
         */
        source(): base.MapContainer<Key, T>;
        /**
         * Get first, key element.
         */
        readonly first: Key;
        /**
         * Get second, value element.
         */
        /**
         * Set second value.
         */
        second: T;
        /**
         * @inheritdoc
         */
        less(obj: MapIterator<Key, T>): boolean;
        /**
         * @inheritdoc
         */
        equals(obj: MapIterator<Key, T>): boolean;
        /**
         * @inheritdoc
         */
        hashCode(): number;
        /**
         * @inheritdoc
         */
        swap(obj: MapIterator<Key, T>): void;
    }
    /**
     * A reverse-iterator of {@link MapContainer map container}.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram" style="max-width: 100%" /></a>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class MapReverseIterator<Key, T> extends ReverseIterator<Pair<Key, T>, base.MapContainer<Key, T>, MapIterator<Key, T>, MapReverseIterator<Key, T>> {
        /**
         * Construct from base iterator.
         *
         * @param base A reference of the base iterator, which iterates in the opposite direction.
         */
        constructor(base: MapIterator<Key, T>);
        /**
         * @hidden
         */
        protected _Create_neighbor(base: MapIterator<Key, T>): MapReverseIterator<Key, T>;
        /**
         * Get first, key element.
         */
        readonly first: Key;
        /**
         * Get second, value element.
         */
        /**
         * Set second value.
         */
        second: T;
    }
}
declare namespace std.base {
    /**
     * An abstract multi-map.
     *
     * {@link MultiMap MultiMaps} are associative containers that store elements formed by a combination of a
     * <i>key value</i> (<i>Key</i>) and a <i>mapped value</i> (<i>T</i>), and which allows for fast retrieval of
     * individual elements based on their keys.
     *
     * In a {@link MapContainer}, the <i>key values</i> are generally used to identify the elements, while the
     * <i>mapped values</i> store the content associated to this <i>key</i>. The types of <i>key</i> and
     * <i>mapped value</i> may differ, and are grouped together in member type <i>value_type</i>, which is a
     * {@link Pair} type combining both:
     *
     * <code>typedef pair<const Key, T> value_type;</code>
     *
     * {@link UniqueMap} stores elements, keeps sequence and enables indexing by inserting elements into a
     * {@link List} and registering {@link ListIterator iterators} of the {@link data_ list container} to an index
     * table like {@link RBTree tree} or {@link HashBuckets hash-table}.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /></a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute position
     *		in the container.
     *	</dd>
     *
     *	<dt> Map </dt>
     *	<dd>
     *		Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		<i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>.
     *	</dd>
     *
     *	<dt> Multiple equivalent keys </dt>
     *	<dd> Multiple elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <Key> Type of the keys. Each element in a map is identified by its key value.
     * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class MultiMap<Key, T> extends MapContainer<Key, T> {
        /**
         * Construct and insert element.
         *
         * Inserts a new element in the {@link MultiMap}. This new element is constructed in place using <i>args</i>
         * as the arguments for the element's constructor.
         *
         * This effectively increases the container {@link size} by one.
         *
         * A similar member function exists, {@link insert}, which either copies or moves existing objects into the
         * container.
         *
         * @param key The key used both to look up and to insert if not found.
         * @param value Value, the item.
         *
         * @return An {@link MapIterator iterator} to the newly inserted element.
         */
        emplace(key: Key, value: T): MapIterator<Key, T>;
        /**
         * Construct and insert element.
         *
         * Inserts a new element in the {@link MultiMap}. This new element is constructed in place using <i>args</i>
         * as the arguments for the element's constructor.
         *
         * This effectively increases the container {@link size} by one.
         *
         * A similar member function exists, {@link insert}, which either copies or moves existing objects into the
         * container.
         *
         * @param pair A single argument of a {@link Pair} type with a value for the *key* as
         *			   {@link Pair.first first} member, and a *value* for the mapped value as
         *			   {@link Pair.second second}.
         * @return An {@link MapIterator iterator} to the newly inserted element.
         */
        emplace(pair: Pair<Key, T>): MapIterator<Key, T>;
        /**
         * Insert elements.
         *
         * Extends the container by inserting new elements, effectively increasing the container {@link size} by
         * the number of elements inserted.
         *
         * @param pair A single argument of a {@link Pair} type with a value for the *key* as
         *			   {@link Pair.first first} member, and a *value* for the mapped value as
         *			   {@link Pair.second second}.
         *
         * @return An iterator pointing to the newly inserted element.
         */
        insert(pair: Pair<Key, T>): MapIterator<Key, T>;
        /**
         * Insert elements.
         *
         * Extends the container by inserting new elements, effectively increasing the container {@link size} by
         * the number of elements inserted.
         *
         * @param tuple Tuple represensts the {@link Pair} to be inserted as an element.
         *
         * @return An iterator pointing to the newly inserted element.
         */
        insert<L extends Key, U extends T>(tuple: [L, U]): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        insert(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        insert(hint: MapReverseIterator<Key, T>, pair: Pair<Key, T>): MapReverseIterator<Key, T>;
        /**
         * @inheritdoc
         */
        insert<L extends Key, U extends T>(hint: MapIterator<Key, T>, tuple: [L, U]): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        insert<L extends Key, U extends T>(hint: MapReverseIterator<Key, T>, tuple: [L, U]): MapReverseIterator<Key, T>;
        /**
         * @inheritdoc
         */
        insert<L extends Key, U extends T, InputIterator extends Iterator<Pair<L, U>>>(first: InputIterator, last: InputIterator): void;
        /**
         * @inheritdoc
         */
        merge<L extends Key, U extends T>(source: MapContainer<L, U>): void;
    }
}
declare namespace std.base {
    /**
     * An abstract set.
     *
     * {@link SetContainer SetContainers} are containers that store elements allowing fast retrieval of
     * individual elements based on their value.
     *
     * In an {@link SetContainer}, the value of an element is at the same time its <i>key</i>, used to
     * identify it. <i>Keys</i> are immutable, therefore, the elements in an {@link SetContainer} cannot be
     * modified once in the container - they can be inserted and removed, though.
     *
     * {@link SetContainer} stores elements, keeps sequence and enables indexing by inserting elements into a
     * {@link List} and registering {@link ListIterator iterators} of the {@link data_ list container} to an index
     * table like {@link RBTree tree} or {@link HashBuckets hash-table}.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/set_containers.png" style="max-width: 100%" /></a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		position in the container.
     *	</dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     * </dl>
     *
     * @param <T> Type of the elements. Each element in a {@link SetContainer} container is also identified
     *			  by this value (each value is itself also the element's <i>key</i>).
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class SetContainer<T> extends Container<T> {
        /**
         * {@link List} storing elements.
         *
         * Storing elements and keeping those sequence of the {@link SetContainer} are implemented by
         * {@link data_ this list container}. Implementing index-table is also related with {@link data_ this list}
         * by storing {@link ListIterator iterators} ({@link SetIterator} references {@link ListIterator}) who are
         * created from {@link data_ here}.
         */
        private data_;
        /**
         * Default Constructor.
         */
        protected constructor();
        /**
         * @inheritdoc
         */
        assign<U extends T, InputIterator extends Iterator<U>>(begin: Iterator<U>, end: Iterator<U>): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * Get iterator to element.
         *
         * Searches the container for an element with <i>key</i> as value and returns an iterator to it if found,
         * otherwise it returns an iterator to {@link end end()} (the element past the end of the container).
         *
         * Another member function, {@link count count()}, can be used to just check whether a particular element
         * exists.
         *
         * @param key Key to be searched for.
         *
         * @return An iterator to the element, if the specified value is found, or {@link end end()} if it is not
         *		   found in the
         */
        abstract find(val: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        begin(): SetIterator<T>;
        /**
         * @inheritdoc
         */
        end(): SetIterator<T>;
        /**
         * @inheritdoc
         */
        rbegin(): SetReverseIterator<T>;
        /**
         * @inheritdoc
         */
        rend(): SetReverseIterator<T>;
        /**
         * Whether have the item or not.
         *
         * Indicates whether a set has an item having the specified identifier.
         *
         * @param key Key value of the element whose mapped value is accessed.
         *
         * @return Whether the set has an item having the specified identifier.
         */
        has(val: T): boolean;
        /**
         * Count elements with a specific key.
         *
         * Searches the container for elements with a value of k and returns the number of elements found.
         *
         * @param key Value of the elements to be counted.
         *
         * @return The number of elements in the container with a <i>key</i>.
         */
        abstract count(val: T): number;
        /**
         * @inheritdoc
         */
        size(): number;
        /**
         * @inheritdoc
         */
        push(...items: T[]): number;
        /**
         * Insert an element with hint.
         *
         * Extends the container by inserting new elements, effectively increasing the container size by the
         * number of elements inserted.
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param val Value to be inserted as an element.
         *
         * @return An iterator pointing to either the newly inserted element or to the element that already had its
         *		   same value in the {@link SetContainer}.
         */
        insert(hint: SetIterator<T>, val: T): SetIterator<T>;
        /**
         * Insert an element with hint.
         *
         * Extends the container by inserting new elements, effectively increasing the container size by the
         * number of elements inserted.
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param val Value to be inserted as an element.
         *
         * @return An iterator pointing to either the newly inserted element or to the element that already had its
         *		   same value in the {@link SetContainer}.
         */
        insert(hint: SetReverseIterator<T>, val: T): SetReverseIterator<T>;
        /**
         * Insert elements with a range of a
         *
         * Extends the container by inserting new elements, effectively increasing the container size by the
         * number of elements inserted.
         *
         * @param begin An iterator specifying range of the begining element.
         * @param end An iterator specifying range of the ending element.
         */
        insert<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
        /**
         * @hidden
         */
        protected abstract _Insert_by_val(val: T): any;
        /**
         * @hidden
         */
        protected abstract _Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>;
        /**
         * @hidden
         */
        protected abstract _Insert_by_range<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
        /**
         * Erase an element.
         * Removes from the set container the elements whose value is <i>key</i>.
         *
         * This effectively reduces the container size by the number of elements removed.
         *
         * @param key Value of the elements to be erased.
         *
         * @return Number of elements erased.
         */
        erase(val: T): number;
        /**
         * @inheritdoc
         */
        erase(it: SetIterator<T>): SetIterator<T>;
        /**
         * Erase elements.
         * Removes from the set container a range of elements..
         *
         * This effectively reduces the container size by the number of elements removed.
         *
         * @param begin An iterator specifying a range of beginning to erase.
         * @param end An iterator specifying a range of end to erase.
         */
        erase(begin: SetIterator<T>, end: SetIterator<T>): SetIterator<T>;
        /**
         * @inheritdoc
         */
        erase(it: SetReverseIterator<T>): SetReverseIterator<T>;
        /**
         * Erase elements.
         * Removes from the set container a range of elements..
         *
         * This effectively reduces the container size by the number of elements removed.
         *
         * @param begin An iterator specifying a range of beginning to erase.
         * @param end An iterator specifying a range of end to erase.
         */
        erase(begin: SetReverseIterator<T>, end: SetReverseIterator<T>): SetReverseIterator<T>;
        /**
         * @hidden
         */
        private _Erase_by_iterator(first, last?);
        /**
         * @hidden
         */
        private _Erase_by_val(val);
        /**
         * @hidden
         */
        private _Erase_by_range(first, last);
        /**
         * @hidden
         */
        protected _Swap(obj: SetContainer<T>): void;
        /**
         * Merge two sets.
         *
         * Extracts and transfers elements from *source* to this container.
         *
         * @param source A {@link SetContainer set container} to transfer the elements from.
         */
        abstract merge<U extends T>(source: SetContainer<U>): void;
        /**
         * @hidden
         */
        protected abstract _Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void;
        /**
         * @hidden
         */
        protected abstract _Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void;
    }
    /**
     * @hidden
     */
    class _SetElementList<T> extends _ListContainer<T, SetIterator<T>> {
        private associative_;
        private rend_;
        constructor(associative: SetContainer<T>);
        protected _Create_iterator(prev: SetIterator<T>, next: SetIterator<T>, val: T): SetIterator<T>;
        protected _Set_begin(it: SetIterator<T>): void;
        associative(): SetContainer<T>;
        rbegin(): SetReverseIterator<T>;
        rend(): SetReverseIterator<T>;
    }
}
declare namespace std {
    /**
     * An iterator of a Set.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/set_containers.png" style="max-width: 100%" /></a>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class SetIterator<T> extends base._ListIteratorBase<T> implements IComparable<SetIterator<T>> {
        /**
         * Construct from source and index number.
         *
         * #### Note
         * Do not create iterator directly.
         *
         * Use begin(), find() or end() in Map instead.
         *
         * @param map The source Set to reference.
         * @param index Sequence number of the element in the source Set.
         */
        constructor(source: base._SetElementList<T>, prev: SetIterator<T>, next: SetIterator<T>, val: T);
        /**
         * @inheritdoc
         */
        source(): base.SetContainer<T>;
        /**
         * @inheritdoc
         */
        prev(): SetIterator<T>;
        /**
         * @inheritdoc
         */
        next(): SetIterator<T>;
        /**
         * @inheritdoc
         */
        advance(size: number): SetIterator<T>;
        /**
         * @inheritdoc
         */
        less(obj: SetIterator<T>): boolean;
        /**
         * @inheritdoc
         */
        equals(obj: SetIterator<T>): boolean;
        /**
         * @inheritdoc
         */
        hashCode(): number;
        /**
         * @inheritdoc
         */
        swap(obj: SetIterator<T>): void;
    }
    /**
     * A reverse-iterator of Set.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/set_containers.png" style="max-width: 100%" /></a>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class SetReverseIterator<T> extends ReverseIterator<T, base.SetContainer<T>, SetIterator<T>, SetReverseIterator<T>> {
        /**
         * Construct from base iterator.
         *
         * @param base A reference of the base iterator, which iterates in the opposite direction.
         */
        constructor(base: SetIterator<T>);
        /**
         * @hidden
         */
        protected _Create_neighbor(base: SetIterator<T>): SetReverseIterator<T>;
    }
}
declare namespace std.base {
    /**
     * An abstract set.
     *
     * {@link SetContainer SetContainers} are containers that store elements allowing fast retrieval of
     * individual elements based on their value.
     *
     * In an {@link SetContainer}, the value of an element is at the same time its <i>key</i>, used to
     * identify it. <i>Keys</i> are immutable, therefore, the elements in an {@link SetContainer} cannot be
     * modified once in the container - they can be inserted and removed, though.
     *
     * {@link SetContainer} stores elements, keeps sequence and enables indexing by inserting elements into a
     * {@link List} and registering {@link ListIterator iterators} of the {@link data_ list container} to an index
     * table like {@link RBTree tree} or {@link HashBuckets hash-table}.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /></a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		position in the container.
     *	</dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     *
     *	<dt> Multiple equivalent keys </dt>
     *	<dd> Multiple elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <T> Type of the elements. Each element in a {@link SetContainer} container is also identified
     *			  by this value (each value is itself also the element's <i>key</i>).
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class MultiSet<T> extends SetContainer<T> {
        /**
         * Insert an element.
         *
         * Extends the container by inserting new elements, effectively increasing the container {@link size} by
         * the number of elements inserted.
         *
         * @param key Value to be inserted as an element.
         *
         * @return An iterator to the newly inserted element.
         */
        insert(val: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        insert(hint: SetIterator<T>, val: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        insert(hint: SetReverseIterator<T>, val: T): SetReverseIterator<T>;
        /**
         * @inheritdoc
         */
        insert<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
        /**
         * @inheritdoc
         */
        merge<U extends T>(source: SetContainer<U>): void;
    }
}
declare namespace std.base {
    /**
     * @hidden
     */
    enum _Color {
        BLACK = 0,
        RED = 1,
    }
}
declare namespace std.base {
    /**
     * @hidden
     */
    abstract class _XTree<T> {
        protected root_: _XTreeNode<T>;
        protected constructor();
        clear(): void;
        find(val: T): _XTreeNode<T>;
        protected _Fetch_maximum(node: _XTreeNode<T>): _XTreeNode<T>;
        abstract is_less(left: T, right: T): boolean;
        abstract is_equal_to(left: T, right: T): boolean;
        insert(val: T): void;
        private _Insert_case1(N);
        private _Insert_case2(N);
        private _Insert_case3(N);
        private _Insert_case4(node);
        private _Insert_case5(node);
        erase(val: T): void;
        private _Erase_case1(N);
        private _Erase_case2(N);
        private _Erase_case3(N);
        private _Erase_case4(N);
        private _Erase_case5(N);
        private _Erase_case6(node);
        protected _Rotate_left(node: _XTreeNode<T>): void;
        protected _Rotate_right(node: _XTreeNode<T>): void;
        protected _Replace_node(oldNode: _XTreeNode<T>, newNode: _XTreeNode<T>): void;
        private _Fetch_color(node);
    }
}
declare namespace std.base {
    /**
     * @hidden
     */
    class _MapTree<Key, T> extends _XTree<MapIterator<Key, T>> {
        private map_;
        private compare_;
        constructor(map: ITreeMap<Key, T>, compare?: (x: Key, y: Key) => boolean);
        find(key: Key): _XTreeNode<MapIterator<Key, T>>;
        find(it: MapIterator<Key, T>): _XTreeNode<MapIterator<Key, T>>;
        private _Find_by_key(key);
        lower_bound(key: Key): MapIterator<Key, T>;
        upper_bound(key: Key): MapIterator<Key, T>;
        equal_range(key: Key): Pair<MapIterator<Key, T>, MapIterator<Key, T>>;
        key_comp(): (x: Key, y: Key) => boolean;
        value_comp(): (x: Pair<Key, T>, y: Pair<Key, T>) => boolean;
        is_equal_to(left: MapIterator<Key, T>, right: MapIterator<Key, T>): boolean;
        is_less(left: MapIterator<Key, T>, right: MapIterator<Key, T>): boolean;
    }
}
declare namespace std.base {
    /**
     * @hidden
     */
    class _SetTree<T> extends _XTree<SetIterator<T>> {
        private set_;
        private compare_;
        /**
         * Default Constructor.
         */
        constructor(set: ITreeSet<T>, compare?: (x: T, y: T) => boolean);
        find(val: T): _XTreeNode<SetIterator<T>>;
        find(it: SetIterator<T>): _XTreeNode<SetIterator<T>>;
        private _Find_by_val(val);
        lower_bound(val: T): SetIterator<T>;
        upper_bound(val: T): SetIterator<T>;
        equal_range(val: T): Pair<SetIterator<T>, SetIterator<T>>;
        key_comp(): (x: T, y: T) => boolean;
        value_comp(): (x: T, y: T) => boolean;
        is_equal_to(left: SetIterator<T>, right: SetIterator<T>): boolean;
        is_less(left: SetIterator<T>, right: SetIterator<T>): boolean;
    }
}
declare namespace std.base {
    /**
     * @hidden
     */
    class _XTreeNode<T> {
        parent: _XTreeNode<T>;
        left: _XTreeNode<T>;
        right: _XTreeNode<T>;
        value: T;
        color: _Color;
        constructor(value: T, color: _Color);
        readonly grandParent: _XTreeNode<T>;
        readonly sibling: _XTreeNode<T>;
        readonly uncle: _XTreeNode<T>;
    }
}
declare namespace std.base {
    /**
     * An abstract unique-map.
     *
     * {@link UniqueMap UniqueMaps} are associative containers that store elements formed by a combination of a
     * <i>key value</i> (<i>Key</i>) and a <i>mapped value</i> (<i>T</i>), and which allows for fast retrieval of
     * individual elements based on their keys.
     *
     * In a {@link MapContainer}, the <i>key values</i> are generally used to uniquely identify the elements,
     * while the <i>mapped values</i> store the content associated to this key. The types of <i>key</i> and
     * <i>mapped value</i> may differ, and are grouped together in member type <i>value_type</i>, which is a
     * {@link Pair} type combining both:
     *
     * <code>typedef pair<const Key, T> value_type;</code>
     *
     * {@link UniqueMap} stores elements, keeps sequence and enables indexing by inserting elements into a
     * {@link List} and registering {@link ListIterator iterators} of the {@link data_ list container} to an index
     * table like {@link RBTree tree} or {@link HashBuckets hash-table}.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram" style="max-width: 100%" /></a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute position
     *		in the container.
     *	</dd>
     *
     *	<dt> Map </dt>
     *	<dd>
     *		Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		<i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>.
     *	</dd>
     *
     *	<dt> Unique keys </dt>
     *	<dd> No two elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <Key> Type of the keys. Each element in a map is uniquely identified by its key value.
     * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class UniqueMap<Key, T> extends MapContainer<Key, T> {
        /**
         * @inheritdoc
         */
        count(key: Key): number;
        /**
         * Get an element
         *
         * Returns a reference to the mapped value of the element identified with <i>key</i>.
         *
         * @param key Key value of the element whose mapped value is accessed.
         *
         * @throw exception out of range
         *
         * @return A reference object of the mapped value (_Ty)
         */
        get(key: Key): T;
        /**
         * Set an item as the specified identifier.
         *
         * If the identifier is already in map, change value of the identifier. If not, then insert the object
         * with the identifier.
         *
         * @param key Key value of the element whose mapped value is accessed.
         * @param val Value, the item.
         */
        set(key: Key, val: T): void;
        /**
         * Construct and insert element.
         *
         * Inserts a new element in the {@link UniqueMap} if its *key* is unique. This new element is constructed in
         * place using args as the arguments for the construction of a *value_type* (which is an  object of a
         * {@link Pair} type).
         *
         * The insertion only takes place if no other element in the container has a *key equivalent* to the one
         * being emplaced (*keys* in a {@link UniqueMap} container are unique).
         *
         * If inserted, this effectively increases the container {@link size} by one.
         *
         * A similar member function exists, {@link insert}, which either copies or moves existing objects into the
         * container.
         *
         * @param key The key used both to look up and to insert if not found.
         * @param value Value, the item.
         *
         * @return If the function successfully inserts the element (because no equivalent element existed already in
         *		   the {@link UniqueMap}), the function returns a {@link Pair} of an {@link MapIterator iterator} to
         *		   the newly inserted element and a value of true. Otherwise, it returns an
         *		   {@link MapIterator iterator} to the equivalent element within the container and a value of false.
         */
        emplace(key: Key, value: T): Pair<MapIterator<Key, T>, boolean>;
        /**
         * Construct and insert element.
         *
         * Inserts a new element in the {@link UniqueMap} if its *key* is unique. This new element is constructed in
         * place using args as the arguments for the construction of a *value_type* (which is an  object of a
         * {@link Pair} type).
         *
         * The insertion only takes place if no other element in the container has a *key equivalent* to the one
         * being emplaced (*keys* in a {@link UniqueMap} container are unique).
         *
         * If inserted, this effectively increases the container {@link size} by one.
         *
         * A similar member function exists, {@link insert}, which either copies or moves existing objects into the
         * container.
         *
         * @param pair A single argument of a {@link Pair} type with a value for the *key* as
         *			   {@link Pair.first first} member, and a *value* for the mapped value as
         *			   {@link Pair.second second}.
         *
         * @return If the function successfully inserts the element (because no equivalent element existed already in
         *		   the {@link UniqueMap}), the function returns a {@link Pair} of an {@link MapIterator iterator} to
         *		   the newly inserted element and a value of true. Otherwise, it returns an
         *		   {@link MapIterator iterator} to the equivalent element within the container and a value of false.
         */
        emplace(pair: Pair<Key, T>): Pair<MapIterator<Key, T>, boolean>;
        /**
         * Insert an element.
         *
         * Extends the container by inserting new elements, effectively increasing the container {@link size} by
         * one.
         *
         * Because element <i>keys</i> in a {@link UniqueMap} are unique, the insertion operation checks whether
         * each inserted element has a <i>key</i> equivalent to the one of an element already in the container, and
         * if so, the element is not inserted, returning an iterator to this existing element (if the function
         * returns a value).
         *
         * For a similar container allowing for duplicate elements, see {@link MultiMap}.
         *
         * @param pair A single argument of a {@link Pair} type with a value for the *key* as
         *			   {@link Pair.first first} member, and a *value* for the mapped value as
         *			   {@link Pair.second second}.
         *
         * @return A {@link Pair}, with its member {@link Pair.first} set to an iterator pointing to either the newly
         *		   inserted element or to the element with an equivalent key in the {@link UniqueMap}. The
         *		   {@link Pair.second} element in the {@link Pair} is set to true if a new element was inserted or
         *		   false if an equivalent key already existed.
         */
        insert(pair: Pair<Key, T>): Pair<MapIterator<Key, T>, boolean>;
        /**
         * Insert an element.
         *
         * Extends the container by inserting a new element, effectively increasing the container size by the
         * number of elements inserted.
         *
         * Because element <i>keys</i> in a {@link UniqueMap} are unique, the insertion operation checks whether
         * each inserted element has a <i>key</i> equivalent to the one of an element already in the container, and
         * if so, the element is not inserted, returning an iterator to this existing element (if the function
         * returns a value).
         *
         * For a similar container allowing for duplicate elements, see {@link MultiMap}.
         *
         * @param tuple Tuple represensts the {@link Pair} to be inserted as an element.
         *
         * @return A {@link Pair}, with its member {@link Pair.first} set to an iterator pointing to either the newly
         *		   inserted element or to the element with an equivalent key in the {@link UniqueMap}. The
         *		   {@link Pair.second} element in the {@link Pair} is set to true if a new element was inserted or
         *		   false if an equivalent key already existed.
         */
        insert<L extends Key, U extends T>(tuple: [L, U]): Pair<MapIterator<Key, T>, boolean>;
        /**
         * @inheritdoc
         */
        insert(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        insert(hint: MapReverseIterator<Key, T>, pair: Pair<Key, T>): MapReverseIterator<Key, T>;
        /**
         * @inheritdoc
         */
        insert<L extends Key, U extends T>(hint: MapIterator<Key, T>, tuple: [L, U]): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        insert<L extends Key, U extends T>(hint: MapReverseIterator<Key, T>, tuple: [L, U]): MapReverseIterator<Key, T>;
        /**
         * @inheritdoc
         */
        insert<L extends Key, U extends T, InputIterator extends Iterator<Pair<L, U>>>(first: InputIterator, last: InputIterator): void;
        /**
         * Insert or assign an element.
         *
         * Inserts an element or assigns to the current element if the <i>key</i> already exists.
         *
         * Because element <i>keys</i> in a {@link UniqueMap} are unique, the insertion operation checks whether
         * each inserted element has a <i>key</i> equivalent to the one of an element already in the container, and
         * if so, the element is assigned, returning an iterator to this existing element (if the function returns a
         * value).
         *
         * For a similar container allowing for duplicate elements, see {@link MultiMap}.
         *
         * @param key The key used both to look up and to insert if not found.
         * @param value Value, the item.
         *
         * @return A {@link Pair}, with its member {@link Pair.first} set to an iterator pointing to either the newly
         *		   inserted element or to the element with an equivalent key in the {@link UniqueMap}. The
         *		   {@link Pair.second} element in the {@link Pair} is set to true if a new element was inserted or
         *		   false if an equivalent key already existed so the <i>value</i> is assigned.
         */
        insert_or_assign(key: Key, value: T): Pair<MapIterator<Key, T>, boolean>;
        /**
         * Insert or assign an element.
         *
         * Inserts an element or assigns to the current element if the <i>key</i> already exists.
         *
         * Because element <i>keys</i> in a {@link UniqueMap} are unique, the insertion operation checks whether
         * each inserted element has a <i>key</i> equivalent to the one of an element already in the container, and
         * if so, the element is assigned, returning an iterator to this existing element (if the function returns a
         * value).
         *
         * For a similar container allowing for duplicate elements, see {@link MultiMap}.
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param key The key used both to look up and to insert if not found.
         * @param value Value, the item.
         *
         * @return An iterator pointing to either the newly inserted element or to the element that already had an
         *		   equivalent key in the {@link UniqueMap}.
         */
        insert_or_assign(hint: MapIterator<Key, T>, key: Key, value: T): MapIterator<Key, T>;
        /**
         * Insert or assign an element.
         *
         * Inserts an element or assigns to the current element if the <i>key</i> already exists.
         *
         * Because element <i>keys</i> in a {@link UniqueMap} are unique, the insertion operation checks whether
         * each inserted element has a <i>key</i> equivalent to the one of an element already in the container, and
         * if so, the element is assigned, returning an iterator to this existing element (if the function returns a
         * value).
         *
         * For a similar container allowing for duplicate elements, see {@link MultiMap}.
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param key The key used both to look up and to insert if not found.
         * @param value Value, the item.
         *
         * @return An iterator pointing to either the newly inserted element or to the element that already had an
         *		   equivalent key in the {@link UniqueMap}.
         */
        insert_or_assign(hint: MapReverseIterator<Key, T>, key: Key, value: T): MapReverseIterator<Key, T>;
        /**
         * @hidden
         */
        private _Insert_or_assign_with_key_value(key, value);
        /**
         * @hidden
         */
        private _Insert_or_assign_with_hint(hint, key, value);
        /**
         * Extract an element.
         *
         * Extracts the element pointed to by <i>key</i> and erases it from the {@link UniqueMap}.
         *
         * @param key Key value of the element whose mapped value is accessed.
         *
         * @return A {@link Pair} containing the value pointed to by <i>key</i>.
         */
        extract(key: Key): Pair<Key, T>;
        /**
         * Extract an element.
         *
         * Extracts the element pointed to by <i>key</i> and erases it from the {@link UniqueMap}.
         *
         * @param it An iterator pointing an element to extract.
         *
         * @return An iterator pointing to the element immediately following <i>it</i> prior to the element being
         *		   erased. If no such element exists,returns {@link end end()}.
         */
        extract(it: MapIterator<Key, T>): MapIterator<Key, T>;
        /**
         * Extract an element.
         *
         * Extracts the element pointed to by <i>key</i> and erases it from the {@link UniqueMap}.
         *
         * @param it An iterator pointing an element to extract.
         *
         * @return An iterator pointing to the element immediately following <i>it</i> prior to the element being
         *		   erased. If no such element exists,returns {@link end end()}.
         */
        extract(it: MapReverseIterator<Key, T>): MapReverseIterator<Key, T>;
        /**
         * @hidden
         */
        private _Extract_by_key(key);
        /**
         * @hidden
         */
        private _Extract_by_iterator(it);
        /**
         * @hidden
         */
        private _Extract_by_reverse_iterator(it);
        /**
         * Merge two maps.
         *
         * Attempts to extract each element in *source* and insert it into this container. If there's an element in this
         * container with key equivalent to the key of an element from *source*, tnen that element is not extracted from
         * the *source*. Otherwise, no element with same key exists in this container, then that element will be
         * transfered from the *source* to this container.
         *
         * @param source A {@link MapContainer map container} to transfer the elements from.
         */
        merge<L extends Key, U extends T>(source: MapContainer<L, U>): void;
    }
}
declare namespace std.base {
    /**
     * An abstract set.
     *
     * {@link SetContainer SetContainers} are containers that store elements allowing fast retrieval of
     * individual elements based on their value.
     *
     * In an {@link SetContainer}, the value of an element is at the same time its <i>key</i>, used to uniquely
     * identify it. <i>Keys</i> are immutable, therefore, the elements in an {@link SetContainer} cannot be modified
     * once in the container - they can be inserted and removed, though.
     *
     * {@link SetContainer} stores elements, keeps sequence and enables indexing by inserting elements into a
     * {@link List} and registering {@link ListIterator iterators} of the {@link data_ list container} to an index
     * table like {@link RBTree tree} or {@link HashBuckets hash-table}.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/set_containers.png" style="max-width: 100%" /></a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		position in the container.
     *	</dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     *
     *	<dt> Unique keys </dt>
     *	<dd> No two elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <T> Type of the elements. Each element in a {@link SetContainer} container is also identified
     *			  by this value (each value is itself also the element's <i>key</i>).
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class UniqueSet<T> extends SetContainer<T> {
        /**
         * @inheritdoc
         */
        count(key: T): number;
        /**
         * Insert an element.
         *
         * Extends the container by inserting new elements, effectively increasing the container {@link size} by
         * the number of element inserted (zero or one).
         *
         * Because elements in a {@link UniqueSet UniqueSets} are unique, the insertion operation checks whether
         * each inserted element is equivalent to an element already in the container, and if so, the element is not
         * inserted, returning an iterator to this existing element (if the function returns a value).
         *
         * For a similar container allowing for duplicate elements, see {@link MultiSet}.
         *
         * @param key Value to be inserted as an element.
         *
         * @return A {@link Pair}, with its member {@link Pair.first} set to an iterator pointing to either the newly
         *		   inserted element or to the equivalent element already in the {@link UniqueSet}. The
         *		   {@link Pair.second} element in the {@link Pair} is set to true if a new element was inserted or
         *		   false if an equivalent element already existed.
         */
        insert(val: T): Pair<SetIterator<T>, boolean>;
        /**
         * @inheritdoc
         */
        insert(hint: SetIterator<T>, val: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        insert(hint: SetReverseIterator<T>, val: T): SetReverseIterator<T>;
        /**
         * @inheritdoc
         */
        insert<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
        /**
         * Extract an element.
         *
         * Extracts the element pointed to by <i>val</i> and erases it from the {@link UniqueSet}.
         *
         * @param val Value to be extracted.
         *
         * @return A value.
         */
        extract(val: T): T;
        /**
         * Extract an element.
         *
         * Extracts the element pointed to by <i>key</i> and erases it from the {@link UniqueMap}.
         *
         * @param it An iterator pointing an element to extract.
         *
         * @return An iterator pointing to the element immediately following <i>it</i> prior to the element being
         *		   erased. If no such element exists,returns {@link end end()}.
         */
        extract(it: SetIterator<T>): SetIterator<T>;
        /**
         * Extract an element.
         *
         * Extracts the element pointed to by <i>key</i> and erases it from the {@link UniqueMap}.
         *
         * @param it An iterator pointing an element to extract.
         *
         * @return An iterator pointing to the element immediately following <i>it</i> prior to the element being
         *		   erased. If no such element exists,returns {@link end end()}.
         */
        extract(it: SetReverseIterator<T>): SetReverseIterator<T>;
        /**
         * @hidden
         */
        private _Extract_by_key(val);
        /**
         * @hidden
         */
        private _Extract_by_iterator(it);
        /**
         * @hidden
         */
        private _Extract_by_reverse_iterator(it);
        /**
         * Merge two sets.
         *
         * Attempts to extract each element in *source* and insert it into this container. If there's an element in this
         * container with key equivalent to the key of an element from *source*, tnen that element is not extracted from
         * the *source*. Otherwise, no element with same key exists in this container, then that element will be
         * transfered from the *source* to this container.
         *
         * @param source A {@link SetContainer set container} to transfer the elements from.
         */
        merge<U extends T>(source: SetContainer<U>): void;
    }
}
declare namespace std.Deque {
    type iterator<T> = DequeIterator<T>;
    type reverse_iterator<T> = DequeReverseIterator<T>;
}
declare namespace std {
    /**
     * Double ended queue.
     *
     * {@link Deque} (usually pronounced like "<i>deck</i>") is an irregular acronym of
     * <b>d</b>ouble-<b>e</b>nded <b>q</b>ueue. Double-ended queues are sequence containers with dynamic sizes that can be
     * expanded or contracted on both ends (either its front or its back).
     *
     * Specific libraries may implement deques in different ways, generally as some form of dynamic array. But in any
     * case, they allow for the individual elements to be accessed directly through random access iterators, with storage
     * handled automatically by expanding and contracting the container as needed.
     *
     * Therefore, they provide a functionality similar to vectors, but with efficient insertion and deletion of
     * elements also at the beginning of the sequence, and not only at its end. But, unlike {@link Vector Vectors},
     * {@link Deque Deques} are not guaranteed to store all its elements in contiguous storage locations: accessing
     * elements in a <u>deque</u> by offsetting a pointer to another element causes undefined behavior.
     *
     * Both {@link Vector}s and {@link Deque}s provide a very similar interface and can be used for similar purposes,
     * but internally both work in quite different ways: While {@link Vector}s use a single array that needs to be
     * occasionally reallocated for growth, the elements of a {@link Deque} can be scattered in different chunks of
     * storage, with the container keeping the necessary information internally to provide direct access to any of its
     * elements in constant time and with a uniform sequential interface (through iterators). Therefore,
     * {@link Deque Deques} are a little more complex internally than {@link Vector}s, but this allows them to grow more
     * efficiently under certain circumstances, especially with very long sequences, where reallocations become more
     * expensive.
     *
     * For operations that involve frequent insertion or removals of elements at positions other than the beginning or
     * the end, {@link Deque Deques} perform worse and have less consistent iterators and references than
     * {@link List Lists}.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /> </a>
     *
     *
     * ### Container properties
     * <dl>
     *	<dt> Sequence </dt>
     *	<dd> Elements in sequence containers are ordered in a strict linear sequence. Individual elements
     *		 are accessed by their position in this sequence. </dd>
     *
     *	<dt> Dynamic array </dt>
     *	<dd> Generally implemented as a dynamic array, it allows direct access to any element in the
     *		 sequence and provides relatively fast addition/removal of elements at the beginning or the end
     *		 of the sequence. </dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *
     * @reference http://www.cplusplus.com/reference/deque/deque/
     * @author Jeongho Nam <http://samchon.org>
     */
    class Deque<T> extends base.Container<T> implements base.IArrayContainer<T>, base.IDequeContainer<T> {
        /**
         * @hidden
         */
        private matrix_;
        /**
         * @hidden
         */
        private size_;
        /**
         * @hidden
         */
        private capacity_;
        /**
         * @hidden
         */
        private begin_;
        /**
         * @hidden
         */
        private end_;
        /**
         * @hidden
         */
        private rend_;
        /**
         * Default Constructor.
         *
         * Constructs an empty container, with no elements.
         */
        constructor();
        /**
         * Initializer list Constructor.
         *
         * Constructs a container with a copy of each of the elements in <i>array</i>, in the same order.
         *
         * @param array An array containing elements to be copied and contained.
         */
        constructor(items: Array<T>);
        /**
         * Fill Constructor.
         *
         * Constructs a container with <i>n</i> elements. Each element is a copy of <i>val</i> (if provided).
         *
         * @param n Initial container size (i.e., the number of elements in the container at construction).
         * @param val Value to fill the container with. Each of the <i>n</i> elements in the container is
         *			  initialized to a copy of this value.
         */
        constructor(size: number, val: T);
        /**
         * Copy Constructor.
         *
         * Constructs a container with a copy of each of the elements in <i>container</i>, in the same order.
         *
         * @param container Another container object of the same type (with the same class template
         *					arguments <i>T</i>), whose contents are either copied or acquired.
         */
        constructor(container: Deque<T>);
        /**
         * Range Constructor.
         *
         * Constructs a container with as many elements as the range (<i>begin</i>, <i>end<i>), with each
         * element emplace-constructed from its corresponding element in that range, in the same order.
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: Iterator<T>, end: Iterator<T>);
        /**
         * @inheritdoc
         */
        assign<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
        /**
         * @inheritdoc
         */
        assign(n: number, val: T): void;
        /**
         * Request a change in capacity.
         *
         * Requests that the {@link Deque container} {@link capacity} be at least enough to contain
         * <i>n</i> elements.
         *
         * If <i>n</i> is greater than the current {@link Deque container} {@link capacity}, the
         * function causes the {@link Deque container} to reallocate its storage increasing its
         * {@link capacity} to <i>n</i> (or greater).
         *
         * In all other cases, the function call does not cause a reallocation and the
         * {@link Deque container} {@link capacity} is not affected.
         *
         * This function has no effect on the {@link Deque container} {@link size} and cannot alter
         * its elements.
         *
         * @param n Minimum {@link capacity} for the {@link Deque container}.
         *			Note that the resulting {@link capacity} may be equal or greater than <i>n</i>.
         */
        reserve(capacity: number): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        size(): number;
        /**
         * @inheritdoc
         */
        empty(): boolean;
        /**
         * Return size of allocated storage capacity.
         *
         * Returns the size of the storage space currently allocated for the {@link Deque container},
         * expressed in terms of elements.
         *
         * This {@link capacity} is not necessarily equal to the {@link Deque container} {@link size}.
         * It can be equal or greater, with the extra space allowing to accommodate for growth without the
         * need to reallocate on each insertion.
         *
         * Notice that this {@link capacity} does not suppose a limit on the {@link size} of the
         * {@link Deque container}. When this {@link capacity} is exhausted and more is needed, it is
         * automatically expanded by the {@link Deque container} (reallocating it storage space).
         * The theoretical limit on the {@link size} of a {@link Deque container} is given by member
         * {@link max_size}.
         *
         * The {@link capacity} of a {@link Deque container} can be explicitly altered by calling member
         * {@link Deque.reserve}.
         *
         * @return The size of the currently allocated storage capacity in the {@link Deque container},
         *		   measured in terms of the number elements it can hold.
         */
        capacity(): number;
        /**
         * @inheritdoc
         */
        front(): T;
        /**
         * @inheritdoc
         */
        back(): T;
        /**
         * @inheritdoc
         */
        begin(): DequeIterator<T>;
        /**
         * @inheritdoc
         */
        end(): DequeIterator<T>;
        /**
         * @inheritdoc
         */
        rbegin(): DequeReverseIterator<T>;
        /**
         * @inheritdoc
         */
        rend(): DequeReverseIterator<T>;
        /**
         * @inheritdoc
         */
        at(index: number): T;
        /**
         * @inheritdoc
         */
        set(index: number, val: T): void;
        /**
         * @hidden
         */
        private _Fetch_index(index);
        /**
         * @hidden
         */
        private _Compute_col_size(capacity?);
        /**
         * @inheritdoc
         */
        push(...items: T[]): number;
        /**
         * @inheritdoc
         */
        push_front(val: T): void;
        /**
         * @inheritdoc
         */
        push_back(val: T): void;
        /**
         * @inheritdoc
         */
        pop_front(): void;
        /**
         * @inheritdoc
         */
        pop_back(): void;
        /**
         * @inheritdoc
         */
        insert(position: DequeIterator<T>, val: T): DequeIterator<T>;
        /**
         * @inheritdoc
         */
        insert(position: DequeIterator<T>, n: number, val: T): DequeIterator<T>;
        /**
         * @inheritdoc
         */
        insert<U extends T, InputIterator extends Iterator<U>>(position: DequeIterator<T>, begin: InputIterator, end: InputIterator): DequeIterator<T>;
        /**
         * @inheritdoc
         */
        insert(position: DequeReverseIterator<T>, val: T): DequeReverseIterator<T>;
        /**
         * @inheritdoc
         */
        insert(position: DequeReverseIterator<T>, n: number, val: T): DequeReverseIterator<T>;
        /**
         * @inheritdoc
         */
        insert<U extends T, InputIterator extends Iterator<U>>(position: DequeReverseIterator<T>, begin: InputIterator, end: InputIterator): DequeReverseIterator<T>;
        /**
         * @hidden
         */
        private _Insert_by_val(position, val);
        /**
         * @hidden
         */
        private _Insert_by_repeating_val(position, n, val);
        /**
         * @hidden
         */
        protected _Insert_by_range<U extends T, InputIterator extends Iterator<U>>(pos: DequeIterator<T>, first: InputIterator, last: InputIterator): DequeIterator<T>;
        /**
         * @hidden
         */
        private _Insert_to_middle<U, InputIterator>(pos, first, last);
        /**
         * @hidden
         */
        private _Insert_to_end<U, InputIterator>(first, last);
        /**
         * @hidden
         */
        private _Try_expand_capacity(size);
        /**
         * @hidden
         */
        private _Try_add_row_at_front();
        /**
         * @hidden
         */
        private _Try_add_row_at_back();
        /**
         * @inheritdoc
         */
        erase(position: DequeIterator<T>): DequeIterator<T>;
        /**
         * @inheritdoc
         */
        erase(first: DequeIterator<T>, last: DequeIterator<T>): DequeIterator<T>;
        /**
         * @inheritdoc
         */
        erase(position: DequeReverseIterator<T>): DequeReverseIterator<T>;
        /**
         * @inheritdoc
         */
        erase(first: DequeReverseIterator<T>, last: DequeReverseIterator<T>): DequeReverseIterator<T>;
        /**
         * @hidden
         */
        protected _Erase_by_range(first: DequeIterator<T>, last: DequeIterator<T>): DequeIterator<T>;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link Deque container} object with same type of elements. Sizes and container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were in <i>obj</i>
         * before the call, and the elements of <i>obj</i> are those which were in this. All iterators, references and
         * pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link Deque container} of the same type of elements (i.e., instantiated
         *			  with the same template parameter, <b>T</b>) whose content is swapped with that of this
         *			  {@link Deque container}.
         */
        swap(obj: Deque<T>): void;
        /**
         * @inheritdoc
         */
        swap(obj: base.Container<T>): void;
        /**
         * @hidden
         */
        private static readonly ROW_SIZE;
        /**
         * @hidden
         */
        private static readonly MIN_CAPACITY;
        /**
         * @hidden
         */
        private static readonly MAGNIFIER;
    }
}
declare namespace std {
    /**
     * An iterator of {@link Deque}.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /> </a>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class DequeIterator<T> extends Iterator<T> implements base.IArrayIterator<T> {
        /**
         * @hidden
         */
        private index_;
        /**
         * Construct from the source {@link Deque container}.
         *
         * #### Note
         * Do not create the iterator directly, by yourself.
         *
         * Use {@link Deque.begin begin()}, {@link Deque.end end()} in {@link Deque container} instead.
         *
         * @param source The source {@link Deque container} to reference.
         * @param index Sequence number of the element in the source {@link Deque}.
         */
        constructor(source: Deque<T>, index: number);
        /**
         * @inheritdoc
         */
        source(): Deque<T>;
        /**
         * @inheritdoc
         */
        index(): number;
        /**
         * @inheritdoc
         */
        /**
         * Set value of the iterator is pointing to.
         *
         * @param val Value to set.
         */
        value: T;
        /**
         * @inheritdoc
         */
        prev(): DequeIterator<T>;
        /**
         * @inheritdoc
         */
        next(): DequeIterator<T>;
        /**
         * @inheritdoc
         */
        advance(n: number): DequeIterator<T>;
        /**
         * @inheritdoc
         */
        equals(obj: DequeIterator<T>): boolean;
        /**
         * @inheritdoc
         */
        swap(obj: DequeIterator<T>): void;
    }
}
declare namespace std {
    /**
     * A reverse-iterator of Deque.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /> </a>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class DequeReverseIterator<T> extends ReverseIterator<T, Deque<T>, DequeIterator<T>, DequeReverseIterator<T>> implements base.IArrayIterator<T> {
        /**
         * Construct from base iterator.
         *
         * @param base A reference of the base iterator, which iterates in the opposite direction.
         */
        constructor(base: DequeIterator<T>);
        /**
         * @hidden
         */
        protected _Create_neighbor(base: DequeIterator<T>): DequeReverseIterator<T>;
        /**
         * @inheritdoc
         */
        index(): number;
        /**
         * @inheritdoc
         */
        /**
         * Set value of the iterator is pointing to.
         *
         * @param val Value to set.
         */
        value: T;
    }
}
declare namespace std {
    /**
     * Function handling termination on exception
     *
     * Calls the current terminate handler.
     *
     * By default, the terminate handler calls abort. But this behavior can be redefined by calling
     * {@link set_terminate}.
     *
     * This function is automatically called when no <code>catch</code> handler can be found for a thrown exception,
     * or for some other exceptional circumstance that makes impossible to continue the exception handling process.
     *
     * This function is provided so that the terminate handler can be explicitly called by a program that needs to
     * abnormally terminate, and works even if {@link set_terminate} has not been used to set a custom terminate handler
     * (calling abort in this case).
     */
    function terminate(): void;
    /**
     * Set <i>terminate handler</i> function.
     *
     * A <i>terminate handler</i> function is a function automatically called when the exception handling process has
     * to be abandoned for some reason. This happens when no catch handler can be found for a thrown exception, or for
     * some other exceptional circumstance that makes impossible to continue the exception handling process.
     *
     * Before this function is called by the program for the first time, the default behavior is to call abort.
     *
     * A program may explicitly call the current terminate handler function by calling {@link terminate}.
     *
     * @param f Function that takes no parameters and returns no value (<i>void</i>).
     */
    function set_terminate(f: () => void): void;
    /**
     * Get <i>terminate handler</i> function.
     *
     * The <i>terminate handler</i> function is automatically called when no <code>catch</code> handler can be found
     * for a thrown exception, or for some other exceptional circumstance that makes impossible to continue the exception
     * handling process.
     *
     * If no such function has been set by a previous call to {@link set_terminate}, the function returns a
     * <i>null-pointer</i>.
     *
     * @return If {@link set_terminate} has previously been called by the program, the function returns the current
     *		   <i>terminate handler</i> function. Otherwise, it returns a <i>null-pointer</i>.
     */
    function get_terminate(): () => void;
    /**
     * Standard exception class.
     *
     * Base class for standard exceptions.
     *
     * All objects thrown by components of the standard library are derived from this class.
     * Therefore, all standard exceptions can be caught by catching this type by reference.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/exception/exception
     * @author Jeongho Nam <http://samchon.org>
     */
    class Exception {
        /**
         * @hidden
         */
        private message_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from a message.
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message: string);
        /**
         * Get string identifying exception.
         *
         * Returns a string that may be used to identify the exception.
         *
         * The particular representation pointed by the returned value is implementation-defined.
         * As a virtual function, derived classes may redefine this function so that specify value are
         * returned.
         */
        what(): string;
    }
    /**
     * Logic error exception.
     *
     * This class defines the type of objects thrown as exceptions to report errors in the internal
     * logical of the program, such as violation of logical preconditions or class invariants.
     *
     * These errors are presumably detectable before the program executes.
     *
     * It is used as a base class for several logical error exceptions.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/logic_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class LogicError extends Exception {
        /**
         * Construct from a message.
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message: string);
    }
    /**
     * Domain error exception.
     *
     * This class defines the type of objects thrown as exceptions to report domain errors.
     *
     * Generally, the domain of a mathematical function is the subset of values that it is defined for.
     * For example, the square root function is only defined for non-negative numbers. Thus, a negative number
     * for such a function would qualify as a domain error.
     *
     * No component of the standard library throws exceptions of this type. It is designed as a standard
     * exception to be thrown by programs.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a></p>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/domain_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class DomainError extends LogicError {
        /**
         * Construct from a message.
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message: string);
    }
    /**
     * Invalid argument exception.
     *
     * This class defines the type of objects thrown as exceptions to report an invalid argument.
     *
     * It is a standard exception that can be thrown by programs. Some components of the standard library
     * also throw exceptions of this type to signal invalid arguments.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/invalid_argument
     * @author Jeongho Nam <http://samchon.org>
     */
    class InvalidArgument extends LogicError {
        /**
         * Construct from a message.
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message: string);
    }
    /**
     * Length error exception.
     *
     * This class defines the type of objects thrown as exceptions to report a length error.
     *
     * It is a standard exception that can be thrown by programs. Some components of the standard library,
     * such as vector and string also throw exceptions of this type to signal errors resizing.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/length_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class LengthError extends LogicError {
        /**
         * Construct from a message.
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message: string);
    }
    /**
     * Out-of-range exception.
     *
     * This class defines the type of objects thrown as exceptions to report an out-of-range error.
     *
     * It is a standard exception that can be thrown by programs. Some components of the standard library,
     * such as vector, deque, string and bitset also throw exceptions of this type to signal arguments
     * out of range.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/out_of_range
     * @author Jeongho Nam <http://samchon.org>
     */
    class OutOfRange extends LogicError {
        /**
         * Construct from a message.
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message: string);
    }
    /**
     * Runtime error exception.
     *
     * This class defines the type of objects thrown as exceptions to report errors that can only be
     * detected during runtime.
     *
     * It is used as a base class for several runtime error exceptions.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/runtime_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class RuntimeError extends Exception {
        /**
         * Construct from a message.
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message: string);
    }
    /**
     * Overflow error exception.
     *
     * This class defines the type of objects thrown as exceptions to arithmetic overflow errors.
     *
     * It is a standard exception that can be thrown by programs. Some components of the standard library
     * also throw exceptions of this type to signal range errors.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/overflow_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class OverflowError extends RuntimeError {
        /**
         * Construct from a message.
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message: string);
    }
    /**
     * Underflow error exception.
     *
     * This class defines the type of objects thrown as exceptions to arithmetic underflow errors.
     *
     * No component of the standard library throws exceptions of this type. It is designed as a standard
     * exception to be thrown by programs.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/underflow_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class UnderflowError extends RuntimeError {
        /**
         * Construct from a message.
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message: string);
    }
    /**
     * Range error exception.
     *
     * This class defines the type of objects thrown as exceptions to report range errors in internal
     * computations.
     *
     * It is a standard exception that can be thrown by programs. Some components of the standard library
     * also throw exceptions of this type to signal range errors.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/range_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class RangeError extends RuntimeError {
        /**
         * Construct from a message.
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message: string);
    }
}
declare namespace std {
    /**
     * Function object class for equality comparison.
     *
     * Binary function object class whose call returns whether its two arguments compare <i>equal</i> (as returned by
     * operator ==).
     *
     * Generically, function objects are instances of a class with member function {@link IComparable.equal_to equal_to}
     * defined. This member function allows the object to be used with the same syntax as a function call.
     *
     * @param x First element to compare.
     * @param y Second element to compare.
     *
     * @return Whether the arguments are equal.
     */
    function equal_to<T>(x: T, y: T): boolean;
    /**
     * Function object class for non-equality comparison.
     *
     * Binary function object class whose call returns whether its two arguments compare <i>not equal</i> (as returned
     * by operator operator!=).
     *
     * Generically, function objects are instances of a class with member function {@link IComparable.equal_to equal_to}
     * defined. This member function allows the object to be used with the same syntax as a function call.
     *
     * @param x First element to compare.
     * @param y Second element to compare.
     *
     * @return Whether the arguments are not equal.
     */
    function not_equal_to<T>(x: T, y: T): boolean;
    /**
     * Function for less-than inequality comparison.
     *
     * Binary function returns whether the its first argument compares less than the second.
     *
     * Generically, function objects are instances of a class with member function {@link IComparable.less less}
     * defined. If an object doesn't have the method, then its own uid will be used to compare insteadly.
     * This member function allows the object to be used with the same syntax as a function call.
     *
     * Objects of this class can be used on standard algorithms such as {@link sort sort()}</code>,
     * {@link merge merge()} or {@link TreeMap.lower_bound lower_bound()}.
     *
     * @param <T> Type of arguments to compare by the function call. The type shall supporrt the operation
     *			  <i>operator<()</i> or method {@link IComparable.less less}.
     *
     * @param x First element, the standard of comparison.
     * @param y Second element compare with the first.
     *
     * @return Whether the first parameter is less than the second.
     */
    function less<T>(x: T, y: T): boolean;
    /**
     * Function object class for less-than-or-equal-to comparison.
     *
     * Binary function object class whose call returns whether the its first argument compares {@link less less than} or
     * {@link equal_to equal to} the second (as returned by operator <=).
     *
     * Generically, <i>function objects</i> are instances of a class with member function {@link IComparable.less less}
     * and {@link IComparable.equal_to equal_to} defined. This member function allows the object to be used with the same
     * syntax as a function call.
     *
     * @param x First element, the standard of comparison.
     * @param y Second element compare with the first.
     *
     * @return Whether the <i>x</i> is {@link less less than} or {@link equal_to equal to} the <i>y</i>.
     */
    function less_equal<T>(x: T, y: T): boolean;
    /**
     * Function for greater-than inequality comparison.
     *
     * Binary function returns whether the its first argument compares greater than the second.
     *
     * Generically, function objects are instances of a class with member function {@link less} and
     * {@link equal_to equal_to()} defined. If an object doesn't have those methods, then its own uid will be used
     * to compare insteadly. This member function allows the object to be used with the same syntax as a function
     * call.
     *
     * Objects of this class can be used on standard algorithms such as {@link sort sort()},
     * {@link merge merge()} or {@link TreeMap.lower_bound lower_bound()}.
     *
     * @param <T> Type of arguments to compare by the function call. The type shall supporrt the operation
     *			  <i>operator>()</i> or method {@link IComparable.greater greater}.
     *
     * @return Whether the <i>x</i> is greater than the <i>y</i>.
     */
    function greater<T>(x: T, y: T): boolean;
    /**
     * Function object class for greater-than-or-equal-to comparison.
     *
     * Binary function object class whose call returns whether the its first argument compares
     * {@link greater greater than} or {@link equal_to equal to} the second (as returned by operator >=).
     *
     * Generically, function objects are instances of a class with member function {@link IComparable.less less}
     * defined. If an object doesn't have the method, then its own uid will be used to compare insteadly.
     * This member function allows the object to be used with the same syntax as a function call.
     *
     * @param x First element, the standard of comparison.
     * @param y Second element compare with the first.
     *
     * @return Whether the <i>x</i> is {@link greater greater than} or {@link equal_to equal to} the <i>y</i>.
     */
    function greater_equal<T>(x: T, y: T): boolean;
    /**
     * Logical AND function object class.
     *
     * Binary function object class whose call returns the result of the <i>logical "and"</i> operation between its two
     * arguments (as returned by operator &&).
     *
     * Generically, function objects are instances of a class with member function operator() defined. This member
     * function allows the object to be used with the same syntax as a function call.
     *
     * @param x First element.
     * @param y Second element.
     *
     * @return Result of logical AND operation.
     */
    function logical_and<T>(x: T, y: T): boolean;
    /**
     * Logical OR function object class.
     *
     * Binary function object class whose call returns the result of the <i>logical "or"</i> operation between its two
     * arguments (as returned by operator ||).
     *
     * Generically, function objects are instances of a class with member function operator() defined. This member
     * function allows the object to be used with the same syntax as a function call.
     *
     * @param x First element.
     * @param y Second element.
     *
     * @return Result of logical OR operation.
     */
    function logical_or<T>(x: T, y: T): boolean;
    /**
     * Logical NOT function object class.
     *
     * Unary function object class whose call returns the result of the <i>logical "not"</i> operation on its argument
     * (as returned by operator !).
     *
     * Generically, function objects are instances of a class with member function operator() defined. This member
     * function allows the object to be used with the same syntax as a function call.
     *
     * @param x Target element.
     *
     * @return Result of logical NOT operation.
     */
    function logical_not<T>(x: T): boolean;
    /**
     * Bitwise AND function object class.
     *
     * Binary function object class whose call returns the result of applying the <i>bitwise "and"</i> operation between
     * its two arguments (as returned by operator &).
     *
     * @param x First element.
     * @param y Second element.
     *
     * @return Result of bitwise AND operation.
     */
    function bit_and(x: number, y: number): number;
    /**
     * Bitwise OR function object class.
     *
     * Binary function object class whose call returns the result of applying the <i>bitwise "and"</i> operation between
     * its two arguments (as returned by operator &).
     *
     * @param x First element.
     * @param y Second element.
     *
     * @return Result of bitwise OR operation.
     */
    function bit_or(x: number, y: number): number;
    /**
     * Bitwise XOR function object class.
     *
     * Binary function object class whose call returns the result of applying the <i>bitwise "exclusive or"</i>
     * operation between its two arguments (as returned by operator ^).
     *
     * @param x First element.
     * @param y Second element.
     *
     * @return Result of bitwise XOR operation.
     */
    function bit_xor(x: number, y: number): number;
    /**
     * Default hash function for number.
     *
     * Unary function that defines the default hash function used by the standard library.
     *
     * The functional call returns a hash value of its argument: A hash value is a value that depends solely on
     * its argument, returning always the same value for the same argument (for a given execution of a program). The
     * value returned shall have a small likelihood of being the same as the one returned for a different argument.
     *
     *
     * @param val Value to be hashed.
     *
     * @return Returns a hash value for its argument, as a value of type number. The number is an unsigned integer.
     */
    function hash(val: number): number;
    /**
     * Default hash function for string.
     *
     * Unary function that defines the default hash function used by the standard library.
     *
     * The functional call returns a hash value of its argument: A hash value is a value that depends solely on
     * its argument, returning always the same value for the same argument (for a given execution of a program). The
     * value returned shall have a small likelihood of being the same as the one returned for a different argument.
     *
     * @param str A string to be hashed.
     *
     * @return Returns a hash value for its argument, as a value of type number. The number is an unsigned integer.
     */
    function hash(str: string): number;
    /**
     * Default hash function for Object.
     *
     * Unary function that defines the default hash function used by the standard library.
     *
     * The functional call returns a hash value of its argument: A hash value is a value that depends solely on
     * its argument, returning always the same value for the same argument (for a given execution of a program). The
     * value returned shall have a small likelihood of being the same as the one returned for a different argument.
     *
     *
     * The default {@link hash} function of Object returns a value returned from {@link hash hash(number)} with
     * an <b>unique id</b> of each Object. If you want to specify {@link hash} function of a specific class, then
     * define a member function <code>public hashCode(): number</code> in the class.
     *
     * @param obj Object to be hashed.
     *
     * @return Returns a hash value for its argument, as a value of type number. The number is an unsigned integer.
     */
    function hash(obj: Object): number;
    /**
     * Exchange contents of {@link IContainers containers}.
     *
     * The contents of container <i>left</i> are exchanged with those of <i>right</i>. Both container objects must have
     * same type of elements (same template parameters), although sizes may differ.
     *
     * After the call to this member function, the elements in <i>left</i> are those which were in <i>right</i> before
     * the call, and the elements of <i>right</i> are those which were in <i>left</i>. All iterators, references and
     * pointers remain valid for the swapped objects.
     *
     * This is an overload of the generic algorithm swap that improves its performance by mutually transferring
     * ownership over their assets to the other container (i.e., the containers exchange references to their data, without
     * actually performing any element copy or movement): It behaves as if <i>left</i>.
     * {@link Container.swap swap}(<i>right</i>) was called.
     *
     * @param left A {@link Container container} to swap its contents.
     * @param right A {@link Container container} to swap its contents.
     */
    function swap<T>(left: base.Container<T>, right: base.Container<T>): void;
    /**
     * Exchange contents of queues.
     *
     * Exchanges the contents of <i>left</i> and <i>right</i>.
     *
     * @param left A {@link Queue} container of the same type. Size may differ.
     * @param right A {@link Queue} container of the same type. Size may differ.
     */
    function swap<T>(left: Queue<T>, right: Queue<T>): void;
    /**
     * Exchange contents of {@link PriorityQueue PriorityQueues}.
     *
     * Exchanges the contents of <i>left</i> and <i>right</i>.
     *
     * @param left A {@link PriorityQueue} container of the same type. Size may differ.
     * @param right A {@link PriorityQueue} container of the same type. Size may differ.
     */
    function swap<T>(left: PriorityQueue<T>, right: PriorityQueue<T>): void;
    /**
     * Exchange contents of {@link Stack Stacks}.
     *
     * Exchanges the contents of <i>left</i> and <i>right</i>.
     *
     * @param left A {@link Stack} container of the same type. Size may differ.
     * @param right A {@link Stack} container of the same type. Size may differ.
     */
    function swap<T>(left: Stack<T>, right: Stack<T>): void;
    /**
     * Exchanges the contents of two {@link UniqueMap unique maps}.
     *
     * The contents of container <i>left</i> are exchanged with those of <i>right</i>. Both container objects must
     * be of the same type (same template parameters), although sizes may differ.
     *
     * After the call to this member function, the elements in <i>left</i> are those which were in <i>right</i>
     * before the call, and the elements of <i>right</i> are those which were in <i>left</i>. All iterators, references
     * and pointers remain valid for the swapped objects.
     *
     * This is an overload of the generic algorithm swap that improves its performance by mutually transferring
     * ownership over their assets to the other container (i.e., the containers exchange references to their data,
     * without actually performing any element copy or movement): It behaves as if
     * <i>left</i>.{@link UniqueMap.swap swap}(<i>right</i>) was called.
     *
     * @param left An {@link UniqueMap unique map} to swap its conents.
     * @param right An {@link UniqueMap unique map} to swap its conents.
     */
    function swap<Key, T>(left: base.UniqueMap<Key, T>, right: base.UniqueMap<Key, T>): void;
    /**
     * Exchanges the contents of two {@link MultiMap multi maps}.
     *
     * The contents of container <i>left</i> are exchanged with those of <i>right</i>. Both container objects must
     * be of the same type (same template parameters), although sizes may differ.
     *
     * After the call to this member function, the elements in <i>left</i> are those which were in <i>right</i>
     * before the call, and the elements of <i>right</i> are those which were in <i>left</i>. All iterators, references
     * and pointers remain valid for the swapped objects.
     *
     * This is an overload of the generic algorithm swap that improves its performance by mutually transferring
     * ownership over their assets to the other container (i.e., the containers exchange references to their data,
     * without actually performing any element copy or movement): It behaves as if
     * <i>left</i>.{@link MultiMap.swap swap}(<i>right</i>) was called.
     *
     * @param left A {@link MultiMap multi map} to swap its conents.
     * @param right A {@link MultiMap multi map} to swap its conents.
     */
    function swap<Key, T>(left: base.MultiMap<Key, T>, right: base.MultiMap<Key, T>): void;
}
declare namespace std {
    /**
     * Bind function arguments.
     *
     * Returns a function object based on <i>fn</i>, but with its arguments bound to <i>args</i>.
     *
     * Each argument may either be bound to a value or be a {@link placeholders placeholder}:
     * <ul>
     *	<li> If bound to a value, calling the returned function object will always use that value as argument. </li>
     *	<li>
     *		If a {@link placeholders placeholder}, calling the returned function object forwards an argument passed to the
     *		call (the one whose order number is specified by the placeholder).
     *	</li>
     * </ul>
     *
     * Calling the returned object returns the same type as fn.
     *
     * @param fn A function object, pointer to function or pointer to member.
     * @param args List of arguments to bind: either values, or {@link placeholders}.
     *
     * @return A function object that, when called, calls <i>fn</i> with its arguments bound to <i>args</i>. If <i>fn</i> is
     *		   a pointer to member, the first argument expected by the returned function is an object of the class <i>fn</i>
     *		   is a member.
     */
    function bind<Ret>(fn: (...args: any[]) => Ret, ...args: any[]): (...args: any[]) => Ret;
    /**
     * Bind function arguments.
     *
     * Returns a function object based on <i>fn</i>, but with its arguments bound to <i>args</i>.
     *
     * Each argument may either be bound to a value or be a {@link placeholders placeholder}:
     * <ul>
     *	<li> If bound to a value, calling the returned function object will always use that value as argument. </li>
     *	<li>
     *		If a {@link placeholders placeholder}, calling the returned function object forwards an argument passed to the
     *		call (the one whose order number is specified by the placeholder).
     *	</li>
     * </ul>
     *
     * Calling the returned object returns the same type as fn.
     *
     * @param fn A function object, pointer to function or pointer to member.
     * @param thisArg This argument, owner object of the member method <i>fn</i>.
     * @param args List of arguments to bind: either values, or {@link placeholders}.
     *
     * @return A function object that, when called, calls <i>fn</i> with its arguments bound to <i>args</i>. If <i>fn</i> is
     *		   a pointer to member, the first argument expected by the returned function is an object of the class <i>fn</i>
     *		   is a member.
     */
    function bind<Ret, T>(fn: (...args: any[]) => Ret, thisArg: T, ...args: any[]): (...args: any[]) => Ret;
}
/**
 * Bind argument placeholders.
 *
 * This namespace declares an unspecified number of objects: <i>_1</i>, <i>_2</i>, <i>_3</i>, ...</i>, which are
 * used to specify placeholders in calls to function {@link bind}.
 *
 * When the function object returned by bind is called, an argument with placeholder {@link _1} is replaced by the
 * first argument in the call, {@link _2} is replaced by the second argument in the call, and so on... For example:
 *
 * <code>
 * let vec: Vector<number> = new Vector<number>();
 *
 * let bind = bind(Vector.insert, _1, vec.end(), _2, _3);
 * bind.apply(vec, 5, 1); // vec.insert(vec.end(), 5, 1);
 * // [1, 1, 1, 1, 1]
 * </code>
 *
 * When a call to {@link bind} is used as a subexpression in another call to <i>bind</i>, the {@link placeholders}
 * are relative to the outermost {@link bind} expression.
 *
 * @reference http://www.cplusplus.com/reference/functional/placeholders/
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace std.placeholders {
    /**
     * @hidden
     */
    class PlaceHolder {
        private index_;
        constructor(index: number);
        index(): number;
    }
    /**
     * Replaced by the first argument in the function call.
     */
    const _1: PlaceHolder;
    /**
     * Replaced by the second argument in the function call.
     */
    const _2: PlaceHolder;
    /**
     * Replaced by the third argument in the function call.
     */
    const _3: PlaceHolder;
    const _4: PlaceHolder;
    const _5: PlaceHolder;
    const _6: PlaceHolder;
    const _7: PlaceHolder;
    const _8: PlaceHolder;
    const _9: PlaceHolder;
    const _10: PlaceHolder;
    const _11: PlaceHolder;
    const _12: PlaceHolder;
    const _13: PlaceHolder;
    const _14: PlaceHolder;
    const _15: PlaceHolder;
    const _16: PlaceHolder;
    const _17: PlaceHolder;
    const _18: PlaceHolder;
    const _19: PlaceHolder;
    const _20: PlaceHolder;
}
declare namespace std.HashMap {
    type iterator<Key, T> = MapIterator<Key, T>;
    type reverse_iterator<Key, T> = MapReverseIterator<Key, T>;
}
declare namespace std {
    /**
     * Hashed, unordered map.
     *
     * {@link HashMap}s are associative containers that store elements formed by the combination of a <i>key value</i>
     * and a <i>mapped value</i>, and which allows for fast retrieval of individual elements based on their <i>keys</i>.
     *
     * In an {@link HashMap}, the <i>key value</i> is generally used to uniquely identify the element, while the
     * <i>mapped value</i> is an object with the content associated to this <i>key</i>. Types of <i>key</i> and
     * <i>mapped value</i> may differ.
     *
     * Internally, the elements in the {@link HashMap} are not sorted in any particular order with respect to either
     * their <i>key</i> or <i>mapped values</i>, but organized into <i>buckets</i> depending on their hash values to allow
     * for fast access to individual elements directly by their <i>key values</i> (with a constant average time complexity
     * on average).
     *
     * {@link HashMap} containers are faster than {@link TreeMap} containers to access individual elements by their
     * <i>key</i>, although they are generally less efficient for range iteration through a subset of their elements.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /> </a>
     *
     * ### Container properties
     * <dl>
     * 	<dt> Associative </dt>
     * 	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     * 	<dt> Hashed </dt>
     * 	<dd> Hashed containers organize their elements using hash tables that allow for fast access to elements
     *		 by their <i>key</i>. </dd>
     *
     * 	<dt> Map </dt>
     * 	<dd> Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		 <i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>. </dd>
     *
     * 	<dt> Unique keys </dt>
     * 	<dd> No two elements in the container can have equivalent keys. </dd>
     * </dl>
     *
     * @param <Key> Type of the key values.
     *				Each element in an {@link HashMap} is uniquely identified by its key value.
     * @param <T> Type of the mapped value.
     *			  Each element in an {@link HashMap} is used to store some data as its mapped value.
     *
     * @reference http://www.cplusplus.com/reference/unordered_map/unordered_map
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMap<Key, T> extends base.UniqueMap<Key, T> implements base.IHashMap<Key, T> {
        /**
         * @hidden
         */
        private hash_buckets_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from elements.
         */
        constructor(items: Pair<Key, T>[]);
        /**
         * Contruct from tuples.
         *
         * @param array Tuples to be contained.
         */
        constructor(array: [Key, T][]);
        /**
         * Copy Constructor.
         */
        constructor(container: HashMap<Key, T>);
        /**
         * Construct from range iterators.
         */
        constructor(begin: Iterator<Pair<Key, T>>, end: Iterator<Pair<Key, T>>);
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(key: Key): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        begin(): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        begin(index: number): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        end(): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        end(index: number): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        rbegin(): MapReverseIterator<Key, T>;
        /**
         * @inheritdoc
         */
        rbegin(index: number): MapReverseIterator<Key, T>;
        /**
         * @inheritdoc
         */
        rend(): MapReverseIterator<Key, T>;
        /**
         * @inheritdoc
         */
        rend(index: number): MapReverseIterator<Key, T>;
        /**
         * @inheritdoc
         */
        bucket_count(): number;
        /**
         * @inheritdoc
         */
        bucket_size(index: number): number;
        /**
         * @inheritdoc
         */
        max_load_factor(): number;
        /**
         * @inheritdoc
         */
        max_load_factor(z: number): void;
        /**
         * @inheritdoc
         */
        bucket(key: Key): number;
        /**
         * @inheritdoc
         */
        reserve(n: number): void;
        /**
         * @inheritdoc
         */
        rehash(n: number): void;
        /**
         * @hidden
         */
        protected _Insert_by_pair(pair: Pair<Key, T>): any;
        /**
         * @hidden
         */
        protected _Insert_by_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
        /**
         * @hidden
         */
        protected _Insert_by_range<L extends Key, U extends T, InputIterator extends Iterator<Pair<L, U>>>(first: InputIterator, last: InputIterator): void;
        /**
         * @hidden
         */
        protected _Handle_insert(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link HashMap map} of the same type. Sizes abd container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were
         * in <i>obj</i> before the call, and the elements of <i>obj</i> are those which were in this. All
         * iterators, references and pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link HashMap map container} of the same type of elements as this (i.e.,
         *			  with the same template parameters, <b>Key</b> and <b>T</b>) whose content is swapped
         *			  with that of this {@link HashMap container}.
         */
        swap(obj: HashMap<Key, T>): void;
        /**
         * @inheritdoc
         */
        swap(obj: base.Container<Pair<Key, T>>): void;
    }
}
declare namespace std.HashMultiMap {
    type iterator<Key, T> = MapIterator<Key, T>;
    type reverse_iterator<Key, T> = MapReverseIterator<Key, T>;
}
declare namespace std {
    /**
     * Hashed, unordered Multimap.
     *
     * {@link HashMultiMap}s are associative containers that store elements formed by the combination of
     * a <i>key value</i> and a <i>mapped value</i>, much like {@link HashMultiMap} containers, but allowing
     * different elements to have equivalent <i>keys</i>.
     *
     * In an {@link HashMultiMap}, the <i>key value</i> is generally used to uniquely identify the
     * element, while the <i>mapped value</i> is an object with the content associated to this <i>key</i>.
     * Types of <i>key</i> and <i>mapped value</i> may differ.
     *
     * Internally, the elements in the {@link HashMultiMap} are not sorted in any particular order with
     * respect to either their <i>key</i> or <i>mapped values</i>, but organized into <i>buckets</i> depending on
     * their hash values to allow for fast access to individual elements directly by their <i>key values</i>
     * (with a constant average time complexity on average).
     *
     * Elements with equivalent <i>keys</i> are grouped together in the same bucket and in such a way that
     * an iterator can iterate through all of them. Iterators in the container are doubly linked iterators.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /> </a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Hashed </dt>
     *	<dd> Hashed containers organize their elements using hash tables that allow for fast access to elements
     *		 by their <i>key</i>. </dd>
     *
     *	<dt> Map </dt>
     *	<dd> Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		 <i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>. </dd>
     *
     *	<dt> Multiple equivalent keys </dt>
     *	<dd> The container can hold multiple elements with equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <Key> Type of the key values.
     *				Each element in an {@link HashMultiMap} is identified by a key value.
     * @param <T> Type of the mapped value.
     *			  Each element in an {@link HashMultiMap} is used to store some data as its mapped value.
     *
     * @reference http://www.cplusplus.com/reference/unordered_map/unordered_multimap
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMultiMap<Key, T> extends base.MultiMap<Key, T> {
        /**
         * @hidden
         */
        private hash_buckets_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from elements.
         */
        constructor(items: Pair<Key, T>[]);
        /**
         * Contruct from tuples.
         *
         * @param array Tuples to be contained.
         */
        constructor(array: [Key, T][]);
        /**
         * Copy Constructor.
         */
        constructor(container: HashMultiMap<Key, T>);
        /**
         * Construct from range iterators.
         */
        constructor(begin: Iterator<Pair<Key, T>>, end: Iterator<Pair<Key, T>>);
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(key: Key): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        count(key: Key): number;
        /**
         * @inheritdoc
         */
        begin(): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        begin(index: number): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        end(): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        end(index: number): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        rbegin(): MapReverseIterator<Key, T>;
        /**
         * @inheritdoc
         */
        rbegin(index: number): MapReverseIterator<Key, T>;
        /**
         * @inheritdoc
         */
        rend(): MapReverseIterator<Key, T>;
        /**
         * @inheritdoc
         */
        rend(index: number): MapReverseIterator<Key, T>;
        /**
         * @inheritdoc
         */
        bucket_count(): number;
        /**
         * @inheritdoc
         */
        bucket_size(n: number): number;
        /**
         * @inheritdoc
         */
        max_load_factor(): number;
        /**
         * @inheritdoc
         */
        max_load_factor(z: number): void;
        /**
         * @inheritdoc
         */
        bucket(key: Key): number;
        /**
         * @inheritdoc
         */
        reserve(n: number): void;
        /**
         * @inheritdoc
         */
        rehash(n: number): void;
        /**
         * @hidden
         */
        protected _Insert_by_pair(pair: Pair<Key, T>): any;
        /**
         * @hidden
         */
        protected _Insert_by_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
        /**
         * @hidden
         */
        protected _Insert_by_range<L extends Key, U extends T, InputIterator extends Iterator<Pair<L, U>>>(first: InputIterator, last: InputIterator): void;
        /**
         * @hidden
         */
        protected _Handle_insert(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link HashMultiMap map} of the same type. Sizes abd container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were
         * in <i>obj</i> before the call, and the elements of <i>obj</i> are those which were in this. All
         * iterators, references and pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link HashMultiMap map container} of the same type of elements as this (i.e.,
         *			  with the same template parameters, <b>Key</b> and <b>T</b>) whose content is swapped
         *			  with that of this {@link HashMultiMap container}.
         */
        swap(obj: HashMultiMap<Key, T>): void;
        /**
         * @inheritdoc
         */
        swap(obj: base.Container<Pair<Key, T>>): void;
    }
}
declare namespace std.HashMultiSet {
    type iterator<T> = SetIterator<T>;
    type reverse_iterator<T> = SetReverseIterator<T>;
}
declare namespace std {
    /**
     * Hashed, unordered Multiset.
     *
     * {@link HashMultiSet HashMultiSets} are containers that store elements in no particular order, allowing fast
     * retrieval of individual elements based on their value, much like {@link HashMultiSet} containers,
     * but allowing different elements to have equivalent values.
     *
     * In an {@link HashMultiSet}, the value of an element is at the same time its <i>key</i>, used to
     * identify it. <i>Keys</i> are immutable, therefore, the elements in an {@link HashMultiSet} cannot be
     * modified once in the container - they can be inserted and removed, though.
     *
     * Internally, the elements in the {@link HashMultiSet} are not sorted in any particular, but
     * organized into <i>buckets</i> depending on their hash values to allow for fast access to individual
     * elements directly by their <i>values</i> (with a constant average time complexity on average).
     *
     * Elements with equivalent values are grouped together in the same bucket and in such a way that an
     * iterator can iterate through all of them. Iterators in the container are doubly linked iterators.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /></a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Hashed </dt>
     *	<dd> Hashed containers organize their elements using hash tables that allow for fast access to elements
     *		 by their <i>key</i>. </dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     *
     *	<dt> Multiple equivalent keys </dt>
     *	<dd> The container can hold multiple elements with equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *		   Each element in an {@link UnorderedMultiSet} is also identified by this value..
     *
     * @reference http://www.cplusplus.com/reference/unordered_set/unordered_multiset
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMultiSet<T> extends base.MultiSet<T> {
        /**
         * @hidden
         */
        private hash_buckets_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from elements.
         */
        constructor(items: T[]);
        /**
         * Copy Constructor.
         */
        constructor(container: HashMultiSet<T>);
        /**
         * Construct from range iterators.
         */
        constructor(begin: Iterator<T>, end: Iterator<T>);
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(key: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        count(key: T): number;
        /**
         * @inheritdoc
         */
        begin(): SetIterator<T>;
        /**
         * @inheritdoc
         */
        begin(index: number): SetIterator<T>;
        /**
         * @inheritdoc
         */
        end(): SetIterator<T>;
        /**
         * @inheritdoc
         */
        end(index: number): SetIterator<T>;
        /**
         * @inheritdoc
         */
        rbegin(): SetReverseIterator<T>;
        /**
         * @inheritdoc
         */
        rbegin(index: number): SetReverseIterator<T>;
        /**
         * @inheritdoc
         */
        rend(): SetReverseIterator<T>;
        /**
         * @inheritdoc
         */
        rend(index: number): SetReverseIterator<T>;
        /**
         * @inheritdoc
         */
        bucket_count(): number;
        /**
         * @inheritdoc
         */
        bucket_size(n: number): number;
        /**
         * @inheritdoc
         */
        max_load_factor(): number;
        /**
         * @inheritdoc
         */
        max_load_factor(z: number): void;
        /**
         * @inheritdoc
         */
        bucket(key: T): number;
        /**
         * @inheritdoc
         */
        reserve(n: number): void;
        /**
         * @inheritdoc
         */
        rehash(n: number): void;
        /**
         * @hidden
         */
        protected _Insert_by_val(val: T): any;
        /**
         * @hidden
         */
        protected _Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>;
        /**
         * @hidden
         */
        protected _Insert_by_range<U extends T, InputIterator extends Iterator<U>>(first: InputIterator, last: InputIterator): void;
        /**
         * @hidden
         */
        protected _Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link HashMultiSet set} of the same type. Sizes abd container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were
         * in <i>obj</i> before the call, and the elements of <i>obj</i> are those which were in this. All
         * iterators, references and pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link HashMultiSet set container} of the same type of elements as this (i.e.,
         *			  with the same template parameters, <b>Key</b> and <b>T</b>) whose content is swapped
         *			  with that of this {@link HashMultiSet container}.
         */
        swap(obj: HashMultiSet<T>): void;
        /**
         * @inheritdoc
         */
        swap(obj: base.Container<T>): void;
    }
}
declare namespace std.HashSet {
    type iterator<T> = SetIterator<T>;
    type reverse_iterator<T> = SetReverseIterator<T>;
}
declare namespace std {
    /**
     * Hashed, unordered set.
     *
     * {@link HashSet}s are containers that store unique elements in no particular order, and which
     * allow for fast retrieval of individual elements based on their value.
     *
     * In an {@link HashSet}, the value of an element is at the same time its <i>key</i>, that
     * identifies it uniquely. Keys are immutable, therefore, the elements in an {@link HashSet} cannot be
     * modified once in the container - they can be inserted and removed, though.
     *
     * Internally, the elements in the {@link HashSet} are not sorted in any particular order, but
     * organized into buckets depending on their hash values to allow for fast access to individual elements
     * directly by their <i>values</i> (with a constant average time complexity on average).
     *
     * {@link HashSet} containers are faster than {@link TreeSet} containers to access individual
     * elements by their <i>key</i>, although they are generally less efficient for range iteration through a
     * subset of their elements.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /></a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Hashed </dt>
     *	<dd> Hashed containers organize their elements using hash tables that allow for fast access to elements
     *		 by their <i>key</i>. </dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     *
     *	<dt> Unique keys </dt>
     *	<dd> No two elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *			  Each element in an {@link HashSet} is also uniquely identified by this value.
     *
     * @reference http://www.cplusplus.com/reference/unordered_set/unordered_set
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashSet<T> extends base.UniqueSet<T> implements base.IHashSet<T> {
        /**
         * @hidden
         */
        private hash_buckets_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from elements.
         */
        constructor(items: T[]);
        /**
         * Copy Constructor.
         */
        constructor(container: HashSet<T>);
        /**
         * Construct from range iterators.
         */
        constructor(begin: Iterator<T>, end: Iterator<T>);
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(key: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        begin(): SetIterator<T>;
        /**
         * @inheritdoc
         */
        begin(index: number): SetIterator<T>;
        /**
         * @inheritdoc
         */
        end(): SetIterator<T>;
        /**
         * @inheritdoc
         */
        end(index: number): SetIterator<T>;
        /**
         * @inheritdoc
         */
        rbegin(): SetReverseIterator<T>;
        /**
         * @inheritdoc
         */
        rbegin(index: number): SetReverseIterator<T>;
        /**
         * @inheritdoc
         */
        rend(): SetReverseIterator<T>;
        /**
         * @inheritdoc
         */
        rend(index: number): SetReverseIterator<T>;
        /**
         * @inheritdoc
         */
        bucket_count(): number;
        /**
         * @inheritdoc
         */
        bucket_size(n: number): number;
        /**
         * @inheritdoc
         */
        max_load_factor(): number;
        /**
         * @inheritdoc
         */
        max_load_factor(z: number): void;
        /**
         * @inheritdoc
         */
        bucket(key: T): number;
        /**
         * @inheritdoc
         */
        reserve(n: number): void;
        /**
         * @inheritdoc
         */
        rehash(n: number): void;
        /**
         * @hidden
         */
        protected _Insert_by_val(val: T): any;
        /**
         * @hidden
         */
        protected _Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>;
        /**
         * @hidden
         */
        protected _Insert_by_range<U extends T, InputIterator extends Iterator<U>>(first: InputIterator, last: InputIterator): void;
        /**
         * @hidden
         */
        protected _Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link HashSet set} of the same type. Sizes abd container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were
         * in <i>obj</i> before the call, and the elements of <i>obj</i> are those which were in this. All
         * iterators, references and pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link HashSet set container} of the same type of elements as this (i.e.,
         *			  with the same template parameters, <b>Key</b> and <b>T</b>) whose content is swapped
         *			  with that of this {@link HashSet container}.
         */
        swap(obj: HashSet<T>): void;
        /**
         * @inheritdoc
         */
        swap(obj: base.Container<T>): void;
    }
}
declare namespace std {
    /**
     * Comparable instance.
     *
     * {@link IComparable} is a common interface for objects who can compare each other.
     *
     * @reference https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IComparable<T> extends Object {
        /**
         * Indicates whether some other object is &quot;equal to&quot; this one.
         *
         * The {@link equal_to} method implements an equivalence relation on non-null object references:
         *
         * <ul>
         *	<li>
         *		It is <b>reflexive</b>: for any non-null reference value <code>x</code>, <code>x.equal_to(x)</code>
         *		should return <code>true</code>.
         *	</li>
         *	<li>
         *		It is <b>symmetric</b>: for any non-null reference values <code>x</code> and <code>y</code>,
         *		<code>x.equal_to(y)</code> should return <code>true</code> if and only if <code>y.equal_to(x)</code>
         *		returns <code>true</code>. </li>
         *	<li>
         *		It is <b>transitive</b>: for any non-null reference values <code>x</code>, <code>y</code>, and
         *		<code>z</code>, if <code>x.equal_to(y)</code> returns <code>true</code> and <code>y.equal_to(z)</code>
         *		returns <code>true</code>, then <code>x.equal_to(z)</code> should return <code>true</code>.
         *	</li>
         *	<li>
         *		It is <b>consistent</b>: for any non-null reference values <code>x</code> and <code>y</code>, multiple
         *		invocations of <code>x.equal_to(y)</code> consistently return <code>true</code> or consistently return
         *		<code>false</code>, provided no information used in equal_to comparisons on the objects is modified.
         *	</li>
         *	<li>
         *		For any non-null reference value <code>x</code>, <code>x.equal_to(null)</code> should return
         *		<code>false</code>.
         *	</li>
         * </ul>
         *
         * The {@link equal_to} method for interface {@link IComparable} implements the most discriminating possible
         * equivalence relation on objects; that is, for any non-null reference values <code>x</code> and
         * <code>y</code>, this method returns <code>true</code> if and only if <code>x</code> and <code>y</code>
         * refer to the same object (<code>x == y</code> has the value <code>true</code>).
         *
         * Note that it is generally necessary to override the {@link hash_code} method whenever this method is
         * overridden, so as to maintain the general contract for the {@link hash_code} method, which states that
         * equal objects must have equal hash codes.
         *
         * - {@link IComparable.equal_to} is called by {@link equal_to}.
         *
         * @param obj the reference object with which to compare.
         *
         * @return <code>true</code> if this object is the same as the obj argument; <code>false</code> otherwise.
         */
        equals(obj: T): boolean;
        /**
         * Less-than inequality comparison.
         *
         * Binary method returns whether the the instance compares less than the <i>obj</i>.
         *
         * <ul>
         *	<li>
         *		{@link IComparable.less} is called by {@link less}. Also, this method can be used on standard
         *		algorithms such as {@link sort sort()}</code>, {@link merge merge()} or
         *		{@link TreeMap.lower_bound lower_bound()}.
         *	</li>
         * </ul>
         *
         * @param obj the reference object with which to compare.
         *
         * @return Whether the first parameter is less than the second.
         */
        less(obj: T): boolean;
        /**
         * Issue a hash code.
         *
         * Returns a hash code value for the object. This method is supported for the benefit of hash tables such
         * as those provided by hash containers; {@link HashSet}, {@link HashMap}, {@link MultiHashSet} and
         * {@link MultiHashMap}.
         *
         * As much as is reasonably practical, the {@link hash_code} method defined by interface
         * {@link IComparable} does return distinct integers for distinct objects. (This is typically implemented by
         * converting the internal address of the object into an integer, but this implementation technique is not
         * required by the JavaScript programming language.)
         *
         * <ul>
         *	<li>
         *		{@link IComparable.hash_code} is called by {@link hash_code}. If you want to keep basically
         *		provided hash function, then returns {@link Hash.code}; <code>return Hash.code(this);</code>
         *	</li>
         * </ul>
         *
         * @return An hash code who represents the object.
         */
        hashCode?(): number;
    }
}
declare namespace std.List {
    type iterator<T> = ListIterator<T>;
    type reverse_iterator<T> = ListReverseIterator<T>;
}
declare namespace std {
    /**
     * Doubly linked list.
     *
     * {@link List}s are sequence containers that allow constant time insert and erase operations anywhere within the
     * sequence, and iteration in both directions.
     *
     * List containers are implemented as doubly-linked lists; Doubly linked lists can store each of the elements they
     * contain in different and unrelated storage locations. The ordering is kept internally by the association to each
     * element of a link to the element preceding it and a link to the element following it.
     *
     * Compared to other base standard sequence containers (array, vector and deque), lists perform generally better
     * in inserting, extracting and moving elements in any position within the container for which an iterator has already
     * been obtained, and therefore also in algorithms that make intensive use of these, like sorting algorithms.
     *
     * The main drawback of lists and forward_lists compared to these other sequence containers is that they lack
     * direct access to the elements by their position; For example, to access the sixth element in a list, one has to
     * iterate from a known position (like the beginning or the end) to that position, which takes linear time in the
     * distance between these. They also consume some extra memory to keep the linking information associated to each
     * element (which may be an important factor for large lists of small-sized elements).
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
     *
     *
     * ### Container properties
     * <dl>
     * 	<dt> Sequence </dt>
     * 	<dd> Elements in sequence containers are ordered in a strict linear sequence. Individual elements are accessed by
     *		 their position in this sequence. </dd>
     *
     * 	<dt> Doubly-linked list </dt>
     *	<dd> Each element keeps information on how to locate the next and the previous elements, allowing constant time
     *		 insert and erase operations before or after a specific element (even of entire ranges), but no direct random
     *		 access. </dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *
     * @reference http://www.cplusplus.com/reference/list/list/
     * @author Jeongho Nam <http://samchon.org>
     */
    class List<T> extends base._ListContainer<T, ListIterator<T>> {
        private rend_;
        /**
         * Default Constructor.
         *
         * Constructs an empty container, with no elements.
         */
        constructor();
        /**
         * Initializer list Constructor.
         *
         * Constructs a container with a copy of each of the elements in <i>array</i>, in the same order.
         *
         * @param array An array containing elements to be copied and contained.
         */
        constructor(items: Array<T>);
        /**
         * Fill Constructor.
         *
         * Constructs a container with <i>n</i> elements. Each element is a copy of <i>val</i> (if provided).
         *
         * @param n Initial container size (i.e., the number of elements in the container at construction).
         * @param val Value to fill the container with. Each of the <i>n</i> elements in the container is
         *			  initialized to a copy of this value.
         */
        constructor(size: number, val: T);
        /**
         * Copy Constructor.
         *
         * Constructs a container with a copy of each of the elements in <i>container</i>, in the same order.
         *
         * @param container Another container object of the same type (with the same class template
         *					arguments <i>T</i>), whose contents are either copied or acquired.
         */
        constructor(container: List<T>);
        /**
         * Range Constructor.
         *
         * Constructs a container with as many elements as the range (<i>begin</i>, <i>end<i>), with each
         * element emplace-constructed from its corresponding element in that range, in the same order.
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: Iterator<T>, end: Iterator<T>);
        /**
         * @hidden
         */
        protected _Create_iterator(prev: ListIterator<T>, next: ListIterator<T>, val: T): ListIterator<T>;
        /**
         * @hidden
         */
        protected _Set_begin(it: ListIterator<T>): void;
        /**
         * @inheritdoc
         */
        assign(n: number, val: T): void;
        /**
         * @inheritdoc
         */
        assign<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
        /**
         * @inheritdoc
         */
        rbegin(): ListReverseIterator<T>;
        /**
         * @inheritdoc
         */
        rend(): ListReverseIterator<T>;
        /**
         * @inheritdoc
         */
        front(): T;
        /**
         * @inheritdoc
         */
        back(): T;
        /**
         * Insert an element.
         *
         * The container is extended by inserting a new element before the element at the specified
         * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
         * inserted.
         *
         * Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
         * inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param position Position in the container where the new element is inserted.
         *				   {@link iterator}> is a member type, defined as a
         *				   {@link ListIterator bidirectional iterator} type that points to elements.
         * @param val Value to be inserted as an element.
         *
         * @return An iterator that points to the newly inserted element; <i>val</i>.
         */
        insert(position: ListIterator<T>, val: T): ListIterator<T>;
        /**
         * Insert elements by repeated filling.
         *
         * The container is extended by inserting a new element before the element at the specified
         * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
         * inserted.
         *
         * Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
         * inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param position Position in the container where the new elements are inserted. The {@link iterator} is a
         *				   member type, defined as a {@link ListIterator bidirectional iterator} type that points to
         *				   elements.
         * @param size Number of elements to insert.
         * @param val Value to be inserted as an element.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert(position: ListIterator<T>, size: number, val: T): ListIterator<T>;
        /**
         * Insert elements by range iterators.
         *
         * The container is extended by inserting a new element before the element at the specified
         * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
         * inserted.
         *
         * Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
         * inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param position Position in the container where the new elements are inserted. The {@link iterator} is a
         *				   member type, defined as a {@link ListIterator bidirectional iterator} type that points to
         *				   elements.
         * @param begin An iterator specifying range of the begining element.
         * @param end An iterator specifying range of the ending element.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert<U extends T, InputIterator extends Iterator<U>>(position: ListIterator<T>, begin: InputIterator, end: InputIterator): ListIterator<T>;
        /**
         * Insert an element.
         *
         * The container is extended by inserting a new element before the element at the specified
         * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
         * inserted.
         *
         * Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
         * inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param position Position in the container where the new element is inserted.
         *				   {@link iterator}> is a member type, defined as a
         *				   {@link ListReverseIterator bidirectional iterator} type that points to elements.
         * @param val Value to be inserted as an element.
         *
         * @return An iterator that points to the newly inserted element; <i>val</i>.
         */
        insert(position: ListReverseIterator<T>, val: T): ListReverseIterator<T>;
        /**
         * Insert elements by repeated filling.
         *
         * The container is extended by inserting a new element before the element at the specified
         * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
         * inserted.
         *
         * Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
         * inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param position Position in the container where the new elements are inserted. The {@link iterator} is a
         *				   member type, defined as a {@link ListReverseIterator bidirectional iterator} type that points to
         *				   elements.
         * @param size Number of elements to insert.
         * @param val Value to be inserted as an element.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert(position: ListReverseIterator<T>, size: number, val: T): ListReverseIterator<T>;
        /**
         * Insert elements by range iterators.
         *
         * The container is extended by inserting a new element before the element at the specified
         * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
         * inserted.
         *
         * Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
         * inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param position Position in the container where the new elements are inserted. The {@link iterator} is a
         *				   member type, defined as a {@link ListReverseIterator bidirectional iterator} type that points to
         *				   elements.
         * @param begin An iterator specifying range of the begining element.
         * @param end An iterator specifying range of the ending element.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert<U extends T, InputIterator extends Iterator<U>>(position: ListReverseIterator<T>, begin: InputIterator, end: InputIterator): ListReverseIterator<T>;
        /**
         * Erase an element.
         *
         * Removes from the {@link List} either a single element; <i>position</i>.
         *
         * This effectively reduces the container size by the number of element removed.
         *
         * Unlike other standard sequence containers, {@link List} objects are specifically designed to be
         * efficient inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param position Iterator pointing to a single element to be removed from the {@link List}.
         *
         * @return An iterator pointing to the element that followed the last element erased by the function call.
         *		   This is the {@link end end()} if the operation erased the last element in the sequence.
         */
        erase(position: ListIterator<T>): ListIterator<T>;
        /**
         * Erase elements.
         *
         * Removes from the {@link List} container a range of elements.
         *
         * This effectively reduces the container {@link size} by the number of elements removed.
         *
         * Unlike other standard sequence containers, {@link List} objects are specifically designed to be
         * efficient inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param begin An iterator specifying a range of beginning to erase.
         * @param end An iterator specifying a range of end to erase.
         *
         * @return An iterator pointing to the element that followed the last element erased by the function call.
         *		   This is the {@link end end()} if the operation erased the last element in the sequence.
         */
        erase(begin: ListIterator<T>, end: ListIterator<T>): ListIterator<T>;
        /**
         * Erase an element.
         *
         * Removes from the {@link List} either a single element; <i>position</i>.
         *
         * This effectively reduces the container size by the number of element removed.
         *
         * Unlike other standard sequence containers, {@link List} objects are specifically designed to be
         * efficient inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param position Iterator pointing to a single element to be removed from the {@link List}.
         *
         * @return An iterator pointing to the element that followed the last element erased by the function call.
         *		   This is the {@link rend rend()} if the operation erased the last element in the sequence.
         */
        erase(position: ListReverseIterator<T>): ListReverseIterator<T>;
        /**
         * Erase elements.
         *
         * Removes from the {@link List} container a range of elements.
         *
         * This effectively reduces the container {@link size} by the number of elements removed.
         *
         * Unlike other standard sequence containers, {@link List} objects are specifically designed to be
         * efficient inserting and removing elements in any position, even in the middle of the sequence.
         *
         * @param begin An iterator specifying a range of beginning to erase.
         * @param end An iterator specifying a range of end to erase.
         *
         * @return An iterator pointing to the element that followed the last element erased by the function call.
         *		   This is the {@link rend rend()} if the operation erased the last element in the sequence.
         */
        erase(begin: ListReverseIterator<T>, end: ListReverseIterator<T>): ListReverseIterator<T>;
        /**
         * Remove duplicate values.
         *
         * Removes all but the first element from every consecutive group of equal elements in the
         *
         * Notice that an element is only removed from the {@link List} container if it compares equal to the
         * element immediately preceding it. Thus, this function is especially useful for sorted lists.
         */
        unique(): void;
        /**
         * Remove duplicate values.
         *
         * Removes all but the first element from every consecutive group of equal elements in the
         *
         * The argument <i>binary_pred</i> is a specific comparison function that determine the <u>uniqueness</u>
         * of an element. In fact, any behavior can be implemented (and not only an equality comparison), but notice
         * that the function will call <code>binary_pred(it.value, it.prev().value)</code> for all pairs of elements
         * (where <code>it</code> is an iterator to an element, starting from the second) and remove <code>it</code>
         * from the {@link List} if the predicate returns <code>true</code>.
         *
         * Notice that an element is only removed from the {@link List} container if it compares equal to the
         * element immediately preceding it. Thus, this function is especially useful for sorted lists.
         *
         * @param binary_pred Binary predicate that, taking two values of the same type than those contained in the
         *					  {@link List}, returns <code>true</code> to remove the element passed as first argument
         *					  from the container, and <code>false</code> otherwise. This shall be a function pointer
         *					  or a function object.
         */
        unique(binary_pred: (left: T, right: T) => boolean): void;
        /**
         * Remove elements with specific value.
         *
         * Removes from the container all the elements that compare equal to <i>val</i>. This calls the
         * destructor of these objects and reduces the container {@link size} by the number of elements removed.
         *
         * Unlike member function {@link List.erase}, which erases elements by their position (using an
         * iterator), this function ({@link List.remove}) removes elements by their value.
         *
         * A similar function, {@link List.remove_if}, exists, which allows for a condition other than an
         * equality comparison to determine whether an element is removed.
         *
         * @param val Value of the elements to be removed.
         */
        remove(val: T): void;
        /**
         * Remove elements fulfilling condition.
         *
         * Removes from the container all the elements for which <i>pred</i> returns <code>true</code>. This
         * calls the destructor of these objects and reduces the container {@link size} by the number of elements
         * removed.
         *
         * The function calls <code>pred(it.value)</code> for each element (where <code>it</code> is an iterator
         * to that element). Any of the elements in the list for which this returns <code>true</code>, are removed
         * from the
         *
         * @param pred Unary predicate that, taking a value of the same type as those contained in the forward_list
         *			   object, returns <code>true</code> for those values to be removed from the container, and
         *			   <code>false</code> for those remaining. This can either be a function pointer or a function
         *			   object.
         */
        remove_if(pred: (val: T) => boolean): void;
        /**
         * Merge sorted {@link List Lists}.
         *
         * Merges <i>obj</i> into the {@link List} by transferring all of its elements at their respective
         * ordered positions into the container (<font color='red'>both containers shall already be ordered</font>).
         *
         *
         * This effectively removes all the elements in <i>obj</i> (which becomes {@link empty}), and inserts
         * them into their ordered position within container (which expands in {@link size} by the number of elements
         * transferred). The operation is performed without constructing nor destroying any element: they are
         * transferred, no matter whether <i>obj</i> is an lvalue or an rvalue, or whether the value_type supports
         * move-construction or not.
         *
         * This function requires that the {@link List} containers have their elements already ordered by value
         * ({@link less}) before the call. For an alternative on unordered {@link List Lists}, see
         * {@link List.splice}.
         *
         * Assuming such ordering, each element of <i>obj</i> is inserted at the position that corresponds to its
         * value according to the strict weak ordering defined by {@link less}. The resulting order of equivalent
         * elements is stable (i.e., equivalent elements preserve the relative order they had before the call, and
         * existing elements precede those equivalent inserted from <i>obj</i>).
         *
         * The function does nothing if <code>this == obj</code>.
         *
         * @param obj A {@link List} object of the same type (i.e., with the same template parameters, <b>T</b>).
         * 			  Note that this function modifies <i>obj</i> no matter whether an lvalue or rvalue reference is
         *			  passed.
         */
        merge<U extends T>(obj: List<U>): void;
        /**
         * Merge sorted {@link List Lists}.
         *
         * Merges <i>obj</i> into the {@link List} by transferring all of its elements at their respective
         * ordered positions into the container (<font color='red'>both containers shall already be ordered</font>).
         *
         *
         * This effectively removes all the elements in <i>obj</i> (which becomes {@link empty}), and inserts
         * them into their ordered position within container (which expands in {@link size} by the number of elements
         * transferred). The operation is performed without constructing nor destroying any element: they are
         * transferred, no matter whether <i>obj</i> is an lvalue or an rvalue, or whether the value_type supports
         * move-construction or not.
         *
         * The argument <i>compare</i> is a specific predicate to perform the comparison operation between
         * elements. This comparison shall produce a strict weak ordering of the elements (i.e., a consistent
         * transitive comparison, without considering its reflexiveness).
         *
         * This function requires that the {@link List} containers have their elements already ordered by
         * <i>compare</i> before the call. For an alternative on unordered {@link List Lists}, see
         * {@link List.splice}.
         *
         * Assuming such ordering, each element of <i>obj</i> is inserted at the position that corresponds to its
         * value according to the strict weak ordering defined by <i>compare</i>. The resulting order of equivalent
         * elements is stable (i.e., equivalent elements preserve the relative order they had before the call, and
         * existing elements precede those equivalent inserted from <i>obj</i>).
         *
         * The function does nothing if <code>this == obj</code>.
         *
         * @param obj A {@link List} object of the same type (i.e., with the same template parameters, <b>T</b>).
         * 			  Note that this function modifies <i>obj</i> no matter whether an lvalue or rvalue reference is
         *			  passed.
         * @param compare Binary predicate that, taking two values of the same type than those contained in the
         *				  {@link list}, returns <code>true</code> if the first argument is considered to go before
         *				  the second in the strict weak ordering it defines, and <code>false</code> otherwise.
         *				  This shall be a function pointer or a function object.
         */
        merge<U extends T>(obj: List<U>, compare: (left: T, right: T) => boolean): void;
        /**
         * Transfer elements from {@link List} to {@link List}.
         *
         * Transfers elements from <i>obj</i> into the container, inserting them at <i>position</i>.
         *
         * This effectively inserts all elements into the container and removes them from <i>obj</i>, altering
         * the sizes of both containers. The operation does not involve the construction or destruction of any
         * element. They are transferred, no matter whether <i>obj</i> is an lvalue or an rvalue, or whether the
         * value_type supports move-construction or not.
         *
         * This first version (1) transfers all the elements of <i>obj</i> into the
         *
         * @param position Position within the container where the elements of <i>obj</i> are inserted.
         * @param obj A {@link List} object of the same type (i.e., with the same template parameters, <b>T</b>).
         */
        splice<U extends T>(position: ListIterator<T>, obj: List<U>): void;
        /**
         * Transfer an element from {@link List} to {@link List}.
         *
         * Transfers an element from <i>obj</i>, which is pointed by an {@link ListIterator iterator} <i>it</i>,
         * into the container, inserting the element at specified <i>position</i>.
         *
         * This effectively inserts an element into the container and removes it from <i>obj</i>, altering the
         * sizes of both containers. The operation does not involve the construction or destruction of any element.
         * They are transferred, no matter whether <i>obj</i> is an lvalue or an rvalue, or whether the value_type
         * supports move-construction or not.
         *
         * This second version (2) transfers only the element pointed by <i>it</i> from <i>obj</i> into the
         *
         *
         * @param position Position within the container where the element of <i>obj</i> is inserted.
         * @param obj A {@link List} object of the same type (i.e., with the same template parameters, <b>T</b>).
         *			  This parameter may be <code>this</code> if <i>position</i> points to an element not actually
         *			  being spliced.
         * @param it {@link ListIterator Iterator} to an element in <i>obj</i>. Only this single element is
         *			 transferred.
         */
        splice<U extends T>(position: ListIterator<T>, obj: List<U>, it: ListIterator<U>): void;
        /**
         * Transfer elements from {@link List} to {@link List}.
         *
         * Transfers elements from <i>obj</i> into the container, inserting them at <i>position</i>.
         *
         * This effectively inserts those elements into the container and removes them from <i>obj</i>, altering
         * the sizes of both containers. The operation does not involve the construction or destruction of any
         * element. They are transferred, no matter whether <i>obj</i> is an lvalue or an rvalue, or whether the
         * value_type supports move-construction or not.
         *
         * This third version (3) transfers the range [<i>begin</i>, <i>end</i>) from <i>obj</i> into the
         *
         *
         * @param position Position within the container where the elements of <i>obj</i> are inserted.
         * @param obj A {@link List} object of the same type (i.e., with the same template parameters, <b>T</b>).
         *			  This parameter may be <code>this</code> if <i>position</i> points to an element not actually
         *			  being spliced.
         * @param begin {@link ListIterator An Iterator} specifying initial position of a range of elements in
         *				<i>obj</i>. Transfers the elements in the range [<b><i>begin</i></b>, <i>end</i>) to
         *				<i>position</i>.
         * @param end {@link ListIterator An Iterator} specifying final position of a range of elements in
         *			  <i>obj</i>. Transfers the elements in the range [<i>begin</i>, <b><i>end</i></b>) to
         *			  <i>position</i>. Notice that the range includes all the elements between <i>begin<i/> and
         *			  <i>end</i>, including the element pointed by <i>begin</i> but not the one pointed by <i>end</i>.
         */
        splice<U extends T>(position: ListIterator<T>, obj: List<U>, begin: ListIterator<U>, end: ListIterator<U>): void;
        /**
         * Sort elements in
         *
         * Sorts the elements in the {@link List}, altering their position within the
         *
         * The sorting is performed by applying an algorithm that uses {@link less}. This comparison shall
         * produce a strict weak ordering of the elements (i.e., a consistent transitive comparison, without
         * considering its reflexiveness).
         *
         * The resulting order of equivalent elements is stable: i.e., equivalent elements preserve the relative
         * order they had before the call.
         *
         * The entire operation does not involve the construction, destruction or copy of any element object.
         * Elements are moved within the
         */
        sort(): void;
        /**
         * Sort elements in
         *
         * Sorts the elements in the {@link List}, altering their position within the
         *
         * The sorting is performed by applying an algorithm that uses <i>compare</i>. This comparison shall
         * produce a strict weak ordering of the elements (i.e., a consistent transitive comparison, without
         * considering its reflexiveness).
         *
         * The resulting order of equivalent elements is stable: i.e., equivalent elements preserve the relative
         * order they had before the call.
         *
         * The entire operation does not involve the construction, destruction or copy of any element object.
         * Elements are moved within the
         *
         * @param compare Binary predicate that, taking two values of the same type of those contained in the
         *				  {@link List}, returns <code>true</code> if the first argument goes before the second
         *				  argument in the strict weak ordering it defines, and <code>false</code> otherwise. This
         *				  shall be a function pointer or a function object.
         */
        sort(compare: (left: T, right: T) => boolean): void;
        /**
         * @hidden
         */
        private _Quick_sort(first, last, compare);
        /**
         * @hidden
         */
        private _Quick_sort_partition(first, last, compare);
        /**
         * Reverse the order of elements.
         *
         * Reverses the order of the elements in the list container.
         */
        reverse(): void;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link List container} object with same type of elements. Sizes and container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were in <i>obj</i>
         * before the call, and the elements of <i>obj</i> are those which were in this. All iterators, references and
         * pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link List container} of the same type of elements (i.e., instantiated
         *			  with the same template parameter, <b>T</b>) whose content is swapped with that of this
         *			  {@link List container}.
         */
        swap(obj: List<T>): void;
        /**
         * @inheritdoc
         */
        swap(obj: base.Container<T>): void;
    }
}
declare namespace std {
    /**
     * An iterator, node of a List.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class ListIterator<T> extends base._ListIteratorBase<T> {
        /**
         * Initializer Constructor.
         *
         * #### Note
         * Do not create the iterator directly, by yourself.
         *
         * Use {@link List.begin begin()}, {@link List.end end()} in {@link List container} instead.
         *
         * @param source The source {@link List container} to reference.
         * @param prev A refenrece of previous node ({@link ListIterator iterator}).
         * @param next A refenrece of next node ({@link ListIterator iterator}).
         * @param value Value to be stored in the node (iterator).
         */
        constructor(source: List<T>, prev: ListIterator<T>, next: ListIterator<T>, value: T);
        /**
         * @inheritdoc
         */
        source(): List<T>;
        /**
         * @inheritdoc
         */
        /**
         * Set value of the iterator is pointing to.
         *
         * @param val Value to set.
         */
        value: T;
        /**
         * @inheritdoc
         */
        prev(): ListIterator<T>;
        /**
         * @inheritdoc
         */
        next(): ListIterator<T>;
        /**
         * @inheritdoc
         */
        advance(step: number): ListIterator<T>;
        /**
         * @inheritdoc
         */
        equals(obj: ListIterator<T>): boolean;
        /**
         * @inheritdoc
         */
        swap(obj: ListIterator<T>): void;
    }
}
declare namespace std {
    /**
     * A reverse-iterator of List.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class ListReverseIterator<T> extends ReverseIterator<T, List<T>, ListIterator<T>, ListReverseIterator<T>> implements base.ILinearIterator<T> {
        /**
         * Construct from base iterator.
         *
         * @param base A reference of the base iterator, which iterates in the opposite direction.
         */
        constructor(base: ListIterator<T>);
        /**
         * @hidden
         */
        protected _Create_neighbor(base: ListIterator<T>): ListReverseIterator<T>;
        /**
         * @inheritdoc
         */
        /**
         * Set value of the iterator is pointing to.
         *
         * @param val Value to set.
         */
        value: T;
    }
}
declare namespace std.Vector {
    type iterator<T> = VectorIterator<T>;
    type reverse_iterator<T> = VectorReverseIterator<T>;
}
declare namespace std {
    /**
     * Vector, the dynamic array.
     *
     * {@link Vector}s are sequence containers representing arrays that can change in size.
     *
     * Just like arrays, {@link Vector}s use contiguous storage locations for their elements, which means that
     * their elements can also be accessed using offsets on regular pointers to its elements, and just as efficiently
     * as in arrays. But unlike arrays, their size can change dynamically, with their storage being handled
     * automatically by the container.
     *
     * Internally, {@link Vector}s use a dynamically allocated array to store their elements. This array may need
     * to be reallocated in order to grow in size when new elements are inserted, which implies allocating a new
     * array and moving all elements to it. This is a relatively expensive task in terms of processing time, and
     * thus, {@link Vector}s do not reallocate each time an element is added to the container.
     *
     * Compared to the other dynamic sequence containers ({@link Deque}s, {@link List}s), {@link Vector Vectors}
     * are very efficient accessing its elements (just like arrays) and relatively efficient adding or removing
     * elements from its end. For operations that involve inserting or removing elements at positions other than the
     * end, they perform worse than the others, and have less consistent iterators and references than {@link List}s.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" />
     * </a>
     *
     * ### Container properties
     * <dl>
     *	<dt> Sequence </dt>
     *	<dd>
     *		Elements in sequence containers are ordered in a strict linear sequence. Individual elements are
     *		accessed by their position in this sequence.
     *	</dd>
     *
     *	<dt> Dynamic array </dt>
     *	<dd>
     *		Allows direct access to any element in the sequence, even through pointer arithmetics, and provides
     *		relatively fast addition/removal of elements at the end of the sequence.
     *	</dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *
     * @reference http://www.cplusplus.com/reference/vector/vector
     * @author Jeongho Nam <http://samchon.org>
     */
    class Vector<T> extends base.Container<T> implements base.IArrayContainer<T> {
        /**
         * @hidden
         */
        private data_;
        /**
         * @hidden
         */
        private begin_;
        /**
         * @hidden
         */
        private end_;
        /**
         * @hidden
         */
        private rend_;
        /**
         * Default Constructor.
         *
         * Constructs an empty container, with no elements.
         */
        constructor();
        /**
         * @inheritdoc
         */
        constructor(array: Array<T>);
        /**
         * Initializer list Constructor.
         *
         * Constructs a container with a copy of each of the elements in <i>array</i>, in the same order.
         *
         * @param array An array containing elements to be copied and contained.
         */
        constructor(n: number);
        /**
         * Fill Constructor.
         *
         * Constructs a container with <i>n</i> elements. Each element is a copy of <i>val</i> (if provided).
         *
         * @param n Initial container size (i.e., the number of elements in the container at construction).
         * @param val Value to fill the container with. Each of the <i>n</i> elements in the container is
         *			  initialized to a copy of this value.
         */
        constructor(n: number, val: T);
        /**
         * Copy Constructor.
         *
         * Constructs a container with a copy of each of the elements in <i>container</i>, in the same order.
         *
         * @param container Another container object of the same type (with the same class template
         *					arguments <i>T</i>), whose contents are either copied or acquired.
         */
        constructor(container: Vector<T>);
        /**
         * Range Constructor.
         *
         * Constructs a container with as many elements as the range (<i>begin</i>, <i>end<i>), with each
         * element emplace-constructed from its corresponding element in that range, in the same order.
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: Iterator<T>, end: Iterator<T>);
        /**
         * @inheritdoc
         */
        assign<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
        /**
         * @inheritdoc
         */
        assign(n: number, val: T): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        begin(): VectorIterator<T>;
        /**
         * @inheritdoc
         */
        end(): VectorIterator<T>;
        /**
         * @inheritdoc
         */
        rbegin(): VectorReverseIterator<T>;
        /**
         * @inheritdoc
         */
        rend(): VectorReverseIterator<T>;
        /**
         * @inheritdoc
         */
        size(): number;
        /**
         * @inheritdoc
         */
        empty(): boolean;
        /**
         * @inheritdoc
         */
        at(index: number): T;
        /**
         * @inheritdoc
         */
        set(index: number, val: T): T;
        /**
         * @inheritdoc
         */
        front(): T;
        /**
         * @inheritdoc
         */
        back(): T;
        /**
         * Access data.
         *
         * Returns a direct array which is used internally by the {@link vector} to store its owned elements.
         *
         * @returns An array.
         */
        data(): Array<T>;
        /**
         * @inheritdoc
         */
        push(...items: T[]): number;
        /**
         * @inheritdoc
         */
        push_back(val: T): void;
        /**
         * Insert an element.
         *
         * The {@link Vector} is extended by inserting new element before the element at the specified
         * <i>position</i>, effectively increasing the container size by one.
         *
         * Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting element in
         * positions other than the {@link end end()} causes the container to relocate all the elements that were
         * after <i>position</i> to its new position. This is generally an inefficient operation compared to the one
         * performed for the same operation by other kinds of sequence containers (such as {@link List}).
         *
         * @param position Position in the {@link Vector} where the new element is inserted.
         *				   {@link iterator} is a member type, defined as a
         *				   {@link VectorIterator random access iterator} type that points to elements.
         * @param val Value to be copied to the inserted element.
         *
         * @return An iterator that points to the newly inserted element.
         */
        insert(position: VectorIterator<T>, val: T): VectorIterator<T>;
        /**
         * Insert elements by repeated filling.
         *
         * The {@link Vector} is extended by inserting new elements before the element at the specified
         * <i>position</i>, effectively increasing the container size by the number of elements inserted.
         *
         * Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting elements in
         * positions other than the {@link end end()} causes the container to relocate all the elements that were
         * after <i>position</i> to their new positions. This is generally an inefficient operation compared to the
         * one performed for the same operation by other kinds of sequence containers (such as {@link List}).
         *
         * @param position Position in the {@link Vector} where the new elements are inserted.
         *				   {@link iterator} is a member type, defined as a
         *				   {@link VectorIterator random access iterator} type that points to elements.
         * @param n Number of elements to insert. Each element is initialized to a copy of <i>val</i>.
         * @param val Value to be copied (or moved) to the inserted elements.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert(position: VectorIterator<T>, n: number, val: T): VectorIterator<T>;
        /**
         * Insert elements by range iterators.
         *
         * The {@link Vector} is extended by inserting new elements before the element at the specified
         * <i>position</i>, effectively increasing the container size by the number of elements inserted by range
         * iterators.
         *
         * Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting elements in
         * positions other than the {@link end end()} causes the container to relocate all the elements that were
         * after <i>position</i> to their new positions. This is generally an inefficient operation compared to the
         * one performed for the same operation by other kinds of sequence containers (such as {@link List}).
         *
         * @param position Position in the {@link Vector} where the new elements are inserted.
         *				   {@link iterator} is a member type, defined as a
         *				   {@link VectorIterator random access iterator} type that points to elements.
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert<U extends T, InputIterator extends Iterator<U>>(position: VectorIterator<T>, begin: InputIterator, end: InputIterator): VectorIterator<T>;
        /**
         * Insert an element.
         *
         * The {@link Vector} is extended by inserting new element before the element at the specified
         * <i>position</i>, effectively increasing the container size by one.
         *
         * Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting element in
         * positions other than the {@link end end()} causes the container to relocate all the elements that were
         * after <i>position</i> to its new position. This is generally an inefficient operation compared to the one
         * performed for the same operation by other kinds of sequence containers (such as {@link List}).
         *
         * @param position Position in the {@link Vector} where the new element is inserted.
         *				   {@link iterator} is a member type, defined as a
         *				   {@link VectorIterator random access iterator} type that points to elements.
         * @param val Value to be copied to the inserted element.
         *
         * @return An iterator that points to the newly inserted element.
         */
        insert(position: VectorReverseIterator<T>, val: T): VectorReverseIterator<T>;
        /**
         * Insert elements by repeated filling.
         *
         * The {@link Vector} is extended by inserting new elements before the element at the specified
         * <i>position</i>, effectively increasing the container size by the number of elements inserted.
         *
         * Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting elements in
         * positions other than the {@link end end()} causes the container to relocate all the elements that were
         * after <i>position</i> to their new positions. This is generally an inefficient operation compared to the
         * one performed for the same operation by other kinds of sequence containers (such as {@link List}).
         *
         * @param position Position in the {@link Vector} where the new elements are inserted.
         *				   {@link iterator} is a member type, defined as a
         *				   {@link VectorIterator random access iterator} type that points to elements.
         * @param n Number of elements to insert. Each element is initialized to a copy of <i>val</i>.
         * @param val Value to be copied (or moved) to the inserted elements.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert(position: VectorReverseIterator<T>, n: number, val: T): VectorReverseIterator<T>;
        /**
         * Insert elements by range iterators.
         *
         * The {@link Vector} is extended by inserting new elements before the element at the specified
         * <i>position</i>, effectively increasing the container size by the number of elements inserted by range
         * iterators.
         *
         * Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting elements in
         * positions other than the {@link end end()} causes the container to relocate all the elements that were
         * after <i>position</i> to their new positions. This is generally an inefficient operation compared to the
         * one performed for the same operation by other kinds of sequence containers (such as {@link List}).
         *
         * @param position Position in the {@link Vector} where the new elements are inserted.
         *				   {@link iterator} is a member type, defined as a
         *				   {@link VectorIterator random access iterator} type that points to elements.
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert<U extends T, InputIterator extends Iterator<U>>(position: VectorReverseIterator<T>, begin: InputIterator, end: InputIterator): VectorReverseIterator<T>;
        /**
         * @hidden
         */
        private _Insert_by_val(position, val);
        /**
         * @hidden
         */
        private _Insert_by_repeating_val(position, n, val);
        /**
         * @hidden
         */
        protected _Insert_by_range<InputIterator extends Iterator<T>>(position: VectorIterator<T>, first: InputIterator, last: InputIterator): VectorIterator<T>;
        /**
         * @inheritdoc
         */
        pop_back(): void;
        /**
         * Erase element.
         *
         * Removes from the {@link Vector} either a single element; <i>position</i>.
         *
         * This effectively reduces the container size by the number of element removed.
         *
         * Because {@link Vector}s use an <code>Array</code> as their underlying storage, erasing an element in
         * position other than the {@link end end()} causes the container to relocate all the elements after the
         * segment erased to their new positions. This is generally an inefficient operation compared to the one
         * performed for the same operation by other kinds of sequence containers (such as {@link List}).
         *
         * @param position Iterator pointing to a single element to be removed from the {@link Vector}.
         *
         * @return An iterator pointing to the new location of the element that followed the last element erased by
         *		   the function call. This is the {@link end end()} if the operation erased the last element in the
         *		   sequence.
         */
        erase(position: VectorIterator<T>): VectorIterator<T>;
        /**
         * Erase element.
         *
         * Removes from the <ode>Vector</code> either a single element; <i>position</i>.
         *
         * This effectively reduces the container size by the number of elements removed.
         *
         * Because {@link Vector}s use an <code>Array</code> as their underlying storage, erasing elements in
         * position other than the {@link end end()} causes the container to relocate all the elements after the
         * segment erased to their new positions. This is generally an inefficient operation compared to the one
         * performed for the same operation by other kinds of sequence containers (such as {@link List}).
         *
         * @param begin An iterator specifying a range of beginning to erase.
         * @param end An iterator specifying a range of end to erase.
         *
         * @return An iterator pointing to the new location of the element that followed the last element erased by
         *		   the function call. This is the {@link rend rend()} if the operation erased the last element in the
         *		   sequence.
         */
        erase(first: VectorIterator<T>, last: VectorIterator<T>): VectorIterator<T>;
        /**
         * Erase element.
         *
         * Removes from the {@link Vector} either a single element; <i>position</i>.
         *
         * This effectively reduces the container size by the number of element removed.
         *
         * Because {@link Vector}s use an <code>Array</code> as their underlying storage, erasing an element in
         * position other than the {@link end end()} causes the container to relocate all the elements after the
         * segment erased to their new positions. This is generally an inefficient operation compared to the one
         * performed for the same operation by other kinds of sequence containers (such as {@link List}).
         *
         * @param position Iterator pointing to a single element to be removed from the {@link Vector}.
         *
         * @return An iterator pointing to the new location of the element that followed the last element erased by
         *		   the function call. This is the {@link rend rend()} if the operation erased the last element in the
         *		   sequence.
         */
        erase(position: VectorReverseIterator<T>): VectorReverseIterator<T>;
        /**
         * Erase element.
         *
         * Removes from the <ode>Vector</code> either a single element; <i>position</i>.
         *
         * This effectively reduces the container size by the number of elements removed.
         *
         * Because {@link Vector}s use an <code>Array</code> as their underlying storage, erasing elements in
         * position other than the {@link end end()} causes the container to relocate all the elements after the
         * segment erased to their new positions. This is generally an inefficient operation compared to the one
         * performed for the same operation by other kinds of sequence containers (such as {@link List}).
         *
         * @param begin An iterator specifying a range of beginning to erase.
         * @param end An iterator specifying a range of end to erase.
         *
         * @return An iterator pointing to the new location of the element that followed the last element erased by
         *		   the function call. This is the {@link end end()} if the operation erased the last element in the
         *		   sequence.
         */
        erase(first: VectorReverseIterator<T>, last: VectorReverseIterator<T>): VectorReverseIterator<T>;
        /**
         * @hidden
         */
        protected _Erase_by_range(first: VectorIterator<T>, last: VectorIterator<T>): VectorIterator<T>;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link Vector container} object with same type of elements. Sizes and container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were in <i>obj</i>
         * before the call, and the elements of <i>obj</i> are those which were in this. All iterators, references and
         * pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link Vector container} of the same type of elements (i.e., instantiated
         *			  with the same template parameter, <b>T</b>) whose content is swapped with that of this
         *			  {@link Vector container}.
         */
        swap(obj: Vector<T>): void;
        /**
         * @inheritdoc
         */
        swap(obj: base.Container<T>): void;
    }
}
declare namespace std {
    /**
     * An iterator of Vector.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" />
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class VectorIterator<T> extends Iterator<T> implements base.IArrayIterator<T> {
        /**
         * @hidden
         */
        private index_;
        /**
         * Construct from the source {@link Vector container}.
         *
         * #### Note
         * Do not create the iterator directly, by yourself.
         *
         * Use {@link Vector.begin begin()}, {@link Vector.end end()} in {@link Vector container} instead.
         *
         * @param source The source {@link Vector container} to reference.
         * @param index Sequence number of the element in the source {@link Vector}.
         */
        constructor(source: Vector<T>, index: number);
        /**
         * @inheritdoc
         */
        source(): Vector<T>;
        /**
         * @inheritdoc
         */
        index(): number;
        /**
         * @inheritdoc
         */
        /**
         * Set value of the iterator is pointing to.
         *
         * @param val Value to set.
         */
        value: T;
        /**
         * @inheritdoc
         */
        prev(): VectorIterator<T>;
        /**
         * @inheritdoc
         */
        next(): VectorIterator<T>;
        /**
         * @inheritdoc
         */
        advance(n: number): VectorIterator<T>;
        /**
         * @inheritdoc
         */
        equals(obj: VectorIterator<T>): boolean;
        /**
         * @inheritdoc
         */
        swap(obj: VectorIterator<T>): void;
    }
}
declare namespace std {
    /**
     * A reverse-iterator of Vector.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" />
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class VectorReverseIterator<T> extends ReverseIterator<T, Vector<T>, VectorIterator<T>, VectorReverseIterator<T>> implements base.IArrayIterator<T> {
        /**
         * Construct from base iterator.
         *
         * @param base A reference of the base iterator, which iterates in the opposite direction.
         */
        constructor(base: VectorIterator<T>);
        /**
         * @hidden
         */
        protected _Create_neighbor(base: VectorIterator<T>): VectorReverseIterator<T>;
        /**
         * @inheritdoc
         */
        index(): number;
        /**
         * @inheritdoc
         */
        /**
         * Set value of the iterator is pointing to.
         *
         * @param val Value to set.
         */
        value: T;
    }
}
declare namespace std {
    /**
     * FIFO queue.
     *
     * {@link Queue}s are a type of container adaptor, specifically designed to operate in a FIFO context
     * (first-in first-out), where elements are inserted into one end of the container and extracted from the other.
     *
     * {@link Queue}s are implemented as containers adaptors, which are classes that use an encapsulated object of
     * a specific container class as its underlying container, providing a specific set of member functions to access
     * its elements. Elements are pushed into the {@link IDeque.back back()} of the specific container and popped from
     * its {@link IDeque.front front()}.
     *
     * {@link container_ The underlying container} may be one of the standard container class template or some
     * other specifically designed container class. This underlying container shall support at least the following
     * operations:
     *
     * - {@link IDequeContainer.empty empty}
     * - {@link IDequeContainer.size size}
     * - {@link IDequeContainer.front front}
     * - {@link IDequeContainer.back back}
     * - {@link IDequeContainer.push_back push_back}
     * - {@link IDequeContainer.pop_front pop_front}
     *
     * The standard container classes {@link Deque} and {@link List} fulfill these requirements.
     * By default, if no container class is specified for a particular {@link Queue} class instantiation, the standard
     * container {@link List} is used.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
     *
     * @param <T> Type of elements.
     *
     * @reference http://www.cplusplus.com/reference/queue/queue
     * @author Jeongho Nam <http://samchon.org>
     */
    class Queue<T> {
        /**
         * The <i>underlying object</i> for implementing the <i>FIFO</i>
         */
        private container_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Copy Constructor.
         */
        constructor(container: Queue<T>);
        /**
         * Return size.
         *
         * Returns the number of elements in the {@link Queue}.
         *
         * This member function effectively calls member {@link IDeque.size size()} of the
         * {@link container_ underlying container} object.
         *
         * @return The number of elements in the {@link container_ underlying container}.
         */
        size(): number;
        /**
         * Test whether container is empty.
         *
         * returns whether the {@link Queue} is empty: i.e. whether its <i>size</i> is zero.
         *
         * This member function efeectively calls member {@link IDeque.empty empty()} of the
         * {@link container_ underlying container} object.
         *
         * @return <code>true</code> if the {@link container_ underlying container}'s size is 0,
         *		   <code>false</code> otherwise.
         */
        empty(): boolean;
        /**
         * Access next element.
         *
         * Returns a value of the next element in the {@link Queue}.
         *
         * The next element is the "oldest" element in the {@link Queue} and the same element that is popped out
         * from the queue when {@link pop Queue.pop()} is called.
         *
         * This member function effectively calls member {@link IDeque.front front()} of the
         * {@link container_ underlying container} object.
         *
         * @return A value of the next element in the {@link Queue}.
         */
        front(): T;
        /**
         * Access last element.
         *
         * Returns a vaue of the last element in the queue. This is the "newest" element in the queue (i.e. the
         * last element pushed into the queue).
         *
         * This member function effectively calls the member function {@link IDeque.back back()} of the
         * {@link container_ underlying container} object.
         *
         * @return A value of the last element in the {@link Queue}.
         */
        back(): T;
        /**
         * Insert element.
         *
         * Inserts a new element at the end of the {@link Queue}, after its current last element.
         * The content of this new element is initialized to <i>val</i>.
         *
         * This member function effectively calls the member function {@link IDeque.push_back push_back()} of the
         * {@link container_ underlying container} object.
         *
         * @param val Value to which the inserted element is initialized.
         */
        push(val: T): void;
        /**
         * Remove next element.
         *
         * Removes the next element in the {@link Queue}, effectively reducing its size by one.
         *
         * The element removed is the "oldest" element in the {@link Queue} whose value can be retrieved by calling
         * member {@link front Queue.front()}.
         *
         * This member function effectively calls the member function {@link IDeque.pop_front pop_front()} of the
         * {@link container_ underlying container} object.
         */
        pop(): void;
        /**
         * Swap contents.
         *
         * Exchanges the contents of the container adaptor (<i>this</i>) by those of <i>obj</i>.
         *
         * This member function calls the non-member function {@link Container.swap swap} (unqualified) to swap
         * the {@link container_ underlying containers}.
         *
         * @param obj Another {@link Queue} container adaptor of the same type (i.e., instantiated with the same
         *			  template parameter, <b>T</b>). Sizes may differ.
         */
        swap(obj: Queue<T>): void;
    }
}
declare namespace std {
    /**
     * Priority queue.
     *
     * {@link PriorityQueue Priority queues} are a type of container adaptors, specifically designed such that its
     * first element is always the greatest of the elements it contains, according to some <i>strict weak ordering</i>
     * criterion.
     *
     * This context is similar to a <i>heap</i>, where elements can be inserted at any moment, and only the
     * <i>max heap</i> element can be retrieved (the one at the top in the {@link PriorityQueue priority queue}).
     *
     * {@link PriorityQueue Priority queues} are implemented as <i>container adaptors</i>, which are classes that
     * use an encapsulated object of a specific container class as its {@link container_ underlying container},
     * providing a specific set of member functions to access its elements. Elements are popped from the <i>"back"</i>
     * of the specific container, which is known as the <i>top</i> of the {@link PriorityQueue Priority queue}.
     *
     * The {@link container_ underlying container} may be any of the standard container class templates or some
     * other specifically designed container class. The container shall be accessible through
     * {@link IArrayIterator random access iterators} and support the following operations:
     *
     * - {@link IArrayContainer.empty empty()}
     * - {@link IArrayContainer.size size()}
     * - {@link IArrayContainer.front front()}
     * - {@link IArrayContainer.push_back push_back()}
     * - {@link IArrayContainer.pop_back pop_back()}
     *
     * The standard container classes {@link Vector} and {@link Deque} fulfill these requirements. By default, if
     * no container class is specified for a particular {@link PriorityQueue} class instantiation, the standard
     * container {@link Vector} is used.
     *
     * Support of {@link IArrayIterator random access iterators} is required to keep a heap structure internally
     * at all times. This is done automatically by the container adaptor by automatically calling the algorithm
     * functions <i>make_heap</i>, <i>push_heap</i> and <i>pop_heap</i> when needed.
     *
     * @param <T> Type of the elements.
     *
     * @reference http://www.cplusplus.com/reference/queue/priority_queue/
     * @author Jeongho Nam
     */
    class PriorityQueue<T> {
        /**
         * @hidden
         */
        private container_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from compare.
         *
         * @param compare A binary predicate determines order of elements.
         */
        constructor(compare: (left: T, right: T) => boolean);
        /**
         * Contruct from elements.
         *
         * @param array Elements to be contained.
         */
        constructor(array: Array<T>);
        /**
         * Contruct from elements with compare.
         *
         * @param array Elements to be contained.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(array: Array<T>, compare: (left: T, right: T) => boolean);
        /**
         * Copy Constructor.
         */
        constructor(container: base.Container<T>);
        /**
         * Copy Constructor with compare.
         *
         * @param container A container to be copied.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(container: base.Container<T>, compare: (left: T, right: T) => boolean);
        /**
         * Range Constructor.
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: Iterator<T>, end: Iterator<T>);
        /**
         * Range Constructor with compare.
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(begin: Iterator<T>, end: Iterator<T>, compare: (left: T, right: T) => boolean);
        /**
         * Return size.
         *
         * Returns the number of elements in the {@link PriorityQueue}.
         *
         * This member function effectively calls member {@link IArrayContainer.size size} of the
         * {@link IArrayContainer underlying container} object.
         *
         * @return The number of elements in the underlying
         */
        size(): number;
        /**
         * Test whether container is empty.
         *
         * Returns whether the {@link PriorityQueue} is empty: i.e. whether its {@link size} is zero.
         *
         * This member function effectively calls member {@link IARray.empty empty} of the
         * {@link IArrayContainer underlying container} object.
         */
        empty(): boolean;
        /**
         * Access top element.
         *
         * Returns a constant reference to the top element in the {@link PriorityQueue}.
         *
         * The top element is the element that compares higher in the {@link PriorityQueue}, and the next that is
         * removed from the container when {@link PriorityQueue.pop} is called.
         *
         * This member function effectively calls member {@link IArrayContainer.front front} of the
         * {@link IArrayContainer underlying container} object.
         *
         * @return A reference to the top element in the {@link PriorityQueue}.
         */
        top(): T;
        /**
         * Insert element.
         *
         * Inserts a new element in the {@link PriorityQueue}. The content of this new element is initialized to
         * <i>val</i>.
         *
         * This member function effectively calls the member function {@link IArrayContainer.push_back push_back} of the
         * {@link IArrayContainer underlying container} object, and then reorders it to its location in the heap by calling
         * the <i>push_heap</i> algorithm on the range that includes all the elements of the
         *
         * @param val Value to which the inserted element is initialized.
         */
        push(val: T): void;
        /**
         * Remove top element.
         *
         * Removes the element on top of the {@link PriorityQueue}, effectively reducing its {@link size} by one.
         * The element removed is the one with the highest (or lowest) value.
         *
         * The value of this element can be retrieved before being popped by calling member
         * {@link PriorityQueue.top}.
         *
         * This member function effectively calls the <i>pop_heap</i> algorithm to keep the heap property of
         * {@link PriorityQueue PriorityQueues} and then calls the member function {@link IArrayContainer.pop_back pop_back} of
         * the {@link IArrayContainer underlying container} object to remove the element.
         */
        pop(): void;
        /**
         * Swap contents.
         *
         * Exchanges the contents of the container adaptor by those of <i>obj</i>, swapping both the
         * {@link IArrayContainer underlying container} value and their comparison function using the corresponding
         * {@link swap swap} non-member functions (unqualified).
         *
         * This member function has a <i>noexcept</i> specifier that matches the combined <i>noexcept</i> of the
         * {@link IArrayContainer.swap swap} operations on the {@link IArrayContainer underlying container} and the comparison
         * functions.
         *
         * @param obj {@link PriorityQueue} container adaptor of the same type (i.e., instantiated with the same
         *			  template parameters, <b>T</b>). Sizes may differ.
         */
        swap(obj: PriorityQueue<T>): void;
    }
}
declare namespace std {
    /**
     * LIFO stack.
     *
     * {@link Stack}s are a type of container adaptor, specifically designed to operate in a LIFO context
     * (last-in first-out), where elements are inserted and extracted only from one end of the
     *
     * {@link Stack}s are implemented as containers adaptors, which are classes that use an encapsulated object of
     * a specific container class as its <i>underlying container</i>, providing a specific set of member functions to
     * access its elements. Elements are pushed/popped from the {@link ILinearContainer.back back()} of the
     * {@link ILinearContainer specific container}, which is known as the top of the {@link Stack}.
     *
     * {@link container_ The underlying container} may be any of the standard container class templates or some
     * other specifically designed container class. The container shall support the following operations:
     *
     * - {@link ILinearContainer.empty empty}
     * - {@link ILinearContainer.size size}
     * - {@link ILinearContainer.front front}
     * - {@link ILinearContainer.back back}
     * - {@link ILinearContainer.push_back push_back}
     * - {@link ILinearContainer.pop_back pop_back}
     *
     * The standard container classes {@link Vector}, {@link Deque} and {@link List} fulfill these requirements.
     * By default, if no container class is specified for a particular {@link Stack} class instantiation, the standard
     * container {@link List} is used.
     *
     * <a href="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
     *
     * @param <T> Type of elements.
     *
     * @reference http://www.cplusplus.com/reference/stack/stack
     * @author Jeongho Nam <http://samchon.org>
     */
    class Stack<T> {
        /**
         * The <i>underlying object</i> for implementing the <i>LIFO</i>
         */
        private container_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Copy Constructor.
         */
        constructor(stack: Stack<T>);
        /**
         * Return size.
         *
         * Returns the number of elements in the {@link Stack}.
         *
         * This member function effectively calls member {@link ILinearContainer.size size()} of the
         * {@link container_ underlying container} object.
         *
         * @return The number of elements in the {@link container_ underlying container}.
         */
        size(): number;
        /**
         * Test whether container is empty.
         *
         * returns whether the {@link Stack} is empty: i.e. whether its <i>size</i> is zero.
         *
         * This member function effectively calls member {@link ILinearContainer.empty empty()} of the
         * {@link container_ underlying container} object.
         *
         * @return <code>true</code> if the <i>underlying container</i>'s size is 0,
         *		   <code>false</code> otherwise.
         */
        empty(): boolean;
        /**
         * Access next element.
         *
         * Returns a value of the top element in the {@link Stack}.
         *
         * Since {@link Stack}s are last-in first-out containers, the top element is the last element inserted into
         * the {@link Stack}.
         *
         * This member function effectively calls member {@link ILinearContainer.back back()} of the
         * {@link container_ underlying container} object.
         *
         * @return A value of the top element in the {@link Stack}.
         */
        top(): T;
        /**
         * Insert element.
         *
         * Inserts a new element at the top of the {@link Stack}, above its current top element.
         *
         * This member function effectively calls the member function
         * {@link ILinearContainer.push_back push_back()} of the {@link container_ underlying container} object.
         *
         * @param val Value to which the inserted element is initialized.
         */
        push(val: T): void;
        /**
         * Remove top element.
         *
         * Removes the element on top of the {@link Stack}, effectively reducing its size by one.
         *
         * The element removed is the latest element inserted into the {@link Stack}, whose value can be retrieved
         * by calling member {@link top Stack.top()}.
         *
         * This member function effectively calls the member function {@link ILinearContainer.pop_back pop_back()}
         * of the {@link container_ underlying container} object.
         */
        pop(): void;
        /**
         * Swap contents.
         *
         * Exchanges the contents of the container adaptor (<i>this</i>) by those of <i>obj</i>.
         *
         * This member function calls the non-member function {@link Container.swap swap} (unqualified) to swap
         * the {@link container_ underlying containers}.
         *
         * @param obj Another {@link Stack} container adaptor of the same type (i.e., instantiated with the same
         *			  template parameter, <b>T</b>). Sizes may differ.
         */
        swap(obj: Stack<T>): void;
    }
}
declare namespace std.TreeSet {
    type iterator<T> = SetIterator<T>;
    type reverse_iterator<T> = SetReverseIterator<T>;
}
declare namespace std {
    /**
     * Tree-structured set, <code>std::set</code> of STL.
     *
     * {@link TreeSet}s are containers that store unique elements following a specific order.
     *
     * In a {@link TreeSet}, the value of an element also identifies it (the value is itself the
     * <i>key</i>, of type <i>T</i>), and each value must be unique. The value of the elements in a
     * {@link TreeSet} cannot be modified once in the container (the elements are always const), but they
     * can be inserted or removed from the container.
     *
     * Internally, the elements in a {@link TreeSet} are always sorted following a specific strict weak
     * ordering criterion indicated by its internal comparison method (of {@link less}).
     *
     * {@link TreeSet} containers are generally slower than {@link HashSet} containers to access
     * individual elements by their <i>key</i>, but they allow the direct iteration on subsets based on their
     * order.
     *
     * {@link TreeSet}s are typically implemented as binary search trees.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /> </a></p>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		position in the container.
     *	</dd>
     *
     *	<dt> Ordered </dt>
     *	<dd>
     *		The elements in the container follow a strict order at all times. All inserted elements are
     *		given a position in this order.
     *	</dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     *
     *	<dt> Unique keys </dt>
     *	<dd> No two elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *			  Each element in an {@link TreeSet} is also uniquely identified by this value.
     *
     * @reference http://www.cplusplus.com/reference/set/set
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeSet<T> extends base.UniqueSet<T> implements base.ITreeSet<T> {
        /**
         * @hidden
         */
        private tree_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from compare.
         *
         * @param compare A binary predicate determines order of elements.
         */
        constructor(compare: (x: T, y: T) => boolean);
        /**
         * Contruct from elements.
         *
         * @param array Elements to be contained.
         */
        constructor(array: Array<T>);
        /**
         * Contruct from elements with compare.
         *
         * @param array Elements to be contained.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(array: Array<T>, compare: (x: T, y: T) => boolean);
        /**
         * Copy Constructor.
         */
        constructor(container: TreeMultiSet<T>);
        /**
         * Copy Constructor with compare.
         *
         * @param container A container to be copied.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(container: TreeMultiSet<T>, compare: (x: T, y: T) => boolean);
        /**
         * Range Constructor.
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: Iterator<T>, end: Iterator<T>);
        /**
         * Construct from range and compare.
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(begin: Iterator<T>, end: Iterator<T>, compare: (x: T, y: T) => boolean);
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(val: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        key_comp(): (x: T, y: T) => boolean;
        /**
         * @inheritdoc
         */
        value_comp(): (x: T, y: T) => boolean;
        /**
         * @inheritdoc
         */
        lower_bound(val: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        upper_bound(val: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        equal_range(val: T): Pair<SetIterator<T>, SetIterator<T>>;
        /**
         * @hidden
         */
        protected _Insert_by_val(val: T): any;
        protected _Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>;
        /**
         * @hidden
         */
        protected _Insert_by_range<U extends T, InputIterator extends Iterator<U>>(first: InputIterator, last: InputIterator): void;
        /**
         * @hidden
         */
        protected _Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link TreeSet set} of the same type. Sizes abd container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were
         * in <i>obj</i> before the call, and the elements of <i>obj</i> are those which were in this. All
         * iterators, references and pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link TreeSet set container} of the same type of elements as this (i.e.,
         *			  with the same template parameters, <b>Key</b> and <b>T</b>) whose content is swapped
         *			  with that of this {@link TreeSet container}.
         */
        swap(obj: TreeSet<T>): void;
        /**
         * @inheritdoc
         */
        swap(obj: base.Container<T>): void;
    }
}
declare namespace std.TreeMap {
    type iterator<Key, T> = MapIterator<Key, T>;
    type reverse_iterator<Key, T> = MapReverseIterator<Key, T>;
}
declare namespace std {
    /**
     * Tree-structured map, <code>std::map</code> of STL.
     *
     * {@link TreeMap TreeMaps} are associative containers that store elements formed by a combination of a
     * <i>key value</i> (<i>Key</i>) and a <i>mapped value</i> (<i>T</i>), following order.
     *
     * In a {@link TreeMap}, the <i>key values</i> are generally used to sort and uniquely identify the elements,
     * while the <i>mapped values</i> store the content associated to this key. The types of <i>key</i> and
     * <i>mapped value</i> may differ, and are grouped together in member type <i>value_type</i>, which is a {@link Pair}
     * type combining both:
     *
     * <code>typedef Pair<Key, T> value_type;</code>
     *
     * Internally, the elements in a {@link TreeMap} are always sorted by its <i>key</i> following a
     * <i>strict weak ordering</i> criterion indicated by its internal comparison method {@link less}.
     *
     * {@link TreeMap} containers are generally slower than {@link HashMap HashMap} containers to access individual
     * elements by their <i>key</i>, but they allow the direct iteration on subsets based on their order.
     *
     * {@link TreeMap}s are typically implemented as binary search trees.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /> </a></p>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Ordered </dt>
     *	<dd> The elements in the container follow a strict order at all times. All inserted elements are
     *		 given a position in this order. </dd>
     *
     *	<dt> Map </dt>
     *	<dd> Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		 <i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>. </dd>
     *
     *	<dt> Unique keys </dt>
     *	<dd> No two elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <Key> Type of the keys. Each element in a map is uniquely identified by its key value.
     * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
     *
     * @reference http://www.cplusplus.com/reference/map/map
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMap<Key, T> extends base.UniqueMap<Key, T> implements base.ITreeMap<Key, T> {
        /**
         * @hidden
         */
        private tree_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from compare.
         *
         * @param compare A binary predicate determines order of elements.
         */
        constructor(compare: (x: Key, y: Key) => boolean);
        /**
         * Contruct from elements.
         *
         * @param array Elements to be contained.
         */
        constructor(array: Array<Pair<Key, T>>);
        /**
         * Contruct from elements.
         *
         * @param array Elements to be contained.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(array: Array<Pair<Key, T>>, compare: (x: Key, y: Key) => boolean);
        /**
         * Contruct from tuples.
         *
         * @param array Tuples to be contained.
         */
        constructor(array: Array<[Key, T]>);
        /**
         * Contruct from tuples.
         *
         * @param array Tuples to be contained.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(array: Array<[Key, T]>, compare: (x: Key, y: Key) => boolean);
        /**
         * Copy Constructor.
         *
         * @param container Another map to copy.
         */
        constructor(container: TreeMap<Key, T>);
        /**
         * Copy Constructor.
         *
         * @param container Another map to copy.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(container: TreeMap<Key, T>, compare: (x: Key, y: Key) => boolean);
        /**
         * Range Constructor.
         *
         * @param begin nput interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: Iterator<Pair<Key, T>>, end: Iterator<Pair<Key, T>>);
        /**
         * Range Constructor.
         *
         * @param begin nput interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(begin: Iterator<Pair<Key, T>>, end: Iterator<Pair<Key, T>>, compare: (x: Key, y: Key) => boolean);
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(key: Key): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        key_comp(): (x: Key, y: Key) => boolean;
        /**
         * @inheritdoc
         */
        value_comp(): (x: Pair<Key, T>, y: Pair<Key, T>) => boolean;
        /**
         * @inheritdoc
         */
        lower_bound(key: Key): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        upper_bound(key: Key): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        equal_range(key: Key): Pair<MapIterator<Key, T>, MapIterator<Key, T>>;
        /**
         * @hidden
         */
        protected _Insert_by_pair(pair: Pair<Key, T>): any;
        /**
         * @hidden
         */
        protected _Insert_by_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
        /**
         * @hidden
         */
        protected _Insert_by_range<L extends Key, U extends T, InputIterator extends Iterator<Pair<L, U>>>(first: InputIterator, last: InputIterator): void;
        /**
         * @hidden
         */
        protected _Handle_insert(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link TreeMap map} of the same type. Sizes abd container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were
         * in <i>obj</i> before the call, and the elements of <i>obj</i> are those which were in this. All
         * iterators, references and pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link TreeMap map container} of the same type of elements as this (i.e.,
         *			  with the same template parameters, <b>Key</b> and <b>T</b>) whose content is swapped
         *			  with that of this {@link TreeMap container}.
         */
        swap(obj: TreeMap<Key, T>): void;
        /**
         * @inheritdoc
         */
        swap(obj: base.Container<Pair<Key, T>>): void;
    }
}
declare namespace std.TreeMultiSet {
    type iterator<T> = SetIterator<T>;
    type reverse_iterator<T> = SetReverseIterator<T>;
}
declare namespace std {
    /**
     * Tree-structured multiple-key set.
     *
     * {@link TreeMultiSet TreeMultiSets} are containers that store elements following a specific order, and
     * where multiple elements can have equivalent values.
     *
     * In a {@link TreeMultiSet}, the value of an element also identifies it (the value is itself
     * the <i>key</i>, of type <i>T</i>). The value of the elements in a {@link TreeMultiSet} cannot
     * be modified once in the container (the elements are always const), but they can be inserted or removed
     * from the container.
     *
     * Internally, the elements in a {@link TreeMultiSet TreeMultiSets} are always sorted following a strict
     * weak ordering criterion indicated by its internal comparison method (of {@link IComparable.less less}).
     *
     * {@link TreeMultiSet} containers are generally slower than {@link HashMultiSet} containers
     * to access individual elements by their <i>key</i>, but they allow the direct iteration on subsets based on
     * their order.
     *
     * {@link TreeMultiSet TreeMultiSets} are typically implemented as binary search trees.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /> </a></p>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		position in the container.
     *	</dd>
     *
     *	<dt> Ordered </dt>
     *	<dd>
     *		The elements in the container follow a strict order at all times. All inserted elements are
     *		given a position in this order.
     *	</dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     *
     *	<dt> Multiple equivalent keys </dt>
     *	<dd> Multiple elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <T> Type of the elements. Each element in a {@link TreeMultiSet} container is also identified
     *			  by this value (each value is itself also the element's <i>key</i>).
     *
     * @reference http://www.cplusplus.com/reference/set/multiset
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMultiSet<T> extends base.MultiSet<T> implements base.ITreeSet<T> {
        /**
         * @hidden
         */
        private tree_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from compare.
         *
         * @param compare A binary predicate determines order of elements.
         */
        constructor(compare: (x: T, y: T) => boolean);
        /**
         * Contruct from elements.
         *
         * @param array Elements to be contained.
         */
        constructor(array: Array<T>);
        /**
         * Contruct from elements with compare.
         *
         * @param array Elements to be contained.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(array: Array<T>, compare: (x: T, y: T) => boolean);
        /**
         * Copy Constructor.
         */
        constructor(container: TreeMultiSet<T>);
        /**
         * Copy Constructor with compare.
         *
         * @param container A container to be copied.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(container: TreeMultiSet<T>, compare: (x: T, y: T) => boolean);
        /**
         * Range Constructor.
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: Iterator<T>, end: Iterator<T>);
        /**
         * Construct from range and compare.
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(begin: Iterator<T>, end: Iterator<T>, compare: (x: T, y: T) => boolean);
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(val: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        count(val: T): number;
        /**
         * @inheritdoc
         */
        key_comp(): (x: T, y: T) => boolean;
        /**
         * @inheritdoc
         */
        value_comp(): (x: T, y: T) => boolean;
        /**
         * @inheritdoc
         */
        lower_bound(val: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        upper_bound(val: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        equal_range(val: T): Pair<SetIterator<T>, SetIterator<T>>;
        /**
         * @hidden
         */
        protected _Insert_by_val(val: T): any;
        /**
         * @hidden
         */
        protected _Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>;
        /**
         * @hidden
         */
        protected _Insert_by_range<U extends T, InputIterator extends Iterator<U>>(first: InputIterator, last: InputIterator): void;
        /**
         * @hidden
         */
        protected _Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link TreeMultiSet set} of the same type. Sizes abd container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were
         * in <i>obj</i> before the call, and the elements of <i>obj</i> are those which were in this. All
         * iterators, references and pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link TreeMultiSet set container} of the same type of elements as this (i.e.,
         *			  with the same template parameters, <b>Key</b> and <b>T</b>) whose content is swapped
         *			  with that of this {@link TreeMultiSet container}.
         */
        swap(obj: TreeMultiSet<T>): void;
        /**
         * @inheritdoc
         */
        swap(obj: base.Container<T>): void;
    }
}
declare namespace std.TreeMultiMap {
    type iterator<Key, T> = MapIterator<Key, T>;
    type reverse_iterator<Key, T> = MapReverseIterator<Key, T>;
}
declare namespace std {
    /**
     * Tree-structured multiple-key map.
     *
     * {@link TreeMultiMap TreeMultiMaps} are associative containers that store elements formed by a combination of
     * a <i>key value</i> and a <i>mapped value</i>, following a specific order, and where multiple elements can
     * have equivalent keys.
     *
     * In a {@link TreeMultiMap}, the <i>key values</i> are generally used to sort and uniquely identify
     * the elements, while the <i>mapped values</i> store the content associated to this <i>key</i>. The types of
     * <i>key</i> and <i>mapped value</i> may differ, and are grouped together in member type
     * <code>value_type</code>, which is a {@link Pair} type combining both:
     *
     * <code>typedef Pair<const Key, T> value_type;</code>
     *
     * Internally, the elements in a {@link TreeMultiMap}are always sorted by its key following a
     * strict weak ordering criterion indicated by its internal comparison method (of {@link less}).
     *
     * {@link TreeMultiMap}containers are generally slower than {@link HashMap} containers
     * to access individual elements by their <i>key</i>, but they allow the direct iteration on subsets based
     * on their order.
     *
     * {@link TreeMultiMap TreeMultiMaps} are typically implemented as binary search trees.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" target="_blank"> <
     * img src="http://samchon.github.io/tstl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /> </a></p>
     *
     * ### Container properties
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		position in the container.
     *	</dd>
     *
     *	<dt> Ordered </dt>
     *	<dd>
     *		The elements in the container follow a strict order at all times. All inserted elements are
     *		given a position in this order.
     *	</dd>
     *
     *	<dt> Map </dt>
     *	<dd>
     *		Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		<i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>.
     *	</dd>
     *
     *	<dt> Multiple equivalent keys </dt>
     *	<dd> Multiple elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <Key> Type of the keys. Each element in a map is uniquely identified by its key value.
     * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
     *
     * @reference http://www.cplusplus.com/reference/map/multimap
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMultiMap<Key, T> extends base.MultiMap<Key, T> implements base.ITreeMap<Key, T> {
        /**
         * @hidden
         */
        private tree_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from compare.
         *
         * @param compare A binary predicate determines order of elements.
         */
        constructor(compare: (x: Key, y: Key) => boolean);
        /**
         * Contruct from elements.
         *
         * @param array Elements to be contained.
         */
        constructor(array: Array<Pair<Key, T>>);
        /**
         * Contruct from elements.
         *
         * @param array Elements to be contained.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(array: Array<Pair<Key, T>>, compare: (x: Key, y: Key) => boolean);
        /**
         * Contruct from tuples.
         *
         * @param array Tuples to be contained.
         */
        constructor(array: Array<[Key, T]>);
        /**
         * Contruct from tuples.
         *
         * @param array Tuples to be contained.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(array: Array<[Key, T]>, compare: (x: Key, y: Key) => boolean);
        /**
         * Copy Constructor.
         *
         * @param container Another map to copy.
         */
        constructor(container: TreeMultiMap<Key, T>);
        /**
         * Copy Constructor.
         *
         * @param container Another map to copy.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(container: TreeMultiMap<Key, T>, compare: (x: Key, y: Key) => boolean);
        /**
         * Range Constructor.
         *
         * @param begin nput interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: Iterator<Pair<Key, T>>, end: Iterator<Pair<Key, T>>);
        /**
         * Range Constructor.
         *
         * @param begin nput interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         * @param compare A binary predicate determines order of elements.
         */
        constructor(begin: Iterator<Pair<Key, T>>, end: Iterator<Pair<Key, T>>, compare: (x: Key, y: Key) => boolean);
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(key: Key): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        count(key: Key): number;
        /**
         * @inheritdoc
         */
        key_comp(): (x: Key, y: Key) => boolean;
        /**
         * @inheritdoc
         */
        value_comp(): (x: Pair<Key, T>, y: Pair<Key, T>) => boolean;
        /**
         * @inheritdoc
         */
        lower_bound(key: Key): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        upper_bound(key: Key): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        equal_range(key: Key): Pair<MapIterator<Key, T>, MapIterator<Key, T>>;
        /**
         * @hidden
         */
        protected _Insert_by_pair(pair: Pair<Key, T>): any;
        /**
         * @hidden
         */
        protected _Insert_by_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
        /**
         * @hidden
         */
        protected _Insert_by_range<L extends Key, U extends T, InputIterator extends Iterator<Pair<L, U>>>(first: InputIterator, last: InputIterator): void;
        /**
         * @hidden
         */
        protected _Handle_insert(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
        /**
         * Swap content.
         *
         * Exchanges the content of the container by the content of <i>obj</i>, which is another
         * {@link TreeMapMulti map} of the same type. Sizes abd container type may differ.
         *
         * After the call to this member function, the elements in this container are those which were
         * in <i>obj</i> before the call, and the elements of <i>obj</i> are those which were in this. All
         * iterators, references and pointers remain valid for the swapped objects.
         *
         * Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
         * algorithm with an optimization that behaves like this member function.
         *
         * @param obj Another {@link TreeMapMulti map container} of the same type of elements as this (i.e.,
         *			  with the same template parameters, <b>Key</b> and <b>T</b>) whose content is swapped
         *			  with that of this {@link TreeMapMulti container}.
         */
        swap(obj: TreeMultiMap<Key, T>): void;
        /**
         * @inheritdoc
         */
        swap(obj: base.Container<Pair<Key, T>>): void;
    }
}
declare namespace std {
    /**
     * System error exception.
     *
     * This class defines the type of objects thrown as exceptions to report conditions originating during
     * runtime from the operating system or other low-level application program interfaces which have an
     * associated {@link ErrorCode}.
     *
     * The class inherits from {@link RuntimeError}, to which it adds an {@link ErrorCode} as
     * member code (and defines a specialized what member).
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/system_error/system_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class SystemError extends RuntimeError {
        /**
         * @hidden
         */
        protected code_: ErrorCode;
        /**
         * Construct from an error code.
         *
         * @param code An {@link ErrorCode} object.
         */
        constructor(code: ErrorCode);
        /**
         * Construct from an error code and message.
         *
         * @param code An {@link ErrorCode} object.
         * @param message A message incorporated in the string returned by member {@link what what()}.
         */
        constructor(code: ErrorCode, message: string);
        /**
         * Construct from a numeric value and error category.
         *
         * @param val A numerical value identifying an error code.
         * @param category A reference to an {@link ErrorCode} object.
         */
        constructor(val: number, category: ErrorCategory);
        /**
         * Construct from a numeric value, error category and message.
         *
         * @param val A numerical value identifying an error code.
         * @param category A reference to an {@link ErrorCode} object.
         * @param message A message incorporated in the string returned by member {@link what what()}.
         */
        constructor(val: number, category: ErrorCategory, message: string);
        /**
         * Get error code.
         *
         * Returns the {@link ErrorCode} object associated with the exception.
         *
         * This value is either the {@link ErrorCode} passed to the construction or its equivalent
         * (if constructed with a value and a {@link category}.
         *
         * @return The {@link ErrorCode} associated with the object.
         */
        code(): ErrorCode;
    }
}
declare namespace std {
    /**
     * Error category.
     *
     * This type serves as a base class for specific category types.
     *
     * Category types are used to identify the source of an error. They also define the relation between
     * {@link ErrorCode} and {@link ErrorCondition}objects of its category, as well as the message set for {@link ErrorCode}
     * objects.
     *
     * Objects of these types have no distinct values and are not-copyable and not-assignable, and thus can only be
     * passed by reference. As such, only one object of each of these types shall exist, each uniquely identifying its own
     * category: all error codes and conditions of a same category shall return a reference to same object.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/system_error/error_category
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ErrorCategory {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Return category name.
         *
         * In derived classes, the function returns a string naming the category.
         *
         * In {@link ErrorCategory}, it is a pure virtual member function.
         *
         * <ul>
         *	<li> In the {@link GenericCategory} object, it returns <i>"generic"</i>. </li>
         *	<li> In the {@link SystemCategory} object, it returns <i>"system"</i>. </li>
         *	<li> In the {@link IOStreamCategory} object, it returns <i>"iostream"</i>. </li>
         * </ul>
         *
         * @return The category name.
         */
        abstract name(): string;
        /**
         * Error message.
         *
         * In derived classes, the function returns a string object with a message describing the error condition
         * denoted by <i>val</i>.
         *
         * In {@link ErrorCategory}, it is a pure virtual member function.
         *
         * This function is called both by {@link ErrorCode.message ErrorCode.message()} and
         * {@link ErrorCondition.message ErrorCondition.message()} to obtain the corresponding message in the
         * {@link category}. Therefore, numerical values used by custom <i>error codes</i> and
         * {@link ErrorCondition error conditions} should only match for a category if they describe the same error.
         *
         * @param val A numerical value identifying an error condition.
         *			  If the {@link ErrorCategory} object is the {@link GenericCategory}, this argument is equivalent to an
         *			  {@link errno} value.
         *
         * @return A string object with the message.
         */
        abstract message(val: number): string;
        /**
         * Default error condition.
         *
         * Returns the default {@link ErrorCondition}object of this category that is associated with the
         * {@link ErrorCode} identified by a value of <i>val</i>.
         *
         * Its definition in the base class {@link ErrorCategory} returns the same as constructing an
         * {@link ErrorCondition} object with:
         *
         * <code>new ErrorCondition(val, *this);</code>
         *
         * As a virtual member function, this behavior can be overriden in derived classes.
         *
         * This function is called by the default definition of member {@link equivalent equivalent()}, which is used to
         * compare {@link ErrorCondition error conditions} with error codes.
         *
         * @param val A numerical value identifying an error condition.
         *
         * @return The default {@link ErrorCondition}object associated with condition value <i>val</i> for this category.
         */
        default_error_condition(val: number): ErrorCondition;
        /**
         * Check error code equivalence.
         *
         * Checks whether, for the category, an {@link ErrorCode error code} is equivalent to an
         * {@link ErrorCondition error condition.
         *
         * This function is called by the overloads of comparison operators when an {@link ErrorCondition} object is
         * compared to an {@link ErrorCode} object to check for equality or inequality. If either one of those objects'
         * {@link ErrorCategory categories} considers the other equivalent using this function, they are considered
         * equivalent by the operator.
         *
         * As a virtual member function, this behavior can be overridden in derived classes to define a different
         * correspondence mechanism for each {@link ErrorCategory} type.
         *
         * @param val_code A numerical value identifying an error code.
         * @param cond An object of an {@link ErrorCondition} type.
         *
         * @return <code>true</code> if the arguments are considered equivalent. <code>false</code> otherwise.
         */
        equivalent(val_code: number, cond: ErrorCondition): boolean;
        /**
         * Check error code equivalence.
         *
         * Checks whether, for the category, an {@link ErrorCode error code} is equivalent to an
         * {@link ErrorCondition error condition.
         *
         * This function is called by the overloads of comparison operators when an {@link ErrorCondition} object is
         * compared to an {@link ErrorCode} object to check for equality or inequality. If either one of those objects'
         * {@link ErrorCategory categories} considers the other equivalent using this function, they are considered
         * equivalent by the operator.
         *
         * As a virtual member function, this behavior can be overridden in derived classes to define a different
         * correspondence mechanism for each {@link ErrorCategory} type.
         *
         * @param code An object of an {@link ErrorCode} type.
         * @param val_cond A numerical value identifying an error code.
         *
         * @return <code>true</code> if the arguments are considered equivalent. <code>false</code> otherwise.
         */
        equivalent(code: ErrorCode, val_cond: number): boolean;
    }
}
declare namespace std {
    /**
     * Error condition.
     *
     * Objects of this type hold a condition {@link value} associated with a {@link category}.
     *
     * Objects of this type describe errors in a generic way so that they may be portable across different
     * systems. This is in contrast with {@link ErrorCode} objects, that may contain system-specific
     * information.
     *
     * Because {@link ErrorCondition}objects can be compared with error_code objects directly by using
     * <code>relational operators</code>, {@link ErrorCondition}objects are generally used to check whether
     * a particular {@link ErrorCode} obtained from the system matches a specific error condition no matter
     * the system.
     *
     * The {@link ErrorCategory categories} associated with the {@link ErrorCondition} and the
     * {@link ErrorCode} define the equivalences between them.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/system_error/error_condition
     * @author Jeongho Nam <http://samchon.org>
     */
    class ErrorCondition extends base.ErrorInstance {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from a numeric value and error category.
         *
         * @param val A numerical value identifying an error condition.
         * @param category A reference to an {@link ErrorCategory} object.
         */
        constructor(val: number, category: ErrorCategory);
    }
}
declare namespace std {
    /**
     * Error code.
     *
     * Objects of this type hold an error code {@link value} associated with a {@link category}.
     *
     * The operating system and other low-level applications and libraries generate numerical error codes to
     * represent possible results. These numerical values may carry essential information for a specific platform,
     * but be non-portable from one platform to another.
     *
     * Objects of this class associate such numerical codes to {@link ErrorCategory error categories}, so that they
     * can be interpreted when needed as more abstract (and portable) {@link ErrorCondition error conditions}.
     *
     * <a href="http://samchon.github.io/tstl/images/design/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/tstl/images/design/class_diagram/exceptions.png" style="max-width: 100%" /> </a>
     *
     * @reference http://www.cplusplus.com/reference/system_error/error_code
     * @author Jeongho Nam <http://samchon.org>
     */
    class ErrorCode extends base.ErrorInstance {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from a numeric value and error category.
         *
         * @param val A numerical value identifying an error code.
         * @param category A reference to an {@link ErrorCategory} object.
         */
        constructor(val: number, category: ErrorCategory);
    }
}
declare namespace std {
    /**
     * Running on Node.
     *
     * Test whether the JavaScript is running on Node.
     *
     * @references http://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser
     */
    function is_node(): boolean;
    /**
     * Pair of values.
     *
     * This class couples together a pair of values, which may be of different types (<i>T1</i> and
     * <i>T2</i>). The individual values can be accessed through its public members {@link first} and
     * {@link second}.
     *
     * @param <T1> Type of member {@link first}.
     * @param <T2> Type of member {@link second}.
     *
     * @reference http://www.cplusplus.com/reference/utility/pair
     * @author Jeongho Nam <http://samchon.org>
     */
    class Pair<T1, T2> implements IComparable<Pair<T1, T2>> {
        /**
         * A first value in the Pair.
         */
        first: T1;
        /**
         * A second value in the Pair.
         */
        second: T2;
        /**
         * Construct from pair values.
         *
         * @param first The first value of the Pair
         * @param second The second value of the Pair
         */
        constructor(first: T1, second: T2);
        /**
         * Whether a Pair is equal with the Pair.
         *
         * Compare each first and second value of two Pair(s) and returns whether they are equal or not.
         *
         * If stored key and value in a Pair are not number or string but an object like a class or struct,
         * the comparison will be executed by a member method (SomeObject)::equals(). If the object does not have
         * the member method equal_to(), only address of pointer will be compared.
         *
         * @param obj A Map to compare
         * @return Indicates whether equal or not.
         */
        equals<U1 extends T1, U2 extends T2>(pair: Pair<U1, U2>): boolean;
        /**
         * @inheritdoc
         */
        less<U1 extends T1, U2 extends T2>(pair: Pair<U1, U2>): boolean;
    }
    /**
     * Construct {@link Pair} object.
     *
     * Constructs a {@link Pair} object with its {@link Pair.first first} element set to <i>x</i> and its
     * {@link Pair.second second} element set to <i>y</i>.
     *
     * The template types can be implicitly deduced from the arguments passed to {@link make_pair}.
     *
     * {@link Pair} objects can be constructed from other {@link Pair} objects containing different types, if the
     * respective types are implicitly convertible.
     *
     * @param x Value for member {@link Pair.first first}.
     * @param y Value for member {@link Pair.second second}.
     *
     * @return A {@link Pair} object whose elements {@link Pair.first first} and {@link Pair.second second} are set to
     *		   <i>x</i> and <i>y</i> respectivelly.
     */
    function make_pair<T1, T2>(x: T1, y: T2): Pair<T1, T2>;
}
declare namespace std {
    /**
     * Type definition of {@link Vector} and it's the original name used in C++.
     */
    export import vector = Vector;
    /**
     * Type definition of {@link List} and it's the original name used in C++.
     */
    export import list = List;
    /**
     * Type definition of {@link Deque} and it's the original name used in C++.
     */
    export import deque = Deque;
    /**
     * Type definition of {@link Stack} and it's the original name used in C++.
     */
    type stack<T> = Stack<T>;
    /**
     * Type definition of {@link Queue} and it's the original name used in C++.
     */
    type queue<T> = Queue<T>;
    /**
     * Type definition of {@link PriorityQueue} and it's the original name used in C++.
     */
    type priority_queue<T> = PriorityQueue<T>;
    var stack: typeof Stack;
    var queue: typeof Queue;
    var priority_queue: typeof PriorityQueue;
    /**
     * Type definition of {@link TreeSet} and it's the original name used in C++.
     */
    export import set = TreeSet;
    /**
     * Type definition of {@link TreeMultiSet} and it's the original name used in C++.
     */
    export import multiset = TreeMultiSet;
    /**
     * Type definition of {@link HashSet} and it's the original name used in C++.
     */
    export import unordered_set = HashSet;
    /**
     * Type definition of {@link HashMultiSet} and it's the original name used in C++.
     */
    export import unordered_multiset = HashMultiSet;
    /**
     * Type definition of {@link TreeMap} and it's the original name used in C++.
     */
    export import map = TreeMap;
    /**
     * Type definition of {@link TreeMultiMap} and it's the original name used in C++.
     */
    export import multimap = TreeMultiMap;
    /**
     * Type definition of {@link HashMap} and it's the original name used in C++.
     */
    export import unordered_map = HashMap;
    /**
     * Type definition of {@link HashMultiMap} and it's the original name used in C++.
     */
    export import unordered_multimap = HashMultiMap;
    type exception = Exception;
    type logic_error = LogicError;
    type domain_error = DomainError;
    type invalid_argument = InvalidArgument;
    type length_error = LengthError;
    type out_of_range = OutOfRange;
    type runtime_error = RuntimeError;
    type overflow_error = OverflowError;
    type underflow_error = UnderflowError;
    type range_error = RangeError;
    type system_error = SystemError;
    type error_category = ErrorCategory;
    type error_condition = ErrorCondition;
    type error_code = ErrorCode;
    var exception: typeof Exception;
    var logic_error: typeof LogicError;
    var domain_error: typeof DomainError;
    var invalid_argument: typeof InvalidArgument;
    var length_error: typeof LengthError;
    var out_of_range: typeof OutOfRange;
    var runtime_error: typeof RuntimeError;
    var overflow_error: typeof OverflowError;
    var underflow_error: typeof UnderflowError;
    var range_error: typeof RangeError;
    var system_error: typeof SystemError;
    var error_category: typeof ErrorCategory;
    var error_condition: typeof ErrorCondition;
    var error_code: typeof ErrorCode;
}
