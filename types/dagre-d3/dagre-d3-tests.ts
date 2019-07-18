const graph = new dagreD3.graphlib.Graph();

// has graph methods from dagre.d.ts
graph.setNode("a", {});
graph.transition = (selection: d3.Selection<any>) => {
    return d3.transition();
};

const render = new dagreD3.render();
const svg = d3.select("svg");
render.arrows()['arrowType'] = (parent: d3.Selection<any>, id: string, edge: dagre.graphlib.Edge, type: string) => {};
render.shapes()['shapeName'] = (parent: d3.Selection<any>, bbox: any, node: dagre.graphlib.Node) => {};
render(svg, graph);
