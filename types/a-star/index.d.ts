export = aStar;

declare function aStar<T>(options: aStar.Options<T>): aStar.Result<T>;

declare namespace aStar {
    interface Options<T> {
        /** The start node */
        start: T;
        /** Returns whether a node is an acceptable end. */
        isEnd: (node: T) => boolean;
        /** Returns an array of neighbors for a node. */
        neighbor: (node: T) => T[];
        /** Returns the distance between two nodes. */
        distance: (from: T, to: T) => number;
        /**
         * Returns a heuristic guess of the cost from `node` to an end. This
         * function must be [*admissible*](https://en.wikipedia.org/wiki/Admissible_heuristic),
         * meaning it must never overestimate the actual cost to get to an end node.
         *
         * If the heuristic function also satisfies `h(x) <= d(x, y) + h(y)` for
         * every edge `x, y` of the graph, then the function is considered
         * [*consistent*](https://en.wikipedia.org/wiki/Consistent_heuristic).
         * Equivalently, for every node `x` and successor `y` of `x`, the estimated
         * cost of reaching the goal from `x` must be no greater than the step cost
         * of getting to `y` plus the estimated cost of reaching the goal from `y`.
         * This is also equivalent to the triangle inequality.
         *
         * With a consistent heuristic, A* is guaranteed to find an optimal path
         * without processing any node more than once. */
        heuristic: (node: T) => number;
        /** Returns a unique string for a node (defaults to `node.toString()`). */
        hash?: ((node: T) => string) | undefined;
        /** Limit the number of milliseconds to search before aborting. */
        timeout?: number | undefined;
    }

    interface Result<T> {
        status: "success" | "noPath" | "timeout";
        path: T[];
        cost: number;
    }
}
