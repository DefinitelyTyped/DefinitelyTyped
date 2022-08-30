import Graph from "node-dijkstra";

// $ExpectType Graph
const graph = new Graph();
// $ExpectType Graph
const graph2 = new Graph({A: {B: 1}});

// $ExpectType Graph
graph
    .addNode('A', {B: 1})
    .removeNode('C');

// $ExpectType string[] | PathResult
graph2.path('A', 'B');
// $ExpectType string[] | PathResult
graph.path('A', 'B', {cost: false, reverse: true});
// $ExpectType string[] | PathResult
graph.path('A', 'B', {cost: true});
