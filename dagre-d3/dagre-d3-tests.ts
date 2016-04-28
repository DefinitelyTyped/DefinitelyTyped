/// <reference path="dagre-d3.d.ts"/>
namespace DagreD3Tests {
    let gDagre = new dagreD3.graphlib.Graph();
    let graph = gDagre.graph();

    // has graph methods from dagre.d.ts
    graph.setNode("a", {});
    let num: number = 251 + graph.height + graph.width;
    let predecessors: { [vertex: string]: string[] } = {};
    let successors: { [vertex: string]: string[] } = {};

    predecessors["a"] = graph.predecessors("a");
    successors["a"] = graph.successors("a");

    let render = new dagreD3.render();
    let svg = d3.select("svg");
    render(svg, graph);
}
