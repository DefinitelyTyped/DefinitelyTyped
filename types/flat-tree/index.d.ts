/**
 * @returns an array index for the tree element at the given depth and offset.
 */
export function index(depth: number, offset: number): number;

/**
 * @returns the index of the parent element in tree.
 */
export function parent(index: number, depth?: number): number;

/**
 * @returns the index of this elements sibling.
 */
export function sibling(index: number, depth?: number): number;

/**
 * @returns an array [leftChild, rightChild] with the indexes of this elements children or
 *          null if this element does not have any children.
 */
export function children(index: number, depth?: number): [number, number] | null;

/**
 * @returns the range (inclusive) the tree root at index spans.
 *          For example tree.spans(3) would return [0, 6] (see the usage example).
 */
export function spans(index: number, depth?: number): number;

/**
 * @returns the left spanning in index in the tree index spans.
 */
export function leftSpan(index: number, depth?: number): number;

/**
 * @returns the right spanning in index in the tree index spans.
 */
export function rightSpan(index: number, depth?: number): number;

/**
 * @returns how many nodes (including parent nodes) a tree contains.
 */
export function count(index: number, depth?: number): number;

/**
 * @returns how many nodes (excluding parent nodes) a tree contains.
 */
export function countLeaves(index: number): number;

/**
 * @returns a list of all the full roots (subtrees where all nodes have either 2 or 0 children) < index.
 *          For example fullRoots(8) returns [3] since the subtree rooted at 3 spans 0 -> 6 and the tree
 *          rooted at 7 has a child located at 9 which is >= 8.
 */
export function fullRoots(index: number, result?: number[]): number[];

export interface FlatTreeIterator {
    index: number;
    offset: number;
    factor: number;

    /**
     * Move the iterator the this specific tree index.
     */
    seek(index: number): void;

    /**
     * Move the iterator to the current parent index.
     *
     * @returns the new .index
     */
    parent(): number;

    /**
     * Move the iterator to the current left child index.
     *
     * @returns the new .index
     */
    leftChild(): number;

    /**
     * Move the iterator to the current right child index.
     *
     * @returns the new .index
     */
    rightChild(): number;

    /**
     * Move the iterator to the current left span index.
     *
     * @returns the new .index
     */
    leftSpan(): number;

    /**
     * Move the iterator to the current right span index.
     *
     * @returns the new .index
     */
    rightSpan(): number;

    /**
     * @returns true if the iterator at a left sibling
     */
    isLeft(): boolean;

    /**
     * @returns true if the iterator at a right sibling
     */
    isRight(): boolean;

    /**
     * Move the iterator to the current sibling.
     *
     * @returns the new .index
     */
    sibling(): number;

    /**
     * @returns how many nodes (including parent nodes) the current tree contains.
     */
    count(): number;

    /**
     * @returns how many nodes (excluding parent nodes) the current tree contains.
     */
    countLeaves(): number;

    /**
     * @returns true if the given index is within the tree.
     */
    contains(index: number): boolean;

    /**
     * Move the iterator to the previous node.
     *
     * @returns the new .index
     */
    prev(): number;

    /**
     * Move the iterator the next node.
     *
     * @returns the new .index
     */
    next(): number;

    /**
     * Move the iterator to the next tree.
     *
     * @returns the new .index
     */
    nextTree(): number;

    /**
     * Move the iterator to the previous tree.
     *
     * @returns the new .index
     */
    prevTree(): number;

    /**
     * @returns true if the node at the index is a full root
     */
    fullRoot(index: number): boolean;
}

/**
 * Create a stateful tree iterator starting at a given index. The iterator exposes the following methods.
 */
export function iterator(index: number): FlatTreeIterator;

/**
 * @returns depth at the given node index.
 */
export function depth(index: number): number;

/**
 * @returns the child ot the left of the given index.
 */
export function leftChild(index: number, depth?: number): number;

/**
 * @returns the child to the right of the given index.
 */
export function rightChild(index: number, depth?: number): number;

/**
 * @returns the offset of the given index.
 */
export function offset(index: number, depth?: number): number;
