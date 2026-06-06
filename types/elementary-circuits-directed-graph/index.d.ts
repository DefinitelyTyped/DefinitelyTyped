/**
 * Takes an adjacencyList and returns the circuits found therein.
 */
declare function findCircuits(adjacencyList: ReadonlyArray<readonly number[] | undefined>): number[][];

/**
 * Takes an adjacencyList and a function which will be called for each circuit found therein. Doesn't return anything.
 */
declare function findCircuits(
    adjacencyList: ReadonlyArray<readonly number[] | undefined>,
    cb: (circuit: number[]) => void,
): void;

export = findCircuits;
