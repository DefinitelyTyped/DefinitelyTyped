// Type definitions for D3JS d3-quadtree module 1.0.0
// Project: https://github.com/d3/d3-quadtree/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Leaf node of the quadtree.
 */
export interface QuadtreeLeaf<T> {
    data: T;
    next?: QuadtreeLeaf<T>;
}
/**
 * Internal nodes of the quadtree are represented as four-element arrays in left-to-right, top-to-bottom order:
 *
 * 0 - the top-left quadrant, if any.
 * 1 - the top-right quadrant, if any.
 * 2 - the bottom-left quadrant, if any.
 * 3 - the bottom-right quadrant, if any.
 *
 * A child quadrant may be undefined if it is empty.
 */
export interface QuadtreeInternalNode<T> extends Array<QuadtreeInternalNode<T> | QuadtreeLeaf<T> | undefined> {}

export interface Quadtree<T> {
    x(): (d: T) => number;
    x(x: (d: T) => number): Quadtree<T>;
    y(): (d: T) => number;
    y(y: (d: T) => number): Quadtree<T>;
    extent(): [[number, number], [number, number]] | undefined;
    extent(extend: [[number, number], [number, number]]): Quadtree<T>;
    cover(x: number, y: number): Quadtree<T>;
    add(datum: T): Quadtree<T>;
    addAll(data: Array<T>): Quadtree<T>;
    remove(datum: T): Quadtree<T>;
    removeAll(data: Array<T>): Quadtree<T>;
    copy(): Quadtree<T>;
    root(): QuadtreeInternalNode<T> | QuadtreeLeaf<T>;
    data(): Array<T>;
    size(): number;
    find(x: number, y: number, radius?: number): T | undefined;
    visit(callback: (node: QuadtreeInternalNode<T> | QuadtreeLeaf<T>, x0: number, y0: number, x1: number, y1: number) => (void | boolean)): Quadtree<T>;
    visitAfter(callback: (node: QuadtreeInternalNode<T> | QuadtreeLeaf<T>, x0: number, y0: number, x1: number, y1: number) => void): Quadtree<T>;
}


export function quadtree(): Quadtree<[number, number]>;
export function quadtree(data: Array<[number, number]>): Quadtree<[number, number]>;
export function quadtree<T>(): Quadtree<T>;
export function quadtree<T>(data: Array<T>, x?: (d: T) => number, y?: (d: T) => number): Quadtree<T>;
