import findCircuits = require("elementary-circuits-directed-graph");

const adjacencyList = [
    [1, 2],
    [2, 3],
    [1],
    [0],
];

// $ExpectType number[][]
findCircuits(adjacencyList);

// $ExpectType void
findCircuits(adjacencyList, (circuit) => {
    circuit; // $ExpectType number[]
});
