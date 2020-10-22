import Graph = require('node-dijkstra');

const graph = new Graph();
const graph2 = new Graph([{A: {B: 1}}]);

graph
    .addNode('A', {B: 1})
    .removeNode('C');

graph2.path('A', 'B');
graph.path('A', 'B', {cost: false, reverse: true});
graph.path('A', 'B', {cost: true});
