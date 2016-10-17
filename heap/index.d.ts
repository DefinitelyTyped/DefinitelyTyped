// Type definitions for heap 0.2.6
// Project: https://github.com/qiao/heap.js
// Definitions by: Ryan McNamara <https://github.com/ryan10132>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Heap<T> {

    // Constructor

    constructor(cmp?: (a: T, b: T) => number);

    // Instance Methods

    // Push item onto heap.
    push(item: T): void;
    insert(item: T): void;

    // Pop the smallest item off the heap and return it.
    pop(): T;

    // Return the smallest item of the heap.
    peek(): T;
    top(): T;
    front(): T;

    // Pop and return the current smallest value, and add the new item.
    // This is more efficient than pop() followed by push(), and can be more appropriate when using a fixed size heap.
    // Note that the value returned may be larger than item!
    replace(item: T): T;

    // Fast version of a push followed by a pop.
    pushpop(item: T): T;

    // Rebuild the heap. This method may come handy when the priority of the internal data is being modified.
    heapify(): void;

    // Update the position of the given item in the heap. This function should be called every time the item is being modified.
    updateItem(item: T): void;

    // Determine whether the heap is empty.
    empty(): boolean;

    // Get the number of elements stored in the heap.
    size(): number;

    // Return the array representation of the heap. (note: the array is a shallow copy of the heap's internal nodes)
    toArray(): T[];

    // Return a clone of the heap. (note: the internal data is a shallow copy of the original one)
    clone(): Heap<T>
    copy(): Heap<T>

    // Static Methods

    // Push item onto array, maintaining the heap invariant.
    static push<T>(array: T[], item: T, cmp?: (a: T, b: T) => number): void;

    // Pop the smallest item off the array, maintaining the heap invariant.
    static pop<T>(array: T[], cmp?: (a: T, b: T) => number): T;

    // Pop and return the current smallest value, and add the new item.
    // This is more efficient than heappop() followed by heappush(), and can be more appropriate when using a fixed size heap. Note that the value returned may be larger than item!
    static replace<T>(array: T[], item: T, cmp?: (a: T, b: T) => number): T;

    // Fast version of a heappush followed by a heappop.
    static pushpop<T>(array: T[], item: T, cmp?: (a: T, b: T) => number): T;

    // Build the heap.
    static heapify<T>(array: T[], cmp?: (a: T, b: T) => number): Heap<T>;

    // Update the position of the given item in the heap. This function should be called every time the item is being modified.
    static updateItem<T>(array: T[], item: T, cmp?: (a: T, b: T) => number): void;

    // Find the n largest elements in a dataset.
    static nlargest<T>(array: T[], n: number, cmp?: (a: T, b: T) => number): T[];

    // Find the n smallest elements in a dataset.
    static nsmallest<T>(array: T[], n: number, cmp?: (a: T, b: T) => number): T[];

}

export = Heap;
export as namespace Heap;
