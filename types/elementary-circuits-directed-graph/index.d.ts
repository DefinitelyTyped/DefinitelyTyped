// Type definitions for elementary-circuits-directed-graph 1.2
// Project: https://github.com/antoinerg/elementary-circuits-directed-graph#readme
// Definitions by: Michon van Dooren <https://github.com/maienm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Takes an adjacencyList and returns the circuits found therein.
 */
declare function findCircuits(adjacencyList: ReadonlyArray<ReadonlyArray<number>>): number[][];

/**
 * Takes an adjacencyList and a function which will be called for each circuit found therein. Doesn't return anything.
 */
declare function findCircuits(adjacencyList: ReadonlyArray<ReadonlyArray<number>>, cb: (circuit: number[]) => void): void;

export = findCircuits;
