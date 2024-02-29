/**
 * Takes an adjacencyList and returns the circuits found therein.
 */
declare function findCircuits(adjacencyList: ReadonlyArray<readonly number[]>): number[][];

/**
 * Takes an adjacencyList and a function which will be called for each circuit found therein. Doesn't return anything.
 */
declare function findCircuits(
    adjacencyList: ReadonlyArray<readonly number[]>,
    cb: (circuit: number[]) => void,
): void;

export = findCircuits;
