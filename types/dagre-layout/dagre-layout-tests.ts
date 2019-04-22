import * as dagre from "dagre-layout";

const graph = new dagre.graphlib.Graph();
graph.setGraph({})
    .setDefaultEdgeLabel(() => ({}))
    .setNode("a", {})
    .setEdge("b", "c")
    .setEdge("c", "d", {class: "class"});

dagre.layout(graph);
