declare class PriorityQueue<T> {
    /**
     * Compares two Number or String objects.
     */
    static DEFAULT_COMPARATOR: PriorityQueue.Comparator<number | string>;

    /**
     * Initializes a new empty PriorityQueue wich uses .DEFAULT_COMPARATOR() as the comparator function for its elements.
     */
    constructor();

    /**
     * Initializes a new empty PriorityQueue with uses the given comparator(a, b) function as the comparator for its elements.
     * The comparator function must return a positive number when a > b, 0 when a == b and a negative number when a < b.
     */
    constructor(comparator: PriorityQueue.Comparator<T>);

    /**
     * Dequeues the top element of the priority queue.
     * Throws an Error when the queue is empty.
     */
    deq(): T;

    /**
     * Enqueues the element at the priority queue and returns its new size.
     * @param element The element to add
     */
    enq(element: T): number;

    /**
     * Executes fn on each element.
     * Just be careful to not modify the priorities, since the queue won't reorder itself.
     * @param fn The value to pass to an Array.forEach call
     */
    forEach(fn: (value: T, index: number, array: T[]) => void): void;

    /**
     * Returns whether the priority queue is empty or not.
     */
    isEmpty(): boolean;

    /**
     * Peeks at the top element of the priority queue.
     * Throws an Error when the queue is empty.
     */
    peek(): T;

    /**
     * Returns the size of the priority queue.
     */
    size(): number;
}

declare namespace PriorityQueue {
    export interface Comparator<T> {
        (a: T, b: T): number;
    }
}

export = PriorityQueue;
