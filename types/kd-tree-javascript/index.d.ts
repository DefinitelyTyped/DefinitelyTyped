// Type definitions for kd-tree-javascript 1.0
// Project: https://github.com/ubilabs/kd-tree-javascript#readme
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class kdTree<T> {
    // Create a new tree from a list of points, a distance function, and a
    // list of dimensions.
    constructor(points: T[], distance: (a: T, b: T) => number, dimensions: Array<keyof T>);

    // Query the nearest *count* neighbors to a point, with an optional
    // maximal search distance.
    // Result is an array with *count* elements.
    // Each element is an array with two components: the searched point and
    // the distance to it.
    nearest(point: T, count: number, maxDistance?: number): Array<[T, number]>;

    // Insert a new point into the tree.  Must be consistent with previous
    // contents.
    insert(point: T): void;

    // Remove a point from the tree by reference.
    remove(point: T): void;

    // Get an approximation of how unbalanced the tree is.
    // The higher this number, the worse query performance will be.
    // It indicates how many times worse it is than the optimal tree.
    // Minimum is 1. Unreliable for small trees.
    balanceFactor(): number;
}
