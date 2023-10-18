interface Deque<Item> {
    /**
     * Amount of items currently in the queue.
     */
    readonly length: number;

    /**
     * Push items to the back of this queue.
     * Returns the amount of items currently in the queue after the operation.
     *
     * **Aliases**: `enqueue`, `insertBack`
     */
    push(...items: Item[]): number;

    /** @see Deque#push */
    enqueue(...items: Item[]): number;

    /** @see Deque#push */
    insertBack(...items: Item[]): number;

    /**
     * Unshift items to the front of this queue.
     * Returns the amount of items currently in the queue after the operation.
     *
     * **Ailases**: `insertFront`
     */
    unshift(...items: Item[]): number;

    /** @see Deque#unshift */
    insertFront(...items: Item[]): number;

    /**
     * Pop off the item at the back of this queue.
     *
     * Note: The item will be removed from the queue.
     * If you simply want to see what's at the back of the queue use `peekBack()` or `.get(-1)`.
     *
     * If the queue is empty, `undefined` is returned.
     * If you need to differentiate between `undefined` values in the queue and `pop()` return value - check the queue `.length` before popping.
     *
     * **Aliases**: `removeBack`
     */
    pop(): Item | undefined;

    /** @see Deque#pop */
    removeBack(): Item | undefined;

    /**
     * Shifts off the item at the front of this queue.
     *
     * Note: The item will be removed from the queue.
     * If you simply want to see what's at the front of the queue use `peekFront()` or `.get(0)`.
     *
     * If the queue is empty, `undefined` is returned.
     * If you need to differentiate between `undefined` values in the queue and `shift()` return value - check the queue `.length` before shifting.
     *
     * **Aliases**: `removeFront`, `dequeue`
     */
    shift(): Item | undefined;

    /** @see Deque#shift */
    removeFront(): Item | undefined;

    /** @see Deque#shift */
    dequeue(): Item | undefined;

    /**
     * Returns the items in the queue as an array.
     * Starting from the item in the front of the queue and ending to the item at the back of the queue.
     *
     * **Aliases**: `toJSON`
     */
    toArray(): Item[];

    /** @see Deque#toArray */
    toJSON(): Item[];

    /**
     * Returns the item that is at the back of this queue without removing it.
     * If the queue is empty, `undefined` is returned.
     */
    peekBack(): Item | undefined;

    /**
     * Returns the item that is at the front of this queue without removing it.
     * If the queue is empty, `undefined` is returned.
     */
    peekFront(): Item | undefined;

    /**
     * Returns the item that is at the given `index` of this queue without removing it.
     *
     * The index is zero-based, so `.get(0)` will return the item that is at the front, `.get(1)` will return the item that comes after and so on.
     *
     * The index can be negative to read items at the back of the queue.
     * `.get(-1)` returns the item that is at the back of the queue, `.get(-2)` will return the item that comes before and so on.
     *
     * Returns `undefined` if `index` is not a valid index into the queue.
     *
     * **Note**: Even though indexed accessor (e.g. `queue[0]`) could *appear* to return a correct value *sometimes*, this is completely unreliable.
     * The numeric slots of the deque object are internally used as an optimization and have no meaningful order or meaning to outside.
     * Always use `.get()`.
     *
     * **Note**: The implementation has O(1) random access using `.get()`.
     */
    get(index: number): Item | undefined;

    /**
     * Return `true` if this queue is empty, `false` otherwise.
     */
    isEmpty(): boolean;

    /**
     * Remove all items from this queue. Does not change the queue's capacity.
     */
    clear(): void;
}

// tslint:disable:unified-signatures

declare const Deque: {
    prototype: Deque<any>;

    /**
     * Creates an empty double-ended queue with initial capacity of 16.
     * If you know the optimal size before-hand, use `new Deque(capacity: number)`.
     */
    new<Item>(): Deque<Item>; // eslint-disable-line @definitelytyped/no-unnecessary-generics

    /**
     * Creates a double-ended queue from `items`.
     */
    new<Item>(items: ReadonlyArray<Item>): Deque<Item>;

    /**
     * Creates an empty double-ended queue with the given capacity.
     * Capacity should be the maximum amount of items the queue will hold at a given time.
     * The reason to give an initial capacity is to avoid potentially expensive resizing operations at runtime.
     */
    new<Item>(capacity: number): Deque<Item>; // eslint-disable-line @definitelytyped/no-unnecessary-generics
};

// tslint:enable:unified-signatures

export = Deque;
