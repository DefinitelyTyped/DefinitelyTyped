// Type definitions for Samchon Framework v2.0.0-beta.1
// Project: https://github.com/samchon/framework
// Definitions by: Jeongho Nam <http://samchon.org>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="typescript-stl" />

declare module "samchon-framework"
{
        export = samchon;
}

/**
 * <h1> Samchon-Framework </h1>
 *
 * <p> <a href="https://nodei.co/npm/samchon-framework">
 *	<img src="https://nodei.co/npm/samchon-framework.png?downloads=true&downloadRank=true&stars=true"> </a> </p>
 *
 * <p> Samchon, a SDN (Software Defined Network) framework. </p>
 *
 * <p> With Samchon Framework, you can implement distributed processing system within framework of OOD like
 * handling S/W objects (classes). You can realize cloud and distributed system very easily with provided
 * system templates and even integration with C++ is possible. </p>
 *
 * <p> The goal, ultimate utilization model of Samchon Framework is, building cloud system with NodeJS and
 * takING heavy works to C++ distributed systems with provided modules (those are system templates). </p>
 *
 * @git https://github.com/samchon/framework
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace samchon {
    /**
     * <p> Running on Node. </p>
     *
     * <p> Test whether the JavaScript is running on Node. </p>
     *
     * @references http://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser
     */
    function is_node(): boolean;
}
declare namespace samchon.collection {
    /**
     * A {@link Vector} who can detect element I/O events.
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *		<li> {@link push_back} </li>
     *		<li> {@link unshift} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *		<li> {@link pop_back} </li>
     *		<li> {@link shift} </li>
     *		<li> {@link pop} </li>
     *		<li> {@link splice} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link sort} </li>
     *	</ul></li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class ArrayCollection<T> extends std.Vector<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        push<U extends T>(...items: U[]): number;
        /**
         * @inheritdoc
         */
        push_back(val: T): void;
        /**
         * @hidden
         */
        protected insert_by_repeating_val(position: std.VectorIterator<T>, n: number, val: T): std.VectorIterator<T>;
        /**
         * @hidden
         */
        protected insert_by_range<U extends T, InputIterator extends std.Iterator<U>>(position: std.VectorIterator<T>, begin: InputIterator, end: InputIterator): std.VectorIterator<T>;
        /**
         * @inheritdoc
         */
        pop_back(): void;
        /**
         * @hidden
         */
        protected erase_by_range(first: std.VectorIterator<T>, last: std.VectorIterator<T>): std.VectorIterator<T>;
        /**
         * @hidden
         */
        private notify_insert(first, last);
        /**
         * @hidden
         */
        private notify_erase(first, last);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
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
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        unshift<U extends T>(...items: U[]): number;
        /**
         * @inheritdoc
         */
        pop(): T;
        /**
         * @inheritdoc
         */
        splice(start: number): T[];
        /**
         * @inheritdoc
         */
        splice(start: number, deleteCount: number, ...items: T[]): T[];
    }
}
declare namespace samchon.library {
    /**
     * A basic event class of Samchon Framework.
     *
     * @reference https://developer.mozilla.org/en-US/docs/Web/API/Event
     * @author Jeongho Nam <http://samchon.org>
     */
    class BasicEvent implements Event {
        NONE: number;
        CAPTURING_PHASE: number;
        AT_TARGET: number;
        BUBBLING_PHASE: number;
        private type_;
        private target_;
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
        preventDefault(): void;
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
        type: string;
        /**
         * @inheritdoc
         */
        target: IEventDispatcher;
        /**
         * @inheritdoc
         */
        currentTarget: IEventDispatcher;
        /**
         * @inheritdoc
         */
        isTrusted: boolean;
        /**
         * @inheritdoc
         */
        bubbles: boolean;
        /**
         * @inheritdoc
         */
        cancelable: boolean;
        /**
         * @inheritdoc
         */
        eventPhase: number;
        /**
         * @inheritdoc
         */
        defaultPrevented: boolean;
        /**
         * @inheritdoc
         */
        srcElement: Element;
        /**
         * @inheritdoc
         */
        cancelBubble: boolean;
        /**
         * @inheritdoc
         */
        timeStamp: number;
        /**
         * Don't know what it is.
         */
        returnValue: boolean;
    }
    class ProgressEvent extends library.BasicEvent {
        static PROGRESS: string;
        protected numerator_: number;
        protected denominator_: number;
        constructor(type: string, numerator: number, denominator: number);
        numerator: number;
        denominator: number;
    }
}
declare namespace samchon.collection {
    /**
     * Type of function pointer for listener of {@link CollectionEvent CollectionEvents}.
     */
    interface CollectionEventListener<T> extends EventListener {
        (event: CollectionEvent<T>): void;
    }
}
declare namespace samchon.collection {
    /**
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
         * Initialization Constructor.
         *
         * @param type Type of collection event.
         * @param first
         * @param last
         */
        constructor(type: string, first: std.Iterator<T>, last: std.Iterator<T>);
        constructor(type: "insert", first: std.Iterator<T>, last: std.Iterator<T>);
        constructor(type: "erase", first: std.Iterator<T>, last: std.Iterator<T>);
        constructor(type: "refresh", first: std.Iterator<T>, last: std.Iterator<T>);
        /**
         * Get associative container.
         */
        container: ICollection<T>;
        /**
         * Get range of the first.
         */
        first: std.Iterator<T>;
        /**
         * Get range of the last.
         */
        last: std.Iterator<T>;
    }
}
declare namespace samchon.collection.CollectionEvent {
    const INSERT: string;
    const ERASE: string;
    const REFRESH: string;
}
declare namespace samchon.collection {
    /**
     * A {@link Deque} who can detect element I/O events.
     *
     * <p> Below are list of methods who are dispatching {@link CollectionEvent}: </p>
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *		<li> {@link push_front} </li>
     *		<li> {@link push_back} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *		<li> {@link pop_front} </li>
     *		<li> {@link pop_back} </li>
     *	</ul></li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class DequeCollection<T> extends std.Deque<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        push<U extends T>(...items: U[]): number;
        /**
         * @inheritdoc
         */
        push_back(val: T): void;
        /**
         * @hidden
         */
        protected insert_by_repeating_val(position: std.DequeIterator<T>, n: number, val: T): std.DequeIterator<T>;
        /**
         * @hidden
         */
        protected insert_by_range<U extends T, InputIterator extends std.Iterator<U>>(position: std.DequeIterator<T>, begin: InputIterator, end: InputIterator): std.DequeIterator<T>;
        /**
         * @inheritdoc
         */
        pop_back(): void;
        /**
         * @hidden
         */
        protected erase_by_range(first: std.DequeIterator<T>, last: std.DequeIterator<T>): std.DequeIterator<T>;
        /**
         * @hidden
         */
        private notify_insert(first, last);
        /**
         * @hidden
         */
        private notify_erase(first, last);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
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
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link HashMap} who can detect element I/O events.
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *		<li> {@link set} </li>
     *		<li> {@link insert_or_assign} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *		<li> {@link extract} </li>
     *	</ul></li>
     *	<li> <i>refresh</i> typed events: <ul>
     *		<li> {@link set} </li>
     *		<li> {@link insert_or_assign} </li>
     *	</ul></li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMapCollection<Key, T> extends std.HashMap<Key, T> implements ICollection<std.Pair<Key, T>> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        protected handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        protected handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
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
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link HashMultiMap} who can detect element I/O events.
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *	</ul></li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMultiMapCollection<Key, T> extends std.HashMap<Key, T> implements ICollection<std.Pair<Key, T>> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        protected handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        protected handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
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
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link HashMultiSet} who can detect element I/O events.
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *	</ul></li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMultiSetCollection<T> extends std.HashMultiSet<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
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
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link HashSet} who can detect element I/O events.
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *		<li> {@link extract} </li>
     *	</ul></li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashSetCollection<T> extends std.HashSet<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        protected handle_insert(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        protected handle_erase(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
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
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * An interface for {@link IContainer containers} who can detect element I/O events.
     *
     * <p> Below are list of methods who are dispatching {@link CollectionEvent}: </p>
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *	</ul></li>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface ICollection<T> extends std.base.IContainer<T>, library.IEventDispatcher {
        /**
         * <p> Dispatch a {@link CollectionEvent} with <i>refresh</i> typed. </p>
         *
         * <p> {@link ICollection} dispatches {@link CollectionEvent} typed <i>insert</i> or <i>erase</i> whenever
         * elements I/O has occured. However, unlike those elements I/O events, content change in element level can't be
         * detected. There's no way to detect those events automatically by {@link IContainer}. </p>
         *
         * <p> If you want to dispatch those typed events (notifying change on contents in element level), you've to
         * dispatch <i>refresh</i> typed event manually, by yourself. Call {@link refresh refresh()} with specified
         * iterators who're pointing the elements whose content have changed. Then a {@link CollectionEvent} with
         * <i>refresh</i> typed will be dispatched. </p>
         *
         * <p> If you don't specify any iterator, then the range of the <i>refresh<i> event will be all elements in this
         * {@link ICollection collection}; {@link begin begin()} to {@link end end()}. </p>
         */
        refresh(): void;
        /**
         * <p> Dispatch a {@link CollectionEvent} with <i>refresh</i> typed. </p>
         *
         * <p> {@link ICollection} dispatches {@link CollectionEvent} typed <i>insert</i> or <i>erase</i> whenever
         * elements I/O has occured. However, unlike those elements I/O events, content change in element level can't be
         * detected. There's no way to detect those events automatically by {@link IContainer}. </p>
         *
         * <p> If you want to dispatch those typed events (notifying change on contents in element level), you've to
         * dispatch <i>refresh</i> typed event manually, by yourself. Call {@link refresh refresh()} with specified
         * iterators who're pointing the elements whose content have changed. Then a {@link CollectionEvent} with
         * <i>refresh</i> typed will be dispatched. </p>
         *
         * @param it An iterator targeting the content changed element.
         */
        refresh(it: std.Iterator<T>): void;
        /**
         * <p> Dispatch a {@link CollectionEvent} with <i>refresh</i> typed. </p>
         *
         * <p> {@link ICollection} dispatches {@link CollectionEvent} typed <i>insert</i> or <i>erase</i> whenever
         * elements I/O has occured. However, unlike those elements I/O events, content change in element level can't be
         * detected. There's no way to detect those events automatically by {@link IContainer}. </p>
         *
         * <p> If you want to dispatch those typed events (notifying change on contents in element level), you've to
         * dispatch <i>refresh</i> typed event manually, by yourself. Call {@link refresh refresh()} with specified
         * iterators who're pointing the elements whose content have changed. Then a {@link CollectionEvent} with
         * <i>refresh</i> typed will be dispatched. </p>
         *
         * @param first An Iterator to the initial position in a sequence of the content changed elmeents.
         * @param last An {@link Iterator} to the final position in a sequence of the content changed elements. The range
         *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
         *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by
         *			   <i>last</i>.
         */
        refresh(first: std.Iterator<T>, last: std.Iterator<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link List} who can detect element I/O events.
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *		<li> {@link push_front} </li>
     *		<li> {@link push_back} </li>
     *		<li> {@link merge} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *		<li> {@link pop_front} </li>
     *		<li> {@link pop_back} </li>
     *		<li> {@link unique} </li>
     *		<li> {@link remove} </li>
     *		<li> {@link remove_if} </li>
     *		<li> {@link splice} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link sort} </li>
     *	</ul></li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class ListCollection<T> extends std.List<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        push<U extends T>(...items: T[]): number;
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
        protected insert_by_repeating_val(position: std.ListIterator<T>, n: number, val: T): std.ListIterator<T>;
        /**
         * @hidden
         */
        protected insert_by_range<U extends T, InputIterator extends std.Iterator<U>>(position: std.ListIterator<T>, begin: InputIterator, end: InputIterator): std.ListIterator<T>;
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
        protected erase_by_range(first: std.ListIterator<T>, last: std.ListIterator<T>): std.ListIterator<T>;
        /**
         * @hidden
         */
        private notify_insert(first, last);
        /**
         * @hidden
         */
        private notify_erase(first, last);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
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
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link TreeMap} who can detect element I/O events.
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *		<li> {@link set} </li>
     *		<li> {@link insert_or_assign} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *		<li> {@link extract} </li>
     *	</ul></li>
     *	<li> <i>refresh</i> typed events: <ul>
     *		<li> {@link set} </li>
     *		<li> {@link insert_or_assign} </li>
     *	</ul></li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMapCollection<Key, T> extends std.TreeMap<Key, T> implements ICollection<std.Pair<Key, T>> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        protected handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        protected handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
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
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link TreeMultiMap} who can detect element I/O events.
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *	</ul></li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMultiMapCollection<Key, T> extends std.TreeMultiMap<Key, T> implements ICollection<std.Pair<Key, T>> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        protected handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        protected handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
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
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<std.Pair<Key, T>>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link TreeMultiSet} who can detect element I/O events.
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *	</ul></li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMultiSetCollection<T> extends std.TreeMultiSet<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        protected handle_insert(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        protected handle_erase(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
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
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.collection {
    /**
     * A {@link TreeMap} who can detect element I/O events.
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *		<li> {@link extract} </li>
     *	</ul></li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeSetCollection<T> extends std.TreeSet<T> implements ICollection<T> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
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
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
    }
}
declare namespace samchon.library {
    /**
     * <p> XML is a class representing a tree structued xml objects. </p>
     * <p> The XML class provides methods and properties for working with XML objects. </p>
     *
     * <p> The XML class (along with the XMLList and Namespace) implements
     * the powerful XML-handling standard defined in ECMAScript for XML (E4X) specification. </p>
     *
     * <p> XML class has a recursive, hierarchical relationship. </p>
     *
     * <p> Relationships between XML and XMLList </p>
     * <ul>
     *	<li> XML contains XMLList from dictionary of XMLList. </li>
     *  <li> XMLList contains XML from vector of XML. </li>
     * </ul>
     *
     * <h4> Note </h4>
     * <p> Do not abuse values for expressing member variables. </p>
     *
     * <table>
     *	<tr>
     *		<th>Standard Usage</th>
     *		<th>Non-standard usage abusing value</th>
     *	</tr>
     *	<tr>
     *		<td>
     *			&lt;memberList&gt;<br/>
     *			&nbsp;&nbsp;&nbsp;&nbsp; &lt;member id='jhnam88' name='Jeongho+Nam' birthdate='1988-03-11' /&gt;<br/>
     *			&nbsp;&nbsp;&nbsp;&nbsp; &lt;member id='master' name='Administartor' birthdate='2011-07-28' /&gt;<br/>
     *			&lt;/memberList&gt;
     *		</td>
     *		<td>
     *			&lt;member&gt;<br/>
     *			&nbsp;&nbsp;&nbsp;&nbsp; &lt;id&gt;jhnam88&lt;/id&gt;<br/>
     *			&nbsp;&nbsp;&nbsp;&nbsp; &lt;name&gt;Jeongho+Nam&lt;/name&gt;<br/>
     *			&nbsp;&nbsp;&nbsp;&nbsp; &lt;birthdate&gt;1988-03-11&lt;/birthdate&gt;<br/>
     *			&lt;/member&gt;
     *		</td>
     *	</tr>
     * </table>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class XML extends std.HashMap<string, XMLList> {
        /**
         * <p> Tag name of the XML. </p>
         *
         * <ul>
         *	<li> \<<b>tag</b> label='property' /\>: tag => \"tag\" </li>
         *  <li> \<<b>price</b> high='1500' low='1300' open='1450' close='1320' /\>: tag => \"price\" </li>
         * </ul>
         */
        private tag;
        /**
         * <p> Value of the XML. </p>
         *
         * <ul>
         *  <li> \<parameter name='age' type='int'\><b>26</b>\</parameter\>: value => 26 </li>
         *	<li> \<price high='1500' low='1300' open='1450' close='1320' /\>: value => null </li>
         * </ul>
         */
        private value;
        /**
         * <p> Properties belongs to the XML. </p>
         * <p> A Dictionary of properties accessing each property by its key. </p>
         *
         * <ul>
         *	<li> \<price <b>high='1500' low='1300' open='1450' close='1320'</b> /\>:
         *		propertyMap => {{\"high\": 1500}, {\"low\": 1300}, {\"open\": 1450}, {\"close\", 1320}} </li>
         *	<li> \<member <b>id='jhnam88' name='Jeongho+Nam' comment='Hello.+My+name+is+Jeongho+Nam'</b> \>:
         *		propertyMap => {{\"id\", \"jhnam88\"}, {\"name\", \"Jeongho Nam <http://samchon.org>\"},
         *					 {\"comment\", \"Hello. My name is Jeongho Nam <http://samchon.org>\"}} </li>
         * </ul>
         */
        private properties;
        /**
         * <p> Default Constructor. </p>
         *
         * <p> If the string parameter is not omitted, constructs its tag, value and
         * properties by parsing the string. If there's children, then construct the
         * children XML, XMLList objects, too. </p>
         *
         * @param str A string to be parsed
         */
        constructor(str?: string);
        /**
         * <p> Construct XML objects by parsing a string. </p>
         */
        private construct(str);
        /**
         * <p> Parse and fetch a tag. </p>
         */
        private parseTag(str);
        /**
         * <p> Parse and fetch properties. </p>
         */
        private parseProperty(str);
        /**
         * <p> Parse and fetch a value. </p>
         */
        private parseValue(str);
        /**
         * <p> Parse and construct children XML objects. </p>
         */
        private parseChildren(str);
        /**
         * <p> Get tag. </p>
         */
        getTag(): string;
        /**
         * <p> Get value. </p>
         */
        getValue(): string;
        /**
         * <p> Test whether a property exists or not. </p>
         */
        hasProperty(key: string): boolean;
        /**
         * <p> Get property by its key. </p>
         */
        getProperty(key: string): string;
        getPropertyMap(): std.HashMap<string, string>;
        /**
         * <p> Set tag (identifier) of the XML. </p>
         */
        setTag(str: string): void;
        /**
         * <p> Set value of the XML. </p>
         *
         * <p> Do not abuse values for expressing member variables. </p>
         * <table>
         *	<tr>
         *		<th>Standard Usage</th>
         *		<th>Non-standard usage abusing value</th>
         *	</tr>
         *	<tr>
         *		<td>
         *			\<memberList\>\n
         *			&nbsp;&nbsp;&nbsp;&nbsp;\<member id='jhnam88' name='Jeongho+Nam' birthdate='1988-03-11' /\>\n
         *			&nbsp;&nbsp;&nbsp;&nbsp;\<member id='master' name='Administartor' birthdate='2011-07-28' /\>\n
         *			\</memberList\>
         *		</td>
         *		<td>
         *			\<member\>\n
         *				\<id\>jhnam88\</id\>\n
         *				\<name\>Jeongho+Nam\</name\>\n
         *				\<birthdate\>1988-03-11\</birthdate\>\n
         *			\</member\>
         *		</td>
         *	</tr>
         * </table>
         *
         * @param val A value to set
         */
        setValue(str: string): void;
        /**
         * <p> Set a property with its key. </p>
         */
        setProperty(key: string, value: string): void;
        /**
         * <p> Erase a property by its key. </p>
         *
         * @param key The key of the property to erase
         * @throw exception out of range
         */
        eraseProperty(key: string): void;
        push<L extends string, U extends XMLList>(...args: std.Pair<L, U>[]): number;
        push<L extends string, U extends XMLList>(...args: [L, U][]): number;
        push(...xmls: XML[]): number;
        push(...xmlLists: XMLList[]): number;
        addAllProperties(xml: XML): void;
        clearProperties(): void;
        private calcMinIndex(...args);
        /**
         * <p> Decode a value. </p>
         *
         * <table>
         *	<tr>
         *		<th>Encoded</th>
         *		<th>Decoded</th>
         *	</tr>
         *	<tr>
         *		<td>\&amp;</td>
         *		<td>\&</td>
         *	</tr>
         *	<tr>
         *		<td>\&lt;</td>
         *		<td>\<</td>
         *	</tr>
         *	<tr>
         *		<td>\&gt;</td>
         *		<td>\></td>
         *	</tr>
         * </table>
         *
         * @return A decoded string represents a value
         */
        static decodeValue(str: string): string;
        /**
         * <p> Encode a value. </p>
         *
         * <table>
         *	<tr>
         *		<th>Original</th>
         *		<th>Encoded</th>
         *	</tr>
         *	<tr>
         *		<td>\&</td>
         *		<td>\&amp;</td>
         *	</tr>
         *	<tr>
         *		<td>\<</td>
         *		<td>\&lt;</td>
         *	</tr>
         *	<tr>
         *		<td>\></td>
         *		<td>\&gt;</td>
         *	</tr>
         * </table>
         *
         * @return A encoded string represents a value
         */
        static encodeValue(str: string): string;
        /**
          * <p> Decode a property. </p>
          *
          * <table>
          *	<tr>
          *		<th>Encoded</th>
          *		<th>Decoded</th>
          *	</tr>
          *	<tr>
          *		<td>\&amp;</td>
          *		<td>\&</td>
          *	</tr>
          *	<tr>
          *		<td>\&lt;</td>
          *		<td>\<</td>
          *	</tr>
          *	<tr>
          *		<td>\&gt;</td>
          *		<td>\></td>
          *	</tr>
          *	<tr>
          *		<td>&quot;</td>
          *		<td>\"</td>
          *	</tr>
          *	<tr>
          *		<td>&apos;</td>
          *		<td>'</td>
          *	</tr>
          *	<tr>
          *		<td>&#x9;</td>
          *		<td>'</td>
          *	</tr>
          *	<tr>
          *		<td>&apos;</td>
          *		<td>\\t</td>
          *	</tr>
          *	<tr>
          *		<td>&#xA;</td>
          *		<td>\\n</td>
          *	</tr>
          *	<tr>
          *		<td>&#xD;</td>
          *		<td>\\r</td>
          *	</tr>
          * </table>
          *
          * @return A decoded string represents a property
          */
        static decodeProperty(str: string): string;
        /**
         * <p> Decode a property. </p>
         *
         * <table>
         *	<tr>
         *		<th>Original</th>
         *		<th>Encoded</th>
         *	</tr>
         *	<tr>
         *		<td>\&</td>
         *		<td>\&amp;</td>
         *	</tr>
         *	<tr>
         *		<td>\<</td>
         *		<td>\&lt;</td>
         *	</tr>
         *	<tr>
         *		<td>\></td>
         *		<td>\&gt;</td>
         *	</tr>
         *	<tr>
         *		<td>\"</td>
         *		<td>&quot;</td>
         *	</tr>
         *	<tr>
         *		<td>'</td>
         *		<td>&apos;</td>
         *	</tr>
         *	<tr>
         *		<td>'</td>
         *		<td>&#x9;</td>
         *	</tr>
         *	<tr>
         *		<td>\\t</td>
         *		<td>&apos;</td>
         *	</tr>
         *	<tr>
         *		<td>\\n</td>
         *		<td>&#xA;</td>
         *	</tr>
         *	<tr>
         *		<td>\\r</td>
         *		<td>&#xD;</td>
         *	</tr>
         * </table>
         *
         * @return A encoded string represents a property
         */
        static encodeProperty(str: string): string;
        /**
         * <p> Convert the XML to a string. </p>
         */
        toString(level?: number): string;
        /**
         * <p> Convert the XML to HTML string. </p>
         */
        toHTML(level?: number): string;
    }
    /**
     * <p> List of XML(s) having same tag. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class XMLList extends std.Deque<XML> {
        getTag(): string;
        /**
         * <p> Convert XMLList to string. </p>
         *
         * @param level Level(depth) of the XMLList.
         */
        toString(level?: number): string;
        /**
         * <p> Convert XMLList to HTML string. </p>
         *
         * @param level Level(depth) of the XMLList.
         */
        toHTML(level?: number): string;
    }
}
declare namespace samchon.collection {
    /**
     * An {@link XMLList} who can detect element I/O events.
     *
     * <p> Below are list of methods who are dispatching {@link CollectionEvent}: </p>
     *
     * <ul>
     *	<li> <i>insert</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link insert} </li>
     *		<li> {@link push} </li>
     *		<li> {@link push_front} </li>
     *		<li> {@link push_back} </li>
     *	</ul></li>
     *	<li> <i>erase</i> typed events: <ul>
     *		<li> {@link assign} </li>
     *		<li> {@link clear} </li>
     *		<li> {@link erase} </li>
     *		<li> {@link pop_front} </li>
     *		<li> {@link pop_back} </li>
     *	</ul></li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class XMLListCollection extends library.XMLList implements ICollection<library.XML> {
        /**
         * A chain object taking responsibility of dispatching events.
         */
        private event_dispatcher_;
        /**
         * @inheritdoc
         */
        push<U extends library.XML>(...items: U[]): number;
        /**
         * @inheritdoc
         */
        push_back(val: library.XML): void;
        /**
         * @hidden
         */
        protected insert_by_repeating_val(position: std.DequeIterator<library.XML>, n: number, val: library.XML): std.DequeIterator<library.XML>;
        /**
         * @hidden
         */
        protected insert_by_range<U extends library.XML, InputIterator extends std.Iterator<U>>(position: std.DequeIterator<library.XML>, begin: InputIterator, end: InputIterator): std.DequeIterator<library.XML>;
        /**
         * @inheritdoc
         */
        pop_back(): void;
        /**
         * @hidden
         */
        protected erase_by_range(first: std.DequeIterator<library.XML>, last: std.DequeIterator<library.XML>): std.DequeIterator<library.XML>;
        /**
         * @hidden
         */
        private notify_insert(first, last);
        /**
         * @hidden
         */
        private notify_erase(first, last);
        /**
         * @inheritdoc
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritdoc
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        refresh(): void;
        /**
         * @inheritdoc
         */
        refresh(it: std.DequeIterator<library.XML>): void;
        /**
         * @inheritdoc
         */
        refresh(first: std.DequeIterator<library.XML>, last: std.DequeIterator<library.XML>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        addEventListener(type: "insert", listener: CollectionEventListener<library.XML>): void;
        addEventListener(type: "erase", listener: CollectionEventListener<library.XML>): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<library.XML>): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        addEventListener(type: "insert", listener: CollectionEventListener<library.XML>, thisArg: Object): void;
        addEventListener(type: "erase", listener: CollectionEventListener<library.XML>, thisArg: Object): void;
        addEventListener(type: "refresh", listener: CollectionEventListener<library.XML>, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<library.XML>): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<library.XML>): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<library.XML>): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
        removeEventListener(type: "insert", listener: CollectionEventListener<library.XML>, thisArg: Object): void;
        removeEventListener(type: "erase", listener: CollectionEventListener<library.XML>, thisArg: Object): void;
        removeEventListener(type: "refresh", listener: CollectionEventListener<library.XML>, thisArg: Object): void;
    }
}
declare namespace samchon.library {
    /**
     * <p> Case generator. </p>
     *
     * <p> {@link CaseGenerator} is an abstract case generator being used like a matrix. </p>
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
         * <p> Size, the number of all cases. </p>
         */
        protected size_: number;
        /**
         * <p> N, size of the candidates. </p>
         */
        protected n_: number;
        /**
         * <p> R, size of elements of each case. </p>
         */
        protected r_: number;
        /**
         * <p> Construct from size of N and R. </p>
         *
         * @param n Size of candidates.
         * @param r Size of elements of each case.
         */
        constructor(n: number, r: number);
        /**
         * <p> Get size of all cases. </p>
         *
         * @return Get a number of the all cases.
         */
        size(): number;
        /**
         * <p> Get size of the N. </p>
         */
        n(): number;
        /**
         * <p> Get size of the R. </p>
         */
        r(): number;
        /**
         * <p> Get index'th case. </p>
         *
         * @param index Index number
         * @return The row of the index'th in combined permuation case
         */
        abstract at(index: number): number[];
    }
    /**
     * <p> A combined-permutation case generator. </p>
     *
     * <p> <sub>n</sub>��<sub>r</sub> </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class CombinedPermutationGenerator extends CaseGenerator {
        /**
         * <p> An array using for dividing each element index. </p>
         */
        private divider_array;
        /**
         * <p> Construct from size of N and R. </p>
         *
         * @param n Size of candidates.
         * @param r Size of elements of each case.
         */
        constructor(n: number, r: number);
        at(index: number): number[];
    }
    /**
     * <p> A permutation case generator. </p>
     *
     * <p> <sub>n</sub>P<sub>r</sub> </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class PermuationGenerator extends CaseGenerator {
        /**
         * <p> Construct from size of N and R. </p>
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
     * <p> Factorial case generator. </p>
     *
     * <p> n! = <sub>n</sub>P<sub>n</sub> </p>
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
    /**
     * <p> The IEventDispatcher interface defines methods for adding or removing event listeners, checks
     * whether specific types of event listeners are registered, and dispatches events. </p>
     *
     * <p> Event targets are an important part of the Flash�� Player and Adobe AIR event model. The event
     * target serves as the local point for how events flow through the display list hierarchy. When an
     * event such as a mouse click or a key press occurs, an event object is dispatched into the event flow
     * from the root of the display list. The event object makes a round-trip journey to the event target,
     * which is conceptually divided into three phases: the capture phase includes the journey from the
     * root to the last node before the event target's node; the target phase includes only the event
     * target node; and the bubbling phase includes any subsequent nodes encountered on the return trip to
     * the root of the display list. </p>
     *
     * <p> In general, the easiest way for a user-defined class to gain event dispatching capabilities is
     * to extend EventDispatcher. If this is impossible (that is, if the class is already extending another
     * class), you can instead implement the IEventDispatcher interface, create an EventDispatcher member,
     * and write simple hooks to route calls into the aggregated EventDispatcher. </p>
     *
     * @reference http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/events/IEventDispatcher.html
     * @author Migrated by Jeongho Nam <http://samchon.org>
     */
    interface IEventDispatcher {
        /**
         * <p> Checks whether the EventDispatcher object has any listeners registered for a specific type
         * of event. This allows you to determine where an EventDispatcher object has altered handling of
         * an event type in the event flow hierarchy. To determine whether a specific event type actually
         * triggers an event listener, use willTrigger(). </p>
         *
         * <p> The difference between hasEventListener() and willTrigger() is that hasEventListener()
         * examines only the object to which it belongs, whereas willTrigger() examines the entire event
         * flow for the event specified by the type parameter. </p>
         *
         * @param type The type of event.
         */
        hasEventListener(type: string): boolean;
        /**
         * <p> Dispatches an event into the event flow. </p>
         * <p> The event target is the EventDispatcher object upon which the dispatchEvent() method is called. </p>
         *
         * @param event The Event object that is dispatched into the event flow. If the event is being
         *			  redispatched, a clone of the event is created automatically. After an event is
         *			  dispatched, its target property cannot be changed, so you must create a new copy
         *			  of the event for redispatching to work.
         */
        dispatchEvent(event: library.BasicEvent): boolean;
        /**
         * <p> Registers an event listener object with an EventDispatcher object so that the listener
         * receives notification of an event. You can register event listeners on all nodes in the display
         * list for a specific type of event, phase, and priority.
         *
         * <p> After you successfully register an event listener, you cannot change its priority through
         * additional calls to addEventListener(). To change a listener's priority, you must first call
         * removeEventListener(). Then you can register the listener again with the new priority level. </p>
         *
         * <p> Keep in mind that after the listener is registered, subsequent calls to addEventListener()
         * with a different type or useCapture value result in the creation of a separate listener
         * registration. For example, if you first register a listener with useCapture set to true,
         * it listens only during the capture phase. If you call addEventListener() again using the same
         * listener object, but with useCapture set to false, you have two separate listeners: one that
         * listens during the capture phase and another that listens during the target and bubbling phases. </p>
         *
         * <p> You cannot register an event listener for only the target phase or the bubbling phase.
         * Those phases are coupled during registration because bubbling applies only to the ancestors of
         * the target node. </p>
         *
         * <p> If you no longer need an event listener, remove it by calling removeEventListener(), or
         * memory problems could result. Event listeners are not automatically removed from memory because
         * the garbage collector does not remove the listener as long as the dispatching object exists
         * (unless the useWeakReference parameter is set to true). </p>
         *
         * <p> Copying an EventDispatcher instance does not copy the event listeners attached to it. (If
         * your newly created node needs an event listener, you must attach the listener after creating
         * the node.) However, if you move an EventDispatcher instance, the event listeners attached to
         * it move along with it. </p>
         *
         * <p> If the event listener is being registered on a node while an event is also being processed
         * on this node, the event listener is not triggered during the current phase but may be triggered
         * during a later phase in the event flow, such as the bubbling phase. </p>
         *
         * <p> If an event listener is removed from a node while an event is being processed on the node,
         * it is still triggered by the current actions. After it is removed, the event listener is never
         * invoked again (unless it is registered again for future processing). </p>
         *
         * @param event The type of event.
         * @param listener The listener function that processes the event.
         *				 This function must accept an Event object as its only parameter and must return
         *				 nothing.
         */
        addEventListener(type: string, listener: EventListener): void;
        /**
         * <p> Registers an event listener object with an EventDispatcher object so that the listener
         * receives notification of an event. You can register event listeners on all nodes in the display
         * list for a specific type of event, phase, and priority.
         *
         * <p> After you successfully register an event listener, you cannot change its priority through
         * additional calls to addEventListener(). To change a listener's priority, you must first call
         * removeEventListener(). Then you can register the listener again with the new priority level. </p>
         *
         * <p> Keep in mind that after the listener is registered, subsequent calls to addEventListener()
         * with a different type or useCapture value result in the creation of a separate listener
         * registration. For example, if you first register a listener with useCapture set to true,
         * it listens only during the capture phase. If you call addEventListener() again using the same
         * listener object, but with useCapture set to false, you have two separate listeners: one that
         * listens during the capture phase and another that listens during the target and bubbling phases. </p>
         *
         * <p> You cannot register an event listener for only the target phase or the bubbling phase.
         * Those phases are coupled during registration because bubbling applies only to the ancestors of
         * the target node. </p>
         *
         * <p> If you no longer need an event listener, remove it by calling removeEventListener(), or
         * memory problems could result. Event listeners are not automatically removed from memory because
         * the garbage collector does not remove the listener as long as the dispatching object exists
         * (unless the useWeakReference parameter is set to true). </p>
         *
         * <p> Copying an EventDispatcher instance does not copy the event listeners attached to it. (If
         * your newly created node needs an event listener, you must attach the listener after creating
         * the node.) However, if you move an EventDispatcher instance, the event listeners attached to
         * it move along with it. </p>
         *
         * <p> If the event listener is being registered on a node while an event is also being processed
         * on this node, the event listener is not triggered during the current phase but may be triggered
         * during a later phase in the event flow, such as the bubbling phase. </p>
         *
         * <p> If an event listener is removed from a node while an event is being processed on the node,
         * it is still triggered by the current actions. After it is removed, the event listener is never
         * invoked again (unless it is registered again for future processing). </p>
         *
         * @param event The type of event.
         * @param listener The listener function that processes the event.
         *				 This function must accept an Event object as its only parameter and must return
         *				 nothing.
         * @param thisArg The object to be used as the <b>this</b> object.
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        /**
         * Removes a listener from the EventDispatcher object. If there is no matching listener registered
         * with the EventDispatcher object, a call to this method has no effect.
         *
         * @param type The type of event.
         * @param listener The listener object to remove.
         */
        removeEventListener(type: string, listener: EventListener): void;
        /**
         * Removes a listener from the EventDispatcher object. If there is no matching listener registered
         * with the EventDispatcher object, a call to this method has no effect.
         *
         * @param type The type of event.
         * @param listener The listener object to remove.
         * @param thisArg The object to be used as the <b>this</b> object.
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
    }
    /**
     * <p> Registers an event listener object with an EventDispatcher object so that the listener
     * receives notification of an event. You can register event listeners on all nodes in the display
     * list for a specific type of event, phase, and priority. </p>
     *
     * <p> After you successfully register an event listener, you cannot change its priority through
     * additional calls to addEventListener(). To change a listener's priority, you must first call
     * removeListener(). Then you can register the listener again with the new priority level. </p>
     *
     * Keep in mind that after the listener is registered, subsequent calls to <code>addEventListener()</code>
     * with a different type or useCapture value result in the creation of a separate listener registration.
     * For example, if you first register a listener with useCapture set to true, it listens only during the
     * capture phase. If you call addEventListener() again using the same listener object, but with
     * useCapture set to false, you have two separate listeners: one that listens during the capture
     * phase and another that listens during the target and bubbling phases.
     *
     * <p> You cannot register an event listener for only the target phase or the bubbling phase. Those
     * phases are coupled during registration because bubbling applies only to the ancestors of the
     * target node. </p>
     *
     * <p> If you no longer need an event listener, remove it by calling <code>removeEventListener()</code>,
     * or memory problems could result. Event listeners are not automatically removed from memory
     * because the garbage collector does not remove the listener as long as the dispatching object
     * exists (unless the useWeakReference parameter is set to true). </p>
     *
     * <p> Copying an EventDispatcher instance does not copy the event listeners attached to it. (If your
     * newly created node needs an event listener, you must attach the listener after creating the
     * node.) However, if you move an EventDispatcher instance, the event listeners attached to it move
     * along with it. </p>
     *
     * <p> If the event listener is being registered on a node while an event is being processed on
     * this node, the event listener is not triggered during the current phase but can be triggered
     * during a later phase in the event flow, such as the bubbling phase. </p>
     *
     * <p> If an event listener is removed from a node while an event is being processed on the node, it is
     * still triggered by the current actions. After it is removed, the event listener is never invoked
     * again (unless registered again for future processing). </p>
     *
     * <ul>
     *  <li> Made by AS3 - http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/events/EventDispatcher.html
     * </ul>
     *
     * @author Migrated by Jeongho Nam <http://samchon.org>
     */
    class EventDispatcher implements IEventDispatcher {
        /**
         * The origin object who issuing events.
         */
        protected event_dispatcher_: IEventDispatcher;
        /**
         * Container of listeners.
         */
        protected event_listeners_: std.HashMap<string, std.HashSet<std.Pair<EventListener, Object>>>;
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
        dispatchEvent(event: Event): boolean;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener): void;
        /**
         * @inheritdoc
         */
        addEventListener(type: string, listener: EventListener, thisArg: Object): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener): void;
        /**
         * @inheritdoc
         */
        removeEventListener(type: string, listener: EventListener, thisArg: Object): void;
    }
}
declare namespace samchon.library {
    /**
     * <p> The {@link FileReference} class provides a means to load and save files in browser level. </p>
     *
     * <p> The {@link FileReference} class provides a means to {@link load} and {@link save} files in browser level. A
     * browser-system dialog box prompts the user to select a file to {@link load} or a location for {@link svae}. Each
     * {@link FileReference} object refers to a single file on the user's disk and has properties that contain
     * information about the file's size, type, name, creation date, modification date, and creator type (Macintosh only).
     * </p>
     *
     * <p> FileReference instances are created in the following ways: </p>
     * <ul>
     *	<li>
     *		When you use the new operator with the {@link FileReference} constructor:
     *		<code>var myFileReference = new FileReference();</code>
     *	</li>
     *	<li>
     *		When you call the {@link FileReferenceList.browse} method, which creates an array of {@link FileReference}
     *		objects.
     *	</li>
     * </ul>
     *
     * <p> During a load operation, all the properties of a {@link FileReference} object are populated by calls to the
     * {@link FileReference.browse} or {@link FileReferenceList.browse} methods. During a save operation, the name
     * property is populated when the select event is dispatched; all other properties are populated when the complete
     * event is dispatched. </p>
     *
     * <p> The {@link browse browse()} method opens an browser-system dialog box that prompts the user to select a file
     * for {@link load}. The {@link FileReference.browse} method lets the user select a single file; the
     * {@link FileReferenceList.browse} method lets the user select multiple files. After a successful call to the
     * {@link browse browse()} method, call the {@link FileReference.load} method to load one file at a time. The
     * {@link FileReference.save} method prompts the user for a location to save the file and initiates downloading from
     * a binary or string data. </p>
     *
     * <p> The {@link FileReference} and {@link FileReferenceList} classes do not let you set the default file location
     * for the dialog box that the {@link browse} or {@link save} methods generate. The default location shown in the
     * dialog box is the most recently browsed folder, if that location can be determined, or the desktop. The classes do
     * not allow you to read from or write to the transferred file. They do not allow the browser that initiated the
     * {@link load} or {@link save} to access the loaded or saved file or the file's location on the user's disk. </p>
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
         * <p> The data from the loaded file after a successful call to the {@link load load()} method. </p>
         *
         * <p> If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property. </p>
         *
         * <p> All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         * </p>
         */
        data: any;
        /**
         * <p> The name of the file on the local disk. </p>
         *
         * <p> If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property. </p>
         *
         * <p> All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         * </p>
         */
        name: string;
        /**
         * <p> The filename extension. </p>
         *
         * <p> A file's extension is the part of the name following (and not including) the final dot (&quot;.&quot;). If
         * there is no dot in the filename, the extension is <code>null</code>. </p>
         *
         * <p> If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property. </p>
         *
         * <p> All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         * </p>
         */
        extension: string;
        /**
         * <p> The file type, metadata of the {@link extension}. </p>
         *
         * <p> If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property. </p>
         *
         * <p> All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         * </p>
         */
        type: string;
        /**
         * <p> The size of the file on the local disk in bytes. </p>
         *
         * <p> If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property. </p>
         *
         * <p> All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         * </p>
         */
        size: number;
        /**
         * <p> The date that the file on the local disk was last modified. </p>
         *
         * <p> If the {@link FileReference} object was not populated (by a valid call to {@link FileReference.browse}),
         * an {@link LogicError exception} will be thrown when you try to get the value of this property. </p>
         *
         * <p> All the properties of a {@link FileReference} object are populated by calling the {@link browse browse()}.
         * </p>
         */
        modificationDate: Date;
        /**
         * <p> Displays a file-browsing dialog box that lets the user select a file to upload. The dialog box is native
         * to the user's browser system. The user can select a file on the local computer or from other systems, for
         * example, through a UNC path on Windows. </p>
         *
         * <p> When you call this method and the user successfully selects a file, the properties of this
         * {@link FileReference} object are populated with the properties of that file. Each subsequent time that the
         * {@link FileReference.browse} method is called, the {@link FileReference} object's properties are reset to
         * the file that the user selects in the dialog box. Only one {@link browse browse()} can be performed at a time
         * (because only one dialog box can be invoked at a time). </p>
         *
         * <p> Using the <i>typeFilter parameter</i>, you can determine which files the dialog box displays. </p>
         *
         * @param typeFilter An array of filter strings used to filter the files that are displayed in the dialog box.
         *					 If you omit this parameter, all files are displayed.
         */
        browse(...typeFilter: string[]): void;
        /**
         * <p> Starts the load of a local file selected by a user. </p>
         *
         * <p> You must call the {@link FileReference.browse} or {@link FileReferenceList.browse} method before you call
         * the {@link load load()} method. </p>
         *
         * <p> Listeners receive events to indicate the progress, success, or failure of the load. Although you can use
         * the {@link FileReferenceList} object to let users select multiple files to load, you must {@link load} the
         * {@link FileReferenceList files} one by one. To {@link load} the files one by one, iterate through the
         * {@link FileReferenceList.fileList} array of {@link FileReference} objects. </p>
         *
         * <p> If the file finishes loading successfully, its contents are stored in the {@link data} property. </p>
         */
        load(): void;
        /**
         * <p> Save a file to local filesystem. </p>
         *
         * <p> {@link FileReference.save} implemented the save function by downloading a file from a hidden anchor tag.
         * However, the plan, future's {@link FileReference} will follow such rule: </p>
         *
         * <p> Opens a dialog box that lets the user save a file to the local filesystem. </p>
         *
         * <p> The {@link save save()} method first opens an browser-system dialog box that asks the user to enter a
         * filename and select a location on the local computer to save the file. When the user selects a location and
         * confirms the save operation (for example, by clicking Save), the save process begins. Listeners receive events
         * to indicate the progress, success, or failure of the save operation. To ascertain the status of the dialog box
         * and the save operation after calling {@link save save()}, your code must listen for events such as cancel,
         * open, progress, and complete. </p>
         *
         * <p> When the file is saved successfully, the properties of the {@link FileReference} object are populated with
         * the properties of the local file. The complete event is dispatched if the save is successful. </p>
         *
         * <p> Only one {@link browse browse()} or {@link save()} session can be performed at a time (because only one
         * dialog box can be invoked at a time). </p>
         *
         * @param data The data to be saved. The data can be in one of several formats, and will be treated appropriately.
         * @param fileName File name to be saved.
         */
        save(data: string, fileName: string): void;
        /**
         * <p> Save a file to local filesystem. </p>
         *
         * <p> {@link FileReference.save} implemented the save function by downloading a file from a hidden anchor tag.
         * However, the plan, future's {@link FileReference} will follow such rule: </p>
         *
         * <p> Opens a dialog box that lets the user save a file to the local filesystem. </p>
         *
         * <p> The {@link save save()} method first opens an browser-system dialog box that asks the user to enter a
         * filename and select a location on the local computer to save the file. When the user selects a location and
         * confirms the save operation (for example, by clicking Save), the save process begins. Listeners receive events
         * to indicate the progress, success, or failure of the save operation. To ascertain the status of the dialog box
         * and the save operation after calling {@link save save()}, your code must listen for events such as cancel,
         * open, progress, and complete. </p>
         *
         * <p> When the file is saved successfully, the properties of the {@link FileReference} object are populated with
         * the properties of the local file. The complete event is dispatched if the save is successful. </p>
         *
         * <p> Only one {@link browse browse()} or {@link save()} session can be performed at a time (because only one
         * dialog box can be invoked at a time). </p>
         *
         * @param data The data to be saved. The data can be in one of several formats, and will be treated appropriately.
         * @param fileName File name to be saved.
         */
        static save(data: string, fileName: string): void;
    }
    /**
     * <p> The {@link FileReferenceList} class provides a means to let users select one or more files for
     * {@link FileReference.load loading}. A {@link FileReferenceList} object represents a group of one or more local
     * files on the user's disk as an array of {@link FileReference} objects. For detailed information and important
     * considerations about {@link FileReference} objects and the FileReference class, which you use with
     * {@link FileReferenceList}, see the {@link FileReference} class. </p>
     *
     * <p> To work with the {@link FileReferenceList} class: </p>
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
     * <p> The {@link FileReferenceList} class includes a {@link browse browse()} method and a {@link fileList} property
     * for working with multiple files. </p>
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
         * <p> An array of {@link FileReference} objects. </p>
         *
         * <p> When the {@link FileReferenceList.browse} method is called and the user has selected one or more files
         * from the dialog box that the {@link browse browse()} method opens, this property is populated with an array of
         * {@link FileReference} objects, each of which represents the files the user selected. </p>
         *
         * <p> The {@link fileList} property is populated anew each time {@link browse browse()} is called on that
         * {@link FileReferenceList} object. </p>
         */
        fileList: std.Vector<FileReference>;
        /**
         * <p> Displays a file-browsing dialog box that lets the user select one or more local files to upload. The
         * dialog box is native to the user's browser system.  </p>
         *
         * <p> When you call this method and the user successfully selects files, the {@link fileList} property of this
         * {@link FileReferenceList} object is populated with an array of {@link FileReference} objects, one for each
         * file that the user selects. Each subsequent time that the {@link FileReferenceList.browse} method is called,
         * the {@link FileReferenceList.fileList} property is reset to the file(s) that the user selects in the dialog
         * box. </p>
         *
         * <p> Using the <i>typeFilter</i> parameter, you can determine which files the dialog box displays. </p>
         *
         * <p> Only one {@link FileReference.browse}, {@link FileReference.load}, or {@link FileReferenceList.browse}
         * session can be performed at a time on a {@link FileReferenceList} object (because only one dialog box can be
         * opened at a time). </p>
         *
         * @param typeFilter An array of filter strings used to filter the files that are displayed in the dialog box.
         *					 If you omit this parameter, all files are displayed.
         */
        browse(...typeFilter: string[]): void;
    }
}
declare namespace samchon.library {
    /**
     * <p> A genetic algorithm class. </p>
     *
     * @details
     * <p> In the field of artificial intelligence, a genetic algorithm (GA) is a search heuristic that mimics the
     * process of natural selection. This heuristic (also sometimes called a metaheuristic) is routinely used to generate
     * useful solutions to optimization and search problems. </p>
     *
     * <p> Genetic algorithms belong to the larger class of evolutionary algorithms (EA), which generate solutions to
     * optimization problems using techniques inspired by natural evolution, such as inheritance, {@link mutate mutation},
     * {@link selection}, and {@link crossover}. </p>
     *
     * @reference https://en.wikipedia.org/wiki/Genetic_algorithm
     * @author Jeongho Nam <http://samchon.org>
     */
    class GeneticAlgorithm {
        /**
         * Whether each element (Gene) is unique in their GeneArray.
         */
        private unique;
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
        private mutation_rate;
        /**
         * Number of tournaments in selection.
         */
        private tournament;
        /**
         * Initialization Constructor.
         *
         * @param unique Whether each Gene is unique in their GeneArray.
         * @param mutation_rate Rate of mutation.
         * @param tournament Number of tournaments in selection.
         */
        constructor(unique?: boolean, mutation_rate?: number, tournament?: number);
        /**
         * <p> Evolove <i>GeneArray</i>. </p>
         *
         * <p> Convenient method accessing to {@link evolvePopulation evolvePopulation()}. </p>
         *
         * @param individual An initial set of genes; sequence listing.
         * @param population Size of population in a generation.
         * @param generation Size of generation in evolution.
         * @param compare A comparison function returns whether left gene is more optimal.
         *
         * @return An evolved <i>GeneArray</i>, optimally.
         *
         * @see {@link GAPopulation.compare}
         */
        evolveGeneArray<T, GeneArray extends std.base.IArrayContainer<T>>(individual: GeneArray, population: number, generation: number, compare?: (left: T, right: T) => boolean): GeneArray;
        /**
         * Evolve <i>population</i>, a mass of <i>GeneArraies</i>.
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
         * <p> Select the best GeneArray in <i>population</i> from tournament. </p>
         *
         * <p> {@link selection Selection} is the stage of a genetic algorithm in which individual genomes are chosen
         * from a population for later breeding (using {@linlk crossover} operator). A generic {@link selection}
         * procedure may be implemented as follows: </p>
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
         * <p> Create a new GeneArray by crossing over two <i>GeneArray</i>(s). </p>
         *
         * <p> {@link crossover} is a genetic operator used to vary the programming of a chromosome or chromosomes from
         * one generation to the next. It is analogous to reproduction and biological crossover, upon which genetic
         * algorithms are based. </p>
         *
         * <p> {@link crossover Cross over} is a process of taking more than one parent solutions and producing a child
         * solution from them. There are methods for selection of the chromosomes. </p>
         *
         * @param parent1 A parent sequence listing
         * @param parent2 A parent sequence listing
         *
         * @reference https://en.wikipedia.org/wiki/Crossover_(genetic_algorithm)
         */
        private crossover<T, GeneArray>(parent1, parent2);
        /**
         * <p> Cause a mutation on the <i>GeneArray</i>. </p>
         *
         * <p> {@link mutate Mutation} is a genetic operator used to maintain genetic diversity from one generation of a
         * population of genetic algorithm chromosomes to the next. It is analogous to biological mutation. </p>
         *
         * <p> {@link mutate Mutation} alters one or more gene values in a chromosome from its initial state. In
         * {@link mutate mutation}, the solution may change entirely from the previous solution. Hence GA can come to
         * better solution by using {@link mutate mutation}. </p>
         *
         * <p> {@link mutate Mutation} occurs during evolution according to a user-definable mutation probability. This
         * probability should be set low. If it is set too high, the search will turn into a primitive random search. </p>
         *
         * <h4> Note </h4>
         * <p> Muttion is pursuing diversity. Mutation is useful for avoiding the following problem. </p>
         *
         * <p> When initial set of genes(GeneArray) is far away from optimail, without mutation (only with selection and
         * crossover), the genetic algorithm has a tend to wandering outside of the optimal. </p>
         *
         * <p> Genes in the GeneArray will be swapped following percentage of the {@link mutation_rate}. </p>
         *
         * @param individual A container of genes to mutate
         *
         * @reference https://en.wikipedia.org/wiki/Mutation_(genetic_algorithm)
         * @see {@link mutation_rate}
         */
        private mutate<T, GeneArray>(individual);
    }
    /**
     * <p> A population in a generation. </p>
     *
     * <p> {@link GAPopulation} is a class representing population of candidate genes (sequence listing) having an array
     * of GeneArray as a member. {@link GAPopulation} also manages initial set of genes and handles fitting test direclty
     * by the method {@link fitTest fitTest()}. </p>
     *
     * <p> The success of evolution of genetic algorithm is depend on the {@link GAPopulation}'s initial set and fitting
     * test. (<i>GeneArray</i> and {@link compare}.) </p>
     *
     * <h4> Warning </h4>
     * <p> Be careful for the mistakes of direction or position of the {@link compare}. </p>
     * <p> Most of logical errors failed to access optimal solution are occured from those mistakes. </p>
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
        private children;
        /**
         * <p> A comparison function returns whether left gene is more optimal, greater. </p>
         *
         * <p> Default value of this {@link compare} is {@link std.greater}. It means to compare two array
         * (GeneArray must be a type of {@link std.base.IArrayContainer}). Thus, you've to keep follwing rule. </p>
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
         * <p> If you don't want to follow the rule or want a custom comparison function, you have to realize a
         * comparison function. </p>
         */
        private compare;
        /**
         * <p> Private constructor with population. </p>
         *
         * <p> Private constructor of GAPopulation does not create {@link children}. (candidate genes) but only assigns
         * <i>null</i> repeatedly following the <i>population size</i>. </p>
         *
         * <p> This private constructor is designed only for {@link GeneticAlgorithm}. Don't create {@link GAPopulation}
         * with this constructor, by yourself. </p>
         *
         * @param size Size of the population.
         */
        constructor(size: number);
        /**
         * <p> Construct from a {@link GeneArray} and <i>size of the population</i>. </p>
         *
         * <p> This public constructor creates <i>GeneArray(s)</i> as population (size) having shuffled genes which are
         * came from the initial set of genes (<i>geneArray</i>). It uses {@link std.greater} as default comparison function.
         * </p>
         *
         * @param geneArray An initial sequence listing.
         * @param size The size of population to have as children.
         */
        constructor(geneArray: GeneArray, size: number);
        /**
         * <p> Constructor from a GeneArray, size of the poluation and custom comparison function. </p>
         *
         * <p> This public constructor creates <i>GeneArray(s)</i> as population (size) having shuffled genes which are
         * came from the initial set of genes (<i>geneArray</i>). The <i>compare</i> is used for comparison function.
         * </p>
         *
         * @param geneArray An initial sequence listing.
         * @param size The size of population to have as children.
         * @param compare A comparison function returns whether left gene is more optimal.
         */
        constructor(geneArray: GeneArray, size: number, compare: (left: GeneArray, right: GeneArray) => boolean);
        /**
         * Test fitness of each <i>GeneArray</i> in the {@link population}.
         *
         * @return The best <i>GeneArray</i> in the {@link population}.
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
     * <p> A utility class supporting static methods of string. </p>
     *
     * <p> The {@link StringUtil} utility class is an all-static class with methods for working with string objects within
     * Samchon Framework. You do not create instances of {@link StringUtil}; instead you call methods such as the
     * <code>StringUtil.substitute()</code> method. </p>
     *
     * @reference http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/mx/utils/StringUtil.html
     * @author Jeongho Nam <http://samchon.org>
     */
    class StringUtil {
        /**
         * <p> Generate a substring. </p>
         *
         * <p> Extracts a substring consisting of the characters from specified start to end.
         * It's same with str.substring( ? = (str.find(start) + start.size()), str.find(end, ?) ) </p>
         *
         * <code>
         let str = between("ABCD[EFGH]IJK", "[", "]");
         console.log(str); // PRINTS "EFGH"
         * </code>
         *
         * <ul>
         *	<li> If start is not specified, extracts from begin of the string to end. </li>
         *	<li> If end is not specified, extracts from start to end of the string. </li>
         *	<li> If start and end are all omitted, returns str, itself. </li>
         * </ul>
         *
         * @param str Target string to be applied between.
         * @param start A string for separating substring at the front.
         * @param end A string for separating substring at the end.
         *
         * @return substring by specified terms.
         */
        static between(str: string, start?: string, end?: string): string;
        /**
         * <p> Fetch substrings. </p>
         *
         * <p> Splits a string into an array of substrings dividing by specified delimeters of start and end.
         * It's the array of substrings adjusted the between. </p>
         *
         * <ul>
         *	<li> If startStr is omitted, it's same with the split by endStr not having last item. </li>
         *	<li> If endStr is omitted, it's same with the split by startStr not having first item. </li>
         *	<li> If startStr and endStar are all omitted, returns <i>str</i>. </li>
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
         * Substitute <code>{n}</code> tokens within the specified string.
         *
         * @param format The string to make substitutions in. This string can contain special tokens of the form
         *				 <code>{n}</code>, where <code>n</code> is a zero based index, that will be replaced with the
         *				 additional parameters found at that index if specified.
         * @param args Additional parameters that can be substituted in the <i>format</i> parameter at each
         *			   <code>{n}</code> location, where <code>n</code> is an integer (zero based) index value into
         *			   the array of values specified.
         *
         * @return New string with all of the <code>{n}</code> tokens replaced with the respective arguments specified.
         */
        static substitute(format: string, ...args: any[]): string;
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
         * <p> Repeat a string. </p>
         *
         * <p> Returns a string consisting of a specified string concatenated with itself a specified number of times. </p>
         *
         * @param str The string to be repeated.
         * @param n The repeat count.
         *
         * @return The repeated string.
         */
        static repeat(str: string, n: number): string;
        /**
         * <p> Number to formatted string with &quot;,&quot; sign. </p>
         *
         * <p> Returns a string converted from the number rounded off from specified precision with &quot;,&quot; symbols. </p>
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
     * <p> URLVariables class is for representing variables of HTTP. </p>
     *
     * <p> URLVariables class allows you to transfer variables between an application and server.
     * When transfering, URLVariables will be converted to a URI string. </p>
     *
     * <ul>
     *	<li> URI: Uniform Resource Identifier </li>
     * </ul>
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
         * <p> Construct from a URL-encoded string. </p>
         *
         * <p> The {@link decode decode()} method is automatically called to convert the string to properties of the {@link URLVariables} object. </p>
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
declare namespace samchon.protocol {
    /**
     * <p> An interface of entity. </p>
     *
     * <p> Entity is a class for standardization of expression method using on network I/O by XML. If
     * Invoke is a standard message protocol of Samchon Framework which must be kept, Entity is a
     * recommended semi-protocol of message for expressing a data class. Following the semi-protocol
     * Entity is not imposed but encouraged. </p>
     *
     * <p> As we could get advantages from standardization of message for network I/O with Invoke,
     * we can get additional advantage from standardizing expression method of data class with Entity.
     * We do not need to know a part of network communication. Thus, with the Entity, we can only
     * concentrate on entity's own logics and relationships between another entities. Entity does not
     * need to how network communications are being done. </p>
     *
     * <p> I say repeatedly. Expression method of Entity is recommended, but not imposed. It's a semi
     * protocol for network I/O but not a essential protocol must be kept. The expression method of
     * Entity, using on network I/O, is expressed by XML string. </p>
     *
     * <p> If your own network system has a critical performance issue on communication data class,
     * it would be better to using binary communication (with ByteArray).
     * Don't worry about the problem! Invoke also provides methods for binary data (ByteArray). </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IEntity {
        /**
         * <p> Construct data of the Entity from a XML object. </p>
         *
         * <p> Overrides the construct() method and fetch data of member variables from the XML. </p>
         *
         * <p> By recommended guidance, data representing member variables are contained in properties
         * of the put XML object. </p>
         *
         * @param xml An xml used to contruct data of entity.
         */
        construct(xml: library.XML): void;
        /**
         * <p> Get a key that can identify the Entity uniquely. </p>
         *
         * <p> If identifier of the Entity is not atomic value, returns a paired or tuple object
         * that can represents the composite identifier. </p>
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
         * <p> A tag name when represented by XML. </p>
         *
         * <code> <TAG {...properties} /> </code>
         */
        TAG(): string;
        /**
         * <p> Get a XML object represents the Entity. </p>
         *
         * <p> A member variable (not object, but atomic value like number, string or date) is categorized
         * as a property within the framework of entity side. Thus, when overriding a toXML() method and
         * archiving member variables to an XML object to return, puts each variable to be a property
         * belongs to only a XML object. </p>
         *
         * <p> Don't archive the member variable of atomic value to XML::value causing enormouse creation
         * of XML objects to number of member variables. An Entity must be represented by only a XML
         * instance (tag). </p>
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
     * <p> An entity, a standard data class. </p>
     *
     * <p> Entity is a class for standardization of expression method using on network I/O by XML. If
     * Invoke is a standard message protocol of Samchon Framework which must be kept, Entity is a
     * recommended semi-protocol of message for expressing a data class. Following the semi-protocol
     * Entity is not imposed but encouraged. </p>
     *
     * <p> As we could get advantages from standardization of message for network I/O with Invoke,
     * we can get additional advantage from standardizing expression method of data class with Entity.
     * We do not need to know a part of network communication. Thus, with the Entity, we can only
     * concentrate on entity's own logics and relationships between another entities. Entity does not
     * need to how network communications are being done. </p>
     *
     * <p> I say repeatedly. Expression method of Entity is recommended, but not imposed. It's a semi
     * protocol for network I/O but not a essential protocol must be kept. The expression method of
     * Entity, using on network I/O, is expressed by XML string. </p>
     *
     * <p> If your own network system has a critical performance issue on communication data class,
     * it would be better to using binary communication (with ByteArray).
     * Don't worry about the problem! Invoke also provides methods for binary data (ByteArray). </p>
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
     * <p> An interface taking full charge of network communication. </p>
     *
     * <p> {@link ICommunicator} is an interface for communicator classes who take full charge of network communication
     * with external system, without reference to whether the external system is a server or a client. </p>
     *
     * <p> Whenever a replied message comes from the external system, the message will be converted to an
     * {@link Invoke} class and will be shifted to the {@link WebCommunicator.listener listener}'s
     * {@link IProtocol.replyData replyData()} method. </p>
     *
     * <code>
    interface ICommmunicator
    {
        private socket: SomeSocketClass;

        // LISTENER LISTENS INVOKE MESSAGE BY IT'S IProtocol.replyData() METHOD
        protected listener: IProtocol;

        // YOU CAN DETECT DISCONNECTION BY ENROLLING FUNCTION POINTER TO HERE.
        public onClose: Function;

        public sendData(invoke: Invoke): void
        {
            this.socket.write(invoke);
        }
        public replyData(invoke: Invoke): void
        {
            // WHENEVER COMMUNICATOR GETS MESSAGE, THEN SHIFT IT TO LISTENER'S replyData() METHOD.
            this.listener.replyData(invoke);
        }
    }
     * </code>
     *
     * <p> <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		 style="max-width: 100%" />
     * </a> </p>
     *
     *
     * <h2> Basic Components </h2>
     * <h4> What Basic Components are </h4>
     * <p> <b>Basic Components</b> are the smallest unit of network communication in this <i>Samchon Framework</i>. With
     * <b>Basic Components</b>, you can construct any type of network system, even how the network system is enormously
     * scaled and complicated, by just combinating the <b>Basic Components</b>. </p>
     *
     * <p> All the system templates in this framework are also being implemented by utilization of the
     * <b>Basic Compoonents</b>. </p>
     *
     * <ul>
     *	<li> {@link service Service} </il>
     *	<li> {@link external External System} </il>
     *	<li> {@link parallel Parallel System} </il>
     *	<li> {@link distributed Distributed System} </il>
     * </ul>
     *
     * <p> Note that, whatever the network system what you've to construct is, just concentrate on role of each system
     * and attach matched <b>Basic Components</b> to the role, within framework of the <b>Object-Oriented Design</b>.
     * Then construction of the network system will be much easier. </p>
     *
     * <ul>
     *	<li> A system is a server, then use {@link IServer} or {@link IServerBase}. </li>
     *	<li> A server wants to handle a client has connected, then use {@link IClientDriver}. </li>
     *	<li> A system is a client connecting to an external server, then use {@link IServerConnector}. </li>
     *	<li> </li>
     * </ul>
     *
     * <h4> Example - System Templates </h4>
     * <p> Learning and understanding <i>Basic Components</i> of Samchon Framework, reading source codes and design of
     * <b>System Templates</b>' modules will be very helpful. </p>
     *
     * <table>
     *	<tr>
     *		<th> Name </th>
     *		<th> Source </th>
     *		<th> API Documents </th>
     *	</tr>
     *	<tr>
     *		<td> Cloud Service </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/service"
     *				target="_blank"> protocol/service </a> </td>
     *		<td> {@link protocol.service} </td>
     *	</tr>
     *	<tr>
     *		<td> External System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/external"
     *				target="_blank"> protocol/external </a> </td>
     *		<td> {@link protocol.external} </td>
     *	</tr>
     *	<tr>
     *		<td> Parallel System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/parallel"
     *				target="_blank"> protocol/parallel </a> </td>
     *		<td> {@link protocol.parallel} </td>
     *	</tr>
     *	<tr>
     *		<td> Distributed System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/distributed"
     *				target="_blank"> protocol/distributed </a> </td>
     *		<td> {@link protocol.distributed} </td>
     *	</tr>
     *	<tr>
     *		<td> Slave System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/slave"
     *				target="_blank"> protocol/slave </a> </td>
     *		<td> {@link protocol.slave} </td>
     *	</tr>
     * </table>
     *
     * <h4> Example - Projects </h4>
     * <ul>
     *	<li>
     *		<a href="https://github.com/samchon/framework/wiki/Examples-Calculator" target="_blank"> Calculator </a>
     *	</li>
     *	<li>
     *		<a href="https://github.com/samchon/framework/wiki/Examples-Chatting" target="_blank"> Chatting </a>
     *	</li>
     *	<li>
     *		<a href="https://github.com/samchon/framework/wiki/Examples-Interaction" target="_blank"> Interaction </a>
     *	</li>
     * </ul>
     *
     * @see {@link IClientDriver}, {@link IServerConnector}
     * @handbook <a href="https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components#icommunicator"
     *			 target="_blank"> Basic Components - ICommunicator </a>
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
        close(): any;
        sendData(invoke: protocol.Invoke): void;
        replyData(invoke: protocol.Invoke): void;
    }
}
declare namespace samchon.protocol {
    abstract class CommunicatorBase implements ICommunicator {
        /**
         * @hidden
         */
        protected listener: IProtocol;
        /**
         * @inheritdoc
         */
        onClose: Function;
        /**
         * @hidden
         */
        private binary_invoke;
        /**
         * @hidden
         */
        private binary_parameters;
        /**
         * @hidden
         */
        private unhandled_invokes;
        /**
         * Default Constructor.
         */
        constructor();
        constructor(listener: IProtocol);
        /**
         * @inheritdoc
         */
        abstract close(): void;
        protected is_binary_invoke(): boolean;
        abstract sendData(invoke: Invoke): void;
        replyData(invoke: Invoke): void;
        protected handle_string(str: string): void;
        protected handle_binary(binary: Uint8Array): void;
    }
}
declare namespace samchon.protocol {
    class Communicator extends CommunicatorBase {
        /**
         * @hidden
         */
        protected socket: socket.socket;
        /**
         * @hidden
         */
        private header_bytes;
        /**
         * @hidden
         */
        private data;
        /**
         * @hidden
         */
        private data_index;
        /**
         * @hidden
         */
        private listening;
        /**
         * @inheritdoc
         */
        close(): void;
        /**
         * @hidden
         */
        protected start_listen(): void;
        /**
         * @hidden
         */
        private handle_error();
        /**
         * @hidden
         */
        private handle_close();
        /**
         * @inheritdoc
         */
        sendData(invoke: Invoke): void;
        /**
         * @hidden
         */
        private listen_piece(piece);
        /**
         * @hidden
         */
        private listen_header(piece, piece_index);
        /**
         * @hidden
         */
        private listen_data(piece, piece_index);
    }
}
declare namespace samchon.protocol {
    /**
     * <p> Base class for web-communicator, {@link WebClientDriver} and {@link WebServerConnector}. </p>
     *
     * <p> This class {@link WebCommunicatorBase} subrogates network communication for web-communicator classes,
     * {@link WebClinetDriver} and {@link WebServerConnector}. The web-communicator and this class
     * {@link WebCommunicatorBase} share same interface {@link IProtocol} and have a <b>chain of responsibily</b>
     * relationship. </p>
     *
     * <p> When an {@link Invoke} message was delivered from the connected remote system, then this class calls
     * web-communicator's {@link WebServerConnector.replyData replyData()} method. Also, when called web-communicator's
     * {@link WebClientDriver.sendData sendData()}, then {@link sendData sendData()} of this class will be caleed. </p>
     *
     * <ul>
     *	<li> this.replyData() -> communicator.replyData() </li>
     *	<li> communicator.sendData() -> this.sendData() </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class WebCommunicator extends CommunicatorBase {
        /**
         * Connection driver, a socket for web-socket.
         */
        protected connection: websocket.connection;
        /**
         * Close the connection.
         */
        close(): void;
        /**
         * @inheritdoc
         */
        sendData(invoke: Invoke): void;
        /**
         * <p> Handle raw-data received from the remote system. </p>
         *
         * <p> Queries raw-data received from the remote system. When the raw-data represents an formal {@link Invoke}
         * message, then it will be sent to the {@link replyData}. </p>
         *
         * @param message A raw-data received from the remote system.
         */
        protected handle_message(message: websocket.IMessage): void;
        protected handle_close(): void;
    }
}
declare namespace samchon.protocol {
    class SharedWorkerCommunicator extends CommunicatorBase {
        protected port: MessagePort;
        close(): void;
        /**
         * @inheritdoc
         */
        sendData(invoke: Invoke): void;
        protected handle_message(event: MessageEvent): void;
    }
}
declare namespace samchon.protocol {
    /**
     * <p> An interface for communicator with connected client. </p>
     *
     * <p> {@link IClientDriver} is a type of {@link ICommunicator}, specified for communication with connected client
     * in a server. It takes full charge of network communication with the connected client. </p>
     *
     * <p> {@link IClientDriver} is created in {@link IServer} and delivered via
     * {@link IServer.addClient IServer.addClient()}. Those are derived types from this {@link IClientDriver}, being
     * created by matched {@link IServer} object. </p>
     *
     * <table>
     *	<tr>
     *		<th> Derived Type </th>
     *		<th> Created By </th>
     *	</tr>
     *	<tr>
     *		<td> {@link ClientDrvier} </td>
     *		<td> {@link Server} </td>
     *	</tr>
     *	<tr>
     *		<td> {@link WebClientDrvier} </td>
     *		<td> {@link WebServer} </td>
     *	</tr>
     *	<tr>
     *		<td> {@link SharedWorkerClientDrvier} </td>
     *		<td> {@link SharedWorkerServer} </td>
     *	</tr>
     * </table>
     *
     * <p> <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		 style="max-width: 100%" />
     * </a> </p>
     *
     * <p> When you've got an {@link IClientDriver} object from the {@link IServer.addClient IServer.addClient()}, then
     * specify {@link CommunicatorBase.listener listener} with {@link IClient.listen IClient.listen()}. Below codes are
     * an example specifying and managing the {@link CommunicatorBase.listener listener} objects. </p>
     *
     * <code>
    /// <reference path="../typings/typescript-stl/typescript-stl.d.ts" />
    /// <reference path="../typings/samchon-framework/samchon-framework.d.ts" />

    // IMPORTS
    import std = require("typescript-stl");
    import samchon = require("samchon-framework");

    // SHORTCUTS
    import library = samchon.library;
    import protocol = samchon.protocol;

    class CalculatorServer extends protocol.Server
    {
        private clients: std.HashSet<CalculatorClient>;

        // WHEN A CLIENT HAS CONNECTED
        public addClient(driver: IClientDriver): void
        {
            let client: CalculatorClient = new CalculatorClient(this, driver);
            this.clients.insert(client);
        }
    }

    class CalculatorClient extends protocol.IProtocol
    {
        // PARENT SERVER INSTANCE
        private server: CalculatorServer;

        // COMMUNICATOR, SENDS AND RECEIVES NETWORK MESSAGE WITH CONNECTED CLIENT
        private driver: protocol.IClientDriver;

        /////
        // CONSTRUCTORS
        /////
        public constructor(server: CalculatorServer, driver: protocol.IClientDriver)
        {
            this.server = server;
            this.driver = driver;

            // START LISTENING AND RESPOND CLOSING EVENT
            this.driver.listen(this); // INVOKE MESSAGE WILL COME TO HERE
            this.driver.onClose = this.destructor.bind(this); // DISCONNECTED HANDLER
        }
        public destructor(): void
        {
            // WHEN DISCONNECTED, THEN ERASE THIS OBJECT FROM CalculatorServer.clients.
            this.server["clients"].erase(this);
        }

        /////
        // INVOKE MESSAGE CHAIN
        /////
        public sendData(invoke: protocol.Invoke): void
        {
            // CALL ICommunicator.sendData(), WHO PHYSICALLY SEND NETWORK MESSAGE
            this.driver.sendData(invoke);
        }
        public replyData(invoke: protocol.Invoke): void
        {
            // FIND MATCHED MEMBER FUNCTION NAMED EQUAL TO THE invoke.getListener()
            invoke.apply(this);
        }
    }
     * </code>
     *
     *
     * <h2> Basic Components </h2>
     * <h4> What Basic Components are </h4>
     * <p> <b>Basic Components</b> are the smallest unit of network communication in this <i>Samchon Framework</i>. With
     * <b>Basic Components</b>, you can construct any type of network system, even how the network system is enormously
     * scaled and complicated, by just combinating the <b>Basic Components</b>. </p>
     *
     * <p> All the system templates in this framework are also being implemented by utilization of the
     * <b>Basic Compoonents</b>. </p>
     *
     * <ul>
     *	<li> {@link service Service} </il>
     *	<li> {@link external External System} </il>
     *	<li> {@link parallel Parallel System} </il>
     *	<li> {@link distributed Distributed System} </il>
     * </ul>
     *
     * <p> Note that, whatever the network system what you've to construct is, just concentrate on role of each system
     * and attach matched <b>Basic Components</b> to the role, within framework of the <b>Object-Oriented Design</b>.
     * Then construction of the network system will be much easier. </p>
     *
     * <ul>
     *	<li> A system is a server, then use {@link IServer} or {@link IServerBase}. </li>
     *	<li> A server wants to handle a client has connected, then use {@link IClientDriver}. </li>
     *	<li> A system is a client connecting to an external server, then use {@link IServerConnector}. </li>
     *	<li> </li>
     * </ul>
     *
     * <h4> Example - System Templates </h4>
     * <p> Learning and understanding <i>Basic Components</i> of Samchon Framework, reading source codes and design of
     * <b>System Templates</b>' modules will be very helpful. </p>
     *
     * <table>
     *	<tr>
     *		<th> Name </th>
     *		<th> Source </th>
     *		<th> API Documents </th>
     *	</tr>
     *	<tr>
     *		<td> Cloud Service </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/service"
     *				target="_blank"> protocol/service </a> </td>
     *		<td> {@link protocol.service} </td>
     *	</tr>
     *	<tr>
     *		<td> External System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/external"
     *				target="_blank"> protocol/external </a> </td>
     *		<td> {@link protocol.external} </td>
     *	</tr>
     *	<tr>
     *		<td> Parallel System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/parallel"
     *				target="_blank"> protocol/parallel </a> </td>
     *		<td> {@link protocol.parallel} </td>
     *	</tr>
     *	<tr>
     *		<td> Distributed System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/distributed"
     *				target="_blank"> protocol/distributed </a> </td>
     *		<td> {@link protocol.distributed} </td>
     *	</tr>
     *	<tr>
     *		<td> Slave System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/slave"
     *				target="_blank"> protocol/slave </a> </td>
     *		<td> {@link protocol.slave} </td>
     *	</tr>
     * </table>
     *
     * <h4> Example - Projects </h4>
     * <ul>
     *	<li>
     *		<a href="https://github.com/samchon/framework/wiki/Examples-Calculator" target="_blank"> Calculator </a>
     *	</li>
     *	<li>
     *		<a href="https://github.com/samchon/framework/wiki/Examples-Chatting" target="_blank"> Chatting </a>
     *	</li>
     *	<li>
     *		<a href="https://github.com/samchon/framework/wiki/Examples-Interaction" target="_blank"> Interaction </a>
     *	</li>
     * </ul>
     *
     * @see {@link IServer}
     * @handbook <a href="https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components#iclientdriver"
     *			 target="_blank"> Basic Components - IClientDriver </a>
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IClientDriver extends ICommunicator {
        /**
         * <p> Listen message from the newly connected client. </p>
         *
         * <p> Starts listening message from the newly connected client. Replied message from the connected client will
         * be converted to {@link Invoke} classes and shifted to the <i>listener</i>'s
         * {@link IProtocol.replyData replyData()} method. </p>
         *
         * @param listener A listener object to listen replied message from newly connected client in
         *				   {@link IProtocol.replyData replyData()} as an {@link Invoke} message.
         */
        listen(listener: IProtocol): void;
    }
}
declare namespace samchon.protocol {
    class ClientDriver extends Communicator implements IClientDriver {
        constructor(socket: socket.socket);
        /**
         * @inheritdoc
         */
        listen(listener: IProtocol): void;
    }
}
declare namespace samchon.protocol {
    class WebClientDriver extends WebCommunicator implements IClientDriver {
        /**
         * Requested path.
         */
        private path;
        /**
         * Session ID, an identifier of the remote client.
         */
        private session_id;
        private listening;
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
    class SharedWorkerClientDriver extends SharedWorkerCommunicator implements IClientDriver {
        private listening;
        constructor(port: MessagePort);
        /**
         * @inheritdoc
         */
        listen(listener: IProtocol): void;
    }
}
declare namespace samchon.protocol {
    abstract class DedicatedWorker implements IProtocol {
        private communicator_;
        /**
         * Default Constructor.
         */
        constructor();
        abstract replyData(invoke: protocol.Invoke): void;
        sendData(invoke: Invoke): void;
    }
}
declare namespace samchon.protocol {
    class DedicatedWorkerConnector extends CommunicatorBase implements IServerConnector {
        private worker;
        /**
         * @inheritdoc
         */
        onConnect: Function;
        /**
         * @inheritdoc
         */
        onClose: Function;
        constructor(listener: IProtocol);
        /**
         * @inheritdoc
         */
        connect(jsFile: string): void;
        /**
         * @inheritdoc
         */
        close(): void;
        sendData(invoke: Invoke): void;
        replyData(invoke: Invoke): void;
        private handle_message(event);
    }
}
declare namespace samchon.protocol {
    interface IEntityGroup<T extends IEntity> extends IEntity, std.base.IContainer<T> {
        /**
         * <p> Construct data of the Entity from an XML object. </p>
         *
         * <p> Constructs the EntityArray's own member variables only from the input XML object. </p>
         *
         * <p> Do not consider about constructing children Entity objects' data in EntityArray::construct().
         * Those children Entity objects' data will constructed by their own construct() method. Even insertion
         * of XML objects representing children are done by abstract method of EntityArray::toXML(). </p>
         *
         * <p> Constructs only data of EntityArray's own. </p>
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        /**
         * <p> Get iterator to element. </p>
         *
         * <p> Searches the container for an element with a identifier equivalent to <i>key</i> and returns an
         * iterator to it if found, otherwise it returns an iterator to {@link end end()}. </p>
         *
         * <p> Two keys are considered equivalent if the container's comparison object returns false reflexively
         * (i.e., no matter the order in which the elements are passed as arguments). </p>
         *
         * <p> Another member functions, {@link has has()} and {@link count count()}, can be used to just check
         * whether a particular <i>key</i> exists. </p>
         *
         * @param key Key to be searched for
         * @return An iterator to the element, if an element with specified <i>key</i> is found, or
         *		   {@link end end()} otherwise.
         */
        /**
         * <p> Whether have the item or not. </p>
         *
         * <p> Indicates whether a map has an item having the specified identifier. </p>
         *
         * @param key Key value of the element whose mapped value is accessed.
         *
         * @return Whether the map has an item having the specified identifier.
         */
        has(key: any): boolean;
        /**
         * <p> Count elements with a specific key. </p>
         *
         * <p> Searches the container for elements whose key is <i>key</i> and returns the number of elements found. </p>
         *
         * @param key Key value to be searched for.
         *
         * @return The number of elements in the container with a <i>key</i>.
         */
        count(key: any): number;
        /**
         * <p> Get an element </p>
         *
         * <p> Returns a reference to the mapped value of the element identified with <i>key</i>. </p>
         *
         * @param key Key value of the element whose mapped value is accessed.
         *
         * @throw exception out of range
         *
         * @return A reference object of the mapped value (_Ty)
         */
        get(key: any): T;
        /**
         * <p> A tag name of children objects. </p>
         */
        CHILD_TAG(): string;
        /**
         * <p> Get an XML object represents the EntityArray. </p>
         *
         * <p> Archives the EntityArray's own member variables only to the returned XML object. </p>
         *
         * <p> Do not consider about archiving children Entity objects' data in EntityArray::toXML().
         * Those children Entity objects will converted to XML object by their own toXML() method. The
         * insertion of XML objects representing children are done by abstract method of
         * EntityArray::toXML(). </p>
         *
         * <p> Archives only data of EntityArray's own. </p>
         */
        toXML(): library.XML;
    }
    /**
     * @inheritdoc
     */
    abstract class EntityArray<T extends IEntity> extends std.Vector<T> implements IEntityGroup<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        protected abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
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
    /**
     * @inheritdoc
     */
    abstract class EntityList<T extends IEntity> extends std.List<T> implements IEntityGroup<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        protected abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
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
    /**
     * @inheritdoc
     */
    abstract class EntityDeque<T extends IEntity> extends std.Deque<T> implements IEntityGroup<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        protected abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
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
    interface IEntityCollection<T extends IEntity> extends IEntityGroup<T>, collection.ICollection<T> {
    }
    /**
     * @inheritdoc
     */
    abstract class EntityArrayCollection<T extends IEntity> extends collection.ArrayCollection<T> implements IEntityCollection<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        protected abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
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
    /**
     * @inheritdoc
     */
    abstract class EntityListCollection<T extends IEntity> extends collection.ListCollection<T> implements IEntityCollection<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        protected abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
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
    /**
     * @inheritdoc
     */
    abstract class EntityDequeCollection<T extends IEntity> extends collection.DequeCollection<T> implements IEntityCollection<T> {
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> EntityArray::createChild() is a factory method creating a new child Entity which is belonged
         * to the EntityArray. This method is called by EntityArray::construct(). The children construction
         * methods Entity::construct() will be called by abstract method of the EntityArray::construct(). </p>
         *
         * @return A new child Entity belongs to EntityArray.
         */
        protected abstract createChild(xml: library.XML): T;
        /**
         * @inheritdoc
         */
        key(): any;
        /**
         * @inheritdoc
         */
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
     * <p> An interface for {@link Invoke} message chain. </p>
     *
     * <p> {@link IProtocol} is an interface for {@link Invoke} message, which is standard message of network I/O in
     * <i>Samchon Framework</i>, chain. The {@link IProtocol} interface is used to network drivers and some classes
     * which are in a relationship of <i>Chain of Responsibility Pattern</i> with those network drivers. </p>
     *
     * <p> Implements {@link IProtocol} if the class sends and handles {@link Invoke} message. Looking around source
     * codes of <i>Samchon Framework</i>, especially <i>System Templates</i>, you can find out that all the classes and
     * modules handling {@link Invoke} messages are always implementing this {@link IProtocol} . Yes, {@link IProtocol},
     * this is the main role you've to follow in this <i>Samchon Framework</i>. </p>
     *
     * <p> <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		 style="max-width: 100%" />
     * </a> </p>
     *
     *
     * <h2> Utilization Case </h2>
     * <p> Below pseudo code and class diagram represents {@link service Service Module}, who can build a cloud server.
     * All the classes in the pseudo code are implementing the {@link IProtocol} because all of them are handling
     * {@link Invoke} message. </p>
     *
     * <ul>
     *	<li> Server: Represents a server literally </li>
     *	<li> User: Represents an user being identified by its session id. User contains multiple Client objects. </li>
     *	<ul>
     *		<li> In browser, an user can open multiple windows.
     *		<ul>
     *			<li> User: A browser (like IE, Chrome and Safari).
     *			<li> Client: An internet browser window
     *		</ul>
     *		</li>
     *	</ul>
     *	<li> Client: Represents a browser window and it takes role of network communication with it. </li>
     *	<li> Service: Represents a service, domain logic. </li>
     * </ul>
     *
     * <p> <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_service.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_service.png"
     *		 style="max-width: 100%" />
     * </a> </p>
     *
     * <code>
    /// <reference path="../typings/typescript-stl/typescript-stl.d.ts" />
    /// <reference path="../typings/samchon-framework/samchon-framework.d.ts" />

    // IMPORTS
    import std = require("typescript-stl");
    import samchon = require("samchon-framework");

    // SHORTCUTS
    import library = samchon.library;
    import collection = samchon.collection;
    import protocol = samchon.protocol;

    namespace service
    {
        export class Server extends protocol.WebServer implements IProtocol
        {
            // SERVER HAS MULTIPLE USER OBJECTS
            private session_map: std.HashMap<string, User>;

            //------------------------
            // MESSAGE CHAIN
            //------------------------
            public sendData(invoke: protocol.Invoke): void
            {
                // SEND INVOKE MESSAGE TO ALL USER OBJECTS
                for (let it = this.session_map.begin(); !it.equal_to(this.session_map.end()); it = it.next())
                    it.second.sendData(invoke);
            }
            public replyData(invoke: protocol.Invoke): void
            {
                invoke.apply(this); // HANDLE INVOKE MESSAGE BY ITSELF
            }
        }

        export class User extends
            collection.HashMapCollection<number, Client> // USER HAS MULTIPLE CLIENT OBJECTS
            implements IProtocol
        {
            private server: Server; // USER REFRES SERVER

            //------------------------
            // MESSAGE CHAIN
            //------------------------
            public sendData(invoke: protocol.Invoke): void
            {
                // SEND INVOKE MESSAGE TO ALL CLIENT OBJECTS
                for (let it = this.begin(); !it.equal_to(this.end()); it = it.next())
                    it.second.sendData(invoke);
            }
            public replyData(invoke: protocol.Invoke): void
            {
                invoke.apply(this); // HANDLE INOVKE MESSAGE BY ITSELF
                this.server.replyData(invoke); // OR VIA SERVER
            }
        }

        export class Client implements IProtocol
        {
            private user: User; // CLIENT REFERS USER
            private service: Service; // CLIENT HAS A SERVICE OBJECT

            private driver: WebClientDriver;

            //------------------------
            // MESSAGE CHAIN
            //------------------------
            public sendData(invoke: protocol.Invoke): void
            {
                // SEND INVOKE MESSAGE VIA driver: WebClientDriver
                this.driver.sendData(invoke);
            }
            public replyData(invoke: protocol.Invoke): void
            {
                invoke.apply(this); // HANDLE INOVKE MEESAGE BY ITSELF
                this.user.replyData(invoke); // OR VIA USER

                if (this.service != null) // OR VIA SERVICE
                    this.service.replyData(invoke);
            }
        }

        export class Service implements IProtocol
        {
            private client: Client; // SERVICE REFRES CLIENT

            //------------------------
            // MESSAGE CHAIN
            //------------------------
            public sendData(invoke: protocol.Invoke): void
            {
                // SEND INVOKE MESSAGE VIA CLIENT
                return this.client.sendData(invoke);
            }
            public replyData(invoke: protocol.Invoke): void
            {
                invoke.apply(this); // HANDLE INVOKE MESSAGE BY ITSELF
            }
        }
    }
     * </code>
     *
     *
     * <h2> Basic Components </h2>
     * <h4> What Basic Components are </h4>
     * <p> <b>Basic Components</b> are the smallest unit of network communication in this <i>Samchon Framework</i>. With
     * <b>Basic Components</b>, you can construct any type of network system, even how the network system is enormously
     * scaled and complicated, by just combinating the <b>Basic Components</b>. </p>
     *
     * <p> All the system templates in this framework are also being implemented by utilization of the
     * <b>Basic Compoonents</b>. </p>
     *
     * <ul>
     *	<li> {@link service Service} </il>
     *	<li> {@link external External System} </il>
     *	<li> {@link parallel Parallel System} </il>
     *	<li> {@link distributed Distributed System} </il>
     * </ul>
     *
     * <p> Note that, whatever the network system what you've to construct is, just concentrate on role of each system
     * and attach matched <b>Basic Components</b> to the role, within framework of the <b>Object-Oriented Design</b>.
     * Then construction of the network system will be much easier. </p>
     *
     * <ul>
     *	<li> A system is a server, then use {@link IServer} or {@link IServerBase}. </li>
     *	<li> A server wants to handle a client has connected, then use {@link IClientDriver}. </li>
     *	<li> A system is a client connecting to an external server, then use {@link IServerConnector}. </li>
     *	<li> </li>
     * </ul>
     *
     * <h4> Example - System Templates </h4>
     * <p> Learning and understanding <i>Basic Components</i> of Samchon Framework, reading source codes and design of
     * <b>System Templates</b>' modules will be very helpful. </p>
     *
     * <table>
     *	<tr>
     *		<th> Name </th>
     *		<th> Source </th>
     *		<th> API Documents </th>
     *	</tr>
     *	<tr>
     *		<td> Cloud Service </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/service"
     *				target="_blank"> protocol/service </a> </td>
     *		<td> {@link protocol.service} </td>
     *	</tr>
     *	<tr>
     *		<td> External System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/external"
     *				target="_blank"> protocol/external </a> </td>
     *		<td> {@link protocol.external} </td>
     *	</tr>
     *	<tr>
     *		<td> Parallel System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/parallel"
     *				target="_blank"> protocol/parallel </a> </td>
     *		<td> {@link protocol.parallel} </td>
     *	</tr>
     *	<tr>
     *		<td> Distributed System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/distributed"
     *				target="_blank"> protocol/distributed </a> </td>
     *		<td> {@link protocol.distributed} </td>
     *	</tr>
     *	<tr>
     *		<td> Slave System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/slave"
     *				target="_blank"> protocol/slave </a> </td>
     *		<td> {@link protocol.slave} </td>
     *	</tr>
     * </table>
     *
     * <h4> Example - Projects </h4>
     * <ul>
     *	<li>
     *		<a href="https://github.com/samchon/framework/wiki/Examples-Calculator" target="_blank"> Calculator </a>
     *	</li>
     *	<li>
     *		<a href="https://github.com/samchon/framework/wiki/Examples-Chatting" target="_blank"> Chatting </a>
     *	</li>
     *	<li>
     *		<a href="https://github.com/samchon/framework/wiki/Examples-Interaction" target="_blank"> Interaction </a>
     *	</li>
     * </ul>
     *
     * @see {@link Invoke}
     * @handbook <a href="https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components#iprotocol"
     *			 target="_blank"> Basic Components - IProtocol </a>
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IProtocol {
        /**
         * <p> Sending message. </p>
         * <p> Sends message to related system or shifts the responsibility to chain. </p>
         *
         * @param invoke Invoke message to send
         */
        replyData(invoke: Invoke): void;
        /**
         * <p> Handling replied message. </p>
         * <p> Handles replied message or shifts the responsibility to chain. </p>
         *
         * @param invoke An {@link Invoke} message has received.
         */
        sendData(invoke: Invoke): void;
    }
}
declare namespace samchon.protocol {
    /**
     * <p> Standard message of network I/O. </p>
     *
     * <p> {@link Invoke} is a class used in network I/O in protocol package of Samchon Framework. </p>
     *
     * <p> The Invoke message has an XML structure like the result screen of provided example in below.
     * We can enjoy lots of benefits by the normalized and standardized message structure used in
     * network I/O. </p>
     *
     * <p> The greatest advantage is that we can make any type of network system, even how the system
     * is enourmously complicated. As network communication message is standardized, we only need to
     * concentrate on logical relationships between network systems. We can handle each network system
     * like a object (class) in OOD. And those relationships can be easily designed by using design
     * pattern. </p>
     *
     * <p> In Samchon Framework, you can make any type of network system with basic componenets
     * (IProtocol, IServer and ICommunicator) by implemens or inherits them, like designing
     * classes of S/W architecture. </p>
     *
     * @see IProtocol
     * @author Jeongho Nam <http://samchon.org>
     */
    class Invoke extends EntityArray<InvokeParameter> {
        /**
         * <p> Listener, represent function's name. </p>
         */
        protected listener: string;
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
        constructor(listener: string, ...parameters: Array<number | string | library.XML>);
        /**
         * @inheritdoc
         */
        protected createChild(xml: library.XML): InvokeParameter;
        /**
         * Get listener.
         */
        getListener(): string;
        /**
         * <p> Get arguments for Function.apply(). </p>
         *
         * @return An array containing values of the contained parameters.
         */
        getArguments(): Array<any>;
        /**
         * <p> Apply to a matched function. </p>
         */
        apply(obj: IProtocol): boolean;
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
     * @author Jeongho Nam <http://samchon.org>
     */
    class InvokeParameter extends Entity {
        /**
         * <p> Name of the parameter. </p>
         *
         * @details Optional property, can be omitted.
         */
        protected name: string;
        /**
         * <p> Type of the parameter. </p>
         */
        protected type: string;
        /**
         * <p> Value of the parameter. </p>
         */
        protected value: string | number | library.XML | Uint8Array;
        /**
         * Default Constructor.
         */
        constructor();
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
        constructor(name: string, val: number);
        constructor(name: string, val: string);
        constructor(name: string, val: library.XML);
        constructor(name: string, val: Uint8Array);
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        setValue(value: number): any;
        setValue(value: string): any;
        setValue(value: library.XML): any;
        setValue(value: Uint8Array): any;
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
    class InvokeHistory extends Entity {
        /**
         *
         */
        private uid;
        /**
         * @see {@link Invoke.listener}
         */
        private listener;
        /**
         *
         */
        private startTime;
        /**
         *
         */
        private endTime;
        /**
         * Default Constructor.
         */
        constructor();
        constructor(invoke: Invoke);
        construct(xml: library.XML): void;
        notifyEnd(): void;
        key(): number;
        getUID(): number;
        getListener(): string;
        getStartTime(): Date;
        getEndTime(): Date;
        computeElapsedTime(): number;
        TAG(): string;
        toXML(): library.XML;
        toInvoke(): Invoke;
    }
}
declare namespace samchon.protocol {
    /**
     * <p> An interface for a physical server. </p>
     *
     * <p> {@link IServer} provides methods for opening a server. Extends one of them who are derived from this
     * {@link IServer} and open the server with method {@link open IServer.open()}. Override
     * {@link addClient IServer.addClient()} who accepts a newly connected client with {@link IClientDriver}.
     * If you're embarrased because your class already extended another one, then use {@link IServerBase}. </p>
     *
     * <ul>
     *	<li> {@link Server} </li>
     *	<li> {@link WebServer} </li>
     *	<li> {@link SharedWorkerServer} </li>
     * </ul>
     *
     * <p> <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_basic_components.png"
     *		 style="max-width: 100%" />
     * </a> </p>
     *
     * <h2> Basic Components </h2>
     * <h4> What Basic Components are </h4>
     * <p> <b>Basic Components</b> are the smallest unit of network communication in this <i>Samchon Framework</i>. With
     * <b>Basic Components</b>, you can construct any type of network system, even how the network system is enormously
     * scaled and complicated, by just combinating the <b>Basic Components</b>. </p>
     *
     * <p> All the system templates in this framework are also being implemented by utilization of the
     * <b>Basic Compoonents</b>. </p>
     *
     * <ul>
     *	<li> {@link service Service} </il>
     *	<li> {@link external External System} </il>
     *	<li> {@link parallel Parallel System} </il>
     *	<li> {@link distributed Distributed System} </il>
     * </ul>
     *
     * <p> Note that, whatever the network system what you've to construct is, just concentrate on role of each system
     * and attach matched <b>Basic Components</b> to the role, within framework of the <b>Object-Oriented Design</b>.
     * Then construction of the network system will be much easier. </p>
     *
     * <ul>
     *	<li> A system is a server, then use {@link IServer} or {@link IServerBase}. </li>
     *	<li> A server wants to handle a client has connected, then use {@link IClientDriver}. </li>
     *	<li> A system is a client connecting to an external server, then use {@link IServerConnector}. </li>
     *	<li> </li>
     * </ul>
     *
     * <h4> Example - System Templates </h4>
     * <p> Learning and understanding <i>Basic Components</i> of Samchon Framework, reading source codes and design of
     * <b>System Templates</b>' modules will be very helpful. </p>
     *
     * <table>
     *	<tr>
     *		<th> Name </th>
     *		<th> Source </th>
     *		<th> API Documents </th>
     *	</tr>
     *	<tr>
     *		<td> Cloud Service </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/service"
     *				target="_blank"> protocol/service </a> </td>
     *		<td> {@link protocol.service} </td>
     *	</tr>
     *	<tr>
     *		<td> External System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/external"
     *				target="_blank"> protocol/external </a> </td>
     *		<td> {@link protocol.external} </td>
     *	</tr>
     *	<tr>
     *		<td> Parallel System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/parallel"
     *				target="_blank"> protocol/parallel </a> </td>
     *		<td> {@link protocol.parallel} </td>
     *	</tr>
     *	<tr>
     *		<td> Distributed System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/distributed"
     *				target="_blank"> protocol/distributed </a> </td>
     *		<td> {@link protocol.distributed} </td>
     *	</tr>
     *	<tr>
     *		<td> Slave System </td>
     *		<td> <a href="https://github.com/samchon/framework/tree/master/ts/src/samchon/protocol/slave"
     *				target="_blank"> protocol/slave </a> </td>
     *		<td> {@link protocol.slave} </td>
     *	</tr>
     * </table>
     *
     * <h4> Example - Projects </h4>
     * <ul>
     *	<li>
     *		<a href="https://github.com/samchon/framework/wiki/Examples-Calculator" target="_blank"> Calculator </a>
     *	</li>
     *	<li>
     *		<a href="https://github.com/samchon/framework/wiki/Examples-Chatting" target="_blank"> Chatting </a>
     *	</li>
     *	<li>
     *		<a href="https://github.com/samchon/framework/wiki/Examples-Interaction" target="_blank"> Interaction </a>
     *	</li>
     * </ul>
     *
     * @see {@link IClientDriver}
     * @handbook <a href="https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components#iserver"
     *			 target="_blank"> Basic Components - IServer </a>
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IServer {
        open(port: number): void;
        close(): void;
        addClient(clientDriver: IClientDriver): void;
    }
}
declare namespace samchon.protocol {
    abstract class Server implements IServer {
        private server;
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
        private handle_connect(socket);
    }
}
declare namespace samchon.protocol {
    abstract class WebServer implements IServer {
        /**
         * A server handler.
         */
        private http_server;
        /**
         * Sequence number for issuing session id.
         */
        private sequence;
        /**
         * @hidden
         */
        private my_port;
        /**
         * Default Constructor.
         */
        constructor();
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
        abstract addClient(driver: WebClientDriver): void;
        /**
         * <p> Handle request from a client system. </p>
         *
         * <p> This method {@link handle_request} will be called when a client is connected. It will call an abstract
         * method method {@link addClient addClient()} who handles an accepted client. If the newly connected client
         * doesn't have its own session id, then a new session id will be issued. </p>
         *
         * @param request Requested header.
         */
        private handle_request(request);
        /**
         * <p> Get session id from a newly connected. </p>
         *
         * <p> Queries ordinary session id from cookies of a newly connected client. If the client has not, a new
         * session id will be issued. </p>
         *
         * @param cookies Cookies from the remote client.
         */
        private get_session_id(cookies);
        /**
         * Issue a new session id.
         */
        private issue_session_id();
    }
}
declare namespace samchon.protocol {
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
        private handle_connect(event);
    }
}
declare namespace samchon.protocol {
    /**
     * <p> An interface for substitute server classes. </p>
     *
     * <p> {@link IServerBase} is an interface for substitue server classes who subrogate server's role. </p>
     *
     * <p> The easiest way to defining a server class is to extending one of them, who are derived from the
     * {@link IServer}. </p>
     *
     * <ul>
     *	<li> {@link Server} </li>
     *	<li> {@link WebServer} </li>
     *	<li> {@link SharedWorkerServer} </li>
     * </ul>
     *
     * <p> However, it is impossible (that is, if the class is already extending another class), you can instead implement
     * the {@link IServer} interface, create an {@link IServerBase} member, and write simple hooks to route calls into the
     * aggregated {@link IServerBase}. </p>
     *
     * <p> {@link ExternalClientArray} can be a good example using this {@link IServerBase}. </p>
     * <ul>
     *	<li> https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/external/ExternalClientArray.ts </li>
     * </ul>
     *
     * <code>
    class MyServer extends Something implements IServer
    {
        private server_base: IServerBase = new WebServerBase(this);

        public addClient(driver: IClientDriver): void
        {
            // WHAT TO DO WHEN A CLIENT HAS CONNECTED
        }

        public open(port: number): void
        {
            this.server_base.open();
        }
        public close(): void
        {
            this.server_base.close();
        }
    }
     * </code>
     *
     * @see {@link IServer}
     * @handbook <a href="https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components#iserverbase"
     *			 target="_blank"> Basic Components - IServerBase </a>
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IServerBase extends IServer {
    }
}
declare namespace samchon.protocol {
    /**
     * <p> A substitute {@link Server}. </p>
     *
     * <p> {@link ServerBase} is a substitute class who subrogates {@link Server}'s responsibility. </p>
     *
     * <p> The easiest way to defning a server class following normal protocol of Samchon Framework is to extending
     * {@link Server}. However, it is impossible (that is, if the class is already extending another class), you can
     * instead implement the {@link IServer} interface, create a {@link ServerBase} member, and write simple hooks
     * to route calls into the aggregated {@link ServerBase}. </p>
     *
     * <p> {@link ExternalClientArray} can be a good example using this {@link IServerBase}. </p>
     * <ul>
     *	<li> https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/external/ExternalClientArray.ts </li>
     * </ul>
     *
     * <code>
    class MyServer extends Something implements IServer
    {
        private server_base: ServerBase = new ServerBase(this);

        public addClient(driver: ClientDriver): void
        {
            // WHAT TO DO WHEN A CLIENT HAS CONNECTED
        }

        public open(port: number): void
        {
            this.server_base.open();
        }
        public close(): void
        {
            this.server_base.close();
        }
    }
     * </code>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class ServerBase extends Server implements IServerBase {
        private target;
        constructor(target: IServer);
        addClient(driver: IClientDriver): void;
    }
}
declare namespace samchon.protocol {
    /**
     * <p> A substitute {@link WebServer}. </p>
     *
     * <p> {@link WebServerBase} is a substitute class who subrogates {@link WebServer}'s responsibility. </p>
     *
     * <p> The easiest way to defning a server class following normal protocol of Samchon Framework is to extending
     * {@link WebServer}. However, it is impossible (that is, if the class is already extending another class), you can
     * instead implement the {@link IServer} interface, create a {@link WebServerBase} member, and write simple hooks to
     * route calls into the aggregated {@link WebServerBase}. </p>
     *
     * <p> {@link ExternalClientArray} can be a good example using this {@link IServerBase}. </p>
     * <ul>
     *	<li> https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/external/ExternalClientArray.ts </li>
     * </ul>
     *
     * <code>
    class MyServer extends Something implements IServer
    {
        private server_base: WebServerBase = new WebServerBase(this);

        public addClient(driver: WebClientDriver): void
        {
            // WHAT TO DO WHEN A CLIENT HAS CONNECTED
        }

        public open(port: number): void
        {
            this.server_base.open();
        }
        public close(): void
        {
            this.server_base.close();
        }
    }
     * </code>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class WebServerBase extends WebServer implements IServerBase {
        private target;
        constructor(target: IServer);
        addClient(driver: IClientDriver): void;
    }
}
declare namespace samchon.protocol {
    /**
     * <p> A substitute {@link SharedWorkerServer}. </p>
     *
     * <p> {@link SharedWorkerServerBase} is a substitute class who subrogates {@link SharedWorkerServer}'s
     * responsibility. </p>
     *
     * <p> The easiest way to defning a server class following normal protocol of Samchon Framework is to extending
     * {@link SharedWorkerServer}. However, it is impossible (that is, if the class is already extending another class),
     * you can instead implement the {@link IServer} interface, create a {@link SharedWorkerServerBase} member, and write
     * simple hooks to route calls into the aggregated {@link SharedWorkerServerBase}. </p>
     *
     * <p> {@link ExternalClientArray} can be a good example using this {@link IServerBase}. </p>
     * <ul>
     *	<li> https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/external/ExternalClientArray.ts </li>
     * </ul>
     *
     * <code>
    class MyServer extends Something implements IServer
    {
        private server_base: SharedWorkerServerBase = new SharedWorkerServerBase(this);

        public addClient(driver: SharedWorkerClientDriver): void
        {
            // WHAT TO DO WHEN A CLIENT HAS CONNECTED
        }

        public open(port: number): void
        {
            this.server_base.open();
        }
        public close(): void
        {
            this.server_base.close();
        }
    }
     * </code>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class SharedWorkerServerBase extends SharedWorkerServer implements IServerBase {
        private target;
        constructor(target: IServer);
        addClient(driver: IClientDriver): void;
    }
}
declare namespace samchon.protocol {
    /**
     * <p> An interface for server connector. </p>
     *
     * <p> {@link IServerConnector} is an interface for server connector classes who ca connect to an external server
     * as a client. </p>
     *
     * <p> Of course, {@link IServerConnector} is extended from the {@link ICommunicator}, thus, it also takes full
     * charge of network communication and delivers replied message to {@link WebCommunicator.listener listener}'s
     * {@link IProtocol.replyData replyData()} method. </p>
     *
     * @handbook <a href="https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components#iserverconnector"
     *			 target="_blank"> Basic Components - IServerConnector </a>
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IServerConnector extends ICommunicator {
        /**
         * Callback function for connection completed.
         */
        onConnect: Function;
        /**
         * <p> Connect to a server. </p>
         *
         * <p> Connects to a server with specified <i>host</i> address and <i>port</i> number. After the connection has
         * succeeded, callback function {@link onConnect} is called. Listening data from the connected server also begins.
         * Replied messages from the connected server will be converted to {@link Invoke} classes and will be shifted to
         * the {@link WebCommunicator.listener listener}'s {@link IProtocol.replyData replyData()} method. </p>
         *
         * <p> If the connection fails immediately, either an event is dispatched or an exception is thrown: an error
         * event is dispatched if a host was specified, and an exception is thrown if no host was specified. Otherwise,
         * the status of the connection is reported by an event. If the socket is already connected, the existing
         * connection is closed first. </p>
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
    class ServerConnector extends Communicator implements IServerConnector {
        /**
         * @inheritdoc
         */
        onConnect: Function;
        constructor(listener: IProtocol);
        /**
         * @inheritdoc
         */
        connect(ip: string, port: number): void;
        private handle_connect(...arg);
    }
}
declare namespace samchon.protocol {
    /**
     * <p> A server connector for web-socket protocol. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class WebServerConnector extends WebCommunicator implements IServerConnector {
        /**
         * <p> A socket for network I/O. </p>
         *
         * <p> Note that, {@link socket} is only used in web-browser environment. </p>
         */
        private browser_socket;
        /**
         * <p> A driver for server connection. </p>
         *
         * <p> Note that, {@link node_client} is only used in NodeJS environment. </p>
         */
        private node_client;
        /**
         * @inheritdoc
         */
        onConnect: Function;
        constructor(listener: IProtocol);
        /**
         * @inheritdoc
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
        private handle_browser_connect(event);
        private handle_browser_message(event);
        private handle_node_connect(connection);
    }
}
declare namespace samchon.protocol {
    class SharedWorkerServerConnector extends SharedWorkerCommunicator implements IServerConnector {
        /**
         * @inheritdoc
         */
        onConnect: Function;
        constructor(listener: IProtocol);
        connect(jsFile: string): void;
    }
}
declare namespace samchon.protocol {
    namespace socket {
        type socket = any;
        type server = any;
        type http_server = any;
    }
    namespace websocket {
        type connection = any;
        type request = any;
        type IMessage = any;
        type ICookie = any;
        type client = any;
    }
}
declare namespace samchon.protocol.external {
    /**
     * <p> An external system driver. </p>
     *
     * <p> The {@link ExternalSystem} class represents an external system, connected and interact with this system.
     * {@link ExternalSystem} takes full charge of network communication with external system have connected.
     * Replied {@link Invoke messages} from the external system is shifted to and processed in, children elements of this
     * class, {@link ExternalSystemRole} objects. </p>
     *
     * <p> <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		 style="max-width: 100%" />
     * </a> </p>
     *
     * <h4> Bridge & Proxy Pattern </h4>
     * <p> The {@link ExternalSystem} class can be a <i>bridge</i> for <i>logical proxy</i>. In framework within user,
     * which {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is <i>which can be done</i>. </p>
     *
     * <p> By using the <i>logical proxy</i>, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}. </p>
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
     *	<li> Those strategy is called <i>Bridge Pattern</i> and <i>Proxy Pattern</i>. </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ExternalSystem extends EntityDequeCollection<ExternalSystemRole> implements IProtocol {
        /**
         * A network communicator with external system.
         */
        /**
         * A network communicator with external system.
         */
        protected communicator: ICommunicator;
        /**
         * The name represents external system have connected.
         */
        protected name: string;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from an IClientDriver object.
         *
         * @param driver
         */
        constructor(driver: IClientDriver);
        /**
         * Default Destructor.
         */
        destructor(): void;
        /**
         * Identifier of {@link ExternalSystem} is its {@link name}.
         */
        key(): string;
        /**
         * Get {@link name}.
         */
        getName(): string;
        close(): void;
        /**
         * Send {@link Invoke} message to external system.
         *
         * @param invoke An {@link Invoke} message to send.
         */
        sendData(invoke: Invoke): void;
        /**
         * Handle an {@Invoke} message have received.
         *
         * @param invoke An {@link Invoke} message have received.
         */
        replyData(invoke: Invoke): void;
        /**
         * Tag name of the {@link ExternalSytem} in {@link XML}.
         *
         * @return <i>system</i>.
         */
        TAG(): string;
        /**
         * Tag name of {@link ExternalSystemRole children elements} belonged to the {@link ExternalSytem} in {@link XML}.
         *
         * @return <i>role</i>.
         */
        CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
        /**
         * @hidden
         */
        private communicator_;
        /**
         * @hidden
         */
        private external_system_array_;
        /**
         * @hidden
         */
        private erasing_;
        /**
         * @hidden
         */
        private external_system_array;
        /**
         * @hidden
         */
        private handle_close();
    }
}
declare namespace samchon.protocol.parallel {
    /**
     * <p> An external parallel system driver. </p>
     *
     *
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ParallelSystem extends external.ExternalSystem {
        /**
         * A manager containing this {@link ParallelSystem} object.
         */
        private systemArray;
        /**
         * A list of {@link Invoke} messages on process.
         *
         * @see {@link performance}
         */
        private progress_list;
        /**
         * A list of {@link Invoke} messages had processed.
         *
         * @see {@link performance}
         */
        private history_list;
        /**
         * <p> Performance index. </p>
         *
         * <p> A performance index that indicates how much fast the connected parallel system is. </p>
         *
         * <p> If this {@link ParallelSystem parallel system} hasn't any {@link Invoke} message
         * {@link history_list had handled}, then the {@link performance performance index} will be 1, which means
         * default and average value between all {@link ParallelSystem} instances (belonged to a same
         * {@link ParallelSystemArray} object). </p>
         *
         * <p> You can specify this {@link performance} by yourself, but notice that, if the
         * {@link performance performance index} is higher then other {@link ParallelSystem} objects, then this
         * {@link ParallelSystem parallel system} will ordered to handle more processes than other {@link ParallelSystem}
         * objects. Otherwise, the {@link performance performance index) is lower than others, of course, less processes
         * will be delivered. </p>
         *
         * <p> This {@link performance index} is always re-calculated whenever {@link ParallelSystemArray} calls one of
         * them below. </p>
         *
         * <ul>
         *	<li> {@link ParallelSystemArray.sendSegmentData ParallelSystemArray.sendSegmentData()} </li>
         *	<li> {@link ParallelSystemArray.sendPieceData ParallelSystemArray.sendPieceData()} </li>
         * </ul>
         *
         * <p> If this class is a type of {@link DistributedSystem}, a derived class from the {@link ParallelSystem},
         * then {@link DistributedSystemRole.sendData DistributedSystem.sendData()} also cause the re-calculation. </p>
         *
         * @see {@link progress_list}, {@link history_list}
         */
        protected performance: number;
        /**
         * Construct from a {@link ParallelSystemArray}.
         *
         * @param systemArray A manager containing this {@link ParallelSystem} object.
         * @param communicator A communicator who takes full charge of network communication with the external
         *					   parallel system.
         */
        constructor(systemArray: ParallelSystemArray, communicator?: ICommunicator);
        /**
         * Get manager of this object, {@link systemArray}.
         *
         * @return A manager containing this {@link ParallelSystem} object.
         */
        getSystemArray(): ParallelSystemArray;
        /**
         * Get {@link performant performance index}.
         *
         * A performance index that indicates how much fast the connected parallel system is.
         */
        getPerformance(): number;
        /**
         * Send an {@link Invoke} message with index of segmentation.
         *
         * @param invoke An invoke message requesting parallel process.
         * @param first Initial piece's index in a section.
         * @param last Final piece's index in a section. The ranged used is [<i>first</i>, <i>last</i>), which contains
         *			   all the pieces' indices between <i>first</i> and <i>last</i>, including the piece pointed by index
         *			   <i>first</i>, but not the piece pointed by the index <i>last</i>.
         *
         * @see {@link ParallelSystemArray.sendPieceData}
         */
        private send_piece_data(invoke, first, last);
        /**
         *
         *
         * @param xml
         *
         * @see {@link ParallelSystemArray.notify_end}
         */
        private report_invoke_history(xml);
    }
}
declare namespace samchon.protocol.distributed {
    abstract class DistributedSystem extends parallel.ParallelSystem {
    }
}
declare namespace samchon.protocol.external {
    /**
     * <p> An array and manager of {@link ExternalSystem external systems}. </p>
     *
     * <p> {@link ExternalSystemArray} is an abstract class contains and manages external system drivers,
     * {@link ExternalSystem} objects. You can specify this {@link ExternalSystemArray} to be a server accepting
     * {@link ExternalSystem external clients} or a client connecting to {@link IExternalServer external servers}. Even
     * both of them is also possible. </p>
     *
     * <ul>
     *	<li> A server accepting external clients: {@link IExternalClientArray} </li>
     *	<li> A client connecting to external servers: {@link IExternalServerArray} </li>
     *	<li>
     *		Accepts external clients & Connects to external servers at the same time:
     *		{@link IExternalServerClientArray}
     *	</li>
     * </ul>
     *
     * <p> <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		 style="max-width: 100%" />
     * </a> </p>
     *
     * <h4> Proxy Pattern </h4>
     * <p> The {@link ExternalSystemArray} class can use <i>Proxy Pattern</i>. In framework within user, which
     * {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is <i>which can be done</i>. </p>
     *
     * <p> By using the <i>logical proxy</i>, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}. </p>
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
     *	<li> Those strategy is called <i>Proxy Pattern</i>. </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ExternalSystemArray extends EntityArrayCollection<ExternalSystem> implements IProtocol {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @hidden
         */
        private handle_system_insert(event);
        /**
         * @hidden
         */
        private handle_system_erase(event);
        /**
         * @hidden
         */
        protected handle_system_close(system: ExternalSystem): void;
        /**
         * Test whether this system array has the role.
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
         * <p> Send an {@link Invoke} message. </p>
         *
         * @param invoke An {@link Invoke} message to send.
         */
        sendData(invoke: Invoke): void;
        /**
         * <p> Handle an {@Invoke} message have received. </p>
         *
         * @param invoke An {@link Invoke} message have received.
         */
        replyData(invoke: Invoke): void;
        /**
         * Tag name of the {@link ExternalSytemArray} in {@link XML}.
         *
         * @return <i>systemArray</i>.
         */
        TAG(): string;
        /**
         * Tag name of {@link ExternalSystem children elements} belonged to the {@link ExternalSytemArray} in {@link XML}.
         *
         * @return <i>system</i>.
         */
        CHILD_TAG(): string;
    }
}
declare namespace samchon.protocol.parallel {
    /**
     * <p> A manager containing {@link ParallelSystem} objects. </p>
     *
     *
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ParallelSystemArray extends external.ExternalSystemArray {
        /**
         * @see {@link ParallelSystem.progress_list}, {@link ParallelSystem.history_list}
         */
        private history_sequence;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         *
         * @param invoke An invoke message requesting parallel process.
         * @param size Number of pieces.
         */
        sendSegmentData(invoke: Invoke, size: number): void;
        /**
         *
         *
         * @param invoke An invoke message requesting parallel process.
         * @param first Initial piece's index in a section.
         * @param last Final piece's index in a section. The ranged used is [<i>first</i>, <i>last</i>), which contains
         *			   all the pieces' indices between <i>first</i> and <i>last</i>, including the piece pointed by index
         *			   <i>first</i>, but not the piece pointed by the index <i>last</i>.
         */
        sendPieceData(invoke: Invoke, first: number, last: number): void;
        /**
         *
         * @param history
         *
         * @return Whether the processes with same uid are all fininsed.
         *
         * @see {@link ParallelSystem.report_invoke_history}, {@link normalize_performance}
         */
        protected notify_end(history: PRInvokeHistory): boolean;
        /**
         * @see {@link ParallelSystem.performance}
         */
        private normalize_performance();
    }
}
declare namespace samchon.protocol.distributed {
    abstract class DistributedSystemArray extends parallel.ParallelSystemArray {
        protected roles: std.HashMap<string, DistributedSystemRole>;
    }
}
declare namespace samchon.protocol.external {
    /**
     * <p> A role of an external system. </p>
     *
     * <p> The {@link ExternalSystemRole} class represents a role, <i>what to do</i> in an {@link ExternalSystem}.
     * Extends this class and writes some methods related to the role. </p>
     *
     * <p> <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		 style="max-width: 100%" />
     * </a> </p>
     *
     * <h4> Proxy Pattern </h4>
     * <p> The {@link ExternalSystemRole} class can be an <i>logical proxy</i>. In framework within user, which
     * {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is <i>which can be done</i>. </p>
     *
     * <p> By using the <i>logical proxy</i>, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}. </p>
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
     *	<li> Those strategy is called <i>Proxy Pattern</i>. </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ExternalSystemRole extends Entity implements IProtocol {
        /**
         * An {@link ExternalSystem external system} containing this {@link ExternalSystemRole role}.
         */
        private system;
        /**
         * <p> A name, represents and identifies this {@link ExternalSystemRole role}. </p>
         *
         * <p> This {@link name} is an identifier represents this {@link ExternalSystemRole role}. This {@link name} is
         * used in {@link ExternalSystemArray.getRole} and {@link ExternalSystem.get}, as a key elements. Thus, this
         * {@link name} should be unique in an {@link ExternalSystemArray}.
         */
        private name;
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
         * Get external system, this role is belonged to.
         */
        getSystem(): ExternalSystem;
        /**
         * Get name, who represents and identifies this role.
         */
        getName(): string;
        /**
         * Send an {@link Invoke} message to the external system via {@link system}.
         *
         * @param invoke An {@link Invoke} message to send to the external system.
         */
        sendData(invoke: Invoke): void;
        /**
         * <p> Handle replied {@link Invoke message} from the {@link system external system} belonged to. </p>
         *
         * <p> This {@link replyData replyData()} will call a member method named following {@link Invoke.listener}.
         * in the <i>invoke</i>. </p>
         *
         * @param invoke An {@link Invoke} message received from the {@link system external system}.
         */
        replyData(invoke: Invoke): void;
        /**
         * Tag name of the {@link ExternalSytemRole} in {@link XML}.
         *
         * @return <i>role</i>.
         */
        TAG(): string;
    }
}
declare namespace samchon.protocol.distributed {
    abstract class DistributedSystemRole extends external.ExternalSystemRole {
        private systems;
    }
}
declare namespace samchon.protocol.external {
    /**
     * <p> An interface for an {@link ExternalSystemArray} accepts {@link ExternalSystem external clients} as a
     * {@link IServer server}. </p>
     *
     * <p> The easiest way to defining an {@link ExternalSystemArray} who opens server and accepts
     * {@link ExternalSystem external clients} is to extending one of below, who are derived from this interface
     * {@link IExternalClientArray}. However, if you can't specify an {@link ExternalSystemArray} to be whether server or
     * client, then make a class (let's name it as <b>BaseSystemArray</b>) extending {@link ExternalSystemArray} and make
     * a new class (now, I name it <b>BaseClientArray</b>) extending <b>BaseSystemArray</b> and implementing this
     * interface {@link IExternalClientArray}. Define the <b>BaseClientArray</b> following those codes on below:
     *
     * <ul>
     *	<li> {@link ExternalClientArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/external/ExternalClientArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link ParallelClientArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/master/ParallelClientArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link DistributedClientArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/master/DistributedClientArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IExternalClientArray extends ExternalSystemArray, IServer {
    }
    /**
     * <p> An {@link ExternalSystemArray} acceepts {@link ExternalSystem external clients} as a {@link IServer server}. </p>
     *
     * <p> {@link ExternalServerArray} is an abstract class contains, manages and accepts external server drivers,
     * {@link IExternalServer} objects, as a {@link IServer server}. </p>
     *
     * <p> <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		 style="max-width: 100%" />
     * </a> </p>
     *
     * <h4> Proxy Pattern </h4>
     * <p> The {@link ExternalSystemArray} class can use <i>Proxy Pattern</i>. In framework within user, which
     * {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is <i>which can be done</i>. </p>
     *
     * <p> By using the <i>logical proxy</i>, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}. </p>
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
     *	<li> Those strategy is called <i>Proxy Pattern</i>. </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ExternalClientArray extends ExternalSystemArray implements IExternalClientArray {
        /**
         * A subrogator of {@link IServer server}'s role instead of this {@link ExternalClientArray}.
         */
        private server_base;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * <p> Factory method creating {@link IServerBase} object. </p>
         *
         * <p> This method {@link createServerBase createServerBase()} determines which protocol is used in this server,
         * {@link ExternalClientArray}. If the protocol is determined, then {@link ExternalSystem external clients} who
         * may connect to {@link ExternalClientArray this server} must follow the specified protocol. </p>
         *
         * <p> Creates and returns one of them: </p>
         * <ul>
         *	<li> {@link ServerBase} </li>
         *	<li> {@link WebServerBase} </li>
         *	<li> {@link SharedWorkerServerBase} </li>
         * </ul>
         *
         * @return A new {@link IServerBase} object.
         */
        protected abstract createServerBase(): IServerBase;
        addClient(driver: IClientDriver): void;
        /**
         * This method is deprecated. Don't use and override this.
         *
         * @return null.
         */
        protected createChild(xml: library.XML): ExternalSystem;
        /**
         * Factory method creating {@link ExternalSystem} object.
         *
         * @param driver A communicator with connected client.
         * @return A newly created {@link ExternalSystem} object.
         */
        protected abstract createExternalClient(driver: IClientDriver): ExternalSystem;
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
declare namespace samchon.protocol.external {
    /**
     * <p> An interface for an external server driver. </p>
     *
     * <p> The easiest way to defining an external server driver is to extending one of below, who are derived from this
     * interface {@link IExternalServer}. However, if you've to interact with an external system who can be both server
     * and client, then make a class (let's name it as <b>BaseSystem</b>) extending {@link ExternalSystem} and make a
     * new class (now, I name it <b>BaseServer</b>) extending <b>BaseSystem</b> and implementing this interface
     * {@link IExternalServer}. Define the <b>BaseServer</b> following those codes on below:
     *
     * <ul>
     *	<li> {@link ExternalServer}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/external/ExternalServer.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link ParallelServer}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/master/DistributedServer.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link DistributedServer}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/master/ParallelServer.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IExternalServer extends ExternalSystem {
        /**
         * Connect to the external system.
         */
        connect(): void;
        /**
         * Get ip address.
         */
        getIP(): string;
        /**
         * Get port number.
         */
        getPort(): number;
    }
    /**
     * <p> An external server driver. </p>
     *
     * <p> The {@link ExternalServer} class represents an external server, connected and interact with this system.
     * {@link ExternalServer} takes full charge of network communication with external server have connected.
     * Replied {@link Invoke messages} from the external system is shifted to and processed in, children elements of this
     * class, {@link ExternalSystemRole} objects. </p>
     *
     * <p> <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		 style="max-width: 100%" />
     * </a> </p>
     *
     * <h4> Bridge & Proxy Pattern </h4>
     * <p> The {@link ExternalSystem} class can be a <i>bridge</i> for <i>logical proxy</i>. In framework within user,
     * which {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is <i>which can be done</i>. </p>
     *
     * <p> By using the <i>logical proxy</i>, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}. </p>
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
     *	<li> Those strategy is called <i>Bridge Pattern</i> and <i>Proxy Pattern</i>. </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
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
         * Default Constructor.
         */
        constructor();
        /**
         * Factory method creating server connector.
         */
        protected abstract createServerConnector(): IServerConnector;
        /**
         * @inheritdoc
         */
        connect(): void;
        /**
         * @inheritdoc
         */
        getIP(): string;
        /**
         * @inheritdoc
         */
        getPort(): number;
    }
}
declare namespace samchon.protocol.external {
    /**
     * <p> An interface for an {@link ExternalSystemArray} connects to {@link IExternalServer external servers} as a
     * <b>client</b>. </p>
     *
     * <p> The easiest way to defining an {@link ExternalSystemArray} who connects to
     * {@link IExternalServer external servers} is to extending one of below, who are derived from this interface
     * {@link IExternalServerArray}. However, if you can't specify an {@link ExternalSystemArray} to be whether server or
     * client, then make a class (let's name it as <b>BaseSystemArray</b>) extending {@link ExternalSystemArray} and make
     * a new class (now, I name it <b>BaseServerArray</b>) extending <b>BaseSystemArray</b> and implementing this
     * interface {@link IExternalServerArray}. Define the <b>BaseServerArray</b> following those codes on below:
     *
     * <ul>
     *	<li> {@link ExternalServerArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/external/ExternalServerArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link ParallelServerArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/master/ParallelServerArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link DistributedServerArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/master/DistributedServerArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IExternalServerArray extends ExternalSystemArray {
        /**
         * <p> Connect to {@link IExternalServer external servers}. </p>
         *
         * <p> This method calls children elements' method {@link IExternalServer.connect} gradually. </p>
         */
        connect(): void;
    }
    /**
     * <p> An {@link ExternalSystemArray} connecting to {@link IExternalServer external servers} as a <b>client</b>. </p>
     *
     * <p> {@link ExternalServerArray} is an abstract class contains, manages and connects to external server drivers,
     * {@link IExternalServer} objects, as a <b>client</b>. </p>
     *
     * <p> <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		 style="max-width: 100%" />
     * </a> </p>
     *
     * <h4> Proxy Pattern </h4>
     * <p> The {@link ExternalSystemArray} class can use <i>Proxy Pattern</i>. In framework within user, which
     * {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is <i>which can be done</i>. </p>
     *
     * <p> By using the <i>logical proxy</i>, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}. </p>
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
     *	<li> Those strategy is called <i>Proxy Pattern</i>. </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ExternalServerArray extends ExternalSystemArray {
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
declare namespace samchon.protocol.external {
    /**
     * <p> An interface for an {@link ExternalSystemArray} accepts {@link ExternalSystem external clients} as a
     * {@link IServer server} and connects to {@link IExternalServer} as <b>client</b>, at the same time. </p>
     *
     * <p> The easiest way to defining an {@link IExternalServerClientArray} who opens server, accepts
     * {@link ExternalSystem external clients} and connects to {@link IExternalServer external servers} is to extending
     * one of below, who are derived from this interface {@link IExternalServerClientArray}. However, if you can't
     * specify an {@link ExternalSystemArray} to be whether server or client or even can both them, then make a class
     * (let's name it as <b>BaseSystemArray</b>) extending {@link ExternalSystemArray} and make a new class (now, I name
     * it <b>BaseServerClientArray</b>) extending <b>BaseSystemArray</b> and implementing this interface
     * {@link IExternalServerClientArray}. Define the <b>BaseServerClientArray</b> following those codes on below:
     *
     * <ul>
     *	<li> {@link ExternalServerClientArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/external/ExternalServerClientArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link ParallelServerClientArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/master/ParallelServerClientArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     *	<li> {@link DistributedServerClientArray}:
     *		<a href="https://github.com/samchon/framework/blob/master/ts/src/samchon/protocol/master/DistributedServerClientArray.ts"
     *		   target="_blank"> View source code on GitHub </a>
     *	</li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface IExternalServerClientArray extends IExternalServerArray, IExternalClientArray {
    }
    /**
     * <p> An {@link ExternalSystemArray} connecting to {@link IExternalServer external servers} as a <b>client</b> and
     * accepts {@link ExternalSystem external clients} as a {@link IServer server}. </p>
     *
     * <p> {@link ExternalServerArray} is an abstract class contains, manages and connects to external server drivers,
     * {@link IExternalServer} objects and accepts external client drivers {@link ExternalSyste} obejcts as a
     * <b>client</b> and a {@link IServer server} at the same time. </p>
     *
     * <p> <a href="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		  target="_blank">
     *	<img src="http://samchon.github.io/framework/images/design/ts_class_diagram/protocol_external_system.png"
     *		 style="max-width: 100%" />
     * </a> </p>
     *
     * <h4> Proxy Pattern </h4>
     * <p> The {@link ExternalSystemArray} class can use <i>Proxy Pattern</i>. In framework within user, which
     * {@link ExternalSystem external system} is connected with {@link ExternalSystemArray this system}, it's not
     * important. Only interested in user's perspective is <i>which can be done</i>. </p>
     *
     * <p> By using the <i>logical proxy</i>, user dont't need to know which {@link ExternalSystemRole role} is belonged
     * to which {@link ExternalSystem system}. Just access to a role directly from {@link ExternalSystemArray.getRole}.
     * Sends and receives {@link Invoke} message via the {@link ExternalSystemRole role}. </p>
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
     *	<li> Those strategy is called <i>Proxy Pattern</i>. </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class ExternalServerClientArray extends ExternalClientArray implements IExternalServerClientArray {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * <p> Factory method of a child Entity. </p>
         *
         * <p> This method is migrated to {@link createExternalServer createExternalServer()}. Override the
         * {@link createExternalServer createExternalServer()}. </p>
         *
         * @param xml An {@link XML} object represents child element, so that can identify the type of child to create.
         *
         * @return A new child Entity via {@link createExternalServer createExternalServer()}.
         */
        protected createChild(xml: library.XML): ExternalSystem;
        /**
         * Factory method creating an {@link IExternalServer} object.
         *
         * @param xml An {@link XML} object represents child element, so that can identify the type of child to create.
         *
         * @return A newly created {@link IExternalServer} object.
         */
        protected abstract createExternalServer(xml: library.XML): IExternalServer;
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.protocol.slave {
    abstract class SlaveSystem extends external.ExternalSystem {
        /**
         * Default Constructor.
         */
        constructor();
        replyData(invoke: Invoke): void;
    }
}
declare namespace samchon.protocol.external {
    abstract class MediatorSystem extends slave.SlaveSystem {
        private system_array;
        private progress_list;
        constructor(systemArray: ExternalSystemArray);
        abstract start(): void;
        /**
         * @hidden
         */
        protected createChild(xml: library.XML): ExternalSystemRole;
        private notify_end(uid);
        replyData(invoke: protocol.Invoke): void;
    }
}
declare namespace samchon.protocol.external {
    class MediatorServer extends MediatorSystem implements IServer {
        private server_base;
        private port;
        constructor(systemArray: ExternalSystemArray, port: number);
        protected createServerBase(): IServerBase;
        addClient(driver: IClientDriver): void;
        start(): void;
        open(port: number): void;
        close(): void;
    }
    class MediatorWebServer extends MediatorServer {
        protected createServerBase(): IServerBase;
    }
    class MediatorSharedWorkerServer extends MediatorServer {
        protected createServerBase(): IServerBase;
    }
}
declare namespace samchon.protocol.external {
    class MediatorClient extends MediatorSystem implements IExternalServer {
        protected ip: string;
        protected port: number;
        constructor(systemArray: ExternalSystemArray, ip: string, port: number);
        protected createServerConnector(): IServerConnector;
        getIP(): string;
        getPort(): number;
        start(): void;
        connect(): void;
    }
    class MediatorWebClient extends MediatorClient {
        /**
         * @inheritdoc
         */
        protected createServerConnector(): IServerConnector;
    }
    class MediatorSharedWorkerClient extends MediatorClient {
        /**
         * @inheritdoc
         */
        protected createServerConnector(): IServerConnector;
    }
}
declare namespace samchon.protocol.parallel {
    class PRInvokeHistory extends InvokeHistory {
        /**
         * Index number of initial piece.
         */
        private first;
        /**
         * Index number of final piece.
         */
        private last;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from an Invoke message.
         *
         * @param invoke
         */
        constructor(invoke: Invoke);
        getFirst(): number;
        getLast(): number;
        /**
         * Compute number of allocated pieces.
         */
        computeSize(): number;
    }
}
declare namespace samchon.protocol.parallel {
    abstract class ParallelClientArray extends ParallelSystemArray implements external.IExternalClientArray {
        /**
         * A subrogator of {@link IServer server}'s role instead of this {@link ExternalClientArray}.
         */
        private server_base;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * <p> Factory method creating {@link IServerBase} object. </p>
         *
         * <p> This method {@link createServerBase createServerBase()} determines which protocol is used in this server,
         * {@link ExternalClientArray}. If the protocol is determined, then {@link ExternalSystem external clients} who
         * may connect to {@link ExternalClientArray this server} must follow the specified protocol. </p>
         *
         * <p> Creates and returns one of them: </p>
         * <ul>
         *	<li> {@link ServerBase} </li>
         *	<li> {@link WebServerBase} </li>
         *	<li> {@link SharedWorkerServerBase} </li>
         * </ul>
         *
         * @return A new {@link IServerBase} object.
         */
        protected abstract createServerBase(): IServerBase;
        addClient(driver: IClientDriver): void;
        protected createChild(xml: library.XML): ParallelSystem;
        protected abstract createExternalClient(driver: IClientDriver): ParallelSystem;
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
declare namespace samchon.protocol.parallel {
    abstract class ParallelSystemArrayMediator extends ParallelSystemArray {
        protected mediator: external.MediatorSystem;
        /**
         * Default Constructor.
         */
        constructor();
        protected abstract createMediator(): external.MediatorSystem;
        protected start_mediator(): void;
        sendData(invoke: protocol.Invoke): void;
        sendPieceData(invoke: protocol.Invoke, first: number, last: number): void;
        protected notify_end(history: PRInvokeHistory): boolean;
    }
}
declare namespace samchon.protocol.parallel {
    abstract class ParallelClientArrayMediator extends ParallelSystemArrayMediator implements external.IExternalClientArray {
        /**
         * A subrogator of {@link IServer server}'s role instead of this {@link ExternalClientArray}.
         */
        private server_base;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * <p> Factory method creating {@link IServerBase} object. </p>
         *
         * <p> This method {@link createServerBase createServerBase()} determines which protocol is used in this server,
         * {@link ExternalClientArray}. If the protocol is determined, then {@link ExternalSystem external clients} who
         * may connect to {@link ExternalClientArray this server} must follow the specified protocol. </p>
         *
         * <p> Creates and returns one of them: </p>
         * <ul>
         *	<li> {@link ServerBase} </li>
         *	<li> {@link WebServerBase} </li>
         *	<li> {@link SharedWorkerServerBase} </li>
         * </ul>
         *
         * @return A new {@link IServerBase} object.
         */
        protected abstract createServerBase(): IServerBase;
        addClient(driver: IClientDriver): void;
        protected createChild(xml: library.XML): ParallelSystem;
        protected abstract createExternalClient(driver: IClientDriver): ParallelSystem;
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
declare namespace samchon.protocol.parallel {
    interface IParallelServer extends ParallelSystem, external.IExternalServer {
    }
    abstract class ParallelServer extends ParallelSystem implements IParallelServer {
        protected ip: string;
        protected port: number;
        constructor(systemArray: ParallelSystemArray);
        protected abstract createServerConnector(): IServerConnector;
        connect(): void;
        getIP(): string;
        getPort(): number;
    }
}
declare namespace samchon.protocol.parallel {
    abstract class ParallelServerArray extends ParallelSystemArray implements external.IExternalServerArray {
        constructor();
        connect(): void;
    }
}
declare namespace samchon.protocol.parallel {
    abstract class ParallelServerArrayMediator extends ParallelSystemArrayMediator implements external.IExternalServerArray {
        constructor();
        connect(): void;
    }
}
declare namespace samchon.protocol.parallel {
    abstract class ParallelServerClientArray extends ParallelClientArray implements external.IExternalServerClientArray {
        /**
         * Default Constructor.
         */
        constructor();
        protected createChild(xml: library.XML): ParallelSystem;
        protected abstract createExternalServer(xml: library.XML): IParallelServer;
        connect(): void;
    }
}
declare namespace samchon.protocol.parallel {
    abstract class ParallelServerClientArrayMediator extends ParallelClientArrayMediator implements external.IExternalServerClientArray {
        /**
         * Default Constructor.
         */
        constructor();
        protected createChild(xml: library.XML): ParallelSystem;
        protected abstract createExternalServer(xml: library.XML): IParallelServer;
        /**
         * @inheritdoc
         */
        connect(): void;
    }
}
declare namespace samchon.protocol.service {
    abstract class Client implements protocol.IProtocol {
        private user;
        private service;
        private driver;
        private no;
        /**
         * Construct from an User and WebClientDriver.
         */
        constructor(user: User, driver: WebClientDriver);
        protected abstract createService(path: string): Service;
        close(): void;
        getUser(): User;
        getService(): Service;
        sendData(invoke: protocol.Invoke): void;
        replyData(invoke: protocol.Invoke): void;
        protected changeService(path: string): void;
    }
}
declare namespace samchon.protocol.service {
    abstract class Server extends protocol.WebServer implements IProtocol {
        private session_map;
        private account_map;
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
        has(account: string): boolean;
        get(account: string): User;
        sendData(invoke: protocol.Invoke): void;
        replyData(invoke: protocol.Invoke): void;
        addClient(driver: WebClientDriver): void;
        private erase_user(user);
    }
}
declare namespace samchon.protocol.service {
    abstract class Service implements protocol.IProtocol {
        private client;
        private path;
        /**
         * Default Constructor.
         */
        constructor(client: Client, path: string);
        destructor(): void;
        /**
         * Get client.
         */
        getClient(): Client;
        /**
         * Get path.
         */
        getPath(): string;
        sendData(invoke: protocol.Invoke): void;
        replyData(invoke: protocol.Invoke): void;
    }
}
declare namespace samchon.protocol.service {
    abstract class User extends collection.HashMapCollection<number, Client> implements protocol.IProtocol {
        private server;
        private session_id;
        private sequence;
        private account_id;
        private authority;
        /**
         * Construct from a Server.
         */
        constructor(server: Server);
        protected abstract createClient(driver: WebClientDriver): Client;
        private handle_erase_client(event);
        getServer(): Server;
        getAccountID(): string;
        getAuthority(): number;
        setAccount(id: string, authority: number): void;
        sendData(invoke: protocol.Invoke): void;
        replyData(invoke: protocol.Invoke): void;
    }
}
declare namespace samchon.protocol.slave {
    abstract class SlaveClient extends SlaveSystem {
        constructor();
        protected abstract createServerConnector(): IServerConnector;
        connect(ip: string, port: number): void;
    }
}
declare namespace samchon.protocol.slave {
    abstract class SlaveServer extends SlaveSystem implements IServer {
        private server_base;
        constructor();
        protected abstract createServerBase(): IServerBase;
        addClient(driver: IClientDriver): void;
        open(port: number): void;
        close(): void;
    }
}
