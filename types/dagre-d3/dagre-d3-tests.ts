const gDagre = new dagreD3.graphlib.Graph();
const graph = gDagre.graph();

// has graph methods from dagre.d.ts
graph.setNode("a", {});
const num: number = 251 + graph.height + graph.width;
const predecessors: { [vertex: string]: string[] } = {};
const successors: { [vertex: string]: string[] } = {};

predecessors["a"] = graph.predecessors("a");
successors["a"] = graph.successors("a");
graph.transition = (selection: d3.Selection<any>) => {
    return d3.transition();
};

const render = new dagreD3.render();
const svg = d3.select("svg");
render.arrows()["arrowType"] = (parent: d3.Selection<any>, id: string, edge: dagre.Edge, type: string) => {};
render(svg, graph);
