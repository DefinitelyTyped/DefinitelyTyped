export const DROP: number;
export default class PriorityQueue<T> {
    constructor(priorityFunction: (p0: T) => number, keyFunction: (p0: T) => string);
    /**
     * FIXME empty description for jsdoc
     */
    clear(): void;
    /**
     * Remove and return the highest-priority element. O(log N).
     */
    dequeue(): T;
    /**
     * Enqueue an element. O(log N).
     */
    enqueue(element: T): boolean;
    getCount(): number;
    isEmpty(): boolean;
    isKeyQueued(key: string): boolean;
    isQueued(element: T): boolean;
    /**
     * FIXME empty description for jsdoc
     */
    reprioritize(): void;
}
