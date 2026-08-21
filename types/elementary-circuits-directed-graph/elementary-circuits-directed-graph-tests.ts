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

const graph = [];
graph[0] = [1];
graph[1] = [2];
// graph[2] is undefined
graph[3] = [4];
graph[4] = [0];

// $ExpectType number[][];
findCircuits(graph);
