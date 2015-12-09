/// <reference path="dagre-d3.d.ts"/>
module DagreD3Tests {
    var gDagre = new dagreD3.graphlib.Graph();
    var graph = gDagre.graph();

    // has graph methods from dagre.d.ts
    graph.setNode("a", {});
    var num: number = 251 + graph.height + graph.width;
    var predecessors: { [vertex:string]: string[] } = {};
    var successors: { [vertex:string]: string[] } = {};

    predecessors["a"] = graph.predecessors("a");
    successors["a"] = graph.successors("a");

    var render = new dagreD3.render();
    var svg = d3.select("svg");
    render(svg, graph);
}

