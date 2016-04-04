declare namespace std {
    function sort<T>(begin: base.container.ILinearIterator<T>, end: base.container.ILinearIterator<T>, compare?: (left: T, right: T) => boolean): void;
}
declare namespace std.base.container {
    /**
     * <p> An abstract container. </p>
     *
     * <h3> Container properties </h3>
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
    abstract class Container<T> implements IContainer<T> {
        /**
         * <p> Default Constructor. </p>
         *
         * <p> Constructs an empty container, with no elements. </p>
         */
        constructor();
        /**
         * <p> Initializer list Constructor. </p>
         *
         * <p> Constructs a container with a copy of each of the elements in <i>array</i>, in the same order. </p>
         *
         * @param array An array containing elements to be copied and contained.
         */
        constructor(array: Array<T>);
        /**
         * <p> Copy Constructor. </p>
         *
         * <p> Constructs a container with a copy of each of the elements in <i>container</i>, in the same order. </p>
         *
         * @param container Another container object of the same type (with the same class template
         *					arguments <i>T</i>), whose contents are either copied or acquired.
         */
        constructor(container: IContainer<T>);
        /**
         * <p> Range Constructor. </p>
         *
         * <p> Constructs a container with as many elements as the range (<i>begin</i>, <i>end<i>), with each
         * element emplace-constructed from its corresponding element in that range, in the same order. </p>
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: Iterator<T>, end: Iterator<T>);
        /**
         * @inheritdoc
         */
        abstract assign<U extends T>(begin: Iterator<U>, end: Iterator<U>): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        abstract push<U extends T>(...items: U[]): number;
        /**
         * @inheritdoc
         */
        abstract insert(position: Iterator<T>, val: T): Iterator<T>;
        /**
         * @inheritdoc
         */
        abstract erase(position: Iterator<T>): Iterator<T>;
        /**
         * @inheritdoc
         */
        abstract erase<U extends T>(begin: Iterator<U>, end: Iterator<U>): Iterator<T>;
        /**
         * @inheritdoc
         */
        abstract begin(): Iterator<T>;
        /**
         * @inheritdoc
         */
        abstract end(): Iterator<T>;
        /**
         * @inheritdoc
         */
        abstract size(): number;
        /**
         * @inheritdoc
         */
        empty(): boolean;
        abstract swap(obj: Container<T>): void;
    }
}
declare namespace std.base.container {
    /**
     * <p> Array container. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IArray<T> extends ILinearContainer<T> {
        /**
         * <p> Request a change in capacity. </p>
         * <p> Requests that the {@link IArray container} {@link capacity} be at least enough to contain
         * <i>n</i> elements. </p>
         *
         * <p> If <i>n</i> is greater than the current {@link IArray container} {@link capacity}, the
         * function causes the {@link IArray container} to reallocate its storage increasing its
         * {@link capacity} to <i>n</i> (or greater). </p>
         *
         * <p> In all other cases, the function call does not cause a reallocation and the
         * {@link IArray container} {@link capacity} is not affected. </p>
         *
         * <p> This function has no effect on the {@link IArray container} {@link size} and cannot alter
         * its elements. </p>
         *
         * @param n Minimum {@link capacity} for the {@link IArray container}.
         *			Note that the resulting vector {@link capacity} may be equal or greater than <i>n</i>.
         */
        reserve(n: number): void;
        /**
         * <p> Return size of allocated storage capacity. </p>
         * <p> Returns the size of the storage space currently allocated for the {@link IArray container},
         * expressed in terms of elements. </p>
         *
         * <p> This <i>capacity</i> is not necessarily equal to the {@link IArray container} {@link size}.
         * It can be equal or greater, with the extra space allowing to accommodate for growth without the
         * need to reallocate on each insertion. </p>
         *
         * <p> Notice that this <i>capacity</i> does not suppose a limit on the {@link size} of the
         * {@link IArray container}. When this <i>capacity</i> is exhausted and more is needed, it is
         * automatically expanded by the {@link IArray container} (reallocating it storage space).
         * The theoretical limit on the {@link size} of a {@link IArray container} is given by member
         * {@link max_size}. </p>
         *
         * <p> The <i>capacity</i> of a {@link IArray container} can be explicitly altered by calling member
         * {@link IArray.reserve}.
         *
         * @return The size of the currently allocated storage capacity in the {@link IArray container},
         *		   measured in terms of the number elements it can hold.
         */
        capacity(): number;
        /**
         * <p> Access element. </p>
         * <p> Returns a value to the element at position <i>index</i> in the {@link IArray container}.</p>
         *
         * <p> The function automatically checks whether <i>index</i> is within the bounds of valid elements
         * in the {@link IArray container}, throwing an {@link OutOfRange} exception if it is not (i.e.,
         * if <i>index</i> is greater or equal than its {@link size}). </p>
         *
         * @param index Position of an element in the container.
         *				If this is greater than or equal to the {@link IArray container} {@link size}, an
         *				exception of type {@link OutOfRange} is thrown. Notice that the first
         *				element has a position of 0 (not 1).
         *
         * @return The element at the specified position in the container.
         */
        at(index: number): T;
        /**
         * <p> Modify element. </p>
         * <p> Replaces an element at the specified position (<i>index</i>) in this {@link IArray container}
         * with the specified element (<i>val</i>). </p>
         *
         * <p> The function automatically checks whether <i>index</i> is within the bounds of valid elements
         * in the {@link IArray container}, throwing an {@link OutOfRange} exception if it is not (i.e., if
         * <i>index</i> is greater or equal than its {@link size}). </p>
         *
         * @param index A specified position of the value to replace.
         * @param val A value to be stored at the specified position.
         *
         * @return The previous element had stored at the specified position.
         */
        set(index: number, val: T): void;
    }
}
declare namespace std.base.container {
    /**
     * <p> An interface of container. </p>
     *
     * <p> {@link IContainer} is an interface designed for sequence containers. Sequence containers of STL
     * (Standard Template Library) are based on the {@link IContainer}. </p>
     *
     * <h3> Container properties </h3>
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
    interface IContainer<T> {
        /**
         * <p> Assign new content to content. </p>
         *
         * <p> Assigns new contents to the container, replacing its current contents, and modifying its
         * {@link size} accordingly. </p>
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        assign(begin: Iterator<T>, end: Iterator<T>): void;
        /**
         * <p> Clear content. </p>
         *
         * <p> Removes all elements from the Container, leaving the container with a size of 0. </p>
         */
        clear(): void;
        /**
         * <p> Return iterator to beginning. </p>
         *
         * <p> Returns an iterator referring the first element in the Container. </p>
         *
         * <h4> Note </h4>
         * <p> If the container is empty, the returned iterator is same with end(). </p>
         *
         * @return An iterator to the first element in the container.
         * The iterator containes the first element's value.
         */
        begin(): Iterator<T>;
        /**
         * <p> Return iterator to end. </p>
         * <p> Returns an iterator referring to the past-the-end element in the Container. </p>
         *
         * <p> The past-the-end element is the theoretical element that would follow the last element in
         * the Container. It does not point to any element, and thus shall not be dereferenced. </p>
         *
         * <p> Because the ranges used by functions of the Container do not include the element reference
         * by their closing iterator, this function is often used in combination with Container::begin() to specify
         * a range including all the elements in the container. </p>
         *
         * <h4> Note </h4>
         * <p> Returned iterator from Container.end() does not refer any element. Trying to accessing
         * element by the iterator will cause throwing exception (out of range). </p>
         * <p> If the container is empty, this function returns the same as Container::begin(). </p>
         *
         * @return An iterator to the end element in the container.
         */
        end(): Iterator<T>;
        /**
         * Return the number of elements in the Container.
         *
         * @return The number of elements in the container.
         */
        size(): number;
        /**
         * <p> Test whether the container is empty. </p>
         * <p> Returns whether the container is empty (i.e. whether its size is 0). </p>
         *
         * <p> This function does not modify the container in any way. To clear the content of the container,
         * see {@link clear clear()}. </p>
         *
         * @return <code>true</code> if the container size is 0, <code>false</code> otherwise.
         */
        empty(): boolean;
        /**
         * <p> Insert elements. </p>
         *
         * <p> Appends new elements to the container, and returns the new size of the {@link Container}. </p>
         *
         * @param items New elements to insert.
         *
         * @return New size of the Container.
         */
        push<U extends T>(...items: U[]): number;
        /**
         * <p> Insert an element. </p>
         *
         * <p> The container is extended by inserting a new element before the element at the specified
         * <i>position</i>. This effectively increases the {@link IContainer.size container size} by the amount of
         * elements inserted. </p>
         *
         * @param position Position in the {@link IContainer} where the new element is inserted.
         *				   {@link iterator} is a member type, defined as a {@link Iterator random access iterator}
         *				   type that points to elements.
         * @param val Value to be copied to the inserted element.
         *
         * @return An iterator that points to the newly inserted element.
         */
        insert(position: Iterator<T>, val: T): Iterator<T>;
        /**
         * <p> Erase an element. </p>
         *
         * <p> Removes from the {@link Container} a single element. </p>
         *
         * <p> This effectively reduces the container size by the number of element removed. </p>
         *
         * @param position Iterator pointing to a single element to be removed from the Container.
         *
         * @return An iterator pointing to the element that followed the last element erased by the function
         *		   call. This is the {@link end Container.end} if the operation erased the last element in the
         *		   sequence.
         */
        erase(position: Iterator<T>): Iterator<T>;
        /**
         * <p> Erase elements. </p>
         *
         * <p> Removes from the {@link Container} a range of elements. </p>
         *
         * <p> This effectively reduces the container size by the number of elements removed. </p>
         *
         * @param begin An iterator specifying a range of beginning to erase.
         * @param end An iterator specifying a range of end to erase.
         *
         * @return An iterator pointing to the element that followed the last element erased by the function
         *		   call. This is the {@link end Container.end} if the operation erased the last element in the
         *		   sequence.
         */
        erase(begin: Iterator<T>, end: Iterator<T>): Iterator<T>;
        swap(obj: IContainer<T>): void;
    }
}
declare namespace std.base.container {
    /**
     * <p> Deque container. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IDeque<T> extends ILinearContainer<T> {
        /**
         * <p> Insert element at beginning. </p>
         *
         * <p> Inserts a new element at the beginning of the {@link IDeque container}, right before its
         * current first element. This effectively increases the {@link IDeque container} {@link size} by
         * one. </p>
         *
         * @param val Value to be inserted as an element.
         */
        pushFront(val: T): void;
        /**
         * <p> Delete first element. </p>
         *
         * <p> Removes the first element in the {@link IDeque container}, effectively reducing its
         * {@link size} by one. </p>
         */
        popFront(): void;
    }
}
declare namespace std.base.container {
    /**
     * <p> Linear container. </p>
     *
     * @author Jeonngho Nam
     */
    interface ILinearContainer<T> extends IContainer<T> {
        /**
         * @inheritdoc
         */
        assign<U extends T>(begin: Iterator<U>, end: Iterator<U>): void;
        /**
         * <p> Assign container content. </p>
         *
         * <p> Assigns new contents to the {@link IList container}, replacing its current contents,
         * and modifying its {@link size} accordingly. </p>
         *
         * @param n New size for the container.
         * @param val Value to fill the container with. Each of the <u>n</u> elements in the container will
         *			  be initialized to a copy of this value.
         */
        assign(n: number, val: T): void;
        /**
         * <p> Access first element. </p>
         * <p> Returns a value of the first element in the {@link IList container}. </p>
         *
         * <p> Unlike member {@link end end()}, which returns an iterator just past this element,
         * this function returns a direct value. </p>
         *
         * <p> Calling this function on an {@link empty} {@link IList container} causes undefined behavior. </p>
         *
         * @return A value of the first element of the {@link IList container}.
         */
        front(): T;
        /**
         * <p> Access last element. </p>
         * <p> Returns a value of the last element in the {@link IList container}. </p>
         *
         * <p> Unlike member {@link end end()}, which returns an iterator just past this element,
         * this function returns a direct value. </p>
         *
         * <p> Calling this function on an {@link empty} {@link IList container} causes undefined behavior. </p>
         *
         * @return A value of the last element of the {@link IList container}.
         */
        back(): T;
        /**
         * <p> Add element at the end. </p>
         *
         * <p> Adds a new element at the end of the {@link IList container}, after its current last element.
         * This effectively increases the {@link IList container} {@link size} by one. </p>
         *
         * @param val Value to be copied to the new element.
         */
        pushBack(val: T): void;
        /**
         * <p> Delete last element. </p>
         *
         * <p> Removes the last element in the {@link IList container}, effectively reducing the
         * {@link IList container} {@link size} by one. </p>
         */
        popBack(): void;
        /**
         * <p> Insert an element. </p>
         *
         * <p> The {@link IList conatiner} is extended by inserting new element before the element at the
         * specified <i>position</i>, effectively increasing the {@link IList container} {@link size} by
         * one. </p>
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
         * <p> Insert elements by range iterators. </p>
         *
         * <p> The {@link IList container} is extended by inserting new elements before the element at the
         * specified <i>position</i>, effectively increasing the {@link IList container} {@link size} by
         * the number of repeating elements </i>n</i>. </p>
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
         * <p> Insert elements by range iterators. </p>
         *
         * <p> The {@link IList container} is extended by inserting new elements before the element at the
         * specified <i>position</i>, effectively increasing the {@link IList container} {@link size} by
         * the number of elements inserted by range iterators. </p>
         *
         * @param position Position in the {@link IList container} where the new elements are inserted.
         *				   {@link iterator} is a member type, defined as a {@link iterator random access iterator}
         *				   type that points to elements.
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert<U extends T>(position: Iterator<T>, begin: Iterator<U>, end: Iterator<U>): Iterator<T>;
    }
}
declare namespace std.base.container {
    abstract class Iterator<T> {
        /**
         * Source container of the iteerator is directing for.
         */
        protected source: IContainer<T>;
        /**
         * Construct from the source {@link IContainer container}.
         *
         * @param source The source container.
         */
        constructor(source: IContainer<T>);
        /**
         * <p> Get iterator to previous element. </p>
         * <p> If current iterator is the first item(equal with {@link IContainer.begin IContainer.begin()}),
         * returns {@link IContainer.end IContainer.end()}. </p>
         *
         * @return An iterator of the previous item.
         */
        abstract prev(): Iterator<T>;
        /**
         * <p> Get iterator to next element. </p>
         * <p> If current iterator is the last item, returns {@link IContainer.end IContainer.end()}. </p>
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
        advance(n: number): Iterator<T>;
        /**
         * Get source.
         */
        getSource(): Container<T>;
        /**
         * <p> Whether an iterator is equal with the iterator. </p>
         *
         * <p> Compare two iterators and returns whether they are equal or not. </p>
         *
         *
         * <h4> Note </h4>
         *
         * <p> Iterator's equals() only compare souce map and index number. </p>
         *
         * <p> Although elements in a pair, key and value are equals, if the source map or
         * index number is different, then the {@link equals equals()} will return false. If you want to
         * compare the elements of a pair, compare them directly by yourself. </p>
         *
         * @param obj An iterator to compare
         * @return Indicates whether equal or not.
         */
        equals<U extends T>(obj: Iterator<U>): boolean;
        /**
         * <p> Get value of the iterator is pointing. </p>
         *
         * @return A value of the iterator.
         */
        value: T;
    }
}
declare namespace std.base.container {
    interface ILinearIterator<T> extends Iterator<T> {
        value: T;
        swap(obj: ILinearIterator<T>): void;
        prev(): ILinearIterator<T>;
        next(): ILinearIterator<T>;
    }
}
declare namespace std.base.container {
    /**
     * <p> An abstract map. </p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Ordered </dt>
     *	<dd> The elements in the container follow a strict order at all times. All inserted elements are
     *		 given a position in this order. </dd>
     *
     *	<dt> Map </dt>
     *	<dd> Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		 <i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>. </dd>
     * </dl>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class MapContainer<Key, T> {
        protected data: List<Pair<Key, T>>;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @private
         */
        protected constructByArray(items: Array<Pair<Key, T>>): void;
        /**
         * @private
         */
        protected constructByContainer(container: MapContainer<Key, T>): void;
        /**
         * @private
         */
        protected constructByRange(begin: MapIterator<Key, T>, end: MapIterator<Key, T>): void;
        /**
         * <p> Assign new content to content. </p>
         *
         * <p> Assigns new contents to the Container, replacing its current contents,
         * and modifying its size accordingly. </p>
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        assign<L extends Key, U extends T>(begin: MapIterator<L, U>, end: MapIterator<L, U>): void;
        /**
         * <p> Clear content. </p>
         *
         * <p> Removes all elements from the Container, leaving the container with a size of 0. </p>
         */
        clear(): void;
        /**
         * <p> Get iterator to element. </p>
         *
         * <p> Searches the container for an element with a identifier equivalent to <i>key</i> and
         * returns an iterator to it if found, otherwise it returns an iterator to {@link end end()}. </p>
         *
         * <p> Two keys are considered equivalent if the container's comparison object returns false
         * reflexively (i.e., no matter the order in which the elements are passed as arguments). </p>
         *
         * <p> Another member functions, {@link has has()} and {@link count count()}, can be used to just check
         * whether a particular <i>key</i> exists. </p>
         *
         * @param key Key to be searched for
         * @return An iterator to the element, if an element with specified <i>key</i> is found, or
         *		   {@link end end()} otherwise.
         */
        abstract find(key: Key): MapIterator<Key, T>;
        /**
         * <p> Return iterator to beginning. </p>
         * <p> Returns an iterator referring the first element in the Container. </p>
         *
         * <h4> Note </h4>
         * <p> If the container is empty, the returned iterator is same with {@link end()}. </p>
         *
         * @return An iterator to the first element in the container.
         * The iterator containes the first element's value.
         */
        begin(): MapIterator<Key, T>;
        /**
         * <p> Return iterator to end. </p>
         * <p> Returns an iterator referring to the past-the-end element in the Container. </p>
         *
         * <p> The past-the-end element is the theoretical element that would follow the last element in
         * the Container. It does not point to any element, and thus shall not be dereferenced. </p>
         *
         * <p> Because the ranges used by functions of the Container do not include the element reference
         * by their closing iterator, this function is often used in combination with Container::begin() to specify
         * a range including all the elements in the container. </p>
         *
         * <h4> Note </h4>
         * <p> Returned iterator from Container.end() does not refer any element. Trying to accessing
         * element by the iterator will cause throwing exception (out of range). </p>
         * <p> If the container is empty, this function returns the same as {@link begin}. </p>
         *
         * @return An iterator to the end element in the container.
         */
        end(): MapIterator<Key, T>;
        /**
         * <p> Whether have the item or not. </p>
         * <p> Indicates whether a map has an item having the specified identifier. </p>
         *
         * @param key Key value of the element whose mapped value is accessed.
         *
         * @return Whether the map has an item having the specified identifier.
         */
        has(key: Key): boolean;
        /**
         * <p> Count elements with a specific key. </p>
         * <p> Searches the container for elements whose key is k and returns the number of elements found. </p>
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
         * Test whether the Container is empty.
         */
        empty(): boolean;
        insert(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
        insert<L extends Key, U extends T>(begin: MapIterator<L, U>, end: MapIterator<L, U>): void;
        protected abstract insertByPair<L extends Key, U extends T>(pair: Pair<L, U>): any;
        private insertByHint(hint, pair);
        protected insertByRange<L extends Key, U extends T>(begin: MapIterator<L, U>, end: MapIterator<L, U>): void;
        erase(key: Key): number;
        erase(it: MapIterator<Key, T>): MapIterator<Key, T>;
        erase(begin: MapIterator<Key, T>, end: MapIterator<Key, T>): MapIterator<Key, T>;
        /**
         * @private
         */
        private eraseByKey(key);
        /**
         * @private
         */
        private eraseByIterator(it);
        /**
         * @private
         */
        private eraseByRange(begin, end);
        protected abstract handleInsert(item: MapIterator<Key, T>): void;
        protected abstract handleErase(item: MapIterator<Key, T>): void;
        swap(obj: MapContainer<Key, T>): void;
    }
}
declare namespace std.base.container {
    abstract class MultiMap<K, T> extends MapContainer<K, T> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        count(key: K): number;
        insert<L extends K, U extends T>(pair: Pair<L, U>): MapIterator<K, T>;
        /**
         * @inheritdoc
         */
        insert(hint: MapIterator<K, T>, pair: Pair<K, T>): MapIterator<K, T>;
        /**
         * @inheritdoc
         */
        insert<L extends K, U extends T>(begin: MapIterator<L, U>, end: MapIterator<L, U>): void;
    }
}
declare namespace std.base.container {
    /**
     * Abstract Set.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class SetContainer<T> extends Container<T> {
        protected data: List<T>;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @private
         */
        protected constructByArray(items: Array<T>): void;
        /**
         * @private
         */
        protected constructByContainer(container: Container<T>): void;
        /**
         * @private
         */
        protected constructByRange(begin: Iterator<T>, end: Iterator<T>): void;
        /**
         * @inheritdoc
         */
        assign<U extends T>(begin: Iterator<U>, end: Iterator<U>): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * <p> Get iterator to element. </p>
         *
         * <p> Searches the container for an element with <i>key</i> as value and returns an iterator to it if found,
         * otherwise it returns an iterator to {@link end end()} (the element past the end of the container). </p>
         *
         * <p> Another member function, {@link count count()}, can be used to just check whether a particular element
         * exists. </p>
         *
         * @param key Key to be searched for.
         *
         * @return An iterator to the element, if the specified value is found, or {@link end end()} if it is not
         *		   found in the container.
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
         * <p> Whether have the item or not. </p>
         * <p> Indicates whether a set has an item having the specified identifier. </p>
         *
         * @param key Key value of the element whose mapped value is accessed.
         *
         * @return Whether the set has an item having the specified identifier.
         */
        has(val: T): boolean;
        /**
         * <p> Count elements with a specific key. </p>
         * <p> Searches the container for elements with a value of k and returns the number of elements found. </p>
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
        push<U extends T>(...args: U[]): number;
        /**
         * <p> Insert element with hint. </p>
         *
         * <p> Extends the container by inserting new elements, effectively increasing the container size by the
         * number of elements inserted. </p>
         *
         * @param hint Hint for the position where the element can be inserted.
         * @param key Value to be inserted as an elements.
         *
         * @return An iterator pointing to either the newly inserted element or
         *		 to the element that already had its same value in the set.
         */
        insert(hint: SetIterator<T>, val: T): SetIterator<T>;
        /**
         * <p> Insert elements with a range of a container. </p>
         *
         * <p> Extends the container by inserting new elements, effectively increasing the container size by the
         * number of elements inserted. </p>
         *
         * @param begin An iterator specifying range of the begining element.
         * @param end An iterator specifying range of the ending element.
         */
        insert<U extends T>(begin: Iterator<U>, end: Iterator<U>): any;
        /**
         * @private
         */
        protected abstract insertByVal(val: T): any;
        /**
         * @private
         */
        private insertByHint(hint, val);
        /**
         * @private
         */
        protected insertByRange(begin: Iterator<T>, end: Iterator<T>): void;
        /**
         * <p> Erase an element. </p>
         * <p> Removes from the set container the elements whose value is <i>key</i>. </p>
         *
         * <p> This effectively reduces the container size by the number of elements removed. </p>
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
         * <p> Erase elements. </p>
         * <p> Removes from the set container a range of elements.. </p>
         *
         * <p> This effectively reduces the container size by the number of elements removed. </p>
         *
         * @param begin An iterator specifying a range of beginning to erase.
         * @param end An iterator specifying a range of end to erase.
         */
        erase(begin: SetIterator<T>, end: SetIterator<T>): SetIterator<T>;
        /**
         * @private
         */
        private eraseByKey(val);
        /**
         * @private
         */
        private eraseByIterator(it);
        /**
         * @private
         */
        private eraseByRange(begin, end);
        protected abstract handleInsert(item: SetIterator<T>): void;
        protected abstract handleErase(item: SetIterator<T>): void;
        swap(obj: SetContainer<T>): void;
    }
}
declare namespace std.base.container {
    abstract class MultiSet<T> extends SetContainer<T> {
        /**
         * Default Constructor.
         */
        constructor();
        count(val: T): number;
        insert(val: T): SetIterator<T>;
        insert(hint: SetIterator<T>, val: T): SetIterator<T>;
        insert<U extends T>(begin: Iterator<U>, end: Iterator<U>): SetIterator<T>;
    }
}
declare namespace std.base.container {
    abstract class UniqueMap<Key, T> extends MapContainer<Key, T> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        count(key: Key): number;
        get(key: Key): T;
        set(key: Key, val: T): void;
        insert<L extends Key, U extends T>(pair: Pair<L, U>): Pair<MapIterator<Key, T>, boolean>;
        /**
         * @inheritdoc
         */
        insert(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        insert<L extends Key, U extends T>(begin: MapIterator<L, U>, end: MapIterator<L, U>): void;
    }
}
declare namespace std.base.container {
    abstract class UniqueSet<T> extends SetContainer<T> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        count(key: T): number;
        /**
         * @inheritdoc
         */
        insert(val: T): Pair<SetIterator<T>, boolean>;
        /**
         * @inheritdoc
         */
        insert(hint: SetIterator<T>, val: T): SetIterator<T>;
        /**
         * @inheritdoc
         */
        insert<U extends T>(begin: Iterator<U>, end: Iterator<U>): SetIterator<T>;
    }
}
declare namespace std.base.hash {
    const MIN_SIZE: number;
    const RATIO: number;
    const MAX_RATIO: number;
    function code(par: any): number;
}
declare namespace std.base.hash {
    class HashBuckets<T> {
        private buckets;
        private itemSize_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Reserve the bucket size.
         *
         * @param size Number of bucket size to reserve.
         */
        reserve(size: number): void;
        clear(): void;
        size(): number;
        itemSize(): number;
        at(index: number): Vector<T>;
        private hashIndex(val);
        insert(val: T): void;
        erase(val: T): void;
    }
}
declare namespace std.base.hash {
    class MapHashBuckets<K, T> extends HashBuckets<MapIterator<K, T>> {
        private map;
        constructor(map: container.MapContainer<K, T>);
        find(key: K): MapIterator<K, T>;
    }
}
declare namespace std.base.hash {
    class SetHashBuckets<T> extends HashBuckets<SetIterator<T>> {
        private set;
        constructor(set: container.SetContainer<T>);
        find(val: T): SetIterator<T>;
    }
}
declare namespace std.base.system {
    /**
     * <p> An abstract error instance. </p>
     *
     * <p> {@link ErrorInstance} is an abstract class of {@link ErrorCode} and {@link ErrorCondition}
     * holding an error instance's identifier {@link value}, associated with a {@link category}. </p>
     *
     * <p> The operating system and other low-level applications and libraries generate numerical error codes to
     * represent possible results. These numerical values may carry essential information for a specific platform,
     * but be non-portable from one platform to another. </p>
     *
     * <p> Objects of this class associate such numerical codes to {@link ErrorCategory error categories},
     * so that they can be interpreted when needed as more abstract (and portable)
     * {@link ErrorCondition error conditions}. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class ErrorInstance {
        /**
         * A reference to an {@link ErrorCategory} object.
         */
        protected category_: ErrorCategory;
        /**
         * A numerical value identifying an error instance.
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
         * <p> Assign error instance. </p>
         *
         * <p> Assigns the {@link ErrorCode} object a value of val associated with the {@link ErrorCategory}. </p>
         *
         * @param val A numerical value identifying an error instance.
         * @param category A reference to an {@link ErrorCategory} object.
         */
        assign(val: number, category: ErrorCategory): void;
        /**
         * <p> Clear error instance. </p>
         *
         * <p> Clears the value in the {@link ErrorCode} object so that it is set to a value of <i>0</i> of the
         * {@link ErrorCategory.systemCategory ErrorCategory.systemCategory()} (indicating no error). </p>
         */
        clear(): void;
        /**
         * <p> Get category. </p>
         *
         * <p> Returns a reference to the {@link ErrorCategory} associated with the {@link ErrorCode} object. </p>
         *
         * @return A reference to a non-copyable object of a type derived from {@link ErrorCategory}.
         */
        category(): ErrorCategory;
        /**
         * <p> Error value. </p>
         *
         * <p> Returns the error value associated with the {@link ErrorCode} object. </p>
         *
         * @return The error value.
         */
        value(): number;
        /**
         * <p> Get message. </p>
         *
         * <p> Returns the message associated with the error instance. </p>
         *
         * <p> Error messages are defined by the {@link category} the error instance belongs to. </p>
         *
         * <p> This function returns the same as if the following member was called: </p>
         *
         * <p> <code>category().message(value())</code> </p>
         *
         * @return A string object with the message associated with the {@link ErrorCode}.
         */
        message(): string;
        /**
         * <p> Default error condition. </p>
         *
         * <p> Returns the default {@link ErrorCondition}object associated with the {@link ErrorCode} object. </p>
         *
         * <p> This function returns the same as if the following member was called: </p>
         *
         * <p> <code>category().default_error_condition(value())</code> </p>
         *
         * <p> {@link ErrorCategory.defaultErrorCondition ErrorCategory.defaultErrorCondition()}
         * is a virtual member function, that can operate differently for each category. </p>
         *
         * @return An {@link ErrorCondition}object that corresponds to the {@link ErrorCode} object.
         */
        defaultErrorCondition(): ErrorCondition;
        /**
         * <p> Convert to bool. </p>
         *
         * <p> Returns whether the error instance has a numerical {@link value} other than 0. </p>
         *
         * <p> If it is zero (which is generally used to represent no error), the function returns false, otherwise it returns true. </p>
         *
         * @return <code>true</code> if the error's numerical value is not zero.
         *		   <code>false</code> otherwise.
         */
        toBoolean(): boolean;
    }
}
declare namespace std.base.tree {
    /**
     * Abstract Tree.
     *
     * @param <T> Type of elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class XTree<T> {
        /**
         * Root node.
         */
        protected root: XTreeNode<T>;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Find a node from its contained value.
         *
         * @param val Value to find.
         */
        find(val: T): XTreeNode<T>;
        /**
         * Fetch maximum (the rightes?) node from one.
         *
         * @param node A node to fetch its maximum node.
         * @return The maximum node.
         */
        protected fetchMaximum(node: XTreeNode<T>): XTreeNode<T>;
        abstract isEquals(left: T, right: T): boolean;
        abstract isLess(left: T, right: T): boolean;
        /**
         * Insert an element with a new node.
         *
         * @param val An element to insert.
         */
        abstract insert(val: T): void;
        /**
         * Erase an element with its node.
         *
         * @param val An element to erase.
         */
        abstract erase(val: T): void;
        /**
         * Rotate a node left.
         *
         * @param node Node to rotate left.
         */
        protected rotateLeft(node: XTreeNode<T>): void;
        /**
         * Rotate a node to right.
         *
         * @param node A node to rotate right.
         */
        protected rotateRight(node: XTreeNode<T>): void;
        /**
         * Replace a node.
         *
         * @param oldNode Ordinary node to be replaced.
         * @param newNode Target node to replace.
         */
        protected replaceNode(oldNode: XTreeNode<T>, newNode: XTreeNode<T>): void;
    }
}
declare namespace std.base.tree {
    /**
     * <p> Red-black Tree. </p>
     *
     * <p> A red-black tree is a kind of self-balancing
     * binary search tree. Each node of the binary tree has an extra bit, and that bit is often interpreted as the
     * color (<font color='red'>red</font> or <font color='darkBlue'>black</font>) of the node. These color bits
     * are used to ensure the tree remains approximately balanced during insertions and deletions. </p>
     *
     * <p> Balance is preserved by painting each node of the tree with one of two colors (typically called
     * '<font color='red'>red</font>' and '<font color='darkBlue'>black</font>') in a way that satisfies certain
     * properties, which collectively constrain how unbalanced the tree can become in the worst case. When the tree
     * is modified, the new tree is subsequently rearranged and repainted to restore the coloring properties. The
     * properties are designed in such a way that this rearranging and recoloring can be performed efficiently. </p>
     *
     * <p> The balancing of the tree is not perfect but it is good enough to allow it to guarantee searching in
     * O(log n) time, where n is the total number of elements in the tree. The insertion and deletion operations,
     * along with the tree rearrangement and recoloring, are also performed in O(log n) time. </p>
     *
     * <p> Tracking the color of each node requires only 1 bit of information per node because there are only two
     * colors. The tree does not contain any other data specific to its being a
     * red-black tree so its memory footprint is almost
     * identical to a classic (uncolored) binary search tree. In many cases the additional bit of information can
     * be stored at no additional memory cost. </p>
     *
     * <h4> Properties </h4>
     * <p> In addition to the requirements imposed on a binary search tree the following must be satisfied by a
     * red-black tree: </p>
     *
     * <ol>
     *	<li> A node is either <font color='red'>red</font> or <font color='darkBlue'>black</font>. </li>
     *	<li>
     *		The root is <font color='darkBlue'>black</font>. This rule is sometimes omitted. Since the root can
     *		always be changed from <font color='red'>red</font> to <font color='darkBlue'>black</font>, but not
     *		necessarily vice versa, this rule has little effect on analysis.
     *	</li>
     *	<li> All leaves (NIL; <code>null</code>) are <font color='darkBlue'>black</font>. </li>
     *  <li>
     *		If a node is <font color='red'>red</font>, then both its children are
     *		<font color='darkBlue'>black</font>.
     *	</li>
     *  <li>
     *		Every path from a given node to any of its descendant NIL nodes contains the same number of
     *		<font color='darkBlue'>black</font> nodes. Some definitions: the number of
     *		<font color='darkBlue'>black</font> nodes from the root to a node is the node's
     *		<font color='darkBlue'>black</font> depth; the uniform number of <font color='darkBlue'>black</font>
     *		nodes in all paths from root to the leaves is called the <font color='darkBlue'>black</font>-height of
     *		the red-black tree.
     *	</li>
     * </ol>
     *
     * <p> <img src="../assets/images/tree/Red-black_tree_example.svg" width="100%" /> </p>
     *
     * <p> These constraints enforce a critical property of red-black trees: the path from the root to the farthest
     * leaf is no more than twice as long as the path from the root to the nearest leaf. The result is that the tree
     * is roughly height-balanced. Since operations such as inserting, deleting, and finding values require
     * worst-case time proportional to the height of the tree, this theoretical upper bound on the height allows
     * red-black trees to be efficient in the worst case, unlike ordinary binary search trees. </p>
     *
     * <p> To see why this is guaranteed, it suffices to consider the effect of properties 4 and 5 together. For a
     * red-black tree T, let B be the number of <font color='darkBlue'>black</font> nodes in property 5. Let the
     * shortest possible path from the root of T to any leaf consist of B <font color='darkBlue'>black</font> nodes.
     * Longer possible paths may be constructed by inserting <font color='red'>red</font> nodes. However, property 4
     * makes it impossible to insert more than one consecutive <font color='red'>red</font> node. Therefore,
     * ignoring any <font color='darkBlue'>black</font> NIL leaves, the longest possible path consists of 2*B nodes,
     * alternating <font color='darkBlue'>black</font> and <font color='red'>red</font> (this is the worst case).
     * Counting the <font color='darkBlue'>black</font> NIL leaves, the longest possible path consists of 2*B-1
     * nodes. </p>
     *
     * <p> The shortest possible path has all <font color='darkBlue'>black</font> nodes, and the longest possible
     * path alternates between <font color='red'>red</font> and <font color='darkBlue'>black</font> nodes. Since all
     * maximal paths have the same number of <font color='darkBlue'>black</font> nodes, by property 5, this shows
     * that no path is more than twice as long as any other path. </p>
     *
     * <ul>
     *	<li> Reference: https://en.wikipedia.org/w/index.php?title=Red%E2%80%93black_tree&redirect=no </li>
     * </ul>
     *
     * @param <T> Type of elements.
     *
     * @inventor Rudolf Bayer
     * @author Migrated by Jeongho Nam <http://samchon.org>
     */
    abstract class RBTree<T> extends XTree<T> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * <p> Insert an element with a new node. </p>
         *
         * <p> Insertion begins by adding the node as any binary search tree insertion does and by coloring it
         * <font color='red'>red</font>. Whereas in the binary search tree, we always add a leaf, in the red-black
         * tree, leaves contain no information, so instead we add a <font color='red'>red</font> interior node, with
         * two <font color='darkBlue'>black</font> leaves, in place of an existing
         * <font color='darkBlue'>black</font> leaf. </p>
         *
         * <p> What happens next depends on the color of other nearby nodes. The term uncle node will be used to
         * refer to the sibling of a node's parent, as in human family trees. Note that: </p>
         *
         * <ul>
         *	<li> property 3 (all leaves are <font color='darkBlue'>black</font>) always holds. </li>
         *	<li>
         *		property 4 (both children of every <font color='red'>red</font> node are
         *		<font color='darkBlue'>black</font>) is threatened only by adding a <font color='red'>red</font>
         *		node, repainting a <font color='darkBlue'>black</font> node <font color='red'>red</font>, or a
         *		rotation.
         *	</li>
         *	<li>
         *		property 5 (all paths from any given node to its leaf nodes contain the same number of
         *		<font color='darkBlue'>black</font> nodes) is threatened only by adding a
         *		<font color='darkBlue'>black</font> node, repainting a <font color='red'>red</font> node
         *		<font color='darkBlue'>black</font> (or vice versa), or a rotation.
         *	</li>
         * </ul>
         *
         * <h4> Notes </h4>
         * <ol>
         *	<li>
         *		The label <i><b>N</b></i> will be used to denote the current node (colored
         *		<font color='red'>red</font>). In the diagrams <i><b>N</b></i> carries a blue contour. At the
         *		beginning, this is the new node being inserted, but the entire procedure may also be applied
         *		recursively to other nodes (see case 3). {@link XTreeNode.parent <b>P</b>} will denote
         *		<i><b>N</b></i>'s parent node, {@link XTreeNode.grandParent <b>G</b>} will denote <i><b>N</b></i>'s
         *		grandparent, and {@link XTreeNode.uncle <b>U</b>} will denote <i><b>N</b></i>'s uncle. In between
         *		some cases, the roles and labels of the nodes are exchanged, but in each case, every label continues
         *		to represent the same node it represented at the beginning of the case.
         *	</li>
         *	<li>
         *		If a node in the right (target) half of a diagram carries a blue contour it will become the current
         *		node in the next iteration and there the other nodes will be newly assigned relative to it. Any
         *		color shown in the diagram is either assumed in its case or implied by those assumptions.
         *	</li>
         *	<li>
         *		A numbered triangle represents a subtree of unspecified depth. A <font color='darkBlue'>black</font>
         *		circle atop a triangle means that <font color='darkBlue'>black</font>-height of subtree is greater
         *		by one compared to subtree without this circle. </li>
         * </ol>
         *
         * <p> There are several cases of red-black tree insertion to handle: </p>
         *
         * <ul>
         *	<li> <i><b>N</b></i> is the root node, i.e., first node of red-black tree. </li>
         *	<li>
         *		<i><b>N</b></i>'s parent ({@link XTreeNode.parent <b>P</b>}) is <font color='darkBlue'>black</font>.
         *	</li>
         *	<li>
         *		<i><b>N</b></i>'s parent ({@link XTreeNode.parent <b>P</b>}) and uncle
         *		({@link XTreeNode.uncle <b>U</b>}) are <font color='red'>red</font>.
         *	</li>
         *	<li>
         *		<i><b>N</b></i> is added to right of left child of grandparent, or <i><b>N</b></i> is added to left
         *		of right child of grandparent ({@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font> and
         *		{@link XTreeNode.uncle <b>U</b>} is <font color='darkBlue'>black</font>).
         *	</li>
         *	<li>
         *		<i><b>N</b></i> is added to left of left child of grandparent, or <i><b>N</b></i> is added to right
         *		of right child of grandparent ({@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font> and
         *		{@link XTreeNode.uncle <b>U</b>} is <font color='darkBlue'>black</font>).
         *	</li>
         * </ul>
         *
         * <h4> Note </h4>
         * <p> Note that inserting is actually in-place, since all the calls above use tail recursion. </p>
         *
         * <p> In the algorithm above, all cases are chained in order, except in insert case 3 where it can recurse
         * to case 1 back to the grandparent node: this is the only case where an iterative implementation will
         * effectively loop. Because the problem of repair is escalated to the next higher level but one, it takes
         * maximally h⁄2 iterations to repair the tree (where h is the height of the tree). Because the probability
         * for escalation decreases exponentially with each iteration the average insertion cost is constant. </p>
         *
         * @param val An element to insert.
         */
        insert(val: T): void;
        /**
         * <p> <i><b>N</b></i> is the root node, i.e., first node of red-black tree. </p>
         *
         * <p> The current node <i><b>N</b></i> is at the {@link root} of the tree. </p>
         *
         * <p> In this case, it is repainted <font color='darkBlue'>black</font> to satisfy property 2 (the root is
         * <font color='darkBlue'>black</font>). Since this adds one <font color='darkBlue'>black</font> node to
         * every path at once, property 5 (all paths from any given node to its leaf nodes contain the same number
         * of <font color='darkBlue'>black</font> nodes) is not violated. </p>
         *
         * @param N A node to be inserted or swapped.
         */
        private insertCase1(N);
        /**
         * <p> <i><b>N</b></i>'s parent ({@link XTreeNode.parent <b>P</b>}) is <font color='darkBlue'>black</font>. </p>
         *
         * <p> The current node's parent {@link XTreeNode.parent <b>P</b>} is <font color='darkBlue'>black</font>,
         * so property 4 (both children of every <font color='red'>red</font> node are
         * <font color='darkBlue'>black</font>) is not invalidated. </p>
         *
         * <p> In this case, the tree is still valid. Property 5 (all paths from any given node to its leaf nodes
         * contain the same number of <font color='darkBlue'>black</font> nodes) is not threatened, because the
         * current node <i><b>N</b></i> has two <font color='darkBlue'>black</font> leaf children, but because
         * <i><b>N</b></i> is <font color='red'>red</font>, the paths through each of its children have the same
         * number of <font color='darkBlue'>black</font> nodes as the path through the leaf it replaced, which was
         * <font color='darkBlue'>black</font>, and so this property remains satisfied. </p>
         *
         * @param N A node to be inserted or swapped.
         */
        private insertCase2(N);
        /**
         * <p> <i><b>N</b></i>'s parent ({@link XTreeNode.parent <b>P</b>}) and uncle
         * (<i>{@link XTreeNode.uncle <b>U</b>}</i>) are <font color='red'>red</font>. </p>
         *
         * <p> If both the parent {@link XTreeNode.parent <b>P</b>} and the uncle {@link XTreeNode.uncle <b>U</b>}
         * are <font color='red'>red</font>, then both of them can be repainted <font color='darkBlue'>black</font>
         * and the grandparent {@link XTreeNode.grandParent <b>G</b>} becomes <font color='red'>red</font> (to
         * maintain property 5 (all paths from any given node to its leaf nodes contain the same number of
         * <font color='darkBlue'>black</font> nodes)). </p>
         *
         * <p> Now, the current <font color='red'>red</font> node <i><b>N</b></i> has a
         * <font color='darkBlue'>black</font> parent. Since any path through the parent or uncle must pass through
         * the grandparent, the number of <font color='darkBlue'>black</font> nodes on these paths has not changed.
         *
         * <p> However, the grandparent {@link XTreeNode.grandParent <b>G</b>} may now violate properties 2 (The
         * root is <font color='darkBlue'>black</font>) or 4 (Both children of every <font color='red'>red</font>
         * node are <font color='darkBlue'>black</font>) (property 4 possibly being violated since
         * {@link XTreeNode.grandParent <b>G</b>} may have a <font color='red'>red</font> parent). </p>
         *
         * <p> To fix this, the entire procedure is recursively performed on {@link XTreeNode.grandParent <b>G</b>}
         * from case 1. Note that this is a tail-recursive call, so it could be rewritten as a loop; since this is
         * the only loop, and any rotations occur after this loop, this proves that a constant number of rotations
         * occur. </p>
         *
         * <p> <img src="../assets/images/tree/Red-black_tree_insert_case_3.svg" /> </p>
         *
         * @param N A node to be inserted or swapped.
         */
        private insertCase3(N);
        /**
         * <p> <i><b>N</b></i> is added to right of left child of grandparent, or <i><b>N</b></i> is added to left
         * of right child of grandparent ({@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font> and
         * {@link XTreeNode.uncle <b>U</b>} is <font color='darkBlue'>black</font>). </p>
         *
         * <p> The parent {@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font> but the uncle
         * {@link XTreeNode.uncle <b>U</b>} is <font color='darkBlue'>black</font>; also, the current node
         * <i><b>N</b></i> is the right child of {@link XTreeNode.parent <b>P</b>}, and
         * {@link XTreeNode.parent <b>P</b>} in turn is the left child of its parent
         * {@link XTreeNode.grandParent <b>G</b>}. </p>
         *
         * <p> In this case, a left rotation on {@link XTreeNode.parent <b>P</b>} that switches the roles of the
         * current node <i><b>N</b></i> and its parent {@link XTreeNode.parent <b>P</b>} can be performed; then,
         * the former parent node {@link XTreeNode.parent <b>P</b>} is dealt with using case 5
         * (relabeling <i><b>N</b></i> and {@link XTreeNode.parent <b>P</b>}) because property 4 (both children of
         * every <font color='red'>red</font> node are <font color='darkBlue'>black</font>) is still violated. </p>
         *
         * <p> The rotation causes some paths (those in the sub-tree labelled "1") to pass through the node
         * <i><b>N</b></i> where they did not before. It also causes some paths (those in the sub-tree labelled "3")
         * not to pass through the node {@link XTreeNode.parent <b>P</b>} where they did before. However, both of
         * these nodes are <font color='red'>red</font>, so property 5 (all paths from any given node to its leaf
         * nodes contain the same number of <font color='darkBlue'>black</font> nodes) is not violated by the
         * rotation. </p>
         *
         * <p> After this case has been completed, property 4 (both children of every <font color='red'>red</font>
         * node are <font color='darkBlue'>black</font>) is still violated, but now we can resolve this by
         * continuing to case 5. </p>
         *
         * <p> <img src="../assets/images/tree/Red-black_tree_insert_case_4.svg" /> </p>
         *
         * @param N A node to be inserted or swapped.
         */
        private insertCase4(node);
        /**
         * <p> <i><b>N</b></i> is added to left of left child of grandparent, or <i><b>N</b></i> is added to right
         * of right child of grandparent ({@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font> and
         * {@link XTreeNode.uncle <b>U</b>} is <font color='darkBlue'>black</font>). </p>
         *
         * <p> The parent {@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font> but the uncle
         * {@link XTreeNode.uncle <b>U</b>} is <font color='darkBlue'>black</font>, the current node <i><b>N</b></i>
         * is the left child of {@link XTreeNode.parent <b>P</b>}, and {@link XTreeNode.parent <b>P</b>} is the left
         * child of its parent {@link XTreeNode.grandParent <b>G</b>}. </p>
         *
         * <p>In this case, a right rotation on {@link XTreeNode.grandParent <b>G</b>} is performed; the result is a
         * tree where the former parent {@link XTreeNode.parent <b>P</b>} is now the parent of both the current node
         * <i><b>N</b></i> and the former grandparent {@link XTreeNode.grandParent <b>G</b>}. </p>
         *
         * <p> {@link XTreeNode.grandParent <b>G</b>} is known to be <font color='darkBlue'>black</font>, since its
         * former child {@link XTreeNode.parent <b>P</b>} could not have been <font color='red'>red</font> otherwise
         * (without violating property 4). Then, the colors of {@link XTreeNode.parent <b>P</b>} and
         * {@link XTreeNode.grandParent <b>G</b>} are switched, and the resulting tree satisfies property 4 (both
         * children of every <font color='red'>red</font> node are <font color='darkBlue'>black</font>). Property 5
         * (all paths from any given node to its leaf nodes contain the same number of
         * <font color='darkBlue'>black</font> nodes) also remains satisfied, since all paths that went through any
         * of these three nodes went through {@link XTreeNode.grandParent <b>G</b>} before, and now they all go
         * through {@link XTreeNode.parent <b>P</b>}. In each case, this is the only
         * <font color='darkBlue'>black</font> node of the three. </p>
         *
         * <p> <img src="../assets/images/tree/Red-black_tree_insert_case_5.svg" /> </p>
         *
         * @param N A node to be inserted or swapped.
         */
        private insertCase5(node);
        /**
         * <p> Erase an element with its node. </p>
         *
         * <p> In a regular binary search tree when deleting a node with two non-leaf children, we find either the
         * maximum element in its left subtree (which is the in-order predecessor) or the minimum element in its
         * right subtree (which is the in-order successor) and move its value into the node being deleted (as shown
         * here). We then delete the node we copied the value from, which must have fewer than two non-leaf children.
         * (Non-leaf children, rather than all children, are specified here because unlike normal binary search
         * trees, red-black trees can have leaf nodes anywhere, so that all nodes are either internal nodes with
         * two children or leaf nodes with, by definition, zero children. In effect, internal nodes having two leaf
         * children in a red-black tree are like the leaf nodes in a regular binary search tree.) Because merely
         * copying a value does not violate any red-black properties, this reduces to the problem of deleting a node
         * with at most one non-leaf child. Once we have solved that problem, the solution applies equally to the
         * case where the node we originally want to delete has at most one non-leaf child as to the case just
         * considered where it has two non-leaf children. </p>
         *
         * <p> Therefore, for the remainder of this discussion we address the deletion of a node with at most one
         * non-leaf child. We use the label <b>M</b> to denote the node to be deleted; <b>C</b> will denote a
         * selected child of <b>M</b>, which we will also call "its child". If <b>M</b> does have a non-leaf child,
         * call that its child, <b>C</b>; otherwise, choose either leaf as its child, <b>C</b>. </p>
         *
         * <p> If <b>M</b> is a <font color='red'>red</font> node, we simply replace it with its child <b>C</b>,
         *  which must be <font color='darkBlue'>black</font> by property 4. (This can only occur when <b>M</b> has
         * two leaf children, because if the <font color='red'>red</font> node <b>M</b> had a
         * <font color='darkBlue'>black</font> non-leaf child on one side but just a leaf child on the other side,
         * then the count of <font color='darkBlue'>black</font> nodes on both sides would be different, thus the
         * tree would violate property 5.) All paths through the deleted node will simply pass through one fewer
         * <font color='red'>red</font> node, and both the deleted node's parent and child must be
         * <font color='darkBlue'>black</font>, so property 3 (all leaves are <font color='darkBlue'>black</font>)
         * and property 4 (both children of every <font color='red'>red</font> node are
         * <font color='darkBlue'>black</font>) still hold. </p>
         *
         * <p> Another simple case is when <b>M</b> is <font color='darkBlue'>black</font> and <b>C</b> is
         * <font color='red'>red</font>. Simply removing a <font color='darkBlue'>black</font> node could break
         * Properties 4 (“Both children of every <font color='red'>red</font> node are
         * <font color='darkBlue'>black</font>”) and 5 (“All paths from any given node to its leaf nodes contain the
         * same number of <font color='darkBlue'>black</font> nodes”), but if we repaint <b>C</b>
         * <font color='darkBlue'>black</font>, both of these properties are preserved. </p>
         *
         * <p> The complex case is when both <b>M</b> and <b>C</b> are <font color='darkBlue'>black</font>. (This
         * can only occur when deleting a <font color='darkBlue'>black</font> node which has two leaf children,
         * because if the <font color='darkBlue'>black</font> node <b>M</b> had a <font color='darkBlue'>black</font>
         * non-leaf child on one side but just a leaf child on the other side, then the count of
         * <font color='darkBlue'>black</font> nodes on both sides would be different, thus the tree would have been
         * an invalid red-black tree by violation of property 5.) We begin by replacing <b>M</b> with its child
         * <b>C</b>. We will relabel this child <b>C</b> (in its new position) <i><b>N</b></i>, and its sibling (its
         * new parent's other child) {@link XTreeNode.sibling <b>S</b>}. ({@link XTreeNode.sibling <b>S</b>} was
         * previously the sibling of <b>M</b>.) </p>
         *
         * <p> In the diagrams below, we will also use {@link XTreeNode.parent <b>P</b>} for <i><b>N</b></i>'s new
         * parent (<b>M</b>'s old parent), <b>SL</b> for {@link XTreeNode.sibling <b>S</b>}'s left child, and
         * <b>SR</b> for {@link XTreeNode.sibling <b>S</b>}'s right child ({@link XTreeNode.sibling <b>S</b>} cannot
         * be a leaf because if <b>M</b> and <b>C</b> were <font color='darkBlue'>black</font>, then
         * {@link XTreeNode.parent <b>P</b>}'s one subtree which included <b>M</b> counted two
         * <font color='darkBlue'>black</font>-height and thus {@link XTreeNode.parent <b>P</b>}'s other subtree
         * which includes {@link XTreeNode.sibling <b>S</b>} must also count two
         * <font color='darkBlue'>black</font>-height, which cannot be the case if {@link XTreeNode.sibling <b>S</b>}
         * is a leaf node). </p>
         *
         * <h4> Notes </h4>
         * <ol>
         *	<li>
         *		The label <i><b>N</b></i> will be used to denote the current node (colored
         *		<font color='darkBlue'>black</font>). In the diagrams <i><b>N</b></i> carries a blue contour. At the
         *		beginning, this is the replacement node and a leaf, but the entire procedure may also be applied
         *		recursively to other nodes (see case 3). In between some cases, the roles and labels of the nodes
         *		are exchanged, but in each case, every label continues to represent the same node it represented at
         *		the beginning of the case.
         *	</li>
         *	<li>
         *		If a node in the right (target) half of a diagram carries a blue contour it will become the current
         *		node in the next iteration and there the other nodes will be newly assigned relative to it. Any
         *		color shown in the diagram is either assumed in its case or implied by those assumptions.
         *		White represents an arbitrary color (either <font color='red'>red</font> or
         *		<font color='darkBlue'>black</font>), but the same in both halves of the diagram.
         *	</li>
         *	<li>
         *		A numbered triangle represents a subtree of unspecified depth. A <font color='darkBlue'>black</font>
         *		circle atop a triangle means that <font color='darkBlue'>black</font>-height of subtree is greater
         *		by one compared to subtree without this circle.
         *	</li>
         * </ol>
         *
         * <p> If both <i><b>N</b></i> and its original parent are <font color='darkBlue'>black</font>, then
         * deleting this original parent causes paths which proceed through <i><b>N</b></i> to have one fewer
         * <font color='darkBlue'>black</font> node than paths that do not. As this violates property 5 (all paths
         * from any given node to its leaf nodes contain the same number of <font color='darkBlue'>black</font>
         * nodes), the tree must be rebalanced. There are several cases to consider: </p>
         *
         * <ol>
         *	<li> <i><b>N</b></i> is the new root. </li>
         *	<li> {@link XTreeNode.sibling <b>S</b>} is <font color='red'>red</font>. </li>
         *	<li>
         *		{@link XTreeNode.parent <b>P</b>}, {@link XTreeNode.sibling <b>S</b>}, and
         *		{@link XTreeNode.sibling <b>S</b>}'s children are <font color='darkBlue'>black</font>. </li>
         *	<li>
         *		{@link XTreeNode.sibling <b>S</b>} and {@link XTreeNode.sibling <b>S</b>}'s children are
         *		<font color='darkBlue'>black</font>, but {@link XTreeNode.parent <b>P</b>} is
         *		<font color='red'>red</font>.
         *	</li>
         *	<li>
         *		{@link XTreeNode.sibling <b>S</b>} is <font color='darkBlue'>black</font>,
         *		{@link XTreeNode.sibling <b>S</b>}'s left child is <font color='red'>red</font>,
         *		{@link XTreeNode.sibling <b>S</b>}'s right child is <font color='darkBlue'>black</font>, and
         *		<i><b>N</b></i> is the left child of its parent.
         *	</li>
         *	<li>
         *		{@link XTreeNode.sibling <b>S</b>} is <font color='darkBlue'>black</font>,
         *		{@link XTreeNode.sibling <b>S</b>}'s right child is <font color='red'>red</font>, and
         *		<i><b>N</b></i> is the left child of its parent {@link XTreeNode.parent <b>P</b>}.
         *	</li>
         * </ol>
         *
         * <p> Again, the function calls all use tail recursion, so the algorithm is in-place. </p>
         *
         * <p> In the algorithm above, all cases are chained in order, except in delete case 3 where it can recurse
         * to case 1 back to the parent node: this is the only case where an iterative implementation will
         * effectively loop. No more than h loops back to case 1 will occur (where h is the height of the tree).
         * And because the probability for escalation decreases exponentially with each iteration the average
         * removal cost is constant. </p>
         *
         * <p> Additionally, no tail recursion ever occurs on a child node, so the tail recursion loop can only
         * move from a child back to its successive ancestors. If a rotation occurs in case 2 (which is the only
         * possibility of rotation within the loop of cases 1–3), then the parent of the node <i><b>N</b></i>
         * becomes <font color='red'>red</font> after the rotation and we will exit the loop. Therefore, at most one
         * rotation will occur within this loop. Since no more than two additional rotations will occur after
         * exiting the loop, at most three rotations occur in total. </p>
         *
         * @param val An element to erase.
         */
        erase(val: T): void;
        /**
         * <p> <i><b>N</b></i> is the new root. </p>
         *
         * <p> In this case, we are done. We removed one <font color='darkBlue'>black</font> node from every path,
         * and the new root is <font color='darkBlue'>black</font>, so the properties are preserved. </p>
         *
         * <h4> Note </h4>
         * <p> In cases 2, 5, and 6, we assume <i><b>N</b></i> is the left child of its parent
         * {@link XTreeNode.parent <b>P</b>}. If it is the right child, left and right should be reversed throughout
         * these three cases. Again, the code examples take both cases into account. </p>
         *
         * @param N A node to be erased or swapped.
         */
        private eraseCase1(N);
        /**
         * <p> {@link XTreeNode.sibling <b>S</b>} is <font color='red'>red</font>. </p>
         *
         * <p> <img src="../assets/images/tree/Red-black_tree_delete_case_2.svg" /> </p>
         *
         * <p> In this case we reverse the colors of {@link XTreeNode.parent <b>P</b>} and
         * {@link XTreeNode.sibling <b>S</b>}, and then rotate left at {@link XTreeNode.parent <b>P</b>}, turning
         * {@link XTreeNode.sibling <b>S</b>} into <i><b>N</b></i>'s grandparent. </p>
         *
         * <p> Note that {@link XTreeNode.parent <b>P</b>} has to be <font color='darkBlue'>black</font> as it had a
         * <font color='red'>red</font> child. The resulting subtree has a path short one
         * <font color='darkBlue'>black</font> node so we are not done. Now <i><b>N</b></i> has a
         * <font color='darkBlue'>black</font> sibling and a <font color='red'>red</font> parent, so we can proceed
         * to step 4, 5, or 6. (Its new sibling is <font color='darkBlue'>black</font> because it was once the child
         * of the <font color='red'>red</font> {@link XTreeNode.sibling <b>S</b>}.) In later cases, we will re-label
         * <i><b>N</b></i>'s new sibling as {@link XTreeNode.sibling <b>S</b>}. </p>
         *
         * @param N A node to be erased or swapped.
         */
        private eraseCase2(N);
        /**
         * <p> {@link XTreeNode.parent <b>P</b>}, {@link XTreeNode.sibling <b>S</b>}, and {@link XTreeNode.sibling
         * <b>S</b>}'s children are <font color='darkBlue'>black</font>. </p>
         *
         * <p> <img src="../assets/images/tree/Red-black_tree_delete_case_3.svg" /> </p>
         *
         * <p> In this case, we simply repaint {@link XTreeNode.sibling <b>S</b>} <font color='red'>red</font>. The
         * result is that all paths passing through {@link XTreeNode.sibling <b>S</b>}, which are precisely those
         * paths not passing through <i><b>N</b></i>, have one less <font color='darkBlue'>black</font> node.
         * Because deleting <i><b>N</b></i>'s original parent made all paths passing through <i><b>N</b></i> have
         * one less <font color='darkBlue'>black</font> node, this evens things up. </p>
         *
         * <p> However, all paths through {@link XTreeNode.parent <b>P</b>} now have one fewer
         * <font color='darkBlue'>black</font> node than paths that do not pass through
         * {@link XTreeNode.parent <b>P</b>}, so property 5 (all paths from any given node to its leaf nodes contain
         * the same number of <font color='darkBlue'>black</font> nodes) is still violated. </p>
         *
         * <p> To correct this, we perform the rebalancing procedure on {@link XTreeNode.parent <b>P</b>}, starting
         * at case 1. </p>
         *
         * @param N A node to be erased or swapped.
         */
        private eraseCase3(N);
        /**
         * <p> {@link XTreeNode.sibling <b>S</b>} and {@link XTreeNode.sibling <b>S</b>}'s children are
         * <font color='darkBlue'>black</font>, but {@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font>. </p>
         *
         * <p> <img src="../assets/images/tree/Red-black_tree_delete_case_4.svg" /> </p>
         *
         * <p> In this case, we simply exchange the colors of {@link XTreeNode.sibling <b>S</b>} and
         * {@link XTreeNode.parent <b>P</b>}. This does not affect the number of <font color='darkBlue'>black</font>
         * nodes on paths going through {@link XTreeNode.sibling <b>S</b>}, but it does add one to the number of
         * <font color='darkBlue'>black</font> nodes on paths going through <i><b>N</b></i>, making up for the
         * deleted <font color='darkBlue'>black</font> node on those paths. </p>
         *
         * @param N A node to be erased or swapped.
         */
        private eraseCase4(N);
        /**
         * <p> {@link XTreeNode.sibling <b>S</b>} is <font color='darkBlue'>black</font>, {@link XTreeNode.sibling <b>S</b>}'s
         * left child is <font color='red'>red</font>, {@link XTreeNode.sibling <b>S</b>}'s right child is
         * <font color='darkBlue'>black</font>, and <i><b>N</b></i> is the left child of its parent. </p>
         *
         * <p> <img src="../assets/images/tree/Red-black_tree_delete_case_5.svg" /> </p>
         *
         * <p> In this case we rotate right at {@link XTreeNode.sibling <b>S</b>}, so that
         * {@link XTreeNode.sibling <b>S</b>}'s left child becomes {@link XTreeNode.sibling <b>S</b>}'s parent and
         * <i><b>N</b></i>'s new sibling. We then exchange the colors of {@link XTreeNode.sibling <b>S</b>} and its
         * new parent. </p>
         *
         * <p> All paths still have the same number of <font color='darkBlue'>black</font> nodes, but now
         * <i><b>N</b></i> has a <font color='darkBlue'>black</font> sibling whose right child is
         * <font color='red'>red</font>, so we fall into case 6. Neither <i><b>N</b></i> nor its parent are affected
         * by this transformation. (Again, for case 6, we relabel <i><b>N</b></i>'s new sibling as
         * {@link XTreeNode.sibling <b>S</b>}.) </p>
         *
         * @param N A node to be erased or swapped.
         */
        private eraseCase5(N);
        /**
         * <p> {@link XTreeNode.sibling <b>S</b>} is <font color='darkBlue'>black</font>,
         * {@link XTreeNode.sibling <b>S</b>}'s right child is <font color='red'>red</font>, and <i><b>N</b></i> is
         * the left child of its parent {@link XTreeNode.parent <b>P</b>}. </p>
         *
         * <p> In this case we rotate left at {@link XTreeNode.parent <b>P</b>}, so that
         * {@link XTreeNode.sibling <b>S</b>} becomes the parent of {@link XTreeNode.parent <b>P</b>} and
         * {@link XTreeNode.sibling <b>S</b>}'s right child. We then exchange the colors of
         * {@link XTreeNode.parent <b>P</b>} and {@link XTreeNode.sibling <b>S</b>}, and make
         * {@link XTreeNode.sibling <b>S</b>}'s right child <font color='darkBlue'>black</font>. </p>
         *
         * <p> The subtree still has the same color at its root, so Properties 4 (Both children of every
         * <font color='red'>red</font> node are <font color='darkBlue'>black</font>) and 5 (All paths from any
         * given node to its leaf nodes contain the same number of <font color='darkBlue'>black</font> nodes) are
         * not violated. However, <i><b>N</b></i> now has one additional <font color='darkBlue'>black</font>
         * ancestor: either {@link XTreeNode.parent <b>P</b>} has become <font color='darkBlue'>black</font>, or it
         * was <font color='darkBlue'>black</font> and {@link XTreeNode.sibling <b>S</b>} was added as a
         * <font color='darkBlue'>black</font> grandparent. </p>
         *
         * <p> Thus, the paths passing through <i><b>N</b></i> pass through one additional
         * <font color='darkBlue'>black</font> node. </p>
         *
         * <p> <img src="../assets/images/tree/Red-black_tree_delete_case_6.svg" /> </p>
         *
         * <p> Meanwhile, if a path does not go through <i><b>N</b></i>, then there are two possibilities: </p>
         * <ol>
         *	<li>
         *		It goes through <i><b>N</b></i>'s new sibling <b>SL</b>, a node with arbitrary color and the root of
         *		the subtree labeled 3 (s. diagram). Then, it must go through {@link XTreeNode.sibling <b>S</b>} and
         *		{@link XTreeNode.parent <b>P</b>}, both formerly and currently, as they have only exchanged colors
         *		and places. Thus the path contains the same number of <font color='darkBlue'>black</font> nodes.
         *	</li>
         *	<li>
         *		It goes through <i><b>N</b></i>'s new uncle, {@link XTreeNode.sibling <b>S</b>}'s right child. Then,
         *		it formerly went through {@link XTreeNode.sibling <b>S</b>}, {@link XTreeNode.sibling <b>S</b>}'s
         *		parent, and {@link XTreeNode.sibling <b>S</b>}'s right child <b>SR</b> (which was
         *		<font color='red'>red</font>), but now only goes through {@link XTreeNode.sibling <b>S</b>}, which
         *		has assumed the color of its former parent, and {@link XTreeNode.sibling <b>S</b>}'s right child,
         *		which has changed from <font color='red'>red</font> to <font color='darkBlue'>black</font> (assuming
         *		{@link XTreeNode.sibling <b>S</b>}'s color: <font color='darkBlue'>black</font>). The net effect is
         *		that this path goes through the same number of <font color='darkBlue'>black</font> nodes.
         *	</li>
         * </ol>
         *
         * <p> Either way, the number of <font color='darkBlue'>black</font> nodes on these paths does not change.
         * Thus, we have restored Properties 4 (Both children of every <font color='red'>red</font> node are
         * <font color='darkBlue'>black</font>) and 5 (All paths from any given node to its leaf nodes contain the
         * same number of <font color='darkBlue'>black</font> nodes). The white node in the diagram can be either
         * <font color='red'>red</font> or <font color='darkBlue'>black</font>, but must refer to the same color
         * both before and after the transformation. </p>
         *
         * @param N A node to be erased or swapped.
         */
        private eraseCase6(node);
        /**
         * Fetch color from a node.
         *
         * @param node A node to fetch color.
         * @retur color.
         */
        private fetchColor(node);
    }
}
declare namespace std.base.tree {
    class AtomicTree<T> extends RBTree<SetIterator<T>> {
        /**
         * Default Constructor.
         */
        constructor();
        find(val: T): XTreeNode<SetIterator<T>>;
        find(it: SetIterator<T>): XTreeNode<SetIterator<T>>;
        private findByVal(val);
        isEquals(left: SetIterator<T>, right: SetIterator<T>): boolean;
        isLess(left: SetIterator<T>, right: SetIterator<T>): boolean;
    }
}
declare namespace std.base.tree {
    /**
     * <p> Static class holding enumeration codes of color of Red-black tree. </p>
     *
     * <p> Color codes imposed to nodes of RB-Tree are following those rules: </p>
     *
     * <ol>
     *	<li> A node is either <font color='red'>red</font> or <font color='darkBlue'>black</font>. </li>
     *	<li> The root is <font color='darkBlue'>black</font>. This rule is sometimes omitted. Since the root can
     *		 always be changed from <font color='red'>red</font> to <font color='darkBlue'>black</font>, but not
     *		 necessarily vice versa, this rule has little effect on analysis. </li>
     *	<li> All leaves (NIL; <code>null</code>) are <font color='darkBlue'>black</font>. </li>
     *  <li> If a node is <font color='red'>red</font>, then both its children are
     *		 <font color='darkBlue'>black</font>. </li>
     *  <li> Every path from a given node to any of its descendant NIL nodes contains the same number of
     *		 <font color='darkBlue'>black</font> nodes. Some definitions: the number of
     *		 <font color='darkBlue'>black</font> nodes from the root to a node is the node's
     *		 <font color='darkBlue'>black</font> depth; the uniform number of <font color='darkBlue'>black</font>
     *		 nodes in all paths from root to the leaves is called the <font color='darkBlue'>black</font>-height of
     *		 the red-black tree. </li>
     * </ol>
     *
     * @author Migrated by Jeongho Nam <http://samchon.org>
     */
    class Color {
        /**
         * <p> Code of color black. </p>
         *
         * <ul>
         *	<li> Those are clearly black: root, leaf nodes or children nodes of red. </li>
         *	<li> Every path from a given nodes containes the same number of black nodes exclude NIL(s). </li>
         * </ul>
         */
        static BLACK: boolean;
        /**
         * <p> Code of color red. </p>
         */
        static RED: boolean;
    }
}
declare namespace std.base.tree {
    class PairTree<Key, T> extends RBTree<MapIterator<Key, T>> {
        /**
         * Default Constructor.
         */
        constructor();
        find(key: Key): XTreeNode<MapIterator<Key, T>>;
        find(it: MapIterator<Key, T>): XTreeNode<MapIterator<Key, T>>;
        private findByKey(key);
        isEquals(left: MapIterator<Key, T>, right: MapIterator<Key, T>): boolean;
        isLess(left: MapIterator<Key, T>, right: MapIterator<Key, T>): boolean;
    }
}
declare namespace std.base.tree {
    /**
     * <p> A node in an XTree. </p>
     *
     * @param <T> Type of elements.
     *
     * @inventor Rudolf Bayer
     * @see XTree
     *
     * @author Migrated by Jeongho Nam <http://samchon.org>
     */
    class XTreeNode<T> {
        /**
         * Parent of the node.
         */
        parent: XTreeNode<T>;
        /**
         * Left child in the node.
         */
        left: XTreeNode<T>;
        /**
         * Right child in the node.
         */
        right: XTreeNode<T>;
        /**
         * Value stored in the node.
         */
        value: T;
        /**
         * Color of the node.
         */
        color: boolean;
        /**
         * Construct from value and color of node.
         *
         * @param value Value to be stored in.
         * @param color Color of the node, red or black.
         */
        constructor(value: T, color: boolean);
        /**
         * Get grand-parent.
         */
        grandParent: XTreeNode<T>;
        /**
         * Get sibling, opposite side node in same parent.
         */
        sibling: XTreeNode<T>;
        /**
         * Get uncle, parent's sibling.
         */
        uncle: XTreeNode<T>;
    }
}
declare namespace std {
    class Bind<Listener extends Function, This extends Object> {
        protected func: Listener;
        protected thisArg: This;
        constructor(func: Listener, thisArg: This);
        apply(...args: any[]): any;
        equals<U extends Listener, T extends This>(obj: Bind<U, T>): boolean;
    }
}
declare namespace std {
    /**
     * <p> Double ended queue. </p>
     *
     * <p> {@link Deque} (usually pronounced like "<i>deck</i>") is an irregular acronym of
     * <b>d</b>ouble-<b>e</b>nded <b>q</b>ueue. Double-ended queues are sequence containers with dynamic
     * sizes that can be expanded or contracted on both ends (either its front or its back). </p>
     *
     * <p> Specific libraries may implement deques in different ways, generally as some form of dynamic
     * array. But in any case, they allow for the individual elements to be accessed directly through
     * random access iterators, with storage handled automatically by expanding and contracting the
     * container as needed. </p>
     *
     * <p> Therefore, they provide a functionality similar to vectors, but with efficient insertion and
     * deletion of elements also at the beginning of the sequence, and not only at its end. But, unlike
     * {@link Vector}s, {@link Deque}s are not guaranteed to store all its elements in contiguous storage
     * locations: accessing elements in a <u>deque</u> by offsetting a pointer to another element causes
     * undefined behavior. </p>
     *
     * <p> Both {@link Vector}s and {@link Deque}s provide a very similar interface and can be used for
     * similar purposes, but internally both work in quite different ways: While {@link Vector}s use a
     * single array that needs to be occasionally reallocated for growth, the elements of a {@link Deque}
     * can be scattered in different chunks of storage, with the container keeping the necessary information
     * internally to provide direct access to any of its elements in constant time and with a uniform
     * sequential interface (through iterators). Therefore, {@link Deque}s are a little more complex
     * internally than {@link Vector}s, but this allows them to grow more efficiently under certain
     * circumstances, especially with very long sequences, where reallocations become more expensive. </p>
     *
     * <p> For operations that involve frequent insertion or removals of elements at positions other than
     * the beginning or the end, {@link Deque}s perform worse and have less consistent iterators and
     * references than {@link List}s. </p>
     *
     * <h3> Container properties </h3>
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
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/deque/deque/ </li>
     * </ul>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class Deque<T> extends base.container.Container<T> implements base.container.IArray<T>, base.container.IDeque<T> {
        private static ROW;
        private static MIN_CAPACITY;
        private matrix;
        private size_;
        private capacity_;
        private colSize;
        /**
         * <p> Default Constructor. </p>
         *
         * <p> Constructs an empty container, with no elements. </p>
         */
        constructor();
        /**
         * <p> Initializer list Constructor. </p>
         *
         * <p> Constructs a container with a copy of each of the elements in <i>array</i>, in the same order. </p>
         *
         * @param array An array containing elements to be copied and contained.
         */
        constructor(items: Array<T>);
        /**
         * <p> Fill Constructor. </p>
         *
         * <p> Constructs a container with <i>n</i> elements. Each element is a copy of <i>val</i> (if provided). </p>
         *
         * @param n Initial container size (i.e., the number of elements in the container at construction).
         * @param val Value to fill the container with. Each of the <i>n</i> elements in the container is
         *			  initialized to a copy of this value.
         */
        constructor(size: number, val: T);
        /**
         * <p> Copy Constructor. </p>
         *
         * <p> Constructs a container with a copy of each of the elements in <i>container</i>, in the same order. </p>
         *
         * @param container Another container object of the same type (with the same class template
         *					arguments <i>T</i>), whose contents are either copied or acquired.
         */
        constructor(container: base.container.IContainer<T>);
        /**
         * <p> Range Constructor. </p>
         *
         * <p> Constructs a container with as many elements as the range (<i>begin</i>, <i>end<i>), with each
         * element emplace-constructed from its corresponding element in that range, in the same order. </p>
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: base.container.Iterator<T>, end: base.container.Iterator<T>);
        /**
         * @inheritdoc
         */
        assign<U extends T>(begin: base.container.Iterator<U>, end: base.container.Iterator<U>): void;
        /**
         * @inheritdoc
         */
        assign(n: number, val: T): void;
        /**
         * @inheritdoc
         */
        reserve(capacity: number): void;
        /**
         * @inheritdoc
         */
        clear(): void;
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
        size(): number;
        /**
         * @inheritdoc
         */
        capacity(): number;
        /**
         * @inheritdoc
         */
        at(index: number): T;
        /**
         * @inheritdoc
         */
        set(index: number, val: T): void;
        /**
         * @inheritdoc
         */
        front(): T;
        /**
         * @inheritdoc
         */
        back(): T;
        private fetchIndex(index);
        /**
         * @inheritdoc
         */
        push(...items: T[]): number;
        /**
         * @inheritdoc
         */
        pushFront(val: T): void;
        /**
         * @inheritdoc
         */
        pushBack(val: T): void;
        /**
         * @inheritdoc
         */
        popFront(): void;
        /**
         * @inheritdoc
         */
        popBack(): void;
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
        insert<U extends T>(position: DequeIterator<T>, begin: base.container.Iterator<U>, end: base.container.Iterator<U>): DequeIterator<T>;
        erase(position: DequeIterator<T>): DequeIterator<T>;
        erase(begin: DequeIterator<T>, end: DequeIterator<T>): DequeIterator<T>;
        swap(obj: Deque<T>): void;
    }
}
declare namespace std {
    /**
     * An iterator of {@link Deque}.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class DequeIterator<T> extends base.container.Iterator<T> implements base.container.ILinearIterator<T> {
        private deque;
        /**
         * Sequence number in the source Deque.
         */
        private index;
        /**
         * <p> Construct from the source {@link Deque container}. </p>
         *
         * <h4> Note </h4>
         * <p> Do not create the iterator directly, by yourself. </p>
         * <p> Use {@link Deque.begin begin()}, {@link Deque.end end()} in {@link Deque container} instead. </p>
         *
         * @param vector The source {@link Deque container} to reference.
         * @param index Sequence number of the element in the source {@link Deque}.
         */
        constructor(source: Deque<T>, index: number);
        /**
         * @inheritdoc
         */
        value: T;
        /**
         * @inheritdoc
         */
        equals<U extends T>(obj: DequeIterator<U>): boolean;
        /**
         * Get index.
         */
        getIndex(): number;
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
        swap(obj: DequeIterator<T>): void;
    }
}
/**
* STL (Standard Template Library) Containers for TypeScript.
*
* @author Jeongho Nam <http://samchon.org>
*/
declare namespace std {
}
declare namespace std {
    /**
     * <p> Error category. </p>
     *
     * <p> This type serves as a base class for specific category types. </p>
     *
     * <p> Category types are used to identify the source of an error. They also define the relation between
     * {@link ErrorCode} and {@link ErrorCondition}objects of its category, as well as the message
     * set for {@link ErrorCode} objects.
     *
     * <p> Objects of these types have no distinct values and are not-copyable and not-assignable, and thus can
     * only be passed by reference. As such, only one object of each of these types shall exist, each uniquely
     * identifying its own category: all error codes and conditions of a same category shall return a reference
     * to same object. </p>
     *
     * <ul>
     *	<li> Reference: http://www.cplusplus.com/reference/system_error/error_category/ </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ErrorCategory {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * <p> Return category name. </p>
         *
         * <p> In derived classes, the function returns a string naming the category. </p>
         *
         * <p> In {@link ErrorCategory}, it is a pure virtual member function. </p>
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
         * <p> Error message. </p>
         *
         * <p> In derived classes, the function returns a string object with a message describing
         * the error condition denoted by <i>val</i>. </p>
         *
         * <p> In {@link ErrorCategory}, it is a pure virtual member function. </p>
         *
         * <p> This function is called both by {@link ErrorCode.message ErrorCode.message()} and
         * {@link ErrorCondition.message ErrorCondition.message()}
         * to obtain the corresponding message in the {@link category}. Therefore, numerical values used by
         * custom <i>error codes</i> and {@link ErrorCondition error conditions} should only match for a category
         * if they describe the same error. </p>
         *
         * @param val A numerical value identifying an error condition.
         *			  If the {@link ErrorCategory} object is the {@link GenericCategory}, this argument
         *			  is equivalent to an {@link errno} value.
         *
         * @return A string object with the message.
         */
        abstract message(val: number): string;
        /**
         * <p> Default error condition. </p>
         *
         * <p> Returns the default {@link ErrorCondition}object of this category that is associated with
         * the {@link ErrorCode} identified by a value of <i>val</i>. </p>
         *
         * <p> Its definition in the base class {@link ErrorCategory} returns the same as constructing an
         * {@link ErrorCondition}object with:
         *
         * <p> <code>new ErrorCondition(val, *this);</code> </p>
         *
         * <p> As a virtual member function, this behavior can be overriden in derived classes. </p>
         *
         * <p> This function is called by the default definition of member {@link equivalent equivalent()}, which is
         * used to compare {@link ErrorCondition error conditions} with error codes. </p>
         *
         * @param val A numerical value identifying an error condition.
         *
         * @return The default {@link ErrorCondition}object associated with condition value <i>val</i>
         *		   for this category.
         */
        defaultErrorCondition(val: number): ErrorCondition;
        equivalent(valCode: number, cond: ErrorCondition): boolean;
        equivalent(code: ErrorCode, valCond: number): boolean;
    }
}
declare namespace std {
    /**
     * <p> Error code. </p>
     *
     * <p> Objects of this type hold an error code {@link value} associated with a {@link category}. </p>
     *
     * <p> The operating system and other low-level applications and libraries generate numerical error codes to
     * represent possible results. These numerical values may carry essential information for a specific platform,
     * but be non-portable from one platform to another. </p>
     *
     * <p> Objects of this class associate such numerical codes to {@link ErrorCategory error categories}, so that they
     * can be interpreted when needed as more abstract (and portable) {@link ErrorCondition error conditions}. </p>
     *
     * <ul>
     *	<li> Reference: http://www.cplusplus.com/reference/system_error/error_code/ </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class ErrorCode extends base.system.ErrorInstance {
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
     * <p> Error condition. </p>
     *
     * <p> Objects of this type hold a condition {@link value} associated with a {@link category}. </p>
     *
     * <p> Objects of this type describe errors in a generic way so that they may be portable across different
     * systems. This is in contrast with {@link ErrorCode} objects, that may contain system-specific
     * information. </p>
     *
     * <p> Because {@link ErrorCondition}objects can be compared with error_code objects directly by using
     * <code>relational operators</code>, {@link ErrorCondition}objects are generally used to check whether
     * a particular {@link ErrorCode} obtained from the system matches a specific error condition no matter
     * the system. </p>
     *
     * <p> The {@link ErrorCategory categories} associated with the {@link ErrorCondition} and the
     * {@link ErrorCode} define the equivalences between them. </p>
     *
     * <ul>
     *	<li> Reference: http://www.cplusplus.com/reference/system_error/error_condition/ </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class ErrorCondition extends base.system.ErrorInstance {
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
declare namespace std.test {
    function hash_map(): void;
}
declare namespace std.test {
    function test_list(): void;
}
declare namespace std.test {
    function sorting(): void;
}
declare namespace std.test {
    function tree_set(): void;
}
declare namespace std {
    /**
     * <p> Standard exception class. </p>
     *
     * <p> Base class for standard exceptions. </p>
     *
     * <p> All objects thrown by components of the standard library are derived from this class.
     * Therefore, all standard exceptions can be caught by catching this type by reference. </p>
     *
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/exception/exception/
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class Exception {
        /**
         * A message representing specification about the Exception.
         */
        protected message: string;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(what: string);
        /**
         * <p> Get string identifying exception. </p>
         * <p> Returns a string that may be used to identify the exception. </p>
         *
         * <p> The particular representation pointed by the returned value is implementation-defined.
         * As a virtual function, derived classes may redefine this function so that specify value are
         * returned. </p>
         */
        what(): string;
    }
    /**
     * <p> Logic error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report errors in the internal
     * logical of the program, such as violation of logical preconditions or class invariants. </p>
     *
     * <p> These errors are presumably detectable before the program executes. </p>
     *
     * <p> It is used as a base class for several logical error exceptions. </p>
     *
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/stdexcept/logic_error/
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class LogicError extends Exception {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(what: string);
    }
    /**
     * <p> Domain error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report domain errors. </p>
     *
     * <p> Generally, the domain of a mathematical function is the subset of values that it is defined for.
     * For example, the square root function is only defined for non-negative numbers. Thus, a negative number
     * for such a function would qualify as a domain error. </p>
     *
     * <p> No component of the standard library throws exceptions of this type. It is designed as a standard
     * exception to be thrown by programs. </p>
     *
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/stdexcept/domain_error/
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class DomainError extends LogicError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(what: string);
    }
    /**
     * <p> Invalid argument exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report an invalid argument. </p>
     *
     * <p> It is a standard exception that can be thrown by programs. Some components of the standard library
     * also throw exceptions of this type to signal invalid arguments. </p>
     *
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/stdexcept/invalid_argument/
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class InvalidArgument extends LogicError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(what: string);
    }
    /**
     * <p> Length error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report a length error. </p>
     *
     * <p> It is a standard exception that can be thrown by programs. Some components of the standard library,
     * such as vector and string also throw exceptions of this type to signal errors resizing. </p>
     *
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/stdexcept/length_error/
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class LengthError extends LogicError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(what: string);
    }
    /**
     * <p> Out-of-range exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report an out-of-range error. </p>
     *
     * <p> It is a standard exception that can be thrown by programs. Some components of the standard library,
     * such as vector, deque, string and bitset also throw exceptions of this type to signal arguments
     * out of range. </p>
     *
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/stdexcept/out_of_range/
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class OutOfRange extends LogicError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(what: string);
    }
    /**
     * <p> Runtime error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report errors that can only be
     * detected during runtime. </p>
     *
     * <p> It is used as a base class for several runtime error exceptions. </p>
     *
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/stdexcept/runtime_error/
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class RuntimeError extends Exception {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(what: string);
    }
    /**
     * <p> Overflow error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to arithmetic overflow errors. </p>
     *
     * <p> It is a standard exception that can be thrown by programs. Some components of the standard library
     * also throw exceptions of this type to signal range errors. </p>
     *
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/stdexcept/outflow_error/
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class OverflowError extends RuntimeError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(what: string);
    }
    /**
     * <p> Underflow error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to arithmetic underflow errors. </p>
     *
     * <p> No component of the standard library throws exceptions of this type. It is designed as a standard
     * exception to be thrown by programs. </p>
     *
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/stdexcept/underflow_error/
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class UnderflowError extends RuntimeError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(what: string);
    }
    /**
     * <p> Range error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report range errors in internal
     * computations. </p>
     *
     * <p> It is a standard exception that can be thrown by programs. Some components of the standard library
     * also throw exceptions of this type to signal range errors. </p>
     *
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/stdexcept/range_error/
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class RangeError extends RuntimeError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(what: string);
    }
}
declare namespace std {
    /**
     * <p> Hashed, unordered map. </p>
     *
     * <p> {@link HashMap}s are associative containers that store elements formed by the
     * combination of a <i>key value</i> and a <i>mapped value</i>, and which allows for fast
     * retrieval of individual elements based on their <i>keys</i>. </p>
     *
     * <p> In an {@link HashMap}, the <i>key value</i> is generally used to uniquely identify
     * the element, while the <i>mapped value</i> is an object with the content associated to this
     * <i>key</i>. Types of <i>key</i> and <i>mapped value</i> may differ. </p>
     *
     * <p> Internally, the elements in the {@link HashMap} are not sorted in any particular order
     * with respect to either their <i>key</i> or <i>mapped values</i>, but organized into <i>buckets</i>
     * depending on their hash values to allow for fast access to individual elements directly by
     * their <i>key values</i> (with a constant average time complexity on average). </p>
     *
     * <p> {@link HashMap} containers are faster than {@link TreeMap} containers to access
     * individual elements by their <i>key</i>, although they are generally less efficient for range
     * iteration through a subset of their elements. </p>
     *
     * <h3> Container properties </h3>
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
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/unordered_map/unordered_map/ </li>
     * </ul>
     *
     * @param <K> Type of the key values.
     *			  Each element in an {@link HashMap} is uniquely identified by its key value.
     * @param <T> Type of the mapped value.
     *			  Each element in an {@link HashMap} is used to store some data as its mapped value.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMap<K, T> extends base.container.UniqueMap<K, T> {
        private hashBuckets;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from elements.
         */
        constructor(array: Array<Pair<K, T>>);
        /**
         * Copy Constructor.
         */
        constructor(container: base.container.MapContainer<K, T>);
        /**
         * Construct from range iterators.
         */
        constructor(begin: MapIterator<K, T>, end: MapIterator<K, T>);
        /**
         * @private
         */
        protected constructByArray(items: Array<Pair<K, T>>): void;
        /**
         * @inheritdoc
         */
        assign<L extends K, U extends T>(begin: MapIterator<L, U>, end: MapIterator<L, U>): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(key: K): MapIterator<K, T>;
        /**
         * @private
         */
        protected insertByPair<L extends K, U extends T>(pair: Pair<L, U>): any;
        /**
         * @private
         */
        protected insertByRange<L extends K, U extends T>(begin: MapIterator<L, U>, end: MapIterator<L, U>): void;
        /**
         * @inheritdoc
         */
        protected handleInsert(it: MapIterator<K, T>): void;
        /**
         * @inheritdoc
         */
        protected handleErase(it: MapIterator<K, T>): void;
    }
}
declare namespace std {
    /**
     * <p> Hashed, unordered Multimap. </p>
     *
     * <p> {@link HashMap}s are associative containers that store elements formed by the combination of
     * a <i>key value</i> and a <i>mapped value</i>, much like {@link HashMap} containers, but allowing
     * different elements to have equivalent <i>keys</i>. </p>
     *
     * <p> In an {@link HashMap}, the <i>key value</i> is generally used to uniquely identify the
     * element, while the <i>mapped value</i> is an object with the content associated to this <i>key</i>.
     * Types of <i>key</i> and <i>mapped value</i> may differ. </p>
     *
     * <p> Internally, the elements in the {@link HashMap} are not sorted in any particular order with
     * respect to either their <i>key</i> or <i>mapped values</i>, but organized into <i>buckets</i> depending on
     * their hash values to allow for fast access to individual elements directly by their <i>key values</i>
     * (with a constant average time complexity on average). </p>
     *
     * <p> Elements with equivalent <i>keys</i> are grouped together in the same bucket and in such a way that
     * an iterator can iterate through all of them. Iterators in the container are doubly linked iterators. </p>
     *
     * <h3> Container properties </h3>
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
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/unordered_map/unordered_multimap/ </li>
     * </ul>
     *
     * @param <K> Type of the key values.
     *			  Each element in an {@link HashMap} is identified by a key value.
     * @param <T> Type of the mapped value.
     *			  Each element in an {@link HashMap} is used to store some data as its mapped value.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMultiMap<K, T> extends base.container.MultiMap<K, T> {
        private hashBuckets;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from elements.
         */
        constructor(array: Array<Pair<K, T>>);
        /**
         * Copy Constructor.
         */
        constructor(container: base.container.MapContainer<K, T>);
        /**
         * Construct from range iterators.
         */
        constructor(begin: MapIterator<K, T>, end: MapIterator<K, T>);
        /**
         * @private
         */
        protected constructByArray(items: Array<Pair<K, T>>): void;
        /**
         * @inheritdoc
         */
        assign<L extends K, U extends T>(begin: MapIterator<L, U>, end: MapIterator<L, U>): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(key: K): MapIterator<K, T>;
        /**
         * @private
         */
        protected insertByPair<L extends K, U extends T>(pair: Pair<L, U>): any;
        /**
         * @private
         */
        protected insertByRange<L extends K, U extends T>(begin: MapIterator<L, U>, end: MapIterator<L, U>): void;
        /**
         * @inheritdoc
         */
        protected handleInsert(it: MapIterator<K, T>): void;
        /**
         * @inheritdoc
         */
        protected handleErase(it: MapIterator<K, T>): void;
    }
}
declare namespace std {
    /**
     * <p> Hashed, unordered Multiset. </p>
     *
     * <p> {@link HashMultiSet HashMultiSets} are containers that store elements in no particular order, allowing fast
     * retrieval of individual elements based on their value, much like {@link UnorderedSet} containers,
     * but allowing different elements to have equivalent values. </p>
     *
     * <p> In an {@link HashMultiSet}, the value of an element is at the same time its <i>key</i>, used to
     * identify it. <i>Keys</i> are immutable, therefore, the elements in an {@link HashMultiSet} cannot be
     * modified once in the container - they can be inserted and removed, though. </p>
     *
     * <p> Internally, the elements in the {@link HashMultiSet} are not sorted in any particular, but
     * organized into <i>buckets</i> depending on their hash values to allow for fast access to individual
     * elements directly by their <i>values</i> (with a constant average time complexity on average). </p>
     *
     * <p> Elements with equivalent values are grouped together in the same bucket and in such a way that an
     * iterator can iterate through all of them. Iterators in the container are doubly linked iterators. </p>
     *
     * <h3> Container properties </h3>
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
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/unordered_set/unordered_multiset/ </li>
     * </ul>
     *
     * @param <T> Type of the elements.
     *		   Each element in an {@link UnorderedMultiSet} is also identified by this value..
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMultiSet<T> extends base.container.MultiSet<T> {
        private hashBuckets;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from elements.
         */
        constructor(items: Array<T>);
        /**
         * Copy Constructor.
         */
        constructor(container: base.container.IContainer<T>);
        /**
         * Construct from range iterators.
         */
        constructor(begin: base.container.Iterator<T>, end: base.container.Iterator<T>);
        /**
         * @private
         */
        protected constructByArray(items: Array<T>): void;
        /**
         * @inheritdoc
         */
        assign<U extends T>(begin: base.container.Iterator<U>, end: base.container.Iterator<U>): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(val: T): SetIterator<T>;
        /**
         * @private
         */
        protected insertByVal(val: T): any;
        /**
         * @private
         */
        protected insertByRange(begin: base.container.Iterator<T>, end: base.container.Iterator<T>): void;
        /**
         * @inheritdoc
         */
        protected handleInsert(it: SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        protected handleErase(it: SetIterator<T>): void;
    }
}
declare namespace std {
    /**
     * <p> Hashed, unordered set. </p>
     *
     * <p> {@link HashSet}s are containers that store unique elements in no particular order, and which
     * allow for fast retrieval of individual elements based on their value. </p>
     *
     * <p> In an {@link HashSet}, the value of an element is at the same time its <i>key</i>, that
     * identifies it uniquely. Keys are immutable, therefore, the elements in an {@link HashSet} cannot be
     * modified once in the container - they can be inserted and removed, though. </p>
     *
     * <p> Internally, the elements in the {@link HashSet} are not sorted in any particular order, but
     * organized into buckets depending on their hash values to allow for fast access to individual elements
     * directly by their <i>values</i> (with a constant average time complexity on average). </p>
     *
     * <p> {@link HashSet} containers are faster than {@link TreeSet} containers to access individual
     * elements by their <i>key</i>, although they are generally less efficient for range iteration through a
     * subset of their elements. </p>
     *
     * <h3> Container properties </h3>
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
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/unordered_set/unordered_set/ </li>
     * </ul>
     *
     * @param <T> Type of the elements.
     *			  Each element in an {@link HashSet} is also uniquely identified by this value.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashSet<T> extends base.container.UniqueSet<T> {
        private hashBuckets;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from elements.
         */
        constructor(items: Array<T>);
        /**
         * Copy Constructor.
         */
        constructor(container: base.container.IContainer<T>);
        /**
         * Construct from range iterators.
         */
        constructor(begin: base.container.Iterator<T>, end: base.container.Iterator<T>);
        protected constructByArray(items: Array<T>): void;
        /**
         * @inheritdoc
         */
        assign<U extends T>(begin: base.container.Iterator<U>, end: base.container.Iterator<U>): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(val: T): SetIterator<T>;
        protected insertByVal(val: T): any;
        protected insertByRange(begin: base.container.Iterator<T>, end: base.container.Iterator<T>): void;
        /**
         * @inheritdoc
         */
        protected handleInsert(item: SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        protected handleErase(item: SetIterator<T>): void;
    }
}
declare namespace std {
    interface IComparable<T> {
        equals(obj: T): boolean;
        less(obj: T): boolean;
        hashCode(): number;
    }
    /**
     * <p> For equality comparison. </p>
     *
     * <p> Binary fucntion returns whether the arguments are equal. </p>
     *
     * @param <T> Type of arguments to compare.
     *
     * @param first First element to compare.
     * @param second Second element to compare.
     *
     * @return Whether the arguments are equal.
     */
    function equals<T>(left: T, right: T): boolean;
    /**
     * <p> Function for less-than inequality comparison. </p>
     *
     * <p> Binary function returns whether the its first argument compares less than the second. </p>
     *
     * <p> Generically, function objects are instances of a class with member function {@link IComparable.less less}
     * defined. If an object doesn't have the method, then its own uid will be used to compare insteadly.
     * This member function allows the object to be used with the same syntax as a function call. </p>
     *
     * <p> Objects of this class can be used on standard algorithms such as {@link sort sort()}</code>,
     * {@link merge merge()} or {@link TreeMap.lowerBound lowerBound()}. </p>
     *
     * @param <T> Type of arguments to compare by the function call. The type shall supporrt the operation
     *			  <i>operator<()</i> or method {@link IComparable.less less}.
     *
     * @param first First element, the standard of comparison.
     * @param second Second element compare with the first.
     *
     * @return Whether the first parameter is less than the second.
     */
    function less<T>(left: T, right: T): boolean;
    /**
     * <p> Function for greater-than inequality comparison. </p>
     *
     * <p> Binary function returns whether the its first argument compares greater than the second. </p>
     *
     * <p> Generically, function objects are instances of a class with member function {@link less} and
     * {@link equals equals()} defined. If an object doesn't have those methods, then its own uid will be used
     * to compare insteadly. This member function allows the object to be used with the same syntax as a function
     * call. </p>
     *
     * <p> Objects of this class can be used on standard algorithms such as {@link sort sort()},
     * {@link merge merge()} or {@link TreeMap.lowerBound lowerBound()}. </p>
     *
     * @param <T> Type of arguments to compare by the function call. The type shall supporrt the operation
     *			  <i>operator>()</i> or method {@link IComparable.greater greater}.
     *
     * @param left
     * @param right
     */
    function greater<T>(left: T, right: T): boolean;
    function hashCode(obj: any): number;
}
declare namespace std {
    /**
     * <p> Doubly linked list. </p>
     *
     * <p> {@link List}s are sequence containers that allow constant time insert and erase operations
     * anywhere within the sequence, and iteration in both directions. </p>
     *
     * <p> List containers are implemented as doubly-linked lists; Doubly linked lists can store each of
     * the elements they contain in different and unrelated storage locations. The ordering is kept
     * internally by the association to each element of a link to the element preceding it and a link to
     * the element following it. </p>
     *
     * <p> They are very similar to forward_list: The main difference being that forward_list objects are
     * single-linked lists, and thus they can only be iterated forwards, in exchange for being somewhat
     * smaller and more efficient. </p>
     *
     * <p> Compared to other base standard sequence containers (array, vector and deque), lists perform
     * generally better in inserting, extracting and moving elements in any position within the container
     * for which an iterator has already been obtained, and therefore also in algorithms that make
     * intensive use of these, like sorting algorithms. </p>
     *
     * <p> The main drawback of lists and forward_lists compared to these other sequence containers is that
     * they lack direct access to the elements by their position; For example, to access the sixth element
     * in a list, one has to iterate from a known position (like the beginning or the end) to that position,
     * which takes linear time in the distance between these. They also consume some extra memory to keep
     * the linking information associated to each element (which may be an important factor for large lists
     * of small-sized elements). </p>
     *
     * <h3> Container properties </h3>
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
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/list/list/
     * </ul>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class List<T> extends base.container.Container<T> implements base.container.IDeque<T> {
        static iterator: typeof ListIterator;
        /**
         * An iterator of beginning.
         */
        protected begin_: ListIterator<T>;
        /**
         * An iterator of end.
         */
        protected end_: ListIterator<T>;
        /**
         * Number of elements in the {@link List}.
         */
        protected size_: number;
        /**
         * <p> Default Constructor. </p>
         *
         * <p> Constructs an empty container, with no elements. </p>
         */
        constructor();
        /**
         * <p> Initializer list Constructor. </p>
         *
         * <p> Constructs a container with a copy of each of the elements in <i>array</i>, in the same order. </p>
         *
         * @param array An array containing elements to be copied and contained.
         */
        constructor(items: Array<T>);
        /**
         * <p> Fill Constructor. </p>
         *
         * <p> Constructs a container with <i>n</i> elements. Each element is a copy of <i>val</i> (if provided). </p>
         *
         * @param n Initial container size (i.e., the number of elements in the container at construction).
         * @param val Value to fill the container with. Each of the <i>n</i> elements in the container is
         *			  initialized to a copy of this value.
         */
        constructor(size: number, val: T);
        /**
         * <p> Copy Constructor. </p>
         *
         * <p> Constructs a container with a copy of each of the elements in <i>container</i>, in the same order. </p>
         *
         * @param container Another container object of the same type (with the same class template
         *					arguments <i>T</i>), whose contents are either copied or acquired.
         */
        constructor(container: base.container.IContainer<T>);
        /**
         * <p> Range Constructor. </p>
         *
         * <p> Constructs a container with as many elements as the range (<i>begin</i>, <i>end<i>), with each
         * element emplace-constructed from its corresponding element in that range, in the same order. </p>
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: base.container.Iterator<T>, end: base.container.Iterator<T>);
        /**
         * @inheritdoc
         */
        assign(n: number, val: T): void;
        /**
         * @inheritdoc
         */
        assign<U extends T>(begin: base.container.Iterator<U>, end: base.container.Iterator<U>): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        begin(): ListIterator<T>;
        /**
         * @inheritdoc
         */
        end(): ListIterator<T>;
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
        push<U extends T>(...items: U[]): number;
        /**
         * @inheritdoc
         */
        pushFront(val: T): void;
        /**
         * @inheritdoc
         */
        pushBack(val: T): void;
        /**
         * @inheritdoc
         */
        popFront(): void;
        /**
         * @inheritdoc
         */
        popBack(): void;
        /**
         * <p> Insert an element. </p>
         *
         * <p> The container is extended by inserting a new element before the element at the specified
         * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
         * inserted. </p>
         *
         * <p> Unlike other standard sequence containers, {@link List} is specifically designed to be
         * efficient inserting and removing elements in any position, even in the middle of the sequence. </p>
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
         * <p> Insert elements by repeated filling. </p>
         *
         * @param position Position in the container where the new elements are inserted.
         *				   {@link iterator}> is a member type, defined as a
         *				   {@link ListIterator bidirectional iterator} type that points to elements.
         * @param size Number of elements to insert.
         * @param val Value to be inserted as an element.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert(position: ListIterator<T>, size: number, val: T): ListIterator<T>;
        /**
         *
         * @param position Position in the container where the new elements are inserted.
         *				   {@link iterator}> is a member type, defined as a
         *				   {@link ListIterator bidirectional iterator} type that points to elements.
         * @param begin An iterator specifying range of the begining element.
         * @param end An iterator specifying range of the ending element.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert(position: ListIterator<T>, begin: base.container.Iterator<T>, end: base.container.Iterator<T>): ListIterator<T>;
        /**
         * @private
         */
        private insertByVal(position, val);
        /**
         * @private
         */
        private insertByRepeatingVal(position, size, val);
        /**
         * @private
         */
        private insertByRange(position, begin, end);
        /**
         * <p> Erase an element. </p>
         *
         * <p> Removes from the {@link List} either a single element; <i>position</i>. </p>
         *
         * <p> This effectively reduces the container size by the number of element removed. </p>
         *
         * <p> Unlike other standard sequence containers, {@link List} objects are specifically designed to
         * be efficient inserting and removing elements in any position, even in the middle of the sequence. </p>
         *
         * @param position Iterator pointing to a single element to be removed from the {@link List}.
         *
         * @return An iterator pointing to the element that followed the last element erased by the function
         *		   call. This is the {@link end end()} if the operation erased the last element in the
         *		   sequence.
         */
        erase(position: ListIterator<T>): ListIterator<T>;
        /**
         * <p> Erase elements. </p>
         *
         * <p> Removes from the {@link List} container a range of elements. </p>
         *
         * <p> This effectively reduces the container {@link size} by the number of elements removed. </p>
         *
         * <p> Unlike other standard sequence containers, {@link List} objects are specifically designed to
         * be efficient inserting and removing elements in any position, even in the middle of the sequence. </p>
         *
         * @param begin An iterator specifying a range of beginning to erase.
         * @param end An iterator specifying a range of end to erase.
         *
         * @return An iterator pointing to the element that followed the last element erased by the function
         *		   call. This is the {@link end end()} if the operation erased the last element in the
         *		   sequence.
         */
        erase(begin: ListIterator<T>, end: ListIterator<T>): ListIterator<T>;
        /**
         * @private
         */
        private eraseByIterator(it);
        /**
         * @private
         */
        private eraseByRange(begin, end);
        swap(obj: List<T>): void;
    }
}
declare namespace std {
    class ListIterator<T> extends base.container.Iterator<T> implements base.container.ILinearIterator<T> {
        protected prev_: ListIterator<T>;
        protected next_: ListIterator<T>;
        protected value_: T;
        /**
         * <p> Construct from the source {@link List container}. </p>
         *
         * <h4> Note </h4>
         * <p> Do not create the iterator directly, by yourself. </p>
         * <p> Use {@link List.begin begin()}, {@link List.end end()} in {@link List container} instead. </p>
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
        setPrev(prev: ListIterator<T>): void;
        /**
         * @inheritdoc
         */
        setNext(next: ListIterator<T>): void;
        /**
         * @inheritdoc
         */
        equals(obj: ListIterator<T>): boolean;
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
        advance(size: number): ListIterator<T>;
        /**
         * @inheritdoc
         */
        /**
         * @inheritdoc
         */
        value: T;
        swap(obj: ListIterator<T>): void;
    }
}
declare namespace std {
    class MapIterator<K, T> implements IComparable<MapIterator<K, T>> {
        protected source: base.container.MapContainer<K, T>;
        protected listIterator: ListIterator<Pair<K, T>>;
        /**
         * Construct from the source PairContainer.
         *
         * @param source The source PairContainer.
         */
        constructor(source: base.container.MapContainer<K, T>, listIterator: ListIterator<Pair<K, T>>);
        /**
         * Get listIterator.
         */
        getListIterator(): ListIterator<Pair<K, T>>;
        /**
         * Get iterator to previous element.
         */
        prev(): MapIterator<K, T>;
        /**
         * Get iterator to next element.
         */
        next(): MapIterator<K, T>;
        /**
         * Advances the Iterator by n element positions.
         *
         * @param n Number of element positions to advance.
         * @return An advanced Iterator.
         */
        advance(n: number): MapIterator<K, T>;
        /**
         * Get source.
         */
        getSource(): base.container.MapContainer<K, T>;
        /**
         * Get first, key element.
         */
        first: K;
        /**
         * Get second, value element.
         */
        second: T;
        /**
         * @inheritdoc
         */
        equals<L extends K, U extends T>(obj: MapIterator<L, U>): boolean;
        /**
         * @inheritdoc
         */
        less<L extends K, U extends T>(obj: MapIterator<L, U>): boolean;
        /**
         * @inheritdoc
         */
        hashCode(): number;
    }
}
/**
* <p> A namespace of STL library. </p>
*
* <ul>
*	<li> Formal homepage: http://samchon.github.io/stl/ </li>
*	<li> Github: https://github.com/samchon/stl/ </li>
*	<li> Reference: http://www.cplusplus.com/reference/ </li>
* </ul>
*
* @author Jeongho Nam <http://samchon.org>
*/
declare namespace std {
}
declare namespace std.base {
}
/**
 * <p> A namespace containing abstract container objects. </p>
 *
 * <ul>
 * 	<li> Reference: http://www.cplusplus.com/reference/stl/ </li>
 * </ul>
 *
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace std.base.container {
}
declare namespace std.base.hash {
}
declare namespace std.base.tree {
}
declare namespace std.system {
}
declare namespace std {
    /**
     * <p> Pair of values. </p>
     *
     * <p> This class couples together a pair of values, which may be of different types (<i>T1</i> and
     * <i>T2</i>). The individual values can be accessed through its public members {@link first} and
     * {@link second}. </p>
     *
     * <ul>
     *	<li> Reference: http://www.cplusplus.com/reference/utility/pair/ </li>
     * </ul>
     *
     * @param <K> Type of member {@link first}.
     * @param <T> Type of member {@link second}.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class Pair<T1, T2> {
        /**
         * <p> A first value in the Pair. </p>
         */
        first: T1;
        /**
         * <p> A second value in the Pair. </p>
         */
        second: T2;
        /**
         * <p> Construct from pair values. </p>
         *
         * @param first The first value of the Pair
         * @param second The second value of the Pair
         */
        constructor(first: T1, second: T2);
        /**
         * <p> Whether a Pair is equal with the Pair. <p>
         * <p> Compare each first and second value of two Pair(s) and returns whether they are equal or not. </p>
         *
         * <p> If stored key and value in a Pair are not number or string but an object like a class or struct,
         * the comparison will be executed by a member method (SomeObject)::equals(). If the object does not have
         * the member method equals(), only address of pointer will be compared. </p>
         *
         * @param obj A Map to compare
         * @return Indicates whether equal or not.
         */
        equals<U1 extends T1, U2 extends T2>(pair: Pair<U1, U2>): boolean;
        less<U1 extends T1, U2 extends T2>(pair: Pair<U1, U2>): boolean;
    }
}
declare namespace std {
    /**
     * <p> FIFO queue. </p>
     *
     * <p> {@link Queue}s are a type of container adaptor, specifically designed to operate in a FIFO
     * context (first-in first-out), where elements are inserted into one end of the container and extracted
     * from the other. </p>
     *
     * <p> {@link Queue}s are implemented as containers adaptors, which are classes that use an encapsulated
     * object of a specific container class as its underlying container, providing a specific set of member
     * functions to access its elements. Elements are pushed into the {@link IDeque.back back()} of the specific
     * container and popped from its {@link IDeque.front front()}. </p>
     *
     * <p> {@link data The underlying container} may be one of the standard container class template or some other
     * specifically designed container class. This underlying container shall support at least the following
     * operations: </p>
     *
     * <ul>
     *	<li> empty </li>
     *	<li> size </li>
     *	<li> front </li>
     *	<li> back </li>
     *	<li> pushBack </li>
     *	<li> popFront </li>
     * </ul>
     *
     * <p> The standard container classes {@link Deque} and {@link List} fulfill these requirements.
     * By default, if no container class is specified for a particular {@link Queue} class instantiation,
     * the standard container {@link List} is used. </p>
     *
     * <ul>
     *	<li> Reference: http://www.cplusplus.com/reference/queue/queue/ </li>
     * </ul>
     *
     * @param <T> Type of elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class Queue<T> {
        /**
         * The <i>underlying object</i> for implementing the <i>FIFO</i> container.
         */
        private data;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Copy Constructor.
         */
        constructor(container: Queue<T>);
        /**
         * <p> Return size. </p>
         * <p> Returns the number of elements in the {@link Queue}. </p>
         *
         * <p> This member function effectively calls member {@link IDeque.size size()} of the
         * {@link data underlying container} object. </p>
         *
         * @return The number of elements in the {@link data underlying container}.
         */
        size(): number;
        /**
         * <p> Test whether container is empty. </p>
         * <p> returns whether the {@link Queue} is empty: i.e. whether its <i>size</i> is zero. </p>
         *
         * <p> This member function efeectively calls member {@link IDeque.empty empty()} of the
         * {@link data underlying container} object. </p>
         *
         * @return <code>true</code> if the {@link data underlying container}'s size is 0,
         *		   <code>false</code> otherwise. </p>
         */
        empty(): boolean;
        /**
         * <p> Access next element. </p>
         * <p> Returns a value of the next element in the {@link Queue}. </p>
         *
         * <p> The next element is the "oldest" element in the {@link Queue} and the same element that is
         * popped out from the queue when {@link pop Queue.pop()} is called. </p>
         *
         * <p> This member function effectively calls member {@link IDeque.front front()} of the
         * {@link data underlying container} object. </p>
         *
         * @return A value of the next element in the {@link Queue}.
         */
        front(): T;
        /**
         * <p> Access last element. </p>
         *
         * <p> Returns a vaue of the last element in the queue. This is the "newest" element in the queue
         * (i.e. the last element pushed into the queue). </p>
         *
         * <p> This member function effectively calls the member function {@link IDeque.back back()} of the
         * {@link data underlying container} object. </p>
         *
         * @return A value of the last element in the {@link Queue}.
         */
        back(): T;
        /**
         * <p> Insert element. </p>
         *
         * <p> Inserts a new element at the end of the {@link Queue}, after its current last element.
         * The content of this new element is initialized to val. </p>
         *
         * <p> This member function effectively calls the member function {@link IDeque.pushBack pushBack()} of
         * the {@link data underlying container} object. </p>
         *
         * @param val Value to which the inserted element is initialized.
         */
        push(val: T): void;
        /**
         * <p> Remove next element. </p>
         *
         * <p> Removes the next element in the {@link Queue}, effectively reducing its size by one. </p>
         *
         * <p> The element removed is the "oldest" element in the {@link Queue} whose value can be retrieved
         * by calling member {@link front Queue.front()} </p>.
         *
         * <p> This member function effectively calls the member function {@link IDeque.popFront popFront()} of
         * the {@link data underlying container} object. </p>
         */
        pop(): void;
    }
}
declare namespace std {
    /**
     * <p> An iterator of a Set. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class SetIterator<T> extends base.container.Iterator<T> implements IComparable<SetIterator<T>> {
        private listIterator;
        /**
         * <p> Construct from source and index number. </p>
         *
         * <h4> Note </h4>
         * <p> Do not create iterator directly. </p>
         * <p> Use begin(), find() or end() in Map instead. </p>
         *
         * @param map The source Set to reference.
         * @param index Sequence number of the element in the source Set.
         */
        constructor(source: base.container.SetContainer<T>, it: ListIterator<T>);
        getListIterator(): ListIterator<T>;
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
        private set;
        /**
         * @inheritdoc
         */
        value: T;
        /**
         * @inheritdoc
         */
        equals<U extends T>(obj: SetIterator<U>): boolean;
        /**
         * @inheritdoc
         */
        less<U extends T>(obj: SetIterator<U>): boolean;
        /**
         * @inheritdoc
         */
        hashCode(): number;
    }
}
declare namespace std {
    /**
     * <p> LIFO stack. </p>
     *
     * <p> {@link Stack}s are a type of container adaptor, specifically designed to operate in a LIFO context
     * (last-in first-out), where elements are inserted and extracted only from one end of the container. </p>
     *
     * <p> {@link Stack}s are implemented as containers adaptors, which are classes that use an encapsulated
     * object of a specific container class as its <i>underlying container</i>, providing a specific set of member
     * functions to access its elements. Elements are pushed/popped from the {@link ILinearContainer.back back()}
     * of the {@link ILinearContainer specific container}, which is known as the top of the {@link Stack}. </p>
     *
     * <p> {@link data The underlying container} may be any of the standard container class templates or some other
     * specifically designed container class. The container shall support the following operations: </p>
     *
     * <ul>
     *	<li> empty </li>
     *	<li> size </li>
     *	<li> front </li>
     *	<li> back </li>
     *	<li> pushBack </li>
     *	<li> popBack </li>
     * </ul>
     *
     * <p> The standard container classes {@link Vector}, {@link Deque} and {@link List} fulfill these requirements.
     * By default, if no container class is specified for a particular {@link Stack} class instantiation,
     * the standard container {@link List} is used. </p>
     *
     * <ul>
     *	<li> Reference: http://www.cplusplus.com/reference/stack/stack/ </li>
     * </ul>
     *
     * @param <T> Type of elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class Stack<T> {
        /**
         * The <i>underlying object</i> for implementing the <i>LIFO</i> container.
         */
        protected data: base.container.ILinearContainer<T>;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Copy Constructor.
         */
        constructor(stack: Stack<T>);
        /**
         * <p> Return size. </p>
         * <p> Returns the number of elements in the {@link Stack}. </p>
         *
         * <p> This member function effectively calls member {@link ILinearContainer.size size()} of the
         * {@link data underlying container} object. </p>
         *
         * @return The number of elements in the {@link data underlying container}.
         */
        size(): number;
        /**
         * <p> Test whether container is empty. </p>
         * <p> returns whether the {@link Stack} is empty: i.e. whether its <i>size</i> is zero. </p>
         *
         * <p> This member function effectively calls member {@link ILinearContainer.empty empty()} of the
         * {@link data underlying container} object. </p>
         *
         * @return <code>true</code> if the <i>underlying container</i>'s size is 0,
         *		   <code>false</code> otherwise. </p>
         */
        empty(): boolean;
        /**
         * <p> Access next element. </p>
         *
         * <p> Returns a value of the top element in the {@link Stack} </p>.
         *
         * <p> Since {@link Stack}s are last-in first-out containers, the top element is the last element
         * inserted into the {@link Stack}. </p>
         *
         * <p> This member function effectively calls member {@link ILinearContainer.back back()} of the
         * {@link data underlying container} object. </p>
         *
         * @return A value of the top element in the {@link Stack}.
         */
        top(): T;
        /**
         * <p> Insert element. </p>
         *
         * <p> Inserts a new element at the top of the {@link Stack}, above its current top element. </p>
         *
         * <p> This member function effectively calls the member function
         * {@link ILinearContainer.pushBack pushBack()} of the {@link data underlying container} object. </p>
         *
         * @param val Value to which the inserted element is initialized.
         */
        push(val: T): void;
        /**
         * <p> Remove top element. </p>
         *
         * <p> Removes the element on top of the {@link Stack}, effectively reducing its size by one. </p>
         *
         * <p> The element removed is the latest element inserted into the {@link Stack}, whose value can be
         * retrieved by calling member {@link top Stack.top()} </p>.
         *
         * <p> This member function effectively calls the member function
         * {@link ILinearContainer.popBack popBack()} of the {@link data underlying container} object. </p>
         */
        pop(): void;
    }
}
declare namespace std {
    /**
     * <p> System error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report conditions originating during
     * runtime from the operating system or other low-level application program interfaces which have an
     * associated {@link ErrorCode}. </p>
     *
     * <p> The class inherits from {@link RuntimeError}, to which it adds an {@link ErrorCode} as
     * member code (and defines a specialized what member). </p>
     *
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/system_error/system_error/
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class SystemError extends RuntimeError {
        /**
         * Error code.
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
         * <p> Get error code. </p>
         *
         * <p> Returns the {@link ErrorCode} object associated with the exception. </p>
         *
         * <p> This value is either the {@link ErrorCode} passed to the construction or its equivalent
         * (if constructed with a value and a {@link category}. </p>
         *
         * @return The {@link ErrorCode} associated with the object.
         */
        code(): ErrorCode;
    }
}
declare namespace std {
    /**
     * <p> Tree-structured map, <code>std::map</code> of STL. </p>
     *
     * <p> {@link TreeMap}s are associative containers that store elements formed by a combination of a
     * <i>key value</i> (<i>Key</i>) and a <i>mapped value</i> (<i>T</i>), following order. </p>
     *
     * <p> In a {@link TreeMap}, the <i>key values</i> are generally used to sort and uniquely identify
     * the elements, while the <i>mapped values</i> store the content associated to this key. The types of
     * <i>key</i> and <i>mapped value</i> may differ, and are grouped together in member type <i>value_type</i>,
     * which is a {@link Pair} type combining both:
     *
     * <p> <code>typedef Pair<Key, T> value_type;</code> </p>
     *
     * <p> Internally, the elements in a {@link TreeMap} are always sorted by its <i>key</i> following
     * a strict weak ordering criterion indicated by its internal comparison method {@link less}.
     *
     * <p> {@link TreeMap} containers are generally slower than {@link HashMap HashMap} containers to
     * access individual elements by their <i>key</i>, but they allow the direct iteration on subsets based on
     * their order. </p>
     *
     * <p> {@link TreeMap}s are typically implemented as binary search trees. </p>
     *
     * <h3> Container properties </h3>
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
     * <ul>
     *	<li> Reference: http://www.cplusplus.com/reference/map/map/ </li>
     * </ul>
     *
     * @param <Key> Type of the keys. Each element in a map is uniquely identified by its key value.
     * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMap<Key, T> extends base.container.UniqueMap<Key, T> {
        /**
         * <i>RB-Tree+</i> object for implemeting the {@link TreeMap}.
         */
        private tree;
        /**
         * Default Constructor
         */
        constructor();
        /**
         * Contruct from elements.
         *
         * @param array Elements to be contained.
         */
        constructor(array: Array<Pair<Key, T>>);
        /**
         * Copy Constructor.
         *
         * @param container Another map to copy.
         */
        constructor(container: base.container.MapContainer<Key, T>);
        /**
         * Range Constructor.
         *
         * @param begin nput interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: MapIterator<Key, T>, end: MapIterator<Key, T>);
        /**
         * @inheritdoc
         */
        assign<L extends Key, U extends T>(begin: MapIterator<L, U>, end: MapIterator<L, U>): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(key: Key): MapIterator<Key, T>;
        /**
         * <p> Return iterator to lower bound. </p>
         *
         * <p> Returns an iterator pointing to the first element in the container whose key is not considered to
         * go before <i>k</i> (i.e., either it is equivalent or goes after). </p>
         *
         * <p> The function uses its internal comparison object (key_comp) to determine this, returning an
         * iterator to the first element for which key_comp(<i>k</i>, element_key) would return false. </p>
         *
         * <p> If the {@link TreeMap} class is instantiated with the default comparison type ({@link less}),
         * the function returns an iterator to the first element whose key is not less than <i>k</i> </p>.
         *
         * <p> A similar member function, {@link upperBound}, has the same behavior as {@link lowerBound}, except
         * in the case that the {@link TreeMap} contains an element with a key equivalent to <i>k</i>: In this
         * case, {@link lowerBound} returns an iterator pointing to that element, whereas {@link upperBound}
         * returns an iterator pointing to the next element. </p>
         *
         * @param k Key to search for.
         *
         * @return An iterator to the the first element in the container whose key is not considered to go before
         *		   <i>k</i>, or {@link TreeMap.end} if all keys are considered to go before <i>k</i>.
         */
        lowerBound(key: Key): MapIterator<Key, T>;
        /**
         * <p> Return iterator to upper bound. </p>
         *
         * <p> Returns an iterator pointing to the first element in the container whose key is considered to
         * go after <i>k</i> </p>.
         *
         * <p> The function uses its internal comparison object (key_comp) to determine this, returning an
         * iterator to the first element for which key_comp(<i>k</i>, element_key) would return true. </p>
         *
         * <p> If the {@link TreeMap} class is instantiated with the default comparison type ({@link less}),
         * the function returns an iterator to the first element whose key is greater than <i>k</i> </p>.
         *
         * <p> A similar member function, {@link lowerBound}, has the same behavior as {@link upperBound}, except
         * in the case that the map contains an element with a key equivalent to <i>k</i>: In this case
         * {@link lowerBound} returns an iterator pointing to that element, whereas {@link upperBound} returns an
         * iterator pointing to the next element. </p>
         *
         * @param k Key to search for.
         *
         * @return An iterator to the the first element in the container whose key is considered to go after
         *		   <i>k</i>, or {@link TreeMap.end} if no keys are considered to go after <i>k</i>.
         */
        upperBound(key: Key): MapIterator<Key, T>;
        /**
         * <p> Get range of equal elements. </p>
         *
         * <p> Returns the bounds of a range that includes all the elements in the container which have a key
         * equivalent to <i>k</i> </p>.
         *
         * <p> Because the elements in a {@link TreeMap} container have unique keys, the range returned will
         * contain a single element at most. </p>
         *
         * <p> If no matches are found, the range returned has a length of zero, with both iterators pointing to
         * the first element that has a key considered to go after <i>k</i> according to the container's internal
         * comparison object (key_comp). </p>
         *
         * <p> Two keys are considered equivalent if the container's comparison object returns false reflexively
         * (i.e., no matter the order in which the keys are passed as arguments). </p>
         *
         * @param k Key to search for.
         *
         * @return The function returns a {@link Pair}, whose member {@link Pair.first} is the lower bound of
         *		   the range (the same as {@link lowerBound}), and {@link Pair.second} is the upper bound
         *		   (the same as {@link upperBound}).
         */
        equalRange(key: Key): Pair<MapIterator<Key, T>, MapIterator<Key, T>>;
        /**
         * @private
         */
        protected insertByPair<L extends Key, U extends T>(pair: Pair<L, U>): any;
        /**
         * @inheritdoc
         */
        protected handleInsert(item: MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        protected handleErase(item: MapIterator<Key, T>): void;
        swap(obj: TreeMap<Key, T>): void;
    }
}
declare namespace std {
    /**
     * <p> Tree-structured multiple-key map. </p>
     *
     * <p> {@link TreeMultiMap TreeMultiMaps} are associative containers that store elements formed by a combination of
     * a <i>key value</i> and a <i>mapped value</i>, following a specific order, and where multiple elements can
     * have equivalent keys. </p>
     *
     * <p> In a {@link TreeMultiMap}, the <i>key values</i> are generally used to sort and uniquely identify
     * the elements, while the <i>mapped values</i> store the content associated to this <i>key</i>. The types of
     * <i>key</i> and <i>mapped value</i> may differ, and are grouped together in member type
     * <code>value_type</code>, which is a {@link Pair} type combining both:
     *
     * <p> <code>typedef Pair<const Key, T> value_type;</code> </p>
     *
     * <p> Internally, the elements in a {@link TreeMultiMap}are always sorted by its key following a
     * strict weak ordering criterion indicated by its internal comparison method (of {@link less}). </p>
     *
     * <p> {@link TreeMultiMap}containers are generally slower than {@link HashMap} containers
     * to access individual elements by their <i>key</i>, but they allow the direct iteration on subsets based
     * on their order. </p>
     *
     * <p> {@link TreeMultiMap TreeMultiMaps} are typically implemented as binary search trees. </p>
     *
     * <h3> Container properties </h3>
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
     *	<dt> Multiple equivalent keys </dt>
     *	<dd> Multiple elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * <ul>
     *	<li> Reference: http://www.cplusplus.com/reference/map/multimap/ </li>
     * </ul>
     *
     * @param <Key> Type of the keys. Each element in a map is uniquely identified by its key value.
     * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMultiMap<Key, T> extends base.container.MultiMap<Key, T> {
        private tree;
        /**
         * Default Constructor
         */
        constructor();
        /**
         * Contruct from elements.
         *
         * @param array Elements to be contained.
         */
        constructor(array: Array<Pair<Key, T>>);
        /**
         * Copy Constructor.
         *
         * @param container Another map to copy.
         */
        constructor(container: base.container.MapContainer<Key, T>);
        /**
         * Range Constructor.
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: MapIterator<Key, T>, end: MapIterator<Key, T>);
        /**
         * @inheritdoc
         */
        assign<L extends Key, U extends T>(begin: MapIterator<L, U>, end: MapIterator<L, U>): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(key: Key): MapIterator<Key, T>;
        /**
         * <p> Return iterator to lower bound. </p>
         *
         * <p> Returns an iterator pointing to the first element in the container whose key is not considered to
         * go before <i>k</i> (i.e., either it is equivalent or goes after). </p>
         *
         * <p> The function uses its internal comparison object (key_comp) to determine this, returning an
         * iterator to the first element for which key_comp(<i>k</i>, element_key) would return false. </p>
         *
         * <p> If the {@link TreeMultiMap} class is instantiated with the default comparison type ({@link less}),
         * the function returns an iterator to the first element whose key is not less than <i>k</i> </p>.
         *
         * <p> A similar member function, {@link upperBound}, has the same behavior as {@link lowerBound}, except
         * in the case that the {@link TreeMultiMap} contains an element with keys equivalent to <i>k</i>:
         * In this case, {@link lowerBound} returns an iterator pointing to the first of such elements,
         * whereas {@link upperBound} returns an iterator pointing to the element following the last. </p>
         *
         * @param k Key to search for.
         *
         * @return An iterator to the the first element in the container whose key is not considered to go before
         *		   <i>k</i>, or {@link TreeMultiMap.end} if all keys are considered to go before <i>k</i>.
         */
        lowerBound(key: Key): MapIterator<Key, T>;
        /**
         * <p> Return iterator to upper bound. </p>
         *
         * <p> Returns an iterator pointing to the first element in the container whose key is considered to
         * go after <i>k</i> </p>.
         *
         * <p> The function uses its internal comparison object (key_comp) to determine this, returning an
         * iterator to the first element for which key_comp(<i>k</i>, element_key) would return true. </p>
         *
         * <p> If the {@link TreeMultiMap} class is instantiated with the default comparison type ({@link less}),
         * the function returns an iterator to the first element whose key is greater than <i>k</i> </p>.
         *
         * <p> A similar member function, {@link lowerBound}, has the same behavior as {@link upperBound}, except
         * in the case that the {@link TreeMultiMap} contains an element with keys equivalent to <i>k</i>:
         * In this case {@link lowerBound} returns an iterator pointing to first of such element, whereas
         * {@link upperBound} returns an iterator pointing to the element following the last. </p>
         *
         * @param k Key to search for.
         *
         * @return An iterator to the the first element in the container whose key is considered to go after
         *		   <i>k</i>, or {@link TreeMultiMap.end} if no keys are considered to go after <i>k</i>.
         */
        upperBound(key: Key): MapIterator<Key, T>;
        /**
         * <p> Get range of equal elements. </p>
         *
         * <p> Returns the bounds of a range that includes all the elements in the container which have a key
         * equivalent to <i>k</i> </p>.
         *
         * <p> If no matches are found, the range returned has a length of zero, with both iterators pointing to
         * the first element that has a key considered to go after <i>k</i> according to the container's internal
         * comparison object (key_comp). </p>
         *
         * <p> Two keys are considered equivalent if the container's comparison object returns false reflexively
         * (i.e., no matter the order in which the keys are passed as arguments). </p>
         *
         * @param k Key to search for.
         *
         * @return The function returns a {@link Pair}, whose member {@link Pair.first} is the lower bound of
         *		   the range (the same as {@link lowerBound}), and {@link Pair.second} is the upper bound
         *		   (the same as {@link upperBound}).
         */
        equalRange(key: Key): Pair<MapIterator<Key, T>, MapIterator<Key, T>>;
        /**
         * @private
         */
        protected insertByPair<L extends Key, U extends T>(pair: Pair<L, U>): any;
        /**
         * @inheritdoc
         */
        protected handleInsert(item: MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        protected handleErase(item: MapIterator<Key, T>): void;
        swap(obj: TreeMultiMap<Key, T>): void;
    }
}
declare namespace std {
    /**
     * <p> Tree-structured multiple-key set. </p>
     *
     * <p> {@link TreeMultiSet TreeMultiSets} are containers that store elements following a specific order, and
     * where multiple elements can have equivalent values. </p>
     *
     * <p> In a {@link TreeMultiSet}, the value of an element also identifies it (the value is itself
     * the <i>key</i>, of type <i>T</i>). The value of the elements in a {@link TreeMultiSet} cannot
     * be modified once in the container (the elements are always const), but they can be inserted or removed
     * from the container. </p>
     *
     * <p> Internally, the elements in a {@link TreeMultiSet TreeMultiSets} are always sorted following a strict
     * weak ordering criterion indicated by its internal comparison method (of {@link IComparable.less less}).
     *
     * <p> {@link TreeMultiSet} containers are generally slower than {@link HashMultiSet} containers
     * to access individual elements by their <i>key</i>, but they allow the direct iteration on subsets based on
     * their order. </p>
     *
     * <p> {@link TreeMultiSet TreeMultiSets} are typically implemented as binary search trees. </p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Ordered </dt>
     *	<dd> The elements in the container follow a strict order at all times. All inserted elements are
     *		 given a position in this order. </dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     *
     *	<dt> Multiple equivalent keys </dt>
     *	<dd> Multiple elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * <ul>
     *	<li> Reference: http://www.cplusplus.com/reference/set/multiset/ </li>
     * </ul>
     *
     * @param <T> Type of the elements. Each element in a {@link TreeMultiSet} container is also identified
     *			  by this value (each value is itself also the element's <i>key</i>).
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMultiSet<T> extends base.container.MultiSet<T> {
        /**
         * <i>RB-Tree+</i> object for implemeting the {@link TreeMultiSet}.
         */
        private tree;
        /**
         * Default Constructor.
         */
        constructor();
        constructor(array: Array<T>);
        /**
         * Copy Constructor.
         */
        constructor(container: base.container.Container<T>);
        /**
         * Range Constructor.
         *
         * @param begin
         * @param end
         */
        constructor(begin: base.container.Iterator<T>, end: base.container.Iterator<T>);
        /**
         * @inheritdoc
         */
        assign<U extends T>(begin: base.container.Iterator<U>, end: base.container.Iterator<U>): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(val: T): SetIterator<T>;
        /**
         * <p> Return iterator to lower bound. </p>
         *
         * <p> Returns an iterator pointing to the first element in the container which is not considered to
         * go before <i>val</i> (i.e., either it is equivalent or goes after). </p>
         *
         * <p> The function uses its internal comparison object (key_comp) to determine this, returning an
         * iterator to the first element for which key_comp(element,val) would return false. </p>
         *
         * <p> If the {@link TreeMultiSet} class is instantiated with the default comparison type ({@link less}),
         * the function returns an iterator to the first element that is not less than <i>val</i>. </p>

         * <p> A similar member function, {@link upperBound}, has the same behavior as {@link lowerBound}, except
         * in the case that the {@link TreeMultiSet} contains elements equivalent to <i>val</i>: In this case
         * {@link lowerBound} returns an iterator pointing to the first of such elements, whereas
         * {@link upperBound} returns an iterator pointing to the element following the last. </p>
         *
         * @param val Value to compare.
         *
         * @return An iterator to the the first element in the container which is not considered to go before
         *		   <i>val</i>, or {@link TreeMultiSet.end} if all elements are considered to go before <i>val</i>.
         */
        lowerBound(val: T): SetIterator<T>;
        /**
         * <p> Return iterator to upper bound. </p>
         *
         * <p> Returns an iterator pointing to the first element in the container which is considered to go after
         * <i>val</i>. </p>

         * <p> The function uses its internal comparison object (key_comp) to determine this, returning an
         * iterator to the first element for which key_comp(val,element) would return true. </p>

         * <p> If the {@code TreeMultiSet} class is instantiated with the default comparison type (less), the
         * function returns an iterator to the first element that is greater than <i>val</i>. </p>
         *
         * <p> A similar member function, {@link lowerBound}, has the same behavior as {@link upperBound}, except
         * in the case that the {@TreeMultiSet} contains elements equivalent to <i>val</i>: In this case
         * {@link lowerBound} returns an iterator pointing to the first of such elements, whereas
         * {@link upperBound} returns an iterator pointing to the element following the last. </p>
         *
         * @param val Value to compare.
         *
         * @return An iterator to the the first element in the container which is considered to go after
         *		   <i>val</i>, or {@link TreeMultiSet.end} if no elements are considered to go after <i>val</i>.
         */
        upperBound(val: T): SetIterator<T>;
        /**
         * <p> Get range of equal elements. </p>
         *
         * <p> Returns the bounds of a range that includes all the elements in the container that are equivalent
         * to <i>val</i>. </p>
         *
         * <p> If no matches are found, the range returned has a length of zero, with both iterators pointing to
         * the first element that is considered to go after val according to the container's
         * internal comparison object (key_comp). </p>
         *
         * <p> Two elements of a multiset are considered equivalent if the container's comparison object returns
         * false reflexively (i.e., no matter the order in which the elements are passed as arguments). </p>
         *
         * @param key Value to search for.
         *
         * @return The function returns a {@link Pair}, whose member {@link Pair.first} is the lower bound of
         *		   the range (the same as {@link lowerBound}), and {@link Pair.second} is the upper bound
         *		   (the same as {@link upperBound}).
         */
        equalRange(val: T): Pair<SetIterator<T>, SetIterator<T>>;
        /**
         * @private
         */
        protected insertByVal(val: T): any;
        /**
         * @inheritdoc
         */
        protected handleInsert(item: SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        protected handleErase(item: SetIterator<T>): void;
        swap(obj: TreeMultiSet<T>): void;
    }
}
declare namespace std {
    /**
     * <p> Tree-structured set, <code>std::set</code> of STL. </p>
     *
     * <p> {@link TreeSet}s are containers that store unique elements following a specific order. </p>
     *
     * <p> In a {@link TreeSet}, the value of an element also identifies it (the value is itself the
     * <i>key</i>, of type <i>T</i>), and each value must be unique. The value of the elements in a
     * {@link TreeSet} cannot be modified once in the container (the elements are always const), but they
     * can be inserted or removed from the container. </p>
     *
     * <p> Internally, the elements in a {@link TreeSet} are always sorted following a specific strict weak
     * ordering criterion indicated by its internal comparison method (of {@link less}). </p>
     *
     * <p> {@link TreeSet} containers are generally slower than {@link HashSet} containers to access
     * individual elements by their <i>key</i>, but they allow the direct iteration on subsets based on their
     * order. </p>
     *
     * <p> {@link TreeSet}s are typically implemented as binary search trees. </p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Ordered </dt>
     *	<dd> The elements in the container follow a strict order at all times. All inserted elements are
     *		 given a position in this order. </dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     *
     *	<dt> Unique keys </dt>
     *	<dd> No two elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * <ul>
     *	<li> Reference: http://www.cplusplus.com/reference/set/set/ </li>
     * </ul>
     *
     * @param <T> Type of the elements.
     *			  Each element in an {@link TreeSet} is also uniquely identified by this value.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeSet<T> extends base.container.UniqueSet<T> {
        /**
         * <i>RB-Tree+</i> object for implemeting the {@link TreeSet}.
         */
        private tree;
        /**
         * Default Constructor
         */
        constructor();
        /**
         * Contruct from elements.
         *
         * @param array Elements to be contained.
         */
        constructor(array: Array<T>);
        /**
         * Copy Constructor.
         */
        constructor(container: base.container.Container<T>);
        /**
         * Range Constructor.
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: base.container.Iterator<T>, end: base.container.Iterator<T>);
        /**
         * @inheritdoc
         */
        assign<U extends T>(begin: base.container.Iterator<U>, end: base.container.Iterator<U>): void;
        /**
         * @inheritdoc
         */
        clear(): void;
        /**
         * @inheritdoc
         */
        find(val: T): SetIterator<T>;
        /**
         * <p> Return iterator to lower bound. </p>
         *
         * <p> Returns an iterator pointing to the first element in the container which is not considered to go
         * before <i>val</i> (i.e., either it is equivalent or goes after). </p>
         *
         * <p> The function uses its internal comparison object (key_comp) to determine this, returning an
         * iterator to the first element for which key_comp(element, val) would return false. </p>
         *
         * <p> If the {@link Set} class is instantiated with the default comparison type ({@link less}), the
         * function returns an iterator to the first element that is not less than <i>val</i>. </p>
         *
         * <p> A similar member function, {@link upperBound}, has the same behavior as {@link lowerBound},
         * except in the case that the {@link Set} contains an element equivalent to <i>val</i>: In this case
         * {@link lowerBound} returns an iterator pointing to that element, whereas {@link upperBound} returns
         * an iterator pointing to the next element. </p>
         *
         * @param val Value to compare.
         *
         * @return An iterator to the the first element in the container which is not considered to go before
         *		   <i>val</i>, or {@link Set.end} if all elements are considered to go before <i>val</i>.
         */
        lowerBound(val: T): SetIterator<T>;
        /**
         * <p> Return iterator to upper bound. </p>
         *
         * <p> Returns an iterator pointing to the first element in the container which is not considered to go
         * after <i>val</i>. </p>
         *
         * <p> The function uses its internal comparison object (key_comp) to determine this, returning an
         * iterator to the first element for which key_comp(element, val) would return true. </p>
         *
         * <p> If the {@link Set} class is instantiated with the default comparison type ({@link less}), the
         * function returns an iterator to the first element that is greater than <i>val</i>. </p>
         *
         * <p> A similar member function, {@link lowerBound}, has the same behavior as {@link upperBound}, except
         * in the case that the {@link Set} contains an element equivalent to <i>val</i>: In this case
         * {@link lowerBound} returns an iterator pointing to that element, whereas {@link upperBound} returns
         * an iterator pointing to the next element. </p>
         *
         * @param val Value to compare.
         *
         * @return An iterator to the the first element in the container which is not considered to go before
         *		   <i>val</i>, or {@link Set.end} if all elements are considered to go after <i>val</i>.
         */
        upperBound(val: T): SetIterator<T>;
        /**
         * <p> Get range of equal elements. </p>
         *
         * <p> Because all elements in a {@link Set} container are unique, the range returned will contain a
         * single element at most. </p>
         *
         * <p> If no matches are found, the range returned has a length of zero, with both iterators pointing to
         * the first element that is considered to go after <i>val</i> according to the container's
         * internal comparison object (key_comp). </p>
         *
         * <p> Two elements of a {@link Set} are considered equivalent if the container's comparison object
         * returns false reflexively (i.e., no matter the order in which the elements are passed as arguments).
         * </p>
         *
         * @param val Value to search for.
         *
         * @return The function returns a {@link Pair}, whose member {@link Pair.first} is the lower bound of
         *		   the range (the same as {@link lowerBound}), and {@link Pair.second} is the upper bound
         *		   (the same as {@link upperBound}).
         */
        equalRange(val: T): Pair<SetIterator<T>, SetIterator<T>>;
        /**
         * @private
         */
        protected insertByVal(val: T): any;
        /**
         * @inheritdoc
         */
        protected handleInsert(item: SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        protected handleErase(item: SetIterator<T>): void;
        swap(obj: TreeSet<T>): void;
    }
}
declare namespace std {
    /**
     * <p> Vector, the dynamic array. </p>
     *
     * <p> {@link Vector}s are sequence containers representing arrays that can change in size. </p>
     *
     * <p> Just like arrays, {@link Vector}s use contiguous storage locations for their elements, which
     * means that their elements can also be accessed using offsets on regular pointers to its elements, and
     * just as efficiently as in arrays. But unlike arrays, their size can change dynamically, with their
     * storage being handled automatically by the container. </p>
     *
     * <p> Internally, {@link Vector}s use a dynamically allocated array to store their elements. This
     * array may need to be reallocated in order to grow in size when new elements are inserted, which implies
     * allocating a new array and moving all elements to it. This is a relatively expensive task in terms of
     * processing time, and thus, {@link Vector}s do not reallocate each time an element is added to the
     * container. </p>
     *
     * <p> Instead, {@link Vector} containers may allocate some extra storage to accommodate for possible
     * growth, and thus the container may have an actual {@link capacity} greater than the storage strictly
     * needed to contain its elements (i.e., its {@link size}). Libraries can implement different strategies
     * for growth to balance between memory usage and reallocations, but in any case, reallocations should only
     * happen at logarithmically growing intervals of {@link size} so that the insertion of individual
     * elements at the end of the {@link Vector} can be provided with amortized constant time complexity
     * (see {@link pushBack pushBack()}). </p>
     *
     * <p> Therefore, compared to arrays, {@link Vector}s consume more memory in exchange for the ability
     * to manage storage and grow dynamically in an efficient way. </p>
     *
     * <p> Compared to the other dynamic sequence containers ({@link Deque}s, {@link List}s),
     * {@link Vector}s are very efficient accessing its elements (just like arrays) and relatively
     * efficient adding or removing elements from its end. For operations that involve inserting or removing
     * elements at positions other than the end, they perform worse than the others, and have less consistent
     * iterators and references than {@link List}s. </p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Sequence </dt>
     *	<dd> Elements in sequence containers are ordered in a strict linear sequence. Individual elements are
     *		 accessed by their position in this sequence. </dd>
     *
     *	<dt> Dynamic array </dt>
     *	<dd> Allows direct access to any element in the sequence, even through pointer arithmetics, and provides
     *		 relatively fast addition/removal of elements at the end of the sequence. </dd>
     * </dl>
     *
     * <ul>
     *  <li> Reference: http://www.cplusplus.com/reference/vector/vector/
     * </ul>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class Vector<T> extends Array<T> implements base.container.IArray<T> {
        static iterator: typeof VectorIterator;
        /**
         * <p> Default Constructor. </p>
         *
         * <p> Constructs an empty container, with no elements. </p>
         */
        constructor();
        /**
         * @inheritdoc
         */
        constructor(array: Array<T>);
        /**
         * <p> Initializer list Constructor. </p>
         *
         * <p> Constructs a container with a copy of each of the elements in <i>array</i>, in the same order. </p>
         *
         * @param array An array containing elements to be copied and contained.
         */
        constructor(n: number);
        /**
         * <p> Fill Constructor. </p>
         *
         * <p> Constructs a container with <i>n</i> elements. Each element is a copy of <i>val</i> (if provided). </p>
         *
         * @param n Initial container size (i.e., the number of elements in the container at construction).
         * @param val Value to fill the container with. Each of the <i>n</i> elements in the container is
         *			  initialized to a copy of this value.
         */
        constructor(n: number, val: T);
        /**
         * <p> Copy Constructor. </p>
         *
         * <p> Constructs a container with a copy of each of the elements in <i>container</i>, in the same order. </p>
         *
         * @param container Another container object of the same type (with the same class template
         *					arguments <i>T</i>), whose contents are either copied or acquired.
         */
        constructor(container: base.container.IContainer<T>);
        /**
         * <p> Range Constructor. </p>
         *
         * <p> Constructs a container with as many elements as the range (<i>begin</i>, <i>end<i>), with each
         * element emplace-constructed from its corresponding element in that range, in the same order. </p>
         *
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         */
        constructor(begin: base.container.Iterator<T>, end: base.container.Iterator<T>);
        /**
         * @inheritdoc
         */
        assign<U extends T>(begin: base.container.Iterator<U>, end: base.container.Iterator<U>): void;
        /**
         * @inheritdoc
         */
        assign(n: number, val: T): void;
        /**
         * @inheritdoc
         */
        reserve(size: number): void;
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
        size(): number;
        /**
         * @inheritdoc
         */
        capacity(): number;
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
         * @inheritdoc
         */
        pushBack(val: T): void;
        /**
         * @inheritdoc
         */
        popBack(): void;
        /**
         * <p> Insert an element. </p>
         *
         * <p> The {@link Vector} is extended by inserting new element before the element at the specified
         * <i>position</i>, effectively increasing the container size by one. </p>
         *
         * <p> This causes an automatic reallocation of the allocated storage space if -and only if- the new
         * {@link size} surpasses the current {@link capacity}. </p>
         *
         * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting
         * element in positions other than the {@link end end()} causes the container to relocate all the
         * elements that were after <i>position</i> to its new position. This is generally an inefficient
         * operation compared to the one performed for the same operation by other kinds of sequence containers
         * (such as {@link List}). </p>
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
         * <p> Insert elements by repeated filling. </p>
         *
         * <p> The {@link Vector} is extended by inserting new elements before the element at the specified
         * <i>position</i>, effectively increasing the container size by the number of elements inserted. </p>
         *
         * <p> This causes an automatic reallocation of the allocated storage space if -and only if- the new
         * {@link size} surpasses the current {@link capacity}. </p>
         *
         * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting
         * elements in positions other than the {@link end end()} causes the container to relocate all the
         * elements that were after <i>position</i> to their new positions. This is generally an inefficient
         * operation compared to the one performed for the same operation by other kinds of sequence containers
         * (such as {@link List}).
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
         * <p> Insert elements by range iterators. </p>
         *
         * <p> The {@link Vector} is extended by inserting new elements before the element at the specified
         * <i>position</i>, effectively increasing the container size by the number of elements inserted by
         * range iterators. </p>
         *
         * <p> This causes an automatic reallocation of the allocated storage space if -and only if- the new
         * {@link size} surpasses the current {@link capacity}. </p>

         * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting
         * elements in positions other than the {@link end end()} causes the container to relocate all the
         * elements that were after <i>position</i> to their new positions. This is generally an inefficient
         * operation compared to the one performed for the same operation by other kinds of sequence containers
         * (such as {@link List}).
         *
         * @param position Position in the {@link Vector} where the new elements are inserted.
         *				   {@link iterator} is a member type, defined as a
         *				   {@link VectorIterator random access iterator} type that points to elements.
         * @param begin Input interator of the initial position in a sequence.
         * @param end Input interator of the final position in a sequence.
         *
         * @return An iterator that points to the first of the newly inserted elements.
         */
        insert<U extends T>(position: VectorIterator<T>, begin: base.container.Iterator<U>, end: base.container.Iterator<U>): VectorIterator<T>;
        /**
         * <p> Erase element. </p>
         *
         * <p> Removes from the {@link Vector} either a single element; <i>position</i>. </p>
         *
         * <p> This effectively reduces the container size by the number of element removed. </p>
         *
         * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, erasing an
         * element in position other than the {@link end end()} causes the container to relocate all the
         * elements after the segment erased to their new positions. This is generally an inefficient operation
         * compared to the one performed for the same operation by other kinds of sequence containers
         * (such as {@link List}). </p>
         *
         * @param position Iterator pointing to a single element to be removed from the {@link Vector}.
         *
         * @return An iterator pointing to the new location of the element that followed the last element erased
         *		   by the function call. This is the {@link end end()} if the operation erased the last
         *		   element in the sequence.
         */
        erase(position: VectorIterator<T>): VectorIterator<T>;
        /**
         * <p> Erase element. </p>
         *
         * <p> Removes from the <ode>Vector</code> either a single element; <i>position</i>. </p>
         *
         * <p> This effectively reduces the container size by the number of elements removed. </p>
         *
         * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, erasing
         * elements in position other than the {@link end end()} causes the container to relocate all the
         * elements after the segment erased to their new positions. This is generally an inefficient operation
         * compared to the one performed for the same operation by other kinds of sequence containers
         * (such as {@link List}). </p>
         *
         * @param begin An iterator specifying a range of beginning to erase.
         * @param end An iterator specifying a range of end to erase.
         *
         * @return An iterator pointing to the new location of the element that followed the last element erased
         *		   by the function call. This is the {@link end end()} if the operation erased the last
         *		   element in the sequence.
         */
        erase(begin: VectorIterator<T>, end: VectorIterator<T>): VectorIterator<T>;
        swap(obj: Vector<T>): void;
    }
}
declare namespace std {
    /**
     * <p> A bi-directional iterator of a Set. </p>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class VectorIterator<T> extends base.container.Iterator<T> implements base.container.ILinearIterator<T> {
        /**
         * <p> Sequence number of iterator in the source Vector. </p>
         */
        private index;
        /**
         * <p> Construct from the source {@link Vector container}. </p>
         *
         * <h4> Note </h4>
         * <p> Do not create the iterator directly, by yourself. </p>
         * <p> Use {@link Vector.begin begin()}, {@link Vector.end end()} in {@link Vector container} instead. </p>
         *
         * @param source The source {@link Vector container} to reference.
         * @param index Sequence number of the element in the source {@link Vector}.
         */
        constructor(source: Vector<T>, index: number);
        private vector;
        /**
         * @inheritdoc
         */
        /**
         * @inheritdoc
         */
        value: T;
        /**
         * @inheritdoc
         */
        equals<U extends T>(obj: VectorIterator<U>): boolean;
        /**
         * Get index.
         */
        getIndex(): number;
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
        swap(obj: VectorIterator<T>): void;
    }
}
