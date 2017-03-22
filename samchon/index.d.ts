// Type definitions for Samchon Framework v2.0.7
// Project: https://github.com/samchon/framework
// Definitions by: Jeongho Nam <http://samchon.org>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="tstl" />

declare module "samchon"
{
	export = samchon;
}

/**
 * # Samchon Framework
 *
 * <a href="https://nodei.co/npm/samchon">
 *	<img src="https://nodei.co/npm/samchon.png?downloads=true&downloadRank=true&stars=true"> </a>
 *
 * Samchon, a OON (Object-Oriented Network) framework.
 *
 * With Samchon Framework, you can implement distributed processing system within framework of OOD like handling S/W
 * objects (classes). You can realize cloud and distributed system very easily with provided system templates and even
 * integration with C++ is possible.
 *
 * The goal, ultimate utilization model of Samchon Framework is, building cloud system with NodeJS and taking heavy works
 * to C++ distributed systems with provided modules (those are system templates).
 *
 * @git https://github.com/samchon/framework
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace samchon {
}
declare namespace samchon.collections {
    /**
     * A {@link Vector} who can detect element I/O events.
     *
     * Below is the list of methods who are dispatching {@link CollectionEvent}:
     * - *insert* typed events:
     *   - {@link assign}
     *   - {@link insert}
     *   - {@link push}
     *   - {@link push_back}
     * - *erase* typed events:
     *   - {@link assign}
     *   - {@link clear}
     *   - {@link erase}
     *   - {@link pop_back}
     * - *refresh* typed events:
     *   - {@link refresh}
     *
     * #### [Inherited] {@link Vector}
     * @copydoc Vector
     */
    class ArrayCollection<T> extends std.Vector<T> implements ICollection<T> {
        /**
         * @hidden
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        push(...items: T[]): number;
        /**
         * @inheritdoc
         */
        push_back(val: T): void;
        /**
         * @hidden
         */
        protected _Insert_by_range<U extends T, InputIterator extends std.Iterator<U>>(position: std.VectorIterator<T>, begin: InputIterator, end: InputIterator): std.VectorIterator<T>;
        /**
         * @hidden
         */
        protected _Erase_by_range(first: std.VectorIterator<T>, last: std.VectorIterator<T>): std.VectorIterator<T>;
        /**
         * @hidden
         */
        private _Notify_insert(first, last);
        /**
         * @hidden
         */
        private _Notify_erase(first, last);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(it: std.VectorIterator<T>): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.VectorIterator<T>, last: std.VectorIterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.library {
    /**
     * A basic event class of Samchon Framework.
     *
     * @reference https://developer.mozilla.org/en-US/docs/Web/API/Event
     * @handbook https://github.com/samchon/framework/wiki/TypeScript-Library-EventDispatcher
     * @author Jeongho Nam <http://samchon.org>
     */
    class BasicEvent {
        protected type_: string;
        protected target_: IEventDispatcher;
        private currentTarget_;
        protected trusted_: boolean;
        protected bubbles_: boolean;
        protected cancelable_: boolean;
        protected defaultPrevented_: boolean;
        protected cancelBubble_: boolean;
        private timeStamp_;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
         * @inheritdoc
         */
        initEvent(type: string, bubbles: boolean, cancelable: boolean): void;
        /**
         * @inheritdoc
         */
        /**
         * @inheritdoc
         */
        stopImmediatePropagation(): void;
        /**
         * @inheritdoc
         */
        stopPropagation(): void;
        /**
         * @inheritdoc
         */
        readonly type: string;
        /**
         * @inheritdoc
         */
        target: IEventDispatcher;
        /**
         * @inheritdoc
         */
        readonly currentTarget: IEventDispatcher;
        /**
         * @inheritdoc
         */
        readonly bubbles: boolean;
        /**
         * @inheritdoc
         */
        readonly cancelable: boolean;
        /**
         * @inheritdoc
         */
        readonly eventPhase: number;
        /**
         * @inheritdoc
         */
        readonly defaultPrevented: boolean;
        /**
         * @inheritdoc
         */
        readonly srcElement: Element;
        /**
         * @inheritdoc
         */
        readonly cancelBubble: boolean;
        /**
         * @inheritdoc
         */
        readonly timeStamp: number;
        /**
         * Don't know what it is.
         */
        readonly returnValue: boolean;
    }
}
declare namespace samchon.collections {
    /**
     * Type of function pointer for listener of {@link CollectionEvent CollectionEvents}.
     */
    type CollectionEventListener<T> = (event: CollectionEvent<T>) => void;
}
declare namespace samchon.collections {
    /**
     * An event occured in a {@link ICollection collection} object.
     *
     * @handbook [Collections](https://github.com/samchon/framework/wiki/TypeScript-STL#collections)
     * @author Jeongho Nam <http://samchon.org>
     */
    class CollectionEvent<T> extends library.BasicEvent {
        /**
         * @hidden
         */
        private first_;
        /**
         * @hidden
         */
        private last_;
        /**
         * @hidden
         */
        private temporary_container_;
        /**
         * @hidden
         */
        private origin_first_;
        /**
         * Initialization Constructor.
         *
         * @param type Type of collection event.
         * @param first An {@link Iterator} to the initial position in this {@link CollectionEvent}.
         * @param last An {@link Iterator} to the final position in this {@link CollectionEvent}.
         */
        constructor(type: string, first: std.Iterator<T>, last: std.Iterator<T>);
        constructor(type: "insert", first: std.Iterator<T>, last: std.Iterator<T>);
        constructor(type: "erase", first: std.Iterator<T>, last: std.Iterator<T>);
        constructor(type: "refresh", first: std.Iterator<T>, last: std.Iterator<T>);
        /**
         * Associative target, the {@link ICollection collection}.
         */
        readonly target: ICollection<T>;
        /**
         * An {@link Iterator} to the initial position in this {@link CollectionEvent}.
         */
        readonly first: std.Iterator<T>;
        /**
         * An {@link Iterator} to the final position in this {@link CollectionEvent}.
         */
        readonly last: std.Iterator<T>;
        /**
         * @inheritdoc
         */
        preventDefault(): void;
    }
}
declare namespace samchon.collections.CollectionEvent {
    const INSERT: "insert";
    const ERASE: "erase";
    const REFRESH: "refresh";
}
declare namespace samchon.collections {
    /**
     * A {@link Deque} who can detect element I/O events.
     *
     * Below is the list of methods who are dispatching {@link CollectionEvent}:
     * - *insert* typed events:
     *   - {@link assign}
     *   - {@link insert}
     *   - {@link push}
     *   - {@link push_front}
     *   - {@link push_back}
     * - *erase* typed events:
     *   - {@link assign}
     *   - {@link clear}
     *   - {@link erase}
     *   - {@link pop_front}
     *   - {@link pop_back}
     * - *refresh* typed events:
     *   - {@link refresh}
     *
     * #### [Inherited] {@link Deque}
     * @copydoc Deque
     */
    class DequeCollection<T> extends std.Deque<T> implements ICollection<T> {
        /**
         * @hidden
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        push_front(val: T): void;
        /**
         * @inheritdoc
         */
        push_back(val: T): void;
        /**
         * @hidden
         */
        protected _Insert_by_range<U extends T, InputIterator extends std.Iterator<U>>(position: std.DequeIterator<T>, begin: InputIterator, end: InputIterator): std.DequeIterator<T>;
        /**
         * @inheritdoc
         */
        pop_front(): void;
        /**
         * @inheritdoc
         */
        pop_back(): void;
        /**
         * @hidden
         */
        protected _Erase_by_range(first: std.DequeIterator<T>, last: std.DequeIterator<T>): std.DequeIterator<T>;
        /**
         * @hidden
         */
        private _Notify_insert(first, last);
        /**
         * @hidden
         */
        private _Notify_erase(first, last);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(it: std.DequeIterator<T>): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.DequeIterator<T>, last: std.DequeIterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collections {
    /**
     * A {@link HashMap} who can detect element I/O events.
     *
     * Below is the list of methods who are dispatching {@link MapCollectionEvent}:
     * - *insert* typed events:
     *   - {@link assign}
     *   - {@link insert}
     *   - {@link insert_or_assign}
     *   - {@link emplace}
     *   - {@link set}
     *   - {@link push}
     * - *erase* typed events:
     *   - {@link assign}
     *   - {@link clear}
     *   - {@link erase}
     *   - {@link extract}
     * - *refresh* typed events:
     *   - {@link refresh}
     *
     * #### [Inherited] {@link HashMap}
     * @copydoc HashMap
     */
    class HashMapCollection<Key, T> extends std.HashMap<Key, T> implements ICollection<std.Pair<Key, T>> {
        /**
         * @hidden
         */
        private event_dispatcher_;
        /**
         * @hidden
         */
        protected _Handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(it: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        addEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
        addEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
        addEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        removeEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
        removeEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
        removeEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
    }
}
declare namespace samchon.collections {
    /**
     * A {@link HashMultiMap} who can detect element I/O events.
     *
     * Below is the list of methods who are dispatching {@link MapCollectionEvent}:
     * - *insert* typed events:
     *   - {@link assign}
     *   - {@link insert}
     *   - {@link emplace}
     *   - {@link push}
     * - *erase* typed events:
     *   - {@link assign}
     *   - {@link clear}
     *   - {@link erase}
     * - *refresh* typed events:
     *   - {@link refresh}
     *
     * #### [Inherited] {@link HashMultiMap}
     * @copydoc HashMultiMap
     */
    class HashMultiMapCollection<Key, T> extends std.HashMultiMap<Key, T> implements ICollection<std.Pair<Key, T>> {
        /**
         * @hidden
         */
        private event_dispatcher_;
        /**
         * @hidden
         */
        protected _Handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(it: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        addEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
        addEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
        addEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        removeEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
        removeEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
        removeEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
    }
}
declare namespace samchon.collections {
    /**
     * A {@link HashMultiSet} who can detect element I/O events.
     *
     * Below is the list of methods who are dispatching {@link CollectionEvent}:
     * - *insert* typed events:
     *   - {@link assign}
     *   - {@link insert}
     *   - {@link push}
     * - *erase* typed events:
     *   - {@link assign}
     *   - {@link clear}
     *   - {@link erase}
     * - *refresh* typed events:
     *   - {@link refresh}
     *
     * #### [Inherited] {@link HashMultiSet}
     * @copydoc HashMultiSet
     */
    class HashMultiSetCollection<T> extends std.HashMultiSet<T> implements ICollection<T> {
        /**
         * @hidden
         */
        private event_dispatcher_;
        /**
         * @hidden
         */
        protected _Handle_insert(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(it: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collections {
    /**
     * A {@link HashSet} who can detect element I/O events.
     *
     * Below is the list of methods who are dispatching {@link CollectionEvent}:
     * - *insert* typed events:
     *   - {@link assign}
     *   - {@link insert}
     *   - {@link push}
     *   - {@link insert_or_assign}
     * - *erase* typed events:
     *   - {@link assign}
     *   - {@link clear}
     *   - {@link erase}
     *   - {@link extract}
     * - *refresh* typed events:
     *   - {@link refresh}
     *
     * #### [Inherited] {@link HashSet}
     * @copydoc HashSet
     */
    class HashSetCollection<T> extends std.HashSet<T> implements ICollection<T> {
        /**
         * @hidden
         */
        private event_dispatcher_;
        /**
         * @hidden
         */
        protected _Handle_insert(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(it: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
/**
 * Collections, elements I/O detectable STL containers.
 *
 * STL Containers       | Collections
 * ---------------------|-------------------
 * {@link Vector}       | {@link ArrayCollection}
 * {@link List}         | {@link ListCollection}
 * {@link Deque}        | {@link DequeCollection}
 *                      |
 * {@link TreeSet}      | {@link TreeSetCollection}
 * {@link HashSet}      | {@link HashSetCollection}
 * {@link TreeMultiSet} | {@link TreeMultiSetCollection}
 * {@link HashMultiSet} | {@link HashMultiSetCollection}
 *                      |
 * {@link TreeMap}      | {@link TreeMapCollection}
 * {@link HashMap}      | {@link HashMapCollection}
 * {@link TreeMultiMap} | {@link TreeMultiMapCollection}
 * {@link HashMultiMap} | {@link HashMultiMapCollection}
 *
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace samchon.collections {
    /**
     * An interface for {@link IContainer containers} who can detect element I/O events.
     *
     * Below are list of methods who are dispatching {@link CollectionEvent}:
     * - *insert* typed events:
     *	 - {@link assign}
     *   - {@link insert}
     *	 - {@link push}
     * - *erase* typed events:
     *   - {@link assign}
     *   - {@link clear}
     *   - {@link erase}
     * - *refresh* typed events:
     *   - {@link refresh}
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface ICollection<T> extends std.base.Container<T>, library.IEventDispatcher {
        /**
         * Dispatch a {@link CollectionEvent} with *refresh* typed.
         *
         * {@link ICollection} dispatches {@link CollectionEvent} typed *insert* or *erase* whenever elements I/O has
         * occured. However, unlike those elements I/O events, content change in element level can't be detected.
         * There's no way to detect those events automatically by {@link IContainer}.
         *
         * If you want to dispatch those typed events (notifying change on contents in element level), you've to
         * dispatch *refresh* typed event manually, by yourself. Call {@link refresh refresh()} with specified
         * iterators who're pointing the elements whose content have changed. Then a {@link CollectionEvent} with
         * *refresh* typed will be dispatched.
         *
         * If you don't specify any iterator, then the range of the *refresh* event will be all elements in this
         * {@link ICollection collection}; {@link begin begin()} to {@link end end()}.
         */
        refresh(): void;
        /**
         * Dispatch a {@link CollectionEvent} with *refresh* typed.
         *
         * {@link ICollection} dispatches {@link CollectionEvent} typed *insert* or *erase* whenever elements I/O has
         * occured. However, unlike those elements I/O events, content change in element level can't be detected.
         * There's no way to detect those events automatically by {@link IContainer}.
         *
         * If you want to dispatch those typed events (notifying change on contents in element level), you've to
         * dispatch *refresh* typed event manually, by yourself. Call {@link refresh refresh()} with specified
         * iterators who're pointing the elements whose content have changed. Then a {@link CollectionEvent} with
         * *refresh* typed will be dispatched.
         *
         * @param it An iterator targeting the content changed element.
         */
        refresh(it: std.Iterator<T>): void;
        /**
         * Dispatch a {@link CollectionEvent} with *refresh* typed.
         *
         * {@link ICollection} dispatches {@link CollectionEvent} typed *insert* or *erase* whenever elements I/O has
         * occured. However, unlike those elements I/O events, content change in element level can't be detected.
         * There's no way to detect those events automatically by {@link IContainer}.
         *
         * If you want to dispatch those typed events (notifying change on contents in element level), you've to
         * dispatch *refresh* typed event manually, by yourself. Call {@link refresh refresh()} with specified
         * iterators who're pointing the elements whose content have changed. Then a {@link CollectionEvent} with
         * *refresh* typed will be dispatched.
         *
         * @param first An Iterator to the initial position in a sequence of the content changed elmeents.
         * @param last An {@link Iterator} to the final position in a sequence of the content changed elements. The range
         *			   used is [*first*, *last*), which contains all the elements between *first* and
         *			   *last*, including the element pointed by *first* but not the element pointed by
         *			   *last*.
         */
        refresh(first: std.Iterator<T>, last: std.Iterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
    /**
     * @hidden
     */
    namespace ICollection {
        /**
         * @hidden
         */
        function _Dispatch_CollectionEvent<T>(collection: ICollection<T>, type: string, first: std.Iterator<T>, last: std.Iterator<T>): void;
        /**
         * @hidden
         */
        function _Dispatch_MapCollectionEvent<Key, T>(collection: ICollection<std.Pair<Key, T>>, type: string, first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
    }
}
declare namespace samchon.collections {
    /**
     * A {@link List} who can detect element I/O events.
     *
     * Below is the list of methods who are dispatching {@link CollectionEvent}:
     *	- *insert* typed events:
     *   - {@link assign}
     *   - {@link insert}
     *   - {@link push}
     *   - {@link push_front}
     *   - {@link push_back}
     *   - {@link merge}
     * - *erase* typed events:
     *   - {@link assign}
     *   - {@link clear}
     *   - {@link erase}
     *   - {@link pop_front}
     *   - {@link pop_back}
     *   - {@link unique}
     *   - {@link remove}
     *   - {@link remove_if}
     *   - {@link splice}
     * - *refresh* typed events:
     *   - {@link refresh}
     *   - {@link sort}
     *
     * #### [Inherited] {@link List}
     * @copydoc List
     */
    class ListCollection<T> extends std.List<T> implements ICollection<T> {
        /**
         * @hidden
         */
        private event_dispatcher_;
        /**
         * @hidden
         */
        protected _Insert_by_range<U extends T, InputIterator extends std.Iterator<U>>(position: std.ListIterator<T>, begin: InputIterator, end: InputIterator): std.ListIterator<T>;
        /**
         * @hidden
         */
        protected _Erase_by_range(first: std.ListIterator<T>, last: std.ListIterator<T>): std.ListIterator<T>;
        /**
         * @hidden
         */
        private _Notify_insert(first, last);
        /**
         * @hidden
         */
        private _Notify_erase(first, last);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(it: std.ListIterator<T>): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.ListIterator<T>, last: std.ListIterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collections {
    type MapCollectionEventListener<Key, T> = (event: MapCollectionEvent<Key, T>) => void;
    /**
     * An event occured in a {@link MapContainer map container} object.
     *
     * @handbook [Collections](https://github.com/samchon/framework/wiki/TypeScript-STL#collections)
     * @author Jeongho Nam <http://samchon.org>
     */
    class MapCollectionEvent<Key, T> extends CollectionEvent<std.Pair<Key, T>> {
        /**
         * @inheritdoc
         */
        readonly first: std.MapIterator<Key, T>;
        /**
         * @inheritdoc
         */
        readonly last: std.MapIterator<Key, T>;
    }
}
declare namespace samchon.collections {
    /**
     * A {@link TreeMap} who can detect element I/O events.
     *
     * Below is the list of methods who are dispatching {@link MapCollectionEvent}:
     * - *insert* typed events:
     *   - {@link assign}
     *   - {@link insert}
     *   - {@link insert_or_assign}
     *   - {@link emplace}
     *   - {@link set}
     *   - {@link push}
     * - *erase* typed events:
     *   - {@link assign}
     *   - {@link clear}
     *   - {@link erase}
     *   - {@link extract}
     * - *refresh* typed events:
     *   - {@link refresh}
     *
     * #### [Inherited] {@link TreeMap}
     * @copydoc TreeMap
     */
    class TreeMapCollection<Key, T> extends std.TreeMap<Key, T> implements ICollection<std.Pair<Key, T>> {
        /**
         * @hidden
         */
        private event_dispatcher_;
        /**
         * @hidden
         */
        protected _Handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(it: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        addEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
        addEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
        addEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        removeEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
        removeEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
        removeEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
    }
}
declare namespace samchon.collections {
    /**
     * A {@link TreeMultiMap} who can detect element I/O events.
     *
     * Below is the list of methods who are dispatching {@link MapCollectionEvent}:
     * - *insert* typed events:
     *   - {@link assign}
     *   - {@link insert}
     *   - {@link emplace}
     *   - {@link push}
     * - *erase* typed events:
     *   - {@link assign}
     *   - {@link clear}
     *   - {@link erase}
     * - *refresh* typed events:
     *   - {@link refresh}
     *
     * #### [Inherited] {@link TreeMultiMap}
     * @copydoc TreeMultiMap
     */
    class TreeMultiMapCollection<Key, T> extends std.TreeMultiMap<Key, T> implements ICollection<std.Pair<Key, T>> {
        /**
         * @hidden
         */
        private event_dispatcher_;
        /**
         * @hidden
         */
        protected _Handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(it: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        addEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
        addEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
        addEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        removeEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
        removeEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
        removeEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object): void;
    }
}
declare namespace samchon.collections {
    /**
     * A {@link TreeMultiSet} who can detect element I/O events.
     *
     * Below is the list of methods who are dispatching {@link CollectionEvent}:
     * - *insert* typed events:
     *   - {@link assign}
     *   - {@link insert}
     *   - {@link push}
     * - *erase* typed events:
     *   - {@link assign}
     *   - {@link clear}
     *   - {@link erase}
     * - *refresh* typed events:
     *   - {@link refresh}
     *
     * #### [Inherited] {@link TreeMultiSet}
     * @copydoc TreeMultiSet
     */
    class TreeMultiSetCollection<T> extends std.TreeMultiSet<T> implements ICollection<T> {
        /**
         * @hidden
         */
        private event_dispatcher_;
        /**
         * @hidden
         */
        protected _Handle_insert(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(it: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collections {
    /**
     * A {@link TreeMap} who can detect element I/O events.
     *
     * Below is the list of methods who are dispatching {@link CollectionEvent}:
     * - *insert* typed events:
     *   - {@link assign}
     *   - {@link insert}
     *   - {@link insert_or_assign}
     *   - {@link push}
     * - *erase* typed events:
     *   - {@link assign}
     *   - {@link clear}7
     *   - {@link erase}
     *   - {@link extract}
     * - *refresh* typed events:
     *   - {@link refresh}
     *
     * #### [Inherited] {@link TreeSet}
     * @copydoc TreeSet
     */
    class TreeSetCollection<T> extends std.TreeSet<T> implements ICollection<T> {
        /**
         * @hidden
         */
        private event_dispatcher_;
        /**
         * @hidden
         */
        protected _Handle_insert(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @hidden
         */
        protected _Handle_erase(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(it: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.library {
    /**
     * Case generator.
     *
     * {@link CaseGenerator} is an abstract case generator being used like a matrix.
     * <ul>
     *  <li> n��r(n^r) -> {@link CombinedPermutationGenerator} </li>
     *  <li> nPr -> {@link PermutationGenerator} </li>
     *  <li> n! -> {@link FactorialGenerator} </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class CaseGenerator {
        /**
         * Size, the number of all cases.
         */
        protected size_: number;
        /**
         * N, size of the candidates.
         */
        protected n_: number;
        /**
         * R, size of elements of each case.
         */
        protected r_: number;
        /**
         * Construct from size of N and R.
         *
         * @param n Size of candidates.
         * @param r Size of elements of each case.
         */
        constructor(n: number, r: number);
        /**
         * Get size of all cases.
         *
         * @return Get a number of the all cases.
         */
        size(): number;
        /**
         * Get size of the N.
         */
        n(): number;
        /**
         * Get size of the R.
         */
        r(): number;
        /**
         * Get index'th case.
         *
         * @param index Index number
         * @return The row of the index'th in combined permuation case
         */
        abstract at(index: number): number[];
    }
    /**
     * A combined-permutation case generator.
     *
     * <sub>n</sub>��<sub>r</sub>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class CombinedPermutationGenerator extends CaseGenerator {
        /**
         * An array using for dividing each element index.
         */
        private divider_array;
        /**
         * Construct from size of N and R.
         *
         * @param n Size of candidates.
         * @param r Size of elements of each case.
         */
        constructor(n: number, r: number);
        at(index: number): number[];
    }
    /**
     * A permutation case generator.
     *
     * <sub>n</sub>P<sub>r</sub>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class PermuationGenerator extends CaseGenerator {
        /**
         * Construct from size of N and R.
         *
         * @param n Size of candidates.
         * @param r Size of elements of each case.
         */
        constructor(n: number, r: number);
        /**
         * @inheritdoc
         */
        at(index: number): number[];
    }
    /**
     * Factorial case generator.
     *
     * n! = <sub>n</sub>P<sub>n</sub>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class FactorialGenerator extends PermuationGenerator {
        /**
         * Construct from factorial size N.
         *
         * @param n Factoria size N.
         */
        constructor(n: number);
    }
}
declare namespace samchon.library {
    type BasicEventListener = (event: BasicEvent) => void;
    /**
     * The IEventDispatcher interface defines methods for adding or removing event listeners, checks whether specific
     * types of event listeners are registered, and dispatches events.
     *
     * The event target serves as the local point for how events flow through the display list hierarchy. When an
     * event such as a mouse click or a key press occurs, an event object is dispatched into the event flow from the
     * root of the display list. The event object makes a round-trip journey to the event target, which is
     * conceptually divided into three phases: the capture phase includes the journey from the root to the last node
     * before the event target's node; the target phase includes only the event target node; and the bubbling phase
     * includes any subsequent nodes encountered on the return trip to the root of the display list.
     *
     * In general, the easiest way for a user-defined class to gain event dispatching capabilities is to extend
     * {@link EventDispatcher}. If this is impossible (that is, if the class is already extending another class), you
     * can instead implement the {@link IEventDispatcher} interface, create an {@link EventDispatcher} member, and
     * write simple hooks to route calls into the aggregated {@link EventDispatcher}.
     *
     * @reference http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/events/IEventDispatcher.html
     * @handbook https://github.com/samchon/framework/wiki/TypeScript-Library-EventDispatcher
     * @author Migrated by Jeongho Nam <http://samchon.org>
     */
    interface IEventDispatcher {
        /**
         * Checks whether the {@link EventDispatcher} object has any listeners registered for a specific type of event.
         * This allows you to determine where an {@link EventDispatcher} object has altered handling of an event type
         * in the event flow hierarchy. To determine whether a specific event type actually triggers an event listener,
         * use {@link willTrigger willTrigger()}.
         *
         * The difference between {@link hasEventListener hasEventListener()} and {@link willTrigger willTrigger()} is
         * that {@link hasEventListener} examines only the object to which it belongs, whereas {@link willTrigger}
         * examines the entire event flow for the event specified by the type parameter.
         *
         * @param type The type of event.
         */
        hasEventListener(type: string): boolean;
        /**
         * Dispatches an event into the event flow.
         *
         * The event target is the {@link EventDispatcher} object upon which the {@link dispatchEvent dispatchEvent()}
         * method is called.
         *
         * @param event The {@link BasicEvent} object that is dispatched into the event flow. If the event is being
         *				redispatched, a clone of the event is created automatically. After an event is dispatched, its
         *				target property cannot be changed, so you must create a new copy
         *				of the event for redispatching to work.
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * Registers an event listener object with an {@link EventDispatcher} object so that the listener receives
         * notification of an event. You can register event listeners on all nodes in the display list for a specific
         * type of event, phase, and priority.
         *
         * After you successfully register an event listener, you cannot change its priority through additional calls
         * to {@link addEventListener addEventListener()|} To change a listener's priority, you must first call
         * {@link removeEventListener removeEventListener()}. Then you can register the listener again with the new
         * priority level.
         *
         * Keep in mind that after the listener is registered, subsequent calls to {@link addEventListener} with a
         * different type or useCapture value result in the creation of a separate listener registration. For example,
         * if you first register a listener with useCapture set to true, it listens only during the capture phase. If
         * you call {@link addEventListener} again using the same listener object, but with useCapture set to false,
         * you have two separate listeners: one that listens during the capture phase and another that listens during
         * the target and bubbling phases.
         *
         * You cannot register an event listener for only the target phase or the bubbling phase. Those phases are
         * coupled during registration because bubbling applies only to the ancestors of the target node.
         *
         * If you no longer need an event listener, remove it by calling {@link removeEventListener}, or memory
         * problems could result. Event listeners are not automatically removed from memory because the garbage
         * collector does not remove the listener as long as the dispatching object exists (unless the
         * useWeakReference parameter is set to true).
         *
         * Copying an {@link EventDispatcher} instance does not copy the event listeners attached to it. (If your n
         * ewly created node needs an event listener, you must attach the listener after creating the node.) However,
         * if you move an {@link EventDispatcher} instance, the event listeners attached to it move along with it.
         *
         * If the event listener is being registered on a node while an event is also being processed on this node,
         * the event listener is not triggered during the current phase but may be triggered during a later phase in
         * the event flow, such as the bubbling phase.
         *
         * If an event listener is removed from a node while an event is being processed on the node, it is still
         * triggered by the current actions. After it is removed, the event listener is never invoked again (unless it
         * is registered again for future processing).
         *
         * @param event The type of event.
         * @param listener The listener function that processes the event.
         *				 This function must accept an Event object as its only parameter and must return
         *				 nothing.
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        /**
         * Registers an event listener object with an {@link EventDispatcher} object so that the listener receives
         * notification of an event. You can register event listeners on all nodes in the display list for a specific
         * type of event, phase, and priority.
         *
         * After you successfully register an event listener, you cannot change its priority through additional calls
         * to {@link addEventListener addEventListener()|} To change a listener's priority, you must first call
         * {@link removeEventListener removeEventListener()}. Then you can register the listener again with the new
         * priority level.
         *
         * Keep in mind that after the listener is registered, subsequent calls to {@link addEventListener} with a
         * different type or useCapture value result in the creation of a separate listener registration. For example,
         * if you first register a listener with useCapture set to true, it listens only during the capture phase. If
         * you call {@link addEventListener} again using the same listener object, but with useCapture set to false,
         * you have two separate listeners: one that listens during the capture phase and another that listens during
         * the target and bubbling phases.
         *
         * You cannot register an event listener for only the target phase or the bubbling phase. Those phases are
         * coupled during registration because bubbling applies only to the ancestors of the target node.
         *
         * If you no longer need an event listener, remove it by calling {@link removeEventListener}, or memory
         * problems could result. Event listeners are not automatically removed from memory because the garbage
         * collector does not remove the listener as long as the dispatching object exists (unless the
         * useWeakReference parameter is set to true).
         *
         * Copying an {@link EventDispatcher} instance does not copy the event listeners attached to it. (If your n
         * ewly created node needs an event listener, you must attach the listener after creating the node.) However,
         * if you move an {@link EventDispatcher} instance, the event listeners attached to it move along with it.
         *
         * If the event listener is being registered on a node while an event is also being processed on this node,
         * the event listener is not triggered during the current phase but may be triggered during a later phase in
         * the event flow, such as the bubbling phase.
         *
         * If an event listener is removed from a node while an event is being processed on the node, it is still
         * triggered by the current actions. After it is removed, the event listener is never invoked again (unless it
         * is registered again for future processing).
         *
         * @param event The type of event.
         * @param listener The listener function that processes the event.
         *				 This function must accept an Event object as its only parameter and must return
         *				 nothing.
         * @param thisArg The object to be used as the **this** object.
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        /**
         * Removes a listener from the {@link EventDispatcher} object. If there is no matching listener registered
         * with the {@link EventDispatcher} object, a call to this method has no effect.
         *
         * @param type The type of event.
         * @param listener The listener object to remove.
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        /**
         * Removes a listener from the {@link EventDispatcher} object. If there is no matching listener registered
         * with the {@link EventDispatcher} object, a call to this method has no effect.
         *
         * @param type The type of event.
         * @param listener The listener object to remove.
         * @param thisArg The object to be used as the **this** object.
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
    }
    /**
     * The {@link EventDispatcher} class is the base class for all classes that dispatch events. The
     * {@link EventDispatcher} class implements the {@link IEventDispatcher} interface and is the base class for the
     * {@link DisplayObject} class. The {@link EventDispatcher} class allows any object on the display list to be an
     * event target and as such, to use the methods of the {@link IEventDispatcher} interface.
     *
     * The event target serves as the local point for how events flow through the display list hierarchy. When an
     * event such as a mouse click or a key press occurs, an event object is dispatched into the event flow from the
     * root of the display list. The event object makes a round-trip journey to the event target, which is
     * conceptually divided into three phases: the capture phase includes the journey from the root to the last node
     * before the event target's node; the target phase includes only the event target node; and the bubbling phase
     * includes any subsequent nodes encountered on the return trip to the root of the display list.
     *
     * In general, the easiest way for a user-defined class to gain event dispatching capabilities is to extend
     * {@link EventDispatcher}. If this is impossible (that is, if the class is already extending another class), you
     * can instead implement the {@link IEventDispatcher} interface, create an {@link EventDispatcher} member, and
     * write simple hooks to route calls into the aggregated {@link EventDispatcher}.
     *
     * @reference http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/events/EventDispatcher.html
     * @author Migrated by Jeongho Nam <http://samchon.org>
     */
    class EventDispatcher implements IEventDispatcher {
        /**
         * @hidden
         */
        private event_dispatcher_;
        /**
         * @hidden
         */
        private event_listeners_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from the origin event dispatcher.
         *
         * @param dispatcher The origin object who issuing events.
         */
        constructor(dispatcher: IEventDispatcher);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
    }
}
declare namespace samchon.library {
    /**
     * The {@link FileReference} class provides a means to load and save files in browser level.
     *
     * The {@link FileReference} class provides a means to {@link load} and {@link save} files in browser level. A
     * browser-system dialog box prompts the user to select a file to {@link load} or a location for {@link svae}. Each
     * {@link FileReference} object refers to a single file on the user's disk and has properties that contain
     * information about the file's size, type, name, creation date, modification date, and creator type (Macintosh only).
     *
     *
     * FileReference instances are created in the following ways:
     * <ul>
     *	<li>
     *		When you use the new operator with the {@link FileReference} constructor:
     *		<code>let myFileReference: FileReference = new FileReference();</code>
     *	</li>
     *	<li>
     *		When you call the {@link FileReferenceList.browse} method, which creates an array of {@link FileReference}
     *		objects.
     *	</li>
     * </ul>
     *
     * During a load operation, all the properties of a {@link FileReference} object are populated by calls to the
     * {@link FileReference.browse} or {@link FileReferenceList.browse} methods. During a save operation, the name
     * property is populated when the select event is dispatched; all other properties are populated when the complete
     * event is dispatched.
     *
     * The {@link browse browse()} method opens an browser-system dialog box that prompts the user to select a file
     * for {@link load}. The {@link FileReference.browse} method lets the user select a single file; the
     * {@link FileReferenceList.browse} method lets the user select multiple files. After a successful call to the
     * {@link browse browse()} method, call the {@link FileReference.load} method to load one file at a time. The
     * {@link FileReference.save} method prompts the user for a location to save the file and initiates downloading from
     * a binary or string data.
     *
     * The {@link FileReference} and {@link FileReferenceList} classes do not let you set the default file location
     * for the dialog box that the {@link browse} or {@link save} methods generate. The default location shown in the
     * dialog box is the most recently browsed folder, if that location can be determined, or the desktop. The classes do
     * not allow you to read from or write to the transferred file. They do not allow the browser that initiated the
     * {@link load} or {@link save} to access the loaded or saved file or the file's location on the user's disk.
     *
     * @references http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/net/FileReference.html
     * @author Jeongho Nam <http://samchon.org>
     */
    class FileReference extends EventDispatcher {
        /**
         * @hidden
         */
        private file_;
        /**
         * @hidden
         */
        private data_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * The data from the loaded file after a successful call to the {@link load load()} method.
         *
         * If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property.
         *
         * All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         *
         */
        readonly data: any;
        /**
         * The name of the file on the local disk.
         *
         * If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property.
         *
         * All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         *
         */
        readonly name: string;
        /**
         * The filename extension.
         *
         * A file's extension is the part of the name following (and not including) the final dot (&quot;.&quot;). If
         * there is no dot in the filename, the extension is <code>null</code>.
         *
         * If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property.
         *
         * All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         *
         */
        readonly extension: string;
        /**
         * The file type, metadata of the {@link extension}.
         *
         * If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property.
         *
         * All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         *
         */
        readonly type: string;
        /**
         * The size of the file on the local disk in bytes.
         *
         * If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property.
         *
         * All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         *
         */
        readonly size: number;
        /**
         * The date that the file on the local disk was last modified.
         *
         * If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property.
         *
         * All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         *
         */
        readonly modificationDate: Date;
        /**
         * Displays a file-browsing dialog box that lets the user select a file to upload. The dialog box is native
         * to the user's browser system. The user can select a file on the local computer or from other systems, for
         * example, through a UNC path on Windows.
         *
         * When you call this method and the user successfully selects a file, the properties of this
         * {@link FileReference} object are populated with the properties of that file. Each subsequent time that the
         * {@link FileReference.browse} method is called, the {@link FileReference} object's properties are reset to
         * the file that the user selects in the dialog box. Only one {@link browse browse()} can be performed at a time
         * (because only one dialog box can be invoked at a time).
         *
         * Using the *typeFilter parameter*, you can determine which files the dialog box displays.
         *
         * @param typeFilter An array of filter strings used to filter the files that are displayed in the dialog box.
         *					 If you omit this parameter, all files are displayed.
         */
        browse(...typeFilter: string[]): void;
        /**
         * Starts the load of a local file selected by a user.
         *
         * You must call the {@link FileReference.browse} or {@link FileReferenceList.browse} method before you call
         * the {@link load load()} method.
         *
         * Listeners receive events to indicate the progress, success, or failure of the load. Although you can use
         * the {@link FileReferenceList} object to let users select multiple files to load, you must {@link load} the
         * {@link FileReferenceList files} one by one. To {@link load} the files one by one, iterate through the
         * {@link FileReferenceList.fileList} array of {@link FileReference} objects.
         *
         * If the file finishes loading successfully, its contents are stored in the {@link data} property.
         */
        load(): void;
        /**
         * Save a file to local filesystem.
         *
         * {@link FileReference.save} implemented the save function by downloading a file from a hidden anchor tag.
         * However, the plan, future's {@link FileReference} will follow such rule:
         *
         * Opens a dialog box that lets the user save a file to the local filesystem.
         *
         * The {@link save save()} method first opens an browser-system dialog box that asks the user to enter a
         * filename and select a location on the local computer to save the file. When the user selects a location and
         * confirms the save operation (for example, by clicking Save), the save process begins. Listeners receive events
         * to indicate the progress, success, or failure of the save operation. To ascertain the status of the dialog box
         * and the save operation after calling {@link save save()}, your code must listen for events such as cancel,
         * open, progress, and complete.
         *
         * When the file is saved successfully, the properties of the {@link FileReference} object are populated with
         * the properties of the local file. The complete event is dispatched if the save is successful.
         *
         * Only one {@link browse browse()} or {@link save()} session can be performed at a time (because only one
         * dialog box can be invoked at a time).
         *
         * @param data The data to be saved. The data can be in one of several formats, and will be treated appropriately.
         * @param fileName File name to be saved.
         */
        save(data: string, fileName: string): void;
        /**
         * Save a file to local filesystem.
         *
         * {@link FileReference.save} implemented the save function by downloading a file from a hidden anchor tag.
         * However, the plan, future's {@link FileReference} will follow such rule:
         *
         * Opens a dialog box that lets the user save a file to the local filesystem.
         *
         * The {@link save save()} method first opens an browser-system dialog box that asks the user to enter a
         * filename and select a location on the local computer to save the file. When the user selects a location and
         * confirms the save operation (for example, by clicking Save), the save process begins. Listeners receive events
         * to indicate the progress, success, or failure of the save operation. To ascertain the status of the dialog box
         * and the save operation after calling {@link save save()}, your code must listen for events such as cancel,
         * open, progress, and complete.
         *
         * When the file is saved successfully, the properties of the {@link FileReference} object are populated with
         * the properties of the local file. The complete event is dispatched if the save is successful.
         *
         * Only one {@link browse browse()} or {@link save()} session can be performed at a time (because only one
         * dialog box can be invoked at a time).
         *
         * @param data The data to be saved. The data can be in one of several formats, and will be treated appropriately.
         * @param fileName File name to be saved.
         */
        static save(data: string, fileName: string): void;
    }
    /**
     * The {@link FileReferenceList} class provides a means to let users select one or more files for
     * {@link FileReference.load loading}. A {@link FileReferenceList} object represents a group of one or more local
     * files on the user's disk as an array of {@link FileReference} objects. For detailed information and important
     * considerations about {@link FileReference} objects and the FileReference class, which you use with
     * {@link FileReferenceList}, see the {@link FileReference} class.
     *
     * To work with the {@link FileReferenceList} class:
     * <ul>
     *	<li> Instantiate the class: <code>var myFileRef = new FileReferenceList();</code> </li>
     *	<li>
     *		Call the {@link FileReferenceList.browse} method, which opens a dialog box that lets the user select one or
     *		more files for upload: <code>myFileRef.browse();</code>
     *	</li>
     *	<li>
     *		After the {@link browse browse()} method is called successfully, the {@link fileList} property of the
     *		{@link FileReferenceList} object is populated with an array of {@link FileReference} objects.
     *	</li>
     *	<li> Call {@link FileReference.load} on each element in the {@link fileList} array. </li>
     * </ul>
     *
     * The {@link FileReferenceList} class includes a {@link browse browse()} method and a {@link fileList} property
     * for working with multiple files.
     *
     * @reference http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/net/FileReferenceList.html
     * @author Jeongho Nam <http://samchon.org>
     */
    class FileReferenceList extends EventDispatcher {
        /**
         * @hidden
         */
        file_list: std.Vector<FileReference>;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * An array of {@link FileReference} objects.
         *
         * When the {@link FileReferenceList.browse} method is called and the user has selected one or more files
         * from the dialog box that the {@link browse browse()} method opens, this property is populated with an array of
         * {@link FileReference} objects, each of which represents the files the user selected.
         *
         * The {@link fileList} property is populated anew each time {@link browse browse()} is called on that
         * {@link FileReferenceList} object.
         */
        readonly fileList: std.Vector<FileReference>;
        /**
         * Displays a file-browsing dialog box that lets the user select one or more local files to upload. The
         * dialog box is native to the user's browser system.
         *
         * When you call this method and the user successfully selects files, the {@link fileList} property of this
         * {@link FileReferenceList} object is populated with an array of {@link FileReference} objects, one for each
         * file that the user selects. Each subsequent time that the {@link FileReferenceList.browse} method is called,
         * the {@link FileReferenceList.fileList} property is reset to the file(s) that the user selects in the dialog
         * box.
         *
         * Using the *typeFilter* parameter, you can determine which files the dialog box displays.
         *
         * Only one {@link FileReference.browse}, {@link FileReference.load}, or {@link FileReferenceList.browse}
         * session can be performed at a time on a {@link FileReferenceList} object (because only one dialog box can be
         * opened at a time).
         *
         * @param typeFilter An array of filter strings used to filter the files that are displayed in the dialog box.
         *					 If you omit this parameter, all files are displayed.
         */
        browse(...typeFilter: string[]): void;
    }
}
declare namespace samchon.library {
    /**
     * A genetic algorithm class.
     *
     * In the field of artificial intelligence, a genetic algorithm (GA) is a search heuristic that mimics the
     * process of natural selection. This heuristic (also sometimes called a metaheuristic) is routinely used to generate
     * useful solutions to optimization and search problems.
     *
     * Genetic algorithms belong to the larger class of evolutionary algorithms (EA), which generate solutions to
     * optimization problems using techniques inspired by natural evolution, such as inheritance, {@link mutate mutation},
     * {@link selection}, and {@link crossover}.
     *
     * @reference https://en.wikipedia.org/wiki/Genetic_algorithm
     * @author Jeongho Nam <http://samchon.org>
     */
    class GeneticAlgorithm {
        /**
         * Whether each element (Gene) is unique in their GeneArray.
         */
        private unique_;
        /**
         * Rate of mutation.
         *
         * The {@link mutation_rate} determines the percentage of occurence of mutation in GeneArray.
         *
         * <ul>
         *	<li> When {@link mutation_rate} is too high, it is hard to ancitipate studying on genetic algorithm. </li>
         *	<li>
         *		When {@link mutation_rate} is too low and initial set of genes (GeneArray) is far away from optimal, the
         *		evolution tends to wandering outside of he optimal.
         *	</li>
         * </ul>
         */
        private mutation_rate_;
        /**
         * Number of tournaments in selection.
         */
        private tournament_;
        /**
         * Initialization Constructor.
         *
         * @param unique Whether each Gene is unique in their GeneArray.
         * @param mutation_rate Rate of mutation.
         * @param tournament Number of tournaments in selection.
         */
        constructor(unique?: boolean, mutation_rate?: number, tournament?: number);
        /**
         * Evolove *GeneArray*.
         *
         * Convenient method accessing to {@link evolvePopulation evolvePopulation()}.
         *
         * @param individual An initial set of genes; sequence listing.
         * @param population Size of population in a generation.
         * @param generation Size of generation in evolution.
         * @param compare A comparison function returns whether left gene is more optimal.
         *
         * @return An evolved *GeneArray*, optimally.
         *
         * @see {@link GAPopulation.compare}
         */
        evolveGeneArray<T, GeneArray extends std.base.IArrayContainer<T>>(individual: GeneArray, population: number, generation: number, compare?: (left: T, right: T) => boolean): GeneArray;
        /**
         * Evolve *population*, a mass of *GeneArraies*.
         *
         * @param population An initial population.
         * @param compare A comparison function returns whether left gene is more optimal.
         *
         * @return An evolved population.
         *
         * @see {@link GAPopulation.compare}
         */
        evolvePopulation<T, GeneArray extends std.base.IArrayContainer<T>>(population: GAPopulation<T, GeneArray>, compare?: (left: T, right: T) => boolean): GAPopulation<T, GeneArray>;
        /**
         * Select the best GeneArray in *population* from tournament.
         *
         * {@link selection Selection} is the stage of a genetic algorithm in which individual genomes are chosen
         * from a population for later breeding (using {@linlk crossover} operator). A generic {@link selection}
         * procedure may be implemented as follows:
         *
         * <ol>
         *	<li>
         *		The fitness function is evaluated for each individual, providing fitness values, which are then
         *		normalized. ization means dividing the fitness value of each individual by the sum of all fitness
         *		values, so that the sum of all resulting fitness values equals 1.
         *	</li>
         *	<li> The population is sorted by descending fitness values. </li>
         *	<li>
         *		Accumulated normalized fitness values are computed (the accumulated fitness value of an individual is the
         *		sum of its own fitness value plus the fitness values of all the previous individuals). The accumulated
         *		fitness of the last individual should be 1 (otherwise something went wrong in the normalization step).
         *	</li>
         *	<li> A random number R between 0 and 1 is chosen. </li>
         *	<li> The selected individual is the first one whose accumulated normalized value is greater than R. </li>
         * </ol>
         *
         * @param population The target of tournament.
         * @return The best genes derived by the tournament.
         *
         * @reference https://en.wikipedia.org/wiki/Selection_(genetic_algorithm)
         */
        private selection<T, GeneArray>(population);
        /**
         * Create a new GeneArray by crossing over two *GeneArray*(s).
         *
         * {@link crossover} is a genetic operator used to vary the programming of a chromosome or chromosomes from
         * one generation to the next. It is analogous to reproduction and biological crossover, upon which genetic
         * algorithms are based.
         *
         * {@link crossover Cross over} is a process of taking more than one parent solutions and producing a child
         * solution from them. There are methods for selection of the chromosomes.
         *
         * @param parent1 A parent sequence listing
         * @param parent2 A parent sequence listing
         *
         * @reference https://en.wikipedia.org/wiki/Crossover_(genetic_algorithm)
         */
        private crossover<T, GeneArray>(parent1, parent2);
        /**
         * Cause a mutation on the *GeneArray*.
         *
         * {@link mutate Mutation} is a genetic operator used to maintain genetic diversity from one generation of a
         * population of genetic algorithm chromosomes to the next. It is analogous to biological mutation.
         *
         * {@link mutate Mutation} alters one or more gene values in a chromosome from its initial state. In
         * {@link mutate mutation}, the solution may change entirely from the previous solution. Hence GA can come to
         * better solution by using {@link mutate mutation}.
         *
         * {@link mutate Mutation} occurs during evolution according to a user-definable mutation probability. This
         * probability should be set low. If it is set too high, the search will turn into a primitive random search.
         *
         * <h4> Note </h4>
         * Muttion is pursuing diversity. Mutation is useful for avoiding the following problem.
         *
         * When initial set of genes(GeneArray) is far away from optimail, without mutation (only with selection and
         * crossover), the genetic algorithm has a tend to wandering outside of the optimal.
         *
         * Genes in the GeneArray will be swapped following percentage of the {@link mutation_rate}.
         *
         * @param individual A container of genes to mutate
         *
         * @reference https://en.wikipedia.org/wiki/Mutation_(genetic_algorithm)
         * @see {@link mutation_rate}
         */
        private mutate<T, GeneArray>(individual);
    }
    /**
     * A population in a generation.
     *
     * {@link GAPopulation} is a class representing population of candidate genes (sequence listing) having an array
     * of GeneArray as a member. {@link GAPopulation} also manages initial set of genes and handles fitting test direclty
     * by the method {@link fitTest fitTest()}.
     *
     * The success of evolution of genetic algorithm is depend on the {@link GAPopulation}'s initial set and fitting
     * test. (*GeneArray* and {@link compare}.)
     *
     * <h4> Warning </h4>
     * Be careful for the mistakes of direction or position of the {@link compare}.
     * Most of logical errors failed to access optimal solution are occured from those mistakes.
     *
     * @param <T> Type of gene elements.
     * @param <GeneArray> An array containing genes as elments; sequnce listing.
     *
     * @author Jeongho Nam <http://samcho.org>
     */
    class GAPopulation<T, GeneArray extends std.base.IArrayContainer<T>> {
        /**
         * Genes representing the population.
         */
        private children_;
        /**
         * A comparison function returns whether left gene is more optimal, greater.
         *
         * Default value of this {@link compare} is {@link std.greater}. It means to compare two array
         * (GeneArray must be a type of {@link std.base.IArrayContainer}). Thus, you've to keep follwing rule.
         *
         * <ul>
         *	<li> GeneArray is implemented from {@link std.base.IArrayContainer}. </li>
         *	<ul>
         *		<li> {@link std.Vector} </li>
         *		<li> {@link std.Deque} </li>
         *	</ul>
         *	<li> GeneArray has custom <code>public less(obj: T): boolean;</code> function. </li>
         * </ul>
         *
         * If you don't want to follow the rule or want a custom comparison function, you have to realize a
         * comparison function.
         */
        private compare_;
        /**
         * Private constructor with population.
         *
         * Private constructor of GAPopulation does not create {@link children}. (candidate genes) but only assigns
         * *null* repeatedly following the *population size*.
         *
         * This private constructor is designed only for {@link GeneticAlgorithm}. Don't create {@link GAPopulation}
         * with this constructor, by yourself.
         *
         * @param size Size of the population.
         */
        constructor(size: number);
        /**
         * Construct from a {@link GeneArray} and *size of the population*.
         *
         * This public constructor creates *GeneArray(s)* as population (size) having shuffled genes which are
         * came from the initial set of genes (*geneArray*). It uses {@link std.greater} as default comparison function.
         *
         *
         * @param geneArray An initial sequence listing.
         * @param size The size of population to have as children.
         */
        constructor(geneArray: GeneArray, size: number);
        /**
         * Constructor from a GeneArray, size of the poluation and custom comparison function.
         *
         * This public constructor creates *GeneArray(s)* as population (size) having shuffled genes which are
         * came from the initial set of genes (*geneArray*). The *compare* is used for comparison function.
         *
         *
         * @param geneArray An initial sequence listing.
         * @param size The size of population to have as children.
         * @param compare A comparison function returns whether left gene is more optimal.
         */
        constructor(geneArray: GeneArray, size: number, compare: (left: GeneArray, right: GeneArray) => boolean);
        children(): std.Vector<GeneArray>;
        /**
         * Test fitness of each *GeneArray* in the {@link population}.
         *
         * @return The best *GeneArray* in the {@link population}.
         */
        fitTest(): GeneArray;
        /**
         * @hidden
         */
        private clone(obj);
    }
}
declare namespace samchon.library {
    /**
     * A utility class supporting static methods of string.
     *
     * The {@link StringUtil} utility class is an all-static class with methods for working with string objects.
     * You do not create instances of {@link StringUtil}; instead you call methods such as the
     * ```StringUtil.substitute()``` method.
     *
     * @reference http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/mx/utils/StringUtil.html
     * @author Jeongho Nam <http://samchon.org>
     */
    class StringUtil {
        /**
         * Generate a substring.
         *
         * Extracts a substring consisting of the characters from specified start to end.
         * It's same with str.substring( ? = (str.find(start) + start.size()), str.find(end, ?) )
         *
         * ```typescript
         * let str: string = StringUtil.between("ABCD(EFGH)IJK", "(", ")");
         * console.log(str); // PRINTS "EFGH"
         * ```
         *
         * - If start is not specified, extracts from begin of the string to end. </li>
         * - If end is not specified, extracts from start to end of the string. </li>
         * - If start and end are all omitted, returns str, itself. </li>
         *
         * @param str Target string to be applied between.
         * @param start A string for separating substring at the front.
         * @param end A string for separating substring at the end.
         *
         * @return substring by specified terms.
         */
        static between(str: string, start?: string, end?: string): string;
        /**
         * Fetch substrings.
         *
         * Splits a string into an array of substrings dividing by specified delimeters of start and end.
         * It's the array of substrings adjusted the between.
         *
         * <ul>
         *	<li> If startStr is omitted, it's same with the split by endStr not having last item. </li>
         *	<li> If endStr is omitted, it's same with the split by startStr not having first item. </li>
         *	<li> If startStr and endStar are all omitted, returns *str*. </li>
         * </ul>
         *
         * @param str Target string to split by between.
         * @param start A string for separating substring at the front.
         *				If omitted, it's same with split(end) not having last item.
         * @param end A string for separating substring at the end.
         *			  If omitted, it's same with split(start) not having first item.
         * @return An array of substrings.
         */
        static betweens(str: string, start?: string, end?: string): Array<string>;
        /**
         * An array containing whitespaces.
         */
        private static SPACE_ARRAY;
        /**
         * Remove all designated characters from the beginning and end of the specified string.
         *
         * @param str The string whose designated characters should be trimmed.
         * @param args Designated character(s).
         *
         * @return Updated string where designated characters was removed from the beginning and end.
         */
        static trim(str: string, ...args: string[]): string;
        /**
         * Remove all designated characters from the beginning of the specified string.
         *
         * @param str The string should be trimmed.
         * @param delims Designated character(s).
         *
         * @return Updated string where designated characters was removed from the beginning
         */
        static ltrim(str: string, ...args: string[]): string;
        /**
         * Remove all designated characters from the end of the specified string.
         *
         * @param str The string should be trimmed.
         * @param delims Designated character(s).
         *
         * @return Updated string where designated characters was removed from the end.
         */
        static rtrim(str: string, ...args: string[]): string;
        /**
         * Substitute `{n}` tokens within the specified string.
         *
         * @param format The string to make substitutions in. This string can contain special tokens of the form
         *				 `{n}`, where *n* is a zero based index, that will be replaced with the additional parameters
         *				 found at that index if specified.
         * @param args Additional parameters that can be substituted in the *format* parameter at each
         *			   `{n}` location, where *n* is an integer (zero based) index value into the array of values
         *			   specified.
         *
         * @return New string with all of the `{n}` tokens replaced with the respective arguments specified.
         */
        static substitute(format: string, ...args: any[]): string;
        /**
         * Substitute `{n}` tokens within the specified SQL-string.
         *
         * @param format The string to make substitutions in. This string can contain special tokens of the form
         *				 `{n}`, where *n* is a zero based index, that will be replaced with the additional parameters
         *				 found at that index if specified.
         * @param args Additional parameters that can be substituted in the *format* parameter at each
         *			   `{n}` location, where *n* is an integer (zero based) index value into the array of values
         *			   specified.
         *
         * @return New SQL-string with all of the `{n}` tokens replaced with the respective arguments specified.
         */
        static substituteSQL(format: string, ...args: any[]): string;
        /**
         * @hidden
         */
        private static _Fetch_substitute_index(format);
        /**
         * Returns a string specified word is replaced.
         *
         * @param str Target string to replace
         * @param before Specific word you want to be replaced
         * @param after Specific word you want to replace
         *
         * @return A string specified word is replaced
         */
        static replaceAll(str: string, before: string, after: string): string;
        /**
         * Returns a string specified words are replaced.
         *
         * @param str Target string to replace
         * @param pairs A specific word's pairs you want to replace and to be replaced
         *
         * @return A string specified words are replaced
         */
        static replaceAll(str: string, ...pairs: std.Pair<string, string>[]): string;
        /**
         * Replace all HTML spaces to a literal space.
         *
         * @param str Target string to replace.
         */
        static removeHTMLSpaces(str: string): string;
        /**
         * Repeat a string.
         *
         * Returns a string consisting of a specified string concatenated with itself a specified number of times.
         *
         * @param str The string to be repeated.
         * @param n The repeat count.
         *
         * @return The repeated string.
         */
        static repeat(str: string, n: number): string;
        /**
         * Number to formatted string with &quot;,&quot; sign.
         *
         * Returns a string converted from the number rounded off from specified precision with &quot;,&quot; symbols.
         *
         * @param val A number wants to convert to string.
         * @param precision Target precision of round off.
         *
         * @return A string who represents the number with roundoff and &quot;,&quot; symbols.
         */
        static numberFormat(val: number, precision?: number): string;
        static percentFormat(val: number, precision?: number): string;
    }
}
declare namespace samchon.library {
    /**
     * URLVariables class is for representing variables of HTTP.
     *
     * {@link URLVariables} class allows you to transfer variables between an application and server.
     *
     * When transfering, {@link URLVariables} will be converted to a *URI* string.
     * - URI: Uniform Resource Identifier
     *
     * @reference http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/net/URLVariables.html
     * @author Migrated by Jeongho Nam <http://samchon.org>
     */
    class URLVariables extends std.HashMap<string, string> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from a URL-encoded string.
         *
         * The {@link decode decode()} method is automatically called to convert the string to properties of the {@link URLVariables} object.
         *
         * @param str A URL-encoded string containing name/value pairs.
         */
        constructor(str: string);
        /**
         * Converts the variable string to properties of the specified URLVariables object.
         *
         * @param str A URL-encoded query string containing name/value pairs.
         */
        decode(str: string): void;
        /**
         * Returns a string containing all enumerable variables, in the MIME content encoding application/x-www-form-urlencoded.
         */
        toString(): string;
    }
}
declare namespace samchon.library {
    /**
     * A tree-structured XML object.
     *
     * The {@link XML| class contains methods and properties for working with XML objects. The {@link XML} class (along
     * with the {@link XMLList}) implements the powerful XML-handling standards defined in ECMAScript for XML (E4X)
     * specification (ECMA-357 edition 2).
     *
     * An XML object, it is composed with three members; {@link getTag tag}, {@link getProperty properties} and
     * {@link getValue value}. As you know, XML is a tree structured data expression method. The tree-stucture;
     * {@link XML} class realizes it by extending ```std.HashMap<string, XMLList>```. Child {@link XML} objects are
     * contained in the matched {@link XMLList} object being grouped by their {@link getTag tag name}. The
     * {@link XMLList} objects, they're stored in the {@link std.HashMap} ({@link XML} itself) with its **key**; common
     * {@link getTag tag name} of children {@link XML} objects.
     *
     * ```typescript
     * class XML extends std.HashMap<string, XMLList>
     * {
     *	private tag_: string;
     *	private properties_: std.HashMap<string, string>;
     *	private value_: string;
     * }
     * ```
     *
     * ```xml
     * <?xml version="1.0" ?>
     * <TAG property_name={property_value}>
     *	<!--
     *		The child XML objects with "CHILD_TAG", They're contained in an XMLList object.
     *		The XMLList object, it is stored in std.HashMap (XML class itself) with its key "CHILD_TAG"
     *	-->
     *	<CHILD_TAG property_name={property_value}>{value}</CHILD_TAG>
     *  <CHILD_TAG property_name={property_value}>{value}</CHILD_TAG>
     *	<CHILD_TAG property_name={property_value}>{value}</CHILD_TAG>
     *
     *	<!--
     *		The child XML object named "ANOTHER_TAG", it also belonged to an XMLList ojbect.
     *		And the XMLList is also being contained in the std.HashMap with its key "ANOTHER_TAG"
     *	-->
     *	<ANOTHER_TAG />
     * </TAG>
     * ```
     *
     * Use the {@link toString toString()} method to return a string representation of the {@link XML} object regardless
     * of whether the {@link XML} object has simple content or complex content.
     *
     * @reference http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/XML.html
     * @handbook https://github.com/samchon/framework/wiki/TypeScript-Library-XML
     * @author Jeongho Nam <http://samchon.org>
     */
    class XML extends std.HashMap<string, XMLList> {
        /**
         * @hidden
         */
        private tag_;
        /**
         * @hidden
         */
        private value_;
        /**
         * @hidden
         */
        private property_map_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from string.
         *
         * Creates {@link XML} object by parsing a string who represents xml structure.
         *
         * @param str A string represents XML structure.
         */
        constructor(str: string);
        /**
         * @hidden
         */
        private _Parse(str);
        /**
         * @hidden
         */
        private _Parse_tag(str);
        /**
         * @hidden
         */
        private _Parse_properties(str);
        /**
         * @hidden
         */
        private _Parse_value(str);
        /**
         * @hidden
         */
        private _Parse_children(str);
        /**
         * Get tag.
         *
         * ```xml
         * <TAG property_key={property_value}>{value}</TAG>
         * ```
         *
         * @return tag.
         */
        getTag(): string;
        /**
         * Get value.
         *
         * ```xml
         * <tag property_key={property_value}>{VALUE}</tag>
         * ```
         *
         * @return value.
         */
        getValue(): string;
        /**
         * Get iterator to property element.
         *
         * Searches the {@link getPropertyMap properties} for an element with a identifier equivalent to <i>key</i>
         * and returns an iterator to it if found, otherwise it returns an iterator to {@link HashMap.end end()}.
         *
         * <p> Two keys are considered equivalent if the properties' comparison object returns false reflexively
         * (i.e., no matter the order in which the elements are passed as arguments). </p>
         *
         * Another member function, {@link hasProperty hasProperty()} can be used to just check whether a particular
         * <i>key</i> exists.
         *
         * ```xml
         * <tag PROPERTY_KEY={property_value}>{value}</tag>
         * ```
         *
         * @param key Key to be searched for
         * @return An iterator to the element, if an element with specified <i>key</i> is found, or
         *		   {@link end HashMap.end()} otherwise.
         */
        findProperty(key: string): std.MapIterator<string, string>;
        /**
         * Test whether a property exists.
         *
         * ```xml
         * <tag PROPERTY_KEY={property_value}>{value}</tag>
         * ```
         *
         * @return Whether a property has the *key* exists or not.
         */
        hasProperty(key: string): boolean;
        /**
         * Get property.
         *
         * Get property by its *key*, property name. If the matched *key* does not exist, then exception
         * {@link std.OutOfRange} is thrown. Thus, it would better to test whether the *key* exits or not by calling the
         * {@link hasProperty hasProperty()} method before calling this {@link getProperty getProperty()}.
         *
         * This method can be substituted by {@link getPropertyMap getPropertyMap()} such below:
         * - ```getPropertyMap().get(key, value);```
         * - ```getPropertyMap().find(key).second;```
         *
         * ```xml
         * <tag PROPERTY_KEY={PROPERTY_VALUE}>{value}</tag>
         * ```
         *
         * @return Value of the matched property.
         */
        getProperty(key: string): string;
        /**
         * Get property map.
         *
         * ```xml
         * <tag PROPERTY_KEY1={PROPERTY_VALUE1}
         *		PROPERTY_KEY2={PROPERTY_VALUE2}
         *		PROPERTY_KEY3={PROPERTY_VALUE3}>{value}</tag>
         * ```
         *
         * @return {@link HashMap} containing properties' keys and values.
         */
        getPropertyMap(): std.HashMap<string, string>;
        /**
         * Set tag.
         *
         * Set tag name, identifier of this {@link XML} object.
         *
         * If this {@link XML} object is belonged to, a child of, an {@link XMLList} and its related {@link XML} objects,
         * then calling this {@link setTag setTag()} method direclty is not recommended. Erase this {@link XML} object
         * from parent objects and insert this object again.
         *
         * ```xml
         * <TAG property_key={property_value}>{value}</TAG>
         * ```
         *
         * @param val To be new {@link getTag tag}.
         */
        setTag(val: string): void;
        /**
         * Set value.
         *
         * ```xml
         * <tag property_key={property_value}>{VALUE}</tag>
         * ```
         *
         * @param val To be new {@link getValue value}.
         */
        setValue(val: string): void;
        /**
         * Set property.
         *
         * Set a property *value* with its *key*. If the *key* already exists, then the *value* will be overwritten to
         * the property. Otherwise the *key* is not exist yet, then insert the *key* and *value* {@link Pair pair} to
         * {@link getPropertyMao property map}.
         *
         * This method can be substituted by {@link getPropertyMap getPropertyMap()} such below:
         * - ```getPropertyMap().set(key, value);```
         * - ```getPropertyMap().emplace(key, value);```
         * - ```getPropertyMap().insert([key, value]);```
         * - ```getPropertyMap().insert(std.make_pair(key, value));```
         *
         * ```xml
         * <tag PROPERTY_KEY={PROPERTY_VALUE}>{value}</tag>
         * ```
         *
         * @param key Key, identifier of property to be newly inserted.
         * @param value Value of new property to be newly inserted.
         */
        setProperty(key: string, value: string): void;
        /**
         * Erase property.
         *
         * Erases a property by its *key*, property name. If the matched *key* does not exist, then exception
         * {@link std.OutOfRange} is thrown. Thus, it would better to test whether the *key* exits or not by calling the
         * {@link hasProperty hasProperty()} method before calling this {@link eraseProperty eraseProperty()}.
         *
         * This method can be substituted by ``getPropertyMap().erase(key)````.
         *
         * ```xml
         * <tag PROPERTY_KEY={property_value}>{value}</tag>
         * ```
         *
         * @param key Key of the property to erase
         * @throw {@link std.OutOfRange}
         */
        eraseProperty(key: string): void;
        /**
         * @hidden
         */
        push(...args: std.Pair<string, XMLList>[]): number;
        /**
         * @hidden
         */
        push(...args: [string, XMLList][]): number;
        push(...xmls: XML[]): number;
        push(...xmlLists: XMLList[]): number;
        /**
         * Add all properties from other {@link XML} object.
         *
         * All the properties in the *obj* are copied to this {@link XML} object. If this {@link XML} object has same
         * property key in the *obj*, then value of the property will be replaced to *obj*'s own. If you don't want to
         * overwrite properties with same key, then use {@link getPropertyMap getPropertyMap()} method.
         *
         * ```typescript
         * let x: library.XML;
         * let y: library.XML;
         *
         * x.addAllProperties(y); // duplicated key exists, then overwrites
         * x.getPropertyMap().insert(y.getPropertyMap().begin(), y.getPropertyMap().end());
         *	// ducpliated key, then ignores. only non-duplicateds are copied.
         * ```
         *
         * ```xml
         * <tag PROPERTY_KEY1={property_value1}
         *		PROPERTY_KEY2={property_value2}
         *		PROPERTY_KEY3={property_value3}>{value}</tag>
         * ```
         *
         * @param obj Target {@link XML} object to copy properties.
         */
        insertAllProperties(obj: XML): void;
        /**
         * Clear properties.
         *
         * Remove all properties. It's same with calling ```getPropertyMap().clear()```.
         *
         * ```xml
         * <tag PROPERTY_KEY1={property_value1}
         *		PROPERTY_KEY2={property_value2}
         *		PROPERTY_KEY3={property_value3}>{value}</tag>
         * ```
         */
        clearProperties(): void;
        /**
         * @hidden
         */
        private _Compute_min_index(...args);
        /**
         * @hidden
         */
        private _Decode_value(str);
        /**
         * @hidden
         */
        private _Encode_value(str);
        /**
         * @hidden
         */
        private _Decode_property(str);
        /**
         * @hidden
         */
        private _Encode_property(str);
        /**
         * {@link XML} object to xml string.
         *
         * Returns a string representation of the {@link XML} object.
         *
         * @param tab Number of tabs to spacing.
         * @return The string representation of the {@link XML} object.
         */
        toString(tab?: number): string;
    }
}
declare namespace samchon.library {
    /**
     * List of {@link XML} objects with same tag.
     *
     * @reference http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/XMLList.html
     * @handbook https://github.com/samchon/framework/wiki/TypeScript-Library-XML
     * @author Jeongho Nam <http://samchon.org>
     */
    class XMLList extends std.Deque<XML> {
        /**
         * Get tag.
         */
        getTag(): string;
        /**
         * {@link XMLList XML objects} to string.
         *
         * Returns a string representation of the {@link XMLList XML objects}.
         *
         * @param tab Number of tabs to spacing.
         * @return The string representation of the {@link XMLList XML objects}.
         */
        toString(level?: number): string;
    }
}
declare namespace samchon.protocol {
    /**
     * An interface of entity.
     *
     * Entity is a class for standardization of expression method using on network I/O by XML. If
     * Invoke is a standard message protocol of Samchon Framework which must be kept, Entity is a
     * recommended semi-protocol of message for expressing a data class. Following the semi-protocol
     * Entity is not imposed but encouraged.
     *
     * As we could get advantages from standardization of message for network I/O with Invoke,
     * we can get additional advantage from standardizing expression method of data class with Entity.
     * We do not need to know a part of network communication. Thus, with the Entity, we can only
     * concentrate on entity's own logics and relationships between another entities. Entity does not
     * need to how network communications are being done.
     *
     * I say repeatedly. Expression method of Entity is recommended, but not imposed. It's a semi
     * protocol for network I/O but not a essential protocol must be kept. The expression method of
     * Entity, using on network I/O, is expressed by XML string.
     *
     * If your own network system has a critical performance issue on communication data class,
     * it would be better to using binary communication (with ByteArray).
     * Don't worry about the problem! Invoke also provides methods for binary data (ByteArray).
     *
     * ![Class Diagram](http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_message_protocol.png)
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IEntity {
        /**
         * Construct data of the Entity from a XML object.
         *
         * Overrides the construct() method and fetch data of member variables from the XML.
         *
         * By recommended guidance, data representing member variables are contained in properties
         * of the put XML object.
         *
         * @param xml An xml used to contruct data of entity.
         */
        construct(xml: library.XML): void;
        /**
         * Get a key that can identify the Entity uniquely.
         *
         * If identifier of the Entity is not atomic value, returns a paired or tuple object
         * that can represents the composite identifier.
         *
         * <code>
         * class Point extends Entity
         * {
         *     private x: number;
         *     private y: number;
         *
         *     public key(): std.Pair<number, number>
         *     {
         *         return std.make_pair(this.x, this.y);
         *     }
         * }
         * </code>
         */
        key(): any;
        /**
         * A tag name when represented by XML.
         *
         * <code> <TAG {...properties} /> </code>
         */
        TAG(): string;
        /**
         * Get a XML object represents the Entity.
         *
         * A member variable (not object, but atomic value like number, string or date) is categorized
         * as a property within the framework of entity side. Thus, when overriding a toXML() method and
         * archiving member variables to an XML object to return, puts each variable to be a property
         * belongs to only a XML object.
         *
         * Don't archive the member variable of atomic value to XML::value causing enormouse creation
         * of XML objects to number of member variables. An Entity must be represented by only a XML
         * instance (tag).
         *
         * <h4> Standard Usage. </h4>
         * <code>
         * <memberList>
         *	<member id='jhnam88' name='Jeongho Nam' birthdate='1988-03-11' />
         *	<member id='master' name='Administartor' birthdate='2011-07-28' />
         * </memberList>
         * </code>
         *
         * <h4> Non-standard usage abusing value. </h4>
         * <code>
         * <member>
         *	<id>jhnam88</id>
         *	<name>Jeongho Nam</name>
         *	<birthdate>1988-03-11</birthdate>
         * </member>
         * <member>
         *	<id>master</id>
         *	<name>Administartor</name>
         *	<birthdate>2011-07-28</birthdate>
         * </member>
         * </code>
         *
         * @return An XML object representing the Entity.
         */
        toXML(): library.XML;
    }
    /**
     * @hidden
     */
    namespace IEntity {
        function construct(entity: IEntity, xml: library.XML, ...prohibited_names: string[]): void;
        function toXML(entity: IEntity, ...prohibited_names: string[]): library.XML;
    }
    /**
     * An entity, a standard data class.
     *
     * Entity is a class for standardization of expression method using on network I/O by XML. If
     * Invoke is a standard message protocol of Samchon Framework which must be kept, Entity is a
     * recommended semi-protocol of message for expressing a data class. Following the semi-protocol
     * Entity is not imposed but encouraged.
     *
     * As we could get advantages from standardization of message for network I/O with Invoke,
     * we can get additional advantage from standardizing expression method of data class with Entity.
     * We do not need to know a part of network communication. Thus, with the Entity, we can only
     * concentrate on entity's own logics and relationships between another entities. Entity does not
     * need to how network communications are being done.
     *
     * I say repeatedly. Expression method of Entity is recommended, but not imposed. It's a semi
     * protocol for network I/O but not a essential protocol must be kept. The expression method of
     * Entity, using on network I/O, is expressed by XML string.
     *
     * If your own network system has a critical performance issue on communication data class,
     * it would be better to using binary communication (with ByteArray).
     * Don't worry about the problem! Invoke also provides methods for binary data (ByteArray).
     *
     * ![Class Diagram](http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_message_protocol.png)
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class Entity implements IEntity {
        /**
         * Default Constructor.
         */
        constructor();
        construct(xml: library.XML): void;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.protocol {
    /**
     * @inheritdoc
     */
    interface IEntityCollection<T extends IEntity> extends IEntityGroup<T>, collections.ICollection<T> {
    }
}
declare namespace samchon.protocol {
    /**
     * @inheritdoc
     */
    abstract class EntityArrayCollection<T extends IEntity> extends collections.ArrayCollection<T> implements IEntityCollection<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * @inheritdoc
         */
        abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        has(key: any): boolean;
        /**
         * @inheritdoc
         */
        count(key: any): number;
        /**
         * @inheritdoc
         */
        get(key: any): T;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        abstract CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.protocol {
    /**
     * @inheritdoc
     */
    abstract class EntityListCollection<T extends IEntity> extends collections.ListCollection<T> implements IEntityCollection<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * @inheritdoc
         */
        abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        has(key: any): boolean;
        /**
         * @inheritdoc
         */
        count(key: any): number;
        /**
         * @inheritdoc
         */
        get(key: any): T;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        abstract CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.protocol {
    /**
     * @inheritdoc
     */
    abstract class EntityDequeCollection<T extends IEntity> extends collections.DequeCollection<T> implements IEntityCollection<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * @inheritdoc
         */
        abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        has(key: any): boolean;
        /**
         * @inheritdoc
         */
        count(key: any): number;
        /**
         * @inheritdoc
         */
        get(key: any): T;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        abstract CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
/**
 * A template for External Systems Manager.
 *
 * @handbook [Templates - External System](https://github.com/samchon/framework/wiki/TypeScript-Templates-External_System)
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace samchon.templates.external {
    /**
     * An array and manager of {@link ExternalSystem external system drivers}.
     *
     * The {@link ExternalSystemArray} is an abstract class containing and managing external system drivers,
     * {@link ExternalSystem} objects. Within framewokr of network, {@link ExternalSystemArray} represents your system
     * and children {@link ExternalSystem} objects represent remote, external systems connected with your system.
     * With this {@link ExternalSystemArray}, you can manage multiple external systems as a group.
     *
     * You can specify this {@link ExternalSystemArray} class to be *a server accepting external clients* or
     * *a client connecting to external servers*. Even both of them is also possible.
     *
     * - {@link ExternalClientArray}: A server accepting {@link ExternalSystem external clients}.
     * - {@link ExternalServerArray}: A client connecting to {@link ExternalServer external servers}.
     * - {@link ExternalServerClientArray}: Both of them. Accepts {@link ExternalSystem external clients} and connects to
     *   {@link ExternalServer external servers} at the same time.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_external_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_external_system.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * #### Proxy Pattern
     * The {@link ExternalSystemArray} class can use *Proxy Pattern*. In framework within user, which
     * {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is *which can be done*.
     *
     * By using the *logical proxy*, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}.
     *
     * <ul>
     *	<li>
     *		{@link ExternalSystemRole} can be accessed from {@link ExternalSystemArray} directly, without inteferring
     *		from {@link ExternalSystem}, with {@link ExternalSystemArray.getRole}.
     *	</li>
     *	<li>
     *		When you want to send an {@link Invoke} message to the belonged {@link ExternalSystem system}, just call
     *		{@link ExternalSystemRole.sendData ExternalSystemRole.sendData()}. Then, the message will be sent to the
     *		external system.
     *	</li>
     *	<li> Those strategy is called *Proxy Pattern*. </li>
     * </ul>
     *
     * @handbook [Templates - External System](https://github.com/samchon/framework/wiki/TypeScript-Templates-External_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ExternalSystemArray<System extends ExternalSystem> extends protocol.EntityDequeCollection<System> implements protocol.IProtocol {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @hidden
         */
        private _Handle_system_erase(event);
        /**
         * Test whether the role exists.
         *
         * @param name Name, identifier of target {@link ExternalSystemRole role}.
         *
         * @return Whether the role has or not.
         */
        hasRole(name: string): boolean;
        /**
         * Get a role.
         *
         * @param name Name, identifier of target {@link ExternalSystemRole role}.
         *
         * @return The specified role.
         */
        getRole(name: string): ExternalSystemRole;
        /**
         * Send an {@link Invoke} message.
         *
         * @param invoke An {@link Invoke} message to send.
         */
        sendData(invoke: protocol.Invoke): void;
        /**
         * Handle an {@Invoke} message have received.
         *
         * @param invoke An {@link Invoke} message have received.
         */
        abstract replyData(invoke: protocol.Invoke): void;
        /**
         * Tag name of the {@link ExternalSytemArray} in {@link XML}.
         *
         * @return *systemArray*.
         */
        TAG(): string;
        /**
         * Tag name of {@link ExternalSystem children elements} belonged to the {@link ExternalSytemArray} in {@link XML}.
         *
         * @return *system*.
         */
        CHILD_TAG(): string;
    }
}
/**
 * A template for Parallel Processing System.
 *
 * @handbook [Templates - Parallel System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Parallel_System)
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace samchon.templates.parallel {
    /**
     * Master of Parallel Processing System.
     *
     * The {@link ParallelSystemArray} is an abstract class containing and managing remote parallel **slave** system
     * drivers, {@link ParallelSystem} objects. Within framework of network, {@link ParallelSystemArray} represents your
     * system, a **Master** of *Parallel Processing System* that requesting *parallel process* to **slave** systems and the
     * children {@link ParallelSystem} objects represent the remote **slave** systems, who is being requested the
     * *parallel processes*.
     *
     * You can specify this {@link ParallelSystemArray} class to be *a server accepting parallel clients* or
     * *a client connecting to parallel servers*. Even both of them is possible. Extends one of them below and overrides
     * abstract factory method(s) creating the child {@link ParallelSystem} object.
     *
     * - {@link ParallelClientArray}: A server accepting {@link ParallelSystem parallel clients}.
     * - {@link ParallelServerArray}: A client connecting to {@link ParallelServer parallel servers}.
     * - {@link ParallelServerClientArray}: Both of them. Accepts {@link ParallelSystem parallel clients} and connects to
     *   {@link ParallelServer parallel servers} at the same time.
     *
     * When you need the **parallel process**, then call one of them: {@link sendSegmentData} or {@link sendPieceData}.
     * When the **parallel process** has completed, {@link ParallelSystemArray} estimates each {@link ParallelSystem}'s
     * {@link ParallelSystem.getPerformance performance index} basis on their execution time. Those performance indices
     * will be reflected to the next **parallel process**, how much pieces to allocate to each {@link ParallelSystem}.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_parallel_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_parallel_system.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * #### Proxy Pattern
     * This class {@link ParallelSystemArray} is derived from the {@link ExternalSystemArray} class. Thus, you can take
     * advantage of the *Proxy Pattern* in the {@link ParallelSystemArray} class. If a process to request is not the
     * *parallel process* (to be distrubted to all slaves), but the **exclusive process** handled in a system, then it
     * may better to utilizing the *Proxy Pattern*:
     *
     * The {@link ExternalSystemArray} class can use *Proxy Pattern*. In framework within user, which
     * {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is *which can be done*.
     *
     * By using the *logical proxy*, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}.
     *
     * <ul>
     *	<li>
     *		{@link ExternalSystemRole} can be accessed from {@link ExternalSystemArray} directly, without inteferring
     *		from {@link ExternalSystem}, with {@link ExternalSystemArray.getRole}.
     *	</li>
     *	<li>
     *		When you want to send an {@link Invoke} message to the belonged {@link ExternalSystem system}, just call
     *		{@link ExternalSystemRole.sendData ExternalSystemRole.sendData()}. Then, the message will be sent to the
     *		external system.
     *	</li>
     *	<li> Those strategy is called *Proxy Pattern*. </li>
     * </ul>
     *
     * @handbook [Templates - Parallel System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Parallel_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ParallelSystemArray<System extends ParallelSystem> extends external.ExternalSystemArray<System> {
        /**
         * @hidden
         */
        private history_sequence_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Send an {@link Invoke} message with segment size.
         *
         * Sends an {@link Invoke} message requesting a **parallel process** with its *segment size*. The {@link Invoke}
         * message will be delivered to children {@link ParallelSystem} objects with the *piece size*, which is divided
         * from the *segment size*, basis on their {@link ParallelSystem.getPerformance performance indices}.
         *
         * - If segment size is 100,
         * - The segment will be allocated such below:
         *
         * Name    | Performance index | Number of pieces to be allocated | Formula
         * --------|-------------------|----------------------------------|--------------
         * Snail   |                 1 |                               10 | 100 / 10 * 1
         * Cheetah |                 4 |                               40 | 100 / 10 * 4
         * Rabbit  |                 3 |                               30 | 100 / 10 * 3
         * Turtle  |                 2 |                               20 | 100 / 10 * 2
         *
         * When the **parallel process** has completed, then this {@link ParallelSystemArraY} will estimate
         * {@link ParallelSystem.getPerformance performance indices} of {@link ParallelSystem} objects basis on their
         * execution time.
         *
         * @param invoke An {@link Invoke} message requesting parallel process.
         * @param size Number of pieces to segment.
         *
         * @return Number of {@link ParallelSystem slave systems} participating in the *Parallel Process*.
         *
         * @see {@link sendPieceData}, {@link ParallelSystem.getPerformacen}
         */
        sendSegmentData(invoke: protocol.Invoke, size: number): number;
        /**
         * Send an {@link Invoke} message with range of pieces.
         *
         * Sends an {@link Invoke} message requesting a **parallel process** with its *range of pieces [first, last)*.
         * The {@link Invoke} will be delivered to children {@link ParallelSystem} objects with the newly computed
         * *range of sub-pieces*, which is divided from the *range of pieces (first to last)*, basis on their
         * {@link ParallelSystem.getPerformance performance indices}.
         *
         * - If indices of pieces are 0 to 50,
         * - The sub-pieces will be allocated such below:
         *
         * Name    | Performance index | Range of sub-pieces to be allocated | Formula
         * --------|-------------------|-------------------------------------|------------------------
         * Snail   |                 1 |                            ( 0,  5] | (50 - 0) / 10 * 1
         * Cheetah |                 4 |                            ( 5, 25] | (50 - 0) / 10 * 4 + 5
         * Rabbit  |                 3 |                            (25, 40] | (50 - 0) / 10 * 3 + 25
         * Turtle  |                 2 |                            (40, 50] | (50 - 0) / 10 * 2 + 40
         *
         * When the **parallel process** has completed, then this {@link ParallelSystemArraY} will estimate
         * {@link ParallelSystem.getPerformance performance indices} of {@link ParallelSystem} objects basis on their
         * execution time.
         *
         * @param invoke An {@link Invoke} message requesting parallel process.
         * @param first Initial piece's index in a section.
         * @param last Final piece's index in a section. The range used is [*first*, *last*), which contains
         *			   all the pieces' indices between *first* and *last*, including the piece pointed by index
         *			   *first*, but not the piece pointed by the index *last*.
         *
         * @return Number of {@link ParallelSystem slave systems} participating in the *Parallel Process*.
         *
         * @see {@link sendSegmentData}, {@link ParallelSystem.getPerformacen}
         */
        sendPieceData(invoke: protocol.Invoke, first: number, last: number): number;
        /**
         * @hidden
         */
        protected _Complete_history(history: slave.InvokeHistory): boolean;
        /**
         * @hidden
         */
        protected _Normalize_performance(): void;
    }
}
/**
 * A template for Distributed Processing System.
 *
 * @handbook [Templates - Distributed System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Distributed_System)
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace samchon.templates.distributed {
    /**
     * Master of Distributed Processing System.
     *
     * The {@link DistributedSystemArray} is an abstract class containing and managing remote distributed **slave** system
     * drivers, {@link DistributedSystem} objects. Within framework of network, {@link DistributedSystemArray} represents
     * your system, a **Master** of *Distributed Processing System* that requesting *distributed process* to **slave**
     * systems and the children {@link DistributedSystem} objects represent the remote **slave** systems, who is being
     * requested the *distributed processes*.
     *
     * You can specify this {@link DistributedSystemArray} class to be *a server accepting distributed clients* or
     * *a client connecting to distributed servers*. Even both of them is possible. Extends one of them below and overrides
     * abstract factory method(s) creating the child {@link DistributedSystem} object.
     *
     * - {@link DistributedClientArray}: A server accepting {@link DistributedSystem distributed clients}.
     * - {@link DistributedServerArray}: A client connecting to {@link DistributedServer distributed servers}.
     * - {@link DistributedServerClientArray}: Both of them. Accepts {@link DistributedSystem distributed clients} and
     *   connects to {@link DistributedServer distributed servers} at the same time.
     *
     * The {@link DistributedSystemArray} contains {@link DistributedProcess} objects directly. You can request a
     * **distributed process** through the {@link DistributedProcess} object. You can access the
     * {@link DistributedProcess} object(s) with those methods:
     *
     * - {@link hasProcess}
     * - {@link getProcess}
     * - {@link insertProcess}
     * - {@link eraseProcess}
     * - {@link getProcessMap}
     *
     * When you need the **distributed process**, call the {@link DistributedProcess.sendData} method. Then the
     * {@link DistributedProcess} will find the most idle {@link DistributedSystem} object who represents a distributed
     * **slave **system. The {@link Invoke} message will be sent to the most idle {@link DistributedSystem} object. When
     * the **distributed process** has completed, then {@link DistributedSystem.getPerformance performance index} and
     * {@link DistributedProcess.getResource resource index} of related objects will be revaluated.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_distributed_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_distributed_system.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * #### Parallel Process
     * This {@link DistributedSystemArray} class is derived from the {@link ParallelSystemArray} class, so you can request
     * a **parallel process**, too.
     *
     * When you need the **parallel process**, then call one of them: {@link sendSegmentData} or {@link sendPieceData}.
     * When the **parallel process** has completed, {@link ParallelSystemArray} estimates each {@link ParallelSystem}'s
     * {@link ParallelSystem.getPerformance performance index} basis on their execution time. Those performance indices will
     * be reflected to the next **parallel process**, how much pieces to allocate to each {@link ParallelSystem}.
     *
     * #### Proxy Pattern
     * This class {@link DistributedSystemArray} is derived from the {@link ExternalSystemArray} class. Thus, you can take
     * advantage of the *Proxy Pattern* in the {@link DistributedSystemArray} class. If a process to request is not the
     * *parallel process* (to be distrubted to all slaves), but the **exclusive process** handled in a system, then it
     * may better to utilizing the *Proxy Pattern*:
     *
     * The {@link ExternalSystemArray} class can use *Proxy Pattern*. In framework within user, which
     * {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is *which can be done*.
     *
     * By using the *logical proxy*, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}.
     *
     * <ul>
     *	<li>
     *		{@link ExternalSystemRole} can be accessed from {@link ExternalSystemArray} directly, without inteferring
     *		from {@link ExternalSystem}, with {@link ExternalSystemArray.getRole}.
     *	</li>
     *	<li>
     *		When you want to send an {@link Invoke} message to the belonged {@link ExternalSystem system}, just call
     *		{@link ExternalSystemRole.sendData ExternalSystemRole.sendData()}. Then, the message will be sent to the
     *		external system.
     *	</li>
     *	<li> Those strategy is called *Proxy Pattern*. </li>
     * </ul>
     *
     * @handbook [Templates - Distributed System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Distributed_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class DistributedSystemArray<System extends DistributedSystem> extends parallel.ParallelSystemArray<System> {
        /**
         * @hidden
         */
        private process_map_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * Factory method creating a child {@link DistributedProcess process} object.
         *
         * @param xml {@link XML} represents the {@link DistributedProcess child} object.
         * @return A new {@link DistributedProcess} object.
         */
        protected abstract createProcess(xml: library.XML): DistributedProcess;
        /**
         * Get process map.
         *
         * Gets an {@link HashMap} containing {@link DistributedProcess} objects with their *key*.
         *
         * @return An {@link HasmMap> containing pairs of string and {@link DistributedProcess} object.
         */
        getProcessMap(): std.HashMap<string, DistributedProcess>;
        /**
         * Test whether the process exists.
         *
         * @param name Name, identifier of target {@link DistributedProcess process}.
         *
         * @return Whether the process has or not.
         */
        hasProcess(name: string): boolean;
        /**
         * Get a process.
         *
         * @param name Name, identifier of target {@link DistributedProcess process}.
         *
         * @return The specified process.
         */
        getProcess(name: string): DistributedProcess;
        /**
         * Insert a process.
         *
         * @param process A process to be inserted.
         * @return Success flag.
         */
        insertProcess(process: DistributedProcess): boolean;
        /**
         * Erase a process.
         *
         * @param name Name, identifier of target {@link DistributedProcess process}.
         */
        eraseProcess(name: string): boolean;
        /**
         * @hidden
         */
        protected _Complete_history(history: slave.InvokeHistory): boolean;
        /**
         * @hidden
         */
        private estimate_process_resource(history);
        /**
         * @hidden
         */
        private estimate_system_performance(history);
        /**
         * @hidden
         */
        protected _Normalize_performance(): void;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.templates.distributed {
    /**
     * Mediator of Distributed Processing System.
     *
     * The {@link DistributedSystemArrayMediator} class be a master for its slave systems, and be a slave to its master
     * system at the same time. This {@link DistributedSystemArrayMediator} be a master system, containing and managing
     * {@link DistributedSystem} objects, which represent distributed slave systems, by extending
     * {@link DistributedSystemArray} class. Also, be a slave system through {@link getMediator mediator} object, which is
     * derived from the {@link SlaveSystem} class.
     *
     * As a master, you can specify this {@link DistributedSystemArrayMediator} class to be <i>a master server accepting
     * slave clients<i> or <i>a master client to connecting slave servers</i>. Even both of them is possible. Extends one
     * of them below and overrides abstract factory method(s) creating the child {@link DistributedSystem} object.
     *
     * - {@link DistributedClientArrayMediator}: A server accepting {@link DistributedSystem distributed clients}.
     * - {@link DistributedServerArrayMediator}: A client connecting to {@link DistributedServer distributed servers}.
     * - {@link DistributedServerClientArrayMediator}: Both of them. Accepts {@link DistributedSystem distributed clients} and
     *   connects to {@link DistributedServer distributed servers} at the same time.
     *
     * As a slave, you can specify this {@link DistributedSystemArrayMediator} to be <i>a client slave connecting to master
     * server</i> or <i>a server slave accepting master client</i> by overriding the {@link createMediator} method.
     * Overrides the {@link createMediator createMediator()} method and return one of them:
     *
     * - A client slave connecting to master server:
     *   - {@link MediatorClient}
     *   - {@link MediatorWebClient}
     *   - {@link MediatorSharedWorkerClient}
     * - A server slave accepting master client:
     *   - {@link MediatorServer}
     *   - {@link MediatorWebServer}
     *   - {@link MediatorDedicatedWorkerServer}
     *   - {@link MediatorSharedWorkerServer}
     *
     * #### [Inherited] {@link DistributedSystemArray}
     * @copydoc DistributedSystemArray
     */
    abstract class DistributedSystemArrayMediator<System extends DistributedSystem> extends DistributedSystemArray<System> {
        /**
         * @hidden
         */
        private mediator_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method creating a {@link MediatorSystem} object.
         *
         * The {@link createMediator createMediator()} is an abstract method creating the {@link MediatorSystem} object.
         *
         * You know what? this {@link DistributedSystemArrayMediator} class be a master for its slave systems, and be a
         * slave to its master system at the same time. The {@link MediatorSystem} object makes it possible; be a slave
         * system. This {@link createMediator} determines specific type of the {@link MediatorSystem}.
         *
         * Overrides the {@link createMediator createMediator()} method to create and return one of them following which
         * protocol and which type of remote connection (server or client) will be used:
         *
         * - A client slave connecting to master server:
         *   - {@link MediatorClient}
         *   - {@link MediatorWebClient}
         *   - {@link MediatorSharedWorkerClient}
         * - A server slave accepting master client:
         *   - {@link MediatorServer}
         *   - {@link MediatorWebServer}
         *   - {@link MediatorDedicatedWorkerServer}
         *   - {@link MediatorSharedWorkerServer}
         *
         * @return A newly created {@link MediatorSystem} object.
         */
        protected abstract createMediator(): parallel.MediatorSystem;
        /**
         * Start mediator.
         *
         * If the {@link getMediator mediator} is a type of server, then opens the server accepting master client.
         * Otherwise, the {@link getMediator mediator} is a type of client, then connects the master server.
         */
        protected startMediator(): void;
        /**
         * Get {@link MediatorSystem} object.
         *
         * When you need to send an {@link Invoke} message to the master system of this
         * {@link DistributedSystemArrayMediator}, then send to the {@link MediatorSystem} through this
         * {@link getMediator}.
         *
         * ```typescript
         * this.getMediator().sendData(...);
         * ```
         *
         * @return The {@link MediatorSystem} object.
         */
        getMediator(): parallel.MediatorSystem;
        /**
         * @hidden
         */
        protected _Complete_history(history: slave.InvokeHistory): boolean;
    }
}
declare namespace samchon.protocol {
    /**
     * @hidden
     */
    namespace socket {
        type socket = any;
        type server = any;
        type http_server = any;
    }
    /**
     * @hidden
     */
    namespace websocket {
        type connection = any;
        type request = any;
        type IMessage = any;
        type ICookie = any;
        type client = any;
    }
}
declare namespace samchon.protocol {
    /**
     * @hidden
     */
    abstract class _CommunicatorBase implements ICommunicator {
        /**
         * @hidden
         */
        protected listener_: IProtocol;
        /**
         * @inheritdoc
         */
        onClose: Function;
        /**
         * @hidden
         */
        protected connected_: boolean;
        /**
         * @hidden
         */
        private binary_invoke_;
        /**
         * @hidden
         */
        private binary_parameters_;
        /**
         * @hidden
         */
        private unhandled_invokes_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from *listener*.
         *
         * @param listener An {@link IProtocol} object to listen {@link Invoke} messages.
         */
        constructor(listener: IProtocol);
        /**
         * @inheritdoc
         */
        abstract close(): void;
        /**
         * @inheritdoc
         */
        isConnected(): boolean;
        /**
         * @hidden
         */
        protected _Is_binary_invoke(): boolean;
        /**
         * @inheritdoc
         */
        abstract sendData(invoke: Invoke): void;
        /**
         * @inheritdoc
         */
        replyData(invoke: Invoke): void;
        /**
         * @hidden
         */
        protected _Handle_string(str: string): void;
        /**
         * @hidden
         */
        protected _Handle_binary(binary: Uint8Array): void;
    }
}
declare namespace samchon.protocol {
    /**
     * A communicator following Samchon Framework's own protocol.
     *
     * {@link Communicator} is an abstract class following Samchon Framework's own protocol. This {@link Communicator}
     * class is specified to {@link ServerConnector} and {@link ClientDriver} whether the remote system is a server (that
     * my system is connecting to) or a client (a client conneting to to my server).
     *
     * Note that, if one of this or remote system is web-browser based, then you don't have to use this
     * {@link Communicator} class who follows Samchon Framework's own protocol. Web-browser supports only Web-socket
     * protocol. Thus in that case, you have to use {@link WebCommunicator} instead.
     *
     * #### [Inherited] {@link ICommunicator}
     * @copydoc ICommunicator
     */
    abstract class Communicator extends _CommunicatorBase {
        /**
         * @hidden
         */
        protected socket_: socket.socket;
        /**
         * @hidden
         */
        private header_bytes_;
        /**
         * @hidden
         */
        private data_;
        /**
         * @hidden
         */
        private data_index_;
        /**
         * @hidden
         */
        private listening_;
        /**
         * @inheritdoc
         */
        close(): void;
        /**
         * @hidden
         */
        protected _Start_listen(): void;
        /**
         * @hidden
         */
        private _Handle_error();
        /**
         * @hidden
         */
        private _Handle_close();
        /**
         * @inheritdoc
         */
        sendData(invoke: Invoke): void;
        /**
         * @hidden
         */
        private _Listen_piece(piece);
        /**
         * @hidden
         */
        private _Listen_header(piece, piece_index);
        /**
         * @hidden
         */
        private _Listen_data(piece, piece_index);
    }
}
declare namespace samchon.protocol {
    /**
     * Communicator with remote client.
     *
     * {@link ClientDriver} is a class taking full charge of network communication with remote client who follows Samchon
     * Framework's own protocol. This {@link ClientDriver} object is always created by {@link Server} class. When you got
     * this {@link ClientDriver} object from the {@link Server.addClient Server.addClient()}, then specify
     * {@link IProtocol listener} with the {@link ClientDriver.listen ClientDriver.listen()} method.
     *
     * #### [Inherited] {@link IClientDriver}
     * @copydoc IClientDriver
     */
    class ClientDriver extends Communicator implements IClientDriver {
        /**
         * Construct from a socket.
         */
        constructor(socket: socket.socket);
        /**
         * @inheritdoc
         */
        listen(listener: IProtocol): void;
    }
}
declare namespace samchon.protocol {
    /**
     * A communicator for shared worker.
     *
     * {@link DedicatedWorkerCommunicator} is an abstract class for communication between DedicatedWorker and Web-browser.
     * This {@link DedicatedWorkerCommunicator} is specified to {@link DedicatedWorkerServerConnector} and
     * {@link DedicatedWorkerClientDriver} whether the remote system is a server (that my system is connecting to) or a
     * client (a client conneting to to my server).
     *
     * #### Why DedicatedWorker be a server?
     * In JavaScript environment, there's no way to implement multi-threading function. Instead, JavaScript supports the
     * **Worker**, creating a new process. However, the **Worker** does not shares memory addresses. To integrate the
     * **Worker** with its master, only communication with string or binary data is allowed. Doesn't it seem like a network
     * communication? Furthermore, there's not any difference between the worker communication and network communication.
     * It's the reason why Samchon Framework considers the **Worker** as a network node.
     *
     * The class {@link DedicatedWorkerCommunicator} is designed make such relationship. From now on, DedicatedWorker is a
     * {@link DedicatedWorkerServer server} and {@link DedicatedWorkerServerConnector browser} is a client. Integrate the
     * server and clients with this {@link DedicatedWorkerCommunicator}.
     *
     * #### [Inherited] {@link ICommunicator}
     * @copydoc ICommunicator
     */
    abstract class DedicatedWorkerCommunicator extends _CommunicatorBase {
        /**
         * @hidden
         */
        protected _Handle_message(event: MessageEvent): void;
    }
}
declare namespace samchon.protocol {
    /**
     * Communicator with master web-browser.
     *
     * {@link DedicatedWorkerClientDriver} is a class taking full charge of network communication with web browsers. This
     * {@link DedicatedWorkerClientDriver} object is always created by {@link DedicatedWorkerServer} class. When you got
     * this {@link DedicatedWorkerClientDriver} object from
     * {@link DedicatedWorkerServer.addClient DedicatedWorkerServer.addClient()}, then specify {@link IProtocol listener}
     * with the {@link DedicatedWorkerClientDriver.listen DedicatedWorkerClientDriver.listen()} method.
     *
     * #### Why DedicatedWorker be a server?
     * In JavaScript environment, there's no way to implement multi-threading function. Instead, JavaScript supports the
     * **Worker**, creating a new process. However, the **Worker** does not shares memory addresses. To integrate the
     * **Worker** with its master, only communication with string or binary data is allowed. Doesn't it seem like a network
     * communication? Furthermore, there's not any difference between the worker communication and network communication.
     * It's the reason why Samchon Framework considers the **Worker** as a network node.
     *
     * The class {@link DedicatedWorkerCommunicator} is designed make such relationship. From now on, DedicatedWorker is a
     * {@link DedicatedWorkerServer server} and {@link DedicatedWorkerServerConnector browser} is a client. Integrate the
     * server and clients with this {@link DedicatedWorkerCommunicator}.
     *
     * #### [Inherited] {@link IClientDriver}
     * @copydoc IClientDriver
     */
    class DedicatedWorkerClientDriver extends DedicatedWorkerCommunicator implements IClientDriver {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        listen(listener: IProtocol): void;
        /**
         * @inheritdoc
         */
        close(): void;
        /**
         * @inheritdoc
         */
        sendData(invoke: Invoke): void;
    }
}
declare namespace samchon.protocol {
    /**
     * A communicator for shared worker.
     *
     * {@link SharedWorkerCommunicator} is an abstract class for communication between SharedWorker and Web-browser. This
     * {@link SharedWorkerCommunicator} is specified to {@link SharedWorkerServerConnector} and
     * {@link SharedWorkerClientDriver} whether the remote system is a server (that my system is connecting to) or a client
     * (a client conneting to to my server).
     *
     * Note that, SharedWorker is a conception only existed in web-browser. This {@link SharedWorkerCommunicator} is not
     * supported in NodeJS. Only web-browser environment can utilize this {@link SharedWorkerCommunicator}.
     *
     * #### Why SharedWorker be a server?
     * SharedWorker, it allows only an instance (process) to be created whether the SharedWorker is declared in a browser
     * or multiple browsers. To integrate them, messages are being sent and received. Doesn't it seem like a relationship
     * between a server and clients? Thus, Samchon Framework consider the SharedWorker as a server and browsers as
     * clients.
     *
     * The class {@link SharedWorkerCommunicator} is designed make such relationship. From now on, SharedWorker is a
     * {@link SharedWorkerServer server} and {@link SharedWorkerServerConnector browsers} are clients. Integrate the
     * server and clients with this {@link SharedWorkerCommunicator}.
     *
     * #### [Inherited] {@link ICommunicator}
     * @copydoc ICommunicator
     */
    abstract class SharedWorkerCommunicator extends _CommunicatorBase {
        /**
         * @hidden
         */
        protected port_: MessagePort;
        /**
         * @inheritdoc
         */
        close(): void;
        /**
         * @inheritdoc
         */
        sendData(invoke: Invoke): void;
        /**
         * @hidden
         */
        protected _Handle_message(event: MessageEvent): void;
    }
}
declare namespace samchon.protocol {
    /**
     * Communicator with remote web-browser.
     *
     * {@link SharedWorkerClientDriver} is a class taking full charge of network communication with web browsers. This
     * {@link SharedWorkerClientDriver} object is always created by {@link SharedWorkerServer} class. When you got this
     * {@link SharedWorkerClientDriver} object from {@link SharedWorkerServer.addClient SharedWorkerServer.addClient()},
     * then specify {@link IProtocol listener} with the
     * {@link SharedWorkerClientDriver.listen SharedWorkerClientDriver.listen()} method.
     *
     * #### Why SharedWorker be a server?
     * SharedWorker, it allows only an instance (process) to be created whether the SharedWorker is declared in a browser
     * or multiple browsers. To integrate them, messages are being sent and received. Doesn't it seem like a relationship
     * between a server and clients? Thus, Samchon Framework consider the SharedWorker as a server and browsers as
     * clients.
     *
     * The class {@link SharedWorkerCommunicator} is designed make such relationship. From now on, SharedWorker is a
     * {@link SharedWorkerServer server} and {@link SharedWorkerServerConnector browsers} are clients. Integrate the
     * server and clients with this {@link SharedWorkerCommunicator}.
     *
     * #### [Inherited] {@link IClientDriver}
     * @copydoc IClientDriver
     */
    class SharedWorkerClientDriver extends SharedWorkerCommunicator implements IClientDriver {
        /**
         * @hidden
         */
        private listening_;
        /**
         * Construct from a MessagePort object.
         */
        constructor(port: MessagePort);
        /**
         * @inheritdoc
         */
        listen(listener: IProtocol): void;
    }
}
declare namespace samchon.protocol {
    /**
     * A communicator following Web-socket protocol.
     *
     * {@link WebCommunicator} is an abstract class following Web-socket protocol. This {@link WebCommunicator} class is
     * specified to {@link WebServerConnector} and {@link WebClientDriver} whether the remote system is a server (that my
     * system is connecting to) or a client (a client conneting to to my server).
     *
     * Note that, one of this or remote system is web-browser based, then there's not any alternative choice. Web browser
     * supports only Web-socket protocol. In that case, you've use this {@link WebCommunicator} class.
     *
     * #### [Inherited] {@link ICommunicator}
     * @copydoc ICommunicator
     */
    abstract class WebCommunicator extends _CommunicatorBase {
        /**
         * @hidden
         */
        protected connection_: websocket.connection;
        /**
         * @inheritdoc
         */
        close(): void;
        /**
         * @inheritdoc
         */
        sendData(invoke: Invoke): void;
        /**
         * @hidden
         */
        protected _Handle_message(message: websocket.IMessage): void;
        /**
         * @hidden
         */
        protected _Handle_close(): void;
    }
}
declare namespace samchon.protocol {
    /**
     * Communicator with remote web-client.
     *
     * {@link WebClientDriver} is a class taking full charge of network communication with remote client who follows
     * Web-socket protocol. This {@link WebClientDriver} object is always created by {@link WebServer} class. When you
     * got this {@link WebClientDriver} object from the {@link WebServer.addClient WebServer.addClient()}, then specify
     * {@link IProtocol listener} with the {@link WebClientDriver.listen WebClientDriver.listen()} method.
     *
     * Unlike other protocol, Web-socket protocol's clients notify two parameters on their connection;
     * {@link getSessionID session-id} and {@link getPath path}. The {@link getSessionID session-id} can be used to
     * identify *user* of each client, and the {@link getPath path} can be used which type of *service* that client wants.
     * In {@link service} module, you can see the best utilization case of them.
     * - {@link service.User}: utlization of the {@link getSessionID session-id}.
     * - {@link service.Service}: utilization of the {@link getPath path}.
     *
     * #### [Inherited] {@link IClientDriver}
     * @copydoc IClientDriver
     */
    class WebClientDriver extends WebCommunicator implements IClientDriver {
        /**
         * @hidden
         */
        private path_;
        /**
         * @hidden
         */
        private session_id_;
        /**
         * @hidden
         */
        private listening_;
        /**
         * Initialization Constructor.
         *
         * @param connection Connection driver, a socket for web-socket.
         * @param path Requested path.
         * @param session_id Session ID, an identifier of the remote client.
         */
        constructor(connection: websocket.connection, path: string, session_id: string);
        /**
         * @inheritdoc
         */
        listen(listener: IProtocol): void;
        /**
         * Get requested path.
         */
        getPath(): string;
        /**
         * Get session ID, an identifier of the remote client.
         */
        getSessionID(): string;
    }
}
declare namespace samchon.protocol {
    /**
     * An interface for communicator with remote client.
     *
     * {@link IClientDriver} is a type of {@link ICommunicator}, specified for communication with remote client who has
     * connected in a {@link IServer server}. It takes full charge of network communication with the remote client.
     *
     * The {@link IClientDriver} object is created and delivered from {@link IServer} and
     * {@link IServer.addClient IServer.addClient()}. Those are derived types from this {@link IClientDriver}, being
     * created by the matched {@link IServer} object.
     *
     * Protocol                | Derived Type                        | Created By
     * ------------------------|-------------------------------------|----------------------------
     * Samchon Framework's own | {@link ClientDriver}                | {@link Server}
     * Web-socket protocol     | {@link WebClientDriver}             | {@link WebServer}
     * DedicatedWorker         | {@link DedicatedWorkerClinetDriver} | {@link DedicatedWorkerServer}
     * SharedWorker            | {@link SharedWorkerClientDriver}    | {@link SharedWorkerServer}
     *
     * When you've got an {@link IClientDriver} object from the {@link IServer.addClient IServer.addClient()}, then
     * specify {@link IProtocol listener} with {@link IClient.listen IClient.listen()}. Whenever a replied message comes
     * from the remote system, the message will be converted to an {@link Invoke} class and the {@link Invoke} object
     * will be shifted to the {@link IProtocol listener}'s {@link IProtocol.replyData IProtocol.replyData()} method.
     * Below code is an example specifying and managing the {@link IProtocol listener} objects.
     *
     * - https://github.com/samchon/framework-examples/blob/master/calculator/calculator-server.ts
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @see {@link IServer}, {@link IProtocol}
     * @handbook [Protocol - Basic Components](https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components#iclientdriver)
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IClientDriver extends ICommunicator {
        /**
         * Listen message from the newly connected client.
         *
         * Starts listening message from the newly connected client. Replied message from the connected client will be
         * converted to {@link Invoke} classes and shifted to the *listener*'s {@link IProtocol.replyData replyData()}
         * method.
         *
         * @param listener A listener object to listen replied message from newly connected client in
         *				   {@link IProtocol.replyData replyData()} as an {@link Invoke} object.
         */
        listen(listener: IProtocol): void;
    }
}
declare namespace samchon.protocol {
    /**
     * An interface taking full charge of network communication.
     *
     * {@link ICommunicator} is an interface for communicator classes who take full charge of network communication with
     * remote system, without reference to whether the remote system is a server or a client. Type of the
     * {@link ICommunicator} is specified to {@link IServerConnector} and {@link IClientDriver} whether the remote system
     * is a server (that I've to connect) or a client (a client connected to my server).
     *
     * Whenever a replied message comes from the remote system, the message will be converted to an {@link Invoke} class
     * and the {@link Invoke} object will be shifted to the {@link IProtocol listener}'s
     * {@link IProtocol.replyData IProtocol.replyData()} method.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @see {@link IClientDriver}, {@link IServerConnector}, {@link IProtocol}
     * @handbook [Protocol - Basic Components](https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components#icommunicator)
     * @author Jeongho Nam <http://samchon.org>
     */
    interface ICommunicator extends IProtocol {
        /**
         * Callback function for connection closed.
         */
        onClose: Function;
        /**
         * Close connection.
         */
        close(): void;
        /**
         * Test connection.
         *
         * Test whether this {@link ICommunicator communicator} object is connected with the remote system. If the
         * connection is alive, then returns ```true```. Otherwise, the connection is not alive or this
         * {@link ICommunicator communicator has not connected with the remote system yet, then returns ```false```.
         *
         * @return true if connected, otherwise false.
         */
        isConnected(): boolean;
        /**
         * Send message.
         *
         * Send {@link Invoke} message to remote system.
         *
         * @param invoke An {@link Invoke} message to send.
         */
        sendData(invoke: protocol.Invoke): void;
        /**
         * Handle replied message.
         *
         * Handles replied {@link Invoke} message recived from remove system. The {@link Invoke} message will be shifted
         * to the {@link IProtocol listener}'s {@link IProtocol.replyData IProtocol.replyData()} by this method.
         *
         * @param invoke An {@link Invoke} message received from remote system.
         */
        replyData(invoke: protocol.Invoke): void;
    }
}
declare namespace samchon.protocol {
    /**
     * An interface for server connector.
     *
     * {@link IServerConnector} is a type of {@link ICommunicator}, specified for server connector classes who connect to
     * the remote server as a client. {@link IServerConnector} provides {@link connect connection method} and takes full
     * charge of network communication with the remote server.
     *
     * Declare specific type of {@link IServerConnector} from {@link IProtocol listener} and call the
     * {@link connect connect()} method. Then whenever a replied message comes from the remote system, the message will
     * be converted to an {@link Invoke} object and the {@link Invoke} object will be shifted to the
     * {@link IProtocol listener}'s {@link IProtocol.replyData IProtocol.replyData()} method. Below code is an example
     * connecting to remote server and interacting with it.
     *
     * - https://github.com/samchon/framework-examples/blob/master/calculator/calculator-application.ts
     *
     * Note that, protocol of this client and remote server must be matched. Thus, before determining specific type of
     * this {@link IServerConnector}, you've to consider which protocol and type the remote server follows.
     *
     * Protocol                | Derived Type                           | Connect to
     * ------------------------|----------------------------------------|-------------------------------
     * Samchon Framework's own | {@link ServerConnector}                | {@link Server}
     * Web-socket protocol     | {@link WebServerConnector}             | {@link WebServer}
     * DedicatedWorker         | {@link DedicatedWorkerServerConnector} | {@link DedicatedWorkerServer}
     * SharedWorker            | {@link SharedWorkerServerConnector}    | {@link SharedWorkerServer}
     *
     * ![Class Diagram](http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png)
     *
     * @see {@link IServer}, {@link IProtocol}
     * @handbook [Protocol - Basic Components](https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components#iserverconnector)
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IServerConnector extends ICommunicator {
        /**
         * Callback function for connection completed.
         *
         * When you call {@link connect connect()} and the connection has completed, then this call back function
         * {@link onConnect} will be called. Note that, if the listener of this {@link onConnect} is a member method of
         * some class, then you've use the ```bind```.
         */
        onConnect: Function;
        /**
         * Connect to a server.
         *
         * Connects to a server with specified *host* address and *port* number. After the connection has
         * succeeded, callback function {@link onConnect} is called. Listening data from the connected server also begins.
         * Replied messages from the connected server will be converted to {@link Invoke} classes and will be shifted to
         * the {@link WebCommunicator.listener listener}'s {@link IProtocol.replyData replyData()} method.
         *
         * If the connection fails immediately, either an event is dispatched or an exception is thrown: an error
         * event is dispatched if a host was specified, and an exception is thrown if no host was specified. Otherwise,
         * the status of the connection is reported by an event. If the socket is already connected, the existing
         * connection is closed first.
         *
         * @param ip The name or IP address of the host to connect to.
         *			 If no host is specified, the host that is contacted is the host where the calling file resides.
         *			 If you do not specify a host, use an event listener to determine whether the connection was
         *			 successful.
         * @param port The port number to connect to.
         */
        connect(ip: string, port: number): void;
    }
}
declare namespace samchon.protocol {
    /**
     * A server connector for DedicatedWorker.
     *
     * {@link DedicatedWorkerServerConnector} is a class connecting to SharedWorker and taking full charge of network
     * communication with the SharedWorker. Create an {@link DedicatedWorkerServer} instance from the
     * {@IProtocol listener} and call the {@link connect connect()} method.
     *
     * #### Why DedicatedWorker be a server?
     * In JavaScript environment, there's no way to implement multi-threading function. Instead, JavaScript supports the
     * **Worker**, creating a new process. However, the **Worker** does not shares memory addresses. To integrate the
     * **Worker** with its master, only communication with string or binary data is allowed. Doesn't it seem like a network
     * communication? Furthermore, there's not any difference between the worker communication and network communication.
     * It's the reason why Samchon Framework considers the **Worker** as a network node.
     *
     * The class {@link DedicatedWorkerCommunicator} is designed make such relationship. From now on, DedicatedWorker is a
     * {@link DedicatedWorkerServer server} and {@link DedicatedWorkerServerConnector browser} is a client. Integrate the
     * server and clients with this {@link DedicatedWorkerCommunicator}.
     *
     * #### [Inherited] {@link IServerConnector}
     * @copydoc IServerConnector
     */
    class DedicatedWorkerServerConnector extends DedicatedWorkerCommunicator implements IServerConnector {
        /**
         * @hidden
         */
        private worker_;
        /**
         * @inheritdoc
         */
        onConnect: Function;
        /**
         * Construct from *listener*.
         *
         * @param listener A listener object to listen replied message from newly connected client in
         *				   {@link IProtocol.replyData replyData()} as an {@link Invoke} object.
         */
        constructor(listener: IProtocol);
        /**
         * @inheritdoc
         */
        connect(jsFile: string): void;
        /**
         * @inheritdoc
         */
        close(): void;
        /**
         * @inheritdoc
         */
        sendData(invoke: Invoke): void;
    }
}
declare namespace samchon.protocol {
    /**
     * Server connnector.
     *
     * {@link ServerConnector} is a class connecting to remote server who follows Samchon Framework's own protocol and
     * taking full charge of network communication with the remote server. Create a {@link ServerConnector} instance from
     * the {@IProtocol listener} and call the {@link connect connect()} method.
     *
     * #### [Inherited] {@link IServerConnector}
     * @copydoc IServerConnector
     */
    class ServerConnector extends Communicator implements IServerConnector {
        /**
         * @inheritdoc
         */
        onConnect: Function;
        /**
         * Construct from *listener*.
         *
         * @param listener A listener object to listen replied message from newly connected client in
         *				   {@link IProtocol.replyData replyData()} as an {@link Invoke} object.
         */
        constructor(listener: IProtocol);
        /**
         * @inheritdoc
         */
        connect(ip: string, port: number): void;
        /**
         * @hidden
         */
        private _Handle_connect(...arg);
        /**
         * @hidden
         */
        private _Send_dummy_packet_repeatedly();
    }
}
declare namespace samchon.protocol {
    /**
     * A server connector for SharedWorker.
     *
     * {@link SharedWorkerServerConnector} is a class connecting to SharedWorker and taking full charge of network
     * communication with the SharedWorker. Create an {@link SharedWorkerServerConnector} instance from the
     * {@IProtocol listener} and call the {@link connect connect()} method.
     *
     * #### Why SharedWorker be a server?
     * SharedWorker, it allows only an instance (process) to be created whether the SharedWorker is declared in a browser
     * or multiple browsers. To integrate them, messages are being sent and received. Doesn't it seem like a relationship
     * between a server and clients? Thus, Samchon Framework consider the SharedWorker as a server and browsers as
     * clients.
     *
     * The class {@link SharedWorkerCommunicator} is designed make such relationship. From now on, SharedWorker is a
     * {@link SharedWorkerServer server} and {@link SharedWorkerServerConnector browsers} are clients. Integrate the
     * server and clients with this {@link SharedWorkerCommunicator}.
     *
     * #### [Inherited] {@link IServerConnector}
     * @copydoc IServerConnector
     */
    class SharedWorkerServerConnector extends SharedWorkerCommunicator implements IServerConnector {
        /**
         * @inheritdoc
         */
        onConnect: Function;
        /**
         * Construct from *listener*.
         *
         * @param listener A listener object to listen replied message from newly connected client in
         *				   {@link IProtocol.replyData replyData()} as an {@link Invoke} object.
         */
        constructor(listener: IProtocol);
        /**
         * Connect to a SharedWorker.
         *
         * Connects to a server with specified *jstFile* path. If a SharedWorker instance of the *jsFile* is not
         * constructed yet, then the SharedWorker will be newly constructed. Otherwise the SharedWorker already exists,
         * then connect to the SharedWorker. After those processes, callback function {@link onConnect} is called.
         * Listening data from the connected server also begins. Replied messages from the connected server will be
         * converted to {@link Invoke} classes and will be shifted to the {@link WebCommunicator.listener listener}'s
         * {@link IProtocol.replyData replyData()} method.
         *
         * If the connection fails immediately, either an event is dispatched or an exception is thrown: an error
         * event is dispatched if a host was specified, and an exception is thrown if no host was specified. Otherwise,
         * the status of the connection is reported by an event. If the socket is already connected, the existing
         * connection is closed first.
         *
         * @param jsFile Path of JavaScript file to execute who defines SharedWorker.
         */
        connect(jsFile: string): void;
    }
}
declare namespace samchon.protocol {
    /**
     * A server connector for web-socket protocol.
     *
     * {@link WebServerConnector} is a class connecting to remote server who follows Web-socket protocol and taking full
     * charge of network communication with the remote server. Create an {@link WebServerConnector} instance from the
     * {@IProtocol listener} and call the {@link connect connect()} method.
     *
     * #### [Inherited] {@link IServerConnector}
     * @copydoc IServerConnector
     */
    class WebServerConnector extends WebCommunicator implements IServerConnector {
        /**
         * @hidden
         */
        private browser_socket_;
        /**
         * @hidden
         */
        private node_client_;
        /**
         * @inheritdoc
         */
        onConnect: Function;
        /**
         * Construct from *listener*.
         *
         * @param listener A listener object to listen replied message from newly connected client in
         *				   {@link IProtocol.replyData replyData()} as an {@link Invoke} object.
         */
        constructor(listener: IProtocol);
        /**
         * Connect to a web server.
         *
         * Connects to a server with specified *host* address, *port* number and *path*. After the connection has
         * succeeded, callback function {@link onConnect} is called. Listening data from the connected server also begins.
         * Replied messages from the connected server will be converted to {@link Invoke} classes and will be shifted to
         * the {@link WebCommunicator.listener listener}'s {@link IProtocol.replyData replyData()} method.
         *
         * If the connection fails immediately, either an event is dispatched or an exception is thrown: an error
         * event is dispatched if a host was specified, and an exception is thrown if no host was specified. Otherwise,
         * the status of the connection is reported by an event. If the socket is already connected, the existing
         * connection is closed first.
         *
         * @param ip The name or IP address of the host to connect to.
         *			 If no host is specified, the host that is contacted is the host where the calling file resides.
         *			 If you do not specify a host, use an event listener to determine whether the connection was
         *			 successful.
         * @param port The port number to connect to.
         * @param path Path of service which you want.
         */
        connect(ip: string, port: number, path?: string): void;
        /**
         * @inheritdoc
         */
        close(): void;
        /**
         * @inheritdoc
         */
        sendData(invoke: Invoke): void;
        /**
         * @hidden
         */
        private _Handle_browser_connect(event);
        /**
         * @hidden
         */
        private _Handle_browser_message(event);
        /**
         * @hidden
         */
        private _Handle_node_connect(connection);
    }
}
declare namespace samchon.protocol {
    /**
     * A container of entity, and it's a type of entity, too.
     *
     * ![Class Diagram](http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_message_protocol.png)
     *
     * @handbook  [Protocol - Standard Message](https://github.com/samchon/framework/wiki/TypeScript-Protocol-Standard_Message)
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IEntityGroup<T extends IEntity> extends IEntity, std.base.Container<T> {
        /**
         * Construct data of the Entity from an XML object.
         *
         * Constructs the EntityArray's own member variables only from the input XML object.
         *
         * Do not consider about constructing children Entity objects' data in EntityArray::construct().
         * Those children Entity objects' data will constructed by their own construct() method. Even insertion
         * of XML objects representing children are done by abstract method of EntityArray::toXML().
         *
         * Constructs only data of EntityArray's own.
         */
        construct(xml: library.XML): void;
        /**
         * Factory method of a child Entity.
         *
         * EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct().
         *
         * @return A new child Entity belongs to EntityArray.
         */
        createChild(xml: library.XML): T;
        /**
         * Get iterator to element.
         *
         * Searches the container for an element with a identifier equivalent to *key* and returns an
         * iterator to it if found, otherwise it returns an iterator to {@link end end()}.
         *
         * Two keys are considered equivalent if the container's comparison object returns false reflexively
         * (i.e., no matter the order in which the elements are passed as arguments).
         *
         * Another member functions, {@link has has()} and {@link count count()}, can be used to just check
         * whether a particular *key* exists.
         *
         * @param key Key to be searched for
         * @return An iterator to the element, if an element with specified *key* is found, or
         *		   {@link end end()} otherwise.
         */
        /**
         * Whether have the item or not.
         *
         * Indicates whether a map has an item having the specified identifier.
         *
         * @param key Key value of the element whose mapped value is accessed.
         *
         * @return Whether the map has an item having the specified identifier.
         */
        has(key: any): boolean;
        /**
         * Count elements with a specific key.
         *
         * Searches the container for elements whose key is *key* and returns the number of elements found.
         *
         * @param key Key value to be searched for.
         *
         * @return The number of elements in the container with a *key*.
         */
        count(key: any): number;
        /**
         * Get an element
         *
         * Returns a reference to the mapped value of the element identified with *key*.
         *
         * @param key Key value of the element whose mapped value is accessed.
         *
         * @throw exception out of range
         *
         * @return A reference object of the mapped value (_Ty)
         */
        get(key: any): T;
        /**
         * A tag name of children objects.
         */
        CHILD_TAG(): string;
        /**
         * Get an XML object represents the EntityArray.
         *
         * Archives the EntityArray's own member variables only to the returned XML object.
         *
         * Do not consider about archiving children Entity objects' data in EntityArray::toXML().
         * Those children Entity objects will converted to XML object by their own toXML() method. The
         * insertion of XML objects representing children are done by abstract method of
         * EntityArray::toXML().
         *
         * Archives only data of EntityArray's own.
         */
        toXML(): library.XML;
    }
    /**
     * @hidden
     */
    namespace IEntityGroup {
        /**
         * @hidden
         */
        function construct<T extends IEntity>(entityGroup: IEntityGroup<T>, xml: library.XML, ...prohibited_names: string[]): void;
        /**
         * @hidden
         */
        function toXML<T extends IEntity>(group: IEntityGroup<T>, ...prohibited_names: string[]): library.XML;
        function has<T extends IEntity>(entityGroup: IEntityGroup<T>, key: any): boolean;
        function count<T extends IEntity>(entityGroup: IEntityGroup<T>, key: any): number;
        function get<T extends IEntity>(entityGroup: IEntityGroup<T>, key: any): T;
    }
}
declare namespace samchon.protocol {
    /**
     * @inheritdoc
     */
    abstract class EntityArray<T extends IEntity> extends std.Vector<T> implements IEntityGroup<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * @inheritdoc
         */
        abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        has(key: any): boolean;
        /**
         * @inheritdoc
         */
        count(key: any): number;
        /**
         * @inheritdoc
         */
        get(key: any): T;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        abstract CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.protocol {
    /**
     * @inheritdoc
     */
    abstract class EntityList<T extends IEntity> extends std.List<T> implements IEntityGroup<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * @inheritdoc
         */
        abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        has(key: any): boolean;
        /**
         * @inheritdoc
         */
        count(key: any): number;
        /**
         * @inheritdoc
         */
        get(key: any): T;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        abstract CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.protocol {
    /**
     * @inheritdoc
     */
    abstract class EntityDeque<T extends IEntity> extends std.Deque<T> implements IEntityGroup<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * @inheritdoc
         */
        abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
        has(key: any): boolean;
        /**
         * @inheritdoc
         */
        count(key: any): number;
        /**
         * @inheritdoc
         */
        get(key: any): T;
        /**
         * @inheritdoc
         */
        abstract TAG(): string;
        /**
         * @inheritdoc
         */
        abstract CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.protocol {
    /**
     * Standard message of network I/O.
     *
     * {@link Invoke} is a class used in network I/O in protocol package of Samchon Framework.
     *
     * The Invoke message has an XML structure like the result screen of provided example in below.
     * We can enjoy lots of benefits by the normalized and standardized message structure used in
     * network I/O.
     *
     * The greatest advantage is that we can make any type of network system, even how the system
     * is enourmously complicated. As network communication message is standardized, we only need to
     * concentrate on logical relationships between network systems. We can handle each network system
     * like a object (class) in OOD. And those relationships can be easily designed by using design
     * pattern.
     *
     * In Samchon Framework, you can make any type of network system with basic componenets
     * (IProtocol, IServer and ICommunicator) by implemens or inherits them, like designing
     * classes of S/W architecture.
     *
     * ![Class Diagram](http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_message_protocol.png)
     *
     * @see {@link IProtocol}
     * @author Jeongho Nam <http://samchon.org>
     */
    class Invoke extends EntityArray<InvokeParameter> {
        /**
         * Listener, represent function's name.
         */
        private listener;
        /**
         * Default Constructor.
         */
        constructor();
        constructor(listener: string);
        /**
         * Copy Constructor.
         *
         * @param invoke
         */
        constructor(invoke: Invoke);
        /**
         * Construct from listener and parametric values.
         *
         * @param listener
         * @param parameters
         */
        constructor(listener: string, ...parameters: Array<boolean | number | string | library.XML | Uint8Array>);
        /**
         * @inheritdoc
         */
        createChild(xml: library.XML): InvokeParameter;
        /**
         * Get listener.
         */
        getListener(): string;
        /**
         * Get arguments for Function.apply().
         *
         * @return An array containing values of the contained parameters.
         */
        getArguments(): Array<any>;
        /**
         * Apply to a matched function.
         *
         * @param obj Target object to find matched function.
         * @return Whether succeded to find matched function.
         */
        apply(obj: Object): boolean;
        /**
         * Apply to a function.
         *
         * @param thisArg Owner of the function.
         * @param func Function to call.
         */
        apply(thisArg: Object, func: Function): void;
        /**
         * @inheritdoc
         */
        TAG(): string;
        /**
         * @inheritdoc
         */
        CHILD_TAG(): string;
    }
}
declare namespace samchon.protocol {
    /**
     * A parameter belongs to an Invoke.
     *
     * ![Class Diagram](http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_message_protocol.png)
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class InvokeParameter extends Entity {
        /**
         * Name of the parameter.
         *
         * @details Optional property, can be omitted.
         */
        protected name: string;
        /**
         * Type of the parameter.
         */
        protected type: string;
        /**
         * Value of the parameter.
         */
        protected value: boolean | number | string | library.XML | Uint8Array;
        /**
         * Default Constructor.
         */
        constructor();
        constructor(val: boolean);
        constructor(val: number);
        constructor(val: string);
        constructor(val: library.XML);
        constructor(val: Uint8Array);
        /**
         * Construct from variable name and number value.
         *
         * @param name
         * @param val
         */
        constructor(name: string, val: boolean);
        constructor(name: string, val: number);
        constructor(name: string, val: string);
        constructor(name: string, val: library.XML);
        constructor(name: string, val: Uint8Array);
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        setValue(value: boolean): void;
        setValue(value: number): void;
        setValue(value: string): void;
        setValue(value: library.XML): void;
        setValue(value: Uint8Array): void;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * Get name.
         */
        getName(): string;
        /**
         * Get type.
         */
        getType(): string;
        /**
         * Get value.
         */
        getValue(): any;
        /**
         * @inheritdoc
         */
        TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.protocol {
    /**
     * An interface for {@link Invoke} message chain.
     *
     * {@link IProtocol} is an interface for {@link Invoke} message, which is standard message of network I/O in
     * *Samchon Framework*, chain. The {@link IProtocol} interface is used to network drivers and some classes which are
     * in a relationship of *Chain of Responsibility Pattern* with those network drivers.
     *
     * Implements {@link IProtocol} if the class sends and handles {@link Invoke} messages. Looking around source codes of
     * the *Samchon Framework*, especially *Templates*, you can find out that all the classes and modules handling
     * {@link Invoke} messages are always implementing this {@link IProtocol}.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @see {@link Invoke}
     * @handbook https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components#iprotocol
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IProtocol {
        /**
         * Sending message.
         *
         * Sends message to related system or shifts the responsibility to chain.
         *
         * @param invoke Invoke message to send
         */
        replyData(invoke: Invoke): void;
        /**
         * Handling replied message.
         *
         * Handles replied message or shifts the responsibility to chain.
         *
         * @param invoke An {@link Invoke} message has received.
         */
        sendData(invoke: Invoke): void;
    }
}
declare namespace samchon.protocol {
    /**
     * A DeidcatedWorker server.
     *
     * The {@link DedicatedWorkerServer} is an abstract class is realized to open a DedicatedWorker server and accept
     * web-browser client (master). Extends this {@link DedicatedWorkerServer} class and overrides
     * {@link addClient addClient()} method to define what to do with a newly connected
     * {@link DedicatedWorkerClientDriver remote client}.
     *
     * #### Why DedicatedWorker be a server?
     * In JavaScript environment, there's no way to implement multi-threading function. Instead, JavaScript supports the
     * **Worker**, creating a new process. However, the **Worker** does not shares memory addresses. To integrate the
     * **Worker** with its master, only communication with string or binary data is allowed. Doesn't it seem like a network
     * communication? Furthermore, there's not any difference between the worker communication and network communication.
     * It's the reason why Samchon Framework considers the **Worker** as a network node.
     *
     * The class {@link DedicatedWorkerCommunicator} is designed make such relationship. From now on, DedicatedWorker is a
     * {@link DedicatedWorkerServer server} and {@link DedicatedWorkerServerConnector browser} is a client. Integrate the
     * server and clients with this {@link DedicatedWorkerCommunicator}.
     *
     * #### [Inherited] {@link IServer}
     * @copydoc IServer
     */
    abstract class DedicatedWorkerServer implements IServer {
        /**
         * @inheritdoc
         */
        abstract addClient(driver: DedicatedWorkerClientDriver): void;
        /**
         * @inheritdoc
         */
        open(): void;
        /**
         * @inheritdoc
         */
        close(): void;
    }
}
declare namespace samchon.protocol {
    /**
     * A substitute {@link DedicatedWorkerServer}.
     *
     * The {@link DedicatedWorkerServerBase} is a substitute class who subrogates {@link DedicatedWorkerServer}'s
     * responsibility.
     *
     * #### [Inherited] {@link IServerBase}
     * @copydoc IServerBase
     */
    class DedicatedWorkerServerBase extends DedicatedWorkerServer implements IServerBase {
        /**
         * @hidden
         */
        private hooker_;
        /**
         * Construct from a *hooker*.
         *
         * @param hooker A hooker throwing responsibility of server's role.
         */
        constructor(hooker: IServer);
        /**
         * @inheritdoc
         */
        addClient(driver: IClientDriver): void;
    }
}
declare namespace samchon.protocol {
    /**
     * An interface for substitute server classes.
     *
     * {@link IServerBase} is an interface for substitue server classes who subrogate server's role.
     *
     * The easiest way to defining a server class is to extending one of them below, who implemented the {@link IServer}.
     * However, it is impossible (that is, if the class is already extending another class), you can instead implement
     * the {@link IServer} interface, create an {@link IServerBase} member, and write simple hooks to route calls into
     * the aggregated {@link IServerBase}.
     *
     * Protocol                | {@link IServer}               | {@link IServerBase}               | {@link IClientDriver}
     * ------------------------|-------------------------------|-----------------------------------|-------------------------------------
     * Samchon Framework's own | {@link Server}                | {@link ServerBase}                | {@link ClientDriver}
     * Web-socket protocol     | {@link WebServer}             | {@link WebServerBase}             | {@link WebClientDriver}
     * DedicatedWorker         | {@link DedicatedWorkerServer} | {@link DedicatedWorkerServerBase} | {@link DedicatedWorkerClientDriver}
     * SharedWorker            | {@link SharedWorkerServer}    | {@link SharedWorkerServerBase}    | {@link SharedWorkerClientDriver}
     *
     * After the hooking to aggregated {@link IServerBase} object, overrides {@link addClient addClient()} method who
     * accepts a newly connected client as an {@link IClientDriver} object. At last, call {@link open open()} method with
     * specified port number.
     *
     * ```typescript
     * class MyServer extends Something implements IServer
     * {
     * 	private server_base_: IServerBase = new WebServerBase(this);
     *
     * 	public addClient(driver: IClientDriver): void
     * 	{
     * 		// WHAT TO DO WHEN A CLIENT HAS CONNECTED
     * 	}
     *
     * 	public open(port: number): void
     * 	{
     * 		this.server_base_.open();
     * 	}
     * 	public close(): void
     * 	{
     * 		this.server_base_.close();
     * 	}
     * }
     * ```
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @see {@link IServer}, {@link IClientDriver}
     * @handbook [Protocol - Basic Components](https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components#iserverbase)
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IServerBase extends IServer {
    }
}
declare namespace samchon.protocol {
    /**
     * A server.
     *
     * The {@link Server} is an abstract class designed to open a server and accept clients who are following Samchon
     * Framework's own protocol. Extends this {@link Server} class and overrides {@link addClient addClient()} method to
     * define what to do with newly connected {@link ClientDriver remote clients}.
     *
     * #### [Inherited] {@link IServer}
     * @copydoc Server
     */
    abstract class Server implements IServer {
        /**
         * @hidden
         */
        private net_driver_;
        /**
         * @inheritdoc
         */
        abstract addClient(driver: ClientDriver): void;
        /**
         * @inheritdoc
         */
        open(port: number): void;
        /**
         * @inheritdoc
         */
        close(): void;
        /**
         * @hidden
         */
        private _Handle_connect(socket);
    }
}
declare namespace samchon.protocol {
    /**
     * A substitute {@link Server}.
     *
     * The {@link ServerBase} is a substitute class who subrogates {@link Server}'s responsibility.
     *
     * #### [Inherited] {@link IServerBase}
     * @copydoc IServerBase
     */
    class ServerBase extends Server implements IServerBase {
        /**
         * @hidden
         */
        private hooker_;
        /**
         * Construct from a *hooker*.
         *
         * @param hooker A hooker throwing responsibility of server's role.
         */
        constructor(hooker: IServer);
        /**
         * @inheritdoc
         */
        addClient(driver: IClientDriver): void;
    }
}
declare namespace samchon.protocol {
    /**
     * A SharedWorker server.
     *
     * The {@link SharedWorker} is an abstract class is realized to open a SharedWorker server and accept web-browser
     * clients. Extends this {@link SharedWorkerServer} class and overrides {@link addClient addClient()} method to
     * define what to do with newly connected {@link SharedWorkerClientDriver remote clients}.
     *
     * #### Why SharedWorker be a server?
     * SharedWorker, it allows only an instance (process) to be created whether the SharedWorker is declared in a browser
     * or multiple browsers. To integrate them, messages are being sent and received. Doesn't it seem like a relationship
     * between a server and clients? Thus, Samchon Framework consider the SharedWorker as a server and browsers as
     * clients.
     *
     * The class {@link SharedWorkerCommunicator} is designed make such relationship. From now on, SharedWorker is a
     * {@link SharedWorkerServer server} and {@link SharedWorkerServerConnector browsers} are clients. Integrate the
     * server and clients with this {@link SharedWorkerCommunicator}.
     *
     * #### [Inherited] {@link IServer}
     * @copydoc IServer
     */
    abstract class SharedWorkerServer implements IServer {
        /**
         * @inheritdoc
         */
        abstract addClient(driver: SharedWorkerClientDriver): void;
        /**
         * @inheritdoc
         */
        open(): void;
        /**
         * @inheritdoc
         */
        close(): void;
        /**
         * @hidden
         */
        private _Handle_connect(event);
    }
}
declare namespace samchon.protocol {
    /**
     * A substitute {@link SharedWorkerServer}.
     *
     * The {@link SharedWorkerServerBase} is a substitute class who subrogates {@link SharedWorkerServer}'s
     * responsibility.
     *
     * #### [Inherited] {@link IServerBase}
     * @copydoc IServerBase
     */
    class SharedWorkerServerBase extends SharedWorkerServer implements IServerBase {
        /**
         * @hidden
         */
        private hooker_;
        /**
         * Construct from a *hooker*.
         *
         * @param hooker A hooker throwing responsibility of server's role.
         */
        constructor(hooker: IServer);
        /**
         * @inheritdoc
         */
        addClient(driver: IClientDriver): void;
    }
}
declare namespace samchon.protocol {
    /**
     * A web server.
     *
     * The {@link WebServer} is an abstract class designed to open a server and accept clients who are following
     * web-socket protocol. Extends this {@link WebServer} class and overrides {@link addClient addClient()} method to
     * define what to do with newly connected {@link WebClientDriver remote clients}.
     *
     * #### [Inherited] {@link IServer}
     * @copydoc IServer
     */
    abstract class WebServer implements IServer {
        /**
         * @hidden
         */
        private http_server_;
        /**
         * @hidden
         */
        private sequence_;
        /**
         * @hidden
         */
        private my_port_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        abstract addClient(driver: WebClientDriver): void;
        /**
         * @inheritdoc
         */
        open(port: number): void;
        /**
         * @inheritdoc
         */
        close(): void;
        /**
         * @hidden
         */
        private _Handle_request(request);
        /**
         * @hidden
         */
        private _Fetch_session_id(cookies);
        /**
         * @hidden
         */
        private _Issue_session_id();
    }
}
declare namespace samchon.protocol {
    /**
     * A substitute {@link WebServer}.
     *
     * The {@link WebServerBase} is a substitute class who subrogates {@link WebServer}'s responsibility.
     *
     * #### [Inherited] {@link IServerBase}
     * @copydoc IServerBase
     */
    class WebServerBase extends WebServer implements IServerBase {
        /**
         * @hidden
         */
        private hooker_;
        /**
         * Construct from a *hooker*.
         *
         * @param hooker A hooker throwing responsibility of server's role.
         */
        constructor(hooker: IServer);
        /**
         * @inheritdoc
         */
        addClient(driver: IClientDriver): void;
    }
}
declare namespace samchon.protocol {
    /**
     * An interface for a server.
     *
     * {@link IServer} is an interfaec for server classes who are providing methods for {@link open opening a server} and
     * {@link IClientDriver accepting clients}.
     *
     * To open a server, extends one of derived class under below considedring which protocol to follow first. At next,
     * overrides {@link addClient addClient()} method who accepts a newly connected client as an {@link IClientDriver}
     * object. Then at last, call {@link open open()} method with specified port number.
     *
     * Protocol                | Derived Type                  | Related {@link IClientDriver}
     * ------------------------|-------------------------------|-------------------------------------
     * Samchon Framework's own | {@link Server}                | {@link ClientDriver}
     * Web-socket protocol     | {@link WebServer}             | {@link WebClientDriver}
     * DedicatedWorker         | {@link DedicatedWorkerServer} | {@link DedicatedWorkerClientDriver}
     * SharedWorker            | {@link SharedWorkerServer}    | {@link SharedWorkerClientDriver}
     *
     * Below codes and classes will be good examples for comprehending how to open a server and handle remote clients.
     * - https://github.com/samchon/framework-examples/blob/master/calculator/calculator-server.ts
     * - https://github.com/samchon/framework-examples/blob/master/chat-server/server.ts
     * - {@link service.Server}
     * - {@link external.ExternalClientArray}
     * - {@link slave.SlaveServer}
     *
     * If you're embarrased because your class already extended another one, then use {@link IServerBase}.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @see {@link IClientDriver}, {@link IServerBase}
     * @handbook [Protocol - Basic Components](https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components#iserver)
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IServer {
        /**
         * Open server.
         *
         * @param port Port number to open.
         */
        open(port: number): void;
        /**
         * Close server.
         *
         * Close opened server. All remote clients, have connected with this server, are also closed and their call back
         * functions, for closed connection, {@link IClientDriver.onClose} are also called.
         */
        close(): void;
        /**
         * Add a newly connected remote client.
         *
         * The {@link addClient addClient()} is an abstract method being called when a remote client is newly connected
         * with {@link IClientDriver} object who communicates with the remote system. Overrides this method and defines
         * what to do with the *driver*, a newly connected remote client.
         *
         * Below methods and example codes may be good for comprehending how to utilize this {@link addClient} method.
         *
         * - https://github.com/samchon/framework-examples/blob/master/calculator/calculator-server.ts
         * - https://github.com/samchon/framework-examples/blob/master/chat-server/server.ts
         * - {@link service.Server.addClient}
         * - {@link external.ExternalClientArray.addClient}
         * - {@link slave.SlaveServer.addClient}
         *
         * @param driver A {@link ICommunicator communicator} with (newly connected) remote client.
         */
        addClient(driver: IClientDriver): void;
    }
}
declare namespace samchon.templates.distributed {
    /**
     * Master of Distributed Processing System, a server accepting slave clients.
     *
     * The {@link DistributedClientArray} is an abstract class, derived from the {@link DistributedSystemArray} class,
     * opening a server accepting {@link DistributedSystem distributed clients}.
     *
     * Extends this {@link DistributedClientArray}, overrides {@link createServerBase createServerBase()} to determine
     * which protocol to follow and {@link createExternalClient createExternalClient()} creating child
     * {@link DistributedSystem} object. After the extending and overridings, open this server using the
     * {@link open open()} method.
     *
     * #### [Inherited] {@link DistributedSystemArray}
     * @copydoc DistributedSystemArray
     */
    abstract class DistributedClientArray<System extends DistributedSystem> extends DistributedSystemArray<System> implements external.IExternalClientArray<System> {
        /**
         * @hidden
         */
        private server_base_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method creating {@link IServerBase} object.
         *
         * This method {@link createServerBase createServerBase()} determines which protocol is used in this server,
         * {@link ExternalClientArray}. If the protocol is determined, then {@link ExternalSystem external clients} who
         * may connect to {@link ExternalClientArray this server} must follow the specified protocol.
         *
         * Overrides the {@link createServerBase createServerBase()} method to create and return one of them:
         *
         * - {@link ServerBase}
         * - {@link WebServerBase}
         * - {@link SharedWorkerServerBase}
         *
         * @return A new {@link IServerBase} object.
         */
        protected abstract createServerBase(): protocol.IServerBase;
        /**
         * Add a newly connected remote client.
         *
         * When a {@link IClientDriver remote client} connects to this *master server of parallel processing system*,
         * then this {@link ParallelClientArray} creates a child {@link ParallelSystem parallel client} object through
         * the {@link createExternalClient createExternalClient()} method and {@link insert inserts} it.
         *
         * @param driver A communicator for external client.
         */
        addClient(driver: protocol.IClientDriver): void;
        /**
         * (Deprecated) Factory method creating child object.
         *
         * The method {@link createChild createChild()} is deprecated. Don't use and override this.
         *
         * Note that, the {@link ParallelClientArray} is a server accepting {@link ParallelSystem parallel clients}.
         * There's no way to creating the {@link ParallelSystem parallel clients} in advance before opening the server.
         *
         * @param xml An {@link XML} object represents the child {@link ParallelSystem} object.
         * @return ```null```
         */
        createChild(xml: library.XML): System;
        /**
         * Factory method creating {@link DistributedSystem} object.
         *
         * The method {@link createExternalClient createExternalClient()} is a factory method creating a child
         * {@link ParallelSystem} object, that is called whenever a parallel client has connected, by
         * {@link addClient addClient()}.
         *
         * Overrides this {@link createExternalClient} method and creates a type of {@link DistributedSystem} object with
         * the *driver* that communicates with the parallel client. After the creation, returns the object. Then whenever
         * a parallel client has connected, matched {@link DistributedSystem} object will be constructed and
         * {@link insert inserted} into this {@link DistributedSystemArray} object.
         *
         * @param driver A communicator with the parallel client.
         * @return A newly created {@link ParallelSystem} object.
         */
        protected abstract createExternalClient(driver: protocol.IClientDriver): System;
        /**
         * @inheritdoc
         */
        open(port: number): void;
        /**
         * @inheritdoc
         */
        close(): void;
    }
}
declare namespace samchon.templates.distributed {
    /**
     * Mediator of Distributed Processing System, a server accepting slave clients.
     *
     * The {@link DistributedClientArrayMediator} is an abstract class, derived from {@link DistributedSystemArrayMediator}
     * class, opening a server accepting {@link DistributedSystem distributed clients} as a **master**.
     *
     * Extends this {@link DistributedClientArrayMediator}, overrides {@link createServerBase createServerBase()} to
     * determine which protocol to follow and {@link createExternalClient createExternalClient()} creating child
     * {@link DistributedSystem} object. After the extending and overridings, open this server using the
     * {@link open open()} method.
     *
     * #### [Inherited] {@link DistributedSystemArrayMediator}
     * @copydoc DistributedSystemArrayMediator
     */
    abstract class DistributedClientArrayMediator<System extends DistributedSystem> extends DistributedSystemArrayMediator<System> implements external.IExternalClientArray<System> {
        /**
         * A subrogator of {@link IServer server}'s role instead of this {@link ExternalClientArray}.
         */
        private server_base_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method creating {@link IServerBase} object.
         *
         * This method {@link createServerBase createServerBase()} determines which protocol is used in this
         * {@link DistributedClientArrayMediator} object as a **master**. If the protocol is determined, then
         * {@link DistributedSystem distributed clients} who may connect to {@link DistributedClientArrayMediator this
         * server} must follow the specified protocol.
         *
         * Overrides the {@link createServerBase createServerBase()} method to create and return one of them:
         *
         * - {@link ServerBase}
         * - {@link WebServerBase}
         * - {@link SharedWorkerServerBase}
         *
         * @return A new {@link IServerBase} object.
         */
        protected abstract createServerBase(): protocol.IServerBase;
        /**
         * Add a newly connected remote client.
         *
         * When a {@link IClientDriver remote client} connects to this *master server of distributed processing system*,
         * then this {@link DistributedClientArrayMediator} creates a child {@link Distributed distributed client} object
         * through the {@link createExternalClient createExternalClient()} method.
         *
         * @param driver A communicator for external client.
         */
        addClient(driver: protocol.IClientDriver): void;
        /**
         * (Deprecated) Factory method creating child object.
         *
         * The method {@link createChild createChild()} is deprecated. Don't use and override this.
         *
         * Note that, the {@link DistributedClientArrayMediator} is a server accepting {@link DistributedSystem distributed
         * clients} as a master. There's no way to creating the {@link DistributedSystem distributed clients} in advance
         * before opening the server.
         *
         * @param xml An {@link XML} object represents the child {@link DistributedSystem} object.
         * @return null
         */
        createChild(xml: library.XML): System;
        /**
         * Factory method creating {@link DistributedSystem} object.
         *
         * The method {@link createExternalClient createExternalClient()} is a factory method creating a child
         * {@link DistributedSystem} object, that is called whenever a distributed client has connected, by
         * {@link addClient addClient()}.
         *
         * Overrides this {@link createExternalClient} method and creates a type of {@link DistributedSystem} object with
         * the *driver* that communicates with the distributed client. After the creation, returns the object. Then whenever
         * a distributed client has connected, matched {@link DistributedSystem} object will be constructed and
         * {@link insert inserted} into this {@link DistributedClientArrayMediator} object.
         *
         * @param driver A communicator with the distributed client.
         * @return A newly created {@link DistributedSystem} object.
         */
        protected abstract createExternalClient(driver: protocol.IClientDriver): System;
        /**
         * @inheritdoc
         */
        open(port: number): void;
        /**
         * @inheritdoc
         */
        close(): void;
    }
}
declare namespace samchon.templates.external {
    /**
     * An external system driver.
     *
     * The {@link ExternalSystem} class represents an external system, connected and interact with this system.
     * {@link ExternalSystem} takes full charge of network communication with the remote, external system have connected.
     * Replied {@link Invoke} messages from the external system is shifted to and processed in, children elements of this
     * class, {@link ExternalSystemRole} objects.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_external_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_external_system.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * #### Bridge & Proxy Pattern
     * The {@link ExternalSystem} class can be a *bridge* for *logical proxy*. In framework within user,
     * which {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is *which can be done*.
     *
     * By using the *logical proxy*, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}.
     *
     * <ul>
     *	<li>
     *		{@link ExternalSystemRole} can be accessed from {@link ExternalSystemArray} directly, without inteferring
     *		from {@link ExternalSystem}, with {@link ExternalSystemArray.getRole}.
     *	</li>
     *	<li>
     *		When you want to send an {@link Invoke} message to the belonged {@link ExternalSystem system}, just call
     *		{@link ExternalSystemRole.sendData ExternalSystemRole.sendData()}. Then, the message will be sent to the
     *		external system.
     *	</li>
     *	<li> Those strategy is called *Bridge Pattern* and *Proxy Pattern*. </li>
     * </ul>
     *
     * @handbook [Templates - External System](https://github.com/samchon/framework/wiki/TypeScript-Templates-External_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ExternalSystem extends protocol.EntityDequeCollection<ExternalSystemRole> implements protocol.IProtocol {
        /**
         * The name represents external system have connected.
         */
        protected name: string;
        /**
         * @hidden
         */
        private system_array_;
        /**
         * @hidden
         */
        private communicator_;
        /**
         * Construct from parent {@link ExternalSystemArray}.
         *
         * @param systemArray The parent {@link ExternalSystemArray} object.
         */
        constructor(systemArray: ExternalSystemArray<ExternalSystem>);
        /**
         * Constrct from parent {@link ExternalSystemArray} and communicator.
         *
         * @param systemArray The parent {@link ExternalSystemArray} object.
         * @param communicator Communicator with the remote, external system.
         */
        constructor(systemArray: ExternalSystemArray<ExternalSystem>, communicator: protocol.IClientDriver);
        /**
         * Default Destructor.
         *
         * This {@link destructor destructor()} method is called when the {@link ExternalSystem} object is destructed and
         * the {@link ExternalSystem} object is destructed when connection with the remote system is closed or this
         * {@link ExternalSystem} object is {@link ExternalSystemArray.erase erased} from its parent
         * {@link ExternalSystemArray} object.
         *
         * Note that, don't call this {@link destructor destructor()} method by yourself. It must be called automatically
         * by those *destruction* cases. Also, if your derived {@link ExternalSystem} class has something to do on the
         * *destruction*, then overrides this {@link destructor destructor()} method and defines the something to do.
         * Overriding this {@link destructor destructor()}, don't forget to calling ```super.destructor();``` on tail.
         *
         * ```typescript
         * class SomeSystem extends templates.external.ExternalSystem
         * {
         *     protected destructor(): void
         *     {
         *         // DO SOMETHING
         *         this.do_something();
         *
         *         // CALL SUPER.DESTRUCTOR() ON TAIL. DON'T FORGET THIS
         *         super.destructor();
         *     }
         * }
         * ```
         */
        protected destructor(): void;
        /**
         * @hidden
         */
        private _Handle_close();
        /**
         * Get parent {@link ExternalSystemArray} object.
         */
        getSystemArray(): ExternalSystemArray<ExternalSystem>;
        /**
         * Get parent {@link ExternalSystemArray} object.
         */
        getSystemArray<SystemArray extends ExternalSystemArray<ExternalSystem>>(): SystemArray;
        /**
         * Identifier of {@link ExternalSystem} is its {@link name}.
         *
         * @return name.
         */
        key(): string;
        /**
         * Get {@link name}.
         */
        getName(): string;
        /**
         * @hidden
         */
        /**
         * @hidden
         */
        protected communicator: protocol.ICommunicator;
        /**
         * Close connection.
         */
        close(): void;
        /**
         * Send {@link Invoke} message to external system.
         *
         * @param invoke An {@link Invoke} message to send.
         */
        sendData(invoke: protocol.Invoke): void;
        /**
         * Handle an {@Invoke} message has received.
         *
         * @param invoke An {@link Invoke} message have received.
         */
        replyData(invoke: protocol.Invoke): void;
        /**
         * Tag name of the {@link ExternalSystem} in {@link XML}.
         *
         * @return *system*.
         */
        TAG(): string;
        /**
         * Tag name of {@link ExternalSystemRole children elements} belonged to the {@link ExternalSystem} in {@link XML}.
         *
         * @return *role*.
         */
        CHILD_TAG(): string;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * A driver for a parallel slave system.
     *
     * The {@link ParallelSystem} is an abstract class represents a **slave** system in *Parallel Processing System*,
     * connected with this **master** system. This {@link ParallelSystem} takes full charge of network communication with
     * the remote, parallel **slave** system has connected.
     *
     * When a *parallel process* is requested (by {@link ParallelSystemArray.sendSegmentData} or
     * {@link ParallelSystemArray.sendPieceData}), the number of pieces to be allocated to a {@link ParallelSystem} is
     * turn on its {@link getPerformance performance index}. Higher {@link getPerformance performance index}, then
     * more pieces are requested. The {@link getPerformance performance index} is revaluated whenever a *parallel process*
     * has completed, basic on the execution time and number of pieces. You can sugguest or enforce the
     * {@link getPerformance performance index} with {@link setPerformance} or {@link enforcePerformance}.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_parallel_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_parallel_system.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * #### Bridge & Proxy Pattern
     * This class {@link ParallelSystem} is derived from the {@link ExternalSystem} class. Thus, you can take advantage
     * of the *Bridge & Proxy Pattern* in this {@link ParallelSystem} class. If a process to request is not the
     * *parallel process* (to be distrubted to all slaves), but the **exclusive process** handled in a system, then it
     * may better to utilizing the *Bridge & Proxy Pattern*:
     *
     * The {@link ExternalSystem} class can be a *bridge* for *logical proxy*. In framework within user,
     * which {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is *which can be done*.
     *
     * By using the *logical proxy*, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}.
     *
     * <ul>
     *	<li>
     *		{@link ExternalSystemRole} can be accessed from {@link ExternalSystemArray} directly, without inteferring
     *		from {@link ExternalSystem}, with {@link ExternalSystemArray.getRole}.
     *	</li>
     *	<li>
     *		When you want to send an {@link Invoke} message to the belonged {@link ExternalSystem system}, just call
     *		{@link ExternalSystemRole.sendData ExternalSystemRole.sendData()}. Then, the message will be sent to the
     *		external system.
     *	</li>
     *	<li> Those strategy is called *Bridge Pattern* and *Proxy Pattern*. </li>
     * </ul>
     *
     * @handbook [Templates - Parallel System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Parallel_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ParallelSystem extends external.ExternalSystem {
        /**
         * @hidden
         */
        private progress_list_;
        /**
         * @hidden
         */
        private history_list_;
        /**
         * @hidden
         */
        private exclude_;
        /**
         * @hidden
         */
        private performance;
        /**
         * @hidden
         */
        private enforced_;
        /**
         * Construct from parent {@link ParallelSystemArray}.
         *
         * @param systemArray The parent {@link ParallelSystemArray} object.
         */
        constructor(systemArray: ParallelSystemArray<ParallelSystem>);
        /**
         * Construct from parent {@link ParallelSystemArray} and communicator.
         *
         * @param systemArray The parent {@link ParallelSystemArray} object.
         * @param communicator A communicator communicates with remote, the external system.
         */
        constructor(systemArray: ParallelSystemArray<ParallelSystem>, communicator: protocol.IClientDriver);
        /**
         * Default Destructor.
         *
         * This {@link destructor destructor()} method is called when the {@link ParallelSystem} object is destructed and
         * the {@link ParallelSystem} object is destructed when connection with the remote system is closed or this
         * {@link ParallelSystem} object is {@link ParallelSystemArray.erase erased} from its parent
         * {@link ParallelSystemArray} object.
         *
         * You may think if there're some *parallel processes* have requested but not completed yet, then it would be a
         * critical problem because the *parallel processes* will not complete forever. Do not worry. The critical problem
         * does not happen. After the destruction, the remained *parallel processes* will be shifted to and proceeded in
         * other {@link ParallelSystem} objects.
         *
         * Note that, don't call this {@link destructor destructor()} method by yourself. It must be called automatically
         * by those *destruction* cases. Also, if your derived {@link ParallelSystem} class has something to do on the
         * *destruction*, then overrides this {@link destructor destructor()} method and defines the something to do.
         * Overriding this {@link destructor destructor()}, don't forget to calling ```super.destructor();``` on tail.
         *
         * ```typescript
         * class SomeSystem extends protocol.external.ExternalSystem
         * {
         *     protected destructor(): void
         *     {
         *         // DO SOMETHING
         *         this.do_something();
         *
         *         // CALL SUPER.DESTRUCTOR() ON TAIL. DON'T FORGET THIS
         *         super.destructor();
         *     }
         * }
         * ```
         */
        protected destructor(): void;
        /**
         * Get manager of this object.
         *
         * @return The parent {@link ParallelSystemArray} object.
         */
        getSystemArray(): ParallelSystemArray<ParallelSystem>;
        /**
         * Get manager of this object.
         *
         * @return The parent {@link ParallelSystemArray} object.
         */
        getSystemArray<SystemArray extends ParallelSystemArray<ParallelSystem>>(): SystemArray;
        /**
         * Get performance index.
         *
         * Get *performance index* that indicates how much fast the remote system is.
         *
         * If this {@link ParallelSystem parallel system} does not have any {@link Invoke} message had handled, then the
         * *performance index* will be ```1.0```, which means default and average value between all {@link ParallelSystem}
         * instances (that are belonged to a same {@link ParallelSystemArray} object).
         *
         * You can specify this *performance index* by yourself but notice that, if the *performance index* is higher
         * than other {@link ParallelSystem} objects, then this {@link ParallelSystem parallel system} will be ordered to
         * handle more processes than other {@link ParallelSystem} objects. Otherwise, the *performance index* is lower
         * than others, of course, less processes will be delivered.
         *
         * - {@link setPerformance setPerformance()}
         * - {@link enforcePerformance enforcePerformance()}
         *
         * Unless {@link enforcePerformance enforcePerformance()} is called, This *performance index* is **revaluated**
         * whenever user calls one of them below.
         *
         * - {@link ParallelSystemArray.sendSegmentData ParallelSystemArray.sendSegmentData()}
         * - {@link ParallelSystemArray.sendPieceData ParallelSystemArray.sendPieceData()}
         * - {@link DistributedProcess.sendData DistributedProcess.sendData()}.
         *
         * @return Performance index.
         */
        getPerformance(): number;
        /**
         * Set performance index.
         *
         * Set *performance index* that indicates how much fast the remote system is. This *performance index* can be
         * **revaulated**.
         *
         * Note that, initial and average *performance index* of {@link ParallelSystem} objects are ```1.0```. If the
         * *performance index* is higher than other {@link ParallelSystem} objects, then this {@link ParallelSystem} will
         * be ordered to handle more processes than other {@link ParallelSystem} objects. Otherwise, the
         * *performance index* is lower than others, of course, less processes will be delivered.
         *
         * Unlike {@link enforcePerformance}, configuring *performance index* by this {@link setPerformance} allows
         * **revaluation**. This **revaluation** prevents wrong valuation from user. For example, you *mis-valuated* the
         * *performance index*. The remote system is much faster than any other, but you estimated it to the slowest one.
         * It looks like a terrible case that causes {@link ParallelSystemArray entire parallel systems} to be slower,
         * however, don't mind. The system will direct to the *propriate performance index* eventually with the
         * **revaluation** by following methods.
         *
         * - {@link ParallelSystemArray.sendSegmentData ParallelSystemArray.sendSegmentData()}
         * - {@link ParallelSystemArray.sendPieceData ParallelSystemArray.sendPieceData()}
         * - {@link DistributedProcess.sendData DistributedProcess.sendData()}.
         *
         * @param val New performance index, but can be revaluated.
         */
        setPerformance(val: number): void;
        /**
         * Enforce performance index.
         *
         * Enforce *performance index* that indicates how much fast the remote system is. The *performance index* will be
         * fixed, never be **revaluated**.
         *
         * Note that, initial and average *performance index* of {@link ParallelSystem} objects are ```1.0```. If the
         * *performance index* is higher than other {@link ParallelSystem} objects, then this {@link ParallelSystem} will
         * be ordered to handle more processes than other {@link ParallelSystem} objects. Otherwise, the
         * *performance index* is lower than others, of course, less processes will be delivered.
         *
         * The difference between {@link setPerformance} and this {@link enforcePerformance} is allowing **revaluation**
         * or not. This {@link enforcePerformance} does not allow the **revaluation**. The *performance index* is clearly
         * fixed and never be changed by the **revaluation**. But you've to keep in mind that, you can't avoid the
         * **mis-valuation** with this {@link enforcePerformance}.
         *
         * For example, there's a remote system much faster than any other, but you **mis-estimated** it to the slowest.
         * In that case, there's no way. The {@link ParallelSystemArray entire parallel systems} will be slower by the
         * **mis-valuation**. By the reason, using {@link enforcePerformance}, it's recommended only when you can clearly
         * certain the *performance index*. If you can't certain the *performance index* but want to recommend, then use
         * {@link setPerformance} instead.
         *
         * @param val New performance index to be fixed.
         */
        enforcePerformance(val: number): void;
        /**
         * @hidden
         */
        private _Send_piece_data(invoke, first, last);
        /**
         * @hidden
         */
        private _Reply_data(invoke);
        /**
         * @hidden
         */
        protected _Report_history(xml: library.XML): void;
        /**
         * @hidden
         */
        protected _Send_back_history(invoke: protocol.Invoke, history: slave.InvokeHistory): void;
    }
}
declare namespace samchon.templates.distributed {
    /**
     * A driver for a distributed slave system.
     *
     * The {@link DistributedSystem} is an abstract class represents a **slave** system in *Distributed Processing System*,
     * connected with this **master** system. This {@link DistributedSystem} takes full charge of network communication
     * with the remote, distributed **slave** system has connected.
     *
     * This {@link DistributedSystem} has a {@link getPerformance performance index} that indicates how much the **slave**
     * system is fast. The {@link getPerformance performance index} is referenced and revaluated whenever those methods
     * are called:
     *
     * - Requesting a *parallel process*
     *   - {@link DistributedSystemArray.sendSegmentData}
     *   - {@link DistributedSystemArray.sendPieceData}
     * - Requesting a *distributed process*: {@link DistributedProcess.sendData}
     *
     * Note that, this {@link DistributedSystem} class derived from the {@link ExternalSystem} class. Thus, this
     * {@link DistributedSystem} can also have children {@link ExternalSystemRole} objects exclusively. However, the
     * children {@link ExternalSystemRole roles} objects are different with the {@link DistributedProcess}. The
     * domestic {@link ExternalSystemRole roles} are belonged to only a specific {@link DistributedSystem} object.
     * Otherwise, the {@link DistributedProcess} objects are belonged to a {@link DistributedSystemArray} object.
     * Furthermore, the relationship between this {@link DistributedSystem} and {@link DistributedProcess} classes are
     * **M: N Associative**.
     *
     * Articles     | {@link DistributedProcess}     | {@link ExternalSystemRole}
     * -------------|--------------------------------|----------------------------
     * Belonged to  | {@link DistributedSystemArray} | {@link DistributedSystem}
     * Relationship | M: N Associative               | 1: N Composite
     * Ownership    | References                     | Exclusive possession
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_distributed_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_distributed_system.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @handbook [Templates - Distributed System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Distributed_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class DistributedSystem extends parallel.ParallelSystem {
        /**
         * Construct from parent {@link DistributedSystemArray}.
         *
         * @param systemArray The parent {@link DistributedSystemArray} object.
         */
        constructor(systemArray: DistributedSystemArray<DistributedSystem>);
        /**
         * Constrct from parent {@link DistributedSystemArray} and communicator.
         *
         * @param systemArray The parent {@link DistributedSystemArray} object.
         * @param communicator A communicator communicates with remote, the external system.
         */
        constructor(systemArray: DistributedSystemArray<DistributedSystem>, communicator: protocol.IClientDriver);
        /**
         * Factory method creating a {@link ExternalSystemRole child} object.
         *
         * In {@link distributed} module, the process class {@link DistributedProcess} is not belonged to a specific
         * {@link DistributedSystem} object. It only belongs to a {@link DistributedSystemArray} object and has a
         * **M: N Associative Relationship** between this {@link DistributedSystem} class.
         *
         * By that reason, it's the normal case that the {@link DistributedSystem} object does not have any children
         * {@link ExternalSystemRole} object. Thus, default {@link createChild} returns ```null```.
         *
         * However, if you want a {@link DistributedSystem} to have its own domestic {@link ExternalSystemRole} objects
         * without reference to the {@link DistributedProcess} objects, it is possible. Creates and returns the
         * domestic {@link ExternalSystemRole} object.
         *
         * @param xml {@link XML} represents the {@link ExternalSystemRole child} object.
         * @return A newly created {@link ExternalSystemRole} object or ```null```.
         */
        createChild(xml: library.XML): external.ExternalSystemRole;
        /**
         * Get manager of this object.
         *
         * @return The parent {@link DistributedSystemArray} object.
         */
        getSystemArray(): DistributedSystemArray<DistributedSystem>;
        /**
         * Get manager of this object.
         *
         * @return The parent {@link DistributedSystemArray} object.
         */
        getSystemArray<SystemArray extends DistributedSystemArray<DistributedSystem>>(): SystemArray;
        /**
         * @hidden
         */
        private _Compute_average_elapsed_time();
        /**
         * @inheritdoc
         */
        replyData(invoke: protocol.Invoke): void;
        /**
         * @hidden
         */
        protected _Report_history(xml: library.XML): void;
        /**
         * @hidden
         */
        protected _Send_back_history(invoke: protocol.Invoke, history: slave.InvokeHistory): void;
    }
}
declare namespace samchon.templates.distributed {
    /**
     * A driver for distributed slave server.
     *
     * The {@link DistributedServer} is an abstract class, derived from the {@link DistributedSystem} class, connecting to
     * remote, distributed **slave** server. Extends this {@link DistributedServer} class and overrides the
     * {@link createServerConnector createServerConnector()} method following which protocol the **slave** server uses.
     *
     * #### [Inheritdoc] {@link DistributedSystem}
     * @copydoc DistributedSystem
     */
    abstract class DistributedServer extends DistributedSystem implements external.IExternalServer {
        /**
         * IP address of target external system to connect.
         */
        protected ip: string;
        /**
         * Port number of target external system to connect.
         */
        protected port: number;
        /**
         * Construct from parent {@link DistributedSystemArray}.
         *
         * @param systemArray The parent {@link DistributedSystemArray} object.
         */
        constructor(systemArray: DistributedSystemArray<DistributedSystem>);
        /**
         * Factory method creating {@link IServerConnector} object.
         *
         * The {@link createServerConnector createServerConnector()} is an abstract method creating
         * {@link IServerConnector} object. Overrides and returns one of them, considering which protocol the slave server
         * follows:
         *
         * - {@link ServerConnector}
         * - {@link WebServerConnector}
         * - {@link DedicatedWorkerServerConnector}
         * - {@link SharedWorkerServerConnector}
         *
         * @return A newly created {@link IServerConnector} object.
         */
        protected abstract createServerConnector(): protocol.IServerConnector;
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.distributed {
    /**
     * Master of Distributed Processing System, a client connecting to slave servers.
     *
     * The {@link DistributedServerArray} is an abstract class, derived from the {@link DistributedSystemArray} class,
     * connecting to {@link IDistributedServer distributed servers}.
     *
     * Extends this {@link DistributedServerArray} and overrides {@link createChild createChild()} method creating child
     * {@link IDistributedServer} object. After the extending and overriding, construct children {@link IDistributedServer}
     * objects and call the {@link connect connect()} method.
     *
     * #### [Inherited] {@link DistributedSystemArray}
     * @copydoc DistributedSystemArray
     */
    abstract class DistributedServerArray<System extends IDistributedServer> extends DistributedSystemArray<System> implements external.IExternalServerArray<System> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.distributed {
    /**
     * Mediator of Distributed Processing System, a client connecting to slave servers.
     *
     * The {@link DistributedServerArrayMediator} is an abstract class, derived from {@link DistributedSystemArrayMediator}
     * class, connecting to {@link IDistributedServer distributed servers}.
     *
     * Extends this {@link DistributedServerArrayMediator} and overrides {@link createChild createChild()} method creating
     * child {@link IDistributedServer} object. After the extending and overriding, construct children
     * {@link IDistributedServer} objects and call the {@link connect connect()} method.
     *
     * #### [Inherited] {@link DistributedSystemArrayMediator}
     * @copydoc DistributedSystemArrayMediator
     */
    abstract class DistributedServerArrayMediator<System extends IDistributedServer> extends DistributedSystemArrayMediator<System> implements external.IExternalServerArray<System> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.distributed {
    /**
     * Master of Distributed Processing System, be a server and client at the same time.
     *
     * The {@link DistributedServerClientArray} is an abstract class, derived from the {@link DistributedSystemArray}
     * class, opening a server accepting {@link Distributed distributed clients} and being a client connecting to
     * {@link IDistributedServer distributed servers} at the same time.
     *
     * Extends this {@link DistributedServerClientArray} and overrides below methods. After the overridings, open server
     * with {@link open open()} method and connect to {@link IDistributedServer distributed servers} through the
     * {@link connect connect()} method.
     *
     * - {@link createServerBase createServerBase()}
     * - {@link createExternalClient createExternalClient()}
     * - {@link createExternalServer createExternalServer()}
     *
     * #### [Inherited] {@link DistributedSystemArray}
     * @copydoc DistributedSystemArray
     */
    abstract class DistributedServerClientArray<System extends DistributedSystem> extends DistributedClientArray<System> implements external.IExternalServerClientArray<System> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method of a child Entity.
         *
         * This method is migrated to {@link createExternalServer}. Override the {@link createExternalServer} method.
         *
         * @param xml An {@link XML} object represents child element, so that can identify the type of child to create.
         * @return A new child Entity via {@link createExternalServer createExternalServer()}.
         */
        createChild(xml: library.XML): System;
        /**
         * Factory method creating an {@link IDistributedServer} object.
         *
         * @param xml An {@link XML} object represents child element, so that can identify the type of child to create.
         * @return A newly created {@link IDistributedServer} object.
         */
        protected abstract createExternalServer(xml: library.XML): System;
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.distributed {
    /**
     * Mediator of Distributed Processing System, be a server and client at the same time as a **master**.
     *
     * The {@link DistributedServerClientArrayMediator} is an abstract class, derived from the
     * {@link DistributedSystemArrayMediator} class, opening a server accepting {@link DistributedSystem distributed
     * clients} and being a client connecting to {@link IDistributedServer distributed servers} at the same time.
     *
     * Extends this {@link DistributedServerClientArrayMediator} and overrides below methods. After the overridings, open
     * server with {@link open open()} method and connect to {@link IDistributedServer distributed servers} through the
     * {@link connect connect()} method.
     *
     * - {@link createServerBase createServerBase()}
     * - {@link createExternalClient createExternalClient()}
     * - {@link createExternalServer createExternalServer()}
     *
     * #### [Inherited] {@link DistributedSystemArrayMediator}
     * @copydoc DistributedSystemArrayMediator
     */
    abstract class DistributedServerClientArrayMediator<System extends DistributedSystem> extends DistributedClientArrayMediator<System> implements external.IExternalServerClientArray<System> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method of a child Entity.
         *
         * This method is migrated to {@link createExternalServer}. Override the {@link createExternalServer} method.
         *
         * @param xml An {@link XML} object represents child element, so that can identify the type of child to create.
         * @return A new child Entity via {@link createExternalServer createExternalServer()}.
         */
        createChild(xml: library.XML): System;
        /**
         * Factory method creating an {@link IDistributedServer} object.
         *
         * @param xml An {@link XML} object represents child element, so that can identify the type of child to create.
         * @return A newly created {@link IDistributedServer} object.
         */
        protected abstract createExternalServer(xml: library.XML): System;
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.distributed {
    /**
     * A process of Distributed Processing System.
     *
     * The {@link DistributedProcess} is an abstract class who represents a **process**, *SOMETHING TO DISTRIBUTE* in a Distributed
     * Processing System. Overrides the {@link DistributedProcess} and defines the *SOMETHING TO DISTRIBUTE*.
     *
     * Relationship between {@link DistributedSystem} and {@link DistributedProcess} objects are **M: N Associative**.
     * Unlike {@link ExternalSystemRole}, the {@link DistributedProcess} objects are not belonged to a specific
     * {@link DistributedSystem} object. The {@link DistributedProcess} objects are belonged to the
     * {@link DistributedSystemArrayMediator} directly.
     *
     * When you need the **distributed process**, then call {@link sendData sendData()}. The {@link sendData} will find
     * the most idle {@link DistributedSystem slave system} considering not only number of processes on progress, but also
     * {@link DistributedSystem.getPerformance performance index} of each {@link DistributedSystem} object and
     * {@link getResource resource index} of this {@link DistributedProcess} object. The {@link Invoke} message
     * requesting the **distributed process** will be sent to the most idle {@link DistributedSystem slave system}.
     *
     * Those {@link DistributedSystem.getPerformance performance index} and {@link getResource resource index} are
     * revaluated whenever the **distributed process** has completed basis on the execution time.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_distributed_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_distributed_system.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @handbook [Templates - Distributed System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Distributed_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class DistributedProcess extends protocol.Entity implements protocol.IProtocol {
        /**
         * @hidden
         */
        private system_array_;
        /**
         * A name, represents and identifies this {@link DistributedProcess process}.
         *
         * This {@link name} is an identifier represents this {@link DistributedProcess process}. This {@link name} is
         * used in {@link DistributedSystemArray.getProcess} and {@link DistributedSystemArray.getProcess}, as a key elements.
         * Thus, this {@link name} should be unique in its parent {@link DistributedSystemArray} object.
         */
        protected name: string;
        /**
         * @hidden
         */
        private progress_list_;
        /**
         * @hidden
         */
        private history_list_;
        /**
         * @hidden
         */
        private resource;
        /**
         * @hidden
         */
        private enforced_;
        /**
         * Constrct from parent {@link DistributedSystemArray} object.
         *
         * @param systemArray The parent {@link DistributedSystemArray} object.
         */
        constructor(systemArray: DistributedSystemArray<DistributedSystem>);
        /**
         * Identifier of {@link ParallelProcess} is its {@link name}.
         */
        key(): string;
        /**
         * Get parent {@link DistributedSystemArray} object.
         *
         * @return The parent {@link DistributedSystemArray} object.
         */
        getSystemArray(): DistributedSystemArray<DistributedSystem>;
        /**
         * Get parent {@link DistributedSystemArray} object.
         *
         * @return The parent {@link DistributedSystemArray} object.
         */
        getSystemArray<SystemArray extends DistributedSystemArray<DistributedSystem>>(): SystemArray;
        /**
         * Get name, who represents and identifies this process.
         */
        getName(): string;
        /**
         * Get resource index.
         *
         * Get *resource index* that indicates how much this {@link DistributedProcess process} is heavy.
         *
         * If this {@link DistributedProcess process} does not have any	{@link Invoke} message had handled, then the
         * *resource index* will be ```1.0```, which means default and average value between all
         * {@link DistributedProcess} instances (that are belonged to a same {@link DistributedSystemArray} object).
         *
         * You can specify the *resource index* by yourself, but notice that, if the *resource index* is higher than
         * other {@link DistributedProcess} objects, then this {@link DistributedProcess process} will be ordered to
         * handle less processes than other {@link DistributedProcess} objects. Otherwise, the *resource index* is
         * lower than others, of course, much processes will be requested.
         *
         * - {@link setResource setResource()}
         * - {@link enforceResource enforceResource()}
         *
         * Unless {@link enforceResource enforceResource()} is called, This *resource index* is **revaluated** whenever
         * {@link sendData sendData()} is called.
         *
         * @return Resource index.
         */
        getResource(): number;
        /**
         * Set resource index.
         *
         * Set *resource index* that indicates how much this {@link DistributedProcess process} is heavy. This
         * *resource index* can be **revaulated**.
         *
         * Note that, initial and average *resource index* of {@link DistributedProcess} objects are ```1.0```. If the
         * *resource index* is higher than other {@link DistributedProcess} objects, then this
         * {@link DistributedProcess} will be ordered to handle more processes than other {@link DistributedProcess}
         * objects. Otherwise, the *resource index* is lower than others, of course, less processes will be requested.
         *
         * Unlike {@link enforceResource}, configuring *resource index* by this {@link setResource} allows the
         * **revaluation**. This **revaluation** prevents wrong valuation from user. For example, you *mis-valuated* the
         * *resource index*. The {@link DistributedProcess process} is much heavier than any other, but you estimated it
         * to the lightest one. It looks like a terrible case that causes
         * {@link DistributedSystemArray entire distributed processing system} to be slower, however, don't mind. The
         * {@link DistributedProcess process} will the direct to the *propriate resource index* eventually with the
         * **revaluation**.
         *
         * - The **revaluation** is caused by the {@link sendData sendData()} method.
         *
         * @param val New resource index, but can be revaluated.
         */
        setResource(val: number): void;
        /**
         * Enforce resource index.
         *
         * Enforce *resource index* that indicates how much heavy the {@link DistributedProcess process is}. The
         * *resource index* will be fixed, never be **revaluated**.
         *
         * Note that, initial and average *resource index* of {@link DistributedProcess} objects are ```1.0```. If the
         * *resource index* is higher than other {@link DistributedProcess} objects, then this
         * {@link DistributedProcess} will be ordered to handle more processes than other {@link DistributedProcess}
         * objects. Otherwise, the *resource index* is lower than others, of course, less processes will be requested.
         *
         * The difference between {@link setResource} and this {@link enforceResource} is allowing **revaluation** or not.
         * This {@link enforceResource} does not allow the **revaluation**. The *resource index* is clearly fixed and
         * never be changed by the **revaluation**. But you've to keep in mind that, you can't avoid the **mis-valuation**
         * with this {@link enforceResource}.
         *
         * For example, there's a {@link DistributedProcess process} much heavier than any other, but you
         * **mis-estimated** it to the lightest. In that case, there's no way. The
         * {@link DistributedSystemArray entire distributed processing system} will be slower by the **mis-valuation**.
         * By the reason, using {@link enforceResource}, it's recommended only when you can clearly certain the
         * *resource index*. If you can't certain the *resource index* but want to recommend, then use {@link setResource}
         * instead.
         *
         * @param val New resource index to be fixed.
         */
        enforceResource(val: number): void;
        /**
         * @hidden
         */
        private _Compute_average_elapsed_time();
        /**
         * @inheritdoc
         */
        abstract replyData(invoke: protocol.Invoke): void;
        /**
         * Send an {@link Invoke} message.
         *
         * Sends an {@link Invoke} message requesting a **distributed process**. The {@link Invoke} message will be sent
         * to the most idle {@link DistributedSystem} object, which represents a slave system, and the most idle
         * {@link DistributedSystem} object will be returned.
         *
         * When the **distributed process** has completed, then the {@link DistributedSystemArray} object will revaluate
         * {@link getResource resource index} and {@link DistributedSystem.getPerformance performance index} of this
         * {@link DistributedSystem} and the most idle {@link DistributedSystem} objects basis on the execution time.
         *
         * @param invoke An {@link Invoke} message requesting distributed process.
         * @return The most idle {@link DistributedSystem} object who may send the {@link Invoke} message.
         */
        sendData(invoke: protocol.Invoke): DistributedSystem;
        /**
         * Send an {@link Invoke} message.
         *
         * Sends an {@link Invoke} message requesting a **distributed process**. The {@link Invoke} message will be sent
         * to the most idle {@link DistributedSystem} object, which represents a slave system, and the most idle
         * {@link DistributedSystem} object will be returned.
         *
         * When the **distributed process** has completed, then the {@link DistributedSystemArray} object will revaluate
         * {@link getResource resource index} and {@link DistributedSystem.getPerformance performance index} of this
         * {@link DistributedSystem} and the most idle {@link DistributedSystem} objects basis on the execution time.
         *
         * @param invoke An {@link Invoke} message requesting distributed process.
         * @param weight Weight of resource which indicates how heavy this {@link Invoke} message is. Default is 1.
         *
         * @return The most idle {@link DistributedSystem} object who may send the {@link Invoke} message.
         */
        sendData(invoke: protocol.Invoke, weight: number): DistributedSystem;
        /**
         * @hidden
         */
        private _Complete_history(history);
        /**
         * @inheritdoc
         */
        TAG(): string;
    }
}
declare namespace samchon.templates.slave {
    /**
     * History of an {@link Invoke} message.
     *
     * The {@link InvokeHistory} is a class archiving history log of an {@link Invoke} message with elapsed time. This
     * {@link InvokeHistory} class is used to report elapsed time of handling a requested process from **slave** to
     * **master** system.
     *
     * The **master** system utilizes derived {@link InvokeHistory} objects to compute performance indices.
     * - {@link ParallelSytem.getPerformance}
     * - {@link DistributedProcess.getResource}
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class InvokeHistory extends protocol.Entity {
        /**
         * @hidden
         */
        private uid;
        /**
         * @hidden
         */
        private listener;
        /**
         * @hidden
         */
        private start_time_;
        /**
         * @hidden
         */
        private end_time_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from an {@link Invoke} message.
         *
         * @param invoke An {@link Invoke} message requesting a *parallel or distributed process*.
         */
        constructor(invoke: protocol.Invoke);
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * Complete the history.
         *
         * Completes the history and determines the {@link getEndTime end time}.
         */
        complete(): void;
        key(): number;
        /**
         * Get unique ID.
         */
        getUID(): number;
        /**
         * Get {@link Invoke.getListener listener} of the {@link Invoke} message.
         */
        getListener(): string;
        /**
         * Get start time.
         */
        getStartTime(): Date;
        /**
         * Get end time.
         */
        getEndTime(): Date;
        /**
         * Compute elapsed time.
         *
         * @return nanoseconds.
         */
        computeElapsedTime(): number;
        /**
         * @inheritdoc
         */
        TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
        /**
         * Convert to an {@link Invoke} message.
         *
         * Creates and returns an {@link Invoke} message that is used to reporting to the **master**.
         */
        toInvoke(): protocol.Invoke;
    }
}
declare namespace samchon.templates.distributed {
    /**
     * History of an {@link Invoke} message.
     *
     * The {@link PRInvokeHistory} is a class archiving history log of an {@link Invoke} message which requests the
     * *distributed process*, created whenever {@link DistributedProcess.sendData} is called.
     *
     * When the *distributed process* has completed, then {@link complete complete()} is called and the *elapsed time* is
     * determined. The elapsed time is utilized for computation of {@link DistributedSystem.getPerformance performance index}
     * and {@link DistributedProcess.getResource resource index} of related objects.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_distributed_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_distributed_system.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @handbook [Templates - Distributed System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Distributed_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    class DSInvokeHistory extends slave.InvokeHistory {
        /**
         * @hidden
         */
        private system_;
        /**
         * @hidden
         */
        private process_;
        /**
         * @hidden
         */
        private weight_;
        /**
         * Construct from a DistributedSystem.
         *
         * @param system The {@link DistributedSystem} object who sent the {@link Invoke} message.
         */
        constructor(system: DistributedSystem);
        /**
         * Initilizer Constructor.
         *
         * @param system The {@link DistributedSystem} object who sent the {@link Invoke} message.
         * @param process The {@link DistributedProcess} object who sent the {@link Invoke} message.
         * @param invoke An {@link Invoke} message requesting the *distributed process*.
         * @param weight Weight of resource which indicates how heavy this {@link Invoke} message is.
         */
        constructor(system: DistributedSystem, process: DistributedProcess, invoke: protocol.Invoke, weight: number);
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * Get the related {@link DistributedSystem} object.
         */
        getSystem(): DistributedSystem;
        /**
         * Get the related {@link DistributedProcess} object.
         */
        getProcess(): DistributedProcess;
        /**
         * Get weight.
         *
         * Gets weight of resource which indicates how heavy this {@link Invoke} message is. Default is 1.
         */
        getWeight(): number;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace samchon.templates.distributed {
    /**
     * An interface for a distributed slave server driver.
     *
     * The easiest way to defining a driver for distributed **slave** server is extending {@link DistributedServer} class.
     * However, if you've to interact with a prallel **slave** system who can be both server and client, them make a class
     * (let's name it **BaseSystem**) extending the {@link DistributedServer} class. At next, make a new class (now, I name
     * it **BaseServer**) extending the **BaseSystem** and implements this interface {@link IParallelServer}. Define the
     * **BaseServer** following those codes on below:
     *
     * <ul>
     *	<li> {@link ExternalServer}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/external/ExternalServer.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link ParallelServer}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/parallel/ParallelServer.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link DistributedServer}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/distributed/DistributedServer.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     * </ul>
     *
     * @handbook [Templates - Parallel System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Parallel_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IDistributedServer extends DistributedSystem {
        /**
         * Connect to external server.
         */
        connect(): void;
    }
}
declare namespace samchon.templates.external {
    /**
     * An array and manager of {@link ExternalSystem external clients} as a server.
     *
     * The {@link ExternalClientArray} is an abstract class, derived from the {@link ExternalSystemArray} class, opening
     * a server accepting {@link ExternalSystem external clients}.
     *
     * Extends this {@link ExternalClientArray}, overrides {@link createServerBase createServerBase()} to determine which
     * protocol to follow and {@link createExternalClient createExternalClient()} creating child {@link ExternalSystem}
     * object. After the extending and overridings, open this server using the {@link open open()} method.
     *
     * #### [Inherited] {@link ExternalSystemArray}
     * @copydoc ExternalSystemArray
     */
    abstract class ExternalClientArray<T extends ExternalSystem> extends ExternalSystemArray<T> implements IExternalClientArray<T> {
        /**
         * @hidden
         */
        private server_base_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method creating {@link IServerBase} object.
         *
         * This method {@link createServerBase createServerBase()} determines which templates is used in this server,
         * {@link ExternalClientArray}. If the templates is determined, then {@link ExternalSystem external clients} who
         * may connect to {@link ExternalClientArray this server} must follow the specified templates.
         *
         * Creates and returns one of them:
         *
         * - {@link ServerBase}
         * - {@link WebServerBase}
         * - {@link SharedWorkerServerBase}
         *
         * @return A new {@link IServerBase} object.
         */
        protected abstract createServerBase(): protocol.IServerBase;
        /**
         * Add a newly connected remote client.
         *
         * When a {@link IClientDriver remote client} connects to this *server* {@link ExternalClientArray} object,
         * then this {@link ExternalClientArray} creates a child {@link ExternalSystem external client} object through
         * the {@link createExternalClient createExternalClient()} method and {@link insert inserts} it.
         *
         * @param driver A communicator for external client.
         */
        addClient(driver: protocol.IClientDriver): void;
        /**
         * (Deprecated) Factory method creating child object.
         *
         * The method {@link createChild createChild()} is deprecated. Don't use and override this.
         *
         * Note that, the {@link ExternalClientArray} is a server accepting {@link ExternalSystem external clients}.
         * There's no way to creating the {@link ExternalSystem external clients} in advance before opening the server.
         *
         * @param xml An {@link XML} object represents the child {@link ExternalSystem} object.
         * @return null
         */
        createChild(xml: library.XML): T;
        /**
         * Factory method creating a child {@link ExternalSystem} object.
         *
         * @param driver A communicator with connected client.
         * @return A newly created {@link ExternalSystem} object.
         */
        protected abstract createExternalClient(driver: protocol.IClientDriver): T;
        /**
         * @inheritdoc
         */
        open(port: number): void;
        /**
         * @inheritdoc
         */
        close(): void;
    }
}
declare namespace samchon.templates.external {
    /**
     * An external server driver.
     *
     * The {@link ExternalServer} is an abstract class, derived from the {@link ExternalSystem} class, connecting to
     * remote, external server. Extends this {@link ExternalServer} class and overrides the
     * {@link createServerConnector createServerConnector()} method following which protocol the external server uses.
     *
     * #### [Inherited] {@link ExternalSystem}
     * @copydoc ExternalSystem
     */
    abstract class ExternalServer extends ExternalSystem implements IExternalServer {
        /**
         * IP address of target external system to connect.
         */
        protected ip: string;
        /**
         * Port number of target external system to connect.
         */
        protected port: number;
        /**
         * Construct from parent {@link ExternalSystemArray}.
         *
         * @param systemArray The parent {@link ExternalSystemArray} object.
         */
        constructor(systemArray: ExternalSystemArray<IExternalServer>);
        /**
         * Factory method creating {@link IServerConnector} object.
         *
         * The {@link createServerConnector createServerConnector()} is an abstract method creating
         * {@link IServerConnector} object. Overrides and returns one of them, considering which templates the external
         * system follows:
         *
         * - {@link ServerConnector}
         * - {@link WebServerConnector}
         * - {@link DedicatedWorkerServerConnector}
         * - {@link SharedWorkerServerConnector}
         *
         * @return A newly created {@link IServerConnector} object.
         */
        protected abstract createServerConnector(): protocol.IServerConnector;
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.external {
    /**
     * An array and manager of {@link IExternalServer external servers}.
     *
     * The {@link ExternalServerArray} is an abstract class, derived from the {@link ExternalSystemArray} class,
     * connecting to {@link IExternalServer external servers}.
     *
     * Extends this {@link ExternalServerArray} and overrides {@link createChild createChild()} method creating child
     * {@link IExternalServer} object. After the extending and overriding, construct children {@link IExternalServer}
     * objects and call the {@link connect connect()} method.
     *
     * #### [Inherited] {@link ExternalSystemArray}
     * @copydoc ExternalSystemArray
     */
    abstract class ExternalServerArray<T extends IExternalServer> extends ExternalSystemArray<T> implements IExternalServerArray<T> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.external {
    /**
     * An array and manager of {@link IExternalServer external servers} and {@link ExternalSystem external clients}.
     *
     * The {@link ExternalServerClientArray} is an abstract class, derived from the {@link ExternalSystemArray} class,
     * opening a server accepting {@link ExternalSystem external clients} and being a client connecting to
     * {@link IExternalServer external servers} at the same time.
     *
     * Extends this {@link ExternalServerClientArray} and overrides below methods. After the overridings, open server
     * with {@link open open()} method and connect to {@link IExternalServer external servers} through the
     * {@link connect connect()} method.
     *
     * - {@link createServerBase createServerBase()}
     * - {@link createExternalClient createExternalClient()}
     * - {@link createExternalServer createExternalServer()}
     *
     * #### [Inherited] {@link ExternalSystemArray}
     * @copydoc ExternalSystemArray
     */
    abstract class ExternalServerClientArray<T extends ExternalSystem> extends ExternalClientArray<T> implements IExternalServerClientArray<T> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method of a child Entity.
         *
         * This method is migrated to {@link createExternalServer}. Override the {@link createExternalServer} method.
         *
         * @param xml An {@link XML} object represents child element, so that can identify the type of child to create.
         * @return A new child Entity via {@link createExternalServer createExternalServer()}.
         */
        createChild(xml: library.XML): T;
        /**
         * Factory method creating an {@link IExternalServer} object.
         *
         * @param xml An {@link XML} object represents child element, so that can identify the type of child to create.
         * @return A newly created {@link IExternalServer} object.
         */
        protected abstract createExternalServer(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.external {
    /**
     * A role of an external system.
     *
     * The {@link ExternalSystemRole} class represents a role, *WHAT TO DO*. Extends the {@link ExternalSystemRole} class
     * and overrides {@link replyData replyData()} to define the *WHAT TO DO*. And assign this {@link ExternalSystemRole}
     * object to related {@link ExternalSystem} object.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_external_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_external_system.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * #### Proxy Pattern
     * The {@link ExternalSystemRole} class can be an *logical proxy*. In framework within user, which
     * {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is *which can be done*.
     *
     * By using the *logical proxy*, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}.
     *
     * <ul>
     *	<li>
     *		{@link ExternalSystemRole} can be accessed from {@link ExternalSystemArray} directly, without inteferring
     *		from {@link ExternalSystem} object, via {@link ExternalSystemArray.getRole ExternalSystemArray.getRole()}.
     *	</li>
     *	<li>
     *		When you want to send an {@link Invoke} message to the belonged {@link ExternalSystem system}, just call
     *		{@link ExternalSystemRole.sendData ExternalSystemRole.sendData()}. Then, the message will be sent to the
     *		external system.
     *	</li>
     *	<li> Those strategy is called *Proxy Pattern*. </li>
     * </ul>
     *
     * @handbook [Templates - External System](https://github.com/samchon/framework/wiki/TypeScript-Templates-External_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ExternalSystemRole extends protocol.Entity implements protocol.IProtocol {
        /**
         * @hidden
         */
        private system;
        /**
         * A name, represents and identifies this {@link ExternalSystemRole role}.
         *
         * This {@link name} is an identifier represents this {@link ExternalSystemRole role}. This {@link name} is
         * used in {@link ExternalSystemArray.getRole} and {@link ExternalSystem.get}, as a key elements. Thus, this
         * {@link name} should be unique in an {@link ExternalSystemArray}.
         */
        protected name: string;
        /**
         * Constructor from a system.
         *
         * @param system An external system containing this role.
         */
        constructor(system: ExternalSystem);
        /**
         * Identifier of {@link ExternalSystemRole} is its {@link name}.
         */
        key(): string;
        /**
         * Get grandparent {@link ExternalSystemArray}.
         *
         * Get the grandparent {@link ExternalSystemArray} object through this parent {@link ExternalSystem},
         * {@link ExternalSystem.getSystemArray ExternalSystem.getSystemArray()}.
         *
         * @return The grandparent {@link ExternalSystemArray} object.
         */
        getSystemArray(): ExternalSystemArray<ExternalSystem>;
        /**
         * Get parent {@link ExternalSystemRole} object.
         */
        getSystem(): ExternalSystem;
        /**
         * Get name, who represents and identifies this role.
         */
        getName(): string;
        /**
         * Send an {@link Invoke} message.
         *
         * Sends an {@link Invoke} message to remote system through the parent {@link ExternalSystem} object.
         *
         * @param invoke An {@link Invoke} message to send to the external system.
         */
        sendData(invoke: protocol.Invoke): void;
        /**
         * Handle replied {@link Invoke} message.
         *
         * {@link ExternalSystemRole.replyData ExternalSystemRole.replyData()} is an abstract method handling a replied
         * {@link Invoke message} gotten from remote system via parent {@link ExternalSystem} object. Overrides this
         * method and defines the *WHAT TO DO* with the {@link Invoke message}.
         *
         * @param invoke An {@link Invoke} message received from the {@link ExternalSystem external system}.
         */
        abstract replyData(invoke: protocol.Invoke): void;
        /**
         * Tag name of the {@link ExternalSytemRole} in {@link XML}.
         *
         * @return *role*.
         */
        TAG(): string;
    }
}
declare namespace samchon.templates.external {
    /**
     * An interface for an {@link ExternalSystemArray} accepts {@link ExternalSystem external clients} as a
     * {@link IServer server}.
     *
     * The easiest way to defining an {@link ExternalSystemArray} who opens server and accepts
     * {@link ExternalSystem external clients} is to extending one of below, who are derived from this interface
     * {@link IExternalClientArray}. However, if you can't specify an {@link ExternalSystemArray} to be whether server or
     * client, then make a class (let's name it as **BaseSystemArray**) extending {@link ExternalSystemArray} and make
     * a new class (now, I name it **BaseClientArray**) extending **BaseSystemArray** and implementing this
     * interface {@link IExternalClientArray}. Define the **BaseClientArray** following those codes on below:
     *
     * <ul>
     *	<li> {@link ExternalClientArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/external/ExternalClientArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link ParallelClientArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/master/ParallelClientArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link DistributedClientArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/master/DistributedClientArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     * </ul>
     *
     * @handbook [Templates - External System](https://github.com/samchon/framework/wiki/TypeScript-Templates-External_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IExternalClientArray<System extends ExternalSystem> extends ExternalSystemArray<System>, protocol.IServer {
    }
}
declare namespace samchon.templates.external {
    /**
     * An interface for an external server driver.
     *
     * The easiest way to defining an external server driver is to extending one of below, who are derived from this
     * interface {@link IExternalServer}. However, if you've to interact with an external system who can be both server
     * and client, then make a class (let's name it as **BaseSystem**) extending {@link ExternalSystem} and make a
     * new class (now, I name it **BaseServer**) extending **BaseSystem** and implementing this interface
     * {@link IExternalServer}. Define the **BaseServer** following those codes on below:
     *
     * <ul>
     *	<li> {@link ExternalServer}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/external/ExternalServer.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link ParallelServer}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/parallel/ParallelServer.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link DistributedServer}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/distributed/DistributedServer.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     * </ul>
     *
     * @handbook [Templates - External System](https://github.com/samchon/framework/wiki/TypeScript-Templates-External_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IExternalServer extends ExternalSystem {
        /**
         * Connect to the external server.
         */
        connect(): void;
    }
}
declare namespace samchon.templates.external {
    /**
     * An interface for an {@link ExternalSystemArray} connects to {@link IExternalServer external servers} as a
     * **client**.
     *
     * The easiest way to defining an {@link ExternalSystemArray} who connects to
     * {@link IExternalServer external servers} is to extending one of below, who are derived from this interface
     * {@link IExternalServerArray}. However, if you can't specify an {@link ExternalSystemArray} to be whether server or
     * client, then make a class (let's name it as **BaseSystemArray**) extending {@link ExternalSystemArray} and make
     * a new class (now, I name it **BaseServerArray**) extending **BaseSystemArray** and implementing this
     * interface {@link IExternalServerArray}. Define the **BaseServerArray** following those codes on below:
     *
     * <ul>
     *	<li> {@link ExternalServerArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/external/ExternalServerArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link ParallelServerArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/master/ParallelServerArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link DistributedServerArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/master/DistributedServerArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     * </ul>
     *
     * @handbook [Templates - External System](https://github.com/samchon/framework/wiki/TypeScript-Templates-External_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IExternalServerArray<System extends IExternalServer> extends ExternalSystemArray<System> {
        /**
         * Connect to {@link IExternalServer external servers}.
         *
         * This method calls children elements' method {@link IExternalServer.connect} gradually.
         */
        connect(): void;
    }
}
declare namespace samchon.templates.external {
    /**
     * An interface for an {@link ExternalSystemArray} accepts {@link ExternalSystem external clients} as a
     * {@link IServer server} and connects to {@link IExternalServer} as **client**, at the same time.
     *
     * The easiest way to defining an {@link IExternalServerClientArray} who opens server, accepts
     * {@link ExternalSystem external clients} and connects to {@link IExternalServer external servers} is to extending
     * one of below, who are derived from this interface {@link IExternalServerClientArray}. However, if you can't
     * specify an {@link ExternalSystemArray} to be whether server or client or even can both them, then make a class
     * (let's name it as **BaseSystemArray**) extending {@link ExternalSystemArray} and make a new class (now, I name
     * it **BaseServerClientArray**) extending **BaseSystemArray** and implementing this interface
     * {@link IExternalServerClientArray}. Define the **BaseServerClientArray** following those codes on below:
     *
     * <ul>
     *	<li> {@link ExternalServerClientArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/external/ExternalServerClientArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link ParallelServerClientArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/master/ParallelServerClientArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link DistributedServerClientArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/master/DistributedServerClientArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     * </ul>
     *
     * @handbook [Templates - External System](https://github.com/samchon/framework/wiki/TypeScript-Templates-External_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IExternalServerClientArray<System extends ExternalSystem> extends IExternalClientArray<System> {
        /**
         * Connect to {@link IExternalServer external servers}.
         *
         * This method calls children elements' method {@link IExternalServer.connect} gradually.
         */
        connect(): void;
    }
}
declare namespace samchon.templates.slave {
    /**
     * A slave system.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class SlaveSystem implements protocol.IProtocol {
        /**
         * @hidden
         */
        protected communicator_: protocol.ICommunicator;
        /**
         * Default Constructor.
         */
        constructor();
        sendData(invoke: protocol.Invoke): void;
        abstract replyData(invoke: protocol.Invoke): void;
        /**
         * @hidden
         */
        protected _Reply_data(invoke: protocol.Invoke): void;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * A mediator, the master driver.
     *
     * The {@link MediatorSystem} is an abstract class helping {@link ParallelSystemArrayMediator} can be a **slave**
     * system. The {@link MediatorSystem} interacts and communicates with the **master** system as a role of **slave**.
     *
     * This {@link MediatorSystem} object is created in {@link ParallelSystemArrayMediator.createMediator}. Override the
     * method and return one of them, which are derived from this {@link MediatorSystem} class, considering which
     * type and protocol the **master** system follows:
     *
     * - A client slave connecting to master server:
     *   - {@link MediatorClient}
     *   - {@link MediatorWebClient}
     *   - {@link MediatorSharedWorkerClient}
     * - A server slave accepting master client:
     *   - {@link MediatorServer}
     *   - {@link MediatorWebServer}
     *   - {@link MediatorDedicatedWorkerServer}
     *   - {@link MediatorSharedWorkerServer}
     *
     * When the **master** orders a *parallel process* to this **slave**, then the {@link MediatorSystem} delivers the
     * *parallel process* to its parent {@link ParallelSystemArrayMediator} object. The
     * {@link ParallelSystemArrayMediator} object distributes the *parallel process* to its slaves system,
     * {@link ParallelSystem} objects. When the *parallel process* has completed, then {@link MediatorSystem} reports the
     * result to its **master**.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_parallel_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_parallel_system.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @handbook [Templates - Parallel System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Parallel_System),
     *			 [Distributed System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Distributed_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class MediatorSystem extends slave.SlaveSystem {
        /**
         * @hidden
         */
        private system_array_;
        /**
         * @hidden
         */
        private progress_list_;
        /**
         * Construct from parent {@link ParallelSystemArrayMediator} object.
         *
         * @param systemArray The parent {@link ParallelSystemArrayMediator} object.
         */
        constructor(systemArray: ParallelSystemArrayMediator<ParallelSystem>);
        /**
         * Construct from parent {@link DistributedSystemArrayMediator} object.
         *
         * @param systemArray The parent {@link DistributedSystemArrayMediator} object.
         */
        constructor(systemArray: distributed.DistributedSystemArrayMediator<distributed.DistributedSystem>);
        /**
         * Start interaction.
         *
         * The {@link start start()} is an abstract method starting interaction with the **master** system. If the
         * **master** is a server, then connects to the **master**. Otherwise, the **master** is client, then this
         * {@link MediatorSystem} object wil open a server accepting the **master**.
         */
        abstract start(): void;
        /**
         * Get parent {@link ParallelSystemArrayMediator} or {@link DistributedSystemArrayMediator} object.
         */
        getSystemArray(): ParallelSystemArrayMediator<ParallelSystem> | distributed.DistributedSystemArrayMediator<distributed.DistributedSystem>;
        /**
         * Get parent {@link ParallelSystemArrayMediator} object.
         */
        getSystemArray<SystemArray extends ParallelSystemArray<ParallelSystem>>(): SystemArray;
        /**
         * Get parent {@link DistributedSystemArrayMediator} object.
         */
        getSystemArray<SystemArray extends distributed.DistributedSystemArray<distributed.DistributedSystem>>(): SystemArray;
        /**
         * @hidden
         */
        private _Complete_history(uid);
        /**
         * @hidden
         */
        protected _Reply_data(invoke: protocol.Invoke): void;
        /**
         * @inheritdoc
         */
        replyData(invoke: protocol.Invoke): void;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * A mediator client, driver for the master server.
     *
     * The {@link MediatorServer} is a class being a client connecting to the **master** server, following the protocol
     * of Samchon Framework's own.
     *
     * #### [Inherited] {@link MediatorSystem}
     * @copydoc MediatorSystem
     */
    class MediatorClient extends MediatorSystem implements slave.ISlaveClient {
        /**
         * @hidden
         */
        private ip;
        /**
         * @hidden
         */
        private port;
        /**
         * Initializer Constructor.
         *
         * @param systemArray The parent {@link ParallelSystemArrayMediator} object.
         * @param ip IP address to connect.
         * @param port Port number to connect.
         */
        constructor(systemArray: ParallelSystemArrayMediator<ParallelSystem>, ip: string, port: number);
        /**
         * Initializer Constructor.
         *
         * @param systemArray The parent {@link DistributedSystemArrayMediator} object.
         * @param ip IP address to connect.
         * @param port Port number to connect.
         */
        constructor(systemArray: distributed.DistributedSystemArrayMediator<distributed.DistributedSystem>, ip: string, port: number);
        /**
         * Factory method creating {@link IServerConnector} object.
         *
         * The {@link createServerConnector createServerConnector()} is an abstract method creating
         * {@link IServerConnector} object. Overrides and returns one of them, considering which protocol the **master**
         * server follows:
         *
         * - {@link ServerConnector}
         * - {@link WebServerConnector}
         * - {@link SharedWorkerServerConnector}
         *
         * @return A newly created {@link IServerConnector} object.
         */
        protected createServerConnector(): protocol.IServerConnector;
        /**
         * @inheritdoc
         */
        start(): void;
        /**
         * @inheritdoc
         */
        connect(): void;
    }
    /**
     * A mediator client, driver for the master server.
     *
     * The {@link MediatorWebClient} is a class being a client connecting to the **master** server, following the
     * web-socket protocol.
     *
     * #### [Inherited] {@link MediatorSystem}
     * @copydoc MediatorSystem
     */
    class MediatorWebClient extends MediatorClient {
        /**
         * @inheritdoc
         */
        protected createServerConnector(): protocol.IServerConnector;
    }
    /**
     * A mediator client, driver for the master server.
     *
     * The {@link MediatorSharedWorkerClient} is a class being a client connecting to the **master** server, following
     * the SharedWorker's protocol.
     *
     * #### [Inherited] {@link MediatorSystem}
     * @copydoc MediatorSystem
     */
    class MediatorSharedWorkerClient extends MediatorClient {
        /**
         * @inheritdoc
         */
        protected createServerConnector(): protocol.IServerConnector;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * A mediator server, driver for the master client.
     *
     * The {@link MediatorServer} is a class opening a server accepting the **master** client, following the protocol of
     * Samchon Framework's own.
     *
     * #### [Inherited] {@link MediatorSystem}
     * @copydoc MediatorSystem
     */
    class MediatorServer extends MediatorSystem implements slave.ISlaveServer {
        /**
         * @hidden
         */
        private server_base_;
        /**
         * @hidden
         */
        private port;
        /**
         * Initializer Constructor.
         *
         * @param systemArray The parent {@link ParallelSystemArrayMediator} object.
         * @param port Port number of server to open.
         */
        constructor(systemArray: ParallelSystemArrayMediator<ParallelSystem>, port: number);
        /**
         * Initializer Constructor.
         *
         * @param systemArray The parent {@link DistributedSystemArrayMediator} object.
         * @param port Port number of server to open.
         */
        constructor(systemArray: distributed.DistributedSystemArrayMediator<distributed.DistributedSystem>, port: number);
        /**
         * Factory method creating {@link IServerBase} object.
         *
         * This method {@link createServerBase createServerBase()} determines which protocol is used in this server,
         * {@link MediatorServer}. Note that, **slave** (this {@link MediatorServer} object) must follow the **master**'s
         * protocol.
         *
         * Overrides and return one of them considering the which protocol to follow:
         *
         * - {@link ServerBase}
         * - {@link WebServerBase}
         * - {@link SharedWorkerServerBase}
         */
        protected createServerBase(): protocol.IServerBase;
        /**
         * Add a newly connected remote client.
         *
         * {@link MediatorServer} represents a **slave** dedicating to its **master**. In that reason, the
         * {@link MediatorServer} does not accept multiple **master** clients. It accepts only one. Thus, *listener* of
         * the *communicator* is {@link MediatorSystem} object, itself.
         *
         * @param driver A communicator with remote client.
         */
        addClient(driver: protocol.IClientDriver): void;
        /**
         * @inheritdoc
         */
        start(): void;
        /**
         * @inheritdoc
         */
        open(port: number): void;
        /**
         * @inheritdoc
         */
        close(): void;
    }
    /**
     * A mediator server, driver for the master client.
     *
     * The {@link MediatorWebServer} is a class opening a server accepting the **master** client, following the
     * web-socket protocol.
     *
     * #### [Inherited] {@link MediatorSystem}
     * @copydoc MediatorSystem
     */
    class MediatorWebServer extends MediatorServer {
        /**
         * @inheritdoc
         */
        protected createServerBase(): protocol.IServerBase;
    }
    /**
     * A mediator server, driver for the master client.
     *
     * The {@link MediatorDedicatedWorkerServer} is a class opening a server accepting the **master** client, following
     * the DedicatedWorker's protocol.
     *
     * #### [Inherited] {@link MediatorSystem}
     * @copydoc MediatorSystem
     */
    class MediatorDedicatedWorkerServer extends MediatorServer {
        /**
         * @inheritdoc
         */
        protected createServerBase(): protocol.IServerBase;
    }
    /**
     * A mediator server, driver for the master client.
     *
     * The {@link MediatorSharedWorkerServer} is a class opening a server accepting the **master** client, following the
     * SharedWorker's protocol.
     *
     * #### [Inherited] {@link MediatorSystem}
     * @copydoc MediatorSystem
     */
    class MediatorSharedWorkerServer extends MediatorServer {
        /**
         * @inheritdoc
         */
        protected createServerBase(): protocol.IServerBase;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * Master of Parallel Processing System, a server accepting slave clients.
     *
     * The {@link ParallelClientArray} is an abstract class, derived from the {@link ParallelSystemArray} class, opening
     * a server accepting {@link ParallelSystem parallel clients}.
     *
     * Extends this {@link ParallelClientArray}, overrides {@link createServerBase createServerBase()} to determine which
     * protocol to follow and {@link createExternalClient createExternalClient()} creating child {@link ParallelSystem}
     * object. After the extending and overridings, open this server using the {@link open open()} method.
     *
     * #### [Inherited] {@link ParallelSystemArray}
     * @copydoc ParallelSystemArray
     */
    abstract class ParallelClientArray<System extends ParallelSystem> extends ParallelSystemArray<System> implements external.IExternalClientArray<System> {
        /**
         * @hidden
         */
        private server_base_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method creating {@link IServerBase} object.
         *
         * This method {@link createServerBase createServerBase()} determines which protocol is used in this server,
         * {@link ExternalClientArray}. If the protocol is determined, then {@link ExternalSystem external clients} who
         * may connect to {@link ExternalClientArray this server} must follow the specified protocol.
         *
         * Overrides the {@link createServerBase createServerBase()} method to create and return one of them:
         *
         * - {@link ServerBase}
         * - {@link WebServerBase}
         * - {@link SharedWorkerServerBase}
         *
         * @return A new {@link IServerBase} object.
         */
        protected abstract createServerBase(): protocol.IServerBase;
        /**
         * Add a newly connected remote client.
         *
         * When a {@link IClientDriver remote client} connects to this *master server of parallel processing system*,
         * then this {@link ParallelClientArray} creates a child {@link ParallelSystem parallel client} object through
         * the {@link createExternalClient createExternalClient()} method and {@link insert inserts} it.
         *
         * @param driver A communicator for external client.
         */
        addClient(driver: protocol.IClientDriver): void;
        /**
         * (Deprecated) Factory method creating child object.
         *
         * The method {@link createChild createChild()} is deprecated. Don't use and override this.
         *
         * Note that, the {@link ParallelClientArray} is a server accepting {@link ParallelSystem parallel clients}.
         * There's no way to creating the {@link ParallelSystem parallel clients} in advance before opening the server.
         *
         * @param xml An {@link XML} object represents the child {@link ParallelSystem} object.
         * @return ```null```
         */
        createChild(xml: library.XML): System;
        /**
         * Factory method creating {@link ParallelSystem} object.
         *
         * The method {@link createExternalClient createExternalClient()} is a factory method creating a child
         * {@link ParallelSystem} object, that is called whenever a parallel client has connected, by
         * {@link addClient addClient()}.
         *
         * Overrides this {@link createExternalClient} method and creates a type of {@link ParallelSystem} object with
         * the *driver* that communicates with the parallel client. After the creation, returns the {@link ParallelSystem}
         * object. Then whenever a parallel client has connected, matched {@link ParallelSystem} object will be
         * constructed and {@link insert inserted} into this {@link ParallelClientArray} object.
         *
         * @param driver A communicator with the parallel client.
         * @return A newly created {@link ParallelSystem} object.
         */
        protected abstract createExternalClient(driver: protocol.IClientDriver): System;
        /**
         * @inheritdoc
         */
        open(port: number): void;
        /**
         * @inheritdoc
         */
        close(): void;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * Mediator of Parallel Processing System.
     *
     * The {@link ParallelSystemArrayMediator} class be a **master** for its slave systems, and be a **slave** to its
     * master system at the same time. This {@link ParallelSystemArrayMediator} be a **master **system, containing and
     * managing {@link ParallelSystem} objects, which represent parallel slave systems, by extending
     * {@link ParallelSystemArray} class. Also, be a **slave** system through {@link getMediator mediator} object, which is
     * derived from the {@link SlaveSystem} class.
     *
     * As a **master**, you can specify this {@link ParallelSystemArrayMediator} class to be <i>a master server accepting
     * slave clients<i> or <i>a master client to connecting slave servers</i>. Even both of them is possible. Extends one
     * of them below and overrides abstract factory method(s) creating the child {@link ParallelSystem} object.
     *
     * - {@link ParallelClientArrayMediator}: A server accepting {@link ParallelSystem parallel clients}.
     * - {@link ParallelServerArrayMediator}: A client connecting to {@link ParallelServer parallel servers}.
     * - {@link ParallelServerClientArrayMediator}: Both of them. Accepts {@link ParallelSystem parallel clients} and
     *   connects to {@link ParallelServer parallel servers} at the same time.
     *
     * As a **slave**, you can specify this {@link ParallelSystemArrayMediator} to be <i>a client slave connecting to
     * master server</i> or <i>a server slave accepting master client</i> by overriding the {@link createMediator} method.
     * Overrides the {@link createMediator createMediator()} method and return one of them:
     *
     * - A client slave connecting to master server:
     *   - {@link MediatorClient}
     *   - {@link MediatorWebClient}
     *   - {@link MediatorSharedWorkerClient}
     * - A server slave accepting master client:
     *   - {@link MediatorServer}
     *   - {@link MediatorWebServer}
     *   - {@link MediatorDedicatedWorkerServer}
     *   - {@link MediatorSharedWorkerServer}
     *
     * #### [Inherited] {@link ParallelSystemArray}
     * @copydoc ParallelSystemArray
     */
    abstract class ParallelSystemArrayMediator<System extends ParallelSystem> extends ParallelSystemArray<System> {
        /**
         * @hidden
         */
        private mediator_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method creating a {@link MediatorSystem} object.
         *
         * The {@link createMediator createMediator()} is an abstract method creating the {@link MediatorSystem} object.
         *
         * You know what? this {@link ParallelSystemArrayMediator} class be a **master** for its slave systems, and be a
         * **slave** to its master system at the same time. The {@link MediatorSystem} object makes it possible; be a
         * **slave** system. This {@link createMediator} determines specific type of the {@link MediatorSystem}.
         *
         * Overrides the {@link createMediator createMediator()} method to create and return one of them following which
         * protocol and which type of remote connection (server or client) will be used:
         *
         * - A client slave connecting to master server:
         *   - {@link MediatorClient}
         *   - {@link MediatorWebClient}
         *   - {@link MediatorSharedWorkerClient}
         * - A server slave accepting master client:
         *   - {@link MediatorServer}
         *   - {@link MediatorWebServer}
         *   - {@link MediatorDedicatedWorkerServer}
         *   - {@link MediatorSharedWorkerServer}
         *
         * @return A newly created {@link MediatorSystem} object.
         */
        protected abstract createMediator(): MediatorSystem;
        /**
         * Start mediator.
         *
         * If the {@link getMediator mediator} is a type of server, then opens the server accepting master client.
         * Otherwise, the {@link getMediator mediator} is a type of client, then connects the master server.
         */
        protected startMediator(): void;
        /**
         * Get {@link MediatorSystem} object.
         *
         * When you need to send an {@link Invoke} message to the master system of this
         * {@link ParallelSystemArrayMediator}, then send to the {@link MediatorSystem} through this {@link getMediator}.
         *
         * ```typescript
         * this.getMediator().sendData(...);
         * ```
         *
         * @return The {@link MediatorSystem} object.
         */
        getMediator(): MediatorSystem;
        /**
         * @hidden
         */
        protected _Complete_history(history: slave.InvokeHistory): boolean;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * Mediator of Parallel Processing System, a server accepting slave clients.
     *
     * The {@link ParallelClientArrayMediator} is an abstract class, derived from the {@link ParallelSystemArrayMediator}
     * class, opening a server accepting {@link ParallelSystem parallel clients} as a **master**.
     *
     * Extends this {@link ParallelClientArrayMediator}, overrides {@link createServerBase createServerBase()} to
     * determine which protocol to follow and {@link createExternalClient createExternalClient()} creating child
     * {@link ParallelSystem} object. After the extending and overridings, open this server using the
     * {@link open open()} method.
     *
     * #### [Inherited] {@link ParallelSystemArrayMediator}
     * @copydoc ParallelSystemArrayMediator
     */
    abstract class ParallelClientArrayMediator<System extends ParallelSystem> extends ParallelSystemArrayMediator<System> implements external.IExternalClientArray<System> {
        /**
         * @hidden
         */
        private server_base_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method creating {@link IServerBase} object.
         *
         * This method {@link createServerBase createServerBase()} determines which protocol is used in this server,
         * {@link ParallelClientArrayMediator}. If the protocol is determined, then
         * {@link ParallelSystem parallel clients} who may connect to {@link ParallelClientArrayMediator this server}
         * must follow the specified protocol.
         *
         * Overrides the {@link createServerBase createServerBase()} method to create and return one of them:
         *
         * - {@link ServerBase}
         * - {@link WebServerBase}
         * - {@link SharedWorkerServerBase}
         *
         * @return A new {@link IServerBase} object.
         */
        protected abstract createServerBase(): protocol.IServerBase;
        /**
         * Add a newly connected remote client.
         *
         * When a {@link IClientDriver remote client} connects to this *master server of parallel processing system*,
         * then this {@link ParallelClientArrayMediator} creates a child {@link ParallelSystem parallel client} object
         * through the {@link createExternalClient createExternalClient()} method and {@link insert inserts} it.
         *
         * @param driver A communicator for parallel client.
         */
        addClient(driver: protocol.IClientDriver): void;
        /**
         * (Deprecated) Factory method creating child object.
         *
         * The method {@link createChild createChild()} is deprecated. Don't use and override this.
         *
         * Note that, the {@link ParallelClientArrayMediator} is a server accepting {@link ParallelSystem parallel
         * clients} as a master. There's no way to creating the {@link ParallelSystem parallel clients} in advance before
         * opening the server.
         *
         * @param xml An {@link XML} object represents the child {@link ParallelSystem} object.
         * @return null
         */
        createChild(xml: library.XML): System;
        /**
         * Factory method creating {@link ParallelSystem} object.
         *
         * The method {@link createExternalClient createExternalClient()} is a factory method creating a child
         * {@link ParallelSystem} object, that is called whenever a parallel client has connected, by
         * {@link addClient addClient()}.
         *
         * Overrides this {@link createExternalClient} method and creates a type of {@link ParallelSystem} object with
         * the *driver* that communicates with the parallel client. After the creation, returns the {@link ParallelSystem}
         * object. Then whenever a parallel client has connected, matched {@link ParallelSystem} object will be
         * constructed and {@link insert inserted} into this {@link ParallelClientArrayMediator} object.
         *
         * @param driver A communicator with the parallel client.
         * @return A newly created {@link ParallelSystem} object.
         */
        protected abstract createExternalClient(driver: protocol.IClientDriver): System;
        /**
         * @inheritdoc
         */
        open(port: number): void;
        /**
         * @inheritdoc
         */
        close(): void;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * A driver for parallel slave server.
     *
     * The {@link ParallelServer} is an abstract class, derived from the {@link ParallelSystem} class, connecting to
     * remote, parallel **slave** server. Extends this {@link ParallelServer} class and overrides the
     * {@link createServerConnector createServerConnector()} method following which protocol the **slave** server uses.
     *
     * #### [Inherited] {@link ParallelSystem}
     * @copydoc ParallelSystem
     */
    abstract class ParallelServer extends ParallelSystem implements IParallelServer {
        /**
         * IP address of target external system to connect.
         */
        protected ip: string;
        /**
         * Port number of target external system to connect.
         */
        protected port: number;
        /**
         * Construct from parent {@link ParallelSystemArray}.
         *
         * @param systemArray The parent {@link ParallelSystemArray} object.
         */
        constructor(systemArray: ParallelSystemArray<IParallelServer>);
        /**
         * Factory method creating {@link IServerConnector} object.
         *
         * The {@link createServerConnector createServerConnector()} is an abstract method creating
         * {@link IServerConnector} object. Overrides and returns one of them, considering which protocol the slave server
         * follows:
         *
         * - {@link ServerConnector}
         * - {@link WebServerConnector}
         * - {@link DedicatedWorkerServerConnector}
         * - {@link SharedWorkerServerConnector}
         *
         * @return A newly created {@link IServerConnector} object.
         */
        protected abstract createServerConnector(): protocol.IServerConnector;
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * Master of Parallel Processing System, a client connecting to slave servers.
     *
     * The {@link ParallelServerArray} is an abstract class, derived from the {@link ParallelSystemArray} class,
     * connecting to {@link IParallelServer parallel servers}.
     *
     * Extends this {@link ParallelServerArray} and overrides {@link createChild createChild()} method creating child
     * {@link IParallelServer} object. After the extending and overriding, construct children {@link IParallelServer}
     * objects and call the {@link connect connect()} method.
     *
     * #### [Inherited] {@link ParallelSystemArray}
     * @copydoc ParallelSystemArray
     */
    abstract class ParallelServerArray<System extends IParallelServer> extends ParallelSystemArray<System> implements external.IExternalServerArray<System> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * Mediator of Parallel Processing System, a client connecting to slave servers.
     *
     * The {@link ParallelServerArrayMediator} is an abstract class, derived from the {@link ParallelSystemArrayMediator}
     * class, connecting to {@link IParallelServer parallel servers}.
     *
     * Extends this {@link ParallelServerArrayMediator} and overrides {@link createChild createChild()} method creating
     * child {@link IParallelServer} object. After the extending and overriding, construct children
     * {@link IParallelServer} objects and call the {@link connect connect()} method.
     *
     * #### [Inherited] {@link ParallelSystemArrayMediator}
     * @copydoc ParallelSystemArrayMediator
     */
    abstract class ParallelServerArrayMediator<System extends IParallelServer> extends ParallelSystemArrayMediator<System> implements external.IExternalServerArray<System> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * Master of Parallel Processing System, be a server and client at the same time.
     *
     * The {@link ParallelServerClientArray} is an abstract class, derived from the {@link ParallelSystemArray} class,
     * opening a server accepting {@link ParallelSystem parallel clients} and being a client connecting to
     * {@link IParallelServer parallel servers} at the same time.
     *
     * Extends this {@link ParallelServerClientArray} and overrides below methods. After the overridings, open server
     * with {@link open open()} method and connect to {@link IParallelServer parallel servers} through the
     * {@link connect connect()} method.
     *
     * - {@link createServerBase createServerBase()}
     * - {@link createExternalClient createExternalClient()}
     * - {@link createExternalServer createExternalServer()}
     *
     * #### [Inherited] {@link ParallelSystemArray}
     * @copydoc ParallelClientArray
     */
    abstract class ParallelServerClientArray<System extends ParallelSystem> extends ParallelClientArray<System> implements external.IExternalServerClientArray<System> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method of a child Entity.
         *
         * This method is migrated to {@link createExternalServer}. Override the {@link createExternalServer} method.
         *
         * @param xml An {@link XML} object represents child element, so that can identify the type of child to create.
         * @return A new child Entity via {@link createExternalServer createExternalServer()}.
         */
        createChild(xml: library.XML): System;
        /**
         * Factory method creating an {@link IParallelServer} object.
         *
         * @param xml An {@link XML} object represents child element, so that can identify the type of child to create.
         * @return A newly created {@link IParallelServer} object.
         */
        protected abstract createExternalServer(xml: library.XML): System;
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * Mediator of Parallel Processing System, be a server and client at the same time as a **master**.
     *
     * The {@link ParallelServerClientArrayMediator} is an abstract class, derived from the
     * {@link ParallelSystemArrayMediator} class, opening a server accepting {@link ParallelSystem parallel clients} and
     * being a client connecting to {@link IParallelServer parallel servers} at the same time.
     *
     * Extends this {@link ParallelServerClientArrayMediator} and overrides below methods. After the overridings, open
     * server with {@link open open()} method and connect to {@link IParallelServer parallel servers} through the
     * {@link connect connect()} method.
     *
     * - {@link createServerBase createServerBase()}
     * - {@link createExternalClient createExternalClient()}
     * - {@link createExternalServer createExternalServer()}
     *
     * #### [Inherited] {@link ParallelSystemArrayMediator}
     * @copydoc ParallelClientArrayMediator
     */
    abstract class ParallelServerClientArrayMediator<System extends ParallelSystem> extends ParallelClientArrayMediator<System> implements external.IExternalServerClientArray<System> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method of a child Entity.
         *
         * This method is migrated to {@link createExternalServer}. Override the {@link createExternalServer} method.
         *
         * @param xml An {@link XML} object represents child element, so that can identify the type of child to create.
         * @return A new child Entity via {@link createExternalServer createExternalServer()}.
         */
        createChild(xml: library.XML): System;
        /**
         * Factory method creating an {@link IParallelServer} object.
         *
         * @param xml An {@link XML} object represents child element, so that can identify the type of child to create.
         * @return A newly created {@link IParallelServer} object.
         */
        protected abstract createExternalServer(xml: library.XML): System;
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * An interface for a parallel slave server driver.
     *
     * The easiest way to defining a driver for parallel **slave** server is extending {@link ParallelServer} class.
     * However, if you've to interact with a prallel **slave** system who can be both server and client, them make a class
     * (let's name it **BaseSystem**) extending the {@link ParallelSystem} class. At next, make a new class (now, I name it
     * **BaseServer**) extending the **BaseSystem** and implements this interface {@link IParallelServer}. Define the
     * **BaseServer** following those codes on below:
     *
     * <ul>
     *	<li> {@link ExternalServer}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/external/ExternalServer.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link ParallelServer}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/parallel/ParallelServer.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link DistributedServer}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/templates/distributed/DistributedServer.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     * </ul>
     *
     * @handbook [Templates - Parallel System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Parallel_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IParallelServer extends ParallelSystem {
        /**
         * Connect to slave server.
         */
        connect(): void;
    }
}
declare namespace samchon.templates.parallel {
    /**
     * History of an {@link Invoke} message.
     *
     * The {@link PRInvokeHistory} is a class archiving history log of an {@link Invoke} message which requests the
     * *parallel process*, created whenever {@link ParallelSystemArray.sendSegmentData} or
     * {@link ParallelSystemArray.sendSegmentData} is called.
     *
     * When the *parallel process* has completed, then {@link complete complete()} is called and the *elapsed time* is
     * determined. The elapsed time is utilized for computation of {@link ParallelSystem.getPerformance performance index}
     * of each {@link ParallelSystem parallel slave system}.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_parallel_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_parallel_system.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @handbook [Templates - Parallel System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Parallel_System)
     * @author Jeongho Nam <http://samchon.org>
     */
    class PRInvokeHistory extends slave.InvokeHistory {
        /**
         * @hidden
         */
        private first;
        /**
         * @hidden
         */
        private last;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from an {@link Invoke} message.
         *
         * @param invoke An {@link Invoke} message requesting a *parallel process*.
         */
        constructor(invoke: protocol.Invoke);
        /**
         * Get initial piece's index.
         *
         * Returns initial piece's index in the section of requested *parallel process*.
         *
         * @return The initial index.
         */
        getFirst(): number;
        /**
         * Get final piece's index.
         *
         * Returns initial piece's index in the section of requested *parallel process*. The range used is
         * [*first*, *last*), which contains all the pieces' indices between *first* and *last*, including the piece
         * pointed by index *first*, but not the piece pointed by the index *last*.
         *
         * @return The final index.
         */
        getLast(): number;
        /**
         * Compute number of allocated pieces.
         */
        computeSize(): number;
    }
}
declare namespace samchon.templates.service {
    /**
     * A driver of remote client.
     *
     * The {@link Client} is an abstract class representing and interacting with a remote client. It deals the network
     * communication with the remote client and shifts {@link Invoke} message to related {@link User} and {@link Service}
     * objects.
     *
     * Extends this {@link Client} class and override the {@link createService} method, a factory method creating a child
     * {@link Service} object. Note that, {@link Client} represents a remote client, not *an user*, a specific *web page*
     * or *service*. Do not define logics about user or account information. It must be declared in the parent
     * {@link User} class. Also, don't define processes of a specific a web page or service. Defines them in the child
     * {@link Service} class.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_cloud_service.png" target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_cloud_service.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @handbook [Templates - Cloud Service](https://github.com/samchon/framework/wiki/TypeScript-Templates-Cloud_Service)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class Client implements protocol.IProtocol {
        /**
         * @hidden
         */
        private user_;
        /**
         * @hidden
         */
        private no_;
        /**
         * @hidden
         */
        private communicator_;
        /**
         * @hidden
         */
        private service_;
        /**
         * Construct from parent {@link User} and communicator.
         *
         * @param user Parent {@link User} object.
         * @param driver Communicator with remote client.
         */
        constructor(user: User, driver: protocol.WebClientDriver);
        /**
         * Default Destructor.
         *
         * This {@link destructor destructor()} method is called when the {@link Client} object is destructed and this
         * {@link Client} object is destructed when connection with the remote client is closed or this {@link Client}
         * object is {@link User.erase erased} from its parent {@link User} object.
         *
         * Note that, don't call this {@link destructor destructor()} method by yourself. It must be called automatically
         * by those *destruction* cases. Also, if your derived {@link Client} class has something to do on the
         * *destruction*, then overrides this {@link destructor destructor()} method and defines the something to do.
         * Overriding this {@link destructor destructor()}, don't forget to calling ```super.destructor();``` on tail.
         *
         * ```typescript
         * class MyUser extends protocol.service.Client
         * {
         *     protected destructor(): void
         *     {
         *         // DO SOMETHING
         *         this.do_something();
         *
         *         // CALL SUPER.DESTRUCTOR() ON TAIL. DON'T FORGET THIS
         *         super.destructor();
         *     }
         * }
         * ```
         */
        protected destructor(): void;
        /**
         * Factory method creating {@link Service} object.
         *
         * @param path Requested path.
         * @return A newly created {@link Service} object or ```null```.
         */
        protected abstract createService(path: string): Service;
        /**
         * Close connection.
         */
        close(): void;
        /**
         * Get parent {@link User} object.
         *
         * Get the parent {@link User} object, who is groupping {@link Client} objects with same session id.
         *
         * @return The parent {@link User} object.
         */
        getUser(): User;
        /**
         * Get child {@link Service} object.
         *
         * @return The child {@link Service} object.
         */
        getService(): Service;
        /**
         * Get sequence number.
         *
         * Get sequence number of this {@link Client} object in the parent {@link User} object. This sequence number also
         * be a *key* in the parent {@link User} object, who extended the ```std.HashMap<number, Client>```.
         *
         * @return Sequence number.
         */
        getNo(): number;
        /**
         * Change related {@link Service} object.
         *
         * @param path Requested, identifier path.
         */
        protected changeService(path: string): void;
        /**
         * Change {@link Service} to another.
         *
         * @param service {@link service} object to newly assigned.
         */
        protected changeService(service: Service): void;
        /**
         * Send an {@link Invoke} message.
         *
         * Sends an {@link Invoke} message to remote client.
         *
         * @param invoke An {@link Invoke} messgae to send to remote client.
         */
        sendData(invoke: protocol.Invoke): void;
        /**
         * Handle a replied {@link Invoke} message.
         *
         * The default {@link Client.replyData Client.replyData()} shifts chain to its parent {@link User} and belonged
         * {@link Service} objects, by calling the the {@link User.replyData User.replyData()} and
         * {@link Service.replyData Service.replyData()} methods.
         *
         * Note that, {@link Client} represents a remote client, not *an user*, a specific *web page* or *service*. Do not
         * define logics about user or account information. It must be declared in the parent {@link User} class. Also,
         * don't define processes of a specific a web page or service. Defines them in the child {@link Service} class.
         *
         * ```typescript
         * class protocol.service.Client
         * {
         *     public replyData(invoke: protocol.Invoke): void
         *     {
         *         // SHIFT TO PARENT USER
         *         // THE PARENT USER ALSO MAY SHIFT TO ITS PARENT SERVER
         *         this.getUser().replyData(invoke);
         *
         *         // SHIFT TO BELOGED SERVICE
         *         if (this.getService() != null)
         *             this.getService().replyData(invoke);
         *     }
         * }
         *
         * class MyClient extends protocol.service.Client
         * {
         *     public replyData(invoke: protocol.Invoke): void
         *     {
         *         if (invoke.getListener() == "do_something_in_client_level")
         *             this.do_something_in_client_level();
         *         else
         *             super.replyData(invoke);
         *     }
         * }
         * ```
         *
         * @param invoke An {@link Invoke invoke} message to be handled in {@link Client} level.
         */
        replyData(invoke: protocol.Invoke): void;
    }
}
/**
 * A system template for Cloud Service.
 *
 * @handbook [Templates - Cloud Service](https://github.com/samchon/framework/wiki/TypeScript-Templates-Cloud_Service)
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace samchon.templates.service {
    /**
     * A cloud server.
     *
     * The {@link Server} is an abstract server class, who can build a real-time cloud server, that is following the
     * web-socket protocol. Extends this {@link Server} and related classes and overrides abstract methods under below.
     * After the overridings, open this {@link Server cloud server} using the {@link open open()} method.
     *
     * - Objects in composite relationship and their factory methods
     *   - {@link User}: {@link Server.createUser Server.createUser()}
     *   - {@link Client}: {@link User.createClient User.createClient()}
     *   - {@link Service}: {@link Client.createService Client.createService()}
     * - {@link Invoke} message chains; {@link IProtocol.replyData replyData}
     *   - {@link Server.replyData}
     *   - {@link User.replyData}
     *   - {@link Client.replyData}
     *   - {@link Service.replyData}
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_cloud_service.png" target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_cloud_service.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @handbook [Templates - Cloud Service](https://github.com/samchon/framework/wiki/TypeScript-Templates-Cloud_Service)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class Server extends protocol.WebServer implements protocol.IProtocol {
        /**
         * @hidden
         */
        private session_map_;
        /**
         * @hidden
         */
        private account_map_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method creating {@link User} object.
         *
         * @return A newly created {@link User} object.
         */
        protected abstract createUser(): User;
        /**
         * Test wheter an {@link User} exists with the *accountID*.
         *
         * @param accountID Account id of {@link User} to find.
         * @return Exists or not.
         */
        has(accountID: string): boolean;
        /**
         * Get an {@link User} object by its *accountID*.
         *
         * @param accountID Account id of {@link User} to get.
         * @return An {@link User} object.
         */
        get(accountID: string): User;
        /**
         * Send an {@link Invoke} message.
         *
         * Sends an {@link Invoke} message to all remote clients through the belonged {@link User} and {@link Client}
         * objects. Sending the {@link Invoke} message to all remote clients, it's came true by passing through
         * {@link User.sendData User.sendData()}. And the {@link User.sendData} also pass through the
         * {@link Client.sendData Client.sendData()}.
         *
         * ```typescript
         * class protocol.service.Server
         * {
         *     public sendData(invoke: Invoke): void
         *     {
         *         for (user: User in this)
         *             for (client: Client in user)
         *                 client.sendData(invoke);
         *     }
         * }
         * ```
         *
         * @param invoke {@link Invoke} message to send to all remote clients.
         */
        sendData(invoke: protocol.Invoke): void;
        /**
         * Handle a replied {@link Invoke} message.
         *
         * The {@link Server.replyData Server.replyData()} is an abstract method that handling {@link Invoke} message
         * that should be handled in the {@link Server} level. Overrides this {@link replyData replyData()} method and
         * defines what to do with the {@link Invoke} message in this {@link Server} level.
         *
         * @param invoke An {@link Invoke invoke} message to be handled in {@link Server} level.
         */
        abstract replyData(invoke: protocol.Invoke): void;
        /**
         * Add a newly connected remote client.
         *
         * When a {@link WebClientDriver remote client} connects to this cloud server, then {@link Server} queries the
         * {WebClientDriver.getSessionID session id} of the {@link WebClientDriver remote client}. If the
         * {WebClientDriver.getSessionID session id} is new one, then creates a new {@link User} object.
         *
         * At next, creates a {@link Client} object who represents the newly connected remote client and insert the
         * {@link Client} object to the matched {@link User} object which is new or ordinary one following the
         * {WebClientDriver.getSessionID session id}. At last, a {@link Service} object can be created with referencing
         * the {@link WebClientDriver.getPath path}.
         *
         * List of objects can be created by this method.
         * - {@link User} by {@link createUser createUser()}.
         * - {@link Client} by {@link User.createClient User.createClient()}.
         * - {@link Service} by {@link Client.createService Client.createService()}.
         *
         * @param driver A web communicator for remote client.
         */
        addClient(driver: protocol.WebClientDriver): void;
        /**
         * @hidden
         */
        private _Erase_user(user);
    }
}
declare namespace samchon.templates.service {
    /**
     * A service.
     *
     * The {@link Service} is an abstract class who represents a service, that is providing functions a specific page.
     *
     * Extends the {@link Service} class and defines its own service, which to be provided for the specific weg page,
     * by overriding the {@link replyData replyData()} method. Note that, the service, functions for the specific page
     * should be defined in this {@link Service} class, not its parent {@link Client} class who represents a remote client
     * and takes communication responsibility.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_cloud_service.png" target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_cloud_service.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @handbook [Templates - Cloud Service](https://github.com/samchon/framework/wiki/TypeScript-Templates-Cloud_Service)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class Service implements protocol.IProtocol {
        /**
         * @hidden
         */
        private client_;
        /**
         * @hidden
         */
        private path_;
        /**
         * Construct from parent {@link Client} and requested path.
         *
         * @param client Driver of remote client.
         * @param path Requested path that identifies this {@link Service}.
         */
        constructor(client: Client, path: string);
        /**
         * Default Destructor.
         *
         * This {@link destructor destructor()} method is call when the {@link Service} object is destructed and the
         * {@link Service} object is destructed when its parent {@link Client} object has
         * {@link Client.destructor destructed} or the {@link Client} object {@link Client.changeService changed} its
         * child {@link Service service} object to another one.
         *
         * Note that, don't call this {@link destructor destructor()} method by yourself. It must be called automatically
         * by those *destruction* cases. Also, if your derived {@link Service} class has something to do on the
         * *destruction*, then overrides this {@link destructor destructor()} method and defines the something to do.
         */
        protected destructor(): void;
        /**
         * Get client.
         */
        getClient(): Client;
        /**
         * Get requested path.
         */
        getPath(): string;
        /**
         * Send an {@link Invoke} message.
         *
         * Sends an {@link Invoke} message to remote system through parent {@link Client} object ({@link Client.sendData}).
         *
         * @param invoke An {@link Invoke} message to send to the remte system.
         */
        sendData(invoke: protocol.Invoke): void;
        /**
         * @inheritdoc
         */
        abstract replyData(invoke: protocol.Invoke): void;
    }
}
declare namespace samchon.templates.service {
    /**
     * An user.
     *
     * The {@link User} is an abstract class groupping {@link Client} objects, who communicates with remote client, with
     * same *session id*. This {@link User} represents a *remote user* literally. Within framework of remote system,
     * an {@link User} corresponds to a web-browser and a {@link Client} represents a window in the web-browser.
     *
     * Extends this {@link User} class and override the {@link createClient} method, a factory method creating a child
     * {@link Client} object. I repeat, the {@link User} class represents a *remote user*, groupping {@link Client}
     * objects with same *session id*. If your cloud server has some processes to be handled in the **user level**, then
     * defines method in this {@link User} class. Methods managing **account** under below are some of them:
     *
     * - {@link setAccount setAccount()}
     * - {@link getAccountID getAccountID()}
     * - {@link getAuthority getAuthority()}
     *
     * The children {@link Client} objects, they're contained with their key, the {@link Client.getNo sequence number}.
     * If you {@link User.erase erase} the children {@link Client} object by yourself, then their connection with the
     * remote clients will be {@link Client.close closed} and their {@link Client.destructor destruction method} will be
     * called. If you remove {@link clear all children}, then this {@link User} object will be also
     * {@link destructor destructed} and erased from the parent {@link Server} object.
     *
     * <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_cloud_service.png" target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/templates_cloud_service.png"
     *		 style="max-width: 100%" />
     * </a>
     *
     * @handbook [Templates - Cloud Service](https://github.com/samchon/framework/wiki/TypeScript-Templates-Cloud_Service)
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class User extends collections.HashMapCollection<number, Client> implements protocol.IProtocol {
        /**
         * @hidden
         */
        private server_;
        /**
         * @hidden
         */
        private session_id_;
        /**
         * @hidden
         */
        private sequence_;
        /**
         * @hidden
         */
        private account_id_;
        /**
         * @hidden
         */
        private authority_;
        /**
         * Construct from its parent {@link Server}.
         *
         * @param server The parent {@link Server} object.
         */
        constructor(server: Server);
        /**
         * Default Destructor.
         *
         * This {@link destructor destructor()} method is called when the {@link User} object is destructed. The
         * {@link User} object is destructed when connections with the remote clients are all closed, that is all the
         * children {@link Client} objects are all removed, and 30 seconds has left. If some remote client connects
         * within the 30 seconds, then the {@link User} object doesn't be destructed.
         *
         * Note that, don't call this {@link destructor destructor()} method by yourself. It must be called automatically
         * by those *destruction* cases. Also, if your derived {@link User} class has something to do on the
         * *destruction*, then overrides this {@link destructor destructor()} method and defines the something to do.
         * Overriding this {@link destructor destructor()}, don't forget to calling ```super.destructor();``` on tail.
         *
         * ```typescript
         * class MyUser extends protocol.service.User
         * {
         *     protected destructor(): void
         *     {
         *         // DO SOMETHING
         *         this.do_something();
         *
         *         // CALL SUPER.DESTRUCTOR() ON TAIL. DON'T FORGET THIS
         *         super.destructor();
         *     }
         * }
         * ```
         */
        protected destructor(): void;
        /**
         * Factory method creating a {@link Client} object.
         *
         * @param driver A web communicator for remote client.
         * @return A newly created {@link Client} object.
         */
        protected abstract createClient(driver: protocol.WebClientDriver): Client;
        /**
         * @hidden
         */
        private _Handle_erase_client(event);
        /**
         * Get parent {@lin Server} object.
         *
         * @return Parent {@link Server} object.
         */
        getServer(): Server;
        /**
         * Get account id.
         *
         * @return Account ID.
         */
        getAccountID(): string;
        /**
         * Get authority.
         *
         * @return Authority
         */
        getAuthority(): number;
        /**
         * Set *account id* and *authority*.
         *
         * The {@link setAccount setAccount()} is a method configuring *account id* and *authority* of this {@link User}.
         *
         * After the configuring, the {@link getAccountID account id} is enrolled into the parent {@link Server} as a
         * **key** for this {@link User} object. You can test existence and access this {@link User} object from
         * {@link Server.has Server.has()} and {@link Server.get Server.get()} with the {@link getAccountID account id}.
         * Of course, if ordinary {@link getAccountID account id} had existed, then the ordinary **key** will be
         * replaced.
         *
         * As you suggest, this {@link setAccount setAccount()} is something like a **log-in** function. If what you want
         * is not **logging-in**, but **logging-out**, then configure the *account id* to empty string ``""```` or call
         * the {@link lgout logout()} method.
         *
         * @param id To be account id.
         * @param authority To be authority.
         */
        setAccount(id: string, authority: number): void;
        /**
         * Log-out.
         *
         * This {@link logout logout()} method configures {@link getAccountID account id} to empty string and
         * {@link getAuthority authority} to zero.
         *
         * The ordinary {@link getAccountID account id} will be also erased from the parent {@link Server} object. You
         * can't access this {@link User} object from {@link Server.has Server.has()} and {@link Server.get Server.get()}
         * with the ordinary {@link getAccountID account id} more.
         */
        logout(): void;
        /**
         * Send an {@link Invoke} message.
         *
         * Sends an {@link Invoke} message to all remote clients through the belonged {@link Client} objects. Sending the
         * {@link Invoke} message to all remote clients, it's came true by passing through the
         * {@link Client.sendData Client.sendData()} methods.
         *
         * ```typescript
         * class protocol.service.User
         * {
         *     public sendData(invoke: Invoke): void
         *     {
         *         for (let it = this.begin(); !it.equals(this.end()); it = it.next())
         *             it.second.sendData(invoke);
         *     }
         * }
         * ```
         *
         * @param invoke {@link Invoke} message to send to all remote clients.
         */
        sendData(invoke: protocol.Invoke): void;
        /**
         * Handle a replied {@link Invoke} message.
         *
         * The default {@link User.replyData User.replyData()} shifts chain to its parent {@link Server} object, by
         * calling the {@link Server.replyData Server.replyData()} method. If there're some {@link Invoke} message to be
         * handled in this {@link User} level, then override this method and defines what to do with the {@link Invoke}
         * message in this {@link User} level.
         *
         * ```typescript
         * class protocol.service.User
         * {
         *     public replyData(invoke: protocol.Invoke): void
         *     {
         *         this.getServer().replyData(invoke);
         *     }
         * }
         *
         * class MyUser extends protocol.service.User
         * {
         *     public replyData(invoke: protocol.Invoke): void
         *     {
         *          if (invoke.apply(this) == false) // IS TARGET TO BE HANDLED IN THIS USER LEVEL
         *              super.replyData(invoke); // SHIFT TO SERVER
         *     }
         * }
         * ```
         *
         * @param invoke An {@link Invoke invoke} message to be handled in {@link User} level.
         */
        replyData(invoke: protocol.Invoke): void;
    }
}
declare namespace samchon.templates.slave {
    /**
     * An {@link Invoke} message which represents a **process**.
     *
     *
     *
     * #### [Inherited] {@link Invoke}
     * @copydoc Invoke
     */
    class PInvoke extends protocol.Invoke {
        /**
         * @hidden
         */
        private history_;
        /**
         * @hidden
         */
        private slave_system_;
        /**
         * @hidden
         */
        private hold_;
        /**
         * Initializer Constructor.
         *
         * @param invoke Original {@link Invoke} message.
         * @param history {@link InvokeHistory} object archiving execution time.
         * @param slaveSystem Related {@link SlaveSystem} object who gets those processes from its master.
         */
        constructor(invoke: protocol.Invoke, history: InvokeHistory, slaveSystem: SlaveSystem);
        /**
         * Get history object.
         *
         * Get {@link InvokeHistory} object who is archiving execution time of this process.
         */
        getHistory(): InvokeHistory;
        /**
         * Is the reporting hold?
         */
        isHold(): boolean;
        /**
         * Hold reporting completion to master.
         */
        hold(): void;
        /**
         * Report completion.
         */
        complete(): void;
    }
}
declare namespace samchon.templates.slave {
    interface ISlaveClient extends SlaveSystem {
        connect(ip: string, port: number): void;
    }
    abstract class SlaveClient extends SlaveSystem implements ISlaveClient {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        protected abstract createServerConnector(): protocol.IServerConnector;
        /**
         * @inheritdoc
         */
        connect(ip: string, port: number): void;
    }
}
declare namespace samchon.templates.slave {
    interface ISlaveServer extends SlaveSystem, protocol.IServer {
    }
    abstract class SlaveServer extends SlaveSystem implements ISlaveServer {
        /**
         * @hidden
         */
        private server_base_;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        protected abstract createServerBase(): protocol.IServerBase;
        /**
         * @inheritdoc
         */
        open(port: number): void;
        /**
         * @inheritdoc
         */
        close(): void;
        /**
         * @inheritdoc
         */
        addClient(driver: protocol.IClientDriver): void;
    }
}
